import React from "react";
import {SiThemoviedatabase} from 'react-icons/si';
import {BiSearchAlt} from 'react-icons/bi';


export default function Header() {

    return (
        <header>
        <SiThemoviedatabase className='icon'/>
        <div className='search'>
          <BiSearchAlt className='search-icon'/>
          <input type="text" placeholder='Search'></input>
        </div>
        </header>
    )
}