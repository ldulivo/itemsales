import Link from "next/link";

import Section from "../../layouts/Section";

export default function Dashboard({URL, products}) {

  return (
    <div>
        <h2>dashboard</h2>
        <Section 
            white
            title="Resumen"
          >
              <Link
                href={`${URL}/admin/product`}
              >
                  <a>
                    <p>Productos: <span>{products}</span></p>
                  </a>
              </Link>
          </Section>
    </div>
  )
}

export async function getServerSideProps() {

    const URL = process.env.SERVER;

    const resProducts = await fetch(`${URL}/api/products/count`);
    const products = await resProducts.json();


    return {
        props: {
            URL,
            products
        }
    }
}
