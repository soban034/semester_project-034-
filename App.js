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
  TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

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
          headerRight: () => <Icon name="car" size={28} color="#fff" />,

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
        <Tab.Screen name="Post Ad" component={Ad} />
        <Tab.Screen name="View Ads" component={Vieww} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function Ad({ navigation }) {
  const [getname, setname] = React.useState('');
  const [gettype, settype] = React.useState('');
  const [getmodel, setmodel] = React.useState('');
  const [getengine, setengine] = React.useState('');
  const [getmake, setmake] = React.useState('');
  const [getphotos,setphotos] = React.useState();

  return (
    <View style={{}}>
      <ScrollView>
        <View style={{ margin: 5, padding: 8, marginTop: 8 }}>
          <TextInput
            style={{
              borderWidth: 1,
              height: 40,
              width: 280,
              alignSelf: 'center',
              marginBottom: 10,
            }}
            placeholder=" Car Name (e.g. Altis) "
            onChangeText={setname}
          />
          <TextInput
            style={{
              borderWidth: 1,
              height: 40,
              width: 280,
              alignSelf: 'center',
              marginBottom: 10,
            }}
            placeholder=" Car Type (e.g. Sedan) "
            onChangeText={settype}
          />
          <TextInput
            style={{
              borderWidth: 1,
              height: 40,
              width: 280,
              alignSelf: 'center',
              marginBottom: 10,
            }}
            placeholder=" Car Model (e.g. 2010) "
            onChangeText={setmodel}
          />
          <TextInput
            style={{
              borderWidth: 1,
              height: 40,
              width: 280,
              alignSelf: 'center',
              marginBottom: 10,
            }}
            placeholder=" Engine Type (e.g. Petrol) "
            onChangeText={setengine}
          />
          <TextInput
            style={{
              borderWidth: 1,
              height: 40,
              width: 280,
              alignSelf: 'center',
              marginBottom: 10,
            }}
            placeholder=" Make (e.g. Toyotta) "
            onChangeText={setmake}
          />
        </View>
        < View style={{padding:0,margin:0,marginLeft:30}}>
        <Text style={{fontWeight:'bold',marginBottom:4, fontSize:14}}>Upload photos</Text>
          <TouchableOpacity style={{backgroundColor:'#cdcdcd',height:50,width:50,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
              <Icon name="upload" size={28} color=" " />
          </TouchableOpacity>
        
        </View>

        <TouchableOpacity style={{backgroundColor:'red',height:40,width:40,justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:50,marginLeft:270,marginTop:10}}>
        <Icon name="plus" size={24} color="#fff" />
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

function Vieww({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Our Story</Text>
    </View>
  );
}
const dashboard = ({ navigation }) => {
  return (
    <View>
      <TextInput style={{ borderWidth: 1 }} placeholder="Type.." />
    </View>
  );
};

const drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
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
        <drawer.Screen
          name="Dashboard"
          compoent={dashboard}
          initalroute={dashboard}
        />
      </drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
