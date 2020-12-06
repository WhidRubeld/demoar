import React from 'react'

import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native'

import Slider from 'react-native-slider'

import { ViroVRSceneNavigator, ViroARSceneNavigator } from 'react-viro'

import ARScene from './screens/ar.scene'
import VRScene from './screens/vr.scene'

import Button from './components/button.component'

const sharedProps = { apiKey: '' }

const UNSET = 'UNSET'
const VR_NAVIGATOR = 'VR'
const AR_NAVIGATOR = 'AR'

const App = () => {
  const [navigator, setNavigator] = React.useState(UNSET)

  const [volume, setVolume] = React.useState(0.8)

  const renderMenu = () => (
    <ImageBackground
      source={require('../assets/imageBackground.jpg')}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Выберите режим</Text>

      <Button
        title="Дополненная реальность"
        onPress={() => setNavigator(AR_NAVIGATOR)}
        style={{ marginTop: 130, marginBottom: 30 }}
      />
      <Button
        title="Виртуальная реальность"
        onPress={() => setNavigator(VR_NAVIGATOR)}
      />
      <View style={styles.audioCard}>
        <View style={styles.audioRow}>
          <Text style={styles.subtitle}>Общая громкость</Text>
          <Text style={styles.volumeText}>{parseInt(volume * 100, 10)}%</Text>
        </View>
        <Slider
          value={volume}
          onValueChange={setVolume}
          minimumValue={0}
          maximumValue={1}
          style={{ width: '100%' }}
        />
      </View>
    </ImageBackground>
  )

  const renderVRNavigator = () => (
    <ViroVRSceneNavigator
      {...sharedProps}
      initialScene={{
        scene: (props) => <VRScene {...props} volume={volume} />,
      }}
    />
  )

  const renderARNavigator = () => (
    <ViroARSceneNavigator
      {...sharedProps}
      initialScene={{
        scene: (props) => <ARScene {...props} volume={volume} />,
      }}
    />
  )

  if (navigator == UNSET) {
    return renderMenu()
  } else if (navigator == AR_NAVIGATOR) {
    return renderARNavigator()
  } else if (navigator == VR_NAVIGATOR) {
    return renderVRNavigator()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginTop: 150,
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 25,
  },
  audioCard: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ccc',
  },
  audioRow: {
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 14,
  },
  volumeText: {
    fontSize: 18,
  },
})

export default App
