import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP4 = () => {
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
    {lang: "en", label: "English", path: "/youtube-to-mp4/"},
    {lang: "de", label: "Deutsch", path: "/de/youtube-to-mp4/"},
    {lang: "es", label: "Español", path: "/es/youtube-to-mp4/"},
    {lang: "fr", label: "Français", path: "/fr/youtube-to-mp4/"},
    {lang: "hi", label: "हिन्दी / Hindi", path: "/hi/youtube-to-mp4/"},
    {lang: "id", label: "Indonesian", path: "/id/youtube-to-mp4/"},
    {lang: "it", label: "Italiano", path: "/it/youtube-to-mp4/"},
    {lang: "ja", label: "ह日本語", path: "/ja/youtube-to-mp4/"},
    {lang: "ko", label: "한국어", path: "/ko/youtube-to-mp4/"},
    {lang: "my", label: "Myanmar (မြန်မာ)", path: "/my/youtube-to-mp4/"},
    {lang: "ms", label: "Malay", path: "/ms/youtube-to-mp4/"},
    {lang: "ph", label: "Filipino", path: "/tl-ph/youtube-to-mp4/"},
    {lang: "pt", label: "Português", path: "/pt/youtube-to-mp4/"},
    {lang: "ru", label: "Русский", path: "/ru/youtube-to-mp4/"},
    {lang: "th", label: "ไทย", path: "/th/youtube-to-mp4/"},
    {lang: "tr", label: "Türkçe", path: "/tr/youtube-to-mp4/"},
    {lang: "vi", label: "Tiếng Việt", path: "/vi/youtube-to-mp4/"},
    {lang: "zh-cn", label: "简体中文", path: "/zh-cn/youtube-to-mp4/"},
    {lang: "zh-tw", label: "繁體中文", path: "/zh-tw/youtube-to-mp4/"},
    {lang: "ar", label: "عربي", path: "/ar/youtube-to-mp4/"},
    {lang: "bn", label: "বাঙালি", path: "/bn/youtube-to-mp4/"},
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">MP4 कनवर्टर करने के लिए यूट्यूब</h1>
            <p>YouTube को MP4 में मुफ़्त कन्वर्ट और डाउनलोड करें</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">सर्वश्रेष्ठ Youtube से MP4 कन्वर्टर</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta एक मुफ्त YouTube डाउनलोडर टूल है जो आपको YouTube वीडियो को कुछ सेकंड में MP4 प्रारूप में डाउनलोड
              करने में मदद करता है। यह YouTube से Mp4 वीडियो डाउनलोड करने का एक त्वरित और आसान तरीका है। किसी भी YouTube
              वीडियो को विभिन्न सर्वोत्तम गुणवत्ता जैसे 360p, 480p, 720p, 1080p, 4K HD और 8K तक डाउनलोड करें।
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              इस तेज़ और सुरक्षित YouTube कन्वर्टर का उपयोग करके YouTube वीडियो को बिना पंजीकरण के अपने डिवाइस पर MP4,
              AVI और MOV में डाउनलोड करें और सेव करें। इससे कोई फर्क नहीं पड़ता कि आप पीसी, टैबलेट, आईफोन और एंड्रॉइड
              फोन का उपयोग करते हैं या नहीं। इसके अतिरिक्त, यह YouTube डाउनलोडर वेब पर चलता है इसलिए आपको सॉफ़्टवेयर या
              ऐप्स इंस्टॉल करने की आवश्यकता नहीं है, यह ब्राउज़िंग को बहुत आसान बनाता है।
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Youtube वीडियो को MP4 में कैसे बदलें?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube लिंक पेस्ट करें या खोज बॉक्स में कीवर्ड दर्ज करें
                </li>
                <li className="mb-2.5">MP4 उस गुणवत्ता के साथ चुनें जिसे आप कनवर्ट करना चाहते हैं और "डाउनलोड" बटन
                  दबाएं
                </li>
                <li className="mb-2.5">
                  MP4 को पूरा करने और अपने डिवाइस पर डाउनलोड करने के लिए रूपांतरण के लिए कुछ क्षण प्रतीक्षा करें
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta लाभ</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">YouTube वीडियो को mp4 में बिना किसी सीमा के कनवर्ट करें जितना आप चाहते हैं</li>
                <li className="mb-2.5">YouTube वीडियो को HD में डाउनलोड करने और सहेजने का तेज़ और आसान तरीका</li>
                <li className="mb-2.5">यह YouTube वीडियो डाउनलोडर 100% सुरक्षित और सुरक्षित है</li>
                <li className="mb-2.5">YouTube से कई उच्च गुणवत्ता वाले प्रारूपों में वीडियो डाउनलोड करें</li>
                <li className="mb-2.5">हमारा Y2meta डाउनलोडर टूल बिना रजिस्टर और लॉगिन के पूरी तरह से निःशुल्क है</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">असीमित और मुफ्त रूपांतरण</h3>
                <p>
                  इस YouTube का उपयोग करके MP4 जितना चाहें YouTube वीडियो डाउनलोड करें। सुविधाओं और YouTube से वीडियो
                  डाउनलोड की संख्या पर कोई सीमा नहीं। साथ ही ये पूरी तरह से फ्री ऑफ कॉस्ट है
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">प्रयोग करने में आसान और तेज़</h3>
                <p>
                  सरल और उपयोगकर्ता के अनुकूल हस्तक्षेप इस YouTube MP4 डाउनलोडर को उपयोग में आसान बनाता है। सरल चरणों के
                  साथ जल्दी से YouTube से MP4 वीडियो डाउनलोड करें।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% सुरक्षित और सुरक्षित</h3>
                <p>
                  हमारा YouTube से MP4 कन्वर्टर SSL लेयर के साथ पूरी तरह से सुरक्षित है, यह सुरक्षा परत वायरस और मैलवेयर
                  से बचाने में मदद करती है, इसलिए इसके बारे में चिंता न करें। YouTube वीडियो पूरी तरह से सुरक्षित और
                  सुरक्षित डाउनलोड करें
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">सभी उपकरणों के साथ संगत</h3>
                <p>
                  हमारा YouTube से MP4 कन्वर्टर वेब आधारित ऐप है इसलिए यह सभी डिवाइस और ब्राउज़र को सपोर्ट करता है।
                  सॉफ़्टवेयर और ऐप्स इंस्टॉल करने की आवश्यकता नहीं है
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">सामान्य प्रश्न</h2>
            <h3 className="mt-2.5 font-semibold">क्या मुझे YouTube वीडियो को mp4 में बदलने के लिए पैसे देने पड़ सकते
              हैं?</h3>
            <p>
              नहीं, इस YouTube डाउनलोडर का उपयोग पूरी तरह से निःशुल्क है और रूपांतरण के लिए आपको पैसे खर्च करने की
              आवश्यकता नहीं है। इसके अलावा, YouTube से MP4 के लिए कोई सुविधा प्रतिबंध नहीं हैं
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube वीडियो को MP4 में कैसे डाउनलोड और कन्वर्ट करें</h3>
            <p>YouTube वेबसाइट खोलें और YouTube वीडियो URL कॉपी करें जिसे आप डाउनलोड करना चाहते हैं</p>
            <p>इस YouTube MP4 डाउनलोडर के खोज बॉक्स में URL पेस्ट करें</p>
            <p>गुणवत्ता चुनें और डाउनलोड बटन दबाएं</p>
            <h3 className="mt-2.5 font-semibold">क्या यह Youtube to mp4 कन्वर्टर सभी डिवाइस पर काम करता है?</h3>
            <p>हमारा YouTube से MP4 कन्वर्टर एक वेब-आधारित ऐप है, इसलिए यह सभी उपकरणों और ब्राउज़रों के साथ संगत है।
              सॉफ़्टवेयर और ऐप्स इंस्टॉल करने की आवश्यकता नहीं है</p>
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

export default YouTubeToMP4;

export const Head = () => (
  <>
    <html lang="hi"/>
    <title>HD में YouTube से MP4 कन्वर्टर मुफ्त</title>
    <meta
      name="description"
      content="YouTube को 1080p, 2k, 4k HD में मुफ्त में MP4 में बदलें और डाउनलोड करें। पीसी, मोबाइल, आईफोन के लिए हमारे YouTube से MP4 डाउनलोडर और ऑनलाइन कन्वर्टर का उपयोग करना"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="hi"/>
    <meta property="og:title" content="HD में YouTube से MP4 कन्वर्टर मुफ्त"/>
    <meta
      property="og:description"
      content="YouTube को 1080p, 2k, 4k HD में मुफ्त में MP4 में बदलें और डाउनलोड करें। पीसी, मोबाइल, आईफोन के लिए हमारे YouTube से MP4 डाउनलोडर और ऑनलाइन कन्वर्टर का उपयोग करना"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/hi/youtube-to-mp4/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/hi/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="en" href="https://y2meta.mobi/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="de" href="https://y2meta.mobi/de/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="es" href="https://y2meta.mobi/es/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="fr" href="https://y2meta.mobi/fr/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="hi" href="https://y2meta.mobi/hi/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="id" href="https://y2meta.mobi/id/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="it" href="https://y2meta.mobi/it/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ja" href="https://y2meta.mobi/ja/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ko" href="https://y2meta.mobi/ko/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="my" href="https://y2meta.mobi/my/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ms" href="https://y2meta.mobi/ms/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ph" href="https://y2meta.mobi/tl-ph/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="pt" href="https://y2meta.mobi/pt/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ru" href="https://y2meta.mobi/ru/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="th" href="https://y2meta.mobi/th/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="tr" href="https://y2meta.mobi/tr/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="vi" href="https://y2meta.mobi/vi/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="zh-cn" href="https://y2meta.mobi/zh-cn/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="zh-tw" href="https://y2meta.mobi/zh-tw/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="ar" href="https://y2meta.mobi/ar/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="bn" href="https://y2meta.mobi/bn/youtube-to-mp4/"/>
    <link rel="alternate" hrefLang="x-default" href="https://y2meta.mobi/youtube-to-mp4/"/>
  </>
)
