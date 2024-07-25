import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import CSS file for custom styles
import ty1 from "../assets/images/types1.png";
import ty2 from "../assets/images/types2.png";
import ty3 from "../assets/images/types3.png";
import ty4 from "../assets/images/types4.png";
import ty5 from "../assets/images/types5.png";
import ty6 from "../assets/images/types6.png";
import ty7 from "../assets/images/types7.png";
import ty8 from "../assets/images/types8.png";

function Types() {
    // let url= window.location.origin;
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
    return (
        <div className='container'>

            <div className='types-t'>

                <i><strong>Climbing is an adventurous and exciting sport that attracts many nature enthusiasts.
                    There are various types of climbing, each offering its own unique experiences and challenges.
                    Below are some of the most popular forms of climbing today:</strong></i>
            </div>

            {/* ------------------------------------------------------------------------------ */}

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className='types-1'>
                            <Link to="/TraditionalClimbing" className="link-item no-underline"onClick={() => handleNavLinkClick('/TraditionalClimbing')}>
                                <img src={ty1} className="img-fluid images-types" alt="Traditional Climbing" />
                                <h4 className='no'>Traditional Climbing</h4>
                            </Link>
                            <p className='types-p'>
                                Traditional climbing, also known as "trad climbing," is one of the popular climbing styles within the climbing community ...
                                <Link to="/TraditionalClimbing" className="btn custom-btn btn-info" onClick={() => handleNavLinkClick('/TraditionalClimbing')}><span className="more-text">More</span></Link>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='types-1'>
                            <Link to="/SportClimbing" className="link-item no-underline" onClick={() => handleNavLinkClick('/SportClimbing')}>
                                <img src={ty2} className="img-fluid images-types" alt="Sport Climbing" />
                                <h4 className='no'>Sport Climbing</h4>
                            </Link>
                            <p className='types-p'>
                                Sport climbing is a popular climbing discipline, renowned for its athletic nature and the demands it places on physical strength and technique...
                                <Link to="/SportClimbing" className="btn custom-btn btn-info" onClick={() => handleNavLinkClick('/SportClimbing')}><span className="more-text">More</span></Link>
                            </p>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className='types-1'>
                            <Link to="/Bouldering" className="link-item no-underline" onClick={() => handleNavLinkClick('/Bouldering')}>
                                <img src={ty3} className="img-fluid images-types" alt="Bouldering" />
                                <h4 className='no'>Bouldering</h4>
                            </Link>
                            <p className='types-p'>
                                Bouldering is a popular climbing discipline performed at low heights without the use of ropes or protective gear...
                                <Link to="/Bouldering" className="btn custom-btn btn-info" onClick={() => handleNavLinkClick('/Bouldering')}><span className="more-text">More</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* ------------------------------------------------------------------------------------ */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className='types-1'>
                            <Link to="/IceClimbing" className="link-item no-underline" onClick={() => handleNavLinkClick('/IceClimbing')}>
                                <img src={ty4} className="img-fluid images-types" alt="Ice Climbing" />
                                <h4 className='no'>Ice Climbing</h4>
                            </Link>
                            <p className='types-p'>
                                Ice climbing, also known as ice climbing, is a specialized form of climbing where climbers must navigate icy surfaces, such as frozen waterfalls...
                                <Link to="/IceClimbing" className="btn custom-btn btn-info " onClick={() => handleNavLinkClick('/IceClimbing')}><span className="more-text">More</span></Link>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='types-1'>
                            <Link to="/AlpineClimbing" className="link-item no-underline" onClick={() => handleNavLinkClick('/AlpineClimbing')}>
                                <img src={ty5} className="img-fluid images-types" alt="Alpine Climbing" />
                                <h4 className='no'>Alpine Climbing</h4>
                            </Link>
                            <p className='types-p'>
                                Alpine climbing, also known as high-altitude climbing, is a form of climbing that combines elements of rock climbing, ice climbing, and trekking on snow.
                                <Link to="/AlpineClimbing" className="btn custom-btn btn-info" onClick={() => handleNavLinkClick('/AlpineClimbing')}><span className="more-text">More</span></Link>
                            </p>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className='types-1'>
                            <Link to="/ViaFerrata" className="link-item no-underline" onClick={() => handleNavLinkClick('/ViaFerrata')}>
                                <img src={ty6} className="img-fluid images-types" alt="Via Ferrata" />
                                <h4 className='no'>Via Ferrata</h4>
                            </Link>
                            <p className='types-p'>
                                Via Ferrata, an Italian term meaning "iron road," is a unique form of climbing where climbers use a system of steel cables...
                                <Link to="/ViaFerrata" className="btn custom-btn btn-info" onClick={() => handleNavLinkClick('/ViaFerrata')}><span className="more-text">More</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* ----------------------------------------------------------------------------------------- */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className='types-1'>
                            <Link to="/FreeSoloClimbing" className="link-item no-underline" onClick={() => handleNavLinkClick('/FreeSoloClimbing')}>
                                <img src={ty7} className="img-fluid images-types" alt="Free Solo Climbing" />
                                <h4 className='no'>Free Solo Climbing</h4>
                            </Link>
                            <p className='types-p'>
                                Free solo climbing, also known as free soloing, is the most dangerous and adventurous form of climbing, where climbers...
                                <Link to="/FreeSoloClimbing" className="btn custom-btn btn-info"  onClick={() => handleNavLinkClick('/FreeSoloClimbing')}><span className="more-text">More</span></Link>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='types-1'>
                            <Link to="/MixedClimbing" className="link-item no-underline"  onClick={() => handleNavLinkClick('/MixedClimbing')}>
                                <img src={ty8} className="img-fluid images-types" alt="Mixed Climbing" />
                                <h4 className='no'>Mixed Climbing</h4>
                            </Link>
                            <p className='types-p'>
                                Mixed climbing is a form of climbing that combines rock climbing and ice climbing, typically occurring on mixed terrain where climbers...
                                <Link to="/MixedClimbing" className="btn custom-btn btn-info" onClick={() => handleNavLinkClick('/MixedClimbing')}><span className="more-text">More</span></Link>
                            </p>
                        </div>
                    </div>


                    <div className="col-md-4">

                    </div>
                </div>
            </div>



            {/* -------------------------------------------------------------------------------------------------- */}




        </div>
    );
}

export default Types;
