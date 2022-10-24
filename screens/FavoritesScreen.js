import { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"
import MealsList from "../components/meals-list/MealsList"
import { MEALS } from "../data/dummy-data"
import { FavoritesContext } from "../store/context/favorites-context"

const FavoritesScreen = () => {
  // const { ids: favoriteIds} = useContext(FavoritesContext)
  const favoriteIds = useSelector((state) => state.favoriteMeals.ids)
  const favoriteMeals = MEALS.filter((meal) => favoriteIds.includes(meal.id))

  if (!favoriteMeals.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }

  return (
    <MealsList items={favoriteMeals} />
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3f2f25'
  }
});
