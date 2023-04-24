import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("ms");
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
                <Link to="/ms/" className="flex items-center">
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
                  to="/ms/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/ms/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/ms/youtube-to-mp4/">
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
                        to="/ms/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/ms/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/ms/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - Pengunduh Video YouTube</h1>
            <p>Muat turun video YouTube dalam MP3 dan MP4 berkualiti tinggi secara percuma</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Cari atau tampal pautan youtube di sini..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Cari
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              Dengan menggunakan perkhidmatan kami, anda menerima
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;Terma dan Syarat kami.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Pengunduh Video YouTube Terbaik</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta ialah Pengunduh YouTube paling popular yang membolehkan anda Muat Turun video YouTube secara
              percuma. Tidak perlu memasang Aplikasi dan perisian pihak ketiga untuk menyimpan video YouTube pada
              peranti peribadi Anda. Just You memerlukan pelayar yang boleh dipercayai dan sambungan internet. Nikmati
              memuat turun video kegemaran anda daripada YouTube, Facebook, Video, Dailymotion, Youku dan tapak web
              perkongsian sosial lain dengan kualiti yang anda inginkan. Y2meta menyediakan cara paling selamat untuk
              Memuat turun video YouTube dengan Kualiti HD dan tidak perlu log masuk atau berkongsi maklumat peribadi.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Muat turun audio dan video YouTube dalam pelbagai format seperti MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO,
              dll, dan kadar bit MP3 yang berbeza termasuk 64kbps, 128kbps, 192kbps, 256kbps dan 320kbps. Y2meta
              berfungsi dengan lancar pada komputer, mudah alih, Tablet dan Peranti anda yang lain. ia adalah Pengunduh
              YouTube yang ringkas dan Mudah.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Bagaimana untuk memuat turun video YouTube menggunakan
                Y2meta?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Buka tapak web YouTube dan salin URL YouTube yang anda mahu muat turun ke Peranti anda
                </li>
                <li className="mb-2.5">Tampal URL yang Disalin ke dalam kotak Carian Y2meta dan pilih format MP4 atau
                  MP3
                </li>
                <li className="mb-2.5">
                  Tunggu beberapa saat sehingga penukaran selesai dan tekan butang "Muat Turun".
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Kelebihan Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Tukar dan muat turun video YouTube tanpa had Percuma daripada kos</li>
                <li className="mb-2.5">Cara cepat dan mudah untuk memuat turun dan menyimpan mana-mana video YouTube
                </li>
                <li className="mb-2.5">Pemuat turun YouTube kami serasi sepenuhnya dengan semua peranti</li>
                <li className="mb-2.5">Ia sentiasa percuma dan tidak perlu mendaftar</li>
                <li className="mb-2.5">Kami menyediakan fail audio dan video berkualiti tinggi</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% Selamat dan Percuma</h3>
                <p>
                  Y2meta menawarkan muat turun mp3 dan mp4 dari YouTube secara percuma. Juga Pemuat Turun Video YouTube
                  ini benar-benar selamat dan terjamin daripada virus dan Hasad.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Muat Turun Video Pantas dan Mudah</h3>
                <p>
                  Alat Y2meta membantu anda memuat turun MP3 dan MP4 daripada YouTube dengan cepat. Hanya tampal URL
                  YouTube yang disalin ke dalam kotak carian dan klik pada butang "Tukar". cuma ikut langkah mudah untuk
                  Muat Turun Video YouTube.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Muat turun Video YouTube Tanpa Had</h3>
                <p>
                  Menggunakan Y2meta Downloader Muat turun Video YouTube seberapa banyak yang anda mahu tanpa sebarang
                  had. ia benar-benar percuma dan tidak perlu mendaftar dan log masuk.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Menyokong Pelbagai kualiti</h3>
                <p>
                  Y2meta menawarkan berbilang kualiti Audio dan video supaya anda boleh menukar Video YouTube kepada
                  format MP3, 3GP, MP4, WMA, M4A, FLV, WEBM, MO, dsb.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">Soalan Lazim</h2>
            <h3 className="mt-2.5 font-semibold">Apakah Y2meta?</h3>
            <p>
              Y2meta ialah Pengunduh Video YouTube terbaik yang membolehkan anda Muat Turun Video daripada YouTube
              dengan pantas dan Percuma. juga, tukar YouTube kepada Mp3 dalam kualiti yang tinggi.
            </p>
            <h3 className="mt-2.5 font-semibold">Adakah Y2meta Percuma?</h3>
            <p>
              Ya, Y2meta adalah percuma untuk menggunakan dan memuat turun video YouTube. anda tidak perlu membayar
              sebarang amaun langganan hanya perlu URL video YouTube yang ingin Anda muat turun pada peranti anda.
            </p>
            <h3 className="mt-2.5 font-semibold">Bagaimana untuk memuat turun video YouTube ke iPhone?</h3>
            <p>
              Proses pengguna iPhone berbeza sedikit daripada Semua penggunaan. Anda perlu menggunakan penyemak imbas
              Safari pada iOS 13 atau dapatkan apl Documents by Readdle dan semua proses adalah sama seperti di atas.
            </p>
            <h3 className="mt-2.5 font-semibold">Adakah Y2meta selamat untuk memuat turun Video daripada YouTube?</h3>
            <p>
              Ya, Muat Turun Video YouTube menggunakan Pemuat turun kami, anda tidak perlu berkongsi sebarang maklumat
              peribadi dan Juga tidak perlu memasang aplikasi dan perisian pihak ketiga pada peranti anda.
            </p>
            <h3 className="mt-2.5 font-semibold">Apakah format video/audio yang disokong?</h3>
            <p>
              Kami menyediakan pelbagai format berkualiti tinggi dan membenarkan anda memuat turun mp3 dalam 320kbps,
              256kbps, 192kbps, 128kbps, kadar bit 64kbps dan mp4 dengan kualiti 720p, 1080p, 1440p, 2160p.
            </p>
            <h3 className="mt-2.5 font-semibold">Di manakah fail video YouTube yang dimuat turun disimpan pada peranti
              saya?</h3>
            <p>
              Selepas video disimpan ke komputer anda daripada Youtube kemudian semak terus dalam pelayar anda "sejarah
              muat turun" atau folder "Muat Turun" dalam peranti anda.
            </p>
            <h3 className="mt-2.5 font-semibold">Adakah pemuat turun video YouTube ini serasi dengan semua peranti?</h3>
            <p>
              Ya, Y2meta menyokong muat turun video daripada YouTube berfungsi dengan lancar pada semua peranti seperti
              komputer, mudah alih dan tablet, dan semua jenis penyemak imbas seperti Chrome, Firefox, Microsoft Edge,
              Safari, Opera dan lain-lain.
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
    <html lang="ms"/>
    <title>Y2meta - YouTube Downloader | Muat turun Video YouTube Percuma</title>
    <meta
      name="description"
      content="Y2meta ialah Muat Turun YouTube Percuma yang popular membenarkan Muat Turun video YouTube secara Percuma dengan kualiti tinggi dalam 1080p, 2160p, 2k, 4k, 8k tanpa memasang perisian."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="ms"/>
    <meta property="og:title" content="Y2meta - YouTube Downloader | Muat turun Video YouTube Percuma"/>
    <meta
      property="og:description"
      content="Y2meta ialah Muat Turun YouTube Percuma yang popular membenarkan Muat Turun video YouTube secara Percuma dengan kualiti tinggi dalam 1080p, 2160p, 2k, 4k, 8k tanpa memasang perisian."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/ms/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/ms/"/>
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
