import * as THREE from 'three';

export default function FloorShadowMaterial() {
  const uniforms = {
    tShadow: { value: null },
    uShadowColor: { value: null },
    uAlpha: { value: null },
  };

  const material = new THREE.ShaderMaterial({
    wireframe: false,
    transparent: true,
    uniforms,
    vertexShader: `
      varying vec2 vUv;

      void main()
      {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tShadow;
      uniform vec3 uShadowColor;
      uniform float uAlpha;
      
      varying vec2 vUv;
      
      void main()
      {
          float shadowAlpha = 1.0 - texture2D(tShadow, vUv).r;
          shadowAlpha *= uAlpha;
      
          gl_FragColor = vec4(uShadowColor, shadowAlpha);
      }
      `,
  });

  return material;
}
