export type MemberCategory = 'CORE TEAM' | 'TECHNICAL TEAM' | 'EVENTS TEAM' | 'DESIGN TEAM';

export interface ClubMember {
  id: string;
  name: string;
  role: string;
  category: MemberCategory;
  yearDept: string;
  techInterests: string[];
  initials: string;
  githubUrl?: string;
  linkedinUrl?: string;
  avatarBg: string;
  isPlaceholderNote?: string;
}

export const CLUB_MEMBERS: ClubMember[] = [
  {
    id: 'mem-1',
    name: 'Aarav Mukherjee',
    role: 'Club President & Systems Architect',
    category: 'CORE TEAM',
    yearDept: 'ECE, 4th Year',
    techInterests: ['Embedded Firmware', 'FreeRTOS', 'Robotics Kinematics'],
    initials: 'AM',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Aarav%20Mukherjee%20AGEMC',
    avatarBg: '#101923',
    isPlaceholderNote: 'Sample Student Leader',
  },
  {
    id: 'mem-2',
    name: 'Debolina Sen',
    role: 'Vice President & IoT Research Lead',
    category: 'CORE TEAM',
    yearDept: 'ECE, 4th Year',
    techInterests: ['LoRaWAN', 'Distributed Telemetry', 'ESP32 Architecture'],
    initials: 'DS',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Debolina%20Sen%20AGEMC',
    avatarBg: '#1C69D4',
    isPlaceholderNote: 'Sample Student Leader',
  },
  {
    id: 'mem-3',
    name: 'Rohan Banerjee',
    role: 'Technical Lead — Embedded Systems',
    category: 'TECHNICAL TEAM',
    yearDept: 'ECE, 3rd Year',
    techInterests: ['STM32 ARM Cortex', 'KiCad PCB Design', 'CAN Bus'],
    initials: 'RB',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Rohan%20Banerjee%20AGEMC',
    avatarBg: '#1A2533',
    isPlaceholderNote: 'Sample Student Lead',
  },
  {
    id: 'mem-4',
    name: 'Priyanka Das',
    role: 'Robotics & Control Systems Lead',
    category: 'TECHNICAL TEAM',
    yearDept: 'ECE, 3rd Year',
    techInterests: ['PID Feedback Loops', 'LiDAR SLAM', 'Motor Drivers'],
    initials: 'PD',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Priyanka%20Das%20AGEMC',
    avatarBg: '#0653B6',
    isPlaceholderNote: 'Sample Student Lead',
  },
  {
    id: 'mem-5',
    name: 'Sayan Ghosh',
    role: 'Event Coordinator & Operations Lead',
    category: 'EVENTS TEAM',
    yearDept: 'ECE, 3rd Year',
    techInterests: ['Hardware Hackathons', 'Workshop Logistics', 'Lab Outreach'],
    initials: 'SG',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Sayan%20Ghosh%20AGEMC',
    avatarBg: '#2C3E50',
    isPlaceholderNote: 'Sample Student Lead',
  },
  {
    id: 'mem-6',
    name: 'Ananya Roy',
    role: 'Design & Media Documentation Lead',
    category: 'DESIGN TEAM',
    yearDept: 'ECE, 2nd Year',
    techInterests: ['Schematic Visuals', 'Technical Writing', 'UI/UX Prototypes'],
    initials: 'AR',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Ananya%20Roy%20AGEMC',
    avatarBg: '#16222F',
    isPlaceholderNote: 'Sample Student Lead',
  },
  {
    id: 'mem-7',
    name: 'Subhadip Paul',
    role: 'Sensors & Signal Conditioning Associate',
    category: 'TECHNICAL TEAM',
    yearDept: 'ECE, 2nd Year',
    techInterests: ['Analog Op-Amps', 'Noise Filtering', 'Micro-Sensors'],
    initials: 'SP',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Subhadip%20Paul%20AGEMC',
    avatarBg: '#1E3A5F',
    isPlaceholderNote: 'Sample Student Member',
  },
  {
    id: 'mem-8',
    name: 'Ishita Chakraborty',
    role: 'Technical Sessions Coordinator',
    category: 'EVENTS TEAM',
    yearDept: 'ECE, 2nd Year',
    techInterests: ['Bootcamp Curriculum', 'Student Mentoring', 'Peer Labs'],
    initials: 'IC',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Ishita%20Chakraborty%20AGEMC',
    avatarBg: '#1B263B',
    isPlaceholderNote: 'Sample Student Member',
  },
];
