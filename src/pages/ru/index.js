import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("ru");
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
                <Link to="/ru/" className="flex items-center">
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
                  to="/ru/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/ru/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/ru/youtube-to-mp4/">
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
                        to="/ru/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/ru/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/ru/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - загрузчик видео с YouTube</h1>
            <p>Скачать видео с YouTube в высоком качестве MP3 и MP4 бесплатно</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Найдите или вставьте ссылку на YouTube здесь..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Поиск
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              Используя наш сервис, вы принимаете наши
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;Условия.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Лучший загрузчик видео с YouTube</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta — самый популярный загрузчик YouTube, который позволяет бесплатно скачивать видео с YouTube. Нет
              необходимости устанавливать сторонние приложения и программное обеспечение для сохранения видео YouTube на
              Вашем личном устройстве. Просто Вам потребуется надежный браузер и подключение к интернету. Наслаждайтесь
              загрузкой любимых видео с YouTube, Facebook, Video, Dailymotion, Youku и других социальных сетей с
              желаемым качеством. Y2meta предоставляет самый безопасный способ загрузки видео с YouTube в HD-качестве,
              не требуя входа в систему или обмена личной информацией.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Скачивайте аудио и видео с YouTube в различных форматах, таких как MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO
              и т. д., и с разной скоростью передачи MP3, включая 64 кбит/с, 128 кбит/с, 192 кбит/с, 256 кбит/с и 320
              кбит/с. Y2meta без проблем работает на вашем компьютере, мобильном телефоне, планшете и других
              устройствах. это простой и удобный загрузчик YouTube.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Как скачать видео с YouTube с помощью Y2meta?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Откройте веб-сайт YouTube и скопируйте URL-адрес YouTube, который вы хотите загрузить на свое
                  устройство.
                </li>
                <li className="mb-2.5">Вставьте скопированный URL-адрес в поле поиска Y2meta и выберите формат MP4 или
                  MP3.
                </li>
                <li className="mb-2.5">
                  Подождите несколько секунд, пока конвертация не завершится, и нажмите кнопку «Скачать».
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Преимущества Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Конвертируйте и загружайте неограниченное количество видео с YouTube бесплатно
                </li>
                <li className="mb-2.5">Быстрый и простой способ скачать и сохранить любое видео с YouTube</li>
                <li className="mb-2.5">Наш загрузчик YouTube полностью совместим со всеми устройствами</li>
                <li className="mb-2.5">Это всегда бесплатно и не требует регистрации</li>
                <li className="mb-2.5">Мы предоставляем высококачественные аудио и видео файлы</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% безопасно и бесплатно</h3>
                <p>
                  Y2meta предлагает скачать mp3 и mp4 с YouTube совершенно бесплатно. Также этот YouTube Video
                  Downloader полностью безопасен и защищен от вирусов и вредоносных программ.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Скачать видео быстро и легко</h3>
                <p>
                  Инструмент Y2meta поможет вам быстро скачать MP3 и MP4 с YouTube. Просто вставьте скопированный
                  URL-адрес YouTube в поле поиска и нажмите кнопку «Конвертировать». просто следуйте простым шагам,
                  чтобы скачать видео с YouTube.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Скачать неограниченное количество видео с
                  YouTube</h3>
                <p>
                  С помощью этого Y2meta Downloader загружайте видео с YouTube столько, сколько хотите, без каких-либо
                  ограничений. это совершенно бесплатно и не нужно регистрироваться и входить в систему.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Поддержка нескольких качеств</h3>
                <p>
                  Y2meta предлагает различные качества аудио и видео, поэтому вы можете конвертировать видео YouTube в
                  форматы MP3, 3GP, MP4, WMA, M4A, FLV, WEBM, MO и т. д.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">Часто задаваемые вопросы</h2>
            <h3 className="mt-2.5 font-semibold">Что такое Y2meta?</h3>
            <p>
              Y2meta — лучший загрузчик видео с YouTube, который позволяет быстро и бесплатно скачивать видео с YouTube.
              также конвертируйте YouTube в MP3 в высоком качестве.
            </p>
            <h3 className="mt-2.5 font-semibold">Является ли Y2meta абсолютно бесплатным?</h3>
            <p>
              Да, Y2meta абсолютно бесплатна для использования и загрузки видео с YouTube. вам не нужно платить
              какую-либо сумму за подписку, просто нужен URL-адрес видео YouTube, который вы хотите загрузить на свое
              устройство.
            </p>
            <h3 className="mt-2.5 font-semibold">Как скачать видео с YouTube на iPhone?</h3>
            <p>
              Процесс пользователей iPhone немного отличается от All use. Вам нужно использовать браузер Safari на iOS
              13 или получить приложение Documents by Readdle, и весь процесс такой же, как указано выше.
            </p>
            <h3 className="mt-2.5 font-semibold">Безопасно ли с Y2meta загружать видео с YouTube?</h3>
            <p>
              Да, загружая видео с YouTube с помощью нашего загрузчика, вам не нужно делиться личной информацией, а
              также не нужно устанавливать сторонние приложения и программное обеспечение на свои устройства.
            </p>
            <h3 className="mt-2.5 font-semibold">Какие поддерживаемые форматы видео/аудио?</h3>
            <p>
              Мы предоставляем различные высококачественные форматы и позволяем вам загружать mp3 с битрейтом 320
              кбит/с, 256 кбит/с, 192 кбит/с, 128 кбит/с, 64 кбит/с и mp4 с качеством 720p, 1080p, 1440p, 2160p.
            </p>
            <h3 className="mt-2.5 font-semibold">Где на моем устройстве хранится загруженный видеофайл YouTube?</h3>
            <p>
              После того, как видео будет сохранено на вашем компьютере с Youtube, проверьте прямо в браузере папку
              «История загрузок» или «Загрузки» на вашем устройстве.
            </p>
            <h3 className="mt-2.5 font-semibold">Совместим ли этот загрузчик видео с YouTube со всеми устройствами?</h3>
            <p>
              Да, Y2meta поддерживает загрузку видео с YouTube, работает без сбоев на всех устройствах, таких как
              компьютеры, мобильные устройства и планшеты, а также во всех типах браузеров, таких как Chrome, Firefox,
              Microsoft Edge, Safari, Opera и т. д.
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
    <html lang="ru"/>
    <title>Y2meta - загрузчик YouTube | Скачать видео с YouTube бесплатно</title>
    <meta
      name="description"
      content="Y2meta - популярный бесплатный загрузчик YouTube, позволяющий бесплатно загружать видео с YouTube в высоком качестве в 1080p, 2160p, 2k, 4k, 8k без установки программного обеспечения."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="ru"/>
    <meta property="og:title" content="Y2meta - загрузчик YouTube | Скачать видео с YouTube бесплатно"/>
    <meta
      property="og:description"
      content="Y2meta - популярный бесплатный загрузчик YouTube, позволяющий бесплатно загружать видео с YouTube в высоком качестве в 1080p, 2160p, 2k, 4k, 8k без установки программного обеспечения."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/ru/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/ru/"/>
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
