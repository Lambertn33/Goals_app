import { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";

const GoalForm = ({ onAddGoal, onToggleModal, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const addGoalHandler = () => {
    const newGoal = {
      id: Math.random().toString(),
      description: enteredGoal,
    };
    onAddGoal(newGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter the goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={(goal) => setEnteredGoal(goal)}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={onToggleModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    paddingHorizontal: 24,
    gap: 16,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    paddingBottom: 24,
    justifyContent: "center",
    flex: 1,
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
