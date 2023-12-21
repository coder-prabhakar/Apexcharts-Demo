import "./Header.css"
import { Link } from "react-router-dom";

export default function Header(){

    const navbarText = [
        { path:"docs", name:"Docs" },
        { path:"lineChart", name:"Line Chart" },
        { path:"areaChart", name:"Area Chart" },
        { path:"columnChart", name:"Column Chart" },
        { path:"candlestick", name:"Candlestick" },
        { path:"donut", name:"Pie / Donut" },
        { path:"synchronizedChart", name:"Synchronized Chart" },
        { path:"polarAreaChart", name:"Polar Area Chart" }
    ];

    function navbarActive(index){
        const navbarList = document.querySelectorAll(".Navbar > p")
        navbarList.forEach((navbarItem)=> {
            navbarItem.classList.remove("navbar-active");
        })
        navbarList[index].classList.add("navbar-active")
    }

    return (
        <div className="Header">
            <div className="Logo">
                <p>Apex<span>charts</span></p>
            </div>
            <div className="Navbar">
                {
                    navbarText.map((Item,index)=>(
                        <p onClick={()=>{ navbarActive(index) }}><Link className="link" to={`/${Item.path}`}>{Item.name}</Link></p>
                    ))
                }
            </div>
        </div>
    );
}