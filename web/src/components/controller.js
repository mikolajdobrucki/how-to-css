import React from 'react'

import styles from './controller.module.css'

const Controller = props => {
  return (
    <div className={styles.root}>
      <h3>{props.title}</h3>
      {props.values.map((value) => (
        <div className='input' key={value}>
          <label>
            <input
              type='radio'
              name={props.id}
              id={props.id}
              checked={props.state === value}
              onChange={() => props.onChange(value)}
            />
            {value}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Controller
