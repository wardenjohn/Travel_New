import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Text,
    ImageBackground
} from 'react-native';

const bottomGutter = 24, marginSize = 2
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height - bottomGutter

const ImageElement = (props) => (
    <ImageBackground
        style={styles.image}
        source={{ uri: props.imageUrl }}
    >
        {props.children}
    </ImageBackground>
)

const Button = (props) => (
    <TouchableOpacity
        style={[styles.button, props.style]}
        onPress={props.onPress}
    >
        <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
)

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                'http://image.tupian114.com/20120914/2012091414332468.jpg',
                'http://image.tupian114.com/20151022/09000242.jpg',
                'http://image.tupian114.com/20151022/15470122.jpg',
                'http://image.tupian114.com/20151022/12180189.jpg',
                'http://image.tupian114.com/20130521/12195885.jpg',
                'http://image.tupian114.com/20120416/2012041623480305.jpg',
                'http://image.tupian114.com/20120416/2012041623475405.jpg',
                'http://image.tupian114.com/20120728/2012072822242495.jpg',
            ],
            current: 2
        }
    }
    goLeft = () => {
        this.setState({
            current: this.state.current === 0 ? this.state.images.length - 1 : this.state.current - 1
        })
    }
    goRight = () => {
        this.setState({
            current: this.state.current === this.state.images.length - 1 ? 0 : this.state.current + 1
        })
    }
    render() {
        const image = this.state.images[this.state.current]
        return (

            <View style={styles.container}>
                <ImageElement imageUrl={this.state.images[this.state.current]}>
                    <Button
                        text="<"
                        style={{ left: 0 }}
                        onPress={this.goLeft}
                    />
                    <Button
                        text=">"
                        style={{ right: 0 }}
                        onPress={this.goRight}
                    />
                </ImageElement>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: width - (2 * marginSize),
        height: height - (2 * marginSize),
        margin: marginSize,
    },
    button: {
        backgroundColor: 'rgba(150,150,150,0.5)',
        position: 'absolute',
        width: width / 10,
        height: height / 10,
        top: height / 2 - height / 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',

    },
});