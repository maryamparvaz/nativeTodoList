import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList
} from "react-native";

export default function App() {
  const [updateValue, setUpdateValue] = useState("");
  const [listOfGoal, setListOfGoal] = useState([]);
  function inputHandler(textInp) {
    setUpdateValue(textInp);
  }

  function addGoal() {
    setListOfGoal((currentCourseGoal) => [...currentCourseGoal, updateValue]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder="goal"
          onChangeText={inputHandler}
        />
        <Button onPress={addGoal} title="Add goals" />
      </View>
      <View style={styles.textStyle}>
        <FlatList data={listOfGoal} renderItem={data =>{
          return (
            <View style={styles.listStyle}>
              <Text>{data.item}</Text>
            </View>
          );
        }} />
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  textinput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 5,
  },
  textStyle: {
    flex: 6,
  },
  listStyle: {
    backgroundColor: "orange",
    padding: 5,
    borderWidth: 1,
    marginVertical: 5,
  },
});
