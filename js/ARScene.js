import React from 'react'

import {
  ViroARScene,
  ViroAmbientLight,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from 'react-viro'

const portalVRX = require('../assets/portal/portal_ship.vrx')
const portalDiffuse = require('../assets/portal/portal_ship_diffuse.png')
const portalNormal = require('../assets/portal/portal_ship_normal.png')
const portaSpecular = require('../assets/portal/portal_ship_specular.png')

const image360 = require('../assets/360_island.jpg')

const ARScene = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <ViroPortalScene
        passable={true}
        dragType="FixedDistance"
        onDrag={() => {}}
      >
        <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>
          <Viro3DObject
            source={portalVRX}
            resources={[portalDiffuse, portalNormal, portaSpecular]}
            type="VRX"
          />
        </ViroPortal>
        <Viro360Image source={image360} />
      </ViroPortalScene>
    </ViroARScene>
  )
}

export default ARScene