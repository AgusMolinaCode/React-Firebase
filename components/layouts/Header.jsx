import React from 'react'
import Buscar from '../UI/Buscar'
import Boton from '../UI/Boton'
import Navegacion from './Navegacion'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css} from '@emotion/react'

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width:768px) {
    display: flex;
    justify-content: space-between;
  }
`

const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin-right: 2rem;
`


const Header = () => {
  const usuario = false
  
  return (
    <header
        css={css`
          border-bottom: 2px solid var(--gris3);
          padding: 1rem 0;
          
        `

        }
    
    >
        <ContenedorHeader>
            <div
                css={css`
                display: flex;
                align-items: center;
              `}
            >

                <Link href='/'>
                  <Logo>P</Logo>
                </Link>
                

                <Buscar/>

                <Navegacion/>
            </div>

            <div
              css={css`
                display: flex;
                align-items: center;
                gap: 5px;
              `}
            >
                {usuario ? (
                  <>
                    <p
                    css={css`
                    margin-right: 2rem;
                    font-size: 1.3rem;
                  `}
                    >Hola: Agus</p>
    
                    <Boton bgColor='true'>Cerrar Sesion</Boton>
                  </>
                  
                ) : (
                  <>
                    <Link href='/login'>
                      <Boton bgColor='true'>Login</Boton>
                    </Link>
                    <Link href='/crear-cuenta'>
                      <Boton>Crear Cuenta</Boton>
                    </Link>
                  </>
                )}
            </div>

        </ContenedorHeader>
    </header>
  )
}

export default Header