import React from 'react'
import styled from 'styled-components'
import {hues, white} from '@sanity/color'
import {Text} from '@sanity/ui'

const selectedBlockStyles = {
  normal: {
    background: white.hex,
    color: hues.gray[600].hex,
    border: `1px solid ${hues.gray[500].hex}`,
    boxShadow: ''
  },
  active: {
    background: hues.blue[500].hex,
    border: `1px solid ${hues.blue[500].hex}`,
    color: white.hex,
    boxShadow:
      '0px 1px 1px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), inset 0px -2px 2px rgba(0, 30, 185, 0.25), inset 0px -1px 1px rgba(0, 30, 185, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 2px 2px rgba(255, 255, 255, 0.5)'
  }
}

const selectedSpacerStyles = {
  normal: {
    background: hues.gray[100].hex
  },
  active: {
    background: hues.red[100].hex
  }
}

const selectedSvgStyles = {
  normal: {
    stroke: hues.gray[500].hex,
    strokeWidth: 1
  },
  active: {
    stroke: hues.blue[500].hex,
    strokeWidth: 4
  }
}

const Icon = styled.div`
  .icon {
    border-radius: 10px;
    padding: 0 8px 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => (props.active ? hues.blue[500].hex : hues.gray[400].hex)};
  }
  .icon--large {
    width: 84px;
    height: 56px;
    flex-direction: column;
    align-items: stretch;
    padding: 8px;
  }
  .icon--small {
    width: 56px;
    height: 56px;
    padding: 0 8px;
  }
  .icon__blocks {
    justify-content: center;
    display: flex;
  }
  .icon__line {
    border-top: 1px solid ${props => (props.active ? hues.blue[500].hex : hues.gray[500].hex)};
  }
  .icon__line--center {
    position: absolute;
    width: calc(100% - 16px);
    top: calc(50% - 1px);
    left: 8px;
  }
  .icon__line--baseline {
    width: calc(100% - 16px);
    position: absolute;
    top: 30px;
    left: 8px;
  }
  .icon__block {
    width: 8px;
    height: 10px;
    ${props => (props.active ? selectedBlockStyles.active : selectedBlockStyles.normal)}
    text-align: center;
    border-radius: 3px;
    position: relative;
    margin: 2px;
    padding: 3px 2px;
    flex-shrink: 0;
  }
  .icon__block--large {
    height: 26px;
  }
  .icon__block--small {
    height: 2px;
  }
  .icon__spacer {
    border-radius: 3px;
    margin: 2px 1px;
    ${props => (props.active ? selectedSpacerStyles.active : selectedSpacerStyles.normal)}
  }
  .icon__spacer--horizontal {
    flex-grow: 1;
  }
  .icon__spacer--vertical {
    flex-basis: 17px;
    flex-grow: 1;
  }
  .icon__svg {
    ${props => (props.active ? selectedSvgStyles.active : selectedSvgStyles.normal)}
  }
`

