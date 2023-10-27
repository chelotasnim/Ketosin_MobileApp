import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  View,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import Container from '../component/Container';

export default function Splash({ navigation }) {
  const bounce = useRef(new Animated.Value(0)).current;
  const SCREEN_HEIGHT = Dimensions.get('window').height;

  useEffect(() => {
    Animated.timing(bounce, {
      useNativeDriver: true,
      easing: Easing.bounce,
      toValue: (SCREEN_HEIGHT - 320) / 2,
      duration: 1000,
    }).start();
  }, []);

  const translateY = {
    translateY: bounce,
  };
  setTimeout(() => {
    navigation.replace('transit');
  }, 2000);
  return (
    <Container padding={false}>
      <View style={styles.cardContainer}>
        <Animated.View style={{ transform: [translateY] }}>
          <Animated.Image
            source={require('../assets/img/kpo.png')}
            style={{ width: 150, height: 150 }}
          />
        </Animated.View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15
  },
});
