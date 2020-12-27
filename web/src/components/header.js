import {Link} from 'gatsby'
import React from 'react'
import GitHubButton from 'react-github-btn'
import Logo from './graphic/logo'
import {Flex, Text, Card} from '@sanity/ui'
import styled from 'styled-components'

const Root = styled.header`
  position: relative;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 1em;
  display: flex;
`

const Branding = styled.div`
  font-weight: 600;
  flex: 1;

  a {
    display: inline-block;
    padding: 0.5em 2em 0.5em 0.5em;
    color: inherit;
    text-decoration: none;
  }
`

const Tagline = styled(Text)`
  @media (max-width: 800px) {
    visibility: hidden;
    width: 0;
    position: absolute;
  }
`

const Header = ({siteTitle, siteTaglines}) => (
  <Root>
    <Wrapper>
      <Branding>
        <Card><Flex align='center'>
          <Logo />
          <Link to='/'><Text weight='semibold' size={2}>{siteTitle}</Text></Link>
          <Tagline muted>{siteTaglines}</Tagline>
        </Flex></Card>
      </Branding>

      <nav>
        <GitHubButton href='https://github.com/mikolajdobrucki/how-to-css' data-size='large' data-show-count='true' aria-label='Star mikolajdobrucki/how-to-css on GitHub'>Star</GitHubButton>
      </nav>
    </Wrapper>
  </Root>
)

export default Header
