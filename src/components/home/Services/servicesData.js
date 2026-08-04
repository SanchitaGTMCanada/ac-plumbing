import {
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
    image: "/assets/services/mua.jpg",
    title: "Make-Up Air (MUA) Unit Testing",
    description:
      "Professional testing and performance verification of Make-Up Air Units for commercial buildings.",
    icon: FaWind,
    link: "#contact",
    tag: "Commercial",
    startingPrice: "Price $650",
    duration: "4 Hours",
  },

  {
    id: 2,
    image: "/assets/services/boiler.jpg",
    title: "Full Boiler Maintenance",
    description:
      "Complete inspection, cleaning and maintenance to maximize boiler efficiency and reliability.",
    icon: FaFire,
    link: "#contact",
    tag: "Most Popular",
    startingPrice: "Price $650",
    duration: "4 Hours",
  },

  {
    id: 3,
    image: "/assets/services/boiler.jpg",
    title: "Combi Boiler Maintenance",
    description:
      "Annual servicing and preventive maintenance for combi boiler systems.",
    icon: FaFire,
    link: "#contact",
    tag: "Residential",
    startingPrice: "Price $490",
    duration: "3 Hours",
  },

  {
    id: 4,
    image: "/assets/services/water-heater.jpg",
    title: "Tankless Water Heater Maintenance",
    description:
      "Maintenance and flushing services for tankless water heaters to ensure peak performance.",
    icon: FaWater,
    link: "#contact",
    tag: "Energy Efficient",
    startingPrice: "Price $490",
    duration: "3 Hours",
  },

  {
    id: 5,
    image: "/assets/services/furnace.jpg",
    title: "Annual Furnace Maintenance",
    description:
      "Annual inspection, cleaning and tune-up for improved heating efficiency.",
    icon: FaTemperatureHigh,
    link: "#contact",
    tag: "Annual",
    startingPrice: "Price $325",
    duration: "2 Hours",
  },

  {
    id: 6,
    image: "/assets/services/furnace.jpg",
    title: "Modular Home Furnace Maintenance",
    description:
      "Specialized furnace maintenance services designed for modular and manufactured homes.",
    icon: FaTemperatureHigh,
    link: "#contact",
    tag: "Residential",
    startingPrice: "Price $325",
    duration: "2 Hours",
  },

  {
    id: 7,
    image: "/assets/services/hvac.jpg",
    title: "Air Conditioner Testing",
    description:
      "Routine maintenance, inspection and testing to keep cooling systems operating efficiently.",
    icon: FaWind,
    link: "#contact",
    tag: "Cooling",
    startingPrice: "Price $325",
    duration: "2 Hours",
  },

  {
    id: 8,
    image: "/assets/services/boiler.jpg",
    title: "Mid-Efficiency Boiler Maintenance",
    description:
      "Maintenance services designed specifically for mid-efficiency boiler systems.",
    icon: FaFire,
    link: "#contact",
    tag: "Boiler",
    startingPrice: "Price $325",
    duration: "2 Hours",
  },

  {
    id: 9,
    image: "/assets/services/water-heater.jpg",
    title: "Direct Vent Hot Water Tank Maintenance",
    description:
      "Inspection, cleaning and servicing for direct vent hot water tank systems.",
    icon: FaWater,
    link: "#contact",
    tag: "Water Heater",
    startingPrice: "Price $325",
    duration: "2 Hours",
  },

  {
    id: 10,
    image: "/assets/services/fireplace.jpg",
    title: "Annual Gas Fireplace Maintenance",
    description:
      "Comprehensive annual maintenance to keep gas fireplaces operating safely.",
    icon: FaFire,
    link: "#contact",
    tag: "Seasonal",
    startingPrice: "Price $490",
    duration: "3 Hours",
  },

  {
    id: 11,
    image: "/assets/services/hrv.jpg",
    title: "Annual HRV Maintenance",
    description:
      "Cleaning, airflow testing and maintenance of Heat Recovery Ventilation systems.",
    icon: FaWind,
    link: "#contact",
    tag: "Ventilation",
    startingPrice: "Price $490",
    duration: "3 Hours",
  },

  {
    id: 12,
    image: "/assets/services/humdifier.jpg",
    title: "Annual Humidifier Maintenance",
    description:
      "Routine servicing to improve indoor air quality and extend humidifier life.",
    icon: FaTint,
    link: "#contact",
    tag: "Indoor Comfort",
    startingPrice: "Price $325",
    duration: "2 Hours",
  },

  {
    id: 13,
    image: "/assets/services/hvac.jpg",
    title: "HVAC Service Package",
    description:
      "Complete package including boiler maintenance and water heater servicing.",
    icon: FaWind,
    link: "#contact",
    tag: "Best Value",
    startingPrice: "Price $1630",
    duration: "10 Hours",
  },

  {
    id: 14,
    image: "/assets/services/hvac.jpg",
    title: "MUA + Boiler + Water Heater Package",
    description:
      "Comprehensive maintenance package covering MUA testing, boiler service and water heater maintenance.",
    icon: FaWind,
    link: "#contact",
    tag: "Premium Package",
    startingPrice: "Price $1630",
    duration: "10 Hours",
  },
];

export default services;