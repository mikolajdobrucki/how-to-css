import React from 'react'
import Header from './header'

import '../styles/layout.css'

import styled from 'styled-components'

const Content = styled.div`
  background: var(--color-white);
  min-height: calc(100% - 73px - 120px);

  @media (--media-min-small) {
    min-height: calc(100% - 88px - 150px);
  }
  display: flex;
`

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, siteTaglines}) => (
  <>
    <Header siteTitle={siteTitle} siteTaglines={siteTaglines && siteTaglines[Math.floor(Math.random() * siteTaglines.length)]} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <Content>{children}</Content>
  </>
)

export default Layout
