import React from 'react';

const style = {
    display: 'flex',
    justifyContent: 'center',
    font: 'normal 16px/normal "Times New Roman", Times, serif'
};

const WelcomeScreen = () => (
    <div style={style}>
        <h1>Type in city you want to look up and hit Search</h1>
    </div>
);

export default WelcomeScreen;
