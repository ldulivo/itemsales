/* import Image from 'next/image' */
import CardProduct from '../components/CardProduct'
/* import ClientsButtons from '../components/ClientsButtons' */

import Layout from '../layouts/Layout'
import Section from '../layouts/Section'

export default function index ({ products }) {
  return (
      <Layout home>

          <Section>
              sección pura
          </Section>

          <Section
            white
            title='Sabores beer'
          >
            <CardProduct
                products={products}
                controls='clients'
            />
          </Section>

      </Layout>
  )
}

export async function getServerSideProps () {
  const URL = `${process.env.SERVER}/api/products`

  const res = await fetch(URL)
  const products = await res.json()

  return {
    props: {
      products
    }
  }
}
