import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import axios from "axios";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: this.props.navigation.state.params.login,
      avatar_url: this.props.navigation.state.params.avatar_url,
      bio: this.props.navigation.state.params.bio,
      usuario: {}
    };
  }

  getUser() {
    axios
      .get(`https://api.github.com/users/${this.state.login}`)
      .then(res => {
        this.setState({ usuario: res.data });
        //console.warn(this.state.usuario);
      })
      .catch(error => {});
  }

  componentDidMount() {
    this.getUser();
    // const obj = this.props.navigation.state.params.objeto;
    // this.setState({avatar_url:obj.avatar_url, bio:obj.bio});
  }
  render() {
    return (
      <View >
        <Image
          source={{ uri: `${this.state.usuario.avatar_url}` }}
          style={styles.avatar}
        />
        <View style={styles.container}>
            <Text>{this.state.usuario.name}</Text>
            <Text style={styles.login}>{this.state.usuario.login}</Text>
            <Text>{this.state.usuario.location}</Text>
            <Text style={styles.bio}>{this.state.usuario.bio}</Text>
        </View>
        <Button
          title="Go Back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
   // flex:1,
     alignItems: 'center',
    justifyContent:'center',
    margin: 10
  },
  avatar: {
    width: 380,
    height: 380,
    borderRadius: 380 / 2
    , margin:10
  },
  login: {
    fontSize: 30,
    fontWeight: "bold"
  },
  bio:
  {
    fontSize: 16,
    margin:5,
    textAlign:'justify',
    
  }
});
