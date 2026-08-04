"use client";

import Link from "next/link";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const footerNavigation = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About Us",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },

  // {
  //   title: "Contact",
  //   href: "#contact",
  // },
];

const services = [
  {
    title: "Plumbing Repair",
    href: "#services",
  },
  {
    title: "Heating Services",
    href: "#services",
  },
  {
    title: "Drain Cleaning",
    href: "#services",
  },
  {
    title: "Emergency Plumbing",
    href: "#services",
  },
  {
    title: "Installation",
    href: "#services",
  },
];



export default function Footer() {

const handleNavigation = (e, href) => {
  e.preventDefault();

  const section = document.querySelector(href);

  if (!section) return;

  const headerHeight = 120; // your fixed header height

  const top =
    section.getBoundingClientRect().top +
    window.pageYOffset -
    headerHeight;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

  return (
    <footer
      className="bg-[#081F38] text-white"
      style={{ marginTop: "50px" }}
      id="contact"
    >

      {/* Main */}

      <div
        className="relative z-20 flex justify-center"
        style={{ padding: "20px" }}
      >

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
            style={{ padding: "20px" }}
          >

            {/* Brand */}

        <div>
  <h2
    className="
      text-3xl
      font-black
      tracking-tight
    "
    style={{ color: "#C89B3C" }}
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
    Professional plumbing and heating services delivering
    reliable solutions with quality workmanship and trusted
    support.
  </p>

  {/* Social Icons */}

  <div
    className="flex items-center gap-4"
    style={{ marginTop: "25px" }}
  >
    <a
      href="https://www.facebook.com/people/AC-Plumbing-Heating/61579529454439/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/15
        bg-white/10
        backdrop-blur-xl
        text-[#C89B3C]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#C89B3C]
        hover:bg-[#C89B3C]
        hover:text-[#123B67]
      "
    >
      <FaFacebookF
        size={18}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </a>

    <a
      href="https://www.linkedin.com/company/108301837/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/15
        bg-white/10
        backdrop-blur-xl
        text-[#C89B3C]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#C89B3C]
        hover:bg-[#C89B3C]
        hover:text-[#123B67]
      "
    >
      <FaLinkedinIn
        size={18}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </a>
  </div>
</div>

            {/* Navigation */}

            <div>

              <h3
                className="
                  text-lg
                  font-bold
                "
                style={{ color: "#C89B3C" }}
              >
                Navigation
              </h3>

              <ul
                className="
                  mt-6
                  space-y-4
                "
              >

                {footerNavigation.map((item) => (

                  <li key={item.title}>

                    <Link
                      href={item.href}
                      onClick={(e) =>
                        handleNavigation(e, item.href)
                      }
                      className="
                        text-white/60
                        transition
                        hover:text-[#C89B3C]
                      "
                    >
                      {item.title}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* Services */}

            <div>

              <h3
                className="
                  text-lg
                  font-bold
                "
                style={{ color: "#C89B3C" }}
              >
                Services
              </h3>

              <ul
                className="
                  mt-6
                  space-y-4
                "
              >

                {services.map((item) => (

                  <li key={item.title}>

                    <Link
                      href={item.href}
                      onClick={(e) =>
                        handleNavigation(e, item.href)
                      }
                      className="
                        text-white/60
                        transition
                        hover:text-[#C89B3C]
                      "
                    >
                      {item.title}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* Contact */}
                      {/* Contact */}

          <div>

            <div
              className="
                rounded-[28px]
                bg-white/10
                p-7
                backdrop-blur-sm
              "
              style={{ padding: "20px" }}
            >

              <span
                className="
                  text-xl
                  font-bold
                "
                style={{ color: "#C89B3C" }}
              >
                Contact Us
              </span>

              <div
                className="
                  mt-6
                  space-y-5
                "
              >

                <div className="flex gap-4" style={{alignItems:"center", margin:"10px 0px 10px 0px"}}>

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
                      867-447-1500
                    </p>

                  </div>

                </div>

                <div className="flex gap-4" style={{alignItems:"center", margin:"10px 0px 10px 0px"}}>

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
                      info@acplumbingheating.ca
                    </p>

                  </div>

                </div>

                <div className="flex gap-4" style={{alignItems:"center", margin:"10px 0px 10px 0px"}}>

                  <HiOutlineMapPin
                    size={70}
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
                      P.O. Box 20072, 2nd Floor,
4910 – 50th Street Yellowknife,
NT X1A 3X8
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
          style={{ padding: "20px" }}
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
              flex
              flex-col
              gap-4
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <span>
              © {new Date().getFullYear()} AC Plumbing and Heating © COPYRIGHT 2026
            </span>
<Link
  href="#home"
  scroll={false}
  onClick={(e) => handleNavigation(e, "#home")}
  className="transition hover:text-[#C89B3C]"
>
  Back to Top ↑
</Link>

          </div>

        </div>

      </div>

    </div>

    </footer>
  );
}