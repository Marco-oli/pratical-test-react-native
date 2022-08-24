import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';

export interface CategoryCardProps {
  color: string;
  title: string;
  onPress: () => void;
}

export const CategoryCard = ({color, title, onPress}: CategoryCardProps) => {
  const styles = mountStyles(color);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.background} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const mountStyles = (color: string) =>
  StyleSheet.create({
    container: {
      width: 74,
      marginRight: 12,
    },
    background: {
      width: 74,
      height: 74,
      borderRadius: 4,
      backgroundColor: color,
    },
    title: {
      fontSize: 14,
      lineHeight: 16,
      fontWeight: '700',
      color: colors.main,
      marginTop: 4,
    },
  });
