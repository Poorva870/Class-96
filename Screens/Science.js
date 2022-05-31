import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default class Science extends Component {
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
            <View style={styles.routeCard}>
              <Text style={styles.quizText}>Score : {this.state.score}</Text>
            </View>

            <Text style={styles.routeText}> Who discovered the cell? </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1a }]}
              disabled={this.state.click1}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q1a: 'green',
                  click1: true,
                })
              }>
              <Text style={styles.quizText}>Robert Hooke</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1b }]}
              onPress={() =>
                this.setState({
                  q1b: 'red',
                })
              }>
              <Text style={styles.quizText}>Edward Jenner</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1c }]}
              onPress={() =>
                this.setState({
                  q1c: 'red',
                })
              }>
              <Text style={styles.quizText}>Robert Brown</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1d }]}
              onPress={() =>
                this.setState({
                  q1d: 'red',
                })
              }>
              <Text style={styles.quizText}>Alexander Fleming</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Which of the following animals is used in the production of
              fabric?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2a }]}
              onPress={() =>
                this.setState({
                  q2a: 'red',
                })
              }>
              <Text style={styles.quizText}>Lama</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2b }]}
              onPress={() =>
                this.setState({
                  q2b: 'red',
                })
              }>
              <Text style={styles.quizText}>Alpaca</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2c }]}
              onPress={() =>
                this.setState({
                  q2c: 'red',
                })
              }>
              <Text style={styles.quizText}>Sheep</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2d }]}
              disabled={this.state.click2}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q2d: 'green',
                  click2: true,
                })
              }>
              <Text style={styles.quizText}>All of the above</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Hodophobia is the fear of which of the following?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3a }]}
              onPress={() =>
                this.setState({
                  q3a: 'red',
                })
              }>
              <Text style={styles.quizText}>Sleeping</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3b }]}
              disabled={this.state.click3}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q3b: 'green',
                  click3: true,
                })
              }>
              <Text style={styles.quizText}>Travel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3c }]}
              onPress={() =>
                this.setState({
                  q3c: 'red',
                })
              }>
              <Text style={styles.quizText}>Drugs</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3d }]}
              onPress={() =>
                this.setState({
                  q3d: 'red',
                })
              }>
              <Text style={styles.quizText}>Cattle</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Which of the following female reproductive organs produces female
              hormones?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4a }]}
              onPress={() =>
                this.setState({
                  q4a: 'red',
                })
              }>
              <Text style={styles.quizText}>Fallopian Tubes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4b }]}
              disabled={this.state.click4}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q4b: 'green',
                  click4: true,
                })
              }>
              <Text style={styles.quizText}>Uterus</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4c }]}
              onPress={() =>
                this.setState({
                  q4c: 'red',
                })
              }>
              <Text style={styles.quizText}>Ovaries</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4d }]}
              onPress={() =>
                this.setState({
                  q4d: 'red',
                })
              }>
              <Text style={styles.quizText}>None of these</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Which chemical fertilizer is needed for better rhizobial nitrogen
              fixation?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5a }]}
              disabled={this.state.click5}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q5a: 'green',
                  click5: true,
                })
              }>
              <Text style={styles.quizText}>Phosphorus</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5b }]}
              onPress={() =>
                this.setState({
                  q5b: 'red',
                })
              }>
              <Text style={styles.quizText}>Potassium</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5c }]}
              onPress={() =>
                this.setState({
                  q5c: 'red',
                })
              }>
              <Text style={styles.quizText}>Calcium</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5d }]}
              onPress={() =>
                this.setState({
                  q5d: 'red',
                })
              }>
              <Text style={styles.quizText}>Sodium</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Which of the digestive organs contains acid?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6a }]}
              onPress={() =>
                this.setState({
                  q6a: 'red',
                })
              }>
              <Text style={styles.quizText}>Appendix</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6b }]}
              onPress={() =>
                this.setState({
                  q6b: 'red',
                })
              }>
              <Text style={styles.quizText}>Liver</Text>
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
              <Text style={styles.quizText}>Stomach</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6d }]}
              onPress={() =>
                this.setState({
                  q6d: 'red',
                })
              }>
              <Text style={styles.quizText}>Brain</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Cinnamon is obtained from which part of the plant?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7a }]}
              onPress={() =>
                this.setState({
                  q7a: 'red',
                })
              }>
              <Text style={styles.quizText}>Stem</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7b }]}
              onPress={() =>
                this.setState({
                  q7b: 'red',
                })
              }>
              <Text style={styles.quizText}>Fruits</Text>
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
              <Text style={styles.quizText}>Bark</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7d }]}
              onPress={() =>
                this.setState({
                  q7d: 'red',
                })
              }>
              <Text style={styles.quizText}>Roots</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Which of the following is an endemic species?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8a }]}
              onPress={() =>
                this.setState({
                  q8a: 'red',
                })
              }>
              <Text style={styles.quizText}>Pink head duck</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8b }]}
              onPress={() =>
                this.setState({
                  q8b: 'red',
                })
              }>
              <Text style={styles.quizText}>Nicobar Pigeon</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8c }]}
              onPress={() =>
                this.setState({
                  q8c: 'red',
                })
              }>
              <Text style={styles.quizText}>Indian Rhino</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8d }]}
              disabled={this.state.click8}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q8d: 'green',
                  click8: true,
                })
              }>
              <Text style={styles.quizText}>Horn bill</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Deficiency of ____ causes rickets disease:{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9a }]}
              onPress={() =>
                this.setState({
                  q9a: 'red',
                })
              }>
              <Text style={styles.quizText}>Vitamin A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9b }]}
              onPress={() =>
                this.setState({
                  q9b: 'red',
                })
              }>
              <Text style={styles.quizText}>Vitamin B</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9c }]}
              onPress={() =>
                this.setState({
                  q9c: 'red',
                })
              }>
              <Text style={styles.quizText}>Vitamin C</Text>
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
              <Text style={styles.quizText}>Vitamin D</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Which of the following is responsible for transport of food and
              other substances in plants?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10a }]}
              onPress={() =>
                this.setState({
                  q10a: 'red',
                })
              }>
              <Text style={styles.quizText}>Xylem</Text>
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
              <Text style={styles.quizText}>Phloem</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10c }]}
              onPress={() =>
                this.setState({
                  q10c: 'red',
                })
              }>
              <Text style={styles.quizText}>Chloroplast</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10d }]}
              onPress={() =>
                this.setState({
                  q10d: 'red',
                })
              }>
              <Text style={styles.quizText}>All of these</Text>
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
    width: 200,
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
