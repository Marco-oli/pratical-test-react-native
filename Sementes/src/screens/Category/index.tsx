import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {MainCard} from '../../components/MainCard';
import {useGetCategoryBooks} from '../../hooks/Category/useGetCategoryBooks';
import {HomeStackProps} from '../../routes/HomeStack';

export const Category = () => {
  const {
    params: {category},
  } = useRoute<RouteProp<HomeStackProps, 'Category'>>();
  const navigation = useNavigation();

  const {categoriesBooks, categoriesBooksLoading, getCategoriesBooks} =
    useGetCategoryBooks();

  useEffect(() => {
    getCategoriesBooks(category.list_name_encoded);
  }, [category.list_name_encoded]);

  console.log(categoriesBooks);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <Image source={images.backIcon} />
        </TouchableOpacity>

        <Text style={styles.title}>{category.display_name}</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={categoriesBooks?.books}
        numColumns={3}
        columnWrapperStyle={styles.columnWraper}
        renderItem={({item}) => (
          <MainCard
            author={item.author}
            book_image={item.book_image}
            title={item.title}
            onPress={() => {}}
          />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 36,
  },
  backIcon: {
    marginRight: 21,
  },
  title: {
    width: '70%',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
    color: colors.main,
  },
  columnWraper: {
    justifyContent: 'space-between',
    marginBottom: 24,
  },
});
