// import React, { useState } from "react";
// import ph0 from "../../assets/65899.png";
// import ph1 from "../../assets/5659.png";
// import ph2 from "../../assets/56563.png";
// import ph3 from "../../assets/69956.png";
// import ph4 from "../../assets/56566.png";
// import ph5 from "../../assets/456.png";
// import ph6 from "../../assets/Margarita Pizza (Plain).png";
// import ph7 from "../../assets/565.png";
// import background from "../../assets/photo_5900054900627328616_y.jpg";
// // import "./Home.css";

// export const Agein = () => {
//       const sclices = [
//         {
//           id:1,
//           scr: ph0,
//           // name: "Pizza Margirita1",
//           // description: "lorem",
//           top: "50%",
//           left: 0,
//         },
//         {
//           id:2,
//           scr: ph1,
//           name: "Pizza Margirita2",
//           description: "lorem",
//           next: 45,
//           prev: -45,
//           top: 225,
//           left: 50,
//         },
//         {
//           id:3,
//           scr: ph2,
//           name: "Pizza Margirita3",
//           description: "lorem",
//           next: 53,
//           prev: -53,
//           top: 225,
//         },
//         {
//           id:4,
//           scr: ph3,
//           name: "Pizza Margirita4",
//           description: "lorem",
//           next: 55,
//           prev: -55,
//           top: 225,
//         },
//         {
//           id:5,
//           scr: ph4,
//           name: "Pizza Margirita5",
//           description: "lorem",
//           next: 65,
//           prev: -65,
//           top: 225,
//         },
//         {
//           id:6,
//           scr: ph5,
//           name: "Pizza Margirita6",
//           description: "lorem",
//           next: 50,
//           prev: -50,
//           top: 225,
//         },
//         {
//           id:7,
//           scr: ph6,
//           name: "Pizza Margirita7",
//           description: "lorem",
//           next: 47,
//           prev: -47,
//           top: 225,
//         },
//         {
//           id:8,
//           scr: ph7,
//           name: "Pizza Margirita8",
//           description: "lorem",
//           next: 45,
//           prev: -45,
//           top: 225,
//         },
//       ];

//       const [currentRotation,setRotation]=useState(15);
//       const [currentIndex,setCurrentIndex]=useState(0);

//       // const handelnext=()=>{
//       //   setCurrentIndex((prev)=>( 
           

//       //       console.log(prev);
//       //   ))
//       //   // const pre

//       // }
//       // console.log(handelnext())

//   return (

//     <div style={{
//         display:"flex",
//         flexFlow:"column",
//         height:'80vh',
//         justifyContent:"center",
//         alignItems:"center",
//         border:'3px yellow solid',
//         overflow:"hidden"
        
//     }}>
//         <div style={{
//             position:"relative",
//             display:"flex",
//             justifyContent:"space-between",
//             alignItems:"center",
//             border:'1px red solid',
//             width:'100%',
//             height:400,
//             // top:'50%',


            
//         }}>
//             <button>{'>'}</button>
//             {sclices.map((sclice,index)=>(
//                 <div 
//                 key={index}
//                 // key={sclice.id}
//             // {...console.log(index)}
//                 style={{
//                     position:"absolute",
//                     display:"flex",
//                     width:300,
//                     height:300,
//                     left:'25%',
//                     justifyContent:"center",
//                     alignItems:"center",
//                     border:'1px blue solid'



//                 }}>
//                     <img src={sclice.scr} alt={sclice.name} style={{
//                         width:'100%',
//                         height:'100%'
//                     }} />
//                 </div>
//             ))}
//             <button>{'>'}</button>

//         </div>
        
//     </div>

//   )
// }
 {/* الباكجراوند */}
      {/* <div
        style={{
          height: "50%",
          width: "120%",
          position: "fixed",
          bottom: "-10%",
          left:'50%',
          transform: "translateX(-50%) rotate(-10deg)",
          zIndex: 0,
        }}
      >
        <img
          src={background}
          alt=""
          style={{
            height: "200%",
            width: "100%",
            objectFit:"cover"
          }}
        />
      </div>
       */}
