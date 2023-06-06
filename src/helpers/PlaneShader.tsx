/* eslint-disable no-param-reassign */
import { useFrame } from '@react-three/fiber';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = /* glsl */ `
varying vec2 vUv;
void main(){
    vUv = uv;
    gl_Position = vec4( position, 1.0 );
}`;

const fragmentShader = /* glsl */ `
varying vec2 vUv;
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 mousePos;

#define N 16
#define PI 3.14159265
#define depth 1.0
#define rate 0.3
#define huecenter 0.5

vec3 hsv2rgb( in vec3 c )
{
    vec3 rgb = clamp( abs(mod(c.y*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, .3 );
    return c.x * mix( vec3(.1), rgb, 1.0);
}

void main(){
    vec2 v = gl_FragCoord.xy/iResolution.xy;
    float t = iTime * 0.08;
    float r = 1.8;
    float d = 0.0;
    for (int i = 1; i < N; i++) {
        d = (PI / float(N)) * (float(i) * 14.0);
        r += length(vec2(rate*v.y, rate*v.x)) + 1.21;
        v = vec2(v.x+cos(v.y+cos(r)+d)+cos(t),v.y-sin(v.x+cos(r)+d)+sin(t));
    }
    r = (sin(r*0.09)*0.5)+0.5;            
    vec3 hsv = vec3(
        mod(mousePos.x + huecenter, 1.0), 1.0-0.5*pow(max(r,0.0)*1.2,0.5), 1.0-0.2*pow(max(r,0.4)*2.2,6.0)
    );
    gl_FragColor = vec4(hsv2rgb(hsv), 1.0);
}`;

const PlaneShader = forwardRef<any, any>((_, ref) => {
  const localRef = useRef<any>(null);

  useImperativeHandle(ref, () => localRef.current);

  useFrame(({ size, mouse }, delta) => {
    if (!localRef.current) return;
    localRef.current.uniforms.iResolution.value = new THREE.Vector2(size.width, size.height);
    localRef.current.uniforms.iTime.value += delta;
    localRef.current.uniforms.mousePos.value = mouse;
  });
  return (
    <shaderMaterial
      ref={localRef}
      side={THREE.DoubleSide}
      fragmentShader={fragmentShader}
      vertexShader={vertexShader}
      depthTest={false}
      uniforms={{
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2() },
        mousePos: { value: new THREE.Vector2() },
      }}
    />
  );
});

export default PlaneShader;
