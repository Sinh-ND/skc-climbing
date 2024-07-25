// import './MixedClimbing.css'
import React from 'react';
import { Link } from 'react-router-dom';
import mi1 from "../assets/images/types8.png";
import {  useNavigate } from 'react-router-dom';


function MixedClimbing() {
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
            <h3><strong>Mixed Climbing</strong></h3>
            <hr />
            <div className='types-climb1'><img src={mi1} className="img-fluid mb-4 types-climb" alt="img" /></div>

            <p>Mixed climbing is a type of mountaineering that combines rock and ice climbing, typically on mixed terrain where climbers face
                both rock and ice surfaces along the same route. This activity requires high skill and flexibility to adapt to constantly
                changing conditions.</p>

            <h4><strong>Features of Mixed Climbing:</strong></h4>
            <ul>
                <strong>1. Combination of Rock and Ice:</strong>
                <li>Mixed climbing often takes place on routes that involve both rock and ice surfaces, or on rock faces with ice patches.</li>
                <li>Climbers must utilize both rock climbing and ice climbing techniques.</li>
            </ul>
            <ul>
                <strong>2. Specialized Gear:</strong>
                <li>Ice Axes or Ice Tools: Used for stabbing into ice and pulling climbers up.</li>
                <li>Crampons: Attached to boots to increase traction on ice and rock.</li>
                <li>Quickdraws: Used for protection while climbing.</li>
                <li>Ice Screws and Camalots: Used to create anchor points in ice and rock.</li>
            </ul>
            <ul>
                <strong>3. Diverse Climbing Techniques:</strong>
                <li>Rock Climbing Techniques: Using hands and feet to grip holds and navigate rock sections.</li>
                <li>Ice Climbing Techniques: Using ice tools and crampons to grip and move on ice.</li>
                <li>Mixed Techniques: Combining both techniques to adapt to changing conditions.</li>
            </ul>
            <ul>
                <strong>4. Constantly Changing Conditions:</strong>
                <li>Mixed climbing often occurs in constantly changing weather and terrain conditions, from dry rock to wet ice.</li>
                <li>Climbers must be able to quickly adapt to these conditions.</li>
            </ul>
            <ul>
                <strong>5. Physical and Skill Requirements:</strong>
                <li>Requires strength, endurance, and high technical climbing skills.</li>
                <li>Ability to assess and navigate critical situations to ensure safety.</li>
            </ul>

            <h4><strong>Necessary equipment:</strong></h4>
            <ul>
                <li><strong>Climbing Gear for Rock and Ice:</strong></li>
                <li>Ice Axes or Ice Tools: Used for climbing ice and mixed routes.</li>
                <li>Crampons: Aid in gripping ice and rock.</li>
                <li>Quickdraws: Used for protection while climbing.</li>
                <li>Harness: Worn around the body to connect with climbing ropes and other protective devices.</li>
                <li>Helmet: Protects the head from impacts or falling debris, ice, and rock.</li>
                <li>Cold-weather and Waterproof Clothing: Keeps warm and dry to protect against cold and wet weather.</li>
                <li>Ice Screws and Camalots: Used to create anchor points in ice and rock.</li>
            </ul>

            <h4><strong>Techniques and strategies:</strong></h4>
            <ul>
                <li><strong>1. Transition Between Techniques:</strong></li>
                <li>Climbers need to know when to use rock climbing techniques and when to switch to ice climbing techniques.</li>
                <li>Use ice tools to place into cracks on rock and ice when necessary.</li>
            </ul>
            <ul>
                <li><strong>2. Route Assessment and Selection:</strong></li>
                <li>Select routes that match your skills and experience.</li>
                <li>Evaluate the conditions of ice and rock before climbing.</li>
            </ul>
            <ul>
                <li><strong>3. Risk Management and Safety:</strong></li>
                <li>Always check gear and anchor points to ensure safety.</li>
                <li>Implement protection measures and use ropes correctly.</li>
            </ul>
            <h4><strong>Benefits and Challenges:</strong></h4>
            <ul>
                <strong>Benefits:</strong>
                <li>Provides diverse mountaineering experiences and challenges.</li>
                <li>Improves mountaineering skills and ability to adapt to changing conditions.</li>
            </ul>
            <ul>
                <strong>Challenges:</strong>
                <li>Requires high technical skills and flexibility.</li>
                <li>Changing weather conditions and terrain pose multiple risks.</li>
            </ul>

            <p>Mixed climbing is a challenging and exciting activity that combines elements of rock and ice climbing. It is an ideal sport
                for those who love adventure and want to explore complex and diverse mountaineering routes.</p>

            <div className="col d-flex justify-content-center">
                <Link to="/about/types" className="btn btn-info" onClick={() => handleNavLinkClick('/about/types')}>Back</Link>

            </div>
        </div>
    );
}

export default MixedClimbing;
