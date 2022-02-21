import react from "react";
import cityview from "./video/city3.mp4"

function Background() {
    return(
        <div className="background">
            <video src={cityview} muted autoPla loop></video>
        </div>
    );
}
export default Background;