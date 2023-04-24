import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP3 = () => {
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
                    <nav className="grid gap-y-8">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTube से MP3 कन्वर्टर</h1>
            <p>YouTube वीडियो को मुफ्त में एमपी3 में बदलें और डाउनलोड करें</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">सर्वश्रेष्ठ YouTube से MP3 कन्वर्टर</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta एक तेज़ और सरल YouTube से MP3 कन्वर्टर है। हमारा लोकप्रिय YouTube से MP3 डाउनलोडर आपको आसानी से
              YouTube वीडियो को उच्च गुणवत्ता और मुफ्त में MP3 में बदलने और डाउनलोड करने की अनुमति देता है। इसके अलावा,
              आप 64kbps, 128kbps, 192kbps और 320kbps जैसे कई गुणवत्ता विकल्पों के साथ mp3 डाउनलोड कर सकते हैं।
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              यह YouTube से Mp3 कन्वर्टर बिना किसी एप्लिकेशन या सॉफ़्टवेयर को इंस्टॉल किए डेस्कटॉप, लैपटॉप, टैबलेट और
              स्मार्टफ़ोन सहित सभी उपकरणों पर आसानी से काम करता है। रूपांतरण प्रक्रिया त्वरित और सुविधाजनक है बस YouTube
              URL पेस्ट करें और कुछ सरल चरणों में आपकी youtube mp3 फ़ाइल कुछ ही सेकंड में डाउनलोड के लिए तैयार है। यह
              पूरी तरह से सुरक्षित और सुरक्षित यूट्यूब एमपी3 कन्वर्टर है।
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>YouTube वीडियो को MP3 ऑनलाइन में मुफ्त में कैसे बदलें</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube वीडियो URL पेस्ट करें या खोज बॉक्स में कीवर्ड डालें, फिर "खोज" बटन पर क्लिक करें।
                </li>
                <li className="mb-2.5">MP3 गुणवत्ता चुनें और "डाउनलोड" बटन दबाएं।</li>
                <li className="mb-2.5">
                  कुछ सेकंड प्रतीक्षा करें और सफल Mp3 रूपांतरण के बाद डाउनलोड बटन पर क्लिक करें।
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta लाभ</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">बिना किसी सीमा के YouTube से MP3 फ़ाइलें कनवर्ट करें और डाउनलोड करें</li>
                <li className="mb-2.5">कोई सॉफ्टवेयर और पंजीकरण के बिना स्थापित करने की आवश्यकता नहीं है</li>
                <li className="mb-2.5">100% सुरक्षित और सुरक्षित यूट्यूब कन्वर्टर</li>
                <li className="mb-2.5">सभी ब्राउज़रों और उपकरणों के साथ संगत</li>
                <li className="mb-2.5">पूरी तरह से नि:शुल्क उच्च गुणवत्ता वाले ऑडियो के साथ Youtube को mp3 में बदलें
                </li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">आसान और तेज़ रूपांतरण</h3>
                <p>
                  YouTube से MP3 डाउनलोड करना आसान है बस वह YouTube URL दर्ज करें जिसे आप डाउनलोड करना चाहते हैं और
                  डाउनलोड बटन पर क्लिक करें। आपकी रूपांतरित फ़ाइलें कुछ ही सेकंड में तैयार हो जाती हैं।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">उच्च गुणवत्ता वाले प्रारूप प्रदान करें</h3>
                <p>
                  हम 64kbps, 128kbps, 192kbps, 256kbps, और 320 kbps जैसे उच्च-गुणवत्ता वाले स्वरूपों में YouTube को mp3
                  में बदलने की पेशकश करते हैं। आप आवश्यकता के अनुसार चुन और डाउनलोड कर सकते हैं।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta download" width={50}
                           quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">बिना किसी सीमा के रूपांतरण</h3>
                <p>
                  किसी भी YouTube वीडियो को बिना किसी सीमा के मुफ्त में MP3 में बदलें। Youtube से Mp3 डाउनलोड करने के
                  लिए किसी सॉफ्टवेयर या ऐप को इंस्टॉल करने की आवश्यकता नहीं है।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">सभी प्लेटफार्मों के साथ संगत</h3>
                <p>
                  हमारा YouTube कन्वर्टर पीसी, टैबलेट, आईफोन, एंड्रॉइड फोन आदि सभी प्रकार के उपकरणों के साथ संगत है, साथ
                  ही Y2meta क्रोम, माइक्रोसॉफ्ट एज, फ़ायरफ़ॉक्स, ओपेरा और किसी अन्य सहित सभी ब्राउज़रों का समर्थन करता
                  है।
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">सामान्य प्रश्न</h2>
            <h3 className="mt-2.5 font-semibold">क्या यह YouTube से MP3 परिवर्तक उपयोग करने के लिए निःशुल्क है?</h3>
            <p>
              हां, हमारा Y2meta कन्वर्टर बिना अकाउंट रजिस्टर किए YouTube से Mp3 डाउनलोड करने के लिए पूरी तरह से फ्री है
            </p>
            <h3 className="mt-2.5 font-semibold">क्या मैं इस Youtube को mp3 में सभी उपकरणों पर उपयोग कर सकता हूँ?</h3>
            <p>
              हां, बिल्कुल, यह YouTube से Mp3 कन्वर्टर कंप्यूटर, मोबाइल और टैबलेट सहित सभी प्रकार के उपकरणों का समर्थन
              करता है।
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube वीडियो से MP3 कैसे डाउनलोड करें?</h3>
            <p>Youtube वीडियो लिंक को कॉपी करें जिसे आप YouTube को mp3 में बदलना चाहते हैं</p>
            <p>YouTube URL को सर्च बॉक्स में पेस्ट करें</p>
            <p>सर्च बटन दबाएं फिर Mp3 चुनें और कन्वर्ट बटन पर क्लिक करें</p>
            <p>रूपांतरण सफलतापूर्वक पूरा होने के लिए कुछ सेकंड प्रतीक्षा करें, फिर "डाउनलोड करें" बटन पर क्लिक करें।</p>
            <h3 className="mt-2.5 font-semibold">YouTube से Mp3 डाउनलोड की अधिकतम संख्या कितनी है?</h3>
            <p>
              आप YouTube को Mp3 अनलिमिटेड में कन्वर्ट कर सकते हैं और जब इस YouTube कन्वर्टर का उपयोग करने की बात आती है
              तो कोई प्रतिबंध नहीं है। सभी सुविधाएँ पूरी तरह से निःशुल्क और बिना किसी सीमा के।
            </p>
            <h3 className="mt-2.5 font-semibold">क्या मुझे ब्राउज़र एक्सटेंशन या सॉफ़्टवेयर स्थापित करने की आवश्यकता
              है?</h3>
            <p>
              नहीं, हमारा YouTube कन्वर्टर वेब पर काम करता है इसलिए आपको कोई सॉफ़्टवेयर या एक्सटेंशन इंस्टॉल करने की
              आवश्यकता नहीं है। आपको बस एक वेब ब्राउज़र और एक विश्वसनीय इंटरनेट कनेक्शन की आवश्यकता है।
            </p>
            <h3 className="mt-2.5 font-semibold">इस YouTube परिवर्तक का उपयोग करके YouTube से mp3 डाउनलोड करना सुरक्षित
              है?</h3>
            <p>
              हां, हमारा Youtube से Mp3 कन्वर्टर SSL लेयर के साथ सुरक्षित है जो यह सुनिश्चित करता है कि वे लोग सुरक्षित
              रूप से वीडियो डाउनलोड कर सकें। हम प्रतिदिन सुरक्षा की निगरानी करते हैं वायरस और मैलवेयर से सुरक्षित रहने
              के लिए हमारा YouTube To Mp3 कन्वर्टर।
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
    <html lang="hi"/>
    <title>YouTube से MP3 कन्वर्टर - Y2meta</title>
    <meta
      name="description"
      content="Y2meta फ्री यूट्यूब टू एमपी3 कन्वर्टर है, बिना सॉफ्टवेयर इंस्टाल किए पीसी, आईफोन और एंड्रॉइड पर यूट्यूब से एमपी3 फ्री करने की इजाजत देता है।"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="hi"/>
    <meta property="og:title" content="YouTube से MP3 कन्वर्टर - Y2meta"/>
    <meta
      property="og:description"
      content="Y2meta फ्री यूट्यूब टू एमपी3 कन्वर्टर है, बिना सॉफ्टवेयर इंस्टाल किए पीसी, आईफोन और एंड्रॉइड पर यूट्यूब से एमपी3 फ्री करने की इजाजत देता है।"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/hi/youtube-to-mp3/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/hi/youtube-to-mp3/"/>
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