import { useState } from "react";
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/goal.png")}
          />
        </View>
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
    justifyContent: "center",
    backgroundColor: "#000080",
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#a6a6a6",
    padding: 4,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});

export default GoalForm;
