import React from 'react';
import { Link } from "react-router-dom";

const Nav = ()=> {
    return (
        <div className="nav flex j_between a_center">
            <div className="logo">
                <a href="/#" className="grad_color"> Hichem LAOUAR</a>
            </div>
            <Link to="/contact" className="say_hello grad_color">
                Say Hello
            </Link>
            {/*
                <div className="burger_menu">
                    <div className="burger"></div>
                    <div className="burger"></div>
                    <div className="burger"></div>
                </div>
            */}
            
       
        </div>
 
    );

}

export default Nav;