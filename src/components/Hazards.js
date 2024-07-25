import React from "react";
import './style.css'
import ha from "../assets/images/hazards.jpg";
import ha1 from "../assets/images/hazards1.jpg";
import ha2 from "../assets/images/hazards4.jpg";
import ha3 from "../assets/images/hazards2.jpg";
import ha4 from "../assets/images/hazards3.jpg";
import ha5 from "../assets/images/hazards5.jpg";

export default function Hazards() {
    // let url= window.location.origin;
    return (
        <div className="container">
            <h1 className="title"><strong>Hazards</strong></h1><hr/>
            <div className='deve-lop3'>
            <i>
            When participating in outdoor mountaineering activities, there are many hazards that climbers need to be aware of and prepare 
            for. Below are some common hazards associated with mountaineering.</i><br/>
            </div><br/>
            
            <strong>Weather-related hazards</strong> <br />
            <p>
            Landslides occur when prolonged heavy rain seeps deep into the soil, causing it to soften and reducing the cohesion between soil 
            blocks. The soil blocks on hillsides, riverbanks, and streambanks then lose their grip on the main mass and cannot withstand 
            gravity, leading to landslides. Typically, prolonged drought before the rainy season can cause deep cracks in the soil, making 
            landslides more likely. This means that if there is very hot weather before it rains, landslides are more likely to occur.
            </p>
            <figure>
                <img src={ha} className="img-page" alt="img-haz1" />
                <figcaption>Illustrations of extreme weather conditions.</figcaption>
            </figure>
            <p> 
            Hazards include blizzards, strong winds, freezing rain, dense fog, and even excessive heat, which can cause heatstroke or sunburn. 
            Especially on hillsides without sturdy vegetation, landslides become an especially dangerous potential risk.
            </p>
            <strong>Hazards due to rugged terrain</strong> <br />
            <p> Mountain ranges often have diverse and rugged terrain, including cliffs, crevasses, dangerous slopes, and steep rock faces. 
                This can pose safety risks and requires advanced climbing skills.</p>
            <figure>
                <img src={ha1} className="img-page" alt="img-haz2"/> 
                <figcaption >Illustrations of rugged terrain.</figcaption>
                </figure>
            <strong> Hazards related to ropes and equipment</strong>
            <p>
            An important part of mountaineering gear, depending on the terrain and your needs, is choosing appropriate footwear!
            </p>
            <figure>
                <img src={ha2} className="img-page" alt="img-haz3"/> 
                <figcaption>Illustrations of hazards related to safety equipment</figcaption>
            </figure>
            <p> 
            It seems like you're discussing the importance of choosing appropriate mountaineering equipment, including waterproof shoes for 
            wet terrain, ankle flexibility based on shoe height (low-cut, mid-cut, high-cut), and the use of higher socks for ankle protection 
            in rough terrain. This helps in minimizing the risk of ankle injuries during hiking
            </p>
            <strong>Risks from exploitation and natural hazards</strong>  <br />
            <p>
            Some mountainous regions face environmental degradation risks such as landslides, erosion, and pollution from waste. Areas prone to 
            landslides typically lack sturdy vegetation cover, increasing vulnerability. However, natural landscapes like dense forests or large 
            mountain masses with robust soil-root systems and geological formations are less susceptible due to their natural stability. Examples 
            include prominent mountains like Bạch Mộc Lương Tử, Lảo Thẩn, or Fansipan, which rarely experience landslides due to their natural 
            geological and vegetative resilience against such occurrences.
            </p>
            <figure>
                <img src={ha3} className="img-page" alt="img-haz4"/> 
                <figcaption>Illustrations of extreme weather conditions and risks.</figcaption>
            </figure>
            <strong>Hazards due to lack of experience and technical preparation</strong>
            <p> 
            Lack of experience and necessary skills to handle emergency situations such as rescue, medical emergencies, or getting lost can 
            lead to dangerous situations. Besides flash floods and landslides, there are other risks lurking during rainy season treks - Don't 
            be afraid, knowing the risks is to prevent them, not to scare you!! Firstly, there's the risk of slipping - one slip and you can 
            sprain your ankle. The path ahead is often slippery, so if you do sprain your ankle, it can be challenging to continue. Therefore, 
            be cautious with every step to conserve energy and ensure safety! Also, don't place too much expectation on recently purchased 
            high-end shoes with thick, grippy soles; equipment supports 60%, and the remaining 40% is your movement skills and your carefulness.
            </p>
            <strong>Risks associated with altitude</strong> <br />
            <p> 
            Mountain climbing activities often involve altitude, and risks from altitude sickness such as motion sickness, oxygen deficiency, 
            and sunstroke can pose health hazards. Climbing high mountains entails numerous risks, but in high-altitude areas, the greatest 
            dangers come from dehydration, penetrating cold, and freezing winds. It's crucial to be especially cautious on rugged and rocky 
            paths, and always remember that the nearest hospital may be several kilometers away. Altitude sickness is particularly dangerous 
            above 3,000 meters, especially when ascending rapidly. 
            </p>
            <figure>
                <img src={ha4} className="img-page" alt="img-haz5" /> 
                <figcaption>Illustrations of altitude risks</figcaption>
            </figure>
            <strong>Hazards from wildlife and insects</strong>  <br />
            <p> 
            Wilderness areas can pose risks from dangerous wildlife or disease-carrying insects. Wild animals are species that live naturally. 
            They have survived for thousands of years without direct human impact. They have evolved behaviors and adaptations to survive in 
            complex environments and are not accustomed to living indoors.
            </p>
            <figure>
                <img src={ha5} className="img-page" alt="img-haz6"/> 
                <figcaption>Illustrations of wild animals</figcaption>
            </figure>

            To cope with these dangers, climbers need meticulous preparation, use of safety equipment, necessary skills, and always maintain 
            knowledge of the environment and weather conditions. Mountaineering groups should ideally have experienced guides to minimize risks.
        </div>
    )
}