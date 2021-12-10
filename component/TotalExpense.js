import React from "react";
import {render} from "react-dom";
import {View , Text , StyleSheet , TouchableOpacity, TouchableNativeFeedbackBase} from "react-native"
import ModalComponent from "./ModalComponent";

export default class TotalExpense extends React.Component{


    constructor(){
        super();
        this.state = {
            viewModal : false
        }
        
    }

    addExpense = () =>{
        this.setState({viewModal : true});
        // alert("Hey")
    }

    cancelModal = () =>{
        this.setState({viewModal : false})
    }

    render(){
        return(
            <>
            <View style={styles.totalExpenseView}>
                <View>
                    <Text style={styles.totalData}>Expense Sheet Total (In USD) :</Text>
                </View>
                <View>
                    <Text  style={styles.totalData}>Expense Sheet Total (In INR) : </Text>
                </View>
                <TouchableOpacity onPress={()=>{this.addExpense()}}>
                    <Text style={styles.addButton}>ADD NEW EXPENSE</Text>
                </TouchableOpacity>
            </View>
            <ModalComponent isVisible={this.state.viewModal} cancelModal = {this.cancelModal} />
            </>
        )
    };
}

const styles = StyleSheet.create({
   totalExpenseView : {
       borderWidth : 1,
       height : 150,
       alignItems :"center",
       marginTop : 500,
       borderColor : "#F2F2F2"
   },
   addButton :{
       backgroundColor : "#2095F2",
       height : 50,
       width : 330,
       textAlign : "center",
       color : "white",
       borderRadius : 5,
       textAlignVertical : "center",
       marginTop : 30
   },
   totalData : {
       color : "#C0C6CF",
       fontWeight : "bold"
   }
});

// #9BA6B3