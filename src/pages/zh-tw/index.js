import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("zh-tw");
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
                <Link to="/zh-tw/" className="flex items-center">
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
                  to="/zh-tw/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/zh-tw/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/zh-tw/youtube-to-mp4/">
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
                        to="/zh-tw/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/zh-tw/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/zh-tw/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube 視頻下載器</h1>
            <p>免費下載 MP3 和 MP4 高質量 YouTube 視頻</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="在此處搜索或粘貼 youtube 鏈接..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  搜索
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              使用我們的服務即表示您
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;接受我們的條款。</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">最好的 YouTube 視頻下載器</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta 是最流行的 YouTube 下載器，可讓您免費下載 YouTube 視頻。無需安裝第三方應用程序和軟件即可將 YouTube
              視頻保存在您的個人設備上 您所需要的只是可靠的瀏覽器和互聯網連接。從
              YouTube、Facebook、Video、Dailymotion、優酷和其他社交分享網站下載並欣賞您喜愛的視頻，並享受您想要的質量。Y2meta
              提供了下載高清質量 YouTube 視頻的最安全方式，無需登錄或共享個人信息。
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              下載不同格式的 YouTube 音頻和視頻，如 MP3、WEBM、MP4、M4V、3GP、WMV、FLV、MO 等，以及不同的 MP3 比特率，包括
              64kbps、128kbps、192kbps、256kbps 和 320kbps。Y2meta 在您的電腦、手機、平板電腦和其他設備上運行流暢。這是一個簡單易用的
              YouTube 下載器。
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>如何使用 Y2meta 下載 YouTube 視頻？</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  打開 YouTube 網站並將要下載的 YouTube 網址複製到您的設備
                </li>
                <li className="mb-2.5">將復制的網址粘貼到 Y2meta 搜索框中，然後選擇 MP4 或 MP3 格式</li>
                <li className="mb-2.5">
                  等待幾秒鐘，直到轉換完成，然後按“下載”按鈕
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2元優勢</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">免費轉換和下載無限量的 YouTube 視頻</li>
                <li className="mb-2.5">下載和保存任何 YouTube 視頻的快捷方式</li>
                <li className="mb-2.5">我們的 YouTube 下載器與所有設備完全兼容</li>
                <li className="mb-2.5">它始終免費，無需註冊</li>
                <li className="mb-2.5">我們提供高質量的音視頻文件</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% 安全且免費</h3>
                <p>
                  Y2meta 提供完全免費從 YouTube 下載 mp3 和 mp4。此外，此 YouTube 視頻下載器完全安全，不受病毒和惡意軟件的侵害。
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">快速輕鬆地下載視頻</h3>
                <p>
                  Y2meta 工具可幫助您快速從 YouTube 下載 MP3 和 MP4。只需將復制的 YouTube 網址粘貼到搜索框中，然後單擊“轉換”按鈕
                  按照簡單的步驟下載 YouTube 視頻。
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">下載無限量的 YouTube 視頻</h3>
                <p>
                  使用此 Y2meta 下載器可以無限制地下載任意數量的 YouTube 視頻。它是完全免費的，不需要註冊和登錄。
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">支持多種質量</h3>
                <p>
                  Y2meta 提供多種音頻和視頻質量，因此您可以將 YouTube 視頻轉換為 MP3、3GP、MP4、WMA、M4A、FLV、WEBM、MO 格式。
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">常問問題</h2>
            <h3 className="mt-2.5 font-semibold">什麼是 Y2meta？</h3>
            <p>
              Y2meta 是最好的 YouTube 視頻下載器，可讓您快速免費地從 YouTube 下載視頻。此外，將 YouTube 轉換為高質量的 Mp3。
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta 是完全免費的嗎？</h3>
            <p>
              是的，Y2meta 可以完全免費使用和下載 YouTube 視頻。您無需支付任何訂閱費用，只需要您要在設備上下載的 YouTube 視頻
              URL。
            </p>
            <h3 className="mt-2.5 font-semibold">如何在 iPhone 上下載 YouTube 視頻？</h3>
            <p>
              iPhone 用戶的流程與全部使用略有不同。您需要在 iOS 13 上使用 Safari 瀏覽器或通過 Readdle 應用程序獲取文檔，所有過程與上述相同。
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta 從 YouTube 下載視頻安全嗎？</h3>
            <p>
              是的，使用我們的下載器下載 YouTube 視頻您不需要共享任何個人信息，也不需要在您的設備上安裝第三方應用程序和軟件。
            </p>
            <h3 className="mt-2.5 font-semibold">支持哪些視頻/音頻格式？</h3>
            <p>
              我們提供各種高質量格式，允許您下載 320kbps、256kbps、192kbps、128kbps、64kbps 比特率的 mp3 和
              720p、1080p、1440p、2160p 質量的 mp4。
            </p>
            <h3 className="mt-2.5 font-semibold">下載的 YouTube 視頻文件保存在我設備上的什麼位置？</h3>
            <p>
              將視頻從 YouTube 保存到您的計算機後，直接檢查瀏覽器中的“下載歷史記錄”或設備的“下載”文件夾。
            </p>
            <h3 className="mt-2.5 font-semibold">這個 YouTube 視頻下載器是否與所有設備兼容？</h3>
            <p>
              是的，Y2meta 支持在所有設備（如計算機、手機和平板電腦）上從 YouTube 下載視頻，並且可以在所有瀏覽器（如
              Chrome、Firefox、Microsoft Edge、Safari、Opera 等）上輕鬆運行。
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
    <html lang="zh-tw"/>
    <title>Y2meta - YouTube 下載器 |免費下載 YouTube 視頻</title>
    <meta
      name="description"
      content="Y2meta 是流行的免費 YouTube 下載器，無需安裝軟件即可免費下載 1080p、2160p、2k、4k、8k 的高質量 YouTube 視頻。"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="zh-tw"/>
    <meta property="og:title" content="Y2meta - YouTube 下載器 |免費下載 YouTube 視頻"/>
    <meta
      property="og:description"
      content="Y2meta 是流行的免費 YouTube 下載器，無需安裝軟件即可免費下載 1080p、2160p、2k、4k、8k 的高質量 YouTube 視頻。"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/zh-tw/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/zh-tw/"/>
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
