import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    StatusBar,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Comments from './../Comments/show_comment.js';
import Icon from './../User_/Icon_Back.js';
import Util from './../News/Util.js';
import AlertSelected from '../Personal_page/AlertSelected.js';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class Food_Information extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            show: false,
            dataSource: ds,
            keywords: "",
            foodInfo:null,
        };
        //this.get_information()
    }


    get_information(){
        var that = this;
        const { params } = this.props.navigation.state;
        var url = global.getfetch.url + `getfoodshop/information_name${params.data.shop_name}/`;
        let ops={
            method:"get",
        }
        fetch(url,ops)
        .then((response)=>{
            return response.json()
        })
        .then((responseData) =>{
            this.setState({
                foodInfo:responseData,
                show : responseData,
            })
            //alert(this.state.show[0].shop_name)
            //alert(this.state.foodDat[0].opentime)
        })
        .catch((error)=>{
            alert(error)
        })
        //alert(this.state.foodInfo[0]);
    }


    render() {
        const { params } = this.props.navigation.state;
        // const { navigate } = this.props.navigation;
        //this.get_information()
        return (

            <ScrollView style={styles.container}>
            {   this.state.foodInfo ?
                    <View>
                    <View style={styles.titleback}>
                        <Text style={styles.titlescenic}>{this.state.show[0].shop_name}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>【地址】</Text>
                        <Text style={styles.location}>{this.state.show[0].location}</Text>
                    </View>
                    
                    <View style={{ height: 55 }}>
                        <Text style={styles.title}>【人均消费】</Text>
                        <Text>    ¥{this.state.show[0].per_expense}</Text>
                    </View>

                    <View>
                        <Text style={styles.title}>【营业时间】</Text>
                        <Text>{this.state.show[0].opentime}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>【推荐菜】</Text>
                            <Text>{this.state.show[0].dish_name}</Text>
                        <Image 
                            style={{width:200,height:200}}
                            source={{uri : this.state.show[0].dish_pic_url}}>
                        </Image>
                    </View>
                </View>
                :Util.loading

            }
            </ScrollView>
        );
    }

    componentDidMount(){
        this.get_information()
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    titleback:{
        //backgroundColor:'blue',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    titlescenic:{
        fontSize: 28,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "bold"
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        alignItems: "center",
        fontWeight: "bold"
    },
    location:{
        fontSize:15,
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: "#000D22"
    },
});