import React from 'react'
import {ThemeProvider, studioTheme} from '@sanity/ui'

const theme = {
  ...studioTheme,
  radius: [0, 6, 12, 18, 32, 50, 82]
}

export default function RootLayout ({children}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}
