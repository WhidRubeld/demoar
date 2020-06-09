import React from 'react'

import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native'

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

  const renderMenu = () => (
    <ImageBackground
      source={require('../assets/imageBackground.jpg')}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Выберите курс обучения</Text>

      <Button
        title="Дополненная реальность"
        onPress={() => setNavigator(AR_NAVIGATOR)}
        style={{ marginTop: 130, marginBottom: 30 }}
      />
      <Button
        title="Виртуальная реальность"
        onPress={() => setNavigator(VR_NAVIGATOR)}
      />
    </ImageBackground>
  )

  const renderVRNavigator = () => (
    <ViroVRSceneNavigator {...sharedProps} initialScene={{ scene: VRScene }} />
  )

  const renderARNavigator = () => (
    <ViroARSceneNavigator {...sharedProps} initialScene={{ scene: ARScene }} />
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
    alignItems: 'center',
    padding: 20,
  },
  title: {
    paddingTop: 290,
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 25,
  },
})

export default App
