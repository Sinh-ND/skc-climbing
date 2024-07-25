// import './AlpineClimbing.css'
import React from 'react';
import { Link } from 'react-router-dom';
import al1 from "../assets/images/types5.png";
import {  useNavigate } from 'react-router-dom';

function AlpineClimbing() {
    // let url = window.location.origin;
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
            <h3 className="mt-5"><strong>Alpine Climbing</strong></h3>
            <hr />
            <div className='types-climb1'><img src={al1} className="img-fluid mb-4 types-climb" alt="Alpine Climbing" /></div>

            <p>Alpine climbing, or high-altitude mountaineering, combines elements of rock climbing, ice climbing, and snow trekking. It
                requires diverse skills and adaptation to harsh natural conditions at high altitudes.</p>

            <h4 className="fw-bold">Features of alpine climbing:</h4>
            <ul>
                <li><h5 className="fw-bold">Diverse terrain:</h5>
                    <ul>
                        <li>Alpine climbing typically involves traversing various terrains such as rock, ice, snow, and occasionally mountain
                            ranges.</li>
                        <li>Climbers may face constantly changing conditions, from slippery rock to thick snow and ice.</li>
                    </ul>

                </li>
                <li><h5 className="fw-bold">Combine many climbing techniques:</h5>
                    <ul>
                        <li>Rock Climbing: Natural rock climbing techniques.</li>
                        <li>Ice Climbing: Techniques for climbing on ice and snow.</li>
                        <li>Snow Climbing: Techniques for walking and climbing on snow.</li>
                    </ul>

                </li>
                <li><h5 className="fw-bold">Extreme weather conditions:</h5>
                    <ul>
                        <li>Alpine climbing often takes place at high altitudes, where weather conditions can change rapidly and be harsh.</li>
                        <li>Mountaineers need to prepare to cope with strong winds, cold temperatures, and the risk of avalanches.</li>
                    </ul>

                </li>
                <li><h5 className="fw-bold">Requirements for diverse skills and experience:</h5>
                    <ul>
                        <li>Mountaineers need skills in various types of mountaineering and must know how to handle emergency situations.</li>
                        <li>Skills in navigation, risk management, and basic first aid are crucial.</li>
                    </ul>

                </li>
                <li><h5 className="fw-bold">Requires endurance and physical strength:</h5>
                    <ul>
                        <li>Alpine climbing requires high endurance and good physical fitness to climb mountains for long periods under challenging conditions.</li>
                    </ul>

                </li>
                <li><h5 className="fw-bold">Trang thiết bị đa dạng:</h5>
                    <ul>
                        <li>Mountaineers need to use various types of equipment, from climbing ropes, harnesses, to ice tools and crampons.</li>
                        <li>Equipment must ensure safety and be suitable for different types of terrain.</li>
                    </ul>

                </li>
            </ul>
            <h4 className="fw-bold">Necessary equipment:</h4>
            <ul>
                <li><h5 className="fw-bold">Rock and ice climbing gear:</h5>
                    <ul>
                        <li>Ice Axes or Ice Tools: Used for climbing on ice.</li>
                        <li>Crampons: Attached to boots to increase grip on ice and snow.</li>
                    </ul>

                </li>
                <li><h5 className="fw-bold">Waterproof and warm clothing:</h5>
                    <ul>
                        <li>Base layer: Thermal underwear to keep warm and breathable.</li>
                        <li>Mid layer: Fleece or down jacket.</li>
                        <li>Gloves and warm hat, scarf.</li>
                        <li>Outer layer: Waterproof and windproof jacket and pants.</li>
                    </ul>

                </li>
                <li><h5 className="fw-bold">Protective equipment and backpacks</h5>
                    <ul>
                        <li>Mũ bảo hiểm leo núi: Protects the head from impacts and falling rocks.</li>
                        <li>Ba lô leo núi: Backpack with a capacity of 30-50 liters for carrying equipment and food.</li>
                        <li>Kính mát hoặc kính bảo hộ: Protects eyes from UV rays and snow glare.</li>
                        <li>Đèn pin hoặc đèn đầu: Strong and durable flashlight/headlamp with spare batteries.</li>
                    </ul>

                </li>
            </ul>
            <h4 className="fw-bold">Experience and knowledge:</h4>
            <ul>
                <li>Kỹ năng leo núi và bảo vệ đồng đội: Understanding how to place and use protective equipment, rock and ice climbing skills.</li>
                <li>Kỹ năng sinh tồn và sơ cứu: Emergency situation handling and basic first aid skills.</li>
                <li>Kỹ năng định vị và đọc bản đồ: Ability to navigate and read maps in high-altitude mountain environments.</li>
            </ul>

            <p>Alpine climbing is a challenging activity that requires thorough preparation and appropriate equipment to ensure safety and
                success.</p>

            <div className="col d-flex justify-content-center">
                <Link to="/about/types" className="btn btn-info" onClick={() => handleNavLinkClick('/about/types')}>Back</Link>

            </div>
        </div>
    );
}

export default AlpineClimbing;
