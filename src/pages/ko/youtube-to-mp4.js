import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP4 = () => {
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTube에서 MP4로 변환기</h1>
            <p>Youtube를 MP4로 무료 변환 및 다운로드</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">최고의 유튜브 MP4 변환기</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta는 YouTube 동영상을 몇 초 안에 MP4 형식으로 다운로드할 수 있도록 도와주는 무료 YouTube 다운로더 도구입니다. YouTube에서 Mp4 동영상을 빠르고 쉽게
              다운로드할 수 있는 방법입니다. 360p, 480p, 720p, 1080p, 4K HD 및 최대 8K와 같은 다양한 최상의 품질로 YouTube 비디오를 다운로드하십시오.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              이 빠르고 안전한 YouTube 변환기를 사용하여 등록 없이 장치에 MP4, AVI 및 MOV로 YouTube 비디오를 다운로드하고 저장하세요. PC, 태블릿, iPhone, Android
              폰을 사용하든 상관없습니다. 또한 이 YouTube 다운로더는 웹에서 실행되므로 소프트웨어나 앱을 설치할 필요가 없어 브라우징이 훨씬 쉬워집니다.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Youtube 비디오를 MP4로 변환하는 방법?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube 링크를 붙여넣거나 검색창에 키워드를 입력하세요.
                </li>
                <li className="mb-2.5">변환하려는 품질의 MP4를 선택하고 "다운로드" 버튼을 누릅니다.</li>
                <li className="mb-2.5">
                  변환이 MP4를 완료하고 기기에 다운로드할 때까지 잠시 기다립니다.
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta의 장점</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">원하는 만큼 제한 없이 YouTube 동영상을 mp4로 변환</li>
                <li className="mb-2.5">YouTube 동영상을 HD로 다운로드하고 저장하는 빠르고 쉬운 방법</li>
                <li className="mb-2.5">이 YouTube 동영상 다운로더는 100% 안전합니다.</li>
                <li className="mb-2.5">여러 고품질 형식으로 YouTube에서 비디오 다운로드</li>
                <li className="mb-2.5">등록 및 로그인 없이 완전히 무료로 제공되는 Y2meta 다운로더 도구</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">무제한 및 무료 전환</h3>
                <p>
                  이 YouTube를 MP4로 사용 YouTube 동영상을 원하는 만큼 다운로드하세요. 기능 및 YouTube에서 비디오 다운로드 수에 제한이 없습니다. 또한 이것은 비용이 완전히
                  무료입니다.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">사용하기 쉽고 빠름</h3>
                <p>
                  간단하고 사용자 친화적인 간섭으로 이 YouTube MP4 다운로더를 사용하기 쉽게 만듭니다. 간단한 단계로 YouTube에서 MP4 동영상을 빠르게 다운로드하세요.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% 안전하고 보안</h3>
                <p>
                  당사의 YouTube to MP4 변환기는 SSL 레이어로 완전히 안전합니다. 이 보안 레이어는 바이러스 및 맬웨어로부터 보호하는 데 도움이 되므로 걱정하지 마십시오. 완전히 안전하고
                  안전한 YouTube 동영상 다운로드
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">모든 장치와 호환 가능</h3>
                <p>
                  YouTube to MP4 변환기는 웹 기반 앱이므로 모든 기기와 브라우저를 지원합니다. 소프트웨어 및 앱을 설치할 필요가 없습니다.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">자주하는 질문</h2>
            <h3 className="mt-2.5 font-semibold">YouTube 동영상을 mp4로 변환하려면 비용을 지불해야 하나요?</h3>
            <p>
              아니요, 이 YouTube 다운로더를 사용하는 것은 완전히 무료이며 변환을 위해 돈을 쓸 필요가 없습니다. 또한 YouTube에서 MP4로 기능 제한이 없습니다.
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube 비디오를 MP4로 다운로드하고 변환하는 방법</h3>
            <p>YouTube 웹사이트를 열고 다운로드하려는 YouTube 동영상 URL을 복사합니다.</p>
            <p>이 YouTube MP4 다운로더의 검색창에 URL 붙여넣기</p>
            <p>품질을 선택하고 다운로드 버튼을 누릅니다.</p>
            <h3 className="mt-2.5 font-semibold">이 Youtube to mp4 변환기는 모든 장치에서 작동합니까?</h3>
            <p>YouTube to MP4 변환기는 웹 기반 앱이므로 모든 기기 및 브라우저와 호환됩니다. 소프트웨어 및 앱을 설치할 필요가 없습니다.</p>
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
    <html lang="ko"/>
    <title>HD에서 무료로 YouTube에서 MP4로 변환기</title>
    <meta
      name="description"
      content="무료로 YouTube를 1080p, 2k, 4k HD의 MP4로 변환하고 다운로드하세요. PC, 모바일, 아이폰용 YouTube to MP4 다운로더 및 온라인 변환기 사용"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="ko"/>
    <meta property="og:title" content="HD에서 무료로 YouTube에서 MP4로 변환기"/>
    <meta
      property="og:description"
      content="무료로 YouTube를 1080p, 2k, 4k HD의 MP4로 변환하고 다운로드하세요. PC, 모바일, 아이폰용 YouTube to MP4 다운로더 및 온라인 변환기 사용"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/ko/youtube-to-mp4/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/ko/youtube-to-mp4/"/>
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
