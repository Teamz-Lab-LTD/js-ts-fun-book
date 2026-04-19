// config.js — Course Configuration
// Non-Coding IT Jobs Bootcamp — corporate/enterprise IT career track.

const COURSE_CONFIG = {
  // Course identity
  title: 'Non-Coding IT Jobs Bootcamp',
  subtitle: 'From Home Lab to Hiring Panel — <strong>~25 min/lesson</strong> — 60 Lessons for IT Support, SysAdmin, Network, SOC, Cloud & Bank IT Careers — Free, No Signup',
  shortTitle: 'IT Jobs Bootcamp',

  // Organization
  org: 'Teamz Lab',
  orgUrl: 'https://github.com/Teamz-Lab-LTD',
  orgFull: 'Teamz Lab LTD',

  // URLs
  siteUrl: 'https://learn.teamzlab.com/',
  canonicalUrl: 'https://learn.teamzlab.com/learn.html?course=it-jobs-bootcamp',
  ogImage: 'https://learn.teamzlab.com/og-image.png',

  // SEO
  description: 'Free non-coding IT career course: {lessonCount} lessons covering IT support, helpdesk, system administrator, network, SOC analyst, cloud, M365, Entra, Azure, AWS, backup/DR, ITSM, bank IT officer and corporate IT interview prep. Home labs, 300+ interview questions, resume and ATS templates — no signup, no coding required.',
  keywords: 'non coding it jobs, it support course, it support interview questions, how to become it support, helpdesk jobs no experience, system administrator interview questions, network engineer interview questions for freshers, active directory interview questions, dns troubleshooting interview questions, subnetting practice questions, windows server interview questions, linux admin interview questions, soc analyst interview questions, entry level cybersecurity jobs no experience, cloud support engineer interview questions, m365 admin interview questions, azure administrator interview questions, aws cloud support interview questions, it officer job preparation, bank it officer interview questions, ccna for beginners, security+ worth it, itil 4 foundation, how to learn active directory at home, windows server home lab, packet tracer vlan lab, wireshark for beginners, service desk analyst, how to write it support resume, ats keywords for it support, linkedin headline for it support, best certifications for system administrator, best certifications for helpdesk, best certifications for soc analyst beginner, aws cloud practitioner for beginners, az 104 study plan beginner, md 102 study guide, linux commands for interview, backup and disaster recovery interview questions, rpo rto explained, it audit interview questions, pci dss for beginners, iso 27001 basics, phishing incident response, ransomware first 10 minutes, siem alert triage, wazuh home lab, veeam backup restore, how to build a home lab, it support portfolio without coding, non coding it jobs, high paying it jobs without coding, career switch to cybersecurity no coding, it support course with labs, system admin course for beginners, soc analyst course for beginners, star method for it interview, how to negotiate salary as fresher, junior sysadmin resume, it operations course, azure administrator roadmap, sysadmin roadmap for beginners',
  topics: ['IT Support', 'Helpdesk', 'System Administration', 'Active Directory', 'Windows Server', 'Linux', 'Networking', 'DNS', 'Subnetting', 'Cybersecurity', 'SOC Analyst', 'SIEM', 'Cloud', 'Azure', 'AWS', 'Microsoft 365', 'Entra ID', 'Intune', 'Virtualization', 'VMware', 'Backup & DR', 'Databases', 'ITIL', 'ITSM', 'Bank IT', 'Interview Prep', 'Resume & LinkedIn'],
  educationalLevel: 'Beginner to Intermediate',

  // Topic categories for dashboard (lesson IDs grouped by topic)
  topicMap: {
    'Career Map & Mindset':[1,2,3],
    'Computer & OS Fundamentals':[4,5,6,7,8],
    'Windows Client & Endpoint':[9,10,11,12,13],
    'Windows Server & Active Directory':[14,15,16,17,18,19],
    'Networking, DNS & Subnetting':[20,21,22,23,24,25,26],
    'Linux Administration':[27,28,29,30,31],
    'Security & SOC Tier-1':[32,33,34,35,36,37],
    'Cloud, M365 & Entra':[38,39,40,41,42],
    'Virtualization, Backup & DR':[43,44,45,46,47],
    'Databases, App Support & Monitoring':[48,49,50,51,52],
    'ITSM, Bank IT & Audit':[53,54,55,56,57],
    'Interview Mastery & Career Launch':[58,59,60]
  },

  // Concept flow diagrams per lesson ID
  conceptFlows: {
    1:['Roles','Employers','Entry Paths','First Job'],
    2:['CV','ATS','Written','Viva','Offer'],
    3:['Ethics','Ownership','Safe Action','Trust'],
    4:['CPU','RAM','Storage','POST','OS'],
    5:['Power','BIOS/UEFI','Bootloader','Kernel','Login'],
    6:['Disk','Partition','File System','Mount','Health'],
    7:['Event Viewer','Services','Registry','SFC','DISM'],
    8:['macOS','Accounts','Network','Profiles','Logs'],
    9:['Local','Domain','Profile','UAC','Permission'],
    10:['ipconfig','ping','tracert','nslookup','gpresult'],
    11:['Outlook','Teams','Mailbox','OST','Mail Flow'],
    12:['Image','Join','Onboard','Offboard','Lock'],
    13:['Remote','Notes','Escalate','Close','KB'],
    14:['Domain','DC','AuthN','AuthZ','Directory'],
    15:['DNS','DHCP','SRV Records','Scope','Forwarder'],
    16:['OU','Delegation','GPO','Link','Inheritance'],
    17:['Share','NTFS','Effective','Deny','Group'],
    18:['WSUS','Replication','Time Sync','Kerberos','Patch'],
    19:['Join','DNS First','DC Locate','Creds','Recover'],
    20:['OSI','Layer 1–7','TCP/IP','Symptom','Isolate'],
    21:['IP','CIDR','Subnet','Host','Broadcast'],
    22:['Access Port','Trunk','VLAN','Tag','Segment'],
    23:['Route','NAT','PAT','ACL','Gateway'],
    24:['Resolver','A/AAAA','CNAME','TTL','Cache'],
    25:['VPN','Wi-Fi','Branch','MPLS','Remote'],
    26:['Capture','Handshake','Filter','Evidence','Fix'],
    27:['FS','Users','chmod','chown','sudo'],
    28:['ps','systemctl','journalctl','logs','Restart'],
    29:['apt/yum','cron','Script','Deploy','Schedule'],
    30:['SSH Key','No Root','UFW','fail2ban','Harden'],
    31:['Shebang','Vars','Loop','Exit Code','Log'],
    32:['C','I','A','Risk','Least Privilege'],
    33:['MFA','SSO','IAM','Session','Review'],
    34:['Detect','Isolate','Contain','Notify','Recover'],
    35:['Alert','Triage','IOC','Case','Escalate'],
    36:['Scan','Patch','Baseline','Harden','Verify'],
    37:['Policy','Log','Evidence','Audit','Control'],
    38:['IaaS','PaaS','SaaS','Shared','Scale'],
    39:['RG','VNet','VM','NSG','RBAC'],
    40:['Tenant','User','MFA','License','Group'],
    41:['Enroll','Compliance','App','Policy','Remote'],
    42:['IAM','EC2','VPC','S3','SG'],
    43:['Hypervisor','VM','Snapshot','Template','Migrate'],
    44:['vSphere','Hyper-V','Proxmox','KVM','Compare'],
    45:['Full','Incremental','Immutable','Offsite','Restore'],
    46:['RPO','RTO','Failover','Drill','Evidence'],
    47:['Detect','Declare','Recover','Validate','Lessons'],
    48:['SELECT','WHERE','JOIN','GROUP','ORDER'],
    49:['Service','Login','Grant','Backup','Restore'],
    50:['Web','App','DB','Auth','DNS'],
    51:['Metric','Threshold','Alert','Action','Tune'],
    52:['Calendar','Job','SLA','Comms','Recover'],
    53:['Incident','Problem','Change','Release','Request'],
    54:['Severity','SLA','Update','Handover','Close'],
    55:['CBS','Channel','Switch','SWIFT','Rails'],
    56:['Detect','Contain','Comms','Evidence','RCA'],
    57:['Request','Approval','PAM','Log','Revoke'],
    58:['Concept','Example','Safe Action','Close','Ask'],
    59:['S','T','A','R','Salary'],
    60:['ATS','Resume','LinkedIn','Apply','Interview']
  },

  // Spaced Repetition settings
  srs: {
    boxes: 5,
    intervals: [0, 1, 3, 7, 14],
    reviewBatchSize: 10
  },

  // XP rewards
  xp: {
    lessonComplete: 20,
    quizPerfect: 30,
    quizGood: 20,
    quizOk: 10,
    typingChallenge: 15,
    selfExplanation: 10,
    reviewCorrect: 5,
    mixedQuizComplete: 25
  },

  // Social sharing
  social: {
    hashtags: 'ITJobsBootcamp,ITSupport,SysAdmin,NetworkEngineer,SOCAnalyst,CloudSupport,ITCareers,HomeLab',
    tweetTemplate: 'I found a FREE non-coding IT career course — {lessonCount} lessons covering support, sysadmin, network, security, cloud, M365, backup/DR, bank IT & interview prep. Home labs + 300+ interview questions, zero signup.'
  },

  // Footer
  footerTagline: 'Learn IT Support, System Administration, Networking, Active Directory, Linux, Cybersecurity, SOC, Cloud, Azure, AWS, M365, Backup & DR, ITSM and bank/corporate IT interview skills — all in one place, with real labs.',
  thinkDeeperQ: 'Imagine you just walked into a real IT interview at a bank or MNC. Why would you need <strong>{title}</strong>? What question could you not answer safely WITHOUT it?',

  // Branding
  branding: {
    trustStrip: 'We build production apps, ship them to regulated clients, and run real operations with the same tools taught here. <strong>This free bootcamp is how we give back.</strong>',
    trustStripCta: 'Need an enterprise IT or app team? Talk to us',
    headerSubtitle: 'From Home Lab to Hiring Panel — Free, Lab-Based IT Career Training | by',
    ebookUrl: 'https://www.amazon.com/dp/B0GS3GSJ5V',
    ebookTitle: 'Get the Full Book',
    ebookSubtitle: 'Zero to Advanced Web Dev — the companion guide on Amazon',
    footerCtaTitle: 'Need a Full-Stack or IT Operations Team?',
    footerCtaDesc: 'Teamz Lab builds and operates production software for regulated industries with <strong style="color:var(--heading)">TypeScript, NestJS, React, Flutter, cloud and secure infrastructure</strong>. We built this free course — imagine what we can build for your business.',
    services: [
      { name: 'Enterprise IT & Cloud', desc: 'Microsoft 365, Entra, Azure, AWS, endpoint management, and secure infrastructure for growing teams' },
      { name: 'Full-Stack Web Apps', desc: 'Production TypeScript + NestJS + React applications with scalable architecture' },
      { name: 'Mobile App Development', desc: 'Cross-platform Flutter & React Native apps for iOS and Android' },
      { name: 'AI Integration & Consulting', desc: 'Integrate AI capabilities into your existing products — automation, chatbots, and intelligent features' }
    ]
  }
};
