import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {images} from '../../assets/images';

export interface MainCardProps {
  publisher: String;
  author: String;
  title: String;
  description: String;
  price: String;
  book_image: String;
}

export const MainCard = ({
  author,
  book_image,
  description,
  price,
  publisher,
  title,
}: MainCardProps) => {
  const starData = [1, 2, 3, 4, 5];

  return (
    <View>
      <Image
        source={{uri: book_image}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>{title}</Text>
      <Text>{author}</Text>

      {starData.map(() => (
        <Image source={images.starIcon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 160,
  },
});
