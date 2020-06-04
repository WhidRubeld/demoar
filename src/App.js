import React from 'react'

import { StatusBar } from 'react-native'

import { Text, View, StyleSheet, Button } from 'react-native'

import { ViroVRSceneNavigator, ViroARSceneNavigator } from 'react-viro'

import ARScene from './screens/ARScene'
import VRScene from './screens/VRScene'

const sharedProps = { apiKey: '' }

const UNSET = 'UNSET'
const VR_NAVIGATOR = 'VR'
const AR_NAVIGATOR = 'AR'

const App = () => {
  const [navigator, setNavigator] = React.useState(UNSET)

  const renderMenu = () => (
    <View style={styles.outer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.inner}>
        <Text style={styles.title}>Выбор сцены</Text>

        <Button
          title="Дополненная реальность"
          onPress={() => setNavigator(AR_NAVIGATOR)}
        />
        <Button
          title="Виртуальная реальность"
          onPress={() => setNavigator(VR_NAVIGATOR)}
        />
      </View>
    </View>
  )

  const renderVRNavigator = () => (
    <ViroVRSceneNavigator
      {...sharedProps}
      initialScene={{ scene: VRScene }}
      onExitViro={() => setNavigator(UNSET)}
    />
  )

  const renderARNavigator = () => (
    <ViroARSceneNavigator {...sharedProps} initialScene={{ scene: ARScene }} />
  )

  if (navigator == UNSET) {
    return renderMenu()
  } else if (navigator == VR_NAVIGATOR) {
    return renderARNavigator()
  } else if (navigator == AR_NAVIGATOR) {
    return renderVRNavigator()
  }
}

const styles = StyleSheet.create({
  viroContainer: {
    flex: 1,
  },
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 25,
  },
})

export default App
