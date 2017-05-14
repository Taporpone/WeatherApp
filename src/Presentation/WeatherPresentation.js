import React from 'react';
import _ from 'lodash';
import './css/WeatherPresentation.css';

const WeatherPresentation = (props) => {
    const { cityWeather, comparisionWeather, compareWeather } = props;
    const temp = 'main.temp';
    const pres = 'main.pressure';
    const humi = 'main.humidity';

    return (
        <div className='container-Weather'>
            <table>
                <tr>
                    <th></th>
                    <th>{cityWeather.name}</th>
                    <th>{_.get(comparisionWeather, 'list[0].name')}</th>
                    <th>{_.get(comparisionWeather, 'list[1].name')}</th>
                    <th>{_.get(comparisionWeather, 'list[2].name')}</th>
                </tr>
                <tr>
                    <td>Temperature(C)</td>
                    <td>{_.get(cityWeather, temp)}</td>
                    <td>{compareWeather(_.get(cityWeather, temp), _.get(comparisionWeather, 'list[0].main.temp'))}</td>
                    <td>{compareWeather(_.get(cityWeather, temp), _.get(comparisionWeather, 'list[1].main.temp'))}</td>
                    <td>{compareWeather(_.get(cityWeather, temp), _.get(comparisionWeather, 'list[2].main.temp'))}</td>
                </tr>
                <tr>
                    <td>Pressure(Pa)</td>
                    <td>{_.get(cityWeather, pres)}</td>
                    <td>{compareWeather(_.get(cityWeather, pres), _.get(comparisionWeather, 'list[0].main.pressure'))}</td>
                    <td>{compareWeather(_.get(cityWeather, pres), _.get(comparisionWeather, 'list[1].main.pressure'))}</td>
                    <td>{compareWeather(_.get(cityWeather, pres), _.get(comparisionWeather, 'list[2].main.pressure'))}</td>
                </tr>
                <tr>
                    <td>Humidity(%)</td>
                    <td>{_.get(cityWeather, humi)}</td>
                    <td>{compareWeather(_.get(cityWeather, humi), _.get(comparisionWeather, 'list[0].main.humidity'))}</td>
                    <td>{compareWeather(_.get(cityWeather, humi), _.get(comparisionWeather, 'list[1].main.humidity'))}</td>
                    <td>{compareWeather(_.get(cityWeather, humi), _.get(comparisionWeather, 'list[2].main.humidity'))}</td>
                </tr>
            </table>
        </div>
    );
};

export default WeatherPresentation;