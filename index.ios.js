/**
 * Ensure the following:Node server is running and available on the same network -run
 *  mac 上是这样的：
    brew uninstall --force watchman
    brew install --HEAD watchman
    重新安装watchman就可以了
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
    Image,
  Text,
  View
} from 'react-native';

class lcctest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Image source={require('./room.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  base:{
    width:38,
    height:38,
  },
  background:{
    backgroundColor:'#222222',
  },
  active:{
    borderWidth:2,
    borderColor:'#00ff00'
  }
});

AppRegistry.registerComponent('lcctest', () => lcctest);
