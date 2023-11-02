'use client'

import styles from './page.module.css'

const getWeather = async () => {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=27.0380421&lon=88.262847&units=metric&appid=772d63bf896d0e4db07e363ba179e12c")
  const responseString= await response.text();
  const parsedJson = JSON.parse(responseString);
  return parsedJson;
}

const comp = getWeather().then((jsonData) => {
  return <div className={styles.weather}>
    {JSON.stringify(jsonData.main)}
  </div>
});

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div> 
          {comp}
          <iframe src="https://maps.google.com/maps?q=Darjeeling&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width={1000} height={800} allowFullScreen />
        </div>
      </main>
    </>
  )
}
