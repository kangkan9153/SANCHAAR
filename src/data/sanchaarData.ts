export interface ClubInfo {
  name: string;
  fullName: string;
  department: string;
  institution: string;
  location: string;
  tagline: string;
  altTagline: string;
  email: string;
  phoneDesk: string;
  campusAddress: string;
  socials: {
    linkedin: string;
    github: string;
    instagram: string;
    youtube: string;
  };
}

export const SANCHAAR_INFO: ClubInfo = {
  name: 'SANCHAAR',
  fullName: 'SANCHAAR — IoT & Robotics Club',
  department: 'Department of Electronics and Communication Engineering (ECE)',
  institution: 'Alipurduar Government Engineering and Management College (AGEMC)',
  location: 'Alipurduar, West Bengal, India',
  tagline: 'Connecting Ideas. Engineering the Future.',
  altTagline: 'Where Electronics Meets Intelligence.',
  email: 'sanchaar.club@agemc.ac.in',
  phoneDesk: '+91 (03564) 295-102 (ECE Dept. Desk)',
  campusAddress: 'ECE Department, AGEMC Campus, P.O. Alipurduar, Dist. Alipurduar, West Bengal 736123, India',
  socials: {
    linkedin: 'https://linkedin.com/company/sanchaar-agemc',
    github: 'https://github.com/sanchaar-agemc',
    instagram: 'https://instagram.com/sanchaar.agemc',
    youtube: 'https://youtube.com/@sanchaar-agemc',
  },
};

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

export const SANCHAAR_HERO_SLIDES: HeroSlide[] = [
  {
    image: '/src/assets/images/hero_robotics_lab_1791620915867.jpg',
    title: 'BUILDING THE FUTURE, ONE INNOVATION AT A TIME.',
    subtitle: 'State-of-the-art Robotics & Embedded Systems Research at AGEMC.',
  },
  {
    image: '/src/assets/images/about_engineering_team_1791620929739.jpg',
    title: 'WHERE ELECTRONICS MEETS INTELLIGENCE.',
    subtitle: 'Hands-on Prototyping, Autonomous Vehicles & Connected Sensor Networks.',
  },
  {
    image: '/src/assets/images/project_rover_prototype_1791620953593.jpg',
    title: 'FROM EXPERIMENTAL CIRCUIT TO DEPLOYED HARDWARE.',
    subtitle: 'Empowering ECE Undergraduates with Industry-Grade Engineering Skills.',
  },
];

export interface SanchaarEvent {
  id: number;
  slug: string;
  image: string;
  title: string;
  category: string;
  isUpcoming: boolean;
  date: string;
  time?: string;
  venue: string;
  description: string;
  modaldescription: string;
  prerequisites?: string[];
  takeaways?: string[];
  registrationStatus?: 'REGISTRATION OPEN' | 'COMING SOON' | 'COMPLETED';
}

