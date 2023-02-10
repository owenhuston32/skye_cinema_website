import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './css/navbar.css';

function useWindowSize()
{
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [setSize]);

    return size;
}

function HorizontalNavBar(prop)
{
    return (
        <div id='horizontal_nav' className={prop.active ? "horizontal_nav" : "hide"}>
            <Link to="/">
                <button className="hor_nav_item">HOME</button>
            </Link>
            <Link to="/Advertise">
                <button className="hor_nav_item">ADVERTISE WITH US</button>
            </Link>
            <Link to="/Contact">
                <button className="hor_nav_item">CONTACT US</button>
            </Link>
        </div>
    );
}

function useHamburgerToggle()
{
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        const handleToggle = () => {
            console.log(toggle);
            setToggle(!toggle);

        }
        document.getElementById("hamburger").addEventListener("click", handleToggle);

        const button_list = document.querySelectorAll('.vert_nav_item');
        const button_array = [...button_list];

        for(var i = 0; i < button_array.length; i++)
        {
            button_array[i].addEventListener('click', handleToggle);
        }

        return () => {
            document.getElementById("hamburger").removeEventListener("click", handleToggle);
            for(var i = 0; i < button_array.length; i++)
            {
                button_array[i].removeEventListener('click', handleToggle);
            }
        }
    }, [toggle, setToggle]);

    return toggle;
}

function Hamburger(prop)
{
    return (
        <div>
            <div id="hamburger" className={prop.active ? "hamburger" : "hide"}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    );
}

function VerticalNavBarList(prop)
{
    return (<div id="vertical_nav" className= {prop.active ? "vertical_nav" : "hide"} style={{marginTop:40}}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button className="vert_nav_item">HOME</button>
            </Link>
            <Link to="/Advertise" style={{ textDecoration: 'none' }}>
                <button className="vert_nav_item">ADVERTISE WITH US</button>
            </Link>
            <Link to="/Contact" style={{ textDecoration: 'none' }}>
                <button className="vert_nav_item">CONTACT US</button>
            </Link>
        </div>);
}

function Spacer(prop)
{
    return (
        <div className="spacer" style={{width:100, height:prop.height}}></div>
    );
}

function NavBar()
{
    const mobile_screen_width = 700;
    const [width] = useWindowSize();
    const hamburgerToggle = useHamburgerToggle();

    return (

        <div>
            <div className="background"/>
            <div className="title">Skye Cinema</div>
            <HorizontalNavBar active={width >= mobile_screen_width}/>
            <Hamburger active={width < mobile_screen_width}/>
            <VerticalNavBarList active={hamburgerToggle && width < mobile_screen_width}/>
            <Spacer height= {hamburgerToggle && width < mobile_screen_width ? 150 : 40}/>
        </div>
    );
}


export default NavBar;