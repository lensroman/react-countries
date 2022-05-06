import { useState, useEffect } from 'react'

import { Link } from "react-router-dom"


import styled from 'styled-components'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'

import { Container } from './Container'

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
  
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Title = styled(Link).attrs({
  to: '/'
})`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`
  user-select: none;
  color: var(--colors-text);
  font-size: var(--fs-md);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`

export const Header = () => {
  const [theme, setTheme] = useState('light')

  const toggleThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleThemeHandler}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}{' '}
            <span style={{ marginLeft: '0.75rem' }}></span>{theme} Theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  )
}
