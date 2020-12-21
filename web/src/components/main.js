import React, {useState} from 'react'
import Controller from '../components/controller'
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
  constructor (flexBasis, size = 200) {
    this.flexBasis = flexBasis
    this.selected = false
    this.alignSelf = 'initial'
    this.flexGrow = 0
    this.flexShrink = 1
    this.size = size
  }
}

const Canvas = styled.div`
  margin: auto;
  flex-grow: 1;
  @media (min-width: 1050px) {
    flex-grow: 0;
  }

  .canvas__inner {
    display: flex;
    position: relative;
    background: ${hues.gray[50].hex};
    padding: 1em 1em 55px;
    margin-right: 2em;
    min-height: 600px;
    border-radius: 48px;
    @media (min-width: 1050px) {
      min-width: 640px;
    }
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
  min-height: 120px;
  display: flex;
  flex-direction: row;
  background: linear-gradient(180deg, #f9fafb 0%, #e4e8ed 100%);
  position: relative;
  overflow: scroll;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 100%;
    // background: linear-gradient(90deg, hsla(213, 20%, 95%, 0) 0%, hsl(213, 20%, 95%) 100%);
  }
  ${props => (props.selected ? flexItemStyles.selected : flexItemStyles.normal)}

  .flexItem__list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.75rem;
    width: 0;
    li {
      display: flex;
    }
  }
  .flexItem__buttons {
    margin-top: auto;
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }
  .flexItem__spacer {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`
const AddButton = styled(Button)`
  margin: 1em;
`

const CanvasNav = styled(Inline)`
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0;
  text-align: center;
`

const ItemSidebar = styled(Card)`
  box-shadow: 0px 16px 16px rgba(28, 37, 54, 0.05), 0px 32px 32px rgba(28, 37, 54, 0.05);
  flex-basis: 352px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid ${hues.gray[100].hex};
  max-height: calc(100vh - 80px);
  overflow: scroll;
`

const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
  a {
    color: ${hues.blue[500].hex};
  }
`

const Wrapper = styled.main`
  box-sizing: border-box;
  flex-basis: 0;
  flex-grow: 1;
  padding: 1.5em;
  display: flex;
  height: calc(100vh - 82px);
  overflow: scroll;

  @media (--media-min-small) {
    padding: 2em;
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
    <Wrapper>
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
                height:
                  flexDirection === 'row' || flexDirection === 'row-reverse'
                    ? block.size * scale
                    : 'auto',
                width:
                  flexDirection === 'column' || flexDirection === 'column-reverse'
                    ? block.size * scale
                    : 'auto',
                flexGrow: block.flexGrow,
                flexShrink: block.flexShrink,
                alignSelf: block.alignSelf
              }}
              key={blocks.indexOf(block)}
              selected={block.selected}
            >
              <Code>
                <ul className='flexItem__list'>
                  <li>
                    align-self: {block.alignSelf}
                    <div className='flexItem__spacer' />
                  </li>
                  <li>
                    flex-grow: {block.flexGrow}
                    <div className='flexItem__spacer' />
                  </li>
                  <li>
                    flex-shrink: {block.flexShrink}
                    <div className='flexItem__spacer' />
                  </li>
                  <li>
                    flex-basis: {block.flexBasis}
                    <div className='flexItem__spacer' />
                  </li>
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
            onClick={() =>
              setBlocks(blocks.concat(new Block(100, Math.floor(Math.random() * 240) + 120)))
            }
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
          <Text size={1}>
            built by{' '}
            <a href='https://www.twitter.com/mikolajdobrucki' target='_blank'>
              @mikolajdobrucki
            </a>{' '}
            with{' '}
            <a href='https://www.sanity.io' target='_blank'>
              Sanity
            </a>{' '}
            &amp;{' '}
            <a href='https://www.design.sanity.io' target='_blank'>
              Sanity UI
            </a>
          </Text>
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
            onChange={value => changeProperty('size', value, activeItem)}
            state={blocks[activeItem].size}
            title='size'
            id='size'
            type='range'
            min={120}
          />
        </ItemSidebar>
      ) : (
        ''
      )}
    </Wrapper>
  )
}

export default Main
