import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './globalStyles'
import Header from './components/Header'
import SideBar from './components/SideBar'


const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`

const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Container>
          <SideBar />
        </Container>
      </MainContainer>
    </>
  )
}

export default App

