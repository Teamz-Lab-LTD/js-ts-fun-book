const LESSONS_DATA = [
{
  id: 1,
  title: "What is a Microprocessor?",
  subtitle: "The tiny brain that runs everything electronic",
  analogy: "A microprocessor is like a chef in a restaurant kitchen. The chef reads orders (instructions) from a ticket, gathers ingredients (data) from the pantry (memory), follows the recipe step by step, and produces a finished dish (output). The chef can only handle one order step at a time, but works so fast that a whole restaurant full of orders gets served in minutes.",
  points: [
    { t: "Problem to Solve", d: "Early computers filled entire rooms with vacuum tubes and wires. Engineers needed a way to shrink all that processing power onto a single chip so computers could be affordable and portable.", code: "" },
    { t: "CPU on a Chip", d: "A microprocessor is a Central Processing Unit (CPU) fabricated on a single integrated circuit (IC). Intel released the first commercial microprocessor, the 4004, in 1971 with 2,300 transistors.", code: "" },
    { t: "The Fetch-Decode-Execute Cycle", d: "Every microprocessor repeats three steps endlessly: Fetch the next instruction from memory, Decode what it means, and Execute the operation. This cycle is the heartbeat of all computing.", code: "; 8086 Assembly - simple fetch-decode-execute example\nMOV AX, 0005h   ; Fetch: CPU reads this instruction from memory\n                 ; Decode: CPU recognizes MOV opcode\n                 ; Execute: value 0005h is placed into AX register" },
    { t: "Registers: Tiny Fast Storage", d: "Registers are small storage locations inside the processor. The 8086 has general-purpose registers like AX, BX, CX, DX, each 16 bits wide. They hold data the CPU is actively working on.", code: "MOV AX, 000Ah   ; AX = 10 decimal\nMOV BX, 0014h   ; BX = 20 decimal\nADD AX, BX      ; AX = AX + BX = 30" },
    { t: "The Address Bus and Data Bus", d: "The address bus is like a street address telling the CPU where to look in memory. The data bus carries the actual information. The 8086 has a 20-bit address bus (1 MB addressable) and a 16-bit data bus.", code: "" },
    { t: "Clock Speed", d: "The clock signal is a steady electronic pulse that synchronizes every operation. The original 8086 ran at 5 MHz, meaning 5 million ticks per second. Modern processors exceed 5 GHz -- a thousand times faster.", code: "" },
    { t: "Instruction Set Architecture (ISA)", d: "The ISA is the vocabulary a processor understands. The 8086 ISA includes instructions like MOV (move data), ADD (addition), SUB (subtraction), JMP (jump), and INT (interrupt). Every program must ultimately speak this language.", code: "MOV CX, 0003h   ; Load counter\nLOOP_START:\n  DEC CX         ; Subtract 1 from CX\n  JNZ LOOP_START ; Jump if CX is not zero" },
    { t: "From Instructions to Action", d: "When you press a key on your keyboard, an electrical signal reaches the microprocessor. It runs a small program (interrupt handler) that reads the key code, stores it, and sends the character to the screen. All in microseconds.", code: "" },
    { t: "The 8086 Legacy", d: "The Intel 8086 (1978) defined the x86 architecture still used in most PCs today. Its register names (AX, BX, SP, IP), segmented memory model, and instruction mnemonics became the foundation of decades of computing.", code: "" }
  ],
  whatIs: "A microprocessor is a complete central processing unit (CPU) built on a single semiconductor chip. It fetches instructions from memory, decodes them, and executes arithmetic, logic, and control operations to produce useful output. It is the core component that makes computers, phones, and countless electronic devices work.",
  realWorld: "Every time you type on a keyboard, tap a phone screen, or ask a voice assistant a question, a microprocessor is fetching and executing millions of instructions per second to turn your input into the response you see. From car engine management to spacecraft guidance, microprocessors are everywhere.",
  code: "; 8086 Assembly: Add two numbers and store the result\n; This is one of the simplest programs a microprocessor can run.\n\n.MODEL SMALL\n.STACK 100h\n.DATA\n  num1 DW 0019h        ; num1 = 25 in decimal\n  num2 DW 000Fh        ; num2 = 15 in decimal\n  result DW ?          ; reserve space for result\n.CODE\nMAIN PROC\n  MOV AX, @DATA        ; Load data segment address\n  MOV DS, AX           ; Set DS register\n\n  MOV AX, num1         ; AX = 25\n  ADD AX, num2         ; AX = 25 + 15 = 40\n  MOV result, AX       ; Store 40 in result\n\n  MOV AH, 4Ch          ; DOS terminate function\n  INT 21h              ; Call DOS interrupt\nMAIN ENDP\nEND MAIN",
  funFact: "The Intel 4004, the world's first commercial microprocessor (1971), had 2,300 transistors and ran at 740 kHz. A modern Apple M2 chip has over 20 billion transistors and runs at 3.49 GHz. That is roughly 8.7 million times more transistors and 4,700 times the clock speed -- yet both follow the same fundamental fetch-decode-execute cycle.",
  quiz: [
    { q: "What are the three main steps of the CPU cycle?", opts: ["Fetch, Decode, Execute", "Read, Write, Store", "Input, Process, Print", "Load, Save, Quit"], ans: 0 },
    { q: "How wide is the data bus on the Intel 8086?", opts: ["8 bits", "16 bits", "20 bits", "32 bits"], ans: 1 },
    { q: "What does the MOV instruction do in 8086 assembly?", opts: ["Adds two values", "Moves (copies) data from source to destination", "Multiplies two registers", "Jumps to a label"], ans: 1 },
    { q: "How many transistors did the Intel 4004 contain?", opts: ["230", "2,300", "23,000", "230,000"], ans: 1 },
    { q: "What does the address bus determine?", opts: ["How fast the CPU runs", "How much memory the CPU can access", "How many registers the CPU has", "How many instructions exist"], ans: 1 }
  ],
  challenge: "Write an 8086 assembly snippet that loads the value 42 (2Ah) into register BX, loads 8 into CX, and then adds them together storing the result in BX. Bonus: what is the final hex value in BX?",
  resources: [
    { type: "article", title: "How Microprocessors Work - HowStuffWorks", url: "https://computer.howstuffworks.com/microprocessor.htm", source: "HowStuffWorks" },
    { type: "video", title: "How a CPU Works (In One Lesson)", url: "https://www.youtube.com/watch?v=cNN_tTXABUA", source: "YouTube" },
    { type: "article", title: "Intel 8086 - Wikipedia", url: "https://en.wikipedia.org/wiki/Intel_8086", source: "Wikipedia" },
    { type: "tutorial", title: "8086 Assembly Language Tutorial", url: "https://www.tutorialspoint.com/assembly_programming/index.htm", source: "TutorialsPoint" }
  ],
  eli5: "Imagine you have a magic box. You write a simple instruction on a card, like 'add 2 and 3.' You slide the card into the box. The box reads the card, does the math inside, and shows you '5' on a little screen. A microprocessor is that magic box inside every computer, phone, and game console. It reads millions of instruction cards every second!",
  codeWalkthrough: [
    ".MODEL SMALL -- Tells the assembler we are using the small memory model (one code segment, one data segment).",
    ".STACK 100h -- Reserves 256 bytes for the stack, which is used for temporary storage and subroutine calls.",
    ".DATA -- Begins the data segment where we declare our variables.",
    "num1 DW 0019h -- Declares a 16-bit word variable 'num1' with the value 25 (0x19 in hexadecimal).",
    "num2 DW 000Fh -- Declares 'num2' with the value 15 (0x0F).",
    "result DW ? -- Reserves space for the result; the '?' means it is uninitialized.",
    ".CODE and MAIN PROC -- Begins the code segment and defines the main procedure.",
    "MOV AX, @DATA / MOV DS, AX -- Loads the address of our data segment into DS so the CPU knows where our variables live.",
    "MOV AX, num1 -- Copies the value of num1 (25) into the AX register.",
    "ADD AX, num2 -- Adds num2 (15) to AX. Now AX holds 40 (0x28).",
    "MOV result, AX -- Stores the value 40 from AX into the memory location 'result'.",
    "MOV AH, 4Ch / INT 21h -- Calls DOS interrupt 21h function 4Ch to cleanly terminate the program."
  ],
  bugChallenge: { code: "MOV AX, 0010h\nMOV BX, 0020h\nADD CX, BX\nMOV result, CX", hint: "Look carefully at which register was loaded with the first value and which register is used in the ADD instruction.", answer: "The ADD instruction uses CX instead of AX. CX was never loaded, so it contains garbage. The fix is: ADD AX, BX and then MOV result, AX." },
  difficulty: "beginner",
  prereqs: []
},
{
  id: 2,
  title: "Microprocessor vs Microcontroller",
  subtitle: "General-purpose brain vs all-in-one specialist",
  analogy: "A microprocessor is like a brilliant but empty-handed surgeon -- incredibly skilled, but needs a hospital (external memory, I/O devices, power supply) to operate. A microcontroller is like a field medic with a backpack -- not as powerful, but carries everything needed (RAM, ROM, I/O ports) right on board and can work anywhere independently.",
  points: [
    { t: "General-Purpose Compute", d: "A microprocessor is designed for maximum computational power. It relies on external chips for memory (RAM, ROM), input/output control, and timers. This makes it flexible -- you can attach as much memory or as many peripherals as you want.", code: "" },
    { t: "Dedicated Control", d: "A microcontroller integrates CPU, RAM, ROM/Flash, I/O ports, timers, and often ADC/DAC onto a single chip. It is optimized for controlling specific tasks like reading a sensor or driving a motor, not for running an operating system.", code: "" },
    { t: "External vs Integrated Parts", d: "The 8086 microprocessor needs external chips: 8284 clock generator, 8288 bus controller, 8255 PIO, and separate RAM/ROM chips. An ATmega328 microcontroller has 32KB Flash, 2KB RAM, 23 I/O pins, timers, and UART all on one chip.", code: "; 8086 system needs external I/O chip (8255)\n; To configure Port A as output:\nMOV AL, 80h         ; Control word: all ports output\nOUT 06h, AL          ; Send to 8255 control register\nMOV AL, 0FFh         ; Data to output\nOUT 00h, AL          ; Write to Port A" },
    { t: "Architecture Comparison", d: "Microprocessors typically use Von Neumann architecture (shared bus for code and data). Many microcontrollers use Harvard architecture (separate buses for code and data) allowing simultaneous fetch and data access for faster embedded control.", code: "" },
    { t: "Cost and Power", d: "A microprocessor system costs more due to the supporting chips required and consumes more power. A microcontroller is cheap (often under $1), low-power, and perfect for battery-operated devices. This is why your TV remote uses a microcontroller, not an Intel CPU.", code: "" },
    { t: "Instruction Set Differences", d: "Microprocessors often have Complex Instruction Set Computing (CISC) with hundreds of instructions. Many microcontrollers use Reduced Instruction Set Computing (RISC) with fewer, simpler instructions that execute in one clock cycle.", code: "; 8086 CISC example - one instruction does a lot:\nMOVSB              ; Move byte from DS:SI to ES:DI,\n                   ; increment SI and DI automatically\n\n; RISC equivalent would need multiple instructions:\n; LOAD R1, [source]\n; STORE [dest], R1\n; INC source_ptr\n; INC dest_ptr" },
    { t: "Choose the Right Device", d: "Use a microprocessor when you need heavy computation: PCs, servers, gaming consoles, AI workloads. Use a microcontroller when you need dedicated control: washing machines, car sensors, IoT devices, traffic lights.", code: "" },
    { t: "The 8086 as System Core", d: "The Intel 8086 was designed as a microprocessor -- the central brain in a larger system. It needs an 8288 bus controller to manage read/write signals, an 8282 latch for address demultiplexing, and 8286 transceivers for data buffering.", code: "; Minimum mode 8086 system setup pseudocode\n; 8086 CPU -> 8284 Clock (5 MHz)\n;         -> 8282 Address Latch (A0-A19)\n;         -> 8286 Data Transceiver (D0-D15)\n;         -> 8288 Bus Controller (ALE, DEN, DT/R)\n;         -> RAM chips (e.g., 6264 8K x 8)\n;         -> ROM chips (e.g., 2764 8K x 8)" }
  ],
  whatIs: "A microprocessor is a CPU-only chip that needs external components (RAM, ROM, I/O) to form a complete system, optimized for high-performance general computing. A microcontroller is a single chip containing CPU, memory, and peripherals, optimized for dedicated control tasks in embedded systems.",
  realWorld: "Your laptop contains a microprocessor (like an Intel Core i7) surrounded by separate RAM sticks, SSD storage, and I/O controllers. Your washing machine contains a microcontroller with everything on one chip, running a simple program that reads the door sensor, controls the water valve, and spins the motor on a fixed schedule.",
  code: "; 8086 Microprocessor: Reading input from an external 8255 PIO chip\n; This shows why a microprocessor needs external support chips\n\n.MODEL SMALL\n.STACK 100h\n.CODE\nMAIN PROC\n  ; Configure 8255 Programmable I/O\n  ; Port A = Output, Port B = Input\n  MOV AL, 82h         ; Control word: A=out, B=in, C=out\n  OUT 06h, AL          ; Write to 8255 control register\n\nREAD_LOOP:\n  IN  AL, 02h          ; Read switches from Port B\n  NOT AL               ; Invert (active-low switches)\n  OUT 00h, AL          ; Echo to LEDs on Port A\n\n  JMP READ_LOOP        ; Continuous loop\n\n  MOV AH, 4Ch\n  INT 21h\nMAIN ENDP\nEND MAIN",
  funFact: "The Apollo Guidance Computer that landed humans on the Moon in 1969 had less processing power than a modern $0.50 microcontroller. It ran at 2 MHz with 74KB of memory. Today, an Arduino Uno (ATmega328P) at $3 has 32KB flash and runs at 16 MHz -- and you can buy ten of them for the price of a pizza.",
  quiz: [
    { q: "What is the main difference between a microprocessor and a microcontroller?", opts: ["Microprocessors are newer technology", "Microprocessors need external memory and I/O; microcontrollers have them built in", "Microcontrollers are always faster", "Microprocessors can only run one program"], ans: 1 },
    { q: "Which architecture has separate buses for code and data?", opts: ["Von Neumann", "Harvard", "Princeton", "Stanford"], ans: 1 },
    { q: "What external chip does the 8086 use for parallel I/O?", opts: ["8284", "8288", "8255", "8259"], ans: 2 },
    { q: "Which type of device would you use to control a washing machine?", opts: ["Microprocessor", "Microcontroller", "Graphics card", "Network switch"], ans: 1 },
    { q: "What does CISC stand for?", opts: ["Central Integrated System Controller", "Complex Instruction Set Computing", "Common Interface Standard Code", "Compiled Instruction Sequence Core"], ans: 1 }
  ],
  challenge: "Draw (on paper or digitally) a block diagram of a minimum-mode 8086 system. Include the CPU, clock generator (8284), address latch (8282), data transceiver (8286), bus controller (8288), RAM, ROM, and an 8255 PIO. Label the address bus (20-bit) and data bus (16-bit) connections.",
  resources: [
    { type: "article", title: "Microprocessor vs Microcontroller - Differences", url: "https://www.geeksforgeeks.org/difference-between-microprocessor-and-microcontroller/", source: "GeeksforGeeks" },
    { type: "video", title: "Microprocessor vs Microcontroller", url: "https://www.youtube.com/watch?v=7vhqDmFnS8w", source: "YouTube" },
    { type: "article", title: "Intel 8255 PPI", url: "https://en.wikipedia.org/wiki/Intel_8255", source: "Wikipedia" },
    { type: "datasheet", title: "8086 Minimum Mode Configuration", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_pin_configuration.htm", source: "TutorialsPoint" }
  ],
  eli5: "Imagine you have two kinds of toy robots. The first robot is super smart but has no arms, no eyes, and no ears -- you have to plug in separate arms, eyes, and ears for it to do anything. That is a microprocessor. The second robot is not as smart, but it already has arms, eyes, ears, and a little battery pack all built in, so you can just turn it on and it works. That is a microcontroller.",
  codeWalkthrough: [
    "MOV AL, 82h -- Loads the control word into AL. The value 82h configures the 8255 chip: Port A as output, Port B as input, Port C lower as output.",
    "OUT 06h, AL -- Sends the control word to I/O address 06h, which is the 8255 control register. This programs the chip's behavior.",
    "IN AL, 02h -- Reads one byte from I/O address 02h (Port B of the 8255). This could be connected to DIP switches or push buttons.",
    "NOT AL -- Inverts all bits. If switches are active-low (0 = pressed), this converts them so 1 = pressed, making the logic more intuitive.",
    "OUT 00h, AL -- Writes the processed byte to I/O address 00h (Port A of the 8255). This could be connected to LEDs showing which switches are pressed.",
    "JMP READ_LOOP -- Jumps back to read the switches again, creating an infinite polling loop. This is a common pattern in embedded systems."
  ],
  bugChallenge: { code: "MOV AL, 82h\nOUT 06h, AL\nIN  AX, 02h\nOUT 00h, AX", hint: "The 8255 PIO has 8-bit ports. Check which register size is being used for the I/O operations.", answer: "The code uses AX (16-bit) for IN and OUT, but the 8255 ports are 8-bit. Using AX would try to read/write 16 bits and access an unintended adjacent port. The fix is to use AL (8-bit): IN AL, 02h and OUT 00h, AL." },
  difficulty: "beginner",
  prereqs: [1]
},
{
  id: 3,
  title: "Number Systems: Binary, Decimal, Hex",
  subtitle: "Speaking the native language of digital circuits",
  analogy: "Number systems are like different languages for the same ideas. Decimal is your everyday English -- comfortable for humans. Binary is Morse code -- only dots and dashes (0s and 1s), perfect for simple on/off circuits. Hexadecimal is shorthand -- like abbreviations that compress four binary digits into a single character so engineers can read long binary values without going cross-eyed.",
  points: [
    { t: "Bits Form Patterns", d: "A bit is the smallest unit of data: 0 or 1, off or on, low voltage or high voltage. Eight bits make a byte. With 8 bits, you can represent 256 different values (0 to 255). Every piece of data in a computer -- numbers, text, images -- is ultimately a pattern of bits.", code: "; 8086: Loading binary patterns into registers\nMOV AL, 01010101b   ; AL = 55h = 85 decimal\nMOV BL, 11110000b   ; BL = F0h = 240 decimal\nMOV CL, 00001111b   ; CL = 0Fh = 15 decimal" },
    { t: "Bases Represent Values", d: "A number base (or radix) defines how many unique digits are used. Decimal is base-10 (0-9), Binary is base-2 (0-1), Hexadecimal is base-16 (0-9, A-F). The value 255 in decimal = 11111111 in binary = FF in hex. Same quantity, different representation.", code: "; All three lines load the same value (255) into AL\nMOV AL, 0FFh        ; Hexadecimal\nMOV AL, 11111111b   ; Binary\nMOV AL, 255         ; Decimal" },
    { t: "Binary: The Machine's Language", d: "Computers use binary because transistors have two states: on (1) and off (0). Every instruction the 8086 executes, every address it reads, every byte of data is ultimately binary. The instruction MOV AX, 5 is stored in memory as the binary pattern 10111000 00000101 00000000.", code: "; Binary arithmetic in 8086\nMOV AL, 00001010b   ; AL = 10 decimal\nADD AL, 00000011b   ; AL = 10 + 3 = 13\n                    ; AL = 00001101b = 0Dh" },
    { t: "Hex Shortens Binary", d: "Hexadecimal groups every 4 binary digits into one hex digit. This makes long binary strings readable. The 8086 address bus is 20 bits wide -- instead of writing 11111111111111111111, engineers write FFFFFh. Memory dumps, opcodes, and addresses are almost always shown in hex.", code: "; Converting binary to hex:\n; 1010 1110 0011 0001\n;  A    E    3    1\n; So 1010111000110001b = AE31h\n\nMOV AX, 0AE31h      ; Much easier to read than binary!" },
    { t: "Positional Notation", d: "In any base, each digit position has a weight. In decimal 347: 3x100 + 4x10 + 7x1. In binary 1101: 1x8 + 1x4 + 0x2 + 1x1 = 13. In hex 2F: 2x16 + 15x1 = 47. Understanding positional weights lets you convert between any bases.", code: "; Hex to Decimal example:\n; 1A3h = 1x256 + 10x16 + 3x1\n;      = 256 + 160 + 3 = 419\n\nMOV AX, 01A3h       ; AX now holds 419 decimal" },
    { t: "Engineers Read Memory Faster", d: "When debugging 8086 programs, you read memory dumps in hex. Each byte is exactly 2 hex digits. A 16-bit word is 4 hex digits. A 20-bit address is 5 hex digits. This regularity makes hex the universal language of hardware debugging.", code: "; Typical 8086 memory dump (hex):\n; Address  Data\n; 0100:0000  B8 05 00 BB 03 00 01 D8\n; Translation:\n; B8 05 00 = MOV AX, 0005h\n; BB 03 00 = MOV BX, 0003h\n; 01 D8    = ADD AX, BX" },
    { t: "Signed Numbers: Two's Complement", d: "To represent negative numbers, the 8086 uses two's complement. The most significant bit (MSB) is the sign bit: 0 = positive, 1 = negative. For an 8-bit value, 01111111b = +127 and 10000000b = -128. This lets ADD and SUB work for both signed and unsigned numbers with the same circuitry.", code: "; Two's complement: negating a number\n; To get -5 from +5 (00000101b):\n; Step 1: Invert bits -> 11111010b\n; Step 2: Add 1       -> 11111011b = FBh = -5\n\nMOV AL, 5\nNEG AL              ; AL = -5 = FBh\n                    ; NEG does two's complement automatically" },
    { t: "BCD: Binary Coded Decimal", d: "The 8086 supports Binary Coded Decimal where each decimal digit is stored as a 4-bit nibble. The value 59 is stored as 0101 1001 (BCD) instead of 00111011 (pure binary). Instructions like DAA (Decimal Adjust after Addition) correct BCD results.", code: "MOV AL, 29h         ; BCD for 29 (not hex 29!)\nADD AL, 13h         ; BCD for 13 -> AL = 3Ch\nDAA                 ; Decimal Adjust: AL = 42h (BCD 42)\n                    ; DAA corrects the result to valid BCD" }
  ],
  whatIs: "Number systems are methods of representing numeric values using different bases. Binary (base-2) is the fundamental language of digital circuits using only 0 and 1. Decimal (base-10) is the human-friendly system. Hexadecimal (base-16) is the engineer's shorthand that compresses binary into a compact, readable format used universally in assembly programming, memory addresses, and hardware debugging.",
  realWorld: "When you see a MAC address like 3C:A6:F6:12:E4:8B on your network adapter, those are hexadecimal values. When a blue screen of death shows an error code like 0x0000007E, that is hex. When a color code #D9FE06 defines neon green in CSS, each pair of hex digits represents a binary value for red, green, and blue intensity.",
  code: "; 8086 Assembly: Convert a binary nibble (0-15) to its ASCII hex character\n; Input: DL = value 0-15\n; Output: DL = ASCII character '0'-'9' or 'A'-'F'\n\n.MODEL SMALL\n.STACK 100h\n.CODE\nMAIN PROC\n  MOV AX, @DATA\n  MOV DS, AX\n\n  MOV DL, 0Bh         ; Test value: 11 decimal = 'B' in hex\n\n  CMP DL, 09h          ; Is it 0-9 or A-F?\n  JBE IS_DIGIT          ; Jump if DL <= 9\n\n  ADD DL, 37h          ; 0Ah + 37h = 41h = 'A'\n  JMP PRINT             ;  0Bh + 37h = 42h = 'B', etc.\n\nIS_DIGIT:\n  ADD DL, 30h          ; 00h + 30h = 30h = '0'\n                       ; 09h + 30h = 39h = '9'\n\nPRINT:\n  MOV AH, 02h          ; DOS print character function\n  INT 21h              ; Print the hex character\n\n  MOV AH, 4Ch\n  INT 21h\nMAIN ENDP\nEND MAIN",
  funFact: "The word 'DEADBEEF' is a famous hexadecimal constant (0xDEADBEEF) used as a magic debug value in many systems. IBM RS/6000 used it, and it appears in Java class files. Other fun hex words engineers have used: 0xCAFEBABE (Java class magic number), 0xBAADF00D (Windows debug fill), and 0xFEEDFACE (Mach-O binaries on macOS).",
  quiz: [
    { q: "What is the hexadecimal equivalent of binary 11001010?", opts: ["CA", "AC", "C10", "DA"], ans: 0 },
    { q: "How many unique values can 8 bits represent?", opts: ["8", "16", "128", "256"], ans: 3 },
    { q: "What does the DAA instruction do in 8086 assembly?", opts: ["Double the accumulator", "Decimal Adjust after Addition for BCD", "Delete All Addresses", "Divide AX by AL"], ans: 1 },
    { q: "In two's complement (8-bit), what decimal value does 11111111b represent?", opts: ["255", "-1", "-127", "0"], ans: 1 },
    { q: "Why do engineers prefer hexadecimal over binary?", opts: ["Hex is faster for the CPU", "Hex compresses 4 binary digits into 1 character for readability", "Hex uses less memory", "Hex is required by the 8086"], ans: 1 }
  ],
  challenge: "Convert the following values by hand (then verify with assembly code): (a) Decimal 200 to binary and hex. (b) Hex 0x3F7A to binary and decimal. (c) Binary 10110011 to hex and decimal. (d) What is -42 in 8-bit two's complement (binary and hex)?",
  resources: [
    { type: "article", title: "Number Systems in Computer Science", url: "https://www.geeksforgeeks.org/number-system-and-base-conversions/", source: "GeeksforGeeks" },
    { type: "video", title: "Binary, Hex, and Octal Explained", url: "https://www.youtube.com/watch?v=ZL-LhaaMTTE", source: "YouTube" },
    { type: "tool", title: "RapidTables Number Converter", url: "https://www.rapidtables.com/convert/number/index.html", source: "RapidTables" },
    { type: "article", title: "Two's Complement", url: "https://en.wikipedia.org/wiki/Two%27s_complement", source: "Wikipedia" }
  ],
  eli5: "Imagine you only have two fingers -- that is binary, and you can count from 0 to 1. Now imagine you have ten fingers -- that is decimal, counting from 0 to 9. Now imagine you're an alien with sixteen fingers -- that is hexadecimal, counting from 0 to F. Computers only have 'two fingers' (on and off), but engineers use the 'sixteen finger' system to write things faster without making mistakes.",
  codeWalkthrough: [
    "MOV DL, 0Bh -- We load our test value (11 decimal, which should produce the character 'B') into the DL register.",
    "CMP DL, 09h -- Compares DL with 9. This determines whether our nibble is a digit (0-9) or a letter (A-F). CMP sets flags without changing DL.",
    "JBE IS_DIGIT -- 'Jump if Below or Equal.' If DL is 0-9, we jump to the digit handling code. JBE checks the Carry and Zero flags set by CMP.",
    "ADD DL, 37h -- For values A-F (10-15): adding 37h converts to ASCII. For example, 0Ah (10) + 37h = 41h which is ASCII 'A'. This works because 'A' is at position 41h in the ASCII table.",
    "ADD DL, 30h -- For values 0-9: adding 30h converts to ASCII. For example, 05h + 30h = 35h which is ASCII '5'. The digit '0' starts at position 30h in ASCII.",
    "MOV AH, 02h / INT 21h -- DOS function 02h prints the character in DL to the screen. INT 21h invokes the DOS interrupt handler."
  ],
  bugChallenge: { code: "MOV AL, 29h\nADD AL, 18h\nDAA\n; Expected: BCD 47, Got: something wrong", hint: "Check if the ADD result before DAA is correct and whether both operands are valid BCD values.", answer: "The value 18h is not valid BCD -- the digit 8 is fine but together '18' in BCD should represent eighteen, which would be 18h. Actually the real issue is that 29h + 18h = 41h, and DAA adjusts to 47h. The bug is the comment: the expected answer should be 47, and the code actually works correctly! This is a trick question -- always verify your assumptions before 'fixing' working code." },
  difficulty: "beginner",
  prereqs: [1]
},
{
  id: 4,
  title: "Digital Logic Foundations",
  subtitle: "The gates that build everything from adders to processors",
  analogy: "Logic gates are like voting booths with very strict rules. An AND gate only says 'yes' if ALL voters say yes. An OR gate says 'yes' if ANY voter says yes. A NOT gate is a contrarian -- it always says the opposite. By chaining millions of these simple voters together, you can build a machine that does math, stores memory, and runs programs. The entire 8086 processor is just millions of these tiny yes/no decision makers working in concert.",
  points: [
    { t: "AND, OR, NOT: The Building Blocks", d: "Every digital circuit is built from three fundamental gates. AND outputs 1 only when all inputs are 1. OR outputs 1 when at least one input is 1. NOT (inverter) flips the bit. From these three, you can build any logic function. NAND and NOR are 'universal gates' -- you can build any other gate using only NAND or only NOR.", code: "; 8086: Demonstrating AND, OR, NOT operations\nMOV AL, 10110011b   ; AL = B3h\nMOV BL, 11010101b   ; BL = D5h\n\nAND AL, BL          ; AL = 10010001b = 91h\n                    ; each bit: 1 AND 1=1, 0 AND 1=0, etc.\n\nMOV AL, 10110011b   ; Restore AL\nOR  AL, BL          ; AL = 11110111b = F7h\n\nMOV AL, 10110011b   ; Restore AL\nNOT AL              ; AL = 01001100b = 4Ch" },
    { t: "XOR: The Difference Detector", d: "XOR (exclusive OR) outputs 1 when inputs differ. It is essential for comparisons, parity checking, and encryption. XOR-ing a value with itself always gives zero -- this is the fastest way to clear a register on the 8086. XOR is also used in checksums and simple ciphers.", code: "; XOR tricks on 8086\nXOR AX, AX          ; AX = 0 (fastest way to zero a register)\n\nMOV AL, 01011010b\nXOR AL, 11111111b   ; Same as NOT AL (flip all bits)\n\nMOV AL, 41h          ; 'A'\nXOR AL, 20h          ; 'a' -- toggles case bit in ASCII!" },
    { t: "Truth Tables", d: "A truth table lists every possible input combination and the resulting output. For 2 inputs, there are 4 rows. For 3 inputs, 8 rows. Truth tables are the specification from which circuits are designed. Engineers write the truth table first, then derive the circuit.", code: "; AND Truth Table:        OR Truth Table:\n; A B | Out               A B | Out\n; 0 0 |  0                0 0 |  0\n; 0 1 |  0                0 1 |  1\n; 1 0 |  0                1 0 |  1\n; 1 1 |  1                1 1 |  1\n;\n; XOR Truth Table:        NOT Truth Table:\n; A B | Out               A | Out\n; 0 0 |  0                0 |  1\n; 0 1 |  1                1 |  0\n; 1 0 |  1\n; 1 1 |  0" },
    { t: "Half Adder and Full Adder", d: "A half adder adds two single bits and produces a Sum and a Carry. Sum = A XOR B, Carry = A AND B. A full adder adds three bits (A, B, and Carry-in) and produces Sum and Carry-out. Chain 16 full adders together and you have the 16-bit adder inside the 8086's ALU.", code: "; Half Adder in logic:\n; Sum   = A XOR B\n; Carry = A AND B\n;\n; Full Adder:\n; Sum   = A XOR B XOR Cin\n; Cout  = (A AND B) OR (Cin AND (A XOR B))\n;\n; 8086 ADD instruction uses a 16-bit ripple carry adder:\nMOV AX, 7FFFh       ; 0111 1111 1111 1111\nADD AX, 0001h       ; Carry ripples through all 16 bits\n                    ; AX = 8000h, Carry flag = 0" },
    { t: "The ALU: Arithmetic Logic Unit", d: "The ALU is the heart of the microprocessor. It combines adders, logic gates, and multiplexers to perform operations selected by the instruction decoder. The 8086 ALU handles ADD, SUB, AND, OR, XOR, NOT, shift, rotate, and compare -- all using the same circuit with different control signals.", code: "; The 8086 ALU sets status flags after operations:\nMOV AX, 0FFFFh\nADD AX, 0001h       ; AX = 0000h\n                    ; Zero Flag (ZF) = 1 (result is zero)\n                    ; Carry Flag (CF) = 1 (unsigned overflow)\n\nMOV AX, 7FFFh\nADD AX, 0001h       ; AX = 8000h\n                    ; Overflow Flag (OF) = 1 (signed overflow)\n                    ; Sign Flag (SF) = 1 (MSB is 1)" },
    { t: "Flip-Flops and State", d: "Logic gates alone are stateless -- they forget. Flip-flops (bistable circuits) store one bit of memory. An SR flip-flop uses two cross-coupled NAND gates. A D flip-flop captures input on a clock edge. Registers in the 8086 are arrays of D flip-flops: AX is sixteen D flip-flops clocked together.", code: "; Each bit in a register is a flip-flop:\n; AX register = 16 D flip-flops\n; When you execute MOV AX, 1234h:\n;   - On the next clock edge\n;   - Flip-flop 0 stores 0 (bit 0 of 1234h)\n;   - Flip-flop 1 stores 0\n;   - Flip-flop 2 stores 1\n;   - ...\n;   - Flip-flop 12 stores 1\n;   - All 16 bits captured simultaneously" },
    { t: "Clock and Synchronization", d: "The clock signal is a square wave that synchronizes all flip-flops. On each rising edge, flip-flops capture new data and logic gates settle to new outputs. The 8086 runs at 5-10 MHz. Each instruction takes multiple clock cycles: MOV takes 2 cycles, ADD takes 3, MUL takes up to 133 cycles.", code: "; Clock timing for 8086 at 5 MHz:\n; 1 clock cycle = 1/5,000,000 = 200 nanoseconds\n;\n; Instruction cycle counts:\n; MOV reg, imm  = 4 cycles  = 800 ns\n; ADD reg, reg  = 3 cycles  = 600 ns\n; MUL reg       = ~130 cycles = 26,000 ns\n; DIV reg       = ~160 cycles = 32,000 ns" },
    { t: "From Gates to Processors", d: "A processor is built in layers: gates form adders and multiplexers, adders form the ALU, flip-flops form registers, control logic decodes instructions, and buses connect everything. The 8086 has roughly 29,000 transistors arranged into these functional blocks -- all from the same AND, OR, NOT building blocks.", code: "; Hierarchy of digital building blocks:\n; Transistors -> Gates (AND, OR, NOT)\n;   -> Combinational circuits (Adders, Muxes, Decoders)\n;   -> Sequential circuits (Flip-flops, Registers, Counters)\n;   -> Functional units (ALU, Control Unit, Bus Interface)\n;   -> Complete Microprocessor (Intel 8086)\n;\n; The 8086 contains:\n; - 16-bit ALU\n; - 14 registers (each = array of flip-flops)\n; - Instruction decoder (combinational logic)\n; - Bus Interface Unit (sequential + combinational)\n; - Execution Unit" }
  ],
  whatIs: "Digital logic is the foundation of all digital electronics. Using simple logic gates (AND, OR, NOT, XOR) that make binary decisions, engineers build adders for arithmetic, flip-flops for memory, and control circuits for instruction decoding. Every microprocessor, including the Intel 8086, is constructed entirely from these basic logic elements organized into an Arithmetic Logic Unit (ALU), registers, and a control unit synchronized by a clock signal.",
  realWorld: "When your 8086-based computer executes ADD AX, BX, the instruction decoder activates the ALU's addition circuit -- a chain of 16 full adders. Each adder is built from AND, OR, and XOR gates. The carry ripples from bit 0 to bit 15, and the final result is captured in AX's flip-flops on the next clock edge. Status flags (Zero, Carry, Overflow, Sign) are set by additional gate circuits monitoring the result. This entire operation takes about 3 clock cycles -- 600 nanoseconds at 5 MHz.",
  code: "; 8086 Assembly: Using bitwise logic to implement a 4-bit adder manually\n; This demonstrates how ADD works internally using gates\n\n.MODEL SMALL\n.STACK 100h\n.CODE\nMAIN PROC\n  ; We will add two 4-bit values using only AND, XOR, and SHL\n  ; A = 0101 (5), B = 0011 (3), Expected: 1000 (8)\n\n  MOV AL, 05h          ; A = 0101\n  MOV BL, 03h          ; B = 0011\n  MOV CL, 00h          ; Carry = 0\n\nADD_LOOP:\n  MOV DL, AL           ; Save A\n  XOR AL, BL           ; Sum without carry (half add)\n  AND DL, BL           ; Generate carry bits\n  SHL DL, 1            ; Shift carry to next position\n\n  MOV BL, DL           ; BL = new carry to propagate\n  CMP BL, 00h          ; Any carries left?\n  JNE ADD_LOOP         ; If yes, keep propagating\n\n  ; AL now contains the result: 08h (5 + 3 = 8)\n\n  MOV AH, 4Ch\n  INT 21h\nMAIN ENDP\nEND MAIN",
  funFact: "The NAND gate is called a 'universal gate' because you can build ANY other logic gate using only NAND gates. AND = NAND followed by NAND(inverter). OR = NAND the inverted inputs. NOT = NAND with both inputs tied together. In fact, early computers like the Apollo Guidance Computer were built using only NOR gates -- about 5,600 of them, wired by hand by women workers at a Raytheon factory.",
  quiz: [
    { q: "What is the output of AND when inputs are 1 and 0?", opts: ["1", "0", "Undefined", "Depends on the clock"], ans: 1 },
    { q: "Which operation is used to zero a register fastest on the 8086?", opts: ["MOV AX, 0", "SUB AX, AX", "XOR AX, AX", "AND AX, 0"], ans: 2 },
    { q: "How many D flip-flops make up the 8086's AX register?", opts: ["8", "16", "20", "32"], ans: 1 },
    { q: "What does a full adder have that a half adder does not?", opts: ["Sum output", "Carry output", "Carry input", "XOR gate"], ans: 2 },
    { q: "Approximately how many transistors are in the Intel 8086?", opts: ["2,300", "29,000", "290,000", "1,000,000"], ans: 1 }
  ],
  challenge: "Using only 8086 bitwise instructions (AND, OR, XOR, NOT, SHL, SHR), write a program that multiplies AL by 2 without using MUL or ADD. Then extend it to multiply by 10 (hint: multiply by 8 and multiply by 2, then combine the results). Verify your answer by checking AX after execution.",
  resources: [
    { type: "article", title: "Logic Gates - All About Circuits", url: "https://www.allaboutcircuits.com/textbook/digital/chpt-3/logic-gates/", source: "All About Circuits" },
    { type: "video", title: "How Computers Add Numbers", url: "https://www.youtube.com/watch?v=VBDoT8o4q00", source: "YouTube" },
    { type: "simulator", title: "Digital Logic Simulator", url: "https://logic.ly/demo/", source: "Logic.ly" },
    { type: "article", title: "8086 Flag Register", url: "https://www.geeksforgeeks.org/flag-register-8086-microprocessor/", source: "GeeksforGeeks" }
  ],
  eli5: "Imagine you have three magic stamps. The AND stamp only marks a paper if you press BOTH buttons. The OR stamp marks a paper if you press EITHER button. The NOT stamp flips whatever you give it -- give it a smiley face, it stamps a frown. Now imagine you have millions of these tiny stamps all connected together, stamping faster than you can blink. That is how a computer chip does math and makes decisions!",
  codeWalkthrough: [
    "MOV AL, 05h / MOV BL, 03h -- We load our two 4-bit numbers: A=5 (0101) and B=3 (0011). These are the values we want to add using only logic operations.",
    "MOV DL, AL -- Save a copy of A in DL because XOR will overwrite AL. We need the original A for the carry calculation.",
    "XOR AL, BL -- XOR produces the 'sum without carry' for each bit position. 0101 XOR 0011 = 0110. This is exactly what a half adder's Sum output does for each bit.",
    "AND DL, BL -- AND finds positions where both bits are 1, which is where carries are generated. 0101 AND 0011 = 0001. Carry is generated at bit position 0.",
    "SHL DL, 1 -- Shift the carry bits left by one position because a carry affects the next higher bit. 0001 becomes 0010.",
    "MOV BL, DL / CMP BL, 00h / JNE ADD_LOOP -- We propagate carries by looping. The carry bits become the new B value. When no more carries remain (BL=0), the addition is complete.",
    "After the loop: First iteration gives AL=0110, carry=0010. Second iteration: 0110 XOR 0010 = 0100, carry = 0010 AND 0110 shifted = 0100. Third iteration: 0100 XOR 0100 = 0000... wait, let me trace again -- actually AL=1000 = 8. The ripple carry algorithm terminates when all carries are resolved."
  ],
  bugChallenge: { code: "MOV AL, 0Fh\nMOV BL, 0Fh\nAND AL, BL\nJZ  RESULT_ZERO\n; Code continues expecting AL might be zero...", hint: "Think about what 0Fh AND 0Fh actually produces. When does AND result in zero?", answer: "0Fh AND 0Fh = 0Fh (any value AND-ed with itself returns itself, not zero). The JZ will never trigger here. If the intent was to check if two values are equal, the correct instruction is XOR AL, BL (which gives zero when both values are the same) or CMP AL, BL followed by JZ." },
  difficulty: "beginner",
  prereqs: [3]
},
{
  id: 5,
  title: "Fetch-Decode-Execute Cycle",
  subtitle: "The heartbeat of every processor — the three-step loop that runs millions of times per second",
  analogy: "Imagine you work at a restaurant. Each order follows the same cycle: (1) Fetch — the waiter picks up the next order slip from the queue, (2) Decode — the chef reads the slip to understand what dish to make, (3) Execute — the chef actually cooks the dish. Then the waiter grabs the next slip and the cycle repeats endlessly, all day long. A microprocessor works exactly the same way with instructions instead of order slips.",
  points: [
    { t: "The Three-Step Cycle", d: "Every instruction the CPU runs goes through three fundamental phases: Fetch (retrieve the instruction from memory), Decode (figure out what the instruction means), and Execute (perform the operation). This cycle repeats for every single instruction in your program, millions of times per second.", code: "; Simplified cycle for: MOV AX, 05h\n; FETCH:   CPU sends IP address to memory bus\n;          Memory returns opcode bytes\n; DECODE:  Control unit interprets opcode\n;          Recognizes 'MOV AX, immediate'\n; EXECUTE: Places value 05h into AX register" },
    { t: "Fetch Phase — Getting the Instruction", d: "During the fetch phase, the CPU places the value of the Instruction Pointer (IP) onto the address bus. The memory at that address responds by placing the instruction opcode onto the data bus. The CPU reads those bytes into its instruction register and increments IP to point to the next instruction.", code: "; Fetch phase internals:\n;   1. Address bus <- CS:IP (physical address)\n;   2. Memory responds with opcode byte(s)\n;   3. Opcode stored in Instruction Register (IR)\n;   4. IP incremented by instruction length\n;\n; For 8086: IP incremented automatically\n; Physical address = CS * 16 + IP" },
    { t: "Decode Phase — Understanding the Instruction", d: "The control unit examines the opcode in the instruction register and determines: what operation to perform (ADD, MOV, JMP, etc.), which registers or memory locations are involved, and how many additional bytes (operands) need to be read. The decoder activates the correct internal data paths.", code: "; Decode phase for different opcodes:\n; Opcode B8h -> MOV AX, imm16 (2 more bytes needed)\n; Opcode 01h -> ADD r/m, reg  (ModR/M byte follows)\n; Opcode EBh -> JMP short     (1 offset byte follows)\n;\n; The decoder is essentially a lookup table\n; mapping opcodes to micro-operations" },
    { t: "Execute Phase — Performing the Operation", d: "The CPU carries out the decoded instruction. This could mean: transferring data between registers, sending values to the ALU for arithmetic, reading or writing memory, or modifying the instruction pointer for a jump. The result is stored in the destination specified by the instruction.", code: "; Execute examples:\n; MOV AX, 05h    -> AX = 0005h (data transfer)\n; ADD AX, BX     -> ALU adds AX + BX, result in AX\n; JMP 0200h      -> IP = 0200h (control transfer)\n; CMP AX, 00h    -> ALU subtracts, sets flags only\n; PUSH AX        -> SP decremented, AX written to stack" },
    { t: "The Role of the Instruction Pointer", d: "The IP (Instruction Pointer) is the CPU's bookmark. It always holds the address of the next instruction to fetch. After each fetch, IP is automatically incremented. Jump instructions (JMP, JE, CALL) modify IP directly, changing the flow of execution.", code: "; IP tracking through a program:\n; Address  Instruction      IP before -> IP after\n; 0100h    MOV AX, 05h      0100h -> 0103h (+3 bytes)\n; 0103h    ADD AX, 03h      0103h -> 0106h (+3 bytes)\n; 0106h    JMP 0100h        0106h -> 0100h (jump!)\n; 0100h    MOV AX, 05h      0100h -> 0103h (loop)" },
    { t: "Instruction Pipelining in 8086", d: "The 8086 has a 6-byte prefetch queue managed by the Bus Interface Unit (BIU). While the Execution Unit (EU) is executing the current instruction, the BIU fetches the next instructions ahead of time. This overlap means the CPU rarely has to wait for a fetch — a primitive form of pipelining.", code: "; 8086 prefetch queue overlap:\n; Time ->  T1    T2    T3    T4    T5    T6\n; BIU:   [Fetch instr2][Fetch instr3][Fetch..]\n; EU:    [Execute instr1  ][Execute instr2  ]\n;\n; The 6-byte queue holds upcoming opcodes\n; EU pulls from queue, BIU refills it\n; Result: faster throughput than strict serial" },
    { t: "What Happens on a Branch", d: "When a jump or conditional branch is executed, the prefetch queue becomes invalid because the CPU is going to a different address. The BIU must flush the queue and start fetching from the new target address. This causes a brief stall known as a pipeline flush or branch penalty.", code: "; Branch penalty example:\n; 0100h: CMP AX, 0     ; EU executes, BIU prefetches\n; 0104h: JE 0200h      ; Jump if equal\n;\n; If jump taken:\n;   Queue has bytes from 0106h, 0107h... (wrong!)\n;   BIU flushes queue\n;   BIU starts fetching from 0200h\n;   EU stalls until new bytes arrive\n;   ~4 clock cycles penalty" },
    { t: "Bus Interface Unit vs Execution Unit", d: "The 8086 CPU is internally divided into two independent units. The BIU handles all communication with the outside world: fetching instructions, reading memory, writing memory. The EU handles decoding and executing instructions. They work in parallel, communicating through the instruction queue.", code: "; BIU (Bus Interface Unit):\n;   - Segment registers: CS, DS, SS, ES\n;   - Instruction Pointer (IP)\n;   - Address adder (generates 20-bit address)\n;   - 6-byte prefetch queue\n;   - Bus control logic\n;\n; EU (Execution Unit):\n;   - General registers: AX, BX, CX, DX\n;   - Pointer registers: SP, BP, SI, DI\n;   - ALU and flags register\n;   - Instruction decoder" },
    { t: "Cycle Timing and Clock Dependence", d: "Each phase of the fetch-decode-execute cycle takes a specific number of clock cycles (T-states). A simple register MOV might take 2 clocks, while a memory-to-register ADD might take 9+. The CPU clock speed determines how fast these cycles complete. An 8086 at 5 MHz completes one T-state every 200 nanoseconds.", code: "; Clock cycles for common 8086 instructions:\n; MOV reg, reg     ->  2 clocks\n; MOV reg, imm     ->  4 clocks\n; MOV reg, [mem]   ->  8+EA clocks\n; ADD reg, reg     ->  3 clocks\n; ADD reg, [mem]   ->  9+EA clocks\n; MUL reg          -> 70-77 clocks (16-bit)\n; JMP near         -> 15 clocks" },
    { t: "Interrupts and the Cycle", d: "The CPU checks for pending interrupts at the end of each instruction's execute phase (not mid-instruction). If an interrupt is pending and IF=1, the CPU pushes flags, CS, and IP onto the stack, then fetches the interrupt handler address from the interrupt vector table — beginning the fetch-decode-execute cycle at the handler.", code: "; Interrupt check after each instruction:\n; ... execute MOV AX, 05h ...\n; Check INTR pin -> interrupt pending?\n;   If IF=1 and INTR asserted:\n;     PUSH flags, CS, IP onto stack\n;     Read vector table at INTR_NUM * 4\n;     CS:IP = handler address from table\n;     Begin fetch-decode-execute at handler\n;   If IF=0:\n;     Continue to next instruction" }
  ],
  whatIs: "The Fetch-Decode-Execute cycle is the fundamental operating loop of every CPU. In the Fetch phase, the processor retrieves the next instruction from memory using the Instruction Pointer. In the Decode phase, the control unit interprets the opcode to determine what operation and operands are involved. In the Execute phase, the CPU performs the actual operation. This three-step cycle repeats for every instruction the processor runs. The 8086 enhances this basic cycle with a 6-byte prefetch queue that overlaps fetching and execution for better performance.",
  realWorld: "Every program you have ever run — from a web browser to a video game — was ultimately executed as billions of fetch-decode-execute cycles. When your PC boots, the very first cycle fetches the instruction at address FFFF0h (the reset vector). From that moment until you shut down, the cycle never stops. Modern CPUs run this loop billions of times per second and add sophisticated features like out-of-order execution, branch prediction, and speculative execution — but the fundamental three-step loop is the same one the 8086 used in 1978.",
  code: `; Complete fetch-decode-execute trace for a small program
; Running on 8086, starting at CS:IP = 0000:0100

; Program in memory:
; 0100h: B8 05 00    ; MOV AX, 0005h
; 0103h: BB 03 00    ; MOV BX, 0003h
; 0106h: 01 D8       ; ADD AX, BX
; 0108h: F4          ; HLT

; --- Cycle 1: MOV AX, 0005h ---
; FETCH:   IP=0100h, read bytes B8 05 00 from memory
; DECODE:  B8 = MOV AX, imm16 -> need 2 more bytes (05 00)
; EXECUTE: AX <- 0005h, IP advanced to 0103h

; --- Cycle 2: MOV BX, 0003h ---
; FETCH:   IP=0103h, read bytes BB 03 00 from memory
; DECODE:  BB = MOV BX, imm16 -> need 2 more bytes (03 00)
; EXECUTE: BX <- 0003h, IP advanced to 0106h

; --- Cycle 3: ADD AX, BX ---
; FETCH:   IP=0106h, read bytes 01 D8 from memory
; DECODE:  01 = ADD r/m16, r16; D8 = ModR/M for AX, BX
; EXECUTE: ALU computes 0005h + 0003h = 0008h
;          AX <- 0008h, flags updated (ZF=0, CF=0)
;          IP advanced to 0108h

; --- Cycle 4: HLT ---
; FETCH:   IP=0108h, read byte F4 from memory
; DECODE:  F4 = HLT (halt processor)
; EXECUTE: CPU enters halt state, cycle stops
;          (only RESET, NMI, or INTR can wake it)`,
  funFact: "The 8086's 6-byte prefetch queue was considered revolutionary in 1978. It was one of the first commercial processors to overlap instruction fetching and execution. This simple form of pipelining gave the 8086 a significant speed advantage over the 8085, which had to wait for each fetch to complete before executing. Modern CPUs have taken this idea to extremes — an Intel Core i9 has a pipeline over 20 stages deep!",
  quiz: [
    { q: "What are the three phases of the basic CPU instruction cycle, in order?", opts: ["Read, Write, Store", "Fetch, Decode, Execute", "Load, Compute, Save", "Input, Process, Output"], ans: 1 },
    { q: "What register holds the address of the next instruction to be fetched in the 8086?", opts: ["AX (Accumulator)", "SP (Stack Pointer)", "IP (Instruction Pointer)", "SI (Source Index)"], ans: 2 },
    { q: "What happens to the 8086 prefetch queue when a jump instruction is taken?", opts: ["It continues normally since jumps don't affect fetching", "It is flushed and refilled from the new target address", "It doubles in size to accommodate the branch", "It saves the current queue to the stack"], ans: 1 },
    { q: "Which internal unit of the 8086 is responsible for fetching instructions from memory?", opts: ["Execution Unit (EU)", "Arithmetic Logic Unit (ALU)", "Bus Interface Unit (BIU)", "Control Unit (CU)"], ans: 2 },
    { q: "When does the 8086 check for pending maskable interrupts (INTR)?", opts: ["In the middle of executing each instruction", "At the end of each instruction's execution", "Only during HLT state", "During the fetch phase of each cycle"], ans: 1 }
  ],
  challenge: "Write a small 8086 assembly program (5-8 instructions) and trace the complete fetch-decode-execute cycle for each instruction. For each cycle, write down: (1) the value of IP before the fetch, (2) the bytes fetched from memory, (3) what the decoder determines, and (4) what changes during execution (registers, flags, memory). Include at least one conditional jump to show what happens to the prefetch queue when a branch is taken vs not taken.",
  resources: [
    { type: "docs", title: "Instruction Cycle - Wikipedia", url: "https://en.wikipedia.org/wiki/Instruction_cycle", source: "Wikipedia" },
    { type: "video", title: "Fetch Decode Execute Cycle Explained", url: "https://www.youtube.com/watch?v=Z5JC9Ve1sfI", source: "YouTube - Computerphile" },
    { type: "docs", title: "8086 Internal Architecture", url: "https://www.geeksforgeeks.org/internal-architecture-of-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "article", title: "8086 BIU and EU Explained", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_functional_units.htm", source: "TutorialsPoint" }
  ],
  eli5: "Think of a robot following a recipe book. Step 1 (Fetch): The robot looks at the next line in the recipe. Step 2 (Decode): The robot reads and understands what that line says — like 'add 2 cups of flour.' Step 3 (Execute): The robot actually scoops and adds the flour. Then it moves its finger to the next line and starts over. The robot does this for every single line until the recipe is done. That's exactly what a CPU does with instructions!",
  codeWalkthrough: [
    "Our program starts at address 0100h. The CPU's Instruction Pointer (IP) is set to 0100h, ready to begin the first fetch.",
    "Cycle 1 FETCH: The BIU puts address 0100h on the address bus. Memory responds with bytes B8 05 00. These are loaded into the instruction register.",
    "Cycle 1 DECODE: The decoder sees opcode B8h and recognizes it as 'MOV AX, immediate 16-bit value.' It knows to read the next 2 bytes (05 00) as the value 0005h (little-endian).",
    "Cycle 1 EXECUTE: The value 0005h is loaded into register AX. IP is advanced by 3 bytes (instruction length) to 0103h.",
    "Cycle 2 follows the same pattern for MOV BX, 0003h — BX gets loaded with 0003h, IP advances to 0106h.",
    "Cycle 3 FETCH: Bytes 01 D8 are fetched from address 0106h. Meanwhile, the BIU may have already prefetched these into the 6-byte queue.",
    "Cycle 3 DECODE: Opcode 01h means 'ADD r/m16, r16'. The ModR/M byte D8h specifies the destination is AX and the source is BX.",
    "Cycle 3 EXECUTE: The ALU adds AX (0005h) + BX (0003h) = 0008h. The result goes into AX. Flags are updated: ZF=0 (not zero), CF=0 (no carry).",
    "Cycle 4: The HLT instruction (F4h) is fetched, decoded, and executed. The CPU enters halt state and stops the fetch-decode-execute cycle until an interrupt or reset occurs."
  ],
  bugChallenge: {
    code: `; Program to add numbers 1+2+3+4+5 = 15
; Expected: AX = 000Fh (15 decimal)

MOV AX, 0000h    ; sum = 0
MOV CX, 0005h    ; counter = 5

LOOP_START:
  ADD AX, CX     ; sum += counter
  DEC CX         ; counter--
  JNZ LOOP_START ; jump if counter != 0

; BUG: What if we replaced JNZ with JMP?
; JMP LOOP_START  ; unconditional jump`,
    hint: "Think about what happens to the fetch-decode-execute cycle if the jump is unconditional. When would CX reach zero, and would the loop ever check?",
    answer: "Bug: If JNZ is replaced with JMP (unconditional jump), the loop never terminates. Even though DEC CX eventually makes CX = 0, JMP does not check any flags — it always jumps back to LOOP_START. CX would decrement past 0 to FFFFh, then keep going forever. The fetch-decode-execute cycle would endlessly repeat the loop body. JNZ works correctly because it checks the Zero Flag (ZF) set by DEC — when CX becomes 0, ZF=1 and JNZ does NOT jump, allowing execution to fall through and end."
  },
  difficulty: "beginner",
  prereqs: [1, 4]
},
{
  id: 6,
  title: "Registers, ALU, and Buses",
  subtitle: "The three pillars of processor hardware — where data lives, how it's computed, and how it moves",
  analogy: "Think of the CPU as a workshop. Registers are the workbench — small surfaces right in front of you where you keep the parts you're currently working on. The ALU is your set of tools — drills, saws, and wrenches that transform those parts. Buses are the conveyor belts connecting the workbench to the warehouse (memory) — one belt carries the address label (address bus), another carries the actual parts (data bus), and a third carries instructions like 'send' or 'receive' (control bus).",
  points: [
    { t: "What Are Registers?", d: "Registers are tiny, ultra-fast storage locations inside the CPU. They hold the data the processor is actively working on. Accessing a register takes 0 wait states — it's the fastest storage in the entire system. The 8086 has fourteen 16-bit registers, each with a specific purpose.", code: "; 8086 register set (all 16-bit):\n; General: AX, BX, CX, DX\n; Pointer: SP (Stack Ptr), BP (Base Ptr)\n; Index:   SI (Source), DI (Destination)\n; Segment: CS, DS, SS, ES\n; Special: IP (Instruction Ptr), FLAGS" },
    { t: "General-Purpose Registers (AX, BX, CX, DX)", d: "These four registers can be used for arithmetic, logic, and data transfer. Each can be split into two 8-bit halves: AH/AL, BH/BL, CH/CL, DH/DL. They also have special implicit uses — AX for multiply/divide, BX for base addressing, CX as a counter, DX for I/O port addressing.", code: "; General purpose registers and their special roles:\nMOV AX, 0050h  ; AX = accumulator (MUL/DIV result)\nMOV BX, 2000h  ; BX = base register ([BX] addressing)\nMOV CX, 000Ah  ; CX = count register (LOOP, REP)\nMOV DX, 03F8h  ; DX = data register (IN/OUT port)\n\n; 8-bit access:\nMOV AH, 09h    ; Upper byte of AX\nMOV AL, 41h    ; Lower byte of AX\n; Now AX = 0941h" },
    { t: "Pointer and Index Registers", d: "SP (Stack Pointer) tracks the top of the stack. BP (Base Pointer) accesses stack frames for function parameters. SI (Source Index) and DI (Destination Index) are used in string operations and memory addressing. These enable structured data access patterns essential for real programs.", code: "; Stack operations use SP:\nPUSH AX        ; SP = SP - 2, then [SS:SP] = AX\nPOP BX         ; BX = [SS:SP], then SP = SP + 2\n\n; Function parameter access with BP:\nMOV BP, SP     ; BP points to stack frame\nMOV AX, [BP+4] ; access parameter on stack\n\n; String operations use SI and DI:\nMOV SI, 1000h  ; source address\nMOV DI, 2000h  ; destination address\nMOVSB          ; copy byte [DS:SI] -> [ES:DI]" },
    { t: "Segment Registers (CS, DS, SS, ES)", d: "The 8086 uses segmented memory to access 1 MB with 16-bit registers. CS (Code Segment) pairs with IP for instruction fetch. DS (Data Segment) is the default for data access. SS (Stack Segment) pairs with SP/BP. ES (Extra Segment) is used for string destinations and extra data access.", code: "; Segment registers and their pairings:\n; CS:IP -> code fetch (physical = CS*16 + IP)\n; DS:BX -> default data (physical = DS*16 + BX)\n; SS:SP -> stack access (physical = SS*16 + SP)\n; ES:DI -> string destination\n\n; Physical address calculation:\nMOV DS, 1000h  ; DS = 1000h\nMOV BX, 0050h  ; offset = 0050h\nMOV AX, [BX]   ; address = 1000h*16 + 0050h\n                ; = 10000h + 0050h = 10050h" },
    { t: "The FLAGS Register", d: "FLAGS is a 16-bit register where individual bits record the result of the last operation. Key flags: ZF (zero — result was 0), CF (carry — unsigned overflow), SF (sign — result is negative), OF (overflow — signed overflow), IF (interrupt enable), DF (direction for string ops). Conditional jumps test these flags.", code: "; FLAGS bit positions:\n; Bit 0:  CF (Carry Flag)\n; Bit 2:  PF (Parity Flag)\n; Bit 4:  AF (Auxiliary Carry)\n; Bit 6:  ZF (Zero Flag)\n; Bit 7:  SF (Sign Flag)\n; Bit 9:  IF (Interrupt Flag)\n; Bit 10: DF (Direction Flag)\n; Bit 11: OF (Overflow Flag)\n\nCMP AX, BX     ; sets flags based on AX - BX\nJE equal       ; jump if ZF=1 (AX == BX)\nJG greater     ; jump if ZF=0 and SF=OF" },
    { t: "The ALU — Arithmetic Logic Unit", d: "The ALU is the CPU's calculator. It performs arithmetic (ADD, SUB, MUL, DIV, INC, DEC) and logic operations (AND, OR, XOR, NOT, shift, rotate). It takes two inputs, performs the operation, produces a result, and updates the FLAGS register. Every computation in the CPU ultimately passes through the ALU.", code: "; ALU arithmetic operations:\nADD AX, BX     ; AX = AX + BX, flags updated\nSUB AX, 05h    ; AX = AX - 5, flags updated\nMUL BX         ; DX:AX = AX * BX (unsigned)\nDIV CX         ; AX = DX:AX / CX, DX = remainder\n\n; ALU logic operations:\nAND AX, 00FFh  ; mask upper byte (AX & 00FF)\nOR  AX, 8000h  ; set bit 15 (AX | 8000)\nXOR AX, AX     ; clear AX (fastest way to zero)\nSHL AX, 1      ; shift left = multiply by 2" },
    { t: "The Address Bus (20 bits)", d: "The address bus is a one-way highway from the CPU to memory. It carries the address of the memory location the CPU wants to access. The 8086 has a 20-bit address bus, allowing it to address 2^20 = 1,048,576 bytes = 1 MB of memory. The address is formed by combining a segment register and an offset.", code: "; 8086 address bus: 20 bits wide\n; Addressable range: 00000h to FFFFFh (1 MB)\n;\n; Address formation:\n;   Physical = Segment * 16 + Offset\n;   Physical = Segment << 4 + Offset\n;\n; Example: CS=F000h, IP=FFF0h\n;   Physical = F000h * 16 + FFF0h\n;            = F0000h + FFF0h\n;            = FFFF0h  (reset vector!)" },
    { t: "The Data Bus (16 bits)", d: "The data bus is a bidirectional highway that carries actual data between the CPU and memory or I/O. The 8086 has a 16-bit data bus, so it can transfer 16 bits (one word) in a single bus cycle. This is twice the bandwidth of the 8088's 8-bit data bus, which is why the 8086 is faster for 16-bit operations.", code: "; 8086 data bus: 16 bits wide\n; Can transfer 1 byte or 1 word per bus cycle\n\nMOV AX, [1000h]  ; reads 16 bits in ONE bus cycle\n                  ; AL = byte at 1000h\n                  ; AH = byte at 1001h\n\nMOV AL, [1000h]  ; reads 8 bits in one bus cycle\n\n; Contrast with 8088: 8-bit data bus\n; MOV AX, [1000h] on 8088 needs TWO bus cycles\n; (one for low byte, one for high byte)" },
    { t: "The Control Bus", d: "The control bus is a collection of individual signal lines that coordinate all activity. Key signals include: RD (read), WR (write), M/IO (memory vs I/O), ALE (address latch enable), INTA (interrupt acknowledge), HOLD/HLDA (DMA), and READY (wait states). These signals synchronize the CPU, memory, and I/O devices.", code: "; Control bus signals during a memory read:\n;   M/IO  = 1  (selecting memory, not I/O)\n;   RD    = 0  (read operation active)\n;   WR    = 1  (not writing)\n;   ALE   = pulse (latch the address)\n;   READY = 1  (memory is fast enough)\n;\n; Control bus signals during I/O write:\n;   M/IO  = 0  (selecting I/O port)\n;   RD    = 1  (not reading)\n;   WR    = 0  (write operation active)" },
    { t: "How They Work Together", d: "A single instruction like MOV AX, [2000h] orchestrates all three: the address bus carries the 20-bit address (DS*16+2000h), the control bus signals a memory read (M/IO=1, RD=0), and the data bus carries the 16-bit value back to AX. Registers hold both the inputs and the result. The ALU is used when arithmetic or logic is involved.", code: "; Trace of ADD AX, [BX] — all three work together:\n;\n; Step 1: EU requests data from BIU\n;   Address bus: DS*16 + BX -> physical address\n;   Control bus: M/IO=1, RD=0 (memory read)\n;\n; Step 2: Memory responds\n;   Data bus: memory content -> temp register\n;   Control bus: RD released\n;\n; Step 3: ALU executes\n;   ALU inputs: AX and temp register\n;   ALU operation: addition\n;   Result -> AX, FLAGS updated" }
  ],
  whatIs: "Registers are small, fast storage locations inside the CPU that hold data being actively processed. The ALU (Arithmetic Logic Unit) is the computational engine that performs all arithmetic and logic operations. Buses are the communication highways: the address bus (20-bit, one-way) carries memory addresses, the data bus (16-bit, bidirectional) carries data values, and the control bus carries timing and command signals. Together, they form the core hardware architecture of the 8086 processor.",
  realWorld: "When you press a key on your keyboard, the data travels along a bus to an I/O port. The CPU reads it using an IN instruction — the address bus specifies the port number, the control bus signals an I/O read, and the data bus carries the key code into a register. The ALU might then compare it (is it Enter? Escape?) and a conditional jump decides what to do next. Every interaction with your computer — every click, every pixel, every network packet — passes through these registers, the ALU, and buses.",
  code: `; Demonstrating registers, ALU, and buses in action
; Program: Add two numbers from memory, store result

; Setup segment
MOV AX, 1000h
MOV DS, AX         ; DS = 1000h (data segment base)

; Read two values from memory (uses address + data bus)
MOV AX, [0010h]    ; Address bus: 10000h + 0010h = 10010h
                    ; Control bus: M/IO=1, RD=0
                    ; Data bus: value at 10010h -> AX

MOV BX, [0020h]    ; Address bus: 10000h + 0020h = 10020h
                    ; Data bus: value at 10020h -> BX

; ALU performs addition (entirely inside the CPU)
ADD AX, BX         ; ALU input A: AX
                    ; ALU input B: BX
                    ; ALU output: AX = AX + BX
                    ; FLAGS updated (CF, ZF, SF, OF, PF, AF)

; Store result back to memory (uses address + data bus)
MOV [0030h], AX    ; Address bus: 10000h + 0030h = 10030h
                    ; Control bus: M/IO=1, WR=0
                    ; Data bus: AX -> memory at 10030h

HLT                ; stop execution`,
  funFact: "The 8086's registers are named after their ancestors! AX stands for 'Accumulator' (from early CPUs where one special register accumulated results), CX for 'Counter' (used with LOOP), and DX for 'Data' (used for I/O port addresses). These names stuck around — even modern x86-64 processors still have RAX, RBX, RCX, RDX, now expanded to 64 bits. The naming convention has survived over 45 years!",
  quiz: [
    { q: "How many addressable bytes can the 8086 access with its 20-bit address bus?", opts: ["64 KB", "256 KB", "1 MB", "16 MB"], ans: 2 },
    { q: "Which register pair is used to form the physical address for instruction fetches?", opts: ["DS and BX", "SS and SP", "CS and IP", "ES and DI"], ans: 2 },
    { q: "What is the width of the 8086 data bus?", opts: ["8 bits", "16 bits", "20 bits", "32 bits"], ans: 1 },
    { q: "Which component of the CPU performs arithmetic and logic operations?", opts: ["Instruction Pointer", "Control Bus", "Prefetch Queue", "ALU (Arithmetic Logic Unit)"], ans: 3 },
    { q: "What does XOR AX, AX accomplish?", opts: ["Sets AX to FFFFh (all ones)", "Clears AX to 0000h (fastest method)", "Copies AX to itself with no effect", "Causes a divide error"], ans: 1 }
  ],
  challenge: "Write an 8086 assembly program that demonstrates all three buses and the ALU working together. Your program should: (1) load two values from specific memory addresses into registers, (2) perform at least three different ALU operations on them (e.g., ADD, AND, SHL), (3) store results back to different memory locations. For each instruction, annotate which bus carries what signal/data. Finally, list all the FLAGS that would be set or cleared after each ALU operation.",
  resources: [
    { type: "docs", title: "8086 Register Organization", url: "https://www.geeksforgeeks.org/register-organization-of-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "CPU Registers, ALU, and Buses", url: "https://www.youtube.com/watch?v=1I5ZMmrOfnA", source: "YouTube - Ben Eater" },
    { type: "docs", title: "8086 Bus Architecture", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_bus_interface_unit.htm", source: "TutorialsPoint" },
    { type: "article", title: "How the ALU Works", url: "https://en.wikipedia.org/wiki/Arithmetic_logic_unit", source: "Wikipedia" }
  ],
  eli5: "Imagine you have a tiny desk (registers) where you keep the toy blocks you're playing with right now. You have a special tool (ALU) that can combine blocks — stacking them, swapping colors, or counting them. And you have three hallways connecting your desk to a giant toy warehouse (memory): one hallway where you yell the shelf number (address bus), one where the toy rolls back and forth (data bus), and one where you wave flags like 'send me a toy!' or 'I'm putting one back!' (control bus).",
  codeWalkthrough: [
    "First we set up the data segment: MOV AX, 1000h / MOV DS, AX puts 1000h into DS. This tells the CPU that our data lives starting at physical address 10000h (1000h * 16).",
    "MOV AX, [0010h] triggers a memory read. The address bus carries 10010h (DS*16 + 0010h). The control bus sets M/IO=1 and RD=0. Memory places the 16-bit value on the data bus, and it flows into AX.",
    "MOV BX, [0020h] does the same for address 10020h. Now we have both operands in registers — fast internal storage, no bus activity needed to use them.",
    "ADD AX, BX is purely internal — no bus activity! The ALU takes AX and BX as inputs, adds them, puts the result in AX, and updates all arithmetic flags (CF, ZF, SF, OF, PF, AF).",
    "MOV [0030h], AX writes the result back to memory. The address bus carries 10030h, the data bus carries the value from AX (outbound this time), and the control bus asserts WR=0.",
    "HLT stops the processor. Notice how even this simple program required coordination of all three buses and the ALU — that is the essence of CPU operation."
  ],
  bugChallenge: {
    code: `; Program to read a byte from I/O port 60h (keyboard)
; and store it in memory at DS:0100h

MOV AX, 2000h
MOV DS, AX        ; DS = 2000h

IN AX, 60h        ; read from keyboard port
MOV [0100h], AX   ; store in memory

; BUG: The keyboard port returns an 8-bit value.
; What's wrong with using AX (16-bit) here?`,
    hint: "Consider what happens when you read a 16-bit value from an 8-bit I/O port. What ends up in the upper byte AH?",
    answer: "Bug: The keyboard controller port 60h returns only an 8-bit scan code, but IN AX, 60h reads 16 bits — it reads port 60h into AL AND port 61h into AH (the next port). Port 61h is the PPI control register, not keyboard data! The upper byte AH will contain unrelated data from port 61h, corrupting your result. Fix: Use IN AL, 60h to read only 8 bits from the correct port, then MOV [0100h], AL to store just the key scan code. Alternatively, zero AH first (XOR AH, AH) if you need the full 16-bit MOV for alignment reasons."
  },
  difficulty: "beginner",
  prereqs: [5]
},
{
  id: 7,
  title: "Clock, T-States, and Machine Cycles",
  subtitle: "How time is measured inside a processor — the rhythm that synchronizes every operation",
  analogy: "Think of the CPU clock as a metronome in an orchestra. Every musician (register, ALU, bus) must act in sync with the beat. One tick of the metronome is a T-state — the smallest unit of time. Several ticks together form a measure (machine cycle), like reading a note from the sheet music or playing a chord. A complete musical phrase (instruction cycle) might need several measures. The faster the metronome, the faster the orchestra plays — that's clock speed.",
  points: [
    { t: "The Clock Signal", d: "The CPU clock is a continuous square wave oscillating between HIGH (1) and LOW (0). Every internal operation is synchronized to this signal. The 8086 uses an external 8284A clock generator that takes a crystal oscillator input and produces the precise clock signal the CPU needs. The 8086 runs at 5 MHz (5 million cycles per second) or 8 MHz for the 8086-2.", code: "; 8284A clock generator:\n;   Crystal input: 15 MHz (divided by 3)\n;   CLK output: 5 MHz to 8086\n;   1 clock period = 1/5MHz = 200 ns\n;\n; Clock waveform:\n;   _____       _____       _____\n;  |     |     |     |     |     |\n;  |     |_____|     |_____|     |__\n;  <-200ns->\n;   HIGH  LOW   HIGH  LOW" },
    { t: "T-States — The Atomic Unit of Time", d: "A T-state (timing state) is one complete clock cycle — one HIGH pulse plus one LOW pulse. It is the smallest measurable unit of CPU time. Every operation inside the 8086 takes a whole number of T-states. Nothing happens between T-states; all state changes occur at clock edges.", code: "; T-state = one complete clock cycle\n; At 5 MHz: 1 T-state = 200 nanoseconds\n;\n; Events happen at clock edges:\n;   Rising edge:  CPU samples inputs\n;   Falling edge: CPU changes outputs\n;\n; T-state diagram:\n;   |<-- T-state -->|\n;   ___              ___\n;  |   |            |   |\n;  |   |____________|   |____\n;  ^                ^\n;  rising edge      next rising edge" },
    { t: "Machine Cycles", d: "A machine cycle is a group of T-states that accomplishes one specific bus operation — like reading a byte from memory, writing to an I/O port, or acknowledging an interrupt. The 8086 has several types of machine cycles: memory read, memory write, I/O read, I/O write, and interrupt acknowledge. Each takes 4 T-states minimum (T1-T4).", code: "; Types of machine cycles in 8086:\n; Memory Read:  T1 - T2 - T3 - T4 (4 T-states)\n; Memory Write: T1 - T2 - T3 - T4 (4 T-states)\n; I/O Read:     T1 - T2 - T3 - T4 (4 T-states)\n; I/O Write:    T1 - T2 - T3 - T4 (4 T-states)\n; INTA cycle:   T1 - T2 - T3 - T4 (4 T-states)\n;\n; With wait states (slow memory):\n; Memory Read:  T1 - T2 - Tw - Tw - T3 - T4" },
    { t: "T1 — Address Phase", d: "During T1, the CPU places the memory address on the address/data bus (AD0-AD15) and the high address on A16-A19. ALE pulses HIGH to tell external latches to capture this address. This is when the system learns which memory location or I/O port is being accessed.", code: "; T1 state activities:\n;   AD0-AD15: carry address bits A0-A15\n;   A16-A19:  carry address bits A16-A19\n;   ALE:      goes HIGH then LOW (latch pulse)\n;   M/IO:     set to 1 (memory) or 0 (I/O)\n;   RD/WR:    not yet asserted\n;\n; External latch (8282) captures address\n; on falling edge of ALE\n; Address is now stable on latch outputs" },
    { t: "T2 — Transition Phase", d: "During T2, the bus transitions. For a read, AD0-AD15 go to high-impedance (tri-state) so memory can drive data onto them. For a write, the CPU places data onto AD0-AD15. The appropriate control signal (RD or WR) is asserted during this state.", code: "; T2 state for memory READ:\n;   AD0-AD15: tri-state (floating)\n;   RD:       asserted LOW (read request)\n;   DEN:      active (enable bus transceivers)\n;   DT/R:     LOW (receive direction)\n;\n; T2 state for memory WRITE:\n;   AD0-AD15: CPU drives data onto bus\n;   WR:       asserted LOW (write request)\n;   DEN:      active\n;   DT/R:     HIGH (transmit direction)" },
    { t: "T3 — Data Transfer Phase", d: "During T3, actual data transfer occurs. For a read, the memory chip has had time to respond and valid data appears on the data bus. The CPU samples the READY pin at the beginning of T3 — if READY is LOW, the CPU inserts wait states (Tw) until the memory signals it is ready.", code: "; T3 state:\n;   READY sampled at start of T3\n;   If READY = 1: proceed normally\n;   If READY = 0: insert Tw states\n;\n; For READ: memory data is valid on bus\n; For WRITE: memory captures data from bus\n;\n; Wait states:\n;   T1 - T2 - Tw - Tw - T3 - T4\n;              ^    ^\n;   CPU idle, waiting for slow memory\n;   Each Tw = 1 additional T-state (200ns)" },
    { t: "T4 — Completion Phase", d: "During T4, the bus cycle wraps up. Control signals (RD or WR) are deasserted. For a read, the CPU has latched the data internally. The bus returns to idle state, and the next machine cycle can begin at the following T1 — or the bus may enter idle T-states (Ti) if no bus activity is needed.", code: "; T4 state:\n;   RD/WR:    deasserted (go HIGH/inactive)\n;   DEN:      deactivated\n;   AD0-AD15: released or idle\n;\n; After T4, the bus enters:\n;   T1 of next machine cycle (if pending)\n;   OR Ti (idle state) if EU needs no bus\n;\n; During Ti states:\n;   Bus is idle, no transfers\n;   EU continues internal execution\n;   BIU may prefetch into queue" },
    { t: "Instruction Cycle = Multiple Machine Cycles", d: "A complete instruction cycle consists of one or more machine cycles needed to fully execute an instruction. A simple MOV reg,reg needs no machine cycle (internal only). A MOV AX,[mem] needs one memory read cycle. A MOV [mem],[mem] would need both a read and write cycle. Complex instructions like MUL can need many cycles.", code: "; Instruction cycle examples:\n;\n; MOV AX, BX -> 0 machine cycles\n;   2 T-states (internal transfer only)\n;\n; MOV AX, [2000h] -> 1 machine cycle\n;   Opcode fetch + Memory read (T1-T2-T3-T4)\n;   Total: ~13 T-states\n;\n; ADD [BX], AX -> 2 machine cycles\n;   Memory read (get current value)\n;   ALU adds\n;   Memory write (store result)\n;   Total: ~24 T-states" },
    { t: "Calculating Execution Time", d: "To find how long an instruction takes in real time, multiply its T-state count by the clock period. At 5 MHz, each T-state is 200 ns. If MOV AX,[2000h] takes 14 T-states, its execution time is 14 * 200 ns = 2800 ns = 2.8 microseconds. This calculation is essential for writing time-critical code.", code: "; Execution time calculation:\n; Clock = 5 MHz -> T = 200 ns per T-state\n;\n; MOV AX, BX:  2 T-states\n;   Time = 2 * 200ns = 400 ns\n;\n; MOV AX, [2000h]: 14 T-states\n;   Time = 14 * 200ns = 2800 ns = 2.8 us\n;\n; MUL BX (16-bit): ~77 T-states\n;   Time = 77 * 200ns = 15,400 ns = 15.4 us\n;\n; Total program time = sum of all instruction times" },
    { t: "Wait States and System Performance", d: "When slow memory or I/O devices cannot respond within the standard T1-T4 window, the READY signal forces wait states (Tw). Each Tw adds one full clock period of delay. Systems with zero wait states are fastest. Adding wait states is like adding speed bumps — the CPU can handle it but throughput drops proportionally.", code: "; Performance impact of wait states:\n;\n; Memory read, 0 wait states:\n;   T1-T2-T3-T4 = 4 T-states = 800 ns\n;\n; Memory read, 1 wait state:\n;   T1-T2-Tw-T3-T4 = 5 T-states = 1000 ns\n;   25% slower!\n;\n; Memory read, 2 wait states:\n;   T1-T2-Tw-Tw-T3-T4 = 6 T-states = 1200 ns\n;   50% slower!\n;\n; Design goal: use fast enough memory\n; for 0 wait state operation" }
  ],
  whatIs: "The CPU clock is a precise square wave signal that synchronizes all internal operations. A T-state is one clock cycle — the smallest unit of CPU time. A machine cycle is a group of 4+ T-states that performs one bus operation (memory read, memory write, I/O read, I/O write). An instruction cycle encompasses all the machine cycles needed to completely execute one instruction. The 8086 at 5 MHz has a T-state of 200 nanoseconds, and instructions range from 2 to 200+ T-states depending on complexity.",
  realWorld: "Clock speed is why you see 'GHz' in CPU specs. A modern 5 GHz processor has T-states of just 0.2 nanoseconds — a thousand times shorter than the 8086's 200 ns. However, clock speed alone does not determine performance — a modern CPU does far more work per T-state through pipelining, superscalar execution, and caching. Understanding T-states and machine cycles is essential for embedded systems where you must guarantee precise timing, such as controlling motors, generating signals, or meeting communication protocol deadlines.",
  code: `; Timing analysis of a complete program on 8086 at 5 MHz
; Each T-state = 200 ns

; --- Program ---
; Instruction         T-states  Time (ns)  Machine Cycles
; -----------------------------------------------------------
MOV AX, 2000h      ;    4       800       opcode fetch only
MOV DS, AX         ;    2       400       internal
MOV CX, 0005h      ;    4       800       opcode fetch only
MOV BX, 0000h      ;    4       800       opcode fetch only

LOOP_START:
  MOV AX, [BX]     ;   13      2600       fetch + mem read
  ADD AX, 0001h    ;    4       800       fetch + internal
  MOV [BX], AX     ;   13      2600       fetch + mem write
  ADD BX, 0002h    ;    4       800       fetch + internal
  DEC CX           ;    2       400       internal
  JNZ LOOP_START   ;   16      3200       fetch (taken=16, not=4)
                    ;    4       800       (final iteration, not taken)

; Loop body per iteration: 13+4+13+4+2+16 = 52 T-states
; Loop body total: 4 iterations * 52 + last * 40 = 248 T-states
; Setup: 4+2+4+4 = 14 T-states
;
; Total: 14 + 248 = 262 T-states
; Total time: 262 * 200 ns = 52,400 ns = 52.4 microseconds`,
  funFact: "The original 8086 ran at 5 MHz, meaning 5 million clock ticks per second. Today's processors run at 5 GHz — exactly 1000 times faster in clock speed. But the real performance difference is even larger because modern CPUs execute multiple instructions per clock cycle (IPC > 1), while the 8086 needed many clocks per instruction (IPC < 1). A modern CPU can be over 100,000 times faster than the 8086 in raw throughput!",
  quiz: [
    { q: "What is a T-state?", opts: ["The time between two instructions", "One complete clock cycle — the smallest unit of CPU time", "The time to execute one machine cycle", "The delay caused by slow memory"], ans: 1 },
    { q: "How long is one T-state on an 8086 running at 5 MHz?", opts: ["100 ns", "200 ns", "500 ns", "1000 ns"], ans: 1 },
    { q: "What happens when the READY pin is LOW at the start of T3?", opts: ["The CPU skips the instruction", "The CPU resets", "The CPU inserts wait states (Tw) until READY goes HIGH", "The CPU switches to a faster clock"], ans: 2 },
    { q: "How many T-states does a basic machine cycle (without wait states) have?", opts: ["2 (T1-T2)", "3 (T1-T2-T3)", "4 (T1-T2-T3-T4)", "6 (T1-T2-T3-T4-T5-T6)"], ans: 2 },
    { q: "If an instruction takes 20 T-states at 5 MHz, what is its execution time?", opts: ["2000 ns (2 microseconds)", "4000 ns (4 microseconds)", "400 ns", "20 ns"], ans: 1 }
  ],
  challenge: "Write an 8086 assembly program that creates a precise time delay of approximately 100 microseconds, assuming a 5 MHz clock (200 ns per T-state). Calculate the exact number of T-states your delay loop takes per iteration, determine how many iterations are needed, and verify your math. Show the T-state count for each instruction in the loop. Hint: You need 100,000 ns / 200 ns = 500 T-states of delay.",
  resources: [
    { type: "docs", title: "8086 Machine Cycle and Timing Diagram", url: "https://www.geeksforgeeks.org/timing-diagram-of-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "Clock and Timing in Microprocessors", url: "https://www.youtube.com/watch?v=FZGugFqdr60", source: "YouTube" },
    { type: "docs", title: "8086 Instruction Timing", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_instruction_sets.htm", source: "TutorialsPoint" },
    { type: "article", title: "Understanding CPU Clock Speed", url: "https://en.wikipedia.org/wiki/Clock_rate", source: "Wikipedia" }
  ],
  eli5: "Imagine a grandfather clock going tick-tock, tick-tock. Each tick-tock is one T-state — the smallest beat of time the CPU knows. To do something simple like picking up a toy, you need a few beats (a machine cycle): tick-put out your hand, tock-grab the toy, tick-pull it back, tock-done! To do something bigger like building a LEGO tower (an instruction), you need several of these grab-and-place actions, each taking a few beats. The faster the clock ticks, the faster you build!",
  codeWalkthrough: [
    "Our timing analysis starts with setup instructions. MOV AX, 2000h takes 4 T-states because it needs to fetch the opcode and the immediate value — but it's fast since no memory data read is needed beyond the instruction fetch.",
    "MOV DS, AX takes only 2 T-states — it's an internal register-to-segment-register transfer, requiring no bus activity beyond the instruction fetch already in the queue.",
    "Inside the loop, MOV AX, [BX] takes 13 T-states. This breaks down into: the opcode fetch machine cycle, address calculation (effective address = DS*16 + BX), and one memory read machine cycle (T1-T2-T3-T4) to get the actual data.",
    "ADD AX, 0001h takes only 4 T-states because the immediate value is part of the instruction stream (already in the prefetch queue) and the addition happens internally in the ALU.",
    "MOV [BX], AX takes 13 T-states — similar to the read but now includes a memory write machine cycle where the data bus carries AX's value out to memory.",
    "DEC CX is blazing fast at 2 T-states — entirely internal, the ALU decrements CX and updates FLAGS.",
    "JNZ LOOP_START takes 16 T-states when the branch is taken (CX is not zero) because it must flush the prefetch queue and fetch from the new target address. On the final iteration when CX=0, the branch is not taken, costing only 4 T-states.",
    "The total execution time of 52.4 microseconds demonstrates how even simple programs can be precisely timed when you know each instruction's T-state count."
  ],
  bugChallenge: {
    code: `; Timing bug: Delay loop designed for 1 ms delay
; Clock: 5 MHz (T-state = 200 ns)
; Need: 1,000,000 ns / 200 ns = 5000 T-states

MOV CX, 1000     ; load counter
DELAY:
  NOP             ; 3 T-states
  NOP             ; 3 T-states
  DEC CX          ; 2 T-states
  JNZ DELAY       ; 16 T-states (taken)
                  ; Total per loop: 3+3+2+16 = 24 T-states
; Expected: 1000 * 24 = 24000 T-states = 4.8 ms
; BUG: The delay is 4.8 ms, not 1 ms!`,
    hint: "The loop body takes 24 T-states per iteration. If you need 5000 T-states total and each iteration costs 24, how many iterations do you actually need?",
    answer: "Bug: The counter value is wrong. With 24 T-states per iteration and a target of 5000 T-states, you need 5000 / 24 = approximately 208 iterations, not 1000. With CX=1000, the delay is 1000 * 24 * 200 ns = 4,800,000 ns = 4.8 ms — almost 5 times too long. Fix: Change MOV CX, 1000 to MOV CX, 208. This gives 208 * 24 = 4992 T-states = 998,400 ns, which is approximately 1 ms. For exact 1 ms, you could use MOV CX, 208 plus a few extra NOP instructions after the loop to fine-tune the remaining 8 T-states."
  },
  difficulty: "intermediate",
  prereqs: [5]
},
{
  id: 8,
  title: "Memory, Addressing, and I/O Concepts",
  subtitle: "How the CPU finds and accesses data — the memory map, addressing modes, and the I/O subsystem",
  analogy: "Imagine a city where every building has a unique street address (memory addressing). The CPU is a delivery driver who needs to find buildings using different methods: sometimes they know the exact address (direct addressing), sometimes they know 'the building 3 doors down from the post office' (based addressing), and sometimes they check a note that says which address to go to (indirect addressing). Memory is the rows of buildings, and I/O ports are special service windows on the city's edge — separate from the main buildings but reachable by the same delivery truck.",
  points: [
    { t: "The 8086 Memory Space — 1 MB", d: "The 8086 has a 20-bit address bus giving access to 2^20 = 1,048,576 bytes (1 MB) of memory, addressed from 00000h to FFFFFh. This memory is shared between RAM, ROM, and memory-mapped devices. The programmer sees a flat 1 MB space, but it is physically divided into segments for access using 16-bit registers.", code: "; 8086 memory map (1 MB):\n; 00000h - 003FFh: Interrupt Vector Table (1 KB)\n; 00400h - 9FFFFh: Conventional RAM (~640 KB)\n; A0000h - BFFFFh: Video memory (128 KB)\n; C0000h - EFFFFh: ROM extensions (192 KB)\n; F0000h - FFFFFh: System BIOS ROM (64 KB)\n; FFFF0h:          Reset vector (first fetch)\n;\n; Total addressable: 00000h to FFFFFh = 1 MB" },
    { t: "Segmented Memory Architecture", d: "Since the 8086 has only 16-bit registers but needs 20-bit addresses, it uses segmentation. A physical address is calculated as: Segment * 16 + Offset (or equivalently, Segment << 4 + Offset). This means multiple segment:offset pairs can point to the same physical address — for example, 1000:0050 and 0FFF:0060 both equal 10050h.", code: "; Physical address calculation:\n; Physical = Segment * 16 + Offset\n;\n; Example 1:\n;   DS = 1000h, offset = 0050h\n;   Physical = 1000h * 10h + 0050h\n;            = 10000h + 0050h = 10050h\n;\n; Example 2 (same physical address!):\n;   DS = 0FFF, offset = 0060h\n;   Physical = 0FFFh * 10h + 0060h\n;            = 0FFF0h + 0060h = 10050h\n;\n; Each segment = 64 KB window into 1 MB" },
    { t: "RAM vs ROM", d: "RAM (Random Access Memory) is volatile read-write memory — it loses content when power is off. ROM (Read-Only Memory) is non-volatile and retains its content permanently. The 8086 system puts the BIOS in ROM at the top of the memory map (near FFFFFh) and user programs/data in RAM at the bottom. The reset vector must be in ROM because RAM is empty at power-on.", code: "; Memory types in an 8086 system:\n;\n; RAM chips (e.g., 6264 = 8KB SRAM):\n;   Read and write\n;   Volatile (lost when power off)\n;   Used for: programs, data, stack\n;\n; ROM chips (e.g., 2764 = 8KB EPROM):\n;   Read only (programmed beforehand)\n;   Non-volatile (survives power off)\n;   Used for: BIOS, boot code, lookup tables\n;\n; Address decoder selects correct chip\n; based on upper address bits" },
    { t: "Addressing Modes — How the CPU Specifies Operands", d: "The 8086 supports multiple addressing modes that determine how the operand's location is calculated. These range from simple (the data is in the instruction itself) to complex (the address is computed from multiple registers plus a displacement). Mastering addressing modes is key to writing efficient assembly code.", code: "; 8086 Addressing Modes:\n;\n; Immediate:     MOV AX, 1234h     ; data in instruction\n; Register:      MOV AX, BX        ; data in register\n; Direct:        MOV AX, [2000h]   ; address in instruction\n; Reg Indirect:  MOV AX, [BX]      ; address in register\n; Based:         MOV AX, [BX+10h]  ; base reg + displacement\n; Indexed:       MOV AX, [SI+10h]  ; index reg + displacement\n; Based+Indexed: MOV AX, [BX+SI]   ; base + index\n; Based+Idx+Disp:MOV AX, [BX+SI+10h] ; all three" },
    { t: "Direct Addressing", d: "In direct addressing, the memory address is specified as a constant in the instruction. The CPU computes the physical address as DS*16 + displacement. This is simple and clear but inflexible — you can only access one fixed location. Useful for accessing known variables at fixed addresses.", code: "; Direct addressing:\nMOV AX, [2000h]   ; read word from DS:2000h\nMOV [3000h], BX   ; write BX to DS:3000h\n\n; Physical address = DS * 16 + 2000h\n; If DS = 1000h:\n;   Physical = 10000h + 2000h = 12000h\n;\n; The address 2000h is encoded directly\n; in the instruction's machine code:\n;   A1 00 20  (A1 = MOV AX, moffs16)" },
    { t: "Register Indirect and Based Addressing", d: "Register indirect addressing uses a register (BX, SI, DI, or BP) to hold the address. Based addressing adds a constant displacement to the register. This enables dynamic memory access — like array traversal and structure field access — because the register can be changed at runtime.", code: "; Register indirect:\nMOV BX, 1000h\nMOV AX, [BX]      ; read from DS:1000h\nADD BX, 2\nMOV AX, [BX]      ; now reads DS:1002h\n\n; Based addressing (with displacement):\nMOV BX, 1000h     ; BX points to struct base\nMOV AX, [BX+0]    ; field 1 (offset 0)\nMOV CX, [BX+2]    ; field 2 (offset 2)\nMOV DX, [BX+4]    ; field 3 (offset 4)\n\n; BP uses SS segment by default:\nMOV AX, [BP+4]    ; SS:BP+4 (stack frame access)" },
    { t: "Based + Indexed Addressing", d: "The most powerful mode combines a base register (BX or BP), an index register (SI or DI), and an optional displacement. This is ideal for accessing elements of 2D arrays or fields within arrays of structures. The effective address = base + index + displacement.", code: "; Accessing a 2D array: table[row][col]\n; Base address of table in BX\n; Row offset in SI (row * row_size)\n; Column displacement as constant\n\nMOV BX, 1000h     ; table base address\nMOV SI, 0020h     ; row 2 (each row = 16 bytes)\nMOV AX, [BX+SI+4] ; column 2 (each col = 2 bytes)\n; EA = BX + SI + 4 = 1000h + 0020h + 4 = 1024h\n; Physical = DS*16 + 1024h\n\n; Looping through array elements:\nMOV SI, 0\nNEXT: MOV AX, [BX+SI]\n      ADD SI, 2\n      CMP SI, 20h\n      JB NEXT" },
    { t: "Memory-Mapped I/O vs Port-Mapped I/O", d: "The 8086 supports two methods for accessing peripherals. Memory-mapped I/O treats device registers as memory addresses — you use MOV to read/write them. Port-mapped I/O uses a separate 64 KB I/O address space (0000h-FFFFh) accessed with special IN and OUT instructions. The M/IO pin distinguishes the two.", code: "; Port-mapped I/O (separate I/O space):\nIN AL, 60h         ; read byte from port 60h (keyboard)\nOUT 61h, AL        ; write byte to port 61h\nIN AX, DX          ; read word from port in DX\nOUT DX, AX         ; write word to port in DX\n; M/IO = 0 during these operations\n\n; Memory-mapped I/O:\nMOV AX, [B800h*16] ; read video memory\nMOV [B800:0000], AX ; write to video buffer\n; M/IO = 1 (treated as normal memory access)\n; Same instructions as regular memory" },
    { t: "The I/O Address Space", d: "The 8086 has a separate 16-bit I/O address space with 65,536 ports (0000h-FFFFh). Ports 00h-FFh can be accessed with direct addressing (IN AL, port). Ports 0000h-FFFFh require indirect addressing through DX (IN AL, DX). Common ports include 60h (keyboard), 3F8h (COM1 serial), and 20h (PIC interrupt controller).", code: "; Direct I/O addressing (ports 00h-FFh):\nIN AL, 60h       ; read keyboard scan code\nOUT 20h, AL      ; send EOI to PIC\n\n; Indirect I/O addressing (any port):\nMOV DX, 03F8h    ; COM1 serial port\nIN AL, DX        ; read serial data\n\nMOV DX, 0CF8h    ; PCI config address port\nOUT DX, EAX      ; write config address\n\n; I/O map (common IBM PC ports):\n; 0020h-003Fh: PIC (interrupt controller)\n; 0040h-005Fh: PIT (timer)\n; 0060h-006Fh: Keyboard controller\n; 03F8h-03FFh: COM1 (serial port)" },
    { t: "Address Decoding", d: "Address decoding is the hardware logic that determines which memory or I/O chip responds to a given address. Upper address bits are fed into a decoder (like the 74138) that generates chip-select signals. When the CPU puts an address on the bus, only the selected chip activates. Without proper decoding, multiple chips would conflict on the data bus.", code: "; Address decoding example:\n; Using A19-A17 to select 128KB regions:\n;\n; A19 A18 A17 -> Chip Select\n;  0   0   0  -> RAM bank 0 (00000h-1FFFFh)\n;  0   0   1  -> RAM bank 1 (20000h-3FFFFh)\n;  0   1   0  -> RAM bank 2 (40000h-5FFFFh)\n;  ...etc...\n;  1   1   1  -> ROM (E0000h-FFFFFh)\n;\n; 74138 decoder: 3 inputs -> 8 active-low outputs\n; Each output enables one memory chip's /CS pin" }
  ],
  whatIs: "Memory in the 8086 system is a 1 MB address space (00000h-FFFFFh) accessed through segmentation, where physical address = segment * 16 + offset. The CPU supports multiple addressing modes — immediate, register, direct, register indirect, based, indexed, and combinations — to flexibly specify where data lives. I/O is accessed either through a separate 64 KB port space (using IN/OUT instructions) or through memory-mapped addresses. Address decoding hardware ensures the right chip responds to each address.",
  realWorld: "When your computer boots, the CPU fetches its first instruction from ROM at address FFFF0h — that's a direct result of the memory map design. When you type on a keyboard, the CPU reads I/O port 60h using IN AL, 60h. When a program accesses video memory, it writes to addresses starting at B8000h (memory-mapped I/O). Understanding the memory map and addressing modes is essential for writing device drivers, BIOS code, bootloaders, and any software that interacts directly with hardware.",
  code: `; Demonstrating memory addressing modes and I/O on 8086

; --- Setup ---
MOV AX, 1000h
MOV DS, AX           ; DS = 1000h (data segment)
MOV AX, 2000h
MOV SS, AX           ; SS = 2000h (stack segment)
MOV SP, 0FFEh        ; SP = top of stack area

; --- Immediate Addressing ---
MOV AX, 1234h        ; AX = 1234h (value in instruction)
MOV CX, 0005h        ; CX = 5 (loop counter)

; --- Direct Addressing ---
MOV [0100h], AX      ; store 1234h at DS:0100h
                      ; physical = 10000h + 0100h = 10100h

; --- Register Indirect ---
MOV BX, 0100h
MOV DX, [BX]         ; DX = value at DS:BX = DS:0100h
                      ; DX now = 1234h

; --- Based Addressing (array access) ---
MOV BX, 0200h        ; BX = base of array
MOV AX, [BX+0]       ; element 0
MOV AX, [BX+2]       ; element 1
MOV AX, [BX+4]       ; element 2

; --- Based + Indexed (2D array) ---
MOV BX, 0300h        ; base of 2D table
MOV SI, 0010h        ; row offset
MOV AX, [BX+SI+4]    ; table[row][col]
                      ; EA = 0300h + 0010h + 4 = 0314h

; --- Stack Addressing (BP-based) ---
PUSH 0042h           ; push value onto stack
MOV BP, SP
MOV AX, [BP+0]       ; read top of stack via BP
                      ; uses SS segment: SS:BP

; --- I/O Port Access ---
IN AL, 60h            ; port-mapped I/O: read keyboard port
                      ; M/IO = 0, address bus = 0060h

MOV DX, 03F8h
IN AL, DX             ; read COM1 serial port data
                      ; indirect port addressing via DX

; --- Memory-Mapped I/O (video memory) ---
MOV AX, 0B800h
MOV ES, AX            ; ES points to video memory
MOV DI, 0000h
MOV WORD [ES:DI], 0741h  ; write 'A' (41h) in white (07h)
                          ; to top-left of text screen

HLT`,
  funFact: "The 8086's segmented memory architecture was a source of both innovation and frustration. It allowed a 16-bit CPU to access 1 MB of memory, which was huge in 1978. But the overlapping segments created the infamous 'segment:offset' confusion that plagued DOS programmers for over a decade. The terms 'near pointer' (16-bit, same segment) and 'far pointer' (32-bit, segment:offset) became essential vocabulary. Intel finally escaped segmentation with the flat memory model in 32-bit protected mode — but the legacy lives on in the x86 architecture's segment registers.",
  quiz: [
    { q: "What is the physical address for segment 2000h, offset 0100h?", opts: ["21000h", "20100h", "02100h", "2000100h"], ans: 1 },
    { q: "Which addressing mode is used in MOV AX, [BX+SI+10h]?", opts: ["Direct addressing", "Register indirect addressing", "Based + Indexed with displacement", "Immediate addressing"], ans: 2 },
    { q: "What instruction is used to read from an I/O port on the 8086?", opts: ["MOV AL, [port]", "READ port", "IN AL, port", "GET AL, port"], ans: 2 },
    { q: "How large is the 8086's total I/O address space?", opts: ["256 bytes (8-bit)", "1 KB", "64 KB (16-bit)", "1 MB (20-bit)"], ans: 2 },
    { q: "Why must the reset vector address (FFFF0h) be in ROM?", opts: ["RAM is faster than ROM", "RAM is empty/random at power-on, so the first instruction must be in non-volatile ROM", "ROM can be written to during boot", "The CPU cannot address RAM at that location"], ans: 1 }
  ],
  challenge: "Design a memory map for a simple 8086-based system with: 32 KB of RAM starting at 00000h, 8 KB of ROM at the top of the address space (containing the reset vector), and a memory-mapped I/O device at address A0000h. Show: (1) the address ranges for each component, (2) which address lines (A0-A19) are used for chip select decoding, (3) write 8086 code that initializes a data structure in RAM, copies data to the I/O device, and then jumps to a routine in ROM. Annotate each instruction with its addressing mode.",
  resources: [
    { type: "docs", title: "8086 Addressing Modes", url: "https://www.geeksforgeeks.org/addressing-modes-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "Memory Organization in 8086", url: "https://www.youtube.com/watch?v=wKn14K4eJAM", source: "YouTube" },
    { type: "docs", title: "8086 I/O Interfacing", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_io_interfacing.htm", source: "TutorialsPoint" },
    { type: "article", title: "x86 Memory Segmentation", url: "https://en.wikipedia.org/wiki/X86_memory_segmentation", source: "Wikipedia" }
  ],
  eli5: "Imagine a huge hotel with 1 million rooms (that's memory). Each room has a number (address). The CPU is a guest who needs to find specific rooms. Sometimes they know the exact room number (direct addressing), sometimes they ask the front desk 'what room is in register BX?' (indirect addressing), and sometimes they calculate 'start at room BX, go SI rooms down the hall, then 4 more doors' (based+indexed). There's also a separate row of service windows (I/O ports) where the guest can talk to the kitchen, laundry, and concierge without going to a room.",
  codeWalkthrough: [
    "We start by setting up segment registers. DS=1000h means our data area starts at physical address 10000h. SS=2000h with SP=0FFEh means our stack grows downward from physical address 20FFEh.",
    "MOV AX, 1234h demonstrates immediate addressing — the value 1234h is encoded right in the instruction bytes. No memory access needed beyond the instruction fetch.",
    "MOV [0100h], AX uses direct addressing. The assembler encodes 0100h as a displacement in the instruction. Physical address = DS*16 + 0100h = 10100h. The data bus carries 1234h from AX to memory.",
    "MOV BX, 0100h / MOV DX, [BX] shows register indirect addressing. BX holds the offset, and the CPU computes DS*16 + BX to find the physical address. The value at that address (1234h, which we stored earlier) loads into DX.",
    "The based addressing section (MOV AX, [BX+0], [BX+2], [BX+4]) treats BX as the base of an array. Adding 0, 2, 4 accesses consecutive 16-bit elements — this is how you walk through arrays in assembly.",
    "MOV AX, [BX+SI+4] is the most powerful mode: based + indexed + displacement. BX is the table base, SI is the row offset, and 4 is the column offset. The CPU adds all three to compute the effective address.",
    "Stack access via BP (MOV AX, [BP+0]) automatically uses the SS segment instead of DS. This is how functions access their parameters and local variables on the stack.",
    "IN AL, 60h shows port-mapped I/O. The address bus carries 0060h, M/IO is set to 0 (selecting I/O space), and the keyboard controller responds with the scan code on the data bus.",
    "The video memory write (MOV WORD [ES:DI], 0741h) is memory-mapped I/O. ES points to segment B800h (video RAM), and writing 0741h places the character 'A' (41h) with white attribute (07h) at the top-left screen position."
  ],
  bugChallenge: {
    code: `; Program to copy 10 bytes from source to destination
; Source:      DS:1000h
; Destination: DS:2000h

MOV AX, 3000h
MOV DS, AX         ; DS = 3000h
MOV SI, 1000h      ; source offset
MOV DI, 2000h      ; destination offset
MOV CX, 10         ; 10 bytes to copy

COPY_LOOP:
  MOV AL, [SI]     ; read byte from DS:SI
  MOV [DI], AL     ; write byte to DS:DI
  INC SI
  INC DI
  DEC CX
  JNZ COPY_LOOP

; BUG: What if source is at DS:1000h and
; destination needs to be in a DIFFERENT segment?`,
    hint: "Both [SI] and [DI] default to the DS segment. What if the destination address requires a different segment base? Which segment does DI usually pair with for string operations?",
    answer: "Bug: Both MOV AL, [SI] and MOV [DI], AL use the DS segment by default. If the destination needs to be in a different segment (e.g., copying data to video memory at B800:0000), writing to DS:DI writes to the wrong physical address. Fix: Use a segment override for the destination — MOV [ES:DI], AL — and set ES to the destination segment (e.g., MOV AX, 0B800h / MOV ES, AX). Even better, use the 8086's string instruction MOVSB which automatically reads from DS:SI and writes to ES:DI, handling the segment separation correctly: REP MOVSB copies CX bytes from DS:SI to ES:DI with auto-increment."
  },
  difficulty: "intermediate",
  prereqs: [6]
},
// Lesson 9
{
  id: 9,
  title: "Why the 8086 Matters",
  subtitle: "Meet the chip that launched the x86 dynasty — and why it is still the best way to learn processor design",
  analogy: "The 8086 is like the Model T of computing. The Model T was not the first car, nor the fastest, but it defined the template every car would follow: steering wheel, pedals, gearbox. Similarly, the 8086 was not the first microprocessor, but its architecture became THE blueprint. Every modern Intel and AMD chip — from your laptop to cloud servers — descends directly from the 8086. Learning it is like studying Latin to understand Romance languages.",
  points: [
    { t: "Birth of the 8086 (1978)", d: "Intel released the 8086 in June 1978 as a 16-bit microprocessor clocked at 5 MHz. It was designed by a small team led by Stephen Morse. The goal was to provide a powerful upgrade path from the popular 8-bit 8080/8085 while keeping software migration feasible.", code: "" },
    { t: "16-Bit Architecture", d: "The 8086 processes data 16 bits at a time, doubling the throughput of 8-bit predecessors. Its internal registers are 16 bits wide, and its ALU performs 16-bit arithmetic natively. This means it can handle numbers up to 65,535 (unsigned) or -32,768 to +32,767 (signed) in a single operation.", code: "MOV AX, 0FFFFh   ; AX holds 16-bit value: 65535\nADD AX, 1         ; wraps to 0000h, sets CF=1" },
    { t: "20-Bit Address Bus", d: "While data is 16-bit, the address bus is 20 bits wide, allowing the 8086 to address up to 2^20 = 1,048,576 bytes (1 MB) of memory. This was a massive leap from the 8080's 64 KB limit. The 20-bit address is formed by combining a 16-bit segment and a 16-bit offset.", code: "; Physical address = Segment x 16 + Offset\n; Segment 2000h, Offset 1234h\n; = 20000h + 1234h = 21234h (20-bit)" },
    { t: "The IBM PC Connection", d: "In 1981, IBM chose the 8088 (an 8086 variant with an 8-bit external bus) for its first Personal Computer. This decision made the 8086 instruction set THE standard for PCs. Every subsequent PC had to be backward compatible, locking in the x86 architecture for decades.", code: "" },
    { t: "x86 Lineage: 8086 to Today", d: "The 8086 started a direct lineage: 80186, 80286, 80386 (first 32-bit), 80486, Pentium, Core series, and modern AMD/Intel 64-bit chips. Every one of these can still run original 8086 code. Your modern CPU literally has an 8086 compatibility mode called Real Mode.", code: "; This 8086 code from 1978 still runs\n; on a 2024 Intel Core i9 in Real Mode:\nMOV AX, 0013h\nINT 10h          ; switch to VGA mode 13h" },
    { t: "Key Innovation: Instruction Pipelining", d: "The 8086 introduced a primitive pipeline by splitting itself into two units: the Bus Interface Unit (BIU) that fetches instructions and the Execution Unit (EU) that runs them. While the EU executes one instruction, the BIU fetches the next. This overlap was revolutionary for its time.", code: "" },
    { t: "40-Pin DIP Package", d: "The 8086 came in a 40-pin Dual Inline Package (DIP). Pins included 16 multiplexed address/data lines (AD0-AD15), 4 address lines (A16-A19), control signals (RD, WR, ALE, DEN, DT/R), interrupt pins (INTR, NMI), and clock (CLK). The multiplexed bus saved pins but required external latches.", code: "" },
    { t: "Minimum and Maximum Modes", d: "The 8086 operates in two modes selected by the MN/MX pin. Minimum mode is for single-processor systems — the CPU directly generates all control signals. Maximum mode is for multi-processor systems — an external bus controller (8288) generates bus signals, enabling coprocessor (8087) support.", code: "" },
    { t: "Why Learn 8086 Today?", d: "The 8086 is complex enough to teach real concepts (segmentation, pipelining, interrupts, I/O) but simple enough to fully understand. Modern x86-64 processors add layers of complexity (out-of-order execution, virtual memory, branch prediction) that hide fundamentals. The 8086 lets you see everything clearly.", code: "" }
  ],
  whatIs: "The Intel 8086 is a 16-bit microprocessor released in 1978 that became the foundation of the x86 architecture. With a 16-bit data bus, 20-bit address bus (1 MB addressable memory), and a pioneering two-unit pipeline design (BIU + EU), the 8086 defined the instruction set that every modern PC processor still supports. It is the ancestor of every Intel and AMD desktop, laptop, and server CPU.",
  realWorld: "The 8086 architecture is everywhere. Every Windows, Linux, and macOS PC runs on x86-64, a direct descendant of the 8086. Cloud servers running AWS, Azure, and GCP predominantly use x86 chips. Game consoles (Xbox), embedded systems, and industrial controllers still use x86. Even when ARM is gaining ground, x86 — born from the 8086 — remains the dominant desktop and server architecture.",
  code: `; A simple 8086 assembly program
; Demonstrates basic 8086 capabilities
.MODEL SMALL
.STACK 100h
.DATA
  msg DB 'Hello from 8086!', 0Dh, 0Ah, '$'

.CODE
MAIN PROC
  MOV AX, @DATA    ; load data segment address
  MOV DS, AX       ; point DS to our data

  LEA DX, msg      ; load address of message
  MOV AH, 09h      ; DOS function: print string
  INT 21h          ; call DOS interrupt

  MOV AH, 4Ch      ; DOS function: exit
  INT 21h          ; terminate program
MAIN ENDP
END MAIN`,
  funFact: "The 8086 had roughly 29,000 transistors — about the same number of hairs on a hamster. A modern Intel Core i9 has over 10 BILLION transistors. That means about 345,000 complete 8086 processors could fit inside a single modern chip. Yet both execute many of the same fundamental instructions.",
  quiz: [
    { q: "When was the Intel 8086 released?", opts: ["1971", "1974", "1978", "1981"], ans: 2 },
    { q: "How much memory can the 8086 address with its 20-bit address bus?", opts: ["64 KB", "256 KB", "1 MB", "16 MB"], ans: 2 },
    { q: "Which IBM product made the 8086 instruction set the PC standard?", opts: ["IBM System/360", "IBM PC (1981)", "IBM PCjr", "IBM AS/400"], ans: 1 },
    { q: "What are the two internal units of the 8086 that enable instruction pipelining?", opts: ["ALU and Control Unit", "BIU and EU", "Register File and Cache", "Decoder and Scheduler"], ans: 1 },
    { q: "How many pins does the 8086 DIP package have?", opts: ["20", "28", "40", "64"], ans: 2 }
  ],
  challenge: "Research and list the key differences between the 8086 and its variant the 8088 (used in the original IBM PC). Consider: external data bus width, instruction queue size, pin count, and performance implications. Write a short comparison table.",
  resources: [
    { type: "article", title: "Intel 8086 — Wikipedia", url: "https://en.wikipedia.org/wiki/Intel_8086", source: "Wikipedia" },
    { type: "article", title: "8086 Microprocessor Architecture", url: "https://www.geeksforgeeks.org/architecture-of-8086/", source: "GeeksforGeeks" },
    { type: "video", title: "How the 8086 Changed Computing Forever", url: "https://www.youtube.com/watch?v=hBfhE2jMHnk", source: "YouTube" },
    { type: "article", title: "Intel 8086 Family User's Manual", url: "https://edge.edx.org/c4x/BITSPilani/EEE231/asset/8086_family_Users_Manual_1_.pdf", source: "Intel" }
  ],
  eli5: "Imagine someone invented a special recipe book in 1978. The recipes were so good that every chef in the world started using them. Even today, fancy restaurants still follow those same basic recipes — they just add extra spices on top. The 8086 is that recipe book for computers. Every PC you use today still understands the original 8086 'recipes' (instructions), even though modern chips are millions of times faster.",
  codeWalkthrough: [
    ".MODEL SMALL — tells the assembler we want a small memory model: one code segment and one data segment, suitable for simple programs",
    ".STACK 100h — reserves 256 bytes for the stack segment, enough for our simple program's PUSH/POP and CALL/RET operations",
    ".DATA — begins the data segment where we define our variables and constants",
    "msg DB 'Hello from 8086!', 0Dh, 0Ah, '$' — defines a byte string with carriage return (0Dh), line feed (0Ah), and the DOS string terminator ('$')",
    "MOV AX, @DATA / MOV DS, AX — loads the data segment address into DS. We must go through AX because MOV DS, immediate is not allowed on the 8086",
    "LEA DX, msg — Load Effective Address: puts the offset of msg into DX without actually reading memory",
    "MOV AH, 09h / INT 21h — calls DOS function 09h (print string). DS:DX points to the '$'-terminated string. The 8086 triggers a software interrupt to invoke the operating system",
    "MOV AH, 4Ch / INT 21h — calls DOS function 4Ch to cleanly terminate the program and return to the DOS command prompt"
  ],
  bugChallenge: {
    code: "MOV DS, @DATA    ; point DS to data segment\nLEA DX, msg\nMOV AH, 09h\nINT 21h",
    hint: "Can you move an immediate value directly into a segment register on the 8086?",
    answer: "The 8086 does not allow MOV segment_register, immediate. You cannot write MOV DS, @DATA directly. You must first load the value into a general-purpose register: MOV AX, @DATA, then MOV DS, AX. This is a fundamental 8086 rule — segment registers can only be loaded from general registers or memory."
  },
  difficulty: "beginner",
  prereqs: [5, 8]
},
// Lesson 10
{
  id: 10,
  title: "BIU and EU: The Dual-Engine Design",
  subtitle: "How the 8086 fetches and executes at the same time — the birth of instruction pipelining",
  analogy: "Imagine a restaurant with two workers: a waiter (BIU) and a chef (EU). The waiter goes to the market to fetch ingredients and places them in a prep queue (the instruction queue). Meanwhile, the chef grabs ingredients from the queue and cooks dishes. The waiter does not wait for the chef to finish — he keeps fetching ahead. The chef does not wait for the waiter — he grabs whatever is queued. This overlap means meals (instructions) come out faster than if one person did both jobs sequentially.",
  points: [
    { t: "Two Independent Units", d: "The 8086 is internally divided into two functional units that operate concurrently: the Bus Interface Unit (BIU) handles all external bus communication — fetching instructions and reading/writing data. The Execution Unit (EU) decodes and executes instructions using the ALU and registers. They work in parallel, connected by a 6-byte instruction queue.", code: "" },
    { t: "Bus Interface Unit (BIU)", d: "The BIU manages the 20-bit address bus and 16-bit data bus. It generates physical addresses by combining segment and offset registers, fetches instruction bytes from memory, and handles data read/write requests from the EU. It contains the Instruction Pointer (IP), segment registers (CS, DS, SS, ES), and the instruction queue.", code: "; BIU calculates physical address:\n; CS = 1000h, IP = 0200h\n; Physical = 1000h x 10h + 0200h\n;          = 10000h + 0200h = 10200h" },
    { t: "The 6-Byte Instruction Queue", d: "The BIU pre-fetches instruction bytes into a 6-byte FIFO (First-In, First-Out) queue. While the EU is busy executing the current instruction, the BIU fills the queue with upcoming bytes. When the EU needs the next instruction, it grabs it from the queue instead of waiting for a memory fetch — this is the essence of pipelining.", code: "; Queue visualization during execution:\n; Queue: [89 C3 B8 05 00 CD]\n;         ^-- EU takes 89 C3 (MOV BX,AX)\n; BIU immediately fetches more bytes\n; to keep the queue full" },
    { t: "Execution Unit (EU)", d: "The EU contains the ALU (Arithmetic Logic Unit), the Flag register, general-purpose registers (AX, BX, CX, DX), pointer registers (SP, BP), index registers (SI, DI), and the instruction decoder. It pulls instruction bytes from the queue, decodes them, and executes the operation. It has no direct connection to the external bus.", code: "" },
    { t: "How BIU and EU Cooperate", d: "The BIU and EU operate asynchronously. The BIU fetches bytes whenever the bus is free. The EU executes whenever the queue has bytes. When the EU needs to read/write memory or I/O (not instruction fetch), it requests the BIU, which pauses pre-fetching to perform the data transfer, then resumes fetching.", code: "; Execution timeline:\n; Cycle 1: BIU fetches bytes | EU executes MOV AX,5\n; Cycle 2: BIU fetches bytes | EU executes ADD AX,BX\n; Cycle 3: BIU does data read | EU waits for [SI] data\n; Cycle 4: BIU resumes fetch | EU executes MOV [DI],AX" },
    { t: "Pipeline Stalls and Flushes", d: "When the EU needs data from memory, the BIU must stop pre-fetching and service the data request — this is a pipeline stall. When a JMP or CALL changes the instruction flow, all pre-fetched bytes become invalid and the queue must be flushed and refilled from the new address, wasting the pre-fetched work.", code: "; Queue flush example:\n; Queue has: [XX XX XX XX XX XX]\n; EU executes: JMP new_label\n; Queue flushed! All bytes discarded\n; BIU starts fetching from new_label\n; EU waits until queue refills" },
    { t: "BIU Address Generation (Sigma)", d: "The BIU contains an adder (sometimes called Sigma or the address summer) dedicated to computing 20-bit physical addresses. It shifts the selected segment register left by 4 bits and adds the offset. This dedicated adder operates independently of the main ALU in the EU, allowing address computation and arithmetic to happen simultaneously.", code: "; Sigma adder operation:\n; Segment register << 4:  DS=3000h -> 30000h\n; Add offset:             + SI=0100h\n; Physical address:       = 30100h" },
    { t: "8086 vs 8088 Queue Difference", d: "The 8086 has a 6-byte instruction queue and a 16-bit external data bus (fetches 2 bytes per bus cycle). The 8088 has only a 4-byte queue and an 8-bit external bus (fetches 1 byte per cycle). This makes the 8088 slower at pre-fetching, causing the EU to stall more often waiting for instruction bytes.", code: "" },
    { t: "Why This Design Matters", d: "The BIU/EU split was the 8086's key innovation and the conceptual ancestor of modern superscalar pipelines. Today's CPUs have 15-30 pipeline stages with multiple execution units. But the core idea — overlap fetching and executing — started right here with the 8086's two-unit design.", code: "" }
  ],
  whatIs: "The 8086 processor is internally split into two concurrent units: the Bus Interface Unit (BIU) and the Execution Unit (EU). The BIU handles all communication with external memory and I/O — it fetches instruction bytes into a 6-byte FIFO queue and services data read/write requests. The EU pulls instructions from this queue, decodes them, and executes them using the ALU and registers. By working in parallel, the BIU pre-fetches while the EU executes, creating a primitive instruction pipeline that significantly improves throughput compared to a single fetch-then-execute cycle.",
  realWorld: "The BIU/EU pipeline concept directly evolved into modern CPU pipelines. Your laptop's CPU pipeline has stages for fetch, decode, rename, schedule, execute, and retire — all descendants of the 8086's original two-stage idea. In embedded systems, engineers who program 8086-compatible chips must understand pipeline stalls to write efficient code, especially in real-time applications like motor controllers and sensor systems where every microsecond counts.",
  code: `; Demonstrating how BIU pre-fetching affects performance
; Sequential arithmetic — BIU stays ahead of EU
.MODEL SMALL
.STACK 100h
.DATA
  val1 DW 1000
  val2 DW 2000
  result DW ?

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

  ; --- Fast: EU works from queue, BIU fetches ahead ---
  MOV AX, 5        ; EU executes, BIU pre-fetches
  ADD AX, 10       ; likely already in queue
  SUB AX, 3        ; likely already in queue
  MOV BX, AX       ; likely already in queue

  ; --- Slower: Memory access forces BIU to pause fetch ---
  MOV AX, [val1]   ; BIU must do data read (stall fetch)
  ADD AX, [val2]   ; another data read (stall again)
  MOV [result], AX  ; data write (stall again)

  ; --- Slowest: Jump flushes the entire queue ---
  JMP continue      ; queue flushed! 6 bytes wasted
  NOP               ; these are never fetched
  NOP
continue:
  MOV AH, 4Ch
  INT 21h
MAIN ENDP
END MAIN`,
  funFact: "The 6-byte instruction queue of the 8086 was a carefully chosen size. Most 8086 instructions are 1-6 bytes long, so the queue can typically hold at least one complete instruction ahead. Intel engineers found that a larger queue would not significantly improve performance because memory-accessing instructions (which stall the BIU) occur frequently enough to keep the queue from ever filling far ahead.",
  quiz: [
    { q: "What is the primary role of the Bus Interface Unit (BIU)?", opts: ["Execute arithmetic operations", "Decode instructions and set flags", "Fetch instructions and handle memory/IO bus access", "Store results in registers"], ans: 2 },
    { q: "How large is the instruction queue in the 8086?", opts: ["4 bytes", "6 bytes", "8 bytes", "16 bytes"], ans: 1 },
    { q: "What happens to the instruction queue when a JMP instruction is executed?", opts: ["It keeps all pre-fetched bytes", "Only the first byte is discarded", "The entire queue is flushed and refilled from the new address", "The queue doubles in size"], ans: 2 },
    { q: "Why does the EU have no direct connection to the external bus?", opts: ["It would be too expensive", "The BIU handles all bus communication so they can work in parallel", "The EU only works with internal cache", "The external bus is too slow for the EU"], ans: 1 },
    { q: "What is the instruction queue size of the 8088 compared to the 8086?", opts: ["Same 6 bytes", "4 bytes (smaller)", "8 bytes (larger)", "2 bytes (smaller)"], ans: 1 }
  ],
  challenge: "Draw a timing diagram showing 6 clock cycles where the BIU and EU operate in parallel. Show a scenario with: (1) three register-only instructions where the queue stays full, (2) a MOV AX, [mem] instruction where the BIU stalls pre-fetching to service the data read, and (3) a JMP that flushes the queue. Label which unit is active in each cycle and what it is doing.",
  resources: [
    { type: "article", title: "8086 Internal Architecture — BIU and EU", url: "https://www.geeksforgeeks.org/internal-architecture-of-8086/", source: "GeeksforGeeks" },
    { type: "article", title: "8086 Bus Interface Unit Explained", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_functional_units.htm", source: "TutorialsPoint" },
    { type: "video", title: "8086 BIU and EU Architecture", url: "https://www.youtube.com/watch?v=yPC6w0LjVBs", source: "YouTube" },
    { type: "article", title: "Intel 8086 Instruction Pipelining", url: "https://en.wikipedia.org/wiki/Intel_8086#Instruction_pipeline", source: "Wikipedia" }
  ],
  eli5: "Imagine you are building with LEGO bricks. If you had to walk to the shelf, grab a brick, walk back, place it, then walk back for the next brick — it would take forever. Now imagine your friend stands by the shelf and keeps passing you bricks while you build. You never stop building, and your friend never stops grabbing. That is what the BIU and EU do: one keeps fetching instructions while the other keeps executing them.",
  codeWalkthrough: [
    "MOV AX, @DATA / MOV DS, AX — standard data segment setup. The BIU fetches these instruction bytes while the EU is idle at startup",
    "MOV AX, 5 / ADD AX, 10 / SUB AX, 3 / MOV BX, AX — register-only operations. The EU executes each from the queue while the BIU freely pre-fetches ahead. No bus conflicts because these instructions only use internal registers",
    "MOV AX, [val1] — the EU asks the BIU to read val1 from memory. The BIU pauses pre-fetching, performs the data read, delivers the value to the EU, then resumes fetching",
    "ADD AX, [val2] — another memory read. The BIU again pauses pre-fetching to service this request. If the queue ran low during the previous stall, the EU may have to wait",
    "MOV [result], AX — a memory write. The BIU handles the write cycle, again pausing instruction pre-fetch",
    "JMP continue — the EU decodes a jump. The instruction queue is completely flushed because all pre-fetched bytes are for the wrong address. The BIU must start fresh from the 'continue' label",
    "NOP / NOP — these instructions were sequentially next in memory and may have been in the queue, but the JMP discarded them. They are never executed",
    "MOV AH, 4Ch / INT 21h — program termination via DOS. The BIU fetches the INT 21h vector from the interrupt table"
  ],
  bugChallenge: {
    code: "; Programmer expects this to be fast\n; because all values fit in registers\nMOV AX, [array]     ; read from memory\nMOV BX, [array+2]   ; read from memory\nADD AX, BX          ; register add\nMOV [result], AX     ; write to memory\nJMP done             ; jump forward\ndone:\n  MOV AH, 4Ch\n  INT 21h",
    hint: "Count how many times the BIU must pause pre-fetching. Is this really a 'register-fast' routine?",
    answer: "Despite the programmer's comment, this code is NOT fast. It causes 3 BIU stalls (two memory reads and one memory write) plus a queue flush from JMP. Only the ADD AX, BX truly benefits from the pipeline. To make it faster, load all needed values into registers at the start, do all computation, then store results — minimizing interleaved memory accesses that stall the pipeline."
  },
  difficulty: "intermediate",
  prereqs: [9]
},
// Lesson 11
{
  id: 11,
  title: "8086 Register Set",
  subtitle: "The 8086's fourteen registers — your processor's fast scratchpad for data, addresses, and status",
  analogy: "Think of registers as the pockets in a chef's apron. The chef (EU) keeps the most-used ingredients in these pockets for instant access, instead of walking to the pantry (memory) every time. AX through DX are like four big pockets for ingredients (data). SP and BP are like the left hand managing a stack of plates. SI and DI are fingers pointing at recipe cards (arrays). CS, DS, SS, ES are labels on different pantry shelves (memory segments). The Flags register is a checklist clipped to the apron — did the last recipe overflow? Was the result zero?",
  points: [
    { t: "General-Purpose Registers: AX (Accumulator)", d: "AX is the primary accumulator for arithmetic and I/O. Many instructions implicitly use AX: MUL/DIV use AX for operands and results, IN/OUT transfer data through AL/AX, and string operations like LODSW load into AX. It is split into AH (high byte) and AL (low byte), each independently accessible.", code: "MOV AX, 1234h    ; AX = 1234h\n; AH = 12h, AL = 34h\nMOV AL, 56h       ; AX = 1256h (AH unchanged)\nMUL BX            ; DX:AX = AX * BX (implicit)" },
    { t: "General-Purpose Registers: BX (Base)", d: "BX serves as a base address register for memory access. It is the only general-purpose register that can be used in base-addressing modes like [BX], [BX+SI], and [BX+DI]. It also works as a general data register for arithmetic. Splits into BH and BL.", code: "MOV BX, OFFSET array  ; BX points to array start\nMOV AL, [BX]          ; load byte at DS:BX\nADD BX, 1             ; advance to next element\nMOV AH, [BX+SI]       ; base + index addressing" },
    { t: "General-Purpose Registers: CX (Counter)", d: "CX is the designated counter register. LOOP, LOOPZ, and LOOPNZ decrement CX and branch based on its value. REP prefixes for string operations use CX as the repeat count. Shift and rotate instructions use CL for variable shift counts. Splits into CH and CL.", code: "MOV CX, 10       ; loop 10 times\nback:\n  ; ... loop body ...\n  LOOP back        ; CX--, jump if CX != 0\n\nMOV CL, 4\nSHL AX, CL        ; shift AX left by CL (4) bits" },
    { t: "General-Purpose Registers: DX (Data)", d: "DX extends AX for 32-bit operations. MUL produces a 32-bit result in DX:AX. DIV takes a 32-bit dividend from DX:AX. DX also holds the port number for IN/OUT instructions when the port address exceeds 8 bits. Splits into DH and DL.", code: "MOV AX, 0FFFFh\nMOV BX, 0FFFFh\nMUL BX            ; DX:AX = FFFF * FFFF = FFFE0001h\n; DX = FFFEh, AX = 0001h\n\nMOV DX, 3F8h     ; COM1 port address\nIN  AL, DX        ; read byte from port 3F8h" },
    { t: "Pointer Registers: SP and BP", d: "SP (Stack Pointer) always points to the top of the stack in the SS segment. PUSH decrements SP, POP increments it. You should rarely modify SP directly. BP (Base Pointer) is used to access parameters and local variables in stack frames. BP defaults to the SS segment, making it ideal for procedure stack access.", code: "PUSH AX           ; SP -= 2, then [SS:SP] = AX\nPOP  BX           ; BX = [SS:SP], then SP += 2\n\n; Stack frame access:\nMOV BP, SP\nMOV AX, [BP+4]   ; read parameter from stack\nMOV [BP-2], CX    ; write to local variable" },
    { t: "Index Registers: SI and DI", d: "SI (Source Index) and DI (Destination Index) are used for indexed memory access and string operations. LODSB reads from DS:SI, STOSB writes to ES:DI, MOVSB copies from DS:SI to ES:DI. Both auto-increment or auto-decrement based on the Direction Flag.", code: "LEA SI, source    ; SI -> source string\nLEA DI, dest      ; DI -> destination buffer\nMOV CX, 100       ; 100 bytes to copy\nCLD               ; clear DF: forward direction\nREP MOVSB         ; copy CX bytes: [DS:SI] -> [ES:DI]" },
    { t: "Segment Registers: CS, DS, SS, ES", d: "CS (Code Segment) points to the current code — IP is an offset within CS. DS (Data Segment) is the default for most data access. SS (Stack Segment) is used with SP and BP. ES (Extra Segment) is used by string destination operations and as an auxiliary data segment. Each defines a 64 KB window into the 1 MB address space.", code: "MOV AX, [BX]      ; default DS: physical = DS*16 + BX\nMOV AX, ES:[BX]   ; segment override: ES*16 + BX\nMOV AX, [BP+4]    ; default SS: physical = SS*16 + BP+4\n; CS:IP defines where we fetch instructions" },
    { t: "The Flags Register (Status and Control)", d: "The 16-bit Flags register contains 9 active flags. Six status flags are set by ALU operations: CF (Carry), ZF (Zero), SF (Sign), OF (Overflow), PF (Parity), AF (Auxiliary Carry). Three control flags are set by the programmer: DF (Direction for strings), IF (Interrupt enable), TF (Trap for single-step debugging).", code: "ADD AX, BX        ; may set CF, ZF, SF, OF, PF, AF\nJC  carry_set     ; branch if CF = 1\nJZ  zero_result   ; branch if ZF = 1\n\nSTI               ; set IF = 1 (enable interrupts)\nCLI               ; clear IF = 0 (disable interrupts)\nCLD               ; clear DF = 0 (string forward)\nSTD               ; set DF = 1 (string backward)" },
    { t: "Register Encoding in Machine Code", d: "Each register has a 3-bit code used in instruction encoding: AX=000, CX=001, DX=010, BX=011, SP=100, BP=101, SI=110, DI=111. The REG field and R/M field in the ModR/M byte use these codes. Understanding this helps when debugging raw machine code.", code: "; MOV AX, BX  ->  machine code: 89 D8\n; 89 = MOV r/m16, r16\n; D8 = 11 011 000\n;      mod=11 (register)\n;      reg=011 (BX = source)\n;      r/m=000 (AX = destination)" },
    { t: "IP — The Instruction Pointer", d: "IP (Instruction Pointer) holds the offset of the next instruction to execute within the CS segment. You cannot read or write IP directly with MOV. It is modified indirectly by JMP, CALL, RET, INT, and IRET. The BIU uses CS:IP to fetch the next instruction bytes.", code: "; You cannot do: MOV AX, IP  (illegal!)\n; IP changes via control flow:\nJMP label     ; IP = offset of label\nCALL proc     ; push IP, IP = offset of proc\nRET           ; pop IP from stack" }
  ],
  whatIs: "The 8086 has fourteen 16-bit registers organized into four groups. Four general-purpose registers (AX, BX, CX, DX) handle data and arithmetic, with each splittable into two 8-bit halves. Two pointer registers (SP, BP) manage the stack. Two index registers (SI, DI) support array and string operations. Four segment registers (CS, DS, SS, ES) define 64 KB windows into the 1 MB address space. The Flags register holds status and control bits. The Instruction Pointer (IP) tracks the next instruction to execute. Together, these 14 registers form the complete programmer-visible state of the 8086.",
  realWorld: "Every x86-64 register you use today is a direct extension of the original 8086 registers. EAX (32-bit) and RAX (64-bit) are extensions of AX. When you debug C code and see variables stored in EAX, ESP, or EDI, you are looking at the grandchildren of the 8086 registers. Compilers still respect the implicit roles: ECX for loop counters, EAX for return values, ESP for the stack pointer — conventions that trace directly back to the 8086.",
  code: `; Demonstrate all four register groups
.MODEL SMALL
.STACK 100h
.DATA
  nums  DW 10, 20, 30, 40, 50
  count DW 5
  sum   DW 0

.CODE
MAIN PROC
  MOV AX, @DATA     ; setup segment register (DS)
  MOV DS, AX

  ; General-purpose registers
  XOR AX, AX        ; AX = accumulator = 0
  MOV CX, [count]   ; CX = counter = 5
  LEA BX, nums      ; BX = base address of array

  ; Index register
  XOR SI, SI         ; SI = index = 0

  ; Loop using CX counter and SI index
add_loop:
  ADD AX, [BX+SI]   ; AX += nums[SI] (base+index)
  ADD SI, 2          ; next word (2 bytes)
  LOOP add_loop      ; CX-- and loop if CX != 0

  MOV [sum], AX      ; store result to memory

  ; Pointer registers demonstrated
  PUSH AX            ; SP decremented, AX on stack
  MOV BP, SP         ; BP = stack frame pointer
  MOV DX, [BP]       ; DX = value at top of stack
  POP AX             ; restore AX, SP incremented

  MOV AH, 4Ch
  INT 21h
MAIN ENDP
END MAIN`,
  funFact: "The 8086's register names are not arbitrary letters. AX stands for Accumulator, BX for Base, CX for Counter, DX for Data, SP for Stack Pointer, BP for Base Pointer, SI for Source Index, DI for Destination Index. Intel engineers named them by function because they wanted assembly programmers to immediately know each register's primary purpose. These names survived for 45+ years.",
  quiz: [
    { q: "Which register is implicitly used by the MUL instruction for its source operand and result?", opts: ["BX", "CX", "AX (and DX for 32-bit result)", "SI"], ans: 2 },
    { q: "Which general-purpose register can be used for base addressing modes like [BX+SI]?", opts: ["AX", "BX", "CX", "DX"], ans: 1 },
    { q: "What does the Direction Flag (DF) control?", opts: ["Interrupt enabling", "Whether string operations auto-increment or auto-decrement SI/DI", "Stack growth direction", "Code segment selection"], ans: 1 },
    { q: "How many active flags are in the 8086 Flags register?", opts: ["6", "8", "9", "16"], ans: 2 },
    { q: "Which segment register is the default for instructions using BP?", opts: ["CS", "DS", "SS", "ES"], ans: 2 }
  ],
  challenge: "Write an 8086 assembly program that uses all four general-purpose registers (AX, BX, CX, DX) simultaneously. The program should: load an array base address into BX, use CX as a loop counter of 5, accumulate a sum in AX, and store the final result using DX as an intermediate. Also demonstrate accessing AH and AL separately to split a 16-bit result into high and low bytes.",
  resources: [
    { type: "article", title: "8086 Register Organization", url: "https://www.geeksforgeeks.org/register-organization-of-8086/", source: "GeeksforGeeks" },
    { type: "article", title: "x86 Registers Explained", url: "https://en.wikibooks.org/wiki/X86_Assembly/X86_Architecture#Registers", source: "Wikibooks" },
    { type: "video", title: "8086 Register Set and Functions", url: "https://www.youtube.com/watch?v=Lk5_lyByBHE", source: "YouTube" },
    { type: "tool", title: "emu8086 — Practice with Registers", url: "https://emu8086-microprocessor-emulator.en.softonic.com/", source: "Softonic" }
  ],
  eli5: "Your brain has quick-access thoughts — like remembering your phone number or your name. You do not have to look them up; they are just there. Registers are like that for the CPU — tiny super-fast storage slots right inside the processor. AX is the main 'thinking' register (it does most math), CX counts things (like fingers), BX points to stuff (like your index finger pointing at a list), and SP keeps track of a pile of papers (the stack). The CPU can use registers instantly but has to go on a field trip to use memory.",
  codeWalkthrough: [
    "MOV AX, @DATA / MOV DS, AX — loads the data segment address into DS via AX. This is a segment register setup using a general-purpose register as intermediary",
    "XOR AX, AX — zeroes AX by XOR-ing it with itself. Faster and shorter than MOV AX, 0. AX will be our sum accumulator",
    "MOV CX, [count] — loads 5 into CX from memory. CX will serve its role as the loop counter for the LOOP instruction",
    "LEA BX, nums — loads the offset address of the nums array into BX. BX serves its role as the base register for array addressing",
    "XOR SI, SI — zeroes SI. It will be our index offset into the array, incrementing by 2 each iteration (word-sized elements)",
    "ADD AX, [BX+SI] — base+index addressing. The physical address is DS*16 + BX + SI. Adds the word at that address to AX",
    "ADD SI, 2 — advances SI by 2 bytes (one word) to point to the next array element",
    "LOOP add_loop — decrements CX, jumps back if CX != 0. After 5 iterations, AX = 10+20+30+40+50 = 150",
    "PUSH AX / MOV BP, SP / MOV DX, [BP] / POP AX — demonstrates pointer registers: PUSH modifies SP, BP accesses the stack frame, POP restores SP"
  ],
  bugChallenge: {
    code: "MOV CX, 5\nMOV SI, 0\nMOV AX, 0\nadd_loop:\n  ADD AX, [SI]     ; read array element\n  ADD SI, 2\n  LOOP add_loop",
    hint: "SI is being used as the only address. What segment and base address is being used? Where is the array actually located?",
    answer: "The code uses [SI] without a base register, so it reads from DS:SI starting at offset 0 — which is NOT where the array is stored. It should be ADD AX, [BX+SI] where BX holds the array's offset, or use a direct reference like ADD AX, nums[SI]. Without the base address, the code reads arbitrary data from the beginning of the data segment."
  },
  difficulty: "intermediate",
  prereqs: [10]
},
// Lesson 12
{
  id: 12,
  title: "Segmented Memory and Physical Address",
  subtitle: "How the 8086 combines segment and offset to address 1 MB of memory with 16-bit registers",
  analogy: "Imagine a huge library with 16 floors, each having 65,536 book slots. Your library card (a 16-bit register) can only hold a slot number — not enough to describe every book in the whole building. So the library uses a two-part system: a floor number (segment) and a slot on that floor (offset). The librarian multiplies the floor number by 16, then adds the slot number to get the absolute position. That is exactly how the 8086 forms a 20-bit physical address from two 16-bit values: Segment x 16 + Offset.",
  points: [
    { t: "The Problem: 16-Bit Registers, 20-Bit Addresses", d: "The 8086 has 16-bit registers, which can only represent values 0 to 65,535 — enough to address 64 KB. But the 8086 has a 20-bit address bus, addressing 1 MB (1,048,576 bytes). The gap between 16-bit registers and 20-bit addresses is bridged by segmentation: every memory access combines two 16-bit values to produce a 20-bit physical address.", code: "; 16-bit register max: FFFFh = 65,535\n; 20-bit address max:  FFFFFh = 1,048,575\n; Need a way to get 20 bits from 16-bit registers!" },
    { t: "Physical Address Formula", d: "Physical Address = Segment Register x 16 + Offset. Multiplying by 16 is the same as shifting left by 4 bits, which extends the 16-bit segment to 20 bits (the low 4 bits become zero). Adding the 16-bit offset fills in those low bits and can carry into the higher bits. The BIU's dedicated adder computes this for every memory access.", code: "; Example:\n; DS = 2000h, BX = 1234h\n; Physical = 2000h x 10h + 1234h\n;         = 20000h + 1234h\n;         = 21234h  (20-bit address)" },
    { t: "Segment:Offset Notation", d: "Addresses are written as Segment:Offset — e.g., 2000h:1234h means segment 2000h, offset 1234h. This notation clearly shows both components before they are combined. Many different segment:offset pairs can produce the same physical address, which is both a feature and a source of confusion.", code: "; All of these produce physical address 21234h:\n; 2000h:1234h -> 20000h + 1234h = 21234h\n; 2100h:0234h -> 21000h + 0234h = 21234h\n; 2123h:0004h -> 21230h + 0004h = 21234h\n; 1000h:1234h -> 10000h + 1234h = 11234h (DIFFERENT!)" },
    { t: "The Four Segments in Action", d: "CS:IP fetches instructions (code segment). DS:offset accesses most data (data segment). SS:SP and SS:BP access the stack (stack segment). ES:DI is used by string destination operations (extra segment). Each segment register defines a 64 KB window, and the windows can overlap.", code: "; Typical segment layout:\n; CS = 1000h -> Code at 10000h-1FFFFh\n; DS = 2000h -> Data at 20000h-2FFFFh\n; SS = 3000h -> Stack at 30000h-3FFFFh\n; ES = 2000h -> Extra (same as DS here)" },
    { t: "Segment Overlap and Aliasing", d: "Since segments start every 16 bytes (a paragraph boundary), adjacent segments overlap by 65,520 bytes. Segment 1000h covers 10000h-1FFFFh, segment 1001h covers 10010h-2000Fh — they share most of their range. This means the same physical byte can be accessed through many different segment:offset combinations.", code: "; Overlapping segments:\n; Seg 0000h: 00000h to 0FFFFh\n; Seg 0001h: 00010h to 1000Fh\n; Seg 0002h: 00020h to 1001Fh\n; ... segments start every 16 bytes (paragraph)" },
    { t: "Default Segment Assignments", d: "The 8086 automatically selects a segment register based on the type of memory access. Code fetch uses CS. Stack operations (PUSH, POP, and [BP]) use SS. String destinations use ES. Almost everything else uses DS. You can override the default with a segment prefix byte in the instruction.", code: "MOV AX, [BX]       ; uses DS (default for BX)\nMOV AX, [BP]       ; uses SS (default for BP)\nMOV AX, CS:[BX]    ; segment override: use CS\nMOV AX, ES:[SI]    ; segment override: use ES\nMOVSB               ; source=DS:SI, dest=ES:DI" },
    { t: "Paragraph Boundaries", d: "A paragraph is 16 bytes. Segments always start on paragraph boundaries because the segment address is shifted left by 4 bits (multiplied by 16). This means the lowest possible segment start addresses are 00000h, 00010h, 00020h, etc. You cannot start a segment at an arbitrary byte address.", code: "; Segment 0000h starts at physical 00000h\n; Segment 0001h starts at physical 00010h\n; Segment 0010h starts at physical 00100h\n; Segment FFFFh starts at physical FFFF0h\n; Minimum granularity: 16 bytes" },
    { t: "The Wraparound at 1 MB", d: "With segment FFFFh and offset FFFFh, the calculated address would be FFFF0h + FFFFh = 10FFEFh — a 21-bit value. The original 8086 only has 20 address pins (A0-A19), so bit 20 is lost and the address wraps around to 0FFEFh. This wraparound was later used (and abused) by DOS programs, leading to the famous A20 gate issue on later processors.", code: "; Maximum address calculation:\n; Segment = FFFFh, Offset = FFFFh\n; FFFFh x 10h = FFFF0h\n; FFFF0h + FFFFh = 10FFEFh (21 bits!)\n; 8086 drops bit 20: wraps to 0FFEFh" },
    { t: "Memory Map of a Typical 8086 System", d: "In a standard PC (8088/8086-based), the 1 MB address space is divided: 00000h-9FFFFh (640 KB) is conventional RAM. A0000h-BFFFFh is video memory. C0000h-EFFFFh is ROM for expansion cards. F0000h-FFFFFh is the system BIOS ROM. The CPU starts executing at FFFF0h after reset.", code: "; 8086/8088 PC Memory Map:\n; 00000h-9FFFFh: 640 KB Conventional RAM\n; A0000h-AFFFFh: VGA Graphics\n; B0000h-B7FFFh: Monochrome Text\n; B8000h-BFFFFh: Color Text (CGA/VGA)\n; F0000h-FFFFFh: BIOS ROM\n; Reset vector: FFFF:0000 = FFFF0h" },
    { t: "Why Segmentation Was Chosen", d: "Intel chose segmentation as a practical compromise. True 20-bit registers would require a new instruction format. Virtual memory hardware was too complex and expensive for 1978. Segmentation reused the existing 16-bit register width and instruction encoding while extending addressability to 1 MB. It also naturally supported relocatable code — change the segment register, and the same code runs at a different physical address.", code: "" }
  ],
  whatIs: "The 8086 uses segmented memory to bridge the gap between its 16-bit registers and its 20-bit address bus. Every memory access combines a 16-bit segment register value and a 16-bit offset using the formula: Physical Address = Segment x 16 + Offset. Four segment registers (CS, DS, SS, ES) define 64 KB windows into the 1 MB address space. The CPU automatically selects the appropriate segment register based on the type of access (code, data, stack, or string). Multiple segment:offset pairs can map to the same physical address, and segments overlap on 16-byte (paragraph) boundaries.",
  realWorld: "Segmented memory defined the IBM PC era. Every DOS program lived within the 640 KB conventional memory limit imposed by the IBM PC's memory map. DOS memory managers (HIMEM.SYS, EMM386) existed specifically to work around segmentation limits. The A20 gate — a hardware hack tied to the address wraparound — persisted in PCs until UEFI replaced BIOS. Even modern x86 CPUs boot in Real Mode with segmentation active before switching to Protected Mode with paging.",
  code: `; Demonstrate segmented memory addressing
.MODEL SMALL
.STACK 100h
.DATA
  msg1 DB 'Segment Demo', 0Dh, 0Ah, '$'
  val1 DW 0ABCDh
  val2 DW 0

.CODE
MAIN PROC
  ; Setup data segment
  MOV AX, @DATA
  MOV DS, AX          ; DS points to data segment
  MOV ES, AX          ; ES also points to data segment

  ; --- Default segment usage ---
  MOV BX, OFFSET val1 ; BX = offset of val1
  MOV AX, [BX]        ; DS:BX -> reads val1 = ABCDh

  ; --- Segment override ---
  MOV AX, ES:[BX]     ; ES:BX -> same physical address here
                        ; because DS = ES in this example

  ; --- Stack segment (SS) usage ---
  PUSH 1234h           ; SS:SP -> push to stack
  MOV BP, SP
  MOV CX, [BP]         ; SS:BP -> reads 1234h from stack
  POP AX               ; restore stack

  ; --- Demonstrate address calculation ---
  ; If DS = 1234h and BX = 0010h
  ; Physical = 1234h x 10h + 0010h
  ;          = 12340h + 0010h = 12350h

  ; --- Different segment:offset, same address ---
  ; DS=1235h, BX=0000h -> 12350h + 0000h = 12350h
  ; DS=1200h, BX=0350h -> 12000h + 0350h = 12350h
  ; All point to physical address 12350h

  ; Store result to verify
  MOV [val2], AX

  MOV AH, 4Ch
  INT 21h
MAIN ENDP
END MAIN`,
  funFact: "The A20 gate is one of the strangest hardware hacks in computing history. IBM needed to maintain address wraparound compatibility with the 8086, but the 80286 had 24 address lines. Their solution? Route address line A20 through the keyboard controller, which could enable or disable it. So for years, enabling memory above 1 MB required talking to the keyboard controller — a hack that persisted for over 30 years in PC design.",
  quiz: [
    { q: "What is the physical address for segment 3000h and offset 1234h?", opts: ["31234h", "41234h", "30000h", "31234h"], ans: 0 },
    { q: "Why does the 8086 need segmentation?", opts: ["To support virtual memory", "Because 16-bit registers cannot represent 20-bit addresses alone", "To enable multitasking", "To speed up the ALU"], ans: 1 },
    { q: "Which segment register is used by default when accessing memory through BP?", opts: ["DS", "CS", "SS", "ES"], ans: 2 },
    { q: "What happens at physical address FFFF0h + FFFFh on the original 8086?", opts: ["The system crashes", "The address extends to 21 bits", "The address wraps around to 0FFEFh (20-bit truncation)", "The CPU enters protected mode"], ans: 2 },
    { q: "On what byte boundary must segments start?", opts: ["2-byte (word)", "4-byte (dword)", "16-byte (paragraph)", "256-byte (page)"], ans: 2 }
  ],
  challenge: "Calculate the physical addresses for the following segment:offset pairs and determine which ones point to the same physical location: (a) 1000h:0100h, (b) 1010h:0000h, (c) 0FFFh:0110h, (d) 0000h:10100h (invalid — explain why), (e) 1008h:0080h. Then write an 8086 program that uses segment overrides (ES: prefix) to copy a word from one segment to another.",
  resources: [
    { type: "article", title: "8086 Memory Segmentation", url: "https://www.geeksforgeeks.org/memory-segmentation-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "article", title: "Physical Address Calculation in 8086", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_addressing_modes.htm", source: "TutorialsPoint" },
    { type: "video", title: "Segmented Memory in 8086 Explained", url: "https://www.youtube.com/watch?v=yKCsHoFmMO0", source: "YouTube" },
    { type: "article", title: "The A20 Gate — History and Technical Details", url: "https://en.wikipedia.org/wiki/A20_line", source: "Wikipedia" }
  ],
  eli5: "Imagine you live in a city with streets that are really long — 65,536 houses on each street. But the city has 65,536 streets, and streets overlap a lot (each new street starts only 16 houses apart from the last one). To find a house, you say 'Street 2000, House 1234.' The postal service multiplies the street number by 16 and adds the house number to get the actual address. That is how the 8086 finds memory: it takes a street number (segment) and a house number (offset) and combines them into one big address.",
  codeWalkthrough: [
    "MOV AX, @DATA / MOV DS, AX — loads the data segment address into DS. The assembler replaces @DATA with the paragraph address where .DATA begins",
    "MOV ES, AX — sets ES equal to DS. Now both segment registers point to the same segment. In real programs, ES often points to a different segment (e.g., video memory at B800h)",
    "MOV BX, OFFSET val1 — loads the offset (not the value) of val1 into BX. OFFSET is an assembler operator that returns the address within the data segment",
    "MOV AX, [BX] — reads a word from DS:BX. The BIU computes physical address = DS x 16 + BX, fetches the 16-bit value (ABCDh), and loads it into AX",
    "MOV AX, ES:[BX] — same offset BX, but now using ES instead of DS. The ES: prefix overrides the default segment. Since DS = ES, this reads the same physical address",
    "PUSH 1234h — pushes 1234h onto the stack. The BIU writes to SS:SP (stack segment). SP is decremented by 2 first, then the value is stored",
    "MOV BP, SP / MOV CX, [BP] — BP accesses the stack. [BP] defaults to SS segment (unlike [BX] which defaults to DS). Reads back 1234h from the top of the stack",
    "POP AX — pops the value from SS:SP into AX and increments SP by 2, restoring the stack to its previous state"
  ],
  bugChallenge: {
    code: "MOV AX, 1234h\nMOV DS, AX         ; DS = 1234h\nMOV SI, 5678h      ; offset = 5678h\n; Programmer expects physical address: 12345678h\nMOV AL, [SI]       ; read from 'address 12345678h'",
    hint: "How does the 8086 actually compute the physical address? Is 12345678h even possible with a 20-bit address bus?",
    answer: "The programmer mistakenly concatenated the segment and offset (1234h + 5678h = 12345678h). The 8086 does NOT concatenate — it computes Segment x 16 + Offset = 1234h x 10h + 5678h = 12340h + 5678h = 179B8h. Also, the 8086 only has 20 address bits, so the maximum address is FFFFFh (about 1 MB). The value 12345678h would be over 300 MB — far beyond what the 8086 can address."
  },
  difficulty: "intermediate",
  prereqs: [11]
},
{
  id: 13,
  title: "8086 Pins and Signals",
  subtitle: "Understanding the 40-pin DIP package and every signal that connects the 8086 to the outside world",
  analogy: "Think of the 8086 chip as a post office building. The 40 pins are its doors and windows — some doors let mail out (address lines), some let mail in (data lines), and some are signal flags on the roof that tell delivery trucks when to stop, wait, or go (control signals).",
  points: [
    { t: "40-Pin DIP Package", d: "The 8086 comes in a 40-pin Dual Inline Package. Every pin has a specific purpose — address, data, control, power, or ground. Understanding each pin is essential for hardware interfacing and reading timing diagrams.", code: "; 8086 has 40 pins total\n; Pin 1  = GND\n; Pin 40 = VCC (+5V)\n; Pins 2-16, 39 = AD0-AD15 (multiplexed)\n; Pins 35-38 = A16-A19 (high address)" },
    { t: "AD0–AD15: Multiplexed Address/Data Bus", d: "Pins AD0 through AD15 carry address bits A0-A15 during T1 (first clock cycle) and data bits D0-D15 during T2-T4. This multiplexing saves pins but requires an external latch (like 8282) to hold the address.", code: "; During T1: AD0-AD15 carry address A0-A15\n; During T2-T4: AD0-AD15 carry data D0-D15\n; ALE pulse latches address into 8282 latch\n; This is why we call it 'multiplexed'" },
    { t: "A16/S3–A19/S6: High Address and Status", d: "Pins A16-A19 provide the upper 4 bits of the 20-bit address during T1. During T2-T4, these pins output status signals S3-S6 that indicate which segment register is being used and interrupt enable status.", code: "; A16-A19 during T1 -> upper address bits\n; S3-S6 during T2-T4 -> status signals\n; S4,S3 = 00 -> Extra Segment\n; S4,S3 = 01 -> Stack Segment\n; S4,S3 = 10 -> Code Segment\n; S4,S3 = 11 -> Data Segment" },
    { t: "ALE — Address Latch Enable", d: "ALE is a pulse output by the 8086 at the start of every bus cycle (during T1). External latches like the 8282 capture the address on the falling edge of ALE, holding it stable while the bus switches to carrying data.", code: "; ALE timing in a bus cycle:\n;   T1: ALE goes HIGH -> address valid on AD0-AD15\n;        ALE falls LOW -> latch captures address\n;   T2: AD0-AD15 now carry data\n;   T3: Data transfer continues\n;   T4: Bus cycle ends" },
    { t: "RD and WR — Read and Write Strobes", d: "RD (active low) signals that the CPU wants to read data from memory or I/O. WR (active low) signals a write operation. These control lines tell external devices when to place data on the bus or capture data from it.", code: "; Read operation:\n;   CPU asserts /RD (pulls LOW)\n;   Memory places data on AD0-AD15\n;   CPU reads data, then deasserts /RD\n;\n; Write operation:\n;   CPU places data on AD0-AD15\n;   CPU asserts /WR (pulls LOW)\n;   Memory captures data, then /WR goes HIGH" },
    { t: "M/IO — Memory or I/O Select", d: "When M/IO is HIGH, the current bus cycle accesses memory. When LOW, it accesses an I/O port. This single pin tells the system whether the address on the bus refers to a memory location or a peripheral device.", code: "; M/IO = 1 -> Memory access\n;   MOV AX, [2000h]  ; reads memory, M/IO = HIGH\n;\n; M/IO = 0 -> I/O port access\n;   IN AL, 60h       ; reads I/O port, M/IO = LOW\n;   OUT 61h, AL      ; writes I/O port, M/IO = LOW" },
    { t: "INTR and NMI — Interrupt Inputs", d: "INTR (maskable interrupt) can be enabled or disabled via the IF flag using STI/CLI. NMI (Non-Maskable Interrupt) cannot be disabled — it always interrupts the CPU. NMI is used for critical events like memory parity errors.", code: "; Enable maskable interrupts\nSTI           ; Set Interrupt Flag (IF=1)\n              ; INTR pin is now active\n;\n; Disable maskable interrupts\nCLI           ; Clear Interrupt Flag (IF=0)\n              ; INTR pin is ignored\n;\n; NMI always triggers INT 2 regardless of IF" },
    { t: "HOLD and HLDA — DMA Handshake", d: "A DMA controller asserts HOLD to request the bus. The 8086 finishes its current bus cycle, floats its bus lines (tri-state), and asserts HLDA (Hold Acknowledge). The DMA controller now owns the bus for direct memory transfers.", code: "; DMA handshake sequence:\n;   1. DMA controller raises HOLD pin\n;   2. CPU finishes current bus cycle\n;   3. CPU floats address/data/control lines\n;   4. CPU asserts HLDA (acknowledge)\n;   5. DMA performs memory transfer\n;   6. DMA releases HOLD\n;   7. CPU deasserts HLDA, resumes" },
    { t: "READY — Wait State Control", d: "The READY pin is sampled at the start of T3. If LOW, the CPU inserts wait states (Tw) — extra clock cycles where it does nothing — until READY goes HIGH. This lets slow memory or peripherals keep up with the faster CPU.", code: "; Normal bus cycle: T1 - T2 - T3 - T4\n; If READY=0 at start of T3:\n;   T1 - T2 - Tw - Tw - ... - T3 - T4\n; CPU waits until READY=1\n;\n; 8284A clock generator can synchronize\n; the READY signal for the 8086" },
    { t: "RESET — System Initialization", d: "When RESET is held HIGH for at least 4 clock cycles and then released, the 8086 initializes: CS=FFFFh, IP=0000h, all flags cleared, DS=ES=SS=0000h. Execution begins at physical address FFFF0h — the reset vector.", code: "; After RESET release:\n;   CS = FFFFh\n;   IP = 0000h\n;   Physical address = FFFFh << 4 + 0000h\n;                   = FFFF0h\n;\n; ROM must be mapped at FFFF0h\n; First instruction is typically a FAR JMP\n; JMP FAR F000h:E05Bh  ; jump to BIOS start" },
    { t: "MN/MX — Mode Selection", d: "Pin 33 (MN/MX) selects the operating mode. Tied to VCC = minimum mode (single processor, CPU generates control signals directly). Tied to GND = maximum mode (multiprocessor, 8288 bus controller generates control signals).", code: "; Minimum mode (MN/MX = VCC)\n;   CPU directly drives: M/IO, RD, WR, ALE\n;   Suitable for single-processor systems\n;\n; Maximum mode (MN/MX = GND)\n;   CPU outputs S0, S1, S2 status\n;   8288 bus controller decodes these into\n;   MRDC, MWTC, IORC, IOWC, ALE, etc." }
  ],
  whatIs: "The 8086 microprocessor uses a 40-pin DIP package where each pin serves a specific role: AD0-AD15 carry multiplexed address and data, A16-A19 provide upper address bits, ALE latches the address, RD/WR control read and write operations, M/IO distinguishes memory from I/O access, INTR/NMI handle interrupts, HOLD/HLDA enable DMA, READY inserts wait states for slow devices, and RESET initializes the processor.",
  realWorld: "Every PC motherboard ever made routes these exact signal types between the CPU and chipset. When your computer boots, the RESET pin releases and the CPU fetches its first instruction from address FFFF0h — this is why the BIOS ROM must sit at the top of the first megabyte. Understanding these pins is essential for designing embedded 8086 systems and reading hardware schematics.",
  code: `; Visualizing an 8086 memory read bus cycle
; Step-by-step pin activity during a MOV AX, [2000h]

; T1 state:
;   ALE = HIGH (address is valid)
;   AD0-AD15 = 2000h (lower 16 bits of address)
;   A16-A19  = segment-derived upper bits
;   M/IO     = HIGH (memory access)

; T1 falling edge of ALE:
;   External 8282 latch captures address 2000h

; T2 state:
;   ALE = LOW
;   AD0-AD15 = floating (tri-state), preparing for data
;   RD = LOW (read strobe asserted)

; T3 state:
;   READY sampled — if LOW, insert Tw
;   AD0-AD15 = data from memory appears

; T4 state:
;   CPU latches data from AD0-AD15 into AX
;   RD = HIGH (read complete)
;   Bus cycle ends`,
  funFact: "The 8086 has exactly 40 pins — the same count as the Intel 8085 it replaced. Intel deliberately kept the same package size to reuse existing manufacturing tooling, even though the 8086 was far more complex. The multiplexed address/data bus was the trick that made this possible.",
  quiz: [
    { q: "Why are lines AD0-AD15 called 'multiplexed'?", opts: ["They carry multiple data bytes simultaneously", "They carry address in T1 and data in T2-T4 of the same bus cycle", "They connect to multiple processors at once", "They switch between 8-bit and 16-bit modes"], ans: 1 },
    { q: "What is the purpose of the ALE signal?", opts: ["It enables the ALU to perform calculations", "It triggers an interrupt service routine", "It pulses to tell external latches to capture the address before data appears on the bus", "It selects between minimum and maximum mode"], ans: 2 },
    { q: "What happens when the READY pin is LOW at the start of T3?", opts: ["The CPU resets itself", "The CPU skips the current instruction", "The CPU inserts wait states (Tw) until READY goes HIGH", "The CPU switches to maximum mode"], ans: 2 },
    { q: "After RESET, what is the physical address of the first instruction fetched?", opts: ["00000h", "0FFFFh", "FFFF0h", "FFFFFh"], ans: 2 },
    { q: "What does M/IO = LOW indicate during a bus cycle?", opts: ["Memory read operation", "I/O port access", "DMA transfer in progress", "Interrupt acknowledgment"], ans: 1 }
  ],
  challenge: "Draw or describe the complete pin diagram of the 8086 from memory. Group the 40 pins into five categories: address/data, control output, control input, interrupt, and power. For each category, list the pin names and briefly state their purpose. Then trace what happens on each pin during a single memory write bus cycle (T1 through T4).",
  resources: [
    { type: "docs", title: "8086 Pin Diagram and Description", url: "https://www.geeksforgeeks.org/pin-diagram-of-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "8086 Pins and Signals Explained", url: "https://www.youtube.com/watch?v=5JFxWByo5NU", source: "YouTube" },
    { type: "docs", title: "Intel 8086 Datasheet", url: "https://datasheets.chipdb.org/Intel/x86/8086/datashts/8086/8086.htm", source: "Intel" },
    { type: "article", title: "8086 Bus Cycle and Timing", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_pin_configuration.htm", source: "TutorialsPoint" }
  ],
  eli5: "Imagine the 8086 is a person sitting in a room with 40 strings tied to their fingers. Some strings ring bells (to say 'I want to read!'), some pull open doors (to let data in or out), and some are pulled by others (to say 'Wait!' or 'I need your attention!'). Every time the clock ticks, the person follows a pattern — put the address on some strings, then switch to moving data through the same strings.",
  codeWalkthrough: [
    "T1 state: ALE goes HIGH — this is the 'address is ready!' announcement. AD0-AD15 carry the 16-bit address of the memory location we want to read.",
    "A16-A19 carry the upper 4 address bits derived from the segment register — together with AD0-AD15, this forms the full 20-bit physical address.",
    "M/IO is set HIGH because this is a memory access (MOV from memory), not an I/O port operation.",
    "On the falling edge of ALE, external 8282 latches capture and hold the address — the bus is about to switch roles.",
    "T2 state: AD0-AD15 go tri-state momentarily, then RD is asserted LOW — this tells the memory chip to place its data on the bus.",
    "T3 state: the CPU checks the READY pin — if the memory is slow and READY is LOW, the CPU just waits in Tw states.",
    "Once READY is HIGH, the memory has placed valid data on AD0-AD15. The CPU reads these lines.",
    "T4 state: the CPU captures the data into the destination register (AX), releases RD back to HIGH, and the bus cycle is complete."
  ],
  bugChallenge: {
    code: `; System design: 8086 connected to memory
; Problem: Data read from memory is always garbage

; Hardware setup:
;   AD0-AD15 connected directly to memory data pins
;   A16-A19 connected to upper address decoder
;   RD connected to memory OE (output enable)
;   ALE is not connected to anything
;   M/IO connected to memory CS (chip select)`,
    hint: "Without a latch, what happens to the address when AD0-AD15 switch to data mode in T2?",
    answer: "Bug: ALE is not connected to an address latch (like 8282). Since AD0-AD15 are multiplexed, the address is only valid during T1. Without a latch to capture and hold the address when ALE pulses, the address lines switch to data mode in T2 and the memory chip loses the address — reading from a random/unstable location. Fix: Connect ALE to the clock input of an 8282 latch, route AD0-AD15 through the latch for address lines, and connect the latch outputs to the memory address pins."
  },
  difficulty: "intermediate",
  prereqs: [9, 12]
},
{
  id: 14,
  title: "Minimum Mode vs Maximum Mode",
  subtitle: "How the MN/MX pin changes the entire system architecture — single processor vs multiprocessor",
  analogy: "Minimum mode is like a solo chef running a small kitchen — they do everything themselves: take orders, cook, plate, and serve. Maximum mode is like a head chef in a large restaurant who calls out orders while a sous chef (8288 bus controller) manages the kitchen staff (bus signals) — the head chef focuses on cooking while the sous chef coordinates everything else.",
  points: [
    { t: "MN/MX Pin (Pin 33)", d: "This single pin determines the entire operating mode. Tied to VCC (+5V) selects minimum mode. Tied to GND selects maximum mode. The choice is hardwired at design time — you cannot switch modes while the system is running.", code: "; Minimum mode:\n;   Pin 33 (MN/MX) = VCC (+5V)\n;   CPU generates all control signals\n;\n; Maximum mode:\n;   Pin 33 (MN/MX) = GND (0V)\n;   CPU outputs status; 8288 generates control" },
    { t: "Minimum Mode Overview", d: "In minimum mode, the 8086 directly generates all bus control signals: ALE, RD, WR, M/IO, DEN, DT/R, INTA. This is simpler and cheaper, ideal for single-processor embedded systems with straightforward bus requirements.", code: "; Minimum mode pin functions:\n;   Pin 24 = ALE (Address Latch Enable)\n;   Pin 25 = DEN (Data Enable)\n;   Pin 26 = DT/R (Data Transmit/Receive)\n;   Pin 27 = M/IO (Memory/IO select)\n;   Pin 28 = WR (Write strobe)\n;   Pin 29 = HLDA (Hold Acknowledge)\n;   Pin 31 = HOLD (Hold Request)\n;   Pin 32 = RD (Read strobe)" },
    { t: "Minimum Mode Control Signal Generation", d: "In minimum mode, the CPU uses pins 24-31 to directly output control signals. DEN enables data bus transceivers (8286), DT/R controls data direction (transmit vs receive), and ALE latches the address. No external bus controller is needed.", code: "; Minimum mode memory read sequence:\n;   1. ALE pulses -> address latched\n;   2. M/IO = HIGH (memory access)\n;   3. DT/R = LOW (receive/read direction)\n;   4. DEN = LOW (enable transceivers)\n;   5. RD = LOW (read strobe)\n;   6. Data appears on bus\n;   7. CPU reads data, RD goes HIGH" },
    { t: "Maximum Mode Overview", d: "In maximum mode, pins 24-31 change function entirely. Instead of direct control signals, the CPU outputs encoded status lines S0, S1, S2. An external 8288 bus controller decodes these into the actual bus control signals needed by memory and I/O.", code: "; Maximum mode pin functions (DIFFERENT!):\n;   Pin 24 = QS1 (Queue Status)\n;   Pin 25 = QS0 (Queue Status)\n;   Pin 26 = S0  (Bus cycle status)\n;   Pin 27 = S1  (Bus cycle status)\n;   Pin 28 = S2  (Bus cycle status)\n;   Pin 29 = LOCK (Bus lock)\n;   Pin 30 = RQ/GT1 (Request/Grant)\n;   Pin 31 = RQ/GT0 (Request/Grant)" },
    { t: "8288 Bus Controller", d: "The 8288 decodes S0, S1, S2 from the 8086 and generates: MRDC (memory read), MWTC (memory write), IORC (I/O read), IOWC (I/O write), ALE, DEN, DT/R, and INTA. It acts as the 'translator' between CPU status and bus control.", code: "; 8288 decodes S2, S1, S0 status:\n; S2 S1 S0 = 0 0 0 -> Interrupt Acknowledge\n; S2 S1 S0 = 0 0 1 -> I/O Read  (IORC)\n; S2 S1 S0 = 0 1 0 -> I/O Write (IOWC)\n; S2 S1 S0 = 0 1 1 -> Halt\n; S2 S1 S0 = 1 0 0 -> Instruction Fetch (MRDC)\n; S2 S1 S0 = 1 0 1 -> Memory Read  (MRDC)\n; S2 S1 S0 = 1 1 0 -> Memory Write (MWTC)\n; S2 S1 S0 = 1 1 1 -> Passive (no bus cycle)" },
    { t: "RQ/GT — Request/Grant for Multiprocessor", d: "In maximum mode, HOLD/HLDA are replaced by RQ/GT0 and RQ/GT1 — bidirectional bus arbitration lines. A coprocessor (like 8087) uses RQ/GT to request and release the bus in a faster, more compact handshake than HOLD/HLDA.", code: "; RQ/GT handshake (3-pulse protocol):\n;   Pulse 1: Coprocessor requests bus\n;            (drives RQ/GT LOW for 1 clock)\n;   Pulse 2: CPU grants bus\n;            (drives RQ/GT LOW for 1 clock)\n;   Pulse 3: Coprocessor releases bus\n;            (drives RQ/GT LOW for 1 clock)\n;\n; RQ/GT0 has higher priority than RQ/GT1" },
    { t: "QS0, QS1 — Queue Status", d: "In maximum mode, QS0 and QS1 indicate the instruction queue activity. This helps coprocessors like the 8087 track what instruction the 8086 is executing — essential for synchronization between the CPU and math coprocessor.", code: "; Queue Status encoding:\n; QS1 QS0 = 0 0 -> No queue operation\n; QS1 QS0 = 0 1 -> First byte of opcode\n;                    fetched from queue\n; QS1 QS0 = 1 0 -> Queue is empty\n; QS1 QS0 = 1 1 -> Subsequent byte fetched\n;                    from queue" },
    { t: "LOCK Signal", d: "In maximum mode, the LOCK prefix causes the 8086 to assert the LOCK output for the duration of the next instruction. This prevents other bus masters from taking the bus — essential for atomic read-modify-write operations in multiprocessor systems.", code: "; LOCK prefix for atomic operations:\nLOCK XCHG [mutex], AX  ; atomic exchange\n; During this instruction:\n;   LOCK pin = LOW (asserted)\n;   No other processor can take the bus\n;   Ensures mutual exclusion\n;\n; Without LOCK, another CPU could read\n; the mutex between our read and write" },
    { t: "When to Use Each Mode", d: "Use minimum mode for simple, cost-sensitive single-processor designs (trainers, embedded controllers). Use maximum mode when you need coprocessors (8087 FPU), multiprocessor configurations, or sophisticated bus arbitration with multiple bus masters.", code: "; Minimum mode system components:\n;   8086 + 8282 latches + 8286 transceivers\n;   + memory + I/O devices\n;\n; Maximum mode system components:\n;   8086 + 8288 bus controller\n;   + 8282 latches + 8286 transceivers\n;   + 8087 coprocessor (optional)\n;   + memory + I/O devices" }
  ],
  whatIs: "The MN/MX pin on the 8086 selects between minimum mode (single-processor, CPU generates all control signals directly) and maximum mode (multiprocessor-capable, CPU outputs encoded status that an 8288 bus controller decodes into control signals). Minimum mode is simpler and cheaper; maximum mode supports coprocessors, bus locking, and advanced arbitration.",
  realWorld: "The original IBM PC used the 8086's close cousin, the 8088, in maximum mode specifically to support the optional 8087 math coprocessor. Engineers who wanted faster floating-point math could plug an 8087 into the coprocessor socket. The RQ/GT lines and queue status pins made this seamless. Simpler 8086 trainer kits used minimum mode to keep costs down.",
  code: `; Comparing minimum and maximum mode system designs

; === MINIMUM MODE SYSTEM ===
; MN/MX pin tied to VCC
; CPU directly controls the bus

; Memory read in minimum mode:
;   CPU outputs: ALE, M/IO=1, RD=0
;   8282 latch captures address on ALE
;   8286 transceiver enabled by DEN, direction by DT/R
;   Memory places data on bus
;   CPU reads data in T3/T4

; === MAXIMUM MODE SYSTEM ===
; MN/MX pin tied to GND
; 8288 bus controller generates signals

; Memory read in maximum mode:
;   CPU outputs: S2=1, S1=0, S0=1 (memory read)
;   8288 decodes status -> asserts MRDC, ALE, DEN, DT/R
;   8282 latch captures address on ALE
;   8286 transceiver enabled by DEN
;   Memory places data on bus
;   CPU reads data in T3/T4

; Coprocessor sync (maximum mode only):
;   8087 monitors QS0, QS1 to track instruction flow
;   8087 uses RQ/GT0 to request bus for memory operands
;   LOCK prefix prevents bus takeover during critical ops`,
  funFact: "The 8288 bus controller chip was designed to work in pairs — in some advanced systems, two 8288s were used: one for the system bus and one for a local bus. This dual-bus architecture was a precursor to the modern concept of front-side bus and back-side bus in Pentium-era processors.",
  quiz: [
    { q: "How is the operating mode selected on the 8086?", opts: ["By writing to a configuration register", "By the MN/MX pin — VCC for minimum mode, GND for maximum mode", "By the RESET vector address", "By setting a flag bit in the flags register"], ans: 1 },
    { q: "In maximum mode, what replaces the HOLD/HLDA DMA handshake?", opts: ["INTR/INTA interrupt handshake", "S0/S1/S2 status lines", "RQ/GT0 and RQ/GT1 request/grant lines", "QS0/QS1 queue status lines"], ans: 2 },
    { q: "What is the primary function of the 8288 bus controller?", opts: ["It generates the system clock", "It decodes S0, S1, S2 status lines into bus control signals like MRDC, MWTC, IORC, IOWC", "It manages the instruction prefetch queue", "It provides DMA capability"], ans: 1 },
    { q: "Why do QS0 and QS1 exist in maximum mode?", opts: ["To control the speed of the prefetch queue", "To allow coprocessors like the 8087 to track instruction execution for synchronization", "To indicate whether the bus is busy or idle", "To reset the queue after an interrupt"], ans: 1 },
    { q: "What does the LOCK prefix do in a multiprocessor system?", opts: ["Locks the instruction queue from being flushed", "Prevents other bus masters from taking the bus during the locked instruction", "Disables all interrupts for the locked instruction", "Locks a memory page from being paged out"], ans: 1 }
  ],
  challenge: "Design two 8086 systems on paper — one using minimum mode and one using maximum mode. List every support chip needed for each design (latches, transceivers, bus controller). Draw the signal flow for a memory read operation in both modes, showing which chip generates each control signal. Then explain why the IBM PC chose maximum mode even though it cost more.",
  resources: [
    { type: "docs", title: "Minimum and Maximum Mode of 8086", url: "https://www.geeksforgeeks.org/minimum-and-maximum-mode-of-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "8086 Min/Max Mode Explained", url: "https://www.youtube.com/watch?v=C-jPFBOuWXQ", source: "YouTube" },
    { type: "article", title: "8288 Bus Controller Datasheet", url: "https://www.righto.com/2023/01/the-8288-bus-controller.html", source: "Right0.com" },
    { type: "docs", title: "8086 System Design", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_system_design.htm", source: "TutorialsPoint" }
  ],
  eli5: "Imagine you are a kid building with LEGO. In minimum mode, you build everything yourself — you pick the bricks, stack them, and clean up. It is simpler but you can only do so much. In maximum mode, you have a helper friend (the 8288) who hands you the right bricks when you call out what you need. Now you can work faster and even let other kids help build different parts at the same time!",
  codeWalkthrough: [
    "In minimum mode, the CPU directly drives ALE, M/IO, RD, WR, DEN, and DT/R — these pins physically output the control signals that memory and I/O devices need.",
    "M/IO=1 tells the system this is a memory access. The 8282 latch captures the address when ALE pulses — same as before.",
    "DEN (Data Enable) activates the 8286 bus transceivers, and DT/R sets the direction — LOW for read (receive data from memory).",
    "In maximum mode, the same physical pins output different signals: S0, S1, S2 encode the bus cycle type as a 3-bit status code.",
    "The 8288 bus controller reads S2:S1:S0 = 101 and knows this means 'memory read' — it asserts MRDC, ALE, and DEN on behalf of the CPU.",
    "The 8087 coprocessor monitors QS0 and QS1 to know when the 8086 is fetching instructions from the queue — this keeps both processors in sync.",
    "RQ/GT0 allows the 8087 to request and be granted the bus using a compact 3-pulse handshake — faster than HOLD/HLDA.",
    "LOCK prevents any other bus master from taking the bus during an atomic XCHG instruction — critical for multiprocessor mutual exclusion."
  ],
  bugChallenge: {
    code: `; Maximum mode system — 8087 coprocessor not working
; Hardware connections:
;   8086 MN/MX = GND (maximum mode)
;   8288 connected to S0, S1, S2
;   8087 connected to AD0-AD15, A16-A19
;   8087 RQ/GT connected to 8086 RQ/GT0
;   8087 QS0, QS1 NOT connected (floating)
;
; Symptom: 8087 executes wrong instructions
; or hangs during ESC (coprocessor) opcodes`,
    hint: "How does the 8087 know which instruction the 8086 is currently executing?",
    answer: "Bug: QS0 and QS1 are not connected to the 8087. The 8087 coprocessor uses these queue status lines to track exactly when the 8086 fetches and decodes each instruction byte — this is how it identifies ESC (coprocessor) opcodes meant for itself. Without QS0/QS1, the 8087 cannot synchronize with the 8086's instruction stream and either executes the wrong operation or misses its instructions entirely. Fix: Connect QS0 and QS1 from the 8086 to the corresponding inputs on the 8087."
  },
  difficulty: "intermediate",
  prereqs: [13]
},
{
  id: 15,
  title: "Bus Timing, Ready Signal, and Wait States",
  subtitle: "How T-states compose a bus cycle and how slow devices stall the processor with wait states",
  analogy: "A bus cycle is like ordering at a drive-through. T1 is when you pull up and state your order (address). T2 is when the kitchen starts preparing (setup time). T3 is when the food is handed to you (data transfer). T4 is when you drive away (cycle ends). If the kitchen is slow, you just idle at the window — those are wait states (Tw).",
  points: [
    { t: "T-States: The Clock Subdivisions", d: "Every bus cycle consists of at least 4 clock periods called T1, T2, T3, and T4. Each T-state is one full clock cycle (e.g., at 5 MHz, each T-state is 200 ns). The CPU performs specific actions during each T-state in a predictable sequence.", code: "; At 5 MHz clock:\n;   1 T-state = 200 ns\n;   1 bus cycle = 4 T-states minimum = 800 ns\n;\n; T1: Output address, assert ALE\n; T2: Remove address, setup control signals\n; T3: Data transfer (read or write)\n; T4: Complete cycle, deassert control" },
    { t: "T1 — Address Phase", d: "During T1, the 8086 places the 20-bit address on AD0-AD15 and A16-A19. ALE is pulsed HIGH. External latches capture the address on ALE's falling edge. M/IO is set to indicate memory or I/O access. This is the 'here is where I want to go' phase.", code: "; T1 timing:\n;   Rising edge: Address appears on AD0-AD15\n;   ALE goes HIGH\n;   A16-A19 output upper address bits\n;   M/IO set (HIGH=memory, LOW=I/O)\n;\n;   Falling edge of ALE:\n;   8282 latch captures address\n;   Address is now held stable externally" },
    { t: "T2 — Control Phase", d: "During T2, the bus transitions from address to data. For a read, AD0-AD15 go to tri-state and RD is asserted. For a write, the CPU places data on AD0-AD15 and asserts WR. DEN enables the data bus transceivers.", code: "; T2 for a READ cycle:\n;   AD0-AD15 go tri-state (float)\n;   RD asserted LOW\n;   DEN asserted LOW (enable transceivers)\n;   DT/R = LOW (receive direction)\n;\n; T2 for a WRITE cycle:\n;   CPU places write data on AD0-AD15\n;   WR asserted LOW\n;   DEN asserted LOW\n;   DT/R = HIGH (transmit direction)" },
    { t: "T3 — Data Phase", d: "During T3, the actual data transfer happens. For a read, the addressed memory or I/O device places data on the bus and the CPU samples it. For a write, the memory captures the data from the bus. READY is sampled at the start of T3.", code: "; T3 for a READ cycle:\n;   Memory/IO device drives data on AD0-AD15\n;   CPU samples data near end of T3\n;   READY is checked at start of T3\n;\n; T3 for a WRITE cycle:\n;   Memory samples data from AD0-AD15\n;   Write data remains stable\n;   Memory latches data using WR rising edge" },
    { t: "T4 — Completion Phase", d: "During T4, the bus cycle completes. All control signals are deasserted (RD/WR go HIGH, DEN goes inactive). The data is latched into the CPU register (for reads) or confirmed written (for writes). The bus is then available for the next cycle.", code: "; T4 for a READ cycle:\n;   RD deasserted (goes HIGH)\n;   DEN deasserted\n;   Data latched into destination register\n;   Bus cycle complete\n;\n; T4 for a WRITE cycle:\n;   WR deasserted (goes HIGH)\n;   DEN deasserted\n;   Memory has captured the data\n;   Bus cycle complete" },
    { t: "READY Pin and Wait State Insertion", d: "The READY pin is sampled at the rising edge of T3. If READY is LOW (not ready), the CPU inserts idle Tw states — entire clock cycles where nothing happens. The CPU keeps checking READY each Tw until it goes HIGH, then proceeds to T3.", code: "; Normal cycle:   T1 - T2 - T3 - T4\n; With 1 wait:    T1 - T2 - Tw - T3 - T4\n; With 2 waits:   T1 - T2 - Tw - Tw - T3 - T4\n;\n; READY is checked at start of each Tw\n; As soon as READY = HIGH, proceed to T3\n;\n; Wait states add 200ns each (at 5 MHz)" },
    { t: "Address/Data Multiplexing in Detail", d: "The same 16 wires (AD0-AD15) carry address in T1 and data in T2-T4. The 8282 latch is clocked by ALE to hold the address. The 8286 transceiver is enabled by DEN to buffer the data. This multiplexing is the reason both chips are mandatory.", code: "; Without multiplexing (hypothetical):\n;   Need 20 address pins + 16 data pins = 36 pins\n;   Plus control pins = way more than 40!\n;\n; With multiplexing:\n;   AD0-AD15 = 16 pins (address + data shared)\n;   A16-A19  = 4 pins (upper address only)\n;   Total address/data = 20 pins\n;   Saves 16 pins!" },
    { t: "Idle States (Ti)", d: "When the CPU has no bus activity (e.g., executing an instruction that does not need memory access), the bus enters idle states (Ti). During Ti, the bus is inactive — no address, no data, no control signals asserted. The BIU may use Ti for prefetch.", code: "; Instruction: ADD AX, BX (register-to-register)\n; No memory access needed!\n;\n; Bus activity: Ti - Ti - Ti ...\n; (idle while EU executes internally)\n;\n; BIU may use idle time to prefetch\n; next instructions into the queue\n; This overlaps execution with fetching" },
    { t: "8284A Clock Generator and READY Synchronization", d: "The 8284A generates the system clock for the 8086 and also synchronizes the READY signal. External slow devices assert their ready signal asynchronously; the 8284A synchronizes it to the 8086 clock to prevent metastability.", code: "; 8284A functions:\n;   1. Crystal oscillator input / 3 = CLK\n;      e.g., 15 MHz crystal -> 5 MHz CLK\n;\n;   2. READY synchronization:\n;      RDY1, RDY2 inputs (active HIGH)\n;      AEN1, AEN2 enable inputs\n;      Synchronized READY output to 8086\n;\n;   3. RESET synchronization:\n;      RES input -> synchronized RESET output" },
    { t: "Bus Cycle Timing Calculations", d: "For a 5 MHz 8086, each T-state is 200 ns. A minimum bus cycle (no wait states) takes 4 × 200 = 800 ns. Adding n wait states costs n × 200 ns extra. Memory access time must be less than about 460 ns to avoid wait states at 5 MHz.", code: "; Timing calculation example:\n; Clock = 5 MHz -> T = 200 ns per T-state\n;\n; Bus cycle with 0 waits = 4T = 800 ns\n; Bus cycle with 1 wait  = 5T = 1000 ns\n; Bus cycle with 2 waits = 6T = 1200 ns\n;\n; If memory access time = 350 ns -> 0 waits\n; If memory access time = 600 ns -> 1 wait\n; If memory access time = 900 ns -> 2 waits" }
  ],
  whatIs: "A bus cycle is the sequence of T-states (T1 through T4) the 8086 uses to perform one memory or I/O transfer. T1 outputs the address, T2 sets up control signals, T3 transfers data, and T4 completes the cycle. If the memory or device is too slow, the READY pin inserts wait states (Tw) between T2 and T3 to stretch the cycle.",
  realWorld: "Wait states were a constant battle in early PC design. Fast CPUs paired with slow DRAM needed wait states — an 8 MHz 8086 with 150 ns DRAM might need 1-2 wait states per access. This directly impacted performance. The introduction of cache memory in later processors (386, 486) was specifically to eliminate wait states by keeping frequently accessed data in fast SRAM.",
  code: `; Complete bus cycle timing for MOV AX, [1000h]
; Assume 5 MHz clock, memory needs 1 wait state

; === T1 (200 ns) ===
; ALE = HIGH
; AD0-AD15 = 1000h (address)
; A16-A19 = segment upper bits
; M/IO = HIGH (memory access)
; ALE falls -> 8282 latches address 1000h

; === T2 (200 ns) ===
; AD0-AD15 go tri-state
; RD asserted LOW
; DEN asserted LOW
; DT/R = LOW (read direction)
; READY sampled -> READY = LOW (memory not ready)

; === Tw (200 ns) — wait state ===
; CPU does nothing, bus held
; READY sampled again -> READY = HIGH (memory ready)

; === T3 (200 ns) ===
; Memory places data on AD0-AD15
; CPU samples data

; === T4 (200 ns) ===
; RD deasserted (HIGH)
; DEN deasserted
; Data latched into AX
; Total: 5T = 1000 ns for this read`,
  funFact: "The term 'zero wait state' became a major marketing buzzword in the late 1980s. Companies would proudly advertise 'zero wait state' memory systems as a premium feature. Today's CPUs can execute instructions in fractions of a nanosecond, but an L3 cache miss to main memory can still cost 100+ nanoseconds — the modern equivalent of wait states!",
  quiz: [
    { q: "How many T-states are in a minimum (no wait state) bus cycle?", opts: ["2", "3", "4", "6"], ans: 2 },
    { q: "During which T-state is the READY pin first sampled?", opts: ["T1", "T2", "Start of T3 (or between T2 and T3)", "T4"], ans: 2 },
    { q: "At 5 MHz, how long does one bus cycle with 2 wait states take?", opts: ["800 ns", "1000 ns", "1200 ns", "1400 ns"], ans: 2 },
    { q: "Why is an 8282 latch necessary in an 8086 system?", opts: ["To buffer the data bus for long-distance signals", "To hold the address stable after AD0-AD15 switch from address to data mode", "To generate wait states for slow memory", "To synchronize the READY signal"], ans: 1 },
    { q: "What happens during idle states (Ti)?", opts: ["The CPU is halted and waiting for an interrupt", "The bus is inactive — no address or data — and the BIU may prefetch instructions", "The CPU inserts wait states for slow memory", "The CPU resets its internal registers"], ans: 1 }
  ],
  challenge: "Calculate the bus timing for a system with a 10 MHz 8086 (T-state = 100 ns) accessing memory with 250 ns access time. How many wait states are needed? What is the total bus cycle time? Then calculate the effective data transfer rate in bytes per second for continuous word (16-bit) reads. Finally, if the same system adds a 15 ns SRAM cache, how many wait states does the cache need?",
  resources: [
    { type: "docs", title: "8086 Bus Timing Diagrams", url: "https://www.geeksforgeeks.org/timing-diagram-of-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "8086 Bus Cycle Timing Explained", url: "https://www.youtube.com/watch?v=QOp4nKLMQaU", source: "YouTube" },
    { type: "article", title: "Wait States and Memory Timing", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_bus_cycle.htm", source: "TutorialsPoint" },
    { type: "docs", title: "8284A Clock Generator", url: "https://www.geeksforgeeks.org/8284-clock-generator-of-8086/", source: "GeeksforGeeks" }
  ],
  eli5: "Imagine you are at a candy machine. You put in your coin (T1 — tell the machine what you want). The machine starts working (T2 — getting ready). The candy drops (T3 — you get your data). You grab it and walk away (T4 — done!). But what if the machine is really slow? You just stand there waiting... and waiting... Those extra waiting moments are 'wait states.' The READY light tells you when the candy is finally there.",
  codeWalkthrough: [
    "T1: The address 1000h appears on AD0-AD15 and ALE pulses — the 8282 latch captures and holds this address for the rest of the bus cycle.",
    "M/IO = HIGH indicates this is a memory access, not I/O. A16-A19 carry the upper address bits from the segment calculation.",
    "T2: AD0-AD15 go tri-state (disconnect from driving address) and RD is pulled LOW — this tells the memory chip to start outputting data.",
    "DEN enables the 8286 transceivers and DT/R = LOW sets them to 'receive' direction — data flows from memory toward the CPU.",
    "READY is checked: since the memory needs more time, READY is LOW, so the CPU enters a wait state (Tw) instead of proceeding to T3.",
    "During Tw, nothing changes on the bus — the CPU just waits. At the end of Tw, READY is sampled again — this time it is HIGH.",
    "T3: With READY confirmed HIGH, the memory data is now valid on AD0-AD15 and the CPU samples it.",
    "T4: RD goes back HIGH (deasserted), DEN is deasserted, and the data value is latched into AX. Total cycle took 5 T-states = 1000 ns."
  ],
  bugChallenge: {
    code: `; System: 8086 at 8 MHz with 200 ns memory chips
; Problem: system crashes randomly, data corruption
;
; T-state at 8 MHz = 125 ns
; Bus cycle = 4T = 500 ns
; Memory access time = 200 ns
;
; Designer says: "200 ns < 500 ns, no wait states needed!"
; READY pin is tied permanently to VCC (always ready)
;
; But the system still has data errors...`,
    hint: "The memory access time budget is NOT the full bus cycle time — the address setup, latch delays, and transceiver delays consume part of the 500 ns.",
    answer: "Bug: The designer assumed the memory has the full 500 ns bus cycle time to respond, but that is incorrect. The address is not valid until partway through T1, the latch adds propagation delay (~20 ns), and the CPU needs data to be stable before the end of T3 (setup time ~50 ns). The actual window for memory access is roughly: 500 - 125 (T1 address setup) - 20 (latch delay) - 20 (transceiver delay) - 50 (CPU data setup) = ~285 ns. With 200 ns memory this just barely fits, but at temperature extremes or voltage tolerance limits, it fails. Fix: Either add 1 wait state (making the cycle 625 ns with plenty of margin) by using the 8284A READY circuit, or use faster memory (e.g., 100 ns access time)."
  },
  difficulty: "intermediate",
  prereqs: [14, 7]
},
{
  id: 16,
  title: "Reset, HOLD, HLDA, and Basic Control Signals",
  subtitle: "How the 8086 starts up, shares the bus with DMA, and uses essential control pins",
  analogy: "RESET is like a fire alarm drill at school — everyone stops what they are doing, returns to their default positions, and waits for the all-clear. HOLD/HLDA is like a valet parking system: the valet (DMA) asks for the car keys (HOLD), the driver (CPU) finishes parking and hands over the keys (HLDA), and the valet drives the car directly where it needs to go — much faster than giving the driver directions.",
  points: [
    { t: "RESET Sequence", d: "When RESET is held HIGH for at least 4 clock cycles, the 8086 stops all activity. On RESET going LOW, the CPU initializes: CS=FFFFh, IP=0000h, Flags=0000h, DS=ES=SS=0000h. The first instruction is fetched from physical address FFFF0h.", code: "; RESET initialization values:\n;   CS = FFFFh    (Code Segment)\n;   IP = 0000h    (Instruction Pointer)\n;   DS = 0000h    (Data Segment)\n;   ES = 0000h    (Extra Segment)\n;   SS = 0000h    (Stack Segment)\n;   SP = 0000h    (Stack Pointer)\n;   Flags = 0000h (all flags cleared)\n;\n; First fetch: CS:IP = FFFFh:0000h\n; Physical = FFFFh × 10h + 0000h = FFFF0h" },
    { t: "The Reset Vector at FFFF0h", d: "Since FFFF0h is only 16 bytes from the end of the 1 MB address space, there is not enough room for the full BIOS code. The first instruction at FFFF0h is typically a FAR JMP to the actual BIOS entry point lower in the ROM address space.", code: "; At physical address FFFF0h in ROM:\nJMP FAR F000h:E05Bh  ; Jump to BIOS start\n; This JMP takes 5 bytes: EA 5B E0 00 F0\n;\n; After this jump:\n;   CS = F000h\n;   IP = E05Bh\n;   Physical = F000h × 10h + E05Bh = FE05Bh\n; Now BIOS initialization code begins" },
    { t: "RESET Pin Electrical Requirements", d: "RESET must be held HIGH for a minimum of 4 clock cycles to guarantee proper initialization. The 8284A clock generator provides a synchronized RESET output from its RES input. During RESET, all bus outputs are tri-stated and the instruction queue is flushed.", code: "; 8284A provides synchronized RESET:\n;   RC circuit on RES input\n;   Provides clean RESET on power-up\n;\n; During RESET (pin HIGH):\n;   AD0-AD15 = tri-state (floating)\n;   A16-A19  = tri-state\n;   All control outputs inactive\n;   Instruction queue emptied\n;   Internal registers cleared" },
    { t: "HOLD — Bus Request Input", d: "The HOLD pin is an input to the 8086, asserted by a DMA controller (like 8237) or another bus master to request control of the system bus. The CPU checks HOLD at the end of each bus cycle — it will not stop mid-cycle.", code: "; DMA controller requests bus:\n;   1. 8237 DMA asserts HOLD = HIGH\n;   2. CPU finishes current bus cycle\n;   3. CPU checks HOLD between cycles\n;   4. If HOLD = HIGH -> grant bus\n;\n; HOLD is a level-triggered input\n; It must stay HIGH as long as the\n; DMA controller needs the bus" },
    { t: "HLDA — Hold Acknowledge Output", d: "After detecting HOLD=HIGH and finishing the current bus cycle, the 8086 asserts HLDA (HIGH) to signal that it has released the bus. All address, data, and control lines go tri-state. The DMA controller can now directly access memory.", code: "; HLDA handshake sequence:\n;   CPU -> HLDA = HIGH (bus released)\n;   AD0-AD15 -> tri-state\n;   A16-A19  -> tri-state\n;   RD, WR, M/IO -> tri-state\n;\n; DMA controller now owns the bus:\n;   DMA drives address lines\n;   DMA drives RD/WR and data lines\n;   DMA transfers data directly to memory" },
    { t: "DMA Bus Release", d: "When the DMA controller finishes its transfer, it deasserts HOLD (LOW). The 8086 sees HOLD=LOW, deasserts HLDA, reclaims the bus, and resumes normal operation from where it left off. No instruction state is lost.", code: "; DMA transfer complete:\n;   DMA deasserts HOLD = LOW\n;   CPU deasserts HLDA = LOW\n;   CPU reclaims bus (drives address/data)\n;   CPU resumes execution\n;\n; Key: CPU internal state is preserved\n; Registers, flags, IP — all unchanged\n; Only the bus was temporarily released" },
    { t: "INTA — Interrupt Acknowledge", d: "INTA is an output asserted during interrupt acknowledge bus cycles. When the CPU accepts an interrupt on INTR, it runs two INTA cycles. The first is a notification; the second tells the interrupt controller (8259A) to place the interrupt vector number on the data bus.", code: "; Interrupt acknowledge sequence:\n;   1. Device asserts INTR = HIGH\n;   2. CPU finishes current instruction\n;   3. CPU checks IF flag\n;   4. If IF=1, CPU runs 2 INTA cycles:\n;\n;   INTA cycle 1: INTA pulsed LOW\n;     (tells 8259A: interrupt accepted)\n;   INTA cycle 2: INTA pulsed LOW\n;     (8259A places vector on data bus)\n;   5. CPU reads vector, jumps to ISR" },
    { t: "TEST Pin and WAIT Instruction", d: "The TEST pin is an input checked by the WAIT (or FWAIT) instruction. If TEST=LOW, the CPU continues. If TEST=HIGH, the CPU idles until TEST goes LOW. This is used to synchronize with the 8087 coprocessor — WAIT checks if the 8087 is still busy.", code: "; Coprocessor synchronization:\nFWAIT           ; Check TEST pin\n                ; If TEST=HIGH (8087 busy):\n                ;   CPU idles, checks each cycle\n                ; If TEST=LOW (8087 done):\n                ;   CPU continues to next instruction\n;\n; 8087 BUSY pin -> 8086 TEST pin\n; Ensures 8087 finishes before CPU\n; reads the coprocessor result" },
    { t: "LOCK Output", d: "LOCK is asserted (LOW) during execution of any instruction prefixed with LOCK. It prevents other bus masters from gaining control of the bus — HOLD requests are not honored during a LOCKed instruction. Essential for atomic read-modify-write operations.", code: "; Atomic test-and-set for mutex:\nLOCK XCHG [lock_var], AL\n; During XCHG execution:\n;   LOCK pin = LOW (asserted)\n;   HOLD requests are blocked\n;   Read and write happen atomically\n;\n; After XCHG completes:\n;   LOCK pin = HIGH (deasserted)\n;   HOLD requests honored again\n;\nCMP AL, 0\nJNZ spin_wait   ; lock was held, try again" },
    { t: "Control Signal Summary Table", d: "Each control signal has a specific role: RESET initializes, HOLD/HLDA arbitrate the bus, INTA acknowledges interrupts, TEST synchronizes with coprocessors, and LOCK ensures atomicity. Together they form the handshake protocol between the CPU and external hardware.", code: "; Control Signal Quick Reference:\n; Pin    | Dir | Purpose\n; -------+-----+----------------------------\n; RESET  | IN  | Initialize CPU\n; HOLD   | IN  | Request bus from CPU\n; HLDA   | OUT | CPU grants bus\n; INTR   | IN  | Maskable interrupt request\n; INTA   | OUT | Interrupt acknowledge\n; NMI    | IN  | Non-maskable interrupt\n; TEST   | IN  | Checked by WAIT instruction\n; LOCK   | OUT | Lock bus (atomic access)" }
  ],
  whatIs: "The 8086's control signals manage system initialization (RESET sets CS=FFFFh, IP=0000h so execution begins at FFFF0h), bus sharing (HOLD/HLDA handshake lets DMA controllers take over the bus for direct memory transfers), interrupt handling (INTA acknowledges hardware interrupts), coprocessor synchronization (TEST/WAIT), and bus locking (LOCK for atomic operations).",
  realWorld: "Every time you power on or restart your computer, the CPU goes through a RESET sequence almost identical to the 8086's — modern x86 processors still start at a high address in the firmware (UEFI/BIOS) ROM. DMA transfers, pioneered with the 8086's HOLD/HLDA mechanism, are still fundamental — your disk controller, network card, and GPU all use DMA to transfer data to RAM without burdening the CPU.",
  code: `; Complete power-on boot sequence of an 8086 system

; === PHASE 1: RESET ===
; Power supply stabilizes, 8284A holds RESET HIGH
; After 4+ clock cycles, RESET goes LOW
; CPU state after RESET:
;   CS=FFFFh, IP=0000h -> fetch from FFFF0h
;   DS=ES=SS=0000h, SP=0000h
;   Flags=0000h (IF=0, interrupts disabled)

; === PHASE 2: First instruction fetch ===
; Physical address = FFFFh << 4 + 0000h = FFFF0h
; ROM at FFFF0h contains:
    JMP FAR F000h:E05Bh  ; Jump to BIOS

; === PHASE 3: BIOS initialization ===
; CS=F000h, IP=E05Bh
; BIOS code initializes hardware:
    CLI                   ; Ensure interrupts off
    MOV AX, 0000h
    MOV DS, AX           ; DS = 0000h
    MOV SS, AX           ; SS = 0000h
    MOV SP, 0400h        ; Set up stack

; === PHASE 4: Hardware test and setup ===
; BIOS tests RAM, initializes 8259A, 8253, etc.
; Sets up interrupt vector table at 0000:0000
; Eventually enables interrupts:
    STI                   ; IF=1, INTR now active

; === PHASE 5: Boot ===
; BIOS loads boot sector from disk via DMA:
;   8237 DMA asserts HOLD
;   CPU asserts HLDA, releases bus
;   DMA reads disk data directly to RAM at 7C00h
;   DMA releases HOLD
;   CPU resumes, JMPs to 0000:7C00h (boot sector)`,
  funFact: "The reset vector address FFFF0h was chosen by Intel because it is near the top of the 1 MB address space, ensuring that ROM (which must be at a fixed location) could be mapped to the highest addresses. This convention persists to this day — modern x86-64 processors start execution at FFFFFFF0h (4 GB - 16 bytes) in their initial real-address mode, maintaining backward compatibility with a design decision from 1978!",
  quiz: [
    { q: "What are the values of CS and IP immediately after RESET?", opts: ["CS=0000h, IP=FFFFh", "CS=FFFFh, IP=0000h", "CS=F000h, IP=FFF0h", "CS=0000h, IP=0000h"], ans: 1 },
    { q: "Why is the first instruction at FFFF0h typically a FAR JMP?", opts: ["Because JMP is the only instruction the CPU can execute after RESET", "Because FFFF0h is only 16 bytes from the end of the address space — not enough room for full BIOS code", "Because FAR JMP is faster than other instructions", "Because the instruction queue is empty and needs to be filled"], ans: 1 },
    { q: "In the HOLD/HLDA handshake, what does the CPU do with its bus lines after asserting HLDA?", opts: ["It drives them all to logic HIGH", "It drives them all to logic LOW", "It puts them in tri-state (high impedance) so the DMA controller can drive them", "It continues using them for internal operations"], ans: 2 },
    { q: "How many INTA bus cycles does the 8086 execute when acknowledging an INTR interrupt?", opts: ["One", "Two — first to notify, second to read the interrupt vector number", "Three", "It depends on the interrupt priority"], ans: 1 },
    { q: "What instruction checks the TEST pin, and what is its primary use?", opts: ["HLT checks TEST to wake the CPU", "WAIT/FWAIT checks TEST — used to synchronize with the 8087 coprocessor", "NOP checks TEST as a side effect", "INT checks TEST before vectoring"], ans: 1 }
  ],
  challenge: "Write the first 10 instructions of a BIOS initialization routine that would execute after RESET. Your code should: (1) jump from the reset vector FFFF0h to a lower ROM address, (2) disable interrupts, (3) set up DS, ES, SS to known values, (4) set up a stack pointer, (5) test a memory location to verify RAM is working. Then describe the HOLD/HLDA sequence that would occur when loading the boot sector from a floppy disk via DMA.",
  resources: [
    { type: "docs", title: "8086 Reset and Startup", url: "https://www.geeksforgeeks.org/reset-in-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "HOLD/HLDA and DMA in 8086", url: "https://www.youtube.com/watch?v=zt2vJaKPvYU", source: "YouTube" },
    { type: "article", title: "x86 Boot Process from RESET to OS", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_interrupts.htm", source: "TutorialsPoint" },
    { type: "docs", title: "8086 Control Signals", url: "https://www.javatpoint.com/control-signals-in-8086", source: "JavaTPoint" }
  ],
  eli5: "When you press the power button on a computer, it is like waking up in the morning. RESET is the alarm clock — it puts everything back to the start. The CPU opens its eyes and looks at one specific spot (FFFF0h) for its first instruction, which is like a sticky note on the nightstand saying 'Go to the kitchen' (JMP to BIOS). HOLD/HLDA is like when your mom says 'Let me use the table for a moment' — you step back, she does her thing, then gives it back to you.",
  codeWalkthrough: [
    "After RESET releases, CS=FFFFh and IP=0000h. The physical address is FFFFh shifted left 4 bits plus 0000h = FFFF0h. ROM must be mapped here.",
    "JMP FAR F000h:E05Bh at FFFF0h loads CS with F000h and IP with E05Bh — this jumps to the actual BIOS code further down in ROM.",
    "CLI clears the Interrupt Flag — we do not want interrupts firing before the interrupt vector table and hardware are initialized.",
    "MOV AX,0000h then MOV DS/SS,AX sets the data and stack segments to zero — segment registers cannot be loaded with immediate values directly.",
    "MOV SP,0400h sets up the stack pointer so PUSH, POP, CALL, and interrupts have a valid stack to use.",
    "BIOS code then tests RAM, initializes peripheral chips (8259A interrupt controller, 8253 timer, 8237 DMA), and builds the interrupt vector table.",
    "STI enables interrupts once everything is set up — now the 8259A can deliver hardware interrupts to the CPU via INTR.",
    "The DMA sequence: 8237 asserts HOLD, CPU finishes its current cycle and asserts HLDA, bus goes tri-state, DMA reads disk sector directly to RAM at 7C00h, DMA releases HOLD, CPU deasserts HLDA and resumes.",
    "Finally the BIOS jumps to 0000:7C00h where the boot sector code now resides in RAM — the operating system loading process begins."
  ],
  bugChallenge: {
    code: `; After RESET, the system hangs — never reaches BIOS
; Hardware setup:
;   ROM chip mapped at address range F0000h-FFFFFh
;   RAM chip mapped at address range 00000h-0FFFFh
;   No other memory chips installed
;
; ROM contents at offset FFF0h (physical FFFF0h):
;   JMP FAR 0000h:8000h  ; Jump to RAM at 08000h
;
; Observation: CPU fetches first instruction OK
; but hangs immediately after the JMP`,
    hint: "Where does the JMP try to go, and is there any memory mapped at that address?",
    answer: "Bug: The JMP FAR 0000h:8000h jumps to physical address 0000h × 10h + 8000h = 08000h. But the RAM chip only covers 00000h-0FFFFh (64 KB) and the ROM covers F0000h-FFFFFh. Address 08000h is within the RAM range — but it contains random garbage data since no code has been loaded into RAM yet! The CPU tries to execute random bytes and crashes. Fix: The reset vector JMP should jump to an address within the ROM range, e.g., JMP FAR F000h:E05Bh (which maps to FE05Bh, within the ROM). Only jump to RAM after loading valid code there."
  },
  difficulty: "intermediate",
  prereqs: [13]
},
{
  id: 17,
  title: "8086 Addressing Modes",
  subtitle: "Eight ways the 8086 finds its operands — from immediate values to complex memory calculations",
  analogy: "Addressing modes are like different ways to find a book. Immediate mode: someone hands you the book directly. Register mode: you already have it on your desk. Direct mode: you are given the exact shelf number. Register indirect: you have a card that says which shelf to check. Based-indexed: you combine a section number plus a shelf offset to find it — the more complex the address, the more flexible your search.",
  points: [
    { t: "Immediate Addressing", d: "The operand is a constant value embedded directly in the instruction. Fast because no memory access is needed to get the operand — the data is part of the instruction itself. Used for loading constants, initializing counters, and setting bit masks.", code: "; Immediate addressing: data in instruction\nMOV AX, 1234h    ; AX = 1234h (16-bit immediate)\nMOV BL, 0Fh      ; BL = 0Fh (8-bit immediate)\nADD CX, 0005h    ; CX = CX + 5\nAND AL, 11110000b ; Mask upper nibble\n;\n; The value 1234h is encoded in the\n; instruction bytes — no memory lookup" },
    { t: "Register Addressing", d: "Both operands are in CPU registers. The fastest mode because no memory access is needed — the ALU works directly with register contents. Registers are AX, BX, CX, DX (16-bit) or AH, AL, BH, BL, CH, CL, DH, DL (8-bit).", code: "; Register addressing: both operands in registers\nMOV AX, BX     ; AX = BX (16-bit register to register)\nMOV AL, CH     ; AL = CH (8-bit register to register)\nADD AX, CX    ; AX = AX + CX\nXCHG AX, DX   ; Swap AX and DX contents\n;\n; No memory access — fastest execution" },
    { t: "Direct Addressing", d: "The instruction contains the exact memory offset address. The physical address is computed as DS × 10h + offset. Used when you know the fixed location of a variable at assembly time, like global variables or lookup tables.", code: "; Direct addressing: address in instruction\nMOV AX, [2000h]  ; AX = word at DS:2000h\nMOV [3000h], BL  ; Byte at DS:3000h = BL\n;\n; Physical address calculation:\n;   If DS = 1000h:\n;   PA = 1000h × 10h + 2000h\n;   PA = 10000h + 2000h = 12000h\n;   Read 16-bit word from address 12000h" },
    { t: "Register Indirect Addressing", d: "The offset address is held in a register (BX, SI, or DI). The register acts as a pointer. Useful for traversing arrays and data structures where the address changes at runtime. Default segment is DS (or SS if BP is used).", code: "; Register indirect: register holds address\nMOV BX, 2000h    ; BX points to offset 2000h\nMOV AX, [BX]     ; AX = word at DS:BX = DS:2000h\n;\nMOV SI, 1000h    ; SI points to offset 1000h\nMOV AL, [SI]     ; AL = byte at DS:SI = DS:1000h\n;\n; BP uses SS by default:\nMOV BP, 0100h\nMOV AX, [BP]     ; AX = word at SS:BP = SS:0100h" },
    { t: "Based Addressing", d: "The effective address is computed as base register (BX or BP) plus a displacement constant. BX-based uses DS as default segment; BP-based uses SS. Ideal for accessing fields within structures or stack frame variables.", code: "; Based addressing: base register + displacement\nMOV AX, [BX+10h]   ; EA = BX + 10h, segment DS\n                     ; AX = word at DS:(BX+10h)\n;\nMOV CL, [BP+04h]   ; EA = BP + 04h, segment SS\n                     ; CL = byte at SS:(BP+04h)\n;\n; Useful for structure field access:\n;   BX = start of structure\n;   +10h = offset to 'name' field\n;   MOV AX, [BX+10h] reads the name field" },
    { t: "Indexed Addressing", d: "The effective address is an index register (SI or DI) plus a displacement. Default segment is DS. Ideal for accessing elements of an array where the displacement is the array base and SI/DI is the element offset.", code: "; Indexed addressing: index register + displacement\nMOV AX, [SI+20h]  ; EA = SI + 20h, segment DS\n                    ; AX = word at DS:(SI+20h)\n;\nMOV BL, [DI+05h]  ; EA = DI + 05h, segment DS\n                    ; BL = byte at DS:(DI+05h)\n;\n; Array access pattern:\n;   20h = base address of array\n;   SI  = index × element_size\n;   MOV AX, [SI+20h] = array[index]" },
    { t: "Based-Indexed Addressing", d: "Combines a base register (BX or BP) with an index register (SI or DI). Effective address = base + index. Useful for 2D arrays or accessing elements within an array of structures. Optionally includes a displacement.", code: "; Based-indexed: base + index (no displacement)\nMOV AX, [BX+SI]     ; EA = BX + SI, segment DS\nMOV CL, [BP+DI]     ; EA = BP + DI, segment SS\n;\n; Based-indexed WITH displacement:\nMOV AX, [BX+SI+10h] ; EA = BX + SI + 10h\n                      ; Segment DS (BX-based)\n;\n; 2D array: BX=row_offset, SI=col_offset\n;   10h = array base\n;   Accesses array[row][col]" },
    { t: "Segment Override Prefix", d: "By default, data accesses use DS, stack accesses use SS, and code fetches use CS. You can override the default segment with a prefix: ES:, CS:, SS:, DS:. This lets you access data in any segment regardless of the addressing mode.", code: "; Default segments:\n;   [BX], [SI], [DI], [disp] -> DS\n;   [BP] -> SS\n;   Code fetch -> CS\n;\n; Segment override examples:\nMOV AX, ES:[BX]      ; Use ES instead of DS\nMOV AL, CS:[SI+10h]  ; Read from code segment\nMOV SS:[DI], BX      ; Write to stack segment\n;\n; Override adds 1-byte prefix to instruction" },
    { t: "Addressing Mode Summary and EA Formula", d: "Each mode has an effective address formula: Immediate=none, Register=none, Direct=disp, Register Indirect=reg, Based=base+disp, Indexed=index+disp, Based-Indexed=base+index+disp. The physical address is always segment × 10h + EA.", code: "; Effective Address formulas:\n; Mode              | EA\n; ------------------+-----------------------\n; Immediate         | (no memory access)\n; Register          | (no memory access)\n; Direct            | EA = displacement\n; Register Indirect | EA = [BX|SI|DI|BP]\n; Based             | EA = [BX|BP] + disp\n; Indexed           | EA = [SI|DI] + disp\n; Based-Indexed     | EA = [BX|BP]+[SI|DI]\n; Based-Idx + Disp  | EA = [BX|BP]+[SI|DI]+disp" }
  ],
  whatIs: "Addressing modes define how the 8086 locates operands. The eight modes range from immediate (data in the instruction) and register (data in a register) to complex based-indexed with displacement (base register + index register + constant). Each mode computes an effective address (EA) that is combined with a segment register to form the 20-bit physical address.",
  realWorld: "Compilers choose addressing modes based on the data structure being accessed. A global variable uses direct addressing. A local variable on the stack uses BP-based addressing. Array traversal uses indexed addressing. A field in an array of structures uses based-indexed with displacement. Understanding these modes helps you read disassembled code and optimize assembly routines.",
  code: `; Demonstrating all 8086 addressing modes

; Setup segment
MOV AX, 1000h
MOV DS, AX        ; DS = 1000h

; 1. Immediate
MOV CX, 0064h     ; CX = 100 decimal

; 2. Register
MOV DX, CX        ; DX = CX = 0064h

; 3. Direct
MOV AX, [0200h]   ; AX = word at DS:0200h (PA=10200h)

; 4. Register Indirect
MOV BX, 0200h
MOV AX, [BX]      ; AX = word at DS:BX = DS:0200h

; 5. Based
MOV AX, [BX+04h]  ; AX = word at DS:(BX+04h) = DS:0204h

; 6. Indexed
MOV SI, 0002h
MOV AX, [SI+0200h] ; AX = word at DS:(SI+0200h) = DS:0202h

; 7. Based-Indexed
MOV AX, [BX+SI]    ; AX = word at DS:(BX+SI) = DS:0202h

; 8. Based-Indexed with Displacement
MOV AX, [BX+SI+10h] ; AX = word at DS:(BX+SI+10h) = DS:0212h

; Segment override
MOV AX, ES:[BX+SI]  ; Same EA, but uses ES instead of DS`,
  funFact: "The based-indexed addressing mode with displacement was so flexible that it could encode a 2D array access in a single instruction — something many RISC architectures need multiple instructions to do. This 'CISC richness' is one reason Intel's x86 survived while simpler architectures came and went.",
  quiz: [
    { q: "In MOV AX, [BX+SI+10h], what is the effective address formula?", opts: ["EA = BX", "EA = SI + 10h", "EA = BX + SI + 10h", "EA = BX × SI + 10h"], ans: 2 },
    { q: "Which addressing mode does MOV AX, 5678h use?", opts: ["Direct", "Immediate", "Register", "Based"], ans: 1 },
    { q: "If DS=2000h and the instruction is MOV AX, [3000h], what is the physical address?", opts: ["23000h", "5000h", "50000h", "3000h"], ans: 0 },
    { q: "Which registers can be used as base registers in based addressing?", opts: ["AX and DX", "SI and DI", "BX and BP", "CX and SP"], ans: 2 },
    { q: "What is the default segment register when BP is used in an addressing mode?", opts: ["DS", "CS", "ES", "SS"], ans: 3 }
  ],
  challenge: "Given DS=1000h, BX=0100h, SI=0020h, DI=0040h, BP=0200h, SS=2000h, calculate the effective address AND the 20-bit physical address for each: (a) MOV AX,[BX], (b) MOV AX,[BP+10h], (c) MOV AX,[BX+SI+08h], (d) MOV AX,ES:[DI+30h] where ES=3000h. Show all work.",
  resources: [
    { type: "docs", title: "8086 Addressing Modes", url: "https://www.geeksforgeeks.org/addressing-modes-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "All 8086 Addressing Modes Explained", url: "https://www.youtube.com/watch?v=nKJICQFNGhQ", source: "YouTube" },
    { type: "article", title: "Addressing Modes with Examples", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_addressing_modes.htm", source: "TutorialsPoint" },
    { type: "docs", title: "Intel 8086 Programmer's Reference", url: "https://edge.edx.org/c4x/BITSPilani/EEE231/asset/8086_family_Users_Manual_1_.pdf", source: "Intel" }
  ],
  eli5: "Imagine you need to find a toy. Immediate: someone just hands it to you. Register: it is already in your pocket. Direct: you are told 'shelf number 5.' Register indirect: you look at a card that says a shelf number. Based: your friend says 'go to section B, then 3 shelves over.' Indexed: 'go to the toy aisle, then 5 spots down.' Based-indexed: 'section B, aisle 3, spot 5.' More steps = more flexibility to find anything!",
  codeWalkthrough: [
    "MOV AX, 1000h / MOV DS, AX — loads DS with 1000h. We cannot MOV directly into a segment register, so we use AX as a bridge.",
    "MOV CX, 0064h — immediate addressing: the value 0064h (100 decimal) is encoded directly in the instruction bytes.",
    "MOV DX, CX — register addressing: both operands are in registers, no memory access needed, executes in minimum time.",
    "MOV AX, [0200h] — direct addressing: the offset 0200h is in the instruction. Physical address = 1000h×10h + 0200h = 10200h.",
    "MOV BX, 0200h / MOV AX, [BX] — register indirect: BX holds the offset. Same physical address as direct, but now we can change BX at runtime to access different locations.",
    "MOV AX, [BX+04h] — based addressing: EA = 0200h + 04h = 0204h. Physical = 10204h. Good for accessing a field at offset 4 in a structure pointed to by BX.",
    "MOV AX, [SI+0200h] — indexed addressing: EA = 0002h + 0200h = 0202h. Physical = 10202h. SI acts as an array index.",
    "MOV AX, [BX+SI] — based-indexed: EA = 0200h + 0002h = 0202h. BX could be row base, SI the column offset.",
    "MOV AX, [BX+SI+10h] — based-indexed with displacement: EA = 0200h + 0002h + 10h = 0212h. The most flexible mode.",
    "ES:[BX+SI] — segment override: same EA calculation but uses ES instead of the default DS. Useful for accessing data in the extra segment."
  ],
  bugChallenge: {
    code: `; Goal: Read byte from array at DS:2000h, index 5
; DS = 1000h, array base = 2000h
;
MOV SI, 5           ; index = 5
MOV AL, [SI+2000h]  ; Read array[5]
;
; Programmer expects PA = 1000h*10 + 2000h + 5 = 12005h
; But the byte read is wrong!
;
; Separately, the programmer tries to access stack:
MOV AX, [BP]        ; Read from stack
; But BP = 0, and programmer expects DS:0000h`,
    hint: "Think about the default segment for BP. Also, is the index calculation correct for multi-byte elements?",
    answer: "Bug 1: If the array contains words (2-byte elements) rather than bytes, index 5 should be SI=5*2=10 (0Ah), not 5. MOV SI,5 accesses the 5th byte, not the 5th word. Fix: MOV SI, 000Ah for word arrays. Bug 2: MOV AX,[BP] uses SS as the default segment (not DS), so it reads from SS:0000h instead of DS:0000h. If SS and DS differ, this reads the wrong location. Fix: Use MOV AX, DS:[BP] to override the segment, or use BX instead of BP if you want DS as the default."
  },
  difficulty: "intermediate",
  prereqs: [11, 12]
},
{
  id: 18,
  title: "Data Sizes, Endianness, and Alignment",
  subtitle: "How the 8086 stores bytes and words in memory — little-endian order and alignment effects",
  analogy: "Little-endian is like writing a phone number starting with the last digit: 1234 becomes '4321' in memory. It seems backwards to humans, but it makes the hardware simpler — the CPU always finds the least significant byte first at the base address, like always finding the ones digit at the front of the line.",
  points: [
    { t: "Byte (8-bit) vs Word (16-bit)", d: "The 8086 is a 16-bit processor: its registers and data bus are 16 bits wide. A byte is 8 bits (00h to FFh). A word is 16 bits (0000h to FFFFh). Instructions can operate on either bytes or words, determined by the register used (AL=byte, AX=word).", code: "; Byte operations (8-bit):\nMOV AL, 42h       ; AL = 42h (1 byte)\nMOV [2000h], AL   ; Store 1 byte at DS:2000h\n;\n; Word operations (16-bit):\nMOV AX, 1234h     ; AX = 1234h (1 word = 2 bytes)\nMOV [2000h], AX   ; Store 2 bytes at DS:2000h\n                   ; Low byte 34h at 2000h\n                   ; High byte 12h at 2001h" },
    { t: "Little-Endian Byte Order", d: "The 8086 uses little-endian storage: the least significant byte (LSB) is stored at the lower memory address, and the most significant byte (MSB) at the higher address. For word 1234h: byte 34h goes to address N, byte 12h goes to address N+1.", code: "; MOV AX, 1234h / MOV [2000h], AX\n; Memory layout (little-endian):\n;   Address 2000h: 34h  (low byte of 1234h)\n;   Address 2001h: 12h  (high byte of 1234h)\n;\n; Reading it back:\n;   MOV AX, [2000h]\n;   AX = 1234h (CPU reassembles correctly)\n;\n; A 32-bit value 12345678h (in later x86):\n;   Addr+0: 78h, Addr+1: 56h\n;   Addr+2: 34h, Addr+3: 12h" },
    { t: "Why Little-Endian?", d: "Little-endian simplifies hardware for multi-precision arithmetic: adding two multi-byte numbers starts with the least significant byte, which is always at the base address. It also allows reading a byte value from the same address whether you treat it as a byte or word — the low byte is always at offset 0.", code: "; Advantage: same address for byte or word\n; Variable stored at address 2000h:\n;   As word: MOV AX, [2000h] -> AX = 1234h\n;   As byte: MOV AL, [2000h] -> AL = 34h (low byte)\n;\n; The low byte is always at the base address!\n; This makes type conversions simpler in hardware\n;\n; Multi-byte addition starts at LSB:\n;   ADD [2000h], BL  ; add low bytes first\n;   ADC [2001h], BH  ; then high bytes with carry" },
    { t: "Word Alignment", d: "A word is 'aligned' if stored at an even address (divisible by 2). The 8086 can access unaligned words, but it takes two bus cycles instead of one — the bus interface must read two separate bytes and combine them. Aligned access is twice as fast.", code: "; Aligned word access (1 bus cycle):\nMOV AX, [2000h]   ; 2000h is even -> aligned\n                    ; One bus cycle reads both bytes\n;\n; Unaligned word access (2 bus cycles!):\nMOV AX, [2001h]   ; 2001h is odd -> unaligned\n                    ; Cycle 1: read byte at 2001h\n                    ; Cycle 2: read byte at 2002h\n                    ; CPU combines them into AX\n;\n; Performance: aligned = 4T, unaligned = 8T" },
    { t: "DB Directive — Define Byte", d: "DB (Define Byte) reserves and initializes one or more bytes in memory. Used for byte-sized variables, character strings, and lookup tables. Each value occupies exactly 1 byte. Strings are stored as consecutive ASCII bytes.", code: "; DB examples:\ncount    DB  0          ; 1 byte, initialized to 0\nmax_val  DB  0FFh       ; 1 byte = 255\nmessage  DB  'Hello', 0 ; 6 bytes (5 chars + null)\ntable    DB  10, 20, 30, 40, 50  ; 5 bytes\n;\n; Memory layout of message:\n;   offset+0: 48h ('H')\n;   offset+1: 65h ('e')\n;   offset+2: 6Ch ('l')\n;   offset+3: 6Ch ('l')\n;   offset+4: 6Fh ('o')\n;   offset+5: 00h (null terminator)" },
    { t: "DW Directive — Define Word", d: "DW (Define Word) reserves and initializes 16-bit words. Each word occupies 2 bytes stored in little-endian order. Used for 16-bit variables, addresses, and offset tables. Useful for storing pointers and segment:offset pairs.", code: "; DW examples:\nresult   DW  0          ; 2 bytes, initialized to 0\nbig_val  DW  1234h      ; 2 bytes: 34h, 12h\noffsets  DW  100h, 200h, 300h  ; 6 bytes total\n;\n; Memory layout of big_val (1234h):\n;   offset+0: 34h  (low byte)\n;   offset+1: 12h  (high byte)\n;\n; Memory layout of offsets:\n;   +0: 00h, +1: 01h  (0100h)\n;   +2: 00h, +3: 02h  (0200h)\n;   +4: 00h, +5: 03h  (0300h)" },
    { t: "DD Directive — Define Doubleword", d: "DD (Define Doubleword) reserves 4 bytes (32 bits). Used for far pointers (segment:offset), 32-bit values, and floating-point data. Stored in little-endian: the least significant byte at the lowest address.", code: "; DD examples:\nfar_ptr  DD  0F000E05Bh  ; 4 bytes for FAR pointer\n                          ; offset=E05Bh, segment=F000h\n;\n; Memory layout (little-endian):\n;   +0: 5Bh  (low byte of offset)\n;   +1: E0h  (high byte of offset)\n;   +2: 00h  (low byte of segment)\n;   +3: F0h  (high byte of segment)\n;\n; LDS SI, [far_ptr] loads:\n;   SI = E05Bh (offset) from +0,+1\n;   DS = F000h (segment) from +2,+3" },
    { t: "DUP Operator", d: "DUP repeats a value or pattern to initialize multiple bytes or words. '100 DUP(0)' creates 100 bytes of zeros. 'DUP(?)' leaves memory uninitialized. Essential for declaring arrays and buffers of known size.", code: "; DUP examples:\nbuffer   DB  256 DUP(0)     ; 256 bytes, all zero\nstack_space DB 512 DUP(?)  ; 512 bytes, uninitialized\npattern  DB  10 DUP('AB')  ; 20 bytes: ABABABABAB...\nword_arr DW  50 DUP(0FFFFh); 100 bytes (50 words)\n;\n; DUP(?) means 'reserve space but don't\n; initialize' — saves time in assembler\n; but contents are undefined at runtime" },
    { t: "Byte Order in Instruction Encoding", d: "Instructions themselves are stored in little-endian format. A MOV AX, 1234h encodes as B8 34 12 — opcode B8 followed by the immediate value in little-endian. Understanding this helps when reading memory dumps and debugging.", code: "; MOV AX, 1234h instruction encoding:\n;   B8 34 12\n;   B8 = opcode for MOV AX, imm16\n;   34 = low byte of 1234h\n;   12 = high byte of 1234h\n;\n; MOV BX, 5678h instruction encoding:\n;   BB 78 56\n;   BB = opcode for MOV BX, imm16\n;   78 = low byte of 5678h\n;   56 = high byte of 5678h" }
  ],
  whatIs: "The 8086 handles data as bytes (8-bit) or words (16-bit) and stores multi-byte values in little-endian format — the least significant byte at the lowest address. Word-aligned accesses (even addresses) complete in one bus cycle; unaligned accesses take two. Assembler directives DB, DW, and DD define data in memory with proper sizing and initialization.",
  realWorld: "Little-endian is used by all x86 and ARM processors today — when you inspect memory in any debugger on a PC, you see little-endian byte order. Network protocols use big-endian (called 'network byte order'), which is why functions like htons() and ntohs() exist in socket programming to convert between the two formats. Alignment issues still matter — accessing an unaligned 64-bit value on modern x86 can be 2-3x slower than aligned access.",
  code: `; Demonstrating endianness and alignment in 8086

; Setup
MOV AX, 2000h
MOV DS, AX         ; DS = 2000h

; Store a word at an even (aligned) address
MOV AX, 0ABCDh
MOV [0100h], AX    ; PA = 20100h
; Memory: 20100h = CDh (low byte)
;         20101h = ABh (high byte)

; Store a word at an odd (unaligned) address
MOV [0101h], AX    ; PA = 20101h (UNALIGNED!)
; Memory: 20101h = CDh (low byte)
;         20102h = ABh (high byte)
; This takes 2 bus cycles instead of 1!

; Read back to verify endianness
MOV BX, [0100h]    ; BX = ABCDh (reassembled)
MOV BL, [0100h]    ; BL = CDh (just the low byte)

; Data definition examples
; (in data segment)
; my_byte  DB  42h          ; 1 byte
; my_word  DW  1234h        ; 2 bytes: 34h, 12h
; my_dword DD  12345678h    ; 4 bytes: 78h, 56h, 34h, 12h
; my_buf   DB  100 DUP(0)   ; 100 zero bytes

; Verify with byte-by-byte read
; After MOV [0100h], AX where AX=ABCDh:
MOV AL, [0100h]    ; AL = CDh (low byte at even addr)
MOV AH, [0101h]    ; AH = ABh (high byte at odd addr)
; AX is now ABCDh again`,
  funFact: "The term 'endianness' comes from Jonathan Swift's 'Gulliver's Travels' where wars were fought over which end of a boiled egg to crack open — the 'Big End' or the 'Little End.' Computer scientist Danny Cohen borrowed this analogy in 1980 to describe byte order disputes between different processor architectures, and the terms stuck!",
  quiz: [
    { q: "If MOV [1000h], AX is executed with AX=5678h, what byte is at address 1000h?", opts: ["56h", "78h", "12h", "00h"], ans: 1 },
    { q: "What is the performance penalty for a word access at an odd address on the 8086?", opts: ["No penalty — the 8086 handles it automatically", "It takes two bus cycles instead of one", "It causes a bus error exception", "It rounds down to the nearest even address"], ans: 1 },
    { q: "What does DB 'AB', 0 store in memory?", opts: ["Two words: 0041h and 0042h", "Three bytes: 41h, 42h, 00h", "Two bytes: ABh, 00h", "Three words: 0041h, 0042h, 0000h"], ans: 1 },
    { q: "In little-endian, the doubleword 12345678h stored at address 500h has which byte at 500h?", opts: ["12h", "34h", "56h", "78h"], ans: 3 },
    { q: "What is the difference between DW 100 DUP(0) and DB 200 DUP(0)?", opts: ["No difference — both create 200 bytes of zeros", "DW creates 200 bytes (100 words); DB creates 200 bytes", "DW creates 100 bytes; DB creates 200 bytes", "DW stores zeros as words (2 bytes each), DB stores zeros as bytes — but both total 200 bytes"], ans: 1 }
  ],
  challenge: "Given memory contents at DS:0100h = CDh, ABh, 34h, 12h, 78h, 56h — determine the value of AX after each: (a) MOV AX,[0100h], (b) MOV AX,[0101h], (c) MOV AX,[0102h], (d) MOV AL,[0100h]. Then declare a data segment with: a byte variable 'status' initialized to 1, a word variable 'count' initialized to 1000, a doubleword 'far_addr' initialized to 1234h:5678h, and a 64-byte buffer 'buf' filled with FFh. Show the exact memory layout in hex.",
  resources: [
    { type: "docs", title: "Endianness Explained", url: "https://www.geeksforgeeks.org/little-and-big-endian-mystery/", source: "GeeksforGeeks" },
    { type: "video", title: "Little Endian vs Big Endian", url: "https://www.youtube.com/watch?v=JrNF0KRAlyo", source: "YouTube" },
    { type: "docs", title: "8086 Data Types and Directives", url: "https://www.tutorialspoint.com/assembly_programming/assembly_variables.htm", source: "TutorialsPoint" },
    { type: "article", title: "Memory Alignment and Performance", url: "https://developer.ibm.com/articles/pa-dalign/", source: "IBM Developer" }
  ],
  eli5: "Imagine you want to store the number 1234 using two boxes. Little-endian means you put the '34' part (the small part) in the first box, and the '12' part (the big part) in the second box. When you want the number back, the computer knows to read both boxes and put them in the right order. It seems backwards, but it makes the computer's job easier because it always finds the small part first.",
  codeWalkthrough: [
    "MOV AX, 2000h / MOV DS, AX — sets up the data segment at 2000h. All memory accesses with DS will start from physical address 20000h.",
    "MOV AX, 0ABCDh / MOV [0100h], AX — stores the word ABCDh at offset 0100h. Little-endian: CDh at 20100h, ABh at 20101h.",
    "Address 0100h is even, so this word write completes in a single bus cycle — the full 16-bit data bus transfers both bytes at once.",
    "MOV [0101h], AX — stores ABCDh at ODD address 0101h. This is unaligned! The 8086 must perform two separate byte transfers, doubling the bus time.",
    "MOV BX, [0100h] — reads back the word from 0100h. The CPU reads CDh and ABh and reassembles them into BX = ABCDh automatically.",
    "MOV BL, [0100h] — byte read. Only reads 1 byte: BL = CDh. Same address, but we get just the low byte of the word stored there.",
    "DB, DW, DD directives tell the assembler how many bytes to reserve and how to arrange initial values in memory.",
    "DUP(0) fills memory with zeros — DUP(?) leaves it undefined, saving assembly time for buffers that will be filled at runtime."
  ],
  bugChallenge: {
    code: `; Goal: Store and read back a 32-bit value
; DS = 3000h
;
MOV AX, 1234h
MOV [0100h], AX     ; Store low word
MOV AX, 5678h
MOV [0101h], AX     ; Store high word
;
; Programmer expects memory at 0100h-0103h:
;   34h 12h 78h 56h (representing 56781234h)
; Then reads back:
MOV AX, [0100h]     ; Expects 1234h
MOV DX, [0102h]     ; Expects 5678h`,
    hint: "What address does the second MOV write to, and does it overlap with the first write?",
    answer: "Bug: The second write MOV [0101h], AX stores 5678h at offset 0101h — which means 78h at 0101h and 56h at 0102h. But the first write put 12h at 0101h! The second write overwrites offset 0101h. Memory becomes: 0100h=34h, 0101h=78h, 0102h=56h (only 3 bytes, not 4). Reading back: MOV AX,[0100h] = 7834h (wrong!) and MOV DX,[0102h] reads from 0102h-0103h which is 56h and garbage. Fix: The high word should be written to [0102h], not [0101h]. Words are 2 bytes, so offsets should be 0100h and 0102h."
  },
  difficulty: "intermediate",
  prereqs: [8, 11]
},
{
  id: 19,
  title: "ASCII, BCD, Signed, and Unsigned Data",
  subtitle: "Same bits, different meanings — how the 8086 interprets binary patterns as text, decimal, or signed numbers",
  analogy: "Binary data is like ink marks on paper — the same marks can be a letter, a number, or a secret code depending on who reads them. 01000001 is the letter 'A' if read as ASCII, the number 65 if read as unsigned decimal, or still 65 if read as signed (since the top bit is 0). The bits never change — only your interpretation does.",
  points: [
    { t: "ASCII Encoding", d: "ASCII uses 7 bits (values 0-127) to represent characters. 'A'=41h, 'Z'=5Ah, 'a'=61h, '0'=30h, '9'=39h. The 8086 stores ASCII in bytes. Strings are sequences of ASCII bytes, typically null-terminated (ending with 00h).", code: "; ASCII character storage:\nMOV AL, 'A'       ; AL = 41h (ASCII 'A')\nMOV AL, '0'       ; AL = 30h (ASCII '0')\nMOV AL, '9'       ; AL = 39h (ASCII '9')\n;\n; ASCII digits to numeric value:\n;   '5' = 35h -> 35h - 30h = 05h\nMOV AL, '5'       ; AL = 35h\nSUB AL, 30h       ; AL = 05h (numeric 5)\n;\n; Character case conversion:\nMOV AL, 'a'       ; AL = 61h\nSUB AL, 20h       ; AL = 41h = 'A' (uppercase)" },
    { t: "Unpacked BCD", d: "Unpacked BCD stores one decimal digit per byte, in the lower nibble (0-9), with the upper nibble zero. So decimal 59 is stored as two bytes: 05h and 09h. The AAA and AAS instructions adjust results after arithmetic on unpacked BCD.", code: "; Unpacked BCD: one digit per byte\n; Decimal 59 = 05h, 09h (two bytes)\n;\n; Adding unpacked BCD digits:\nMOV AL, 07h       ; Unpacked BCD 7\nADD AL, 08h       ; AL = 0Fh (7+8=15, not valid BCD)\nAAA               ; ASCII Adjust After Addition\n                   ; AL = 05h, AH incremented by 1\n                   ; Result: AH:AL = 01:05 = decimal 15\n;\n; AAA adjusts if low nibble > 9" },
    { t: "Packed BCD", d: "Packed BCD stores two decimal digits per byte — one in the upper nibble and one in the lower. Decimal 59 is stored as 59h (one byte). DAA and DAS adjust addition and subtraction results for packed BCD.", code: "; Packed BCD: two digits per byte\n; Decimal 59 = 59h (one byte, not 3Bh!)\n;\n; Adding packed BCD:\nMOV AL, 59h       ; Packed BCD 59\nADD AL, 35h       ; AL = 8Eh (59+35=8E, not valid BCD)\nDAA               ; Decimal Adjust After Addition\n                   ; AL = 94h (packed BCD for 94)\n                   ; 59 + 35 = 94 (correct decimal)\n;\n; DAA adjusts each nibble if > 9" },
    { t: "DAA and DAS Instructions", d: "DAA (Decimal Adjust for Addition) corrects AL after ADD/ADC of packed BCD values. DAS (Decimal Adjust for Subtraction) corrects AL after SUB/SBB. Both check the AF and CF flags and add/subtract 6 to adjust nibbles that exceed 9.", code: "; DAA algorithm:\n;   If (AL low nibble > 9) OR (AF=1):\n;     AL = AL + 6, AF = 1\n;   If (AL high nibble > 9) OR (CF=1):\n;     AL = AL + 60h, CF = 1\n;\n; Example: 76h + 45h\nMOV AL, 76h\nADD AL, 45h       ; AL = BBh\nDAA               ; Low nibble B>9: AL=C1h, AF=1\n                   ; High nibble C>9: AL=21h, CF=1\n                   ; Result: CF:AL = 1:21 = 121 decimal" },
    { t: "AAA and AAS Instructions", d: "AAA (ASCII Adjust for Addition) corrects AL after adding unpacked BCD or ASCII digits. AAS (ASCII Adjust for Subtraction) corrects after subtraction. These adjust the result in AL and increment/decrement AH as needed.", code: "; Adding ASCII digits directly:\nMOV AX, 0\nMOV AL, '7'       ; AL = 37h (ASCII '7')\nADD AL, '5'       ; AL = 6Ch (37h + 35h)\nAAA               ; Adjusts: AL = 02h, AH = 01h\n                   ; 7 + 5 = 12 (AH=1, AL=2)\n;\n; AAS for subtraction:\nMOV AL, '3'       ; AL = 33h\nSUB AL, '8'       ; AL = FBh (33h - 38h, borrow)\nAAS               ; Adjusts: AL = 05h, AH = FFh(-1)\n                   ; 3 - 8 = -5 with borrow" },
    { t: "Unsigned Integers", d: "Unsigned interpretation treats all bits as magnitude. An 8-bit unsigned byte ranges 0 to 255. A 16-bit unsigned word ranges 0 to 65535. The CPU uses CF (Carry Flag) to detect unsigned overflow. Conditional jumps JA/JB test unsigned comparisons.", code: "; Unsigned byte: 0 to 255\nMOV AL, 0FFh      ; AL = 255 (unsigned)\nADD AL, 01h       ; AL = 00h, CF = 1 (overflow!)\n                   ; 255 + 1 = 256 doesn't fit in 8 bits\n;\n; Unsigned word: 0 to 65535\nMOV AX, 0FFFFh    ; AX = 65535\nADD AX, 0001h     ; AX = 0000h, CF = 1\n;\n; Unsigned comparison:\nCMP AL, BL\nJA  above          ; Jump if AL > BL (unsigned)\nJB  below          ; Jump if AL < BL (unsigned)" },
    { t: "Signed Integers (2's Complement)", d: "Signed interpretation uses 2's complement: the MSB is the sign bit (0=positive, 1=negative). An 8-bit signed byte ranges -128 to +127. A 16-bit signed word ranges -32768 to +32767. OF (Overflow Flag) detects signed overflow. JG/JL test signed comparisons.", code: "; Signed byte: -128 to +127\nMOV AL, 7Fh       ; AL = +127 (signed)\nADD AL, 01h       ; AL = 80h = -128 (signed overflow!)\n                   ; OF = 1 (overflow flag set)\n;\n; 2's complement negation:\nMOV AL, 05h       ; AL = +5\nNEG AL            ; AL = FBh = -5\n                   ; (NOT 05h = FAh, + 1 = FBh)\n;\n; Signed comparison:\nCMP AL, BL\nJG  greater        ; Jump if AL > BL (signed)\nJL  lesser         ; Jump if AL < BL (signed)" },
    { t: "Sign Extension: CBW and CWD", d: "CBW (Convert Byte to Word) sign-extends AL into AX: if AL's MSB is 0, AH=00h; if 1, AH=FFh. CWD (Convert Word to Doubleword) sign-extends AX into DX:AX. Essential before signed division (IDIV) which requires a double-width dividend.", code: "; CBW: sign-extend byte AL to word AX\nMOV AL, 0FBh      ; AL = -5 (signed byte)\nCBW               ; AX = FFFBh (-5 as signed word)\n                   ; AH filled with FFh (sign bit was 1)\n;\nMOV AL, 05h       ; AL = +5\nCBW               ; AX = 0005h\n                   ; AH filled with 00h (sign bit was 0)\n;\n; CWD: sign-extend word AX to DX:AX\nMOV AX, 8000h     ; AX = -32768\nCWD               ; DX = FFFFh, AX = 8000h\n                   ; DX:AX = FFFF8000h = -32768" },
    { t: "Overflow vs Carry", d: "CF (Carry Flag) indicates unsigned overflow — a carry or borrow beyond the bit width. OF (Overflow Flag) indicates signed overflow — the result is too large or too small for the signed range. The same ADD sets both flags; which you check depends on your interpretation.", code: "; Same bits, different meaning:\nMOV AL, 80h       ; Unsigned: 128, Signed: -128\nADD AL, 80h       ; AL = 00h\n                   ; CF = 1 (unsigned: 128+128=256 > 255)\n                   ; OF = 1 (signed: -128+-128=-256 < -128)\n;\nMOV AL, 40h       ; Unsigned: 64, Signed: +64\nADD AL, 40h       ; AL = 80h\n                   ; CF = 0 (unsigned: 64+64=128, fits)\n                   ; OF = 1 (signed: 64+64=128 > 127!)\n;\n; Use JC/JNC for unsigned overflow checks\n; Use JO/JNO for signed overflow checks" }
  ],
  whatIs: "The 8086 stores all data as binary patterns; the interpretation depends on the context. ASCII encodes characters (A=41h). BCD represents decimal digits in binary — unpacked (one digit per byte) or packed (two digits per byte) with DAA/DAS/AAA/AAS for correction. Unsigned integers use all bits for magnitude (0-255 for bytes). Signed integers use 2's complement (MSB = sign bit, -128 to +127 for bytes). CBW/CWD sign-extend for division.",
  realWorld: "BCD was essential in early computing for financial applications where decimal precision mattered — bank balances, tax calculations, and point-of-sale systems used BCD to avoid floating-point rounding errors. Modern SQL DECIMAL types and Java BigDecimal serve the same purpose. ASCII remains the foundation of all text processing, and 2's complement signed arithmetic is universal in every processor made today.",
  code: `; Complete data representation examples

; === ASCII ===
msg     DB  'Score: ', 0     ; String with null terminator
digit   DB  '7'              ; Single ASCII digit

; Convert ASCII digit to number
MOV AL, [digit]     ; AL = 37h ('7')
SUB AL, '0'         ; AL = 07h (numeric 7)

; === PACKED BCD ADDITION ===
; Add decimal 49 + 38 = 87
MOV AL, 49h         ; Packed BCD 49
ADD AL, 38h         ; AL = 81h (49h + 38h)
DAA                 ; AL = 87h (valid packed BCD)

; === UNPACKED BCD with AAM ===
; Multiply BCD digits 7 * 8 = 56
MOV AL, 07h         ; Unpacked BCD 7
MOV BL, 08h         ; Unpacked BCD 8
MUL BL              ; AX = 0038h (7*8=56 in hex)
AAM                 ; AH = 05h, AL = 06h
                    ; Unpacked BCD result: 56

; === UNSIGNED vs SIGNED ===
MOV AL, 0C0h        ; Unsigned: 192, Signed: -64
MOV BL, 40h         ; Unsigned: 64,  Signed: +64

; Unsigned comparison
CMP AL, BL
JA  al_above         ; True! 192 > 64 unsigned

; Signed comparison
CMP AL, BL
JG  al_greater       ; False! -64 < 64 signed
JL  al_lesser        ; True!  -64 < 64 signed

; === SIGN EXTENSION for IDIV ===
MOV AX, -100        ; AX = FF9Ch
CWD                 ; DX:AX = FFFFFF9Ch = -100
MOV BX, 7
IDIV BX             ; AX = -14 (quotient), DX = -2 (remainder)`,
  funFact: "The Intel 4004 — the world's first microprocessor — was designed specifically for a BCD calculator (the Busicom 141-PF). BCD arithmetic was so important in the 1970s that every major processor included BCD instructions. The x86 architecture carried DAA/DAS all the way to x86-64, where they were finally removed in 64-bit mode — over 30 years after they were first introduced!",
  quiz: [
    { q: "What is the packed BCD representation of decimal 73?", opts: ["49h", "73h", "4Bh", "37h"], ans: 1 },
    { q: "If AL = 0FFh, what is its value as a signed integer?", opts: ["+255", "-1", "-255", "0"], ans: 1 },
    { q: "What does DAA do?", opts: ["Converts ASCII to decimal", "Adjusts AL after packed BCD addition to ensure each nibble is 0-9", "Divides AX by 10", "Converts binary to BCD"], ans: 1 },
    { q: "MOV AL, 80h / ADD AL, 80h — which flags are set?", opts: ["CF=1, OF=0", "CF=0, OF=1", "CF=1, OF=1", "CF=0, OF=0"], ans: 2 },
    { q: "What does CBW do when AL = F0h?", opts: ["AX = 00F0h", "AX = FFF0h", "AX = F0F0h", "AX = 0000h"], ans: 1 }
  ],
  challenge: "Write an 8086 assembly routine that: (1) Takes two 4-digit packed BCD numbers stored as 2 words each (e.g., decimal 9999 stored as 99h and 99h), (2) Adds them using ADD/ADC and DAA, (3) Stores the packed BCD result. Then write a separate routine that converts a signed 16-bit integer in AX to an ASCII string (handle negative numbers with a '-' prefix). Test with AX = -1234.",
  resources: [
    { type: "docs", title: "BCD Arithmetic in 8086", url: "https://www.geeksforgeeks.org/bcd-instructions-assembly-language/", source: "GeeksforGeeks" },
    { type: "video", title: "ASCII and BCD in Assembly", url: "https://www.youtube.com/watch?v=aNHvLB5gqjg", source: "YouTube" },
    { type: "article", title: "Signed vs Unsigned Explained", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_instruction_sets.htm", source: "TutorialsPoint" },
    { type: "docs", title: "Two's Complement", url: "https://en.wikipedia.org/wiki/Two%27s_complement", source: "Wikipedia" }
  ],
  eli5: "Imagine the number 11111111 written on a card. If you are playing the 'unsigned game,' that card is worth 255 points. If you are playing the 'signed game,' it means you owe 1 point (it is -1!). BCD is like writing each digit of a phone number in its own little box — 59 becomes box-5 and box-9 instead of converting to some weird binary number. ASCII is like giving every letter and number a secret agent code — 'A' is agent 65, '0' is agent 48.",
  codeWalkthrough: [
    "SUB AL, '0' — converts ASCII digit '7' (37h) to numeric value 7 (07h). Works because ASCII digits 0-9 are consecutive starting at 30h.",
    "ADD AL, 38h after MOV AL, 49h — binary addition gives 81h, but we want BCD 87 (49+38=87). The result 81h is wrong in BCD because there is no 'digit' for 8 in the ones place.",
    "DAA checks: low nibble of 81h is 1 (ok), high nibble is 8 (ok), but AF flag from the ADD indicates a low-nibble carry occurred. DAA adds 6 to correct: 81h + 06h = 87h.",
    "MUL BL — unsigned multiply of AL(7) * BL(8) = 56 decimal, stored as 0038h in AX (binary, not BCD).",
    "AAM — ASCII Adjust for Multiplication divides AL by 10: AH=quotient=5, AL=remainder=6. This converts binary 38h (56 decimal) to unpacked BCD 05:06.",
    "CMP AL, BL with AL=C0h and BL=40h — the comparison sets flags based on C0h-40h=80h. CF=0 (no unsigned borrow) so JA is true. But SF=1 and OF=0 so the signed result is negative, making JL true.",
    "CWD sign-extends AX=FF9Ch (which is -100) into DX:AX. Since bit 15 of AX is 1, DX becomes FFFFh.",
    "IDIV BX — signed division of DX:AX (-100) by BX (7). Quotient in AX = -14 (FFF2h), remainder in DX = -2 (FFFEh)."
  ],
  bugChallenge: {
    code: `; Goal: Add packed BCD 85 + 29 = 114
MOV AL, 85h        ; Packed BCD 85
ADD AL, 29h        ; Binary: 85h + 29h = AEh
DAA                ; Should give 14h with CF=1
; Programmer stores result:
MOV [result], AL   ; Stores 14h
; But forgets about the carry!
; How does the programmer recover the '1' in 114?`,
    hint: "DAA sets the carry flag when the result exceeds 99 in BCD. Where does the hundreds digit come from?",
    answer: "Bug: The result of 85 + 29 = 114, which is a 3-digit BCD number. DAA correctly adjusts AL to 14h and sets CF=1 to indicate the hundreds digit. But the programmer only stores AL (the low two BCD digits '14') and ignores CF. The hundreds digit '1' is lost! Fix: After DAA, check CF with ADC for a multi-byte BCD number, or store the carry separately: MOV [result], AL / MOV AL, 0 / ADC AL, 0 / MOV [result+1], AL. This stores 14h at result and 01h at result+1, representing BCD 114."
  },
  difficulty: "intermediate",
  prereqs: [3, 18]
},
{
  id: 20,
  title: "Effective Address Calculation Practice",
  subtitle: "Master the EA formulas by tracing through real examples with every addressing mode",
  analogy: "Calculating an effective address is like following a treasure map with multiple clues. The segment register tells you which island (memory segment). The base register is the town. The index register is the street number. The displacement is the house number. Combine them all: Island + Town + Street + House = exact treasure location.",
  points: [
    { t: "EA Formula Review", d: "Effective Address (EA) is the offset within a segment. Physical Address (PA) = Segment × 10h + EA. Each addressing mode has a different EA formula. The segment register is chosen by default rules unless overridden.", code: "; EA formulas:\n; Immediate  -> no EA (data in instruction)\n; Register   -> no EA (data in register)\n; Direct     -> EA = disp16\n; Reg Indir  -> EA = BX | SI | DI | BP\n; Based      -> EA = (BX|BP) + disp\n; Indexed    -> EA = (SI|DI) + disp\n; Based-Idx  -> EA = (BX|BP) + (SI|DI)\n; Based-Idx+D-> EA = (BX|BP) + (SI|DI) + disp\n;\n; PA = Segment × 10h + EA" },
    { t: "Default Segment Rules", d: "The 8086 has default segment assignments: any access using BX, SI, DI, or a displacement defaults to DS. Any access using BP defaults to SS. Instruction fetches use CS. String destinations (DI in STOSB/MOVSB) use ES. These can be overridden.", code: "; Default segment rules:\n; Operand contains  | Default Segment\n; ------------------+----------------\n; BX               | DS\n; SI               | DS\n; DI               | DS\n; displacement     | DS\n; BP               | SS\n; BX+SI, BX+DI    | DS (BX dominates)\n; BP+SI, BP+DI    | SS (BP dominates)\n;\n; String ops: source [SI]->DS, dest [DI]->ES" },
    { t: "Trace: Direct Addressing", d: "Given DS=1000h, instruction MOV AX,[5000h]: EA = 5000h (displacement in instruction). PA = 1000h × 10h + 5000h = 10000h + 5000h = 15000h. CPU reads the word at physical address 15000h into AX.", code: "; Given: DS = 1000h\nMOV AX, [5000h]\n;\n; Step 1: EA = 5000h (direct displacement)\n; Step 2: Default segment = DS = 1000h\n; Step 3: PA = DS × 10h + EA\n;            = 1000h × 10h + 5000h\n;            = 10000h + 5000h\n;            = 15000h\n; Step 4: Read 16-bit word from PA 15000h" },
    { t: "Trace: Register Indirect", d: "Given DS=2000h, BX=0300h, instruction MOV CL,[BX]: EA = BX = 0300h. PA = 2000h × 10h + 0300h = 20000h + 0300h = 20300h. CPU reads the byte at physical address 20300h into CL.", code: "; Given: DS = 2000h, BX = 0300h\nMOV CL, [BX]\n;\n; Step 1: EA = BX = 0300h\n; Step 2: Default segment = DS (BX used)\n; Step 3: PA = 2000h × 10h + 0300h\n;            = 20000h + 0300h\n;            = 20300h\n; Step 4: Read byte from PA 20300h into CL" },
    { t: "Trace: Based Addressing with BP", d: "Given SS=3000h, BP=0100h, instruction MOV AX,[BP+08h]: EA = BP + 08h = 0100h + 08h = 0108h. Default segment is SS (BP used). PA = 3000h × 10h + 0108h = 30000h + 0108h = 30108h.", code: "; Given: SS = 3000h, BP = 0100h\nMOV AX, [BP+08h]\n;\n; Step 1: EA = BP + 08h = 0100h + 08h = 0108h\n; Step 2: Default segment = SS (BP used)\n; Step 3: PA = 3000h × 10h + 0108h\n;            = 30000h + 0108h\n;            = 30108h\n; Step 4: Read word from PA 30108h into AX\n;\n; This is how local variables and\n; function parameters are accessed on stack" },
    { t: "Trace: Indexed Addressing", d: "Given DS=1500h, SI=0040h, instruction MOV BL,[SI+2000h]: EA = SI + 2000h = 0040h + 2000h = 2040h. PA = 1500h × 10h + 2040h = 15000h + 2040h = 17040h.", code: "; Given: DS = 1500h, SI = 0040h\nMOV BL, [SI+2000h]\n;\n; Step 1: EA = SI + 2000h\n;            = 0040h + 2000h = 2040h\n; Step 2: Default segment = DS (SI used)\n; Step 3: PA = 1500h × 10h + 2040h\n;            = 15000h + 2040h\n;            = 17040h\n; Step 4: Read byte from PA 17040h into BL\n;\n; Interpretation: array at offset 2000h,\n; SI = index offset, reading element at [40h]" },
    { t: "Trace: Based-Indexed with Displacement", d: "Given DS=1000h, BX=0200h, DI=0010h, instruction MOV AX,[BX+DI+50h]: EA = BX + DI + 50h = 0200h + 0010h + 50h = 0260h. PA = 1000h × 10h + 0260h = 10000h + 0260h = 10260h.", code: "; Given: DS = 1000h, BX = 0200h, DI = 0010h\nMOV AX, [BX+DI+50h]\n;\n; Step 1: EA = BX + DI + 50h\n;            = 0200h + 0010h + 0050h\n;            = 0260h\n; Step 2: Default segment = DS (BX used)\n; Step 3: PA = 1000h × 10h + 0260h\n;            = 10000h + 0260h\n;            = 10260h\n; Step 4: Read word from PA 10260h into AX\n;\n; Interpretation: 2D array at offset 50h,\n; BX = row offset, DI = column offset" },
    { t: "Trace: Segment Override", d: "Given DS=1000h, ES=4000h, BX=0100h, instruction MOV AX,ES:[BX]: EA = BX = 0100h. Segment override forces ES instead of DS. PA = 4000h × 10h + 0100h = 40000h + 0100h = 40100h.", code: "; Given: DS = 1000h, ES = 4000h, BX = 0100h\nMOV AX, ES:[BX]\n;\n; Step 1: EA = BX = 0100h\n; Step 2: Override! ES used instead of DS\n; Step 3: PA = 4000h × 10h + 0100h\n;            = 40000h + 0100h\n;            = 40100h\n; Step 4: Read word from PA 40100h into AX\n;\n; Without override: PA = 10100h (DS:BX)\n; With ES override: PA = 40100h (ES:BX)\n; Completely different memory location!" },
    { t: "EA Calculation Clock Cycles", d: "More complex addressing modes take more clock cycles to compute the EA. Register is 0 extra. Direct is 6 clocks. Register indirect is 5. Based/indexed is 5+displacement. Based-indexed is 7-8. Based-indexed+displacement is 11-12.", code: "; EA calculation time (approximate):\n; Mode                     | EA clocks\n; -------------------------+-----------\n; Register                 | 0\n; Immediate                | 0\n; Direct                   | 6\n; Register Indirect (BX)   | 5\n; Based (BX+disp)         | 9\n; Indexed (SI+disp)       | 9\n; Based-Indexed (BX+SI)   | 7-8\n; B-I + Disp (BX+SI+disp) | 11-12\n;\n; Tip: simpler modes = faster code" }
  ],
  whatIs: "Effective Address calculation is the process of computing the offset within a segment where data resides. Each addressing mode has a formula combining base registers (BX/BP), index registers (SI/DI), and displacements. The physical address is always Segment × 10h + EA. Default segment rules determine which segment register is used unless explicitly overridden.",
  realWorld: "Compilers spend significant effort choosing the optimal addressing mode for each memory access. A good compiler minimizes the complexity of addressing modes to reduce instruction size and execution time. When you read disassembled code in tools like IDA Pro, objdump, or x64dbg, understanding EA calculation is essential for tracing how the program accesses memory — especially when analyzing malware or debugging crashes.",
  code: `; Complete EA practice worksheet
; Given: DS=1000h, SS=2000h, ES=3000h
;        BX=0100h, BP=0200h, SI=0010h, DI=0020h

; Problem 1: MOV AX, [BX]
;   EA = 0100h
;   Seg = DS (BX -> DS)
;   PA = 10000h + 0100h = 10100h

; Problem 2: MOV AX, [BP+06h]
;   EA = 0200h + 06h = 0206h
;   Seg = SS (BP -> SS)
;   PA = 20000h + 0206h = 20206h

; Problem 3: MOV AX, [BX+SI]
;   EA = 0100h + 0010h = 0110h
;   Seg = DS (BX present -> DS)
;   PA = 10000h + 0110h = 10110h

; Problem 4: MOV AX, [BP+DI+100h]
;   EA = 0200h + 0020h + 0100h = 0320h
;   Seg = SS (BP present -> SS)
;   PA = 20000h + 0320h = 20320h

; Problem 5: MOV AX, ES:[SI+50h]
;   EA = 0010h + 0050h = 0060h
;   Seg = ES (override!)
;   PA = 30000h + 0060h = 30060h

; Problem 6: MOV AX, [1234h]
;   EA = 1234h
;   Seg = DS (direct -> DS)
;   PA = 10000h + 1234h = 11234h`,
  funFact: "The 8086 has an interesting limitation: you cannot use AX, CX, DX, or SP as base or index registers in addressing modes. Only BX, BP, SI, and DI are valid. This restriction exists because Intel only had 4 bits in the ModR/M byte encoding to specify the addressing mode — and only 8 combinations were enough to cover all useful patterns. Modern x86-64 removed this limitation with the REX prefix and SIB byte.",
  quiz: [
    { q: "Given DS=2000h, BX=0500h, what is the physical address for MOV AX,[BX+10h]?", opts: ["20510h", "25010h", "02510h", "20010h"], ans: 0 },
    { q: "Which segment register is used by default for MOV AX,[BP+SI]?", opts: ["DS", "ES", "SS", "CS"], ans: 2 },
    { q: "Given SS=3000h, BP=0400h, DI=0008h, what is EA for [BP+DI+20h]?", opts: ["3428h", "0428h", "30428h", "7428h"], ans: 1 },
    { q: "What does a segment override prefix do?", opts: ["Changes the effective address calculation", "Replaces the default segment register with a different one for that instruction", "Adds an extra displacement to the EA", "Doubles the segment base address"], ans: 1 },
    { q: "Which addressing mode takes the most clock cycles for EA calculation?", opts: ["Register indirect", "Direct", "Based-indexed with displacement", "Immediate"], ans: 2 }
  ],
  challenge: "Given DS=5000h, SS=6000h, ES=7000h, CS=8000h, BX=1000h, BP=2000h, SI=0300h, DI=0400h, calculate EA, default segment, and 20-bit PA for each: (a) MOV AX,[3000h], (b) MOV AX,[BX+SI+100h], (c) MOV AX,[BP+DI], (d) MOV AX,CS:[SI], (e) MOV AX,[BP+1000h], (f) MOV AX,[BX+DI+200h]. Then identify which two instructions access overlapping memory ranges if we change ES to 5130h.",
  resources: [
    { type: "docs", title: "8086 Address Calculation Examples", url: "https://www.geeksforgeeks.org/physical-and-logical-address-in-8086/", source: "GeeksforGeeks" },
    { type: "video", title: "EA Calculation Step by Step", url: "https://www.youtube.com/watch?v=jVPKhLSjX2s", source: "YouTube" },
    { type: "article", title: "8086 Addressing Modes Practice Problems", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_addressing_modes.htm", source: "TutorialsPoint" },
    { type: "docs", title: "ModR/M Byte Encoding", url: "https://wiki.osdev.org/X86-64_Instruction_Encoding", source: "OSDev Wiki" }
  ],
  eli5: "Finding an address is like finding a house. The segment is like the city name — it tells you the big area. The base register is like the neighborhood. The index register is like the street number. The displacement is like the house number. You add them all up to get the exact location. If someone says 'use the ES city instead of the DS city,' that is a segment override — same street and house number, but in a completely different city!",
  codeWalkthrough: [
    "Problem 1: MOV AX,[BX] — register indirect. EA = BX = 0100h. BX defaults to DS. PA = 1000h×10h + 0100h = 10100h.",
    "Problem 2: MOV AX,[BP+06h] — based addressing with BP. EA = 0200h + 06h = 0206h. BP defaults to SS. PA = 2000h×10h + 0206h = 20206h.",
    "Problem 3: MOV AX,[BX+SI] — based-indexed. EA = 0100h + 0010h = 0110h. BX is present, so DS is default. PA = 10110h.",
    "Problem 4: MOV AX,[BP+DI+100h] — based-indexed with displacement. EA = 0200h + 0020h + 0100h = 0320h. BP is present, so SS is default. PA = 20320h.",
    "Problem 5: MOV AX,ES:[SI+50h] — indexed with segment override. EA = 0010h + 0050h = 0060h. Override forces ES instead of default DS. PA = 30060h.",
    "Problem 6: MOV AX,[1234h] — direct addressing. EA = 1234h. No register, so DS is default. PA = 10000h + 1234h = 11234h.",
    "Key insight: the EA formula depends only on registers and displacement. The segment adds a separate 'base' that shifts the entire access to a different 64 KB window in the 1 MB space.",
    "Segment overrides cost 1 extra byte in the instruction encoding but can access any segment — essential when data spans multiple segments."
  ],
  bugChallenge: {
    code: `; Given: DS = 1000h, SS = 2000h, BP = 0050h
; Goal: Read a local variable at stack offset [BP+04h]
; Then store it in a global variable at DS:3000h
;
MOV AX, [BP+04h]    ; Read stack variable
MOV [BP+04h], AX    ; Store to global at 3000h ???
;
; Programmer thinks both access the same location.
; But something is wrong with the second instruction.`,
    hint: "Look at the segment defaults. Does [BP+04h] use DS or SS? And is the second instruction accessing address 3000h?",
    answer: "Bug: Both instructions use [BP+04h] which defaults to SS (because BP is used). The first instruction correctly reads from SS:0054h (PA = 20054h). But the second instruction ALSO writes to SS:0054h — the programmer wanted to write to DS:3000h but used [BP+04h] again! This just reads and writes the same stack location. Fix: To write to the global at DS:3000h, use MOV [3000h], AX (direct addressing, defaults to DS). The programmer confused the effective address [BP+04h]=0054h with the target address 3000h."
  },
  difficulty: "intermediate",
  prereqs: [17]
},
{
  id: 21,
  title: "Data Transfer Instructions",
  subtitle: "MOV, XCHG, LEA, PUSH, POP, XLAT, IN, OUT — moving data is the most common 8086 operation",
  analogy: "Data transfer instructions are like a moving company. MOV is the basic truck — it copies items from one place to another. XCHG is two people swapping seats. LEA is getting the address of a house written on a card without actually visiting. PUSH/POP is stacking boxes in a warehouse (LIFO). IN/OUT is sending and receiving packages through a delivery window (I/O port).",
  points: [
    { t: "MOV — The Fundamental Transfer", d: "MOV copies data from source to destination. It works between registers, between register and memory, or from an immediate value to register/memory. It does NOT affect any flags. You cannot MOV memory-to-memory or MOV directly into a segment register from an immediate.", code: "; MOV register to register:\nMOV AX, BX        ; AX = BX\nMOV CL, DH        ; CL = DH\n;\n; MOV immediate to register:\nMOV AX, 1234h     ; AX = 1234h\nMOV DL, 0Ah       ; DL = 0Ah\n;\n; MOV register to/from memory:\nMOV AX, [2000h]   ; AX = word at DS:2000h\nMOV [3000h], BL   ; byte at DS:3000h = BL\n;\n; INVALID moves:\n; MOV [2000h], [3000h]  ; NO memory-to-memory\n; MOV DS, 1000h         ; NO immediate to segment" },
    { t: "MOV with Segment Registers", d: "Segment registers (CS, DS, ES, SS) can only be loaded from a general register or memory — not from an immediate value. CS cannot be the destination of MOV (it would change the code stream). To load DS with 1000h, first load AX with 1000h, then MOV DS, AX.", code: "; Loading segment registers:\nMOV AX, 1000h     ; Load immediate into AX first\nMOV DS, AX        ; Then transfer to DS\n;\nMOV AX, 2000h\nMOV ES, AX        ; ES = 2000h\n;\nMOV AX, 3000h\nMOV SS, AX        ; SS = 3000h\n; After MOV SS, interrupts disabled for 1 instr\n; So the next MOV SP is atomic with MOV SS\nMOV SP, 0FFEh     ; Set stack pointer\n;\n; MOV CS, AX       ; ILLEGAL! Cannot MOV to CS" },
    { t: "XCHG — Exchange", d: "XCHG atomically swaps the contents of two operands. One operand must be a register. XCHG AX,BX swaps their values without needing a temporary variable. XCHG with memory is implicitly locked on the bus, making it useful for semaphores.", code: "; XCHG register-register:\nMOV AX, 1111h\nMOV BX, 2222h\nXCHG AX, BX       ; AX = 2222h, BX = 1111h\n;\n; XCHG register-memory (implicitly atomic):\nXCHG AL, [mutex]  ; Swap AL with memory byte\n                   ; Atomic on the bus\n;\n; Useful for sorting (swap two values):\n;   CMP AX, BX\n;   JBE no_swap\n;   XCHG AX, BX\n; no_swap:" },
    { t: "LEA — Load Effective Address", d: "LEA loads the effective address (offset) of the source operand into the destination register — it does NOT access memory. LEA BX,[SI+10h] puts SI+10h into BX. Often used as a fast way to compute address arithmetic or add a register plus a constant.", code: "; LEA loads address, not data:\nMOV SI, 0100h\nLEA BX, [SI+20h]  ; BX = 0100h + 20h = 0120h\n                   ; Does NOT read from DS:0120h!\n;\n; Compare with MOV:\nMOV BX, [SI+20h]  ; BX = word AT address DS:0120h\nLEA BX, [SI+20h]  ; BX = 0120h (the address itself)\n;\n; LEA as fast arithmetic:\nLEA AX, [BX+SI+5] ; AX = BX + SI + 5\n                    ; Computed in one instruction!\n                    ; Faster than ADD BX,SI / ADD BX,5" },
    { t: "LDS and LES — Load Far Pointer", d: "LDS reg, mem loads a 32-bit far pointer from memory: the 16-bit offset goes into the specified register, and the 16-bit segment goes into DS. LES does the same but loads ES instead. Used for accessing data in other segments.", code: "; Memory at DS:1000h contains:\n;   1000h: 00h 20h 00h 30h\n;   (offset=2000h, segment=3000h)\n;\nLDS SI, [1000h]   ; SI = 2000h (offset, from +0,+1)\n                   ; DS = 3000h (segment, from +2,+3)\n;\n; Now DS:SI points to 3000h:2000h\n; PA = 30000h + 2000h = 32000h\n;\nLES DI, [1000h]   ; DI = 2000h, ES = 3000h\n; Now ES:DI also points to 32000h" },
    { t: "PUSH and POP — Stack Operations", d: "PUSH decrements SP by 2, then stores a 16-bit value at SS:SP. POP reads a 16-bit value from SS:SP, then increments SP by 2. The stack grows downward (toward lower addresses). Only 16-bit values can be pushed/popped on the 8086.", code: "; PUSH: SP = SP - 2, then store at SS:SP\nMOV AX, 1234h\nPUSH AX           ; SP -= 2, [SS:SP] = 1234h\nPUSH BX           ; SP -= 2, [SS:SP] = BX value\nPUSH CS           ; Push current code segment\n;\n; POP: read from SS:SP, then SP = SP + 2\nPOP BX            ; BX = [SS:SP], SP += 2\nPOP AX            ; AX = [SS:SP], SP += 2\n;\n; Stack is LIFO: last pushed = first popped\n; PUSH AX, PUSH BX -> POP BX, POP AX restores" },
    { t: "XLAT — Table Lookup", d: "XLAT (Translate) replaces AL with the byte at DS:[BX+AL]. BX points to the base of a 256-byte lookup table, and AL is the index. After XLAT, AL contains the table entry. Perfect for character translation, code conversions, and fast mapping functions.", code: "; XLAT example: convert hex nibble to ASCII\n; Table at DS:BX:\n;   '0123456789ABCDEF'\n;\nMOV BX, OFFSET hex_table\nMOV AL, 0Ah       ; AL = 10 (index into table)\nXLAT              ; AL = [BX+AL] = [BX+10]\n                   ; AL = 'A' (41h)\n;\n; hex_table DB '0123456789ABCDEF'\n; Index 0->30h('0'), 1->31h('1'), ...\n; Index 10->41h('A'), 15->46h('F')" },
    { t: "IN and OUT — I/O Port Access", d: "IN reads a byte or word from an I/O port into AL or AX. OUT writes AL or AX to an I/O port. The port number can be an immediate (0-FFh) or in DX (0-FFFFh). These are the only way to communicate with I/O devices in the 8086 isolated I/O model.", code: "; IN: read from I/O port\nIN AL, 60h        ; AL = byte from port 60h\n                   ; (keyboard data on PC)\n;\nMOV DX, 03F8h     ; COM1 serial port\nIN AL, DX         ; AL = byte from port 03F8h\n;\n; OUT: write to I/O port\nMOV AL, 20h       ; EOI command\nOUT 20h, AL       ; Send EOI to PIC (port 20h)\n;\nMOV DX, 0043h     ; 8253 timer control port\nMOV AL, 36h       ; Mode 3, counter 0\nOUT DX, AL        ; Configure timer" },
    { t: "LAHF and SAHF — Flags Transfer", d: "LAHF loads AH with the lower 8 bits of the flags register (SF, ZF, AF, PF, CF). SAHF stores AH back into the lower flags byte. Useful for saving and restoring flag state, and for 8080 compatibility.", code: "; LAHF: AH = flags low byte\nLAHF              ; AH bit 7 = SF\n                   ; AH bit 6 = ZF\n                   ; AH bit 4 = AF\n                   ; AH bit 2 = PF\n                   ; AH bit 0 = CF\n;\n; Save flags, do something, restore:\nLAHF              ; Save flags in AH\nPUSH AX           ; Save AH (flags) on stack\n; ... do operations that change flags ...\nPOP AX            ; Restore AH\nSAHF              ; Restore flags from AH" },
    { t: "PUSHF and POPF — Full Flags Save/Restore", d: "PUSHF pushes the entire 16-bit flags register onto the stack. POPF pops a 16-bit value from the stack into the flags register. Used to save and restore the complete processor state around critical sections or interrupt handlers.", code: "; Save and restore all flags:\nPUSHF             ; Push entire flags register\n                   ; SP -= 2, [SS:SP] = flags\n;\n; ... operations that modify flags ...\n;\nPOPF              ; Restore all flags from stack\n                   ; flags = [SS:SP], SP += 2\n;\n; Useful pattern — disable/enable interrupts:\nPUSHF             ; Save current IF state\nCLI               ; Disable interrupts\n; ... critical section ...\nPOPF              ; Restore IF to previous state\n                   ; (re-enables if they were enabled)" }
  ],
  whatIs: "Data transfer instructions move data between registers, memory, I/O ports, and the stack without performing arithmetic. MOV is the most common instruction, copying data from source to destination. XCHG swaps values atomically. LEA computes addresses without memory access. LDS/LES load far pointers. PUSH/POP manage the stack. XLAT performs table lookups. IN/OUT access I/O ports. None of these instructions affect the flags register (except SAHF and POPF).",
  realWorld: "Data transfer instructions make up roughly 30-40% of all instructions in typical programs. The MOV instruction alone accounts for about 20% of all executed instructions in real workloads. IN/OUT instructions are used extensively in operating system kernel code and device drivers to communicate with hardware. PUSH/POP are essential for function calls, and XCHG with memory is still used for lock-free programming patterns on modern x86.",
  code: `; Complete data transfer instruction showcase

; === SETUP ===
MOV AX, 1000h
MOV DS, AX          ; DS = 1000h
MOV AX, 2000h
MOV SS, AX          ; SS = 2000h
MOV SP, 0FFEh       ; Stack at top of segment

; === MOV variations ===
MOV AX, 5678h       ; Immediate to register
MOV BX, AX          ; Register to register
MOV [0100h], AX     ; Register to memory
MOV CX, [0100h]     ; Memory to register

; === XCHG ===
MOV AX, 1111h
MOV BX, 2222h
XCHG AX, BX         ; AX=2222h, BX=1111h

; === LEA vs MOV ===
MOV SI, 0050h
LEA DI, [SI+30h]    ; DI = 0080h (address calc only)
MOV DI, [SI+30h]    ; DI = word at DS:0080h (data!)

; === PUSH / POP ===
PUSH AX              ; Save AX on stack (SP -= 2)
PUSH BX              ; Save BX on stack (SP -= 2)
PUSH CX              ; Save CX on stack (SP -= 2)
; ... do work ...
POP CX               ; Restore CX (SP += 2)
POP BX               ; Restore BX (SP += 2)
POP AX               ; Restore AX (SP += 2)
; Registers restored in reverse order!

; === XLAT (table lookup) ===
; Assume hex_table DB '0123456789ABCDEF' at DS:0200h
MOV BX, 0200h       ; BX = table base
MOV AL, 0Ch         ; Index 12
XLAT                 ; AL = [BX+AL] = 'C' (43h)

; === I/O ===
IN AL, 60h           ; Read keyboard scancode
MOV DX, 03F8h        ; COM1 port
OUT DX, AL           ; Send character to serial port

; === Flags save/restore ===
PUSHF                ; Save all flags
CLI                  ; Disable interrupts
; ... critical section ...
POPF                 ; Restore flags (and IF state)`,
  funFact: "The LEA instruction is one of the most 'abused' instructions in x86 history. Because it performs address arithmetic without accessing memory, modern compilers use LEA to do fast addition and multiplication by small constants — for example, LEA EAX,[EBX+EBX*4] computes EBX×5 in a single cycle. This trick is used billions of times per second on every modern PC.",
  quiz: [
    { q: "What is WRONG about MOV [2000h], [3000h]?", opts: ["Nothing — it copies memory to memory", "The 8086 does not support memory-to-memory MOV", "The addresses must be even", "MOV cannot use direct addressing"], ans: 1 },
    { q: "What does LEA BX, [SI+100h] do?", opts: ["Loads the byte at DS:SI+100h into BL", "Loads the word at DS:SI+100h into BX", "Puts the value SI+100h into BX without accessing memory", "Loads the segment address into BX"], ans: 2 },
    { q: "After PUSH AX and PUSH BX, which POP restores BX?", opts: ["The first POP (stack is FIFO)", "The first POP (stack is LIFO — last in, first out)", "The second POP", "Either POP — order does not matter"], ans: 1 },
    { q: "What does XLAT do?", opts: ["Translates ASCII to EBCDIC", "Replaces AL with the byte at DS:[BX+AL]", "Exchanges AL and BL", "Loads the effective address into AL"], ans: 1 },
    { q: "Why must you load a segment register in two steps (MOV AX, 1000h / MOV DS, AX)?", opts: ["Segment registers are read-only", "The 8086 does not support immediate-to-segment register MOV", "Segment registers can only hold even values", "It is just a convention — direct loading works too"], ans: 1 }
  ],
  challenge: "Write an 8086 assembly routine that: (1) Sets up DS to 3000h and ES to 4000h using MOV, (2) Uses LEA to compute the address BX+SI+10h and stores the result in DI, (3) Reads a byte from I/O port 60h, (4) Uses XLAT with a lookup table to convert the byte, (5) Pushes AX, BX, CX on the stack, calls a hypothetical subroutine address, then pops them in correct order, (6) Uses LDS to load a far pointer from memory at DS:0200h. Trace every register value and stack change.",
  resources: [
    { type: "docs", title: "8086 Data Transfer Instructions", url: "https://www.geeksforgeeks.org/data-transfer-instructions-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "MOV, PUSH, POP, XCHG Explained", url: "https://www.youtube.com/watch?v=wLNHxBGQ1Hk", source: "YouTube" },
    { type: "article", title: "8086 Instruction Set Reference", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_instruction_sets.htm", source: "TutorialsPoint" },
    { type: "docs", title: "LEA Instruction Deep Dive", url: "https://www.felixcloutier.com/x86/lea", source: "x86 Reference" }
  ],
  eli5: "MOV is like copying a drawing from one paper to another — the original stays the same and the destination gets the copy. XCHG is like two kids swapping lunch boxes. LEA is like writing down someone's address on a card — you know WHERE they live but you did not visit them. PUSH is like stacking plates: the last plate you put on top is the first one you take off (POP). IN/OUT is like a mail slot in a door — you push letters out or peek at what comes in.",
  codeWalkthrough: [
    "MOV AX, 1000h / MOV DS, AX — two-step segment register load. Cannot do MOV DS, 1000h directly because the 8086 instruction encoding does not support immediate-to-segment.",
    "MOV AX, 5678h — immediate to register, the value 5678h is encoded directly in the instruction bytes.",
    "MOV [0100h], AX — register to memory using direct addressing. Stores 78h at DS:0100h and 56h at DS:0101h (little-endian).",
    "XCHG AX, BX — atomically swaps both registers in one instruction. No temporary variable needed. If one operand were memory, the bus would be locked.",
    "LEA DI, [SI+30h] — computes 0050h + 30h = 0080h and puts it in DI. Crucially, it does NOT read from address 0080h.",
    "PUSH AX / PUSH BX / PUSH CX — each PUSH decrements SP by 2 and stores the value. Stack grows downward from 0FFEh to 0FF8h.",
    "POP CX / POP BX / POP AX — reverse order! CX was pushed last so it must be popped first. Each POP increments SP by 2.",
    "XLAT with BX=0200h, AL=0Ch — reads byte at DS:(0200h + 0Ch) = DS:020Ch and puts it in AL. One-instruction table lookup.",
    "IN AL, 60h — reads the keyboard scan code from I/O port 60h (fixed port, fits in 8 bits so no DX needed).",
    "PUSHF / CLI / ... / POPF — saves the flags including IF, disables interrupts for a critical section, then restores the original interrupt state."
  ],
  bugChallenge: {
    code: `; Goal: Save and restore all registers around a subroutine
PUSH AX
PUSH BX
PUSH CX
PUSH DX
; ... call subroutine that clobbers AX,BX,CX,DX ...
POP AX          ; Restore AX?
POP BX          ; Restore BX?
POP CX          ; Restore CX?
POP DX          ; Restore DX?`,
    hint: "In what order does the stack return values? Remember LIFO — last in, first out.",
    answer: "Bug: The POP order is wrong. PUSH saves in order AX, BX, CX, DX — so the stack has DX on top, then CX, then BX, then AX at the bottom. POP AX first actually pops DX's value into AX! The correct POP order is the reverse of PUSH: POP DX, POP CX, POP BX, POP AX. This is the classic stack ordering mistake. Fix: POP DX / POP CX / POP BX / POP AX."
  },
  difficulty: "intermediate",
  prereqs: [17, 11]
},
{
  id: 22,
  title: "Arithmetic Instructions",
  subtitle: "ADD, SUB, MUL, DIV, and their variants — the 8086 math toolkit",
  analogy: "Arithmetic instructions are like a calculator with some quirks. ADD/SUB are your basic +/- buttons. ADC/SBB are like adding/subtracting with a carry digit from the previous calculation — essential for multi-byte math. MUL/DIV are special: they always use fixed registers (AX, DX) like a calculator that only shows results on a specific screen.",
  points: [
    { t: "ADD — Addition", d: "ADD adds the source to the destination and stores the result in the destination. Affects CF, ZF, SF, OF, PF, AF. Works with 8-bit or 16-bit operands. One operand must be a register (no memory-to-memory ADD).", code: "; ADD examples:\nMOV AX, 0030h\nADD AX, 0010h     ; AX = 0040h (48+16=64)\n;\nMOV AL, 0FFh\nADD AL, 01h       ; AL = 00h, CF=1, ZF=1\n                   ; (255 + 1 = 256, wraps to 0)\n;\nADD AX, BX        ; AX = AX + BX\nADD [2000h], CL   ; [DS:2000h] += CL\nADD BX, [SI]      ; BX += word at DS:SI" },
    { t: "ADC — Add with Carry", d: "ADC adds source + destination + CF (Carry Flag). Essential for multi-byte/multi-word addition where the carry from the lower part must propagate to the upper part. First ADD the low parts, then ADC the high parts.", code: "; 32-bit addition: DX:AX = DX:AX + CX:BX\n; DX:AX = 0001:FFFFh, CX:BX = 0000:0002h\nMOV AX, 0FFFFh\nMOV DX, 0001h\nMOV BX, 0002h\nMOV CX, 0000h\n;\nADD AX, BX        ; AX = FFFFh + 0002h = 0001h, CF=1\nADC DX, CX        ; DX = 0001h + 0000h + CF(1) = 0002h\n; Result: DX:AX = 0002:0001h (131073 decimal)" },
    { t: "SUB and SBB — Subtraction", d: "SUB subtracts source from destination. SBB subtracts source and borrow (CF) from destination. Like ADC, SBB is used for multi-word subtraction where the borrow propagates from the lower part to the upper.", code: "; SUB examples:\nMOV AX, 0050h\nSUB AX, 0030h     ; AX = 0020h (80-48=32)\n;\nMOV AL, 00h\nSUB AL, 01h       ; AL = FFh, CF=1 (borrow!)\n                   ; Unsigned: 0-1 wraps to 255\n                   ; Signed: 0-1 = -1 (FFh)\n;\n; 32-bit subtraction: DX:AX -= CX:BX\nSUB AX, BX        ; Subtract low words\nSBB DX, CX        ; Subtract high words with borrow" },
    { t: "INC and DEC — Increment/Decrement", d: "INC adds 1 to the operand. DEC subtracts 1. They affect ZF, SF, OF, PF, AF but NOT the Carry Flag (CF). This is important: INC/DEC preserve CF, which lets you use them in multi-precision loops without disturbing the carry chain.", code: "; INC: operand += 1 (does NOT affect CF!)\nMOV CX, 000Fh\nINC CX            ; CX = 0010h\n;\nINC BYTE PTR [BX] ; Increment byte at DS:BX\nINC WORD PTR [SI] ; Increment word at DS:SI\n;\n; DEC: operand -= 1 (does NOT affect CF!)\nMOV CX, 0010h\nDEC CX            ; CX = 000Fh\n;\n; Loop pattern using DEC:\nMOV CX, 10        ; Loop counter\nloop_start:\n; ... loop body ...\nDEC CX\nJNZ loop_start    ; Jump if CX != 0" },
    { t: "NEG — Negate (Two's Complement)", d: "NEG computes the two's complement of the operand: result = 0 - operand. Effectively flips the sign of a signed number. Sets CF=1 unless the operand was 0. Affects all arithmetic flags.", code: "; NEG: negate (two's complement)\nMOV AL, 05h       ; AL = +5\nNEG AL            ; AL = FBh (-5)\n                   ; Same as NOT AL + 1\n;\nMOV AX, 0001h     ; AX = +1\nNEG AX            ; AX = FFFFh (-1)\n;\nMOV AL, 00h       ; AL = 0\nNEG AL            ; AL = 0, CF = 0 (special case)\n;\nMOV AL, 80h       ; AL = -128 (most negative byte)\nNEG AL            ; AL = 80h, OF = 1 (overflow!)\n                   ; -(-128) = +128 doesn't fit in byte" },
    { t: "MUL — Unsigned Multiplication", d: "MUL multiplies AL (8-bit) or AX (16-bit) by the source operand. For 8-bit: result in AX = AL × src. For 16-bit: result in DX:AX = AX × src. The source is always a register or memory, never immediate. Sets CF/OF if upper half is nonzero.", code: "; 8-bit MUL: AX = AL × source\nMOV AL, 0Ah       ; AL = 10\nMOV BL, 05h       ; BL = 5\nMUL BL            ; AX = AL × BL = 10 × 5 = 50\n                   ; AX = 0032h (50 decimal)\n                   ; CF=OF=0 (AH = 00, fits in AL)\n;\n; 16-bit MUL: DX:AX = AX × source\nMOV AX, 1000h     ; AX = 4096\nMOV BX, 0010h     ; BX = 16\nMUL BX            ; DX:AX = 4096 × 16 = 65536\n                   ; DX = 0001h, AX = 0000h\n                   ; CF=OF=1 (result overflowed AX)" },
    { t: "IMUL — Signed Multiplication", d: "IMUL is the signed version of MUL. It treats operands as signed 2's complement values. The result destination is the same: AX for 8-bit, DX:AX for 16-bit. CF/OF are set if the result cannot be represented in the lower half alone.", code: "; 8-bit IMUL: AX = AL × source (signed)\nMOV AL, -5        ; AL = FBh (-5 signed)\nMOV BL, 3         ; BL = 03h (+3 signed)\nIMUL BL           ; AX = (-5) × 3 = -15\n                   ; AX = FFF1h (-15 in 16 bits)\n;\n; 16-bit IMUL: DX:AX = AX × source (signed)\nMOV AX, -100      ; AX = FF9Ch\nMOV BX, 50        ; BX = 0032h\nIMUL BX           ; DX:AX = -100 × 50 = -5000\n                   ; DX:AX = FFFFEC78h (-5000)" },
    { t: "DIV — Unsigned Division", d: "DIV divides AX (8-bit divisor) or DX:AX (16-bit divisor) by the source. For 8-bit: AL=quotient, AH=remainder. For 16-bit: AX=quotient, DX=remainder. Division by zero or quotient overflow triggers INT 0 (divide error).", code: "; 8-bit DIV: AL = AX / src, AH = AX % src\nMOV AX, 0107h     ; AX = 263 (dividend)\nMOV BL, 10        ; BL = 10 (divisor)\nDIV BL            ; AL = 263/10 = 26 (1Ah)\n                   ; AH = 263%10 = 3  (03h)\n;\n; 16-bit DIV: AX = DX:AX / src, DX = remainder\nMOV DX, 0000h     ; Clear upper dividend\nMOV AX, 03E8h     ; DX:AX = 1000\nMOV BX, 0007h     ; Divisor = 7\nDIV BX            ; AX = 1000/7 = 142 (008Eh)\n                   ; DX = 1000%7 = 6   (0006h)" },
    { t: "IDIV — Signed Division", d: "IDIV performs signed division. For 8-bit: AX / src -> AL=quotient, AH=remainder. For 16-bit: DX:AX / src -> AX=quotient, DX=remainder. The remainder has the same sign as the dividend. Use CBW or CWD to sign-extend before dividing.", code: "; Signed division requires sign extension first!\nMOV AL, -25       ; AL = E7h (-25)\nCBW               ; AX = FFE7h (sign-extend to 16 bits)\nMOV BL, 3         ; BL = 3\nIDIV BL           ; AL = -25/3 = -8 (F8h)\n                   ; AH = -25%3 = -1 (FFh)\n;\n; 16-bit IDIV:\nMOV AX, -1000     ; AX = FC18h\nCWD               ; DX:AX = FFFFFC18h (sign-extend)\nMOV BX, 7\nIDIV BX           ; AX = -1000/7 = -142 (FF72h)\n                   ; DX = -1000%7 = -6  (FFFAh)" },
    { t: "CBW and CWD — Sign Extension", d: "CBW (Convert Byte to Word) sign-extends AL into AX. CWD (Convert Word to Doubleword) sign-extends AX into DX:AX. These are essential before IDIV — without sign extension, the upper half contains garbage and the division gives wrong results.", code: "; CBW: extend AL sign bit into AH\nMOV AL, 80h       ; AL = -128 (10000000b)\nCBW               ; AX = FF80h (AH = FFh)\n;\nMOV AL, 7Fh       ; AL = +127 (01111111b)\nCBW               ; AX = 007Fh (AH = 00h)\n;\n; CWD: extend AX sign bit into DX\nMOV AX, 8000h     ; AX = -32768\nCWD               ; DX = FFFFh, AX = 8000h\n;\nMOV AX, 0100h     ; AX = +256\nCWD               ; DX = 0000h, AX = 0100h\n;\n; ALWAYS use CWD before IDIV word!\n; ALWAYS use CBW before IDIV byte!" }
  ],
  whatIs: "The 8086 arithmetic instructions perform addition (ADD/ADC/INC), subtraction (SUB/SBB/DEC/NEG), multiplication (MUL/IMUL), and division (DIV/IDIV) on 8-bit or 16-bit operands. Multi-precision arithmetic uses ADC/SBB to propagate carry/borrow. Multiplication results are double-width (8-bit×8-bit=16-bit in AX, 16-bit×16-bit=32-bit in DX:AX). Division requires proper setup of the dividend (CWD/CBW for signed). All arithmetic instructions affect the flags register.",
  realWorld: "These exact instructions form the backbone of all computation on x86 processors. When a C compiler generates code for 'a + b', it emits ADD. When it compiles 'x / y' for signed integers, it emits CWD followed by IDIV. Multi-precision libraries (like OpenSSL's bignum) still use ADC chains for arbitrary-precision arithmetic. The divide-by-zero exception (INT 0) from DIV is the origin of the 'Divide Error' crash message in DOS and early Windows.",
  code: `; Arithmetic instruction showcase

; === Addition ===
MOV AX, 7FFFh      ; 32767 (max positive signed word)
ADD AX, 0001h      ; AX = 8000h
; CF=0 (no unsigned overflow: 32767+1=32768 OK)
; OF=1 (signed overflow: 32767+1 = -32768 WRONG!)

; === 32-bit Addition using ADC ===
; Add 0001FFFFh + 00000002h
MOV AX, 0FFFFh     ; Low word of first number
MOV DX, 0001h      ; High word of first number
ADD AX, 0002h      ; AX = 0001h, CF = 1 (carry!)
ADC DX, 0000h      ; DX = 0001h + 0 + 1 = 0002h
; DX:AX = 0002:0001h = 00020001h (correct!)

; === Subtraction ===
MOV AX, 0000h
SUB AX, 0001h      ; AX = FFFFh, CF=1 (borrow)
; Unsigned: 0-1 = 65535 (wrapped)
; Signed: 0-1 = -1 (correct)

; === Unsigned multiply ===
MOV AL, 200         ; AL = C8h (200)
MOV BL, 100         ; BL = 64h (100)
MUL BL              ; AX = 200 × 100 = 20000
                    ; AX = 4E20h, CF=OF=1 (result > 255)

; === Signed multiply ===
MOV AX, -500        ; AX = FE0Ch
MOV BX, 30          ; BX = 001Eh
IMUL BX             ; DX:AX = -500 × 30 = -15000
                    ; DX:AX = FFFFC568h

; === Unsigned divide ===
MOV DX, 0           ; Clear high word
MOV AX, 1000        ; Dividend = 1000
MOV BX, 7           ; Divisor = 7
DIV BX              ; AX = 142 (quotient)
                    ; DX = 6 (remainder)

; === Signed divide (with sign extension!) ===
MOV AX, -1000       ; AX = FC18h
CWD                 ; DX = FFFFh (sign extend)
MOV BX, 7
IDIV BX             ; AX = -142, DX = -6`,
  funFact: "The 8086 MUL instruction takes between 70-118 clock cycles for a 16-bit multiply — that is almost 25 microseconds at 5 MHz! By comparison, a modern x86 processor does a 64-bit multiply in 3-4 clock cycles (about 1 nanosecond at 4 GHz). That is roughly a 25,000x improvement in multiply speed over 45 years of processor evolution.",
  quiz: [
    { q: "After MUL BL (8-bit multiply), where is the result stored?", opts: ["AL only", "AX (AL = low byte, AH = high byte)", "DX:AX", "BL"], ans: 1 },
    { q: "What must you do before executing IDIV BX (signed 16-bit division)?", opts: ["Clear DX to zero", "Execute CWD to sign-extend AX into DX:AX", "Set the carry flag", "Move the dividend into BX"], ans: 1 },
    { q: "What is special about INC and DEC regarding flags?", opts: ["They affect no flags at all", "They affect all flags including CF", "They affect ZF, SF, OF, PF, AF but NOT the Carry Flag (CF)", "They only affect the Zero Flag"], ans: 2 },
    { q: "After ADD AX, BX where AX=FFFFh and BX=0001h, what are AX and CF?", opts: ["AX=0000h, CF=1", "AX=0000h, CF=0", "AX=10000h, CF=0", "AX=FFFFh, CF=1"], ans: 0 },
    { q: "What happens if you execute DIV BL when BL=0?", opts: ["AL is set to FFh", "The result is zero", "A divide error exception (INT 0) is triggered", "The instruction is skipped"], ans: 2 }
  ],
  challenge: "Write an 8086 routine that: (1) Adds two 32-bit unsigned numbers stored in DX:AX and CX:BX using ADD/ADC, (2) Multiplies a 16-bit unsigned number in AX by 10 without using MUL (hint: use shifts and ADD), (3) Divides a signed 32-bit number in DX:AX by a signed 16-bit number in BX, storing quotient and remainder separately, (4) Computes the absolute value of a signed number in AX (handle the edge case of -32768).",
  resources: [
    { type: "docs", title: "8086 Arithmetic Instructions", url: "https://www.geeksforgeeks.org/arithmetic-instructions-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "ADD, SUB, MUL, DIV in 8086", url: "https://www.youtube.com/watch?v=JZBI7jqZI5s", source: "YouTube" },
    { type: "article", title: "8086 Multiply and Divide", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_instruction_sets.htm", source: "TutorialsPoint" },
    { type: "docs", title: "x86 Instruction Reference", url: "https://www.felixcloutier.com/x86/", source: "x86 Reference" }
  ],
  eli5: "ADD is like putting two groups of marbles together and counting the total. SUB is like taking some marbles away. If you have too many marbles to fit in one jar (overflow), you need a second jar — that is why MUL puts big results in TWO registers. DIV is like splitting marbles into equal groups: the groups go in one register (quotient), and the leftover marbles go in another (remainder). ADC is like saying 'oh, there was one extra marble from last time — add that too!'",
  codeWalkthrough: [
    "ADD AX, 0001h with AX=7FFFh — unsigned result 8000h is fine (CF=0), but signed result wraps from +32767 to -32768 (OF=1). The flags tell you which interpretation overflowed.",
    "ADD AX, 0002h with AX=FFFFh gives 0001h with CF=1 — this carry is crucial because ADC DX,0000h picks it up, correctly incrementing DX from 0001h to 0002h.",
    "SUB AX, 0001h with AX=0000h gives FFFFh with CF=1 (borrow). As unsigned, 0-1 wrapped to 65535. As signed, this is simply -1.",
    "MUL BL with AL=200, BL=100: unsigned multiply 200×100=20000, stored in AX=4E20h. CF and OF are set because the result does not fit in AL alone (AH is nonzero).",
    "IMUL BX with AX=-500, BX=30: signed multiply gives -15000. DX:AX holds the 32-bit signed result FFFFC568h.",
    "DIV BX — before dividing, we clear DX to 0 because DIV uses DX:AX as the 32-bit dividend. Forgetting to clear DX is a common bug that causes divide overflow.",
    "CWD before IDIV — sign-extends AX=-1000 (FC18h) into DX=FFFFh. Without this, DX would be 0 from the earlier DIV, making the dividend wrong for signed division.",
    "IDIV gives AX=-142 (quotient) and DX=-6 (remainder). The remainder has the same sign as the dividend, which is the 8086's convention."
  ],
  bugChallenge: {
    code: `; Goal: Divide signed value -200 by 7
MOV AX, -200       ; AX = FF38h (-200)
MOV BX, 7          ; BX = 7
DIV BX             ; Divide!
; Expected: quotient = -28, remainder = -4
; But the program crashes with a divide error!`,
    hint: "DIV is for unsigned division. And what value is in DX?",
    answer: "Two bugs: (1) DIV is unsigned division, not signed — it treats DX:AX as a large unsigned number. For signed division, use IDIV. (2) DX is not set up properly. DIV uses DX:AX as a 32-bit unsigned dividend, but DX contains whatever garbage was left from previous operations. Even if we fix to IDIV, we need CWD first to sign-extend AX into DX. Fix: MOV AX, -200 / CWD / MOV BX, 7 / IDIV BX. Now AX=-28 (quotient) and DX=-4 (remainder)."
  },
  difficulty: "intermediate",
  prereqs: [21, 19]
},
{
  id: 23,
  title: "Logical, Shift, and Rotate Instructions",
  subtitle: "AND, OR, XOR, NOT, TEST, CMP plus shifts and rotates — bit manipulation mastery",
  analogy: "Logical instructions are like filters and masks for bits. AND is like a stencil — only the bits that match both patterns survive. OR is like mixing two colors — any bit that is 1 in either input stays 1. XOR is like a secret code toggle — applying it twice gets you back to the original. Shifts are like a conveyor belt pushing bits left or right, while rotates are a circular carousel where bits wrap around.",
  points: [
    { t: "AND — Bitwise AND", d: "AND performs bit-by-bit AND: a bit is 1 only if both corresponding source and destination bits are 1. Used to clear specific bits (masking), test bit patterns, and isolate bit fields. Clears CF and OF, updates ZF, SF, PF.", code: "; AND: mask/clear bits\nMOV AL, 0F7h       ; AL = 11110111b\nAND AL, 0Fh        ; AL = 00000111b (07h)\n                    ; Mask: keep only lower nibble\n;\n; Clear bit 3 of AL:\nAND AL, 11110111b  ; Bit 3 forced to 0\n                    ; All other bits unchanged\n;\n; AND always clears CF and OF\n; Sets ZF=1 if result is zero" },
    { t: "OR — Bitwise OR", d: "OR performs bit-by-bit OR: a bit is 1 if either source or destination bit (or both) is 1. Used to set specific bits without affecting others. Clears CF and OF, updates ZF, SF, PF.", code: "; OR: set bits\nMOV AL, 05h        ; AL = 00000101b\nOR AL, 30h         ; AL = 00110101b (35h)\n                    ; Set bits 4 and 5\n;\n; Set bit 7 of BL:\nOR BL, 80h         ; Bit 7 forced to 1\n                    ; All other bits unchanged\n;\n; Test if register is zero:\nOR AX, AX          ; Does not change AX\n                    ; But sets ZF=1 if AX=0\n                    ; Shorter than CMP AX, 0" },
    { t: "XOR — Bitwise Exclusive OR", d: "XOR outputs 1 when bits differ, 0 when they match. Used to toggle bits, create checksums, and as the fastest way to zero a register (XOR AX,AX). Clears CF and OF, updates ZF, SF, PF.", code: "; XOR: toggle bits\nMOV AL, 0FFh       ; AL = 11111111b\nXOR AL, 0Fh        ; AL = 11110000b (F0h)\n                    ; Lower nibble toggled\n;\n; Zero a register (fastest method):\nXOR AX, AX         ; AX = 0, ZF=1\n                    ; 2 bytes, faster than MOV AX,0\n;\n; Toggle bit 0 (flip between 0 and 1):\nXOR AL, 01h        ; Bit 0 flipped\n;\n; XOR twice = original value:\n; AX XOR key XOR key = AX (self-inverse)" },
    { t: "NOT — Bitwise Complement", d: "NOT flips every bit: 0 becomes 1, 1 becomes 0 (one's complement). Uniquely, NOT does NOT affect any flags. This distinguishes it from NEG (which computes two's complement and does affect flags).", code: "; NOT: flip all bits (one's complement)\nMOV AL, 05h        ; AL = 00000101b\nNOT AL             ; AL = 11111010b (FAh)\n;\n; NOT does NOT affect flags!\n; Compare with NEG:\nMOV AL, 05h\nNOT AL             ; AL = FAh, flags unchanged\n;\nMOV AL, 05h\nNEG AL             ; AL = FBh (two's complement)\n                    ; CF=1, flags changed!\n;\n; NOT + 1 = NEG (two's complement)" },
    { t: "TEST — Non-Destructive AND", d: "TEST performs AND but discards the result — it only sets flags. The destination operand is unchanged. Used to check if specific bits are set or if a register is zero, without modifying data. Commonly followed by JZ/JNZ.", code: "; TEST: check bits without changing data\nMOV AL, 0B5h       ; AL = 10110101b\nTEST AL, 08h       ; AND with 00001000b\n                    ; Result = 00000000b -> ZF=1\n                    ; AL still = 10110101b!\n; Bit 3 is 0! (ZF=1)\n;\nTEST AL, 04h       ; AND with 00000100b\n                    ; Result = 00000100b -> ZF=0\n; Bit 2 is 1! (ZF=0)\n;\n; Check if AX is zero:\nTEST AX, AX        ; ZF=1 if AX=0\nJZ is_zero          ; Jump if zero" },
    { t: "CMP — Compare (Non-Destructive SUB)", d: "CMP subtracts source from destination but discards the result — it only sets flags. Used before conditional jumps (JE, JNE, JG, JL, JA, JB). The operands are unchanged after CMP.", code: "; CMP: compare two values\nMOV AX, 0050h\nCMP AX, 0030h      ; Compute 50h-30h=20h, set flags\n                    ; AX still = 0050h!\n                    ; ZF=0 (not equal)\n                    ; CF=0 (no borrow, AX >= operand)\n;\n; Unsigned comparison:\nCMP AX, BX\nJA  ax_above        ; Jump if AX > BX (unsigned)\nJB  ax_below        ; Jump if AX < BX (unsigned)\nJE  ax_equal        ; Jump if AX = BX\n;\n; Signed comparison:\nCMP AX, BX\nJG  ax_greater      ; Jump if AX > BX (signed)\nJL  ax_less         ; Jump if AX < BX (signed)" },
    { t: "SHL/SAL — Shift Left", d: "SHL (Shift Left) shifts bits left by 1 or CL positions. Zeros fill from the right. Each left shift multiplies by 2. The last bit shifted out goes to CF. SHL and SAL (Shift Arithmetic Left) are identical operations.", code: "; SHL: shift left (multiply by 2)\nMOV AL, 05h        ; AL = 00000101b (5)\nSHL AL, 1          ; AL = 00001010b (10)\n                    ; Shifted left 1 = multiply by 2\n;\n; Shift by CL positions:\nMOV AL, 03h        ; AL = 00000011b (3)\nMOV CL, 4          ; Shift count\nSHL AL, CL         ; AL = 00110000b (48)\n                    ; 3 × 2^4 = 48\n;\n; Multiply by 10 using shifts:\n; AX × 10 = AX × 8 + AX × 2\nMOV BX, AX         ; Save AX\nSHL AX, 1          ; AX × 2\nMOV CX, AX         ; Save AX×2\nSHL AX, 1          ; AX × 4\nSHL AX, 1          ; AX × 8\nADD AX, CX         ; AX×8 + AX×2 = AX×10" },
    { t: "SHR and SAR — Shift Right", d: "SHR (Shift Right) shifts bits right, filling zeros from the left — unsigned divide by 2. SAR (Shift Arithmetic Right) preserves the sign bit (MSB), filling with copies of the sign — signed divide by 2. The last bit shifted out goes to CF.", code: "; SHR: unsigned shift right (divide by 2)\nMOV AL, 0Ah        ; AL = 00001010b (10)\nSHR AL, 1          ; AL = 00000101b (5)\n                    ; 10 / 2 = 5 (unsigned)\n;\n; SAR: signed shift right (preserves sign)\nMOV AL, 0F0h       ; AL = 11110000b (-16 signed)\nSAR AL, 1          ; AL = 11111000b (-8 signed)\n                    ; Sign bit (1) copied in!\n;\n; SHR on same value:\nMOV AL, 0F0h       ; AL = 11110000b (240 unsigned)\nSHR AL, 1          ; AL = 01111000b (120 unsigned)\n                    ; Zero filled from left" },
    { t: "ROL and ROR — Rotate", d: "ROL (Rotate Left) shifts bits left, and the bit that falls off the MSB wraps around to the LSB. ROR (Rotate Right) does the opposite. No bits are lost — they just circle around. CF receives a copy of the last bit rotated.", code: "; ROL: rotate left (circular)\nMOV AL, 80h        ; AL = 10000000b\nROL AL, 1          ; AL = 00000001b, CF=1\n                    ; Bit 7 wrapped to bit 0\n;\nMOV AL, 0A5h       ; AL = 10100101b\nROL AL, 1          ; AL = 01001011b, CF=1\n;\n; ROR: rotate right (circular)\nMOV AL, 01h        ; AL = 00000001b\nROR AL, 1          ; AL = 10000000b, CF=1\n                    ; Bit 0 wrapped to bit 7" },
    { t: "RCL and RCR — Rotate Through Carry", d: "RCL rotates bits left through the carry flag — CF becomes bit 0, old MSB goes to CF. RCR rotates right through carry — CF becomes the MSB, old bit 0 goes to CF. This creates a 9-bit (byte) or 17-bit (word) rotation that is perfect for multi-word shifts.", code: "; RCL: rotate left through carry (9-bit rotate)\nMOV AL, 80h        ; AL = 10000000b, assume CF=0\nRCL AL, 1          ; CF <- [bit7|AL|CF] -> bit0\n                    ; AL = 00000000b, CF = 1\n                    ; Old bit 7 went to CF\n;\n; Multi-word left shift using RCL:\n; Shift 32-bit DX:AX left by 1:\nSHL AX, 1          ; Shift low word, MSB -> CF\nRCL DX, 1          ; Shift high word, CF -> bit 0\n                    ; Carry propagates from AX to DX!\n;\n; RCR for multi-word right shift:\nSAR DX, 1          ; Shift high word right, bit 0 -> CF\nRCR AX, 1          ; CF -> MSB of AX, bit 0 -> CF" }
  ],
  whatIs: "Logical instructions (AND, OR, XOR, NOT, TEST) manipulate individual bits for masking, setting, toggling, and testing. CMP performs non-destructive subtraction for comparisons. Shift instructions (SHL, SHR, SAR) multiply or divide by powers of 2. Rotate instructions (ROL, ROR, RCL, RCR) circularly shift bits, with RCL/RCR including the carry flag for multi-word operations. These instructions are essential for bit-level data processing and fast arithmetic.",
  realWorld: "Bitwise operations are everywhere in systems programming. AND masks are used in network subnet calculations (IP AND mask). XOR is the basis of many encryption algorithms and checksums (CRC). Shift-and-add is how hardware multipliers work. Device driver code constantly uses TEST to check status register bits. Modern compilers use shifts and adds instead of MUL for multiplication by constants (e.g., x*10 = x*8 + x*2) because shifts are faster.",
  code: `; Logical, shift, and rotate showcase

; === Bit Masking with AND ===
; Extract bits 4-7 from AL (upper nibble)
MOV AL, 0B7h       ; AL = 10110111b
AND AL, 0F0h       ; AL = 10110000b (B0h)
; To get the value 0-15, shift right:
MOV CL, 4
SHR AL, CL         ; AL = 00001011b (0Bh = 11)

; === Setting bits with OR ===
; Set bit 5 to enable a feature flag
MOV AL, [status]   ; Read current status byte
OR AL, 20h         ; Set bit 5 (00100000b)
MOV [status], AL   ; Write back

; === Toggle with XOR ===
; Toggle an LED connected to bit 0
MOV AL, [port_data]
XOR AL, 01h        ; Flip bit 0
MOV [port_data], AL

; === Fast zero check ===
TEST AX, AX        ; Sets ZF without changing AX
JZ handle_zero     ; Branch if AX is zero

; === Multiply by 12 using shifts ===
; AX × 12 = AX × 8 + AX × 4
MOV BX, AX         ; BX = AX (original)
SHL AX, 1          ; AX = AX × 2
SHL AX, 1          ; AX = AX × 4
MOV CX, AX         ; CX = AX × 4
SHL AX, 1          ; AX = AX × 8
ADD AX, CX         ; AX = AX×8 + AX×4 = AX × 12

; === 32-bit shift left using RCL ===
; Shift DX:AX left by 1 bit
SHL AX, 1          ; Shift low word, bit 15 -> CF
RCL DX, 1          ; CF enters bit 0 of DX

; === Rotate to examine each bit ===
MOV CX, 8          ; Check all 8 bits
MOV BL, AL         ; BL = value to examine
check_bit:
    ROL BL, 1      ; Rotate left, MSB -> CF -> bit 0
    JC bit_is_one  ; CF=1 means that bit was 1
    ; bit is 0...
bit_is_one:
    DEC CX
    JNZ check_bit`,
  funFact: "XOR AX, AX to zero a register is not just a programmer trick — Intel's own optimization manuals recommend it. On modern x86 processors, XOR reg, reg is detected by the hardware as a 'zeroing idiom' and does not even execute in the ALU — the register renamer simply maps the register to a physical zero register. It also breaks dependency chains, making it faster than MOV AX, 0 in superscalar pipelines.",
  quiz: [
    { q: "What does AND AL, 0Fh do?", opts: ["Sets all bits in AL to 1", "Clears the upper nibble and keeps the lower nibble of AL", "Clears the lower nibble and keeps the upper nibble", "Inverts all bits in AL"], ans: 1 },
    { q: "What is the fastest way to zero a register on the 8086?", opts: ["MOV AX, 0", "SUB AX, AX", "XOR AX, AX", "AND AX, 0"], ans: 2 },
    { q: "What is the difference between SHR and SAR for negative numbers?", opts: ["No difference — both shift in zeros", "SHR fills with 0 (unsigned divide); SAR fills with the sign bit (signed divide)", "SHR preserves the sign; SAR does not", "SAR shifts left; SHR shifts right"], ans: 1 },
    { q: "What does TEST AL, 80h followed by JNZ do?", opts: ["Jumps if AL is zero", "Jumps if bit 7 of AL is set (AL is negative in signed interpretation)", "Jumps if AL equals 80h", "Jumps if all bits of AL are set"], ans: 1 },
    { q: "How do you shift a 32-bit value in DX:AX left by 1?", opts: ["SHL DX, 1 then SHL AX, 1", "SHL AX, 1 then RCL DX, 1", "ROL AX, 1 then ROL DX, 1", "SHL AX, 1 then ADC DX, 0"], ans: 1 }
  ],
  challenge: "Write assembly routines for: (1) Count the number of 1-bits in AL (population count) using rotate and TEST, (2) Swap the upper and lower nibbles of AL without using XCHG (hint: use rotates), (3) Multiply AX by 100 using only SHL and ADD (no MUL instruction), (4) Implement a simple XOR cipher: encrypt a byte in AL with a key in BL, then decrypt it to prove XOR is self-inverse.",
  resources: [
    { type: "docs", title: "8086 Logical Instructions", url: "https://www.geeksforgeeks.org/logical-instructions-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "Shifts and Rotates in 8086", url: "https://www.youtube.com/watch?v=FXK_BbpgMcQ", source: "YouTube" },
    { type: "article", title: "Bit Manipulation in Assembly", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_instruction_sets.htm", source: "TutorialsPoint" },
    { type: "docs", title: "x86 Shift and Rotate Reference", url: "https://www.felixcloutier.com/x86/sal:sar:shl:shr", source: "x86 Reference" }
  ],
  eli5: "AND is like a gate that only lets through things that BOTH friends agree on. OR lets through anything that at least one friend likes. XOR is a 'disagree detector' — it only lets through things where exactly one friend says yes. NOT is like opposite day — everything flips. Shifts are like pushing coins along a ruler — they fall off one end. Rotates are like a merry-go-round — what goes off one end comes back on the other side.",
  codeWalkthrough: [
    "AND AL, 0F0h with AL=B7h — the mask 0F0h has upper nibble all 1s and lower nibble all 0s. AND preserves only the upper nibble: B7h AND F0h = B0h.",
    "SHR AL, CL with CL=4 shifts the upper nibble down to the lower position: B0h >> 4 = 0Bh (11 decimal). This is how you extract a bit field.",
    "OR AL, 20h sets bit 5 regardless of its current value. The mask 20h = 00100000b has only bit 5 set, so OR forces that bit to 1 and leaves all others unchanged.",
    "XOR AL, 01h toggles bit 0: if it was 0, it becomes 1; if 1, it becomes 0. Applying XOR 01h again restores the original value — XOR is its own inverse.",
    "TEST AX, AX performs AX AND AX = AX but does not store the result. It only sets flags. ZF=1 if AX is zero. This is a common pattern for null pointer checks.",
    "The multiply-by-12 sequence: SHL×1 gives ×2, SHL×2 gives ×4, SHL×3 gives ×8. Then AX×8 + saved AX×4 = AX×12. Shifts are much faster than the MUL instruction.",
    "SHL AX, 1 / RCL DX, 1 — the SHL pushes the MSB of AX into CF. Then RCL shifts DX left and pulls CF into its bit 0. This propagates the carry from the low word to the high word.",
    "The bit-checking loop uses ROL to rotate each bit into the CF position, then JC tests it. After 8 rotations, BL is back to its original value."
  ],
  bugChallenge: {
    code: `; Goal: Test if bit 3 of AL is set
MOV AL, [input]     ; AL = some value
AND AL, 08h         ; Mask bit 3
JNZ bit3_set        ; Jump if bit 3 was 1
; ... bit 3 is 0 ...
bit3_set:
; ... bit 3 is 1 ...
; Programmer then tries to use AL later
MOV [output], AL    ; Store original value??`,
    hint: "AND modifies the destination. What happened to the other bits of AL?",
    answer: "Bug: The AND AL, 08h instruction destroys the original value of AL! After AND, AL is either 08h (bit 3 was set) or 00h (bit 3 was clear) — all other bits are lost. When MOV [output], AL executes, it stores the masked value, not the original. Fix: Use TEST AL, 08h instead of AND AL, 08h. TEST performs the same AND operation but only sets flags — it does not modify AL. The original value is preserved for later use."
  },
  difficulty: "intermediate",
  prereqs: [22]
},
{
  id: 24,
  title: "Flags Register and Condition Codes",
  subtitle: "CF, ZF, SF, OF, PF, AF, DF, IF, TF — the 9 flags that drive every decision the 8086 makes",
  analogy: "The flags register is like a dashboard in a car. CF (Carry) is the fuel warning light — it means something overflowed in unsigned math. ZF (Zero) is the odometer hitting exactly 000000. SF (Sign) indicates whether you are going forward or backward. OF (Overflow) is the speedometer needle going past the maximum into the red zone. The driver (conditional jump instructions) checks these lights to decide what to do next.",
  points: [
    { t: "Flags Register Layout", d: "The 8086 flags register is 16 bits wide but only 9 bits are defined. Bits 0,2,4,6,7,11 are status flags (CF,PF,AF,ZF,SF,OF) set by arithmetic/logic operations. Bits 8,9,10 are control flags (TF,IF,DF) set by specific instructions.", code: "; Flags register bit layout:\n; Bit  | Flag | Name\n; -----+------+-------------------\n;  0   | CF   | Carry Flag\n;  2   | PF   | Parity Flag\n;  4   | AF   | Auxiliary Carry Flag\n;  6   | ZF   | Zero Flag\n;  7   | SF   | Sign Flag\n;  8   | TF   | Trap Flag\n;  9   | IF   | Interrupt Flag\n; 10   | DF   | Direction Flag\n; 11   | OF   | Overflow Flag\n; Bits 1,3,5,12-15 are undefined/reserved" },
    { t: "CF — Carry Flag", d: "CF is set when an arithmetic operation produces a carry out of the MSB (addition) or a borrow into the MSB (subtraction) for unsigned interpretation. It indicates unsigned overflow. Also set by shift/rotate instructions to hold the last bit shifted out.", code: "; CF set by unsigned overflow:\nMOV AL, 0FFh       ; AL = 255 (max unsigned byte)\nADD AL, 01h        ; AL = 00h, CF = 1\n                    ; 255 + 1 = 256 (overflows 8 bits)\n;\n; CF set by borrow:\nMOV AL, 00h\nSUB AL, 01h        ; AL = FFh, CF = 1 (borrow)\n                    ; 0 - 1 = underflow\n;\n; CF from shift:\nMOV AL, 81h        ; 10000001b\nSHR AL, 1          ; AL = 40h, CF = 1\n                    ; Last bit shifted out -> CF\n;\n; Check CF: JC (jump if carry), JNC (jump if no carry)" },
    { t: "ZF — Zero Flag", d: "ZF is set to 1 when the result of an arithmetic or logical operation is exactly zero. ZF=0 when the result is nonzero. The most commonly tested flag — used for equality checks (CMP A,B / JE target) and loop termination (DEC CX / JNZ loop).", code: "; ZF set when result is zero:\nMOV AX, 0005h\nSUB AX, 0005h      ; AX = 0000h, ZF = 1\n;\nMOV AX, 0005h\nSUB AX, 0003h      ; AX = 0002h, ZF = 0\n;\n; Equality test:\nCMP AX, BX         ; Computes AX-BX, sets flags\nJE equal            ; Jump if ZF=1 (AX == BX)\nJNE not_equal       ; Jump if ZF=0 (AX != BX)\n;\n; Loop until counter reaches zero:\nMOV CX, 10\nmy_loop:\n    ; ... loop body ...\n    DEC CX          ; CX -= 1\n    JNZ my_loop     ; Repeat while CX != 0" },
    { t: "SF — Sign Flag", d: "SF is a copy of the MSB (most significant bit) of the result. For signed interpretation: SF=0 means positive or zero, SF=1 means negative. SF reflects bit 7 for byte operations and bit 15 for word operations.", code: "; SF reflects the MSB of the result:\nMOV AL, 7Fh        ; AL = 01111111b (+127)\nADD AL, 01h        ; AL = 10000000b (-128)\n                    ; SF = 1 (MSB is 1, negative)\n;\nMOV AX, 0001h\nSUB AX, 0001h      ; AX = 0000h\n                    ; SF = 0 (MSB is 0, non-negative)\n;\n; JS / JNS — jump based on sign:\nCMP AX, 0\nJS negative         ; Jump if result is negative\nJNS non_negative    ; Jump if result >= 0" },
    { t: "OF — Overflow Flag", d: "OF is set when the signed result is too large (positive overflow) or too small (negative overflow) to fit in the destination. OF=1 means the sign of the result is wrong — adding two positives got a negative, or adding two negatives got a positive.", code: "; OF: signed overflow detection\nMOV AL, 7Fh        ; +127 (max positive byte)\nADD AL, 01h        ; AL = 80h (-128)\n                    ; OF = 1! (+127)+1 should be +128\n                    ; but +128 doesn't fit in signed byte\n;\nMOV AL, 80h        ; -128 (most negative byte)\nSUB AL, 01h        ; AL = 7Fh (+127)\n                    ; OF = 1! (-128)-1 should be -129\n                    ; but -129 doesn't fit in signed byte\n;\n; JO / JNO — jump on overflow:\nADD AX, BX\nJO overflow_error   ; Jump if signed overflow" },
    { t: "PF — Parity Flag", d: "PF is set to 1 if the low 8 bits of the result have an even number of 1-bits (even parity). PF=0 for odd parity. Originally used for serial communication error detection. Only checks the LOW byte, even for 16-bit operations.", code: "; PF: even parity of low byte\nMOV AL, 03h        ; AL = 00000011b (two 1s)\n                    ; PF = 1 (even number of 1s)\n;\nMOV AL, 07h        ; AL = 00000111b (three 1s)\n                    ; PF = 0 (odd number of 1s)\n;\n; For 16-bit ops, ONLY low byte checked:\nMOV AX, 0100h      ; Low byte = 00h (zero 1s)\n                    ; PF = 1 (even: zero is even)\n;\n; JP / JPE — jump if parity even (PF=1)\n; JNP / JPO — jump if parity odd (PF=0)" },
    { t: "AF — Auxiliary Carry Flag", d: "AF is set when there is a carry from bit 3 to bit 4 (out of the lower nibble). Used exclusively by BCD instructions (DAA, DAS, AAA, AAS) to detect when a nibble exceeds 9. Not directly testable with conditional jumps.", code: "; AF: carry from lower nibble to upper nibble\nMOV AL, 0Fh        ; AL = 00001111b\nADD AL, 01h        ; AL = 00010000b\n                    ; AF = 1 (carry from bit 3 to bit 4)\n;\nMOV AL, 19h        ; Packed BCD 19\nADD AL, 01h        ; AL = 1Ah\n                    ; AF = 1 (lower nibble wrapped)\n; DAA checks AF:\nDAA                 ; AL = 20h (BCD 20, corrected)\n;\n; AF cannot be tested with JC/JZ etc.\n; It's used internally by DAA/DAS/AAA/AAS" },
    { t: "IF — Interrupt Flag", d: "IF controls whether maskable hardware interrupts (INTR pin) are recognized. IF=1 enables interrupts (STI), IF=0 disables them (CLI). NMI is not affected by IF. IF is automatically cleared when the CPU enters an interrupt handler.", code: "; IF: enable/disable maskable interrupts\nSTI               ; IF = 1 (enable INTR)\n                   ; Hardware interrupts now accepted\n;\nCLI               ; IF = 0 (disable INTR)\n                   ; Hardware interrupts blocked\n;\n; Critical section pattern:\nCLI               ; Disable interrupts\n; ... critical code (no interrupts) ...\nSTI               ; Re-enable interrupts\n;\n; Safer pattern using PUSHF/POPF:\nPUSHF             ; Save flags (including IF)\nCLI               ; Disable interrupts\n; ... critical code ...\nPOPF              ; Restore original IF state" },
    { t: "DF — Direction Flag", d: "DF controls the direction of string operations (MOVSB, CMPSB, STOSB, etc.). DF=0 (CLD) means auto-increment SI/DI (forward). DF=1 (STD) means auto-decrement SI/DI (backward). Always set DF explicitly before string operations.", code: "; DF: string operation direction\nCLD               ; DF = 0 (forward, SI/DI increment)\n                   ; MOVSB: [ES:DI++] = [DS:SI++]\n;\nSTD               ; DF = 1 (backward, SI/DI decrement)\n                   ; MOVSB: [ES:DI--] = [DS:SI--]\n;\n; Always CLD before forward string ops:\nCLD\nMOV CX, 100       ; Copy 100 bytes\nREP MOVSB          ; DS:SI -> ES:DI, forward\n;\n; STD for reverse copy (overlapping buffers):\nSTD\nMOV CX, 100\nREP MOVSB          ; DS:SI -> ES:DI, backward" },
    { t: "TF — Trap Flag", d: "TF enables single-step mode. When TF=1, the CPU generates an INT 1 (single-step interrupt) after every instruction. This is how debuggers implement single-stepping. TF is normally 0; debuggers set it temporarily via the saved flags on the stack.", code: "; TF: single-step debugging\n; TF=1 -> INT 1 after EVERY instruction\n;\n; Debuggers set TF via stack manipulation:\n;   1. PUSHF (save flags to stack)\n;   2. OR word [SP], 0100h (set bit 8 = TF)\n;   3. POPF (load flags with TF=1)\n;   4. Next instruction executes\n;   5. INT 1 fires -> debugger regains control\n;\n; There is no STF/CTF instruction!\n; TF must be set via PUSHF/modify/POPF\n;\n; INT 1 handler (in debugger):\n;   Display registers\n;   Wait for user command\n;   IRET (resume, TF still set for next step)" },
    { t: "Conditional Jumps and Flag Combinations", d: "Conditional jumps test specific flag conditions. JE/JZ tests ZF=1. JA (unsigned above) tests CF=0 AND ZF=0. JG (signed greater) tests ZF=0 AND SF=OF. Understanding which flags drive which jumps is key to writing correct branch logic.", code: "; Unsigned conditional jumps (after CMP A,B):\n; JA  / JNBE  -> CF=0 AND ZF=0 (above)\n; JAE / JNB   -> CF=0          (above or equal)\n; JB  / JNAE  -> CF=1          (below)\n; JBE / JNA   -> CF=1 OR ZF=1  (below or equal)\n;\n; Signed conditional jumps (after CMP A,B):\n; JG  / JNLE  -> ZF=0 AND SF=OF (greater)\n; JGE / JNL   -> SF=OF           (greater or equal)\n; JL  / JNGE  -> SF!=OF          (less)\n; JLE / JNG   -> ZF=1 OR SF!=OF  (less or equal)\n;\n; Common jumps:\n; JE  / JZ    -> ZF=1  (equal/zero)\n; JNE / JNZ   -> ZF=0  (not equal/not zero)\n; JC          -> CF=1  (carry)\n; JO          -> OF=1  (overflow)" }
  ],
  whatIs: "The 8086 flags register contains 9 flags that record the results of operations and control processor behavior. Six status flags (CF, ZF, SF, OF, PF, AF) are set by arithmetic and logical instructions. Three control flags (IF, DF, TF) are set by specific instructions to control interrupts, string direction, and single-step debugging. Conditional jumps test flag combinations to implement branches, loops, and comparisons.",
  realWorld: "Every if-statement, while-loop, and comparison in every program compiled for x86 ultimately comes down to flags and conditional jumps. When you write 'if (x > 0)' in C, the compiler emits CMP followed by JLE (to skip the if-body). The flags register is the single most important mechanism for program control flow. Modern x86 processors have a FLAGS register expanded to 64 bits (RFLAGS) but the original 9 flags from the 8086 are all still there and work exactly the same way.",
  code: `; Flags register deep dive with examples

; === CF: Carry Flag ===
MOV AL, 200         ; AL = C8h (unsigned 200)
ADD AL, 100         ; AL = 2Ch, CF = 1
                    ; 200+100=300 > 255 -> carry!
JC unsigned_overflow ; Jump if CF=1

; === ZF: Zero Flag ===
MOV AX, 10
SUB AX, 10          ; AX = 0, ZF = 1
JZ result_is_zero   ; Jump if ZF=1

; === SF: Sign Flag ===
MOV AX, 1
SUB AX, 5           ; AX = FFFCh (-4), SF = 1
JS result_negative   ; Jump if SF=1 (result < 0)

; === OF: Overflow Flag ===
MOV AL, 100          ; Signed: +100
ADD AL, 50           ; AL = 96h (150 unsigned, -106 signed)
                     ; OF = 1! +100+50=150 > 127
JO signed_overflow   ; Jump if OF=1

; === Combined: signed comparison ===
; Is AX > BX (signed)?
MOV AX, -5
MOV BX, -10
CMP AX, BX           ; -5 - (-10) = +5
                      ; ZF=0, SF=0, OF=0
                      ; SF=OF and ZF=0 -> AX > BX (signed)
JG ax_is_greater      ; True! -5 > -10

; === Combined: unsigned comparison ===
MOV AX, 0FFF0h       ; 65520 unsigned
MOV BX, 0010h        ; 16 unsigned
CMP AX, BX           ; FFF0h - 0010h = FFE0h
                      ; CF=0, ZF=0 -> AX above BX
JA ax_is_above        ; True! 65520 > 16

; === Control flags ===
CLI                   ; IF=0 — disable interrupts
STI                   ; IF=1 — enable interrupts
CLD                   ; DF=0 — string ops go forward
STD                   ; DF=1 — string ops go backward`,
  funFact: "The Parity Flag (PF) was included in the 8086 primarily for backward compatibility with the 8080/8085, where it was used for serial communication error checking. In the decades since, PF found a surprising second life: modern compilers and CPUs use it for floating-point comparisons! The x87 FPU comparison instructions (FCOM, FUCOM) set flags in the FPU status word, which are then loaded into the CPU flags — PF indicates an 'unordered' (NaN) comparison result.",
  quiz: [
    { q: "After ADD AL, BL where AL=FFh and BL=01h, which flags are set?", opts: ["CF=1, ZF=1, SF=0", "CF=0, ZF=1, SF=0", "CF=1, ZF=0, SF=1", "CF=1, ZF=1, SF=1"], ans: 0 },
    { q: "What condition does JG (Jump if Greater) test?", opts: ["CF=0 AND ZF=0 (unsigned above)", "ZF=0 AND SF=OF (signed greater)", "SF=1 (negative result)", "OF=1 (overflow occurred)"], ans: 1 },
    { q: "Which flag is used exclusively by BCD adjustment instructions (DAA, DAS)?", opts: ["CF", "ZF", "AF (Auxiliary Carry Flag)", "PF"], ans: 2 },
    { q: "How do you enable single-step debugging on the 8086?", opts: ["Execute the STEP instruction", "Set TF=1 via PUSHF, modify stack, POPF — then INT 1 fires after each instruction", "Set IF=1 and DF=1", "Write to the debug control register"], ans: 1 },
    { q: "CMP AX, BX sets CF=1. What does this mean?", opts: ["AX > BX (unsigned)", "AX < BX (unsigned) — a borrow was needed to subtract BX from AX", "AX = BX", "AX > BX (signed)"], ans: 1 }
  ],
  challenge: "Write a complete 8086 routine that implements a 'clamp' function: given a signed value in AX, a minimum in BX, and a maximum in CX, clamp AX to the range [BX, CX]. Use CMP and the correct signed conditional jumps (JL, JG). Then write a routine that takes an unsigned value in AX and prints whether it is zero, positive, or has the high bit set — using only TEST, JZ, and JS. Finally, explain why JA and JG give different results when comparing FFFFh with 0001h.",
  resources: [
    { type: "docs", title: "8086 Flags Register", url: "https://www.geeksforgeeks.org/flag-register-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "video", title: "Flags and Conditional Jumps Explained", url: "https://www.youtube.com/watch?v=ZEQ2bMDXRvo", source: "YouTube" },
    { type: "article", title: "Conditional Jump Instructions in 8086", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_8086_instruction_sets.htm", source: "TutorialsPoint" },
    { type: "docs", title: "x86 Flags Reference", url: "https://en.wikipedia.org/wiki/FLAGS_register", source: "Wikipedia" }
  ],
  eli5: "Flags are like little sticky notes the CPU leaves for itself after doing math. 'Hey, the answer was zero!' (ZF). 'Hey, there was too much to fit!' (CF). 'Hey, the answer is negative!' (SF). Then when the CPU reaches a fork in the road (a conditional jump), it checks its sticky notes to decide which way to go. IF is like a 'Do Not Disturb' sign — when IF=0, no one is allowed to interrupt the CPU.",
  codeWalkthrough: [
    "ADD AL, 100 with AL=200: unsigned result is 300, which overflows 8 bits. AL wraps to 44 (2Ch) and CF=1 signals the carry.",
    "SUB AX, 10 with AX=10: result is exactly 0, so ZF=1. This is the most common way to check for equality — CMP sets ZF=1 when operands are equal.",
    "SUB AX, 5 with AX=1: result is FFFCh (-4). The MSB is 1, so SF=1 indicating a negative result in signed interpretation.",
    "ADD AL, 50 with AL=100: unsigned result 150 fits in a byte (CF=0), but signed result 150 exceeds +127 (OF=1). The same operation can overflow in signed but not unsigned.",
    "CMP AX, BX with AX=-5 and BX=-10: the subtraction -5-(-10) = +5. Result is positive (SF=0) and no overflow (OF=0). Since SF=OF and ZF=0, JG is taken — correctly indicating -5 > -10.",
    "CMP AX, BX with AX=FFF0h and BX=0010h: unsigned subtraction FFF0h-0010h = FFE0h with no borrow (CF=0). Since CF=0 and ZF=0, JA is taken — correctly indicating 65520 > 16 unsigned.",
    "CLI/STI control the IF flag. CLI is used before critical sections where interrupts could cause race conditions. STI re-enables interrupts afterward.",
    "CLD/STD control the DF flag for string operations. Most code uses CLD (forward direction). The ABI convention requires DF=0 at function entry."
  ],
  bugChallenge: {
    code: `; Goal: Compare two signed numbers and jump to the
; correct label
MOV AX, 0FFF0h      ; AX = -16 (signed)
MOV BX, 0010h       ; BX = +16 (signed)
CMP AX, BX
JA ax_bigger         ; Jump if AX > BX
JMP ax_smaller
;
; Programmer expects: -16 < 16, should go to ax_smaller
; But program jumps to ax_bigger!`,
    hint: "JA is for unsigned comparisons. What unsigned value is FFF0h?",
    answer: "Bug: JA (Jump if Above) uses UNSIGNED comparison — it tests CF=0 AND ZF=0. In unsigned terms, FFF0h = 65520 and 0010h = 16, so 65520 > 16 and JA is taken. But the programmer intended a SIGNED comparison where FFF0h = -16 and -16 < +16. Fix: Use JG (Jump if Greater) for signed comparison instead of JA. JG tests ZF=0 AND SF=OF. After CMP -16, +16: the result is negative (SF=1) and no overflow (OF=0), so SF != OF, meaning JG is NOT taken — correctly indicating -16 is not greater than +16."
  },
  difficulty: "intermediate",
  prereqs: [22, 23]
},
// Lesson 25
{
  id: 25,
  title: "Jumps, Loops, and Conditional Branching",
  subtitle: "Make the 8086 decide, repeat, and branch — turning linear code into smart programs",
  analogy: "Jumps are like GPS rerouting. An unconditional jump (JMP) is a forced detour — you always take it. A conditional jump (JZ, JNZ) is like a traffic light: you only go if conditions are right. LOOP is like running laps — the coach (CX) counts down and you keep going until the count hits zero.",
  points: [
    { t: "JMP — Unconditional Jump", d: "JMP transfers control to a target label without checking any condition. It simply loads IP (and CS for far jumps) with the new address. Think of it as a GOTO — always taken, no questions asked.", code: "JMP start_loop   ; always jump to start_loop label\n; ... code here is skipped ...\nstart_loop:\n  MOV AX, 1      ; execution resumes here" },
    { t: "Short, Near, and Far Jumps", d: "Short jumps reach -128 to +127 bytes (1-byte displacement). Near jumps reach anywhere within the same segment (2-byte displacement). Far jumps cross segments, changing both CS and IP. The assembler usually picks the right type automatically.", code: "JMP SHORT next   ; 2 bytes: EB + 1-byte offset\nJMP NEAR  proc1  ; 3 bytes: E9 + 2-byte offset\nJMP FAR   other  ; 5 bytes: EA + offset + segment" },
    { t: "Conditional Jumps (Jcc)", d: "Conditional jumps check specific flags set by a previous CMP, SUB, TEST, or other flag-affecting instruction. If the condition is true, the jump is taken; otherwise execution falls through to the next instruction.", code: "CMP AX, 5       ; compare AX with 5 (sets flags)\nJE  equal_label  ; jump if ZF=1 (AX == 5)\nJNE not_equal    ; jump if ZF=0 (AX != 5)\nJG  greater      ; jump if AX > 5 (signed)\nJL  less         ; jump if AX < 5 (signed)" },
    { t: "Unsigned vs Signed Conditionals", d: "For unsigned comparisons use JA (above), JB (below), JAE, JBE. For signed comparisons use JG (greater), JL (less), JGE, JLE. Mixing them up is a classic bug — 0FFFFh is 'above' 0 unsigned but 'less than' 0 signed (-1).", code: "MOV AX, 0FFFFh\nCMP AX, 0\nJA  above_label  ; TAKEN: FFFFh > 0 unsigned\nJG  greater_lab  ; NOT taken: -1 < 0 signed" },
    { t: "Flag-Based Jumps", d: "Some jumps test individual flags directly: JZ/JNZ (Zero Flag), JC/JNC (Carry Flag), JS/JNS (Sign Flag), JO/JNO (Overflow Flag), JP/JNP (Parity Flag). These are useful after arithmetic or logical operations beyond just CMP.", code: "ADD AX, BX      ; add and update flags\nJC  overflow_h   ; jump if carry occurred\nJS  negative     ; jump if result is negative\nJZ  zero_result  ; jump if result is zero\nJO  signed_ovf   ; jump if signed overflow" },
    { t: "LOOP Instruction", d: "LOOP decrements CX by 1, then jumps to the target label if CX is not zero. It combines DEC CX + JNZ into one instruction. The target must be within -128 to +127 bytes (short jump range).", code: "MOV CX, 10       ; loop 10 times\nsum_loop:\n  ADD AX, CX      ; add current CX to AX\n  LOOP sum_loop   ; CX--, jump if CX != 0\n; AX now = 10+9+8+...+1 = 55" },
    { t: "LOOPZ and LOOPNZ", d: "LOOPZ (LOOPE) decrements CX and loops if CX != 0 AND ZF = 1. LOOPNZ (LOOPNE) decrements CX and loops if CX != 0 AND ZF = 0. These add a secondary condition on top of the counter check.", code: "MOV CX, 100      ; max 100 iterations\nMOV SI, 0\nsearch:\n  CMP array[SI], 0 ; check for zero element\n  INC SI\n  LOOPNZ search   ; keep going if not zero and CX>0\n; SI points past the first zero (or end)" },
    { t: "Building IF-ELSE with Jumps", d: "High-level if-else translates to CMP + conditional jump + else block + JMP over the if-block. The pattern is: compare, jump-if-not-condition to else, do if-body, JMP to end, else label, do else-body, end label.", code: "; if (AX > BX) then CX=1 else CX=0\nCMP AX, BX\nJLE else_part    ; if NOT greater, go to else\n  MOV CX, 1      ; if-body\n  JMP end_if\nelse_part:\n  MOV CX, 0      ; else-body\nend_if:" },
    { t: "Building WHILE Loops", d: "A while loop checks the condition at the top. If false, it jumps past the body. At the bottom, an unconditional JMP goes back to the condition check. This naturally handles the case where the body never executes.", code: "; while (AX < 100)\nwhile_start:\n  CMP AX, 100\n  JGE while_end   ; exit if AX >= 100\n  ADD AX, 5       ; loop body\n  JMP while_start ; go back to check\nwhile_end:" },
    { t: "Building DO-WHILE Loops", d: "A do-while loop executes the body first, then checks the condition at the bottom. This guarantees at least one iteration. It is simpler than while because it only needs a conditional jump at the end.", code: "; do { AX += 5 } while (AX < 100)\ndo_start:\n  ADD AX, 5       ; body runs at least once\n  CMP AX, 100\n  JL  do_start    ; loop back if AX < 100" },
    { t: "JCXZ — Jump if CX is Zero", d: "JCXZ jumps if CX equals zero WITHOUT modifying CX. Useful as a guard before a LOOP to prevent executing the loop body when the count is already zero (since LOOP decrements first, CX=0 would wrap to FFFFh and loop 65535 times).", code: "MOV CX, [count]   ; count could be 0\nJCXZ skip_loop    ; safety: skip if CX=0\nprocess:\n  ; ... do work ...\n  LOOP process\nskip_loop:" }
  ],
  whatIs: "Jumps and loops give the 8086 the ability to make decisions and repeat actions. JMP is an unconditional transfer of control. Conditional jumps (Jcc) test CPU flags set by CMP, SUB, or TEST to decide whether to branch. LOOP provides a counter-based repeat mechanism using CX. Together, these instructions implement if-else, while, do-while, and for loops in assembly.",
  realWorld: "Every program beyond a trivial calculator needs branching. A keyboard input handler uses conditional jumps to dispatch different key codes. A display driver loops through pixel buffers. An embedded sensor system uses LOOP to average multiple readings. Even boot loaders branch on hardware detection results.",
  code: `; Program: Sum numbers 1 to N where N is in BX
; Result stored in AX
.MODEL SMALL
.STACK 100h
.DATA
  N DW 10          ; sum 1 to 10

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

  MOV CX, [N]      ; CX = N = loop counter
  XOR AX, AX       ; AX = 0 (accumulator)
  JCXZ done        ; guard: skip if N=0

sum_loop:
  ADD AX, CX       ; AX += CX (adds N, N-1, ..., 1)
  LOOP sum_loop    ; CX--, repeat if CX != 0

done:
  ; AX now holds sum = 55 for N=10
  MOV AH, 4Ch
  INT 21h          ; exit to DOS
MAIN ENDP
END MAIN`,
  funFact: "Conditional jumps on the original 8086 could only reach -128 to +127 bytes. If your branch target was farther away, you had to use the 'reverse-and-jump-over-a-JMP' trick: reverse the condition to skip over an unconditional JMP to the real target. The 386 finally added near conditional jumps.",
  quiz: [
    { q: "What does the LOOP instruction do internally?", opts: ["Increments CX, jumps if CX > 0", "Decrements CX, jumps if CX != 0", "Tests ZF and jumps if set", "Compares CX with 0 and sets flags"], ans: 1 },
    { q: "Which conditional jump should you use after CMP AX, BX to branch when AX is greater (signed comparison)?", opts: ["JA", "JG", "JB", "JE"], ans: 1 },
    { q: "Why is JCXZ important before a LOOP instruction?", opts: ["LOOP requires CX to be even", "If CX is 0, LOOP decrements to FFFFh and loops 65535 times", "JCXZ sets the direction flag for LOOP", "LOOP cannot modify CX on its own"], ans: 1 },
    { q: "What is the displacement range of a SHORT jump?", opts: ["-128 to +127 bytes", "-256 to +255 bytes", "-32768 to +32767 bytes", "0 to 65535 bytes"], ans: 0 },
    { q: "After CMP AX, BX, which flag distinguishes JA (unsigned above) from JG (signed greater)?", opts: ["JA checks CF and ZF; JG checks SF, OF, and ZF", "They check the same flags", "JA checks OF; JG checks CF", "JA checks ZF only; JG checks SF only"], ans: 0 }
  ],
  challenge: "Write an 8086 assembly program that counts how many elements in a byte array are greater than 50. Store the array at DATA segment with values [30, 75, 12, 88, 45, 99, 50, 51]. Use LOOP and conditional jumps. Store the result count in DL.",
  resources: [
    { type: "article", title: "8086 Jump Instructions Reference", url: "https://www.geeksforgeeks.org/jump-instructions-in-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "article", title: "Conditional Jumps and Flags", url: "https://en.wikibooks.org/wiki/X86_Assembly/Control_Flow", source: "Wikibooks" },
    { type: "video", title: "Loops and Branching in 8086", url: "https://www.youtube.com/watch?v=5eVMIjNSbIA", source: "YouTube" },
    { type: "tool", title: "emu8086 Microprocessor Emulator", url: "https://emu8086-microprocessor-emulator.en.softonic.com/", source: "Softonic" }
  ],
  eli5: "Imagine you are reading a choose-your-own-adventure book. Normally you read page after page (sequential execution). But sometimes the book says 'Jump to page 42' — that is JMP. Other times it says 'If you have the magic sword, go to page 60; otherwise go to page 70' — that is a conditional jump. And sometimes it says 'Re-read this page 5 times' — that is LOOP with CX set to 5.",
  codeWalkthrough: [
    "MOV AX, @DATA / MOV DS, AX — standard setup: point DS to our data segment so we can read variables",
    "MOV CX, [N] — load the value of N (10) into CX, which will serve as both our loop counter and the current number to add",
    "XOR AX, AX — zero out AX (faster than MOV AX, 0). AX is our running sum accumulator",
    "JCXZ done — safety check: if N was 0, skip the entire loop. Without this, LOOP would decrement CX to FFFFh and run 65535 iterations",
    "ADD AX, CX — add the current value of CX to our sum. First iteration adds 10, second adds 9, and so on",
    "LOOP sum_loop — decrement CX by 1. If CX is not zero, jump back to sum_loop. If CX reached 0, fall through",
    "After the loop: AX = 10+9+8+7+6+5+4+3+2+1 = 55",
    "MOV AH, 4Ch / INT 21h — standard DOS exit: terminate the program and return control to DOS"
  ],
  bugChallenge: {
    code: "MOV CX, 5\nMOV AX, 0\ncount_loop:\n  ADD AX, 2\n  CMP AX, 20\n  LOOP count_loop\n; Expected: AX = 10 (5 iterations of adding 2)",
    hint: "Think about what happens if AX reaches 20 before CX reaches 0. Does CMP affect LOOP's behavior?",
    answer: "There is no bug in the logic — LOOP only checks CX, ignoring flags from CMP. The CMP is a dead instruction here with no conditional jump following it. AX will correctly be 10. But if the programmer intended to stop early when AX >= 20, they need a conditional jump: replace LOOP with DEC CX / JZ done / CMP AX, 20 / JL count_loop."
  },
  difficulty: "intermediate",
  prereqs: [24]
},
// Lesson 26
{
  id: 26,
  title: "Procedures, CALL, RET, and Modular Thinking",
  subtitle: "Break programs into reusable procedures — the assembly version of functions",
  analogy: "A procedure is like a restaurant kitchen. The waiter (CALL) sends an order slip and remembers table 7 (return address pushed to stack). The kitchen does its work (procedure body). When the food is ready, the waiter picks it up and returns to table 7 (RET pops the return address). Nested calls are like the kitchen calling the dessert station — everyone remembers where to return.",
  points: [
    { t: "Why Procedures Matter", d: "Without procedures, you would copy-paste the same code everywhere. Procedures let you write a block of code once and CALL it from many places. This reduces program size, makes debugging easier, and mirrors how high-level languages use functions.", code: "; Without procedures — duplicated code\nADD AX, BX      ; add routine copy 1\nADC DX, CX\n; ... 50 lines later ...\nADD AX, BX      ; add routine copy 2 (bug-prone)\nADC DX, CX" },
    { t: "PROC and ENDP Directives", d: "PROC and ENDP are assembler directives that mark the beginning and end of a procedure. They help the assembler and the programmer identify procedure boundaries. PROC can specify NEAR (same segment) or FAR (cross-segment).", code: "multiply PROC NEAR\n  ; procedure body\n  MUL BX          ; AX = AX * BX\n  RET\nmultiply ENDP" },
    { t: "CALL Instruction — Near", d: "CALL pushes the IP of the next instruction onto the stack, then loads IP with the procedure's address. This saves the return address so RET can come back. For a near CALL, only IP (2 bytes) is pushed.", code: "MOV AX, 5\nMOV BX, 3\nCALL multiply    ; push IP, jump to multiply\n; returns here with AX = 15\nMOV [result], AX" },
    { t: "CALL Instruction — Far", d: "A far CALL pushes both CS and IP onto the stack (4 bytes total), then loads both CS:IP with the target address. Used when calling a procedure in a different code segment. Requires a matching far RET (RETF).", code: "CALL FAR PTR other_seg_proc\n; pushes CS then IP onto stack\n; loads new CS:IP from the target\n; on return, RETF pops IP then CS" },
    { t: "RET Instruction", d: "RET pops the saved IP (for near) or CS:IP (for far) from the stack back into the instruction pointer, resuming execution at the instruction after the CALL. RET n pops n additional bytes to clean up parameters pushed before the call.", code: "add_nums PROC NEAR\n  MOV BP, SP\n  MOV AX, [BP+2]  ; first param\n  ADD AX, [BP+4]  ; second param\n  RET 4            ; return and pop 4 bytes of params\nadd_nums ENDP" },
    { t: "Parameter Passing via Registers", d: "The simplest way to pass data to a procedure: load values into agreed-upon registers before CALL, and read the result from a specific register after RET. Fast but limited by the number of registers available.", code: "; Convention: input in AX, BX; output in AX\nMOV AX, 10       ; first argument\nMOV BX, 20       ; second argument\nCALL add_proc    ; AX = 30 on return\n\nadd_proc PROC NEAR\n  ADD AX, BX\n  RET\nadd_proc ENDP" },
    { t: "Parameter Passing via Stack", d: "For more parameters, push values onto the stack before CALL. Inside the procedure, use BP to access them. The caller or procedure must clean the stack afterward. This is how C and Pascal calling conventions work.", code: "PUSH 20          ; second arg (higher address)\nPUSH 10          ; first arg (lower address)\nCALL add_stack   ; pushes return IP\n; stack cleaned by RET 4\n\nadd_stack PROC NEAR\n  PUSH BP\n  MOV BP, SP\n  MOV AX, [BP+4]  ; first arg (10)\n  ADD AX, [BP+6]  ; second arg (20)\n  POP BP\n  RET 4            ; pop 4 bytes of args\nadd_stack ENDP" },
    { t: "Stack Frame and BP", d: "A stack frame is the region of the stack owned by a procedure. BP (Base Pointer) anchors the frame. The standard prologue is PUSH BP / MOV BP, SP. Parameters are at positive offsets from BP, local variables at negative offsets.", code: "; Stack layout after prologue:\n; [BP+6] = second parameter\n; [BP+4] = first parameter\n; [BP+2] = return address (IP)\n; [BP+0] = saved old BP  <-- BP points here\n; [BP-2] = local variable 1" },
    { t: "Preserving Registers", d: "A well-written procedure saves any registers it modifies (except those used for return values) and restores them before RET. This prevents the caller's register values from being destroyed unexpectedly.", code: "swap_proc PROC NEAR\n  PUSH AX          ; save registers\n  PUSH BX\n  ; ... do work ...\n  POP BX           ; restore in reverse order\n  POP AX\n  RET\nswap_proc ENDP" },
    { t: "Nested Procedure Calls", d: "Procedures can call other procedures. Each CALL pushes a return address, and each RET pops one. The stack grows with each nesting level and shrinks as procedures return. This naturally supports recursion too.", code: "main_proc PROC\n  CALL helper_a    ; pushes IP\n  RET\nmain_proc ENDP\n\nhelper_a PROC\n  CALL helper_b    ; pushes another IP\n  RET              ; returns to main_proc\nhelper_a ENDP\n\nhelper_b PROC\n  RET              ; returns to helper_a\nhelper_b ENDP" }
  ],
  whatIs: "Procedures (subroutines) are reusable blocks of 8086 code defined with PROC/ENDP and invoked with CALL, which pushes the return address onto the stack. RET pops the return address to resume the caller. Parameters can be passed via registers or the stack. BP-based stack frames provide structured access to parameters and local variables, enabling modular, maintainable assembly programs.",
  realWorld: "Every operating system, BIOS routine, and DOS service is implemented as a procedure. When you call INT 21h, the interrupt handler itself calls internal procedures. Device drivers organize hardware access into callable routines. Even your boot loader calls procedures to read disk sectors and set up memory.",
  code: `; Program: Compute factorial of N using a procedure
.MODEL SMALL
.STACK 100h
.DATA
  N  DW 5
  res DW ?

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

  MOV AX, [N]      ; AX = 5
  CALL factorial    ; AX = 5! = 120
  MOV [res], AX

  MOV AH, 4Ch
  INT 21h
MAIN ENDP

; Procedure: factorial
; Input:  AX = n (unsigned, n >= 0)
; Output: AX = n!
; Uses recursive calls via stack
factorial PROC NEAR
  CMP AX, 1
  JLE base_case     ; if n <= 1, return 1

  PUSH AX           ; save current n
  DEC AX            ; AX = n - 1
  CALL factorial    ; AX = (n-1)!
  POP BX            ; BX = saved n
  MUL BX            ; AX = n * (n-1)!
  RET

base_case:
  MOV AX, 1         ; 0! = 1! = 1
  RET
factorial ENDP
END MAIN`,
  funFact: "The x86 CALL instruction has barely changed since the 8086. Modern 64-bit processors still push a return address and jump, though now they also use a hidden Return Address Stack (RAS) predictor to guess where RET will go before actually reading the stack — achieving near-zero-cycle return overhead.",
  quiz: [
    { q: "What does a near CALL instruction push onto the stack?", opts: ["Only the flags register", "The IP of the next instruction", "Both CS and IP", "The contents of AX"], ans: 1 },
    { q: "What is the purpose of PUSH BP / MOV BP, SP at the start of a procedure?", opts: ["It clears the stack for new data", "It establishes a stack frame so parameters and locals have fixed offsets from BP", "It saves the return address", "It sets up segment registers"], ans: 1 },
    { q: "RET 4 does what?", opts: ["Returns and adds 4 to AX", "Pops the return address and then removes 4 additional bytes from the stack", "Jumps to address 4", "Returns after a 4-cycle delay"], ans: 1 },
    { q: "In the standard stack frame, where is the first parameter relative to BP (near CALL)?", opts: ["[BP-2]", "[BP+0]", "[BP+2]", "[BP+4]"], ans: 3 },
    { q: "Why must POP instructions appear in reverse order of their corresponding PUSHes?", opts: ["The assembler requires alphabetical register order", "The stack is LIFO — last pushed is first popped", "Reverse order is faster on the 8086", "It is optional but conventional"], ans: 1 }
  ],
  challenge: "Write two procedures: (1) max_of_two that takes two values in AX and BX and returns the larger in AX, and (2) max_of_three that calls max_of_two twice to find the maximum of three values passed in AX, BX, CX. Test with values 15, 42, 27.",
  resources: [
    { type: "article", title: "8086 Procedures and CALL/RET", url: "https://www.geeksforgeeks.org/call-and-ret-instructions-in-8086/", source: "GeeksforGeeks" },
    { type: "article", title: "x86 Calling Conventions", url: "https://en.wikipedia.org/wiki/X86_calling_conventions", source: "Wikipedia" },
    { type: "video", title: "Assembly Procedures Explained", url: "https://www.youtube.com/watch?v=2VF_wPkiBJY", source: "YouTube" },
    { type: "article", title: "Stack Frames in Assembly", url: "https://en.wikibooks.org/wiki/X86_Assembly/GAS_Syntax#Function_Calls", source: "Wikibooks" }
  ],
  eli5: "Imagine you are doing homework (main program). Your mom calls you downstairs for dinner (CALL). You put a bookmark in your textbook (push return address) and go eat (execute procedure). When dinner is done (RET), you go back to your room and find your bookmark — you continue exactly where you left off. If during dinner, dad asks you to grab something from the garage (nested CALL), you remember to come back to dinner first, then back to homework.",
  codeWalkthrough: [
    "MOV AX, [N] — load the value 5 into AX as the input to our factorial procedure",
    "CALL factorial — push the address of the next instruction (MOV [res], AX) onto the stack, then jump to the factorial label",
    "CMP AX, 1 / JLE base_case — check if we have reached the base case (n <= 1). If so, return 1",
    "PUSH AX — save the current value of n on the stack before we modify AX for the recursive call",
    "DEC AX — AX becomes n-1, preparing for the recursive call to compute (n-1)!",
    "CALL factorial — recursive call. This pushes another return address and re-enters the procedure with a smaller n",
    "POP BX — after the recursive call returns, BX gets the saved n, and AX already contains (n-1)!",
    "MUL BX — AX = AX * BX = (n-1)! * n = n!. The result is in AX for the caller",
    "RET — pop the return address from the stack and resume at the caller. Each nested call returns to its own caller"
  ],
  bugChallenge: {
    code: "my_proc PROC NEAR\n  PUSH AX\n  PUSH BX\n  MOV AX, [BP+4]\n  ADD AX, [BP+6]\n  POP AX\n  POP BX\n  RET\nmy_proc ENDP",
    hint: "Look at the procedure prologue — is BP set up correctly? Also check the POP order.",
    answer: "Two bugs: (1) BP is never set up — missing PUSH BP / MOV BP, SP, so [BP+4] and [BP+6] reference the wrong stack locations. (2) POP AX / POP BX is in the wrong order — it should be POP BX / POP AX to reverse the PUSH order. Also, POP AX destroys the computed result."
  },
  difficulty: "intermediate",
  prereqs: [25]
},
// Lesson 27
{
  id: 27,
  title: "String Instructions and REP Prefix",
  subtitle: "Process arrays and strings at hardware speed with the 8086's built-in bulk operations",
  analogy: "String instructions are like a factory conveyor belt. The items (bytes/words) move past a workstation one at a time. MOVSB is a worker who picks an item from one belt (DS:SI) and places it on another (ES:DI). REP is the foreman who keeps the belt running until all items are processed (CX reaches 0). The Direction Flag determines whether the belt moves forward or backward.",
  points: [
    { t: "String Instruction Basics", d: "The 8086 has five core string operations: MOVS (move), CMPS (compare), SCAS (scan/search), LODS (load), STOS (store). Each has byte (B suffix) and word (W suffix) variants. They all auto-increment or auto-decrement SI and/or DI after each operation.", code: "; The five string instructions:\nMOVSB  ; move byte DS:[SI] -> ES:[DI]\nCMPSB  ; compare DS:[SI] with ES:[DI]\nSCASB  ; compare AL with ES:[DI]\nLODSB  ; load DS:[SI] into AL\nSTOSB  ; store AL into ES:[DI]" },
    { t: "Direction Flag (DF)", d: "DF controls whether SI and DI auto-increment (DF=0, forward) or auto-decrement (DF=1, backward). CLD clears DF for forward processing. STD sets DF for backward processing. Always set DF explicitly before string operations.", code: "CLD              ; DF=0: SI and DI increment\n                 ; (process left to right)\nSTD              ; DF=1: SI and DI decrement\n                 ; (process right to left)" },
    { t: "MOVSB / MOVSW — Block Copy", d: "MOVSB copies one byte from DS:SI to ES:DI, then adjusts SI and DI by 1. MOVSW copies a word (2 bytes) and adjusts by 2. Combined with REP, this copies entire memory blocks in a single instruction.", code: "; Copy 100 bytes from src to dst\nLEA SI, src      ; DS:SI = source\nLEA DI, dst      ; ES:DI = destination\nMOV CX, 100      ; 100 bytes to copy\nCLD              ; forward direction\nREP MOVSB        ; copy all 100 bytes" },
    { t: "STOSB / STOSW — Fill Memory", d: "STOSB stores AL into ES:DI, then adjusts DI. STOSW stores AX. With REP, this fills a block of memory with a value — equivalent to memset() in C.", code: "; Fill 50 bytes with zero\nLEA DI, buffer   ; ES:DI = buffer\nMOV CX, 50       ; 50 bytes\nMOV AL, 0        ; fill value\nCLD\nREP STOSB        ; buffer is now all zeros" },
    { t: "LODSB / LODSW — Stream Load", d: "LODSB loads the byte at DS:SI into AL and adjusts SI. LODSW loads a word into AX. Typically used WITHOUT REP inside a manual loop, so you can process each loaded element before moving to the next.", code: "; Sum all bytes in an array\nLEA SI, array    ; DS:SI = start\nMOV CX, 10       ; 10 elements\nXOR AX, AX       ; sum = 0\nCLD\nsum_loop:\n  LODSB           ; AL = next byte, SI++\n  ADD AH, AL      ; accumulate in AH\n  LOOP sum_loop" },
    { t: "CMPSB / CMPSW — Block Compare", d: "CMPSB compares byte at DS:SI with byte at ES:DI (like CMP), updates flags, then adjusts both SI and DI. With REPE, it continues while bytes are equal — stops at the first mismatch. Implements strcmp-like behavior.", code: "; Compare two strings (max 20 bytes)\nLEA SI, str1     ; DS:SI = string 1\nLEA DI, str2     ; ES:DI = string 2\nMOV CX, 20       ; max length\nCLD\nREPE CMPSB       ; compare while equal\nJE  strings_equal\n; SI/DI point past the mismatch" },
    { t: "SCASB / SCASW — Search", d: "SCASB compares AL with the byte at ES:DI, updates flags, then adjusts DI. With REPNE, it scans until a match is found — implementing strchr-like behavior. CX limits the search range.", code: "; Find '$' in a buffer\nLEA DI, buffer   ; ES:DI = buffer\nMOV CX, 256      ; max search length\nMOV AL, '$'      ; byte to find\nCLD\nREPNE SCASB      ; scan until AL == [DI]\nJE  found_it     ; ZF=1 means found\n; DI points one past the match" },
    { t: "REP Prefix", d: "REP repeats the string instruction CX times, decrementing CX each iteration. Stops when CX reaches 0. Used with MOVS and STOS. The CPU executes REP-prefixed instructions entirely in hardware — much faster than a software loop.", code: "MOV CX, 1000\nREP MOVSB        ; copies 1000 bytes\n; equivalent to 1000 iterations of:\n;   MOV AL, [SI]\n;   MOV [DI], AL\n;   INC SI\n;   INC DI\n;   DEC CX\n; but much faster" },
    { t: "REPE/REPZ and REPNE/REPNZ", d: "REPE (repeat while equal) continues while CX != 0 AND ZF = 1. REPNE (repeat while not equal) continues while CX != 0 AND ZF = 0. Used with CMPS and SCAS to add a condition beyond just the counter.", code: "; REPE CMPSB: stop at first mismatch\n; (continues while ZF=1 and CX>0)\n\n; REPNE SCASB: stop at first match\n; (continues while ZF=0 and CX>0)" },
    { t: "Segment Overrides with Strings", d: "By default, the source uses DS:SI and the destination uses ES:DI. You typically need to set up ES to match DS (or to another segment). The source can use a segment override prefix, but the destination is always ES:DI.", code: "; Set ES = DS for same-segment operations\nMOV AX, @DATA\nMOV DS, AX\nMOV ES, AX       ; ES = DS\n; Now both source and dest are in DATA seg\nLEA SI, source\nLEA DI, dest\nREP MOVSB" }
  ],
  whatIs: "String instructions are a set of 8086 operations (MOVS, CMPS, SCAS, LODS, STOS) designed for efficient bulk processing of byte or word arrays. They automatically update SI and/or DI pointers based on the Direction Flag. Combined with REP/REPE/REPNE prefixes, they execute repeated operations entirely in hardware, providing high-speed memory copy, fill, compare, and search without explicit loop code.",
  realWorld: "String instructions power the inner loops of operating systems. DOS uses REP MOVSB to copy file buffers, REP STOSB to zero memory during allocation, and REPNE SCASB to find string terminators. BIOS uses them to scroll the video buffer. Any time you need memcpy, memset, strcmp, or strchr in assembly, string instructions are the tool.",
  code: `; Program: Copy a string then find a character in it
.MODEL SMALL
.STACK 100h
.DATA
  src  DB 'Hello, 8086 World!', 0
  dest DB 20 DUP(0)
  pos  DW ?

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX
  MOV ES, AX         ; ES = DS (same segment)

  ; --- Part 1: Copy string ---
  LEA SI, src
  LEA DI, dest
  MOV CX, 19          ; 18 chars + null
  CLD                  ; forward direction
  REP MOVSB            ; copy src -> dest

  ; --- Part 2: Find '8' in dest ---
  LEA DI, dest
  MOV CX, 19
  MOV AL, '8'          ; search for '8'
  CLD
  REPNE SCASB          ; scan until match
  JNE not_found

  ; DI points one past '8', so subtract to get position
  LEA AX, dest
  SUB DI, AX
  DEC DI               ; DI = zero-based position
  MOV [pos], DI        ; pos = 7

not_found:
  MOV AH, 4Ch
  INT 21h
MAIN ENDP
END MAIN`,
  funFact: "On the original 8086, REP MOVSB was only slightly faster than an equivalent manual loop. But on later x86 processors (especially from the Pentium onward), the microcode for REP MOVS was heavily optimized — modern CPUs can use 256-bit wide internal transfers, making REP MOVSB as fast as hand-tuned SIMD code. Intel even added the ERMS (Enhanced REP MOVSB) feature flag in Ivy Bridge.",
  quiz: [
    { q: "What does CLD do and why is it important before string instructions?", opts: ["Clears the Direction Flag so SI/DI auto-increment (forward processing)", "Clears all flags for a fresh start", "Closes the data segment", "Clears the destination buffer"], ans: 0 },
    { q: "Which string instruction would you use to implement memset (fill memory with a value)?", opts: ["REP MOVSB", "REP STOSB", "REP LODSB", "REP CMPSB"], ans: 1 },
    { q: "What does REPNE SCASB do?", opts: ["Repeats scan while AL != ES:[DI] and CX != 0", "Repeats scan while AL == ES:[DI] and CX != 0", "Moves bytes while they are not equal", "Compares two strings character by character"], ans: 0 },
    { q: "After REPNE SCASB finds a match, where does DI point?", opts: ["At the matching byte", "One byte past the matching byte", "At the beginning of the buffer", "At the last byte of the buffer"], ans: 1 },
    { q: "Why is LODSB typically NOT used with REP?", opts: ["It would overwrite AL each iteration, losing previous values — you need a manual loop to process each loaded byte", "LODSB is incompatible with REP", "REP LODSB causes a processor exception", "LODSB does not modify any index register"], ans: 0 }
  ],
  challenge: "Write an 8086 program that: (1) defines two strings, (2) uses REPE CMPSB to compare them, (3) if they differ, uses SCASB to find the first occurrence of the differing character in the first string, and (4) stores the mismatch position in a variable. Test with 'ASSEMBLY' and 'ASSEMBLE!'.",
  resources: [
    { type: "article", title: "8086 String Instructions", url: "https://www.geeksforgeeks.org/string-instructions-in-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "article", title: "REP/REPE/REPNE Prefixes", url: "https://en.wikipedia.org/wiki/X86_instruction_listings#Original_8086/8088_instructions", source: "Wikipedia" },
    { type: "video", title: "String Operations in 8086", url: "https://www.youtube.com/watch?v=JjBh5FqWxos", source: "YouTube" },
    { type: "article", title: "x86 String Instructions Deep Dive", url: "https://www.plantation-productions.com/Webster/www.artofasm.com/DOS/ch14/CH14-2.html", source: "Art of Assembly" }
  ],
  eli5: "Imagine you have two long lines of toy blocks (arrays). MOVSB is like picking up one block from the left line and placing it in the right line, then stepping forward to the next block. REP is like telling a robot to keep doing this until all blocks are moved. SCASB is like looking at each block in a line and checking if it is the special red one you want. CMPSB is like comparing two lines block by block to see if they are identical.",
  codeWalkthrough: [
    "MOV ES, AX — set ES equal to DS because string destinations always use ES:DI",
    "LEA SI, src / LEA DI, dest — load effective addresses of source and destination strings into the index registers",
    "MOV CX, 19 — set the repeat counter to 19 (18 characters plus the null terminator)",
    "CLD — clear Direction Flag so string operations move forward (incrementing SI and DI)",
    "REP MOVSB — copies 19 bytes from DS:SI to ES:DI. Each iteration: copy byte, increment SI, increment DI, decrement CX",
    "LEA DI, dest — reset DI to the start of dest for the search operation",
    "MOV AL, '8' — load the character we want to find into AL (SCASB always compares with AL)",
    "REPNE SCASB — scan through dest comparing each byte with AL. Stops when a match is found (ZF=1) or CX reaches 0",
    "JNE not_found — if ZF=0 after REPNE SCASB, the character was not found in the buffer",
    "SUB DI, AX / DEC DI — calculate the zero-based position. DI points one past the match, so we subtract the base address and then subtract 1"
  ],
  bugChallenge: {
    code: "LEA SI, src\nLEA DI, dst\nMOV CX, 50\nREP MOVSB",
    hint: "What is the Direction Flag set to? And is ES configured?",
    answer: "Two bugs: (1) DF is not explicitly set — if a previous routine left DF=1, MOVSB will go backward through memory, corrupting data. Add CLD before REP MOVSB. (2) ES may not point to the correct segment. Add MOV AX, @DATA / MOV ES, AX (or equivalent) to ensure ES:DI is valid."
  },
  difficulty: "intermediate",
  prereqs: [26]
},
// Lesson 28
{
  id: 28,
  title: "Assembler Directives, Labels, and Macros",
  subtitle: "Control how the assembler builds your program — directives are instructions to the tool, not the CPU",
  analogy: "Assembler directives are like stage directions in a theater script. The actors (CPU) never see them — they only follow dialogue and actions (instructions). But the director (assembler) uses stage directions to set the scene (ORG), assign roles (SEGMENT), place props (DB, DW), and create shortcuts (MACRO). Without stage directions, actors would not know where to stand.",
  points: [
    { t: "Directives vs Instructions", d: "Instructions (MOV, ADD, JMP) generate machine code that the CPU executes. Directives (DB, DW, SEGMENT, ORG, EQU, MACRO) are commands to the assembler — they control memory layout, define data, and organize the program. Directives produce no executable code themselves.", code: "MOV AX, 5       ; INSTRUCTION: generates B8 05 00\ncount EQU 5     ; DIRECTIVE: no code generated\n                ; 'count' becomes alias for 5\ndata1 DB 10     ; DIRECTIVE: reserves 1 byte = 0Ah" },
    { t: "DB, DW, DD — Data Definition", d: "DB (Define Byte) allocates 1-byte values. DW (Define Word) allocates 2-byte values (stored little-endian). DD (Define Doubleword) allocates 4-byte values. These directives can define single values, lists, strings, or repeated patterns.", code: "msg   DB 'Hello$'      ; 6 bytes: H,e,l,l,o,$\nvals  DB 10, 20, 30     ; 3 bytes\nwords DW 1234h, 5678h   ; 4 bytes (little-endian)\nbuf   DB 100 DUP(0)     ; 100 bytes, all zero\ntable DW 10 DUP(?)      ; 20 bytes, uninitialized" },
    { t: "EQU — Named Constants", d: "EQU assigns a name to a constant value at assembly time. Unlike DB/DW, no memory is allocated. The assembler substitutes the value wherever the name appears. EQU values cannot be changed once defined.", code: "MAX_SIZE EQU 100\nNEWLINE  EQU 0Ah\nCR       EQU 0Dh\nDOS_EXIT EQU 4C00h\n\nMOV CX, MAX_SIZE   ; assembles as MOV CX, 100\nMOV AX, DOS_EXIT   ; assembles as MOV AX, 4C00h" },
    { t: "ORG — Origin Directive", d: "ORG sets the location counter, telling the assembler where the next instruction or data should be placed in memory. In COM programs, ORG 100h accounts for the 256-byte PSP (Program Segment Prefix) that DOS places before the code.", code: "ORG 100h         ; start code at offset 100h\n                  ; (standard for .COM programs)\nstart:\n  MOV AH, 09h\n  LEA DX, msg\n  INT 21h\n  INT 20h        ; exit .COM program\nmsg DB 'Hello$'" },
    { t: "SEGMENT / ENDS", d: "SEGMENT and ENDS define logical segments of a program. In the simplified .MODEL/.CODE/.DATA style, these are implicit. In full segment definitions, you explicitly name and configure segments with alignment, combine type, and class.", code: "; Full segment definition\nDATA_SEG SEGMENT PARA 'DATA'\n  msg DB 'Hello$'\nDATA_SEG ENDS\n\nCODE_SEG SEGMENT PARA 'CODE'\n  ASSUME CS:CODE_SEG, DS:DATA_SEG\n  ; ... code here ...\nCODE_SEG ENDS" },
    { t: "ASSUME Directive", d: "ASSUME tells the assembler which segment register corresponds to which segment. This lets the assembler generate correct segment override prefixes when needed. It does NOT actually load the segment registers — you must do that with MOV.", code: "ASSUME CS:CODE_SEG, DS:DATA_SEG, SS:STACK_SEG\n; Now the assembler knows:\n; CS -> CODE_SEG (automatic for code)\n; DS -> DATA_SEG (you must load DS manually)\n\nMOV AX, DATA_SEG\nMOV DS, AX         ; actually load DS" },
    { t: "Labels and Their Types", d: "Labels mark locations in code or data. A code label followed by a colon (loop_start:) marks an instruction address. A data label before DB/DW marks a data address. Labels can be NEAR (same segment offset) or FAR (segment:offset).", code: "counter DW 0       ; data label — address of a word\n\nstart:             ; code label (near by default)\n  INC [counter]\n  CMP [counter], 10\n  JL  start        ; jump to code label\n\nfar_label LABEL FAR  ; explicit far label" },
    { t: "PROC / ENDP", d: "PROC defines a procedure (subroutine) with an optional NEAR or FAR attribute. ENDP marks its end. The assembler uses the attribute to determine whether CALL/RET should be near or far. This is both a directive and an organizational tool.", code: "add_nums PROC NEAR  ; near procedure\n  ADD AX, BX\n  RET                ; near return\nadd_nums ENDP\n\nfar_proc PROC FAR   ; far procedure\n  ; ... code ...\n  RET                ; far return (RETF)\nfar_proc ENDP" },
    { t: "MACRO / ENDM", d: "MACRO defines a reusable code template that the assembler expands inline at each call site. Unlike PROC, a macro does not use CALL/RET — the code is copied. Macros can accept parameters and generate different code each time.", code: "print_char MACRO ch\n  MOV AH, 02h\n  MOV DL, ch\n  INT 21h\nENDM\n\n; Usage — expands inline:\nprint_char 'A'    ; prints A\nprint_char 'B'    ; prints B\n; Each expands to 3 instructions" },
    { t: "Macro vs Procedure Trade-offs", d: "Macros are faster (no CALL/RET overhead) but increase code size because they are expanded at every use. Procedures save code size but have CALL/RET overhead. Use macros for small, frequently used snippets. Use procedures for larger reusable blocks.", code: "; MACRO: 3 instructions copied each time\nprint_char MACRO ch\n  MOV AH, 02h\n  MOV DL, ch\n  INT 21h\nENDM\n; 10 uses = 30 instructions in binary\n\n; PROC: 3 instructions + 1 RET, called each time\nprint_char_proc PROC NEAR\n  MOV AH, 02h\n  INT 21h\n  RET\nprint_char_proc ENDP\n; 10 uses = 4 + 10 CALL = 14 instructions" },
    { t: "DUP Operator and Nested DUP", d: "DUP repeats a value a specified number of times within DB, DW, or DD. It can be nested for multi-dimensional initialization. The ? in DUP means uninitialized (assembler reserves space but does not write a value).", code: "zeros  DB 256 DUP(0)     ; 256 zero bytes\nbuffer DW 50 DUP(?)      ; 50 uninitialized words\nmatrix DB 3 DUP(4 DUP(0)); 3 rows x 4 cols of zeros\n                          ; = 12 bytes, all zero" }
  ],
  whatIs: "Assembler directives are commands that control the assembler tool itself rather than generating CPU instructions. They define data (DB, DW, DD), create constants (EQU), set memory origins (ORG), organize segments (SEGMENT/ENDS, ASSUME), name procedures (PROC/ENDP), and create code templates (MACRO/ENDM). Labels mark locations in code and data for reference by instructions and other directives.",
  realWorld: "Every real assembly program uses directives extensively. BIOS source code uses SEGMENT directives to map ROM regions. DOS programs use ORG 100h for COM files. Kernel bootloaders define data structures with DB/DW. Device driver developers use MACROs to wrap port I/O patterns. EQU constants name hardware register addresses for readability.",
  code: `; Program: Demonstrate key directives and macros
; Uses: DB, DW, EQU, MACRO, PROC, labels

; --- Macro Definitions ---
print_str MACRO string_addr
  LEA DX, string_addr
  MOV AH, 09h
  INT 21h
ENDM

newline MACRO
  MOV AH, 02h
  MOV DL, 0Dh
  INT 21h
  MOV DL, 0Ah
  INT 21h
ENDM

; --- Constants ---
DOS_PRINT EQU 09h
DOS_EXIT  EQU 4Ch
MAX_ITEMS EQU 5

.MODEL SMALL
.STACK 100h
.DATA
  title_msg DB 'Directive Demo', 0Dh, 0Ah, '$'
  items     DB MAX_ITEMS DUP(0)    ; 5 zero bytes
  count     DW 0
  separator DB '---', 0Dh, 0Ah, '$'

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

  print_str title_msg     ; macro expands inline
  print_str separator

  ; Initialize items array
  MOV CX, MAX_ITEMS       ; EQU constant = 5
  LEA SI, items
  MOV AL, 10
fill:
  MOV [SI], AL
  ADD AL, 10
  INC SI
  LOOP fill

  newline                  ; macro expands inline

  MOV AH, DOS_EXIT        ; EQU constant
  INT 21h
MAIN ENDP
END MAIN`,
  funFact: "The MASM MACRO system is actually Turing-complete — you can write conditionals (IF, ELSE, ENDIF), loops (REPT, IRP, IRPC), and string manipulation entirely within the macro language. Some programmers have implemented entire mini-compilers as MASM macro packages that translate a high-level syntax into assembly instructions during assembly time.",
  quiz: [
    { q: "What is the difference between DB and EQU?", opts: ["DB allocates memory and stores a value; EQU creates a symbolic name with no memory allocation", "EQU allocates memory; DB creates constants", "They are identical but DB is older syntax", "DB is for bytes, EQU is for words"], ans: 0 },
    { q: "What does ORG 100h do in a COM program?", opts: ["Allocates 256 bytes of stack", "Sets the starting address offset to 100h, accounting for the DOS PSP", "Defines 100 hexadecimal labels", "Organizes the code into 256 segments"], ans: 1 },
    { q: "How does a MACRO differ from a PROC at the machine code level?", opts: ["A MACRO generates a CALL instruction; PROC does not", "A MACRO is expanded inline (code copied), PROC is called with CALL/RET", "They generate identical machine code", "PROC is expanded inline; MACRO generates CALL instructions"], ans: 1 },
    { q: "What does DB 10 DUP(0FFh) create?", opts: ["A single byte with value 10", "10 bytes, each containing FFh (255)", "255 bytes, each containing 10", "A word containing 10FF"], ans: 1 },
    { q: "What does ASSUME do?", opts: ["Loads segment registers with segment addresses", "Tells the assembler which segment register maps to which segment for address resolution", "Assumes default values for uninitialized data", "Creates conditional assembly blocks"], ans: 1 }
  ],
  challenge: "Create a macro called print_num that takes a single-digit number (0-9), converts it to its ASCII character, and prints it using INT 21h. Then write a program that uses a loop and your macro to print the digits 0 through 9 on the screen.",
  resources: [
    { type: "article", title: "8086 Assembler Directives", url: "https://www.geeksforgeeks.org/directives-in-assembly-language/", source: "GeeksforGeeks" },
    { type: "article", title: "MASM Directives Reference", url: "https://learn.microsoft.com/en-us/cpp/assembler/masm/directives-reference", source: "Microsoft Docs" },
    { type: "video", title: "Assembly Macros and Directives", url: "https://www.youtube.com/watch?v=wLXIWKUWpSs", source: "YouTube" },
    { type: "article", title: "MASM Macro Language", url: "https://en.wikibooks.org/wiki/X86_Assembly/MASM_Syntax", source: "Wikibooks" }
  ],
  eli5: "Imagine you are building with LEGO. The LEGO bricks are like CPU instructions — they make the actual building. But the instruction booklet tells you 'use 10 red bricks here' (that is DB 10 DUP), 'this section is called the roof' (that is a label), and 'repeat steps 3-5 for each wall' (that is a MACRO). The booklet guides YOU (the assembler), but the final building (machine code) does not contain the booklet — just the bricks.",
  codeWalkthrough: [
    "print_str MACRO — defines a reusable template that loads a string address and calls DOS print. Each use is expanded to 3 instructions inline",
    "newline MACRO — prints CR (0Dh) and LF (0Ah) for a new line. Expands to 5 instructions each time used",
    "DOS_PRINT EQU 09h — creates a named constant. Wherever DOS_PRINT appears, the assembler substitutes 09h. No memory used",
    "MAX_ITEMS EQU 5 — another constant. Used for both the DUP count and the loop counter, ensuring consistency",
    "items DB MAX_ITEMS DUP(0) — allocates 5 bytes initialized to zero. DUP tells the assembler to repeat the value",
    "print_str title_msg — the assembler expands this to: LEA DX, title_msg / MOV AH, 09h / INT 21h",
    "MOV CX, MAX_ITEMS — EQU substitution: assembles as MOV CX, 5",
    "The fill loop manually initializes items to [10, 20, 30, 40, 50] by incrementing AL by 10 each iteration",
    "MOV AH, DOS_EXIT — EQU substitution again: assembles as MOV AH, 4Ch"
  ],
  bugChallenge: {
    code: "print_msg MACRO msg\n  MOV AH, 09h\n  LEA DX, msg\n  INT 21h\nENDM\n\n.DATA\n  greeting DB 'Hi there', 0Dh, 0Ah, 0\n\n.CODE\n  print_msg greeting\n  MOV AH, 4Ch\n  INT 21h",
    hint: "Look at the string terminator. What does INT 21h function 09h expect?",
    answer: "The string is terminated with 0 (null byte), but DOS function 09h expects a '$' (24h) terminator. The program will print 'Hi there' followed by whatever garbage is in memory until it happens to find a '$'. Fix: change the 0 to '$' in the DB definition."
  },
  difficulty: "intermediate",
  prereqs: [26]
},
// Lesson 29
{
  id: 29,
  title: "emu8086/MASM Setup and Syntax Basics",
  subtitle: "Get your assembly toolkit running — write, assemble, and debug 8086 programs on a modern PC",
  analogy: "emu8086 is like a flight simulator for microprocessors. A real 8086 chip is expensive and hard to wire up, just like a real airplane. The simulator gives you all the instruments (registers, flags, memory view) on screen, lets you practice (write and run code), and even lets you crash safely (bugs do not fry hardware). MASM is the control tower that translates your flight plan (source code) into actual flight commands (machine code).",
  points: [
    { t: "What is emu8086?", d: "emu8086 is a free 8086 microprocessor emulator and assembler. It provides a complete simulated 8086 environment: CPU registers, memory, I/O ports, a screen, and a keyboard — all on your modern Windows PC. It assembles, runs, and debugs 8086 code in one integrated tool.", code: "; emu8086 supports both .COM and .EXE formats\n; .COM: ORG 100h, max 64KB, single segment\n; .EXE: .MODEL SMALL, multiple segments\n; Choose .COM for simple programs" },
    { t: "MASM Syntax Overview", d: "MASM (Microsoft Macro Assembler) uses Intel syntax: destination comes first. It supports simplified segment directives (.MODEL, .DATA, .CODE), rich macro language, and typed data definitions. emu8086 uses MASM-compatible syntax.", code: "; MASM/Intel syntax:\nMOV AX, BX      ; dest, source\nADD CX, 5       ; CX = CX + 5\n\n; (contrast with AT&T/GAS syntax:)\n; movw %bx, %ax   ; source, dest\n; addw $5, %cx" },
    { t: ".MODEL Directive", d: ".MODEL specifies the memory model. SMALL means one code segment and one data segment (max 64KB each) — sufficient for most 8086 learning programs. Other models: TINY (COM, one segment for everything), MEDIUM, COMPACT, LARGE.", code: ".MODEL SMALL     ; 1 code seg + 1 data seg\n; .MODEL TINY    ; COM file, everything in 1 seg\n; .MODEL LARGE   ; multiple code and data segs" },
    { t: ".STACK Directive", d: ".STACK allocates space for the stack segment. The parameter specifies the size in bytes. 100h (256 bytes) is typical for small programs. The linker sets SS:SP to the top of this area.", code: ".STACK 100h      ; 256 bytes for stack\n; SP will be initialized to 100h\n; Stack grows downward from SS:0100h" },
    { t: ".DATA Directive", d: ".DATA begins the data segment where you define variables using DB, DW, DD. The assembler groups all .DATA definitions into one segment. You must load DS with the data segment address at runtime (MOV AX, @DATA / MOV DS, AX).", code: ".DATA\n  msg    DB 'Hello, World!$'\n  count  DW 0\n  buffer DB 50 DUP(?)\n  nums   DB 1, 2, 3, 4, 5" },
    { t: ".CODE Directive and Entry Point", d: ".CODE begins the code segment containing executable instructions. The PROC with the name matching the END directive is the entry point. END MAIN tells the linker that execution starts at the MAIN label.", code: ".CODE\nMAIN PROC\n  MOV AX, @DATA   ; get data segment address\n  MOV DS, AX      ; load into DS\n  ; ... your code ...\n  MOV AH, 4Ch\n  INT 21h         ; exit to DOS\nMAIN ENDP\nEND MAIN            ; entry point = MAIN" },
    { t: "@DATA Symbol", d: "@DATA is an assembler symbol that represents the segment address of the .DATA segment. You cannot MOV directly into DS (segment registers cannot be loaded with immediate values), so you use AX as an intermediary: MOV AX, @DATA / MOV DS, AX.", code: "MOV AX, @DATA    ; AX = segment address of data\nMOV DS, AX       ; now DS points to .DATA\n; Cannot do: MOV DS, @DATA (illegal)\n; Segment regs need register-to-register MOV" },
    { t: "Assembling and Linking (EXE)", d: "The assembly process has two phases: (1) Assembling: MASM converts .ASM source to .OBJ object file. (2) Linking: LINK combines .OBJ files into an .EXE executable. In emu8086, both happen with one click of the 'compile' button.", code: "; Command-line MASM workflow:\n; MASM program.asm    -> program.obj\n; LINK program.obj    -> program.exe\n;\n; In emu8086: just click 'compile'\n; It does assemble + link automatically" },
    { t: "COM vs EXE Format", d: "COM files are simpler: one segment for everything, max 64KB, starts at offset 100h (after PSP). EXE files support multiple segments, larger programs, and have a header with relocation info. For learning, COM is easier; for real programs, EXE is more flexible.", code: "; COM program structure:\nORG 100h\n  MOV AH, 02h\n  MOV DL, 'A'\n  INT 21h\n  INT 20h         ; exit COM\n\n; EXE program structure:\n.MODEL SMALL\n.STACK 100h\n.DATA\n.CODE\nMAIN PROC\n  ; ... code ...\nMAIN ENDP\nEND MAIN" },
    { t: "emu8086 User Interface", d: "The emu8086 UI shows: source editor (write code), register panel (AX, BX, CX, DX, SI, DI, BP, SP, IP, flags), memory viewer (hex dump), stack viewer, variables list, and an emulated screen. The toolbar has: compile, run, single-step, and stop.", code: "; After compiling in emu8086, you see:\n; [Source]  [Registers]  [Memory]\n;          AX=0000 BX=0000\n;          CX=0000 DX=0000\n;          SI=0000 DI=0000\n;          SP=00FE BP=0000\n;          IP=0000 FLAGS=----" }
  ],
  whatIs: "emu8086 is a free integrated development environment that emulates the 8086 microprocessor, letting you write, assemble, and debug assembly programs on a modern PC. MASM (Microsoft Macro Assembler) syntax is the Intel-style assembly language it uses, featuring simplified segment directives (.MODEL, .STACK, .DATA, .CODE) that organize programs into logical sections. Together, they provide a complete hands-on platform for learning 8086 assembly.",
  realWorld: "Every microprocessor course in universities uses either emu8086, TASM (Turbo Assembler), or DOSBox+MASM for lab work. Industry professionals use the same MASM syntax when writing inline assembly in C/C++ for performance-critical code, boot loaders, or driver ISRs. Understanding the toolchain is essential for debugging embedded systems and reverse engineering.",
  code: `; Complete emu8086 EXE template
; This is the standard skeleton for every program
.MODEL SMALL
.STACK 100h

.DATA
  greeting DB 'Welcome to emu8086!', 0Dh, 0Ah, '$'
  name_buf DB 20 DUP('$')
  prompt   DB 'Enter your name: $'

.CODE
MAIN PROC
  ; Step 1: Initialize data segment
  MOV AX, @DATA
  MOV DS, AX

  ; Step 2: Print the greeting
  MOV AH, 09h
  LEA DX, greeting
  INT 21h

  ; Step 3: Print prompt
  MOV AH, 09h
  LEA DX, prompt
  INT 21h

  ; Step 4: Read a string (simplified — read chars)
  LEA SI, name_buf
  MOV CX, 19        ; max 19 characters
read_loop:
  MOV AH, 01h       ; DOS: read char with echo
  INT 21h
  CMP AL, 0Dh       ; Enter key?
  JE  done_read
  MOV [SI], AL
  INC SI
  LOOP read_loop

done_read:
  ; Step 5: New line
  MOV AH, 02h
  MOV DL, 0Dh
  INT 21h
  MOV DL, 0Ah
  INT 21h

  ; Step 6: Print back the name
  MOV AH, 09h
  LEA DX, name_buf
  INT 21h

  ; Step 7: Exit to DOS
  MOV AH, 4Ch
  INT 21h
MAIN ENDP
END MAIN`,
  funFact: "MASM has been around since 1981 — it was one of the first products Microsoft sold alongside MS-DOS. Despite being over 40 years old, Microsoft still ships a version of MASM (ml64.exe) with every copy of Visual Studio. The MASM syntax and directives you learn today work almost identically in modern x64 assembly programming.",
  quiz: [
    { q: "Why can you not write MOV DS, @DATA directly?", opts: ["@DATA is not a valid symbol", "Segment registers cannot be loaded with immediate values — you must go through a general register", "DS is read-only", "@DATA only works with ES"], ans: 1 },
    { q: "What does .MODEL SMALL specify?", opts: ["One segment for code and data combined", "One code segment and one data segment, each up to 64KB", "Unlimited segments", "A COM-style program with ORG 100h"], ans: 1 },
    { q: "What is the difference between COM and EXE formats?", opts: ["COM supports multiple segments; EXE is limited to one", "COM is limited to one 64KB segment starting at 100h; EXE supports multiple segments with a header", "They are identical except for the file extension", "EXE files cannot use INT 21h"], ans: 1 },
    { q: "What does END MAIN do?", opts: ["Ends the program at runtime", "Tells the linker that the entry point is the MAIN label", "Frees memory allocated by MAIN", "Closes the .CODE segment"], ans: 1 },
    { q: "In emu8086, what is the standard first two instructions of an EXE program?", opts: ["PUSH DS / POP ES", "MOV AX, @DATA / MOV DS, AX", "CLI / STI", "ORG 100h / JMP start"], ans: 1 }
  ],
  challenge: "Set up emu8086 on your computer (or use an online 8086 emulator). Write a .COM program (using ORG 100h) that prints your name and the current lesson number. Then convert it to an .EXE program (using .MODEL SMALL) and verify both produce the same output.",
  resources: [
    { type: "tool", title: "emu8086 Download", url: "https://emu8086-microprocessor-emulator.en.softonic.com/", source: "Softonic" },
    { type: "article", title: "MASM Getting Started Guide", url: "https://learn.microsoft.com/en-us/cpp/assembler/masm/masm-for-x64-ml64-exe", source: "Microsoft Docs" },
    { type: "video", title: "emu8086 Installation and First Program", url: "https://www.youtube.com/watch?v=dMBorbGPaEQ", source: "YouTube" },
    { type: "article", title: "COM vs EXE File Format", url: "https://en.wikipedia.org/wiki/COM_file", source: "Wikipedia" }
  ],
  eli5: "Imagine you want to learn to drive a race car. Instead of buying a real car (an actual 8086 chip and circuit board), you use a video game racing simulator (emu8086). The simulator has a steering wheel, pedals, and a dashboard (registers, memory, flags) that work just like the real thing. You can practice, crash, and try again without any risk. The instruction manual that tells you the rules of the road is MASM syntax.",
  codeWalkthrough: [
    ".MODEL SMALL / .STACK 100h — tell the assembler we want a small-model EXE with a 256-byte stack",
    ".DATA section — define three strings: a greeting, an input buffer (20 bytes filled with '$' as terminator), and a prompt",
    "MOV AX, @DATA / MOV DS, AX — essential setup: the CPU does not automatically set DS, so we manually point it to our data segment",
    "MOV AH, 09h / LEA DX, greeting / INT 21h — DOS function 09h prints a '$'-terminated string at DS:DX",
    "The read_loop uses DOS function 01h to read one character at a time, storing each in the buffer and advancing SI",
    "CMP AL, 0Dh / JE done_read — when the user presses Enter (carriage return = 0Dh), we stop reading",
    "After reading, we print CR+LF (0Dh, 0Ah) to move to a new line on the screen",
    "MOV AH, 09h / LEA DX, name_buf — print back the name. It works because we prefilled the buffer with '$' terminators",
    "MOV AH, 4Ch / INT 21h — standard DOS exit. Function 4Ch terminates the program and returns control to the DOS prompt"
  ],
  bugChallenge: {
    code: ".MODEL SMALL\n.STACK 100h\n.DATA\n  msg DB 'Test$'\n.CODE\nMAIN PROC\n  MOV AH, 09h\n  LEA DX, msg\n  INT 21h\n  MOV AH, 4Ch\n  INT 21h\nMAIN ENDP\nEND MAIN",
    hint: "The program compiles fine but prints garbage instead of 'Test'. What is missing before accessing data?",
    answer: "DS is never initialized. Without MOV AX, @DATA / MOV DS, AX, the DS register points to whatever default value DOS set (usually the PSP), not the .DATA segment. LEA DX, msg calculates the offset correctly, but DS:DX points to the wrong segment. Add the two-line DS initialization at the start of MAIN PROC."
  },
  difficulty: "intermediate",
  prereqs: [28]
},
// Lesson 30
{
  id: 30,
  title: "Your First 8086 Program",
  subtitle: "Write, understand, and run complete assembly programs — from Hello World to arithmetic",
  analogy: "Your first 8086 program is like your first recipe in the kitchen. You follow exact steps: gather ingredients (.DATA), prepare your workspace (initialize DS), follow the recipe (instructions), and serve the dish (display output). At first, even a simple recipe feels complex, but once you understand the pattern, you can cook anything.",
  points: [
    { t: "The Minimal 8086 Program", d: "Every .EXE program needs at minimum: .MODEL, .STACK, .CODE, a PROC with DS initialization, and an exit (INT 21h function 4Ch). Even a program that does nothing needs this skeleton to assemble and run without crashing.", code: ".MODEL SMALL\n.STACK 100h\n.CODE\nMAIN PROC\n  MOV AX, @DATA\n  MOV DS, AX\n  ; (your code here)\n  MOV AH, 4Ch\n  INT 21h\nMAIN ENDP\nEND MAIN" },
    { t: "Hello World — Printing a String", d: "DOS function 09h (INT 21h) prints a string pointed to by DS:DX. The string must end with '$'. This is the 8086 equivalent of printf('Hello World') or console.log.", code: ".DATA\n  msg DB 'Hello, World!', 0Dh, 0Ah, '$'\n.CODE\nMAIN PROC\n  MOV AX, @DATA\n  MOV DS, AX\n  MOV AH, 09h       ; DOS print string\n  LEA DX, msg       ; DX = offset of msg\n  INT 21h           ; prints: Hello, World!\n  MOV AH, 4Ch\n  INT 21h\nMAIN ENDP" },
    { t: "Adding Two Numbers", d: "The simplest arithmetic: load two values into registers, ADD them, and store the result. This is the assembly version of result = a + b. The result stays in a register or goes to a memory variable.", code: ".DATA\n  num1 DW 25\n  num2 DW 17\n  sum  DW ?\n.CODE\n  MOV AX, @DATA\n  MOV DS, AX\n  MOV AX, [num1]    ; AX = 25\n  ADD AX, [num2]    ; AX = 25 + 17 = 42\n  MOV [sum], AX     ; sum = 42" },
    { t: "Displaying a Single-Digit Number", d: "To display a number (0-9) on screen, convert it to ASCII by adding 30h (48 decimal). ASCII '0' is 30h, '1' is 31h, etc. Then use DOS function 02h to print the character in DL.", code: "; Display the digit 7\nMOV AH, 02h       ; DOS print character\nMOV DL, 7         ; the number\nADD DL, 30h       ; convert to ASCII '7'\nINT 21h           ; prints: 7" },
    { t: "Displaying Multi-Digit Numbers", d: "For numbers larger than 9, you must convert to individual digits using repeated division by 10. Each remainder is a digit (least significant first). Push digits onto the stack and pop them to reverse order for display.", code: "; Display AX as decimal (AX = 1234)\nMOV AX, 1234\nMOV CX, 0          ; digit count\nMOV BX, 10         ; divisor\nget_digits:\n  XOR DX, DX       ; clear DX for division\n  DIV BX            ; AX=AX/10, DX=remainder\n  PUSH DX           ; save digit\n  INC CX            ; count++\n  CMP AX, 0\n  JNE get_digits\nprint_digits:\n  POP DX            ; get digit (reversed)\n  ADD DL, 30h       ; to ASCII\n  MOV AH, 02h\n  INT 21h\n  LOOP print_digits  ; prints: 1234" },
    { t: "Reading a Character from Keyboard", d: "DOS function 01h reads a single character with echo (displays it on screen). The ASCII code is returned in AL. Function 08h reads without echo (for passwords). This is the assembly version of getchar().", code: "MOV AH, 01h       ; DOS read char (with echo)\nINT 21h           ; wait for keypress\n; AL now contains the ASCII code\n; e.g., if user pressed 'A', AL = 41h\nMOV [user_char], AL  ; save it" },
    { t: "Reading a Single-Digit Number", d: "When the user types '5', AL receives 35h (ASCII for '5'). Subtract 30h to get the numeric value 5. This is the reverse of the display conversion.", code: "MOV AH, 01h       ; read character\nINT 21h           ; user types '5', AL = 35h\nSUB AL, 30h       ; AL = 5 (numeric value)\nMOV [input_num], AL  ; store the number" },
    { t: "Complete Add-Two-Numbers Program", d: "A practical program that reads two single-digit numbers from the user, adds them, and displays the result. This combines input, arithmetic, and output — the three pillars of any program.", code: "; Read two digits, add, display result\nMOV AH, 01h\nINT 21h           ; read first digit\nSUB AL, 30h\nMOV BL, AL        ; BL = first number\n\nMOV AH, 01h\nINT 21h           ; read second digit\nSUB AL, 30h\n\nADD AL, BL        ; AL = sum\nADD AL, 30h       ; back to ASCII\nMOV DL, AL\nMOV AH, 02h\nINT 21h           ; display sum" },
    { t: "Program Exit with Return Code", d: "INT 21h function 4Ch terminates the program and returns a code to DOS. AL holds the return code (0 = success). The parent process or batch file can check this with ERRORLEVEL.", code: "MOV AH, 4Ch\nMOV AL, 0        ; return code 0 (success)\nINT 21h          ; exit to DOS\n; or combined:\nMOV AX, 4C00h   ; AH=4Ch, AL=00h\nINT 21h" },
    { t: "INT 21h Quick Reference", d: "The most common DOS interrupts for beginners: 01h = read char (echo), 02h = print char, 08h = read char (no echo), 09h = print string, 0Ah = buffered input, 4Ch = exit. AH always holds the function number.", code: "; Quick reference:\n; AH=01h, INT 21h -> read char -> AL\n; AH=02h, DL=char, INT 21h -> print char\n; AH=08h, INT 21h -> read char no echo -> AL\n; AH=09h, DX=string, INT 21h -> print string\n; AH=4Ch, AL=code, INT 21h -> exit" }
  ],
  whatIs: "Your first 8086 programs combine everything learned so far: data definitions, register operations, arithmetic, and DOS interrupts for I/O. The core pattern is: initialize segments, read input, process data, display output, and exit cleanly. Even a 'Hello World' program teaches segment setup, string termination, and interrupt calling — foundational skills for all assembly programming.",
  realWorld: "Every developer's journey in any language starts with simple I/O programs. In assembly, these teach you the actual machine operations behind high-level abstractions. When you debug a crashed program and see register dumps, or write an embedded bootloader that must print diagnostics without an OS, these fundamentals are what you rely on.",
  code: `; Program: Calculator — add, subtract, multiply two single-digit numbers
.MODEL SMALL
.STACK 100h
.DATA
  msg1  DB 'Enter first digit (0-9): $'
  msg2  DB 0Dh, 0Ah, 'Enter second digit (0-9): $'
  msg3  DB 0Dh, 0Ah, 'Sum: $'
  msg4  DB 0Dh, 0Ah, 'Difference: $'
  msg5  DB 0Dh, 0Ah, 'Product: $'
  num1  DB ?
  num2  DB ?

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

  ; --- Read first number ---
  MOV AH, 09h
  LEA DX, msg1
  INT 21h
  MOV AH, 01h
  INT 21h            ; AL = ASCII digit
  SUB AL, 30h        ; convert to number
  MOV [num1], AL

  ; --- Read second number ---
  MOV AH, 09h
  LEA DX, msg2
  INT 21h
  MOV AH, 01h
  INT 21h
  SUB AL, 30h
  MOV [num2], AL

  ; --- Addition ---
  MOV AH, 09h
  LEA DX, msg3
  INT 21h
  MOV AL, [num1]
  ADD AL, [num2]     ; AL = sum (may be > 9)
  CALL print_al      ; display result

  ; --- Subtraction ---
  MOV AH, 09h
  LEA DX, msg4
  INT 21h
  MOV AL, [num1]
  SUB AL, [num2]     ; AL = difference
  CALL print_al

  ; --- Multiplication ---
  MOV AH, 09h
  LEA DX, msg5
  INT 21h
  MOV AL, [num1]
  MOV BL, [num2]
  MUL BL             ; AX = product
  CALL print_al

  ; --- Exit ---
  MOV AH, 4Ch
  INT 21h
MAIN ENDP

; Procedure: print number in AL (0-99)
print_al PROC NEAR
  CMP AL, 10
  JB  single_digit

  ; Two digits: divide by 10
  XOR AH, AH        ; clear AH
  MOV BL, 10
  DIV BL             ; AL = tens, AH = ones
  PUSH AX            ; save ones in AH

  ADD AL, 30h        ; tens digit to ASCII
  MOV DL, AL
  MOV AH, 02h
  INT 21h

  POP AX
  MOV AL, AH         ; ones digit

single_digit:
  ADD AL, 30h
  MOV DL, AL
  MOV AH, 02h
  INT 21h
  RET
print_al ENDP
END MAIN`,
  funFact: "The very first IBM PC in 1981 came with a BASIC interpreter in ROM, but power users would write assembly programs using DEBUG.COM — a tiny debugger built into DOS. You could type 'a 100' to start assembling at offset 100h, enter instructions line by line, and run them immediately. Many legendary DOS programs were first prototyped this way.",
  quiz: [
    { q: "How do you convert the digit 7 to its ASCII character for display?", opts: ["Subtract 30h from 7", "Add 30h to 7 (result: 37h = '7')", "Multiply 7 by 10", "Store 7 directly in DL"], ans: 1 },
    { q: "Which DOS interrupt function reads a character from the keyboard with echo?", opts: ["INT 21h, AH=02h", "INT 21h, AH=01h", "INT 21h, AH=09h", "INT 21h, AH=4Ch"], ans: 1 },
    { q: "Why must strings for DOS function 09h end with '$'?", opts: ["$ is the ASCII null character", "DOS function 09h uses '$' as its string terminator — it stops printing when it encounters '$'", "$ tells the printer to advance paper", "It is optional, any character works"], ans: 1 },
    { q: "To display the number 42, what technique is used?", opts: ["Store 42 in DL and call INT 21h function 02h", "Divide by 10 repeatedly to extract individual digits, convert each to ASCII, then print", "Convert 42 to hexadecimal and print", "Use function 09h with the number directly"], ans: 1 },
    { q: "What happens if you forget MOV AX, @DATA / MOV DS, AX at the start?", opts: ["The program crashes immediately", "Variables in .DATA cannot be accessed correctly — DS points to the wrong segment", "The stack overflows", "Nothing — DS is set automatically"], ans: 1 }
  ],
  challenge: "Write a complete 8086 program that: (1) asks the user for two single-digit numbers, (2) displays their sum, difference, product, and quotient, (3) handles the case where the subtraction result is negative by printing a minus sign, and (4) handles division by zero by printing an error message.",
  resources: [
    { type: "article", title: "8086 Assembly Hello World", url: "https://www.geeksforgeeks.org/8086-program-to-print-hello-world/", source: "GeeksforGeeks" },
    { type: "video", title: "First Assembly Program Tutorial", url: "https://www.youtube.com/watch?v=wLXIWKUWpSs", source: "YouTube" },
    { type: "article", title: "DOS INT 21h Function Reference", url: "https://en.wikipedia.org/wiki/DOS_API", source: "Wikipedia" },
    { type: "tool", title: "emu8086 Online Tutorials", url: "https://emu8086-microprocessor-emulator.en.softonic.com/", source: "Softonic" }
  ],
  eli5: "Imagine you are a waiter in a restaurant (the CPU). A customer (the user) tells you their order (keyboard input). You write it on a slip (register). You take it to the kitchen (ALU), where the chef adds ingredients together (ADD). Then you bring the dish back and show it to the customer (display output). The restaurant's opening and closing procedures (MOV DS, AX and INT 21h/4Ch) are the setup and cleanup you must always do.",
  codeWalkthrough: [
    "MOV AX, @DATA / MOV DS, AX — initialize DS so we can access all variables defined in .DATA",
    "MOV AH, 09h / LEA DX, msg1 / INT 21h — print the prompt 'Enter first digit (0-9): ' using DOS string output",
    "MOV AH, 01h / INT 21h — wait for the user to type a character. The ASCII code goes into AL",
    "SUB AL, 30h — convert ASCII to numeric value. If user typed '5' (ASCII 35h), AL becomes 5",
    "MOV [num1], AL — save the numeric value into our data variable for later use",
    "ADD AL, [num2] — add the two numbers. Result may exceed 9 (e.g., 7+8=15), so we need the two-digit display procedure",
    "CALL print_al — call our procedure that handles both single and double digit display",
    "In print_al: CMP AL, 10 / JB single_digit — if result is less than 10, just add 30h and print one character",
    "For two digits: DIV BL divides AX by 10. AL gets the tens digit, AH gets the ones digit. Print each after converting to ASCII",
    "MUL BL — unsigned multiply. AL * BL, result in AX. For single digits, the product fits in AL (max 9*9=81)"
  ],
  bugChallenge: {
    code: "MOV AH, 01h\nINT 21h\nMOV BL, AL      ; BL = first digit ASCII\nMOV AH, 01h\nINT 21h\nADD AL, BL      ; 'add' the two digits\nMOV DL, AL\nMOV AH, 02h\nINT 21h",
    hint: "What happens when you add two ASCII values? What is '3' + '5' in ASCII?",
    answer: "The code adds ASCII values instead of numeric values. '3' (33h) + '5' (35h) = 68h = 'h'. The fix: subtract 30h from each digit before adding. After ADD, add 30h back to convert the sum to ASCII: SUB BL, 30h before saving, SUB AL, 30h before ADD, then ADD AL, 30h before display (for single-digit sums)."
  },
  difficulty: "intermediate",
  prereqs: [29]
},
// Lesson 31
{
  id: 31,
  title: "Arrays, Tables, and Block Operations",
  subtitle: "Organize data into arrays and tables, then process them efficiently with index registers",
  analogy: "An array in assembly is like a row of mailboxes in an apartment building. Each mailbox (element) has an address (offset). The building's starting address is the array label, and SI or DI is like a mail carrier walking from box to box. A lookup table is like a speed-dial list — instead of computing a result, you just look it up by index. XLAT is the one-button speed-dial.",
  points: [
    { t: "Defining Arrays with DB and DW", d: "Arrays are simply consecutive memory locations defined with DB (byte array) or DW (word array). The label marks the starting address. Element spacing is 1 byte for DB or 2 bytes for DW. Access the Nth element at label + N*element_size.", code: ".DATA\n  byte_arr DB 10, 20, 30, 40, 50  ; 5 bytes\n  word_arr DW 100, 200, 300, 400   ; 4 words (8 bytes)\n  str_arr  DB 'ABCDE'              ; 5 ASCII bytes\n  zeros    DB 100 DUP(0)           ; 100 zero bytes" },
    { t: "Traversing Arrays with SI", d: "Use SI (Source Index) to walk through an array. Load the array's offset into SI with LEA, access the current element with [SI], then increment SI by the element size (1 for bytes, 2 for words) to move to the next.", code: "LEA SI, byte_arr    ; SI = offset of array\nMOV CX, 5           ; 5 elements\nXOR AX, AX          ; sum = 0\nsum_loop:\n  ADD AL, [SI]       ; add current element\n  INC SI             ; next byte element\n  LOOP sum_loop\n; AL = 10+20+30+40+50 = 150" },
    { t: "Word Array Traversal", d: "For word arrays, each element is 2 bytes. Increment SI by 2 to move between elements. You can also use ADD SI, 2 or INC SI twice. When accessing with MOV AX, [SI], the processor reads 2 bytes.", code: "LEA SI, word_arr   ; SI = start of word array\nMOV CX, 4          ; 4 word elements\nXOR DX, DX         ; sum = 0\nword_loop:\n  MOV AX, [SI]     ; load word element\n  ADD DX, AX       ; accumulate sum\n  ADD SI, 2        ; next WORD (2 bytes)\n  LOOP word_loop\n; DX = 100+200+300+400 = 1000" },
    { t: "Indexed Addressing for Arrays", d: "Use base+index addressing: [BX+SI], [BX+DI], or direct offset [array+SI]. This is how you access array[i] — the base address plus the index. BX often holds the base, SI or DI holds the index.", code: "LEA BX, byte_arr   ; BX = base address\nMOV SI, 3           ; index = 3\nMOV AL, [BX+SI]     ; AL = byte_arr[3] = 40\n\n; Or using direct offset:\nMOV SI, 2\nMOV AL, byte_arr[SI] ; AL = byte_arr[2] = 30" },
    { t: "Lookup Tables", d: "A lookup table stores precomputed results. Instead of calculating f(x), you access table[x] directly. This trades memory for speed — one memory read replaces a complex computation. Perfect for character conversions, trigonometry approximations, and display encoding.", code: "; 7-segment display lookup table\n; Index = digit (0-9), value = segment pattern\nseg_table DB 3Fh  ; 0: segments a,b,c,d,e,f\n          DB 06h  ; 1: segments b,c\n          DB 5Bh  ; 2: segments a,b,d,e,g\n          DB 4Fh  ; 3: segments a,b,c,d,g\n          DB 66h  ; 4: segments b,c,f,g\n          DB 6Dh  ; 5\n          DB 7Dh  ; 6\n          DB 07h  ; 7\n          DB 7Fh  ; 8\n          DB 6Fh  ; 9" },
    { t: "XLAT — Table Lookup Instruction", d: "XLAT replaces AL with the byte at DS:[BX+AL]. Set BX to the table base address and AL to the index, then XLAT does the lookup in a single instruction. Only works for byte tables with indices 0-255.", code: "LEA BX, seg_table  ; BX = table base\nMOV AL, 5          ; look up digit 5\nXLAT               ; AL = [BX+5] = 6Dh\n; AL now holds the 7-segment pattern for '5'" },
    { t: "Block Copy with Index Registers", d: "To copy one array to another, use SI for the source and DI for the destination. Increment both after each copy. This is the manual version of REP MOVSB, useful when you need to transform data during the copy.", code: "LEA SI, source     ; source array\nLEA DI, dest       ; destination array\nMOV CX, 10         ; 10 elements\ncopy_loop:\n  MOV AL, [SI]     ; read from source\n  MOV [DI], AL     ; write to destination\n  INC SI\n  INC DI\n  LOOP copy_loop" },
    { t: "Finding Min/Max in an Array", d: "Initialize the result with the first element. Loop through the rest, comparing each element with the current min/max. Update when a smaller/larger value is found. This is a fundamental algorithm implemented at the lowest level.", code: "; Find maximum in byte array\nLEA SI, byte_arr\nMOV AL, [SI]       ; max = first element\nINC SI\nMOV CX, 4          ; remaining 4 elements\nfind_max:\n  CMP AL, [SI]     ; compare max with current\n  JAE skip          ; if max >= current, skip\n  MOV AL, [SI]     ; new max found\nskip:\n  INC SI\n  LOOP find_max\n; AL = maximum value" },
    { t: "2D Arrays (Matrices)", d: "A 2D array is stored as consecutive rows in memory. To access element [row][col] in a matrix with C columns, calculate offset = row * C + col. Multiply the row index by the number of columns, then add the column index.", code: "; 3x4 matrix of bytes (3 rows, 4 columns)\nmatrix DB 1,2,3,4       ; row 0\n       DB 5,6,7,8       ; row 1\n       DB 9,10,11,12    ; row 2\n\n; Access matrix[1][2] (row 1, col 2)\nMOV AL, 1          ; row\nMOV BL, 4          ; columns per row\nMUL BL             ; AL = 1 * 4 = 4\nADD AL, 2          ; + col 2 = offset 6\nMOV SI, AX\nMOV AL, matrix[SI] ; AL = 7" },
    { t: "Sorting an Array — Bubble Sort", d: "Bubble sort repeatedly walks through the array, swapping adjacent elements if they are out of order. The outer loop repeats until no swaps occur. Simple to implement in assembly: compare, conditional jump, XCHG or manual swap.", code: "; Bubble sort a byte array (ascending)\nMOV CX, 4          ; n-1 passes\nouter:\n  LEA SI, byte_arr\n  PUSH CX\n  MOV CX, 4        ; inner loop count\ninner:\n  MOV AL, [SI]\n  CMP AL, [SI+1]\n  JBE no_swap\n  XCHG AL, [SI+1]  ; swap\n  MOV [SI], AL\nno_swap:\n  INC SI\n  LOOP inner\n  POP CX\n  LOOP outer" }
  ],
  whatIs: "Arrays in 8086 assembly are contiguous blocks of memory defined with DB or DW, accessed via index registers (SI, DI) and base+offset addressing. Lookup tables provide O(1) precomputed results using XLAT or indexed access. Block operations copy, search, or transform arrays element by element. These data structures and operations are the assembly-level foundation of every high-level array, list, and table.",
  realWorld: "Arrays and lookup tables are everywhere in embedded systems. A keyboard controller uses a lookup table to convert scan codes to ASCII characters. Display drivers store font bitmaps as 2D arrays. Sensor systems accumulate readings into arrays and compute averages. Sorting arrays of measurements enables finding medians for noise rejection.",
  code: `; Program: Reverse an array and find its maximum element
.MODEL SMALL
.STACK 100h
.DATA
  arr     DB 34, 12, 78, 45, 23, 67, 89, 11, 56
  arr_len EQU 9
  rev_arr DB arr_len DUP(?)
  max_val DB ?
  msg1    DB 'Max value: $'
  msg2    DB 0Dh, 0Ah, 'Reversed: $'

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

  ; --- Find maximum ---
  LEA SI, arr
  MOV AL, [SI]          ; max = first element
  MOV CX, arr_len - 1
  INC SI
find_max:
  CMP AL, [SI]
  JAE not_bigger
  MOV AL, [SI]          ; update max
not_bigger:
  INC SI
  LOOP find_max
  MOV [max_val], AL     ; store max (89)

  ; --- Reverse array ---
  LEA SI, arr           ; SI = start of source
  LEA DI, rev_arr
  ADD DI, arr_len - 1   ; DI = end of reversed

  MOV CX, arr_len
reverse_loop:
  MOV AL, [SI]
  MOV [DI], AL
  INC SI
  DEC DI
  LOOP reverse_loop

  ; --- Display max ---
  MOV AH, 09h
  LEA DX, msg1
  INT 21h
  MOV AL, [max_val]
  CALL print_num

  ; --- Display reversed array ---
  MOV AH, 09h
  LEA DX, msg2
  INT 21h
  LEA SI, rev_arr
  MOV CX, arr_len
show_loop:
  MOV AL, [SI]
  CALL print_num
  MOV DL, ' '
  MOV AH, 02h
  INT 21h           ; space separator
  INC SI
  LOOP show_loop

  MOV AH, 4Ch
  INT 21h
MAIN ENDP

; Print AL as decimal number (0-255)
print_num PROC NEAR
  XOR AH, AH
  MOV BL, 100
  DIV BL              ; AL = hundreds, AH = remainder
  CMP AL, 0
  JE skip_hundreds
  ADD AL, 30h
  MOV DL, AL
  PUSH AX
  MOV AH, 02h
  INT 21h
  POP AX
skip_hundreds:
  MOV AL, AH          ; remainder
  XOR AH, AH
  MOV BL, 10
  DIV BL              ; AL = tens, AH = ones
  CMP AL, 0
  JE skip_tens
  ADD AL, 30h
  MOV DL, AL
  PUSH AX
  MOV AH, 02h
  INT 21h
  POP AX
skip_tens:
  MOV AL, AH
  ADD AL, 30h
  MOV DL, AL
  MOV AH, 02h
  INT 21h
  RET
print_num ENDP
END MAIN`,
  funFact: "The XLAT instruction was specifically designed for code page translations — converting characters from one encoding to another using a 256-byte lookup table. IBM PCs used it heavily to map between EBCDIC (used on mainframes) and ASCII (used on PCs) when transferring data over terminal connections.",
  quiz: [
    { q: "How do you access the 4th element (index 3) of a byte array starting at label 'arr'?", opts: ["MOV AL, arr[3] or MOV AL, [arr+3]", "MOV AL, arr[4]", "MOV AL, [arr*3]", "MOV AL, arr+3"], ans: 0 },
    { q: "When traversing a word (DW) array, by how much should you increment SI after each element?", opts: ["1", "2", "4", "It depends on the value"], ans: 1 },
    { q: "What does XLAT do?", opts: ["Translates assembly to machine code", "Replaces AL with the byte at DS:[BX+AL]", "Exchanges AL with the byte at [SI]", "Loads a string table into memory"], ans: 1 },
    { q: "To access element [2][3] in a byte matrix with 5 columns, what is the offset from the base?", opts: ["2 + 3 = 5", "2 * 5 + 3 = 13", "3 * 5 + 2 = 17", "2 * 3 = 6"], ans: 1 },
    { q: "Why are lookup tables faster than computation?", opts: ["They use less memory", "A single memory read replaces multiple arithmetic operations", "The CPU has special table instructions", "They are cached automatically"], ans: 1 }
  ],
  challenge: "Write an 8086 program that: (1) defines a byte array of 10 student scores, (2) finds the minimum, maximum, and average, (3) counts how many scores are above the average, and (4) displays all four results. Use procedures for find_min, find_max, and compute_average.",
  resources: [
    { type: "article", title: "Arrays in 8086 Assembly", url: "https://www.geeksforgeeks.org/8086-program-to-find-the-largest-number-in-an-array/", source: "GeeksforGeeks" },
    { type: "article", title: "XLAT Instruction", url: "https://www.felixcloutier.com/x86/xlat:xlatb", source: "x86 Reference" },
    { type: "video", title: "Array Operations in Assembly", url: "https://www.youtube.com/watch?v=75gBFiFtAb8", source: "YouTube" },
    { type: "article", title: "Bubble Sort in 8086 Assembly", url: "https://www.geeksforgeeks.org/8086-program-to-sort-an-integer-array-in-ascending-order/", source: "GeeksforGeeks" }
  ],
  eli5: "Imagine you have a row of cubbyholes in your classroom, each labeled with a number. That is an array. To find something, you start at cubbyhole 0 and look at each one in order — that is traversal with SI. A lookup table is like a poster on the wall that says 'If it is Monday, wear blue. If Tuesday, wear red...' Instead of deciding, you just look it up. XLAT is pointing at the poster with your finger (index in AL) and reading the answer instantly.",
  codeWalkthrough: [
    "arr DB 34, 12, 78, ... — define 9 bytes in consecutive memory. The label 'arr' marks the starting offset",
    "arr_len EQU 9 — constant for array length, used everywhere to avoid magic numbers",
    "Find max loop: initialize AL with the first element, then compare with each remaining element using JAE to skip if current max is already >= element",
    "Reverse loop: SI starts at the beginning of arr, DI starts at the end of rev_arr. Copy [SI] to [DI], then SI moves forward while DI moves backward",
    "ADD DI, arr_len - 1 — positions DI at the last byte of rev_arr (offset 8 from start for a 9-element array)",
    "print_num divides by 100 to get the hundreds digit, then by 10 to get the tens digit, and the ones are what remains",
    "Each digit is converted to ASCII by adding 30h and printed with DOS function 02h",
    "skip_hundreds / skip_tens — suppress leading zeros by checking if the digit is 0 before printing"
  ],
  bugChallenge: {
    code: "LEA SI, word_arr\nMOV CX, 5\nXOR AX, AX\nadd_loop:\n  ADD AX, [SI]\n  INC SI\n  LOOP add_loop",
    hint: "What is the size of each element in a word array, and how far does INC SI move?",
    answer: "Bug: INC SI only moves 1 byte, but word_arr has 2-byte (word) elements. The second iteration reads the second byte of element 0 and the first byte of element 1 — a misaligned read. Fix: replace INC SI with ADD SI, 2 to advance by a full word."
  },
  difficulty: "intermediate",
  prereqs: [30, 27]
},
// Lesson 32
{
  id: 32,
  title: "Debugging Registers, Flags, and Memory",
  subtitle: "Find and fix bugs like a detective — single-step, inspect, and trace your 8086 programs",
  analogy: "Debugging is like being a detective at a crime scene (buggy program). Single-stepping is examining evidence one piece at a time. Registers are the suspect's pockets — you check what they are carrying after each step. Memory is the crime scene — you scan it for clues. Flags are the suspect's facial expressions — they reveal hidden truths (was there a carry? did the result go negative?).",
  points: [
    { t: "Single-Stepping (Trace Mode)", d: "Single-stepping executes one instruction at a time, pausing after each. This lets you see exactly how each instruction changes registers, flags, and memory. In emu8086, click the 'single step' button (or press F8). In DEBUG.COM, use the T (Trace) command.", code: "; In emu8086: press F8 to step\n; Watch each instruction's effect:\nMOV AX, 5    ; after step: AX=0005\nADD AX, 3    ; after step: AX=0008, ZF=0\nSUB AX, 8    ; after step: AX=0000, ZF=1" },
    { t: "Breakpoints", d: "A breakpoint pauses execution at a specific instruction without single-stepping through everything before it. Set a breakpoint at the interesting code, run at full speed to reach it, then single-step from there. In emu8086, click the line number to toggle a breakpoint.", code: "; Set breakpoint at the line you want to inspect\nMOV CX, 1000\nmy_loop:\n  DEC CX\n  ; ... lots of iterations ...\n  LOOP my_loop\n; Set breakpoint HERE to skip the loop\nMOV AX, [result]  ; <-- breakpoint" },
    { t: "Watching Registers", d: "After each step, check all register values. Look for unexpected zeros, incorrect values, overflow indicators, and segment register issues. In emu8086, the register panel updates in real-time. Changed values are highlighted.", code: "; After executing:\nMOV AX, FFFFh    ; AX = FFFF\nADD AX, 1        ; AX = 0000 (overflow!)\n; Check: CF=1 (carry), ZF=1 (zero result)\n; If you expected AX=10000h, the 16-bit\n; register overflowed — that is the bug" },
    { t: "Flag Analysis", d: "Flags reveal what really happened during arithmetic and logic operations. ZF=1 means result was zero. CF=1 means unsigned overflow/borrow. SF=1 means result was negative. OF=1 means signed overflow. Always check flags after CMP, ADD, SUB operations.", code: "; Scenario: Why does my JG not jump?\nMOV AX, 7FFFh    ; 32767 (max positive)\nADD AX, 1        ; AX = 8000h (-32768!)\n; OF=1 (signed overflow), SF=1 (negative)\n; JG checks SF, OF, ZF — it sees negative\n; That is why JG does not jump" },
    { t: "Memory Dump Inspection", d: "View raw memory contents in hexadecimal. In emu8086, use the memory viewer to see bytes at any address. Compare expected vs actual values in your data segment. Watch for little-endian byte ordering — 1234h is stored as 34h, 12h.", code: "; If you stored:\nMOV WORD PTR [100h], 1234h\n; Memory dump at 0100:\n;   34 12\n; (little-endian: low byte first)\n; If you see 12 34, something is wrong" },
    { t: "Common Bug: Wrong Segment", d: "If your program reads garbage instead of your data, DS probably points to the wrong segment. Always verify DS after initialization. In emu8086, check that DS matches the data segment value shown in the segment panel.", code: "; Bug: forgot to initialize DS\n.CODE\nMAIN PROC\n  ; MOV AX, @DATA   <-- MISSING!\n  ; MOV DS, AX       <-- MISSING!\n  MOV AX, [myvar]   ; reads from wrong segment\n  ; Fix: add the DS initialization" },
    { t: "Common Bug: Off-by-One in Loops", d: "LOOP decrements CX THEN checks for zero. If CX starts at 0, it wraps to FFFFh and runs 65535 times. Always guard with JCXZ before LOOP. Also verify array index bounds — accessing array[N] in an N-element array reads past the end.", code: "; Bug: CX might be 0\nMOV CX, [count]   ; count could be 0!\nmy_loop:\n  ; ... process ...\n  LOOP my_loop\n; Fix:\nMOV CX, [count]\nJCXZ skip         ; guard against CX=0\nmy_loop:\n  ; ... process ...\n  LOOP my_loop\nskip:" },
    { t: "Common Bug: Stack Imbalance", d: "Every PUSH must have a matching POP. If you push 3 values but pop 2, the stack is corrupted — RET will pop the wrong address and jump to garbage. Count your PUSHes and POPs carefully, especially in procedures.", code: "; Bug: unbalanced stack\nmy_proc PROC\n  PUSH AX\n  PUSH BX\n  PUSH CX         ; 3 pushes\n  ; ... work ...\n  POP CX\n  POP BX           ; only 2 pops!\n  RET              ; pops AX as return address!\nmy_proc ENDP\n; Fix: add POP AX before RET" },
    { t: "Common Bug: Unsigned vs Signed Confusion", d: "Using JA/JB (unsigned) when you should use JG/JL (signed), or vice versa, causes logic errors. FFFFh is greater than 0 unsigned (65535 > 0) but less than 0 signed (-1 < 0). Match the jump type to your data interpretation.", code: "; Data is signed temperatures: -5, 10, -3, 20\ntemps DB 0FBh, 0Ah, 0FDh, 14h\n; Bug: using JA to find max (unsigned)\n; FFBh = 251 unsigned, seems largest\n; Fix: use JG for signed comparison\n; Then 20 (14h) is correctly the max" },
    { t: "Using DEBUG.COM", d: "DOS DEBUG.COM is a basic command-line debugger. Commands: R (display registers), T (trace/single-step), G (go/run), D (dump memory), U (unassemble), A (assemble), E (enter bytes). It works directly with machine code — no labels, just addresses.", code: "; DEBUG session example:\n; -R          (show all registers)\n; -T          (execute one instruction)\n; -D DS:0000  (dump memory at DS:0000)\n; -U CS:0100  (unassemble code at CS:0100)\n; -G 0110     (run until offset 0110)\n; -Q          (quit debug)" }
  ],
  whatIs: "Debugging 8086 programs means systematically inspecting CPU state — registers, flags, memory, and stack — to find where actual behavior diverges from expected behavior. Single-stepping executes one instruction at a time. Breakpoints skip to the interesting code. Flag analysis reveals arithmetic edge cases. Memory dumps verify data layout. Mastering these techniques turns opaque bugs into clear root causes.",
  realWorld: "In industry, embedded engineers debug microprocessors using JTAG probes that provide single-step and memory inspection on real hardware. Reverse engineers use debuggers (OllyDbg, x64dbg) to analyze unknown binaries instruction by instruction. Boot loader developers debug pre-OS code where no printf exists — only register and memory inspection. These skills are timeless.",
  code: `; Program: Demonstrates common bugs and how to catch them
; Run this in emu8086, single-stepping to see each issue
.MODEL SMALL
.STACK 100h
.DATA
  values DB 200, 150, 100, 50, 25
  vcount EQU 5
  result DW ?
  msg    DB 'Debug Demo$'

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

  ; === Test 1: Unsigned overflow ===
  MOV AL, 200
  ADD AL, 100       ; AL = 300? No! AL = 44 (300-256)
  ; Step here and check: AL=2Ch, CF=1
  ; CF=1 tells you there was a carry out

  ; === Test 2: Signed overflow ===
  MOV AL, 127       ; max positive signed byte
  ADD AL, 1         ; AL = 128 = -128 signed!
  ; Step here: AL=80h, OF=1, SF=1
  ; OF=1 tells you signed overflow occurred

  ; === Test 3: Sum array (correct way) ===
  LEA SI, values
  XOR AX, AX        ; clear sum
  MOV CX, vcount
  JCXZ no_data      ; guard!

sum_loop:
  MOV BL, [SI]      ; load byte
  XOR BH, BH        ; zero-extend to word
  ADD AX, BX        ; add to word-size sum
  INC SI
  LOOP sum_loop
  ; AX should be 200+150+100+50+25 = 525
  ; Watch AX grow each iteration

no_data:
  MOV [result], AX

  ; === Test 4: Verify memory ===
  ; After execution, check memory at 'result'
  ; Should see: 0D 02 (525 = 020Dh, little-endian)

  MOV AH, 4Ch
  INT 21h
MAIN ENDP
END MAIN`,
  funFact: "The 8086 has a special Trap Flag (TF) that enables single-stepping at the hardware level. When TF=1, the CPU automatically generates an INT 1 after every instruction. Debuggers set TF and install an INT 1 handler to gain control after each step. This same mechanism works on modern x86 processors — your favorite debugger still uses TF internally.",
  quiz: [
    { q: "What does the Carry Flag (CF=1) indicate after an ADD instruction?", opts: ["The result is negative", "The result overflowed the unsigned range of the register", "The result is zero", "A signed overflow occurred"], ans: 1 },
    { q: "In emu8086, how do you execute exactly one instruction?", opts: ["Click Run", "Press F5", "Click Single Step (F8)", "Click Reset"], ans: 2 },
    { q: "If RET jumps to a garbage address, what is the most likely cause?", opts: ["The code segment is corrupted", "The stack is imbalanced — PUSHes and POPs do not match", "The program ran out of memory", "The instruction cache is invalid"], ans: 1 },
    { q: "Why does MOV AL, 200 / ADD AL, 100 result in AL=44 instead of 300?", opts: ["The assembler truncates the value", "AL is 8 bits, max 255. 300-256=44, and CF is set to indicate the carry", "ADD does not work with values over 100", "The result is stored in AH"], ans: 1 },
    { q: "What debugging technique should you use first when your program 'does nothing'?", opts: ["Rewrite the entire program", "Single-step from the beginning to see where execution goes wrong", "Add more data definitions", "Change all JMP instructions to NOPs"], ans: 1 }
  ],
  challenge: "Take this buggy program and fix all the errors using single-stepping in emu8086: It should sum an array of 5 words and print the result, but it (1) forgets to initialize DS, (2) uses INC SI instead of ADD SI, 2 for a word array, (3) has an unbalanced stack in the print procedure, and (4) uses JA instead of JG for signed comparison.",
  resources: [
    { type: "article", title: "Debugging 8086 Programs", url: "https://www.geeksforgeeks.org/debugging-in-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "article", title: "x86 Flags Register", url: "https://en.wikipedia.org/wiki/FLAGS_register", source: "Wikipedia" },
    { type: "video", title: "emu8086 Debugging Tutorial", url: "https://www.youtube.com/watch?v=KgeFMnhZuGs", source: "YouTube" },
    { type: "article", title: "DEBUG.COM Commands", url: "https://en.wikipedia.org/wiki/DEBUG_(command)", source: "Wikipedia" }
  ],
  eli5: "Imagine you are baking a cake but it comes out wrong. Debugging is going back and checking each step: Did you use sugar or salt? (inspect registers) Did you set the oven to the right temperature? (check flags) Did you pour the batter into the right pan? (inspect memory) Single-stepping is doing ONE step at a time and checking the result before moving on. A breakpoint is saying 'I know steps 1-5 are fine, let me skip to step 6 and watch from there.'",
  codeWalkthrough: [
    "Test 1: MOV AL, 200 / ADD AL, 100 — AL is 8 bits, so 300 wraps to 44 (300 mod 256). CF=1 signals the unsigned overflow",
    "Test 2: MOV AL, 127 / ADD AL, 1 — 127 is the max positive signed byte. Adding 1 gives 128 (80h), which is -128 in signed. OF=1 signals signed overflow",
    "JCXZ no_data — guard before the loop. If vcount were 0, this prevents the loop from running 65535 times",
    "XOR BH, BH — zero-extends BL to BX before adding. Without this, random data in BH corrupts the sum",
    "ADD AX, BX — accumulates in a 16-bit register to handle sums over 255 (our sum is 525)",
    "After the loop, result should be 020Dh (525). In memory it appears as 0D 02 due to little-endian byte order",
    "At each step in emu8086, compare your expected register values with actual values. Any discrepancy is a bug"
  ],
  bugChallenge: {
    code: "; Sum should be 150 (50+50+50)\n.DATA\n  vals DW 50, 50, 50\n.CODE\nMAIN PROC\n  MOV CX, 3\n  LEA SI, vals\n  XOR AX, AX\nadd_loop:\n  ADD AX, [SI]\n  INC SI\n  LOOP add_loop\n  MOV AH, 4Ch\n  INT 21h\nMAIN ENDP\nEND MAIN",
    hint: "Three bugs: segment initialization, index increment size, and something you need to check with a memory dump.",
    answer: "Bug 1: Missing MOV AX, @DATA / MOV DS, AX — DS does not point to .DATA. Bug 2: INC SI moves only 1 byte, but DW elements are 2 bytes — use ADD SI, 2. Bug 3: After fixing, verify with memory dump that vals contains 32 00 32 00 32 00 (50 = 0032h, little-endian)."
  },
  difficulty: "intermediate",
  prereqs: [30]
},
// Lesson 33
{
  id: 33,
  title: "Stack, PUSH/POP, and Stack Frames",
  subtitle: "Master the hidden workhorse of every program — the stack that powers calls, returns, and local storage",
  analogy: "The stack is like a spring-loaded plate dispenser in a cafeteria. You push plates (data) onto the top, and you can only take (pop) the top plate — last in, first out (LIFO). The spring (SP) automatically moves down when you add a plate and up when you remove one. You cannot reach into the middle. A stack frame is like putting a divider between one customer's plates and the next — BP marks where your plates begin.",
  points: [
    { t: "Stack Segment and SS:SP", d: "The stack lives in the Stack Segment (SS). SP (Stack Pointer) always points to the top of the stack (the last item pushed). SS:SP together form the 20-bit physical address of the stack top. The linker initializes SS and SP based on the .STACK directive.", code: "; With .STACK 100h:\n; SS = stack segment base\n; SP = 0100h (top of 256-byte stack)\n; Stack occupies SS:0000 through SS:00FFh\n; SP starts at the 'bottom' of memory and\n; grows upward (toward lower addresses)" },
    { t: "Stack Grows Downward", d: "On the 8086, the stack grows from high addresses to low addresses. PUSH decreases SP by 2 (word size), then writes the value. POP reads the value at SP, then increases SP by 2. This means SP decreases as the stack fills up.", code: "; SP starts at 0100h (256)\nPUSH AX         ; SP = 00FEh, [SS:00FE] = AX\nPUSH BX         ; SP = 00FCh, [SS:00FC] = BX\nPUSH CX         ; SP = 00FAh, [SS:00FA] = CX\n; Stack growing downward:\n; 00FA: CX  <-- SP (top)\n; 00FC: BX\n; 00FE: AX" },
    { t: "PUSH Instruction", d: "PUSH decrements SP by 2, then stores a 16-bit value at SS:SP. You can push general registers (AX-DX, SI, DI, BP), segment registers (CS, DS, ES, SS), flags (PUSHF), and memory/immediate operands. On the 8086, PUSH always operates on words.", code: "PUSH AX          ; save AX on stack\nPUSH DS          ; save data segment\nPUSH [myvar]     ; save a memory word\nPUSHF            ; save flags register\n; Each PUSH: SP = SP - 2, then store" },
    { t: "POP Instruction", d: "POP reads the 16-bit value at SS:SP, stores it in the destination, then increments SP by 2. POP restores values in reverse order of PUSH. You can POP into general registers, segment registers (except CS), and memory operands.", code: "POP AX           ; restore AX from stack\nPOP DS           ; restore data segment\nPOP [myvar]      ; restore to memory\nPOPF             ; restore flags register\n; Each POP: read [SS:SP], then SP = SP + 2" },
    { t: "LIFO Order Matters", d: "Since the stack is Last-In-First-Out, POP must be in reverse order of PUSH to get the correct values back. PUSH AX / PUSH BX requires POP BX / POP AX. Getting the order wrong swaps the register values — a subtle and common bug.", code: "; Correct save/restore:\nPUSH AX          ; save AX first\nPUSH BX          ; save BX second\n; ... work ...\nPOP BX           ; restore BX first (LIFO)\nPOP AX           ; restore AX second\n\n; WRONG order:\n; POP AX          ; gets BX's value!\n; POP BX          ; gets AX's value!" },
    { t: "PUSHF and POPF", d: "PUSHF pushes the entire 16-bit FLAGS register onto the stack. POPF pops it back. This saves and restores all arithmetic flags (CF, ZF, SF, OF, PF, AF) plus control flags (DF, IF, TF). Essential for preserving flag state across procedure calls.", code: "PUSHF            ; save all flags\n; Do operations that change flags...\nADD AX, BX       ; modifies CF, ZF, SF, OF\nCMP CX, DX       ; modifies flags again\nPOPF             ; restore original flags\n; Flags are back to pre-PUSHF state" },
    { t: "Stack Frames with BP", d: "A stack frame is the stack region owned by one procedure call. BP (Base Pointer) anchors the frame. The standard prologue is PUSH BP / MOV BP, SP. Now [BP+4] is the first parameter, [BP+2] is the return address, and [BP-N] are local variables.", code: "; Stack frame layout (near CALL):\nmy_proc PROC NEAR\n  PUSH BP          ; save caller's BP\n  MOV BP, SP       ; BP = current stack top\n  SUB SP, 4        ; allocate 2 local words\n  ; [BP+6] = 2nd parameter\n  ; [BP+4] = 1st parameter\n  ; [BP+2] = return address (IP)\n  ; [BP+0] = saved old BP\n  ; [BP-2] = local variable 1\n  ; [BP-4] = local variable 2" },
    { t: "Allocating Local Variables on Stack", d: "SUB SP, n after the prologue reserves n bytes for local variables. These are accessed at negative offsets from BP: [BP-2], [BP-4], etc. The epilogue (MOV SP, BP / POP BP) deallocates them. This is how C local variables work.", code: "my_func PROC NEAR\n  PUSH BP\n  MOV BP, SP\n  SUB SP, 6        ; 3 local words\n  ; [BP-2] = local1\n  ; [BP-4] = local2\n  ; [BP-6] = local3\n  MOV WORD PTR [BP-2], 0  ; local1 = 0\n  ; ... use locals ...\n  MOV SP, BP       ; deallocate locals\n  POP BP\n  RET\nmy_func ENDP" },
    { t: "Nested Calls and Stack Growth", d: "When procedure A calls procedure B which calls procedure C, three frames stack on top of each other. Each CALL pushes a return address, each prologue pushes BP and allocates locals. The stack can grow quite deep — stack overflow occurs if SP decreases past the stack segment.", code: "; Stack during nested calls:\n; [high addr] main's frame\n;             proc_A's return address\n;             proc_A's saved BP\n;             proc_A's locals\n;             proc_B's return address\n;             proc_B's saved BP\n;             proc_B's locals\n; [low addr]  <-- SP (top of stack)" },
    { t: "Stack Overflow and Protection", d: "If the stack grows beyond its allocated size, it overwrites other data or code — a stack overflow. The .STACK directive determines the size. For deep recursion or many local variables, increase the stack size. Always monitor SP during debugging.", code: "; Dangerous recursion without base case:\nbad_recurse PROC\n  PUSH AX\n  CALL bad_recurse  ; SP decreases forever\n  POP AX\n  RET\nbad_recurse ENDP\n; SP eventually underflows past SS:0000\n; Overwrites memory — hard crash" }
  ],
  whatIs: "The stack is a Last-In-First-Out (LIFO) memory structure located in the Stack Segment (SS), managed by the Stack Pointer (SP). PUSH decrements SP and stores a word; POP loads a word and increments SP. The stack powers procedure calls (saving return addresses), register preservation, parameter passing, and local variable storage. Stack frames, anchored by BP, give procedures structured access to parameters and locals.",
  realWorld: "Every function call in every programming language uses a stack frame. When you see a 'stack trace' in an error message, that is the chain of BP-linked stack frames from nested calls. Buffer overflow attacks exploit stack layout to overwrite return addresses. Stack size limits in embedded systems (often just 256-512 bytes) force careful design. Understanding the stack is essential for debugging, security, and systems programming.",
  code: `; Program: Demonstrate stack operations and stack frames
.MODEL SMALL
.STACK 200h
.DATA
  val1 DW 10
  val2 DW 20
  msg  DB 'Result: $'

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

  ; --- Show PUSH/POP ---
  MOV AX, 1111h
  MOV BX, 2222h
  PUSH AX           ; stack: 1111
  PUSH BX           ; stack: 2222, 1111
  ; Swap via stack
  POP AX            ; AX = 2222, stack: 1111
  POP BX            ; BX = 1111, stack: empty
  ; Now AX=2222h, BX=1111h (swapped!)

  ; --- Call procedure with stack params ---
  PUSH [val2]       ; push 20
  PUSH [val1]       ; push 10
  CALL add_words    ; result in AX
  ; AX = 30

  ; --- Display result ---
  MOV AH, 09h
  LEA DX, msg
  INT 21h
  CALL print_ax     ; display 30

  MOV AH, 4Ch
  INT 21h
MAIN ENDP

; Procedure: add two words passed on stack
; Returns sum in AX
add_words PROC NEAR
  PUSH BP
  MOV BP, SP
  ; [BP+0] = saved BP
  ; [BP+2] = return IP
  ; [BP+4] = first param (val1 = 10)
  ; [BP+6] = second param (val2 = 20)

  MOV AX, [BP+4]     ; AX = 10
  ADD AX, [BP+6]     ; AX = 10 + 20 = 30

  POP BP
  RET 4               ; return and clean 4 bytes of params
add_words ENDP

; Procedure: print AX as unsigned decimal
print_ax PROC NEAR
  PUSH BP
  MOV BP, SP
  SUB SP, 6           ; local buffer for digits
  PUSH BX
  PUSH CX
  PUSH DX

  MOV BX, 10
  XOR CX, CX          ; digit count

extract:
  XOR DX, DX
  DIV BX               ; AX/10, remainder in DX
  PUSH DX              ; save digit
  INC CX
  CMP AX, 0
  JNE extract

display:
  POP DX               ; get digit (reversed order)
  ADD DL, 30h
  MOV AH, 02h
  INT 21h
  LOOP display

  POP DX
  POP CX
  POP BX
  MOV SP, BP
  POP BP
  RET
print_ax ENDP
END MAIN`,
  funFact: "The famous 'stack smashing' security attack was first formally described by Aleph One in 1996 in the paper 'Smashing the Stack for Fun and Profit.' The attack overwrites the return address on the stack to redirect execution to attacker-controlled code. Modern protections like stack canaries, ASLR, and DEP all exist because the stack frame layout — the same layout you are learning now — is fundamentally exploitable.",
  quiz: [
    { q: "In which direction does the 8086 stack grow?", opts: ["From low addresses to high (upward)", "From high addresses to low (downward)", "It does not move — data is written in place", "Alternating directions"], ans: 1 },
    { q: "After PUSH AX / PUSH BX / PUSH CX, what does the first POP retrieve?", opts: ["AX (first pushed)", "BX (middle)", "CX (last pushed — LIFO)", "The flags register"], ans: 2 },
    { q: "In a near CALL stack frame with PUSH BP / MOV BP, SP, where is the first parameter?", opts: ["[BP-2]", "[BP+0]", "[BP+2]", "[BP+4]"], ans: 3 },
    { q: "What does RET 4 do differently from a plain RET?", opts: ["It waits 4 clock cycles", "After popping the return address, it adds 4 to SP to clean up parameters", "It returns to the 4th procedure on the stack", "It pops 4 registers"], ans: 1 },
    { q: "What causes a stack overflow?", opts: ["Too many variables in .DATA segment", "SP decreases past the allocated stack space, overwriting other memory", "Using POP without PUSH", "Calling INT 21h too many times"], ans: 1 }
  ],
  challenge: "Write a recursive Fibonacci procedure that uses proper stack frames. The procedure should accept n in AX and return fib(n) in AX. Use the stack for saving registers and the recursive state. Test with n=10 (result should be 55). Monitor SP in emu8086 to see the stack grow and shrink.",
  resources: [
    { type: "article", title: "Stack in 8086 Microprocessor", url: "https://www.geeksforgeeks.org/stack-in-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "article", title: "x86 Stack Frame Layout", url: "https://en.wikipedia.org/wiki/Call_stack", source: "Wikipedia" },
    { type: "video", title: "PUSH, POP, and Stack Frames Explained", url: "https://www.youtube.com/watch?v=5iQkGkOFD0Y", source: "YouTube" },
    { type: "article", title: "Smashing the Stack for Fun and Profit", url: "https://insecure.org/stf/smashstack.html", source: "Phrack Magazine" }
  ],
  eli5: "Imagine a stack of Lego bricks. You can only put a new brick on top (PUSH) and take a brick from the top (POP). If you put on a red brick, then a blue one, then a green one — when you take one off, you get the green one first (the last one you added). The stack pointer is your finger pointing at the top brick. A stack frame is like wrapping a rubber band around 'your' bricks so you know which ones belong to you when multiple people are stacking bricks.",
  codeWalkthrough: [
    "PUSH AX / PUSH BX — pushes two values. SP decreases by 2 each time. Stack now has 1111h (bottom) and 2222h (top)",
    "POP AX / POP BX — pops in LIFO order. AX gets 2222h (top), BX gets 1111h. This swaps the register values using the stack",
    "PUSH [val2] / PUSH [val1] — push function parameters right-to-left (C calling convention). val1 is on top",
    "CALL add_words — pushes the return address (IP of next instruction) onto the stack, then jumps to add_words",
    "PUSH BP / MOV BP, SP — standard prologue: save the caller's BP and establish the new frame. BP is now our anchor",
    "[BP+4] and [BP+6] — access parameters. +4 skips saved BP (2 bytes) and return IP (2 bytes) to reach first param",
    "RET 4 — pops the return address AND adds 4 to SP, removing both pushed parameters. Called 'callee cleanup'",
    "In print_ax: SUB SP, 6 allocates 6 bytes of local space (not used in this version but demonstrates the pattern)",
    "The digit extraction loop divides AX by 10 repeatedly, pushing each remainder (digit) onto the stack",
    "The display loop pops digits in reverse order (most significant first) and converts each to ASCII for printing"
  ],
  bugChallenge: {
    code: "my_proc PROC NEAR\n  PUSH BP\n  MOV BP, SP\n  MOV AX, [BP+2]   ; read first parameter\n  ADD AX, [BP+4]   ; add second parameter\n  POP BP\n  RET\nmy_proc ENDP",
    hint: "What is at [BP+2]? Draw out the stack frame: what sits between BP and the parameters?",
    answer: "Bug: [BP+2] is the return address, not the first parameter! The stack layout is: [BP+0]=saved BP, [BP+2]=return IP, [BP+4]=first param, [BP+6]=second param. Fix: use [BP+4] for the first param and [BP+6] for the second. Also, should use RET 4 if the procedure is responsible for cleaning up the 4 bytes of parameters."
  },
  difficulty: "intermediate",
  prereqs: [21, 11]
},
// Lesson 34
{
  id: 34,
  title: "Interrupt Basics and the Interrupt Vector Table",
  subtitle: "Understand how the 8086 responds to events — the interrupt system that connects software to hardware",
  analogy: "Interrupts are like a doorbell system in an apartment building. Each apartment has a numbered buzzer (interrupt type 0-255). When someone presses buzzer 33 (INT 21h), the intercom (CPU) looks up apartment 33 in the directory (Interrupt Vector Table) to find the address. It pauses whatever it was doing (saves state), goes to that apartment (ISR), handles the visitor, and then returns to resume what it was doing. The directory at the lobby entrance is always at the same place — address 0000:0000.",
  points: [
    { t: "What is an Interrupt?", d: "An interrupt is a signal that causes the CPU to stop its current work, save its state, and execute a specific routine called an Interrupt Service Routine (ISR) or handler. After the ISR completes, the CPU resumes the interrupted program exactly where it left off.", code: "; Normal flow:\nMOV AX, 5       ; executing...\nADD AX, 3       ; executing...\n; --- INTERRUPT occurs here ---\n; CPU saves state, jumps to ISR\n; ISR handles the event\n; IRET returns to the next instruction\nMOV BX, AX      ; resumes here" },
    { t: "Interrupt Type Number", d: "Each interrupt has a type number from 0 to 255. This number identifies which ISR to call. Some are fixed by Intel (0 = divide error, 1 = single-step, 2 = NMI, 4 = overflow). Others are assigned by the system (21h = DOS services, 10h = BIOS video).", code: "; Common interrupt type numbers:\n; Type 0  — Divide by zero error\n; Type 1  — Single-step (debug)\n; Type 2  — NMI (non-maskable)\n; Type 3  — Breakpoint (INT 3)\n; Type 4  — Overflow (INTO)\n; Type 10h — BIOS video services\n; Type 16h — BIOS keyboard services\n; Type 21h — DOS function calls" },
    { t: "The Interrupt Vector Table (IVT)", d: "The IVT occupies the first 1024 bytes of memory at physical address 00000h to 003FFh. It contains 256 entries (vectors), one per interrupt type. Each vector is 4 bytes: 2 bytes for the offset (IP) and 2 bytes for the segment (CS) of the ISR.", code: "; IVT layout in memory:\n; 0000:0000 — Vector 0: IP_low, IP_high, CS_low, CS_high\n; 0000:0004 — Vector 1: IP_low, IP_high, CS_low, CS_high\n; 0000:0008 — Vector 2: ...\n; ...\n; 0000:03FC — Vector 255: ...\n; Total: 256 vectors x 4 bytes = 1024 bytes" },
    { t: "Vector Address Calculation", d: "To find the vector for interrupt type N, multiply N by 4. The result is the memory address where the 4-byte vector (IP:CS) is stored. Vector for INT 21h: 21h x 4 = 84h, so the ISR address is at 0000:0084.", code: "; Calculate vector address for INT 21h:\n; Type number = 21h = 33 decimal\n; Vector address = 33 x 4 = 132 = 0084h\n; At 0000:0084: offset (2 bytes)\n; At 0000:0086: segment (2 bytes)\n;\n; Example: if [0000:0084] = 1234h\n;          and [0000:0086] = F000h\n; Then INT 21h jumps to F000:1234" },
    { t: "How INT n Works (Step by Step)", d: "When the CPU executes INT n: (1) Push FLAGS onto stack, (2) Clear IF and TF (disable interrupts and single-step), (3) Push CS, (4) Push IP, (5) Load CS:IP from IVT entry n*4. The ISR now runs. IRET reverses the process.", code: "; INT 21h execution sequence:\n; 1. PUSH FLAGS     (SP -= 2)\n; 2. Clear IF, TF   (no nested interrupts)\n; 3. PUSH CS        (SP -= 2)\n; 4. PUSH IP        (SP -= 2, IP of next instr)\n; 5. CS:IP = [0000:0084]  (jump to ISR)\n;\n; IRET execution:\n; 1. POP IP\n; 2. POP CS\n; 3. POP FLAGS      (restore IF and TF)" },
    { t: "IRET — Interrupt Return", d: "IRET is the ISR's return instruction. It pops IP, CS, and FLAGS from the stack (in that order), restoring the exact state before the interrupt. Regular RET only pops IP (or IP+CS for far). IRET additionally restores the flags, including IF.", code: "; ISR structure:\nmy_isr PROC FAR\n  PUSH AX         ; save registers used\n  PUSH DS\n  ; ... handle the interrupt ...\n  POP DS          ; restore registers\n  POP AX\n  IRET            ; pop IP, CS, FLAGS — resume\nmy_isr ENDP" },
    { t: "Dedicated Interrupts (0-4)", d: "Intel reserves types 0-4 for specific CPU conditions: Type 0 (divide error — DIV overflow), Type 1 (single-step — TF=1), Type 2 (NMI — non-maskable hardware), Type 3 (breakpoint — special 1-byte INT 3), Type 4 (INTO — overflow flag set).", code: "; Type 0: triggered by division overflow\nMOV AX, FFFFh\nMOV BL, 1\nDIV BL           ; quotient > 255, triggers INT 0\n\n; Type 3: breakpoint (debugger trap)\nINT 3            ; 1-byte opcode: CCh\n\n; Type 4: overflow check\nADD AL, 200\nINTO             ; triggers INT 4 if OF=1" },
    { t: "Reading an IVT Entry", d: "You can read any IVT entry by pointing a segment register to 0000h and reading the offset and segment at type*4. This reveals where any interrupt handler lives in memory.", code: "; Read the INT 21h vector\nXOR AX, AX\nMOV ES, AX         ; ES = 0000h (IVT segment)\nMOV BX, 84h        ; 21h * 4 = offset in IVT\nMOV AX, ES:[BX]    ; AX = ISR offset (IP)\nMOV DX, ES:[BX+2]  ; DX = ISR segment (CS)\n; DX:AX is the address of the INT 21h handler" },
    { t: "Setting a Custom IVT Entry", d: "To install your own ISR, write your handler's CS:IP into the appropriate IVT slot. Disable interrupts (CLI) while modifying the IVT to prevent a half-updated vector from being used. Re-enable with STI after.", code: "; Install custom handler for INT 60h\n; (60h-67h are user-available)\nCLI                  ; disable interrupts\nXOR AX, AX\nMOV ES, AX\nMOV WORD PTR ES:[180h], OFFSET my_handler\n; 60h * 4 = 180h\nMOV WORD PTR ES:[182h], SEG my_handler\nSTI                  ; re-enable interrupts\n; Now INT 60h calls my_handler" },
    { t: "IVT in Context — System Boot", d: "During boot, the BIOS initializes the IVT with pointers to BIOS service routines (INT 10h for video, INT 13h for disk, INT 16h for keyboard). DOS then adds its own entries (INT 21h for DOS services). Programs can hook (redirect) these vectors to intercept or extend system calls.", code: "; Boot sequence and IVT:\n; 1. Power on -> CPU starts at FFFF:0000\n; 2. BIOS ROM code runs\n; 3. BIOS fills IVT: INT 10h, 13h, 16h, etc.\n; 4. BIOS loads boot sector -> DOS starts\n; 5. DOS fills IVT: INT 21h, 22h, 23h, 24h\n; 6. User program can read/modify IVT entries" }
  ],
  whatIs: "An interrupt is a mechanism that causes the 8086 to suspend its current program, save the flags, CS, and IP on the stack, and jump to an Interrupt Service Routine (ISR) identified by a type number (0-255). The Interrupt Vector Table (IVT) occupies the first 1024 bytes of memory (0000:0000 to 0000:03FF) and contains 256 four-byte entries, each holding the CS:IP address of an ISR. IRET returns from the ISR by restoring IP, CS, and FLAGS.",
  realWorld: "The interrupt system is the backbone of all I/O in computing. Every keystroke generates a hardware interrupt. Every disk read completes via an interrupt. Your OS scheduler uses a timer interrupt to switch between processes. Modern x86 systems still use an evolved version of this same IVT concept (the IDT — Interrupt Descriptor Table). Understanding interrupts is essential for OS development, driver writing, and embedded systems.",
  code: `; Program: Read and display the INT 21h vector from the IVT
; Then install a custom INT 60h handler and invoke it
.MODEL SMALL
.STACK 100h
.DATA
  msg1 DB 'INT 21h vector: $'
  msg2 DB 0Dh, 0Ah, 'Custom INT 60h called!$'
  msg3 DB 0Dh, 0Ah, 'Calling INT 60h...$'
  hexch DB '0123456789ABCDEF'

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

  ; --- Read INT 21h vector from IVT ---
  MOV AH, 09h
  LEA DX, msg1
  INT 21h

  XOR AX, AX
  MOV ES, AX            ; ES = 0000 (IVT segment)
  MOV BX, 84h           ; INT 21h: type 21h * 4 = 84h

  MOV DX, ES:[BX+2]     ; segment of INT 21h handler
  CALL print_hex_word    ; display segment

  MOV AH, 02h
  MOV DL, ':'
  INT 21h               ; print colon separator

  MOV DX, ES:[BX]       ; offset of INT 21h handler
  CALL print_hex_word    ; display offset

  ; --- Install custom INT 60h handler ---
  CLI                    ; disable interrupts
  MOV WORD PTR ES:[180h], OFFSET my_int60
  MOV WORD PTR ES:[182h], CS
  STI                    ; re-enable

  ; --- Invoke our custom interrupt ---
  MOV AH, 09h
  LEA DX, msg3
  INT 21h

  INT 60h               ; calls our handler!

  MOV AH, 4Ch
  INT 21h
MAIN ENDP

; Custom ISR for INT 60h
my_int60 PROC FAR
  PUSH AX
  PUSH DX
  PUSH DS

  MOV AX, @DATA
  MOV DS, AX
  MOV AH, 09h
  LEA DX, msg2
  INT 21h

  POP DS
  POP DX
  POP AX
  IRET                   ; return from interrupt
my_int60 ENDP

; Print DX as 4-digit hex
print_hex_word PROC NEAR
  PUSH CX
  PUSH BX
  MOV CX, 4             ; 4 hex digits
  LEA BX, hexch
hex_loop:
  ROL DX, 4             ; rotate top nibble to bottom
  MOV AL, DL
  AND AL, 0Fh           ; isolate nibble
  XLAT                   ; AL = hexch[AL]
  PUSH DX
  MOV DL, AL
  MOV AH, 02h
  INT 21h
  POP DX
  LOOP hex_loop
  POP BX
  POP CX
  RET
print_hex_word ENDP
END MAIN`,
  funFact: "The IVT design was simple but had a major flaw — any program could overwrite any vector, including critical ones like the timer or keyboard. A buggy program could accidentally write to address 0000:0000 and corrupt the divide-by-zero handler. This is one reason the 80286 introduced Protected Mode with a proper Interrupt Descriptor Table (IDT) that has access-level checks.",
  quiz: [
    { q: "Where is the Interrupt Vector Table located in memory?", opts: ["At the end of RAM", "At address 0000:0000 to 0000:03FF (first 1024 bytes)", "In the BIOS ROM", "In the stack segment"], ans: 1 },
    { q: "How do you calculate the IVT address for interrupt type N?", opts: ["N + 4", "N * 4", "N * 2", "N * 256"], ans: 1 },
    { q: "What does the CPU push onto the stack when an interrupt occurs?", opts: ["Only IP", "IP and CS", "FLAGS, CS, then IP (FLAGS pushed first, IP on top)", "All general-purpose registers"], ans: 2 },
    { q: "How does IRET differ from a far RET?", opts: ["IRET also pops the FLAGS register in addition to IP and CS", "IRET is faster", "IRET only pops IP", "There is no difference"], ans: 0 },
    { q: "Why must you use CLI before modifying IVT entries?", opts: ["CLI makes memory writable", "An interrupt could fire during the update, using a half-modified (corrupted) vector", "CLI is required by the assembler syntax", "IVT entries are read-only without CLI"], ans: 1 }
  ],
  challenge: "Write a program that: (1) saves the current INT 1Ch (timer tick) vector, (2) installs your own handler that increments a counter variable on each tick, (3) waits for a keypress, (4) restores the original vector, and (5) displays how many timer ticks occurred while waiting. The timer fires approximately 18.2 times per second.",
  resources: [
    { type: "article", title: "Interrupt Vector Table in 8086", url: "https://www.geeksforgeeks.org/interrupts-in-8086-microprocessor/", source: "GeeksforGeeks" },
    { type: "article", title: "x86 Interrupt System", url: "https://en.wikipedia.org/wiki/Interrupt_vector_table", source: "Wikipedia" },
    { type: "video", title: "8086 Interrupts Explained", url: "https://www.youtube.com/watch?v=GiPFp3NZFY4", source: "YouTube" },
    { type: "article", title: "IVT and ISR Programming", url: "https://wiki.osdev.org/Interrupt_Vector_Table", source: "OSDev Wiki" }
  ],
  eli5: "Imagine you are doing homework. The phone rings (interrupt). You stick a bookmark in your page (save IP), remember which subject you were doing (save CS), and note your mood (save FLAGS). You answer the phone (run the ISR). When the call ends, you pick up your bookmark, open the right textbook, and recall your mood — you continue exactly where you left off (IRET). The phone book that maps numbers to people is the Interrupt Vector Table.",
  codeWalkthrough: [
    "XOR AX, AX / MOV ES, AX — point ES to segment 0000h where the IVT resides",
    "MOV BX, 84h — INT 21h is type 33 decimal (21h). Vector address = 33 * 4 = 132 = 84h",
    "MOV DX, ES:[BX+2] — read the segment part of the INT 21h vector from IVT offset 86h",
    "MOV DX, ES:[BX] — read the offset part of the INT 21h vector from IVT offset 84h",
    "CLI — disable interrupts before modifying the IVT. Without this, a timer interrupt could fire while we have written only half the vector",
    "MOV WORD PTR ES:[180h], OFFSET my_int60 — write our handler's offset into the INT 60h vector (60h * 4 = 180h)",
    "MOV WORD PTR ES:[182h], CS — write the current code segment as the INT 60h handler's segment",
    "STI — re-enable interrupts. The new vector is now complete and safe to use",
    "INT 60h — triggers our custom interrupt. CPU pushes FLAGS/CS/IP, loads CS:IP from IVT[180h], and jumps to my_int60",
    "IRET in my_int60 — pops IP, CS, and FLAGS from the stack, returning to the instruction after INT 60h"
  ],
  bugChallenge: {
    code: "; Install custom INT 60h handler\nMOV ES, 0\nMOV WORD PTR ES:[180h], OFFSET handler\nMOV WORD PTR ES:[182h], CS\nINT 60h\n\nhandler PROC FAR\n  MOV AH, 09h\n  LEA DX, msg\n  INT 21h\n  RET\nhandler ENDP",
    hint: "Three issues: segment register loading, interrupt safety, and how the handler returns.",
    answer: "Bug 1: MOV ES, 0 is illegal — cannot load immediate into segment register. Use XOR AX, AX / MOV ES, AX. Bug 2: CLI is missing before modifying IVT entries. Bug 3: The handler uses RET instead of IRET. Since INT pushes FLAGS, CS, and IP, a regular RET leaves FLAGS on the stack, corrupting the stack and crashing."
  },
  difficulty: "intermediate",
  prereqs: [24, 33]
},
// Lesson 35
{
  id: 35,
  title: "Hardware vs Software Interrupts",
  subtitle: "Distinguish the two interrupt pathways — software INT n and hardware INTR/NMI — and how the CPU handles each",
  analogy: "Software interrupts are like calling room service from your hotel phone (INT n) — you initiate the call deliberately from your program. Hardware interrupts are like the fire alarm going off (INTR/NMI) — the external world forces the CPU to respond. The fire alarm (NMI) cannot be ignored no matter what. The room service phone (INTR) can be silenced with a 'Do Not Disturb' sign (CLI/IF=0). Both lead to someone showing up at your door (ISR), but one you requested and one you did not.",
  points: [
    { t: "Software Interrupts (INT n)", d: "Software interrupts are triggered explicitly by the INT n instruction in the program. The programmer chooses the type number. They are synchronous — they happen at a predictable point in the code. DOS (INT 21h) and BIOS (INT 10h, 13h, 16h) services are all software interrupts.", code: "; Software interrupt examples:\nINT 21h         ; DOS services (you call it)\nINT 10h         ; BIOS video (you call it)\nINT 3           ; debugger breakpoint\nINTO            ; overflow check (INT 4 if OF=1)\n; These happen exactly where you put them" },
    { t: "Hardware Interrupts — INTR Pin", d: "INTR (Interrupt Request) is a physical pin on the 8086 chip. External devices (keyboard, timer, disk) assert this pin to request attention. The CPU checks INTR between instruction executions. If the Interrupt Flag (IF) is set, the CPU acknowledges and services the interrupt.", code: "; Hardware interrupt flow via INTR:\n; 1. Device asserts INTR pin\n; 2. CPU finishes current instruction\n; 3. CPU checks IF flag\n; 4. If IF=1: send INTA (acknowledge)\n; 5. Device sends type number on data bus\n; 6. CPU vectors through IVT[type*4]\n; 7. ISR runs, ends with IRET" },
    { t: "NMI — Non-Maskable Interrupt", d: "NMI is a hardware interrupt that CANNOT be disabled. It always interrupts the CPU, regardless of the IF flag. NMI uses fixed type 2. It is reserved for critical events: memory parity errors, power failure detection, or watchdog timeouts.", code: "; NMI characteristics:\n; - Uses type 2 (IVT address 0000:0008)\n; - Cannot be masked by CLI\n; - Edge-triggered (responds to signal edge)\n; - Used for: power fail, memory errors\n;\n; Even with IF=0 (interrupts disabled),\n; NMI still interrupts the CPU" },
    { t: "IF Flag — CLI and STI", d: "The Interrupt Flag (IF) in the FLAGS register controls whether INTR is recognized. STI (Set Interrupt Flag) enables hardware interrupts (IF=1). CLI (Clear Interrupt Flag) disables them (IF=0). Software interrupts (INT n) and NMI are NOT affected by IF.", code: "CLI              ; IF=0: INTR is ignored\n; Critical section — no hardware interrupts\n; Modify IVT, handle shared data, etc.\nSTI              ; IF=1: INTR is recognized again\n\n; Note: INT 21h still works during CLI\n; Only INTR hardware line is masked" },
    { t: "The Interrupt Sequence (Detailed)", d: "When any interrupt is accepted: (1) Complete current instruction, (2) Push FLAGS, (3) Clear IF and TF, (4) Push CS, (5) Push IP, (6) Load CS:IP from IVT. Clearing IF prevents nested hardware interrupts by default. The ISR can STI if it wants to allow nesting.", code: "; Detailed interrupt sequence:\n; 1. Finish current instruction\n; 2. SP -= 2; [SS:SP] = FLAGS\n; 3. IF = 0, TF = 0\n; 4. SP -= 2; [SS:SP] = CS\n; 5. SP -= 2; [SS:SP] = IP (next instr)\n; 6. IP = [type*4], CS = [type*4+2]\n; 7. ISR begins execution" },
    { t: "INTA — Interrupt Acknowledge", d: "When the CPU accepts an INTR request, it sends two INTA (Interrupt Acknowledge) pulses on the INTA pin. The first pulse tells the device to prepare. The second pulse tells it to put the interrupt type number on the data bus so the CPU knows which IVT entry to use.", code: "; INTA handshake (hardware signals):\n; 1. Device: asserts INTR\n; 2. CPU: sends 1st INTA pulse\n;    (device prepares type number)\n; 3. CPU: sends 2nd INTA pulse\n;    (device puts type on D0-D7)\n; 4. CPU: reads type number from bus\n; 5. CPU: vectors to IVT[type*4]" },
    { t: "Interrupt Priority", d: "When multiple interrupts occur simultaneously, priority determines which is serviced first. The built-in priority order (highest to lowest) is: (1) Internal interrupts (divide error, INT n), (2) NMI, (3) INTR, (4) Single-step (TF). An 8259 PIC chip manages priority among multiple INTR devices.", code: "; Priority hierarchy:\n; 1. Divide error, INT n, INTO  (highest)\n; 2. NMI (non-maskable)\n; 3. INTR (maskable, via 8259 PIC)\n; 4. Single-step trap (TF=1)   (lowest)\n;\n; The 8259 PIC adds 8 levels of\n; hardware priority within INTR" },
    { t: "Software vs Hardware — Key Differences", d: "Software interrupts are programmer-initiated, synchronous, and always execute (not affected by IF). Hardware interrupts are device-initiated, asynchronous (can occur at any time between instructions), and INTR can be masked by IF=0. NMI is the exception — hardware but non-maskable.", code: "; Comparison:\n; Feature        Software    INTR      NMI\n; Initiated by   INT instr   Device    Device\n; When           Predictable Anytime   Anytime\n; Affected by IF No          Yes       No\n; Type source    Instruction Data bus  Fixed (2)\n; Maskable       No          Yes       No" },
    { t: "Nested Interrupts", d: "Since INT automatically clears IF, hardware interrupts are disabled inside an ISR by default. If the ISR issues STI, higher-priority interrupts can nest (interrupt the ISR). NMI can always nest. The stack must be large enough to handle the worst-case nesting depth.", code: "; Default: no hardware nesting\nmy_isr PROC FAR\n  ; IF=0 here (cleared by INT)\n  ; No INTR can interrupt this ISR\n  ; ... handle event ...\n  IRET\nmy_isr ENDP\n\n; With nesting enabled:\nmy_isr2 PROC FAR\n  STI              ; allow higher-priority INTR\n  ; ... longer processing ...\n  CLI              ; disable before cleanup\n  IRET\nmy_isr2 ENDP" },
    { t: "Interrupt Latency", d: "Interrupt latency is the time between an interrupt request and the first instruction of the ISR. It includes: finishing the current instruction, pushing FLAGS/CS/IP, and the IVT lookup. For the 8086, latency varies by the current instruction length — a long MUL or DIV increases latency.", code: "; Latency components:\n; 1. Current instruction completion\n;    (e.g., MUL takes up to 133 clocks)\n; 2. INTA handshake (~8 clocks)\n; 3. Push FLAGS, CS, IP (~10 clocks)\n; 4. IVT read and branch (~8 clocks)\n; Total: ~30 to ~180+ clock cycles\n; At 5 MHz: 6 to 36+ microseconds" }
  ],
  whatIs: "Software interrupts (INT n) are deliberate calls from the program, always executed regardless of the IF flag. Hardware interrupts arrive from external devices via the INTR pin (maskable, controlled by IF) or NMI pin (non-maskable, always serviced). Both trigger the same CPU sequence: push FLAGS, clear IF/TF, push CS:IP, and jump through the IVT. The key differences are: who initiates them, when they can occur, and whether they can be disabled.",
  realWorld: "Your keyboard generates a hardware interrupt (via INTR and the 8259 PIC) every time you press a key. The system timer generates 18.2 interrupts per second for timekeeping. A power failure triggers NMI to give the system a last chance to save data. Meanwhile, every DOS function call your program makes is a software interrupt. Modern systems still use this same two-channel model, just with more sophisticated interrupt controllers (APIC instead of 8259).",
  code: `; Program: Demonstrate software vs hardware interrupt concepts
; Install a custom handler, show IF flag behavior
.MODEL SMALL
.STACK 200h
.DATA
  msg_sw   DB 'Software INT 60h worked!', 0Dh, 0Ah, '$'
  msg_if1  DB 'IF=1 (interrupts enabled)', 0Dh, 0Ah, '$'
  msg_if0  DB 'IF=0 (interrupts disabled)', 0Dh, 0Ah, '$'
  msg_done DB 'Demo complete.$'

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

  ; --- Check and display current IF state ---
  PUSHF              ; push FLAGS
  POP AX             ; AX = FLAGS
  TEST AX, 0200h     ; bit 9 = IF
  JZ  if_clear_1

  MOV AH, 09h
  LEA DX, msg_if1    ; IF is set (normal)
  INT 21h
  JMP install

if_clear_1:
  MOV AH, 09h
  LEA DX, msg_if0
  INT 21h

install:
  ; --- Install custom INT 60h ---
  CLI                  ; disable HW interrupts
  PUSH ES
  XOR AX, AX
  MOV ES, AX
  MOV WORD PTR ES:[180h], OFFSET my_handler
  MOV WORD PTR ES:[182h], CS
  POP ES
  STI                  ; re-enable HW interrupts

  ; --- Demonstrate software interrupt ---
  ; Software INT works even if we CLI
  CLI                  ; disable hardware interrupts
  INT 60h             ; SOFTWARE int still works!
  STI                  ; re-enable

  ; --- Show final status ---
  MOV AH, 09h
  LEA DX, msg_done
  INT 21h

  MOV AH, 4Ch
  INT 21h
MAIN ENDP

; Custom ISR for INT 60h
my_handler PROC FAR
  PUSH AX
  PUSH DX
  PUSH DS

  MOV AX, @DATA
  MOV DS, AX

  ; Display that we were called
  MOV AH, 09h
  LEA DX, msg_sw
  INT 21h

  POP DS
  POP DX
  POP AX
  IRET
my_handler ENDP
END MAIN`,
  funFact: "In 1988, the Morris Worm — one of the first internet worms — exploited the fact that interrupt handlers on Unix systems could be interrupted themselves. The concept of non-reentrant ISRs (handlers that break when interrupted) has been a source of bugs since the earliest days of computing. The 8086's automatic IF=0 on interrupt entry was Intel's attempt to prevent exactly this class of bug.",
  quiz: [
    { q: "What is the fundamental difference between INTR and NMI?", opts: ["INTR is faster than NMI", "INTR can be masked (disabled) by clearing IF; NMI cannot be masked", "NMI uses the data bus; INTR does not", "They are identical but on different pins"], ans: 1 },
    { q: "Does CLI prevent software interrupts (INT n) from executing?", opts: ["Yes — all interrupts are blocked", "No — CLI only disables INTR hardware interrupts; INT n always executes", "It depends on the interrupt type number", "CLI only blocks INT 21h"], ans: 1 },
    { q: "How does the CPU know the type number for a hardware interrupt via INTR?", opts: ["It is hardcoded to type 2", "The device places the type number on the data bus during the INTA cycle", "The programmer specifies it with INT n", "It is always type 0"], ans: 1 },
    { q: "Why does the CPU automatically clear IF when entering an ISR?", opts: ["To save power", "To prevent hardware interrupts from nesting and corrupting the ISR's stack/state", "To speed up the ISR", "IF is always 0 in real mode"], ans: 1 },
    { q: "Which has the highest priority among simultaneous interrupts?", opts: ["INTR (maskable hardware)", "NMI", "Internal exceptions (divide error, INT n)", "Single-step (TF)"], ans: 2 }
  ],
  challenge: "Write a program that: (1) installs a custom INT 60h handler that increments a counter, (2) calls INT 60h inside a loop 100 times, (3) verifies the counter equals 100, (4) then disables INTR with CLI and calls INT 60h again to prove software interrupts still work with IF=0, (5) displays 'PASS' or 'FAIL' based on the counter value.",
  resources: [
    { type: "article", title: "Hardware and Software Interrupts", url: "https://www.geeksforgeeks.org/hardware-and-software-interrupts/", source: "GeeksforGeeks" },
    { type: "article", title: "8086 Interrupt System", url: "https://en.wikipedia.org/wiki/Intel_8086#Interrupts", source: "Wikipedia" },
    { type: "video", title: "NMI vs INTR Explained", url: "https://www.youtube.com/watch?v=2pL8VzVmjRU", source: "YouTube" },
    { type: "article", title: "Interrupt Handling in x86", url: "https://wiki.osdev.org/Interrupts", source: "OSDev Wiki" }
  ],
  eli5: "Imagine you are doing homework (running a program). A software interrupt is like you deciding to get a snack — you choose to stop, go to the kitchen, get your snack, and come back. A hardware interrupt is like your mom calling you for dinner — you did not plan it, but you have to stop and go. NMI is like a fire alarm — you MUST respond no matter what. CLI is like putting on noise-canceling headphones — you will not hear mom (INTR), but you will still hear the fire alarm (NMI), and you can still choose to get a snack (INT n).",
  codeWalkthrough: [
    "PUSHF / POP AX — copies FLAGS into AX so we can examine individual flag bits",
    "TEST AX, 0200h — bit 9 of FLAGS is the IF (Interrupt Flag). TEST performs AND without storing the result, just setting ZF",
    "JZ if_clear_1 — if the AND result is zero, IF was 0 (interrupts disabled). Otherwise IF is 1 (normal state)",
    "CLI before IVT modification — disable hardware interrupts so no device can use a partially written vector",
    "PUSH ES / XOR AX, AX / MOV ES, AX — save ES then point it to segment 0 for IVT access",
    "MOV WORD PTR ES:[180h]... — write our handler's address. 60h * 4 = 180h for the offset, 182h for the segment",
    "POP ES / STI — restore ES and re-enable hardware interrupts. The vector is now safely installed",
    "CLI / INT 60h / STI — key demonstration: CLI disables hardware interrupts, but INT 60h (software) executes normally",
    "In my_handler: MOV AX, @DATA / MOV DS, AX — ISR must set up its own DS because it could be called from any context",
    "IRET — pops IP, CS, and FLAGS. This restores IF to its pre-interrupt state (whether it was 0 or 1)"
  ],
  bugChallenge: {
    code: "my_isr PROC FAR\n  PUSH AX\n  MOV AL, [counter]\n  INC AL\n  MOV [counter], AL\n  POP AX\n  RET\nmy_isr ENDP",
    hint: "How should an ISR return? And is DS set up correctly to access 'counter'?",
    answer: "Bug 1: The ISR uses RET instead of IRET. Since the interrupt pushes FLAGS, CS, and IP, RET only pops IP (or IP+CS for FAR RET), leaving FLAGS (and possibly CS) on the stack — corrupting the stack. Fix: use IRET. Bug 2: DS might not point to the data segment when the ISR runs (it could fire at any time). Add PUSH DS / MOV AX, @DATA / MOV DS, AX at the start and POP DS before IRET."
  },
  difficulty: "intermediate",
  prereqs: [34]
},
// Lesson 36
{
  id: 36,
  title: "DOS/BIOS Interrupts for Console I/O",
  subtitle: "Put interrupts to work — use DOS and BIOS services for keyboard input, screen output, and program control",
  analogy: "DOS and BIOS interrupts are like a restaurant menu. INT 21h is the main menu (DOS services) — you pick a dish number (function in AH) and the kitchen prepares it. INT 10h is the dessert menu (BIOS video). INT 16h is the drink menu (BIOS keyboard). You do not need to know how the kitchen works (hardware details) — you just tell the waiter (CPU) your order (AH = function number) and get the result in a register.",
  points: [
    { t: "INT 21h — DOS Services Overview", d: "INT 21h is the primary DOS interrupt with over 80 functions. The function number goes in AH. Common console functions: 01h (read char with echo), 02h (write char), 08h (read char no echo), 09h (write string), 0Ah (buffered input), 4Ch (exit).", code: "; INT 21h function dispatch:\n; AH = function number\n; Other registers = parameters\n; Call INT 21h\n; Result returned in specific registers\n\nMOV AH, 01h    ; function: read char w/ echo\nINT 21h        ; AL = character typed" },
    { t: "Function 01h — Read Character with Echo", d: "Waits for a keypress, echoes the character to the screen, and returns its ASCII code in AL. If the user presses an extended key (arrow, function key), AL returns 0 and a second call returns the scan code.", code: "MOV AH, 01h\nINT 21h          ; waits for keypress\n; AL = ASCII code of the key\n; Example: user presses 'A'\n;          AL = 41h (ASCII 'A')\n; The character is also displayed on screen" },
    { t: "Function 02h — Write Character", d: "Displays the character in DL at the current cursor position. The cursor advances one position. For newlines, print both CR (0Dh) and LF (0Ah). This is the simplest output function — one character at a time.", code: "MOV AH, 02h\nMOV DL, 'A'     ; character to display\nINT 21h         ; prints 'A'\n\n; Print newline (CR + LF):\nMOV AH, 02h\nMOV DL, 0Dh     ; carriage return\nINT 21h\nMOV DL, 0Ah     ; line feed\nINT 21h" },
    { t: "Function 09h — Write String", d: "Prints a '$'-terminated string at DS:DX. Faster than printing character by character. The '$' is not printed — it just marks the end. This is the most common way to display text in 8086 DOS programs.", code: ".DATA\n  msg DB 'Hello, 8086!', 0Dh, 0Ah, '$'\n.CODE\n  MOV AH, 09h\n  LEA DX, msg    ; DS:DX = string address\n  INT 21h        ; prints: Hello, 8086!\n                 ; stops at '$'" },
    { t: "Function 08h — Read Character Without Echo", d: "Like function 01h but does NOT display the typed character. Useful for password input, menu selection, or 'Press any key' prompts where you do not want the key shown on screen.", code: "MOV AH, 09h\nLEA DX, pwd_prompt\nINT 21h\n\nMOV AH, 08h      ; read without echo\nINT 21h           ; AL = character\n; Screen shows nothing — good for passwords\nMOV [password], AL" },
    { t: "Function 0Ah — Buffered String Input", d: "Reads an entire line (until Enter) into a buffer. The buffer must start with max-length byte, then an empty byte for actual-length (DOS fills it). Characters follow. More practical than single-character input for names, commands, etc.", code: ".DATA\n  buf DB 21       ; max length (20 chars + CR)\n      DB 0        ; actual length (DOS fills)\n      DB 21 DUP(0); character storage\n.CODE\n  MOV AH, 0Ah\n  LEA DX, buf    ; DS:DX = buffer\n  INT 21h        ; reads until Enter\n; buf[1] = count of chars typed\n; buf[2..] = the characters (no '$')" },
    { t: "Function 4Ch — Exit with Return Code", d: "Terminates the program and returns control to DOS. AL holds the return code (0 = success). Batch files can check this with IF ERRORLEVEL. Always use 4Ch for clean exit — older methods (INT 20h, RET) have limitations.", code: "MOV AX, 4C00h   ; AH=4Ch, AL=00 (success)\nINT 21h          ; exit to DOS\n\n; or with error code:\nMOV AH, 4Ch\nMOV AL, 1        ; return code 1 (error)\nINT 21h" },
    { t: "INT 10h — BIOS Video Services", d: "INT 10h provides low-level video control through the BIOS, bypassing DOS. Function 00h sets video mode, 02h sets cursor position, 06h scrolls screen, 09h writes character with attribute, 0Eh writes in teletype mode. Gives you color and cursor control.", code: "; Set cursor position to row 5, col 10\nMOV AH, 02h      ; set cursor position\nMOV BH, 0         ; page 0\nMOV DH, 5         ; row 5\nMOV DL, 10        ; column 10\nINT 10h\n\n; Write colored character\nMOV AH, 09h       ; write char + attribute\nMOV AL, 'X'       ; character\nMOV BH, 0         ; page 0\nMOV BL, 0Ch       ; attribute: red on black\nMOV CX, 1         ; repeat count\nINT 10h" },
    { t: "INT 16h — BIOS Keyboard Services", d: "INT 16h accesses the keyboard at the BIOS level. Function 00h waits for a key (returns ASCII in AL, scan code in AH). Function 01h checks if a key is available without waiting (ZF=0 if key ready). Lower level than DOS INT 21h keyboard functions.", code: "; Wait for keypress (BIOS level)\nMOV AH, 00h\nINT 16h          ; AH = scan code, AL = ASCII\n\n; Check if key is available (non-blocking)\nMOV AH, 01h\nINT 16h          ; ZF=0 if key available\nJZ  no_key       ; ZF=1 means no key in buffer\n; AH:AL has the key (not removed from buffer)\n; Use AH=00h to actually consume it" },
    { t: "INT 10h Function 0Eh — Teletype Output", d: "Writes a character at the current cursor position and advances the cursor automatically. Handles CR, LF, BS, and BEL control characters. Simpler than the DOS function 02h because it works without DOS — useful in boot code.", code: "; Print using BIOS teletype\nMOV AH, 0Eh       ; teletype output\nMOV AL, 'H'       ; character\nMOV BH, 0          ; page 0\nINT 10h            ; prints 'H', cursor moves\n\n; Print a string using BIOS (no DOS needed)\nLEA SI, msg\nbios_print:\n  LODSB             ; AL = next char\n  CMP AL, 0         ; null terminator?\n  JE  done\n  MOV AH, 0Eh\n  INT 10h\n  JMP bios_print\ndone:" }
  ],
  whatIs: "DOS interrupts (INT 21h) and BIOS interrupts (INT 10h, INT 16h) provide ready-made services for console I/O without needing to program hardware directly. INT 21h functions handle character input (01h, 08h), string input (0Ah), character output (02h), string output (09h), and program exit (4Ch). INT 10h provides video control (cursor, colors, modes). INT 16h provides keyboard access. These are the system API of the 8086 DOS environment.",
  realWorld: "Every DOS program — from WordPerfect to early games like DOOM — used these interrupts for I/O. BIOS interrupts are still used in modern PC boot sequences (UEFI calls are the successor). Understanding these services teaches you how system calls work: user programs request OS services through a controlled interrupt interface, which is exactly how Linux (INT 80h / SYSCALL) and Windows (INT 2Eh / SYSENTER) work today.",
  code: `; Program: Interactive menu with colored output
; Demonstrates INT 21h and INT 10h together
.MODEL SMALL
.STACK 100h
.DATA
  menu   DB 0Dh, 0Ah
         DB '=== 8086 I/O Demo ===', 0Dh, 0Ah
         DB '1. Say Hello', 0Dh, 0Ah
         DB '2. Echo input', 0Dh, 0Ah
         DB '3. Colored text', 0Dh, 0Ah
         DB '4. Exit', 0Dh, 0Ah
         DB 'Choice: $'
  hello  DB 0Dh, 0Ah, 'Hello, 8086 World!', 0Dh, 0Ah, '$'
  echo_p DB 0Dh, 0Ah, 'Type a char: $'
  echo_r DB 0Dh, 0Ah, 'You typed: $'
  color_msg DB 'COLORFUL!', 0
  bye    DB 0Dh, 0Ah, 'Goodbye!', 0Dh, 0Ah, '$'

.CODE
MAIN PROC
  MOV AX, @DATA
  MOV DS, AX

menu_loop:
  ; Display menu
  MOV AH, 09h
  LEA DX, menu
  INT 21h

  ; Read choice (no echo)
  MOV AH, 08h
  INT 21h

  CMP AL, '1'
  JE opt_hello
  CMP AL, '2'
  JE opt_echo
  CMP AL, '3'
  JE opt_color
  CMP AL, '4'
  JE opt_exit
  JMP menu_loop       ; invalid — show menu again

opt_hello:
  MOV AH, 09h
  LEA DX, hello
  INT 21h
  JMP menu_loop

opt_echo:
  MOV AH, 09h
  LEA DX, echo_p
  INT 21h

  MOV AH, 01h         ; read with echo
  INT 21h              ; AL = typed character
  PUSH AX

  MOV AH, 09h
  LEA DX, echo_r
  INT 21h

  POP AX
  MOV DL, AL
  MOV AH, 02h
  INT 21h              ; display the character again
  JMP menu_loop

opt_color:
  ; Set cursor to row 12, col 30
  MOV AH, 02h
  MOV BH, 0
  MOV DH, 12           ; row
  MOV DL, 30           ; column
  INT 10h

  ; Print each char in different color
  LEA SI, color_msg
  MOV BL, 09h          ; starting color (bright blue)
print_color:
  LODSB
  CMP AL, 0
  JE color_done
  MOV AH, 09h          ; BIOS write char + attrib
  MOV BH, 0
  MOV CX, 1
  INT 10h

  ; Advance cursor manually
  PUSH AX
  MOV AH, 03h          ; get cursor position
  MOV BH, 0
  INT 10h              ; DH=row, DL=col
  INC DL               ; move right
  MOV AH, 02h          ; set cursor position
  INT 10h
  POP AX

  INC BL               ; next color
  JMP print_color
color_done:
  JMP menu_loop

opt_exit:
  MOV AH, 09h
  LEA DX, bye
  INT 21h
  MOV AX, 4C00h
  INT 21h
MAIN ENDP
END MAIN`,
  funFact: "DOS function 09h uses '$' as a string terminator because CP/M (the operating system DOS was based on) used '$'. This meant you could never print a literal '$' using function 09h. The workaround was to use function 02h to print '$' as a single character. This quirk survived through the entire DOS era — an example of backward compatibility trumping good design.",
  quiz: [
    { q: "Which INT 21h function reads a character without showing it on screen?", opts: ["01h", "02h", "08h", "09h"], ans: 2 },
    { q: "What terminator character does INT 21h function 09h expect?", opts: ["Null (00h)", "Newline (0Ah)", "Dollar sign '$' (24h)", "Carriage return (0Dh)"], ans: 2 },
    { q: "How does INT 10h differ from INT 21h for output?", opts: ["INT 10h is BIOS-level (works without DOS), while INT 21h is a DOS service", "INT 10h is faster but INT 21h supports color", "They are identical but numbered differently", "INT 10h only works in protected mode"], ans: 0 },
    { q: "In the buffered input function (0Ah), what must the first byte of the buffer contain?", opts: ["The actual count of characters typed", "The maximum number of characters to read", "A null terminator", "The DOS version number"], ans: 1 },
    { q: "Why would you use INT 16h (BIOS keyboard) instead of INT 21h function 01h?", opts: ["INT 16h is always faster", "INT 16h works without DOS (e.g., in a boot loader or BIOS routine)", "INT 16h supports Unicode", "There is no reason to prefer INT 16h"], ans: 1 }
  ],
  challenge: "Build a complete text-mode application that: (1) clears the screen using INT 10h function 06h, (2) draws a border made of box-drawing characters (like frame using +-|), (3) accepts a name via INT 21h function 0Ah, (4) displays a personalized greeting in a specific color using INT 10h function 09h, and (5) waits for a keypress then exits. Make the greeting centered on the screen.",
  resources: [
    { type: "article", title: "DOS INT 21h Function List", url: "https://en.wikipedia.org/wiki/DOS_API", source: "Wikipedia" },
    { type: "article", title: "BIOS Interrupt Calls", url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call", source: "Wikipedia" },
    { type: "article", title: "Ralph Brown's Interrupt List", url: "https://www.ctyme.com/rbrown.htm", source: "CTYME" },
    { type: "video", title: "DOS and BIOS Interrupts Tutorial", url: "https://www.youtube.com/watch?v=2VF_wPkiBJY", source: "YouTube" }
  ],
  eli5: "Imagine you want to talk to people in a big building. INT 21h is the reception desk — you say 'I want service number 9' (AH=09h, print a message) and the receptionist does it. INT 10h is the building maintenance office — they control the lights and signs (screen). INT 16h is the mailroom — they check if you have any letters (keyboard input). You do not need to know how the plumbing works (hardware) — you just ask the right office (interrupt) for the right service (function number).",
  codeWalkthrough: [
    "menu_loop: — the program loops back here after each menu option, creating an interactive menu-driven application",
    "MOV AH, 08h / INT 21h — read choice without echo, so the typed digit is not shown (cleaner UI)",
    "CMP AL, '1' through '4' — dispatch based on the ASCII code of the keypress. JE jumps to the matching handler",
    "opt_echo: reads a character with function 01h (echo), then prints it again with function 02h. PUSH/POP AX preserves it across the DOS print call",
    "INT 10h AH=02h — BIOS service to set the cursor position. DH=row, DL=column, BH=page. This positions our colored text",
    "INT 10h AH=09h — BIOS write character with attribute. BL = color attribute (foreground + background), CX = repeat count. Unlike DOS, this does NOT advance the cursor",
    "INT 10h AH=03h — get current cursor position so we can manually advance DL by 1 to move right after each colored character",
    "INC BL — cycles through colors for each letter, creating a rainbow effect. BL wraps through 16 foreground colors",
    "LODSB / CMP AL, 0 — the color_msg string is null-terminated (not '$') because we print character by character through BIOS, not DOS",
    "MOV AX, 4C00h / INT 21h — clean exit with return code 0. AH=4Ch (function), AL=00h (return code), combined into one MOV"
  ],
  bugChallenge: {
    code: ".DATA\n  buf DB 10, 0, 10 DUP(0)\n  msg DB 'You said: $'\n.CODE\n  MOV AH, 0Ah\n  LEA DX, buf\n  INT 21h\n  MOV AH, 09h\n  LEA DX, buf+2\n  INT 21h",
    hint: "What terminator does function 0Ah put at the end of input? What does function 09h need?",
    answer: "Bug: Function 0Ah terminates input with CR (0Dh), not '$'. When function 09h tries to print the buffer, it does not find '$' and prints garbage past the input until it randomly hits a '$' in memory. Fix: after INT 21h (0Ah), find the end of input using the count in buf[1], and place a '$' after the last character: MOV BL, buf[1] / XOR BH, BH / MOV buf[BX+2], '$'."
  },
  difficulty: "intermediate",
  prereqs: [35]
},
{
    id: 37,
    title: "Memory Interfacing with RAM and ROM",
    subtitle: "Connecting the CPU to Its Storage",
    analogy: "Imagine a post office with numbered PO boxes. The CPU is the mail carrier who knows every box number (address). ROM boxes are locked glass cases — you can read the mail inside but never change it. RAM boxes have doors you can open to read or replace mail. Address decoding is like the sorting machine that routes each letter to the correct wing of the post office.",
    points: [
      {
        t: "Why Memory Interfacing Matters",
        d: "The 8086 CPU needs external memory chips to store programs (ROM) and data (RAM). Interfacing means wiring these chips so the CPU can read/write the correct locations. Without proper interfacing, the CPU would talk to the wrong chip or get garbage data — like dialing a wrong phone number.",
        code: "; CPU wants to read address 08000h\n; Memory interface must:\n;   1. Decode the address → select correct chip\n;   2. Route data lines → pass the byte/word\n;   3. Use RD/WR signals → control direction\n;\n; Address Bus (A0-A19) ---> Address Decoder ---> Chip Select\n; Data Bus (D0-D15)   <--> Memory Chip Data Pins\n; RD / WR             ---> Memory OE / WE"
      },
      {
        t: "Address Decoding — Full vs Partial",
        d: "Full decoding uses ALL address lines to select a chip, giving each chip a unique, non-overlapping range. Partial decoding ignores some high-order lines — simpler hardware but the same chip appears at multiple (shadow) addresses. Full decoding is preferred in production systems; partial is fine for small trainers.",
        code: "; FULL DECODING — every address line used\n; A19-A15 decoded → unique 32KB block\n; Chip at 00000h-07FFFh only responds there\n;\n; PARTIAL DECODING — some lines ignored\n; Only A19-A16 decoded, A15 ignored\n; Chip at 00000h-07FFFh ALSO responds\n;   at 08000h-0FFFFh (shadow/mirror)\n;\n; Full: more gates, no shadows\n; Partial: fewer gates, wasted address space"
      },
      {
        t: "Chip Select (CS) Logic",
        d: "Every memory chip has a Chip Select (CS) pin — active LOW. The chip only responds when CS is asserted (pulled to 0). Address decoding logic combines upper address bits through gates or decoders to generate CS for each chip. If CS is HIGH, the chip ignores the bus entirely — its outputs go to high-impedance (tri-state).",
        code: "; Example: Select ROM when A19-A16 = 1111\n; CS_ROM = NOT(A19 AND A18 AND A17 AND A16)\n;\n;  A19 ---|\\\\\n;  A18 ---|AND|--- NOT --- CS_ROM (active LOW)\n;  A17 ---|   |\n;  A16 ---|/\n;\n; When address is Fxxxxh → CS_ROM = 0 → ROM active\n; When address is 0xxxxh → CS_ROM = 1 → ROM silent"
      },
      {
        t: "ROM Mapping — Program Storage",
        d: "ROM (Read-Only Memory) stores the boot code and fixed programs. In 8086, the reset vector is at FFFF0h, so ROM must be mapped to the top of the 1MB address space. Common ROM chips: 2764 (8KB), 27128 (16KB), 27256 (32KB). ROM has only OE (Output Enable) — no WE, since you cannot write to it during normal operation.",
        code: "; Map 8KB ROM (2764) at top of memory\n; 2764: 13 address lines (A0-A12), 8 data lines\n; 8KB = 2000h bytes\n; Place at FE000h - FFFFFh (top 8KB)\n;\n; Address range: FE000h to FFFFFh\n; Binary: 1111 1110 0000 0000 0000 to\n;         1111 1111 1111 1111 1111\n;\n; Decode: A19-A13 = 1111111 → CS active\n; ROM pins: A0-A12 → address, D0-D7 → data\n;           OE → connect to RD signal"
      },
      {
        t: "RAM Mapping — Data Storage",
        d: "RAM (Random Access Memory) stores variables, stack, and runtime data. It is read/write, so both OE and WE pins are used. Common SRAM chips: 6264 (8KB), 62256 (32KB). RAM is typically placed starting at low addresses (00000h). For 16-bit 8086, you often need two RAM chips — one for even bytes (D0-D7) and one for odd bytes (D8-D15) — selected by A0 and BHE.",
        code: "; Map 8KB RAM (6264) at bottom of memory\n; 6264: 13 address lines (A0-A12), 8 data lines\n;\n; Place at 00000h - 01FFFh\n; Decode: A19-A13 = 0000000 → CS active\n;\n; For 16-bit data bus (word access):\n;   Even bank: selected by A0 = 0\n;   Odd bank:  selected by BHE = 0\n;\n;   CPU A1-A13 → RAM A0-A12 (shift by 1)\n;   Even RAM: CS = decoded AND NOT(A0)\n;   Odd RAM:  CS = decoded AND NOT(BHE)"
      },
      {
        t: "Using a 2-to-4 Decoder (74LS139)",
        d: "A 2-to-4 decoder takes 2 input lines and activates 1 of 4 outputs (active LOW). Feed two upper address bits to the inputs, and each output becomes a chip select for a different memory block. The 74LS139 contains two independent 2-to-4 decoders — very handy for simple memory maps with up to 4 chips per decoder.",
        code: "; 74LS139: 2-to-4 decoder\n; Inputs: A, B, Enable (active LOW)\n; Outputs: Y0, Y1, Y2, Y3 (active LOW)\n;\n; Truth table (active LOW outputs):\n;  EN  B  A | Y0  Y1  Y2  Y3\n;  0   0  0 |  0   1   1   1\n;  0   0  1 |  1   0   1   1\n;  0   1  0 |  1   1   0   1\n;  0   1  1 |  1   1   1   0\n;  1   x  x |  1   1   1   1\n;\n; Connect: A=A14, B=A15, EN=GND\n; Y0 → CS for 00000-03FFF\n; Y1 → CS for 04000-07FFF\n; Y2 → CS for 08000-0BFFF\n; Y3 → CS for 0C000-0FFFF"
      },
      {
        t: "3-to-8 Decoder (74LS138) for Larger Maps",
        d: "The 74LS138 is a 3-to-8 decoder — 3 inputs select 1 of 8 active-LOW outputs. It also has 3 enable pins (G1 active HIGH, G2A and G2B active LOW). By connecting upper address lines to inputs and using enables for additional address bits, you can decode up to 8 memory regions cleanly with one chip.",
        code: "; 74LS138: 3-to-8 decoder\n; Inputs: A, B, C (select), G1, G2A, G2B (enables)\n; Outputs: Y0-Y7 (active LOW)\n;\n; Example: divide 1MB into 8 x 128KB blocks\n;   C=A19, B=A18, A=A17\n;   G1=Vcc(HIGH), G2A=GND(LOW), G2B=GND(LOW)\n;\n;   Y0 → 00000h-1FFFFh (128KB block 0)\n;   Y1 → 20000h-3FFFFh (128KB block 1)\n;   ...\n;   Y7 → E0000h-FFFFFh (128KB block 7)\n;\n; Each Y output → CS of one memory chip"
      },
      {
        t: "Memory Map Design",
        d: "A memory map is a diagram showing which address ranges are assigned to which chips. Good design places ROM at the top (for reset vector), RAM at the bottom (for interrupt vectors and data), and I/O in between. Always check for overlaps and gaps. Draw the map before wiring — it is the blueprint of your system.",
        code: "; Example 8086 Memory Map:\n;\n; FFFFF ┌──────────────┐\n;       │   ROM 32KB   │ E8000-FFFFF\n; E8000 ├──────────────┤\n;       │  Unused/IO   │ 10000-E7FFF\n; 10000 ├──────────────┤\n;       │   RAM 64KB   │ 00000-0FFFF\n; 00000 └──────────────┘\n;\n; Reset vector FFFF0h → inside ROM ✓\n; IVT at 00000-003FF → inside RAM ✓\n; Stack near top of RAM → OK ✓"
      },
      {
        t: "Even/Odd Bank Architecture for 16-bit Bus",
        d: "The 8086 has a 16-bit data bus but memory chips are 8-bit. So memory is organized as two banks: the even bank (A0=0, data on D0-D7) and the odd bank (BHE=0, data on D8-D15). A byte read at an even address uses only the even bank. A byte at an odd address uses the odd bank. A word read activates both banks simultaneously.",
        code: "; 8086 16-bit memory organization:\n;\n;  Address  Even Bank(D0-D7)  Odd Bank(D8-D15)\n;  00000h   Byte 0             Byte 1\n;  00002h   Byte 2             Byte 3\n;  00004h   Byte 4             Byte 5\n;\n; Byte read at even addr: A0=0 → even bank only\n; Byte read at odd addr:  BHE=0 → odd bank only\n; Word read at even addr: A0=0, BHE=0 → both banks\n;\n; Even bank CS: base_CS AND NOT(A0)\n; Odd bank CS:  base_CS AND NOT(BHE)"
      }
    ],
    whatIs: "Memory interfacing is the process of connecting RAM and ROM chips to the 8086 CPU so it can read instructions from ROM and read/write data in RAM. It involves address decoding (using logic gates or decoder ICs like 74LS138) to generate chip select signals, mapping memory chips to specific address ranges, and handling the 16-bit data bus with even/odd bank organization.",
    realWorld: "Every computer, phone, and embedded device uses memory interfacing. Your PC's BIOS is stored in ROM mapped at the top of address space — just like the 8086. RAM modules in your laptop use far more complex decoding, but the principle of chip selection and address mapping is identical to what we learn here.",
    code: "; =============================================\n; Memory Interface: 8KB ROM + 8KB RAM for 8086\n; =============================================\n;\n; ROM (2764): mapped at FE000h - FFFFFh\n; RAM (6264): mapped at 00000h - 01FFFh\n;\n; --- ROM Address Decoding ---\n; A19=1, A18=1, A17=1, A16=1, A15=1, A14=1, A13=1\n; CS_ROM = NAND(A19,A18,A17,A16,A15,A14,A13)\n;\n; ROM connections:\n;   A0-A12  → ROM address pins\n;   D0-D7   → ROM data pins\n;   RD      → ROM OE (Output Enable)\n;   CS_ROM  → ROM CE (Chip Enable)\n;\n; --- RAM Address Decoding ---\n; A19=0, A18=0, A17=0, A16=0, A15=0, A14=0, A13=0\n; CS_RAM = NOR(A19,A18,A17,A16,A15,A14,A13)\n;\n; RAM connections:\n;   A0-A12  → RAM address pins\n;   D0-D7   → RAM data pins\n;   RD      → RAM OE\n;   WR      → RAM WE (Write Enable)\n;   CS_RAM  → RAM CE\n;\n; Verification:\n;   MOV AL, [0000h]  ; reads from RAM ✓\n;   JMP FFFF0h       ; executes from ROM ✓",
    funFact: "The original IBM PC used a 74LS138 decoder to divide its 1MB address space into 8 blocks of 128KB each. This single cheap chip was the traffic controller for the entire memory system — routing every memory access to the correct chip. The 74LS138 is still manufactured today and costs about 50 cents.",
    quiz: [
      {
        q: "Why must ROM be mapped at the top of the 8086 address space?",
        opts: [
          "Because ROM is faster than RAM",
          "Because the 8086 reset vector is at FFFF0h, which must be in ROM",
          "Because ROM chips only work at high addresses",
          "Because RAM must always come first"
        ],
        ans: 1
      },
      {
        q: "What is the difference between full and partial address decoding?",
        opts: [
          "Full decoding uses more memory chips",
          "Partial decoding is more reliable",
          "Full decoding uses all address lines giving unique ranges; partial ignores some lines creating shadow addresses",
          "There is no practical difference"
        ],
        ans: 2
      },
      {
        q: "What does the Chip Select (CS) pin do on a memory chip?",
        opts: [
          "It selects the clock speed for the chip",
          "When active (LOW), it enables the chip to respond to read/write operations",
          "It selects which data bits to use",
          "It powers the chip on or off"
        ],
        ans: 1
      },
      {
        q: "In 8086's 16-bit memory, how are even and odd banks selected?",
        opts: [
          "Even bank by A0=0, odd bank by BHE=0",
          "Even bank by BHE=0, odd bank by A0=0",
          "Both banks by the same signal",
          "Even bank by A19, odd bank by A18"
        ],
        ans: 0
      },
      {
        q: "A 74LS138 is a 3-to-8 decoder. How many memory regions can it select?",
        opts: ["3", "4", "8", "16"],
        ans: 2
      }
    ],
    challenge: "Design a memory map for an 8086 system with 32KB ROM at the top of memory and 64KB RAM at the bottom. Draw the address ranges, determine which address lines to decode, and specify the logic (gates or decoder) needed for chip select generation. Verify that the reset vector falls within your ROM range.",
    resources: [
      { type: "video", title: "8086 Memory Interfacing", url: "https://www.youtube.com/watch?v=JO6cQ5P6v3U", source: "Neso Academy" },
      { type: "article", title: "Address Decoding Techniques", url: "https://www.geeksforgeeks.org/address-decoding-in-8085-microprocessor/", source: "GeeksforGeeks" },
      { type: "docs", title: "74LS138 Decoder Datasheet", url: "https://www.ti.com/lit/ds/symlink/sn74ls138.pdf", source: "Texas Instruments" },
      { type: "video", title: "Memory Map Design for 8086", url: "https://www.youtube.com/watch?v=5hTbKFOBRas", source: "Education 4u" }
    ],
    eli5: "Think of the CPU as a librarian in a huge library. The library has two sections: a 'read-only' section (ROM) where books are behind glass — you can look but not change them — and a 'read-write' section (RAM) where you can borrow, return, and even scribble notes. Address decoding is like the sign at each aisle telling the librarian which section and shelf to go to based on the book number.",
    codeWalkthrough: [
      "Title comment for our memory interface design",
      "Describing the system: 8KB ROM and 8KB RAM connected to 8086",
      "Blank separator",
      "ROM chip 2764 will live at addresses FE000h through FFFFFh (top 8KB)",
      "RAM chip 6264 will live at addresses 00000h through 01FFFh (bottom 8KB)",
      "Blank separator",
      "Starting ROM address decoding section",
      "For FE000h-FFFFFh, address bits A19 through A13 must all be 1",
      "NAND gate: output goes LOW (active) only when all inputs are HIGH",
      "Blank separator",
      "ROM wiring: CPU address lines A0-A12 connect to ROM address pins",
      "ROM data pins connect to CPU data bus D0-D7",
      "CPU RD signal connects to ROM Output Enable — read activates data output",
      "The decoded chip select connects to ROM Chip Enable pin",
      "Blank separator",
      "Starting RAM address decoding section",
      "For 00000h-01FFFh, address bits A19 through A13 must all be 0",
      "NOR gate: output goes HIGH inverted to LOW (active) when all inputs are 0",
      "Blank separator",
      "RAM wiring: same A0-A12 to RAM address pins",
      "RAM data pins connect to D0-D7",
      "RD signal to RAM OE for read operations",
      "WR signal to RAM WE for write operations — RAM is read/write unlike ROM",
      "Decoded chip select to RAM CE pin",
      "Blank separator",
      "Verification section",
      "Reading from address 0000h hits RAM — confirmed by decoding",
      "Reset jump to FFFF0h executes from ROM — confirmed by decoding"
    ],
    bugChallenge: {
      code: "; Memory decoding for ROM at F0000-FFFFF (64KB)\n; Using 74LS138 decoder\n;\n; C=A19, B=A18, A=A17\n; G1=Vcc, G2A=A16, G2B=GND\n;\n; ROM connected to output Y7\n; Y7 active when CBA = 111 and G2A = 0\n;\n; So ROM is selected when:\n;   A19=1, A18=1, A17=1, A16=0\n;   Address range: E0000h - EFFFFh",
      hint: "Check what address A19=1, A18=1, A17=1, A16=0 actually represents. Does it match F0000-FFFFF?",
      answer: "The decoding selects E0000h-EFFFFh, NOT F0000h-FFFFFh. When A16=0 (required for G2A active LOW), the range starts at E0000h. To select F0000h-FFFFFh, G2A should be connected to NOT(A16), so G2A=0 when A16=1. Alternatively, use A16 through an inverter before connecting to G2A."
    },
    difficulty: "intermediate",
    prereqs: [12, 16]
  },
  {
    id: 38,
    title: "I/O-Mapped vs Memory-Mapped I/O",
    subtitle: "Two Ways to Talk to Peripherals",
    analogy: "Imagine your house has two types of doors. Memory-mapped I/O is like having peripheral devices (TV, fridge, washing machine) inside rooms along the same hallway as your bedrooms — same address system, same keys. I/O-mapped (isolated) I/O is like having a separate service entrance with its own numbering — the postman uses one door, the delivery guy uses another, and they never confuse each other.",
    points: [
      {
        t: "Two Approaches to Device Communication",
        d: "The CPU must read from and write to peripheral devices (keyboard, display, timer). There are two fundamental approaches: (1) treat devices as memory locations (memory-mapped), or (2) give devices their own separate address space (I/O-mapped / isolated I/O). The 8086 supports BOTH methods — it has a separate M/IO pin to distinguish them.",
        code: "; Memory-Mapped I/O:\n;   Device register at address 0B8000h\n;   Use normal MOV instruction\n;   MOV AL, [0B8000h]  ; read from device\n;   MOV [0B8000h], AL  ; write to device\n;\n; I/O-Mapped (Isolated) I/O:\n;   Device register at I/O port 60h\n;   Use special IN/OUT instructions\n;   IN AL, 60h         ; read from port\n;   OUT 60h, AL        ; write to port"
      },
      {
        t: "I/O-Mapped (Isolated) I/O — IN and OUT",
        d: "In isolated I/O, peripheral devices have their own address space (0000h-FFFFh for 8086, 64KB). Access uses special instructions: IN reads a port, OUT writes a port. The CPU asserts M/IO=0 to signal an I/O operation. This keeps the memory address space completely separate from I/O — devices cannot accidentally shadow RAM or ROM.",
        code: "; I/O-Mapped I/O instructions:\n;\n; Direct port addressing (8-bit port address):\n  IN AL, 60h          ; read byte from port 60h\n  OUT 61h, AL         ; write byte to port 61h\n;\n; Indirect port addressing (16-bit via DX):\n  MOV DX, 03F8h       ; COM1 serial port\n  IN AL, DX           ; read byte from port 03F8h\n  OUT DX, AL          ; write byte to port 03F8h\n;\n; Word I/O:\n  IN AX, 60h          ; read WORD from port 60h\n  OUT 60h, AX         ; write WORD to port 60h\n;\n; M/IO pin = 0 during these instructions"
      },
      {
        t: "Memory-Mapped I/O — MOV to Device",
        d: "In memory-mapped I/O, device registers are assigned addresses within the normal memory space. You read/write them with ordinary MOV, ADD, or any memory instruction — no special I/O instructions needed. The CPU asserts M/IO=1 (same as a normal memory access). The downside: these addresses are 'stolen' from memory space, reducing available RAM/ROM capacity.",
        code: "; Memory-Mapped I/O example:\n;\n; Video memory at B8000h (like IBM PC CGA)\n  MOV AX, 0B800h\n  MOV ES, AX           ; ES → video segment\n  MOV BYTE PTR ES:[0], 'A'  ; write char 'A'\n  MOV BYTE PTR ES:[1], 07h  ; attribute: white on black\n;\n; Advantage: can use ANY instruction\n  ADD BYTE PTR ES:[0], 1    ; increment device register\n  CMP BYTE PTR ES:[2], 0FFh ; compare device status\n  AND BYTE PTR ES:[4], 0FEh ; clear bit 0\n;\n; M/IO pin = 1 (treated as normal memory access)"
      },
      {
        t: "The M/IO Signal",
        d: "The 8086 M/IO pin tells external hardware whether the current bus cycle is a memory access (M/IO=1) or an I/O access (M/IO=0). Address decoders use this signal along with address lines to generate the correct chip select. For memory chips, CS requires M/IO=1. For I/O devices, CS requires M/IO=0. This one pin is what makes the two separate address spaces possible.",
        code: "; M/IO signal usage in address decoding:\n;\n; Memory chip select:\n;   CS_RAM = address_decode AND M/IO\n;   (active only when M/IO=1, i.e., memory access)\n;\n; I/O device chip select:\n;   CS_8255 = io_decode AND NOT(M/IO)\n;   (active only when M/IO=0, i.e., I/O access)\n;\n; Bus cycle summary:\n;   MOV AL, [1000h]  → M/IO=1, address=01000h\n;   IN AL, 80h       → M/IO=0, address=00080h\n;   OUT 80h, AL      → M/IO=0, address=00080h"
      },
      {
        t: "Address Space Comparison",
        d: "With I/O-mapped I/O, the 8086 has two separate spaces: 1MB for memory and 64KB for I/O. With memory-mapped I/O, there is only one 1MB space shared by both memory and devices. I/O-mapped preserves the full memory space but requires special instructions. Memory-mapped sacrifices some memory addresses but allows richer instruction use on device registers.",
        code: "; I/O-Mapped address spaces:\n;   Memory: 00000h - FFFFFh (1MB) — full!\n;   I/O:    0000h  - FFFFh  (64KB) — separate\n;   Total accessible: 1MB + 64KB\n;\n; Memory-Mapped address spaces:\n;   Memory + I/O share: 00000h - FFFFFh (1MB)\n;   Devices take some addresses from memory\n;   Total accessible: 1MB (shared)\n;\n; Example — if display uses 16KB memory-mapped:\n;   Available RAM+ROM = 1MB - 16KB = 1008KB\n;   With I/O-mapped: RAM+ROM stays full 1MB"
      },
      {
        t: "Pros and Cons Summary",
        d: "I/O-mapped: clear separation, smaller address (simpler decoding), faster for simple reads — but limited to IN/OUT/AL/AX only. Memory-mapped: use any instruction (MOV, ADD, AND, CMP), no special instructions needed — but uses up memory addresses and address decoding is more complex. Most real systems use BOTH: I/O-mapped for simple control ports, memory-mapped for large buffers (like video RAM).",
        code: "; I/O-Mapped PROS:\n;   + Separate 64KB space — no memory lost\n;   + M/IO signal simplifies decoding\n;   + Clear distinction: IN/OUT = device\n;\n; I/O-Mapped CONS:\n;   - Only IN/OUT instructions (limited)\n;   - Only AL (byte) or AX (word) register\n;   - Cannot do arithmetic on port data directly\n;\n; Memory-Mapped PROS:\n;   + Any instruction works (MOV, ADD, CMP, AND)\n;   + Any register can be used\n;   + Powerful for video buffers, shared memory\n;\n; Memory-Mapped CONS:\n;   - Reduces available memory address space\n;   - Address decoding more complex"
      },
      {
        t: "IBM PC Example: Both Methods in Action",
        d: "The original IBM PC used both methods simultaneously. Simple devices like the keyboard controller (port 60h), timer (port 40h), and interrupt controller (port 20h) used I/O-mapped I/O with IN/OUT. The video display buffer (B8000h) and ROM BIOS (F0000h) used memory-mapped addresses. This hybrid approach gave the best of both worlds.",
        code: "; IBM PC I/O-mapped devices:\n  IN AL, 60h        ; keyboard scan code (I/O port)\n  OUT 20h, AL       ; interrupt controller EOI\n  IN AL, 40h        ; timer counter value\n  OUT 43h, AL       ; timer control word\n;\n; IBM PC memory-mapped devices:\n  MOV AX, 0B800h\n  MOV ES, AX\n  MOV ES:[0], 'H'   ; video RAM (memory-mapped)\n;\n; The M/IO pin automatically distinguishes:\n;   IN/OUT → M/IO=0 → I/O decoder activates\n;   MOV to [addr] → M/IO=1 → memory decoder activates"
      },
      {
        t: "Interfacing a Device to Both Spaces",
        d: "When designing a system, you choose which I/O method to use for each device. For the 8255 PPI, you typically use I/O-mapped (ports 80h-83h). For video memory, memory-mapped (segment B800h). The address decoding circuitry must include M/IO in the chip select logic to prevent a memory access from accidentally activating an I/O device or vice versa.",
        code: "; 8255 PPI at I/O ports 80h-83h:\n;   CS_8255 = NOT(M/IO) AND (A7=1) AND\n;             (A6-A2 = 00000) AND NOT(A1 OR A0 decoding)\n;\n; To access:\n  MOV AL, 99h        ; control word\n  OUT 83h, AL        ; write to 8255 control port\n  IN AL, 80h         ; read from 8255 Port A\n;\n; Video RAM at B8000h (memory-mapped):\n;   CS_VRAM = M/IO AND (A19-A16 = 1011) AND\n;             (A15 = 1)\n;\n; To access:\n  MOV AX, 0B800h\n  MOV ES, AX\n  MOV AL, ES:[0]     ; read from video RAM"
      }
    ],
    whatIs: "I/O-mapped (isolated) I/O uses separate IN/OUT instructions and a dedicated 64KB address space to access peripherals, signaled by M/IO=0. Memory-mapped I/O places device registers in the normal memory address space and uses standard MOV/ADD/CMP instructions, signaled by M/IO=1. The 8086 supports both methods, and most real systems use a combination of both.",
    realWorld: "Your PC still uses both methods today. When your OS reads the keyboard controller, it uses IN/OUT instructions (I/O-mapped). When your GPU driver writes pixels, it writes to memory-mapped video RAM. The PCI Express bus on modern computers is entirely memory-mapped — every PCIe device gets a range of physical addresses.",
    code: "; =============================================\n; I/O-Mapped vs Memory-Mapped I/O Comparison\n; =============================================\n;\n; === I/O-Mapped (Isolated) I/O ===\n; Access a device at I/O port 60h:\n;\n  IN AL, 60h           ; read byte from port 60h\n                        ; M/IO = 0 (I/O cycle)\n                        ; address bus = 0060h\n  OR AL, 80h           ; process in register\n  OUT 60h, AL          ; write back to port 60h\n;\n; === Memory-Mapped I/O ===\n; Access a device at memory address B8000h:\n;\n  MOV AX, 0B800h\n  MOV ES, AX           ; point ES to device\n  MOV AL, ES:[0]       ; read from device\n                        ; M/IO = 1 (memory cycle)\n                        ; address bus = B8000h\n  OR ES:[0], 80h       ; modify device register DIRECTLY\n                        ; (can't do this with I/O-mapped!)\n;\n; Key difference: I/O-mapped uses IN/OUT only\n; Memory-mapped can use ANY memory instruction",
    funFact: "The Motorola 68000 processor (used in original Macintosh and Sega Genesis) had NO separate I/O space at all — everything was memory-mapped. Intel's x86 kept the separate I/O space for backward compatibility with the 8080, and it persists in x86-64 processors to this day, over 45 years later.",
    quiz: [
      {
        q: "What instruction is used to read from an I/O port in isolated I/O?",
        opts: ["MOV", "IN", "LOAD", "READ"],
        ans: 1
      },
      {
        q: "What is the state of the M/IO pin during an IN instruction?",
        opts: ["M/IO = 1 (HIGH)", "M/IO = 0 (LOW)", "M/IO is not used", "M/IO toggles"],
        ans: 1
      },
      {
        q: "What is the main advantage of memory-mapped I/O over I/O-mapped?",
        opts: [
          "It uses less memory",
          "Any instruction (MOV, ADD, AND, CMP) can operate on device registers",
          "It is faster",
          "It requires fewer address lines"
        ],
        ans: 1
      },
      {
        q: "How large is the 8086's separate I/O address space?",
        opts: ["1MB", "64KB", "1KB", "256 bytes"],
        ans: 1
      },
      {
        q: "What is the main disadvantage of memory-mapped I/O?",
        opts: [
          "It cannot use MOV instruction",
          "It reduces the available memory address space",
          "It requires the M/IO pin",
          "It only works with ROM"
        ],
        ans: 1
      }
    ],
    challenge: "Design address decoding for a system with: (1) 8KB RAM at 00000h-01FFFh (memory-mapped), (2) 8KB ROM at FE000h-FFFFFh (memory-mapped), and (3) an 8255 PPI at I/O ports 80h-83h (I/O-mapped). Show how M/IO is used in each chip select equation. Write sample code to read from all three.",
    resources: [
      { type: "video", title: "I/O Mapped vs Memory Mapped I/O", url: "https://www.youtube.com/watch?v=aT5XMOrid7Y", source: "Neso Academy" },
      { type: "article", title: "Memory Mapped I/O and Isolated I/O", url: "https://www.geeksforgeeks.org/memory-mapped-i-o-and-isolated-i-o/", source: "GeeksforGeeks" },
      { type: "video", title: "8086 I/O Interfacing", url: "https://www.youtube.com/watch?v=bcpurOBJJNc", source: "Education 4u" },
      { type: "docs", title: "x86 IN/OUT Instructions Reference", url: "https://c9x.me/x86/html/file_module_x86_id_139.html", source: "x86 Reference" }
    ],
    eli5: "Imagine you live in a building with 100 apartments (that is your memory). I/O-mapped I/O is like having a separate little mailroom in the lobby with 10 mailboxes for sending packages to shops outside — you use a special 'send package' form (IN/OUT). Memory-mapped I/O is like giving one of the 100 apartments to a shop — now the shop has a door just like any apartment, and you visit it the same way you visit a neighbor (MOV). But now you only have 99 apartments left for people!",
    codeWalkthrough: [
      "Title comment for the I/O comparison",
      "Separator line",
      "Blank line",
      "Section header: I/O-Mapped (Isolated) I/O",
      "Comment: accessing a device at I/O port 60h",
      "Blank line",
      "IN AL, 60h — special instruction reads one byte from port 60h into AL",
      "Comment: M/IO pin goes LOW (0) telling hardware this is an I/O cycle",
      "Comment: only the lower 16 address bits carry the port address",
      "OR AL, 80h — manipulate the data in a register (set bit 7)",
      "OUT 60h, AL — write the modified byte back to port 60h",
      "Blank line",
      "Section header: Memory-Mapped I/O",
      "Comment: accessing a device at memory address B8000h",
      "Blank line",
      "Load segment value 0B800h into AX",
      "Move AX into ES segment register (ES now points to B8000h)",
      "Read a byte from ES:[0] which is physical address B8000h — the device register",
      "Comment: M/IO pin goes HIGH (1) because this is a normal memory cycle",
      "Comment: the full 20-bit address appears on the bus",
      "OR ES:[0], 80h — directly modify the device register in place using OR instruction",
      "Comment: this direct-modify trick is impossible with I/O-mapped I/O",
      "Blank line",
      "Summary: I/O-mapped is limited to IN/OUT instructions",
      "Memory-mapped can leverage the entire instruction set on device registers"
    ],
    bugChallenge: {
      code: "; Read from I/O port 300h\n;\n  IN AL, 300h         ; read byte from port 300h\n;\n; Write to memory-mapped device at C0000h\n;\n  MOV AX, 0C000h\n  MOV DS, AX\n  OUT [0], AL          ; write to device",
      hint: "Check the rules for IN instruction addressing and what instruction is used for memory-mapped I/O.",
      answer: "Two bugs: (1) IN AL, 300h is invalid — direct port addressing only supports 8-bit addresses (0-FFh). For port 300h, use: MOV DX, 300h then IN AL, DX. (2) OUT [0], AL is wrong — OUT is for I/O ports only. For memory-mapped I/O, use MOV [0], AL (or MOV DS:[0], AL)."
    },
    difficulty: "intermediate",
    prereqs: [37, 8]
  },
  {
    id: 39,
    title: "8255 Programmable Peripheral Interface",
    subtitle: "The Universal Parallel I/O Chip",
    analogy: "The 8255 is like a receptionist with three desks (Port A, Port B, Port C). You hand the receptionist a note (control word) that says 'Desk A takes incoming calls, Desk B sends outgoing mail, Desk C does both.' From then on, each desk follows its assigned role. You can even change the note mid-day to reassign everyone — that is what 'programmable' means.",
    points: [
      {
        t: "8255 Overview and Purpose",
        d: "The 8255 PPI (Programmable Peripheral Interface) is a general-purpose parallel I/O chip by Intel. It provides 24 I/O pins organized into three 8-bit ports (A, B, C), configurable as input or output via software. It bridges the CPU to external devices like keyboards, LEDs, displays, motors, and sensors — without requiring custom hardware for each device.",
        code: "; 8255 PPI — 24 programmable I/O lines\n;\n; Port A: 8 bits (PA0-PA7)\n; Port B: 8 bits (PB0-PB7)\n; Port C: 8 bits (PC0-PC7)\n;         Upper nibble: PC4-PC7\n;         Lower nibble: PC0-PC3\n;\n; Control Register: configures all ports\n;\n; Typical I/O port addresses:\n;   Port A:   base + 0  (e.g., 80h)\n;   Port B:   base + 1  (e.g., 81h)\n;   Port C:   base + 2  (e.g., 82h)\n;   Control:  base + 3  (e.g., 83h)"
      },
      {
        t: "Pin Diagram and Bus Interface",
        d: "The 8255 connects to the CPU via an 8-bit data bus (D0-D7), two address lines (A0-A1) to select the internal register, RD and WR for read/write, CS (chip select) for activation, and RESET. The 24 I/O pins connect to the external world. A0-A1 select which port to access: 00=Port A, 01=Port B, 10=Port C, 11=Control Register.",
        code: "; 8255 Pin connections to 8086:\n;\n; D0-D7   ↔  CPU Data Bus (lower byte)\n; A0-A1   ←  CPU Address Bus (A0, A1)\n; RD      ←  CPU RD (active LOW)\n; WR      ←  CPU WR (active LOW)\n; CS      ←  Address decoder output (active LOW)\n; RESET   ←  System RESET\n;\n; A1  A0  |  Register Selected\n;  0   0  |  Port A\n;  0   1  |  Port B\n;  1   0  |  Port C\n;  1   1  |  Control Register"
      },
      {
        t: "Mode 0 — Simple Input/Output",
        d: "Mode 0 is the most basic operating mode. Each port is configured as either all-input or all-output — no handshaking, no interrupts. Data written to an output port stays on the pins until changed. Data read from an input port captures whatever logic levels are on the pins at that instant. Port C can be split: upper nibble (PC4-7) and lower nibble (PC0-3) configured independently.",
        code: "; Mode 0: Simple I/O (no handshaking)\n;\n; Example: Port A = output, Port B = input,\n;          Port C upper = output, Port C lower = input\n;\n; Control Word = 1 00 0 0 0 1 1 = 83h\n;                │ ││ │ │ │ │ └─ PC lower: 1=input\n;                │ ││ │ │ │ └── Port B: 1=input\n;                │ ││ │ │ └─── Mode B: 0=mode 0\n;                │ ││ │ └──── PC upper: 0=output\n;                │ ││ └───── Port A: 0=output\n;                │ │└────── Mode A: 00=mode 0\n;                │ └─────── Mode A (MSB)\n;                └──────── 1=mode set flag\n;\n  MOV AL, 83h\n  OUT 83h, AL        ; configure 8255"
      },
      {
        t: "Control Word Format — Bit by Bit",
        d: "The 8255 control word is an 8-bit value written to the control register (base+3). Bit 7=1 means 'mode set' operation. Bits 6-5 select Mode for Group A (00=Mode 0, 01=Mode 1, 1x=Mode 2). Bit 4 sets Port A direction (1=input, 0=output). Bit 3 sets Port C upper direction. Bit 2 selects Mode for Group B (0=Mode 0, 1=Mode 1). Bit 1 sets Port B direction. Bit 0 sets Port C lower direction.",
        code: "; Control Word Bit Layout:\n;\n; D7 | D6 D5 | D4 | D3 | D2 | D1 | D0\n;  1 | Mode A| PA | PCu| MdB| PB | PCl\n;\n; D7 = 1 → Mode Set operation\n; D6-D5: Group A mode (00=M0, 01=M1, 1x=M2)\n; D4: Port A (1=input, 0=output)\n; D3: Port C upper (1=input, 0=output)\n; D2: Group B mode (0=M0, 1=M1)\n; D1: Port B (1=input, 0=output)\n; D0: Port C lower (1=input, 0=output)\n;\n; All ports output, Mode 0:\n;   1 00 0 0 0 0 0 = 80h\n;\n; All ports input, Mode 0:\n;   1 00 1 1 0 1 1 = 9Bh"
      },
      {
        t: "Mode 1 — Strobed Input/Output",
        d: "Mode 1 adds handshaking signals for synchronized data transfer. For input: the external device places data on the port and pulses STB (strobe) to latch it. The 8255 sets IBF (Input Buffer Full) and optionally raises INTR to interrupt the CPU. For output: the CPU writes data, the 8255 asserts OBF (Output Buffer Full), and the device pulses ACK when it takes the data. Port C pins are used for these handshaking signals.",
        code: "; Mode 1 Input (Port A example):\n;\n;   STB_A (PC4) ← device pulses LOW to load data\n;   IBF_A (PC5) → goes HIGH when buffer is full\n;   INTR_A (PC3) → goes HIGH to interrupt CPU\n;\n;   Flow: Device → STB → data latched → IBF=1\n;         CPU reads Port A → IBF=0 → ready again\n;\n; Mode 1 Output (Port A example):\n;\n;   OBF_A (PC7) → goes LOW when CPU writes data\n;   ACK_A (PC6) ← device pulses LOW to accept\n;   INTR_A (PC3) → goes HIGH when device took data\n;\n;   Flow: CPU writes → OBF=0 → device ACKs\n;         → OBF=1 → ready for next byte"
      },
      {
        t: "Mode 2 — Bidirectional Bus (Port A Only)",
        d: "Mode 2 is available only for Port A. It provides bidirectional data transfer with full handshaking — Port A can both send and receive data on the same 8 lines. Five Port C lines (PC3-PC7) are dedicated to handshaking signals (STB, IBF, OBF, ACK, INTR). This mode is used when two systems need to pass data back and forth through the same port, like a shared bus between two processors.",
        code: "; Mode 2: Bidirectional (Port A only)\n;\n; Port C lines used for handshaking:\n;   PC3: INTR_A (interrupt request)\n;   PC4: STB_A  (input strobe)\n;   PC5: IBF_A  (input buffer full)\n;   PC6: ACK_A  (output acknowledge)\n;   PC7: OBF_A  (output buffer full)\n;\n; Control word for Mode 2 on A, Mode 0 on B:\n;   1 1x 0 0 0 0 0 = C0h\n;\n; Data flow:\n;   CPU writes → PA0-7 output → OBF=0 → device ACKs\n;   Device writes → STB → data latched → IBF=1\n;   CPU reads → IBF=0 → ready"
      },
      {
        t: "BSR (Bit Set/Reset) Mode",
        d: "BSR mode lets you set or reset individual bits of Port C without affecting other bits. Write to the control register with bit 7=0 and encode which bit (0-7) to set or reset. This is extremely useful for controlling handshaking signals or toggling individual control lines without a read-modify-write cycle on the entire port.",
        code: "; BSR (Bit Set/Reset) Control Word:\n;\n; D7 | D6 D5 D4 | D3 D2 D1 | D0\n;  0 | X  X  X  | bit select| S/R\n;\n; D7 = 0 → BSR mode\n; D3-D1: select Port C bit (0-7)\n; D0: 1=set, 0=reset\n;\n; Set PC5 (bit 5):\n;   0 xxx 101 1 = 0Bh\n  MOV AL, 0Bh\n  OUT 83h, AL        ; set PC5 = 1\n;\n; Reset PC5:\n;   0 xxx 101 0 = 0Ah\n  MOV AL, 0Ah\n  OUT 83h, AL        ; reset PC5 = 0\n;\n; No need to read-modify-write Port C!"
      },
      {
        t: "8255 Interfacing Example — Complete Setup",
        d: "A typical setup: connect 8255 to the 8086 at I/O base address 80h. Configure Port A as output (drive LEDs), Port B as input (read switches), Port C as output (control signals). Write the control word, then use IN/OUT instructions to communicate with the external devices through the 8255 ports.",
        code: "; 8255 at base address 80h\n; Port A (80h) = output → 8 LEDs\n; Port B (81h) = input  → 8 switches\n; Port C (82h) = output → control signals\n; Control (83h)\n;\n; Control word: all Mode 0\n;   PA=output, PB=input, PC=output\n;   1 00 0 0 0 1 0 = 82h\n;\n  MOV AL, 82h\n  OUT 83h, AL         ; configure 8255\n;\n; Read switches from Port B:\n  IN AL, 81h           ; AL = switch states\n;\n; Write to LEDs on Port A:\n  MOV AL, 0FFh         ; all LEDs ON\n  OUT 80h, AL\n;\n; Write control signal on Port C:\n  MOV AL, 01h          ; set PC0 high\n  OUT 82h, AL"
      },
      {
        t: "Address Decoding for 8255",
        d: "The 8255 needs a chip select (CS) generated by decoding the I/O address. For base address 80h (10000000b), decode A7=1 and A6-A2=0. Lines A0 and A1 pass through to the 8255's A0-A1 pins to select the internal register. The M/IO signal must be LOW (I/O cycle). A simple NAND gate or 74LS138 decoder can generate CS.",
        code: "; Address decoding for 8255 at port 80h-83h:\n;\n; Port A:  80h = 1000 0000\n; Port B:  81h = 1000 0001\n; Port C:  82h = 1000 0010\n; Control: 83h = 1000 0011\n;\n; Common bits: A7=1, A6=0, A5=0, A4=0,\n;              A3=0, A2=0\n; A1, A0 vary (select register)\n;\n; CS = NOT(M/IO) AND A7 AND\n;      NOT(A6) AND NOT(A5) AND\n;      NOT(A4) AND NOT(A3) AND NOT(A2)\n;\n; Simplified: CS = NOT(M/IO) AND\n;             NOT(A7 XOR 1) AND\n;             NOR(A6,A5,A4,A3,A2)"
      }
    ],
    whatIs: "The 8255 PPI is a programmable parallel I/O chip that provides 24 I/O lines organized as three 8-bit ports (A, B, C). It supports three operating modes: Mode 0 (simple I/O), Mode 1 (strobed I/O with handshaking), and Mode 2 (bidirectional bus on Port A). A control word written to its control register configures port directions and modes. BSR mode allows individual Port C bits to be set or reset.",
    realWorld: "The 8255 was used in the original IBM PC to interface the keyboard, read DIP switch settings, and control the speaker. Many university microprocessor lab kits still include the 8255 for hands-on experiments. The concept of programmable I/O ports lives on in modern microcontrollers — every GPIO port on an Arduino or STM32 is a descendant of the 8255's design philosophy.",
    code: "; =============================================\n; 8255 PPI — Complete Configuration Example\n; =============================================\n;\n; System: 8255 at I/O base 80h\n;   Port A (80h) → Output to LEDs\n;   Port B (81h) → Input from DIP switches\n;   Port C (82h) → Mixed control signals\n;   Control (83h)\n;\n; Step 1: Configure 8255\n; Control word: Mode 0, PA=out, PB=in,\n;              PCupper=out, PClower=in\n; Bits: 1 00 0 0 0 1 1 = 83h\n;\n  MOV AL, 83h           ; control word\n  OUT 83h, AL           ; write to control register\n;\n; Step 2: Read DIP switches (Port B)\n  IN AL, 81h            ; AL = switch pattern\n;\n; Step 3: Process and display\n  NOT AL                ; invert pattern\n  OUT 80h, AL           ; write to LEDs (Port A)\n;\n; Step 4: Set a flag on Port C bit 0\n  MOV AL, 01h           ; BSR: set PC0\n  OUT 83h, AL           ; PC0 = 1 (flag active)\n;\n; Step 5: Read Port C lower nibble\n  IN AL, 82h            ; read all of Port C\n  AND AL, 0Fh           ; mask upper nibble\n;\n; Loop: continuously read switches, update LEDs\nSCAN:\n  IN AL, 81h            ; read switches\n  OUT 80h, AL           ; mirror to LEDs\n  JMP SCAN              ; repeat forever",
    funFact: "The 8255 was so popular that clone versions were made by dozens of manufacturers worldwide. NEC made the uPD8255, Mitsubishi made the M5L8255, and even Soviet-era factories produced the KR580VV55 — a pin-compatible clone. The 8255 design pattern was so influential that its mode concept (simple/strobed/bidirectional) appears in virtually every modern microcontroller's GPIO peripheral.",
    quiz: [
      {
        q: "How many I/O lines does the 8255 provide in total?",
        opts: ["8", "16", "24", "32"],
        ans: 2
      },
      {
        q: "What does bit 7 = 1 in the control word indicate?",
        opts: [
          "BSR (Bit Set/Reset) mode",
          "Mode Set operation (configuring port directions and modes)",
          "Port A is in Mode 2",
          "All ports are set to input"
        ],
        ans: 1
      },
      {
        q: "Which mode provides bidirectional data transfer on Port A?",
        opts: ["Mode 0", "Mode 1", "Mode 2", "BSR Mode"],
        ans: 2
      },
      {
        q: "In BSR mode, what is the purpose of bit D0 in the control word?",
        opts: [
          "Selects the port",
          "Enables interrupts",
          "1 = Set the selected bit, 0 = Reset the selected bit",
          "Controls the data direction"
        ],
        ans: 2
      },
      {
        q: "What is the control word to configure all three ports as output in Mode 0?",
        opts: ["80h (10000000b)", "9Bh (10011011b)", "FFh (11111111b)", "00h (00000000b)"],
        ans: 0
      }
    ],
    challenge: "Configure an 8255 at base address 60h with Port A as Mode 1 input (strobed), Port B as Mode 0 output, and Port C used for handshaking. Write the control word bit by bit, then write assembly code to wait for IBF, read Port A, and display the data on Port B LEDs.",
    resources: [
      { type: "video", title: "8255 PPI Explained", url: "https://www.youtube.com/watch?v=bxM1e2K0jNQ", source: "Neso Academy" },
      { type: "article", title: "8255 Programmable Peripheral Interface", url: "https://www.geeksforgeeks.org/8255-programmable-peripheral-interface/", source: "GeeksforGeeks" },
      { type: "docs", title: "Intel 8255A Datasheet", url: "https://datasheetspdf.com/pdf/544568/Intel/8255A/1", source: "Intel" },
      { type: "video", title: "8255 Mode 0, 1, 2 with Examples", url: "https://www.youtube.com/watch?v=Ql2ZQOD9xCA", source: "Education 4u" }
    ],
    eli5: "Imagine you have a magical switchboard with three rows of switches (Port A, B, C). You write a little instruction card (control word) telling the switchboard: 'Row A sends signals OUT, Row B listens for signals IN, Row C does a mix.' The switchboard follows your card. If you want to change what a row does, just write a new card. That is the 8255 — a switchboard you can reprogram anytime!",
    codeWalkthrough: [
      "Title comment for 8255 configuration example",
      "Separator line",
      "Blank line",
      "System description: 8255 base address is 80h",
      "Port A at address 80h is configured as output driving LEDs",
      "Port B at address 81h is configured as input reading DIP switches",
      "Port C at address 82h provides mixed control signals",
      "Control register is at address 83h",
      "Blank line",
      "Step 1: Configure the 8255 by writing the control word",
      "Control word breakdown: Mode 0 for all, PA=out, PB=in, PCu=out, PCl=in",
      "Binary: 10000011 = 83h",
      "Blank line",
      "Load control word 83h into AL register",
      "Write AL to control register at port 83h — 8255 is now configured",
      "Blank line",
      "Step 2: Read the DIP switch positions from Port B",
      "IN instruction reads 8 switch bits into AL",
      "Blank line",
      "Step 3: Process the data and send to display",
      "NOT inverts all bits — turns switch pattern into LED pattern",
      "OUT sends the inverted pattern to Port A LEDs",
      "Blank line",
      "Step 4: Use BSR mode to set a flag on Port C",
      "Value 01h in BSR format: bit7=0, bit select=000, set=1 → sets PC0",
      "Writing to control register with bit7=0 triggers BSR mode",
      "Blank line",
      "Step 5: Read Port C and isolate lower nibble",
      "IN reads all 8 bits of Port C",
      "AND with 0Fh masks off the upper 4 bits, keeping only PC0-PC3",
      "Blank line",
      "Label SCAN for continuous polling loop",
      "Read current switch states from Port B",
      "Write switch states directly to LEDs on Port A",
      "Jump back to SCAN — infinite loop mirrors switches to LEDs"
    ],
    bugChallenge: {
      code: "; Configure 8255 at base 80h:\n;   Port A = input, Port B = output, Mode 0\n;\n  MOV AL, 90h          ; control word\n  OUT 80h, AL          ; send to control register\n;\n; Read from Port A:\n  IN AL, 80h\n;\n; Write to Port B:\n  MOV AL, 55h\n  OUT 81h, AL",
      hint: "Where should the control word be written? Check the address for the control register.",
      answer: "The control word is written to port 80h (Port A address) instead of port 83h (Control Register address). The 8255 control register is always at base+3. Fix: change 'OUT 80h, AL' to 'OUT 83h, AL'. Writing 90h to port 80h would send data to Port A instead of configuring the chip."
    },
    difficulty: "intermediate",
    prereqs: [38]
  },
  {
    id: 40,
    title: "Interfacing Keyboard, LEDs, and Seven-Segment Displays",
    subtitle: "Building Real Input/Output Hardware",
    analogy: "Think of a game show. The keyboard is the contestant panel — each button press sends a signal. LEDs are the score lights — the host turns them on or off. The seven-segment display is the scoreboard — it shows numbers by lighting up specific bar-shaped segments. The 8255 is the stage manager who connects contestants to the scoreboard, relaying every press and updating every display.",
    points: [
      {
        t: "Matrix Keyboard Scanning",
        d: "A matrix keyboard arranges switches in rows and columns. A 4x4 matrix gives 16 keys using only 8 lines (4 rows + 4 columns) instead of 16 separate wires. To scan: drive one row LOW at a time, then read all columns. If a column reads LOW, the key at that row-column intersection is pressed. This row-by-row scanning happens so fast that it catches every keypress.",
        code: "; 4x4 Matrix Keyboard via 8255:\n; Port A lower nibble (PA0-PA3) = rows (output)\n; Port A upper nibble (PA4-PA7) = columns (input)\n;\n; Scanning algorithm:\nSCAN_KEY:\n  MOV AL, 0FEh         ; row 0 LOW: 11111110\n  OUT 80h, AL           ; drive row 0\n  IN AL, 80h            ; read columns\n  AND AL, 0F0h          ; mask rows, keep columns\n  CMP AL, 0F0h          ; all columns HIGH?\n  JNE KEY_FOUND         ; no → key in row 0!\n;\n  MOV AL, 0FDh          ; row 1 LOW: 11111101\n  OUT 80h, AL\n  IN AL, 80h\n  AND AL, 0F0h\n  CMP AL, 0F0h\n  JNE KEY_FOUND         ; key in row 1!\n  ; ... repeat for rows 2, 3"
      },
      {
        t: "Key Debouncing",
        d: "Mechanical switches bounce — when pressed, the contact rapidly opens and closes for a few milliseconds before settling. Without debouncing, one press might register as 2-5 presses. Software debouncing adds a short delay (10-20ms) after detecting a press, then re-checks. If the key is still pressed, it is a valid press. This simple technique eliminates false triggers.",
        code: "; Debounce routine:\n;\nKEY_FOUND:\n  PUSH AX               ; save key code\n;\n  ; Wait ~20ms for debounce\n  MOV CX, 5000          ; delay counter\nDELAY:\n  NOP\n  LOOP DELAY            ; decrement CX, loop\n;\n  ; Re-read to confirm\n  IN AL, 80h\n  AND AL, 0F0h\n  CMP AL, 0F0h\n  JE SCAN_KEY           ; key released → false\n;\n  POP AX                ; restore key code\n  ; Key confirmed — process it\n;\n  ; Wait for key release\nWAIT_REL:\n  IN AL, 80h\n  AND AL, 0F0h\n  CMP AL, 0F0h\n  JNE WAIT_REL          ; still pressed, wait"
      },
      {
        t: "LED Driving via 8255",
        d: "LEDs are the simplest output device. Connect each LED (with a current-limiting resistor, typically 330 ohm) to an 8255 output port pin. Writing a 1 to a bit turns that LED ON; writing 0 turns it OFF. With 8 bits on Port A, you can control 8 LEDs independently. Patterns like running lights, binary counters, or status indicators are easy to implement.",
        code: "; 8 LEDs on Port A (output), 8255 at base 80h\n;\n; Configure: Port A = output, Mode 0\n  MOV AL, 80h           ; control word: all output\n  OUT 83h, AL\n;\n; Turn all LEDs ON:\n  MOV AL, 0FFh\n  OUT 80h, AL           ; 11111111 → all ON\n;\n; Turn all LEDs OFF:\n  MOV AL, 00h\n  OUT 80h, AL           ; 00000000 → all OFF\n;\n; Running light pattern:\n  MOV AL, 01h           ; start: 00000001\nRUN:\n  OUT 80h, AL           ; light current LED\n  ROL AL, 1             ; shift left (rotate)\n  CALL DELAY            ; wait ~200ms\n  JMP RUN               ; repeat forever"
      },
      {
        t: "Seven-Segment Display Basics",
        d: "A seven-segment display has 7 LED segments (a-g) plus a decimal point (dp), arranged to form digits 0-9 and some letters. Each segment is controlled by one bit. For common-cathode displays, HIGH lights a segment. For common-anode, LOW lights it. A lookup table maps each digit (0-9) to the corresponding 7-bit pattern.",
        code: ";  Seven-segment layout:\n;      a\n;     ---\n;  f |   | b\n;     -g-\n;  e |   | c\n;     ---\n;      d    .dp\n;\n; Common-cathode encoding (1 = ON):\n;        dp g f e d c b a\n; 0  =   0  0 1 1 1 1 1 1  = 3Fh\n; 1  =   0  0 0 0 0 1 1 0  = 06h\n; 2  =   0  1 0 1 1 0 1 1  = 5Bh\n; 3  =   0  1 0 0 1 1 1 1  = 4Fh\n; 4  =   0  1 1 0 0 1 1 0  = 66h\n; 5  =   0  1 1 0 1 1 0 1  = 6Dh\n; 6  =   0  1 1 1 1 1 0 1  = 7Dh\n; 7  =   0  0 0 0 0 1 1 1  = 07h\n; 8  =   0  1 1 1 1 1 1 1  = 7Fh\n; 9  =   0  1 1 0 1 1 1 1  = 6Fh"
      },
      {
        t: "Driving a Single Seven-Segment Display",
        d: "Connect the 7 segments (a-g) to 7 output pins of an 8255 port. To display a digit, look up its bit pattern in a table and write it to the port. The lookup table is stored in memory as an array of bytes. The digit value (0-9) is used as an index to fetch the correct pattern.",
        code: "; Display digit on seven-segment via Port A\n;\n; Lookup table in memory:\nSEG_TABLE DB 3Fh, 06h, 5Bh, 4Fh, 66h\n          DB 6Dh, 7Dh, 07h, 7Fh, 6Fh\n;\n; Display digit in BL (0-9):\n  MOV AL, 80h\n  OUT 83h, AL           ; 8255 Port A = output\n;\n  LEA SI, SEG_TABLE     ; SI → lookup table\n  MOV BH, 0\n  MOV BL, 5             ; digit to display = 5\n  MOV AL, [SI + BX]     ; AL = pattern for '5'\n  OUT 80h, AL           ; send to seven-segment\n;\n; Result: segments a,c,d,f,g light up → '5'"
      },
      {
        t: "Multiplexed Multi-Digit Display",
        d: "To display multiple digits (e.g., 4 digits) without using 4 separate ports, we use multiplexing. Only one digit is ON at any time, but we switch between digits so fast (>100 Hz per digit) that persistence of vision makes them all appear lit simultaneously. One port sends the segment data, another port selects which digit is active.",
        code: "; 4-digit multiplexed display:\n; Port A (80h) = segment data (a-g)\n; Port B (81h) = digit select (active LOW)\n;\n; Digit buffer in memory:\nDIGITS DB 3Fh, 06h, 5Bh, 4Fh  ; \"0\",\"1\",\"2\",\"3\"\n;\nDISPLAY:\n  LEA SI, DIGITS\n  MOV BL, 0FEh          ; select digit 0: 11111110\n  MOV CX, 4             ; 4 digits\n;\nNEXT_DIGIT:\n  MOV AL, [SI]          ; get segment pattern\n  OUT 80h, AL           ; send segments to Port A\n  MOV AL, BL\n  OUT 81h, AL           ; enable one digit via Port B\n;\n  CALL SHORT_DELAY      ; ~5ms ON time\n  MOV AL, 0FFh\n  OUT 81h, AL           ; all digits OFF (blank)\n;\n  ROL BL, 1             ; next digit select\n  INC SI                ; next pattern\n  LOOP NEXT_DIGIT\n  JMP DISPLAY           ; repeat continuously"
      },
      {
        t: "Complete Keyboard-to-Display System",
        d: "The ultimate interfacing exercise: scan a keyboard for input, decode the key, look up the seven-segment pattern, and display it. Port B reads the keyboard matrix, Port A drives the display. The main loop continuously scans keys and updates the display, creating a responsive interactive system entirely driven by the 8255.",
        code: "; Complete system: keyboard → display\n;\n; 8255: Port A = 7-seg output, Port B = keyboard\n; Control: PA=out, PB=in → 82h\n;\n  MOV AL, 82h\n  OUT 83h, AL           ; configure 8255\n;\nMAIN_LOOP:\n  CALL SCAN_KEYBOARD    ; returns key in AL (0-9)\n  JC MAIN_LOOP          ; carry set = no key\n;\n  ; Look up segment pattern\n  LEA SI, SEG_TABLE\n  MOV AH, 0\n  ADD SI, AX            ; index into table\n  MOV AL, [SI]          ; get 7-seg pattern\n  OUT 80h, AL           ; display on 7-segment\n;\n  JMP MAIN_LOOP         ; scan again\n;\nSEG_TABLE DB 3Fh, 06h, 5Bh, 4Fh, 66h\n          DB 6Dh, 7Dh, 07h, 7Fh, 6Fh"
      },
      {
        t: "Current Limiting and Hardware Considerations",
        d: "Each LED segment draws about 10-20mA. The 8255 output pins can source/sink limited current (typically 2.5mA). For real hardware, you need buffer drivers (like 74LS245) between the 8255 and the LEDs, or use transistor switches for each digit in multiplexed mode. Current-limiting resistors (220-330 ohm) prevent LED burnout. Always calculate the total current budget before building.",
        code: "; Hardware current budget:\n;\n; Each segment: ~15mA with 330Ω resistor\n; 7 segments + dp = 8 x 15mA = 120mA per digit\n; 8255 pin max: ~2.5mA (not enough!)\n;\n; Solution: buffer driver\n;\n; 8255 Port A → 74LS245 buffer → 7-seg display\n;              (sources up to 24mA per line)\n;\n; For multiplexed digits, use PNP transistors:\n;   8255 Port B bit → base resistor → PNP\n;   PNP emitter → Vcc\n;   PNP collector → common anode of digit\n;\n; When PB0=0 → PNP ON → digit 0 powered\n; When PB0=1 → PNP OFF → digit 0 dark"
      }
    ],
    whatIs: "This lesson covers the practical interfacing of common I/O devices to the 8086 through the 8255 PPI: matrix keyboard scanning (row-by-row with debouncing), LED driving (direct port output with running light patterns), seven-segment display encoding (lookup tables mapping digits to segment patterns), and multiplexed multi-digit displays (time-division scanning that creates the illusion of simultaneous display).",
    realWorld: "Every calculator, microwave oven, elevator panel, and gas pump uses these exact techniques. The seven-segment display in your alarm clock uses multiplexing — only one digit is actually lit at any instant, switching thousands of times per second. ATM keypads use matrix scanning identical to what we implement here. These are among the most universally used interfacing patterns in all of electronics.",
    code: "; =============================================\n; Keyboard → 7-Segment Display System\n; =============================================\n;\n; 8255 at base 80h\n; Port A (80h) = 7-segment output\n; Port B (81h) = 4x4 keyboard (rows out, cols in)\n; Control (83h)\n;\n; Configure 8255:\n  MOV AL, 82h           ; PA=out, PB=in, Mode 0\n  OUT 83h, AL\n;\n; Segment lookup table:\nSEG_TBL DB 3Fh,06h,5Bh,4Fh,66h,6Dh,7Dh,07h,7Fh,6Fh\n;           0    1    2    3    4    5    6    7    8    9\n;\nMAIN:\n  ; --- Scan keyboard ---\n  MOV AL, 0FEh          ; row 0 active (LOW)\n  OUT 81h, AL\n  NOP                   ; settling time\n  IN AL, 81h            ; read columns\n  AND AL, 0F0h\n  CMP AL, 0F0h\n  JNE GOT_KEY_R0        ; key in row 0\n;\n  MOV AL, 0FDh          ; row 1\n  OUT 81h, AL\n  NOP\n  IN AL, 81h\n  AND AL, 0F0h\n  CMP AL, 0F0h\n  JNE GOT_KEY_R1        ; key in row 1\n;\n  JMP MAIN              ; no key, rescan\n;\nGOT_KEY_R0:\n  ; Decode column and map to digit 0-3\n  ; (column detection logic here)\n  MOV BL, 0             ; example: key = 0\n  JMP DISPLAY_IT\n;\nGOT_KEY_R1:\n  MOV BL, 4             ; example: key = 4\n;\nDISPLAY_IT:\n  ; Debounce: wait 20ms\n  MOV CX, 5000\nDBNC: LOOP DBNC\n;\n  ; Lookup segment pattern\n  LEA SI, SEG_TBL\n  MOV BH, 0\n  MOV AL, [SI+BX]       ; get pattern for digit\n  OUT 80h, AL           ; display on 7-segment\n  JMP MAIN              ; back to scanning",
    funFact: "The seven-segment display was patented in 1908 — over 100 years ago — but did not become popular until LEDs were invented in the 1960s. The original patent used incandescent filaments shaped into segments. Today, seven-segment displays are being replaced by OLED screens, but they remain the cheapest and most reliable way to show numbers in harsh environments like gas stations and industrial equipment.",
    quiz: [
      {
        q: "In a 4x4 matrix keyboard, how many I/O lines are needed?",
        opts: ["4", "8", "16", "32"],
        ans: 1
      },
      {
        q: "Why is key debouncing necessary?",
        opts: [
          "To make the keyboard louder",
          "To prevent a single press from registering as multiple presses due to switch bounce",
          "To slow down the scanning speed",
          "To save power"
        ],
        ans: 1
      },
      {
        q: "What is the common-cathode seven-segment code for the digit '0'?",
        opts: ["3Fh", "06h", "7Fh", "00h"],
        ans: 0
      },
      {
        q: "In a multiplexed 4-digit display, how many digits are actually lit at any one instant?",
        opts: ["All 4", "2", "1", "Depends on the digit value"],
        ans: 2
      },
      {
        q: "Why can't the 8255 directly drive seven-segment LEDs without buffers?",
        opts: [
          "The 8255 operates at the wrong voltage",
          "The 8255 output pins cannot source enough current (only ~2.5mA vs ~15mA per segment)",
          "Seven-segment displays require analog signals",
          "The 8255 can only do input, not output"
        ],
        ans: 1
      }
    ],
    challenge: "Build a 2-digit multiplexed seven-segment counter that counts from 00 to 99. Use Port A for segment data and Port B for digit selection. Write the complete assembly code including the multiplexing routine, the counting logic, and a delay to make the count visible to human eyes (~1 second per increment).",
    resources: [
      { type: "video", title: "Keyboard Interfacing with 8255", url: "https://www.youtube.com/watch?v=VrnbpPDPHZs", source: "Neso Academy" },
      { type: "article", title: "Seven Segment Display Interfacing with 8086", url: "https://www.geeksforgeeks.org/interfacing-of-seven-segment-display-to-8086/", source: "GeeksforGeeks" },
      { type: "video", title: "Multiplexed Display Explained", url: "https://www.youtube.com/watch?v=jCpKTBOdMaQ", source: "Ben Eater" },
      { type: "article", title: "LED and Keyboard Interfacing with 8255", url: "https://www.tutorialspoint.com/microprocessor/microprocessor_intel_8255a_programmable_peripheral_interface.htm", source: "TutorialsPoint" }
    ],
    eli5: "The keyboard is like a treasure hunt grid — you check each row one by one and see which column responds, telling you exactly which square (key) was pressed. LEDs are simple light switches — flip a bit, flip a light. The seven-segment display is like arranging 7 matchsticks to spell numbers — each number uses a different combination of matchsticks. And multiplexing is like a magician spinning plates — only one plate spins at a time, but they switch so fast it looks like all plates are spinning together!",
    codeWalkthrough: [
      "Title comment for the keyboard-to-display system",
      "Separator line",
      "Blank line",
      "System description: 8255 base address 80h",
      "Port A at 80h drives the seven-segment display (output)",
      "Port B at 81h reads the 4x4 keyboard matrix (input)",
      "Control register at 83h",
      "Blank line",
      "Configure 8255: control word 82h means PA=output, PB=input, Mode 0",
      "Write the control word to initialize the 8255",
      "Blank line",
      "Segment lookup table: 10 bytes mapping digits 0-9 to segment patterns",
      "Comment showing which byte corresponds to which digit",
      "Blank line",
      "MAIN label: start of keyboard scanning loop",
      "Load 0FEh (11111110) to drive row 0 LOW",
      "Output to Port B to activate row 0",
      "NOP gives the signal time to settle on the wires",
      "Read back Port B to check which columns are LOW (key pressed)",
      "AND with F0h isolates the column bits (upper nibble)",
      "Compare with F0h — if all columns HIGH, no key in this row",
      "If not equal, a key was detected in row 0 — jump to handler",
      "Blank line",
      "Load 0FDh (11111101) to drive row 1 LOW",
      "Output to Port B to activate row 1",
      "NOP for settling time",
      "Read columns again",
      "Isolate column bits",
      "Compare for key press",
      "If key found in row 1, jump to that handler",
      "Blank line",
      "No key detected in any row, jump back to MAIN and rescan",
      "Blank line",
      "Handler for key in row 0 — decode column to determine exact key",
      "Comment: column detection logic maps the pattern to a key number",
      "Example: BL=0 means the key maps to digit 0",
      "Jump to display routine",
      "Blank line",
      "Handler for key in row 1 — example key = digit 4",
      "Blank line",
      "DISPLAY_IT label: show the digit on the seven-segment display",
      "Debounce delay: load counter for approximately 20ms",
      "DBNS label: LOOP decrements CX and repeats until zero — creating the delay",
      "Blank line",
      "Load address of segment lookup table into SI",
      "Clear BH so BX = the digit value (0-9)",
      "Fetch the segment pattern from the table using BX as index",
      "Output the pattern to Port A, lighting the appropriate segments",
      "Jump back to MAIN to scan for the next keypress"
    ],
    bugChallenge: {
      code: "; Multiplexed 2-digit display\n; Port A = segments, Port B = digit select\n;\n  MOV AL, 80h\n  OUT 83h, AL         ; all output mode\n;\n; Display digit 0 (tens)\n  MOV AL, [SEG_TBL+3] ; pattern for '3'\n  OUT 80h, AL\n  MOV AL, 0FEh        ; select digit 0\n  OUT 81h, AL\n  CALL DELAY\n;\n; Display digit 1 (ones) — BUG HERE\n  MOV AL, 0FDh        ; select digit 1\n  OUT 81h, AL\n  MOV AL, [SEG_TBL+7] ; pattern for '7'\n  OUT 80h, AL\n  CALL DELAY",
      hint: "Look at the order of operations for digit 1. When does the digit select get activated versus when the segment data is sent?",
      answer: "For digit 1, the digit select (0FDh) is output BEFORE the segment data. This means digit 1 briefly shows the OLD segment data (the '3' from digit 0) before being updated to '7', causing ghosting/flicker. Fix: always send segment data FIRST, then activate the digit select — swap the two OUT instructions for digit 1, just like digit 0 does it correctly."
    },
    difficulty: "intermediate",
    prereqs: [39]
  },
{
    id: 41,
    title: "8253/8254 Timer and Counter Basics",
    subtitle: "Generating Precise Timing with Hardware",
    analogy: "The 8253 timer is like three separate hourglasses in one box. Each hourglass (counter) starts with a number of sand grains (count value) and loses one grain with every tick of a clock. When the sand runs out, an alarm goes off (output changes). You can set different amounts of sand and choose what happens when it runs out — ring once, ring repeatedly, or generate a steady beat. The control word is the instruction card telling each hourglass how to behave.",
    points: [
      {
        t: "8253/8254 Overview",
        d: "The 8253 (and its improved version 8254) is a programmable interval timer with three independent 16-bit counters (Counter 0, 1, 2). Each counter has a CLK input (clock), a GATE input (enable), and an OUT output. The CPU loads a count value, and the counter decrements on each clock pulse. When it reaches zero, the output changes based on the selected mode. The 8254 adds a read-back command.",
        code: "; 8253/8254 Timer — 3 independent counters\n;\n; Counter 0: CLK0, GATE0, OUT0\n; Counter 1: CLK1, GATE1, OUT1\n; Counter 2: CLK2, GATE2, OUT2\n;\n; Typical I/O addresses:\n;   Counter 0:  base + 0  (e.g., 40h)\n;   Counter 1:  base + 1  (e.g., 41h)\n;   Counter 2:  base + 2  (e.g., 42h)\n;   Control:    base + 3  (e.g., 43h)\n;\n; CLK input: external clock source\n; GATE input: enables/disables counting\n; OUT output: changes based on mode"
      },
      {
        t: "Control Word Format",
        d: "The control word (written to base+3) selects the counter, read/load mode, operating mode, and BCD/binary format. Bits 7-6 select the counter (00=C0, 01=C1, 10=C2). Bits 5-4 select read/load (01=MSB only, 10=LSB only, 11=LSB then MSB). Bits 3-1 select the mode (000-101). Bit 0 selects binary (0) or BCD (1) counting.",
        code: "; Control Word Bit Layout:\n;\n; D7 D6 | D5 D4 | D3 D2 D1 | D0\n;  SC1 SC0 | RL1 RL0 | M2 M1 M0  | BCD\n;\n; SC (Select Counter):\n;   00 = Counter 0\n;   01 = Counter 1\n;   10 = Counter 2\n;   11 = Read-Back (8254 only)\n;\n; RL (Read/Load):\n;   00 = Counter Latch\n;   01 = MSB only\n;   10 = LSB only\n;   11 = LSB first, then MSB\n;\n; M (Mode): 000=Mode0 ... 101=Mode5\n; BCD: 0=16-bit binary, 1=4-digit BCD"
      },
      {
        t: "Mode 0 — Interrupt on Terminal Count",
        d: "In Mode 0, the output starts LOW. The CPU loads a count value N. The counter decrements on each CLK pulse. When it reaches zero, the output goes HIGH and stays HIGH until a new count is loaded. This mode is used for one-shot timing events — like generating a single interrupt after a precise delay.",
        code: "; Mode 0: Interrupt on Terminal Count\n;\n; OUT starts LOW\n; Count loaded: N\n; Each CLK: count decrements\n; Count = 0 → OUT goes HIGH (stays HIGH)\n;\n;    CLK: ┃↓┃↓┃↓┃↓┃↓┃↓┃\n;  Count:  5  4  3  2  1  0\n;    OUT: _____________________╱‾‾‾‾‾\n;\n; Example: Counter 0, Mode 0, count = 100\n;   Control = 00 11 000 0 = 30h\n  MOV AL, 30h\n  OUT 43h, AL          ; control word\n  MOV AL, 64h          ; LSB of 100 (64h)\n  OUT 40h, AL\n  MOV AL, 00h          ; MSB of 100\n  OUT 40h, AL          ; counting begins"
      },
      {
        t: "Mode 2 — Rate Generator",
        d: "Mode 2 produces a periodic LOW pulse. The output stays HIGH for N-1 clock cycles, goes LOW for 1 clock cycle, then reloads and repeats automatically. This creates a divide-by-N frequency divider. If CLK is 1.19318 MHz (IBM PC) and N=65536, you get about 18.2 Hz — the famous PC timer tick rate used by DOS for timekeeping.",
        code: "; Mode 2: Rate Generator (divide-by-N)\n;\n; OUT HIGH for (N-1) clocks, LOW for 1 clock\n; Automatically reloads and repeats\n;\n; CLK: ┃↓┃↓┃↓┃↓┃↓┃↓┃↓┃↓┃↓┃↓┃\n; Count: 5  4  3  2  1  5  4  3  2  1\n; OUT: ‾‾‾‾‾‾‾‾‾‾‾_‾‾‾‾‾‾‾‾‾‾‾_\n;\n; Frequency out = CLK_in / N\n;\n; IBM PC Timer: CLK = 1.193182 MHz, N = 65536\n; Output = 1193182 / 65536 ≈ 18.2 Hz\n;\n; Example: Counter 0, Mode 2, count = 1000\n;   Control = 00 11 010 0 = 34h\n  MOV AL, 34h\n  OUT 43h, AL\n  MOV AL, 0E8h         ; LSB of 1000 (03E8h)\n  OUT 40h, AL\n  MOV AL, 03h          ; MSB of 1000\n  OUT 40h, AL"
      },
      {
        t: "Mode 3 — Square Wave Generator",
        d: "Mode 3 produces a symmetrical square wave. For even N, the output is HIGH for N/2 clocks and LOW for N/2 clocks — a perfect 50% duty cycle. For odd N, it is HIGH for (N+1)/2 and LOW for (N-1)/2. This mode is used in the IBM PC to drive the speaker (Counter 2) for generating audible tones of different frequencies.",
        code: "; Mode 3: Square Wave Generator\n;\n; For even N: HIGH for N/2, LOW for N/2\n; For odd N:  HIGH for (N+1)/2, LOW for (N-1)/2\n;\n; CLK: ┃↓┃↓┃↓┃↓┃↓┃↓┃↓┃↓┃\n; N=6: ‾‾‾‾‾‾‾___‾‾‾‾‾‾‾___\n;       3 HIGH  3 LOW  3 HIGH  3 LOW\n;\n; IBM PC Speaker: CLK = 1.193182 MHz\n; For 440 Hz (note A): N = 1193182/440 ≈ 2712\n;\n; Counter 2, Mode 3, count = 2712 (0A98h):\n;   Control = 10 11 011 0 = B6h\n  MOV AL, 0B6h\n  OUT 43h, AL\n  MOV AL, 98h          ; LSB of 2712\n  OUT 42h, AL\n  MOV AL, 0Ah          ; MSB of 2712\n  OUT 42h, AL\n; Speaker now produces 440 Hz tone!"
      },
      {
        t: "All Six Modes Summary",
        d: "Mode 0: Interrupt on terminal count (one-shot, OUT goes HIGH at zero). Mode 1: Hardware-retriggerable one-shot (pulse output, triggered by GATE rising edge). Mode 2: Rate generator (periodic LOW pulse, divide-by-N). Mode 3: Square wave generator (50% duty cycle). Mode 4: Software-triggered strobe (one-shot LOW pulse). Mode 5: Hardware-triggered strobe (GATE-triggered LOW pulse).",
        code: "; All 8253/8254 Modes:\n;\n; Mode 0: Interrupt on Terminal Count\n;   OUT: LOW → HIGH at count=0, stays HIGH\n;   Use: one-shot delay, interrupt generation\n;\n; Mode 1: Hardware Retriggerable One-Shot\n;   OUT: goes LOW on GATE↑, HIGH at count=0\n;   Use: monostable pulse, retriggerable\n;\n; Mode 2: Rate Generator\n;   OUT: periodic LOW pulse every N clocks\n;   Use: clock divider, periodic interrupt\n;\n; Mode 3: Square Wave Generator\n;   OUT: 50% duty cycle, period = N clocks\n;   Use: speaker tone, baud rate clock\n;\n; Mode 4: Software Triggered Strobe\n;   OUT: one LOW pulse when count=0\n;   Use: delayed one-shot pulse\n;\n; Mode 5: Hardware Triggered Strobe\n;   OUT: one LOW pulse, triggered by GATE↑\n;   Use: hardware-triggered delayed pulse"
      },
      {
        t: "GATE Input Behavior",
        d: "The GATE pin controls whether counting is enabled. In Modes 0 and 2-3, GATE must be HIGH for the counter to decrement (GATE=LOW pauses counting). In Modes 1 and 5, a rising edge on GATE starts/restarts counting (hardware trigger). In the IBM PC, Counter 0 and 1 have GATE tied HIGH (always enabled), while Counter 2's GATE is controlled by a port bit to enable/disable the speaker.",
        code: "; GATE behavior by mode:\n;\n; Modes 0, 2, 3, 4:\n;   GATE=1 → counting enabled\n;   GATE=0 → counting paused (frozen)\n;   GATE↑  → no special effect\n;\n; Modes 1, 5:\n;   GATE↑ (rising edge) → starts/restarts count\n;   GATE level doesn't matter after trigger\n;\n; IBM PC connections:\n;   Counter 0: GATE0 = Vcc (always counting)\n;   Counter 1: GATE1 = Vcc (always counting)\n;   Counter 2: GATE2 = Port 61h bit 0\n;              (software controls speaker)\n;\n; Enable speaker:\n  IN AL, 61h\n  OR AL, 03h           ; set bits 0,1\n  OUT 61h, AL          ; GATE2=1, speaker ON"
      },
      {
        t: "Reading the Current Count",
        d: "You can read the current count value while the counter is running. Method 1: Counter Latch — write a latch command (RL=00 in control word) to freeze the count in a latch register, then read LSB and MSB without stopping the counter. Method 2 (8254 only): Read-Back command — read count and/or status from one or more counters simultaneously.",
        code: "; Reading Counter 0 current count:\n;\n; Method 1: Counter Latch Command\n;   Control = 00 00 xxx x = 00h (counter 0 latch)\n;\n  MOV AL, 00h          ; latch counter 0\n  OUT 43h, AL          ; count frozen in latch\n  IN AL, 40h           ; read LSB\n  MOV AH, AL\n  IN AL, 40h           ; read MSB\n  XCHG AH, AL          ; AX = current count\n;\n; Counter keeps running — latch is a snapshot!\n;\n; Method 2: Read-Back (8254 only)\n;   Control = 11 10 cnt sel = E2h\n;   (read count of counter 0)\n  MOV AL, 0E2h\n  OUT 43h, AL\n  IN AL, 40h           ; read LSB\n  MOV AH, AL\n  IN AL, 40h           ; read MSB"
      },
      {
        t: "IBM PC Timer System",
        d: "The IBM PC uses an 8254 at I/O ports 40h-43h with a 1.193182 MHz clock. Counter 0 generates the ~18.2 Hz system timer interrupt (IRQ0). Counter 1 triggers DRAM refresh (about every 15 microseconds). Counter 2 drives the PC speaker. This architecture persisted through decades of PC evolution — your modern PC still emulates these three timers for backward compatibility.",
        code: "; IBM PC 8254 Timer Configuration:\n;\n; CLK = 1.193182 MHz (from system crystal)\n;\n; Counter 0: System Timer (IRQ0)\n;   Mode 2, count = 0 (=65536)\n;   Rate = 1193182/65536 ≈ 18.2 Hz\n;   Used by DOS for time-of-day clock\n;\n; Counter 1: DRAM Refresh\n;   Mode 2, count = 18\n;   Rate = 1193182/18 ≈ 66.3 KHz\n;   Refresh every ~15 μs\n;\n; Counter 2: Speaker Tone\n;   Mode 3, count varies by desired frequency\n;   440 Hz → count = 1193182/440 = 2712\n;   1000 Hz → count = 1193182/1000 = 1193\n;\n; All three timers share the same clock source"
      }
    ],
    whatIs: "The 8253/8254 Programmable Interval Timer contains three independent 16-bit down counters, each with CLK, GATE, and OUT pins. A control word selects the counter, read/load mode, operating mode (0-5), and BCD/binary counting. Mode 2 (rate generator) and Mode 3 (square wave) are the most commonly used. The timer is essential for generating periodic interrupts, producing audio tones, and creating precise time delays.",
    realWorld: "The IBM PC's 8254 timer at port 40h-43h is one of the most famous uses. Counter 0 drives the 18.2 Hz system tick (used by DOS for timekeeping), Counter 1 refreshes DRAM, and Counter 2 generates the iconic PC speaker beeps. Modern PCs still emulate the 8254 in their chipsets. Every time your computer beeps at POST or plays a simple tone, it is using the same timer architecture designed in the 1980s.",
    code: "; =============================================\n; 8253/8254 Timer — Multi-Mode Example\n; =============================================\n;\n; Timer at base address 40h, CLK = 1.193182 MHz\n;\n; --- Counter 0: 1ms periodic interrupt ---\n; Mode 2 (rate generator), count = 1193\n; Freq = 1193182 / 1193 ≈ 1000 Hz (1ms period)\n;\n; Control: SC=00, RL=11, Mode=010, BCD=0\n;          00 11 010 0 = 34h\n;\n  MOV AL, 34h\n  OUT 43h, AL           ; control word for C0\n  MOV AL, 0A9h          ; LSB of 1193 (04A9h)\n  OUT 40h, AL\n  MOV AL, 04h           ; MSB of 1193\n  OUT 40h, AL           ; C0 now ticks at 1 KHz\n;\n; --- Counter 2: 440 Hz speaker tone ---\n; Mode 3 (square wave), count = 2712\n; 440 Hz = concert pitch A\n;\n; Control: SC=10, RL=11, Mode=011, BCD=0\n;          10 11 011 0 = B6h\n;\n  MOV AL, 0B6h\n  OUT 43h, AL           ; control word for C2\n  MOV AL, 98h           ; LSB of 2712 (0A98h)\n  OUT 42h, AL\n  MOV AL, 0Ah           ; MSB of 2712\n  OUT 42h, AL           ; C2 generates 440 Hz\n;\n; Enable speaker (connect C2 OUT to speaker)\n  IN AL, 61h\n  OR AL, 03h            ; set GATE2 + speaker enable\n  OUT 61h, AL           ; speaker ON — hear 440 Hz!\n;\n; --- Read Counter 0 current value ---\n  MOV AL, 00h           ; latch counter 0\n  OUT 43h, AL\n  IN AL, 40h            ; read LSB\n  MOV CL, AL\n  IN AL, 40h            ; read MSB\n  MOV CH, AL            ; CX = current count snapshot",
    funFact: "The 1.193182 MHz clock frequency used by the IBM PC timer was not chosen for any elegant reason. It was simply 14.31818 MHz (the NTSC color burst frequency, already available on the motherboard for the video card) divided by 12. This awkward frequency means the 18.2 Hz system tick cannot divide evenly into seconds — DOS had to add a correction every 65536 ticks to keep time accurate!",
    quiz: [
      {
        q: "How many independent counters does the 8253/8254 contain?",
        opts: ["1", "2", "3", "4"],
        ans: 2
      },
      {
        q: "Which mode produces a square wave with 50% duty cycle?",
        opts: ["Mode 0", "Mode 1", "Mode 2", "Mode 3"],
        ans: 3
      },
      {
        q: "In Mode 2 (rate generator), if CLK = 1 MHz and count = 1000, what is the output frequency?",
        opts: ["1 MHz", "1000 Hz", "1 Hz", "500 Hz"],
        ans: 1
      },
      {
        q: "What does the Counter Latch command do?",
        opts: [
          "Stops the counter permanently",
          "Freezes the current count in a latch for reading without stopping the counter",
          "Resets the counter to zero",
          "Changes the operating mode"
        ],
        ans: 1
      },
      {
        q: "In the IBM PC, which counter drives the speaker?",
        opts: ["Counter 0", "Counter 1", "Counter 2", "All three"],
        ans: 2
      }
    ],
    challenge: "Program the 8254 to generate a 2 KHz square wave on Counter 2 for a speaker tone. Then, using Counter 0 in Mode 0, create a one-shot delay of exactly 50ms. Calculate the required count values for a 1.193182 MHz clock. Write the complete assembly code including control words and count loading.",
    resources: [
      { type: "video", title: "8253/8254 Timer Explained", url: "https://www.youtube.com/watch?v=7Hk2-TVbjLU", source: "Neso Academy" },
      { type: "article", title: "8254 Programmable Interval Timer", url: "https://www.geeksforgeeks.org/8254-programmable-interval-timer/", source: "GeeksforGeeks" },
      { type: "docs", title: "Intel 8254 Datasheet", url: "https://datasheetspdf.com/pdf/1450313/Intel/8254/1", source: "Intel" },
      { type: "video", title: "PC Speaker Programming", url: "https://www.youtube.com/watch?v=tDacjrSCeq4", source: "Ben Eater" }
    ],
    eli5: "Imagine three countdown clocks on your desk. You set each one to a different number and they tick down together. When one reaches zero, it does something — maybe rings a bell (Mode 0), maybe restarts and rings every time it finishes (Mode 2), or maybe flashes a light on and off steadily (Mode 3). The 8253 timer is exactly that — three countdown clocks that the CPU programs with numbers and rules.",
    codeWalkthrough: [
      "Title comment for the timer example",
      "Separator line",
      "Blank line",
      "Timer base address is 40h, system clock is 1.193182 MHz",
      "Blank line",
      "Section: Counter 0 configured for 1ms periodic interrupt",
      "Mode 2 rate generator with count 1193 produces 1000 Hz (1ms period)",
      "Comment: output frequency = 1193182 / 1193 ≈ 1000 Hz",
      "Blank line",
      "Control word breakdown: counter 0, LSB+MSB load, Mode 2, binary",
      "Binary: 00110100 = 34h",
      "Blank line",
      "Load control word 34h into AL",
      "Write to control register at port 43h",
      "Load LSB of count value 1193 (hex 04A9) — A9h",
      "Write LSB to Counter 0 at port 40h",
      "Load MSB of count value — 04h",
      "Write MSB to Counter 0 — counting begins immediately at 1 KHz",
      "Blank line",
      "Section: Counter 2 for 440 Hz speaker tone (concert pitch A)",
      "Mode 3 square wave with count 2712 produces 440 Hz",
      "Blank line",
      "Control word: counter 2, LSB+MSB, Mode 3, binary = B6h",
      "Blank line",
      "Load control word B6h",
      "Write to control register",
      "Load LSB of 2712 (hex 0A98) — 98h",
      "Write LSB to Counter 2 at port 42h",
      "Load MSB — 0Ah",
      "Write MSB — Counter 2 now generates 440 Hz square wave",
      "Blank line",
      "Enable the speaker by setting bits in port 61h",
      "Read current value of port 61h",
      "OR with 03h to set bit 0 (GATE2) and bit 1 (speaker enable)",
      "Write back — speaker now audibly produces the 440 Hz tone",
      "Blank line",
      "Section: Reading Counter 0 while it runs",
      "Counter latch command: 00h latches counter 0's current value",
      "Write latch command to control register",
      "Read LSB from counter 0",
      "Store LSB in CL",
      "Read MSB from counter 0",
      "Store MSB in CH — CX now holds the snapshot of the running count"
    ],
    bugChallenge: {
      code: "; Generate 1000 Hz on Counter 0, Mode 3\n; CLK = 1.193182 MHz\n; Count = 1193182 / 1000 = 1193 (04A9h)\n;\n  MOV AL, 36h          ; control: C0, LSB+MSB, Mode 3\n  OUT 43h, AL\n  MOV AL, 04h          ; MSB of 1193\n  OUT 40h, AL\n  MOV AL, 0A9h         ; LSB of 1193\n  OUT 40h, AL",
      hint: "When RL=11 (LSB then MSB), which byte must be written first?",
      answer: "The MSB and LSB are written in the wrong order. When RL=11, the 8253 expects LSB first, then MSB. The code writes MSB (04h) first and LSB (A9h) second, so the counter loads 0A904h instead of 04A9h. Fix: swap the two OUT instructions — write A9h first (LSB), then 04h (MSB)."
    },
    difficulty: "advanced",
    prereqs: [39]
  },
  {
    id: 42,
    title: "8259 Programmable Interrupt Controller",
    subtitle: "Managing Hardware Interrupts with Priority",
    analogy: "The 8259 PIC is like a hospital triage nurse. Eight patients (devices) arrive at the emergency room (interrupt lines IR0-IR7) simultaneously. The nurse (priority resolver) decides who sees the doctor (CPU) first based on urgency. The nurse also makes sure the doctor finishes with one patient before starting the next, unless someone more urgent arrives. ICW/OCW are the hospital policies that define how triage works.",
    points: [
      {
        t: "Why We Need an Interrupt Controller",
        d: "The 8086 CPU has only one hardware interrupt pin (INTR). But a real system has many devices (keyboard, timer, disk, serial port) that all need to interrupt the CPU. The 8259 PIC (Programmable Interrupt Controller) accepts up to 8 interrupt requests, resolves priority, and signals the CPU one at a time via INTR. It is the traffic cop between devices and the CPU.",
        code: "; Without 8259: only 1 interrupt line!\n;   Timer  ──┐\n;   Keyboard ─┼── INTR (8086) → chaos!\n;   Disk   ──┘\n;\n; With 8259: organized priority system\n;   Timer    → IR0 ─┐\n;   Keyboard → IR1  ├── 8259 PIC → INTR (8086)\n;   Disk     → IR5  │\n;   Serial   → IR4 ─┘\n;\n; 8259 decides: who goes first?\n; 8259 tells CPU: which ISR to run (vector number)"
      },
      {
        t: "8259 Architecture — Key Components",
        d: "The 8259 contains: IRR (Interrupt Request Register) — latches incoming requests on IR0-IR7. ISR (In-Service Register) — tracks which interrupt is currently being serviced. IMR (Interrupt Mask Register) — masks (disables) individual interrupts. Priority Resolver — compares IRR and ISR to determine the highest-priority pending interrupt. It also generates the interrupt vector number sent to the CPU during the acknowledge cycle.",
        code: "; 8259 Internal Registers:\n;\n; IRR (Interrupt Request Register):\n;   Bit set when device asserts IRx line\n;   8 bits → 8 possible pending requests\n;\n; ISR (In-Service Register):\n;   Bit set when CPU begins servicing IRx\n;   Bit cleared by EOI command\n;\n; IMR (Interrupt Mask Register):\n;   Bit=1 → IRx is MASKED (disabled)\n;   Bit=0 → IRx is ENABLED\n;   Written via OCW1\n;\n; Priority Resolver:\n;   Compares IRR vs ISR\n;   Picks highest-priority unmasked request\n;   Default: IR0 = highest, IR7 = lowest"
      },
      {
        t: "Initialization Command Words (ICW1-ICW4)",
        d: "Before the 8259 can operate, it must be initialized with ICW1 through ICW4, written in strict sequence. ICW1 (port base, A0=0): starts initialization, edge/level trigger, single/cascade. ICW2 (port base+1): sets the base interrupt vector number (upper 5 bits, T7-T3). ICW3: defines cascade connections (master/slave relationship). ICW4: sets 8086 mode, auto-EOI, buffered mode.",
        code: "; ICW1 (port 20h, A0=0): Start initialization\n; Bit layout: 0 0 0 1 LTIM ADI SNGL IC4\n;   LTIM: 1=level, 0=edge triggered\n;   SNGL: 1=single, 0=cascade\n;   IC4:  1=ICW4 needed\n;\n  MOV AL, 11h           ; 00010001: edge, cascade, ICW4\n  OUT 20h, AL           ; ICW1\n;\n; ICW2 (port 21h, A0=1): Vector base\n;   T7-T3 = base vector (IR0 → vector T7-T3:000)\n  MOV AL, 08h           ; IR0 → INT 08h\n  OUT 21h, AL           ; ICW2\n;\n; ICW3 (port 21h): Cascade info\n;   Master: bit=1 where slave is connected\n  MOV AL, 04h           ; slave on IR2\n  OUT 21h, AL           ; ICW3\n;\n; ICW4 (port 21h): 8086 mode\n  MOV AL, 01h           ; 8086 mode, normal EOI\n  OUT 21h, AL           ; ICW4"
      },
      {
        t: "Operation Command Words (OCW1-OCW3)",
        d: "After initialization, OCWs control the 8259 during normal operation. OCW1 (port base+1): writes the IMR to mask/unmask individual interrupts. OCW2 (port base, A0=0): sends EOI commands and controls priority rotation. OCW3 (port base, A0=0): selects which register to read (IRR or ISR) and controls special mask mode.",
        code: "; OCW1 (port 21h): Interrupt Mask Register\n;   Bit = 1 → that IRx is MASKED (disabled)\n;   Bit = 0 → that IRx is ENABLED\n;\n  MOV AL, 0FBh          ; 11111011 — mask all except IR2\n  OUT 21h, AL           ; only IR2 can interrupt\n;\n; OCW2 (port 20h): End of Interrupt\n;   Non-specific EOI: 00100000 = 20h\n;   Specific EOI:     01100xxx (xxx = IR level)\n;\n  MOV AL, 20h           ; non-specific EOI\n  OUT 20h, AL           ; tell 8259: interrupt done\n;\n; OCW3 (port 20h): Read register\n;   Read IRR: 00001010 = 0Ah\n;   Read ISR: 00001011 = 0Bh\n;\n  MOV AL, 0Bh           ; select ISR for reading\n  OUT 20h, AL\n  IN AL, 20h            ; AL = ISR contents"
      },
      {
        t: "Interrupt Acknowledge Sequence",
        d: "When the 8259 asserts INTR: (1) CPU finishes current instruction. (2) CPU sends first INTA pulse — 8259 sets the ISR bit for the highest-priority request and clears the IRR bit. (3) CPU sends second INTA pulse — 8259 places the 8-bit interrupt vector number on the data bus. (4) CPU reads the vector, looks up the ISR address in the IVT, and jumps to the handler. (5) Handler ends with EOI command to 8259, then IRET.",
        code: "; Interrupt Acknowledge Sequence:\n;\n; 1. Device asserts IR3 → IRR bit 3 set\n; 2. Priority resolver: IR3 is highest pending\n; 3. 8259 asserts INTR to CPU\n; 4. CPU finishes current instruction\n; 5. CPU sends INTA pulse 1:\n;    → ISR bit 3 set, IRR bit 3 cleared\n; 6. CPU sends INTA pulse 2:\n;    → 8259 puts vector (0Bh) on data bus\n; 7. CPU reads vector 0Bh\n;    → IVT[0Bh] = address of IR3 handler\n;    → CPU jumps to ISR (Interrupt Service Routine)\n;\n; 8. ISR code runs...\n; 9. ISR sends EOI:\n  MOV AL, 20h\n  OUT 20h, AL           ; clear ISR bit 3\n; 10. IRET → return to interrupted program"
      },
      {
        t: "Cascading — Expanding to 64 Interrupts",
        d: "A single 8259 handles 8 interrupts. For more, cascade a master 8259 with up to 8 slave 8259s, giving up to 64 interrupt sources. The slave's INT output connects to one of the master's IR inputs. ICW3 tells the master which IR lines have slaves, and tells each slave its cascade ID. The IBM PC/AT uses one master and one slave for 15 usable interrupts.",
        code: "; Cascaded 8259 (IBM PC/AT style):\n;\n;  Slave 8259          Master 8259\n;  IR0: IRQ8 (RTC)     IR0: IRQ0 (Timer)\n;  IR1: IRQ9           IR1: IRQ1 (Keyboard)\n;  IR2: IRQ10          IR2 ← Slave INT (cascade)\n;  ...                 IR3: IRQ3 (COM2)\n;  IR7: IRQ15          IR4: IRQ4 (COM1)\n;                      IR5: IRQ5 (LPT2)\n;                      IR6: IRQ6 (Floppy)\n;                      IR7: IRQ7 (LPT1)\n;\n; Master ICW3 = 04h (slave on IR2)\n; Slave  ICW3 = 02h (cascade ID = 2)\n;\n; Total: 8 (master) + 8 (slave) - 1 (cascade) = 15"
      },
      {
        t: "End of Interrupt (EOI) — Why It Matters",
        d: "After the CPU finishes an ISR, it must send an EOI command to the 8259 to clear the ISR bit. Without EOI, the 8259 thinks the interrupt is still being serviced and blocks all equal-or-lower-priority interrupts. Non-specific EOI (20h) clears the highest ISR bit. Specific EOI (60h+level) clears a specific bit. Auto-EOI mode (set in ICW4) clears the bit automatically during INTA — but this can cause issues with nested interrupts.",
        code: "; EOI is CRITICAL — forgetting it blocks interrupts!\n;\n; Non-specific EOI (most common):\n  MOV AL, 20h\n  OUT 20h, AL           ; clears highest ISR bit\n;\n; Specific EOI for IR3:\n  MOV AL, 63h           ; 01100 011 = specific EOI, IR3\n  OUT 20h, AL\n;\n; For cascaded system, EOI both slave and master:\n  MOV AL, 20h\n  OUT 0A0h, AL          ; EOI to slave (port A0h)\n  MOV AL, 20h\n  OUT 20h, AL           ; EOI to master (port 20h)\n;\n; Auto-EOI mode (ICW4 bit 1 = 1):\n;   ISR bit cleared automatically on INTA\n;   Risk: nested interrupts of same level"
      },
      {
        t: "Complete 8259 Setup Example",
        d: "A typical single-8259 setup for an 8086 system: initialize with ICW1-4 to set edge-triggered, vector base 20h (IR0 maps to INT 20h), single mode, 8086 mode. Then use OCW1 to unmask the desired interrupts. Write ISR handlers at the vector table addresses. Each ISR ends with EOI and IRET.",
        code: "; Complete 8259 initialization at port 20h/21h:\n;\n; ICW1: edge-triggered, single, ICW4 needed\n  MOV AL, 13h           ; 00010011\n  OUT 20h, AL\n;\n; ICW2: vector base = 20h (IR0 → INT 20h)\n  MOV AL, 20h\n  OUT 21h, AL\n;\n; ICW4: 8086 mode\n  MOV AL, 01h\n  OUT 21h, AL\n;\n; OCW1: unmask IR0 and IR1 only\n  MOV AL, 0FCh          ; 11111100 — IR0,IR1 enabled\n  OUT 21h, AL\n;\n; Set up IVT entry for IR0 (INT 20h):\n;   Vector 20h → address at 0000:0080h\n  MOV WORD PTR [0080h], OFFSET TIMER_ISR\n  MOV WORD PTR [0082h], SEG TIMER_ISR\n;\n; Enable CPU interrupts:\n  STI\n;\n; Timer ISR:\nTIMER_ISR:\n  PUSH AX\n  ; ... handle timer event ...\n  MOV AL, 20h\n  OUT 20h, AL           ; EOI\n  POP AX\n  IRET"
      }
    ],
    whatIs: "The 8259 PIC (Programmable Interrupt Controller) manages up to 8 hardware interrupt sources for the 8086 CPU. It contains priority resolution logic, masking capability, and vector generation. Initialized with ICW1-4 (setting trigger mode, vector base, cascade config, and 8086 mode), it is controlled during operation with OCW1-3 (masking, EOI, register reads). Multiple 8259s can be cascaded for up to 64 interrupts.",
    realWorld: "The IBM PC used two 8259A PICs in cascade (master at 20h-21h, slave at A0h-A1h) providing 15 interrupt channels. IRQ0 was the timer, IRQ1 the keyboard, IRQ6 the floppy drive. This architecture persisted until modern PCs replaced the 8259 with the APIC (Advanced PIC) for multi-core support — but even today, the APIC still emulates the 8259 for legacy compatibility during boot.",
    code: "; =============================================\n; 8259 PIC — Full Initialization and Usage\n; =============================================\n;\n; Single 8259 at ports 20h (A0=0) and 21h (A0=1)\n; Vectors: IR0=INT 08h, IR1=INT 09h, ..., IR7=INT 0Fh\n;\n; === INITIALIZATION ===\n;\n; ICW1: edge-triggered, cascade, ICW4 needed\n  MOV AL, 11h           ; 0001 0001\n  OUT 20h, AL\n;\n; ICW2: base vector = 08h\n  MOV AL, 08h           ; IR0 → INT 08h\n  OUT 21h, AL\n;\n; ICW3: master — slave on IR2\n  MOV AL, 04h           ; bit 2 = 1 (slave on IR2)\n  OUT 21h, AL\n;\n; ICW4: 8086 mode, normal EOI\n  MOV AL, 01h           ; 0000 0001\n  OUT 21h, AL\n;\n; === OPERATION ===\n;\n; Unmask Timer (IR0) and Keyboard (IR1):\n  MOV AL, 0FCh          ; 1111 1100\n  OUT 21h, AL           ; OCW1: IR0,IR1 enabled\n;\n; ISR for Timer (INT 08h):\nTIMER_ISR:\n  PUSH AX\n  PUSH DS\n  ; ... increment tick counter ...\n  MOV AX, 0040h\n  MOV DS, AX\n  INC WORD PTR [006Ch]  ; BIOS tick counter\n  MOV AL, 20h           ; non-specific EOI\n  OUT 20h, AL\n  POP DS\n  POP AX\n  IRET                  ; return from interrupt\n;\n; ISR for Keyboard (INT 09h):\nKBD_ISR:\n  PUSH AX\n  IN AL, 60h            ; read scan code from keyboard\n  ; ... process key ...\n  MOV AL, 20h           ; EOI\n  OUT 20h, AL\n  POP AX\n  IRET",
    funFact: "The 8259 was designed by Intel in 1976 and became one of the longest-lived chip designs in computing history. When the IBM PC/AT added a second 8259 in 1984 for more interrupts, the cascade on IR2 created the famous IRQ numbering gap: IRQ0-1 worked normally, IRQ2 was replaced by IRQ9 from the slave, and the system had 15 usable IRQs instead of 16. This quirk persisted for over 30 years in PC architecture.",
    quiz: [
      {
        q: "How many interrupt sources can a single 8259 handle?",
        opts: ["1", "4", "8", "16"],
        ans: 2
      },
      {
        q: "What is the purpose of ICW2?",
        opts: [
          "Set the interrupt mask",
          "Define the base interrupt vector number",
          "Send End of Interrupt",
          "Configure cascade mode"
        ],
        ans: 1
      },
      {
        q: "What happens if you forget to send EOI after an ISR?",
        opts: [
          "Nothing — it is optional",
          "The system reboots",
          "Equal-or-lower-priority interrupts are permanently blocked",
          "The ISR runs again immediately"
        ],
        ans: 2
      },
      {
        q: "How many interrupt sources can a fully cascaded 8259 system support?",
        opts: ["8", "15", "16", "64"],
        ans: 3
      },
      {
        q: "During the interrupt acknowledge sequence, when does the 8259 place the vector on the data bus?",
        opts: [
          "Before INTA",
          "During the first INTA pulse",
          "During the second INTA pulse",
          "After IRET"
        ],
        ans: 2
      }
    ],
    challenge: "Initialize a cascaded 8259 system (master at 20h, slave at A0h) with IR0=timer (vector 20h on master), IR1=keyboard (vector 21h on master), and slave on IR2 with IR8=real-time clock (vector 70h). Write the complete ICW1-4 sequence for BOTH master and slave, then write ISR stubs for the timer and RTC including proper cascaded EOI.",
    resources: [
      { type: "video", title: "8259 PIC Explained", url: "https://www.youtube.com/watch?v=RaGzGqsqFMc", source: "Neso Academy" },
      { type: "article", title: "8259 Programmable Interrupt Controller", url: "https://www.geeksforgeeks.org/8259-pic-microprocessor/", source: "GeeksforGeeks" },
      { type: "docs", title: "Intel 8259A Datasheet", url: "https://pdos.csail.mit.edu/6.828/2005/readings/hardware/8259A.pdf", source: "Intel" },
      { type: "video", title: "How IRQs Work in PCs", url: "https://www.youtube.com/watch?v=CXkbPHLFKHg", source: "Education 4u" }
    ],
    eli5: "Imagine you are a teacher and 8 students all raise their hands at once. You cannot talk to all of them at the same time! The 8259 is like a class monitor who watches all 8 hands, decides which student has the most urgent question (priority), taps you on the shoulder (INTR), and tells you which student number to call on (vector). After you answer that student, the monitor says 'done!' (EOI) and checks if anyone else still has their hand up.",
    codeWalkthrough: [
      "Title comment for 8259 PIC setup",
      "Separator line",
      "Blank line",
      "PIC is at I/O ports 20h (commands) and 21h (data/mask)",
      "Vector mapping: IR0 maps to INT 08h, IR1 to INT 09h, and so on",
      "Blank line",
      "=== INITIALIZATION SECTION ===",
      "Blank line",
      "ICW1: edge-triggered interrupts, cascade mode, ICW4 will follow",
      "11h = 00010001 in binary: bit4=1 starts init, bit0=1 means ICW4 needed",
      "Write ICW1 to port 20h (A0=0 is required for ICW1)",
      "Blank line",
      "ICW2: set the base vector number — IR0 will map to INT 08h",
      "Only the upper 5 bits matter (08h = 00001 000), IR number fills lower 3",
      "Write ICW2 to port 21h (A0=1 for ICW2-4)",
      "Blank line",
      "ICW3: on the master, bit 2 set means a slave 8259 is connected to IR2",
      "04h = 00000100 — only IR2 has a cascade slave",
      "Write ICW3 to port 21h",
      "Blank line",
      "ICW4: set 8086 mode (vs 8080) and normal EOI (not auto-EOI)",
      "01h = 00000001 — bit 0 = 1 means 8086/8088 mode",
      "Write ICW4 to port 21h — initialization complete",
      "Blank line",
      "=== OPERATION SECTION ===",
      "Blank line",
      "OCW1 sets the interrupt mask register",
      "0FCh = 11111100 — bits 0 and 1 are 0 (unmasked), enabling IR0 and IR1",
      "Write mask to port 21h — only timer and keyboard can now interrupt",
      "Blank line",
      "Timer ISR label — CPU jumps here on INT 08h (timer tick)",
      "Save AX and DS on stack (preserve caller's state)",
      "Comment: perform the timer handler actions",
      "Point DS to BIOS data segment at 0040h",
      "Set DS to 0040h",
      "Increment the 16-bit BIOS tick counter at 0040:006Ch",
      "Load non-specific EOI command (20h) into AL",
      "Send EOI to 8259 at port 20h — clears the ISR bit for this interrupt",
      "Restore DS and AX from stack",
      "Blank line",
      "IRET returns from interrupt — restores IP, CS, and FLAGS",
      "Blank line",
      "Keyboard ISR label — CPU jumps here on INT 09h",
      "Save AX",
      "Read keyboard scan code from port 60h (keyboard controller)",
      "Comment: process the key (buffer it, translate to ASCII, etc.)",
      "Send EOI to 8259",
      "Blank line",
      "Restore AX and return from interrupt"
    ],
    bugChallenge: {
      code: "; Initialize 8259 at port 20h/21h:\n;\n  MOV AL, 11h\n  OUT 20h, AL          ; ICW1\n;\n  MOV AL, 20h\n  OUT 21h, AL          ; ICW2: base vector 20h\n;\n  MOV AL, 01h\n  OUT 21h, AL          ; ICW4: 8086 mode\n;\n; Unmask IR0:\n  MOV AL, 0FEh\n  OUT 21h, AL          ; OCW1\n;\n; Timer ISR:\nTIMER:\n  ; handle timer...\n  IRET",
      hint: "ICW1 specified cascade mode (bit SNGL=0), but how many ICW words were actually written? Count them.",
      answer: "ICW1 sets SNGL=0 (cascade mode), which requires ICW3 to define the cascade configuration. But ICW3 was skipped — the code jumps from ICW2 directly to ICW4. The 8259 expects ICW3 after ICW2 in cascade mode, so what the code writes as ICW4 (01h) is actually interpreted as ICW3, and the 8259 never receives ICW4. Fix: either add ICW3 (e.g., MOV AL,00h / OUT 21h,AL) before ICW4, or change ICW1 to 17h (set SNGL=1) if cascade is not needed. Also, the ISR is missing the EOI command before IRET."
    },
    difficulty: "advanced",
    prereqs: [35, 39]
  },
  {
    id: 43,
    title: "8237 DMA Controller",
    subtitle: "Data Transfer Without CPU Overhead",
    analogy: "Imagine you are a manager (CPU) who normally carries every box from the warehouse (memory) to the shipping dock (I/O device) yourself — one box at a time, reading the label, picking it up, walking over, putting it down. The 8237 DMA is like hiring a forklift driver who takes over: you tell him 'move 1000 boxes from aisle 5 to the dock,' and he does it all while you sit at your desk doing other paperwork. You only lend him your hallway (bus) while he works.",
    points: [
      {
        t: "What is DMA and Why Is It Needed?",
        d: "DMA (Direct Memory Access) allows peripheral devices to transfer data directly to/from memory without the CPU executing instructions for each byte. Without DMA, the CPU must execute IN/OUT and MOV for every byte — using 100% of its time during large transfers (like reading a disk sector of 512 bytes). With DMA, the CPU just sets up the transfer and goes back to computing while the 8237 handles the data movement.",
        code: "; WITHOUT DMA — CPU does everything:\n;   MOV CX, 512          ; 512 bytes to transfer\n; LOOP:\n;   IN AL, DX            ; read byte from device\n;   MOV [DI], AL         ; store in memory\n;   INC DI\n;   LOOP LOOP            ; 512 iterations!\n;   ; CPU is 100% busy for entire transfer\n;\n; WITH DMA — CPU sets up, then is FREE:\n;   ; Program 8237: source=device, dest=memory\n;   ; Count=512, start transfer\n;   ; CPU continues other work!\n;   ; 8237 moves all 512 bytes automatically\n;   ; CPU gets interrupt when done"
      },
      {
        t: "8237 Architecture — 4 DMA Channels",
        d: "The 8237 has 4 independent DMA channels (CH0-CH3). Each channel has: a 16-bit address register (current address), a 16-bit count register (bytes remaining), and a page register (external, provides upper address bits). The 8237 also contains a command register, mode registers, status register, mask register, and request register for controlling operations.",
        code: "; 8237 — 4 DMA channels:\n;\n; Channel 0: address reg + count reg\n; Channel 1: address reg + count reg\n; Channel 2: address reg + count reg\n; Channel 3: address reg + count reg\n;\n; Each channel:\n;   Base Address Register (16-bit)\n;   Base Count Register (16-bit)\n;   Current Address Register (auto-increments)\n;   Current Count Register (auto-decrements)\n;\n; IBM PC DMA channels:\n;   CH0: DRAM refresh (not for user)\n;   CH1: available\n;   CH2: Floppy disk controller\n;   CH3: Hard disk (XT)"
      },
      {
        t: "DREQ, DACK, HRQ, and HLDA Signals",
        d: "The DMA handshake uses four key signals. DREQ (DMA Request): the peripheral asserts this to request a transfer. DACK (DMA Acknowledge): the 8237 responds, telling the device its channel is active. HRQ (Hold Request): the 8237 asks the CPU to release the bus. HLDA (Hold Acknowledge): the CPU grants the bus to the 8237. Only after HLDA does the 8237 take control of address and data buses.",
        code: "; DMA Handshake Sequence:\n;\n; 1. Device asserts DREQ2 (want to transfer!)\n; 2. 8237 asserts HRQ to CPU (need the bus!)\n; 3. CPU finishes current bus cycle\n; 4. CPU tri-states its buses\n; 5. CPU asserts HLDA (bus is yours!)\n; 6. 8237 asserts DACK2 (acknowledged CH2!)\n; 7. 8237 drives address bus and control signals\n; 8. Data transfers: memory ↔ device\n; 9. Count decremented, address incremented\n; 10. When count = 0: TC (Terminal Count) asserted\n; 11. 8237 releases HRQ\n; 12. CPU de-asserts HLDA, resumes"
      },
      {
        t: "Transfer Modes — Single, Block, Demand, Cascade",
        d: "Single Transfer: one byte per DREQ, CPU gets the bus back between bytes. Block Transfer: once started, transfers all N bytes without releasing the bus — fastest but blocks the CPU entirely. Demand Transfer: transfers as long as DREQ is active; if DREQ drops, the 8237 releases the bus and resumes when DREQ returns. Cascade: used to chain 8237s for more channels.",
        code: "; Transfer Mode (bits 7-6 of Mode Register):\n;\n; 00 = Demand Transfer\n;   Transfers while DREQ active\n;   DREQ drops → bus released → resumes later\n;   Good for: slow devices with variable data\n;\n; 01 = Single Transfer\n;   One byte per DREQ assertion\n;   CPU gets bus between each byte\n;   Good for: shared bus, fair CPU access\n;\n; 10 = Block Transfer\n;   All N bytes without releasing bus\n;   CPU locked out until TC (terminal count)\n;   Good for: fastest bulk transfer\n;\n; 11 = Cascade\n;   Used to daisy-chain multiple 8237s\n;   Channel acts as cascade input"
      },
      {
        t: "Transfer Types — Read, Write, Verify",
        d: "The 8237 supports three transfer types. Write transfer: data moves from I/O device to memory (device → memory). Read transfer: data moves from memory to I/O device (memory → device). Verify transfer: the 8237 generates addresses but no actual data transfer occurs — used for testing. Naming convention: 'read' and 'write' are from memory's perspective.",
        code: "; Transfer Type (bits 3-2 of Mode Register):\n;\n; 00 = Verify (no actual transfer, just addressing)\n; 01 = Write (I/O → Memory)\n;     Device sends data, memory receives\n;     Example: floppy disk → RAM\n; 10 = Read (Memory → I/O)\n;     Memory sends data, device receives\n;     Example: RAM → sound card\n;\n; Mode Register for CH2, single, write:\n;   Bits: 01 0 0 01 10 = 46h\n;         ││ │ │ ││ └─ channel 2\n;         ││ │ │ └┘── write transfer\n;         ││ │ └───── no auto-init\n;         ││ └────── increment address\n;         └┘──────── single transfer"
      },
      {
        t: "Programming the 8237 — Register Setup",
        d: "To program a DMA transfer: (1) Write the mode register for the channel. (2) Clear the byte pointer flip-flop (ensures LSB-first order). (3) Write the start address (LSB then MSB) to the address register. (4) Write the count minus 1 (LSB then MSB) to the count register. (5) Write the page register (upper address bits). (6) Unmask the channel. The 8237 is now armed and will begin when DREQ is asserted.",
        code: "; Program CH2 for 512-byte transfer to memory\n; Source: floppy controller, Dest: memory at 1000h\n;\n; 8237 ports (IBM PC):\n;   04h: CH2 address\n;   05h: CH2 count\n;   0Bh: mode register\n;   0Ch: clear byte pointer flip-flop\n;   0Ah: single mask register\n;   81h: CH2 page register\n;\n; Step 1: Set mode — single, write, CH2\n  MOV AL, 46h           ; single, write, ch2\n  OUT 0Bh, AL\n;\n; Step 2: Clear byte pointer flip-flop\n  OUT 0Ch, AL           ; any write clears it\n;\n; Step 3: Write start address (1000h)\n  MOV AL, 00h           ; LSB of 1000h\n  OUT 04h, AL\n  MOV AL, 10h           ; MSB of 1000h\n  OUT 04h, AL\n;\n; Step 4: Write count - 1 (511 = 01FFh)\n  MOV AL, 0FFh          ; LSB of 511\n  OUT 05h, AL\n  MOV AL, 01h           ; MSB of 511\n  OUT 05h, AL\n;\n; Step 5: Page register (upper address)\n  MOV AL, 00h           ; page 0\n  OUT 81h, AL\n;\n; Step 6: Unmask CH2\n  MOV AL, 02h           ; unmask ch2\n  OUT 0Ah, AL\n;\n; DMA is now armed — transfer starts on DREQ2"
      },
      {
        t: "Page Registers and 64KB Boundaries",
        d: "The 8237 has only 16-bit address registers, addressing 64KB. To access the full 8086 address space (1MB), external page registers supply the upper 4 address bits (A16-A19). A DMA transfer CANNOT cross a 64KB page boundary — if it does, the address wraps around within the same page instead of incrementing to the next. Programmers must ensure buffers do not straddle a 64KB boundary.",
        code: "; 20-bit address = Page (4 bits) + Offset (16 bits)\n;\n; Example: transfer to physical address 2A000h\n;   Page register = 02h  (A19-A16 = 0010)\n;   Address register = A000h (A15-A0)\n;\n; 64KB boundary problem:\n;   Buffer at FFF0h, 32 bytes\n;   After byte 16: address should be 10000h\n;   But 8237 wraps: FFF0 → FFF1 → ... → FFFF → 0000!\n;   Data goes to start of SAME page, not next page!\n;\n; Rule: buffer_start + count must not cross\n;       a 64KB boundary (xx0000h - xxFFFFh)\n;\n; Safe: buffer at 1000h, 512 bytes → 1000-11FF ✓\n; Unsafe: buffer at FF00h, 512 bytes → wraps! ✗"
      },
      {
        t: "IBM PC DMA Usage",
        d: "The IBM PC has two 8237 chips. The first (ports 00h-0Fh) handles 8-bit channels 0-3: CH0 for DRAM refresh, CH2 for floppy disk. The second 8237 (ports C0h-DFh) handles 16-bit channels 5-7: CH5/6/7 for ISA peripherals. CH4 is used for cascading the two 8237s. Sound Blaster cards typically use CH1 for 8-bit audio DMA. The floppy controller's DMA channel 2 is why floppy access feels seamless even on slow CPUs.",
        code: "; IBM PC DMA assignments:\n;\n; 8-bit DMA (first 8237, ports 00-0F):\n;   CH0: Memory refresh (auto-init)\n;   CH1: Available (Sound Blaster uses this)\n;   CH2: Floppy disk controller\n;   CH3: Hard disk (XT) / available (AT)\n;\n; 16-bit DMA (second 8237, ports C0-DF):\n;   CH4: Cascade from first 8237\n;   CH5: Available\n;   CH6: Available\n;   CH7: Available\n;\n; Floppy read: CH2 transfers 512 bytes/sector\n;   FDC asserts DREQ2 for each byte\n;   8237 moves byte from FDC to memory\n;   CPU is free during entire sector read!"
      }
    ],
    whatIs: "The 8237 DMA Controller enables peripheral devices to transfer data directly to/from memory without CPU involvement. It has 4 channels, each with address and count registers. When a device asserts DREQ, the 8237 requests the bus from the CPU (HRQ/HLDA), then autonomously generates addresses and control signals to move data. It supports single, block, demand, and cascade transfer modes, freeing the CPU for other tasks during bulk data movement.",
    realWorld: "Every modern computer uses DMA extensively. When you copy a large file, the disk controller uses DMA to move data to RAM without CPU intervention. Your sound card uses DMA to stream audio samples. Network cards use DMA to receive packets. Modern DMA controllers are far more capable than the 8237 (scatter-gather lists, virtual addresses), but the fundamental concept — letting hardware move data without the CPU — is identical.",
    code: "; =============================================\n; 8237 DMA — Floppy Disk Read Setup\n; =============================================\n;\n; Transfer 512 bytes from floppy to memory at 1000h\n; Using DMA Channel 2 (IBM PC floppy channel)\n;\n; Disable DMA channel 2 during setup:\n  MOV AL, 06h           ; mask CH2 (04h + 02h)\n  OUT 0Ah, AL           ; single mask register\n;\n; Set mode: single transfer, write (device→mem), CH2\n  MOV AL, 46h           ; 01 0 0 01 10\n  OUT 0Bh, AL           ; mode register\n;\n; Clear byte pointer flip-flop:\n  MOV AL, 00h\n  OUT 0Ch, AL           ; resets LSB/MSB toggle\n;\n; Set start address = 1000h:\n  MOV AL, 00h           ; address LSB\n  OUT 04h, AL           ; CH2 address register\n  MOV AL, 10h           ; address MSB\n  OUT 04h, AL\n;\n; Set count = 511 (transfers 512 bytes):\n  MOV AL, 0FFh          ; count LSB (01FFh)\n  OUT 05h, AL           ; CH2 count register\n  MOV AL, 01h           ; count MSB\n  OUT 05h, AL\n;\n; Set page register = 0 (physical page 0):\n  MOV AL, 00h\n  OUT 81h, AL           ; CH2 page register\n;\n; Enable DMA channel 2:\n  MOV AL, 02h           ; unmask CH2\n  OUT 0Ah, AL\n;\n; DMA is armed!\n; Now send 'read sector' command to floppy controller\n; FDC will assert DREQ2 for each byte\n; 8237 handles the entire 512-byte transfer\n; CPU is FREE to do other work\n; When done: TC asserted → interrupt via IRQ6",
    funFact: "The 8237 DMA controller could transfer data at about 1.6 MB/s in the original IBM PC — which was actually faster than the CPU could manage with programmed I/O loops. This speed advantage was crucial for floppy disk access: without DMA, the 4.77 MHz 8088 could barely keep up with the floppy data rate, and missed bytes would require re-reading the entire track. DMA made reliable floppy access possible on early PCs.",
    quiz: [
      {
        q: "What is the main advantage of DMA over programmed I/O?",
        opts: [
          "DMA uses less memory",
          "DMA frees the CPU during data transfer between memory and devices",
          "DMA is more accurate",
          "DMA requires no setup"
        ],
        ans: 1
      },
      {
        q: "What signal does the 8237 assert to request the bus from the CPU?",
        opts: ["DREQ", "DACK", "HRQ", "INTR"],
        ans: 2
      },
      {
        q: "Why can't an 8237 DMA transfer cross a 64KB boundary?",
        opts: [
          "The 8237 only has 16-bit address registers — the address wraps within the current page",
          "Memory chips cannot handle cross-boundary reads",
          "The CPU prevents it",
          "The data bus is too narrow"
        ],
        ans: 0
      },
      {
        q: "In Block Transfer mode, what happens to CPU bus access during the transfer?",
        opts: [
          "The CPU shares the bus equally",
          "The CPU is locked out until the entire transfer completes",
          "The CPU runs at half speed",
          "The CPU switches to a different bus"
        ],
        ans: 1
      },
      {
        q: "Why is the count register loaded with N-1 instead of N?",
        opts: [
          "To save space in the register",
          "Because the 8237 transfers (count+1) bytes — it counts down from N-1 to 0 inclusive",
          "Because the first byte is transferred by the CPU",
          "It is a bug in the 8237 design"
        ],
        ans: 1
      }
    ],
    challenge: "Program the 8237 to transfer 1024 bytes from a hypothetical ADC (Analog-to-Digital Converter) device on DMA channel 1 into a memory buffer at physical address 28000h. Calculate the page register value, determine if the transfer crosses a 64KB boundary, and write the complete setup code including mode, address, count, page, and unmask.",
    resources: [
      { type: "video", title: "DMA Controller 8237 Explained", url: "https://www.youtube.com/watch?v=2kCKMSKlvVM", source: "Neso Academy" },
      { type: "article", title: "8237 DMA Controller", url: "https://www.geeksforgeeks.org/8237-dma-controller/", source: "GeeksforGeeks" },
      { type: "docs", title: "Intel 8237A Datasheet", url: "https://datasheetspdf.com/pdf/79strona/1/Intel/8237A", source: "Intel" },
      { type: "video", title: "How DMA Works in Computers", url: "https://www.youtube.com/watch?v=tDFxBaVksBw", source: "Education 4u" }
    ],
    eli5: "Normally, if you want to move toys from one box to another, YOU have to pick up each toy and carry it. That takes all your time! DMA is like having a robot arm that moves the toys for you. You just tell the robot: 'Move 10 toys from the red box to the blue box.' The robot does all the carrying while you go play with other things. When the robot finishes, it taps you on the shoulder (interrupt) and says 'All done!'",
    codeWalkthrough: [
      "Title comment for floppy disk DMA setup",
      "Separator line",
      "Blank line",
      "Description: transfer 512 bytes from floppy to memory address 1000h",
      "Using DMA Channel 2, which is the standard IBM PC floppy channel",
      "Blank line",
      "First, disable (mask) CH2 so we can safely modify its registers",
      "06h = mask bit set + channel 2 selection",
      "Write to single mask register at port 0Ah",
      "Blank line",
      "Set the transfer mode for CH2",
      "46h = single transfer, write (I/O to memory), channel 2",
      "Write to mode register at port 0Bh",
      "Blank line",
      "Clear the byte pointer flip-flop to ensure next write goes to LSB first",
      "Any value written to port 0Ch clears the flip-flop",
      "Write to clear flip-flop register",
      "Blank line",
      "Set the starting memory address to 1000h",
      "First write LSB = 00h to CH2 address register at port 04h",
      "Write LSB",
      "Then write MSB = 10h",
      "Write MSB — CH2 will start transferring to address 1000h",
      "Blank line",
      "Set byte count to 511 (8237 transfers count+1 bytes, so 511+1=512)",
      "LSB of 511 (01FFh) is FFh",
      "Write LSB to CH2 count register at port 05h",
      "MSB is 01h",
      "Write MSB — 8237 will transfer 512 bytes total",
      "Blank line",
      "Set the page register for physical address bits A16-A19",
      "Address 1000h is in page 0 (A19-A16 = 0000)",
      "Write to CH2 page register at port 81h",
      "Blank line",
      "Enable CH2 by clearing its mask bit",
      "02h = unmask channel 2",
      "Write to single mask register — DMA is now armed and ready",
      "Blank line",
      "Comment: 8237 is waiting for DREQ2 from floppy controller",
      "Comment: send read command to FDC to start the disk operation",
      "Comment: FDC asserts DREQ2 each time a byte is ready",
      "Comment: 8237 handles the complete transfer autonomously",
      "Comment: CPU is free to execute other code during the transfer",
      "Comment: terminal count triggers IRQ6 to notify CPU of completion"
    ],
    bugChallenge: {
      code: "; DMA CH1 transfer 256 bytes to address 2000h\n;\n  MOV AL, 45h          ; mode: single, write, CH1\n  OUT 0Bh, AL\n;\n  OUT 0Ch, AL          ; clear flip-flop\n;\n  MOV AL, 00h\n  OUT 02h, AL          ; CH1 addr LSB\n  MOV AL, 20h\n  OUT 02h, AL          ; CH1 addr MSB\n;\n  MOV AL, 00h          ; count = 256\n  OUT 03h, AL          ; CH1 count LSB\n  MOV AL, 01h\n  OUT 03h, AL          ; CH1 count MSB\n;\n  MOV AL, 01h\n  OUT 0Ah, AL          ; unmask CH1",
      hint: "The count register should hold N-1 for N bytes. What value does 0100h represent?",
      answer: "The count is loaded with 256 (0100h), but the 8237 transfers count+1 bytes. So this actually transfers 257 bytes, not 256. For 256 bytes, load count-1 = 255 = 00FFh. Fix: change count LSB to FFh (MOV AL, 0FFh) and count MSB to 00h (MOV AL, 00h)."
    },
    difficulty: "advanced",
    prereqs: [42]
  },
  {
    id: 44,
    title: "8251 USART and Serial Communication Basics",
    subtitle: "Talking One Bit at a Time",
    analogy: "Parallel communication is like a wide highway with 8 lanes — all 8 bits travel side by side, arriving instantly. Serial communication is like a single-lane road — bits travel one after another in a queue. It is slower per clock, but you only need one wire instead of eight! The 8251 USART is like a traffic controller at the end of this single-lane road: it takes the 8-bit byte from the CPU, lines the bits up single-file (serialize), and sends them down the wire. On the receiving end, it collects arriving bits and reassembles them into a byte (deserialize).",
    points: [
      {
        t: "Serial vs Parallel Communication",
        d: "Parallel sends all 8 bits simultaneously on 8 wires — fast but requires many connections. Serial sends bits one at a time on 1-2 wires — slower per clock but needs far fewer wires, making it practical for long distances and connections between separate devices. At high speeds, serial actually wins because parallel wires suffer from timing skew — which is why USB, Ethernet, and SATA are all serial.",
        code: "; Parallel Communication:\n;   D0 ────── Bit 0 ──────→\n;   D1 ────── Bit 1 ──────→  (8 wires)\n;   D2 ────── Bit 2 ──────→  All bits\n;   ...                       at once\n;   D7 ────── Bit 7 ──────→\n;\n; Serial Communication:\n;   TX ── b0 b1 b2 b3 b4 b5 b6 b7 ──→\n;         (1 wire, bits one at a time)\n;\n; Parallel: 8 bits/clock, but 8+ wires\n; Serial:   1 bit/clock, but 1-2 wires\n; Long distance: serial wins (fewer wires)\n; Modern: USB, SATA, Ethernet all serial!"
      },
      {
        t: "UART vs USART",
        d: "UART (Universal Asynchronous Receiver/Transmitter) handles only asynchronous communication — no shared clock between sender and receiver. USART (Universal Synchronous/Asynchronous Receiver/Transmitter) supports BOTH asynchronous and synchronous modes. Async uses start/stop bits to frame each byte. Sync uses a shared clock signal, sending data continuously without start/stop overhead.",
        code: "; Asynchronous (UART):\n;   No shared clock between sender/receiver\n;   Each byte framed with start + stop bits\n;   |START|D0|D1|D2|D3|D4|D5|D6|D7|PAR|STOP|\n;   Sender and receiver agree on baud rate\n;\n; Synchronous (USART):\n;   Shared clock line between sender/receiver\n;   Data sent continuously, no start/stop bits\n;   |SYNC|D0|D1|...|D7|D0|D1|...|D7|...\n;   More efficient (no overhead per byte)\n;\n; 8251 supports BOTH modes!"
      },
      {
        t: "Asynchronous Frame Format",
        d: "In async mode, each byte is wrapped in a frame: 1 start bit (always LOW), 5-8 data bits (LSB first), optional parity bit (error detection), and 1-2 stop bits (always HIGH). The start bit alerts the receiver that data is coming. The stop bit(s) provide idle time before the next frame. The line is HIGH when idle (no data).",
        code: "; Async frame for byte 0x41 ('A'), 8N1 format:\n; (8 data bits, No parity, 1 stop bit)\n;\n; Idle(HIGH) → START(LOW) → data → STOP(HIGH)\n;\n; ‾‾‾‾│_│1│0│0│0│0│0│1│0│‾│‾‾‾\n;     │S│D0 D1 D2 D3 D4 D5 D6 D7│Stop│\n;     │t│ LSB ──────────── MSB   │    │\n;     │a│                        │    │\n;     │r│  0x41 = 01000001       │    │\n;     │t│                        │    │\n;\n; 10 bits total to send 8 data bits\n; Overhead = 2/10 = 20%\n;\n; With parity and 2 stop bits:\n; 1 + 8 + 1 + 2 = 12 bits per byte (33% overhead)"
      },
      {
        t: "Baud Rate and Bit Timing",
        d: "Baud rate is the number of signal changes (bits) per second. At 9600 baud, each bit lasts 1/9600 = 104.17 microseconds. Common baud rates: 300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200. The 8251 uses an external clock (TxC/RxC) at 1x, 16x, or 64x the baud rate. With 16x oversampling, the receiver samples each bit 16 times and picks the middle samples for reliability.",
        code: "; Baud rate calculation:\n;\n; Baud rate = bits per second\n; Bit time = 1 / baud rate\n;\n; 9600 baud: bit time = 1/9600 = 104.17 μs\n; 115200 baud: bit time = 1/115200 = 8.68 μs\n;\n; 8251 clock modes:\n;   1x:  CLK frequency = baud rate\n;   16x: CLK frequency = 16 × baud rate\n;   64x: CLK frequency = 64 × baud rate\n;\n; For 9600 baud with 16x clock:\n;   CLK = 9600 × 16 = 153,600 Hz\n;\n; 16x oversampling: receiver samples each bit\n; 16 times, uses middle samples → noise immunity"
      },
      {
        t: "8251 Architecture and Pins",
        d: "The 8251 connects to the CPU via D0-D7 (data bus), C/D (command/data select, like A0), RD, WR, CS, and CLK. Serial side: TxD (transmit data output), RxD (receive data input), TxC (transmit clock), RxC (receive clock), plus handshaking signals TxRDY, RxRDY, TxE (transmitter empty), DTR, DSR, RTS, CTS for modem control.",
        code: "; 8251 Pin Groups:\n;\n; CPU side:\n;   D0-D7: data bus\n;   C/D:   0=data, 1=control/status\n;   RD:    read strobe\n;   WR:    write strobe\n;   CS:    chip select\n;   CLK:   system clock\n;   RESET: initialization\n;\n; Serial side:\n;   TxD:   serial data output →\n;   RxD:   serial data input  ←\n;   TxC:   transmit clock\n;   RxC:   receive clock\n;\n; Status/control:\n;   TxRDY: transmitter ready (can accept data)\n;   RxRDY: receiver has data (can be read)\n;   TxE:   transmitter empty\n;   DTR, DSR, RTS, CTS: modem handshake"
      },
      {
        t: "Mode Word — Configuring the 8251",
        d: "After reset, the first write to the control register is the Mode Word. It sets: sync/async mode, character length (5-8 bits), parity enable and type (even/odd), number of stop bits (1, 1.5, or 2), and baud rate factor (1x/16x/64x). The mode word is written ONCE after reset — to change it, you must reset the 8251 again.",
        code: "; Mode Word (async mode) bit layout:\n;\n; D7  D6 | D5  D4 | D3  D2 | D1  D0\n;  S2  S1 | EP PEN | L2  L1 | B2  B1\n;\n; B1-B2 (Baud rate factor):\n;   01 = 1x, 10 = 16x, 11 = 64x\n;\n; L1-L2 (Character length):\n;   00=5, 01=6, 10=7, 11=8 bits\n;\n; PEN (Parity Enable): 1=yes, 0=no\n; EP (Even Parity): 1=even, 0=odd\n;\n; S1-S2 (Stop bits):\n;   01=1, 10=1.5, 11=2 stop bits\n;\n; Example: 8 data, no parity, 1 stop, 16x\n;   01 00 11 10 = 4Eh\n  MOV AL, 4Eh\n  OUT 81h, AL           ; mode word to 8251"
      },
      {
        t: "Command Word — Controlling Operation",
        d: "After the mode word, subsequent writes to the control register are Command Words. The command word enables/disables the transmitter and receiver, controls DTR and RTS signals, sends a break character, performs error reset, and can force an internal reset (to re-enter mode word). TxEN must be set to transmit, RxEN must be set to receive.",
        code: "; Command Word bit layout:\n;\n; D7 | D6 | D5 | D4 | D3 | D2 | D1 | D0\n; EH | IR | RTS| ER | SBRK|RxE| DTR| TxE\n;\n; TxEN (D0): 1=enable transmitter\n; DTR  (D1): 1=assert DTR output\n; RxEN (D2): 1=enable receiver\n; SBRK (D3): 1=send break (TxD forced LOW)\n; ER   (D4): 1=reset error flags\n; RTS  (D5): 1=assert RTS output\n; IR   (D6): 1=internal reset (back to mode)\n; EH   (D7): enter hunt mode (sync only)\n;\n; Enable both Tx and Rx, assert DTR and RTS:\n;   0 0 1 1 0 1 1 1 = 37h\n  MOV AL, 37h\n  OUT 81h, AL           ; command word"
      },
      {
        t: "Transmitting and Receiving Data",
        d: "To transmit: check TxRDY status bit (or read port status register bit 0), then write the byte to the data register. The 8251 serializes it and sends on TxD. To receive: check RxRDY status bit (status register bit 1), then read the data register. The 8251 has already deserialized the incoming bits into a byte. Error flags (parity, overrun, framing) are in the status register.",
        code: "; Transmit a byte:\nTX_WAIT:\n  IN AL, 81h            ; read status register\n  TEST AL, 01h          ; bit 0 = TxRDY?\n  JZ TX_WAIT            ; not ready, wait\n  MOV AL, 'A'           ; byte to send\n  OUT 80h, AL           ; write to data register\n                        ; 8251 serializes and sends\n;\n; Receive a byte:\nRX_WAIT:\n  IN AL, 81h            ; read status register\n  TEST AL, 02h          ; bit 1 = RxRDY?\n  JZ RX_WAIT            ; no data yet, wait\n  IN AL, 80h            ; read received byte\n                        ; AL = deserialized data\n;\n; Status register bits:\n;   Bit 0: TxRDY   Bit 1: RxRDY\n;   Bit 2: TxE     Bit 3: PE (parity error)\n;   Bit 4: OE (overrun) Bit 5: FE (framing error)"
      },
      {
        t: "Start/Stop/Parity Bits Explained",
        d: "The start bit (always 0/LOW) tells the receiver 'a byte is beginning — start your bit timer!' Data bits follow (LSB first). The optional parity bit provides simple error detection: even parity makes total 1s even, odd parity makes them odd. Stop bits (always 1/HIGH) give the receiver time to process and return to idle. The classic '8N1' format means 8 data bits, No parity, 1 stop bit.",
        code: "; Parity example: sending 0x41 (01000001)\n;\n; Even parity: count 1s in data = 2 (even)\n;   → parity bit = 0 (already even)\n;   Frame: S 1 0 0 0 0 0 1 0 P=0 Stop\n;\n; Odd parity: count 1s in data = 2 (even)\n;   → parity bit = 1 (make it odd = 3)\n;   Frame: S 1 0 0 0 0 0 1 0 P=1 Stop\n;\n; Receiver checks: if parity doesn't match\n;   → PE flag set (Parity Error)\n;\n; Common formats:\n;   8N1: 8 data, no parity, 1 stop (most common)\n;   7E1: 7 data, even parity, 1 stop\n;   8E2: 8 data, even parity, 2 stop bits"
      }
    ],
    whatIs: "The 8251 USART (Universal Synchronous/Asynchronous Receiver/Transmitter) converts parallel data from the CPU into serial bit streams for transmission, and converts incoming serial bit streams back into parallel bytes. It supports both asynchronous mode (with start/stop bits, configurable baud rates) and synchronous mode (continuous clocked data). Programming involves writing a Mode Word (data format) and Command Word (enable Tx/Rx), then polling status bits to send and receive data.",
    realWorld: "Serial communication is everywhere. Your computer's USB ports evolved from the serial port concept. Bluetooth, Wi-Fi, and cellular data are all serial at the physical layer. Arduino boards use UART to communicate with your PC. Modems, GPS modules, and industrial sensors still use classic RS-232 serial (the same standard the 8251 was designed for). Understanding serial framing — start bits, stop bits, parity — is fundamental to debugging any communication protocol.",
    code: "; =============================================\n; 8251 USART — Complete Serial Setup\n; =============================================\n;\n; 8251 at base 80h (data) and 81h (control/status)\n; Format: 9600 baud, 8N1, 16x clock\n;\n; === INITIALIZATION ===\n;\n; After power-up, send 3 dummy bytes + reset\n; (ensures 8251 is in known state)\n  MOV AL, 00h\n  OUT 81h, AL           ; dummy 1\n  OUT 81h, AL           ; dummy 2\n  OUT 81h, AL           ; dummy 3\n  MOV AL, 40h           ; internal reset command\n  OUT 81h, AL           ; reset 8251\n;\n; Mode Word: 8 data, no parity, 1 stop, 16x\n;   01 00 11 10 = 4Eh\n  MOV AL, 4Eh\n  OUT 81h, AL           ; write mode word\n;\n; Command Word: enable Tx, Rx, DTR, RTS\n;   0 0 1 1 0 1 1 1 = 37h\n  MOV AL, 37h\n  OUT 81h, AL           ; write command word\n;\n; === SEND STRING ===\n;\n  LEA SI, MSG           ; point to message\nSEND_LOOP:\n  LODSB                 ; AL = next char, SI++\n  CMP AL, 0             ; null terminator?\n  JE DONE\n;\nTX_POLL:\n  IN AL, 81h            ; read status\n  TEST AL, 01h          ; TxRDY?\n  JZ TX_POLL            ; wait for ready\n  LODSB                 ; reload char (LODSB advanced SI)\n  DEC SI                ; fix SI\n  MOV AL, [SI-1]        ; get the char\n  OUT 80h, AL           ; transmit byte\n  JMP SEND_LOOP\n;\nDONE:\n  ; Transmission complete\n;\nMSG DB 'Hello Serial!', 0Dh, 0Ah, 0\n;\n; === RECEIVE BYTE ===\nRX_POLL:\n  IN AL, 81h            ; read status\n  TEST AL, 02h          ; RxRDY?\n  JZ RX_POLL\n  IN AL, 80h            ; AL = received byte",
    funFact: "The RS-232 serial standard that the 8251 implements was first published in 1960 — over 60 years ago! It used voltage levels of +12V and -12V to represent 0 and 1. The 9600 baud rate that became the most common default was chosen because it was the maximum speed that worked reliably over telephone-quality copper wires. Incredibly, RS-232 serial ports are still used today in industrial equipment, network switches, and scientific instruments.",
    quiz: [
      {
        q: "What is the purpose of a start bit in asynchronous serial communication?",
        opts: [
          "To indicate the beginning of a data frame to the receiver",
          "To set the baud rate",
          "To check for errors",
          "To identify the sender"
        ],
        ans: 0
      },
      {
        q: "What does '8N1' mean in serial communication?",
        opts: [
          "8 MHz, No error correction, 1 wire",
          "8 data bits, No parity, 1 stop bit",
          "8 start bits, No data, 1 parity bit",
          "8 bytes, Normal mode, 1 channel"
        ],
        ans: 1
      },
      {
        q: "What is the difference between UART and USART?",
        opts: [
          "UART is faster",
          "USART supports both synchronous and asynchronous modes; UART supports only asynchronous",
          "They are the same thing",
          "UART uses more wires"
        ],
        ans: 1
      },
      {
        q: "If the baud rate is 9600 with 16x oversampling, what clock frequency is needed?",
        opts: ["9600 Hz", "96000 Hz", "153600 Hz", "960000 Hz"],
        ans: 2
      },
      {
        q: "What does the TxRDY status bit indicate?",
        opts: [
          "Data has been received",
          "The transmitter is ready to accept a new byte for sending",
          "An error has occurred",
          "The receiver buffer is full"
        ],
        ans: 1
      }
    ],
    challenge: "Configure the 8251 for 7 data bits, even parity, 2 stop bits, with a 64x baud rate factor. Calculate the mode word bit by bit. Then write a complete 'echo' program that receives a byte from the serial port and immediately transmits it back — the simplest possible serial communication test.",
    resources: [
      { type: "video", title: "8251 USART Explained", url: "https://www.youtube.com/watch?v=p-2sYF3R_Vc", source: "Neso Academy" },
      { type: "article", title: "8251 USART Architecture and Programming", url: "https://www.geeksforgeeks.org/8251-usart-microprocessor/", source: "GeeksforGeeks" },
      { type: "docs", title: "Intel 8251A Datasheet", url: "https://datasheetspdf.com/pdf/1350282/Intel/8251A/1", source: "Intel" },
      { type: "video", title: "Serial Communication Basics", url: "https://www.youtube.com/watch?v=IyGwvGzrqp8", source: "Ben Eater" }
    ],
    eli5: "Imagine you have a long narrow tube that can only fit one marble at a time. You have 8 different-colored marbles (your data byte) but you can only send them one by one through the tube. Before you start, you send a special black marble (start bit) to tell your friend on the other end 'get ready, marbles are coming!' Then you send all 8 color marbles, and finish with a white marble (stop bit) meaning 'that is one complete message.' Your friend catches each marble and lines them up to see the original 8-color pattern. That is serial communication!",
    codeWalkthrough: [
      "Title comment for 8251 USART setup",
      "Separator line",
      "Blank line",
      "8251 ports: 80h for data read/write, 81h for control/status",
      "Configuration: 9600 baud, 8 data bits, no parity, 1 stop bit, 16x clock",
      "Blank line",
      "=== INITIALIZATION SECTION ===",
      "Blank line",
      "After power-up, the 8251 might be in an unknown state",
      "Write three dummy bytes to flush any pending mode/command bytes",
      "First dummy write to control port",
      "Second dummy write",
      "Third dummy write",
      "Load internal reset command (bit 6 = 1) into AL",
      "Send reset command — 8251 is now waiting for a mode word",
      "Blank line",
      "Mode word for 8 data, no parity, 1 stop, 16x oversampling",
      "Binary breakdown: 01 (1 stop) 00 (no parity) 11 (8 bits) 10 (16x) = 4Eh",
      "Write mode word to control register — 8251 format is now set",
      "Blank line",
      "Command word: enable transmitter, receiver, DTR, and RTS lines",
      "Binary: 00110111 = 37h — TxEN, DTR, RxEN, RTS all set to 1",
      "Write command — 8251 is now active and ready to communicate",
      "Blank line",
      "=== SEND STRING SECTION ===",
      "Blank line",
      "Load address of the null-terminated message string into SI",
      "SEND_LOOP label — iterate through each character",
      "LODSB loads byte at [SI] into AL and increments SI",
      "Check if AL is zero (null terminator marks end of string)",
      "If null, jump to DONE — message fully transmitted",
      "Blank line",
      "TX_POLL label — wait for transmitter to be ready",
      "Read status register from port 81h",
      "Test bit 0 (TxRDY) — is the transmitter ready for a new byte?",
      "If TxRDY is 0, loop back and poll again",
      "Reload the character (SI was advanced by LODSB)",
      "Adjust SI back to correct position",
      "Get the character byte",
      "Write byte to data register at port 80h — 8251 serializes and transmits it",
      "Jump back to send the next character",
      "Blank line",
      "DONE label — all characters sent",
      "Blank line",
      "MSG: the message bytes in memory including carriage return and line feed",
      "Blank line",
      "=== RECEIVE SECTION ===",
      "RX_POLL: poll for incoming data",
      "Read status register",
      "Test bit 1 (RxRDY) — has a complete byte been received?",
      "If not, keep polling",
      "Read received byte from data register — AL contains the deserialized byte"
    ],
    bugChallenge: {
      code: "; Initialize 8251: 8 data, even parity, 1 stop, 16x\n;\n; Mode word:\n;   B1B0 = 10 (16x)\n;   L1L0 = 11 (8 bits)\n;   PEN  = 1  (parity on)\n;   EP   = 1  (even)\n;   S1S0 = 01 (1 stop)\n;\n  MOV AL, 01 11 1 1 11 10  ; = 7Eh\n  OUT 81h, AL\n;\n; Command word: enable Tx and Rx\n  MOV AL, 05h              ; TxEN + RxEN\n  OUT 80h, AL              ; write to data port",
      hint: "Where should the command word be written — data port or control port? Also check the binary-to-hex conversion.",
      answer: "Two bugs: (1) The command word is written to port 80h (data register) instead of port 81h (control/status register). Commands must go to the control port. Fix: OUT 81h, AL. (2) The binary value written as the mode word comment doesn't assemble correctly. The actual mode word should be: S1S0=01, EP=1, PEN=1, L1L0=11, B1B0=10 → 01111110 = 7Eh — the hex value is correct but the MOV instruction syntax is wrong. Use: MOV AL, 7Eh."
    },
    difficulty: "advanced",
    prereqs: [39]
  },
  {
    id: 45,
    title: "From 8086 to 80386, Pentium, and x86 Thinking",
    subtitle: "The Evolution of a Processor Dynasty",
    analogy: "Imagine the 8086 is a single-room schoolhouse where one teacher (execution unit) teaches one student (instruction) at a time. The 80286 adds a locked faculty office (protected mode) to keep students out of teacher files. The 80386 expands the school to a 32-room campus with a paging system (virtual memory). The Pentium adds two classrooms running in parallel (superscalar). Modern x86-64 is a university with hundreds of courses running simultaneously — but it all started from that one-room schoolhouse, and every university still knows how to teach first-grade math.",
    points: [
      {
        t: "8086 Legacy — Where It All Started (1978)",
        d: "The 8086 introduced the x86 instruction set architecture (ISA) that dominates computing to this day. 16-bit data bus, 20-bit address bus (1MB), segmented memory model, and the BIU/EU pipeline design. Its instruction set — MOV, ADD, JMP, INT — became the foundation that every subsequent processor had to remain backward-compatible with. The 8088 variant (8-bit external bus) powered the original IBM PC.",
        code: "; 8086 Key Features (1978):\n;   - 16-bit registers (AX, BX, CX, DX)\n;   - 20-bit address → 1MB memory\n;   - Segmented memory (CS, DS, ES, SS)\n;   - ~5-10 MHz clock\n;   - ~0.33 MIPS (million instructions/sec)\n;\n; The instruction set that started it all:\n  MOV AX, BX            ; data transfer\n  ADD AX, CX            ; arithmetic\n  AND AX, 0FFh          ; logical\n  JNZ LOOP              ; control flow\n  INT 21h               ; system call\n;\n; Every x86-64 CPU in 2024 still runs these!"
      },
      {
        t: "80286 — Protected Mode (1982)",
        d: "The 80286 added protected mode alongside the original real mode. In protected mode, the processor enforces memory protection — programs cannot access each other's memory, and user programs cannot execute privileged instructions. It introduced privilege levels (rings 0-3), segment descriptors, and a 24-bit address bus (16MB). However, switching between real and protected mode required a reset, limiting its practical usefulness.",
        code: "; 80286 Additions:\n;   - Protected mode (memory protection)\n;   - 24-bit address bus → 16MB\n;   - Privilege levels (Ring 0-3)\n;   - Segment descriptors (base + limit + access)\n;   - Hardware task switching\n;\n; Real Mode → Protected Mode:\n;   Load GDT (Global Descriptor Table)\n;   Set PE bit in MSW (Machine Status Word)\n;   Far jump to flush pipeline\n;\n; Problem: no easy way back to real mode!\n;   Required CPU reset to return to real mode\n;   IBM PC AT used keyboard controller for reset!\n;\n; Still 16-bit registers and operations"
      },
      {
        t: "80386 — The 32-bit Revolution (1985)",
        d: "The 80386 was the breakthrough: full 32-bit registers (EAX, EBX, etc.), 32-bit address bus (4GB), virtual 8086 mode (run DOS programs inside protected mode), and paging (virtual memory with 4KB pages). It added new addressing modes and could switch freely between real and protected mode. The 386 is where 'modern x86' truly begins — all modern 32-bit x86 code uses the 386 ISA as its base.",
        code: "; 80386 Key Advances:\n;   - 32-bit registers: EAX, EBX, ECX, EDX\n;     ESP, EBP, ESI, EDI, EIP, EFLAGS\n;   - 32-bit address bus → 4GB memory\n;   - Paging: virtual memory with 4KB pages\n;   - Virtual 8086 mode (V86)\n;   - New addressing modes\n;\n; Register evolution:\n;   8086:  AX  (16-bit)\n;   80386: EAX (32-bit) = [AH][AL] still inside\n;          |---- EAX (32) ----|\n;              |-- AX (16) --|\n;              |AH(8)|AL(8)|\n;\n; New 32-bit instructions:\n  MOV EAX, [EBX + ECX*4 + 10h]  ; scaled index!\n  MOVZX EAX, BYTE PTR [ESI]     ; zero-extend byte"
      },
      {
        t: "Pipelining — Doing More per Clock",
        d: "Starting with the 486, Intel added a 5-stage instruction pipeline: Fetch, Decode, Execute, Memory, Writeback. Instead of completing one instruction before starting the next, the processor works on 5 instructions simultaneously (each at a different stage). Ideally, one instruction completes every clock cycle. Branch mispredictions and data hazards cause pipeline stalls — later processors added branch prediction to minimize these.",
        code: "; 5-Stage Pipeline (486 and beyond):\n;\n; Clock:  1    2    3    4    5    6    7\n; Inst1: [IF] [ID] [EX] [MEM][WB]\n; Inst2:      [IF] [ID] [EX] [MEM][WB]\n; Inst3:           [IF] [ID] [EX] [MEM][WB]\n;\n; IF  = Instruction Fetch\n; ID  = Instruction Decode\n; EX  = Execute (ALU operation)\n; MEM = Memory Access\n; WB  = Write Back result\n;\n; Without pipeline: 1 instr per 5 clocks\n; With pipeline: 1 instr per 1 clock (ideal)\n;\n; Pipeline hazard (data dependency):\n;   ADD EAX, EBX    ; writes EAX\n;   SUB ECX, EAX    ; reads EAX — must wait!\n;   Solution: forwarding/bypassing"
      },
      {
        t: "Cache Memory — Speed Meets Size",
        d: "The 486 included the first on-chip cache (8KB L1). Cache stores recently accessed memory data in ultra-fast SRAM on the CPU die. When the CPU reads an address, it checks cache first (hit = fast) before going to slow main memory (miss = slow). Modern CPUs have 3 levels: L1 (tiny, 1-2 cycle), L2 (medium, 4-10 cycles), L3 (large, 20-40 cycles). Memory hierarchy is the single most important concept in computer performance.",
        code: "; Cache hierarchy evolution:\n;\n; 8086:  No cache (every access hits slow RAM)\n; 486:   8KB L1 cache (on-chip)\n; Pentium: 16KB L1 (8KB code + 8KB data)\n; Modern: L1: 64KB, L2: 512KB, L3: 16MB+\n;\n; Memory access times:\n;   Register:   0 cycles (instant)\n;   L1 cache:   1-2 cycles (~1 ns)\n;   L2 cache:   4-10 cycles (~5 ns)\n;   L3 cache:   20-40 cycles (~20 ns)\n;   Main RAM:   100-300 cycles (~100 ns)\n;   SSD:        ~100,000 cycles (~100 μs)\n;   HDD:        ~10,000,000 cycles (~10 ms)\n;\n; Cache hit rate >95% → most accesses are fast!"
      },
      {
        t: "Pentium — Superscalar Execution (1993)",
        d: "The Pentium introduced superscalar architecture with two parallel execution pipelines (U-pipe and V-pipe), allowing two instructions to complete per clock cycle. It also added branch prediction (guess which way a branch goes before computing it), a 64-bit external data bus, and separate code/data L1 caches. The Pentium Pro/II/III added out-of-order execution — the processor rearranges instruction order for maximum pipeline utilization.",
        code: "; Pentium Superscalar (1993):\n;\n; Two pipelines can execute simultaneously:\n;   U-pipe: handles any instruction\n;   V-pipe: handles simple instructions\n;\n; Cycle 1: ADD EAX,EBX (U) | MOV ECX,EDX (V)\n; Cycle 2: SUB ESI,1 (U)   | INC EDI (V)\n; → 2 instructions per clock!\n;\n; Branch Prediction:\n;   CPU guesses: will the branch be taken?\n;   Correct guess: no penalty\n;   Wrong guess: flush pipeline (5-20 cycle penalty)\n;   Modern accuracy: ~95-97%\n;\n; Out-of-Order Execution (Pentium Pro):\n;   CPU rearranges instructions internally\n;   Executes ready instructions first\n;   Commits results in original program order"
      },
      {
        t: "x86-64 — The 64-bit Era (2003)",
        d: "AMD introduced x86-64 (AMD64) in 2003, extending x86 to 64-bit. Registers doubled in width (RAX, RBX, etc.) and 8 new general-purpose registers were added (R8-R15). The address space expanded to 48 bits virtual (256 TB). Intel adopted it as Intel 64/EM64T. 64-bit mode is now the standard for all desktop and server processors. 32-bit and 16-bit code still runs in compatibility sub-modes — backward compatibility preserved!",
        code: "; x86-64 (AMD64 / Intel 64):\n;\n; Register evolution:\n;   8086:  AX   (16-bit)\n;   386:   EAX  (32-bit)\n;   x64:   RAX  (64-bit)\n;\n; |-------- RAX (64) --------|\n;                 |-- EAX(32)-|\n;                     |AX(16)-|\n;                     |AH| AL |\n;\n; New registers: R8-R15 (8 extra!)\n; New register names: R8D (32-bit), R8W (16-bit)\n;\n; 48-bit virtual address → 256 TB\n; Modes: Long mode (64-bit) ← default now\n;        Compatibility mode (32-bit apps)\n;        Legacy mode (16-bit, real mode)\n;\n; All your 8086 code? Still runs.\n  MOV AL, 42h           ; this 1978 instruction\n                        ; works on a 2024 CPU!"
      },
      {
        t: "Modern x86 Internals — CISC Outside, RISC Inside",
        d: "Modern x86 CPUs decode complex CISC instructions (variable-length, memory operands) into simple micro-operations (uops) internally. These uops execute on RISC-like execution units with out-of-order scheduling, register renaming, and speculative execution. A single complex instruction like REP MOVSB gets broken into dozens of simple micro-ops. The programmer sees the classic x86 ISA; the hardware underneath is a sophisticated RISC engine.",
        code: "; Modern x86 execution model:\n;\n; Programmer writes:\n  ADD [mem], EAX        ; one CISC instruction\n;\n; CPU internally decodes to micro-ops:\n;   uop1: LOAD tmp, [mem]    ; read memory\n;   uop2: ADD tmp, EAX       ; perform add\n;   uop3: STORE [mem], tmp   ; write back\n;\n; These uops feed into:\n;   - Reorder buffer (tracks in-flight uops)\n;   - Reservation stations (wait for operands)\n;   - Multiple execution units (ALU, FPU, load/store)\n;   - Out-of-order execution engine\n;\n; Result: 4-6+ instructions retired per clock\n; on a modern CPU, despite complex x86 ISA"
      }
    ],
    whatIs: "The x86 processor family evolved from the 8086 (1978, 16-bit, 1MB) through the 80286 (protected mode), 80386 (32-bit, paging, 4GB), 486 (on-chip cache, pipeline), Pentium (superscalar, branch prediction), to modern x86-64 (64-bit, 256TB virtual). Key innovations along the way: memory protection, virtual memory, instruction pipelining, cache hierarchy, superscalar execution, out-of-order processing, and micro-op decomposition. Despite decades of evolution, backward compatibility with the original 8086 instruction set is maintained.",
    realWorld: "The x86 architecture powers virtually every desktop PC, laptop, and data center server in the world. When you use Windows, macOS (Intel Macs), or Linux on a PC, your CPU is running x86-64 code that is backward-compatible with the 8086 from 1978. Cloud providers like AWS, Azure, and GCP run millions of x86-64 processors. Understanding the evolution from 8086 to modern x86 helps you grasp why CPUs work the way they do today.",
    code: "; =============================================\n; x86 Evolution — Code Across Generations\n; =============================================\n;\n; === 8086 (1978) — 16-bit ===\n  MOV AX, 1234h         ; 16-bit register\n  ADD AX, BX            ; 16-bit addition\n  MOV [SI], AX          ; store to memory\n;\n; === 80386 (1985) — 32-bit ===\n  MOV EAX, 12345678h    ; 32-bit register\n  ADD EAX, EBX          ; 32-bit addition\n  MOV [ESI], EAX        ; 32-bit addressing\n  ; New: scaled index addressing\n  MOV EAX, [EBX + ECX*4 + 100h]\n;\n; === x86-64 (2003) — 64-bit ===\n  MOV RAX, 123456789ABCDEFh  ; 64-bit register\n  ADD RAX, RBX               ; 64-bit addition\n  MOV [RSI], RAX             ; 64-bit addressing\n  ; New: 8 extra registers\n  MOV R8, R9\n  ADD R10D, R11D             ; 32-bit sub-register\n;\n; === Backward Compatibility ===\n; This 8086 code from 1978:\n  MOV AL, 42h\n  INT 21h\n; ...still executes on a 2024 AMD Ryzen 9!\n; 46 years of compatibility.",
    funFact: "Intel's famous Pentium FDIV bug (1994) caused certain floating-point divisions to produce wrong answers. Intel initially dismissed it, but a math professor discovered it and posted online. The resulting PR disaster cost Intel $475 million to replace affected chips. This single bug is why every CPU manufacturer now runs billions of automated tests before shipping. It also made 'Pentium' a household word — arguably the most expensive bug in computing history!",
    quiz: [
      {
        q: "What was the major advancement of the 80386 over the 80286?",
        opts: [
          "It had a faster clock speed",
          "It introduced full 32-bit registers, 4GB addressing, paging, and virtual 8086 mode",
          "It added floating-point support",
          "It removed segmented memory"
        ],
        ans: 1
      },
      {
        q: "What does 'superscalar' mean in the context of the Pentium processor?",
        opts: [
          "It has a very fast clock",
          "It can execute multiple instructions per clock cycle using parallel pipelines",
          "It uses a bigger transistor size",
          "It supports 64-bit operations"
        ],
        ans: 1
      },
      {
        q: "Why do modern x86 CPUs decode CISC instructions into micro-operations (uops)?",
        opts: [
          "To make code smaller",
          "Because micro-ops are easier to schedule, execute out-of-order, and pipeline efficiently",
          "To reduce power consumption",
          "Because CISC instructions are obsolete"
        ],
        ans: 1
      },
      {
        q: "Which processor first included an on-chip cache?",
        opts: ["8086", "80286", "80386", "80486"],
        ans: 3
      },
      {
        q: "Can a modern x86-64 processor run original 8086 code?",
        opts: [
          "No, it is too old",
          "Only with an emulator",
          "Yes, through backward-compatible real mode and compatibility sub-modes",
          "Only in Linux, not Windows"
        ],
        ans: 2
      }
    ],
    challenge: "Create a timeline chart showing each major x86 processor (8086, 80286, 80386, 80486, Pentium, Pentium Pro, x86-64) with: year, register width, address space, key new feature, and approximate transistor count. Calculate the ratio of transistor count growth from 8086 (29,000) to a modern processor (~50 billion) — how many times did it double?",
    resources: [
      { type: "video", title: "History of x86 Architecture", url: "https://www.youtube.com/watch?v=ax_wLq_pFjA", source: "Branch Education" },
      { type: "article", title: "x86 Processor Evolution", url: "https://www.geeksforgeeks.org/evolution-of-intel-processors/", source: "GeeksforGeeks" },
      { type: "video", title: "How Modern CPUs Work", url: "https://www.youtube.com/watch?v=vqs_0W-MSB0", source: "Branch Education" },
      { type: "article", title: "Intel 80386 Programming Reference", url: "https://css.csail.mit.edu/6.858/2014/readings/i386.pdf", source: "Intel / MIT" }
    ],
    eli5: "Think of the 8086 as a tiny toy car — simple, slow, but it works! Over 45 years, engineers kept adding upgrades: a bigger engine (32-bit, then 64-bit), more fuel tanks (more memory), turbo boosters (cache, pipeline), and even a co-pilot to do two things at once (superscalar). The amazing thing? That giant modern race car can still drive on the tiny toy-car track. Every upgrade was designed to be backward-compatible, so nothing ever breaks.",
    codeWalkthrough: [
      "Title comment for x86 evolution examples",
      "Separator line",
      "Blank line",
      "Section: 8086 from 1978 — the original 16-bit processor",
      "MOV AX — loads a 16-bit value into the 16-bit AX register",
      "ADD AX, BX — 16-bit addition using 16-bit registers",
      "Store 16-bit value to memory using SI as pointer",
      "Blank line",
      "Section: 80386 from 1985 — the 32-bit revolution",
      "MOV EAX — loads a full 32-bit value into Extended AX (EAX)",
      "ADD EAX, EBX — 32-bit addition, twice the data width of 8086",
      "MOV [ESI] — 32-bit addressing can reach 4GB of memory",
      "Comment introducing the 386's new addressing mode",
      "Scaled index: base + index*scale + displacement — powerful for array access",
      "Blank line",
      "Section: x86-64 from 2003 — the 64-bit era",
      "MOV RAX — loads a 64-bit value into the R-extended AX register",
      "ADD RAX, RBX — 64-bit arithmetic, 8 bytes at a time",
      "MOV [RSI] — 64-bit addressing can theoretically reach 256 TB",
      "Comment: x86-64 added 8 entirely new registers (R8-R15)",
      "MOV R8, R9 — using one of the new registers",
      "ADD R10D, R11D — D suffix means use only the lower 32 bits",
      "Blank line",
      "Section: demonstrating backward compatibility",
      "Comment: this exact code from 1978...",
      "MOV AL, 42h — 8-bit register operation from original 8086",
      "INT 21h — DOS system call from the early 1980s",
      "Comment: still executes on the latest AMD and Intel processors",
      "46 years of unbroken instruction set compatibility"
    ],
    bugChallenge: {
      code: "; 80386 code to clear a 32-bit array\n;\n  MOV CX, 1000         ; loop count\n  MOV ESI, OFFSET ARRAY ; point to array\nCLEAR:\n  MOV DWORD PTR [ESI], 0\n  ADD ESI, 4\n  LOOP CLEAR            ; uses CX as counter",
      hint: "The LOOP instruction decrements CX (16-bit). But ESI is a 32-bit register. Is there a mismatch for large arrays?",
      answer: "The LOOP instruction uses CX (16-bit), which limits the count to 65535. For 32-bit code on the 386, use ECX with the LOOP instruction (which uses ECX in 32-bit mode) or explicitly write: DEC ECX / JNZ CLEAR. In 32-bit mode, LOOP already uses ECX, but the MOV CX, 1000 only loads the lower 16 bits — the upper 16 bits of ECX may contain garbage. Fix: use MOV ECX, 1000 to properly initialize the full 32-bit counter."
    },
    difficulty: "advanced",
    prereqs: [12, 24]
  },
  {
    id: 46,
    title: "Where 8051 and ARM Fit in the Big Picture",
    subtitle: "Microprocessors, Microcontrollers, and Modern Embedded Systems",
    analogy: "If the 8086 microprocessor is a powerful brain that needs a body (external memory, I/O chips, timers), the 8051 microcontroller is a complete person in miniature — brain, eyes, hands, and memory all on one chip. ARM is like a family of brains designed to be extremely efficient runners — they do the most work per heartbeat (clock cycle per watt). Different tasks need different athletes: 8086 for heavy desktop computing, 8051 for simple control tasks, ARM for the mobile and IoT world.",
    points: [
      {
        t: "Microprocessor vs Microcontroller — The Core Distinction",
        d: "A microprocessor (like 8086) is just the CPU — it needs external RAM, ROM, I/O ports, and timers to function. A microcontroller (like 8051) integrates CPU, RAM, ROM, I/O ports, timers, and often serial communication onto a SINGLE chip. Microprocessors target general-purpose computing (PCs, servers). Microcontrollers target dedicated control tasks (washing machines, car systems, IoT sensors) where cost, size, and simplicity matter.",
        code: "; Microprocessor (8086):\n;   CPU only — needs external parts:\n;   +------+  +-----+  +------+  +------+\n;   | 8086 |--| RAM |--| ROM  |--| 8255 |\n;   +------+  +-----+  +------+  +------+\n;   Multiple chips, complex PCB, more power\n;\n; Microcontroller (8051):\n;   Everything on ONE chip:\n;   +---------------------------+\n;   | CPU | RAM | ROM | I/O     |\n;   | Timer | Serial | Int Ctrl |\n;   +---------------------------+\n;   One chip, simple PCB, low power, cheap"
      },
      {
        t: "8051 Architecture Brief",
        d: "The 8051 (Intel, 1980) is an 8-bit microcontroller with: 4KB ROM, 128 bytes RAM, four 8-bit I/O ports (P0-P3), two 16-bit timers, one serial port (UART), and interrupt handling — all on a single 40-pin chip. It uses a Harvard architecture (separate code and data memory) and has bit-addressable RAM for efficient flag operations. Programmed in assembly or C, it remains one of the most widely used MCU architectures ever.",
        code: "; 8051 Key Specs:\n;   CPU: 8-bit, 12 MHz typical\n;   ROM: 4KB internal (for program)\n;   RAM: 128 bytes internal (for data)\n;   I/O: 4 ports × 8 bits = 32 I/O pins\n;   Timers: 2 × 16-bit\n;   Serial: 1 UART\n;   Interrupts: 5 sources\n;\n; 8051 assembly example:\n;   MOV A, #55h          ; load accumulator\n;   MOV P1, A            ; output to Port 1\n;   SETB P3.0            ; set single bit!\n;   CLR P3.1             ; clear single bit!\n;   ACALL MY_FUNC        ; call subroutine\n;   SJMP LOOP            ; short jump (loop)"
      },
      {
        t: "8051 vs 8086 — Key Differences",
        d: "The 8086 is 16-bit with 1MB address space; the 8051 is 8-bit with 64KB program + 64KB data. The 8086 needs external memory/I/O; the 8051 has everything on-chip. The 8086 uses a CISC instruction set with complex addressing modes; the 8051 has a simpler instruction set optimized for control. The 8086 excels at computation; the 8051 excels at device control with its bit-addressable I/O and on-chip peripherals.",
        code: "; Feature Comparison:\n;\n;              8086          8051\n; Type:     Microprocessor  Microcontroller\n; Width:    16-bit          8-bit\n; Address:  1MB (20-bit)    64KB (16-bit)\n; RAM:      External        128B on-chip\n; ROM:      External        4KB on-chip\n; I/O:      Needs 8255      32 pins built-in\n; Timers:   Needs 8253      2 built-in\n; Serial:   Needs 8251      1 built-in\n; Power:    ~1-2W           ~100-500mW\n; Cost:     Higher (system)  $0.50-$2\n; Best for: Computing        Control/embedded"
      },
      {
        t: "ARM — The RISC Revolution",
        d: "ARM (originally Acorn RISC Machine, 1985) is a family of RISC (Reduced Instruction Set Computer) processors. RISC philosophy: use simple, fixed-length instructions that each execute in one clock cycle, and rely on compiler optimization. ARM's key innovation: exceptional performance-per-watt, making it ideal for battery-powered devices. ARM does not manufacture chips — it licenses its designs to companies like Apple, Qualcomm, Samsung, and hundreds of others.",
        code: "; CISC (x86) vs RISC (ARM) philosophy:\n;\n; CISC (8086/x86):\n;   - Complex instructions (one instr does a lot)\n;   - Variable instruction length (1-15 bytes!)\n;   - Memory operands in most instructions\n;   ADD [memory], EAX    ; read + add + write\n;\n; RISC (ARM):\n;   - Simple instructions (each does one thing)\n;   - Fixed instruction length (32 bits)\n;   - Load/store: only LDR/STR touch memory\n;   LDR R0, [R1]         ; load from memory\n;   ADD R0, R0, R2       ; add registers only\n;   STR R0, [R1]         ; store to memory\n;\n; ARM advantage: simpler = less power, more\n; instructions/watt = better battery life"
      },
      {
        t: "ARM Architecture Highlights",
        d: "ARM processors feature: 16 general-purpose 32-bit registers (R0-R15), a load/store architecture (only LDR/STR access memory), conditional execution on almost every instruction (reduces branches), barrel shifter (shift operand in same cycle as operation), and Thumb mode (16-bit compressed instructions for code density). Modern ARM (ARMv8/ARMv9) includes 64-bit AArch64 mode with 31 general registers.",
        code: "; ARM Assembly Examples:\n;\n; Register-to-register (no memory access):\n  ADD R0, R1, R2       ; R0 = R1 + R2\n  SUB R3, R4, #10      ; R3 = R4 - 10\n;\n; Load/Store (only way to access memory):\n  LDR R0, [R1]         ; R0 = memory[R1]\n  STR R0, [R1, #4]     ; memory[R1+4] = R0\n;\n; Conditional execution (unique to ARM):\n  CMP R0, #0\n  ADDNE R1, R1, #1     ; add only if R0 != 0\n  MOVEQ R1, #0         ; move only if R0 == 0\n  ; No branch needed!\n;\n; Barrel shifter (shift + operation in 1 cycle):\n  ADD R0, R1, R2, LSL #3  ; R0 = R1 + (R2 << 3)"
      },
      {
        t: "ARM in the Modern World",
        d: "ARM dominates mobile and embedded computing. Every smartphone uses an ARM CPU (Apple A-series, Qualcomm Snapdragon, Samsung Exynos). ARM powers IoT devices, smart watches, routers, Raspberry Pi, and even Apple's Mac (M1/M2/M3 chips). ARM shipped over 250 billion chips by 2023. Amazon's Graviton ARM servers compete directly with x86 in the cloud. ARM's efficiency-first design perfectly fits the power-constrained modern world.",
        code: "; ARM is EVERYWHERE:\n;\n; Smartphones:\n;   Apple iPhone → ARM (A17 Pro)\n;   Samsung Galaxy → ARM (Snapdragon/Exynos)\n;   Every Android phone → ARM\n;\n; Laptops/Desktops:\n;   Apple MacBook → ARM (M3/M4)\n;   Qualcomm Snapdragon X → ARM (Windows)\n;\n; Embedded/IoT:\n;   Raspberry Pi → ARM (Cortex-A)\n;   Arduino Due → ARM (Cortex-M3)\n;   Smart watches → ARM (Cortex-M)\n;   Car ECUs → ARM\n;\n; Cloud Servers:\n;   AWS Graviton → ARM (Neoverse)\n;\n; Market share: >95% of mobile, >60% of all chips"
      },
      {
        t: "Microprocessor vs MCU vs SoC",
        d: "Microprocessor: CPU only (8086, x86). Microcontroller (MCU): CPU + memory + peripherals on one chip (8051, ARM Cortex-M, AVR, PIC). System-on-Chip (SoC): MCU concept scaled up massively — CPU cores + GPU + video + AI accelerator + modems + memory controller all on one chip (Apple M3, Snapdragon 8 Gen 3). Modern SoCs are like entire computer systems on a single piece of silicon.",
        code: "; Evolution of integration:\n;\n; Microprocessor (1970s-80s):\n;   [CPU] ←bus→ [RAM] [ROM] [I/O] [Timer]\n;   Multiple chips, max flexibility\n;\n; Microcontroller (1980s-now):\n;   [CPU+RAM+ROM+I/O+Timer] ← one chip\n;   Optimized for control, low cost\n;\n; System-on-Chip (2000s-now):\n;   [CPU cores + GPU + AI engine +\n;    Video codec + Modem + USB +\n;    Memory controller + Security]\n;   ← ALL on one chip!\n;\n; Apple M3 SoC: 25 billion transistors\n;   vs 8086: 29,000 transistors\n;   = 862,000x more transistors"
      },
      {
        t: "IoT and the Embedded Future",
        d: "The Internet of Things (IoT) connects billions of small devices — sensors, actuators, smart home gadgets — each running a microcontroller. Most IoT devices use ARM Cortex-M (M0 to M7) or RISC-V cores. They require ultra-low power (running on batteries for years), tiny code footprint, and reliable real-time operation. The foundational concepts from this course — registers, memory interfacing, interrupts, timers, serial communication — are exactly what IoT firmware engineers use daily.",
        code: "; IoT device: smart temperature sensor\n;\n; Hardware: ARM Cortex-M0+ MCU\n;   - 32KB Flash, 4KB RAM\n;   - ADC (temperature sensor)\n;   - UART (serial data output)\n;   - Timer (periodic wake-up)\n;   - GPIO (LED indicator)\n;\n; Firmware flow (pseudo-assembly):\n;   SLEEP                    ; low-power mode\n;   ; Timer interrupt wakes CPU every 60 sec\n;   READ_ADC  R0             ; read temperature\n;   CMP R0, #THRESHOLD\n;   BHI ALERT                ; temp too high?\n;   UART_SEND R0             ; send data\n;   B SLEEP                  ; back to sleep\n;\n; Power: ~10 μA sleep, ~1mA active\n; Battery life: 5-10 years on coin cell!"
      }
    ],
    whatIs: "This lesson places the 8086 microprocessor in context with the 8051 microcontroller and ARM architecture. Microprocessors (8086) are CPU-only chips for general-purpose computing. Microcontrollers (8051) integrate CPU, RAM, ROM, I/O, and peripherals for dedicated control. ARM uses RISC design (simple instructions, load/store, low power) and dominates mobile and embedded computing. Modern SoCs combine CPU, GPU, and dozens of peripherals on one chip. The fundamentals learned in this course — registers, buses, interrupts, memory interfacing — apply to ALL of these architectures.",
    realWorld: "The phone in your pocket has an ARM processor running at 3+ GHz with billions of transistors. Your car has 50-100 microcontrollers (many ARM Cortex-M or 8051 derivatives) controlling engine, brakes, airbags, and infotainment. Industrial robots, medical devices, and smart home gadgets all use MCUs. The concepts from our 8086 course — addressing, interrupts, I/O interfacing, timers — translate directly to programming any of these modern devices.",
    code: "; =============================================\n; Architecture Comparison: 8086 vs 8051 vs ARM\n; =============================================\n;\n; === 8086 (Microprocessor) ===\n; Task: add two numbers from memory\n  MOV AX, [1000h]       ; load from memory\n  ADD AX, [1002h]       ; add from memory\n  MOV [1004h], AX       ; store result\n; Needs: external RAM, ROM, bus decoding\n;\n; === 8051 (Microcontroller) ===\n; Task: blink LED on Port 1 pin 0\n;   MOV A, #01h          ; bit pattern\n;   MOV P1, A            ; LED ON\n;   ACALL DELAY           ; wait\n;   CLR P1.0             ; LED OFF (bit-level!)\n;   ACALL DELAY\n;   SJMP LOOP            ; repeat\n; Built-in I/O — no external chips needed!\n;\n; === ARM Cortex-M (Modern MCU) ===\n; Task: read sensor, send over serial\n;   LDR R0, =ADC_BASE    ; point to ADC registers\n;   LDR R1, [R0, #DATA]  ; read ADC result\n;   LDR R2, =UART_BASE   ; point to UART\n;   STR R1, [R2, #TX]    ; send byte\n; All peripherals memory-mapped on-chip!",
    funFact: "ARM's original designer, Sophie Wilson, hand-wrote the entire ARM1 instruction set simulator in BBC BASIC before the first chip was manufactured. When the ARM1 arrived from the fab in 1985, it worked perfectly on the first try — extraordinarily rare in chip design. The ARM1 had just 25,000 transistors (fewer than the 8086!) but its efficient RISC design meant it could match the performance of chips with 10x more transistors. This efficiency-first DNA is why ARM now powers virtually every mobile device on Earth.",
    quiz: [
      {
        q: "What is the fundamental difference between a microprocessor and a microcontroller?",
        opts: [
          "Microprocessors are faster",
          "A microcontroller integrates CPU, memory, and I/O on one chip; a microprocessor is CPU only",
          "Microcontrollers can only be 8-bit",
          "Microprocessors are cheaper"
        ],
        ans: 1
      },
      {
        q: "What is ARM's main advantage over x86?",
        opts: [
          "ARM is faster at all tasks",
          "ARM has more registers than x86",
          "ARM delivers better performance per watt (energy efficiency)",
          "ARM supports more memory"
        ],
        ans: 2
      },
      {
        q: "What does RISC stand for, and what is its core principle?",
        opts: [
          "Random Instruction Set Computing — instructions are randomly assigned",
          "Reduced Instruction Set Computer — use simple, fast instructions that execute in one cycle",
          "Rapid Instruction Sequence Controller — instructions run in rapid succession",
          "Real-time Interrupt Service Controller — focuses on interrupt handling"
        ],
        ans: 1
      },
      {
        q: "Which architecture dominates smartphone processors?",
        opts: ["x86", "MIPS", "ARM", "8051"],
        ans: 2
      },
      {
        q: "What is a System-on-Chip (SoC)?",
        opts: [
          "A chip that only contains memory",
          "A CPU + GPU + peripherals + memory controller all integrated on a single chip",
          "A type of operating system",
          "A single-core processor"
        ],
        ans: 1
      }
    ],
    challenge: "Research and compare three specific chips: Intel 8086, Intel 8051, and ARM Cortex-M4. Create a detailed comparison table with: year released, word size, clock speed range, on-chip memory, I/O capabilities, instruction set type (CISC/RISC), typical power consumption, unit cost, and three real-world applications for each. Then explain which you would choose for: (a) a desktop calculator, (b) a smart thermostat, (c) a fitness band.",
    resources: [
      { type: "video", title: "Microprocessor vs Microcontroller", url: "https://www.youtube.com/watch?v=dcNk0urTKQE", source: "GreatScott!" },
      { type: "article", title: "8051 Microcontroller Architecture", url: "https://www.geeksforgeeks.org/architecture-of-8051-microcontroller/", source: "GeeksforGeeks" },
      { type: "video", title: "ARM vs x86 Explained", url: "https://www.youtube.com/watch?v=AADZo73yrq4", source: "Gary Explains" },
      { type: "article", title: "ARM Architecture Overview", url: "https://developer.arm.com/documentation/den0013/d/Introduction-to-the-ARM-Architecture", source: "ARM Developer" }
    ],
    eli5: "The 8086 is like a powerful chef who works in a big kitchen but needs separate helpers — one person to pass ingredients (RAM), one to read recipes (ROM), one to take orders (I/O). The 8051 is like a food truck chef — everything is built into one small truck: stove, fridge, and order window. ARM is like a super-efficient chef who can cook amazing meals using very little fuel. Your phone uses an ARM chef because it needs to cook all day on a small battery, your laptop might use an x86 chef for heavy-duty cooking, and your washing machine uses an 8051-style chef because it just needs to follow simple recipes reliably.",
    codeWalkthrough: [
      "Title comment for architecture comparison",
      "Separator line",
      "Blank line",
      "Section: 8086 microprocessor approach",
      "Comment: task is to add two numbers from memory",
      "MOV AX, [1000h] — load first number from external memory address 1000h",
      "ADD AX, [1002h] — add second number from external memory address 1002h",
      "MOV [1004h], AX — store the result back to external memory",
      "Comment: this requires external RAM chips with address decoding",
      "Blank line",
      "Section: 8051 microcontroller approach",
      "Comment: task is to blink an LED — classic embedded demo",
      "Load bit pattern 01h into the accumulator (A register)",
      "Write accumulator to Port 1 — LED turns ON (all I/O is built in!)",
      "Call a delay subroutine to keep LED visible",
      "CLR P1.0 — clear just bit 0 of Port 1 — LED turns OFF",
      "Comment: 8051 can address individual port BITS — powerful for control",
      "Call delay again",
      "Short jump back to loop — LED blinks forever",
      "Comment: no external chips needed — I/O is on the same silicon",
      "Blank line",
      "Section: ARM Cortex-M modern microcontroller approach",
      "Comment: read a sensor and send data over serial",
      "LDR R0 — load the base address of the ADC peripheral registers",
      "LDR R1 — read the ADC data register using offset addressing",
      "LDR R2 — load the base address of the UART peripheral",
      "STR R1 — write the sensor data to UART transmit register",
      "Comment: ARM peripherals are memory-mapped to on-chip addresses"
    ],
    bugChallenge: {
      code: "; ARM Cortex-M: toggle LED on GPIO pin 5\n;\n  LDR R0, =GPIO_BASE   ; GPIO base address\n  MOV R1, #32           ; pin 5 = bit 5 = 32\n  STR R1, [R0, #SET]    ; turn LED ON\n  BL DELAY              ; wait\n  STR R1, [R0, #SET]    ; turn LED OFF\n  BL DELAY\n  B LOOP                ; repeat",
      hint: "To turn an LED OFF, you need to clear the GPIO pin. What register should be used for clearing versus setting?",
      answer: "The second STR writes to the SET register again, which turns the LED ON (not OFF). GPIO peripherals have separate SET and CLEAR registers. To turn the LED OFF, write to the CLEAR register: STR R1, [R0, #CLR]. The SET register sets bits to 1 (LED ON), and the CLR register clears bits to 0 (LED OFF)."
    },
    difficulty: "advanced",
    prereqs: [45, 2]
  },
  {
    id: 47,
    title: "Designing a Small Microprocessor-Based System",
    subtitle: "Putting All the Pieces Together",
    analogy: "Designing a microprocessor system is like planning a small town. The CPU is the town hall (makes all decisions). RAM is the scratchpad office (temporary workspace). ROM is the library (permanent reference). The 8255 is the post office (handles mail in and out). The 8259 is the town dispatcher (routes emergency calls by priority). Address decoding is the street numbering system — without it, mail goes to the wrong address and the whole town falls apart. A good town plan (memory map) prevents chaos.",
    points: [
      {
        t: "System Design Methodology",
        d: "Designing a microprocessor system follows a structured process: (1) Define requirements — what must the system do? (2) Select components — CPU, memory sizes, peripherals. (3) Design the memory map — assign address ranges. (4) Design address decoding — generate chip selects. (5) Draw the schematic — connect buses, control signals. (6) Write initialization code. (7) Test and validate. Skipping any step leads to debugging nightmares.",
        code: "; System Design Steps:\n;\n; 1. REQUIREMENTS:\n;    - Process keyboard input\n;    - Display on 7-segment\n;    - Generate periodic interrupt (timer)\n;    - Communicate via serial port\n;\n; 2. COMPONENT SELECTION:\n;    - CPU: 8086 (5 MHz)\n;    - ROM: 27256 (32KB) — program storage\n;    - RAM: 62256 (32KB) — data/stack\n;    - I/O: 8255 PPI (keyboard + display)\n;    - Timer: 8254 (periodic interrupt)\n;    - PIC: 8259 (interrupt management)\n;    - Serial: 8251 USART"
      },
      {
        t: "System Block Diagram",
        d: "The block diagram shows all components and how they connect through the bus system. The 8086 CPU connects to all devices via the address bus (A0-A19), data bus (D0-D15), and control bus (RD, WR, M/IO, INTA). Each device has a chip select (CS) driven by the address decoder. ROM connects to the data bus read-only. RAM connects read/write. I/O chips connect through the lower data bus (D0-D7) with I/O port addresses.",
        code: ";           ┌──────────────┐\n;           │    8086 CPU  │\n;           │    (5 MHz)   │\n;           └──┬──┬──┬──┬──┘\n;       Addr   │  │  │  │  Data/Control\n;       Bus    │  │  │  │  Bus\n;  ┌───────────┼──┼──┼──┼───────────┐\n;  │ ADDRESS   │  │  │  │  DATA     │\n;  │ DECODER   │  │  │  │  BUS      │\n;  │ (74LS138) │  │  │  │  (D0-D15) │\n;  └─┬──┬──┬──┘  │  │  └─┬──┬──┬───┘\n;    │  │  │     │  │    │  │  │\n;    CS CS CS    │  │    │  │  │\n;    │  │  │     │  │    │  │  │\n;  ┌─┴┐┌┴─┐┌┴──┐│  │ ┌──┴┐┌┴─┐┌┴──┐\n;  │ROM││RAM││8255│ │ │8254││8259│8251│\n;  └──┘└──┘└───┘│  │ └───┘└──┘└───┘"
      },
      {
        t: "Memory Map Design",
        d: "The memory map divides the 1MB address space into regions for each device. Key rules: ROM must include FFFF0h (reset vector). RAM should start at 00000h (interrupt vector table lives at 00000h-003FFh). Leave space between memory and I/O devices. Avoid overlaps. For the I/O space (64KB), assign port addresses to each peripheral with enough consecutive addresses for their registers.",
        code: "; === MEMORY MAP (1MB space) ===\n;\n; FFFFF ┌──────────────────┐\n;       │    ROM 32KB      │ F8000h - FFFFFh\n; F8000 ├──────────────────┤\n;       │    Unused         │ 08000h - F7FFFh\n; 08000 ├──────────────────┤\n;       │    RAM 32KB      │ 00000h - 07FFFh\n; 00000 └──────────────────┘\n;\n; Reset vector FFFF0h → in ROM range ✓\n; IVT 00000h-003FFh → in RAM range ✓\n;\n; === I/O MAP (64KB space) ===\n;\n; 8255 PPI:    ports 80h - 83h\n; 8254 Timer:  ports 40h - 43h\n; 8259 PIC:    ports 20h - 21h\n; 8251 USART:  ports 60h - 61h"
      },
      {
        t: "Address Decoding Design",
        d: "Use a 74LS138 decoder to generate chip selects from upper address lines. For memory: decode A19-A15 to select ROM and RAM blocks. For I/O: use M/IO combined with address bits to select peripherals. Each chip select equation must be derived from the assigned address range, ensuring no overlaps. Document every decode equation — this is critical for debugging.",
        code: "; Memory Decoding using 74LS138:\n;\n; 74LS138 #1 (memory space, M/IO=1):\n;   C=A19, B=A18, A=A17\n;   G1=M/IO, G2A=GND, G2B=GND\n;\n;   Y7 (A19:A17 = 111) → active for F8000-FFFFF\n;     → CS_ROM (when A16=1, A15=1)\n;\n;   Y0 (A19:A17 = 000) → active for 00000-1FFFF\n;     → CS_RAM (when A15=0)\n;\n; I/O Decoding using 74LS138:\n;\n; 74LS138 #2 (I/O space, M/IO=0):\n;   C=A7, B=A6, A=A5\n;   G1=NOT(M/IO), G2A=GND, G2B=GND\n;\n;   Y1 (A7:A5 = 001) → ports 20-3Fh → CS_8259\n;   Y2 (A7:A5 = 010) → ports 40-5Fh → CS_8254\n;   Y3 (A7:A5 = 011) → ports 60-7Fh → CS_8251\n;   Y4 (A7:A5 = 100) → ports 80-9Fh → CS_8255"
      },
      {
        t: "Chip Selection and Signal Connections",
        d: "Each peripheral chip needs correct signal wiring. ROM: address lines A0-A14 for 32KB, D0-D7/D8-D15 for data, RD to OE, CS from decoder. RAM: same address lines, data lines, RD to OE, WR to WE, CS from decoder. 8255: A0-A1 for register select, D0-D7 for data, RD, WR, CS from I/O decoder. 8259: A0 for register select, D0-D7, RD, WR, CS, INT to CPU INTR. Clock and reset signals to all chips.",
        code: "; Signal connections for each chip:\n;\n; ROM (27256, 32KB):\n;   A0-A14 ← CPU address bus\n;   D0-D7  → CPU data bus (even bank)\n;   OE     ← CPU RD\n;   CE     ← CS_ROM (from decoder)\n;\n; RAM (62256, 32KB):\n;   A0-A14 ← CPU address bus\n;   D0-D7  ↔ CPU data bus\n;   OE     ← CPU RD\n;   WE     ← CPU WR\n;   CE     ← CS_RAM (from decoder)\n;\n; 8255 PPI:\n;   A0-A1  ← CPU A0, A1\n;   D0-D7  ↔ CPU data bus\n;   RD, WR ← CPU control\n;   CS     ← CS_8255 (from I/O decoder)\n;   RESET  ← system RESET\n;\n; 8259 PIC:\n;   A0     ← CPU A0\n;   D0-D7  ↔ CPU data bus\n;   RD, WR ← CPU control\n;   CS     ← CS_8259\n;   INT    → CPU INTR\n;   INTA   ← CPU INTA"
      },
      {
        t: "Initialization Code — Booting the System",
        d: "After reset, the 8086 starts executing from FFFF0h (in ROM). The initialization code must: set up segment registers, set up the stack pointer, initialize the IVT (interrupt vector table), configure the 8259 PIC, configure the 8254 timer, configure the 8255 I/O, configure the 8251 serial port, enable interrupts (STI), and jump to the main application. This boot code is the firmware of the system.",
        code: "; Boot code at FFFF0h (ROM):\n;\n  JMP FAR INIT          ; jump to initialization\n;\nINIT:\n  ; Set up segments\n  MOV AX, 0000h\n  MOV DS, AX            ; data at 00000h\n  MOV AX, 0700h\n  MOV SS, AX\n  MOV SP, 0FFFFh        ; stack at top of RAM\n;\n  ; Initialize 8259 PIC\n  MOV AL, 13h           ; ICW1\n  OUT 20h, AL\n  MOV AL, 08h           ; ICW2: vectors at INT 8\n  OUT 21h, AL\n  MOV AL, 01h           ; ICW4: 8086 mode\n  OUT 21h, AL\n  MOV AL, 0FEh          ; mask all except IR0\n  OUT 21h, AL\n;\n  ; Initialize 8254 Timer\n  MOV AL, 36h           ; C0, mode 3, LSB+MSB\n  OUT 43h, AL\n  MOV AL, 00h           ; count = 0 (65536)\n  OUT 40h, AL\n  OUT 40h, AL\n;\n  ; Initialize 8255\n  MOV AL, 82h           ; PA=out, PB=in\n  OUT 83h, AL\n;\n  STI                   ; enable interrupts\n  JMP MAIN              ; start application"
      },
      {
        t: "Design Validation Checklist",
        d: "Before building, verify: (1) Reset vector FFFF0h is inside ROM. (2) IVT area 00000-003FF is inside RAM. (3) No address overlaps between chips. (4) All chip selects derived correctly — check truth table. (5) Even/odd bank wiring correct for 16-bit bus. (6) Control signals (RD/WR/M-IO) correctly routed. (7) Clock and reset connected to all chips. (8) Pull-up resistors on open-drain signals. (9) Decoupling capacitors near each chip's power pins.",
        code: "; Design Validation Checklist:\n;\n; □ ROM at F8000-FFFFF includes FFFF0h? ✓\n; □ RAM at 00000-07FFF includes IVT?    ✓\n; □ No overlap: ROM and RAM don't share\n;   addresses?                          ✓\n; □ I/O ports don't conflict?\n;   8259=20h, 8254=40h, 8251=60h,\n;   8255=80h — all separate              ✓\n; □ M/IO used in both decoders?\n;   Memory decoder: G1=M/IO             ✓\n;   I/O decoder: G1=NOT(M/IO)           ✓\n; □ Even/odd banks for 16-bit RAM?      ✓\n; □ Stack fits within RAM?              ✓\n;   SS:SP = 0700:FFFF → 0700*16+FFFF\n;   = 07000+FFFF = 16FFF → in RAM?      ✓\n; □ RESET connected to all peripherals? ✓\n; □ Decoupling caps: 100nF per chip     ✓"
      },
      {
        t: "Complete System Integration Example",
        d: "The final system: 8086 CPU, 32KB ROM (27256), 32KB RAM (62256), 8255 for keyboard/display, 8254 for timing, 8259 for interrupts, 8251 for serial communication. The boot code in ROM initializes everything, sets up ISRs, and enters a main loop that scans the keyboard, updates the display, and handles serial commands. This is a complete, functional embedded system built entirely from the chips studied in this course.",
        code: "; Complete System Main Loop:\n;\nMAIN:\n  CALL SCAN_KEYBOARD    ; read keyboard via 8255\n  JC NO_KEY             ; carry = no key pressed\n  CALL PROCESS_KEY      ; decode and handle key\n  CALL UPDATE_DISPLAY   ; update 7-seg via 8255\n;\nNO_KEY:\n  ; Check serial port for incoming data\n  IN AL, 61h            ; 8251 status\n  TEST AL, 02h          ; RxRDY?\n  JZ NO_SERIAL\n  IN AL, 60h            ; read serial byte\n  CALL PROCESS_SERIAL   ; handle command\n;\nNO_SERIAL:\n  ; Timer ISR handles periodic tasks\n  ; (runs automatically via 8259 + 8254)\n;\n  JMP MAIN              ; back to scanning\n;\n; Timer ISR (called by 8259 on IR0):\nTIMER_ISR:\n  PUSH AX\n  CALL MULTIPLEX_DISPLAY ; refresh 7-seg digits\n  MOV AL, 20h\n  OUT 20h, AL            ; EOI to 8259\n  POP AX\n  IRET"
      }
    ],
    whatIs: "This lesson integrates all previous concepts into a complete microprocessor-based system design. It covers the systematic process: defining requirements, selecting components (8086 + ROM + RAM + 8255 + 8254 + 8259 + 8251), designing the memory and I/O maps, implementing address decoding with 74LS138 decoders, wiring chip-select logic, writing initialization firmware, and validating the design. The result is a functional embedded system that can read input, process data, display output, handle interrupts, and communicate serially.",
    realWorld: "This is exactly how embedded systems engineers design products today — just with modern components. A car's engine control unit follows the same design process: select an MCU (now ARM), add sensors (via ADC/I/O), add actuators (via GPIO/PWM), design the memory map, write initialization firmware, implement ISRs for real-time events, and validate everything. The tools and chips have evolved, but the methodology is identical to what we practice here with the 8086.",
    code: "; =============================================\n; Complete 8086 System Design\n; =============================================\n;\n; Components:\n;   8086 CPU @ 5MHz\n;   27256 ROM (32KB) at F8000-FFFFF\n;   62256 RAM (32KB) at 00000-07FFF\n;   8255 PPI at I/O 80-83h\n;   8254 Timer at I/O 40-43h\n;   8259 PIC at I/O 20-21h\n;   8251 USART at I/O 60-61h\n;\n; === Address Decoding Equations ===\n;\n; CS_ROM = M/IO AND A19 AND A18 AND A17\n;          AND A16 AND A15\n; CS_RAM = M/IO AND NOT(A19) AND NOT(A18)\n;          AND NOT(A17) AND NOT(A15)\n;\n; CS_8259 = NOT(M/IO) AND NOT(A7) AND\n;           A6 AND NOT(A5)\n; CS_8254 = NOT(M/IO) AND NOT(A7) AND\n;           NOT(A6) AND A5   — wait, that's 20h\n;\n; Correction using 74LS138:\n;   I/O decoder: C=A7, B=A6, A=A5\n;   Y1 (001) → 20-3Fh → CS_8259\n;   Y2 (010) → 40-5Fh → CS_8254\n;   Y3 (011) → 60-7Fh → CS_8251\n;   Y4 (100) → 80-9Fh → CS_8255\n;\n; === Initialization Sequence ===\n;\n  ORG 0FFF0h             ; ROM reset vector\n  JMP FAR PTR BOOT       ; first instruction\n;\n  ORG 0F800h             ; Boot code in ROM\nBOOT:\n  CLI                    ; disable interrupts\n  MOV AX, 0\n  MOV DS, AX\n  MOV ES, AX\n  MOV AX, 07FFh\n  MOV SS, AX\n  MOV SP, 0FFEh\n;\n  ; --- Init 8259 PIC ---\n  MOV AL, 13h\n  OUT 20h, AL            ; ICW1\n  MOV AL, 08h\n  OUT 21h, AL            ; ICW2\n  MOV AL, 01h\n  OUT 21h, AL            ; ICW4\n  MOV AL, 0FEh\n  OUT 21h, AL            ; unmask IR0 (timer)\n;\n  ; --- Init 8254 Timer (1ms tick) ---\n  MOV AL, 36h\n  OUT 43h, AL            ; C0, mode 3\n  MOV AL, 0A9h\n  OUT 40h, AL            ; LSB of 1193\n  MOV AL, 04h\n  OUT 40h, AL            ; MSB of 1193\n;\n  ; --- Init 8255 (PA=out, PB=in) ---\n  MOV AL, 82h\n  OUT 83h, AL\n;\n  ; --- Init 8251 (9600, 8N1, 16x) ---\n  MOV AL, 40h\n  OUT 61h, AL            ; reset\n  MOV AL, 4Eh\n  OUT 61h, AL            ; mode word\n  MOV AL, 37h\n  OUT 61h, AL            ; command word\n;\n  ; --- Set IVT for timer (INT 08h) ---\n  MOV WORD PTR DS:[0020h], OFFSET TIMER_ISR\n  MOV WORD PTR DS:[0022h], CS\n;\n  STI                    ; enable interrupts\n  JMP MAIN               ; start application",
    funFact: "The original IBM PC motherboard had exactly this kind of design — an 8088 CPU connected to ROM, RAM, an 8255 (keyboard interface), an 8253 (timer), an 8259 (interrupts), and an 8250 (serial port, similar to 8251). The entire design team was just 12 engineers, and they built the whole system in about one year. Their design decisions — like the memory map, IRQ assignments, and I/O port addresses — became industry standards that persisted for over 30 years.",
    quiz: [
      {
        q: "Why must ROM include the address FFFF0h in an 8086 system?",
        opts: [
          "Because FFFF0h is the interrupt vector address",
          "Because the 8086 begins execution at FFFF0h after reset",
          "Because ROM is always the largest memory chip",
          "Because the stack is at FFFF0h"
        ],
        ans: 1
      },
      {
        q: "What is the purpose of a 74LS138 in system design?",
        opts: [
          "It amplifies data bus signals",
          "It generates chip select signals by decoding address lines into individual outputs",
          "It stores data temporarily",
          "It provides clock signals"
        ],
        ans: 1
      },
      {
        q: "Why is the interrupt vector table (IVT) placed in RAM, not ROM?",
        opts: [
          "ROM cannot hold that many addresses",
          "Because ISR addresses need to be writable — software must set up IVT entries during initialization",
          "The IVT is never used",
          "RAM is faster than ROM"
        ],
        ans: 1
      },
      {
        q: "In the initialization sequence, why is CLI executed before setting up peripherals?",
        opts: [
          "To clear all registers",
          "To disable interrupts while setting up ISRs and peripherals — preventing crashes from unexpected interrupts",
          "To clear the instruction cache",
          "CLI is not necessary"
        ],
        ans: 1
      },
      {
        q: "What is the very first instruction the 8086 executes after reset?",
        opts: [
          "MOV AX, 0",
          "NOP",
          "The instruction at physical address FFFF0h (typically JMP to boot code)",
          "INT 0"
        ],
        ans: 2
      }
    ],
    challenge: "Design a complete 8086-based temperature monitoring system. Requirements: (1) Read temperature sensor via 8255 Port B, (2) Display temperature on 4-digit multiplexed 7-segment via 8255 Port A, (3) Sound an alarm via 8254 speaker when temperature exceeds a threshold, (4) Log data via 8251 serial port at 9600 baud, (5) Use 8259 for timer-driven display refresh. Provide: complete memory map, I/O map, address decoding equations, initialization code, and main loop pseudocode.",
    resources: [
      { type: "video", title: "8086 System Design Example", url: "https://www.youtube.com/watch?v=rUQbs5YYjBw", source: "Education 4u" },
      { type: "article", title: "Microprocessor System Design", url: "https://www.geeksforgeeks.org/interfacing-of-8086-with-8255/", source: "GeeksforGeeks" },
      { type: "video", title: "Complete 8086 Minimum Mode System", url: "https://www.youtube.com/watch?v=N7uIa_aJiYw", source: "Neso Academy" },
      { type: "docs", title: "8086 Hardware Reference Manual", url: "https://datasheetspdf.com/pdf/1450322/Intel/8086/1", source: "Intel" }
    ],
    eli5: "Imagine building a toy robot. The 8086 CPU is the robot's brain. RAM is a whiteboard where it writes notes. ROM is an instruction booklet it can never change. The 8255 is the robot's hands (touching buttons and moving things). The 8254 is a clock on the wall (tells the robot when to do things). The 8259 is a doorbell system (tells the brain when something needs attention). The address decoder is the name tag on each part so the brain knows which part it is talking to. You build the robot by connecting all these parts to the same set of wires (the bus) and giving each part its own address!",
    codeWalkthrough: [
      "Title comment for complete system design",
      "Separator line",
      "Blank line",
      "Component list with specifications",
      "CPU: 8086 running at 5 MHz",
      "ROM: 32KB mapped at top of memory for boot code",
      "RAM: 32KB mapped at bottom for data, stack, and IVT",
      "Peripheral chips with their I/O port assignments",
      "Blank line",
      "Address decoding equations section",
      "Blank line",
      "CS_ROM: active when M/IO=1 and all upper address bits = 1 (F8000-FFFFF)",
      "CS_RAM: active when M/IO=1 and upper bits = 0 (00000-07FFF)",
      "Blank line",
      "I/O decoder equations using 74LS138",
      "Comment on correction: using organized decoder outputs",
      "Y1 output selects 8259 PIC at ports 20-3Fh",
      "Y2 selects 8254 timer at ports 40-5Fh",
      "Y3 selects 8251 USART at ports 60-7Fh",
      "Y4 selects 8255 PPI at ports 80-9Fh",
      "Blank line",
      "Initialization sequence begins",
      "Blank line",
      "ORG directive places reset vector jump at ROM address FFF0h",
      "JMP instruction — first thing executed after power-on reset",
      "Blank line",
      "ORG places boot code at beginning of ROM space",
      "BOOT label — system initialization starts here",
      "CLI disables interrupts to prevent crashes during setup",
      "Clear AX for segment register initialization",
      "Set DS and ES to segment 0 (data at physical 00000h)",
      "Set ES",
      "Set stack segment to 07FFh",
      "Point stack to near top of RAM",
      "Set SP — stack is ready",
      "Blank line",
      "Initialize 8259 PIC — sets interrupt handling policies",
      "ICW1: edge triggered, single PIC, ICW4 needed",
      "ICW2: IR0 maps to INT 08h vector",
      "ICW4: 8086 mode for correct vector generation",
      "OCW1: unmask only IR0 (timer) — all others masked",
      "Blank line",
      "Initialize 8254 timer for 1ms periodic interrupt",
      "Control word: Counter 0, Mode 3 square wave, LSB+MSB",
      "Load count value 1193 (for ~1 KHz with 1.193 MHz clock)",
      "LSB of count",
      "MSB of count — timer starts generating interrupts",
      "Blank line",
      "Initialize 8255: Port A output, Port B input",
      "Control word 82h configures ports",
      "Blank line",
      "Initialize 8251 USART for 9600 baud 8N1",
      "Reset command clears any previous state",
      "Mode word: 8 data bits, no parity, 1 stop, 16x clock",
      "Command word: enable transmitter, receiver, DTR, RTS",
      "Blank line",
      "Set up IVT entry for timer interrupt (INT 08h)",
      "Store ISR offset at IVT address 0020h (vector 08h * 4)",
      "Store ISR segment at IVT address 0022h",
      "Blank line",
      "STI enables interrupts — system is fully initialized",
      "Jump to main application loop"
    ],
    bugChallenge: {
      code: "; System init — set up stack and start\n;\n  MOV AX, 0800h\n  MOV SS, AX\n  MOV SP, 0000h         ; stack pointer\n;\n  ; Init 8259\n  MOV AL, 13h\n  OUT 20h, AL           ; ICW1\n  MOV AL, 20h\n  OUT 21h, AL           ; ICW2: base vector 20h\n  MOV AL, 01h\n  OUT 21h, AL           ; ICW4\n;\n  STI\n  JMP MAIN",
      hint: "When SP=0000h and you PUSH, what happens? Also check if interrupts are enabled before the IVT is set up.",
      answer: "Two bugs: (1) SP=0000h means the first PUSH will decrement SP to FFFEh and write to SS:FFFEh = 08000h+FFFEh = 17FFEh, which may be outside RAM (RAM ends at 07FFFh). SP should start at the TOP of the stack area, like FFFFh or FFFEh. (2) STI enables interrupts, but no ISR addresses have been written to the IVT. When the timer fires INT 20h, the CPU will jump to whatever garbage address is at IVT[20h], causing a crash. Fix: set up IVT entries BEFORE STI."
    },
    difficulty: "advanced",
    prereqs: [37, 39, 42]
  },
  {
    id: 48,
    title: "Capstone: Trace, Explain, and Present a Full Interfaced System",
    subtitle: "The Final Challenge — Master the Complete Picture",
    analogy: "This capstone is like a final pilot check-ride. You have learned every instrument in the cockpit individually — altimeter (registers), compass (flags), throttle (control signals), radio (serial), autopilot (interrupts). Now you must fly the complete airplane: take off (reset and boot), navigate (execute instructions), communicate with the tower (I/O), handle emergencies (interrupts), and land safely (produce correct output). The examiner watches every move and asks 'Why did you do that?' You must explain every decision, every signal, every timing detail.",
    points: [
      {
        t: "What 'Trace the System' Means",
        d: "Tracing a system means following the exact sequence of events from power-on to a specific operation: which address appears on the bus, which chip responds, what data flows, which signals are asserted, and in what order. It is the ultimate demonstration of understanding — you cannot fake a trace. If you can trace the complete execution of an instruction including address decoding, memory access, and peripheral interaction, you truly understand how a microprocessor system works.",
        code: "; Tracing: MOV AL, [1000h]\n; (Read byte from RAM address 01000h)\n;\n; Step 1: CPU puts 01000h on address bus\n;   A19-A0 = 0000 0001 0000 0000 0000\n;\n; Step 2: Address decoder activates CS_RAM\n;   A19-A17 = 000 → decoder Y0 → CS_RAM LOW\n;\n; Step 3: CPU asserts M/IO = 1 (memory)\n; Step 4: CPU asserts RD = LOW (read)\n;\n; Step 5: RAM chip receives:\n;   CE = LOW (from decoder)\n;   OE = LOW (from RD)\n;   Address A0-A14 = internal address\n;\n; Step 6: RAM places data on D0-D7\n; Step 7: CPU latches D0-D7 into AL\n; Step 8: CPU de-asserts RD, moves to next instr"
      },
      {
        t: "Tracing a Complete I/O Operation",
        d: "Tracing an I/O port access (like OUT 80h, AL) follows the same logic but with M/IO=0. The address bus carries the port number (0080h), M/IO goes LOW signaling I/O, the I/O decoder generates CS_8255, and the 8255 latches the data from the data bus. Every signal change has a purpose, and exam questions often ask you to list them in order.",
        code: "; Tracing: OUT 80h, AL\n; (Write AL to 8255 Port A)\n;\n; Step 1: CPU puts 0080h on address bus\n;   A15-A0 = 0000 0000 1000 0000\n;\n; Step 2: CPU sets M/IO = 0 (I/O cycle)\n;\n; Step 3: I/O decoder checks:\n;   M/IO=0 → enabled\n;   A7=1, A6=0, A5=0 → Y4 active → CS_8255 LOW\n;\n; Step 4: 8255 sees:\n;   CS = LOW (selected)\n;   A1=0, A0=0 → Port A register\n;\n; Step 5: CPU puts AL value on D0-D7\n; Step 6: CPU asserts WR = LOW\n;\n; Step 7: 8255 latches D0-D7 into Port A\n;   Port A output pins reflect new value\n;\n; Step 8: CPU de-asserts WR\n;   I/O write cycle complete"
      },
      {
        t: "Tracing an Interrupt Sequence",
        d: "The most complex trace: a hardware interrupt from 8254 timer through 8259 PIC to the CPU. The timer counts to zero → asserts OUT0 → connected to 8259 IR0 → 8259 asserts INTR → CPU finishes current instruction → sends two INTA pulses → 8259 provides vector → CPU reads IVT → jumps to ISR → ISR executes → sends EOI → IRET. This involves every major chip in the system working together.",
        code: "; Tracing: Timer interrupt (8254 → 8259 → CPU)\n;\n; 1. 8254 Counter 0 reaches 0\n;    → OUT0 goes LOW (Mode 2 pulse)\n;    → OUT0 connected to 8259 IR0\n;\n; 2. 8259 IRR bit 0 set (request registered)\n;    Priority resolver: IR0 is highest\n;    → 8259 asserts INTR to CPU\n;\n; 3. CPU finishes current instruction\n;    CPU checks: IF=1 (interrupts enabled)?\n;    Yes → acknowledge interrupt\n;\n; 4. First INTA pulse:\n;    → 8259 sets ISR bit 0, clears IRR bit 0\n;\n; 5. Second INTA pulse:\n;    → 8259 puts vector 08h on data bus\n;    → CPU reads 08h\n;\n; 6. CPU reads IVT[08h]:\n;    Address = 4 × 08h = 0020h\n;    IP = [0020h], CS = [0022h]\n;    → CPU jumps to timer ISR\n;\n; 7. ISR runs → sends EOI → IRET"
      },
      {
        t: "Tracing a DMA Transfer",
        d: "When the floppy controller wants to transfer data via DMA Channel 2: FDC asserts DREQ2 → 8237 asserts HRQ → CPU asserts HLDA → 8237 takes bus control → 8237 drives address bus and asserts DACK2 → data moves from FDC to memory → count decrements → when count=0, TC asserted → 8237 releases HRQ → CPU resumes. The CPU is completely hands-off during the actual transfer.",
        code: "; Tracing: DMA read from floppy to memory\n;\n; Pre-condition: 8237 CH2 programmed\n;   Address=1000h, Count=511, Mode=single/write\n;\n; 1. FDC has byte ready → asserts DREQ2\n;\n; 2. 8237 asserts HRQ to CPU\n;    CPU finishes current bus cycle\n;    CPU tri-states address/data buses\n;    CPU asserts HLDA (bus granted)\n;\n; 3. 8237 takes bus control:\n;    Drives address bus = 01000h (from CH2 addr)\n;    Asserts DACK2 (tells FDC: your turn)\n;    Asserts MEMW (memory write)\n;\n; 4. FDC puts data byte on D0-D7\n;    (triggered by DACK2)\n;\n; 5. Memory latches byte at 01000h\n;\n; 6. 8237 increments address → 01001h\n;    Decrements count → 510\n;    Releases bus (single mode)\n;\n; 7. CPU gets bus back, HLDA de-asserted\n;    ... until next DREQ2 for next byte"
      },
      {
        t: "Exam-Style Analysis Questions",
        d: "University exams and interviews test your ability to analyze unfamiliar systems. Common formats: (1) Given a memory map, determine address ranges and decoder equations. (2) Given a control word, determine chip configuration. (3) Given assembly code, trace register and flag changes. (4) Given a system diagram, identify missing connections. (5) Calculate timing values for timer modes. You must combine knowledge from multiple lessons to answer these.",
        code: "; Exam-Style Question Examples:\n;\n; Q1: What is the 8255 control word for:\n;     PA=Mode 1 input, PB=Mode 0 output?\n; A1: 1 01 1 x 0 0 0 = B0h or B8h\n;\n; Q2: 8254 CLK=2MHz, Mode 2, count=40000\n;     What is the output frequency?\n; A2: f = 2,000,000 / 40,000 = 50 Hz\n;\n; Q3: After executing:\n;     MOV AX, 0FFFFh\n;     ADD AX, 1\n;     What are: AX=? CF=? ZF=? OF=?\n; A3: AX=0000h, CF=1, ZF=1, OF=0\n;\n; Q4: ROM at E0000-FFFFF, RAM at 00000-1FFFF\n;     What decoder config divides 1MB into\n;     8 blocks of 128KB?\n; A4: 74LS138: C=A19, B=A18, A=A17\n;     Y0=block0(00000-1FFFF), Y7=block7(E0000-FFFFF)"
      },
      {
        t: "Signal Timing Diagram Reading",
        d: "Timing diagrams show signal values (HIGH/LOW) on a shared time axis. Being able to read them is essential for hardware understanding. Key signals to track: CLK (reference), ALE (address latch), Address Bus, Data Bus, RD/WR, M/IO, INTA, READY. Practice reading: when does the address appear? When does data become valid? When does the CPU latch data? These details matter for real hardware design.",
        code: "; Read Bus Cycle Timing:\n;\n; CLK: ‾‾‾‾\\____/‾‾‾‾\\____/‾‾‾‾\\____/‾‾‾‾\\____\n;       T1        T2        T3        T4\n;\n; ALE: __/‾‾‾‾‾‾\\________________________________\n;      (latch address in T1)\n;\n; A/D: =[ADDR]==X=[========DATA=========]=======\n;      Address     Data valid\n;      in T1       in T3-T4\n;\n; RD:  ‾‾‾‾‾‾‾‾‾‾‾‾\\_________________/‾‾‾‾‾‾‾‾\n;                     Active in T2-T3\n;\n; Key timing rules:\n;   Address valid in T1 (latched by ALE)\n;   RD/WR asserted in T2\n;   Data valid by end of T3\n;   CPU reads data at T3-T4 boundary"
      },
      {
        t: "Design Presentation — Communicating Your Work",
        d: "Presenting a system design means organizing your work for others: (1) System overview and requirements. (2) Block diagram showing all components. (3) Detailed memory and I/O map. (4) Address decoding equations with truth tables. (5) Complete initialization code with comments. (6) ISR code for each interrupt source. (7) Main loop flow. (8) Testing methodology. Good engineers communicate designs clearly — a brilliant design nobody can understand is a failed design.",
        code: "; Presentation Structure:\n;\n; 1. OVERVIEW\n;    \"8086-based temperature monitor with\n;     serial reporting and alarm\"\n;\n; 2. BLOCK DIAGRAM\n;    (show all chips and bus connections)\n;\n; 3. MEMORY MAP\n;    ROM: F8000-FFFFF (32KB, program)\n;    RAM: 00000-07FFF (32KB, data/stack)\n;\n; 4. I/O MAP\n;    8255: 80-83h (sensor input, display output)\n;    8254: 40-43h (1ms timer, alarm tone)\n;    8259: 20-21h (timer interrupt)\n;    8251: 60-61h (serial log output)\n;\n; 5. ADDRESS DECODING\n;    (equations + truth table)\n;\n; 6. CODE\n;    (init + ISRs + main loop)\n;\n; 7. TESTING\n;    (checklist + expected behavior)"
      },
      {
        t: "Course Synthesis — Everything Connects",
        d: "This entire 48-lesson course flows as one integrated knowledge graph: digital logic (Lesson 4) builds gates used in decoders (Lesson 37). Registers (Lesson 11) hold data moved by instructions (Lessons 21-24). Addressing modes (Lesson 17) select memory interfaced in Lesson 37. Interrupts (Lessons 34-35) are managed by the 8259 (Lesson 42). Timers (Lesson 41) trigger those interrupts. I/O (Lessons 38-40) uses the 8255. Serial (Lesson 44) extends communication. Everything connects.",
        code: "; Course Knowledge Flow:\n;\n; Foundations (1-4)\n;   └→ CPU Architecture (5-8)\n;       └→ 8086 Specifics (9-16)\n;           ├→ Addressing & Data (17-20)\n;           │   └→ Memory Interface (37)\n;           ├→ Instructions (21-24)\n;           │   └→ Control Flow (25-28)\n;           │       └→ Assembly Practice (29-32)\n;           └→ Stack & Interrupts (33-36)\n;               └→ I/O & Peripherals (37-44)\n;                   ├→ 8255 (39-40)\n;                   ├→ 8254 (41)\n;                   ├→ 8259 (42)\n;                   ├→ 8237 (43)\n;                   └→ 8251 (44)\n;                       └→ System Design (47)\n;                           └→ Capstone (48) ★\n;\n; Modern Bridge (45-46): where it all leads"
      }
    ],
    whatIs: "This capstone lesson brings together every concept from the entire course. You will trace complete system operations — from CPU instruction execution through address decoding, memory access, peripheral interaction, interrupt handling, and DMA transfer. You will analyze exam-style problems that combine knowledge across multiple topics. And you will practice presenting a complete system design: block diagram, memory map, decoding logic, initialization firmware, ISR code, and main application — the full skill set of a microprocessor engineer.",
    realWorld: "The ability to trace a complete system — to follow a signal from a device through an interrupt controller to the CPU, through the ISR, to a memory write, and out to a display — is exactly what embedded systems engineers do when debugging real products. When a car's ABS module fails, an engineer traces the sensor signal through the interrupt chain to find the fault. When a medical device misbehaves, engineers trace bus activity with logic analyzers. This complete-system thinking is the most valuable skill you can develop.",
    code: "; =============================================\n; CAPSTONE: Full System Trace Example\n; =============================================\n;\n; Scenario: User presses key '5' on keyboard.\n; Trace the COMPLETE path through the system.\n;\n; === PHASE 1: Key Detection ===\n;\n; Main loop executes: IN AL, 81h (read 8255 Port B)\n;\n; CPU bus cycle:\n;   Address bus = 0081h\n;   M/IO = 0 (I/O cycle)\n;   I/O decoder: A7=1,A6=0,A5=0 → Y4 → CS_8255\n;   8255: A1=0, A0=1 → Port B selected\n;   CPU asserts RD\n;   8255 puts Port B data on D0-D7\n;   CPU reads into AL: 11011111 → column 5 active\n;\n; === PHASE 2: Display Update ===\n;\n; Code: MOV AL, [SEG_TABLE + 5]\n;   CPU reads address 0000:SEG_TBL+5 from RAM\n;   CS_RAM active (memory, low address)\n;   AL = 6Dh (pattern for '5')\n;\n; Code: OUT 80h, AL\n;   Address bus = 0080h, M/IO = 0\n;   CS_8255 active, A1=0, A0=0 → Port A\n;   CPU asserts WR, 8255 latches 6Dh\n;   Seven-segment shows '5'\n;\n; === PHASE 3: Serial Logging ===\n;\n; Code: OUT 60h, AL (send '5' via 8251)\n;   Address bus = 0060h, M/IO = 0\n;   CS_8251 active\n;   8251 serializes byte: START-10100110-STOP\n;   TxD line sends at 9600 baud\n;\n; === PHASE 4: Timer Interrupt ===\n;\n; Meanwhile, 8254 Counter 0 reaches 0\n;   OUT0 → 8259 IR0 → INTR asserted\n;   CPU: INTA pulse 1 → ISR bit set\n;   CPU: INTA pulse 2 → vector 08h received\n;   CPU: reads IVT[08h] → jumps to TIMER_ISR\n;   ISR: refreshes multiplexed display\n;   ISR: MOV AL, 20h / OUT 20h, AL → EOI\n;   ISR: IRET → back to main loop\n;\n; COMPLETE TRACE: keypress → detection → display\n;   → serial log → timer interrupt → display refresh\n;   All chips working together! ✓",
    funFact: "The skills you have built in this course — understanding registers, memory maps, bus timing, interrupts, and I/O interfacing — are essentially the same skills needed to reverse-engineer any electronic device. Security researchers use exactly these trace techniques to analyze unknown chips, find vulnerabilities in IoT devices, and understand how proprietary hardware works. The U.S. and global semiconductor industries have a massive shortage of engineers who understand hardware at this level — your knowledge is genuinely rare and valuable.",
    quiz: [
      {
        q: "When the CPU executes 'IN AL, 81h', what is the state of the M/IO pin?",
        opts: ["M/IO = 1 (HIGH)", "M/IO = 0 (LOW)", "M/IO is undefined", "M/IO toggles"],
        ans: 1
      },
      {
        q: "During a timer interrupt, what does the second INTA pulse cause the 8259 to do?",
        opts: [
          "Reset the timer",
          "Place the interrupt vector number on the data bus for the CPU to read",
          "Disable all interrupts",
          "Send EOI automatically"
        ],
        ans: 1
      },
      {
        q: "In a DMA transfer, who drives the address bus — CPU or DMA controller?",
        opts: [
          "Always the CPU",
          "The DMA controller, after receiving HLDA from the CPU",
          "Both simultaneously",
          "Neither — the address is in ROM"
        ],
        ans: 1
      },
      {
        q: "Why is EOI (End of Interrupt) essential after every hardware ISR?",
        opts: [
          "It speeds up the CPU",
          "Without EOI, the 8259 blocks all equal-or-lower-priority interrupts permanently",
          "It resets the timer",
          "It is optional and only needed for debugging"
        ],
        ans: 1
      },
      {
        q: "What makes this capstone different from individual lessons?",
        opts: [
          "It covers new topics not seen before",
          "It requires tracing operations across multiple chips simultaneously, integrating all prior knowledge",
          "It only tests theory, not practical skills",
          "It focuses only on the 8086 CPU"
        ],
        ans: 1
      }
    ],
    challenge: "Complete capstone challenge: Given an 8086 system with ROM (F0000-FFFFF), RAM (00000-0FFFF), 8255 (port C0-C3h), 8254 (port 40-43h), 8259 (port 20-21h), and 8251 (port A0-A1h): (1) Draw the complete block diagram with all bus connections. (2) Derive every chip select equation. (3) Write the full initialization code. (4) Write a timer ISR that increments a counter and sends its value via serial every 1000 interrupts. (5) Trace the execution of one complete timer interrupt cycle, listing every signal change in order.",
    resources: [
      { type: "video", title: "8086 System Design Complete Example", url: "https://www.youtube.com/watch?v=rUQbs5YYjBw", source: "Education 4u" },
      { type: "article", title: "Microprocessor Exam Questions and Solutions", url: "https://www.geeksforgeeks.org/microprocessor-tutorials/", source: "GeeksforGeeks" },
      { type: "video", title: "Tracing 8086 Instructions", url: "https://www.youtube.com/watch?v=N7uIa_aJiYw", source: "Neso Academy" },
      { type: "docs", title: "8086 Family User Manual", url: "https://edge.edx.org/c4x/BITSPilani/EEE231/asset/8086_family_Users_Manual_1_.pdf", source: "Intel" }
    ],
    eli5: "Imagine you built the world's most amazing Rube Goldberg machine — a ball rolls down a ramp, hits a lever, the lever rings a bell, the bell wakes up a hamster, the hamster runs on a wheel, the wheel powers a light. The capstone is like showing your machine to the whole class and explaining: 'The ball starts HERE because of gravity, the lever turns because of THIS angle, the bell rings because of THIS force, the hamster wakes because of THIS sound.' You trace every step and explain WHY it works. If you can do that for a whole microprocessor system — from key press to display to serial output to interrupt — you have truly mastered the machine beneath the software!",
    codeWalkthrough: [
      "Title comment for the capstone full system trace",
      "Separator line",
      "Blank line",
      "Scenario description: user presses key '5' and we trace everything",
      "Blank line",
      "PHASE 1: Key Detection — scanning the keyboard through 8255",
      "Blank line",
      "Main loop reads Port B: IN AL, 81h",
      "Blank line",
      "CPU places port address 0081h on the address bus",
      "M/IO signal = 0 because this is an I/O instruction (IN)",
      "I/O decoder analyzes: A7=1, A6=0, A5=0 maps to output Y4",
      "Y4 drives CS_8255 LOW — the 8255 is selected",
      "Inside the 8255: A1=0, A0=1 selects Port B register",
      "CPU asserts RD (read) control signal",
      "8255 responds by placing Port B data onto D0-D7 of the data bus",
      "CPU reads the data bus into AL — pattern shows column 5 is active (key pressed)",
      "Blank line",
      "PHASE 2: Display Update — showing the digit on seven-segment",
      "Blank line",
      "Code looks up segment pattern for digit 5 from table in RAM",
      "CS_RAM activates (memory access, low address range)",
      "AL receives 6Dh — the seven-segment pattern that displays '5'",
      "Blank line",
      "OUT 80h, AL sends the pattern to 8255 Port A (display port)",
      "Address bus = 0080h, M/IO=0 for I/O cycle",
      "CS_8255 active again, A1=0 A0=0 selects Port A",
      "CPU asserts WR, 8255 latches the byte 6Dh onto Port A output pins",
      "Seven-segment display lights up segments to show the digit 5",
      "Blank line",
      "PHASE 3: Serial Logging — send the key value over USART",
      "Blank line",
      "OUT 60h, AL sends the value to the 8251 data register",
      "CS_8251 activates for the I/O address",
      "8251 converts the parallel byte to a serial frame",
      "TxD line transmits START bit, 8 data bits, STOP bit at 9600 baud",
      "Blank line",
      "PHASE 4: Timer Interrupt — asynchronous periodic event",
      "Blank line",
      "8254 Counter 0 has been counting down and reaches zero",
      "OUT0 output pulses to 8259 IR0 input",
      "8259 sets IRR bit 0, priority resolver selects it, asserts INTR",
      "CPU finishes current instruction, sees INTR with IF=1",
      "First INTA pulse: 8259 sets ISR bit 0, clears IRR bit 0",
      "Second INTA pulse: 8259 places vector 08h on data bus, CPU reads it",
      "CPU reads IVT entry at address 0020h — gets ISR address",
      "CPU pushes FLAGS, CS, IP onto stack and jumps to TIMER_ISR",
      "ISR refreshes the multiplexed display (cycles through digits)",
      "ISR sends EOI (20h to port 20h) to clear the 8259 ISR bit",
      "IRET pops IP, CS, FLAGS — returns to main loop exactly where it left off",
      "Blank line",
      "Summary: complete trace from keypress through all chips back to normal execution"
    ],
    bugChallenge: {
      code: "; System ISR for timer interrupt:\n;\nTIMER_ISR:\n  INC WORD PTR [TICK_COUNT]\n  CMP WORD PTR [TICK_COUNT], 1000\n  JNE TIMER_DONE\n  MOV WORD PTR [TICK_COUNT], 0\n  ; Send status byte via 8251\n  MOV AL, 'T'\n  OUT 60h, AL\nTIMER_DONE:\n  IRET\n;\n; Main code enables interrupts:\n  MOV AL, 0FEh\n  OUT 21h, AL           ; unmask IR0\n  STI",
      hint: "The ISR modifies memory and registers. What about preserving the interrupted program's state? Also, what critical command is missing before IRET?",
      answer: "Two bugs: (1) The ISR does not save/restore registers (AX) or flags. INC and CMP modify flags, and MOV AL changes AX. The interrupted program's register values are corrupted. Fix: add PUSH AX at the start and POP AX before IRET (and PUSHF/POPF if needed). (2) There is no EOI command before IRET. Without 'MOV AL, 20h / OUT 20h, AL', the 8259's ISR bit stays set, blocking all future timer interrupts after the first one. Fix: add EOI before IRET."
    },
    difficulty: "advanced",
    prereqs: [47, 41, 42, 43, 44]
  }
];
