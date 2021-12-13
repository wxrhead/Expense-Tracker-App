import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import { BlurView, VibrancyView } from "@react-native-community/blur";

export default class ModalComponent extends React.Component {
  // const [title, setTitle] = useState("");
  // const [expense, setExpense] = useState("$");

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      expense: 0,
    };
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.viewModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#7F000006",
          }}
          blurType="light"
        >
          <View style={styles.mainModalView}>
            <View style={styles.inputView}>
              <Text style={{ ...styles.inputViewText, marginRight: 58 }}>
                Title
              </Text>
              <View style={styles.inputViewTextInput}>
                <TextInput
                  placeholder="Title"
                  value={this.state.title}
                  onChangeText={(text) => {
                    this.setState({ title: text });
                  }}
                />
              </View>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputViewText}>Expense</Text>
              <View style={styles.inputViewTextInput}>
                <TextInput
                  value={this.state.expense}
                  keyboardType="numeric"
                  placeholder={"Enter expense"}
                  onChangeText={(text) => {
                    this.setState({ expense: text });
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.expense == "" && this.state.title == "") {
                    alert("Empty Fields");
                  } else if (this.state.expense == "") {
                    alert("You forgot to enter Expense");
                  } else if (this.state.title == "") {
                    alert("You forgot to enter Title");
                  } else {
                    this.props.addList(
                      this.state.title,
                      parseInt(this.state.expense)
                    );
                    this.setState({ title: "", expense: 0 });
                    this.props.totalBill();
                    this.props.cancelModal();
                  }
                }}
              >
                <Text style={styles.buttonText}>ADD</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.cancelModal();
                }}
              >
                <Text style={styles.buttonText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainModalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2095F2",
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 10,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  inputViewText: {
    marginRight: 25,
    fontSize: 18,
  },
  inputViewTextInput: {
    height: 40,
    width: "50%",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
  buttonText: {
    width: 100,
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 10,
    margin: 7,
    textAlign: "center",
  },
});
