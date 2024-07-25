import React from 'react';
import './style.css';
import re1 from "../assets/images/record1.jpg";
import re2 from "../assets/images/record2.jpg";
import re3 from "../assets/images/record3.jpg";
import re4 from "../assets/images/record4.jpg";

export default function Record() {
    // let url= window.location.origin;
    return (
        <div className='container'>
            <h1 className="title"><strong>Outdoor Mountain Climbing Records: Challenges and Inspirations Beyond Limits</strong></h1><hr />
            <div className='deve-lop3'>

                <i>Outdoor mountain climbing is not just an adventurous sport but also a challenging test of mental and physical endurance. Mountaineers
                    constantly seek the exhilaration of  conquering immense peaks, where nature manifests its most wondrous marvels..</i>
            </div><br />
            <p><strong>1. Definition and significance of mountain climbing records</strong></p>
            <p>Mountain climbing is an adventurous and perilous activity, requiring participants to meticulously prepare with technical climbing
                skills, patience, and exceptional endurance. Setting outdoor mountain climbing records involves overcoming some of nature's
                toughest challenges, from towering mountain ranges to rugged rock faces or even icy slopes.</p>
            <p><strong>2. Prominent types of mountain climbing records</strong></p>
            <p><i>Speed climbing</i>: Includes records for the time taken to ascend and descend a mountain. <br />
                <i>Number of ascents</i>: Professional mountaineers often compete to see who can make the most ascents within a specific time frame. <br />
                <i>Height and weight</i>: Many also set outdoor mountain climbing records based on meters climbed and balance.</p>
            <p><strong>Below are some examples of record-breaking mountaineers:</strong> <br />
                <i>Nirmal Purja from Nepal</i> set a new record by completing the challenge of conquering the world's 14 highest peaks in just 189 days, surpassing the previous record set in 2013 by 7 years and 10 months.
                <figure><img src={re1} className='img-page' alt='record1'/> <figcaption>Image of record-holder Nirmal Purja</figcaption></figure>
                <p>A Nepali man shattered the total time record for conquering the 14 highest peaks in the world by completing the feat in 189 days.
                    On October 29, Nirmal Purja completed the climb to the 8,027m high Shishapangma in China. This is the last mountain in the 14 high peaks that the man has conquered.
                    The expedition is known as Project Possible.</p> <br />
                <p><i>Phunjo Lama</i> climbed Mount Everest in 14 hours and 31 minutes on May 23, breaking the record for the fastest ascent of the world's highest peak set by herself six years ago.
                    Many mountaineers usually take several days to conquer the world's highest peak over 8,800 m, stopping overnight at different camps to rest and adapt. But Lama, over 30, from Nepal, took only 14 hours and 31 minutes to climb Mount Everest on May 23, well ahead of the record set in 2018 - 39 hours and 6 minutes.</p>
                <figure><img src={re2} className='img-page' alt='record1'/> <figcaption>Image of record-holder Phunjo Lama</figcaption></figure>
                <p>Lama won the Guinness World Record for "Fastest Woman to Climb Mount Everest" in 2018. The record was broken in 2021 by Ada Tsang Yin hung, from Hong Kong, China. Ada left Base Camp at 1:20 on May 22, 2021 and climbed Everest the following day, after 25 hours and 50 minutes.
                    Nepalese mountain climber Lhakpa Gelu Sherpa holds the Guinness World Record for the fastest ascent of Everest in 10 hours and 56 minutes in 2003.</p> <br />
                <p>Two mountain climbers <i>Kami Rita Sherpa from Nepal</i> and <i>Briton Kenton Cool</i> set a new record for the number of times they climbed the highest mountain in the world that they had set before.</p>
                <figure><img src={re3} className='img-page' alt='record1' /> <figcaption>Image of 2 record-holders</figcaption></figure>
                <p>On May 12, Mount Everest saw two records being broken when two mountaineers Kami Rita Sherpa from Nepal and Briton Kenton Cool set a new record for the number of times they climbed to the highest mountain in the world that they had set before.
                    This is the 29th time, Kami Rita Sherpa, 54, has climbed to the summit of Everest, setting a new record for the number of times a Nepalese mountain climber has climbed to Everest.
                    Meanwhile, Cool, 50, has climbed Everest 18 times and set a new record for the number of times a foreign mountain climber has climbed to the summit.
                    Sherpa has been a mountain guide for 20 years, also known affectionately as "Everest Man."
                    The first time he climbed to a mountain peak at 8,849 m above sea level was in 1994 when he worked for a commercial expedition company. Since then, almost every year he has climbed to the peak of Everest when guiding guests.
                    It is not yet clear if this 29th summit climb will be accompanied by guests. In 2023, Sherpa climbed to the top of Everest twice to set a record after another guide, Pasang Dawa Sherpa, reached the highest mountain in the world at the time.
                </p>
                <figure><img src={re4} className='img-page' alt='record1'/> <figcaption>Image of Mount Everest</figcaption></figure>


            </p>




        </div>
    )
}

