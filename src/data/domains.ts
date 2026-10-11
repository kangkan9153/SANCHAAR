export interface TechDomain {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyTech: string[];
  equipment: string[];
  learningOutcomes: string[];
  image: string;
}

export const TECHNOLOGY_DOMAINS: TechDomain[] = [
  {
    id: 'iot',
    title: 'Internet of Things',
    shortDesc: 'Connected devices, wireless communication, sensor networks, and real-time monitoring.',
    fullDesc: 'We build end-to-end connected architectures integrating edge sensors with lightweight transport protocols like MQTT, CoAP, and HTTP. Members learn cloud dashboard integration, over-the-air firmware updates, and distributed telemetry collection.',
    keyTech: ['ESP32 / ESP8266', 'MQTT & WebSockets', 'FreeRTOS', 'Node-RED', 'Edge InfluxDB / Grafana'],
    equipment: ['Wi-Fi & BLE Transceivers', 'LoRa SX1278 Modules', 'Environmental Sensor Arrays', 'Logic Analyzers'],
    learningOutcomes: [
      'Wireless mesh and peer-to-peer telemetry networking',
      'Power budget optimization for remote battery-powered nodes',
      'Real-time data visualization and cloud broker deployment',
    ],
    image: '/src/assets/images/iot_smart_hardware_1791620940762.jpg',
  },
  {
    id: 'robotics',
    title: 'Robotics & Automation',
    shortDesc: 'Robot control, motion systems, motor drivers, and autonomous behaviour.',
    fullDesc: 'Focused on multi-axis kinematics, differential-drive and holonomic chassis development, PID control loops, and autonomous obstacle navigation using ultrasonic, LiDAR, and computer vision sensors.',
    keyTech: ['ROS / Micro-ROS', 'Differential & Mecanum Kinematics', 'H-Bridge & BLDC ESC Drivers', 'Closed-Loop PID Control'],
    equipment: ['Planetary DC Motors with Encoders', '360° 2D LiDAR Sensors', 'Servo Gimbal Assemblies', 'Aluminium Extrusion Chassis'],
    learningOutcomes: [
      'Mathematical modeling of mobile robot kinematics',
      'Sensor fusion with IMU and wheel odometry',
      'State-machine architecture for autonomous mission execution',
    ],
    image: '/src/assets/images/project_rover_prototype_1791620953593.jpg',
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    shortDesc: 'Microcontrollers, firmware development, interfacing, and hardware-software integration.',
    fullDesc: 'Deep-dive into bare-metal C/C++, register-level programming, interrupt service routines, timer capture, Direct Memory Access (DMA), and low-level peripheral drivers across ARM Cortex-M and Xtensa architectures.',
    keyTech: ['STM32 (ARM Cortex-M4)', 'ESP-IDF & CMake', 'AVR & PIC Microcontrollers', 'I2C / SPI / UART / CAN Bus'],
    equipment: ['ST-LINK V2 Debuggers', 'Saleae Logic Analyzers', 'Digital Storage Oscilloscopes', 'Benchtop DC Power Supplies'],
    learningOutcomes: [
      'Hardware communication bus protocol analysis and debugging',
      'Bare-metal peripheral register manipulation without bloated abstractions',
      'Deterministic interrupt handling and RTOS task synchronization',
    ],
    image: '/src/assets/images/hero_robotics_lab_1791620915867.jpg',
  },
  {
    id: 'pcb',
    title: 'PCB Design & Prototyping',
    shortDesc: 'Circuit design, schematic development, PCB layout, and prototyping.',
    fullDesc: 'Bridging breadboard concepts to industrial-grade manufactured hardware. Students learn schematic capture, component footprints, ground planes, impedance control, EMI/EMC prevention, and surface-mount soldering.',
    keyTech: ['KiCad 8.0 EDA', 'EasyEDA Pro', 'BOM & Gerber Generation', 'SMD Stencil Soldering'],
    equipment: ['Temperature-Controlled Soldering Stations', 'Reflow Hot Plate', 'Magnification Inspection Station', 'Desoldering Vacuum Guns'],
    learningOutcomes: [
      'Multi-layer schematic capture and PCB layout routing rules',
      'Signal integrity, trace width calculation, and decoupling layout',
      'SMD assembly and post-assembly continuity testing',
    ],
    image: '/src/assets/images/gallery_soldering_lab_1791620964393.jpg',
  },
  {
    id: 'sensors',
    title: 'Sensors & Electronics',
    shortDesc: 'Sensor integration, signal acquisition, analog circuits, and electronic instrumentation.',
    fullDesc: 'Study of analog-to-digital conversion, instrumentation amplifiers, active filters, bridge circuits, calibration matrices, and precision measurement for physical variables including vibration, acoustics, and gas concentration.',
    keyTech: ['Analog Filter Design', 'Operational Amplifiers (Op-Amps)', 'Precision ADC / DAC Converters', 'Wheatstone Bridges'],
    equipment: ['Digital Multimeters (6.5 digit precision)', 'Function Signal Generators', 'Sensor Calibration Chambers', 'Thermocouple Calibrators'],
    learningOutcomes: [
      'Low-noise analog signal conditioning and filtering',
      'Sensor calibration curves, sensitivity drift, and linearization',
      'High-speed transient acquisition and fault-tolerant interfacing',
    ],
    image: '/src/assets/images/about_engineering_team_1791620929739.jpg',
  },
  {
    id: 'intelligent',
    title: 'Intelligent Systems',
    shortDesc: 'Automation, computer vision, intelligent sensing, and AI-assisted hardware applications.',
    fullDesc: 'Deploying edge machine learning models (TinyML) and OpenCV computer vision pipelines onto single-board computers and edge microcontrollers for real-time visual inspection, object tracking, and predictive hardware telemetry.',
    keyTech: ['TinyML / TensorFlow Lite Micro', 'OpenCV & Python', 'Raspberry Pi 5 / Coral Edge TPU', 'Object Tracking & Edge AI'],
    equipment: ['Wide-Angle Global Shutter Cameras', 'Edge TPU Accelerators', 'Depth Sensing Modules', 'GPU Embedded Developer Kits'],
    learningOutcomes: [
      'Quantization and deployment of neural nets on resource-constrained microcontrollers',
      'Color segmentation and visual servoing for robotic manipulation',
      'Predictive maintenance using vibration spectrum anomaly classification',
    ],
    image: '/src/assets/images/project_rover_prototype_1791620953593.jpg',
  },
];
