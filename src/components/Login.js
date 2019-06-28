
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '', login: false };
    }


    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            display: 'none',
        },
    };

    pressHandler = () => {
        // this.props.loginHandler;
        alert("Login pressed");
    }

    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <View style={styles.container}>
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Enter Email Id"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="#ffffff"
                    />

                    <Button title="Login" buttonStyle={styles.button} onPress={() => { this.pressHandler() }}></Button>
                    <Text style={styles.bottomText}><Text style={styles.forgotPassword} onPress={() => navigate({ routeName: "ForgotPassword" })}>Forgot Password ?</Text>| <Text style={styles.register} onPress={() => navigate({ routeName: "Signup" })}>Register Now. </Text> </Text>
                </View>

            </View>

        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        // backgroundColor:'green'

    },
    inputBox: {

        width: 300,
        borderRadius: 25,
        alignSelf: 'center',
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        marginVertical: 16,
        backgroundColor: 'grey',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        width: '50%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
    },
    forgotPassword: {
        fontWeight: '500',
    },

    register: {
        fontWeight: '500',
        color: '#2ea730',
    },
    bottomText: {
        alignSelf: 'center',

    }
});