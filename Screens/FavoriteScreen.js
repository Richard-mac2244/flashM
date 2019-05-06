import React from 'react';
import { Alert, StyleSheet, Text, View, Button, List, ListItem, FlatList } from 'react-native';

class FavoriteScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorite',
  };

  handleClick() {
    Alert.alert("You clicked the button!")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Favorites </Text>
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

export default FavoriteScreen;
