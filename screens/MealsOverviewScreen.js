import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import MealsList from "../components/meals-list/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data"

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params

  const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(categoryId))

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === categoryId)
    navigation.setOptions({
      title: category.title
    })
  }, [categoryId, navigation])

  return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
});
