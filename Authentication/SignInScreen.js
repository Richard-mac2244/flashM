import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign into your account!',
  };

  signIn = async () => { //method
    await AsyncStorage.setItem("userToken", "Richard")
    this.props.navigation.navigate("App")
  };
  render() {
    return (
      <View style = {styles.container}>
        <Button title = "Complete sign in" onPress = {this.signIn} />
        <Text> Add sign in functions </Text>
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

export default SignInScreen;
