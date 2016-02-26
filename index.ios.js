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
    LayoutAnimation,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Navigator,
    View,
} from 'react-native';
//  到底怎么去require啊，为什么我一直出错
//var SCREEN_WIDTH = require('Dimensions').get('window').width;

var React = require('react-native');
var { Dimensions } = React;
var SCREEN_WIDTH = Dimensions.get('window').width;

var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var CustomLeftToRightGesture = Object.assign(
    {}, BaseConfig.gestures.pop, {
        snapVelocity: 8,
        edgeHitWidth: SCREEN_WIDTH,
    }
);

var CustomSceneConfig = Object.assign({}, BaseConfig, {
    springTension: 100,
    springFriction: 1,
    gestures: {
        pop: CustomLeftToRightGesture,
    }
});

var PageOne = React.createClass({
    _handlePress(){
        this.props.navigator.push({id: 2});
    },
    render: function () {
        return (
            <View style={[styles.container,{backgroundColor:'green'}]}>
                <Text style={styles.welcome}>LCC</Text>
                <TouchableOpacity onPress={this._handlePress()}>
                    <View style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'black'}}>
                        <TextView style={styles.welcome}>去 页面 2</TextView>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
});

var PageTwo = React.createClass({
    _handlePress(){
        this.props.navigator.pop();
    },
    render(){
        return (
            <View style={[styles.container,{backgroundColor:'purple'}]}>
                <Text style={styles.welcome}>页面2</Text>
                <TouchableOpacity onPress={this._handlePress()}>
                    <View style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'black'}}>
                        <TextView style={styles.welcome}>返回</TextView>
                    </View>
                </TouchableOpacity>
            </View>
        )
    },
});

var SampleApp = React.createClass({
    _renderScene(route, navigator){
        if (route.id === 1) {
            return <PageOne navigator={navigator} />
        } else if (route.id === 2) {
            return <PageTwo navigator={navigator} />
        }
    },

    _configureScene(route){
        return CustomSceneConfig;
    },
    render(){
        return (
            <Navigator
                initialRoute={{id:1,}}
                renderScene={this._renderScene}
                configureScene={this._configureScene}
                />
        );
    }
});

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
});

AppRegistry.registerComponent('SampleApp', () => SampleApp);

module.exports = SampleApp;
