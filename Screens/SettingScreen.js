import React from 'react';
import { SafeAreaView, Alert, AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView, Button} from 'react-native';
import Icon from 'react-native-ionicons';

class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth")
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text> Account Settings</Text>
        <Button title = "Sign Out" onPress={this.signOutAsync} />
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

export default SettingScreen;
