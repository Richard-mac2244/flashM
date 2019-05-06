import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, TextInput, Clipboard, Alert, ASyncStorage,StyleSheet } from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button} from 'native-base';
import { ListItem, SearchBar } from 'react-native-elements';
import Icon from 'react-native-ionicons';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../Images/icon.png')}
        style={{paddingBottom: 20}}
      />
    );
  }
}

class FeedScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clipboardContent: null,
      Link:'',
      loading: false,
      realLikes:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      data: [
        {
          "ID": "1",
          "Title": "Walk Across Golden Gate Bridge",
          "Neighborhood": "Presidio",
          "Website": "http://www.goldengatebridge.org/",
          "Image": "require('../Images/VisitCoit.jpg')",
          "Description": "Take a walk across the Golden Gate Bridge and admire the spectacular view of the the Bay, Marin and San Francisco. This activity is free, and extremely popular for those who visit San Francisco!",
          "Tags":  "#Outdoors #Picturesque #Water #Touristy #MustDo"
        },
        {
         "ID": "2",
         "Title": "Visit the Exploratorium",
          "Neighborhood": "Embarcadero",
          "Website": "https://www.exploratorium.edu/",
          "Image": "require('../Images/HangOutWash.jpg')",
          "Description": "The Exploratorium is a museum of science, art, and human perception and has hundreds of exhibits that offer a unique learning experience of a lifetime.",
          "Tags": "#Museum #KidFriendly #Water"
        },
        {
          "ID": "3",
          "Title": "Go ice skating at Yerba Buena",
          "Neighborhood": "Downtown",
          "Website": "https://www.skatebowl.com/ice-skating",
          "Image": "require('../Images/MuirWood.jpg')",
          "Description": "Put on your hats and scarves and visit the Yerba Buena Ice Skating rink. This location is the only rink that is open year round and also offers ice skating lessons for all levels.",
          "Tags": "#Sports #KidFriendly"
        },
        {
          "ID": "4",
         "Title": "Hangout in Washington Square Park",
          "Neighborhood": "North Beach",
          "Website": "http://sfrecpark.org/destination/washington-square/",
          "Image": "require('../Images/TennisSF.jpg')",
          "Description": "Washington Square Park is a giant green grassy field that has been around for over 170 years. The park is a great place to practice sports or hangout and picnic in the North beach district of San Francisco.",
          "Tags": "#Outdoors #Picturesque #Niche #Relaxing"
        },
        {
          "ID": "5",
          "Title": "Visit Muir Woods",
          "Neighborhood": "Marin",
          "Website": "http://www.visitmuirwoods.com/",
          "Image": "require('../Images/VisitAAM.jpg')",
          "Description": "Hike, bike, or tour some of the world's oldest and tallest trees in Muir Woods National Monument. Have a picnic and/or explore the park’s wildlife creeks and beaches overlooking the Pacific Ocean.",
          "Tags":  "#Outdoors #Picturesqu #Historic"
        },
        {
          "ID": "6",
          "Title": "Visit the Asian Art Museum",
          "Neighborhood": "Civic Center",
          "Website": "http://www.asianart.org/",
          "Image1":"require('../Images/IceSkatingYB.jpg')",
          "Description": "The Asian Art Museum is home to art exhibits from all over Asia. The location also includes events, celebrations and workshops.",
          "Tags": "#Museum #Historic #Art #Relaxing"
        },
        {
          "ID": "7",
          "Title": "Play tennis at one of San Francisco's public courts",
          "Neighborhood": "Golden Gate Park , Mission , Haight Ashbury , North Beach",
          "Website": "",
          "Image": "require('../Images/VisitDisney.jpg')",
          "Description": "Bring your racquets to one of San Francisco's beautiful public tennis courts located throughout the city such as Golden Gate Park Tennis Courts (https://goldengatepark.com/tennis.html), Alice Marble Tennis Courts (https://sfrecpark.org/destination/alice-marble-courts/alice-marble-tennis-courts/), Buena Vista Park Tennis Courts (https://sfrecpark.org/destination/buena-vista-park/buena-vista-park-tennis-courts/), or Mission Dolores Park Tennis Courts (https://sfrecpark.org/destination/mission-dolores-park/mission-dolores-park-tennis-courts/).",
          "Tags": "#Outdoors #Sports #Relaxing"
        },
        {
          "ID": "8",
          "Title": "Visit the Walt Disney Museum",
          "Neighborhood": "Presidio",
          "Website": "https://www.waltdisney.org/",
          "Image": "require('../Images/VisitExp.jpg')",
          "Description": "Explore Walt Disney’s history and legacy at The Walt Disney Family Museum. This museum features hi-tech interactive exhibits from listening stations to some of Disney’s original sketches on some of your favorite characters. The Walt Disney Family Museum is a fascinating and fun place to visit for all ages.",
          "Tags": "#Museum #Historic #KidFriendly"

        },
        {
          "ID": "9",
          "Title": "Walk around the Conservatory of Flowers",
          "Neighborhood": "Golden Gate Park",
          "Website": "https://conservatoryofflowers.org/",
          "Image": "require('../Images/WalkFlower.jpg')",
          "Description": "Located in Golden Gate Park, the Conservatory of Flowers is one of the most beautiful and relaxing places in the city. Much like the name suggests, inside there is a plethora of different flowers that are amazing to see!",
          "Tags": "#Museum #Picturesque #Architecture #Historic"
        },
        {
          "ID": "10",
          "Title": "Visit the top of Coit Tower",
          "Neighborhood": "North Beach",
          "Website": "http://sfrecpark.org/destination/telegraph-hill-pioneer-park/coit-tower/",
          "Image": "require('../Images/WalkGolden.jpg')",
          "Description": "Located on top of Telegraph Hill, Coit Tower is one San Francisco’s most well known sites. The top of Coit Tower provides a stunning view of the city!",
          "Tags": "#Toursity #Picturesque #Historic #Architecture"
        }
      ],
      error: null,
    };

    this.arrayholder = [
                        {
                          "ID": "1",
                          "Title": "Walk Across Golden Gate Bridge",
                          "Neighborhood": "Presidio",
                          "Website": "http://www.goldengatebridge.org/",
                          "Image": "require('../Images/VisitCoit.jpg')",
                          "Description": "Take a walk across the Golden Gate Bridge and admire the spectacular view of the the Bay, Marin and San Francisco. This activity is free, and extremely popular for those who visit San Francisco!",
                          "Tags":  "#Outdoors #Picturesque #Water #Touristy #MustDo"
                        },
                        {
                         "ID": "2",
                         "Title": "Visit the Exploratorium",
                          "Neighborhood": "Embarcadero",
                          "Website": "https://www.exploratorium.edu/",
                          "Image": "require('../Images/HangOutWash.jpg')",
                          "Description": "The Exploratorium is a museum of science, art, and human perception and has hundreds of exhibits that offer a unique learning experience of a lifetime.",
                          "Tags": "#Museum #KidFriendly #Water"
                        },
                        {
                          "ID": "3",
                          "Title": "Go ice skating at Yerba Buena",
                          "Neighborhood": "Downtown",
                          "Website": "https://www.skatebowl.com/ice-skating",
                          "Image": "require('../Images/MuirWood.jpg')",
                          "Description": "Put on your hats and scarves and visit the Yerba Buena Ice Skating rink. This location is the only rink that is open year round and also offers ice skating lessons for all levels.",
                          "Tags": "#Sports #KidFriendly"
                        },
                        {
                          "ID": "4",
                         "Title": "Hangout in Washington Square Park",
                          "Neighborhood": "North Beach",
                          "Website": "http://sfrecpark.org/destination/washington-square/",
                          "Image": "require('../Images/TennisSF.jpg')",
                          "Description": "Washington Square Park is a giant green grassy field that has been around for over 170 years. The park is a great place to practice sports or hangout and picnic in the North beach district of San Francisco.",
                          "Tags": "#Outdoors #Picturesque #Niche #Relaxing"
                        },
                        {
                          "ID": "5",
                          "Title": "Visit Muir Woods",
                          "Neighborhood": "Marin",
                          "Website": "http://www.visitmuirwoods.com/",
                          "Image": "require('../Images/VisitAAM.jpg')",
                          "Description": "Hike, bike, or tour some of the world's oldest and tallest trees in Muir Woods National Monument. Have a picnic and/or explore the park’s wildlife creeks and beaches overlooking the Pacific Ocean.",
                          "Tags":  "#Outdoors #Picturesqu #Historic"
                        },
                        {
                          "ID": "6",
                          "Title": "Visit the Asian Art Museum",
                          "Neighborhood": "Civic Center",
                          "Website": "http://www.asianart.org/",
                          "Image1":"require('../Images/IceSkatingYB.jpg')",
                          "Description": "The Asian Art Museum is home to art exhibits from all over Asia. The location also includes events, celebrations and workshops.",
                          "Tags": "#Museum #Historic #Art #Relaxing"
                        },
                        {
                          "ID": "7",
                          "Title": "Play tennis at one of San Francisco's public courts",
                          "Neighborhood": "Golden Gate Park , Mission , Haight Ashbury , North Beach",
                          "Website": "",
                          "Image": "require('../Images/VisitDisney.jpg')",
                          "Description": "Bring your racquets to one of San Francisco's beautiful public tennis courts located throughout the city such as Golden Gate Park Tennis Courts (https://goldengatepark.com/tennis.html), Alice Marble Tennis Courts (https://sfrecpark.org/destination/alice-marble-courts/alice-marble-tennis-courts/), Buena Vista Park Tennis Courts (https://sfrecpark.org/destination/buena-vista-park/buena-vista-park-tennis-courts/), or Mission Dolores Park Tennis Courts (https://sfrecpark.org/destination/mission-dolores-park/mission-dolores-park-tennis-courts/).",
                          "Tags": "#Outdoors #Sports #Relaxing"
                        },
                        {
                          "ID": "8",
                          "Title": "Visit the Walt Disney Museum",
                          "Neighborhood": "Presidio",
                          "Website": "https://www.waltdisney.org/",
                          "Image": "require('../Images/VisitExp.jpg')",
                          "Description": "Explore Walt Disney’s history and legacy at The Walt Disney Family Museum. This museum features hi-tech interactive exhibits from listening stations to some of Disney’s original sketches on some of your favorite characters. The Walt Disney Family Museum is a fascinating and fun place to visit for all ages.",
                          "Tags": "#Museum #Historic #KidFriendly"

                        },
                        {
                          "ID": "9",
                          "Title": "Walk around the Conservatory of Flowers",
                          "Neighborhood": "Golden Gate Park",
                          "Website": "https://conservatoryofflowers.org/",
                          "Image": "require('../Images/WalkFlower.jpg')",
                          "Description": "Located in Golden Gate Park, the Conservatory of Flowers is one of the most beautiful and relaxing places in the city. Much like the name suggests, inside there is a plethora of different flowers that are amazing to see!",
                          "Tags": "#Museum #Picturesque #Architecture #Historic"
                        },
                        {
                          "ID": "10",
                          "Title": "Visit the top of Coit Tower",
                          "Neighborhood": "North Beach",
                          "Website": "http://sfrecpark.org/destination/telegraph-hill-pioneer-park/coit-tower/",
                          "Image": "require('../Images/WalkGolden.jpg')",
                          "Description": "Located on top of Telegraph Hill, Coit Tower is one San Francisco’s most well known sites. The top of Coit Tower provides a stunning view of the city!",
                          "Tags": "#Toursity #Picturesque #Historic #Architecture"
                        }
                    ];
                  }

  static navigationOptions = {
    headerTitle: <LogoTitle/>,
  };

  handleLikes(number) {
    var convertNumber = parseInt(number, 10);
    const newValues = this.state.realLikes.slice(); //copy the array
    newValues[convertNumber] = (newValues[convertNumber]+1); //execute the manipulations
    setTimeout(()=>{this.setState({realLikes:newValues});},0);//set the new state
    console.log(this.state.realLikes[convertNumber]);
  }

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.Title.toUpperCase()} ${item.Tags.toUpperCase()} ${item.Neighborhood.toUpperCase()} ${item.Neighborhood.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1.3,
          width: '86%',
          backgroundColor: 'lightsalmon',
          marginLeft: '14%',
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.searchBar}>
        <TextInput
          placeholder = "Search..."
          placeholderTextColor = "grey"
          onChangeText={(text) => this.searchFilterFunction(text)}
          returnKeyType = 'search'
          onSubmitEditing = {this.handleSubmit}
          style={{flex:2, fontWeight:'400', backgroundColor:'white', marginRight:30, fontSize:14}}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {this.handleClick();
            }}>
            <Icon name = "ios-search" size = {20} style={{ marginRight:3}}/>
          </TouchableOpacity>
        </View>
    );
  };

  handleClick(){
    Alert.alert("You pressed the picture!");
  }

  handleLink = async (website) =>{
    await Clipboard.setString(website);
    const clipboardContent = await Clipboard.getString();
    this.setState({clipboardContent});
    console.log(this.state.clipboardContent);
    Alert.alert(this.state.clipboardContent);
  }

  render() {
    const images = {
      "1": require('../Images/WalkGolden.jpg'),
      "2": require('../Images/VisitExp.jpg'),
      "3": require('../Images/IceSkatingYB.jpg'),
      "4": require('../Images/HangOutWash.jpg'),
      "5": require('../Images/MuirWood.jpg'),
      "6": require('../Images/VisitAAM.jpg'),
      "7": require('../Images/TennisSF.jpg'),
      "8": require('../Images/VisitDisney.jpg'),
      "9": require('../Images/WalkFlower.jpg'),
      "10": require('../Images/VisitCoit.jpg'),
    }
    return (
      <SafeAreaView >
        <View style={{backgroundColor:'white'}}>
          <FlatList
            data={this.state.data}
            extraData={this.state}
            renderItem={({ item }) => (
              <ListItem
                style={{top:13, margin:5,padding:0, border:50,outline: 0, zIndex:0,}}
                subtitle={
                  <Card style={styles.cardStyle}>

                    <CardItem>
                      <Left>
                        <Thumbnail source={images[item.ID]} />
                        <Body>
                          <Text style={styles.textTitle}>{`${item.Title}`}</Text>
                          <Text style={styles.textTags}>{`${item.Tags}`}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <TouchableOpacity onPress ={()=>{this.handleClick();}}>
                      <CardItem cardBody>
                        <Image source={images[item.ID]}
                        style={{height:300, width:null, flex:1}}/>
                      </CardItem>
                    </TouchableOpacity>

                    <CardItem style={{height:34, }}>
                      <Left>
                        <Button transparent onPress={() => {this.handleLikes(item.ID-1);}}>
                          <Icon name="ios-heart-empty" style={{color:'red',height:15, paddingBottom:31, paddingTop:10,fontSize:25}}/>
                        </Button>
                        <Text style={styles.likeText}>{this.state.realLikes[item.ID-1]} Likes</Text>
                      </Left>
                      <Right>
                        <TouchableOpacity onPress={() => {this.handleLink(item.Website);}}>
                          <Icon name="ios-share-alt" style={{color:'lightsalmon',height:15, paddingBottom:31, paddingTop:10, fontSize:25}}/>
                        </TouchableOpacity>
                      </Right>
                    </CardItem>

                    <CardItem cardBody>
                      <Body>
                        <Text style={styles.textDescrip}>{item.Description}</Text>
                      </Body>
                    </CardItem>
                  </Card>}
                />
            )}
            keyExtractor={item => item.Title}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </View>
      </SafeAreaView>
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

  likeText: {
    fontFamily:'HelveticaNeue-Medium',
    fontSize: 12,
    height:15,
    paddingBottom:22,
    paddingTop:10,
  },

  textTitle: {
    fontFamily:'HelveticaNeue-Bold',
    fontSize: 22.1,
  },

  textTags: {
    fontFamily:'HelveticaNeue-LightItalic',
    top: 4,
    opacity: 0.6,
    fontSize: 11,
  },

  textDescrip: {
    fontFamily:'HelveticaNeue-Light',
    fontSize: 14,
    flex:1,
    marginTop:1,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
  },

  searchBar: {
    height:45,
    flexDirection:'row',
    padding: 10,
    backgroundColor:'white',
    marginHorizontal: 18,
    shadowOffset:{width:1.5, height:1.5},
    shadowColor:'grey',
    shadowOpacity:0.7,
    top:13,
    zIndex:999,
    borderRadius: 7,
    opacity:0.93,
    padding:15,
  },

  cardStyle:
  {
    flex:1,
    shadowColor: '#CBCBCB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

});

export default FeedScreen;
