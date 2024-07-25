import React from 'react';
import './style.css';
import hi1 from "../assets/images/history1.jpg";
import hi2 from "../assets/images/history2.jpg";

export default function History() {
    // let url= window.location.origin;
    return (
        <div className='container'>
            <h1 className='title'><strong>About Mountaineering</strong></h1>
            <hr />
            <p><i>Outdoor mountain climbing games have their origins in mountaineering and natural exploration activities. This is an activity
                that has existed for a long time, ever since humans began exploring and conquering high mountains, often in wild and harsh
                terrains.</i>
            </p>
            <p> Key stages in the history of outdoor mountain climbing:

                The Era of Exploration and Conquest (18th-19th centuries):
                During this period, European explorers and investigators began exploring and conquering mountain ranges in Europe,
                such as the Alps, and high mountains in Asia, like the Himalayas.
                This encouraged the development of mountaineering skills and safer methods to conquer challenging peaks.
            </p>
            <p>
                <strong>Competitive Climbing and Clubs (late 19th century - 20th century): </strong>   < br />  < br />

                Early climbers formed clubs and organized climbing competitions as a way to challenge their skills and to assist others in the community.
            </p>
            <figure>
                <img src={hi1} className='img-page' alt=' history' />
                <figcaption>Images Illustrating Mountain Climbing Games</figcaption>
            </figure>
            <p>
                <strong> The Development and Advancement of Techniques (20th century): </strong>
            </p>
            <p>
                With the advancement of technology, mountaineering techniques have improved significantly. Climbers can now use equipment such as ropes, pitons, specialized climbing shoes, and protection systems to climb more safely.
                At the same time, the development of photography and filming techniques has helped bring images of mountain climbs and natural expeditions to a wider public.
                This has encouraged the development of mountaineering skills and safer methods to conquer challenging peaks.
            </p>
            <p>
                <strong> Becoming a Sport and Recreation (early 21st century):</strong>
            </p>

            <p>
                Outdoor climbing has become a popular sport worldwide, with thousands of people participating in climbing trips each year.
                Climbing events and competitions are regularly organized, attracting the attention of sports enthusiasts and those looking to
                challenge themselves.
                The Climbing and Environmental Protection Movement (modern times):
            </p>
            <figure>
                <img src={hi2} className='img-page' alt='history' />
                <figcaption>Illustrative Images of Mountain Climbing Games</figcaption>
            </figure>

            <p>
                In recent years, there has been a focus on environmental protection and ethical climbing practices, with educational programs and
                climbing communities participating in environmental conservation activities and educating about preserving mountainous areas.
                With the development of adventure tourism and mountain sports, outdoor climbing has become not just a physical exercise activity
                but also a lifestyle and a way for many people to connect with nature.
            </p>

            <p>
                <strong>Today</strong>, mountain climbing is not just an adventure activity but also a sport that is recognized and developed 
                worldwide. Professional climbers participate in competitions with specific rules and regulations to ensure safety and fairness 
                in competitions.
                Techniques such as rope climbing, rock climbing, and methods like rappelling and bouldering have all evolved and become 
                integral parts of the global climbing culture.
            </p>
        </div >

    )

}