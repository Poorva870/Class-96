import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default class Math extends Component {
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

            <Text style={styles.routeText}>
              {' '}
              The average of first 50 natural numbers is ………… .{' '}
            </Text>

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
              <Text style={styles.quizText}>25.5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1b }]}
              onPress={() =>
                this.setState({
                  q1b: 'red',
                })
              }>
              <Text style={styles.quizText}>25.30</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1c }]}
              onPress={() =>
                this.setState({
                  q1c: 'red',
                })
              }>
              <Text style={styles.quizText}>25.00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q1d }]}
              onPress={() =>
                this.setState({
                  q1d: 'red',
                })
              }>
              <Text style={styles.quizText}>12.25</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              A fraction which bears the same ratio to 1/27 as 3/11 bear to 5/9
              is equal to ……… .{' '}
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
              <Text style={styles.quizText}>1/55</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2b }]}
              onPress={() =>
                this.setState({
                  q2b: 'red',
                })
              }>
              <Text style={styles.quizText}>55</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2c }]}
              onPress={() =>
                this.setState({
                  q2c: 'red',
                })
              }>
              <Text style={styles.quizText}>3/11</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q2d }]}
              onPress={() =>
                this.setState({
                  q2d: 'red',
                })
              }>
              <Text style={styles.quizText}>1/11</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              he number of 3-digit numbers divisible by 6, is ………… .{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3a }]}
              onPress={() =>
                this.setState({
                  q3a: 'red',
                })
              }>
              <Text style={styles.quizText}>151</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3b }]}
              onPress={() =>
                this.setState({
                  q3b: 'red',
                })
              }>
              <Text style={styles.quizText}>149</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q3c }]}
              onPress={() =>
                this.setState({
                  q3c: 'red',
                })
              }>
              <Text style={styles.quizText}>166</Text>
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
              <Text style={styles.quizText}>150</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              Which of the following numbers gives 240 when added to its own
              square?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4a }]}
              onPress={() =>
                this.setState({
                  q4a: 'red',
                })
              }>
              <Text style={styles.quizText}>20</Text>
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
              <Text style={styles.quizText}>15</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4c }]}
              onPress={() =>
                this.setState({
                  q4c: 'red',
                })
              }>
              <Text style={styles.quizText}>16</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q4d }]}
              onPress={() =>
                this.setState({
                  q4d: 'red',
                })
              }>
              <Text style={styles.quizText}>18</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}> What is 1004 divided by 2? </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5a }]}
              onPress={() =>
                this.setState({
                  q5a: 'red',
                })
              }>
              <Text style={styles.quizText}>52</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5b }]}
              onPress={() =>
                this.setState({
                  q5b: 'red',
                })
              }>
              <Text style={styles.quizText}>520</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5c }]}
              disabled={this.state.click5}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q5c: 'green',
                  click5: true,
                })
              }>
              <Text style={styles.quizText}>502</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q5d }]}
              onPress={() =>
                this.setState({
                  q5d: 'red',
                })
              }>
              <Text style={styles.quizText}>5002</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}> What is 7% equal to? </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6a }]}
              onPress={() =>
                this.setState({
                  q6a: 'red',
                })
              }>
              <Text style={styles.quizText}>0.007</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6b }]}
              disabled={this.state.click6}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q6b: 'green',
                  click6: true,
                })
              }>
              <Text style={styles.quizText}>0.07</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6c }]}
              onPress={() =>
                this.setState({
                  q6c: 'red',
                })
              }>
              <Text style={styles.quizText}>700</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q6d }]}
              onPress={() =>
                this.setState({
                  q6d: 'red',
                })
              }>
              <Text style={styles.quizText}>70</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              What is the next prime number after 5?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7a }]}
              onPress={() =>
                this.setState({
                  q7a: 'red',
                })
              }>
              <Text style={styles.quizText}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7b }]}
              disabled={this.state.click7}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q7b: 'green',
                  click7: true,
                })
              }>
              <Text style={styles.quizText}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7c }]}
              onPress={() =>
                this.setState({
                  q7c: 'red',
                })
              }>
              <Text style={styles.quizText}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q7d }]}
              onPress={() =>
                this.setState({
                  q7d: 'red',
                })
              }>
              <Text style={styles.quizText}>11</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}> Solve 23 + 3 ÷ 3 </Text>

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
              <Text style={styles.quizText}>24</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8b }]}
              onPress={() =>
                this.setState({
                  q8b: 'red',
                })
              }>
              <Text style={styles.quizText}>25</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8c }]}
              onPress={() =>
                this.setState({
                  q8c: 'red',
                })
              }>
              <Text style={styles.quizText}>26</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q8d }]}
              onPress={() =>
                this.setState({
                  q8d: 'red',
                })
              }>
              <Text style={styles.quizText}>27</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              How Many Years are there in a Decade?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9a }]}
              onPress={() =>
                this.setState({
                  q9a: 'red',
                })
              }>
              <Text style={styles.quizText}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9b }]}
              onPress={() =>
                this.setState({
                  q9b: 'red',
                })
              }>
              <Text style={styles.quizText}>50</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q9c }]}
              onPress={() =>
                this.setState({
                  q9c: 'red',
                })
              }>
              <Text style={styles.quizText}>100</Text>
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
              <Text style={styles.quizText}>10</Text>
            </TouchableOpacity>

            <Text style={styles.routeText}>
              {' '}
              How Many Months Make a Century?{' '}
            </Text>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10a }]}
              onPress={() =>
                this.setState({
                  q10a: 'red',
                })
              }>
              <Text style={styles.quizText}>12</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10b }]}
              onPress={() =>
                this.setState({
                  q10b: 'red',
                })
              }>
              <Text style={styles.quizText}>120</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10c }]}
              disabled={this.state.click10}
              onPress={() =>
                this.setState({
                  score: this.state.score + 10,
                  q10c: 'green',
                  click10: true,
                })
              }>
              <Text style={styles.quizText}>1200</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.routeCard, { backgroundColor: this.state.q10d }]}
              onPress={() =>
                this.setState({
                  q10d: 'red',
                })
              }>
              <Text style={styles.quizText}>12000</Text>
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
    borderWidth: 2,
    width: 180,
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
