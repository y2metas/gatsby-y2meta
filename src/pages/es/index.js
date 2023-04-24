import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("es");
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
                <Link to="/es/" className="flex items-center">
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
                  to="/es/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/es/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/es/youtube-to-mp4/">
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
                        to="/es/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/es/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/es/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - Descargador de videos de YouTube</h1>
            <p>Descarga videos de YouTube en MP3 y MP4 de alta calidad gratis</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Busca o pega el enlace de youtube aquí..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Buscar
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              Al utilizar nuestro servicio, usted acepta nuestros
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;Términos y condiciones.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">El mejor descargador de videos de YouTube</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta es el descargador de YouTube más popular que le permite descargar videos de YouTube de forma
              gratuita. No es necesario instalar aplicaciones y software de terceros para guardar videos de YouTube en
              su dispositivo personal. Solo necesita un navegador confiable y una conexión a Internet. Disfrute
              descargando sus videos favoritos de YouTube, Facebook, Video, Dailymotion, Youku y otros sitios web para
              compartir en redes sociales con la calidad que desea. Y2meta proporciona la forma más segura de descargar
              videos de YouTube con calidad HD y no requiere iniciar sesión ni compartir información personal.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Descargue audio y video de YouTube en varios formatos, como MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO, etc.,
              y diferentes velocidades de bits de MP3, incluidos 64 kbps, 128 kbps, 192 kbps, 256 kbps y 320 kbps.
              Y2meta funciona sin problemas en su computadora, dispositivo móvil, tableta y otros dispositivos. es un
              descargador de YouTube simple y fácil.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>¿Cómo descargar videos de YouTube usando Y2meta?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Abra el sitio web de YouTube y copie la URL de YouTube que desea descargar en su dispositivo
                </li>
                <li className="mb-2.5">Pegue la URL copiada en el cuadro de búsqueda de Y2meta y elija el formato MP4 o
                  MP3
                </li>
                <li className="mb-2.5">
                  Espere unos segundos hasta que se complete la conversión y presione el botón "Descargar"
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Ventajas de Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Convierta y descargue videos ilimitados de YouTube sin costo</li>
                <li className="mb-2.5">Manera rápida y fácil de descargar y guardar cualquier video de YouTube</li>
                <li className="mb-2.5">Nuestro descargador de YouTube totalmente compatible con todos los dispositivos
                </li>
                <li className="mb-2.5">Siempre es gratis y no necesita registro.</li>
                <li className="mb-2.5">Proporcionamos archivos de audio y video de alta calidad.</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% Seguro y Gratis</h3>
                <p>
                  Y2meta ofrece descargar mp3 y mp4 de YouTube totalmente gratis. Además, este descargador de videos de
                  YouTube es totalmente seguro y protegido contra virus y malware.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Descargar video rápido y fácilmente</h3>
                <p>
                  La herramienta Y2meta lo ayuda a descargar MP3 y MP4 de YouTube rápidamente. Simplemente pegue la URL
                  de YouTube copiada en el cuadro de búsqueda y haga clic en el botón "Convertir". simplemente siga los
                  sencillos pasos para descargar videos de YouTube.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Descargar videos ilimitados de YouTube</h3>
                <p>
                  Con este Y2meta Downloader, descargue videos de YouTube tanto como desee sin ninguna limitación. es
                  completamente gratis y no es necesario registrarse e iniciar sesión.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Admite calidad múltiple</h3>
                <p>
                  Y2meta ofrece múltiples calidades de audio y video para que pueda convertir videos de YouTube a
                  formatos MP3, 3GP, MP4, WMA, M4A, FLV, WEBM, MO, etc.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">Preguntas más frecuentes</h2>
            <h3 className="mt-2.5 font-semibold">¿Qué es Y2meta?</h3>
            <p>
              Y2meta es el mejor descargador de videos de YouTube que le permite descargar videos de YouTube de forma
              rápida y gratuita. además, convierte YouTube a Mp3 en alta calidad.
            </p>
            <h3 className="mt-2.5 font-semibold">¿Y2meta es totalmente gratis?</h3>
            <p>
              Sí, Y2meta es completamente gratuito para usar y descargar videos de YouTube. no necesita pagar ningún
              monto de suscripción, solo necesita la URL del video de YouTube que desea descargar en su dispositivo.
            </p>
            <h3 className="mt-2.5 font-semibold">¿Cómo descargar videos de YouTube a iPhone?</h3>
            <p>
              El proceso de los usuarios de iPhone es ligeramente diferente al de Todos los usos. Debe usar el navegador
              Safari en iOS 13 u obtener Documentos de la aplicación Readdle y todo el proceso es el mismo que el
              anterior.
            </p>
            <h3 className="mt-2.5 font-semibold">¿Es Y2meta seguro para descargar videos de YouTube?</h3>
            <p>
              Sí, descargue videos de YouTube con nuestro Descargador, no necesita compartir ninguna información
              personal y tampoco necesita instalar aplicaciones y software de terceros en sus dispositivos.
            </p>
            <h3 className="mt-2.5 font-semibold">¿Cuáles son los formatos de video/audio compatibles?</h3>
            <p>
              Ofrecemos varios formatos de alta calidad y le permitimos descargar mp3 en 320 kbps, 256 kbps, 192 kbps,
              128 kbps, tasa de bits de 64 kbps y mp4 con calidad de 720p, 1080p, 1440p, 2160p.
            </p>
            <h3 className="mt-2.5 font-semibold">¿Dónde se almacena el archivo de video de YouTube descargado en mi
              dispositivo?</h3>
            <p>
              Después de que el video se guarde en su computadora desde Youtube, verifique directamente en su navegador
              el "historial de descargas" o la carpeta "Descargas" en su dispositivo.
            </p>
            <h3 className="mt-2.5 font-semibold">¿Este descargador de videos de YouTube es compatible con todos los
              dispositivos?</h3>
            <p>
              Sí, Y2meta admite la descarga de videos de YouTube y funciona sin problemas en todos los dispositivos,
              como computadoras, dispositivos móviles y tabletas, y en todo tipo de navegadores como Chrome, Firefox,
              Microsoft Edge, Safari, Opera, etc.
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
    <html lang="es"/>
    <title>Y2meta - Descargador de YouTube | Descargar videos de YouTube gratis</title>
    <meta
      name="description"
      content="Y2meta es un popular descargador gratuito de YouTube que permite descargar videos de YouTube de forma gratuita con alta calidad en 1080p, 2160p, 2k, 4k, 8k sin instalar software."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="es"/>
    <meta property="og:title" content="Y2meta - Descargador de YouTube | Descargar videos de YouTube gratis"/>
    <meta
      property="og:description"
      content="Y2meta es un popular descargador gratuito de YouTube que permite descargar videos de YouTube de forma gratuita con alta calidad en 1080p, 2160p, 2k, 4k, 8k sin instalar software."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/es/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/es/"/>
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
