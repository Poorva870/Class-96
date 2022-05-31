import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default class GK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q1a: 'white',
      q1b: 'white',
      q1c: 'white',
      q1d: 'white',
      click1: false,

      q2a: 'white',
      q2b: 'white',
      q2c: 'white',
      q2d: 'white',
      click2: false,

      q3a: 'white',
      q3b: 'white',
      q3c: 'white',
      q3d: 'white',
      click3: false,

      q4a: 'white',
      q4b: 'white',
      q4c: 'white',
      q4d: 'white',
      click4: false,

      q5a: 'white',
      q5b: 'white',
      q5c: 'white',
      q5d: 'white',
      click5: false,

      q6a: 'white',
      q6b: 'white',
      q6c: 'white',
      q6d: 'white',
      click6: false,

      q7a: 'white',
      q7b: 'white',
      q7c: 'white',
      q7d: 'white',
      click7: false,

      q8a: 'white',
      q8b: 'white',
      q8c: 'white',
      q8d: 'white',
      click8: false,

      q9a: 'white',
      q9b: 'white',
      q9c: 'white',
      q9d: 'white',
      click9: false,

      q10a: 'white',
      q10b: 'white',
      q10c: 'white',
      q10d: 'white',
      click10: false,

      score: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
            source={require('../assets/background.webp')}
            style={styles.backgroundImage}>
            <View style={styles.routeCard}>
              <Text style={styles.quizText}>Score : {this.state.score}</Text>
            </View>

            <Text style={styles.routeText}>
              {' '}
              When is Earth Day celebrated?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1a }]}
              onPress={() =>
                this.setState({
                  q1a: 'red',
                })
              }>
              <Text style={styles.quizText}>23 May</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1b }]}
              onPress={() =>
                this.setState({
                  q1b: 'red',
                })
              }>
              <Text style={styles.quizText}>21 June</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1c }]}
              disabled={this.state.click1}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q1c: 'green',
                  click1: true,
                })
              }>
              <Text style={styles.quizText}>22 April</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1d }]}
              onPress={() =>
                this.setState({
                  q1d: 'red',
                })
              }>
              <Text style={styles.quizText}>14 November</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              How many players are there in one Baseball team?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2a }]}
              disabled={this.state.click2}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q2a: 'green',
                  click2: true,
                })
              }>
              <Text style={styles.quizText}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2b }]}
              onPress={() =>
                this.setState({
                  q2b: 'red',
                })
              }>
              <Text style={styles.quizText}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2c }]}
              onPress={() =>
                this.setState({
                  q2c: 'red',
                })
              }>
              <Text style={styles.quizText}>11</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2d }]}
              onPress={() =>
                this.setState({
                  q2d: 'red',
                })
              }>
              <Text style={styles.quizText}>8</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Who among the following wrote Sanskrit grammar?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3a }]}
              onPress={() =>
                this.setState({
                  q3a: 'red',
                })
              }>
              <Text style={styles.quizText}>Kalidasa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3b }]}
              onPress={() =>
                this.setState({
                  q3b: 'red',
                })
              }>
              <Text style={styles.quizText}>Charak</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3c }]}
              disabled={this.state.click3}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q3c: 'green',
                  click3: true,
                })
              }>
              <Text style={styles.quizText}>Panini</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3d }]}
              onPress={() =>
                this.setState({
                  q3d: 'red',
                })
              }>
              <Text style={styles.quizText}>Aryabhatt</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              The country that has the highest in Barley Production?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4a }]}
              disabled={this.state.click4}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q4a: 'green',
                  click4: true,
                })
              }>
              <Text style={styles.quizText}>Russia</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4b }]}
              onPress={() =>
                this.setState({
                  q4b: 'red',
                })
              }>
              <Text style={styles.quizText}>India</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4c }]}
              onPress={() =>
                this.setState({
                  q4c: 'red',
                })
              }>
              <Text style={styles.quizText}>China</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4d }]}
              onPress={() =>
                this.setState({
                  q4d: 'red',
                })
              }>
              <Text style={styles.quizText}>France</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              The hottest planet in the solar system?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5a }]}
              onPress={() =>
                this.setState({
                  q5a: 'red',
                })
              }>
              <Text style={styles.quizText}>Mercury</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5b }]}
              onPress={() =>
                this.setState({
                  q5b: 'red',
                })
              }>
              <Text style={styles.quizText}>Mars</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5c }]}
              onPress={() =>
                this.setState({
                  q5c: 'red',
                })
              }>
              <Text style={styles.quizText}>Jupiter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5d }]}
              disabled={this.state.click5}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q5d: 'green',
                  click5: true,
                })
              }>
              <Text style={styles.quizText}>Vens</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Where was the electricity supply first introduced in India?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6a }]}
              onPress={() =>
                this.setState({
                  q6a: 'red',
                })
              }>
              <Text style={styles.quizText}>Chennai</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6b }]}
              onPress={() =>
                this.setState({
                  q6b: 'red',
                })
              }>
              <Text style={styles.quizText}>Dehradun</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6c }]}
              disabled={this.state.click6}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q6c: 'green',
                  click6: true,
                })
              }>
              <Text style={styles.quizText}>Darjeeling</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6d }]}
              onPress={() =>
                this.setState({
                  q6d: 'red',
                })
              }>
              <Text style={styles.quizText}>Mumbai</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}> Lord Buddha was born in:</Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7a }]}
              disabled={this.state.click7}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q7a: 'green',
                  click7: true,
                })
              }>
              <Text style={styles.quizText}>Lumbini</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7b }]}
              onPress={() =>
                this.setState({
                  q7b: 'red',
                })
              }>
              <Text style={styles.quizText}>Vaishali</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7c }]}
              onPress={() =>
                this.setState({
                  q7c: 'red',
                })
              }>
              <Text style={styles.quizText}>Pataliputra</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7d }]}
              onPress={() =>
                this.setState({
                  q7d: 'red',
                })
              }>
              <Text style={styles.quizText}> Bodh Gaya</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              The first President of the Republic of India was:{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8a }]}
              onPress={() =>
                this.setState({
                  q8a: 'red',
                })
              }>
              <Text style={styles.quizText}>V.V. Giri</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8b }]}
              onPress={() =>
                this.setState({
                  q8b: 'red',
                })
              }>
              <Text style={styles.quizText}>Dr. Radhakrishnan</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8c }]}
              disabled={this.state.click8}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q8c: 'green',
                  click8: true,
                })
              }>
              <Text style={styles.quizText}>Dr. Rajendra Prasad</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8d }]}
              onPress={() =>
                this.setState({
                  q8d: 'red',
                })
              }>
              <Text style={styles.quizText}>Zakir Hussain</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              The French Revolution took place in the year:{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9a }]}
              onPress={() =>
                this.setState({
                  q9a: 'red',
                })
              }>
              <Text style={styles.quizText}>1647</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9b }]}
              onPress={() =>
                this.setState({
                  q9b: 'red',
                })
              }>
              <Text style={styles.quizText}>1775</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9c }]}
              onPress={() =>
                this.setState({
                  q9c: 'red',
                })
              }>
              <Text style={styles.quizText}>1729</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9d }]}
              disabled={this.state.click9}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q9d: 'green',
                  click9: true,
                })
              }>
              <Text style={styles.quizText}>1789</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              In which state the Akshay Kumar-led film Airlift was made
              tax-free?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10a }]}
              onPress={() =>
                this.setState({
                  q10a: 'red',
                })
              }>
              <Text style={styles.quizText}>Maharashtra</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10b }]}
              disabled={this.state.click10}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q10b: 'green',
                  click10: true,
                })
              }>
              <Text style={styles.quizText}>Uttar Pradesh</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10c }]}
              onPress={() =>
                this.setState({
                  q10c: 'red',
                })
              }>
              <Text style={styles.quizText}> Rajasthan</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10d }]}
              onPress={() =>
                this.setState({
                  q10d: 'red',
                })
              }>
              <Text style={styles.quizText}>Madhya Pradesh</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                Back
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#fa4b6b',
    margin: 10,
    width: 150,
    height: 50,
    marginLeft: 75,
  },
  routeCard: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 2,
    width: 190,
    height: 30,
    backgroundColor: 'white',
    marginTop: 30,
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  quizText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E97BE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
