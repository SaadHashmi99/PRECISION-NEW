import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, StyleSheet, Button, ScrollView, Dimensions, Pressable} from 'react-native';
import { STYLES } from '../assets/styles/index';
import * as colors from '../assets/colors/index';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';
import Modal from "react-native-modal";
import ModalView from './ModalView';
import { Col, Row, Grid } from 'react-native-easy-grid';

const NewAnalysis = () => {

  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisibleMenu, setModalVisibleMenu] = useState(false);

    return (
      <View style={STYLES.container}>
      <Image source={require('../assets/images/light.jpg')} style={{opacity: 0.1, zIndex: -1, position: 'absolute', width: Dimensions.get("screen").width, height: Dimensions.get("screen").height}} />
          <View style={STYLES.headView}>
          <Text style={STYLES.headText}> PRECISION AUTOS MANAGEMENT SYSTEM </Text>
        </View> 
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name='menu-outline' style={{marginTop: 13, marginLeft: 10}} size={30} color={colors.TEXT} />
        </TouchableOpacity>  
        <Text style={STYLES.Heading}>USER AND ROLES</Text>      
          <Text style={STYLES.subHeading}>USER LIST</Text>
          <View style={[STYLES.headView, {marginTop: 20}]}>
            <Text style={STYLES.headText}>USER LIST</Text>
          </View> 
          <ScrollView>          
            <View style={{margin: 10, marginTop: 30}}>
              <Grid>
                <Col size={14}>
                  <Row style={[STYLES.RowView, {borderTopLeftRadius: 15, height: 60, backgroundColor: colors.SECONDARY}]}>
                    <Text style={[STYLES.tableText, {fontWeight: 'bold', color: '#000', fontSize: 14}]}>S No</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#ffffff'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}> 1. </Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#d7ed4e'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}> 2. </Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#ffffff'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}> 3. </Text>
                  </Row>
                </Col>
                <Col size={26}>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: colors.SECONDARY}]}>
                    <Text style={[STYLES.tableText, {fontWeight: 'bold', color: '#000', fontSize: 14}]}>EMPLOYEE</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#ffffff'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}>Saad Ali</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#d7ed4e'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}>Haroon</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#ffffff'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}>Rizwan Khan</Text>
                  </Row>
                </Col>
                <Col size={22}>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: colors.SECONDARY}]}>
                    <Text style={[STYLES.tableText, {fontWeight: 'bold', color: '#000', fontSize: 14}]}>ROLE</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#ffffff'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}>Painter</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#d7ed4e'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}>Detailer</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#ffffff'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}>Mechanic</Text>
                  </Row>
                </Col>
                <Col size={27}>
                  <Row style={[STYLES.RowView, {height: 60, backgroundColor: colors.SECONDARY}]}>
                    <Text style={[STYLES.tableText, {fontWeight: 'bold', color: '#000', fontSize: 14}]}>USERNAME</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#ffffff'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}>saad786</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#d7ed4e'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}>haroon447</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#ffffff'}]}>
                    <Text style={[STYLES.tableText, {fontSize: 12, fontWeight: 'bold'}]}>riz456</Text>
                  </Row>
                </Col>
                <Col size={25}>
                  <Row style={[STYLES.RowView, {borderTopRightRadius: 15, height: 60, backgroundColor: colors.SECONDARY}]}>
                    <Text style={[STYLES.tableText, {fontWeight: 'bold', color: '#000', fontSize: 14}]}>ACTIONS</Text>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#ffffff', flexDirection: 'column'}]}>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, color: '#ffffff', marginTop: 16}]}>INACTIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 6, color: '#ffffff', marginTop: 5}]}> RESET PASSWORD</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#d7ed4e', flexDirection: 'column'}]}>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, color: '#ffffff', marginTop: 16}]}>INACTIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 6, color: '#ffffff', marginTop: 5}]}> RESET PASSWORD</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row style={[STYLES.RowView, {height: 70, backgroundColor: '#ffffff', flexDirection: 'column'}]}>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 8, color: '#ffffff', marginTop: 16}]}>INACTIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={[STYLES.appButtonUsers, {alignSelf: 'center', fontSize: 6, color: '#ffffff', marginTop: 5}]}> RESET PASSWORD</Text>
                    </TouchableOpacity>
                  </Row>
                </Col>
              </Grid>
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text style={[STYLES.appButton, {alignSelf: 'center', marginTop: 20}]}>NEXT</Text>
              </TouchableOpacity>
            </View>
            {/* <Modal
              transparent={true}
              isVisible={modalVisibleMenu}
              animationIn="slideInLeft"
              animationOut="slideOutLeft"
              backdropOpacity={0.2}
              onBackdropPress={() => setModalVisibleMenu(false)}
            >
                <LinearGradient colors={[colors.SECONDARY, colors.SECONDARY]} style={STYLES.modalViewRegistration}>
                    <ScrollView>
                        <View style={{marginTop: '8%', margin: 10}}>
                        <TouchableOpacity onPress={() => setModalVisibleMenu(false)} style={{zIndex: 1, width: 25, alignSelf: 'flex-end'}}>
                            <FontAwesome name='times' style={{marginTop: 90, bottom: 60}} size={30} color="#ffffff" />
                        </TouchableOpacity> 
                        <Image source={require("../assets/images/logo-white.png")} style={{width: 250, height: 250, marginTop: -120}} resizeMode='contain'/> 
                      <ModalView />
                      </View>
                      <Text></Text>
                      <Text></Text>
                      <Text></Text>
                  </ScrollView>
              </LinearGradient>
            </Modal> */}
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
            </ScrollView>   
      </View>   
    );
}

export default NewAnalysis