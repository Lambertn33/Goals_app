import { StyleSheet, Text, View } from "react-native";
import GoalForm from "./components/goals/GoalForm";
import { useState } from "react";
import GoalsList from "./components/goals/GoalsList";

export default function App() {
  const [goals, setGoals] = useState([]);
  const addGoalHandler = (newGoal) =>
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  return (
    <View style={styles.appContainer}>
      <GoalForm onPress={addGoalHandler} />
      <GoalsList goals={goals} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    gap: 16,
    backgroundColor: "#d9d9d9",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
