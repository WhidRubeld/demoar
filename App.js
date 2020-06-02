import React from 'react'

import { StatusBar } from 'react-native'

import { Text, View, StyleSheet, Button } from 'react-native'

import { ViroVRSceneNavigator, ViroARSceneNavigator } from 'react-viro'

import ARScene from './js/ARScene'
import VRScene from './js/VRScene'

const sharedProps = { apiKey: '' }

const UNSET = 'UNSET'
const VR_NAVIGATOR = 'VR'
const AR_NAVIGATOR = 'AR'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      navigator: UNSET,
      sharedProps,
    }
  }

  _getExperienceSelector() {
    return (
      <View style={styles.outer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.inner}>
          <Text style={styles.title}>Выбор сцены</Text>

          <Button
            title="Дополненная реальность"
            onPress={() => this.setState({ navigator: AR_NAVIGATOR })}
          />
          <Button
            title="Виртуальная реальность"
            onPress={() => this.setState({ navigator: VR_NAVIGATOR })}
          />
        </View>
      </View>
    )
  }

  _getARNavigator() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: ARScene }}
      />
    )
  }

  _getVRNavigator() {
    return (
      <ViroVRSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: VRScene }}
        onExitViro={() => this.setState({ navigator: UNSET })}
      />
    )
  }

  render() {
    if (this.state.navigator == UNSET) {
      return this._getExperienceSelector()
    } else if (this.state.navigator == VR_NAVIGATOR) {
      return this._getVRNavigator()
    } else if (this.state.navigator == AR_NAVIGATOR) {
      return this._getARNavigator()
    }
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
