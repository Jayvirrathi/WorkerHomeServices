import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { SearchBar, ListItem, Input, Card, Button, Icon } from 'react-native-elements';
import { List, Colors ,Badge,Avatar} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import SubService from './SubService';
import ServiceList from './ServiceList';


const HistoryData = [
    {
        name: 'Johan Martin',
        address: 'Keas 69 Str 15234, Chalandri Athens,Greece',
        phone: '+91-88985-68974',
        date: '22 July 2019 9:00 AM',
        description:"Tap water Leak",
        status: 0,
    },
    {
        name: 'Raju Painter',
        address: 'Keas 69 Str 15234, Chalandri Athens,Greece',
        phone: '+91-88985-68974',
        date: '22 July 2019 10:00 AM',
        description:"AC Repairing",
        status: 0,
        
       
    },

    {
        name: 'Ankit Parajapati',
        address: 'Keas 69 Str 15234, Chalandri Athens,Greece',
        date: '27 July 2019 3:00 PM',
        phone: '+91-88985-68974',
        description:"AC Fitting",
        status:"awaiting",
    },


    {
        name: 'Mehul Rana',
        address: 'Keas 69 Str 15234, Chalandri Athens,Greece',
        date: '28 July 2019 6:00 PM ',
        phone: '+91-88985-68974',
        description:"Door Lock repairing",
        status:"awaiting",
    },


    {
        name: 'Animesh Rana',
        address: 'Keas 69 Str 15234, Chalandri Athens,Greece',
        date: '29 July 2019 8:00 PM',
        phone: '+91-88985-68974',
        description:"Cleaning",
        status:"awaiting",
    },


    {
        name: 'Raj Mehta',
        address: 'Keas 69 Str 15234, Chalandri Athens,Greece',
        date: '30 July 2019 10:00 PM',
        phone: '+91-88985-68974',
        description:"Pest Control",
        status:"awaiting",
    },


    {
        name: 'Anjli Parajapati',
        address: 'Keas 69 Str 15234, Chalandri Athens,Greece',
        date: ' 30 July 2019 3:00 PM',
        phone: '+91-88985-68974',
        description:"RO Repair",
        status:"awaiting",
    },
]

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            user: false,
            search: '',
            data: [],
        };
    }


    
    async componentWillMount() {
        await fetch('https://booking-service01.herokuapp.com/by_client_id/5d19bed4a11612274a2b98d1')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ historyData: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }



    updateSearch = search => {
        this.setState({ search });
    };

    static navigationOptions = {
        title: 'Bookings',
        headerStyle: {
            backgroundColor: '#007ceb',
            display: 'none',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
        },
    };
    render() {

      
        const { search, login, historyData,data } = this.state;
        const { navigate } = this.props.navigation;

        if (!login) {
            return (


                <View style={styles.loginPage}>


                    <View style={{ backgroundColor: '#ff861b', height: 62, overflow: 'scroll' }} >
                        <Text style={{ fontSize: 20, position: 'absolute', left: 15, top: 15, fontWeight: '500', color: 'white' }}>Bookings Request</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.cards}>
                            {
                                HistoryData.map((u, i) => {
                                    return (
                                        <Card key={i} title={'Worker Name:' + u.name} titleStyle={{ textAlign: 'left', fontSize: 14 }} containerStyle={styles.card} >
                                            <Badge  style={{borderRadius:10,backgroundColor:u.status?"red":"blue",position:"absolute",top:0,right:0}}>{u.status?"Awaiting":"OnGoing"}</Badge>
                                            <Text style={styles.label}>Addess: {u.address}</Text>
                                            <Text style={styles.label}>Date: {u.date}</Text>
                                            <Text style={styles.label}>Contact Number: {u.phone}</Text>
                                            <Text style={styles.label}>Description: {u.description}</Text>
                                            
                                            {/* <Text onPress={() => alert(u.name)} style={styles.name}>{u.name}</Text> */}
                                        </Card>
                                    );
                                })
                            }
                        </View>
                    </ScrollView>

                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Card>
                    <Text style={styles.title}>Service History</Text>
                </Card>
                <ScrollView>
                    <View style={styles.cards}>
                        {
                            HistoryData.map((u, i) => {
                                return (
                                    <Card key={i} title={'Worker Name:' + u.name} titleStyle={{ textAlign: 'left', fontSize: 14 }} containerStyle={styles.card} >
                                        {/* <Card title={'Worker Name:' + u.name} titleStyle={styles.text}><Text>{user.email}</Text></Card> */}
                                        <Text style={styles.label}>Customer Name: {u.name}</Text>
                                        <Text style={styles.label}>Service Type: {u.type}</Text>
                                        <Text style={styles.label}>Contact Number: {u.phone}</Text>
                                        <Text style={styles.label}>Date: {u.date}</Text>
                                        {/* <Text onPress={() => alert(u.name)} style={styles.name}>{u.name}</Text> */}
                                    </Card>
                                );
                            })
                        }
                    </View>
                </ScrollView>
                {/* </Card> */}
            </View>
        )

    }

}




const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    SubService: {
        screen: SubService,
    },
    ServiceList: {
        screen: ServiceList,
    }
}, {
        initialRouteName: 'Home',
    });




export default createAppContainer(AppNavigator);





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
    },
    loginPage: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
        overflow: 'scroll'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 0,
        textAlign: 'center',
        color: 'black'
    },
    cards: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        padding: 5,
    },
    card: {
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '95%',
        margin: 5,
    },

    label: {
        fontWeight: '500',
        fontSize: 12,
        margin: 2,
    },
    name: {
        textAlign: 'center',
        marginTop: 15,
    },

    loginPage: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
        justifyContent: 'center',

    },
    button: {
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
    },


});