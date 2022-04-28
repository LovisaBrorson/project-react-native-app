import React from "react"
import styled from "styled-components/native"
import Header from "./components/Header"
import Footer from "./components/Footer"
import DrinkList from "./components/DrinkAPI"
import InputField from "./components/Inputfield"

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {
  return (
    <Container>
      <Header title='Do you want a Drink?' />
      <Title>Hello!! Are you there? Hello?</Title>

      <DrinkList></DrinkList>
      <Footer title='Made by Lovisa 2022' />
    </Container>
  )
}

export default App
