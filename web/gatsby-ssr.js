/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import RootLayout from './src/components/RootLayout'

export const wrapRootElement = ({element}) => <RootLayout>{element}</RootLayout>
