import React from 'react'

import {
  ViroARScene,
  ViroAmbientLight,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroSound,
} from 'react-viro'

import portalVRX from '../../assets/portal/portal_ship.vrx'
import portalDiffuse from '../../assets/portal/portal_ship_diffuse.png'
import portalNormal from '../../assets/portal/portal_ship_normal.png'
import portaSpecular from '../../assets/portal/portal_ship_specular.png'
import image360 from '../../assets/360_island.jpg'

import AudioFile from '../../assets/audio/portal.mp3'

import ModelComponent from '../components/model.component'

const ARScene = ({ volume }) => {
  const [audio, setAudio] = React.useState(false)
  return (
    <ViroARScene>
      {audio && (
        <ViroSound
          paused={false}
          muted={false}
          source={AudioFile}
          loop={false}
          volume={volume}
          onFinish={() => setAudio(false)}
        />
      )}
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <ViroPortalScene
        passable={true}
        dragType="FixedDistance"
        onDrag={() => {}}
        onPortalEnter={() => setAudio(true)}
        onPortalExit={() => setAudio(true)}
      >
        <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>
          <Viro3DObject
            source={portalVRX}
            resources={[portalDiffuse, portalNormal, portaSpecular]}
            type="VRX"
          />
        </ViroPortal>
        <Viro360Image source={image360} />
        <ModelComponent
          dragType="FixedToWorld"
          onDrag={() => {}}
          volume={volume}
        />
      </ViroPortalScene>
    </ViroARScene>
  )
}

export default ARScene
