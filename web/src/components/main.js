import React, {useState} from 'react'
import Sidebar from '../components/sidebar'
import Controller from '../components/controller'
import cx from 'classnames'

import styles from './main.module.css'
import {Button} from '@sanity/ui'

class Block {
  constructor (flexBasis) {
    this.flexBasis = flexBasis
    this.selected = false
    this.alignSelf = 'initial'
    this.flexGrow = 0
    this.flexShrink = 1
  }
}

const Main = props => {
  const [activeItem, setActiveItem] = useState(-1)

  const [blocks, setBlocks] = useState([
    new Block(100),
    new Block(150)
  ])

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
    console.log(value)

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
      main
      <div
        className={styles.canvas}
        style={{
          alignItems: alignItems,
          justifyContent: justifyContent,
          alignContent: alignContent,
          flexWrap: flexWrap,
          flexDirection: flexDirection
        }}
      >
        {blocks.map(block => (
          <div
            className={cx(styles.flexItem, {[styles.flexItemSelected]: block.selected})}
            style={{flexBasis: block.flexBasis * scale, flexGrow: block.flexGrow, flexShrink: block.flexShrink, alignSelf: block.alignSelf}}
            key={blocks.indexOf(block)}
          >
            <ul className={styles.flexItem__list}>
              <li>align-self: {block.alignSelf}</li>
              <li>flex-grow: {block.flexGrow}</li>
              <li>flex-shrink: {block.flexShrink}</li>
              <li>flex-basis: {block.flexBasis}</li>
            </ul>
            <Button onClick={() => selectItem(blocks.indexOf(block))} icon='edit' aria-label='edit' mode='bleed' />
            <Button onClick={() => destroyItem(blocks.indexOf(block))} icon='trash' aria-label='delete' mode='bleed' tone='critical  ' />
          </div>
        ))}
        <button
          className={styles.button}
          onClick={() => setBlocks(blocks.concat(new Block(100, 100)))}
        >
          +
        </button>
        <div className={styles.canvasNav}>
          <button onClick={() => setScale(scale + 0.2)}>+</button>
          <button onClick={() => setScale(scale - 0.2)}>-</button>
          <Button text='get code' tone='brand' />
        </div>
      </div>
      {activeItem + 1 && (
        <Sidebar>
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
          />
        </Sidebar>
      )}
    </main>
  )
}

export default Main
