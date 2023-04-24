import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP3 = () => {
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
                    <nav className="grid gap-y-8">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTube에서 MP3로 변환기</h1>
            <p>YouTube 동영상을 MP3로 무료로 변환 및 다운로드</p>
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
                  찾다
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">최고의 YouTube to MP3 변환기</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta는 빠르고 간단한 YouTube to MP3 변환기입니다. 인기 있는 YouTube to MP3 다운로더를 사용하면 YouTube 동영상을 고품질의 무료 MP3로 쉽게 변환하고
              다운로드할 수 있습니다. 또한 64kbps, 128kbps, 192kbps 및 최대 320kbps와 같은 여러 품질 옵션으로 mp3를 다운로드할 수 있습니다.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              이 YouTube to Mp3 변환기는 응용 프로그램이나 소프트웨어를 설치하지 않고도 데스크톱, 노트북, 태블릿 및 스마트폰을 포함한 모든 장치에서 원활하게 작동합니다. 변환 프로세스는
              빠르고 편리합니다. YouTube URL과 몇 가지 간단한 단계를 붙여넣기만 하면 YouTube mp3 파일을 몇 초 안에 다운로드할 수 있습니다. 완전히 안전하고 안전한 YouTube
              MP3 변환기입니다.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>무료로 YouTube 비디오를 MP3 온라인으로 변환하는 방법</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube 동영상 URL을 붙여넣거나 키워드를 검색창에 입력한 다음 "검색" 버튼을 클릭합니다.
                </li>
                <li className="mb-2.5">MP3 품질을 선택하고 "다운로드" 버튼을 누릅니다.</li>
                <li className="mb-2.5">
                  몇 초간 기다렸다가 성공적인 Mp3 변환 후 다운로드 버튼을 클릭합니다.
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta의 장점</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">제한 없이 YouTube에서 MP3 파일 변환 및 다운로드</li>
                <li className="mb-2.5">소프트웨어를 설치하거나 등록할 필요가 없습니다.</li>
                <li className="mb-2.5">100% 안전하고 안전한 YouTube 변환기</li>
                <li className="mb-2.5">모든 브라우저 및 장치와 호환</li>
                <li className="mb-2.5">완전히 무료로 고품질 오디오로 Youtube를 mp3로 변환</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">쉽고 빠른 변환</h3>
                <p>
                  YouTube에서 MP3를 다운로드하는 것은 쉽습니다. 다운로드하려는 YouTube URL을 입력하고 다운로드 버튼을 클릭하기만 하면 됩니다. 몇 초 안에 변환된 파일이 준비됩니다.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">고품질 형식 제공</h3>
                <p>
                  YouTube를 64kbps, 128kbps, 192kbps, 256kbps 및 320kbps와 같은 고품질 형식의 mp3로 변환할 수 있습니다. 요구 사항에 따라 선택하고 다운로드할
                  수 있습니다.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta download" width={50}
                           quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">무제한 변환</h3>
                <p>
                  무료로 제한 없이 YouTube 동영상을 MP3로 변환하세요. Youtube에서 Mp3를 다운로드하기 위해 소프트웨어나 앱을 설치할 필요가 없습니다.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">모든 플랫폼과 호환</h3>
                <p>
                  YouTube 변환기는 PC, 태블릿, iPhone, Android 전화 등 모든 유형의 장치와 호환됩니다. 또한 Y2meta는 Chrome, Microsoft Edge,
                  Firefox, Opera 등을 포함한 모든 브라우저를 지원합니다.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">자주하는 질문</h2>
            <h3 className="mt-2.5 font-semibold">이 YouTube to MP3 변환기는 무료로 사용할 수 있나요?</h3>
            <p>
              예, Y2meta 변환기는 계정을 등록하지 않고도 YouTube에서 Mp3를 완전히 무료로 다운로드할 수 있습니다.
            </p>
            <h3 className="mt-2.5 font-semibold">이 Youtube를 모든 장치에서 mp3로 사용할 수 있습니까?</h3>
            <p>
              예, 물론입니다. 이 YouTube to Mp3 변환기는 컴퓨터, 모바일 및 태블릿을 포함한 모든 유형의 장치를 지원합니다.
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube 동영상에서 MP3를 다운로드하는 방법은 무엇입니까?</h3>
            <p>YouTube를 mp3로 변환하려는 Youtube 비디오 링크 복사</p>
            <p>YouTube URL을 검색창에 붙여넣기</p>
            <p>검색 버튼을 누른 다음 MP3를 선택하고 변환 버튼을 클릭하십시오.</p>
            <p>변환이 성공적으로 완료될 때까지 몇 초간 기다린 다음 "다운로드" 버튼을 클릭합니다.</p>
            <h3 className="mt-2.5 font-semibold">YouTube에서 최대 Mp3 다운로드 수는 얼마입니까?</h3>
            <p>
              YouTube를 Mp3로 무제한으로 변환할 수 있으며 이 YouTube 변환기를 사용할 때 제한이 없습니다. 모든 기능은 완전히 무료이며 제한이 없습니다.
            </p>
            <h3 className="mt-2.5 font-semibold">브라우저 확장 프로그램이나 소프트웨어를 설치해야 합니까?</h3>
            <p>
              아니요, YouTube 변환기는 웹에서 작동하므로 소프트웨어나 확장 프로그램을 설치할 필요가 없습니다. 웹 브라우저와 안정적인 인터넷 연결만 있으면 됩니다.
            </p>
            <h3 className="mt-2.5 font-semibold">이 YouTube 변환기를 사용하여 YouTube에서 mp3를 다운로드하는 것이 안전합니까?</h3>
            <p>
              예, 저희 Youtube to Mp3 변환기는 SSL 레이어로 안전하여 사람들이 비디오를 안전하게 다운로드할 수 있도록 합니다. 우리는 매일 바이러스 및 맬웨어로부터 안전하기 위해
              YouTube To Mp3 변환기 보안을 모니터링합니다.
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
    <html lang="ko"/>
    <title>YouTube에서 MP3로 변환 - Y2meta</title>
    <meta
      name="description"
      content="Y2meta는 무료 YouTube to MP3 변환기로, 소프트웨어를 설치하지 않고도 PC, iPhone 및 Android에서 YouTube Free에서 MP3로 변환할 수 있습니다."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="ko"/>
    <meta property="og:title" content="YouTube에서 MP3로 변환 - Y2meta"/>
    <meta
      property="og:description"
      content="Y2meta는 무료 YouTube to MP3 변환기로, 소프트웨어를 설치하지 않고도 PC, iPhone 및 Android에서 YouTube Free에서 MP3로 변환할 수 있습니다."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/ko/youtube-to-mp3/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/ko/youtube-to-mp3/"/>
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