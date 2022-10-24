import { useContext, useLayoutEffect } from "react"
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import IconButton from "../components/meal-detail/IconButton"
import List from "../components/meal-detail/List"
import Subtitle from "../components/meal-detail/Subtitle"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/dummy-data"
import { addFavorite, removeFavorite } from "../store/redux/favorites"
// import { FavoritesContext } from "../store/context/favorites-context"

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params

  const selectedMeal = MEALS.find((mealItem) => mealItem.id === mealId)
  const { id, title, imageUrl, duration, complexity, affordability, ingredients, steps } = selectedMeal

  // const { ids: favoriteIds, addFavorite, removeFavorite } = useContext(FavoritesContext)
  const favoriteIds = useSelector((state) => state.favoriteMeals.ids)
  const isFavorite = favoriteIds.includes(id)

  const dispatch = useDispatch()

  const toggleFavorite = () => {
    if (isFavorite) {
      // removeFavorite(id)
      dispatch(removeFavorite({ id }))
    } else {
      // addFavorite(id)
      dispatch(addFavorite({ id }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon={isFavorite ? 'star' : 'star-outline'} color="white" onPress={toggleFavorite} />
        )
      }
    })
  }, [navigation, toggleFavorite])

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails duration={duration} complexity={complexity} affordability={affordability} textStyle={styles.detailText} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350
  },
  title: {
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center',
    paddingBottom: 40
  },
  listContainer: {
    width: '80%'
  }
});
