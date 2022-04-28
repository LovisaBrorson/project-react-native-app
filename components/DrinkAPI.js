import React, { useState, useEffect } from "react"
import { View, Text, Image } from "react-native"
import Styled from "styled-components/native"
import Loader from "./Loader"

const DrinkList = () => {
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(false)

  const generateDrinks = () => {
    setLoading(true)
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks))
      .finally(() => setLoading(false))
  }
  console.log(drinks)

  useEffect(() => {
    generateDrinks()
  }, [])

  const DrinkList = Styled.TouchableOpacity`
    font-weight: 700;
    width: 50%;
  `

  return (
    <>
      {loading && Loader}
      {!loading && (
        <View>
          {drinks.map((drink) => (
            <>
              <Image>{drink.strThumb}</Image>
              <Text>{drink.strDrink}</Text>
              <Text>{drink.strInstructions}</Text>
            </>
          ))}

          <DrinkList onPress={generateDrinks}>
            <Text>Search</Text>
          </DrinkList>
        </View>
      )}
    </>
  )
}

export default DrinkList
