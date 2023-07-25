import './TopHeader.css';
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import { Nav } from 'react-bootstrap';

function TopHeader() {
    const { user } = useContext(AuthContext);
    const [weatherData, setWeatherData] = useState();
    const apiKey = '33928f1df10245e4b22150011232407';

    const baseUrl = 'https://api.weatherapi.com/v1/current.json';
    const location = 'Jambol';

    // Construct the API endpoint URL with the API key and location
    const apiUrl = `${baseUrl}?key=${apiKey}&q=${location}&aqi=no`;
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        // Initial fetch
        fetchWeatherData();

        // Fetch every 30 minutes
        const interval = setInterval(() => {
            fetchWeatherData();
        }, 30 * 60 * 1000); // 30 minutes in milliseconds

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [apiUrl]);


    if (!weatherData) {
        console.log(weatherData);
        return <div>Loading...</div>;
    }

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

    const formattedDateAndTime = new Date(weatherData.location.localtime).toLocaleString([], {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return (<section className="topHeader">
        <ul className="weather">
            <li className="topHeader__location">{weatherData.location.name}</li>
            <li className="topHeader__conditionAndTemp">
                <img src={weatherData.current.condition.icon} alt="" />
                {weatherData.current.temp_c}°C
            </li>
            <li className="topHeader__humidity">
                <WiHumidity />
                &nbsp;<span>{weatherData.current.humidity}%</span>
            </li>
            <li className="topHeader__wind">
                <FaWind />
                &nbsp;<span>{weatherData.current.wind_kph}</span>
            </li>
            <li className="topHeader__time">{formattedDateAndTime}</li>

        </ul>


        <div>
            {user.email !== '' ? loggedUser : anonymous}
        </div>
    </section>);
}

export default TopHeader;
