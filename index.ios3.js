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
    View,Animated
} from 'react-native';

// 正确
//var icon = this.props.active ? require('./my-icon-active.png') : require('./my-icon-inactive.png');
//<Image source={icon} />
//注意：网络图片需要手动指定尺寸大小


//三种动画类型，spring，decay，还有timing，以及三种组件类型，View，Text和Image。

var App=React.createClass({
    componentWillMount(){
        //创建动画
        //LayoutAnimation.spring();
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    },
    getInitialState(){
        return{w:100,h:100}
    },
    _onPress(){
        //让视图是存变化用动画的形式表现出来
        //LayoutAnimation.spring();
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({w: this.state.w + 15, h: this.state.h + 15})
    },
    render:function(){
        return(
            <View style={styles.container}>
                <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    base: {
        width: 38,
        height: 38,
    },
    background: {
        backgroundColor: '#222222',
    },
    active: {
        borderWidth: 2,
        borderColor: '#00ff00'
    }
});

AppRegistry.registerComponent('lcctest', () => App);
module.exports=App;
