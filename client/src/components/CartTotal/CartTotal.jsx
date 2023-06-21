
import { useSelector } from "react-redux";

const CartTotal = () =>{
    const cart = useSelector(state=> state.cart)

    let total = cart.reduce((acc, el) => acc + el.price, 0)
    return (
        <div>
            <h3>{total}</h3>
        </div>
    )
}
export default CartTotal;