import hill from './../assets/img/hill-black.svg'
import './../style/darjeeling/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import Time from './../assets/img/clock.png'
import Airport from './../assets/img/airport.png'
import Train from './../assets/img/train.png'
import Kanchanjangha from './../assets/img/kanchanjangha.jpg'

import iconMap from '../consts'
const getWeather = async () => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=27.0380421&lon=88.262847&units=metric&appid=772d63bf896d0e4db07e363ba179e12c")
    const responseString = await response.text();
    const parsedJson = JSON.parse(responseString);
    console.log(parsedJson);
    return parsedJson;
}

const comp = getWeather().then((jsonData) => {
    return <div className={"weather"}>
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
        <div class={"card"}>
            <div class="card-body">
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
                            <div class="card-body">
                                <div className='card-icon'>
                                    <Image src={Airport} className='card-icon-img' />
                                </div>
                                <div className="card-text">
                                    <h5 className="card-title">DISTANCE FROM AIRPORT</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        30 KMs</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for  timing to visit*/}
                    <div className={"distance-railway"}>
                        <div className="card">
                            <div class="card-body">
                                <div className='card-icon'>
                                    <Image src={Train} className='card-icon-img' />
                                </div>
                                <div className="card-text">
                                    <h5 className="card-title">DISTANCE FROM RAILWAY</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        30 KMs</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for  timing to visit*/}
                    <div className={"visit-timing"}>
                        <div className="card">
                            <div class="card-body">
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

            <article className='container'>
                <div className='body-hill'>
                    <div className='card'>
                        <div class="card-body">
                            <div className='card-icon'>
                                <Image src={Kanchanjangha} className='card-img-left' />
                            </div>
                            <div className='card-text'>
                                <h5 className="card-title"> Lorem Ipsum</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.
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
                                <div class="card inside-card ">
                                    <Image src={Kanchanjangha} class="card-img-top" alt="..." />
                                    <div class="card-body-inside">
                                        <h5 class="card-title">BATASHIA LOOP</h5>
                                        <p class="card-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Dui id ornare arcu odio ut sem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='ghoom'>
                                <div class="card inside-card ">
                                    <Image src={Kanchanjangha} class="card-img-top" alt="..." />
                                    <div class="card-body-inside">
                                        <h5 class="card-title">GHOOM</h5>
                                        <p class="card-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Dui id ornare arcu odio ut sem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='ghoom'>
                                <div class="card inside-card ">
                                    <Image src={Kanchanjangha} class="card-img-top" alt="..." />
                                    <div class="card-body-inside">
                                        <h5 class="card-title">TIGER HILL</h5>
                                        <p class="card-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Dui id ornare arcu odio ut sem.
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


            </article >

            {/* for body */}

        </div >
    )
}

