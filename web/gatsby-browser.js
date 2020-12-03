/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import {ThemeProvider, studioTheme} from '@sanity/ui'

export const theme = {
  ...studioTheme,
  // space: studioTheme.space.map((v) => v * 1.25),
  radius: [0, 6, 12, 18, 32, 50, 82]
}

export const wrapRootElement = ({element}) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}