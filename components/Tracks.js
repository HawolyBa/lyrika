import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Spinner } from '@ui-kitten/components';

import Track from './Track'

const Tracks = ({ loading, songs, navigation }) => {
  return !loading ?
    <View style={styles.cards}>
      { songs.length > 0 
        ? songs.map(song => <Track key={song.track.track_id} navigation={navigation} song={song}/>) 
        : <Text>No tracks found</Text>
      }
    </View>:
    <View style={styles.spinner}>
      <Spinner/>
    </View>
}

const styles = StyleSheet.create({
  cards: {
    width: 300,
    marginTop: 20
  },
  spinner: {
    width: 300,
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center'
  }
});

export default Tracks