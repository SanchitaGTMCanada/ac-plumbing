"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container/Container";

import Left from "./Left";
import Form from "./Form";

export default function Booking() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden"
      style={{
        background: "#F7F8FC",
        paddingTop: "20px",
        paddingBottom: "120px",
      }}
    >
      {/* Decorative Background */}

      <div
        style={{
          position: "absolute",
          width: "550px",
          height: "550px",
          left: "-260px",
          top: "-180px",
          borderRadius: "50%",
          border: "2px solid rgba(200,155,60,.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "430px",
          height: "430px",
          right: "-180px",
          bottom: "-180px",
          borderRadius: "50%",
          border: "2px solid rgba(18,59,103,.06)",
        }}
      />

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        style={{
          position: "absolute",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "#F4C46A",
          right: "15%",
          top: "18%",
        }}
      />

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        style={{
          position: "absolute",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#123B67",
          opacity: ".25",
          left: "12%",
          bottom: "16%",
        }}
      />

      <div className="relative z-20 flex justify-center " >
         <Container>

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          style={{
            textAlign: "center",
            // maxWidth: "900px",
            margin: "0 auto 70px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "999px",
              background: "#FFF4D8",
              color: "#C89B3C",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Free Estimate
          </span>

          <h2
            style={{
              marginTop: "22px",
              fontSize: "56px",
              fontWeight: 500,
              lineHeight: "1.1",
              color: "#123B67",
            }}
          >
            Let's Schedule
            {/* <br /> */}
            Your Service
          </h2>

          <p
            style={{
              marginTop: "20px",
              fontSize: "18px",
              lineHeight: "34px",
              color: "#667085",
            }}
          >
            Book your plumbing, heating or HVAC service today.
            Our team will contact you shortly to confirm your appointment.
          </p>
        </motion.div>

        {/* Main Card */}

        <div
          className="grid lg:grid-cols-[380px_1fr]"
          style={{
            gap: "0px",
            maxWidth: "1180px",
            margin: "0 auto",
            alignItems: "stretch",
            borderRadius: "34px",
            overflow: "hidden",
            background: "#FFFFFF",
            boxShadow: "0 30px 70px rgba(18,59,103,.08)",
            border: "1px solid rgba(18,59,103,.08)",
          }}
        >
                      {/* Left Side */}

          <Left />

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            style={{
              position: "relative",
              background: "#FFFFFF",
              padding: "55px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "100%",
            }}
          >
            {/* Gold Top Line */}

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "5px",
                background:
                  "linear-gradient(90deg,#F4C46A,#C89B3C,#F4C46A)",
              }}
            />

            {/* Decorative Ring */}

            <div
              style={{
                position: "absolute",
                right: "-80px",
                top: "-80px",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                border: "1px solid rgba(200,155,60,.12)",
              }}
            />

            {/* Decorative Circle */}

            <div
              style={{
                position: "absolute",
                left: "-50px",
                bottom: "-50px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "1px solid rgba(18,59,103,.08)",
              }}
            />

            {/* Small Badge */}

            {/* <span
              style={{
                display: "inline-block",
                marginBottom: "10px",
                color: "#C89B3C",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Book Your Service
            </span> */}

            <h3
              style={{
                fontSize: "38px",
                fontWeight: "900",
                color: "#123B67",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              Request a Free Estimate
            </h3>

            <p
              style={{
                color: "#667085",
                lineHeight: "30px",
                marginBottom: "35px",
                maxWidth: "620px",
              }}
            >
              Complete the form below and our team will contact you shortly
              to confirm your appointment and discuss your service needs.
            </p>

            {/* Form */}

            <div
              style={{
                position: "relative",
                zIndex: 10,
              }}
            >
              <Form />
            </div>
          </motion.div>
        </div>
      </Container>
      </div>

     
    </section>
  );
}