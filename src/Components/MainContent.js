import React from 'react'
import product_card from '../Components/ProductCard'

export default function MainContent() {
    const listItems = product_card.map((item)=>
            <div className="card">
                <div className="card_img">
                   <img src={item.thumb} />
                </div>
                <div className="card_body">
                    <h2 className="card_heading">{item.product_name}</h2>
                    <p className="description">{item.description}</p>
                    <p className='price'>{item.price} <span>{item.currency}</span></p>
                    <a href="/">Add to Cart</a>
                </div>
            </div>    
    )  
    return (
        <>              
            <div className="main_content">            
                {listItems}
            </div>
        </>
        
    )
}
