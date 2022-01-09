import React, { useState } from 'react'

const Search = (props) => {
    const [search, setSearch] = useState(props.keyword)
    
    const onChange = event => {
        setSearch(event.target.value)
    }
    const onKeyDown = event => {
        if(event.key === "Enter"){
            props.changHandleSearch(search)
        }
    }
    const handleSearch = event => {
        props.changHandleSearch(search)
    }
    return (
        <div>
            <input
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={search}
            />
            <span
                onClick={handleSearch}
            >
                <i className="fas fa-search"></i>
            </span>
        </div>
    )
}

export default Search
