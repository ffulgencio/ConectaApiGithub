import React, {Component} from 'react';
import {View, 
        Text, 
        Button, 
        StyleSheet,
        Image} from 'react-native';


class ProfileScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:'USERNAME',
            avatar_url:'',//this.props.navigation.state.params.objeto.avatar_url,
            bio:''//this.props.navigation.state.params.objeto.bio
        };
    }

    componentDidMount(){
        // const obj = this.props.navigation.state.params.objeto;
        // this.setState({avatar_url:obj.avatar_url, bio:obj.bio});

    }
    render(){
        return (
            <View style={styles.container}>
                 <Image source={{uri:`${this.state.avatar_url}`}}
                        style={{width:100, height:100}} /> 
                
               <Text>{this.state.login}</Text>
               <Text>{this.state.bio}</Text>
               <Button title="Go Back" onPress={()=>{
                    this.props.navigation.goBack();
                }} />
            </View>
        );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});