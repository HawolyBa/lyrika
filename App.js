import React from 'react';
import { StyleSheet, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './components/Home'
import Song from './components/Song'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Song: {screen: Song},
});

const App = createAppContainer(MainNavigator)

//   return (
//     <View style={styles.container}>
//       <ApplicationProvider mapping={mapping} theme={lightTheme}>
//         <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          
//         </Layout>
//       </ApplicationProvider>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default App