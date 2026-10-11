export interface FacultyMentor {
  id: string;
  name: string;
  designation: string;
  department: string;
  institution: string;
  roleInClub: string;
  bio: string;
  specialization: string[];
  emailPlaceholder: string;
  isConfigurablePlaceholder: boolean;
}

export const FACULTY_COORDINATORS: FacultyMentor[] = [
  {
    id: 'fac-1',
    name: 'Dr. Faculty Coordinator (ECE)',
    designation: 'Assistant Professor & Faculty Coordinator',
    department: 'Department of Electronics and Communication Engineering',
    institution: 'Alipurduar Government Engineering and Management College (AGEMC)',
    roleInClub: 'Faculty In-Charge & Laboratory Mentor',
    bio: 'Guiding student engineers in embedded systems architecture, sensor interface protocols, and real-world hardware verification. Mentors student teams for regional innovation competitions and laboratory research initiatives.',
    specialization: ['Embedded Systems', 'Signal Processing', 'Microcontroller Architectures'],
    emailPlaceholder: 'faculty.ece@agemc.ac.in',
    isConfigurablePlaceholder: true,
  },
  {
    id: 'fac-2',
    name: 'Head of Department (ECE)',
    designation: 'Associate Professor & Head of Department',
    department: 'Department of Electronics and Communication Engineering',
    institution: 'Alipurduar Government Engineering and Management College (AGEMC)',
    roleInClub: 'Chief Faculty Advisor',
    bio: 'Oversees departmental technical clubs, providing institutional support, hardware lab facilities, and inter-departmental innovation grants to cultivate an active engineering prototyping culture across AGEMC.',
    specialization: ['VLSI & Semiconductor Devices', 'Wireless Communications', 'Automation Engineering'],
    emailPlaceholder: 'hod.ece@agemc.ac.in',
    isConfigurablePlaceholder: true,
  },
  {
    id: 'fac-3',
    name: 'Principal & Patron',
    designation: 'Principal & Academic Head',
    department: 'Administration & Academic Directorate',
    institution: 'Alipurduar Government Engineering and Management College (AGEMC)',
    roleInClub: 'Patron',
    bio: 'Fostering institutional excellence, student entrepreneurship, and industry-aligned technical skill development across all engineering disciplines at Alipurduar Government Engineering and Management College.',
    specialization: ['Institutional Leadership', 'Technical Education', 'Applied Engineering'],
    emailPlaceholder: 'principal@agemc.ac.in',
    isConfigurablePlaceholder: true,
  },
];
