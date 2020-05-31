import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';

import { getFashionProducts } from '../dbFashion.js';
import { getPetProducts } from '../dbFashion';

const fashionProductsList = getFashionProducts();
const petProductsList = getPetProducts();

const cartSum = [
  Cookies.get('ProductDress'),
  Cookies.get('ProductJumpsuit'),
  Cookies.get('ProductFlower'),
  Cookies.get('ProductHarness'),
  Cookies.get('ProductAccessoires'),
  Cookies.get('ProductTags'),
  Cookies.get('ProductTracker'),
];

function Nav() {
  const linkList = [
    { name: 'HOME', url: '/' },
    { name: 'ABOUT', url: '/about' },
    { name: 'FASHION-STORE', url: '/content' },
    { name: 'PET-STORE', url: '/pet' },
    { name: 'USERS', url: '/users' },
    { name: 'CONTACT', url: '/contact' },
  ];
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav className="nav">
        <div className="nav-bar">
          <h1>ZHU</h1>
          <p>FASHION & PET STORE</p>
          <div className="info">
            Fashion-Store: {fashionProductsList.length} <br /> Pet-Store:{' '}
            {petProductsList.length}
            <br /> In Cart: {cartSum.length}
          </div>
        </div>

        <div className="header">
          {linkList.map((link) => {
            return (
              <Link href={link.url} key={link.url}>
                <a>{link.name}</a>
              </Link>
            );
          })}
          <Link href="/cartForPayment">
            <a>
              <span aria-label="emoji" className="emoji" role="img">
                🛒
              </span>{' '}
              <span style={{ color: 'red',marginLeft:'0.5em' }}>Shopping CART: </span>{' '}
              <span
                style={{
                  fontSize: '1.8em',
                  borderRadius: '5px',
                  backgroundColor: '#21a10a',
                  color: '#fff',
                  padding: '0.3em',
                  marginLeft: '0.6em',
                }}
              >
                {cartSum.length}
              </span>
            </a>
          </Link>
        </div>
      </nav>

      <style jsx>{`
        .nav {
          margin-bottom: 2em;
        }
        a {
          text-decoration: none;
          color: mediumblue;
          font-size: 1.2em;
          font-weight: 700;
          line-height: 1em;
        }
        a:hover {
          text-decoration: underline;
          color: hotpink;
          font-weight: 700;
          font-size: 1.2em;
        }

        h1 {
          font-size: 3.5em;
          margin-bottom: 1em;
          padding-top: 0.5em;
          position: relative;
          text-align: center;
          color: rgb(33, 24, 155);
          text-shadow: 1px 3px 4px rgb(218, 147, 17);
          letter-spacing: 4px;
          text-decoration-line: underline;
        }
        .nav-bar p {
          color: gray;
          text-align: center;
          font-size: 1.8em;
          font-family: Georgia, 'Times New Roman', Times, serif;
          padding-bottom: 1em;
          text-shadow: 0px 3px 3px blue;
          font-weight: 700;
        }
        .nav-bar {
          justify-content: space-around;
          align-items: center;
          background-image: url('/cool5.jpeg');
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          background-attachment: fixed;
          background-size: cover;
        }
        .info {
          text-align: center;
          font-family: fantasy;
          font-weight: 600;
          box-shadow: 0px 3px 5px orange;
          width: 18%;
          padding: 5px;
          border-radius: 30%;
          color: orange;
          margin-bottom: 2em;
        }

        .header {
          display: flex;
          margin: 0 auto;
          width: 750px;
          height: 30px;
          justify-content: space-around;
          font-size: 10px;
          font-family: fantasy;
          font-weight: 800;
          position: relative;
          top: 10px;
        }
      `}</style>
    </>
  );
}
export default Nav;
