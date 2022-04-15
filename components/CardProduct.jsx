import Image from "next/image";

import CardProductStyle from '../styles/CardProduct.module.css';

export default function CardProduct({products}) {
  return (
    <div className={CardProductStyle.CardProduct}>
    {
        products.map( product => 
          <div key={product._id}>
              <Image 
                  src='/assets/img/001.jpg'
                  alt="Cerveza Artezanal"
                  width={100}
                  height={100}
              />
              <h3>{product.title}</h3>
              <span>{`$${product.price}`}</span>
              <p>{product.description}</p>
          </div> )
    }
    </div>
  )
}
