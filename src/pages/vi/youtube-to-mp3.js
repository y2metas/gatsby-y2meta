import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeToMP3 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("test");
  const [selectedLanguage, setSelectedLanguage] = useState("vi");
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
                <Link to="/vi/" className="flex items-center">
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
                  to="/vi/">
                  YouTube Downloader
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/vi/youtube-to-mp3/">
                  YouTube to MP3
                </Link>
                <Link
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                  to="/vi/youtube-to-mp4/">
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
                        to="/vi/">
                        YouTube Downloader
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/vi/youtube-to-mp3/">
                        YouTube to MP3
                      </Link>
                      <Link
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                        to="/vi/youtube-to-mp4/">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Trình chuyển đổi YouTube sang MP3</h1>
            <p>Chuyển đổi và tải video YouTube sang MP3 miễn phí</p>
            <div className="flex justify-center md:mt-9 mt-6">
              <div className="flex w-[600px]">
                <input
                  type="text"
                  className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                  placeholder="Tìm kiếm hoặc dán liên kết youtube vào đây..."
                  onChange={handleInputChange}
                  onKeyDown={handleClickEnter}
                />
                <button
                  className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                  onClick={handleClickConvert}>
                  tìm kiếm
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              Bằng cách sử dụng dịch vụ của chúng tôi, bạn
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;chấp nhận các điều khoản của chúng
                tôi.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Trình chuyển đổi YouTube sang MP3 tốt nhất</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta là trình chuyển đổi YouTube sang MP3 nhanh chóng và dễ dàng Trình tải xuống YouTube sang MP3 phổ
              biến của chúng tôi cho phép bạn dễ dàng chuyển đổi và tải xuống video YouTube sang MP3 với chất lượng cao
              và miễn phí. Ngoài ra, bạn có thể tải nhạc mp3 với nhiều tùy chọn chất lượng lên tới 64kbps, 128kbps,
              192kbps và 320kbps.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Trình chuyển đổi YouTube sang Mp3 này hoạt động trơn tru trên tất cả các thiết bị bao gồm máy tính để bàn,
              máy tính xách tay, máy tính bảng và điện thoại thông minh mà không cần cài đặt bất kỳ ứng dụng hoặc phần
              mềm nào. Quá trình chuyển đổi diễn ra nhanh chóng và thuận tiện. Chỉ cần dán URL YouTube và trong vài bước
              đơn giản, tệp mp3 YouTube của bạn đã sẵn sàng để tải xuống sau vài giây. Nó là trình chuyển đổi YouTube
              MP3 hoàn toàn an toàn và bảo mật.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Cách chuyển đổi video YouTube sang MP3 trực tuyến miễn phí</strong>
              </h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Dán URL video YouTube hoặc nhập từ khóa vào hộp tìm kiếm, sau đó nhấp vào nút "Tìm kiếm".
                </li>
                <li className="mb-2.5">Chọn chất lượng MP3 và nhấn nút "Tải xuống".</li>
                <li className="mb-2.5">
                  Đợi vài giây và nhấp vào nút tải xuống sau khi chuyển đổi Mp3 thành công.
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Lợi thế của Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Tải xuống các tệp MP3 từ YouTube mà không cần chuyển đổi và bất kỳ giới hạn nào
                </li>
                <li className="mb-2.5">Không cần cài đặt bất kỳ phần mềm nào và không cần đăng ký</li>
                <li className="mb-2.5">Trình chuyển đổi YouTube an toàn và bảo mật 100%</li>
                <li className="mb-2.5">Tương thích với mọi trình duyệt và thiết bị</li>
                <li className="mb-2.5">Chuyển YouTube sang mp3 với âm thanh chất lượng cao hoàn toàn miễn phí</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Chuyển đổi dễ dàng và nhanh chóng</h3>
                <p>
                  Tải xuống MP3 từ YouTube thật dễ dàng, chỉ cần nhập URL YouTube bạn muốn tải xuống và nhấp vào nút tải
                  xuống. Các tệp đã chuyển đổi của bạn sẽ sẵn sàng sau vài giây.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Cung cấp định dạng chất lượng cao</h3>
                <p>
                  Chúng tôi cung cấp chuyển đổi YouTube sang mp3 ở các định dạng chất lượng cao như 64kbps, 128kbps,
                  192kbps, 256kbps và 320kbps. Bạn có thể lựa chọn và tải về theo yêu cầu.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta download" width={50}
                           quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Chuyển đổi không giới hạn</h3>
                <p>
                  Chuyển đổi miễn phí bất kỳ video YouTube nào sang MP3 mà không bị giới hạn. Không cần cài đặt bất kỳ
                  phần mềm hay ứng dụng nào để tải Mp3 từ Youtube.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta quality" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Tương thích với mọi nền tảng</h3>
                <p>
                  Trình chuyển đổi YouTube của chúng tôi tương thích với tất cả các loại thiết bị PC, máy tính bảng,
                  iPhone, điện thoại Android, v.v. Ngoài ra, Y2meta còn hỗ trợ Chrome, Microsoft Edge, Firefox, Opera và
                  bất kỳ trình duyệt nào khác.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">Câu hỏi thường gặp</h2>
            <h3 className="mt-2.5 font-semibold">Trình chuyển đổi YouTube sang MP3 này có miễn phí sử dụng không?</h3>
            <p>
              Có, trình chuyển đổi Y2meta của chúng tôi hoàn toàn miễn phí để tải xuống Mp3 từ YouTube mà không cần đăng
              ký tài khoản
            </p>
            <h3 className="mt-2.5 font-semibold">Tôi có thể sử dụng Youtube này để mp3 trên tất cả các thiết bị
              không?</h3>
            <p>
              Tất nhiên, có, trình chuyển đổi YouTube sang Mp3 này hỗ trợ tất cả các loại thiết bị bao gồm máy tính,
              điện thoại di động và máy tính bảng.
            </p>
            <h3 className="mt-2.5 font-semibold">Làm cách nào để tải video YouTube sang MP3?</h3>
            <p>Sao chép liên kết video YouTube mà bạn muốn chuyển YouTube sang mp3</p>
            <p>Dán URL YouTube vào hộp tìm kiếm</p>
            <p>Nhấn nút tìm kiếm sau đó chọn Mp3 và nhấp vào nút chuyển đổi</p>
            <p>Đợi vài giây để quá trình chuyển đổi hoàn tất thành công, sau đó nhấp vào nút "Tải xuống".</p>
            <h3 className="mt-2.5 font-semibold">Số lượt tải xuống Mp3 tối đa từ YouTube là bao nhiêu?</h3>
            <p>
              Bạn có thể chuyển đổi YouTube sang Mp3 không giới hạn và không có giới hạn nào trong việc sử dụng trình
              chuyển đổi YouTube này. Tất cả các tính năng là hoàn toàn miễn phí và không có giới hạn.
            </p>
            <h3 className="mt-2.5 font-semibold">Tôi có cần cài đặt phần mở rộng trình duyệt hoặc phần mềm không?</h3>
            <p>
              Không, trình chuyển đổi YouTube của chúng tôi hoạt động trên web nên bạn không cần cài đặt bất kỳ phần mềm
              hoặc tiện ích mở rộng nào. Tất cả những gì bạn cần là một trình duyệt web và kết nối internet đáng tin cậy
            </p>
            <h3 className="mt-2.5 font-semibold">Tải xuống mp3 từ YouTube bằng trình chuyển đổi YouTube này có an toàn
              không?</h3>
            <p>
              Có, trình chuyển đổi Youtube sang Mp3 của chúng tôi được bảo mật bằng lớp SSL để đảm bảo rằng những người
              đó có thể tải xuống video một cách an toàn. Chúng tôi giám sát tính bảo mật của Bộ chuyển đổi YouTube sang
              Mp3 hàng ngày để luôn an toàn trước vi-rút và phần mềm độc hại.
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
    <html lang="vi"/>
    <title>Trình chuyển đổi YouTube sang MP3 - Y2meta</title>
    <meta
      name="description"
      content="Y2meta là Trình chuyển đổi YouTube sang MP3 miễn phí, cho phép chuyển đổi MP3 từ YouTube miễn phí trên PC, iPhone và Android mà không cần cài đặt phần mềm."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="vi"/>
    <meta property="og:title" content="Trình chuyển đổi YouTube sang MP3 - Y2meta"/>
    <meta
      property="og:description"
      content="Y2meta là Trình chuyển đổi YouTube sang MP3 miễn phí, cho phép chuyển đổi MP3 từ YouTube miễn phí trên PC, iPhone và Android mà không cần cài đặt phần mềm."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/vi/youtube-to-mp3/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/vi/youtube-to-mp3/"/>
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