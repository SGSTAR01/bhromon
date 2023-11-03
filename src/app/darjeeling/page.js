import hill from './../assets/img/hill-black.svg'
import './../style/darjeeling/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import Time from './../assets/img/clock.png'
import Airport from './../assets/img/airport.png'
import Train from './../assets/img/train.png'
import Kanchanjangha from './../assets/img/kanchanjangha.jpg'
import Ghoom from './../assets/img/ghoom-monastery-darjeeling.png'
import GhoomTrain from './../assets/img/batasia-loop-train.jpg'
import TigerHill from './../assets/img/tigerhill.jpg'
import Batasia from './../assets/img/batasia_loop_1024.jpg'
import Hospital from './../assets/img/hospital.png'
import Transport from './../assets/img/vehicles.png'
import Store from './../assets/img/store.png'
import Restaurant from './../assets/img/restaurant.png'
import User from './../assets/img/profile.png'

import iconMap from '../consts'

const getWeather = async () => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=27.0380421&lon=88.262847&units=metric&appid=772d63bf896d0e4db07e363ba179e12c")
    const responseString = await response.text();
    const parsedJson = JSON.parse(responseString);
    console.log(parsedJson);
    return parsedJson;
}

const comp = getWeather().then((jsonData) => {
    return <div className='weather'>
        {/* <div className="card">
            <div className="card-body">
                <div className='card-icon'>
                    <Image src={weather} height={50} />
                </div>
                <div className='card-text'>
                    <h5 className="card-title">{jsonData.main.temp} °C</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Rainy</h6>
                    
                </div>
            </div>
        </div> */}
        <div className={"card"}>
            <div className="card-body">
                <div className='card-icon'>
                    <Image src={iconMap.get(jsonData.weather[0].description)} height={50} />
                </div>
                <div className='card-text'>
                    <h5 className="card-title">{jsonData.main.temp} °C</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{jsonData.weather[0].description}</h6>
                </div>
            </div>
        </div>
    </div>
});


