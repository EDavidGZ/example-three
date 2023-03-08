import {useRef, useEffect} from 'react'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const Hola = () => {
    const mountRef = useRef(null);
    
    useEffect(() =>{
        const currentRef = mountRef.current;
        const {clientWidth: width, clientHeight: height} = currentRef;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, width/height, 0.01, 100);
        scene.background = new THREE.Color(0xff3d2);
        camera.position.z = 6;
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        currentRef.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshPhongMaterial({color: 0x0f2c64});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const ambientalLight = new THREE.AmbientLight( 0x404040, 5); 
        scene.add( ambientalLight );

        const pointLight = new THREE.PointLight( 0xff0000, 5 );
        pointLight.position.set( 8, 8, 8 );
        scene.add( pointLight );

        const clock = new THREE.Clock();

        const update = () => {
            controls.update()
            const elapsedTime = clock.getElapsedTime();

            cube.rotateX(0.01);
            cube.rotateY(0.01);
            cube.position.y = Math.sin(elapsedTime)

            renderer.render(scene, camera);
            renderer.setAnimationLoop(() => update())

        }

        const resize = () => {
          const updatedWith = currentRef.clientWidth;
          const updatedheight = currentRef.clientHeight;
          renderer.setSize(updatedWith, updatedheight);
          camera.aspect = updatedWith / updatedheight;
          camera.updateProjectionMatrix();
        }

        window.addEventListener("resize", resize)

        update();


        return () => {
            currentRef.removeChild(renderer.domElement);
            window.removeEventListener("resize", resize);
        }
    }, [])


  return (

    <div ref={mountRef} style={{width: '100%', height: '100vh'}}></div>
  )
}

export default Hola