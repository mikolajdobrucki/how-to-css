import React, {useState} from 'react'
import Controller from '../components/controller'

import styles from './main.module.css'
import {Button, Code, Inline, Card, Flex, Text} from '@sanity/ui'

import styled, {css} from 'styled-components'
import {hues} from '@sanity/color'

function myThingStyle ({theme}) {
  console.log(theme.sanity)
  return css`
    height: 10px;
    background: #000;
  `
}

const MyThing = styled.div(myThingStyle)

class Block {
  constructor (flexBasis, height = 200) {
    this.flexBasis = flexBasis
    this.selected = false
    this.alignSelf = 'initial'
    this.flexGrow = 0
    this.flexShrink = 1
    this.height = height
  }
}

const Canvas = styled.div`
  margin: auto;
  .canvas__inner {
    display: flex;
    position: relative;
    background: ${hues.gray[50].hex};
    padding: 1em;
    width: 640px;
    height: 640px;
    border-radius: 48px;
  }
`

const flexItemStyles = {
  normal: {
    boxShadow: `0px 16px 16px rgba(28, 37, 54, 0.1), 0px 4px 4px rgba(28, 37, 54, 0.1), 0px 32px 32px rgba(28, 37, 54, 0.1), inset 0px -4px 4px rgba(51, 62, 80, 0.06), inset 0px 4px 4px rgba(255, 255, 255, 0.25)`,
    color: hues.gray[500].hex
  },
  selected: {
    boxShadow: `0px 24px 24px rgba(28, 37, 54, 0.2), 0px 8px 8px rgba(28, 37, 54, 0.2), 0px 48px 48px rgba(28, 37, 54, 0.2), inset 0px -4px 4px rgba(51, 62, 80, 0.06), inset 0 0 0 4px ${hues.blue[500].hex}`,
    color: hues.gray[900].hex
  }
}
const FlexItem = styled.div`
  margin: 1em;
  padding: 20px 20px 10px;
  border-radius: 24px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #F9FAFB 0%, #E4E8ED 100%);
  position: relative;
  ${props => (props.selected ? flexItemStyles.selected : flexItemStyles.normal)}
  .flex_Item__buttons {
    margin-top: auto;
    display: flex;
    justify-content: center;
  }
`
const AddButton = styled(Button)`
  margin: 1em;
`

const CanvasNav = styled(Inline)`
  width: 100%;
  position: absolute;
  bottom: 20px;
  text-align: center;
`

const ItemSidebar = styled(Card)`
  box-shadow: 0px 16px 16px rgba(28, 37, 54, 0.05), 0px 32px 32px rgba(28, 37, 54, 0.05);
  flex-basis: 352px;
  border-radius: 20px;
  border: 1px solid ${hues.gray[100].hex};
`

const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
  a {
    color: ${hues.blue[500].hex};
  }
`

const Main = props => {
  const [activeItem, setActiveItem] = useState(-1)

  const [blocks, setBlocks] = useState([new Block(150, 160), new Block(150, 240)])

  const [scale, setScale] = useState(1)

  const {alignItems, justifyContent, alignContent, flexDirection, flexWrap} = props

  console.log(blocks)

  const selectItem = index => {
    setActiveItem(index)
    setBlocks(
      blocks.map((item, j) => {
        if (j === index) {
          item.selected = true
          return item
        } else {
          item.selected = false
          return item
        }
      })
    )
  }

  const destroyItem = index => {
    if (activeItem === index) {
      setActiveItem(-1)
    }
    setBlocks(blocks.filter((item, j) => index !== j))
  }

  const changeProperty = (property, value, itemIndex) => {
    setBlocks(
      blocks.map((item, j) => {
        if (j === itemIndex) {
          item[property] = value
          return item
        } else {
          return item
        }
      })
    )
  }

  return (
    <main className={styles.root}>
      <MyThing />
      <Canvas>
        <div
          className='canvas__inner'
          style={{
            alignItems: alignItems,
            justifyContent: justifyContent,
            alignContent: alignContent,
            flexWrap: flexWrap,
            flexDirection: flexDirection
          }}
        >
          {blocks.map(block => (
            <FlexItem
              style={{
                flexBasis: block.flexBasis * scale,
                flexGrow: block.flexGrow,
                flexShrink: block.flexShrink,
                alignSelf: block.alignSelf
              }}
              key={blocks.indexOf(block)}
              selected={block.selected}
            >
              <Code>
                <ul className={styles.flexItem__list}>
                  <li>align-self: {block.alignSelf}</li>
                  <li>flex-grow: {block.flexGrow}</li>
                  <li>flex-shrink: {block.flexShrink}</li>
                  <li>flex-basis: {block.flexBasis}</li>
                </ul>
              </Code>
              
              <div className='flexItem__buttons'>
                <Button
                  onClick={() => selectItem(blocks.indexOf(block))}
                  icon='edit'
                  aria-label='edit'
                  mode='bleed'
                />
                <Button
                  onClick={() => destroyItem(blocks.indexOf(block))}
                  icon='trash'
                  aria-label='delete'
                  mode='bleed'
                />
              </div>
            </FlexItem>
          ))}
          <AddButton
            onClick={() => setBlocks(blocks.concat(new Block(100, Math.floor(Math.random() * 240) + 120)))}
            mode='ghost'
            padding={5}
            icon='add'
          />

          <CanvasNav space={2}>
            <Button
              onClick={() => setScale(scale + 0.2)}
              icon='expand'
              aria-label='expand'
              mode='ghost'
            />
            <Button
              onClick={() => setScale(scale - 0.2)}
              icon='collapse'
              aria-label='collapse'
              mode='ghost'
            />
            <Button text='Get code' tone='brand' mode='ghost' />
          </CanvasNav>
        </div>
        <Footer>
          <Text size={1}>built with <a href='https://www.sanity.io'>Sanity</a> &amp; <a href='https://www.design.sanity.io'>Sanity UI</a></Text>
        </Footer>
      </Canvas>
      {activeItem + 1 ? (
        <ItemSidebar paddingY={2}>
          <Card marginX={2}>
            <Flex justify='flex-end'>
              <Button icon='close' onClick={() => selectItem(-1)} mode='bleed' />
            </Flex>
          </Card>
          <Controller
            onChange={value => changeProperty('alignSelf', value, activeItem)}
            state={blocks[activeItem].alignSelf}
            title='align-self'
            id='alignSelf'
            values={['center', 'flex-start', 'flex-end', 'baseline', 'stretch']}
          />
          <Controller
            onChange={value => changeProperty('flexGrow', value, activeItem)}
            state={blocks[activeItem].flexGrow}
            title='flex-grow'
            id='flexGrow'
            values={[0, 1, 2, 3]}
          />
          <Controller
            onChange={value => changeProperty('flexShrink', value, activeItem)}
            state={blocks[activeItem].flexShrink}
            title='flex-shrink'
            id='flexShrink'
            values={[0, 1, 2, 3]}
          />
          <Controller
            onChange={value => changeProperty('flexBasis', value, activeItem)}
            state={blocks[activeItem].flexBasis}
            title='flex-basis'
            id='flexBasis'
            type='range'
            min={75}
          />
          <Controller
            onChange={value => changeProperty('height', value, activeItem)}
            state={blocks[activeItem].height}
            title='height'
            id='height'
            type='range'
            min={120}
          />
        </ItemSidebar>
      ) : (
        ''
      )}
    </main>
  )
}

export default Main
