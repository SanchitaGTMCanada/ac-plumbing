import {
  FaTools,
  FaFire,
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaWater,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    featured: true,
    image: "/assets/services/boiler.jpg",
    title: "Boiler Maintenance",
    description:
      "Complete boiler inspection, servicing and preventive maintenance for residential and commercial heating systems.",
    icon: FaFire,
    link: "#contact",
    tag: "Most Popular",
    startingPrice: "From $149",
    duration: "1–2 Hours",
  },

  {
    id: 2,
    featured: false,
    image: "/assets/services/heating.jpg",
    title: "Heating System Services",
    description:
      "Professional heating installation, repairs and seasonal maintenance to ensure reliable indoor comfort.",
    icon: FaTemperatureHigh,
    link: "#contact",
    tag: "24/7 Service",
    startingPrice: "From $189",
    duration: "2–4 Hours",
  },

  {
    id: 3,
    featured: false,
    image: "/assets/services/plumbing.jpg",
    title: "Plumbing Services",
    description:
      "Leak detection, plumbing repairs, fixture replacements and complete residential & commercial plumbing solutions.",
    icon: FaTools,
    link: "#contact",
    tag: "Certified",
    startingPrice: "From $129",
    duration: "1–3 Hours",
  },

  {
    id: 4,
    featured: false,
    image: "/assets/services/water-heater.jpg",
    title: "Tankless Water Heater",
    description:
      "Installation, maintenance and servicing of tankless water heaters for maximum energy efficiency.",
    icon: FaWater,
    link: "#contact",
    tag: "Energy Efficient",
    startingPrice: "From $199",
    duration: "2–4 Hours",
  },

  {
    id: 5,
    featured: false,
    image: "/assets/services/furnace.jpg",
    title: "Furnace Maintenance",
    description:
      "Annual furnace inspections, cleaning and tune-ups to improve safety, efficiency and equipment lifespan.",
    icon: FaTemperatureHigh,
    link: "#contact",
    tag: "Annual Service",
    startingPrice: "From $159",
    duration: "1–2 Hours",
  },

  {
    id: 6,
    featured: false,
    image: "/assets/services/hvac.jpg",
    title: "HVAC Maintenance",
    description:
      "Comprehensive HVAC maintenance including furnaces, boilers, ventilation and heating systems.",
    icon: FaWind,
    link: "#contact",
    tag: "Commercial",
    startingPrice: "From $249",
    duration: "2–5 Hours",
  },

  {
    id: 7,
    featured: false,
    image: "/assets/services/mua.jpg",
    title: "MUA Unit Testing",
    description:
      "Professional Make-Up Air Unit testing, inspections and performance verification for commercial properties.",
    icon: FaWind,
    link: "#contact",
    tag: "Testing",
    startingPrice: "Free Estimate",
    duration: "2–6 Hours",
  },

  {
    id: 8,
    featured: false,
    image: "/assets/services/hrv.jpg",
    title: "HRV Maintenance",
    description:
      "Heat Recovery Ventilator maintenance, cleaning and airflow optimization for healthier indoor environments.",
    icon: FaWind,
    link: "#contact",
    tag: "Ventilation",
    startingPrice: "From $149",
    duration: "1–2 Hours",
  },

  {
    id: 9,
    featured: false,
    image: "/assets/services/humdifier.jpg",
    title: "Humidifier Maintenance",
    description:
      "Seasonal humidifier servicing and maintenance to improve comfort and indoor air quality.",
    icon: FaTint,
    link: "#contact",
    tag: "Indoor Comfort",
    startingPrice: "From $99",
    duration: "30–60 Minutes",
  },

  {
    id: 10,
    featured: false,
    image: "/assets/services/water-heater.jpg",
    title: "Water Heater Services",
    description:
      "Routine maintenance and servicing for direct vent, gas and conventional hot water tank systems.",
    icon: FaWater,
    link: "#contact",
    tag: "Residential",
    startingPrice: "From $169",
    duration: "1–3 Hours",
  },
];

export default services;