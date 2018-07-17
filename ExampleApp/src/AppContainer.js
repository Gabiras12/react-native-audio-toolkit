import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Switch,
  Slider,
  Button
} from 'react-native';

import {
  Player,
  Recorder,
  MediaStates
} from 'react-native-audio-toolkit';

let filename = 'test.mp4';

class AppContainer extends React.Component {
  constructor() {
    super();
  }

  _playPause() {
    this.player = new Player('https://d27stng4hz4vj7.cloudfront.net/music.mp3');
    this.player.play();
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>
            Playback
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:1 , marginRight:10}} >
              <Button 
                onPress={() => this._playPause()}
                title='Play'
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1
  },
  button: {
    padding: 20,
    fontSize: 100,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  slider: {
    height: 10,
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 50,
    color: 'red'
  },
  errorMessage: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    color: 'red'
  }
});

export default AppContainer;
