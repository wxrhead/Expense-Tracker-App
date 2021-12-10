import React , {useState}  from "react";
import { render } from "react-dom";
import { Text , View , TouchableOpacity , Modal , StyleSheet ,TextInput } from "react-native";


const ModalComponent = ({isVisible , cancelModal})=>{

        const [title, setTitle] = useState("")
        const [expense, setExpense] = useState("$")
        

        return(
            <Modal
            animationType="slide"
            transparent={true}
            visible = {isVisible}
            style={styles.modalContainer}
            >
                <View style={styles.mainModalView}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputViewText}>Title</Text>
                        <TextInput value={title} style={styles.inputViewTextInput} onChangeText={(text)=>{
                            setTitle(text);
                        }}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputViewText}>Expense</Text>
                        <TextInput value={expense} style={styles.inputViewTextInput} onChangeText={(text)=>{
                            setExpense(text);
                        }}/>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>ADD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        cancelModal();
                    }}>
                        <Text style={styles.buttonText}>CANCEL</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }


const styles = StyleSheet.create({
    mainModalView : {
       justifyContent : "center",
       alignItems : "center",
       height : 350,
       width : 400,
       borderWidth : 1,
       backgroundColor : "#2095F2",
       marginTop : 103
   },
   inputView : {
       borderWidth : 1,
       flexDirection : "row",
       alignItems : "center",
       padding : 10,
       marginBottom : 20
   },
   inputViewText : {
        marginRight : 25,
        fontSize : 18,

   },
   inputViewTextInput : {
        height : 35,
        width : 150,
        borderWidth : 1,
        padding : 10,
        backgroundColor : "white",
        zIndex : 1000,
        borderRadius : 10
   },
   buttonText : {
       backgroundColor : "grey",
       borderRadius : 10,
       padding : 10,
       margin : 7
    } 
})


export default ModalComponent ;