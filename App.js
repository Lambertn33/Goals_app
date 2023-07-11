import { Button, StyleSheet, Text, View } from "react-native";
import GoalForm from "./components/goals/GoalForm";
import { useState } from "react";
import GoalsList from "./components/goals/GoalsList";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const addGoalHandler = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setFormVisible(false);
  };

  const deleteGoalHandler = (id) => {
    const filteredGoals = goals.filter((goal) => goal.id !== id);
    setGoals(filteredGoals);
  };

  const onToggleModal = () => setFormVisible(!formVisible);

  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal" onPress={onToggleModal} />
      <GoalForm
        onAddGoal={addGoalHandler}
        onToggleModal={onToggleModal}
        visible={formVisible}
      />
      <GoalsList goals={goals} onDeleteHandler={deleteGoalHandler} />
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
