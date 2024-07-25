import React from 'react';
// import './SuccessStories.css'; // Optional: for custom styling
import su1 from "../assets/images/sucess1.jpg";
import su2 from "../assets/images/sucess2.jpg";
import su3 from "../assets/images/sucess3.png";
import su4 from "../assets/images/sucess4.webp";
import su5 from "../assets/images/sucess5.png";
import su6 from "../assets/images/sucess6.jpg";
import su7 from "../assets/images/sucess7.jpg";
import su8 from "../assets/images/sucess8.jpg";
import su9 from "../assets/images/sucess9.jpeg";

export default function SuccessStories() {
    // let url= window.location.origin;
    return (

        <div className="container">
            <h1 className="title"><strong>Successful Stories of Organized Camps</strong></h1>
            <hr />
            <div className='deve-lop3'>
            <i>
                The mountain climbing organizations around the world are not just places for mountaineers to conquer high peaks, but also crucial
                centers for connecting humans with nature and fostering cooperation in overcoming formidable challenges. The success stories from
                these places not only broaden our perspective on human capabilities but also provide powerful motivation for pursuing higher goals
                in life.
            </i>
            </div>
            <br />
            <strong>1. Conquering Everest (Nepal)</strong> <br />
            <p>Everest Base Camp is one of the most renowned mountaineering hubs globally, situated at approximately 5,364 meters above sea level.
                It serves as the primary stopover for aspiring climbers dreaming to conquer the summit of Everest. This camp not only assists
                thousands of mountaineers in achieving their goals but also plays a crucial role in preserving the surrounding environment.
            </p>
            <img src={su1} className="img-page" alt="img-sucess1" />
            <figcaption> <i>Everest Base Camp </i></figcaption>
            <p>
                In 2019, a team of mountaineers from around the world converged at Everest Base Camp. Despite facing harsh weather conditions and
                health challenges, all members of the team successfully summited Everest and returned safely. The team raised over $500,000 to
                support environmental conservation projects in the Himalayas.
            </p>

            {/* --------------------------------------------------------------------------------------------------------------- */}

            <strong>2. Conquering Kilimanjaro (Tanzania)</strong> <br />

            <p>Mount Kilimanjaro is the highest mountain in Africa and a popular destination for mountaineers from around the world. Organized
                camps here provide guidance and support for those aiming to conquer this peak.
            </p>
            <img src={su2} className="img-page" alt="img-sucess2" />
            <figcaption> <i>Kilimanjaro Base Camp</i></figcaption>
            <p>
                In 2021, a non-profit organization led a group of 20 orphaned children to the summit of Kilimanjaro. The goal of this journey was
                to raise awareness about the plight of orphaned children and to fundraise for educational programs. The group successfully achieved
                their objective and raised over $100,000.
            </p>
            {/* --------------------------------------------------------------------------------------------------------- */}
            <strong>3. Conquering Denali (USA)</strong> <br />

            <p>Denali, the highest mountain in North America, presents a significant challenge to mountaineers. Organizations here provide
                training courses and guidance on mountain climbing techniques and safety.
            </p>
            <img src={su3}className="img-page" alt="img-sucess3" />
            <figcaption> <i>Denali Base Camp </i></figcaption>
            <p>
                A group of women decided to climb Denali to commemorate the 100th anniversary of women's suffrage in the United States. They
                meticulously planned and trained for a year. With the support of organizations, they successfully reached the summit of Denali
                in 2020. Their story has inspired many other women to participate in mountaineering activities and explore nature.
            </p>

            {/* ----------------------------------------------------------------------------------------------------------------- */}

            <strong>4. Conquering Aconcagua (Argentina)</strong> <br />

            <p>Aconcagua is the highest mountain in South America and a popular destination for mountaineers. Organizations here provide
                essential services from professional guides to necessary equipment.
            </p>
            <img src={su4} className="img-page" alt="img-sucess4" />
            <figcaption> <i>Aconcagua Base Camp </i></figcaption>
            <p>
                In 2018, a group of war veterans from various countries came together to conquer Aconcagua. Their journey was not just a physical
                challenge but also a means for them to heal psychological wounds from war. The group completed the expedition successfully, and
                their story has been widely shared, raising awareness about the mental health of veterans.
            </p>
            {/* --------------------------------------------------------------------------------------------- */}
            <strong>5. Conquering Vinson Massif (Antarctica)</strong> <br />

            <p>Vinson Massif is the highest mountain in Antarctica, posing a significant challenge due to its harsh conditions. Organizations
                here provide professional services to support those aiming to conquer this peak.
            </p>
            <img src={su5} className="img-page" alt="img-sucess5" />
            <figcaption> <i>Vinson Massif base camp </i></figcaption>
            <p>
                In 2022, a group of scientists and environmental conservationists organized an expedition to climb Vinson Massif to collect data
                on climate change. They overcame challenges of weather and terrain to accomplish their mission, and the data they gathered has made
                a significant contribution to global climate change research.
            </p>
            {/* ------------------------------------------------------------------------------------------------ */}
            <strong>6. Conquering Mount Elbrus (Russia)</strong> <br />

            <p>Mount Elbrus is the highest mountain in Europe, located in the Caucasus mountain range. The organizations here offer professional
                training and mountaineering guidance.
            </p>
            <img src={su6} className="img-page" alt="img-sucess6" />
            <figcaption> <i>Elbrus Base Camp  </i></figcaption>
            <p>
                In 2021, a group of young people from various European countries decided to conquer Mount Elbrus to raise awareness about climate change.
                They completed the journey and garnered international media attention, contributing to fundraising efforts for environmental protection
                projects.
            </p>
            {/* ------------------------------------------------------------------------------------------------------ */}

            <strong>7. Conquering Mont Blanc (France)</strong> <br />

            <p>Mont Blanc is the highest mountain in Western Europe, located in the Alps mountain range. Organizations here provide guidance and support
                for those seeking to experience mountaineering at this peak.
            </p>
            <img src={su7} className="img-page" alt="img-sucess7" />
            <figcaption> <i>Mont Blanc Base Camp  </i></figcaption>
            <p>
                In 2019, a couple organized a mountaineering expedition to summit Mont Blanc to commemorate their 10th wedding anniversary. With the support
                of guides, they successfully reached the summit. Their story has inspired many others with its spirit of camaraderie and enduring love.
            </p>
            {/* ------------------------------------------------------------------------------------------------------ */}

            <strong>8. Conquering Carstensz Pyramid (Indonesia)</strong> <br />

            <p>Carstensz Pyramid is the highest mountain in Oceania and one of the most challenging due to its complex terrain. Organizations here offer 
                mountaineering training courses and essential equipment.
            </p>
            <img src={su8} className="img-page" alt="img-sucess8" />
            <figcaption> <i>Carstensz Pyramid Base Camp  </i></figcaption>
            <p>
            In 2020, a group of professional mountaineers from Australia decided to conquer Carstensz Pyramid. They overcame numerous challenges posed by the 
            terrain and weather to successfully complete their journey, capturing the attention of the international mountaineering community.
            </p>
            {/* ------------------------------------------------------------------------------------------------------ */}

            <strong>9. Conquering Mount Kosciuszko (Australia)</strong> <br />

            <p>Mount Kosciuszko is the highest mountain in Australia and a popular destination for families and friends looking to experience mountain climbing. 
                Organizations here provide guided services and safety support.
            </p>
            <img src={su9} className="img-page" alt="img-sucess9" />
            <figcaption> <i>Mont Blanc Base Camp  </i></figcaption>
            <p>
            In 2022, a three-generation family decided to climb Mount Kosciuszko to celebrate their grandfather's birthday. They successfully completed the 
            journey, and their story became an inspiration for many other families about love and family bonding.
            </p>
            <strong>
            With success stories ranging from Everest to Kilimanjaro, from Denali to Aconcagua, and from Vinson Massif to Mont Blanc, mountain climbing 
            organizations have significantly contributed to spreading values of aspiration, unity, and love for nature. They serve as spaces for personal journeys and also as hubs for converging environmental and humanitarian concerns.
            </strong>
        </div>
    );
}

