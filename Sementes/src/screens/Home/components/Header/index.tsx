import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../assets/colors';
import {images} from '../../../../assets/images';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Olá, Ana!</Text>

      <Image source={images.perfilImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '900',
    color: colors.main,
  },
  image: {
    width: 40,
    height: 40,
  },
});
