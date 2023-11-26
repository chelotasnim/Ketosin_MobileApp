import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function Card({
  navigation,
  screen,
  header,
  title,
  iconUrl,
  margin
}) {
  return (
    <TouchableWithoutFeedback onPressIn={() => { navigation ? navigation.navigate(screen) : logout() }}>
      <View style={[styles.cardCon, { marginVertical: margin ? 10 : 0 }]}>
        <Image style={styles.img} source={iconUrl} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{
            letterSpacing: .1,
            fontWeight: 500,
            fontSize: 14,
            color: "rgb(75, 75, 75)"
          }}>
            {header}
          </Text>
          <Text style={{
            letterSpacing: .1,
            fontSize: 12,
            color: "rgb(125, 125, 125)"
          }}>
            {title}
          </Text>
        </View>
        <Icon
          name="chevron-forward-outline"
          color="rgb(100, 100, 100)"
          size={16}
          style={{
            position: "absolute",
            right: 18
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardCon: {
    width: "85%",
    height: "22%",
    backgroundColor: "rgb(240,240,240)",
    borderRadius: 5,
    elevation: 1,
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
  },
  img: {
    width: 42,
    height: 42,
    marginHorizontal: 12,
    objectFit: "cover"
  }
});
