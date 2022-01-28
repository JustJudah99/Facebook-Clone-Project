import React from 'react'
import { Link } from 'react-router-dom';
import {initialUIState} from '../../context/UIContext';
import Icon from '../Svg/Icon'
import SearchIconWhite from '../Svg/SearchIcon';
import "./styles.css"

const Navbar = () => {
    return (
        <div className={initialUIState.darkMode ? "navbar__darkMode" : "navbar__whiteMode"}>
            <div className="navbar__container">
                <Link to="/"><Icon/></Link>
                <div className={initialUIState.darkMode ? "searchBox__darkMode" : "searchBox__whiteMode"} id='searchBox'>
                    <SearchIconWhite />
                    <input type="search" name="" id="" placeholder='Buscar en Facebook' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
