import React, { useState, useEffect } from "react"
import { ScrollView, Text, Image, StyleSheet } from "react-native"
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
    font-weight: 700,
    width: 50%,
  `
  const styles = StyleSheet.create({
    text: {
      fontSize: 15,
      color: "black",
      fontWeight: 500,
    },
  })

  return (
    <>
      {loading && Loader}
      {!loading && (
        <ScrollView
          style={{
            color: "darkblue",
            fontSize: 25,
          }}
        >
          {drinks.map((drink) => (
            <>
              {/* key={index} */}
              <Text style={styles.text}>{drink.strDrink}</Text>
              <Image
                source={drink.strThumb}
                style={{ width: 75, height: 75 }}
                alt={DrinkList}
              />
            </>
          ))}
        </ScrollView>
      )}
    </>
  )
}

export default DrinkList
