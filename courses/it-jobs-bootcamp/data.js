const LESSONS_DATA = [
  {id:1,title:"The Non-Developer IT Map",subtitle:"Where the real jobs, money, and confusion live",analogy:"Think of enterprise IT like a hospital. Developers are the surgeons who build new procedures. But the hospital also needs nurses, lab techs, security, pharmacy, records, imaging, and operations — and none of them do surgery. Non-coding IT is that entire other half of the building. It keeps the place alive 24/7.",points:[
{t:"Non-coding IT is a real career, not a fallback",d:"Enterprise IT has entire role families that never write application code: IT support, helpdesk, system admin, network admin, NOC, SOC/security, cloud support, M365 admin, DBA-lite, application support, IT audit, ITSM. These roles hire in much higher volume than dev roles in banks, telcos, BPOs, MNCs, hospitals, universities, and government.",code:"Role clusters you will meet in this course:\n  Support    -> Helpdesk, Desktop Support, Service Desk\n  Infra      -> SysAdmin, Network, NOC, Backup/DR, Virtualization\n  Security   -> SOC Tier-1, IAM, GRC, IT Audit\n  Cloud      -> M365 Admin, Entra, Azure/AWS Support\n  Apps/Data  -> ERP/App Support, DBA-lite, Monitoring"},
{t:"Why banks and corporates hire this cluster heavily",d:"Regulated industries need people who can keep identity, networks, endpoints, backups, and incidents under control — with evidence. A bank cannot run without AD, DNS, DHCP, firewalls, core banking, ATM switches, SIEM, backup, and DR. That is exactly the surface this course teaches."},
{t:"Entry paths are wider than you think",d:"Fresh grad in CSE/EEE/ICE/BBA-MIS/Statistics, diploma holder, BPO/customer-support switcher, teacher or admin switcher, self-taught learner — all four paths regularly land real IT jobs. What separates people is home-lab proof, calm interview structure, and documentation habits."},
{t:"What a junior is really expected to know",d:"Not everything. The employable standard is: ‘I understand the concept, I can do it in a lab, I know common failure modes, I know a safe first action, and I know when to escalate.’ If you can hit that bar on ~20 topics, you are already ahead of most applicants."},
{t:"Title inflation is real — read the job description, not the title",d:"One company’s ‘Support Analyst’ is another company’s ‘Systems Engineer.’ Learn to read the actual responsibilities, tools, shift pattern, and on-call expectations. That’s how you pick the right job, not the one with the shiniest label."},
{t:"The ladder you will build toward",d:"Support -> Desktop/Endpoint -> SysAdmin or NOC or SOC Tier-1 -> Cloud/M365/Security specialist -> Senior infra/security or IT audit/architect. The same foundations unlock all branches, which is why this course front-loads fundamentals."},
{t:"Salary reality (decision ranges, not promises)",d:"Entry support usually starts modest. Pay grows fastest when you add: a respected cert (CCNA/Sec+/ITIL/AZ-104), shift/on-call tolerance, clear English, and proof-of-work labs. Sector matters as much as title — banks, MNCs, telcos typically beat local SMEs for similar roles.",code:"Multipliers that move junior salary up:\n  + hands-on labs you can demo\n  + English + calm incident comms\n  + one respected cert\n  + shift/on-call willingness\n  + industry with regulation (bank, telco, healthcare)"}
],whatIs:"Non-coding IT (also called enterprise IT, IT operations, or infrastructure/support IT) is the work that keeps digital business running: identities, endpoints, networks, servers, cloud tenants, backups, security monitoring, incidents, and audit evidence. It is operational, process-driven, and regulated. It is not software development — but it is deeply technical and highly employable.",realWorld:"When a bank branch cannot open because the domain controller is unreachable, when a CEO cannot send email because MFA is misconfigured, when an ATM switch throws an alert at 2 AM, when an auditor asks ‘show me last quarter’s access reviews’ — the people who answer are non-coding IT. They are the reason the business stays trusted.",code:`// The non-developer IT ladder (first 2 years)
START
  |
  +--> IT Support / Helpdesk / Service Desk      (entry)
          |
          +--> Desktop / Endpoint / M365 Admin   (6-12 mo)
                  |
                  +--> SysAdmin / Network / SOC T1   (12-24 mo)
                          |
                          +--> Cloud / Security / Audit / Infra Lead
                          +--> Specialist (Identity, Backup, Network, DBA)

Signals that move you up the ladder:
  - labbed evidence (screenshots, runbooks, diagrams)
  - one respected cert per rung
  - incident stories you can explain in 60 seconds
  - clean documentation habit`,funFact:"In many Bangladesh private banks the IT Officer role is one of the most over-subscribed technical jobs of the year — thousands of applicants per posting. Candidates who can calmly explain AD, DNS, backup, and an ATM-down first response in plain English routinely beat candidates with ‘stronger’ CVs.",quiz:[
{q:"Which of these is NOT a typical non-coding IT role?",opts:["Service Desk Analyst","Backend Developer","System Administrator","SOC Analyst"],ans:1},
{q:"What does the ‘employable junior’ standard really mean?",opts:["Knowing every command from memory","Concept + lab + failure modes + safe first action + when to escalate","Having 5 years of experience","Holding only a degree, no certs"],ans:1},
{q:"Why do regulated industries (banks, telcos) hire heavily in this cluster?",opts:["They do not trust developers","They need controlled identity, networks, backups, incidents with evidence","They pay less than tech startups","Because their core banking is written in HTML"],ans:1},
{q:"Which factor most reliably moves junior salary up?",opts:["Memorizing one cloud platform","A combination of labs, comms, one respected cert, shift tolerance, and a regulated industry","Only attending free YouTube courses","Only using expensive laptops"],ans:1}
],challenge:"Write one paragraph (5 sentences) that describes the exact IT role you want in 12 months: the cluster, the tools, the industry, the shift pattern, and one concrete proof you will build to get it. Save it. You will revisit this paragraph in lesson 60.",resources:[
{type:"article",title:"Computer and Information Technology Occupations",url:"https://www.bls.gov/ooh/computer-and-information-technology/home.htm",source:"U.S. BLS"},
{type:"article",title:"O*NET — Computer User Support Specialists",url:"https://www.onetonline.org/link/summary/15-1232.00",source:"O*NET Online"},
{type:"video",title:"How to Start an IT Career",url:"https://www.youtube.com/@NetworkChuck",source:"NetworkChuck (channel)"}
],eli5:"Coders build the machines that run the shop. Non-coding IT makes sure the shop has lights, locks, security cameras, safe keys, and a phone that actually works. Both jobs are real. Both get paid. Only one of them requires you to write apps.",codeWalkthrough:[
"Visual map of the early IT career ladder","Entry label at the top","Bar connecting to the first rung","First realistic entry role cluster","Bar continuing down","Promotion path after 6–12 months","Continuing the chain","Promotion path after 12–24 months","Continuing the chain","Senior branches open here","Branch into specialist tracks","Blank separator","Heading for growth signals","Evidence you labbed the work","Respected certs unlock recruiter trust","Incident storytelling shows real maturity","Documentation is the hidden differentiator"
],bugChallenge:{code:"Career plan:\n- Learn Python for 3 months\n- Apply for any dev job\n- Study cert only after getting hired\n- Ignore Active Directory and networking\n- Do not build a home lab",hint:"You are targeting non-coding IT. Which items in this plan pull you away from that cluster?",answer:"A non-coding IT plan should drop Python-as-primary and replace it with AD, DNS, Windows/Linux, networking, security basics, a home lab, and one respected cert (CompTIA/CCNA/ITIL/Sec+/AZ-104). Certs generally come before hiring, not after. Build the home lab from week 1."},difficulty:"beginner",prereqs:[]},

  {id:2,title:"How IT Hiring Really Works",subtitle:"Why strong candidates still get filtered out",analogy:"Think of IT hiring like airport security. You are not trying to ‘beat the guard.’ You are passing through a sequence of gates — ATS, recruiter screen, written test, technical panel, HR/final — each designed to filter out risk. Your job is to match how each gate reads you.",points:[
{t:"Gate 1 — The ATS (the robot before the human)",d:"Most medium/large employers use an Applicant Tracking System. It scans your resume for role-family keywords: Active Directory, Windows Server, ticketing, M365, VPN, CCNA, ITIL, SIEM, incident. No keywords = no human reader. You are not cheating — you are speaking the system’s language.",code:"Top ATS keywords by role family (use naturally, not stuffed):\n  Support  -> Active Directory, M365, ticketing, ServiceNow, SLA, VPN\n  Sysadmin -> Windows Server, AD, DNS, DHCP, GPO, VMware, backup\n  Network  -> TCP/IP, VLAN, routing, Cisco, firewall, Wireshark\n  SOC/Sec  -> SIEM, phishing, incident response, ISO 27001, IAM\n  Cloud    -> Azure, Entra, Intune, AWS, IAM, RBAC, MFA"},
{t:"Gate 2 — Recruiter screen (15–25 min phone call)",d:"A recruiter is not testing deep tech. They test: can you speak clearly, do you sound safe/stable, do you understand the role, do your salary and notice-period numbers fit. Prepare 3 sentences each for: who you are, why this role, expected salary range, notice period."},
{t:"Gate 3 — Written test (common in banks, BPOs, MNC pipelines)",d:"Typical mix: English, basic aptitude/math, computer fundamentals, OS/networking/security MCQs, scenario questions (‘a branch is offline, what do you check first?’), sometimes short descriptive writing. Speed + discipline beats brilliance here."},
{t:"Gate 4 — Technical interview / viva",d:"Panel tests reasoning, not trivia. Use the 3-part answer: concept -> example -> safe action. Never bluff. ‘I haven’t configured that in production, but here is how I understand it and how I would approach it safely’ beats fake confidence."},
{t:"Gate 5 — HR / final / salary",d:"HR rounds test maturity, reliability, fit, and negotiation. ‘Why are you leaving?’ and ‘What’s your expected salary?’ are not traps — they are structure. Answer in ranges, grounded in the role and market, not emotion."},
{t:"Regional differences matter",d:"BD private banks often run CV -> written -> technical viva -> HR. GCC/SEA/West often run recruiter -> tech screen -> manager panel -> HR. Public-sector or combined processes can add MCQ/written by external committees. Learn the pattern of your target employer before applying."},
{t:"Why strong candidates still get filtered out",d:"Weak keyword resume, wrong role targeting, bluffing, no structured answers, no evidence of hands-on work, shaky English comms, unclear salary expectation, or answering emotionally when the role is controls-heavy. Every one of these is fixable."}
],whatIs:"IT hiring is a multi-gate filtering process that separates candidates by resume relevance, communication, fundamentals, reasoning, and fit. Each gate has its own logic. Mastering the process is a skill of its own — separate from technical skill — and this course treats it that way.",realWorld:"Two candidates apply. Candidate A has a stronger degree but generic resume, bluffs under pressure, and asks for a random salary number. Candidate B has a humbler degree, ATS-tuned resume, 3 lab screenshots, and a calm ‘concept -> example -> safe action’ style. Panels hire Candidate B almost every time.",code:`// The 5-gate funnel for junior IT roles

[You apply]
   |
   v
 ATS keyword match ----- fail? no human sees you.
   |
   v
 Recruiter screen ------ clarity, salary, notice.
   |
   v
 Written test ---------- English, aptitude, OS, net, security scenarios.
   |
   v
 Technical panel ------- concept -> example -> safe action.
   |
   v
 HR / final / salary --- maturity + negotiation.
   |
   v
[Offer] --> background check --> joining`,funFact:"Recruiters often read a junior CV for under 30 seconds the first time. Your job is not to write a biography — it is to make the first 30 seconds pass the keyword + clarity test so you earn the next 5 minutes.",quiz:[
{q:"What does the ATS primarily filter on for junior IT roles?",opts:["Your photo quality","Role-family keywords used in context","Your favorite programming language","The color of your resume"],ans:1},
{q:"What is the safest structure for answering a technical question?",opts:["Bluff confidently","Concept -> example -> safe action","Only list memorized commands","Refuse to answer"],ans:1},
{q:"A BD private bank pipeline often looks like:",opts:["CV -> HR only","CV -> written -> technical viva -> HR","CV -> coding challenge -> offer","Recruiter -> manager -> direct offer"],ans:1},
{q:"Which junior fails most reliably even when technically capable?",opts:["One who speaks calmly","One who bluffs under pressure and has no hands-on evidence","One who uses ATS keywords","One who labbed Active Directory"],ans:1}
],challenge:"Pick one real junior IT job ad online. Rewrite your resume summary and skill list to echo its exact role-family keywords naturally (not stuffed). Keep a clean before/after copy. You will reuse this in lesson 60.",resources:[
{type:"article",title:"What is an ATS and how it reads resumes",url:"https://www.jobscan.co/applicant-tracking-systems",source:"Jobscan"},
{type:"video",title:"How to pass a recruiter screen (entry IT)",url:"https://www.youtube.com/@JoshMadakor",source:"Josh Madakor (channel)"},
{type:"article",title:"Behavioral interview STAR method",url:"https://www.themuse.com/advice/star-interview-method",source:"The Muse"}
],eli5:"Getting an IT job is like levels in a video game. You don’t fight the final boss first — you have to clear each level (resume, recruiter, written, technical, HR). Each level checks something different. This course trains you for every level, not just the cool ones.",codeWalkthrough:[
"Visual funnel of the 5-gate hiring process","Starting point","Arrow downward","First filter — the ATS","Arrow downward","Recruiter-level comms check","Arrow downward","Written-test gate for many BD/BPO/MNC pipelines","Arrow downward","Technical panel — reasoning, not trivia","Arrow downward","HR and final negotiation","Arrow downward","Offer and onboarding path"
],bugChallenge:{code:"Resume summary:\n\"I am a passionate fresher who loves technology and wants to grow in a reputed company. I am a quick learner and team player. I know computer basics and MS Office.\"",hint:"Which role-family keywords would an ATS for IT Officer / SysAdmin / Support pick up here?",answer:"Almost none. It reads generic. Rewrite with specifics: ‘Computer Science graduate targeting IT Support / System Administration roles. Hands-on with Windows 11, Active Directory, DNS/DHCP, Office 365, ticketing, and basic VPN troubleshooting through 6+ home-lab exercises. Building toward CompTIA A+/Network+ and ITIL 4 Foundation.’"},difficulty:"beginner",prereqs:[1]},

  {id:3,title:"Mindset, Professionalism & Ethics",subtitle:"Why trust matters more than noise in enterprise IT",analogy:"Enterprise IT is like being handed a bank’s master key on day one. Nobody cares how fast you can run — they care whether you’ll use the key safely, log what you did, and call someone before you open the wrong door.",points:[
{t:"Controls-mindset beats cowboy-mindset",d:"Regulated environments reward documented, approved, reversible actions. ‘I logged in, saw the issue, raised a change, got approval, executed with a rollback plan, then documented’ is more hireable than ‘I fixed it in 2 minutes with a trick.’"},
{t:"Least privilege, always",d:"Do not use admin accounts for everyday work. Do not share credentials. Request access only for the task, only for as long as needed. This single habit protects you from blame AND from real incidents."},
{t:"Confidentiality is non-negotiable",d:"Customer data, access patterns, security alerts, audit findings — none of these go into personal chats, screenshots, or social posts. Even ‘just showing a friend’ is a career-ending mistake in banks and MNCs."},
{t:"Document as you work, not after",d:"Write your ticket notes in the moment: what you saw, what you checked, what you did, what you changed, what you’ll monitor. This is the single biggest junior-level differentiator panels notice."},
{t:"Escalation is not weakness — it is professionalism",d:"Knowing when to stop and call a senior, vendor, security, or change manager is a skill. Unsafe juniors try to be heroes. Safe juniors say ‘I’m stopping here, here’s what I’ve done, here’s what I need.’"},
{t:"No exam dumps, no fake experience, no lying on CVs",d:"Industry is smaller than it looks. Fake certs, padded tenure, borrowed projects — all get caught during reference checks, background verification, or in technical depth tests. One clean rejection is recoverable. One caught lie is not."},
{t:"Calm under pressure is a hireable skill",d:"Panels watch how you speak when you don’t know something. ‘I haven’t done that in production; here’s how I understand it, and I’d verify X before acting’ is a professional answer. ‘Uhh… yeah… I think so?’ is not."}
],whatIs:"The professional/ethical frame for enterprise IT: controls-minded thinking, least privilege, confidentiality, documentation, escalation discipline, honest communication, and calm behavior under pressure. None of these require a degree. All of them are interview-visible.",realWorld:"In a bank, a junior IT officer who confidently ‘fixes’ a production change without approval can trigger an audit finding that costs real money and careers. A junior who says ‘I paused, raised a change, got sign-off, executed safely, and documented’ gets promoted instead.",code:`// The safe-junior habits checklist

[ ] Use a standard account for daily work
[ ] Request privileged access only when needed
[ ] Log what you did, not only what broke
[ ] Never share credentials — not even with your boss
[ ] Do not post customer data in chats or screenshots
[ ] Escalate early, not late
[ ] Keep a personal incident journal (no secrets, just lessons)
[ ] Refuse exam dumps and faked experience
[ ] Prefer reversible actions; plan rollback
[ ] Ask "what could this break?" before running the command`,funFact:"In multiple bank hiring rounds, candidates who openly said ‘I don’t know this one yet, but here’s how I would approach it safely’ were ranked HIGHER than candidates who bluffed with wrong but confident answers. Panels verify; bluffing almost never survives verification.",quiz:[
{q:"What does ‘least privilege’ mean in day-to-day IT?",opts:["Use admin account for everything","Only request and use the access required for the current task, for the time needed","Share credentials to move faster","Never use any accounts"],ans:1},
{q:"A senior asks you to share your admin password for 2 minutes ‘to save time’. Best response?",opts:["Share it quickly to be helpful","Politely refuse and offer to raise the access request or do the action on their behalf","Post it in the team chat","Ignore the request and go offline"],ans:1},
{q:"Which habit most improves a junior’s panel outcome?",opts:["Running many commands fast","Documenting ticket notes in the moment","Hiding mistakes","Skipping escalation"],ans:1},
{q:"What should you do if you don’t know an answer in a technical interview?",opts:["Invent a confident wrong answer","Say you don’t know honestly and explain how you’d reason about it safely","Change the topic","Walk out"],ans:1}
],challenge:"Create a one-page ‘Personal Ops Charter’ with 10 rules you will follow in your first IT job (least privilege, documentation, escalation, confidentiality, honesty in interviews, etc.). Print it. Tape it near your study desk.",resources:[
{type:"article",title:"Least Privilege (NIST glossary)",url:"https://csrc.nist.gov/glossary/term/least_privilege",source:"NIST"},
{type:"article",title:"ISO/IEC 27001 Information Security",url:"https://www.iso.org/standard/27001",source:"ISO"},
{type:"video",title:"Why ethics matter in IT",url:"https://www.youtube.com/@professormesser",source:"Professor Messer (channel)"}
],eli5:"You’re a new lifeguard. Being strong and fast is great. But the job is really about following the rules, watching carefully, calling for help when needed, and never pretending you saw something you didn’t. Enterprise IT is the same.",codeWalkthrough:[
"Checklist title","Use standard, non-admin account for daily work","Privileged access only when justified","Write ticket notes in the moment","Credentials stay with the owner — no exceptions","No customer data outside approved systems","Escalate early, not late","Keep a personal lessons-learned log","No exam dumps, no faked experience","Prefer reversible actions and plan rollback","Ask impact questions before executing"
],bugChallenge:{code:"Behavior log:\n- Shared admin password in team chat for 5 minutes\n- Ran an unapproved production change because it was urgent\n- Posted a partial screenshot with a customer name to LinkedIn\n- Claimed a coursework project as 2 years of real experience",hint:"How many of these would fail a bank/MNC background or audit check?",answer:"All four. Each breaks a core safe-junior rule: credential sharing, unapproved change, confidentiality leak, and CV falsification. Replace with: request temporary elevation, raise a change with rollback, keep customer data out of social posts, and describe coursework honestly as coursework with real scope."},difficulty:"beginner",prereqs:[1,2]},

  {id:4,title:"Hardware Essentials",subtitle:"What can fail before Windows even starts",analogy:"A computer is like a restaurant kitchen: CPU is the chef, RAM is the counter space, storage is the walk-in fridge, and the motherboard is the layout connecting everyone. If the fridge dies you lose ingredients; if the counter is tiny everything slows; if the chef overheats, service stops.",points:[
{t:"CPU, RAM, and storage — what each really does",d:"CPU executes instructions, RAM holds active data the CPU is working on, and storage (HDD/SSD/NVMe) keeps data when power is off. Performance problems almost always trace back to one of these three being saturated or failing."},
{t:"How to map a symptom to likely component",d:"Random restarts → power/thermals/RAM. Long boot + load spikes on simple tasks → storage. App crashes that spread across many apps → RAM or OS corruption. Frozen mouse + slow everything → CPU or thermal throttling.",code:"Symptom -> likely first suspect\n  Random restart / blue screen loop  -> power, thermals, RAM\n  Slow boot + freezes during open    -> storage (SMART, bad sectors)\n  Many apps crash after update       -> RAM or OS image\n  Hot case, fan loud, throttling     -> thermal / dust / paste\n  Dead screen, no power light        -> PSU, motherboard, battery"},
{t:"HDD vs SSD vs NVMe",d:"HDD: spinning disks, cheap per GB, slow, mechanical failure risk. SSD: flash, fast, silent, no moving parts. NVMe: flash over PCIe, much faster than SATA SSD. For corporate laptops, NVMe is now the default; HDD is mostly archival."},
{t:"POST — the first self-check",d:"When you press power, firmware runs POST (Power-On Self-Test) before any OS loads. If POST fails, you may hear beeps or see codes. No POST means the problem is below the operating system — hardware or firmware."},
{t:"Overheating + thermal throttling",d:"Dust, dead fans, dried thermal paste, or blocked vents → CPU slows itself to protect against damage. You feel it as sudden sluggishness. Cleaning + paste replacement is often a junior-level win."},
{t:"Safe troubleshooting sequence",d:"Document the symptom, confirm reproducibility, swap one variable at a time, test with a known-good component if possible, check logs, and only then open the case. Never yank hardware before capturing evidence."},
{t:"Printers fail more than any other peripheral",d:"Support teams spend huge time on printing. The failure is almost always one of: driver, spooler, network path, queue, permission, paper/toner/jam. Treat printers like mini-networks: many layers, check each."}
],whatIs:"Hardware essentials are the physical layer of every IT issue. A strong junior can look at a symptom and quickly narrow it to CPU, memory, storage, power, thermals, or peripherals — then choose a safe next test.",realWorld:"In a bank branch, a teller’s machine keeps freezing at noon. A junior who just reboots it will get another ticket tomorrow. A junior who checks Event Viewer, disk SMART, temperatures, and memory logs finds a failing SSD and prevents mid-transaction corruption.",code:`// Safe hardware triage script (pseudocode for your brain)

1. Ask: what exactly changes when it fails? (reboot? freeze? blue screen? slow?)
2. Ask: is it one machine or many? (multi-machine often means software/network)
3. Check thermals: dust, fans, case temperature, throttling events.
4. Check storage: SMART, disk errors in Event Viewer, free space, slow reads.
5. Check memory: Windows Memory Diagnostic, recent BSOD dump codes.
6. Check power: battery health, charger watt rating, unstable mains.
7. Swap ONE variable at a time (RAM stick, charger, cable).
8. Document every step in the ticket; keep evidence.
9. Escalate to hardware repair with clear notes if not resolved.`,funFact:"Many ‘software problems’ in corporate fleets turn out to be failing SSDs. A dying drive can produce ghostly symptoms — slow Outlook, crashing browsers, ‘random’ blue screens — that look exactly like malware or a bad update.",quiz:[
{q:"Sudden performance drops and loud fans most likely indicate:",opts:["Malware only","Thermal throttling due to dust, dead fan, or dried paste","A Windows update","DNS problems"],ans:1},
{q:"Which storage type is typically fastest?",opts:["HDD","SATA SSD","NVMe SSD","Tape"],ans:2},
{q:"What does POST do?",opts:["Loads the operating system","Performs a firmware self-check of core hardware before the OS loads","Sends logs to the cloud","Runs antivirus"],ans:1},
{q:"A ticket says: ‘one laptop freezes daily, others are fine.’ Best first suspect?",opts:["A global network outage","Hardware (storage, thermals, RAM) on that laptop","The mail server","The firewall"],ans:1}
],challenge:"Open Event Viewer (Windows) or ‘Console’ (macOS) on your own machine. Find the most recent critical or error entry. Read it aloud. Explain what you believe happened in plain English.",resources:[
{type:"docs",title:"Windows Event Viewer overview",url:"https://learn.microsoft.com/windows/client-management/",source:"Microsoft Learn"},
{type:"video",title:"How PCs boot (POST to OS)",url:"https://www.youtube.com/@professormesser",source:"Professor Messer"},
{type:"article",title:"SMART disk health explained",url:"https://en.wikipedia.org/wiki/Self-Monitoring,_Analysis_and_Reporting_Technology",source:"Wikipedia"}
],eli5:"Your computer is a tiny kitchen. CPU is the cook, RAM is the counter, disk is the fridge. If the cook overheats, food slows. If the counter is small, nothing fits. If the fridge breaks, food disappears overnight. That’s basically every hardware ticket.",codeWalkthrough:[
"Triage pseudocode for hardware issues","Step 1 — describe the failure precisely","Step 2 — scope: single or many machines","Step 3 — thermals check","Step 4 — storage health check","Step 5 — memory check","Step 6 — power stability check","Step 7 — isolate by changing ONE variable","Step 8 — document every step","Step 9 — escalate with evidence if unresolved"
],bugChallenge:{code:"Ticket: ‘PC is slow, I reinstalled Windows twice. Still slow. Please fix.’",hint:"Reinstalling Windows did not help. Which layer is likely the real culprit?",answer:"OS reinstall rules out software rot. Next suspects are hardware: check disk SMART (likely failing SSD/HDD), RAM diagnostic, thermals/throttling, and dust. Document symptoms with timestamps and Event Viewer entries, then escalate as hardware if confirmed."},difficulty:"beginner",prereqs:[1]},

  {id:5,title:"Boot Process & Firmware",subtitle:"From power button to login screen",analogy:"Booting is like opening a theater before a show: lights on, doors unlocked, staff check themselves, tickets loaded, seats ready, doors open to the audience. If any step fails, the show doesn’t start — and you have to know which person to talk to.",points:[
{t:"Power on → firmware → bootloader → kernel → services → login",d:"Every modern PC goes through this chain. If it fails at any stage, the symptom tells you where to look. Knowing the chain lets you diagnose instead of guess."},
{t:"BIOS vs UEFI",d:"BIOS is the older firmware. UEFI is the modern replacement — faster, supports larger disks, Secure Boot, and a richer interface. Enterprise laptops are almost all UEFI + Secure Boot today.",code:"Quick differences:\n  BIOS    - legacy, 16-bit, MBR partitions, slower, no Secure Boot\n  UEFI    - modern, 64-bit, GPT partitions, faster, Secure Boot support\n  CSM     - UEFI compatibility mode for legacy BIOS behavior\n  Secure Boot - only signed bootloaders/OS allowed"},
{t:"Boot order and boot devices",d:"Firmware tries devices in a configured order: internal NVMe → USB → network (PXE). If your laptop won’t boot, check boot order first — someone may have plugged in a USB or changed the list."},
{t:"MBR vs GPT",d:"MBR supports up to 2 TB and 4 primary partitions. GPT is modern, supports huge disks and many partitions. Modern UEFI systems use GPT."},
{t:"Common boot failures and what they mean",d:"‘No bootable device’ → boot order or disk issue. ‘Operating system not found’ → corrupted bootloader. ‘Automatic Repair loop’ → OS integrity. Blue screen early in boot → driver or disk driver problem."},
{t:"Recovery tools a junior should know",d:"Windows Recovery Environment (WinRE), Startup Repair, bootrec commands (bootrec /rebuildbcd, /fixmbr, /fixboot), safe mode, last known good config, and a bootable USB with diagnostic tools."},
{t:"When to touch BIOS/UEFI settings",d:"Only to change boot order, enable/disable Secure Boot (for specific OS installs), enable virtualization (VT-x/AMD-V), or toggle TPM for BitLocker. Document every change. Never flash firmware unless required and approved."}
],whatIs:"The boot process is a sequence: firmware (BIOS/UEFI) initializes hardware, reads the boot device, loads the bootloader, which loads the OS kernel, which starts drivers, services, and finally presents a login screen. A stall at any stage tells you exactly where to look.",realWorld:"A corporate laptop won’t boot after a power outage. A junior recognizes ‘Automatic Repair loop’ as an OS integrity issue, boots to WinRE, runs startup repair + bootrec commands, and captures logs — instead of reinstalling Windows and destroying user data.",code:`// The full boot chain (Windows example)

Power on
  |
  v
Firmware (BIOS / UEFI) runs POST
  |
  v
Firmware reads boot order -> finds a valid boot device
  |
  v
Bootloader (bootmgr / Windows Boot Manager) loads
  |
  v
Kernel (ntoskrnl.exe) + HAL load drivers
  |
  v
Session Manager (smss.exe) starts
  |
  v
Services start (Winlogon, LSA, etc.)
  |
  v
Login screen appears`,funFact:"Early PCs took so long to POST that engineers added beep codes specifically to tell you which component failed — because there was no screen output yet. Beep codes are still useful on modern enterprise hardware.",quiz:[
{q:"Which stage runs BEFORE the operating system loads?",opts:["Services","User profile","Firmware/POST","Antivirus"],ans:2},
{q:"What is Secure Boot designed to prevent?",opts:["Overheating","Loading unsigned or tampered boot code","Network outages","DNS poisoning"],ans:1},
{q:"The message ‘Operating system not found’ most likely indicates:",opts:["A full mailbox","Corrupted or missing bootloader, wrong boot order, or failing disk","DNS failure","A broken monitor"],ans:1},
{q:"Modern UEFI systems typically use which partition style?",opts:["MBR","GPT","FAT only","None"],ans:1}
],challenge:"Reboot your own PC and enter UEFI setup (often F2/F10/F12/DEL). Without changing anything, note: firmware version, boot order, Secure Boot state, TPM state. Exit without saving. You just performed the first step of a real hardware triage.",resources:[
{type:"docs",title:"Windows boot process (MS)",url:"https://learn.microsoft.com/windows-hardware/drivers/bringup/",source:"Microsoft Learn"},
{type:"docs",title:"UEFI Specification overview",url:"https://uefi.org/specifications",source:"UEFI Forum"},
{type:"video",title:"BIOS vs UEFI explained",url:"https://www.youtube.com/@professormesser",source:"Professor Messer"}
],eli5:"A computer starts like an airport in the morning: staff check everything, the runway opens, the plane (Windows) is cleared to land. If the runway isn’t ready, the plane waits. That waiting is your boot error message.",codeWalkthrough:[
"Boot chain diagram","Power on — signal reaches firmware","POST — hardware self-check","Firmware picks a boot device from the ordered list","Bootloader is located and loaded","Kernel and hardware abstraction layer load","Session Manager spawns","Services come up","Login screen is rendered"
],bugChallenge:{code:"User reports: 'Laptop shows Automatic Repair loop every morning. I keep cancelling it.'",hint:"Cancelling means you never let the OS attempt repair. What should you do BEFORE reinstalling?",answer:"Let Automatic Repair finish. If it still fails, boot into WinRE, run Startup Repair, then bootrec /rebuildbcd, /fixmbr, /fixboot if appropriate. Check disk health (SMART/chkdsk). Only reinstall after confirming disk is healthy and data is backed up. Document steps in the ticket."},difficulty:"beginner",prereqs:[4]},

  {id:6,title:"File Systems & Storage Troubleshooting",subtitle:"Why disks fail in visible patterns",analogy:"A file system is a library catalogue. It doesn’t hold the books — it tells you exactly which shelf each book is on. Corrupt the catalogue and all the books are still there, but nobody can find them. That’s why a ‘healthy’ disk can still look empty.",points:[
{t:"NTFS, FAT32, exFAT, ext4, XFS, APFS — when each appears",d:"NTFS: Windows system drives (permissions, journaling). FAT32: old USB sticks (max 4GB file). exFAT: modern cross-platform USB/SSD. ext4/XFS: Linux. APFS: modern macOS. If you see a file system, you can predict the OS context."},
{t:"Partitioning basics",d:"A disk is divided into partitions. Each partition can have its own file system. Enterprises often separate OS, data, and recovery partitions — makes reinstalls safer."},
{t:"SMART — the disk’s self-report",d:"Most drives expose SMART data: reallocated sectors, pending sectors, read errors, temperature, power-on hours. Rising reallocated/pending sectors is an early warning — treat it as ‘order a replacement now.’",code:"Key SMART attributes to watch:\n  Reallocated Sectors Count   -> rising = physical wear\n  Current Pending Sectors     -> rising = imminent failure risk\n  Uncorrectable Sector Count  -> data loss risk\n  Power On Hours              -> drive age\n  Temperature                 -> thermal stress"},
{t:"chkdsk (Windows) and fsck (Linux)",d:"These check file-system integrity and repair some errors. Run with care — they can take hours on large volumes and may alter data. Always back up first if the data is irreplaceable."},
{t:"Free space, snapshots, and shadow copies",d:"Low free space can cause OS + app misbehavior. Enterprises use Volume Shadow Copy (VSS) to take point-in-time snapshots for backup. Know they exist; don’t delete them casually."},
{t:"Permissions belong to the file system",d:"On NTFS, file/folder permissions are part of the metadata. On FAT32, permissions don’t exist. If you copy NTFS files to a FAT USB, you lose permissions — a classic support gotcha."},
{t:"Safe first actions when a disk misbehaves",d:"Stop heavy writes, capture SMART, check free space, check Event Viewer for disk errors, test with a known-good cable/bay if external. Never run aggressive repair on a drive you haven’t backed up."}
],whatIs:"A file system is how the OS organizes data on storage: directories, files, metadata, permissions, journaling. Troubleshooting storage means looking at health (SMART), integrity (chkdsk/fsck), and capacity (free space) — in that order, safely.",realWorld:"A teller reports ‘files are missing.’ A careful junior checks Recycle Bin, Shadow Copies, backup, and then SMART. Sometimes the files were deleted, sometimes they were on a failing disk, sometimes a GPO redirected the folder. Jumping to ‘reinstall’ destroys the evidence.",code:`// Safe storage triage

1. Stop unnecessary writes (close big apps, pause cloud sync).
2. Capture SMART with a read-only tool:
     Windows:   smartctl -a /dev/pd0    (via smartmontools)
     Linux:     sudo smartctl -a /dev/sda
3. Check free space on every volume.
4. Review Event Viewer:  "disk", "ntfs", "volmgr" sources.
5. Verify backups exist and are recent.
6. Only then run chkdsk / fsck if required.
7. Document timestamps, symptoms, and SMART output in the ticket.`,funFact:"Microsoft’s Volume Shadow Copy lets you right-click a folder in Windows and ‘Restore previous versions.’ Most users don’t know it exists. It has saved more spreadsheets than any recovery tool in history.",quiz:[
{q:"Which file system is typical for Windows system drives?",opts:["FAT32","NTFS","ext4","APFS"],ans:1},
{q:"Rising ‘Current Pending Sectors’ in SMART most likely means:",opts:["The disk is healthier","Imminent physical failure risk — plan a replacement","A Windows update is needed","DNS failure"],ans:1},
{q:"Copying a file from NTFS to a FAT32 USB causes what?",opts:["Permissions transfer perfectly","Permissions are lost because FAT32 doesn’t support them","Data is encrypted automatically","Free space is reset"],ans:1},
{q:"A safe first action on a misbehaving disk is:",opts:["Immediately reinstall the OS","Stop writes, capture SMART, verify backups, then decide","Delete the user profile","Format the drive"],ans:1}
],challenge:"On your own machine, find the file system of each drive and its free space. Right-click an important folder → ‘Properties’ → ‘Previous Versions’ or use Time Machine / Linux snapshots. Note whether shadow copies exist.",resources:[
{type:"docs",title:"NTFS overview",url:"https://learn.microsoft.com/windows-server/storage/file-server/ntfs-overview",source:"Microsoft Learn"},
{type:"article",title:"SMART (self-monitoring) explained",url:"https://en.wikipedia.org/wiki/Self-Monitoring,_Analysis_and_Reporting_Technology",source:"Wikipedia"},
{type:"video",title:"File systems in 100 seconds",url:"https://www.youtube.com/@Fireship",source:"Fireship"}
],eli5:"The file system is like the library’s label system. If the labels get messy, the books are fine but you can’t find them. SMART is the librarian whispering ‘the shelves are bending, please notice before they fall.’",codeWalkthrough:[
"Safe storage triage steps","Stop unnecessary writes to preserve state","Capture SMART data read-only","Check free space on every volume","Review disk-related Event Viewer sources","Confirm backups exist and are recent","Only then consider chkdsk/fsck","Document everything with timestamps"
],bugChallenge:{code:"Action taken by a junior:\n1. User reports missing files.\n2. Junior immediately runs chkdsk /f /r on the drive.\n3. chkdsk replaces orphaned clusters; data becomes harder to recover.\n4. Ticket closed: 'disk checked, files gone'.",hint:"What critical step was skipped before running a repair tool?",answer:"A backup/image of the current state was not taken, and less destructive options (Recycle Bin, Shadow Copies, backups, SMART check) were not tried first. Correct order: preserve state → check safe recovery sources → capture SMART → take image if possible → THEN consider chkdsk. Document every step."},difficulty:"beginner",prereqs:[4,5]},

  {id:7,title:"Windows Internals for Support",subtitle:"The minimum internals every junior must know",analogy:"Windows is a building with many rooms: Event Viewer is the CCTV archive, Services is the staff roster, Task Manager is the reception desk watching foot traffic, Registry is the blueprint vault. Don’t touch the blueprints without a reason.",points:[
{t:"Task Manager is your first triage tool",d:"CPU, memory, disk, network columns answer ‘what is the machine actually doing right now?’ Sort by each to find the process burning resources. Jumping to conclusions without opening Task Manager is amateur work."},
{t:"Services (services.msc)",d:"Windows services are background programs: Print Spooler, DNS Client, Windows Update, Defender. Knowing how to stop/start/restart a service fixes a huge share of real tickets safely.",code:"PowerShell basics for services:\n  Get-Service                         # list all\n  Get-Service -Name Spooler           # check print spooler\n  Restart-Service -Name Spooler       # restart safely\n  Get-Service | Where-Object {$_.Status -eq 'Stopped' -and $_.StartType -eq 'Automatic'}"},
{t:"Event Viewer (eventvwr.msc)",d:"System, Application, Security logs. Read timestamps, Event IDs, and sources. Don’t memorize IDs — learn to search them. Event Viewer answers ‘when did this start and what was logged?’"},
{t:"Registry Editor (regedit) — with fear",d:"Central config database. Editing the wrong key can brick a profile or boot. Rule: never edit registry without a backup (export the key), a reason, and approval. If you don’t know why you’re editing it, don’t."},
{t:"System File Checker and DISM",d:"sfc /scannow scans protected system files. If SFC can’t fix corruption, DISM can repair the component store. Use in order: SFC → DISM /RestoreHealth. These are safe, reversible first-aid.",code:"Run as Administrator (PowerShell / CMD):\n  sfc /scannow\n  DISM /Online /Cleanup-Image /CheckHealth\n  DISM /Online /Cleanup-Image /ScanHealth\n  DISM /Online /Cleanup-Image /RestoreHealth"},
{t:"Startup programs & scheduled tasks",d:"Slow boot or background CPU spikes often trace to startup apps or scheduled tasks. Task Manager → Startup tab; Task Scheduler → active tasks. Disable carefully; disabling the wrong thing can break corporate agents (AV/EDR/MDM)."},
{t:"User profile problems",d:"Corrupted profile = login works but things break (blank desktop, Outlook won’t open, OneDrive loops). Safe test: create a test user, log in, reproduce. If the test user works, the fault is profile-level."},
{t:"Common commands every support junior uses weekly",d:"gpupdate /force, ipconfig /all, nslookup, systeminfo, whoami /groups, net user, Get-LocalUser, Get-EventLog, Clear-DnsClientCache."}
],whatIs:"Windows internals for support is the tool and language layer above the OS: Task Manager, Services, Event Viewer, Registry, SFC/DISM, Startup, Task Scheduler, profiles, and core commands. Knowing this layer converts you from ‘rebooter’ to ‘troubleshooter.’",realWorld:"Executive can’t print. Junior A reboots. Junior B opens Services, sees Print Spooler stopped, restarts it, clears queue, prints a test page, documents in the ticket. Same problem, 5x faster resolution, and a reusable note.",code:`// Windows support triage, minimum viable

Task Manager:
   -> Which process is eating CPU/memory/disk/network?

Services (services.msc):
   -> Is the relevant service running?
   -> Start/stop carefully; document changes.

Event Viewer (eventvwr.msc):
   -> System, Application, Security logs.
   -> Timeline around the reported incident.

First-aid tools (run as admin):
   sfc /scannow
   DISM /Online /Cleanup-Image /RestoreHealth

Quick commands used daily:
   ipconfig /all
   nslookup <name>
   gpupdate /force
   gpresult /h report.html
   whoami /groups
   Get-EventLog -LogName System -Newest 20`,funFact:"SFC was introduced in Windows 2000 and is still one of the single most useful support tools two decades later, because corrupted system files remain one of the most common causes of flaky Windows behavior after updates or power loss.",quiz:[
{q:"Which tool should you open FIRST to see what a machine is actually doing?",opts:["Registry Editor","Task Manager","DISM","Notepad"],ans:1},
{q:"Print Spooler service stopped. Safest quick fix?",opts:["Reinstall Windows","Restart the Print Spooler service and clear the queue","Delete the user profile","Format the disk"],ans:1},
{q:"SFC cannot repair corruption. Next safe tool?",opts:["Buy a new laptop","DISM /Online /Cleanup-Image /RestoreHealth","chkdsk /f","regedit blindly"],ans:1},
{q:"Before editing the registry, what must you do?",opts:["Nothing, it’s safe","Export a backup of the key, know why you’re editing, and get approval in regulated environments","Disable antivirus","Disconnect the network"],ans:1}
],challenge:"Open Services on your own machine. Pick ONE service you don’t recognize. Look up what it does. Decide: safe to stop? If unsure, leave it running. Write a 3-sentence note about what you learned.",resources:[
{type:"docs",title:"Event Viewer (Microsoft Learn)",url:"https://learn.microsoft.com/windows/client-management/",source:"Microsoft Learn"},
{type:"docs",title:"SFC and DISM usage",url:"https://learn.microsoft.com/windows-server/administration/windows-commands/sfc",source:"Microsoft Learn"},
{type:"video",title:"Windows Event Viewer for beginners",url:"https://www.youtube.com/@professormesser",source:"Professor Messer"}
],eli5:"Windows is a busy office. Task Manager watches who’s running around, Services checks if each department is open, Event Viewer is the CCTV, and the Registry is the secret policy binder. You don’t rewrite the binder — you just read it carefully.",codeWalkthrough:[
"Windows support triage playbook","Open Task Manager first — what’s actually happening?","Open Services — is the expected service running?","Inspect Event Viewer for timeline","Blank separator","Run SFC as admin for system file integrity","Run DISM to repair the underlying image","Blank separator","Daily commands header","Inspect full IP config","Test DNS resolution","Force a Group Policy refresh","Export a Group Policy report","Check your group memberships","Read recent system events"
],bugChallenge:{code:"User reports slow login every morning.\nJunior opens regedit and starts deleting random keys under HKLM\\\\SOFTWARE to 'clean it up'.",hint:"Which sequence of safer tools should have come FIRST?",answer:"Do not touch the registry without a reason. Safer order: Task Manager (Startup tab), Event Viewer (user logon events), gpresult /h, then Services and Task Scheduler. Registry edits require export backup + approval + a documented hypothesis. Deleting random HKLM keys can break the system entirely."},difficulty:"intermediate",prereqs:[4,5,6]},

  {id:8,title:"macOS & Mixed-Endpoint Awareness",subtitle:"Enough Apple literacy to not freeze in an interview",analogy:"If Windows is a corporate office, macOS is a design studio: different furniture, different vocabulary, same purpose. In many MNCs both live in the same building — and a junior who panics on one wastes everyone’s time.",points:[
{t:"Why you need macOS basics even in Windows-first shops",d:"Executives, designers, and remote hires often prefer Macs. MNCs, startups, creative agencies, and many banks (branch exceptions, senior users) have Macs in the fleet. A junior who can handle both is materially more hireable."},
{t:"The macOS control surface",d:"System Settings (formerly System Preferences), Console (log viewer), Activity Monitor (Task Manager equivalent), Disk Utility (Disk Manager equivalent), Keychain Access (stored credentials), Terminal (zsh shell). Learn the names, not every detail.",code:"Windows -> macOS rough mapping\n  Task Manager     -> Activity Monitor\n  Event Viewer     -> Console (Logs)\n  Services         -> launchd / launchctl\n  Device Manager   -> System Information / System Settings\n  Registry         -> Property Lists (.plist) + defaults write\n  CMD/PowerShell   -> Terminal (zsh)\n  Disk Management  -> Disk Utility"},
{t:"User and admin accounts",d:"macOS has standard and admin users like Windows. Corporate Macs usually enroll in MDM (Jamf/Kandji/Intune) which manages policies, apps, and security baselines. Don’t remove MDM profiles without approval."},
{t:"Network basics on macOS",d:"System Settings → Network. Diagnostics: `ping`, `traceroute`, `networksetup -getinfo`, `scutil --dns`, `ifconfig`. Wi-Fi issues often trace to DNS or captive portals the same way they do on Windows."},
{t:"FileVault (disk encryption)",d:"Apple’s disk encryption. Recovery keys are critical — losing them means data loss. Enterprises escrow keys in MDM so IT can help recover."},
{t:"App installation and signing",d:"Apps must be signed and notarized for Gatekeeper. Corporate Macs often restrict installs via MDM. Don’t disable Gatekeeper casually — it’s a security control, not a nuisance."},
{t:"Common ticket types",d:"Mail/Teams won’t sync, VPN won’t connect, printer not found, battery drains fast, slow Spotlight indexing, kernel_task high CPU (thermal throttle), corporate app blocked by MDM."}
],whatIs:"macOS support for juniors isn’t mastery — it’s literacy. You need to know the tool names, safe diagnostics, MDM awareness, FileVault handling, and common ticket patterns. That’s enough to not panic and not break things.",realWorld:"A designer at an MNC has VPN issues on a MacBook. A Windows-only junior shrugs. A cross-platform junior opens Console, checks network logs, tests DNS with `scutil --dns`, verifies the MDM config profile applied, and escalates with evidence. That’s a senior trajectory.",code:`// macOS safe diagnostics (read-only first)

Terminal (zsh):
  uname -a                      # OS and kernel info
  system_profiler SPHardwareDataType
  sw_vers                       # macOS version
  ifconfig                      # interfaces
  networksetup -getinfo Wi-Fi
  scutil --dns                  # DNS config
  ping -c 4 8.8.8.8             # connectivity
  log show --last 1h --predicate 'eventMessage contains "error"' --info

UI:
  Activity Monitor              # CPU/memory/disk/network
  Console                       # live and stored logs
  Disk Utility                  # disks, volumes, first aid
  System Settings > Network, Profiles, Privacy & Security`,funFact:"When a Mac sounds its cooling fan loudly and performance drops, the culprit is often a process called `kernel_task`. That isn’t a bug — it’s macOS deliberately keeping CPU busy to reduce heat so the hardware doesn’t overheat.",quiz:[
{q:"The macOS equivalent of Windows Task Manager is:",opts:["Finder","Activity Monitor","Keychain","Console"],ans:1},
{q:"Corporate Macs usually have which control layer?",opts:["No management at all","An MDM (Jamf/Kandji/Intune) enforcing policies and apps","Only antivirus","Only BIOS locks"],ans:1},
{q:"FileVault recovery keys should be:",opts:["Printed and left in the laptop bag","Escrowed in the MDM / enterprise system so IT can recover access","Sent to the user’s personal email","Discarded immediately"],ans:1},
{q:"Which tool shows live and stored logs on macOS?",opts:["Event Viewer","Console","Services.msc","regedit"],ans:1}
],challenge:"If you have access to any Mac (yours, a friend’s, a family member’s, or a lab), open Activity Monitor, Console, Disk Utility, and Terminal. Run `sw_vers`, `ifconfig`, and `scutil --dns`. Note the version, primary interface, and DNS servers.",resources:[
{type:"docs",title:"macOS Deployment (Apple)",url:"https://support.apple.com/guide/deployment/welcome/web",source:"Apple"},
{type:"docs",title:"macOS Terminal basics",url:"https://support.apple.com/guide/terminal/welcome/mac",source:"Apple"},
{type:"video",title:"macOS for IT support",url:"https://www.youtube.com/results?search_query=macos+for+it+support",source:"YouTube search"}
],eli5:"Macs are different cars, same roads. Gas pedal is in a different place, gauges are labeled differently, but it still stops at red lights and uses the same fuel. Learn the Mac dashboard and you can drive both.",codeWalkthrough:[
"macOS safe diagnostics script","OS kernel info","Hardware profile","macOS version","Network interface details","Wi-Fi details","DNS configuration","Connectivity test","Last hour of error logs","Blank separator","UI tools header","Activity Monitor — live resource view","Console — log viewer","Disk Utility — disks and first aid","System Settings relevant panels"
],bugChallenge:{code:"Ticket: Mac laptop fans are loud; system feels sluggish. Junior removes all Login Items, then uninstalls the MDM profile to 'clean up'.",hint:"Which corporate control was destroyed, and which gentler diagnostic was skipped?",answer:"Removing MDM profiles breaks enterprise control: security baselines, VPN, certificates, app policies. Correct order: Activity Monitor to identify the busy process (often kernel_task due to thermals), clean vents/dust, check `pmset -g`, ensure no runaway background task, then escalate. Never uninstall MDM without approval."},difficulty:"beginner",prereqs:[4]},

  {id:9,title:"Accounts, Profiles & Permissions",subtitle:"Who the user is changes everything",analogy:"Accounts are badges. A lobby badge lets you into the lobby. An executive badge opens the executive floor. An admin badge opens every door but also logs every step. In enterprise IT, giving the wrong badge is a security incident.",points:[
{t:"Local user vs domain user",d:"Local users exist on ONE machine. Domain users are managed centrally by Active Directory — the same identity works across every joined machine. Enterprises standardize on domain/Entra users to keep control."},
{t:"Standard user vs administrator",d:"Standard users run apps and do daily work. Admins change the system. A classic corporate mistake is giving everyone local admin to ‘avoid tickets.’ That converts small malware incidents into full compromises."},
{t:"Profiles — what they really are",d:"A profile is a folder tree plus registry hive holding the user’s desktop, documents, Outlook data, app settings. Profiles can become corrupted → weird symptoms even though login ‘works.’ A test account is the fastest differentiator."},
{t:"UAC — User Account Control",d:"The dialog that asks ‘Do you want to allow this app to make changes?’ It’s a consent layer, not annoying noise. Disabling UAC across the fleet to silence tickets is a real-world security mistake you must refuse politely."},
{t:"Groups — the real unit of permission",d:"Don’t assign permissions to individual users. Put users into groups (Sales, Finance, IT-Support) and grant permissions to groups. When someone joins or leaves, you change group membership, not a hundred files."},
{t:"NTFS vs share permissions",d:"NTFS applies on the file system itself; share applies when accessed over the network. Effective access is the intersection — most restrictive wins. Don’t set loose share permissions assuming NTFS will protect you; follow least privilege on both."},
{t:"Locked/disabled/expired accounts",d:"Locked = too many bad passwords → unlock. Disabled = administratively turned off → enable if valid. Expired password → user resets. These are daily helpdesk tickets; don’t confuse the three."},
{t:"Never share credentials. Ever.",d:"If a senior asks for your password, say no politely and offer to perform the task with them or raise an access request. This single rule has saved many careers during audits and incidents."}
],whatIs:"This module is how identity, membership, and permission combine in Windows and corporate environments. It’s the entry point to Active Directory (lesson 14+) and the single most tested topic in support/sysadmin interviews.",realWorld:"A new marketing hire can’t open the team’s shared drive. A junior adds them individually to the folder. A sysadmin adds them to the ‘Marketing-RW’ security group, which already has the correct share+NTFS permissions. Same ticket, different career trajectory.",code:`// Safe permission troubleshooting — the 4 layers

1. Identity layer
   - Is the user the correct account? (not a personal or test account)
   - whoami  /  whoami /groups

2. Membership layer
   - Which groups is the user in?
   - Is the group the one actually granted access?

3. Share layer
   - \\\\server\\share  -> Share permissions tab

4. File system layer
   - NTFS -> right-click -> Properties -> Security -> Effective Access

Effective access = intersection of share AND NTFS for the identity.
Most restrictive wins.`,funFact:"In Active Directory’s ‘AGDLP’ model: Accounts go into Global groups, Global groups go into Domain Local groups, Domain Local groups get Permissions. This sounds bureaucratic — and it is — but it scales cleanly and survives audits.",quiz:[
{q:"Which is the safest way to grant folder access in a corporate environment?",opts:["Add each user directly","Use groups; grant permission to groups, not individuals","Share the admin password","Make everyone an admin"],ans:1},
{q:"A domain user differs from a local user because:",opts:["Domain users are free","Domain users are centrally managed in AD and work across joined machines","Local users are more secure","Domain users cannot log in"],ans:1},
{q:"When share and NTFS permissions conflict, the effective access is:",opts:["The most permissive","The most restrictive","Whichever was set first","Always read-only"],ans:1},
{q:"A colleague asks for your admin password. Correct response?",opts:["Share it briefly","Decline politely and offer an approved path (elevation, access request, or performing the task with them)","Post it in chat","Ignore and go home"],ans:1}
],challenge:"On your own machine, run: whoami, whoami /groups, net localgroup Administrators. Note which groups you belong to. Compare to a standard user account if you have one. Write a 3-line summary of what the differences mean.",resources:[
{type:"docs",title:"Windows user accounts",url:"https://learn.microsoft.com/windows/security/identity-protection/",source:"Microsoft Learn"},
{type:"docs",title:"NTFS permissions",url:"https://learn.microsoft.com/windows-server/identity/ad-ds/plan/",source:"Microsoft Learn"},
{type:"video",title:"UAC explained",url:"https://www.youtube.com/@professormesser",source:"Professor Messer"}
],eli5:"You have a badge. Your badge opens some doors, not all. Groups are like departments — you get in because your department can, not because you’re special. Giving everyone the master key looks friendly until something gets stolen.",codeWalkthrough:[
"Four layers of permission troubleshooting","Identity layer header","Check the actual account being used","Blank separator","Membership layer header","Inspect group membership","Blank separator","Share layer header","Share permissions path","Blank separator","File system layer header","NTFS effective access path","Blank separator","Rule: intersection of share and NTFS wins"
],bugChallenge:{code:"Issue: User says 'I can’t access the HR folder.'\nJunior adds the user directly to the folder’s ACL with Full Control.\nTwo weeks later, an audit flags the folder for over-permissioning.",hint:"What was the structurally safer design choice?",answer:"Never grant direct user-level Full Control on shared folders. Add the user to the existing HR security group that already has appropriate rights (or create one if missing). Follow least privilege (Read, Modify — not Full Control unless required). Document the access request."},difficulty:"beginner",prereqs:[7]},

  {id:10,title:"Networking Tools on Windows",subtitle:"Fast triage from the command line",analogy:"Network tools are like a doctor’s vitals kit: thermometer, stethoscope, blood pressure cuff. You don’t diagnose the patient by staring at them — you measure. ping, ipconfig, tracert, nslookup, gpresult are your vitals.",points:[
{t:"ipconfig /all — your first move",d:"Shows IP, subnet mask, gateway, DNS servers, DHCP status, adapter name. If a user ‘has no internet,’ 50% of the time the answer is hiding in this output (no IP, wrong DNS, APIPA 169.254.x.x address, etc.).",code:"Common uses:\n  ipconfig /all                      # full view\n  ipconfig /release                  # drop current DHCP lease\n  ipconfig /renew                    # get a new DHCP lease\n  ipconfig /flushdns                 # clear local DNS cache\n  ipconfig /displaydns               # see cached names"},
{t:"ping — is it reachable?",d:"Tests layer 3 reachability and round-trip time. Ping the gateway first, then DNS servers, then a public IP (8.8.8.8), then a name (google.com). The first failure tells you which layer is broken."},
{t:"tracert — where does it die?",d:"Shows each hop on the path. If a user can reach the gateway but not the internet, tracert shows exactly where packets stop. Some hops block ICMP and look dead — read results carefully."},
{t:"nslookup — is DNS working?",d:"Resolves a name to an IP and shows which server answered. If ping by IP works but ping by name fails → DNS. If nslookup uses the wrong server → check DNS settings.",code:"  nslookup example.com\n  nslookup example.com 8.8.8.8       # force a specific DNS\n  Resolve-DnsName example.com        # PowerShell modern version"},
{t:"gpupdate and gpresult",d:"gpupdate /force reapplies Group Policy. gpresult /h report.html writes a full GPO-applied report. These answer ‘did this machine actually get the policies we think?’ — a very common mystery in enterprises."},
{t:"Built-in network diagnostics",d:"netsh wlan show interfaces (Wi-Fi details), netstat -ano (open connections + PID), route print (routing table), arp -a (MAC-to-IP mapping on local network)."},
{t:"The 4-step network triage order",d:"(1) Local IP correct? (2) Gateway reachable? (3) DNS resolving? (4) Destination reachable? Don’t skip ahead. The first failing step is your answer."}
],whatIs:"Windows networking tools let you inspect every layer of connectivity without opening a packet capture. Memorizing five commands (ipconfig, ping, tracert, nslookup, gpresult) handles the vast majority of ‘internet not working’ tickets safely.",realWorld:"A whole branch can’t reach the CBS portal. Junior runs ipconfig (OK), pings gateway (OK), pings DNS (OK), nslookup portal.bank.local (fails). Conclusion: DNS record or DNS server issue. Escalates with evidence — not a guess.",code:`// 4-step network triage playbook (Windows)

1) Do I have a sane IP?
     ipconfig /all
     -> IP assigned? not APIPA 169.254.x.x? correct DNS?

2) Can I reach my gateway?
     ping <gateway-ip>        # from ipconfig output

3) Is DNS resolving?
     nslookup example.com
     Resolve-DnsName portal.company.local

4) Can I reach the destination?
     ping <public-ip>
     ping <destination-name>
     tracert <destination-name>

Group policy sanity check:
     gpupdate /force
     gpresult /h %TEMP%\\gpo.html
     start %TEMP%\\gpo.html`,funFact:"The name ‘ping’ comes from sonar — you send a sound, wait for an echo, and measure the delay. Mike Muuss wrote the original ping program in 1983 in one evening while debugging a network problem.",quiz:[
{q:"An ‘APIPA’ address like 169.254.10.77 tells you:",opts:["The DHCP server is fine","The machine failed to get a DHCP lease","DNS is broken","The user is an admin"],ans:1},
{q:"Ping by IP works; ping by name fails. Primary suspect:",opts:["CPU","DNS","RAM","Printer"],ans:1},
{q:"Which command writes a full Group Policy applied report?",opts:["gpresult /h report.html","ping /g","netstat -a","sfc /scannow"],ans:0},
{q:"Best first command when a user says ‘no internet’:",opts:["regedit","ipconfig /all and compare to a working machine","Reinstall Windows","Replace the mouse"],ans:1}
],challenge:"On your own machine, run the 4-step triage: ipconfig /all, ping your gateway, nslookup a real domain, tracert that domain. Save the outputs. Try to explain each in plain English.",resources:[
{type:"docs",title:"Windows networking commands",url:"https://learn.microsoft.com/windows-server/administration/windows-commands/windows-commands",source:"Microsoft Learn"},
{type:"video",title:"ipconfig, ping, tracert, nslookup in 10 minutes",url:"https://www.youtube.com/@NetworkChuck",source:"NetworkChuck"},
{type:"article",title:"APIPA addressing",url:"https://en.wikipedia.org/wiki/Link-local_address",source:"Wikipedia"}
],eli5:"When the internet doesn’t work, you don’t guess — you check step by step: does the phone have a number? can you call the next office? does the phonebook know the name? can you call the real destination? That order is the whole trick.",codeWalkthrough:[
"Step 1 — confirm the machine has a sane IP and DNS","ipconfig examines the full adapter state","Look for missing IP or APIPA","Blank separator","Step 2 — reach the gateway","ping the gateway IP shown in step 1","Blank separator","Step 3 — DNS resolution check","nslookup via default server","PowerShell modern equivalent","Blank separator","Step 4 — destination reachability","ping the IP","ping the name","tracert for path visibility","Blank separator","GPO sanity check header","Force reapply","Export HTML report","Open it for review"
],bugChallenge:{code:"Ticket: 'Internet is broken, whole office down!'\nJunior immediately reboots the core router.\nOutage was only DNS-related and the reboot caused an extra 5 minutes of real downtime.",hint:"Which order of commands would have revealed the true layer BEFORE any reboot?",answer:"Run the 4-step triage first: ipconfig /all, ping gateway, nslookup, ping destination. DNS failures look like ‘no internet’ but internet may actually be up. Never reboot production network hardware without evidence and, in banks, without approved change/rollback. Document findings."},difficulty:"intermediate",prereqs:[7,9]},

  {id:11,title:"Office / M365 User Issues",subtitle:"The everyday pain recruiters expect you to know",analogy:"Email and Teams are like the plumbing of a modern office. Nobody notices them until they stop — then every single person becomes an emergency ticket at the same time. A good junior fixes the right pipe; a weak one reboots the whole building.",points:[
{t:"Outlook profile is not the mailbox",d:"Outlook stores a local profile (connection settings) + an OST file (cached mail). Many ‘Outlook is broken’ tickets are profile/OST corruption, not mailbox-side. A new Outlook profile often fixes things that reinstalling never would."},
{t:"Mail flow layers",d:"User → Outlook → Exchange Online → recipient server → destination. Look at message trace / delivery reports in admin center. Don’t guess where a message died."},
{t:"Permissions vs delegation",d:"Folder permissions (Inbox, Calendar) = another user sees your data. Delegation = another user can act on your behalf (send-as, send-on-behalf). Know the difference; they cause very different support tickets."},
{t:"Shared mailbox vs distribution list vs M365 group",d:"Shared mailbox: everyone sees the same inbox. DL: routes mail to multiple inboxes. M365 group: mailbox + Teams + SharePoint + Planner bundle. The wrong choice creates years of confusion."},
{t:"Teams failures",d:"Usually one of: sign-in/token, camera/mic/permissions, network (UDP/SIP ports), or cache. `%appdata%\\Microsoft\\Teams` cache clearing is a classic fix."},
{t:"OneDrive / SharePoint sync",d:"Long paths, reserved characters, large files, locked files, and shadow-copy quotas are common. Users blame ‘OneDrive broken’ for file-name issues that are really their own. Read the sync icon and logs."},
{t:"MFA and Conditional Access friction",d:"Users get blocked by conditional access on new devices/locations. Don’t disable policies to ‘fix’ it — investigate sign-in logs in Entra and let the user complete registration properly."},
{t:"Licensing and mailbox size",d:"‘Mail won’t send’ may simply be: license was removed, mailbox quota full, or sending limits hit. Check license + mailbox size before anything else."}
],whatIs:"M365/Office support is the bulk of daily corporate helpdesk work. Mastering the mental model (profile vs mailbox, permission vs delegation, layered mail flow, Teams cache, OneDrive sync, Conditional Access) eliminates most wasted reboots.",realWorld:"CEO: ‘I sent an important email, customer didn’t get it.’ Junior runs Exchange message trace, sees the message was rejected by the recipient’s server (‘mailbox full’). Responds with evidence in 10 minutes. No blame, no blind reboot, clean resolution.",code:`// M365 triage checklist (admin + user side)

User side:
  - Close Outlook -> Control Panel -> Mail -> Profiles
  - Create a NEW Outlook profile as a test
  - Clear Teams cache:  %appdata%\\Microsoft\\Teams
  - Check OneDrive sync icon and pending/blocked files
  - Verify MFA and device-registration state

Admin side (Microsoft 365 / Exchange Online):
  - Message Trace for failed deliveries
  - Mailbox size + quotas
  - License assignment state
  - Sign-in logs (Entra)  -> Conditional Access blocks?
  - Shared mailbox / delegation / send-as audit`,funFact:"A surprising number of ‘Outlook broken’ tickets are caused by users deleting the OST file thinking it’s a virus. Outlook simply rebuilds it on next sign-in — the pain is just the cache resync, not an actual outage.",quiz:[
{q:"Which admin tool shows exactly where an email was accepted or rejected in transit?",opts:["Event Viewer","Exchange/M365 Message Trace","regedit","chkdsk"],ans:1},
{q:"Teams has mic issues for one user only. First check?",opts:["Reinstall Windows","Permissions (privacy), device selection, and cache clear","Replace the router","Disable MFA"],ans:1},
{q:"User hits Conditional Access block on a new laptop. Safe fix?",opts:["Disable Conditional Access globally","Guide the user through proper device registration / MFA flow and verify sign-in logs","Share admin password","Ignore the ticket"],ans:1},
{q:"‘Mail stopped sending.’ Which is ALWAYS worth checking early?",opts:["Mouse DPI","License assignment and mailbox quota","Keyboard layout","BIOS version"],ans:1}
],challenge:"Open your own Outlook and Teams. Find the profile settings (Outlook: Control Panel → Mail → Profiles). Locate the Teams cache folder (%appdata%\\Microsoft\\Teams). Do NOT delete anything. Just note the paths in your lab journal.",resources:[
{type:"docs",title:"Message Trace in Exchange Online",url:"https://learn.microsoft.com/exchange/monitoring/trace-an-email-message/trace-an-email-message",source:"Microsoft Learn"},
{type:"docs",title:"Conditional Access overview",url:"https://learn.microsoft.com/entra/identity/conditional-access/overview",source:"Microsoft Learn"},
{type:"docs",title:"OneDrive sync troubleshooting",url:"https://learn.microsoft.com/onedrive/troubleshoot-sync",source:"Microsoft Learn"}
],eli5:"Email and Teams are two different highways. When a car doesn’t arrive, you don’t rebuild the car — you check: did it leave the garage, reach the first intersection, make it through the tunnel, get to the destination city? That map is called ‘message trace.’",codeWalkthrough:[
"M365 triage checklist","User-side header","Recreate Outlook profile as a test","Blank separator","Clear Teams cache path","Check OneDrive sync status","Verify MFA/device state","Blank separator","Admin-side header","Message trace for mail flow","Mailbox size and quotas","License assignment","Sign-in logs in Entra","Conditional Access investigation","Shared mailbox / delegation audit"
],bugChallenge:{code:"Ticket: 'I cannot send mail to external customer.'\nJunior removes the user's MFA to 'test', then reassigns a license, then asks the user to resend.\nAudit later flags MFA removal as a policy violation.",hint:"Which evidence should have been gathered BEFORE any policy change?",answer:"Run Message Trace first to see WHERE the message failed: rejected by recipient? quota? policy? Check mailbox size and license. Never remove MFA as a troubleshooting shortcut — this is a policy violation in most regulated environments. Document, escalate with evidence."},difficulty:"beginner",prereqs:[9,10]},

  {id:12,title:"Imaging, Onboarding & Offboarding",subtitle:"The lifecycle work every IT team must get right",analogy:"Onboarding/offboarding is like checking people into and out of a hotel. On day one you hand over the right keys, towels, and wifi. On checkout you reclaim every key — or another guest walks into an unlocked room.",points:[
{t:"Golden image — one trusted starting point",d:"A corporate laptop should boot from a standardized, patched, tested image with required apps, policies, and agents pre-baked. Imaging reduces variance → fewer weird tickets → faster onboarding."},
{t:"Provisioning flow (joiner)",d:"Account in AD/Entra → group memberships → license assignment → hardware allocation → image deployment (MDM or WDS/MDT) → MFA registration → delivery. Every step is a checkbox; missing one creates a ticket."},
{t:"Movers — when someone changes role",d:"Add new group/licenses, REMOVE old ones. The classic failure is ‘permissions only added, never removed’ — a single employee accumulates access to everything over 5 years and becomes a compliance nightmare."},
{t:"Leavers — the security gate",d:"Disable account on last day, revoke sessions, rotate shared credentials, remove from DLs/groups, reclaim device, wipe or re-image device, archive mailbox, transfer OneDrive to manager. Document all of it."},
{t:"MDM / Intune for fleet management",d:"Modern enrollment pushes apps, policies, compliance, and Conditional Access to every device. Lost laptop? Remote wipe. Failed compliance? Block access. This is the core of modern endpoint admin work."},
{t:"BitLocker / FileVault key escrow",d:"Disk encryption is required in most enterprises. Recovery keys MUST be escrowed in AD/Entra/MDM. Losing a recovery key for an executive laptop is a career-visible incident."},
{t:"Documentation is the product",d:"Onboarding/offboarding is judged by the paper trail. Every approval, every access change, every device return — timestamped, signed, searchable. Auditors love this. Messy IT gets blamed for everything."}
],whatIs:"The joiner-mover-leaver (JML) lifecycle with imaging, MDM, licensing, permissions, MFA, and documentation. Juniors who master this become immediately useful — these tickets happen every week and directly affect security and user happiness.",realWorld:"An executive leaves. Junior A just disables the account. Three months later, an external vendor still has their email forwarded to a personal address because a delegation wasn’t revoked. Junior B runs a full offboarding checklist — mailbox, delegations, DLs, app access, MFA, devices, escrow keys — and documents every step.",code:`// Joiner-Mover-Leaver (JML) checklist sketch

JOINER:
  [ ] Create AD/Entra account with standard naming
  [ ] Assign standard groups (department, country, role)
  [ ] Assign licenses (M365 plan, specific apps)
  [ ] Register MFA; set initial password policy
  [ ] Allocate device; enroll in MDM
  [ ] Deliver onboarding doc + first-day checklist

MOVER:
  [ ] Add new-role groups and licenses
  [ ] REMOVE old-role groups and licenses
  [ ] Update manager, cost center, distribution lists
  [ ] Access review signed by new manager

LEAVER:
  [ ] Disable account on last business hour
  [ ] Revoke active sessions / tokens
  [ ] Remove from DLs, Teams, shared mailboxes, apps
  [ ] Archive mailbox; transfer OneDrive to manager
  [ ] Reclaim hardware; wipe or re-image
  [ ] Close ticket with evidence attached`,funFact:"In mature enterprises, ‘how long it takes a new hire to have all the right access on day one’ is a tracked metric — and the best orgs get it under 1 day. The worst take weeks and lose productivity that dwarfs the salary saved.",quiz:[
{q:"Movers most often fail in which direction?",opts:["Old permissions are never removed","New permissions are never granted","Licenses are always correct","Devices are always wiped"],ans:0},
{q:"BitLocker recovery keys should be:",opts:["Printed and left in the laptop bag","Escrowed in AD/Entra/MDM so IT can recover access","Sent to user’s personal Gmail","Stored only on the user’s phone"],ans:1},
{q:"Which is a critical leaver step that juniors often forget?",opts:["Reclaim the stapler","Revoke active sessions and check delegations / forwarders","Replace the monitor","Change the chair"],ans:1},
{q:"Why is a golden image valuable?",opts:["It looks cool","It standardizes the starting state, reducing variance and tickets","It increases attack surface","It is required by ISO 90001 only"],ans:1}
],challenge:"Draft your own JML checklist as a one-page document. Share it with yourself as a PDF. This becomes real interview evidence when you can walk through it live.",resources:[
{type:"docs",title:"Microsoft Intune overview",url:"https://learn.microsoft.com/mem/intune/",source:"Microsoft Learn"},
{type:"docs",title:"BitLocker recovery keys",url:"https://learn.microsoft.com/windows/security/information-protection/bitlocker/",source:"Microsoft Learn"},
{type:"video",title:"JML process in enterprise IT",url:"https://www.youtube.com/@johnsavill",source:"John Savill"}
],eli5:"When someone joins, you give them a desk, a keyboard, a keycard, and a chair. When they leave, you take them all back. If you forget the keycard, any stranger can sit at that desk tomorrow.",codeWalkthrough:[
"JML checklist title","Joiner header","Create account","Assign groups","Assign licenses","MFA and password","Device and MDM","Onboarding doc","Blank separator","Mover header","Add new access","Remove old access","Update identity metadata","Manager-signed access review","Blank separator","Leaver header","Disable on last hour","Revoke active sessions","Remove from lists/apps","Archive mailbox and transfer data","Reclaim and wipe device","Close with evidence"
],bugChallenge:{code:"Employee left 90 days ago. Junior disabled the account on day 1.\nToday an auditor finds: mailbox still forwarding to a personal gmail, the leaver is still in 3 DLs, their laptop was never reclaimed, and BitLocker keys were not escrowed.",hint:"How many JML steps were actually missed?",answer:"At least five: forwarder not revoked, DL memberships not removed, hardware not reclaimed, device not wiped, BitLocker recovery keys not escrowed before offboarding. Build and follow a full leaver checklist; attach evidence to the ticket at each step."},difficulty:"beginner",prereqs:[9,11]},

  {id:13,title:"Remote Support & Ticket Hygiene",subtitle:"Support quality is part technical, part process",analogy:"A remote support session is like a phone doctor: you can’t see the patient, so you ask precise questions, take notes, and describe what you’re doing so they don’t panic. Ticket hygiene is the medical chart everyone after you will read.",points:[
{t:"Connect like a professional, not a pirate",d:"Use the enterprise’s approved remote-access tool (Intune/SCCM remote help, Quick Assist, TeamViewer Enterprise, Bomgar/BeyondTrust, etc.). Never install random free tools on a corporate machine."},
{t:"Announce every action",d:"Say out loud what you’re about to do: ‘I’m going to open Services and restart Print Spooler. You’ll see a quick flicker. Is that OK?’ This builds trust and eliminates surprise tickets."},
{t:"The anatomy of a good ticket note",d:"Symptom (user’s words) → environment (OS, app, machine) → what you checked → what you found → what you changed → what you validated → follow-up. If another tech opens your ticket next week, they should understand it in 60 seconds."},
{t:"Severity vs priority — not the same",d:"Severity = technical impact. Priority = business impact. A CEO’s dead mouse is higher priority than a dev’s slow IDE, even if the technical severity is lower. Don’t confuse them."},
{t:"SLA and why it governs your day",d:"Service-Level Agreements define first-response and resolution targets. Missing SLA is reportable. Update the ticket publicly with progress every SLA checkpoint — silence is a support sin."},
{t:"Escalation is a structured handoff",d:"When you escalate, include: current state, what you tried, what you think is happening, what you need. ‘Please fix’ is not escalation. ‘AD replication appears broken between DC01 and DC02, ran repadmin and saw X, attaching logs, need network team to verify port 88/389 reachability’ is."},
{t:"Knowledge base — write while it’s fresh",d:"After closing a tricky ticket, spend 10 minutes turning your ticket notes into a KB article. Future you saves hours. Future coworkers silently worship you."}
],whatIs:"Remote support and ticket hygiene are the process craft of corporate IT. Technical skill gets you in the door; ticket quality and escalation discipline get you promoted.",realWorld:"Two juniors fix the same issue. One leaves a ticket note that says ‘done.’ The other writes a 6-line note that another tech can read in 60 seconds. Six months later, the second junior’s notes have become KB articles and they’re being considered for team lead.",code:`// Good ticket note template

--- Ticket #123456
User: Alice (Marketing)
Device: LAP-ALC-0421 / Win 11 / domain-joined
Symptom (user's words): "Outlook keeps asking for my password"
Environment: Outlook 365, M365 tenant, corporate VPN disconnected
Steps taken:
  - Verified user account is enabled and not locked
  - Recreated Outlook profile as a test
  - Cleared cached credentials in Credential Manager
  - Observed Conditional Access block in Entra sign-in logs
Root cause (likely): user's device compliance state was
  non-compliant (missing OS patch) -> CA blocked Exchange
Action: requested patch install + reboot; validated sign-in OK
Follow-up: monitor for 24h; confirm no repeat
Time spent: 25 min
---`,funFact:"Some of the most senior engineers in global banks got promoted not for heroic fixes but for consistently writing the clearest ticket notes and KB articles on the team — because that’s what scales.",quiz:[
{q:"Severity vs priority — which is true?",opts:["They are identical","Severity = technical impact; priority = business impact","Priority = technical impact only","Severity = cost only"],ans:1},
{q:"Which is the cleanest escalation?",opts:["‘Please fix, urgent’","Current state, what you tried, likely cause, what you need, attached logs","A one-line email with no context","Calling without a ticket"],ans:1},
{q:"Which practice scales your team most?",opts:["Closing tickets in silence","Turning good ticket notes into KB articles","Using random free remote tools","Skipping SLA updates"],ans:1},
{q:"Before taking any action on a remote session, you should:",opts:["Move fast quietly","Tell the user exactly what you’re about to do and confirm","Reboot without warning","Disconnect"],ans:1}
],challenge:"Write a template ticket note (like the one in the lesson) for a problem you’ve recently solved — personal or lab. Use the sections: Symptom, Environment, Steps, Root cause, Action, Follow-up. Save it as your standard template.",resources:[
{type:"docs",title:"ITIL 4 Foundation — Incident basics",url:"https://www.axelos.com/certifications/itil-service-management/itil-4-foundation",source:"AXELOS"},
{type:"video",title:"How to write great tickets",url:"https://www.youtube.com/results?search_query=how+to+write+great+it+tickets",source:"YouTube search"},
{type:"article",title:"SLA, OLA, UC explained",url:"https://en.wikipedia.org/wiki/Service-level_agreement",source:"Wikipedia"}
],eli5:"Fixing a computer quietly and leaving no notes is like a doctor writing ‘he’s fine now’ on every chart. The next doctor has no idea what happened. Good notes turn support into a team sport.",codeWalkthrough:[
"Ticket template header","Ticket number and opener","User + department","Device + OS + join state","User’s literal words","Relevant environment context","Steps header","Each action the tech took in order","Observed evidence","Hypothesis for root cause","Action taken","Follow-up plan and monitoring","Time spent","Closing divider"
],bugChallenge:{code:"Ticket note (actual): 'Fixed.'",hint:"What would a tech reading this next month have to do to understand it?",answer:"Rewrite with the full template: Symptom (user’s words), Environment, Steps taken, Evidence observed, Likely root cause, Action, Follow-up, Time spent. One-word closures waste team time and destroy audit trails."},difficulty:"beginner",prereqs:[10,11]},

  {id:14,title:"What Active Directory Actually Does",subtitle:"Why AD is the backbone of most enterprises",analogy:"Active Directory is the company’s phonebook + badge office + policy manual, all in one. Every person, every device, every group, every rule — stored centrally, authenticated against, and logged.",points:[
{t:"Domain, Forest, Tree — vocabulary first",d:"A domain is an administrative boundary (contoso.local). A tree is one or more domains sharing a namespace. A forest is one or more trees sharing a schema and global catalog. Most companies run ONE domain in ONE forest."},
{t:"Domain Controller (DC)",d:"A server running AD DS that authenticates logins, stores directory data, and replicates with other DCs. Multiple DCs provide redundancy. If all DCs die, logins stop across the company."},
{t:"Objects — users, computers, groups, OUs",d:"Users (people), Computers (joined devices), Groups (collections for permissioning), OUs (organizational units — containers for structure and policy targeting)."},
{t:"Authentication vs authorization",d:"AuthN: proving who you are (Kerberos tickets, NTLM fallback). AuthZ: deciding what you can do (group memberships, ACLs). AD handles both, but they are different questions."},
{t:"Global Catalog, sites, replication — high level",d:"GC holds a partial copy of all domain objects for cross-domain lookups. Sites model physical network locations. Replication moves changes between DCs — broken replication = inconsistent auth."},
{t:"Entra ID (the cloud cousin)",d:"Microsoft Entra ID (formerly Azure AD) is cloud identity for M365/Azure. It’s NOT the same as AD DS — different protocols, different structure. Hybrid identity syncs on-prem AD → Entra via Entra Connect."},
{t:"Why AD is an interview staple",d:"It underlies logon, GPO, file access, email access, Kerberos, DNS, and most enterprise tooling. If you can’t explain AD clearly, most infra/support interviews stall early."}
],whatIs:"Active Directory Domain Services (AD DS) is Microsoft’s directory for identities, devices, groups, and policies. It enables centralized authentication, authorization, and configuration across a Windows enterprise.",realWorld:"A bank has 200 branches. Without AD, each branch manages its own users. With AD, a single account grants access everywhere it should and nowhere it shouldn’t — and policy changes propagate to all 10,000 machines in hours.",code:`// AD building blocks (mental model)

Forest
 └── Tree (one namespace)
      └── Domain  (contoso.local)
           ├── OU=Headquarters
           │    ├── OU=Users
           │    └── OU=Computers
           ├── OU=Branches
           ├── Groups (Global / Domain Local / Universal)
           └── Domain Controllers
                ├── DC01  (Authoritative)
                └── DC02  (Replica)

Authentication paths:
  Kerberos (primary)   -> tickets, tight clock tolerance
  NTLM     (fallback)  -> weaker, phased out where possible

Policy:
  GPO linked to OU  -> applies to users/computers within`,funFact:"Kerberos — the primary AD authentication protocol — is named after the three-headed dog guarding the underworld in Greek myth. It has three ‘heads’: client, service, and key distribution center (KDC).",quiz:[
{q:"A Domain Controller primarily:",opts:["Hosts applications","Authenticates users, stores directory data, and replicates with other DCs","Runs antivirus","Acts as a backup printer"],ans:1},
{q:"What’s the difference between authentication and authorization?",opts:["No difference","AuthN = prove identity; AuthZ = decide allowed actions","AuthZ is a backup for AuthN","They are both networking protocols"],ans:1},
{q:"Entra ID is:",opts:["The same as on-prem AD DS","Microsoft’s cloud identity service, typically synced from on-prem AD via Entra Connect","A firewall product","A certification"],ans:1},
{q:"Which component models physical network locations in AD?",opts:["OUs","Sites","Groups","Domains"],ans:1}
],challenge:"Sketch the forest/domain/OU structure of a fictional mid-size bank with HQ and 5 branches. Mark where DCs live, which OU holds which users and computers, and which groups control file-share access.",resources:[
{type:"docs",title:"AD DS overview",url:"https://learn.microsoft.com/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview",source:"Microsoft Learn"},
{type:"docs",title:"Entra ID documentation",url:"https://learn.microsoft.com/entra/",source:"Microsoft Learn"},
{type:"video",title:"Active Directory in 60 minutes",url:"https://www.youtube.com/@johnsavill",source:"John Savill"}
],eli5:"AD is one big company address book that everyone must agree with: who you are, what team you’re on, which doors open for you, and what rules your laptop follows.",codeWalkthrough:[
"Mental model diagram of AD","Forest wraps everything","Tree — one namespace","Domain — administrative boundary","Organizational Unit for HQ","Users OU under HQ","Computers OU under HQ","OU for branch sites","Groups of different scopes","Domain Controllers container","Primary DC","Replica DC","Blank separator","Authentication paths header","Kerberos primary path","NTLM fallback","Blank separator","Policy container explanation","GPO application rule"
],bugChallenge:{code:"A company has 1 domain, 1 DC, and no backup DC.\nDC01 hard disk fails on Friday night.\nOn Monday, no user can log in to their Windows machines.",hint:"What was the structural mistake, and what is the right design?",answer:"Single DC is a single point of failure. Best practice: at least 2 DCs per site, proper replication, regular System State backups, and documented AD recovery procedure. Treat the recovered DC as priority-1 incident; meanwhile local cached credentials may allow some logins but not new ones."},difficulty:"intermediate",prereqs:[9,12]},

  {id:15,title:"DNS, DHCP & Why AD Breaks When They Break",subtitle:"The hidden dependencies behind logon failures",analogy:"AD is like a courier company. Kerberos is the signed delivery note. But the phonebook (DNS) tells drivers where each address is, and the city council (DHCP) assigns addresses to new buildings. Break either and the couriers can’t deliver — even though the paperwork is valid.",points:[
{t:"DHCP — who gets an address",d:"DHCP assigns IP, subnet mask, gateway, DNS servers, sometimes domain suffix. If DHCP fails, devices may self-assign APIPA (169.254.x.x) and can’t reach anything. DHCP scopes, reservations, and exclusions are standard sysadmin work."},
{t:"DNS — who knows the name",d:"DNS maps names to IPs. AD relies heavily on DNS SRV records (_ldap._tcp, _kerberos._tcp). If clients can’t resolve these, domain logon fails — even though the user, password, and network are all fine."},
{t:"Why ‘AD is slow/down’ is often DNS",d:"Logon uses DNS to find a DC. Slow DNS = slow logon. Wrong DNS (pointing at public DNS instead of DCs) = DC locator fails → user ‘cannot contact domain.’ Rule: domain-joined clients should use internal DNS servers, not 8.8.8.8.",code:"Key DNS records AD uses (simplified):\n  _ldap._tcp.dc._msdcs.contoso.local   -> DC lookup\n  _kerberos._tcp.contoso.local          -> Kerberos KDC\n  dc01.contoso.local A 10.10.10.10      -> DC forward record\n  10.10.10.10.in-addr.arpa. PTR         -> reverse record"},
{t:"Forward vs reverse zones",d:"Forward: name → IP. Reverse: IP → name. Many enterprise tools (backup, monitoring, Kerberos delegation) need reverse records to work correctly. Skipping reverse zones bites you later."},
{t:"TTL (Time To Live)",d:"How long a DNS answer may be cached. Low TTL = fast change propagation, higher DNS load. High TTL = efficient, slow changes. Don’t mass-lower TTLs without thinking."},
{t:"nslookup / Resolve-DnsName basics",d:"Tools to query DNS directly and see which server answered. Essential for diagnosing ‘DNS says X but I expected Y.’",code:"  nslookup dc01.contoso.local\n  nslookup dc01.contoso.local 10.10.10.10    # force a specific DNS\n  Resolve-DnsName _ldap._tcp.contoso.local -Type SRV\n  Clear-DnsClientCache"},
{t:"DHCP reservations and exclusions",d:"Reservation: fixed IP for a specific MAC (printers, cameras). Exclusion: range of IPs DHCP should not hand out (static servers). Confusing these creates IP conflicts and ‘random’ connectivity issues."},
{t:"The 4-question AD-logon diagnostic",d:"(1) Does the client have a sane IP and correct DNS? (2) Can it resolve the SRV records? (3) Can it reach the DC on required ports? (4) Is the machine account/trust still valid?"}
],whatIs:"DNS and DHCP are the invisible plumbing Active Directory runs on. Most ‘AD is broken’ tickets are actually DNS or DHCP misconfigurations. Mastering this lesson prevents weeks of misdiagnosis.",realWorld:"An office renovates and swaps its switch. Next morning every laptop says ‘cannot contact domain.’ Junior A blames AD. Junior B runs ipconfig, sees DNS pointing at 8.8.8.8 instead of the internal DC, fixes DHCP option 6, and restores the office in 10 minutes.",code:`// Logon failure triage — DNS/DHCP lens

1) ipconfig /all
   - IP present? subnet correct? gateway reachable?
   - DNS servers point at internal DCs (NOT public)?
   - Correct DNS suffix?

2) nslookup contoso.local
   Resolve-DnsName _ldap._tcp.dc._msdcs.contoso.local -Type SRV
   - Are SRV records returning?
   - Are the answering IPs the expected DCs?

3) Test-ComputerSecureChannel -Verbose
   - Is the machine's trust with the domain healthy?

4) Ports from client to DC (on-prem):
   - 53/TCP+UDP   DNS
   - 88/TCP+UDP   Kerberos
   - 389/TCP      LDAP
   - 445/TCP      SMB
   - 3268/TCP     Global Catalog
   - 123/UDP      Time (NTP)`,funFact:"Microsoft engineers often joke that ‘it’s always DNS’ — and they’re usually right. Studies of enterprise AD incidents routinely show DNS is the single most common root cause of authentication issues.",quiz:[
{q:"A domain-joined laptop’s DNS servers point at 8.8.8.8. What’s likely to break first?",opts:["Nothing","Domain logon / DC locator, because SRV records aren’t on public DNS","Printing only","RGB lighting"],ans:1},
{q:"Which record type does AD use to advertise LDAP and Kerberos services?",opts:["A","AAAA","SRV","MX"],ans:2},
{q:"DHCP handed a printer a different IP every week, breaking scanning. Fix?",opts:["Hard-code the IP inside the printer and ignore DHCP","Create a DHCP reservation tied to the printer MAC","Disable DHCP","Reboot DNS"],ans:1},
{q:"Test-ComputerSecureChannel tests:",opts:["DNS TTLs","The machine’s trust with the domain","Disk health","CPU temperature"],ans:1}
],challenge:"On your own machine: run ipconfig /all, note your DNS servers. Run Resolve-DnsName <your-domain> -Type SRV (if you have any domain suffix) or Resolve-DnsName microsoft.com -Type MX. Read the output until every field makes sense.",resources:[
{type:"docs",title:"AD DS DNS requirements",url:"https://learn.microsoft.com/windows-server/identity/ad-ds/plan/",source:"Microsoft Learn"},
{type:"docs",title:"DHCP in Windows Server",url:"https://learn.microsoft.com/windows-server/networking/technologies/dhcp/dhcp-top",source:"Microsoft Learn"},
{type:"video",title:"DNS explained (interview-safe depth)",url:"https://www.youtube.com/@NetworkChuck",source:"NetworkChuck"}
],eli5:"Before anyone in the company can say ‘yes, you can come in,’ your phone has to know WHERE to call. DNS is the phonebook. DHCP is the operator giving new phones their numbers. Break either and every door stops answering.",codeWalkthrough:[
"Logon failure triage playbook","Step 1 — confirm healthy IP/DNS suffix","Sub-check: non-public DNS","Sub-check: correct DNS suffix","Blank separator","Step 2 — resolve domain and SRV records","Inspect answers for expected DCs","Blank separator","Step 3 — verify machine’s domain trust","Blank separator","Step 4 — confirm required ports to DC","DNS","Kerberos","LDAP","SMB","Global Catalog","NTP time sync"
],bugChallenge:{code:"Problem: After office DHCP change, users get ‘trust relationship failed’ when logging on.\nJunior tries to rejoin every laptop to the domain one by one.",hint:"Is the trust issue real, or a symptom of something else broken first?",answer:"Before rejoining anything, verify DNS and DHCP: do clients receive internal DNS servers via DHCP option 6? Can they resolve SRV records? Can they reach the DC on required ports? Rejoining masks the real fix and creates unnecessary work. Run Test-ComputerSecureChannel only after DNS is validated."},difficulty:"intermediate",prereqs:[10,14]},

  {id:16,title:"OUs, Groups & Group Policy",subtitle:"Central control without chaos",analogy:"Think of AD as a skyscraper. OUs are floors, groups are team memberships, and GPOs are the building’s rules (‘no shoes on carpet floor 5, strict dress code on floor 10’). Well-designed floors + rules = a clean building. Messy floors + rules = a building where nothing works and everyone blames IT.",points:[
{t:"OUs — containers with purpose",d:"Organizational Units group objects for two reasons: delegation (who can manage these objects) and policy targeting (which GPOs apply here). Don’t build OUs to mirror the org chart blindly — build them to serve admin and policy needs."},
{t:"Groups — Global, Domain Local, Universal",d:"Global: members from the same domain. Domain Local: used for permissioning resources. Universal: used across domains in a forest. The classic pattern is AGDLP — users in Global groups, Global into Domain Local, and Domain Local gets the permission."},
{t:"Security groups vs distribution groups",d:"Security groups control access (file shares, apps). Distribution groups are mailing lists only. Mixing them is a common rookie mistake — a distribution list can’t grant file access."},
{t:"GPO — what it really is",d:"Group Policy is a bundle of settings (security, scripts, software, registry, preferences) linked to a site, domain, or OU. It applies to users and/or computers within the scope at logon and at refresh intervals."},
{t:"Processing order — LSDOU",d:"Local → Site → Domain → OU (nested OUs apply in order). Later settings win over earlier ones by default. ‘Enforced’ links override this. ‘Block inheritance’ can stop propagation — use both sparingly.",code:"Order of GPO application:\n  1. Local computer policy\n  2. Site-level GPOs\n  3. Domain-level GPOs\n  4. OU-level GPOs (parent -> child)\n\nSpecial flags:\n  Enforced      -> this GPO cannot be overridden\n  Block Inheritance -> OU refuses higher GPOs (unless enforced)"},
{t:"Security filtering & WMI filters",d:"Security filtering limits a GPO to specific users/groups. WMI filters apply GPOs only to machines matching a query (e.g., Windows 11 only). Powerful but easy to misuse."},
{t:"gpresult & gpupdate for troubleshooting",d:"gpupdate /force reapplies policy. gpresult /h report.html generates a human-readable applied-policy report. These two commands answer most ‘did this GPO actually apply?’ questions."},
{t:"Delegation of control",d:"Granting helpdesk the ability to reset passwords in a specific OU — without giving them Domain Admin — is a core AD skill. Done via Delegation of Control Wizard. Minimize privileged accounts wherever possible."}
],whatIs:"OUs organize directory objects, groups collect identities for permissioning, and GPOs push consistent configuration. Together they turn AD from a phonebook into a policy engine that governs thousands of machines and users predictably.",realWorld:"A bank wants every branch laptop to enforce screen lock after 5 minutes, disable USB storage, and use a specific proxy. A GPO linked to the Branches OU does this once — instead of configuring 2000 machines manually. New branch laptops inherit automatically.",code:`// Mini AD design for a fictional mid-size enterprise

contoso.local
 ├── OU=HQ
 │    ├── OU=Users
 │    └── OU=Computers
 ├── OU=Branches
 │    ├── OU=Dhaka
 │    ├── OU=Chattogram
 │    └── OU=Sylhet
 └── OU=IT-Admins
      ├── OU=HelpdeskAccounts
      └── OU=ServerAdmins

Groups (Global):
  G-Branches-Users, G-Branches-Computers, G-IT-Helpdesk

Groups (Domain Local / Resource):
  DL-FileShare-HR-RW, DL-FileShare-Finance-RO

Pattern: users -> G-* -> DL-* -> permission on share

GPOs:
  GPO-Baseline-All-Computers  (linked to Domain)
  GPO-Branch-Lockdown         (linked to OU=Branches)
  GPO-HR-MappedDrive          (security-filtered to G-HR)`,funFact:"‘AGDLP’ (Accounts -> Global -> Domain Local -> Permissions) may sound like bureaucracy, but it’s the pattern that lets AD scale from 10 users to 500,000 without rewriting permissions every time someone changes role.",quiz:[
{q:"Which group type is typically used to collect identities that share a role?",opts:["Distribution","Global security group","Printer queue","DNS zone"],ans:1},
{q:"The default GPO processing order is:",opts:["OU -> Domain -> Site -> Local","Local -> Site -> Domain -> OU","Random","Alphabetical"],ans:1},
{q:"A distribution group is used for:",opts:["Granting file access","Email routing only","Replacing DNS","Replacing DHCP"],ans:1},
{q:"Helpdesk needs to reset passwords only for one OU. Best approach?",opts:["Make them Domain Admin","Delegate password-reset control on that OU to a specific helpdesk group","Share an admin password","Ignore the request"],ans:1}
],challenge:"Sketch an OU and GPO design for a fictional 3-branch company with HQ + IT admins + 2 business units. Mark which GPOs link where and which groups get which file-share permissions.",resources:[
{type:"docs",title:"Group Policy overview",url:"https://learn.microsoft.com/windows-server/identity/ad-ds/manage/",source:"Microsoft Learn"},
{type:"docs",title:"Best practices for AD OU design",url:"https://learn.microsoft.com/windows-server/identity/ad-ds/plan/",source:"Microsoft Learn"},
{type:"video",title:"Group Policy for beginners",url:"https://www.youtube.com/@johnsavill",source:"John Savill"}
],eli5:"OUs are floors in a building. Groups are teams. GPOs are the floor’s rules (lights out at 10 PM, no eating at desks). Put people on the right floor in the right team and the rules just work.",codeWalkthrough:[
"Mini AD design example","Domain root","HQ floor","HQ users","HQ computers","Branches floor","Dhaka branch OU","Chattogram branch OU","Sylhet branch OU","IT admins floor","Helpdesk accounts","Server admins","Blank separator","Global groups heading","Role-focused global groups","Blank separator","Resource groups heading","Read-write HR file share group","Read-only Finance file share group","Blank separator","Design pattern line","Blank separator","GPO layer heading","Baseline GPO across domain","Branch lockdown GPO","HR-filtered drive map GPO"
],bugChallenge:{code:"GPO intended for Finance is accidentally linked to the Domain root.\nNow the Finance desktop wallpaper appears on every machine company-wide.",hint:"Which two settings let you fix the scope without unlinking?",answer:"Either move the link to the OU=Finance OU (correct design), or apply Security Filtering so only the Finance security group gets the GPO, and/or use WMI filtering by OU/department attribute. Document the change and test with gpresult before announcing the fix."},difficulty:"intermediate",prereqs:[14,15]},

  {id:17,title:"Share vs NTFS & Access Troubleshooting",subtitle:"Why ‘I have no access’ is never one-layer simple",analogy:"Accessing a shared folder is like passing two gates to enter a building: the parking gate (share permission) and the office door (NTFS permission). Both must let you through, and the stricter one decides what you can actually do once inside.",points:[
{t:"Share permission — the parking gate",d:"Applies only when accessing the folder over the network (\\\\server\\share). Simple (Read, Change, Full Control). Modern best practice: give Authenticated Users ‘Change’ at the share level and rely on NTFS for real control."},
{t:"NTFS permission — the office door",d:"Applies on the file system itself, both locally and over the network. Granular (Read, Read & Execute, Modify, Full Control, plus special). Real access control lives here."},
{t:"Effective access — intersection wins",d:"Final permission = most restrictive of share AND NTFS. If share says Read and NTFS says Modify, the user gets Read. If NTFS says Deny, deny wins everything."},
{t:"Deny > Allow",d:"An explicit Deny beats any Allow. Use Deny sparingly — overusing it creates surprises. Prefer to NOT grant rather than granting and then denying."},
{t:"Inheritance",d:"Child folders inherit parent permissions by default. Breaking inheritance creates independent ACLs — useful for restricted subfolders, but documentation is mandatory or future admins will never understand the design."},
{t:"Group-based permissions, always",d:"Grant permission to groups, never individual users. Movers and leavers become group-membership changes — not re-ACLing every folder. This is not optional in mature shops."},
{t:"Effective Access tool",d:"Right-click folder → Properties → Security → Advanced → Effective Access. Enter a user and see exactly what permissions evaluate to. Faster than thinking through every group and deny."},
{t:"Common access-denied causes",d:"(1) Group membership not replicated yet, (2) logon token still cached — user must log off/on, (3) Deny ACE somewhere, (4) share permissions stricter than NTFS, (5) DFS/path problem, (6) file lock, (7) offline files cache."}
],whatIs:"Share and NTFS permissions are two independent access gates. Enterprise file access respects both. Juniors who can explain and debug this layer cleanly are immediately more senior than juniors who cannot.",realWorld:"A new hire in Finance can open \\\\fs01\\Finance but cannot edit a specific subfolder. Junior checks share → OK. NTFS → discovers a Deny ACE on that subfolder targeting a legacy group the user is still in. Removes legacy group from user → access normalizes.",code:`// Access-denied troubleshooting order

1) Confirm identity
   whoami
   whoami /groups    # which groups are effective for THIS token?

2) If groups changed recently
   Log off / log on (or reboot) to refresh the Kerberos token.

3) Check share permissions
   \\\\server\\share  -> right-click -> Properties -> Sharing -> Advanced Sharing
   -> Permissions

4) Check NTFS permissions
   Folder -> Properties -> Security
   -> Advanced -> Effective Access -> enter user/group

5) Look for Deny ACEs
   Deny beats Allow. Remove the group causing the deny
   rather than granting individual user permissions.

6) Confirm the path
   Correct server? Correct share? DFS referral sane?
   net use \\\\server\\share  (or) dfsutil`,funFact:"The AGDLP model solves 90% of ‘access denied’ support tickets by design. Shops that skip it end up with thousands of ACL entries that nobody dares clean up — and their audit reports show it.",quiz:[
{q:"Final access over the network is:",opts:["Always NTFS","Always share","The most restrictive of share and NTFS","Whatever the user wants"],ans:2},
{q:"An explicit Deny ACE vs Allow:",opts:["Allow wins","Deny wins","They cancel out","Deny is ignored"],ans:1},
{q:"User was added to a group but still can’t access the share. Most likely next step?",opts:["Reinstall Windows","Log off / log on to refresh the Kerberos token","Reboot the domain","Rebuild the share"],ans:1},
{q:"Best practice at the share level (modern):",opts:["Everyone Full Control","Authenticated Users Change; real control on NTFS","Deny everything","No share at all"],ans:1}
],challenge:"Create two folders on a VM or your home machine. Set one’s NTFS ACL to give your test user Read; set share to Full Control. Set the other’s share to Read; NTFS to Modify. Access both as the test user. Note the effective access in each case.",resources:[
{type:"docs",title:"Share vs NTFS permissions",url:"https://learn.microsoft.com/windows-server/storage/file-server/",source:"Microsoft Learn"},
{type:"docs",title:"Effective Access tool",url:"https://learn.microsoft.com/windows/security/identity-protection/",source:"Microsoft Learn"},
{type:"video",title:"NTFS vs Share permissions explained",url:"https://www.youtube.com/@johnsavill",source:"John Savill"}
],eli5:"There are two locks on the door. One is out in the parking lot (share), one is on the office door (NTFS). You need BOTH to let you in. If either says ‘no,’ you’re not getting in.",codeWalkthrough:[
"Access-denied triage","Step 1 — confirm identity","whoami for login check","whoami /groups for token view","Blank separator","Step 2 — token refresh after group change","Blank separator","Step 3 — inspect share permissions","Path and path to share permissions","Blank separator","Step 4 — inspect NTFS permissions","Use the Effective Access tool","Blank separator","Step 5 — hunt Deny ACEs","Prefer group redesign over user-level Allows","Blank separator","Step 6 — confirm the path","Validate server and share and DFS referral"
],bugChallenge:{code:"User Alice is in 'G-HR' group with Modify NTFS on \\\\fs01\\HR.\nShe can read but not write.\nAdmin keeps adding 'Alice' directly with Full Control; it still doesn’t work.",hint:"What two things could still block her write?",answer:"(1) Share permission may be Read only at the share level (NTFS Modify is capped by stricter share Read). (2) A Deny ACE further up the tree may target a group Alice is still in. Fix: set share to Change/Full for Authenticated Users, rely on NTFS; remove the Deny or remove Alice from the conflicting group. Refresh token by logoff/logon."},difficulty:"intermediate",prereqs:[9,16]},

  {id:18,title:"Patching, Replication & Time Sync",subtitle:"Invisible operational hygiene of a domain",analogy:"A domain is like a fleet of ships. Patching is regular maintenance, replication is ships sharing charts, and time sync is the common clock on the horn that lets them coordinate. Skip any of these and you get silent drift until a storm hits.",points:[
{t:"Patching — boring until it’s not",d:"Unpatched servers are the single most common root cause of major incidents. Enterprise patching flows: test in dev → approve change → stage in test group → roll to production in maintenance window → verify → document. Nothing heroic; all discipline."},
{t:"WSUS / Intune update rings / Configuration Manager",d:"WSUS centralizes Microsoft update approval. Intune update rings push patches to Entra-joined devices. Configuration Manager (SCCM/MECM) manages both. Juniors should know what each is and when it’s used."},
{t:"Replication in AD",d:"Domain Controllers replicate directory changes to each other. Healthy replication is invisible. Broken replication = stale passwords, phantom accounts, and logon inconsistencies between offices.",code:"Quick AD replication checks:\n  repadmin /replsummary\n  repadmin /showrepl\n  dcdiag /v\n  Get-ADReplicationPartnerMetadata -Target dc01 -Scope Server"},
{t:"Kerberos time tolerance",d:"Kerberos tickets are time-bound (typically within 5 minutes between client and DC). If a machine’s clock drifts, logon fails with confusing errors — even though the password is correct."},
{t:"PDC Emulator & authoritative time",d:"One DC (the PDC Emulator FSMO role holder) is the authoritative time source for the forest. It should sync to a reliable external NTP source. Client → DC → PDCe → external NTP. Break the chain and watches drift."},
{t:"Maintenance windows & change control",d:"Patching during business hours is how you get fired. Maintenance windows exist so users and business know when controlled risk is taken. Every patch cycle is a change with a rollback plan and an approver."},
{t:"Backups before patches",d:"Always verify recent backups exist before mass patching — especially on DCs and critical app servers. ‘Patch Tuesday surprise’ is real; a rollback path isn’t optional."},
{t:"Documentation that survives audits",d:"Which servers were patched, which KBs applied, which ones failed, which reboots happened, who approved. Bank auditors ask for this quarterly. Juniors who write it well get noticed."}
],whatIs:"Patching, replication, and time synchronization are the ‘boring’ hygiene that quietly keeps AD and Windows Server environments working. Most catastrophic incidents you read about trace back to one of these being neglected.",realWorld:"A branch begins reporting ‘authentication issues’ only in the morning. A sysadmin checks w32tm — branch DC has drifted 12 minutes because its time source was wrong. Fixing NTP on one DC restores logon across the branch. No users, no apps — just time.",code:`// The hygiene trifecta — commands a junior should recognize

--- Replication health ---
repadmin /replsummary
repadmin /showrepl
dcdiag /v

--- Time sync (Windows) ---
w32tm /query /status
w32tm /query /source
w32tm /monitor
w32tm /resync /force

--- Patching (Intune / WSUS / SCCM) ---
Microsoft Update Catalog  -> find specific KBs
Intune > Updates > Update rings, Feature updates
WSUS approvals  -> test group -> production group

--- Change hygiene ---
[ ] recent backup verified
[ ] rollback plan written
[ ] approver and maintenance window set
[ ] post-change verification steps
[ ] ticket notes with KBs applied / failed`,funFact:"In 2017, the WannaCry ransomware spread globally in hours and crippled hospitals and banks. The root cause: a Microsoft patch (MS17-010) had been available for two months. Patching discipline literally saves lives.",quiz:[
{q:"Healthy replication means:",opts:["DCs broadcast passwords to users","DCs share directory changes so all holders have a consistent view","DNS replaces DHCP","Backups are automatic"],ans:1},
{q:"The PDC Emulator FSMO role holder is responsible for:",opts:["Antivirus","Forest-wide authoritative time","Printer drivers","Keyboard layouts"],ans:1},
{q:"Kerberos typically tolerates a clock skew of about:",opts:["5 seconds","5 minutes","5 hours","Any amount"],ans:1},
{q:"Patching before a business-critical day usually requires:",opts:["No approval","A formal change with rollback plan in a maintenance window","Skipping all tests","Editing the registry on every client"],ans:1}
],challenge:"On a Windows machine, run: w32tm /query /status and w32tm /query /source. Identify the current time source. Describe in 2 lines how this chain should work in a domain.",resources:[
{type:"docs",title:"Windows Time service",url:"https://learn.microsoft.com/windows-server/networking/windows-time-service/",source:"Microsoft Learn"},
{type:"docs",title:"AD replication (repadmin)",url:"https://learn.microsoft.com/windows-server/identity/ad-ds/manage/",source:"Microsoft Learn"},
{type:"video",title:"Windows patching in enterprise",url:"https://www.youtube.com/@johnsavill",source:"John Savill"}
],eli5:"Three jobs nobody notices until they break: updating software, keeping the address book in sync between offices, and making sure every clock agrees. Enterprise IT pays you to notice them before anyone else does.",codeWalkthrough:[
"Hygiene commands block","Replication section","repadmin summary","repadmin detailed","dcdiag verbose","Blank separator","Time sync section","Current status","Current source","Monitor all DCs","Force resync","Blank separator","Patching section","Update catalog source","Intune update rings","WSUS approval path","Blank separator","Change hygiene checklist","Backup verified","Rollback plan","Approver and window","Post-change verification","Ticket documentation"
],bugChallenge:{code:"Urgent: DC02 replication broken. Junior decides to force demote DC02 and promote a new one at 3 PM during business hours, with no change ticket.",hint:"Which two rules did this break, and what was the safer order?",answer:"Broke: (1) no change control / maintenance window; (2) no backup verification; (3) destructive action without diagnosis. Safer order: run repadmin /showrepl + dcdiag to understand the failure, verify backups, raise an emergency change with rollback, schedule a window, then act. Demote/promote is a last resort, not a first move."},difficulty:"intermediate",prereqs:[14,15,16,17]},

  {id:19,title:"Domain Joins & Login Failures",subtitle:"Safe first actions under identity pressure",analogy:"A domain join is like a device signing an employment contract. Once signed, it gets an ID, trusts the building, and plays by the rules. If the contract is torn or the building loses the signature page, the device is suddenly a stranger at the door.",points:[
{t:"What actually happens in a domain join",d:"The computer creates a machine account in AD, establishes a secure channel with a DC, and begins using Kerberos/NTLM for auth. The password on the machine account rotates automatically every 30 days by default."},
{t:"The real pre-flight checklist",d:"(1) Correct internal DNS settings, (2) can resolve the domain and SRV records, (3) clock is within tolerance, (4) reachable DC on required ports, (5) valid domain user with permission to join computers to the target OU."},
{t:"‘The trust relationship between this workstation and the primary domain failed’",d:"Classic error. Usually means the machine account password de-synced between the client and AD. Safest fix: Test-ComputerSecureChannel, then Reset-ComputerMachinePassword with an admin account — before rejoining."},
{t:"When rejoin is required",d:"Occasionally — after long offline periods, image restores, or tampered machines. Rejoining should be a tracked action, not a reflex. Always capture evidence of what failed before you reset.",code:"Safer order than blind rejoin:\n  Test-ComputerSecureChannel -Verbose\n  # If False:\n  Reset-ComputerMachinePassword -Credential (Get-Credential)\n  # Only if reset can't fix:\n  Remove-Computer -UnjoinDomainCredential ...\n  Add-Computer -DomainName contoso.local -Credential ..."},
{t:"Multi-user login failures → think infra, not user",d:"If 1 user can’t log in, suspect the user. If MANY users can’t log in, suspect shared infrastructure: DNS, DHCP, DC availability, time sync, firewall rule, or GPO rollout."},
{t:"The account lockout dance",d:"Too many bad passwords → account locks. Stale saved credentials (mapped drives, phones, scripts) can silently keep locking an account. Use the Account Lockout Status tools (LockoutStatus.exe) to find the source."},
{t:"GPO-induced logon problems",d:"A brand-new GPO can break logons fleet-wide (drive mappings, scripts, restricted paths). Always pilot with security filtering; never link a new GPO domain-wide without testing."},
{t:"Cached credentials help but are not magic",d:"Windows caches last-known domain credentials so users can log in when the network is unreachable. Cache only covers already-logged-in users on that device. It does not replace a healthy AD path."}
],whatIs:"This lesson is the crisis-response layer on top of everything you learned about AD, DNS, DHCP, GPO, and permissions. It makes sure that when identity goes wrong, your first moves are safe, documented, and scoped.",realWorld:"Half of HQ can’t log in after a weekend change window. A junior immediately rejoins laptops and blames ‘AD.’ A senior runs gpresult, checks Event Viewer, finds a new GPO blocking network logons on Windows 11 because of a misconfigured logon right. Reverts the GPO, 200 users back in 10 minutes.",code:`// Multi-user logon failure — scoped triage

1) Scope
   - 1 user or many?
   - 1 site or many?
   - 1 OS/image or mixed?

2) Identity path
   ipconfig /all                  # internal DNS?
   nslookup _ldap._tcp.<domain>   # SRV reachable?
   Test-ComputerSecureChannel -Verbose
   w32tm /query /status           # clock skew

3) Policy
   gpresult /h report.html
   Recent GPO changes -> correlation with symptom time

4) Auth logs
   Event Viewer -> Security on DCs
   Event IDs 4768 (TGT), 4769 (service ticket), 4625 (logon failed)

5) Change control
   What changed in the last 48h?
   What can be reverted safely?`,funFact:"Many real corporate outages are just phones. A salesperson changes their domain password on a laptop but forgets their iPhone’s Exchange profile. The phone keeps trying the old password until the account locks out — over and over — and the ‘attacker’ is the user themselves.",quiz:[
{q:"The error ‘trust relationship between this workstation and the primary domain failed’ usually means:",opts:["The user’s password expired","The machine account password is desynced between the client and AD","The printer is unplugged","DHCP is offline"],ans:1},
{q:"Many users can’t log in at HQ; one branch is fine. First likely layer?",opts:["User profiles","HQ-side infra: DNS, DCs, network, or a new GPO","Keyboards","Printers"],ans:1},
{q:"Cached credentials allow:",opts:["Any user to log in offline","A previously-logged-in user to log in when the device is offline","Passwords to auto-rotate","DNS to resolve offline"],ans:1},
{q:"What should you do BEFORE blindly rejoining a machine?",opts:["Disable antivirus","Run Test-ComputerSecureChannel and try Reset-ComputerMachinePassword","Reinstall Windows","Format the disk"],ans:1}
],challenge:"On a VM (or your lab), simulate the trust failure: disconnect a domain-joined client for a long time, then try to log in with a domain user. Run Test-ComputerSecureChannel. Reset-ComputerMachinePassword if you have admin credentials. Document each step.",resources:[
{type:"docs",title:"Domain join and machine accounts",url:"https://learn.microsoft.com/windows-server/identity/ad-ds/manage/",source:"Microsoft Learn"},
{type:"article",title:"Account Lockout troubleshooting",url:"https://learn.microsoft.com/windows-server/identity/ad-ds/manage/",source:"Microsoft Learn"},
{type:"video",title:"Kerberos for admins",url:"https://www.youtube.com/@johnsavill",source:"John Savill"}
],eli5:"When the building doesn’t recognize your ID anymore, you don’t knock down the front door. You check: is the nameplate right, is the badge still valid, is the building’s clock the same as yours, and did anyone change the rules last night?",codeWalkthrough:[
"Scoped triage playbook","Step 1 — scope the blast radius","How many users","How many sites","Single or multi-image","Blank separator","Step 2 — identity path checks","Verify DNS","Verify SRV resolution","Check secure channel","Check clock","Blank separator","Step 3 — policy check","gpresult report","Correlate with recent GPO changes","Blank separator","Step 4 — auth logs on DCs","Security log","TGT event ID","Service ticket event ID","Logon failure event ID","Blank separator","Step 5 — change control","Recent changes","Safe revert candidates"
],bugChallenge:{code:"Monday morning: 40 users from HQ say ‘cannot connect to domain’.\nA junior rejoins all 40 laptops one by one. Takes 6 hours.",hint:"What cheaper and safer first step would have revealed the real root cause?",answer:"Scope first. Run gpresult /h on a couple of affected machines; check Event Viewer on the DC; look for recent changes (DNS, DHCP, GPO, firewall). In most real cases a single misconfigured change is the cause and can be reverted in minutes, saving the rebuild of 40 devices."},difficulty:"intermediate",prereqs:[14,15,16,17,18]},

  {id:20,title:"OSI & TCP/IP Without Confusion",subtitle:"How to think in layers under pressure",analogy:"Networking without layers is like diagnosing a sick patient by staring at their skin. Layers let you isolate: is this a hardware problem, an IP problem, a DNS problem, an application problem? The OSI model is a flashlight — not a religion.",points:[
{t:"OSI in 7 sentences",d:"Layer 1 Physical: cables, radio, pins. Layer 2 Data Link: MAC, switches, VLAN. Layer 3 Network: IP, routers, subnets. Layer 4 Transport: TCP/UDP, ports. Layer 5 Session: connections state. Layer 6 Presentation: encoding/encryption. Layer 7 Application: HTTP, DNS, SMTP."},
{t:"TCP/IP in 4 layers",d:"Link (L1+L2) → Internet (L3, IP/ICMP) → Transport (L4, TCP/UDP) → Application (L5-7). TCP/IP is the practical model; OSI is the teaching model. Both are valid; don’t argue."},
{t:"The practical shortcut",d:"For most tickets: think physical → network (IP/route) → transport (ports/firewall) → application. If you can draw this in your head, you can diagnose almost anything calmly."},
{t:"TCP vs UDP",d:"TCP: reliable, connection-oriented, handshakes, ordered. UDP: fast, connectionless, no guarantees. Email, HTTP(S), SSH → TCP. DNS queries, VoIP media, many game streams → UDP."},
{t:"Ports tell you the service",d:"80 HTTP, 443 HTTPS, 53 DNS, 22 SSH, 25 SMTP, 3389 RDP, 445 SMB, 88 Kerberos, 389 LDAP, 123 NTP. Juniors should know the top 20 cold."},
{t:"Encapsulation & decapsulation",d:"Each layer wraps data with its own header as it leaves your machine and unwraps on the way in. A packet capture literally shows this. Knowing this makes Wireshark instantly less scary."},
{t:"MTU, MSS, fragmentation",d:"When a packet is too big for a link, it gets fragmented. Misconfigured MTU/MSS causes weird ‘VPN connects but apps fail’ issues. Mostly you won’t fix this — you’ll escalate — but know the name."},
{t:"How to say the magic sentence",d:"Instead of ‘it doesn’t work,’ say ‘I can reach layer X but not layer Y — here’s my test.’ That single style upgrade promotes you in interviewers’ minds."}
],whatIs:"The OSI and TCP/IP models are mental maps for diagnosing networking issues by isolating the failing layer. They don’t change what happens on the wire; they change how clearly you can think under pressure.",realWorld:"A user says ‘I can’t open the portal.’ Ping IP works (L3 OK). DNS resolves (L7 partial). HTTPS connection drops mid-handshake (L6/L4 TLS). Turns out a new firewall rule blocks outbound 443 to that subnet. You narrowed it from ‘app broken’ to ‘firewall policy’ in 2 minutes.",code:`// Layered triage cheat-script

Physical / Link (L1/L2)
  - Cable/Wi-Fi connected? Link light?
  - Correct VLAN? Correct SSID?

Network (L3)
  - IP sane? ipconfig /all
  - Gateway reachable? ping <gw>
  - Remote reachable? ping <ip>
  - Route sane? route print / tracert

Transport (L4)
  - Port open? Test-NetConnection host -Port 443
  - TCP handshake? (SYN -> SYN/ACK -> ACK)
  - Firewall? ACL?

Application (L5-7)
  - DNS resolving? nslookup / Resolve-DnsName
  - HTTP/HTTPS error? curl -I https://host/
  - Certificate / TLS handshake OK?

Speak in layers:
  "I can ping by IP (L3) but HTTPS fails (L6/L7)."
  "SMB works internally; Kerberos TGT fails (L7 auth)."`,funFact:"The OSI model was designed by committee in the 1980s and meant to replace TCP/IP. TCP/IP won in practice because it was simpler and already working. OSI survived as the best language for teaching — which is why you’re reading about it now.",quiz:[
{q:"Which OSI layer handles IP addressing and routing?",opts:["Layer 2","Layer 3","Layer 4","Layer 7"],ans:1},
{q:"Which protocol is connection-oriented and reliable?",opts:["UDP","TCP","ICMP","ARP"],ans:1},
{q:"Port 443 typically means:",opts:["DNS","HTTPS","SSH","SMTP"],ans:1},
{q:"‘Ping by IP works; ping by name fails.’ Which layer is most likely broken?",opts:["Layer 2","Layer 3","Layer 7 (DNS)","Layer 1"],ans:2}
],challenge:"On your own machine, recreate the layered triage above for a real site (e.g., example.com). Record each step’s output and label which OSI layer the test represents.",resources:[
{type:"article",title:"OSI model (Cloudflare)",url:"https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/",source:"Cloudflare Learning"},
{type:"video",title:"OSI vs TCP/IP explained",url:"https://www.youtube.com/@PracticalNetworking",source:"Practical Networking"},
{type:"docs",title:"IANA Service Name and Port Registry",url:"https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml",source:"IANA"}
],eli5:"A computer talking to another computer is like two people shouting across rooms through a chain of translators. Each translator handles one thing. Knowing which translator is confused tells you exactly what to fix.",codeWalkthrough:[
"Layered triage cheat script","Physical/link layer checks","Cable/Wi-Fi presence","VLAN/SSID correctness","Blank separator","Network layer","IP sanity","Gateway reachability","Remote reachability","Path and routing","Blank separator","Transport layer","TCP port test","Handshake awareness","Firewall consideration","Blank separator","Application layer","DNS resolution","HTTP/S response","Certificate handshake","Blank separator","Language tip","Example layer-speak line","Another layer-speak line"
],bugChallenge:{code:"Ticket: ‘Cannot reach portal.bank.local.’\nJunior immediately calls the firewall team.",hint:"Which layer-by-layer tests would you run first to know whether the firewall is actually the issue?",answer:"Before escalating: ipconfig (L3), ping gateway (L3), nslookup portal.bank.local (L7/DNS), Test-NetConnection portal.bank.local -Port 443 (L4), curl -I (L7). If DNS fails, firewall isn’t the problem. Escalate with layer-specific evidence so the firewall team doesn’t hunt a ghost."},difficulty:"beginner",prereqs:[10]},

  {id:21,title:"IP Addressing & Subnetting",subtitle:"The math that filters network candidates",analogy:"IP subnetting is like apartment numbering in a huge building. The prefix tells you the building and floor; the host bits tell you the unit. If you can’t split buildings into floors and units without getting lost, you can’t run a real network.",points:[
{t:"IPv4 basics",d:"Addresses are 32 bits written as four octets (e.g., 192.168.10.42). A subnet mask like 255.255.255.0 or a prefix /24 tells you which bits are the ‘network’ and which are the ‘host’."},
{t:"CIDR notation",d:"192.168.10.0/24 means the first 24 bits are network. Prefix length + base address fully defines the subnet. Get comfortable reading /16, /20, /22, /24, /26, /27, /28, /29, /30 quickly."},
{t:"Host count math",d:"Hosts per subnet = 2^(32 − prefix) − 2 (minus network and broadcast). /24 → 254 hosts. /28 → 14 hosts. /30 → 2 hosts (common for point-to-point links).",code:"Quick reference:\n  /30  ->  2 usable hosts  (point-to-point)\n  /29  ->  6 usable hosts\n  /28  ->  14 usable hosts\n  /27  ->  30 usable hosts\n  /26  ->  62 usable hosts\n  /24  ->  254 usable hosts\n  /23  ->  510 usable hosts\n  /22  ->  1022 usable hosts"},
{t:"Network, broadcast, usable range",d:"For 10.0.4.0/22 → network 10.0.4.0, usable 10.0.4.1–10.0.7.254, broadcast 10.0.7.255. Drawing this on paper once makes it muscle memory."},
{t:"Private vs public ranges",d:"10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 are private. 169.254.0.0/16 is link-local/APIPA. The rest is mostly public. CGNAT 100.64.0.0/10 is also common in ISPs."},
{t:"Default gateway",d:"The router address your machine sends packets to when the destination isn’t on your subnet. Wrong gateway = works locally, fails remotely. Right gateway in a wrong subnet = routing black hole."},
{t:"Subnet design tradeoffs",d:"Too big a subnet = more broadcast traffic and blast radius. Too small = constant growth headaches. Allocate with growth in mind (2x current need is a decent rule)."},
{t:"Subnet-by-hand in 60 seconds",d:"For /26, /27, /28 — know the block sizes: 64, 32, 16. The subnet starts at a multiple of the block size; broadcast is start + (block − 1). Memorize that and you’ll never freeze in an interview."}
],whatIs:"Subnetting is how large address spaces are split into manageable, isolated segments with their own gateway and broadcast boundary. It underlies routing, VLAN design, firewalling, and scaling.",realWorld:"You must carve 10.0.0.0/16 into 4 branches of roughly 500 hosts each. /23 gives 510 usable hosts per branch — perfect. Branch 1: 10.0.0.0/23. Branch 2: 10.0.2.0/23. Branch 3: 10.0.4.0/23. Branch 4: 10.0.6.0/23. You just planned a network in 30 seconds.",code:`// 5 subnet problems to practice

1) Given 192.168.10.0/24, how many usable hosts?
     answer: 254

2) Given 10.20.0.0/22, give network, broadcast, usable range.
     network   10.20.0.0
     broadcast 10.20.3.255
     usable    10.20.0.1 - 10.20.3.254

3) You need 60 hosts per site, 10 sites. Minimum prefix?
     /26 (62 usable) fits 60; 10 sites means block 10.x.y.0/26 pattern.

4) You need WAN point-to-point. What prefix and why?
     /30 -> exactly 2 usable hosts (one per router).

5) Is 10.0.4.130 in 10.0.4.0/25?
     /25 covers 10.0.4.0-10.0.4.127. So 10.0.4.130 is NOT in it.`,funFact:"In many real Bangladesh bank interview panels, subnetting is still the single skill where candidates visibly separate themselves. Not because it’s deep math — because most juniors didn’t practice it enough to answer in 60 seconds.",quiz:[
{q:"How many usable hosts in a /28?",opts:["14","16","30","62"],ans:0},
{q:"Broadcast address of 10.0.4.0/22?",opts:["10.0.4.255","10.0.5.255","10.0.7.255","10.0.15.255"],ans:2},
{q:"Which prefix is typical for router-to-router WAN links?",opts:["/24","/30","/8","/16"],ans:1},
{q:"Which range is NOT private?",opts:["10.0.0.0/8","172.16.0.0/12","192.168.0.0/16","8.8.0.0/16"],ans:3}
],challenge:"Without a calculator, on paper, solve all 5 subnet problems in the code block. Then invent 3 more subnets of your own and solve them. Subnetting is a reflex — build it.",resources:[
{type:"article",title:"Subnet Calculator + learning",url:"https://www.subnet-calculator.com/",source:"subnet-calculator.com"},
{type:"video",title:"Subnetting mastery in 30 minutes",url:"https://www.youtube.com/@PracticalNetworking",source:"Practical Networking"},
{type:"docs",title:"RFC 1918 (Private IPv4 ranges)",url:"https://datatracker.ietf.org/doc/html/rfc1918",source:"IETF"}
],eli5:"The internet is a city. Your subnet is your street. The mask decides which houses are on the same street. The gateway is the bridge out of your street. Get the street right and the bridge right — and mail gets delivered.",codeWalkthrough:[
"Practice subnet problems block","Problem 1 — hosts in /24","Answer","Blank separator","Problem 2 — /22 enumeration","Network address","Broadcast address","Usable range","Blank separator","Problem 3 — choose prefix for 60 hosts","Chosen prefix reasoning","Blank separator","Problem 4 — WAN link","/30 chosen with reason","Blank separator","Problem 5 — subnet membership check","Subnet bounds and conclusion"
],bugChallenge:{code:"Plan: Allocate 4 branches of 300 hosts each from 10.0.0.0/16 using /23 subnets:\n  Branch1 10.0.0.0/23\n  Branch2 10.0.1.0/23\n  Branch3 10.0.2.0/23\n  Branch4 10.0.3.0/23",hint:"Do these /23 subnets actually start at correct boundaries?",answer:"No. /23 block size is 512 addresses, so subnets must start at multiples of 2 in the third octet: 10.0.0.0, 10.0.2.0, 10.0.4.0, 10.0.6.0. ‘10.0.1.0/23’ and ‘10.0.3.0/23’ overlap previous subnets. Correct: Branch1 10.0.0.0/23, Branch2 10.0.2.0/23, Branch3 10.0.4.0/23, Branch4 10.0.6.0/23."},difficulty:"intermediate",prereqs:[20]},

  {id:22,title:"Switching, VLANs & Trunks",subtitle:"One cable, many logical networks",analogy:"A switch is like a building’s mailroom — it reads the envelope (MAC address) and drops it at the right desk (port). VLANs are like separate floors the mailroom pretends exist, so Finance and Marketing never see each other’s mail even though they share the same building.",points:[
{t:"Switches vs hubs vs routers",d:"Hub: dumb, broadcasts to everyone. Switch: smart, learns MAC-to-port mapping, forwards only to the right port. Router: moves packets between different networks (subnets/VLANs)."},
{t:"MAC learning and CAM table",d:"When a frame arrives, the switch learns ‘MAC X lives on port Y’ and stores it in the CAM table. Unknown destinations are flooded until learned. This is why switches are nearly plug-and-play."},
{t:"VLANs — logical segmentation",d:"VLAN = broadcast domain. Two ports on the same switch can be on different VLANs and not see each other’s traffic without a router. Separation by VLAN improves security, performance, and management."},
{t:"Access ports vs trunk ports",d:"Access port: carries traffic for ONE VLAN (user ports). Trunk port: carries traffic for MANY VLANs between switches/routers, tagged with 802.1Q."},
{t:"Native VLAN (with care)",d:"The untagged VLAN on a trunk. Misconfigured native VLANs cause ‘VLAN hopping’ security issues. Keep native VLAN unused for security-sensitive segments."},
{t:"Inter-VLAN routing",d:"Two VLANs can’t talk without a router or a Layer-3 switch. Common design: users in VLAN 10, servers in VLAN 20, route between them via a firewall or L3 switch — enforcing policy on the way."},
{t:"STP (Spanning Tree) awareness",d:"If you connect switches in loops (for redundancy), frames could circle forever. STP detects loops and disables redundant links until needed. Juniors don’t configure STP; they recognize ‘loop → network meltdown’ as a symptom."},
{t:"Port security & portfast",d:"Port security limits which MAC(s) are allowed on a port; portfast skips the STP listening/learning delay on edge ports. Both are common CCNA and enterprise-support vocabulary."}
],whatIs:"VLANs and trunks let one physical network carry many logically separate networks. Access ports attach endpoints to a VLAN; trunks carry multiple VLANs between switches and routers; inter-VLAN routing enforces boundaries.",realWorld:"A bank runs a single switch fabric in a branch but separates VLAN 10 (tellers), VLAN 20 (ATMs), VLAN 30 (guest Wi-Fi), and VLAN 99 (management). A firewall between VLANs ensures guest Wi-Fi never sees ATM traffic — even though the cables share copper.",code:`// Simple VLAN mental model

Switch SW1
  Port 1  (access, VLAN 10)   <-- Alice's laptop
  Port 2  (access, VLAN 10)   <-- Bob's laptop
  Port 3  (access, VLAN 20)   <-- Printer
  Port 4  (trunk, 10 + 20)     <-- to SW2

Switch SW2
  Port 1  (trunk, 10 + 20)     <-- to SW1
  Port 2  (access, VLAN 10)   <-- Carol's laptop

To route between VLAN 10 and 20:
  L3 switch or router with an interface in each VLAN
  Firewall rule enforces which flows are allowed

Simple Cisco-style configuration (reference only):
  interface Gi0/1
    switchport mode access
    switchport access vlan 10
  !
  interface Gi0/4
    switchport mode trunk
    switchport trunk allowed vlan 10,20`,funFact:"Early networks ran on dumb hubs where everyone saw everyone’s traffic. Early internet hackers mostly needed a hub in the room and Ethereal (the original Wireshark) to read everyone’s passwords. Switching + VLANs + encryption ended most of that era.",quiz:[
{q:"A switch forwards frames based on:",opts:["Source IP","Destination MAC address","URL","Username"],ans:1},
{q:"An access port carries:",opts:["One VLAN","All VLANs","Random VLANs","No VLANs"],ans:0},
{q:"Two VLANs on the same switch can communicate:",opts:["Automatically","Only via a router or Layer-3 switch","Over Wi-Fi only","Never"],ans:1},
{q:"Spanning Tree Protocol (STP) primarily prevents:",opts:["Slow DNS","Switching loops causing broadcast storms","Disk failures","Power surges"],ans:1}
],challenge:"In Packet Tracer or GNS3, build a 2-switch topology with VLAN 10 (tellers) and VLAN 20 (ATMs). Connect switches via a trunk. Add a router or L3 switch to route between VLANs. Verify each VLAN is isolated without routing.",resources:[
{type:"docs",title:"Cisco VLAN fundamentals",url:"https://www.cisco.com/c/en/us/support/docs/lan-switching/vlan/",source:"Cisco"},
{type:"video",title:"Packet Tracer VLAN lab walkthrough",url:"https://www.youtube.com/@JeremysITLab",source:"Jeremy’s IT Lab"},
{type:"article",title:"VLAN 802.1Q tagging explained",url:"https://en.wikipedia.org/wiki/IEEE_802.1Q",source:"Wikipedia"}
],eli5:"A switch is a polite waiter: when a table (MAC) orders, the waiter only brings the plate to that table. VLANs are separate dining rooms — the waiter uses the same hallway (trunk) but never mixes up tables between rooms.",codeWalkthrough:[
"VLAN mental model","Switch SW1 header","Port 1 user in VLAN 10","Port 2 user in VLAN 10","Port 3 printer in VLAN 20","Port 4 trunk up to SW2","Blank separator","Switch SW2 header","Trunk down to SW1","Port 2 user in VLAN 10","Blank separator","Routing requirement header","L3 router/switch needed between VLANs","Firewall enforces policy","Blank separator","Cisco-style config (reference only)","Access port config","Trunk config block","Allowed VLAN list"
],bugChallenge:{code:"Design: all users in VLAN 1 (default), ATMs in VLAN 1, guest Wi-Fi in VLAN 1, servers in VLAN 1. ‘It works fine and it’s simple.’",hint:"What are the security and performance implications of this design?",answer:"No segmentation. Guest Wi-Fi can talk to ATMs and servers; a single compromised guest device can pivot across the network. Broadcast traffic hits every device. Redesign with VLANs for tellers, ATMs, servers, management, and guest; enforce routing/firewall policy between VLANs. Avoid putting anything sensitive on the default VLAN 1."},difficulty:"intermediate",prereqs:[20,21]},

  {id:23,title:"Routing, NAT & ACLs",subtitle:"How traffic crosses boundaries",analogy:"Routers are border officers. They check each packet’s destination, compare it against a map (routing table), decide which road to send it down, and sometimes rewrite the return address (NAT) before it leaves the country.",points:[
{t:"Routing table basics",d:"A router (or host) picks the most specific matching route to a destination. Longest-prefix match wins. ‘Default route’ (0.0.0.0/0) is the catch-all when nothing else matches."},
{t:"Static vs dynamic routing",d:"Static: you write the routes manually (simple, brittle, fine for small networks). Dynamic: routers share routes using protocols like OSPF, EIGRP, BGP. Juniors should know the names; CCNA teaches the depth."},
{t:"NAT in plain English",d:"Network Address Translation lets many private IPs share one public IP. Your home router does it automatically (PAT/overload). Enterprises use NAT for internet access, DMZ services, and hiding internal structure."},
{t:"Source NAT vs destination NAT",d:"SNAT: change source IP on the way out (users reaching internet). DNAT: change destination IP on the way in (port-forward public:443 to internal web server). Both common in enterprise perimeters."},
{t:"ACLs — the allow/deny list",d:"Access Control Lists specify which packets are allowed or denied based on source/destination IP, port, protocol. Applied on interfaces (in/out). Order matters: first match wins. End with an implicit deny in most vendors."},
{t:"Stateful firewall vs stateless ACL",d:"A stateful firewall remembers outgoing flows and allows return traffic automatically. A stateless ACL matches every packet independently. Most enterprise firewalls are stateful; many router ACLs are stateless."},
{t:"Common firewall mistakes",d:"(1) Any-any-allow rules, (2) no logging, (3) duplicated rules, (4) obsolete rules for decommissioned apps, (5) broad source/destination scopes. Audits love finding these."},
{t:"Route symmetry",d:"Outbound and return traffic should take symmetric paths through firewalls (or firewalls must be state-synchronized). Asymmetric paths = random drops that look like ‘the firewall hates us.’"}
],whatIs:"Routing, NAT, and ACLs are the mechanisms that move packets across network boundaries and control what’s allowed. Even if you never configure a router in your first job, you must be able to read topology and firewall rules confidently.",realWorld:"A bank exposes an online banking portal via DNAT from 203.0.113.10:443 to 10.50.1.20:8443. An ACL allows only specific monitoring and admin subnets to reach the admin port. An auditor asks: ‘Why is this allowed?’ — and your firewall doc has the answer.",code:`// Routing + NAT + ACL — reading view

Routing table (simplified):
  Destination       Next hop        Prefix
  0.0.0.0/0         203.0.113.1     default
  10.0.0.0/8        10.255.0.1      internal
  192.168.50.0/24   10.255.0.2      branch-A

NAT examples:
  SNAT: 10.0.0.0/8  -> 203.0.113.10  (for internet access)
  DNAT: 203.0.113.20:443 -> 10.50.1.20:8443  (publish portal)

ACL (top-down, first match wins):
  permit tcp 10.50.0.0/24 host 10.50.1.20 eq 8443
  permit tcp any host 203.0.113.20 eq 443
  deny   ip  any any log`,funFact:"BGP — the routing protocol that runs the public internet — has caused multiple global outages when misconfigured. In 2008 Pakistan accidentally took YouTube offline for hours by advertising a wrong BGP route.",quiz:[
{q:"Which route wins when multiple match?",opts:["Random","Longest prefix (most specific)","Shortest prefix","Alphabetical"],ans:1},
{q:"NAT that lets many internal IPs share one public IP is called:",opts:["DNAT","SNAT / PAT (overload)","ACL","DMZ"],ans:1},
{q:"Stateful firewalls differ from stateless ACLs by:",opts:["Being always slower","Tracking flows and allowing return traffic automatically","Requiring no rules","Working only on Windows"],ans:1},
{q:"‘Permit any any’ as the first rule is typically:",opts:["A great default","A bad practice — it bypasses everything else","Required","Only for backups"],ans:1}
],challenge:"Draw a simple enterprise topology: internet → edge firewall → core switch → VLANs (users, servers, DMZ). Add SNAT for users, DNAT for a published portal, and 4 ACL rules with reasons. Have a friend critique it.",resources:[
{type:"article",title:"Routing basics (Cisco Learning)",url:"https://www.netacad.com/",source:"Cisco Networking Academy"},
{type:"article",title:"NAT explained",url:"https://www.cloudflare.com/learning/network-layer/what-is-nat/",source:"Cloudflare Learning"},
{type:"video",title:"ACLs & Firewalls for beginners",url:"https://www.youtube.com/@JeremysITLab",source:"Jeremy’s IT Lab"}
],eli5:"Routing is deciding which road a letter should travel. NAT is swapping return addresses so replies come back to you. ACLs are the bouncer at the door — reading name tags and deciding who walks in.",codeWalkthrough:[
"Routing + NAT + ACL reading example","Routing table header","Destination / next hop / prefix columns","Default route line","Internal aggregation","Branch-A route","Blank separator","NAT examples header","SNAT for internet access","DNAT for portal publication","Blank separator","ACL header","Specific admin rule","Public portal rule","Implicit deny with logging"
],bugChallenge:{code:"Firewall:\n  permit ip any any\n  deny tcp any any eq 22",hint:"Does the deny rule actually have any effect in this order?",answer:"No. ACLs evaluate top-down with first-match-wins. ‘permit ip any any’ matches everything first, so the SSH deny is never reached. Reorder: deny specific rules first, then permits, then an explicit deny-with-log at the end."},difficulty:"intermediate",prereqs:[20,21,22]},

  {id:24,title:"DNS Deep Dive",subtitle:"The service that breaks everything indirectly",analogy:"DNS is the switchboard of the internet. Every time you type a name, a DNS server converts it to a number. When the switchboard is slow, confused, or lying, every app looks broken — but the phones are fine.",points:[
{t:"Recursive vs authoritative",d:"Recursive resolvers ask on behalf of your client (ISP resolver, 1.1.1.1, 8.8.8.8). Authoritative servers hold the real answers (e.g., the DNS servers responsible for contoso.com). Every lookup eventually reaches an authoritative server."},
{t:"Record types you must know",d:"A: name → IPv4. AAAA: name → IPv6. CNAME: alias to another name. MX: mail servers for a domain. TXT: arbitrary text (SPF/DKIM/verification). SRV: service discovery (AD uses this). PTR: reverse IP → name.",code:"Quick reference:\n  A     contoso.com        ->  93.184.216.34\n  AAAA  contoso.com        ->  2606:2800:220:...\n  CNAME www.contoso.com    ->  contoso.com\n  MX    contoso.com        ->  mail.contoso.com (priority 10)\n  TXT   contoso.com        ->  \"v=spf1 include:_spf.contoso.com ~all\"\n  SRV   _ldap._tcp.contoso.local -> DC lookup\n  PTR   34.216.184.93.in-addr.arpa -> contoso.com"},
{t:"TTL and caching",d:"Every record has a TTL (time to live) telling resolvers how long to cache the answer. Low TTLs = fast change, higher load. High TTLs = efficient, slow change. Know how to clear caches (ipconfig /flushdns, scutil equivalents)."},
{t:"Split-horizon DNS",d:"Enterprises often serve different answers internally vs externally (e.g., ‘portal.bank.local’ returns an internal IP on the LAN and a DMZ IP from the internet). Great for security; confusing when misconfigured."},
{t:"DNS forwarders and conditional forwarders",d:"A forwarder says ‘I don’t know; ask this upstream DNS.’ A conditional forwarder says ‘for this zone specifically, ask this server.’ Essential in M&A scenarios and hybrid cloud environments."},
{t:"Common DNS failures",d:"Wrong DNS server in client config, stale cache, missing/expired records, typos in zone files, mismatched TTLs, AD SRV records not reachable, DNSSEC misconfig, NXDOMAIN on legitimate records."},
{t:"Tools: dig, nslookup, Resolve-DnsName",d:"dig (Linux/macOS): rich output, show query path. nslookup: works everywhere but terse. Resolve-DnsName (PowerShell): modern Windows equivalent. Learn all three; interviewers love this topic."},
{t:"DNSSEC — trust but verify",d:"Signs DNS answers so resolvers can verify authenticity. Mostly invisible — until a misconfiguration breaks resolution for some TLDs. Know the name and the failure mode."}
],whatIs:"DNS is the naming layer of the internet and every enterprise. It rarely breaks spectacularly, but it quietly breaks everything else when it misbehaves. Mastering DNS mental models is a junior-to-mid jump.",realWorld:"Internal users can’t access the new portal. External users can. A junior checks split-horizon config and finds the internal DNS zone missing the new record. Adds it, TTL low. Fifteen minutes later everyone is back. No firewall team needed.",code:`// DNS diagnostic flow

1) What does the client see?
   ipconfig /all                    # which DNS servers?
   nslookup portal.contoso.com
   Resolve-DnsName portal.contoso.com -Server 10.10.10.10

2) Ask different resolvers to isolate
   nslookup portal.contoso.com 1.1.1.1
   dig @8.8.8.8 portal.contoso.com

3) Clear local cache if stale
   ipconfig /flushdns
   Clear-DnsClientCache

4) Check zone authority (where the record should live)
   dig NS contoso.com
   whois contoso.com

5) Record-level check
   dig MX contoso.com
   dig TXT contoso.com
   dig _dmarc.contoso.com TXT`,funFact:"Cloudflare’s public DNS service (1.1.1.1) commits to never logging your personal DNS queries — audited annually. Many enterprises still use their own internal DNS anyway because of AD SRV records and split-horizon needs.",quiz:[
{q:"Which record type maps a name to an IPv4 address?",opts:["A","CNAME","MX","TXT"],ans:0},
{q:"Split-horizon DNS means:",opts:["DNS is disabled","Different answers are served to internal vs external clients","DNS uses TCP only","DNS is case-sensitive"],ans:1},
{q:"To clear a stale DNS entry locally on Windows:",opts:["regedit","ipconfig /flushdns","disable IPv6","reinstall OS"],ans:1},
{q:"‘Recursive’ vs ‘authoritative’:",opts:["Same thing","Recursive resolvers ask on behalf of clients; authoritative servers hold the real answers","Authoritative servers don’t exist","Recursive is insecure by definition"],ans:1}
],challenge:"Using dig, query an A record, an MX record, and a TXT record for a public domain. Explain each result in plain English. Then flush your local cache and re-run.",resources:[
{type:"article",title:"DNS explained (Cloudflare)",url:"https://www.cloudflare.com/learning/dns/what-is-dns/",source:"Cloudflare Learning"},
{type:"docs",title:"dig manual",url:"https://www.isc.org/bind/",source:"ISC BIND docs"},
{type:"video",title:"DNS for admins (deep dive)",url:"https://www.youtube.com/@johnsavill",source:"John Savill"}
],eli5:"DNS is the phonebook. Your phone asks ‘what’s the number for portal?’ and someone else answers. If the phonebook is wrong, you call the wrong number. If the phonebook is slow, everyone complains their phone is broken.",codeWalkthrough:[
"DNS diagnostic flow","Step 1 — what the client sees","Check configured DNS servers","Resolve via default","Resolve via a specific server","Blank separator","Step 2 — isolate resolver problems","Force 1.1.1.1","Force 8.8.8.8","Blank separator","Step 3 — clear local cache","Windows flush","PowerShell cache clear","Blank separator","Step 4 — zone authority","dig NS records","Whois ownership","Blank separator","Step 5 — record-specific checks","MX","TXT","DMARC TXT"
],bugChallenge:{code:"New CEO’s email to customer keeps going to spam.\nJunior tells the sender ‘your email is fine; the customer’s spam filter is the problem.’",hint:"Which DNS records should you check before blaming the recipient?",answer:"Check the sender’s own DNS: SPF (TXT), DKIM (TXT selector), DMARC (TXT _dmarc) records. Missing or broken SPF/DKIM/DMARC is a leading cause of legitimate mail being marked spam. Validate these before escalating externally."},difficulty:"intermediate",prereqs:[20,21]},

  {id:25,title:"VPN, Wi-Fi & Branch Connectivity",subtitle:"Remote access and edge reality",analogy:"A VPN is a private tunnel through a public road. Wi-Fi is the parking lot attached to your building. Branch connectivity is the regional highway linking offices. If any one fails, everything inside looks broken — even though the servers are fine.",points:[
{t:"Remote-access VPN vs site-to-site VPN",d:"Remote access: individual user device tunnels in (SSL VPN, IKEv2, WireGuard). Site-to-site: two offices connect via a permanent encrypted tunnel between routers/firewalls."},
{t:"Split tunneling",d:"With split tunneling, only corporate traffic goes through the VPN; the rest goes direct. Saves bandwidth; raises security tradeoffs. Many regulated shops force full tunneling to enforce inspection and policy."},
{t:"Common VPN failure patterns",d:"(1) Authentication/MFA failure, (2) blocked UDP ports, (3) route/DNS pushed incorrectly, (4) certificate expired, (5) MTU/MSS mismatch breaking large transfers, (6) client version outdated."},
{t:"Wi-Fi fundamentals",d:"Wi-Fi failures often look like ‘everything is slow.’ Real causes: channel interference, dense devices, weak signal, captive portals, DHCP starvation, wrong PSK/802.1X, roaming issues between APs."},
{t:"Authentication on Wi-Fi",d:"PSK (shared key) for small/home networks. 802.1X (user/device certificate or RADIUS auth) for enterprise. Enterprise networks increasingly use certificates so users aren’t typing passwords repeatedly."},
{t:"Branch connectivity — MPLS, SD-WAN, internet",d:"MPLS: carrier-grade private circuits (reliable, expensive). SD-WAN: software-defined WAN using multiple internet links intelligently. Many enterprises now run hybrid: primary MPLS + internet failover, or pure SD-WAN."},
{t:"DNS and DHCP at the branch",d:"Branches typically receive DNS/DHCP from a local server or hub. If WAN to HQ fails, local services should continue (split-DNS, cached AD, branch DC). Know whether your branch design is resilient or HQ-dependent."},
{t:"The golden rule of VPN support",d:"Reproduce the issue yourself if possible. If you can’t, gather: client version, OS, connect logs, ipconfig/all after connect, nslookup of a target, ping gateway, ping internal name, ping internal IP. That evidence is half the ticket."}
],whatIs:"Edge connectivity covers how users and branches reach corporate resources securely. VPN, Wi-Fi, and branch WANs together form the ‘last mile’ — and most outages users feel start here.",realWorld:"Hybrid users at home complain the CRM is ‘down.’ Junior checks VPN logs: authentication OK, tunnel up. ipconfig shows split tunneling left DNS pointing at the home ISP. Internal hostnames don’t resolve. Pushes DNS config correctly via group-policy/VPN client config — fixed.",code:`// VPN/Wi-Fi support triage

--- VPN troubleshooting order ---
1) Auth/MFA OK?           (check client + SSO/IdP logs)
2) Tunnel up?             (client status, ports 443/UDP 500/4500/WireGuard 51820)
3) Routes/DNS pushed?     (ipconfig /all after connect)
4) Can ping internal IP?  (L3)
5) Can resolve internal name?  (DNS / split tunnel)
6) Can reach service?     (L4 port check)

--- Wi-Fi triage ---
- signal strength, channel, standard (2.4/5/6 GHz)
- SSID, security (PSK or 802.1X), roaming behavior
- DHCP scope exhausted? valid lease?
- captive portal forcing re-auth?

--- Branch WAN ---
- Primary link (MPLS/ISP-A) up?
- Failover (ISP-B / SD-WAN) kicked in?
- Latency/jitter from branch to HQ DC/DNS?`,funFact:"Many ‘the VPN is slow’ tickets turn out to be user Wi-Fi congestion from neighbors. A 30-second iperf test often shows the home network topping out well before the VPN ever becomes the bottleneck.",quiz:[
{q:"Split tunneling means:",opts:["Disabling VPN","Only corporate traffic goes through the tunnel; the rest goes direct","All traffic is encrypted twice","Only internet traffic is encrypted"],ans:1},
{q:"Most enterprise Wi-Fi uses which auth method?",opts:["WEP","PSK only","802.1X (certificate or RADIUS-backed)","SSH"],ans:2},
{q:"A VPN connects but users can’t reach internal names. Likely cause?",opts:["Expired antivirus","DNS not pushed / split-tunnel misconfig","Disk full","Keyboard issue"],ans:1},
{q:"Which WAN model uses multiple internet links intelligently?",opts:["MPLS","SD-WAN","PSTN","Dial-up"],ans:1}
],challenge:"On your own machine, connect to any VPN (corporate, personal, or a free test VPN). Before and after, run ipconfig /all and nslookup. Note DNS, default route, and assigned IP. Explain the difference.",resources:[
{type:"docs",title:"Windows VPN client",url:"https://learn.microsoft.com/windows/security/identity-protection/vpn/",source:"Microsoft Learn"},
{type:"article",title:"SD-WAN overview",url:"https://www.cloudflare.com/learning/network-layer/what-is-sd-wan/",source:"Cloudflare Learning"},
{type:"video",title:"802.1X for enterprise Wi-Fi",url:"https://www.youtube.com/@PracticalNetworking",source:"Practical Networking"}
],eli5:"A VPN is a secret tunnel from your house to the office. Wi-Fi is how your chair connects to your own house. If either is bad, you feel like the office is broken — but the office is fine.",codeWalkthrough:[
"Edge support triage block","VPN header","Auth/MFA check","Tunnel up check","Routes/DNS pushed","Ping internal IP","Resolve internal name","Reach the service","Blank separator","Wi-Fi triage header","Signal/channel/band","Security mode","DHCP health","Captive portal","Blank separator","Branch WAN header","Primary link status","Failover status","Latency/jitter to HQ"
],bugChallenge:{code:"User reports: ‘VPN connects but nothing works.’\nJunior reinstalls the VPN client 3 times.",hint:"Which ipconfig/ping/nslookup checks would reveal the real issue faster?",answer:"After tunnel up: ipconfig /all (check DNS and default route), ping internal IP (L3), nslookup internal.host (split-tunnel DNS), Test-NetConnection internal.host -Port 443 (L4). Reinstalling without evidence wastes time; most ‘nothing works’ is DNS or routes not pushed correctly."},difficulty:"intermediate",prereqs:[20,21,23,24]},

  {id:26,title:"Packet Capture & Troubleshooting Flow",subtitle:"See the truth instead of guessing",analogy:"A packet capture is CCTV footage for the network. If you trust only what users say, you’ll chase ghosts. If you watch the footage, you see exactly which car (packet) left, which intersection (hop) it died at, and which rule (firewall) blocked it.",points:[
{t:"When to capture (and when not to)",d:"Capture when: logs disagree with users, intermittent issues, vendor demands evidence, suspected performance issues. Don’t capture casually on production without approval — capture files contain sensitive data and network load."},
{t:"Wireshark basics",d:"Pick the correct interface → capture with a filter (ip host 10.0.0.5 and port 443) → stop when you’ve seen the failure → save. Display filters narrow after capture; capture filters narrow during."},
{t:"Handshake you must recognize",d:"TCP 3-way handshake: SYN → SYN/ACK → ACK. TLS handshake: ClientHello → ServerHello → certificates → keys → Finished. Missing pieces point to the layer at fault (network vs firewall vs TLS)."},
{t:"Common patterns in captures",d:"RST from firewall = policy drop. ICMP ‘unreachable’ = no route/ACL deny. Repeated SYNs with no SYN/ACK = path blocked before server. TLS alert = cert/name mismatch or cipher issue."},
{t:"tcpdump for servers",d:"On Linux servers where Wireshark UI isn’t available: tcpdump -i eth0 -w capture.pcap host 10.0.0.5 and port 443. Copy to your laptop and open in Wireshark. Standard for senior-friendly evidence.",code:"Common tcpdump one-liners:\n  tcpdump -i eth0 host 10.0.0.5\n  tcpdump -i any port 443 -w out.pcap\n  tcpdump -nn -vv 'tcp[tcpflags] & (tcp-syn|tcp-fin) != 0'"},
{t:"Evidence-driven escalation",d:"‘Firewall team, here’s a 20-second pcap showing our SYN reaches 10.0.0.5:443 and we receive TCP RST within 2ms’ gets action in minutes. ‘App is broken, please help’ gets ignored for hours."},
{t:"Respect privacy and scope",d:"Captures often contain credentials, tokens, personal data. Limit scope (host/port filters), store securely, share only with approved people, and delete after the case closes. In regulated environments, capture sensitivities are real."},
{t:"Baselines > snapshots",d:"A single capture tells you what you saw. A baseline capture from a known-good time tells you what changed. If you can capture during peace, you’ll diagnose wars faster."}
],whatIs:"Packet capture turns ‘I think’ into ‘I observed.’ Used responsibly, it’s one of the single biggest differentiators between juniors who guess and juniors who win promotions.",realWorld:"An app team insists the firewall is dropping their API. You capture: SYN leaves the client, no response arrives. tracert dies two hops before the firewall. Not a firewall problem at all — a broken route. Evidence reframes the whole conversation.",code:`// Evidence-driven network triage

Step 1 — confirm layer symptoms
  ipconfig, ping, tracert, nslookup, Test-NetConnection

Step 2 — capture at the client
  Wireshark on client NIC
  Filter: ip host <server> and tcp port <port>

Step 3 — capture at the server or mirror port
  tcpdump -i <iface> host <client> and port <port> -w out.pcap

Step 4 — compare
  - SYN seen at client and at server?
  - SYN/ACK returned?
  - RST (who sent it — client, firewall, or server)?
  - TLS handshake complete?

Step 5 — escalate with evidence
  "Attached pcap shows SYN from 10.1.1.10 reaches 10.2.2.20:443,
   RST originates from the firewall pair per IP in capture at hop X.
   Please verify rule XYZ."`,funFact:"Wireshark’s ancestor was called Ethereal and was created in 1998. It is now one of the most widely used network tools on earth — trusted by hobbyists, Fortune 500 SOCs, and government incident responders alike.",quiz:[
{q:"You see repeated SYN but no SYN/ACK in a capture to a known service. Most likely:",opts:["Server loves you","Network path or firewall is dropping before the server responds","DNS is perfect","Disk is full"],ans:1},
{q:"tcpdump is typically used on:",opts:["Windows GUIs only","Linux/Unix servers without a GUI, captured files later opened in Wireshark","Printers","Whiteboards"],ans:1},
{q:"A TCP RST right after SYN often indicates:",opts:["Normal handshake","Policy drop by firewall, closed port, or security device reset","Kerberos success","DNS success"],ans:1},
{q:"Captures contain sensitive data. You should:",opts:["Post them publicly","Limit scope, store securely, and delete after the case","Email to personal account","Print them and leave on the desk"],ans:1}
],challenge:"Install Wireshark (free). Capture 30 seconds of your own traffic while opening a website. Find the TCP 3-way handshake and the TLS ClientHello. Screenshot them. This is interview-worthy evidence of hands-on work.",resources:[
{type:"docs",title:"Wireshark official site",url:"https://www.wireshark.org/",source:"Wireshark"},
{type:"docs",title:"tcpdump manual",url:"https://www.tcpdump.org/",source:"tcpdump.org"},
{type:"video",title:"Wireshark for beginners",url:"https://www.youtube.com/@ChrisGreer",source:"Chris Greer"}
],eli5:"You can guess what’s wrong, or you can watch the security tape. The tape doesn’t lie, doesn’t get tired, and shows exactly where the criminal (packet) dropped the bag (connection).",codeWalkthrough:[
"Evidence-driven triage","Step 1 — confirm layer symptoms","Step 2 — client-side capture","Client Wireshark filter","Step 3 — server/mirror capture","tcpdump on the server","Step 4 — compare captures","SYN observed at both ends?","SYN/ACK returned?","Who sent the RST","TLS handshake completion","Step 5 — escalate with evidence","Example escalation message"
],bugChallenge:{code:"Ticket: 'HTTPS to portal fails intermittently.'\nJunior reruns ping a few times, shrugs, and closes the ticket as 'no issue reproduced'.",hint:"What tool would give you definitive evidence across intermittent failures?",answer:"Run a time-bounded Wireshark/tcpdump with filters for the specific host and port. Correlate capture timestamps with user failure times. Share the PCAP with the firewall or app team. Ping alone does not diagnose TLS, application, or firewall state."},difficulty:"intermediate",prereqs:[20,21,22,23,24,25]},

  {id:27,title:"Linux Filesystem, Users & Permissions",subtitle:"Enough Linux to be useful on day one",analogy:"Linux is like a well-organized warehouse. Every aisle (directory) has a purpose, every item (file) has an owner and rules about who can touch it. The loading dock (sudo) is supervised, and the logbook (permissions) never lies.",points:[
{t:"The filesystem tree",d:"Everything starts at /. Key directories: /etc (configs), /var (logs, spools, databases), /home (users), /root (root user), /usr (installed software), /opt (optional/third-party), /tmp (temp files), /bin & /sbin (binaries)."},
{t:"Users, groups, root",d:"Users live in /etc/passwd, groups in /etc/group, password hashes in /etc/shadow. Root is UID 0 — full power. Real admins don’t log in as root; they use sudo to escalate when needed, and log everything."},
{t:"File permissions (rwx)",d:"Three triplets: owner, group, others. chmod sets, chown changes owner/group. Numeric form: r=4, w=2, x=1. So 755 = rwxr-xr-x. For directories, x means ‘can enter,’ not ‘can execute.’",code:"Permission examples:\n  -rw-r--r--  640   file readable by owner (rw) and group (r)\n  -rwxr-xr-x  755   script executable by everyone\n  drwxr-x---  750   directory browsable only by owner+group\n\nChange permissions and ownership:\n  chmod 640 file.txt\n  chown alice:finance file.txt"},
{t:"Special bits: setuid, setgid, sticky",d:"setuid (s on owner x): file runs with owner privileges (famous: passwd command). setgid on dir: new files inherit the group. sticky bit (t on other x): only owners can delete their files in shared dirs like /tmp."},
{t:"Common paths you will visit daily",d:"/etc/ssh/sshd_config (SSH), /etc/hosts (static name overrides), /etc/fstab (mounts), /var/log (logs), /etc/sudoers (sudo rules via visudo)."},
{t:"sudo — the audit trail",d:"sudo lets you run one command as another user (usually root) after typing your own password. Commands are logged. sudo -l shows what you’re allowed. Don’t edit /etc/sudoers directly — use visudo to avoid syntax errors that lock you out."},
{t:"Package managers",d:"Debian/Ubuntu: apt. Red Hat/Rocky/Alma: dnf (or yum on older). Arch: pacman. Alpine: apk. ‘How do I install X?’ depends on the distro. Always update the package index before installing."},
{t:"Graceful restarts and safe changes",d:"Never kill -9 a service when systemctl restart works. Always test config syntax before restarting critical services (nginx -t, sshd -t). Small discipline, huge outage prevention."}
],whatIs:"Linux administration basics cover filesystem navigation, user/group management, permissions, package management, and the sudo/audit model. This is the starter pack that makes you useful on mixed-stack teams.",realWorld:"A developer says ‘my app can’t write logs.’ You check /var/log/myapp and find the directory owned by root:root, 755. The app runs as user ‘myapp.’ You chown to myapp:adm, chmod 750. App writes. Problem solved — without root passwords or dangerous shortcuts.",code:`// Linux day-one essentials

who                   # who's logged in
id                    # your UID/GID and groups
groups                # your groups
pwd                   # where am I?
ls -la                # long list with hidden + perms
cd /etc

# Inspect a user and their groups
cat /etc/passwd | grep alice
id alice

# Add a user and group safely
sudo adduser dave                       # debian/ubuntu
sudo useradd -m -s /bin/bash dave       # portable
sudo usermod -aG sudo dave              # grant sudo

# Change permissions and ownership
chmod 640 /etc/myapp.conf
chown myapp:adm /var/log/myapp

# Edit sudoers safely
sudo visudo`,funFact:"The concept of sudo came from Berkeley in the 1980s. It’s so deeply embedded in Unix culture that ‘sudo’ has become a verb — and a whole genre of internet jokes about root power.",quiz:[
{q:"755 on a directory means:",opts:["Everyone can edit it","Owner rwx, group r-x, others r-x","Nobody can read it","Encrypted directory"],ans:1},
{q:"Which file holds password hashes on modern Linux?",opts:["/etc/passwd","/etc/shadow","/etc/hosts","/tmp/passwords"],ans:1},
{q:"To grant sudo rights to a user on Debian/Ubuntu, typical command is:",opts:["chmod 777 /etc/sudoers","usermod -aG sudo username","rm -rf /etc/sudoers","cat /etc/shadow"],ans:1},
{q:"The safest way to edit /etc/sudoers is:",opts:["nano /etc/sudoers as root","visudo (checks syntax before save)","rm /etc/sudoers","cat /etc/sudoers"],ans:1}
],challenge:"On Ubuntu in a VM: create a user ‘alice,’ add her to group ‘ops,’ create /srv/ops owned by root:ops with mode 2770 (setgid + rwx for owner+group). Test that new files in /srv/ops inherit group ops.",resources:[
{type:"docs",title:"Ubuntu server guide",url:"https://ubuntu.com/server/docs",source:"Ubuntu"},
{type:"article",title:"Linux File Permissions (DigitalOcean)",url:"https://www.digitalocean.com/community/tutorials/linux-permissions-basics-and-how-to-use-umask-on-a-vps",source:"DigitalOcean"},
{type:"video",title:"Linux for beginners (Josh Madakor)",url:"https://www.youtube.com/@JoshMadakor",source:"Josh Madakor"}
],eli5:"Linux is a warehouse. Everyone has a badge (user), belongs to teams (groups), and every box (file) has a tag saying who can open, move, or destroy it. Root is the manager. Sudo is the rare time you borrow the manager’s badge — and everyone writes down when you did.",codeWalkthrough:[
"Linux essentials script","who is logged in","user identity and groups","group membership","current directory","long listing with hidden files","change to /etc","Blank separator","Inspect a specific user","passwd grep","id command","Blank separator","Create user and group","adduser on Debian/Ubuntu","Portable useradd with home and shell","Grant sudo membership","Blank separator","Change permissions and ownership","chmod config","chown on log dir","Blank separator","Safe sudoers edit with visudo"
],bugChallenge:{code:"App fails to write to /var/log/myapp.\nJunior runs: chmod -R 777 /var/log and proudly says ‘fixed’.",hint:"Why is chmod 777 on /var/log a security disaster?",answer:"That grants every user full read/write/execute on all log files — destroying integrity, enabling tampering, and likely violating multiple policies. Correct fix: chown the specific app directory to the app’s user/group (chown -R myapp:adm /var/log/myapp) and set 750 or 770 as appropriate. Never use recursive 777 as a troubleshooting shortcut."},difficulty:"beginner",prereqs:[7]},

  {id:28,title:"Linux Processes, Services & Logs",subtitle:"Where Linux incidents become visible",analogy:"Processes are the workers, services are their managers, and logs are the diary every worker keeps. When something goes wrong, you don’t interrogate every worker — you read the diaries, check the manager, and decide who to restart.",points:[
{t:"Process vs service",d:"A process is any running program. A service (systemd unit) is a managed, auto-restarted, logged process. Services survive reboots because systemd knows about them; random scripts don’t."},
{t:"systemctl & journalctl",d:"systemctl status/start/stop/restart/enable/disable/mask. journalctl reads the systemd journal (logs). These two commands handle 80% of Linux service support.",code:"Essential commands:\n  systemctl status nginx\n  systemctl restart nginx\n  systemctl enable --now nginx\n  journalctl -u nginx -e --since \"10 min ago\"\n  journalctl --since today --priority=err"},
{t:"Process inspection: ps, top, htop, pidof",d:"ps auxf shows a tree. top/htop are live monitors. pidof nginx / pgrep nginx find PIDs. kill sends signals (SIGTERM 15 polite, SIGKILL 9 last resort)."},
{t:"Resource health: load avg, memory, disk, I/O",d:"uptime (load averages), free -h (memory), df -h (disk), du -sh (dir size), iostat and iotop (I/O), vmstat (virtual memory). Know these names; try them monthly."},
{t:"Logs beyond journal",d:"/var/log/syslog (Debian/Ubuntu) or /var/log/messages (RHEL), /var/log/auth.log (auth events), application-specific dirs. grep, less, tail -f are your friends."},
{t:"Common first-aid actions",d:"Service won’t start: journalctl -u <unit> -e and systemctl status <unit> for the exit code. Disk full: df -h then du -sh /var/* /home/*. Runaway CPU: top → identify PID → inspect with ps/strace → decide whether to restart or investigate."},
{t:"OOM killer awareness",d:"When memory runs out, the kernel kills the process it considers worst. dmesg and journalctl show ‘Killed process’ entries. A repeating OOM-kill is a capacity issue, not a ‘flaky app.’"},
{t:"Safe restart order",d:"Restart the smallest scope first: service → dependent service → container → host. Never reboot a production server as a shortcut without approval in regulated environments."}
],whatIs:"Linux service administration is watching the right logs, issuing the right systemctl commands, and resisting the temptation to reboot everything. It’s quiet work that prevents 80% of Linux outages.",realWorld:"A production API server runs fine all day, then fails every night at 2 AM. journalctl shows an OOM-kill of the app every night. You correlate with a nightly backup that bloats RAM. You either tune the backup, add memory, or move backup to a quieter window — not ‘restart the service.’",code:`// Linux triage cheat-script

# Is the service alive?
systemctl status myapp
journalctl -u myapp -e --since "30 min ago"

# Is the system healthy?
uptime        # load average
free -h       # memory
df -h         # disk
top -b -n 1   # snapshot of CPU/memory

# Is a specific process misbehaving?
pgrep -a myapp
ps -o pid,pcpu,pmem,etime,cmd -p $(pgrep myapp)
kill -15 <pid>       # graceful
kill -9  <pid>       # last resort

# Did the kernel kill a process?
dmesg | grep -i "killed process"
journalctl -k --since today | grep -i oom`,funFact:"systemd is so central to modern Linux that ‘systemctl status <anything>’ has become the first command most engineers type when something feels wrong — even before they check CPU or disk.",quiz:[
{q:"The correct command to view recent logs for a specific service on a systemd system:",opts:["cat /var/log/service.log","journalctl -u <service>","dmesg only","ps aux"],ans:1},
{q:"SIGKILL (kill -9) should be used:",opts:["As the first option","Only as a last resort after SIGTERM and proper graceful shutdown","Never","For every restart"],ans:1},
{q:"Repeating ‘Killed process’ entries in dmesg suggest:",opts:["Antivirus working","OOM killer triggered due to memory pressure","Disk is fine","Malware cleaned"],ans:1},
{q:"‘systemctl enable --now nginx’ does what?",opts:["Disables nginx","Starts it now AND enables it at boot","Removes nginx","Edits its config"],ans:1}
],challenge:"On an Ubuntu VM: install nginx, verify via systemctl status, break it by editing nginx.conf to invalid syntax, try to restart, read the error via journalctl, fix, restart successfully. Save the command history.",resources:[
{type:"docs",title:"systemd documentation",url:"https://www.freedesktop.org/wiki/Software/systemd/",source:"freedesktop.org"},
{type:"article",title:"journalctl cheatsheet",url:"https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs",source:"DigitalOcean"},
{type:"video",title:"Linux systemd in depth",url:"https://www.youtube.com/@LearnLinuxTV",source:"Learn Linux TV"}
],eli5:"Every program is a worker. Services are trustworthy workers with a manager. Logs are their diary. When something breaks, you read the diary, not shout at the worker.",codeWalkthrough:[
"Linux triage cheat-script","Is service alive block","systemctl status","journalctl recent window","Blank separator","System health block","uptime","free -h","df -h","top snapshot","Blank separator","Process-specific block","pgrep","ps per-pid stats","Graceful kill","Last-resort kill","Blank separator","Kernel-kill check","dmesg grep","journalctl OOM grep"
],bugChallenge:{code:"Ticket: 'API slow at 2 AM.' Junior reboots the VM every morning at 8 AM and closes the ticket.",hint:"Which logs would tell you what actually breaks at 2 AM?",answer:"journalctl since the previous day, dmesg for OOM-kill, systemctl status for crashes, and system metrics for CPU/memory/disk peaks. Often it’s a nightly job colliding with the app. Reboots mask the cause; real fix is finding the 2 AM trigger and tuning capacity or scheduling."},difficulty:"intermediate",prereqs:[27]},

  {id:29,title:"Packages, Cron & Routine Automation",subtitle:"Ops work is repetitive by design",analogy:"Automation is how you stop being the hero who runs the same commands at midnight. Cron is the office alarm system — it doesn’t forget, doesn’t get tired, doesn’t call in sick. Your job is to write the alarm correctly.",points:[
{t:"Packages — install, update, remove",d:"apt/dnf/yum/pacman install, upgrade, remove. Always apt update (or dnf check-update) first. Know how to list installed packages and find which package owns a file.",code:"# Debian/Ubuntu\nsudo apt update && sudo apt upgrade\nsudo apt install htop jq curl\napt list --installed | grep openssh\n\n# Red Hat family\nsudo dnf check-update && sudo dnf upgrade\nsudo dnf install htop jq curl\nrpm -qf /usr/bin/ssh       # which package owns this file?"},
{t:"Cron syntax",d:"minute hour day month weekday command. */5 = every 5. 0 3 * * * = daily at 03:00. Use /etc/crontab or per-user crontab -e. Always redirect output to a log or you’ll drown in emails.",code:"# Examples\n0 3 * * *  /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1\n*/5 * * * * /usr/local/bin/healthcheck.sh >> /var/log/health.log 2>&1\n30 2 * * 0 /usr/local/bin/weekly_report.sh"},
{t:"systemd timers (modern alternative)",d:"Many shops prefer systemd .timer units over cron — better logging via journalctl, dependency handling, and randomized delays. Know both names; cron is still dominant."},
{t:"Idempotent scripts",d:"A well-written automation runs safely if triggered twice. Use checks: mkdir -p, test -f before creating, lock files to prevent overlap. Broken idempotency = weekend pages."},
{t:"Output, error, and exit codes",d:"In Unix, 0 = success, non-zero = failure. Redirect stdout and stderr (>> /var/log/x.log 2>&1). Check exit codes in scripts ($?) and fail loudly — not silently."},
{t:"Backup your changes before automation",d:"Copy configs to config.bak before rewriting. Use version control (git) where practical. A 10-line script writing to /etc without backups is a future outage waiting to happen."},
{t:"The golden rules of operator scripts",d:"(1) One job, well-scoped. (2) Log every step. (3) Exit non-zero on any failure. (4) Use set -euo pipefail in bash. (5) Protect secrets (never echo passwords). (6) Document the cron line near the script."},
{t:"Simple monitoring hook",d:"Scripts should emit an exit code a monitoring system can notice. When a cron job exits non-zero, a healthcheck tool (healthchecks.io, Uptime Kuma) can alert. Without monitoring, failed cron jobs look invisible."}
],whatIs:"Scheduled automation with clean packaging, idempotent scripts, consistent logging, and monitoring is what turns a manual admin into a reliable operator. It’s how small teams run large environments.",realWorld:"A financial reporting job must export, upload, and notify every morning at 03:30. You write a bash script with set -euo pipefail, lock file, cron entry, log output to /var/log/report.log, and exit codes feeding into healthchecks.io. If anything fails, on-call is paged with context — not at 09:00 from an angry user.",code:`#!/usr/bin/env bash
# /usr/local/bin/nightly_report.sh
set -euo pipefail
LOCK=/tmp/nightly_report.lock
LOG=/var/log/nightly_report.log

# prevent overlapping runs
exec 9>"$LOCK"
if ! flock -n 9; then
  echo "$(date -Is) another run in progress" >> "$LOG"
  exit 0
fi

{
  echo "$(date -Is) START"
  /usr/local/bin/run_report.py --date "$(date +%F)"
  /usr/local/bin/upload_report.sh "/var/reports/$(date +%F).csv"
  echo "$(date -Is) OK"
} >> "$LOG" 2>&1

# cron line (visudo / crontab -e):
# 30 3 * * * /usr/local/bin/nightly_report.sh`,funFact:"Many real-world ‘legacy systems’ are just one cron job tied to one person’s laptop that ran for 8 years. The moment that person leaves, the business discovers it. Document your cron jobs.",quiz:[
{q:"Cron ‘0 3 * * *’ means:",opts:["Every 3 seconds","Every day at 03:00","Every Sunday at 3","Every 3 months"],ans:1},
{q:"‘set -euo pipefail’ in bash does what?",opts:["Speeds up execution","Fails on errors, unset vars, and pipe failures — safer scripts","Disables logs","Removes pipes"],ans:1},
{q:"Why use a lock file in a cron script?",opts:["For cosmetic reasons","To prevent overlapping runs of the same job","To store passwords","To encrypt data"],ans:1},
{q:"‘apt update’ does:",opts:["Installs all packages","Refreshes the package index/metadata without upgrading","Removes broken packages","Reboots the machine"],ans:1}
],challenge:"Write a bash script that runs once per hour, writes a timestamped line to a log, and only runs if a certain file exists. Add it to cron. Simulate overlap with a sleep and verify the lock file prevents double-runs.",resources:[
{type:"docs",title:"Debian apt docs",url:"https://wiki.debian.org/Apt",source:"Debian"},
{type:"docs",title:"systemd timers",url:"https://www.freedesktop.org/software/systemd/man/systemd.timer.html",source:"freedesktop.org"},
{type:"article",title:"Cron how-to",url:"https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-ubuntu-1804",source:"DigitalOcean"}
],eli5:"Computers are great at doing the same thing every day without getting bored. Cron is how you tell them ‘do this every night at 3’ and go to sleep. Write it carefully or it will ‘do this every second forever.’",codeWalkthrough:[
"Bash header line (shebang)","Script path comment","Safer bash options","Paths for lock and log","Blank separator","Lock-file logic header","Open FD 9","flock non-blocking","Early-exit with log if locked","Blank separator","Main work block","Timestamped START","Run report generator","Upload the report file","Timestamped OK","Redirect all output to log","Blank separator","Example cron line"
],bugChallenge:{code:"Cron entry (installed by a junior):\n  * * * * * curl https://api.internal/kick > /dev/null",hint:"How often does this run, and what goes missing if the script fails?",answer:"This runs every minute — often far too aggressive. It discards stdout AND stderr, so errors are invisible. It has no lock file, so failures can overlap. Use sensible schedule (e.g., */5 at most), redirect stdout AND stderr to a log, add a lock file, and feed success/failure to a monitoring tool."},difficulty:"intermediate",prereqs:[27,28]},

  {id:30,title:"SSH, Hardening & Remote Access",subtitle:"Remote admin without being reckless",analogy:"SSH is your remote door. Leaving it wide open with a password lock is like guarding a bank with a screen door. Keys + no root login + a fail2ban dog + firewall walls = a door you can sleep next to.",points:[
{t:"SSH key auth beats passwords",d:"Generate a keypair (ssh-keygen -t ed25519), put the public key in ~/.ssh/authorized_keys on the server, set mode 600. Passwords are brute-forceable; keys are not (within any practical time)."},
{t:"Disable password auth and root login",d:"In /etc/ssh/sshd_config: PasswordAuthentication no, PermitRootLogin no, PubkeyAuthentication yes. Reload sshd only after testing key login in a second window to avoid locking yourself out.",code:"# Safer /etc/ssh/sshd_config\nPort 22\nPermitRootLogin no\nPasswordAuthentication no\nPubkeyAuthentication yes\nAllowUsers alice bob\nMaxAuthTries 3\nClientAliveInterval 300\n\n# apply with:\nsudo sshd -t && sudo systemctl reload ssh"},
{t:"Firewalls: ufw and firewalld",d:"ufw (Debian/Ubuntu) and firewalld (RHEL family) are simple front-ends. Allow 22 (or your chosen port), deny everything else, then open what services need. Default-deny is the default you want.",code:"# Ubuntu ufw\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow OpenSSH\nsudo ufw allow 443/tcp\nsudo ufw enable\nsudo ufw status verbose"},
{t:"fail2ban — brute-force throttle",d:"fail2ban watches logs (auth.log) and temporarily bans IPs after repeated failed logins. A simple deployment drastically cuts background brute-force noise on any internet-exposed SSH."},
{t:"Bastion / jump host model",d:"Instead of exposing SSH on every server, allow SSH only from a bastion. Admins SSH to the bastion, then ProxyJump into targets. One hardened entry point > many weak ones."},
{t:"MFA on SSH",d:"For higher assurance, add TOTP (google-authenticator PAM) or certificate-based SSH with short TTLs. Most regulated environments now require MFA on privileged access."},
{t:"Never copy private keys around",d:"Use ssh-agent / agent forwarding carefully, or better, short-lived SSH certificates. A stolen private key is a house key for your entire fleet."},
{t:"Log, alert, and review",d:"Forward SSH auth logs to a central SIEM. Alert on root logins, unusual source IPs, and new key additions. Review privileged sessions periodically. This is boring until it saves your audit."}
],whatIs:"SSH hardening + a default-deny firewall + brute-force defense + centralized logging is the baseline every Linux admin is expected to know and maintain. It’s table stakes in any serious operations team.",realWorld:"A startup exposes SSH with default settings on port 22 using passwords. Within 24 hours, bots launch 10,000+ login attempts. An attacker with a leaked password list gets in. A careful junior deploys keys-only, fail2ban, and a bastion; next 24 hours: zero successful attempts, massive drop in log noise.",code:`// Linux hardening checklist (first pass)

[ ] Separate standard users from root
[ ] SSH keys generated with ed25519, passphrase set
[ ] PermitRootLogin no, PasswordAuthentication no
[ ] AllowUsers only the accounts that need SSH
[ ] ufw or firewalld: default deny, allow only needed ports
[ ] fail2ban enabled for sshd
[ ] Automatic security updates (unattended-upgrades or dnf-automatic)
[ ] NTP configured; logs forwarded to central SIEM
[ ] MFA on privileged/bastion access
[ ] Documented list of who has SSH keys and why (access review)`,funFact:"The first real-world worm that exploited weak SSH passwords globally started in 2005 and rapidly infected thousands of servers. Many of those servers belonged to universities — because nobody changed the default passwords. Weak SSH + default-allow firewalls = attacker playground.",quiz:[
{q:"Preferred SSH authentication method on hardened systems:",opts:["Passwords","SSH keys (ed25519 preferred)","IP only","No authentication"],ans:1},
{q:"Best value for PermitRootLogin in production:",opts:["yes","no","sometimes","prohibit-password-only as a tradeoff"],ans:1},
{q:"fail2ban primarily:",opts:["Replaces your firewall","Temporarily bans IPs after repeated failed logins","Encrypts traffic","Runs backups"],ans:1},
{q:"Before reloading sshd with new settings, you should:",opts:["Just reload — what could go wrong","Test config with ‘sshd -t’ and keep a second session open to avoid lockout","Disable the firewall","Remove all users"],ans:1}
],challenge:"On an Ubuntu VM: generate an ed25519 key, copy the public key to the server, disable password auth + root login, enable ufw default-deny with OpenSSH allowed, install fail2ban. Confirm login still works and that password attempts are refused.",resources:[
{type:"docs",title:"OpenSSH server config",url:"https://man.openbsd.org/sshd_config",source:"OpenBSD / OpenSSH"},
{type:"docs",title:"ufw (Ubuntu firewall) guide",url:"https://help.ubuntu.com/community/UFW",source:"Ubuntu Community"},
{type:"docs",title:"fail2ban docs",url:"https://github.com/fail2ban/fail2ban",source:"fail2ban (GitHub)"}
],eli5:"Leaving SSH open with a password is like leaving your front door with only a string lock. Keys + no-root + an alarm dog + a real fence make it a house that burglars skip and attack the neighbor’s instead.",codeWalkthrough:[
"Hardening checklist","Standard user accounts separate from root","SSH keys ed25519 with passphrase","Disable root login and passwords","Restrict AllowUsers","Default-deny firewall with required ports allowed","fail2ban for SSH","Automatic security updates","Time sync and centralized log forwarding","MFA on privileged/bastion access","Documented access review"
],bugChallenge:{code:"Junior deploys a new internet-facing VM.\nConfig: default ssh on port 22, root login allowed, password auth enabled, no firewall.",hint:"List 4 fast, high-impact changes this server needs in the first 30 minutes.",answer:"(1) Create a non-root user + put their ed25519 public key in authorized_keys. (2) In sshd_config: PermitRootLogin no, PasswordAuthentication no, AllowUsers that user, MaxAuthTries 3. (3) Enable ufw default-deny, allow only OpenSSH and required service ports. (4) Install fail2ban and enable the sshd jail. Test with a second session BEFORE reloading sshd."},difficulty:"intermediate",prereqs:[27,28,29]},

  {id:31,title:"Basic Shell Scripting for Operators",subtitle:"Small scripts, big leverage",analogy:"A good ops script is a recipe card. It has a title, ingredients checked at the start, steps in order, a taste-test before serving, and a signal if something burned. Kitchens that cook from memory produce great chefs and terrible consistency.",points:[
{t:"Shebang and safe options",d:"Start every script with #!/usr/bin/env bash and set -euo pipefail. That tiny 2-line habit eliminates a huge class of silent failures."},
{t:"Variables and quoting",d:"Use double quotes around variables: \"$HOST\" not $HOST. Unquoted variables cause pain when values contain spaces. Use ${VAR:-default} to handle missing values safely.",code:"#!/usr/bin/env bash\nset -euo pipefail\n\nHOST=${1:-localhost}\nPORT=${2:-443}\n\necho \"Checking $HOST:$PORT at $(date -Is)\""},
{t:"Conditionals and tests",d:"[[ -f file ]] for file exists, [[ -d dir ]] for dir, [[ -n str ]] non-empty string, [[ $a == $b ]] string compare, (( a > b )) arithmetic. Know both [[ ]] and (( )) and use them deliberately."},
{t:"Loops the right way",d:"for file in /var/log/*.log; do ... done. while IFS= read -r line; do ... done < file. Don’t parse ls — loop files with glob patterns; shells handle spaces and newlines better."},
{t:"Functions and return codes",d:"Wrap logic in small functions. Return 0 for success, non-zero for failure. Propagate failures with ‘|| return 1’. Keep scripts under 200 lines; beyond that, consider Python."},
{t:"Logging discipline",d:"Timestamp every line. Log to a file with >> and 2>&1. Prefix with the script name. Use levels (INFO/WARN/ERROR) so future grep is easy.",code:"log(){ printf '%s [%s] %s\\n' \"$(date -Is)\" \"$1\" \"$2\" >> \"$LOG\"; }\nlog INFO \"starting run\"\nlog ERROR \"something went wrong\""},
{t:"Exit codes that downstream tools trust",d:"If your script is invoked by cron, systemd, or monitoring, its exit code is how the world knows. Exit non-zero on any real failure. Exit 0 silently on ‘nothing to do’ only when safe."},
{t:"When to stop writing bash",d:"If you need JSON parsing, HTTP with retries, or complex logic, move to Python. jq is okay for light JSON, but avoid 500-line bash monsters. The right tool beats heroic scripting."}
],whatIs:"Shell scripting for operators is small, safe, repeatable automation. You’re not writing software products — you’re making the system click the same buttons you would, but reliably and logged.",realWorld:"A healthcheck script pings a list of endpoints every 5 minutes, writes status to a log, and exits non-zero if any endpoint fails. A simple monitoring tool watches for non-zero exits and pages the on-call engineer. Two hours of writing prevents years of silent outages.",code:`#!/usr/bin/env bash
# /usr/local/bin/disk_alert.sh
set -euo pipefail
LOG=/var/log/disk_alert.log
THRESHOLD=85

log(){ printf '%s [%s] %s\\n' "$(date -Is)" "$1" "$2" >> "$LOG"; }

check_filesystem() {
  local fs="$1"
  local pct
  pct=$(df -P "$fs" | awk 'NR==2 {gsub("%",""); print $5}')
  if (( pct >= THRESHOLD )); then
    log ERROR "$fs at \${pct}%% (>= \${THRESHOLD}%%)"
    return 1
  fi
  log INFO "$fs at \${pct}%%"
  return 0
}

rc=0
for fs in / /var /home; do
  check_filesystem "$fs" || rc=1
done
exit "$rc"`,funFact:"Many of the most reliable scripts in corporate IT are short: 20–60 lines, well-logged, and running unchanged for years. Length is not quality; discipline is.",quiz:[
{q:"‘set -euo pipefail’ improves safety by:",opts:["Running faster","Failing on errors, unset vars, and pipe failures","Disabling logs","Encrypting output"],ans:1},
{q:"Best quoting style for variables:",opts:["Always unquoted","Always double-quoted: \"$VAR\"","Always single-quoted: '$VAR'","Only in comments"],ans:1},
{q:"Exit code 0 conventionally means:",opts:["Failure","Success","Warning","Unknown"],ans:1},
{q:"When should you stop using bash and move to Python?",opts:["Never","When you need real JSON parsing, HTTP retries, or complex logic","After 10 lines","For every script"],ans:1}
],challenge:"Write a bash script that checks disk usage on /, /var, /home; logs each result; and exits non-zero if any is above 85%. Test it with a synthetic threshold to prove the failure path works.",resources:[
{type:"docs",title:"Bash manual",url:"https://www.gnu.org/software/bash/manual/",source:"GNU"},
{type:"article",title:"ShellCheck",url:"https://www.shellcheck.net/",source:"ShellCheck"},
{type:"video",title:"Bash scripting for sysadmins",url:"https://www.youtube.com/@LearnLinuxTV",source:"Learn Linux TV"}
],eli5:"A script is a recipe the computer follows perfectly, every time. A bad recipe leaves out steps and doesn’t say if the cake burned. A good recipe tells you clearly what happened — even at 3 AM.",codeWalkthrough:[
"Shebang and script path","Safer bash options","Log and threshold variables","Blank separator","log helper function","Blank separator","Check function header","Read fs arg","Parse df percent","Compare to threshold","Log ERROR and fail","Log INFO and pass","Blank separator","Main loop","Iterate over filesystems","Accumulate failure bit","Exit with final code"
],bugChallenge:{code:"#!/bin/bash\nFS=$1\npct=$(df -P $FS | awk 'NR==2 {print $5}')\nif [ $pct -gt 85 ]; then echo full; fi",hint:"What are the unsafe parts here?",answer:"Missing set -euo pipefail; variables not quoted; pct still contains ‘%’ from df and will break numeric comparison; no logging; no exit code for downstream monitoring. Fix: add safe options, quote \"$FS\", strip % with awk gsub, use (( pct >= 85 )), and exit non-zero on failure with logged context."},difficulty:"intermediate",prereqs:[27,28,29,30]},

  {id:32,title:"CIA Triad, Risk & Least Privilege",subtitle:"Security language you must speak clearly",analogy:"Security is like protecting a bank vault. Confidentiality is ‘only the right people see inside,’ integrity is ‘the money in the vault is exactly what we counted,’ availability is ‘the vault opens at 9 AM sharp.’ Threats attack one or all three.",points:[
{t:"Confidentiality, Integrity, Availability",d:"Every real security control maps to one or more of these. Encryption protects confidentiality. Hashing/signing protects integrity. Redundancy/backup/DR protects availability."},
{t:"Threat, vulnerability, risk",d:"Threat: what could harm us. Vulnerability: a weakness that could be exploited. Risk: the likelihood × impact of a threat exploiting a vulnerability. Controls reduce risk — they rarely eliminate it."},
{t:"Least privilege",d:"Every account, process, and service should have only the access needed to do its job, no more. Applies to humans (no Domain Admin for daily work) and services (no ‘app runs as SYSTEM because it was easier’)."},
{t:"Defense in depth",d:"Assume any single control will fail. Layer them: perimeter → network → host → identity → data → monitoring. Attackers have to defeat multiple layers; you only need one to catch them."},
{t:"Security is mostly hygiene",d:"Patching, MFA, least privilege, logging, backups — the ‘boring basics’ block most real attacks. Fancy AI products don’t rescue a shop without patching discipline."},
{t:"Shared responsibility in cloud",d:"In IaaS the provider handles the physical/cloud infra; you handle OS, app, data, identity, configuration. In SaaS you still own identity, access, and data classification. Never assume ‘cloud = secure by default.’"},
{t:"Security is a team sport",d:"A junior IT person has a real security role: configure MFA correctly, handle phishing tickets, reset credentials safely, enforce device compliance, document access. You don’t need a SOC job to be useful."},
{t:"Frameworks to recognize by name",d:"ISO/IEC 27001 (ISMS), NIST Cybersecurity Framework, PCI DSS (card data), HIPAA (health, US), GDPR (privacy, EU), SOC 2 (service orgs), CIS Controls. You don’t need mastery; recognize them when a regulator or auditor uses the terms."}
],whatIs:"The security language junior IT must speak: CIA, risk vocabulary, least privilege, defense in depth, hygiene, and the core frameworks. Without this language, every security conversation sounds foreign — and you can’t be trusted with access.",realWorld:"A bank hires a junior who already uses MFA on their own accounts, explains CIA clearly, and when asked about a phishing case says ‘I’d isolate the device, notify SOC, preserve logs, reset credentials, and check sign-ins.’ That junior gets trusted with production access fast.",code:`// CIA and least privilege — practical checks

Confidentiality:
  - TLS everywhere (no plain HTTP on sensitive data)
  - Disk encryption on laptops (BitLocker/FileVault)
  - Mail/file encryption for regulated content
  - Proper ACLs, least privilege on data

Integrity:
  - Signed software, checksums for patches
  - Immutable backups / WORM storage for audit
  - Audit logs that detect tampering

Availability:
  - Redundant infra (DCs, DCs pun intended)
  - Backups with tested restores
  - DR plans with drills

Least privilege checklist:
  [ ] Standard user for daily work
  [ ] Separate named admin accounts
  [ ] Service accounts with only required permissions
  [ ] Time-bounded access for vendors
  [ ] Reviewed every quarter at minimum`,funFact:"The Verizon Data Breach Investigations Report (DBIR) consistently shows that a huge share of breaches exploit known vulnerabilities or weak credentials — boring, fixable issues. Basics are unsexy and they’re the entire job.",quiz:[
{q:"Which control most directly protects confidentiality of data in transit?",opts:["A RAID array","TLS (HTTPS/SSH/etc.)","UPS","Antivirus alone"],ans:1},
{q:"Least privilege means:",opts:["Give everyone admin","Grant only the access required for the task, for the time needed","Ban all access","Let users share passwords"],ans:1},
{q:"In IaaS, the customer is typically responsible for:",opts:["Physical cooling","Patching and securing OS, app, data, identity, configuration","Core network cabling","Hardware warranty"],ans:1},
{q:"‘Defense in depth’ means:",opts:["Using one strong firewall only","Layering multiple controls so failure of one doesn’t break security","Disabling antivirus","Replacing MFA with passwords"],ans:1}
],challenge:"Write a one-page personal security hygiene checklist: MFA everywhere, password manager, device encryption, OS + app updates, phishing awareness, backup. Apply it this week and note what you changed.",resources:[
{type:"article",title:"CIA triad",url:"https://en.wikipedia.org/wiki/Information_security",source:"Wikipedia"},
{type:"docs",title:"NIST Cybersecurity Framework",url:"https://www.nist.gov/cyberframework",source:"NIST"},
{type:"docs",title:"ISO/IEC 27001",url:"https://www.iso.org/standard/27001",source:"ISO"}
],eli5:"Good security is like a bank with three rules: (1) only let the right people in, (2) make sure nobody messes with the money inside, (3) make sure the bank opens on time. Everything else is just details of how.",codeWalkthrough:[
"CIA practical checks header","Confidentiality controls","TLS everywhere","Disk encryption","Mail/file encryption","ACLs and least privilege","Blank separator","Integrity controls","Signed software and checksums","Immutable backups","Audit log integrity","Blank separator","Availability controls","Redundant infrastructure","Backup + tested restore","DR plans with drills","Blank separator","Least privilege checklist","Standard user daily","Separate admin accounts","Narrow service account scope","Time-bounded vendor access","Periodic access review"
],bugChallenge:{code:"Company policy: 'All employees use a single shared admin account called bankadmin on all machines so it’s easy.'",hint:"List three controls this setup destroys.",answer:"(1) Least privilege — everyone acts as admin. (2) Accountability/audit — logs show ‘bankadmin did X’ with no user identity. (3) Credential rotation and separation of duties — one leaked password compromises everything. Replace with: standard per-user accounts, named admin accounts used only for privileged tasks, MFA, and centralized access reviews."},difficulty:"beginner",prereqs:[1,2,3]},

  {id:33,title:"Identity Security: MFA, SSO, IAM",subtitle:"Why identity is the new perimeter",analogy:"Identity is your passport. MFA is the fingerprint check at the border. SSO is showing the passport once to enter a whole country (not one per city). IAM is the visa policy deciding what you can do where.",points:[
{t:"Authentication factors — something you know/have/are",d:"Passwords (know), tokens/phones (have), biometrics (are). MFA = two or more categories. SMS-based MFA is weaker than authenticator-app or hardware token (FIDO2)."},
{t:"SSO in plain English",d:"Single sign-on lets one authentication unlock many apps. Behind the scenes: SAML, OIDC, OAuth. Users love it because fewer passwords; admins love it because revoking one account revokes all access."},
{t:"IAM — not just users",d:"Identity and Access Management covers users, groups, roles, service principals, and permissions across systems. Cloud IAM (AWS/Azure/GCP) is policy-based and hugely powerful — and dangerous when misconfigured."},
{t:"RBAC and least privilege",d:"Role-Based Access Control groups permissions into roles (HelpDesk, ReadOnly, FinanceUser) and assigns roles to groups/users. Far easier to review than user-by-user permissions."},
{t:"Conditional Access",d:"Modern identity (Entra ID) can require MFA based on conditions: new device, unusual location, risky sign-in, sensitive app. The right policy blocks most credential-theft attacks without punishing normal users."},
{t:"Service accounts and managed identities",d:"Apps need identity too. Use managed identities (cloud) or dedicated service accounts, never shared with humans. Rotate secrets. Store in a vault, never in code."},
{t:"Password hygiene — what still matters",d:"Long passphrases beat short complex ones. Password managers let every site have a unique password. Never reuse. Check haveibeenpwned.com — if your email is there, change anywhere it’s reused."},
{t:"Phishing-resistant MFA",d:"FIDO2/WebAuthn (hardware keys, passkeys) resists phishing because the browser itself checks the origin. Push/SMS/TOTP can still be phished or prompt-bombed. Aim for FIDO2 on privileged accounts."}
],whatIs:"Identity security is the modern ‘perimeter’ of enterprise IT. Most breaches now begin with a stolen or weak credential, not with firewall penetration. Mastering this lesson is mandatory for every IT role — not just security.",realWorld:"An executive clicks a phishing link, enters credentials on a fake page. Password is stolen. Because their account has FIDO2-based MFA plus Conditional Access, the attacker can’t log in — sign-in logs show blocked attempts from abroad. SOC resets credentials, investigates, moves on. No breach.",code:`// Entra Conditional Access pattern (high level)

Policy: "Require MFA for All Users"
  Target:  All users (exclude break-glass accounts)
  Apps:    All cloud apps
  Conditions: any sign-in
  Control: Require MFA

Policy: "Block legacy authentication"
  Target:  All users
  Apps:    All
  Conditions: client apps = legacy auth
  Control: Block

Policy: "Require compliant device for email"
  Target:  All users
  Apps:    Office 365 Exchange Online
  Conditions: platforms = iOS, Android, Windows, macOS
  Control: Require device compliance

Policy: "High-risk sign-in -> block or force password change"
  Target:  All users
  Conditions: sign-in risk = High
  Control: Block access + require password change

Break-glass accounts: 2 accounts, strong unique passwords,
hardware MFA, EXCLUDED from all CA policies, stored offline.`,funFact:"Microsoft has reported that enabling MFA blocks over 99% of automated account-compromise attempts. One checkbox, massively disproportionate impact — which is why ‘turn on MFA’ is the single most common senior recommendation to any organization.",quiz:[
{q:"Which MFA method is generally the most phishing-resistant?",opts:["SMS codes","Authenticator app (TOTP)","Hardware key / passkey (FIDO2)","Email code"],ans:2},
{q:"SSO primarily:",opts:["Gives every app its own password","Lets one authentication unlock many apps","Disables MFA","Replaces backups"],ans:1},
{q:"Break-glass accounts should be:",opts:["Shared by the whole team","A small number of accounts with strong MFA, excluded from CA policies that could lock them out, and stored offline","Deleted","Public"],ans:1},
{q:"RBAC is useful because:",opts:["It has no structure","It groups permissions into roles that are easier to review and revoke","It removes the need for MFA","It encrypts data"],ans:1}
],challenge:"Audit your personal accounts: is MFA on every critical one (email, bank, password manager, cloud)? Prefer authenticator app or hardware key over SMS. Note which accounts you upgraded.",resources:[
{type:"docs",title:"Conditional Access overview (Entra)",url:"https://learn.microsoft.com/entra/identity/conditional-access/overview",source:"Microsoft Learn"},
{type:"docs",title:"FIDO2 / WebAuthn",url:"https://fidoalliance.org/fido2/",source:"FIDO Alliance"},
{type:"article",title:"haveibeenpwned",url:"https://haveibeenpwned.com/",source:"HIBP"}
],eli5:"Passwords alone are like a lock with a paper key. MFA adds a fingerprint. SSO means one real ID card unlocks every door you’re allowed. IAM decides which doors that is.",codeWalkthrough:[
"Conditional Access example block","Policy 1 — require MFA all users","Target scope","Apps scope","Conditions","Control","Blank separator","Policy 2 — block legacy auth","Target","Apps","Conditions","Control","Blank separator","Policy 3 — require compliant device for email","Scope and platforms","Control","Blank separator","Policy 4 — block high-risk sign-ins","Conditions","Control","Blank separator","Break-glass account note"
],bugChallenge:{code:"Company rolls out Conditional Access requiring MFA for ALL accounts, including admins. No break-glass exceptions configured.",hint:"Why is this dangerous?",answer:"If MFA infrastructure fails (identity provider outage, MFA app offline), nobody can log in — including admins — so recovery is impossible. Always maintain 2 break-glass accounts with strong unique passwords, hardware MFA stored offline, excluded from standard CA policies, tightly monitored for usage."},difficulty:"intermediate",prereqs:[32]},

  {id:34,title:"Phishing, Malware & Ransomware — First 10 Minutes",subtitle:"What the first 10 minutes must look like",analogy:"Responding to an incident is like reacting to a grease fire in the kitchen. You don’t call a food critic — you cut the heat, cover the pan, move people away, and document what burned. Fast, calm, reversible.",points:[
{t:"Recognize the family",d:"Phishing: tricks a user into giving credentials or running a file. Malware: broad category; includes trojans, spyware, droppers. Ransomware: malware that encrypts data and demands payment. Response priorities differ."},
{t:"Phishing response in 10 minutes",d:"(1) Confirm the report. (2) Capture the email with headers. (3) Search mail system for similar deliveries. (4) Block sender/URL at gateway. (5) Reset credentials of anyone who clicked. (6) Review sign-in logs. (7) Purge copies from other mailboxes. (8) Educate affected users gently."},
{t:"Ransomware first 10 minutes",d:"(1) Isolate infected hosts from the network (not power off — preserves memory evidence). (2) Alert security/IR lead. (3) Preserve logs and disk images. (4) Disable affected user credentials. (5) Stop AD replication if domain admin compromise suspected (with seniors). (6) Check backups — offline copies, immutability, restore plan. (7) Do not pay without legal/exec approval. (8) Start comms log."},
{t:"Never destroy evidence accidentally",d:"Don’t wipe, don’t reinstall, don’t reboot unless required. Volatile memory, timeline artifacts, and attacker footprints are destroyed by well-meaning reboots. Isolate + preserve + notify is the mantra."},
{t:"User is the first line of defense",d:"Most phishing is stopped when a trained user reports a suspicious email. Make reporting easy (single button in Outlook/Teams). Celebrate reports; never shame users who got tricked."},
{t:"EDR and AV",d:"Endpoint Detection and Response tools (Defender for Endpoint, CrowdStrike, SentinelOne, etc.) detect and isolate. Classic AV is necessary but insufficient. Learn how to read an EDR alert timeline."},
{t:"Comms discipline during an incident",d:"Use a side channel (phones, out-of-band chat) if the main email/chat could be compromised. Nominate one spokesperson. Do NOT post details on social media or personal chats. Stick to facts, timestamps, and next steps."},
{t:"After-action review",d:"Within 1–2 weeks of the incident, write a post-incident review: timeline, what worked, what didn’t, actions to prevent recurrence. Blameless — the goal is learning, not punishment."}
],whatIs:"Incident response basics for common end-user security events. You don’t have to be a senior SOC analyst. You have to know the first 10 minutes — isolate, preserve, notify — and stay out of the way of seniors.",realWorld:"A finance user reports a suspicious email. You pull headers, see it’s a credential phish from a lookalike domain. You block the sender/URL, purge copies from all inboxes, reset the credentials of two users who clicked, review sign-in logs (no foreign logins), and email a short awareness note. Total time: 40 minutes.",code:`// Phishing 10-minute response checklist

[ ] Ticket open; user replied "I clicked / I did not click"
[ ] Capture email as .eml (or headers) from the user
[ ] Identify: sender, subject, display name spoof, URL, attachment
[ ] Query mail security (M365 Threat Explorer / gateway) for similar mails
[ ] Block sender domain + URL at gateway
[ ] Soft-delete (purge) copies from affected mailboxes
[ ] Reset credentials of anyone who entered them
[ ] Review Entra sign-in logs for the affected users
[ ] Check MFA registration events for unauthorized changes
[ ] Notify SOC / IT lead; document timeline
[ ] Send concise awareness note to the org
[ ] Thank the user who reported

// Ransomware 10-minute action

[ ] Isolate host(s) from network (disable switch port / NAC quarantine)
[ ] DO NOT power off — preserve RAM where possible
[ ] Engage security/IR senior and on-call lead
[ ] Disable affected user credentials; check privileged accounts
[ ] Start a dedicated side-channel (phone/out-of-band chat)
[ ] Freeze changes; notify execs / legal per policy
[ ] Verify backups exist, are offline/immutable, and recent
[ ] Start a timeline log (who did what, when)
[ ] Do NOT pay without legal/exec approval`,funFact:"In many post-mortems of major ransomware cases, the attackers had been inside the network for weeks — quietly. The ransom note is the end of a long attack, not the start. Detection depth matters more than reaction speed.",quiz:[
{q:"First step when a user reports a phishing email:",opts:["Delete the email silently","Capture headers and confirm whether they clicked or entered credentials","Post screenshot publicly","Ignore the ticket"],ans:1},
{q:"Ransomware on a workstation: safest first action is:",opts:["Power off immediately","Isolate from the network; preserve memory; notify IR lead","Pay the ransom","Reinstall Windows"],ans:1},
{q:"Before paying a ransom:",opts:["Pay immediately","Never pay without legal/executive approval and IR coordination","Post on social media first","Delete all backups"],ans:1},
{q:"Best user-side control against most phishing?",opts:["Harsh punishments","Trained users plus a 1-click ‘report phishing’ button plus MFA","Disable email","Require CAPTCHA on every login"],ans:1}
],challenge:"Build a phishing response checklist as a one-page runbook. Include detection, containment, eradication, recovery, and communications steps — with specific owners and tool names. This is genuine interview gold.",resources:[
{type:"docs",title:"Microsoft Defender for Office 365 anti-phishing",url:"https://learn.microsoft.com/defender-office-365/",source:"Microsoft Learn"},
{type:"docs",title:"NIST SP 800-61r2 Incident Handling Guide",url:"https://csrc.nist.gov/pubs/sp/800/61/r2/final",source:"NIST"},
{type:"article",title:"CISA Ransomware Guide",url:"https://www.cisa.gov/stopransomware",source:"CISA"}
],eli5:"When someone reports a fake email or a hostage note on the screen, don’t panic and don’t tidy up. Unplug the machine’s network, tell a senior, save the evidence, and write down what happened — in that order.",codeWalkthrough:[
"Phishing checklist header","Ticket open and click state","Capture email evidence","Identify attack indicators","Search mail system for similar","Block sender and URL","Purge copies","Reset clicked users","Review sign-in logs","MFA registration review","Notify SOC","Send awareness note","Thank the reporter","Blank separator","Ransomware checklist header","Isolate host(s)","Preserve RAM","Engage IR senior","Disable user credentials","Side-channel comms","Freeze changes","Verify backups","Timeline log","No pay without approval"
],bugChallenge:{code:"Junior sees ransomware note on a server. They immediately power off the server to ‘stop the damage,’ then reinstall Windows.",hint:"What forensic evidence and recovery options were destroyed?",answer:"Powering off wipes RAM (losing attacker artifacts, keys in memory, active processes). Reinstalling destroys disk evidence and timeline. Correct: isolate from network while keeping machine powered on, preserve memory if trained/allowed, image disks, engage IR, check backup/restore path. Reinstallation happens only after preservation and analysis."},difficulty:"intermediate",prereqs:[32,33]},

  {id:35,title:"SIEM, Alerts & SOC Triage",subtitle:"How a junior analyst adds value",analogy:"A SIEM is an emergency room with thousands of patients arriving per minute. The Tier-1 analyst is the triage nurse: quickly assessing severity, catching the real emergencies, calmly noting everything, and handing the critical cases to specialists with a complete record.",points:[
{t:"What a SIEM actually does",d:"Collects logs from many sources (AD, endpoints, firewalls, cloud), normalizes them, and runs rules/analytics to generate alerts. Popular: Microsoft Sentinel, Splunk, QRadar, Elastic Security, Wazuh (open source)."},
{t:"The Tier-1 mental model",d:"Tier-1 triage is not ‘solve the attack.’ It’s: acknowledge alert → gather context → decide true positive or false positive → escalate to Tier-2 with a good handoff → document. Speed + discipline beat cleverness."},
{t:"IOC vs IOA",d:"Indicators of Compromise: artifacts you can search for (hashes, IPs, domains). Indicators of Attack: behaviors (unusual login pattern, process chain). Modern detection favors behavior; hash-based IOCs are necessary but insufficient."},
{t:"False positives — your daily companion",d:"Most alerts are false positives. A good Tier-1 analyst closes them quickly and accurately, without becoming cynical. Document why it was FP (‘scheduled task X by sysadmin group’) so rules can be tuned."},
{t:"Handoff quality is your reputation",d:"When you escalate: alert title, first-seen timestamp, affected user/host, what you checked, what you ruled out, hypothesis, suggested next step. That note is your work portfolio as a SOC junior."},
{t:"MITRE ATT&CK vocabulary",d:"Recognize tactic categories: Initial Access, Execution, Persistence, Credential Access, Lateral Movement, Exfiltration, Impact. Describe incidents in this language — it’s the lingua franca of SOC teams worldwide."},
{t:"Log sources a junior must know",d:"Windows Security logs (4624 success, 4625 failure, 4672 priv logon, 4720 user created), Entra sign-in logs, EDR process trees, firewall connection logs, proxy logs, DNS query logs."},
{t:"Shift discipline",d:"SOC is 24/7 shift work in many shops. Handover notes, pending alerts, watch-list items, and on-call rules matter. A SOC without clean handovers leaks incidents at shift boundaries."}
],whatIs:"SOC Tier-1 is the on-call triage layer of security operations. It’s an achievable first security job with a clear progression to Tier-2 (deeper investigation), threat hunting, and detection engineering.",realWorld:"Alert: ‘Impossible travel — user signed in from Dhaka and Lagos within 30 minutes.’ Junior pulls sign-in logs, sees both IPs, matches location against travel calendar, identifies it as VPN/cloud proxy. Documents as false positive with context. Proposes a rule tweak. Handoff note is 8 lines. Senior approves.",code:`// Sample SOC Tier-1 alert triage note

--- Alert #SIEM-00042 ---
Title:       Impossible travel - user alice@contoso.com
First seen:  2026-04-20 03:11 UTC
Severity:    Medium (per rule)
User:        alice@contoso.com
Source IPs:  203.0.113.42 (Dhaka), 198.51.100.77 (Lagos)
Timespan:    28 minutes

Checks:
  - Entra sign-in logs confirm both sign-ins succeeded
  - Second IP geolocates to a known cloud proxy / mobile VPN
  - User has no access to sensitive resources in the session
  - No MFA challenge failures observed
  - Endpoint compliance healthy
  - EDR timeline shows no malicious process activity

Decision: False positive (known VPN provider)
Action:   Close + propose rule tuning to allow-list this VPN ASN
Handoff:  N/A (closed at Tier-1)
Tagged:   FP, VPN, impossible-travel
Time spent: 18 min
---`,funFact:"Many SOC teams compete internally on ‘mean time to triage’ — how fast and accurately alerts are closed or escalated. Juniors who consistently close in under 15 minutes with high accuracy get moved to Tier-2 fastest.",quiz:[
{q:"The primary job of a Tier-1 SOC analyst is to:",opts:["Write custom malware","Triage alerts — decide TP/FP, escalate cleanly, document","Negotiate ransom","Install AD"],ans:1},
{q:"An ‘indicator of attack’ (IOA) typically describes:",opts:["A file hash","A behavior (unusual process chain, credential dumping pattern)","A printer driver","A login banner"],ans:1},
{q:"Most SIEM alerts are:",opts:["Always true positives","Often false positives — good triage documents why","Encrypted","Irrelevant"],ans:1},
{q:"Which is the better escalation note?",opts:["‘Something weird happened, please check.’","Alert, first-seen, user/host, checks done, hypothesis, next step","A screenshot only","A voice note"],ans:1}
],challenge:"Install Wazuh or open Microsoft Sentinel free trial. Ingest some sample logs. Pick a rule, make it fire with test events, then write a Tier-1 triage note using the format in this lesson.",resources:[
{type:"docs",title:"MITRE ATT&CK",url:"https://attack.mitre.org/",source:"MITRE"},
{type:"docs",title:"Microsoft Sentinel overview",url:"https://learn.microsoft.com/azure/sentinel/overview",source:"Microsoft Learn"},
{type:"docs",title:"Wazuh (open-source SIEM)",url:"https://documentation.wazuh.com/",source:"Wazuh"}
],eli5:"The SIEM is a wall of beeping alarms. Your job is to check each beep: is this real or a squirrel? If real, call the right team with clear notes. If fake, turn down that alarm’s sensitivity so it stops crying wolf.",codeWalkthrough:[
"Tier-1 triage template","Alert ID","First-seen timestamp","Severity","User","Source IPs","Timespan","Blank separator","Checks header","Entra sign-in confirmation","Geolocation check","Resource exposure check","MFA challenge check","Device compliance check","EDR timeline check","Blank separator","Decision","Action","Handoff","Tags","Time spent"
],bugChallenge:{code:"Tier-1 analyst closes 200 alerts in 2 hours with the note ‘false positive’ and no details.",hint:"What risks does this create for the SOC and the analyst?",answer:"Zero audit value, no tuning feedback, true positives can hide in the noise, and the analyst’s performance looks impressive but is indefensible. Each closure needs a concise why (source, check, decision). Fast without accuracy is worse than slow."},difficulty:"intermediate",prereqs:[32,33,34]},

  {id:36,title:"Patching, Vulnerability Mgmt & Baselines",subtitle:"Prevention is boring but hireable",analogy:"Patching is brushing teeth for your fleet. You won’t see the benefit each morning. You’ll see the consequences years later in a dental chair or a press release.",points:[
{t:"Vulnerability management lifecycle",d:"Discover assets → scan for vulnerabilities → prioritize (CVSS + exploitability + asset value) → remediate (patch/config/compensating control) → verify → report. Tools: Nessus, Qualys, Rapid7, Defender Vulnerability Management."},
{t:"CVSS and real priority",d:"CVSS scores vulnerabilities 0–10. But score alone isn’t priority: ‘internet-facing + actively exploited + high impact + easy exploit’ always beats ‘high CVSS + lab-only + no exploit.’ Context matters."},
{t:"CVE, CISA KEV, vendor advisories",d:"CVEs identify vulnerabilities. CISA KEV (Known Exploited Vulnerabilities) catalog lists what’s actively exploited in the wild — a highly practical priority list."},
{t:"Patch vs mitigate",d:"Patching is ideal. When patching isn’t immediately possible (legacy, risk, SLA), apply mitigations: disable the service, firewall off, configure workarounds. Document the exception and set an expiry date."},
{t:"Baselines and secure configuration",d:"CIS Benchmarks and vendor hardening guides define what ‘secure’ looks like for an OS/service. Deviations become findings. Even partially adopting them is a big leap from default installs."},
{t:"Endpoint hygiene for juniors",d:"EDR healthy, OS patched, encryption on, MFA, screen lock, removable-media policy respected, admin rights minimized. Fix these across the fleet and you beat most mass threats."},
{t:"Patch windows and rollback",d:"Never patch during business hours without approval. Every patch cycle has test → stage → prod, a change ticket, a rollback plan, and a verification step. This discipline is what regulated industries hire for."},
{t:"Reporting to non-technical stakeholders",d:"Execs don’t care about CVE numbers. They care about risk trends: ‘we reduced critical vulnerabilities by 60% this quarter, internet-facing exposure is near-zero, 3 legacy systems are on mitigation until Q3.’ Learn to speak this language."}
],whatIs:"Vulnerability management + patching + baselines is the largest portion of real defensive work. It’s unglamorous. It’s what actually keeps organizations out of the news.",realWorld:"A new critical vulnerability in a widely-used library hits the CISA KEV list. You query vulnerability scan reports for affected assets, identify 12 servers, raise emergency changes, patch 9, apply compensating controls to 3 (isolated legacy apps), and report progress daily. No incident, no headlines.",code:`// Monthly patch cycle (simplified)

Week 1:
  - Review vendor advisories (MSRC, RHSA, vendor blogs)
  - Pull vulnerability scan results
  - Score with CVSS + exploit status (CISA KEV, EPSS)
  - Propose patch batch and exceptions for the month

Week 2:
  - Approve batch in CAB (Change Advisory Board)
  - Deploy to test ring (dev + pilot users)
  - Collect telemetry (crashes, regressions)

Week 3:
  - Roll to staging ring
  - Validate critical apps still function
  - Decide go/no-go for production

Week 4:
  - Production rollout in approved windows
  - Post-patch verification
  - Update asset inventory + vulnerability dashboards
  - Close tickets with KB references`,funFact:"Equifax’s 2017 mega-breach exploited a vulnerability with a patch that had been publicly available for 2 months. The technical fix was simple; the process discipline to apply it was missing.",quiz:[
{q:"Which is a better priority signal than CVSS alone?",opts:["CVSS alone","Score + internet-facing exposure + active exploitation (e.g., CISA KEV) + asset value","Only internal exposure","Vendor marketing"],ans:1},
{q:"CIS Benchmarks are:",opts:["Performance tests","Secure configuration guides for OS and services","Tax software","Printer standards"],ans:1},
{q:"Mitigation is acceptable when:",opts:["Patching is inconvenient","Patching isn’t immediately possible and the risk is reduced by compensating controls, with a tracked exception","You dislike the vendor","Always instead of patching"],ans:1},
{q:"Exec reporting should focus on:",opts:["CVE numbers only","Trends, exposure, mitigation progress, and remaining risk in business terms","Random screenshots","Silence"],ans:1}
],challenge:"On a VM: run a scanner (OpenVAS or a trial of Nessus/Defender Vulnerability Management). Identify the top 5 findings, write a short prioritization note using CVSS + exploitability + exposure.",resources:[
{type:"docs",title:"CISA Known Exploited Vulnerabilities",url:"https://www.cisa.gov/known-exploited-vulnerabilities-catalog",source:"CISA"},
{type:"docs",title:"CIS Benchmarks",url:"https://www.cisecurity.org/cis-benchmarks",source:"Center for Internet Security"},
{type:"docs",title:"MSRC Security Update Guide",url:"https://msrc.microsoft.com/update-guide",source:"Microsoft"}
],eli5:"Patching is boring. Breaches are exciting but painful. Choose boring. Most attackers only break in through doors you forgot to close.",codeWalkthrough:[
"Monthly cycle heading","Week 1 — intel + scoring","Vendor advisories","Scan results","Score with CVSS + exploitability","Propose batch + exceptions","Blank separator","Week 2 — test ring","CAB approval","Pilot deployment","Telemetry collection","Blank separator","Week 3 — staging","Staging deployment","App validation","Go/no-go decision","Blank separator","Week 4 — production","Rollout in windows","Post-patch verification","Inventory + dashboards","Ticket close with KB"
],bugChallenge:{code:"Policy: 'Patch only when something breaks. Speed matters, process is for bureaucrats.'",hint:"Which classic risk does this maximize?",answer:"Exploitation of known, patchable vulnerabilities. The absence of a process means no test, no rollback, no audit trail, and high outage risk. Replace with: monthly cycle + emergency process for critical/KEV items + approvals + verification + reporting."},difficulty:"intermediate",prereqs:[32,33,34,35]},

  {id:37,title:"Audit-Ready Security: Policies, Logs, Evidence",subtitle:"Controls, logs, and evidence — how regulated IT actually operates",analogy:"A regulated enterprise is a film set with cameras everywhere. Every action is logged, every approval recorded, every change has a reason and a reviewer. Auditors later roll back the tape to verify what happened. Your job is to act so the tape is clean.",points:[
{t:"The audit mindset",d:"Every privileged action should be: approved in advance, logged, reviewable, reversible, and documented. If it isn’t, a future auditor treats it as a finding."},
{t:"Policies, standards, procedures",d:"Policy: high-level ‘we will protect data.’ Standard: specific rule (‘MFA on privileged accounts’). Procedure: step-by-step (‘to reset a password, do X in Y tool with Z approval’). Know the hierarchy; quote the right one in interviews."},
{t:"ISO 27001 and PCI DSS at an interview-safe level",d:"ISO 27001 is a framework for an Information Security Management System: you scope, assess risks, pick controls, monitor, improve. PCI DSS protects payment card data — strict rules about storage, transmission, segmentation, and logging for card environments."},
{t:"Access reviews",d:"Quarterly (or monthly for privileged) reviews: does every user still need this access? Managers sign off. Removes orphaned permissions and catches drift. Auditors love seeing signed, timestamped reviews."},
{t:"Change management",d:"A change ticket records: what, why, risk, rollback, approvers, implementers, timing, verification. Even ‘small’ changes in production should flow through this in regulated shops. ‘Minor change without ticket’ becomes a breach waiting to happen."},
{t:"Log retention and integrity",d:"Retention periods vary by regulation (often 1–7 years for financial). Logs must be tamper-resistant (forward to SIEM / immutable storage). ‘We don’t have the logs from that day’ is a catastrophic audit answer."},
{t:"Third-party / vendor access",d:"Vendors often need temporary privileged access. Use PAM (Privileged Access Management) where possible: recorded sessions, just-in-time access, strong approvals. Vendor compromises are a leading breach cause industry-wide."},
{t:"Regulatory signals a junior should recognize",d:"‘72-hour critical-incident reporting,’ ‘ICT risk framework,’ ‘maker-checker,’ ‘segregation of duties,’ ‘independent review,’ ‘RCSA (Risk and Control Self-Assessment),’ ‘SoD conflicts.’ These phrases appear in regulated-sector interviews regularly."}
],whatIs:"Audit-ready security means operating with the evidence — logs, approvals, tickets, access reviews, signed changes — that proves controls actually work. Many junior ‘IT heroes’ create audit nightmares. Safe juniors create audit-friendly trails.",realWorld:"Auditor asks: ‘Show me every user who had Domain Admin access in Q1, the approval evidence, and the quarterly access review signed by the IT lead.’ A mature shop provides it in 15 minutes from Entra PIM + ticket system. An immature shop scrambles for weeks.",code:`// A junior-friendly audit evidence checklist

For any privileged action in a regulated shop, you should be
able to produce (within minutes) the following:

[ ] Change / access request ticket with business justification
[ ] Approval record (who approved, when, via what system)
[ ] Technical action log (what was done, by whom, when)
[ ] Session recording (if via a PAM tool)
[ ] Post-change verification note
[ ] Access review sign-off by responsible manager
[ ] Updated CMDB / asset inventory reflecting the change
[ ] Retention of related logs per regulatory policy

Common artefacts that prove good hygiene:
  - SIEM dashboards for privileged logon events (4672)
  - Conditional Access reports
  - Backup and restore test records
  - Incident post-mortems stored centrally
  - Vulnerability and patch trend reports`,funFact:"Some of the most valuable long-term career skills in bank/telco/MNC IT are ‘soft’: clean documentation, clear change tickets, and disciplined log retention. Promotions quietly go to people whose paperwork holds up in an audit.",quiz:[
{q:"Which statement best describes the audit mindset?",opts:["Do things quickly without logs","Make every privileged action approved, logged, reviewable, and reversible","Logs are optional","Auditors don’t read evidence"],ans:1},
{q:"Maker-checker is a pattern that:",opts:["Lets one person do everything","Separates the person who requests/performs from the person who approves/validates","Replaces MFA","Eliminates change control"],ans:1},
{q:"Why matter log retention?",opts:["Disk is free","Regulators require it; investigations depend on it","Only for branding","Only for marketing"],ans:1},
{q:"PCI DSS applies specifically to:",opts:["All data","Payment card data environments","Only mobile apps","Only websites"],ans:1}
],challenge:"Build a quarterly access review template (spreadsheet or doc) for a fictional team: columns = user, role, system, access level, last used, manager sign-off, decision (keep/reduce/remove). Use it on a fake team of 10 users.",resources:[
{type:"docs",title:"ISO/IEC 27001 overview",url:"https://www.iso.org/standard/27001",source:"ISO"},
{type:"docs",title:"PCI DSS",url:"https://www.pcisecuritystandards.org/",source:"PCI SSC"},
{type:"docs",title:"ISACA CISA domains",url:"https://www.isaca.org/credentialing/cisa",source:"ISACA"}
],eli5:"Security isn’t only building walls. It’s also writing down who opened which door, who said it was okay, and when you last checked the key list. That writing is what auditors actually read.",codeWalkthrough:[
"Junior audit evidence checklist","Change/access request ticket","Approval record","Technical action log","Session recording","Post-change verification","Manager-signed access review","CMDB update","Retention of related logs","Blank separator","Examples of good hygiene artefacts","Privileged logon dashboards","Conditional Access reports","Backup/restore records","Incident post-mortems","Vulnerability/patch trend reports"
],bugChallenge:{code:"Senior tells junior: 'Don’t bother with a ticket — just give me Domain Admin for 2 minutes, I’ll fix it.'",hint:"List three audit concerns this single action creates.",answer:"(1) No approval record; (2) no business justification or rollback plan; (3) no post-change verification; plus possible segregation-of-duties violation and unlogged privileged access. Right answer: raise a just-in-time access request with manager approval via PAM/PIM, log every action, document verification, and review in the next access review cycle."},difficulty:"advanced",prereqs:[32,33,34,35,36]},

  {id:38,title:"Cloud Fundamentals & Shared Responsibility",subtitle:"What moves to cloud and what still stays on you",analogy:"Cloud is like renting apartments in different cities instead of owning the whole building. The landlord fixes the roof and plumbing; you still lock your own door, manage your own keys, and decide which guests you let in.",points:[
{t:"IaaS, PaaS, SaaS",d:"IaaS: you rent VMs and networks (you manage OS, app, data). PaaS: you rent platforms/runtimes (you manage app and data). SaaS: you rent the whole app (you manage identity, config, data). Responsibility shifts down as you go up."},
{t:"Shared responsibility, in one sentence",d:"The cloud provider secures the cloud; you secure what you put in it. That includes identity, access, data classification, config, backups of what you own, and compliance for your workloads."},
{t:"Core building blocks",d:"Compute (VMs, containers, functions), Storage (object, block, file), Networking (VPC/VNet, subnets, load balancers, DNS), Identity (IAM), Observability (logs, metrics, traces), Security (IDPs, WAFs, encryption, secrets)."},
{t:"Regions and availability zones",d:"A region is a geographic area; AZs are isolated datacenters within a region. Critical systems run across multiple AZs. Critical data often has cross-region backups for disaster recovery."},
{t:"Hybrid and multi-cloud reality",d:"Most enterprises are hybrid (on-prem + cloud) and sometimes multi-cloud (Azure + AWS + GCP). Operational consistency suffers; identity federation (Entra ↔ AWS IAM, GCP Workload Identity) is a lifesaver."},
{t:"Cost awareness",d:"‘The cloud’ isn’t automatically cheap. Forgotten VMs, oversized instances, missing lifecycle policies on storage, and egress bandwidth run up real bills. Junior ops should recognize cost reports as part of operational health."},
{t:"SaaS security traps",d:"In SaaS (M365, Salesforce, Workday) you still own: identity (MFA, conditional access), access reviews, data classification, data loss prevention, audit log export. ‘The vendor does it all’ is a myth that sinks organizations."},
{t:"The portable mental model",d:"Across Azure/AWS/GCP: identity, network, compute, storage, security, observability, cost. Learn one cloud deeply, and you can read the other two quickly. Don’t memorize SKUs — learn the categories."}
],whatIs:"Cloud fundamentals is the vocabulary and mental model for modern infrastructure. You don’t need to be a cloud architect. You need to read architecture diagrams, understand responsibility lines, and administer day-to-day services safely.",realWorld:"A company lifts an on-prem app to Azure. Ops team assumes ‘Azure handles backups.’ Six months later, someone deletes a storage container. Azure has no recovery because soft-delete wasn’t enabled and no customer-managed backup existed. Shared responsibility doesn’t forgive assumptions.",code:`// Shared responsibility — simple matrix

                           IaaS   PaaS   SaaS
----------------------------------------------
Physical datacenter        Cloud  Cloud  Cloud
Network / host hardware    Cloud  Cloud  Cloud
Hypervisor                 Cloud  Cloud  Cloud
OS patching                You    Cloud  Cloud
Runtime / middleware       You    Cloud  Cloud
Application code           You    You    Cloud
Data                       You    You    You
Identity & access          You    You    You
Configuration              You    You    You
Compliance for workload    You    You    You`,funFact:"‘The cloud’ began as a joke/metaphor in pre-2000s network diagrams — whoever couldn’t be bothered to draw the internet just drew a cloud. The name stuck because it captures something real: someone else’s infrastructure you don’t have to draw.",quiz:[
{q:"In IaaS, the customer is responsible for:",opts:["Physical cooling only","OS, app, data, identity, and configuration","Nothing","Only the login page"],ans:1},
{q:"Regions vs AZs:",opts:["Same thing","A region is a geographic area; AZs are isolated datacenters within a region","AZs are cheaper","Regions are inside AZs"],ans:1},
{q:"In SaaS (like M365), customers still own:",opts:["Nothing","Identity, access reviews, data classification, DLP, audit export","Only the icons","Only the color scheme"],ans:1},
{q:"Which is usually NOT what the cloud provider handles for IaaS?",opts:["Hypervisor","Physical datacenter","OS patching inside your VM","Core network hardware"],ans:2}
],challenge:"Sketch a simple enterprise architecture using three cloud building blocks (Compute, Storage, Identity) and label which responsibilities belong to the provider vs the customer for IaaS, PaaS, and SaaS.",resources:[
{type:"docs",title:"AWS shared responsibility model",url:"https://aws.amazon.com/compliance/shared-responsibility-model/",source:"AWS"},
{type:"docs",title:"Azure shared responsibility",url:"https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility",source:"Microsoft Learn"},
{type:"docs",title:"Google Cloud shared responsibility",url:"https://cloud.google.com/architecture/framework/security/shared-responsibility",source:"Google Cloud"}
],eli5:"You don’t fix the plumbing in your apartment — the building owner does. But you still lock your front door, know who has the spare key, and don’t leave your valuables on the balcony. That’s the cloud.",codeWalkthrough:[
"Shared responsibility matrix","Header columns IaaS/PaaS/SaaS","Divider line","Physical datacenter row","Host hardware row","Hypervisor row","OS patching row","Runtime row","Application code row","Data row","Identity & access row","Configuration row","Compliance row"
],bugChallenge:{code:"Team migrates SharePoint to M365. Plan: 'No more backups, Microsoft handles it.'",hint:"What does M365 handle — and what doesn’t it handle — in practice?",answer:"M365 handles service availability and short-term data recoverability, but NOT long-term ransomware-resilient backup of your content, customizations, permissions, and policies for your retention needs. Best practice: keep an independent backup (Veeam/Druva/etc.) per organizational retention policy, enable retention policies, audit log export, and DLP. ‘Microsoft handles it all’ is a myth."},difficulty:"beginner",prereqs:[1,2]},

  {id:39,title:"Azure Basics for Support Engineers",subtitle:"A practical first Azure map",analogy:"Azure is a huge office park you rent space in. Resource groups are suites, VNets are building floors, NSGs are the security guards at each door, and RBAC is the HR policy deciding which employees open which office.",points:[
{t:"Subscription, resource group, resource",d:"Subscription: billing boundary. Resource group: logical container for related resources. Resource: a thing (VM, storage account, database). Delete the RG — everything inside goes with it."},
{t:"Regions, zones, and redundancy",d:"Pick a region near users. Use zones for high availability within a region. Use geo-redundant storage and cross-region backups for DR. Don’t overthink; start with one region, one zone, and grow."},
{t:"VNet, subnet, NSG, route table",d:"VNet is your private network in Azure. Subnets segment it. NSGs are stateful firewalls (allow/deny rules) on subnet or NIC. Route tables steer traffic — including forced tunneling to an on-prem firewall."},
{t:"Virtual machines — the ops bread and butter",d:"Pick size, image, disks (managed, premium for IO), networking, identity. Patch via Automation/Update Management. Back up via Azure Backup. Turn them off when not needed (cost hygiene)."},
{t:"Entra ID vs Azure AD DS vs on-prem AD",d:"Entra ID: modern cloud identity (OIDC/SAML, conditional access). Azure AD DS: domain-join-in-cloud service (legacy-style Kerberos/LDAP for apps that need it). On-prem AD: traditional Active Directory. They can integrate, but they’re not the same thing."},
{t:"RBAC and Azure Policy",d:"RBAC controls who can do what (reader, contributor, owner, plus custom roles). Azure Policy enforces rules (‘only allow VMs in this region,’ ‘require tags,’ ‘must use approved images’). Together they enforce guardrails without micromanagement."},
{t:"Azure Monitor, Log Analytics, Sentinel",d:"Monitor collects metrics/logs. Log Analytics is the query engine (KQL). Sentinel is the SIEM on top. Juniors should recognize these names and know a couple of simple KQL queries."},
{t:"Cost Management",d:"Tag resources with owner/env/project. Watch Cost Analysis and set budgets. Idle VMs, unattached disks, and forgotten test resources are the #1 cloud waste. Clean them up regularly."}
],whatIs:"Azure for junior IT is a practical toolkit: create and manage RGs, VNets, NSGs, VMs, basic storage, Entra identities, RBAC assignments, and simple monitoring. Mastery is a long road; literacy is a week.",realWorld:"A growing company wants a secure test environment for new hires. You build: one RG, one VNet with two subnets (workloads / mgmt), NSGs restricting RDP/SSH to the mgmt subnet, three small VMs, Azure Backup, auto-shutdown policy, RBAC for the HR-IT group. Cost: predictable. Risk: low. Audit: pleased.",code:`// Azure basics — typical first-week commands (CLI)

# Login
az login
az account set --subscription "<sub-id>"

# Resource group + VNet + subnet
az group create -n rg-lab-01 -l southeastasia
az network vnet create -g rg-lab-01 -n vnet-lab --address-prefix 10.10.0.0/16 \\
  --subnet-name workloads --subnet-prefix 10.10.1.0/24

# NSG with a basic rule
az network nsg create -g rg-lab-01 -n nsg-workloads
az network nsg rule create -g rg-lab-01 --nsg-name nsg-workloads -n Allow-RDP-Mgmt \\
  --priority 100 --direction Inbound --access Allow --protocol Tcp \\
  --source-address-prefixes 10.10.2.0/24 --destination-port-ranges 3389

# VM with managed identity
az vm create -g rg-lab-01 -n vm-web-01 --image Win2022Datacenter \\
  --size Standard_B2s --admin-username opsadmin --assign-identity \\
  --vnet-name vnet-lab --subnet workloads --nsg nsg-workloads

# Tagging for cost
az tag update --resource-id $(az group show -n rg-lab-01 --query id -o tsv) \\
  --operation merge --tags env=lab owner=it-support costcenter=IT-001`,funFact:"Microsoft ships multiple exam paths for junior cloud admins — AZ-900 (awareness), AZ-104 (administrator), AZ-500 (security), SC-300 (identity) — and at least one of these shows up in many corporate job ads as ‘preferred.’",quiz:[
{q:"Which is Azure’s logical container for related resources?",opts:["Subscription","Resource group","Tenant","Region"],ans:1},
{q:"NSGs are:",opts:["Backups","Stateful firewall rule sets on subnets/NICs","DNS zones","User accounts"],ans:1},
{q:"RBAC in Azure primarily controls:",opts:["Billing only","Who can perform which actions on which resources","Network routes only","DNS"],ans:1},
{q:"Forgotten lab VMs and unattached disks usually:",opts:["Save money","Cost money and should be cleaned up regularly","Improve security","Run themselves"],ans:1}
],challenge:"Open an Azure free account. Create one RG, one VNet with two subnets, one small VM, an NSG that permits SSH or RDP only from your IP. Run it for 30 minutes, delete the RG to clean up.",resources:[
{type:"docs",title:"AZ-104 study guide",url:"https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-104",source:"Microsoft Learn"},
{type:"docs",title:"Azure CLI reference",url:"https://learn.microsoft.com/cli/azure/",source:"Microsoft Learn"},
{type:"video",title:"John Savill Azure content",url:"https://www.youtube.com/@johnsavill",source:"John Savill"}
],eli5:"Azure is a huge digital office park. You rent a suite (resource group), put furniture (VM, storage) inside, hang rules on the door (NSG), and tell HR who can enter (RBAC). Lock up when you’re done.",codeWalkthrough:[
"First-week CLI examples","Login header","az login command","Set active subscription","Blank separator","RG + VNet + subnet","Create RG in region","Create VNet","Define subnet with prefix","Blank separator","NSG header","Create NSG","Create RDP rule","Blank separator","VM header","Create VM","Size, identity, network","Blank separator","Tagging header","Apply tags to RG","Tag key-values for cost tracking"
],bugChallenge:{code:"Junior exposes an Azure VM to the internet with NSG rule: Allow TCP 3389 from Any to workloads subnet, priority 100.",hint:"Which practice does this violate, and what’s the fix?",answer:"Open RDP to ‘Any’ equals daily brute-force storms. Fix: allow 3389 only from a management subnet or trusted IPs; ideally use Azure Bastion or a jump host and disable direct public RDP entirely. Add MFA + Conditional Access; keep audit logs."},difficulty:"intermediate",prereqs:[38]},

  {id:40,title:"Microsoft 365 & Entra Basics",subtitle:"The modern identity and productivity stack",analogy:"M365 + Entra is the digital office building for most companies. Mail, chat, documents, meetings, identity, device posture — one tenant. If you keep this clean, the whole company works. If you don’t, every user feels it.",points:[
{t:"Tenant — the building itself",d:"An M365/Entra tenant is a dedicated instance with its own users, domains, licenses, and policies. A company is typically one tenant. Mergers create multi-tenant pain."},
{t:"Licensing basics",d:"Each user gets licenses (E3, E5, Business Basic/Standard/Premium, Teams, Intune, Defender, etc.). Missing license = disabled service for that user. Know the common SKUs by name."},
{t:"Users, guests, and groups",d:"Members are internal users. Guests are external collaborators. Groups can be security (permissioning) or M365 groups (Exchange + Teams + SharePoint + Planner). Don’t mix them randomly."},
{t:"Admin roles — least privilege",d:"Entra and M365 have many role names (Global Admin, User Admin, Helpdesk Admin, Authentication Admin, Exchange Admin, Security Reader, etc.). Assign the smallest role that does the job. Break-glass global admin is tightly controlled."},
{t:"MFA, Conditional Access, risky sign-ins",d:"MFA is table stakes. Conditional Access enforces policies (compliant device, trusted locations, risk-based). Identity Protection flags risky sign-ins. Together they’re the modern ‘perimeter’."},
{t:"Exchange Online, Teams, SharePoint, OneDrive",d:"Exchange: mail. Teams: chat + meetings + collaboration. SharePoint: sites + document libraries. OneDrive: personal cloud files. Know which owns which data."},
{t:"Audit logs and message trace",d:"Unified audit log (compliance portal) + Exchange message trace + Entra sign-in logs — three knobs that answer most ‘what happened?’ tickets in minutes."},
{t:"Retention, DLP, and eDiscovery",d:"Retention policies keep or delete content per rules. DLP prevents leaks (e.g., credit card numbers in email). eDiscovery supports legal investigations. Regulated shops configure all three."}
],whatIs:"M365/Entra administration is the modern productivity stack. Most corporate IT work happens here. Juniors who can create users, assign licenses, configure MFA and CA, manage distribution groups, and pull audit logs are instantly useful.",realWorld:"HR onboards 5 new hires. You create accounts from an existing template, assign correct groups (which drives licensing and Teams/SharePoint access), enforce MFA registration, enroll devices in Intune, and share a welcome checklist. No tickets for 30 days afterward.",code:`// M365 / Entra — daily ops snippets (PowerShell + admin UI)

# Connect
Connect-MgGraph -Scopes "User.ReadWrite.All","Group.ReadWrite.All","Directory.Read.All"
Connect-ExchangeOnline

# Create a new user
New-MgUser -DisplayName "Alice Rahman" -UserPrincipalName "alice@contoso.com" \\
  -MailNickname "alice" -AccountEnabled:$true \\
  -PasswordProfile @{Password="TempP@ssw0rd!";ForceChangePasswordNextSignIn=$true}

# Assign license (replace GUIDs with your plan IDs)
Set-MgUserLicense -UserId alice@contoso.com -AddLicenses @(@{SkuId="ENTERPRISEPACK-GUID"}) -RemoveLicenses @()

# Add to a group
Add-MgGroupMember -GroupId <groupId> -DirectoryObjectId (Get-MgUser -UserId alice@contoso.com).Id

# Message trace (Exchange Online)
Get-MessageTrace -SenderAddress alice@contoso.com -StartDate (Get-Date).AddDays(-2) -EndDate (Get-Date)

# Export risky sign-ins (Entra Identity Protection) via portal or Graph
# Review recent risky users and risky sign-ins for that tenant`,funFact:"Microsoft has moved the M365 admin experience across several portals and brand names over a decade (Office 365 Admin Center → Microsoft 365 Admin Center; Azure AD → Entra). Junior admins should learn concepts, not logos.",quiz:[
{q:"In M365, the tenant is:",opts:["A billing address","A dedicated instance of Entra + M365 services for a company","A single user","A department group"],ans:1},
{q:"Which tool answers ‘where did this email go?’",opts:["Event Viewer","Exchange message trace","Intune","regedit"],ans:1},
{q:"Global Admin should be:",opts:["Everyone","A small, tightly controlled set, with break-glass accounts and MFA","Every manager","Nobody"],ans:1},
{q:"Which combo is the modern perimeter in M365/Entra?",opts:["Firewalls only","MFA + Conditional Access + Identity Protection","Antivirus only","Backups only"],ans:1}
],challenge:"Sign up for a Microsoft 365 Developer tenant (free). Create 3 users, 1 security group, 1 distribution list, enforce MFA, configure a basic conditional access policy requiring MFA for all users. Note what you saw.",resources:[
{type:"docs",title:"Microsoft 365 admin center docs",url:"https://learn.microsoft.com/microsoft-365/admin/",source:"Microsoft Learn"},
{type:"docs",title:"Microsoft 365 Developer Program",url:"https://developer.microsoft.com/microsoft-365/dev-program",source:"Microsoft"},
{type:"docs",title:"Entra ID documentation",url:"https://learn.microsoft.com/entra/",source:"Microsoft Learn"}
],eli5:"M365 is the office, Entra is the security desk. Desks, chairs, meeting rooms, chat, email — all work because the security desk knows who you are and what you’re allowed to touch.",codeWalkthrough:[
"Daily M365 snippets","Connect to Graph with scopes","Connect to Exchange Online","Blank separator","Create user block","Assign license block","Add to group","Blank separator","Message trace example","Blank separator","Risky sign-in export note"
],bugChallenge:{code:"To ‘fix’ a user’s email problem quickly, a junior makes the user Global Admin.",hint:"Which policies and audit concerns does this violate?",answer:"Least privilege (no need for Global Admin to fix user email); audit trail (privileged actions without justification); risk amplification (stolen GA account = tenant compromise). Correct: assign the smallest necessary role (e.g., Exchange Admin or Helpdesk Admin), with justification and time-limited assignment via PIM where possible."},difficulty:"intermediate",prereqs:[33,38]},

  {id:41,title:"Intune & Endpoint Management Awareness",subtitle:"Managing devices at scale",analogy:"Intune is fleet management for laptops and phones. You don’t visit every car in person — you push the same rules, apps, and updates to all of them, and block any car that falls out of spec.",points:[
{t:"Enrollment — the first step",d:"Devices must enroll before they can be managed. Windows Autopilot, corporate-owned iOS/Android, BYOD enrollment, macOS via DEP. Enrollment ties device identity to a user and organization."},
{t:"Compliance policies",d:"A compliance policy defines what ‘healthy’ means: OS version, encryption on, screen-lock timeout, no jailbreak. Non-compliant devices can trigger Conditional Access to block resources until fixed."},
{t:"Configuration profiles",d:"Push settings: Wi-Fi, VPN, certificates, password rules, Windows baseline security. Admins don’t touch each device; they change profiles, Intune pushes."},
{t:"App management",d:"Deploy apps (required vs available). For mobile, app protection policies control company data inside apps (MAM) without full device control (MDM) — good for BYOD."},
{t:"Remote actions",d:"Lock, wipe, reset, collect diagnostics, sync policy. A lost executive laptop can be wiped in minutes, especially when combined with BitLocker/FileVault."},
{t:"Updates and patching",d:"Update rings for Windows Update for Business, feature update policies, driver updates. This is how modern fleets stay current without SCCM-era weekend cycles."},
{t:"Security baselines & Defender integration",d:"Apply Microsoft security baselines (Windows, Edge, M365 apps). Integrate with Defender for Endpoint: risky devices push back into compliance + Conditional Access."},
{t:"Reporting and exceptions",d:"Show which devices are compliant, what policies are pending, what failed. Exceptions must be tracked with expiry, owner, and justification — never quietly forever."}
],whatIs:"Intune (now under Microsoft Intune Suite) is Microsoft’s cloud-based MDM/MAM platform. Even when you don’t manage it directly, you should recognize enrollment, compliance, configuration, apps, and Conditional Access patterns.",realWorld:"A sales executive loses their laptop in an airport. Within 15 minutes: IT blocks the account (Entra), triggers Intune remote wipe, and BitLocker + device wipe ensure data is inaccessible. Two days later, new laptop auto-enrolls via Autopilot and the executive is productive again.",code:`// Conditional Access + Intune pattern (high level)

Policy: "Require compliant device for email and SharePoint"
  Target:    All users (exclude break-glass)
  Apps:      Office 365 + SharePoint
  Platforms: Windows, macOS, iOS, Android
  Condition: device state
  Control:   Require device marked as compliant

Compliance Policy (Windows):
  - OS version >= N
  - Encryption: BitLocker enabled
  - Defender Antivirus: active, signatures up to date
  - Password/PIN required
  - Firewall: enabled
  - Not jailbroken / rooted (mobile)

Action for non-compliance:
  - Notification email after 24h
  - Block access via CA after 72h if still non-compliant
  - Helpdesk remediation steps in self-service portal`,funFact:"In many mature orgs, the phrase ‘your device is non-compliant’ has replaced ‘call IT’ as the front door to endpoint support. Users self-remediate via clear guidance, and IT only touches the edge cases.",quiz:[
{q:"A device must ___ before Intune can manage it.",opts:["Be jailbroken","Enroll (Autopilot, BYOD, DEP, etc.)","Be offline","Have no user"],ans:1},
{q:"Conditional Access + compliance policy example:",opts:["Unrelated","CA blocks resources when Intune marks the device non-compliant","Replaces MFA","Disables backups"],ans:1},
{q:"App Protection (MAM) without full MDM is useful for:",opts:["Nothing","BYOD — protects company data in apps without managing the whole device","Kiosks only","Only printers"],ans:1},
{q:"Remote wipe via Intune:",opts:["Always kills the hardware","Can reset or wipe the device remotely when triggered by admin or user report","Requires physical access","Is the same as a firmware flash"],ans:1}
],challenge:"In a Microsoft 365 Dev tenant, enroll your own (spare) Windows VM or iPhone test device. Create a compliance policy requiring encryption and a screen-lock, then a CA policy that requires ‘compliant device’ for Exchange Online.",resources:[
{type:"docs",title:"Microsoft Intune documentation",url:"https://learn.microsoft.com/mem/intune/",source:"Microsoft Learn"},
{type:"docs",title:"MD-102 Endpoint Administrator",url:"https://learn.microsoft.com/credentials/certifications/modern-desktop/",source:"Microsoft Learn"},
{type:"video",title:"Intune essentials",url:"https://www.youtube.com/@johnsavill",source:"John Savill"}
],eli5:"Intune is a magic wand for every company laptop. Wave it once and all laptops learn: lock in 5 minutes, encrypt the disk, install the VPN, and if someone loses one, erase it remotely.",codeWalkthrough:[
"CA + Intune pattern","Policy header","Target users","Apps scope","Platforms","Conditions","Control","Blank separator","Compliance policy header","OS version minimum","Encryption on","Defender active","Password/PIN required","Firewall enabled","Not jailbroken/rooted","Blank separator","Non-compliance actions","Notification email","CA block after grace","Self-service remediation steps"
],bugChallenge:{code:"Junior relaxes ALL compliance policies to ‘make the CEO’s tablet work faster’. Business data now flows to unencrypted, unmanaged devices.",hint:"What’s the right fix, and what risk did this introduce?",answer:"Data leakage and regulatory breach. Never weaken tenant-wide policies for one user. Use: scoped exception with explicit expiry, app protection (MAM) for BYOD where MDM is not feasible, and Conditional Access to require compliant device for sensitive apps. Review via PIM/access review."},difficulty:"intermediate",prereqs:[39,40]},

  {id:42,title:"AWS Basics for Non-Developer IT",subtitle:"Enough AWS to survive real interviews",analogy:"AWS is another office park next door to Azure. Different signage, same kind of suites, security guards, and rules. If you know one, you can read the other — but don’t pretend they’re identical.",points:[
{t:"Accounts, regions, AZs",d:"Every AWS account is a billing and security boundary. Pick a region near users; critical workloads span multiple AZs. Organizations + AWS Control Tower manage many accounts at scale."},
{t:"IAM — users, groups, roles, policies",d:"IAM users are long-lived identities (avoid for humans; prefer SSO). Groups hold policies. Roles are temporary identities assumed by services or users. Policies are JSON allow/deny statements."},
{t:"EC2 — virtual machines",d:"Launch an instance: image (AMI), instance type, VPC/subnet, security group, key pair, IAM role. Tag everything. Stop (keeps disk, stops compute charge) vs terminate (deletes)."},
{t:"VPC, subnets, security groups, NACLs",d:"VPC is your private network. Public subnets have routes to an internet gateway; private subnets don’t. Security groups are stateful (per ENI); NACLs are stateless (per subnet). Use SGs primarily."},
{t:"S3 storage",d:"Buckets and objects. Versioning, lifecycle, encryption (SSE-S3/KMS), block-public-access. ‘Unintentionally public bucket’ has caused many breaches — make block-public-access a default."},
{t:"RDS for managed databases",d:"Managed SQL Server / MySQL / PostgreSQL / MariaDB / Oracle. Automated backups, snapshots, read replicas. Operations loves it; patching and backups become much simpler."},
{t:"CloudWatch & CloudTrail",d:"CloudWatch: metrics, logs, alarms. CloudTrail: audit log of API calls. Every mature AWS account should enable CloudTrail across all regions + send logs to secure, immutable storage."},
{t:"Cost and hygiene",d:"Cost Explorer, budgets, tags. Clean up unused EBS volumes, snapshots, and idle EC2. Turn on AWS Config for compliance visibility. Don’t leave credentials in git."}
],whatIs:"AWS for juniors is a cloud-literacy layer: IAM, EC2, VPC, S3, RDS, monitoring, and cost hygiene. You don’t need deep architecting; you need confident reading and safe daily admin of these primitives.",realWorld:"A small team needs a test web app. You create one VPC with public/private subnets, launch a t3.micro EC2 in the public subnet with a security group allowing HTTPS, put the app behind a load balancer, and store images in an S3 bucket with block-public-access. CloudTrail logs everything.",code:`// AWS starter snippets (CLI)

aws configure sso             # prefer SSO over long-lived keys

# IAM: list users and groups
aws iam list-users
aws iam list-groups
aws iam list-attached-user-policies --user-name alice

# EC2
aws ec2 describe-instances --filters "Name=instance-state-name,Values=running"
aws ec2 stop-instances --instance-ids i-0123456789abcdef0

# S3
aws s3 mb s3://contoso-lab-bucket --region ap-south-1
aws s3api put-public-access-block \\
  --bucket contoso-lab-bucket \\
  --public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

# Tag resources
aws ec2 create-tags --resources i-0123456789abcdef0 \\
  --tags Key=env,Value=lab Key=owner,Value=it-support Key=costcenter,Value=IT-001

# CloudTrail quick check
aws cloudtrail describe-trails
aws cloudtrail get-trail-status --name <trail-name>`,funFact:"The #1 cause of AWS data exposure incidents over the past decade has been publicly accessible S3 buckets. ‘Block Public Access’ is now on by default — but misconfigurations still happen every week.",quiz:[
{q:"Security groups in AWS are:",opts:["Stateless per subnet","Stateful per ENI","Files on S3","IAM roles"],ans:1},
{q:"The safest default for an S3 bucket is:",opts:["Public read","Block Public Access enabled and encryption on","Open to everyone","No policy"],ans:1},
{q:"IAM roles are primarily used to:",opts:["Rename users","Provide temporary credentials to services/users via assume-role","Encrypt data","Monitor CPU"],ans:1},
{q:"Which service logs AWS API calls for audit?",opts:["CloudTrail","S3","VPC","RDS"],ans:0}
],challenge:"Open the AWS Free Tier. Create a VPC with 1 public and 1 private subnet, launch a t3.micro EC2 in the private subnet accessed via SSM/Session Manager (no public IP). Add a properly locked-down S3 bucket. Terminate everything when done.",resources:[
{type:"docs",title:"AWS Well-Architected Framework",url:"https://aws.amazon.com/architecture/well-architected/",source:"AWS"},
{type:"docs",title:"AWS CLI reference",url:"https://docs.aws.amazon.com/cli/",source:"AWS"},
{type:"docs",title:"AWS Free Tier",url:"https://aws.amazon.com/free/",source:"AWS"}
],eli5:"AWS is another huge office park. Put your stuff in a private room (private subnet), let the receptionist (load balancer) route visitors, and never accidentally leave your storage locker (S3) unlocked in the lobby.",codeWalkthrough:[
"AWS starter CLI snippets","Prefer SSO for credentials","Blank separator","IAM listing commands","Users, groups, attached policies","Blank separator","EC2 commands","Describe running instances","Stop instance","Blank separator","S3 commands","Create bucket","Enable block-public-access","Blank separator","Tagging commands","Apply tags for cost tracking","Blank separator","CloudTrail checks","Describe trails","Get trail status"
],bugChallenge:{code:"Plan: 'Use a single IAM user named root-user for everything, save the access key in our git repo, and share it with the team.'",hint:"How many foundational controls does this violate?",answer:"(1) Using root-level credentials for daily work, (2) long-lived access keys (prefer SSO + short-term roles), (3) secrets in git (easily leaked), (4) shared credentials (no auditability), (5) no MFA on powerful accounts. Replace with: SSO/IAM Identity Center, per-user identities, MFA everywhere, roles for services, secrets in AWS Secrets Manager or Parameter Store — never in git."},difficulty:"intermediate",prereqs:[38,39]},

  {id:43,title:"Virtualization 101",subtitle:"One host, many systems",analogy:"A hypervisor is an apartment building. Instead of one house per plot of land (one OS per physical server), you build a tall building that runs many apartments (VMs) on the same plot. Tenants don’t see each other; the building handles shared plumbing.",points:[
{t:"Hypervisor types",d:"Type 1 runs directly on hardware (VMware ESXi, Hyper-V Server, Proxmox KVM). Type 2 runs on top of an OS (VMware Workstation, VirtualBox). Production uses Type 1; learners use Type 2."},
{t:"VMs vs containers — a quick note",d:"VMs virtualize hardware (each has its own OS). Containers share the host kernel (lightweight, fast start). Both are useful; enterprises run both. You’ll meet Docker/Kubernetes conceptually throughout your career."},
{t:"Key VM concepts",d:"vCPU, vRAM, virtual disks (thin vs thick), virtual NIC, snapshot, template, clone, export/import. Enterprises build golden templates and clone.",code:"Typical VM lifecycle:\n  1. Build template (OS + patches + agents + hardening)\n  2. Deploy as clone/linked-clone\n  3. Adjust sizing per workload\n  4. Snapshot before big changes (short-lived!)\n  5. Back up VM regularly\n  6. Retire cleanly (export or delete + archive)"},
{t:"Snapshots are not backups",d:"A snapshot captures a moment in time for a VM, but long-lived snapshots bloat disk and break performance. Use for short-term rollback (hours, not weeks). Real backup goes to a separate system with offsite copies."},
{t:"High availability and vMotion / Live Migration",d:"Enterprise clusters can move a running VM between hosts with no downtime. HA restarts a VM on another host if a host fails. Magic at scale; mandatory for critical infra."},
{t:"Resource overcommit",d:"You can allocate more vCPU/vRAM than physical. Great for density; dangerous when all VMs spike at once. Monitor ‘ready time’ and memory ballooning if performance degrades."},
{t:"Virtual networking in VMs",d:"Virtual switches and port groups map VM NICs to VLANs and physical uplinks. Security policies (promiscuous, MAC changes, forged transmits) prevent common VM escapes."},
{t:"When to use Proxmox or Hyper-V for home labs",d:"Proxmox (free, Debian + KVM + LXC) is excellent for home labs. Hyper-V comes with Windows Pro/Server. VMware Workstation Player is free for non-commercial use. All teach real skills."}
],whatIs:"Virtualization is the foundation of modern infrastructure. Even pure-cloud shops run virtualization under the hood. Know VMs, snapshots, templates, vSwitches, HA/vMotion — even at a conceptual level — and you can read any datacenter topology.",realWorld:"A 200-branch bank replaces 200 physical servers with a consolidated virtualization cluster at HQ and two DR sites. Power, cooling, hardware cost drops; deployments become minutes; DR becomes achievable. All thanks to hypervisors and templates.",code:`// VM home-lab starter plan

Host OS: Windows 11 Pro (Hyper-V) or Ubuntu (KVM) or Proxmox bare metal.

VMs to build, in order:
  1) Windows Server 2022 as DC01 (AD DS, DNS, DHCP)
  2) Windows 11 client joined to the domain
  3) Ubuntu 22.04 as web + ssh lab (for Linux drills)
  4) pfSense or OPNsense firewall (VLANs, routing, NAT)
  5) Optional: a second DC for replication testing

Habits:
  - Snapshot BEFORE risky config changes
  - Keep snapshots short-lived (delete after verifying)
  - Export working VMs as templates for quick rebuilds
  - Document VM specs and their purpose in a lab journal`,funFact:"VMware Workstation introduced many of the concepts you still use today — snapshots, teams, shared folders — in 1999. Two decades later, the same ideas power cloud datacenters serving billions of users.",quiz:[
{q:"A Type 1 hypervisor:",opts:["Runs inside Windows","Runs directly on hardware (like ESXi, Hyper-V, KVM-on-Proxmox)","Is an antivirus","Is a database"],ans:1},
{q:"VM snapshots are best used for:",opts:["Long-term backup","Short-term rollback before risky changes","Replacing monitoring","Replacing AD"],ans:1},
{q:"Which concept lets a running VM move between hosts with no downtime?",opts:["Backup","vMotion / Live Migration","Boot order","DNS"],ans:1},
{q:"Resource overcommit means:",opts:["Allocating less than physical","Allocating more vCPU/vRAM than physical, then monitoring for contention","Turning off VMs","Deleting snapshots"],ans:1}
],challenge:"On your laptop, install VMware Workstation Player or Hyper-V. Build a Windows Server VM + a Windows 11 client VM. Snapshot the client before joining the domain, verify you can revert, then delete the snapshot.",resources:[
{type:"docs",title:"Proxmox VE docs",url:"https://pve.proxmox.com/wiki/Main_Page",source:"Proxmox"},
{type:"docs",title:"Hyper-V on Windows",url:"https://learn.microsoft.com/virtualization/hyper-v-on-windows/",source:"Microsoft Learn"},
{type:"video",title:"Home lab tour (pick your platform)",url:"https://www.youtube.com/@LawrenceSystems",source:"Lawrence Systems"}
],eli5:"One big computer can pretend to be many small ones. Each little computer (VM) thinks it’s alone. That’s how one server runs the whole office instead of needing one per app.",codeWalkthrough:[
"Home-lab plan heading","Host OS options","Blank separator","VM list heading","DC VM","Client VM","Linux lab VM","Firewall VM","Optional second DC","Blank separator","Habits header","Snapshot before risky changes","Keep snapshots short-lived","Export working templates","Maintain a lab journal"
],bugChallenge:{code:"Junior uses VM snapshots as the ONLY backup for a production domain controller for 90 days.",hint:"Why is this dangerous?",answer:"Snapshots bloat, degrade performance, and break if the host dies. They are not a backup strategy. Deploy real backup: Veeam/Azure Backup/Rubrik with verified restores, offsite copies, immutable storage, and tested restore drills. Snapshots are fine for short windows (minutes/hours), not 90 days."},difficulty:"beginner",prereqs:[14,27]},

  {id:44,title:"VMware, Hyper-V & Proxmox Awareness",subtitle:"Know the major platforms without overselling",analogy:"VMware, Hyper-V, Proxmox are three car brands that solve the same problem — safe, fast travel. Pros and cons differ; the driving license (fundamentals) is the same.",points:[
{t:"VMware vSphere / ESXi / vCenter",d:"Industry standard for many enterprises. ESXi is the hypervisor; vCenter manages clusters, HA, DRS, vMotion, storage, and networking. Strong ecosystem, strong licensing cost."},
{t:"Microsoft Hyper-V",d:"Bundled with Windows Server and Pro editions. Scales well, integrates with SCVMM / Azure Stack HCI. Familiar if your team lives in the Microsoft world."},
{t:"Proxmox VE",d:"Debian-based open-source platform combining KVM (VMs) and LXC (containers). Free, powerful, great for labs and SMB environments. Strong web UI, API, and built-in backup."},
{t:"Nutanix / AHV (awareness level)",d:"Hyperconverged platforms that bundle hypervisor + storage + management. You’ll meet them in some enterprises. Recognize the name; don’t oversell depth."},
{t:"Public-cloud virtualization",d:"Azure uses Hyper-V under the hood (invisible to you). AWS uses a custom-built Nitro hypervisor. You never see them directly — you just consume VMs. That’s the point."},
{t:"Choosing a lab platform as a junior",d:"Windows Pro → Hyper-V (already included). Old hardware → Proxmox. Mac/Win laptop → VMware Workstation Player or VirtualBox. Don’t obsess over the ‘best’ — obsess over running labs."},
{t:"Cross-platform portability",d:"OVF/OVA files can move VMs across platforms with some friction. Generally easier to rebuild from scripts/templates than to migrate blindly."},
{t:"Licensing awareness",d:"VMware and Hyper-V have licensing costs per socket/core and host. Proxmox has optional paid subscriptions for enterprise support. Know costs exist; don’t memorize SKUs."}
],whatIs:"Virtualization platform awareness: recognize VMware, Hyper-V, Proxmox by name, know their typical use cases, and choose one for your home lab. Depth comes later; literacy is expected now.",realWorld:"Your first employer runs VMware vSphere with vCenter. Your second runs Hyper-V with SCVMM. Your third runs Proxmox for dev environments. The fundamentals transfer; only the buttons change.",code:`// Rough equivalence map

VMware                | Hyper-V                 | Proxmox VE
----------------------|-------------------------|-------------------------
ESXi                  | Hyper-V host            | Proxmox node
vCenter               | SCVMM                   | cluster + web UI
VM                    | Virtual Machine         | KVM VM
Template              | Template                | Template
Snapshot              | Checkpoint              | Snapshot
vSwitch / port group  | Virtual Switch          | Linux bridge / OVS
vMotion               | Live Migration          | Live Migration
vSphere HA / FT       | Failover Cluster        | Proxmox HA
vSAN                  | Storage Spaces Direct   | Ceph / ZFS
DRS                   | Dynamic Optimization    | HA scheduler`,funFact:"Proxmox is popular in European universities, MSPs, and home-lab communities because it delivers enterprise-grade features on commodity hardware with no per-socket hypervisor license. Many senior engineers started there.",quiz:[
{q:"VMware’s cluster management product is:",opts:["SCVMM","vCenter","Proxmox","Nutanix"],ans:1},
{q:"Proxmox VE is based on:",opts:["Windows","Debian (KVM + LXC)","FreeBSD","Solaris"],ans:1},
{q:"Which of the following is TRUE?",opts:["Azure secretly uses Proxmox","AWS uses the Nitro hypervisor internally","Hyper-V runs only on macOS","ESXi runs on Windows"],ans:1},
{q:"For a free home lab on old hardware, a strong default choice is:",opts:["VMware vSphere Enterprise","Proxmox VE","SCVMM","Nutanix"],ans:1}
],challenge:"Install Proxmox VE on old hardware OR Hyper-V on a Windows Pro laptop. Import an Ubuntu ISO, create a VM, snapshot, export a template. Capture screenshots for your portfolio.",resources:[
{type:"docs",title:"VMware Hands-on Labs",url:"https://www.vmware.com/learn/hands-on-labs.html",source:"VMware"},
{type:"docs",title:"Proxmox VE admin guide",url:"https://pve.proxmox.com/pve-docs/",source:"Proxmox"},
{type:"docs",title:"Hyper-V documentation",url:"https://learn.microsoft.com/virtualization/hyper-v-on-windows/",source:"Microsoft Learn"}
],eli5:"Three different brands, three different dashboards, the same steering wheel underneath. Pick one for your driveway, learn to drive carefully, and you can rent the other two when needed.",codeWalkthrough:[
"Equivalence table","Header row","Divider","ESXi host vs Hyper-V host vs Proxmox node","Cluster management","VM primitive","Templates","Snapshot/checkpoint","Virtual networking","Live migration","HA and failover","Software-defined storage","Dynamic scheduling"
],bugChallenge:{code:"Junior buys an enterprise VMware license for a 2-VM home lab.",hint:"What free/low-cost tools would have sufficed?",answer:"VMware Workstation Player (free for non-commercial) or Hyper-V (built into Windows Pro) or Proxmox VE (free) are all excellent for a home lab. Enterprise vSphere licensing is overkill until you need clusters, shared storage, vMotion, and DRS for production workloads."},difficulty:"intermediate",prereqs:[43]},

  {id:45,title:"Backup Theory That Survives Audits",subtitle:"From copy to recoverability",analogy:"Backups are spare keys. A spare key that you’ve never tested might be the wrong shape. A spare key stored on the same keyring as the original is not a spare. A good backup is a copy kept elsewhere, tested often, and restorable to a known, recent state.",points:[
{t:"Full, incremental, differential",d:"Full: entire dataset (slow, big). Incremental: changes since last backup of any kind (small, fast, longer restore chain). Differential: changes since last full (medium, shorter restore). Modern tools often use synthetic fulls + forever-incremental."},
{t:"3-2-1 rule",d:"Three copies of data, on at least two different media, with at least one copy offsite. Combined with immutability, this survives ransomware and hardware failure."},
{t:"Immutability and WORM",d:"Write-Once-Read-Many (WORM) storage prevents backups from being modified or deleted within a retention window. Critical against ransomware that seeks to destroy backups before encrypting data."},
{t:"Retention policy",d:"How long each backup is kept. Often tiered: daily for 30 days, weekly for 90 days, monthly for 1 year, yearly for 7 years. Regulators define minimums for some industries."},
{t:"Application-consistent vs crash-consistent",d:"Crash-consistent: like pulling the power — may miss in-flight writes. Application-consistent: quiesces apps (VSS, pre/post scripts) before capturing. Databases almost always need app-consistent backups."},
{t:"Restore is the product",d:"Every backup must be tested. ‘We have a backup’ means nothing; ‘we did a restore drill last month with documented RTO’ means everything. Unverified backups fail at the worst time."},
{t:"Backup as security control",d:"Segmentation of backup credentials, separate domain/tenant for backup admins, isolated backup network, and monitoring of backup jobs. Attackers target backups first in ransomware cases."},
{t:"Common pitfalls",d:"(1) Backups on the same storage as production. (2) Jobs fail silently. (3) No offsite copy. (4) No immutability. (5) Never-tested restore. (6) Encryption keys lost. (7) Retention mismatch with regulation."}
],whatIs:"Backup discipline is the spine of availability and recovery. You don’t need to architect it as a junior; you need to recognize when a setup is audit-ready and when it isn’t — and raise it before an incident proves it.",realWorld:"A mid-sized company gets hit by ransomware at 2 AM. Their backups were on the same SAN that got encrypted. No immutability, no offsite. Recovery takes weeks and pain. A peer company next door recovers in 48 hours because of 3-2-1 + immutability + recent restore drills.",code:`// Backup hygiene checklist

[ ] 3 copies: production + onsite backup + offsite/cloud
[ ] 2 media types (disk + cloud; disk + tape; etc.)
[ ] 1 offsite / offline / immutable copy
[ ] Immutability window matches worst-case attacker dwell time
[ ] Application-consistent backups for databases
[ ] Separate backup admin identity / tenant
[ ] Backup jobs monitored -> on failure, alert + ticket
[ ] Retention matches regulation (e.g., 7y for some finance data)
[ ] Encryption keys stored in a vault, with escrow
[ ] Documented restore runbook
[ ] Scheduled restore drills (at least quarterly)
[ ] Last restore drill date is within policy window`,funFact:"In many post-ransomware reviews, the victim had backups — but attackers had also compromised the backup admin account and wiped them. Backups must be defended as an identity/access frontier, not just a storage job.",quiz:[
{q:"The 3-2-1 rule means:",opts:["Three colors, two fonts, one page","3 copies, on 2 media, 1 offsite","3 admins, 2 passwords, 1 backup","3 firewalls, 2 VLANs, 1 DC"],ans:1},
{q:"Which backup type minimizes daily backup size but lengthens the restore chain?",opts:["Full","Differential","Incremental","Mirror"],ans:2},
{q:"Application-consistent backups matter most for:",opts:["Static HTML","Databases and transactional apps","Old photos","Printer drivers"],ans:1},
{q:"‘We have backups’ is meaningful when:",opts:["The tool is installed","Restore drills have been performed recently with measured RTO","Disk is cheap","The label is printed"],ans:1}
],challenge:"Install Veeam Community Edition (or use Azure Backup trial). Back up a test VM. Simulate data loss by deleting a file. Restore it and time the process. Write a 6-line restore runbook.",resources:[
{type:"docs",title:"Veeam Backup Community Edition",url:"https://www.veeam.com/virtual-machine-backup-solution-free.html",source:"Veeam"},
{type:"docs",title:"Azure Backup",url:"https://learn.microsoft.com/azure/backup/",source:"Microsoft Learn"},
{type:"article",title:"CISA backup guidance",url:"https://www.cisa.gov/stopransomware",source:"CISA"}
],eli5:"Keep a spare key you know works, store it somewhere safe, check it regularly, and never keep it on the same keychain as the one you lose.",codeWalkthrough:[
"Backup hygiene checklist","Three copies pattern","Two media types","One offsite/immutable","Immutability matches attacker dwell","App-consistent DB backups","Separate backup identity/tenant","Monitored jobs + alerts","Retention matches regulation","Keys in a vault with escrow","Documented restore runbook","Quarterly restore drills","Last drill within policy"
],bugChallenge:{code:"Junior sets up daily backups to a share on the same storage array as production.\nRetention is 14 days. No offsite, no immutability. Last restore tested: never.",hint:"How does this fail against a ransomware attack?",answer:"Ransomware encrypts the shared storage, destroying backups with it. 14-day retention misses longer-dwell campaigns. ‘Never tested’ means untrusted. Fix: 3-2-1 with immutable offsite copy, longer retention per regulation, tested quarterly restores, separate backup identity and network, and monitored alerts on failed jobs."},difficulty:"intermediate",prereqs:[43,44]},

  {id:46,title:"RPO, RTO & DR Drills",subtitle:"Business language for technical people",analogy:"DR planning is like fire drills. Everyone thinks they’ll remember what to do until the alarm actually rings. RPO is ‘how much data can we lose?’ RTO is ‘how long can we be down?’ Drills are the difference between plan and performance.",points:[
{t:"RPO — Recovery Point Objective",d:"Maximum tolerable data loss measured in time. ‘Our RPO is 15 minutes’ means we can lose up to 15 minutes of changes. Drives backup frequency."},
{t:"RTO — Recovery Time Objective",d:"Maximum tolerable downtime measured in time. ‘Our RTO is 2 hours’ means we must be back online within 2 hours. Drives recovery architecture (failover, replicas, DR site)."},
{t:"MTTR vs MTBF vs MTTA",d:"MTTR: Mean Time To Repair/Restore. MTBF: Mean Time Between Failures. MTTA: Mean Time To Acknowledge. Business discusses these for service-level reports."},
{t:"Replication vs backup",d:"Replication: continuous or near-real-time copy for HA/DR. Backup: point-in-time copies for recovery from corruption/ransomware. You need both — replication alone won’t help against ransomware that replicates too."},
{t:"Active/active vs active/passive",d:"Active/active: multiple sites serving traffic simultaneously. Active/passive: one site primary, another standby, failed over manually or automatically. Cost vs complexity tradeoff."},
{t:"Dependency mapping",d:"A DR plan lists every dependency: DNS, identity, network, certificates, storage, apps, monitoring, third parties. Missing one equals plan failure."},
{t:"Runbooks and roles",d:"Who declares a disaster? Who runs the runbook? Who talks to users? Who updates execs? Documented roles prevent chaos on day zero."},
{t:"Exercises: tabletop, partial, full",d:"Tabletop: discussion-only walkthrough. Partial: recover one system. Full: recover the environment end-to-end. Mature shops run at least one partial exercise yearly."}
],whatIs:"RPO/RTO/DR translates technical resilience into business language and reveals whether ‘backups’ actually translate to real recovery. Juniors who can speak this language become the bridge between ops and business.",realWorld:"A core banking outage at 10 AM on a Monday: RPO target 5 min, RTO target 30 min. DR plan is rehearsed quarterly. Incident commander declares disaster, failover begins at 10:04, service resumes at 10:27. Auditor happy; customers barely notice.",code:`// DR drill report template (partial exercise)

Exercise:     Restore CRM database to DR site
Date:         2026-04-15
Participants: DBA, Network, Security, App Owner, IT Manager
RPO target:   15 minutes
RTO target:   2 hours

Pre-checks:
  [ ] Current backup validated (timestamp + checksum)
  [ ] DR network links reachable
  [ ] DR identity and DNS ready
  [ ] Runbook version 2.3 printed and reviewed

Execution timeline:
  T+0       Declaration of exercise
  T+10 min  Backup delivered to DR storage
  T+25 min  DB restored, checksum verified
  T+40 min  App reconfigured to DR endpoints
  T+55 min  User smoke tests passed

Results:
  RPO achieved:  10 minutes (target 15)
  RTO achieved:  55 minutes (target 120)
  Issues found:  DNS TTLs too high; runbook missing a cert step
  Actions:       shorten DNS TTLs; update runbook; re-drill in Q3`,funFact:"The Bangladesh central bank’s directives and modern ICT-risk frameworks explicitly expect banks to plan, document, test, and report DR exercises. Many banks now run at least annual drills with evidence retained — a trend mirrored across global financial regulators.",quiz:[
{q:"RPO defines:",opts:["Maximum downtime","Maximum tolerable data loss in time","Number of users","Number of backups"],ans:1},
{q:"RTO defines:",opts:["Maximum tolerable downtime","Maximum data loss","Backup retention","Encryption keys"],ans:0},
{q:"Replication alone is insufficient because:",opts:["It’s slow","It replicates corruption / ransomware too, so backups are still needed for point-in-time recovery","It’s too expensive","It has no uses"],ans:1},
{q:"Tabletop exercises are:",opts:["Fake and useless","Discussion-only walkthroughs that reveal gaps cheaply","Full failovers","Random drills"],ans:1}
],challenge:"Write a one-page DR drill plan for a small fictional company: 3 apps, 1 DB, 1 file server. Include RPO, RTO, dependencies, runbook steps, roles, and success criteria.",resources:[
{type:"docs",title:"NIST SP 800-34 Contingency Planning Guide",url:"https://csrc.nist.gov/pubs/sp/800/34/r1/final",source:"NIST"},
{type:"article",title:"ISO/IEC 27031 business continuity",url:"https://www.iso.org/standard/27031",source:"ISO"},
{type:"video",title:"DR planning for SMB/Enterprise",url:"https://www.youtube.com/@LawrenceSystems",source:"Lawrence Systems"}
],eli5:"If your phone dies, how much do you mind losing (RPO) and how long can you wait before getting a new one (RTO)? DR is that question, but for a whole company — and a drill proves you know the answer.",codeWalkthrough:[
"DR drill template header","Exercise name","Date","Participants","RPO target","RTO target","Blank separator","Pre-checks section","Validate backup","DR networking","DR identity/DNS","Runbook version","Blank separator","Execution timeline header","T+0 declare","T+10 deliver backup","T+25 DB restored","T+40 app reconfigured","T+55 smoke tests","Blank separator","Results header","RPO achieved vs target","RTO achieved vs target","Issues found","Actions to close gaps"
],bugChallenge:{code:"Company has an RTO target of 1 hour for core banking, but no DR site, no runbook, and backups are on a USB drive in the same building.",hint:"Why is the stated RTO meaningless here?",answer:"Without a DR architecture, recent tested backups offsite, and a documented runbook, a 1-hour RTO is aspirational, not achievable. Fix: geographically separated DR site (cloud or second datacenter), 3-2-1 backups with immutability, dependency-mapped runbooks, at least annual drills, and monitoring that can detect failures fast."},difficulty:"intermediate",prereqs:[45]},

  {id:47,title:"From Tabletop to Real Recovery",subtitle:"How juniors contribute during outages",analogy:"A real incident is like a hospital code-blue. Nobody needs a hero; everyone needs to follow the playbook. The junior who documents, stays calm, and hands over clearly is more valuable than the one who tries to solve everything.",points:[
{t:"The incident lifecycle",d:"Detect → Declare → Contain → Recover → Verify → Close → Learn. Skipping any stage creates audit findings or repeat incidents."},
{t:"Declaration criteria",d:"A clear bar for calling an incident vs treating it as a ticket. ‘Customer-impacting’ vs ‘internal’, severity thresholds, external reporting triggers (regulators, customers, partners)."},
{t:"Roles during an incident",d:"Incident Commander (IC), Communications Lead, Subject-Matter Experts, Scribe, Executive Liaison. Juniors often start as scribes — the single best seat to learn incident command."},
{t:"Comms channels and discipline",d:"One primary channel (e.g., a dedicated Teams/Slack room). Out-of-band comms for compromised-channel scenarios. One spokesperson for external comms. No social posts from responders."},
{t:"Evidence preservation during recovery",d:"Security incidents need logs, images, and timelines. ‘Just reboot to get it working’ can destroy the evidence needed later. If in doubt, preserve before acting."},
{t:"Post-incident review (PIR)",d:"A blameless review within 1–2 weeks. Goal: timeline + root causes + systemic improvements + owners + due dates. The PIR document is how organizations actually learn."},
{t:"Communications to users",d:"Short, clear updates at regular intervals: what we know, what we’re doing, what we don’t know yet, when we’ll update next. Silence is scarier than bad news."},
{t:"Regulators and external reporting",d:"In regulated sectors, critical incidents trigger external reporting clocks (for example, an expectation of 72-hour reporting in some frameworks). Know who owns these in your org; don’t freelance the reporting."}
],whatIs:"Real recovery work involves clear roles, disciplined comms, and structured learning — not heroics. Juniors who embed these habits early get promoted into Incident Commander tracks.",realWorld:"A DNS change at 1 AM breaks authentication across a bank. Scribe (junior) captures timeline. IC declares Sev 1. Comms lead updates customers every 30 minutes. Network + IAM teams roll back the change. PIR finds a missing pre-production check step; runbook updated, automation added. Four hours to full restore; weeks of lasting improvement.",code:`// Incident response roles (concise)

Incident Commander (IC)
  - Runs the incident, makes decisions, owns timeline
  - Does NOT type commands or fix hands-on

Communications Lead
  - Owns customer/internal/exec messaging cadence
  - Drafts updates, coordinates with PR / legal if needed

SMEs (network, identity, DB, app)
  - Investigate and execute recovery steps
  - Report facts to IC; do not broadcast independently

Scribe
  - Captures timestamped facts: events, decisions, actions
  - Supports the post-incident review with clean evidence

Executive Liaison
  - Summarizes status for execs; translates technical to business
  - Shields IC from non-essential escalations`,funFact:"Google’s site reliability engineering culture popularized ‘blameless post-mortems.’ The premise: humans make mistakes; systems should be designed to survive them. Blame cultures quietly destroy transparency — and transparency is the only reliable input to learning.",quiz:[
{q:"The Incident Commander’s primary job is to:",opts:["Fix the issue alone","Run the incident, make decisions, own the timeline","Write code","Apologize to customers"],ans:1},
{q:"During a security incident, a safer first instinct is:",opts:["Reboot and tidy","Preserve evidence (logs, memory, images) before acting","Share details publicly","Delete logs"],ans:1},
{q:"Post-incident reviews should be:",opts:["Blameful","Blameless, timeline + systemic actions + owners + due dates","Optional","Private forever"],ans:1},
{q:"User communications during incidents should be:",opts:["Silent","Short, clear, honest, regular — with next update time","Exaggerated","Replaced by marketing copy"],ans:1}
],challenge:"Run a tabletop with a friend: pretend an M365 outage is underway. You are the Incident Commander; they are a senior. Practice 3 decision points and 3 customer comms updates — with timestamps.",resources:[
{type:"docs",title:"Google SRE books (free online)",url:"https://sre.google/books/",source:"Google SRE"},
{type:"docs",title:"NIST SP 800-61r2 Incident Handling",url:"https://csrc.nist.gov/pubs/sp/800/61/r2/final",source:"NIST"},
{type:"article",title:"CISA Incident Response Plan basics",url:"https://www.cisa.gov/",source:"CISA"}
],eli5:"In a real emergency, you want teammates who listen, take notes, update people calmly, and don’t panic. That’s exactly what a great junior looks like in an outage — priceless.",codeWalkthrough:[
"Incident roles block","Incident Commander duties","Role boundaries for IC","Blank separator","Communications Lead duties","Coordination with PR/legal","Blank separator","SMEs header","Investigate and execute","Report to IC, don’t broadcast solo","Blank separator","Scribe duties","Capture timestamped evidence","Support PIR","Blank separator","Executive Liaison duties","Translate status to business","Shield IC from non-essentials"
],bugChallenge:{code:"During a Sev 1 outage, the junior posts: 'We’re getting hacked! DM me for details' on LinkedIn.",hint:"Which three rules does this break, and what could it cost?",answer:"(1) Only designated spokesperson communicates externally, (2) Never speculate publicly during an incident, (3) Preserve confidentiality. Consequences: customer panic, regulatory breach, attacker benefit (they read too), personal disciplinary action. Right behavior: funnel all comms through the Communications Lead; save reflections for a blameless PIR later."},difficulty:"advanced",prereqs:[45,46]},

  {id:48,title:"SQL for Operators",subtitle:"Just enough database skill to support apps",analogy:"SQL for operators is like being able to read lab reports even if you’re not a doctor. You don’t prescribe treatment, but you can spot a broken test, find the patient record, and flag anything unusual.",points:[
{t:"Relational basics",d:"A database has tables (rows/columns). Tables relate via keys (primary key, foreign key). Queries retrieve, filter, aggregate. You don’t need math — just clear logic."},
{t:"SELECT, WHERE, ORDER, LIMIT",d:"SELECT columns FROM table WHERE condition ORDER BY col LIMIT n. Use LIMIT/TOP to avoid pulling millions of rows. Always add WHERE before you think about ORDER."},
{t:"JOINs — the bread and butter",d:"INNER JOIN: rows matching both tables. LEFT JOIN: all rows from the left, matching from the right (NULLs for unmatched). Practice INNER + LEFT; those cover most reporting needs.",code:"-- basic customer + orders\nSELECT c.id, c.name, o.id AS order_id, o.amount\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id\nWHERE c.country = 'BD'\nORDER BY c.name\nLIMIT 100;"},
{t:"Aggregation: COUNT, SUM, AVG, GROUP BY",d:"Great for quick ops reports: rows per status, total per day, average per user. GROUP BY columns that are not aggregated; use HAVING to filter after aggregation."},
{t:"Read-only mindset",d:"Juniors should default to read-only. DELETE, UPDATE, ALTER, DROP are dangerous. Run them only with explicit approval, in a transaction, with a WHERE clause, ideally in a dev/test first."},
{t:"Indexes and why queries are slow",d:"Indexes speed up reads but cost on writes. ‘Full table scan’ on a large table = slow. Suspect missing indexes when the same query is slow in prod but fast in dev."},
{t:"Explain plans (awareness)",d:"EXPLAIN tells you how the database plans to execute your query. Juniors should recognize ‘Seq Scan’ / ‘Index Scan’ in output; seniors tune."},
{t:"Common operator queries",d:"Find a user by email, count active sessions, list failed jobs last 24h, find orphaned rows, check table sizes, top CPU queries, long-running sessions."}
],whatIs:"Operator-grade SQL is enough to support applications, pull reports, and investigate incidents — without becoming a DBA. Any DB-backed app you support will benefit from your ability to read its state.",realWorld:"App team says ‘users see stale data.’ You run a SELECT with timestamps on the main table, discover a batch job hasn’t committed since 2 AM. You check the job, find the dependency was missing, escalate with evidence. App team has what they need in 15 minutes.",code:`-- everyday operator queries

-- user lookup
SELECT id, email, status, last_login
FROM users
WHERE email = 'alice@contoso.com';

-- active sessions today
SELECT COUNT(*) AS active_today
FROM sessions
WHERE ended_at IS NULL
  AND started_at >= CURRENT_DATE;

-- failed jobs last 24h
SELECT job_name, status, started_at, error
FROM job_runs
WHERE status = 'FAILED'
  AND started_at >= NOW() - INTERVAL '24 hours'
ORDER BY started_at DESC;

-- orphaned rows
SELECT o.id, o.customer_id
FROM orders o
LEFT JOIN customers c ON c.id = o.customer_id
WHERE c.id IS NULL;

-- long-running sessions (PostgreSQL example)
SELECT pid, usename, state, query, now() - xact_start AS duration
FROM pg_stat_activity
WHERE state <> 'idle'
ORDER BY duration DESC
LIMIT 20;`,funFact:"Most senior IT engineers who are fluent in ops SQL learned it informally by reading production incidents. Once you can read one schema and write two queries, the rest becomes practice and confidence.",quiz:[
{q:"Which clause filters rows BEFORE aggregation?",opts:["HAVING","WHERE","ORDER BY","LIMIT"],ans:1},
{q:"A LEFT JOIN returns:",opts:["Only matching rows","All rows from the left + matching from right, NULLs where unmatched","Random rows","Only right-side rows"],ans:1},
{q:"Why is DROP TABLE dangerous?",opts:["It’s decorative","It permanently removes the table (and data) if not protected or backed up","It’s the same as SELECT","It adds indexes"],ans:1},
{q:"A query is slow in prod but fast in dev. Likely cause?",opts:["Different fonts","Missing indexes, different data volume, or different plan","Mouse DPI","Monitor size"],ans:1}
],challenge:"Install PostgreSQL or SQL Server Express locally. Import a sample dataset (AdventureWorks or sakila). Write 5 SELECTs: user lookup, count per day, TOP 10 by amount, LEFT JOIN for orphaned rows, and a HAVING clause.",resources:[
{type:"docs",title:"PostgreSQL tutorial",url:"https://www.postgresql.org/docs/current/tutorial.html",source:"PostgreSQL"},
{type:"docs",title:"SQL Server documentation",url:"https://learn.microsoft.com/sql/",source:"Microsoft Learn"},
{type:"video",title:"SQL for Data Analysis (free)",url:"https://www.youtube.com/@freecodecamp",source:"freeCodeCamp"}
],eli5:"SQL is how you ask the database polite questions: ‘give me all users named Alice who signed up this week.’ A good operator asks good questions and doesn’t accidentally erase the answers.",codeWalkthrough:[
"Everyday operator queries","User lookup query","Active sessions today","Failed jobs 24h","Orphaned rows using LEFT JOIN","Long-running sessions example","Ordering and limiting results"
],bugChallenge:{code:"Junior runs in production:\n  UPDATE users SET status = 'disabled';",hint:"What crucial clause is missing?",answer:"WHERE. This disables EVERY user in the table. Always wrap dangerous writes in a transaction, test in dev first, and verify the WHERE clause by running a SELECT with the same WHERE first. Some shops require a second-person review for direct production writes."},difficulty:"beginner",prereqs:[27]},

  {id:49,title:"Database Services, Users & Backups",subtitle:"Operational DBA-lite tasks",analogy:"DBA-lite is caretaking a library. You don’t write the books, but you know where each one lives, who is allowed to borrow, and how to reopen the library after a flood.",points:[
{t:"Service status and restarts",d:"PostgreSQL: systemctl status postgresql. SQL Server: services.msc / SQL Server Configuration Manager. Never kill -9 a DB — use the graceful restart. Document every restart."},
{t:"Connections and port checks",d:"Know the default ports (PostgreSQL 5432, SQL Server 1433, MySQL 3306, Oracle 1521). Test reachability with Test-NetConnection / telnet / psql from the app host — not only from the DBA laptop."},
{t:"Users, logins, roles, grants",d:"Create logins/users with least privilege. GRANT only the required permissions. App users usually don’t need db_owner. Separate admin identity from app identity; rotate and vault credentials."},
{t:"Backups and restores",d:"Know how the DB is backed up (full/diff/log) and where. Practice restore to a test server. ‘It’s backed up’ is a claim; ‘I restored last Tuesday successfully’ is evidence."},
{t:"Point-in-time recovery",d:"Transaction-log backups enable recovery to a specific minute/second. Critical for financial data where losing the last 4 hours is unacceptable."},
{t:"Maintenance jobs",d:"Index rebuilds/reorgs, statistics updates, backup jobs, integrity checks. In many shops, the DBA team owns them; you must recognize failure alerts."},
{t:"Replication and HA awareness",d:"Always-On Availability Groups (SQL Server), streaming replication (PostgreSQL), Multi-AZ RDS. You may not configure it, but you should know whether your app’s DB is HA and what failover means."},
{t:"Security and encryption",d:"TDE (Transparent Data Encryption), SSL/TLS on connections, strong passwords, no sample data in prod, DB audit logging. Table stakes in regulated industries."}
],whatIs:"Database admin-lite is the survival kit for supporting DB-backed apps: services, users, backups, simple queries, and recognizing HA/encryption layers without managing them from scratch.",realWorld:"App goes down at 7 AM. You check DB service status: OK. Connections: open. Query recent logs: many deadlocks overnight. You note this in the ticket, escalate with evidence to the DBA team. Without your triage, the DBA team would have started from zero.",code:`-- some operator DB snippets

-- PostgreSQL: show long locks
SELECT pid, usename, application_name, state,
       now() - xact_start AS duration, query
FROM pg_stat_activity
WHERE state <> 'idle'
ORDER BY duration DESC NULLS LAST
LIMIT 20;

-- PostgreSQL: size of largest tables
SELECT relname, pg_size_pretty(pg_total_relation_size(relid)) AS size
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC
LIMIT 10;

-- SQL Server: recent error log (T-SQL)
EXEC xp_readerrorlog 0, 1, NULL, NULL, NULL, NULL, 'DESC';

-- SQL Server: who’s connected right now
SELECT session_id, login_name, host_name, program_name, status, last_request_end_time
FROM sys.dm_exec_sessions
WHERE is_user_process = 1
ORDER BY last_request_end_time DESC;`,funFact:"‘DBA-lite’ skills (service status, simple queries, basic backup/restore understanding) often earn a junior a huge reputation boost — because most teams are desperate for someone who can triage DB issues without escalating blindly.",quiz:[
{q:"A safer default privilege for application DB users is:",opts:["db_owner","Least privilege (only what the app needs)","sa","SYSDBA"],ans:1},
{q:"Point-in-time recovery depends on:",opts:["Screenshots","Regular transaction-log backups combined with full backups","Weekly dumps only","DNS"],ans:1},
{q:"Default port for Microsoft SQL Server:",opts:["1521","1433","5432","3306"],ans:1},
{q:"Before a destructive DB change in production, a junior should:",opts:["Just do it","Verify backup, test in dev/test, wrap in a transaction, and get change approval","Disable logging","Share the password"],ans:1}
],challenge:"Install SQL Server Express or PostgreSQL. Create a user with read-only rights on a specific schema. Take a backup, restore to a new database, prove it by counting rows. Document your runbook.",resources:[
{type:"docs",title:"PostgreSQL docs",url:"https://www.postgresql.org/docs/",source:"PostgreSQL"},
{type:"docs",title:"SQL Server Express",url:"https://www.microsoft.com/sql-server/sql-server-downloads",source:"Microsoft"},
{type:"docs",title:"MySQL documentation",url:"https://dev.mysql.com/doc/",source:"MySQL"}
],eli5:"The database is the library. You’re the helpful front-desk person: you don’t write books, but you check if the library is open, who’s allowed in, and whether the backup shelves have today’s copies.",codeWalkthrough:[
"Operator DB snippets","Postgres long locks","Blank separator","Postgres biggest tables","Blank separator","SQL Server recent errorlog","Blank separator","SQL Server current sessions"
],bugChallenge:{code:"App outage. Junior restarts the DB service every time. Alerts are silenced to reduce noise. Nobody reads the logs.",hint:"What disciplined approach turns this into real support?",answer:"Stop silencing. Before restart: capture service status, recent logs, connection stats, active queries. After restart: log timeline, reason, outcome. Escalate to DBA team with evidence. Patterns emerge quickly — and the real fix (indexing, tuning, capacity) stops being hidden by endless restarts."},difficulty:"intermediate",prereqs:[48]},

  {id:50,title:"Application Dependency Mapping",subtitle:"Apps fail in layers, not magic",analogy:"Every app is a kitchen line: front-of-house takes the order, the kitchen cooks, the dishwasher keeps up, the fridge holds ingredients. If the fridge is empty, the customer thinks ‘the restaurant is broken’ — but you find the real culprit by walking the line.",points:[
{t:"The 5-layer mental model",d:"User → app frontend → app backend/API → supporting services (cache, queue, DB, file store, identity) → infra (OS, network, cloud). A failure usually lives in one layer; your job is to find it."},
{t:"Health endpoints",d:"Most apps expose /health or /status. Use them. Also ping DBs, hit cache, check queues, verify identity providers separately. A ‘green frontend’ can hide a red dependency."},
{t:"The right first 5 questions",d:"(1) Who is affected (one user, many, all)? (2) When did it start? (3) What changed? (4) Which dependency is failing? (5) What’s the error code / trace ID? Good answers prevent wasted hours."},
{t:"Logs, metrics, traces",d:"Logs: what happened. Metrics: numbers over time. Traces: a request’s journey across services. All three together beat any one alone."},
{t:"Dependency diagrams",d:"A one-page diagram for each app showing its dependencies saves the world during outages. Label external parties, identity providers, DNS, storage, secrets stores."},
{t:"Secrets and certificates",d:"Apps fail spectacularly when a secret rotates unexpectedly or a certificate expires. Know where they live, their renewal cadence, and their owner. ‘Certs expired at midnight’ has caused many global outages."},
{t:"Tenants, regions, zones",d:"Many SaaS apps have multi-tenant, multi-region architectures. An outage may affect only your tenant or only one region. Before declaring ‘it’s broken,’ ask scope."},
{t:"Talking across teams",d:"Junior IT is often the bridge between end users and multiple specialist teams (app, DB, network, cloud, vendor). Clear dependency language makes you the go-to person."}
],whatIs:"App dependency mapping is the operational discipline that turns ‘app is slow’ into ‘service X is slow because dependency Y timed out.’ Once you think this way, every outage becomes solvable, not mystical.",realWorld:"A CRM page loads but saves fail. Dependency map shows CRM → API → identity → DB → storage. Identity is fine. DB healthy. Storage returns 503s for some regions — a cloud provider incident. You communicate, wait, validate recovery. Zero wasted escalations.",code:`// Dependency-mapping template (per app)

App name:       BillingPortal
Owner team:     Finance Systems
Criticality:    Tier 1

External users: Customers via https://billing.contoso.com
Internal users: Finance ops team

Frontend:       React SPA on CDN + WAF
Backend:        REST API (container) in region A, zone 1+2

Dependencies (and failure signal):
  - Identity:       Entra (OIDC)                    -> login fails
  - DB:             PostgreSQL HA cluster           -> 500 on save
  - Cache:          Redis                          -> slow reads
  - Queue:          RabbitMQ                       -> delayed events
  - Storage:        S3 bucket for invoices         -> download fails
  - Secrets:        Key Vault                      -> startup crash
  - Email:          SMTP gateway                   -> no notifications
  - External:       Tax API                        -> partial failures

Monitors:
  - /health endpoint per service
  - synthetic user journey (login -> save -> download)
  - logs + metrics + traces with correlation IDs
  - on-call runbook for each failure mode`,funFact:"In many severe incidents, the ‘failure’ turns out to be an expired TLS certificate somewhere quiet, like an internal API or a DNS-validated domain. Certificate observability (renewal alerts + inventory) pays for itself the first time it saves a Sunday night.",quiz:[
{q:"An app’s frontend is green but saves fail. Most likely layer to check next?",opts:["DNS","Backend + its dependencies (DB, cache, queue, storage)","CPU of the user’s laptop","Keyboard"],ans:1},
{q:"Correlation IDs in logs help because:",opts:["They look cool","They tie one user request across multiple services and logs","They compress data","They encrypt data"],ans:1},
{q:"A one-page dependency diagram is valuable because:",opts:["It wastes paper","It accelerates triage and cross-team comms during outages","It replaces monitoring","It replaces documentation"],ans:1},
{q:"Expired TLS certs usually cause:",opts:["Nothing","Sudden and widespread failures at a specific timestamp","Only UI glitches","Faster logins"],ans:1}
],challenge:"Pick any app you use daily (email, bank app, streaming). Draw its likely dependency map: frontend, backend, identity, DB, cache, storage, external APIs. Mark how each failure would feel to a user.",resources:[
{type:"docs",title:"Observability basics (Honeycomb)",url:"https://www.honeycomb.io/blog/what-is-observability",source:"Honeycomb"},
{type:"docs",title:"OpenTelemetry intro",url:"https://opentelemetry.io/docs/",source:"OpenTelemetry"},
{type:"video",title:"Tracing and observability talks",url:"https://www.youtube.com/results?search_query=observability+introduction",source:"YouTube search"}
],eli5:"Every big app is a team of smaller helpers. When something breaks, don’t blame the whole team — find which helper fell down, then you can fix it fast.",codeWalkthrough:[
"Dependency template","App name","Owner team","Criticality tier","Blank separator","External users","Internal users","Blank separator","Frontend description","Backend description","Blank separator","Dependencies list","Identity failure signal","DB failure signal","Cache failure signal","Queue failure signal","Storage failure signal","Secrets failure signal","Email failure signal","External API failure","Blank separator","Monitors","Per-service health endpoint","Synthetic user journey","Logs + metrics + traces + correlation IDs","On-call runbook per failure mode"
],bugChallenge:{code:"App outage ticket: 'Everything is broken, please fix!' Junior tells the whole company via email: 'CRM down, we don’t know yet, working on it.'",hint:"Which two pieces of discipline are missing?",answer:"(1) Scope first — identify whether this affects all users, one region, or one tenant before announcing enterprise-wide. (2) Use structured comms — follow the incident comms process (Comms Lead, channel, update cadence) rather than an unreviewed company-wide email. Calm, accurate, timed updates beat panic."},difficulty:"intermediate",prereqs:[38,39,40,41,42,43,48,49]},

  {id:51,title:"Monitoring & Alert Quality",subtitle:"Know what to watch, not just what to install",analogy:"Monitoring without tuning is like a hospital alarm that beeps for every patient blink. Doctors ignore it, and the one real emergency gets lost in the noise. Good monitoring beeps only when it matters.",points:[
{t:"The MELT model — Metrics, Events, Logs, Traces",d:"Metrics: time-series numbers (CPU, latency). Events: discrete occurrences (deploy, incident). Logs: text records. Traces: a request’s path. Each answers a different question; mature ops blends all four."},
{t:"SLI, SLO, SLA",d:"SLI: what we measure (e.g., 99.9% of requests under 500ms). SLO: internal target. SLA: external contractual promise with penalties. Business cares about SLAs; teams work from SLOs."},
{t:"Golden signals",d:"Latency, traffic, errors, saturation. For every critical service, monitor all four. It’s a simple, effective baseline that catches most real problems."},
{t:"Actionable alerts",d:"Every alert must have: a human explanation, a runbook link, and a clear action. Non-actionable alerts train humans to ignore alerts — the worst failure mode of all."},
{t:"Thresholds and noise",d:"Avoid static thresholds for volatile metrics. Use percentiles (p95/p99 latency), windows (last 5 min), and comparisons (week over week). Alert fatigue kills on-call teams."},
{t:"Common open-source tools",d:"Prometheus + Grafana (metrics + dashboards), Elasticsearch/Loki (logs), Tempo/Jaeger (traces), Alertmanager (routing). Commercial: Datadog, New Relic, Dynatrace."},
{t:"Synthetic and real-user monitoring",d:"Synthetic: scripted check from outside (‘every 1 minute, log in and search’). RUM: real user data. Both detect problems users feel before they file a ticket."},
{t:"On-call hygiene",d:"Runbooks per alert. Escalation paths. Shift handovers. Post-incident review after every page. Rotate calmly — burnt-out on-call is unsafe on-call."}
],whatIs:"Monitoring & alerting is how you find out about problems before users do — and not drown in false alarms. Good monitoring is a product, not a tool install.",realWorld:"A payments service starts timing out at p99. Monitoring catches it before customers tweet. An alert with a runbook link tells the on-call to check the DB connection pool, which is near capacity. Scale the pool, incident avoided, post-incident review schedules a permanent fix.",code:`// Alert design template

Alert name:   api_p99_latency_high
Severity:     Warning
Metric:       histogram_quantile(0.99, ...)
Window:       last 5 min
Condition:    p99 > 500ms for 10 min
Runbook:      https://runbooks.contoso.com/api-latency
Dashboards:   https://grafana.contoso.com/d/api-overview
Owner:        Team-Payments
On-call:      payments-oncall
Suppressions: during maintenance windows tagged "payments"
Notes:
  - Check DB connection pool, cache hit ratio, upstream latencies.
  - Roll back recent deploys if correlated.

// Golden signals for every critical service
  Latency, Traffic, Errors, Saturation.

// SLO example
  99.5% of API requests under 500ms over a rolling 28-day window.
  Error budget = 0.5% -> budget consumption triggers conversations.`,funFact:"Google’s SRE book is largely responsible for popularizing SLOs and error budgets worldwide. Many modern on-call cultures are downstream of a single book that said ‘stop celebrating heroes; build better alerts.’",quiz:[
{q:"The four ‘golden signals’ include:",opts:["Only CPU","Latency, traffic, errors, saturation","Only disk","Only user complaints"],ans:1},
{q:"A non-actionable alert should:",opts:["Stay forever","Be fixed (runbook + action) or removed — otherwise it teaches humans to ignore alerts","Be escalated immediately","Be silenced permanently with no change"],ans:1},
{q:"SLO is to SLA as:",opts:["Noise to music","Internal target to externally contracted promise","Backup to replication","CPU to RAM"],ans:1},
{q:"Synthetic monitoring is:",opts:["Made-up data","Scripted external checks that simulate real user journeys","Replacing logs","Replacing tracing"],ans:1}
],challenge:"On a test service, define 1 latency SLO and 1 error-rate SLO. Build a Grafana dashboard showing them. Write one actionable alert for each, with a runbook link (even if placeholder).",resources:[
{type:"docs",title:"Google SRE workbook (free)",url:"https://sre.google/workbook/table-of-contents/",source:"Google SRE"},
{type:"docs",title:"Prometheus docs",url:"https://prometheus.io/docs/",source:"Prometheus"},
{type:"docs",title:"Grafana docs",url:"https://grafana.com/docs/",source:"Grafana"}
],eli5:"Alarms should only ring when something real is wrong. If the alarm cries wolf every hour, everyone stops listening — and then the real wolf eats the sheep.",codeWalkthrough:[
"Alert design template","Alert name","Severity","Metric definition","Evaluation window","Condition","Runbook URL","Dashboards URL","Owner","On-call routing","Suppression windows","Notes for first-responders","Blank separator","Golden signals reminder","Blank separator","SLO example","Error budget description"
],bugChallenge:{code:"On-call person mutes ‘Disk Warning’ alert every week for 6 months. Eventually the disk fills and the app crashes at 3 AM.",hint:"What is the real failure here — tool or process?",answer:"Process. Muting a repeating alert without fixing it teaches the team to ignore reality. Fix: either tune the alert (threshold, window), add cleanup automation, or grow capacity. Every chronic alert needs a review + ticketed remediation — not permanent snoozing."},difficulty:"intermediate",prereqs:[43,48,49,50]},

  {id:52,title:"Month-End & Business-Critical Support",subtitle:"Why timing changes severity",analogy:"Month-end in a bank is like kitchen rush at a restaurant — everything must run perfectly in a short window. A stumble in the middle of the morning is a bad ticket; a stumble at month-end close is a career-defining event.",points:[
{t:"Business calendars are operational calendars",d:"Know the heavy days: month-end, quarter-end, year-end, payroll day, tax filing, auction day, big customer onboarding windows. Freeze non-essential changes around these."},
{t:"Change freeze windows",d:"Many regulated shops freeze non-emergency changes during close windows. Break the freeze only with explicit senior/CIO approval and documented rollback. Calm discipline beats heroics."},
{t:"Job failure impact rises with timing",d:"A batch that fails at 10 AM is a ticket. The same batch failing at month-end close is a regulatory/reporting incident. Escalation paths, comms, and documentation must match the timing."},
{t:"Capacity planning around peaks",d:"Predictable spikes deserve predictable capacity. Add headroom (scaled-up VMs, extra connections, increased monitoring) before the peak — not during."},
{t:"Comms to business stakeholders",d:"Stakeholders during close don’t want excuses. They want: impact, ETA, mitigation, rollback, next update time. Use simple sentences. Avoid jargon. Repeat updates at promised intervals."},
{t:"Post-close review",d:"After each heavy period, review what tickets fired, what almost failed, what depended on a single person. Lock these lessons into the next calendar event as pre-emptive checks."},
{t:"Bank-specific pressure points",d:"End-of-day processes, EOD cutoff, reconciliation, interest runs, statement generation, regulatory reporting (XBRL or local equivalents), SWIFT cutoff times, ATM reconciliation. You don’t have to run these — you must not break them."},
{t:"Being the calm professional",d:"Under pressure, talk slower, write shorter sentences, confirm every action before executing, and double-check destructive commands with a second set of eyes. That calmness is what gets you to senior roles fast."}
],whatIs:"Business-critical support is where technical skill meets business context. The same issue can be minor or catastrophic depending on timing, customer impact, and regulatory obligations — and mature juniors feel the difference.",realWorld:"A database job fails at 9 PM on the last day of the month. Junior recognizes the timing, pages the DBA + app owner immediately, pulls the change log for the last 48h, finds a recent index rebuild consuming locks. Escalates with evidence. DBA rolls back, job reruns, month-end closes on time.",code:`// Business-critical change pre-check

Before executing ANY change during sensitive windows:

[ ] Is this window a change freeze (month-end, payroll, EOD)?
[ ] Do I have explicit approval from change manager + business owner?
[ ] Is the risk+impact documented, with a rollback plan?
[ ] Are affected systems monitored with on-call ready?
[ ] Has someone else (maker-checker) reviewed the command?
[ ] Have I confirmed backups / snapshots / safety nets?
[ ] Is there a pre-change smoke test to prove the baseline?
[ ] Do I have a pre-written comms update with next-update time?
[ ] Do I know exactly when to abort and rollback?
[ ] Can I prove the change succeeded or revert cleanly?`,funFact:"In bank operations, a handful of batch jobs — if they fail at the wrong time — can trigger regulatory reports, customer refunds, and executive phone calls. Knowing which jobs those are is often the difference between ‘IT support’ and ‘trusted IT partner.’",quiz:[
{q:"Why does timing change severity?",opts:["It doesn’t","Business windows amplify customer, financial, and regulatory impact","Only on weekends","Never during daytime"],ans:1},
{q:"During a change freeze, you should:",opts:["Do whatever is faster","Avoid non-emergency changes; require explicit approval with rollback for any exception","Skip approvals","Disable logging"],ans:1},
{q:"Good stakeholder comms during an outage:",opts:["Long jargon-heavy emails","Short updates: impact, ETA, mitigation, next update time","Silence","Only verbal calls"],ans:1},
{q:"Post-close reviews help because:",opts:["They waste time","They lock lessons into the next calendar event as pre-emptive checks","They replace backups","They replace monitoring"],ans:1}
],challenge:"List the 10 heaviest ‘critical’ days in your country or industry (payroll, tax filing, year-end, exam result day, election day, etc.). For each, write one operational precaution you’d take.",resources:[
{type:"docs",title:"ITIL 4 overview",url:"https://www.axelos.com/certifications/itil-service-management",source:"AXELOS"},
{type:"docs",title:"ISACA risk management",url:"https://www.isaca.org/",source:"ISACA"},
{type:"article",title:"Change freeze best practices",url:"https://en.wikipedia.org/wiki/Change_management_(ITSM)",source:"Wikipedia"}
],eli5:"Doing a risky thing on a normal day is brave. Doing the same risky thing on the busiest day of the year is reckless. Great ops teams pick their moments.",codeWalkthrough:[
"Pre-change checklist","Freeze window check","Approval check","Risk/impact + rollback documented","Monitoring and on-call readiness","Maker-checker review","Safety nets verified","Pre-change smoke test","Comms template with next-update time","Abort criteria","Post-change verification or rollback"
],bugChallenge:{code:"On month-end evening, junior runs a long-locked maintenance query on the finance database during peak close to ‘tidy things up’.",hint:"What was the rule broken, and what should have happened instead?",answer:"Never run maintenance during a known business peak without formal approval and rollback. Right path: raise a scheduled change AFTER the freeze window, with approvals, tested rollback, and maker-checker review. Document why the maintenance was needed and plan it for a safer window."},difficulty:"advanced",prereqs:[48,49,50,51]},

  {id:53,title:"Incident, Problem, Change & Release",subtitle:"The process spine of enterprise IT",analogy:"ITIL disciplines are like the rules of a hospital: incidents are emergency treatment, problems are root-cause research, changes are scheduled surgery, releases are delivering new procedures to the floor. Mix them up and patients suffer.",points:[
{t:"Incident — restore service fast",d:"The goal of incident management is to restore service as quickly as possible — even with a workaround. Not to find the root cause. Not to change the architecture. Those come later."},
{t:"Problem — find and fix root causes",d:"Problem management investigates why incidents happen. Outputs: known errors, workarounds, permanent fixes. Problems are longer-lived than incidents and often span multiple tickets."},
{t:"Change — controlled, risk-managed",d:"Change management ensures updates (config, patch, new release, infra) are approved, risk-assessed, scheduled, executed, verified, and documented. Prevents well-intentioned outages."},
{t:"Request — ordinary, pre-approved asks",d:"‘I need access to this folder’ or ‘please provision this VM from the catalog.’ Requests are routine and pre-approved — not changes. Mixing them up clogs CAB meetings."},
{t:"Release — delivering change safely",d:"Release management groups related changes into a deliverable, tests, rolls out in stages, and communicates. Common in software-heavy shops; equally valid for infrastructure."},
{t:"Severity vs priority (again)",d:"Severity = technical impact. Priority = business impact. A single global outage can be Sev 2 technically but Priority 1 business-wise. Always answer both."},
{t:"CAB — Change Advisory Board",d:"A group that reviews and approves changes in mature orgs. Standard changes (pre-approved, low-risk) may skip CAB. Emergency changes use an accelerated path. Normal changes go through CAB."},
{t:"Tooling",d:"ServiceNow, Jira Service Management, Zendesk, Freshservice, ManageEngine — different products, same underlying ITIL disciplines. Tools change; the thinking remains."}
],whatIs:"ITIL-aligned service management is the operating model of most enterprise IT organizations. Knowing the vocabulary, disciplines, and safe patterns makes you immediately more hireable and promotable.",realWorld:"A printer ticket (incident) is resolved in 10 minutes with a spooler restart. Over a month, 40 similar tickets trigger a problem record. Root cause: an outdated print driver on the central server. A planned change fixes it during a maintenance window. Ticket volume drops 80%.",code:`// ITIL flow (minimal)

User reports issue
      |
      v
INCIDENT ticket  -> restore service fast (workaround OK)
      |  (many repeats?)
      v
PROBLEM ticket   -> root cause analysis, known error
      |
      v
CHANGE ticket    -> controlled fix (CAB approval, rollback plan)
      |
      v
RELEASE          -> deployment package / rollout (if software)
      |
      v
POST-IMPLEMENTATION REVIEW  -> verify, update KB + CMDB

Severity = technical impact
Priority = business impact`,funFact:"In practice, ITIL maturity correlates strongly with employee happiness. Shops with clean incident/problem/change flows spend less time firefighting and more time improving — the difference is cultural, not magical.",quiz:[
{q:"Incident management primarily aims to:",opts:["Find root cause","Restore service quickly (even via workaround)","Increase privileged access","Replace monitoring"],ans:1},
{q:"Which discipline targets root causes?",opts:["Incident","Problem","Request","Release"],ans:1},
{q:"A pre-approved, routine ‘please set up this standard VM’ is best classified as:",opts:["Emergency change","Request (from catalog)","Problem","Major incident"],ans:1},
{q:"CAB is:",opts:["Computer-Aided Backup","Change Advisory Board that reviews/approves changes","A type of cable","A certification"],ans:1}
],challenge:"Take your last 5 IT tickets (real or simulated) and classify each as incident, problem, change, request, or release. Justify each classification in one sentence.",resources:[
{type:"docs",title:"ITIL 4 Foundation",url:"https://www.axelos.com/certifications/itil-service-management/itil-4-foundation",source:"AXELOS"},
{type:"docs",title:"ServiceNow Community",url:"https://www.servicenow.com/community/",source:"ServiceNow"},
{type:"docs",title:"Jira Service Management",url:"https://www.atlassian.com/software/jira/service-management",source:"Atlassian"}
],eli5:"Incident: put out the fire. Problem: find what started it. Change: build a better fireproof wall. Release: open the new wall carefully to real users. Get the order wrong and you burn more stuff.",codeWalkthrough:[
"ITIL flow diagram","User report","Incident — restore fast","Repeats promote to problem","Problem — root cause","Change — controlled fix","Release — delivery packaging","Post-implementation review","Blank separator","Severity vs priority reminder"
],bugChallenge:{code:"Every ticket, regardless of type, is logged as a ‘change request’ requiring CAB approval. Users wait days for password resets.",hint:"What happens to the value of CAB approvals in this setup?",answer:"CAB loses meaning — important changes drown in noise. Fix: separate requests (routine, from catalog) from changes (risk-managed). Create standard changes (pre-approved). Keep normal changes for CAB, emergency changes for fast paths. Users get fast service; risk is still managed where it matters."},difficulty:"beginner",prereqs:[10,11]},

  {id:54,title:"Ticket Quality, SLA & Shift Handover",subtitle:"What operations teams judge every day",analogy:"A good handover is a relay baton that fits perfectly into the next runner’s hand. A bad handover is tossing the baton behind you and hoping.",points:[
{t:"Severity vs priority (applied)",d:"Severity from impact + urgency. A CEO’s critical issue may be high priority even at low technical severity. Match your response to the business pain, not only the technical symptom."},
{t:"Ticket hygiene at close",d:"Symptom (user words), Environment, Steps taken, Evidence, Root cause (or suspected), Action, Validation, Follow-up, Time. If a stranger reads it, they understand in 60 seconds."},
{t:"Regular updates for open tickets",d:"Even ‘no update yet’ is an update. SLAs often measure response, not resolution. Silence looks like neglect. Set a cadence and meet it."},
{t:"Handover checklist",d:"Open tickets with status, priority, and next action. Pending changes in progress. Active incidents with IC + contact. Systems currently under watch. Pending approvals. Known customer hotspots. Anything in flight during the window."},
{t:"Knowledge base updates",d:"After tricky resolutions, spend 10 minutes writing a KB entry. Link it from the ticket. Future you (and your replacement) pay dividends in saved hours."},
{t:"Escalation discipline",d:"Escalate with: current state, what you tried, what you ruled out, hypothesis, what you need, links to logs. ‘Please help’ is not an escalation."},
{t:"CMDB hygiene (briefly)",d:"If your org has a CMDB, keep asset/service relationships current. Changes, new systems, and retirements should update the CMDB. ‘We don’t know what depends on this’ is the worst thing to hear during an outage."},
{t:"Personal metrics to track quietly",d:"Your own: avg resolution time, % SLA met, first-time fix rate, number of KB articles written, mentorship moments. Be the kind of junior seniors notice."}
],whatIs:"Ticket quality, SLA compliance, handovers, and KB updates are the ‘meta-skills’ of enterprise IT support. They’re unsexy. They’re exactly what gets you trusted with bigger things.",realWorld:"Night shift hands over 6 tickets: 2 high-priority incidents, 3 routine, 1 suspected security event. Clear next-action for each. Morning shift lead reads handover for 3 minutes, knows exactly where to start. No tickets stall at shift boundaries.",code:`// Shift handover template (one page)

Date/Time:      2026-04-20 06:00 local
Outgoing:       Alice (Tier 1), Bob (Tier 2)
Incoming:       Chen, Priya

Active incidents:
  - INC-1284 (Sev 2)  M365 sign-in issues in APAC
      IC: Senior-oncall; affected: ~500 users
      Next action: await Microsoft service update at 06:30
      Comms cadence: every 30 min; last update 05:50

Pending changes:
  - CHG-0423 patch window 22:00-02:00 tonight
      Owner: Server-team; rollback tested; comms done

Open high-priority tickets:
  - #4421  payroll batch failed; retry at 07:30 scheduled
  - #4432  exec laptop failing BitLocker PIN

Watch items (no alert yet):
  - DB01 CPU rising since 04:00
  - Branch SIT-03 intermittent Wi-Fi reports

Handovers closed:
  - INC-1278 DNS outage — resolved 04:15, KB-0076 updated
  - CHG-0419 firewall rule deployed, verified`,funFact:"Many of the senior hires in enterprise IT teams were first noticed for one boring habit: they always wrote clear tickets and kept their handovers tidy. Technical skill opens the door; documentation habits walk you through it.",quiz:[
{q:"Even when you have no new info on an open ticket, you should:",opts:["Stay silent","Post a short ‘no update yet, next update at HH:MM’","Close and reopen","Escalate angrily"],ans:1},
{q:"A good escalation note contains:",opts:["‘Please fix’","Current state, tried steps, ruled-out items, hypothesis, what you need","A single screenshot","An emoji storm"],ans:1},
{q:"Handovers should include:",opts:["Jokes only","Open incidents, pending changes, watch items, next actions","Encrypted text","Personal opinions"],ans:1},
{q:"KB articles are most valuable when:",opts:["Nobody writes them","They’re written fresh after resolution and linked from tickets","They’re kept secret","They use only emoji"],ans:1}
],challenge:"Design your own shift-handover template and use it for a week of self-tracking (even a personal to-do list). Share it with a peer for feedback.",resources:[
{type:"docs",title:"ITIL 4 service desk guidance",url:"https://www.axelos.com/certifications/itil-service-management/itil-4-foundation",source:"AXELOS"},
{type:"video",title:"Writing great tickets",url:"https://www.youtube.com/results?search_query=writing+great+it+tickets",source:"YouTube search"},
{type:"article",title:"Shift-handover research (healthcare, IT adaptations)",url:"https://en.wikipedia.org/wiki/Handover",source:"Wikipedia"}
],eli5:"Good support is 50% fixing things and 50% writing clearly about what you fixed — so the next person, the next shift, and the auditor can all understand you.",codeWalkthrough:[
"Handover template","Date/time","Outgoing staff","Incoming staff","Active incidents section","Specific incident details","Pending changes section","Change details","Open high-priority tickets","Ticket lines","Watch items","Notable metric trends","Closed handovers","Resolved items and KB links"
],bugChallenge:{code:"Ticket closure note (actual): ‘User happy. Case closed.’",hint:"What’s missing that a future coworker or auditor will need?",answer:"Missing symptom, environment, steps taken, evidence, root cause/suspected, action, validation, and follow-up. One-line closures waste team time and destroy audit trails. Use a template."},difficulty:"beginner",prereqs:[13,53]},

  {id:55,title:"Banking IT Systems & Payment Rails",subtitle:"Enough domain knowledge to sound credible",analogy:"A bank’s IT looks like a city: Core banking is the city hall holding official records, channels are the customer-facing shops (branch, web, mobile, ATM), switches are the roads, and payment rails are the delivery routes connecting cities.",points:[
{t:"Core banking system (CBS)",d:"CBS holds customer accounts, balances, transactions, GL, interest, and product configurations. Names you will hear: Finacle, FLEXCUBE, Temenos T24, bankUltimus, Ababil NG. A junior doesn’t configure CBS — they support the environment around it."},
{t:"Channels — where customers touch the bank",d:"Branch counters, internet banking, mobile banking, ATMs/CDMs, chatbots, call centers, agent banking. Each channel has its own dependencies on CBS + identity + network + switches."},
{t:"Switches and card systems",d:"A card switch (e.g., ATM/POS switch) routes authorization requests between cards, acquirers, issuers, and networks (local NPS and international schemes like Visa/Mastercard). Downtime here = cards declined."},
{t:"Payment rails at a glance",d:"Different rails serve different money movements: RTGS for large-value, net systems for retail batch settlement, interbank fund transfer systems, and instant payment rails. Naming differs by country; recognize the structure."},
{t:"SWIFT — cross-border messaging",d:"SWIFT isn’t a payment network; it’s a secure financial messaging standard banks use to instruct and confirm cross-border payments. Operators care about message integrity, reconciliation, and strict auditability."},
{t:"Reconciliation and cut-offs",d:"End-of-day, end-of-month reconciliation ensures internal records match external clearing. Cut-off times for SWIFT, RTGS, and retail systems are non-negotiable. Missing them is a real financial/regulatory event."},
{t:"ICT risk and central-bank expectations",d:"Banks operate under ICT risk frameworks issued by regulators that expect patching, MFA, segregation of duties, logging, incident reporting, DR drills, vendor management, and critical-incident timelines. You don’t write the policy — you live it daily."},
{t:"The junior’s contribution",d:"You won’t run the CBS, but you will: support branch devices, patch channel gateways, watch switch alarms, help reconcile evidence, support SWIFT workstation environments, assist audit teams, and follow documented procedures exactly."}
],whatIs:"Banking IT domain literacy covers CBS, channels, switches, payment rails, SWIFT, reconciliation, cut-offs, and ICT-risk expectations. You don’t have to be a specialist to sound credible; you have to show you understand how the pieces connect.",realWorld:"An ATM network throws ‘switch unavailable’ at 8 PM. Junior checks the switch host, confirms a failed VPN tunnel to the acquirer, raises an incident with timeline and evidence, keeps comms to the branch manager calm and factual. Senior restores the tunnel; junior documents the full RCA entry for tomorrow’s operations review.",code:`// Banking IT landscape (simplified mental map)

Customer channels
  Branch counter  <--->  Channel gateway
  Internet/mobile <--->  Channel gateway
  ATM/CDM         <--->  ATM switch
  Call center     <--->  IVR + agent desktops
                      |
                      v
           Core banking system (CBS)
                      |
                      v
  Payment rails / clearing
    - Large value (RTGS-like)
    - Retail net settlement
    - Interbank fund transfer
    - Instant payment rail
    - Cross-border via SWIFT messaging
                      |
                      v
   Counterparty banks, schemes, regulator`,funFact:"The 2016 Bangladesh Bank SWIFT incident put a spotlight on payment-systems security worldwide. It changed how many banks approach SWIFT environments — with stricter segregation, logging, and customer-facing CSP requirements.",quiz:[
{q:"SWIFT primarily provides:",opts:["Money settlement","Secure financial messaging standards used for instructions and confirmations","ATM hardware","Card printing"],ans:1},
{q:"A core banking system (CBS) stores:",opts:["Only Wi-Fi configs","Customer accounts, balances, GL, transactions, product rules","Backup tapes only","Printer drivers"],ans:1},
{q:"An ATM switch outage typically causes:",opts:["Nothing","Card authorization failures and declined transactions","Faster cash withdrawals","Longer lunch breaks"],ans:1},
{q:"Reconciliation matters because:",opts:["It’s cosmetic","It ensures internal records match external clearing — detect discrepancies early","It replaces backups","It replaces audits"],ans:1}
],challenge:"Draw a one-page map of a fictional bank’s IT: channels, CBS, switch, payment rails, external parties. Mark where you (as a junior IT officer) would contribute daily.",resources:[
{type:"article",title:"Temenos core banking overview",url:"https://www.temenos.com/products/core-banking/",source:"Temenos"},
{type:"article",title:"FIS/Finastra core banking",url:"https://www.finastra.com/solutions/core-banking",source:"Finastra"},
{type:"docs",title:"SWIFT Customer Security Programme (CSP)",url:"https://www.swift.com/myswift/customer-security-programme-csp",source:"SWIFT"}
],eli5:"A bank is a busy city. The city hall (CBS) has the official records. Shops (channels) serve customers. Roads (switches) connect shops to the hall. Delivery routes (payment rails) connect city to city. Your job as junior IT is to help keep lights on in the city.",codeWalkthrough:[
"Banking IT mental map","Channels header","Branch to gateway","Internet/mobile to gateway","ATM to switch","Call center to IVR","Flow down to CBS","Flow down to rails","Rail types","SWIFT messaging","Flow to counterparties/regulators"
],bugChallenge:{code:"During a month-end incident, junior tweets: 'Our ATM network is down, working on it, many cards declined — stay tuned!'",hint:"Which policies and risks does this one tweet violate?",answer:"External comms during financial-system incidents must go through designated spokespeople and coordinate with legal, regulator, and customer channels. Publicly broadcasting outages can invite fraud, panic, regulatory scrutiny, and reputation damage. Respond: close the tweet fast, apologize internally, and reinforce incident comms training."},difficulty:"intermediate",prereqs:[53,54]},

  {id:56,title:"Branch Outage, ATM Outage & Audit Evidence",subtitle:"Regulated incidents require controlled response",analogy:"A branch outage is a fire in the bank’s bakery — customers are hungry, staff are anxious, regulators watch the smoke. Put it out calmly, preserve the oven (evidence), and document the recipe (runbook) for next time.",points:[
{t:"Branch outage first moves",d:"Confirm scope (one branch or many). Check WAN, power, local servers, identity, CBS channel, printing. Comms to the branch manager every 15 minutes. Escalate with scope + timeline + suspected layer."},
{t:"ATM outage — financial and reputational",d:"Card declines hurt customers immediately. Coordinate with switch team, acquirer, issuer. Confirm whether it’s card-specific, BIN-specific, geography-specific, or network-wide. Preserve switch logs and timestamps."},
{t:"Customer-facing comms discipline",d:"Branch notices, in-app banners, IVR messages — coordinated and approved. No ad-hoc claims. Updates at set intervals. Apologize without speculating about blame."},
{t:"Stakeholder map during a Sev 1",d:"Incident Commander, Comms Lead, Branch/Ops leadership, CISO/SOC (if security-related), Legal, Regulator liaison, Vendor contacts, Business owners. Know who does what before the day you need them."},
{t:"Evidence preservation under regulation",d:"Logs, timestamps, sequence of actions, decisions, and approvals. Chain of custody for any artefact that might go to an audit or regulator. Don’t delete, don’t share outside approved channels."},
{t:"Audit evidence pack — what it contains",d:"Runbook used, timeline log, change tickets associated, communications records, approvals, technical logs, RCA/PIR, remediation actions with owners and due dates."},
{t:"Regulatory reporting windows",d:"Some frameworks expect critical-incident notifications in specific timeframes (often within 72 hours for major events). Junior IT doesn’t report; junior IT hands clean evidence to whoever does."},
{t:"The difference between a mess and a case",d:"A well-handled incident produces a ‘case’ — a clean folder with everything needed. A mishandled incident leaves blame, gaps, and repeated questions. Over years, this distinction defines careers."}
],whatIs:"Regulated incident response connects technical fixes to policy, audit, and regulatory expectations. Juniors who can translate their work into ‘audit evidence’ are twice as useful as juniors who can only type commands.",realWorld:"A single branch loses connectivity at 10 AM. Junior confirms WAN link down, branch PABX still up, VPN backup fails to establish due to expired cert. Coordinates vendor, patches cert, gets WAN back at 11:15, collects timeline, ticket, approvals, cert-renewal action item, and publishes a clean audit pack by end of day.",code:`// ATM-down first-hour checklist

[ ] Confirm scope: specific ATM? region? scheme-wide?
[ ] Snapshot switch logs with timestamps
[ ] Confirm host + switch + acquirer connectivity
[ ] Open incident with IC assigned; start timeline log
[ ] Notify comms lead + business owner (cards, retail banking)
[ ] Draft customer-facing notice (branch + app + IVR) — keep factual
[ ] Check for pending changes in the last 48h
[ ] Engage vendor / acquirer / scheme support with evidence
[ ] Update stakeholders at fixed cadence (e.g., 15 min)
[ ] Preserve evidence (logs, tickets, approvals)
[ ] After recovery: run PIR, update runbook, plan fix actions`,funFact:"Mature banks treat incident writeups as learning artefacts, not punishment. Monthly or quarterly reviews of incidents across branches become the most reliable input to new detection rules, training, and process changes.",quiz:[
{q:"During an ATM outage, the first priority is to:",opts:["Post on social media","Confirm scope and start a timeline log, with comms to stakeholders","Blame the vendor","Reboot every branch"],ans:1},
{q:"An audit evidence pack should include:",opts:["One-line closure note","Runbook used, timeline, change tickets, comms, approvals, logs, RCA, actions","Random screenshots","Nothing"],ans:1},
{q:"Regulatory reporting windows (often within 72 hours for critical incidents) require:",opts:["A guess","Clean evidence handed promptly to the team responsible for external notification","Nothing from IT","Only a tweet"],ans:1},
{q:"Customer-facing comms during a bank outage should be:",opts:["Opinionated","Coordinated, factual, apologetic without speculating on blame","Silent","Blaming vendors"],ans:1}
],challenge:"Build a one-page ATM outage runbook for a fictional bank: scope, escalation, logs to capture, comms steps, evidence pack, RCA structure. Show it to a peer and iterate.",resources:[
{type:"docs",title:"SWIFT Customer Security Controls Framework",url:"https://www.swift.com/myswift/customer-security-programme-csp",source:"SWIFT"},
{type:"docs",title:"ISO/IEC 27035 Incident management",url:"https://www.iso.org/standard/27035",source:"ISO"},
{type:"docs",title:"NIST SP 800-61r2",url:"https://csrc.nist.gov/pubs/sp/800/61/r2/final",source:"NIST"}
],eli5:"When the bank has a bad day, don’t run around. Find out what broke, tell the right people calmly, fix it by the book, save every receipt, and explain clearly what happened afterward. That’s the whole game.",codeWalkthrough:[
"ATM-down first-hour checklist","Confirm scope","Snapshot switch logs","Confirm connectivity chain","Open incident + timeline","Notify comms + business owner","Customer-facing notice","Check recent changes","Engage vendor/scheme support","Fixed cadence updates","Preserve evidence","Post-incident actions"
],bugChallenge:{code:"Senior tells junior to 'just delete the old logs, they're taking space'.\nJunior deletes 180 days of SWIFT workstation logs during a live audit.",hint:"What regulation, process, and trust problems does this create?",answer:"Deleting regulatory logs — especially during audit — is a serious violation: retention rules, chain of custody, audit integrity, and possibly legal discovery duties. Never delete logs without written retention policy approval. Correct path: raise the disk-space issue through change control; move logs to compliant archive storage; get approvals and document."},difficulty:"advanced",prereqs:[53,54,55]},

  {id:57,title:"Vendor Access, Privileged Access & Compliance Culture",subtitle:"Trust, controls, and third parties",analogy:"Giving a vendor admin access is like handing a contractor the master key to a bank vault. You do it only when necessary, only for the time it takes, with a camera rolling, and with two colleagues watching.",points:[
{t:"Privileged Access Management (PAM)",d:"PAM tools (CyberArk, Delinea, BeyondTrust, Azure PIM) vault credentials, grant time-limited just-in-time access, and record privileged sessions. Every serious enterprise uses something like this."},
{t:"Vendor access basics",d:"Named individuals, time-bounded, scoped, monitored, and revoked. Never share generic ‘vendor’ accounts. Never extend access ‘indefinitely for convenience.’"},
{t:"Break-glass accounts",d:"A small set of high-privilege accounts used only when all other paths fail. Strong unique passwords, hardware MFA, offline storage, excluded from disruptive policies, and monitored for any use. Their value is in not being used."},
{t:"Maker-checker pattern",d:"The person who requests/executes is not the person who approves/validates. Standard in banking and many regulated industries. Reduces both fraud and honest mistakes."},
{t:"Segregation of duties (SoD)",d:"Separate roles and responsibilities so no single person controls an entire critical process. Developers don’t push to production alone; admins don’t approve their own changes; finance doesn’t approve their own payments."},
{t:"Session recording and replay",d:"High-risk sessions (vendor, emergency, root) should be recorded. Playback supports audits and incident investigations. Juniors don’t watch every session — they know where recordings live."},
{t:"Access reviews (again)",d:"Quarterly for normal, monthly for privileged. Managers sign off. Auto-generated reports + evidence retained. Access that isn’t used for 90 days is flagged and removed."},
{t:"Compliance culture — not bureaucracy",d:"Good compliance is just good judgment written down. The goal isn’t paperwork — it’s predictable, trustable operations. Juniors who internalize this early become senior leaders faster."}
],whatIs:"Vendor + privileged + SoD + maker-checker + PAM + access-review discipline is the ‘adult layer’ of IT operations in regulated industries. Ignoring it isn’t edgy; it’s career-limiting.",realWorld:"A vendor needs to patch a core banking module. Access is requested via PAM, approved by the app owner, time-limited to 2 hours, MFA-enforced, session recorded, change ticket linked. The vendor logs in, patches, verifies, and logs out. Recording is filed. Next quarter’s access review confirms nothing was missed.",code:`// Vendor access request checklist

[ ] Named individual(s), NOT shared vendor accounts
[ ] Business justification + system(s) in scope
[ ] Time-bounded (start + end timestamp)
[ ] Approval from system owner (recorded, via system)
[ ] MFA required; session via PAM tool (recorded)
[ ] Change ticket linked
[ ] Monitoring + alerts for vendor sessions active
[ ] Post-session verification logged
[ ] Access automatically revoked at end time
[ ] Recording retained per policy (e.g., 12 months)
[ ] Covered by quarterly access review

// Break-glass account hygiene
  [ ] 2 accounts, unique long passwords, hardware MFA
  [ ] Credentials stored offline in a sealed envelope in a safe
  [ ] Excluded from disruptive CA/MFA policies (not from audit!)
  [ ] Any login triggers immediate SOC alert + exec notification
  [ ] Tested at least twice a year; rotated after use`,funFact:"Many major breaches in regulated industries trace to vendor access that was over-privileged, always-on, and poorly monitored. The single biggest cheap control is time-bounded, session-recorded, PAM-brokered vendor access — and it almost always pays for itself.",quiz:[
{q:"Maker-checker primarily helps with:",opts:["Speed","Reducing fraud and honest mistakes by splitting request/execute from approve/validate","Replacing MFA","Training"],ans:1},
{q:"Break-glass accounts should be:",opts:["Used daily","Used only when all other paths fail; monitored; hardware MFA; offline storage","Shared with vendors","Public"],ans:1},
{q:"PAM tools typically offer:",opts:["Only password vaults","Vaulted credentials + just-in-time access + session recording + approvals","Only antivirus","Only backups"],ans:1},
{q:"Vendor access best practice:",opts:["Permanent shared accounts","Named, time-bounded, scoped, MFA, recorded via PAM, revoked automatically","No controls","SMS only"],ans:1}
],challenge:"Design a one-page vendor access workflow: request, approval, PAM session, monitoring, revoke, audit. Share it with a peer or mentor for critique.",resources:[
{type:"docs",title:"Microsoft Entra PIM (Privileged Identity Management)",url:"https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-configure",source:"Microsoft Learn"},
{type:"docs",title:"CyberArk Core PAM overview",url:"https://www.cyberark.com/products/privileged-access-manager/",source:"CyberArk"},
{type:"docs",title:"NIST SP 800-53 access control family",url:"https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",source:"NIST"}
],eli5:"You don’t give strangers the master key forever. You give a specific key, to one person, for a specific job, only for a specific time — with a camera rolling and a deadline.",codeWalkthrough:[
"Vendor access checklist","Named individuals","Business justification + scope","Time-bounded","Owner approval recorded","MFA + recorded PAM session","Change ticket linked","Monitoring/alerts for vendor sessions","Post-session verification","Auto-revoke at end time","Recording retention","Quarterly review coverage","Blank separator","Break-glass hygiene","Two accounts with unique creds","Offline storage","Excluded from disruptive policies but not from audit","Immediate alert on use","Tested and rotated"
],bugChallenge:{code:"Policy: 'Share a single vendor admin account with a dozen vendor staff so support is easier.'",hint:"Which controls does this destroy?",answer:"(1) Accountability/audit — logs show one account did everything, no person-level attribution. (2) Credential rotation — revoking one person requires rotating and redistributing. (3) Session recording becomes useless for attribution. (4) Increased blast radius if credentials leak. Replace with: named accounts, PAM-brokered time-bounded access, MFA, session recording, revocation at end time."},difficulty:"advanced",prereqs:[32,33,36,37,53,54,55,56]},

  {id:58,title:"Answering Technical Questions Without Sounding Robotic",subtitle:"Structure beats over-talking",analogy:"Answering a technical interview question is like telling a short story. It has a hook (what it is), a scene (where it shows up), and a clean ending (what you’d do). Tell it in that order and panels listen to the end.",points:[
{t:"The 3-part answer",d:"Concept → real example → safe action. ‘DNS maps names to IPs; I’ve configured records and debugged resolution with nslookup and Wireshark; if it broke in production, I’d verify the client’s DNS settings, query authoritative servers, and check recent changes.’"},
{t:"Say ‘I don’t know’ cleanly",d:"‘I haven’t configured that in production, but here’s how I understand it, and I would verify X before acting.’ Honesty + reasoning beats confident nonsense every time."},
{t:"Signal calm, not memorization",d:"Pause before answering if needed. Breathe. Speak slightly slower than you think you should. Panels read that as ‘safe to put in front of production.’"},
{t:"Ask clarifying questions",d:"For ambiguous questions (‘the system is slow, what do you do?’), ask scope: ‘Is this one user or many? Recent changes?’ Clarifying shows real troubleshooting instincts."},
{t:"Draw and point",d:"For complex answers, draw boxes and arrows — even in your head, then verbally. ‘There’s a client, a router, a firewall, and a server. The symptom points to the link between the firewall and the server because…’"},
{t:"Close every answer",d:"End each answer with a handoff or summary. ‘So to summarize: verify DNS with nslookup, correlate with recent changes, escalate with evidence.’ Silences become your friend."},
{t:"Practice real questions, out loud",d:"Your brain will choke on questions it has only read. Practice verbally with a peer. Record yourself. Review. Iterate. This is a skill, not a personality trait."},
{t:"The ‘walk-through the flow’ question",d:"‘What happens when you type a URL in a browser?’ and ‘Walk me through user login at a branch’ are classic because they let panels test ordered thinking. Practice both."}
],whatIs:"Interview communication is a learnable skill that turns your knowledge into offers. Panels do not hire ‘smart quiet person who knows a lot.’ They hire ‘clear, calm candidate who can be trusted in front of customers and auditors.’",realWorld:"Candidate A answers in a breathless paragraph of facts. Candidate B pauses, clarifies scope, gives a 3-part structured answer, and summarizes. Both knew the topic equally. Candidate B got the offer.",code:`// The 3-part answer — templates

Q: "How does DNS work?"
A:
  Concept:  DNS maps names to IPs using a recursive/authoritative
            model with records like A, CNAME, MX, and TTL.
  Example:  In my lab, I set up a DC with AD-integrated DNS and
            practiced nslookup + Resolve-DnsName for SRV records.
  Safe act: In production, I'd verify client DNS settings, query
            authoritative servers, check recent changes, and rule
            out split-horizon misconfigs before escalating.

Q: "An ATM network is down at 2 AM. What do you do?"
A:
  Concept:  Treat as high-priority incident; scope first, then
            preserve evidence and coordinate comms.
  Example:  I'd confirm scope (single ATM vs switch-wide),
            capture switch logs, check connectivity to acquirer.
  Safe act: Open incident + timeline, notify IC + branch ops
            + vendor, draft factual customer comms, keep 15-min
            cadence, hand over clean audit evidence at recovery.`,funFact:"The same technical answer delivered calmly beats a slightly better technical answer delivered anxiously. Interviewers are hiring a future colleague they trust under pressure — not a trivia champion.",quiz:[
{q:"The recommended 3-part answer structure is:",opts:["Brag → brag → brag","Concept → real example → safe action","Story → joke → story","Commands → commands → commands"],ans:1},
{q:"When you don’t know an answer, you should:",opts:["Invent a confident wrong answer","Say you don’t know cleanly and explain how you’d reason about it","Change the topic","Walk out"],ans:1},
{q:"Clarifying questions in interviews are:",opts:["A sign of weakness","A sign of real troubleshooting instincts","Waste of time","Only for seniors"],ans:1},
{q:"Practicing out loud matters because:",opts:["It doesn’t","Your verbal delivery is the actual deliverable panels evaluate","It replaces knowledge","It replaces labs"],ans:1}
],challenge:"Pick 5 questions from the interview bank in the research pack. Record yourself answering each in under 2 minutes using the 3-part structure. Listen back. Rewrite and re-record until clean.",resources:[
{type:"article",title:"STAR interview method",url:"https://www.themuse.com/advice/star-interview-method",source:"The Muse"},
{type:"video",title:"Mock technical interviews",url:"https://www.youtube.com/results?search_query=it+support+mock+interview",source:"YouTube search"},
{type:"article",title:"Communication in technical interviews",url:"https://careers.google.com/how-we-hire/",source:"Google Careers"}
],eli5:"Interviews aren’t a trivia quiz. They’re a story-telling test with three parts: what the thing is, where you’ve seen it, and what you’d safely do with it. Practice the shape, not just the facts.",codeWalkthrough:[
"Answer templates","Q1 DNS header","Concept line","Example line","Safe-action line","Blank separator","Q2 ATM down header","Concept","Example","Safe action"
],bugChallenge:{code:"Candidate is asked: 'What is DNS?' Their answer: 'It’s like… the internet phonebook thing, yeah, that’s it.'",hint:"Rewrite this as a clean 3-part answer under 90 seconds.",answer:"Concept: DNS maps hostnames to IPs using a recursive/authoritative model, with records like A/AAAA/CNAME/MX/SRV and TTL-based caching. Example: In my home lab I set up AD-integrated DNS with reverse zones and practiced queries via nslookup and Resolve-DnsName. Safe action: If DNS breaks in production, I verify client DNS settings, query the authoritative server directly, check for recent changes, rule out split-horizon, and escalate with evidence."},difficulty:"beginner",prereqs:[1,2,3]},

  {id:59,title:"Behavioral, STAR & Salary Discussion",subtitle:"Professionalism in the final round",analogy:"Behavioral rounds are like restaurant references. Nobody is testing the recipe; they’re asking ‘will this chef show up, clean up, and not yell at the waiter?’ Answer that question with stories, not slogans.",points:[
{t:"The STAR framework",d:"Situation, Task, Action, Result. Keep each ~1–2 sentences. The action section is the heart; do not skip it. Numbers help (‘reduced ticket backlog by 25% in 6 weeks’)."},
{t:"Have 6–8 stories ready",d:"Cover: teamwork, conflict, mistake + recovery, ambiguity, pressure, ethics, stakeholder management, feedback given/received. Interviewers can re-use one story across multiple prompts."},
{t:"Own your mistakes",d:"Describe one honestly: what happened, what you learned, what you’d do differently. Interviewers care less about the mistake and more about whether you grew safely."},
{t:"Ethics and confidentiality",d:"Stories can anonymize details: ‘At a prior client…’, ‘In a university project…’. Never share identifying customer data, production specifics, or confidential numbers."},
{t:"Dealing with a wrong senior",d:"A classic prompt: ‘What if a senior asks you to do something you think is wrong?’ Good answer: raise it respectfully with reasoning/evidence; escalate via approved channels only if needed; document; never defy loudly in public."},
{t:"Salary conversation",d:"Research the band. Answer in ranges. Tie to market data, cert, shift tolerance, and willingness. Never a single number if you can avoid it. Never lie about current pay."},
{t:"Benefits and growth matter too",d:"Training budget, cert reimbursement, shift allowance, learning leave, mentorship, on-call structure. Sometimes a slightly lower base with good growth beats a higher base with no path."},
{t:"Closing questions from YOU",d:"Always have 3 questions ready: team structure, on-call expectations, growth path, mentorship, how success is measured. Candidates who don’t ask look disengaged."}
],whatIs:"Behavioral + salary is where many strong technical candidates lose offers. It’s also where calm, honest, and structured candidates beat flashier ones. Master STAR, honesty, and salary ranges, and final rounds stop being scary.",realWorld:"Candidate is asked ‘tell me about a time you made a mistake.’ Weak answer: ‘I’m a perfectionist.’ Strong answer: STAR — 2 sentences each — with what they learned and what they changed. The panel relaxes; they can see a real human. Offer rate jumps.",code:`// STAR template + sample

Situation: Briefly set the scene (team, project, timeframe).
Task:      What was your specific responsibility / goal?
Action:    What YOU did (specific, ideally with metrics).
Result:    Outcome + what you learned.

Example (mistake + recovery):
Situation: In my university lab, I was configuring a test domain with one DC.
Task:      Deploy GPO changes and verify across clients.
Action:    I linked a restrictive GPO at the domain root instead of a test OU;
            clients locked down unexpectedly. I reverted the link within 10 minutes,
            re-linked at the correct OU with security filtering, and documented the
            mistake as a lesson learned.
Result:    The environment recovered quickly, and I built a checklist to always
            scope GPO links to a specific OU first and test with a single user.

// Salary framing (example)
"Based on the role and market, my expected range is X-Y in base plus
standard benefits. I'm flexible within that range depending on training,
cert support, and shift structure."`,funFact:"Behavioral interviews were invented because unstructured interviews were notoriously bad at predicting job performance. Structured STAR-style interviews, with consistent scoring, predict performance measurably better.",quiz:[
{q:"STAR stands for:",opts:["Situation, Task, Action, Result","Story, Tag, Answer, Review","System, Tool, API, Route","Sales, Tax, Audit, Rollback"],ans:0},
{q:"A strong ‘mistake’ answer:",opts:["Claims perfection","Tells the story honestly and explains what you learned / changed","Blames the team","Avoids details"],ans:1},
{q:"Salary should be discussed in:",opts:["A single random number","Researched ranges tied to market, role, shift, benefits","Only currency emojis","A love letter"],ans:1},
{q:"When a senior asks you to do something you believe is wrong:",opts:["Do it silently","Raise it respectfully with reasoning / evidence; escalate via approved channels only if needed; document","Post online","Quit immediately"],ans:1}
],challenge:"Write STAR stories for 6 prompts: teamwork, conflict, mistake, pressure, ethics, stakeholder management. Keep each to 6 sentences total. Rehearse them out loud.",resources:[
{type:"article",title:"STAR method explained",url:"https://www.themuse.com/advice/star-interview-method",source:"The Muse"},
{type:"article",title:"Salary negotiation basics",url:"https://hbr.org/topic/subject/negotiation",source:"HBR"},
{type:"video",title:"Salary negotiation for entry-level",url:"https://www.youtube.com/results?search_query=salary+negotiation+for+freshers+technical+jobs",source:"YouTube search"}
],eli5:"Interviewers aren’t only asking ‘can you do the work?’ They’re asking ‘will you be a good coworker?’ Tell small honest stories, take blame for your mistakes, and talk about money calmly in ranges. You’ll sound senior even as a fresher.",codeWalkthrough:[
"STAR template","Situation line","Task line","Action line","Result line","Blank separator","Example header","Situation line","Task line","Action line","Result line","Blank separator","Salary framing example"
],bugChallenge:{code:"Candidate asked for salary expectation. They reply: 'Whatever you think is fair.'",hint:"Why is that answer weak, and what’s a stronger one?",answer:"It signals lack of preparation and invites a low anchor. Better: ‘Based on the role and market, my expected range is X–Y base plus standard benefits; I’m flexible within that range depending on training/cert support, shift structure, and growth path.’ Do the research first; always answer in a ranged, justified way."},difficulty:"beginner",prereqs:[58]},

  {id:60,title:"Resume, LinkedIn & 90-Day Job Search Plan",subtitle:"Turn training into interviews",analogy:"Training without a plan is like baking great bread with no bakery. Your resume is the signboard, LinkedIn is the front window, and your 90-day plan is the daily shift that turns foot traffic into customers.",points:[
{t:"Resume must echo the role",d:"For every role type (support, sysadmin, network, SOC, cloud), tune the summary + skills + bullets to the job family. Generic resumes lose to specific ones. Keep it to 1 page as a fresher, 2 max after 3+ years."},
{t:"Impact bullets — numbers beat adjectives",d:"‘Reduced ticket backlog by 30% in 2 months by writing 5 KB articles and automating 2 recurring issues’ beats ‘hardworking team player.’ If you don’t have real numbers, use scope (‘supported 120 users,’ ‘managed 20 servers’)."},
{t:"Home-lab + certs = proof of work",d:"Without professional experience, labs and certs are your portfolio. Screenshot, diagram, write short Notion/Medium posts. Link them. ‘Proof’ beats ‘claim’ every time."},
{t:"LinkedIn headline formula",d:"‘[Target role] | [key tools/skills] | [proof or goal]’. Example: ‘IT Support Analyst | Windows, AD, M365, Intune | Home-lab + CompTIA Network+ in progress.’"},
{t:"About + Featured sections",d:"About: 3 short paragraphs — who you are, what you do, how to reach you. Featured: 3–5 artefacts (lab writeup, cert badge, project page, blog post). Make the profile visibly different from ‘just a student.’"},
{t:"Application rhythm",d:"Set a daily/weekly cadence: e.g., 10 quality applications per week + 3 networking touches (alumni, ex-colleagues, recruiters). Quality beats spam. Track in a spreadsheet."},
{t:"Interview pipeline management",d:"Track: applied date, role, company, status, date of last contact, next action. Follow up politely after interviews. Send thank-you notes tied to specific topics discussed."},
{t:"The 90-day plan",d:"Weeks 1–2: finalize resume/LinkedIn, post 1 lab writeup. Weeks 3–4: begin applications + networking, start cert prep. Weeks 5–8: first interview loops, refine answers. Weeks 9–12: offers, negotiate, accept; plan first 90 days on the job."}
],whatIs:"This is the go-to-market lesson. Your course ends here but your job search starts here. Treat it like a project with deliverables, cadence, metrics, and retrospectives.",realWorld:"A junior finishes the course, builds a home lab, writes 3 lab blogs, updates LinkedIn with a specific headline, and applies to 40 roles over 6 weeks using tuned resumes. 9 interviews; 2 offers; 1 accepted. The difference from their peers: process, not luck.",code:`// 90-day job search plan (template)

Weeks 1-2: setup
  [ ] Resume templates (support / sysadmin / security) - 3 variants
  [ ] LinkedIn profile: headline, about, featured, projects
  [ ] Cert plan chosen (e.g., CompTIA Network+ + ITIL 4 Foundation)
  [ ] Home-lab writeups published (at least 1)
  [ ] Interview notebook with STAR stories + 3-part answers

Weeks 3-4: ramp
  [ ] 10 quality applications per week (not 100 spams)
  [ ] 3 networking touches per week (alumni, recruiters, ex-colleagues)
  [ ] Mock interviews (2x/week, out loud)
  [ ] Cert study: 45-60 min/day

Weeks 5-8: pipeline
  [ ] Real interview loops; keep pipeline tracker updated
  [ ] Update resume bullets based on interviewer questions
  [ ] Publish 1-2 more lab/blog posts
  [ ] Target cert exam date

Weeks 9-12: close
  [ ] Offers; negotiate calmly with ranges
  [ ] Accept, sign, plan first 90 days on the job
  [ ] Thank everyone who helped; stay connected`,funFact:"The biggest differentiator between juniors who get offers and juniors who don’t isn’t talent — it’s a simple cadence: quality apps + networking touches + mock interviews + consistent publishing of proof-of-work, week after week. Boring. Effective. Hireable.",quiz:[
{q:"A strong resume bullet:",opts:["Starts with ‘hardworking team player’","Uses numbers or scope to show impact (users supported, issues automated, backlog reduced)","Is purely decorative","Lists every skill ever seen"],ans:1},
{q:"A good LinkedIn headline for a target IT Support role is:",opts:["‘Aspiring IT person’","‘IT Support Analyst | Windows, AD, M365, Intune | Home-lab + Network+ in progress’","‘@me for work’","‘Coder by heart’"],ans:1},
{q:"Best cadence for a 90-day job search:",opts:["Random bursts","Weekly rhythm: targeted applications + networking touches + mock interviews + cert study","Only apply when inspired","Only networking, never applications"],ans:1},
{q:"For freshers without real experience, the strongest substitute is:",opts:["Long summaries","Home labs + certs + published writeups = proof of work","Only certifications","Only online courses"],ans:1}
],challenge:"Finalize your resume (1 page), update your LinkedIn (headline + about + featured), and start your 90-day plan tracker today. Apply to 3 roles this week. You’re not a student anymore — you’re in market.",resources:[
{type:"article",title:"ATS optimization (Jobscan)",url:"https://www.jobscan.co/blog/ats-resume/",source:"Jobscan"},
{type:"docs",title:"LinkedIn profile best practices",url:"https://www.linkedin.com/help/linkedin/answer/a549069",source:"LinkedIn"},
{type:"video",title:"Resume tips for entry-level IT",url:"https://www.youtube.com/@JoshMadakor",source:"Josh Madakor"}
],eli5:"You finished the training. Now you need a signboard (resume), a shop window (LinkedIn), and a daily shift (apply + network + practice). Do this 90 days straight and interviews will come. Do it forever and offers will come.",codeWalkthrough:[
"90-day plan template","Weeks 1-2 setup header","Resume variants","LinkedIn setup","Cert plan","Home-lab writeups","Interview notebook","Blank separator","Weeks 3-4 ramp","Applications per week","Networking touches","Mock interview cadence","Cert study rhythm","Blank separator","Weeks 5-8 pipeline","Interview loops","Resume iteration","Keep publishing","Target exam date","Blank separator","Weeks 9-12 close","Offer negotiation","Accept + plan first 90 days","Thank people, stay connected"
],bugChallenge:{code:"Plan: 'Apply to 500 jobs in one day on every portal, no cover letters, no research, same resume everywhere.'",hint:"What’s wrong with spray-and-pray, and what replaces it?",answer:"Generic mass-applications rarely convert; ATS filters + recruiter fatigue kill quality signal. Replace with: 10 targeted quality applications per week, resume tuned per role family, named recruiter outreach, 1 networking touch per day, home-lab writeups as proof. Consistency + specificity wins."},difficulty:"beginner",prereqs:[58,59]},
];
