import React, { Component } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

export default class MiddleExpenseList extends React.Component {
  render() {
    return (
      <View style={styles.listView}>
        <FlatList
          data={this.props.billingList}
          renderItem={({ item }) => (
            <View style={styles.individualBillView}>
              <View style={styles.upperBillView}>
                <Text style={styles.billTitle}>{item.Title}</Text>
                <Text style={styles.bill}>${item.Expense}</Text>
              </View>
              <View style={styles.lowerBillView}>
                <Text style={styles.billDate}>June , 1984</Text>
                <TouchableOpacity><Image source={require("../images/edit.png")} style={styles.editIcon} resizeMode="cover"/></TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    height: 500,
    paddingLeft : 20
  },
  individualBillView : {
    height : 90,
    borderWidth : 1,
    borderColor : "#F2F2F2",
    marginTop : 5,
    marginBottom : 5,
    padding : 14,
    borderRadius : 5
  },
  upperBillView : {
      flexDirection : "row",
  },
  lowerBillView : {
    flexDirection : "row",
    marginTop : 10
  },
  billTitle : {
    color : "#26324C",
    fontSize : 20,
    marginRight : 185,
    marginLeft : 15,
  },
  bill : {
      color : "#2095F2",
      fontSize : 20,
      fontWeight : "bold",
  },
  billDate : {
    color : "#C3C9CF",
    fontWeight : "bold",
    marginRight : 195,
    fontSize : 16
  },
  editIcon : {
      height : 27,
      width : 27,
  }
});
