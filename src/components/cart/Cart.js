import React, {useState} from "react"
import "./cart.css"
import nodeJS from "../../apis/nodeJS"


const Cart = ({cartData, onCartDataRemoval, emptyCart})=>{
    const [alert, setAlert] = useState(false)
    const [alertFailure, setAlertFailure] = useState(false)
    const onRemoveFromCart = (index)=>{
        onCartDataRemoval(index)
    }

    const onPlaceOrder= async ()=>{
    const returnObject = {
        orderId: 1,
        orderDetails: cartData
    }
       try{
        const response = await nodeJS.post("/post_order", returnObject)
        if(response.data.message === "Order is placed successfully"){
            setTimeout(()=>{
                setAlert(false)
                emptyCart()
              }, 2000)
              setAlert(true)
        }
        else{
            setTimeout(()=>{
                setAlertFailure(false)
              }, 2000)
              setAlertFailure(true)
        }
       }
       catch(err){
        setTimeout(()=>{
            setAlertFailure(false)
          }, 2000)
          setAlertFailure(true)
    }
         
    }
    const renderList = ()=>{
        return cartData.map((product, index)=>{
            return(
                <div className="product-card" key={index}>
                    <div className="product-info">
                        <h2 className="product-title">{ product.name }</h2>
                        <div className="product-height">
                        <p className="product-desc">Pizza Base: { product.base }</p>
                        <p className="product-desc">Pizza Sauce: { product.sauce }</p>
                        <p className="product-desc">Pizza Cheese: { product.cheese }</p>
                        {product.vegToppings.length > 0 ?<p className="product-desc">Veg Toppings: { product.vegToppings.join(",") }</p> : null}
                        {product.nonVegToppings.length > 0 ? <p className="product-desc">Non-Veg Toppings: { product.nonVegToppings.join(",") }</p> : null}
                        
                        </div>
                        <p className="product-price"  style={{ textTransform: "none", fontWeight:"150px"}}>Rs { product.price }</p>
                        <button className="product-button" onClick={()=>onRemoveFromCart(index)}>Delete</button>
                    </div>  
                </div>
            )
        })
    }

    const calculateAmount = ()=>{
        let totalAmount = 0
        for(let data of cartData){
            totalAmount += data.price
        }
        return totalAmount
    }
    if (cartData.length === 0){
        return (
            <div className="product-container glbal-styles">
                <h1 className="product-heading">Your Cart is Empty</h1>
                <div className="d-flex justify-content-center">
                <a href="/menu">
                        <button className="product-button">
                            Place Order
                        </button>
                </a>
                </div>
               
            </div>
        )
    }
    return(
        <React.Fragment>
        <div className="product-container glbal-styles">
            <h1 className="product-heading">Your Cart</h1>
            <div className="product-wrapper">
                 {renderList()}
             </div>
             <p className="product-price"  style={{ textTransform: "none", textAlign:"center"}}>Total Amount: Rs {calculateAmount()}</p>
             <div className="d-flex justify-content-center">
                
                <button className="product-button" onClick={()=>onPlaceOrder()}>Place Order</button>
             </div>
        </div>
        {alert ? <div role="alert" className="alert alert-success myAlert-bottom"><strong>Order is placed</strong></div> : null }
        {alertFailure ? <div role="alert" className="alert alert-danger myAlert-bottom"><strong>Request Failed</strong></div> : null }

        </React.Fragment>
    )
}

export default Cart