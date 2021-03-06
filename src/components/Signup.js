

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';

const logo = require('../assets/logo.png');
const backgroundImage = require('../assets/back.jpg');

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: false,
            email: '',
            password: '',
        };

    }


    onChangeText = (key, val) => {
        this.setState({ [key]: val });
    };

    static navigationOptions = {
        title: 'Signup',
        headerStyle: {
            display: 'none',
        },
        headerTitleStyle: {
            fontWeight: '600',
            color: 'gray',
            fontSize: 16,
            marginLeft: 0,
            paddingLeft: 0,
        },
    };

    pressHandler = () => {
        alert("he");
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>

                {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4485af', 'gray']} style={styles.linearGradient}> */}
                <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>

                    <ScrollView>
                        <Image source={logo} style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 40, marginBottom: 20 }}></Image>

                        <Text style={{ fontWeight: "700", fontSize: 24, textAlign: 'center', marginBottom: 20, color: 'white' }}>Create Account</Text>
                        <Input
                            placeholder='Name'
                            underlineColorAndroid={'transparent'}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            containerStyle={styles.input}
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={20}
                                    color='white'
                                    style={{ margin: 3 }}
                                />
                            }
                            onChangeText={val => this.onChangeText("email", val)}
                        />

                        <Input
                            placeholder='Email'
                            underlineColorAndroid={'transparent'}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            containerStyle={styles.input}
                            leftIcon={
                                <Icon
                                    name='envelope-open-o'
                                    size={20}
                                    color='white'
                                    style={{ margin: 3 }}
                                />
                            }
                            onChangeText={val => this.onChangeText("email", val)}
                        />
                        <Input
                            placeholder="Password"
                            secureTextEntry={true}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            containerStyle={styles.input}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={20}
                                    color='white'
                                    style={{ margin: 3 }}
                                />
                            }
                            onChangeText={val => this.onChangeText("password", val)}
                        />

                        <Input
                            placeholder="Repeat Password"
                            secureTextEntry={true}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            containerStyle={styles.input}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={20}
                                    color='white'
                                    style={{ margin: 3 }}
                                />
                            }
                            onChangeText={val => this.onChangeText("password", val)}
                        />


                        <Button title="Continue" buttonStyle={styles.button} onPress={() => navigate({ routeName: "UserDetail" })}></Button>
                    </ScrollView>
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
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
    },
    linearGradient: {
        flex: 1,
    },
    input: {
        width: '80%', alignSelf: 'center', borderColor: 'white', borderWidth: 1, borderRadius: 100, margin: 15
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
});
