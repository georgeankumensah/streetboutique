import react from "react";
import logoimage from "../components/nav/images/logoimage.png"
import Appstore from "../images/app-store.png"
import Playstore from "../images/play-store.png"
import developers from "../images/crawler-night.jpg"
import facebook from "../images/facebook-icon.png"
import instagram from "../images/facebook-ico.png"
import twitter from "../images/facebook.png"




function Footer(){
    return(
        <div className="footer">
                <div className="column-1">
                    <h4>Download Our App</h4>
                    <br />
                    <p>Download Our App for Android and IOS Devices</p>
                    <br />
                    <div className="appstores">
                        <img src={Appstore} alt="" />
                        <img src={Playstore} alt="" />
                    </div>
                </div>
                <div className="column-2">
                    <div className="label">
                    <img src={logoimage} alt="street boutique" />
                    </div>
                    <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing hedjf kljfd.</p>
                    </div>
                </div>
                <div className="column-3">
                    <div className="support">
                        <h4>Support Us With Your Ideas</h4>
                        <br />
                        <br />
                        <button>CONTACT US</button>
                        <br />
                    </div>
                    <h4>FOLLOW US</h4>
                    <div className="follow-us">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <hr/>
                    <div className="copyright">
                        <div>
                        <img src={developers} alt="" />
                        </div>
                        <p>Copyright &copy; 2022 - Crawler ware</p>
                    </div>
        </div>
    )
}

export default Footer;