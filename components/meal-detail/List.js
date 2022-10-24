import { Text, View, StyleSheet } from "react-native"

const List = ({ data }) => {
  return data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ))
}

export default List

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#af8972'
  },
  itemText: {
    color: '#351401',
    textAlign: 'center'
  }
});
