import './TopHeader.css';
import {WiHumidity} from 'react-icons/wi';
import {FaWind} from 'react-icons/fa';

import {formatDate} from '../../../services/dateService';
import {Link} from 'react-router-dom';
import {useContext, useState} from 'react';
import {AuthContext} from '../../../contexts/AuthContext';


import {Nav} from 'react-bootstrap';

function TopHeader() {
    const {user} = useContext(AuthContext);
    //   const [weatherData, setWeatherData] = useState(null);
    const [weatherData, setWeatherData] = useState({
        location: {
            name: 'London',
            region: 'City of London, Greater London',
            country: 'United Kingdom',
            lat: 51.52,
            lon: -0.11,
            tz_id: 'Europe/London',
            localtime_epoch: 1613896955,
            localtime: '2021-02-21 8:42',
        }, current: {
            last_updated_epoch: 1613896210,
            last_updated: '2021-02-21 08:30',
            temp_c: 11,
            temp_f: 51.8,
            is_day: 1,
            condition: {
                text: 'Partly cloudy', icon: '//cdn.weatherapi.com/weather/64x64/day/116.png', code: 1003,
            },
            wind_mph: 3.8,
            wind_kph: 6.1,
            wind_degree: 220,
            wind_dir: 'SW',
            pressure_mb: 1009,
            pressure_in: 30.3,
            precip_mm: 0.1,
            precip_in: 0,
            humidity: 82,
            cloud: 75,
            feelslike_c: 9.5,
            feelslike_f: 49.2,
            vis_km: 10,
            vis_miles: 6,
            uv: 1,
            gust_mph: 10.5,
            gust_kph: 16.9,
            air_quality: {
                co: 230.3,
                no2: 13.5,
                o3: 54.3,
                so2: 7.9,
                pm2_5: 8.6,
                pm10: 11.3,
                'us-epa-index': 1,
                'gb-defra-index': 1,
            },
        },
    });
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    //   https://www.weatherapi.com/

    //   useEffect(() => {
    //     // Fetch weather data from the API
    //     const fetchWeatherData = async () => {
    //       try {
    //         const response = await fetch(`https://api.example.com/weather?apiKey=${apiKey}`);
    //         setWeatherData(response.data);
    //       } catch (error) {
    //         console.error('Error fetching weather data:', error);
    //       }
    //     };

    //     fetchWeatherData();
    //   }, [apiKey]);

    //   if (!weatherData) {
    //     return <div>Loading...</div>;
    //   }

    // Render weather information


    const anonymous = (<div className="userButtons">
        <Nav.Link as={Link} to="/search">
            Search
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
            Login
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
            Register
        </Nav.Link>


    </div>);

    const loggedUser = (<div className="userButtons">
        <Nav.Link as={Link} to="/search">
            Search
        </Nav.Link>

        <p className="nav__user">Welcome {user.username}!</p>
        <Nav.Link as={Link} to="/logout">
            Logout
        </Nav.Link>

    </div>);
    return (<section className="topHeader">
        <ul className="weather">
            <li className="topHeader__location">{weatherData.location.name}</li>
            <li className="topHeader__conditionAndTemp">
                <img src={weatherData.current.condition.icon} alt=""/>
                {weatherData.current.temp_c}°C
            </li>
            <li className="topHeader__humidity">
                <WiHumidity/>
                &nbsp;<span>{weatherData.current.humidity}%</span>
            </li>
            <li className="topHeader__wind">
                <FaWind/>
                &nbsp;<span>{weatherData.current.wind_kph}</span>
            </li>
            <li className="topHeader__time">{formatDate(weatherData.location.localtime)}</li>
        </ul>
       

        <div>
            {user.email !== '' ? loggedUser : anonymous}
        </div>
    </section>);
}

export default TopHeader;
