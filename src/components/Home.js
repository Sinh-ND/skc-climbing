
import { useState } from 'react';
import React from 'react';
import './Home.css';
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import ho1 from "../assets/images/types4.png";
import ho2 from "../assets/images/he1.jpg";
import ho3 from "../assets/images/he6.jpg";
import ho4 from "../assets/images/he4.jpg";
import ho5 from "../assets/images/he5.jpg";
import ho6 from "../assets/images/he7.jpg";
import ho7 from "../assets/images/he8.webp";
import ho8 from "../assets/images/he9.jpg";
import ho9 from "../assets/images/he10.webp";
import ho10 from "../assets/images/he11.jpg";
import ho11 from "../assets/images/he12.jpg";
import ho12 from "../assets/images/he13.webp";
import ho13 from "../assets/images/he14.jpg";
import ho14 from "../assets/images/he15.jpg";
import ho15 from "../assets/images/he16.jpg";
import ho16 from "../assets/images/he17.jpg";
import ho17 from "../assets/images/he18.jpg";
import ho18 from "../assets/images/he19.jpg";
import ho19 from "../assets/images/he20.jpg";
import ho20 from "../assets/images/types5.png";

import ho21 from "../assets/images/sucess3.png";
import ho22 from "../assets/images/Kirkjufell1.jpg";
import ho23 from "../assets/images/types5.png";
import ho24 from "../assets/videos/leo-nui-bang.mp4";
import ho25 from "../assets/images/shelter5.jpg";
import ho26 from "../assets/images/hazards5.jpg";
import ho27 from "../assets/images/record3.jpg";
import ho28 from "../assets/images/types1.png";
import ho29 from "../assets/images/he6.jpg";
import ho30 from "../assets/images/he20.jpg";

import ho31 from "../assets/images/fpt1.png";
import ho32 from "../assets/images/fpt2.png";

// import ho33 from "../assets/images/khoa.jpg";
// import ho34 from "../assets/images/sinh.jpg";
// import ho35 from "../assets/images/cuong.png";




