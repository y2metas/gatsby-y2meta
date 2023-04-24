import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
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
    {lang: "en", label: "English", path: "/"},
    {lang: "de", label: "Deutsch", path: "/de/"},
    {lang: "es", label: "Español", path: "/es/"},
    {lang: "fr", label: "Français", path: "/fr/"},
    {lang: "hi", label: "हिन्दी / Hindi", path: "/hi/"},
    {lang: "id", label: "Indonesian", path: "/id/"},
    {lang: "it", label: "Italiano", path: "/it/"},
    {lang: "ja", label: "ह日本語", path: "/ja/"},
    {lang: "ko", label: "한국어", path: "/ko/"},
    {lang: "my", label: "Myanmar (မြန်မာ)", path: "/my/"},
    {lang: "ms", label: "Malay", path: "/ms/"},
    {lang: "ph", label: "Filipino", path: "/tl-ph/"},
    {lang: "pt", label: "Português", path: "/pt/"},
    {lang: "ru", label: "Русский", path: "/ru/"},
    {lang: "th", label: "ไทย", path: "/th/"},
    {lang: "tr", label: "Türkçe", path: "/tr/"},
    {lang: "vi", label: "Tiếng Việt", path: "/vi/"},
    {lang: "zh-cn", label: "简体中文", path: "/zh-cn/"},
    {lang: "zh-tw", label: "繁體中文", path: "/zh-tw/"},
    {lang: "ar", label: "عربي", path: "/ar/"},
    {lang: "bn", label: "বাঙালি", path: "/bn/"},
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
                    <nav className="grid gap-y-4">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - เครื่องมือดาวน์โหลดวิดีโอ YouTube</h1>
            <p>ดาวน์โหลดวิดีโอ YouTube เป็น MP3 และ MP4 คุณภาพสูงได้ฟรี</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">ดาวน์โหลดวิดีโอ YouTube ที่ดีที่สุด</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta เป็นตัวดาวน์โหลด YouTube ที่ได้รับความนิยมสูงสุดซึ่งให้คุณดาวน์โหลดวิดีโอ YouTube ได้ฟรี
              ไม่จำเป็นต้องติดตั้งแอปพลิเคชันและซอฟต์แวร์ของบุคคลที่สามเพื่อบันทึกวิดีโอ YouTube บนอุปกรณ์ส่วนตัวของคุณ
              เพียงแค่คุณต้องการเบราว์เซอร์ที่เชื่อถือได้และการเชื่อมต่ออินเทอร์เน็ต
              เพลิดเพลินกับการดาวน์โหลดวิดีโอโปรดของคุณจาก YouTube, Facebook, Video, Dailymotion, Youku
              และเว็บไซต์แชร์โซเชียลอื่นๆ ด้วยคุณภาพที่คุณต้องการ Y2meta มอบวิธีที่ปลอดภัยที่สุดในการดาวน์โหลดวิดีโอ
              YouTube ด้วยคุณภาพระดับ HD และไม่ต้องลงชื่อเข้าใช้หรือแชร์ข้อมูลส่วนบุคคล
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              ดาวน์โหลดเสียงและวิดีโอ YouTube ในรูปแบบต่างๆ เช่น MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO เป็นต้น
              และอัตราบิต MP3 ต่างๆ เช่น 64kbps, 128kbps, 192kbps, 256kbps และ 320kbps Y2meta
              ทำงานได้อย่างราบรื่นบนคอมพิวเตอร์ มือถือ แท็บเล็ต และอุปกรณ์อื่นๆ มันเป็นเครื่องมือดาวน์โหลด YouTube
              ที่ง่ายและสะดวก
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>จะดาวน์โหลดวิดีโอ YouTube โดยใช้ Y2meta ได้อย่างไร</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  เปิดเว็บไซต์ YouTube และคัดลอก URL ของ YouTube ที่คุณต้องการดาวน์โหลดไปยังอุปกรณ์ของคุณ
                </li>
                <li className="mb-2.5">วาง URL ที่คัดลอกลงในช่องค้นหา Y2meta แล้วเลือกรูปแบบ MP4 หรือ MP3</li>
                <li className="mb-2.5">
                  รอสักครู่จนกระทั่งการแปลงเสร็จสิ้นแล้วกดปุ่ม "ดาวน์โหลด"
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>ข้อดีของ Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">แปลงและดาวน์โหลดวิดีโอ YouTube ไม่จำกัดค่าใช้จ่าย</li>
                <li className="mb-2.5">วิธีที่ง่ายและรวดเร็วในการดาวน์โหลดและบันทึกวิดีโอ YouTube</li>
                <li className="mb-2.5">เครื่องมือดาวน์โหลด YouTube ของเราเข้ากันได้อย่างสมบูรณ์กับอุปกรณ์ทั้งหมด</li>
                <li className="mb-2.5">ฟรีเสมอและไม่ต้องลงทะเบียน</li>
                <li className="mb-2.5">เราให้บริการไฟล์เสียงและวิดีโอคุณภาพสูง</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">ปลอดภัย 100% และฟรี</h3>
                <p>
                  Y2meta ให้ดาวน์โหลด mp3 และ mp4 จาก YouTube ฟรีทั้งหมด นอกจากนี้โปรแกรมดาวน์โหลดวิดีโอ YouTube
                  นี้ปลอดภัยจากไวรัสและมัลแวร์โดยสิ้นเชิง
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">ดาวน์โหลดวิดีโออย่างรวดเร็วและง่ายดาย</h3>
                <p>
                  เครื่องมือ Y2meta ช่วยให้คุณดาวน์โหลด MP3 และ MP4 จาก YouTube ได้อย่างรวดเร็ว เพียงวาง URL ของ YouTube
                  ที่คัดลอกลงในช่องค้นหาแล้วคลิกปุ่ม "แปลง" เพียงทำตามขั้นตอนง่าย ๆ เพื่อดาวน์โหลดวิดีโอ YouTube
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">ดาวน์โหลดวิดีโอ YouTube ได้ไม่จำกัด</h3>
                <p>
                  การใช้ Y2meta Downloader นี้ดาวน์โหลดวิดีโอ YouTube ได้มากเท่าที่คุณต้องการโดยไม่มีข้อจำกัดใดๆ
                  ฟรีและไม่ต้องลงทะเบียนและเข้าสู่ระบบ
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">รองรับหลายคุณภาพ</h3>
                <p>
                  Y2meta ให้คุณภาพเสียงและวิดีโอที่หลากหลาย ดังนั้นคุณสามารถแปลงวิดีโอ YouTube เป็นรูปแบบ MP3, 3GP, MP4,
                  WMA, M4A, FLV, WEBM, MO เป็นต้น
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">คำถามที่พบบ่อย</h2>
            <h3 className="mt-2.5 font-semibold">Y2meta คืออะไร?</h3>
            <p>
              Y2meta เป็นตัวดาวน์โหลดวิดีโอ YouTube ที่ดีที่สุดที่ให้คุณดาวน์โหลดวิดีโอจาก YouTube ได้อย่างรวดเร็วและฟรี
              แปลง YouTube เป็น Mp3 ด้วยคุณภาพสูง
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta ฟรีทั้งหมดหรือไม่</h3>
            <p>
              ใช่ Y2meta ใช้งานและดาวน์โหลดวิดีโอ YouTube ได้ฟรี คุณไม่จำเป็นต้องจ่ายค่าสมัครใด ๆ เพียงแค่ต้องการ URL
              วิดีโอ YouTube ที่คุณต้องการดาวน์โหลดบนอุปกรณ์ของคุณ
            </p>
            <h3 className="mt-2.5 font-semibold">จะดาวน์โหลดวิดีโอ YouTube ไปยัง iPhone ได้อย่างไร</h3>
            <p>
              ขั้นตอนของผู้ใช้ iPhone นั้นแตกต่างจากการใช้งานทั้งหมดเล็กน้อย คุณต้องใช้เบราว์เซอร์ Safari บน iOS 13
              หรือรับแอป Documents by Readdle และกระบวนการทั้งหมดจะเหมือนกับข้างต้น
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta ปลอดภัยในการดาวน์โหลดวิดีโอจาก YouTube หรือไม่</h3>
            <p>
              ใช่ ดาวน์โหลดวิดีโอ YouTube โดยใช้โปรแกรมดาวน์โหลดของเรา คุณไม่จำเป็นต้องเปิดเผยข้อมูลส่วนบุคคลใด ๆ
              และไม่จำเป็นต้องติดตั้งแอปพลิเคชันและซอฟต์แวร์ของบุคคลที่สามบนอุปกรณ์ของคุณ
            </p>
            <h3 className="mt-2.5 font-semibold">รูปแบบวิดีโอ/เสียงที่รองรับคืออะไร?</h3>
            <p>
              เราให้บริการรูปแบบคุณภาพสูงที่หลากหลายและให้คุณดาวน์โหลด mp3 ใน 320kbps, 256kbps, 192kbps, 128kbps, 64kbps
              bit rate และ mp4 ที่มีคุณภาพ 720p, 1080p, 1440p, 2160p
            </p>
            <h3 className="mt-2.5 font-semibold">ไฟล์วิดีโอ YouTube ที่ดาวน์โหลดเก็บไว้บนอุปกรณ์ของฉันอยู่ที่ไหน</h3>
            <p>
              หลังจากบันทึกวิดีโอลงในคอมพิวเตอร์ของคุณจาก Youtube แล้ว ให้ตรวจสอบโดยตรงในเบราว์เซอร์
              "ประวัติการดาวน์โหลด" หรือโฟลเดอร์ "ดาวน์โหลด" ในอุปกรณ์ของคุณ
            </p>
            <h3 className="mt-2.5 font-semibold">โปรแกรมดาวน์โหลดวิดีโอ YouTube
              นี้เข้ากันได้กับอุปกรณ์ทั้งหมดหรือไม่</h3>
            <p>
              ใช่ Y2meta รองรับการดาวน์โหลดวิดีโอจาก YouTube ทำงานได้อย่างราบรื่นบนอุปกรณ์ทั้งหมด เช่น คอมพิวเตอร์
              มือถือ และแท็บเล็ต และเบราว์เซอร์ทุกประเภท เช่น Chrome, Firefox, Microsoft Edge, Safari, Opera และอื่นๆ
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

