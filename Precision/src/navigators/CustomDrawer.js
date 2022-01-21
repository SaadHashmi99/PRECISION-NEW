import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#C6E600'}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            height: 120,
            width: '95%',
            marginVertical: 20,
            marginHorizontal: 5
          }}
        />
        <View style={{ flex: 1, paddingVertical: 2 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      {/* <View>
        <Text>Footer</Text>
    </View> */}
    </View>
  );
};

export default CustomDrawer;

// const styles = StyleSheet.create({});
