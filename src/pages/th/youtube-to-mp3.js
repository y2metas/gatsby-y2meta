import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP3 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("th");
  const [openLanguage, setOpenLanguage] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setOpenLanguage(!openLanguage)
  };

  const isYtUrl = (url) => {
    const ytRegex = new RegExp(
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/g
    );
    return ytRegex.test(url)
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleClickEnter = (e) => {
    if (e.keyCode === 13) {
      if (isYtUrl(inputValue)) {
        navigate("/download", {state: {url: inputValue}});
      } else {
        navigate("/search", {state: {url: inputValue}});
      }
    }
  };

  const handleClickConvert = () => {
    if (isYtUrl(inputValue)) {
      navigate("/download", {state: {url: inputValue}});
    } else {
      navigate("/search", {state: {url: inputValue}});
    }
  };

  const languageOptions = [
    {lang: "en", label: "English", path: "/youtube-to-mp3/"},
    {lang: "de", label: "Deutsch", path: "/de/youtube-to-mp3/"},
    {lang: "es", label: "Español", path: "/es/youtube-to-mp3/"},
    {lang: "fr", label: "Français", path: "/fr/youtube-to-mp3/"},
    {lang: "hi", label: "हिन्दी / Hindi", path: "/hi/youtube-to-mp3/"},
    {lang: "id", label: "Indonesian", path: "/id/youtube-to-mp3/"},
    {lang: "it", label: "Italiano", path: "/it/youtube-to-mp3/"},
    {lang: "ja", label: "ह日本語", path: "/ja/youtube-to-mp3/"},
    {lang: "ko", label: "한국어", path: "/ko/youtube-to-mp3/"},
    {lang: "my", label: "Myanmar (မြန်မာ)", path: "/my/youtube-to-mp3/"},
    {lang: "ms", label: "Malay", path: "/ms/youtube-to-mp3/"},
    {lang: "ph", label: "Filipino", path: "/tl-ph/youtube-to-mp3/"},
    {lang: "pt", label: "Português", path: "/pt/youtube-to-mp3/"},
    {lang: "ru", label: "Русский", path: "/ru/youtube-to-mp3/"},
    {lang: "th", label: "ไทย", path: "/th/youtube-to-mp3/"},
    {lang: "tr", label: "Türkçe", path: "/tr/youtube-to-mp3/"},
    {lang: "vi", label: "Tiếng Việt", path: "/vi/youtube-to-mp3/"},
    {lang: "zh-cn", label: "简体中文", path: "/zh-cn/youtube-to-mp3/"},
    {lang: "zh-tw", label: "繁體中文", path: "/zh-tw/youtube-to-mp3/"},
    {lang: "ar", label: "عربي", path: "/ar/youtube-to-mp3/"},
    {lang: "bn", label: "বাঙালি", path: "/bn/youtube-to-mp3/"},
  ];

  return (
    <>
      <div className="mx-auto md:max-w-[890px] px-3">
        <header className="h-[68px] flex items-center top-0">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="lg:w-0 lg:flex-1">
                <Link to="/th/" className="flex items-center">
                  <StaticImage src="../../images/logo.png" loading="eager" alt="y2meta" width={50} quality={50}/>
                  <h1 className="text-2xl font-semibold w-auto z-50 pl-2">y2meta</h1>
                </Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle Menu"
                  type="button"
                  className="inline-flex items-center justify-center border border-solid border-heading py-1 px-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <StaticImage src="../../images/mobile.svg" loading="eager" alt="y2meta" width={25} quality={25}/>
                </button>
              </div>
              <nav className="hidden md:flex">
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/th/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/th/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/th/youtube-to-mp4/">
                  YouTube to MP4
                </Link>
                <div className="relative top-[21px]">
                  <button
                    className="text-sm px-3.5 text-heading hover:text-heading-clr"
                    onClick={() => setOpenLanguage(!openLanguage)}>
                    {languageOptions.find((option) => option.lang === selectedLanguage)?.label || "Language"}
                  </button>
                  {openLanguage &&
                    <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-lg">
                      {languageOptions.map((option) => (
                        <Link
                          key={option.lang}
                          to={option.path}
                          className="block px-4 py-0.5 text-gray-800 hover:bg-gray-200"
                          onClick={() => handleLanguageChange(option.lang)}
                        >
                          {option.label}
                        </Link>
                      ))}
                    </div>
                  }
                </div>
              </nav>
            </div>
          </div>
          <div
            className="absolute top-16 inset-x-0 transition transform origin-top-right md:!hidden z-20"
            style={{display: open ? "block" : "none"}}>
            <div className="shadow-lg">
              <div className="shadow-xs bg-background divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div>
                    <nav className="grid gap-y-8">
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/th/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/th/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/th/youtube-to-mp4/">
                        YouTube to MP4
                      </Link>
                      <div className="relative">
                        <button
                          className="-m-3 p-3 flex items-center text-heading hover:text-heading-clr transition duration-300"
                          onClick={() => setOpenLanguage(!openLanguage)}>
                          {languageOptions.find((option) => option.lang === selectedLanguage)?.label || "Language"}
                        </button>
                        {openLanguage &&
                          <div className="absolute mt-2 py-2 w-40 bg-white rounded-md shadow-lg">
                            {languageOptions.map((option) => (
                              <Link
                                key={option.lang}
                                to={option.path}
                                className="block px-4 py-0.5 text-gray-800 hover:bg-gray-200"
                                onClick={() => handleLanguageChange(option.lang)}
                              >
                                {option.label}
                              </Link>
                            ))}
                          </div>
                        }
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="bg-white p-4 border border-solid rounded border-current border-solid-clr container mx-auto">
          <div className="md:py-8 py-7 text-center">
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">โปรแกรมแปลง YouTube เป็น MP3</h1>
            <p>แปลงและดาวน์โหลดวิดีโอ YouTube เป็น MP3 ฟรี</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="ค้นหาหรือวางลิงค์ youtube ที่นี่..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  ค้นหา
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              การใช้บริการของเราถือว่าคุณยอมรับ
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;ข้อกำหนดและเงื่อนไข ของเรา</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">สุดยอดโปรแกรมแปลง YouTube เป็น MP3</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta เป็นตัวแปลง YouTube เป็น MP3 ที่ง่ายและรวดเร็ว โปรแกรมดาวน์โหลด YouTube เป็น MP3
              ยอดนิยมของเราช่วยให้คุณแปลงและดาวน์โหลดวิดีโอ YouTube เป็น MP3
              ได้อย่างง่ายดายด้วยคุณภาพสูงและไม่มีค่าใช้จ่าย นอกจากนี้คุณยังสามารถดาวน์โหลด mp3
              ด้วยตัวเลือกคุณภาพที่หลากหลาย เช่น 64kbps, 128kbps, 192kbps และสูงสุด 320kbps
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              โปรแกรมแปลง YouTube เป็น Mp3 นี้ทำงานได้อย่างราบรื่นบนอุปกรณ์ทั้งหมด รวมถึงเดสก์ท็อป แล็ปท็อป แท็บเล็ต
              และสมาร์ทโฟนโดยไม่ต้องติดตั้งแอปพลิเคชันหรือซอฟต์แวร์ใดๆ ขั้นตอนการแปลงนั้นรวดเร็วและสะดวกสบาย เพียงวาง
              URL ของ YouTube และขั้นตอนง่ายๆ ไม่กี่ขั้นตอน ไฟล์ youtube mp3
              ของคุณก็พร้อมสำหรับการดาวน์โหลดในไม่กี่วินาที เป็นโปรแกรมแปลง YouTube MP3 ที่ปลอดภัยโดยสิ้นเชิง
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>วิธีแปลงวิดีโอ YouTube เป็น MP3 ออนไลน์ฟรี</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  วาง URL ของวิดีโอ YouTube หรือใส่คำสำคัญในช่องค้นหา จากนั้นคลิกปุ่ม "ค้นหา"
                </li>
                <li className="mb-2.5">เลือกคุณภาพ MP3 แล้วกดปุ่ม "ดาวน์โหลด"</li>
                <li className="mb-2.5">
                  รอสักครู่และหลังจากการแปลง Mp3 สำเร็จให้คลิกที่ปุ่มดาวน์โหลด
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>ข้อดีของ Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">แปลงและดาวน์โหลดไฟล์ MP3 จาก YouTube โดยไม่มีข้อจำกัดใดๆ</li>
                <li className="mb-2.5">ไม่จำเป็นต้องติดตั้งซอฟต์แวร์ใด ๆ และไม่ต้องลงทะเบียน</li>
                <li className="mb-2.5">โปรแกรมแปลง YouTube ปลอดภัย 100%</li>
                <li className="mb-2.5">เข้ากันได้กับเบราว์เซอร์และอุปกรณ์ทั้งหมด</li>
                <li className="mb-2.5">แปลง Youtube เป็น mp3 ฟรีพร้อมเสียงคุณภาพสูง</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">การแปลงที่ง่ายและรวดเร็ว</h3>
                <p>
                  ดาวน์โหลด MP3 จาก YouTube ได้ง่ายๆ เพียงป้อน URL ของ YouTube ที่คุณต้องการดาวน์โหลด
                  แล้วคลิกปุ่มดาวน์โหลด ไฟล์ที่แปลงของคุณพร้อมในไม่กี่วินาที
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">ให้รูปแบบคุณภาพสูง</h3>
                <p>
                  เราเสนอการแปลง YouTube เป็น mp3 ในรูปแบบคุณภาพสูง เช่น 64kbps, 128kbps, 192kbps, 256kbps และ 320 kbps
                  คุณสามารถเลือกและดาวน์โหลดได้ตามความต้องการ
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta download" width={50}
                           quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">การแปลงโดยไม่มีข้อ จำกัด</h3>
                <p>
                  แปลงวิดีโอ YouTube เป็น MP3 โดยไม่มีข้อจำกัดโดยไม่มีค่าใช้จ่าย ไม่จำเป็นต้องติดตั้งซอฟต์แวร์หรือแอพใด
                  ๆ เพื่อดาวน์โหลด Mp3 จาก Youtube
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">เข้ากันได้กับทุกแพลตฟอร์ม</h3>
                <p>
                  โปรแกรมแปลง YouTube ของเราเข้ากันได้กับอุปกรณ์ทุกประเภท พีซี แท็บเล็ต iPhone โทรศัพท์ Android ฯลฯ
                  นอกจากนี้ Y2meta ยังรองรับเบราว์เซอร์ทั้งหมดรวมถึง Chrome, Microsoft Edge, Firefox, Opera และอื่น ๆ
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">คำถามที่พบบ่อย</h2>
            <h3 className="mt-2.5 font-semibold">ตัวแปลง YouTube เป็น MP3 นี้ใช้งานได้ฟรีหรือไม่</h3>
            <p>
              ใช่ ตัวแปลง Y2meta ของเราสามารถดาวน์โหลด Mp3 จาก YouTube ได้ฟรีโดยไม่ต้องลงทะเบียนบัญชี
            </p>
            <h3 className="mt-2.5 font-semibold">ฉันสามารถใช้ Youtube นี้เป็น mp3 บนอุปกรณ์ทั้งหมดได้หรือไม่</h3>
            <p>
              ใช่ แน่นอน ตัวแปลง YouTube เป็น Mp3 นี้รองรับอุปกรณ์ทุกประเภท รวมถึงคอมพิวเตอร์ มือถือ และแท็บเล็ต
            </p>
            <h3 className="mt-2.5 font-semibold">จะดาวน์โหลด MP3 จากวิดีโอ YouTube ได้อย่างไร</h3>
            <p>คัดลอกลิงค์วิดีโอ Youtube ที่คุณต้องการแปลง YouTube เป็น mp3</p>
            <p>วาง URL ของ YouTube ลงในช่องค้นหา</p>
            <p>กดปุ่มค้นหาจากนั้นเลือก Mp3 และคลิกที่ปุ่มแปลง</p>
            <p>รอสักครู่เพื่อให้การแปลงเสร็จสมบูรณ์ จากนั้นคลิกปุ่ม "ดาวน์โหลด"</p>
            <h3 className="mt-2.5 font-semibold">จำนวนการดาวน์โหลด Mp3 จาก YouTube สูงสุดคือเท่าใด</h3>
            <p>
              คุณสามารถแปลง YouTube เป็น Mp3 ได้ไม่จำกัดและไม่มีข้อจำกัดใดๆ เมื่อใช้โปรแกรมแปลง YouTube นี้
              คุณลักษณะทั้งหมดไม่มีค่าใช้จ่ายและไม่มีข้อ จำกัด
            </p>
            <h3 className="mt-2.5 font-semibold">ฉันจำเป็นต้องติดตั้งส่วนขยายของเบราว์เซอร์หรือซอฟต์แวร์หรือไม่</h3>
            <p>
              ไม่ โปรแกรมแปลง YouTube ของเราทำงานบนเว็บ คุณจึงไม่ต้องติดตั้งซอฟต์แวร์หรือส่วนขยายใดๆ
              คุณเพียงแค่ต้องมีเว็บเบราว์เซอร์และการเชื่อมต่ออินเทอร์เน็ตที่เชื่อถือได้
            </p>
            <h3 className="mt-2.5 font-semibold">การดาวน์โหลด mp3 จาก YouTube โดยใช้ตัวแปลง YouTube
              นี้ปลอดภัยหรือไม่</h3>
            <p>
              ใช่ ตัวแปลง Youtube เป็น Mp3 ของเราปลอดภัยด้วยเลเยอร์ SSL
              ที่ทำให้แน่ใจว่าผู้คนเหล่านั้นสามารถดาวน์โหลดวิดีโอได้อย่างปลอดภัย เราตรวจสอบความปลอดภัยตัวแปลง YouTube
              เป็น Mp3 ทุกวันเพื่อความปลอดภัยจากไวรัสและมัลแวร์
            </p>
          </div>
        </section>
      </div>
      <footer>
        <div className="md:py-14 py-5	text-sm	text-center border-solid	border-y border-inherit">
          <p className="mb-5">@2023 y2meta.mobi</p>
          <ul className="flex justify-center">
            <li><Link className="mx-2" to="/about-us/">About</Link></li>
            <li><Link className="mx-2" to="/contact/">Contact</Link></li>
            <li><Link className="mx-2" to="/terms-condition/">Terms of Service</Link></li>
            <li><Link className="mx-2" to="/privacy-policy/">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default YouTubeToMP3;


export const Head = () => (
  <>
    <html lang="th"/>
    <title>โปรแกรมแปลง YouTube เป็น MP3 - Y2meta</title>
    <meta
      name="description"
      content="Y2meta เป็นโปรแกรมแปลง YouTube เป็น MP3 ฟรี อนุญาต MP3 จาก YouTube ฟรีบนพีซี iPhone และ Android โดยไม่ต้องติดตั้งซอฟต์แวร์"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="th"/>
    <meta property="og:title" content="โปรแกรมแปลง YouTube เป็น MP3 - Y2meta"/>
    <meta
      property="og:description"
      content="Y2meta เป็นโปรแกรมแปลง YouTube เป็น MP3 ฟรี อนุญาต MP3 จาก YouTube ฟรีบนพีซี iPhone และ Android โดยไม่ต้องติดตั้งซอฟต์แวร์"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/th/youtube-to-mp3/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/th/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="en" href="https://y2meta.mobi/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="de" href="https://y2meta.mobi/de/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="es" href="https://y2meta.mobi/es/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="fr" href="https://y2meta.mobi/fr/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="hi" href="https://y2meta.mobi/hi/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="id" href="https://y2meta.mobi/id/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="it" href="https://y2meta.mobi/it/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ja" href="https://y2meta.mobi/ja/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ko" href="https://y2meta.mobi/ko/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="my" href="https://y2meta.mobi/my/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ms" href="https://y2meta.mobi/ms/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ph" href="https://y2meta.mobi/tl-ph/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="pt" href="https://y2meta.mobi/pt/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ru" href="https://y2meta.mobi/ru/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="th" href="https://y2meta.mobi/th/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="tr" href="https://y2meta.mobi/tr/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="vi" href="https://y2meta.mobi/vi/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="zh-cn" href="https://y2meta.mobi/zh-cn/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="zh-tw" href="https://y2meta.mobi/zh-tw/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="ar" href="https://y2meta.mobi/ar/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="bn" href="https://y2meta.mobi/bn/youtube-to-mp3/"/>
    <link rel="alternate" hrefLang="x-default" href="https://y2meta.mobi/youtube-to-mp3/"/>
  </>
)