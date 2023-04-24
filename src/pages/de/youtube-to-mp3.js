import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP3 = () => {
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
                    <nav className="grid gap-y-8">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTube-zu-MP3-Konverter</h1>
            <p>Konvertieren und laden Sie YouTube-Videos kostenlos in MP3 herunter</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Bester YouTube-zu-MP3-Konverter</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta ist ein schneller und einfacher YouTube-zu-MP3-Konverter. Mit unserem beliebten
              YouTube-zu-MP3-Downloader können Sie YouTube-Videos einfach in hoher Qualität und kostenlos in MP3
              konvertieren und herunterladen. Außerdem können Sie mp3 mit mehreren Qualitätsoptionen wie 64 kbps, 128
              kbps, 192 kbps und bis zu 320 kbps herunterladen.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Dieser YouTube-zu-MP3-Konverter funktioniert reibungslos auf allen Geräten, einschließlich Desktops,
              Laptops, Tablets und Smartphones, ohne dass eine Anwendung oder Software installiert werden muss. Der
              Konvertierungsprozess ist schnell und bequem. Fügen Sie einfach die YouTube-URL ein und in wenigen
              einfachen Schritten ist Ihre YouTube-MP3-Datei in wenigen Sekunden zum Download bereit. Es ist ein absolut
              sicherer YouTube MP3-Konverter.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>So konvertieren Sie YouTube-Videos kostenlos online in MP3</strong>
              </h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Fügen Sie die YouTube-Video-URL ein oder geben Sie ein Schlüsselwort in das Suchfeld ein und klicken
                  Sie dann auf die Schaltfläche "Suchen".
                </li>
                <li className="mb-2.5">Wählen Sie die MP3-Qualität und klicken Sie auf die Schaltfläche
                  „Herunterladen“.
                </li>
                <li className="mb-2.5">
                  Warten Sie einige Sekunden und klicken Sie nach erfolgreicher Mp3-Konvertierung auf die Schaltfläche
                  Download.
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta-Vorteile</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Konvertieren und laden Sie MP3-Dateien von YouTube ohne Einschränkung herunter
                </li>
                <li className="mb-2.5">Keine Notwendigkeit, eine Software zu installieren und ohne Registrierung</li>
                <li className="mb-2.5">100 % sicherer YouTube-Konverter</li>
                <li className="mb-2.5">kompatibel mit allen Browsern und Geräten</li>
                <li className="mb-2.5">Konvertieren Sie Youtube völlig kostenlos in MP3 mit hochwertigem Audio</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Einfache und schnelle Konvertierung</h3>
                <p>
                  Das Herunterladen von MP3 von YouTube ist einfach Geben Sie einfach die YouTube-URL ein, die Sie
                  herunterladen möchten, und klicken Sie auf die Schaltfläche Herunterladen. Ihre konvertierten Dateien
                  sind in wenigen Sekunden fertig.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Stellen Sie hochwertige Formate bereit</h3>
                <p>
                  Wir bieten die Konvertierung von YouTube in MP3 in hochwertigen Formaten wie 64 kbps, 128 kbps, 192
                  kbps, 256 kbps und 320 kbps an. Sie können je nach Anforderung auswählen und herunterladen.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta download" width={50}
                           quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Konvertierung Ohne Einschränkung</h3>
                <p>
                  Konvertieren Sie jedes YouTube-Video ohne Einschränkung kostenlos in MP3. Es ist nicht erforderlich,
                  Software oder Apps zu installieren, um Mp3 von Youtube herunterzuladen.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Kompatibel mit allen Plattformen</h3>
                <p>
                  Unser YouTube Converter ist mit allen Arten von Geräten kompatibel, PC, Tablet, iPhone,
                  Android-Telefon usw. Außerdem unterstützt Y2meta alle Browser, einschließlich Chrome, Microsoft Edge,
                  Firefox, Opera und alle anderen.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">Kann dieser YouTube-zu-MP3-Konverter kostenlos verwendet werden?</h3>
            <p>
              Ja, unser Y2meta-Konverter ist völlig kostenlos, um MP3 von YouTube herunterzuladen, ohne ein Konto zu
              registrieren
            </p>
            <h3 className="mt-2.5 font-semibold">Kann ich dieses Youtube to mp3 auf allen Geräten verwenden?</h3>
            <p>
              Ja, natürlich unterstützt dieser YouTube-zu-MP3-Konverter alle Arten von Geräten, einschließlich Computer,
              Handys und Tablets.
            </p>
            <h3 className="mt-2.5 font-semibold">Wie lade ich MP3 von YouTube-Videos herunter?</h3>
            <p>Kopieren Sie den YouTube-Videolink, den Sie YouTube in mp3 konvertieren möchten</p>
            <p>Fügen Sie die YouTube-URL in das Suchfeld ein</p>
            <p>Drücken Sie die Schaltfläche Suchen, wählen Sie dann Mp3 und klicken Sie auf die Schaltfläche
              Konvertieren</p>
            <p>Warten Sie einige Sekunden, bis die Konvertierung erfolgreich abgeschlossen ist, und klicken Sie dann auf
              die Schaltfläche „Herunterladen“.</p>
            <h3 className="mt-2.5 font-semibold">Was ist die maximale Anzahl an MP3-Downloads von YouTube?</h3>
            <p>
              Sie können YouTube unbegrenzt in MP3 konvertieren und es gibt keine Einschränkungen bei der Verwendung
              dieses YouTube-Konverters. alle Funktionen völlig kostenlos und ohne Einschränkung.
            </p>
            <h3 className="mt-2.5 font-semibold">Muss ich eine Browsererweiterung oder Software installieren?</h3>
            <p>
              Nein, unser YouTube Converter funktioniert im Internet, sodass Sie keine Software oder Erweiterung
              installieren müssen. Sie benötigen lediglich einen Webbrowser und eine zuverlässige Internetverbindung.
            </p>
            <h3 className="mt-2.5 font-semibold">ist es sicher, mit diesem YouTube-Konverter mp3 von YouTube
              herunterzuladen?</h3>
            <p>
              Ja, unser Youtube-zu-MP3-Konverter ist mit einer SSL-Schicht sicher, die sicherstellt, dass diese Personen
              Videos sicher herunterladen können. Wir überwachen täglich die Sicherheit unseres
              YouTube-zu-MP3-Konverters, um ihn vor Viren und Malware zu schützen.
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
    <html lang="de"/>
    <title>YouTube-zu-MP3-Konverter - Y2meta</title>
    <meta
      name="description"
      content="Y2meta ist ein kostenloser YouTube to MP3 Converter, der MP3 von YouTube Free auf PC, iPhone und Android ohne Installation von Software ermöglicht."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="de"/>
    <meta property="og:title" content="YouTube-zu-MP3-Konverter - Y2meta"/>
    <meta
      property="og:description"
      content="Y2meta ist ein kostenloser YouTube to MP3 Converter, der MP3 von YouTube Free auf PC, iPhone und Android ohne Installation von Software ermöglicht."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/de/youtube-to-mp3/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/de/youtube-to-mp3/"/>
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