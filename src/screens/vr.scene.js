import React from 'react'

import { ViroScene, ViroSkyBox, ViroAmbientLight } from 'react-viro'

import ModelComponent from '../components/model.component'

// scene
const VRScene = () => (
  <ViroScene>
    <ViroSkyBox color="#fff" />
    <ViroAmbientLight color="#ffffff" intensity={200} />
    <ModelComponent position={[0, -1, -2]} />
  </ViroScene>
)

export default VRScene
