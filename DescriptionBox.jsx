import React from 'react'
import'./DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="description-box-navigator">
            <div className="description-nav-box ">Description</div>
            <div className="description-nav-box fade">Reviews (122)</div>
        </div>
<div className="description-box-description">
    <p>
        An e-commerce website is an online platform that facilitates buying and selling of products and services over the internet servers 
as avirtual marketplace where business and individuals show their products ,interact with customers and  conduct the transactions without the need for a physical prescence.
ecommerce websites have gained an immense popularity   due to their convienient accessibility and the global reach they offer
    </p>
    <p>
      Ecommercdev websites typically display products and services and detailed description,images and prices,an d any available va
      variety (eg : sizes,colors ). Each product usually has its own dedicated page with relevant information.
      </p>
</div>
    </div>
  )
}

export default DescriptionBox