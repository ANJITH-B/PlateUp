"use client";
import React, {useState} from "react";
import  '../fonts.css';
import {AuroraBackground} from '@/components/ui/aurora-background';
export default function Services() {
  const [current,setcurrent] = useState(0);
  return (<>
  <AuroraBackground>
    <div className="relative flex flex-row flex-wrap min-h-screen w-screen justify-around items-center pt-[10vh]">
      <div className={`${(current == 1) ? "lg:w-[35vw] lg:h-[80vh] h-[35vh] w-[90vw]":`${(current == 0) ? "lg:w-[20vw] lg:h-[80vh] h-[20vh] w-[90vw]":"w-[90vw] lg:w-[20vw] h-[15vh] lg:h-[80vh] "}`} z-[1] transition-all max-h-[700px] border border-white rounded-3xl overflow-hidden
      `}
      onMouseEnter={()=>setcurrent(1)}
      onMouseLeave={()=>setcurrent(0)}
style={{background:`url("https://www.fusion6.com.au/wp-content/uploads/2022/09/popular-indian-dishes-cuisine.jpg")`,backgroundPosition:"center",backgroundSize:"cover"}}>
        <div className="h-full w-full bg-black bg-opacity-50 flex justify-around items-end">
        <div className="flex flex-col justify-around items-center">
        <h1 className="text-center font-black text-3xl lg-text-5xl py-10 font-tertiary bg-clip-text text-transparent bg-white h-full uppercase">
          Quick Meals
        </h1>
        {(current==1) && <a href="/food"><div className="text-center font-semibold transition-all text-xl lg-text-3xl py-10 font-primary bg-clip-text text-transparent bg-white h-full">Know more about Quick Meals &#8594;</div>
        </a>
        }
        </div>
        </div>
      </div>
      <div className={`${(current == 2) ? "lg:w-[35vw] lg:h-[80vh] h-[35vh] w-[90vw]":`${(current == 0) ? "lg:w-[20vw] lg:h-[80vh] h-[20vh] w-[90vw]":"w-[90vw] lg:w-[20vw] h-[15vh] lg:h-[80vh] "}`} z-[1] transition-all max-h-[700px] border border-white rounded-3xl overflow-hidden
      `}
      onMouseEnter={()=>setcurrent(2)}
      onMouseLeave={()=>setcurrent(0)}  
      style={{background:`url("https://c8.alamy.com/comp/W25FM5/asian-supermarket-go-asia-supermarket-shelves-fruit-drink-cans-dresden-germany-W25FM5.jpg")`,backgroundPosition:"center",backgroundSize:"cover"}}>
        <div className="h-full w-full bg-black bg-opacity-50 flex justify-around items-end">
        <div className="flex flex-col justify-around items-center">
        <h1 className="text-center font-black text-3xl lg-text-5xl py-10 font-tertiary bg-clip-text text-transparent bg-white h-full uppercase">
            Pantry Plus
        </h1>
        {(current==2) && <a href="/grocery"><div className="text-center font-semibold transition-all text-xl lg-text-3xl py-10 font-primary bg-clip-text text-transparent bg-white h-full">Know more about Pantry Plus &#8594;</div>
        </a>
        }
        </div>
        </div>
      </div>
      <div className={`${(current == 3) ? "lg:w-[35vw] lg:h-[80vh] h-[35vh] w-[90vw]":`${(current == 0) ? "lg:w-[20vw] lg:h-[80vh] h-[20vh] w-[90vw]":"w-[90vw] lg:w-[20vw] h-[15vh] lg:h-[80vh] "}`} z-[1] transition-all max-h-[700px] border border-white rounded-3xl overflow-hidden
      `}
      onMouseEnter={()=>setcurrent(3)}
      onMouseLeave={()=>setcurrent(0)}
      style={{background:`url("https://www.hotelierindia.com/public/styles/full_img_sml/public/images/2020/02/11/The-Bombay-Canteen.jpg?itok=GTWwmhrt")`,backgroundPosition:"bottom",backgroundSize:"cover"}}>
        <div className="h-full w-full bg-black bg-opacity-50 flex justify-around items-end">
        <div className="flex flex-col justify-around items-center">
        <h1 className="text-center font-black text-3xl lg-text-5xl py-10 font-tertiary bg-clip-text text-transparent bg-white h-full uppercase">
            Dine Vista 
        </h1>
        {(current==3) && <a href="/dinein"><div className="text-center font-semibold transition-all text-xl lg-text-3xl py-10 font-primary bg-clip-text text-transparent bg-white h-full">Know more about Dine Vista &#8594;</div>
        </a>}
        </div>
        </div>
      </div>
      <div className={`${(current == 4) ? "lg:w-[35vw] lg:h-[80vh] h-[35vh] w-[90vw]":`${(current == 0) ? "lg:w-[20vw] lg:h-[80vh] h-[20vh] w-[90vw]":"w-[90vw] lg:w-[20vw] h-[15vh] lg:h-[80vh] "}`} z-[1] transition-all max-h-[700px] border border-white rounded-3xl overflow-hidden
      `}
      onMouseEnter={()=>setcurrent(4)}
      onMouseLeave={()=>setcurrent(0)}
       style={{background:`url("https://th.bing.com/th/id/R.874c5a4c2d253f7f5dd46fbfb61a1c65?rik=EG3RSqUAn%2bFG%2bA&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f2560x1600%2f2012%2fWorld_Travel___Tourism_Traveling_around_the_World_034435_.jpg&ehk=CunZe4z7lv3ti4MbFFofhEyPfCvgZhhxVoC%2fpJeEBvA%3d&risl=&pid=ImgRaw&r=0")`,backgroundPosition:"center",backgroundSize:"cover"}}>
        <div className="h-full w-full bg-black bg-opacity-50 flex justify-around items-end">
        <div className="flex flex-col justify-around items-center">
        <h1 className="text-center font-black text-3xl lg-text-5xl py-10 font-tertiary bg-clip-text text-transparent bg-white h-full uppercase">
          Work Ride
        </h1>
        {(current==4) && <a href="/travel"><div className="text-center font-semibold transition-all text-xl lg-text-3xl py-10 font-primary bg-clip-text text-transparent bg-white h-full">Know more about Work Ride &#8594;</div>
        </a>
        }
        </div>
        </div>
      </div>
    </div>
    <div className="h-screen w-screen overflow-hidden fixed top-0" style={{background:"linear-gradient(73.32deg, rgba(255, 199, 0, 0.08) 2.81%, rgba(252, 252, 253, 0.0632) 93.81%)",backgroundPosition:"center",backgroundSize:"cover"}}>
    </div>
    </AuroraBackground>
  </>
  );
}