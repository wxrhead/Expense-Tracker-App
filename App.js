import React, { Component } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ExpenseList from "./component/MiddleExpenseList";
import Heading from "./component/Heading";
import MiddleExpenseList from "./component/MiddleExpenseList";
import TotalExpense from "./component/TotalExpense";
import ModalComponent from "./component/ModalComponent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Heading />
        <MiddleExpenseList />
        <TotalExpense />
        {/* <ModalComponent/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
