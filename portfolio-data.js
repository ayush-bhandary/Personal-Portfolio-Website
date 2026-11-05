/**
 * PORTFOLIO DATA CONFIGURATION
 * ----------------------------
 * Ayush Girish Bhandary - Portfolio Data
 * Mechanical Engineering, Robotics & Aerospace
 */

window.PORTFOLIO_DATA = {
  // 1. Personal & Contact Information
  personal: {
    name: "Ayush Girish Bhandary",
    roleTitle: "Undergraduate Mechanical Engineer • Aerospace & Robotics Enthusiast",
    location: "BITS Pilani, Pilani Campus • Rajasthan, India",
    statusBadge: "Vice Captain & Mechanical Engineer @ CRISS Robotics",
    bio: "Mechanical Engineering undergraduate at BITS Pilani passionate about aerospace systems, rover robotics, and precision mechanical design.",
    resumeUrl: "#", // Add your PDF path here when ready, e.g. "Ayush_Bhandary_Resume.pdf"
    email: "f20220000@pilani.bits-pilani.ac.in", // Placeholder or personal email
    githubRepoUrl: "https://github.com/ayush-bhandary/Personal-Portfolio-Website",
    socials: [
      { name: "GitHub", url: "https://github.com/ayush-bhandary", icon: "github" },
      { name: "Portfolio Repo", url: "https://github.com/ayush-bhandary/Personal-Portfolio-Website", icon: "code" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Email", url: "mailto:ayush.bhandary@example.com", icon: "mail" }
    ]
  },

  // 2. Internship & Research Experience
  experience: [
    {
      role: "Research Intern (Practice School I)",
      company: "CSIR – National Aerospace Laboratories (CSIR-NAL)",
      companyUrl: "https://www.nal.res.in",
      location: "Bengaluru, India",
      period: "Practice School I",
      highlights: [
        "Conducted vibration and modal analysis of composite helicopter rotor blades using Altair HyperMesh and MSC Nastran, establishing a structural simulation framework for CSIR-NAL's upcoming Urban Air Taxi program.",
        "Formulated and implemented rotating blade dynamics in MATLAB using a coupled Timoshenko beam model (flapwise, lead-lag, and torsional modes) accounting for centrifugal stiffening effects.",
        "Generated Campbell diagrams to identify critical frequencies, avoid resonant crossings across operating RPM ranges, and resolved discrepancies between FEA and analytical natural frequency predictions.",
        "Programmed Momentum Theory, Blade Element Theory (BET), and Blade Element Momentum Theory (BEMT) in MATLAB to calculate spanwise induced velocity and aerodynamic load distributions."
      ],
      skills: ["HyperMesh", "MSC Nastran", "MATLAB", "BEMT", "Timoshenko Dynamics", "Aeroelasticity", "Composite FEA"]
    }
  ],

  // 3. Positions of Responsibility (Leadership)
  positionsOfResponsibility: [
    {
      title: "Vice Captain",
      organization: "CRISS Robotics (BITS Pilani)",
      location: "Pilani Campus",
      period: "Ongoing",
      highlights: [
        "Leading the flagship student rover team competing at the Australian Rover Challenge (ARC, Adelaide) and International Rover Challenge (IRC); CRISS Robotics was the first Indian team in history to qualify for the ARC.",
        "Overseeing multi-subsystem integration, project budgets, engineering timelines, and technical documentation.",
        "Representing CRISS Robotics to corporate sponsors, academic mentors, and international competition committees."
      ]
    },
    {
      title: "Mechanical Subsystem Lead",
      organization: "CRISS Robotics (BITS Pilani)",
      location: "Pilani Campus",
      period: "Ongoing",
      highlights: [
        "Directing the mechanical engineering division, reviewing CAD models, GD&T, FEA structural stress verifications, and DFM (Design for Manufacturing) prior to physical production.",
        "Coordinating subsystem workflows across chassis, pivot assemblies, robotic manipulators, and wheel drives to ensure zero fabrication bottlenecks and competition-ready reliability."
      ]
    }
  ],

  // 4. Projects Showcase (All Ongoing)
  projects: [
    {
      title: "Supersonic Flow over a Circular-Arc Hump (Compressible CFD)",
      status: "Ongoing",
      description: "Modelled 2D compressible supersonic airflow (inlet Mach M₁ = 2.5) over a circular-arc hump using CFD. Computed static pressure distributions and pressure coefficients (Cp) along the hump surface. Compared numerical CFD results against analytical Oblique Shock & Expansion Wave Theory as well as Linearized Supersonic Flow Theory. Generated detailed contours of static pressure, stagnation temperature, and local Mach number distributions.",
      techStack: ["CFD Simulation", "Compressible Flow", "Gas Dynamics", "Shock-Expansion Theory", "Linearized Aerodynamics"],
      githubUrl: "https://github.com/ayush-bhandary",
      liveUrl: "",
      featured: true
    },
    {
      title: "Spacecraft Propulsion Anomaly Diagnosis & Health Monitoring (ISRO PHM)",
      status: "Ongoing",
      description: "Developed machine learning pipelines for Prognostics and Health Management (PHM) on high-frequency (1 kHz) multi-channel pressure telemetry from an experimental spacecraft propulsion simulation rig (water hammer & acoustic modes across 4 thruster solenoid valves). Implemented models across 5 core diagnostics: binary normal/abnormal classification, bubble contamination anomaly detection & 8-point spatial localization, solenoid valve failure identification, valve opening ratio regression (0%–100%), and unknown anomaly isolation across unseen spacecraft units.",
      techStack: ["Python", "Time-Series Data Mining", "Signal Processing", "Feature Extraction", "ISRO Propulsion PHM"],
      githubUrl: "https://github.com/ayush-bhandary",
      liveUrl: "",
      featured: true
    },
    {
      title: "Real-Time Adaptive Frequency Hopf Oscillator on RP2040",
      status: "Ongoing",
      description: "Engineered an embedded real-time Adaptive Frequency Hopf Oscillator on an RP2040 microcontroller interfacing with a digital accelerometer (KXTJ3-1057 / BMA400). Programmed nonlinear dynamical learning rules to continuously track and phase-lock to rhythmic real-world motion signals in real-time. Conducted frequency spectrum verification in MATLAB, quantified adaptation lag across varying coupling strengths (ε) and learning factors (ν), and implemented multi-oscillator banks (M) with variable intrinsic frequencies.",
      techStack: ["C++ / Arduino", "RP2040 Microcontroller", "Accelerometers", "MATLAB", "Adaptive Oscillators"],
      githubUrl: "https://github.com/ayush-bhandary",
      liveUrl: "",
      featured: true
    },
    {
      title: "Pedestrian Dead Reckoning & IMU Sensor Fusion with Kalman Filtering",
      status: "Ongoing",
      description: "Designed an inertial pedestrian tracking and navigation pipeline using foot-mounted accelerometer and gyroscope telemetry. Evaluated cubic trajectory drift and error accumulation resulting from double integration of unconstrained acceleration data. Developed a Kalman Filter and multi-sensor fusion algorithms combining accelerometer and gyroscope streams to eliminate drift, reconstruct walking paths, and analyze gait mechanics.",
      techStack: ["MATLAB", "Kalman Filtering", "Sensor Fusion", "IMU & Inertial Navigation", "Dead Reckoning"],
      githubUrl: "https://github.com/ayush-bhandary",
      liveUrl: "",
      featured: true
    },
    {
      title: "CRISS Rover: Steering Pivot & Optimized Wheel Assembly",
      status: "Ongoing",
      description: "Engineered an independent steering pivot assembly and lightweight wheels for high-mobility Martian/Lunar terrain traversal at the Australian Rover Challenge (ARC). Applied topology optimization to the gearbox-to-wheel coupler in ANSYS Mechanical, reducing weight by 40% (Factor of Safety = 3). Programmed custom CAM G-code to CNC machine couplers in-house, cutting costs by 50%. Engineered hollow-spoke wheel hubs with a dual-material PETG-core and flexible TPU-shell (+30% diameter) for enhanced traction on fine sand.",
      techStack: ["ANSYS Mechanical", "Topology Optimization", "Fusion 360", "CNC / CAM", "TPU / PETG Prototyping"],
      githubUrl: "https://github.com/ayush-bhandary",
      liveUrl: "",
      featured: false
    },
    {
      title: "CRISS Rover: 6-DOF Robotic Manipulator",
      status: "Ongoing",
      description: "Designing a high-precision, 6-degree-of-freedom robotic arm capable of lifting an 8 kg payload for sample acquisition and panel operation tasks. Engineered custom 3D-printed cycloidal speed reducers delivering up to 220 Nm of theoretical torque with near-zero backlash. Constructed dedicated test benches to measure empirical gearbox efficiency and torque transmission losses. Developing custom brushless DC (BLDC) actuators for pivot joints to optimize power-to-weight ratio.",
      techStack: ["Actuator Design", "Cycloidal Drives", "BLDC Systems", "SolidWorks", "Experimental Test Rigs"],
      githubUrl: "https://github.com/ayush-bhandary",
      liveUrl: "",
      featured: false
    },
    {
      title: "Inspired Karters Gravity: Competition Go-Kart Chassis & Dynamics",
      status: "Ongoing",
      description: "Designed, analyzed, and fabricated the structural tubular space frame chassis, body aerodynamic panels, and component mounting systems for a high-performance competition go-kart. Validated chassis torsional rigidity and impact safety via static structural FEA and welded the frame in-house. Selected as one of three official drivers to compete at the Go-Kart Design Challenge (GKDC) 2026 at Kari Motor Speedway, Coimbatore.",
      techStack: ["Chassis Design", "Structural FEA", "TIG/MIG Welding", "Vehicle Dynamics", "GKDC 2026 Driver"],
      githubUrl: "https://github.com/ayush-bhandary",
      liveUrl: "",
      featured: false
    },
    {
      title: "Helicopter Blade Dynamics & BEMT Aero Solver",
      status: "Ongoing",
      description: "MATLAB-based analytical solver developed during research at CSIR-NAL implementing Blade Element Momentum Theory (BEMT) and rotating Timoshenko beam mechanics with centrifugal stiffening. Computes natural modes, frequency response, and generates Campbell resonance diagrams for advanced urban air taxi rotor designs.",
      techStack: ["MATLAB", "Aeroelasticity", "BEMT", "Campbell Diagrams", "Nastran"],
      githubUrl: "https://github.com/ayush-bhandary",
      liveUrl: "",
      featured: false
    }
  ],

  // 5. Technical Skills
  skills: {
    "Simulation & Structural FEA": [
      "ANSYS Mechanical",
      "Altair HyperMesh",
      "MSC Nastran",
      "Finite Element Analysis (FEA)",
      "Topology Optimization",
      "Modal & Vibration Analysis"
    ],
    "Aerodynamics & Thermal Fluids": [
      "Compressible Flow / CFD",
      "Gas Dynamics",
      "Blade Element Momentum Theory (BEMT)",
      "Shock & Expansion Wave Theory",
      "Campbell Diagram Analysis",
      "Timoshenko Beam Dynamics"
    ],
    "Robotics & Control Systems": [
      "AI for Robotics",
      "Adaptive Hopf Oscillators",
      "Kalman Filtering & Sensor Fusion",
      "Inertial Navigation (IMU)",
      "Cycloidal Actuators & BLDC Drives"
    ],
    "CAD & Manufacturing": [
      "Fusion 360",
      "SolidWorks",
      "CATIA",
      "CNC Machining (CAM / G-code)",
      "3D Printing / FDM (TPU, PETG, PA12)",
      "Welding & Rapid Prototyping"
    ],
    "Programming & Data Mining": [
      "MATLAB",
      "C++ / Arduino",
      "Python (Time-Series & ML)",
      "C",
      "LaTeX"
    ]
  },

  // 6. Education
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Mechanical Engineering",
      institution: "Birla Institute of Technology and Science, Pilani (BITS Pilani, Pilani Campus)",
      location: "Pilani, Rajasthan, India",
      period: "Undergraduate",
      gpa: "Pilani Campus",
      coursework: [
        "Gas Dynamics",
        "AI for Robotics",
        "Machines and Mechanisms",
        "Mechanics of Solids",
        "Advanced Mechanics of Solids",
        "Data Mining in Mechanical Sciences",
        "Fluid Mechanics",
        "Materials Science and Engineering",
        "Applied Thermodynamics",
        "Thermodynamics",
        "Heat Transfer",
        "Manufacturing Processes",
        "Advanced Manufacturing Processes",
        "Mathematics I, II & III",
        "Probability and Statistics"
      ]
    }
  ]
};
