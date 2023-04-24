import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
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
                <Link to="/fr/" className="flex items-center">
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
                  to="/fr/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/fr/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/fr/youtube-to-mp4/">
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
                        to="/fr/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/fr/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/fr/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - Téléchargeur de vidéos YouTube</h1>
            <p>Téléchargez gratuitement des vidéos YouTube en MP3 et MP4 de haute qualité</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Recherchez ou collez le lien youtube ici..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Recherche
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              En utilisant notre service, vous acceptez nos
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;termes et conditions.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Meilleur téléchargeur de vidéos YouTube</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta est le téléchargeur YouTube le plus populaire qui vous permet de télécharger gratuitement des
              vidéos YouTube. Pas besoin d'installer des applications et des logiciels tiers pour enregistrer des vidéos
              YouTube sur votre appareil personnel. Juste Vous avez besoin d'un navigateur fiable et d'une connexion
              Internet. Profitez du téléchargement de vos vidéos préférées depuis YouTube, Facebook, Video, Dailymotion,
              Youku et d'autres sites de partage social avec la qualité que vous souhaitez. Y2meta fournit le moyen le
              plus sûr de télécharger des vidéos YouTube avec une qualité HD et sans avoir besoin de se connecter ou de
              partager des informations personnelles.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Téléchargez l'audio et la vidéo YouTube dans divers formats tels que MP3, WEBM, MP4, M4V, 3GP, WMV, FLV,
              MO, etc., et différents débits binaires MP3, notamment 64kbps, 128kbps, 192kbps, 256kbps et 320kbps.
              Y2meta fonctionne sans problème sur votre ordinateur, mobile, tablette et autre appareil. c'est un
              téléchargeur YouTube simple et facile.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Comment télécharger des vidéos YouTube avec Y2meta ?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Ouvrez le site Web YouTube et copiez l'URL YouTube que vous souhaitez télécharger sur votre appareil
                </li>
                <li className="mb-2.5">Collez l'URL copiée dans la zone de recherche Y2meta et choisissez le format MP4
                  ou MP3
                </li>
                <li className="mb-2.5">
                  Attendez quelques secondes jusqu'à ce que la conversion soit terminée et appuyez sur le bouton
                  "Télécharger"
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Avantages de Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Convertissez et téléchargez gratuitement des vidéos YouTube illimitées</li>
                <li className="mb-2.5">Un moyen rapide et facile de télécharger et d'enregistrer n'importe quelle vidéo
                  YouTube
                </li>
                <li className="mb-2.5">Notre téléchargeur YouTube entièrement compatible avec tous les appareils</li>
                <li className="mb-2.5">C'est toujours gratuit et ne nécessite pas d'inscription</li>
                <li className="mb-2.5">Nous fournissons des fichiers audio et vidéo de haute qualité</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100 % sûr et gratuit</h3>
                <p>
                  Y2meta propose de télécharger gratuitement des mp3 et mp4 à partir de YouTube. De plus, ce
                  téléchargeur de vidéos YouTube est totalement sûr et sécurisé contre les virus et les logiciels
                  malveillants.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Télécharger la vidéo rapidement et
                  facilement</h3>
                <p>
                  L'outil Y2meta vous aide à télécharger rapidement des MP3 et MP4 à partir de YouTube. Collez
                  simplement l'URL YouTube copiée dans le champ de recherche et cliquez sur le bouton "Convertir".
                  suivez simplement les étapes simples pour télécharger la vidéo YouTube.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Télécharger des vidéos YouTube illimitées</h3>
                <p>
                  Utilisation de ce téléchargeur Y2meta Téléchargez des vidéos YouTube autant que vous le souhaitez sans
                  aucune limitation. c'est entièrement gratuit et il n'est pas nécessaire de s'inscrire et de se
                  connecter.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Prend en charge plusieurs qualités</h3>
                <p>
                  Y2meta offre plusieurs qualités audio et vidéo afin que vous puissiez convertir des vidéos YouTube aux
                  formats MP3, 3GP, MP4, WMA, M4A, FLV, WEBM, MO, etc.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">Qu'est-ce que Y2meta ?</h3>
            <p>
              Y2meta est le meilleur téléchargeur de vidéos YouTube qui vous permet de télécharger rapidement et
              gratuitement des vidéos à partir de YouTube. convertissez également YouTube en MP3 en haute qualité.
            </p>
            <h3 className="mt-2.5 font-semibold">Est-ce que Y2meta est totalement gratuit ?</h3>
            <p>
              Oui, Y2meta est entièrement gratuit pour utiliser et télécharger des vidéos YouTube. vous n'avez pas
              besoin de payer de montant d'abonnement, vous avez juste besoin de l'URL de la vidéo YouTube que vous
              souhaitez télécharger sur votre appareil.
            </p>
            <h3 className="mt-2.5 font-semibold">Comment télécharger des vidéos YouTube sur iPhone ?</h3>
            <p>
              Le processus des utilisateurs d'iPhone est légèrement différent de All use. Vous devez utiliser le
              navigateur Safari sur iOS 13 ou obtenir l'application Documents by Readdle et tout le processus est le
              même que ci-dessus.
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta est-il sûr de télécharger des vidéos de YouTube ?</h3>
            <p>
              Oui, téléchargez des vidéos YouTube à l'aide de notre téléchargeur, vous n'avez pas besoin de partager
              d'informations personnelles et vous n'avez pas non plus besoin d'installer des applications et des
              logiciels tiers sur vos appareils.
            </p>
            <h3 className="mt-2.5 font-semibold">Quels sont les formats vidéo/audio pris en charge ?</h3>
            <p>
              Nous fournissons divers formats de haute qualité et vous permettons de télécharger des mp3 en 320kbps,
              256kbps, 192kbps, 128kbps, 64kbps et mp4 avec une qualité de 720p, 1080p, 1440p, 2160p.
            </p>
            <h3 className="mt-2.5 font-semibold">Où le fichier vidéo YouTube téléchargé est-il stocké sur mon appareil
              ?</h3>
            <p>
              Une fois la vidéo enregistrée sur votre ordinateur à partir de Youtube, vérifiez directement dans le
              dossier "Historique des téléchargements" ou "Téléchargements" de votre navigateur sur votre appareil.
            </p>
            <h3 className="mt-2.5 font-semibold">Ce téléchargeur de vidéos YouTube est-il compatible avec tous les
              appareils ?</h3>
            <p>
              Oui, Y2meta prend en charge le téléchargement de vidéos à partir de YouTube fonctionne sans problème sur
              tous les appareils tels que les ordinateurs, les mobiles et les tablettes, et tous les types de
              navigateurs comme Chrome, Firefox, Microsoft Edge, Safari, Opera, etc.
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
    <html lang="fr"/>
    <title>Y2meta - Téléchargeur YouTube | Télécharger la vidéo YouTube gratuitement</title>
    <meta
      name="description"
      content="Y2meta est un téléchargeur YouTube gratuit populaire qui permet de télécharger gratuitement des vidéos YouTube de haute qualité en 1080p, 2160p, 2k, 4k, 8k sans logiciel d'installation."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="fr"/>
    <meta property="og:title" content="Y2meta - Téléchargeur YouTube | Télécharger la vidéo YouTube gratuitement"/>
    <meta
      property="og:description"
      content="Y2meta est un téléchargeur YouTube gratuit populaire qui permet de télécharger gratuitement des vidéos YouTube de haute qualité en 1080p, 2160p, 2k, 4k, 8k sans logiciel d'installation."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/fr/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/fr/"/>
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
