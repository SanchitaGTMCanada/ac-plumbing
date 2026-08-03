"use client";

import Link from "next/link";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";


export default function Footer() {

  return (
    <footer className="bg-[#081F38] text-white" style={{marginTop:"50px"}}  >

      {/* Main */}
  <div className="relative z-20 flex justify-center " style={{padding:"20px"}}>    
     <div
        className="
          mx-auto
          max-w-[1280px]
          px-5
          py-16
          lg:px-8
          lg:py-20
        "

       
      >

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]
          "

           style={{padding:"20px"}}
        >


          {/* Brand */}

          <div>

            <h2
              className="
                text-3xl
                font-black
                tracking-tight
              "

              style={{color:"#C89B3C"}}
            >
              AC Plumbing
            </h2>


            <div
              className="
                mt-4
                h-[3px]
                w-14
                bg-[#C89B3C]
              "
            />


            <p
              className="
                mt-6
                max-w-sm
                leading-8
                text-white/60
              "
            >
              Professional plumbing and heating services
              delivering reliable solutions with quality
              workmanship and trusted support.
            </p>


            <Link
              href="#contact"
              className="
                mt-8
                inline-flex
                rounded-full
                bg-[#C89B3C]
                px-7
                py-3.5
                font-semibold
                transition
                hover:bg-white
                hover:text-[#123B67]
              "
              style={{padding:"5px",marginTop:"10px"}}
            >
              Request Service
            </Link>


          </div>




          {/* Navigation */}

          <div>

            <h3
              className="
                text-lg
                font-bold
              "

              style={{color:"#C89B3C"}}
            >
              Navigation
            </h3>


            <ul
              className="
                mt-6
                space-y-4
              "
            >

              {
                [
                  "Home",
                  "About Us",
                  "Services",
                  "Projects",
                  "Contact",
                ].map(item=>(

                  <li key={item}>

                    <Link
                      href="#"
                      className="
                        text-white/60
                        transition
                        hover:text-[#C89B3C]
                      "
                    >
                      {item}
                    </Link>

                  </li>

                ))
              }

            </ul>


          </div>




          {/* Services */}

          <div>

            <h3
              className="
                text-lg
                font-bold
              "
              style={{color:"#C89B3C"}}
            >
              Services
            </h3>


            <ul
              className="
                mt-6
                space-y-4
              "
            >

              {
                [
                  "Plumbing Repair",
                  "Heating Services",
                  "Drain Cleaning",
                  "Emergency Plumbing",
                  "Installation",
                ].map(item=>(

                  <li key={item}>

                    <Link
                      href="#"
                      className="
                        text-white/60
                        transition
                        hover:text-[#C89B3C]
                      "
                    >
                      {item}
                    </Link>

                  </li>

                ))
              }

            </ul>


          </div>





          {/* Contact */}

          <div>

            <div
              className="
                rounded-[28px]
                bg-white/10
                p-7
                backdrop-blur-sm
              "
              style={{padding:"20px"}}
            >

              <span
                className="
                  text-xl
                  font-bold
                "

                style={{color:"#C89B3C"}}
              >
                Contact Us
              </span>


              <div
                className="
                  mt-6
                  space-y-5
                "
              >


                <div className="flex gap-4">

                  <HiOutlinePhone
                    size={24}
                    className="text-[#C89B3C]"
                  />

                  <div>

                    <span
                      className="
                        block
                        text-xs
                        uppercase
                        tracking-wider
                        text-white/40
                      "
                    >
                      Call Us
                    </span>


                    <p className="mt-1 text-white/80">
                      +1 234 567 890
                    </p>

                  </div>

                </div>




                <div className="flex gap-4">

                  <HiOutlineEnvelope
                    size={24}
                    className="text-[#C89B3C]"
                  />

                  <div>

                    <span
                      className="
                        block
                        text-xs
                        uppercase
                        tracking-wider
                        text-white/40
                      "
                    >
                      Email
                    </span>


                    <p className="mt-1 text-white/80">
                      info@example.com
                    </p>

                  </div>

                </div>




                <div className="flex gap-4">

                  <HiOutlineMapPin
                    size={24}
                    className="text-[#C89B3C]"
                  />

                  <div>

                    <span
                      className="
                        block
                        text-xs
                        uppercase
                        tracking-wider
                        text-white/40
                      "
                    >
                      Location
                    </span>


                    <p className="mt-1 text-white/80">
                      Canada
                    </p>

                  </div>

                </div>


              </div>


            </div>

          </div>


        </div>


     



      {/* Bottom */}

      <div
        className="
          border-t
          border-white/10
        "

         style={{padding:"20px"}}
      >

        <div
          className="
            mx-auto
            max-w-[1280px]
            px-5
            py-6
            text-sm
            text-white/50
            lg:px-8
          "
        >

          © {new Date().getFullYear()} AC Plumbing. All rights reserved.

        </div>

      </div>
      </div>

  </div>
    
          
   


    </footer>
  );
}