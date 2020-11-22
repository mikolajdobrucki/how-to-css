import React, {useState} from 'react'
import Sidebar from '../components/sidebar'
import Controller from '../components/controller'
import cx from 'classnames'

import styles from './main.module.css'

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
            style={{flexBasis: block.flexBasis, flexGrow: block.flexGrow, flexShrink: block.flexShrink, alignSelf: block.alignSelf}}
            key={blocks.indexOf(block)}
          >
            <ul className={styles.flexItem__list}>
              <li>align-self: {block.alignSelf}</li>
              <li>flex-grow: {block.flexGrow}</li>
              <li>flex-shrink: {block.flexShrink}</li>
            </ul>
            <button onClick={() => selectItem(blocks.indexOf(block))}>Edit</button>
            <button onClick={() => destroyItem(blocks.indexOf(block))}>Delete</button>
          </div>
        ))}
        <button
          className={styles.button}
          onClick={() => setBlocks(blocks.concat(new Block(100, 100)))}
        >
          +
        </button>
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
        </Sidebar>
      )}
    </main>
  )
}

export default Main
