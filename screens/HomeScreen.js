import React, { Component } from "react";
import { ScrollView, Button, StyleSheet } from "react-native";
import Ficha from "./Ficha";

class HomeScreen extends Component {

  goToProfilePage =(data) => {
    this.props.navigation.navigate("Profile", data);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
     
        <Ficha verProfile={this.goToProfilePage}/>
        {/* <Button
          title="Go to profile page"
          onPress={this.goToProfilePage}
        /> */}
      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin:10,
    //color:'#fff'
    backgroundColor:'#f0f1f0'
  }
});
