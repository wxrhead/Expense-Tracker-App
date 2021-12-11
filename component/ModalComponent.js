import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";

export default class ModalComponent extends React.Component{
  
  // const [title, setTitle] = useState("");
  // const [expense, setExpense] = useState("$");

  constructor(props){
    super(props);
    this.state = {
      title : "",
      expense : 0
    }
  }





  render(){
  
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.viewModal}
          style={styles.modalContainer}
        >
          <View style={styles.mainModalView}>
            <View style={styles.inputView}>
              <Text style={styles.inputViewText}>Title</Text>
              <TextInput
                value={this.state.title}
                style={styles.inputViewTextInput}
                onChangeText={(text) => {
                  this.setState({title : text});
                }}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputViewText}>Expense</Text>
              <TextInput
                value={this.state.expense}
                keyboardType="numeric"
                style={styles.inputViewTextInput}
                onChangeText={(text) => {
                  this.setState({expense : text});
                }}
              />
            </View>
            <TouchableOpacity onPress={()=>{
               this.props.addList(this.state.title , this.state.expense);
              this.props.cancelModal();
            }}>
              <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              this.props.cancelModal();
            }}>
              <Text style={styles.buttonText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      );

    }
    };

const styles = StyleSheet.create({
  mainModalView: {
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    width: 400,
    borderWidth: 1,
    backgroundColor: "#2095F2",
    marginTop: 103,
  },
  inputView: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  inputViewText: {
    marginRight: 25,
    fontSize: 18,
  },
  inputViewTextInput: {
    height: 35,
    width: 150,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    zIndex: 1000,
    borderRadius: 10,
  },
  buttonText: {
    backgroundColor: "grey",
    borderRadius: 10,
    padding: 10,
    margin: 7,
  },
});




