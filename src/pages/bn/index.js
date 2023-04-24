import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("bn");
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
                <Link to="/bn/" className="flex items-center">
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
                  to="/bn/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/bn/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/bn/youtube-to-mp4/">
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
                        to="/bn/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/bn/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/bn/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube ভিডিও ডাউনলোডার</h1>
            <p>বিনামূল্যের জন্য MP3, এবং MP4 উচ্চ মানের YouTube ভিডিও ডাউনলোড করুন</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="এখানে ইউটিউব লিঙ্ক অনুসন্ধান বা পেস্ট করুন..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  অনুসন্ধান করুন
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              আমাদের পরিষেবা ব্যবহার করে আপনি আমাদের
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;শর্তাবলী স্বীকার করছেন।</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">সেরা ইউটিউব ভিডিও ডাউনলোডার</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta হল সবচেয়ে জনপ্রিয় YouTube ডাউনলোডার যা আপনাকে বিনামূল্যে YouTube ভিডিও ডাউনলোড করতে দেয়। আপনার
              ব্যক্তিগত ডিভাইসে YouTube ভিডিও সংরক্ষণ করতে তৃতীয় পক্ষের অ্যাপ্লিকেশন এবং সফ্টওয়্যার ইনস্টল করার
              প্রয়োজন নেই৷ শুধু আপনার একটি নির্ভরযোগ্য ব্রাউজার এবং ইন্টারনেট সংযোগ প্রয়োজন। ইউটিউব, ফেসবুক, ভিডিও,
              ডেইলিমোশন, ইউকু এবং অন্যান্য সামাজিক শেয়ারিং ওয়েবসাইটগুলি থেকে আপনার পছন্দের মানের সাথে আপনার পছন্দের
              ভিডিওগুলি ডাউনলোড করে উপভোগ করুন৷ Y2meta HD কোয়ালিটির সাথে YouTube ভিডিও ডাউনলোড করার সবচেয়ে নিরাপদ
              উপায় প্রদান করে এবং লগইন বা ব্যক্তিগত তথ্য শেয়ার করার প্রয়োজন নেই।
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              YouTube অডিও এবং ভিডিও বিভিন্ন ফরম্যাটে ডাউনলোড করুন যেমন MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO, ইত্যাদি
              এবং 64kbps, 128kbps, 192kbps, 256kbps এবং 320kbps সহ বিভিন্ন MP3 বিট রেট। Y2meta আপনার কম্পিউটার, মোবাইল,
              ট্যাবলেট এবং অন্যান্য ডিভাইসে মসৃণভাবে কাজ করে। এটি একটি সহজ এবং সহজ YouTube ডাউনলোডার।
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>কিভাবে Y2meta ব্যবহার করে YouTube ভিডিও ডাউনলোড করবেন?</strong>
              </h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube ওয়েবসাইট খুলুন এবং YouTube URL অনুলিপি করুন যা আপনি আপনার ডিভাইসে ডাউনলোড করতে চান
                </li>
                <li className="mb-2.5">Y2meta অনুসন্ধান বাক্সে অনুলিপি করা URL পেস্ট করুন এবং MP4 বা MP3 বিন্যাস চয়ন
                  করুন
                </li>
                <li className="mb-2.5">
                  রূপান্তর সম্পূর্ণ না হওয়া পর্যন্ত কয়েক সেকেন্ড অপেক্ষা করুন এবং "ডাউনলোড" বোতাম টিপুন
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta সুবিধা</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">বিনামূল্যে সীমাহীন YouTube ভিডিও রূপান্তর এবং ডাউনলোড করুন</li>
                <li className="mb-2.5">যেকোনো ইউটিউব ভিডিও ডাউনলোড এবং সেভ করার দ্রুত এবং সহজ উপায়</li>
                <li className="mb-2.5">আমাদের YouTube ডাউনলোডার সমস্ত ডিভাইসের সাথে সম্পূর্ণরূপে সামঞ্জস্যপূর্ণ</li>
                <li className="mb-2.5">এটি সর্বদা বিনামূল্যে এবং নিবন্ধনের প্রয়োজন নেই</li>
                <li className="mb-2.5">আমরা উচ্চ-মানের অডিও এবং ভিডিও ফাইল সরবরাহ করি</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% নিরাপদ এবং বিনামূল্যে</h3>
                <p>
                  Y2meta YouTube থেকে mp3 এবং mp4 সম্পূর্ণ বিনামূল্যে ডাউনলোড করার অফার করে। এছাড়াও এই YouTube ভিডিও
                  ডাউনলোডার ভাইরাস এবং ম্যালওয়্যার থেকে সম্পূর্ণ নিরাপদ এবং সুরক্ষিত।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">দ্রুত এবং সহজে ভিডিও ডাউনলোড করুন</h3>
                <p>
                  Y2meta টুল আপনাকে YouTube থেকে দ্রুত MP3 এবং MP4 ডাউনলোড করতে সাহায্য করে। শুধু অনুসন্ধান বাক্সে
                  অনুলিপি করা YouTube URL পেস্ট করুন এবং "রূপান্তর" বোতামে ক্লিক করুন৷ YouTube ভিডিও ডাউনলোড করার সহজ
                  ধাপগুলি অনুসরণ করুন।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">আনলিমিটেড ইউটিউব ভিডিও ডাউনলোড করুন</h3>
                <p>
                  এই Y2meta ডাউনলোডার ব্যবহার করে কোনো সীমাবদ্ধতা ছাড়াই আপনি যত খুশি YouTube ভিডিও ডাউনলোড করুন। এটি
                  সম্পূর্ণ বিনামূল্যে এবং নিবন্ধন এবং লগইন করার প্রয়োজন নেই।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">একাধিক গুণমান সমর্থন করে</h3>
                <p>
                  Y2meta একাধিক অডিও এবং ভিডিও গুণাবলী অফার করে যাতে আপনি YouTube ভিডিওগুলিকে MP3, 3GP, MP4, WMA, M4A,
                  FLV, WEBM, MO ফর্ম্যাটে রূপান্তর করতে পারেন।
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">Y2meta কি?</h3>
            <p>
              Y2meta হল সেরা YouTube ভিডিও ডাউনলোডার যা আপনাকে YouTube থেকে দ্রুত এবং বিনামূল্যে ভিডিও ডাউনলোড করতে
              দেয়। এছাড়াও, উচ্চ মানের ইউটিউবকে Mp3 তে রূপান্তর করুন।
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta কি সম্পূর্ণ বিনামূল্যে?</h3>
            <p>
              হ্যাঁ, Y2meta ইউটিউব ভিডিও ব্যবহার এবং ডাউনলোড করার জন্য সম্পূর্ণ বিনামূল্যে। আপনাকে কোনো সাবস্ক্রিপশনের
              পরিমাণ দিতে হবে না শুধু ইউটিউব ভিডিও URLটি প্রয়োজন যা আপনি আপনার ডিভাইসে ডাউনলোড করতে চান।
            </p>
            <h3 className="mt-2.5 font-semibold">কীভাবে আইফোনে ইউটিউব ভিডিও ডাউনলোড করবেন?</h3>
            <p>
              আইফোন ব্যবহারকারীদের প্রক্রিয়াটি All use থেকে কিছুটা আলাদা। আপনাকে iOS 13-এ Safari ব্রাউজার ব্যবহার করতে
              হবে বা Readdle অ্যাপের মাধ্যমে ডকুমেন্ট পেতে হবে এবং সমস্ত প্রক্রিয়া উপরের মতই।
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta কি YouTube থেকে ভিডিও ডাউনলোড করা নিরাপদ?</h3>
            <p>
              হ্যাঁ, আমাদের ডাউনলোডার ব্যবহার করে YouTube ভিডিও ডাউনলোড করুন আপনাকে কোনো ব্যক্তিগত তথ্য শেয়ার করতে হবে
              না এবং আপনার ডিভাইসে তৃতীয় পক্ষের অ্যাপ্লিকেশন এবং সফ্টওয়্যার ইনস্টল করার প্রয়োজন নেই।
            </p>
            <h3 className="mt-2.5 font-semibold">সমর্থিত ভিডিও/অডিও ফরম্যাট কি কি?</h3>
            <p>
              আমরা বিভিন্ন উচ্চ-মানের ফর্ম্যাট সরবরাহ করি এবং আপনাকে 320kbps, 256kbps, 192kbps, 128kbps, 64kbps বিট রেট
              এবং mp4 720p, 1080p, 1440p, 2160p গুণমানের সাথে mp3 ডাউনলোড করার অনুমতি দিই।
            </p>
            <h3 className="mt-2.5 font-semibold">ডাউনলোড করা YouTube ভিডিও ফাইলটি আমার ডিভাইসে কোথায় সংরক্ষিত আছে?</h3>
            <p>
              ইউটিউব থেকে আপনার কম্পিউটারে ভিডিও সংরক্ষিত হওয়ার পরে সরাসরি আপনার ব্রাউজারে "ডাউনলোড ইতিহাস" বা আপনার
              ডিভাইসের "ডাউনলোড" ফোল্ডারে চেক করুন।
            </p>
            <h3 className="mt-2.5 font-semibold">এই YouTube ভিডিও ডাউনলোডার কি সব ডিভাইসের সাথে সামঞ্জস্যপূর্ণ?</h3>
            <p>
              হ্যাঁ, Y2meta ইউটিউব থেকে ভিডিও ডাউনলোড করা সমর্থন করে সব ডিভাইস যেমন কম্পিউটার, মোবাইল এবং ট্যাবলেটে এবং
              ক্রোম, ফায়ারফক্স, মাইক্রোসফ্ট এজ, সাফারি, অপেরা এবং ইত্যাদি সব ধরনের ব্রাউজারে সহজে কাজ করে।
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
    <html lang="bn"/>
    <title>Y2meta - YouTube ডাউনলোডার | ইউটিউব ভিডিও বিনামূল্যে ডাউনলোড করুন</title>
    <meta
      name="description"
      content="Y2meta জনপ্রিয় ফ্রি ইউটিউব ডাউনলোডার সফ্টওয়্যার ইনস্টল ছাড়াই 1080p, 2160p, 2k, 4k, 8k-এ উচ্চ মানের সাথে বিনামূল্যে YouTube ভিডিও ডাউনলোড করার অনুমতি দেয়।"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="bn"/>
    <meta property="og:title" content="Y2meta - YouTube ডাউনলোডার | ইউটিউব ভিডিও বিনামূল্যে ডাউনলোড করুন"/>
    <meta
      property="og:description"
      content="Y2meta জনপ্রিয় ফ্রি ইউটিউব ডাউনলোডার সফ্টওয়্যার ইনস্টল ছাড়াই 1080p, 2160p, 2k, 4k, 8k-এ উচ্চ মানের সাথে বিনামূল্যে YouTube ভিডিও ডাউনলোড করার অনুমতি দেয়।"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/bn/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/bn/"/>
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
