import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {useGetCategory} from '../../hooks/Home/useGetCategory';
import {Header} from './components/Header';

export const Home = () => {
  const {categories, categoriesError, categoriesLoading, getCategories} =
    useGetCategory();

  const [text, setText] = useState('');

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Header />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="Qual livro você gostaria de ler hoje?"
        />

        <Image source={images.searchIcon} style={styles.searchIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 24,
  },
  containerHeader: {
    paddingHorizontal: 16,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 28,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: colors.gray6,
    borderRadius: 4,
    paddingHorizontal: 16,
  },
  searchIcon: {
    position: 'absolute',
    right: 16,
  },
});
