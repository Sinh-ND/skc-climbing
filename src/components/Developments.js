import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import de1 from "../assets/images/develop1.jpg";
import de2 from "../assets/images/develop2.jpg";
import de3 from "../assets/images/develop3.webp";
import de4 from "../assets/images/develop4.webp";
import de5 from "../assets/images/develop5.jpg";
import de6 from "../assets/images/develop6.jpg";
import de7 from "../assets/images/develop7.webp";
import de8 from "../assets/images/develop8.webp";
import de9 from "../assets/images/develop9.jpg";
import de10 from "../assets/images/develop10.jpg";
import de11 from "../assets/images/develop11.jpeg";
import de12 from "../assets/images/he6.jpg";

function Developments() {
  // let url= window.location.origin;
  return (

    <div className='container'>
      <h1 className='title'><strong>"Advanced Gear and New Technologies in Mountaineering: Cutting-edge Innovations for Adventure Enthusiasts"</strong></h1>
      <div className='deve-lop3'>
        <i>
        Climbing is one of the extreme sports that attracts many participants due to its challenges and the opportunity to explore new 
        territories. In recent years, the field of climbing has witnessed significant advancements not only in techniques but also in 
        equipment and supporting technologies. This article will provide a detailed introduction to the latest developments in the field 
        of climbing, from modern equipment and advanced techniques to mobile applications that assist climbers. Additionally, we will 
        discuss future trends and provide important references for climbers.
        </i>
      </div>
      <br /><br />

      <h1 className='title'><strong>References</strong></h1>
      <hr/>

      <div className="container">
        <div className="row">
          <h5><strong>1. References from the International Climbing and Mountaineering Federation (UIAA)</strong></h5>

          <div className="col-md-6">
            <div className='deve-lop1'>
              <Link to="https://www.theuiaa.org/publications/annual-reports/" className="link-item no-underline">
                <img src={de1} className="img-fluid images-deve1" alt="develop1" />
                <h6 className="deve-lop"><strong>UIAA Publications</strong></h6>
                <p> Here, you can find research reports, technical guides, and climbing-related documents from the UIAA.</p>
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className='deve-lop1'>
              <Link to="https://www.theuiaa.org/safety/safety-standards/" className="link-item no-underline">
                <img src={de2} className="img-fluid images-deve1" alt="develop1" />
                <h6 className="deve-lop"> <strong>UIAA</strong></h6>
                <p>
                The UIAA is an international climbing organization that provides safety standards, guidance documents, 
                and research related to mountaineering.
                </p>
              </Link>

            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <h5><strong>2. Specialized Journal</strong></h5>

          <div className="col-md-6">
            <div className='deve-lop1'>
              <Link to="https://www.climbing.com/magazine-issues/" className="link-item no-underline">
                <img src={de3} className="img-fluid images-deve1" alt="develop1" />
                <h6 className="deve-lop"><strong>Climbing Magazine</strong></h6>
                <p> The Climbing magazine is a reputable source of information on the latest trends, 
                  climbing techniques, and climbing equipment.</p>
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className='deve-lop1'>
              <Link to="https://alpinist.com/" className="link-item no-underline">
                <img src={de4} className="img-fluid images-deve1" alt="develop1" />
                <h6 className="deve-lop"> <strong>Alpinist Magazine</strong></h6>
                <p>
                Alpinist is a magazine specializing in mountaineering and exploration, providing 
                in-depth articles and stories about memorable mountaineering expeditions.
                </p>
              </Link>

            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <h5><strong>3.Reference Books</strong></h5>

          <div className="col-md-6">
            <div className='deve-lop1'>
              <Link to="https://www.amazon.com/Mountain-Guide-Manual-Comprehensive-Reference/dp/1493025147/ref=sr_1_1?dib=eyJ2IjoiMSJ9.xU3CB5DgdAvJ5uA9wPoVb5xHdhQbFdl0bxDeVecedTu1_EIxw0lruF4XvwXwXwX8VW5fLqWFcSxi8uy5bAUVOhJRDW6Ih5p8fSp7vvBID06jMgAdLUlaTzZkbRgfzwc65JAOjcpuitfic4QIiDppdr4hNzRwCuxxnnCqXlWOYqrUgb4dVtogQCpvy2samk-0pZfoPKFg-azP0K9T1quVSukZFxKxliURcgczA8cSpoQ.sSIEakPWLow6Z13XnKqsQA3cFSl_lx7M6zloJj_nUe8&dib_tag=se&keywords=The+Mountain+Guide+Manual%3A&qid=1720198349&sr=8-1" className="link-item no-underline">
                <img src={de5} className="img-fluid images-deve1" alt="develop1" />
                <h6 className="deve-lop"><strong>The Mountain Guide Manual</strong></h6>
                <p> This book provides essential techniques and skills for guiding mountaineering, including safety methods and strategies.</p>
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className='deve-lop1'>
              <Link to="https://www.amazon.com/Mountaineering-Freedom-Hills-8th-Mountaineers/dp/1594851387" className="link-item no-underline">
                <img src={de6} className="img-fluid images-deve1" alt="develop1" />
                <h6 className="deve-lop"> <strong>The Freedom of the Hills</strong></h6>
                <p>
                This is a classic mountaineering book, considered the "bible" for mountaineers, providing detailed guidance on every aspect of mountaineering.
                </p>
              </Link>

            </div>
          </div>
        </div>
      </div>




      <div className="container">
        <div className="row">
          <h5><strong>4. Mobile Applications</strong></h5>

          <div className="col-md-4">
            <div className='deve-lop1'>
              <Link to="https://apps.apple.com/us/app/alltrails-hike-bike-run/id405075943" className="link-item no-underline">
                <img src={de7} className="img-fluid images-deve1" alt="develop1" />
                <h6 className="deve-lop"><strong>AllTrails:AllTrails on the App Store</strong></h6>
                <p> AllTrails provides detailed maps, terrain information, weather updates, as well as features for tracking journeys 
                  and sharing experiences.</p>
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className='deve-lop1'>
              <Link to="https://apps.apple.com/us/app/gaia-gps-mobile-trail-maps/id1201979492" className="link-item no-underline">
                <img src={de8} className="img-fluid images-deve1" alt="develop1" />
                <h6 className="deve-lop"> <strong>Gaia GPS: Gaia GPS on the App Store</strong></h6>
                <p>
                Gaia GPS allows users to download offline maps, measure elevation and distances, which is very useful for mountain climbers.
                </p>
              </Link>

            </div>
          </div>


          <div className="col-md-4">
            <div className='deve-lop1'>
              <Link to="https://download.com.vn/viewranger-gps-cho-android-82448" className="link-item no-underline">
                <img src={de9} className="img-fluid images-deve1" alt="develop1" />
                <h6 className="deve-lop"> <strong>ViewRanger: ViewRanger on the App Store</strong></h6>
                <p>
                ViewRanger provides detailed maps and GPS positioning features, helping mountain climbers track their routes and stay safer."
                </p>
              </Link>

            </div>
          </div>
        </div>
      </div>

      <div className='deve-lop2'>
        <h1 className='title mt-5'><strong>The Latest Developments</strong></h1>
        <hr/>
        <h5 className="mb-3"><strong>1. Modern Mountaineering Equipment</strong></h5>
        <h6><strong>Safety Equipment Page</strong></h6>
        <ul>
          <li>
          Ropes and Carabiners: Manufacturers like Black Diamond, Petzl, and Mammut have improved mountaineering ropes with better 
          strength-to-weight ratios. New carabiners feature auto-locking mechanisms and high strength, ensuring maximum safety for climbers.
          </li>
          <li>
          Helmets: New helmet models are not only lighter but also provide better protection thanks to advanced shock absorption technology. 
          Models from Petzl and Black Diamond feature excellent ventilation designs, enhancing comfort for climbers during ascent.
          </li>
        </ul>

        <h6><strong>Specialized Mountaineering Boots</strong></h6>
        <img src={de10} className="img-fluid images-develop-p" alt="develop1" />
        <ul>
          <li>
          Non-Slip Soles: New mountaineering boots from La Sportiva and Scarpa feature Vibram soles with excellent traction, ensuring safe 
          movement on rock and ice surfaces.
          </li>
          <li>
          Multi-Purpose Design: Many modern mountaineering boots feature a multi-purpose design suitable for both climbing and long-distance 
          hiking, allowing climbers to move across various terrains without needing to change footwear.
          </li>
        </ul>

        <h5 className="mb-3"><strong>2. Supportive Technology</strong></h5>

        <h6><strong>Mobile Applications</strong></h6>
        <ul>
          <li>
          AllTrails: Provides detailed maps, terrain and weather information, along with a tracking feature for journeys. 
          AllTrails also includes a community feature, allowing users to share experiences and review hiking trails.

          </li>
          <li>
          Gaia GPS: This app allows users to download offline maps, enabling navigation even without an internet connection. 
          Gaia GPS also integrates tools for altitude and distance measurements, making it highly useful for mountaineers.
          </li>
        </ul>

        <h6><strong>GPS Positioning Devices</strong></h6>
        <img src={de11} className="img-fluid images-develop-p" alt="develop1" />
        <ul>

          <li>

          Garmin inReach: This device not only provides accurate GPS positioning but also features emergency SOS signaling 
          capabilities. Its long battery life and waterproof capabilities make Garmin inReach highly suitable for extended 
          mountaineering expeditions.

          </li>
          <li>
          Suunto 9 Baro: This smartwatch can measure altitude, weather, and integrates GPS functionality. With long battery 
          life and waterproof capabilities, the Suunto 9 Baro is a reliable device for mountaineers.
          </li>
        </ul>

        <h5 className="mb-3"><strong>3. Advanced Mountaineering Techniques</strong></h5>
        <h6><strong>Glacier Mountaineering Techniques</strong></h6>
        <img src={de12} className="img-fluid images-develop-p" alt="develop1" />
        <ul>
          <li>
          Supporting Equipment: Courses and instructional materials on advanced glacier mountaineering techniques are becoming 
          increasingly popular, helping climbers learn how to move safely on snow and ice surfaces and use tools like ice axes 
          and crampons. Companies like Black Diamond provide ice axes with new designs that are lighter and more effective in 
          cutting and gripping ice.


          </li>
          <li>
          Mountain climbing gear like cold-weather clothing from brands like Patagonia and The North Face is made from waterproof 
          materials that also provide excellent insulation, helping climbers maintain body heat in freezing conditions.
          </li>
        </ul>
        <h6><strong>Sport Climbing Techniques</strong></h6>
        <ul>
          <li>
          Advanced Courses: Indoor climbing centers offer specialized courses in sport climbing techniques, catering to both beginners 
          and experienced mountaineers to enhance skills and fitness. These courses cover techniques in free climbing, rope handling, 
          and protective equipment use.

          </li>
          <li>
          Training Equipment: Equipment such as indoor climbing machines and climbing boards help mountaineers hone their skills and 
          build strength. Modern climbing centers offer diverse training areas, from climbing walls to natural terrain simulation zones.
          </li>
        </ul>


        <h6><strong>Future Trends</strong></h6>
        <p>
        In the future, we can expect even more innovations in the field of mountaineering. New technologies such as virtual reality (VR) 
        and augmented reality (AR) could be applied to provide training courses and simulate mountain climbs, helping climbers practice 
        skills safely and effectively. Research into new materials will also contribute to improving mountaineering equipment, making them 
        lighter and more durable. Additionally, sustainable development trends and environmental protection will continue to be crucial, 
        with a focus on using recycled materials and environmentally friendly practices in the production of mountaineering gear.
        </p>
      </div>
      <h5><strong>Conclusion</strong></h5>
      <div className='deve-lop4'>
      <i>
      The continuous development in mountaineering has opened up numerous new opportunities for enthusiasts of this adventurous sport. 
      With modern equipment, advanced techniques, and supportive technologies, mountaineering has become not only safer but also more 
      enticing and enjoyable than ever before. Looking ahead, we can expect even more innovations to enhance the mountaineering experience 
      and foster strong growth within the mountaineering community.
      </i>
      </div>
     


    </div >

  )

}


export default Developments;
