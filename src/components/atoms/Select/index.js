import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Select = () => {
  return (
    <View>
      <Text>Label Select Option</Text>
      <Picker
        // selectedValue={this.state.language}
        style={{height: 50, width: 100}}
        // 
        >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({});
