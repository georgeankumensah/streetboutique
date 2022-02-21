import react from "react";
import Box from "./product-box/box";
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';
import image5 from '../images/image-5.jpg';
import image6 from '../images/image-5.jpg';
import { render } from "@testing-library/react";

function Product() {
    render(
        <div className="product">

            <div className="p-heading">
                <p>New In Da Shop</p>
            </div>

            <div className="product-container">
                <Box image={image1} name='product-name' price='GHS 450'/>
                <Box image={image2} name='product-name' price='GHS 450'/>
                <Box image={image3} name='product-name' price='GHS 450'/>
                <Box image={image4} name='product-name' price='GHS 450'/>
                <Box image={image5} name='product-name' price='GHS 450'/>
                <Box image={image6} name='product-name' price='GHS 450'/>
            </div>

        </div>
    )
}

export default Product;