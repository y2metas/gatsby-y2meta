import React, {useState} from 'react';
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"
import '../../styles/global.css';

const YouTubeDownloader = () => {
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
                    <nav className="grid gap-y-4">
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
            <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">Y2meta - Trình tải xuống video YouTube</h1>
            <p>Tải xuống video YouTube ở định dạng MP3 và MP4 chất lượng cao miễn phí</p>
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
                  Tìm kiếm
                </button>
              </div>
            </div>
            <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">
              Bằng cách sử dụng dịch vụ của chúng tôi, bạn chấp nhận
              <Link className="text-heading-clr" to="/terms-condition/">&nbsp;Điều khoản và Điều kiện của chúng
                tôi.</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="md:py-8 py-6 text-center">
            <h2 className="font-bold text-xl my-2.5 md:text-2xl">Trình tải xuống video YouTube tốt nhất</h2>
            <h3 className="text-lg text-justify	my-2.5">
              Y2meta là trình tải xuống YouTube phổ biến nhất cho phép bạn tải xuống các video YouTube miễn phí. Không
              cần cài đặt ứng dụng, phần mềm bên thứ ba để lưu video YouTube trên thiết bị cá nhân của bạn Tất cả những
              gì bạn cần là một trình duyệt và kết nối internet đáng tin cậy. Tải xuống và thưởng thức các video yêu
              thích của bạn từ YouTube, Facebook, Video, Dailymotion, Youku và các trang web chia sẻ xã hội khác với
              chất lượng bạn muốn. Y2meta cung cấp cách an toàn nhất để tải video YouTube với chất lượng HD và không cần
              đăng nhập hay chia sẻ thông tin cá nhân.
            </h3>
            <h3 className="text-lg text-justify	my-2.5">
              Tải xuống âm thanh và video YouTube ở các định dạng khác nhau như MP3, WEBM, MP4, M4V, 3GP, WMV, FLV, MO,
              v.v. và các tốc độ bit MP3 khác nhau bao gồm 64kbps, 128kbps, 192kbps, 256kbps và 320kbps. Y2meta hoạt
              động trơn tru trên máy tính, điện thoại di động, máy tính bảng và các thiết bị khác của bạn. Nó là một
              trình tải xuống YouTube đơn giản và dễ dàng.
            </h3>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="py-8 md:flex md:justify-between">
            <div className="md:w-[43%]">
              <h4 className="text-lg my-1.5"><strong>Làm cách nào để tải xuống video YouTube bằng Y2meta?</strong></h4>
              <ol className="m-0 pl-4 list-decimal text-justify">
                <li className="mb-2.5">
                  Mở trang web YouTube và sao chép URL YouTube mà bạn muốn tải xuống thiết bị của mình
                </li>
                <li className="mb-2.5">Dán URL đã sao chép vào hộp tìm kiếm Y2meta và chọn định dạng MP4 hoặc MP3</li>
                <li className="mb-2.5">
                  Đợi vài giây cho đến khi quá trình chuyển đổi hoàn tất và nhấn nút "Tải xuống"
                </li>
              </ol>
            </div>
            <div className="md:w-[43%]">
              <h5 className="text-lg my-1.5"><strong>Lợi thế của Y2meta</strong></h5>
              <ul className="m-0 pl-4 list-disc text-justify">
                <li className="mb-2.5">Chuyển đổi và tải xuống video YouTube không giới hạn miễn phí</li>
                <li className="mb-2.5">Cách nhanh chóng và dễ dàng để tải xuống và lưu bất kỳ video YouTube nào</li>
                <li className="mb-2.5">Trình tải xuống YouTube của chúng tôi hoàn toàn tương thích với tất cả các thiết
                  bị
                </li>
                <li className="mb-2.5">Nó luôn miễn phí và không cần đăng ký</li>
                <li className="mb-2.5">Chúng tôi cung cấp các tệp âm thanh và video chất lượng cao</li>
              </ul>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div
            className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <StaticImage src="../../images/quality.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">100% an toàn và miễn phí</h3>
                <p>
                  Y2meta cung cấp tải xuống mp3 và mp4 từ YouTube hoàn toàn miễn phí. Ngoài ra, trình tải xuống video
                  YouTube này hoàn toàn an toàn và bảo mật khỏi vi-rút và phần mềm độc hại.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/video.svg" loading="eager" alt="y2meta video" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Tải xuống video nhanh chóng và dễ dàng</h3>
                <p>
                  Công cụ Y2meta giúp bạn tải MP3 và MP4 từ YouTube một cách nhanh chóng. Chỉ cần dán URL YouTube đã sao
                  chép vào hộp tìm kiếm và nhấp vào nút "Chuyển đổi" Thực hiện theo các bước đơn giản để tải xuống video
                  YouTube.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/download.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Tải xuống video YouTube không giới hạn</h3>
                <p>
                  Tải xuống bao nhiêu video YouTube tùy thích mà không có bất kỳ giới hạn nào bằng trình tải xuống
                  Y2meta này. Nó hoàn toàn miễn phí và không yêu cầu đăng ký và đăng nhập.
                </p>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/gift.svg" loading="eager" alt="y2meta gift" width={50} quality={50}/>
              <div className="px-6 py-4">
                <h3 className="text-2xl text-heading-clr font-bold mb-2">Hỗ trợ nhiều chất lượng</h3>
                <p>
                  Y2meta cung cấp nhiều chất lượng âm thanh và video để bạn có thể chuyển đổi video YouTube sang các
                  định dạng MP3, 3GP, MP4, WMA, M4A, FLV, WEBM, MO.
                </p>
              </div>
            </div>
          </div>
          <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="md:py-8 py-6">
            <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">Câu hỏi thường gặp</h2>
            <h3 className="mt-2.5 font-semibold">Y2meta là gì?</h3>
            <p>
              Y2meta là trình tải xuống video YouTube tốt nhất cho phép bạn tải xuống video từ YouTube nhanh chóng và
              miễn phí. Ngoài ra, chuyển đổi YouTube sang Mp3 với chất lượng cao.
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta có hoàn toàn miễn phí không?</h3>
            <p>
              Có, Y2meta hoàn toàn miễn phí sử dụng và tải xuống video YouTube. Bạn không cần phải trả bất kỳ số tiền
              đăng ký nào, chỉ cần URL video YouTube mà bạn muốn tải xuống trên thiết bị của mình.
            </p>
            <h3 className="mt-2.5 font-semibold">Làm cách nào để tải xuống video YouTube trên iPhone?</h3>
            <p>
              Quy trình dành cho người dùng iPhone hơi khác so với Tất cả sử dụng. Bạn cần sử dụng trình duyệt Safari
              trên iOS 13 hoặc lấy tài liệu qua ứng dụng Readdle và tất cả quy trình tương tự như trên.
            </p>
            <h3 className="mt-2.5 font-semibold">Y2meta có an toàn để tải xuống video từ YouTube không?</h3>
            <p>
              Có, tải xuống video YouTube bằng trình tải xuống của chúng tôi, bạn không cần chia sẻ bất kỳ thông tin cá
              nhân nào và bạn không cần cài đặt ứng dụng và phần mềm của bên thứ ba trên thiết bị của mình.
            </p>
            <h3 className="mt-2.5 font-semibold">Các định dạng video/âm thanh được hỗ trợ là gì?</h3>
            <p>
              Chúng tôi cung cấp nhiều định dạng chất lượng cao khác nhau và cho phép bạn tải xuống mp3 với tốc độ bit
              320kbps, 256kbps, 192kbps, 128kbps, 64kbps và chất lượng mp4 720p, 1080p, 1440p, 2160p.
            </p>
            <h3 className="mt-2.5 font-semibold">Các tệp video YouTube đã tải xuống được lưu ở đâu trên thiết bị của
              tôi?</h3>
            <p>
              Sau khi video được lưu từ YouTube vào máy tính của bạn, hãy kiểm tra trực tiếp "Lịch sử tải xuống" trong
              trình duyệt hoặc thư mục "Tải xuống" trên thiết bị của bạn.
            </p>
            <h3 className="mt-2.5 font-semibold">Trình tải xuống video YouTube này có tương thích với tất cả các thiết
              bị không?</h3>
            <p>
              Có, Y2meta hỗ trợ tải xuống video từ YouTube trên tất cả các thiết bị như máy tính, thiết bị di động và
              máy tính bảng và hoạt động dễ dàng trên tất cả các trình duyệt như Chrome, Firefox, Microsoft Edge,
              Safari, Opera, v.v.
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
    <html lang="vi"/>
    <title>Y2meta - Trình tải xuống YouTube | Tải xuống video YouTube miễn phí</title>
    <meta
      name="description"
      content="Y2meta là Trình tải xuống YouTube miễn phí phổ biến cho phép Tải xuống video YouTube miễn phí với chất lượng cao ở 1080p, 2160p, 2k, 4k, 8k mà không cần cài đặt phần mềm."/>
    <meta name="robots" content="index,follow"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Y2meta"/>
    <meta property="og:locale" content="vi"/>
    <meta property="og:title" content="Y2meta - Trình tải xuống YouTube | Tải xuống video YouTube miễn phí"/>
    <meta
      property="og:description"
      content="Y2meta là Trình tải xuống YouTube miễn phí phổ biến cho phép Tải xuống video YouTube miễn phí với chất lượng cao ở 1080p, 2160p, 2k, 4k, 8k mà không cần cài đặt phần mềm."/>
    <meta property="og:image" content="https://y2meta.mobi/icons/icon-256x256.png"/>
    <meta property="og:url" content="https://y2meta.mobi/vi/"/>
    <link rel="icon" href="https://y2meta.mobi/icons/icon-256x256.png"/>
    <link rel="canonical" href="https://y2meta.mobi/vi/"/>
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