function Home() {
  // let url= window.location.origin;
  // lưu trạng thái like của người dùng
  //-----------------kích chuyển về đầu trang-----------
  // Hook để điều hướng trang
  const navigate = useNavigate();
  // Xử lý sự kiện khi người dùng nhấp vào liên kết điều hướng
  const handleNavLinkClick = (path) => {
    // Điều hướng đến đường dẫn mới
    navigate(path);
    // Cuộn lên đầu trang một cách mượt mà
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  // ------------------------------------------------------------
  const [likes, setLikes] = useState({
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    h7: 0,
    h8: 0,
    h9: 0,
    h10: 0,
    h11: 0,
  });
  //lưu trangj thái dislike của người dùng
  const [dislikes, setDislikes] = useState({
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    h7: 0,
    h8: 0,
    h9: 0,
    h10: 0,
    h11: 0,
  });
  //luu trạng thái không hành đông của người dùng
  const [userAction, setUserAction] = useState({
    h1: null,
    h2: null,
    h3: null,
    h4: null,
    h5: null,
    h6: null,
    h7: null,
    h8: null,
    h9: null,
    h10: null,
    h11: null,
  });
  

  // Xử lý khi người dùng bấm nút like
  const handleLike = (content) => {
    if (userAction[content] === null || userAction[content] === 'dislike') {
      // Tăng số lượng likes lên 1 cho content được chọn
      setLikes((prevLikes) => ({
        ...prevLikes,
        [content]: prevLikes[content] + 1,
      }));
      // Cập nhật hành động của người dùng thành 'like' cho content được chọn
      setUserAction((prevAction) => ({
        ...prevAction,
        [content]: 'like',
      }));
      // Nếu trước đó người dùng đã dislike, giảm số lượng dislikes đi 1
      if (userAction[content] === 'dislike') {
        setDislikes((prevDislikes) => ({
          ...prevDislikes,
          [content]: prevDislikes[content] - 1,
        }));
      }
    }
  };

  // Xử lý khi người dùng bấm nút dislike
  const handleDislike = (content) => {
    if (userAction[content] === null || userAction[content] === 'like') {
      // Tăng số lượng dislikes lên 1 cho content được chọn
      setDislikes((prevDislikes) => ({
        ...prevDislikes,
        [content]: prevDislikes[content] + 1,
      }));
      // Cập nhật hành động của người dùng thành 'dislike' cho content được chọn
      setUserAction((prevAction) => ({
        ...prevAction,
        [content]: 'dislike',
      }));
      // Nếu trước đó người dùng đã like, giảm số lượng likes đi 1
      if (userAction[content] === 'like') {
        setLikes((prevLikes) => ({
          ...prevLikes,
          [content]: prevLikes[content] - 1,
        }));
      }
    }
  };


  return (
    <div className='home '>
      <div id="demo" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="8" aria-label="Slide 9"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="9" aria-label="Slide 10"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="10" aria-label="Slide 11"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="11" aria-label="Slide 12"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="12" aria-label="Slide 13"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="13" aria-label="Slide 14"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="14" aria-label="Slide 15"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="15" aria-label="Slide 16"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="16" aria-label="Slide 17"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="17" aria-label="Slide 18"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="18" aria-label="Slide 19"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="19" aria-label="Slide 20"></button>
        </div>


        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={ho1} class="d-block w-100" alt="he1" />
          </div>
          <div class="carousel-item">
            <img src={ho2} class="d-block w-100" alt="he2" />
          </div>
          <div class="carousel-item">
            <img src={ho3} class="d-block w-100" alt="he3" />
          </div>
          <div class="carousel-item">
            <img src={ho4} class="d-block w-100" alt="he4" />
          </div>
          <div class="carousel-item">
            <img src={ho5} class="d-block w-100" alt="he5" />
          </div>
          <div class="carousel-item">
            <img src={ho6} class="d-block w-100" alt="he6" />
          </div>
          <div class="carousel-item">
            <img src={ho7} class="d-block w-100" alt="he7" />
          </div>
          <div class="carousel-item">
            <img src={ho8} class="d-block w-100" alt="he8" />
          </div>
          <div class="carousel-item">
            <img src={ho9} class="d-block w-100" alt="he9" />
          </div>
          <div class="carousel-item">
            <img src={ho10} class="d-block w-100" alt="he10" />
          </div>
          <div class="carousel-item">
            <img src={ho11} class="d-block w-100" alt="he11" />
          </div>
          <div class="carousel-item">
            <img src={ho12} class="d-block w-100" alt="he12" />
          </div>
          <div class="carousel-item">
            <img src={ho13} class="d-block w-100" alt="he13" />
          </div>
          <div class="carousel-item">
            <img src={ho14} class="d-block w-100" alt="he14" />
          </div>
          <div class="carousel-item">
            <img src={ho15} class="d-block w-100" alt="he15" />
          </div>
          <div class="carousel-item">
            <img src={ho16} class="d-block w-100" alt="he16" />
          </div>
          <div class="carousel-item">
            <img src={ho17} class="d-block w-100" alt="he17" />
          </div>
          <div class="carousel-item">
            <img src={ho18} class="d-block w-100" alt="he18" />
          </div>
          <div class="carousel-item">
            <img src={ho19} class="d-block w-100" alt="he19" />
          </div>
          <div class="carousel-item">
            <img src={ho20} class="d-block w-100" alt="he20" />
          </div>
        </div>


        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      {/* --------------------------------------------phần 2----------------------------------------------------- */}
      <div className='mt-3'>

        <h2 className='home-h2'>Welcome to SKC Climbing!</h2>


        <div class="flex-container">
          <div class="flex-item home-vi">
            <div className='home-eh5'>
              <h5 className='home-h5'>Expertise & Mastery</h5>
            </div>

            <p className='texthome'>At SKC Climbing, we take pride in leading the way in mountaineering, setting high standards for quality
              within the mountaineering community. We provide detailed information on mountaineering techniques based on years of accumulated
              experience from experts and real-life expeditions across various mountains.</p>
          </div>
          <div class="flex-item home-vi">
            <div className='home-eh5'>
              <h5 className='home-h5'>Guidance</h5>

            </div>

            <p className='texthome'>The information and guidance at SKC Climbing are built on in-depth research and practical experience. We
              share essential principles and techniques necessary for you to prepare for and undertake mountaineering journeys safely and
              effectively.</p>
          </div>
          <div class="flex-item home-vi">
            <div className='home-eh5'>
              <h5 className='home-h5'>Environmental Responsibility</h5>
            </div>

            <p className='texthome'>At SKC Climbing, we are committed to adhering to environmental protection principles in all our activities.
              We encourage everyone participating in mountaineering to understand and adhere to conservation methods. We are ready to share and
              promote optimal methods to protect the natural environment.</p>
          </div>
        </div>


        <div class="text-box">
          <div className='home-v'>
            <h5 className='home-h5'>At SKC Climbing, we are committed to providing you with valuable and reliable information to help you enjoy
              and explore the world from its highest peaks. Join us in experiencing and discovering the wonders of mountaineering!</h5>
          </div>

        </div>
      </div>
      {/* ----------------------------phần 3------------------------------------------------------- */}





      <div className="container">
        <div className="row">


          <div className="col-md-3">
            <div className="add1">


              <div className="add11">
                <Link to="/organizations/success" className="link-item no-underline" onClick={() => handleNavLinkClick('/organizations/success')}>
                  <img src={ho21} className="img-fluid images-hom2" alt="sucesss" />
                  <h6 className="hom-e">
                  Success Stories from Organized Camps</h6>
                </Link>
                {/* -----------------------------like vs dislike--------------------------------------- */}
                <div>
                  <button onClick={() => handleLike('h1')} className="btn btn-sm btn-primary me-1" disabled={userAction.h1 === 'like'}>
                    <FontAwesomeIcon icon={faThumbsUp} />  {likes.h1}
                  </button>
                  <button onClick={() => handleDislike('h1')} className="btn btn-sm btn-danger" disabled={userAction.h1 === 'dislike'}>
                    <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h1}</button>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}

              </div>


              <div className="add11">
                <Link to="/gallery/pictures" className="link-item no-underline" onClick={() => handleNavLinkClick('/gallery/pictures')}>
                  <img src={ho22} className="img-fluid images-hom2" alt="shelter1" />
                  <h6 className="hom-e">Beautiful Mountain Scenery</h6>
                </Link>
                {/* -----------------------------like vs dislike--------------------------------------- */}
                <div>
                  <button onClick={() => handleLike('h2')} className="btn btn-sm btn-primary me-1" disabled={userAction.h2 === 'like'}>
                    <FontAwesomeIcon icon={faThumbsUp} />  {likes.h2}
                  </button>
                  <button onClick={() => handleDislike('h2')} className="btn btn-sm btn-danger" disabled={userAction.h2 === 'dislike'}>
                    <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h2}</button>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}
              </div>
              <div className="add11">
                <Link to="/about/types" className="link-item home-link1 no-underline" onClick={() => handleNavLinkClick('/about/types')}>
                  <img src={ho23} className="img-fluid images-hom2" alt="record3" />
                  <h6 className="hom-e"> Types of climbing </h6>
                </Link>
                {/* -----------------------------like vs dislike--------------------------------------- */}
                <div>
                  <button onClick={() => handleLike('h3')} className="btn btn-sm btn-primary me-1" disabled={userAction.h3 === 'like'}>
                    <FontAwesomeIcon icon={faThumbsUp} />  {likes.h3}
                  </button>
                  <button onClick={() => handleDislike('h3')} className="btn btn-sm btn-danger" disabled={userAction.h3 === 'dislike'}>
                    <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h3}</button>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------------- */}

          <div className="col-md-6">
            <div className="add1">
              <div className='add1-video'>
                <div className="video">
                  <div className="ratio ratio-16x9  homeadd-video">
                    <iframe
                      src="https://www.youtube.com/embed/bfha5mckNrM"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <strong>"Nhiu Co San 2965m - Creating Memories for Children / Glass Forest Area"</strong>
                </div>
                {/* -----------------------------like vs dislike--------------------------------------- */}
                <div>
                  <button onClick={() => handleLike('h4')} className="btn btn-sm btn-primary me-1" disabled={userAction.h4 === 'like'}>
                    <FontAwesomeIcon icon={faThumbsUp} />  {likes.h4}
                  </button>
                  <button onClick={() => handleDislike('h4')} className="btn btn-sm btn-danger" disabled={userAction.h4 === 'dislike'}>
                    <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h4}</button>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}
              </div>
              <div className='add1-video'>
                <div className="video">
                  <div className="ratio ratio-16x9 homeadd-video">
                    <iframe
                      src={ho24}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <strong>"Ice Climbing"</strong>
                </div>

                {/* -----------------------------like vs dislike--------------------------------------- */}
                <div>
                  <button onClick={() => handleLike('h5')} className="btn btn-sm btn-primary me-1" disabled={userAction.h5 === 'like'}>
                    <FontAwesomeIcon icon={faThumbsUp} />  {likes.h5}
                  </button>
                  <button onClick={() => handleDislike('h5')} className="btn btn-sm btn-danger" disabled={userAction.h5 === 'dislike'}>
                    <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h5}</button>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------------- */}
          <div className="col-md-3">
            <div className="add1">
              <div className="add11">
                <Link to="/about/sheltering" className="link-item no-underline" onClick={() => handleNavLinkClick('/about/sheltering')}>
                  <img src={ho25} className="img-fluid images-hom2" alt="techniques3" />
                  <h6 className="hom-e">Shelters Along Mountain Climbing Routes</h6>
                </Link>
                {/* -----------------------------like vs dislike--------------------------------------- */}
                <div>
                  <button onClick={() => handleLike('h6')} className="btn btn-sm btn-primary me-1" disabled={userAction.h6 === 'like'}>
                    <FontAwesomeIcon icon={faThumbsUp} />  {likes.h6}
                  </button>
                  <button onClick={() => handleDislike('h6')} className="btn btn-sm btn-danger" disabled={userAction.h6 === 'dislike'}>
                    <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h6}</button>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}
              </div>


              <div className="add11">
                <Link to="/about/hazards" className="link-item no-underline" onClick={() => handleNavLinkClick('/about/hazards')}>
                  <img src={ho26} className="img-fluid images-hom2" alt="shelter1" />
                  <h6 className="hom-e">Mountaineering Hazards</h6>
                </Link>
                {/* -----------------------------like vs dislike--------------------------------------- */}
                <div>
                  <button onClick={() => handleLike('h7')} className="btn btn-sm btn-primary me-1" disabled={userAction.h7 === 'like'}>
                    <FontAwesomeIcon icon={faThumbsUp} />  {likes.h7}
                  </button>
                  <button onClick={() => handleDislike('h7')} className="btn btn-sm btn-danger" disabled={userAction.h7 === 'dislike'}>
                    <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h7}</button>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}
              </div>
              <div className="add11">
                <Link to="/records" className="link-item home-link1 no-underline" onClick={() => handleNavLinkClick('/records')}>
                  <img src={ho27} className="img-fluid images-hom2" alt="record3" />
                  <h6 className="hom-e"> Great Peak Achievements.</h6>
                </Link>
                {/* -----------------------------like vs dislike--------------------------------------- */}
                <div>
                  <button onClick={() => handleLike('h8')} className="btn btn-sm btn-primary me-1" disabled={userAction.h8 === 'like'}>
                    <FontAwesomeIcon icon={faThumbsUp} />  {likes.h8}
                  </button>
                  <button onClick={() => handleDislike('h8')} className="btn btn-sm btn-danger" disabled={userAction.h8 === 'dislike'}>
                    <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h8}</button>
                </div>
                {/* ---------------------------------------------------------------------------------------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------------------- */}

      <div className="container">
        <div className="row">
          <div className="col-md-4">

            <div className="add11">
              <Link to="/HomeLink" className="link-item no-underline" onClick={() => handleNavLinkClick('/Homelink')}>
                <img src={ho28} className="img-fluid images-hom2" alt="techniques3" />
                <h6 className="hom-e"> <strong>10 mountain climbing tips for beginners.</strong></h6>
              </Link>
              {/* -----------------------------like vs dislike--------------------------------------- */}
              <div>
                <button onClick={() => handleLike('h9')} className="btn btn-sm btn-primary me-1" disabled={userAction.h9 === 'like'}>
                  <FontAwesomeIcon icon={faThumbsUp} />  {likes.h9}
                </button>
                <button onClick={() => handleDislike('h9')} className="btn btn-sm btn-danger" disabled={userAction.h9 === 'dislike'}>
                  <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h9}</button>
              </div>
              {/* ---------------------------------------------------------------------------------------- */}
            </div>

          </div>
          <div className="col-md-4">
            <div className="add11">
              <Link to="/Developments" className="link-item no-underline" onClick={() => handleNavLinkClick('/Developments')}>
                <img src={ho29} className="img-fluid images-hom2" alt="develop" />
                <h6 className="hom-e"><strong>New Equipment and Technology in Mountaineering</strong></h6>
              </Link>
              {/* -----------------------------like vs dislike--------------------------------------- */}
              <div>
                <button onClick={() => handleLike('h10')} className="btn btn-sm btn-primary me-1" disabled={userAction.h10 === 'like'}>
                  <FontAwesomeIcon icon={faThumbsUp} />  {likes.h10}
                </button>
                <button onClick={() => handleDislike('h10')} className="btn btn-sm btn-danger" disabled={userAction.h10 === 'dislike'}>
                  <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h10}</button>
              </div>
              {/* ---------------------------------------------------------------------------------------- */}
            </div>

          </div>
          <div className="col-md-4">

            <div className="add11">
              <Link to="/gallery/videos" className="link-item no-underline" onClick={() => handleNavLinkClick('/gallery/videos')}>
                <img src={ho30} className="img-fluid images-hom2" alt="he20" />
                <h6 className="hom-e">
                Interesting Videos About Mountaineering</h6>
              </Link>
              {/* -----------------------------like vs dislike--------------------------------------- */}
              <div>
                <button onClick={() => handleLike('h11')} className="btn btn-sm btn-primary me-1" disabled={userAction.h11 === 'like'}>
                  <FontAwesomeIcon icon={faThumbsUp} />  {likes.h11}
                </button>
                <button onClick={() => handleDislike('h11')} className="btn btn-sm btn-danger" disabled={userAction.h11 === 'dislike'}>
                  <FontAwesomeIcon icon={faThumbsDown} />  {dislikes.h11}</button>
              </div>
              {/* ---------------------------------------------------------------------------------------- */}
            </div>

          </div>

        </div>
      </div>

      {/* --------------------------phần 4--------------------------------------------- */}


      <div class="our-team">
        <div className='col-md-12 home-eh7 text-center mx-auto'>
          <h5 ><strong>OUR PARTNERS</strong></h5>
        </div>

        <div class="d-flex justify-content-center flex-wrap ">
          <img src={ho31} class="img-fluid partner-img" alt="fpt1" />
          <img src={ho32} class="img-fluid partner-img" alt="fpt2" />
          <img src={ho31} class="img-fluid partner-img" alt="fpt1" />
          <img src={ho32} class="img-fluid partner-img" alt="fpt2" />
          <img src={ho31} class="img-fluid partner-img" alt="fpt1" />
          <img src={ho32} class="img-fluid partner-img" alt="fpt2" />
        </div>
      </div>


      {/* -------------------------phần 5 ---------------------------------------------------- */}
      {/* <div className='our-team'>
        <div className='col-md-2 home-eh7 text-center mx-auto'>
          <h5><strong>OUR TEAM</strong></h5>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className='ourteam text-center'>
              <img src={ho33} alt="khoa" class="img-fluid" />
              <h6 className='home-h6'><strong>Name:</strong> Phan Ngo Anh Khoa</h6>
              <h6 className='home-h6'><strong>Student ID:</strong> Student1559720</h6>
              <h6 className='home-h6'><strong>Email:</strong> phanngoanhkhoa1995@gmail.com</h6>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className='ourteam text-center'>
              <img src={ho34} alt="sinh" class="img-fluid" />
              <h6 className='home-h6'><strong>Name:</strong> Nguyen Duc Sinh</h6>
              <h6 className='home-h6'><strong>Student ID:</strong> Student1559709</h6>
              <h6 className='home-h6'><strong>Email:</strong> sinhndhcmr@gmail.com</h6>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className='ourteam text-center'>
              <img src={ho35} alt="cuong" class="img-fluid" />
              <h6 className='home-h6'><strong>Name:</strong> Nguyen Minh Cuong</h6>
              <h6 className='home-h6'><strong>Student ID:</strong> Student1559700</h6>
              <h6 className='home-h6'><strong>Email:</strong> cn0965355986@gmail.com</h6>
            </div>
          </div>
        </div>
      </div> */}


    </div>
  );
}

export default Home;
