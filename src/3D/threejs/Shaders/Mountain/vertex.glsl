uniform sampler2D uDisplacementTexture;
uniform float uDisplacementStrength;

varying vec3 vColor;

void main()
{
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = texture2D(uDisplacementTexture, uv).r ;

  modelPosition.y += elevation * uDisplacementStrength;

  gl_Position = projectionMatrix * viewMatrix * modelPosition;

  vec3 color = mix(vec3(0.2, 0.15, 0.10), vec3(1.0, 1.0, 1.0), elevation*elevation);
  vColor = color;
}
