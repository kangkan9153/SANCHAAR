import { CLUB_IMAGES } from '../assets/images';

export type EventCategory = 'WORKSHOPS' | 'COMPETITIONS' | 'TECHNICAL SESSIONS' | 'EXHIBITIONS';

export interface ClubEvent {
  id: string;
  title: string;
  category: EventCategory;
  isUpcoming: boolean;
  date: string;
  time?: string;
  venue: string;
  shortDesc: string;
  fullDesc: string;
  registrationStatus?: 'REGISTRATION OPEN' | 'COMING SOON' | 'REGISTRATION CLOSED';
  image: string;
  speakerOrLead?: string;
  prerequisites?: string[];
  takeaways?: string[];
  maxSeats?: number;
  registeredCount?: number;
}

export const CLUB_EVENTS: ClubEvent[] = [
  // Upcoming Events
  {
    id: 'evt-esp32-bootcamp',
    title: 'Introduction to IoT & ESP32 Microcontrollers',
    category: 'WORKSHOPS',
    isUpcoming: true,
    date: 'OCTOBER 24, 2026',
    time: '10:00 AM – 04:30 PM IST',
    venue: 'IoT & Embedded Systems Lab (Room 304), AGEMC Campus',
    shortDesc: 'A comprehensive, hands-on workshop covering Wi-Fi station setup, MQTT messaging, sensor interfacing, and building your first cloud-connected telemetry node.',
    fullDesc: 'Participants will work directly with genuine ESP32 development boards, connecting environmental sensors, configuring FreeRTOS lightweight tasks, and streaming real-time telemetry to an open-source MQTT dashboard. Designed for students who want to build production-ready connected devices.',
    registrationStatus: 'REGISTRATION OPEN',
    image: CLUB_IMAGES.iotSmartHardware,
    speakerOrLead: 'Technical Team Lead & ECE Lab Mentors',
    prerequisites: ['Basic C/C++ programming syntax', 'Personal laptop with VS Code / Arduino IDE installed'],
    takeaways: ['ESP32 hardware architecture understanding', 'Working FreeRTOS task structure', 'Certificate of Completion from SANCHAAR Club'],
    maxSeats: 40,
    registeredCount: 28,
  },
  {
    id: 'evt-robotics-sumo',
    title: 'RoboQuest: Autonomous Line-Follower & Maze Challenge',
    category: 'COMPETITIONS',
    isUpcoming: true,
    date: 'NOVEMBER 12, 2026',
    time: '09:30 AM – 05:00 PM IST',
    venue: 'ECE Department Seminar Hall & Arena, AGEMC',
    shortDesc: 'Annual departmental robotics contest evaluating closed-loop PID control, precision wheel encoders, and rapid autonomous obstacle avoidance algorithms.',
    fullDesc: 'Teams of up to 4 members will design, program, and race autonomous mobile robots through progressively complex tracks with cross-intersections, variable-radius turns, and dynamic obstacles. Cash prizes and prototyping kit rewards for top-ranked designs.',
    registrationStatus: 'REGISTRATION OPEN',
    image: CLUB_IMAGES.projectRoverPrototype,
    speakerOrLead: 'SANCHAAR Competition Committee',
    prerequisites: ['Team of 2–4 AGEMC students', 'Autonomous robotic vehicle adhering to dimension limits (20x20 cm)'],
    takeaways: ['Competitive robotics arena testing', 'Hands-on PID tuning feedback from faculty jury', 'Institutional trophies and prototyping components'],
    maxSeats: 25,
    registeredCount: 16,
  },
  {
    id: 'evt-pcb-kicad',
    title: 'PCB Design Fundamentals with KiCad 8.0',
    category: 'TECHNICAL SESSIONS',
    isUpcoming: true,
    date: 'DECEMBER 05, 2026',
    time: '02:00 PM – 05:30 PM IST',
    venue: 'CAD & Simulation Laboratory (Room 210), AGEMC',
    shortDesc: 'From circuit concept to factory-ready Gerber files. Learn schematic capture, PCB stackup, trace clearance, and SMD footprint generation.',
    fullDesc: 'An intensive masterclass walking through the complete PCB production pipeline: selecting passive footprints, routing differential pairs, avoiding ground loops, creating thermal reliefs, and submitting production fabrication packages.',
    registrationStatus: 'COMING SOON',
    image: CLUB_IMAGES.gallerySolderingLab,
    speakerOrLead: 'Electronics Design Lead',
    prerequisites: ['Basic circuit theory (Ohm’s law, RC filters, Op-Amps)'],
    takeaways: ['Production-ready Gerber package for your custom board', 'Component library management techniques', 'Design For Manufacturing (DFM) guidelines'],
    maxSeats: 35,
    registeredCount: 0,
  },

  // Past Events
  {
    id: 'evt-past-arduino-bootcamp',
    title: 'Hands-on Embedded Hardware Fundamentals',
    category: 'WORKSHOPS',
    isUpcoming: false,
    date: 'AUGUST 18, 2026',
    venue: 'ECE Electronics Hardware Lab, AGEMC',
    shortDesc: 'A full-day introductory boot camp introducing 60+ junior students to microcontrollers, digital I/O, PWM control, and sensor reading.',
    fullDesc: 'Conducted for 1st and 2nd-year students to bridge the gap between textbook circuit analysis and real physical prototyping. Attendees built multi-sensor alarm systems and LED matrix displays.',
    image: CLUB_IMAGES.aboutEngineeringTeam,
    speakerOrLead: 'SANCHAAR Core Team',
    takeaways: ['Over 65 students completed practical hardware builds', 'Distributed starter hardware kits'],
  },
  {
    id: 'evt-past-project-expo',
    title: 'SANCHAAR Annual Innovation Showcase 2026',
    category: 'EXHIBITIONS',
    isUpcoming: false,
    date: 'MAY 22, 2026',
    venue: 'Central Auditorium & Exhibition Hall, AGEMC',
    shortDesc: 'Demonstration of 14 member-built hardware prototypes before faculty judges, department heads, and visiting academic dignitaries.',
    fullDesc: 'Showcase featuring smart agricultural nodes, home automation hubs, autonomous rovers, and biometric security terminals. Reviewed by college administrators and acknowledged for technical execution.',
    image: CLUB_IMAGES.heroRoboticsLab,
    speakerOrLead: 'ECE Department Faculty & Club Leads',
    takeaways: ['14 functional prototypes demonstrated live', 'Best Innovation award presented for Smart Solar Tracker'],
  },
  {
    id: 'evt-past-ros-lecture',
    title: 'Technical Session: Mobile Robot Kinematics & Control',
    category: 'TECHNICAL SESSIONS',
    isUpcoming: false,
    date: 'MARCH 14, 2026',
    venue: 'ECE Smart Classroom 2, AGEMC',
    shortDesc: 'Mathematical exploration of differential drive kinematics, odometry calculations, and implementation of wheel velocity feedback loops.',
    fullDesc: 'In-depth seminar focusing on state estimation, Kalman filter basics for encoder and IMU integration, and practical micro-ROS integration with low-cost microcontrollers.',
    image: CLUB_IMAGES.projectRoverPrototype,
    speakerOrLead: 'Faculty Mentor & Student Leads',
    takeaways: ['Complete Kinematics code repository shared with attendees', 'Live chassis dynamic testing demo'],
  },
];
