import "./Header.css"

export default function Header(){

    const navbarText = ["Docs","Line Chart","Area Chart","Column Chart","Candlestick","Pie / Donut","Synchronized charts","Polar Area Charts"]

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
                    navbarText.map((value,index)=>(
                        <p onClick={()=>{ navbarActive(index) }}>{value}</p>
                    ))
                }
            </div>
        </div>
    );
}