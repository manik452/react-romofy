import { Link } from "react-router-dom"
import BottomHeader from "./header/BottomHeader"
import MiddleHeader from "./header/MiddleHeader"
import TopHeader from "./header/TopHeader"
import { getOpenHour } from '../api/axios';
import React, { useEffect, useState } from 'react';
import Jokes from "./jokes/Jokes";
import axios from "../api/axios";
import useAxios from "../hooks/useAxios";


const Header = (props) => {
    const [startHourtime, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: '/openHour',
        requestConfig: {
            headers: {
                'Content-Language': 'en-US'
            }
        }
    })
    
    return (
        <header>
            {/*<!-- header inner -->*/}
            <div className="header">
                {/*<Jokes />*/}
                <TopHeader openHour={startHourtime?.startHourtime} />
                
                <MiddleHeader />
                <BottomHeader  />
            </div>
        </header>

    )
}

export default Header
