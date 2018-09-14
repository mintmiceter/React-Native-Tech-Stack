// spinner component (used for i.e. waiting for login)

// `ActivityIndicator` react native's spinner
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
    {/* `size || 'large'` means if size passed from `const Spinner = ({ size })`
    then use that, else use `'large'` */}
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  // spinner styling
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
