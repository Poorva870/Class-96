import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Switch,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import firebase from 'firebase';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      profile_image: '',
      name: '',
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    this.fetchUser();
  }

  async fetchUser() {
    let name, image;

    await firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', function (snapshot) {
        name = '${snapshot.val().first_name} ${snapshot.val().last_name}';
        image = snapshot.val().profile_picture;
      });

    this.setState({
      profile_image: image,
      name: name,
    });
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/background.webp')}
            style={styles.backgroundImage}>
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.appTitle}>
              <View style={styles.appIcon}>
                <Image
                  source={require('../assets/logo.png')}
                  style={styles.iconImage}></Image>
              </View>
              <View style={styles.appTitleTextContainer}>
                <Text style={styles.appTitleText}>Brain Up</Text>
              </View>
            </View>
            <View style={styles.screenContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={{ uri: this.state.profile_image }}
                  style={styles.profileImage}></Image>
                <Text style={styles.nameText}>{this.state.name}</Text>
              </View>
              <View style={{ flex: 0.3 }} />
            </View>
            <View style={{ flex: 0.08 }} />
          </ImageBackground>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  screenContainer: {
    flex: 0.85,
  },
  profileImageContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70),
  },
  nameText: {
    color: 'white',
    fontSize: RFValue(40),
    fontFamily: 'Bubblegum-Sans',
    marginTop: RFValue(10),
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
