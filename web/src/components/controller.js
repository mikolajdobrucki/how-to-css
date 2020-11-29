import React from 'react'

import styles from './controller.module.css'

const Controller = props => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{props.title}</h3>
      { props.type === 'range' ? (
        <input
          type='range'
          name={props.id}
          id={props.id}
          min={50}
          max={500}
          step={25}
          value={props.state}
          onChange={(e) => props.onChange(parseInt(e.target.value))}
        />
      ) : (
        props.values.map((value) => (
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
        ))
      )}
    </div>
  )
}

export default Controller
