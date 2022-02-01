import * as THREE from 'three';

// import shaderFragment from '../../Shaders/Floor/fragment.glsl';
// import shaderVertex from '../../Shaders/Floor/vertex.glsl';

export default class FloorMaterial {
  constructor() {
    const uniforms = {
      tBackground: { value: null },
    };

    return new THREE.ShaderMaterial({
      wireframe: false,
      transparent: false,
      uniforms,
      vertexShader: `
        varying vec2 vUv;

        void main()
        {
            vUv = uv;
        
            vec3 newPosition = position;
            newPosition.z = 1.0;
            gl_Position = vec4(newPosition, 1.0);
        }

      `,
      fragmentShader: `
        uniform sampler2D tBackground;

        varying vec2 vUv;
        
        void main()
        {
            vec4 backgroundColor = texture2D(tBackground, vUv);
        
            gl_FragColor = backgroundColor;
        }

      `,
    });
  }
}
