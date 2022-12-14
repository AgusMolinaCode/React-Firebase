import React from 'react'
import Header from './Header'
import {Global, css} from '@emotion/react'
import Head from 'next/head'


const Layout = props => {
  return (
    <>
        <Global
          styles={css`
              :root {
                --gris: #3d3d3d;
                --gris2:#6F6F6F;
                --gris3: #e1e1e1;
                --naranja: #DA552F;
              }

              hrml {
                font-size: 62.5%;
                box-sizing: border-box;
              }

              *,*::before, *:after {
                box-sizing: inherit;
              }
              body {
                font-size: 1.6rem;
                line-height: 1.5;
              }
              h1,h2,h3 {
                margin: 0 0 2rem 0;
                line-height: 1.5;
                font-family: 'Roboto', sans-serif;
              }

              ul {
                list-style: none;
                margin: 0;
                padding: 0;
              }

              a {
                text-decoration: none;
              }
          `
          }
        
        />


      
            <Head>
              <title>Product Hunt</title>
              <link  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerPolicy="no-referrer" />
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
              <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,400;1,700&display=swap"/>
              <link href='/static/css/app.css'  />
            </Head>
        
          <Header/>

          <main>
              {props.children}
          </main>
        
      
        
        
        
    </>
  )
}

export default Layout