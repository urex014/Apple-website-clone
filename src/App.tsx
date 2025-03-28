import { Button } from "@chakra-ui/react";
import {useGSAP} from "@gsap/react"

const GSAPto = ()=>{
  useGSAP(()=>{
    gsap.to('#blue-box', {
      x:250,
      repeat:-1,
      yoyo:true,
      duration:'2s',
      ease:'bounce.out',
  })
  })
}
export default function app(){
  return(
    <main>
      <p>this is the blue box</p>
      <div className="blue-box" style={{width:"50px", height:"50px", backgroundColor:"#131317"}}></div>
    </main>
  )
}


