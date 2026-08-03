"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiShieldCheck,
  HiOutlineClock,
  HiCheckBadge,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";


const features = [
  {
    icon: HiShieldCheck,
    title: "Licensed Experts",
    description:
      "Certified professionals delivering safe and reliable plumbing solutions.",
  },
  {
    icon: HiOutlineClock,
    title: "Quick Response",
    description:
      "Fast service response to handle your plumbing emergencies.",
  },
  {
    icon: HiCheckBadge,
    title: "Quality Work",
    description:
      "Premium workmanship with long-lasting solutions.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "24/7 Support",
    description:
      "Dedicated support whenever you need assistance.",
  },
];


export default function WhyChoose() {

  return (

    <section className="relative overflow-hidden py-24 lg:py-32"     style={{marginTop:"20px"}}>

      {/* Background Shape */}

      <div
        className="
          absolute
          -left-40
          top-20f
          h-96
          w-96
          rounded-full
          bg-[#123B67]/5
        "

         
      />

<div className="relative z-20 flex justify-center ">    <div
        className="
          mx-auto
          grid
          max-w-[1280px]
          items-center
          gap-16
          px-5
          lg:grid-cols-2
          lg:px-8
        "
        style={{marginTop:"50px"}}
      >


        {/* LEFT IMAGE */}

        <motion.div
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="
            relative
            h-[450px]
            lg:h-[600px]
          "
        >

          <div
            className="
              absolute
              inset-0
              translate-x-5
              translate-y-5
              rounded-[40px]
              bg-[#C89B3C]/20
            "
          />


          <div
            className="
              relative
              h-full
              overflow-hidden
              rounded-[40px]
            "
          >

            <Image
              src="/assets/whyChoose/whychoose.jpg"
              alt="Professional plumbing service"
              fill
              className="
                object-cover
              "
            />


            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#123B67]/70
                via-transparent
                to-transparent
              "
            />


            {/* Experience Box */}

 <motion.div
  initial={{
    opacity: 0,
    y: 50,
    scale: 0.9,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.5,
  }}
  transition={{
    duration: 0.7,
    delay: 0.3,
    ease: "easeOut",
  }}
  className="
    absolute
    bottom-8
    left-8
    rounded-[28px]
    bg-white/95
    px-8
    py-7
    shadow-[0_20px_60px_rgba(0,0,0,.15)]
    backdrop-blur-sm
    lg:bottom-10
    lg:left-10
  "
>

  <div className="flex items-center gap-5" style={{padding:"10px"}}>

    {/* Number */}

    <motion.h3
      initial={{
        opacity:0,
        y:15,
      }}
      whileInView={{
        opacity:1,
        y:0,
      }}
      viewport={{
        once:true,
      }}
      transition={{
        duration:.5,
        delay:.6,
      }}
      className="
        text-5xl
        font-black
        leading-none
        tracking-tight
        text-[#123B67]
        lg:text-6xl
      "
    >
      15+
    </motion.h3>


    {/* Divider */}

    <div
      className="
        h-12
        w-[1px]
        bg-[#C89B3C]/40
      "
    />


    {/* Text */}

    <div>

      <p
        className="
          max-w-[100px]
          text-sm
          font-semibold
          leading-5
          text-[#667085]
        "
      >
        Years Of
        <br />
        Experience
      </p>

    </div>


  </div>


</motion.div>


          </div>

        </motion.div>




        {/* RIGHT CONTENT */}


        <motion.div
          initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
        >


          <span
            className="
              flex
              items-center
              gap-3
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#C89B3C]
            "
          >

            <span className="
              h-[2px]
              w-10
              bg-[#C89B3C]
            "/>

            Why Choose Us

          </span>



          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-[1.15]
              text-[#123B67]
              lg:text-5xl
            "
          >
            Trusted Plumbing Solutions Built Around Your Comfort
          </h2>



          <p
            className="
              mt-6
              max-w-xl
              leading-8
              text-[#667085]
            "
          >
            From emergency repairs to complete heating installations,
            our experienced team delivers dependable service with
            transparent pricing and guaranteed quality.
          </p>



          {/* Feature Grid */}


          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
            "
          >

            {features.map((item,index)=>{

              const Icon=item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{
                    y:-8
                  }}
                  className="
                    group
                    rounded-[24px]
                    border
                    border-slate-100
                    bg-white
                    p-6
                    shadow-[0_15px_40px_rgba(0,0,0,.05)]
                    transition
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#123B67]
                      text-white
                      transition
                      duration-300
                      group-hover:bg-[#C89B3C]
                    "
                  >

                    <Icon size={28}/>

                  </div>


                  <h4
                    className="
                      mt-5
                      text-lg
                      font-bold
                      text-[#123B67]
                    "
                  >
                    {item.title}
                  </h4>


                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#667085]
                    "
                  >
                    {item.description}
                  </p>


                </motion.div>

              );

            })}

          </div>


        </motion.div>


      </div></div>
  

    </section>

  );
}