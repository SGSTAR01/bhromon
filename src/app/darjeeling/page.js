import hill from './../assets/img/hill-black.svg'
import './../style/darjeeling/index.css'
import Image from 'next/image'
import weather from './../assets/img/rainy.png'
import Time from './../assets/img/clock.png'

const getWeather = async () => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=27.0380421&lon=88.262847&units=metric&appid=772d63bf896d0e4db07e363ba179e12c")
    const responseString = await response.text();
    const parsedJson = JSON.parse(responseString);
    return parsedJson;
}

const comp = getWeather().then((jsonData) => {
    return <div className={"weather"}>
        <div className="card">
            <div className="card-body">
                <div className='card-icon'>
                    <Image src={weather} height={50} />
                </div>
                <div className='card-text'>
                    <h5 className="card-title">{jsonData.main.temp} °C</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Rainy</h6>
                </div>
            </div>
        </div>
    </div>
});


export default function Darjeeling() {
    return (
        <div className='container-fluid'>
            {/* This card For Wather */}
            {comp}
            {/* <div className='hero-group'> */}
            <div className='main-text'>
                <h2>DARJEELING</h2>
            </div>
            <div className='main-img'>
                <Image src={hill} className='hill-img' width={200} height={200} />
            </div>
            {/* </div> */}

            {/* for  timing to visit*/}
            <div className='visit-timing'>
                <div class="card">
                    <div class="card-body">
                        <div className='card-icon'>
                            <Image src={Time} height={50} />
                        </div>
                        <div className='card-text'>
                            <h5 className="card-title">BEST TIME TO VISIT</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                APR - AUG</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

