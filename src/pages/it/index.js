import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("it");
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
                <Link to="/it/" className="flex items-center">
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
                  to="/it/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/it/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/it/youtube-to-mp4/">
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
                        to="/it/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/it/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/it/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - Scarica video da YouTube</h1>
            <p>Scarica video di YouTube in MP3 e MP4 di alta qualità gratuitamente</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Cerca o incolla qui il link di YouTube..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Ricerca
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              Utilizzando il nostro servizio accetti i nostri
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;termini e condizioni.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Miglior downloader di video da YouTube</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta è il downloader di YouTube più popolare che ti consente di scaricare video di YouTube
              gratuitamente. Non è necessario installare applicazioni e software di terze parti per salvare i video di
              YouTube sul tuo dispositivo personale. Just You richiede un browser affidabile e una connessione Internet.
              Divertiti a scaricare i tuoi video preferiti da YouTube, Facebook, Video, Dailymotion, Youku e altri siti
              di social sharing con la qualità che desideri. Y2meta offre il modo più sicuro per scaricare video di
              YouTube con qualità HD e non è necessario effettuare il login o condividere informazioni personali.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Scarica audio e video di YouTube in vari formati come MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO, ecc. Y2meta
              funziona senza problemi sul tuo computer, cellulare, tablet e altri dispositivi. è un downloader YouTube
              semplice e facile.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Come scaricare video di YouTube usando Y2meta?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Apri il sito Web di YouTube e copia l'URL di YouTube che desideri scaricare sul tuo dispositivo
                </li>
                <li className="mb-2.5">Incolla l'URL copiato nella casella di ricerca Y2meta e scegli il formato MP4 o
                  MP3
                </li>
                <li className="mb-2.5">
                  Attendi qualche secondo fino al completamento della conversione e premi il pulsante "Download".
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Vantaggi di Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Converti e scarica video YouTube illimitati gratuitamente</li>
                <li className="mb-2.5">Modo semplice e veloce per scaricare e salvare qualsiasi video di YouTube</li>
                <li className="mb-2.5">Il nostro downloader di YouTube è completamente compatibile con tutti i
                  dispositivi
                </li>
                <li className="mb-2.5">È sempre gratuito e non necessita di registrazione</li>
                <li className="mb-2.5">Forniamo file audio e video di alta qualità</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% sicuro e gratuito</h3>
                <p>
                  Y2meta offre il download di mp3 e mp4 da YouTube totalmente gratuito. Anche questo YouTube Video
                  Downloader è totalmente sicuro e protetto da virus e malware.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Scarica video velocemente e facilmente</h3>
                <p>
                  Lo strumento Y2meta ti aiuta a scaricare rapidamente MP3 e MP4 da YouTube. Basta incollare l'URL di
                  YouTube copiato nella casella di ricerca e fare clic sul pulsante "Converti". basta seguire i semplici
                  passaggi per scaricare video di YouTube.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Scarica video YouTube illimitati</h3>
                <p>
                  Usando questo Y2meta Downloader Scarica i video di YouTube quanto vuoi senza limitazioni. è
                  completamente gratuito e non è necessario registrarsi e accedere.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Supporta più qualità</h3>
                <p>
                  Y2meta offre molteplici qualità audio e video in modo da poter convertire i video di YouTube in
                  formati MP3, 3GP, MP4, WMA, M4A, FLV, WEBM, MO, ecc.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">Cos'è Y2meta?</h3>
            <p>
              Y2meta è il miglior downloader di video di YouTube che ti consente di scaricare video da YouTube in modo
              rapido e gratuito. inoltre, converti YouTube in Mp3 in alta qualità.
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta è totalmente gratuito?</h3>
            <p>
              Sì, Y2meta è completamente gratuito per utilizzare e scaricare video di YouTube. non è necessario pagare
              alcun importo di abbonamento, basta solo l'URL del video di YouTube che desideri scaricare sul tuo
              dispositivo.
            </p>
            <h3 className="mt-2.5 font-semibold">Come scaricare i video di YouTube su iPhone?</h3>
            <p>
              Il processo degli utenti di iPhone è leggermente diverso da All use. È necessario utilizzare il browser
              Safari su iOS 13 o scaricare l'app Documents by Readdle e tutto il processo è lo stesso di cui sopra.
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta è sicuro per scaricare video da YouTube?</h3>
            <p>
              Sì, scarica i video di YouTube utilizzando il nostro Downloader, non è necessario condividere alcuna
              informazione personale e inoltre non è necessario installare applicazioni e software di terze parti sui
              tuoi dispositivi.
            </p>
            <h3 className="mt-2.5 font-semibold">Quali sono i formati video/audio supportati?</h3>
            <p>
              Forniamo vari formati di alta qualità e ti consentiamo di scaricare mp3 a 320kbps, 256kbps, 192kbps,
              128kbps, 64kbps bit rate e mp4 con qualità 720p, 1080p, 1440p, 2160p.
            </p>
            <h3 className="mt-2.5 font-semibold">Dov'è memorizzato il file video di YouTube scaricato sul mio
              dispositivo?</h3>
            <p>
              Dopo che il video è stato salvato sul tuo computer da Youtube, controlla direttamente nella "cronologia
              download" del tuo browser o nella cartella "Download" nel tuo dispositivo.
            </p>
            <h3 className="mt-2.5 font-semibold">Questo downloader di video di YouTube è compatibile con tutti i
              dispositivi?</h3>
            <p>
              Sì, Y2meta supporta il download di video da YouTube funziona senza problemi su tutti i dispositivi come
              computer, dispositivi mobili e tablet e tutti i tipi di browser come Chrome, Firefox, Microsoft Edge,
              Safari, Opera e così via.
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
    <html lang="it"/>
    <title>Y2meta - Scarica YouTube | Scarica video YouTube gratis</title>
    <meta
      name="description"
      content="Y2meta è un popolare downloader gratuito di YouTube che consente di scaricare video di YouTube gratuitamente con alta qualità in 1080p, 2160p, 2k, 4k, 8k senza software di installazione."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="it"/>
    <meta property="og:title" content="Y2meta - Scarica YouTube | Scarica video YouTube gratis"/>
    <meta
      property="og:description"
      content="Y2meta è un popolare downloader gratuito di YouTube che consente di scaricare video di YouTube gratuitamente con alta qualità in 1080p, 2160p, 2k, 4k, 8k senza software di installazione."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/it/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/it/"/>
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
