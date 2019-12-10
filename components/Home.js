import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import axios from 'axios'
import { API_KEY } from '../api'
import Search from './Search';
import Tracks from './Tracks';

const Home = ({ navigation }) => {

  const [search, setSearch] = useState('')
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)

  const searchSong = value => setSearch(value)

  useEffect(() => { 
    navigation.setParams({ 
        headerTitle: 'Lyrika - Home' 
    }) 
  }, [])

  const submitSearch = () => {
    setLoading(true)
    axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track=${search}&page_size=20&s_track_rating=desc&apikey=${API_KEY}`)
    .then(res => {
      setSongs(res.data.message.body.track_list)
      setLoading(false)
    })
  }

  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <ScrollView>
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.form}>
            <Search 
              search={search}
              searchSong={searchSong}
              submitSearch={submitSearch}
            />
            <Tracks
              songs={songs}
              loading={loading}
              navigation={navigation}
            />
          </View>
        </Layout>
      </ScrollView>
    </ApplicationProvider>
  )
}

Home.navigationOptions = ({ navigation }) => {
  return {
      title: navigation.getParam('headerTitle'),
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: 30
  },
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

export default Home