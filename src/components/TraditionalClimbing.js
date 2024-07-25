// import './TraditionalClimbing.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import tr1 from "../assets/images/types1.png";


function TraditionalClimbing() {
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
            <h3><strong>Traditional Climbing</strong></h3>
            <hr />
            <div className='types-climb1'><img src={tr1} className="img-fluid mb-4 types-climb" alt="img" /></div>

            <p>Traditional climbing, commonly referred to as trad climbing, is a type of rock climbing where climbers place their own protection
                devices into cracks and fissures in the rock as they ascend. Once the climb is completed, all protection devices are removed,
                leaving the rock surface completely intact. This form of climbing requires a high level of skill and thorough preparation.</p>

            <h4><strong>Characteristics of Traditional Climbing:</strong></h4>
            <ul>
                <strong>1. Placing your own protection devices:</strong>
                <li>Climbers must carry and place their own protection devices, such as cams, nuts, hexes, and tri-cams, into the cracks in the rock.</li>
                <li>These protection devices help prevent the risk of free falls and ensure safety during the climb.</li>
            </ul>
            <ul>
                <strong>2. There are no pre-placed fixed anchors on the rock.</strong>
                <li>Unlike sport climbing, where there are pre-installed bolts, trad climbing requires climbers to find and place their own anchors along the
                    climbing route.</li>
                <li>This creates challenges and requires higher technical skills.</li>
            </ul>
            <ul>
                <strong>3. Skill and experience required:</strong>
                <li>Climbers must have the skill to place and remove protection devices safely and effectively.</li>
                <li>Knowledge of creating secure anchor points and handling emergency situations is essential.</li>
            </ul>
            <ul>
                <strong>4. Environmental conservation mindset:</strong>
                <li>Trad climbing respects and preserves the natural surface of the rock, leaving no trace after the climb.</li>
                <li>Người leo thường có ý thức bảo vệ môi trường và tuân thủ các nguyên tắc Leave No Trace (Không để lại dấu vết).</li>
            </ul>
            <ul>
                <strong>5. Suitable for diverse terrains:</strong>
                <li>Trad climbing can be performed on various types of terrain, including high cliffs, cracks, and steep or slab walls.</li>
            </ul>

            <h4><strong>Essential equipment needed:</strong></h4>
            <ul>
                <li>Climbing Rope: Used to protect and connect the climber to the belayer.</li>
                <li>Harness: Worn around the body to attach to the climbing rope and other protection devices.</li>
                <li>Helmet: Protects the head from impacts and falling debris.</li>
                <li>Protection Gear: Includes cams, nuts, hexes, tri-cams for placing into cracks in the rock.</li>
                <li>Carabiners and Quickdraws: Used to connect the climbing rope to protection gear.</li>
                <li>Chalk Bag: Holds chalk to keep hands dry and improve grip.</li>
                <li>Climbing Shoes: Enhances grip and flexibility while climbing.</li>
                <li>Slings and Cordelettes: Used to create anchor points and for protection.</li>
            </ul>


            <h4><strong>Techniques and strategies:</strong></h4>
            <ul>
                <strong>1. Secure Protection Placement:</strong>
                <li>Learn to place and remove protection gear safely and effectively.</li>
                <li>Check and ensure that protection gear is securely placed before continuing the climb.</li>
            </ul>
            <ul>
                <strong>2. Anchor Building:</strong>
                <li>Understand how to build a secure anchor using slings and protection gear.</li>
                <li>Ensure the anchor point is strong enough to withstand the climber's fall.</li>
            </ul>
            <ul>
                <strong>3. Rope Management:</strong>
                <li>Use rope management techniques to minimize the risk of falls and ensure safety during the climb.</li>
                <li>Keep the rope taut to protect the climber.</li>
            </ul>
            <ul>
                <strong>4. Route Assessment and Selection:</strong>
                <li>Analyze the route before climbing to evaluate placement options for protection gear and potential hazards.</li>
                <li>Choose a route that matches your skills and experience.</li>
            </ul>


            <h4><strong>Benefits and Challenges:</strong></h4>
            <ul>
                <li><strong>Benefits:</strong></li>
                <li>Provides a sense of freedom and excitement in mountain climbing, helping climbers develop skills and knowledge about
                    protection gear.</li>
                <li>Creates opportunities to explore beautiful and remote mountain locations.</li>
                <li>Promotes environmental protection and respect for nature.</li>
            </ul>
            <ul>
                <li><strong>Challenges:</strong></li>
                <li>Requires high technical skills and thorough preparation.</li>
                <li>Presents higher risks if protection gear is not placed correctly.</li>
                <li>Demands patience and resilience in challenging situations.</li>
            </ul>

            <p>Traditional climbing is a challenging and rewarding mountain climbing activity, offering opportunities to explore and conquer
                natural rock formations. It is an ideal sport for those who enjoy adventure and wish to develop their mountaineering skills
                in an environment that respects and protects nature.</p>

            <div className="col d-flex justify-content-center">
                <Link to="/about/types" className="btn btn-info" onClick={() => handleNavLinkClick('/about/types')}>Back</Link>
            </div>
        </div>
    );
}

export default TraditionalClimbing;
