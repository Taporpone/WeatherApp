import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather, fetchComparisionWeather } from '../Actions/apiCalls_actions';

import WeatherPresentation from '../Presentation/WeatherPresentation';
import CityNotFound from '../Presentation/CityNotFound';


class CityWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.params.city
        };
    }
    componentWillMount() {
        this.props.dispatch(fetchWeather(this.props.params.city));
        this.props.dispatch(fetchComparisionWeather());
    }
    componentDidUpdate(prevProps) {
        if (prevProps === undefined) {
            return false;
        }
        if (this.state.city !== this.props.params.city) {
            this.props.dispatch(fetchWeather(this.props.params.city));
            this.setState({ city: this.props.params.city });
        }
    }
    compareWeather(base, compared) {
        // Handle rejected API call 
        if (isNaN(base) || isNaN(compared)) {
            return '??';
        }
        if (base > compared) {
            return `- ${Math.round(base - compared)}`;
        } else if (base === compared) {
            return '0';
        } else {
            return `+ ${Math.round(compared - base)}`;
        }
    }
    render() {
        if (this.props.error !== null) {
            return <CityNotFound />;
        }
        return (
            <WeatherPresentation
                compareWeather={this.compareWeather.bind(this)}
                cityWeather={this.props.cityWeather}
                comparisionWeather={this.props.comparisionWeather}
            />
        );

    }

}

const mapStateToProps = function (store) {
    return {
        cityWeather: store.apiCallsReducer.cityWeather,
        comparisionWeather: store.apiCallsReducer.comparisionWeather,
        error: store.apiCallsReducer.error
    };
};

export default connect(mapStateToProps)(CityWeather);
