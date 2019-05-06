import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, AsyncStorage } from 'react-native';

class AuthLoadingScreen extends React.Component{

  constructor(){
    super();
    this.loadApp();
  }

  loadApp = async() => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style = {styles.container}>
        <ActivityIndicator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthLoadingScreen;
