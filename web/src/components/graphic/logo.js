import React from 'react'
import styled from 'styled-components'
import {hues} from '@sanity/color'

const Logo = styled.div`
    background: ${hues.gray[100].hex};
    width: 34px;
    height 34px;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: end;
    align-content: center;
    padding-top: 3px;
`

const Block = styled.div`
    box-sizing: border-box;
    border-radius: 4px;
    background: ${hues.blue[500].hex};
    margin: 1.5px;
    border: 1px solid ${hues.blue[500].hex};
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), inset 0px -2px 2px rgba(0, 30, 185, 0.25), inset 0px -1px 1px rgba(0, 30, 185, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 2px 2px rgba(255, 255, 255, 0.5);
`

const block = {
  top: {
    width: '13px',
    height: '13px'
  },
  left: {
    width: '8px',
    height: '8px'
  },
  right: {
    width: '8px',
    height: '13px'
  }
}

const LogoGraphic = () => (
  <Logo>
    <Block style={{...block.top}} />
    <Block style={{...block.left}} />
    <Block style={{...block.right}} />
  </Logo>
)

export default LogoGraphic
