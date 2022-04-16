import Link from "next/link";
import { useState } from "react";
import CardProduct from "../../../components/CardProduct";

import Section from "../../../layouts/Section";

import ProductsIndexStyle from '../../../styles/ProductsIndex.module.css';

export default function ProductsIndex({URL, products}) {
    const [newProducts, setNewProducts] = useState(products)

    const listRefresh = async() => {
        const resProducts = await fetch(`${URL}/api/products/index_all`);
        const products = await resProducts.json();
        setNewProducts(products);
    }

  return (
    <div className={ProductsIndexStyle.ProductsIndex}>

        <Section 
        white
        title="Productos"
        >
        {
            (newProducts.length > 0)
              ? 
                <CardProduct
                    products={newProducts}
                    controls="admin"
                    URL={URL}
                    listRefresh={listRefresh}
                />
              : <p>No hay datos para mostrar</p>
        }
        
        </Section>

    </div>
  )
}

export async function getServerSideProps() {

    const URL = process.env.SERVER;

    const resProducts = await fetch(`${URL}/api/products/index_all`);
    const products = await resProducts.json();


    return {
        props: {
            URL,
            products
        }
    }
}
