// Component to render e/ library
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
// connect = windows to world of redux from react side
import { connect } from 'react-redux';
import { CardSection } from './common';
// call action creator
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    // de-structure
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback
        // onPress registers callback to `selectLibrary` action creator w/ touch
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            {/*`library passed as prop called title & library itself has property called title`*/}
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

// styling for the titles
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// `connect()` = connect helper
export default connect()(ListItem);
