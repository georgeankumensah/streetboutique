import react from "react";
import logoimage from "./images/logoimage.png"

function Nav() {
    return (
        <div className="nav">
            <div className="logo">
                <img src={logoimage} alt="street boutique" />
            </div>
            <div className="lower-bar">
                <div className="search-bar">
                    <i className="fas-fa-search">
                        <input type="search" name="search" id="search"/>
                        <label for="search">search for </label>
                        
                    </i>
                </div>
            </div>
        </div>
    )
}

export default Nav;