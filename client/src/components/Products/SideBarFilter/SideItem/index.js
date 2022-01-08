import React from 'react'
import "./SideItem.scss"
const SideItem = ({
    text,
    children
}) => {
    return (
        <li>{children}{text}</li>
    )
}
export default SideItem