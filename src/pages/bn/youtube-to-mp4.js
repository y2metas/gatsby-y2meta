import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP4 = () => {
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
                    <nav className="grid gap-y-8">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTube থেকে MP4 কনভার্টার</h1>
            <p>ইউটিউবকে MP4 ফ্রিতে রূপান্তর করুন এবং ডাউনলোড করুন</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">সেরা ইউটিউব থেকে MP4 কনভার্টার</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta হল একটি বিনামূল্যের YouTube ডাউনলোডার টুল যা আপনাকে কয়েক সেকেন্ডের মধ্যে MP4 ফর্ম্যাটে YouTube
              ভিডিও ডাউনলোড করতে সাহায্য করে। এটি YouTube থেকে Mp4 ভিডিও ডাউনলোড করার একটি দ্রুত এবং সহজ উপায়। যেকোনো
              YouTube ভিডিও বিভিন্ন সেরা মানের যেমন 360p, 480p, 720p, 1080p, 4K HD, এবং 8K পর্যন্ত ডাউনলোড করুন।
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              এই দ্রুত এবং সুরক্ষিত ইউটিউব কনভার্টার ব্যবহার করে রেজিস্ট্রেশন ছাড়াই আপনার ডিভাইসে MP4, AVI এবং MOV তে
              YouTube ভিডিও ডাউনলোড করুন এবং সংরক্ষণ করুন। আপনি পিসি, ট্যাবলেট, আইফোন এবং অ্যান্ড্রয়েড ফোন ব্যবহার করুন
              না কেন। উপরন্তু, এই YouTube ডাউনলোডার ওয়েবে চলে তাই আপনাকে সফ্টওয়্যার বা অ্যাপ ইনস্টল করার দরকার নেই এটি
              ব্রাউজিংকে অনেক সহজ করে তোলে।
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>কিভাবে ইউটিউব ভিডিও MP4 রূপান্তর করতে?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  ইউটিউব লিঙ্ক পেস্ট করুন বা অনুসন্ধান বাক্সে কীওয়ার্ড লিখুন
                </li>
                <li className="mb-2.5">আপনি রূপান্তর করতে চান এমন মানের সাথে MP4 চয়ন করুন এবং "ডাউনলোড" বোতাম টিপুন
                </li>
                <li className="mb-2.5">
                  MP4 রূপান্তর সম্পূর্ণ করতে এবং আপনার ডিভাইসে ডাউনলোড করার জন্য কয়েক মুহূর্ত অপেক্ষা করুন
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta সুবিধা</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">আপনি যতটা চান সীমাবদ্ধতা ছাড়াই YouTube ভিডিওগুলিকে mp4 এ রূপান্তর করুন</li>
                <li className="mb-2.5">এইচডি-তে YouTube ভিডিও ডাউনলোড এবং সংরক্ষণ করার দ্রুত এবং সহজ উপায়</li>
                <li className="mb-2.5">এই YouTube ভিডিও ডাউনলোডার 100% নিরাপদ এবং নিরাপদ</li>
                <li className="mb-2.5">ইউটিউব থেকে একাধিক উচ্চ মানের ফরম্যাটে ভিডিও ডাউনলোড করুন</li>
                <li className="mb-2.5">আমাদের Y2meta ডাউনলোডার টুল নিবন্ধন এবং লগইন ছাড়া সম্পূর্ণ বিনামূল্যে</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">সীমাহীন এবং বিনামূল্যে রূপান্তর</h3>
                <p>
                  এই ইউটিউব থেকে MP4 ব্যবহার করে ইউটিউব ভিডিও ডাউনলোড করুন যত খুশি। বৈশিষ্ট্য এবং YouTube থেকে ভিডিও
                  ডাউনলোড সংখ্যা কোন সীমাবদ্ধতা. এছাড়াও, এটি সম্পূর্ণ বিনামূল্যে
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">ব্যবহার করা সহজ এবং দ্রুত</h3>
                <p>
                  সহজ এবং ব্যবহারকারী-বান্ধব হস্তক্ষেপ এই YouTube MP4 ডাউনলোডার ব্যবহার করা সহজ করে তোলে। সহজ ধাপে
                  YouTube থেকে দ্রুত MP4 ভিডিও ডাউনলোড করুন।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% নিরাপদ এবং নিরাপদ</h3>
                <p>
                  আমাদের YouTube থেকে MP4 কনভার্টার SSL লেয়ারের সাথে সম্পূর্ণ সুরক্ষিত এই নিরাপত্তা স্তর ভাইরাস এবং
                  ম্যালওয়্যার থেকে রক্ষা করতে সাহায্য করে তাই এটি নিয়ে চিন্তা করবেন না। সম্পূর্ণ নিরাপদ এবং নিরাপদ
                  YouTube ভিডিও ডাউনলোড করুন
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">সমস্ত ডিভাইসের সাথে সামঞ্জস্যপূর্ণ</h3>
                <p>
                  আমাদের YouTube থেকে MP4 রূপান্তরকারী ওয়েব ভিত্তিক অ্যাপ তাই এটি সমস্ত ডিভাইস এবং ব্রাউজার সমর্থন করে।
                  সফ্টওয়্যার এবং অ্যাপ ইনস্টল করার প্রয়োজন নেই
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">YouTube ভিডিওগুলিকে mp4 তে রূপান্তর করার জন্য আমাকে কি টাকা দিতে
              হবে?</h3>
            <p>
              না, এই ইউটিউব ডাউনলোডারটি সম্পূর্ণ বিনামূল্যে ব্যবহার করুন এবং রূপান্তরের জন্য আপনাকে অর্থ ব্যয় করতে হবে
              না। উপরন্তু, YouTube থেকে MP4 এর জন্য কোন বৈশিষ্ট্য সীমাবদ্ধতা নেই
            </p>
            <h3 className="mt-2.5 font-semibold">ইউটিউব ভিডিও ডাউনলোড এবং MP4 এ রূপান্তর করার উপায়</h3>
            <p>ইউটিউব ওয়েবসাইট খুলুন এবং আপনি যে ইউটিউব ভিডিও ইউআরএলটি ডাউনলোড করতে চান তা অনুলিপি করুন</p>
            <p>এই YouTube MP4 ডাউনলোডার সার্চ বক্সে URL আটকান</p>
            <p>গুণমান চয়ন করুন এবং ডাউনলোড বোতাম টিপুন</p>
            <h3 className="mt-2.5 font-semibold">এই Youtube to mp4 কনভার্টার কি সব ডিভাইসে কাজ করে?</h3>
            <p>আমাদের YouTube থেকে MP4 রূপান্তরকারী একটি ওয়েব-ভিত্তিক অ্যাপ তাই এটি সমস্ত ডিভাইস এবং ব্রাউজারগুলির সাথে
              সামঞ্জস্যপূর্ণ। সফ্টওয়্যার এবং অ্যাপ ইনস্টল করার প্রয়োজন নেই</p>
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
    <html lang="bn"/>
    <title>এইচডি-তে YouTube থেকে MP4 কনভার্টার বিনামূল্যে</title>
    <meta
      name="description"
      content="বিনামূল্যে 1080p, 2k, 4k HD তে YouTube কে MP4 তে রূপান্তর করুন এবং ডাউনলোড করুন। পিসি, মোবাইল, আইফোনের জন্য আমাদের YouTube থেকে MP4 ডাউনলোডার এবং অনলাইন কনভার্টার ব্যবহার করা"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="bn"/>
    <meta property="og:title" content="এইচডি-তে YouTube থেকে MP4 কনভার্টার বিনামূল্যে"/>
    <meta
      property="og:description"
      content="বিনামূল্যে 1080p, 2k, 4k HD তে YouTube কে MP4 তে রূপান্তর করুন এবং ডাউনলোড করুন। পিসি, মোবাইল, আইফোনের জন্য আমাদের YouTube থেকে MP4 ডাউনলোডার এবং অনলাইন কনভার্টার ব্যবহার করা"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/bn/youtube-to-mp4/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/bn/youtube-to-mp4/"/>
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
