import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Registration from '../screens/Registration';
import NewRegistration from '../screens/NewRegistration';
import NewAnalysis from '../screens/NewAnalysis';
import Analysis from '../screens/Analysis';
import ProductROrder from '../screens/ProductROrder';
import ProductRQuotation from '../screens/ProductRQuotation';
import BodyWorkshop from '../screens/BodyWorkshop';
import MechanicWorkshop from '../screens/MechanicWorkshop';
import PaintWorkshop from '../screens/PaintWorkshop';
import NewUsers from '../screens/NewUsers';
import DetailerWorkshop from '../screens/DetailerWorkshop';
import Users from '../screens/Users';
import ProductRPurchase from '../screens/ProductRPurchase';
import ProductRGood from '../screens/ProductRGood';
import ProductRReview from '../screens/ProductRReview';
import Settings from '../screens/Settings';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import CameraScan from '../screens/CameraScan';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="NewRegistration"
          component={NewRegistration}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="NewAnalysis"
          component={NewAnalysis}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Analysis"
          component={Analysis}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="ProductROrder"
          component={ProductROrder}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="BodyWorkshop"
          component={BodyWorkshop}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="MechanicWorkshop"
          component={MechanicWorkshop}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="PaintWorkshop"
          component={PaintWorkshop}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="NewUsers"
          component={NewUsers}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="DetailerWorkshop"
          component={DetailerWorkshop}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Users"
          component={Users}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="ProductRQuotation"
          component={ProductRQuotation}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="ProductRPurchase"
          component={ProductRPurchase}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="ProductRGood"
          component={ProductRGood}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="ProductRReview"
          component={ProductRReview}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        
        <Drawer.Screen
          name="CameraScan"
          component={CameraScan}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
