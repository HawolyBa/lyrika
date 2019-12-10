import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Button } from '@ui-kitten/components';

const Search = ({ search, searchSong, submitSearch }) => {
  return (
    <View style={styles.innerForm}>
      <View style={styles.input}>
        <Input
          placeholder='Place your Text'
          value={search}
          onChangeText={searchSong}
        />
      </View>
      <Button style={styles.button} onPress={submitSearch} status='danger'>
        SEARCH
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  innerForm: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: 200
  },
  button: {
    margin: 8
  }
});

export default Search