/**
 * Ensure the following:Node server is running and available on the same network -run
 *  mac 上是这样的：
 brew uninstall --force watchman
 brew install --HEAD watchman
 重新安装watchman就可以了
 */
'use strict';

var React=require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Navigator,
    View,
} = React;

var styles = StyleSheet.create({
    button: {
        width: 100,
        height: 50,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
    }
})


var MyButton = React.createClass({
    setNativeProps(nativeProps){
        this._roots.setNativeProps(nativeProps);
    },
    render(){
        return(
            <View ref={component=>this._root=component} {...this.props} style={styles.button} >
                  <Text>{this.props.label}</Text>
            </View>
        )
    }
});

var App = React.createClass({

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                <TouchableOpacity>
                <MyButton label="请点击我" />
                </TouchableOpacity>
            </View>
        )
    },
});

AppRegistry.registerComponent('lcctest', () => App);

module.exports = App;
