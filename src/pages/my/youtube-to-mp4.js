import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP4 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("my");
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
                <Link to="/my/" className="flex items-center">
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
                  to="/my/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/my/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/my/youtube-to-mp4/">
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
                        to="/my/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/my/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/my/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTube မှ MP4 Converter</h1>
            <p>Youtube ကို MP4 အခမဲ့အဖြစ်ပြောင်းပြီး ဒေါင်းလုဒ်လုပ်ပါ။</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Youtube လင့်ခ်ကို ဤနေရာတွင် ရှာရန် သို့မဟုတ် ကူးထည့်ပါ..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  ရှာရန်
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုကို အသုံးပြုခြင်းဖြင့် သင်သည် ကျွန်ုပ်တို့၏
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;စည်းမျဥ်းစည်းကမ်းများကို
                လက်ခံပါသည်။</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">အကောင်းဆုံး Youtube မှ MP4 Converter</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta သည် သင့်အား စက္ကန့်အနည်းငယ်အတွင်း YouTube ဗီဒီယိုများကို MP4 ဖော်မတ်သို့ ဒေါင်းလုဒ်လုပ်ရန်
              ကူညီပေးသည့် အခမဲ့ YouTube ဒေါင်းလုဒ်ကိရိယာတစ်ခုဖြစ်သည်။ ၎င်းသည် YouTube မှ Mp4 ဗီဒီယိုများကို
              ဒေါင်းလုဒ်လုပ်ရန် လွယ်ကူမြန်ဆန်သောနည်းလမ်းတစ်ခုဖြစ်သည်။ 360p၊ 480p၊ 720p၊ 1080p၊ 4K HD နှင့် 8K အထိ
              မတူကွဲပြားသော အကောင်းဆုံး အရည်အသွေးဖြင့် YouTube ဗီဒီယိုကို ဒေါင်းလုဒ်လုပ်ပါ။
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              ဤမြန်ဆန်ပြီး လုံခြုံသော YouTube converter ကို အသုံးပြု၍ မှတ်ပုံတင်ခြင်းမရှိဘဲ သင့်စက်ပေါ်တွင် MP4၊ AVI
              နှင့် MOV တို့တွင် YouTube ဗီဒီယိုကို ဒေါင်းလုဒ်လုပ်ပြီး သိမ်းဆည်းပါ။ PC၊ တက်ဘလက်၊ iPhone နှင့် Android
              ဖုန်းတို့ကို အသုံးပြုသည်ဖြစ်စေ။ ထို့အပြင်၊ ဤ YouTube Downloader သည် ဝဘ်ပေါ်တွင် အလုပ်လုပ်သောကြောင့်
              ဆော့ဖ်ဝဲလ် သို့မဟုတ် အက်ပ်များကို ထည့်သွင်းရန် မလိုအပ်ဘဲ ၎င်းသည် ရှာဖွေကြည့်ရှုခြင်းကို ပိုမိုလွယ်ကူစေသည်။
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Youtube ဗီဒီယိုများကို MP4 သို့ ဘယ်လိုပြောင်းမလဲ။</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube လင့်ခ်ကို ကူးထည့်ပါ သို့မဟုတ် ရှာဖွေရေးအကွက်တွင် အဓိကစကားလုံးများကို ထည့်ပါ။
                </li>
                <li className="mb-2.5">သင်ပြောင်းလိုသော အရည်အသွေးရှိသော MP4 ကို ရွေးပြီး "ဒေါင်းလုဒ်" ခလုတ်ကို
                  နှိပ်ပါ။
                </li>
                <li className="mb-2.5">
                  ပြောင်းလဲခြင်း MP4 ပြီးမြောက်စေရန်နှင့် သင့်စက်ပစ္စည်းသို့ ဒေါင်းလုဒ်လုပ်ရန် ခဏစောင့်ပါ။
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta အားသာချက်များ</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">YouTube ဗီဒီယိုများကို သင်အလိုရှိသလောက် အကန့်အသတ်မရှိ mp4 သို့ ပြောင်းပါ။</li>
                <li className="mb-2.5">YouTube ဗီဒီယိုများကို HD ဖြင့် ဒေါင်းလုဒ်လုပ်ပြီး သိမ်းဆည်းရန်
                  မြန်ဆန်လွယ်ကူသောနည်းလမ်း
                </li>
                <li className="mb-2.5">ဤ YouTube Video ဒေါင်းလုဒ်သည် 100% လုံခြုံပြီး လုံခြုံပါသည်။</li>
                <li className="mb-2.5">အရည်အသွေးမြင့် ဖော်မတ်များစွာဖြင့် YouTube မှ ဗီဒီယိုကို ဒေါင်းလုဒ်လုပ်ပါ။</li>
                <li className="mb-2.5">ကျွန်ုပ်တို့၏ Y2meta Downloader ကိရိယာသည် မှတ်ပုံတင်ခြင်းနှင့်
                  အကောင့်ဝင်ခြင်းမရှိဘဲ လုံးဝအခမဲ့ဖြစ်သည်။
                </li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">အကန့်အသတ်မရှိ အခမဲ့ ပြောင်းလဲမှုများ</h3>
                <p>
                  ဤ YouTube မှ MP4 သို့ အသုံးပြု၍ YouTube ဗီဒီယိုများကို သင်အလိုရှိသလောက် ဒေါင်းလုဒ်လုပ်ပါ။
                  ဝန်ဆောင်မှုများနှင့် YouTube မှ ဗီဒီယိုဒေါင်းလုဒ်အရေအတွက် ကန့်သတ်ချက်မရှိပါ။
                  ထို့အပြင်၎င်းသည်လုံးဝအခမဲ့ဖြစ်သည်။
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">အသုံးပြုရလွယ်ကူပြီး မြန်ဆန်ပါတယ်။</h3>
                <p>
                  ရိုးရှင်းပြီး အသုံးပြုရလွယ်ကူစေသော အနှောင့်အယှက်များကြောင့် ဤ YouTube MP4 Downloader ကို
                  အသုံးပြုရလွယ်ကူစေသည်။ ရိုးရှင်းသောအဆင့်များဖြင့် YouTube မှ MP4 ဗီဒီယိုများကို အမြန်ဒေါင်းလုဒ်လုပ်ပါ။
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% ဘေးကင်းလုံခြုံ</h3>
                <p>
                  ကျွန်ုပ်တို့၏ YouTube to MP4 Converter သည် SSL Layer ဖြင့် အပြည့်အဝလုံခြုံပြီး ဤလုံခြုံရေးအလွှာသည်
                  ဗိုင်းရပ်စ်များနှင့် malware များမှ ကာကွယ်ပေးသောကြောင့် ၎င်းအတွက် စိတ်မပူပါနှင့်။ YouTube
                  ဗီဒီယိုများကို လုံးဝလုံခြုံစွာ ဒေါင်းလုဒ်လုပ်ပါ။
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">စက်ပစ္စည်းအားလုံးနှင့်
                  တွဲဖက်အသုံးပြုနိုင်သည်။</h3>
                <p>
                  ကျွန်ုပ်တို့၏ YouTube မှ MP4 converter သည် ဝဘ်အခြေခံအက်ပ်ဖြစ်သောကြောင့် စက်ပစ္စည်းများနှင့်
                  ဘရောက်ဆာအားလုံးကို ပံ့ပိုးပေးပါသည်။ ဆော့ဖ်ဝဲလ်နှင့် အက်ပ်များကို ထည့်သွင်းရန် မလိုအပ်ပါ။
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">အမြဲမေးလေ့ရှိသောမေးခွန်းများ</h2>
            <h3 className="mt-2.5 font-semibold">YouTube ဗီဒီယိုများကို mp4 အဖြစ်ပြောင်းရန် ငွေပေးချေရပါသလား။</h3>
            <p>
              မဟုတ်ပါ၊ ဤ YouTube ဒေါင်းလုဒ်ကို အသုံးပြုခြင်းသည် လုံးဝအခမဲ့ဖြစ်ပြီး ပြောင်းလဲခြင်းအတွက် သင်ပိုက်ဆံသုံးရန်
              မလိုအပ်ပါ။ ထို့အပြင်၊ YouTube မှ MP4 အတွက် လုပ်ဆောင်ချက် ကန့်သတ်ချက်များ မရှိပါ။
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube ဗီဒီယိုများကို MP4 သို့ ဒေါင်းလုဒ်လုပ်ပြီး ပြောင်းနည်း</h3>
            <p>YouTube ဝဘ်ဆိုက်ကိုဖွင့်ပြီး သင်ဒေါင်းလုဒ်လုပ်လိုသော YouTube ဗီဒီယို URL ကို ကူးယူပါ။</p>
            <p>ဤ YouTube MP4 Downloader ပေါ်ရှိ ရှာဖွေရေးအကွက်တွင် URL ကို ကူးထည့်ပါ။</p>
            <p>အရည်အသွေးကို ရွေးချယ်ပြီး ဒေါင်းလုဒ်ခလုတ်ကို နှိပ်ပါ။</p>
            <h3 className="mt-2.5 font-semibold">ဤ Youtube မှ mp4 converter သည် စက်အားလုံးတွင် အလုပ်လုပ်ပါသလား။</h3>
            <p>ကျွန်ုပ်တို့၏ YouTube မှ MP4 converter သည် ဝဘ်အခြေခံအက်ပ်တစ်ခုဖြစ်သောကြောင့် စက်ပစ္စည်းများနှင့်
              ဘရောက်ဆာများအားလုံးနှင့် တွဲဖက်အသုံးပြုနိုင်ပါသည်။ ဆော့ဖ်ဝဲလ်နှင့် အက်ပ်များကို ထည့်သွင်းရန်
              မလိုအပ်ပါ။</p>
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
    <html lang="my"/>
    <title>YouTube မှ MP4 Converter Free</title>
    <meta
      name="description"
      content="YouTube မှ MP4 သို့ 1080p၊ 2k၊ 4k HD သို့ အခမဲ့အဖြစ်ပြောင်းပြီး ဒေါင်းလုဒ်လုပ်ပါ။ PC၊ Mobile၊ iphone အတွက် ကျွန်ုပ်တို့၏ YouTube မှ MP4 ဒေါင်းလုဒ်နှင့် အွန်လိုင်းပြောင်းပြောင်းကို အသုံးပြုခြင်း။"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="my"/>
    <meta property="og:title" content="YouTube မှ MP4 Converter Free"/>
    <meta
      property="og:description"
      content="YouTube မှ MP4 သို့ 1080p၊ 2k၊ 4k HD သို့ အခမဲ့အဖြစ်ပြောင်းပြီး ဒေါင်းလုဒ်လုပ်ပါ။ PC၊ Mobile၊ iphone အတွက် ကျွန်ုပ်တို့၏ YouTube မှ MP4 ဒေါင်းလုဒ်နှင့် အွန်လိုင်းပြောင်းပြောင်းကို အသုံးပြုခြင်း။"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/my/youtube-to-mp4/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/my/youtube-to-mp4/"/>
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
