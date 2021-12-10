import React , {Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View , TouchableOpacity ,Image} from 'react-native';

export default class Heading extends React.Component{

  
    render(){
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.mainHeading}>EXPENSES SHEET</Text>
        <TouchableOpacity>
          <Image resizeMode={"contain"} style={styles.deleteIcon} source={require("../images/deleteicon.png")} />
        </TouchableOpacity>
      </View>
    );
    }
  }

  const styles = StyleSheet.create({
    headingContainer: {
      flexDirection : "row",
      justifyContent: 'center',
      alignItems : "center",
      borderWidth : 1,
      borderColor : "#F2F2F2",
      height : 50,
      marginTop : 60
    },
    mainHeading : {
        fontWeight : "700",
        fontSize : 18,
        color : "#2095F2",
        marginLeft : 80
    },
    deleteIcon : {
      height : 35,
      marginLeft : 0,
      width:35,
      marginLeft : 80
    }
  });
