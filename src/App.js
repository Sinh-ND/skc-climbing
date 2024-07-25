import { useEffect, useState } from 'react';
import moment from 'moment';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Home from './components/Home';
import HomeLink from './components/Homelink';
import Types from './components/Types';
import History from './components/History';
import Techniques from './components/Techniques';
import Shelter from './components/Shelter';
import Hazards from './components/Hazards';
import Records from './components/Records';
import Organizations from './components/Organizations';
import Developments from './components/Developments';
import Guidelines from './components/Guidelines';
import Contact from './components/Contact';
import SportClimbing from './components/SportClimbing';
import Bouldering from './components/Bouldering';
import IceClimbing from './components/IceClimbing';
import AlpineClimbing from './components/AlpineClimbing';
import ViaFerrata from './components/ViaFerrata';
import FreeSoloClimbing from './components/FreeSoloClimbing';
import MixedClimbing from './components/MixedClimbing';
import TraditionalClimbing from './components/TraditionalClimbing';
import FeedbackButton from './components/FeedbackButton';
import FeedbackForm from './components/FeedbackForm';
import Videos from './components/Videos';
import SuccessStories from './components/SuccessStories';
import Pictures from './components/Pictures';
import Counter from './components/Counter';
import TopButton from './components/TopButton'; // Nút lên đầu trang
import ho36 from "../src/assets/images/logo.png"; // Đường dẫn đến logo

