import React from 'react'

const FormSubmitComponent = props => {
    return (
        <div className="right">
            <div className="title">Weather Finder</div>
            <div className="input-fields">
                <form onSubmit={props.getWeatherData}>
                    <select className="input" name="city">
                        <option value="null">select..</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Mymensingh">Mymensingh</option>
                    </select>
                    <button className="btn" type="submit">Show Weather</button>
                </form>
            </div>
        </div>
    )
}

export default FormSubmitComponent;
