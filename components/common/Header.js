// import libraries for making components
import React from 'react';
  // `View` tag for positioning and styling elements
import { Text, View } from 'react-native';

// make components
const Header = (props) => {
const { textStyle, viewStyle } = styles;

  // `style={textStyle} is prop (properties)`
  return (
  // "parent component should provider headerText prop"
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// style
const styles = {
  // style view tab wrapping the header
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    // shadow bottom property
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 200 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'
  },
  // style header
  textStyle: {
    fontSize: 20
  }
};

// make component available to other parts of App
export { Header };
