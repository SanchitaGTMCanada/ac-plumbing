"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiCheckCircle, HiPhone } from "react-icons/hi2";

const features = [
  "Licensed Experts",
  "Same-Day Service",
  "24/7 Emergency",
];

export default function Left() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col justify-between overflow-hidden bg-[#123B67] text-white"
      style={{
        padding: "50px 40px",
      }}
    >
      {/* Decorative Circle */}

      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          right: "-100px",
          top: "-100px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,.08)",
        }}
      />

      <div
        className="relative z-10"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Badge */}

        <span
          className="inline-flex w-fit rounded-full bg-white/10 text-[#F4C46A]"
          style={{
            padding: "8px 18px",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Why Choose Us
        </span>

        {/* Heading */}
<h2
  className="text-[34px] lg:text-[42px] font-bold leading-tight"
  style={{
    marginTop: "22px",
    background:
      "linear-gradient(90deg, #FDF3C7 0%, #E7D07A 20%, #C89B3C 50%, #B68923 75%, #F7E6A4 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  }}
>
  Book Your
  <br />
  Service Today
</h2>
      

        {/* Description */}

        <p
          className="text-white/70"
          style={{
            marginTop: "18px",
            fontSize: "15px",
            lineHeight: "28px",
            maxWidth: "290px",
          }}
        >
          Fast, reliable plumbing and heating services from certified
          professionals.
        </p>

        {/* Features */}

        <div
          style={{
            marginTop: "35px",
          }}
        >
          {features.map((item) => (
            <div
              key={item}
              className="flex items-center transition-all duration-300 hover:bg-white/5 rounded-xl"
              style={{
                padding: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full bg-white/10 shrink-0"
                style={{
                  width: "38px",
                  height: "38px",
                }}
              >
                <HiCheckCircle
                  size={18}
                  className="text-[#F4C46A]"
                />
              </div>

              <span
                style={{
                  marginLeft: "14px",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
                {/* Call Card */}

        <div
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          style={{
            marginTop: "30px",
            padding: "22px",
          }}
        >
          <div
            className="flex items-center"
            style={{
              gap: "14px",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full bg-[#F4C46A]"
              style={{
                width: "50px",
                height: "50px",
              }}
            >
              <HiPhone
                size={22}
                className="text-[#123B67]"
              />
            </div>

            <div>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,.65)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Need Help?
              </p>

              <a
                href="tel:+18674471500"
                className="transition-colors duration-300 hover:text-[#F4C46A]"
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                867-447-1500
              </a>
            </div>
          </div>

          <Link
            href="tel:+18674471500"
            className="group flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFE9A8] via-[#F4C46A] to-[#C89B3C] font-semibold text-[#123B67] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(244,196,106,.35)]"
            style={{
              marginTop: "22px",
              height: "50px",
            }}
          >
            Call Now

            <span
              style={{
                marginLeft: "8px",
              }}
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Bottom Note */}

        <div
          className="border-t border-white/10"
          style={{
            marginTop: "28px",
            paddingTop: "22px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              color: "rgba(255,255,255,.65)",
            }}
          >
            We'll contact you shortly to confirm your appointment and answer
            any questions you may have.
          </p>
        </div>
      </div>
    </motion.div>
  );
}