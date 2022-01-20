import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScan = ({navigation}) => {
  const [camRef, setCamRef] = useState(null);

  //ON successfully scanning move to results screens
  function _onBarcodeScanned(e) {
    alert(e.data);
    navigation.navigate('NewRegistration');
  }

  return (
    <View style={styles._mainContainer}>
      <RNCamera
        ref={ref => setCamRef(ref)}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        autoFocus="on"
        onBarCodeRead={_onBarcodeScanned}
        
      />
    </View>
  );
};

export default CameraScan;

const styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
});