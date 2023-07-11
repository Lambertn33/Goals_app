import { Text, View, StyleSheet } from "react-native";

const GoalItem = ({ goal }) => {
  return (
    <View style={styles.goalItemContainer}>
      <Text style={styles.goalItem}>{goal.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItemContainer: {
    backgroundColor: "#007399",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 12
  },
  goalItem: {
    color: "#fff",
    fontSize: 20,
  },
});
export default GoalItem;
