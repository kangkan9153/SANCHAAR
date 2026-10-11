export type GalleryCategory = 'PROJECTS' | 'WORKSHOPS' | 'TEAM' | 'EVENTS';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  date: string;
  caption: string;
  image: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Autonomous Mobile Rover Bench Inspection',
    category: 'PROJECTS',
    date: 'APRIL 2026',
    caption: 'Tuning 360° LiDAR scanner alignments and checking 4-wheel independent motor drivers on the testbench in the AGEMC robotics lab.',
    image: '/src/assets/images/project_rover_prototype_1791620953593.jpg',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-2',
    title: 'Surface-Mount PCB Assembly & Fine Soldering',
    category: 'WORKSHOPS',
    date: 'FEBRUARY 2026',
    caption: 'Student placing 0805 SMD passive resistors and micro-controllers under a temperature-controlled magnifying inspection station.',
    image: '/src/assets/images/gallery_soldering_lab_1791620964393.jpg',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-3',
    title: 'Hardware Prototyping & Sensor Signal Testing',
    category: 'TEAM',
    date: 'MARCH 2026',
    caption: 'ECE student team probing digital bus signals and PWM output waveforms using a high-bandwidth digital storage oscilloscope.',
    image: '/src/assets/images/about_engineering_team_1791620929739.jpg',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-4',
    title: 'Multi-Sensor IoT Node on Bench Matrix',
    category: 'PROJECTS',
    date: 'MAY 2026',
    caption: 'ESP32 development board reading digital temperature, pressure, and humidity sensor streams with live OLED status readout.',
    image: '/src/assets/images/iot_smart_hardware_1791620940762.jpg',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-5',
    title: 'Late Evening Experimentation in Department Lab',
    category: 'EVENTS',
    date: 'JUNE 2026',
    caption: 'Robotics team collaborating during an intensive sprint session preparing prototype submissions for the regional engineering symposium.',
    image: '/src/assets/images/hero_robotics_lab_1791620915867.jpg',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-6',
    title: 'Mecanum Kinematics Ground Drift Testing',
    category: 'PROJECTS',
    date: 'JULY 2026',
    caption: 'Evaluating lateral omnidirectional trajectory repeatability on industrial flat tile surfaces in the main department gallery.',
    image: '/src/assets/images/project_rover_prototype_1791620953593.jpg',
    aspectRatio: 'landscape',
  },
];
