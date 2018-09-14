// reusable TextInput component
import React from 'react';
import { TextInput, View, Text } from 'react-native';

// `label` as prob to be passed in <Text> component/tag
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      {/* TextInput actually receving text from user */}
      <TextInput
        // for true bolean no need for true: `secureTextEntry` same `secureTextEntry={true}`
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        // receving onChangeText & pass along to TextInput
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  // styling TextInput
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    // 2/n of available space allocated to inputStyle
    flex: 2
  },
  // styling Text
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    // 1/n of available space allocated to labelStyle
    flex: 1
  },
  // styling View tag
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
