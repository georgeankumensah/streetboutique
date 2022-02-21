import react from "react";
function Box(props) {
    return(
        <div className="p-box">
            <img src="{props.image}" alt="product" />
            <p>{props.name}</p>
            <a className="price" href="www.google.com">{props.price}</a>
            <a className="buy-btn" href="www.google.com">Go to store</a>
        </div>
    )
}

export default Box;