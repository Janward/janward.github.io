// Language Translations
const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navExperience: "Experience",
        navProjects: "Projects",
        navTerminal: "CLI Terminal",
        navContact: "Contact",

        // Hero Section
        heroBadgeStatus: "Open to IT Infrastructure & Network career opportunities",
        heroTitle: "IT Infrastructure",
        heroTitleHighlight: "& Network Specialist",
        heroDescription: "IT infrastructure specialist with 5+ years in IT and nearly 4 years managing corporate networks, server virtualization (Proxmox), physical security (120+ CCTV cameras), and automated backups to support stable operations for up to ±200 users.",
        skillCard4Desc: "Understands both analog and digital CCTV systems: coaxial and UTP cabling, DVR and NVR, cable topology design, and physical and network maintenance. Brings analog CCTV DVRs online over the network as long as the DVR has an ethernet port, and shares DVR storage when the device supports it.",
        skillCard5Desc: "Schedules automated backups with cron jobs (Linux) and Task Scheduler (Windows). Task commands are kept in a single script file that mirrors data to a storage target or folder, either on the PC itself or across the network.",
        project5Title: "Point-to-Point Wireless Link Between Buildings (±5 km)",
        project5Desc: "Built wireless communication links between buildings roughly 5 km apart using Ubiquiti equipment, from distance and height estimation and antenna installation to link alignment.",
        project5H1: "Aligned antennas (pointing) between four building locations manually using a phone compass and digital maps, along with distance estimates and height differences between buildings.",
        project5H2: "Used Ubiquiti Rocket M5, Rocket M2, and LiteBeam AC equipment.",
        project5H3: "Handled antenna mounting on towers, with routine maintenance now delegated to the technician team.",
        skillCard1Title: "Network & MikroTik",
        skillCard1Desc: "Installation, configuration, and troubleshooting of LAN networks, plus MikroTik configuration covering subnetting, VLAN, port forwarding, and firewall. Built point-to-point wireless links between buildings up to ±5 km using Ubiquiti equipment.",
        skillCard2Title: "Virtualization",
        skillCard2Desc: "Managed production virtual machines with Proxmox VE and VirtualBox (Windows Server host) for the past 2 years. Hyper-V is used to test operating systems and applications before production, since it is less efficient on hardware resources.",
        skillCard3Title: "Server & File Sharing",
        skillCard3Desc: "Set up and administered file sharing on Windows Server and OpenMediaVault (OMV) for 3 years, serving around 90 users across the head office and several branches, with access rights grouped by division. Also managed internal storage services Nextcloud and Immich.",
        skillCard6Title: "Troubleshooting & IT Support",
        skillCard6Desc: "Diagnosis and repair of computers, laptops, and printers (inkjet, multi-ply dot matrix, and label/barcode printers), covering hardware and software, including Windows reinstallation and access recovery for forgotten passwords. Experienced in restoring systems after power incidents (UPS, power supply, HDD).",
        btnContactMe: "Contact Me",
        btnTryTerminal: "Try CLI Terminal",
        locationText: "Cengkareng, West Jakarta",

        // Dashboard
        dashboardTitle: "SYSTEM MONITOR - DEMO",
        dashboardUptime: "Uptime: 99.98%",
        graphLatency: "Latency Monitor (ICMP)",
        statsPhysicalServers: "Physical Servers",
        statsVirtualMachines: "Virtual Machines (Proxmox)",
        statsActiveUsers: "Active Users Connected",
        statsCCTVEndpoints: "CCTV Security Endpoints",
        statsOnline: "Online",
        statsActive: "Active",
        statsLimit: "/ 200 Limit",
        statsNodesActive: "Nodes Active",
        backupLabel: "Last Automation Backup",
        backupSuccess: "Success",

        // About Section
        aboutTitle: "About Me",
        aboutHeading: "Hello, I'm Janward Alfredo",
        aboutPara1: "I am an <strong>IT Infrastructure & Network Specialist</strong> committed to maintaining system availability, server architecture scalability, network security, and disaster recovery.",
        aboutPara2: "For more than 5 years in information technology (nearly 4 of them in corporate infrastructure), I have designed and maintained corporate LAN/WAN networks, managed Proxmox virtualization servers, built automated backup systems (Automation Backup), and led the installation and maintenance of a mid-scale CCTV system (120+ cameras).",
        aboutPara3: "I enjoy complex technical challenges, from disaster recovery due to critical electrical incidents to structured network cabling design, and always strive to deliver reliable and efficient infrastructure solutions.",
        educationTitle: "Education",
        eduYear1: "2018 - Graduated",
        eduDegree1: "Bachelor of Engineering in Informatics",
        eduSchool1: "Mikroskill Medan",
        eduGPA: "GPA: 3.21",
        eduYear2: "2011 - Graduated",
        eduDegree2: "Computer & Network Engineering (TKJ)",
        eduSchool2: "SMK TELKOM SANDHY PUTRA MEDAN",

        // Skills Section
        skillsTitle: "Technical Skills",
        skillNetwork: "Network & Server Management",
        skillNetworkDesc: "Managing local (LAN) and wide area (WAN) network infrastructure using Mikrotik, managed switches, and stable routing configurations.",
        skillVirtual: "Virtualization (Proxmox)",
        skillVirtualDesc: "Migrating physical servers to virtual machines (VM), optimizing hardware resource allocation, VM performance monitoring, and hypervisor cluster management.",
        skillServer: "Server Administration & Cloud",
        skillServerDesc: "Administrating Windows Server 2019 operating systems, OpenMediaVault (OMV), and internal cloud storage such as Nextcloud & Immich.",
        skillCCTV: "Security Systems (CCTV)",
        skillCCTVDesc: "Cable topology design, DVR/NVR installation, IP camera configuration, centralized monitoring system integration, and CCTV physical & network maintenance.",
        skillBackup: "Backup & Automation",
        skillBackupDesc: "Developing automated server and database backup scheduling using shell scripting (PowerShell/Bash) to minimize data loss risk.",
        skillDisaster: "Troubleshooting & Recovery",
        skillDisasterDesc: "Diagnosing component damage from power surges, UPS/Power Supply recovery, HDD cluster repair, and incident prevention audits.",

        // Experience Section
        experienceTitle: "Work Experience",
        expRole1: "SPV IT Network & Hardware",
        expCompany1: "PT Nico Urban Indonesia",
        expDuration1: "January 2023 - Present",
        expTask1a: "Managing company IT infrastructure including <strong>5+ physical servers and 5 virtual machines (Proxmox)</strong> to support operational smoothness of ±200 active users.",
        expTask1b: "Administrating Windows Server 2019, OMV storage, and integrating internal services <strong>Nextcloud and Immich</strong> as centralized storage media.",
        expTask1c: "Designing topology, configuring routing, and installing network devices (<strong>Mikrotik</strong>, managed/unmanaged switches) to provide stable LAN/WAN connectivity.",
        expTask1d: "Leading installation, configuration, and maintenance of <strong>integrated CCTV DVR/NVR system with approximately 120+ points</strong> to ensure comprehensive physical security coverage.",
        expTask1e: "Creating automated backup scheduling programs for server data and databases to accelerate data recovery processes in case of incidents.",
        expTask1f: "Handling critical electrical incidents (voltage surges) that damaged power supplies, UPS modules, and server hard drives, leading <strong>rapid mitigation processes</strong> and implementing preventive audits.",
        expTask1g: "Managing hardware procurement, coordinating with external vendors, and leading daily IT technician teams to ensure internal IT service standards run efficiently.",
        expRole2: "Teacher of Information & Communication Technology (ICT)",
        expCompany2: "Yayasan Sultan Iskandar Muda Medan",
        expDuration2: "October 2018 - March 2022",
        expTask2a: "Teaching ICT subject to vocational students with theoretical learning methods and practical orientation in basic networking and computer assembly.",
        expTask2b: "Managing school computer laboratory infrastructure including maintenance of ±40 computers, lab servers, and local network configuration.",
        expTask2c: "Performing hardware troubleshooting, OS installation, IP address allocation, and providing computer lab internet access.",
        expTask2d: "Providing technical support (IT Support) for foundation internal operations including software administration installation and school environment Wi-Fi connection maintenance.",

        // Projects Section
        projectsTitle: "Project Details",
        filterAll: "All Projects",
        filterServers: "Infrastructure & Server",
        filterNetworks: "Networks",
        filterSecurity: "Security Systems",

        projectTitle1: "Automation Backup Server",
        projectCat1: "Servers & Automation",
        projectDesc1: "Building automated backup scripts scheduled for SQL databases and server directories to external storage media (NAS/OMV).",
        projectHighlight1a: "Reduces risk of human error in daily manual backup tasks.",
        projectHighlight1b: "Uses shell scripting & internal cloud storage API integration.",
        projectHighlight1c: "Accelerates Recovery Time Objective (RTO) when system failures occur.",

        projectTitle2: "CCTV Implementation & Upgrade (120+ Points)",
        projectCat2: "Security & Hardware",
        projectDesc2: "Leading IP & Analog camera surveillance system installation and upgrade project with a total of 120+ monitoring points in factory and operational building areas.",
        projectHighlight2a: "Designing camera distribution diagram to eliminate blind spots.",
        projectHighlight2b: "Configuring centralized DVR/NVR server with secure local streaming access for management.",
        projectHighlight2c: "Connecting camera network to separate VLAN to avoid internal data bandwidth interference.",

        projectTitle3: "Server Infrastructure Modernization",
        projectCat3: "Virtualization",
        projectDesc3: "Migrating legacy physical servers to Proxmox Hypervisor-based virtualization environment to save power efficiency and hardware capacity.",
        projectHighlight3a: "Creating and configuring 5+ virtual machines (VMs) to divide web server, NAS, and database tasks.",
        projectHighlight3b: "Implementing dynamic CPU/RAM resource allocation to ensure balanced server load.",
        projectHighlight3c: "Building OMV-based storage, Nextcloud, and Immich for collaborative file sharing.",

        projectTitle4: "Network Cable Management & Organization",
        projectCat4: "Network Engineering",
        projectDesc4: "Redesigning and organizing network cable distribution (LAN) in messy central server room for connection security.",
        projectHighlight4a: "Labeling hundreds of LAN cable ports and organizing with new patch panel.",
        projectHighlight4b: "Preventing network signal disruption risk from bent or loose cable damage.",
        projectHighlight4c: "Shortening port troubleshooting time from several hours to just minutes.",

        // Terminal Section
        terminalTitle: "Interactive Network Console (CLI)",
        terminalSubtitle: "Enter terminal commands to interact directly with my portfolio database.",
        terminalConnecting: "Connecting to janward-alfredo.id [192.168.1.100] via SSH...",
        terminalEstablished: "Connection Established. Welcome to Janward's Server Console v1.5.0!",
        terminalHelp: "Type help to see a list of supported commands.",
        terminalPrompt: "guest@janward-cli:~$",
        terminalSSH: "ssh active (port 22)",

        // Contact Section
        contactTitle: "Contact Me",
        contactHeading: "Get In Touch",
        contactDesc: "Do you have a question, a career opportunity in IT infrastructure, or just want to discuss networking and server virtualization? You can reach me through the details below:",
        contactDirectly: "Contact Directly",
        contactEmail: "Official Email",
        contactPhone: "Phone / WhatsApp Number",
        contactLocation: "Domicile Location",
        contactLinkedIn: "LinkedIn",
        btnSendMessage: "Send Message",
        formName: "Full Name",
        formNamePlaceholder: "Enter your full name",
        formMessage: "Your Message",
        formMessagePlaceholder: "Write the details of your message or questions here...",

        // Footer
        footerCopyright: "© 2026 Janward Alfredo. All rights reserved.",
        footerTech: "Built with HTML5, CSS3 & Vanilla JS | High Performance & Light Weight",
    },
    id: {
        // Navigation
        navHome: "Beranda",
        navAbout: "Tentang",
        navSkills: "Keahlian",
        navExperience: "Pengalaman",
        navProjects: "Proyek",
        navTerminal: "CLI Terminal",
        navContact: "Kontak",

        // Hero Section
        heroBadgeStatus: "Terbuka untuk peluang karier IT Infrastructure & Network",
        heroTitle: "IT Infrastructure",
        heroTitleHighlight: "& Network Specialist",
        heroDescription: "Spesialis infrastruktur IT dengan pengalaman 5+ tahun di bidang TIK dan hampir 4 tahun mengelola jaringan korporat, virtualisasi server (Proxmox), keamanan fisik (120+ CCTV), dan otomatisasi backup untuk mendukung stabilitas operasional hingga ±200 pengguna.",
        skillCard4Desc: "Memahami sistem CCTV analog maupun digital: kabel coaxial dan UTP, DVR dan NVR, perancangan topologi kabel, serta pemeliharaan fisik dan jaringan. Mengonlinekan DVR CCTV analog melalui jaringan selama DVR memiliki port ethernet, serta berbagi penyimpanan DVR bila perangkat mendukung.",
        skillCard5Desc: "Menjadwalkan backup otomatis dengan cron job (Linux) dan Task Scheduler (Windows). Perintah tugas disimpan dalam satu berkas script untuk mirroring ke storage atau folder tertentu, baik di PC itu sendiri maupun di jaringan.",
        project5Title: "Link Wireless Point-to-Point Antar Gedung (±5 km)",
        project5Desc: "Membangun jalur komunikasi nirkabel antar gedung berjarak sekitar 5 km menggunakan perangkat Ubiquiti, mulai dari estimasi jarak dan ketinggian, pemasangan antena, hingga penyelarasan link.",
        project5H1: "Menyelaraskan arah antena (pointing) antar empat lokasi gedung secara manual menggunakan kompas ponsel dan peta digital, disertai estimasi jarak dan perbedaan ketinggian antar gedung.",
        project5H2: "Menggunakan perangkat Ubiquiti Rocket M5, Rocket M2, dan LiteBeam AC.",
        project5H3: "Menangani pemasangan antena di tiang, dengan perawatan rutin kini didelegasikan ke tim teknisi.",
        skillCard1Title: "Network & MikroTik",
        skillCard1Desc: "Instalasi, konfigurasi, dan troubleshooting jaringan LAN, serta konfigurasi MikroTik meliputi subnetting, VLAN, port forwarding, dan firewall. Membangun link wireless point-to-point antar gedung sejauh ±5 km menggunakan perangkat Ubiquiti.",
        skillCard2Title: "Virtualisasi",
        skillCard2Desc: "Mengelola mesin virtual produksi dengan Proxmox VE dan VirtualBox (host Windows Server) selama 2 tahun terakhir. Hyper-V digunakan untuk menguji OS dan aplikasi sebelum masuk produksi, karena kurang efisien terhadap sumber daya hardware.",
        skillCard3Title: "Server & File Sharing",
        skillCard3Desc: "Setup dan administrasi folder sharing berbasis Windows Server maupun OpenMediaVault (OMV) selama 3 tahun, untuk sekitar 90 pengguna di kantor pusat dan beberapa cabang, dengan hak akses dikelompokkan per divisi. Juga mengelola layanan penyimpanan internal Nextcloud dan Immich.",
        skillCard6Title: "Troubleshooting & IT Support",
        skillCard6Desc: "Diagnosis dan perbaikan komputer, laptop, dan printer (inkjet, dot matrix multi-ply, hingga printer label/barcode), baik hardware maupun software, termasuk instalasi ulang Windows dan pemulihan akses saat password terlupa. Berpengalaman memulihkan sistem setelah insiden kelistrikan (UPS, power supply, HDD).",
        btnContactMe: "Hubungi Saya",
        btnTryTerminal: "Coba CLI Terminal",
        locationText: "Cengkareng, Jakarta Barat",

        // Dashboard
        dashboardTitle: "SYSTEM MONITOR - DEMO",
        dashboardUptime: "Uptime: 99.98%",
        graphLatency: "Latency Monitor (ICMP)",
        statsPhysicalServers: "Physical Servers",
        statsVirtualMachines: "Virtual Machines (Proxmox)",
        statsActiveUsers: "Active Users Connected",
        statsCCTVEndpoints: "CCTV Security Endpoints",
        statsOnline: "Online",
        statsActive: "Active",
        statsLimit: "/ 200 Limit",
        statsNodesActive: "Nodes Active",
        backupLabel: "Last Automation Backup",
        backupSuccess: "Success",

        // About Section
        aboutTitle: "Tentang Saya",
        aboutHeading: "Halo, Saya Janward Alfredo",
        aboutPara1: "Saya adalah seorang <strong>IT Infrastructure & Network Specialist</strong> dengan komitmen tinggi dalam menjaga ketersediaan sistem, skalabilitas arsitektur server, keamanan data, dan efisiensi infrastruktur fisik maupun virtual.",
        aboutPara2: "Selama lebih dari 5 tahun berkarir di bidang teknologi informasi (hampir 4 tahun terakhir di infrastruktur korporat), saya telah merancang dan memelihara jaringan LAN/WAN korporat, mengelola server virtualisasi dengan Proxmox, mendesain sistem pencadangan otomatis (Automation Backup), serta memimpin proyek pemasangan dan perawatan CCTV berskala menengah (120+ titik kamera).",
        aboutPara3: "Saya menyukai tantangan teknis kompleks, mulai dari pemulihan bencana (disaster recovery) akibat insiden kelistrikan kritis hingga penataan kabel jaringan terstruktur demi kemudahan pemeliharaan jangka panjang.",
        educationTitle: "Pendidikan",
        eduYear1: "2018 - Lulus",
        eduDegree1: "Sarjana Teknik Informatika",
        eduSchool1: "Mikroskill Medan",
        eduGPA: "IPK: 3.21",
        eduYear2: "2011 - Lulus",
        eduDegree2: "Teknik Komputer & Jaringan (TKJ)",
        eduSchool2: "SMK TELKOM SANDHY PUTRA MEDAN",

        // Skills Section
        skillsTitle: "Keahlian Teknis",
        skillNetwork: "Network & Server Management",
        skillNetworkDesc: "Mengelola infrastruktur jaringan lokal (LAN) maupun luas (WAN) menggunakan Mikrotik, managed switch, dan konfigurasi routing yang stabil.",
        skillVirtual: "Virtualization (Proxmox)",
        skillVirtualDesc: "Migrasi server fisik ke mesin virtual (VM), optimasi alokasi resource hardware, monitoring performa VM, dan manajemen kluster hypervisor.",
        skillServer: "Server Administration & Cloud",
        skillServerDesc: "Mengadministrasikan sistem operasi Windows Server 2019, OpenMediaVault (OMV), serta penyimpanan cloud internal seperti Nextcloud & Immich.",
        skillCCTV: "Security Systems (CCTV)",
        skillCCTVDesc: "Perancangan topologi kabel, instalasi DVR/NVR, konfigurasi kamera IP, integrasi sistem pemantauan terpusat, dan pemeliharaan fisik & jaringan CCTV.",
        skillBackup: "Backup & Automation",
        skillBackupDesc: "Mengembangkan penjadwalan backup server dan database otomatis menggunakan shell scripting (PowerShell/Bash) guna meminimalkan risiko kehilangan data.",
        skillDisaster: "Troubleshooting & Recovery",
        skillDisasterDesc: "Mendiagnosis kerusakan komponen akibat lonjakan listrik, pemulihan UPS/Power Supply, perbaikan kluster HDD, dan audit pencegahan insiden berikutnya.",

        // Experience Section
        experienceTitle: "Riwayat Pengalaman",
        expRole1: "SPV IT Network & Hardware",
        expCompany1: "PT Nico Urban Indonesia",
        expDuration1: "Januari 2023 - Sekarang",
        expTask1a: "Mengelola infrastruktur IT perusahaan yang mencakup <strong>5+ server fisik dan 5 virtual machine (Proxmox)</strong> untuk mendukung kelancaran operasional ±200 pengguna.",
        expTask1b: "Mengadministrasikan server Windows Server 2019, penyimpanan OMV, serta integrasi layanan internal <strong>Nextcloud dan Immich</strong> sebagai media penyimpanan terpusat yang aman.",
        expTask1c: "Merancang topologi, konfigurasi routing, serta instalasi perangkat jaringan (<strong>Mikrotik</strong>, managed/unmanaged switch) guna menyediakan konektivitas LAN/WAN berkecepatan tinggi yang aman.",
        expTask1d: "Memimpin instalasi, konfigurasi, dan maintenance sistem <strong>CCTV DVR/NVR terpadu sebanyak 120+ titik</strong> untuk menjamin cakupan keamanan fisik yang maksimal di area pabrik/kantor.",
        expTask1e: "Membuat program pencadangan otomatis (<strong>Automation Backup</strong>) terjadwal untuk server data dan database demi mempercepat proses pemulihan data jika terjadi kendala.",
        expTask1f: "Menangani insiden kelistrikan kritis (lonjakan voltase) yang merusak power supply, modul UPS, dan hard disk server secara cepat dan memimpin proses <strong>mitigasi data recovery</strong> hingga operasional normal kembali.",
        expTask1g: "Mengelola pengadaan hardware, koordinasi dengan vendor luar, serta memimpin tim teknisi IT harian untuk memastikan standar pelayanan IT internal berjalan efisien.",
        expRole2: "Guru TIK (Teknologi Informasi & Komunikasi)",
        expCompany2: "Yayasan Sultan Iskandar Muda Medan",
        expDuration2: "Oktober 2018 - Maret 2022",
        expTask2a: "Mengajar bidang studi TIK bagi siswa SMK dengan metode pembelajaran teoritis dan berorientasi praktik jaringan dasar dan perakitan komputer.",
        expTask2b: "Mengelola infrastruktur laboratorium komputer sekolah yang mencakup pemeliharaan ±40 unit komputer, server lab, dan konfigurasi jaringan lokal.",
        expTask2c: "Melakukan troubleshooting hardware, instalasi OS, pembagian alokasi IP address, dan penyediaan akses internet lab komputer.",
        expTask2d: "Memberikan bantuan teknis (IT Support) untuk operasional internal yayasan termasuk instalasi software administrasi dan pemeliharaan koneksi Wi-Fi lingkungan sekolah.",

        // Projects Section
        projectsTitle: "Detail Proyek",
        filterAll: "Semua Proyek",
        filterServers: "Infrastruktur & Server",
        filterNetworks: "Jaringan",
        filterSecurity: "Sistem Keamanan",

        projectTitle1: "Automation Backup Server",
        projectCat1: "Servers & Automation",
        projectDesc1: "Membangun script pencadangan otomatis (automation backup) terjadwal untuk database SQL dan direktori server ke media penyimpanan eksternal (NAS/OMV).",
        projectHighlight1a: "Mengurangi risiko human error dalam tugas pencadangan harian secara manual.",
        projectHighlight1b: "Menggunakan shell scripting & integrasi API penyimpanan awan internal.",
        projectHighlight1c: "Mempercepat waktu pemulihan (Recovery Time Objective) saat terjadi kegagalan sistem.",

        projectTitle2: "Implementasi & Upgrade CCTV (120+ Titik)",
        projectCat2: "Security & Hardware",
        projectDesc2: "Memimpin proyek instalasi dan upgrade kamera pengawas berbasis IP & Analog dengan total 120+ titik pantau di area pabrik dan gedung operasional.",
        projectHighlight2a: "Merancang diagram sebaran kamera untuk meniadakan area titik buta (blind spot).",
        projectHighlight2b: "Mengkonfigurasi server DVR/NVR terpusat dengan akses streaming lokal yang aman bagi manajemen.",
        projectHighlight2c: "Menghubungkan jaringan kamera ke VLAN terpisah untuk menghindari interferensi bandwidth data internal.",

        projectTitle3: "Modernisasi Infrastruktur Server",
        projectCat3: "Virtualization",
        projectDesc3: "Melakukan migrasi server fisik lama ke lingkungan virtualisasi berbasis Hypervisor Proxmox guna menghemat efisiensi penggunaan daya dan kapasitas hardware.",
        projectHighlight3a: "Membuat dan mengonfigurasi 5+ mesin virtual (VM) untuk membagi tugas web server, NAS, dan database.",
        projectHighlight3b: "Mengimplementasikan alokasi beban resource CPU/RAM dinamis agar beban server seimbang.",
        projectHighlight3c: "Membangun penyimpanan berbasis OMV, Nextcloud, dan Immich untuk file sharing kolaboratif.",

        projectTitle4: "Manajemen & Penataan Kabel Jaringan",
        projectCat4: "Network Engineering",
        projectDesc4: "Mendesain ulang dan merapikan kabel distribusi jaringan (LAN) di ruang server pusat yang berantakan demi keamanan koneksi.",
        projectHighlight4a: "Melabeli ratusan port kabel LAN dan melakukan penataan rapi dengan patch panel baru.",
        projectHighlight4b: "Mencegah risiko gangguan sinyal jaringan akibat lekukan kabel yang patah atau longgar.",
        projectHighlight4c: "Mempersingkat waktu pencarian port bermasalah (troubleshooting) dari beberapa jam menjadi hitungan menit.",

        // Terminal Section
        terminalTitle: "Interactive Network Console (CLI)",
        terminalSubtitle: "Masukkan perintah terminal untuk berinteraksi langsung dengan database portofolio saya.",
        terminalConnecting: "Connecting to janward-alfredo.id [192.168.1.100] via SSH...",
        terminalEstablished: "Connection Established. Welcome to Janward's Server Console v1.5.0!",
        terminalHelp: "Ketik help untuk melihat daftar perintah yang didukung.",
        terminalPrompt: "guest@janward-cli:~$",
        terminalSSH: "ssh active (port 22)",

        // Contact Section
        contactTitle: "Hubungi Saya",
        contactHeading: "Hubungi Secara Langsung",
        contactDesc: "Ada pertanyaan, peluang karier di bidang infrastruktur IT, atau sekadar ingin berdiskusi mengenai jaringan dan virtualisasi server? Anda bisa menghubungi saya melalui detail di bawah ini:",
        contactDirectly: "Hubungi Secara Langsung",
        contactEmail: "Email Resmi",
        contactPhone: "Nomor Handphone / WA",
        contactLocation: "Lokasi Domisili",
        contactLinkedIn: "LinkedIn",
        btnSendMessage: "Kirim Pesan",
        formName: "Nama Lengkap",
        formNamePlaceholder: "Masukkan nama lengkap Anda",
        formMessage: "Pesan Anda",
        formMessagePlaceholder: "Tuliskan detail pesan atau pertanyaan Anda di sini...",

        // Footer
        footerCopyright: "© 2026 Janward Alfredo. Seluruh hak cipta dilindungi.",
        footerTech: "Built with HTML5, CSS3 & Vanilla JS | High Performance & Light Weight",
    }
};

