import React from "react";
// import './Videos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Videos() {
    return (
        <div className="container my-4 video-wrapper">
            
            <h1 className="title"><strong>Interesting Videos About Mountaineering</strong></h1><hr/>
            <div className='deve-lop3'>
                <i>Welcome to our mountain climbing video collection! Here, you'll find a curated selection of
                    videos showcasing breathtaking climbs from around the world. Whether you're an avid mountaineer seeking inspiration for your
                    next adventure or simply captivated by the beauty of mountain landscapes, our collection offers a glimpse into the challenges
                    and rewards of scaling peaks. Join us as we explore towering summits, stunning vistas, and the indomitable spirit of those who
                    brave the heights. Discover the thrill of mountain climbing through our carefully curated videos, each capturing the essence of
                    this exhilarating pursuit.</i> <br />
            </div>
            <div className="row g-4 mt-3">
                <div className="col-md-6 col-lg-4">
                    <div className="video">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/9QjsgRa2R7w"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <strong>"Self-guide Sapa trip | Taking the Cable Car to Fansipan Summit and Experiencing Unseen Beauty!"</strong>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="video">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/3zGEcmUAwgY"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <strong>"Fansipan Summit Flycam | City in the Clouds Like Paradise | Vietnam's Beautiful Scenery"</strong>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="video">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/I3gaWDC7YwY"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <strong>"Journey to Conquer Putaleng Mountain Peak - Putaleng Mountain Trekking Trip"</strong>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="video">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/s8_kGgVwxo8"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <strong>"Trekking in Tả Liên Sơn During the Season of Changing Leaves - Watching Cloud Waterfalls
                            Flow Over the Mountains in Lai Châu | Alexplores"</strong>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="video">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/lro9YNg2FOo"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <strong>"The Path to the Summit of Ky Quan San - Bach Moc Luong Tu Amidst a Sea of White Clouds"</strong>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="video">
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/bfha5mckNrM"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <strong>"Nhiu Co San 2965m - Creating Memories for Children / Glass Forest Area"</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
