import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("de");
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
                <Link to="/de/" className="flex items-center">
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
                  to="/de/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/de/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/de/youtube-to-mp4/">
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
                        to="/de/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/de/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/de/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube-Video-Downloader</h1>
            <p>Laden Sie kostenlos YouTube-Videos in MP3- und MP4-Qualität herunter</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="YouTube-Link hier suchen oder einfügen..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Suchen
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              Durch die Nutzung unseres Dienstes akzeptieren Sie unsere
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;Allgemeinen Geschäftsbedingungen.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Bester YouTube-Video-Downloader</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta ist der beliebteste YouTube-Downloader, mit dem Sie YouTube-Videos kostenlos herunterladen können.
              Keine Notwendigkeit, Anwendungen und Software von Drittanbietern zu installieren, um YouTube-Videos auf
              Ihrem persönlichen Gerät zu speichern. Nur Sie benötigen einen zuverlässigen Browser und eine
              Internetverbindung. Genießen Sie das Herunterladen Ihrer Lieblingsvideos von YouTube, Facebook, Video,
              Dailymotion, Youku und anderen Social-Sharing-Websites in der gewünschten Qualität. Y2meta bietet die
              sicherste Möglichkeit, YouTube-Videos in HD-Qualität herunterzuladen, ohne dass Sie sich anmelden oder
              persönliche Informationen weitergeben müssen.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Laden Sie YouTube-Audio und -Videos in verschiedenen Formaten wie MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO
              usw. und verschiedenen MP3-Bitraten herunter, einschließlich 64 kbps, 128 kbps, 192 kbps, 256 kbps und 320
              kbps. Y2meta funktioniert reibungslos auf Ihrem Computer, Handy, Tablet und anderen Geräten. Es ist ein
              einfacher und einfacher YouTube-Downloader.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Wie lade ich YouTube-Videos mit Y2meta herunter?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Öffnen Sie die YouTube-Website und kopieren Sie die YouTube-URL, die Sie auf Ihr Gerät herunterladen
                  möchten
                </li>
                <li className="mb-2.5">Fügen Sie die kopierte URL in das Y2meta-Suchfeld ein und wählen Sie das MP4-
                  oder MP3-Format
                </li>
                <li className="mb-2.5">
                  Warten Sie einige Sekunden, bis die Konvertierung abgeschlossen ist, und klicken Sie auf die
                  Schaltfläche „Herunterladen“.
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta-Vorteile</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Konvertieren und laden Sie kostenlos unbegrenzt YouTube-Videos herunter</li>
                <li className="mb-2.5">Schnelle und einfache Möglichkeit, jedes YouTube-Video herunterzuladen und zu
                  speichern
                </li>
                <li className="mb-2.5">Unser YouTube-Downloader ist voll kompatibel mit allen Geräten</li>
                <li className="mb-2.5">Es ist immer kostenlos und erfordert keine Registrierung</li>
                <li className="mb-2.5">Wir bieten hochwertige Audio- und Videodateien</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% sicher und kostenlos</h3>
                <p>
                  Y2meta bietet den kostenlosen Download von mp3 und mp4 von YouTube an. Auch dieser YouTube Video
                  Downloader ist absolut sicher und sicher vor Viren und Malware.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Laden Sie Videos schnell und einfach
                  herunter</h3>
                <p>
                  Das Y2meta-Tool hilft Ihnen, MP3 und MP4 schnell von YouTube herunterzuladen. Fügen Sie einfach die
                  kopierte YouTube-URL in das Suchfeld ein und klicken Sie auf die Schaltfläche „Konvertieren“. Folgen
                  Sie einfach den einfachen Schritten, um YouTube-Videos herunterzuladen.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Laden Sie unbegrenzt YouTube-Videos
                  herunter</h3>
                <p>
                  Mit diesem Y2meta-Downloader können Sie YouTube-Videos so oft herunterladen, wie Sie möchten, ohne
                  Einschränkungen. Es ist völlig kostenlos und Sie müssen sich nicht registrieren und anmelden.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Unterstützen Sie mehrere Qualität</h3>
                <p>
                  Y2meta bietet mehrere Audio- und Videoqualitäten, sodass Sie YouTube-Videos in die Formate MP3, 3GP,
                  MP4, WMA, M4A, FLV, WEBM, MO usw. konvertieren können.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">Was ist Y2meta?</h3>
            <p>
              Y2meta ist der beste YouTube Video Downloader, mit dem Sie schnell und kostenlos Videos von YouTube
              herunterladen können. Konvertieren Sie auch YouTube in MP3 in hoher Qualität.
            </p>
            <h3 className="mt-2.5 font-semibold">Ist Y2meta völlig kostenlos?</h3>
            <p>
              Ja, Y2meta ist völlig kostenlos, um YouTube-Videos zu verwenden und herunterzuladen. Sie müssen keinen
              Abonnementbetrag bezahlen, sondern benötigen nur die YouTube-Video-URL, die Sie auf Ihr Gerät
              herunterladen möchten.
            </p>
            <h3 className="mt-2.5 font-semibold">Wie lade ich YouTube-Videos auf das iPhone herunter?</h3>
            <p>
              Der Prozess von iPhone-Benutzern unterscheidet sich geringfügig von All Use. Sie müssen den Safari-Browser
              unter iOS 13 verwenden oder Documents by Readdle-App herunterladen, und alle Prozesse sind die gleichen
              wie oben.
            </p>
            <h3 className="mt-2.5 font-semibold">Kann Y2meta sicher Videos von YouTube herunterladen?</h3>
            <p>
              Ja, laden Sie YouTube-Videos mit unserem Downloader herunter, Sie müssen keine persönlichen Informationen
              weitergeben und müssen auch keine Anwendungen und Software von Drittanbietern auf Ihren Geräten
              installieren.
            </p>
            <h3 className="mt-2.5 font-semibold">Was sind die unterstützten Video-/Audioformate?</h3>
            <p>
              Wir bieten verschiedene hochwertige Formate und ermöglichen Ihnen das Herunterladen von mp3 in 320kbps,
              256kbps, 192kbps, 128kbps, 64kbps Bitrate und mp4 in 720p, 1080p, 1440p, 2160p Qualität.
            </p>
            <h3 className="mt-2.5 font-semibold">Wo wird die heruntergeladene YouTube-Videodatei auf meinem Gerät
              gespeichert?</h3>
            <p>
              Nachdem das Video von Youtube auf Ihrem Computer gespeichert wurde, überprüfen Sie direkt in Ihrem Browser
              den „Download-Verlauf“ oder den Ordner „Downloads“ auf Ihrem Gerät.
            </p>
            <h3 className="mt-2.5 font-semibold">Ist dieser YouTube-Video-Downloader mit allen Geräten kompatibel?</h3>
            <p>
              Ja, Y2meta unterstützt das Herunterladen von Videos von YouTube und funktioniert reibungslos auf allen
              Geräten wie Computern, Handys und Tablets und allen Arten von Browsern wie Chrome, Firefox, Microsoft
              Edge, Safari, Opera usw.
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
    <html lang="de"/>
    <title>Y2meta - YouTube-Downloader | Laden Sie YouTube-Videos kostenlos herunter</title>
    <meta
      name="description"
      content="Y2meta ist ein beliebter kostenloser YouTube-Downloader, mit dem Sie YouTube-Videos kostenlos in hoher Qualität in 1080p, 2160p, 2k, 4k, 8k ohne Installation von Software herunterladen können."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="de"/>
    <meta property="og:title" content="Y2meta - YouTube-Downloader | Laden Sie YouTube-Videos kostenlos herunter"/>
    <meta
      property="og:description"
      content="Y2meta ist ein beliebter kostenloser YouTube-Downloader, mit dem Sie YouTube-Videos kostenlos in hoher Qualität in 1080p, 2160p, 2k, 4k, 8k ohne Installation von Software herunterladen können."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/de/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/de/"/>
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
