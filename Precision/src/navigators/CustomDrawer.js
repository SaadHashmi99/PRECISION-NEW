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

const CustomDrawer = props => {
  return (
    <View style={{flex: 1, backgroundColor: "#C6E633"}}>
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
                    color: '#000'
                  }}
                  onPress={() => props.navigation.navigate('NewRegistration')}
                  focused={true}
                />
                <DrawerItem
                  label="Registration"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('Registration')}
                  focused={true}
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
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('NewAnalysis')}
                  focused={true}
                />
                <DrawerItem
                  label="Analysis List"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('Analysis')}
                  focused={true}
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
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('DetailerWorkshop')}
                  focused={true}
                />
                <DrawerItem
                  label="Body Workshop"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('BodyWorkshop')}
                  focused={true}
                />
                <DrawerItem
                  label="Mechanic Workshop"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('MechanicWorkshop')}
                  focused={true}
                />
                <DrawerItem
                  label="Paint Workshop"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('PaintWorkshop')}
                  focused={true}
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
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('ProductRQuotation')}
                  focused={true}
                />
                <DrawerItem
                  label="Purchase Order List"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('ProductROrder')}
                  focused={true}
                />
                <DrawerItem
                  label="Purchase Requests"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('ProductRPurchase')}
                  focused={true}
                />
                <DrawerItem
                  label="Good Receiving Note"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('ProductRGood')}
                  focused={true}
                />
                <DrawerItem
                  label="PR Review"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('ProductRReview')}
                  focused={true}
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
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('NewUsers')}
                  focused={true}
                />

                <DrawerItem
                  label="Users List"
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('Users')}
                  focused={true}
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
                  labelStyle={{fontSize: 17, fontWeight: 'bold', color: '#000'}}
                  onPress={() => props.navigation.navigate('Settings')}
                  focused={true}
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
