import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ goal, onPress }) => {
  return (
    <Pressable onPress={onPress.bind(null, goal.id)} style={({ pressed }) => pressed && styles.pressedItem}>
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItem}>{goal.description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItemContainer: {
    backgroundColor: "#007399",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 12,
  },
  goalItem: {
    color: "#fff",
    fontSize: 20,
  },
  pressedItem: {
    backgroundColor: 'red'
  }
});
export default GoalItem;
