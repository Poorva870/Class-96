import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default class Computer extends Component {
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
        <ImageBackground
          source={require('../assets/background.webp')}
          style={styles.backgroundImage}>
          <ScrollView>
            <View style={[styles.routeCard, { width: 180 }]}>
              <Text style={styles.quizText}>Score : {this.state.score}</Text>
            </View>

            <Text style={styles.routeText}>
              {' '}
              MS-Word is an example of _____{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1a }]}
              onPress={() =>
                this.setState({
                  q1a: 'red',
                })
              }>
              <Text style={styles.quizText}>An operating system</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1b }]}
              disabled={this.state.click1}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q1b: 'green',
                  click1: true,
                })
              }>
              <Text style={styles.quizText}>Application software</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1c }]}
              onPress={() =>
                this.setState({
                  q1c: 'red',
                })
              }>
              <Text style={styles.quizText}>A processing device</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1d }]}
              onPress={() =>
                this.setState({
                  q1d: 'red',
                })
              }>
              <Text style={styles.quizText}>An input device</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Ctrl, Shift and Alt are called .......... keys.{' '}
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
              <Text style={styles.quizText}> modifier</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2b }]}
              onPress={() =>
                this.setState({
                  q2b: 'red',
                })
              }>
              <Text style={styles.quizText}>alphanumeric</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2c }]}
              onPress={() =>
                this.setState({
                  q2c: 'red',
                })
              }>
              <Text style={styles.quizText}>function</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2d }]}
              onPress={() =>
                this.setState({
                  q2d: 'red',
                })
              }>
              <Text style={styles.quizText}>adjustment</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Junk e-mail is also called ______{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3a }]}
              onPress={() =>
                this.setState({
                  q3a: 'red',
                })
              }>
              <Text style={styles.quizText}>Spool</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3b }]}
              onPress={() =>
                this.setState({
                  q3b: 'red',
                })
              }>
              <Text style={styles.quizText}>Sniffer script</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3c }]}
              onPress={() =>
                this.setState({
                  q3c: 'red',
                })
              }>
              <Text style={styles.quizText}>Spoof</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3d }]}
              disabled={this.state.click3}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q3d: 'green',
                  click3: true,
                })
              }>
              <Text style={styles.quizText}>Spam</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              Microsoft Office is an example of a
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4a }]}
              onPress={() =>
                this.setState({
                  q4a: 'red',
                })
              }>
              <Text style={styles.quizText}> Closed source software</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4b }]}
              onPress={() =>
                this.setState({
                  q4b: 'red',
                })
              }>
              <Text style={styles.quizText}>Open source software</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4c }]}
              disabled={this.state.click4}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q4c: 'green',
                  click4: true,
                })
              }>
              <Text style={styles.quizText}>Horizontal market software</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4d }]}
              onPress={() =>
                this.setState({
                  q4d: 'red',
                })
              }>
              <Text style={styles.quizText}>Vertical market software</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}> Where is RAM located? </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5a }]}
              onPress={() =>
                this.setState({
                  q5a: 'red',
                })
              }>
              <Text style={styles.quizText}>Hard Disk Drive</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5b }]}
              onPress={() =>
                this.setState({
                  q5b: 'red',
                })
              }>
              <Text style={styles.quizText}>Expansion Board</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5c }]}
              onPress={() =>
                this.setState({
                  q5c: 'red',
                })
              }>
              <Text style={styles.quizText}>External Drive</Text>
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
              <Text style={styles.quizText}>Mother Board</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}> A computer consists of: </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6a }]}
              onPress={() =>
                this.setState({
                  q6a: 'red',
                })
              }>
              <Text style={styles.quizText}>Motherboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6b }]}
              onPress={() =>
                this.setState({
                  q6b: 'red',
                })
              }>
              <Text style={styles.quizText}>Central Processing Unit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6c }]}
              onPress={() =>
                this.setState({
                  q6c: 'red',
                })
              }>
              <Text style={styles.quizText}>Hard Disk Drive</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6d }]}
              disabled={this.state.click6}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q6d: 'green',
                  click6: true,
                })
              }>
              <Text style={styles.quizText}>All of the above</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              The computer processor consists of the following parts:
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7a }]}
              onPress={() =>
                this.setState({
                  q7a: 'red',
                })
              }>
              <Text style={styles.quizText}>CPU and Main Memory</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7b }]}
              onPress={() =>
                this.setState({
                  q7b: 'red',
                })
              }>
              <Text style={styles.quizText}>Hard Disk and Floppy Drive</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7c }]}
              disabled={this.state.click7}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q7c: 'green',
                  click7: true,
                })
              }>
              <Text style={styles.quizText}>Control Unit and ALU</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7d }]}
              onPress={() =>
                this.setState({
                  q7d: 'red',
                })
              }>
              <Text style={styles.quizText}>Source and Application</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Which of the following is a popular programming language for
              developing multimedia webpages?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8a }]}
              disabled={this.state.click8}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q8a: 'green',
                  click8: true,
                })
              }>
              <Text style={styles.quizText}>Java</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8b }]}
              onPress={() =>
                this.setState({
                  q8b: 'red',
                })
              }>
              <Text style={styles.quizText}>COBOL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8c }]}
              onPress={() =>
                this.setState({
                  q8c: 'red',
                })
              }>
              <Text style={styles.quizText}>BASIC</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8d }]}
              onPress={() =>
                this.setState({
                  q8d: 'red',
                })
              }>
              <Text style={styles.quizText}>Assembler</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              The first computer was programmed using .......{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9a }]}
              onPress={() =>
                this.setState({
                  q9a: 'red',
                })
              }>
              <Text style={styles.quizText}>Assembly language</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9b }]}
              onPress={() =>
                this.setState({
                  q9b: 'red',
                })
              }>
              <Text style={styles.quizText}>Spaghetti code</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9c }]}
              onPress={() =>
                this.setState({
                  q9c: 'red',
                })
              }>
              <Text style={styles.quizText}>Source code</Text>
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
              <Text style={styles.quizText}>Machine language</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              C, BASIC, COBOL, and Java are examples of ............language.{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10a }]}
              disabled={this.state.click9}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q10a: 'green',
                  click10: true,
                })
              }>
              <Text style={styles.quizText}>high-level</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10b }]}
              onPress={() =>
                this.setState({
                  q10b: 'red',
                })
              }>
              <Text style={styles.quizText}> low-level</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10c }]}
              onPress={() =>
                this.setState({
                  q10c: 'red',
                })
              }>
              <Text style={styles.quizText}>computer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10d }]}
              onPress={() =>
                this.setState({
                  q10d: 'red',
                })
              }>
              <Text style={styles.quizText}>programming</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                Back
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
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
    width: 265,
    height: 30,
    backgroundColor: 'white',
    marginTop: 30,
    borderColor: 'black',
    borderWidth: 2,
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
