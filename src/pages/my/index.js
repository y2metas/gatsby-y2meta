import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
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
                    <nav className="grid gap-y-4">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - YouTube Video Downloader</h1>
            <p>YouTube ဗီဒီယိုများကို MP3 နှင့် MP4 အရည်အသွေးမြင့် အခမဲ့ ဒေါင်းလုဒ်လုပ်ပါ။</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">အကောင်းဆုံး YouTube Video Downloader</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta သည် YouTube ဗီဒီယိုများကို အခမဲ့ဒေါင်းလုဒ်လုပ်ရန် လူကြိုက်အများဆုံး YouTube Downloader ဖြစ်သည်။
              သင့်ကိုယ်ရေးကိုယ်တာကိရိယာတွင် YouTube ဗီဒီယိုများကို သိမ်းဆည်းရန် ပြင်ပကုမ္ပဏီအက်ပ်လီကေးရှင်းများနှင့်
              ဆော့ဖ်ဝဲကို ထည့်သွင်းရန် မလိုအပ်ပါ။ သင့်တွင် ယုံကြည်စိတ်ချရသော ဘရောက်ဆာနှင့် အင်တာနက်ချိတ်ဆက်မှု
              လိုအပ်ပါသည်။ YouTube၊ Facebook၊ Video၊ Dailymotion၊ Youku နှင့် အခြားလူမှုရေးမျှဝေခြင်းဝဘ်ဆိုဒ်များမှ
              သင်နှစ်သက်သော အရည်အသွေးဖြင့် သင်နှစ်သက်သော ဗီဒီယိုများကို ဒေါင်းလုဒ်လုပ်ပါ။ Y2meta သည် HD အရည်အသွေးဖြင့်
              YouTube ဗီဒီယိုများကို ဒေါင်းလုဒ်လုပ်ရန် အလုံခြုံဆုံးနည်းလမ်းဖြစ်ပြီး အကောင့်ဝင်ရန် သို့မဟုတ်
              ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို မျှဝေရန်မလိုအပ်ပါ။
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO, etc, နှင့် 64kbps, 128kbps, 192kbps, 256kbps နှင့် 320kbps အပါအဝင်
              မတူညီသော MP3 ဘစ်နှုန်းများဖြင့် YouTube အသံနှင့် ဗီဒီယိုကို ဒေါင်းလုဒ်လုပ်ပါ။ Y2meta သည် သင့်ကွန်ပျူတာ၊
              မိုဘိုင်း၊ တက်ဘလက်နှင့် အခြားစက်ပစ္စည်းများတွင် ချောမွေ့စွာအလုပ်လုပ်သည်။ ၎င်းသည် ရိုးရှင်းပြီး လွယ်ကူသော
              YouTube ဒေါင်းလုဒ်တစ်ခုဖြစ်သည်။
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Y2meta ကို အသုံးပြု၍ YouTube ဗီဒီယိုများကို
                မည်သို့ဒေါင်းလုဒ်လုပ်မည်နည်း။</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube ဝဘ်ဆိုက်ကိုဖွင့်ပြီး သင်ဒေါင်းလုဒ်လုပ်လိုသော YouTube URL ကို သင့်စက်ပစ္စည်းသို့ ကူးယူပါ။
                </li>
                <li className="mb-2.5">ကူးယူထားသော URL ကို Y2meta ရှာဖွေမှုအကွက်ထဲသို့ ကူးထည့်ကာ MP4 သို့မဟုတ် MP3
                  ဖော်မတ်ကို ရွေးချယ်ပါ။
                </li>
                <li className="mb-2.5">
                  ပြောင်းလဲခြင်းပြီးမြောက်သည်အထိ စက္ကန့်အနည်းငယ်စောင့်ပြီး "ဒေါင်းလုဒ်" ခလုတ်ကို နှိပ်ပါ။
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta အားသာချက်များ</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">အကန့်အသတ်မရှိ YouTube ဗီဒီယိုများကို အခမဲ့အဖြစ် ပြောင်းလဲပြီး ဒေါင်းလုဒ်လုပ်ပါ။
                </li>
                <li className="mb-2.5">မည်သည့် YouTube ဗီဒီယိုကိုမဆို ဒေါင်းလုဒ်လုပ်ပြီး သိမ်းဆည်းရန်
                  မြန်ဆန်လွယ်ကူသောနည်းလမ်း
                </li>
                <li className="mb-2.5">ကျွန်ုပ်တို့၏ YouTube ဒေါင်းလုဒ်ကိရိယာသည် စက်အားလုံးနှင့် အပြည့်အဝ
                  တွဲဖက်အသုံးပြုနိုင်ပါသည်။
                </li>
                <li className="mb-2.5">၎င်းသည် အမြဲတမ်းအခမဲ့ဖြစ်ပြီး မှတ်ပုံတင်ရန် မလိုအပ်ပါ။</li>
                <li className="mb-2.5">ကျွန်ုပ်တို့သည် အရည်အသွေးမြင့် အသံနှင့် ဗီဒီယိုဖိုင်များကို ပံ့ပိုးပေးပါသည်။</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% လုံခြုံပြီးအခမဲ့</h3>
                <p>
                  Y2meta သည် YouTube မှ ဒေါင်းလုဒ်လုပ်ထားသော mp3 နှင့် mp4 ကို လုံးဝအခမဲ့ပေးပါသည်။ ထို့အပြင် ဤ YouTube
                  Video Downloader သည် ဗိုင်းရပ်စ်များနှင့် Malware များမှ လုံးဝလုံခြုံပြီး လုံခြုံပါသည်။
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">ဗီဒီယိုကို မြန်ဆန်လွယ်ကူစွာ
                  ဒေါင်းလုဒ်လုပ်ပါ။</h3>
                <p>
                  Y2meta tool သည် သင့်အား YouTube မှ MP3 နှင့် MP4 ကို လျင်မြန်စွာ ဒေါင်းလုဒ်လုပ်ရန် ကူညီပေးသည်။
                  ကော်ပီကူးထားသော YouTube URL ကို ရှာဖွေရေးအကွက်ထဲသို့ ကူးထည့်ကာ "Convert" ခလုတ်ကို နှိပ်ပါ။ YouTube
                  Video ဒေါင်းလုဒ်လုပ်ရန် ရိုးရှင်းသောအဆင့်များကို လိုက်နာပါ။
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">အကန့်အသတ်မရှိ YouTube ဗီဒီယိုများကို
                  ဒေါင်းလုဒ်လုပ်ပါ။</h3>
                <p>
                  ဤ Y2meta Downloader ကို အသုံးပြု၍ အကန့်အသတ်မရှိ သင်လိုချင်သလောက် YouTube ဗီဒီယိုများကို
                  ဒေါင်းလုဒ်လုပ်ပါ။ ၎င်းသည် လုံးဝအခမဲ့ဖြစ်ပြီး မှတ်ပုံတင်ပြီး အကောင့်ဝင်ရန် မလိုအပ်ပါ။
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">အရည်အသွေးများစွာကို ထောက်ပံ့ပေးသည်။</h3>
                <p>
                  Y2meta သည် များစွာသော အသံနှင့် ဗီဒီယို အရည်အသွေးများကို ပေးစွမ်းသောကြောင့် သင်သည် YouTube
                  ဗီဒီယိုများကို MP3၊ 3GP၊ MP4၊ WMA၊ M4A၊ FLV၊ WEBM၊ MO ဖော်မတ်များ စသည်တို့သို့ ပြောင်းလဲနိုင်သည်။
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">အမြဲမေးလေ့ရှိသောမေးခွန်းများ</h2>
            <h3 className="mt-2.5 font-semibold">Y2meta ဆိုတာဘာလဲ။</h3>
            <p>
              Y2meta သည် သင့်အား YouTube မှ ဗီဒီယိုကို လျှင်မြန်စွာနှင့် အခမဲ့ဒေါင်းလုဒ်လုပ်ရန် အကောင်းဆုံး YouTube
              Video Downloader ဖြစ်သည်။ ထို့အပြင်၊ YouTube ကို အရည်အသွေးမြင့် Mp3 သို့ ပြောင်းပါ။
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta သည် လုံးဝအခမဲ့ဖြစ်ပါသလား။</h3>
            <p>
              ဟုတ်ပါသည်၊ Y2meta သည် YouTube ဗီဒီယိုများကို အသုံးပြုရန်နှင့် ဒေါင်းလုဒ်လုပ်ရန် လုံးဝအခမဲ့ဖြစ်သည်။
              စာရင်းသွင်းမှုပမာဏကို ပေးဆောင်ရန် မလိုအပ်ဘဲ သင့်စက်ပေါ်တွင် သင်ဒေါင်းလုဒ်လုပ်လိုသော YouTube ဗီဒီယို URL
              ကို လိုအပ်ပါသည်။
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube ဗီဒီယိုများကို iPhone သို့ မည်သို့ဒေါင်းလုဒ်လုပ်မည်နည်း။</h3>
            <p>
              iPhone အသုံးပြုသူများ၏ လုပ်ငန်းစဉ်သည် All use နှင့် အနည်းငယ်ကွာခြားပါသည်။ သင်သည် iOS 13 တွင် Safari
              ဘရောက်ဆာကို အသုံးပြုရန် လိုအပ်သည် သို့မဟုတ် Readdle အက်ပ်မှ စာရွက်စာတမ်းများ ရယူရန် လိုအပ်ပြီး
              လုပ်ငန်းစဉ်အားလုံးသည် အထက်ဖော်ပြပါအတိုင်းဖြစ်သည်။
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta သည် YouTube မှ ဗီဒီယိုများကို ဒေါင်းလုဒ်လုပ်ရန်
              ဘေးကင်းပါသလား။</h3>
            <p>
              ဟုတ်ပါသည်၊ ကျွန်ုပ်တို့၏ ဒေါင်းလုဒ်ကိရိယာကို အသုံးပြု၍ YouTube ဗီဒီယိုများကို ဒေါင်းလုဒ်လုပ်ပါ သင်သည်
              ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို မျှဝေရန်မလိုအပ်သည့်အပြင် သင့်စက်များတွင် ပြင်ပအပလီကေးရှင်းများနှင့်
              ဆော့ဖ်ဝဲများကိုလည်း ထည့်သွင်းရန် မလိုအပ်ပါ။
            </p>
            <h3 className="mt-2.5 font-semibold">ပံ့ပိုးထားသော ဗီဒီယို/အသံဖော်မတ်များသည် အဘယ်နည်း။</h3>
            <p>
              ကျွန်ုပ်တို့သည် အရည်အသွေးမြင့် ဖော်မတ်အမျိုးမျိုးကို ပံ့ပိုးပေးပြီး 720p၊ 1080p၊ 1440p၊ 2160p
              အရည်အသွေးဖြင့် mp4 ကို 320kbps, 256kbps, 192kbps, 128kbps, 128kbps, 64kbps နှင့် mp4 ဖြင့်
              ဒေါင်းလုဒ်လုပ်ခွင့်ပြုပါသည်။
            </p>
            <h3 className="mt-2.5 font-semibold">ဒေါင်းလုဒ်လုပ်ထားသော YouTube ဗီဒီယိုဖိုင်သည် ကျွန်ုပ်၏စက်တွင်
              သိမ်းဆည်းထားသည့်နေရာတွင် တည်ရှိနေပါသည်။</h3>
            <p>
              ဗီဒီယိုကို Youtube မှ သင့်ကွန်ပြူတာတွင် သိမ်းဆည်းပြီးနောက် သင့်စက်ရှိ သင်၏ဘရောက်ဆာ "ဒေါင်းလုဒ်မှတ်တမ်း"
              သို့မဟုတ် "ဒေါင်းလုဒ်များ" ဖိုင်တွဲတွင် တိုက်ရိုက်စစ်ဆေးပါ။
            </p>
            <h3 className="mt-2.5 font-semibold">ဤ YouTube ဗီဒီယိုဒေါင်းလုဒ်ကိရိယာသည် စက်အားလုံးနှင့်
              တွဲဖက်အသုံးပြုနိုင်ပါသလား။</h3>
            <p>
              ဟုတ်ပါသည်၊ Y2meta သည် ကွန်ပျူတာ၊ မိုဘိုင်းနှင့် တက်ဘလက်များကဲ့သို့သော စက်ပစ္စည်းများအားလုံးတွင် YouTube မှ
              ဗီဒီယိုများကို ဒေါင်းလုဒ်လုပ်ခြင်းကို ပံ့ပိုးပေးပြီး Chrome၊ Firefox၊ Microsoft Edge၊ Safari၊ Opera နှင့်
              အခြားဘရောက်ဆာအမျိုးအစားအားလုံးတွင် ချောမွေ့စွာအလုပ်လုပ်ပါသည်။
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
    <html lang="my"/>
    <title>Y2meta - YouTube Downloader | YouTube ဗီဒီယိုကို အခမဲ့ဒေါင်းလုဒ်လုပ်ပါ။</title>
    <meta
      name="description"
      content="Y2meta သည် လူကြိုက်များသော Free YouTube Downloader သည် ဆော့ဖ်ဝဲလ်ထည့်သွင်းခြင်းမရှိဘဲ 1080p၊ 2160p၊ 2k၊ 4k၊ 8k တွင် အရည်အသွေးမြင့် YouTube ဗီဒီယိုကို အခမဲ့ဒေါင်းလုဒ်လုပ်ခွင့်ပေးသည်။"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="my"/>
    <meta property="og:title" content="Y2meta - YouTube Downloader | YouTube ဗီဒီယိုကို အခမဲ့ဒေါင်းလုဒ်လုပ်ပါ။"/>
    <meta
      property="og:description"
      content="Y2meta သည် လူကြိုက်များသော Free YouTube Downloader သည် ဆော့ဖ်ဝဲလ်ထည့်သွင်းခြင်းမရှိဘဲ 1080p၊ 2160p၊ 2k၊ 4k၊ 8k တွင် အရည်အသွေးမြင့် YouTube ဗီဒီယိုကို အခမဲ့ဒေါင်းလုဒ်လုပ်ခွင့်ပေးသည်။"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/my/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/my/"/>
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
