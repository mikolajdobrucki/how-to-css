import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import GitHubButton from 'react-github-btn'

import styles from './header.module.css'

import Logo from './graphic/logo'
import {Flex, Text, Card} from '@sanity/ui'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Card><Flex align='center'>
          <Logo />
          <Link to='/'><Text weight='semibold' size={2}>{siteTitle}</Text></Link>
          <Text muted>the flexbox tool you still unfortunately need</Text>
        </Flex></Card>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav>
        <GitHubButton href='https://github.com/mikolajdobrucki/how-to-css' data-size='large' data-show-count='true' aria-label='Star mikolajdobrucki/how-to-css on GitHub'>Star</GitHubButton>
      </nav>
    </div>
  </div>
)

export default Header
