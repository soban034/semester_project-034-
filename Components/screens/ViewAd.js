import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

const firebaseUrl =
  'https://reactnativefirstdatabase-a7b2b-default-rtdb.firebaseio.com/';

function ViewAd({ navigation }) {
  const [array, setarray] = useState([]);
  const [getcondition, setcondition] = React.useState(true);
  const [search, setSearch] = React.useState('');
  const [filtered, setFilterted] = React.useState('');

  const getproduct = () => {
    fetch(`${firebaseUrl}/CarDetails.json`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responsejson) => {
        let samplearray = [];
        for (key in responsejson) {
          if (array.length == 0) {
            console.log('First add');
            samplearray.push(responsejson[key]);
          } else {
            console.log('other addition');
            samplearray.push(responsejson[key]);
          }
        }
        setarray(samplearray);

        console.log(array);

        setcondition(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateSearch = (search) => {
    const element = array.filter((item) => {
      return item.toLowerCase().match(search);
    });

    setSearch(search);
    setFilterted(element);
  };

  React.useEffect(() => {
    getproduct();
  }, []);
  if (getcondition) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />

        <Text>Waiting for response</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        padding: 4,
        margin: 4,
        backgroundColor: '#fffafd',
      }}>
      <View style={{ flex: 1 }}>
        <View>
          <SearchBar
            placeholder="Search Car..."
            onChangeText={updateSearch}
            platform="android"
            value={search}
          />
        </View>

        <View>
          <View style={{ padding: 7, margin: 8 }}>
            <Text
              style={{ fontWeight: 'bold', fontSize: 20, color: '#2C272E' }}>
              Cars In The Store
            </Text>
          </View>

          <FlatList
            data={array}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    flexBasis: '50%',
                  }}>
                  <View
                    style={{
                      backgroundColor: 'grey',
                      width: 147,
                      height: 190,
                      margin: 7,
                      padding: 5,
                    }}>
                    <Image
                      style={{
                        resizeMode: 'cover',
                        height: 100,
                        width: 100,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: 8,
                      }}
                      source={{
                        uri: item.uri,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          marginTop: 9,
                          marginLeft: 9,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        flexWrap: 'wrap',
                        flexBasis: '50%',
                      }}>
                     

                      <TouchableOpacity
                        style={{
                          backgroundColor: '#2D4263',
                          width: 30,
                          height: 30,
                          borderRadius: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: 7,
                        }}
                        onPress={() =>{navigation.navigate('Cars',{
                          cars:item
                        })}
                          
                        }>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
                          }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
}

export default ViewAd;
