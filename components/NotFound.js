import React from "react"
import { useNavigate } from "react-native"
import { Text, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: "100%",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 15,
    color: "black",
  },
})

export default function NotFond(props) {
  const navigate = useNavigate()
  const onHomeButtonClick = () => {
    navigate("/")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.title}
        Drink not found. Try one more time!
      </Text>
      <button onClick={onHomeButtonClick}>Homepage</button>
    </View>
  )
}
