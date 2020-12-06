import React from 'react'

import {
  ViroScene,
  ViroCamera,
  ViroSkyBox,
  ViroAmbientLight,
} from 'react-viro'

import ModelComponent from '../components/model.component'

// scene
const VRScene = ({ volume }) => {

  return (
    <ViroScene>
      <ViroCamera position={[0, 0, 0]} rotation={[45, 0, 0]} active={true} />
      <ViroSkyBox color="#fff" />
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <ModelComponent  volume={volume} />
    </ViroScene>
  )
}

export default VRScene
