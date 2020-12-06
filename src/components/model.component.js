import React from 'react'

import {
  ViroSpotLight,
  Viro3DObject,
  ViroNode,
  ViroQuad,
  ViroSound,
} from 'react-viro'

import Model from '../../assets/model/Hip.vrx'
import ModelDiffuse from '../../assets/model/FatElvis_diffuse.jpg'
import ModelNormal from '../../assets/model/FatElvis_normal.jpg'
import ModelMap from '../../assets/model/Elvis_FaceAnimMap.png'

import AudioFile from '../../assets/audio/sound.mp3'

const ModelComponent = ({ volume, ...props }) => {
  const [animation, setAnimation] = React.useState(false)

  return (
    <ViroNode {...props}>
      <ViroSound
        paused={!animation}
        muted={false}
        source={AudioFile}
        loop={true}
        volume={volume}
      />
      <ViroSpotLight
        innerAngle={5}
        outerAngle={25}
        direction={[0, -1, 0]}
        position={[0, 5, 0]}
        color="#ffffff"
        castsShadow={true}
        shadowMapSize={2048}
        shadowNearZ={2}
        shadowFarZ={7}
        shadowOpacity={0.7}
      />

      <Viro3DObject
        source={Model}
        resources={[ModelDiffuse, ModelNormal, ModelMap]}
        position={[0, 0, 0]}
        scale={[1/2e2, 1/2e2, 1/2e2]}
        type="VRX"
        onClick={() => setAnimation(!animation)}
        animation={{ name: 'mixamo.com', run: animation, loop: true }}
      />

      <ViroQuad
        rotation={[-90, 0, 0]}
        position={[0, -0.001, 0]}
        width={2.5}
        height={2.5}
        arShadowReceiver={true}
      />
    </ViroNode>
  )
}

ModelComponent.defaultProps = {
  position: [0, -1, -2]
}

export default ModelComponent