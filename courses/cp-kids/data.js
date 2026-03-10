const LESSONS_DATA = [
  // =============================================
  // LESSON 1: What is Competitive Programming?
  // =============================================
  {
    id: 1,
    title: "What is Competitive Programming?",
    subtitle: "Discover the world's most exciting brain sport — where coding meets competition!",
    analogy: "Competitive Programming is like a cooking competition. You are given ingredients (the input), you must follow the recipe rules (the problem statement), and you need to cook the perfect dish (the output) as fast as you can. The fastest chef with the tastiest dish wins!",
    points: [
      {
        t: "CP is a Brain Sport",
        d: "Competitive Programming (CP) is like chess, but instead of moving pieces, you solve puzzles by writing code. Thousands of people around the world compete to solve problems the fastest. It is a real sport — with contests, rankings, and even world championships!"
      },
      {
        t: "How a CP Contest Works",
        d: "In a contest, you get a set of problems (usually 4 to 8). Each problem describes something you need to calculate or figure out. You write code to solve it, submit your code to an online system, and it tells you if your answer is correct. The person who solves the most problems in the least time wins!"
      },
      {
        t: "Where People Compete",
        d: "There are awesome websites where you can practice and compete. Codeforces is the most popular — it hosts contests almost every week. AtCoder is great for beginners with clean problems. LeetCode helps you prepare for job interviews. USACO is for high school students in the USA. All of them are free!"
      },
      {
        t: "What Are Verdicts?",
        d: "When you submit your code, the system (called an online judge) checks it and gives you a verdict — like a grade. AC (Accepted) means your code is correct — hooray! WA (Wrong Answer) means your output is wrong. TLE (Time Limit Exceeded) means your code is too slow. RE (Runtime Error) means your code crashed. MLE (Memory Limit Exceeded) means your code used too much memory."
      },
      {
        t: "Why CP is Amazing for Your Brain",
        d: "CP trains your brain to think logically and break big problems into small steps. It is like going to the gym, but for your mind! Every problem you solve makes you a stronger thinker. Scientists have shown that problem-solving practice improves your ability to learn anything else too."
      },
      {
        t: "CP Helps You Get Great Jobs",
        d: "Top tech companies like Google, Meta, Amazon, and Microsoft love CP coders. Why? Because CP proves you can think clearly under pressure and solve hard problems. Many job interviews ask the exact same type of problems you practice in CP. It is like training for a race — when race day comes, you are already prepared."
      },
      {
        t: "Anyone Can Start — Yes, Even You!",
        d: "You do not need to be a math genius or a coding expert. Many world-champion competitive programmers started when they were 10 or 12 years old with zero coding experience. The secret is simple: start easy, practice a little every day, and never give up. If you can follow a recipe, you can learn CP!"
      },
      {
        t: "Famous CP Contests Around the World",
        d: "The biggest CP contest is the International Olympiad in Informatics (IOI) for high school students. For university students, there is ICPC (International Collegiate Programming Contest). Google hosts Code Jam, and Facebook hosts Hacker Cup. These contests have prizes, trips, and bragging rights!"
      },
      {
        t: "Your CP Journey Starts Now",
        d: "In this course, we will go step by step — from writing your very first line of code all the way to solving real contest problems. No rushing, no skipping. Think of it like learning to ride a bicycle: first we use training wheels, then one day you will be doing wheelies!"
      }
    ],
    whatIs: "Competitive Programming (CP) is a mind sport where participants solve well-defined programming problems within a time limit. You read a problem, think of a solution, write code, and submit it to an automated judge that instantly tells you if you are right or wrong. It combines logical thinking, math, and coding into one thrilling activity.",
    realWorld: "CP skills are used everywhere in the real world. Search engines like Google use algorithms to find the best results in milliseconds. GPS apps use shortest-path algorithms (a classic CP topic) to find the fastest route to your destination. Video games use optimization to render millions of pixels smoothly. Even social media feeds use sorting and filtering — all things you learn in CP!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Your very first CP-style program!
    // It reads a number and prints a greeting.

    int age;
    cout << "How old are you? ";
    cin >> age;

    if (age < 13) {
        cout << "Wow, a young CP champion in the making!" << endl;
    } else {
        cout << "Welcome to Competitive Programming!" << endl;
    }

    cout << "Let the adventure begin!" << endl;
    return 0;
}`,
    funFact: "The youngest gold medalist at the International Olympiad in Informatics (IOI) was just 14 years old! And the top-rated Codeforces user, tourist (Gennady Korotkevich), started competing at age 11. He has won practically every major CP competition in the world — multiple times. So no matter your age, you are never too young (or too old) to start!",
    quiz: [
      {
        q: "What does the verdict 'AC' mean when you submit your code?",
        opts: [
          "Your code is accepted and correct",
          "Your code has an error",
          "Your code is too slow",
          "Your code used too much memory"
        ],
        ans: 0
      },
      {
        q: "Which of these is a popular platform for Competitive Programming?",
        opts: [
          "Instagram",
          "Codeforces",
          "Spotify",
          "Netflix"
        ],
        ans: 1
      },
      {
        q: "What does TLE stand for?",
        opts: [
          "Too Little Energy",
          "Time Limit Exceeded",
          "Total Logic Error",
          "Test Level Easy"
        ],
        ans: 1
      },
      {
        q: "What is Competitive Programming most similar to?",
        opts: [
          "A brain sport like chess but with code",
          "A video game",
          "A social media platform",
          "A drawing contest"
        ],
        ans: 0
      },
      {
        q: "Why do big tech companies like Google love CP coders?",
        opts: [
          "Because they type very fast",
          "Because they can solve problems and think clearly under pressure",
          "Because they have lots of social media followers",
          "Because they know how to use Google Search"
        ],
        ans: 1
      }
    ],
    challenge: "Go to codeforces.com and create a free account. Then visit the problemset page and just READ one easy problem (rated 800). Do not worry about solving it yet — just read it and try to understand what it is asking. Write down in your own words: what is the input? What is the output? That is your first step!",
    resources: [
      {
        type: "website",
        title: "Codeforces — The Most Popular CP Platform",
        url: "https://codeforces.com/",
        source: "Codeforces"
      },
      {
        type: "website",
        title: "USACO Guide — Structured CP Learning Path",
        url: "https://usaco.guide/",
        source: "USACO"
      },
      {
        type: "video",
        title: "What is Competitive Programming? (Beginner Intro)",
        url: "https://www.youtube.com/results?search_query=what+is+competitive+programming+beginner",
        source: "YouTube"
      }
    ],
    eli5: "Imagine you and your friends play a game where someone asks a tricky question, and you all race to answer it first — but instead of shouting the answer, you have to tell a computer how to figure it out. The computer checks if you are right, and the fastest correct answer wins. That is Competitive Programming! It is like a fun puzzle race using computers.",
    codeWalkthrough: [
      "We start with #include <bits/stdc++.h> — this is a magic line that gives us access to ALL the tools C++ has. Think of it as opening a giant toolbox.",
      "using namespace std; — this lets us use shortcuts like cout and cin without writing std:: in front every time. It saves us typing!",
      "int main() { — this is where every C++ program starts running. It is like the starting line of a race. The computer begins here.",
      "int age; — we create a memory box called 'age' that can hold a whole number. Right now the box is empty.",
      "cout << \"How old are you? \"; — cout (see-out) prints text to the screen. The << arrows point toward cout, meaning 'send this text to the screen.'",
      "cin >> age; — cin (see-in) waits for you to type something. The >> arrows point toward age, meaning 'put what the user typed into the age box.'",
      "if (age < 13) { ... } — this checks a condition. If the age is less than 13, it runs the code inside the curly braces. Otherwise it skips to the else part.",
      "else { ... } — if the condition above was false (age is 13 or more), the computer runs this code instead.",
      "cout << \"Let the adventure begin!\" << endl; — prints one more message. endl means 'go to a new line' (like pressing Enter).",
      "return 0; — this tells the computer 'I am done, everything went well.' The 0 means 'no errors.' It is like saying 'The End' in a story."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int score;
    cin >> score;
    if (score = 100) {
        cout << "Perfect score!" << endl;
    }
    return 0;
}`,
      hint: "Look very carefully at the if statement. In C++, there is a big difference between = and ==. One gives a value, the other checks a value.",
      answer: "The bug is on the line 'if (score = 100)'. The single = is an assignment (it SETS score to 100), not a comparison. It should be 'if (score == 100)' with double equals, which CHECKS if score equals 100. This is one of the most common bugs in C++!"
    },
    difficulty: "beginner",
    prereqs: []
  },

  // =============================================
  // LESSON 2: Setting Up Your Coding Playground
  // =============================================
  {
    id: 2,
    title: "Setting Up Your Coding Playground",
    subtitle: "Get your tools ready — let us write and run your very first C++ program!",
    analogy: "A compiler is like Google Translate, but for computers. You write code in C++ (a language humans can read), and the compiler translates it into machine language (a language the computer understands). Without a compiler, talking to your computer would be like trying to order food in a country where nobody speaks your language!",
    points: [
      {
        t: "What is a Compiler?",
        d: "A compiler is a special program that translates your C++ code into something the computer can actually run. You write code in C++ (which looks like English mixed with math), and the compiler turns it into 1s and 0s that the computer understands. Without a compiler, your code is just fancy text — the computer cannot do anything with it."
      },
      {
        t: "Online IDEs — Code in Your Browser",
        d: "The easiest way to start coding is with an online IDE (Integrated Development Environment). An IDE is just a fancy word for a place where you write, run, and test code. Websites like ideone.com and onlinegdb.com let you code right in your web browser — no installation needed! Just open the website, pick C++ as your language, write code, and click Run."
      },
      {
        t: "Your First Program — Hello World",
        d: "Every programmer in history starts with the same program: Hello World. It is a tradition! All it does is print the words 'Hello, World!' on the screen. It might seem simple, but it proves that your setup works and you can talk to the computer. You have officially written your first program — celebrate!"
      },
      {
        t: "Understanding the Structure of a C++ Program",
        d: "Every C++ program has the same basic structure: first, #include lines at the top (these import tools you need), then 'using namespace std;' (a shortcut so you type less), and finally 'int main() { ... }' where your actual code goes. Think of it like a letter: the #include is the address, namespace is the greeting, and main() is the body of the letter."
      },
      {
        t: "Installing g++ on Your Computer (Optional)",
        d: "If you want to code offline (without internet), you can install the g++ compiler on your computer. On Windows, install MinGW. On Mac, install Xcode Command Line Tools by typing 'xcode-select --install' in Terminal. On Linux, type 'sudo apt install g++' in the terminal. But do not worry about this now — online IDEs work perfectly fine!"
      },
      {
        t: "Compile and Run — Two Steps",
        d: "Running a C++ program on your computer is a two-step process. Step 1: Compile — you tell g++ to translate your code (g++ mycode.cpp -o mycode). Step 2: Run — you tell the computer to execute the translated program (./mycode). On online IDEs, both steps happen with one click of the Run button!"
      },
      {
        t: "What Happens When Your Code Has Errors",
        d: "If you make a mistake in your code (like forgetting a semicolon), the compiler will show you an error message. Do not panic! Error messages are your friends — they tell you exactly what went wrong and on which line. Read the error message carefully, fix the mistake, and try again. Every programmer makes errors — even experts."
      },
      {
        t: "The Magic Line: bits/stdc++.h",
        d: "In competitive programming, we always start with '#include <bits/stdc++.h>'. This one line includes EVERYTHING C++ has to offer — all math functions, all data structures, all algorithms. It is like packing every tool in the toolbox just in case. In regular software development people include only what they need, but in CP, speed matters, so we grab everything!"
      },
      {
        t: "Pro Tip: Save Your Code Files",
        d: "Always save your code with a .cpp extension (like solution.cpp or problem1.cpp). Start a folder on your computer called 'CP' and save all your practice solutions there. Over time, you will build a library of solved problems that you can look back at. It is like keeping a journal of your CP journey!"
      }
    ],
    whatIs: "Setting up your coding environment means getting the tools you need to write, compile, and run C++ programs. You can use free online editors (like ideone.com or onlinegdb.com) that work right in your browser, or install a C++ compiler (g++) on your own computer. Either way, within 5 minutes you will be ready to write and run code!",
    realWorld: "Every app on your phone, every website you visit, and every video game you play was written as code and then compiled (translated) into a program. The compiler is one of the most important inventions in computer science. Without compilers, programmers would have to write in binary (just 1s and 0s) — which would be like writing an essay using only dots and dashes!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "My name is a CP beginner!" << endl;
    cout << "I am learning C++ for competitive programming." << endl;
    cout << "1 + 1 = " << 1 + 1 << endl;
    cout << "Let us goooo!" << endl;
    return 0;
}`,
    funFact: "The very first 'Hello World' program was written in 1972 by Brian Kernighan while he was writing documentation for the B programming language (the ancestor of C). Since then, literally billions of programmers have started their journey by writing Hello World. You are now part of that incredible tradition!",
    quiz: [
      {
        q: "What does a compiler do?",
        opts: [
          "It translates your C++ code into machine language the computer understands",
          "It connects your computer to the internet",
          "It designs the user interface of your program",
          "It stores your files on the cloud"
        ],
        ans: 0
      },
      {
        q: "Which line do we always include at the top in competitive programming C++?",
        opts: [
          "#include <iostream>",
          "#include <bits/stdc++.h>",
          "#include <everything.h>",
          "#include <cp_magic.h>"
        ],
        ans: 1
      },
      {
        q: "Which of these is a free online IDE where you can write and run C++ code?",
        opts: [
          "photoshop.com",
          "ideone.com",
          "spotify.com",
          "instagram.com"
        ],
        ans: 1
      },
      {
        q: "What file extension do C++ files use?",
        opts: [
          ".py",
          ".java",
          ".cpp",
          ".html"
        ],
        ans: 2
      },
      {
        q: "What should you do when you see a compiler error message?",
        opts: [
          "Close the computer and give up",
          "Read the error message carefully, find the mistake, and fix it",
          "Delete all your code and start from scratch",
          "Ignore it and submit anyway"
        ],
        ans: 1
      }
    ],
    challenge: "Open ideone.com (or onlinegdb.com) in your browser. Select C++ as the language. Type the Hello World program from this lesson and click Run. Then modify it to also print your name and your favorite food. For example: 'My name is Alex and I love pizza!' Take a screenshot of your output — you just ran your first program!",
    resources: [
      {
        type: "website",
        title: "Ideone — Free Online IDE for 60+ Languages",
        url: "https://ideone.com/",
        source: "Ideone"
      },
      {
        type: "website",
        title: "OnlineGDB — Online Compiler with Debugger",
        url: "https://www.onlinegdb.com/",
        source: "OnlineGDB"
      },
      {
        type: "video",
        title: "How to Set Up C++ for Competitive Programming",
        url: "https://www.youtube.com/results?search_query=c%2B%2B+setup+competitive+programming+beginner",
        source: "YouTube"
      }
    ],
    eli5: "Imagine you only speak English, and your computer only speaks Robot Language. You need a translator to help you talk to each other. The compiler is that translator! You write your instructions in C++ (which is close to English), the compiler translates it to Robot Language, and then the computer can follow your instructions. Cool, right?",
    codeWalkthrough: [
      "#include <bits/stdc++.h> — this line says 'give me access to ALL the tools in C++.' It is like walking into a hardware store and saying 'I will take one of everything!'",
      "using namespace std; — this is a shortcut that lets us write 'cout' instead of 'std::cout'. It saves us from typing 'std::' in front of everything. Less typing = more time for solving problems!",
      "int main() { — every C++ program starts here. The computer looks for main() and begins running your code from this point. Think of it as the front door of your program.",
      "cout << \"Hello, World!\" << endl; — cout (pronounced see-out) sends text to the screen. The << means 'send this.' endl means 'go to the next line.' The semicolon at the end is like a period at the end of a sentence — every statement in C++ needs one!",
      "cout << \"My name is a CP beginner!\" << endl; — another line of output. You can have as many cout lines as you want. Each one prints something to the screen.",
      "cout << \"1 + 1 = \" << 1 + 1 << endl; — here is something cool: you can mix text and math! The text part \"1 + 1 = \" is printed as-is, and then 1 + 1 is calculated by the computer and printed as 2. So the output is '1 + 1 = 2'.",
      "return 0; — this tells the computer 'the program is done, and everything went fine.' The 0 means 'no errors happened.' It is like saying 'The End' at the end of a movie.",
      "The closing } — this curly brace matches the opening { after int main(). Everything between these two braces is your program. Forgetting a closing brace is a very common error!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Hello World!" << endl
    cout << "I love CP!" << endl;
    return 0;
}`,
      hint: "Every statement in C++ must end with something important. Look at the end of the first cout line very carefully.",
      answer: "The first cout line is missing a semicolon at the end! It should be: cout << \"Hello World!\" << endl; (with a semicolon after endl). In C++, every statement MUST end with a semicolon. It is the most common beginner mistake — even experienced programmers forget semicolons sometimes!"
    },
    difficulty: "beginner",
    prereqs: [1]
  },

  // =============================================
  // LESSON 3: How Online Judges and Contests Work
  // =============================================
  {
    id: 3,
    title: "How Online Judges and Contests Work",
    subtitle: "Learn the rules of the game — how to read problems, submit solutions, and get that sweet AC!",
    analogy: "An online judge is like a super-fast teacher who grades your homework instantly. You hand in your solution (submit your code), and within seconds, the teacher checks it against the answer key (test cases) and tells you your grade (verdict). Unlike a real teacher, this one never gets tired, never goes on vacation, and grades millions of papers every day!",
    points: [
      {
        t: "Reading a Problem Statement",
        d: "Every CP problem has a problem statement — a description of what you need to solve. It tells you the story (sometimes a fun one about wizards or robots), what input you will receive, what output you must produce, and any rules or limits. Read it slowly and carefully — at least twice! Many wrong answers happen because people misread the problem."
      },
      {
        t: "Understanding Input Format",
        d: "The input section tells you exactly what data your program will receive. For example, 'The first line contains an integer N' means your program should read one number first. 'The next N lines each contain two integers' means you then read N pairs of numbers. Following the input format exactly is crucial — the judge sends input in precisely this format."
      },
      {
        t: "Understanding Output Format",
        d: "The output section tells you exactly what your program should print. If it says 'Print a single integer,' you must print just one number — nothing else! No extra words, no extra spaces, no 'The answer is:' in front. The judge compares your output character by character with the expected answer. Even one extra space can cause WA (Wrong Answer)!"
      },
      {
        t: "Sample Test Cases — Your Best Friends",
        d: "Every problem comes with sample test cases — example inputs and their correct outputs. These are gifts! Before submitting, always run your code with the sample inputs and check if your output matches exactly. If your code does not pass the samples, it definitely will not pass the hidden test cases. Samples are your free preview of the test."
      },
      {
        t: "Hidden Test Cases",
        d: "Besides the samples, the judge has many hidden test cases that you cannot see. These test tricky situations: very large numbers, very small numbers, edge cases (like zero or one), and special patterns. Your code must handle ALL of them correctly to get AC. This is why testing only with samples is not enough — you must think about corner cases too."
      },
      {
        t: "Time Limit and Memory Limit",
        d: "Every problem has a time limit (usually 1-2 seconds) and a memory limit (usually 256 MB). Your program must finish within the time limit and use less memory than the memory limit. If your code is too slow, you get TLE (Time Limit Exceeded). If it uses too much memory, you get MLE (Memory Limit Exceeded). This is why writing efficient code matters!"
      },
      {
        t: "How Contests Work",
        d: "In a contest, you get several problems (usually 4-8) and a fixed time (usually 2-3 hours). Problems are roughly ordered from easiest to hardest. You earn points for each problem you solve. Most contests use penalty time — you get extra penalty minutes for wrong submissions and for the time it took to solve. So being fast AND correct matters!"
      },
      {
        t: "Common Beginner Mistakes to Avoid",
        d: "Here are mistakes that catch everyone at first: printing extra text like 'Enter a number:' (the judge does not want that), forgetting to read all the input, printing the wrong number of spaces or newlines, and not handling edge cases. The golden rule: print EXACTLY what the problem asks for and nothing more."
      }
    ],
    whatIs: "An online judge is an automated system that tests your code against predefined test cases and gives you instant feedback. You submit your source code, the judge compiles it, runs it with secret inputs, compares your output to the expected output, and returns a verdict. The whole process usually takes just a few seconds. It is like having a robot teacher that grades your work instantly!",
    realWorld: "Automated testing (just like an online judge) is used everywhere in the software industry. When engineers at Google or Netflix write code, automated test systems check their code against thousands of test cases before it goes live. This is called Continuous Integration/Continuous Deployment (CI/CD). The same concept powers CP judges — it is real-world software engineering!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // A typical CP problem:
    // Read two numbers, print their sum.
    // Input: two integers on one line
    // Output: one integer (their sum)

    int a, b;
    cin >> a >> b;
    cout << a + b << endl;

    return 0;
}`,
    funFact: "Codeforces has over 600,000 registered users from nearly every country in the world, and it has hosted over 2,000 contests since it launched in 2010. The platform runs hundreds of test cases for each submission — sometimes over 100 tests for a single problem! The servers can handle thousands of submissions per minute during contests. That is some serious computing power!",
    quiz: [
      {
        q: "What should you always do before submitting your code?",
        opts: [
          "Test it with the sample test cases",
          "Make the code look pretty with colors",
          "Add comments on every line",
          "Give your code a creative name"
        ],
        ans: 0
      },
      {
        q: "Your code gives the correct answer but prints 'The answer is: 42' instead of just '42'. What verdict will you get?",
        opts: [
          "AC (Accepted)",
          "WA (Wrong Answer)",
          "TLE (Time Limit Exceeded)",
          "RE (Runtime Error)"
        ],
        ans: 1
      },
      {
        q: "What does RE (Runtime Error) mean?",
        opts: [
          "Your code is too slow",
          "Your code crashed while running",
          "Your answer is wrong",
          "Your code is perfect"
        ],
        ans: 1
      },
      {
        q: "In most contests, how are problems usually ordered?",
        opts: [
          "Randomly",
          "From easiest to hardest",
          "From hardest to easiest",
          "Alphabetically by topic"
        ],
        ans: 1
      },
      {
        q: "Why does the judge have hidden test cases you cannot see?",
        opts: [
          "To make life unfair",
          "To test tricky situations, edge cases, and large inputs your code must handle",
          "Because the judge is broken",
          "To save disk space"
        ],
        ans: 1
      }
    ],
    challenge: "Go to Codeforces and try to solve your first problem! Go to codeforces.com/problemset and filter by difficulty 800 (the easiest). Pick a problem that asks you to add two numbers or do something simple. Read the problem statement carefully, check the sample input/output, write your code, test it with the samples, and submit it. Getting your first AC is one of the best feelings ever!",
    resources: [
      {
        type: "website",
        title: "Codeforces Problemset — Filter by Difficulty",
        url: "https://codeforces.com/problemset",
        source: "Codeforces"
      },
      {
        type: "website",
        title: "USACO Guide — Getting Started with CP",
        url: "https://usaco.guide/general/intro-cp",
        source: "USACO"
      },
      {
        type: "video",
        title: "How to Read CP Problem Statements (Beginner Tutorial)",
        url: "https://www.youtube.com/results?search_query=how+to+read+competitive+programming+problems+beginner",
        source: "YouTube"
      }
    ],
    eli5: "Imagine you are taking a test, and the teacher has an answer key. You write your answers, hand in your paper, and the teacher checks every answer against the key. If all your answers match perfectly, you get a gold star (AC). If any answer is wrong, you get 'try again' (WA). If you take too long writing, the teacher says 'time is up!' (TLE). That is exactly how an online judge works!",
    codeWalkthrough: [
      "#include <bits/stdc++.h> — our trusty toolbox line that gives us all of C++. We use this in every CP solution.",
      "using namespace std; — our shortcut so we can write cout and cin without the std:: prefix.",
      "int main() { — the starting point of our program. The judge will run everything inside this function.",
      "int a, b; — we create two memory boxes named 'a' and 'b', both capable of holding whole numbers (integers). We are declaring two variables at once by separating them with a comma.",
      "cin >> a >> b; — we read two numbers from the input. The judge will send us the input, and this line captures it. The >> operator reads one value at a time, so this reads a first, then b second.",
      "cout << a + b << endl; — we calculate a + b and print the result, followed by a new line. Notice we print ONLY the answer — no extra text, no 'The sum is:', just the number. This is crucial for getting AC!",
      "return 0; — we tell the system our program finished successfully. Always include this at the end of main()."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << "The sum is: " << a + b << endl;
    return 0;
}`,
      hint: "The code calculates the correct sum, but think about what the online judge expects in the output. Does the problem say to print extra words?",
      answer: "The bug is printing extra text 'The sum is: ' before the answer. Online judges compare your output exactly with the expected output. If the expected output is just '7' but you print 'The sum is: 7', the judge sees different strings and gives you WA (Wrong Answer). Remove the extra text and just print a + b."
    },
    difficulty: "beginner",
    prereqs: [1, 2]
  },

  // =============================================
  // LESSON 4: Variables — Your Code's Memory Boxes
  // =============================================
  {
    id: 4,
    title: "Variables — Your Code\u2019s Memory Boxes",
    subtitle: "Learn how your program remembers things — meet the labeled jars of coding!",
    analogy: "Variables are like labeled jars in a kitchen. Imagine you have jars labeled 'Sugar', 'Flour', and 'Salt'. Each jar holds something specific, and the label tells you what is inside. In C++, a variable is a labeled jar in the computer\u2019s memory — you give it a name (the label), a type (what kind of stuff it holds), and you can put values in it, look at what is inside, or replace the contents anytime!",
    points: [
      {
        t: "What is a Variable?",
        d: "A variable is a named box in the computer\u2019s memory that holds a value. You give it a name (like 'age' or 'score'), and the computer sets aside a little chunk of memory for it. You can store a value in it, read the value, or change it to a new value. Variables are how your program remembers things — without them, your code would forget everything instantly!"
      },
      {
        t: "int — Whole Numbers",
        d: "The 'int' type stores whole numbers (no decimal points). Examples: 0, 1, 42, -7, 1000000. An int can hold numbers from about -2 billion to +2 billion. Use int for counting things: number of students, number of problems solved, your score, ages, quantities. In CP, int is the type you will use most often!"
      },
      {
        t: "long long — Really Big Numbers",
        d: "Sometimes int is not big enough! If a problem says the answer can be up to 10^18 (a billion billion), you need 'long long'. It can hold numbers up to about 9.2 quintillion (9,200,000,000,000,000,000). In CP, a good rule is: if numbers might exceed 2 billion, use long long. Writing 'long long' is a bit long, but your code will handle huge numbers safely."
      },
      {
        t: "double — Decimal Numbers",
        d: "The 'double' type stores numbers with decimal points, like 3.14, 99.99, or -0.5. Use double when you need precision — for example, calculating averages, distances, or anything with fractions. Be careful: doubles are not 100% precise due to how computers store decimals, so avoid comparing doubles with == in CP. Use a tiny tolerance instead."
      },
      {
        t: "char — Single Characters",
        d: "The 'char' type stores a single character — one letter, one digit, or one symbol. You write char values in single quotes: 'A', 'z', '7', '#'. Each char is actually stored as a number (its ASCII code). For example, 'A' is 65 and 'a' is 97. This is useful for problems involving letters, like checking if something is uppercase or counting vowels."
      },
      {
        t: "string — Text",
        d: "A 'string' stores text — a sequence of characters. You write strings in double quotes: \"Hello\", \"competitive programming\", \"abc123\". Strings can be empty (\"\"), have one character (\"A\"), or be very long. You can access individual characters with square brackets: if s = \"Hello\", then s[0] is 'H' and s[1] is 'e'. Strings are essential for text-based CP problems!"
      },
      {
        t: "bool — True or False",
        d: "The 'bool' type stores just two values: true or false (yes or no). It is named after George Boole, a mathematician who invented this idea. Use bool for conditions: is the number even? Is the student passing? Has the game ended? In C++, true is stored as 1 and false as 0."
      },
      {
        t: "Declaring and Initializing Variables",
        d: "Declaring a variable means creating it: 'int age;' creates a box called age. Initializing means giving it a starting value: 'int age = 15;' creates the box AND puts 15 in it. Always initialize your variables! An uninitialized variable contains garbage — a random leftover value from memory — and using it is a common source of bugs."
      },
      {
        t: "Naming Rules and Good Habits",
        d: "Variable names must start with a letter or underscore, and can contain letters, digits, and underscores. They cannot have spaces or special characters. Names are case-sensitive — 'Score' and 'score' are different variables. Use descriptive names: 'totalScore' is better than 'x'. In CP, short names like n, m, a, b are fine because the context is clear and you need to type fast."
      }
    ],
    whatIs: "A variable is a named location in the computer\u2019s memory that stores a value. It has three key parts: a type (what kind of data it holds — numbers, text, true/false), a name (how you refer to it in code), and a value (the actual data stored). Variables let your program remember information, perform calculations, and make decisions based on stored values.",
    realWorld: "Variables are everywhere in real life, even outside programming! A scoreboard in a game has variables: homeScore and awayScore. A thermostat has a variable: currentTemperature. Your phone battery indicator is a variable. A shopping cart total is a variable that changes every time you add an item. Any piece of information that can change is essentially a variable!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Integer — whole numbers
    int age = 12;
    int score = 100;

    // Long long — really big numbers
    long long bigNumber = 1000000000000LL;

    // Double — decimal numbers
    double pi = 3.14159;
    double average = 87.5;

    // Char — single character
    char grade = 'A';
    char initial = 'J';

    // String — text
    string name = "Alex";
    string greeting = "Hello, Competitive Programmer!";

    // Bool — true or false
    bool isStudent = true;
    bool hasPassed = false;

    // Print them all out!
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Grade: " << grade << endl;
    cout << "Score: " << score << endl;
    cout << "Big Number: " << bigNumber << endl;
    cout << "Pi: " << pi << endl;
    cout << "Is Student: " << isStudent << endl;

    // You can change variables!
    score = score + 50;
    cout << "New Score: " << score << endl;

    return 0;
}`,
    funFact: "The name 'boolean' (bool) comes from George Boole, an English mathematician from the 1800s who had almost no formal education! He taught himself math and went on to create Boolean algebra — the math of true and false — which became the foundation of ALL modern computers. Every phone, laptop, and game console works because of ideas from a self-taught man from 200 years ago!",
    quiz: [
      {
        q: "Which type should you use to store the number 5000000000 (5 billion)?",
        opts: [
          "int",
          "long long",
          "double",
          "char"
        ],
        ans: 1
      },
      {
        q: "What value does an uninitialized variable contain?",
        opts: [
          "Zero",
          "Garbage — a random leftover value from memory",
          "The word 'empty'",
          "An error message"
        ],
        ans: 1
      },
      {
        q: "Which of these is a valid variable name in C++?",
        opts: [
          "my score",
          "2ndPlace",
          "total_score",
          "my-name"
        ],
        ans: 2
      },
      {
        q: "What type stores true or false values?",
        opts: [
          "int",
          "string",
          "char",
          "bool"
        ],
        ans: 3
      },
      {
        q: "What is the difference between 'A' and \"A\" in C++?",
        opts: [
          "No difference, they are the same thing",
          "'A' is a char (single character), \"A\" is a string (text)",
          "'A' is an error",
          "\"A\" is a number"
        ],
        ans: 1
      }
    ],
    challenge: "Write a program that creates variables to describe yourself: your name (string), your age (int), your height in meters (double), the first letter of your name (char), and whether you like pizza (bool). Print all of them in a nice format. Then change your age to your age next year and print the updated age. Try it on ideone.com!",
    resources: [
      {
        type: "website",
        title: "C++ Variables — CP-Algorithms Reference",
        url: "https://cp-algorithms.com/",
        source: "CP-Algorithms"
      },
      {
        type: "website",
        title: "USACO Guide — Data Types in C++",
        url: "https://usaco.guide/general/data-types",
        source: "USACO"
      },
      {
        type: "video",
        title: "C++ Variables and Data Types Explained Simply",
        url: "https://www.youtube.com/results?search_query=c%2B%2B+variables+data+types+beginner+tutorial",
        source: "YouTube"
      }
    ],
    eli5: "Imagine you have a bunch of labeled boxes in your room. One box is labeled 'Toys' and it holds your toys. Another is labeled 'Books' and holds books. A small one labeled 'Lucky Coin' holds just one coin. Variables are exactly like those boxes — each box has a name (label), a type (what it can hold), and stuff inside (the value). You can open a box, look inside, or swap the stuff out!",
    codeWalkthrough: [
      "#include <bits/stdc++.h> and using namespace std; — our standard CP setup. Gives us all the tools we need.",
      "int age = 12; — we create a variable called 'age' of type int (whole number) and store the value 12 in it. The = sign here means 'put this value inside the box.'",
      "int score = 100; — another integer variable. We can have as many variables as we need.",
      "long long bigNumber = 1000000000000LL; — the LL at the end tells the compiler this is a long long number, not an int. Without LL, the compiler might get confused by such a big number.",
      "double pi = 3.14159; — a decimal number. Double gives us about 15 digits of precision, which is enough for most CP problems.",
      "char grade = 'A'; — a single character in single quotes. Remember: single quotes for char, double quotes for string!",
      "string name = \"Alex\"; — text goes in double quotes. A string can hold zero or more characters.",
      "bool isStudent = true; — a true/false value. Note: no quotes around true — it is a keyword, not text.",
      "cout << \"Name: \" << name << endl; — we print a label (\"Name: \") followed by the value stored in the name variable. The << operator chains multiple things together.",
      "score = score + 50; — this takes the current value of score (100), adds 50, and stores the result (150) back into score. The old value is replaced. You can also write this as 'score += 50;' as a shortcut."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a = 1000000;
    int b = 1000000;
    int result = a * b;
    cout << result << endl;
    return 0;
}`,
      hint: "A million times a million is one trillion. What is the maximum value an int can hold? Is one trillion within that range?",
      answer: "The bug is integer overflow! The variable 'result' is an int, which can only hold values up to about 2 billion. But a * b = 1,000,000 * 1,000,000 = 1,000,000,000,000 (one trillion), which is way beyond what int can store. The fix is to use 'long long result = (long long)a * b;' or declare a and b as long long from the start. Integer overflow is one of the trickiest bugs in CP!"
    },
    difficulty: "beginner",
    prereqs: [2]
  },

  // =============================================
  // LESSON 5: Input and Output — Talking to Your Computer
  // =============================================
  {
    id: 5,
    title: "Input and Output — Talking to Your Computer",
    subtitle: "Master cin and cout — the walkie-talkies between you and your program!",
    analogy: "cin and cout are like walkie-talkies. cout is when the computer talks to you — it sends a message to your screen. cin is when you talk to the computer — you type something, and the computer hears it. In competitive programming, the online judge is on the other end of the walkie-talkie: it sends your program input through cin, and listens for your answer through cout!",
    points: [
      {
        t: "cout — Your Program Speaks",
        d: "cout (pronounced 'see-out') is how your program prints things to the screen. You use the << operator (called the insertion operator) to send data to cout. You can print text in double quotes, numbers, variables, or even calculations. Example: cout << 42 << endl; prints the number 42. Think of << as arrows pointing toward cout — you are pushing data out to the screen."
      },
      {
        t: "cin — Your Program Listens",
        d: "cin (pronounced 'see-in') is how your program reads input. You use the >> operator (called the extraction operator) to pull data from cin into a variable. Example: cin >> n; reads a value and stores it in n. Think of >> as arrows pointing toward your variable — you are pulling data from the keyboard (or from the judge) into your box."
      },
      {
        t: "Reading Multiple Values",
        d: "You can read multiple values in one line: 'cin >> a >> b >> c;' reads three values one after another. The values can be separated by spaces or newlines — cin does not care which. So if the input is '3 5 7' or if 3, 5, and 7 are on separate lines, cin >> a >> b >> c reads all three correctly."
      },
      {
        t: "Printing Multiple Things",
        d: "You can chain multiple items in one cout statement: 'cout << \"Score: \" << score << \" out of \" << total << endl;' prints them all in order. You can mix text (in quotes), variables, and expressions. The items get printed left to right with no automatic spaces between them — you must include spaces yourself inside the text."
      },
      {
        t: "endl vs the Newline Character",
        d: "Both endl and the newline character '\\n' move to a new line. However, endl also 'flushes the buffer' (forces output to appear immediately), which makes it slightly slower. In CP, when speed matters, use '\\n' instead of endl. For most beginner problems either works fine. Example: cout << answer << '\\n'; is faster than cout << answer << endl;"
      },
      {
        t: "Fast I/O — The Speed Trick",
        d: "In CP, slow input/output can cause TLE on problems with lots of data. The fix is two magic lines at the start of main(): 'ios_base::sync_with_stdio(false);' and 'cin.tie(NULL);' — these make cin and cout much faster. Add them to EVERY CP solution! After adding these, use '\\n' instead of endl for best performance."
      },
      {
        t: "Reading Until End of Input",
        d: "Some problems do not tell you how many values to read — they just give you data until the input ends. You can handle this with 'while (cin >> x)' which keeps reading values into x until there is no more input. This is a common pattern in CP for problems that say 'read until end of file' or 'process all inputs.'"
      },
      {
        t: "Reading Full Lines with getline",
        d: "cin >> stops reading at spaces, so 'cin >> name;' for input 'John Doe' only reads 'John'. To read an entire line including spaces, use: getline(cin, name); This reads everything until the newline. Warning: if you mix cin >> and getline(), you may need to add cin.ignore(); before getline to skip the leftover newline character."
      },
      {
        t: "Formatting Output — Fixed Decimal Places",
        d: "Some problems ask you to print a decimal number with exactly K digits after the decimal point. Use: cout << fixed << setprecision(K) << value << endl; For example, 'cout << fixed << setprecision(2) << 3.14159;' prints '3.14'. The 'fixed' part prevents scientific notation, and setprecision(2) means 2 decimal places."
      }
    ],
    whatIs: "Input and Output (I/O) is how your program communicates with the outside world. Input means receiving data (from the user, a file, or an online judge), and output means sending results back. In C++, we use cin for input and cout for output. In competitive programming, getting I/O right is absolutely essential — your code must read the exact input format and produce the exact output format that the problem specifies.",
    realWorld: "Every program you use involves Input and Output. When you type in a search box (input) and see results (output) — that is I/O. When you tap a key on your phone (input) and see a letter appear (output) — that is I/O. When you scan a barcode at a store (input) and the price shows up (output) — that is I/O. Programming is fundamentally about taking input, processing it, and producing output!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Fast I/O — always include this in CP!
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Reading and printing integers
    int a, b;
    cin >> a >> b;
    cout << a + b << "\\n";

    // Reading a string
    string name;
    cin >> name;
    cout << "Hello, " << name << "\\n";

    // Printing with fixed decimal places
    double pi = 3.14159265;
    cout << fixed << setprecision(4) << pi << "\\n";
    // Output: 3.1416

    // Reading multiple values in a loop
    int n;
    cin >> n;
    int sum = 0;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        sum += x;
    }
    cout << "Sum: " << sum << "\\n";

    return 0;
}`,
    funFact: "The two magic lines for fast I/O (ios_base::sync_with_stdio(false) and cin.tie(NULL)) can make your program\u2019s input/output up to 10 times faster! This speed boost has been the difference between TLE and AC for countless competitive programmers. Some competitive programmers even type these lines so often they can do it in under 2 seconds from muscle memory. Many top coders have these in a pre-saved template that they copy before every contest!",
    quiz: [
      {
        q: "What does 'cin >> x;' do?",
        opts: [
          "Prints the value of x to the screen",
          "Reads a value from input and stores it in x",
          "Deletes the variable x",
          "Creates a new variable called x"
        ],
        ans: 1
      },
      {
        q: "Why do we use ios_base::sync_with_stdio(false) and cin.tie(NULL) in CP?",
        opts: [
          "To make the code look professional",
          "To make input and output faster",
          "To change the language to English",
          "To enable color output"
        ],
        ans: 1
      },
      {
        q: "What is the difference between endl and '\\n'?",
        opts: [
          "There is no difference at all",
          "endl is faster than \\n",
          "Both go to a new line, but endl also flushes the buffer (slightly slower)",
          "\\n only works on Windows"
        ],
        ans: 2
      },
      {
        q: "How do you read an entire line including spaces?",
        opts: [
          "cin >> line;",
          "getline(cin, line);",
          "read(line);",
          "cin.readLine(line);"
        ],
        ans: 1
      },
      {
        q: "What does 'cout << fixed << setprecision(3) << 7.12345;' print?",
        opts: [
          "7.12345",
          "7.12",
          "7.123",
          "7.1"
        ],
        ans: 2
      }
    ],
    challenge: "Solve this classic CP problem: Read an integer N, then read N numbers. Print the sum and the average (with exactly 2 decimal places) of those numbers. Use fast I/O. Test it with this input: first line is 5, second line is 10 20 30 40 50. The sum should be 150 and the average should be 30.00. Try it on ideone.com!",
    resources: [
      {
        type: "website",
        title: "Codeforces — Practice I/O Problems (Rating 800)",
        url: "https://codeforces.com/problemset?order=BY_RATING_ASC&tags=implementation",
        source: "Codeforces"
      },
      {
        type: "website",
        title: "CP-Algorithms — Competitive Programming Techniques",
        url: "https://cp-algorithms.com/",
        source: "CP-Algorithms"
      },
      {
        type: "video",
        title: "C++ Input/Output for Competitive Programming",
        url: "https://www.youtube.com/results?search_query=c%2B%2B+input+output+competitive+programming+tutorial",
        source: "YouTube"
      }
    ],
    eli5: "Imagine you and a friend are talking through walkie-talkies. When your friend presses the button and talks, you hear them through your walkie-talkie — that is like cout (the computer sending a message to you). When you press the button and talk back, your friend hears you — that is like cin (you sending information to the computer). In CP, the online judge is your walkie-talkie friend: it sends you the problem input, and it listens for your answer!",
    codeWalkthrough: [
      "#include <bits/stdc++.h> and using namespace std; — our standard CP starter lines. These give us everything we need.",
      "ios_base::sync_with_stdio(false); — this disconnects C++ streams from C streams, making cin and cout much faster. Always add this in CP!",
      "cin.tie(NULL); — this unties cin from cout, meaning cout does not flush before every cin read. Another speed boost for CP.",
      "int a, b; — we declare two integer variables to hold our input values.",
      "cin >> a >> b; — we read two numbers from input. If the judge sends '3 5', then a becomes 3 and b becomes 5. The >> reads values separated by any whitespace (spaces, tabs, newlines).",
      "cout << a + b << \"\\n\"; — we print the sum and then a newline. We use \\n (newline character) instead of endl because it is faster. The expression a + b is calculated first, then the result is printed.",
      "string name; cin >> name; — we declare a string variable and read one word of input into it. Remember, cin >> stops at spaces.",
      "cout << fixed << setprecision(4) << pi << \"\\n\"; — 'fixed' means do not use scientific notation. setprecision(4) means show exactly 4 digits after the decimal point. So 3.14159265 becomes 3.1416 (it rounds!).",
      "int n; cin >> n; — a very common CP pattern: first read how many values are coming, then read that many values in a loop.",
      "for (int i = 0; i < n; i++) { int x; cin >> x; sum += x; } — we loop n times. Each time, we read a number and add it to our running total. The 'sum += x' is shorthand for 'sum = sum + x'."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    string fullName;
    getline(cin, fullName);
    cout << "There are " << n << " students." << "\\n";
    cout << "Teacher: " << fullName << "\\n";
    return 0;
}`,
      hint: "When you use cin >> n, it reads the number but leaves the newline character in the input buffer. What happens when getline runs next and finds that leftover newline?",
      answer: "The bug is a classic cin/getline mixing issue! After 'cin >> n;' reads the number, the newline character (from pressing Enter) is still in the input buffer. Then 'getline(cin, fullName);' immediately reads that leftover newline and thinks it got an empty line. The fix is to add 'cin.ignore();' between cin >> n and getline(cin, fullName) to skip that leftover newline character."
    },
    difficulty: "beginner",
    prereqs: [4]
  },
  // =============================================
  // LESSON 6: Math Operations
  // =============================================
  {
    id: 6,
    title: "Math Operations — Your Code Calculator",
    subtitle: "Learn how to add, subtract, multiply, divide, and find remainders — the building blocks of every CP solution!",
    analogy: "Math operators in code are like a super-powered calculator that you program yourself. A regular calculator waits for you to press buttons, but YOUR calculator can do millions of calculations in one second — all by itself! Imagine telling a robot: 'Add up every number from 1 to a million.' A human would need weeks. Your code does it in a blink.",
    points: [
      {
        t: "The Big Five Operators",
        d: "C++ gives you five math operators: + (add), - (subtract), * (multiply), / (divide), and % (modulo/remainder). These are the same symbols you see on a calculator, except % which is brand new! You will use these in almost EVERY competitive programming problem, so knowing them well is super important."
      },
      {
        t: "Addition and Subtraction — Easy Peasy",
        d: "The + and - operators work exactly like you learned in math class. 3 + 5 gives 8. 10 - 4 gives 6. You can chain them: 1 + 2 + 3 + 4 equals 10. You can use them with variables too: if a = 5 and b = 3, then a + b is 8 and a - b is 2. Nothing surprising here!"
      },
      {
        t: "Multiplication — The Star Operator",
        d: "In code, we use * for multiplication (not × like in math class). So 4 * 3 gives 12. Why a star? Because × looks too much like the letter x, and we use x as a variable name all the time! This is one of those things that confuses beginners, but you will get used to it fast."
      },
      {
        t: "Integer Division — The Sneaky One",
        d: "Here is the BIGGEST trap for beginners: when you divide two integers (whole numbers), C++ throws away the decimal part! So 5 / 2 gives 2, NOT 2.5. It is like asking 'how many whole times does 2 fit into 5?' — the answer is 2 times. The leftover just vanishes. This catches SO many people in CP contests!"
      },
      {
        t: "Real Division — Getting Decimals",
        d: "If you WANT decimal results, at least one number must be a double (decimal type). So 5.0 / 2 gives 2.5, and 5 / 2.0 also gives 2.5. You can also cast: (double)5 / 2 gives 2.5. In CP, most problems use integer division, but when they ask for decimal output, remember this trick!"
      },
      {
        t: "Modulo % — The Remainder Superstar",
        d: "The % operator gives you the REMAINDER after division. 7 % 3 = 1 (because 7 ÷ 3 = 2 remainder 1). 10 % 5 = 0 (divides evenly, no remainder). This is SUPER important in CP! You use it to check if a number is even (n % 2 == 0), to keep numbers in a range, and tons of problems say 'print the answer modulo 1000000007'. You will see % everywhere!"
      },
      {
        t: "Order of Operations — PEMDAS",
        d: "Just like in math class, C++ follows order of operations: first Parentheses, then Multiplication/Division/Modulo (left to right), then Addition/Subtraction (left to right). So 2 + 3 * 4 = 14 (not 20). If you want 2 + 3 first, use parentheses: (2 + 3) * 4 = 20. When in doubt, always add parentheses — they make your code clearer AND safer!"
      },
      {
        t: "Shorthand Operators — Writing Less",
        d: "C++ has shortcuts: a += 5 means a = a + 5. Similarly a -= 3, a *= 2, a /= 4, a %= 7. There is also a++ (add 1) and a-- (subtract 1). These save typing and are used everywhere in CP. When you see sum += x in a loop, it means 'keep adding x to the running total.'"
      }
    ],
    whatIs: "Math operations are instructions that tell the computer to calculate things using numbers. The five main operators (+, -, *, /, %) let you do addition, subtraction, multiplication, division, and find remainders. They are the foundation of almost every CP problem you will ever solve.",
    realWorld: "Math operations are everywhere! Games use them to calculate damage and scores. GPS apps use them to find the shortest route. Banking apps use them for interest calculations. In CP, you might calculate the sum of an array, find the average, check if numbers are even or odd, or compute answers modulo a large prime.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a = 17, b = 5;

    cout << a + b << "\\n";   // 22
    cout << a - b << "\\n";   // 12
    cout << a * b << "\\n";   // 85
    cout << a / b << "\\n";   // 3 (integer division!)
    cout << a % b << "\\n";   // 2 (remainder)

    // Real division with decimals
    double result = (double)a / b;
    cout << fixed << setprecision(2) << result << "\\n"; // 3.40

    // Check if a number is even or odd
    int n;
    cin >> n;
    if (n % 2 == 0) {
        cout << "Even\\n";
    } else {
        cout << "Odd\\n";
    }

    // Sum of numbers using shorthand
    int sum = 0;
    int count;
    cin >> count;
    for (int i = 0; i < count; i++) {
        int x;
        cin >> x;
        sum += x;  // same as sum = sum + x
    }
    cout << "Sum = " << sum << "\\n";

    return 0;
}`,
    funFact: "The modulo operator % is so important in competitive programming that there is a legendary number: 1000000007 (10^9 + 7). It is a prime number, and hundreds of CP problems ask you to print your answer modulo this number. Why? Because answers can get astronomically huge, and taking modulo keeps them manageable. CP contestants call it 'MOD' and have it memorized!",
    quiz: [
      {
        q: "What is the result of 7 / 2 in C++ when both numbers are integers?",
        opts: ["3.5", "3", "4", "3.0"],
        ans: 1
      },
      {
        q: "What does 10 % 3 give you?",
        opts: ["3", "3.33", "1", "0"],
        ans: 2
      },
      {
        q: "What is the result of 2 + 3 * 4 in C++?",
        opts: ["20", "14", "24", "9"],
        ans: 1
      },
      {
        q: "Which shorthand means 'add 5 to variable a'?",
        opts: ["a =+ 5", "a += 5", "a + 5", "a << 5"],
        ans: 1
      }
    ],
    challenge: "Write a program that reads two integers a and b, then prints five lines: a+b, a-b, a*b, a/b (integer division), and a%b. Then try it with a=17, b=5 and verify you get 22, 12, 85, 3, 2. Bonus: also print the result of (double)a/b with 2 decimal places.",
    resources: [
      {
        type: "practice",
        title: "Codeforces — Watermelon (uses modulo!)",
        url: "https://codeforces.com/problemset/problem/4/A",
        source: "Codeforces"
      },
      {
        type: "video",
        title: "C++ Arithmetic Operators Explained",
        url: "https://www.youtube.com/watch?v=_r5i5ZtUpUM",
        source: "YouTube"
      },
      {
        type: "guide",
        title: "USACO Guide — Basic Math Operations",
        url: "https://usaco.guide/general/input-output",
        source: "USACO Guide"
      }
    ],
    eli5: "Imagine you have a bag of 7 cookies and you want to share them equally among 3 friends. Division (7/3 = 2) tells you each friend gets 2 cookies. Modulo (7%3 = 1) tells you there is 1 cookie left over! That is literally what / and % do — split things up and tell you the leftover.",
    codeWalkthrough: [
      "int a = 17, b = 5; — we create two variables and give them values. We picked 17 and 5 because they show interesting results for all operators.",
      "cout << a + b; — prints 22. Addition works exactly like math class. 17 + 5 = 22.",
      "cout << a - b; — prints 12. Subtraction is straightforward. 17 - 5 = 12.",
      "cout << a * b; — prints 85. The star * means multiply. 17 × 5 = 85.",
      "cout << a / b; — prints 3, NOT 3.4! This is integer division. 17 ÷ 5 = 3 with remainder 2. C++ only keeps the 3 and throws away the .4 part.",
      "cout << a % b; — prints 2. This is the remainder. 17 ÷ 5 = 3 remainder 2. The % operator gives us that remainder.",
      "double result = (double)a / b; — the (double) forces a to be treated as a decimal number. Now it is 17.0 / 5, which gives 3.4 instead of 3.",
      "cout << fixed << setprecision(2) << result; — prints 3.40 with exactly 2 decimal places.",
      "if (n % 2 == 0) — this checks if n is even! If you divide n by 2 and the remainder is 0, the number is even. This is one of the most common uses of modulo.",
      "sum += x; — this is shorthand for sum = sum + x. Each time through the loop, we add the new number to our running total."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a = 5, b = 2;
    double average = a + b / 2;
    cout << "Average = " << average << "\\n";
    return 0;
}`,
      hint: "Think about order of operations AND integer division. What happens to b/2 before it gets added to a?",
      answer: "There are TWO bugs! First, b/2 is integer division, so 2/2 = 1 (correct here, but risky). Second, due to order of operations, b/2 happens BEFORE adding a, so you get 5 + 1 = 6, not the average of a and b. The fix is: double average = (double)(a + b) / 2; — this adds first, then divides, and the cast ensures decimal division. Result: 3.5."
    },
    difficulty: "beginner",
    prereqs: [4]
  },
  // =============================================
  // LESSON 7: Data Types Deep Dive
  // =============================================
  {
    id: 7,
    title: "Data Types Deep Dive — Choosing the Right Box",
    subtitle: "Learn why picking the right data type matters — and how overflow can silently destroy your CP solutions!",
    analogy: "Data types are like different-sized boxes. An 'int' is a medium box that holds numbers up to about 2 billion. A 'long long' is a giant crate that holds numbers up to 9 quintillion. A 'double' is a special box that can hold numbers with decimal points. If you try to stuff a giant number into a medium box, it OVERFLOWS — like trying to pour a swimming pool into a teacup. The water spills and you get garbage!",
    points: [
      {
        t: "int — Your Everyday Number Box",
        d: "An 'int' stores whole numbers from about -2 billion to +2 billion (exactly -2,147,483,648 to 2,147,483,647). That is roughly ±2 × 10^9. For most CP problems, int is enough. It uses 4 bytes (32 bits) of memory. Think of it as your go-to type — use int unless you have a reason not to!"
      },
      {
        t: "long long — The Giant Number Crate",
        d: "A 'long long' stores whole numbers up to about ±9.2 × 10^18 (that is 9 quintillion — a number with 18 zeros!). It uses 8 bytes (64 bits). In CP, MANY problems need long long because they multiply big numbers or add lots of things. Rule of thumb: if a problem says n can be up to 10^9, and you multiply two of them, the result can be 10^18 — you NEED long long!"
      },
      {
        t: "Overflow — The Silent Killer",
        d: "Overflow happens when a number gets too big for its type. If an int holds 2,147,483,647 and you add 1, it wraps around to -2,147,483,648! The program does NOT crash or warn you — it just gives wrong answers silently. This is the #1 sneaky bug in CP. You submit, get Wrong Answer, and spend an hour debugging when the fix is just changing int to long long!"
      },
      {
        t: "double — The Decimal Box",
        d: "A 'double' stores decimal (floating-point) numbers like 3.14159 or -0.001. It can hold very large and very small numbers, but it is not perfectly precise — 0.1 + 0.2 might give 0.30000000000004 instead of exactly 0.3! In CP, use double when the problem specifically asks for decimal output. Otherwise, stick to integers."
      },
      {
        t: "Type Casting — Changing Boxes",
        d: "You can convert between types using casting. (int)3.7 gives 3 (chops off the decimal, does NOT round). (double)5 / 2 gives 2.5 (forces decimal division). (long long)a * b does the multiplication with big numbers. Casting is your tool for telling C++: 'Hey, treat this number differently for a moment!'"
      },
      {
        t: "When to Use What — The CP Cheat Sheet",
        d: "Use 'int' for numbers up to about 2 billion. Use 'long long' when: the problem has numbers > 10^9, or you multiply/add numbers that could exceed 2 billion, or the problem says 'print answer modulo 10^9+7' (intermediate values might be huge). Use 'double' only when the problem asks for decimal output."
      },
      {
        t: "char and string — Text Types",
        d: "A 'char' holds a single character like 'A' or '7'. A 'string' holds a sequence of characters like 'hello'. Characters have numeric values (ASCII): 'A' is 65, 'a' is 97, '0' is 48. This is useful in CP — you can do math with characters! 'a' + 1 gives 'b'. We will use these more in later lessons."
      },
      {
        t: "bool — True or False",
        d: "A 'bool' holds either true or false. It uses just 1 byte. You will use bools for flags: bool found = false; then later found = true; when you discover something in your search. In C++, true is treated as 1 and false as 0, so you can even do math with them!"
      }
    ],
    whatIs: "Data types tell C++ what kind of value a variable holds and how much memory to reserve. Choosing the right type is crucial in CP — too small and you get overflow bugs, too big and you waste memory. The main types are int, long long, double, char, string, and bool.",
    realWorld: "Data types matter everywhere in computing. Banks use precise types for money (you do not want rounding errors with someone's salary!). Video games use different types for health (int), position (double), and alive/dead (bool). In CP, the wrong data type is the difference between Accepted and Wrong Answer.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // int: up to ~2 billion
    int a = 1000000000;  // 1 billion — fits in int
    // int overflow example:
    // int bad = a * 3;  // OVERFLOW! 3 billion > int max

    // long long: up to ~9.2 * 10^18
    long long big = (long long)a * 3;  // Cast BEFORE multiply!
    cout << "big = " << big << "\\n";   // 3000000000

    // double: decimal numbers
    double pi = 3.14159265358979;
    cout << fixed << setprecision(6) << pi << "\\n"; // 3.141593

    // Integer division vs real division
    int x = 5, y = 2;
    cout << x / y << "\\n";           // 2 (integer division)
    cout << (double)x / y << "\\n";   // 2.5 (real division)

    // Type casting: double to int truncates
    double d = 3.99;
    int truncated = (int)d;
    cout << truncated << "\\n";  // 3 (NOT 4! it chops, not rounds)

    // Checking overflow: max values
    cout << "int max: " << INT_MAX << "\\n";       // 2147483647
    cout << "long long max: " << LLONG_MAX << "\\n"; // 9223372036854775807

    return 0;
}`,
    funFact: "The number 2,147,483,647 (the maximum int value) is actually a prime number! It is 2^31 - 1, also called a Mersenne prime. CP contestants have this number practically tattooed on their brains because hitting it means overflow. Pro tip: if your answer should be positive but you see negative numbers appearing, overflow is almost certainly the culprit!",
    quiz: [
      {
        q: "What is the approximate maximum value an 'int' can hold?",
        opts: ["About 32 thousand", "About 2 billion", "About 9 quintillion", "About 1 million"],
        ans: 1
      },
      {
        q: "What happens when an int overflows in C++?",
        opts: ["The program crashes with an error", "It wraps around to a negative number silently", "It automatically switches to long long", "It prints 'OVERFLOW'"],
        ans: 1
      },
      {
        q: "What does (int)3.99 give you?",
        opts: ["4", "3.99", "3", "4.0"],
        ans: 2
      },
      {
        q: "When should you use long long instead of int in CP?",
        opts: ["Always, just to be safe", "When numbers can exceed 2 billion", "Only for negative numbers", "Only when the problem says so"],
        ans: 1
      }
    ],
    challenge: "Write a program that reads two integers a and b (each up to 10^9). Print their product. Be careful — the product of two numbers up to 10^9 can be up to 10^18, which overflows int! Make sure you use the right data type. Test with a=1000000000, b=3. You should get 3000000000, not a weird negative number.",
    resources: [
      {
        type: "guide",
        title: "CP-Algorithms — Data Types and Overflow",
        url: "https://cp-algorithms.com/",
        source: "CP-Algorithms"
      },
      {
        type: "video",
        title: "C++ Data Types for Competitive Programming",
        url: "https://www.youtube.com/watch?v=WpF4EHdFiAA",
        source: "YouTube"
      },
      {
        type: "practice",
        title: "Codeforces — Way Too Long Words",
        url: "https://codeforces.com/problemset/problem/71/A",
        source: "Codeforces"
      }
    ],
    eli5: "Imagine you have three piggy banks: a small one (int) that holds up to 2 billion coins, a HUGE one (long long) that holds 9 quintillion coins, and a magic one (double) that can hold half-coins and quarter-coins. If you try to put too many coins in the small piggy bank, they spill out and you lose count — that is overflow! Always pick a piggy bank big enough for your coins.",
    codeWalkthrough: [
      "int a = 1000000000; — we store 1 billion in an int. This fits fine because int can hold up to about 2.1 billion.",
      "// int bad = a * 3; — DO NOT do this! 1 billion × 3 = 3 billion, which is bigger than int's max of ~2.1 billion. This would overflow and give a wrong negative number.",
      "long long big = (long long)a * 3; — the (long long) cast converts a to a long long BEFORE the multiplication happens. Now the math is done in long long space, and 3 billion fits perfectly.",
      "cout << big; — prints 3000000000. Without the cast, this would have printed a garbage negative number!",
      "double pi = 3.14159265358979; — we store pi in a double. Doubles can hold about 15-16 significant digits.",
      "cout << fixed << setprecision(6) << pi; — prints 3.141593 with exactly 6 decimal places.",
      "cout << x / y; — integer division: 5/2 = 2. The .5 is thrown away because both x and y are int.",
      "cout << (double)x / y; — casting x to double forces real division: 5.0/2 = 2.5.",
      "int truncated = (int)d; — converting 3.99 to int gives 3. It CHOPS the decimal, it does NOT round up!",
      "cout << INT_MAX; — prints 2147483647, the largest number an int can hold. Know this number — it will save you from overflow bugs!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    int product = a * b;
    cout << product << "\\n";
    return 0;
}`,
      hint: "If a and b can each be up to 1,000,000,000 (10^9), what happens when you multiply them and store the result in an int?",
      answer: "The bug is overflow! If a = 1000000000 and b = 3, then a * b = 3000000000, which exceeds the int maximum of 2147483647. The result wraps around to a negative number. The fix: change 'int product' to 'long long product' AND cast before multiplying: long long product = (long long)a * b; — the cast ensures the multiplication itself happens in long long."
    },
    difficulty: "beginner",
    prereqs: [4, 6]
  },
  // =============================================
  // LESSON 8: If-Else — Making Decisions
  // =============================================
  {
    id: 8,
    title: "If-Else — Teaching Your Code to Make Decisions",
    subtitle: "Give your code the power to think! Learn how to make it choose different paths based on conditions.",
    analogy: "If-else is like a traffic light. When the light is green (condition is true), you GO — the code inside the if-block runs. When the light is red (condition is false), you STOP — and the code inside the else-block runs instead. Your code reaches a fork in the road and decides which way to go based on a condition you set!",
    points: [
      {
        t: "The if Statement — 'Do This If True'",
        d: "The if statement checks a condition and runs code ONLY if the condition is true. Syntax: if (condition) { code here }. The condition goes inside parentheses (). The code to run goes inside curly braces {}. If the condition is false, the code is simply skipped. It is like saying: 'If it is raining, take an umbrella.'"
      },
      {
        t: "The else Statement — 'Otherwise Do This'",
        d: "The else block runs when the if condition is FALSE. Syntax: if (condition) { code A } else { code B }. Exactly ONE of the two blocks runs — never both, never neither. It is like saying: 'If it is raining, take an umbrella. Otherwise, wear sunglasses.' You always get one outcome."
      },
      {
        t: "Comparison Operators — How to Compare",
        d: "To make conditions, you use comparison operators: == (equal to), != (not equal), < (less than), > (greater than), <= (less than or equal), >= (greater than or equal). IMPORTANT: == has TWO equal signs! A single = is assignment (setting a value), not comparison. Writing if (a = 5) is a VERY common bug — it sets a to 5 instead of comparing!"
      },
      {
        t: "== vs = — The Classic Trap",
        d: "This is the most common beginner mistake: = means 'assign' (put a value in a variable), == means 'compare' (check if two things are equal). if (x = 5) does NOT check if x equals 5 — it SETS x to 5 and always runs! You want if (x == 5). Many CP veterans have lost hours to this one-character bug!"
      },
      {
        t: "Nested If — Decisions Inside Decisions",
        d: "You can put an if inside another if. This is called nesting. Example: if (age >= 18) { if (hasID) { enter(); } }. This checks two conditions: first age, then ID. Nesting more than 2-3 levels deep gets messy though — later we will learn logical operators (&&, ||) as a cleaner alternative."
      },
      {
        t: "Common CP Pattern — Checking Conditions on Input",
        d: "In CP, the most common use of if-else is: read input, check some condition, print a result. Like: 'Read a number. If it is even, print YES. Otherwise print NO.' This pattern appears in hundreds of CP problems. Read → Check → Print. Simple but powerful!"
      },
      {
        t: "One-Line If — No Braces Needed",
        d: "If your if/else block has only ONE line, you can skip the curly braces: if (n > 0) cout << \"Positive\"; But be careful! If you later add a second line, it will NOT be part of the if. Most CP coders always use braces to be safe. It is a style choice, but braces prevent bugs."
      }
    ],
    whatIs: "If-else statements let your code make decisions. The 'if' checks a condition — if it is true, one block of code runs. If it is false, the 'else' block runs instead. This is called 'conditional execution' or 'branching' because your program branches into different paths.",
    realWorld: "Decisions are everywhere in programs! ATMs check if you have enough balance before dispensing cash. Games check if your health reaches zero to trigger 'Game Over.' Login forms check if the password matches. In CP, if-else is used to handle different cases in a problem: positive vs negative, even vs odd, possible vs impossible.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    // Basic if-else: check positive or negative
    if (n > 0) {
        cout << "Positive\\n";
    } else if (n < 0) {
        cout << "Negative\\n";
    } else {
        cout << "Zero\\n";
    }

    // Check even or odd
    if (n % 2 == 0) {
        cout << "Even\\n";
    } else {
        cout << "Odd\\n";
    }

    // CP classic: read two numbers and print the bigger one
    int a, b;
    cin >> a >> b;
    if (a > b) {
        cout << a << "\\n";
    } else if (b > a) {
        cout << b << "\\n";
    } else {
        cout << "Equal\\n";
    }

    // Comparison operators demo
    int x = 10, y = 20;
    cout << (x == y) << "\\n";  // 0 (false)
    cout << (x != y) << "\\n";  // 1 (true)
    cout << (x < y) << "\\n";   // 1 (true)
    cout << (x >= y) << "\\n";  // 0 (false)

    return 0;
}`,
    funFact: "The first 'conditional branching' in computing history was in Charles Babbage's Analytical Engine design from 1837 — almost 200 years ago! Ada Lovelace wrote about how the machine could 'decide' which instructions to follow based on results. Every if-else you write today is using the same idea that Ada thought of before computers even existed!",
    quiz: [
      {
        q: "What is the difference between = and == in C++?",
        opts: ["They are the same thing", "= compares values, == assigns values", "= assigns a value, == compares two values", "= is for integers, == is for strings"],
        ans: 2
      },
      {
        q: "What does this print if n = 7? if (n % 2 == 0) cout << 'A'; else cout << 'B';",
        opts: ["A", "B", "AB", "Nothing"],
        ans: 1
      },
      {
        q: "What happens with: if (n > 0) cout << 'Yes'; cout << 'Always';",
        opts: ["Prints 'YesAlways' if n > 0, nothing otherwise", "Prints 'YesAlways' if n > 0, 'Always' otherwise", "Prints 'Yes' if n > 0, 'Always' otherwise", "Syntax error"],
        ans: 1
      },
      {
        q: "Which comparison operator means 'not equal to'?",
        opts: ["<>", "=/=", "!=", "~="],
        ans: 2
      }
    ],
    challenge: "Write a program that reads an integer n. If n is divisible by both 3 and 5, print 'FizzBuzz'. If only divisible by 3, print 'Fizz'. If only divisible by 5, print 'Buzz'. Otherwise, print the number itself. Test with n=15 (FizzBuzz), n=9 (Fizz), n=10 (Buzz), n=7 (7).",
    resources: [
      {
        type: "practice",
        title: "Codeforces — Anton and Danik",
        url: "https://codeforces.com/problemset/problem/734/A",
        source: "Codeforces"
      },
      {
        type: "video",
        title: "If-Else in C++ — Beginner Friendly",
        url: "https://www.youtube.com/watch?v=vK_GUgJrJbQ",
        source: "YouTube"
      },
      {
        type: "guide",
        title: "USACO Guide — Basic Complete Search",
        url: "https://usaco.guide/bronze/intro-complete",
        source: "USACO Guide"
      }
    ],
    eli5: "Imagine you are at an ice cream shop. You ask: 'Do you have chocolate?' If YES, you get chocolate ice cream. If NO (else), you get vanilla instead. That is exactly what if-else does — it asks a question, and depending on the answer, your code does different things!",
    codeWalkthrough: [
      "int n; cin >> n; — we read a number from input. This is the number we will test with our if-else conditions.",
      "if (n > 0) — we check: is n greater than zero? If yes, the code inside the curly braces runs.",
      "cout << \"Positive\\n\"; — this only prints if n > 0 is true.",
      "else if (n < 0) — if the first condition was false, we check: is n less than zero?",
      "else — if n is not positive AND not negative, it must be zero. The else block catches everything that the if and else-if did not.",
      "if (n % 2 == 0) — classic even/odd check. n % 2 gives the remainder when dividing by 2. If the remainder is 0, n is even.",
      "int a, b; cin >> a >> b; — we read two numbers to compare them.",
      "if (a > b) — checks if a is larger. else if (b > a) checks if b is larger. else means they are equal. This three-way comparison covers ALL cases.",
      "cout << (x == y); — the comparison x == y evaluates to true (1) or false (0). In C++, true is 1 and false is 0.",
      "cout << (x != y); — checks if x is NOT equal to y. Since 10 != 20 is true, this prints 1."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int password = 1234;
    int guess;
    cin >> guess;
    if (guess = password) {
        cout << "Access Granted!\\n";
    } else {
        cout << "Wrong Password!\\n";
    }
    return 0;
}`,
      hint: "Look very carefully at the if condition. Is it COMPARING guess to password, or doing something else?",
      answer: "The bug is using = (assignment) instead of == (comparison) in the if condition. 'if (guess = password)' SETS guess to 1234 and then checks if 1234 is non-zero (it is!), so it ALWAYS prints 'Access Granted!' no matter what you type. The fix: change to if (guess == password). One extra = makes all the difference!"
    },
    difficulty: "beginner",
    prereqs: [5, 6]
  },
  // =============================================
  // LESSON 9: Else-If Chains
  // =============================================
  {
    id: 9,
    title: "Else-If Chains — Multiple Choices",
    subtitle: "When life gives you more than two options, else-if chains and switch-case have you covered!",
    analogy: "An else-if chain is like a vending machine. You press button A1 — if it matches a Coke, out comes Coke. Else if A2 matches Sprite, out comes Sprite. Else if A3 matches water, out comes water. Else, the machine says 'Invalid selection.' The machine checks each button in order and stops at the first match!",
    points: [
      {
        t: "The Else-If Chain — Checking Many Conditions",
        d: "When you have more than two possible outcomes, use else-if chains: if (cond1) { } else if (cond2) { } else if (cond3) { } else { }. Conditions are checked from TOP to BOTTOM, and the FIRST one that is true runs. After that, ALL remaining conditions are skipped. The final 'else' is optional but catches anything that did not match."
      },
      {
        t: "Order Matters!",
        d: "Since conditions are checked top to bottom, the order you put them in is crucial. For example, in a grading system: if you check (score >= 60) before (score >= 90), everyone with 90+ would get the 60+ result! Always check from most specific to least specific. Think of it like a water slide — you stop at the first pool you reach."
      },
      {
        t: "The Grade Calculator — Classic Example",
        d: "Here is the classic: if (score >= 90) grade = 'A'; else if (score >= 80) grade = 'B'; else if (score >= 70) grade = 'C'; else if (score >= 60) grade = 'D'; else grade = 'F'. Notice we check from highest to lowest. If score is 85, it fails the >= 90 check, then PASSES the >= 80 check, so it gets B. The remaining checks are skipped."
      },
      {
        t: "Switch-Case — A Cleaner Way for Exact Values",
        d: "When comparing ONE variable against specific values, switch-case is cleaner: switch(x) { case 1: do_something; break; case 2: do_other; break; default: fallback; }. Each 'case' checks if x equals that value. The 'break' is required to stop — without it, execution 'falls through' to the next case! 'default' is like 'else'."
      },
      {
        t: "Break Is Mandatory in Switch!",
        d: "Forgetting 'break' in a switch is a famous C++ bug. Without break, after matching one case, the code CONTINUES running into the next case! This is called 'fall-through.' Sometimes it is useful on purpose, but 99% of the time it is a bug. Always put break at the end of each case unless you have a very good reason not to."
      },
      {
        t: "Switch Limitations — Only Integers and Characters",
        d: "Switch-case only works with int, char, and enum types. You CANNOT use switch with strings, doubles, or ranges. For those, you must use if-else chains. In CP, switch is most useful for menu-style problems or when checking specific character values (like 'R', 'L', 'U', 'D' for directions)."
      },
      {
        t: "CP Pattern — Multiple Test Cases with Conditions",
        d: "Many CP problems give you T test cases, and each one needs a different response based on conditions. The pattern is: read T, loop T times, read input, use if-else chain to determine the answer, print it. This combines loops (which we will learn soon) with conditional logic."
      }
    ],
    whatIs: "Else-if chains let you check multiple conditions in sequence, executing the code block for the FIRST condition that is true. Switch-case is an alternative that checks one variable against a list of specific values. Both let your code handle many different scenarios cleanly.",
    realWorld: "Multi-way decisions are everywhere! A weather app shows different icons based on temperature ranges. A restaurant menu app applies different discounts based on order total. Video games assign difficulty levels based on player stats. In CP, you constantly classify input into categories — 'print YES if this, NO if that, MAYBE if something else.'",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Grade calculator with else-if chain
    int score;
    cin >> score;

    char grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    cout << "Grade: " << grade << "\\n";

    // Switch-case: direction commands
    char direction;
    cin >> direction;

    switch (direction) {
        case 'U':
            cout << "Moving Up\\n";
            break;
        case 'D':
            cout << "Moving Down\\n";
            break;
        case 'L':
            cout << "Moving Left\\n";
            break;
        case 'R':
            cout << "Moving Right\\n";
            break;
        default:
            cout << "Invalid direction\\n";
            break;
    }

    // CP problem: classify a number
    int n;
    cin >> n;
    if (n > 0 && n % 2 == 0) {
        cout << "Positive Even\\n";
    } else if (n > 0 && n % 2 != 0) {
        cout << "Positive Odd\\n";
    } else if (n < 0) {
        cout << "Negative\\n";
    } else {
        cout << "Zero\\n";
    }

    return 0;
}`,
    funFact: "The switch-case 'fall-through' behavior comes from the C language, created by Dennis Ritchie in the 1970s. He designed it to fall through on purpose because sometimes you WANT multiple cases to share code. But it has caused so many bugs that modern languages like Rust and Go require explicit 'fall-through' — C++ kept the old behavior for backward compatibility!",
    quiz: [
      {
        q: "In an else-if chain, how many blocks of code can run?",
        opts: ["All blocks with true conditions", "Exactly one — the first true condition", "At least one", "It depends on the values"],
        ans: 1
      },
      {
        q: "What happens if you forget 'break' in a switch case?",
        opts: ["Compilation error", "Only that case runs", "Execution falls through to the next case", "The program crashes"],
        ans: 2
      },
      {
        q: "For a grade calculator, what order should you check conditions?",
        opts: ["Any order works", "From lowest score to highest", "From highest score to lowest", "Alphabetical by grade letter"],
        ans: 2
      },
      {
        q: "What can you use inside switch() in C++?",
        opts: ["Strings and integers", "Only integers and characters", "Any data type", "Only integers"],
        ans: 1
      }
    ],
    challenge: "Write a program that reads a score (0-100) and prints the grade: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60). Also print a message: A='Excellent!', B='Great!', C='Good', D='Needs work', F='Study harder!'. Test with inputs 95, 82, 71, 55.",
    resources: [
      {
        type: "practice",
        title: "Codeforces — Elephant",
        url: "https://codeforces.com/problemset/problem/617/A",
        source: "Codeforces"
      },
      {
        type: "video",
        title: "Switch Case in C++ Explained",
        url: "https://www.youtube.com/watch?v=jBSu4GV_GBk",
        source: "YouTube"
      },
      {
        type: "guide",
        title: "USACO Guide — Ad Hoc Problems",
        url: "https://usaco.guide/bronze/ad-hoc",
        source: "USACO Guide"
      }
    ],
    eli5: "Imagine you are at a theme park and the sign says: 'If you are taller than 150cm, ride the big roller coaster. Else if you are taller than 120cm, ride the medium coaster. Else if you are taller than 90cm, ride the kiddie coaster. Else, visit the playground.' You check from the top, and the FIRST one you qualify for is what you get!",
    codeWalkthrough: [
      "int score; cin >> score; — we read the student's test score.",
      "if (score >= 90) grade = 'A'; — we check the HIGHEST grade first. If the score is 90 or above, it is an A.",
      "else if (score >= 80) grade = 'B'; — this ONLY runs if the first check failed (score < 90). So if we get here, we know 80 <= score < 90.",
      "else if (score >= 70) grade = 'C'; — same idea. If we reach here, we know score < 80. So this catches 70-79.",
      "else grade = 'F'; — if NO condition was true, the score is below 60 and gets an F. The else is our safety net.",
      "switch (direction) — we check the direction variable against specific character values.",
      "case 'U': cout << \"Moving Up\\n\"; break; — if direction is 'U', print the message and BREAK out. Without break, it would continue to the next case!",
      "default: — like else for switch. If no case matches, this runs.",
      "if (n > 0 && n % 2 == 0) — this combines two conditions with && (AND). Both must be true: n must be positive AND even.",
      "else if (n > 0 && n % 2 != 0) — positive AND odd. By using else-if, we ensure only one category gets printed."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int score = 85;
    if (score >= 60) {
        cout << "D\\n";
    } else if (score >= 70) {
        cout << "C\\n";
    } else if (score >= 80) {
        cout << "B\\n";
    } else if (score >= 90) {
        cout << "A\\n";
    } else {
        cout << "F\\n";
    }
    return 0;
}`,
      hint: "What order are the conditions checked? Score 85 is >= 60, and also >= 70, >= 80... but which condition does the code check FIRST?",
      answer: "The bug is that conditions are checked in the WRONG ORDER — from lowest to highest. Since 85 >= 60 is true, the code immediately prints 'D' and skips everything else! A score of 95 would also print 'D'! The fix is to reverse the order: check >= 90 first, then >= 80, then >= 70, then >= 60, then else for F. Always go from most restrictive to least restrictive."
    },
    difficulty: "beginner",
    prereqs: [8]
  },
  // =============================================
  // LESSON 10: Logical Operators
  // =============================================
  {
    id: 10,
    title: "Logical Operators — Combining Conditions",
    subtitle: "Learn to combine conditions with AND, OR, and NOT — the building blocks of powerful decision-making!",
    analogy: "Logical operators are like rules at a fancy party. AND (&&) means you need BOTH a ticket AND an ID to enter — missing either one and you are turned away. OR (||) means you need a ticket OR be on the VIP list — having either one is enough. NOT (!) flips things — if the door says 'NOT members only,' then non-members CAN enter. These three little operators let you build any rule you can imagine!",
    points: [
      {
        t: "&& (AND) — Both Must Be True",
        d: "The && operator returns true ONLY if BOTH sides are true. true && true = true. true && false = false. false && true = false. false && false = false. Example: if (age >= 18 && hasLicense) — you can drive only if you are 18+ AND have a license. Both conditions must pass!"
      },
      {
        t: "|| (OR) — At Least One Must Be True",
        d: "The || operator returns true if AT LEAST ONE side is true. true || true = true. true || false = true. false || true = true. false || false = false. Only when BOTH are false does || give false. Example: if (isWeekend || isHoliday) — you get a day off if it is a weekend OR a holiday (or both!)."
      },
      {
        t: "! (NOT) — Flip True to False",
        d: "The ! operator flips a boolean value. !true = false. !false = true. Example: if (!gameOver) means 'if the game is NOT over.' You can also use it with comparisons: !(a == b) is the same as (a != b). The NOT operator is like flipping a light switch."
      },
      {
        t: "Short-Circuit Evaluation — C++ Is Lazy!",
        d: "C++ is clever (lazy) about evaluating conditions. For &&, if the LEFT side is false, it does not even check the right side — because the result is false no matter what. For ||, if the LEFT side is true, it skips the right side. This is called 'short-circuit evaluation.' It is not just efficient — it can prevent crashes! Example: if (n != 0 && 100/n > 5) is safe because if n is 0, the division never happens."
      },
      {
        t: "Combining Multiple Operators",
        d: "You can chain logical operators: if (a > 0 && a < 100) checks if a is between 1 and 99. if (x == 1 || x == 2 || x == 3) checks if x is 1, 2, or 3. You can mix them: if ((age >= 18 && hasTicket) || isVIP) — adults with tickets or VIPs can enter. Use parentheses to make the order clear!"
      },
      {
        t: "Operator Precedence — ! Before && Before ||",
        d: "Without parentheses: ! is evaluated first, then &&, then ||. So 'true || false && false' means 'true || (false && false)' = 'true || false' = true. This can be confusing! ALWAYS use parentheses when mixing && and || to make your intention crystal clear. Your future self will thank you."
      },
      {
        t: "CP Pattern — Range Checking",
        d: "A super common CP pattern is checking if a value is in a range: if (x >= L && x <= R). This checks if x is between L and R (inclusive). You will use this pattern constantly! Another pattern: checking if a point (x,y) is inside a rectangle: if (x >= 0 && x < n && y >= 0 && y < m). This is essential for grid problems."
      },
      {
        t: "Truth Tables — The Complete Reference",
        d: "A truth table shows all possible results. For AND: T&&T=T, T&&F=F, F&&T=F, F&&F=F. For OR: T||T=T, T||F=T, F||T=T, F||F=F. For NOT: !T=F, !F=T. Once you memorize these, logical operators become second nature. Think of AND as strict (both must agree) and OR as lenient (one is enough)."
      }
    ],
    whatIs: "Logical operators let you combine multiple conditions into one. AND (&&) requires all conditions to be true. OR (||) requires at least one to be true. NOT (!) flips true to false and vice versa. Together, they let you express any complex condition your program needs.",
    realWorld: "Logical operators power everything with rules. Email filters: if (from == boss && subject contains 'urgent'), mark as important. Search engines: 'cats AND dogs' finds pages with both words, 'cats OR dogs' finds pages with either. In CP, you combine conditions to check ranges, validate input, and handle edge cases — they appear in virtually every problem.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int age;
    bool hasTicket, isVIP;

    cin >> age;
    cin >> hasTicket >> isVIP;  // 1 for true, 0 for false

    // AND: both conditions required
    if (age >= 18 && hasTicket) {
        cout << "Welcome! You may enter.\\n";
    }

    // OR: either condition is enough
    if (hasTicket || isVIP) {
        cout << "You have access to the show.\\n";
    }

    // NOT: flip a condition
    if (!isVIP) {
        cout << "You are not a VIP.\\n";
    }

    // Combined: adults with ticket OR any VIP
    if ((age >= 18 && hasTicket) || isVIP) {
        cout << "Backstage pass granted!\\n";
    }

    // CP classic: check if number is in range [1, 100]
    int n;
    cin >> n;
    if (n >= 1 && n <= 100) {
        cout << "In range\\n";
    } else {
        cout << "Out of range\\n";
    }

    // Short-circuit: safe division check
    int divisor;
    cin >> divisor;
    if (divisor != 0 && 100 / divisor > 10) {
        cout << "Big ratio!\\n";
    }

    // Check if a year is a leap year
    int year;
    cin >> year;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        cout << year << " is a leap year\\n";
    } else {
        cout << year << " is not a leap year\\n";
    }

    return 0;
}`,
    funFact: "George Boole, a self-taught English mathematician from the 1800s, invented the logic system that AND, OR, and NOT are based on. He called it 'Boolean algebra.' He had no idea that 100 years later, his math would become the foundation of EVERY computer chip ever made! Every transistor in your computer is basically doing AND, OR, and NOT operations billions of times per second. The 'bool' data type in C++ is named after him!",
    quiz: [
      {
        q: "What does true && false evaluate to?",
        opts: ["true", "false", "error", "undefined"],
        ans: 1
      },
      {
        q: "What does false || true evaluate to?",
        opts: ["false", "true", "error", "0"],
        ans: 1
      },
      {
        q: "In 'if (n != 0 && 100/n > 5)', what happens when n is 0?",
        opts: ["Division by zero crash", "It prints an error", "The right side is never evaluated (short-circuit)", "It returns false and then checks the right side"],
        ans: 2
      },
      {
        q: "Which checks if x is between 1 and 10 (inclusive)?",
        opts: ["if (1 < x < 10)", "if (x >= 1 && x <= 10)", "if (x >= 1 || x <= 10)", "if (x > 0 && x < 11)"],
        ans: 1
      }
    ],
    challenge: "Write a leap year checker! A year is a leap year if: (divisible by 4 AND NOT divisible by 100) OR (divisible by 400). Read a year and print 'Leap' or 'Not Leap'. Test: 2024 (Leap), 1900 (Not Leap), 2000 (Leap), 2023 (Not Leap).",
    resources: [
      {
        type: "practice",
        title: "Codeforces — Beautiful Matrix",
        url: "https://codeforces.com/problemset/problem/263/A",
        source: "Codeforces"
      },
      {
        type: "video",
        title: "Logical Operators in C++ — Full Guide",
        url: "https://www.youtube.com/watch?v=HtESinh0HTY",
        source: "YouTube"
      },
      {
        type: "guide",
        title: "CP-Algorithms — Boolean Logic Basics",
        url: "https://cp-algorithms.com/",
        source: "CP-Algorithms"
      }
    ],
    eli5: "Imagine you want cookies from the cookie jar. Mom says: 'You can have a cookie IF you ate your vegetables AND finished your homework.' That is the AND rule — you need BOTH! But Dad says: 'You can have a cookie IF you ate your vegetables OR cleaned your room.' That is the OR rule — either one works! And NOT is like when someone says 'Do NOT touch the jar' — it flips the rule to the opposite.",
    codeWalkthrough: [
      "cin >> age; cin >> hasTicket >> isVIP; — we read the age as an integer, then two boolean values (0 or 1) for ticket and VIP status.",
      "if (age >= 18 && hasTicket) — the && (AND) operator. Both conditions must be true: the person must be 18 or older AND have a ticket. If either is false, the whole condition is false.",
      "if (hasTicket || isVIP) — the || (OR) operator. At least ONE condition must be true. Having a ticket works, being a VIP works, having both also works. Only fails if you have neither.",
      "if (!isVIP) — the ! (NOT) operator flips the value. If isVIP is true, !isVIP is false (so the message does not print). If isVIP is false, !isVIP is true (message prints).",
      "if ((age >= 18 && hasTicket) || isVIP) — we mix AND and OR with parentheses. The parentheses make it clear: (adults with tickets) OR (VIPs of any age). Without parentheses, the meaning could change!",
      "if (n >= 1 && n <= 100) — the classic range check pattern. n must be at least 1 AND at most 100. This is how you check if a value is within bounds.",
      "if (divisor != 0 && 100 / divisor > 10) — short-circuit evaluation in action! If divisor IS 0, the left side (divisor != 0) is false, so C++ never evaluates the right side (100/divisor). This prevents a division-by-zero crash!",
      "if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) — the famous leap year formula. A year is a leap year if it is divisible by 4 but NOT by 100, unless it IS divisible by 400. The parentheses group the conditions perfectly."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int x;
    cin >> x;
    // Check if x is between 10 and 20
    if (10 <= x <= 20) {
        cout << "In range\\n";
    } else {
        cout << "Out of range\\n";
    }
    return 0;
}`,
      hint: "C++ does not understand math-style chained comparisons like 10 <= x <= 20. What does C++ actually do with this expression? Think about what (10 <= x) evaluates to, and then what THAT result <= 20 means.",
      answer: "The bug is that '10 <= x <= 20' does NOT work like math! C++ evaluates it left to right: first (10 <= x) gives true (1) or false (0), then it compares THAT 0 or 1 with 20. Since 0 <= 20 and 1 <= 20 are both true, this condition is ALWAYS true for any x! The fix: use '(x >= 10 && x <= 20)' — two separate comparisons joined with AND."
    },
    difficulty: "beginner",
    prereqs: [8]
  },
  // =============================================
  // LESSON 11: While Loops — Repeat Until Done
  // =============================================
  {
    id: 11,
    title: "While Loops — Repeat Until Done",
    subtitle: "Keep repeating as long as the condition is true",
    analogy: "Imagine you have a bowl of candy. You keep eating one piece WHILE the bowl is not empty. The moment the bowl is empty, you stop. That is exactly how a while loop works — it keeps running the code inside it as long as the condition stays true.",
    points: [
      { t: "The While Loop Syntax", d: "A while loop looks like: while(condition) { body }. First C++ checks the condition. If it is true, it runs the body. Then it checks again. This repeats until the condition becomes false." },
      { t: "Counting with While", d: "You can count from 1 to N using a while loop: set i = 1, then while(i <= N), print i, then do i++. Each time through the loop, i grows by 1 until it passes N." },
      { t: "Summing Numbers", d: "To add numbers from 1 to N: start sum = 0 and i = 1. While i <= N, do sum += i and i++. When the loop ends, sum holds the total. For N = 5, you get 1+2+3+4+5 = 15." },
      { t: "The Danger of Infinite Loops", d: "If you forget to change the variable that the condition checks, the condition stays true forever and your program never stops. This is called an infinite loop. Always make sure something inside the loop moves you toward the condition becoming false." },
      { t: "Break — Emergency Exit", d: "The break statement immediately exits the loop, no matter what the condition says. It is like an emergency stop button. Use it when you find what you need and want to stop looping early." },
      { t: "Continue — Skip This Round", d: "The continue statement skips the rest of the current iteration and jumps back to the condition check. It is like saying 'skip this one, move to the next'. Useful for ignoring certain values." },
      { t: "While vs If", d: "An if statement checks a condition once. A while loop checks the same condition over and over. If you need to repeat something, use while. If you only need to decide once, use if." },
      { t: "Reading Until a Special Value", d: "A common CP pattern: read numbers until the user enters 0 or -1. Use while(true) with cin >> x, and break when x equals the sentinel value. This lets you process an unknown number of inputs." }
    ],
    whatIs: "A while loop is a control structure that repeats a block of code as long as a given condition remains true. Before each repetition, C++ checks the condition. If true, it runs the body. If false, it skips past the loop and continues with the rest of the program.",
    realWorld: "While loops are everywhere in competitive programming. Reading input until end-of-file, searching for a value, simulating a process step by step, or repeatedly halving a number (like in binary search) all use while loops. They are your go-to tool when you do not know in advance how many times you need to repeat.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Count from 1 to 5
    int i = 1;
    while (i <= 5) {
        cout << i << " ";
        i++;
    }
    cout << endl;
    // Output: 1 2 3 4 5

    // Sum from 1 to 10
    int sum = 0;
    int j = 1;
    while (j <= 10) {
        sum += j;
        j++;
    }
    cout << "Sum = " << sum << endl;
    // Output: Sum = 55

    // Read numbers until 0, print their sum
    int x, total = 0;
    cout << "Enter numbers (0 to stop): ";
    cin >> x;
    while (x != 0) {
        total += x;
        cin >> x;
    }
    cout << "Total = " << total << endl;

    return 0;
}`,
    funFact: "The first computer bug was literally a real bug — a moth stuck in a relay of the Harvard Mark II computer in 1947. When your while loop runs forever and your program freezes, we still call it a 'bug' even though no insects are involved!",
    quiz: [
      { q: "What happens if the condition of a while loop is false from the very start?", opts: ["The loop body runs once anyway", "The loop body never runs", "The program crashes", "The loop runs forever"], ans: 1 },
      { q: "What does the 'break' statement do inside a while loop?", opts: ["Skips to the next iteration", "Pauses the loop for one second", "Immediately exits the loop", "Restarts the loop from the beginning"], ans: 2 },
      { q: "What will this print? int i=1; while(i<=3){cout<<i;i++;}", opts: ["1 2 3", "123", "1234", "Infinite loop"], ans: 1 },
      { q: "What causes an infinite loop?", opts: ["Using break inside the loop", "The condition never becomes false", "Using continue inside the loop", "Having too many lines in the loop body"], ans: 1 }
    ],
    challenge: "Write a program that reads numbers from input one by one until the user enters -1. Print the count of positive numbers and the count of negative numbers entered (do not count -1 itself). Use a while loop with break.",
    resources: [
      { type: "video", title: "C++ While Loops Explained", url: "https://www.youtube.com/results?search_query=c%2B%2B+while+loop+tutorial+beginner", source: "YouTube" },
      { type: "article", title: "While Loop — cppreference", url: "https://en.cppreference.com/w/cpp/language/while", source: "cppreference.com" },
      { type: "practice", title: "Loop Practice Problems", url: "https://codeforces.com/problemset?tags=implementation&order=BY_SOLVED_DESC", source: "Codeforces" }
    ],
    eli5: "A while loop is like a kid on a trampoline. They keep bouncing WHILE they still have energy. Each bounce is one trip through the loop. When they run out of energy (the condition becomes false), they stop bouncing and climb off.",
    codeWalkthrough: [
      "We include bits/stdc++.h for all standard tools.",
      "int i = 1; — We start our counter at 1.",
      "while (i <= 5) — Before each repetition, check: is i still 5 or less?",
      "cout << i << \" \"; — Print the current value of i with a space.",
      "i++; — Increase i by 1. Without this line, we would loop forever!",
      "After i becomes 6, the condition i <= 5 is false, so the loop stops.",
      "For the sum example, sum starts at 0 and we keep adding j to it.",
      "Each time through the loop, j increases, so we add 1, then 2, then 3... up to 10.",
      "The sentinel example reads x first, then enters the loop only if x is not 0.",
      "Inside the loop, we add x to total and read the next x. When x is 0, the loop ends."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int i = 1;
    int sum = 0;
    while (i <= 100) {
        sum += i;
    }
    cout << "Sum = " << sum << endl;
    return 0;
}`,
      hint: "The loop condition checks i, but does anything inside the loop actually change i? What will happen when you run this?",
      answer: "The bug is that i is never incremented inside the loop! The condition i <= 100 is always true because i stays at 1 forever. This creates an infinite loop. The fix: add i++; inside the while loop body after sum += i;."
    },
    difficulty: "beginner",
    prereqs: [8]
  },
  // =============================================
  // LESSON 12: For Loops — The Counter Loop
  // =============================================
  {
    id: 12,
    title: "For Loops — The Counter Loop",
    subtitle: "A compact loop with init, condition, and update all in one line",
    analogy: "Imagine you are running laps around a track. Before you start, you reset your lap counter to 0 (initialization). Before each lap, you check: have I done all my required laps? (condition). After finishing a lap, you add 1 to your counter (update). A for loop puts all three steps in one neat line.",
    points: [
      { t: "The For Loop Syntax", d: "A for loop has three parts in one line: for(init; condition; update) { body }. First the init runs once. Then before each repetition, the condition is checked. After each repetition, the update runs. It is a while loop with everything organized in one place." },
      { t: "Breaking Down the Three Parts", d: "init: usually declares and sets a counter like int i = 0. condition: checked before each iteration like i < n. update: runs after each iteration like i++. If the condition is false from the start, the body never executes." },
      { t: "Counting Up", d: "for(int i = 1; i <= 10; i++) counts from 1 to 10. The variable i starts at 1, goes up by 1 each time, and the loop stops when i exceeds 10. This is the most common loop pattern in CP." },
      { t: "Counting Down", d: "for(int i = 10; i >= 1; i--) counts from 10 down to 1. Use i-- to decrease by 1 each time. Useful for reversing arrays or counting backwards." },
      { t: "Running Sum with For", d: "To sum 1 to N: int sum = 0; for(int i = 1; i <= n; i++) sum += i; This is cleaner than a while loop because the counter setup is all in the for line. The variable i is only visible inside the loop." },
      { t: "Factorial with For", d: "Factorial of N (written N!) means multiply 1 × 2 × 3 × ... × N. Use: long long fact = 1; for(int i = 1; i <= n; i++) fact *= i; We use long long because factorials grow extremely fast — 20! is already over 2 quintillion." },
      { t: "For vs While — When to Use Which", d: "Use a for loop when you know how many times to repeat (count from 1 to N, process N items). Use a while loop when you do not know in advance (read until end of input, repeat until a condition changes). In CP, for loops are used about 80% of the time." },
      { t: "Loop Variable Scope", d: "When you declare a variable inside the for statement like for(int i = 0; ...), that variable only exists inside the loop. After the loop ends, i is gone. This prevents accidental reuse and keeps your code clean." }
    ],
    whatIs: "A for loop is a compact loop structure that combines initialization, condition checking, and updating into a single line. It is the most commonly used loop in competitive programming because it neatly handles counted repetition — when you know exactly how many times to repeat.",
    realWorld: "For loops dominate competitive programming. Reading N numbers, processing each element of an array, generating patterns, computing sums, products, and powers — nearly every CP problem uses at least one for loop. Once you master for loops, you can solve hundreds of basic problems.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    // Sum from 1 to n
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    cout << "Sum = " << sum << endl;

    // Factorial of n
    long long fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    cout << n << "! = " << fact << endl;

    // Count down from n to 1
    for (int i = n; i >= 1; i--) {
        cout << i << " ";
    }
    cout << endl;

    // Print even numbers from 2 to 20
    for (int i = 2; i <= 20; i += 2) {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}`,
    funFact: "The famous mathematician Carl Friedrich Gauss supposedly figured out the sum of 1 to 100 in seconds as a child by noticing that 1+100 = 2+99 = 3+98 = ... = 101, giving 50 pairs of 101, so the answer is 5050. Your for loop does the same thing, just one step at a time!",
    quiz: [
      { q: "In for(int i = 0; i < 5; i++), how many times does the loop body execute?", opts: ["4 times", "5 times", "6 times", "It depends on what is inside the body"], ans: 1 },
      { q: "What does for(int i = 10; i >= 1; i--) do?", opts: ["Counts from 1 to 10", "Counts from 10 down to 1", "Counts from 10 down to 0", "Creates an infinite loop"], ans: 1 },
      { q: "Why do we use long long for factorial instead of int?", opts: ["long long is faster", "Factorials get very large very quickly", "int cannot store any multiplication result", "It is just a coding style preference"], ans: 1 },
      { q: "What is the value of sum after: int sum=0; for(int i=1;i<=4;i++) sum+=i;", opts: ["4", "10", "8", "6"], ans: 1 }
    ],
    challenge: "Write a program that reads a number N and prints the first N odd numbers on one line separated by spaces. For example, if N = 4, print: 1 3 5 7. Use a for loop. Hint: the k-th odd number is 2*k - 1.",
    resources: [
      { type: "video", title: "C++ For Loops for Beginners", url: "https://www.youtube.com/results?search_query=c%2B%2B+for+loop+tutorial+beginner", source: "YouTube" },
      { type: "article", title: "For Loop — cppreference", url: "https://en.cppreference.com/w/cpp/language/for", source: "cppreference.com" },
      { type: "practice", title: "Loop Problems — CSES", url: "https://cses.fi/problemset/", source: "CSES Problem Set" }
    ],
    eli5: "A for loop is like a teacher telling you: 'Start at page 1, keep going while you have not passed page 10, and turn one page after each reading.' All the instructions for how to go through the book are written in one sentence at the top.",
    codeWalkthrough: [
      "We read n from the user to know how many numbers to work with.",
      "int sum = 0; — Start with a sum of zero.",
      "for (int i = 1; i <= n; i++) — Start i at 1, keep going while i is at most n, add 1 to i after each round.",
      "sum += i; — Each time through the loop, add the current i to sum.",
      "After the loop, sum holds 1 + 2 + 3 + ... + n.",
      "For factorial, we start fact at 1 (not 0, because we are multiplying).",
      "fact *= i; means fact = fact * i. After the loop, fact = 1 × 2 × 3 × ... × n.",
      "The countdown loop starts i at n and decreases: i-- subtracts 1 each time.",
      "The even numbers loop uses i += 2 to skip by 2 each time, starting from 2.",
      "All four examples show different ways to use the three parts of a for loop."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 5;
    int fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    cout << n << "! = " << fact << endl;
    return 0;
}`,
      hint: "This code looks correct for small values of n. But what happens if n is 25 or 30? What is the maximum value an int can hold? Think about overflow.",
      answer: "The bug is using int for fact instead of long long. Factorials grow extremely fast — 13! = 6,227,020,800 which already overflows a 32-bit int (max ~2.1 billion). For n = 25 or higher, the result is completely wrong due to integer overflow. The fix: change int fact to long long fact."
    },
    difficulty: "beginner",
    prereqs: [11]
  },
  // =============================================
  // LESSON 13: Nested Loops — Loops Inside Loops
  // =============================================
  {
    id: 13,
    title: "Nested Loops — Loops Inside Loops",
    subtitle: "When one loop is not enough, put a loop inside a loop",
    analogy: "Think about a clock. The minute hand goes around the full circle (inner loop) for EACH hour the hour hand moves (outer loop). In 12 hours, the minute hand completes 12 full circles. Nested loops work the same way — the inner loop runs its entire course for each single step of the outer loop.",
    points: [
      { t: "What Are Nested Loops?", d: "A nested loop is a loop inside another loop. The outer loop runs, and for each iteration of the outer loop, the inner loop runs completely from start to finish. If the outer loop runs R times and the inner loop runs C times, the inner body executes R × C times total." },
      { t: "Rows and Columns", d: "The most common way to think about nested loops: the outer loop controls rows (going down) and the inner loop controls columns (going across). After the inner loop finishes one row, you print a newline and the outer loop moves to the next row." },
      { t: "Rectangle Star Pattern", d: "To print a 4×5 rectangle of stars: outer loop i from 1 to 4 (rows), inner loop j from 1 to 5 (columns), print '*' in the inner loop, print endl after the inner loop. You get 4 rows of 5 stars each." },
      { t: "Right Triangle Pattern", d: "For a right triangle, the inner loop depends on the outer loop variable. Row 1 prints 1 star, row 2 prints 2 stars, row i prints i stars. Use for(int j = 1; j <= i; j++) as the inner loop. This connection between outer and inner loop is key." },
      { t: "Inverted Triangle Pattern", d: "Flip the triangle upside down by making the inner loop count from i to n: for(int j = i; j <= n; j++). Row 1 prints n stars, row 2 prints n-1 stars, and so on. Alternatively, the inner loop can run from 1 to n-i+1." },
      { t: "Multiplication Table", d: "A multiplication table is a perfect nested loop example. Outer loop i from 1 to n (rows), inner loop j from 1 to n (columns), print i*j. Each cell shows the product of its row and column number." },
      { t: "Time Complexity Warning", d: "If both loops go up to N, the inner body runs N × N = N² times. For N = 1000, that is 1 million operations (fast). For N = 100,000, that is 10 billion operations (too slow!). Always think about how many times the inner body runs in CP." },
      { t: "Using Different Variables", d: "Always use different variable names for nested loops — typically i for outer and j for inner. Using the same variable name causes the inner loop to overwrite the outer loop variable, creating confusing bugs." }
    ],
    whatIs: "Nested loops are loops placed inside other loops. The inner loop completes all its iterations for every single iteration of the outer loop. They are essential for working with 2D structures like grids, tables, and patterns, and appear frequently in competitive programming.",
    realWorld: "Nested loops appear in CP problems involving grids, matrices, pattern printing, brute-force pair checking, and 2D array processing. Many beginner CP contests include pattern-printing problems that require nested loops. Understanding them is also the first step toward grasping time complexity.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    // Rectangle of stars (n rows, n columns)
    cout << "Rectangle:" << endl;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            cout << "* ";
        }
        cout << endl;
    }

    // Right triangle
    cout << "Right Triangle:" << endl;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }

    // Multiplication table
    cout << "Multiplication Table:" << endl;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            cout << i * j << "\\t";
        }
        cout << endl;
    }

    return 0;
}`,
    funFact: "Pattern printing with nested loops is so popular in programming education that there is an entire genre of interview questions called 'star pattern problems.' There are over 50 different star patterns (diamond, hourglass, butterfly, zigzag) and they all come down to clever use of nested loops!",
    quiz: [
      { q: "If the outer loop runs 5 times and the inner loop runs 3 times, how many times does the inner body execute?", opts: ["3", "5", "8", "15"], ans: 3 },
      { q: "In a right triangle pattern, what determines how many stars are printed in each row?", opts: ["The inner loop variable j", "The outer loop variable i", "A separate counter variable", "The total number of rows"], ans: 1 },
      { q: "What happens if you accidentally use 'i' for both the outer and inner loop variable?", opts: ["The program runs faster", "The inner loop overwrites the outer loop variable causing bugs", "Nothing, C++ handles it automatically", "The program will not compile"], ans: 1 },
      { q: "If both loops run from 1 to N, the total number of inner body executions is:", opts: ["N", "2N", "N + N", "N × N"], ans: 3 }
    ],
    challenge: "Write a program that reads N and prints an inverted right triangle of numbers. For N = 4, the output should be:\n1 2 3 4\n1 2 3\n1 2\n1\nEach row starts from 1 and the number of columns decreases by one each row.",
    resources: [
      { type: "video", title: "Nested Loops & Star Patterns in C++", url: "https://www.youtube.com/results?search_query=c%2B%2B+nested+loops+star+patterns+beginner", source: "YouTube" },
      { type: "article", title: "Nested Loops — Learn C++", url: "https://www.learncpp.com/cpp-tutorial/for-statements/", source: "LearnCpp.com" },
      { type: "practice", title: "Pattern Problems", url: "https://www.hackerrank.com/domains/cpp?filters%5Bsubdomains%5D%5B%5D=cpp-introduction", source: "HackerRank" }
    ],
    eli5: "Imagine you have a box of crayons and a coloring book with rows of squares. For each row (outer loop), you color every square in that row from left to right (inner loop). When you finish a row, you move down to the next row and start coloring from the left again.",
    codeWalkthrough: [
      "We read n to control the size of our patterns.",
      "Rectangle: outer loop i goes from 1 to n, controlling which row we are on.",
      "Inner loop j goes from 1 to n, printing one star per column.",
      "After the inner loop finishes a row, cout << endl moves to the next line.",
      "Right triangle: the inner loop goes from 1 to i (not n), so row 1 gets 1 star, row 2 gets 2, etc.",
      "This is the key idea — the inner loop limit depends on the outer loop variable i.",
      "Multiplication table: inner loop prints i * j, which gives the product of the row and column.",
      "The \\t prints a tab character to align the columns neatly.",
      "For n = 4, the rectangle has 4 × 4 = 16 stars, the triangle has 1+2+3+4 = 10 stars.",
      "The total iterations grow as n², so large n values will take noticeably longer."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 4;
    // Print right triangle
    for (int i = 1; i <= n; i++) {
        for (int i = 1; i <= i; i++) {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}`,
      hint: "Look very carefully at the variable names in the outer loop and the inner loop. Are they the same? What happens when the inner loop modifies a variable that the outer loop is also using?",
      answer: "The bug is using the same variable name 'i' for both the outer and inner loop. The inner loop declaration 'int i = 1' shadows the outer i, and the condition 'i <= i' is always true (a variable is always equal to itself), creating an infinite loop. The fix: change the inner loop variable to j: for(int j = 1; j <= i; j++)."
    },
    difficulty: "beginner",
    prereqs: [12]
  },
  // =============================================
  // LESSON 14: Arrays — A Row of Boxes
  // =============================================
  {
    id: 14,
    title: "Arrays — A Row of Boxes",
    subtitle: "Learn how to store many values in one variable using arrays — the most important data structure in CP!",
    analogy: "An array is like a row of mailboxes in an apartment building. Each mailbox has a number on it (starting from 0), and each one can hold one letter (a value). If you want to read the letter in mailbox #3, you just go straight to box number 3. You don't have to open all the other boxes first!",
    points: [
      {
        t: "What is an Array?",
        d: "An array is a way to store many values of the same type in a single variable. Instead of creating 100 separate variables like a1, a2, a3... you create one array that holds all 100 values. Think of it as a row of boxes — each box has a number (called an index) and holds one value."
      },
      {
        t: "Declaring an Array",
        d: "In C++, you declare an array like this: int arr[5]; — this creates 5 boxes that can each hold an integer. You can also declare with initial values: int arr[5] = {10, 20, 30, 40, 50}; The number in the square brackets tells C++ how many boxes to create."
      },
      {
        t: "Indexing Starts at 0",
        d: "The first box in an array is box number 0, not box number 1! This is super important. So if you have int arr[5] = {10, 20, 30, 40, 50}, then arr[0] is 10, arr[1] is 20, arr[2] is 30, arr[3] is 40, and arr[4] is 50. The last index is always size minus 1."
      },
      {
        t: "Reading an Array with a Loop",
        d: "In CP, you almost always read array values from the user using a for loop. First read n (how many values), then loop from i = 0 to i < n and read each arr[i]. This is one of the most common patterns you will write in every single contest!"
      },
      {
        t: "Printing an Array",
        d: "To print all values in an array, use a for loop from 0 to n-1 and print each element. You can print them on one line separated by spaces: cout << arr[i] << ' '; Or each on a new line: cout << arr[i] << '\\n'; Choosing the right format depends on the problem."
      },
      {
        t: "Accessing Individual Elements",
        d: "You can read or change any box at any time using its index. arr[2] = 99; changes the third box to 99. You can also use arr[i] where i is a variable — this is what makes arrays so powerful with loops. The computer can jump to any box instantly!"
      },
      {
        t: "Array Size Limits",
        d: "In CP, arrays can be very large — sometimes up to 1,000,000 elements or more. When you need a big array, declare it outside main() (as a global variable) so it doesn't cause a stack overflow. Inside main(), arrays bigger than about 100,000 can crash your program."
      },
      {
        t: "Common Beginner Mistake",
        d: "The #1 beginner mistake is going out of bounds — trying to access arr[5] when the array only has 5 elements (indices 0-4). This is called 'array index out of bounds' and can cause wrong answers or crashes. Always remember: if the array has n elements, valid indices are 0 to n-1."
      }
    ],
    whatIs: "An array is a data structure that stores a fixed-size list of elements of the same type. Each element is accessed by its position number (index), starting from 0. Arrays are the foundation of almost every CP problem.",
    realWorld: "Arrays are everywhere! A class roster is an array of student names. A playlist is an array of songs. A scoreboard is an array of scores. In CP, nearly every problem gives you an array of numbers and asks you to do something with them — find the biggest, sort them, count something, etc.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;  // How many numbers?
    
    int arr[n];  // Create an array of n boxes
    
    // Read n numbers into the array
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    // Print the array in reverse order
    cout << "Reversed: ";
    for (int i = n - 1; i >= 0; i--) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // Access a specific element
    cout << "First element: " << arr[0] << endl;
    cout << "Last element: " << arr[n - 1] << endl;
    
    return 0;
}
// Input:  5
//         10 20 30 40 50
// Output: Reversed: 50 40 30 20 10
//         First element: 10
//         Last element: 50`,
    funFact: "The reason array indices start at 0 (not 1) goes back to the 1960s! The index actually represents the 'offset' — how far the element is from the start. The first element is 0 steps from the start, the second is 1 step, and so on. It is more efficient for the computer this way!",
    quiz: [
      {
        q: "If int arr[4] = {5, 10, 15, 20}; what is arr[2]?",
        opts: ["5", "10", "15", "20"],
        ans: 2
      },
      {
        q: "What is the valid index range for an array of size 6?",
        opts: ["1 to 6", "0 to 6", "0 to 5", "1 to 5"],
        ans: 2
      },
      {
        q: "Which loop correctly reads n numbers into an array?",
        opts: [
          "for (int i = 1; i <= n; i++) cin >> arr[i];",
          "for (int i = 0; i < n; i++) cin >> arr[i];",
          "for (int i = 0; i <= n; i++) cin >> arr[i];",
          "for (int i = 1; i < n; i++) cin >> arr[i];"
        ],
        ans: 1
      },
      {
        q: "Why should large arrays be declared globally (outside main)?",
        opts: [
          "Global arrays are faster to access",
          "Local large arrays can cause stack overflow",
          "Global arrays can hold more data types",
          "It is just a coding style preference"
        ],
        ans: 1
      }
    ],
    challenge: "Read an array of n numbers. Print the array forward, then backward, then print only the elements at even indices (0, 2, 4, ...). This will help you master array traversal!",
    resources: [
      {
        type: "video",
        title: "Arrays in C++ — Complete Tutorial",
        url: "https://www.youtube.com/watch?v=T76E09hnEuo",
        source: "The Cherno"
      },
      {
        type: "article",
        title: "Arrays — USACO Guide",
        url: "https://usaco.guide/bronze/intro-ds",
        source: "USACO Guide"
      },
      {
        type: "practice",
        title: "Array Practice Problems",
        url: "https://codeforces.com/problemset?tags=implementation",
        source: "Codeforces"
      }
    ],
    eli5: "Imagine you have a row of cubbies in your classroom, numbered 0, 1, 2, 3, and 4. Each cubby can hold one toy. An array is just like those cubbies! You can put a toy in cubby number 2, or look at what is in cubby number 4. The cool thing is you can quickly go to any cubby without checking all the others first!",
    codeWalkthrough: [
      "We include bits/stdc++.h to get all the tools we need.",
      "We read n — how many numbers the user will give us.",
      "int arr[n] creates an array with n boxes, numbered 0 to n-1.",
      "The first for loop reads numbers from the user into each box: arr[0], arr[1], ... arr[n-1].",
      "The second for loop prints in reverse — it starts at n-1 (the last box) and goes down to 0.",
      "arr[0] always gives us the first element, arr[n-1] always gives us the last element.",
      "We use endl or '\\n' to move to the next line after printing."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    
    for (int i = 1; i <= n; i++) {
        cin >> arr[i];
    }
    
    for (int i = 1; i <= n; i++) {
        cout << arr[i] << " ";
    }
    
    return 0;
}
// Input: 3
//        10 20 30
// Expected: 10 20 30
// But this code has a sneaky bug!`,
      hint: "Look at where the loop starts and ends. Arrays in C++ start at index 0, not 1. And what happens when i equals n?",
      answer: "The bug is that the loops go from i=1 to i<=n, but array indices go from 0 to n-1! When i=n, arr[n] is out of bounds — that box doesn't exist! The fix is to change both loops to 'for (int i = 0; i < n; i++)'. This is the #1 most common beginner bug with arrays."
    },
    difficulty: "beginner",
    prereqs: [12]
  },
  // =============================================
  // LESSON 15: Array Operations — Working with Your List
  // =============================================
  {
    id: 15,
    title: "Array Operations — Working with Your List",
    subtitle: "Learn the essential array patterns: sum, average, and counting — skills you will use in every contest!",
    analogy: "Imagine you are a teacher collecting test scores from your class. You write all the scores in a list (that is your array). Then you add them all up to get the total (sum), divide by the number of students to get the average, and count how many students scored above 90 (counting). These three operations are the bread and butter of array problems!",
    points: [
      {
        t: "The Accumulator Pattern",
        d: "The accumulator pattern is the most important array pattern in CP. You start with a variable (like sum = 0), then loop through the array and add each element to it. By the end of the loop, you have the total sum. This pattern works for adding, multiplying, counting, and more!"
      },
      {
        t: "Finding the Sum",
        d: "To find the sum of an array: create a variable sum = 0, then loop through every element and do sum += arr[i]. After the loop, sum holds the total. Use long long instead of int if the sum could be larger than 2 billion (which happens a lot in CP!)."
      },
      {
        t: "Finding the Average",
        d: "The average is just the sum divided by the count. But be careful with integer division! If sum=7 and n=2, then 7/2 = 3 in integer math (not 3.5). To get the decimal answer, use (double)sum / n. Many CP problems ask for the integer average though, so read the problem carefully."
      },
      {
        t: "Counting Elements",
        d: "Counting is another accumulator pattern. Start with count = 0, then loop through the array and do count++ whenever an element meets your condition. How many numbers are positive? How many are even? How many are greater than 50? All use this same counting pattern."
      },
      {
        t: "Finding Frequency",
        d: "Sometimes you need to count how many times a specific value appears. This is called frequency counting. Loop through the array and increment a counter whenever arr[i] equals the target value. In more advanced problems, you will use a frequency array to count all values at once."
      },
      {
        t: "Prefix Sum (Bonus Concept)",
        d: "A prefix sum array stores the running total at each position. prefix[0] = arr[0], prefix[1] = arr[0]+arr[1], etc. This lets you find the sum of any range in O(1) time! It is a key technique in CP that turns slow solutions into fast ones."
      },
      {
        t: "Using long long for Safety",
        d: "In CP, always think about overflow. If n can be 100,000 and each element can be 1,000,000, then the sum can be 100,000,000,000 — way too big for int (max ~2 billion). Always use long long for sums, products, and anything that could get big. Better safe than sorry!"
      }
    ],
    whatIs: "Array operations are the basic computations you perform on arrays — summing elements, finding averages, and counting elements that match certain conditions. These patterns form the foundation of nearly every competitive programming problem.",
    realWorld: "When a weather app shows the 'average temperature this week,' it sums all 7 daily temperatures and divides by 7. When a teacher calculates how many students passed, they count scores above the passing grade. These are array operations happening in real apps every day!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    // 1. Find the sum
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    cout << "Sum: " << sum << endl;
    
    // 2. Find the average
    double avg = (double)sum / n;
    cout << "Average: " << avg << endl;
    
    // 3. Count positive numbers
    int positiveCount = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        }
    }
    cout << "Positive numbers: " << positiveCount << endl;
    
    // 4. Count even numbers
    int evenCount = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            evenCount++;
        }
    }
    cout << "Even numbers: " << evenCount << endl;
    
    return 0;
}
// Input:  5
//         3 -1 4 -2 7
// Output: Sum: 11
//         Average: 2.2
//         Positive numbers: 3
//         Even numbers: 2`,
    funFact: "The accumulator pattern (starting at 0 and adding up) was one of the first things ever done by computers! The very first electronic computers in the 1940s were literally built to add up long lists of numbers for things like artillery tables and census data. You are using a pattern that is older than your grandparents!",
    quiz: [
      {
        q: "What should the initial value of 'sum' be before accumulating array values?",
        opts: ["1", "The first element", "0", "-1"],
        ans: 2
      },
      {
        q: "Why should you use long long instead of int for the sum?",
        opts: [
          "long long is faster than int",
          "int cannot store negative numbers",
          "The sum might exceed 2 billion, which overflows int",
          "long long uses less memory"
        ],
        ans: 2
      },
      {
        q: "What does (double)sum / n do differently than sum / n?",
        opts: [
          "It makes the division faster",
          "It gives a decimal result instead of truncating",
          "It rounds up to the nearest integer",
          "There is no difference"
        ],
        ans: 1
      },
      {
        q: "To count how many elements are divisible by 3, which condition do you check?",
        opts: [
          "arr[i] / 3 == 0",
          "arr[i] % 3 == 0",
          "arr[i] * 3 == 0",
          "arr[i] - 3 == 0"
        ],
        ans: 1
      }
    ],
    challenge: "Read an array of n integers. Find and print: (1) the sum of all elements, (2) the average (with 2 decimal places), (3) the count of negative numbers, (4) the count of numbers divisible by 5. Try to do it all in one pass through the array!",
    resources: [
      {
        type: "video",
        title: "Array Sum and Average — C++ Tutorial",
        url: "https://www.youtube.com/watch?v=HAn4xgQY8gk",
        source: "Apna College"
      },
      {
        type: "article",
        title: "Prefix Sums — USACO Guide",
        url: "https://usaco.guide/silver/prefix-sums",
        source: "USACO Guide"
      },
      {
        type: "practice",
        title: "Array Operations Practice",
        url: "https://codeforces.com/problemset?tags=implementation&order=BY_SOLVED_DESC",
        source: "Codeforces"
      }
    ],
    eli5: "Imagine you have a jar of marbles in different colors. To find the total, you count every marble one by one — that is a sum! To find the average, you share them equally among your friends and see how many each person gets. To count the blue ones, you just pick out every blue marble and count only those. Arrays work the same way!",
    codeWalkthrough: [
      "We read n numbers into an array — our standard input pattern.",
      "For the sum, we start with sum = 0 (using long long for safety) and add each element.",
      "For the average, we cast sum to double before dividing so we get decimal places.",
      "For counting positives, we start with count = 0 and increment whenever arr[i] > 0.",
      "For counting evens, we check arr[i] % 2 == 0 — the modulo trick for checking divisibility.",
      "Each operation uses the same loop pattern — only the action inside changes.",
      "This is the beauty of the accumulator pattern: one pattern, many uses!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    cout << "Average: " << sum / n << endl;
    
    return 0;
}
// Input: 4
//        3 4 3 4
// Expected Average: 3.5
// Actual Output: Average: 3`,
      hint: "What type is 'sum'? What type is 'n'? What happens when you divide an integer by an integer in C++?",
      answer: "The bug is integer division! Both sum (14) and n (4) are int, so 14/4 = 3 (the decimal part is thrown away). The fix is to cast to double: (double)sum / n. This gives 3.5. Also, sum should be long long for safety in bigger inputs!"
    },
    difficulty: "beginner",
    prereqs: [14]
  },
  // =============================================
  // LESSON 16: Finding Min, Max, and Searching
  // =============================================
  {
    id: 16,
    title: "Finding Min, Max, and Searching",
    subtitle: "Learn to find the smallest, largest, and search for values — three skills every CP contestant needs!",
    analogy: "Imagine you are at a candy store with a row of price tags. To find the cheapest candy (min), you look at every price tag and remember the lowest one you have seen so far. To find the most expensive (max), you remember the highest. To search for a candy that costs exactly $5, you check each tag until you find it. That is exactly how min, max, and search work on arrays!",
    points: [
      {
        t: "Finding the Maximum",
        d: "To find the largest value in an array, start by assuming the first element is the maximum: maxVal = arr[0]. Then loop through the rest and whenever you find something bigger, update maxVal. After the loop, maxVal holds the biggest value. This is called the 'running maximum' technique."
      },
      {
        t: "Finding the Minimum",
        d: "Finding the minimum is the exact same pattern as maximum, but you check for smaller values instead. Start with minVal = arr[0], then loop and update whenever arr[i] < minVal. You can also initialize with a very large number like INT_MAX from <climits>."
      },
      {
        t: "Finding the Position (Index) of Min/Max",
        d: "Sometimes the problem asks 'where' the maximum is, not 'what' it is. To track the position, keep a variable like maxIdx = 0, and whenever you update the max value, also update maxIdx = i. This tells you which box in the array holds the biggest value."
      },
      {
        t: "Linear Search",
        d: "Linear search means checking every element one by one to find a target value. Loop through the array and if arr[i] == target, you found it! This takes O(n) time. For unsorted arrays, linear search is your only option. For sorted arrays, binary search is faster (we will learn that later)."
      },
      {
        t: "Counting Occurrences",
        d: "To count how many times a value appears, combine linear search with counting. Loop through the array and increment a counter whenever arr[i] == target. This is a very common CP pattern — many problems ask you to count how many elements equal a specific value."
      },
      {
        t: "Using Built-in Functions",
        d: "C++ has built-in functions that make life easier. *min_element(arr, arr+n) finds the minimum, *max_element(arr, arr+n) finds the maximum. The count() function from <algorithm> counts occurrences. But in CP, knowing how to write these yourself is important for customization!"
      },
      {
        t: "Second Largest Element",
        d: "A classic CP problem: find the second largest. One way: find the max first, then find the max again ignoring the first max. A better way: track both first and second as you scan. If arr[i] > first, second becomes first and first becomes arr[i]. If arr[i] > second and arr[i] != first, update second."
      }
    ],
    whatIs: "Finding min, max, and searching are fundamental array operations. Min/max find the extreme values by scanning through all elements and tracking the best seen so far. Linear search checks each element until a match is found.",
    realWorld: "Your phone's weather app finds the week's highest and lowest temperatures using min/max. When you search for a contact by name, your phone does a search through a list. When a game shows 'High Score,' it found the maximum of all stored scores. These operations are everywhere!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    // Find maximum and its position
    int maxVal = arr[0], maxIdx = 0;
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
            maxIdx = i;
        }
    }
    cout << "Max: " << maxVal << " at index " << maxIdx << endl;
    
    // Find minimum
    int minVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    cout << "Min: " << minVal << endl;
    
    // Search for a value
    int target;
    cin >> target;
    int foundIdx = -1;
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            foundIdx = i;
            break;  // Found it, stop searching!
        }
    }
    
    if (foundIdx != -1) {
        cout << target << " found at index " << foundIdx << endl;
    } else {
        cout << target << " not found!" << endl;
    }
    
    return 0;
}
// Input:  5
//         3 7 1 9 4
//         7
// Output: Max: 9 at index 3
//         Min: 1
//         7 found at index 1`,
    funFact: "There is a mathematical proof that you need at least n-1 comparisons to find the minimum (or maximum) of n elements. Nobody can do it with fewer comparisons! But here is a cool trick: you can find BOTH the min AND max together using only about 1.5n comparisons instead of 2n by comparing pairs of elements first.",
    quiz: [
      {
        q: "When finding the maximum, what should maxVal be initialized to?",
        opts: [
          "0",
          "The last element arr[n-1]",
          "The first element arr[0]",
          "The largest possible integer"
        ],
        ans: 2
      },
      {
        q: "In linear search, what does 'break' do when we find the target?",
        opts: [
          "It deletes the element from the array",
          "It stops the loop immediately since we found what we need",
          "It moves to the next element",
          "It prints the result"
        ],
        ans: 1
      },
      {
        q: "What is the time complexity of finding the minimum in an array of n elements?",
        opts: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        ans: 2
      },
      {
        q: "If no element matches in linear search, what value does foundIdx hold?",
        opts: ["0", "n", "-1", "The last index"],
        ans: 2
      }
    ],
    challenge: "Read an array of n integers. Find and print: (1) the maximum value, (2) the minimum value, (3) the difference between max and min (called the range), (4) how many times the maximum value appears in the array. Bonus: find the second largest distinct value!",
    resources: [
      {
        type: "video",
        title: "Min, Max, and Linear Search in C++",
        url: "https://www.youtube.com/watch?v=KXhzI_YkIBM",
        source: "Abdul Bari"
      },
      {
        type: "article",
        title: "Searching Algorithms — GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/searching-algorithms/",
        source: "GeeksforGeeks"
      },
      {
        type: "practice",
        title: "Easy Searching Problems",
        url: "https://codeforces.com/problemset?tags=brute+force&order=BY_SOLVED_DESC",
        source: "Codeforces"
      }
    ],
    eli5: "Imagine your mom asks you to find the tallest person in your class. You stand next to the first kid and say 'you are the tallest so far.' Then you go to the next kid — if they are taller, they become the new tallest. You keep going until you have checked everyone. The last person standing as 'tallest' really is the tallest! That is how finding the maximum works.",
    codeWalkthrough: [
      "We read the array using our standard input pattern.",
      "For maximum: we assume arr[0] is the max, then check every other element starting from index 1.",
      "If arr[i] > maxVal, we update both maxVal and maxIdx to remember the new champion.",
      "Finding minimum is the same but we check arr[i] < minVal instead.",
      "For search: we set foundIdx = -1 (meaning 'not found yet').",
      "We loop and check each element. When we find the target, we save the index and break.",
      "After the loop, if foundIdx is still -1, the target was not in the array."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int maxVal = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    cout << "Max: " << maxVal << endl;
    
    return 0;
}
// Input: 4
//        -5 -3 -8 -1
// Expected: Max: -1
// Actual Output: Max: 0`,
      hint: "Look at the initial value of maxVal. What if all the numbers in the array are negative?",
      answer: "The bug is initializing maxVal to 0! If all elements are negative, none of them are greater than 0, so maxVal stays at 0 — but 0 is not even in the array! The fix is to initialize maxVal = arr[0] (the first actual element) and start the loop from i = 1. This way, the max is always a real element from the array."
    },
    difficulty: "beginner",
    prereqs: [15]
  },
  // =============================================
  // LESSON 17: Characters and Strings
  // =============================================
  {
    id: 17,
    title: "Characters and Strings",
    subtitle: "Learn to work with letters and words — unlocking a whole new category of CP problems!",
    analogy: "If numbers are like math class, characters and strings are like English class! A character (char) is a single letter, like one Scrabble tile. A string is a word or sentence — a row of Scrabble tiles placed together. Just like you can look at the 3rd tile in a word, you can access the 3rd character in a string using an index!",
    points: [
      {
        t: "What is a Character (char)?",
        d: "A char in C++ stores a single letter, digit, or symbol. You write it with single quotes: char c = 'A'; Characters are actually stored as numbers using the ASCII table. 'A' is 65, 'B' is 66, 'a' is 97, '0' is 48. You can do math with characters! 'A' + 1 gives 'B'."
      },
      {
        t: "What is a String?",
        d: "A string is a sequence of characters — basically a word or sentence. In C++, use the string type: string s = \"hello\"; Strings use double quotes (not single). You can read a string with cin >> s (reads one word) or getline(cin, s) (reads a whole line including spaces)."
      },
      {
        t: "String Length and Indexing",
        d: "s.length() or s.size() tells you how many characters are in the string. You can access individual characters with s[0], s[1], etc., just like an array! The first character is s[0] and the last is s[s.length()-1]. Strings are basically arrays of characters."
      },
      {
        t: "The ASCII Table",
        d: "ASCII is how computers store characters as numbers. Key ranges: 'A' to 'Z' are 65-90, 'a' to 'z' are 97-122, '0' to '9' are 48-57. The difference between uppercase and lowercase is always 32. So 'a' - 'A' = 32. This is super useful for converting between cases!"
      },
      {
        t: "Useful Character Functions",
        d: "C++ has handy functions for characters: islower(c) checks if lowercase, isupper(c) checks uppercase, isdigit(c) checks if it is a digit, isalpha(c) checks if it is a letter. toupper(c) converts to uppercase, tolower(c) converts to lowercase. These save you from memorizing ASCII values!"
      },
      {
        t: "Looping Through a String",
        d: "You can loop through every character in a string just like an array: for(int i = 0; i < s.length(); i++) works great. Or use a range-based for loop: for(char c : s) which gives you each character one at a time. This is how you process strings character by character."
      },
      {
        t: "String Concatenation and Comparison",
        d: "You can join strings with +: string result = \"hello\" + \" \" + \"world\"; You can compare strings with ==, <, >. Strings are compared letter by letter (like dictionary order). \"apple\" < \"banana\" is true because 'a' comes before 'b'. This is called lexicographic comparison."
      },
      {
        t: "Reading Strings with Spaces",
        d: "cin >> s only reads until the first space. To read a whole line (with spaces), use getline(cin, s). Warning: if you use cin >> before getline, you need to add cin.ignore() in between to eat the leftover newline character. This is a common gotcha!"
      }
    ],
    whatIs: "Characters (char) are single letters, digits, or symbols stored as numbers using ASCII encoding. Strings are sequences of characters that represent words or text. In C++, strings can be accessed character-by-character using array-style indexing.",
    realWorld: "Every app that deals with text uses strings — search engines finding words in web pages, spell checkers comparing your typing against a dictionary, password validators checking if you used uppercase and digits. Even emoji are characters with special numeric codes!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;  // Read one word
    
    cout << "Length: " << s.length() << endl;
    cout << "First char: " << s[0] << endl;
    cout << "Last char: " << s[s.length() - 1] << endl;
    
    // Count uppercase and lowercase letters
    int upper = 0, lower = 0, digits = 0;
    for (char c : s) {
        if (isupper(c)) upper++;
        else if (islower(c)) lower++;
        else if (isdigit(c)) digits++;
    }
    
    cout << "Uppercase: " << upper << endl;
    cout << "Lowercase: " << lower << endl;
    cout << "Digits: " << digits << endl;
    
    // Convert to uppercase
    string upperStr = s;
    for (int i = 0; i < upperStr.length(); i++) {
        upperStr[i] = toupper(upperStr[i]);
    }
    cout << "Uppercase version: " << upperStr << endl;
    
    return 0;
}
// Input:  Hello123World
// Output: Length: 13
//         First char: H
//         Last char: d
//         Uppercase: 2
//         Lowercase: 8
//         Digits: 3
//         Uppercase version: HELLO123WORLD`,
    funFact: "ASCII stands for 'American Standard Code for Information Interchange' and was created in 1963. The original ASCII only had 128 characters — just English letters, numbers, and basic symbols. Today, Unicode has over 150,000 characters covering every language on Earth, including ancient Egyptian hieroglyphics and yes, all those emoji you love!",
    quiz: [
      {
        q: "What is the ASCII value of 'A'?",
        opts: ["97", "65", "48", "90"],
        ans: 1
      },
      {
        q: "How do you read a full line including spaces into a string?",
        opts: [
          "cin >> s;",
          "scanf(s);",
          "getline(cin, s);",
          "cin.read(s);"
        ],
        ans: 2
      },
      {
        q: "What does s[s.length()-1] give you?",
        opts: [
          "The first character",
          "The length of the string",
          "An error",
          "The last character"
        ],
        ans: 3
      },
      {
        q: "What is the result of 'a' - 'A' in C++?",
        opts: ["0", "32", "-32", "1"],
        ans: 1
      }
    ],
    challenge: "Read a string and print: (1) the number of vowels (a, e, i, o, u — both upper and lowercase), (2) the number of consonants, (3) the string with the first letter of each word capitalized (if you are feeling adventurous!). Hint: use tolower() to normalize before checking vowels.",
    resources: [
      {
        type: "video",
        title: "Strings in C++ — Full Course",
        url: "https://www.youtube.com/watch?v=Aagf4GiHpVg",
        source: "CodeWithHarry"
      },
      {
        type: "article",
        title: "C++ Strings — cppreference",
        url: "https://en.cppreference.com/w/cpp/string/basic_string",
        source: "cppreference"
      },
      {
        type: "practice",
        title: "String Problems for Beginners",
        url: "https://codeforces.com/problemset?tags=strings&order=BY_SOLVED_DESC",
        source: "Codeforces"
      }
    ],
    eli5: "Think of a string like a friendship bracelet made of letter beads. Each bead is one character. You can count the beads (length), look at bead number 3 (indexing), or check if a bead is a vowel. You can even make a new bracelet by changing all the beads to uppercase versions — it is like making the bracelet in ALL CAPS!",
    codeWalkthrough: [
      "We read a single word into string s using cin >>.",
      "s.length() tells us how many characters are in the string.",
      "s[0] is the first character, s[s.length()-1] is the last — just like arrays!",
      "We use a range-based for loop (for char c : s) to check each character.",
      "isupper(), islower(), isdigit() are built-in functions that check character types.",
      "To convert the string to uppercase, we loop through and apply toupper() to each character.",
      "toupper() converts a lowercase letter to uppercase. If it is already uppercase or a digit, it stays the same."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    string s;
    getline(cin, s);
    
    cout << "You entered: " << s << endl;
    cout << "Length: " << s.length() << endl;
    
    return 0;
}
// Input: 3
//        Hello World
// Expected: You entered: Hello World
//           Length: 11
// Actual: You entered: 
//         Length: 0`,
      hint: "When you use cin >> n, it reads the number but leaves the newline character in the input buffer. What does getline read first?",
      answer: "The bug is the missing cin.ignore() between cin >> n and getline()! After cin >> n reads '3', the newline character '\\n' is still in the input. getline() then reads that leftover newline as an empty string! The fix is to add cin.ignore(); right after cin >> n to consume the leftover newline before getline reads the actual string."
    },
    difficulty: "beginner",
    prereqs: [14]
  },
  // =============================================
  // LESSON 18: String Problems in Contests
  // =============================================
  {
    id: 18,
    title: "String Problems in Contests",
    subtitle: "Master the classic string patterns that show up in CP contests again and again!",
    analogy: "String problems in CP are like word games and puzzles. Is 'racecar' the same forwards and backwards? (palindrome check!) Can you count the vowels in a sentence? (character counting!) Can you reverse a word? These are games you played in school — now you will solve them with code at lightning speed!",
    points: [
      {
        t: "Palindrome Check",
        d: "A palindrome reads the same forwards and backwards, like 'racecar' or 'madam'. To check: compare s[0] with s[n-1], s[1] with s[n-2], etc. If all pairs match, it is a palindrome. A simpler way: reverse the string and check if it equals the original. In C++: string rev = s; reverse(rev.begin(), rev.end()); return s == rev;"
      },
      {
        t: "Reversing a String",
        d: "To reverse a string, you can use the built-in reverse(s.begin(), s.end()) function which reverses in place. Or do it manually: swap characters from both ends moving inward — swap s[0] with s[n-1], s[1] with s[n-2], etc. You can also build a new reversed string by looping from the end to the beginning."
      },
      {
        t: "Counting Vowels and Consonants",
        d: "A very common problem pattern: loop through the string, convert each character to lowercase, then check if it is a, e, i, o, or u. One clean way: create a string vowels = \"aeiou\" and use vowels.find(c) != string::npos. Count everything else (that is a letter) as a consonant."
      },
      {
        t: "Frequency Counting with Arrays",
        d: "To count how often each letter appears, create an array freq[26] = {0}. For each character c, do freq[c - 'a']++. This maps 'a' to index 0, 'b' to index 1, etc. This technique is used in tons of CP problems — anagram checking, finding the most common letter, checking if two strings have the same letters."
      },
      {
        t: "Checking for Anagrams",
        d: "Two strings are anagrams if they have the same letters in different order — like 'listen' and 'silent'. Method 1: sort both strings and compare. Method 2: count letter frequencies for both and compare the frequency arrays. Method 2 is faster (O(n) vs O(n log n))."
      },
      {
        t: "Substrings",
        d: "s.substr(start, length) extracts a piece of the string. s.substr(2, 3) takes 3 characters starting at index 2. s.find(\"abc\") returns the position where 'abc' first appears (or string::npos if not found). These are essential for pattern matching problems in CP."
      },
      {
        t: "Common Contest Patterns",
        d: "String problems you will see over and over: (1) Count characters matching a condition. (2) Transform the string (flip case, remove vowels, etc.). (3) Check a property (palindrome, balanced brackets). (4) Compare two strings. (5) Build a new string from an old one. Master these five patterns and you can solve most beginner string problems!"
      }
    ],
    whatIs: "String problems in competitive programming involve manipulating and analyzing text data. Common tasks include checking palindromes, reversing strings, counting character frequencies, finding anagrams, and extracting substrings. These are among the most popular problem types in beginner contests.",
    realWorld: "DNA sequences in biology are analyzed as strings of A, T, G, C — scientists check for palindromic sequences that are important for gene editing. Spell checkers look for anagrams and similar words. Search engines break text into substrings to find matches. String algorithms power the internet!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    // 1. Check if palindrome
    string rev = s;
    reverse(rev.begin(), rev.end());
    if (s == rev) {
        cout << s << " is a palindrome!" << endl;
    } else {
        cout << s << " is NOT a palindrome." << endl;
    }
    
    // 2. Count vowels
    int vowels = 0;
    string vowelList = "aeiouAEIOU";
    for (char c : s) {
        if (vowelList.find(c) != string::npos) {
            vowels++;
        }
    }
    cout << "Vowels: " << vowels << endl;
    
    // 3. Frequency count
    int freq[26] = {0};
    for (char c : s) {
        if (isalpha(c)) {
            freq[tolower(c) - 'a']++;
        }
    }
    
    // Print most common letter
    int maxFreq = 0;
    char maxChar = 'a';
    for (int i = 0; i < 26; i++) {
        if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            maxChar = 'a' + i;
        }
    }
    cout << "Most common letter: " << maxChar << " (" << maxFreq << " times)" << endl;
    
    return 0;
}
// Input:  racecar
// Output: racecar is a palindrome!
//         Vowels: 3
//         Most common letter: r (2 times)`,
    funFact: "The word 'palindrome' itself comes from the Greek words 'palin' (again) and 'dromos' (way/direction). The longest palindrome in English is debated, but 'tattarrattat' was coined by James Joyce in the novel Ulysses — it is the sound of a knock on the door! In CP, palindrome problems appear in at least 30% of beginner contests.",
    quiz: [
      {
        q: "Which of these is a palindrome?",
        opts: ["hello", "world", "level", "code"],
        ans: 2
      },
      {
        q: "What does freq[c - 'a']++ do when c is 'c'?",
        opts: [
          "Increments freq[0]",
          "Increments freq[2]",
          "Increments freq[3]",
          "Increments freq[99]"
        ],
        ans: 1
      },
      {
        q: "To check if two strings are anagrams, which approach is fastest?",
        opts: [
          "Compare them character by character",
          "Sort both and compare",
          "Compare their frequency arrays",
          "Reverse both and compare"
        ],
        ans: 2
      },
      {
        q: "What does string::npos mean when returned by s.find()?",
        opts: [
          "The position is 0",
          "The substring was found at the end",
          "The substring was not found",
          "The string is empty"
        ],
        ans: 2
      }
    ],
    challenge: "Read a string and determine: (1) Is it a palindrome (ignoring case)? (2) Are there any duplicate characters? (3) What is the most frequent character? (4) Bonus: Read two strings and check if they are anagrams of each other!",
    resources: [
      {
        type: "video",
        title: "String Problems for CP — Complete Guide",
        url: "https://www.youtube.com/watch?v=LYQjXFd7Q0Q",
        source: "Luv"
      },
      {
        type: "article",
        title: "String Algorithms — CP-Algorithms",
        url: "https://cp-algorithms.com/string/string-hashing.html",
        source: "CP-Algorithms"
      },
      {
        type: "practice",
        title: "String Contest Problems",
        url: "https://codeforces.com/problemset?tags=strings&order=BY_SOLVED_DESC",
        source: "Codeforces"
      }
    ],
    eli5: "You know how 'racecar' spelled backward is still 'racecar'? That is a palindrome! It is like a word that looks the same in a mirror. And you know how 'listen' and 'silent' use the same letters, just mixed up? Those are anagrams — like scrambled words! String problems in coding contests are basically playing these word games, but your computer does the checking for you super fast!",
    codeWalkthrough: [
      "We read a word into string s.",
      "To check for palindrome: we make a copy, reverse it, and compare with the original.",
      "reverse(s.begin(), s.end()) is a built-in function that reverses a string in place.",
      "For counting vowels, we check if each character exists in our vowelList string.",
      "string::npos means 'not found' — so if find() does NOT return npos, the character IS a vowel.",
      "For frequency counting, we create an array of 26 zeros (one for each letter).",
      "freq[tolower(c) - 'a']++ maps each letter to an index (a=0, b=1, ..., z=25) and counts it.",
      "Finally, we scan the frequency array to find which letter appeared the most."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    // Check if palindrome
    bool isPalin = true;
    for (int i = 0; i < s.length(); i++) {
        if (s[i] != s[s.length() - i]) {
            isPalin = false;
            break;
        }
    }
    
    if (isPalin) cout << "Palindrome!" << endl;
    else cout << "Not a palindrome." << endl;
    
    return 0;
}
// Input: racecar
// Expected: Palindrome!
// Actual: Might crash or give wrong answer`,
      hint: "When i is 0, what index does s.length() - i give you? Is that a valid index?",
      answer: "The bug is s[s.length() - i]! When i=0, this accesses s[s.length()] which is out of bounds (valid indices are 0 to length-1). It should be s[s.length() - 1 - i]. Also, you only need to loop to s.length()/2 since you are comparing from both ends — checking the whole string compares each pair twice!"
    },
    difficulty: "intermediate",
    prereqs: [17]
  },
  // =============================================
  // LESSON 19: Functions — Your Helper Robots
  // =============================================
  {
    id: 19,
    title: "Functions — Your Helper Robots",
    subtitle: "Learn to create reusable blocks of code that make your programs cleaner and your CP solutions faster!",
    analogy: "A function is like a helper robot you build. You teach it one specific job — like 'calculate the area of a rectangle.' Every time you need that job done, you just call the robot by name and give it the inputs (length and width), and it gives you back the answer. You build it once, use it a thousand times!",
    points: [
      {
        t: "What is a Function?",
        d: "A function is a named block of code that does a specific job. Instead of writing the same code over and over, you put it in a function and call it whenever you need it. You have already used functions — cout, cin, sort, reverse, min, max. Now you will learn to create your own!"
      },
      {
        t: "Why Use Functions?",
        d: "Functions help in three big ways: (1) Reusability — write once, use many times. (2) Readability — your code is easier to understand when broken into named pieces. (3) Debugging — if something is wrong, you only fix it in one place. In CP, functions make your code shorter and less error-prone!"
      },
      {
        t: "Function Syntax",
        d: "A function has: return_type name(parameters) { body } For example: int add(int a, int b) { return a + b; } The return type says what the function gives back (int, double, string, bool). The parameters are the inputs. The return statement sends back the answer."
      },
      {
        t: "Calling a Function",
        d: "To use a function, you call it by name and pass the inputs: int result = add(3, 5); The values 3 and 5 are called 'arguments' — they are the actual values that fill in the parameters. The function runs, calculates the answer, and returns it to you."
      },
      {
        t: "Void Functions (No Return)",
        d: "Some functions just do something without giving back a value — like printing a message or modifying an array. These use 'void' as the return type: void sayHello() { cout << \"Hello!\"; } You call them without storing a result: sayHello(); No return statement needed."
      },
      {
        t: "Parameters vs Arguments",
        d: "Parameters are the variable names in the function definition (like placeholders). Arguments are the actual values you pass when calling. In int add(int a, int b), 'a' and 'b' are parameters. In add(3, 5), '3' and '5' are arguments. The arguments get copied into the parameters."
      },
      {
        t: "Functions Must Be Declared Before Use",
        d: "In C++, you must define a function before you call it. If you write your functions above main(), they will work fine. You can also write a 'prototype' at the top (just the header with a semicolon) and define the full function later. In CP, most people just write functions above main()."
      }
    ],
    whatIs: "A function is a self-contained block of code that performs a specific task. It takes inputs (parameters), processes them, and optionally returns an output. Functions are the building blocks of organized, reusable code — essential for writing clean competitive programming solutions.",
    realWorld: "Functions are everywhere in real life! A calculator app has functions for add, subtract, multiply, divide. A weather app has a function that converts Celsius to Fahrenheit. A game has a function that checks if two objects collide. Every app is built from hundreds of small functions working together.",
    code: `#include <bits/stdc++.h>
using namespace std;

// Function that returns the sum of two numbers
int add(int a, int b) {
    return a + b;
}

// Function that checks if a number is even
bool isEven(int n) {
    return n % 2 == 0;
}

// Function that returns the maximum of three numbers
int maxOfThree(int a, int b, int c) {
    return max(a, max(b, c));
}

// Void function — just prints, returns nothing
void printStars(int count) {
    for (int i = 0; i < count; i++) {
        cout << "*";
    }
    cout << endl;
}

int main() {
    // Calling our functions
    cout << "3 + 5 = " << add(3, 5) << endl;
    cout << "7 + 2 = " << add(7, 2) << endl;
    
    cout << "4 is even? " << (isEven(4) ? "Yes" : "No") << endl;
    cout << "7 is even? " << (isEven(7) ? "Yes" : "No") << endl;
    
    cout << "Max of 3, 7, 5: " << maxOfThree(3, 7, 5) << endl;
    
    printStars(5);   // Prints: *****
    printStars(10);  // Prints: **********
    
    return 0;
}
// Output: 3 + 5 = 8
//         7 + 2 = 9
//         4 is even? Yes
//         7 is even? No
//         Max of 3, 7, 5: 7
//         *****
//         **********`,
    funFact: "The concept of functions in programming was inspired by mathematical functions like f(x) = x + 1. But the idea of reusable 'subroutines' was first used by Ada Lovelace in the 1840s — she wrote the world's first algorithm for Charles Babbage's Analytical Engine, and she realized that parts of the algorithm could be reused. She was basically the inventor of functions!",
    quiz: [
      {
        q: "What does the return type 'void' mean?",
        opts: [
          "The function returns 0",
          "The function returns nothing",
          "The function takes no parameters",
          "The function is empty"
        ],
        ans: 1
      },
      {
        q: "In the function int add(int a, int b), what are 'a' and 'b' called?",
        opts: ["Arguments", "Variables", "Parameters", "Constants"],
        ans: 2
      },
      {
        q: "Where should functions be defined in a C++ CP solution?",
        opts: [
          "Inside main()",
          "After main()",
          "Before main() or with a prototype before main()",
          "In a separate file"
        ],
        ans: 2
      },
      {
        q: "What happens if a function with return type int does not have a return statement?",
        opts: [
          "It returns 0 automatically",
          "It causes a compile error",
          "It returns undefined/garbage value (undefined behavior)",
          "It returns -1"
        ],
        ans: 2
      }
    ],
    challenge: "Write the following functions: (1) bool isPositive(int n) — returns true if n > 0. (2) int factorial(int n) — returns n! using a loop. (3) void printArray(int arr[], int n) — prints array elements separated by spaces. Then use all three in main()!",
    resources: [
      {
        type: "video",
        title: "Functions in C++ — Complete Guide",
        url: "https://www.youtube.com/watch?v=V9zuox47zr0",
        source: "The Cherno"
      },
      {
        type: "article",
        title: "Functions — LearnCpp",
        url: "https://www.learncpp.com/cpp-tutorial/introduction-to-functions/",
        source: "LearnCpp"
      },
      {
        type: "practice",
        title: "Function Practice Problems",
        url: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
        source: "HackerRank"
      }
    ],
    eli5: "Imagine you have a magic recipe box. You label one box 'Make a Sandwich' and write the steps inside. Every time you are hungry, you don't have to remember all the steps — you just say 'Make a Sandwich!' and the recipe does the work. That is what a function is! You write the steps once, give it a name, and then just call it whenever you need it.",
    codeWalkthrough: [
      "int add(int a, int b) — takes two integers and returns their sum.",
      "bool isEven(int n) — returns true if n is divisible by 2, false otherwise.",
      "int maxOfThree — uses the built-in max() to find the biggest of three numbers.",
      "void printStars — prints stars but returns nothing (void means no return value).",
      "In main(), we call add(3, 5) — the 3 goes into 'a' and 5 goes into 'b'.",
      "isEven(4) returns true, isEven(7) returns false — the ternary operator prints Yes/No.",
      "Each function is defined BEFORE main() so the compiler knows about it when main() calls it."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int result = square(5);
    cout << "5 squared = " << result << endl;
    return 0;
}

int square(int n) {
    return n * n;
}`,
      hint: "Look at where the function 'square' is defined relative to where it is called. Does the compiler know about 'square' when main() tries to use it?",
      answer: "The bug is that the function 'square' is defined AFTER main(), but it is called inside main(). The compiler reads top to bottom, so when it sees square(5), it does not know what 'square' is yet! The fix is to either move the entire function definition above main(), or add a prototype 'int square(int n);' before main() to tell the compiler the function exists."
    },
    difficulty: "beginner",
    prereqs: [12]
  },
  // =============================================
  // LESSON 20: Problem Solving with Functions
  // =============================================
  {
    id: 20,
    title: "Problem Solving with Functions",
    subtitle: "Learn to break big problems into small pieces using functions — the key to solving harder CP problems!",
    analogy: "Solving a big CP problem is like building a LEGO spaceship. You don't build the whole thing at once. First you build the wings, then the cockpit, then the engines — each piece separately. Then you connect them all together. Functions are your LEGO pieces — small, reusable parts that you combine to solve the big problem!",
    points: [
      {
        t: "Breaking Problems Down",
        d: "The #1 skill in CP (and all of programming) is breaking a big problem into smaller parts. If a problem says 'find all prime numbers up to n,' that is really two sub-problems: (1) check if a single number is prime, (2) loop through all numbers and use that check. Make a function for sub-problem 1, then use it in a loop!"
      },
      {
        t: "The isPrime Function",
        d: "One of the most useful functions in CP: bool isPrime(int n). If n < 2, return false. Then check if any number from 2 to sqrt(n) divides n evenly. If yes, it is not prime. If nothing divides it, it is prime. This function runs in O(sqrt(n)) time and is used in countless CP problems."
      },
      {
        t: "GCD — Greatest Common Divisor",
        d: "GCD is the largest number that divides both a and b. The Euclidean algorithm finds it: gcd(a, b) = gcd(b, a%b), base case gcd(a, 0) = a. C++ has a built-in __gcd(a, b) function (and gcd() in C++17). GCD comes up in fraction problems, LCM calculation (lcm = a*b/gcd), and number theory."
      },
      {
        t: "Pass by Value vs Pass by Reference",
        d: "By default, C++ copies the argument into the parameter (pass by value). Changes inside the function don't affect the original variable. To modify the original, use pass by reference with &: void swap(int &a, int &b). The & means 'use the original variable, not a copy.' This is essential for functions that need to change their inputs."
      },
      {
        t: "Passing Arrays to Functions",
        d: "Arrays are always passed by reference in C++ — the function works with the original array, not a copy. Syntax: void sortArray(int arr[], int n). You must also pass the size since the function doesn't know it. This means any changes the function makes to the array affect the original!"
      },
      {
        t: "Recursive Functions (Preview)",
        d: "A recursive function is one that calls itself! For example, factorial: int fact(int n) { if (n <= 1) return 1; return n * fact(n-1); }. It keeps calling itself with smaller inputs until it hits the base case. Recursion is powerful but be careful — without a base case, it runs forever!"
      },
      {
        t: "Function Design Tips for CP",
        d: "Tips for writing good CP functions: (1) Each function should do ONE thing. (2) Give functions clear names like isPrime, findMax, countVowels. (3) Keep functions short — 5 to 15 lines is ideal. (4) Test each function independently before using it in your solution. (5) Common CP functions to have ready: isPrime, gcd, power, isPalindrome."
      },
      {
        t: "Building a Function Library",
        d: "Experienced CP contestants have a personal library of tested functions they can paste into any solution: isPrime, gcd, lcm, power with mod, binary search, etc. As you solve more problems, you will build your own library. This is like having a toolbox — the more tools you have, the faster you can solve problems!"
      }
    ],
    whatIs: "Problem solving with functions means breaking complex problems into smaller, manageable pieces. Each piece becomes a function that does one specific task. By combining these small functions, you can solve problems that would be overwhelming to tackle all at once.",
    realWorld: "Real software is built exactly this way! A banking app has functions like calculateInterest(), validatePassword(), transferFunds() — each does one job. Game developers have functions like checkCollision(), updateScore(), renderFrame(). Breaking problems into functions is how all professional software is built.",
    code: `#include <bits/stdc++.h>
using namespace std;

// Check if a number is prime
bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// GCD using Euclidean algorithm
int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// LCM using GCD
int lcm(int a, int b) {
    return a / gcd(a, b) * b;  // Divide first to avoid overflow!
}

// Swap using pass by reference
void mySwap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

// Count primes in an array — combining functions!
int countPrimes(int arr[], int n) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (isPrime(arr[i])) {
            count++;
        }
    }
    return count;
}

int main() {
    // Using isPrime
    for (int i = 1; i <= 20; i++) {
        if (isPrime(i)) {
            cout << i << " ";
        }
    }
    cout << endl;  // Output: 2 3 5 7 11 13 17 19
    
    // Using gcd and lcm
    cout << "GCD(12, 8) = " << gcd(12, 8) << endl;   // 4
    cout << "LCM(12, 8) = " << lcm(12, 8) << endl;   // 24
    
    // Using pass by reference
    int x = 10, y = 20;
    mySwap(x, y);
    cout << "After swap: x=" << x << " y=" << y << endl;  // x=20 y=10
    
    // Using countPrimes
    int arr[] = {4, 7, 10, 13, 15, 17, 20, 23};
    cout << "Primes in array: " << countPrimes(arr, 8) << endl;  // 4
    
    return 0;
}`,
    funFact: "The Euclidean algorithm for GCD is one of the oldest algorithms in the world — it was described by the Greek mathematician Euclid around 300 BC! That means this algorithm is over 2,300 years old and people still use it every single day in computer science. It is one of the most efficient algorithms ever created — hard to improve even with modern computers!",
    quiz: [
      {
        q: "Why does the isPrime function only check divisors up to sqrt(n)?",
        opts: [
          "To save memory",
          "Because if n has a factor larger than sqrt(n), it must also have one smaller than sqrt(n)",
          "Because prime numbers are always less than sqrt(n)",
          "It is just an approximation that is not always correct"
        ],
        ans: 1
      },
      {
        q: "What does the & symbol do in void swap(int &a, int &b)?",
        opts: [
          "It makes a and b constant",
          "It creates pointers to a and b",
          "It passes a and b by reference so changes affect the originals",
          "It doubles the values of a and b"
        ],
        ans: 2
      },
      {
        q: "What is gcd(48, 18)?",
        opts: ["2", "3", "6", "9"],
        ans: 2
      },
      {
        q: "Why do we calculate LCM as a / gcd(a,b) * b instead of a * b / gcd(a,b)?",
        opts: [
          "It gives a different answer",
          "It is faster to compute",
          "Dividing first prevents integer overflow",
          "There is no difference"
        ],
        ans: 2
      }
    ],
    challenge: "Write these functions and test them in main(): (1) bool isPalindrome(string s) — checks if a string is a palindrome. (2) int power(int base, int exp) — calculates base^exp using a loop. (3) int sumOfDigits(int n) — returns the sum of digits (e.g., 123 -> 6). Then solve: read a number and print whether it is prime, and print the sum of its digits!",
    resources: [
      {
        type: "video",
        title: "Problem Decomposition for CP",
        url: "https://www.youtube.com/watch?v=V7yih3bPCmk",
        source: "Errichto"
      },
      {
        type: "article",
        title: "Number Theory Basics for CP",
        url: "https://cp-algorithms.com/algebra/euclid-algorithm.html",
        source: "CP-Algorithms"
      },
      {
        type: "practice",
        title: "Number Theory Problems",
        url: "https://codeforces.com/problemset?tags=number+theory&order=BY_SOLVED_DESC",
        source: "Codeforces"
      }
    ],
    eli5: "Imagine you want to clean your whole room. That is a BIG job! But if you break it down — first pick up toys, then make the bed, then vacuum — each little job is easy. Functions are exactly that! Instead of writing one giant messy program, you make little helper functions like 'isPrime' and 'findMax,' and then you put them together to solve the big problem. Easy peasy!",
    codeWalkthrough: [
      "isPrime checks if n < 2 first (0 and 1 are not prime). Then it checks divisors from 2 to sqrt(n) using i*i <= n.",
      "If any divisor divides n evenly (n % i == 0), we immediately return false — it is not prime.",
      "If no divisor works, we return true — the number is prime!",
      "gcd uses the Euclidean algorithm: keep replacing (a, b) with (b, a%b) until b becomes 0. Then a is the GCD.",
      "lcm divides first (a / gcd) then multiplies by b to avoid overflow.",
      "mySwap uses & (pass by reference) so changing a and b inside the function changes x and y in main.",
      "countPrimes combines the array loop pattern with our isPrime function — this is the power of functions!",
      "In main, we use all our functions together to solve different problems with clean, readable code."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

bool isPrime(int n) {
    for (int i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    cout << isPrime(1) << endl;  // Should print 0 (false)
    cout << isPrime(2) << endl;  // Should print 1 (true)
    cout << isPrime(7) << endl;  // Should print 1 (true)
    cout << isPrime(1000000007) << endl;  // Should print 1, but takes forever!
    return 0;
}`,
      hint: "Two bugs! First: what does isPrime(1) return? Does the loop even run? Second: the loop goes up to n — for a billion, that is a billion iterations! How can you make it faster?",
      answer: "Bug 1: isPrime(1) returns true because the loop 'for i = 2; i < 1' never runs, so it skips to 'return true.' But 1 is NOT prime! Fix: add 'if (n < 2) return false;' at the start. Bug 2: The loop checks all numbers up to n, which is painfully slow for large numbers. Fix: change 'i < n' to 'i * i <= n' — you only need to check up to the square root of n. This makes isPrime(1000000007) finish instantly instead of taking minutes!"
    },
    difficulty: "intermediate",
    prereqs: [19]
  },
  // =============================================
  // LESSON 21: GCD and LCM — Number Best Friends
  // =============================================
  {
    id: 21,
    title: "GCD and LCM — Number Best Friends",
    subtitle: "Master the greatest common divisor and least common multiple — they show up EVERYWHERE in CP!",
    analogy: "Imagine you have 24 cookies and 36 candies, and you want to put them into identical gift bags with no leftovers. The biggest number of bags you can make is the GCD (Greatest Common Divisor) of 24 and 36, which is 12. You would put 2 cookies and 3 candies in each bag. Now imagine two gears — one turns every 8 seconds, another every 12 seconds. When do they first line up again? That is the LCM (Least Common Multiple) of 8 and 12, which is 24 seconds. GCD and LCM are like best friends — they always help each other!",
    points: [
      { t: "What is GCD?", d: "GCD (Greatest Common Divisor) is the largest number that divides both a and b with no remainder. GCD(12, 8) = 4 because 4 is the biggest number that goes into both 12 and 8 evenly. It is also called HCF (Highest Common Factor)." },
      { t: "Euclid's Algorithm", d: "An ancient and brilliant method: GCD(a, b) = GCD(b, a%b). Keep replacing until b becomes 0, then a is the GCD. Example: GCD(48,18) → GCD(18,12) → GCD(12,6) → GCD(6,0) = 6. This is incredibly fast — it works in O(log(min(a,b))) time!" },
      { t: "Coding Euclid's Algorithm", d: "Recursive: int gcd(int a, int b) { return b == 0 ? a : gcd(b, a%b); } Iterative: while(b) { int t = b; b = a%b; a = t; } return a; Both work great. The recursive version is shorter and elegant." },
      { t: "__gcd() built-in", d: "C++ has a built-in: __gcd(a, b) returns the GCD. With C++17, you can also use gcd(a, b) from <numeric>. These save time in contests! But it is important to understand the algorithm behind it." },
      { t: "What is LCM?", d: "LCM (Least Common Multiple) is the smallest number that both a and b divide into. LCM(4, 6) = 12 because 12 is the smallest number divisible by both 4 and 6. It answers: when do two repeating events first happen together?" },
      { t: "LCM formula using GCD", d: "LCM(a, b) = a * b / GCD(a, b). This beautiful formula connects LCM and GCD! But be careful with overflow: if a * b is too big for int or even long long, compute a / GCD(a,b) * b instead (divide first to keep numbers smaller)." },
      { t: "GCD of multiple numbers", d: "To find GCD of 3+ numbers, chain it: GCD(a, b, c) = GCD(GCD(a, b), c). Same for LCM. Loop through an array: result = arr[0]; for(int i=1; i<n; i++) result = gcd(result, arr[i]);" },
      { t: "Common CP applications", d: "GCD/LCM appear in: fraction simplification, number theory problems, finding repeating patterns, tile-fitting problems, gear/cycle problems, and many more. If a problem mentions 'divides evenly' or 'common', think GCD/LCM!" }
    ],
    whatIs: "GCD (Greatest Common Divisor) is the largest positive integer that divides two numbers without a remainder. LCM (Least Common Multiple) is the smallest positive integer that is divisible by both numbers. They are connected by the formula LCM(a,b) = a*b/GCD(a,b). Euclid's Algorithm computes GCD efficiently in O(log(min(a,b))) time.",
    realWorld: "GCD is used to simplify fractions (12/18 simplifies to 2/3 by dividing both by GCD=6), schedule events that repeat at different intervals, tile floors with the largest possible square tiles, and even in cryptography (RSA encryption uses GCD). LCM tells you when traffic lights will all be green at the same time, or when multiple bus routes will arrive simultaneously.",
    code: `#include <bits/stdc++.h>
using namespace std;

// GCD using Euclid's algorithm (recursive)
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

// LCM using GCD (divide first to avoid overflow)
long long lcm(int a, int b) {
    return (long long)a / gcd(a, b) * b;
}

int main() {
    int a, b;
    cin >> a >> b;
    
    cout << "GCD of " << a << " and " << b << ": " << gcd(a, b) << endl;
    cout << "LCM of " << a << " and " << b << ": " << lcm(a, b) << endl;
    
    // Simplify a fraction
    int num = a, den = b;
    int g = gcd(num, den);
    cout << "Fraction " << num << "/" << den << " simplifies to ";
    cout << num / g << "/" << den / g << endl;
    
    // GCD of an array
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    
    int arrayGCD = arr[0];
    long long arrayLCM = arr[0];
    for (int i = 1; i < n; i++) {
        arrayGCD = gcd(arrayGCD, arr[i]);
        arrayLCM = arrayLCM / gcd((int)arrayLCM, arr[i]) * arr[i];
    }
    
    cout << "GCD of array: " << arrayGCD << endl;
    cout << "LCM of array: " << arrayLCM << endl;
    
    return 0;
}`,
    funFact: "Euclid's Algorithm was described by the Greek mathematician Euclid around 300 BC in his book 'Elements'. It is one of the oldest algorithms still in use today — over 2,300 years old! And it is incredibly efficient: for two numbers up to 1 billion, it takes at most about 45 steps. The algorithm is a perfect example of how a simple idea can be incredibly powerful.",
    quiz: [
      { q: "What is GCD(24, 36)?", opts: ["6", "8", "12", "24"], ans: 2 },
      { q: "What is the formula for LCM using GCD?", opts: ["LCM = a + b - GCD", "LCM = a * b / GCD(a,b)", "LCM = a * b * GCD(a,b)", "LCM = GCD(a,b) / (a*b)"], ans: 1 },
      { q: "In Euclid's algorithm, when does the recursion stop?", opts: ["When a equals b", "When b becomes 0", "When a becomes 1", "After 10 steps"], ans: 1 },
      { q: "Why should we compute a/gcd(a,b)*b instead of a*b/gcd(a,b) for LCM?", opts: ["It is faster", "It gives a different answer", "It avoids integer overflow by dividing before multiplying", "There is no difference"], ans: 2 },
      { q: "What is GCD(7, 13)?", opts: ["1", "7", "13", "91"], ans: 0 }
    ],
    challenge: "Read two numbers a and b. Print their GCD and LCM. Then read a fraction (numerator and denominator) and print it in its simplest form. For example, if the fraction is 8/12, print 2/3. Bonus: read n numbers and find the GCD and LCM of all of them.",
    resources: [
      { type: "video", title: "Euclid's GCD Algorithm Explained", url: "https://www.youtube.com/results?search_query=euclid+gcd+algorithm+explained+c%2B%2B", source: "YouTube" },
      { type: "article", title: "GCD and LCM — CP Algorithms", url: "https://cp-algorithms.com/algebra/euclid-algorithm.html", source: "CP-Algorithms" },
      { type: "practice", title: "GCD/LCM Problems", url: "https://codeforces.com/problemset?tags=number+theory&order=BY_SOLVED_DESC", source: "Codeforces" }
    ],
    eli5: "GCD is like this: imagine you have 12 apples and 8 oranges, and you want to put them in bags so every bag has the same number of apples AND the same number of oranges, with nothing left over. The most bags you can make is 4 (the GCD). Each bag gets 3 apples and 2 oranges! LCM is different: if one friend visits every 3 days and another visits every 4 days, they will both visit on the same day every 12 days (the LCM).",
    codeWalkthrough: [
      "int gcd(int a, int b) { if (b == 0) return a; return gcd(b, a % b); } — This is Euclid's algorithm. If b is 0, the GCD is a. Otherwise, the GCD of a and b equals the GCD of b and the remainder of a/b. For GCD(48,18): GCD(18,12) → GCD(12,6) → GCD(6,0) → 6.",
      "long long lcm(int a, int b) { return (long long)a / gcd(a, b) * b; } — We divide a by gcd first (which always divides evenly) before multiplying by b. This prevents overflow. The cast to long long ensures we have enough room.",
      "int g = gcd(num, den); ... num/g ... den/g — To simplify a fraction, divide both numerator and denominator by their GCD. For 12/18: GCD=6, so 12/6=2 and 18/6=3. Result: 2/3.",
      "arrayGCD = gcd(arrayGCD, arr[i]); — To find the GCD of many numbers, use chaining: GCD(a,b,c) = GCD(GCD(a,b), c). Start with the first element, then fold in each subsequent element.",
      "arrayLCM = arrayLCM / gcd((int)arrayLCM, arr[i]) * arr[i]; — Same chaining for LCM, using the formula LCM(a,b) = a/gcd(a,b)*b at each step."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

int main() {
    int a, b;
    cin >> a >> b;
    int result = a * b / gcd(a, b);
    cout << "LCM: " << result << endl;
    return 0;
}`,
      hint: "What if a and b are both around 100,000? What happens when you compute a * b before dividing? Also, what is the type of result?",
      answer: "Two bugs! First, a * b can overflow int when a and b are large (e.g., 100000 * 100000 = 10 billion, way beyond int's 2 billion limit). Second, even if it does not overflow, we should divide first: a / gcd(a,b) * b. Fix: long long result = (long long)a / gcd(a, b) * b; This divides first (which is safe because gcd always divides a evenly) and uses long long to hold the result."
    },
    difficulty: "intermediate",
    prereqs: [20]
  },

  // =============================================
  // LESSON 22: Playing with Digits
  // =============================================
  {
    id: 22,
    title: "Playing with Digits",
    subtitle: "Extract, count, sum, and reverse digits — essential tricks for number-based problems!",
    analogy: "Think of a number like 4827 as beads on an abacus — each bead represents one digit. You can count the beads (4 digits), add them up (4+8+2+7=21), rearrange them backwards (7284), or check if the pattern reads the same both ways (like 1221). The two magic operations are: %10 grabs the last bead (the ones digit), and /10 removes the last bead. With just these two moves, you can take apart any number and play with its pieces!",
    points: [
      { t: "Extract the last digit: n % 10", d: "The modulo operator with 10 gives you the last digit of any number. 1234 % 10 = 4, 507 % 10 = 7, 90 % 10 = 0. This is because dividing by 10 and taking the remainder always gives the ones digit." },
      { t: "Remove the last digit: n / 10", d: "Integer division by 10 chops off the last digit. 1234 / 10 = 123, 507 / 10 = 50, 9 / 10 = 0. When n becomes 0, you have processed all digits!" },
      { t: "Count digits in a number", d: "Loop and divide by 10 until the number becomes 0: int count = 0; while(n > 0) { count++; n /= 10; } For 1234: count goes 1→2→3→4 as n goes 123→12→1→0. Edge case: if n is 0, the count should be 1!" },
      { t: "Sum of digits", d: "Extract each digit with %10 and add it: int sum = 0; while(n > 0) { sum += n % 10; n /= 10; } For 1234: sum = 4+3+2+1 = 10. This is used in many contest problems, especially those about divisibility." },
      { t: "Reverse a number", d: "Build the reversed number digit by digit: int rev = 0; while(n > 0) { rev = rev * 10 + n % 10; n /= 10; } For 1234: rev goes 4→43→432→4321. The key trick is rev * 10 shifts digits left, then + n%10 adds the new digit." },
      { t: "Check if a number is a palindrome", d: "A number palindrome reads the same forwards and backwards (like 12321 or 1001). Simply reverse the number and compare: if(original == reversed) it is a palindrome! Store the original value before reversing since the loop destroys n." },
      { t: "Digital root", d: "Keep summing digits until you get a single digit. For 9875: 9+8+7+5=29, then 2+9=11, then 1+1=2. The digital root is 2. A mathematical shortcut: digital root = n % 9 (if result is 0 and n is not 0, it is 9). Cool, right?" },
      { t: "Working with individual digits", d: "Sometimes you need to store digits in an array. Extract them with %10 and /10, push into a vector, then reverse it (since they come out in reverse order). Or convert the number to a string: string s = to_string(n); and work with characters!" }
    ],
    whatIs: "Playing with digits means breaking a number into its individual digits and performing operations on them. The two key operations are: n % 10 (extract the last digit) and n / 10 (remove the last digit). By repeating these in a loop, you can count digits, sum them, reverse the number, check for palindromes, and solve many number theory problems in competitive programming.",
    realWorld: "Digit manipulation shows up everywhere: credit card validation (the Luhn algorithm sums digits), ISBN book number verification, digital clocks, odometers in cars, and many CP problems. When an ATM counts money or a calculator displays a result, digit manipulation is happening behind the scenes.",
    code: `#include <bits/stdc++.h>
using namespace std;

// Count digits in a number
int countDigits(int n) {
    if (n == 0) return 1;
    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}

// Sum of digits
int digitSum(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

// Reverse a number
int reverseNum(int n) {
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    return rev;
}

// Check if number is palindrome
bool isPalindromeNum(int n) {
    return n == reverseNum(n);
}

int main() {
    int n;
    cin >> n;
    
    cout << "Number: " << n << endl;
    cout << "Digits: " << countDigits(n) << endl;
    cout << "Digit sum: " << digitSum(n) << endl;
    cout << "Reversed: " << reverseNum(n) << endl;
    
    if (isPalindromeNum(n)) {
        cout << n << " is a palindrome!" << endl;
    } else {
        cout << n << " is NOT a palindrome." << endl;
    }
    
    // Bonus: extract all digits into a vector
    vector<int> digits;
    int temp = n;
    while (temp > 0) {
        digits.push_back(temp % 10);
        temp /= 10;
    }
    reverse(digits.begin(), digits.end());
    
    cout << "Individual digits: ";
    for (int d : digits) cout << d << " ";
    cout << endl;
    
    return 0;
}`,
    funFact: "The number 1089 has a magical property with digit reversal: take any 3-digit number where the first digit is bigger than the last (like 532). Reverse it (235). Subtract the smaller from the bigger (532-235=297). Now reverse the result (792). Add them (297+792=1089). You ALWAYS get 1089! Try it with any valid 3-digit number — it works every time!",
    quiz: [
      { q: "What does 7654 % 10 give you?", opts: ["7", "6", "5", "4"], ans: 3 },
      { q: "What does 7654 / 10 give you?", opts: ["765.4", "765", "76", "7"], ans: 1 },
      { q: "How do you build a reversed number from digits?", opts: ["rev = n % 10 + rev", "rev = rev * 10 + n % 10", "rev = rev + n / 10", "rev = n * 10 + rev % 10"], ans: 1 },
      { q: "Which of these is a palindrome number?", opts: ["123", "1221", "1234", "100"], ans: 1 },
      { q: "What is the sum of digits of 9876?", opts: ["24", "28", "30", "32"], ans: 2 }
    ],
    challenge: "Read a number n. Print: (1) the number of digits, (2) the sum of digits, (3) the reverse of the number, (4) whether it is a palindrome (YES or NO). Then print the product of all digits and the largest single digit in the number.",
    resources: [
      { type: "video", title: "Digit Manipulation in C++", url: "https://www.youtube.com/results?search_query=c%2B%2B+extract+digits+sum+reverse+number", source: "YouTube" },
      { type: "article", title: "Digit Problems — GeeksforGeeks", url: "https://www.geeksforgeeks.org/program-count-digits-integer-3-different-methods/", source: "GeeksforGeeks" },
      { type: "practice", title: "Number Digit Problems", url: "https://codeforces.com/problemset?tags=math,implementation&order=BY_SOLVED_DESC", source: "Codeforces" }
    ],
    eli5: "Imagine you have the number 352 written on cards — one card says 3, one says 5, one says 2. The trick %10 is like peeking at the last card (2). The trick /10 is like removing the last card, leaving you with 35. You keep peeking and removing until all cards are gone. Meanwhile, you can count the cards, add up the numbers, or put them back in reverse order. That is all digit manipulation is — playing with number cards one at a time!",
    codeWalkthrough: [
      "while (n > 0) { count++; n /= 10; } — Each time we divide n by 10, we remove one digit and increment our counter. When n becomes 0, we have counted all digits. We handle n=0 specially because the loop would not execute.",
      "sum += n % 10; n /= 10; — First we grab the last digit (n%10) and add it to sum. Then we remove that digit (n/=10). Repeat until n is 0. For 1234: we get 4, then 3, then 2, then 1.",
      "rev = rev * 10 + n % 10; — This is the clever digit-building formula. rev*10 shifts all existing digits one place left (making room for a new digit on the right). Then + n%10 places the extracted digit in that new spot. For 1234: rev goes 0→4→43→432→4321.",
      "return n == reverseNum(n); — To check palindrome, we reverse the number and compare with the original. If they are equal, the number reads the same both ways. Clean and simple!",
      "digits.push_back(temp % 10); — We extract digits one by one and store them in a vector. They come out in reverse order (4,3,2,1 for 1234), so we reverse the vector at the end to get them in the right order (1,2,3,4)."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    // Try to count digits and sum them
    int count = 0, sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
        count++;
    }
    
    // Now try to reverse n
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    
    cout << "Digits: " << count << endl;
    cout << "Sum: " << sum << endl;
    cout << "Reversed: " << rev << endl;
    return 0;
}`,
      hint: "After the first while loop finishes, what is the value of n? When the second while loop starts, what does it try to work with?",
      answer: "The bug is that the first while loop destroys n — after counting digits and summing them, n is 0. So the second while loop never executes (0 > 0 is false), and rev stays 0! The fix: save the original value before the first loop: int original = n; Then use original for the second loop (or use a separate variable). Always save a copy of your number before destroying it in a while loop!"
    },
    difficulty: "intermediate",
    prereqs: [11, 6]
  },
  // =============================================
  // LESSON 23: Powers and Modular Arithmetic
  // =============================================
  {
    id: 23,
    title: "Powers and Modular Arithmetic",
    subtitle: "Handle astronomically huge numbers like a pro",
    analogy: "Modulo is like a clock — after 12, it goes back to 1. No matter how many hours pass, the clock only shows 1 to 12. Modulo works the same way: no matter how big a number gets, modulo wraps it back into a manageable range.",
    points: [
      { t: "What is a Power?", d: "a raised to the power b (written a^b) means multiplying a by itself b times. For example, 2^5 = 2 * 2 * 2 * 2 * 2 = 32. In C++ we can compute this with a simple loop." },
      { t: "Why Powers Get Huge Fast", d: "Powers grow incredibly fast. 2^10 is already 1024. 2^30 is over a billion. 2^60 overflows even a long long! That is why we need modular arithmetic — to keep numbers small." },
      { t: "What is Modulo (%)?", d: "The modulo operator (%) gives the remainder after division. 17 % 5 = 2 because 17 divided by 5 is 3 remainder 2. In CP, we often use mod = 1000000007 (a big prime number) to keep answers manageable." },
      { t: "Modular Addition Rule", d: "(a + b) % m = ((a % m) + (b % m)) % m. This means you can take the modulo at each step instead of waiting until the end. This prevents overflow!" },
      { t: "Modular Multiplication Rule", d: "(a * b) % m = ((a % m) * (b % m)) % m. Just like addition, you can take modulo after each multiplication. This is the key to computing huge powers without overflow." },
      { t: "Computing Power with Modulo", d: "To compute a^b % m, we multiply a by itself b times, taking modulo at each step. Start with result = 1, then loop b times: result = (result * a) % m. This keeps the number small throughout." },
      { t: "Fibonacci Numbers", d: "The Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, ... Each number is the sum of the two before it. fib(n) = fib(n-1) + fib(n-2). Fibonacci numbers grow fast, so we often compute them modulo m." },
      { t: "Why 1000000007?", d: "The number 1000000007 (often written as 1e9+7) is used in CP because: (1) it is prime, which has nice mathematical properties, (2) it fits in an int, and (3) the product of two numbers mod 1e9+7 fits in a long long." },
      { t: "Practice Makes Perfect", d: "Try computing 2^10 % 1000 by hand: start with 1, multiply by 2 ten times, take mod 1000 each time. You will get 24. Now try computing fib(10) % 100. Practice these patterns until they feel natural!" }
    ],
    whatIs: "Powers and modular arithmetic are fundamental tools in competitive programming. A power (a^b) means multiplying a number by itself multiple times, and modulo (%) keeps huge numbers within a manageable range by taking the remainder after division. Together, they let you handle calculations that would otherwise cause integer overflow.",
    realWorld: "Modular arithmetic is everywhere! Clocks use mod 12 (or mod 24). Days of the week use mod 7. Cryptography (like the RSA algorithm that secures the internet) relies heavily on modular exponentiation. Even check digits on credit cards use modular arithmetic to detect typos.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Computing a^b with modulo
    long long a = 2, b = 10;
    long long mod = 1000000007;
    long long result = 1;
    for (int i = 0; i < b; i++) {
        result = (result * a) % mod;
    }
    cout << a << "^" << b << " mod " << mod << " = " << result << "\\n";

    // Fibonacci with modulo
    int n = 20;
    long long fib[21];
    fib[0] = 0;
    fib[1] = 1;
    for (int i = 2; i <= n; i++) {
        fib[i] = (fib[i-1] + fib[i-2]) % mod;
    }
    cout << "fib(" << n << ") = " << fib[n] << "\\n";

    // Simple modular arithmetic demo
    long long x = 1000000006, y = 1000000005;
    long long safeSum = ((x % mod) + (y % mod)) % mod;
    cout << "Safe sum mod = " << safeSum << "\\n";

    return 0;
}`,
    funFact: "The Fibonacci sequence appears in nature everywhere — the number of petals on most flowers is a Fibonacci number (3, 5, 8, 13, 21...), sunflower seed spirals follow Fibonacci patterns, and even the proportions of the human body approximate the golden ratio, which is closely related to Fibonacci numbers!",
    quiz: [
      { q: "What does 17 % 5 equal?", opts: ["3", "2", "5", "12"], ans: 1 },
      { q: "Why do we use modulo in competitive programming?", opts: ["To make code run faster", "To prevent numbers from getting too large and causing overflow", "To round numbers down", "To convert floats to integers"], ans: 1 },
      { q: "What is the correct modular multiplication rule?", opts: ["(a * b) % m = (a % m) * (b % m)", "(a * b) % m = ((a % m) * (b % m)) % m", "(a * b) % m = a * (b % m)", "(a * b) % m = (a * b) / m"], ans: 1 },
      { q: "What is the 7th Fibonacci number (starting from fib(0)=0, fib(1)=1)?", opts: ["8", "13", "21", "5"], ans: 1 },
      { q: "Why is 1000000007 commonly used as the modulo value in CP?", opts: ["It is the largest prime that fits in an int", "It is prime and products of two values mod it fit in a long long", "It is the fastest number to divide by", "It is a power of 2"], ans: 1 }
    ],
    challenge: "Write a program that reads two numbers a and b, then computes a^b modulo 1000000007 using a loop. Then also compute the first 30 Fibonacci numbers modulo 1000000007 and print them all. Test with a=2, b=30 (answer should be 1073741824 % 1e9+7 = 73741817).",
    resources: [
      { type: "article", title: "Modular Arithmetic for Beginners", url: "https://cp-algorithms.com/algebra/module-inverse.html", source: "CP-Algorithms" },
      { type: "video", title: "Modular Arithmetic in Programming", url: "https://www.youtube.com/watch?v=M1tPz4YoNFI", source: "YouTube" },
      { type: "practice", title: "Fibonacci Problems on CSES", url: "https://cses.fi/problemset/task/1722", source: "CSES" }
    ],
    eli5: "Imagine you are counting laps around a small track. The track is only 10 meters around. If you run 37 meters, you have done 3 full laps and are 7 meters into your 4th lap. That 7 is 37 % 10! Modulo tells you where you are on the track, no matter how far you have run. In programming, when numbers get SUPER huge (like trillions), modulo keeps them on a small track so your computer does not explode!",
    codeWalkthrough: [
      "long long a = 2, b = 10; — we set up our base (a=2) and exponent (b=10). We use long long because even intermediate results can be large.",
      "long long mod = 1000000007; — this is the standard CP modulo value. It is a prime number just over one billion.",
      "long long result = 1; — we start with 1 because anything raised to the power 0 is 1. We will multiply this by a, b times.",
      "for (int i = 0; i < b; i++) { result = (result * a) % mod; } — each iteration multiplies result by a and takes modulo. After 10 iterations, result = 2^10 % mod = 1024.",
      "fib[0] = 0; fib[1] = 1; — the Fibonacci sequence starts with 0 and 1. These are our base cases.",
      "fib[i] = (fib[i-1] + fib[i-2]) % mod; — each Fibonacci number is the sum of the previous two, and we take modulo to prevent overflow.",
      "long long safeSum = ((x % mod) + (y % mod)) % mod; — this demonstrates the modular addition rule. Even though x and y are huge, the result fits in a long long."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a = 2, b = 40;
    int mod = 1000000007;
    int result = 1;
    for (int i = 0; i < b; i++) {
        result = (result * a) % mod;
    }
    cout << result << "\\n";
    return 0;
}`,
      hint: "Look at the data types. When result is close to 1000000007 and you multiply it by 2, how big can that intermediate value get? Can an int hold it?",
      answer: "The bug is using int instead of long long for result. When result is near 1000000007 (about 10^9), multiplying by a (which is 2) gives about 2*10^9, which overflows a 32-bit int (max ~2.1*10^9). The fix is to change 'int result = 1;' to 'long long result = 1;' and also make a and mod long long to be safe."
    },
    difficulty: "intermediate",
    prereqs: [21, 6]
  },
  // =============================================
  // LESSON 24: Bubble Sort — The Swapping Dance
  // =============================================
  {
    id: 24,
    title: "Bubble Sort — The Swapping Dance",
    subtitle: "The simplest sorting algorithm you will ever learn",
    analogy: "Imagine sorting students by height in a line. You start at the beginning, compare the first two students — if the taller one is in front, they swap. Then compare positions 2 and 3, then 3 and 4, and so on. After one pass, the tallest student 'bubbles up' to the end. Repeat until everyone is in order!",
    points: [
      { t: "What is Sorting?", d: "Sorting means arranging elements in a specific order — usually smallest to largest (ascending) or largest to smallest (descending). Sorting is one of the most fundamental operations in computer science." },
      { t: "How Bubble Sort Works", d: "Bubble sort repeatedly walks through the array, comparing adjacent (neighboring) elements. If they are in the wrong order, it swaps them. After each full pass, the largest unsorted element 'bubbles' to its correct position at the end." },
      { t: "Step-by-Step Example", d: "Array: [5, 3, 8, 1]. Pass 1: compare 5,3 -> swap -> [3,5,8,1]; compare 5,8 -> ok; compare 8,1 -> swap -> [3,5,1,8]. Now 8 is in place! Pass 2: [3,5,1,8] -> [3,1,5,8]. Pass 3: [1,3,5,8]. Done!" },
      { t: "The Swap Operation", d: "To swap two variables in C++, we use a temporary variable: int temp = a; a = b; b = temp; Or we can use the built-in swap(a, b) function which does the same thing. Swapping is the heart of bubble sort." },
      { t: "How Many Passes?", d: "For an array of n elements, we need at most n-1 passes. In each pass, we compare adjacent elements and swap if needed. After pass k, the k-th largest element is in its final position." },
      { t: "Time Complexity Hint", d: "Bubble sort compares every pair in each pass, and does up to n-1 passes. That means roughly n * n comparisons in the worst case. We write this as O(n^2). For 1000 elements, that is about 1 million comparisons — slow for big data, but fine for learning!" },
      { t: "Optimization: Early Stop", d: "If we go through a complete pass without making any swaps, the array is already sorted! We can add a boolean flag to check this and stop early. This makes bubble sort faster when the data is nearly sorted." },
      { t: "When to Use Bubble Sort", d: "In competitive programming, you almost never use bubble sort for actual sorting (C++ sort() is much faster). But understanding bubble sort teaches you about comparisons, swaps, and algorithm analysis. Some CP problems specifically ask about bubble sort or count swaps." }
    ],
    whatIs: "Bubble sort is the simplest sorting algorithm. It works by repeatedly stepping through the array, comparing each pair of adjacent elements, and swapping them if they are in the wrong order. The largest elements gradually 'bubble up' to the end of the array, just like air bubbles rising to the surface of water.",
    realWorld: "While bubble sort is too slow for large datasets, the concept of comparing neighbors and swapping is used everywhere. Card players naturally use a form of bubble sort when arranging their hand. Teachers sometimes line up students by height using the 'compare two neighbors' approach. Understanding simple algorithms helps you appreciate why faster algorithms exist.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    // Bubble Sort
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break; // Array is already sorted!
    }

    // Print sorted array
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) cout << " ";
    }
    cout << "\\n";

    return 0;
}`,
    funFact: "Bubble sort was one of the first sorting algorithms ever analyzed by computer scientists. Despite being slow, it has a special place in computing history. Barack Obama, when asked in an interview what the most efficient way to sort a million integers is, jokingly said 'I don't think the bubble sort is the way to go.' He was right — but it is a great way to start learning!",
    quiz: [
      { q: "After one complete pass of bubble sort on [5, 3, 8, 1], what is guaranteed?", opts: ["The array is fully sorted", "The smallest element is at the front", "The largest element is at the end", "All elements have moved"], ans: 2 },
      { q: "How many passes does bubble sort need in the worst case for an array of n elements?", opts: ["n", "n - 1", "n * n", "n / 2"], ans: 1 },
      { q: "What does the 'swapped' flag optimization do?", opts: ["Makes bubble sort sort in descending order", "Stops early if the array is already sorted", "Counts the number of swaps made", "Skips the first element"], ans: 1 },
      { q: "What is the time complexity of bubble sort in the worst case?", opts: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"], ans: 2 },
      { q: "In the inner loop, why do we use 'j < n - 1 - i' instead of 'j < n - 1'?", opts: ["To avoid accessing arr[-1]", "Because the last i elements are already sorted after i passes", "To make the code run exactly n times", "There is no difference"], ans: 1 }
    ],
    challenge: "Write a bubble sort program that not only sorts the array but also prints the array after EACH pass so you can see the sorting happen step by step. Also count and print the total number of swaps made. Test with input: 5 elements [4, 2, 5, 1, 3].",
    resources: [
      { type: "video", title: "Bubble Sort Visualized", url: "https://www.youtube.com/watch?v=xli_FI7CuzA", source: "YouTube" },
      { type: "article", title: "Sorting Algorithms for Beginners", url: "https://www.geeksforgeeks.org/bubble-sort/", source: "GeeksforGeeks" },
      { type: "practice", title: "Sort the Array", url: "https://codeforces.com/problemset/problem/451/B", source: "Codeforces" }
    ],
    eli5: "Imagine you have a line of toy blocks with numbers on them, and you want to put them in order from smallest to biggest. You look at the first two blocks — if the bigger one is first, you swap them. Then look at the next two, swap if needed, and keep going to the end. After going through the whole line once, the biggest block is at the end. Now do it again (ignoring the last block since it is in place). Keep doing this until no more swaps are needed. That is bubble sort!",
    codeWalkthrough: [
      "vector<int> arr(n); — we create a vector (dynamic array) of size n to hold our numbers. Vectors are super handy in C++ because they manage memory for us.",
      "for (int i = 0; i < n - 1; i++) — the outer loop runs n-1 times. Each pass places one more element in its final position. After n-1 passes, everything is sorted.",
      "bool swapped = false; — this flag tracks whether we made any swaps in this pass. If we complete a pass with no swaps, the array is already sorted and we can stop early.",
      "for (int j = 0; j < n - 1 - i; j++) — the inner loop compares adjacent elements. We use n-1-i because after i passes, the last i elements are already in their correct positions, so we do not need to check them again.",
      "if (arr[j] > arr[j + 1]) — we compare two neighbors. If the left one is bigger than the right one, they are in the wrong order for ascending sort.",
      "swap(arr[j], arr[j + 1]); — C++ built-in swap function exchanges the two values. This is cleaner than using a temporary variable.",
      "if (!swapped) break; — if no swaps happened in a complete pass, the array is sorted. This optimization can save a lot of time on nearly-sorted data."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }

    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    return 0;
}`,
      hint: "Look at the inner loop bounds. When j equals n-1, what is j+1? Does that index exist in the array?",
      answer: "There are two bugs! First, the inner loop goes 'j < n' which means when j = n-1, we access arr[n] which is out of bounds — undefined behavior! It should be 'j < n - 1 - i'. Second, the outer loop should be 'i < n - 1' (we only need n-1 passes). Fix: change to 'for (int i = 0; i < n - 1; i++)' and 'for (int j = 0; j < n - 1 - i; j++)'."
    },
    difficulty: "intermediate",
    prereqs: [14]
  },
  // =============================================
  // LESSON 25: Binary Search — The Guessing Game
  // =============================================
  {
    id: 25,
    title: "Binary Search — The Guessing Game",
    subtitle: "Find anything in a sorted collection blazingly fast",
    analogy: "Imagine finding a word in a dictionary. You do not start from page 1 and read every page. Instead, you open the dictionary near the middle. If your word comes before the middle page, you look in the first half. If it comes after, you look in the second half. Each time you cut the remaining pages in half. That is binary search!",
    points: [
      { t: "The Number Guessing Game", d: "I am thinking of a number between 1 and 100. You guess, and I say 'higher' or 'lower.' The smartest strategy? Always guess the middle! First guess: 50. If 'higher,' guess 75. If 'lower,' guess 25. You will find any number in at most 7 guesses (because 2^7 = 128 > 100)." },
      { t: "What is Binary Search?", d: "Binary search is an algorithm that finds a target value in a SORTED array by repeatedly dividing the search range in half. At each step, it compares the middle element with the target and eliminates half of the remaining elements." },
      { t: "Why Sorted Data is Required", d: "Binary search only works on sorted data. Why? Because when we check the middle and our target is larger, we know ALL elements in the left half are also smaller — so we can safely ignore them. Without sorting, we cannot make this guarantee." },
      { t: "The Algorithm Step by Step", d: "Start with low = 0, high = n-1. Find mid = (low + high) / 2. If arr[mid] == target, found it! If arr[mid] < target, search right half: low = mid + 1. If arr[mid] > target, search left half: high = mid - 1. Repeat until low > high (not found)." },
      { t: "How Fast is Binary Search?", d: "Each step cuts the search space in half. For 1000 elements: 1000 -> 500 -> 250 -> 125 -> 63 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1. That is only about 10 steps! For a million elements, only about 20 steps. This is O(log n) — incredibly fast." },
      { t: "Linear Search vs Binary Search", d: "Linear search checks every element one by one — O(n). For 1 billion elements, that is 1 billion checks. Binary search on sorted data? Only about 30 checks! That is the power of halving — it turns impossibly large searches into instant lookups." },
      { t: "Common Pitfall: Integer Overflow in Mid", d: "Writing mid = (low + high) / 2 can overflow if low + high exceeds the int range. The safe way is mid = low + (high - low) / 2. This calculates the same value but avoids overflow. Always use this in CP!" },
      { t: "Binary Search Beyond Arrays", d: "Binary search is not just for finding values in arrays. You can binary search on the ANSWER to a problem! If you can check whether an answer x is valid, and validity is monotonic (all values below some point are invalid, all above are valid), you can binary search for that point." }
    ],
    whatIs: "Binary search is a divide-and-conquer algorithm that finds a target value within a sorted array. By comparing the target to the middle element and eliminating half the search space each time, it achieves O(log n) time complexity — meaning it can search through a billion elements in about 30 steps.",
    realWorld: "Binary search is used everywhere: database indexes find records in huge tables, version control 'git bisect' finds the commit that introduced a bug, spell checkers look up words in dictionaries, and even debugging uses binary search when you narrow down which half of the code contains the bug.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Binary search in a sorted array
    int n, target;
    cin >> n >> target;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];

    int low = 0, high = n - 1;
    int result = -1; // -1 means not found

    while (low <= high) {
        int mid = low + (high - low) / 2; // Safe from overflow
        if (arr[mid] == target) {
            result = mid;
            break;
        } else if (arr[mid] < target) {
            low = mid + 1; // Target is in right half
        } else {
            high = mid - 1; // Target is in left half
        }
    }

    if (result != -1) {
        cout << "Found at index " << result << "\\n";
    } else {
        cout << "Not found\\n";
    }

    return 0;
}`,
    funFact: "Binary search is so powerful that if you had a sorted list of every person on Earth (8 billion people), you could find any specific person in at most 33 comparisons. That is roughly the same number of guesses it takes to find a number between 1 and 8 billion! The idea dates back to 1946, but the first bug-free binary search was not published until 1962 — it is deceptively tricky to get right.",
    quiz: [
      { q: "What is the maximum number of steps binary search needs to find a value in a sorted array of 1024 elements?", opts: ["1024", "512", "10", "32"], ans: 2 },
      { q: "What happens if you try to use binary search on an unsorted array?", opts: ["It works but is slower", "It will always find the element", "It may give wrong results or miss the element entirely", "It automatically sorts the array first"], ans: 2 },
      { q: "Why do we use mid = low + (high - low) / 2 instead of mid = (low + high) / 2?", opts: ["It is faster to compute", "To avoid integer overflow when low + high is very large", "It gives a different result", "There is no real difference"], ans: 1 },
      { q: "If low = 3 and high = 9, what is mid?", opts: ["5", "6", "7", "4"], ans: 1 },
      { q: "What is the time complexity of binary search?", opts: ["O(n)", "O(n^2)", "O(log n)", "O(1)"], ans: 2 }
    ],
    challenge: "Write a binary search program that not only finds whether the target exists, but also prints each step of the search (the current low, high, mid, and the comparison result). Test with a sorted array [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] and search for 23. How many steps did it take?",
    resources: [
      { type: "video", title: "Binary Search in 100 Seconds", url: "https://www.youtube.com/watch?v=MFhxShGxHWc", source: "YouTube" },
      { type: "article", title: "Binary Search Tutorial", url: "https://cp-algorithms.com/num_methods/binary_search.html", source: "CP-Algorithms" },
      { type: "practice", title: "Binary Search Problems", url: "https://cses.fi/problemset/task/1085", source: "CSES" }
    ],
    eli5: "Imagine you are playing a guessing game. I am thinking of a number between 1 and 100. Every time you guess, I tell you if the real number is bigger or smaller. What is the best strategy? Always guess the middle! If I say 'bigger,' you only look at the top half. If 'smaller,' only the bottom half. Each guess throws away HALF the numbers. In just 7 guesses, you can find any number from 1 to 100. That is binary search — always pick the middle and cut your problem in half!",
    codeWalkthrough: [
      "int low = 0, high = n - 1; — low and high define our current search range. We start by searching the entire array from index 0 to index n-1.",
      "int mid = low + (high - low) / 2; — we calculate the middle index. Using low + (high - low) / 2 instead of (low + high) / 2 prevents potential integer overflow.",
      "if (arr[mid] == target) — if the middle element IS our target, we found it! Store the index and break out of the loop.",
      "else if (arr[mid] < target) { low = mid + 1; } — if the middle element is smaller than our target, the target must be in the RIGHT half. We move low past mid to search only the right half.",
      "else { high = mid - 1; } — if the middle element is larger than our target, the target must be in the LEFT half. We move high before mid to search only the left half.",
      "while (low <= high) — we keep searching as long as our range is valid (low does not exceed high). If low becomes greater than high, the target is not in the array."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int arr[] = {1, 3, 5, 7, 9, 11};
    int n = 6, target = 7;
    int low = 0, high = n;
    int result = -1;

    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) {
            result = mid;
            break;
        } else if (arr[mid] < target) {
            low = mid;
        } else {
            high = mid;
        }
    }

    cout << "Found at index: " << result << "\\n";
    return 0;
}`,
      hint: "There are two problems. First, look at the initial value of high — is arr[n] a valid index? Second, when we update low and high, could the loop get stuck if mid never changes?",
      answer: "Two bugs! First, high should be n-1, not n. arr[6] is out of bounds for an array of size 6. Second, low = mid and high = mid can cause an infinite loop — when low and high differ by 1, mid equals low, so low = mid never changes. Fix: use low = mid + 1 and high = mid - 1 to guarantee the range shrinks each step."
    },
    difficulty: "intermediate",
    prereqs: [14]
  },
  // =============================================
  // LESSON 26: Using sort() and Built-in Tools
  // =============================================
  {
    id: 26,
    title: "Using sort() and Built-in Tools",
    subtitle: "Let C++ do the heavy sorting for you",
    analogy: "sort() is like having a magic wand that organizes anything instantly. Instead of manually comparing and swapping elements yourself (like in bubble sort), you wave the wand and everything falls into perfect order. It is not just faster to type — it is actually faster to run, using a clever algorithm called IntroSort behind the scenes.",
    points: [
      { t: "The C++ sort() Function", d: "C++ gives us sort() from the <algorithm> header (included in bits/stdc++.h). For arrays: sort(arr, arr + n). For vectors: sort(v.begin(), v.end()). It sorts in ascending order by default and is extremely fast — O(n log n)." },
      { t: "Sorting a Vector", d: "vector<int> v = {5, 2, 8, 1, 9}; sort(v.begin(), v.end()); Now v is {1, 2, 5, 8, 9}. The begin() and end() functions return iterators (think of them as pointers) to the start and one-past-the-end of the vector." },
      { t: "Sorting in Reverse (Descending)", d: "To sort largest to smallest, use: sort(v.begin(), v.end(), greater<int>()). Or sort normally and then reverse: sort(v.begin(), v.end()); reverse(v.begin(), v.end()). Both give descending order." },
      { t: "Custom Comparators", d: "You can tell sort() exactly HOW to compare. Write a function: bool cmp(int a, int b) { return a > b; } Then use: sort(v.begin(), v.end(), cmp). Return true if a should come before b. This lets you sort by any criteria you want!" },
      { t: "Sorting Strings", d: "sort() works on strings too! It sorts them alphabetically (lexicographic order). vector<string> names = {\"Charlie\", \"Alice\", \"Bob\"}; sort(names.begin(), names.end()); gives {\"Alice\", \"Bob\", \"Charlie\"}." },
      { t: "lower_bound — Find First >=", d: "lower_bound(v.begin(), v.end(), x) returns an iterator to the first element that is >= x. It uses binary search internally, so the data must be sorted. If x is not in the array, it points to where x would be inserted." },
      { t: "upper_bound — Find First >", d: "upper_bound(v.begin(), v.end(), x) returns an iterator to the first element that is strictly > x. Together with lower_bound, you can find exactly how many times a value appears: count = upper_bound - lower_bound." },
      { t: "Sorting Pairs", d: "sort() on a vector<pair<int,int>> sorts by first element, then by second if first elements are equal. This is incredibly useful in CP for sorting by multiple criteria: pair.first for primary sort, pair.second for tiebreaker." },
      { t: "Why sort() Beats Bubble Sort", d: "C++ sort() uses IntroSort, which combines QuickSort, HeapSort, and InsertionSort. It runs in O(n log n), which is MUCH faster than bubble sort's O(n^2). For 100,000 elements: sort() does about 1.7 million operations, bubble sort does 10 billion!" }
    ],
    whatIs: "C++ provides powerful built-in sorting and searching tools that every competitive programmer must know. The sort() function sorts data in O(n log n) time, while lower_bound and upper_bound perform binary searches on sorted data in O(log n). Mastering these tools means you spend less time writing code and more time solving problems.",
    realWorld: "Every app you use relies on sorting: your email inbox sorted by date, your music playlist sorted by artist, search results sorted by relevance, leaderboards sorted by score. The fast sorting algorithms behind sort() (like QuickSort and MergeSort) were invented decades ago and are still the backbone of every modern system.",
    code: `#include <bits/stdc++.h>
using namespace std;

bool descending(int a, int b) {
    return a > b; // Returns true if a should come before b
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Sort a vector
    vector<int> v = {5, 2, 8, 1, 9, 2, 8, 3};
    sort(v.begin(), v.end());
    cout << "Ascending: ";
    for (int x : v) cout << x << " ";
    cout << "\\n";

    // Sort descending
    sort(v.begin(), v.end(), descending);
    cout << "Descending: ";
    for (int x : v) cout << x << " ";
    cout << "\\n";

    // Sort ascending again for binary search
    sort(v.begin(), v.end());

    // lower_bound and upper_bound
    auto lo = lower_bound(v.begin(), v.end(), 2);
    auto hi = upper_bound(v.begin(), v.end(), 2);
    cout << "First 2 at index: " << (lo - v.begin()) << "\\n";
    cout << "Count of 2s: " << (hi - lo) << "\\n";

    // Sorting pairs
    vector<pair<int,int>> scores = {{90, 1}, {85, 3}, {90, 2}};
    sort(scores.begin(), scores.end());
    cout << "Sorted pairs: ";
    for (auto p : scores) cout << "(" << p.first << "," << p.second << ") ";
    cout << "\\n";

    return 0;
}`,
    funFact: "The C++ sort() function is required by the language standard to run in O(n log n) in the worst case. Most implementations use IntroSort, invented by David Musser in 1997. It starts with QuickSort (fast on average), switches to HeapSort if recursion gets too deep (to guarantee O(n log n) worst case), and uses InsertionSort for tiny sub-arrays (because it is faster for small sizes). It is an engineering masterpiece!",
    quiz: [
      { q: "What is the correct way to sort a vector v in ascending order?", opts: ["sort(v)", "sort(v.begin(), v.end())", "v.sort()", "sort(v[0], v[n])"], ans: 1 },
      { q: "How do you sort a vector in descending order?", opts: ["sort(v.begin(), v.end(), less<int>())", "sort(v.end(), v.begin())", "sort(v.begin(), v.end(), greater<int>())", "reverse_sort(v)"], ans: 2 },
      { q: "What does lower_bound(v.begin(), v.end(), 5) return?", opts: ["The number 5", "An iterator to the first element >= 5", "An iterator to the first element > 5", "The index of 5"], ans: 1 },
      { q: "How can you count occurrences of value x in a sorted vector?", opts: ["count(v, x)", "upper_bound - lower_bound for x", "lower_bound - upper_bound for x", "find(v, x)"], ans: 1 },
      { q: "What is the time complexity of C++ sort()?", opts: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"], ans: 2 }
    ],
    challenge: "Read n numbers, sort them, then answer q queries. Each query gives a number x — print how many times x appears in the array using lower_bound and upper_bound. Test with array [1, 2, 2, 3, 3, 3, 4, 5] and queries for 3 (answer: 3), 2 (answer: 2), and 6 (answer: 0).",
    resources: [
      { type: "article", title: "C++ sort() Reference", url: "https://cplusplus.com/reference/algorithm/sort/", source: "cplusplus.com" },
      { type: "video", title: "Sorting in C++ STL", url: "https://www.youtube.com/watch?v=aOmLMr1DIUM", source: "YouTube" },
      { type: "practice", title: "Sorting and Searching Problems", url: "https://cses.fi/problemset/list/", source: "CSES" }
    ],
    eli5: "Instead of sorting things by hand (which is slow and tiring), C++ gives you a magic command called sort() that does it for you, super fast. It is like asking a super-smart robot to organize your toys by size — the robot knows the fastest tricks and does it in seconds, even if you have millions of toys. You can even tell the robot 'sort biggest first!' or 'sort by color then by size!' It is your ultimate sorting tool.",
    codeWalkthrough: [
      "sort(v.begin(), v.end()); — this sorts the entire vector v in ascending order. begin() points to the first element and end() points just past the last element. This range notation is standard in C++ STL.",
      "sort(v.begin(), v.end(), descending); — here we pass our custom comparison function. It tells sort() that a should come before b when a > b, resulting in descending order.",
      "auto lo = lower_bound(v.begin(), v.end(), 2); — lower_bound uses binary search to find the first element >= 2. The 'auto' keyword lets C++ figure out the iterator type for us.",
      "auto hi = upper_bound(v.begin(), v.end(), 2); — upper_bound finds the first element > 2. The elements between lo and hi are all equal to 2.",
      "(hi - lo) — subtracting two iterators gives the number of elements between them. This tells us how many times 2 appears in the sorted vector.",
      "vector<pair<int,int>> scores — pairs are sorted by first element, then second. So (85,3) comes before (90,1), and (90,1) comes before (90,2)."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> v = {5, 3, 1, 4, 2};

    // Find the value 3 using lower_bound
    auto it = lower_bound(v.begin(), v.end(), 3);
    if (it != v.end() && *it == 3) {
        cout << "Found 3 at index " << (it - v.begin()) << "\\n";
    } else {
        cout << "3 not found\\n";
    }

    return 0;
}`,
      hint: "lower_bound uses binary search. What is the one requirement for binary search to work correctly?",
      answer: "The bug is that the vector is not sorted! lower_bound requires sorted data because it uses binary search internally. Without sorting, it may look in the wrong half and miss the element entirely. Fix: add sort(v.begin(), v.end()); before calling lower_bound."
    },
    difficulty: "intermediate",
    prereqs: [14]
  },
  // =============================================
  // LESSON 27: Frequency Counting — Who Appears Most?
  // =============================================
  {
    id: 27,
    title: "Frequency Counting — Who Appears Most?",
    subtitle: "Count how often each element appears like a pro",
    analogy: "Imagine taking attendance in a classroom. As each student says their name, you put a tally mark next to their name on your sheet. At the end, you can see exactly who was present and how many times each name was called. Frequency counting works the same way — you go through your data and keep a count for each value you see.",
    points: [
      { t: "What is Frequency Counting?", d: "Frequency counting means figuring out how many times each element appears in a collection. Given [1, 3, 2, 1, 3, 1], the frequencies are: 1 appears 3 times, 2 appears 1 time, 3 appears 2 times. This is one of the most common patterns in CP!" },
      { t: "Using an Array as a Counter", d: "If values range from 0 to some max value, use a simple array: int freq[MAX] = {0}; Then for each element x, do freq[x]++. This is O(1) per element — super fast! Works great when values are small (like 0 to 1000)." },
      { t: "Using map for Large Ranges", d: "If values can be huge (like up to 10^9), an array would waste too much memory. Instead, use map<int, int> freq; and do freq[x]++. A map only stores entries for values that actually appear. Each operation is O(log n)." },
      { t: "Finding the Most Frequent Element", d: "After counting frequencies, loop through your frequency data to find the maximum count. Keep track of which element has the highest frequency. If there is a tie, the problem will usually specify which one to pick (first occurrence, smallest value, etc.)." },
      { t: "Finding the Least Frequent Element", d: "Similarly, you can find elements that appear only once (unique elements) or the least frequent element. These are common in problems like 'find the unique number' or 'find the element that appears an odd number of times.'" },
      { t: "Counting Characters in Strings", d: "For strings, you can count character frequencies using an array of size 26 (for lowercase letters): freq[s[i] - 'a']++. The expression s[i] - 'a' converts a letter to a number: 'a' becomes 0, 'b' becomes 1, ..., 'z' becomes 25." },
      { t: "Frequency Counting Applications", d: "Frequency counting is used in: checking if two strings are anagrams, finding duplicate elements, computing histograms, solving problems about majorities, and many string manipulation problems. It is a fundamental building block." },
      { t: "unordered_map for Speed", d: "If you need map-like behavior but faster, use unordered_map<int, int>. It uses a hash table for O(1) average operations instead of map's O(log n). However, in CP, unordered_map can sometimes be slow due to hash collisions, so use it carefully." }
    ],
    whatIs: "Frequency counting is the technique of counting how many times each distinct element appears in a collection of data. Using arrays (for small value ranges) or maps (for large ranges), you can quickly build a frequency table that answers questions like 'what appears most?' and 'what appears exactly once?'",
    realWorld: "Frequency counting is everywhere: word clouds show the most common words in a text, music apps track your most-played songs, websites count page views, election results count votes per candidate, and spam filters count suspicious word frequencies in emails. Any time you see 'most popular' or 'top 10,' frequency counting is behind it.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Method 1: Array-based frequency counting
    int n;
    cin >> n;
    vector<int> arr(n);
    int freq[1001] = {0}; // Values 0 to 1000

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        freq[arr[i]]++;
    }

    // Find most frequent element
    int maxFreq = 0, mostCommon = 0;
    for (int i = 0; i <= 1000; i++) {
        if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            mostCommon = i;
        }
    }
    cout << "Most common: " << mostCommon << " (appears " << maxFreq << " times)\\n";

    // Method 2: Map-based frequency counting
    map<int, int> freqMap;
    for (int i = 0; i < n; i++) {
        freqMap[arr[i]]++;
    }
    cout << "Distinct elements: " << freqMap.size() << "\\n";
    for (auto& p : freqMap) {
        cout << p.first << " -> " << p.second << " times\\n";
    }

    // Character frequency in a string
    string s = "hello";
    int charFreq[26] = {0};
    for (char c : s) charFreq[c - 'a']++;
    for (int i = 0; i < 26; i++) {
        if (charFreq[i] > 0) {
            cout << (char)('a' + i) << ": " << charFreq[i] << "\\n";
        }
    }

    return 0;
}`,
    funFact: "The idea of counting frequencies is at the heart of one of the most famous algorithms in computer science: Huffman coding, used in ZIP file compression. Letters that appear more frequently get shorter codes, and letters that appear rarely get longer codes. This is why ZIP files are smaller — they use frequency counting to be clever about encoding!",
    quiz: [
      { q: "Given array [4, 2, 4, 3, 2, 4], what is the frequency of 4?", opts: ["1", "2", "3", "4"], ans: 2 },
      { q: "When should you use map instead of an array for frequency counting?", opts: ["Always, maps are better", "When values are small (0 to 100)", "When values can be very large or negative", "When you need to sort the frequencies"], ans: 2 },
      { q: "What does charFreq[s[i] - 'a']++ do?", opts: ["Converts the character to uppercase", "Counts the frequency of each lowercase letter", "Sorts the characters", "Removes duplicate characters"], ans: 1 },
      { q: "What is the time complexity of counting frequencies using an array?", opts: ["O(n log n)", "O(n^2)", "O(n)", "O(1)"], ans: 2 },
      { q: "How can you find the number of distinct elements using a map?", opts: ["map.count()", "map.length()", "map.size()", "map.distinct()"], ans: 2 }
    ],
    challenge: "Read a string and determine if it is an anagram of another string. Two strings are anagrams if they have exactly the same character frequencies (like 'listen' and 'silent'). Read two strings and print 'YES' if they are anagrams, 'NO' otherwise. Test with 'listen'/'silent' (YES) and 'hello'/'world' (NO).",
    resources: [
      { type: "article", title: "Frequency Counting Techniques", url: "https://www.geeksforgeeks.org/counting-frequencies-of-array-elements/", source: "GeeksforGeeks" },
      { type: "video", title: "Hashing and Frequency Arrays", url: "https://www.youtube.com/watch?v=Co_S2kQ1qOI", source: "YouTube" },
      { type: "practice", title: "Two Sets Problem", url: "https://cses.fi/problemset/task/1092", source: "CSES" }
    ],
    eli5: "Imagine you have a bag full of colorful marbles and you want to know how many of each color you have. You make a chart with one row for each color. Then you pull out marbles one by one — each time you pull a red marble, you add one tally mark to the red row. Blue marble? Tally mark on blue row. When the bag is empty, your chart tells you exactly how many of each color. That is frequency counting! In programming, instead of marbles and charts, we use numbers and arrays (or maps).",
    codeWalkthrough: [
      "int freq[1001] = {0}; — we create an array of 1001 zeros (for values 0 through 1000). Each position freq[x] will count how many times the number x appears. Initializing to 0 is important!",
      "freq[arr[i]]++; — for each element arr[i], we increment its count. If arr[i] is 5, then freq[5] goes up by 1. After processing all elements, freq[5] tells us how many times 5 appeared.",
      "if (freq[i] > maxFreq) — we scan through all possible values to find which one has the highest count. This finds the most frequent element.",
      "map<int, int> freqMap; freqMap[arr[i]]++; — a map works like our frequency array but handles any integer value, not just 0-1000. It only stores entries for values that actually exist.",
      "freqMap.size() — returns the number of distinct elements. Since map only creates entries for values we have seen, its size equals the count of unique values.",
      "charFreq[c - 'a']++; — for a character c, subtracting 'a' gives its position in the alphabet (a=0, b=1, ..., z=25). This lets us use a small array of size 26 to count all lowercase letters."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    int freq[100] = {0};

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        freq[arr[i]]++;
    }

    int maxFreq = 0, answer = 0;
    for (int i = 0; i < 100; i++) {
        if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            answer = i;
        }
    }
    cout << "Most frequent: " << answer << "\\n";
    return 0;
}`,
      hint: "What if the input contains a number greater than 99? What happens when you write to freq[150]?",
      answer: "The bug is that freq has size 100 (indices 0-99), but input values could be 100 or larger. Writing to freq[150] is an out-of-bounds access — it corrupts memory and causes undefined behavior. Fix: either make the array large enough (e.g., freq[1000001]) if you know the max value, or use a map<int,int> which handles any value safely."
    },
    difficulty: "intermediate",
    prereqs: [14]
  },
  // =============================================
  // LESSON 28: Two Pointer Technique
  // =============================================
  {
    id: 28,
    title: "Two Pointer Technique",
    subtitle: "Two markers working together to solve problems fast",
    analogy: "Imagine two friends searching a long hallway for a specific pair of doors. One friend starts at the left end, the other at the right end, and they walk toward each other. Based on what they see, they decide who should take the next step. They will always meet in the middle, having checked every useful pair without wasting time. That is the two pointer technique!",
    points: [
      { t: "What is Two Pointer?", d: "The two pointer technique uses two indices (pointers) that move through an array in a coordinated way. Often one starts at the beginning and one at the end, and they move toward each other. This lets us solve certain problems in O(n) instead of O(n^2)." },
      { t: "Finding a Pair with Target Sum", d: "Given a sorted array and target sum, place left pointer at index 0 and right pointer at index n-1. If arr[left] + arr[right] == target, found it! If sum is too small, move left pointer right (to increase sum). If too big, move right pointer left (to decrease sum)." },
      { t: "Why It Works on Sorted Data", d: "In a sorted array, moving the left pointer right increases the sum, and moving the right pointer left decreases it. This means we can systematically explore all relevant pairs without checking every possible combination. Sorting gives us direction!" },
      { t: "Two Pointers Moving Same Direction", d: "Sometimes both pointers start at the beginning and move right. This is useful for problems like removing duplicates from a sorted array: one pointer (i) scans through, and another (j) marks where to write the next unique element." },
      { t: "Removing Duplicates Example", d: "Sorted array: [1,1,2,2,3]. Use pointer j=0 for writing position. For each element at pointer i: if arr[i] != arr[j], increment j and copy arr[i] to arr[j]. Result: [1,2,3,...] with j+1 = 3 unique elements." },
      { t: "Time Complexity Advantage", d: "Without two pointers, finding a pair with a given sum requires two nested loops: O(n^2). With two pointers on sorted data, each pointer moves at most n times, so the total work is O(n). For n = 100,000, that is 100,000 vs 10,000,000,000 operations!" },
      { t: "When to Use Two Pointers", d: "Look for these clues: (1) the array is sorted or can be sorted, (2) you need to find pairs or subarrays satisfying some condition, (3) a brute force solution uses two nested loops. If you see these, two pointers might help!" },
      { t: "Common Variations", d: "Two pointer variations include: (1) opposite ends moving inward (pair sum), (2) same direction with fast/slow pointers (cycle detection, duplicates), (3) sliding window (upcoming topic!). All share the idea of two coordinated indices." }
    ],
    whatIs: "The two pointer technique is an algorithmic pattern where two indices traverse an array in a coordinated manner to solve problems efficiently. By strategically moving the pointers based on current values, we can find pairs, remove duplicates, and solve subarray problems in O(n) time, avoiding the O(n^2) brute force approach.",
    realWorld: "Two pointer logic appears in merge operations (merging two sorted lists into one), in text editors (find and replace uses two pointers to scan and write), in traffic management (cars merging from two lanes), and in DNA sequence alignment (comparing two gene sequences simultaneously).",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Problem 1: Find pair with target sum in sorted array
    int n, target;
    cin >> n >> target;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    sort(arr.begin(), arr.end());

    int left = 0, right = n - 1;
    bool found = false;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) {
            cout << "Pair found: " << arr[left] << " + " << arr[right] << " = " << target << "\\n";
            found = true;
            break;
        } else if (sum < target) {
            left++;  // Need bigger sum, move left pointer right
        } else {
            right--; // Need smaller sum, move right pointer left
        }
    }
    if (!found) cout << "No pair found\\n";

    // Problem 2: Count unique elements in sorted array
    sort(arr.begin(), arr.end());
    int unique = 1; // First element is always unique
    for (int i = 1; i < n; i++) {
        if (arr[i] != arr[i - 1]) {
            unique++;
        }
    }
    cout << "Unique elements: " << unique << "\\n";

    return 0;
}`,
    funFact: "The two pointer technique is one of the most asked patterns in coding interviews at top tech companies. Amazon, Google, and Meta all love two-pointer questions! The technique was popularized in the 1960s through merge sort, but the formal 'two pointer' pattern name became common in competitive programming communities in the 2000s.",
    quiz: [
      { q: "In the pair-sum two pointer approach on a sorted array, if the current sum is too small, which pointer should you move?", opts: ["Move the right pointer left", "Move the left pointer right", "Move both pointers", "Reset both pointers to the middle"], ans: 1 },
      { q: "What is the time complexity of the two pointer pair-sum approach on a sorted array?", opts: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"], ans: 2 },
      { q: "Why does the two pointer technique require a sorted array for pair-sum problems?", opts: ["Because unsorted arrays cannot have pairs", "Because sorting makes the array smaller", "Because sorting lets us know which direction to move each pointer", "Because C++ requires sorted input"], ans: 2 },
      { q: "In the remove-duplicates two pointer approach, what do the two pointers represent?", opts: ["Start and end of the array", "Current read position and current write position", "Minimum and maximum values", "Two different arrays"], ans: 1 },
      { q: "For a sorted array [1, 2, 3, 4, 5] with target sum 7, which pair does the two pointer approach find first?", opts: ["2 + 5", "3 + 4", "1 + 6", "It depends on the implementation"], ans: 0 }
    ],
    challenge: "Given a sorted array and a target sum, find ALL pairs that add up to the target (not just the first one). Modify the two pointer approach so that after finding a pair, it continues searching. Also handle duplicates — do not print the same pair twice. Test with [1, 2, 3, 4, 5, 6, 7, 8, 9] and target 10.",
    resources: [
      { type: "article", title: "Two Pointer Technique", url: "https://www.geeksforgeeks.org/two-pointers-technique/", source: "GeeksforGeeks" },
      { type: "video", title: "Two Pointer Algorithm Explained", url: "https://www.youtube.com/watch?v=On03HWe2tZM", source: "YouTube" },
      { type: "practice", title: "Sum of Two Values", url: "https://cses.fi/problemset/task/1640", source: "CSES" }
    ],
    eli5: "Think of a number line from 1 to 10. You need to find two numbers that add up to 9. Put one finger on 1 (the smallest) and another finger on 10 (the biggest). 1 + 10 = 11 — too big! Move your right finger to 9. 1 + 9 = 10 — still too big! Move right finger to 8. 1 + 8 = 9 — that is it! If the sum was too small, you would move your left finger right instead. Your two fingers work as a team, and you never have to check every single pair. That is two pointers!",
    codeWalkthrough: [
      "int left = 0, right = n - 1; — we place our two pointers at opposite ends of the sorted array. left starts at the smallest element, right at the largest.",
      "int sum = arr[left] + arr[right]; — we calculate the sum of the elements at our two pointers. This is the pair we are currently examining.",
      "if (sum == target) — if the sum equals our target, we found a valid pair! We print it and stop searching.",
      "else if (sum < target) { left++; } — if the sum is too small, we need a bigger number. Since the array is sorted, moving left forward gives us the next bigger element from the left side.",
      "else { right--; } — if the sum is too big, we need a smaller number. Moving right backward gives us the next smaller element from the right side.",
      "while (left < right) — we continue as long as the pointers have not crossed. If left >= right, there are no more valid pairs to check."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11};
    int target = 12;
    int left = 0, right = arr.size();

    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) {
            cout << arr[left] << " + " << arr[right] << "\\n";
            break;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return 0;
}`,
      hint: "The array has 6 elements (indices 0 to 5). What is arr.size()? What happens when you access arr[arr.size()]?",
      answer: "The bug is that right is initialized to arr.size() which equals 6, but the valid indices are 0-5. Accessing arr[6] is out of bounds! The fix is right = arr.size() - 1 to start at the last valid index."
    },
    difficulty: "intermediate",
    prereqs: [14, 26]
  },
  // =============================================
  // LESSON 29: Prefix Sum — The Running Total
  // =============================================
  {
    id: 29,
    title: "Prefix Sum — The Running Total",
    subtitle: "Answer range sum queries in the blink of an eye",
    analogy: "Imagine a cash register receipt that shows a running total after each item. If you bought items costing 3, 5, 2, 8, the receipt shows totals: 3, 8, 10, 18. Now if someone asks 'how much did items 2 through 4 cost?' you just subtract: 18 - 3 = 15. You did not have to add 5 + 2 + 8 manually! That is prefix sum — pre-calculate running totals so you can answer range questions instantly.",
    points: [
      { t: "What is Prefix Sum?", d: "A prefix sum array stores the cumulative sum of elements from the start up to each position. For array [3, 5, 2, 8], the prefix sum is [3, 8, 10, 18]. prefix[i] = arr[0] + arr[1] + ... + arr[i]. It is like a running total." },
      { t: "Building the Prefix Sum Array", d: "Start by setting prefix[0] = arr[0]. Then for each i from 1 to n-1: prefix[i] = prefix[i-1] + arr[i]. Each element is the previous running total plus the current element. This takes O(n) time — just one pass through the array." },
      { t: "Range Sum in O(1)", d: "To find the sum of elements from index l to index r: sum = prefix[r] - prefix[l-1]. If l is 0, just use prefix[r]. This is O(1) — constant time, no matter how large the range! Without prefix sums, you would need O(n) to add up the range." },
      { t: "Why Prefix Sum is Powerful", d: "Imagine 100,000 queries each asking for the sum of a range. Without prefix sums: 100,000 * n operations. With prefix sums: n operations to build, then 100,000 * 1 to answer. For n = 100,000, that is 10 billion vs 200,000 operations!" },
      { t: "1-Indexed Prefix Sum (Easier Formula)", d: "Many programmers use 1-based indexing for prefix sums: prefix[0] = 0, prefix[i] = prefix[i-1] + arr[i] for i from 1 to n. Then sum from l to r = prefix[r] - prefix[l-1] works for ALL cases, even when l = 1. No special cases!" },
      { t: "Common Applications", d: "Prefix sums are used in: range sum queries, finding subarrays with a given sum, calculating averages of subarrays, 2D prefix sums for matrix queries, and many optimization problems. It is one of the most useful CP techniques." },
      { t: "Prefix Sum with Modulo", d: "If the problem asks for sums modulo m, just apply modulo when building the prefix sum: prefix[i] = (prefix[i-1] + arr[i]) % m. Be careful with subtraction — (prefix[r] - prefix[l-1] + m) % m handles the case where the subtraction goes negative." },
      { t: "Difference Array (Inverse of Prefix Sum)", d: "A difference array is the inverse operation. If you need to add a value to all elements in a range [l, r], instead of updating each element, just add to diff[l] and subtract from diff[r+1]. Then take the prefix sum of diff to get the final array. This is O(1) per update!" }
    ],
    whatIs: "A prefix sum is a pre-computed array where each element stores the cumulative sum of all elements from the beginning up to that position. By building this array once in O(n), you can answer any range sum query (what is the sum from index l to index r?) in O(1) time. This transforms slow repeated calculations into instant lookups.",
    realWorld: "Prefix sums are used in financial running balances (bank statements show running totals), in image processing (integral images for fast blur operations), in databases (cumulative aggregations), and in statistics (cumulative distribution functions). Any time you need running totals or range queries, prefix sums are the tool.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, q;
    cin >> n >> q;

    // 1-indexed prefix sum (easier formula)
    vector<long long> arr(n + 1), prefix(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        cin >> arr[i];
        prefix[i] = prefix[i - 1] + arr[i];
    }

    // Answer q range sum queries
    while (q--) {
        int l, r;
        cin >> l >> r;
        long long rangeSum = prefix[r] - prefix[l - 1];
        cout << rangeSum << "\\n";
    }

    return 0;
}`,
    funFact: "Prefix sums in 2D are called 'integral images' and were a key innovation in the Viola-Jones face detection algorithm (2001), which was one of the first real-time face detectors. Your phone camera detecting faces uses a descendant of 2D prefix sums! The technique lets the algorithm compute the sum of any rectangular region in constant time, making face detection fast enough to run in real-time.",
    quiz: [
      { q: "For array [2, 4, 6, 8], what is prefix[3] (0-indexed)?", opts: ["8", "12", "20", "6"], ans: 2 },
      { q: "How do you compute the sum of elements from index l to r using prefix sums?", opts: ["prefix[r] + prefix[l]", "prefix[r] - prefix[l - 1]", "prefix[r] * prefix[l]", "prefix[r + 1] - prefix[l]"], ans: 1 },
      { q: "What is the time complexity to answer ONE range sum query using prefix sums?", opts: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], ans: 2 },
      { q: "Why do many programmers use 1-indexed prefix sums with prefix[0] = 0?", opts: ["It uses less memory", "It avoids special cases when l = 1", "It is faster to compute", "C++ requires 1-indexed arrays"], ans: 1 },
      { q: "How long does it take to BUILD the prefix sum array?", opts: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], ans: 2 }
    ],
    challenge: "Read an array of n numbers and q queries. Each query gives l and r. Print the sum of elements from index l to r (1-indexed). Also print the maximum range sum across all queries. Test with array [1, 3, 5, 7, 9] and queries: (1,3) should give 9, (2,5) should give 24, (1,5) should give 25.",
    resources: [
      { type: "article", title: "Prefix Sum Array", url: "https://cp-algorithms.com/data_structures/prefix_sums.html", source: "CP-Algorithms" },
      { type: "video", title: "Prefix Sums Tutorial", url: "https://www.youtube.com/watch?v=7pJo_rM0z_s", source: "YouTube" },
      { type: "practice", title: "Static Range Sum Queries", url: "https://cses.fi/problemset/task/1646", source: "CSES" }
    ],
    eli5: "Imagine you are counting steps as you walk. After 1 block you have walked 10 steps. After 2 blocks, 25 steps total. After 3 blocks, 45 steps total. Now your friend asks 'how many steps was block 2 to block 3?' Instead of counting again, you just subtract: 45 - 10 = 35 steps. You saved the running total at each block, so answering any 'how many between X and Y' question is just one subtraction. That is prefix sum — save running totals, answer questions instantly!",
    codeWalkthrough: [
      "vector<long long> prefix(n + 1, 0); — we create a prefix sum array of size n+1, filled with zeros. We use 1-based indexing with prefix[0] = 0 so the range sum formula works cleanly.",
      "prefix[i] = prefix[i - 1] + arr[i]; — each prefix sum entry equals the previous total plus the current element. After this loop, prefix[i] holds the sum of arr[1] through arr[i].",
      "long long rangeSum = prefix[r] - prefix[l - 1]; — the magic formula! The sum from l to r equals (sum from 1 to r) minus (sum from 1 to l-1). Two lookups and one subtraction — O(1)!",
      "We use long long because sums can get very large. If each element is up to 10^9 and we have 200,000 elements, the total sum could be up to 2 * 10^14, which overflows a 32-bit int."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 5;
    int arr[] = {2, 4, 6, 8, 10};
    int prefix[5];

    prefix[0] = arr[0];
    for (int i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }

    // Query: sum from index 0 to 3
    cout << prefix[3] << "\\n"; // Correct: 20

    // Query: sum from index 2 to 4
    cout << prefix[4] - prefix[1] << "\\n"; // Should be 6+8+10 = 24

    // Query: sum from index 0 to 0
    cout << prefix[0] - prefix[-1] << "\\n"; // Just element 0 = 2

    return 0;
}`,
      hint: "Look at the last query. What is prefix[-1]? Is that a valid array index?",
      answer: "The bug is accessing prefix[-1] which is out of bounds — undefined behavior! With 0-indexed prefix sums, the formula sum(l,r) = prefix[r] - prefix[l-1] breaks when l = 0 because l-1 = -1. Fix: use 1-indexed prefix sums with prefix[0] = 0, or add a special case: if l == 0, just use prefix[r] directly."
    },
    difficulty: "intermediate",
    prereqs: [14]
  },
  // =============================================
  // LESSON 30: Greedy Algorithms — Always Pick the Best
  // =============================================
  {
    id: 30,
    title: "Greedy Algorithms — Always Pick the Best",
    subtitle: "Make the best choice at every step and hope for the best",
    analogy: "Imagine you are at an all-you-can-eat buffet with a small plate. You want to eat the most delicious food possible. The greedy strategy? At each trip, pick the most delicious dish available right now. You do not plan ahead for future trips — you just grab the best thing you see each time. Sometimes this gives the overall best result, sometimes it does not. Knowing when it works is the key to greedy algorithms!",
    points: [
      { t: "What is a Greedy Algorithm?", d: "A greedy algorithm makes the locally optimal choice at each step, hoping this leads to a globally optimal solution. It never looks back or reconsiders previous choices. It is simple, fast, and — when it works — elegant." },
      { t: "The Coin Change Problem (Greedy)", d: "Given coins of 1, 5, 10, 25 cents, make change for 36 cents using the fewest coins. Greedy says: always pick the largest coin that fits. 25 + 10 + 1 = 36 cents, 3 coins. This works for standard US coin denominations!" },
      { t: "When Greedy Fails", d: "Greedy does not always work! With coins [1, 3, 4], making change for 6: greedy picks 4+1+1 = 3 coins, but 3+3 = 2 coins is better! Greedy fails because picking the largest coin first is not always optimal with non-standard denominations." },
      { t: "Activity Selection Problem", d: "You have n activities with start and end times. You can only do one at a time. Greedy strategy: sort by end time, always pick the next activity that starts after the current one ends. This gives the maximum number of activities! And it is provably optimal." },
      { t: "Why Sort by End Time?", d: "Sorting by end time works because choosing the activity that finishes earliest leaves the most room for future activities. It is like always picking the shortest task first to fit more tasks into your day." },
      { t: "Proving Greedy Works", d: "To prove a greedy algorithm is correct, use the 'exchange argument': assume there is a better solution. Show you can swap choices to match the greedy solution without making things worse. If no swap makes it worse, greedy is optimal!" },
      { t: "Greedy vs Brute Force", d: "Brute force tries all possible combinations — O(2^n) or worse. Greedy makes one choice per step — usually O(n log n) with sorting. When greedy works, it is DRAMATICALLY faster. The challenge is knowing when it works!" },
      { t: "Common Greedy Patterns", d: "Look for greedy when: (1) the problem asks for minimum/maximum of something, (2) you can sort the data meaningfully, (3) making the locally best choice does not block better future choices, (4) the problem has an 'optimal substructure' — the best solution contains best sub-solutions." }
    ],
    whatIs: "A greedy algorithm is a problem-solving approach that makes the best possible choice at each step without reconsidering previous choices. It is like always picking the best option available right now. Greedy algorithms are fast and simple, but they only work for certain types of problems where local optimal choices lead to a global optimum.",
    realWorld: "Greedy algorithms power many real-world systems: GPS navigation (always take the shortest next road), Huffman coding in file compression (assign shortest codes to most frequent symbols), job scheduling in operating systems (shortest job first), and even how we naturally make decisions (take the closest parking spot).",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Problem 1: Coin Change (Greedy)
    int amount;
    cin >> amount;
    int coins[] = {25, 10, 5, 1};
    int totalCoins = 0;

    cout << "Making change for " << amount << " cents:\\n";
    for (int i = 0; i < 4; i++) {
        int count = amount / coins[i];
        if (count > 0) {
            cout << count << " x " << coins[i] << " cents\\n";
            totalCoins += count;
            amount %= coins[i];
        }
    }
    cout << "Total coins: " << totalCoins << "\\n\\n";

    // Problem 2: Activity Selection
    int n;
    cin >> n;
    vector<pair<int,int>> activities(n); // {end, start}
    for (int i = 0; i < n; i++) {
        int s, e;
        cin >> s >> e;
        activities[i] = {e, s}; // Store end first for sorting
    }
    sort(activities.begin(), activities.end()); // Sort by end time

    int count = 1;
    int lastEnd = activities[0].first;
    cout << "Selected: [" << activities[0].second << "," << activities[0].first << "]";

    for (int i = 1; i < n; i++) {
        if (activities[i].second >= lastEnd) { // Start >= last end
            count++;
            lastEnd = activities[i].first;
            cout << " [" << activities[i].second << "," << activities[i].first << "]";
        }
    }
    cout << "\\nMax activities: " << count << "\\n";

    return 0;
}`,
    funFact: "The activity selection problem was one of the first problems proven to have an optimal greedy solution, studied by computer scientists in the 1970s. The greedy approach is not just theory — airline companies use variants of it to schedule flights and maximize the number of flights per gate. FedEx and UPS use greedy-based algorithms to optimize their delivery routes every single day!",
    quiz: [
      { q: "What defines a greedy algorithm?", opts: ["It tries every possible solution", "It makes the locally optimal choice at each step", "It uses recursion to break problems into subproblems", "It always finds the best solution"], ans: 1 },
      { q: "For US coins (1, 5, 10, 25), what is the greedy solution for 41 cents?", opts: ["25 + 10 + 5 + 1 = 4 coins", "25 + 10 + 1 + 1 + 1 + 1 + 1 + 1 = 8 coins", "10 + 10 + 10 + 10 + 1 = 5 coins", "25 + 16 = 2 coins"], ans: 0 },
      { q: "In the activity selection problem, why do we sort by END time?", opts: ["It is alphabetical order", "Ending earliest leaves most room for future activities", "Start times are not important", "It makes the code simpler"], ans: 1 },
      { q: "With coins [1, 3, 4], what does greedy give for amount 6?", opts: ["3 + 3 = 2 coins (optimal)", "4 + 1 + 1 = 3 coins (not optimal)", "6 x 1 = 6 coins", "It cannot make 6"], ans: 1 },
      { q: "What is the typical time complexity of a greedy algorithm?", opts: ["O(2^n)", "O(n!)", "O(n log n) due to sorting", "O(n^3)"], ans: 2 }
    ],
    challenge: "Implement the activity selection problem. Read n activities with start and end times, and find the maximum number of non-overlapping activities. Test with: 6 activities: (1,3), (2,5), (3,6), (5,7), (6,8), (8,10). The greedy solution should select 4 activities.",
    resources: [
      { type: "article", title: "Greedy Algorithms", url: "https://cp-algorithms.com/schedules/schedule_one_machine.html", source: "CP-Algorithms" },
      { type: "video", title: "Greedy Algorithms Explained", url: "https://www.youtube.com/watch?v=bC7o8P_Ste4", source: "YouTube" },
      { type: "practice", title: "Movie Festival", url: "https://cses.fi/problemset/task/1629", source: "CSES" }
    ],
    eli5: "Imagine you are picking apples from trees along a path. At each tree, you pick the biggest apple you can reach. You do not think about trees ahead — you just grab the best one NOW and move on. That is greedy! Sometimes it gives you the most apples overall (like when all trees have similar sizes). But sometimes a tree with small apples now leads to a tree with HUGE apples later, and greedy misses it. The trick is knowing when 'always pick the best now' gives the best result overall.",
    codeWalkthrough: [
      "int count = amount / coins[i]; — integer division tells us how many of this coin denomination we can use. For 36 / 25 = 1, we use one 25-cent coin.",
      "amount %= coins[i]; — the modulo gives us the remaining amount after using those coins. 36 % 25 = 11, so we still need 11 cents.",
      "activities[i] = {e, s}; — we store end time first in the pair. Since sort() orders pairs by first element, this automatically sorts by end time.",
      "sort(activities.begin(), activities.end()); — sorting by end time is the key greedy insight. The activity that ends earliest gives us the most room for future activities.",
      "if (activities[i].second >= lastEnd) — we check if this activity starts at or after the last selected activity ends. If so, there is no overlap and we can include it.",
      "lastEnd = activities[i].first; — update our tracking variable to the end time of the newly selected activity. Future activities must start after this time."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> acts(n);
    for (int i = 0; i < n; i++) {
        cin >> acts[i].first >> acts[i].second; // start, end
    }
    sort(acts.begin(), acts.end()); // Sort by start time

    int count = 1;
    int lastEnd = acts[0].second;
    for (int i = 1; i < n; i++) {
        if (acts[i].first >= lastEnd) {
            count++;
            lastEnd = acts[i].second;
        }
    }
    cout << count << "\\n";
    return 0;
}`,
      hint: "The greedy activity selection requires sorting by END time, not start time. What happens if you sort by start time instead?",
      answer: "The bug is sorting by start time instead of end time. With start-time sorting, you might pick an activity that starts early but ends very late, blocking many short activities. For example, activities (1,100), (2,3), (4,5), (6,7): sorting by start picks (1,100) first and only gets 1 activity, but sorting by end gives (2,3), (4,5), (6,7) = 3 activities. Fix: store as {end, start} and sort, or use a custom comparator."
    },
    difficulty: "intermediate",
    prereqs: [26]
  },
  // =============================================
  // LESSON 31: More Greedy Problems
  // =============================================
  {
    id: 31,
    title: "More Greedy Problems",
    subtitle: "Practice the greedy mindset with classic problems",
    analogy: "Packing a suitcase for vacation is a greedy problem. You have limited space and want to bring the most valuable items. The greedy approach? Rank items by value-per-size and start packing from the most valuable per unit of space. Heaviest textbook? Maybe skip it. Lightest snack bag that brings you joy? Definitely pack it first!",
    points: [
      { t: "Fractional Knapsack Problem", d: "You have a bag that holds W kg. Items have weights and values. Unlike 0/1 knapsack, you can take FRACTIONS of items. Greedy works perfectly here: sort by value/weight ratio descending, take as much as possible of each item starting from the best ratio." },
      { t: "Why Greedy Works for Fractional Knapsack", d: "Since we can take fractions, there is no reason not to take the highest-value-per-kg item first. Each unit of weight we use on the best ratio item gives us more value than using it on anything else. This greedy choice is always optimal." },
      { t: "Fractional Knapsack Example", d: "Bag holds 50 kg. Items: (60 value, 10 kg), (100 value, 20 kg), (120 value, 30 kg). Ratios: 6, 5, 4. Take all of item 1 (10kg, value 60), all of item 2 (20kg, value 100), then 20/30 of item 3 (20kg, value 80). Total: 50kg, value 240." },
      { t: "Minimum Platforms Problem", d: "Trains arrive and depart at different times. Find the minimum number of platforms needed so no train waits. Greedy approach: sort all arrival and departure times. Scan through — arrival means +1 platform needed, departure means -1. Track the maximum at any point." },
      { t: "How Minimum Platforms Works", d: "Arrivals: [9:00, 9:40, 9:50, 11:00]. Departures: [9:10, 12:00, 11:20, 11:30]. Sort all events by time. Walk through and count: +1 at arrival, -1 at departure. The peak count is the answer. It is like watching a parking lot and counting the maximum cars at any moment." },
      { t: "Approaching Greedy Problems", d: "Step 1: Think about what to sort by. Step 2: Determine the greedy rule (what is the 'best' choice at each step?). Step 3: Walk through examples to verify. Step 4: Try to find a counterexample where greedy fails. If you cannot find one, it probably works!" },
      { t: "Proving Greedy Correctness", d: "The exchange argument: assume an optimal solution differs from greedy at some step. Show that swapping to match the greedy choice does not make things worse. If every swap is safe, greedy gives an optimal solution. This is the formal way to verify your greedy approach." },
      { t: "Common Greedy Problem Types", d: "Classic greedy problems include: activity selection, fractional knapsack, coin change (standard denominations), job scheduling with deadlines, minimum spanning tree (Kruskal/Prim), and Huffman coding. Recognizing these patterns is key to solving new problems." },
      { t: "Greedy vs Dynamic Programming", d: "If greedy fails (like coin change with weird denominations), you often need dynamic programming (DP) — which we will learn later. DP considers ALL choices and picks the best, while greedy only considers the current best. Greedy is faster but less general." }
    ],
    whatIs: "This lesson expands your greedy algorithm toolkit with more classic problems. We explore the fractional knapsack (take the most valuable items per unit weight), the minimum platforms problem (handle overlapping intervals), and develop a systematic approach to recognize when greedy algorithms are applicable and how to prove they work.",
    realWorld: "Fractional knapsack is used in investment portfolio optimization (allocate budget to highest-return assets), in cargo loading (fill a truck with the most valuable goods), and in bandwidth allocation (give more bandwidth to higher-priority traffic). The minimum platforms problem is literally used by train stations and airports to plan infrastructure!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Fractional Knapsack
    int n, W;
    cin >> n >> W;
    vector<pair<double, pair<int,int>>> items(n); // {ratio, {value, weight}}

    for (int i = 0; i < n; i++) {
        int v, w;
        cin >> v >> w;
        double ratio = (double)v / w;
        items[i] = {ratio, {v, w}};
    }

    // Sort by value/weight ratio in descending order
    sort(items.begin(), items.end(), greater<pair<double, pair<int,int>>>());

    double totalValue = 0;
    int remainingCapacity = W;

    for (int i = 0; i < n && remainingCapacity > 0; i++) {
        int w = items[i].second.second;
        int v = items[i].second.first;

        if (w <= remainingCapacity) {
            // Take the whole item
            totalValue += v;
            remainingCapacity -= w;
            cout << "Take all of item (value=" << v << ", weight=" << w << ")\\n";
        } else {
            // Take a fraction
            double fraction = (double)remainingCapacity / w;
            totalValue += v * fraction;
            cout << "Take " << fixed << setprecision(2) << fraction * 100
                 << "% of item (value=" << v << ", weight=" << w << ")\\n";
            remainingCapacity = 0;
        }
    }

    cout << "Total value: " << fixed << setprecision(2) << totalValue << "\\n\\n";

    // Minimum Platforms
    int trains;
    cin >> trains;
    vector<int> arrivals(trains), departures(trains);
    for (int i = 0; i < trains; i++) cin >> arrivals[i];
    for (int i = 0; i < trains; i++) cin >> departures[i];

    sort(arrivals.begin(), arrivals.end());
    sort(departures.begin(), departures.end());

    int platforms = 0, maxPlatforms = 0;
    int i = 0, j = 0;
    while (i < trains) {
        if (arrivals[i] <= departures[j]) {
            platforms++;
            maxPlatforms = max(maxPlatforms, platforms);
            i++;
        } else {
            platforms--;
            j++;
        }
    }
    cout << "Minimum platforms needed: " << maxPlatforms << "\\n";

    return 0;
}`,
    funFact: "The knapsack problem is named after the scenario of a thief who has a backpack (knapsack) of limited capacity and must choose which items to steal to maximize total value. The fractional version (where you can cut items) is solvable greedily, but the 0/1 version (whole items only) is one of the famous 'NP-hard' problems — no known fast algorithm exists for it! This distinction between 'can take fractions' and 'must take whole items' is one of the most beautiful examples in computer science of how a small change in problem definition can make the difference between easy and incredibly hard.",
    quiz: [
      { q: "In fractional knapsack, what should you sort items by?", opts: ["Weight (lightest first)", "Value (highest first)", "Value-to-weight ratio (highest first)", "Name (alphabetically)"], ans: 2 },
      { q: "Why does greedy work for fractional knapsack but NOT for 0/1 knapsack?", opts: ["Because fractions are easier to compute", "Because taking fractions means every unit of capacity is optimally used", "Because 0/1 knapsack has fewer items", "Greedy actually works for both"], ans: 1 },
      { q: "In the minimum platforms problem, what events do we track?", opts: ["Only arrivals", "Only departures", "Both arrivals and departures", "The number of passengers"], ans: 2 },
      { q: "If 3 trains arrive at times 1, 2, 3 and depart at times 2, 3, 4, how many platforms are needed?", opts: ["1", "2", "3", "4"], ans: 1 },
      { q: "What is the first step when approaching a greedy problem?", opts: ["Write the code immediately", "Think about what to sort by and what the greedy choice is", "Use dynamic programming instead", "Try all possible solutions"], ans: 1 }
    ],
    challenge: "Implement the fractional knapsack problem. Read n items (each with value and weight) and a knapsack capacity W. Output the maximum total value you can carry. Test with: W=50, items: (60,10), (100,20), (120,30). Expected output: 240.00. Then try: W=15, items: (10,5), (20,10), (30,15). What is the answer?",
    resources: [
      { type: "article", title: "Fractional Knapsack", url: "https://www.geeksforgeeks.org/fractional-knapsack-problem/", source: "GeeksforGeeks" },
      { type: "video", title: "Greedy Algorithm Problems", url: "https://www.youtube.com/watch?v=ARvQcqJ_-NY", source: "YouTube" },
      { type: "practice", title: "Stick Lengths", url: "https://cses.fi/problemset/task/1074", source: "CSES" }
    ],
    eli5: "Imagine you have a bag and a table full of candy. Each candy has a yumminess score and a size. Your bag can only hold so much. What do you do? You figure out which candy gives you the most yumminess for its size. A tiny super-yummy candy? Take it first! A huge candy that is only okay? Maybe just take a piece of it to fill the last bit of space. You are always picking the yummiest-per-bite option. That is fractional knapsack — always take the best deal first!",
    codeWalkthrough: [
      "double ratio = (double)v / w; — we calculate the value-per-unit-weight ratio for each item. The (double) cast ensures we get decimal division, not integer division.",
      "sort(items.begin(), items.end(), greater<...>()); — we sort items by ratio in descending order. greater<> reverses the default ascending sort. Now the best value-per-weight items come first.",
      "if (w <= remainingCapacity) — if the item fits entirely in our remaining capacity, take the whole thing. Add its full value and reduce capacity by its weight.",
      "double fraction = (double)remainingCapacity / w; — if the item does not fit entirely, we take a fraction. If we have 20 kg left and the item weighs 30 kg, we take 20/30 = 2/3 of it.",
      "totalValue += v * fraction; — we add the proportional value. If we take 2/3 of an item worth 120, we get 80 value.",
      "sort(arrivals...) and sort(departures...) — for minimum platforms, we sort arrivals and departures separately. Then we process events in time order using two pointers.",
      "if (arrivals[i] <= departures[j]) — if the next event is an arrival (happens before or at the same time as the next departure), we need one more platform. Otherwise, a train left and we free a platform."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 3, W = 50;
    int values[] = {60, 100, 120};
    int weights[] = {10, 20, 30};

    // Sort by value (descending)
    // (simplified: just process in order)
    double totalValue = 0;
    int remaining = W;

    for (int i = 0; i < n; i++) {
        if (weights[i] <= remaining) {
            totalValue += values[i];
            remaining -= weights[i];
        }
    }

    cout << fixed << setprecision(2) << totalValue << "\\n";
    return 0;
}`,
      hint: "There are two problems: the sorting criterion and the handling of the last item. What if an item does not fully fit — should we skip it entirely?",
      answer: "Two bugs! First, items are not sorted by value/weight ratio. Processing in arbitrary order may not give the optimal result. Second, when an item does not fully fit, the code skips it entirely instead of taking a fraction. Fix: sort by value/weight ratio descending, and add an else branch that takes a fraction: totalValue += values[i] * ((double)remaining / weights[i]); remaining = 0;"
    },
    difficulty: "intermediate",
    prereqs: [30]
  },
  // ============================================================
  // LESSON 32: Recursion — The Magic of Self-Calling Functions
  // ============================================================
  {
    id: 32,
    title: "Recursion — The Magic of Self-Calling Functions",
    subtitle: "When a function calls itself — and it actually works!",
    analogy: "Recursion is like Russian nesting dolls — you open one doll and find a smaller one inside. You keep opening until you find the tiniest doll (the base case). Then you close them all back up. Each doll is a function call, and the smallest doll tells you when to stop!",
    points: [
      { t: "What is Recursion?", d: "Recursion is when a function calls ITSELF. It sounds crazy, but it's one of the most powerful ideas in programming. Instead of using a loop, the function keeps calling itself with a simpler version of the problem until it reaches a stopping point." },
      { t: "The Base Case — When to STOP", d: "The base case is the MOST IMPORTANT part of recursion. It tells the function when to stop calling itself. Without a base case, the function would call itself forever (infinite recursion) and your program would crash. Think of it as the smallest nesting doll — no more dolls inside!" },
      { t: "The Recursive Case — Making Progress", d: "The recursive case is where the function calls itself with a SIMPLER or SMALLER input. For example, to calculate 5!, we say 5! = 5 × 4!, and then 4! = 4 × 3!, and so on. Each call makes the problem smaller until we hit the base case." },
      { t: "Factorial Example", d: "Factorial of n (written n!) means multiplying all numbers from 1 to n. So 5! = 5 × 4 × 3 × 2 × 1 = 120. With recursion: factorial(5) = 5 × factorial(4) = 5 × 4 × factorial(3) = ... = 5 × 4 × 3 × 2 × 1. The base case is factorial(0) = 1 or factorial(1) = 1." },
      { t: "The Call Stack — A Stack of Plates", d: "When a function calls itself, each call gets placed on the 'call stack' — like stacking plates. factorial(5) goes on, then factorial(4) on top, then factorial(3), etc. When the base case is reached, the plates start coming off one by one as each call returns its result." },
      { t: "Sum of Numbers with Recursion", d: "To add numbers from 1 to n: sum(n) = n + sum(n-1). sum(5) = 5 + sum(4) = 5 + 4 + sum(3) = 5 + 4 + 3 + sum(2) = 5 + 4 + 3 + 2 + sum(1) = 5 + 4 + 3 + 2 + 1 = 15. Base case: sum(1) = 1." },
      { t: "Stack Overflow — Too Many Plates!", d: "If you forget the base case or the problem doesn't get smaller, the function calls itself forever. The call stack gets too big and your program crashes with a 'stack overflow' error. Always make sure your recursion moves toward the base case!" },
      { t: "Recursion vs Loops", d: "Anything you can do with recursion, you can also do with loops (and vice versa). Sometimes recursion makes code much cleaner and easier to understand. Other times, a simple loop is better. As you practice, you'll develop a feel for which to use." },
      { t: "Thinking Recursively", d: "The trick to recursion is: assume the function already works for smaller inputs, then figure out how to use that to solve the current input. For factorial: IF factorial(n-1) gives me the right answer, THEN factorial(n) = n × factorial(n-1). Trust the magic!" }
    ],
    whatIs: "Recursion is a technique where a function solves a problem by calling itself with a smaller version of the same problem. Every recursive function needs a base case (when to stop) and a recursive case (how to make the problem smaller). It's like solving a big puzzle by breaking it into identical smaller puzzles.",
    realWorld: "Recursion appears everywhere! File systems use recursion (folders inside folders inside folders). Google's search algorithm uses recursion to crawl web pages. Family trees are recursive (you have parents, who have parents, who have parents...). Even Russian nesting dolls and fractal art are recursive patterns!",
    code: `#include <bits/stdc++.h>
using namespace std;

// Factorial using recursion
int factorial(int n) {
    if (n <= 1) return 1;  // Base case!
    return n * factorial(n - 1);  // Recursive case
}

// Sum from 1 to n using recursion
int sumTo(int n) {
    if (n == 1) return 1;  // Base case
    return n + sumTo(n - 1);  // Recursive case
}

int main() {
    cout << "5! = " << factorial(5) << "\\n";  // 120
    cout << "Sum 1 to 10 = " << sumTo(10) << "\\n";  // 55
    
    // Let's trace factorial(4):
    // factorial(4) = 4 * factorial(3)
    //              = 4 * 3 * factorial(2)
    //              = 4 * 3 * 2 * factorial(1)
    //              = 4 * 3 * 2 * 1
    //              = 24
    cout << "4! = " << factorial(4) << "\\n";  // 24
    return 0;
}`,
    funFact: "The word 'recursion' is itself recursive in a fun way — if you Google 'recursion', Google shows 'Did you mean: recursion?' as a joke! Also, the famous computer scientist Niklaus Wirth once said: 'To understand recursion, you must first understand recursion.' 🤯",
    quiz: [
      { q: "What is the MOST important part of a recursive function?", opts: ["The return type", "The base case", "The function name", "The parameters"], ans: 1 },
      { q: "What happens if a recursive function has no base case?", opts: ["It returns 0", "It runs forever and crashes (stack overflow)", "It automatically stops after 100 calls", "It works perfectly fine"], ans: 1 },
      { q: "What is factorial(4) (4!)?", opts: ["16", "24", "12", "4"], ans: 1 },
      { q: "In the call stack, which function call finishes FIRST?", opts: ["The first one made", "The last one made (deepest)", "They all finish at the same time", "A random one"], ans: 1 },
      { q: "How does recursion make progress toward the solution?", opts: ["By using bigger numbers each time", "By calling itself with a simpler/smaller input each time", "By running faster each call", "By using more memory each time"], ans: 1 }
    ],
    challenge: "Write a recursive function called power(base, exp) that calculates base^exp. For example, power(2, 3) should return 8. The base case is: any number to the power of 0 is 1. The recursive case is: power(base, exp) = base * power(base, exp - 1). Test it with power(3, 4) — it should give 81!",
    resources: [
      { type: "video", title: "Recursion in 5 Minutes", url: "https://www.youtube.com/watch?v=ivl5-snqul8", source: "Reducible" },
      { type: "article", title: "Recursion for Beginners", url: "https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/", source: "GeeksforGeeks" },
      { type: "practice", title: "Recursion Practice Problems", url: "https://codeforces.com/problemset?tags=recursion", source: "Codeforces" }
    ],
    eli5: "Imagine you're in a line of people, and you want to know how many people are in the line. You ask the person behind you: 'How many people are behind you?' They ask the person behind THEM the same question. This keeps going until the last person says 'Zero — nobody is behind me!' (that's the base case). Then each person adds 1 and passes the answer forward. That's recursion — asking the same question to a smaller group!",
    codeWalkthrough: [
      "#include <bits/stdc++.h> — includes all standard libraries so we can use cout, cin, and everything else we need.",
      "using namespace std; — lets us write cout instead of std::cout.",
      "int factorial(int n) — we define a function that takes a number n and returns its factorial. The return type is int.",
      "if (n <= 1) return 1; — this is the BASE CASE! When n is 0 or 1, we know the factorial is 1, so we return immediately without making another recursive call. This is what stops the recursion.",
      "return n * factorial(n - 1); — this is the RECURSIVE CASE. We multiply n by the factorial of (n-1). We trust that factorial(n-1) will give us the correct answer for the smaller problem.",
      "int sumTo(int n) — another recursive function that adds all numbers from 1 to n.",
      "if (n == 1) return 1; — base case for the sum function. The sum from 1 to 1 is just 1.",
      "return n + sumTo(n - 1); — recursive case: n plus the sum of all numbers from 1 to (n-1).",
      "In main(), we call factorial(5) which returns 120 (5×4×3×2×1) and sumTo(10) which returns 55 (1+2+3+...+10)."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int factorial(int n) {
    return n * factorial(n - 1);
}

int main() {
    cout << factorial(5) << "\\n";
    return 0;
}`,
      hint: "What happens when factorial keeps calling itself? Is there anything that tells it when to stop?",
      answer: "The bug is a MISSING BASE CASE! The function calls factorial(5), then factorial(4), then factorial(3), factorial(2), factorial(1), factorial(0), factorial(-1)... and it never stops! This causes a stack overflow crash. The fix is to add 'if (n <= 1) return 1;' at the beginning of the function before the recursive call."
    },
    difficulty: "intermediate",
    prereqs: [19]
  },
  // ============================================================
  // LESSON 33: More Recursion Adventures
  // ============================================================
  {
    id: 33,
    title: "More Recursion Adventures",
    subtitle: "Fibonacci, powers, and the famous Tower of Hanoi!",
    analogy: "More recursion is like a mirror facing another mirror — you see infinite reflections stretching into the distance. Each reflection is a copy of the original, just a little smaller. But unlike real mirrors, in programming we CHOOSE when to stop looking deeper. That's the beauty of recursion with a base case!",
    points: [
      { t: "Fibonacci with Recursion", d: "The Fibonacci sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21... Each number is the sum of the two before it. With recursion: fib(n) = fib(n-1) + fib(n-2). Base cases: fib(0) = 0 and fib(1) = 1. It's beautiful but can be slow for big numbers!" },
      { t: "Why Recursive Fibonacci is Slow", d: "Recursive Fibonacci recalculates the same values many times. fib(5) calls fib(4) and fib(3). But fib(4) also calls fib(3). So fib(3) is calculated TWICE! For fib(40), millions of repeated calculations happen. This is why we sometimes need smarter approaches." },
      { t: "Power with Recursion", d: "To calculate base^exp: power(2, 5) = 2 × power(2, 4) = 2 × 2 × power(2, 3)... Base case: power(base, 0) = 1 (anything to the power 0 is 1). This is clean and elegant — each call reduces the exponent by 1." },
      { t: "Fast Power (Divide and Conquer)", d: "There's a faster way! If exp is even: power(base, exp) = power(base, exp/2) × power(base, exp/2). If exp is odd: base × power(base, exp-1). This cuts the work in half each time! power(2, 8) only needs 4 calls instead of 8." },
      { t: "Tower of Hanoi", d: "A classic puzzle: Move n disks from peg A to peg C, using peg B as helper. Rules: only move one disk at a time, never put a bigger disk on a smaller one. The recursive solution: move n-1 disks to helper, move the biggest disk to target, then move n-1 disks from helper to target." },
      { t: "Counting with Recursion", d: "You can count things recursively too. How many digits does a number have? countDigits(n) = 1 + countDigits(n/10). Base case: if n < 10, it has 1 digit. countDigits(1234) = 1 + countDigits(123) = 1 + 1 + countDigits(12) = 1 + 1 + 1 + countDigits(1) = 4." },
      { t: "Printing Patterns with Recursion", d: "Recursion can print cool patterns. Print numbers 1 to n: first call printUp(n-1) to print 1 to n-1, then print n. Print numbers n to 1: first print n, then call printDown(n-1). The order of the recursive call and the print statement matters!" },
      { t: "When to Use Recursion vs Loops", d: "Use recursion when the problem naturally breaks into smaller versions of itself (trees, divide and conquer, backtracking). Use loops when you're just counting or iterating through a list. In competitive programming, recursion is essential for many advanced algorithms." },
      { t: "Memoization Preview", d: "The fix for slow recursive Fibonacci is called 'memoization' — saving results so you don't recalculate them. Store fib(n) in an array the first time you calculate it. Next time you need it, just look it up! This turns slow recursion into fast recursion. You'll master this in dynamic programming!" }
    ],
    whatIs: "This lesson explores more recursion patterns: Fibonacci sequences, power calculations, and the famous Tower of Hanoi puzzle. You'll see when recursion is elegant and clean, when it can be slow, and learn the first hints of how to make it faster. These patterns appear everywhere in competitive programming!",
    realWorld: "Fibonacci numbers appear in nature — the spiral of sunflower seeds, the branching of trees, and the shell of a nautilus all follow Fibonacci patterns. The Tower of Hanoi was invented in 1883 and is used to teach recursion worldwide. Fast power calculation is used in cryptography to keep your online passwords safe!",
    code: `#include <bits/stdc++.h>
using namespace std;

// Fibonacci (simple recursive)
int fib(int n) {
    if (n <= 0) return 0;  // Base case 1
    if (n == 1) return 1;  // Base case 2
    return fib(n - 1) + fib(n - 2);  // Two recursive calls!
}

// Fast power using recursion
long long fastPow(long long base, int exp) {
    if (exp == 0) return 1;  // Base case
    if (exp % 2 == 0) {
        long long half = fastPow(base, exp / 2);
        return half * half;  // Even: square the half
    }
    return base * fastPow(base, exp - 1);  // Odd: reduce by 1
}

// Tower of Hanoi
void hanoi(int n, char from, char to, char helper) {
    if (n == 0) return;  // Base case: no disks to move
    hanoi(n - 1, from, helper, to);  // Move n-1 to helper
    cout << "Move disk " << n << " from " << from << " to " << to << "\\n";
    hanoi(n - 1, helper, to, from);  // Move n-1 from helper to target
}

int main() {
    // Fibonacci
    cout << "Fibonacci sequence: ";
    for (int i = 0; i < 10; i++) cout << fib(i) << " ";
    cout << "\\n";  // 0 1 1 2 3 5 8 13 21 34
    
    // Fast power
    cout << "2^10 = " << fastPow(2, 10) << "\\n";  // 1024
    
    // Tower of Hanoi with 3 disks
    cout << "Tower of Hanoi (3 disks):\\n";
    hanoi(3, 'A', 'C', 'B');
    return 0;
}`,
    funFact: "The Tower of Hanoi legend says monks in a temple are moving 64 golden disks between 3 diamond pegs. When they finish, the world will end! At 1 move per second, it would take about 585 BILLION years — roughly 42 times the age of the universe. So we're safe! The minimum moves needed for n disks is 2^n - 1.",
    quiz: [
      { q: "What are the two base cases for recursive Fibonacci?", opts: ["fib(0)=0 and fib(1)=1", "fib(0)=1 and fib(1)=1", "fib(1)=1 and fib(2)=2", "fib(0)=0 and fib(1)=0"], ans: 0 },
      { q: "Why is simple recursive Fibonacci slow for large n?", opts: ["It uses too much memory", "It recalculates the same values many times", "The base cases are wrong", "Fibonacci numbers are too big"], ans: 1 },
      { q: "What is 2^10 calculated by fastPow?", opts: ["100", "512", "1024", "2048"], ans: 2 },
      { q: "How many moves does Tower of Hanoi need for 4 disks?", opts: ["8", "12", "15", "16"], ans: 2 },
      { q: "What is memoization?", opts: ["Memorizing code by heart", "Saving calculated results to avoid recalculating them", "A type of loop", "Writing comments in code"], ans: 1 }
    ],
    challenge: "Write a recursive function countDigits(n) that returns how many digits a positive number has. For example, countDigits(1234) should return 4, and countDigits(7) should return 1. Hint: the base case is when n < 10 (single digit), and the recursive case divides n by 10. Then use it to find how many digits are in 1000000 (one million)!",
    resources: [
      { type: "video", title: "Fibonacci Sequence Explained", url: "https://www.youtube.com/watch?v=zg-ddPbzcKM", source: "Numberphile" },
      { type: "article", title: "Tower of Hanoi — Step by Step", url: "https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/", source: "GeeksforGeeks" },
      { type: "practice", title: "Recursion Problems on CSES", url: "https://cses.fi/problemset/", source: "CSES Problem Set" }
    ],
    eli5: "Imagine you have a pile of different-sized plates and three tables. You need to move all plates from Table A to Table C, but you can only move one plate at a time, and you can NEVER put a bigger plate on top of a smaller plate. The trick is: first move all the small plates out of the way to Table B, then move the biggest plate to Table C, then move the small plates from Table B to Table C. And to move the small plates? You do the same trick again! That's recursion — the same trick, over and over, with smaller groups.",
    codeWalkthrough: [
      "#include <bits/stdc++.h> and using namespace std; — our standard setup for competitive programming.",
      "int fib(int n) — the Fibonacci function takes a number n and returns the nth Fibonacci number.",
      "if (n <= 0) return 0; if (n == 1) return 1; — TWO base cases! Fibonacci needs two because each call depends on TWO previous values. fib(0)=0 and fib(1)=1 are the starting points.",
      "return fib(n-1) + fib(n-2); — the recursive case calls fib TWICE: once for n-1 and once for n-2. This is what makes it slow for large n — it branches into two calls each time!",
      "long long fastPow(long long base, int exp) — fast power uses long long because powers can get very large very quickly.",
      "if (exp == 0) return 1; — base case: anything to the power 0 is 1.",
      "if (exp % 2 == 0) — if the exponent is even, we can be clever: calculate the half-power once and square it. This is much faster than multiplying one at a time!",
      "long long half = fastPow(base, exp/2); return half * half; — we only make ONE recursive call and then square the result. This halves the work each time!",
      "void hanoi(int n, char from, char to, char helper) — the Tower of Hanoi function takes: how many disks, which peg they're on, which peg to move to, and which peg to use as a helper.",
      "The hanoi function: move n-1 disks to helper, move the biggest disk to target, then move n-1 disks from helper to target. It's beautifully simple once you trust the recursion!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int fib(int n) {
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

int main() {
    cout << fib(6) << "\\n";
    return 0;
}`,
      hint: "Fibonacci needs TWO base cases. What happens when the recursion reaches fib(0)?",
      answer: "The bug is a missing base case! The function only has a base case for n==1, but Fibonacci calls fib(n-2), which eventually reaches fib(0). With no base case for 0, fib(0) calls fib(-1) and fib(-2), leading to infinite recursion and a crash. The fix is to add 'if (n <= 0) return 0;' before the n==1 check. Fibonacci needs TWO base cases: fib(0)=0 and fib(1)=1."
    },
    difficulty: "intermediate",
    prereqs: [32]
  },
  // ============================================================
  // LESSON 34: Stack — The Pancake Pile
  // ============================================================
  {
    id: 34,
    title: "Stack — The Pancake Pile",
    subtitle: "Last In, First Out — the data structure that undo buttons love!",
    analogy: "A stack is like a stack of pancakes. When you make a new pancake, you put it on TOP of the pile. When you eat one, you take the TOP one first. You can't eat the one at the bottom without removing all the ones above it. Last pancake in, first pancake eaten — that's LIFO: Last In, First Out!",
    points: [
      { t: "What is a Stack?", d: "A stack is a data structure where you can only add and remove elements from the TOP. It follows the LIFO principle: Last In, First Out. The last thing you put in is the first thing you take out. Think of a stack of books, plates, or pancakes!" },
      { t: "Push — Add to the Top", d: "The 'push' operation adds an element to the top of the stack. Like placing a new pancake on top of the pile. In C++: myStack.push(42); adds 42 to the top. You can push as many elements as you want." },
      { t: "Pop — Remove from the Top", d: "The 'pop' operation removes the top element from the stack. Like taking the top pancake off the pile. In C++: myStack.pop(); removes the top element. WARNING: never pop an empty stack — it causes an error!" },
      { t: "Top — Peek at the Top", d: "The 'top' operation lets you see what's on top WITHOUT removing it. Like looking at the top pancake without eating it. In C++: myStack.top(); returns the top element. Always check if the stack is empty before using top()!" },
      { t: "Empty and Size", d: "myStack.empty() returns true if the stack has no elements. myStack.size() tells you how many elements are in the stack. Always check empty() before calling top() or pop() to avoid crashes!" },
      { t: "C++ stack from STL", d: "C++ gives us a ready-made stack in the Standard Template Library. Just use: stack<int> s; for a stack of integers, or stack<string> s; for a stack of strings. You need #include <stack> (or bits/stdc++.h which includes everything)." },
      { t: "Bracket Matching — Classic Stack Problem!", d: "Given a string like '({[]})', check if every opening bracket has a matching closing bracket in the right order. Push opening brackets onto the stack. When you see a closing bracket, check if the top of the stack is the matching opening bracket. If the stack is empty at the end, the brackets match!" },
      { t: "Reverse a String with a Stack", d: "Push each character onto a stack, then pop them all off. Since stacks are LIFO, the characters come out in reverse order! push 'h','e','l','l','o' → pop gives 'o','l','l','e','h' = 'olleh'. A simple but powerful trick!" },
      { t: "Where Stacks Are Used", d: "The undo button (Ctrl+Z) uses a stack — each action is pushed, and undo pops the last one. Your web browser's back button is a stack of pages. The call stack in recursion (lesson 32) is literally a stack! Stacks are everywhere in CS." }
    ],
    whatIs: "A stack is a fundamental data structure that follows the LIFO (Last In, First Out) principle. You can only add (push) and remove (pop) elements from the top. It's like a stack of pancakes or plates — you always deal with the top item. Stacks are essential for bracket matching, undo operations, expression evaluation, and many competitive programming problems.",
    realWorld: "Your browser's back button is a stack of visited pages. The Ctrl+Z undo feature in every text editor uses a stack of actions. Call centers put callers on hold in a stack (sometimes!). Even the way your computer runs functions (the call stack) is a stack. Compilers use stacks to check if your parentheses and brackets are balanced.",
    code: `#include <bits/stdc++.h>
using namespace std;

// Check if brackets are balanced
bool isBalanced(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);  // Push opening brackets
        } else if (c == ')' || c == '}' || c == ']') {
            if (st.empty()) return false;  // No matching opener
            char top = st.top();
            st.pop();
            // Check if the brackets match
            if (c == ')' && top != '(') return false;
            if (c == '}' && top != '{') return false;
            if (c == ']' && top != '[') return false;
        }
    }
    return st.empty();  // All brackets matched?
}

int main() {
    // Basic stack operations
    stack<int> s;
    s.push(10);   // Stack: [10]
    s.push(20);   // Stack: [10, 20]
    s.push(30);   // Stack: [10, 20, 30]
    
    cout << "Top: " << s.top() << "\\n";    // 30
    cout << "Size: " << s.size() << "\\n";   // 3
    
    s.pop();  // Remove 30. Stack: [10, 20]
    cout << "Top after pop: " << s.top() << "\\n";  // 20
    
    // Bracket matching
    cout << "({[]}) balanced? " << (isBalanced("({[]})") ? "YES" : "NO") << "\\n";
    cout << "({[}) balanced? " << (isBalanced("({[})") ? "YES" : "NO") << "\\n";
    
    return 0;
}`,
    funFact: "The stack data structure was first proposed in 1946 by Alan Turing, the father of computer science! He called it a 'burial' and 'unburial' system. The bracket matching algorithm is used billions of times per day by compilers and text editors around the world to check if your code has matching parentheses!",
    quiz: [
      { q: "What does LIFO stand for?", opts: ["Last In, First Out", "Last In, Fast Out", "Least Important, First Out", "Linear In, Forward Out"], ans: 0 },
      { q: "If you push 1, 2, 3 onto a stack and then pop once, what is on top?", opts: ["1", "2", "3", "The stack is empty"], ans: 1 },
      { q: "What should you always check before calling top() or pop()?", opts: ["If the stack is sorted", "If the stack is empty", "If the stack has duplicates", "If the stack is full"], ans: 1 },
      { q: "Is the string '([)]' balanced?", opts: ["Yes, all brackets have matches", "No, the brackets are in the wrong order", "Yes, it has equal opening and closing brackets", "It depends on the programming language"], ans: 1 },
      { q: "Which real-world feature uses a stack?", opts: ["Autocomplete", "The Undo button (Ctrl+Z)", "Spell check", "Word count"], ans: 1 }
    ],
    challenge: "Write a program that uses a stack to reverse a string. Read a string from input, push each character onto a stack, then pop all characters and print them. For example, input 'hello' should output 'olleh'. Bonus: modify your bracket matching to also handle angle brackets < and >!",
    resources: [
      { type: "video", title: "Stacks — Data Structures", url: "https://www.youtube.com/watch?v=KInG04mAjO0", source: "HackerRank" },
      { type: "article", title: "Stack in C++ STL", url: "https://www.geeksforgeeks.org/stack-in-cpp-stl/", source: "GeeksforGeeks" },
      { type: "practice", title: "Stack Problems", url: "https://codeforces.com/problemset?tags=data+structures", source: "Codeforces" }
    ],
    eli5: "Imagine you have a tube that's closed at the bottom and open at the top. You can drop balls in from the top and take balls out from the top. If you drop in a red ball, then a blue ball, then a green ball — the green ball is on top! To get the red ball, you'd have to take out the green one first, then the blue one, then finally the red one. That's a stack — last ball in is the first ball out!",
    codeWalkthrough: [
      "#include <bits/stdc++.h> — includes everything, including the stack library.",
      "bool isBalanced(string s) — a function that takes a string and returns true if all brackets are properly matched and nested.",
      "stack<char> st; — we create a stack that holds characters. We'll push opening brackets onto it.",
      "for (char c : s) — we loop through every character in the string, one at a time.",
      "if (c == '(' || c == '{' || c == '[') st.push(c); — when we see an opening bracket, we push it onto the stack. We'll check for its match later.",
      "if (st.empty()) return false; — if we see a closing bracket but the stack is empty, there's no matching opening bracket, so the string is NOT balanced.",
      "char top = st.top(); st.pop(); — we get the top of the stack (the most recent opening bracket) and remove it. Then we check if it matches the closing bracket we found.",
      "return st.empty(); — at the end, if the stack is empty, every opening bracket found its match. If not, there are unmatched opening brackets.",
      "In main(), we demonstrate push, top, size, and pop operations, then test our bracket matching function with two examples."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    stack<int> s;
    s.push(10);
    s.push(20);
    s.push(30);
    
    while (s.size() > 0) {
        s.pop();
        cout << s.top() << " ";
    }
    return 0;
}`,
      hint: "Think about the ORDER of pop() and top(). What are you printing? And what happens on the very last iteration?",
      answer: "TWO bugs! First, pop() is called BEFORE top(), so we never print the value 30 — it gets removed before we can see it. The order should be: top() first, THEN pop(). Second, after popping the last element, the stack is empty, but we try to call top() on an empty stack, causing a crash. Fix: swap the order to 'cout << s.top(); s.pop();' — this prints the value before removing it, and since we print then pop, we never access an empty stack's top."
    },
    difficulty: "intermediate",
    prereqs: [14]
  },
  // ============================================================
  // LESSON 35: Queue — The Lunch Line
  // ============================================================
  {
    id: 35,
    title: "Queue — The Lunch Line",
    subtitle: "First In, First Out — fair and orderly, just like a real line!",
    analogy: "A queue is like the line at an ice cream shop. The first person who arrives gets served first. New people join at the BACK of the line, and people leave from the FRONT. You can't cut in line! First In, First Out — that's FIFO, and it's the fairest system there is!",
    points: [
      { t: "What is a Queue?", d: "A queue is a data structure where elements are added at the BACK and removed from the FRONT. It follows the FIFO principle: First In, First Out. Just like a real line of people — the first person who joins the line is the first person to be served." },
      { t: "Push — Join the Back of the Line", d: "The 'push' operation adds an element to the BACK of the queue. Like a new person joining the end of the lunch line. In C++: myQueue.push(42); adds 42 to the back. Everyone already in line stays in their position." },
      { t: "Pop — Leave from the Front", d: "The 'pop' operation removes the element at the FRONT of the queue. Like the first person in line getting served and leaving. In C++: myQueue.pop(); removes the front element. The next person in line becomes the new front." },
      { t: "Front and Back", d: "myQueue.front() shows the element at the front (next to be served). myQueue.back() shows the element at the back (most recently joined). Like being able to see who's first in line and who's last. Always check empty() before using these!" },
      { t: "C++ queue from STL", d: "C++ provides a ready-made queue: queue<int> q; for integers, queue<string> q; for strings. Operations: push(), pop(), front(), back(), empty(), size(). It's included in <queue> or <bits/stdc++.h>." },
      { t: "Queue vs Stack", d: "Stack = LIFO (Last In, First Out) — like a stack of plates. Queue = FIFO (First In, First Out) — like a line of people. The key difference is WHERE you remove from: stack removes from the TOP (same end as insert), queue removes from the FRONT (opposite end from insert)." },
      { t: "BFS — A Preview", d: "Breadth-First Search (BFS) is a famous algorithm that uses a queue. It explores all neighbors of a node before going deeper, level by level. Imagine you're at a maze intersection — BFS checks ALL paths one step at a time, using a queue to remember which paths to explore next. You'll see more of this in advanced CP!" },
      { t: "Real-World Queues", d: "Print jobs waiting for a printer form a queue. Customers waiting for a customer service call are in a queue. Downloads waiting to start form a queue. Even your computer's CPU schedules tasks using queues! Queues are all about FAIRNESS — first come, first served." },
      { t: "Processing Events in Order", d: "In competitive programming, queues are great for processing events in the order they happen. Read all events, push them into a queue, then process them one by one from the front. This ensures everything is handled in chronological order." }
    ],
    whatIs: "A queue is a fundamental data structure that follows the FIFO (First In, First Out) principle. Elements are added at the back and removed from the front, just like a real-world line. Queues are essential for BFS, scheduling, and any problem where order matters. They're the fair counterpart to stacks!",
    realWorld: "Every line you've ever stood in — at the grocery store, amusement park, or cafeteria — is a queue. Your computer uses queues to manage print jobs, network packets, and process scheduling. Music playlists are queues (next song plays first). Even hospitals use priority queues to decide which patients get treated first!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Basic queue operations
    queue<int> q;
    q.push(10);   // Queue: [10]         (front -> back)
    q.push(20);   // Queue: [10, 20]
    q.push(30);   // Queue: [10, 20, 30]
    
    cout << "Front: " << q.front() << "\\n";  // 10
    cout << "Back: " << q.back() << "\\n";     // 30
    cout << "Size: " << q.size() << "\\n";     // 3
    
    q.pop();  // Remove 10. Queue: [20, 30]
    cout << "Front after pop: " << q.front() << "\\n";  // 20
    
    // Process a line of customers
    queue<string> customers;
    customers.push("Alice");
    customers.push("Bob");
    customers.push("Charlie");
    
    cout << "\\nServing customers:\\n";
    while (!customers.empty()) {
        cout << "Now serving: " << customers.front() << "\\n";
        customers.pop();
    }
    // Output: Alice, Bob, Charlie (in order!)
    
    // Simulation: Hot Potato game
    // N kids in a circle, pass potato K times, person holding it is out
    int n = 5, k = 3;
    queue<int> circle;
    for (int i = 1; i <= n; i++) circle.push(i);
    
    cout << "\\nHot Potato (n=5, k=3):\\n";
    while (circle.size() > 1) {
        for (int i = 0; i < k - 1; i++) {
            circle.push(circle.front());  // Pass to the back
            circle.pop();
        }
        cout << "Player " << circle.front() << " is out!\\n";
        circle.pop();  // Remove the one holding the potato
    }
    cout << "Winner: Player " << circle.front() << "\\n";
    
    return 0;
}`,
    funFact: "The Hot Potato game we coded is actually a famous mathematical problem called the Josephus Problem, named after historian Josephus Flavius from ancient Rome! It has been studied by mathematicians for over 2000 years. There's even a formula to find the winner directly without simulation!",
    quiz: [
      { q: "What does FIFO stand for?", opts: ["Fast In, Fast Out", "First In, First Out", "Final In, First Out", "First In, Final Out"], ans: 1 },
      { q: "If you push 1, 2, 3 into a queue and pop once, what is at the front?", opts: ["1", "2", "3", "The queue is empty"], ans: 1 },
      { q: "What is the main difference between a stack and a queue?", opts: ["Stacks are faster", "Stacks use LIFO, queues use FIFO", "Queues can hold more elements", "There's no difference"], ans: 1 },
      { q: "Which algorithm famously uses a queue?", opts: ["Binary search", "Quick sort", "Breadth-First Search (BFS)", "Bubble sort"], ans: 2 },
      { q: "In the Hot Potato game with 5 players and k=3, who gets eliminated first?", opts: ["Player 1", "Player 2", "Player 3", "Player 5"], ans: 2 }
    ],
    challenge: "Simulate a printer queue! Read n print jobs (each with a name and number of pages). Process them in FIFO order, printing 'Printing [name] ([pages] pages)' for each. At the end, print the total pages printed. Bonus: implement a 'priority' system where jobs with fewer pages get printed first (hint: use a priority queue)!",
    resources: [
      { type: "video", title: "Queues Explained", url: "https://www.youtube.com/watch?v=D6gu-_tmEpQ", source: "HackerRank" },
      { type: "article", title: "Queue in C++ STL", url: "https://www.geeksforgeeks.org/queue-cpp-stl/", source: "GeeksforGeeks" },
      { type: "practice", title: "Queue Problems", url: "https://codeforces.com/problemset?tags=data+structures", source: "Codeforces" }
    ],
    eli5: "Imagine you're at a water slide. People wait in a line. The first person who got in line goes down the slide first. New people join at the END of the line. Nobody cuts! That's a queue — the first person to join is the first person to go. It's fair, simple, and exactly how your computer handles many tasks!",
    codeWalkthrough: [
      "#include <bits/stdc++.h> — includes everything, including the queue library.",
      "queue<int> q; — creates an empty queue that holds integers.",
      "q.push(10); q.push(20); q.push(30); — adds elements to the BACK of the queue. After these, 10 is at the front and 30 is at the back.",
      "q.front() returns 10 (the first element added) and q.back() returns 30 (the last element added). Unlike stack, queue lets you see both ends!",
      "q.pop(); — removes the FRONT element (10). Now 20 is at the front. This is the key difference from stack — stack pops from the top (back), queue pops from the front.",
      "The customer serving loop: while the queue isn't empty, print the front customer's name and pop them. Since it's FIFO, Alice (first in) gets served first!",
      "Hot Potato simulation: we put players 1-5 in a queue. To pass the potato, we move the front person to the back (push front, then pop). After k-1 passes, the person at front is 'out' — we pop them without re-adding.",
      "circle.push(circle.front()); circle.pop(); — this moves the front person to the back of the queue, simulating passing the potato around a circle. Clever use of the queue!",
      "The loop continues until only 1 player remains — they're the winner!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    queue<int> q;
    q.push(1);
    q.push(2);
    q.push(3);
    
    for (int i = 0; i < 3; i++) {
        cout << q.back() << " ";
        q.pop();
    }
    return 0;
}`,
      hint: "Look at which end we're reading from vs which end pop() removes from. Are we getting the behavior we expect?",
      answer: "The bug is using back() instead of front()! The code prints q.back() which is the LAST element, but q.pop() removes from the FRONT. So it prints 3, 3, 3 (back keeps changing as front elements are removed) instead of 1, 2, 3. The fix is to change q.back() to q.front(). Then we'll correctly see each element as it leaves the queue in FIFO order: 1, 2, 3."
    },
    difficulty: "intermediate",
    prereqs: [14]
  },
  // ============================================================
  // LESSON 36: Reading Contest Problems Like a Pro
  // ============================================================
  {
    id: 36,
    title: "Reading Contest Problems Like a Pro",
    subtitle: "The most important CP skill that nobody teaches!",
    analogy: "Reading a contest problem is like reading a recipe before cooking. If you skip a step or misread '1 tablespoon' as '1 cup' of salt, your dish is ruined! Similarly, misreading a problem means you'll write a correct solution... to the WRONG problem. Careful reading saves hours of debugging!",
    points: [
      { t: "Read the ENTIRE Problem First", d: "Before writing any code, read the problem from start to finish. Don't start coding after reading just the first paragraph! Often, crucial information is hidden in the examples, notes section, or constraints. Read it ALL, then read it again." },
      { t: "Understand the Input Format", d: "The input format tells you exactly what data your program will receive and in what order. 'The first line contains n' means cin >> n first. 'The next line contains n integers' means a loop reading n numbers. Pay attention to whether numbers are on the same line or different lines." },
      { t: "Understand the Output Format", d: "The output format tells you exactly what to print. 'Print YES or NO' (watch for case sensitivity!). 'Print the answer modulo 10^9+7' means you need to take the remainder. 'Print -1 if impossible' means there's a special case. Match the format EXACTLY." },
      { t: "Study the Examples Carefully", d: "The examples are your best friends! They show you exactly how the input maps to the output. Trace through each example by hand. If your understanding doesn't produce the right output, you've misunderstood the problem. Re-read!" },
      { t: "Read the Constraints!", d: "Constraints tell you HOW to solve the problem! If n ≤ 1000, an O(n²) solution works. If n ≤ 100000, you need O(n log n). If n ≤ 1000000, you need O(n). Constraints also tell you what data types to use — if values can be up to 10^18, you need long long!" },
      { t: "Look for Special Cases in the Notes", d: "The 'Note' section after the examples often explains tricky cases. It might say 'Note that the array can contain duplicates' or 'The answer is guaranteed to exist.' These notes prevent you from worrying about cases that won't happen — or warn you about cases you might miss!" },
      { t: "Identify What's Being Asked", d: "Break it down: What is the INPUT? What is the OUTPUT? What's the RELATIONSHIP between them? Sometimes problems are dressed up in stories. 'Knights on a chessboard' might just be a grid problem. 'Connecting cities with roads' is a graph problem. Look past the story to the math!" },
      { t: "Constraint Hints Cheat Sheet", d: "n ≤ 10: try all possibilities (brute force). n ≤ 20: bitmask/subset enumeration. n ≤ 100: O(n³) is fine. n ≤ 1000: O(n²) works. n ≤ 100000: O(n log n) needed. n ≤ 1000000: O(n) needed. Memorize these — they guide your approach!" }
    ],
    whatIs: "Reading contest problems is the most underrated skill in competitive programming. It means carefully understanding what a problem is asking before you write a single line of code. This includes parsing the input/output format, studying examples, reading constraints, and identifying the core algorithmic challenge hidden behind the problem's story.",
    realWorld: "In software engineering, misunderstanding requirements is the #1 cause of project failures. Reading problems carefully in CP teaches you to be precise in real life. Lawyers read contracts word by word. Doctors read lab results carefully. Engineers double-check blueprints. The skill of careful reading transfers to every career!",
    code: `#include <bits/stdc++.h>
using namespace std;

// Example: A typical CP problem template after reading the problem

// Problem: Given n numbers, find how many pairs have a sum equal to k.
// Input: First line: n and k. Second line: n integers.
// Output: Print the number of pairs.
// Constraints: 1 <= n <= 1000, 1 <= k <= 10^6

int main() {
    // Step 1: Read input (exactly as the format says)
    int n, k;
    cin >> n >> k;  // First line: n and k
    
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];  // Second line: n integers
    }
    
    // Step 2: Solve (n <= 1000, so O(n^2) is fine!)
    int count = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {  // j starts at i+1 to avoid counting pairs twice
            if (a[i] + a[j] == k) {
                count++;
            }
        }
    }
    
    // Step 3: Output (exactly as the format says)
    cout << count << "\\n";
    
    return 0;
}

// READING CHECKLIST:
// [x] Read entire problem
// [x] Input format: n, k on first line; n numbers on second line
// [x] Output format: single number (count of pairs)
// [x] Constraints: n <= 1000 -> O(n^2) is OK
// [x] Examples verified by hand
// [x] Special cases: what if no pairs exist? -> print 0`,
    funFact: "In the 2019 ICPC World Finals, a top team lost because they misread 'non-decreasing' as 'increasing.' One word cost them the contest! Tourist (Gennady Korotkevich), the #1 competitive programmer in the world, has said that he spends about 30-50% of his time READING problems before coding. Reading carefully isn't slow — it's smart!",
    quiz: [
      { q: "What should you do FIRST when you see a contest problem?", opts: ["Start coding immediately", "Read the entire problem from start to finish", "Look at the examples only", "Check the time limit"], ans: 1 },
      { q: "If the constraint says n ≤ 1000, what time complexity is safe?", opts: ["Only O(n)", "O(n log n) but not O(n^2)", "O(n^2) or better", "O(n^3) or better"], ans: 2 },
      { q: "Why are the examples in a problem so important?", opts: ["They show the exact test cases used for judging", "They help you verify your understanding of the problem", "They contain the solution algorithm", "They're not important — skip them"], ans: 1 },
      { q: "What does 'print the answer modulo 10^9+7' mean?", opts: ["Print the answer divided by 10^9+7", "Print the remainder when the answer is divided by 10^9+7", "Print the answer in scientific notation", "Print 10^9+7"], ans: 1 },
      { q: "If values can be up to 10^18, what data type do you need in C++?", opts: ["int", "short", "long long", "float"], ans: 2 }
    ],
    challenge: "Here's a practice problem: 'Given n integers, find the maximum difference between any two elements.' Before coding, answer these questions: (1) What is the input format? (2) What is the output? (3) What constraints would make O(n) necessary vs O(n^2) OK? (4) What's the simplest approach? Then code your solution. Hint: do you really need to check all pairs, or is there a shortcut using min and max?",
    resources: [
      { type: "article", title: "How to Read Problem Statements", url: "https://codeforces.com/blog/entry/47516", source: "Codeforces Blog" },
      { type: "video", title: "Competitive Programming Tips", url: "https://www.youtube.com/watch?v=bSdp2WeyuJY", source: "Errichto" },
      { type: "practice", title: "Beginner-Friendly Problems", url: "https://codeforces.com/problemset?tags=implementation&order=BY_SOLVED_DESC", source: "Codeforces" }
    ],
    eli5: "Imagine your teacher gives you a word problem in math: 'Sam has 5 apples. He gives 2 to Lucy and buys 3 more. How many does Sam have?' If you don't read carefully and just see 'apples...2...3,' you might answer 5. But the right answer is 5 - 2 + 3 = 6. You need to read every word! Contest problems are the same — every word matters, and skipping even one detail can give you the wrong answer.",
    codeWalkthrough: [
      "The problem says 'First line: n and k' — so we read two numbers with cin >> n >> k. Getting the input format right is step one!",
      "The problem says 'Second line: n integers' — so we create a vector of size n and read each number in a loop.",
      "Constraints say n <= 1000. That means n^2 = 1,000,000 which is about 10^6 operations — well within the time limit (usually 10^8 operations per second). So a simple double loop is fine!",
      "for (int j = i + 1; j < n; j++) — we start j at i+1, not 0, because: (a) we don't want to pair an element with itself, and (b) we don't want to count the pair (a[i], a[j]) twice (once as i,j and once as j,i).",
      "if (a[i] + a[j] == k) count++; — this checks if the pair sums to k. Simple and correct!",
      "cout << count << '\\n'; — we print exactly what the problem asks: a single number. No extra words, no extra spaces. Just the answer.",
      "The READING CHECKLIST at the bottom is a great habit! Before coding any CP problem, mentally check off: read the problem, understood input, understood output, checked constraints, verified with examples."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[n];
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
    }
    int maxVal = 0;
    for (int i = 1; i <= n; i++) {
        if (a[i] > maxVal) maxVal = a[i];
    }
    cout << maxVal << "\\n";
    return 0;
}`,
      hint: "Arrays in C++ start at index 0, not 1. If you declare int a[n], valid indices are 0 to n-1. What happens when you access a[n]?",
      answer: "The bug is an off-by-one error in the array indexing! The array a[n] has valid indices 0 to n-1, but the loops use indices 1 to n. When i equals n, a[n] accesses memory OUTSIDE the array (undefined behavior), which can crash or give wrong answers. The fix is to change the loop to 'for (int i = 0; i < n; i++)'. This is one of the most common bugs in competitive programming — always double-check your loop bounds!"
    },
    difficulty: "intermediate",
    prereqs: [3]
  },
  // ============================================================
  // LESSON 37: Solving Easy Contest Problems (A/B Problems)
  // ============================================================
  {
    id: 37,
    title: "Solving Easy Contest Problems (A/B Problems)",
    subtitle: "Your first real contest battles — let's win some problems!",
    analogy: "Solving easy contest problems is like warming up before a big game. Athletes don't start with the hardest moves — they stretch, jog, and practice basic drills first. A/B problems are your warm-up! They build confidence, teach you patterns, and get your brain in contest mode. Every grandmaster started with these!",
    points: [
      { t: "What Are A/B Problems?", d: "On Codeforces, each contest has problems labeled A, B, C, D, etc. A is the easiest and B is second easiest. They're designed to be solvable by beginners in 15-30 minutes. Your first goal should be: solve A and B in every contest you enter!" },
      { t: "Common Pattern: Simple Math", d: "Many A problems are just math. 'Is n divisible by 2?' 'What's the minimum number of coins?' 'Can you split n into two even numbers?' These require no fancy algorithms — just careful thinking and basic operations (+, -, *, /, %)." },
      { t: "Common Pattern: Simulation", d: "Some problems say 'do this process step by step.' Just simulate it! If the problem says 'repeat until X happens,' write a while loop that does exactly what the problem describes. Don't overthink — sometimes the brute force IS the solution." },
      { t: "Common Pattern: Greedy", d: "Greedy problems ask you to make the best choice at each step. 'Always pick the biggest item' or 'always sort first.' If the problem feels like you should sort the data and then make choices from largest to smallest (or smallest to largest), it's probably greedy!" },
      { t: "Common Pattern: Counting and Frequency", d: "Many B problems ask you to count occurrences. How many times does each letter appear? What's the most frequent number? Use an array or map to count frequencies, then answer the question based on those counts." },
      { t: "Step-by-Step Problem Solving", d: "1) Read the problem completely. 2) Understand with examples. 3) Think of the approach (math? simulation? greedy?). 4) Consider edge cases. 5) Code it up. 6) Test with the given examples. 7) Think of corner cases. 8) Submit!" },
      { t: "Don't Overthink A Problems!", d: "The biggest mistake beginners make is overcomplicating A problems. If your solution needs more than 20 lines of logic, you might be overthinking. A problems are meant to be simple. Step back and look for a simpler approach." },
      { t: "Learn from Wrong Answers", d: "Getting Wrong Answer (WA) is normal! Check: did you read the problem right? Did you handle all edge cases? Is your output format correct (YES vs Yes)? Try the examples again. Try edge cases like n=1, n=0, all same numbers, maximum values." }
    ],
    whatIs: "This lesson teaches you how to approach and solve easy competitive programming problems (A and B problems on Codeforces). These are the foundation of competitive programming — mastering them builds your confidence and teaches you the core patterns (math, simulation, greedy, counting) that appear in harder problems too.",
    realWorld: "The step-by-step problem-solving approach works everywhere in life. Engineers break big projects into small solvable pieces. Doctors diagnose by eliminating possibilities one by one. Even cooking follows a process — read the recipe, gather ingredients, follow steps, taste and adjust. Systematic problem-solving is a universal life skill!",
    code: `#include <bits/stdc++.h>
using namespace std;

// Example A Problem: "Watermelon"
// Can you split weight w into two EVEN positive numbers?
void watermelon() {
    int w;
    cin >> w;
    // Two even numbers sum to an even number >= 4
    if (w >= 4 && w % 2 == 0)
        cout << "YES\\n";
    else
        cout << "NO\\n";
}

// Example B Problem: "Most Frequent Character"
// Given a string, find the most frequent character
void mostFrequent() {
    string s;
    cin >> s;
    int freq[26] = {0};  // Count each letter
    for (char c : s) freq[c - 'a']++;
    
    int maxFreq = 0;
    char result = 'a';
    for (int i = 0; i < 26; i++) {
        if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            result = 'a' + i;
        }
    }
    cout << result << "\\n";
}

// Example: Multiple test cases (very common!)
void solveMultiple() {
    int t;      // Number of test cases
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        // Solve for each test case
        // Example: Is n a perfect square?
        int sq = sqrt(n);
        if (sq * sq == n)
            cout << "YES\\n";
        else
            cout << "NO\\n";
    }
}

int main() {
    // Uncomment the function you want to test:
    // watermelon();
    // mostFrequent();
    solveMultiple();
    return 0;
}`,
    funFact: "The 'Watermelon' problem (Codeforces 4A) is one of the most solved problems in competitive programming history, with over 600,000 accepted solutions! But it STILL has more wrong answers than right ones — many people forget the edge case that w=2 should output 'NO' (you can't split 2 into two even positive numbers because the minimum is 2+2=4).",
    quiz: [
      { q: "What's the best first step when solving a contest problem?", opts: ["Start coding immediately", "Look at what others submitted", "Read the problem completely and study examples", "Skip to the hardest problem for more points"], ans: 2 },
      { q: "If a problem says 'print YES or NO', and you print 'yes', what happens?", opts: ["It's accepted — case doesn't matter", "Wrong Answer — you must match the exact format", "Runtime Error", "The judge figures out what you meant"], ans: 1 },
      { q: "What approach should you try first for most A problems?", opts: ["Dynamic programming", "Graph algorithms", "Simple math or direct simulation", "Machine learning"], ans: 2 },
      { q: "In the Watermelon problem, why is w=2 a special edge case?", opts: ["2 is a prime number", "You can't split 2 into two even POSITIVE numbers (minimum is 2+2=4)", "2 is too small for a watermelon", "The computer can't handle the number 2"], ans: 1 },
      { q: "What does 'multiple test cases' mean in a CP problem?", opts: ["You submit your code multiple times", "Your program must solve several inputs in one run", "The problem has multiple correct answers", "You need to test on your computer multiple times"], ans: 1 }
    ],
    challenge: "Solve this problem: Given a number n, determine if it can be represented as the sum of exactly two positive EVEN numbers. For example, 8 = 2+6 (YES), 6 = 2+4 (YES), 3 (NO — no two even numbers sum to odd), 2 (NO — minimum is 2+2=4). Handle multiple test cases! Then go to Codeforces and try problem 4A (Watermelon) for real!",
    resources: [
      { type: "practice", title: "Codeforces Problem 4A — Watermelon", url: "https://codeforces.com/problemset/problem/4/A", source: "Codeforces" },
      { type: "video", title: "How to Approach CP Problems", url: "https://www.youtube.com/watch?v=bSdp2WeyuJY", source: "Errichto" },
      { type: "practice", title: "Easiest Codeforces Problems (sorted by solved count)", url: "https://codeforces.com/problemset?order=BY_SOLVED_DESC", source: "Codeforces" }
    ],
    eli5: "Imagine you're solving puzzles at a carnival. The first booth has easy puzzles — 'what's 2 + 3?' The second booth is a tiny bit harder — 'what's the biggest number in this list?' You solve them one by one, getting prizes and confidence. The harder booths come later, but you don't need to rush! Start with the easy ones, learn the tricks, and work your way up. That's how you get good at contest problems!",
    codeWalkthrough: [
      "The watermelon function: we read a weight w. To split it into two even positive numbers, both numbers must be at least 2, so the minimum sum is 4. Also, even + even = even, so w must be even. Therefore: w >= 4 AND w is even.",
      "The mostFrequent function: we use a frequency array of size 26 (for each letter a-z). For each character, freq[c - 'a']++ counts it. Then we scan the array to find the highest count.",
      "freq[c - 'a']++ — this is a classic trick! 'a' - 'a' = 0, 'b' - 'a' = 1, ..., 'z' - 'a' = 25. So each letter maps to an index 0-25.",
      "The solveMultiple function shows the most common CP pattern: read t (number of test cases), then solve each one in a while(t--) loop.",
      "int sq = sqrt(n); if (sq * sq == n) — to check if n is a perfect square, we take the square root, round it to an integer, and check if squaring it gives back n. Simple and effective!",
      "Each function demonstrates a different common pattern: math (watermelon), counting (most frequent), and multiple test cases (perfect square check)."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        int a[n];
        for (int i = 0; i < n; i++) cin >> a[i];
        
        int max = 0;
        for (int i = 0; i < n; i++) {
            if (a[i] > max) max = a[i];
        }
        cout << max << "\\n";
    }
    return 0;
}`,
      hint: "What if all the numbers in the array are negative? What would 'max' be initialized to?",
      answer: "The bug is initializing max to 0! If all numbers are negative (like -5, -3, -8), none of them are greater than 0, so max stays at 0 — which is wrong because 0 isn't even in the array! The fix is to initialize max to a very small number: int max = INT_MIN; or better yet, initialize it to a[0] (the first element) and start the loop from i=1. Also, 'max' shadows std::max — use 'maxVal' as the variable name to avoid issues."
    },
    difficulty: "intermediate",
    prereqs: [36]
  },
  // ============================================================
  // LESSON 38: Debugging Like a Detective
  // ============================================================
  {
    id: 38,
    title: "Debugging Like a Detective",
    subtitle: "Finding and fixing bugs — the skill that separates good from great!",
    analogy: "Debugging is like being Sherlock Holmes. Your code gives the wrong answer — that's the crime scene. The bug is the criminal. You gather clues (add print statements), examine evidence (check edge cases), follow logical deduction (trace through your code), and eventually catch the culprit! Every great programmer is a great detective.",
    points: [
      { t: "Off-By-One Errors", d: "The most common bug in programming! Using < instead of <=, starting at 0 instead of 1, or looping one too many or too few times. Example: 'for (int i = 0; i <= n; i++)' when the array only has indices 0 to n-1. Always double-check your loop boundaries!" },
      { t: "Uninitialized Variables", d: "If you declare a variable but don't give it a value, it contains garbage data — a random value from memory. In C++, 'int sum;' might be 0 or might be -1294832. Always initialize: 'int sum = 0;' This bug is sneaky because it might work on your computer but fail on the judge!" },
      { t: "Integer Overflow", d: "int can hold up to about 2 billion (2 × 10^9). If your calculation exceeds this, the number wraps around and gives a wrong (often negative) answer. Use 'long long' for big numbers (up to about 9 × 10^18). Common trap: n * n when n = 100000 overflows int!" },
      { t: "Print Debugging — Your Best Tool", d: "When your code gives wrong output, add cout statements to see what's happening inside. Print variable values, loop counters, intermediate results. 'cerr << \"i=\" << i << \" sum=\" << sum << endl;' Use cerr (not cout) so it doesn't interfere with your output!" },
      { t: "Edge Cases to Always Check", d: "n = 0 (empty input), n = 1 (single element), negative numbers, maximum values (10^9, 10^18), all elements the same, already sorted input, reverse sorted input. These corner cases catch most bugs! Always test them before submitting." },
      { t: "Reading Input Wrong", d: "If your code reads input in the wrong order or reads the wrong number of values, everything else breaks. Always match your cin statements EXACTLY to the input format. If the problem says 'first line: n, second line: n integers,' make sure you read them in that exact order." },
      { t: "Testing Before Submitting", d: "Never submit without testing! Run your code on ALL the given examples first. Then make up your own test cases, especially edge cases. If all examples pass but you get WA, your code probably fails on an edge case you didn't think of." },
      { t: "Common Runtime Errors", d: "Division by zero (always check before dividing). Array out of bounds (accessing a[-1] or a[n]). Stack overflow (infinite recursion or very deep recursion). These cause Runtime Error (RE) on the judge. Add checks for these scenarios!" },
      { t: "The Rubber Duck Method", d: "When stuck, explain your code line-by-line to a rubber duck (or imaginary friend). Seriously! The act of explaining forces you to think through every step. Many programmers find the bug the moment they start explaining. It sounds silly but it WORKS!" }
    ],
    whatIs: "Debugging is the art of finding and fixing errors in your code. It's arguably the most important practical skill in competitive programming. This lesson covers the most common bugs (off-by-one, overflow, uninitialized variables), systematic debugging techniques (print statements, edge case testing), and good habits that prevent bugs in the first place.",
    realWorld: "The term 'bug' in computing dates back to 1947 when a moth got stuck in the Harvard Mark II computer. Grace Hopper's team literally found a bug! Today, companies like Google and NASA spend enormous resources on testing and debugging. The Ariane 5 rocket exploded in 1996 because of an integer overflow — a bug that cost $370 million!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // EXAMPLE: Find the maximum subarray sum (common CP problem)
    // Let's debug it step by step!
    
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    
    // Kadane's algorithm (simplified)
    long long maxSum = a[0];       // NOT 0! (what if all negative?)
    long long currentSum = a[0];   // Start with first element
    
    cerr << "Starting: maxSum=" << maxSum << " currentSum=" << currentSum << "\\n";
    
    for (int i = 1; i < n; i++) {  // Start from 1, not 0!
        currentSum = max((long long)a[i], currentSum + a[i]);
        maxSum = max(maxSum, currentSum);
        
        // Debug print — comment out before submitting!
        cerr << "i=" << i << " a[i]=" << a[i] 
             << " currentSum=" << currentSum 
             << " maxSum=" << maxSum << "\\n";
    }
    
    cout << maxSum << "\\n";
    
    // === DEBUGGING CHECKLIST ===
    // 1. Did I read all input correctly?
    // 2. Are my loop bounds right (no off-by-one)?
    // 3. Did I initialize all variables?
    // 4. Can any calculation overflow int?
    // 5. Did I handle edge cases (n=1, all negative)?
    // 6. Does my output match the required format?
    // 7. Did I test with ALL given examples?
    
    return 0;
}`,
    funFact: "Microsoft once estimated that debugging takes 50% of all programming time. The average programmer creates about 15-50 bugs per 1000 lines of code! In competitive programming, the #1 cause of Wrong Answers isn't wrong algorithms — it's implementation bugs. Getting good at debugging can improve your rating more than learning new algorithms!",
    quiz: [
      { q: "What is an off-by-one error?", opts: ["Using the wrong programming language", "A loop that runs one too many or too few times", "A syntax error caught by the compiler", "Using float instead of double"], ans: 1 },
      { q: "Why should you use cerr instead of cout for debug prints?", opts: ["cerr is faster", "cerr output doesn't interfere with your program's actual output", "cerr looks different on screen", "There's no difference"], ans: 1 },
      { q: "When does integer overflow happen in C++?", opts: ["When you use too many variables", "When a calculation exceeds the maximum value an int can hold (~2 billion)", "When you divide by zero", "When the program runs too long"], ans: 1 },
      { q: "What should maxSum be initialized to in the max subarray problem?", opts: ["0", "INT_MIN", "The first element a[0]", "-1"], ans: 2 },
      { q: "What is the rubber duck debugging method?", opts: ["Using a special debugging tool shaped like a duck", "Explaining your code line-by-line out loud to find bugs", "Running your code in 'duck mode'", "Adding duck-shaped comments to your code"], ans: 1 }
    ],
    challenge: "Here's a buggy program that's supposed to find the second largest number in an array. Find and fix ALL the bugs:\n\nint n; cin >> n;\nint a[n];\nfor(int i=0; i<=n; i++) cin >> a[i];\nint max1=0, max2=0;\nfor(int i=0; i<n; i++) {\n  if(a[i]>max1) { max2=max1; max1=a[i]; }\n}\ncout << max2;\n\nHint: there are at least 3 bugs. Consider: loop bounds, initialization, and what happens when the second largest isn't found correctly.",
    resources: [
      { type: "article", title: "Common Mistakes in Competitive Programming", url: "https://codeforces.com/blog/entry/111217", source: "Codeforces Blog" },
      { type: "video", title: "Debugging Tips for Competitive Programming", url: "https://www.youtube.com/watch?v=bSdp2WeyuJY", source: "Errichto" },
      { type: "practice", title: "Practice with Tricky Edge Cases", url: "https://codeforces.com/problemset?tags=implementation", source: "Codeforces" }
    ],
    eli5: "Imagine you're building a LEGO castle and something looks wrong. Maybe a wall is crooked or a piece is missing. You don't throw the whole thing away! You look carefully at each section, compare it to the picture, and find the one piece that's in the wrong spot. Then you fix just that one piece. Debugging code is exactly the same — look carefully, find the mistake, fix it. You're a code detective!",
    codeWalkthrough: [
      "vector<int> a(n); — we use a vector instead of int a[n] to avoid variable-length array issues on some compilers.",
      "long long maxSum = a[0]; — we initialize to the first element, NOT 0! If all numbers are negative (like -3, -1, -5), the answer is -1, not 0. Initializing to 0 would be a bug.",
      "long long currentSum = a[0]; — same here. We also use long long to prevent integer overflow when numbers are large.",
      "for (int i = 1; i < n; i++) — we start from index 1, not 0, because we already used a[0] for initialization. Starting from 0 would process a[0] twice.",
      "currentSum = max((long long)a[i], currentSum + a[i]); — at each step, we choose: start fresh from a[i], or extend the current subarray. This is Kadane's algorithm!",
      "cerr << ... — debug output goes to cerr (standard error), which is separate from cout (standard output). The judge only looks at cout, so cerr won't cause Wrong Answer. Remove or comment out before submitting for cleaner code.",
      "The debugging checklist at the bottom covers the most common sources of bugs. Going through this checklist before submitting can save you many Wrong Answer penalties!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[n];
    for (int i = 0; i < n; i++) cin >> a[i];
    
    long long sum;
    for (int i = 0; i < n; i++) {
        sum += a[i];
    }
    cout << sum << "\\n";
    return 0;
}`,
      hint: "Look at the line 'long long sum;' — what value does sum start with if you don't initialize it?",
      answer: "The bug is an uninitialized variable! 'long long sum;' without '= 0' means sum starts with whatever random garbage value was in memory. It could be 0 (making the program appear to work) or it could be 7293847192 (giving a completely wrong answer). This is especially tricky because it might work on YOUR computer but fail on the judge's computer. The fix is simple: 'long long sum = 0;' ALWAYS initialize your variables!"
    },
    difficulty: "intermediate",
    prereqs: [37]
  },
  // ============================================================
  // LESSON 39: Time Complexity — Making Your Code Fast
  // ============================================================
  {
    id: 39,
    title: "Time Complexity — Making Your Code Fast",
    subtitle: "Why some solutions pass and others get TLE — the secret is Big O!",
    analogy: "Time complexity is like choosing how to travel from your house to school. Walking is O(n) — it takes a while. Biking is O(n/2) — faster! A car is O(log n) — much faster! A helicopter is O(1) — instant! For the same destination (same problem), different methods take vastly different times. Choosing the right 'vehicle' (algorithm) is everything!",
    points: [
      { t: "What is Time Complexity?", d: "Time complexity measures how many operations your program performs as the input size (n) grows. It's NOT about actual seconds — it's about the PATTERN of growth. Does your program do n operations? n² operations? We care about the big picture, not exact counts." },
      { t: "Big O Notation", d: "Big O notation describes the WORST-CASE growth rate. O(n) means operations grow linearly with input. O(n²) means if input doubles, operations QUADRUPLE. We drop constants and lower terms: 3n + 5 is just O(n), and 2n² + 100n is O(n²). Only the biggest term matters!" },
      { t: "O(1) — Constant Time", d: "The program does the same amount of work no matter how big the input. Example: checking if a number is even (n % 2 == 0). Whether n is 5 or 5 billion, it's one operation. O(1) is the dream — instant!" },
      { t: "O(n) — Linear Time", d: "Operations grow proportionally with input. One loop through n elements is O(n). Finding the maximum in an array by scanning each element once is O(n). If n doubles, time doubles. For n ≤ 10^6 or 10^7, O(n) usually passes." },
      { t: "O(n log n) — The Sweet Spot", d: "Sorting algorithms like merge sort and C++'s sort() are O(n log n). It's faster than O(n²) but slower than O(n). For n = 1,000,000: n² = 10^12 (way too slow), but n log n ≈ 20,000,000 (fast!). Many CP problems are designed to be solved in O(n log n)." },
      { t: "O(n²) — Quadratic Time", d: "Two nested loops over n elements is O(n²). For n = 1000: n² = 1,000,000 (fine). For n = 100000: n² = 10^10 (WAY too slow, TLE!). O(n²) is OK for small constraints but dangerous for large ones." },
      { t: "Why TLE Happens", d: "Time Limit Exceeded (TLE) means your program is too slow. Most judges allow about 10^8 simple operations per second. If n = 10^5 and your solution is O(n²), that's 10^10 operations — 100x too slow! You need a faster algorithm, like O(n log n) or O(n)." },
      { t: "Reading Constraints to Choose Your Approach", d: "n ≤ 10: any approach works, even O(2^n). n ≤ 100: O(n³) is fine. n ≤ 1000: O(n²) works. n ≤ 10^5: need O(n log n). n ≤ 10^6-10^7: need O(n). This is the MOST USEFUL thing in competitive programming — constraints tell you the solution!" },
      { t: "Space Complexity (Bonus)", d: "Just like time complexity measures operations, space complexity measures memory. An array of size n uses O(n) space. A 2D array n×n uses O(n²) space. Memory limits are usually 256MB, which is roughly 64 million integers. Keep this in mind for large inputs!" }
    ],
    whatIs: "Time complexity is a way to measure how fast an algorithm is by counting how the number of operations grows as the input gets bigger. We use Big O notation — O(1), O(n), O(n log n), O(n²), etc. Understanding time complexity is crucial for competitive programming because it tells you whether your solution will pass within the time limit before you even submit it!",
    realWorld: "Google searches billions of web pages in milliseconds because they use O(1) lookups (hash tables) and O(log n) searches. If they used O(n) search, looking through billions of pages would take minutes! Amazon's recommendation system, GPS navigation, and even Netflix's movie suggestions all depend on fast algorithms with good time complexity.",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    
    // O(1) — Constant: always same number of operations
    cout << "First element: " << a[0] << "\\n";
    
    // O(n) — Linear: one loop through all elements
    long long sum = 0;
    for (int i = 0; i < n; i++) sum += a[i];
    cout << "Sum: " << sum << "\\n";
    
    // O(n log n) — Sorting
    sort(a.begin(), a.end());
    cout << "Sorted min: " << a[0] << " max: " << a[n-1] << "\\n";
    
    // O(n^2) — Two nested loops (SLOW for large n!)
    // Count pairs with equal values
    int pairCount = 0;
    if (n <= 5000) {  // Only safe for small n!
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (a[i] == a[j]) pairCount++;
            }
        }
    }
    cout << "Equal pairs: " << pairCount << "\\n";
    
    // O(n) way to count equal pairs (SMART!)
    // After sorting, count consecutive equal elements
    int smartCount = 0;
    int i = 0;
    while (i < n) {
        int j = i;
        while (j < n && a[j] == a[i]) j++;
        int groupSize = j - i;
        smartCount += groupSize * (groupSize - 1) / 2;  // Choose 2 from group
        i = j;
    }
    cout << "Equal pairs (fast): " << smartCount << "\\n";
    
    return 0;
}`,
    funFact: "The difference between O(n) and O(n²) is MASSIVE at scale. For n = 1,000,000: O(n) = 1 million operations (0.01 seconds), O(n²) = 1 TRILLION operations (about 3 hours!). That's the difference between a blink and a nap! The biggest improvements in computing history weren't faster hardware — they were better algorithms with better Big O!",
    quiz: [
      { q: "What does O(n²) mean?", opts: ["The program runs in n² seconds", "As input doubles, operations roughly QUADRUPLE", "The program uses n² bytes of memory", "The program needs n² test cases"], ans: 1 },
      { q: "If n ≤ 100,000 and the time limit is 1 second, which complexity is safe?", opts: ["O(n²)", "O(n³)", "O(n log n)", "O(2^n)"], ans: 2 },
      { q: "What does TLE stand for?", opts: ["Total Logic Error", "Time Limit Exceeded", "Testing Loop Error", "Too Large Execution"], ans: 1 },
      { q: "What is the time complexity of C++ sort()?", opts: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], ans: 1 },
      { q: "If the constraint says n ≤ 10, what approach is acceptable?", opts: ["Only O(n)", "Only O(n log n)", "Even O(2^n) or brute force is fine", "Only O(1)"], ans: 2 }
    ],
    challenge: "You're given an array of n numbers and need to find if any two numbers sum to a target value k. The O(n²) approach checks all pairs. Can you think of an O(n log n) approach? Hint: sort the array first, then for each element a[i], binary search for (k - a[i]). Code both solutions and test them! For n=100000, the O(n²) version would be too slow but the O(n log n) version flies!",
    resources: [
      { type: "video", title: "Big O Notation — Simply Explained", url: "https://www.youtube.com/watch?v=BgLTDT03QtU", source: "NeetCode" },
      { type: "article", title: "Time Complexity for Competitive Programming", url: "https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/", source: "GeeksforGeeks" },
      { type: "practice", title: "Problems Sorted by Difficulty", url: "https://codeforces.com/problemset?order=BY_RATING_ASC", source: "Codeforces" }
    ],
    eli5: "Imagine you're looking for your friend in a group of people. If there are 10 people, you can check each one quickly. But what if there are a MILLION people? Checking one by one (O(n)) takes a while. Checking every pair (O(n²)) takes FOREVER. But if everyone is sorted by name, you can use a trick like opening a phone book to the middle and narrowing down (O(log n)) — super fast! Time complexity is about choosing the smartest way to find your friend!",
    codeWalkthrough: [
      "We read an array of n integers — this is the standard CP input pattern.",
      "cout << a[0] — accessing one element is O(1). No matter how big the array, getting one element is instant.",
      "The sum loop: for (int i = 0; i < n; i++) sum += a[i]; — we visit each element exactly once, so it's O(n). If n doubles, the time doubles.",
      "sort(a.begin(), a.end()); — C++'s built-in sort is O(n log n). It's one of the most commonly used operations in CP. After sorting, the smallest is at a[0] and largest at a[n-1].",
      "The double loop for counting pairs: two nested loops each going up to n, so the inner loop runs roughly n²/2 times total. That's O(n²). We guard it with if (n <= 5000) to prevent TLE.",
      "The SMART O(n) approach: after sorting, equal elements are next to each other. We count each group's size and use the formula groupSize * (groupSize - 1) / 2 (combinations of 2 from the group). This replaces O(n²) with O(n)!",
      "groupSize * (groupSize - 1) / 2 — this is the combination formula 'n choose 2', which counts how many pairs you can make from groupSize elements. Math saves the day!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[n];
    for (int i = 0; i < n; i++) cin >> a[i];
    
    // Find if any two elements sum to 1000000
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (a[i] + a[j] == 1000000) {
                cout << "YES\\n";
                return 0;
            }
        }
    }
    cout << "NO\\n";
    return 0;
}`,
      hint: "Two bugs! First, look at the inner loop — can j equal i? Should an element be paired with itself? Second, what's the time complexity, and will this pass if n = 100,000?",
      answer: "Bug 1: j starts at 0, so when i==j, we pair an element with ITSELF. If a[i] = 500000, then a[i]+a[i] = 1000000 and we'd incorrectly say YES even though there's only ONE 500000 in the array. Fix: start j at i+1. Bug 2: with n=100,000, this O(n²) solution does 10 BILLION operations — it will TLE! A faster approach: sort the array, then use two pointers (one at start, one at end) moving inward. That's O(n log n)."
    },
    difficulty: "intermediate",
    prereqs: [12, 25]
  },
  // ============================================================
  // LESSON 40: Your CP Journey — What's Next!
  // ============================================================
  {
    id: 40,
    title: "Your CP Journey — What's Next!",
    subtitle: "You've built the foundation — now let's talk about the skyscraper!",
    analogy: "This moment is like graduating and looking at the road ahead. You've built a strong foundation — you know C++, algorithms, data structures, problem-solving, and debugging. Now it's time to build the skyscraper! The road ahead is exciting: new algorithms, harder problems, real contests, and a community of millions of coders. Your journey has just begun!",
    points: [
      { t: "Look How Far You've Come!", d: "In 40 lessons, you went from 'What is Programming?' to recursion, stacks, queues, sorting, searching, time complexity, and solving real contest problems. You can write C++ programs, debug them, and think algorithmically. That's AMAZING! Most people never get this far. Be proud!" },
      { t: "The Codeforces Rating System", d: "Codeforces gives you a rating based on contest performance. Newbie (gray, < 1200), Pupil (green, 1200-1399), Specialist (cyan, 1400-1599), Expert (blue, 1600-1899), Candidate Master (purple, 1900-2099), Master (orange, 2100-2299), Grandmaster (red, 2400+). Start with virtual contests to practice!" },
      { t: "Your Next Topics to Learn", d: "Here's your roadmap: (1) Dynamic Programming — the most important CP topic, building on recursion. (2) Graph algorithms — BFS, DFS, shortest paths. (3) Number theory — primes, GCD, modular arithmetic. (4) Advanced data structures — segment trees, fenwick trees. Take them one at a time!" },
      { t: "Daily Practice Plan", d: "Solve 1-2 problems daily. Start with Codeforces rating 800-1000 problems. When those feel easy, move to 1000-1200. After each contest, read the editorial (solution explanation) for problems you couldn't solve. Consistency beats intensity — 30 minutes daily beats 5 hours once a week!" },
      { t: "Online Judges and Platforms", d: "Codeforces — the biggest CP platform, weekly contests. AtCoder — Japanese platform, very clean problems. USACO — American computing olympiad (great for students). LeetCode — more interview-focused but great for practice. CSES Problem Set — curated 300 problems covering all major topics." },
      { t: "Learning from Editorials", d: "After every contest, read the editorial (official solution). For problems you solved, compare your approach. For problems you didn't solve, study the technique — that's how you learn new algorithms! Many top programmers say reading editorials is the #1 way they improved." },
      { t: "The CP Community", d: "CP has one of the friendliest communities in programming! Codeforces blogs are full of tutorials. YouTube channels like Errichto, SecondThread, and Colin Galen teach advanced topics. Discord servers and Reddit (r/competitiveprogramming) are great for asking questions. You're never alone!" },
      { t: "CP Skills Transfer to Real Life", d: "CP teaches problem-solving, logical thinking, and coding under pressure — skills valued by top tech companies. Google, Facebook, and Amazon actively recruit competitive programmers. Many CP veterans go on to be top software engineers, researchers, and tech leaders." },
      { t: "Your Encouragement", d: "Every expert was once a beginner. Tourist (the #1 rated programmer) started with simple problems just like you. Petr Mitrichev practiced for years before becoming a legend. The secret? They never stopped. Keep solving, keep learning, keep having fun. YOU can do this! Your competitive programming journey has just begun, and the best is yet to come!" }
    ],
    whatIs: "This final lesson is your graduation ceremony and roadmap! We recap everything you've learned in 40 lessons, explain the Codeforces rating system, give you a clear study plan for what to learn next, introduce the CP community, and send you off with encouragement. You've built an incredible foundation — now it's time to fly!",
    realWorld: "Competitive programming skills have launched thousands of careers. Gennady Korotkevich (tourist), the #1 CP programmer, works at a top tech company. Petr Mitrichev works at Google. Many ICPC World Finalists become tech leaders, startup founders, and researchers. The problem-solving skills you've learned are valued in every industry — from finance to medicine to space exploration!",
    code: `#include <bits/stdc++.h>
using namespace std;

// Your CP template — use this for every contest!
// Customize it as you learn more tricks.

int main() {
    // Fast I/O — makes cin/cout as fast as scanf/printf
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t;
    cin >> t;  // Number of test cases
    
    while (t--) {
        int n;
        cin >> n;
        vector<int> a(n);
        for (int i = 0; i < n; i++) cin >> a[i];
        
        // === YOUR SOLUTION GOES HERE ===
        
        // Example: find min, max, sum
        int minVal = *min_element(a.begin(), a.end());
        int maxVal = *max_element(a.begin(), a.end());
        long long sum = 0;
        for (int x : a) sum += x;
        
        cout << "Min: " << minVal << "\\n";
        cout << "Max: " << maxVal << "\\n";
        cout << "Sum: " << sum << "\\n";
        
        // Sort (O(n log n))
        sort(a.begin(), a.end());
        
        // Binary search (O(log n))
        int target = 42;
        bool found = binary_search(a.begin(), a.end(), target);
        cout << "Found 42? " << (found ? "YES" : "NO") << "\\n";
    }
    
    return 0;
}

// EVERYTHING YOU'VE LEARNED:
// Lesson 1-5: Programming basics, variables, I/O, data types
// Lesson 6-10: Conditions, loops, patterns, operators
// Lesson 11-15: Functions, arrays, strings, math tricks
// Lesson 16-20: STL, vectors, pairs, sets, maps
// Lesson 21-25: Sorting, searching, two pointers, frequency counting
// Lesson 26-31: Prefix sums, greedy, basic DP ideas, problem patterns
// Lesson 32-35: Recursion, stacks, queues
// Lesson 36-39: Problem reading, solving, debugging, time complexity
// Lesson 40: YOUR JOURNEY CONTINUES!`,
    funFact: "The International Collegiate Programming Contest (ICPC) is the oldest and most prestigious programming contest, running since 1970. Teams of 3 students share ONE computer and try to solve 10+ problems in 5 hours. The winning team typically solves 8-10 problems! Countries that dominate: Russia, China, South Korea, and Poland. Maybe YOUR team will be there one day!",
    quiz: [
      { q: "What Codeforces rating range is 'Pupil' (green)?", opts: ["800-999", "1000-1199", "1200-1399", "1400-1599"], ans: 2 },
      { q: "What should you do after a contest for problems you couldn't solve?", opts: ["Forget about them and move on", "Read the editorial to learn the solution technique", "Delete your account", "Only practice problems you can already solve"], ans: 1 },
      { q: "What does ios_base::sync_with_stdio(false) do?", opts: ["Makes your code more secure", "Speeds up cin/cout by disconnecting them from C's stdio", "Enables debugging mode", "Reduces memory usage"], ans: 1 },
      { q: "What is the recommended daily practice for CP beginners?", opts: ["Solve 20 problems a day", "Solve 1-2 problems consistently every day", "Only practice during contests", "Read theory for 5 hours without coding"], ans: 1 },
      { q: "Which topic should you learn NEXT after this course?", opts: ["Machine learning", "Dynamic Programming", "Web development", "Game design"], ans: 1 }
    ],
    challenge: "Your FINAL challenge — and it's a big one! Go to Codeforces (codeforces.com), create an account if you haven't already, and solve your first problem! Try problem 4A (Watermelon) or any problem rated 800. Use your CP template from this lesson. After solving it, find a virtual contest and try to solve the A and B problems within the time limit. You're ready. Go show the world what you can do!",
    resources: [
      { type: "practice", title: "Codeforces — Start Your Journey", url: "https://codeforces.com/", source: "Codeforces" },
      { type: "practice", title: "CSES Problem Set — 300 Curated Problems", url: "https://cses.fi/problemset/", source: "CSES" },
      { type: "video", title: "Competitive Programming Roadmap", url: "https://www.youtube.com/watch?v=bSdp2WeyuJY", source: "Errichto" }
    ],
    eli5: "Imagine you just learned to ride a bicycle! At first you couldn't even balance, but now you can ride around the whole neighborhood. This course was your training wheels — and now they're OFF! The road ahead has hills (harder problems), sharp turns (tricky algorithms), and beautiful views (elegant solutions). Sometimes you'll fall, and that's OK — every champion fell many times before winning. Just get back on, keep pedaling, and enjoy the ride. You're a programmer now, and the world is yours to explore!",
    codeWalkthrough: [
      "ios_base::sync_with_stdio(false); cin.tie(NULL); — these two lines speed up cin and cout dramatically. Always include them in contest code! They disconnect C++ streams from C streams, removing synchronization overhead.",
      "int t; cin >> t; while (t--) — the standard multiple test case pattern. Read how many test cases, then solve each one in the loop.",
      "vector<int> a(n); — create a vector of n integers. Vectors are safer and more flexible than raw arrays.",
      "*min_element(a.begin(), a.end()) — a handy STL function that finds the minimum element. The * at the front dereferences the iterator to get the actual value.",
      "sort(a.begin(), a.end()); — O(n log n) sorting, one of the most used operations in CP.",
      "binary_search(a.begin(), a.end(), target) — returns true/false whether the target exists in a SORTED container. O(log n) — super fast!",
      "This template is your starting point for every contest. Over time, you'll add more helper functions, macros, and tricks. Many top programmers have templates with hundreds of lines of pre-written code!",
      "The comment block at the bottom recaps all 40 lessons — from basic programming to advanced problem-solving. Look how much you've learned!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    
    // Find target using binary search
    int target;
    cin >> target;
    
    bool found = binary_search(a.begin(), a.end(), target);
    cout << (found ? "YES" : "NO") << "\\n";
    return 0;
}`,
      hint: "Binary search has an important prerequisite. What condition must the array satisfy for binary_search to work correctly?",
      answer: "The bug is that binary_search REQUIRES the array to be SORTED, but we never sort it! Binary search works by checking the middle element and eliminating half the array — this only works if elements are in order. The fix is to add 'sort(a.begin(), a.end());' before the binary_search call. Without sorting, binary search can miss elements that are actually there, giving wrong answers. Always sort before binary searching!"
    },
    difficulty: "beginner",
    prereqs: []
  }

,
  // =============================================
  // LESSON 41: Introduction to Dynamic Programming
  // =============================================
  {
    id: 41,
    title: "Dynamic Programming — Remember and Reuse",
    subtitle: "Learn the most powerful problem-solving technique — solve it once, remember it forever!",
    analogy: "Imagine you are a student taking a math test, and the test keeps asking you the same addition problems over and over. The first time you see 7 + 8, you calculate it carefully and get 15. But instead of throwing away your work, you write the answer in a notebook. The next time 7 + 8 appears, you just look it up — instant answer! That is exactly what Dynamic Programming does. It solves each small problem once, writes down the answer, and reuses it whenever that same problem comes up again. No wasted effort!",
    points: [
      {
        t: "What is Dynamic Programming?",
        d: "Dynamic Programming (DP) is a technique where you break a big problem into smaller overlapping subproblems, solve each small problem once, and store the answer so you never solve it again. It is like building a house — you lay each brick once and build on top of what you already have. DP turns problems that would take forever into ones that finish in the blink of an eye!"
      },
      {
        t: "Overlapping Subproblems — The Key Idea",
        d: "Some problems ask you to solve the same smaller problem again and again. For example, to find the 10th Fibonacci number, you need the 9th and 8th. But the 9th needs the 8th and 7th — see how the 8th gets asked twice? These repeated calculations are called overlapping subproblems. Without DP, you waste tons of time recalculating. With DP, you calculate once and remember!"
      },
      {
        t: "Memoization — Top-Down DP",
        d: "Memoization means you start from the big problem and work your way down to smaller ones using recursion, but you store each answer in a table (like a dictionary). Before solving any subproblem, you check: did I already solve this? If yes, just return the stored answer. If no, solve it, store it, then return. It is like a student who checks their notebook before doing any calculation."
      },
      {
        t: "Tabulation — Bottom-Up DP",
        d: "Tabulation means you start from the smallest problems and build your way up to the big one using a loop. You fill a table from the beginning, and each entry uses previously computed entries. It is like climbing stairs — you start at step 1, then step 2, and keep going up. No recursion needed! Many competitive programmers prefer this approach because it is usually faster and avoids stack overflow."
      },
      {
        t: "Fibonacci — The Classic DP Example",
        d: "The Fibonacci sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21... Each number is the sum of the two before it. Without DP, computing the 40th Fibonacci number makes BILLIONS of recursive calls. With DP, it takes just 40 steps! That is the magic — DP can turn an impossibly slow solution into a lightning-fast one. Fibonacci is the hello world of Dynamic Programming."
      },
      {
        t: "Top-Down vs Bottom-Up — Which is Better?",
        d: "Top-down (memoization) is easier to write because it follows the natural recursive thinking. Bottom-up (tabulation) is usually faster because it avoids recursion overhead. In competitive programming, bottom-up is more common because it runs faster and uses less memory. But top-down is great when you do not need all subproblems — it only solves the ones you actually need."
      },
      {
        t: "How to Spot a DP Problem",
        d: "Look for these clues: the problem asks for the minimum, maximum, or count of something. The problem can be broken into smaller similar problems. Making a choice at each step affects future choices. The problem has overlapping subproblems (same calculations repeated). If you see phrases like 'find the minimum cost' or 'count the number of ways,' think DP!"
      },
      {
        t: "The DP Recipe — 4 Simple Steps",
        d: "Step 1: Define what your DP state represents (what does dp[i] mean?). Step 2: Write the recurrence relation (how does dp[i] depend on smaller values?). Step 3: Set the base cases (what are the starting values?). Step 4: Decide the order of computation (bottom-up) or add memoization (top-down). Follow this recipe and you can solve almost any DP problem!"
      },
      {
        t: "Why DP Feels Hard (But Is Not!)",
        d: "DP feels hard because it requires you to think about problems differently — instead of solving directly, you think about what subproblems you need. But once you practice 10-15 DP problems, patterns start to appear. Most DP problems are variations of a few classic patterns: Fibonacci-style, knapsack, grid paths, and string matching. Learn the patterns and DP becomes your superpower!"
      }
    ],
    whatIs: "Dynamic Programming (DP) is an algorithmic technique that solves complex problems by breaking them into simpler overlapping subproblems, solving each subproblem just once, and storing the results for future use. It transforms exponentially slow recursive solutions into efficient polynomial-time ones.",
    realWorld: "DP is used everywhere in the real world! Google Maps uses DP to find the shortest route between cities. Spell checkers use DP (edit distance) to suggest corrections for misspelled words. Netflix uses DP-like algorithms to recommend movies you might enjoy. Even your phone's autocorrect uses Dynamic Programming to figure out what word you meant to type!",
    code: `#include <bits/stdc++.h>
using namespace std;

// ===== METHOD 1: Top-Down (Memoization) =====
long long memo[51];  // Store computed Fibonacci values
bool computed[51];   // Track which values are computed

long long fibMemo(int n) {
    if (n <= 1) return n;           // Base cases: fib(0)=0, fib(1)=1
    if (computed[n]) return memo[n]; // Already solved? Return stored answer!
    
    memo[n] = fibMemo(n - 1) + fibMemo(n - 2);  // Solve and store
    computed[n] = true;
    return memo[n];
}

// ===== METHOD 2: Bottom-Up (Tabulation) =====
long long fibTab(int n) {
    if (n <= 1) return n;
    
    vector<long long> dp(n + 1);
    dp[0] = 0;  // Base case
    dp[1] = 1;  // Base case
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];  // Build from bottom up!
    }
    return dp[n];
}

// ===== METHOD 3: Space-Optimized Bottom-Up =====
long long fibOptimized(int n) {
    if (n <= 1) return n;
    
    long long prev2 = 0, prev1 = 1;
    for (int i = 2; i <= n; i++) {
        long long curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;  // Only need last two values!
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;
    cout << "Enter n to find Fibonacci(n): ";
    cin >> n;
    
    cout << "Memoization: fib(" << n << ") = " << fibMemo(n) << "\\n";
    cout << "Tabulation:  fib(" << n << ") = " << fibTab(n) << "\\n";
    cout << "Optimized:   fib(" << n << ") = " << fibOptimized(n) << "\\n";
    
    return 0;
}`,
    funFact: "The term 'Dynamic Programming' was invented by Richard Bellman in the 1950s. He chose the word 'dynamic' because it sounded cool and impressive — not because it describes what the technique does! He wanted to hide the mathematical nature of his work from a secretary of defense who hated math research. So the name is basically a marketing trick that stuck forever!",
    quiz: [
      { q: "What is the main idea behind Dynamic Programming?", opts: ["Use random guessing to find answers", "Solve each subproblem once and store the result for reuse", "Always use recursion without storing anything", "Sort the data first then search"], ans: 1 },
      { q: "What are overlapping subproblems?", opts: ["Problems that are impossible to solve", "Subproblems that are solved multiple times during recursion", "Problems that have no solution", "Problems where the input overlaps with the output"], ans: 1 },
      { q: "What is the difference between memoization and tabulation?", opts: ["They are exactly the same thing", "Memoization is top-down with recursion, tabulation is bottom-up with loops", "Memoization is faster than tabulation always", "Tabulation uses recursion and memoization uses loops"], ans: 1 },
      { q: "Without DP, how many recursive calls does Fibonacci(40) make approximately?", opts: ["40 calls", "400 calls", "Over a billion calls", "Exactly 80 calls"], ans: 2 },
      { q: "Which clue suggests a problem might need DP?", opts: ["The problem asks you to sort an array", "The problem asks for minimum cost or number of ways", "The problem only has one possible answer", "The input is always a single number"], ans: 1 }
    ],
    challenge: "Implement both memoization and tabulation versions of Fibonacci. Then try this: compute the number of ways to tile a 2xN rectangle using 2x1 tiles. Hint: the answer for a 2xN rectangle follows the Fibonacci pattern! Can you figure out why? Write both a top-down and bottom-up solution. Test with N=1 through N=10 and verify your answers: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.",
    resources: [
      { type: "video", title: "Dynamic Programming for Beginners — Errichto", url: "https://www.youtube.com/watch?v=YBSt1jYwVfU", source: "YouTube — Errichto" },
      { type: "article", title: "Dynamic Programming — USACO Guide", url: "https://usaco.guide/gold/intro-dp", source: "USACO Guide" },
      { type: "practice", title: "AtCoder Educational DP Contest", url: "https://atcoder.jp/contests/dp/tasks", source: "AtCoder" }
    ],
    eli5: "Imagine you are coloring a picture and your friend keeps asking you 'what color is the sky?' You tell them 'blue' the first time. But if they ask again and again, you would get tired of answering! So you write 'SKY = BLUE' on a sticky note and put it on the wall. Now whenever anyone asks, you just point to the sticky note. Dynamic Programming is like putting sticky notes everywhere so you never have to figure out the same thing twice!",
    codeWalkthrough: [
      "We create two global arrays: memo[] to store Fibonacci values and computed[] to track which ones we have already calculated. These are our 'sticky notes' for the top-down approach.",
      "In fibMemo(n), the base case returns n directly when n is 0 or 1. This is because fib(0) = 0 and fib(1) = 1 — the starting points of the sequence.",
      "Before computing, we check if computed[n] is true. If it is, we already solved this subproblem! We just return memo[n] instantly. This is the magic of memoization — no repeated work.",
      "If not yet computed, we recursively call fibMemo(n-1) + fibMemo(n-2), store the result in memo[n], mark computed[n] as true, and return the answer.",
      "In fibTab(n), we create a dp vector and fill it from the bottom up. dp[0] = 0 and dp[1] = 1 are our base cases. Then we loop from 2 to n, filling each dp[i] = dp[i-1] + dp[i-2].",
      "The space-optimized version fibOptimized(n) is clever — since we only ever need the last two values, we use just two variables (prev1 and prev2) instead of a whole array. This saves memory!",
      "In each iteration of the optimized loop, we compute curr = prev1 + prev2, then shift: prev2 becomes prev1, and prev1 becomes curr. Like a caterpillar inching forward.",
      "In main(), we read n and call all three methods. They all give the same answer, but use different approaches. The optimized version uses O(1) space — just two variables!",
      "All three methods run in O(n) time, which is incredibly fast compared to the naive recursive O(2^n). For n=50, that is the difference between instant and waiting longer than the age of the universe!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

long long memo[101];

long long fib(int n) {
    if (n <= 1) return n;
    if (memo[n] != 0) return memo[n];
    
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

int main() {
    cout << fib(0) << "\\n";  // Should print 0
    cout << fib(1) << "\\n";  // Should print 1
    cout << fib(2) << "\\n";  // Should print 1
    cout << fib(10) << "\\n"; // Should print 55
    return 0;
}`,
      hint: "Think about what value fib(0) returns and what the memo check condition is. Is checking memo[n] != 0 always correct for memoization?",
      answer: "The bug is using memo[n] != 0 to check if a value is computed. The problem is that fib(0) = 0, so memo[0] will always be 0, and the check thinks it has not been computed yet! This causes infinite recursion for some cases. The fix is to initialize memo with -1 (using memset(memo, -1, sizeof(memo))) and check memo[n] != -1 instead. This way, -1 means 'not yet computed' and 0 is a valid computed answer."
    },
    difficulty: "advanced",
    prereqs: [32, 14]
  },
  // =============================================
  // LESSON 42: More DP Adventures
  // =============================================
  {
    id: 42,
    title: "More DP Adventures — Coins and Stairs",
    subtitle: "Master classic DP problems that appear in contests everywhere — stairs, coins, and more!",
    analogy: "Imagine you are at the bottom of a staircase and you can take either 1 step or 2 steps at a time. How many different ways can you reach the top? You could go 1-1-1-1, or 2-2, or 1-2-1, and so on. Instead of listing every single possibility (which gets crazy for 100 stairs!), you notice a pattern: the number of ways to reach stair N depends only on how many ways to reach stair N-1 and stair N-2. Sound familiar? It is Fibonacci in disguise! That is the beauty of DP — once you learn the patterns, you see them everywhere.",
    points: [
      {
        t: "The Climbing Stairs Problem",
        d: "You are at the bottom of a staircase with N steps. Each time, you can climb 1 or 2 steps. How many distinct ways can you reach the top? For 1 step, there is 1 way. For 2 steps, there are 2 ways (1+1 or 2). For 3 steps, there are 3 ways. The pattern is exactly Fibonacci! dp[i] = dp[i-1] + dp[i-2] because you either came from one step below (took 1 step) or two steps below (took 2 steps)."
      },
      {
        t: "Extending Stairs — What if You Can Take 1, 2, or 3 Steps?",
        d: "If you can take 1, 2, or 3 steps at a time, the recurrence becomes dp[i] = dp[i-1] + dp[i-2] + dp[i-3]. The idea is the same — you could have arrived from 1, 2, or 3 steps below. This is called the Tribonacci variant. See how easy it is to extend DP once you understand the pattern? Just add more terms to the recurrence!"
      },
      {
        t: "The Coin Change Problem — Minimum Coins",
        d: "You have coins of certain values (like 1, 5, and 10 cents) and you need to make exactly N cents using the fewest coins possible. For example, to make 13 cents with coins {1, 5, 10}, the answer is 4 coins (10+1+1+1). dp[i] represents the minimum coins needed to make amount i. For each coin value c, dp[i] = min(dp[i], dp[i-c] + 1). Start with dp[0] = 0 (zero coins for zero amount)."
      },
      {
        t: "The Coin Change Problem — Count Ways",
        d: "A different coin problem: how many WAYS can you make N cents? For example, making 5 cents with {1, 2, 5} has 4 ways: 5, 2+2+1, 2+1+1+1, and 1+1+1+1+1. This time dp[i] counts the number of ways. We loop through coins and for each coin c, add dp[i-c] to dp[i]. This is a classic interview and contest problem!"
      },
      {
        t: "How to Identify DP Problems",
        d: "Here are the biggest hints: the problem asks for minimum, maximum, or count. You can make choices that affect future options. The problem has optimal substructure — the best solution to the big problem uses the best solutions to smaller problems. Greedy does not work (like always taking the biggest coin does not always give minimum coins). If you see these signs, try DP!"
      },
      {
        t: "Setting Up the DP Table",
        d: "Always start by asking: what does dp[i] represent? For stairs, dp[i] = number of ways to reach step i. For coin change, dp[i] = minimum coins to make amount i. Then ask: what are the base cases? dp[0] is usually 0 or 1. Finally ask: how does dp[i] depend on smaller values? Write that relationship and you have your solution!"
      },
      {
        t: "Handling Impossible Cases",
        d: "Sometimes there is no solution — like making 3 cents with only {2, 4} coins. You need to handle this! A common trick is to initialize dp[] with a very large number (like 1e9 or INT_MAX) meaning 'impossible.' Only dp[0] starts at 0. If dp[N] is still huge at the end, then there is no valid solution. Always remember to check for impossible cases in your output!"
      },
      {
        t: "Practice Tips for DP",
        d: "Start with these classic problems in order: Fibonacci, Climbing Stairs, Coin Change (min coins), Coin Change (count ways), and House Robber. These five problems teach you the core DP patterns. After you understand them, move to 2D DP problems like grid paths and knapsack. Practice 2-3 DP problems per week and you will become comfortable within a month!"
      }
    ],
    whatIs: "This lesson covers classic DP problems that appear frequently in programming contests and interviews. The climbing stairs problem and coin change problem are the perfect next step after Fibonacci — they use the same DP thinking but in more practical scenarios. Mastering these patterns gives you the foundation to solve hundreds of DP variations.",
    realWorld: "The coin change algorithm is used by vending machines to figure out the best way to give you change with the fewest coins. The stairs problem is similar to path planning — like figuring out how many different routes a robot can take on a grid. Delivery companies use DP to find the cheapest shipping routes, and game designers use DP to calculate all possible move combinations.",
    code: `#include <bits/stdc++.h>
using namespace std;

// ===== Problem 1: Climbing Stairs =====
// How many ways to climb N stairs (1 or 2 steps at a time)?
long long climbStairs(int n) {
    if (n <= 2) return n;
    
    vector<long long> dp(n + 1);
    dp[1] = 1;  // 1 way to climb 1 stair
    dp[2] = 2;  // 2 ways to climb 2 stairs (1+1 or 2)
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];  // Come from 1 or 2 steps below
    }
    return dp[n];
}

// ===== Problem 2: Minimum Coins =====
// Find the fewest coins needed to make amount N
int minCoins(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, 1e9);  // Initialize with "impossible"
    dp[0] = 0;  // 0 coins needed for amount 0
    
    for (int i = 1; i <= amount; i++) {
        for (int c : coins) {
            if (c <= i && dp[i - c] != 1e9) {
                dp[i] = min(dp[i], dp[i - c] + 1);
            }
        }
    }
    return dp[amount] == 1e9 ? -1 : dp[amount];  // -1 if impossible
}

// ===== Problem 3: Count Ways to Make Change =====
// How many ways can you make amount N using given coins?
long long countWays(vector<int>& coins, int amount) {
    vector<long long> dp(amount + 1, 0);
    dp[0] = 1;  // 1 way to make amount 0: use no coins
    
    for (int c : coins) {             // Loop coins in outer loop!
        for (int i = c; i <= amount; i++) {
            dp[i] += dp[i - c];       // Add ways using this coin
        }
    }
    return dp[amount];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    // Climbing Stairs
    int n = 10;
    cout << "Ways to climb " << n << " stairs: " << climbStairs(n) << "\\n";
    
    // Minimum Coins
    vector<int> coins = {1, 5, 10, 25};
    int amount = 37;
    cout << "Min coins for " << amount << " cents: " << minCoins(coins, amount) << "\\n";
    
    // Count Ways
    cout << "Ways to make " << amount << " cents: " << countWays(coins, amount) << "\\n";
    
    return 0;
}`,
    funFact: "The coin change problem is so important that it appears in almost every programming interview at big tech companies. Google, Amazon, and Microsoft have all asked variations of it! The problem was first studied by mathematicians over 200 years ago, long before computers existed. Euler and other famous mathematicians worked on counting coin combinations. Now you are learning the same math that fascinated geniuses!",
    quiz: [
      { q: "How many ways can you climb 5 stairs taking 1 or 2 steps at a time?", opts: ["5", "8", "10", "13"], ans: 1 },
      { q: "In the coin change (minimum coins) problem, what should dp[0] be initialized to?", opts: ["1", "0", "Infinity", "-1"], ans: 1 },
      { q: "What does dp[i] represent in the minimum coins problem?", opts: ["The value of the i-th coin", "The minimum number of coins to make amount i", "The maximum amount you can make with i coins", "The number of different coins available"], ans: 1 },
      { q: "In count ways coin change, why do we loop coins in the outer loop?", opts: ["It runs faster that way", "To avoid counting the same combination multiple times in different orders", "Because C++ requires it", "It does not matter which loop is outer"], ans: 1 },
      { q: "If dp[amount] is still a huge number after computing minimum coins, what does it mean?", opts: ["We need more memory", "It is impossible to make that amount with the given coins", "The answer is that huge number", "We made a mistake in the code"], ans: 1 }
    ],
    challenge: "Solve these three problems step by step. First, modify the climbing stairs solution to allow 1, 2, or 3 steps — how many ways to climb 10 stairs now? Second, find the minimum coins to make 63 cents using coins {1, 5, 10, 25}. Third, count how many ways you can make 50 cents using {1, 5, 10, 25}. Bonus: solve the House Robber problem — given an array of house values, find the maximum you can rob without robbing two adjacent houses. Hint: dp[i] = max(dp[i-1], dp[i-2] + arr[i]).",
    resources: [
      { type: "video", title: "Climbing Stairs — NeetCode", url: "https://www.youtube.com/watch?v=Y0lT9Fck7qI", source: "YouTube — NeetCode" },
      { type: "practice", title: "Coin Change — LeetCode 322", url: "https://leetcode.com/problems/coin-change/", source: "LeetCode" },
      { type: "article", title: "Introduction to DP — Codeforces Blog", url: "https://codeforces.com/blog/entry/43256", source: "Codeforces" }
    ],
    eli5: "Imagine you want to get to the top of a playground slide that has 5 steps. You can go up 1 step or jump up 2 steps at a time. How many different ways can you get to the top? You could go 1-1-1-1-1, or 2-1-1-1, or 1-2-2... there are lots of ways! Instead of listing them all (which is hard), we use a trick: the number of ways to reach step 5 is just the ways to reach step 4 plus the ways to reach step 3. Because from step 4 you take 1 step, and from step 3 you jump 2 steps. Easy peasy!",
    codeWalkthrough: [
      "climbStairs(n) uses a DP array where dp[i] = number of ways to reach step i. We know dp[1] = 1 (just take one step) and dp[2] = 2 (take 1+1 or take 2). Everything else builds from these.",
      "The loop for (int i = 3; i <= n; i++) fills the table bottom-up. dp[i] = dp[i-1] + dp[i-2] because you either took 1 step from stair i-1 or 2 steps from stair i-2. Same as Fibonacci!",
      "minCoins() initializes dp[] with 1e9 (a huge number representing 'impossible'). Only dp[0] = 0 because you need 0 coins to make 0 cents.",
      "For each amount i from 1 to N, we try every coin c. If coin c is not bigger than i and dp[i-c] is not impossible, then dp[i] = min(dp[i], dp[i-c] + 1). The +1 is for using one more coin of value c.",
      "If dp[amount] is still 1e9 at the end, it means no combination of coins can make that amount, so we return -1.",
      "countWays() is different — the outer loop goes over coins, not amounts! This is important. Looping coins outside prevents counting the same combination in different orders (like 1+5 and 5+1 as separate ways).",
      "For each coin c, we update dp[i] += dp[i-c] for all valid amounts. This means: the number of ways to make amount i increases by the number of ways to make (i minus this coin).",
      "dp[0] = 1 in countWays because there is exactly 1 way to make amount 0: use no coins at all. This base case is crucial — without it, all values would stay 0.",
      "In main(), we test all three functions. Climbing 10 stairs gives 89 ways. Making 37 cents with {1,5,10,25} takes 4 coins (25+10+1+1). These are classic results you should memorize!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int minCoins(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, 1e9);
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int c : coins) {
            if (c <= i) {
                dp[i] = min(dp[i], dp[i - c] + 1);
            }
        }
    }
    return dp[amount];
}

int main() {
    vector<int> coins = {3, 7};
    cout << minCoins(coins, 5) << "\\n";  // Should say impossible!
    return 0;
}`,
      hint: "What happens when it is impossible to make the amount? What value does the function return? Is there a missing check?",
      answer: "The bug is that the function does not check if dp[amount] is still 1e9 (impossible). When you try to make 5 cents with coins {3, 7}, it is impossible — but the function returns 1000000000 instead of -1. The fix is to add a check at the end: return dp[amount] >= 1e9 ? -1 : dp[amount]. Also, there is a subtle issue: dp[i-c] + 1 could overflow if dp[i-c] is 1e9. Add a check: if (c <= i && dp[i-c] != (int)1e9) before updating."
    },
    difficulty: "advanced",
    prereqs: [41]
  },
  // =============================================
  // LESSON 43: Graphs — Connecting the Dots
  // =============================================
  {
    id: 43,
    title: "Graphs — Connecting the Dots",
    subtitle: "Explore the data structure that models friendships, maps, networks, and so much more!",
    analogy: "Imagine a map of cities connected by roads. Each city is a dot (we call it a node or vertex), and each road is a line connecting two dots (we call it an edge). Some roads are one-way streets (directed edges) and some go both ways (undirected edges). A graph is just this: dots and lines! Your social media friends list is a graph — you are a dot, your friends are dots, and friendships are the lines connecting you. Once you see the world as a graph, you see graphs literally everywhere!",
    points: [
      {
        t: "What is a Graph?",
        d: "A graph is a collection of nodes (also called vertices) connected by edges. Think of nodes as cities and edges as roads between them. Graphs can represent anything with connections: friendships on social media, web pages linked together, cities connected by flights, or even moves in a chess game. They are one of the most important data structures in all of computer science!"
      },
      {
        t: "Directed vs Undirected Graphs",
        d: "In an undirected graph, edges go both ways — like a two-way road. If city A connects to city B, then B also connects to A. In a directed graph, edges have a direction — like a one-way street. A might connect to B, but B might not connect back to A. Twitter follows are directed (you can follow someone who does not follow you back). Facebook friendships are undirected (if you are friends, it goes both ways)."
      },
      {
        t: "How to Store a Graph — Adjacency List",
        d: "The most common way to store a graph in competitive programming is an adjacency list. For each node, you keep a list of its neighbors. In C++, we use vector<vector<int>> adj(n). If there is an edge from node 1 to node 3, we add 3 to adj[1]. For undirected graphs, we add both directions: adj[1].push_back(3) AND adj[3].push_back(1). This is memory-efficient and fast to traverse!"
      },
      {
        t: "BFS — Breadth-First Search",
        d: "BFS explores a graph level by level, like ripples spreading in a pond. Start at a node, visit all its direct neighbors first, then their neighbors, and so on. BFS uses a queue (FIFO) to keep track of which node to visit next. BFS is perfect for finding the shortest path in an unweighted graph because it always explores closer nodes before farther ones!"
      },
      {
        t: "DFS — Depth-First Search",
        d: "DFS explores a graph by going as deep as possible before backtracking, like exploring a maze by always turning left until you hit a dead end. DFS uses a stack (or recursion, which uses the call stack). DFS is great for detecting cycles, finding connected components, and topological sorting. It is the explorer who goes all the way to the end of one path before trying another."
      },
      {
        t: "BFS vs DFS — When to Use Each",
        d: "Use BFS when you need the shortest path in an unweighted graph, or when you need to explore nodes level by level. Use DFS when you need to explore all paths, detect cycles, or do topological sorting. In competitive programming, BFS is used for shortest paths and DFS is used for connectivity and cycle detection. Both visit every node and edge exactly once, running in O(V + E) time."
      },
      {
        t: "Connected Components",
        d: "A connected component is a group of nodes where you can reach any node from any other node in the group. Think of it as an island — everyone on the island can reach each other, but cannot reach people on other islands. To find all connected components, run BFS or DFS from each unvisited node. Each run finds one complete component. The number of runs equals the number of components!"
      },
      {
        t: "Graph Vocabulary You Need to Know",
        d: "Degree: the number of edges connected to a node. Path: a sequence of edges connecting two nodes. Cycle: a path that starts and ends at the same node. Tree: a connected graph with no cycles (N nodes, N-1 edges). Weighted graph: edges have numbers (distances or costs). These terms appear in almost every graph problem, so memorize them!"
      },
      {
        t: "Graphs in Competitive Programming",
        d: "Graphs are HUGE in CP — about 30% of contest problems involve graphs! Common graph problems include: shortest path (BFS, Dijkstra), cycle detection (DFS), minimum spanning tree (Kruskal, Prim), topological sorting (DFS on directed acyclic graphs), and flood fill (BFS/DFS on grids). Start with BFS and DFS — they are the foundation for everything else!"
      }
    ],
    whatIs: "A graph is a data structure consisting of nodes (vertices) connected by edges. It is used to model relationships and connections between objects. Graphs can be directed or undirected, weighted or unweighted. BFS and DFS are the two fundamental algorithms for traversing graphs, and they form the basis of almost all graph algorithms in competitive programming.",
    realWorld: "Graphs are everywhere in the real world! Google Maps uses graphs where cities are nodes and roads are edges to find the shortest route. Social networks like Facebook and Instagram are giant graphs where users are nodes and connections are edges. The internet itself is a graph of web pages connected by hyperlinks. Even your brain is a graph — neurons connected by synapses!",
    code: `#include <bits/stdc++.h>
using namespace std;

// ===== BFS — Breadth-First Search =====
void bfs(int start, vector<vector<int>>& adj, int n) {
    vector<bool> visited(n + 1, false);
    vector<int> dist(n + 1, -1);
    queue<int> q;
    
    visited[start] = true;
    dist[start] = 0;
    q.push(start);
    
    cout << "BFS order: ";
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";
        
        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                dist[neighbor] = dist[node] + 1;
                q.push(neighbor);
            }
        }
    }
    cout << "\\n";
    
    // Print shortest distances from start
    cout << "Distances from node " << start << ": ";
    for (int i = 1; i <= n; i++) {
        cout << i << "=" << dist[i] << " ";
    }
    cout << "\\n";
}

// ===== DFS — Depth-First Search (Recursive) =====
void dfs(int node, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[node] = true;
    cout << node << " ";
    
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, adj, visited);
        }
    }
}

// ===== Count Connected Components =====
int countComponents(vector<vector<int>>& adj, int n) {
    vector<bool> visited(n + 1, false);
    int components = 0;
    
    for (int i = 1; i <= n; i++) {
        if (!visited[i]) {
            components++;
            // Run DFS to mark all nodes in this component
            // Using iterative DFS with stack
            stack<int> st;
            st.push(i);
            visited[i] = true;
            while (!st.empty()) {
                int node = st.top();
                st.pop();
                for (int neighbor : adj[node]) {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        st.push(neighbor);
                    }
                }
            }
        }
    }
    return components;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    // Build a sample graph with 6 nodes
    int n = 6;
    vector<vector<int>> adj(n + 1);  // 1-indexed
    
    // Add undirected edges
    // Graph: 1-2, 1-3, 2-4, 3-4, 5-6 (two components!)
    vector<pair<int,int>> edges = {{1,2}, {1,3}, {2,4}, {3,4}, {5,6}};
    for (auto [u, v] : edges) {
        adj[u].push_back(v);
        adj[v].push_back(u);  // Undirected: add both ways!
    }
    
    // Run BFS from node 1
    bfs(1, adj, n);
    
    // Run DFS from node 1
    vector<bool> visited(n + 1, false);
    cout << "DFS order: ";
    dfs(1, adj, visited);
    cout << "\\n";
    
    // Count connected components
    cout << "Connected components: " << countComponents(adj, n) << "\\n";
    
    return 0;
}`,
    funFact: "The famous 'Six Degrees of Separation' theory says that any two people on Earth are connected by at most 6 friendships. Facebook actually tested this on their entire network of over 2 billion users and found the average is just 3.57! This is a graph theory result — social networks form a 'small world' graph where even though there are billions of nodes, the shortest path between any two is surprisingly short. Graph theory literally explains how we are all connected!",
    quiz: [
      { q: "What are the two main parts of a graph?", opts: ["Arrays and loops", "Nodes (vertices) and edges", "Keys and values", "Stacks and queues"], ans: 1 },
      { q: "Which data structure does BFS use to keep track of nodes to visit?", opts: ["Stack", "Queue", "Array", "Map"], ans: 1 },
      { q: "What is BFS best used for in an unweighted graph?", opts: ["Sorting nodes alphabetically", "Finding the shortest path between two nodes", "Finding the maximum value node", "Counting the total number of edges"], ans: 1 },
      { q: "What is a connected component?", opts: ["A node with the most edges", "A group of nodes where every pair can reach each other through some path", "The first node in the graph", "An edge that connects to itself"], ans: 1 },
      { q: "What is the time complexity of BFS and DFS on a graph with V vertices and E edges?", opts: ["O(V * E)", "O(V^2)", "O(V + E)", "O(E^2)"], ans: 2 }
    ],
    challenge: "Build the sample graph from the code and trace through BFS and DFS by hand on paper first. Then implement it in C++. Next, solve this: given a grid of '.' (empty) and '#' (wall), count the number of connected empty regions using BFS or DFS. This is called 'flood fill' and it is one of the most common graph problems in contests! Test with a 5x5 grid of your own design. Finally, modify BFS to print the actual shortest path (not just the distance) from node 1 to every other node. Hint: keep a parent[] array!",
    resources: [
      { type: "video", title: "Graph Algorithms for Beginners — William Fiset", url: "https://www.youtube.com/watch?v=DgXR2OWQnLc", source: "YouTube — William Fiset" },
      { type: "article", title: "Graph Traversal — USACO Guide", url: "https://usaco.guide/silver/graph-traversal", source: "USACO Guide" },
      { type: "practice", title: "BFS/DFS Practice Problems — CSES", url: "https://cses.fi/problemset/list/", source: "CSES" }
    ],
    eli5: "Imagine you have a bunch of toy houses on the floor, and you connect some of them with strings. That is a graph! The houses are nodes and the strings are edges. Now imagine you are an ant starting at one house. BFS is like the ant visiting ALL houses one step away first, then ALL houses two steps away, like circles getting bigger and bigger. DFS is like the ant going as far as it can along one string, then coming back and trying another string. Both ants eventually visit every house, just in a different order!",
    codeWalkthrough: [
      "We use vector<vector<int>> adj(n + 1) to store the graph as an adjacency list. Index 0 is unused because our nodes are numbered 1 to n. Each adj[i] is a list of neighbors of node i.",
      "To add an undirected edge between u and v, we push v into adj[u] AND u into adj[v]. Both directions! For directed graphs, you would only add one direction.",
      "In BFS, we start by marking the start node as visited, setting its distance to 0, and pushing it into the queue. The queue ensures we process nodes in order of their distance from the start.",
      "The BFS while loop pops the front node from the queue, then loops through all its neighbors. If a neighbor has not been visited, we mark it, set its distance to (current distance + 1), and push it into the queue.",
      "BFS naturally computes shortest distances! dist[neighbor] = dist[node] + 1 because BFS explores level by level. Every node is discovered at the earliest possible time.",
      "In DFS, we use recursion. Visit a node, mark it, then for each unvisited neighbor, recursively DFS into it. This goes deep before going wide — like exploring one branch of a tree all the way to the leaf.",
      "countComponents() loops through all nodes 1 to n. Each time it finds an unvisited node, it starts a new component and runs iterative DFS (using a stack) to mark all reachable nodes. The count of DFS runs equals the number of components.",
      "The iterative DFS in countComponents uses a stack instead of recursion. Push the start node, then repeatedly pop a node, and push its unvisited neighbors. This avoids stack overflow for very large graphs.",
      "In main(), we build a graph with 6 nodes and 5 edges forming two components: {1,2,3,4} and {5,6}. BFS from node 1 finds distances to nodes in the first component, and reports -1 for unreachable nodes 5 and 6.",
      "The output shows BFS visiting nodes in order 1, 2, 3, 4 (level by level) and DFS visiting 1, 2, 4, 3 (going deep first). Both visit the same nodes, just in different orders!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

void bfs(int start, vector<vector<int>>& adj, int n) {
    vector<int> dist(n + 1, -1);
    queue<int> q;
    
    dist[start] = 0;
    q.push(start);
    
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        
        for (int neighbor : adj[node]) {
            dist[neighbor] = dist[node] + 1;
            q.push(neighbor);
        }
    }
    
    for (int i = 1; i <= n; i++) {
        cout << "Distance to " << i << ": " << dist[i] << "\\n";
    }
}

int main() {
    int n = 4;
    vector<vector<int>> adj(n + 1);
    adj[1].push_back(2); adj[2].push_back(1);
    adj[2].push_back(3); adj[3].push_back(2);
    adj[3].push_back(1); adj[1].push_back(3);
    
    bfs(1, adj, n);
    return 0;
}`,
      hint: "Look at the BFS loop carefully. What happens when a neighbor has already been visited? Does the code check for that? What would happen in a graph with cycles?",
      answer: "The bug is that BFS never checks if a neighbor was already visited! Without checking if dist[neighbor] == -1 (unvisited), the algorithm will visit the same node multiple times and run forever in a graph with cycles. The fix is to add 'if (dist[neighbor] == -1)' before updating the distance and pushing to the queue. This ensures each node is processed exactly once. Without this check, BFS becomes an infinite loop on any graph that has a cycle!"
    },
    difficulty: "advanced",
    prereqs: [14, 34, 35]
  },

  // =============================================
  // LESSON 44: BFS and DFS — Exploring Graphs Step by Step
  // =============================================
  {
    id: 44,
    title: "BFS and DFS — Exploring Graphs Step by Step",
    subtitle: "Master the two most important ways to explore a graph — level by level or deep into the unknown!",
    analogy: "Imagine you drop a pebble into a calm pond. The ripples spread outward in perfect circles — first the water right around the pebble moves, then the next ring, then the next. That is BFS! It explores everything nearby before going further away. Now imagine you are in a giant maze. You pick one path and walk as far as you can until you hit a dead end. Then you backtrack to the last fork and try a different path. That is DFS! Both methods explore every reachable room in the maze, but in completely different orders. BFS is calm and organized like ripples, DFS is adventurous and bold like a maze explorer!",
    points: [
      {
        t: "BFS — Breadth-First Search",
        d: "BFS explores a graph level by level, like ripples in water. Start at a node, visit all its direct neighbors first, then visit all THEIR neighbors, and so on. It uses a queue (FIFO) to remember which nodes to visit next. BFS always visits closer nodes before farther ones, which makes it perfect for finding shortest paths!"
      },
      {
        t: "How BFS Works Step by Step",
        d: "Step 1: Put the starting node in a queue and mark it visited. Step 2: Take the front node from the queue. Step 3: Look at all its unvisited neighbors, mark them visited, and add them to the queue. Step 4: Repeat until the queue is empty. Because the queue is first-in-first-out, nodes discovered first are processed first — guaranteeing level-order exploration!"
      },
      {
        t: "BFS Finds Shortest Paths",
        d: "In an unweighted graph (where every edge has the same cost), BFS guarantees the shortest path from the start to every other node. Why? Because it visits all nodes at distance 1 before distance 2, all at distance 2 before distance 3, and so on. The first time BFS reaches a node, that is the shortest way to get there. This is super useful in contests!"
      },
      {
        t: "DFS — Depth-First Search",
        d: "DFS explores a graph by going as deep as possible before backtracking. Start at a node, pick one neighbor, go to it, pick one of ITS neighbors, keep going deeper until you hit a dead end (no unvisited neighbors). Then backtrack and try another path. It uses either recursion or a stack (LIFO). DFS is like an adventurer who always picks the deepest unexplored tunnel!"
      },
      {
        t: "How DFS Works Step by Step",
        d: "Step 1: Start at a node and mark it visited. Step 2: Pick any unvisited neighbor and recursively DFS into it. Step 3: When you reach a node with no unvisited neighbors, backtrack to the previous node. Step 4: Try other unvisited neighbors from there. Step 5: Keep going until all reachable nodes are visited. The recursion naturally handles the backtracking for you!"
      },
      {
        t: "Connected Components with DFS",
        d: "A connected component is a group of nodes where you can travel between any two using some path. To count components, loop through all nodes. When you find an unvisited node, start a DFS from it — this marks all nodes in that component. Each time you need to start a new DFS, that means you found a new component. If the whole graph has one component, it is called connected!"
      },
      {
        t: "When to Use BFS vs DFS",
        d: "Use BFS when you need the shortest path in an unweighted graph, or when you need to explore level by level. Use DFS when you need to explore all paths, find connected components, detect cycles, or check if a graph is bipartite. Both have the same time complexity O(V + E), but they solve different types of problems. A good competitive programmer knows when to pick each one!"
      },
      {
        t: "BFS on a Grid — Flood Fill",
        d: "Many contest problems give you a 2D grid instead of a graph. You can still use BFS and DFS! Each cell is a node, and neighboring cells (up, down, left, right) are edges. BFS on a grid finds the shortest path from one cell to another. This technique is called flood fill and it appears in tons of contest problems — like counting islands or finding the nearest exit in a maze!"
      },
      {
        t: "Common Mistakes to Avoid",
        d: "The biggest mistake is forgetting to mark nodes as visited! Without this, BFS or DFS will loop forever on graphs with cycles. Another mistake is using BFS for weighted graphs — BFS only finds shortest paths when all edges have equal weight. For weighted graphs, you need Dijkstra's algorithm. Always double-check your visited array and make sure you mark nodes BEFORE or WHEN you push them, not after!"
      }
    ],
    whatIs: "BFS (Breadth-First Search) and DFS (Depth-First Search) are the two fundamental ways to explore every node in a graph. BFS uses a queue and explores level by level, making it ideal for shortest paths in unweighted graphs. DFS uses recursion or a stack and explores as deep as possible, making it great for finding connected components and exploring all paths.",
    realWorld: "GPS navigation apps use BFS to find the shortest route between two locations on a road map. Social media platforms use BFS to suggest 'People You May Know' by exploring friends-of-friends. DFS is used in puzzle solvers (like solving a Sudoku by trying each possibility deeply), in web crawlers that follow links as deep as they go, and in detecting cycles in dependency graphs (like making sure software packages do not depend on each other in a loop).",
    code: `#include <bits/stdc++.h>
using namespace std;

// BFS — find shortest distances from start node
void bfs(int start, vector<vector<int>>& adj, int n) {
    vector<int> dist(n + 1, -1);  // -1 means unvisited
    queue<int> q;

    dist[start] = 0;
    q.push(start);

    while (!q.empty()) {
        int node = q.front();
        q.pop();

        for (int neighbor : adj[node]) {
            if (dist[neighbor] == -1) {  // Not visited yet!
                dist[neighbor] = dist[node] + 1;
                q.push(neighbor);
            }
        }
    }

    // Print shortest distances
    for (int i = 1; i <= n; i++) {
        cout << "Shortest distance to " << i << ": " << dist[i] << "\\n";
    }
}

// DFS — count connected components
int countComponents(vector<vector<int>>& adj, int n) {
    vector<bool> visited(n + 1, false);
    int components = 0;

    for (int i = 1; i <= n; i++) {
        if (!visited[i]) {
            components++;
            // DFS using a stack
            stack<int> st;
            st.push(i);
            visited[i] = true;
            while (!st.empty()) {
                int node = st.top();
                st.pop();
                for (int nb : adj[node]) {
                    if (!visited[nb]) {
                        visited[nb] = true;
                        st.push(nb);
                    }
                }
            }
        }
    }
    return components;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // Graph with 7 nodes, two components: {1,2,3,4} and {5,6,7}
    int n = 7;
    vector<vector<int>> adj(n + 1);

    // Component 1: 1-2, 2-3, 3-4, 1-4
    adj[1].push_back(2); adj[2].push_back(1);
    adj[2].push_back(3); adj[3].push_back(2);
    adj[3].push_back(4); adj[4].push_back(3);
    adj[1].push_back(4); adj[4].push_back(1);

    // Component 2: 5-6, 6-7
    adj[5].push_back(6); adj[6].push_back(5);
    adj[6].push_back(7); adj[7].push_back(6);

    cout << "=== BFS Shortest Paths from Node 1 ===\\n";
    bfs(1, adj, n);

    cout << "\\n=== Connected Components ===\\n";
    cout << "Number of components: " << countComponents(adj, n) << "\\n";

    return 0;
}`,
    funFact: "The BFS algorithm was first invented by Konrad Zuse in 1945 — before most computers even existed! He described it in his PhD thesis but it was not published until 1972. Meanwhile, DFS was formally studied by French mathematician Charles Pierre Tremaux in the 1800s as a strategy for solving mazes. These algorithms are over 100 years old and we still use them every single day in modern technology!",
    quiz: [
      { q: "What data structure does BFS use to track which nodes to visit next?", opts: ["Stack", "Queue", "Array", "Map"], ans: 1 },
      { q: "Why does BFS find the shortest path in an unweighted graph?", opts: ["Because it uses less memory", "Because it visits nodes level by level, reaching closer nodes first", "Because it sorts the nodes by value", "Because it uses recursion"], ans: 1 },
      { q: "What does DFS do when it reaches a dead end (no unvisited neighbors)?", opts: ["It stops the entire search", "It restarts from the beginning", "It backtracks to the previous node and tries another path", "It jumps to a random node"], ans: 2 },
      { q: "How do you count connected components in a graph?", opts: ["Count the number of edges", "Count the number of nodes with no neighbors", "Count how many times you start a new DFS/BFS on an unvisited node", "Divide the number of nodes by 2"], ans: 2 },
      { q: "What is the time complexity of both BFS and DFS on a graph with V vertices and E edges?", opts: ["O(V * E)", "O(V^2)", "O(V + E)", "O(V log V)"], ans: 2 }
    ],
    challenge: "Build a graph with 8 nodes and create two separate connected components. Run BFS from node 1 and verify that unreachable nodes show distance -1. Then modify BFS to also track the actual path (not just distance) using a parent array — when BFS discovers a neighbor, store parent[neighbor] = current_node. Then trace back from any target to the start using the parent array to print the full shortest path. Finally, try solving this: given a grid where '.' is open and '#' is a wall, use BFS to find the shortest path from the top-left corner to the bottom-right corner!",
    resources: [
      { type: "video", title: "BFS and DFS Explained Visually", url: "https://www.youtube.com/watch?v=pcKY4hjDrxk", source: "YouTube — Reducible" },
      { type: "article", title: "Graph Traversal — BFS and DFS", url: "https://usaco.guide/silver/graph-traversal", source: "USACO Guide" },
      { type: "practice", title: "BFS and DFS Practice Problems", url: "https://cses.fi/problemset/list/", source: "CSES" }
    ],
    eli5: "Imagine your school has lots of classrooms connected by hallways. BFS is like a fire alarm — the sound spreads to nearby rooms first, then to rooms farther away, like circles getting bigger and bigger. Every room hears the alarm, and nearby rooms hear it first. DFS is like you exploring the school by always opening the next door you see and going through it, going deeper and deeper until you reach a dead end. Then you come back and try a different door. Both ways let you visit every single room — BFS goes wide first, DFS goes deep first!",
    codeWalkthrough: [
      "We include bits/stdc++.h for all standard library features. Our graph is stored as vector<vector<int>> adj — an adjacency list where adj[i] contains all neighbors of node i.",
      "In bfs(), we create a dist[] array initialized to -1 (meaning unvisited). We set dist[start] = 0 and push the start node into a queue. The queue ensures we process nodes in the order they were discovered.",
      "The BFS while loop takes the front node from the queue, then checks each neighbor. The critical check 'if (dist[neighbor] == -1)' ensures we only visit each node once. Without this, cycles would cause infinite loops!",
      "When we find an unvisited neighbor, we set dist[neighbor] = dist[node] + 1. This works because BFS explores level by level — every neighbor is exactly one step farther than the current node.",
      "In countComponents(), we loop through all nodes 1 to n. Each time we find an unvisited node, we increment the component counter and run DFS from that node to mark all reachable nodes as visited.",
      "The DFS uses a stack instead of recursion to avoid stack overflow on large graphs. We push the start, then repeatedly pop a node, check its neighbors, and push any unvisited ones onto the stack.",
      "In main(), we build a graph with 7 nodes forming two components: {1,2,3,4} connected in a square, and {5,6,7} connected in a line. This lets us test both BFS distances and component counting.",
      "BFS from node 1 will find distances 0, 1, 2, 1, -1, -1, -1 for nodes 1 through 7. Nodes 5, 6, 7 are unreachable from node 1, so their distance stays -1.",
      "The component counter will find exactly 2 components. First DFS starts at node 1 and marks {1,2,3,4}. Then the loop reaches node 5 (unvisited), starts a second DFS marking {5,6,7}."
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

void bfs(int start, vector<vector<int>>& adj, int n) {
    vector<int> dist(n + 1, -1);
    queue<int> q;

    dist[start] = 0;
    q.push(start);

    while (!q.empty()) {
        int node = q.front();
        q.pop();

        for (int neighbor : adj[node]) {
            dist[neighbor] = dist[node] + 1;
            q.push(neighbor);
        }
    }

    for (int i = 1; i <= n; i++) {
        cout << "Distance to " << i << ": " << dist[i] << "\\n";
    }
}

int main() {
    int n = 3;
    vector<vector<int>> adj(n + 1);
    adj[1].push_back(2); adj[2].push_back(1);
    adj[2].push_back(3); adj[3].push_back(2);
    adj[1].push_back(3); adj[3].push_back(1);

    bfs(1, adj, n);
    return 0;
}`,
      hint: "Look at the BFS loop — when we visit a neighbor, do we check if it has already been visited? What happens with cycles in the graph?",
      answer: "The bug is that BFS does not check if a neighbor was already visited before processing it! Without the check 'if (dist[neighbor] == -1)', every neighbor gets pushed into the queue even if it was already visited. In a graph with cycles, this creates an infinite loop — nodes keep getting re-added to the queue forever. The fix is to wrap the two lines inside the for loop with 'if (dist[neighbor] == -1)'. This ensures each node is visited exactly once and BFS terminates correctly."
    },
    difficulty: "advanced",
    prereqs: [43]
  },

  // =============================================
  // LESSON 45: Bit Manipulation — The Secret Language of Computers
  // =============================================
  {
    id: 45,
    title: "Bit Manipulation — The Secret Language of Computers",
    subtitle: "Learn how computers really think — in ones and zeros — and use it to solve problems at lightning speed!",
    analogy: "Imagine you have a row of light switches on a wall. Each switch can only be ON (1) or OFF (0). That row of switches IS a binary number! If you have 8 switches, you can represent any number from 0 to 255. Flipping switches is like changing bits. Turning a switch ON is like setting a bit. Checking if a switch is ON is like reading a bit. And the cool part? Computers can flip millions of switches in a single operation! Bit manipulation is like learning the secret language that computers speak natively — and once you learn it, you can solve some problems in just one line of code!",
    points: [
      {
        t: "Binary Numbers — How Computers Count",
        d: "We humans count in base 10 (digits 0-9), but computers count in base 2 (digits 0 and 1). Each digit is called a bit. The number 5 in binary is 101, because 1*4 + 0*2 + 1*1 = 5. The number 13 is 1101, because 1*8 + 1*4 + 0*2 + 1*1 = 13. Each position represents a power of 2, starting from the right: 1, 2, 4, 8, 16, 32, and so on."
      },
      {
        t: "Bitwise AND (&) — Both Must Be ON",
        d: "The AND operator (&) compares each bit of two numbers. A bit in the result is 1 only if BOTH corresponding bits are 1. Think of it like two switches in series — the light turns on only if BOTH are ON. Example: 5 & 3 = 101 & 011 = 001 = 1. AND is super useful for checking if a specific bit is set, and for masking out bits you do not want."
      },
      {
        t: "Bitwise OR (|) — Either Can Be ON",
        d: "The OR operator (|) compares each bit of two numbers. A bit in the result is 1 if EITHER (or both) corresponding bits are 1. Think of it like two switches in parallel — the light turns on if ANY switch is ON. Example: 5 | 3 = 101 | 011 = 111 = 7. OR is great for setting bits — turning specific bits ON without affecting others."
      },
      {
        t: "Bitwise XOR (^) — Exactly One Must Be ON",
        d: "The XOR operator (^) compares each bit of two numbers. A bit in the result is 1 if the corresponding bits are DIFFERENT (one is 0 and one is 1). Same bits give 0. Example: 5 ^ 3 = 101 ^ 011 = 110 = 6. The magic of XOR: any number XOR itself equals 0, and any number XOR 0 equals itself. This leads to amazing tricks in competitive programming!"
      },
      {
        t: "Left Shift (<<) and Right Shift (>>)",
        d: "Left shift (<<) moves all bits to the left by a certain number of positions, filling with zeros on the right. This is the same as multiplying by powers of 2! For example, 3 << 2 means shift 011 left by 2, giving 1100 = 12 (which is 3 * 4). Right shift (>>) moves bits to the right, which is like dividing by powers of 2. Example: 12 >> 2 = 3. Shifting is much faster than multiplication!"
      },
      {
        t: "Check Odd or Even with & 1",
        d: "Here is a super fast trick: to check if a number is odd or even, just do n & 1. If the result is 1, the number is odd. If it is 0, the number is even. Why? Because the last bit in binary represents the 1s place. Odd numbers always have their last bit set to 1 (like 3 = 11, 5 = 101, 7 = 111). Even numbers always have their last bit as 0 (like 4 = 100, 6 = 110). This is faster than using n % 2!"
      },
      {
        t: "Check, Set, and Clear Specific Bits",
        d: "To check if bit k is set: use (n >> k) & 1. To set bit k (turn it ON): use n | (1 << k). To clear bit k (turn it OFF): use n & ~(1 << k). To toggle bit k (flip it): use n ^ (1 << k). These operations let you treat a number like an array of ON/OFF switches. This is the foundation of bitmask techniques used in advanced competitive programming!"
      },
      {
        t: "Power of 2 Check — One Line Magic",
        d: "To check if a number is a power of 2, use: n > 0 && (n & (n - 1)) == 0. Why does this work? A power of 2 in binary is always a single 1 followed by zeros (like 8 = 1000). When you subtract 1, all those zeros become ones (7 = 0111). ANDing them gives 0 because no bits match! Non-powers of 2 will always have at least one bit in common. This trick is used everywhere in contests!"
      },
      {
        t: "XOR Trick — Find the Unique Element",
        d: "Here is a classic contest problem: given an array where every number appears TWICE except one, find the unique number. Solution: XOR all elements together! Since a ^ a = 0 and a ^ 0 = a, all pairs cancel out and only the unique number remains. For example, XOR of [2, 3, 2] = 2^3^2 = (2^2)^3 = 0^3 = 3. This runs in O(n) time and O(1) space — you cannot beat that!"
      }
    ],
    whatIs: "Bit manipulation is the technique of working directly with the binary (base-2) representation of numbers using bitwise operators like AND, OR, XOR, and shifts. Since computers store everything in binary, these operations are incredibly fast — often solving in one step what would normally take loops or complex math. It is a secret weapon in competitive programming!",
    realWorld: "Bit manipulation is used everywhere in real computing. File permissions in Linux use bits (read=4, write=2, execute=1). Network IP addresses use bit masking to define subnets. Video game engines use bitflags to track which items a player has collected. Compression algorithms like ZIP use bit-level operations to shrink files. Even the RGB colors on your screen are stored as bits — 8 bits for red, 8 for green, 8 for blue!",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // === Binary Representation ===
    int a = 13;  // Binary: 1101
    int b = 10;  // Binary: 1010
    cout << "a = " << a << " (binary: 1101)\\n";
    cout << "b = " << b << " (binary: 1010)\\n\\n";

    // === Bitwise Operators ===
    cout << "a & b = " << (a & b) << " (AND: 1000 = 8)\\n";
    cout << "a | b = " << (a | b) << " (OR:  1111 = 15)\\n";
    cout << "a ^ b = " << (a ^ b) << " (XOR: 0111 = 7)\\n";
    cout << "~a    = " << (~a) << " (NOT: flips all bits)\\n\\n";

    // === Shift Operators ===
    cout << "3 << 2 = " << (3 << 2) << " (multiply by 4)\\n";
    cout << "20 >> 2 = " << (20 >> 2) << " (divide by 4)\\n\\n";

    // === Odd/Even Check ===
    for (int n = 1; n <= 6; n++) {
        cout << n << " is " << ((n & 1) ? "odd" : "even") << "\\n";
    }
    cout << "\\n";

    // === Check, Set, Clear, Toggle a bit ===
    int num = 10;  // Binary: 1010
    int k = 2;     // Check bit at position 2
    cout << "num = " << num << " (1010)\\n";
    cout << "Bit " << k << " is: " << ((num >> k) & 1) << "\\n";
    cout << "Set bit 0:    " << (num | (1 << 0)) << " (1011 = 11)\\n";
    cout << "Clear bit 3:  " << (num & ~(1 << 3)) << " (0010 = 2)\\n";
    cout << "Toggle bit 1: " << (num ^ (1 << 1)) << " (1000 = 8)\\n\\n";

    // === Power of 2 Check ===
    for (int n : {1, 2, 3, 4, 7, 8, 16, 15}) {
        bool isPow2 = (n > 0) && ((n & (n - 1)) == 0);
        cout << n << " is " << (isPow2 ? "" : "NOT ") << "a power of 2\\n";
    }
    cout << "\\n";

    // === XOR Trick: Find Unique Element ===
    vector<int> arr = {4, 1, 2, 1, 2};
    int unique_val = 0;
    for (int x : arr) unique_val ^= x;
    cout << "Array: 4 1 2 1 2\\n";
    cout << "Unique element: " << unique_val << "\\n";

    return 0;
}`,
    funFact: "The XOR swap trick lets you swap two variables WITHOUT using a temporary variable: a ^= b; b ^= a; a ^= b; This works because XOR is its own inverse. Old-school assembly programmers used this trick when memory was precious and every byte counted. Modern compilers are so smart that a regular swap is just as fast, but it is still a cool party trick to show your programmer friends!",
    quiz: [
      { q: "What is 5 in binary?", opts: ["110", "101", "100", "111"], ans: 1 },
      { q: "What does the expression (n & 1) tell you about n?", opts: ["Whether n is positive or negative", "Whether n is odd or even", "Whether n is a power of 2", "Whether n is prime"], ans: 1 },
      { q: "What is the result of 6 ^ 6?", opts: ["6", "12", "0", "36"], ans: 2 },
      { q: "What does 1 << 4 equal?", opts: ["4", "8", "16", "32"], ans: 2 },
      { q: "How do you check if a number n is a power of 2?", opts: ["n % 2 == 0", "n > 0 && (n & (n - 1)) == 0", "n & 1 == 0", "n >> 1 == n / 2"], ans: 1 }
    ],
    challenge: "Write a program that reads a number and prints its binary representation using a loop and right shifts (without using bitset). Then implement a function that counts the number of 1-bits in a number (this is called the popcount or Hamming weight). Next, solve this classic problem: given an array where every element appears exactly twice except one element that appears once, find the unique element using XOR. Test with arrays like [3, 5, 3, 7, 5] — the answer should be 7. Bonus: can you solve it when every element appears THREE times except one? (Hint: count bits at each position!)",
    resources: [
      { type: "article", title: "Bit Manipulation for Competitive Programming", url: "https://cp-algorithms.com/algebra/bit-manipulation.html", source: "CP-Algorithms" },
      { type: "video", title: "Bit Manipulation — All You Need to Know", url: "https://www.youtube.com/watch?v=xXKL9YBWgCY", source: "YouTube — Errichto" },
      { type: "practice", title: "Bit Manipulation Practice Problems", url: "https://leetcode.com/tag/bit-manipulation/", source: "LeetCode" }
    ],
    eli5: "Imagine you have a row of light switches on your bedroom wall. Each switch can be ON or OFF — that is a bit! A number is just a pattern of ON and OFF switches. The number 5 is like having switches OFF, ON, OFF, ON — that is 0101! Now, AND is like asking 'are BOTH switches on?' for each pair. OR is 'is at LEAST one switch on?' XOR is 'is EXACTLY one switch on?' Computers are super fast at flipping switches, so using these tricks makes your code zoom like a race car!",
    codeWalkthrough: [
      "We start by defining two numbers a = 13 (binary 1101) and b = 10 (binary 1010). We will use these to demonstrate all the bitwise operators.",
      "a & b gives 8 (binary 1000) because AND only keeps bits where BOTH numbers have a 1. Only the leftmost bit (the 8s place) is 1 in both numbers.",
      "a | b gives 15 (binary 1111) because OR turns on a bit if EITHER number has a 1 there. Since a and b together cover all 4 bit positions, the result is all 1s.",
      "a ^ b gives 7 (binary 0111) because XOR turns on a bit where the two numbers DIFFER. The leftmost bit is the same (both 1), so it becomes 0. The other three bits differ, so they become 1.",
      "3 << 2 shifts the bits of 3 (binary 11) left by 2 positions, giving 1100 = 12. Shifting left by k positions multiplies by 2^k, so 3 * 4 = 12.",
      "The odd/even check uses n & 1. This isolates the last bit. If it is 1, the number is odd. If it is 0, the number is even. This is faster than using the modulo operator!",
      "To check bit k, we shift right by k positions and AND with 1: (num >> k) & 1. This moves bit k to the last position and checks if it is 1 or 0.",
      "To set bit k, we OR with (1 << k). This creates a number with only bit k turned on, and ORing guarantees that bit becomes 1 without affecting other bits.",
      "The power-of-2 check n & (n-1) == 0 works because powers of 2 have exactly one 1-bit (like 1000), and subtracting 1 flips that bit and all below it (giving 0111). ANDing gives 0.",
      "The XOR trick for finding the unique element works because XOR is associative and a ^ a = 0. All paired elements cancel out, leaving only the element that appears once. Beautiful and efficient!"
    ],
    bugChallenge: {
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Check if numbers are powers of 2
    vector<int> nums = {0, 1, 2, 3, 4, 8, 16, 15};

    for (int n : nums) {
        if ((n & (n - 1)) == 0) {
            cout << n << " is a power of 2\\n";
        } else {
            cout << n << " is NOT a power of 2\\n";
        }
    }
    return 0;
}`,
      hint: "Look at what happens when n is 0. Is 0 a power of 2? What does 0 & (0-1) equal? Think about the edge case!",
      answer: "The bug is that the code reports 0 as a power of 2! When n = 0, the expression (0 & (0-1)) equals (0 & -1) which equals 0. So the condition (n & (n-1)) == 0 is true for n = 0, but 0 is NOT a power of 2. The fix is to add a check for n > 0: change the condition to 'n > 0 && (n & (n - 1)) == 0'. Always remember to handle edge cases like 0 and negative numbers when doing bit manipulation!"
    },
    difficulty: "advanced",
    prereqs: [6, 10]
  }
];