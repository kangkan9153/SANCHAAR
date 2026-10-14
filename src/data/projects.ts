import { CLUB_IMAGES } from '../assets/images';

export type ProjectCategory = 'IOT' | 'ROBOTICS' | 'EMBEDDED SYSTEMS' | 'PCB DESIGN' | 'AUTOMATION';

export interface ClubProject {
  id: string;
  title: string;
  category: ProjectCategory;
  status: 'PROTOTYPE VERIFIED' | 'ACTIVE BUILD' | 'FIELD TESTING';
  shortDesc: string;
  overview: string;
  problemStatement: string;
  objectives: string[];
  hardwareComponents: string[];
  softwareStack: string[];
  architectureDetails: string;
  image: string;
  contributors: string[];
  githubUrl?: string;
  demoUrl?: string;
  completionDate?: string;
}

export const CLUB_PROJECTS: ClubProject[] = [
  {
    id: 'proj-esp32-home',
    title: 'Smart Home Automation Using ESP32',
    category: 'IOT',
    status: 'PROTOTYPE VERIFIED',
    shortDesc: 'A distributed 4-channel relay controller with dual Wi-Fi/Bluetooth failover, real-time power metering, and MQTT synchronization.',
    overview: 'This project develops a modular smart home hub built around the dual-core ESP32 chip. It provides low-latency local switching via physical toggle inputs, wireless command routing over local MQTT brokers, and mobile control without relying on proprietary cloud vendors.',
    problemStatement: 'Commercial smart home devices frequently depend on closed proprietary clouds that introduce high latency, privacy risks, and complete loss of control during internet outages.',
    objectives: [
      'Implement zero-cloud local MQTT communication with sub-50ms reaction latency',
      'Provide manual toggle interrupt recovery so physical wall switches function regardless of Wi-Fi state',
      'Incorporate optoisolated zero-crossing triac/relay switching for safe AC load management',
    ],
    hardwareComponents: [
      'ESP32-WROOM-32D Development Board',
      'Optocoupled 4-Channel 10A/250VAC Relay Module',
      'HLK-PM01 5V/3W Step-Down AC-DC Converter',
      'ACS712 Hall-Effect Current Sensor for power monitoring',
      'Snubber RC Circuit Protection',
    ],
    softwareStack: [
      'C++ (Arduino Core / ESP-IDF)',
      'FreeRTOS (dual-task scheduling for network and I/O)',
      'Mosquitto MQTT Broker',
      'Home Assistant Local Integration API',
    ],
    architectureDetails: 'Core 0 handles Wi-Fi stack negotiation, MQTT keep-alive handshakes, and WebSockets. Core 1 monitors pin state interrupts, debounce logic, and drives relay trigger gates in hard real-time.',
    image: CLUB_IMAGES.iotSmartHardware,
    contributors: ['ECE Hardware Team (Sample Student Project)', 'IoT Interest Group'],
    githubUrl: 'https://github.com/sanchaar-club/esp32-home-node',
    completionDate: 'June 2026',
  },
  {
    id: 'proj-autonomous-rover',
    title: 'Obstacle-Avoiding Autonomous Mobile Rover',
    category: 'ROBOTICS',
    status: 'PROTOTYPE VERIFIED',
    shortDesc: 'A holonomic mecanum-wheel ground vehicle incorporating 360° LiDAR scanning, ultrasonic edge guards, and closed-loop PID trajectory control.',
    overview: 'Engineered as a testbed for mobile autonomous navigation, this rover couples high-torque geared DC motors with quadrature optical encoders. A central STM32 microcontroller computes continuous inverse kinematics while an onboard Linux computer handles mapping and path generation.',
    problemStatement: 'Affordable mobile robotics platforms often lack deterministic wheel velocity feedback and suffer from high drift during lateral or omnidirectional motions.',
    objectives: [
      'Implement four-wheel independent mecanum kinematics with millimeter-level positional repeatability',
      'Construct a reactive 2D safety field using LiDAR distance arrays and ultrasonic time-of-flight sensors',
      'Execute smooth obstacle avoidance trajectories using vector field histogram (VFH) algorithms',
    ],
    hardwareComponents: [
      'STM32F401 BlackPill (kinematics & PID controller)',
      'Raspberry Pi 4 (navigation pipeline & telemetry)',
      '4x 12V Planetary Gear Motors with 330 PPR Encoders',
      'Dual BTS7960 43A High-Current H-Bridge Motor Drivers',
      'RPLiDAR A1 360° Laser Scanner',
      '3S 11.1V 4200mAh LiPo Power System with BMS',
    ],
    softwareStack: [
      'Bare-metal C & FreeRTOS (motor control loop at 200 Hz)',
      'Micro-ROS serial communication bridge',
      'Python / OpenCV for auxiliary optical marker recognition',
    ],
    architectureDetails: 'Hierarchical control architecture: STM32 executes real-time PID loops every 5ms to maintain target wheel velocities; Raspberry Pi runs global path-planning and streams point-cloud diagnostics.',
    image: CLUB_IMAGES.projectRoverPrototype,
    contributors: ['Robotics Sub-Group (Sample Student Project)', 'Kinematics Lead'],
    githubUrl: 'https://github.com/sanchaar-club/autonomous-mecanum-rover',
    completionDate: 'April 2026',
  },
  {
    id: 'proj-env-monitor',
    title: 'IoT-Based Environmental Monitoring System',
    category: 'IOT',
    status: 'FIELD TESTING',
    shortDesc: 'Solar-powered ambient air quality node measuring particulate matter (PM2.5/PM10), CO2, atmospheric pressure, and humidity with LoRa telemetry.',
    overview: 'Deployed across college campus grounds to collect micro-climatic and atmospheric data. Powered by a miniature photovoltaic panel with MPPT charging, transmitting compressed telemetry packages over an 868 MHz LoRa wireless link up to 3 kilometers.',
    problemStatement: 'Campus environmental tracking usually relies on sparse government meteorological stations miles away that do not reflect local micro-climates or laboratory air purity.',
    objectives: [
      'Achieve continuous solar self-sustainability with sleep-current below 25 microamps',
      'Accurately capture PM1.0, PM2.5, PM10, temperature, relative humidity, and barometric pressure',
      'Publish open metrics to a campus visualization portal for ECE and science faculty review',
    ],
    hardwareComponents: [
      'ATmega328P / Low-Power MCU',
      'Sensirion SPS30 Optical Particle Sensor',
      'Bosch BME280 Precision Environmental Sensor',
      'Semtech SX1276 LoRa Transceiver Module (868 MHz)',
      '5W Monocrystalline Solar Panel with TP4056 + CN3791 MPPT Solar Charger',
      '18650 Li-Ion Cells with over-discharge protection',
    ],
    softwareStack: [
      'Low-Power C++ Firmware with deep-sleep watchdog timers',
      'LoRaWAN / ChirpStack Network Server',
      'Node-RED + Grafana Campus Dashboard',
    ],
    architectureDetails: 'Wake-sample-transmit-sleep architecture: MCU wakes every 10 minutes, powers sensors via P-channel MOSFET switches, averages 5 samples, broadcasts over LoRa, and enters deep sleep.',
    image: CLUB_IMAGES.heroRoboticsLab,
    contributors: ['Embedded Systems Cell', 'Sensors Working Group'],
    githubUrl: 'https://github.com/sanchaar-club/lora-ambient-station',
    completionDate: 'Ongoing Field Evaluation',
  },
  {
    id: 'proj-plant-irrigation',
    title: 'Automated Precision Plant Irrigation System',
    category: 'AUTOMATION',
    status: 'PROTOTYPE VERIFIED',
    shortDesc: 'Closed-loop capacitive soil moisture sensing network controlling peristaltic mini-pumps based on diurnal evapotranspiration thresholds.',
    overview: 'An automated agricultural technology unit designed to eliminate overwatering and mineral leaching. Utilizes non-corrosive capacitive frequency sensors to determine volumetric water content and activates targeted drip lines through PWM-controlled valves.',
    problemStatement: 'Traditional timer-based or resistive probe irrigation results in rapid probe corrosion and water wastage due to disregard of soil type and real moisture levels.',
    objectives: [
      'Implement corrosion-free high-frequency capacitive moisture sensing',
      'Calculate dynamic watering volume based on ambient temperature and soil drainage curve',
      'Alert maintenance personnel when reservoir levels drop below 15%',
    ],
    hardwareComponents: [
      'ESP8266 Wi-Fi Microcontroller',
      'Corrosion-Resistant Capacitive Soil Moisture Sensors v1.2',
      '12V Peristaltic Drip Pumps with MOSFET Driver Stage',
      'Non-Contact Capacitive Liquid Level Sensor',
      '16x2 I2C Industrial LCD Screen for on-site diagnostic readouts',
    ],
    softwareStack: [
      'Embedded C++ with calibration polynomial lookup tables',
      'REST Webhooks for alert dispatches',
      'Minimal HTML5 web configuration portal hosted on flash memory',
    ],
    architectureDetails: 'Analog frequency readouts are normalized through an empirical calibration curve. The state engine enforces hysteresis to prevent pump flutter near threshold values.',
    image: CLUB_IMAGES.aboutEngineeringTeam,
    contributors: ['Automation Team (Sample Student Project)'],
    githubUrl: 'https://github.com/sanchaar-club/smart-irrigation-node',
    completionDate: 'February 2026',
  },
  {
    id: 'proj-safety-gas-alert',
    title: 'Sensor-Based Industrial Safety & Gas Alert System',
    category: 'EMBEDDED SYSTEMS',
    status: 'ACTIVE BUILD',
    shortDesc: 'A fast-response hazardous gas (LPG, CO, Smoke) detector with hardware buzzer interlock, solenoid gas cutoff valve, and emergency SMS broadcaster.',
    overview: 'Engineered for chemistry laboratories and college workshops. In the event of dangerous gas accumulation, the device triggers optical-acoustic alarms, closes the physical supply pipeline via a solenoid valve, and transmits GSM emergency packets.',
    problemStatement: 'Laboratory gas leaks often go undetected until concentration reaches explosive or toxic thresholds, and standard consumer alarms lack physical valve interlock capabilities.',
    objectives: [
      'Detect combustible gases within 3 seconds of exceeding baseline threshold',
      'Instantly trigger an electro-mechanical gas solenoid shutoff without depending on network links',
      'Relay critical alert notifications simultaneously via GSM SMS and local siren',
    ],
    hardwareComponents: [
      'Microchip ATmega328P Microcontroller',
      'MQ-2 & MQ-7 Gas Sensor Modules with calibrated voltage dividers',
      'SIM800L Quad-Band GSM/GPRS Module',
      '12V Normally Closed Brass Solenoid Valve',
      '105dB Piezo Siren with High-Visibility Strobe LED Array',
    ],
    softwareStack: [
      'Bare-metal C with hardware timer watchdog',
      'AT Command Serial Engine for GSM packet delivery',
      'EEPROM threshold parameter storage',
    ],
    architectureDetails: 'Dual-threshold alarm logic: Threshold 1 initiates warning beacon and exhaust fan relay; Threshold 2 triggers gas solenoid cutoff and emergency SMS dispatches.',
    image: CLUB_IMAGES.gallerySolderingLab,
    contributors: ['ECE Safety Engineering Initiative'],
    githubUrl: 'https://github.com/sanchaar-club/hazard-gas-interlock',
    completionDate: 'Active Club Development',
  },
  {
    id: 'proj-pcb-modular-carrier',
    title: 'Custom Modular Carrier Board for ESP32 & STM32',
    category: 'PCB DESIGN',
    status: 'PROTOTYPE VERIFIED',
    shortDesc: 'A two-layer professional PCB breaking out common lab interfaces (CAN, RS-485, I2C, SPI) with onboard 3.3V/5V LDO power regulation and TVS protection.',
    overview: 'Designed by club members in KiCad to replace fragile jumper wire breadboards in departmental robotics projects. Features standardized industrial terminal blocks, onboard logic level conversion, and reverse-polarity protection.',
    problemStatement: 'Students waste hundreds of lab hours troubleshooting loose breadboard jumpers and burned microcontrollers caused by improper voltage connection during mobile robot testing.',
    objectives: [
      'Provide plug-and-play sockets for ESP32 and STM32 BlackPill pinouts',
      'Include onboard protection against reverse polarity, ESD, and inductive motor kickback',
      'Integrate screw-terminal connectors for heavy-gauge power wiring',
    ],
    hardwareComponents: [
      'Custom 2-layer FR-4 Printed Circuit Board (1.6mm thickness, HASL lead-free)',
      'TI TPS5430 High-Efficiency Step-Down Buck Converter (supports 9V-36V input)',
      'TVS Diodes on all communication line headers',
      'TCAN332 3.3V CAN Bus Transceiver',
      'MAX485 RS-485 Differential Driver',
    ],
    softwareStack: [
      'KiCad 8.0 EDA (Schematic & PCB Layout)',
      'FreeRouting Autorouting Benchmark & Manual Optimization',
      'JLCPCB Fabrication & SMT Assembly Profiling',
    ],
    architectureDetails: 'Split ground plane geometry separating noisy motor return currents from sensitive analog and digital MCU grounds to ensure crystal-clear sensor readings.',
    image: CLUB_IMAGES.gallerySolderingLab,
    contributors: ['PCB Design Group (Sample Student Project)'],
    githubUrl: 'https://github.com/sanchaar-club/modular-mcu-carrier-board',
    completionDate: 'January 2026',
  },
];
