import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import QuizCard from './QuizCard';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <ScrollView>
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
              <View>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => {
                      console.log('clikced');
                      this.props.navigation.navigate('Science');
                    }}>
                    <Image
                      source={require('../assets/science_symbols.png')}
                      style={{ width: 50, height: 45 }}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        fontFamily: 'Bubblegum-Sans',
                      }}>
                      Science Quiz
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => this.props.navigation.navigate('Math')}>
                    <Image
                      source={require('../assets/math_symbols.png')}
                      style={{ width: 40, height: 45, marginRight: 20 }}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        fontFamily: 'Bubblegum-Sans',
                      }}>
                      Math Quiz
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => this.props.navigation.navigate('Computer')}>
                    <Image
                      source={require('../assets/computer.png')}
                      style={{ width: 50, height: 40, resizeMode: 'cover' }}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        fontFamily: 'Bubblegum-Sans',
                      }}>
                      Computer Quiz
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => this.props.navigation.navigate('GK')}>
                    <Image
                      source={require('../assets/gk.png')}
                      style={{
                        width: 45,
                        height: 45,
                        resizeMode: 'cover',
                        marginRight: 20,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        fontFamily: 'Bubblegum-Sans',
                      }}>
                      GK Quiz
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.08,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(48),
    fontFamily: 'Bubblegum-Sans',
  },
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 80,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'white',
    margin: 10,
    width: 200,
    height: 55,
    flexDirection: 'row',
  },
});
