import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import ph0 from "../../assets/65899.png";
import ph1 from "../../assets/5659.png";
import ph2 from "../../assets/56563.png";
import ph3 from "../../assets/69956.png";
import ph4 from "../../assets/56566.png";
import ph5 from "../../assets/456.png";
import ph6 from "../../assets/Margarita Pizza (Plain).png";
import ph7 from "../../assets/565.png";
// import qr from "../../assets/download.png";
import logo from "../../assets/restaurant-logo-png_seeklogo-298675.png";
import ma from "../../assets/2.png";
import ma1 from "../../assets/3.png";
// import ma2 from '../../assets/6.png';
import ma3 from "../../assets/7.png";
import ma4 from "../../assets/8.png";
import ma5 from "../../assets/9.png";
import ma6 from "../../assets/10.png";
import ma7 from "../../assets/11.png";
import ma8 from "../../assets/12.png";
import ma9 from "../../assets/13.png";
import ma10 from "../../assets/14.png";
import ma11 from "../../assets/15.png";
import ma12 from "../../assets/5555.png";
// import background from "../../assets/photo_5900054900627328616_y.jpg";
import "./Home.css";
import QRCode from "react-qr-code";

const Home = () => {
  const sclices = [
    {
      id: 1,
      scr: ph0,
      // name: "Pizza Margirita1",
      // description: "lorem",
      top: "50%",
      left: 0,
    },
    {
      id: 2,
      scr: ph1,
      name: "Pizza Chesee",
      description: "Pizza Chesee lorem",
      next: 45,
      prev: -45,
      top: 225,
      left: 50,
      price: 70,
    },
    {
      id: 3,
      scr: ph2,
      name: "Pizza Vegetables",
      description: "Pizza Vegetables lorem",
      next: 53,
      prev: -45,
      top: 225,
      price: 80,
    },
    {
      id: 4,
      scr: ph3,
      name: "Pizza Onion",
      description: "Pizza Onion lorem",
      next: 55,
      prev: -53,
      top: 225,
      price: 110,
    },
    {
      id: 5,
      scr: ph4,
      name: "Pizza Fruits",
      description: "Pizza Fruits lorem",
      next: 65,
      prev: -55,
      top: 225,
      price: 120,
    },
    {
      id: 6,
      scr: ph5,
      name: "Pizza Margirita",
      description: "Pizza Margirita lorem",
      next: 49,
      prev: -65,
      top: 225,
      price: 180,
    },
    {
      id: 7,
      scr: ph6,
      name: "Pizza Tomatoo",
      description: "Pizza Tomatoo lorem",
      next: 47,
      prev: -49,
      top: 225,
      price: 90,
    },
    {
      id: 8,
      scr: ph7,
      name: "Pizza Chicken",
      description: "Pizza Chicken lorem",
      next: 45,
      prev: -45,
      top: 225,
      price: 170,
    },
  ];

  const matrials = [
    { img1: ma9, img2: ma10, img3: ma7 },
    { img1: ma7, img2: ma11, img3: ma12 },
    { img1: ma4, img2: ma5, img3: ma3 },
    { img1: ma, img2: ma8, img3: ma1 },
    { img1: ma12, img2: ma9, img3: ma4 },
    { img1: ma6, img2: ma3, img3: ma10 },
    { img1: ma12, img2: ma11, img3: ma10 },
  ];
  const [rotation, setRotation] = useState(15);
  const [currentIndex, setCurrentIndex] = useState(1); 
  const [currentIndexM, setCurrentIndexM] = useState(0); 

  const handleNext = () => {
    const nextDeg = sclices[currentIndex].next || 0;
    setRotation((prev) => prev + nextDeg);

    setCurrentIndex((prev) => (prev + 1 >= sclices.length ? 1 : prev + 1));
    setCurrentIndexM((prev) => (prev + 1 >= matrials.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    const prevDeg = sclices[currentIndex].prev || 0;
    setRotation((prev) => prev + prevDeg);

    setCurrentIndex((prev) => (prev <= 1 ? sclices.length - 1 : prev - 1));
    setCurrentIndexM((prev) => (prev <= 0 ? matrials.length - 1 : prev - 1));
  };

  const handelr = useSwipeable({
    onSwipedRight: handlePrev,
    onSwipedLeft: handleNext,
    preventScrollOnSwipe: false,
  });

  // const handleNext = () => {
  //   const nextDeg = sclices[currentIndex].next || 0;
  //   setRotation((prev) => prev + nextDeg);
  //   setCurrentIndex((prev) => (prev + 1) % sclices.length); // يرجع لأول واحد
  // };

  // const handlePrev = () => {
  //   const prevDeg = sclices[currentIndex].prev || 0;
  //   setRotation((prev) => prev + prevDeg);
  //   setCurrentIndex((prev) => (prev === 0 ? sclices.length - 1 : prev - 1)); // يلف من الأول للآخر
  // };

  return (
    <div
      {...handelr}
      className="main"
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: `radial-gradient(circle,green,white); `,
      }}
    >
      {matrials.map((item,i)=>(
        <div key={i} style={{position:"fixed",height:'100vh',right:'40%',top:'40%',zIndex:1}}>
          <img src={item.img1} height={160} style={{ display:"flex",position:"fixed",zIndex:1,top:currentIndexM==i? '5%':'30%',right:currentIndexM==i? '5%':'40%',transition:'.75s' }} />
          <img src={item.img2} height={160} style={{ display:"flex",position:"fixed",zIndex:1,top:currentIndexM==i? '60%':'30%',right:currentIndexM==i? '10%':'40%' ,transition:'.75s'}} />
          <img src={item.img3} height={160} style={{ display:"flex",position:"fixed",zIndex:1,top:currentIndexM==i? '40%':'30%',right:currentIndexM==i? '75%':'40%' ,transition:'.75s'}} />
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div style={{ marginTop: 20, zIndex: 1 }}>
          <button onClick={handlePrev} style={{ border: "1px solid " }}>
            {"<"}
          </button>
        </div>
        <div
          style={{
            position: "fixed",
            right: "10%",
            zIndex: 0,
            rotate: "-2deg",
            fontSize: 120,
            fontWeight: 800,
            display: "flex",
            flexFlow: "column",
          }}
        >
          <div style={{ color: "#C56D00ff", bottom: "50%",width:'55%' }}>
  
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            <p style={{ margin: -75, padding: 0 }}>Pizza</p>
            
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: 400,
            height: 400,
            // border: "2px blue solid",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          {sclices.map((sclice, index) => (
            <div
              style={{
                position: "absolute",
                width: 300,
                height: 300,
                top: index === currentIndex ? sclice.top : "50%",
                left: "50%",
                // border: "2px red solid",
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                justifyContent: "center",
                alignItems: "center",
                transition: "all .5s ease",
              }}
            >
              <img
                src={sclice.scr}
                alt={sclice.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>

        <div style={{ zIndex: 1 }}>
          <button
            onClick={handleNext}
            style={{ marginLeft: 10, border: "1px solid " }}
          >
            {">"}
          </button>
        </div>
      </div>

      <div style={{ zIndex: 1, height: "100px" }}>
        {sclices.map((sclice, index) => (
          <div
            key={index}
            style={{
              zIndex: 1,
              opacity: index === currentIndex ? "1" : ".5",
              height: index === currentIndex ? "150px" : "0px",
              transition: "all .75s ease",
              overflow: "hidden",
              position: "relative",
              right: 0,
              top: -60,
              width:'100%'
            }}
          >
            <div
              style={{
                height: index === currentIndex ? "150px" : "0px",
                // bottom: index === currentIndex ? "110px" : "0px",
                top: -20,
                position: "relative",
              }}
            >
              <h2 style={{ color: "#D2A27Bff",fontSize:30 }}>{sclice.name}</h2>
              <p style={{marginTop:-10}}>{sclice.description}</p>
              <p style={{margin:-0}}>{sclice.price}$</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        width:100,
        height:100,
        position:"fixed",
        bottom:0,
        left:0,
        marginLeft:10,
        marginBottom:20
      }}>
        {/* <img src={qr} alt="" style={{width:'100%',height:'100%'}} /> */}
        <QRCode value=""style={{width:'100%',height:'100%'}} bgColor="white"
        fgColor="#C56D00ff"/>
      </div>
      <div style={{
        width:100,
        height:100,
        position:"fixed",
        top:0,
        left:0,
        marginLeft:40
      }}>
        <img src={logo} alt="" style={{width:'100%',height:'100%'}} />
      </div>
      <div style={{
        width:100,
        height:100,
        position:"fixed",
        top:0,
        right:0,
        marginLeft:40,
        color:"white",
        zIndex:1,
        fontSize:20,
        margin:'20px'
      }}>
<FaFacebook style={{}} />
<AiFillTwitterCircle style={{margint:5}}/>
<FaSquareInstagram />



      </div>
    </div>
  );
};

export default Home;
