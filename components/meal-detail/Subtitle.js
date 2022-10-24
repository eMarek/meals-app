import { StyleSheet, Text, View } from "react-native"

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#af8972",
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4
  },
  subtitle: {
    color: '#af8972',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
