import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class AccountDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Account',
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text> Account Details</Text>
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

export default AccountDetailScreen;
