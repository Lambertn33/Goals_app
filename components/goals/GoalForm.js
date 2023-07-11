import { useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

const GoalForm = ({ onPress }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const addGoalHandler = () => {
    const newGoal = {
      id: Math.random().toString(),
      description: enteredGoal,
    };
    onPress(newGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter the goal"
        style={styles.input}
        value={enteredGoal}
        onChangeText={(goal) => setEnteredGoal(goal)}
      />
      <Button title="Add Goal" onPress={addGoalHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    gap: 16,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#a6a6a6",
    padding: 4,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
});

export default GoalForm;
