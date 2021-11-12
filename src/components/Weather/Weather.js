import './weather.css' ;

import { useState , useEffect } from 'react';

export default function Weather(){

    const [city , setCity] = useState(''); // as the state of city city will change.
    const [wdata , setWdata] = useState({}); // intial weather is an empty object.
    

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=74382af856f0d02d7f684c901b965614`;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setWdata(data);
            console.log(data);
            
        } )
        .catch(err => console.log(err));
    },
    [city]  

    );

    return(
        <>
        <div className='citydata'>
            <div className='inputdata'>
                <input 
                className = 'inputfield'
                name = 'inputcity'
                type = 'city'
                placeholder = 'city name'
                onChange ={(event)=> setCity(event.target.value)}
                
                />
            </div>

        </div>
        {(wdata)?(
        <div>
            {wdata.main ?(
                <div className='winfo'>
                <h2 className='location'>
                {wdata.name} 
                </h2>
                <h1 className='temp'>
                     {wdata.main.temp}°C
                </h1>
                <h4 className='minmaxtemp'>
                Min Temp {wdata.main.temp_min}°C | Max Temp{wdata.main.temp_max}°C
                </h4>
                </div>
            ):('')}
            

            
            {wdata.wind ? (
                <h3 className='windspeed'>
                Wind Speed - {wdata.wind.speed}m/s
            </h3>
            ):('')
            }
            
      
        </div>
        ): ('')
        }
        
        </>

    );
}
