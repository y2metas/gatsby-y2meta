import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("id");
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
                <Link to="/id/" className="flex items-center">
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
                  to="/id/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/id/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/id/youtube-to-mp4/">
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
                        to="/id/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/id/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/id/youtube-to-mp4/">
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
            <p>Unduh video YouTube dalam format MP3, dan MP4 berkualitas tinggi secara gratis</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Cari atau rekatkan tautan youtube di sini..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Mencari
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              Dengan menggunakan layanan kami, Anda menerima
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;Syarat dan Ketentuan kami.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Pengunduh Video YouTube Terbaik</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta adalah Pengunduh YouTube paling populer yang memungkinkan Anda mengunduh video YouTube secara
              gratis. Tidak perlu menginstal Aplikasi dan perangkat lunak pihak ketiga untuk menyimpan video YouTube di
              perangkat pribadi Anda. Hanya Anda yang membutuhkan browser dan koneksi internet yang andal. Nikmati
              mengunduh video favorit Anda dari YouTube, Facebook, Video, Dailymotion, Youku, dan situs web berbagi
              sosial lainnya dengan kualitas yang Anda inginkan. Y2meta menyediakan cara teraman untuk Mengunduh video
              YouTube dengan Kualitas HD dan tidak perlu masuk atau berbagi informasi pribadi.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Unduh audio dan video YouTube dalam berbagai format seperti MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO, dll,
              dan kecepatan bit MP3 yang berbeda termasuk 64kbps, 128kbps, 192kbps, 256kbps, dan 320kbps. Y2meta bekerja
              dengan lancar di komputer, ponsel, Tablet, dan Perangkat Anda lainnya. ini adalah Pengunduh YouTube yang
              sederhana dan Mudah.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Bagaimana cara mengunduh video YouTube menggunakan Y2meta?</strong>
              </h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Buka situs web YouTube dan salin URL YouTube yang ingin Anda unduh ke Perangkat Anda
                </li>
                <li className="mb-2.5">Rekatkan URL yang Disalin ke dalam kotak Pencarian Y2meta dan pilih format MP4
                  atau MP3
                </li>
                <li className="mb-2.5">
                  Tunggu beberapa detik hingga konversi selesai dan tekan tombol "Unduh".
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Keuntungan Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Konversikan dan unduh video YouTube tanpa batas Gratis</li>
                <li className="mb-2.5">Cara cepat dan mudah untuk mengunduh dan menyimpan video YouTube apa pun</li>
                <li className="mb-2.5">Pengunduh YouTube kami sepenuhnya kompatibel dengan semua perangkat</li>
                <li className="mb-2.5">Itu selalu gratis dan tidak perlu registrasi</li>
                <li className="mb-2.5">Kami menyediakan file audio dan video berkualitas tinggi</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% Aman dan Gratis</h3>
                <p>
                  Y2meta menawarkan unduhan mp3 dan mp4 dari YouTube secara gratis. Juga Pengunduh Video YouTube ini
                  benar-benar aman dan aman dari virus dan Malware.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Unduh Video dengan Cepat dan Mudah</h3>
                <p>
                  Alat Y2meta membantu Anda mengunduh MP3 dan MP4 dari YouTube dengan cepat. Cukup rekatkan URL YouTube
                  yang disalin ke dalam kotak pencarian dan klik tombol "Ubah". cukup ikuti langkah-langkah sederhana
                  untuk Mengunduh Video YouTube.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Unduh Video YouTube Tanpa Batas</h3>
                <p>
                  Menggunakan Pengunduh Y2meta ini Unduh Video YouTube sebanyak yang Anda inginkan tanpa batasan apa
                  pun. itu benar-benar gratis dan tidak perlu mendaftar dan login.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Dukungan Beberapa kualitas</h3>
                <p>
                  Y2meta menawarkan banyak kualitas Audio dan video sehingga Anda dapat mengonversi Video YouTube ke
                  format MP3, 3GP, MP4, WMA, M4A, FLV, WEBM, MO, dll.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">Apa itu Y2meta?</h3>
            <p>
              Y2meta adalah Pengunduh Video YouTube terbaik yang memungkinkan Anda Mengunduh Video dari YouTube dengan
              cepat dan Gratis. juga, konversikan YouTube ke Mp3 dengan kualitas tinggi.
            </p>
            <h3 className="mt-2.5 font-semibold">Apakah Y2meta Benar-Benar Gratis?</h3>
            <p>
              Ya, Y2meta sepenuhnya gratis untuk digunakan dan mengunduh video YouTube. Anda tidak perlu membayar jumlah
              langganan apa pun, hanya perlu URL video YouTube yang ingin Anda unduh di perangkat Anda.
            </p>
            <h3 className="mt-2.5 font-semibold">Bagaimana cara mengunduh video YouTube ke iPhone?</h3>
            <p>
              Proses pengguna iPhone sedikit berbeda dari Semua penggunaan. Anda perlu menggunakan browser Safari di iOS
              13 atau mendapatkan Dokumen dengan aplikasi Readdle dan semua prosesnya sama seperti di atas.
            </p>
            <h3 className="mt-2.5 font-semibold">Apakah Y2meta aman untuk mengunduh Video dari YouTube?</h3>
            <p>
              Ya, Unduh Video YouTube menggunakan Pengunduh kami, Anda tidak perlu membagikan informasi pribadi apa pun
              dan Juga tidak perlu menginstal aplikasi dan perangkat lunak pihak ketiga di perangkat Anda.
            </p>
            <h3 className="mt-2.5 font-semibold">Apa saja format video/audio yang didukung?</h3>
            <p>
              Kami menyediakan berbagai format berkualitas tinggi dan memungkinkan Anda mengunduh mp3 dalam 320kbps,
              256kbps, 192kbps, 128kbps, 64kbps bit rate dan mp4 dengan kualitas 720p, 1080p, 1440p, 2160p.
            </p>
            <h3 className="mt-2.5 font-semibold">Di mana file video YouTube yang diunduh disimpan di perangkat
              saya?</h3>
            <p>
              Setelah video disimpan ke komputer Anda dari Youtube, periksa langsung di browser Anda "riwayat unduhan"
              atau folder "Unduhan" di perangkat Anda.
            </p>
            <h3 className="mt-2.5 font-semibold">Apakah pengunduh video YouTube ini kompatibel dengan semua
              perangkat?</h3>
            <p>
              Ya, Y2meta mendukung pengunduhan video dari YouTube bekerja dengan lancar di semua perangkat seperti
              komputer, ponsel, dan tablet, dan semua jenis browser seperti Chrome, Firefox, Microsoft Edge, Safari,
              Opera, dll.
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
    <html lang="id"/>
    <title>Y2meta - Pengunduh YouTube | Unduh Video YouTube Gratis</title>
    <meta
      name="description"
      content="Y2meta adalah Pengunduh YouTube Gratis populer yang memungkinkan untuk Mengunduh video YouTube Gratis dengan kualitas tinggi dalam 1080p, 2160p, 2k, 4k, 8k tanpa menginstal perangkat lunak."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="id"/>
    <meta property="og:title" content="Y2meta - Pengunduh YouTube | Unduh Video YouTube Gratis"/>
    <meta
      property="og:description"
      content="Y2meta adalah Pengunduh YouTube Gratis populer yang memungkinkan untuk Mengunduh video YouTube Gratis dengan kualitas tinggi dalam 1080p, 2160p, 2k, 4k, 8k tanpa menginstal perangkat lunak."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/id/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/id/"/>
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
