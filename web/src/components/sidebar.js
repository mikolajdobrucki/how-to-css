import React from 'react'
import styled from 'styled-components'

const Root = styled.aside`
  box-sizing: border-box;
  flex-basis: 352px;
  flex-shrink: 0;
  height: calc(100vh - 82px);
  overflow: scroll;
`

const Sidebar = ({children}) => {
  return <Root>{children}</Root>
}

export default Sidebar
