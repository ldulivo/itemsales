import Image from "next/image";

import CardProductStyle from '../styles/CardProduct.module.css';
import AdminButtons from "./AdminButtons";
import ClientsButtons from "./ClientsButtons";

export default function CardProduct({products, controls, URL}) {
  return (
    <div className={CardProductStyle.CardProduct}>
    {
        products.map( product => 
          <div 
            key={product._id} 
            className={product.active ? null : CardProductStyle.deactive}
          >
              <Image 
                  src='/assets/img/001.jpg'
                  alt="Cerveza Artezanal"
                  width={100}
                  height={100}
              />
              <h3>{product.title}</h3>
              <span>{`$${product.price}`}</span>
              <p>{product.description}</p>
              {
                (controls === "admin")
                  ? <AdminButtons 
                      id={product._id}
                      active={product.active}
                      URL={URL}
                    />
                  : <ClientsButtons/>
              }
          </div> )
    }
    </div>
  )
}
