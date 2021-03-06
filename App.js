import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import PostAdd from './components/screens/PostAdd';
import cars from './components/screens/cars';
import Dashboard from './components/screens/Dashboard';
import Products from './components/screens/products';
import ViewAd from './components/screens/ViewAd';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

const Stack = createStackNavigator();
function Dashboardd() {
  return ( 
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: `#2D4263`,
          },
          headerRight: () => (
            <Icon
              name="user"
              size={28}
              style={{ marginRight: 10 }}
              color="#fff"
            />
          ),
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="View Ads" component={ViewAd} options={{headerShown:false}} />
        <Stack.Screen name="View Car" component={cars}  options={{headerShown:false}} 
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
const CarSale = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        options={{}}
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: `#2D4263`,
          },
          headerRight: () => <Icon name="car" size={28} style={{marginRight:10}} color="#fff" />,

          headerTintColor: '#fff',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Post Ad') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'View Ads') {
              iconName = focused ? 'ios-eye' : 'ios-eye-outline';
            }
             
            return <Ionicons name={iconName} size={size} color={color} />; 
          },
        })}
        tabBarOptions={{
          activeTintColor: `#5584AC`,
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Post Ad" component={PostAdd} />
        <Tab.Screen name="View Ads" component={Dashboardd} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer independent={true}>
      <drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: `#2D4263`,
          },

          headerTintColor: '#fff',
          drawerStyle: {
            backgroundColor: `#dcdcdc`,
            width: 240,
          },
        }}>
        <drawer.Screen name="Buy and Sell" component={CarSale} options={{}} />
        <drawer.Screen name="Dashboard" component={Dashboard} />
      </drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
