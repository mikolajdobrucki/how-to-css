import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import clientConfig from '../../client-config'

const BlockContent = ({blocks}) => (
  <BaseBlockContent blocks={blocks} {...clientConfig.sanity} />
)

export default BlockContent
