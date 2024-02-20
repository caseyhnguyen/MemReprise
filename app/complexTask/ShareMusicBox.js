import React from 'react'
import MapScreen from '../MapScreen'
import Header1 from '../../components/Header1'
import PillSelectable from '../../components/PillSelectable'
import PillSelectableDouble from '../../components/PillSelectableDouble'
import PillPressable from '../../components/PillPressable'
import ProfilePressable from '../../components/ProfilePressable'
import { useNavigation } from '@react-navigation/native'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { colors } from '../../assets/Themes/colors'
import ChrisHemsworthImg from '../../assets/chris-hemsworth.jpg'
import DwayneJohnsonImg from '../../assets/dwayne-johnson.jpg'
import JennaOrtegaImg from '../../assets/jenna-ortega.jpg'
import TimCookImg from '../../assets/tim-cook.jpg'

const ShareMusicBox = () => {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View style={styles.mapView}>
        <MapScreen />
      </View>
      <View style={styles.bodyView}>
        <View style={styles.sectionView}>
          <Header1 text='Choose a Song'></Header1>
          <ScrollView horizontal>
            <PillSelectableDouble topText='Taylor Swift' bottomText='Cruel Summer' isSelected></PillSelectableDouble>
            <PillSelectableDouble topText='Dua Lipa' bottomText='Houdini'></PillSelectableDouble>
            <PillSelectableDouble topText='Cage the Elephant' bottomText="Ain't No Rest for the Wicked"></PillSelectableDouble>
            <PillSelectableDouble topText='Jack Harlow' bottomText="Lovin' On Me"></PillSelectableDouble>
          </ScrollView>
        </View>
        <View style={styles.sectionView}>
          <Header1 text='Send To'></Header1>
          <ScrollView horizontal>
            <ProfilePressable image={ChrisHemsworthImg} name='Chris' isSelected></ProfilePressable>
            <ProfilePressable image={DwayneJohnsonImg} name='Dwayne'></ProfilePressable>
            <ProfilePressable image={JennaOrtegaImg} name='Jenna'></ProfilePressable>
            <ProfilePressable image={TimCookImg} name='Tim'></ProfilePressable>
          </ScrollView>
        </View>
        <View style={styles.sectionView}>
          <Header1 text='Add a Message'></Header1>
          <TextInput
            placeholder="Add a message"
            style={styles.input}
          />
        </View>
        <View style={styles.sectionView}>
          <Header1 text='Delivery'></Header1>
          <ScrollView horizontal>
            <PillSelectable text='Send Now' isSelected></PillSelectable>
            <PillSelectable text='Surprise'></PillSelectable>
            <PillSelectable text='Notify'></PillSelectable>
          </ScrollView>
        </View>
        <PillPressable
          onPress={() =>
            navigation.navigate("FeedScreen")
          }
          text="Send"
        />
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  bodyView: {
    padding: 10
  },
  input: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    padding: 11,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75,
    fontWeight: "bold",
  },
  mapView: {
    width: '100%'
  },
  pg: {
    color: colors.white
  },
  sectionView: {
    marginBottom: 20
  }
})

export default ShareMusicBox