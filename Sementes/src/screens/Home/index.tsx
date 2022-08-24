import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {CategoryCard} from '../../components/CategoryCard';
import {MainCard} from '../../components/MainCard';
import {useGetCategory} from '../../hooks/Home/useGetCategory';
import {useGetCollections} from '../../hooks/Home/useGetCollections';
import {CategoryProps} from '../../interfaces/mainInterface';
import {HomeStackProps} from '../../routes/HomeStack';
import {randomColor} from '../../utils/randonBgColor';
import {Header} from './components/Header';

export const Home = () => {
  const {categories, categoriesLoading, getCategories} = useGetCategory();
  const {collections, collectionsLoading, getCollections} = useGetCollections();
  const navigation =
    useNavigation<NavigationProp<HomeStackProps, 'Category'>>();

  const [text, setText] = useState('');

  useEffect(() => {
    getCategories();
    getCollections();
  }, []);

  const filteredCollections = useCallback(() => {
    if (text !== '') {
      return collections?.filter(
        item =>
          item.author.toLowerCase().includes(text.toLowerCase()) ||
          item.title.toLowerCase().includes(text.toLowerCase()),
      );
    }

    return collections;
  }, [collections, text]);

  const handleNavigateToCategory = useCallback(
    (category: CategoryProps) => {
      navigation.navigate('Category', {
        category,
      });
    },
    [navigation],
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <Header />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="Qual livro você gostaria de ler hoje?"
          editable={!categoriesLoading || !collectionsLoading}
        />
        <Image source={images.searchIcon} style={styles.searchIcon} />
      </View>

      {categoriesLoading || collectionsLoading ? (
        <View>
          <ActivityIndicator size="large" color={colors.main} />
        </View>
      ) : (
        <>
          <View style={styles.containerList}>
            <Text style={styles.titleList}>Para você</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={filteredCollections()}
              renderItem={({item}) => (
                <MainCard
                  book_image={item.book_image}
                  author={item.author}
                  title={item.title}
                  onPress={() => {}}
                />
              )}
            />
          </View>

          <View style={styles.containerList}>
            <Text style={styles.titleList}>Categorias</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={({item}) => (
                <CategoryCard
                  title={item.list_name}
                  color={randomColor()}
                  onPress={() => handleNavigateToCategory(item)}
                />
              )}
            />
          </View>

          <View style={styles.containerList}>
            <Text style={styles.titleList}>Os mais lidos da semana</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={filteredCollections()}
              renderItem={({item}) => (
                <MainCard
                  book_image={item.book_image}
                  author={item.author}
                  title={item.title}
                  onPress={() => {}}
                />
              )}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  containerList: {
    marginLeft: 16,
    marginBottom: 32,
  },
  titleList: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
    color: colors.main,
    marginBottom: 16,
  },
});