export const SANCHAAR_EVENTS: SanchaarEvent[] = [
  {
    id: 0,
    slug: 'introduction-to-iot-esp32',
    image: '/src/assets/images/iot_smart_hardware_1791620940762.jpg',
    title: 'Introduction to IoT & ESP32 Microcontrollers',
    category: 'WORKSHOPS',
    isUpcoming: true,
    date: '24th October, 2026',
    time: '10:00 AM – 04:30 PM IST',
    venue: 'IoT & Embedded Systems Lab (Room 304), AGEMC Campus',
    description: 'A comprehensive, hands-on workshop covering Wi-Fi station setup, MQTT messaging, sensor interfacing, and building your first cloud-connected telemetry node.',
    modaldescription: 'Attention Future Innovators! Dive into the connected world of Internet of Things (IoT) with the dual-core ESP32 chip. In this hands-on laboratory bootcamp, students work with environmental sensor arrays, establish secure MQTT communication pipelines, configure FreeRTOS tasks, and visualize live data streams on an open-source telemetry dashboard.',
    prerequisites: ['Basic C/C++ programming syntax', 'Personal laptop with VS Code / Arduino IDE installed'],
    takeaways: ['ESP32 hardware architecture & FreeRTOS task loops', 'Live MQTT cloud broker interfacing', 'Certificate of Completion from SANCHAAR Club'],
    registrationStatus: 'REGISTRATION OPEN',
  },
  {
    id: 1,
    slug: 'roboquest-autonomous-challenge',
    image: '/src/assets/images/project_rover_prototype_1791620953593.jpg',
    title: 'RoboQuest: Autonomous Line-Follower & Maze Challenge',
    category: 'COMPETITIONS',
    isUpcoming: true,
    date: '12th November, 2026',
    time: '09:30 AM – 05:00 PM IST',
    venue: 'ECE Department Seminar Hall & Arena, AGEMC',
    description: 'Annual departmental robotics contest evaluating closed-loop PID control, precision wheel encoders, and rapid autonomous obstacle avoidance algorithms.',
    modaldescription: 'Test your machine dynamics against the clock! Teams of up to 4 students engineer autonomous rovers to traverse variable-radius tracks, cross-junctions, and sudden obstacles. Evaluated by ECE faculty judges on velocity constancy, PID tuning fidelity, and obstacle clearance algorithms.',
    prerequisites: ['Team of 2–4 AGEMC students', 'Autonomous wheeled robot chassis (max 20x20 cm)'],
    takeaways: ['Arena benchmarking against peer engineering designs', 'Hands-on feedback from robotics mentors', 'Cash prizes and prototyping component kits for winners'],
    registrationStatus: 'REGISTRATION OPEN',
  },
  {
    id: 2,
    slug: 'pcb-design-kicad-fundamentals',
    image: '/src/assets/images/gallery_soldering_lab_1791620964393.jpg',
    title: 'PCB Design Fundamentals with KiCad 8.0',
    category: 'TECHNICAL SESSIONS',
    isUpcoming: true,
    date: '5th December, 2026',
    time: '02:00 PM – 05:30 PM IST',
    venue: 'CAD & Simulation Laboratory (Room 210), AGEMC',
    description: 'From circuit concept to factory-ready Gerber files. Learn schematic capture, PCB stackup, trace clearance, and SMD footprint generation.',
    modaldescription: 'Move beyond breadboards to production hardware. In this masterclass, students master schematic capture in KiCad 8.0, component library management, differential pair routing, ground plane isolation, thermal reliefs, and generating fabrication packages for commercial manufacturing.',
    prerequisites: ['Basic circuit theory (Ohm’s law, passive filters, Op-Amps)'],
    takeaways: ['Production-ready Gerber package for your custom PCB', 'Design For Manufacturing (DFM) guidelines', 'SMD component footprint placement practices'],
    registrationStatus: 'COMING SOON',
  },
  {
    id: 3,
    slug: 'embedded-hardware-bootcamp',
    image: '/src/assets/images/about_engineering_team_1791620929739.jpg',
    title: 'Hands-on Embedded Hardware Fundamentals',
    category: 'WORKSHOPS',
    isUpcoming: false,
    date: '18th August, 2026',
    time: '10:00 AM – 04:00 PM IST',
    venue: 'ECE Electronics Hardware Lab, AGEMC',
    description: 'A full-day introductory boot camp introducing junior students to microcontrollers, digital I/O, PWM control, and sensor reading.',
    modaldescription: 'A foundational bootcamp conducted for 1st and 2nd-year students to bridge theoretical textbook physics and tangible hardware engineering. Over 65 students assembled multi-sensor alarm circuits, studied oscilloscope probe waveforms, and built LED matrix controllers.',
    prerequisites: ['Interest in electronics and embedded systems'],
    takeaways: ['65+ students completed practical hardware builds', 'Distributed starter hardware prototyping kits'],
    registrationStatus: 'COMPLETED',
  },
  {
    id: 4,
    slug: 'annual-innovation-showcase',
    image: '/src/assets/images/hero_robotics_lab_1791620915867.jpg',
    title: 'SANCHAAR Annual Innovation Showcase 2026',
    category: 'EXHIBITIONS',
    isUpcoming: false,
    date: '22nd May, 2026',
    time: '11:00 AM – 05:00 PM IST',
    venue: 'Central Auditorium & Exhibition Hall, AGEMC',
    description: 'Demonstration of 14 member-built hardware prototypes before faculty judges, department heads, and visiting academic dignitaries.',
    modaldescription: 'Annual flagship exhibition presenting smart environmental nodes, autonomous rovers, solar tracking controllers, and wireless alert systems built by SANCHAAR student cohorts. Acknowledged by college authorities for technical depth and practical impact.',
    takeaways: ['14 functional prototypes demonstrated live', 'Best Innovation award presented for Smart Solar Tracker'],
    registrationStatus: 'COMPLETED',
  },
  {
    id: 5,
    slug: 'mobile-robot-kinematics-lecture',
    image: '/src/assets/images/project_rover_prototype_1791620953593.jpg',
    title: 'Technical Talk: Mobile Robot Kinematics & Control',
    category: 'TECHNICAL SESSIONS',
    isUpcoming: false,
    date: '14th March, 2026',
    time: '02:30 PM – 04:30 PM IST',
    venue: 'ECE Smart Classroom 2, AGEMC',
    description: 'Mathematical exploration of differential drive kinematics, odometry calculations, and implementation of wheel velocity feedback loops.',
    modaldescription: 'An advanced technical session focusing on state estimation, Kalman filter fundamentals for wheel encoder and IMU integration, and practical micro-ROS integration on STM32 microcontrollers.',
    takeaways: ['Kinematics simulation models and C++ code repository', 'Live chassis testing demonstration on laboratory surfaces'],
    registrationStatus: 'COMPLETED',
  },
];

