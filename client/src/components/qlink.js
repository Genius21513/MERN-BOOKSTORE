import * as React from 'react';
import { NavLink } from "react-router-dom";

export default function QLink (props) {
    return (
        <NavLink style={
            ({isActive}) => {
                return {
                    color: isActive? "blue":""
                };
            }
        } {...props} />
    );
}