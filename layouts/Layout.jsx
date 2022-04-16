import Head from "next/head";
import SvgBeer from "../components/svg/SvgBeer";
import SvgHome from "../components/svg/SvgHome";
import SvgMaps from "../components/svg/SvgMaps";
import SvgMenu from "../components/svg/SvgMenu";
import SvgShopify from "../components/svg/SvgShopify";
import SvgShopping from "../components/svg/SvgShopping";
import SvgShoppingBag from "../components/svg/SvgShoppingBag";
import styleLayout from "../styles/Layout.module.css";

export default function Layout({children, home}) {
  return (
    <div className={styleLayout.layout}>
        <Head>

            <title>ItemSales</title>
            <meta name="description" content="Item Sales" />
            <link rel="icon" href="/favicon.ico" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet" />

        </Head>

        <div className={styleLayout.container}>
            <header>
                {
                    (home)
                        ? <h1>Romeo Beer</h1>
                        : <h1>No home</h1>
                }
            </header>
            <main>
                {children}
            </main>
            <footer className={styleLayout.footer}>
                footer
                <div className={styleLayout.no__footer_nav}></div>
            </footer>
        </div>

        <nav className={styleLayout.nav}>
            <ul className={styleLayout.nav__ul}>
                <li>
                    <SvgHome />
                    <p>Inicio</p>
                </li>
                <li>
                    <SvgBeer />
                    <p>Sobre mi</p>
                </li>
                <li className={styleLayout.shopify}>
                    <SvgShoppingBag color="#9dcf48"/>
                    <p>Mi compra</p>
                </li>
                <li>
                    <SvgMaps />
                    <p>Mapa</p>
                </li>
                <li>
                    <SvgMenu />
                    <p>Menú</p>
                </li>
            </ul>
        </nav>
    </div>
  )
}
