import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default function Footer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

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
