import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import PillPressable from '../../components/PillPressable'
import { colors } from '../../assets/Themes/colors'
import { useNavigation } from '@react-navigation/native'

const RecieveGift = ({ route }) => {
  const navigation = useNavigation()
  const name = route.params?.name
  const image = route.params?.image
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>sent you a music box!</Text>
      <PillPressable
        onPress={() =>
          navigation.navigate("FeedScreen")
        }
        text="Send"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 1000
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
    color: colors.white
  },
  text: {
    marginTop: 10,
    marginBottom: 50,
    color: colors.white
  }
})

export default RecieveGift