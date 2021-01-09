import React from "react"

import "./menu.css"
import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';

const productData = [
  {
    img: product1,
    alt: 'Pizza',
    name: 'Supreme Pizza',
    desc:
      'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$19.99',
    button: 'Add to Cart'
  },
  {
    img: product2,
    alt: 'Pizza',
    name: 'Hawaiian Paradise',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$16.99',
    button: 'Add to Cart'
  },
  {
    img: product3,
    alt: 'Pizza',
    name: 'Veggie Overload',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$14.99',
    button: 'Add to Cart'
  },
  {
    img: product1,
    alt: 'Pizza',
    name: 'Supreme Pizza',
    desc:
      'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$19.99',
    button: 'Add to Cart'
  },
  {
    img: product2,
    alt: 'Pizza',
    name: 'Hawaiian Paradise',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$16.99',
    button: 'Add to Cart'
  },
  {
    img: product3,
    alt: 'Pizza',
    name: 'Veggie Overload',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$14.99',
    button: 'Add to Cart'
  }
];



const Menu = ()=>{
    const renderList = ()=>{
        return productData.map((product, index)=>{
            return(
                <div className="product-card" key={index}>
                    <img src={product.img} alt={product.alt} className="product-image"></img>
                    <div className="product-info">
                        <h2 className="product-title">{ product.name }</h2>
                        <p className="product-desc">{ product.desc }</p>
                        <p className="product-price">{ product.price }</p>
                        <button className="product-button">Add to Cart</button>
                    </div>  
                </div>
            )
        })
    }

    return(
       <div className="product-container glbal-styles">
           <h1 className="product-heading">Choose your favorite</h1>
           <div className="product-wrapper">
                {renderList()}
            </div>
       </div>
    )
}

export default Menu