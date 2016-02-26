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
    View,Animated
} from 'react-native';

// 正确
//var icon = this.props.active ? require('./my-icon-active.png') : require('./my-icon-inactive.png');
//<Image source={icon} />
//注意：网络图片需要手动指定尺寸大小


//三种动画类型，spring，decay，还有timing，以及三种组件类型，View，Text和Image。

class lcctest extends React.Component {
    // 构造
    constructor(props:any) {
        super(props);
        // 初始状态
        this.state = {bounceValue: new Animated.Value(0),};
    }

    render():ReactElement {
        return (
            <Animated.Image                         // 可选的基本组件类型: Image, Text, View
                source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                style={{
          flex: 1,
          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
          ]
        }}
                />
        );
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);
        Animated.spring(
            this.state.bounceValue, {toValue: 0.8, friction: 1}
        ).start();

        //组合动画
        //Animated.sequence([
        //
        //    Animated.decay(position, {   // 滑行一段距离后停止
        //        velocity: {x: gestureState.vx, y: gestureState.vy}, // 根据用户的手势设置速度
        //        deceleration: 0.997,
        //    }),
        //
        //    Animated.parallel([          // 在decay之后并行执行：
        //        Animated.spring(position, {
        //            toValue: {x: 0, y: 0}    // 返回到起始点开始
        //        }),
        //        Animated.timing(twirl, {   // 同时开始旋转
        //            toValue: 360,
        //        }),
        //    ]),
        //])
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

AppRegistry.registerComponent('lcctest', () => lcctest);
