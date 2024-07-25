import React from 'react';
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import bo1 from "../assets/images/types3.png";

function Bouldering() {
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
                    <h2><strong>Bouldering</strong></h2>
                    <hr />
                    <div className='types-climb1'><img src={bo1} className="img-fluid  mb-4 types-climb" alt="Bouldering" /></div>

                    <p>
                        Bouldering is a popular and exciting form of rock climbing that focuses on scaling short walls and technical moves without
                        using ropes or other protective equipment. It is an ideal activity for those who enjoy adventure and want to challenge
                        their technical skills.
                    </p>

                    <h4><strong>Features of Bouldering:</strong></h4>

                    <ul>
                        <li><strong>Low Height:</strong> Bouldering routes are typically between 3 to 5 meters (10 to 16 feet) high. Without using ropes, climbers rely solely on their strength and skills to complete the route.</li>
                        <li><strong>Use of Crash Pads:</strong> Crash pads are placed beneath the climbing area to minimize injury risk in case of a fall. Climbers often bring multiple crash pads and have spotters for safety.</li>
                        <li><strong>Focus on Technique and Strength:</strong> Bouldering problems are usually short but demand precise technique, strength, and flexibility.</li>
                        <li><strong>Indoor and Outdoor Bouldering:</strong> Bouldering can be done on artificial climbing walls indoors or on natural rock formations outdoors.</li>
                        <li><strong>Competition and Socialization:</strong> Bouldering is frequently organized into competitions, from local to international levels. It's a social activity where climbers meet, share experiences, and challenge routes together.</li>
                    </ul>

                    <h4><strong>Essential Equipment:</strong></h4>

                    <ul>
                        <li><strong>Climbing Shoes:</strong> Special shoes designed to enhance grip and flexibility while climbing.</li>
                        <li><strong>Crash Pads:</strong> Placed beneath the climbing area to protect climbers in case of falls.</li>
                        <li><strong>Chalk Bag:</strong> Contains chalk to keep hands dry and improve grip.</li>
                        <li><strong>Comfortable Clothing:</strong> Suitable for climbing, allowing flexibility and freedom of movement.</li>
                    </ul>

                    <h4><strong>Technique and Strategy:</strong></h4>

                    <ul>
                        <li><strong>Balancing and Movement Technique:</strong> Use balancing techniques to maintain stability on the wall. Smooth and precise movements using both hands and feet to grip onto holds.</li>
                        <li><strong>Hand and Foot Techniques:</strong> Use hands to grip and pull up while feet push and maintain balance. Techniques like "heel hooks" and "toe hooks" maximize the strength of the feet.</li>
                        <li><strong>Problem Solving:</strong> Observe and analyze the route before climbing. Experiment with different techniques and strategies to find the most effective way to climb.</li>
                    </ul>

                    <h4><strong>Benefits of Bouldering:</strong></h4>

                    <ul>
                        <li><strong>Improves Strength and Fitness:</strong> Enhances muscle strength, endurance, and flexibility. Develops balance and coordination between different parts of the body.</li>
                        <li><strong>Develops Problem-Solving Skills:</strong> Promotes analytical and problem-solving abilities during climbs. Provides opportunities to experiment and learn from various climbing techniques.</li>
                        <li><strong>Boosts Spirit and Confidence:</strong> Builds resilience and confidence when facing challenges. Provides a sense of accomplishment upon completing difficult climbs.</li>
                        <li><strong>Social Activity and Community Connection:</strong> Opportunity to meet and connect with like-minded individuals. Participate in bouldering competitions and events to expand social networks.</li>
                    </ul>

                    <p>
                        Bouldering is a challenging and exciting form of climbing that combines risk-taking, technique, and problem-solving spirit. It's an ideal sport for those who enjoy challenges and want to explore their abilities in a safe and supportive environment.
                    </p>

                    <div className="row mt-3">
                        <div className="col">
                            <div className="col d-flex justify-content-center">
                                <Link to="/about/types" className="btn btn-info" onClick={() => handleNavLinkClick('/about/types')}>Back</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bouldering;
