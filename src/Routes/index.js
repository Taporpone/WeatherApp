import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SearchBar from '../Container/SearchBar';
import CityWeather from '../Container/CityWeather';
import WelcomeScreen from '../Presentation/WelcomeScreen';
import NotFound from '../Presentation/NotFound';

export default (
    <Route path='/' component={SearchBar}>
        <IndexRoute component={WelcomeScreen} />
        <Route path=':city'>
            <IndexRoute component={CityWeather} />
        </Route>
        <Route path='*' component={NotFound} />
    </Route>
);