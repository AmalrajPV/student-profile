import { useEffect } from "react";
import { useState } from "react";

const Cart = () => {
    const [product, setProduct] = useState(null);

    const updateData = async()=>{
        const res = await axios.get("/your api");
        setProduct(res.data);
    }

    useEffect(()=>updateData, []);

    const deleteProduct = () =>{
        // your api delete call and actions 
        updateData();
    }

    return ( 
        <>
        </>
     );
}
 
export default Cart;