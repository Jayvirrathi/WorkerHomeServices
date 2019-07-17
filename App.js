import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, BottomTabBar, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

import Home from './src/components/Home'
import ServiceHistory from './src/components/ServiceHistory'
import Profile from './src/components/Profile';
import BottomNav from './src/components/BottomNav'
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import UserDetail from './src/components/UserDetail'
import ForgotPassword from './src/components/ForgotPassword';
import MainPage from './src/components/MainPage';



const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: MainPage,
  },
  History: {
    screen: ServiceHistory,
  },
  Profile: {
    screen: Profile,
  },

},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // keyboardHidesTabBar: false,
      tabBarVisible: navigation.state.index > 0 ? false : true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'History') {
          iconName = 'event-note';
        }
        else if (routeName === 'Profile') {
          iconName = 'account-box';
        }
        else {
          return;
        }
        // You can return any component that you like here!
        const color = focused ? '#ff861b' : 'gray';
        const size = focused ? 26 : 24;
        return <Icon name={iconName} color={color} size={size} />;
      },
    }),


    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: '#ff861b',
      inactiveTintColor: 'gray',
    },
  })



export default createAppContainer(TabNavigator);



// import React from 'react';
// import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
// import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

// import Home from './src/components/Home'
// import Login from './src/components/Login'
// import Signup from './src/components/Signup'
// import UserDetail from './src/components/UserDetail'
// import BottomNav from './src/components/BottomNav'
// import ServiceList from './src/components/ServiceList'

// const AppNavigator = createStackNavigator({

// Login: {
//   screen: Login,
// },
// Signup: {
//     screen: Signup,
// },
// UserDetail: {
//   screen: UserDetail
// },
//   BottomNav: {
//     screen: BottomNav,
//   },
// }, {
//     initialRouteName: 'Login',
//   });




// export default createAppContainer(AppNavigator);
































// const bottomAppBar = createMaterialBottomTabNavigator({
//   Home: {
//     screen: Home,
//   },
//   Login: {
//     screen: Login
//   },
//   Signup: {
//     screen: Signup
//   },
//   ServiceList: {
//     screen: ServiceList,
//   },
// }, {
//     initialRouteName: 'Home',
//     activeColor: '#f0edf6',
//     inactiveColor: '#3e2465',
//     barStyle: { backgroundColor: '#694fad' },
//   });
















// // class HomeScreen extends React.Component {
// //   static navigationOptions = {
// //     headerLeft: (
// //       <Button
// //         onPress={() => alert('This is a button!')}
// //         title="Back"
// //         color="grey"
// //       />
// //     ),
// //   };
// //   render() {
// //     return (

// //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


// //         <TouchableOpacity style={styles.button} onPress={() => {
// //           this.props.navigation.dispatch(StackActions.reset({
// //             index: 0,
// //             actions: [
// //               NavigationActions.navigate({ routeName: 'Login' })
// //             ],
// //           }))
// //         }}>
// //           <Text style={styles.text}>
// //             Login
// //             </Text>
// //         </TouchableOpacity>


// //         <TouchableOpacity style={styles.button} onPress={() => {
// //           this.props.navigation.dispatch(StackActions.reset({
// //             index: 0,
// //             actions: [
// //               NavigationActions.navigate({ routeName: 'Signup' })
// //             ],
// //           }))
// //         }}>
// //           <Text style={styles.text}>
// //             Signup
// //             </Text>
// //         </TouchableOpacity>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// //   button: {
// //     height: 50,
// //     width: 150,
// //     color: 'black',
// //     backgroundColor: 'green',
// //     borderRadius: 10,
// //     justifyContent: 'center',
// //     margin: 5,

// //   },
// //   text: {
// //     width: '100%',
// //     padding: 10,
// //     textAlign: 'center'
// //   },

// // });