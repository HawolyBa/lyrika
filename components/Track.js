import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Card, CardHeader } from '@ui-kitten/components';

const Tracks = ({ song, navigation }) => {
  return (
    <View style={styles.card}>
      <Card header={() => (
        <CardHeader
          title={`Artist: ${song.track.artist_name}`}
          description={`Song: ${song.track.track_name}`}
        />)}
        >
        <Button onPress={() => navigation.navigate('Song', {
          title: song.track.track_name, 
          songId: song.track.track_id,
          artist: song.track.artist_name
          })}>
          See lyrics
        </Button>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  cards: {
    width: 300,
    marginTop: 20
  },
  card: {
    marginBottom: 10,
  },
  spinner: {
    width: 300,
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center'
  }
});

export default Tracks