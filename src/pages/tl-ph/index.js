import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("tl-ph");
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
                <Link to="/tl-ph/" className="flex items-center">
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
                  to="/tl-ph/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/tl-ph/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/tl-ph/youtube-to-mp4/">
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
                        to="/tl-ph/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/tl-ph/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/tl-ph/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube Video Downloader</h1>
            <p>Mag-download ng mga video sa YouTube sa MP3, at MP4 na mataas ang kalidad nang libre</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Hanapin o i-paste ang link sa youtube dito..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  Maghanap
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              Sa paggamit ng aming serbisyo tinatanggap mo ang aming
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;Mga Tuntunin at Kundisyon.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Pinakamahusay na YouTube Video Downloader</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Ang Y2meta ay ang pinakasikat na YouTube Downloader na nagbibigay-daan sa iyong mag-download ng mga video
              sa YouTube nang libre. Hindi na kailangang mag-install ng mga third-party na Application at software upang
              i-save ang mga video sa YouTube sa Iyong personal na device. Kailangan mo lang ng maaasahang browser at
              koneksyon sa internet. Masiyahan sa pag-download ng iyong mga paboritong video mula sa YouTube, Facebook,
              Video, Dailymotion, Youku, at iba pang mga social sharing website na may kalidad na gusto mo. Ang Y2meta
              ay nagbibigay ng pinakaligtas na paraan upang Mag-download ng mga video sa YouTube na may HD na Kalidad at
              hindi nangangailangang mag-login o magbahagi ng personal na impormasyon.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Mag-download ng audio at video sa YouTube sa iba't ibang format gaya ng MP3, WEBM, MP4, M4V, 3GP, WMV,
              FLV, MO, atbp, at iba't ibang MP3 bit rate kabilang ang 64kbps, 128kbps, 192kbps, 256kbps at 320kbps.
              Gumagana nang maayos ang Y2meta sa iyong computer, mobile, Tablet, at iba pang Device. isa itong simple at
              Madaling YouTube Downloader.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Paano mag-download ng mga video sa YouTube gamit ang
                Y2meta?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Buksan ang website ng YouTube at kopyahin ang URL ng YouTube na gusto mong i-download sa iyong Device
                </li>
                <li className="mb-2.5">I-paste ang Kinopya na URL sa Y2meta Search box at piliin ang MP4 o MP3 na
                  format
                </li>
                <li className="mb-2.5">
                  Maghintay ng ilang segundo hanggang sa makumpleto ang conversion at pindutin ang "Download" na buton
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Mga Bentahe ng Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">I-convert at i-download ang walang limitasyong mga video sa YouTube na Libre</li>
                <li className="mb-2.5">Mabilis at madaling paraan upang i-download at i-save ang anumang video sa
                  YouTube
                </li>
                <li className="mb-2.5">Ang aming YouTube downloader ay ganap na tugma sa lahat ng device</li>
                <li className="mb-2.5">Ito ay palaging libre at hindi kailangang magparehistro</li>
                <li className="mb-2.5">Nagbibigay kami ng mataas na kalidad na mga file ng audio at video</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% Ligtas at Libre</h3>
                <p>
                  Nag-aalok ang Y2meta ng pag-download ng mp3 at mp4 mula sa YouTube na libre. Gayundin ang YouTube
                  Video Downloader na ito ay ganap na ligtas at secure mula sa mga virus at Malware.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Mabilis at Madaling Mag-download ng Video</h3>
                <p>
                  Tinutulungan ka ng Y2meta tool na mag-download ng MP3 at MP4 mula sa YouTube nang mabilis. I-paste
                  lamang ang kinopyang URL ng YouTube sa box para sa paghahanap at mag-click sa button na "I-convert".
                  sundin lamang ang mga simpleng hakbang upang Mag-download ng Video sa YouTube.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Mag-download ng Walang limitasyong Mga Video sa
                  YouTube</h3>
                <p>
                  Gamit ang Y2meta Downloader na ito, I-download ang Mga Video sa YouTube hangga't gusto mo nang walang
                  anumang limitasyon. ito ay ganap na libre at hindi na kailangang magrehistro at mag-login.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Suportahan ang Maramihang kalidad</h3>
                <p>
                  Nag-aalok ang Y2meta ng maraming katangian ng Audio at video para ma-convert mo ang Mga Video sa
                  YouTube sa mga MP3, 3GP, MP4, WMA, M4A, FLV, WEBM, MO na mga format, atbp.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">Ano ang Y2meta?</h3>
            <p>
              Ang Y2meta ay pinakamahusay na YouTube Video Downloader na nagbibigay-daan sa iyong mag-download ng Video
              mula sa YouTube nang mabilis at nang Libre. gayundin, i-convert ang YouTube sa Mp3 sa mataas na kalidad.
            </p>
            <h3 className="mt-2.5 font-semibold">Libre ba ang Y2meta?</h3>
            <p>
              Oo, ganap na libre ang Y2meta na gamitin at i-download ang mga video sa YouTube. hindi mo kailangang
              magbayad ng anumang halaga ng subscription kailangan lang ng YouTube video URL na gusto mong i-download sa
              iyong device.
            </p>
            <h3 className="mt-2.5 font-semibold">Paano mag-download ng mga video sa YouTube sa iPhone?</h3>
            <p>
              Ang proseso ng mga gumagamit ng iPhone ay bahagyang naiiba sa Lahat ng paggamit. Kailangan mong gumamit ng
              Safari browser sa iOS 13 o kumuha ng Documents by Readdle app at lahat ng proseso ay pareho sa itaas.
            </p>
            <h3 className="mt-2.5 font-semibold">Ligtas ba ang Y2meta na mag-download ng Mga Video mula sa YouTube?</h3>
            <p>
              Oo, Mag-download ng Mga Video sa YouTube gamit ang aming Downloader hindi mo kailangang magbahagi ng
              anumang personal na impormasyon at Hindi mo rin kailangang mag-install ng mga third-party na application
              at software sa iyong mga device.
            </p>
            <h3 className="mt-2.5 font-semibold">Ano ang mga sinusuportahang format ng video/audio?</h3>
            <p>
              Nagbibigay kami ng iba't ibang de-kalidad na format at nagbibigay-daan sa iyong mag-download ng mp3 sa
              320kbps, 256kbps, 192kbps, 128kbps, 64kbps bit rate at mp4 na may 720p, 1080p, 1440p, 2160p na kalidad.
            </p>
            <h3 className="mt-2.5 font-semibold">Saan naka-imbak sa aking device ang na-download na video file sa
              YouTube?</h3>
            <p>
              Pagkatapos ma-save ang video sa iyong computer mula sa Youtube pagkatapos ay direktang suriin sa iyong
              browser ang "download history" o "Downloads" na folder sa iyong device.
            </p>
            <h3 className="mt-2.5 font-semibold">Compatible ba itong YouTube video downloader sa lahat ng device?</h3>
            <p>
              Oo, sinusuportahan ng Y2meta ang pag-download ng mga video mula sa YouTube na gumagana nang maayos sa
              lahat ng device gaya ng mga computer, mobile, at tablet, at lahat ng uri ng browser tulad ng Chrome,
              Firefox, Microsoft Edge, Safari, Opera at iba pa.
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
    <html lang="tl-ph"/>
    <title>Y2meta - YouTube Downloader | I-download ang YouTube Video nang Libre</title>
    <meta
      name="description"
      content="Ang Y2meta ay sikat na Libreng YouTube Downloader na nagbibigay-daan sa pag-download ng video sa YouTube nang Libre na may mataas na kalidad sa 1080p, 2160p, 2k, 4k, 8k nang walang pag-install ng software."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="tl-ph"/>
    <meta property="og:title" content="Y2meta - YouTube Downloader | I-download ang YouTube Video nang Libre"/>
    <meta
      property="og:description"
      content="Ang Y2meta ay sikat na Libreng YouTube Downloader na nagbibigay-daan sa pag-download ng video sa YouTube nang Libre na may mataas na kalidad sa 1080p, 2160p, 2k, 4k, 8k nang walang pag-install ng software."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/tl-ph/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/tl-ph/"/>
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
