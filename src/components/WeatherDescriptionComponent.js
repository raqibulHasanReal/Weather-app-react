import React from 'react'

const WeatherDescriptionComponent = (props) => {
    return (
        <div className={`left ${props.class}`}>
            <div className="title">Weather Report</div>
            <div className="weather-desc">
                <p> temperature: <span className="margin-left-10">{ props.temperature }</span></p>
                <p> description: <span className="margin-left-10">{ props.description }</span></p>
                <p> city: <span className="margin-left-10">{ props.city }</span></p>
                <p> wind: <span className="margin-left-10">{ props.wind }</span></p>
            </div>
        </div>
    )
}

export default WeatherDescriptionComponent;
