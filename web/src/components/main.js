import React, {useState} from 'react'
import Sidebar from '../components/sidebar'
import Controller from '../components/controller'
import cx from 'classnames'

import styles from './main.module.css'

class Block {
  constructor (height, width) {
    this.height = height
    this.width = width
    this.selected = false
    this.alignSelf = 'center'
  }
}

const Main = props => {
  const [activeItem, setActiveItem] = useState(-1)

  const [blocks, setBlocks] = useState([
    new Block(100, 100),
    new Block(200, 100),
    new Block(100, 200)
  ])

  const {alignItems, justifyContent} = props

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

  const changeAlignSelf = (value, activeItem) => {
    console.log(value)

    setBlocks(
      blocks.map((item, j) => {
        if (j === activeItem) {
          item.alignSelf = value
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
        style={{alignItems: alignItems, justifyContent: justifyContent}}
      >
        {blocks.map(block => (
          <div
            className={cx(styles.flexItem, {[styles.flexItemSelected]: block.selected})}
            style={{height: block.height, width: block.width, alignSelf: block.alignSelf}}
            key={blocks.indexOf(block)}
            onClick={() => selectItem(blocks.indexOf(block))}
          />
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
            onChange={value => changeAlignSelf(value, activeItem)}
            state={blocks[activeItem].alignSelf}
            title='align-self'
            id='alignSelf'
            values={['center', 'flex-start', 'flex-end']}
          />
        </Sidebar>
      )}
    </main>
  )
}

export default Main
