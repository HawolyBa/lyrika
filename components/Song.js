import React, {useState, useEffect} from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { ApplicationProvider, Layout, Spinner } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import axios from 'axios'
import { API_KEY } from '../api'

const Song = ({navigation: {state, setParams}}) => {

  const [song, setSong] = useState({
    id: state.params.id, 
    title: state.params.title, 
    artist: state.params.artist,
    lyrics: '' 
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    setParams({ 
        headerTitle: 'Lyrics' 
    }) 
  }, [])

  useEffect(() => {
    setLoading(true)
    axios.get(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${state.params.songId}&apikey=${API_KEY}`)
      .then(res => {
        setSong({...song, 
        lyrics: res.data.message.body.lyrics.lyrics_body
        })
        setLoading(false)
      })
  }, [])

  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <ScrollView>
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.container}>
            {
              !loading ?
              <View>
                <Text style={styles.heading1}>Artist: {song.artist}</Text>
                <Text style={styles.heading2}>Song: {song.title}</Text>
                <View style={styles.divider}/>
                <Text style={styles.lyrics}>{song.lyrics ? song.lyrics: 'No lyrics'}</Text>
              </View>:
              <View style={styles.spinner}>
                <Spinner/>
              </View>
            }
          </View>
        </Layout>
      </ScrollView>
    </ApplicationProvider>
  )
}

Song.navigationOptions = ({ navigation }) => {
  return {
      title: navigation.getParam('headerTitle'),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  heading1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  heading2: {
    fontSize: 20,
    textAlign: 'center',
  },
  divider: {
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    marginBottom: 15,
    marginTop: 15
  },
  spinner: {
    width: 300,
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center'
  },
  lyrics: { textAlign: 'center' }
});

export default Song