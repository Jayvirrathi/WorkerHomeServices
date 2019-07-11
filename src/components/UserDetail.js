

import React from 'react';
import { View, Text, TouchableOpacity,PixelRatio, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import ImagePicker from "react-native-image-picker";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';

const logo = require('../assets/back.png');

export default class UserDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: false,
            email: '',
            password: '',
            ImageSource: null,
        };

    }


    onChangeText = (key, val) => {
        this.setState({ [key]: val });
    };

    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            display: 'none',
        },
    };

    selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };
        ImagePicker.showImagePicker(options, response => {
          console.log("Response = ", response);
    
          if (response.didCancel) {
            console.log("User cancelled photo picker");
          } else if (response.error) {
            console.log("ImagePicker Error: ", response.error);
          } else if (response.customButton) {
            console.log("User tapped custom button: ", response.customButton);
          } else {
            let source = { uri: response.uri };
    
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              ImageSource: source
            });
          }
        });
      }
    
    
    
    
    pressHandler = () => {
        alert("he");
    }

    render() {

        const { navigate } = this.props.navigation;
        const radio_props = [
            { label: 'Male', value: 0 },
            { label: 'Female', value: 1 }
        ];


        return (
            <View style={styles.container}>

                <ImageBackground source={logo} style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>



                    {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4485af', 'gray']} style={styles.linearGradient}> */}






                    <Text style={{ fontWeight: "700", fontSize: 24, textAlign: 'center', marginTop: 20, marginBottom: 20, color: 'white' }}>Worker Details</Text>
                    
                    
                    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={styles.ImageContainer}>
              {this.state.ImageSource === null ? (
                <Text style={styles.selectphoto}>Select a Photo</Text>
              ) : (
                  <Image
                    style={styles.ImageContainer}
                    source={this.state.ImageSource}
                  />
                )}
            </View>
          </TouchableOpacity>

                    
                    
                    <Input
                        placeholder='Phone Number'
                        underlineColorAndroid={'transparent'}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        containerStyle={styles.input}
                        leftIcon={
                            <Icon
                                name='phone'
                                size={24}
                                color='white'
                                style={{ margin: 3 }}
                            />
                        }
                        onChangeText={val => this.onChangeText("email", val)}
                    />

                    <Input
                        placeholder='Address'
                        underlineColorAndroid={'transparent'}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        containerStyle={{ width: '80%', height: 150, alignSelf: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 5, padding: 0 }}
                        multiline={true}
                        numberOfLines={2}
                        maxLength={250}
                        leftIcon={
                            <Icon
                                name='home'
                                size={24}
                                color='white'
                                style={{ margin: 3 }}
                            />
                        }
                        onChangeText={val => this.onChangeText("email", val)}
                    />


                    <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 5, margin: 15, width: '80%', alignSelf: 'center',padding:10}}>

                        <ListItem
                            title="Gender"
                            titleStyle={{fontWeight:'bold',color:'white'}}
                            containerStyle={{ backgroundColor: "transparent" }}
                            leftAvatar=
                            {<Icon
                                name='male'
                                size={24}
                                color='white'
                                style={{ margin: 3 }}
                            />}
                        />
                        {/* <Text style={{ width: '80%', fontSize: 16, alignSelf: 'flex-start', color: 'white', fontWeight: 'bold', margin: 15, padding: 5 }}>Gender</Text> */}

                        <RadioForm
                            radio_props={radio_props}
                            animation={true}
                            initial={0}
                            buttonColor={'#ffff'}
                            buttonInnerColor={'#ffff'}
                            buttonOuterColor={'#ffff'}
                            labelColor={'#ffff'}
                            style={{ marginLeft: 50, }}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                    </View>
                    <Button title="Signup" buttonStyle={styles.button} onPress={() => { this.setState({ user: true }) }}></Button>
                    {/* </LinearGradient> */}

                </ImageBackground>
            </View>

        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // backgroundColor: 'rgba(255, 0, 0, 0.3)',

    },
    linearGradient: {
        flex: 1,
    },
    input: {
        width: '80%', alignSelf: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 5, margin: 15,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        width: '40%',
        alignSelf: 'center',
        margin: 30,
        borderRadius: 100,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
    },
    ImageContainer: {
        height:128,
        width: 128,
        borderRadius: 64,
        // borderRadius: 10,
        // width: 300,
        // borderRadius: 25,
        // height: 50,
        // borderColor: "#9B9B9B",
        // borderWidth: 1 / PixelRatio.get(),
        // justifyContent: "center",
         alignSelf: "center",
        alignItems: "center",
         backgroundColor: "orange"
      },
      selectphoto: {
        color: "#ffffff",
        paddingTop:55,
        paddingLeft:0
      }
});

