import React from 'react'
import classes from "./NavBarFilter.module.scss"
const NavBarFilter = (props) => {
    
    return (
        <div className={classes.navBarFilter}>
            <div className={classes.info}>
                <h3>Ecommerce Acceories &amp; Fashion item </h3>
                <span>About 9,620 results (0.62 seconds)</span>
            </div>
            <div className={classes.filter}>
                <span>Per Page:</span>
                <input className={classes.perPage} type="text" name="" id="per-page" required="required" />
                <span>Sort By:</span>
                <select name="" id="select" required="required">
                    <option>Best Match</option>
                </select>
                {/* <i class="fas fa-chevron-down"></i> */}
                <span>View:</span>
                <span
                    onClick={()=>props.cbContent("grid")}
                    className={classes.viewGrid}
                >
                    <i className="fas fa-th-large"></i>
                </span>
                <span
                    onClick={()=>props.cbContent("list")}
                    className={classes.viewList}
                >
                    <i className="fas fa-list"></i>
                </span>

                <input type="text" name="" id="search" required="required" />
            </div>
        </div>
    )
}

export default NavBarFilter