function App() {
  // Khai báo trạng thái cho vị trí hiện tại của người dùng
  const [currentLocation, setCurrentLocation] = useState(null);
  
  // Khai báo trạng thái cho thời gian hiện tại
  const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

  // Hook để điều hướng trang
  const navigate = useNavigate();
  //-------------------------------- cập nhật thời gian------------------
  useEffect(() => {
    // Cập nhật thời gian hiện tại mỗi giây
        // Biến timeInterval được khai báo bằng const để giữ giá trị trả về của setInterval.
        // Giá trị trả về là một ID duy nhất cho interval, mà bạn có thể sử dụng để hủy interval sau này bằng clearInterval.
      // interval là khoảng thời gian (tính bằng mili giây) giữa các lần thực thi hàm callback.
      // moment() trả về đối tượng thời gian hiện tại.
      // format('MMMM Do YYYY, h:mm:ss a') định dạng thời gian theo mẫu:
    const timeInterval = setInterval(() => {
      setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);

    //--------- Lấy vị trí địa lý của người dùng--------------------------------
          // navigator.geolocation.getCurrentPosition(...)
          // navigator.geolocation là một API của trình duyệt web cho phép bạn truy cập thông tin vị trí địa lý của người dùng.
          // getCurrentPosition là phương thức của navigator.geolocation được sử dụng để lấy vị trí địa lý hiện tại của người dùng.
          // Tham số đầu tiên: position => { ... }:
          //position.coords: Chứa thông tin về vị trí của người dùng, bao gồm latitude (vĩ độ) và longitude (kinh độ).
          // const { latitude, longitude } = position.coords;: Sử dụng destructuring assignment để lấy vĩ độ và kinh độ từ position.coords.
          // setCurrentLocation({ latitude, longitude });: Gọi hàm setCurrentLocation để cập nhật trạng thái currentLocation với giá trị vĩ độ và kinh độ lấy được
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      //Tham số thứ hai: error => { ... }:

        // Đây là hàm callback được gọi khi có lỗi xảy ra khi cố gắng lấy vị trí địa lý.
        // Hàm này nhận một đối tượng error chứa thông tin về lỗi.
        //console.error('Error getting geolocation:', error);: Ghi log lỗi vào bảng điều khiển, giúp bạn kiểm tra và gỡ lỗi nếu không thể lấy vị trí địa lý.
      error => {
        console.error('Error getting geolocation:', error);
      }
    );

    // Dọn dẹp interval khi component bị hủy
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  // Xử lý sự kiện khi người dùng nhấp vào liên kết điều hướng
  const handleNavLinkClick = (path) => {
    // Điều hướng đến đường dẫn mới
    navigate(path);

    // Lấy các phần tử navbar
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    // Đóng navbar nếu đang mở
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
    
    // Cuộn lên đầu trang một cách mượt mà
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header mb-5">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            {/* Logo và liên kết trang chủ */}
            <Link to="/" className="navbar-brand" onClick={() => handleNavLinkClick('/')}>
              <img src={ho36} className="App-logo" alt="logo" />
            </Link>
            {/* Nút mở/đóng menu navbar trên thiết bị di động */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Các liên kết điều hướng và menu */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                {/* Liên kết về trang chủ */}
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={() => handleNavLinkClick('/')}>
                    <FontAwesomeIcon icon={faHome} size="1x" />
                  </Link>
                </li>
                {/* Menu dropdown cho phần 'Mountaineering' */}
                <li className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdownAbout" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mountaineering</Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                    <li><Link to="/about/history" className="dropdown-item" onClick={() => handleNavLinkClick('/about/history')}>History</Link></li>
                    <li><Link to="/about/types" className="dropdown-item" onClick={() => handleNavLinkClick('/about/types')}>Types</Link></li>
                    <li><Link to="/about/techniques" className="dropdown-item" onClick={() => handleNavLinkClick('/about/techniques')}>Techniques</Link></li>
                    <li><Link to="/about/sheltering" className="dropdown-item" onClick={() => handleNavLinkClick('/about/sheltering')}>Sheltering</Link></li>
                    <li><Link to="/about/hazards" className="dropdown-item" onClick={() => handleNavLinkClick('/about/hazards')}>Hazards</Link></li>
                  </ul>
                </li>
                {/* Liên kết đến trang 'Records' */}
                <li className="nav-item">
                  <Link to="/records" className="nav-link" onClick={() => handleNavLinkClick('/records')}>Records</Link>
                </li>
                {/* Menu dropdown cho phần 'Organizations' */}
                <li className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdownOrganizations" role="button" data-bs-toggle="dropdown" aria-expanded="false">Organizations</Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownOrganizations">
                    <li><Link to="/organizations/list" className="dropdown-item" onClick={() => handleNavLinkClick('/organizations/list')}>List of Organizations</Link></li>
                    <li><Link to="/organizations/success" className="dropdown-item" onClick={() => handleNavLinkClick('/organizations/success')}>Success Stories</Link></li>
                  </ul>
                </li>
                {/* Menu dropdown cho phần 'Library' */}
                <li className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdownLibrary" role="button" data-bs-toggle="dropdown" aria-expanded="false">Library</Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownLibrary">
                    <li><Link to="/gallery/videos" className="dropdown-item" onClick={() => handleNavLinkClick('/gallery/videos')}>Videos</Link></li>
                    <li><Link to="/gallery/pictures" className="dropdown-item" onClick={() => handleNavLinkClick('/gallery/pictures')}>Pictures</Link></li>
                  </ul>
                </li>
                {/* Liên kết đến các trang khác */}
                <li className="nav-item">
                  <Link to="/developments" className="nav-link" onClick={() => handleNavLinkClick('/developments')}>Develop</Link>
                </li>
                <li className="nav-item">
                  <Link to="/guidelines" className="nav-link" onClick={() => handleNavLinkClick('/guidelines')}>Guide</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" onClick={() => handleNavLinkClick('/contact')}>Contact</Link>
                </li>
              </ul>
            </div>
            {/* Hiển thị Counter */}
            <div>
              <Counter />
            </div>
          </div>
        </nav>
      </header>

      {/* Nội dung chính */}
      <section className="container mt-5">
        {/* Các tuyến đường và trang con */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="homelink" element={<HomeLink />} />
          <Route path="/about/types" element={<Types />} />
          <Route path="sportclimbing" element={<SportClimbing />} />
          <Route path="bouldering" element={<Bouldering />} />
          <Route path="iceclimbing" element={<IceClimbing />} />
          <Route path="alpineclimbing" element={<AlpineClimbing />} />
          <Route path="viaferrata" element={<ViaFerrata />} />
          <Route path="freesoloclimbing" element={<FreeSoloClimbing />} />
          <Route path="mixedclimbing" element={<MixedClimbing />} />
          <Route path="traditionalclimbing" element={<TraditionalClimbing />} />
          <Route path='/about/history' element={<History />} />
          <Route path='/about/techniques' element={<Techniques />} />
          <Route path='/about/sheltering' element={<Shelter />} />
          <Route path='/about/hazards' element={<Hazards />} />
          <Route path="/records" element={<Records />} />
          <Route path="/organizations/list" element={<Organizations />} />
          <Route path="/organizations/success" element={<SuccessStories />} />
          <Route path="/gallery/videos" element={<Videos />} />
          <Route path="/gallery/pictures" element={<Pictures />} />
          <Route path="/developments" element={<Developments />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
        {/* Hiển thị các component phụ */}
        <Outlet />
        {/* Hiển thị nút feedback và nút lên đầu trang */}
        <div className="text-center">
          <FeedbackButton />
        </div>
        <div className="text-center">
          <TopButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-4 py-3 bg-dark">
        <div className="container mt-0 feelback-td">
          <h2 className="text-center mb-4"><strong>Welcome to SKC-Climbing</strong></h2>
          <p className="text-center"><strong>Explore SKC-Climbing and provide your valuable feedback!</strong></p>
        </div>
        <div className='container'>
          <div className='footer-main row'>
            <div className='footer-section col-md-4 mb-3'>
              <h2 className='footer-11 mt-2'>Client Support</h2>
              <hr className='footer-hr mt-3' />
              <ul className='list-unstyled'>
                <li className='footer-12'>Hotline: 0989893831</li>
              </ul>
            </div>
            <div className='footer-section col-md-4 mb-3'>
              <h2 className='footer-11 mt-2'>Follow Us</h2>
              <hr className='footer-hr mt-2' />
              <ul className='list-unstyled d-flex flex-row follow-1'>
                {/* Liên kết đến các mạng xã hội */}
                <li className='footer-12 me-3'>
                  <a href="https://www.facebook.com/" className="nav-link " target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                  </a>
                </li>
                <li className='footer-12 me-3'>
                  <a href="https://www.youtube.com/" className="nav-link " target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="1x" />
                  </a>
                </li>
                <li className='footer-12 me-3'>
                  <a href="https://www.tiktok.com/" className="nav-link " target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} size="1x" />
                  </a>
                </li>
                <li className='footer-12'>
                  <a href="https://www.instagram.com/" className="nav-link " target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                  </a>
                </li>
              </ul>
            </div>
            <div className='footer-section col-md-4 mb-3'>
              <h2 className='footer-11 mt-2'>Local-Time</h2>
              <hr className='footer-hr mt-2' />
              <div className="time-marquee">
                <div>
                  {currentLocation && (
                    <span className='footer-111'>
                      LAT: {currentLocation.latitude.toFixed(3)}, LON: {currentLocation.longitude.toFixed(4)} |
                    </span>
                  )}
                  <span className='footer-111'>{currentTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h6 className='footer-h6'>© 2024 SKC-Climbing - All rights reserved.</h6>
      </footer>
    </div>
  );
}

export default App;
