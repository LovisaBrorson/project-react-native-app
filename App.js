import React from "react"
import styled from "styled-components/native"
import Header from "./components/Header"
import Footer from "./components/Footer"
import DrinkList from "./components/DrinkAPI"
import InputField from "./components/Inputfield"
import { ScrollView } from "react-native"

const Container = styled.View`
  flex: 1;
  background-color: lightcyan;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  font-size: 15;
  color: lightslategrey;
  width: 350;
  padding-top: 70;
  padding-bottom: 10;
`

const App = () => {
  return (
    <Container>
      <Header title='One Coctail, please! 🍸' />

      <Text>
        Drinks are something most of us want to enjoy sometimes, not at least
        during holidays like Christmas, New Year, Easter and Midsummer. Here can
        you find a large variety of drinks, hope it taste lovely!
      </Text>
      <InputField />
      <DrinkList />

      <Footer title='Made by Lovisa 2022' />
    </Container>
  )
}

export default App
