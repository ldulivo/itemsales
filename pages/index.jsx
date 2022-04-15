import Image from "next/image"
import CardProduct from "../components/CardProduct"

import Layout from "../layouts/Layout"
import Section from "../layouts/Section"

export default function index({products}) {
    console.log(products)
  return (
      <Layout home>

          <Section>
              sección pura
          </Section>

          <Section 
            white
            title="Sabores beer"
          >
              <CardProduct products={products} />
          </Section>

      </Layout>
  )
}

export async function getServerSideProps() {

    //const res = await fetch('http://localhost:3000/api/products');
    const res = await fetch('https://itemsales.vercel.app/api/products');
    const products = await res.json()

    return {
        props: {
            products
        }
    }
}
