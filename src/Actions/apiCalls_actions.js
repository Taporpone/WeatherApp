import axios from 'axios';

export const FETCH_WEATHER_FULFILLED = 'FETCH_WEATHER_FULFILLED';
export const FETCH_WEATHER_REJECTED = 'FETCH_WEATHER_REJECTED';
export const FETCH_COMPARISION_WEATHER_FULFILLED = 'FETCH_COMPARISION_WEATHER_FULFILLED';

export function fetchWeather(city) {
    return function (dispatch) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a360b91f87be215f7e93d1c8ef1e9091&units=metric`)
            .then((res) => {
                dispatch({ type: FETCH_WEATHER_FULFILLED, payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: FETCH_WEATHER_REJECTED, payload: err });
            });
    };
}

export function fetchComparisionWeather() {
    return function (dispatch) {
        axios.get('http://api.openweathermap.org/data/2.5/group?id=3099434,3093133,3080866&appid=a360b91f87be215f7e93d1c8ef1e9091&units=metric')
            .then((res) => {
                dispatch({ type: FETCH_COMPARISION_WEATHER_FULFILLED, payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: FETCH_WEATHER_REJECTED, payload: err });
            });
    };
}
