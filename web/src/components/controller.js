import {Card, Flex, Heading, Label} from '@sanity/ui'
import React from 'react'
import styled from 'styled-components'
import ControllerIcon from '../components/controllerIcon'
import {hues} from '@sanity/color'

const ControllerLabel = styled(Label)`
  text-align: center;
  padding-bottom: 10px;
  max-width: 72px;
`

const ControllerBlock = styled.label`
  border-radius: 10px;
  margin: 2px;
  &:hover {
    background: ${hues.gray[50].hex};
  }
  background: ${props => (props.active ? hues.gray[50].hex : '')};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Range = styled.input`
width: 100%;
margin: 30px 0;
&::-webkit-slider-runnable-track {
  height: 2px;
  border: 0;
}
&[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border-radius: 50%;
  height: 8px;
  width: 8px;
  margin-top: -6px;
  background: ${hues.blue[500].hex};
  border: 1px solid ${hues.blue[500].hex};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), inset 0px -2px 2px rgba(0, 30, 185, 0.25), inset 0px -1px 1px rgba(0, 30, 185, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 2px 2px rgba(255, 255, 255, 0.5);
}
`

const Controller = props => {
  return (
    <Card paddingY={3} paddingX={4}>
      <Heading as='h3'>{props.title}</Heading>
      {props.type === 'range' ? (
        <Range
          type='range'
          name={props.id}
          id={props.id}
          min={props.min}
          max={500}
          step={25}
          value={props.state}
          onChange={e => props.onChange(parseInt(e.target.value))}
        />
      ) : (
        <Card marginY={2}>
          <Flex wrap='wrap'>
            {props.values.map(value => (
              <ControllerBlock key={value} active={props.state === value}>
                <ControllerIcon icon={props.id + '-' + value} active={props.state === value} value={value} settings={props.settings} />
                <input
                  type='radio'
                  name={props.id}
                  id={props.id}
                  checked={props.state === value}
                  onChange={() => props.onChange(value)}
                  style={{appearance: 'none', position: 'absolute'}}
                />
                { typeof value !== 'number' ? (
                  <ControllerLabel muted={props.state !== value} size={1}>
                    {value}
                  </ControllerLabel>
                ) : ' '}
              </ControllerBlock>
            ))}
          </Flex>
        </Card>
      )}
    </Card>
  )
}

export default Controller
