

const Cart = ({name, price, id, count, delRemoveCart, addToCard}) =>{
    let prices = count * price;
    return(
        <div >
            <div>{count} Entradas</div>
            <div style={{display: "flex" }}>
                <p style={{padding: "0px 20px", fontSize:"10px" }}>{name}</p>
                <h4>$ {price}</h4>
                <button onClick={()=>delRemoveCart(id, true)}>elTod</button>
                <button onClick={()=>delRemoveCart(id)}>elOne</button>
                <button onClick={()=>addToCard(id)}>addOne</button>
                
            </div>
            <hr />
        </div>
    )
}

export default Cart;