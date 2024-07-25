import React from "react";
import './style.css';
import te1 from "../assets/images/techniques.jpg";
import te2 from "../assets/images/techniques1.jpg";
import te3 from "../assets/images/techniques2.jpg";
import te4 from "../assets/images/techniques3.jpg";
import te5 from "../assets/images/techniques4.jpg";
import te6 from "../assets/images/techniques5.jpg";


export default function Techniques() {
    // let url= window.location.origin;
    return (
        <div className="container">
            <h1 className="title"><strong>Techniques</strong></h1>
            <hr/>
            <p>
                <i>When outdoor mountain climbing</i>, there are several techniques and skills necessary to ensure safety and success on the 
            journey. Below are some important techniques:
            </p>
            <p><strong>1. Mountain Climbing Skills</strong><p> This is the most basic skill in mountain climbing, involving navigating various 
                mountainous terrains, using equipment such as trekking poles, and being flexible in movement across rocks, soil, snow, etc.</p>
                <p> There are three main types of terrain when you embark on a mountain climbing journey:</p>
                <figure>
                    <img src={te1} className='img-page' alt="img-tech1" /> 
                    <figcaption>Illustrative image of mountain climbing</figcaption>
                </figure>
                <ul>
                     <li>Paths with varying elevations: maintain even footsteps and stable breathing (for long trails) or walk comfortably, breathe deeply and slowly (for short trails).</li>
                     <li>Gentle hill slopes: take short, even steps to maintain breathing rhythm, lean forward to prevent the backpack from dragging behind.</li>
                    <li>Steep mountain slopes:
                    <ul>
                        <li>Observe foothold placements: choose spots with good grip (e.g., rocky edges, not too far for your stride).</li>
                        <li>Find handholds: ensure they are secure (test by gently pulling). When grabbing bushes, grasp clusters rather than individual branches.</li>
                    </ul>
                    </li>
                </ul>
            </p>

            <p><strong>2. Rock Climbing Skills</strong><br /> If mountain climbing involves navigating rock sections, this skill is crucial. 
            It includes knowing how to traverse rock surfaces, using rock climbing gear and protection, belaying safely, and maintaining body 
            control.</p>

            <figure><img src={te2} className='img-page' alt="img-tech2" /> <figcaption>Rock Climbing Skills</figcaption></figure>
            <p>Free rock climbing is an exhilarating and challenging activity that allows you to create a route up steep rock faces, pushing 
                you both mentally and physically in ways you can't experience with anchored mountain climbing. To achieve this, you need to be 
                comfortable and skilled with carrying gear, using two-ended hooks, knowing how to belay, and setting and removing anchors.</p>
            <p><strong>3. Snow and Ice Climbing Skills</strong><br /> If you traverse snowy or icy areas, these skills are essential. They 
            include using ice axes, crampons, and safe snow climbing techniques such as front-pointing, ice ax arrest, etc.</p>

            <figure><img src={te3} className='img-page' alt="img-tech3" /> <figcaption>Snow and Ice Climbing Skills:</figcaption></figure>
            <p>In much of spring and summer, mountain routes in the United States are generally straightforward. By late summer or fall, 
                crevasses widen as snow melts. Before a crevasse forms, there may be no signs, but crevasses once formed can be treacherous. 
                Route-finding becomes much more challenging in these weather conditions. Snowstorms and tornadoes are similarly enticing and 
                also have distinct enticements. Needless to say, using elevation and compass for navigating terrain is particularly important.</p>
            <p><strong>4. River and Stream Crossing Skills</strong>:  <br /> Essential skills for crossing waterways, including choosing crossing spots, 
            using trekking poles, and crossing safely as a group. </p>
            <figure><img src={te4} className='img-page' alt="img-tech4" /> <figcaption>River and Stream Crossing Skills:</figcaption></figure>
            <p>When flooding occurs, continuously rising river waters can trap trees on mid-stream hills and submerge solid objects, making 
                them difficult to identify. Therefore, you must carefully determine a safe river crossing point. If necessary, consider 
                relocating to a slower-flowing area. Crossing perpendicular to the current is the simplest method when the water level is below 
                waist height. Form a line with the group, using strong support objects or linking arms over shoulders and waists to provide 
                mutual support. The strongest and most experienced person, often the leader, should stand at the front facing upstream to 
                reduce water pressure. They should also count to coordinate the group's synchronized steps, maintaining a consistent distance 
                to avoid straying and minimize resistance against the water flow for everyone.</p>
            <p> <strong>5. Navigation Skills</strong>  <br /> Navigation skills and using maps and a compass are essential for navigating in the right 
            direction while mountain climbing. </p>
            <figure><img src={te5} className='img-page' alt="img-tech5"/> <figcaption>Navigation Skills</figcaption></figure>
            <p>Whether you're a novice or seasoned trekker, getting lost in the wilderness is inevitable. Therefore, equipping yourself with 
                necessary knowledge will help you stay calm and overcome dangers. Maintaining composure to assess situations and respond 
                appropriately is crucial in any circumstance. Before embarking on any trekking or travel, it's essential to learn some basic 
                survival skills. This article will help everyone understand methods of determining direction when a compass or watch is not 
                available. You might say this is a method of orientation that you likely learned in school. Now is the time to apply it. Stand 
                facing the sun with both arms outstretched. In the morning, the sun rises in the East. In the afternoon, it sets in the West. 
                Just based on this, you can generally determine where you need to go. However, this method of orientation can sometimes be 
                inaccurate. In reality, the sun's rising and setting positions vary slightly depending on the equinox cycle. Therefore, before
                 setting out trekking, make sure to thoroughly understand how to determine direction using this method.</p>
            <strong>6. Skills in using mountaineering equipment.</strong>  <br />
            <p>To use mountaineering gear, a harness made from woven webbing, either sewn or tied into a closed loop, is an essential 
                mountaineering tool that you use whenever you climb to efficiently secure and carry gear. The harness operates with carabiners,
                 quickdraws, cam locks, oval rings, and climbing ropes to create a safe mountaineering system. So, how does a mountaineering
                  harness, a necessary tool for climbing, work to ensure safety? Let's explore this in the following article!</p>
            <figure><img src={te6} className='img-page' alt="img-tech6" /> <figcaption>Illustration of mountaineering equipment</figcaption></figure>

        </div >
    )
}