import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { WebView } from 'react-native-webview'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../assets/Themes/colors'

const PlaylistCity = ({ route }) => {
  const navigation = useNavigation()
  const name = route.params?.name
  const city = route.params?.city
  const image = route.params?.image

  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.boldText}>{city}'s</Text>
          <Text style={styles.text}>mixtape for</Text>
          <Text style={styles.boldText}>{name}</Text>
        </View>
      </View>
      <WebView source={{ uri: 'https://open.spotify.com/playlist/2fmyOjn5kNiqMUjKRl08M3?si=b6bef14539ac468f' }} style={styles.spotifyContainer} />
    </>
  )
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.white,
    marginVertical: 5
  },
  image: {
    width: 100,
    height: 100
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center'
  },
  spotifyContainer: {
    marginHorizontal: 10
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 40,
    marginVertical: 20
  },
  text: {
    color: colors.white
  }
})

export default PlaylistCity