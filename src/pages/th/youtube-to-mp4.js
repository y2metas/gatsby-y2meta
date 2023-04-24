import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP4 = () => {
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
    {lang: "en", label: "English", path: "/youtube-to-mp4/"},
    {lang: "de", label: "Deutsch", path: "/de/youtube-to-mp4/"},
    {lang: "es", label: "Español", path: "/es/youtube-to-mp4/"},
    {lang: "fr", label: "Français", path: "/fr/youtube-to-mp4/"},
    {lang: "hi", label: "हिन्दी / Hindi", path: "/hi/youtube-to-mp4/"},
    {lang: "id", label: "Indonesian", path: "/id/youtube-to-mp4/"},
    {lang: "it", label: "Italiano", path: "/it/youtube-to-mp4/"},
    {lang: "ja", label: "ह日本語", path: "/ja/youtube-to-mp4/"},
    {lang: "ko", label: "한국어", path: "/ko/youtube-to-mp4/"},
    {lang: "my", label: "Myanmar (မြန်မာ)", path: "/my/youtube-to-mp4/"},
    {lang: "ms", label: "Malay", path: "/ms/youtube-to-mp4/"},
    {lang: "ph", label: "Filipino", path: "/tl-ph/youtube-to-mp4/"},
    {lang: "pt", label: "Português", path: "/pt/youtube-to-mp4/"},
    {lang: "ru", label: "Русский", path: "/ru/youtube-to-mp4/"},
    {lang: "th", label: "ไทย", path: "/th/youtube-to-mp4/"},
    {lang: "tr", label: "Türkçe", path: "/tr/youtube-to-mp4/"},
    {lang: "vi", label: "Tiếng Việt", path: "/vi/youtube-to-mp4/"},
    {lang: "zh-cn", label: "简体中文", path: "/zh-cn/youtube-to-mp4/"},
    {lang: "zh-tw", label: "繁體中文", path: "/zh-tw/youtube-to-mp4/"},
    {lang: "ar", label: "عربي", path: "/ar/youtube-to-mp4/"},
    {lang: "bn", label: "বাঙালি", path: "/bn/youtube-to-mp4/"},
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">โปรแกรมแปลง YouTube เป็น MP4</h1>
            <p>แปลงและดาวน์โหลด Youtube เป็น MP4 ฟรี</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">สุดยอดโปรแกรมแปลง Youtube เป็น MP4</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta เป็นเครื่องมือดาวน์โหลด YouTube ฟรีที่ช่วยให้คุณดาวน์โหลดวิดีโอ YouTube เป็นรูปแบบ MP4
              ได้ในเวลาไม่กี่วินาที เป็นวิธีที่ง่ายและรวดเร็วในการดาวน์โหลดวิดีโอ Mp4 จาก YouTube ดาวน์โหลดวิดีโอ
              YouTube ใดก็ได้ด้วยคุณภาพที่ดีที่สุดที่แตกต่างกัน เช่น 360p, 480p, 720p, 1080p, 4K HD และสูงสุด 8K
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              ใช้การดาวน์โหลดตัวแปลง YouTube ที่รวดเร็วและปลอดภัยและบันทึกวิดีโอ YouTube เป็น MP4, AVI และ MOV
              บนอุปกรณ์ของคุณโดยไม่ต้องลงทะเบียน ไม่ว่าคุณจะใช้พีซี แท็บเล็ต iPhone และโทรศัพท์ Android นอกจากนี้
              โปรแกรมดาวน์โหลด YouTube นี้ทำงานบนเว็บ คุณจึงไม่ต้องติดตั้งซอฟต์แวร์หรือแอพ ทำให้การเรียกดูง่ายขึ้นมาก
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>วิธีแปลงวิดีโอ Youtube เป็น MP4</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  วางลิงก์ YouTube หรือป้อนคำสำคัญในช่องค้นหา
                </li>
                <li className="mb-2.5">เลือก MP4 ที่มีคุณภาพที่คุณต้องการแปลงแล้วกดปุ่ม "ดาวน์โหลด"</li>
                <li className="mb-2.5">
                  รอสักครู่เพื่อให้การแปลงเป็น MP4 และดาวน์โหลดไปยังอุปกรณ์ของคุณ
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>ข้อดีของ Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">แปลงวิดีโอ YouTube เป็น mp4 โดยไม่มีข้อจำกัดได้มากเท่าที่คุณต้องการ</li>
                <li className="mb-2.5">วิธีที่ง่ายและรวดเร็วในการดาวน์โหลดและบันทึกวิดีโอ YouTube ในรูปแบบ HD</li>
                <li className="mb-2.5">เครื่องมือดาวน์โหลดวิดีโอ YouTube นี้ปลอดภัย 100%</li>
                <li className="mb-2.5">ดาวน์โหลดวิดีโอจาก YouTube ในรูปแบบคุณภาพสูงหลายรูปแบบ</li>
                <li className="mb-2.5">เครื่องมือดาวน์โหลด Y2meta ของเราฟรีโดยไม่ต้องลงทะเบียนและเข้าสู่ระบบ</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">การแปลงไม่ จำกัด และฟรี</h3>
                <p>
                  การใช้ YouTube เป็น MP4 ดาวน์โหลดวิดีโอ YouTube ได้มากเท่าที่คุณต้องการ
                  ไม่มีข้อจำกัดเกี่ยวกับคุณสมบัติและจำนวนการดาวน์โหลดวิดีโอจาก YouTube นอกจากนี้ยังไม่มีค่าใช้จ่าย
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">ใช้งานง่ายและรวดเร็ว</h3>
                <p>
                  การรบกวนที่เรียบง่ายและเป็นมิตรกับผู้ใช้ทำให้ YouTube MP4 Downloader นี้ใช้งานง่าย ดาวน์โหลดวิดีโอ MP4
                  จาก YouTube ได้อย่างรวดเร็วด้วยขั้นตอนง่ายๆ
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">ปลอดภัย 100%</h3>
                <p>
                  โปรแกรมแปลง YouTube เป็น MP4 ของเรามีความปลอดภัยอย่างเต็มที่ด้วย SSL Layer
                  ชั้นความปลอดภัยนี้ช่วยป้องกันไวรัสและมัลแวร์ ดังนั้นอย่ากังวลไปเลย ดาวน์โหลดวิดีโอ YouTube
                  ได้อย่างปลอดภัย
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">เข้ากันได้กับทุกอุปกรณ์</h3>
                <p>
                  ตัวแปลง YouTube เป็น MP4 ของเราเป็นแอพบนเว็บดังนั้นจึงรองรับอุปกรณ์และเบราว์เซอร์ทั้งหมด
                  ไม่ต้องติดตั้งซอฟต์แวร์และแอพ
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">คำถามที่พบบ่อย</h2>
            <h3 className="mt-2.5 font-semibold">ฉันต้องจ่ายเงินเพื่อแปลงวิดีโอ YouTube เป็น mp4 หรือไม่</h3>
            <p>
              ไม่ ใช้เครื่องมือดาวน์โหลด YouTube นี้ฟรีทั้งหมด และคุณไม่จำเป็นต้องใช้เงินในการแปลง นอกจากนี้
              ไม่มีการจำกัดคุณสมบัติสำหรับ YouTube เป็น MP4
            </p>
            <h3 className="mt-2.5 font-semibold">วิธีดาวน์โหลดและแปลงวิดีโอ YouTube เป็น MP4</h3>
            <p>เปิดเว็บไซต์ YouTube และคัดลอก URL วิดีโอ YouTube ที่คุณต้องการดาวน์โหลด</p>
            <p>วาง URL ลงในช่องค้นหาบน YouTube MP4 Downloader นี้</p>
            <p>เลือกคุณภาพแล้วกดปุ่มดาวน์โหลด</p>
            <h3 className="mt-2.5 font-semibold">ตัวแปลง Youtube เป็น mp4 นี้ทำงานบนอุปกรณ์ทั้งหมดหรือไม่</h3>
            <p>ตัวแปลง YouTube เป็น MP4 ของเราเป็นแอปบนเว็บ ดังนั้นจึงเข้ากันได้กับอุปกรณ์และเบราว์เซอร์ทั้งหมด
              ไม่ต้องติดตั้งซอฟต์แวร์และแอพ</p>
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

export default YouTubeToMP4;

export const Head = () => (
  <>
    <html lang="th"/>
    <title>โปรแกรมแปลง YouTube เป็น MP4 ฟรีในรูปแบบ HD</title>
    <meta
      name="description"
      content="แปลงและดาวน์โหลด YouTube เป็น MP4 ใน 1080p, 2k, 4k HD ฟรี การใช้ YouTube เป็น MP4 Downloader และ Online Converter สำหรับ PC, Mobile, iphone"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="th"/>
    <meta property="og:title" content="โปรแกรมแปลง YouTube เป็น MP4 ฟรีในรูปแบบ HD"/>
    <meta
      property="og:description"
      content="แปลงและดาวน์โหลด YouTube เป็น MP4 ใน 1080p, 2k, 4k HD ฟรี การใช้ YouTube เป็น MP4 Downloader และ Online Converter สำหรับ PC, Mobile, iphone"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/th/youtube-to-mp4/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/th/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="en" href="https://y2meta.mobi/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="de" href="https://y2meta.mobi/de/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="es" href="https://y2meta.mobi/es/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="fr" href="https://y2meta.mobi/fr/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="hi" href="https://y2meta.mobi/hi/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="id" href="https://y2meta.mobi/id/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="it" href="https://y2meta.mobi/it/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ja" href="https://y2meta.mobi/ja/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ko" href="https://y2meta.mobi/ko/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="my" href="https://y2meta.mobi/my/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ms" href="https://y2meta.mobi/ms/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ph" href="https://y2meta.mobi/tl-ph/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="pt" href="https://y2meta.mobi/pt/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ru" href="https://y2meta.mobi/ru/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="th" href="https://y2meta.mobi/th/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="tr" href="https://y2meta.mobi/tr/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="vi" href="https://y2meta.mobi/vi/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="zh-cn" href="https://y2meta.mobi/zh-cn/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="zh-tw" href="https://y2meta.mobi/zh-tw/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ar" href="https://y2meta.mobi/ar/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="bn" href="https://y2meta.mobi/bn/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="x-default" href="https://y2meta.mobi/youtube-to-mp4/"/>
  </>
)
