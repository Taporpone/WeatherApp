import {
    FETCH_WEATHER_FULFILLED,
    FETCH_WEATHER_REJECTED,
    FETCH_COMPARISION_WEATHER_FULFILLED
} from '../Actions/apiCalls_actions';

const initialState = {
    cityWeather: [],
    comparisionWeather: [],
    error: null
};

const apiCallsReducer = function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_FULFILLED:
            return Object.assign({}, state, { cityWeather: action.payload, error: null });
        case FETCH_WEATHER_REJECTED:
            return Object.assign({}, state, { error: action.payload });
        case FETCH_COMPARISION_WEATHER_FULFILLED:
            return Object.assign({}, state, { comparisionWeather: action.payload });
        default:
            return state;
    }
};

export default apiCallsReducer;