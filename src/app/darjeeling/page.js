import hill from './../assets/img/hill-black.svg'
import './../style/darjeeling/index.css'
import Image from 'next/image'
import Time from './../assets/img/clock.png'
import Airport from './../assets/img/airport.png'
import Train from './../assets/img/train.png'

import iconMap from '../consts'
import { log } from 'console'
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
                {comp}
                {/* This div for right side group */}
                <div className='right-group'>
                    {/* for  timing to visit*/}
                    <div className={"distance-airport"}>
                        <div className="card">
                            <div class="card-body">
                                <div className='card-icon'>
                                    <Image src={Airport} height={40} />
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
                                    <Image src={Train} height={40} />
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
                                    <Image src={Time} height={40} />
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
                {/* <div className='hero-group'> */}
                <div className="main-text">
                    <h2>DARJEELING</h2>
                </div>
                <div className='main-img'>
                    <Image src={hill} className='hill-img' width={200} height={200} />
                </div>
                {/* </div> */}


            </div>

            <article className="container">
                <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
                <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>

                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="..." class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </article>

            {/* for body */}

        </div>
    )
}

