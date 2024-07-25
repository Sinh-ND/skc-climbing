// import './FreeSoloClimbing.css'
import React from 'react';
import { Link } from 'react-router-dom';
import fr1 from "../assets/images/types7.png";
import {  useNavigate } from 'react-router-dom';

function FreeSoloClimbing() {
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
            <h3 className="mt-5 fs-3 fw-bold"><strong>Free Solo Climbing</strong></h3>
            <hr />
            <div className='types-climb1'><img src={fr1} className="img-fluid mb-4 types-climb" alt="Free Solo Climbing" /></div>

            <p>Free solo climbing, or ropeless climbing, is the most dangerous and daring form of mountaineering where climbers do not use
                any protective gear such as ropes or anchors. Safety entirely relies on the climber's skill, strength, and concentration.</p>
            <h4 className="fw-bold"><strong>Features of Free Solo Climbing:</strong></h4>
            <ul>
                <li className="fs-5 fw-bold">Without protective equipment:</li>
                <ul>
                    <li>The climber does not use ropes, carabiners, harnesses, or any protective equipment.</li>
                    <li>This means that even a minor mistake can lead to serious consequences or even death.</li>
                </ul>
                <li className="fs-5 fw-bold">Depends entirely on personal skills:</li>
                <ul>
                    <li>The climber must possess excellent climbing skills, strength, flexibility, and good balance.</li>
                    <li>High levels of concentration and mental resilience are required to maintain composure throughout the climb.</li>
                </ul>
                <li className="fs-5 fw-bold">Physical and mental requirements:</li>
                <ul>
                    <li>Free solo climbing requires exceptional physical strength, endurance, and mental resilience.</li>
                    <li>The climber must have absolute confidence in their abilities and a clear understanding of their own limits.</li>
                </ul>
                <li className="fs-5 fw-bold">Choose your climbing route carefully:</li>
                <ul>
                    <li>Routes are carefully chosen based on the climber's experience and abilities.</li>
                    <li>Prior to attempting a climb, climbers often conduct thorough research and perform roped climbs to understand every detail of the route.</li>
                </ul>
                <li className="fs-5 fw-bold">High risk:</li>
                <ul>
                    <li>Free solo climbing is the most dangerous form of rock climbing, suitable only for highly experienced and skilled climbers.</li>
                    <li>Any small mistake can lead to serious consequences.</li>
                </ul>
            </ul>
            <h4 className="fw-bold"><strong>Important factors:</strong></h4>
            <ul>
                <li className="fs-5 fw-bold">Skills and experience:</li>
                <ul>
                    <li>The climber must have many years of mountaineering experience and a solid grasp of mountaineering techniques.</li>
                    <li>Understand the route, obstacles, and how to deal with them.</li>
                </ul>
                <li className="fs-5 fw-bold">Physical and Mental Strength:</li>
                <ul>
                    <li>Physical strength, especially in the hands, feet, and core, is crucial.</li>
                    <li>The ability to maintain focus and stay calm in tense situations.</li>
                </ul>
                <li className="fs-5 fw-bold">Thorough Preparation:</li>
                <ul>
                    <li>Climbers often practice multiple times on ropes to familiarize themselves with the route and prepare thoroughly for the free solo attempt.</li>
                    <li>Check weather conditions and ensure there are no hindering factors.</li>
                </ul>
                <li className="fs-5 fw-bold">Strong Mental State:</li>
                <ul>
                    <li>A strong and resilient mindset, not easily swayed by stress or fear.</li>
                </ul>

            </ul>
            <h4 className="fw-bold"><strong>The risks and rewards:</strong></h4>
            <ul>
                <li className="fs-5 fw-bold">Rủi ro:</li>
                <ul>
                    <li>Risk of death from falling from great heights without protection.</li>
                    <li>Serious injuries due to accidents or minor mistakes.</li>
                </ul>
                <li className="fs-5 fw-bold">Rewards:</li>
                <ul>
                    <li>Absolute satisfaction in overcoming a major challenge with skill and personal strength.</li>
                    <li>Freedom and deep connection with nature.</li>
                </ul>

            </ul>
            <p>Free solo climbing is a highly risky mountaineering activity that demands exceptional skill and mental strength. It is a sport
                reserved for the most skilled mountaineers who are willing to face significant risks to experience the thrill of conquering
                peaks without any safety equipment.</p>

            <div className="col d-flex justify-content-center">
                <Link to="/about/types" className="btn btn-info" onClick={() => handleNavLinkClick('/about/types')}>Back</Link>

            </div>
        </div>
    );
}

export default FreeSoloClimbing;
