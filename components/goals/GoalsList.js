import { View, Text, StyleSheet, FlatList } from "react-native";
import GoalItem from "./GoalItem";

const GoalsList = ({ goals, onDeleteHandler }) => {
  return (
    <View>
      <View style={styles.goalsTitleContainer}>
        <Text style={styles.goalsTitle}>Goals List</Text>
      </View>
      {goals.length > 0 ? (
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem goal={itemData.item} onPress={onDeleteHandler} />
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No goals for now</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#b32400'
  },
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
