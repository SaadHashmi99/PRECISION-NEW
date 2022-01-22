import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import ProductROrder from '../screens/ProductROrder';
import ProductRPurchase from '../screens/ProductRPurchase';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#C6E633'}}
        >
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            height: 120,
            width: '95%',
            marginVertical: 20,
            marginHorizontal: 5,
          }}
        />
        <View style={{flex: 1, paddingVertical: 2}}>
          <DrawerItem
            label="Dashboard"
            labelStyle={{fontSize: 18, fontWeight: 'bold', color: '#000'}}
            onPress={() => props.navigation.navigate('Dashboard')}
          />

          <View style={{ paddingVertical: 10 }}>
            <Collapse>
              <CollapseHeader>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 10,
                    padding: 5,
                  }}>
                  Registrations
                </Text>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="New Registration"
                  labelStyle={{
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}
                  onPress={() => props.navigation.navigate('NewRegistration')}
                />
                <DrawerItem
                  label="Registration"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('Registration')}
                />
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Collapse>
              <CollapseHeader>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 10,
                    padding: 5,
                  }}>
                  Analysis of Parts
                </Text>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="New Analysis"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('NewAnalysis')}
                />
                <DrawerItem
                  label="Analysis List"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('Analysis')}
                />
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Collapse>
              <CollapseHeader>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 10,
                    padding: 5,
                  }}>
                  Workshop
                </Text>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="Detailer Workshop"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('DetailerWorkshop')}
                />
                <DrawerItem
                  label="Body Workshop"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('BodyWorkshop')}
                />
                <DrawerItem
                  label="Mechanic Workshop"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('MechanicWorkshop')}
                />
                <DrawerItem
                  label="Paint Workshop"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('PaintWorkshop')}
                />
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Collapse>
              <CollapseHeader>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 10,
                    padding: 5,
                  }}>
                  Product Procurement
                </Text>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="Quotation By Suppliers"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('ProductRQuotation')}
                />
                <DrawerItem
                  label="Purchase Order List"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('ProductROrder')}
                />
                <DrawerItem
                  label="Purchase Requests"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('ProductRPurchase')}
                />
                <DrawerItem
                  label="Good Receiving Note"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('ProductRGood')}
                />
                <DrawerItem
                  label="PR Review"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('ProductRReview')}
                />
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Collapse>
              <CollapseHeader>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 10,
                    padding: 5,
                  }}>
                  User And Roles
                </Text>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="Add a Users"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('NewUsers')}
                />

                <DrawerItem
                  label="Users List"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('Users')}
                />
              </CollapseBody>
            </Collapse>
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Collapse>
              <CollapseHeader>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 10,
                    padding: 5,
                  }}>
                  Settings
                </Text>
              </CollapseHeader>
              <CollapseBody>
                <DrawerItem
                  label="Hourly Rate of Labour"
                  labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                  onPress={() => props.navigation.navigate('Settings')}
                />
              </CollapseBody>
            </Collapse>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
