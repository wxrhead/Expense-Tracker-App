import React from "react";
import { render } from "react-dom";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedbackBase,
} from "react-native";

export default class TotalExpense extends React.Component {

  render() {

    return (
      <>
        <View style={styles.totalExpenseView}>
          <View style={{ marginTop: 10, marginBottom: 6 }}>
            <Text style={styles.totalData}>
              Expense Sheet Total (In USD) :{" "}
              <Text style={styles.expenseFont}>${this.props.finalExpense}</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.totalData}>
              Expense Sheet Total (In INR) :
              <Text style={styles.expenseFont}>
                ₹{parseInt(this.props.finalExpense * 75.79)}
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.addExpense();
            }}
          >
            <Text style={styles.addButton}>ADD NEW EXPENSE</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  totalExpenseView: {
    borderWidth: 1,
    height: 150,
    alignItems: "center",
    borderColor: "#F2F2F2",
  },
  addButton: {
    backgroundColor: "#2095F2",
    height: 50,
    width: 330,
    textAlign: "center",
    color: "white",
    borderRadius: 5,
    textAlignVertical: "center",
    marginTop: 30,
  },
  totalData: {
    color: "#C0C6CF",
    fontWeight: "bold",
    fontSize: 16,
  },
  expenseFont: {
    color: "#26324C",
    fontSize: 20,
    fontWeight: "bold",
  },
});