export interface SanchaarTeamMember {
  name: string;
  position: string;
  yearDept: string;
  image: string;
  linkedin: string;
  github: string;
  instagram: string;
}

export const SANCHAAR_POST_BEARERS: SanchaarTeamMember[] = [
  {
    name: 'Aarav Mukherjee',
    position: 'Club President',
    yearDept: 'ECE, 4th Year',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Debolina Sen',
    position: 'Vice President',
    yearDept: 'ECE, 4th Year',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Rohan Banerjee',
    position: 'General Secretary',
    yearDept: 'ECE, 3rd Year',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Priyanka Das',
    position: 'Robotics Team Lead',
    yearDept: 'ECE, 3rd Year',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Sourav Bhattacharya',
    position: 'IoT & Telemetry Lead',
    yearDept: 'ECE, 3rd Year',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Subhadip Paul',
    position: 'PCB & Circuit Design Lead',
    yearDept: 'ECE, 3rd Year',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Sayan Ghosh',
    position: 'Events & Workshop Head',
    yearDept: 'ECE, 3rd Year',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Ananya Roy',
    position: 'Design & Media Head',
    yearDept: 'ECE, 2nd Year',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
];

export const SANCHAAR_PRE_FINAL: SanchaarTeamMember[] = [
  {
    name: 'Ishita Chakraborty',
    position: 'Senior Coordinator — Technical Sessions',
    yearDept: 'ECE, 3rd Year',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Abhirup Dutta',
    position: 'Senior Coordinator — Firmware Development',
    yearDept: 'ECE, 3rd Year',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Sneha Barman',
    position: 'Senior Coordinator — Sensor Testing',
    yearDept: 'ECE, 3rd Year',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Koushik Sarkar',
    position: 'Senior Coordinator — Autonomous Systems',
    yearDept: 'ECE, 3rd Year',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
];

export const SANCHAAR_SECOND_YEAR: SanchaarTeamMember[] = [
  {
    name: 'Tanmoy Adhikary',
    position: 'Junior Coordinator — Microcontroller Lab',
    yearDept: 'ECE, 2nd Year',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Ritika Mondal',
    position: 'Junior Coordinator — Documentation & Outreach',
    yearDept: 'ECE, 2nd Year',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Avishek Paul',
    position: 'Junior Coordinator — Hardware Prototyping',
    yearDept: 'ECE, 2nd Year',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Pooja Barman',
    position: 'Junior Coordinator — Workshop Logistics',
    yearDept: 'ECE, 2nd Year',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
  },
];

export interface SanchaarFaculty {
  id: number;
  name: string;
  designation: string;
  department: string;
  roleInClub: string;
  researchInterest: string;
  email: string;
  image: string;
}

export const SANCHAAR_FACULTY: SanchaarFaculty[] = [
  {
    id: 1,
    name: 'Faculty Coordinator (ECE)',
    designation: 'Assistant Professor, Department of ECE',
    department: 'Electronics & Communication Engineering, AGEMC',
    roleInClub: 'Faculty In-Charge & Laboratory Mentor',
    researchInterest: 'Embedded Systems, IoT Protocols & Microcontroller Architectures',
    email: 'faculty.coordinator.ece@agemc.ac.in',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Head of Department (ECE)',
    designation: 'Associate Professor & Head of Department',
    department: 'Electronics & Communication Engineering, AGEMC',
    roleInClub: 'Chief Faculty Advisor',
    researchInterest: 'Wireless Communications, VLSI & Digital Signal Processing',
    email: 'hod.ece@agemc.ac.in',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Principal, AGEMC',
    designation: 'Principal & Academic Head',
    department: 'Alipurduar Government Engineering and Management College',
    roleInClub: 'Patron',
    researchInterest: 'Applied Engineering, Institutional Research & Higher Education',
    email: 'principal@agemc.ac.in',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Robotics Lab In-Charge',
    designation: 'Assistant Professor, Department of ECE',
    department: 'Electronics & Communication Engineering, AGEMC',
    roleInClub: 'Robotics & Control Systems Advisor',
    researchInterest: 'Control Systems, Mechatronics, Sensors & Actuators',
    email: 'robotics.mentor@agemc.ac.in',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80',
  },
];
