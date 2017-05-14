import React from 'react';

const style = {
    display: 'flex',
    justifyContent: 'center',
    font: 'normal 16px/normal "Times New Roman", Times, serif'
};

const CityNotFound = () => (
    <div style={style}>
        <h1>I'm afraid there is no such city</h1>
    </div>
);

export default CityNotFound;