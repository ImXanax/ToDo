import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Task from "./components/Task";
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  // functions
  const newTaskHandler = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    console.log("new task handler fired");
  };
  const completedTasks = (i) => {
    let itemCp = [...taskItems];
    itemCp.splice(i, 1);
    setTaskItems(itemCp);
    console.log("completed tasks fired");
  };
  return (
    <View style={styles.container}>
      <StatusBar style={'light'} barStyle="dark-content" />

      <View style={styles.tasksContainer}>
        <Text style={styles.mainTitle}>Current Tasks</Text>
        <View style={styles.tasks}>
          {taskItems.map((item, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => completedTasks(i)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.createTaskContainer}
      >
        <TextInput
          style={styles.input}
          placeholder={"New Task"}
          placeholderTextColor={"#F8EBFF"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => newTaskHandler()}>
          <View style={styles.addContainer}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10002B",
  },
  tasksContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F8EBFF",
  },
  tasks: {
    marginTop: 30,
  },
  createTaskContainer: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    maxWidth: 250,
    backgroundColor: "#34085E",
    borderRadius: 60,
    borderColor: "#16003D",
    borderWidth: 1.5,
    width: 250,
    textAlign: "center",
  },
  addContainer: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#34085E",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#16003D",
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
    color: "#F8EBFF",
  },
});
