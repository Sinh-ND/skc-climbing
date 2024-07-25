// import './ViaFerrata.css'
import React from 'react';
import { Link } from 'react-router-dom';
import vi1 from "../assets/images/types6.png";
import {  useNavigate } from 'react-router-dom';

function ViaFerrata() {
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
            <h3 className="mt-5 fs-3 fw-bold"><strong>Via Ferrata</strong></h3>
            <hr />
            <div className='types-climb1'><img src={vi1} className="img-fluid mb-4 types-climb" alt="Via Ferrata" /></div>

            <p>Via Ferrata, Italian for "iron path," is a specialized form of mountaineering where climbers use a fixed steel cable, ladders,
                and other safety devices to traverse rock faces and challenging terrain. Via Ferrata offers a safer mountaineering experience
                compared to traditional climbing and combines elements of climbing and trekking..</p>
            <h4 className="fw-bold"><strong>Features of Via Ferrata</strong></h4>
            <ul>
                <li className="fs-5 fw-bold">Fixed steel cable system:</li>
                <ul>
                    <li>A fixed steel cable runs along the climbing route, ensuring climbers' safety.</li>
                    <li>Climbers use carabiners and harnesses to clip onto the steel cable, ensuring safety while moving.</li>
                </ul>
                <li className="fs-5 fw-bold">Metal stairs and steps:</li>
                <ul>
                    <li>Ladders, steps, and iron bars are fixed to the rock face, creating favorable conditions for climbers.</li>
                    <li>These elements help navigate difficult sections and provide stability during the climb.</li>
                </ul>
                <li className="fs-5 fw-bold">More accessible and safer:</li>
                <ul>
                    <li>Via Ferrata is suitable for both beginners and experienced climbers, providing a safe and exciting way to experience mountaineering.</li>
                    <li>The safety system helps minimize risks compared to traditional mountaineering.</li>
                </ul>
                <li className="fs-5 fw-bold">Diverse terrain:</li>
                <ul>
                    <li>Via Ferrata can be set up on various types of terrain, from vertical rock faces to mountain ridge trails.</li>
                    <li>Provides opportunities to experience stunning natural landscapes.</li>
                </ul>
                <li className="fs-5 fw-bold">Skills and fitness:</li>
                <ul>
                    <li>Although Via Ferrata is more accessible, it still requires a basic level of physical fitness and skills to ensure safety.</li>
                    <li>Mountaineers need to know how to use equipment and adhere to safety regulations.</li>
                </ul>
            </ul>
            <h4 className="fw-bold"><strong>Necessary equipment:</strong></h4>
            <ul>
                <li className="fs-5 fw-bold">Rock and ice climbing gear:</li>
                <ul>
                    <li>Safety harness: Worn around the body and attached to the steel cable.</li>
                    <li>Via Ferrata set: Includes two carabiners and elastic lanyards, helping mountaineers clip onto the steel cable.</li>
                    <li>Helmet: Protects the head from impacts or falling rocks.</li>
                    <li>Gloves: Protects the hands and improves grip.</li>
                    <li>Mountaineering boots: Boots with good traction, suitable for mountainous terrain.</li>
                    <li>Windproof and waterproof clothing: Suitable for harsh weather conditions in the mountains.</li>
                </ul>
                <li className="fs-5 fw-bold">Benefits of Via Ferrata:</li>
                <ul>
                    <li>Exciting and safe experience: Provides a safer mountaineering experience for beginners and families.</li>
                    <li>Explore nature: Allows participants to explore beautiful landscapes and hard-to-reach areas.</li>
                    <li>Build physical fitness: Helps improve endurance, strength, and flexibility.</li>
                    <li>Enhance mountaineering skills: Offers a great opportunity to learn and practice basic mountaineering skills in a safe environment.</li>
                </ul>
            </ul>
            <p>Via Ferrata is a great way to experience mountaineering and explore nature, providing a sense of adventure and thrill while
                ensuring safety. It's an ideal activity for those who love challenges and want to experience the feeling of mountaineering
                without requiring high-level skills.</p>
            <div className="col d-flex justify-content-center">
                <Link to="/about/types" className="btn btn-info" onClick={() => handleNavLinkClick('/about/types')}>Back</Link>

            </div>
        </div>
    );
}

export default ViaFerrata;
