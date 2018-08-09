import React, { Component } from "react";
import { View, Text, Button, TextInput, Alert, StyleSheet } from "react-native";
import axios from "axios";
import Usuario from "./Usuario.js";

class Ficha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      since: 0,
      textoBuscar: ""
    };
  }

  getText = value => {
    this.setState({ textoBuscar: value });
  };

  buscarUsuario = () => {
    const url = `https://api.github.com/search/users?q=${
      this.state.textoBuscar
    }`;

    axios
      .get(url)
      .then(res => {
        var usuarios = res.data.items;
        this.mostrarUsuarios(usuarios);
      })
      .catch(error => console.log("Error!", error));
  };

  mostrarUsuarios = usuarios => {
    this.setState(() => ({ usuarios }));
  };

  nextPage = () => {
    //console.log(this.state.since);
    axios
      .get(`https://api.github.com/users?since=${this.state.since}`)
      .then(res => {
        //console.log(res);
        var usuarios = res.data;
        //Alert.alert(this.state.since.toString());
        this.setState(() => ({ since: this.state.since + 30 }));
        //this.setState(() => ({ usuarios }));
        this.mostrarUsuarios(usuarios);
      })
      .catch(error => Alert.alert(error));
    //this.setState(() => ({ since: this.state.since + 30, usuarios: [] }));
  };

  componentDidMount() {
    this.mostrarUsuarios(this.state.usuarios);
  }

  render() {
    return (
      <View>
      <View  style={styles.container}>
        <TextInput
          style={styles.input}
          type="text"
          placeholder="buscar"
          //value={this.state.textoBuscar}
          onBlur={this.buscarUsuario}
          onChangeText={this.getText}
        />
        <Button style={styles.boton} title="Next" onPress={this.nextPage} />
      </View>
        {this.state.usuarios.map(u => (
          <Usuario verProfile={this.props.verProfile} key={u.id} {...u} />
        ))}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    height: 40,
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius:5,
    padding:10,
  },
  container: {
    color: "#fff",
    margin:10,
  },
  boton: {
    margin: 10,
    width:400,
  }
});

export default Ficha;
