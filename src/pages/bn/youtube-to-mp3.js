import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP3 = () => {
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTube থেকে MP3 কনভার্টার</h1>
            <p>ইউটিউব ভিডিওগুলিকে MP3 ফ্রিতে রূপান্তর এবং ডাউনলোড করুন</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">সেরা YouTube থেকে MP3 কনভার্টার</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta হল একটি দ্রুত এবং সহজ YouTube থেকে MP3 রূপান্তরকারী৷ আমাদের জনপ্রিয় YouTube থেকে MP3 ডাউনলোডার
              আপনাকে সহজেই YouTube ভিডিওগুলিকে উচ্চ মানের এবং বিনামূল্যে MP3 তে রূপান্তর এবং ডাউনলোড করতে দেয়। এছাড়াও,
              আপনি 64kbps, 128kbps, 192kbps এবং 320kbps পর্যন্ত একাধিক মানের বিকল্প সহ mp3 ডাউনলোড করতে পারেন।
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              এই YouTube থেকে Mp3 রূপান্তরকারী কোনও অ্যাপ্লিকেশন বা সফ্টওয়্যার ইনস্টল না করেই ডেস্কটপ, ল্যাপটপ,
              ট্যাবলেট এবং স্মার্টফোন সহ সমস্ত ডিভাইসে মসৃণভাবে কাজ করে। রূপান্তর প্রক্রিয়া দ্রুত এবং সুবিধাজনক শুধু
              YouTube URL পেস্ট করুন এবং কয়েকটি সহজ ধাপে আপনার ইউটিউব mp3 ফাইলটি কয়েক সেকেন্ডের মধ্যে ডাউনলোডের জন্য
              প্রস্তুত। এটি সম্পূর্ণ নিরাপদ এবং সুরক্ষিত YouTube MP3 রূপান্তরকারী।
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>ইউটিউব ভিডিওকে কিভাবে বিনামূল্যে MP3 অনলাইনে রূপান্তর
                করবেন</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube ভিডিও URL আটকান বা অনুসন্ধান বাক্সে কীওয়ার্ড সন্নিবেশ করুন, তারপর "অনুসন্ধান" বোতামে ক্লিক
                  করুন৷
                </li>
                <li className="mb-2.5">MP3 গুণমান চয়ন করুন এবং "ডাউনলোড" বোতাম টিপুন।</li>
                <li className="mb-2.5">
                  কয়েক সেকেন্ড অপেক্ষা করুন এবং সফল Mp3 রূপান্তর করার পরে ডাউনলোড বোতামে ক্লিক করুন।
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta সুবিধা</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">রূপান্তর এবং কোনো সীমাবদ্ধতা ছাড়াই YouTube থেকে MP3 ফাইল ডাউনলোড করুন</li>
                <li className="mb-2.5">কোন সফটওয়্যার ইন্সটল করার দরকার নেই এবং রেজিস্ট্রেশন ছাড়াই</li>
                <li className="mb-2.5">100% নিরাপদ এবং সুরক্ষিত YouTube কনভার্টার</li>
                <li className="mb-2.5">সমস্ত ব্রাউজার এবং ডিভাইসের সাথে সামঞ্জস্যপূর্ণ</li>
                <li className="mb-2.5">উচ্চ মানের অডিও সহ সম্পূর্ণ বিনামূল্যে ইউটিউবকে mp3 তে রূপান্তর করুন</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">সহজ এবং দ্রুত রূপান্তর</h3>
                <p>
                  YouTube থেকে MP3 ডাউনলোড করা সহজ শুধু আপনি যে ইউটিউব ইউআরএলটি ডাউনলোড করতে চান সেটি লিখুন এবং ডাউনলোড
                  বোতামে ক্লিক করুন। আপনার রূপান্তরিত ফাইলগুলি কয়েক সেকেন্ডের মধ্যে প্রস্তুত।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">উচ্চ মানের বিন্যাস প্রদান</h3>
                <p>
                  আমরা 64kbps, 128kbps, 192kbps, 256kbps এবং 320 kbps এর মতো উচ্চ-মানের ফর্ম্যাটে YouTube-কে mp3 তে
                  রূপান্তর করার অফার করি। আপনি প্রয়োজন অনুযায়ী চয়ন এবং ডাউনলোড করতে পারেন.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta download" width={50}
                           quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">সীমাবদ্ধতা ছাড়াই রূপান্তর</h3>
                <p>
                  বিনামূল্যের সীমাবদ্ধতা ছাড়াই যেকোনো YouTube ভিডিওকে MP3 তে রূপান্তর করুন। Youtube থেকে Mp3 ডাউনলোড
                  করতে কোন সফটওয়্যার বা অ্যাপ ইন্সটল করার দরকার নেই।
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">সমস্ত প্ল্যাটফর্মের সাথে সামঞ্জস্যপূর্ণ</h3>
                <p>
                  আমাদের ইউটিউব কনভার্টার সব ধরনের ডিভাইস পিসি, ট্যাবলেট, আইফোন, অ্যান্ড্রয়েড ফোন ইত্যাদির সাথে
                  সামঞ্জস্যপূর্ণ এছাড়াও Y2meta ক্রোম, মাইক্রোসফ্ট এজ, ফায়ারফক্স, অপেরা এবং অন্য যেকোনো ব্রাউজারকে
                  সমর্থন করে।
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">FAQ</h2>
            <h3 className="mt-2.5 font-semibold">এই YouTube থেকে MP3 কনভার্টার কি বিনামূল্যে ব্যবহার করা যায়?</h3>
            <p>
              হ্যাঁ, আমাদের Y2meta রূপান্তরকারী একটি অ্যাকাউন্ট নিবন্ধন ছাড়াই YouTube থেকে Mp3 ডাউনলোড করতে সম্পূর্ণ
              বিনামূল্যে
            </p>
            <h3 className="mt-2.5 font-semibold">আমি কি সব ডিভাইসে mp3 এই Youtube ব্যবহার করতে পারি?</h3>
            <p>
              হ্যাঁ, অবশ্যই, এই YouTube থেকে Mp3 রূপান্তরকারী কম্পিউটার, মোবাইল এবং ট্যাবলেট সহ সব ধরনের ডিভাইস সমর্থন
              করে।
            </p>
            <h3 className="mt-2.5 font-semibold">কিভাবে ইউটিউব ভিডিও থেকে MP3 ডাউনলোড করবেন?</h3>
            <p>ইউটিউব ভিডিও লিঙ্কটি অনুলিপি করুন যা আপনি YouTube কে mp3 তে রূপান্তর করতে চান</p>
            <p>সার্চ বক্সে YouTube URL পেস্ট করুন</p>
            <p>অনুসন্ধান বোতাম টিপুন তারপর Mp3 নির্বাচন করুন এবং রূপান্তর বোতামে ক্লিক করুন</p>
            <p>রূপান্তর সফলভাবে সম্পন্ন হওয়ার জন্য কয়েক সেকেন্ড অপেক্ষা করুন তারপর "ডাউনলোড" বোতামে ক্লিক করুন।</p>
            <h3 className="mt-2.5 font-semibold">YouTube থেকে Mp3 ডাউনলোডের সর্বোচ্চ সংখ্যা কত?</h3>
            <p>
              আপনি YouTube কে Mp3 আনলিমিটেড রূপান্তর করতে পারেন এবং এই YouTube রূপান্তরকারী ব্যবহার করার ক্ষেত্রে কোন
              বিধিনিষেধ নেই। সমস্ত বৈশিষ্ট্য সম্পূর্ণ বিনামূল্যে এবং সীমাবদ্ধতা ছাড়াই।
            </p>
            <h3 className="mt-2.5 font-semibold">আমার কি ব্রাউজার এক্সটেনশন বা সফ্টওয়্যার ইনস্টল করতে হবে?</h3>
            <p>
              না, আমাদের YouTube কনভার্টার ওয়েবে কাজ করে তাই আপনাকে কোনো সফ্টওয়্যার বা এক্সটেনশন ইনস্টল করতে হবে না।
              আপনার শুধু একটি ওয়েব ব্রাউজার এবং একটি নির্ভরযোগ্য ইন্টারনেট সংযোগ প্রয়োজন৷
            </p>
            <h3 className="mt-2.5 font-semibold">এই YouTube রূপান্তরকারী ব্যবহার করে YouTube থেকে mp3 ডাউনলোড করা
              নিরাপদ?</h3>
            <p>
              হ্যাঁ, আমাদের Youtube থেকে Mp3 রূপান্তরকারী SSL স্তরের সাথে সুরক্ষিত যা নিশ্চিত করে যে সেই লোকেরা নিরাপদে
              ভিডিও ডাউনলোড করতে পারে। ভাইরাস এবং ম্যালওয়্যার থেকে সুরক্ষিত থাকার জন্য আমরা প্রতিদিন আমাদের YouTube
              থেকে Mp3 কনভার্টার নিরাপত্তা পর্যবেক্ষণ করি।
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
    <html lang="bn"/>
    <title>YouTube থেকে MP3 কনভার্টার - Y2meta</title>
    <meta
      name="description"
      content="Y2meta হল ফ্রি ইউটিউব থেকে MP3 কনভার্টার, পিসি, আইফোন এবং অ্যান্ড্রয়েডে সফ্টওয়্যার ইনস্টল ছাড়াই YouTube থেকে বিনামূল্যে MP3 করার অনুমতি দেয়।"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="bn"/>
    <meta property="og:title" content="YouTube থেকে MP3 কনভার্টার - Y2meta"/>
    <meta
      property="og:description"
      content="Y2meta হল ফ্রি ইউটিউব থেকে MP3 কনভার্টার, পিসি, আইফোন এবং অ্যান্ড্রয়েডে সফ্টওয়্যার ইনস্টল ছাড়াই YouTube থেকে বিনামূল্যে MP3 করার অনুমতি দেয়।"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/bn/youtube-to-mp3/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/bn/youtube-to-mp3/"/>
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