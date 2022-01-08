import React from 'react'
import "./CheckBox.scss"
const CheckBox = ({
    index,
    color,
    circle
}) => {
    return (
        <div className={circle? "checkbox circle" : "checkbox"}>
            <input id={`checkbox-${index}`} type="checkbox" />
            <label
                htmlFor={`checkbox-${index}`}>
                <span
                    className={color === "blue" ? "blue"
                    : color === "pink"? "pink"
                    :  color === "yellow"? "yellow"
                    : color === "orange"? "orange"
                    :  color === "brown"? "brown"
                    :  color === "green"? "green"
                    :  color === "purple"? "purple"
                    :  color === "sky"? "sky"
                    : null}
                ></span>
            </label>
        </div>
    )
}
export default CheckBox