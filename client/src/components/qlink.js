import * as React from 'react';
import { NavLink, useSearchParams, useLocation } from "react-router-dom";

export default function QLink (props) {
    let [ searchParams, setSetSearchParams ] = useSearchParams();
    let location = useLocation();
    let isActive = (location.pathname === props.to)? true : false;
    
    return (
        <NavLink style={{color: isActive? "blue":""}} {...props} />
    );
}