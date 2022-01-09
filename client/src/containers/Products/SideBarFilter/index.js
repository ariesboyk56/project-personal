import React from 'react'
import SideBar from './SideBar'
import SideItem from './SideItem'
import classes from "./SideBarFilter.module.scss"
import CheckBox from './CheckBox'
import BasicRating from '../Rating'
const SideBarFilter = () => {
    return (
            <div className={classes.sideBarFilter}>
                <SideBar title="Product Brand">
                    <SideItem text="Coaster Furniture">
                        <CheckBox index="1" color="blue"/>
                    </SideItem>
                    <SideItem text="Fusion Dot High Fashion">
                        <CheckBox index="2" color="blue"/>
                    </SideItem>
                    <SideItem text="Unique Furnitture Restor">
                        <CheckBox index="3" color="blue"/>
                    </SideItem>
                    <SideItem text="Dream Furnitture Flipping">
                        <CheckBox index="4" color="blue"/>
                    </SideItem>
                    <SideItem text="Young Repurposed">
                        <CheckBox index="5" color="blue"/>
                    </SideItem>
                    <SideItem text="Green DIY furniture">
                        <CheckBox index="6" color="blue"/>
                    </SideItem>
                </SideBar>

                <SideBar title="Discount Offer">
                    <SideItem text="20% Cashback">
                        <CheckBox index="7" color="pink"/>
                    </SideItem>
                    <SideItem text="5% Cashback Offer">
                        <CheckBox index="8" color="pink"/>
                    </SideItem>
                    <SideItem text="25% Discount Offer">
                        <CheckBox index="9" color="pink"/>
                    </SideItem>
                </SideBar>

                <SideBar title="Rating Item">
                <SideItem text={<BasicRating start="4"/>}>
                        <CheckBox index="10" color="yellow"/>
                    </SideItem>
                    <SideItem text={<BasicRating start="3"/>}>
                        <CheckBox index="11" color="yellow"/>
                    </SideItem>
                    <SideItem text={<BasicRating start="2"/>}>
                        <CheckBox index="12" color="yellow"/>
                    </SideItem>
                </SideBar>

                <SideBar title="Categories">
                    <SideItem text="Prestashop">
                        <CheckBox index="13" color="pink"/>
                    </SideItem>
                    <SideItem text="Magento">
                        <CheckBox index="14" color="pink"/>
                    </SideItem>
                    <SideItem text="Bigcommerce">
                        <CheckBox index="15" color="pink"/>
                    </SideItem>
                    <SideItem text="osCommerce">
                        <CheckBox index="16" color="pink"/>
                    </SideItem>
                    <SideItem text="3dcart">
                        <CheckBox index="17" color="pink"/>
                    </SideItem>
                    <SideItem text="Bags">
                        <CheckBox index="18" color="pink"/>
                    </SideItem>
                    <SideItem text="Accessories">
                        <CheckBox index="19" color="pink"/>
                    </SideItem>
                    <SideItem text="Jewellery">
                        <CheckBox index="20" color="pink"/>
                    </SideItem>
                    <SideItem text="Watches">
                        <CheckBox index="21" color="pink"/>
                    </SideItem>
                </SideBar>

                <SideBar title="Price Filter">
                    <SideItem text="$0.00 - $150.00">
                        <CheckBox index="22" color="pink"/>
                    </SideItem>
                    <SideItem text="$150.00 - $350.00">
                        <CheckBox index="23" color="pink"/>
                    </SideItem>
                    <SideItem text="$150.00 - $504.00">
                        <CheckBox index="24" color="pink"/>
                    </SideItem>
                    <SideItem text="$450.00 +">
                        <CheckBox index="25" color="pink"/>
                    </SideItem>
                </SideBar>

                <SideBar title="Filter By Color">
                    <SideItem text="Blue">
                        <CheckBox index="26" circle color="blue"/>
                    </SideItem>
                    <SideItem text="Orange">
                        <CheckBox index="27" circle color="orange"/>
                    </SideItem>
                    <SideItem text="Brown">
                        <CheckBox index="28" circle color="brown"/>
                    </SideItem>
                    <SideItem text="Green">
                        <CheckBox index="29" circle color="green"/>
                    </SideItem>
                    <SideItem text="Purple">
                        <CheckBox index="30" circle color="purple"/>
                    </SideItem>
                    <SideItem text="Sky">
                        <CheckBox index="31" circle color="sky"/>
                    </SideItem>
                </SideBar>
            </div>
    )
}
export default SideBarFilter