const controllerIcon = props => {
  let icon = ''

  switch (props.icon) {
    case 'alignItems-center':
    case 'alignSelf-center':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__line icon__line--center' />
          <div className='icon__blocks' style={{alignItems: 'center'}}>
            <div className='icon__block' />
            <div className='icon__block icon__block--large' />
            <div className='icon__block' />
          </div>
        </div>
      )
      break

    case 'alignItems-flex-start':
    case 'alignSelf-flex-start':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__line' />
          <div className='icon__blocks' style={{alignItems: 'flex-start'}}>
            <div className='icon__block' />
            <div className='icon__block icon__block--large' />
            <div className='icon__block' />
          </div>
        </div>
      )
      break

    case 'alignItems-flex-end':
    case 'alignSelf-flex-end':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{alignItems: 'flex-end'}}>
            <div className='icon__block' />
            <div className='icon__block icon__block--large' />
            <div className='icon__block' />
          </div>
          <div className='icon__line' />
        </div>
      )
      break

    case 'alignItems-stretch':
    case 'alignSelf-stretch':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{alignItems: 'flex-end'}}>
            <div className='icon__block icon__block--large' />
            <div className='icon__block icon__block--large' />
            <div className='icon__block icon__block--large' />
          </div>
        </div>
      )
      break

    case 'alignItems-baseline':
    case 'alignSelf-baseline':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{alignItems: 'baseline'}}>
            <div className='icon__block'>
              <Text size={0}>A</Text>
            </div>
            <div className='icon__block icon__block--large'>
              <Text size={0}>A</Text>
            </div>
            <div className='icon__block'>
              <Text size={0}>A</Text>
            </div>
          </div>
          <div className='icon__line icon__line--baseline' />
        </div>
      )
      break

    case 'justifyContent-flex-start':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--large' />
            <div className='icon__block icon__block--large' />
            <div className='icon__block icon__block--large' />
            <div className='icon__spacer icon__spacer--vertical' />
          </div>
        </div>
      )
      break

    case 'justifyContent-flex-end':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{}}>
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__block icon__block--large' />
            <div className='icon__block icon__block--large' />
            <div className='icon__block icon__block--large' />
          </div>
        </div>
      )
      break

    case 'justifyContent-center':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{}}>
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__block icon__block--large' />
            <div className='icon__block icon__block--large' />
            <div className='icon__block icon__block--large' />
            <div className='icon__spacer icon__spacer--vertical' />
          </div>
        </div>
      )
      break

    case 'justifyContent-space-between':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--large' />
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__block icon__block--large' />
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__block icon__block--large' />
          </div>
        </div>
      )
      break

    case 'justifyContent-space-around':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{}}>
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__block icon__block--large' />
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__block icon__block--large' />
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__block icon__block--large' />
            <div className='icon__spacer icon__spacer--vertical' />
          </div>
        </div>
      )
      break

    case 'justifyContent-space-evenly':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{}}>
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__block icon__block--large' />
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__block icon__block--large' />
            <div className='icon__spacer icon__spacer--vertical' />
            <div className='icon__block icon__block--large' />
            <div className='icon__spacer icon__spacer--vertical' />
          </div>
        </div>
      )
      break

    case 'alignContent-center':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__spacer icon__spacer--horizontal' />
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
          </div>
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
          </div>
          <div className='icon__spacer icon__spacer--horizontal' />
        </div>
      )
      break

    case 'alignContent-flex-start':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__spacer icon__spacer--horizontal' />
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
          </div>
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
          </div>
        </div>
      )
      break

    case 'alignContent-flex-end':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
          </div>
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
          </div>
          <div className='icon__spacer icon__spacer--horizontal' />
        </div>
      )
      break

    case 'alignContent-stretch':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block' />
            <div className='icon__block icon__block' />
            <div className='icon__block icon__block' />
          </div>
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block' />
            <div className='icon__block icon__block' />
          </div>
        </div>
      )
      break

    case 'alignContent-space-between':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
          </div>
          <div className='icon__spacer icon__spacer--horizontal' />
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
          </div>
        </div>
      )
      break

    case 'alignContent-space-around':
      icon = (
        <div className='icon icon--large'>
          <div className='icon__spacer icon__spacer--horizontal' />
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
          </div>
          <div className='icon__spacer icon__spacer--horizontal' />
          <div className='icon__blocks' style={{}}>
            <div className='icon__block icon__block--small' />
            <div className='icon__block icon__block--small' />
          </div>
          <div className='icon__spacer icon__spacer--horizontal' />
        </div>
      )
      break

    case 'flexDirection-row':
      icon = (
        <div className='icon icon--small'>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='icon__svg'
          >
            <path
              d='M37.1464 23.6465L11.1464 23.6465M37.1464 23.6465L28.1464 32.6465M37.1464 23.6465L28.1464 14.6465'
              strokeLinecap='round'
            />
          </svg>
        </div>
      )
      break

    case 'flexDirection-row-reverse':
      icon = (
        <div className='icon icon--small'>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='icon__svg'
            style={{transform: 'rotate(180deg)'}}
          >
            <path
              d='M37.1464 23.6465L11.1464 23.6465M37.1464 23.6465L28.1464 32.6465M37.1464 23.6465L28.1464 14.6465'
              strokeLinecap='round'
            />
          </svg>
        </div>
      )
      break

    case 'flexDirection-column':
      icon = (
        <div className='icon icon--small'>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='icon__svg'
            style={{transform: 'rotate(90deg)'}}
          >
            <path
              d='M37.1464 23.6465L11.1464 23.6465M37.1464 23.6465L28.1464 32.6465M37.1464 23.6465L28.1464 14.6465'
              strokeLinecap='round'
            />
          </svg>
        </div>
      )
      break

    case 'flexDirection-column-reverse':
      icon = (
        <div className='icon icon--small'>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='icon__svg'
            style={{transform: 'rotate(270deg)'}}
          >
            <path
              d='M37.1464 23.6465L11.1464 23.6465M37.1464 23.6465L28.1464 32.6465M37.1464 23.6465L28.1464 14.6465'
              strokeLinecap='round'
            />
          </svg>
        </div>
      )
      break

    case 'flexWrap-wrap':
      icon = (
        <div className='icon icon--small'>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='icon__svg'
          >
            <path
              d='M40 38L14.5001 38C10.9102 38 8.00006 35.0899 8.00006 31.5V31.5C8.00006 27.9102 10.9102 25 14.5001 25L33.5 25C37.0899 25 40 22.0899 40 18.5V18.5C40 14.9101 37.0899 12 33.5 12L8.00006 12M40 38L33.0001 31M40 38L33.0001 45'
              strokeLinecap='round'
            />
          </svg>
        </div>
      )
      break

    case 'flexWrap-wrap-reverse':
      icon = (
        <div className='icon icon--small'>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='icon__svg'
            style={{transform: 'rotate(180deg)'}}
          >
            <path
              d='M40 38L14.5001 38C10.9102 38 8.00006 35.0899 8.00006 31.5V31.5C8.00006 27.9102 10.9102 25 14.5001 25L33.5 25C37.0899 25 40 22.0899 40 18.5V18.5C40 14.9101 37.0899 12 33.5 12L8.00006 12M40 38L33.0001 31M40 38L33.0001 45'
              strokeLinecap='round'
            />
          </svg>
        </div>
      )
      break

    case 'flexWrap-nowrap':
      icon = (
        <div className='icon icon--small'>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='icon__svg'
          >
            <path
              d='M40 25L8 25M40 25L33 18M40 25L33 32'
              strokeLinecap='round'
            />
          </svg>
        </div>
      )
      break

    case 'flexShrink-0':
    case 'flexGrow-0':
    case 'flexShrink-1':
    case 'flexGrow-1':
    case 'flexShrink-2':
    case 'flexGrow-2':
    case 'flexShrink-3':
    case 'flexGrow-3':
      icon = (
        <div className='icon icon--small'>
          <Text size={3} weight={props.active ? 'bold' : 'regular'}>{props.value}</Text>
        </div>
      )
      break

    default:
      break
  }

  return <Icon active={props.active}>{icon}</Icon>
}

export default controllerIcon
