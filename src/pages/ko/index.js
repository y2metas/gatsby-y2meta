import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("ko");
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
                <Link to="/ko/" className="flex items-center">
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
                  to="/ko/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/ko/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/ko/youtube-to-mp4/">
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
                        to="/ko/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/ko/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/ko/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube 비디오 다운로더</h1>
            <p>YouTube 동영상을 MP3 및 MP4 고품질로 무료로 다운로드하세요.</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="여기에서 YouTube 링크를 검색하거나 붙여넣으세요..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Search
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              당사 서비스를 사용함으로써 귀하는 당사의
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;이용 약관에 동의하는 것입니다.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">최고의 YouTube 비디오 다운로더</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta는 YouTube 동영상을 무료로 다운로드할 수 있는 가장 인기 있는 YouTube 다운로더입니다. 개인 기기에 YouTube 동영상을 저장하기 위해 타사 애플리케이션 및
              소프트웨어를 설치할 필요가 없습니다. 신뢰할 수 있는 브라우저와 인터넷 연결이 필요합니다. YouTube, Facebook, Video, Dailymotion, Youku 및 기타 소셜 공유
              웹사이트에서 좋아하는 비디오를 원하는 품질로 다운로드하여 즐기십시오. Y2meta는 HD 품질의 YouTube 비디오를 다운로드하는 가장 안전한 방법을 제공하며 로그인하거나 개인 정보를
              공유할 필요가 없습니다.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO 등과 같은 다양한 형식과 64kbps, 128kbps, 192kbps, 256kbps 및 320kbps를 포함한 다양한
              MP3 비트 전송률로 YouTube 오디오 및 비디오를 다운로드하세요. Y2meta는 컴퓨터, 모바일, 태블릿 및 기타 장치에서 원활하게 작동합니다. 간단하고 쉬운 YouTube
              다운로더입니다.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Y2meta를 사용하여 YouTube 동영상을 다운로드하는 방법은 무엇입니까?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube 웹사이트를 열고 장치에 다운로드하려는 YouTube URL을 복사합니다.
                </li>
                <li className="mb-2.5">복사한 URL을 Y2meta 검색 상자에 붙여넣고 MP4 또는 MP3 형식을 선택합니다.</li>
                <li className="mb-2.5">
                  변환이 완료될 때까지 몇 초간 기다린 후 "다운로드" 버튼을 누릅니다.
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta의 장점</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">무제한 YouTube 동영상을 무료로 변환 및 다운로드</li>
                <li className="mb-2.5">모든 YouTube 비디오를 다운로드하고 저장하는 빠르고 쉬운 방법</li>
                <li className="mb-2.5">모든 기기와 완벽하게 호환되는 YouTube 다운로더</li>
                <li className="mb-2.5">항상 무료이며 등록할 필요가 없습니다.</li>
                <li className="mb-2.5">우리는 고품질 오디오 및 비디오 파일을 제공합니다</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% 안전하고 무료</h3>
                <p>
                  Y2meta는 YouTube에서 완전히 무료로 mp3 및 mp4 다운로드를 제공합니다. 또한 이 YouTube 비디오 다운로더는 바이러스 및 맬웨어로부터 완전히 안전하고 안전합니다.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">비디오를 빠르고 쉽게 다운로드</h3>
                <p>
                  Y2meta 도구를 사용하면 YouTube에서 MP3 및 MP4를 빠르게 다운로드할 수 있습니다. 복사한 YouTube URL을 검색창에 붙여넣고 "변환" 버튼을 클릭하기만 하면
                  됩니다. YouTube 비디오를 다운로드하는 간단한 단계를 따르십시오.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">무제한 YouTube 동영상 다운로드</h3>
                <p>
                  이 Y2meta 다운로더를 사용하여 제한 없이 원하는 만큼 YouTube 동영상을 다운로드하세요. 완전 무료이며 등록 및 로그인이 필요하지 않습니다.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">여러 품질 지원</h3>
                <p>
                  Y2meta는 다양한 오디오 및 비디오 품질을 제공하므로 YouTube 비디오를 MP3, 3GP, MP4, WMA, M4A, FLV, WEBM, MO 형식 등으로 변환할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">자주하는 질문</h2>
            <h3 className="mt-2.5 font-semibold">Y2메타란?</h3>
            <p>
              Y2meta는 YouTube에서 비디오를 빠르고 무료로 다운로드할 수 있는 최고의 YouTube 비디오 다운로더입니다. 또한 YouTube를 고품질의 MP3로 변환하십시오.
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta는 완전 무료인가요?</h3>
            <p>
              예, Y2meta는 YouTube 동영상을 완전히 무료로 사용하고 다운로드할 수 있습니다. 구독료를 지불할 필요가 없으며 기기에 다운로드하려는 YouTube 동영상 URL만 있으면 됩니다.
            </p>
            <h3 className="mt-2.5 font-semibold">iPhone에 YouTube 동영상을 다운로드하는 방법은 무엇입니까?</h3>
            <p>
              iPhone 사용자의 프로세스는 All use와 약간 다릅니다. iOS 13에서 Safari 브라우저를 사용하거나 Readdle 앱으로 문서를 가져와야 하며 모든 프로세스는 위와 동일합니다.
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta는 YouTube에서 동영상을 다운로드해도 안전합니까?</h3>
            <p>
              네, 저희 다운로더를 사용하여 YouTube 동영상을 다운로드하세요. 개인 정보를 공유할 필요가 없으며 기기에 타사 애플리케이션과 소프트웨어를 설치할 필요도 없습니다.
            </p>
            <h3 className="mt-2.5 font-semibold">지원되는 비디오/오디오 형식은 무엇입니까?</h3>
            <p>
              다양한 고품질 형식을 제공하며 320kbps, 256kbps, 192kbps, 128kbps, 64kbps 비트 전송률의 mp3 및 720p, 1080p, 1440p, 2160p 품질의
              mp4를 다운로드할 수 있습니다.
            </p>
            <h3 className="mt-2.5 font-semibold">내 기기에서 다운로드한 YouTube 동영상 파일은 어디에 저장되나요?</h3>
            <p>
              비디오가 Youtube에서 컴퓨터에 저장된 후 브라우저 "다운로드 기록" 또는 장치의 "다운로드" 폴더에서 직접 확인하십시오.
            </p>
            <h3 className="mt-2.5 font-semibold">이 YouTube 동영상 다운로더는 모든 기기와 호환되나요?</h3>
            <p>
              예, Y2meta는 컴퓨터, 모바일 및 태블릿과 같은 모든 장치와 Chrome, Firefox, Microsoft Edge, Safari, Opera 등과 같은 모든 유형의 브라우저에서
              원활하게 작동하는 YouTube에서 비디오 다운로드를 지원합니다.
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
    <html lang="ko"/>
    <title>Y2meta - YouTube 다운로더 | YouTube 비디오 무료 다운로드</title>
    <meta
      name="description"
      content="Y2meta는 인기 있는 무료 YouTube 다운로더로 소프트웨어 설치 없이 1080p, 2160p, 2k, 4k, 8k의 고품질로 YouTube 비디오를 무료로 다운로드할 수 있습니다."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="ko"/>
    <meta property="og:title" content="Y2meta - YouTube 다운로더 | YouTube 비디오 무료 다운로드"/>
    <meta
      property="og:description"
      content="Y2meta는 인기 있는 무료 YouTube 다운로더로 소프트웨어 설치 없이 1080p, 2160p, 2k, 4k, 8k의 고품질로 YouTube 비디오를 무료로 다운로드할 수 있습니다."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/ko/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/ko/"/>
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
