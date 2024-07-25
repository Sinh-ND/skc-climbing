import React from "react";
import './style.css';
import gu1 from "../assets/images/guide1.jpg";
import gu2 from "../assets/images/guide2.jpg";
import gu3 from "../assets/images/guide3.png";
import gu4 from "../assets/images/guide4.jpg";
import gu5 from "../assets/images/guide5.jpg";
import gu6 from "../assets/images/guide6.jpg";
import gu7 from "../assets/images/guide7.jpg";
import gu8 from "../assets/images/guide8.jpg";



export default function Guidelines () {

  // let url= window.location.origin;
  return (
    <div className="container">
      <h1 className="title"><strong>Guidelines</strong> </h1>
      <hr/>
      <p>Climbing is an adventurous activity that requires thorough preparation and adherence to safety regulations. Below
        are some rules, safety guidelines, and considerations for mountain climbing:</p>
      <p><i><strong>1. Preparation before climbing</strong></i></p>
      <p>Research the route: Learn about the route you will be climbing, including its difficulty level, estimated time,
        and rest stops..</p>
      <figure><img src={gu1} className="img-page" alt="guide" >
      </img><figcaption> Illustration </figcaption>
      </figure>
      <p>Check the weather: Bad weather conditions can be dangerous. Check the weather forecast before setting out.
        Experience 1: Monitor the weather forecast
        Weather is the first piece of information to consider for every climbing or trekking trip, even for experienced
        climbers. If there are children in the group, you need to pay even more attention to the weather, as children can
        easily become panic-stricken in extreme weather conditions, and bad weather can affect their safety first.
        One of the key considerations for mountain climbing is to avoid trekking or climbing in harsh weather conditions
        that may impair safe visibility or cause dangerous slipperiness. In such cases, you should reconsider your route
        and, ideally, postpone the trip until the weather is favorable.
        Make it a habit to check the weather forecast the day before your trip and review the conditions in the morning
        or before departure. Use local weather forecast information and cross-reference it from multiple sources if
        needed. The most convenient way is to install a weather forecast app and allow the app to send alerts for sudden
        weather changes.</p>
      <img src={gu2}  className="img-page" alt="guide"></img>
      <p> Equip necessary gear: Make sure you have all essential equipment such as ropes, climbing shoes, helmets, raincoats, 
        tents, and first aid kits. Climbing clothing
        Your climbing clothing will significantly affect your comfort throughout the journey. Here are some tips for choosing 
        climbing clothes:
        Material: Choose polyester (quick-drying) or cotton (sweat-absorbing) materials.
        Features: Prioritize clothing with features such as UV protection and reflective strips.
        Color: Climbing clothes should be brightly colored for easy visibility.
        Other characteristics: High collars, adjustable belts, and additional features optimized for climbing activities.
        Climbing accessories
        In addition to clothing, accompanying accessories such as climbing backpacks, sleeping bags, sunglasses, hydration packs,
         etc., are equally important. They will help you handle various types of terrain..</p>
      <p><i><strong>2. Safety Regulations</strong></i></p>
      <p> Climb in a group: Do not climb alone. Additionally, an important climbing skill is to always keep an eye on your 
        companions. This helps maintain communication, unity, and ensures that everyone stays on the right path, avoiding getting
         lost. More importantly, in case of any mishaps, you can respond promptly and prevent unfortunate incidents.</p>
      <p> Register your itinerary: Inform your family or local authorities about your climbing plans. Informing your family and 
        friends about your schedule and climbing location is essential. If the worst-case scenario occurs, such as an accident 
        or unexpected incident, they will be able to provide your itinerary and location information to the rescue team, making 
        it easier to find you.</p>
      <figure><img src={gu3}  className="img-page" alt="guide" >
        </img><figcaption>Illustration  </figcaption>
      </figure>
      <p>Respect nature: Do not litter, do not harm wild flora and fauna. Nature is the playground for sports enthusiasts. A 
        clean route ensures not only hygiene and safety for yourself at the current moment but also for the future. Therefore, 
        respect and protect the environment, and ensure proper waste disposal throughout your mountain climbing journey.
        Some environmentally friendly ways to handle waste:
        For biodegradable waste: bury and burn, ensuring the fire is completely out after burning.
        For non-biodegradable or slow-biodegrading waste (nylon, plastic, etc.): pack them separately and take them back for 
        proper disposal later.
        Furthermore, use reusable items such as collapsible cups, stainless steel cooking utensils instead of disposable ones. 
        This not only helps protect the environment but also saves time in waste management.
        Know your limits: Assess your skills and physical fitness, and do not choose routes that are too difficult beyond your 
        capabilities. If you have acrophobia, avoid routes with such challenges. If you're with a group, inform them about your 
        fear of heights so they can provide support if needed. It's crucial not to be pushed beyond your limits in situations 
        that could lead to unpredictable danger. </p>
      <figure><img src={gu4}  className="img-page" alt="guide" ></img>
        <figcaption>Illustration  </figcaption>
      </figure>
      <p>Always stay focused and vigilant throughout the journey.</p>
      <p>An experienced driver often faces accidents on familiar roads, similar to hiking or mountain climbing. A beginner's tip 
        for mountain climbing is: When you're approaching the destination or navigating seemingly safe terrain, accidents tend to
         occur. This could be due to fatigue, which can lead to decreased concentration. Therefore, strive to maintain focus 
         throughout the journey. Plan appropriate rest times and ensure adequate food and hydration to replenish energy during 
         the trip. .</p>
      <p><i><strong>3. Mountain Climbing Safety</strong></i></p>
      <p>Use safety equipment: Ensure you know how to use all safety equipment such as ropes, carabiners, and helmets. Mountain 
        Climbing Clothing
        Your mountain climbing clothing significantly affects your comfort throughout the journey. Here are some tips for 
        choosing climbing clothes:
        Material: Choose polyester (quick-drying) or cotton (sweat-absorbing) materials.
        Features: Prioritize clothing with features such as UV protection and reflective elements.
        Color: Mountain climbing clothes should be brightly colored for easy visibility.
        Other features: High collar, adjustable straps, and additional details optimized for climbing activities.
        Climbing Accessories
        In addition to clothing, accompanying accessories such as a climbing backpack, sleeping bag, sunglasses, hydration pack, 
        etc., are equally important. They will help support you across various types of terrain.
        If the weather is bad or you are walking towards the setting or rising sun, wear a headlamp.</p>
      <figure><img src={gu5}  className="img-page" alt="guide" ></img>
        <figcaption>Illustration </figcaption>
      </figure>
      <p> Regular equipment check: Before and during climbing, always check your equipment to ensure they are functioning 
        properly.</p>
      <p>Keep in touch: Use walkie-talkies, mobile phones, or other communication devices to stay in contact with your group.
        Manage energy: Eat and rest adequately to maintain energy levels. Avoid climbing when fatigued.</p>
      <figure><img src={gu6}  className="img-page" alt="guide" ></img>
        <figcaption>Illustration   </figcaption>
      </figure>
      <figure><img src={gu7}  className="img-page" alt="guide" ></img>
        <figcaption>Illustration  </figcaption>
      </figure>
      <p>Energy management: Eat and rest sufficiently to maintain energy levels. Avoid mountain climbing when your body is 
        fatigued.</p>
      <p><i><strong>4. Important Notes</strong></i></p>
      <p>Pay attention to body warning signals: If you feel tired, dizzy, or short of breath, stop and rest. Regarding hydration:
         You should carry enough water for the entire journey, ensuring at least 1 liter and ideally 2 liters of water. Drink 
         enough water before, during, and after the journey to properly replenish your body. Although mountain climbing doesn't 
         cause as much sweating as running, remember that an average adult loses about 2.5 liters of water per day. Therefore, 
         you need to supplement water to replace fluids for your muscles and overall body functioning optimally.</p>
      <p>Learn first aid skills: Know how to treat wounds, sprains, or other medical emergencies. Be cautious of changing weather: Weather in high mountains can change rapidly. Be prepared to cope with harsh weather conditions..</p>
      <p>Get vaccinated fully.</p>
      <figure><img src={gu8}  className="img-page" alt="guide" ></img>
        <figcaption>Illustration  </figcaption>
      </figure>
      <p>In sports activities as well as daily life, it's essential to be fully vaccinated, especially against Tetanus. This 
        disease can enter the body through wounds exposed to soil or animal feces. It's a common concern during mountain climbing
         and trekking.</p>
      <p><i><strong>5. Logistics and Nutrition</strong></i></p>
      <p> Carry enough water and food: Ensure you have an adequate supply of drinking water and energy-rich food. Food storage: 
        Bring food that is easy to store and prepare.</p>
      <p>Bring an emergency first aid kit.</p>
      <p>If asked what to bring for mountain climbing, an emergency first aid kit is an indispensable item, whether it's a 
        short or long trip. Injuries are inevitable during mountain climbing or trekking. Bringing a first aid kit will help you
         handle unexpected situations effectively..</p>

    </div >


  )
}
