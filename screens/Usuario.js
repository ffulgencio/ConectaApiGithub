import React, { Component } from "react";
import {View, Text, Image, StyleSheet,TouchableOpacity, Alert} from 'react-native'
//import '../App.css';

class Usuario extends Component {
  state = {
    obj:{
      avatar_url:'http://www.coordinadora.com/wp-content/uploads/sidebar_usuario-corporativo.png'},
      bio:'Programador de aplicaciones moviles'
  }
  _onPressButton = ()=>{
      Alert.alert('funciona',"Esto es un mensaje");
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.verProfile}>
        <View style={styles.cajaHorizontal}>
          
          <Image source={{uri:`${this.props.avatar_url}`}} style={styles.avatar}/>
          <View>
            <Text style={styles.login}>{this.props.login}</Text>
            {/* <Text>{this.props.name || "Nombre no especificado"}</Text> */}
            <Text>{this.props.bio}</Text>
            <Text style={styles.link}>Github: {this.props.html_url}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cajaHorizontal:{
    flex: 1, 
    flexDirection: 'row',
    color:'white',
    backgroundColor: '#303030',
    margin:10,
  },
  login:{
    fontSize: 30,
    fontWeight: 'bold',
    color:'#fff'
    // textAlign: 'center', 
  },
  avatar:{
    
    width:100,
    height:100,
    margin:10
  },
  link:{
    color:'lime'
  },

  
});
export default Usuario;
