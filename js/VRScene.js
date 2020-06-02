import React from 'react'

import {
  ViroScene,
  ViroSkyBox,
  ViroAmbientLight,
  ViroSpotLight,
  ViroSurface,
  Viro3DObject,
  ViroNode,
} from 'react-viro'

// model
import Model from '../assets/model/Hip.vrx'
import ModelDiffuse from '../assets/model/FatElvis_diffuse.jpg'
import ModelNormal from '../assets/model/FatElvis_normal.jpg'
import ModelMap from '../assets/model/Elvis_FaceAnimMap.png'

// scene
const VRScene = () => {
  const [animation, setAnimation] = React.useState(true)

  return (
    <ViroScene>
      <ViroSkyBox color="#fff" />
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <ViroNode
        position={[0, -1, -2]}
        dragType="FixedToWorld"
        onDrag={() => {}}
      >
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
          scale={[0.008, 0.008, 0.008]}
          type="VRX"
          onClick={() => setAnimation(!animation)}
          animation={{ name: 'mixamo.com', run: animation, loop: true }}
        />

        <ViroSurface
          rotation={[-90, 0, 0]}
          position={[0, -0.001, 0]}
          width={2.5}
          height={2.5}
          arShadowReceiver={true}
        />
      </ViroNode>
    </ViroScene>
  )
}

export default VRScene
