import React from "react";
import './style.css';
import sh1 from "../assets/images/shelter1.jpg";
import sh2 from "../assets/images/shelter2.jpg";
import sh3 from "../assets/images/shelter4.jpg";
import sh4 from "../assets/images/shelter6.jpg";
import sh5 from "../assets/images/shelter5.jpg";
import sh6 from "../assets/images/shelter7.jpg";
export default function Shelter() {
    // let url= window.location.origin;
    return (
        <div className="container">
            <h1 className="title"><strong>Sheltering</strong></h1><hr/>
            <div className='deve-lop3'>

            <i>Outdoor mountain climbing refuges are natural or developed locations designed to provide suitable environments for mountaineering 
            and other adventurous sports. These are places where enthusiasts can challenge themselves, explore nature, and experience the 
            exhilaration of overcoming mountain challenges. Here are some examples of popular refuges for outdoor mountain climbing sports:</i>
             </div><br />
            <strong>Large and famous mountain ranges around the world:</strong> <br /> 
            <i>Himalaya </i>
            <p> 
            Known for its numerous tallest peaks like <i>Everest</i>, <i>Annapurna</i>, and many stunning mountains in countries such as Nepal, 
            India, and Bhutan. The region near Mount Everest attracts mountaineers from all around the globe. Jeju Island, South Korea: Famous 
            for its volcanic mountains and diverse natural landscapes, providing an excellent environment for mountaineering activities. These 
            refuges are not only destinations for professionals but also attract many mountain sports enthusiasts who join climbing tours to 
            explore and experience this majestic natural environment.
            </p>
            <figure>
                <img src={sh1} className="img-page" alt="img-shel1"/> 
                <figcaption> <i>The Himalayas </i></figcaption>
            </figure>


           <p>
           <i>Andes</i> is the longest mountain range in the world, running along the western coast of South America, renowned for high peaks 
           like Aconcagua in Argentina and Chimborazo in Ecuador.
           </p> 
                <figure>
                    <img src={sh2} className="img-page" alt="img-shel2"/> 
                    <figcaption> <i>The Andes Mountains </i></figcaption>
                </figure>
                <i>Alps</i> is the famous mountain range in Europe known for its beautiful landscapes and mountaineering spots like Mont 
                Blanc in France and Matterhorn in Switzerland.
                <i>Rockies</i> is a famous mountain range in North America, primarily in the United States and Canada, featuring peaks like 
                Denali in Alaska and Longs Peak in Colorado. <br /> <br />
                <strong>Natural reserves and national parks: </strong><br />

                <i>Yosemite National Park, USA</i> is renowned for its prominent rock formations and towering cliffs, a popular destination 
                for mountaineering and rock climbing. <i>Banff National Park, Canada</i> features towering mountains, pristine lakes, and 
                majestic valleys, making it an ideal place for mountaineering. The terrain is complex and challenging. <br /> <br />

                <i>Patagonia, South America:</i> A wild region in southern Argentina and Chile, featuring icy peaks and unique landscapes, 
                attracting adventurous athletes. Other famous locations around the world.<br/><br/>


            <p>
                <strong> Tent:</strong> <br />

                <p> A tent is one of the most common shelters used in mountaineering. It provides protection from wind, rain, and insects. 
                    When choosing a tent, make sure it suits the weather conditions and provides enough space for your group. A tent, also 
                    known as a camping tent, tarp tent, or shelter tent, is a relatively small physical structure, often simple in 
                    construction and design, typically consisting of a roof made of fabric or other hanging materials, supported by poles 
                    or tied to a rope, and commonly used as a temporary shelter or camping accommodation.
                </p>
                <figure>
                    <img src={sh3} className="img-page" alt="img-shel3"/> 
                    <figcaption> <i>Illustration of a shelter tent</i></figcaption>
                </figure>
                <strong>Mountain Hut:</strong>  <br />
                <p> 
                Rest stations are fixed or temporary structures built along mountain routes. They often include sleeping beds, cooking 
                facilities, and other basic amenities. Reservations are typically required for rest stations.
                </p>
                <strong>Emergency Shelter:</strong> <br />
                <p> 
                These are temporary shelters used in emergency situations. They can include emergency sleeping bags, ponchos, or bivvy bags. 
                They are lightweight, easy to carry, and quick to deploy when needed. Nowadays, camping is quite common, so rental services 
                for outdoor gear are also extremely popular. If you only go camping with friends a few times a year, you can rent gear to 
                save costs and match the number of participants. 
                </p>
                <strong>Tree Shelter:</strong>  <br />
                <p>
                Camping is an activity where participants temporarily stay in a natural area, usually outdoors or in an environment such as 
                forests, mountains, beaches, lakes, or grasslands, to experience outdoor living and enjoy nature. When camping, participants 
                often set up tents or use mobile vehicles like camper vans to create shelter and sleep overnight. Camping activities typically 
                include outdoor cooking, hiking, fishing, enjoying natural scenery, and creating memorable experiences in a natural setting. 
                Camping can be done for recreation, relaxation, immersing oneself in nature, or challenging oneself in a tough natural 
                environment.
                </p>
                <figure>
                    <img src={sh4} className="img-page" alt="img-shel4"/> 
                    <figcaption> <i>Illustration of camping under a tree </i></figcaption>
                </figure>
                <p> 
                If you don't have a tent or other shelter, you can look for an area under large trees to protect yourself from rain and wind. 
                Choose a spot that is free from the risk of falling trees or landslides.
                </p>
                <strong>Snow Shelter:</strong>  <br />
                <p>
                The snow tent, also known as an igloo, is a unique form of shelter used by the Inuit because they live in polar regions with 
                cold and harsh climates. To adapt to the extreme environment, the Inuit invented the snow tent, utilizing the insulating 
                properties of snow and ice to maintain a relatively stable temperature inside the dwelling.
                </p>
                <figure>
                    <img src={sh5} className="img-page" alt="img-shel5" /> 
                    <figcaption> <i>Illustration of a snow tent shelter </i></figcaption>
                </figure>
                <p>
                In snowy conditions, you can build snow shelters like igloos or quinzhees. They provide good protection from wind and cold. 
                However, building a snow tent requires skill and time. The main principle of a snow tent is to take advantage of the insulating 
                properties of snow and ice. Snow and ice are excellent insulating materials that prevent heat transfer. When blocks of ice are 
                used to construct the walls and roof of a snow tent, they effectively block the entry of cold air from outside and help maintain 
                a relatively stable temperature inside the shelter. 
                </p>
                <strong>Ranger Station:</strong> <br />
                <p>
                The ranger station is an organization under the District Forest Protection Sub-Department in districts, towns, and cities, managed 
                and directly directed by the Head of the Forest Protection Sub-Department and the Chairman of the District, Town, or City People's 
                Committee for the management, protection, and development of forests, and the management of forest products in the area.
                </p>
                <figure>
                    <img src={sh6} className="img-page" alt="img-shel6"/> 
                    <figcaption> <i>Illustration of a ranger station </i></figcaption>
                </figure>

                <p>
                In some areas, there may be ranger stations or other rescue facilities available. These are good places to seek shelter and 
                assistance in emergencies. When mountaineering, always check ahead for information on shelters along your planned route, and 
                carry emergency shelter equipment to ensure safety.
                </p>
            </p>
        </div>


    )
}