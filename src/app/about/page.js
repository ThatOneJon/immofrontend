"use client"
import { Canvas } from '@react-three/fiber'
import Building from './model/building'
import { Html, useProgress } from '@react-three/drei'
import { Suspense } from 'react'
import { OrbitControls } from "@react-three/drei"

function Loader() {
    const { progress } = useProgress()
    return <Html center> <h1 className="text-4xl text-black">{progress} % loaded</h1></Html>
  }

export default function About(){
    return(
        <div className="h-screen w-full font-serif" >
            <div className="h-1/2 bg-slate-200 rounded">
            <Canvas shadows={true} camera={{ position: [4, 4, 5] }}>
                <Suspense fallback={<Loader />}>
                        <pointLight position={[5, 10, 5]} intensity={1.5} />
                        <Building />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={0.7}  />
            </Canvas>
            <p className="bg-black text-white text-xs text-center rounded">source:https://sketchfab.com/3d-models/building-jkl-agu-sagamihara-campus-lod2-3-3323cdbed47d4daf892e0b74719313c2 author: ibukilego (https://sketchfab.com/ibukilego)</p>
            </div>
                <h1 className="text-center my-10 text-4xl underline">Concrete is our passion, since 1922!</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full p-3">
                <div>
                    <h2 className="font-bold text-lg">Humble beginnings</h2>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat tortor, fringilla sit amet ornare eu, vulputate eu libero. Aenean commodo ligula turpis, non malesuada nulla malesuada eu. Nam porttitor, eros in tempus volutpat, velit nibh mollis nibh, ut tristique enim erat at sem. Aliquam elementum, lacus eget lobortis pulvinar, tortor neque pellentesque nulla, eu sollicitudin massa diam ut odio. Aenean quis sollicitudin orci, ut euismod tellus. Vivamus euismod sem et mollis viverra. Duis imperdiet convallis dui, ut posuere purus lobortis et. Aliquam ac diam molestie, porttitor nunc id, sagittis velit. Maecenas quis ipsum et tortor tristique consectetur ac at erat. Nam sit amet nulla vulputate, malesuada lectus a, suscipit ligula. Duis sapien purus, eleifend nec erat sed, molestie posuere odio. Sed sollicitudin metus sit amet tellus luctus, vitae tempus felis eleifend. Proin aliquet blandit faucibus.
                        Integer sagittis, sapien non condimentum dictum, arcu velit facilisis sem, at scelerisque elit tortor vestibulum orci. Etiam diam lorem, venenatis et lectus in, consequat volutpat sem. Aliquam eget quam blandit, convallis risus sed, dictum mauris. Phasellus lobortis dui non justo vulputate mollis. Cras ornare ipsum varius metus gravida, tristique feugiat dui posuere. Phasellus egestas tellus magna, eget ullamcorper metus hendrerit varius. Vivamus ut velit nec diam cursus tincidunt. Cras erat justo, commodo vel diam eu, interdum rutrum libero. Curabitur elit turpis, eleifend sed fringilla a, mattis quis turpis. Praesent ipsum sapien, sollicitudin eu nisi at, bibendum fermentum turpis.
                    </p>
                </div>
                <div><br></br>
                    <p className="text-justify">Nullam vehicula placerat dui id scelerisque. Aenean sed fermentum sem. Curabitur risus lorem, vestibulum vitae enim ut, varius vehicula tellus. Morbi lobortis scelerisque arcu ultricies tincidunt. Nullam auctor velit lacus, vel pretium felis lobortis in. Nam fringilla dolor ligula, convallis venenatis quam molestie iaculis. Aliquam tincidunt sapien et tortor viverra facilisis vel a purus. Sed nunc odio, porttitor in velit nec, auctor pharetra risus. Nunc sollicitudin non sem tempus efficitur. Mauris urna odio, bibendum eu bibendum vel, pellentesque a nibh. Sed a lacus quam. Phasellus venenatis, mauris eu elementum vestibulum, dui elit cursus quam, sit amet consectetur ligula nunc nec lectus. Proin sed sagittis mauris. Suspendisse hendrerit justo ac arcu tempus, sed ornare ligula venenatis. Pellentesque nec sem et dui vehicula ultricies. Integer porttitor viverra metus, a volutpat nunc vulputate ac.
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Until today</h2>
                    <p className="text-justify">
                        Phasellus pretium diam lectus, non lacinia dui fermentum id. Mauris et sem ante. Suspendisse non auctor velit. Aenean pellentesque aliquet dolor, tincidunt suscipit lacus sodales ac. Vestibulum eros arcu, auctor id lobortis quis, tincidunt quis ipsum. Vivamus aliquet pellentesque felis non vestibulum. Ut malesuada a purus a tempus. Vestibulum pellentesque lectus sit amet malesuada fermentum. Donec tempus tristique nunc, sed volutpat orci aliquam sit amet. Vestibulum sit amet urna ante. Nunc libero felis, fermentum in nibh laoreet, semper ultrices enim. Curabitur vitae neque ut purus luctus mattis. Praesent ac lectus nisi.
                        Mauris et scelerisque diam, ut feugiat justo. Vivamus volutpat scelerisque lacus eleifend semper. Duis eget mi non erat pharetra condimentum. Sed fringilla rutrum tortor, vel ultrices massa congue in. Cras tincidunt rhoncus augue, sed blandit augue luctus at. Duis metus sapien, tempus convallis quam facilisis, tincidunt sodales orci. Phasellus rutrum vitae sapien et interdum. Pellentesque semper dapibus nisl ac consectetur. Pellentesque a turpis cursus, cursus lectus a, egestas massa. Mauris porttitor urna quis dictum sollicitudin. Aenean malesuada tortor vulputate risus porta, in porttitor urna mollis. Nam leo libero, elementum ut leo at, molestie elementum sapien. Cras luctus sagittis augue a venenatis. Nulla iaculis turpis ac egestas tincidunt.
                    </p>
                </div>
            </div>
            <div className="bg-black rounded my-5" >.</div>
            <div className="mb-0 text-center">
                <p>
                1112 N Washington St<br></br>
                City/Town	Forrest City<br></br>
                State/Province/Region	Arizona<br></br>
                Zip/Postal Code	72335
                </p>
            </div>
        </div>
    )
}