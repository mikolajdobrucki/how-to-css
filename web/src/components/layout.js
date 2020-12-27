import React from 'react'
import Header from './header'

import '../styles/layout.css'

import styled from 'styled-components'

const Content = styled.div`
  background: var(--color-white);
  
  display: flex;
  
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, siteTaglines}) => (
  <>
    <Header siteTitle={siteTitle} siteTaglines={siteTaglines && siteTaglines[Math.floor(Math.random() * siteTaglines.length)]} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <Content>{children}</Content>
  </>
)

export default Layout
