// renderlist of libraries to user
import React, { Component } from 'react';
import { FlatList } from 'react-native';
// connect helper connects react side of app to redux
import { connect } from 'react-redux';
import ListItem from './ListItem';

// class based component
class LibraryList extends Component {
  // helper method w/ argument 'library'
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        // list of items to render on screen
        data={this.props.libraries}
        // function to render e/ item
        renderItem={this.renderItem}
        //
        keyExtractor={(library) => library.id.toString()}
      />
    );
  }
}
// `mapStateToProps` app state object & provides them as props to component of library list
const mapStateToProps = state => {
  // `libraries:` key can be anything, i.e. 'libraries:', 'data:', 'dataToShow:'
  return { libraries: state.libraries };
};

// `connect()(LibraryList)` calls `connect` function  which calls function w/ `LibraryList
// don't need to call dispatch with auto binding `connect`
export default connect(mapStateToProps)(LibraryList);
