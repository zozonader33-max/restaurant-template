import * as THREE from "https://unpkg.com/three@0.162.0/build/three.module.js";

const host=document.querySelector("#coffee3d");
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(35,1,.1,100);camera.position.set(3.2,2.4,7);camera.lookAt(0,0,0);
const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));host.appendChild(renderer.domElement);
const cup=new THREE.Group();scene.add(cup);
const ceramic=new THREE.MeshStandardMaterial({color:0xf5f1e8,roughness:.42,metalness:.05});
const coffee=new THREE.MeshStandardMaterial({color:0x3d160c,roughness:.18,metalness:.05});
const cupBody=new THREE.Mesh(new THREE.CylinderGeometry(1.55,1.27,2.15,64,1,true),ceramic);cupBody.position.y=.05;cup.add(cupBody);
const rim=new THREE.Mesh(new THREE.TorusGeometry(1.55,.12,18,64),ceramic);rim.rotation.x=Math.PI/2;rim.position.y=1.13;cup.add(rim);
const drink=new THREE.Mesh(new THREE.CylinderGeometry(1.4,1.4,.06,64),coffee);drink.position.y=1.08;cup.add(drink);
const handle=new THREE.Mesh(new THREE.TorusGeometry(.7,.16,16,48,Math.PI*1.45),ceramic);handle.rotation.y=-Math.PI/2;handle.position.set(1.55,.1,0);cup.add(handle);
const saucer=new THREE.Mesh(new THREE.CylinderGeometry(2.3,2.05,.16,64),ceramic);saucer.position.y=-1.13;cup.add(saucer);
const latte=new THREE.Mesh(new THREE.TorusGeometry(.53,.09,10,40),new THREE.MeshStandardMaterial({color:0xe4c3a0,roughness:.35}));latte.rotation.x=Math.PI/2;latte.position.y=1.13;cup.add(latte);
const light=new THREE.DirectionalLight(0xffffff,2.6);light.position.set(4,6,5);scene.add(light);scene.add(new THREE.AmbientLight(0xd7e854,1.1));
const steamMaterial=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.33});
for(let i=0;i<3;i++){const steam=new THREE.Mesh(new THREE.TorusGeometry(.17,.023,8,24,Math.PI),steamMaterial);steam.position.set((i-1)*.35,1.55,0);steam.rotation.set(Math.PI/2,0,(i-1)*.3);steam.userData.offset=i;cup.add(steam)}
let pointer=0;host.addEventListener("pointermove",e=>{pointer=((e.clientX-host.getBoundingClientRect().left)/host.clientWidth-.5)*1.1});
function resize(){const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}new ResizeObserver(resize).observe(host);resize();
function animate(t){const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;cup.rotation.y=reduced ? .35 : .35+Math.sin(t*.00055)*.14+pointer;cup.rotation.x=.03;cup.position.y=reduced?0:Math.sin(t*.001)*.08;cup.children.filter(x=>x.userData.offset!==undefined).forEach(s=>{s.position.y=1.55+Math.sin(t*.001+s.userData.offset)*.08});renderer.render(scene,camera);requestAnimationFrame(animate)}requestAnimationFrame(animate);
