import "./Header.css"

export default function Header(){
    return (
        <div className="Header">
            <div className="Logo">
                <p>Apex<span>charts</span></p>
            </div>
            <div className="Navbar">
                <p>Docs</p>
                <p>Line Chart</p>
                <p>Area Chart</p>
                <p>Column Chart</p>
                <p>Candlestick</p>
                <p>Pie / Donut</p>
                <p>Synchronized charts</p>
                <p>Polar Area Charts</p>
            </div>
        </div>
    );
}