export default function Darjeeling() {
    return (

        <>
            <title>Darjeeling</title>
            <div className='container-fluid'>
                <div className='hero'>
                    {/* This card For Wather */}
                    <div className='left-group'>
                        {comp}
                    </div>
                    {/* This div for right side group */}
                    <div className='right-group'>
                        {/* for  timing to visit*/}
                        <div className={"distance-airport"}>
                            <div className="card">
                                <div className="card-body">
                                    <div className='card-icon'>
                                        <Image src={Airport} className='card-icon-img' />
                                    </div>
                                    <div className="card-text">
                                        <h5 className="card-title">DISTANCE FROM AIRPORT</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            62.8 KMs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* for  timing to visit*/}
                        <div className={"distance-railway"}>
                            <div className="card">
                                <div className="card-body">
                                    <div className='card-icon'>
                                        <Image src={Train} className='card-icon-img' />
                                    </div>
                                    <div className="card-text">
                                        <h5 className="card-title">DISTANCE FROM RAILWAY</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            73.1 KMs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* for  timing to visit*/}
                        <div className={"visit-timing"}>
                            <div className="card">
                                <div className="card-body">
                                    <div className='card-icon'>
                                        <Image src={Time} className='card-icon-img' />
                                    </div>
                                    <div className="card-text">
                                        <h5 className="card-title">BEST TIME TO VISIT</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            APR - AUG</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-text">
                        <h2>DARJEELING</h2>
                    </div>
                    <div className='main-img'>
                        <Image src={hill} className='hill-img' />
                    </div>


                </div>
                {/* for body */}

                <article className='container'>
                    <div className='body-hill'>
                        <div className='card'>
                            <div className="card-body">
                                <div className='card-icon'>
                                    <Image src={GhoomTrain} className='card-img-left' />
                                </div>
                                <div className='card-text'>
                                    <h5 className="card-title"> Darjeeling </h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        A picturesque hill station located in the Indian state of West Bengal,
                                        is renowned for its breathtaking beauty and cultural richness.
                                        Nestled in the Lesser Himalayas at an altitude of about 6,000 feet,
                                        this enchanting town offers a serene escape from the bustling urban life.

                                        Darjeeling's natural beauty is equally captivating. The rolling hills,
                                        dense forests, and the backdrop of the snow-capped Kanchenjunga
                                        mountain create a mesmerizing panorama. The Darjeeling Himalayan Railway,
                                        a UNESCO World Heritage Site,
                                        offers a nostalgic ride through the town's hilly terrain.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* TOP PLACES TO VISIT */}
                    <div className='top-place'>
                        <div className="card">
                            <div className="card-header">
                                TOP PLACES TO VISIT
                            </div>
                            <div className="card-body">
                                {/* inside card */}
                                <div className='ghoom'>
                                    <div className="card inside-card ">
                                        <Image src={Batasia} className="card-img-top" alt="ghoom" />
                                        <div className="card-body-inside">
                                            <h5 className="card-title">BATASHIA LOOP</h5>
                                            <p className="card-text">
                                                At the centre of Batasia Loop a War Memorial stands. This memorial was constructed by the District Sainik Board, Darjeeling in commemoration of the brave Gorkha Soldiers, who sacrificed their life to protect the sovereignty of the Nation since independence. This memorial was sanctified on 22nd March, 1995.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='ghoom'>
                                    <div className="card inside-card ">
                                        <Image src={Ghoom} className="card-img-top" alt="ghoom" />
                                        <div className="card-body-inside">
                                            <h5 className="card-title">GHOOM</h5>
                                            <p className="card-text">
                                                Ghum (also spelt Ghoom) is a small hilly neighbourhood in the Darjeeling Himalayan hill region of West Bengal, India. It comes under ward number one of the Darjeeling Municipality. Ghum railway station of the Darjeeling Himalayan Railway is the highest railway station in India. It is situated at an altitude of 2,258 metres (7,407 ft).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='ghoom'>
                                    <div className="card inside-card ">
                                        <Image src={TigerHill} className="card-img-top" alt="ghoom" />
                                        <div className="card-body-inside">
                                            <h5 className="card-title">TIGER HILL</h5>
                                            <p className="card-text">
                                                At sunrise, the peaks of Kanchenjunga are illuminated before the sun is seen at lower elevations. From Tiger Hill, Mount Everest (8848 m) is just visible. Kanchenjunga (8598 m) looks higher than Mt. Everest, owing to the curvature of the Earth, as it is several miles closer than Everest. The distance in a straight line from Tiger Hill to Everest is 107 miles (172 km).
                                                On a clear day, Kurseong is visible to the south and in the distance, along with Teesta River, Mahananda River, Balason River and Mechi River meandering down to the south. Chumal Rhi mountain of Tibet, 84 miles (135 km) away, is visible over the Chola Range
                                                Senchel Wildlife Sanctuary is close to Tiger Hill.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer  text-center">
                                <button type='button' className='btn btn-outline-secondary'> See More </button>
                            </div>
                        </div>
                    </div>

                    <div className='map-area'>
                        <div className="card">
                            <div className="card-header">
                                SERVICES NEARBY
                            </div>
                            <div className="card-body">
                                {/* inside card  for map view*/}
                                <iframe src="https://maps.google.com/maps?q=darjeeling%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" allowfullscreen />

                                <div className='hospital'>
                                    <Image src={Hospital} className='over-map-icon' />
                                </div>
                                <div className='transport'>
                                    {/* <abbr title='Near By Transport'> */}
                                    <Image src={Transport} className='over-map-icon' />
                                    {/* </abbr> */}
                                </div>
                                <div className='popular-store'>
                                    <Image src={Store} className='over-map-icon' />
                                </div>
                                <div className='restaurent'>
                                    <Image src={Restaurant} className='over-map-icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='user'>
                        <div className="card">
                            <div className="card-header">
                                USER EXPERIENCES
                            </div>
                            <div className="card-body">
                                {/* inside card  for map view*/}
                                <div className='card'>
                                    <div className="card-body">
                                        <div className='card-icon'>
                                            <Image src={User} className='card-img-left' />
                                        </div>
                                        <div className='card-text' id='card-text'>
                                            <h5 className="card-title"> Subham Ghosh </h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                                5 seconds ago
                                            </h6>
                                            <p className='card-text-inside'>
                                                Loved my visit and experience there
                                                Amazing view of Kanchenjunga and the sunrise we got from there
                                                Will cherish the moment for lifetime.
                                                <br />
                                                Lovely place to see the sleeping Buddha. Kanchenjunga view is awesome. Lovely coffee to accompany. Must visit place
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article >

                {/* for Footer */}
                <footer>
                    {/* inside fotter body*/}
                    <h4>Developed By Team Crypt</h4>
                </footer>
            </div >
        </>


    )
}

