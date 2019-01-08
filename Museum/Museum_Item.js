import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class BookItem extends Component {
    constructor(props) {

        super(props);
        this.state={
            image:[
                'https://cdn.pixabay.com/photo/2018/02/04/21/13/monastery-3130879_960_720.jpg',
                'https://picjumbo.com/wp-content/uploads/florence-at-night_free_stock_photos_picjumbo_DSC04580-2210x1473.jpg',
                'http://img.hb.aicdn.com/8d4d80cb67c1ef15168f01b925245b04400ecdc621b0b-L5WWXL_fw658',
                'http://img.hb.aicdn.com/070119e36ac0390f2878cbc57cdb9fec508921ff1111d-WLwiqK_fw658',
                'http://img.hb.aicdn.com/6e8eba9b25f08b3bd7957ad390031357f297ffab19910-qspBG6_fw658',
                'http://img.hb.aicdn.com/b2f584032e3bc70098ab857782be2eb03f32a8609025-S8sYPX_fw658',
            ],
        }

    }
    render() {
        var book = this.props.book;
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <ImageBackground
                    style={styles.item}
                    source={ {uri: book.img_url}}
                >   
                    <View style={[styles.textContainer,styles.common]}>
                        <Text 
                            numberOfLine={1}
                            style={{ fontSize: 18, color:"#FAFAD2",}}
                        >
                            {book.name}
                        </Text>
                    </View>
                </ImageBackground>
               
            </TouchableOpacity>

        );
    }
}

var styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        height:ScreenHeight/2 ,
        justifyContent: "center",
        alignItems: "center",
        width:ScreenWidth/2,
        // padding: 10,
        // backgroundColor:"red"
    },
    imageContainer: {
        // justifyContent: "center",
        // alignItems: "center"
    },
    image: {
        // width: 80,
        // height: 100,
    },
    contentContainer: {
        // flex: 1,
        // marginLeft: 15
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        // backgroundColor:"black",
        // opacity:0.2
    },
    common:{
        width: ScreenWidth / 2,
        height: ScreenHeight / 2,
        backgroundColor:"black",
        opacity:0.6
    }
});