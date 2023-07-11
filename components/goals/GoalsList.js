import { View, Text, StyleSheet, FlatList } from "react-native";
import GoalItem from "./GoalItem";

const GoalsList = ({ goals }) => {
  return (
    <View>
      <View style={styles.goalsTitleContainer}>
        <Text style={styles.goalsTitle}>Goals List</Text>
      </View>
      <FlatList
        data={goals}
        renderItem={(itemData) => <GoalItem goal={itemData.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsTitleContainer: {
    alignItems: "center",
  },
  goalsTitle: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "800",
  },
});

export default GoalsList;
