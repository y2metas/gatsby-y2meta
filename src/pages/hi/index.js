import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("hi");
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
                <Link to="/hi/" className="flex items-center">
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
                  to="/hi/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/hi/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/hi/youtube-to-mp4/">
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
                        to="/hi/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/hi/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/hi/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube वीडियो डाउनलोडर</h1>
            <p>YouTube वीडियो को MP3 और MP4 उच्च गुणवत्ता में निःशुल्क डाउनलोड करें</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="यूट्यूब लिंक यहां खोजें या पेस्ट करें..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  खोज
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              हमारी सेवा का उपयोग करके आप हमारे
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;नियम और शर्तों को स्वीकार कर रहे
                हैं।</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">सर्वश्रेष्ठ YouTube वीडियो डाउनलोडर</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta सबसे लोकप्रिय यूट्यूब डाउनलोडर है जो आपको मुफ्त में यूट्यूब वीडियो डाउनलोड करने की अनुमति देता है।
              YouTube वीडियो को अपने व्यक्तिगत डिवाइस पर सहेजने के लिए तृतीय-पक्ष एप्लिकेशन और सॉफ़्टवेयर इंस्टॉल करने
              की आवश्यकता नहीं है। बस आपको एक विश्वसनीय ब्राउज़र और इंटरनेट कनेक्शन की आवश्यकता है। YouTube, Facebook,
              Video, Dailymotion, Youku, और अन्य सामाजिक साझाकरण वेबसाइटों से अपने पसंदीदा वीडियो को अपनी इच्छित
              गुणवत्ता के साथ डाउनलोड करने का आनंद लें। Y2meta HD गुणवत्ता के साथ YouTube वीडियो डाउनलोड करने का सबसे
              सुरक्षित तरीका प्रदान करता है और इसके लिए लॉगिन या व्यक्तिगत जानकारी साझा करने की आवश्यकता नहीं होती है।
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO, आदि जैसे विभिन्न स्वरूपों में YouTube ऑडियो और वीडियो डाउनलोड
              करें, और 64kbps, 128kbps, 192kbps, 256kbps और 320kbps सहित विभिन्न MP3 बिट दर। Y2meta आपके कंप्यूटर,
              मोबाइल, टैबलेट और अन्य डिवाइस पर आसानी से काम करता है। यह एक सरल और आसान YouTube डाउनलोडर है।
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Y2meta का उपयोग करके YouTube वीडियो कैसे डाउनलोड करें?</strong>
              </h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube वेबसाइट खोलें और YouTube URL कॉपी करें जिसे आप अपने डिवाइस पर डाउनलोड करना चाहते हैं
                </li>
                <li className="mb-2.5">कॉपी किए गए URL को Y2meta सर्च बॉक्स में पेस्ट करें और MP4 या MP3 फॉर्मेट चुनें
                </li>
                <li className="mb-2.5">
                  रूपांतरण पूरा होने तक कुछ सेकंड प्रतीक्षा करें और "डाउनलोड" बटन दबाएं
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta लाभ</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">असीमित YouTube वीडियो नि:शुल्क रूपांतरित करें और डाउनलोड करें</li>
                <li className="mb-2.5">किसी भी YouTube वीडियो को डाउनलोड करने और सहेजने का तेज़ और आसान तरीका</li>
                <li className="mb-2.5">हमारा यूट्यूब डाउनलोडर सभी उपकरणों के साथ पूरी तरह से संगत है</li>
                <li className="mb-2.5">यह हमेशा मुफ़्त है और इसके लिए पंजीकरण की आवश्यकता नहीं है</li>
                <li className="mb-2.5">हम उच्च गुणवत्ता वाली ऑडियो और वीडियो फ़ाइलें प्रदान करते हैं</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% सुरक्षित और मुफ्त</h3>
                <p>
                  Y2meta YouTube से mp3 और mp4 को पूरी तरह से निःशुल्क डाउनलोड करने की पेशकश करता है। साथ ही यह YouTube
                  वीडियो डाउनलोडर वायरस और मैलवेयर से पूरी तरह सुरक्षित और सुरक्षित है।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">वीडियो तेजी से और आसानी से डाउनलोड करें</h3>
                <p>
                  Y2meta टूल आपको YouTube से MP3 और MP4 को जल्दी से डाउनलोड करने में मदद करता है। बस कॉपी किए गए YouTube
                  URL को सर्च बॉक्स में पेस्ट करें और "कन्वर्ट" बटन पर क्लिक करें। YouTube वीडियो डाउनलोड करने के लिए बस
                  सरल चरणों का पालन करें।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">असीमित YouTube वीडियो डाउनलोड करें</h3>
                <p>
                  इस Y2meta डाउनलोडर का उपयोग करके YouTube वीडियो को बिना किसी सीमा के जितना चाहें उतना डाउनलोड करें। यह
                  पूरी तरह से मुफ़्त है और पंजीकरण और लॉगिन करने की कोई आवश्यकता नहीं है।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">एकाधिक गुणवत्ता का समर्थन करें</h3>
                <p>
                  Y2meta कई ऑडियो और वीडियो गुण प्रदान करता है ताकि आप YouTube वीडियो को MP3, 3GP, MP4, WMA, M4A, FLV,
                  WEBM, MO फॉर्मेट आदि में बदल सकें।
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">सामान्य प्रश्न</h2>
            <h3 className="mt-2.5 font-semibold">Y2meta क्या है?</h3>
            <p>
              Y2meta सबसे अच्छा YouTube वीडियो डाउनलोडर है जो आपको YouTube से जल्दी और मुफ्त में वीडियो डाउनलोड करने की
              अनुमति देता है। साथ ही, YouTube को उच्च गुणवत्ता में Mp3 में बदलें।
            </p>
            <h3 className="mt-2.5 font-semibold">क्या Y2meta पूरी तरह से मुफ़्त है?</h3>
            <p>
              हां, Y2meta YouTube वीडियो का उपयोग और डाउनलोड करने के लिए पूरी तरह से निःशुल्क है। आपको किसी भी सदस्यता
              राशि का भुगतान करने की आवश्यकता नहीं है बस उस YouTube वीडियो URL की आवश्यकता है जिसे आप अपने डिवाइस पर
              डाउनलोड करना चाहते हैं।
            </p>
            <h3 className="mt-2.5 font-semibold">आईफोन में यूट्यूब वीडियो कैसे डाउनलोड करें?</h3>
            <p>
              आईफोन यूजर्स की प्रक्रिया ऑल यूज से थोड़ी अलग है। आपको आईओएस 13 पर सफारी ब्राउज़र का उपयोग करने या रीडल ऐप
              द्वारा दस्तावेज़ प्राप्त करने की आवश्यकता है और सभी प्रक्रिया ऊपर की तरह ही है।
            </p>
            <h3 className="mt-2.5 font-semibold">क्या Y2meta YouTube से वीडियो डाउनलोड करना सुरक्षित है?</h3>
            <p>
              हां, हमारे डाउनलोडर का उपयोग करके YouTube वीडियो डाउनलोड करें आपको कोई व्यक्तिगत जानकारी साझा करने की
              आवश्यकता नहीं है और साथ ही अपने उपकरणों पर तृतीय-पक्ष एप्लिकेशन और सॉफ़्टवेयर इंस्टॉल करने की आवश्यकता
              नहीं है।
            </p>
            <h3 className="mt-2.5 font-semibold">समर्थित वीडियो/ऑडियो प्रारूप क्या हैं?</h3>
            <p>
              हम विभिन्न उच्च-गुणवत्ता वाले प्रारूप प्रदान करते हैं और आपको 320kbps, 256kbps, 192kbps, 128kbps, 64kbps
              बिट दर और 720p, 1080p, 1440p, 2160p गुणवत्ता के साथ mp4 डाउनलोड करने की अनुमति देते हैं।
            </p>
            <h3 className="mt-2.5 font-semibold">मेरे डिवाइस पर डाउनलोड की गई YouTube वीडियो फ़ाइल कहाँ संग्रहीत
              है?</h3>
            <p>
              YouTube से आपके कंप्यूटर पर वीडियो सहेजे जाने के बाद सीधे अपने ब्राउज़र में "डाउनलोड इतिहास" या अपने
              डिवाइस में "डाउनलोड" फ़ोल्डर देखें।
            </p>
            <h3 className="mt-2.5 font-semibold">क्या यह यूट्यूब वीडियो डाउनलोडर सभी उपकरणों के साथ संगत है?</h3>
            <p>
              हां, Y2meta YouTube से वीडियो डाउनलोड करने का समर्थन करता है, कंप्यूटर, मोबाइल और टैबलेट जैसे सभी उपकरणों
              और क्रोम, फ़ायरफ़ॉक्स, माइक्रोसॉफ्ट एज, सफारी, ओपेरा और आदि जैसे सभी प्रकार के ब्राउज़रों पर आसानी से काम
              करता है।
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
    <html lang="hi"/>
    <title>Y2meta - यूट्यूब डाउनलोडर | YouTube वीडियो नि:शुल्क डाउनलोड करें</title>
    <meta
      name="description"
      content="Y2meta लोकप्रिय फ्री YouTube डाउनलोडर है जो 1080p, 2160p, 2k, 4k, 8k में उच्च गुणवत्ता के साथ मुफ्त में YouTube वीडियो डाउनलोड करने की अनुमति देता है, बिना सॉफ्टवेयर इंस्टॉल किए।"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="hi"/>
    <meta property="og:title" content="Y2meta - यूट्यूब डाउनलोडर | YouTube वीडियो नि:शुल्क डाउनलोड करें"/>
    <meta
      property="og:description"
      content="Y2meta लोकप्रिय फ्री YouTube डाउनलोडर है जो 1080p, 2160p, 2k, 4k, 8k में उच्च गुणवत्ता के साथ मुफ्त में YouTube वीडियो डाउनलोड करने की अनुमति देता है, बिना सॉफ्टवेयर इंस्टॉल किए।"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/hi/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/hi/"/>
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
