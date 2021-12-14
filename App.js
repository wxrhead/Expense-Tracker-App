import React, { Component } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View } from "react-native";
import Heading from "./component/Heading";
import MiddleExpenseList from "./component/MiddleExpenseList";
import TotalExpense from "./component/TotalExpense";
import ModalComponent from "./component/ModalComponent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewModal: false,
      billingList: [],
      finalExpense: 0,
    };
  }

   arrData = []

  // Heading Functions

  clearList = () => {
    this.setState({ billingList: [] , finalExpense : 0 });
  };

  // Modal functions

  addExpense = () => {
    this.setState({ viewModal: true });
  };

  cancelModal = () => {
    this.setState({ viewModal: false });
  };

  addList = (title, expense) => {
    let arry1 = [...this.state.billingList];
    arry1.push({ Title: title, Expense: expense, Key: this.state.key++ });
    this.setState({ billingList: arry1 });
    this.arrData.push(expense)
  };

  // ---------------------------------------

  // Total Expense Functions

  totalBill = () => {
    this.setState({
      finalExpense: this.state.billingList.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.Expense;
        },
        0
      ),
    });
  };

  // ------------------------------------------------------------

  render() {
    return (
      <View style={styles.container}>
        <Heading clearList={this.clearList} />
        <MiddleExpenseList billingList={this.state.billingList} />
        <TotalExpense
          addExpense={this.addExpense}
          finalExpense={this.state.finalExpense}
          arrData = {this.arrData}
        />
        <ModalComponent
          cancelModal={this.cancelModal}
          addExpense={this.addExpense}
          viewModal={this.state.viewModal}
          addList={this.addList}
          billingList={this.state.billingList}
          totalBill={this.totalBill}

        />
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
