import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';

export interface MainCardProps {
  author: string;
  book_image: string;
  title: string;
  onPress: () => void;
}

export const MainCard = ({
  author,
  book_image,
  title,
  onPress,
}: MainCardProps) => {
  const starData = [1, 2, 3, 4, 5];

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: book_image}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>

      <View style={styles.containerStars}>
        {starData.map(() => (
          <Image source={images.starIcon} style={styles.starsIcon} />
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 104,
    marginRight: 12,
  },
  image: {
    height: 160,
    borderRadius: 4,
  },
  title: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '700',
    color: colors.main,
    marginTop: 4,
    marginBottom: 2,
  },
  author: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.gray2,
    marginBottom: 4,
  },
  containerStars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsIcon: {
    marginRight: 2,
  },
});
