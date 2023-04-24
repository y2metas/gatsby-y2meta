import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP3 = () => {
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">YouTube မှ MP3 Converter</h1>
            <p>YouTube ဗီဒီယိုများကို MP3 သို့ အခမဲ့အဖြစ် ပြောင်းလဲပြီး ဒေါင်းလုဒ်လုပ်ပါ။</p>
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
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">အကောင်းဆုံး YouTube သို့ MP3 Converter</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta သည် လျင်မြန်ပြီး ရိုးရှင်းသော YouTube မှ MP3 converter ဖြစ်သည်။ ကျွန်ုပ်တို့၏ လူကြိုက်များသော
              YouTube မှ MP3 ဒေါင်းလုဒ်လုပ်သူသည် သင့်အား အရည်အသွေးမြင့် YouTube ဗီဒီယိုများကို MP3 သို့ အလွယ်တကူ
              ပြောင်းပြီး ဒေါင်းလုဒ်လုပ်ရန် အခမဲ့ပေးပါသည်။ ထို့အပြင်၊ သင်သည် 64kbps၊ 128kbps၊ 192kbps နှင့် 320kbps အထိ
              အရည်အသွေးရွေးချယ်စရာများစွာဖြင့် mp3 ကို ဒေါင်းလုဒ်လုပ်နိုင်ပါသည်။
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              ဤ YouTube သို့ Mp3 converter သည် ဒက်စတော့များ၊ လက်ပ်တော့များ၊ တက်ဘလက်များနှင့် စမတ်ဖုန်းများအပါအဝင်
              စက်ပစ္စည်းများအားလုံးတွင် မည်သည့်အက်ပ် သို့မဟုတ် ဆော့ဖ်ဝဲလ်ကိုမျှ ထည့်သွင်းခြင်းမပြုဘဲ
              ချောမွေ့စွာအလုပ်လုပ်ပါသည်။ ပြောင်းလဲခြင်းလုပ်ငန်းစဉ်သည် မြန်ဆန်လွယ်ကူပြီး YouTube URL ကို
              ကူးထည့်လိုက်ရုံဖြင့် သင်၏ youtube mp3 ဖိုင်ကို စက္ကန့်အနည်းငယ်အတွင်း ဒေါင်းလုဒ်လုပ်ရန် အသင့်ဖြစ်နေပါပြီ။
              ၎င်းသည် လုံးဝလုံခြုံပြီး လုံခြုံသော YouTube MP3 converter ဖြစ်သည်။
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>YouTube ဗီဒီယိုကို အွန်လိုင်း MP3 သို့ အခမဲ့ပြောင်းနည်း</strong>
              </h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  YouTube ဗီဒီယို URL ကို ကူးထည့်ပါ သို့မဟုတ် ရှာဖွေမှုဘောက်စ်တွင် သော့ချက်စာလုံးကို ထည့်ပါ၊ ထို့နောက်
                  "ရှာဖွေရန်" ခလုတ်ကို နှိပ်ပါ။
                </li>
                <li className="mb-2.5">MP3 အရည်အသွေးကို ရွေးပြီး "ဒေါင်းလုဒ်" ခလုတ်ကို နှိပ်ပါ။</li>
                <li className="mb-2.5">
                  စက္ကန့်အနည်းငယ်စောင့်ပြီး Mp3 ပြောင်းလဲခြင်းအောင်မြင်ပြီးနောက် Download ခလုတ်ကိုနှိပ်ပါ။
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Y2meta အားသာချက်များ</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">အကန့်အသတ်မရှိ YouTube မှ MP3 ဖိုင်များကို ပြောင်းပြီး ဒေါင်းလုဒ်လုပ်ပါ။</li>
                <li className="mb-2.5">မည်သည့်ဆော့ဝဲလ်ကိုမဆို ထည့်သွင်းပြီး မှတ်ပုံတင်စရာမလိုပါ။</li>
                <li className="mb-2.5">100% လုံခြုံပြီး လုံခြုံသော YouTube Converter</li>
                <li className="mb-2.5">ဘရောက်ဆာများနှင့် စက်ပစ္စည်းများအားလုံးနှင့် တွဲဖက်အသုံးပြုနိုင်သည်။</li>
                <li className="mb-2.5">အရည်အသွေးမြင့်အသံဖြင့် Youtube ကို mp3 သို့ လုံးဝအခမဲ့ပြောင်းပါ။</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">လွယ်ကူမြန်ဆန်သော ကူးပြောင်းမှု</h3>
                <p>
                  YouTube မှ MP3 ကို ဒေါင်းလုဒ်လုပ်ရန် လွယ်ကူသည်မှာ သင်ဒေါင်းလုဒ်လုပ်လိုသော YouTube URL ကို
                  ရိုက်ထည့်ပြီး ဒေါင်းလုဒ်ခလုတ်ကို နှိပ်ပါ။ သင်၏ပြောင်းထားသောဖိုင်များကို စက္ကန့်အနည်းငယ်အတွင်း
                  အဆင်သင့်ဖြစ်ပါပြီ။
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">အရည်အသွေးမြင့် ဖော်မတ်များ ပေးပါ။</h3>
                <p>
                  YouTube ကို 64kbps၊ 128kbps၊ 192kbps၊ 256kbps နှင့် 320 kbps ကဲ့သို့သော အရည်အသွေးမြင့်
                  ဖော်မတ်များဖြင့် YouTube သို့ ပြောင်းရန် ကျွန်ုပ်တို့ ကမ်းလှမ်းထားပါသည်။ လိုအပ်ချက်အရ ရွေးချယ်ပြီး
                  ဒေါင်းလုဒ်လုပ်နိုင်ပါတယ်။
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta download" width={50}
                           quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">အကန့်အသတ်မရှိ ကူးပြောင်းခြင်း။</h3>
                <p>
                  မည်သည့် YouTube ဗီဒီယိုကိုမဆို MP3 သို့ အကန့်အသတ်မရှိ အခမဲ့ပြောင်းပါ။ Youtube မှ Mp3
                  ကိုဒေါင်းလုဒ်လုပ်ရန် မည်သည့်ဆော့ဝဲလ် သို့မဟုတ် အက်ပ်များကိုမဆို ထည့်သွင်းရန်မလိုအပ်ပါ။
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">ပလပ်ဖောင်းအားလုံးနှင့်
                  တွဲဖက်အသုံးပြုနိုင်သည်။</h3>
                <p>
                  ကျွန်ုပ်တို့၏ YouTube Converter သည် PC၊ တက်ဘလက်၊ iPhone၊ Android ဖုန်းစသည်ဖြင့်
                  စက်ပစ္စည်းအမျိုးအစားအားလုံးနှင့် တွဲဖက်အသုံးပြုနိုင်ပြီး Y2meta သည် Chrome၊ Microsoft Edge၊ Firefox၊
                  Opera နှင့် အခြားမည်သည့်ဘရောက်ဆာအားလုံးကိုမဆို ပံ့ပိုးပေးပါသည်။
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">အမြဲမေးလေ့ရှိသောမေးခွန်းများ</h2>
            <h3 className="mt-2.5 font-semibold">ဤ YouTube မှ MP3 converter ကို သုံးရန် အခမဲ့လား။</h3>
            <p>
              ဟုတ်ပါသည်၊ ကျွန်ုပ်တို့၏ Y2meta converter သည် အကောင့်တစ်ခုမှတ်ပုံတင်စရာမလိုဘဲ YouTube မှ Mp3 ကို
              ဒေါင်းလုဒ်လုပ်ရန် လုံးဝအခမဲ့ဖြစ်သည်။
            </p>
            <h3 className="mt-2.5 font-semibold">ဤ Youtube ကို စက်ပစ္စည်းအားလုံးတွင် mp3 သို့ အသုံးပြုနိုင်ပါသလား။</h3>
            <p>
              ဟုတ်ပါတယ်၊ ဤ YouTube မှ Mp3 converter သည် ကွန်ပျူတာများ၊ မိုဘိုင်းနှင့် တက်ဘလက်များအပါအဝင်
              စက်ပစ္စည်းအမျိုးအစားအားလုံးကို ပံ့ပိုးပေးပါသည်။
            </p>
            <h3 className="mt-2.5 font-semibold">YouTube ဗီဒီယိုများမှ MP3 ကို မည်သို့ဒေါင်းလုဒ်လုပ်မည်နည်း။</h3>
            <p>YouTube ကို mp3 အဖြစ်ပြောင်းလိုသော Youtube ဗီဒီယိုလင့်ခ်ကို ကူးယူပါ။</p>
            <p>YouTube URL ကို search box တွင် ကူးထည့်ပါ။</p>
            <p>Search ခလုတ်ကိုနှိပ်ပြီးနောက် Mp3 ကိုရွေးချယ်ပြီး convert ခလုတ်ကိုနှိပ်ပါ။</p>
            <p>ပြောင်းလဲခြင်းအောင်မြင်စွာပြီးဆုံးရန် စက္ကန့်အနည်းငယ်စောင့်ပြီးနောက် "ဒေါင်းလုဒ်" ခလုတ်ကိုနှိပ်ပါ။</p>
            <h3 className="mt-2.5 font-semibold">YouTube မှ Mp3 ဒေါင်းလုဒ်အများဆုံးအရေအတွက်က ဘယ်လောက်လဲ။</h3>
            <p>
              သင်သည် YouTube ကို Mp3 သို့ အကန့်အသတ်မရှိ ပြောင်းနိုင်ပြီး ဤ YouTube converter ကို အသုံးပြုသည့်အခါ
              ကန့်သတ်ချက်များ မရှိပါ။ စွမ်းဆောင်ချက်အားလုံးသည် အကန့်အသတ်မရှိ အကုန်အကျခံကာ အခမဲ့ဖြစ်သည်။
            </p>
            <h3 className="mt-2.5 font-semibold">ဘရောက်ဆာ တိုးချဲ့မှု သို့မဟုတ် ဆော့ဖ်ဝဲကို ထည့်သွင်းရန်
              လိုအပ်ပါသလား။</h3>
            <p>
              မဟုတ်ပါ၊ ကျွန်ုပ်တို့၏ YouTube Converter သည် ဝဘ်ပေါ်တွင် အလုပ်လုပ်သောကြောင့် မည်သည့်ဆော့ဖ်ဝဲလ် သို့မဟုတ်
              တိုးချဲ့မှုကို ထည့်သွင်းရန် မလိုအပ်ပါ။ သင်သည် ဝဘ်ဘရောက်ဆာတစ်ခုနှင့် ယုံကြည်စိတ်ချရသော
              အင်တာနက်ချိတ်ဆက်မှုတစ်ခုသာ လိုအပ်ပါသည်။
            </p>
            <h3 className="mt-2.5 font-semibold">ဤ YouTube converter ကို အသုံးပြု၍ YouTube မှ mp3 ကို ဒေါင်းလုဒ်လုပ်ရန်
              အန္တရာယ်ကင်းပါသလား။</h3>
            <p>
              ဟုတ်ပါသည်၊ ကျွန်ုပ်တို့၏ Youtube မှ Mp3 converter သည် ထိုသူများသည် ဗီဒီယိုများကို ဘေးကင်းစွာ
              ဒေါင်းလုဒ်လုပ်နိုင်ကြောင်း သေချာစေသည့် SSL အလွှာဖြင့် လုံခြုံပါသည်။ ကျွန်ုပ်တို့သည် ဗိုင်းရပ်စ်များနှင့်
              malware များမှ ကင်းဝေးစေရန် ကျွန်ုပ်တို့၏ YouTube To Mp3 converter လုံခြုံရေးကို နေ့စဉ်
              စောင့်ကြည့်နေပါသည်။
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
    <html lang="my"/>
    <title>YouTube သို့ MP3 Converter - Y2meta</title>
    <meta
      name="description"
      content="Y2meta သည် အခမဲ့ YouTube မှ MP3 Converter ဖြစ်ပြီး ဆော့ဖ်ဝဲလ်ထည့်သွင်းခြင်းမရှိဘဲ PC၊ iPhone နှင့် Android တွင် YouTube မှ MP3 သို့ YouTube အခမဲ့သို့ ခွင့်ပြုပါသည်။"/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="my"/>
    <meta property="og:title" content="YouTube သို့ MP3 Converter - Y2meta"/>
    <meta
      property="og:description"
      content="Y2meta သည် အခမဲ့ YouTube မှ MP3 Converter ဖြစ်ပြီး ဆော့ဖ်ဝဲလ်ထည့်သွင်းခြင်းမရှိဘဲ PC၊ iPhone နှင့် Android တွင် YouTube မှ MP3 သို့ YouTube အခမဲ့သို့ ခွင့်ပြုပါသည်။"/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/my/youtube-to-mp3/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/my/youtube-to-mp3/"/>
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