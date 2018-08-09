import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
//import '../App.css';

class Usuario extends Component {
  state = {
    obj: {
      login: "",
      avatar_url:
        "http://www.coordinadora.com/wp-content/uploads/sidebar_usuario-corporativo.png"
    },
    bio: "Programador de aplicaciones moviles"
  };
  _onPressButton = () => {
    Alert.alert("funciona", "Esto es un mensaje");
  };

  componentDidMount() {
    this.setState({ obj: this.props });
  }
  render() {
    const { verProfile } = this.props;
    return (
      <TouchableOpacity onPress={() => verProfile(this.state.obj)}>
        <View style={styles.cajaHorizontal}>
          <Image
            source={{ uri: `${this.props.avatar_url}` }}
            style={styles.avatar}
          />
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
  cajaHorizontal: {
    flex: 1,
    flexDirection: "row",
    // color:'white',
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight:10,
    marginBottom:5,
    // marginBottom:4,
    borderRadius: 5
  },
  login: {
    fontSize: 30,
    fontWeight: "bold"
    // color:'#fff'
    // textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 30
  },
  link: {
    // color:'blue'
  }
});
export default Usuario;
