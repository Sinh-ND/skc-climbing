import React from 'react';
import { Link } from 'react-router-dom';
import ic1 from "../assets/images/types4.png";
import {  useNavigate } from 'react-router-dom';

function IceClimbing() {
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
            <h3><strong>Ice Climbing</strong></h3>
            <hr />
            <div className='types-climb1'><img src={ic1} className="img-fluid mb-4 types-climb" alt="Ice Climbing" /></div>

            <p>Ice climbing, also known as glacier climbing, is a specialized form of mountaineering where climbers ascend icy surfaces such as
                icefalls or snow-covered ice using specialized equipment and techniques. It is a high-risk activity that demands advanced
                skills, often undertaken in harsh weather conditions.</p>

            <h4><strong>Features of ice climbing:</strong></h4>

            <ul>
                <li><strong>Icy Surfaces:</strong> Climbers navigate icefalls, ice walls, or other ice structures. Ice conditions can change rapidly due to temperature and weather conditions.</li>
                <li><strong>Specialized Equipment:</strong>
                    <ul>
                        <li>Ice Axes or Ice Tools: Used to penetrate the ice and pull the climber up.</li>
                        <li>Crampons: Attached to boots for traction on ice.</li>
                        <li>Ropes: High-strength ropes used for safety.</li>
                        <li>Ice Screws: Used to create anchor points in ice.</li>
                    </ul>
                </li>
                <li><strong>Ice Climbing Techniques:</strong>
                    <ul>
                        <li>Tool Placement Technique: Placing ice tools into the ice to create anchor points.</li>
                        <li>Crampon Footwork Technique: Using crampons to secure footholds and push the climber upwards.</li>
                        <li>Anchor and Protection Technique: Using ice screws and ropes to establish anchor points and protect climbers in case of falls.</li>
                    </ul>
                </li>
                <li><strong>Harsh Weather Conditions:</strong>
                    <ul>
                        <li>Ice climbing is typically conducted in cold and wet weather conditions.</li>
                        <li>Climbers face risks such as falling ice, temperature changes, and cold winds.</li>
                    </ul>
                </li>
                <li><strong>Safety and Protection:</strong>
                    <ul>
                        <li>Safety is paramount in ice climbing. Climbers must ensure that equipment and anchor points are thoroughly checked.</li>
                        <li>Climbers should have experience and training in rescue techniques and basic first aid.</li>
                    </ul>
                </li>
                <li><strong>Physical and Mental Demands:</strong>
                    <ul>
                        <li>Ice climbing requires physical strength, flexibility, and mental resilience.</li>
                        <li>Climbers need to assess situations and make quick decisions in challenging environments.</li>
                    </ul>
                </li>
            </ul>

            <h4><strong>Necessary equipment:</strong></h4>
            <ul>
                <li>Ice Axes or Ice Tools: Primary tools for ice climbing.</li>
                <li>Crampons: Specialized boots with spikes for traction on ice.</li>
                <li>Ropes: High-strength ropes for protection.</li>
                <li>Harness: Worn around the body to connect to ropes and other protective devices.</li>
                <li>Helmet: Protects the head from impacts or falling ice.</li>
                <li>Cold Weather Clothing: Insulated and waterproof clothing to protect against cold and wet weather.</li>
                <li>Ice Screws: Used to create anchor points in ice.</li>
            </ul>

            <h4><strong>Experience and knowledge:</strong></h4>
            <ul>
                <li>Ice climbing skills and team protection: Understanding how to use ice axes, crampons, and other protective equipment.</li>
                <li>Navigation and map reading skills: Ability to navigate and route-find in snowy and icy terrain.</li>
                <li>Survival and first aid skills: Emergency response and basic first aid proficiency.</li>
            </ul>

            <p>Ice climbing is a challenging and exciting activity that combines mountaineering skills, adaptation to harsh conditions, and a
                spirit of adventure. It's an ideal sport for those who enjoy adrenaline and exploring nature in extreme environments.</p>

            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Link to="/about/types" className="btn btn-info" onClick={() => handleNavLinkClick('/about/types')}>Back</Link>

                </div>
            </div>
        </div>
    );
}

export default IceClimbing;
