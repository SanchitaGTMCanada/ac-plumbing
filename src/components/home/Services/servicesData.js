import {
  FaWrench,
  FaFire,
  FaTemperatureHigh,
  FaTint,
  FaShower,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    featured: true,
    image: "/assets/services/plumbing.jpg",
    title: "Plumbing Repairs",
    description:
      "Fast leak detection, pipe replacement, faucet installation and complete plumbing solutions for residential and commercial properties.",
    price: "$149",
    icon: FaWrench,
    link: "/services/plumbing",
    tag: "Most Popular",
  },

  {
    id: 2,
    featured: false,
    image: "/assets/services/heating.jpg",
    title: "Heating Services",
    description:
      "Professional heating installation and repair services that keep your home comfortable throughout the year.",
    price: "$199",
    icon: FaFire,
    link: "/services/heating",
    tag: "24/7",
  },

  {
    id: 3,
    featured: false,
    image: "/assets/services/boiler.jpg",
    title: "Boiler Maintenance",
    description:
      "Annual inspections, servicing and boiler maintenance for improved efficiency and reliability.",
    price: "$325",
    icon: FaTemperatureHigh,
    link: "/services/boiler",
    tag: "Certified",
  },

  {
    id: 4,
    featured: false,
    image: "/assets/services/plumbing.jpg",
    title: "Drain Cleaning",
    description:
      "Blocked drains, sewer cleaning and professional drainage maintenance using modern equipment.",
    price: "$129",
    icon: FaTint,
    link: "/services/drain-cleaning",
    tag: "Emergency",
  },

  {
    id: 5,
    featured: false,
    image: "/assets/services/heating.jpg",
    title: "Water Heater",
    description:
      "Installation, replacement and maintenance of energy-efficient water heating systems.",
    price: "$249",
    icon: FaShower,
    link: "/services/water-heater",
    tag: "Residential",
  },

  {
    id: 6,
    featured: false,
    image: "/assets/services/boiler.jpg",
    title: "Emergency Plumbing",
    description:
      "Available 24/7 for burst pipes, flooding, leaks and urgent plumbing emergencies.",
    price: "$99",
    icon: FaTools,
    link: "/services/emergency",
    tag: "24 Hours",
  },
];

export default services;