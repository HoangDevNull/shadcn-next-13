import dynamic from 'next/dynamic';

export const PlaneShaderMaterial = dynamic(() => import('./PlaneShaderMaterial'), { ssr: false });
export const PointShaderMaterial = dynamic(() => import('./PointShaderMaterial'), { ssr: false });