export default YouTubeDownloader;

export const Head = () => (
  <>
    <html lang="th"/>
    <title>Y2meta - เครื่องมือดาวน์โหลด YouTube | ดาวน์โหลดวิดีโอ YouTube ฟรี</title>
    <meta
      name="description"
      content="Y2meta เป็นตัวดาวน์โหลด YouTube ฟรียอดนิยมที่อนุญาตให้ดาวน์โหลดวิดีโอ YouTube ฟรีด้วยคุณภาพสูงใน 1080p, 2160p, 2k, 4k, 8k โดยไม่ต้องติดตั้งซอฟต์แวร์"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="th"/>
    <meta property="og:title" content="Y2meta - เครื่องมือดาวน์โหลด YouTube | ดาวน์โหลดวิดีโอ YouTube ฟรี"/>
    <meta
      property="og:description"
      content="Y2meta เป็นตัวดาวน์โหลด YouTube ฟรียอดนิยมที่อนุญาตให้ดาวน์โหลดวิดีโอ YouTube ฟรีด้วยคุณภาพสูงใน 1080p, 2160p, 2k, 4k, 8k โดยไม่ต้องติดตั้งซอฟต์แวร์"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/th/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/th/"/>
    <link rel="alternate" hrefLang="en" href="https://y2meta.mobi/"/>
    <link rel="alternate" hrefLang="de" href="https://y2meta.mobi/de/"/>
    <link rel="alternate" hrefLang="es" href="https://y2meta.mobi/es/"/>
    <link rel="alternate" hrefLang="fr" href="https://y2meta.mobi/fr/"/>
    <link rel="alternate" hrefLang="hi" href="https://y2meta.mobi/hi/"/>
    <link rel="alternate" hrefLang="id" href="https://y2meta.mobi/id/"/>
    <link rel="alternate" hrefLang="it" href="https://y2meta.mobi/it/"/>
    <link rel="alternate" hrefLang="ja" href="https://y2meta.mobi/ja/"/>
    <link rel="alternate" hrefLang="ko" href="https://y2meta.mobi/ko/"/>
    <link rel="alternate" hrefLang="my" href="https://y2meta.mobi/my/"/>
    <link rel="alternate" hrefLang="ms" href="https://y2meta.mobi/ms/"/>
    <link rel="alternate" hrefLang="tl-ph" href="https://y2meta.mobi/tl-ph/"/>
    <link rel="alternate" hrefLang="pt" href="https://y2meta.mobi/pt/"/>
    <link rel="alternate" hrefLang="ru" href="https://y2meta.mobi/ru/"/>
    <link rel="alternate" hrefLang="th" href="https://y2meta.mobi/th/"/>
    <link rel="alternate" hrefLang="tr" href="https://y2meta.mobi/tr/"/>
    <link rel="alternate" hrefLang="vi" href="https://y2meta.mobi/vi/"/>
    <link rel="alternate" hrefLang="zh-cn" href="https://y2meta.mobi/zh-cn/"/>
    <link rel="alternate" hrefLang="zh-tw" href="https://y2meta.mobi/zh-tw/"/>
    <link rel="alternate" hrefLang="ar" href="https://y2meta.mobi/ar/"/>
    <link rel="alternate" hrefLang="bn" href="https://y2meta.mobi/bn/"/>
    <link rel="alternate" hrefLang="x-default" href="https://y2meta.mobi/"/>
  </>
)
