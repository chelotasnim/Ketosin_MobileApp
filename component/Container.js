import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import RadialGradient from "react-native-radial-gradient";

export default function Container({ children, padding, start }) {
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const SCREEN_WIDTH = Dimensions.get("window").width;
  return (
    <RadialGradient
      colors={["rgb(250,250,250)", "rgb(215,219,232)"]}
      stops={[0.1, 0.4, 0.3, 0.75]}
      center={[SCREEN_HEIGHT / 4, SCREEN_WIDTH / 1.2]}
      radius={250}
      style={{
        width: SCREEN_WIDTH,
        flex: 1,
        padding: padding ? 19 : 0,
        justifyContent: start === true ? "flex-start" : "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {children}
    </RadialGradient>
  );
}

const styles = StyleSheet.create({});
