import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Task from "./components/Task";


export default function App() {
  const [task , setTask] = useState()
  const newTaskHandler = () =>{
    console.log(task)
  }

  return (
    <View style={styles.container}>
      {/* Current Tasks */}
      <View style={styles.tasksContainer}>
        <Text style={styles.mainTitle}>Current Tasks</Text>
        <View style={styles.tasks}>
          {/* where tasks will be */}
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </View>
      </View>
      {/* Create Tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.createTaskContainer}
      >
        <TextInput style={styles.input} placeholder={"New Task"} value={task} onChangeText={text => setTask(text)}/>
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
    backgroundColor: "#e8eaed",
  },
  tasksContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
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
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
  },
  addContainer: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
    color: '#0Aaccc'
  },
});
