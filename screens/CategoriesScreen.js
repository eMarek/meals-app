import { View, FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    const onPressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: item.id
      })
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={onPressHandler}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen