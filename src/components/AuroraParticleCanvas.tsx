'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AuroraParticleCanvasProps {
  scrollProgress?: number; // 0.0 to 1.0
  className?: string;
  interactive?: boolean;
}

export function AuroraParticleCanvas({
  scrollProgress = 0,
  className = '',
  interactive = true,
}: AuroraParticleCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<number>(scrollProgress);
  scrollProgressRef.current = scrollProgress;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf5fbff, 0.025);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // 100% Transparent so underlying atmosphere is visible
    container.appendChild(renderer.domElement);

    // 2. Procedural Glow Sprite Texture (Incandescent White Core, Hot Pink Halo, Sky Blue Glow)
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Pure White core
        gradient.addColorStop(0.2, 'rgba(255, 61, 154, 0.95)'); // Hot Pink inner radiance
        gradient.addColorStop(0.55, 'rgba(85, 199, 242, 0.7)'); // Sky Blue diffusion
        gradient.addColorStop(0.8, 'rgba(185, 235, 255, 0.25)'); // Light Sky Blue mist
        gradient.addColorStop(1, 'rgba(245, 251, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = true;
      return texture;
    };
    const particleTexture = createParticleTexture();

    // 3. Three.js Color Palette Tokens: Sky Blue, Hot Pink, Pure White, Soft Pink, Deep Ocean
    const colorSkyBlue = new THREE.Color(0x55c7f2);
    const colorHotPink = new THREE.Color(0xff3d9a);
    const colorPureWhite = new THREE.Color(0xffffff);
    const colorSoftPink = new THREE.Color(0xffb5d8);
    const colorLightSky = new THREE.Color(0xb9ebff);
    const colorDeepOcean = new THREE.Color(0x087ead);

    // 4. System 1: Glowing Dense Core (Solar / Energy Center)
    const CORE_COUNT = prefersReducedMotion ? 1200 : 2800;
    const coreGeometry = new THREE.BufferGeometry();
    const corePositions = new Float32Array(CORE_COUNT * 3);
    const coreColors = new Float32Array(CORE_COUNT * 3);
    const coreOriginalRadius = new Float32Array(CORE_COUNT);

    for (let i = 0; i < CORE_COUNT; i++) {
      const u = Math.random();
      const radius = 0.2 + Math.pow(u, 1.8) * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      corePositions[i * 3] = x;
      corePositions[i * 3 + 1] = y;
      corePositions[i * 3 + 2] = z;
      coreOriginalRadius[i] = radius;

      // Color variation: Core is pure white to hot pink to sky blue
      const mixRatio = Math.sin(theta * 2) * 0.5 + 0.5;
      const vertexColor = colorHotPink.clone().lerp(colorSkyBlue, mixRatio);
      if (radius < 0.6) {
        vertexColor.lerp(colorPureWhite, 0.7);
      } else if (radius > 1.2) {
        vertexColor.lerp(colorLightSky, 0.4);
      }
      coreColors[i * 3] = vertexColor.r;
      coreColors[i * 3 + 1] = vertexColor.g;
      coreColors[i * 3 + 2] = vertexColor.b;
    }

    coreGeometry.setAttribute('position', new THREE.BufferAttribute(corePositions, 3));
    coreGeometry.setAttribute('color', new THREE.BufferAttribute(coreColors, 3));

    const coreMaterial = new THREE.PointsMaterial({
      size: 0.18,
      map: particleTexture,
      transparent: true,
      opacity: 0.9,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const corePoints = new THREE.Points(coreGeometry, coreMaterial);
    scene.add(corePoints);

    // 5. System 2: Stratified Flowing Aurora Layers (Planar Spiral Shells)
    const LAYER_COUNT = prefersReducedMotion ? 2500 : 5500;
    const layerGeometry = new THREE.BufferGeometry();
    const layerPositions = new Float32Array(LAYER_COUNT * 3);
    const layerColors = new Float32Array(LAYER_COUNT * 3);
    const layerAngles = new Float32Array(LAYER_COUNT);
    const layerRadii = new Float32Array(LAYER_COUNT);
    const layerHeights = new Float32Array(LAYER_COUNT);
    const layerSpeeds = new Float32Array(LAYER_COUNT);

    for (let i = 0; i < LAYER_COUNT; i++) {
      const radius = 1.4 + Math.random() * 4.2;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 1.8 * (1 + radius * 0.3);
      const speed = (0.2 + Math.random() * 0.8) * (1 / (radius * 0.8));

      layerPositions[i * 3] = Math.cos(angle) * radius;
      layerPositions[i * 3 + 1] = height;
      layerPositions[i * 3 + 2] = Math.sin(angle) * radius;

      layerAngles[i] = angle;
      layerRadii[i] = radius;
      layerHeights[i] = height;
      layerSpeeds[i] = speed;

      const layerColor = colorSkyBlue.clone().lerp(colorSoftPink, (radius - 1.4) / 4.2);
      if (Math.random() > 0.85) {
        layerColor.lerp(colorHotPink, 0.6);
      }
      layerColors[i * 3] = layerColor.r;
      layerColors[i * 3 + 1] = layerColor.g;
      layerColors[i * 3 + 2] = layerColor.b;
    }

    layerGeometry.setAttribute('position', new THREE.BufferAttribute(layerPositions, 3));
    layerGeometry.setAttribute('color', new THREE.BufferAttribute(layerColors, 3));

    const layerMaterial = new THREE.PointsMaterial({
      size: 0.13,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const layerPoints = new THREE.Points(layerGeometry, layerMaterial);
    scene.add(layerPoints);

    // 6. System 3: Magnetic Coronal Loops (Arching Toroidal Flux Lines)
    const LOOP_COUNT = 10;
    const PARTICLES_PER_LOOP = prefersReducedMotion ? 100 : 220;
    const TOTAL_LOOP_PARTICLES = LOOP_COUNT * PARTICLES_PER_LOOP;

    const loopGeometry = new THREE.BufferGeometry();
    const loopPositions = new Float32Array(TOTAL_LOOP_PARTICLES * 3);
    const loopColors = new Float32Array(TOTAL_LOOP_PARTICLES * 3);
    const loopProgress = new Float32Array(TOTAL_LOOP_PARTICLES);
    const loopConfigs: { angle: number; tilt: number; apexRadius: number; speed: number }[] = [];

    for (let l = 0; l < LOOP_COUNT; l++) {
      loopConfigs.push({
        angle: (l / LOOP_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.3,
        tilt: (Math.random() - 0.5) * 1.2,
        apexRadius: 2.5 + Math.random() * 2.0,
        speed: 0.15 + Math.random() * 0.25,
      });
    }

    let pIdx = 0;
    for (let l = 0; l < LOOP_COUNT; l++) {
      for (let p = 0; p < PARTICLES_PER_LOOP; p++) {
        loopProgress[pIdx] = Math.random();
        const loopColor = (l % 2 === 0)
          ? colorHotPink.clone().lerp(colorPureWhite, Math.random() * 0.4)
          : colorSkyBlue.clone().lerp(colorDeepOcean, Math.random() * 0.3);
        loopColors[pIdx * 3] = loopColor.r;
        loopColors[pIdx * 3 + 1] = loopColor.g;
        loopColors[pIdx * 3 + 2] = loopColor.b;
        pIdx++;
      }
    }

    loopGeometry.setAttribute('position', new THREE.BufferAttribute(loopPositions, 3));
    loopGeometry.setAttribute('color', new THREE.BufferAttribute(loopColors, 3));

    const loopMaterial = new THREE.PointsMaterial({
      size: 0.15,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const loopPoints = new THREE.Points(loopGeometry, loopMaterial);
    scene.add(loopPoints);

    // 7. System 4: Outward Moving Coronal Streamers (Solar Wind Expansion)
    const WIND_COUNT = prefersReducedMotion ? 800 : 1800;
    const windGeometry = new THREE.BufferGeometry();
    const windPositions = new Float32Array(WIND_COUNT * 3);
    const windColors = new Float32Array(WIND_COUNT * 3);
    const windDirections = new Float32Array(WIND_COUNT * 3);
    const windDistances = new Float32Array(WIND_COUNT);
    const windSpeeds = new Float32Array(WIND_COUNT);

    for (let i = 0; i < WIND_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const dx = Math.sin(phi) * Math.cos(theta);
      const dy = Math.sin(phi) * Math.sin(theta);
      const dz = Math.cos(phi);

      windDirections[i * 3] = dx;
      windDirections[i * 3 + 1] = dy;
      windDirections[i * 3 + 2] = dz;

      const dist = 0.5 + Math.random() * 6.5;
      windDistances[i] = dist;
      windSpeeds[i] = 0.4 + Math.random() * 0.8;

      windPositions[i * 3] = dx * dist;
      windPositions[i * 3 + 1] = dy * dist;
      windPositions[i * 3 + 2] = dz * dist;

      const windCol = (i % 3 === 0)
        ? colorHotPink.clone().lerp(colorSoftPink, Math.random())
        : colorSkyBlue.clone().lerp(colorPureWhite, Math.random() * 0.6);
      windColors[i * 3] = windCol.r;
      windColors[i * 3 + 1] = windCol.g;
      windColors[i * 3 + 2] = windCol.b;
    }

    windGeometry.setAttribute('position', new THREE.BufferAttribute(windPositions, 3));
    windGeometry.setAttribute('color', new THREE.BufferAttribute(windColors, 3));

    const windMaterial = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const windPoints = new THREE.Points(windGeometry, windMaterial);
    scene.add(windPoints);

    // 8. Mouse interaction parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // 10. Animation Render Loop with Scroll Timeline Driver
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();
      const scroll = Math.max(0, Math.min(1, scrollProgressRef.current));

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const energyMultiplier = 1.0 + Math.sin(scroll * Math.PI) * 1.5;

      const targetCamZ = 8.5 - scroll * 2.8;
      const targetCamY = Math.sin(scroll * Math.PI * 1.5) * 1.8 + mouse.y * 0.4;
      const targetCamX = Math.cos(scroll * Math.PI * 1.2) * 2.2 * (scroll > 0.2 ? 1 : scroll * 5) + mouse.x * 0.5;

      camera.position.x += (targetCamX - camera.position.x) * 0.08;
      camera.position.y += (targetCamY - camera.position.y) * 0.08;
      camera.position.z += (targetCamZ - camera.position.z) * 0.08;
      camera.lookAt(0, 0, 0);

      // --- Animate Core System ---
      const corePos = coreGeometry.attributes.position.array as Float32Array;
      const pulse = 1.0 + Math.sin(elapsedTime * 2.5) * 0.06 * energyMultiplier;
      for (let i = 0; i < CORE_COUNT; i++) {
        const baseR = coreOriginalRadius[i];
        const currentR = baseR * pulse;
        const x = corePos[i * 3];
        const y = corePos[i * 3 + 1];
        const z = corePos[i * 3 + 2];
        const len = Math.sqrt(x * x + y * y + z * z) || 1;
        const normalizedFactor = currentR / len;
        corePos[i * 3] *= normalizedFactor;
        corePos[i * 3 + 1] *= normalizedFactor;
        corePos[i * 3 + 2] *= normalizedFactor;
      }
      coreGeometry.attributes.position.needsUpdate = true;
      corePoints.rotation.y = elapsedTime * 0.15 * energyMultiplier;
      corePoints.rotation.z = Math.sin(elapsedTime * 0.2) * 0.1;

      // --- Animate Stratified Flowing Layers ---
      const layerPos = layerGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < LAYER_COUNT; i++) {
        layerAngles[i] += layerSpeeds[i] * delta * 0.8 * energyMultiplier;
        const ang = layerAngles[i];
        const rad = layerRadii[i];
        const wave = Math.sin(elapsedTime * 1.8 + rad * 2.0) * 0.18;
        layerPos[i * 3] = Math.cos(ang) * rad;
        layerPos[i * 3 + 1] = layerHeights[i] + wave;
        layerPos[i * 3 + 2] = Math.sin(ang) * rad;
      }
      layerGeometry.attributes.position.needsUpdate = true;
      layerPoints.rotation.x = Math.sin(elapsedTime * 0.2) * 0.12 + scroll * 0.4;

      // --- Animate Magnetic Coronal Loops ---
      const loopPos = loopGeometry.attributes.position.array as Float32Array;
      let loopParticleIdx = 0;
      for (let l = 0; l < LOOP_COUNT; l++) {
        const cfg = loopConfigs[l];
        for (let p = 0; p < PARTICLES_PER_LOOP; p++) {
          loopProgress[loopParticleIdx] += cfg.speed * delta * 0.7 * energyMultiplier;
          if (loopProgress[loopParticleIdx] > 1) {
            loopProgress[loopParticleIdx] -= 1;
          }
          const t = loopProgress[loopParticleIdx];

          const angle = cfg.angle + Math.sin(elapsedTime * 0.3) * 0.15;
          const arcAngle = t * Math.PI;
          const currentRadius = 1.0 + Math.sin(arcAngle) * (cfg.apexRadius - 1.0);
          const currentHeight = Math.sin(arcAngle) * (cfg.apexRadius * 0.8) * Math.cos(cfg.tilt);

          const lx = Math.cos(angle) * currentRadius;
          const ly = currentHeight;
          const lz = Math.sin(angle) * currentRadius;

          loopPos[loopParticleIdx * 3] = lx;
          loopPos[loopParticleIdx * 3 + 1] = ly;
          loopPos[loopParticleIdx * 3 + 2] = lz;

          loopParticleIdx++;
        }
      }
      loopGeometry.attributes.position.needsUpdate = true;

      // --- Animate Outward Coronal Wind ---
      const windPos = windGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < WIND_COUNT; i++) {
        windDistances[i] += windSpeeds[i] * delta * 1.2 * energyMultiplier;
        if (windDistances[i] > 7.5) {
          windDistances[i] = 0.6 + Math.random() * 0.5;
        }
        const d = windDistances[i];
        windPos[i * 3] = windDirections[i * 3] * d;
        windPos[i * 3 + 1] = windDirections[i * 3 + 1] * d;
        windPos[i * 3 + 2] = windDirections[i * 3 + 2] * d;
      }
      windGeometry.attributes.position.needsUpdate = true;

      // Overall global system rotation
      scene.rotation.y = elapsedTime * 0.08 + scroll * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      coreGeometry.dispose();
      coreMaterial.dispose();
      layerGeometry.dispose();
      layerMaterial.dispose();
      loopGeometry.dispose();
      loopMaterial.dispose();
      windGeometry.dispose();
      windMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