// Initialize language from localStorage or default to 'id'
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'id';
    setLanguage(savedLanguage);
}

// Set language and update all elements
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    localStorage.setItem('selectedLanguage', lang);
    currentLanguage = lang;
    
    // Update language dropdown
    const langDropdown = document.querySelector('.lang-dropdown');
    if (langDropdown) {
        langDropdown.value = lang;
    }
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                }
            } else if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

function normalizeStr(str) {
    return str.replace(/\s+/g, ' ').trim();
}

// Auto-tag elements on first load
function autoTagElements() {
    const idDict = translations.id;
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, span, a, label, button, strong, li');
    
    const entries = Object.entries(idDict).sort((a, b) => b[1].length - a[1].length);

    for (const [key, value] of entries) {
        const normValue = normalizeStr(value);
        elements.forEach(el => {
            if (!el.hasAttribute('data-i18n') && el.children.length === 0) {
                const normInner = normalizeStr(el.innerHTML);
                const normText = normalizeStr(el.textContent);
                if (normInner === normValue || normText === normValue) {
                    el.setAttribute('data-i18n', key);
                } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (normalizeStr(el.placeholder) === normValue) {
                        el.setAttribute('data-i18n', key);
                    }
                }
            }
        });
    }
}

let currentLanguage = 'id';
document.addEventListener('DOMContentLoaded', () => {
    autoTagElements();
    initializeLanguage();
});
