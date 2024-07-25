import React from 'react';
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import sp1 from "../assets/images/types2.png";

function SportClimbing() {
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
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3><strong>Sport Climbing</strong></h3>
                    <hr />
                    <div className='types-climb1'><img src={sp1} className="img-fluid mb-4 types-climb" alt="Sport Climbing" /></div>

                    <p>
                        Sport climbing is a popular and beloved form of mountaineering worldwide. Its distinctive feature is that climbers use pre-fixed
                        anchor points on the rock wall, allowing them to focus on climbing without the need to worry about placing protection anchors.
                    </p>
                    <h4><strong>This is sport climbing:</strong></h4>

                    <ul>
                        <li><strong>Fixed Anchor Points:</strong>
                            <ul>
                                <li>Natural rock walls or cliffs are equipped with pre-installed metal bolts, spaced at regular intervals.</li>
                                <li>These anchor points allow climbers to use ropes and quickdraws to protect themselves while climbing.</li>
                            </ul>
                        </li>
                        <li><strong>Enhanced Safety for Climbers:</strong>
                            <ul>
                                <li>With fixed anchor points in place, climbers can focus on technique and physical exertion without the concern of placing protection.</li>
                                <li>Regular maintenance and inspections ensure the safety and reliability of these anchor points.</li>
                            </ul>
                        </li>
                        <li><strong>Focus on Technique and Physical Fitness:</strong>
                            <ul>
                                <li>Sport climbing demands excellent technique, endurance, and strength to navigate challenging climbing sections.</li>
                                <li>Climbing routes often feature intricate technical moves that require flexibility and skill.</li>
                            </ul>
                        </li>
                        <li><strong>Suitable for Beginners and Professionals Alike:</strong>
                            <ul>
                                <li>There are varying difficulty levels, from easy to extremely challenging, catering to climbers of all skill levels.</li>
                                <li>Beginners can start on easier routes, while advanced climbers can push themselves on more difficult climbs.</li>
                            </ul>
                        </li>
                        <li><strong>Competitive and Recognized Sport:</strong>
                            <ul>
                                <li>Sport climbing is organized into competitions at local, national, and international levels.</li>
                                <li>It has been an official sport in the Olympic Games since 2020.</li>
                            </ul>
                        </li>
                        <li><strong>Indoor and Outdoor Climbing:</strong>
                            <ul>
                                <li>Can be practiced on artificial climbing walls indoors or natural rock faces outdoors.</li>
                                <li>Indoor climbing gyms provide a controlled and safe environment for year-round training.</li>
                            </ul>
                        </li>
                    </ul>

                    <h4><strong>Necessary equipment:</strong></h4>
                    <ul>
                        <li><strong>Climbing Rope:</strong> Uses a dynamic climbing rope to ensure safety during climbs.</li>
                        <li><strong>Quickdraws:</strong> Used to connect the climbing rope to fixed bolts on the rock wall.</li>
                        <li><strong>Harness:</strong> Worn around the body to connect to the climbing rope and other protection devices.</li>
                        <li><strong>Climbing Shoes:</strong> Specialized shoes that enhance grip and flexibility while climbing.</li>
                        <li><strong>Helmet:</strong> Protects the head from impacts or falling debris.</li>
                    </ul>
                    <h4><strong>Benefits and challenges:</strong></h4>
                    <ul>
                        <li><strong>Benefits:</strong>
                            <ul>
                                <li>Provides a safe and exhilarating mountain climbing experience, helping climbers develop skills and strength.</li>
                                <li>Creates opportunities to challenge oneself and conquer routes of varying difficulty.</li>
                                <li>Fosters camaraderie and community spirit through social activities and competitions.</li>
                            </ul>
                        </li>
                        <li><strong>Challenges:</strong>
                            <ul>
                                <li>Requires good technical skills and physical fitness to complete difficult routes.</li>
                                <li>Includes risks if safety rules are not followed and equipment is not used correctly.</li>
                                <li>Demands patience and resilience in challenging situations.</li>
                            </ul>
                        </li>
                    </ul>

                    <p>
                    Sport climbing is an exciting sport that enhances fitness, technical skills, and flexibility. It also provides opportunities 
                    to explore nature and engage in a vibrant climbing community.
                    </p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <div className="col d-flex justify-content-center">
                        <Link to="/about/types" className="btn btn-info" onClick={() => handleNavLinkClick('/about/types')}>Back</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SportClimbing;
