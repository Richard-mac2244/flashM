import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the FlashTryp!',
  };

  render() {
    return (
      <View style = {styles.container}>
        <View style = {{flexDirection:'row'}}>
          <Button onPress={() => this.props.navigation.navigate('SignIn')}
            title = "Sign in" />
          <Button onPress={() => this.props.navigation.navigate('CreateAccount')}
            title = "Register" />
        </View>
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

export default WelcomeScreen;
