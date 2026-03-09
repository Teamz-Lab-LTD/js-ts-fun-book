const LESSONS_DATA = [
  {id:1,title:"What is Programming?",subtitle:"Teaching Computers to Think",analogy:"Programming is like writing a recipe for a robot chef. The robot can cook anything, but it needs EXACT step-by-step instructions. If you write 'add some salt,' it panics! You must say 'add 1 teaspoon of salt.' Code is just very precise instructions for a computer.",points:[{t:"Code is Instructions",d:"A program is a list of instructions that tells a computer exactly what to do, step by step. Computers are incredibly fast but incredibly dumb -- they can only follow instructions you give them. They cannot guess what you mean.",code:"// This is a simple instruction in Dart\nprint('Hello, World!');\n// The computer reads this and shows: Hello, World!"},{t:"Computers Think in Steps",d:"A computer reads your code from top to bottom, one line at a time, like reading a book. It does exactly what each line says, then moves to the next. If line 1 says 'add 2 + 3' and line 2 says 'show the result,' it does them in order.",code:"// Step 1: Calculate\nvar result = 2 + 3;\n// Step 2: Show the answer\nprint(result); // 5"},{t:"Programming Languages",d:"Humans speak English, Bengali, Spanish. Computers speak in binary (0s and 1s). Programming languages like Dart, Python, and JavaScript are the translator between human ideas and computer instructions. Each language has its own grammar (syntax).",code:"// Different languages, same idea:\n// Dart:\nprint('Hello!');\n// Python: print('Hello!')\n// JavaScript: console.log('Hello!')"},{t:"What is a Bug?",d:"A bug is a mistake in your code. Maybe you spelled something wrong, or put the steps in the wrong order. The word 'bug' came from 1947 when a real moth got stuck in a computer! Debugging means finding and fixing these mistakes.",code:"// This has a bug - can you spot it?\n// print('Hello World)  // Missing closing quote!\n\n// Fixed version:\nprint('Hello World');"},{t:"Input, Process, Output",d:"Every program follows the same pattern: take INPUT (data from user), PROCESS it (do something with it), and produce OUTPUT (show the result). A calculator takes numbers (input), adds them (process), and shows the answer (output).",code:"// Input: two numbers\nvar a = 10;\nvar b = 20;\n// Process: add them\nvar sum = a + b;\n// Output: show the result\nprint(sum); // 30"},{t:"Why Learn Programming?",d:"Programming lets you create apps, games, websites, and robots. It teaches you to think logically and solve problems. Every app on your phone -- Instagram, YouTube, games -- was built by programmers writing code just like you are about to learn!",code:"// You will be able to build:\n// - Mobile apps (Flutter!)\n// - Games\n// - Websites\n// - AI assistants\n// All by writing code like this!"},{t:"Algorithms - Step-by-Step Plans",d:"An algorithm is just a step-by-step plan to solve a problem. You use algorithms every day! Making a sandwich is an algorithm: get bread, add filling, close bread. In programming, we write algorithms as code so the computer can follow them.",code:"// Algorithm: Find the bigger number\nvar x = 15;\nvar y = 23;\nif (x > y) {\n  print('x is bigger');\n} else {\n  print('y is bigger');\n}\n// Output: y is bigger"},{t:"Syntax - The Grammar of Code",d:"Just like English has grammar rules (capital letters, periods), code has syntax rules. In Dart, every statement ends with a semicolon (;), strings go in quotes, and curly braces {} group code together. Break a syntax rule and the computer complains!",code:"// Good syntax:\nprint('Hello');\nvar name = 'Dart';\n\n// Bad syntax (errors!):\n// print('Hello')   // Missing semicolon\n// var = 'Dart';    // Missing variable name"},{t:"Comments - Notes for Humans",d:"Comments are notes you write for yourself and other programmers. The computer ignores them completely. In Dart, use // for a single line comment or /* */ for multiple lines. Good comments explain WHY you did something, not WHAT you did.",code:"// This is a single line comment\n\n/* This is a\n   multi-line comment\n   for longer explanations */\n\nprint('Hello'); // This prints a greeting"}],whatIs:"Programming is the art of writing instructions (code) that a computer can understand and execute. You write code in a programming language like Dart, and the computer follows your instructions exactly. Every app, game, and website you use was built by someone writing code.",realWorld:"Everything digital runs on code. When you open Instagram, play a mobile game, or ask Siri a question, code is running behind the scenes. Learning to program means you can CREATE these things, not just use them. It is one of the most valuable skills in the world.",code:`// Your very first Dart program!
// Every Dart app starts with a main() function

void main() {
  // Step 1: Store some data
  var myName = 'Flutter Learner';
  var myAge = 10;

  // Step 2: Process it
  var greeting = 'Hello, I am ' + myName;

  // Step 3: Output the result
  print(greeting);
  print('I am ' + myAge.toString() + ' years old');
  print('I am learning to code!');
}`,funFact:"The first computer programmer in history was Ada Lovelace, a woman who wrote programs in the 1840s -- almost 100 years before modern computers existed! The Dart language was created by Google in 2011.",quiz:[{q:"What is a program?",opts:["A TV show","A list of instructions for a computer to follow","A type of computer","A video game"],ans:1},{q:"What is a 'bug' in programming?",opts:["An insect in your computer","A feature of your app","A mistake or error in your code","A type of programming language"],ans:2},{q:"What does every program follow as a pattern?",opts:["Start, Middle, End","Input, Process, Output","Open, Close, Save","Read, Write, Delete"],ans:1},{q:"What are comments in code used for?",opts:["Making the program run faster","Writing notes that the computer ignores","Fixing bugs automatically","Sending messages to other computers"],ans:1},{q:"Why do programming languages exist?",opts:["To make computers more expensive","To translate human ideas into instructions computers understand","To replace human languages","To make programming harder"],ans:1}],challenge:"Open any text editor and type: print('Hello, my name is [YOUR NAME]!'); -- replace [YOUR NAME] with your actual name. Congratulations, you just wrote your first line of code!",resources:[{type:"docs",title:"Dart Language Tour",url:"https://dart.dev/language",source:"Dart Official"},{type:"video",title:"What is Programming?",url:"https://www.youtube.com/watch?v=zOjov-2OZ0E",source:"Codecademy"},{type:"docs",title:"DartPad - Try Dart Online",url:"https://dartpad.dev/",source:"Dart Official"}],eli5:"Imagine you have a super-fast robot friend who can do anything, but it only understands very specific instructions. If you say 'make me food,' it just stares at you. But if you say 'open the fridge, take out bread, put peanut butter on it, close the bread,' it makes you a perfect sandwich! Programming is writing those exact instructions for your computer robot friend.",codeWalkthrough:["A comment explaining this is your first Dart program","A comment explaining that every Dart app needs a main() function","","The main() function -- this is where your program starts running","Opening curly brace starts the function body","A comment for Step 1","Creating a variable called myName and storing the text 'Flutter Learner'","Creating a variable called myAge and storing the number 10","","A comment for Step 2","Creating a greeting by joining 'Hello, I am ' with the myName variable","","A comment for Step 3","Printing the greeting to the screen","Printing age -- we use .toString() to convert the number to text for joining","Printing an encouraging message","Closing curly brace ends the main function"],bugChallenge:{code:"void main() {\n  var name = 'Dart'\n  print('Hello, ' + name)\n}",hint:"Dart requires something at the end of every statement...",answer:"Missing semicolons! Every statement in Dart must end with a semicolon (;). Fix: var name = 'Dart'; and print('Hello, ' + name);"},difficulty:"beginner",prereqs:[]},

  {id:2,title:"Meet Flutter & Dart",subtitle:"One Code, Beautiful Apps Everywhere",analogy:"Dart is like learning to speak a language (say, English). Flutter is like having a magical art kit that lets you paint beautiful pictures using that language. You need the language (Dart) to give instructions, and the art kit (Flutter) to build gorgeous apps that work on phones, tablets, computers, and the web -- all from ONE painting!",points:[{t:"What is Dart?",d:"Dart is a programming language created by Google. It is modern, fast, and easy to learn. Dart is the language you write your code in -- it handles all the logic, data, and rules of your app. Think of Dart as the brain of your app.",code:"// Dart is the language\nvoid main() {\n  var message = 'Dart is awesome!';\n  print(message);\n}"},{t:"What is Flutter?",d:"Flutter is a toolkit (framework) created by Google for building beautiful apps. It gives you ready-made building blocks called 'widgets' -- buttons, text, images, layouts. You snap them together like LEGO blocks to build your app's user interface.",code:"// Flutter uses Dart to build UIs\nimport 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(\n    MaterialApp(\n      home: Text('Hello Flutter!'),\n    ),\n  );\n}"},{t:"Cross-Platform Magic",d:"Write your code ONCE in Flutter, and it runs on Android, iOS, Web, Windows, Mac, and Linux. Before Flutter, you had to write separate code for each platform. That is like writing the same book 6 times in 6 languages -- Flutter lets you write it once!",code:"// ONE codebase, SIX platforms:\n// - Android (Google phones)\n// - iOS (iPhones)\n// - Web (browsers)\n// - Windows\n// - macOS\n// - Linux\n// All from the same Dart code!"},{t:"Widgets - Everything is a Widget",d:"In Flutter, EVERYTHING you see on screen is a widget. A button is a widget. A text is a widget. A list is a widget. Even the whole app is a widget! Widgets are like LEGO blocks -- small pieces that snap together to build amazing things.",code:"// Widgets are building blocks\nText('Hello!')          // Text widget\nIcon(Icons.star)        // Icon widget\nElevatedButton(         // Button widget\n  onPressed: () {},\n  child: Text('Click Me'),\n)"},{t:"Hot Reload - Instant Changes",d:"Hot Reload is Flutter's superpower. When you change your code, you see the result on your phone or emulator INSTANTLY -- in less than a second! No waiting, no restarting. It is like magic. This makes building apps super fast and fun.",code:"// Change this text...\nText('Hello World')\n\n// ...to this:\nText('Hello Flutter!')\n\n// Press Ctrl+S and see the change\n// INSTANTLY on your phone! No restart needed."},{t:"Dart vs Other Languages",d:"Dart is similar to Java, JavaScript, and C#, so if you know any of those, Dart feels familiar. But Dart is simpler and more modern. It was designed specifically to build fast user interfaces, which is why Flutter chose it.",code:"// Dart is clean and modern\nvar name = 'Flutter';     // Type inferred\nString title = 'Hello';   // Explicit type\nfinal pi = 3.14;          // Cannot change\nconst gravity = 9.8;      // Compile-time constant"},{t:"The Flutter Community",d:"Flutter has millions of developers worldwide. There are thousands of free packages (pre-built code) you can use, a huge community on Discord, Reddit, and YouTube, and Google actively maintains it. You are never alone when learning Flutter!",code:"// packages from pub.dev -- thousands available!\n// dio: ^5.0.0          -- HTTP requests\n// hive: ^2.0.0         -- Local database\n// go_router: ^14.0.0   -- Navigation\n// flutter_bloc: ^8.0.0 -- State management\n// get_it: ^8.0.0       -- Dependency injection"},{t:"What You Will Build",d:"In this course, you will go from zero to building professional Flutter apps. You will learn Dart, widgets, navigation, state management with BLoC, clean architecture, API calls, local storage, Firebase, and more. By the end, you can build any app you imagine!",code:"// Your learning journey:\n// Lessons 1-10:  Dart fundamentals\n// Lessons 11-15: Dart intermediate\n// Lessons 16-28: Flutter UI\n// Lessons 29-31: Navigation\n// Lessons 32-35: State management (BLoC)\n// Lessons 36-51: Architecture & pro patterns"},{t:"DartPad - Try Without Installing",d:"DartPad is a free online editor where you can write and run Dart code right in your browser -- no installation needed! It is perfect for practicing while you learn. Just go to dartpad.dev and start coding.",code:"// Go to dartpad.dev and try this:\nvoid main() {\n  for (var i = 1; i <= 5; i++) {\n    print('Lesson $i completed!');\n  }\n  print('You are a Dart star!');\n}"}],whatIs:"Flutter is Google's free toolkit for building beautiful, fast apps for mobile, web, and desktop from a single codebase. Dart is the programming language Flutter uses. Together, they let you write code once and deploy it everywhere -- Android, iOS, web, Windows, Mac, and Linux.",realWorld:"Companies like Google, BMW, Alibaba, eBay, and Toyota use Flutter for their apps. Flutter developers are in high demand because companies love that one team can build for ALL platforms. Learning Flutter opens doors to mobile, web, and desktop development all at once.",code:`// Your first look at a Flutter app structure
import 'package:flutter/material.dart';

void main() {
  // runApp starts your Flutter application
  runApp(const MyApp());
}

// Every Flutter app is built from widgets
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My First App',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Hello Flutter!'),
        ),
        body: const Center(
          child: Text(
            'Welcome to Flutter!',
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}`,funFact:"Flutter was originally called 'Sky' and was first shown in 2015. It was renamed to Flutter and officially released in December 2018. The name 'Dart' was chosen because it is short, sharp, and hits the target -- just like the language itself!",quiz:[{q:"What is Flutter?",opts:["A programming language","A toolkit for building beautiful cross-platform apps","A type of phone","A database system"],ans:1},{q:"What programming language does Flutter use?",opts:["JavaScript","Python","Dart","Swift"],ans:2},{q:"What is 'Hot Reload' in Flutter?",opts:["A way to make your phone hotter","Seeing code changes instantly without restarting the app","A way to restart your computer","A special type of button"],ans:1},{q:"What are widgets in Flutter?",opts:["Tiny robots","Building blocks that make up everything you see on screen","A type of bug","Special files"],ans:1},{q:"How many platforms can Flutter build apps for from one codebase?",opts:["Only Android","Only Android and iOS","3 platforms","6 platforms: Android, iOS, Web, Windows, Mac, Linux"],ans:3}],challenge:"Go to dartpad.dev in your browser. Type: void main() { print('I am going to build amazing apps with Flutter!'); } and click Run. You just ran your first Dart code!",resources:[{type:"docs",title:"Flutter Official Website",url:"https://flutter.dev/",source:"Flutter Official"},{type:"docs",title:"Dart Language Overview",url:"https://dart.dev/overview",source:"Dart Official"},{type:"docs",title:"DartPad Online Editor",url:"https://dartpad.dev/",source:"Dart Official"}],eli5:"Imagine you want to draw the same picture on 6 different types of paper -- phone paper, tablet paper, computer paper, and more. Normally you would have to draw it 6 times! Flutter is like a magic photocopier: you draw your picture once (using Dart as your pencil), and Flutter automatically copies it perfectly onto all 6 types of paper. One drawing, everywhere!",codeWalkthrough:["We import Flutter's material design library -- this gives us all the widgets","","The main() function is where EVERY Dart and Flutter app starts","runApp() tells Flutter to start displaying our app on screen","","A comment explaining Flutter apps are made of widgets","MyApp is a widget class that extends StatelessWidget (does not change)","The constructor with super.key (required boilerplate)","","The @override annotation says we are providing our own version of build","The build method returns what this widget looks like on screen","Opening the return statement","MaterialApp is the root widget -- sets up Material Design styling","Setting the app title to 'My First App'","Scaffold provides the basic visual structure (app bar + body)","AppBar creates the top navigation bar","Setting the AppBar title to 'Hello Flutter!'","Closing the AppBar","The body is the main content area of the screen","Center widget places its child in the middle of the screen","Text widget displays 'Welcome to Flutter!'","TextStyle sets the font size to 24","Closing the Center, body, Scaffold, MaterialApp, and return"],bugChallenge:{code:"import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  Widget build(BuildContext context) {\n    return Text('Hello');\n  }\n}",hint:"When a class extends StatelessWidget and provides its own build method, what annotation is needed?",answer:"Missing the @override annotation before the build method, and missing the const constructor. Fix: add 'const MyApp({super.key});' and add '@override' before 'Widget build'."},difficulty:"beginner",prereqs:[1]},

  {id:3,title:"Setting Up Flutter",subtitle:"Preparing Your Developer Toolkit",analogy:"Before you can bake a cake, you need an oven, bowls, and ingredients. Before you can build Flutter apps, you need to install your tools: the Flutter SDK (your oven), VS Code (your kitchen counter), and extensions (your special utensils). Setting up takes a little time, but you only do it once!",points:[{t:"Install Flutter SDK",d:"The Flutter SDK is the core toolkit. It includes the Dart language, Flutter framework, and command-line tools. Download it from flutter.dev and add it to your system PATH so you can use the 'flutter' command from anywhere in your terminal.",code:"# Download Flutter SDK from flutter.dev\n# Then add to your PATH:\n\n# macOS/Linux:\nexport PATH=\"$HOME/flutter/bin:$PATH\"\n\n# Verify installation:\nflutter --version\n# Flutter 3.x.x - Dart 3.x.x"},{t:"flutter doctor - Health Check",d:"Run 'flutter doctor' in your terminal to check if everything is set up correctly. It checks for Flutter SDK, Android Studio, Xcode (Mac), VS Code, and connected devices. Green checkmarks mean ready, red X means something needs fixing.",code:"# Run this command:\nflutter doctor\n\n# You will see:\n# [OK] Flutter (Channel stable, 3.x.x)\n# [OK] Android toolchain\n# [OK] Chrome - develop for the web\n# [OK] Android Studio\n# [OK] VS Code\n# [OK] Connected device"},{t:"Install VS Code",d:"Visual Studio Code is the recommended editor for Flutter development. It is free, lightweight, and has excellent Flutter support. Download it from code.visualstudio.com. It is where you will write all your code.",code:"// VS Code is your coding home\n// Download: code.visualstudio.com\n//\n// Why VS Code?\n// - Free and open source\n// - Fast and lightweight\n// - Huge extension marketplace\n// - Built-in terminal\n// - Git integration"},{t:"Essential VS Code Extensions",d:"Install the 'Flutter' extension (which includes Dart) from the VS Code marketplace. This gives you code completion, error highlighting, debugging, and Hot Reload support. Also install 'Flutter Widget Snippets' for faster coding.",code:"// VS Code Extensions to install:\n// 1. Flutter (by Dart Code) - REQUIRED\n//    - Includes Dart extension\n//    - Code completion\n//    - Debugging\n//    - Hot Reload button\n//\n// 2. Flutter Widget Snippets\n//    - Quick widget templates\n//\n// 3. Error Lens\n//    - Shows errors inline"},{t:"Android Studio & Emulator",d:"For Android development, install Android Studio to get the Android SDK and emulator. The emulator is a virtual phone on your computer so you can test your app without a real phone. You can also use a real device via USB.",code:"// Android Setup:\n// 1. Install Android Studio\n// 2. Open SDK Manager\n// 3. Install Android SDK\n// 4. Create a Virtual Device (emulator)\n//\n// Or use a real phone:\n// 1. Enable Developer Options\n// 2. Enable USB Debugging\n// 3. Connect via USB\n// 4. Run: flutter devices"},{t:"iOS Setup (Mac Only)",d:"If you have a Mac, install Xcode from the App Store for iOS development. Run 'sudo xcode-select --install' for command-line tools. You can test on the iOS Simulator without a real iPhone.",code:"# iOS Setup (Mac only):\n# 1. Install Xcode from App Store\n# 2. Install command-line tools:\nsudo xcode-select --install\n\n# 3. Accept Xcode license:\nsudo xcodebuild -license accept\n\n# 4. Open iOS Simulator:\nopen -a Simulator"},{t:"Web Development Setup",d:"Flutter can build web apps too! Chrome is the default browser for testing. Just run 'flutter run -d chrome' to launch your app in a browser. No extra setup needed -- Flutter's web support is built in.",code:"# Check web support:\nflutter devices\n# Shows: Chrome (web)\n\n# Run app in Chrome:\nflutter run -d chrome\n\n# Build for production:\nflutter build web\n# Output in build/web/ folder"},{t:"Your First Flutter Command",d:"Once everything is installed, open your terminal and run 'flutter create my_first_app'. This creates a complete Flutter project with all the files you need. Then 'cd my_first_app' and 'flutter run' to launch it!",code:"# Create your first project:\nflutter create my_first_app\n\n# Go into the project folder:\ncd my_first_app\n\n# Run the app:\nflutter run\n\n# Pick a device if multiple are available\n# Press 'r' for hot reload\n# Press 'R' for hot restart\n# Press 'q' to quit"},{t:"Project Structure Overview",d:"A Flutter project has a specific folder structure. The 'lib/' folder is where your Dart code lives. 'pubspec.yaml' lists your dependencies. 'android/' and 'ios/' contain platform-specific code that you rarely need to touch.",code:"// Flutter project structure:\n// my_first_app/\n//   lib/\n//     main.dart       <-- Your code goes here!\n//   pubspec.yaml      <-- Dependencies & config\n//   android/           <-- Android-specific files\n//   ios/               <-- iOS-specific files\n//   web/               <-- Web-specific files\n//   test/              <-- Test files"}],whatIs:"Setting up Flutter means installing the Flutter SDK, a code editor (VS Code), and platform tools (Android Studio for Android, Xcode for iOS). The 'flutter doctor' command checks that everything is ready. Once set up, you can create and run Flutter apps with simple terminal commands.",realWorld:"Professional Flutter developers work with VS Code or Android Studio daily. The setup process is a one-time investment that unlocks the ability to build apps for every platform. Companies prefer Flutter because developers only need ONE setup to target ALL platforms.",code:`# Complete Flutter Setup Guide

# Step 1: Install Flutter SDK
# Download from https://flutter.dev/docs/get-started/install

# Step 2: Add to PATH (macOS/Linux)
export PATH="\$HOME/flutter/bin:\$PATH"

# Step 3: Verify installation
flutter --version

# Step 4: Run the doctor
flutter doctor

# Step 5: Fix any issues the doctor finds
flutter doctor --android-licenses

# Step 6: Create your first app!
flutter create hello_flutter
cd hello_flutter

# Step 7: Run it!
flutter run

# Useful commands:
flutter devices          # List available devices
flutter run -d chrome    # Run on Chrome
flutter run -d emulator  # Run on emulator
flutter clean            # Clean build files
flutter pub get          # Install dependencies`,funFact:"The 'flutter doctor' command was inspired by Homebrew's 'brew doctor' on Mac. It checks over 20 different things on your system. Some developers run it as a morning ritual -- like a health checkup for their dev environment!",quiz:[{q:"What command checks if Flutter is set up correctly?",opts:["flutter check","flutter setup","flutter doctor","flutter verify"],ans:2},{q:"Where does your Dart code live in a Flutter project?",opts:["In the android/ folder","In the lib/ folder","In the test/ folder","In the pubspec.yaml file"],ans:1},{q:"What is the first command to create a new Flutter project?",opts:["flutter new myapp","flutter init myapp","flutter create myapp","flutter start myapp"],ans:2},{q:"What file lists your project's dependencies in Flutter?",opts:["package.json","requirements.txt","pubspec.yaml","dependencies.xml"],ans:2},{q:"What key do you press during 'flutter run' for hot reload?",opts:["h","r","f5","ctrl+r"],ans:1}],challenge:"Install Flutter on your computer following the steps above. Run 'flutter doctor' and try to get all green checkmarks. Then run 'flutter create my_first_app' and 'flutter run' to see the default Flutter app!",resources:[{type:"docs",title:"Flutter Installation Guide",url:"https://docs.flutter.dev/get-started/install",source:"Flutter Official"},{type:"docs",title:"Set Up an Editor",url:"https://docs.flutter.dev/get-started/editor",source:"Flutter Official"},{type:"docs",title:"Flutter CLI Reference",url:"https://docs.flutter.dev/reference/flutter-cli",source:"Flutter Official"}],eli5:"Before you can play a video game, you need to set up the game console, plug in the controller, and connect it to the TV. Setting up Flutter is the same idea! You download the Flutter toolkit (the console), install VS Code (the TV screen where you see your work), and add extensions (the controller). Once everything is plugged in, you are ready to play -- or in this case, build apps!",codeWalkthrough:["A comment heading for the setup guide","","Step 1 comment: installing the Flutter SDK","A comment with the download URL","","Step 2 comment: making flutter accessible from terminal","The export command adds Flutter to your system PATH","","Step 3 comment: checking the installed version","The flutter --version command shows what version you have","","Step 4 comment: running the health check","flutter doctor scans your system for issues","","Step 5 comment: fixing any problems found","This command accepts Android SDK licenses if needed","","Step 6 comment: creating your first project","flutter create generates a complete project from a template","cd changes into the new project directory","","Step 7 comment: running the app","flutter run compiles and launches your app on a connected device","","A comment labeling useful commands","flutter devices lists all connected phones, emulators, and browsers","flutter run -d chrome launches the app in Chrome browser","flutter run -d emulator launches on an Android emulator","flutter clean removes old build files to fix issues","flutter pub get downloads packages listed in pubspec.yaml"],bugChallenge:{code:"# Setting up a Flutter project\nflutter create My First App\ncd My First App\nflutter run",hint:"Look at the project name. Are spaces allowed in Dart/Flutter project names?",answer:"Flutter project names cannot contain spaces or capital letters. They must use lowercase with underscores. Fix: flutter create my_first_app, then cd my_first_app."},difficulty:"beginner",prereqs:[2]},

  {id:4,title:"Your First Flutter App",subtitle:"From Empty Screen to Running App",analogy:"Building your first Flutter app is like building your first LEGO house. You start with a base plate (MaterialApp), add walls (Scaffold), put a sign on top (AppBar), and fill the room with furniture (widgets in the body). Each piece snaps into place, and when you are done, you have a real house -- or in this case, a real app!",points:[{t:"main() - Where It All Begins",d:"Every Dart program starts at the main() function. It is the entry point -- the first thing that runs. In Flutter, main() calls runApp() to launch your app. Without main(), your app has no starting point and cannot run.",code:"void main() {\n  // This is the first thing that runs\n  print('App is starting...');\n  runApp(const MyApp());\n}"},{t:"runApp() - Launch the App",d:"runApp() takes a widget and makes it the root of your app. It fills the entire screen with that widget. You typically pass a MaterialApp widget to runApp(), which sets up Material Design styling for your whole app.",code:"import 'package:flutter/material.dart';\n\nvoid main() {\n  // runApp takes ONE widget and fills the screen\n  runApp(\n    const MaterialApp(\n      home: Text('Hello!'),\n    ),\n  );\n}"},{t:"MaterialApp - The App Shell",d:"MaterialApp is the outermost widget that wraps your entire app. It provides Material Design theming, navigation, and other app-wide settings. Think of it as the shell of your app -- everything else lives inside it.",code:"MaterialApp(\n  title: 'My App',           // App title\n  theme: ThemeData(           // App-wide theme\n    primarySwatch: Colors.blue,\n  ),\n  home: MyHomePage(),         // First screen\n  debugShowCheckedModeBanner: false, // Hide debug banner\n)"},{t:"Scaffold - Page Structure",d:"Scaffold provides the basic visual structure for a page: an AppBar at the top, a body in the middle, and optionally a floating action button, bottom navigation bar, and drawer. Most screens in your app will use a Scaffold.",code:"Scaffold(\n  appBar: AppBar(\n    title: const Text('My Page'),\n  ),\n  body: const Center(\n    child: Text('Hello World!'),\n  ),\n  floatingActionButton: FloatingActionButton(\n    onPressed: () {},\n    child: const Icon(Icons.add),\n  ),\n)"},{t:"StatelessWidget - Your First Widget",d:"A StatelessWidget is a widget that never changes. Once built, it stays the same. It is the simplest type of widget. You create one by extending StatelessWidget and overriding the build() method to return your UI.",code:"class MyHomePage extends StatelessWidget {\n  const MyHomePage({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Home')),\n      body: const Center(\n        child: Text('Welcome!'),\n      ),\n    );\n  }\n}"},{t:"Hot Reload in Action",d:"While your app is running, change any text or color in your code, then save the file (Ctrl+S). Flutter's Hot Reload updates the app in under a second without losing the current state. It is the fastest way to develop apps.",code:"// Step 1: Run your app\n// flutter run\n\n// Step 2: Change the text:\nText('Hello World!')  // before\nText('Hello Flutter!') // after\n\n// Step 3: Save (Ctrl+S)\n// Your app updates INSTANTLY!"},{t:"The Widget Tree",d:"Flutter apps are a tree of widgets. MaterialApp contains Scaffold, Scaffold contains AppBar and body, body contains Center, Center contains Text. Each widget is a node in the tree, and the tree describes your entire UI.",code:"// Widget Tree:\n// MaterialApp\n//   +-- Scaffold\n//       +-- AppBar\n//       |    +-- Text('My App')\n//       +-- body: Center\n//            +-- Text('Hello!')"},{t:"const Keyword for Widgets",d:"Adding 'const' before a widget tells Flutter it will never change. This helps Flutter skip unnecessary rebuilds, making your app faster. Use const whenever a widget has no dynamic data.",code:"// Without const - rebuilt every time\nText('Hello World')\n\n// With const - Flutter knows it never changes\nconst Text('Hello World')\n\n// const constructor\nconst MyApp({super.key});"},{t:"import Statement",d:"The import statement brings in code from other files or packages. 'import package:flutter/material.dart' gives you access to all Material Design widgets. Without this import, Flutter widgets are not available in your file.",code:"// Import Flutter's material library\nimport 'package:flutter/material.dart';\n\n// Import from another file in your project\nimport 'screens/home_screen.dart';\n\n// Import a package from pub.dev\nimport 'package:dio/dio.dart';"}],whatIs:"Your first Flutter app starts with main(), which calls runApp() to launch the widget tree. MaterialApp wraps the entire app with Material Design. Scaffold provides page structure (AppBar + body). StatelessWidget is the simplest widget type -- it builds UI that does not change.",realWorld:"Every Flutter app in the world, from small personal projects to apps used by millions, starts with this exact structure: main() -> runApp() -> MaterialApp -> Scaffold. Understanding this foundation is essential for everything that follows.",code:`import 'package:flutter/material.dart';

// Every Flutter app starts here
void main() {
  runApp(const MyApp());
}

// The root widget of our app
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My First App',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorSchemeSeed: Colors.blue,
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

// Our first screen
class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My First App'),
        backgroundColor: Theme.of(context).colorScheme.primaryContainer,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(Icons.flutter_dash, size: 80),
            SizedBox(height: 20),
            Text(
              'Hello, Flutter!',
              style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10),
            Text('Welcome to your first app!'),
          ],
        ),
      ),
    );
  }
}`,funFact:"The Flutter team at Google dogfoods their own framework -- the Google Ads app, used by millions of advertisers, is built entirely with Flutter! The default Flutter counter app you see when running 'flutter create' has been seen by over 10 million developers.",quiz:[{q:"What function is the entry point of every Dart/Flutter app?",opts:["start()","runApp()","main()","init()"],ans:2},{q:"What does runApp() do?",opts:["Runs a physical marathon","Takes a widget and makes it fill the entire screen","Creates a new project","Deletes old builds"],ans:1},{q:"What does Scaffold provide?",opts:["A construction safety net","Basic page structure with AppBar, body, and more","A testing framework","A build system"],ans:1},{q:"What does 'const' before a widget do?",opts:["Makes it colorful","Tells Flutter the widget never changes, improving performance","Makes it bigger","Removes it from the tree"],ans:1},{q:"What keyboard shortcut triggers Hot Reload while the app is running?",opts:["Ctrl+R","Ctrl+Z","Ctrl+S (save the file)","Ctrl+P"],ans:2}],challenge:"Run 'flutter create my_app' in your terminal. Open lib/main.dart in VS Code. Change the title text and the counter description, then save to see Hot Reload in action. Try changing colors too!",resources:[{type:"docs",title:"Write Your First Flutter App",url:"https://docs.flutter.dev/get-started/codelab",source:"Flutter Official"},{type:"docs",title:"Flutter Widget Catalog",url:"https://docs.flutter.dev/ui/widgets",source:"Flutter Official"},{type:"docs",title:"Introduction to Widgets",url:"https://docs.flutter.dev/development/ui/widgets-intro",source:"Flutter Official"}],eli5:"Building a Flutter app is like building a house with LEGO. The main() function is you deciding to start building. runApp() is placing the first block down. MaterialApp is the foundation plate. Scaffold is the walls and roof. And all the little widgets inside (text, buttons, images) are the furniture and decorations. Save your work and Flutter magically shows you the house instantly!",codeWalkthrough:["Importing Flutter's material design library so we can use its widgets","","A comment explaining this is the starting point","main() function -- Dart runs this first when the app launches","runApp() takes our MyApp widget and displays it on screen","","A comment explaining this is the root widget","MyApp class extends StatelessWidget because it does not change","The const constructor that every StatelessWidget needs","","The @override annotation -- we are providing our own build method","build() is called by Flutter to get the widget tree for this widget","Returning a MaterialApp as the root widget","Setting the app title that appears in the task switcher","Hiding the red 'DEBUG' banner in the top-right corner","Setting up the visual theme for the entire app","Using a blue color seed for Material 3 color scheme","Enabling Material Design 3 (latest design system)","Closing the ThemeData","Setting HomePage as the first screen to display","Closing MaterialApp and build method","","","A comment for our home screen widget","HomePage is also a StatelessWidget with no dynamic state","Const constructor","","Override annotation for the build method","build() returns what this screen looks like","Returning a Scaffold for standard page structure","Creating an AppBar at the top of the screen","Setting the title text to 'My First App'","Using the theme's primary container color for the AppBar background","Closing AppBar","The body is the main content area -- Center places content in the middle","Using a Column to stack widgets vertically","mainAxisAlignment centers the column content vertically","Opening the children list","An Icon widget showing the Flutter Dash mascot at size 80","SizedBox adds 20 pixels of vertical spacing","A large bold Text widget saying 'Hello, Flutter!'","TextStyle sets font size to 28 and bold weight","Closing the Text style","SizedBox adds 10 more pixels of spacing","A smaller Text widget with a welcome message","Closing children, Column, Center, body, Scaffold, and build"],bugChallenge:{code:"import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        body: Text('Hello')\n      )\n    )\n  }\n}",hint:"Look at the punctuation at the end of the return statement and check if the constructor is correct...",answer:"Two issues: (1) Missing const constructor -- add 'const MyApp({super.key});' before @override. (2) Missing semicolons after the closing parentheses -- the return statement needs a semicolon: return MaterialApp(...);"},difficulty:"beginner",prereqs:[2,3]},

  {id:5,title:"Variables & Data Types",subtitle:"Storing and Labeling Your Data",analogy:"Variables are like labeled jars in a kitchen. One jar says 'Sugar' and holds sugar. Another says 'Rice' and holds rice. You cannot put rice in the sugar jar! In Dart, each variable has a label (name) and a type (what kind of data it holds). 'var', 'final', and 'const' are different types of jars -- some let you swap the contents, others are sealed shut forever.",points:[{t:"var - Flexible Containers",d:"The 'var' keyword creates a variable whose value you can change later. Dart automatically figures out the type from the first value you assign. Once the type is set, you can only store that same type.",code:"var name = 'Alice';   // Dart infers type: String\nvar age = 10;         // Dart infers type: int\n\nname = 'Bob';         // OK - same type (String)\nage = 11;             // OK - same type (int)\n// name = 42;         // Error! Cannot change type"},{t:"final - Set Once, Done",d:"'final' creates a variable you can only set ONCE. After the first assignment, it is locked forever. Use final when you know a value will not change but it is calculated at runtime (like current time or user input).",code:"final birthday = DateTime.now();  // Set once at runtime\nfinal userName = 'Flutter Fan';\n\n// birthday = DateTime(2020); // Error! Already set!\n// userName = 'New Name';     // Error! Cannot reassign\n\n// final is like writing in permanent marker"},{t:"const - Compile-Time Constants",d:"'const' is even stricter than final. The value must be known at COMPILE TIME (before the app runs). Use const for values that never change and are always the same, like pi or gravity.",code:"const pi = 3.14159;         // Known before app runs\nconst maxRetries = 3;\nconst appName = 'MyApp';\n\n// const now = DateTime.now(); // Error! Not known at compile time\n// DateTime.now() is calculated at runtime\n\nfinal now = DateTime.now();   // OK with final!"},{t:"int - Whole Numbers",d:"'int' stores whole numbers without decimals: 1, 42, -7, 1000000. Use int for counts, ages, quantities, indices -- anything that is a complete number without a fractional part.",code:"int age = 25;\nint score = 100;\nint negative = -5;\nint big = 1000000;\n\n// int operations\nprint(age + 5);    // 30\nprint(score ~/ 3); // 33 (integer division)\nprint(score % 3);  // 1 (remainder)"},{t:"double - Decimal Numbers",d:"'double' stores numbers with decimal points: 3.14, 99.99, -0.5. Use double for prices, measurements, percentages -- anything that needs precision beyond whole numbers.",code:"double price = 9.99;\ndouble pi = 3.14159;\ndouble temperature = -2.5;\n\nprint(price * 2);        // 19.98\nprint(pi.toStringAsFixed(2)); // '3.14'\n\n// num is parent of both int and double\nnum anything = 42;       // can be int\nanything = 3.14;         // or double"},{t:"String - Text Data",d:"'String' holds text. Wrap text in single quotes ('hello') or double quotes (\"hello\"). Dart developers usually prefer single quotes. Strings can contain letters, numbers, symbols, spaces -- any text you want.",code:"String name = 'Flutter';\nString greeting = \"Hello World\";\n\n// String properties\nprint(name.length);        // 7\nprint(name.toUpperCase()); // 'FLUTTER'\nprint(name.toLowerCase()); // 'flutter'\nprint(name.contains('lu')); // true\nprint(name.isEmpty);       // false"},{t:"bool - True or False",d:"'bool' stores only two values: true or false. Booleans are used for decisions: Is the user logged in? Is dark mode on? Is the form valid? Every if/else statement uses a boolean to decide what to do.",code:"bool isLoggedIn = true;\nbool isDarkMode = false;\nbool isAdult = age >= 18;\n\nif (isLoggedIn) {\n  print('Welcome back!');\n} else {\n  print('Please log in.');\n}\n\n// Toggle a boolean\nisDarkMode = !isDarkMode; // flips true to false"},{t:"dynamic and Object",d:"'dynamic' turns off type checking -- the variable can hold ANY type and change types. Use it sparingly! 'Object' is the parent of all Dart types. Prefer specific types for safety; use dynamic only when truly needed.",code:"dynamic anything = 'Hello';\nanything = 42;       // OK! dynamic accepts any type\nanything = true;     // OK!\n\n// Object is safer - has limited methods\nObject obj = 'Hello';\n// obj.length; // Error! Object does not have .length\n\n// Prefer specific types:\nString name = 'Alice'; // Best! Type-safe"},{t:"Type Annotations vs Inference",d:"You can explicitly write the type (String name = 'Alice') or let Dart figure it out (var name = 'Alice'). Both work! Explicit types are clearer for complex code. Inference is great for simple, obvious cases.",code:"// Explicit type annotation\nString name = 'Alice';\nint count = 42;\nList<String> items = ['a', 'b'];\n\n// Type inference (Dart figures it out)\nvar name2 = 'Alice';     // String\nvar count2 = 42;         // int\nvar items2 = ['a', 'b']; // List<String>\n\n// Both are equally type-safe!"}],whatIs:"Variables are named containers that store data. Dart has three ways to declare them: 'var' (changeable), 'final' (set once at runtime), and 'const' (set at compile time). The main data types are int (whole numbers), double (decimals), String (text), bool (true/false), and dynamic (any type).",realWorld:"Every app uses variables constantly. A user's name is a String, their age is an int, their account balance is a double, and whether they are logged in is a bool. Choosing the right type prevents bugs and makes your code clearer.",code:`void main() {
  // var - can be reassigned
  var city = 'Dhaka';
  city = 'Tokyo';  // OK!

  // final - set once, cannot change
  final birthYear = 2015;
  // birthYear = 2016;  // Error!

  // const - compile-time constant
  const pi = 3.14159;
  const maxScore = 100;

  // Data types
  int age = 10;
  double height = 4.5;
  String name = 'Flutter Learner';
  bool isHappy = true;

  // Type inference - Dart figures it out
  var score = 95;         // int
  var price = 19.99;      // double
  var greeting = 'Hi!';   // String
  var active = true;      // bool

  // String interpolation (preview!)
  print('Name: \$name');
  print('Age: \$age, Height: \$height');
  print('Is happy? \$isHappy');
  print('Score: \$score / \$maxScore');
}`,funFact:"Dart has 'sound null safety' since Dart 2.12, meaning the compiler guarantees that non-nullable variables can NEVER be null at runtime. This eliminates an entire category of crashes that plague other languages. Tony Hoare, who invented null, called it his 'billion-dollar mistake'!",quiz:[{q:"What is the difference between 'final' and 'const'?",opts:["There is no difference","final is set at runtime, const must be known at compile time","const is for strings, final is for numbers","final is faster than const"],ans:1},{q:"Which type stores whole numbers without decimals?",opts:["double","String","int","bool"],ans:2},{q:"What happens if you try to reassign a 'final' variable?",opts:["It works fine","The value doubles","Dart throws a compile-time error","The app crashes"],ans:2},{q:"What does 'var' do in Dart?",opts:["Creates a constant","Creates a variable with inferred type that can be reassigned","Creates a function","Imports a package"],ans:1},{q:"Which type can only hold 'true' or 'false'?",opts:["String","int","dynamic","bool"],ans:3}],challenge:"Open DartPad and declare variables of every type: an int for your age, a double for your height, a String for your name, and a bool for whether you like coding. Print them all using print(). Try changing a final variable and see the error!",resources:[{type:"docs",title:"Dart Variables",url:"https://dart.dev/language/variables",source:"Dart Official"},{type:"docs",title:"Dart Built-in Types",url:"https://dart.dev/language/built-in-types",source:"Dart Official"},{type:"docs",title:"Dart Type System",url:"https://dart.dev/language/type-system",source:"Dart Official"}],eli5:"Variables are like labeled jars on a shelf. The label says what is inside (name, age, score), and the type says what KIND of thing goes in (text, numbers, yes/no). 'var' is a jar with a loose lid -- you can open it and swap what is inside. 'final' is a jar with a glued lid -- once you put something in, it stays forever. 'const' is a jar that was sealed at the factory before it even reached your shelf!",codeWalkthrough:["The main function where our program starts","Opening curly brace","A comment explaining var","Creating a variable 'city' with value 'Dhaka' - can be changed","Changing city to 'Tokyo' - allowed because we used var","","A comment explaining final","Creating a final variable 'birthYear' set to 2015 - locked after this","A comment showing that reassignment would cause an error","","A comment explaining const","Creating pi as a compile-time constant","Creating maxScore as a compile-time constant","","A comment for data types section","An int variable storing the age 10","A double variable storing the height 4.5","A String variable storing a name","A bool variable storing true","","A comment for type inference","Dart infers this is an int from the value 95","Dart infers this is a double from the value 19.99","Dart infers this is a String from the text","Dart infers this is a bool from true","","A comment previewing string interpolation","Printing name using $ to embed the variable in the string","Printing age and height using $ interpolation","Printing the boolean value","Printing score out of maxScore","Closing the main function"],bugChallenge:{code:"void main() {\n  const currentTime = DateTime.now();\n  final pi = 3.14159;\n  var name = 'Alice';\n  name = 42;\n  print('$name $pi $currentTime');\n}",hint:"Check each variable declaration -- is the keyword appropriate for the value? Can you change a variable's type?",answer:"Two bugs: (1) const currentTime = DateTime.now() is wrong because DateTime.now() is not known at compile time -- change const to final. (2) name = 42 is wrong because name was inferred as String but 42 is an int -- you cannot change types."},difficulty:"beginner",prereqs:[1]},

  {id:6,title:"Strings & Numbers",subtitle:"Text Magic and Math Power",analogy:"Strings are like friendship bracelets made of letter beads -- you can combine them, split them, find specific beads, and rearrange them. Numbers are like a calculator -- you can add, subtract, multiply, divide, and do all sorts of math. Together, they are the most common types of data you will ever work with!",points:[{t:"String Interpolation with $",d:"Use $variableName inside a string to insert a variable's value. For expressions, use ${expression}. This is much cleaner than joining strings with the + operator. Dart developers use interpolation everywhere.",code:"var name = 'Flutter';\nvar version = 3;\n\n// Interpolation (preferred)\nprint('Hello $name!');           // Hello Flutter!\nprint('Version ${version + 1}'); // Version 4\nprint('Length: ${name.length}'); // Length: 7\n\n// Concatenation (old way)\nprint('Hello ' + name + '!');    // Hello Flutter!"},{t:"Multiline Strings",d:"Use triple quotes (single or double) to write strings that span multiple lines. This is great for long text, JSON templates, or formatted output. The line breaks are preserved in the output.",code:"var poem = '''\nRoses are red,\nDart is great,\nFlutter apps\nnever wait!''';\n\nprint(poem);\n// Roses are red,\n// Dart is great,\n// Flutter apps\n// never wait!"},{t:"String Methods",d:"Strings have many built-in methods: toUpperCase(), toLowerCase(), trim(), split(), contains(), startsWith(), endsWith(), replaceAll(), substring(), padLeft(), and more. These let you transform and search text easily.",code:"var text = '  Hello Flutter  ';\n\nprint(text.trim());            // 'Hello Flutter'\nprint(text.trimLeft());        // 'Hello Flutter  '\nprint(text.toUpperCase());     // '  HELLO FLUTTER  '\nprint(text.contains('Flutter')); // true\nprint(text.replaceAll('l', 'L')); // '  HeLLo FLutter  '\nprint(text.trim().split(' ')); // ['Hello', 'Flutter']"},{t:"Substring and IndexOf",d:"substring() extracts part of a string by position. indexOf() finds where a character or word first appears. Together, they let you locate and extract specific parts of text, like finding a username in an email.",code:"var email = 'alice@flutter.dev';\n\nprint(email.indexOf('@'));       // 5\nprint(email.substring(0, 5));    // 'alice'\nprint(email.substring(6));       // 'flutter.dev'\n\n// Split at @ to get parts\nvar parts = email.split('@');\nprint(parts[0]); // 'alice'\nprint(parts[1]); // 'flutter.dev'"},{t:"Arithmetic Operators",d:"Dart supports +, -, *, / (division returns double), ~/ (integer division), and % (remainder/modulo). These work on int and double. Integer division (~/) is unique to Dart -- it divides and rounds down to a whole number.",code:"int a = 17;\nint b = 5;\n\nprint(a + b);   // 22 (addition)\nprint(a - b);   // 12 (subtraction)\nprint(a * b);   // 85 (multiplication)\nprint(a / b);   // 3.4 (division - returns double!)\nprint(a ~/ b);  // 3 (integer division)\nprint(a % b);   // 2 (remainder)"},{t:"Number Parsing and Conversion",d:"Convert strings to numbers with int.parse() and double.parse(). Convert numbers to strings with .toString() and .toStringAsFixed(). Use tryParse() for safe parsing that returns null instead of crashing on bad input.",code:"// String to number\nvar age = int.parse('25');          // 25\nvar price = double.parse('9.99');   // 9.99\n\n// Safe parsing (no crash on bad input)\nvar maybe = int.tryParse('abc');    // null\nvar good = int.tryParse('42');      // 42\n\n// Number to string\nprint(42.toString());               // '42'\nprint(3.14159.toStringAsFixed(2));  // '3.14'"},{t:"Math Operations",d:"The dart:math library provides advanced math: sqrt(), pow(), min(), max(), and the Random class. Import it with 'import dart:math;' to access these tools.",code:"import 'dart:math';\n\nprint(sqrt(16));         // 4.0\nprint(pow(2, 10));       // 1024\nprint(min(5, 3));        // 3\nprint(max(5, 3));        // 5\nprint(pi);               // 3.141592653589793\n\n// Random numbers\nvar rng = Random();\nprint(rng.nextInt(100)); // Random 0-99\nprint(rng.nextDouble()); // Random 0.0-1.0"},{t:"Number Properties",d:"Numbers have useful properties: isEven, isOdd, isNegative, isNaN, isFinite, isInfinite. These return true or false and help you check number characteristics without writing comparison logic yourself.",code:"int number = 42;\n\nprint(number.isEven);      // true\nprint(number.isOdd);       // false\nprint(number.isNegative);  // false\nprint(number.sign);        // 1 (positive)\n\ndouble x = double.nan;\nprint(x.isNaN);           // true\nprint(x.isFinite);        // false"},{t:"String Comparison and Equality",d:"Compare strings with == (equal) and != (not equal). Use compareTo() for alphabetical ordering. String comparison in Dart is case-sensitive, so 'Hello' and 'hello' are NOT equal.",code:"var a = 'Hello';\nvar b = 'hello';\n\nprint(a == b);                    // false (case matters!)\nprint(a.toLowerCase() == b);      // true\nprint(a.compareTo(b));            // negative (H before h)\n\n// Check if empty\nprint(''.isEmpty);                // true\nprint('Hi'.isNotEmpty);           // true"}],whatIs:"Strings hold text and have powerful methods for searching, transforming, and combining text. String interpolation ($variable) lets you embed values inside strings. Numbers include int (whole) and double (decimal) with full arithmetic support. Dart also provides dart:math for advanced math operations.",realWorld:"String manipulation is everywhere: displaying user names, formatting prices, parsing API responses, validating email addresses. Number operations handle everything from shopping cart totals to game scores to GPS coordinates. These are the building blocks of every app.",code:`import 'dart:math';

void main() {
  // String interpolation
  var name = 'Flutter';
  var version = 3;
  print('Welcome to \$name \$version!');
  print('Name has \${name.length} letters');

  // String methods
  var email = 'User@Example.COM';
  print(email.toLowerCase());     // user@example.com
  print(email.contains('@'));     // true
  print(email.split('@'));        // [User, Example.COM]

  // Multiline string
  var message = '''
Dear \$name,
You are version \$version.
Keep being awesome!''';
  print(message);

  // Number arithmetic
  int apples = 10;
  int friends = 3;
  print('Each gets: \${apples ~/ friends} apples');  // 3
  print('Leftover: \${apples % friends}');            // 1

  // Double for precision
  double price = 29.99;
  double tax = 0.08;
  double total = price + (price * tax);
  print('Total: \$\${total.toStringAsFixed(2)}');     // \$32.39

  // Parsing strings to numbers
  var input = '42';
  var number = int.parse(input);
  print('Double it: \${number * 2}');                 // 84

  // Random numbers
  var rng = Random();
  var dice = rng.nextInt(6) + 1;  // 1-6
  print('You rolled a \$dice!');
}`,funFact:"Dart uses UTF-16 encoding for strings, which means it can handle characters from every human language, including Chinese, Arabic, emoji, and ancient Egyptian hieroglyphics. The string 'Hello' takes 10 bytes in memory (2 bytes per character in UTF-16).",quiz:[{q:"What is the correct way to embed a variable in a Dart string?",opts:["'Hello {name}'","'Hello' + name","'Hello $name'","'Hello %name%'"],ans:2},{q:"What does the ~/ operator do in Dart?",opts:["Regular division","Integer division (divides and drops the decimal)","Floor function","Ceiling function"],ans:1},{q:"What does int.tryParse('abc') return?",opts:["0","An error","'abc'","null"],ans:3},{q:"Which method removes whitespace from both ends of a string?",opts:["strip()","clean()","trim()","cut()"],ans:2},{q:"What is the result of 17 % 5?",opts:["3.4","3","2","12"],ans:2}],challenge:"Write a program that calculates the area of a circle. Ask for the radius (use a variable), compute area = pi * r * r, and print the result formatted to 2 decimal places using toStringAsFixed(2). Bonus: Also calculate the circumference!",resources:[{type:"docs",title:"Dart Strings",url:"https://dart.dev/language/built-in-types#strings",source:"Dart Official"},{type:"docs",title:"Dart Numbers",url:"https://dart.dev/language/built-in-types#numbers",source:"Dart Official"},{type:"docs",title:"dart:math Library",url:"https://api.dart.dev/stable/dart-math/dart-math-library.html",source:"Dart API"}],eli5:"Strings are like making friendship bracelets with letter beads. You can put them together ('Hello' + 'World'), find a bead ('Where is the @?'), change all beads to big letters (UPPERCASE), or cut the bracelet and rearrange pieces. Numbers are like your calculator in school -- addition, subtraction, multiplication, division. The $ sign in strings is like a magic window -- when Dart sees $name, it peeks at the jar labeled 'name' and puts whatever is inside right into the sentence!",codeWalkthrough:["Importing the dart:math library for math functions","","The main function starts","A comment for string interpolation section","Creating a String variable 'name' set to 'Flutter'","Creating an int variable 'version' set to 3","Printing a message with both variables embedded using $ syntax","Using ${} with an expression to print the name's length","","A comment for string methods","An email string with mixed case for demonstration","toLowerCase() converts the entire string to lowercase","contains() checks if '@' exists in the string -- returns true","split('@') breaks the string into a list at the @ symbol","","A comment for multiline strings","Triple quotes begin a multiline string","The $name variable is interpolated inside the multiline string","The $version variable is also embedded","The closing triple quotes end the multiline string","Printing the multiline message","","A comment for number arithmetic","Declaring apples as int 10","Declaring friends as int 3","Integer division ~/ gives 3 (10 divided by 3, no decimal)","The % modulo operator gives remainder 1 (10 mod 3)","","A comment for doubles","A price as a double","A tax rate as a double","Calculating total by adding price plus price times tax","Printing the total formatted to 2 decimal places with a dollar sign","","A comment for parsing","A string variable that looks like a number","int.parse() converts the string '42' to the integer 42","Multiplying the parsed number by 2 and printing the result","","A comment for random numbers","Creating a Random number generator","Generating a random integer from 1 to 6 (like a dice roll)","Printing the dice result"],bugChallenge:{code:"void main() {\n  var price = '19.99';\n  var quantity = 3;\n  var total = price * quantity;\n  print('Total: $total');\n}",hint:"Look at the types. Can you multiply a String by an int?",answer:"price is a String ('19.99'), not a double. You cannot multiply a String by an int. Fix: change to var price = 19.99; (without quotes) or use double.parse('19.99') * quantity."},difficulty:"beginner",prereqs:[5]},

  {id:7,title:"Booleans & Conditions",subtitle:"Making Decisions in Code",analogy:"Booleans are like light switches -- they are either ON (true) or OFF (false). Conditions are like a choose-your-own-adventure book: 'If you have the key, open the door. Otherwise, find another way.' Your code makes decisions the same way -- checking true/false values to decide which path to take.",points:[{t:"Boolean Values",d:"A bool in Dart can only be 'true' or 'false'. That is it -- two options. Booleans are the foundation of all decision-making in code. Every time your app decides what to show or what to do, a boolean is involved.",code:"bool isSunny = true;\nbool isRaining = false;\n\nprint(isSunny);   // true\nprint(isRaining);  // false\n\n// Booleans from comparisons\nbool isAdult = age >= 18;      // true if age is 18+\nbool isZero = count == 0;      // true if count equals 0"},{t:"Comparison Operators",d:"Dart has 6 comparison operators: == (equal), != (not equal), > (greater), < (less), >= (greater or equal), <= (less or equal). Each returns a bool -- true or false.",code:"int age = 15;\n\nprint(age == 15);   // true (equal to)\nprint(age != 10);   // true (not equal to)\nprint(age > 18);    // false (greater than)\nprint(age < 18);    // true (less than)\nprint(age >= 15);   // true (greater or equal)\nprint(age <= 20);   // true (less or equal)"},{t:"if / else - Basic Decisions",d:"'if' checks a condition. If it is true, the code inside runs. 'else' runs when the condition is false. 'else if' adds more conditions in between. This is the most fundamental control flow in any programming language.",code:"int score = 85;\n\nif (score >= 90) {\n  print('Excellent! A grade');\n} else if (score >= 80) {\n  print('Great! B grade');     // This runs!\n} else if (score >= 70) {\n  print('Good! C grade');\n} else {\n  print('Keep trying!');\n}"},{t:"Logical Operators: &&, ||, !",d:"&& means AND (both must be true). || means OR (at least one true). ! means NOT (flips true to false). These let you combine multiple conditions into one decision.",code:"int age = 20;\nbool hasTicket = true;\n\n// AND - both must be true\nif (age >= 18 && hasTicket) {\n  print('Welcome to the movie!');\n}\n\n// OR - at least one must be true\nif (age < 13 || age > 65) {\n  print('You get a discount!');\n}\n\n// NOT - flips the value\nif (!hasTicket) {\n  print('Buy a ticket first!');\n}"},{t:"Ternary Operator ?:",d:"The ternary operator is a shortcut for simple if/else. Syntax: condition ? valueIfTrue : valueIfFalse. It fits on one line and is great for assigning values based on a condition.",code:"int age = 20;\n\n// Long way (if/else)\nString status;\nif (age >= 18) {\n  status = 'Adult';\n} else {\n  status = 'Minor';\n}\n\n// Short way (ternary)\nvar status2 = age >= 18 ? 'Adult' : 'Minor';\nprint(status2); // 'Adult'"},{t:"switch Statement",d:"switch checks a value against multiple cases. It is cleaner than many if/else chains when checking one variable against specific values. Each case needs a break (or return) to stop. 'default' handles unmatched cases.",code:"String grade = 'B';\n\nswitch (grade) {\n  case 'A':\n    print('Excellent!');\n    break;\n  case 'B':\n    print('Great job!');\n    break;\n  case 'C':\n    print('Good effort!');\n    break;\n  default:\n    print('Keep trying!');\n}"},{t:"Dart 3 Switch Expressions",d:"Dart 3 introduced switch expressions -- a modern, concise way to use switch that returns a value directly. No break needed! Use the => arrow syntax for each case.",code:"String grade = 'A';\n\n// Switch expression (Dart 3+)\nvar message = switch (grade) {\n  'A' => 'Excellent!',\n  'B' => 'Great job!',\n  'C' => 'Good effort!',\n  _ => 'Keep trying!',  // _ is the default\n};\n\nprint(message); // 'Excellent!'"},{t:"Null-Aware Conditions",d:"Dart's null safety means a variable can be nullable (might be null). Use the ? operator to mark nullable types, ?? to provide a fallback, and ?. to safely access properties on nullable values.",code:"String? name;  // nullable - might be null\n\n// ?? provides a fallback if null\nvar displayName = name ?? 'Guest';\nprint(displayName); // 'Guest'\n\n// ?. safely accesses properties\nprint(name?.length);    // null (no crash!)\n// print(name.length);  // Error! name could be null\n\nname = 'Alice';\nprint(name?.length);    // 5"},{t:"Assert - Debug-Time Checks",d:"assert() checks a condition during development. If the condition is false, the app pauses with an error message. Asserts are removed in production builds, so they have zero cost. Great for catching bugs early.",code:"int age = 25;\n\nassert(age >= 0, 'Age cannot be negative');\nassert(age < 150, 'Age seems unrealistic');\n\n// In debug mode:\n// assert(-1 >= 0); // Throws AssertionError!\n\n// In production: asserts are removed entirely\n// Zero performance cost!"}],whatIs:"Booleans are true/false values used for decision-making. Comparison operators (==, !=, >, <, >=, <=) produce booleans. if/else and switch statements let your code choose different paths based on conditions. Logical operators (&&, ||, !) combine conditions. The ternary operator (? :) is a concise if/else for simple decisions.",realWorld:"Every app is full of decisions. Is the user logged in? Show the dashboard or the login screen. Is the cart empty? Show products or a message. Is the password valid? Allow login or show an error. Conditions are the logic that makes apps intelligent.",code:`void main() {
  int age = 15;
  bool hasPermission = true;
  String role = 'student';

  // if / else if / else
  if (age >= 18) {
    print('You are an adult');
  } else if (age >= 13) {
    print('You are a teenager');
  } else {
    print('You are a child');
  }

  // Logical operators
  if (age >= 13 && hasPermission) {
    print('Access granted!');
  }

  if (age < 5 || age > 65) {
    print('Free entry!');
  }

  // Ternary operator
  var status = age >= 18 ? 'Adult' : 'Minor';
  print('Status: \$status');

  // switch expression (Dart 3)
  var greeting = switch (role) {
    'admin' => 'Welcome, Admin!',
    'teacher' => 'Hello, Teacher!',
    'student' => 'Hi, Student!',
    _ => 'Hello, Guest!',
  };
  print(greeting);

  // Null safety
  String? nickname;
  print('Nickname: \${nickname ?? "No nickname"}');

  // Chained conditions
  bool canDrive = age >= 16 && hasPermission && !false;
  print('Can drive: \$canDrive');
}`,funFact:"George Boole, born in 1815, invented Boolean algebra -- the math of true/false values. He never saw a computer! But his work became the foundation of ALL modern computing. Every digital device runs on billions of tiny true/false switches (transistors).",quiz:[{q:"What values can a bool variable hold in Dart?",opts:["Any number","Any text","Only true or false","0 and 1"],ans:2},{q:"What does the && operator mean?",opts:["OR - at least one must be true","AND - both must be true","NOT - flips the value","EQUALS - checks equality"],ans:1},{q:"What does this return: 5 > 3 ? 'yes' : 'no'",opts:["5","3","'yes'","'no'"],ans:2},{q:"What does the ?? operator do?",opts:["Checks if two things are equal","Provides a fallback value if the left side is null","Asks a question","Throws an error"],ans:1},{q:"In a Dart 3 switch expression, what does _ represent?",opts:["An error","A wildcard / default case that matches anything","The first case","A null value"],ans:1}],challenge:"Write a grading system. Given a score (0-100), use if/else to print the grade: 90+ is A, 80+ is B, 70+ is C, 60+ is D, below 60 is F. Then rewrite it using a switch expression. Which version do you prefer?",resources:[{type:"docs",title:"Dart Branches (if/else, switch)",url:"https://dart.dev/language/branches",source:"Dart Official"},{type:"docs",title:"Dart Operators",url:"https://dart.dev/language/operators",source:"Dart Official"},{type:"docs",title:"Dart Patterns and Switch",url:"https://dart.dev/language/patterns",source:"Dart Official"}],eli5:"Imagine you are at a fork in the road. A signpost says: 'If you have a map, go left to the treasure. Otherwise, go right to ask for directions.' That is exactly how if/else works in code! The boolean (true/false) is like having or not having the map. Your code checks the condition and picks which way to go. The ternary operator is the shortcut: 'Map? Left : Right' -- same thing but shorter!",codeWalkthrough:["The main function starts","Declaring age as 15","Declaring hasPermission as true","Declaring role as 'student'","","A comment for if/else if/else","Checking if age is 18 or more","If true, print 'You are an adult'","else if checks if age is 13 or more","If true, print 'You are a teenager' -- this runs for age 15","The else catches everything else","If neither condition above was true, print 'You are a child'","","A comment for logical operators","AND: both age >= 13 AND hasPermission must be true","Both are true, so 'Access granted!' prints","","OR: age < 5 OR age > 65 -- either one being true is enough","Age is 15, so neither is true -- this does not print","","A comment for ternary operator","If age >= 18, status is 'Adult', otherwise 'Minor'","Printing the status (will be 'Minor' since age is 15)","","A comment for switch expression","Using switch on the role variable","If role is 'admin', returns 'Welcome, Admin!'","If role is 'teacher', returns 'Hello, Teacher!'","If role is 'student', returns 'Hi, Student!' -- this matches!","The _ wildcard matches anything else (default)","Closing the switch expression with a semicolon","Printing the greeting","","A comment for null safety","Declaring nickname as nullable String, currently null","Using ?? to print 'No nickname' because nickname is null","","A comment for chained conditions","Combining three conditions with && to check if canDrive","Printing the result"],bugChallenge:{code:"void main() {\n  int score = 85;\n\n  if score >= 90 {\n    print('A');\n  } else if (score >= 80)\n    print('B');\n    print('Good job!');\n  } else {\n    print('C');\n  }\n}",hint:"Check the if condition syntax and the curly braces carefully...",answer:"Two bugs: (1) if score >= 90 is missing parentheses -- must be if (score >= 90). (2) The else if block is missing an opening curly brace { after the condition. Fix: if (score >= 90) { and else if (score >= 80) {."},difficulty:"beginner",prereqs:[5]},

  {id:8,title:"Lists & Collections",subtitle:"Organizing Groups of Data",analogy:"A List is like a row of school lockers -- each has a number (index) starting from 0, and each holds one item. A Map is like a dictionary -- you look up a word (key) to find its meaning (value). A Set is like a bag of marbles where every marble must be unique -- no duplicates allowed!",points:[{t:"Creating Lists",d:"A List is an ordered collection of items. Create with square brackets []. Items are accessed by index starting at 0. Lists can grow and shrink. You can specify the type with List<Type> for safety.",code:"// Create a list\nvar fruits = ['apple', 'banana', 'cherry'];\nList<int> scores = [95, 87, 92, 78];\n\n// Access by index (starts at 0!)\nprint(fruits[0]);     // 'apple'\nprint(fruits[1]);     // 'banana'\nprint(fruits.length); // 3"},{t:"Adding and Removing",d:"Use add() to append one item, addAll() to append multiple, insert() to add at a specific position. Remove with remove() (by value), removeAt() (by index), removeLast(), and clear() (remove all).",code:"var items = ['a', 'b', 'c'];\n\n// Adding\nitems.add('d');            // ['a','b','c','d']\nitems.addAll(['e', 'f']); // ['a','b','c','d','e','f']\nitems.insert(0, 'z');     // ['z','a','b','c','d','e','f']\n\n// Removing\nitems.remove('z');         // ['a','b','c','d','e','f']\nitems.removeAt(0);         // ['b','c','d','e','f']\nitems.removeLast();        // ['b','c','d','e']"},{t:"List Methods",d:"Lists have many useful methods: contains() checks membership, indexOf() finds position, sort() orders items, reversed returns a reversed view, sublist() extracts a portion, and join() combines into a string.",code:"var nums = [3, 1, 4, 1, 5, 9];\n\nprint(nums.contains(4));     // true\nprint(nums.indexOf(5));      // 4\n\nnums.sort();                 // [1, 1, 3, 4, 5, 9]\nprint(nums.reversed.toList()); // [9, 5, 4, 3, 1, 1]\nprint(nums.sublist(1, 4));   // [1, 3, 4]\nprint(nums.join(', '));      // '1, 1, 3, 4, 5, 9'"},{t:"map, filter, where",d:"map() transforms each item. where() (Dart's filter) keeps items that pass a test. These return Iterables, so call .toList() to get a List back. These functional methods are powerful and widely used.",code:"var numbers = [1, 2, 3, 4, 5, 6];\n\n// map - transform each item\nvar doubled = numbers.map((n) => n * 2).toList();\nprint(doubled); // [2, 4, 6, 8, 10, 12]\n\n// where - filter items (Dart uses 'where' not 'filter')\nvar evens = numbers.where((n) => n % 2 == 0).toList();\nprint(evens); // [2, 4, 6]\n\n// Chaining\nvar result = numbers.where((n) => n > 2).map((n) => n * 10).toList();\nprint(result); // [30, 40, 50, 60]"},{t:"Maps - Key-Value Pairs",d:"A Map stores key-value pairs. Each key is unique and maps to a value. Create with curly braces {}. Access values with map[key]. Perfect for lookups, configurations, and structured data.",code:"// Create a Map\nvar user = {\n  'name': 'Alice',\n  'age': 25,\n  'city': 'Dhaka',\n};\n\n// Typed Map\nMap<String, int> scores = {\n  'math': 95,\n  'science': 88,\n  'english': 92,\n};\n\nprint(user['name']);      // 'Alice'\nprint(scores['math']);    // 95"},{t:"Map Operations",d:"Add entries with map[key] = value. Remove with remove(). Check existence with containsKey() and containsValue(). Get all keys with .keys and all values with .values.",code:"var capitals = <String, String>{};\n\n// Add entries\ncapitals['Bangladesh'] = 'Dhaka';\ncapitals['Japan'] = 'Tokyo';\ncapitals['France'] = 'Paris';\n\n// Check and access\nprint(capitals.containsKey('Japan'));   // true\nprint(capitals.containsValue('Paris')); // true\nprint(capitals.keys.toList());   // [Bangladesh, Japan, France]\nprint(capitals.length);          // 3\n\n// Remove\ncapitals.remove('France');"},{t:"Sets - Unique Collections",d:"A Set is an unordered collection with NO duplicates. Adding an existing item is silently ignored. Perfect for tracking unique tags, visited pages, or selected items.",code:"// Create a Set\nvar tags = <String>{'dart', 'flutter', 'mobile'};\n\ntags.add('web');        // added\ntags.add('dart');       // ignored! already exists\nprint(tags.length);     // 4\nprint(tags.contains('flutter')); // true\n\n// Set operations\nvar a = {1, 2, 3, 4};\nvar b = {3, 4, 5, 6};\nprint(a.union(b));        // {1, 2, 3, 4, 5, 6}\nprint(a.intersection(b)); // {3, 4}\nprint(a.difference(b));   // {1, 2}"},{t:"Spread Operator and Collection If/For",d:"The spread operator (...) merges collections. Collection if adds items conditionally. Collection for adds items from a loop. These make building collections clean and expressive.",code:"var base = [1, 2, 3];\nvar extra = [4, 5];\n\n// Spread\nvar all = [...base, ...extra]; // [1, 2, 3, 4, 5]\n\n// Collection if\nbool showExtra = true;\nvar items = [\n  'always',\n  if (showExtra) 'sometimes',\n]; // ['always', 'sometimes']\n\n// Collection for\nvar squares = [\n  for (var i = 1; i <= 5; i++) i * i,\n]; // [1, 4, 9, 16, 25]"},{t:"Null-Safe Collection Access",d:"Use the ?[] operator for null-safe map access and firstOrNull/lastOrNull for safe list access. This prevents crashes when dealing with potentially missing data.",code:"Map<String, int>? nullableMap;\nprint(nullableMap?['key']); // null (no crash)\n\nvar list = <int>[];\nprint(list.firstOrNull);  // null (empty list, no crash)\n// print(list.first);     // Error! List is empty\n\nvar users = ['Alice', 'Bob'];\nprint(users.firstOrNull);  // 'Alice'"}],whatIs:"Dart has three main collection types: List (ordered, indexed, allows duplicates), Map (key-value pairs, unique keys), and Set (unordered, unique values). Lists are the most common. All three support iteration, transformation, and null-safe access.",realWorld:"Lists of products in a shopping app, Maps of user profiles keyed by ID, Sets of unique tags or categories. Collections are the backbone of data management in every app. The team_mvp_kit project uses List for API responses, Map for JSON parsing, and Set for unique identifiers.",code:`void main() {
  // === LISTS ===
  var fruits = ['apple', 'banana', 'cherry', 'date'];

  // Access and modify
  print(fruits[0]);           // 'apple'
  fruits.add('elderberry');
  fruits.removeAt(1);         // removes 'banana'
  print(fruits);              // [apple, cherry, date, elderberry]

  // Transform with map and where
  var upperFruits = fruits.map((f) => f.toUpperCase()).toList();
  print(upperFruits);         // [APPLE, CHERRY, DATE, ELDERBERRY]

  var longNames = fruits.where((f) => f.length > 5).toList();
  print(longNames);           // [cherry, elderberry]

  // === MAPS ===
  var student = <String, dynamic>{
    'name': 'Ali',
    'age': 14,
    'grades': [90, 85, 92],
  };

  print(student['name']);     // 'Ali'
  student['school'] = 'ABC Academy';  // add new key
  print(student.keys.toList());

  // Iterate a Map
  student.forEach((key, value) {
    print('\$key: \$value');
  });

  // === SETS ===
  var visited = <String>{'home', 'about', 'contact'};
  visited.add('home');        // ignored - duplicate!
  print(visited.length);     // 3

  // Collection if and for
  var isVIP = true;
  var menu = [
    'Dashboard',
    'Profile',
    if (isVIP) 'VIP Lounge',
  ];
  print(menu);

  var doubled = [for (var i = 1; i <= 5; i++) i * 2];
  print(doubled);             // [2, 4, 6, 8, 10]
}`,funFact:"Dart Lists are actually implemented as growable arrays internally. When you add items beyond the current capacity, Dart creates a new larger array and copies everything over. This is why adding to the end (add) is fast on average, but inserting at the beginning (insert(0, x)) is slow for large lists!",quiz:[{q:"What index does the first item in a Dart List have?",opts:["1","0","-1","It depends on the list"],ans:1},{q:"What is the Dart equivalent of filter() found in other languages?",opts:["filter()","select()","where()","pick()"],ans:2},{q:"What happens when you add a duplicate value to a Set?",opts:["It throws an error","It adds the duplicate","It silently ignores the duplicate","It replaces the original"],ans:2},{q:"How do you access a value in a Map?",opts:["map.value","map(key)","map[key]","map->key"],ans:2},{q:"What does the spread operator (...) do with lists?",opts:["Deletes all items","Expands a list's items into another list","Sorts the list","Counts the items"],ans:1}],challenge:"Create a Map of 5 countries and their capitals. Write code to: (1) Print all country names. (2) Check if 'Japan' is in the map. (3) Add a new country. (4) Remove a country. (5) Print all capitals sorted alphabetically.",resources:[{type:"docs",title:"Dart Collections",url:"https://dart.dev/language/collections",source:"Dart Official"},{type:"docs",title:"Dart List Class",url:"https://api.dart.dev/stable/dart-core/List-class.html",source:"Dart API"},{type:"docs",title:"Iterable Collections",url:"https://dart.dev/codelabs/iterables",source:"Dart Official"}],eli5:"Imagine your school bag. A List is like a row of pockets numbered 0, 1, 2, 3 -- each holding something, and you can find things by their pocket number. A Map is like labels on each pocket: 'lunch' pocket has your sandwich, 'books' pocket has your textbook. A Set is like a sticker collection where you cannot have two of the same sticker -- if you try to add one you already have, it just does nothing!",codeWalkthrough:["The main function starts","A comment header for the Lists section","Creating a list of four fruits","","A comment for access and modify operations","Accessing the first item at index 0 -- prints 'apple'","Adding 'elderberry' to the end of the list","Removing the item at index 1 (banana)","Printing the updated list","","A comment for transformations","map() creates a new list with each fruit in UPPERCASE","Printing the uppercased list","","where() keeps only fruits with more than 5 characters","Printing the filtered result","","A comment header for the Maps section","Creating a Map with String keys and dynamic values","Storing the name 'Ali'","Storing the age 14","Storing a list of grades as a value","Closing the map literal","","Accessing the 'name' key -- prints 'Ali'","Adding a new key 'school' with value 'ABC Academy'","Printing all keys of the map","","A comment for iterating a Map","forEach loops through every key-value pair","Printing each key and value using string interpolation","Closing the forEach","","A comment header for the Sets section","Creating a Set with three unique page names","Adding 'home' again -- ignored because it already exists!","Printing the length -- still 3, duplicate was ignored","","A comment for collection if and for","A boolean flag for VIP status","Creating a list with collection if","Always includes 'Dashboard'","Always includes 'Profile'","Only includes 'VIP Lounge' if isVIP is true","Closing the list","Printing the menu","","Collection for generates a list of doubled numbers","Printing the result: [2, 4, 6, 8, 10]","Closing the main function"],bugChallenge:{code:"void main() {\n  var fruits = ['apple', 'banana'];\n  print(fruits[2]);\n\n  var scores = {'math': 90, 'science': 85};\n  scores.add('english', 92);\n}",hint:"Check the list index and the Map method for adding entries...",answer:"Two bugs: (1) fruits[2] causes a RangeError because the list only has indices 0 and 1. Fix: use fruits[1] or add another item first. (2) Maps do not have an add() method. Fix: use scores['english'] = 92; to add a key-value pair."},difficulty:"beginner",prereqs:[5]},

  {id:9,title:"Loops & Iteration",subtitle:"Repeating Actions Like a Pro",analogy:"Loops are like a merry-go-round at the playground. You keep going around and around until someone says stop. A 'for' loop is like saying 'go around exactly 10 times.' A 'while' loop is like saying 'keep going until the music stops.' Without loops, you would have to write the same code hundreds of times!",points:[{t:"for Loop - Counted Repetition",d:"The for loop repeats code a specific number of times. It has three parts: initialization (start), condition (keep going?), and increment (next step). The classic loop for counting, iterating through indices, and precise control.",code:"// Print numbers 1 to 5\nfor (var i = 1; i <= 5; i++) {\n  print('Number: $i');\n}\n// Number: 1\n// Number: 2\n// Number: 3\n// Number: 4\n// Number: 5"},{t:"for-in Loop - Collection Iteration",d:"for-in loops through every item in a collection without needing an index. It is cleaner and less error-prone than a regular for loop when you just need each item.",code:"var fruits = ['apple', 'banana', 'cherry'];\n\n// for-in: loop through each item\nfor (var fruit in fruits) {\n  print('I like $fruit');\n}\n// I like apple\n// I like banana\n// I like cherry"},{t:"forEach - Functional Style",d:"forEach() is a method on collections that calls a function for each item. It is similar to for-in but uses a callback function. Some developers prefer it for its concise syntax, especially with arrow functions.",code:"var colors = ['red', 'green', 'blue'];\n\n// forEach with arrow function\ncolors.forEach((color) => print(color));\n\n// forEach with full function body\ncolors.forEach((color) {\n  var upper = color.toUpperCase();\n  print('Color: $upper');\n});"},{t:"while Loop - Conditional Repetition",d:"A while loop keeps running as long as its condition is true. Use it when you do not know in advance how many times to loop. Be careful -- if the condition never becomes false, you get an infinite loop!",code:"var countdown = 5;\n\nwhile (countdown > 0) {\n  print('$countdown...');\n  countdown--;  // decrease by 1\n}\nprint('Liftoff!');\n// 5... 4... 3... 2... 1... Liftoff!"},{t:"do-while Loop - At Least Once",d:"do-while is like while, but it runs the code FIRST, then checks the condition. This guarantees the code runs at least once, even if the condition is false from the start.",code:"var input = 'yes';\n\ndo {\n  print('Processing: $input');\n  input = 'no';  // simulate getting new input\n} while (input == 'yes');\n\n// This always runs at least once!\n// Output: Processing: yes"},{t:"break - Exit Early",d:"'break' immediately exits the current loop, even if the condition is still true. Use break when you find what you are looking for and do not need to keep looping.",code:"var numbers = [10, 20, 30, 40, 50];\n\nfor (var num in numbers) {\n  if (num == 30) {\n    print('Found 30!');\n    break;  // stop the loop here\n  }\n  print('Checking $num...');\n}\n// Checking 10...\n// Checking 20...\n// Found 30!"},{t:"continue - Skip This Round",d:"'continue' skips the rest of the current iteration and jumps to the next one. Use continue when you want to skip certain items but keep processing the rest.",code:"// Print only odd numbers\nfor (var i = 1; i <= 10; i++) {\n  if (i % 2 == 0) {\n    continue;  // skip even numbers\n  }\n  print(i);\n}\n// 1, 3, 5, 7, 9"},{t:"map, where, reduce - No Loops Needed",d:"Functional methods like map(), where(), and reduce() can replace many loops with cleaner, more readable code. They describe WHAT you want, not HOW to loop. Dart developers prefer these over manual loops when possible.",code:"var prices = [10.0, 25.0, 15.0, 30.0, 5.0];\n\n// Instead of a loop to double all prices:\nvar doubled = prices.map((p) => p * 2).toList();\n\n// Instead of a loop to find expensive items:\nvar expensive = prices.where((p) => p > 15).toList();\n\n// Instead of a loop to sum all prices:\nvar total = prices.reduce((sum, p) => sum + p);\nprint(total); // 85.0"},{t:"Nested Loops",d:"A loop inside a loop. The inner loop runs completely for each iteration of the outer loop. Use for grids, tables, or comparing every pair of items. Be careful with performance -- nested loops multiply the work!",code:"// Multiplication table (1-3)\nfor (var i = 1; i <= 3; i++) {\n  for (var j = 1; j <= 3; j++) {\n    print('$i x $j = ${i * j}');\n  }\n  print('---');\n}\n// 1x1=1, 1x2=2, 1x3=3\n// ---\n// 2x1=2, 2x2=4, 2x3=6\n// ---"}],whatIs:"Loops repeat code multiple times. Dart has for loops (counted repetition), for-in loops (iterate collections), while loops (repeat while condition is true), do-while (at least once), and forEach (functional style). break exits early, continue skips an iteration. Functional methods like map/where/reduce often replace manual loops.",realWorld:"Loops are everywhere in apps: displaying a list of messages (loop through each one), processing API response data (loop through results), retrying a network request (while not successful), animating UI elements (loop each frame). Without loops, you would need millions of lines of code!",code:`void main() {
  // for loop - repeat a specific number of times
  print('=== Countdown ===');
  for (var i = 5; i >= 1; i--) {
    print(i);
  }
  print('Go!');

  // for-in - iterate through a collection
  print('\\n=== Shopping List ===');
  var shopping = ['milk', 'bread', 'eggs', 'butter'];
  for (var item in shopping) {
    print('Buy: \$item');
  }

  // forEach - functional style
  print('\\n=== Uppercase ===');
  shopping.forEach((item) => print(item.toUpperCase()));

  // while loop - repeat until condition is false
  print('\\n=== Guessing Game ===');
  var secret = 7;
  var guess = 1;
  while (guess != secret) {
    print('Tried \$guess... wrong!');
    guess++;
  }
  print('Got it! The number was \$secret');

  // break and continue
  print('\\n=== First Even ===');
  var nums = [1, 3, 5, 4, 7, 2];
  for (var n in nums) {
    if (n.isOdd) continue;  // skip odd numbers
    print('First even: \$n');
    break;                   // stop after first find
  }

  // Functional alternatives to loops
  print('\\n=== Functional ===');
  var scores = [85, 92, 78, 95, 88];
  var passing = scores.where((s) => s >= 80).toList();
  var average = scores.reduce((a, b) => a + b) / scores.length;
  print('Passing: \$passing');
  print('Average: \${average.toStringAsFixed(1)}');
}`,funFact:"An infinite loop (a loop that never stops) once caused a $370 million satellite to crash into the ocean. The Ariane 5 rocket in 1996 had a software loop that tried to fit a 64-bit number into a 16-bit space, causing an overflow that made the rocket self-destruct 37 seconds after launch!",quiz:[{q:"What are the three parts of a for loop?",opts:["start, middle, end","input, process, output","initialization, condition, increment","name, type, value"],ans:2},{q:"What does 'break' do inside a loop?",opts:["Pauses the loop temporarily","Exits the loop immediately","Skips to the next iteration","Crashes the program"],ans:1},{q:"What does 'continue' do inside a loop?",opts:["Continues to the next line","Stops the loop","Skips the rest of the current iteration and goes to the next one","Restarts the loop from the beginning"],ans:2},{q:"When should you use a 'while' loop instead of a 'for' loop?",opts:["Never, for loops are always better","When you do not know in advance how many times to repeat","When you want the loop to run faster","When you need to count backwards"],ans:1},{q:"What Dart method is equivalent to 'filter' in other languages?",opts:["filter()","select()","where()","find()"],ans:2}],challenge:"Write a program that finds all prime numbers between 1 and 50. A prime number is only divisible by 1 and itself. Use a for loop with a nested loop to check divisibility. Hint: use break to exit the inner loop early when you find a divisor.",resources:[{type:"docs",title:"Dart Loops",url:"https://dart.dev/language/loops",source:"Dart Official"},{type:"docs",title:"Dart Iteration",url:"https://dart.dev/codelabs/iterables",source:"Dart Official"},{type:"docs",title:"Dart Control Flow",url:"https://dart.dev/language",source:"Dart Official"}],eli5:"Imagine you have to write 'I will study hard' 100 times on the board. Would you write it one by one? No! A loop is like a magic pen that writes it for you 100 times automatically. A 'for' loop says 'do this exactly 100 times.' A 'while' loop says 'keep writing until the teacher says stop.' And 'break' is like the teacher saying 'OK, you can stop now, even if you have not finished all 100!'",codeWalkthrough:["The main function starts","A comment for the for loop section","Printing a header","A for loop counting down from 5 to 1","Printing each number in the countdown","Closing the for loop","Printing 'Go!' after the countdown ends","","A comment for the for-in section","Printing a header with a newline escape for spacing","Creating a list of shopping items","for-in loops through each item in the list","Printing each item with a 'Buy:' prefix","Closing the for-in loop","","A comment for forEach","Printing a header","forEach calls the arrow function on each item, printing it uppercased","","A comment for while loop","Printing a header","Setting the secret number to 7","Starting the guess at 1","The while loop continues as long as guess does not equal secret","Printing the current wrong guess","Incrementing guess by 1 for the next try","Closing the while loop","Printing when the correct number is found","","A comment for break and continue","Printing a header","Creating a list with mixed odd and even numbers","for-in loops through each number","If the number is odd, continue skips to the next iteration","If we reach here, the number is even -- print it","break stops the loop after finding the first even number","Closing the for loop","","A comment for functional alternatives","Printing a header","A list of test scores","where() keeps only scores 80 and above","reduce() sums all scores, then divides by count for average","Printing passing scores","Printing average formatted to 1 decimal place","Closing the main function"],bugChallenge:{code:"void main() {\n  var total = 0;\n  for (var i = 1; i <= 10; i++) {\n    if (i % 2 == 0) {\n      continue;\n    }\n    total += i;\n    break;\n  }\n  print('Sum of odd numbers: $total');\n}",hint:"Trace through the loop step by step. What happens on the very first iteration?",answer:"The break statement exits the loop after adding just the FIRST odd number (1). The total will be 1, not the sum of all odd numbers. Fix: remove the break; line so the loop continues through all 10 numbers, skipping evens with continue and adding odds."},difficulty:"beginner",prereqs:[5,8]},

  {id:10,title:"Functions",subtitle:"Reusable Blocks of Power",analogy:"Functions are like recipes in a cookbook. Instead of explaining how to make pancakes every time someone asks, you write the recipe ONCE and just say 'follow the pancake recipe.' In code, instead of writing the same logic over and over, you put it in a function and call it by name whenever you need it. Write once, use everywhere!",points:[{t:"Defining and Calling Functions",d:"A function is a reusable block of code with a name. Define it with a return type, name, and parameters. Call it by name with parentheses. The function runs its code and optionally returns a result.",code:"// Define a function\nString greet(String name) {\n  return 'Hello, $name!';\n}\n\n// Call the function\nvar message = greet('Flutter');\nprint(message); // Hello, Flutter!\n\n// void means no return value\nvoid sayHi() {\n  print('Hi there!');\n}\nsayHi();"},{t:"Parameters and Arguments",d:"Parameters are the variables a function expects. Arguments are the actual values you pass when calling it. Dart has positional parameters (by order) and named parameters (by name). Named parameters use curly braces {}.",code:"// Positional parameters (order matters)\nint add(int a, int b) {\n  return a + b;\n}\nprint(add(3, 5)); // 8\n\n// Named parameters (order does not matter)\nvoid createUser({required String name, int age = 0}) {\n  print('$name, age: $age');\n}\ncreateUser(name: 'Alice', age: 25);\ncreateUser(name: 'Bob'); // age defaults to 0"},{t:"Return Types",d:"The return type comes before the function name. It tells Dart what kind of value the function gives back. 'void' means nothing is returned. Always specify return types for clarity and type safety.",code:"// Returns a String\nString getGreeting(String name) {\n  return 'Hello, $name!';\n}\n\n// Returns an int\nint multiply(int a, int b) {\n  return a * b;\n}\n\n// Returns a bool\nbool isAdult(int age) {\n  return age >= 18;\n}\n\n// Returns nothing (void)\nvoid logMessage(String msg) {\n  print('[LOG] $msg');\n}"},{t:"Arrow Functions =>",d:"For functions with a single expression, use the => arrow syntax. It is a shortcut that skips the curly braces and return keyword. The expression after => is automatically returned. Clean and concise!",code:"// Regular function\nint add(int a, int b) {\n  return a + b;\n}\n\n// Arrow function (same thing, shorter)\nint addArrow(int a, int b) => a + b;\n\n// More examples\nString greet(String name) => 'Hello, $name!';\nbool isEven(int n) => n % 2 == 0;\nvoid sayHi() => print('Hi!');\n\nprint(addArrow(3, 5)); // 8"},{t:"Optional Parameters",d:"Square brackets [] make positional parameters optional. They get a default value or null. Named parameters in {} are optional by default unless marked 'required'. This gives callers flexibility.",code:"// Optional positional parameters []\nString introduce(String name, [String? title]) {\n  if (title != null) {\n    return '$title $name';\n  }\n  return name;\n}\nprint(introduce('Alice'));           // 'Alice'\nprint(introduce('Alice', 'Dr.'));    // 'Dr. Alice'\n\n// Optional named with defaults\nvoid config({int timeout = 30, bool retry = true}) {\n  print('Timeout: $timeout, Retry: $retry');\n}\nconfig();                 // Timeout: 30, Retry: true\nconfig(timeout: 60);      // Timeout: 60, Retry: true"},{t:"Functions as First-Class Objects",d:"In Dart, functions are values. You can store them in variables, pass them to other functions, and return them from functions. This is called 'first-class functions' and is incredibly powerful for callbacks and functional programming.",code:"// Store a function in a variable\nvar multiply = (int a, int b) => a * b;\nprint(multiply(3, 4)); // 12\n\n// Pass a function as a parameter\nvoid doMath(int a, int b, int Function(int, int) operation) {\n  print(operation(a, b));\n}\ndoMath(10, 5, (a, b) => a + b);  // 15\ndoMath(10, 5, (a, b) => a * b);  // 50"},{t:"Anonymous Functions (Lambdas)",d:"Anonymous functions have no name. They are used inline, often as callbacks for methods like map(), where(), forEach(), and sort(). They are the functions you pass directly without defining them separately.",code:"var numbers = [3, 1, 4, 1, 5];\n\n// Anonymous function in sort\nnumbers.sort((a, b) => a.compareTo(b));\nprint(numbers); // [1, 1, 3, 4, 5]\n\n// Anonymous function in map\nvar squared = numbers.map((n) => n * n).toList();\nprint(squared); // [1, 1, 9, 16, 25]\n\n// Anonymous function in where\nvar big = numbers.where((n) => n > 3).toList();\nprint(big); // [4, 5]"},{t:"Typedef - Function Type Aliases",d:"typedef creates a name for a function type. Instead of writing int Function(int, int) everywhere, you define typedef MathOp = int Function(int, int) once and use MathOp as the type. Cleaner and more readable!",code:"// Define a function type alias\ntypedef MathOperation = int Function(int, int);\n\n// Use it as a parameter type\nint calculate(int a, int b, MathOperation op) {\n  return op(a, b);\n}\n\nint result1 = calculate(10, 5, (a, b) => a + b); // 15\nint result2 = calculate(10, 5, (a, b) => a * b); // 50\nprint('$result1, $result2');"},{t:"Recursive Functions",d:"A recursive function calls itself. Every recursive function needs a base case (when to stop) to avoid infinite loops. Recursion is elegant for problems like factorials, tree traversal, and divide-and-conquer algorithms.",code:"// Factorial: 5! = 5 * 4 * 3 * 2 * 1 = 120\nint factorial(int n) {\n  if (n <= 1) return 1;  // base case: stop!\n  return n * factorial(n - 1);  // calls itself\n}\n\nprint(factorial(5));  // 120\nprint(factorial(0));  // 1\n\n// How it works:\n// factorial(5) = 5 * factorial(4)\n//              = 5 * 4 * factorial(3)\n//              = 5 * 4 * 3 * factorial(2)\n//              = 5 * 4 * 3 * 2 * 1 = 120"}],whatIs:"Functions are reusable blocks of code that take inputs (parameters), perform operations, and optionally return outputs. Dart supports positional and named parameters, optional parameters with defaults, arrow functions for concise syntax, first-class functions (functions as values), anonymous functions (lambdas), and typedefs for function type aliases.",realWorld:"Functions are the building blocks of all software. In the team_mvp_kit project, every API call, every state update, every UI builder is a function. Well-designed functions are small, do one thing, and have clear names. The best code reads like a story: fetchUser(), validateEmail(), showError().",code:`void main() {
  // Basic function with return type
  print(greet('Flutter'));        // Hello, Flutter!
  print(greet('Dart'));           // Hello, Dart!

  // Arrow function
  print(square(5));               // 25
  print(square(12));              // 144

  // Named parameters
  printInfo(name: 'Alice', age: 25);
  printInfo(name: 'Bob');         // uses default age

  // Optional positional parameters
  print(buildUrl('api.com', 'users'));  // https://api.com/users
  print(buildUrl('api.com'));           // https://api.com

  // Functions as values
  var numbers = [1, 2, 3, 4, 5];
  var result = applyToAll(numbers, (n) => n * n);
  print(result);                  // [1, 4, 9, 16, 25]

  // Higher-order function usage
  var evens = numbers.where(isEven).toList();
  print('Evens: \$evens');         // [2, 4]

  // Chaining functional methods
  var total = numbers
      .where((n) => n > 2)
      .map((n) => n * 10)
      .reduce((a, b) => a + b);
  print('Total: \$total');         // 120 (30 + 40 + 50)
}

// Named function with return type
String greet(String name) {
  return 'Hello, \$name!';
}

// Arrow function
int square(int n) => n * n;

// Named parameters with defaults
void printInfo({required String name, int age = 0}) {
  print('Name: \$name, Age: \$age');
}

// Optional positional parameters
String buildUrl(String host, [String? path]) {
  var url = 'https://\$host';
  if (path != null) url += '/\$path';
  return url;
}

// Higher-order function (takes a function as parameter)
List<int> applyToAll(List<int> items, int Function(int) transform) {
  return items.map(transform).toList();
}

// Can be passed as a value
bool isEven(int n) => n % 2 == 0;`,funFact:"The concept of functions in programming comes from mathematics (f(x) = x + 1). But the idea of 'first-class functions' -- treating functions as values -- was invented in the 1950s with the LISP programming language. Dart, JavaScript, Python, and many modern languages all support this, making code more flexible and powerful!",quiz:[{q:"What does the => arrow syntax do in a function?",opts:["Creates an infinite loop","Provides a shortcut for single-expression functions that auto-return the result","Points to a memory address","Imports a package"],ans:1},{q:"What keyword makes a named parameter mandatory in Dart?",opts:["must","final","required","mandatory"],ans:2},{q:"What does 'void' mean as a return type?",opts:["The function returns zero","The function returns an empty string","The function does not return any value","The function returns null"],ans:2},{q:"What is an anonymous function?",opts:["A function with a secret name","A function without a name, used inline","A function that takes no parameters","A function that returns void"],ans:1},{q:"What does typedef do in Dart?",opts:["Defines a new data type","Creates a type alias for a function signature","Imports a type from another file","Converts types automatically"],ans:1}],challenge:"Write three functions: (1) A function 'celsiusToFahrenheit' that converts Celsius to Fahrenheit (F = C * 9/5 + 32). (2) A function 'isPositive' that returns true if a number is greater than 0. (3) A function 'applyDiscount' with named parameters: price (required) and percent (default 10). Test all three!",resources:[{type:"docs",title:"Dart Functions",url:"https://dart.dev/language/functions",source:"Dart Official"},{type:"docs",title:"Dart Typedefs",url:"https://dart.dev/language/typedefs",source:"Dart Official"},{type:"docs",title:"Effective Dart: Usage",url:"https://dart.dev/effective-dart/usage",source:"Dart Official"}],eli5:"Functions are like magic spells with names. You create a spell once: 'Abracadabra -- double any number!' Then whenever you need to double a number, you just say the spell name instead of explaining the whole magic trick again. The ingredients you give the spell (like the number to double) are parameters. What the spell gives back (the doubled number) is the return value. And the cool part? You can teach one spell to another spell -- that is first-class functions!",codeWalkthrough:["The main function starts","A comment for basic functions","Calling greet('Flutter') and printing the result","Calling greet('Dart') and printing the result","","A comment for arrow functions","Calling square(5) -- returns 25","Calling square(12) -- returns 144","","A comment for named parameters","Calling printInfo with both name and age specified","Calling printInfo with only name -- age uses default value 0","","A comment for optional positional parameters","buildUrl with both host and path -- returns full URL","buildUrl with only host -- path is null, returns base URL","","A comment for functions as values","Creating a list of numbers 1 through 5","applyToAll takes the list and an anonymous squaring function","Printing the result -- each number squared","","A comment for higher-order function usage","where() takes the isEven function by name (no parentheses!) to filter","Printing the even numbers","","A comment for chaining functional methods","Starting with the numbers list","where keeps only numbers greater than 2","map multiplies each by 10","reduce adds them all together","Printing the total: 30 + 40 + 50 = 120","Closing the main function","","A comment for the greet function definition","greet takes a String name and returns a String","Returns 'Hello, ' plus the name with an exclamation mark","Closing the function","","A comment for the arrow function","square takes an int and returns its square using => syntax","","A comment for named parameters","printInfo has a required name and optional age with default 0","Printing the formatted info string","Closing the function","","A comment for optional positional parameters","buildUrl takes a required host and optional path","Building the base URL with https","If path is provided, append it with a slash","Returning the complete URL","Closing the function","","A comment for the higher-order function","applyToAll takes a list and a transform function","Uses map to apply the transform to each item and returns a list","Closing the function","","A comment for the function value","isEven is a named function that returns true if n is even"],bugChallenge:{code:"void main() {\n  print(add(3, 5));\n}\n\nString add(int a, int b) {\n  return a + b;\n}",hint:"Look at the return type of the function versus what it actually returns...",answer:"The function add() is declared to return String, but a + b (where a and b are int) returns an int. Fix: change the return type from String to int: int add(int a, int b) { return a + b; }"},difficulty:"beginner",prereqs:[5,9]},
{id:11,title:"Classes & Objects",subtitle:"Blueprints for Building Anything in Dart",analogy:"A class is like a cookie cutter -- it defines the shape, and every cookie you stamp out is an object. The cookie cutter says 'heart-shaped, 3 inches wide' but each actual cookie can have different frosting (property values). In team_mvp_kit, classes like UserEntity are cookie cutters that stamp out individual user objects with unique names, emails, and IDs.",points:[{t:"Defining a Class",d:"Use the class keyword to create a blueprint. A class groups related data (properties) and behavior (methods) together. Every entity, model, and widget in Flutter is a class.",code:`class Dog {\n  String name;\n  int age;\n  Dog(this.name, this.age);\n}`},{t:"Properties (Fields)",d:"Properties are variables that belong to a class. They store the data each object carries around. In team_mvp_kit, UserEntity has properties like id, name, and email.",code:`class UserEntity {\n  final String id;\n  final String name;\n  final String email;\n  UserEntity({required this.id, required this.name, required this.email});\n}`},{t:"Methods",d:"Methods are functions defined inside a class. They describe what an object can do. Methods can access the object's properties using the this keyword or just by name.",code:`class Dog {\n  String name;\n  Dog(this.name);\n  String bark() {\n    return '\$name says Woof!';\n  }\n}`},{t:"Creating Objects (Instances)",d:"You create an object by calling the class name like a function. Each object is independent -- changing one does not affect the others.",code:`final myDog = Dog('Rex');\nfinal yourDog = Dog('Bella');\nprint(myDog.bark()); // Rex says Woof!`},{t:"The this Keyword",d:"Inside a class, this refers to the current object. It is commonly used in constructors to assign parameters to properties, especially when parameter names match property names.",code:`class Cat {\n  String name;\n  Cat(this.name); // shorthand for this.name = name\n}`},{t:"Getters and Setters",d:"Getters let you compute a value from properties. Setters let you validate or transform data before storing it. Use the get and set keywords.",code:`class Rectangle {\n  double width;\n  double height;\n  Rectangle(this.width, this.height);\n  double get area => width * height;\n}`},{t:"Private Members",d:"Dart uses an underscore prefix to make properties and methods private to their library (file). Private members cannot be accessed from outside the file where the class is defined.",code:`class BankAccount {\n  double _balance = 0; // private\n  double get balance => _balance;\n  void deposit(double amount) {\n    _balance += amount;\n  }\n}`},{t:"Static Members",d:"Static properties and methods belong to the class itself, not to any object. You access them using the class name. Great for utility functions and constants.",code:`class MathHelper {\n  static const double pi = 3.14159;\n  static double circleArea(double r) => pi * r * r;\n}\n// MathHelper.circleArea(5);`},{t:"toString Override",d:"Every Dart class inherits from Object and has a toString method. Override it to give your objects a meaningful string representation, which helps with debugging.",code:`class Dog {\n  String name;\n  Dog(this.name);\n  @override\n  String toString() => 'Dog(name: \$name)';\n}`},{t:"Classes in team_mvp_kit",d:"The project uses classes everywhere: entities in the domain layer, models in the data layer, BLoC classes for state management, and repository classes for data access. Each layer has its own class hierarchy.",code:`// domain/entities/user_entity.dart\nclass UserEntity {\n  final String id;\n  final String name;\n  const UserEntity({required this.id, required this.name});\n}`}],whatIs:"A class is a blueprint that defines a type of object by bundling together properties (data) and methods (behavior). When you create an object from a class, you get an instance with its own copy of the properties. Dart is a fully object-oriented language -- even numbers and functions are objects. In Flutter, everything from the app itself (MaterialApp) to the tiniest icon is an instance of a class.",realWorld:"Classes are the fundamental building blocks of every Flutter app. In team_mvp_kit, UserEntity represents a user, AuthRepository handles login logic, and AuthBloc manages authentication state. Without classes, you would have loose variables and functions with no organization -- like having a kitchen with no drawers or cabinets. Classes give your code structure, reusability, and clarity.",code:`class UserEntity {\n  final String id;\n  final String name;\n  final String email;\n\n  const UserEntity({\n    required this.id,\n    required this.name,\n    required this.email,\n  });\n\n  String get initials {\n    final parts = name.split(' ');\n    if (parts.length >= 2) {\n      return '\${parts[0][0]}\${parts[1][0]}'.toUpperCase();\n    }\n    return name[0].toUpperCase();\n  }\n\n  @override\n  String toString() => 'UserEntity(id: \$id, name: \$name)';\n}\n\nvoid main() {\n  final user = UserEntity(\n    id: 'u-001',\n    name: 'Alice Smith',\n    email: 'alice@example.com',\n  );\n  print(user.initials); // AS\n  print(user); // UserEntity(id: u-001, name: Alice Smith)\n}`,funFact:"In Dart, even the number 42 is an object -- it is an instance of the int class. You can call methods on it directly: 42.isEven returns true. Dart compiles these to efficient primitives, so you get the elegance of objects with the speed of raw numbers.",quiz:[{q:"What keyword do you use to define a class in Dart?",opts:["struct","class","type","object"],ans:1},{q:"How do you make a property private in Dart?",opts:["Use the private keyword","Prefix with an underscore _","Use the protected keyword","Put it inside a method"],ans:1},{q:"What does the this keyword refer to inside a class?",opts:["The parent class","The current file","The current object instance","The constructor"],ans:2},{q:"What is a static method?",opts:["A method that cannot change","A method that belongs to the class, not an instance","A method that runs at compile time","A method that is always private"],ans:1},{q:"In team_mvp_kit, where would UserEntity be defined?",opts:["In the presentation layer","In the data layer","In the domain/entities layer","In the main.dart file"],ans:2}],challenge:"Create a Product class with properties: id (String), name (String), price (double), and quantity (int). Add a getter called totalValue that returns price * quantity. Add a method called applyDiscount(double percent) that reduces the price. Override toString to show all properties. Create two Product objects and print their total values.",resources:[{type:"docs",title:"Dart Classes Documentation",url:"https://dart.dev/language/classes",source:"dart.dev"},{type:"docs",title:"Flutter Widget Class Reference",url:"https://api.flutter.dev/flutter/widgets/Widget-class.html",source:"api.flutter.dev"},{type:"tutorial",title:"Dart Language Tour - Classes",url:"https://dart.dev/language#classes",source:"dart.dev"}],eli5:"Imagine you have a recipe card for making a sandwich. The recipe says you need bread, filling, and sauce -- those are the properties. It also says how to assemble it -- those are the methods. Every time you follow the recipe, you make an actual sandwich -- that is an object. The recipe card is the class, and each sandwich you make is an object. You can make a turkey sandwich and a ham sandwich from different recipes, just like you make different objects from different classes.",codeWalkthrough:["Define a class called UserEntity -- this is our blueprint for user objects","Declare a final String property id -- each user has a unique identifier","Declare a final String property name -- stores the user's display name","Declare a final String property email -- stores the user's email address","Mark the constructor as const since all fields are final -- allows compile-time constant objects","The constructor uses required named parameters with this.id, this.name, this.email for concise assignment","Define a getter called initials that computes the user's initials from their name","Split the name by spaces into a list of parts","If there are at least 2 parts, take the first character of each and uppercase them","Otherwise fall back to just the first character of the name, uppercased","Override toString from Object to return a readable string for debugging","In main, create a UserEntity instance using the named constructor parameters","Pass id, name, and email as required named arguments","Print user.initials which computes and returns AS","Print the user object which automatically calls our toString override"],bugChallenge:{code:`class Counter {\n  int count = 0;\n  void increment() {\n    count++;\n  }\n  void reset() {\n    int count = 0;\n  }\n}`,hint:"Look carefully at the reset method. Is it modifying the class property or doing something else?",answer:"The reset method declares a new local variable called count instead of modifying the class property. It should be this.count = 0; or just count = 0; without the int keyword. The int keyword creates a brand new local variable that shadows the class property."},difficulty:"beginner",prereqs:[10]},
{id:12,title:"Constructors & Named Parameters",subtitle:"Multiple Ways to Build Your Objects",analogy:"Constructors are like different doors into the same building. The front door (default constructor) is the standard entrance. The side door (named constructor) is for special visitors. The factory door (factory constructor) has a bouncer who decides whether to let you into an existing room or build a new one. In team_mvp_kit, model classes use factory constructors to parse JSON from APIs, while entity classes use const constructors for efficiency.",points:[{t:"Default Constructor",d:"The simplest constructor shares the class name. Dart's shorthand this.property automatically assigns parameters to properties, saving you from writing boilerplate assignment code.",code:`class User {\n  String name;\n  int age;\n  User(this.name, this.age);\n}`},{t:"Named Parameters",d:"Wrap parameters in curly braces to make them named. Named parameters are optional by default, so use required to enforce them. They make code readable -- you always know which value goes where.",code:`class User {\n  String name;\n  int age;\n  User({required this.name, required this.age});\n}\n// Usage: User(name: 'Alice', age: 30)`},{t:"Default Values",d:"Named parameters can have default values. If the caller does not provide a value, the default kicks in. This is great for configuration objects with sensible defaults.",code:`class Config {\n  final String baseUrl;\n  final int timeout;\n  Config({this.baseUrl = 'https://api.example.com', this.timeout = 30});\n}`},{t:"Named Constructors",d:"Dart allows multiple constructors using ClassName.name syntax. Each named constructor can initialize the object differently. Common patterns include .empty(), .fromMap(), and .guest().",code:`class Point {\n  double x, y;\n  Point(this.x, this.y);\n  Point.origin() : x = 0, y = 0;\n  Point.fromJson(Map<String, double> json)\n      : x = json['x']!, y = json['y']!;\n}`},{t:"Factory Constructors",d:"A factory constructor can return an existing instance, a subtype, or compute the object before returning it. Unlike normal constructors, factory constructors have a body that must explicitly return an instance.",code:`class Logger {\n  static final Logger _instance = Logger._internal();\n  Logger._internal();\n  factory Logger() => _instance;\n}`},{t:"Const Constructors",d:"If all fields are final and known at compile time, mark the constructor as const. This lets Dart reuse identical objects instead of creating duplicates, saving memory.",code:`class Color {\n  final int r, g, b;\n  const Color(this.r, this.g, this.b);\n}\nconst red = Color(255, 0, 0); // compile-time constant`},{t:"Initializer Lists",d:"Code that runs before the constructor body, used to set final fields, assert preconditions, or call the super constructor. Initializer list entries are separated by commas after a colon.",code:`class PositiveNumber {\n  final double value;\n  PositiveNumber(double v)\n      : assert(v > 0, 'Must be positive'),\n        value = v;\n}`},{t:"Redirecting Constructors",d:"A constructor can delegate to another constructor in the same class using a colon and this(). This avoids duplicating initialization logic across multiple constructors.",code:`class Point {\n  double x, y;\n  Point(this.x, this.y);\n  Point.alongXAxis(double x) : this(x, 0);\n  Point.alongYAxis(double y) : this(0, y);\n}`},{t:"fromJson Factory Pattern",d:"In team_mvp_kit, model classes use factory constructors named fromJson to parse API responses. This pattern converts raw Map data into typed Dart objects safely.",code:`class UserModel {\n  final String id;\n  final String name;\n  UserModel({required this.id, required this.name});\n  factory UserModel.fromJson(Map<String, dynamic> json) {\n    return UserModel(id: json['id'], name: json['name']);\n  }\n}`},{t:"toJson Method Pattern",d:"Paired with fromJson, toJson converts an object back to a Map for sending to APIs or storing locally. Together they form the serialization/deserialization pattern used throughout team_mvp_kit.",code:`class UserModel {\n  final String id;\n  final String name;\n  UserModel({required this.id, required this.name});\n  Map<String, dynamic> toJson() => {'id': id, 'name': name};\n}`}],whatIs:"Constructors are special methods that create and initialize objects. Dart gives you many flavors: default constructors for the common case, named parameters for clarity, named constructors for alternative creation paths, factory constructors for advanced logic, and const constructors for compile-time optimization. Understanding constructors is essential because Flutter widgets are constructed thousands of times during rebuilds.",realWorld:"In team_mvp_kit, constructors are everywhere. Widget classes use const constructors with named parameters for readability: const HomeScreen(key: key). Model classes use factory UserModel.fromJson(json) to parse API responses from Dio. Entity classes use const constructors so identical entities can be reused in memory. BLoC classes use default constructors with dependency injection via GetIt.",code:`class UserModel {\n  final String id;\n  final String name;\n  final String email;\n  final DateTime createdAt;\n\n  const UserModel({\n    required this.id,\n    required this.name,\n    required this.email,\n    required this.createdAt,\n  });\n\n  factory UserModel.fromJson(Map<String, dynamic> json) {\n    return UserModel(\n      id: json['id'] as String,\n      name: json['name'] as String,\n      email: json['email'] as String,\n      createdAt: DateTime.parse(json['created_at'] as String),\n    );\n  }\n\n  Map<String, dynamic> toJson() {\n    return {\n      'id': id,\n      'name': name,\n      'email': email,\n      'created_at': createdAt.toIso8601String(),\n    };\n  }\n\n  UserModel copyWith({String? name, String? email}) {\n    return UserModel(\n      id: id,\n      name: name ?? this.name,\n      email: email ?? this.email,\n      createdAt: createdAt,\n    );\n  }\n}`,funFact:"Dart's const constructors are so powerful that Flutter uses them to avoid rebuilding widgets that have not changed. When you write const Text('Hello'), Flutter knows that identical const objects are the same instance in memory -- so it can skip rebuilding entirely. This is one of the key performance tricks in Flutter.",quiz:[{q:"What makes a named parameter required in Dart?",opts:["Putting it first in the list","Using the required keyword","Removing the curly braces","Adding an exclamation mark"],ans:1},{q:"What can a factory constructor do that a normal constructor cannot?",opts:["Accept parameters","Set final fields","Return an existing instance","Use named parameters"],ans:2},{q:"What is the purpose of an initializer list?",opts:["To create a list of objects","To run code before the constructor body","To initialize arrays","To list all class properties"],ans:1},{q:"In team_mvp_kit, what does UserModel.fromJson do?",opts:["Converts a user to a JSON string","Parses a Map into a UserModel object","Sends user data to an API","Validates JSON syntax"],ans:1}],challenge:"Create a Product class with: id, name, price, and an optional discount (default 0). Add a const constructor with named parameters. Add a factory Product.fromJson(Map) constructor. Add a toJson() method. Add a copyWith method that lets you change any field. Create a product from JSON, apply a discount with copyWith, and print the toJson result.",resources:[{type:"docs",title:"Dart Constructors",url:"https://dart.dev/language/constructors",source:"dart.dev"},{type:"docs",title:"Named Parameters in Dart",url:"https://dart.dev/language/functions#named-parameters",source:"dart.dev"},{type:"tutorial",title:"Factory Constructors Explained",url:"https://dart.dev/language/constructors#factory-constructors",source:"dart.dev"}],eli5:"Imagine you are ordering a custom pizza. The default constructor is like saying 'I want a pizza with pepperoni and cheese' -- you list everything in order. Named parameters are like a form: 'Size: Large, Topping: Mushroom, Crust: Thin' -- you label each choice so there is no confusion. A factory constructor is like a smart pizza shop that checks if someone already ordered the exact same pizza and gives you that one instead of making a new one. And a const constructor is like a pizza on display that never changes -- everyone sees the same one.",codeWalkthrough:["Define UserModel class -- this represents user data from the API","Declare final String id -- immutable unique identifier","Declare final String name -- immutable user name","Declare final String email -- immutable email address","Declare final DateTime createdAt -- immutable timestamp of account creation","Define a const constructor with required named parameters using this.field shorthand","The factory UserModel.fromJson constructor takes a Map<String, dynamic> parameter","It returns a new UserModel by extracting and casting each value from the JSON map","Parse the id field from json as a String","Parse the name field from json as a String","Parse the email field from json as a String","Parse created_at from json as a String and convert it to DateTime using DateTime.parse","The toJson method returns a Map<String, dynamic> for serialization","Include id, name, email as string values in the map","Convert createdAt to ISO 8601 string format for JSON compatibility","The copyWith method takes optional parameters for each field you might want to change","It returns a new UserModel with provided values or falls back to existing values using the ?? operator","For fields not in copyWith parameters like id and createdAt, the original values are always reused"],bugChallenge:{code:`class Temperature {\n  final double celsius;\n  const Temperature(this.celsius);\n  factory Temperature.fromFahrenheit(double f) {\n    final c = (f - 32) * 5 / 9;\n    Temperature(c);\n  }\n}`,hint:"Look at what the factory constructor returns -- or does it?",answer:"The factory constructor is missing a return statement. It creates a Temperature object but does not return it. Change Temperature(c); to return Temperature(c); -- factory constructors must explicitly return an instance."},difficulty:"beginner",prereqs:[11]},
{id:13,title:"Inheritance & Mixins",subtitle:"Sharing and Combining Abilities Across Classes",analogy:"Inheritance is like a family tree: a child inherits traits from a parent but can develop their own unique features too. A Dog class inherits from Animal and gets walk() for free, but adds its own bark() method. Mixins are like skill badges -- a Scout can earn a Swimming badge and a Cooking badge independently. In team_mvp_kit, BLoC classes extend Bloc (inheritance) while mixins add cross-cutting capabilities like logging.",points:[{t:"Inheritance with extends",d:"A subclass inherits all public properties and methods from its superclass. Use extends to create the relationship. The subclass can add new members or override existing ones.",code:`class Animal {\n  String name;\n  Animal(this.name);\n  void eat() => print('\$name is eating');\n}\nclass Dog extends Animal {\n  Dog(String name) : super(name);\n  void bark() => print('\$name says Woof!');\n}`},{t:"The super Keyword",d:"Use super to call the parent class constructor or access parent methods. The super constructor call must be in the initializer list. You can also call super.methodName() to invoke the parent's version of an overridden method.",code:`class Dog extends Animal {\n  String breed;\n  Dog(String name, this.breed) : super(name);\n  @override\n  void eat() {\n    super.eat(); // call parent's eat\n    print('(tail wagging)');\n  }\n}`},{t:"Overriding Methods",d:"Use @override to replace a parent method with a new implementation. The annotation is not strictly required but is strongly recommended -- it helps catch typos and signals intent to other developers.",code:`class Cat extends Animal {\n  Cat(String name) : super(name);\n  @override\n  void eat() {\n    print('\$name nibbles delicately');\n  }\n}`},{t:"Abstract Classes",d:"An abstract class cannot be instantiated directly. It can contain abstract methods (no body) that subclasses must implement. Use abstract classes to define contracts for a family of classes.",code:`abstract class Shape {\n  double get area;\n  double get perimeter;\n  void describe() {\n    print('Area: \$area, Perimeter: \$perimeter');\n  }\n}\nclass Circle extends Shape {\n  final double radius;\n  Circle(this.radius);\n  @override\n  double get area => 3.14159 * radius * radius;\n  @override\n  double get perimeter => 2 * 3.14159 * radius;\n}`},{t:"Interfaces (implicit)",d:"Every class in Dart implicitly defines an interface. Use implements to promise that your class will provide implementations of all properties and methods. Unlike extends, implements does not inherit any code.",code:`class Printable {\n  void printInfo() {}\n}\nclass User implements Printable {\n  @override\n  void printInfo() => print('I am a user');\n}`},{t:"Mixins with mixin Keyword",d:"A mixin is a class whose methods can be mixed into another class without inheritance. Define a mixin with the mixin keyword and apply it with the with keyword. Classes can use multiple mixins.",code:`mixin Swimming {\n  void swim() => print('Swimming!');\n}\nmixin Flying {\n  void fly() => print('Flying!');\n}\nclass Duck extends Animal with Swimming, Flying {\n  Duck(String name) : super(name);\n}`},{t:"Mixin Constraints (on keyword)",d:"Use the on keyword to restrict which classes can use a mixin. This ensures the mixin can safely call methods from the constrained superclass.",code:`mixin Barking on Animal {\n  void bark() => print('\$name barks loudly!');\n}\nclass Dog extends Animal with Barking {\n  Dog(String name) : super(name);\n}`},{t:"Repository Pattern in team_mvp_kit",d:"The project uses abstract classes as repository interfaces in the domain layer and concrete implementations in the data layer. This is the core of Clean Architecture's dependency inversion.",code:`// domain layer\nabstract class AuthRepository {\n  Future<UserEntity> login(String email, String password);\n  Future<void> logout();\n}\n// data layer\nclass AuthRepositoryImpl implements AuthRepository {\n  @override\n  Future<UserEntity> login(String email, String password) async {\n    // Dio API call here\n    throw UnimplementedError();\n  }\n  @override\n  Future<void> logout() async {}\n}`},{t:"Sealed Classes (Dart 3)",d:"Sealed classes restrict which classes can extend or implement them. All subtypes must be in the same library. This enables exhaustive pattern matching in switch statements -- the compiler knows all possible cases.",code:`sealed class AuthState {}\nclass AuthInitial extends AuthState {}\nclass AuthLoading extends AuthState {}\nclass AuthSuccess extends AuthState {\n  final UserEntity user;\n  AuthSuccess(this.user);\n}\nclass AuthFailure extends AuthState {\n  final String message;\n  AuthFailure(this.message);\n}`}],whatIs:"Inheritance lets a class absorb the properties and methods of another class, creating a parent-child relationship. Mixins let you add capabilities to a class without a strict parent-child hierarchy -- like plugging in USB accessories. Abstract classes define contracts without implementations. Dart supports single inheritance (one parent) but unlimited mixins. Together, these tools let you share code, enforce contracts, and compose behaviors flexibly.",realWorld:"In team_mvp_kit, inheritance and interfaces are the backbone of Clean Architecture. Abstract repository classes in the domain layer define what operations are available. Concrete classes in the data layer implement those interfaces with real API calls via Dio and local storage via Hive. BLoC classes extend Bloc from the bloc package. Sealed classes like AuthState enable type-safe state management where the compiler ensures you handle every possible state.",code:`abstract class AuthRepository {\n  Future<UserEntity> login(String email, String password);\n  Future<void> logout();\n  Future<bool> isLoggedIn();\n}\n\nmixin CacheManager {\n  final Map<String, dynamic> _cache = {};\n\n  void cacheData(String key, dynamic value) {\n    _cache[key] = value;\n  }\n\n  dynamic getCachedData(String key) {\n    return _cache[key];\n  }\n\n  void clearCache() {\n    _cache.clear();\n  }\n}\n\nclass AuthRepositoryImpl\n    implements AuthRepository\n    with CacheManager {\n  final Dio dio;\n\n  AuthRepositoryImpl({required this.dio});\n\n  @override\n  Future<UserEntity> login(String email, String password) async {\n    final response = await dio.post('/auth/login', data: {\n      'email': email,\n      'password': password,\n    });\n    final user = UserModel.fromJson(response.data);\n    cacheData('current_user', user);\n    return user;\n  }\n\n  @override\n  Future<void> logout() async {\n    await dio.post('/auth/logout');\n    clearCache();\n  }\n\n  @override\n  Future<bool> isLoggedIn() async {\n    return getCachedData('current_user') != null;\n  }\n}`,funFact:"Dart's mixin system was inspired by Strongtalk, an experimental variant of Smalltalk developed at Sun Microsystems in the 1990s. The researchers who created Strongtalk later joined Google and influenced Dart's design. So when you use mixins in Dart, you are using an idea that has been refined for over 30 years.",quiz:[{q:"What keyword creates an inheritance relationship in Dart?",opts:["implements","with","extends","inherits"],ans:2},{q:"What is the main difference between extends and implements?",opts:["extends is faster","implements inherits code, extends does not","extends inherits code, implements only promises an interface","There is no difference"],ans:2},{q:"How do you apply a mixin to a class?",opts:["Using the mixin keyword before the class","Using the with keyword after extends","Using the use keyword","Using the import keyword"],ans:1},{q:"What does an abstract class provide?",opts:["Only static methods","A contract that subclasses must fulfill","Automatic code generation","Database schema definitions"],ans:1},{q:"In team_mvp_kit, why are repositories defined as abstract classes?",opts:["To save memory","To make code run faster","To separate the interface (domain) from implementation (data)","Because Dart requires it"],ans:2}],challenge:"Create an abstract class Vehicle with properties: make (String), year (int), and an abstract method fuelEfficiency(). Create a mixin Electric with a method charge() that prints a message. Create a class Tesla that extends Vehicle, applies the Electric mixin, and implements fuelEfficiency(). Create a class Honda that extends Vehicle with a different fuelEfficiency(). Demonstrate polymorphism by putting both in a List<Vehicle> and calling fuelEfficiency() on each.",resources:[{type:"docs",title:"Dart Inheritance",url:"https://dart.dev/language/extend",source:"dart.dev"},{type:"docs",title:"Dart Mixins",url:"https://dart.dev/language/mixins",source:"dart.dev"},{type:"docs",title:"Abstract Classes in Dart",url:"https://dart.dev/language/class-modifiers#abstract",source:"dart.dev"}],eli5:"Imagine you are building with LEGO. Inheritance is like getting a starter kit from your parent -- you get all their basic pieces and can add your own cool parts on top. A mixin is like borrowing a special LEGO pack from a friend -- you add those pieces to your creation without changing who your parent is. An abstract class is like a building instruction page that says 'put a door here' but does not give you the actual door -- you have to figure out what kind of door to use yourself.",codeWalkthrough:["Define abstract class AuthRepository -- this is the interface that lives in the domain layer","Declare abstract method login that takes email and password, returns Future<UserEntity>","Declare abstract method logout that returns Future<void>","Declare abstract method isLoggedIn that returns Future<bool>","Define mixin CacheManager -- this provides caching capability to any class that uses it","Create a private cache Map to store key-value pairs","Define cacheData method to store a value under a key","Define getCachedData method to retrieve a value by key","Define clearCache method to empty the cache","AuthRepositoryImpl implements AuthRepository and uses CacheManager mixin","Declare a Dio instance for HTTP requests","Constructor requires a Dio instance via named parameter","Implement login: make a POST request to /auth/login with credentials","Parse the response data into a UserModel using fromJson factory","Cache the current user using the mixin's cacheData method","Return the user (UserModel extends UserEntity)","Implement logout: make a POST request to /auth/logout","Clear the cache using the mixin's clearCache method","Implement isLoggedIn: check if current_user exists in the cache","Return true if cached data is not null, false otherwise"],bugChallenge:{code:`abstract class Repository {\n  void save(String data);\n}\n\nclass FileRepository extends Repository {\n  void save(String data) {\n    print('Saving to file: \$data');\n  }\n}\n\nclass DbRepository extends Repository {\n  void save(int data) {\n    print('Saving to database: \$data');\n  }\n}`,hint:"Look at DbRepository's save method signature. Does it match the parent class?",answer:"DbRepository.save takes an int parameter but the abstract class Repository.save requires a String parameter. This will cause a compile error because the override does not match the parent's method signature. Change DbRepository.save to accept String data instead of int data, and add @override annotations."},difficulty:"intermediate",prereqs:[11]},
{id:14,title:"Null Safety",subtitle:"Eliminating the Billion-Dollar Mistake in Dart",analogy:"Null safety is like a postal system that guarantees delivery. Before null safety, sending a letter (calling a method) might go to an empty house (null object) and you would never know until things blew up. With null safety, the post office checks every address before sending. The question mark (?) means 'this address might be empty,' the exclamation mark (!) means 'I guarantee someone lives here,' and late means 'someone will move in before the mail arrives.' In team_mvp_kit, null safety prevents crashes when API responses have missing fields.",points:[{t:"Non-Nullable by Default",d:"In Dart with null safety, variables cannot be null unless you explicitly allow it. A String variable must always contain a string value. This eliminates an entire category of runtime crashes.",code:`String name = 'Alice'; // cannot be null\n// name = null; // COMPILE ERROR`},{t:"Nullable Types with ?",d:"Add a question mark after the type to allow null. This tells Dart and other developers that the value might be absent and must be handled carefully.",code:`String? nickname; // can be null\nprint(nickname); // prints null\nnickname = 'Ally';\nprint(nickname); // prints Ally`},{t:"Null-Aware Access with ?.",d:"The ?. operator calls a method or accesses a property only if the object is not null. If the object is null, the entire expression evaluates to null instead of crashing.",code:`String? name;\nprint(name?.length); // prints null, no crash\nname = 'Alice';\nprint(name?.length); // prints 5`},{t:"Null-Aware Coalescing with ??",d:"The ?? operator provides a fallback value when the left side is null. It is perfect for default values. The ??= operator assigns a value only if the variable is currently null.",code:`String? input;\nString display = input ?? 'Guest';\nprint(display); // Guest\n\ninput ??= 'Default'; // assigns only if null`},{t:"Non-Null Assertion with !",d:"The ! operator tells Dart you are certain a nullable value is not null right now. If you are wrong, it throws a runtime error. Use sparingly and only when you have a strong guarantee.",code:`String? name = getName();\n// I know getName always returns a value here\nprint(name!.length); // throws if name is null`},{t:"Late Variables",d:"The late keyword lets you declare a non-nullable variable without initializing it immediately. You promise Dart it will be initialized before it is ever read. Useful for variables set in initState or setup methods.",code:`class UserScreen extends StatefulWidget {\n  late String userId;\n  @override\n  void initState() {\n    super.initState();\n    userId = getRouteParam('id');\n  }\n}`},{t:"Null Safety in Collections",d:"Collections can hold nullable values: List<String?> means the items can be null. A nullable collection List<String>? means the list itself can be null. These are different concepts.",code:`List<String?> names = ['Alice', null, 'Bob'];\nList<String>? maybeList;\n\n// Filter out nulls:\nfinal nonNull = names.whereType<String>().toList();\nprint(nonNull); // [Alice, Bob]`},{t:"Flow Analysis (Smart Promotion)",d:"Dart's type system is smart enough to 'promote' a nullable variable to non-nullable after a null check. Inside an if-block that checks for null, you can use the variable without ? or !.",code:`void greet(String? name) {\n  if (name == null) {\n    print('Hello, stranger!');\n    return;\n  }\n  // Dart knows name is non-null here\n  print('Hello, \${name.toUpperCase()}!');\n}`},{t:"Required Nullable Parameters",d:"A parameter can be both required and nullable. This means the caller must explicitly pass a value, but that value is allowed to be null. This pattern forces conscious decisions about null values.",code:`void updateUser({required String? nickname}) {\n  // caller must think about it:\n  // updateUser(nickname: null) -- explicit\n  // updateUser(nickname: 'Ally') -- has value\n}`},{t:"Null Safety in team_mvp_kit",d:"API responses often have optional fields. Models in team_mvp_kit use nullable types for optional data and non-nullable types with required for mandatory fields. The fromJson factories handle missing keys gracefully.",code:`class UserModel {\n  final String id;\n  final String name;\n  final String? avatarUrl; // optional\n  final String? bio; // optional\n  UserModel({required this.id, required this.name, this.avatarUrl, this.bio});\n  factory UserModel.fromJson(Map<String, dynamic> json) {\n    return UserModel(\n      id: json['id'] as String,\n      name: json['name'] as String,\n      avatarUrl: json['avatar_url'] as String?,\n      bio: json['bio'] as String?,\n    );\n  }\n}`}],whatIs:"Null safety is Dart's type system feature that distinguishes between values that can be null and values that can never be null. Every type is non-nullable by default. You must explicitly opt in to nullability with a question mark (?). The compiler then enforces null checks at compile time, catching potential null errors before your code ever runs. This eliminates the most common source of runtime crashes in programming -- the 'null reference exception' that Tony Hoare famously called his 'billion-dollar mistake.'",realWorld:"In team_mvp_kit, null safety is critical for handling API data reliably. A user profile from the backend might have a bio field or it might not. By declaring bio as String?, the type system forces every piece of code that touches bio to handle the null case. Without null safety, a missing bio could crash the app when trying to display it. With null safety, the compiler catches this at build time. The Hive local storage layer also benefits -- cached data might be absent, and nullable types make this explicit.",code:`class UserProfile {\n  final String id;\n  final String name;\n  final String email;\n  final String? avatarUrl;\n  final String? bio;\n  final DateTime? lastLoginAt;\n\n  const UserProfile({\n    required this.id,\n    required this.name,\n    required this.email,\n    this.avatarUrl,\n    this.bio,\n    this.lastLoginAt,\n  });\n\n  String get displayName => name;\n\n  String get avatarOrDefault => avatarUrl ?? 'https://ui-avatars.com/api/?name=\$name';\n\n  String get bioExcerpt => bio?.substring(0, 50) ?? 'No bio yet';\n\n  bool get isRecentlyActive {\n    if (lastLoginAt == null) return false;\n    final diff = DateTime.now().difference(lastLoginAt!);\n    return diff.inDays < 7;\n  }\n\n  String describe() {\n    final buffer = StringBuffer()\n      ..writeln('Name: \$name')\n      ..writeln('Email: \$email');\n    if (bio != null) {\n      buffer.writeln('Bio: \$bio');\n    }\n    if (lastLoginAt case final login?) {\n      buffer.writeln('Last login: \$login');\n    }\n    return buffer.toString();\n  }\n}`,funFact:"Tony Hoare, the inventor of the null reference in 1965, called it his 'billion-dollar mistake' because of the countless crashes, security vulnerabilities, and debugging hours it has caused across all programming languages. Dart is one of the few languages that retrofitted sound null safety into an existing language -- most languages with null safety were designed that way from scratch.",quiz:[{q:"In Dart with null safety, what does String? mean?",opts:["A string that might be empty","A string that might be null","A string with a question","An optional parameter"],ans:1},{q:"What does the ?? operator do?",opts:["Checks if something is null","Throws an error if null","Provides a fallback value when the left side is null","Makes a variable nullable"],ans:2},{q:"When should you use the ! operator?",opts:["On every nullable variable","When you want to make a variable nullable","When you are certain a nullable value is not null at that point","When you want to delete a variable"],ans:2},{q:"What does Dart's flow analysis do?",opts:["Analyzes network traffic","Promotes nullable types to non-nullable after null checks","Measures code performance","Tracks data flow between files"],ans:1},{q:"In team_mvp_kit, why would avatarUrl be String? instead of String?",opts:["To save memory","Because URLs are always optional","Because the API might not return an avatar for every user","Because String cannot hold URLs"],ans:2}],challenge:"Create a class ContactCard with: name (String, required), phone (String?, optional), email (String?, optional), and address (String?, optional). Add a getter completeness that returns a percentage (0-100) based on how many optional fields are filled. Add a method summary() that uses null-aware operators to build a description string, showing 'Not provided' for any null fields. Test with a fully filled contact and a minimal one.",resources:[{type:"docs",title:"Understanding Null Safety",url:"https://dart.dev/null-safety/understanding-null-safety",source:"dart.dev"},{type:"docs",title:"Null Safety in Dart",url:"https://dart.dev/null-safety",source:"dart.dev"},{type:"tutorial",title:"Migrating to Null Safety",url:"https://dart.dev/null-safety/migration-guide",source:"dart.dev"}],eli5:"Imagine you have a lunchbox. Without null safety, you might open it expecting a sandwich and find nothing -- oops, you go hungry and your day is ruined. With null safety, lunchboxes come in two types: a guaranteed lunchbox (String) that always has food, and a maybe lunchbox (String?) that might be empty. If you have a maybe lunchbox, the rules say you must check inside before trying to eat. The question mark is like a label that says 'check first!' This way, you never bite into nothing.",codeWalkthrough:["Define UserProfile class with a mix of required and optional fields","id is required and non-nullable -- every user must have an ID","name is required and non-nullable -- every user must have a name","email is required and non-nullable -- every user must have an email","avatarUrl is nullable -- not every user uploads a profile picture","bio is nullable -- users may or may not write a bio","lastLoginAt is nullable -- new users who never logged in have no timestamp","Const constructor with required for non-nullable fields and optional for nullable ones","displayName getter simply returns the name","avatarOrDefault getter uses ?? to fall back to a generated avatar URL if avatarUrl is null","bioExcerpt uses the ?. operator to safely call substring on bio, with ?? for a fallback message","isRecentlyActive first checks if lastLoginAt is null and returns false early","If not null, it uses ! to assert non-null (safe because we just checked) and calculates the time difference","Returns true if the user was active in the last 7 days","The describe method uses StringBuffer for efficient string building","Always includes name and email since they are non-nullable","Uses if (bio != null) to conditionally add the bio line","Uses Dart 3 pattern matching with if-case to extract a non-null lastLoginAt into a local variable","Returns the built string"],bugChallenge:{code:`String getGreeting(String? name) {\n  String greeting = 'Hello, ' + name + '!';\n  return greeting;\n}`,hint:"What happens when you try to concatenate null with a string?",answer:"The + operator cannot be used with a nullable String?. The variable name might be null, and null + '!' would crash. Fix it by using the null coalescing operator: String greeting = 'Hello, \${name ?? \"Guest\"}!'; or by checking for null first with an if statement."},difficulty:"intermediate",prereqs:[5]},
{id:15,title:"Async, Futures & Streams",subtitle:"Handling Things That Take Time in Dart",analogy:"A Future is like ordering food at a restaurant. You place your order (start an async operation), get a receipt/buzzer (the Future object), and can do other things while the kitchen prepares your meal. When the food is ready, the buzzer goes off (the Future completes). A Stream is like a sushi conveyor belt -- items arrive one by one over time, and you pick up each piece as it passes by. In team_mvp_kit, Futures handle API calls via Dio and Streams power real-time updates through BLoC.",points:[{t:"Futures: Values That Arrive Later",d:"A Future<T> represents a value of type T that will be available sometime in the future. It can complete with a value (success) or an error (failure). Every API call, file read, or database query returns a Future.",code:`Future<String> fetchUsername() async {\n  // Simulates a network call\n  await Future.delayed(Duration(seconds: 2));\n  return 'Alice';\n}`},{t:"async and await",d:"Mark a function as async to use await inside it. The await keyword pauses execution until a Future completes, making asynchronous code read like synchronous code. The function still returns a Future to its caller.",code:`Future<void> loadUser() async {\n  print('Loading...');\n  final name = await fetchUsername();\n  print('Hello, \$name!');\n  // Output: Loading... (2s pause) Hello, Alice!\n}`},{t:"Error Handling with try-catch",d:"Wrap await calls in try-catch to handle errors from Futures. This is cleaner than using .catchError() chains and keeps error handling close to the code that might fail.",code:`Future<void> loadData() async {\n  try {\n    final data = await fetchFromApi();\n    print('Got: \$data');\n  } catch (e) {\n    print('Error: \$e');\n  } finally {\n    print('Done loading');\n  }\n}`},{t:"Future.then and Chaining",d:"You can also handle Futures with .then() for a callback-based style. Chain multiple .then() calls for sequential operations. While async/await is preferred for readability, .then() is useful in some patterns.",code:`fetchUsername()\n  .then((name) => print('Hello, \$name'))\n  .catchError((e) => print('Error: \$e'))\n  .whenComplete(() => print('Done'));`},{t:"Running Futures in Parallel",d:"Use Future.wait to run multiple Futures simultaneously and wait for all of them. This is much faster than awaiting each one sequentially when the operations are independent.",code:`Future<void> loadDashboard() async {\n  final results = await Future.wait([\n    fetchUser(),\n    fetchPosts(),\n    fetchNotifications(),\n  ]);\n  // All three completed, results is a List\n}`},{t:"Streams: Multiple Values Over Time",d:"A Stream<T> delivers multiple values over time, unlike a Future which delivers just one. Streams are perfect for real-time data like chat messages, sensor readings, or state changes in BLoC.",code:`Stream<int> countDown(int from) async* {\n  for (var i = from; i >= 0; i--) {\n    await Future.delayed(Duration(seconds: 1));\n    yield i;\n  }\n}`},{t:"Listening to Streams",d:"Use listen() or await for to consume stream values. The await for loop is cleaner and handles cancellation automatically. The listen() method gives you more control with onError and onDone callbacks.",code:`Future<void> watchCountdown() async {\n  await for (final value in countDown(5)) {\n    print(value); // 5, 4, 3, 2, 1, 0\n  }\n  print('Liftoff!');\n}`},{t:"StreamController",d:"A StreamController lets you create your own streams and push values into them manually. This is the mechanism behind BLoC's state emission. Use StreamController.broadcast() when multiple listeners need the same stream.",code:`final controller = StreamController<String>();\ncontroller.stream.listen((data) {\n  print('Received: \$data');\n});\ncontroller.add('Hello');\ncontroller.add('World');\ncontroller.close();`},{t:"Stream Transformations",d:"Streams support map, where, expand, and other transformations just like lists. These create new streams that process each event from the original stream.",code:`final numbers = Stream.fromIterable([1, 2, 3, 4, 5]);\nfinal doubled = numbers\n    .where((n) => n.isOdd)\n    .map((n) => n * 2);\nawait for (final n in doubled) {\n  print(n); // 2, 6, 10\n}`},{t:"Async in team_mvp_kit",d:"API calls through Dio return Futures. BLoC uses Streams to emit state changes. The presentation layer listens to BLoC streams with BlocBuilder. Hive database reads are synchronous but writes can be async.",code:`// In a BLoC class\nFuture<void> _onLoginRequested(\n  LoginRequested event,\n  Emitter<AuthState> emit,\n) async {\n  emit(AuthLoading());\n  try {\n    final user = await authRepository.login(\n      event.email, event.password,\n    );\n    emit(AuthSuccess(user: user));\n  } catch (e) {\n    emit(AuthFailure(message: e.toString()));\n  }\n}`}],whatIs:"Asynchronous programming lets your app do multiple things without freezing. A Future represents a single value that arrives later -- like an API response. A Stream represents a sequence of values that arrive over time -- like real-time updates. The async/await syntax makes asynchronous code look and behave like regular synchronous code, while Dart's event loop handles the scheduling behind the scenes. In Flutter, the UI runs on the main thread, so long operations must be async to prevent jank.",realWorld:"In team_mvp_kit, nearly everything is asynchronous. Dio API calls return Futures that carry response data or errors. BLoC event handlers are async functions that emit loading states, await repository calls, then emit success or failure states. Firebase authentication operations are Futures. Hive cache reads use Futures for the initial box opening. go_router navigation guards await authentication checks. Without async/await, the app would freeze on every network call, making it unusable.",code:`class AuthBloc extends Bloc<AuthEvent, AuthState> {\n  final AuthRepository authRepository;\n\n  AuthBloc({required this.authRepository}) : super(AuthInitial()) {\n    on<LoginRequested>(_onLoginRequested);\n    on<LogoutRequested>(_onLogoutRequested);\n    on<CheckAuthStatus>(_onCheckAuthStatus);\n  }\n\n  Future<void> _onLoginRequested(\n    LoginRequested event,\n    Emitter<AuthState> emit,\n  ) async {\n    emit(AuthLoading());\n    try {\n      final user = await authRepository.login(\n        event.email,\n        event.password,\n      );\n      emit(AuthSuccess(user: user));\n    } catch (e) {\n      emit(AuthFailure(message: e.toString()));\n    }\n  }\n\n  Future<void> _onLogoutRequested(\n    LogoutRequested event,\n    Emitter<AuthState> emit,\n  ) async {\n    await authRepository.logout();\n    emit(AuthInitial());\n  }\n\n  Future<void> _onCheckAuthStatus(\n    CheckAuthStatus event,\n    Emitter<AuthState> emit,\n  ) async {\n    final isLoggedIn = await authRepository.isLoggedIn();\n    if (isLoggedIn) {\n      final user = await authRepository.getCurrentUser();\n      emit(AuthSuccess(user: user));\n    } else {\n      emit(AuthInitial());\n    }\n  }\n}`,funFact:"Dart uses a single-threaded event loop, similar to JavaScript. This means there is no parallel execution on the main isolate -- async operations just schedule work and come back to it later. However, Dart also supports Isolates for true parallel computation. Flutter's engine spawns a separate isolate for heavy tasks like JSON parsing on large datasets, keeping the UI buttery smooth at 60fps.",quiz:[{q:"What does a Future<String> represent?",opts:["A string that exists right now","A function that returns a string","A string value that will be available sometime in the future","A string that might be null"],ans:2},{q:"What is the difference between a Future and a Stream?",opts:["Futures are faster than Streams","A Future delivers one value, a Stream delivers multiple values over time","Streams only work with integers","Futures are for errors, Streams are for success"],ans:1},{q:"What does the await keyword do?",opts:["Makes code run faster","Pauses execution until a Future completes","Creates a new thread","Cancels a running operation"],ans:1},{q:"How do you run multiple Futures in parallel?",opts:["Use Future.parallel()","Call them all with await one after another","Use Future.wait() with a list of Futures","Use the parallel keyword"],ans:2},{q:"In team_mvp_kit's BLoC, why is the event handler async?",opts:["Because Dart requires all methods to be async","Because it needs to await repository calls that return Futures","Because BLoC only works with async code","Because the UI needs async to render"],ans:1}],challenge:"Create a function fetchWeather(String city) that returns Future<Map<String, dynamic>> simulating an API call with Future.delayed. Create a Stream<String> weatherAlerts() using async* and yield that emits 3 weather alerts with 1-second delays. Write a main function that: (1) calls fetchWeather and prints the result, (2) listens to weatherAlerts and prints each alert, and (3) demonstrates error handling with try-catch.",resources:[{type:"docs",title:"Dart Asynchronous Programming",url:"https://dart.dev/libraries/async/async-await",source:"dart.dev"},{type:"docs",title:"Dart Streams",url:"https://dart.dev/libraries/async/using-streams",source:"dart.dev"},{type:"tutorial",title:"Futures and Error Handling",url:"https://dart.dev/libraries/async/futures-error-handling",source:"dart.dev"}],eli5:"Imagine you are at a pizza shop. You order a pizza (that is creating a Future). While it bakes, you sit down and play a game on your phone -- you do not stand at the counter staring at the oven. When the pizza is ready, they call your name (the Future completes) and you go pick it up. Now imagine a conveyor belt of small snacks coming out one by one -- that is a Stream. You grab each snack as it arrives. The await keyword is like saying 'I will wait here until my pizza is ready before I order dessert.'",codeWalkthrough:["Define AuthBloc class extending Bloc with AuthEvent and AuthState type parameters","Declare authRepository field -- this is injected via the constructor","Constructor takes required authRepository and calls super with AuthInitial state","Register event handler for LoginRequested events","Register event handler for LogoutRequested events","Register event handler for CheckAuthStatus events","The _onLoginRequested handler is async because it calls the repository","Emit AuthLoading state to show a spinner in the UI","Start try block for error handling","Await the login call to authRepository -- this is the async Dio API call","When login succeeds, emit AuthSuccess with the user data","Catch any exception from the login attempt","Emit AuthFailure with the error message for the UI to display","The _onLogoutRequested handler is also async","Await the logout call to clear the session on the server","Emit AuthInitial state to return to the login screen","The _onCheckAuthStatus handler checks if the user is already logged in","Await isLoggedIn to check stored credentials","If logged in, await getCurrentUser to fetch user data","Emit AuthSuccess with the cached user","If not logged in, emit AuthInitial to show the login screen"],bugChallenge:{code:`Future<String> fetchData() async {\n  final response = await http.get(Uri.parse('https://api.example.com/data'));\n  if (response.statusCode == 200) {\n    return response.body;\n  }\n}\n\nvoid main() {\n  final data = fetchData();\n  print(data);\n}`,hint:"Two problems: one with the return type and one with how the function is called in main.",answer:"Two bugs: (1) fetchData does not return a value when statusCode is not 200 -- add an else branch that throws an exception or returns a default. The function promises to return String but might return null. (2) In main, fetchData() returns a Future<String>, not a String. You need to either use await with an async main, or use .then(). Fix: async main() with await, and add else throw Exception('Failed to load')."},difficulty:"intermediate",prereqs:[10]},
{id:16,title:"Everything is a Widget",subtitle:"The Building Blocks of Every Flutter App",analogy:"In Flutter, widgets are like LEGO bricks -- everything visible on screen is built from widgets snapped together. A Text widget is a 1x1 brick. A Column widget is a baseplate that holds bricks vertically. A Container is a box with color and size. Your entire app is just one giant LEGO structure made of smaller pieces. In team_mvp_kit, the screen you see is a tree of widgets -- MaterialApp at the top, Scaffold below it, then columns, rows, buttons, and text all the way down to every pixel.",points:[{t:"What is a Widget?",d:"A widget is an immutable description of part of the user interface. It is not the actual pixels on screen -- it is a lightweight blueprint that Flutter's engine uses to paint the UI. Widgets are cheap to create and rebuild.",code:`// Everything is a widget!\nText('Hello')        // displays text\nIcon(Icons.star)     // displays an icon\nElevatedButton(      // a clickable button\n  onPressed: () {},\n  child: Text('Tap'),\n)`},{t:"The Widget Tree",d:"Widgets are nested inside each other forming a tree structure. The root widget is usually MaterialApp or CupertinoApp. Every widget has a parent (except the root) and can have children. Flutter walks this tree to build the UI.",code:`MaterialApp(\n  home: Scaffold(\n    appBar: AppBar(title: Text('My App')),\n    body: Center(\n      child: Text('Hello, World!'),\n    ),\n  ),\n)`},{t:"Composition Over Inheritance",d:"Flutter favors composition: you build complex widgets by combining simple ones. Instead of creating a FancyButton that inherits from Button, you wrap a Button in a Container with styling. This makes widgets flexible and reusable.",code:`Container(\n  padding: EdgeInsets.all(16),\n  decoration: BoxDecoration(\n    color: Colors.blue,\n    borderRadius: BorderRadius.circular(8),\n  ),\n  child: Text('Styled Text'),\n)`},{t:"The build Method",d:"Every widget must implement a build method that returns a widget tree describing what this widget looks like. Flutter calls build whenever the widget needs to update. The returned tree can be deeply nested.",code:`class WelcomeCard extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Card(\n      child: Padding(\n        padding: EdgeInsets.all(16),\n        child: Text('Welcome!'),\n      ),\n    );\n  }\n}`},{t:"BuildContext",d:"The build method receives a BuildContext that tells the widget where it sits in the tree. Context is used to access theme data, navigate, show dialogs, and find parent widgets. Every widget has its own context.",code:`Widget build(BuildContext context) {\n  final theme = Theme.of(context);\n  return Text(\n    'Themed Text',\n    style: theme.textTheme.headlineMedium,\n  );\n}`},{t:"Visible vs Invisible Widgets",d:"Some widgets paint pixels (Text, Image, Icon). Others only affect layout or behavior without painting anything themselves (Padding, Center, GestureDetector). Both are equally important -- layout widgets control how visible widgets are positioned.",code:`Padding(         // invisible: adds space\n  padding: EdgeInsets.all(8),\n  child: Center(  // invisible: centers child\n    child: Text(  // visible: paints text\n      'Hello',\n    ),\n  ),\n)`},{t:"Key Concept: Widgets are Immutable",d:"Once created, a widget cannot change. To update the UI, Flutter creates new widget instances and compares them to the old ones. This diffing process is fast because widgets are lightweight descriptions, not heavy UI objects.",code:`// This creates a NEW Text widget every rebuild\n// Flutter compares old and new to minimize actual UI changes\nText('Count: \$counter')`},{t:"Widget Categories",d:"Flutter widgets fall into categories: structural (Scaffold, AppBar), layout (Row, Column, Stack), presentation (Text, Image), input (TextField, Checkbox), scrolling (ListView, GridView), and styling (Theme, Container).",code:`// Layout widget containing presentation widgets\nRow(\n  children: [\n    Icon(Icons.star, color: Colors.amber),\n    SizedBox(width: 8),\n    Text('Favorite'),\n  ],\n)`},{t:"The Three Trees",d:"Flutter maintains three parallel trees: the Widget tree (your code), the Element tree (manages lifecycle), and the RenderObject tree (does actual layout and painting). You only write the Widget tree; Flutter handles the rest.",code:`// You write this (Widget tree):\nCenter(\n  child: Text('Hello'),\n)\n// Flutter creates Element and RenderObject\n// trees automatically from your widgets`}],whatIs:"In Flutter, everything on screen is a widget. A widget is an immutable description of a piece of UI. Widgets are organized in a tree structure where parent widgets contain child widgets. When data changes, Flutter rebuilds the widget tree, compares it to the previous version, and efficiently updates only the parts that changed. This declarative approach means you describe what the UI should look like for a given state, and Flutter figures out how to make it happen.",realWorld:"In team_mvp_kit, the entire app is a widget tree. MaterialApp is the root. go_router provides navigation widgets. Each screen is a StatelessWidget or StatefulWidget. BlocBuilder widgets listen to BLoC state and rebuild their subtree when state changes. Every button, text field, list item, and icon is a widget. Understanding the widget tree is essential because it determines how data flows down (via constructors) and events flow up (via callbacks). Clean Architecture in team_mvp_kit keeps business logic out of widgets, making the widget layer a pure UI description.",code:`import 'package:flutter/material.dart';\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Widget Demo',\n      theme: ThemeData(\n        colorSchemeSeed: Colors.blue,\n        useMaterial3: true,\n      ),\n      home: const HomeScreen(),\n    );\n  }\n}\n\nclass HomeScreen extends StatelessWidget {\n  const HomeScreen({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('Home'),\n      ),\n      body: const Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: [\n            Icon(Icons.flutter_dash, size: 64),\n            SizedBox(height: 16),\n            Text('Everything is a Widget!'),\n          ],\n        ),\n      ),\n    );\n  }\n}`,funFact:"Flutter's widget rebuilding is incredibly fast because widgets are just lightweight Dart objects. The Flutter team benchmarked creating 10,000 widget objects and it took less than a millisecond. The real work happens in the RenderObject tree, which is only updated when actual visual changes are detected. This is why Flutter can hit 60fps (or even 120fps) consistently.",quiz:[{q:"In Flutter, what is a widget?",opts:["A pixel on the screen","A heavyweight UI component","An immutable description of part of the UI","A CSS class"],ans:2},{q:"What is the widget tree?",opts:["A file system structure","A nested hierarchy of widgets that describes the entire UI","A database schema","A list of all available widgets"],ans:1},{q:"Why are widgets immutable in Flutter?",opts:["Because Dart does not support mutation","To save memory","So Flutter can efficiently diff old and new trees to minimize updates","Because immutable objects are easier to type"],ans:2},{q:"What does the build method return?",opts:["A string of HTML","A widget tree describing what this widget looks like","A list of pixels","A render object"],ans:1}],challenge:"Create a widget tree on paper (or in code) for a simple profile card. It should have: a circular avatar image at the top, a name in bold below it, an email in grey below that, and a row of three icon buttons (call, email, message) at the bottom. Think about which widgets you need: Column, Row, CircleAvatar, Text, IconButton, SizedBox for spacing. Then implement it as a StatelessWidget.",resources:[{type:"docs",title:"Introduction to Widgets",url:"https://docs.flutter.dev/development/ui/widgets-intro",source:"docs.flutter.dev"},{type:"docs",title:"Widget Catalog",url:"https://docs.flutter.dev/reference/widgets",source:"docs.flutter.dev"},{type:"tutorial",title:"Flutter Widget of the Week",url:"https://www.youtube.com/playlist?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG",source:"YouTube - Flutter"}],eli5:"Think of building a house out of blocks. Every single piece is a block (widget). The walls are blocks, the windows are blocks, even the door handle is a block. You cannot change a block once you place it -- but you can knock it down and put a different one in its place super fast. That is exactly what Flutter does. Your whole app is made of these tiny blocks stacked inside each other. When something changes, Flutter quickly swaps out only the blocks that are different, like a speed-builder rebuilding part of a LEGO house in the blink of an eye.",codeWalkthrough:["Import the Flutter material design library","Define MyApp as a StatelessWidget -- the root of our app","Add const constructor with super.key for widget identity","Override build method which receives BuildContext","Return MaterialApp widget -- this is the root of the widget tree","Set the app title to Widget Demo","Configure the theme with a blue color scheme and Material 3","Set HomeScreen as the home route -- the first screen users see","Define HomeScreen as a StatelessWidget with const constructor","Override build to describe the home screen's UI","Return Scaffold -- provides basic app structure with app bar and body","Create an AppBar with a Text title widget","Set the body to a Center widget which centers its child","Inside Center, use a Column to stack children vertically","Set mainAxisAlignment to center so children are vertically centered","Add a Flutter Dash icon with size 64","Add a SizedBox with height 16 for spacing between icon and text","Add a Text widget displaying our message"],bugChallenge:{code:`class MyWidget extends StatelessWidget {\n  String title = 'Hello';\n\n  @override\n  Widget build(BuildContext context) {\n    return Text(title);\n  }\n}`,hint:"Widgets are supposed to be immutable. What is wrong with how title is declared?",answer:"The title property is not final, which violates widget immutability. StatelessWidget properties must be final because widgets are rebuilt rather than mutated. Fix: change to final String title = 'Hello'; or better yet, accept it as a constructor parameter: final String title; MyWidget({required this.title});"},difficulty:"beginner",prereqs:[4]},
{id:17,title:"StatelessWidget",subtitle:"Simple Widgets That Never Change Their Mind",analogy:"A StatelessWidget is like a printed poster on a wall. Once it is printed, the content does not change. If you want different text, you print a new poster and replace the old one. A StatelessWidget describes UI based only on the data it receives through its constructor -- it has no internal memory. In team_mvp_kit, many UI components like labels, icons, cards, and display widgets are stateless because they just render whatever data is passed to them.",points:[{t:"Defining a StatelessWidget",d:"Extend StatelessWidget and override the build method. The build method returns a widget tree. StatelessWidgets are the simplest and most common widget type in Flutter.",code:`class Greeting extends StatelessWidget {\n  const Greeting({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return const Text('Hello, Flutter!');\n  }\n}`},{t:"Accepting Data via Constructor",d:"Pass data into a StatelessWidget through its constructor. All properties should be final because the widget is immutable. The parent widget controls what data flows in.",code:`class UserGreeting extends StatelessWidget {\n  final String name;\n  const UserGreeting({super.key, required this.name});\n\n  @override\n  Widget build(BuildContext context) {\n    return Text('Hello, \$name!');\n  }\n}`},{t:"The const Constructor Advantage",d:"Marking a widget constructor as const tells Flutter that identical widgets with the same parameters are the same object. Flutter can skip rebuilding const widgets entirely, which is a major performance optimization.",code:`// These two are the SAME object in memory\nconst Text('Hello')\nconst Text('Hello')\n\n// Without const, two separate objects\nText('Hello')\nText('Hello')`},{t:"When to Use StatelessWidget",d:"Use StatelessWidget when the UI depends only on the constructor parameters and the BuildContext. If the widget needs to change over time based on user interaction or data updates, use StatefulWidget instead.",code:`// Good: depends only on input data\nclass PriceTag extends StatelessWidget {\n  final double price;\n  const PriceTag({super.key, required this.price});\n\n  @override\n  Widget build(BuildContext context) {\n    return Text('\\\$\${price.toStringAsFixed(2)}');\n  }\n}`},{t:"Composing Larger Widgets",d:"Build complex UIs by composing multiple StatelessWidgets together. Each small widget handles one concern, making code readable, testable, and reusable.",code:`class ProductCard extends StatelessWidget {\n  final String name;\n  final double price;\n  const ProductCard({super.key, required this.name, required this.price});\n\n  @override\n  Widget build(BuildContext context) {\n    return Card(\n      child: Column(\n        children: [\n          Text(name, style: Theme.of(context).textTheme.titleMedium),\n          PriceTag(price: price),\n        ],\n      ),\n    );\n  }\n}`},{t:"Using BuildContext",d:"The BuildContext gives you access to the widget's position in the tree. Use it to read theme data, screen size, localization, and to navigate. Never store context in a variable outside of build.",code:`@override\nWidget build(BuildContext context) {\n  final screenWidth = MediaQuery.of(context).size.width;\n  final textTheme = Theme.of(context).textTheme;\n  return Text(\n    'Screen: \${screenWidth.round()}px',\n    style: textTheme.bodyLarge,\n  );\n}`},{t:"Callback Parameters",d:"StatelessWidgets can accept function callbacks to communicate with parent widgets. The child widget calls the callback when something happens, and the parent decides what to do.",code:`class CustomButton extends StatelessWidget {\n  final String label;\n  final VoidCallback onPressed;\n  const CustomButton({super.key, required this.label, required this.onPressed});\n\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      onPressed: onPressed,\n      child: Text(label),\n    );\n  }\n}`},{t:"StatelessWidget Lifecycle",d:"A StatelessWidget has a simple lifecycle: it is created, build is called, and it displays on screen. When the parent rebuilds with new data, a new instance is created and build runs again. There are no lifecycle hooks like initState.",code:`class SimpleLabel extends StatelessWidget {\n  final String text;\n  const SimpleLabel({super.key, required this.text});\n\n  // No initState, no dispose, no setState\n  // Just build!\n  @override\n  Widget build(BuildContext context) {\n    return Text(text);\n  }\n}`},{t:"Stateless in team_mvp_kit",d:"In Clean Architecture, presentation layer widgets are often stateless because BLoC handles the state. BlocBuilder wraps stateless-like rendering: it rebuilds when BLoC state changes, but the widget itself holds no state.",code:`class UserAvatar extends StatelessWidget {\n  final String? imageUrl;\n  final String name;\n  const UserAvatar({super.key, this.imageUrl, required this.name});\n\n  @override\n  Widget build(BuildContext context) {\n    return CircleAvatar(\n      backgroundImage: imageUrl != null\n          ? NetworkImage(imageUrl!)\n          : null,\n      child: imageUrl == null\n          ? Text(name[0].toUpperCase())\n          : null,\n    );\n  }\n}`}],whatIs:"A StatelessWidget is a widget that describes part of the UI based solely on its configuration (constructor parameters) and the BuildContext. It has no mutable state -- once created, it cannot change itself. When the parent provides new data, Flutter creates a new instance and calls build again. StatelessWidgets are the workhorse of Flutter apps: simple, predictable, and efficient. They are easy to test because given the same inputs, they always produce the same output.",realWorld:"In team_mvp_kit, many custom widgets are stateless. Display components like UserAvatar, ErrorMessage, LoadingIndicator, and EmptyState are StatelessWidgets because they just render data they receive. Even screens that show dynamic data can be StatelessWidgets when paired with BlocBuilder -- the BLoC owns the state, and the widget just renders whatever state it receives. This separation of concerns is a key benefit of Clean Architecture: widgets stay simple and testable.",code:`import 'package:flutter/material.dart';\n\nclass UserProfileCard extends StatelessWidget {\n  final String name;\n  final String email;\n  final String? avatarUrl;\n  final VoidCallback? onTap;\n\n  const UserProfileCard({\n    super.key,\n    required this.name,\n    required this.email,\n    this.avatarUrl,\n    this.onTap,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    final theme = Theme.of(context);\n\n    return Card(\n      elevation: 2,\n      child: InkWell(\n        onTap: onTap,\n        borderRadius: BorderRadius.circular(12),\n        child: Padding(\n          padding: const EdgeInsets.all(16),\n          child: Row(\n            children: [\n              CircleAvatar(\n                radius: 28,\n                backgroundImage: avatarUrl != null\n                    ? NetworkImage(avatarUrl!)\n                    : null,\n                child: avatarUrl == null\n                    ? Text(\n                        name[0].toUpperCase(),\n                        style: theme.textTheme.titleLarge,\n                      )\n                    : null,\n              ),\n              const SizedBox(width: 16),\n              Expanded(\n                child: Column(\n                  crossAxisAlignment: CrossAxisAlignment.start,\n                  children: [\n                    Text(\n                      name,\n                      style: theme.textTheme.titleMedium,\n                    ),\n                    const SizedBox(height: 4),\n                    Text(\n                      email,\n                      style: theme.textTheme.bodyMedium?.copyWith(\n                        color: theme.colorScheme.onSurfaceVariant,\n                      ),\n                    ),\n                  ],\n                ),\n              ),\n              if (onTap != null)\n                const Icon(Icons.chevron_right),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}`,funFact:"The Flutter team at Google recommends that about 80% of your custom widgets should be StatelessWidgets. When you use state management solutions like BLoC, Provider, or Riverpod, even screens with dynamic data are rendered by stateless widgets that subscribe to external state. The fewer StatefulWidgets you have, the easier your app is to debug and test.",quiz:[{q:"What makes a StatelessWidget 'stateless'?",opts:["It has no constructor","It cannot display data","It has no mutable internal state -- it only depends on constructor parameters","It cannot be part of a widget tree"],ans:2},{q:"Why should StatelessWidget properties be marked final?",opts:["To make them faster","Because widgets are immutable and should not change after creation","Because Dart requires all variables to be final","To make them private"],ans:1},{q:"What is the benefit of using const constructors on widgets?",opts:["They use less code","Flutter can reuse identical instances and skip unnecessary rebuilds","They make the widget bigger","They enable animations"],ans:1},{q:"When should you NOT use a StatelessWidget?",opts:["When displaying text","When the widget needs to maintain and change its own internal state","When receiving data from a parent","When using themes"],ans:1}],challenge:"Build a reusable StatelessWidget called InfoCard that takes: title (String), description (String), icon (IconData), and an optional onTap (VoidCallback?). It should display as a Card with a ListTile-like layout: icon on the left, title and description stacked on the right, and a chevron arrow on the right if onTap is provided. Use Theme.of(context) for styling. Then create a screen that shows three InfoCard widgets in a Column.",resources:[{type:"docs",title:"StatelessWidget Class",url:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html",source:"api.flutter.dev"},{type:"docs",title:"Flutter Layouts",url:"https://docs.flutter.dev/development/ui/layout",source:"docs.flutter.dev"},{type:"tutorial",title:"Your First Flutter App",url:"https://docs.flutter.dev/get-started/codelab",source:"docs.flutter.dev"}],eli5:"Imagine a name tag at a party. Someone writes your name on it and sticks it to your shirt. The name tag does not think or change on its own -- it just shows whatever was written on it. If you want a different name, you need a whole new name tag. That is a StatelessWidget. It gets information when it is created (your name), shows it (the text on the tag), and that is it. If the information needs to change, the old name tag is tossed and a new one is made. Simple, right?",codeWalkthrough:["Import the Flutter material library","Define UserProfileCard extending StatelessWidget","Declare final String name -- the user's display name, required","Declare final String email -- the user's email, required","Declare final String? avatarUrl -- optional avatar image URL","Declare final VoidCallback? onTap -- optional tap handler for navigation","Const constructor with super.key and named parameters","Override the build method, receiving BuildContext","Get the current theme for consistent styling","Return a Card widget with elevation for a shadow effect","Wrap content in InkWell for a tap ripple effect, only active if onTap is provided","Set borderRadius on InkWell to match the card's rounded corners","Add Padding of 16 pixels on all sides","Use a Row to lay out avatar, text, and chevron horizontally","Create a CircleAvatar with radius 28 for the profile picture","If avatarUrl is not null, use NetworkImage to load the avatar","If avatarUrl is null, show the first letter of the name as fallback","Add a SizedBox with width 16 for spacing between avatar and text","Wrap the text Column in Expanded so it takes remaining horizontal space","Set crossAxisAlignment to start so text aligns left","Display the name with titleMedium text style","Add a small SizedBox for vertical spacing between name and email","Display email with bodyMedium style in a muted color","Conditionally show a chevron_right icon only if onTap is provided"],bugChallenge:{code:`class NameTag extends StatelessWidget {\n  String name;\n\n  NameTag({required this.name});\n\n  @override\n  Widget build(BuildContext context) {\n    name = name.toUpperCase();\n    return Text(name);\n  }\n}`,hint:"StatelessWidget properties should be immutable. What two things violate this rule?",answer:"Two bugs: (1) name is not final -- StatelessWidget properties must be final because widgets are immutable. (2) The build method tries to modify name with name = name.toUpperCase(), but you should never mutate widget properties. Fix: make name final and compute the uppercase version in a local variable: final display = name.toUpperCase(); then use display in Text."},difficulty:"beginner",prereqs:[16]},
{id:18,title:"StatefulWidget & setState",subtitle:"Widgets That Remember and React",analogy:"A StatefulWidget is like a whiteboard in a classroom. The board frame (the widget) stays the same, but the content written on it (the state) can be erased and rewritten anytime. When a teacher writes new information (setState), the students (Flutter framework) see the update and react. In team_mvp_kit, StatefulWidgets are used for local UI state like form inputs, animations, and tab selections -- while bigger state lives in BLoC.",points:[{t:"StatefulWidget Structure",d:"A StatefulWidget is split into two classes: the widget class (immutable, like a StatelessWidget) and a State class (mutable, holds the changing data). The widget creates its state via createState().",code:`class Counter extends StatefulWidget {\n  const Counter({super.key});\n\n  @override\n  State<Counter> createState() => _CounterState();\n}\n\nclass _CounterState extends State<Counter> {\n  int count = 0;\n\n  @override\n  Widget build(BuildContext context) {\n    return Text('Count: \$count');\n  }\n}`},{t:"setState: Triggering Rebuilds",d:"Call setState to tell Flutter that state has changed and the UI needs to update. Pass a callback function that modifies the state variables. Flutter then calls build again with the new values.",code:`void _increment() {\n  setState(() {\n    count++;\n  });\n}\n\nvoid _reset() {\n  setState(() {\n    count = 0;\n  });\n}`},{t:"initState: One-Time Setup",d:"Override initState to run code once when the state object is first created. Use it for initializing controllers, starting timers, or subscribing to streams. Always call super.initState() first.",code:`class TimerWidget extends StatefulWidget {\n  const TimerWidget({super.key});\n  @override\n  State<TimerWidget> createState() => _TimerWidgetState();\n}\n\nclass _TimerWidgetState extends State<TimerWidget> {\n  late Timer _timer;\n  int _seconds = 0;\n\n  @override\n  void initState() {\n    super.initState();\n    _timer = Timer.periodic(\n      const Duration(seconds: 1),\n      (_) => setState(() => _seconds++),\n    );\n  }\n}`},{t:"dispose: Cleanup",d:"Override dispose to clean up resources when the widget is removed from the tree. Cancel timers, close streams, dispose controllers. Always call super.dispose() last. Forgetting dispose causes memory leaks.",code:`@override\nvoid dispose() {\n  _timer.cancel();\n  _textController.dispose();\n  super.dispose();\n}`},{t:"didUpdateWidget: Reacting to Parent Changes",d:"Called when the parent widget rebuilds and passes new configuration. Compare old and new widget properties to decide if state needs updating. Use this instead of recreating the whole state.",code:`@override\nvoid didUpdateWidget(Counter oldWidget) {\n  super.didUpdateWidget(oldWidget);\n  if (widget.initialValue != oldWidget.initialValue) {\n    setState(() {\n      count = widget.initialValue;\n    });\n  }\n}`},{t:"Accessing Widget Properties from State",d:"Inside the State class, use widget.propertyName to access the StatefulWidget's constructor parameters. The widget property always points to the current widget instance.",code:`class GreetingCounter extends StatefulWidget {\n  final String name;\n  const GreetingCounter({super.key, required this.name});\n  @override\n  State<GreetingCounter> createState() => _GreetingCounterState();\n}\n\nclass _GreetingCounterState extends State<GreetingCounter> {\n  int taps = 0;\n  @override\n  Widget build(BuildContext context) {\n    return Text('\${widget.name} tapped \$taps times');\n  }\n}`},{t:"When to Use StatefulWidget",d:"Use StatefulWidget for local, ephemeral UI state: toggle switches, form inputs, animations, scroll positions, tab indices. For app-wide or shared state, use BLoC, Provider, or other state management solutions.",code:`// Good uses of StatefulWidget:\n// - Text field input tracking\n// - Animation controllers\n// - Toggle/switch states\n// - Current tab index\n// - Expandable/collapsible sections\n\n// Use BLoC instead for:\n// - User authentication state\n// - API data\n// - Shopping cart contents`},{t:"TextEditingController Example",d:"A common use of StatefulWidget is managing text input. The TextEditingController holds the current text value and must be disposed when the widget is removed.",code:`class SearchBox extends StatefulWidget {\n  const SearchBox({super.key});\n  @override\n  State<SearchBox> createState() => _SearchBoxState();\n}\n\nclass _SearchBoxState extends State<SearchBox> {\n  final _controller = TextEditingController();\n\n  @override\n  void dispose() {\n    _controller.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return TextField(\n      controller: _controller,\n      decoration: const InputDecoration(hintText: 'Search...'),\n    );\n  }\n}`},{t:"setState Rules",d:"Never call setState after dispose (check mounted first). Never call setState inside build. Keep the setState callback synchronous -- do async work before calling setState with the result. Minimize what changes inside setState for clarity.",code:`Future<void> _loadData() async {\n  final data = await fetchData(); // async work first\n  if (!mounted) return; // check still alive\n  setState(() {\n    _data = data; // sync assignment only\n  });\n}`}],whatIs:"A StatefulWidget is a widget that can change over time. It is split into two objects: an immutable widget (created fresh each rebuild) and a mutable State object (persists across rebuilds). The State object holds mutable variables and a build method. When you call setState(), Flutter marks the widget as dirty and schedules a rebuild. On the next frame, build() runs with the updated state, and Flutter efficiently patches the UI. StatefulWidgets are essential for any UI element that responds to user interaction.",realWorld:"In team_mvp_kit, StatefulWidgets handle local UI concerns. A login form uses StatefulWidget to manage TextEditingControllers and toggle password visibility. A settings screen uses it for switch toggles. Animation controllers require StatefulWidget because they need initState for setup and dispose for cleanup. However, the project minimizes StatefulWidgets by moving most state into BLoC -- screens are often StatelessWidgets wrapping BlocBuilder, with only truly local state (like scroll position) in StatefulWidgets.",code:`import 'package:flutter/material.dart';\n\nclass TodoItem extends StatefulWidget {\n  final String title;\n  final bool initialCompleted;\n  final ValueChanged<bool> onToggle;\n\n  const TodoItem({\n    super.key,\n    required this.title,\n    this.initialCompleted = false,\n    required this.onToggle,\n  });\n\n  @override\n  State<TodoItem> createState() => _TodoItemState();\n}\n\nclass _TodoItemState extends State<TodoItem>\n    with SingleTickerProviderStateMixin {\n  late bool _isCompleted;\n  late AnimationController _animController;\n  late Animation<double> _scaleAnimation;\n\n  @override\n  void initState() {\n    super.initState();\n    _isCompleted = widget.initialCompleted;\n    _animController = AnimationController(\n      duration: const Duration(milliseconds: 200),\n      vsync: this,\n    );\n    _scaleAnimation = Tween<double>(begin: 1.0, end: 0.95).animate(\n      CurvedAnimation(parent: _animController, curve: Curves.easeInOut),\n    );\n  }\n\n  @override\n  void dispose() {\n    _animController.dispose();\n    super.dispose();\n  }\n\n  void _toggle() {\n    setState(() {\n      _isCompleted = !_isCompleted;\n    });\n    widget.onToggle(_isCompleted);\n    _animController.forward().then((_) => _animController.reverse());\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    final theme = Theme.of(context);\n    return ScaleTransition(\n      scale: _scaleAnimation,\n      child: Card(\n        child: ListTile(\n          leading: Checkbox(\n            value: _isCompleted,\n            onChanged: (_) => _toggle(),\n          ),\n          title: Text(\n            widget.title,\n            style: TextStyle(\n              decoration: _isCompleted\n                  ? TextDecoration.lineThrough\n                  : TextDecoration.none,\n              color: _isCompleted\n                  ? theme.colorScheme.onSurface.withOpacity(0.5)\n                  : theme.colorScheme.onSurface,\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}`,funFact:"Flutter's State objects outlive their StatefulWidget instances. When a parent rebuilds and creates a new StatefulWidget, Flutter reuses the existing State object and just updates its widget reference. This is why the State class has a widget getter -- it always points to the latest widget. The State object only dies when the widget is removed from the tree entirely.",quiz:[{q:"Why is StatefulWidget split into two classes?",opts:["To make the code longer","Because the widget is immutable but state needs to be mutable","Because Dart cannot have mutable classes","To separate HTML from CSS"],ans:1},{q:"What does setState do?",opts:["Creates a new widget","Destroys the current state","Marks the widget as dirty and schedules a rebuild","Sends data to the server"],ans:2},{q:"When is initState called?",opts:["Every time build runs","Only once when the State is first created","When the parent widget changes","When the app starts"],ans:1},{q:"Why must you call dispose on controllers?",opts:["To make the code look professional","To prevent memory leaks from resources that outlive the widget","Because Dart requires it for all objects","To trigger a final rebuild"],ans:1},{q:"In team_mvp_kit, when should you use StatefulWidget vs BLoC?",opts:["Always use StatefulWidget","Always use BLoC","StatefulWidget for local UI state, BLoC for shared app state","They are the same thing"],ans:2}],challenge:"Build a StopWatch widget using StatefulWidget. It should have: (1) a text display showing elapsed seconds with one decimal place, (2) a Start/Stop toggle button, (3) a Reset button that appears only when the stopwatch is running or has a non-zero time. Use Timer.periodic in initState (started conditionally) and clean it up in dispose. Use setState to update the display every 100 milliseconds.",resources:[{type:"docs",title:"StatefulWidget Class",url:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html",source:"api.flutter.dev"},{type:"docs",title:"State Class Lifecycle",url:"https://api.flutter.dev/flutter/widgets/State-class.html",source:"api.flutter.dev"},{type:"tutorial",title:"Adding Interactivity",url:"https://docs.flutter.dev/development/ui/interactive",source:"docs.flutter.dev"}],eli5:"Remember the whiteboard analogy? A StatelessWidget is a poster -- print it once and it stays the same forever. A StatefulWidget is a whiteboard. The frame (the widget class) stays on the wall, but the writing (the State class) can change. When you erase something and write new words (setState), everyone in the room sees the update. initState is like writing the first thing on the board when class starts. dispose is like erasing the board when class ends. You only use a whiteboard when you actually need to change what is written -- if the content never changes, just use a poster (StatelessWidget).",codeWalkthrough:["Import Flutter material library","Define TodoItem as a StatefulWidget with title, initialCompleted, and onToggle callback","Title is the todo text, initialCompleted is the starting state, onToggle notifies the parent","Const constructor with named parameters","createState returns _TodoItemState -- the mutable companion","_TodoItemState uses SingleTickerProviderStateMixin for animation support","Declare _isCompleted bool for the toggle state","Declare AnimationController and Animation for the tap effect","initState: call super first, then initialize state from widget.initialCompleted","Create the AnimationController with 200ms duration and vsync from the mixin","Create a scale animation that shrinks to 95% and bounces back","dispose: dispose the animation controller to prevent memory leaks, then call super","_toggle method: call setState to flip _isCompleted","Notify the parent via widget.onToggle callback with the new value","Play the scale animation forward then reverse for a satisfying tap effect","build method: get the current theme","Return ScaleTransition wrapping the card for the animation","Card contains a ListTile for clean list-item layout","Leading Checkbox bound to _isCompleted, onChanged calls _toggle","Title Text shows widget.title with strikethrough decoration when completed","Completed text gets reduced opacity for a faded effect","Non-completed text uses full surface color"],bugChallenge:{code:`class ClickCounter extends StatefulWidget {\n  @override\n  State<ClickCounter> createState() => _ClickCounterState();\n}\n\nclass _ClickCounterState extends State<ClickCounter> {\n  int count = 0;\n\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      onPressed: () {\n        count++;\n        print('Count: \$count');\n      },\n      child: Text('Tapped \$count times'),\n    );\n  }\n}`,hint:"The count is increasing (you can see it in the print statement) but the UI does not update. Why?",answer:"The onPressed callback increments count directly without calling setState. Flutter does not know the state has changed, so it never rebuilds the widget. Fix: wrap the increment in setState(() { count++; }); so Flutter schedules a rebuild and the Text widget shows the new count."},difficulty:"beginner",prereqs:[17]},
{id:19,title:"MaterialApp & Scaffold",subtitle:"The Foundation Every Flutter App Stands On",analogy:"MaterialApp is like the foundation and plumbing of a house -- it sets up theming, navigation, localization, and other services that every room (screen) needs. Scaffold is like a single room in the house -- it provides the walls (AppBar), floor (body), ceiling (bottomNavigationBar), and fixtures (FloatingActionButton, Drawer). In team_mvp_kit, MaterialApp is configured once at the root with go_router for navigation and a global theme, while each screen uses Scaffold for its layout.",points:[{t:"MaterialApp: The Root Widget",d:"MaterialApp is typically the root of your app. It provides Material Design theming, navigation (Navigator or Router), localization, and other framework services. Most apps have exactly one MaterialApp.",code:`void main() {\n  runApp(\n    MaterialApp(\n      title: 'My App',\n      theme: ThemeData(\n        colorSchemeSeed: Colors.blue,\n        useMaterial3: true,\n      ),\n      home: const HomeScreen(),\n    ),\n  );\n}`},{t:"ThemeData: Global Styling",d:"ThemeData configures colors, typography, shape, and component styles for your entire app. Define it once in MaterialApp and access it anywhere with Theme.of(context). Material 3 uses colorSchemeSeed for automatic palette generation.",code:`ThemeData(\n  colorSchemeSeed: Colors.deepPurple,\n  useMaterial3: true,\n  textTheme: const TextTheme(\n    headlineMedium: TextStyle(fontWeight: FontWeight.bold),\n    bodyLarge: TextStyle(fontSize: 16),\n  ),\n)`},{t:"Dark Mode Support",d:"MaterialApp accepts both theme (light) and darkTheme. Set themeMode to system, light, or dark. The app automatically switches based on the device setting when set to system.",code:`MaterialApp(\n  theme: ThemeData(\n    colorSchemeSeed: Colors.blue,\n    brightness: Brightness.light,\n  ),\n  darkTheme: ThemeData(\n    colorSchemeSeed: Colors.blue,\n    brightness: Brightness.dark,\n  ),\n  themeMode: ThemeMode.system,\n)`},{t:"Scaffold: Screen Structure",d:"Scaffold provides the visual structure for a single screen: app bar at the top, body in the middle, bottom navigation, floating action button, drawers, and snackbars. Almost every screen in a Flutter app uses Scaffold.",code:`Scaffold(\n  appBar: AppBar(title: const Text('Home')),\n  body: const Center(child: Text('Hello!')),\n  floatingActionButton: FloatingActionButton(\n    onPressed: () {},\n    child: const Icon(Icons.add),\n  ),\n)`},{t:"AppBar: The Top Bar",d:"AppBar displays a title, navigation icons, and action buttons at the top of the screen. It automatically includes a back button when navigation stack has entries. Customize with leading, title, and actions parameters.",code:`AppBar(\n  leading: IconButton(\n    icon: const Icon(Icons.menu),\n    onPressed: () {},\n  ),\n  title: const Text('Dashboard'),\n  actions: [\n    IconButton(icon: const Icon(Icons.search), onPressed: () {}),\n    IconButton(icon: const Icon(Icons.settings), onPressed: () {}),\n  ],\n)`},{t:"Body: The Main Content",d:"The body parameter takes any widget and fills the remaining space between the app bar and bottom navigation. Use SingleChildScrollView to make content scrollable, or ListView for long lists.",code:`Scaffold(\n  appBar: AppBar(title: const Text('Feed')),\n  body: ListView.builder(\n    itemCount: 50,\n    itemBuilder: (context, index) {\n      return ListTile(\n        title: Text('Item \$index'),\n      );\n    },\n  ),\n)`},{t:"FloatingActionButton (FAB)",d:"A circular button that hovers over the content. Typically used for the primary action on a screen (add, compose, create). Position it with floatingActionButtonLocation.",code:`Scaffold(\n  floatingActionButton: FloatingActionButton.extended(\n    onPressed: () {},\n    icon: const Icon(Icons.edit),\n    label: const Text('Compose'),\n  ),\n  floatingActionButtonLocation:\n      FloatingActionButtonLocation.centerFloat,\n)`},{t:"BottomNavigationBar",d:"A bar at the bottom of the screen for switching between top-level views. Each item has an icon and label. Use currentIndex to highlight the active tab and onTap to handle tab changes.",code:`Scaffold(\n  bottomNavigationBar: NavigationBar(\n    selectedIndex: _currentIndex,\n    onDestinationSelected: (index) {\n      setState(() => _currentIndex = index);\n    },\n    destinations: const [\n      NavigationDestination(icon: Icon(Icons.home), label: 'Home'),\n      NavigationDestination(icon: Icon(Icons.search), label: 'Search'),\n      NavigationDestination(icon: Icon(Icons.person), label: 'Profile'),\n    ],\n  ),\n)`},{t:"Drawer: Side Navigation",d:"A panel that slides in from the left (or right in RTL) for app navigation. Add a drawer parameter to Scaffold. It automatically adds a hamburger menu icon to the AppBar.",code:`Scaffold(\n  appBar: AppBar(title: const Text('My App')),\n  drawer: Drawer(\n    child: ListView(\n      children: [\n        const DrawerHeader(child: Text('Menu')),\n        ListTile(\n          leading: const Icon(Icons.home),\n          title: const Text('Home'),\n          onTap: () {},\n        ),\n        ListTile(\n          leading: const Icon(Icons.settings),\n          title: const Text('Settings'),\n          onTap: () {},\n        ),\n      ],\n    ),\n  ),\n)`}],whatIs:"MaterialApp is the root widget that initializes Material Design services for your Flutter app: theming, navigation, localization, and more. Scaffold is a layout widget that implements the basic Material Design visual structure for individual screens. Together, they form the skeleton of nearly every Flutter app. MaterialApp is set up once, while Scaffold is used on each screen to provide consistent structure with an app bar, body content, floating action button, drawers, and bottom navigation.",realWorld:"In team_mvp_kit, MaterialApp is configured at the root of the app with go_router for declarative navigation, a global ThemeData for consistent styling, and localization delegates. Each screen returns a Scaffold with an appropriate AppBar and body. The project uses MaterialApp.router instead of the basic MaterialApp to integrate with go_router's routing system. Themes are defined in a separate theme file and passed to MaterialApp, making it easy to switch between light and dark modes.",code:`import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Team MVP Kit',\n      debugShowCheckedModeBanner: false,\n      theme: ThemeData(\n        colorSchemeSeed: Colors.indigo,\n        useMaterial3: true,\n        brightness: Brightness.light,\n      ),\n      darkTheme: ThemeData(\n        colorSchemeSeed: Colors.indigo,\n        useMaterial3: true,\n        brightness: Brightness.dark,\n      ),\n      themeMode: ThemeMode.system,\n      home: const HomeScreen(),\n    );\n  }\n}\n\nclass HomeScreen extends StatelessWidget {\n  const HomeScreen({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    final theme = Theme.of(context);\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('Home'),\n        actions: [\n          IconButton(\n            icon: const Icon(Icons.notifications_outlined),\n            onPressed: () {},\n          ),\n        ],\n      ),\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: [\n            Icon(\n              Icons.rocket_launch,\n              size: 64,\n              color: theme.colorScheme.primary,\n            ),\n            const SizedBox(height: 16),\n            Text(\n              'Welcome to Team MVP Kit',\n              style: theme.textTheme.headlineSmall,\n            ),\n            const SizedBox(height: 8),\n            Text(\n              'Your app foundation is ready',\n              style: theme.textTheme.bodyLarge?.copyWith(\n                color: theme.colorScheme.onSurfaceVariant,\n              ),\n            ),\n          ],\n        ),\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: () {},\n        child: const Icon(Icons.add),\n      ),\n    );\n  }\n}`,funFact:"Material Design was created by Google designer Matias Duarte and introduced at Google I/O 2014. Material 3 (also called Material You) was announced in 2021 and uses dynamic color -- on Android 12+, it can automatically generate your app's color scheme from the user's wallpaper. Flutter's useMaterial3: true flag enables this modern design language.",quiz:[{q:"What is MaterialApp's primary purpose?",opts:["To display a single screen","To provide Material Design theming, navigation, and services for the entire app","To create animations","To manage state"],ans:1},{q:"What does Scaffold provide?",opts:["Database access","The visual structure for a screen: app bar, body, FAB, drawers, bottom nav","Network connectivity","State management"],ans:1},{q:"How do you enable dark mode support in MaterialApp?",opts:["Set darkMode: true","Provide both theme and darkTheme parameters","Change all colors manually","Use a separate MaterialApp for dark mode"],ans:1},{q:"What does debugShowCheckedModeBanner: false do?",opts:["Disables debug mode","Removes the DEBUG banner from the top-right corner","Makes the app run faster","Hides error messages"],ans:1},{q:"In team_mvp_kit, what replaces MaterialApp's home parameter for routing?",opts:["A ListView","MaterialApp.router with go_router","Multiple MaterialApp widgets","Manual Navigator.push calls"],ans:1}],challenge:"Create a complete app with MaterialApp, light/dark themes, and three screens: Home, Search, and Profile. Use Scaffold on each screen with an AppBar. Add a NavigationBar at the bottom to switch between screens. The Home screen should have a FAB. The Search screen should have an AppBar with a search action icon. The Profile screen should show user info in the body. Hint: you will need a StatefulWidget to manage the current tab index.",resources:[{type:"docs",title:"MaterialApp Class",url:"https://api.flutter.dev/flutter/material/MaterialApp-class.html",source:"api.flutter.dev"},{type:"docs",title:"Scaffold Class",url:"https://api.flutter.dev/flutter/material/Scaffold-class.html",source:"api.flutter.dev"},{type:"tutorial",title:"Material Design in Flutter",url:"https://docs.flutter.dev/development/ui/material",source:"docs.flutter.dev"}],eli5:"Think of MaterialApp as the entire school building. It has heating (theming), hallways to get between rooms (navigation), and rules everyone follows (Material Design). Scaffold is one classroom inside the school. Each classroom has a sign on the door (AppBar), desks and chairs where learning happens (body), a special button on the wall for emergencies (FloatingActionButton), and a closet for extra stuff (Drawer). Every classroom looks slightly different inside, but they all have the same basic structure because they are all in the same school building.",codeWalkthrough:["Import Flutter material library","main function calls runApp with our root widget","Define MyApp as a StatelessWidget -- the root of the app","Build method returns MaterialApp -- the foundation of everything","Set title for task switcher and web page title","Disable the debug banner for a cleaner look","Define light theme with indigo color scheme and Material 3","Define dark theme with the same color seed but dark brightness","Set themeMode to system to follow device preference","Set HomeScreen as the initial route","Define HomeScreen as a StatelessWidget","Get the current theme for styling","Return Scaffold -- the structural frame for this screen","AppBar with title Text and a notification icon button in actions","Body is a centered Column with main content","A rocket icon sized 64 using the theme's primary color","SizedBox for 16px vertical spacing","Headline text styled with headlineSmall from the theme","Another SizedBox for 8px spacing","Subtitle text with bodyLarge style in a variant color","FloatingActionButton with an add icon for the primary screen action"],bugChallenge:{code:`class MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: Text('My App')),\n      body: Center(child: Text('Hello')),\n    );\n  }\n}`,hint:"What widget is missing at the root of the app? What does Scaffold need to work properly?",answer:"The app starts with Scaffold directly instead of wrapping it in MaterialApp. Scaffold and other Material widgets like AppBar require a MaterialApp ancestor for theming and localization. Fix: wrap Scaffold in MaterialApp(home: Scaffold(...)) or better yet, create a separate screen widget and set it as MaterialApp's home."},difficulty:"beginner",prereqs:[16]},
{id:20,title:"Text, Icons & Images",subtitle:"The Visual Vocabulary of Flutter",analogy:"If widgets are LEGO bricks, then Text, Icons, and Images are the stickers and decals you put on them. Text is the label maker -- it prints words in any font, size, or color you want. Icons are pre-made symbol stickers from a huge sticker book (Material Icons). Images are photos you glue onto your bricks -- either from your own collection (assets) or downloaded from the internet (network). In team_mvp_kit, these three widgets appear on every single screen.",points:[{t:"Text Widget Basics",d:"The Text widget displays a string of text with a single style. It is the most fundamental way to show words on screen. By default, it uses the nearest DefaultTextStyle from the widget tree.",code:`const Text('Hello, Flutter!')\n\nText(\n  'Welcome back, Alice',\n  style: TextStyle(\n    fontSize: 24,\n    fontWeight: FontWeight.bold,\n    color: Colors.indigo,\n  ),\n)`},{t:"TextStyle: Full Control",d:"TextStyle gives you control over font size, weight, color, letter spacing, decoration, shadows, and more. Use Theme.of(context).textTheme for consistent styles rather than hardcoding values.",code:`TextStyle(\n  fontSize: 18,\n  fontWeight: FontWeight.w600,\n  color: Colors.grey[800],\n  letterSpacing: 0.5,\n  height: 1.5, // line height multiplier\n  decoration: TextDecoration.underline,\n  decorationColor: Colors.blue,\n  fontFamily: 'Roboto',\n)`},{t:"Rich Text with TextSpan",d:"Use RichText or Text.rich to display text with mixed styles in a single widget. Each TextSpan can have its own style and even tap handlers via recognizer.",code:`Text.rich(\n  TextSpan(\n    text: 'Hello ',\n    style: const TextStyle(fontSize: 18),\n    children: [\n      TextSpan(\n        text: 'Flutter',\n        style: TextStyle(\n          fontSize: 18,\n          fontWeight: FontWeight.bold,\n          color: Colors.blue[700],\n        ),\n      ),\n      const TextSpan(text: '!'),\n    ],\n  ),\n)`},{t:"Text Overflow & Wrapping",d:"Control what happens when text is too long: ellipsis cuts with dots, fade fades the edge, clip hard-clips. Use maxLines to limit line count. By default, Text wraps to multiple lines.",code:`Text(\n  'This is a very long text that might overflow the available space',\n  maxLines: 2,\n  overflow: TextOverflow.ellipsis,\n  softWrap: true,\n)`},{t:"Icon Widget",d:"The Icon widget displays a Material Design icon from the Icons class. Over 2,000 icons are built into Flutter. Icons scale with the app's text scale factor and respond to theme colors.",code:`const Icon(Icons.home)\n\nIcon(\n  Icons.favorite,\n  size: 32,\n  color: Colors.red,\n)\n\nconst Icon(\n  Icons.check_circle,\n  size: 48,\n  color: Colors.green,\n)`},{t:"Icon Buttons",d:"IconButton wraps an Icon with a tap target and optional splash effect. Use it in AppBars, toolbars, and anywhere you need a tappable icon. Material 3 adds filled, outlined, and tonal variants.",code:`IconButton(\n  icon: const Icon(Icons.delete),\n  onPressed: () {\n    // handle delete\n  },\n  tooltip: 'Delete item',\n)\n\nIconButton.filled(\n  icon: const Icon(Icons.add),\n  onPressed: () {},\n)`},{t:"Image.asset: Local Images",d:"Load images bundled with your app from the assets folder. Declare assets in pubspec.yaml first. Flutter supports PNG, JPEG, GIF, WebP, and BMP. Use resolution-aware assets (2x, 3x) for crisp display.",code:`// In pubspec.yaml:\n// flutter:\n//   assets:\n//     - assets/images/\n\nImage.asset(\n  'assets/images/logo.png',\n  width: 120,\n  height: 120,\n  fit: BoxFit.contain,\n)`},{t:"Image.network: Remote Images",d:"Load images from a URL. Always handle loading and error states. Use the loadingBuilder and errorBuilder parameters. For production apps, use cached_network_image package for caching.",code:`Image.network(\n  'https://picsum.photos/200',\n  width: 200,\n  height: 200,\n  fit: BoxFit.cover,\n  loadingBuilder: (context, child, progress) {\n    if (progress == null) return child;\n    return const CircularProgressIndicator();\n  },\n  errorBuilder: (context, error, stackTrace) {\n    return const Icon(Icons.broken_image);\n  },\n)`},{t:"CircleAvatar for Profile Pictures",d:"CircleAvatar is a convenient widget for displaying user avatars. It handles circular clipping, fallback text, and background colors automatically. Used extensively in team_mvp_kit for user profiles.",code:`CircleAvatar(\n  radius: 32,\n  backgroundImage: NetworkImage(\n    'https://example.com/avatar.jpg',\n  ),\n  child: const Text('A'), // shown if image fails\n)\n\nCircleAvatar(\n  radius: 24,\n  backgroundColor: Colors.indigo,\n  foregroundColor: Colors.white,\n  child: const Text('JS'),\n)`}],whatIs:"Text, Icons, and Images are the three most fundamental presentation widgets in Flutter. Text renders strings with customizable typography. Icon displays vector symbols from icon fonts. Image loads and displays raster graphics from local assets or remote URLs. These widgets are the visual building blocks that make your app communicate with users. They are lightweight, highly customizable, and designed to work seamlessly with Flutter's theming system.",realWorld:"In team_mvp_kit, every screen uses these widgets. Text displays user names, labels, prices, error messages, and descriptions. Icons serve as visual shortcuts in navigation bars, buttons, and status indicators. Images display user avatars, product photos, and branding assets. The project uses Theme.of(context).textTheme for consistent text styling and CircleAvatar for all user profile pictures. Network images are loaded with error handling to gracefully show placeholders when the connection fails.",code:`import 'package:flutter/material.dart';\n\nclass UserProfileHeader extends StatelessWidget {\n  final String name;\n  final String email;\n  final String? avatarUrl;\n  final bool isVerified;\n\n  const UserProfileHeader({\n    super.key,\n    required this.name,\n    required this.email,\n    this.avatarUrl,\n    this.isVerified = false,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    final theme = Theme.of(context);\n    final colorScheme = theme.colorScheme;\n\n    return Padding(\n      padding: const EdgeInsets.all(24),\n      child: Column(\n        children: [\n          Stack(\n            children: [\n              CircleAvatar(\n                radius: 48,\n                backgroundColor: colorScheme.primaryContainer,\n                backgroundImage: avatarUrl != null\n                    ? NetworkImage(avatarUrl!)\n                    : null,\n                child: avatarUrl == null\n                    ? Text(\n                        name[0].toUpperCase(),\n                        style: theme.textTheme.headlineMedium?.copyWith(\n                          color: colorScheme.onPrimaryContainer,\n                        ),\n                      )\n                    : null,\n              ),\n              if (isVerified)\n                Positioned(\n                  right: 0,\n                  bottom: 0,\n                  child: Container(\n                    padding: const EdgeInsets.all(2),\n                    decoration: BoxDecoration(\n                      color: colorScheme.surface,\n                      shape: BoxShape.circle,\n                    ),\n                    child: Icon(\n                      Icons.verified,\n                      size: 24,\n                      color: colorScheme.primary,\n                    ),\n                  ),\n                ),\n            ],\n          ),\n          const SizedBox(height: 16),\n          Text(\n            name,\n            style: theme.textTheme.titleLarge?.copyWith(\n              fontWeight: FontWeight.bold,\n            ),\n          ),\n          const SizedBox(height: 4),\n          Text(\n            email,\n            style: theme.textTheme.bodyMedium?.copyWith(\n              color: colorScheme.onSurfaceVariant,\n            ),\n          ),\n        ],\n      ),\n    );\n  }\n}`,funFact:"Flutter ships with over 2,000 Material icons and over 600 Cupertino (iOS-style) icons built right into the framework -- no external packages needed. The Material icons are actually a font file (MaterialIcons-Regular.otf) that is bundled with every Flutter app. Each Icon widget just renders a character from this font, which is why icons scale perfectly at any size without getting blurry like images would.",quiz:[{q:"How do you apply multiple styles within a single text widget?",opts:["Use multiple Text widgets side by side","Use Text.rich with TextSpan children","Use HTML tags inside the string","Set multiple styles on one TextStyle"],ans:1},{q:"What does TextOverflow.ellipsis do?",opts:["Makes text bounce","Adds ... at the end when text is too long to fit","Makes text wrap to the next line","Hides the text completely"],ans:1},{q:"What must you do before using Image.asset?",opts:["Import the image library","Declare the asset in pubspec.yaml","Convert the image to SVG","Create a special asset widget"],ans:1},{q:"Why should you provide errorBuilder when using Image.network?",opts:["To make the app look fancy","To handle cases where the image URL fails to load","Because Dart requires it","To add animations to images"],ans:1},{q:"What does CircleAvatar's child parameter do when backgroundImage is provided?",opts:["It shows on top of the image","It replaces the image","It is hidden when the image loads successfully","It creates a border"],ans:2}],challenge:"Build a ContactListItem widget that displays: a CircleAvatar (with network image and text fallback), a column with the person's name in bold and their phone number in grey below, a verified badge icon if they are verified, and a trailing call IconButton. Use Theme.of(context) for all text styles. Handle the case where the avatar image might fail to load. Create a ListView showing 5 different ContactListItem widgets.",resources:[{type:"docs",title:"Text Widget",url:"https://api.flutter.dev/flutter/widgets/Text-class.html",source:"api.flutter.dev"},{type:"docs",title:"Image Widget",url:"https://api.flutter.dev/flutter/widgets/Image-class.html",source:"api.flutter.dev"},{type:"docs",title:"Icon Widget",url:"https://api.flutter.dev/flutter/widgets/Icon-class.html",source:"api.flutter.dev"}],eli5:"Think of making a poster for a school event. You need three things: words to tell people what it is about (that is Text), little pictures like arrows and stars to make it eye-catching (those are Icons), and maybe a photo of last year's event to get people excited (that is an Image). In Flutter, every screen is like a poster. Text shows the words, Icons show the symbols, and Images show the pictures. You can make the words big or small, bold or colorful. You can pick from thousands of symbols. And you can load pictures from your phone or from the internet. That is basically it!",codeWalkthrough:["Import Flutter material library","Define UserProfileHeader as a StatelessWidget","Declare required name and email, optional avatarUrl, and isVerified flag","Const constructor with named parameters","In build, get theme and colorScheme for consistent styling","Return Padding with 24px on all sides for outer spacing","Column to stack avatar, name, and email vertically","Stack widget to overlay the verified badge on top of the avatar","CircleAvatar with radius 48 for a prominent profile picture","Set backgroundColor to primaryContainer for a themed fallback color","If avatarUrl exists, load it as a NetworkImage for backgroundImage","If no avatar URL, show the first letter of the name as fallback text","Style the fallback letter with headlineMedium in onPrimaryContainer color","Conditionally add verified badge only if isVerified is true","Position the badge at bottom-right of the avatar using Positioned","Wrap the badge icon in a Container with surface-colored circle background","Show the verified icon in primary color at size 24","SizedBox height 16 for spacing between avatar and name","Text widget for name using titleLarge style with bold weight","SizedBox height 4 for tight spacing between name and email","Text widget for email using bodyMedium in a muted variant color"],bugChallenge:{code:`Image.network(\n  'https://example.com/photo.jpg',\n  width: 200,\n  height: 200,\n)\n\nImage.asset(\n  'assets/logo.png',\n  width: 100,\n)`,hint:"One will crash if the URL is unreachable. The other might crash if something is missing from a config file.",answer:"Two issues: (1) Image.network has no errorBuilder, so if the URL fails to load the app shows an error. Add errorBuilder: (context, error, stackTrace) => Icon(Icons.broken_image). (2) Image.asset requires the asset path to be declared in pubspec.yaml under flutter > assets. Without that declaration, Flutter cannot find the file and will throw an error at runtime."},difficulty:"beginner",prereqs:[19]},
{id:21,title:"Buttons & User Interactions",subtitle:"Making Your App Respond to Taps",analogy:"Buttons are like doorbells — they sit there looking pretty, but the magic happens when someone presses them. The doorbell (button) triggers an action (the ring), and different doorbells (ElevatedButton, TextButton, IconButton) look different but all do the same job: respond to a press!",points:[{t:"ElevatedButton",d:"ElevatedButton is the most common button in Flutter. It has a raised, filled appearance with a shadow that gives it depth. Use it for primary actions like 'Submit', 'Save', or 'Continue'. It takes an onPressed callback that fires when tapped and a child widget for its label.",code:"ElevatedButton(\n  onPressed: () {\n    print('Button pressed!');\n  },\n  child: Text('Save'),\n)"},{t:"TextButton",d:"TextButton is a flat button with no elevation or background — just text. Use it for less important actions like 'Cancel', 'Skip', or 'Learn More'. It blends into the UI without drawing too much attention, making it perfect for secondary actions alongside an ElevatedButton.",code:"TextButton(\n  onPressed: () {\n    print('Cancelled!');\n  },\n  child: Text('Cancel'),\n)"},{t:"IconButton",d:"IconButton displays an icon that responds to taps. It has a circular ink splash effect when pressed. Use it for toolbar actions like back arrows, favorites, share, or delete. It takes an icon property for the Icon widget and onPressed for the callback.",code:"IconButton(\n  icon: Icon(Icons.favorite),\n  color: Colors.red,\n  onPressed: () {\n    print('Liked!');\n  },\n)"},{t:"onPressed Callback",d:"The onPressed property is a function that runs when the user taps the button. If you set onPressed to null, the button becomes disabled — it greys out and ignores taps. This is how you prevent users from submitting a form before filling it out.",code:"ElevatedButton(\n  // Set to null to disable the button\n  onPressed: isFormValid ? () {\n    submitForm();\n  } : null,\n  child: Text('Submit'),\n)"},{t:"GestureDetector",d:"GestureDetector wraps any widget to detect gestures: taps, double taps, long presses, drags, and swipes. Unlike buttons, it has no visual feedback by default — you control the look entirely. Use it to make images, containers, or custom widgets tappable.",code:"GestureDetector(\n  onTap: () => print('Tapped!'),\n  onDoubleTap: () => print('Double tapped!'),\n  onLongPress: () => print('Long pressed!'),\n  child: Container(\n    padding: EdgeInsets.all(16),\n    color: Colors.blue,\n    child: Text('Tap me anywhere!'),\n  ),\n)"},{t:"InkWell for Material Ripple",d:"InkWell is like GestureDetector but adds the Material Design ripple animation when tapped. It must be inside a Material widget to show the ripple effect properly. Use InkWell when you want tap detection with visual feedback on custom widgets.",code:"Material(\n  child: InkWell(\n    onTap: () => print('Tapped with ripple!'),\n    borderRadius: BorderRadius.circular(8),\n    child: Padding(\n      padding: EdgeInsets.all(16),\n      child: Text('Tap for ripple'),\n    ),\n  ),\n)"},{t:"Button Styling",d:"Use styleFrom() or ButtonStyle to customize button appearance: background color, text color, padding, shape, elevation, and size. The style property accepts a ButtonStyle object, and the static styleFrom() method provides a convenient shorthand.",code:"ElevatedButton(\n  style: ElevatedButton.styleFrom(\n    backgroundColor: Colors.indigo,\n    foregroundColor: Colors.white,\n    padding: EdgeInsets.symmetric(\n      horizontal: 32, vertical: 16,\n    ),\n    shape: RoundedRectangleBorder(\n      borderRadius: BorderRadius.circular(12),\n    ),\n  ),\n  onPressed: () {},\n  child: Text('Styled Button'),\n)"},{t:"OutlinedButton",d:"OutlinedButton has a transparent background with a visible border. It sits between ElevatedButton (high emphasis) and TextButton (low emphasis) in visual hierarchy. Use it for secondary actions that still need some visual weight, like 'Add to Cart' next to a 'Buy Now' ElevatedButton.",code:"OutlinedButton(\n  onPressed: () {\n    print('Outlined pressed!');\n  },\n  style: OutlinedButton.styleFrom(\n    side: BorderSide(color: Colors.blue, width: 2),\n  ),\n  child: Text('Add to Cart'),\n)"},{t:"FloatingActionButton",d:"FloatingActionButton (FAB) is a circular button that floats above the UI, typically placed at the bottom-right of a Scaffold. It represents the primary action of a screen — like composing a new email in Gmail or adding a new item in a to-do app.",code:"Scaffold(\n  floatingActionButton: FloatingActionButton(\n    onPressed: () {\n      print('FAB pressed!');\n    },\n    child: Icon(Icons.add),\n  ),\n  body: Center(child: Text('Hello')),\n)"}],whatIs:"Buttons and interaction widgets are how users communicate with your app. Flutter provides several button types (ElevatedButton, TextButton, IconButton, OutlinedButton, FloatingActionButton) for different visual emphasis levels, plus GestureDetector and InkWell for making any widget respond to touch gestures.",realWorld:"Every app screen has buttons. The team_mvp_kit project uses styled ElevatedButtons for primary actions, TextButtons for navigation links, and GestureDetector for custom interactive cards. Choosing the right button type creates clear visual hierarchy that guides users through your app.",code:`import 'package:flutter/material.dart';

class InteractionDemo extends StatefulWidget {
  const InteractionDemo({super.key});

  @override
  State<InteractionDemo> createState() => _InteractionDemoState();
}

class _InteractionDemoState extends State<InteractionDemo> {
  int _counter = 0;
  bool _isFavorite = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Buttons Demo'),
        actions: [
          IconButton(
            icon: Icon(
              _isFavorite ? Icons.favorite : Icons.favorite_border,
              color: _isFavorite ? Colors.red : null,
            ),
            onPressed: () {
              setState(() {
                _isFavorite = !_isFavorite;
              });
            },
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Counter: \$_counter',
                style: Theme.of(context).textTheme.headlineMedium),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () => setState(() => _counter++),
              child: const Text('Increment'),
            ),
            const SizedBox(height: 12),
            OutlinedButton(
              onPressed: () => setState(() => _counter--),
              child: const Text('Decrement'),
            ),
            const SizedBox(height: 12),
            TextButton(
              onPressed: () => setState(() => _counter = 0),
              child: const Text('Reset'),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => setState(() => _counter += 10),
        child: const Icon(Icons.add),
      ),
    );
  }
}`,funFact:"Flutter buttons went through a major redesign in Flutter 2.0. The old RaisedButton, FlatButton, and OutlineButton were deprecated in favor of ElevatedButton, TextButton, and OutlinedButton with a much more flexible styling system called ButtonStyle!",quiz:[{q:"Which button type has a raised, filled appearance and is best for primary actions?",opts:["TextButton","ElevatedButton","IconButton","GestureDetector"],ans:1},{q:"What happens when you set onPressed to null on a button?",opts:["The app crashes","The button becomes invisible","The button becomes disabled and greyed out","The button still works but shows a warning"],ans:2},{q:"What is the difference between GestureDetector and InkWell?",opts:["GestureDetector is faster","InkWell adds a Material ripple animation on tap","GestureDetector only detects taps","InkWell cannot detect long press"],ans:1},{q:"Which widget floats above the UI and represents the primary screen action?",opts:["ElevatedButton","OutlinedButton","FloatingActionButton","IconButton"],ans:2},{q:"How do you customize the background color of an ElevatedButton?",opts:["Set the color property directly","Use ElevatedButton.styleFrom(backgroundColor: ...)","Wrap it in a Container with color","Use the background parameter"],ans:1}],challenge:"Build a screen with four buttons: an ElevatedButton that shows a SnackBar, a TextButton that toggles text between 'ON' and 'OFF', an IconButton that toggles between a filled and outlined heart icon, and a GestureDetector that changes a Container's color on tap. Style each button differently using styleFrom().",resources:[{type:"docs",title:"Buttons - Flutter Widget Catalog",url:"https://docs.flutter.dev/ui/widgets/material#buttons",source:"Flutter Official"},{type:"docs",title:"GestureDetector Class",url:"https://api.flutter.dev/flutter/widgets/GestureDetector-class.html",source:"Flutter API"},{type:"docs",title:"ElevatedButton Class",url:"https://api.flutter.dev/flutter/material/ElevatedButton-class.html",source:"Flutter API"}],eli5:"Imagine you built a toy robot with buttons on its chest. The big red button (ElevatedButton) makes it walk forward — it sticks out so you notice it first. The small flat label (TextButton) makes it stop — not as attention-grabbing. The round picture button (IconButton) makes it wave. And if you poke the robot anywhere on its belly (GestureDetector), it giggles! Each button looks different but they all do the same thing: wait for you to press them, then do something cool.",codeWalkthrough:["Import the Material Design package for all widgets","","Define InteractionDemo as a StatefulWidget since buttons will change state","Pass the key to the parent constructor","","Create the mutable State class","Declare a counter variable starting at 0","Declare a boolean to track favorite status","","The build method returns our UI","Return a Scaffold for the page structure","AppBar with a title at the top","The actions list puts widgets on the right side of the AppBar","IconButton toggles between filled and outlined heart icon","Color the heart red when favorited, default otherwise","","When the heart IconButton is pressed...","setState triggers a rebuild with the toggled favorite value","","","","The body is centered on screen","Column arranges children vertically","Center everything along the main axis","","Display the counter value using string interpolation","Style it using the theme's headlineMedium text style","Add 24 pixels of vertical space","ElevatedButton (primary action) increments the counter","setState with arrow function for concise increment","Label says 'Increment'","Add 12 pixels of space","OutlinedButton (secondary action) decrements the counter","setState decrements the counter","Label says 'Decrement'","Add 12 pixels of space","TextButton (tertiary action) resets the counter","setState resets counter to 0","Label says 'Reset'","","","","FloatingActionButton floats at bottom-right","Pressing it adds 10 to the counter at once","Plus icon inside the FAB","",""],bugChallenge:{code:"ElevatedButton(\n  onPressed: print('Button pressed!'),\n  child: Text('Press Me'),\n)",hint:"Look at what onPressed expects versus what you are passing...",answer:"onPressed expects a function (VoidCallback), but print('Button pressed!') calls print immediately and passes its return value (void) to onPressed. Fix: wrap it in an anonymous function: onPressed: () { print('Button pressed!'); } or onPressed: () => print('Button pressed!')"},difficulty:"beginner",prereqs:[20]},

{id:22,title:"Row & Column Layout",subtitle:"Horizontal and Vertical Arrangement",analogy:"Row and Column are like organizing books. A Row is a bookshelf where books stand side by side horizontally. A Column is a stack of books piled on top of each other vertically. MainAxisAlignment is how you space them along the shelf (or stack), and CrossAxisAlignment is how you align them perpendicular to that direction.",points:[{t:"Column Widget",d:"Column arranges its children widgets vertically from top to bottom. Its main axis runs vertically and its cross axis runs horizontally. Wrap multiple widgets in a Column to stack them. By default, a Column takes the full available height of its parent.",code:"Column(\n  children: [\n    Text('First'),\n    Text('Second'),\n    Text('Third'),\n  ],\n)"},{t:"Row Widget",d:"Row arranges its children widgets horizontally from left to right. Its main axis runs horizontally and its cross axis runs vertically. Use Row to place widgets side by side, like an icon next to a label or a profile picture beside a username.",code:"Row(\n  children: [\n    Icon(Icons.star),\n    SizedBox(width: 8),\n    Text('Starred item'),\n  ],\n)"},{t:"MainAxisAlignment",d:"MainAxisAlignment controls how children are spaced along the main axis (vertical for Column, horizontal for Row). Values include: start (bunch at beginning), end (bunch at end), center (middle), spaceBetween (equal space between), spaceAround (equal space around each), and spaceEvenly (equal space everywhere).",code:"Row(\n  mainAxisAlignment: MainAxisAlignment.spaceBetween,\n  children: [\n    Text('Left'),\n    Text('Center'),\n    Text('Right'),\n  ],\n)\n// Result: Left    Center    Right"},{t:"CrossAxisAlignment",d:"CrossAxisAlignment controls how children align along the cross axis (horizontal for Column, vertical for Row). Values include: start, end, center (default), stretch (expand to fill cross axis), and baseline (align text baselines). Use stretch to make all children the same width in a Column.",code:"Column(\n  crossAxisAlignment: CrossAxisAlignment.stretch,\n  children: [\n    Container(color: Colors.red, height: 50),\n    Container(color: Colors.blue, height: 50),\n    // Both stretch to full width!\n  ],\n)"},{t:"Expanded Widget",d:"Expanded makes a child widget fill all remaining space along the main axis. If multiple Expanded widgets exist, they share the space equally by default. Use the flex property to control the ratio: flex: 2 takes twice the space of flex: 1. Expanded prevents overflow errors when content is too wide or tall.",code:"Row(\n  children: [\n    Expanded(\n      flex: 2,\n      child: Container(color: Colors.red, height: 50),\n    ),\n    Expanded(\n      flex: 1,\n      child: Container(color: Colors.blue, height: 50),\n    ),\n  ],\n)\n// Red takes 2/3, Blue takes 1/3"},{t:"Flexible Widget",d:"Flexible is like Expanded but optional — it CAN take extra space but does not have to. With FlexFit.loose, the child sizes itself naturally but won't exceed its flex share. With FlexFit.tight (which is what Expanded uses), the child MUST fill its flex share. Use Flexible when you want proportional sizing without forcing fill.",code:"Row(\n  children: [\n    Flexible(\n      flex: 1,\n      fit: FlexFit.loose,\n      child: Text('Short'),\n    ),\n    Flexible(\n      flex: 2,\n      fit: FlexFit.loose,\n      child: Text('A longer piece of text'),\n    ),\n  ],\n)"},{t:"Spacer Widget",d:"Spacer is a convenience widget that creates an empty Expanded widget. It takes up all remaining space between widgets in a Row or Column. Use Spacer to push widgets apart without calculating padding manually. Multiple Spacers share space equally.",code:"Row(\n  children: [\n    Text('Left'),\n    Spacer(), // Pushes everything apart\n    Text('Right'),\n  ],\n)\n// Result: Left                Right"},{t:"Nesting Row and Column",d:"Real layouts combine Row and Column by nesting them. A Column can contain Rows, and Rows can contain Columns. This composition pattern builds any layout: a card with a title row and description column, a list item with icon, text column, and trailing action.",code:"Column(\n  children: [\n    Row(\n      children: [\n        Icon(Icons.person),\n        SizedBox(width: 8),\n        Column(\n          crossAxisAlignment: CrossAxisAlignment.start,\n          children: [\n            Text('John Doe'),\n            Text('john@example.com'),\n          ],\n        ),\n      ],\n    ),\n  ],\n)"},{t:"MainAxisSize",d:"MainAxisSize controls whether a Row or Column takes the maximum or minimum space along its main axis. MainAxisSize.max (default) stretches to fill the parent. MainAxisSize.min shrinks to fit its children. Use min when you want a Row or Column to be only as big as its content.",code:"Row(\n  mainAxisSize: MainAxisSize.min,\n  children: [\n    Icon(Icons.check),\n    SizedBox(width: 4),\n    Text('Done'),\n  ],\n)\n// Row is only as wide as its children"}],whatIs:"Row and Column are the two fundamental layout widgets in Flutter. Row arranges children horizontally, Column arranges them vertically. Together with MainAxisAlignment, CrossAxisAlignment, Expanded, Flexible, and Spacer, they handle the vast majority of Flutter layouts through simple composition.",realWorld:"In team_mvp_kit, nearly every screen uses Row and Column. Login forms use Column to stack fields vertically. App bars use Row for horizontal icon arrangement. List tiles combine both: a Row with an icon, a Column of title and subtitle, and a trailing action. Mastering Row and Column is mastering Flutter layout.",code:`import 'package:flutter/material.dart';

class UserCard extends StatelessWidget {
  final String name;
  final String email;
  final String role;

  const UserCard({
    super.key,
    required this.name,
    required this.email,
    required this.role,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            const CircleAvatar(
              radius: 28,
              child: Icon(Icons.person, size: 28),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    name,
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                  const SizedBox(height: 4),
                  Text(
                    email,
                    style: Theme.of(context).textTheme.bodySmall,
                  ),
                ],
              ),
            ),
            Container(
              padding: const EdgeInsets.symmetric(
                horizontal: 12,
                vertical: 6,
              ),
              decoration: BoxDecoration(
                color: Colors.blue.shade50,
                borderRadius: BorderRadius.circular(16),
              ),
              child: Text(
                role,
                style: TextStyle(
                  color: Colors.blue.shade700,
                  fontSize: 12,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}`,funFact:"Flutter's layout system is inspired by the CSS Flexbox model from web development. Row is like display: flex with flex-direction: row, and Column is like flex-direction: column. If you know Flexbox, you already understand Flutter layout!",quiz:[{q:"What direction does a Column arrange its children?",opts:["Horizontally from left to right","Vertically from top to bottom","In a grid pattern","Diagonally"],ans:1},{q:"What does MainAxisAlignment.spaceBetween do in a Row?",opts:["Centers all children","Puts equal space between children but not at edges","Puts equal space around each child","Stretches children to fill the row"],ans:1},{q:"What is the difference between Expanded and Flexible?",opts:["They are identical","Expanded forces the child to fill space, Flexible allows it to be smaller","Flexible is faster","Expanded only works in Row"],ans:1},{q:"How do you make a Column only as tall as its children instead of filling the parent?",opts:["Set height to auto","Use CrossAxisAlignment.start","Set mainAxisSize to MainAxisSize.min","Wrap it in a Flexible"],ans:2},{q:"What does Spacer() do inside a Row?",opts:["Adds a fixed 8px gap","Creates an empty Expanded widget that fills remaining space","Makes the Row scrollable","Adds a divider line"],ans:1}],challenge:"Build a profile card that uses a Row for the top section (avatar on the left, Column of name and bio on the right), a Row of stat counters (posts, followers, following) using Expanded with equal flex, and a Row of two buttons (Follow as Expanded ElevatedButton, Message as Expanded OutlinedButton) with a SizedBox gap between them.",resources:[{type:"docs",title:"Layouts in Flutter",url:"https://docs.flutter.dev/ui/layout",source:"Flutter Official"},{type:"docs",title:"Row Class",url:"https://api.flutter.dev/flutter/widgets/Row-class.html",source:"Flutter API"},{type:"docs",title:"Understanding Constraints",url:"https://docs.flutter.dev/ui/layout/constraints",source:"Flutter Official"}],eli5:"Imagine you have toy blocks. Column is when you stack blocks into a tower going up. Row is when you line blocks up in a train going sideways. MainAxisAlignment is like choosing whether to bunch the blocks at one end, spread them out evenly, or put them in the middle. And Expanded is like a stretchy block that grows to fill any empty space so there are no gaps!",codeWalkthrough:["Import the Material package","","Define UserCard as a StatelessWidget since it just displays data","Declare required fields: name, email, and role","","","","","Build method returns the widget tree","Return a Card widget for the elevated surface look","Pad the card content by 16 pixels on all sides","","Row arranges avatar, text, and badge horizontally","","CircleAvatar creates a round profile picture placeholder","Set radius to 28 for a medium-sized avatar","Person icon inside the avatar","","SizedBox adds 16px horizontal gap between avatar and text","Expanded makes the text column fill remaining space","Column stacks name and email vertically","CrossAxisAlignment.start left-aligns the text","","Display the name with titleMedium theme style","","","SizedBox adds 4px gap between name and email","","Display email with bodySmall theme style (lighter color)","","","","Container wraps the role badge","Symmetric padding: 12px horizontal, 6px vertical","","BoxDecoration adds background color and rounded corners","Light blue background","16px border radius for pill shape","","Text displays the role string","Styled with dark blue color, small font, semibold weight","","","","","","",""],bugChallenge:{code:"Row(\n  children: [\n    Text('A very long text that keeps going and going'),\n    Text('Another long text that also keeps going'),\n  ],\n)",hint:"What happens when children in a Row are wider than the screen?",answer:"The Row overflows because both Text widgets try to take their natural width, which exceeds the screen. Fix: wrap one or both Text widgets in Expanded or Flexible so they share the available space and wrap their text: Expanded(child: Text('A very long text...'))"},difficulty:"beginner",prereqs:[16]},

{id:23,title:"Container, Padding & SizedBox",subtitle:"Spacing, Sizing, and Decoration",analogy:"Think of Container like a gift box — it has a specific size, padding inside (bubble wrap around the gift), margin outside (space between boxes on the shelf), and decoration (wrapping paper with patterns and color). Padding is just bubble wrap by itself, and SizedBox is an invisible spacer block you use to create exact gaps.",points:[{t:"Container Widget",d:"Container is a convenience widget that combines sizing, padding, margin, decoration, alignment, and color into one widget. It is one of the most used widgets in Flutter. When you need to add background color, borders, rounded corners, or specific dimensions to a widget, Container is your go-to.",code:"Container(\n  width: 200,\n  height: 100,\n  padding: EdgeInsets.all(16),\n  margin: EdgeInsets.all(8),\n  decoration: BoxDecoration(\n    color: Colors.blue,\n    borderRadius: BorderRadius.circular(12),\n  ),\n  child: Text('Hello'),\n)"},{t:"Padding Widget",d:"Padding is a single-purpose widget that adds empty space around its child. Unlike Container, it ONLY does padding — nothing else. Use Padding when you just need spacing and do not need decoration, color, or sizing. It is more readable and efficient than an empty Container with only padding set.",code:"Padding(\n  padding: EdgeInsets.all(16),\n  child: Text('I have 16px space around me'),\n)\n\n// More efficient than:\n// Container(padding: EdgeInsets.all(16), child: ...)"},{t:"SizedBox for Spacing",d:"SizedBox creates a box with a fixed width and height. Its most common use is as a spacer between widgets — SizedBox(height: 16) adds a 16-pixel vertical gap in a Column, and SizedBox(width: 8) adds an 8-pixel horizontal gap in a Row. It is lighter than Container for pure spacing.",code:"Column(\n  children: [\n    Text('Title'),\n    SizedBox(height: 8),  // 8px vertical gap\n    Text('Subtitle'),\n    SizedBox(height: 16), // 16px vertical gap\n    ElevatedButton(\n      onPressed: () {},\n      child: Text('Action'),\n    ),\n  ],\n)"},{t:"EdgeInsets Variants",d:"EdgeInsets defines padding or margin amounts. EdgeInsets.all(16) sets 16px on all sides. EdgeInsets.symmetric(horizontal: 16, vertical: 8) sets different horizontal and vertical values. EdgeInsets.only(left: 16, top: 8) sets individual sides. EdgeInsets.fromLTRB(left, top, right, bottom) sets all four explicitly.",code:"// All sides equal\nEdgeInsets.all(16)\n\n// Symmetric: same horizontal, same vertical\nEdgeInsets.symmetric(horizontal: 24, vertical: 12)\n\n// Only specific sides\nEdgeInsets.only(left: 16, bottom: 8)\n\n// Explicit: left, top, right, bottom\nEdgeInsets.fromLTRB(16, 8, 16, 24)"},{t:"BoxDecoration",d:"BoxDecoration controls the visual appearance of a Container: background color, border, border radius (rounded corners), gradient, box shadow, and background image. Assign it to Container's decoration property. Note: you cannot use both color and decoration — put the color inside the BoxDecoration instead.",code:"Container(\n  decoration: BoxDecoration(\n    color: Colors.white,\n    borderRadius: BorderRadius.circular(16),\n    border: Border.all(\n      color: Colors.grey.shade300,\n      width: 1,\n    ),\n    boxShadow: [\n      BoxShadow(\n        color: Colors.black.withOpacity(0.1),\n        blurRadius: 8,\n        offset: Offset(0, 2),\n      ),\n    ],\n  ),\n  child: Text('Decorated box'),\n)"},{t:"Margin vs Padding",d:"Padding is space INSIDE the container, between its border and its child. Margin is space OUTSIDE the container, between its border and neighboring widgets. Think of it like a picture frame: padding is the mat board inside the frame, margin is the wall space between frames.",code:"Container(\n  // Margin: space OUTSIDE (between this and neighbors)\n  margin: EdgeInsets.all(16),\n  // Padding: space INSIDE (between border and child)\n  padding: EdgeInsets.all(12),\n  decoration: BoxDecoration(\n    color: Colors.blue.shade50,\n    border: Border.all(color: Colors.blue),\n  ),\n  child: Text('margin outside, padding inside'),\n)"},{t:"SizedBox.expand and SizedBox.shrink",d:"SizedBox.expand() creates a box that fills all available space in its parent — useful for making a child stretch to fill a container. SizedBox.shrink() creates a zero-sized box — useful as a placeholder when you conditionally want to show nothing without using an empty Container.",code:"// Fill all available space\nSizedBox.expand(\n  child: Container(\n    color: Colors.green,\n    child: Text('I fill everything!'),\n  ),\n)\n\n// Show nothing (0x0 size)\nisVisible ? Text('Content') : SizedBox.shrink()"},{t:"ConstrainedBox and Limits",d:"ConstrainedBox imposes min and max size constraints on its child. Use it when you want a widget to be at least a certain size or no larger than a maximum. BoxConstraints defines the minWidth, maxWidth, minHeight, and maxHeight that the child must respect.",code:"ConstrainedBox(\n  constraints: BoxConstraints(\n    minWidth: 100,\n    maxWidth: 300,\n    minHeight: 50,\n    maxHeight: 200,\n  ),\n  child: Container(\n    color: Colors.orange,\n    child: Text('I respect my constraints!'),\n  ),\n)"},{t:"DecoratedBox vs Container",d:"DecoratedBox is a lightweight widget that only applies a BoxDecoration — no padding, margin, or sizing. If you only need decoration without other Container features, DecoratedBox is more efficient. Container actually wraps DecoratedBox, Padding, Align, and other widgets internally.",code:"// Lightweight: only decoration\nDecoratedBox(\n  decoration: BoxDecoration(\n    gradient: LinearGradient(\n      colors: [Colors.blue, Colors.purple],\n    ),\n    borderRadius: BorderRadius.circular(8),\n  ),\n  child: Padding(\n    padding: EdgeInsets.all(16),\n    child: Text('Gradient background'),\n  ),\n)"}],whatIs:"Container, Padding, and SizedBox are the core spacing and decoration widgets in Flutter. Container is a multi-purpose widget that combines sizing, padding, margin, and decoration. Padding adds space around a child. SizedBox creates fixed-size gaps or constrains dimensions. Together they control the spacing, sizing, and visual styling of your layout.",realWorld:"In team_mvp_kit, these widgets appear everywhere. SizedBox is the standard spacer between form fields and buttons. Container with BoxDecoration creates card-like surfaces with rounded corners and shadows. Padding wraps screen content to add consistent horizontal margins. The design system defines standard spacing constants (4, 8, 12, 16, 24, 32) used across all screens.",code:`import 'package:flutter/material.dart';

class ProductCard extends StatelessWidget {
  final String title;
  final String price;
  final String imageUrl;

  const ProductCard({
    super.key,
    required this.title,
    required this.price,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surface,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.08),
            blurRadius: 12,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ClipRRect(
            borderRadius: const BorderRadius.vertical(
              top: Radius.circular(16),
            ),
            child: Image.network(
              imageUrl,
              height: 180,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: Theme.of(context).textTheme.titleMedium
                      ?.copyWith(fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 8),
                Text(
                  price,
                  style: Theme.of(context).textTheme.titleLarge
                      ?.copyWith(
                    color: Colors.green.shade700,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 12),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () {},
                    child: const Text('Add to Cart'),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}`,funFact:"Container is actually a convenience widget that combines up to 7 different widgets internally: Align, Padding, DecoratedBox, ConstrainedBox, Transform, ClipPath, and LimitedBox. When you only need one of these features, using the specific widget is more efficient!",quiz:[{q:"What is the most efficient widget for adding a fixed gap between items in a Column?",opts:["Container()","Padding()","SizedBox(height: 16)","Spacer()"],ans:2},{q:"What is the difference between margin and padding on a Container?",opts:["They are the same thing","Margin is space outside the border, padding is space inside","Padding is space outside, margin is inside","Margin only works horizontally"],ans:1},{q:"Why can you NOT use both color and decoration on a Container?",opts:["Flutter does not support colors","The color property is just a shorthand that goes inside decoration","They would conflict and crash the app","You can use both at the same time"],ans:1},{q:"Which EdgeInsets constructor sets different horizontal and vertical padding?",opts:["EdgeInsets.all()","EdgeInsets.only()","EdgeInsets.symmetric()","EdgeInsets.fromLTRB()"],ans:2},{q:"What does SizedBox.shrink() create?",opts:["A box that fills all available space","A zero-sized box useful as a placeholder for nothing","A box that shrinks its child","A box with negative dimensions"],ans:1}],challenge:"Build a product card with these layers: an outer Container with 8px margin, rounded corners, and a subtle shadow. Inside, an image at the top clipped to match the rounded corners. Below the image, a Padding of 16px wrapping a Column with a title, an 8px SizedBox, a price in green, a 12px SizedBox, and a full-width ElevatedButton.",resources:[{type:"docs",title:"Container Class",url:"https://api.flutter.dev/flutter/widgets/Container-class.html",source:"Flutter API"},{type:"docs",title:"BoxDecoration Class",url:"https://api.flutter.dev/flutter/painting/BoxDecoration-class.html",source:"Flutter API"},{type:"docs",title:"Understanding Constraints",url:"https://docs.flutter.dev/ui/layout/constraints",source:"Flutter Official"}],eli5:"Imagine you are mailing a present. The present is your widget. Padding is the bubble wrap you put INSIDE the box around the present. Margin is the space the mailman leaves between your box and other boxes on the truck. Container is the whole shipping box — it has a size, padding inside, and you can decorate it with wrapping paper (BoxDecoration). SizedBox is just an empty block you put between boxes to keep them apart.",codeWalkthrough:["Import the Material package","","Define ProductCard as a StatelessWidget","Declare required string fields for title, price, and image URL","","","","","","","Build method creates the widget tree","","Return a Container as the outer wrapper","Margin of 8px on all sides separates cards from each other","BoxDecoration defines the visual style","Use the theme's surface color for the background","16px border radius for rounded corners","BoxShadow list for the drop shadow effect","Black at 8% opacity for a subtle shadow","12px blur radius for soft edges","Offset 0 horizontal, 4 vertical for shadow below the card","","","Column stacks image and text content vertically","Left-align all children","","ClipRRect clips the image to match rounded top corners","Only round the top corners (top-left and top-right)","","Image.network loads the image from a URL","Fixed height of 180px","Width fills the container","BoxFit.cover scales and crops to fill the area","","","Padding wraps the text content section","16px padding on all sides","Inner Column for text content","Left-align text","","Title text with titleMedium style","Make it semi-bold with fontWeight w600","","8px gap between title and price","","Price text with titleLarge style","Green color for the price","Bold weight for emphasis","","12px gap before the button","","SizedBox with infinite width makes button full-width","ElevatedButton for the action","Label text","","","","","",""],bugChallenge:{code:"Container(\n  color: Colors.white,\n  decoration: BoxDecoration(\n    borderRadius: BorderRadius.circular(12),\n  ),\n  child: Text('Hello'),\n)",hint:"Can Container have both color and decoration at the same time?",answer:"You cannot use both the color property and decoration property on a Container. The color is a shorthand for decoration's color. Fix: remove the color property and add it inside BoxDecoration: decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(12))"},difficulty:"beginner",prereqs:[22]},

{id:24,title:"ListView & GridView",subtitle:"Scrollable Lists and Grids",analogy:"Imagine a restaurant menu. A ListView is like a long menu you scroll down one item at a time — appetizers, mains, desserts, all in a single column. A GridView is like looking at a vending machine — items arranged in rows and columns in a grid. ListView.builder is like a magic menu that only prints the items you can see right now, saving paper (memory)!",points:[{t:"ListView Basics",d:"ListView is a scrollable list of widgets. By default it scrolls vertically. You can put any widgets as children. For short lists with a known number of items, use the default ListView constructor with a children list — Flutter builds all items immediately.",code:"ListView(\n  children: [\n    ListTile(title: Text('Item 1')),\n    ListTile(title: Text('Item 2')),\n    ListTile(title: Text('Item 3')),\n  ],\n)"},{t:"ListView.builder for Performance",d:"ListView.builder lazily builds items on demand — it only creates widgets that are currently visible on screen plus a small buffer. This is critical for large lists (hundreds or thousands of items). It takes an itemCount and an itemBuilder function that receives the index.",code:"ListView.builder(\n  itemCount: 100,\n  itemBuilder: (context, index) {\n    return ListTile(\n      leading: CircleAvatar(child: Text('\$index')),\n      title: Text('Item \$index'),\n      subtitle: Text('Description for item \$index'),\n    );\n  },\n)"},{t:"ListView.separated",d:"ListView.separated is like ListView.builder but adds a separator widget between each item. Use it to add dividers, spacing, or any widget between list items without manually adding them inside each item's builder. It takes both an itemBuilder and a separatorBuilder.",code:"ListView.separated(\n  itemCount: 20,\n  itemBuilder: (context, index) {\n    return ListTile(\n      title: Text('Contact \$index'),\n    );\n  },\n  separatorBuilder: (context, index) {\n    return Divider(height: 1);\n  },\n)"},{t:"GridView.count",d:"GridView.count creates a grid with a fixed number of columns using crossAxisCount. Items flow left to right, top to bottom. It is the simplest way to create a grid. Use crossAxisSpacing and mainAxisSpacing to add gaps between grid items.",code:"GridView.count(\n  crossAxisCount: 2,\n  crossAxisSpacing: 8,\n  mainAxisSpacing: 8,\n  padding: EdgeInsets.all(8),\n  children: [\n    Card(child: Center(child: Text('A'))),\n    Card(child: Center(child: Text('B'))),\n    Card(child: Center(child: Text('C'))),\n    Card(child: Center(child: Text('D'))),\n  ],\n)"},{t:"GridView.builder",d:"GridView.builder lazily builds grid items on demand, just like ListView.builder. Pair it with SliverGridDelegateWithFixedCrossAxisCount for a fixed number of columns, or SliverGridDelegateWithMaxCrossAxisExtent for a maximum item width that auto-calculates the column count.",code:"GridView.builder(\n  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(\n    crossAxisCount: 2,\n    crossAxisSpacing: 8,\n    mainAxisSpacing: 8,\n    childAspectRatio: 0.75,\n  ),\n  itemCount: 50,\n  itemBuilder: (context, index) {\n    return Card(\n      child: Center(child: Text('Grid \$index')),\n    );\n  },\n)"},{t:"Scroll Direction",d:"Both ListView and GridView scroll vertically by default. Set scrollDirection to Axis.horizontal for horizontal scrolling. Horizontal ListViews are common for image carousels, category chips, or story rows. Remember to constrain the height when using horizontal scroll inside a vertical layout.",code:"SizedBox(\n  height: 120,\n  child: ListView.builder(\n    scrollDirection: Axis.horizontal,\n    itemCount: 10,\n    itemBuilder: (context, index) {\n      return Container(\n        width: 100,\n        margin: EdgeInsets.only(right: 8),\n        color: Colors.blue.shade100,\n        child: Center(child: Text('Card \$index')),\n      );\n    },\n  ),\n)"},{t:"ScrollController",d:"ScrollController lets you programmatically control and listen to scroll position. Attach it to a ListView to scroll to specific positions, detect when the user scrolls near the bottom (for infinite scrolling / pagination), or get the current scroll offset.",code:"final _controller = ScrollController();\n\n@override\nvoid initState() {\n  super.initState();\n  _controller.addListener(() {\n    if (_controller.position.pixels >=\n        _controller.position.maxScrollExtent - 200) {\n      // Near bottom - load more items!\n      loadMore();\n    }\n  });\n}\n\nListView.builder(\n  controller: _controller,\n  itemCount: items.length,\n  itemBuilder: (context, i) => ListTile(title: Text(items[i])),\n)"},{t:"ListTile Widget",d:"ListTile is a pre-built row widget designed for lists. It has slots for leading (icon/avatar), title, subtitle, trailing (action widget), and onTap. It handles proper spacing, alignment, and ink splash automatically. Use it for contacts, settings, menus, and any standard list items.",code:"ListTile(\n  leading: CircleAvatar(\n    backgroundImage: NetworkImage(avatarUrl),\n  ),\n  title: Text('John Doe'),\n  subtitle: Text('Software Engineer'),\n  trailing: Icon(Icons.chevron_right),\n  onTap: () => navigateToProfile(),\n)"}],whatIs:"ListView and GridView are scrollable collection widgets. ListView arranges items in a single scrollable column (or row). GridView arranges items in a 2D grid. Both have .builder constructors that lazily create only visible items for optimal performance with large datasets.",realWorld:"In team_mvp_kit, ListView.builder powers every list screen — task lists, user directories, notification feeds. GridView.builder displays product catalogs and image galleries. The .builder pattern is essential because real apps often display hundreds of items fetched from an API, and creating all widgets upfront would waste memory and cause jank.",code:`import 'package:flutter/material.dart';

class ContactListScreen extends StatelessWidget {
  const ContactListScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final contacts = List.generate(
      50,
      (i) => {
        'name': 'Contact \${i + 1}',
        'email': 'contact\${i + 1}@example.com',
        'initial': String.fromCharCode(65 + (i % 26)),
      },
    );

    return Scaffold(
      appBar: AppBar(title: const Text('Contacts')),
      body: ListView.separated(
        itemCount: contacts.length,
        separatorBuilder: (context, index) {
          return const Divider(height: 1, indent: 72);
        },
        itemBuilder: (context, index) {
          final contact = contacts[index];
          return ListTile(
            leading: CircleAvatar(
              backgroundColor: Colors.primaries[index % Colors.primaries.length],
              child: Text(
                contact['initial']!,
                style: const TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            title: Text(contact['name']!),
            subtitle: Text(contact['email']!),
            trailing: IconButton(
              icon: const Icon(Icons.message_outlined),
              onPressed: () {},
            ),
            onTap: () {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(content: Text('Tapped \${contact["name"]}')),
              );
            },
          );
        },
      ),
    );
  }
}`,funFact:"ListView.builder is so efficient that Flutter can smoothly scroll through a list of 1 million items without any lag. It achieves this by only keeping about 10-20 widgets in memory at a time, creating and destroying them as you scroll. This technique is called 'windowing' or 'virtualization' and is used by every major platform!",quiz:[{q:"Why should you use ListView.builder instead of ListView for large lists?",opts:["It looks better","It lazily builds only visible items, saving memory","It automatically sorts items","It adds animations"],ans:1},{q:"What does crossAxisCount: 3 mean in GridView.count?",opts:["3 rows of items","3 items total","3 columns of items","3 pixels of spacing"],ans:2},{q:"What does ListView.separated add that ListView.builder does not?",opts:["Automatic sorting","A separator widget between each item","Horizontal scrolling","Pull to refresh"],ans:1},{q:"How do you make a ListView scroll horizontally?",opts:["Set horizontal: true","Set scrollDirection: Axis.horizontal","Wrap it in a Row","Use HorizontalListView instead"],ans:1},{q:"What is the purpose of ScrollController?",opts:["To style the scrollbar","To programmatically control scroll position and listen to scroll events","To limit how far users can scroll","To add bounce physics"],ans:1}],challenge:"Build a screen with two sections: a horizontal ListView at the top showing category cards (height 100, width 120, with colored containers and centered text), and below it a GridView.builder with 2 columns showing product cards with an image placeholder, title, and price. Add a ScrollController to the GridView that prints a message when the user scrolls near the bottom.",resources:[{type:"docs",title:"ListView Class",url:"https://api.flutter.dev/flutter/widgets/ListView-class.html",source:"Flutter API"},{type:"docs",title:"GridView Class",url:"https://api.flutter.dev/flutter/widgets/GridView-class.html",source:"Flutter API"},{type:"docs",title:"Lists - Flutter Cookbook",url:"https://docs.flutter.dev/cookbook/lists",source:"Flutter Official"}],eli5:"Imagine you have 1000 baseball cards but your desk only fits 10 at a time. Instead of spreading all 1000 cards on the floor (that would be a mess!), ListView.builder is like a magical card holder that only shows the 10 cards you are looking at right now. When you slide to see the next cards, it puts away the ones you passed and brings out new ones. GridView is the same magic holder but it shows cards in rows and columns, like a binder page!",codeWalkthrough:["Import the Material package","","Define ContactListScreen as a StatelessWidget","","","Build method constructs the UI","Generate a list of 50 fake contacts with name, email, and initial","Each contact is a Map with string keys","Name is Contact 1 through Contact 50","Email follows a pattern","Initial cycles through A-Z using character codes","","","Return a Scaffold with an AppBar","AppBar shows 'Contacts' title","Body uses ListView.separated for dividers between items","itemCount is the total number of contacts","separatorBuilder creates a thin divider indented 72px to align with text","","","itemBuilder creates each contact row","Get the contact map for this index","Return a ListTile for the standard list item layout","Leading CircleAvatar with a color cycling through Material primary colors","Display the contact's initial letter","White bold text for contrast","","","","Title shows the contact name","Subtitle shows the email address","Trailing IconButton with a message icon","","onTap shows a SnackBar with the contact name","","","","",""],bugChallenge:{code:"Column(\n  children: [\n    ListView.builder(\n      itemCount: 100,\n      itemBuilder: (context, index) {\n        return ListTile(title: Text('Item \$index'));\n      },\n    ),\n  ],\n)",hint:"What happens when you put a scrollable widget inside an unbounded parent?",answer:"ListView has infinite height but Column gives it unbounded vertical space, causing a 'Vertical viewport was given unbounded height' error. Fix: wrap the ListView.builder in an Expanded widget so it takes the remaining Column space: Expanded(child: ListView.builder(...))"},difficulty:"intermediate",prereqs:[22]},

{id:25,title:"Stack & Positioned",subtitle:"Overlapping Widgets Like Layers",analogy:"Stack is like making a collage. You start with a big piece of paper (the base), then layer photos, stickers, and text on top. Each piece overlaps the one below it. Positioned is like pinning a photo to an exact spot on the paper — 20mm from the left edge, 10mm from the top. Align is like saying 'center this sticker' or 'put it in the bottom-right corner'.",points:[{t:"Stack Widget",d:"Stack layers its children on top of each other. The first child is at the bottom, and each subsequent child is painted on top. By default, children are positioned at the top-left corner. Stack is essential for overlays, badges, floating labels, and any UI where widgets need to overlap.",code:"Stack(\n  children: [\n    Container(\n      width: 200,\n      height: 200,\n      color: Colors.blue,\n    ),\n    Container(\n      width: 100,\n      height: 100,\n      color: Colors.red,\n    ),\n  ],\n)\n// Red box sits on top of blue box, both at top-left"},{t:"Positioned Widget",d:"Positioned places a child at exact coordinates within a Stack. You can set top, bottom, left, right, width, and height. It only works as a direct child of Stack. If you set both left and right without width, the child stretches horizontally between those positions.",code:"Stack(\n  children: [\n    Container(color: Colors.grey.shade200),\n    Positioned(\n      top: 20,\n      right: 16,\n      child: Icon(Icons.close, size: 24),\n    ),\n  ],\n)"},{t:"Align Widget in Stack",d:"Align positions a child using an Alignment value instead of pixel coordinates. Alignment(-1, -1) is top-left, Alignment(1, 1) is bottom-right, and Alignment(0, 0) is center. Use named constants like Alignment.center, Alignment.bottomRight for convenience. Align works both inside and outside Stack.",code:"Stack(\n  children: [\n    Container(color: Colors.blue.shade50),\n    Align(\n      alignment: Alignment.center,\n      child: Text('Centered!'),\n    ),\n    Align(\n      alignment: Alignment.bottomRight,\n      child: FloatingActionButton(\n        onPressed: () {},\n        child: Icon(Icons.add),\n      ),\n    ),\n  ],\n)"},{t:"Stack Fit and Alignment",d:"Stack's fit property controls how non-positioned children are sized. StackFit.loose lets children size themselves. StackFit.expand forces children to fill the Stack. The alignment property sets the default alignment for non-positioned children — like setting a default position for all layers.",code:"Stack(\n  alignment: Alignment.center,\n  fit: StackFit.expand,\n  children: [\n    // This will expand to fill the Stack\n    Container(color: Colors.blue),\n    // This centers on top of the blue container\n    Text('Overlay Text',\n      style: TextStyle(color: Colors.white, fontSize: 24),\n    ),\n  ],\n)"},{t:"Building a Badge",d:"A common Stack pattern is adding a notification badge to an icon. Stack the icon as the base, then Positioned a small red circle with a count at the top-right. This pattern appears in every app with notifications, shopping carts, or message counts.",code:"Stack(\n  clipBehavior: Clip.none,\n  children: [\n    Icon(Icons.notifications, size: 32),\n    Positioned(\n      right: -4,\n      top: -4,\n      child: Container(\n        padding: EdgeInsets.all(4),\n        decoration: BoxDecoration(\n          color: Colors.red,\n          shape: BoxShape.circle,\n        ),\n        child: Text('3',\n          style: TextStyle(\n            color: Colors.white, fontSize: 10),\n        ),\n      ),\n    ),\n  ],\n)"},{t:"Image Overlay Pattern",d:"Stack is commonly used to overlay text, gradients, or buttons on top of images. Place the image as the first child and layer a semi-transparent gradient and text on top. This creates professional-looking hero images, cards, and banners.",code:"Stack(\n  children: [\n    Image.network(\n      'https://example.com/photo.jpg',\n      height: 200,\n      width: double.infinity,\n      fit: BoxFit.cover,\n    ),\n    Positioned(\n      bottom: 0,\n      left: 0,\n      right: 0,\n      child: Container(\n        padding: EdgeInsets.all(16),\n        decoration: BoxDecoration(\n          gradient: LinearGradient(\n            begin: Alignment.bottomCenter,\n            end: Alignment.topCenter,\n            colors: [\n              Colors.black87,\n              Colors.transparent,\n            ],\n          ),\n        ),\n        child: Text('Photo Title',\n          style: TextStyle(color: Colors.white)),\n      ),\n    ),\n  ],\n)"},{t:"Clip Behavior",d:"By default, Stack clips children that overflow its bounds. Set clipBehavior: Clip.none to allow Positioned children to extend beyond the Stack's edges — useful for badges, decorative elements, or shadows that need to overflow. Be careful though: overflowing content can overlap other widgets.",code:"Stack(\n  clipBehavior: Clip.none, // Allow overflow!\n  children: [\n    Container(\n      width: 100,\n      height: 100,\n      color: Colors.blue,\n    ),\n    Positioned(\n      top: -10,\n      right: -10,\n      child: CircleAvatar(\n        radius: 14,\n        backgroundColor: Colors.red,\n        child: Text('!', style: TextStyle(color: Colors.white)),\n      ),\n    ),\n  ],\n)"}],whatIs:"Stack is a layout widget that layers children on top of each other, with the first child at the bottom and later children on top. Positioned pins a child to exact pixel coordinates within the Stack. Align positions a child using relative alignment values. Together they create overlapping layouts like badges, overlays, banners, and floating elements.",realWorld:"In team_mvp_kit, Stack is used for profile headers (image with gradient text overlay), notification badges on icons, loading overlays on screens, floating action buttons with custom positioning, and image cards with price tags. Any time one widget needs to sit on top of another, Stack is the answer.",code:`import 'package:flutter/material.dart';

class ProfileHeader extends StatelessWidget {
  final String name;
  final String title;
  final String coverUrl;
  final String avatarUrl;

  const ProfileHeader({
    super.key,
    required this.name,
    required this.title,
    required this.coverUrl,
    required this.avatarUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        // Layer 1: Cover image
        Image.network(
          coverUrl,
          height: 200,
          width: double.infinity,
          fit: BoxFit.cover,
        ),
        // Layer 2: Gradient overlay
        Positioned(
          bottom: 0,
          left: 0,
          right: 0,
          child: Container(
            height: 80,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.bottomCenter,
                end: Alignment.topCenter,
                colors: [
                  Colors.black.withOpacity(0.7),
                  Colors.transparent,
                ],
              ),
            ),
          ),
        ),
        // Layer 3: Name and title on the gradient
        Positioned(
          bottom: 16,
          left: 16,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                name,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                title,
                style: TextStyle(
                  color: Colors.white.withOpacity(0.8),
                  fontSize: 14,
                ),
              ),
            ],
          ),
        ),
        // Layer 4: Avatar overlapping the bottom edge
        Positioned(
          bottom: -40,
          right: 16,
          child: Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: Colors.white, width: 3),
            ),
            child: CircleAvatar(
              radius: 40,
              backgroundImage: NetworkImage(avatarUrl),
            ),
          ),
        ),
      ],
    );
  }
}`,funFact:"Stack is inspired by the concept of z-index in CSS. In web development you use position: absolute and z-index to layer elements. Flutter's Stack does the same thing but in a more structured way — the order of children in the list determines the z-order, with later children on top!",quiz:[{q:"In a Stack, which child is painted on top?",opts:["The first child in the children list","The last child in the children list","The largest child","The one with the highest z-index property"],ans:1},{q:"What does Positioned do inside a Stack?",opts:["Centers the child","Places the child at exact pixel coordinates","Makes the child transparent","Removes the child from the layout"],ans:1},{q:"What is Alignment(0, 0) in a Stack?",opts:["Top-left corner","Bottom-right corner","Exact center","Off screen"],ans:2},{q:"What does clipBehavior: Clip.none do on a Stack?",opts:["Removes all children","Allows children to overflow beyond the Stack bounds","Clips all children to circles","Disables the Stack"],ans:1},{q:"Which pattern uses Stack to show a number on top of an icon?",opts:["Overlay pattern","Badge pattern","Toast pattern","Modal pattern"],ans:1}],challenge:"Build a profile header card using Stack: a cover image as the background, a dark gradient overlay at the bottom for text readability, the user's name and bio positioned at the bottom-left over the gradient, and a CircleAvatar that overlaps the bottom edge of the cover image (use clipBehavior: Clip.none and a negative bottom position). Add a white border around the avatar.",resources:[{type:"docs",title:"Stack Class",url:"https://api.flutter.dev/flutter/widgets/Stack-class.html",source:"Flutter API"},{type:"docs",title:"Positioned Class",url:"https://api.flutter.dev/flutter/widgets/Positioned-class.html",source:"Flutter API"},{type:"docs",title:"Layouts in Flutter",url:"https://docs.flutter.dev/ui/layout",source:"Flutter Official"}],eli5:"Imagine you are making a poster for your room. First you put up a big picture (the background). Then you tape a sticker on top (second layer). Then you write your name with a marker on top of everything (third layer). That is Stack! Positioned is like using a ruler to tape the sticker exactly 2 inches from the top and 3 inches from the left. And Align is like saying 'put the sticker right in the middle of the poster' without measuring.",codeWalkthrough:["Import the Material package","","Define ProfileHeader as a StatelessWidget","Declare required fields for name, title, and image URLs","","","","","","","","","Build method returns the widget tree","","Stack is the main layout that layers everything","clipBehavior: Clip.none allows the avatar to overflow below","","The first layer: cover image at the bottom","Load the cover image from a URL","Fixed height of 200px, full width","Scale and crop to fill the area","","The second layer: gradient overlay","Positioned at the bottom, stretching left to right","","Container with 80px height for the gradient","LinearGradient from black at bottom to transparent at top","Creates a fade effect for text readability","","","","","","","The third layer: name and title text","Positioned 16px from bottom and 16px from left","Column to stack name above title","Left-align the text","","Name in white, large, bold text","","","","","Title in slightly transparent white, smaller","","","","","","The fourth layer: avatar overlapping the bottom edge","bottom: -40 pushes it 40px below the Stack's bottom edge","Right-aligned at 16px from the right","","Container adds a white circular border around the avatar","CircleAvatar of 40px radius","Load the avatar image from URL","","","",""],bugChallenge:{code:"Stack(\n  children: [\n    Image.network('https://example.com/bg.jpg'),\n    Positioned(\n      bottom: -20,\n      child: CircleAvatar(radius: 30),\n    ),\n  ],\n)",hint:"The avatar should overflow below the Stack, but it is being clipped. What property controls this?",answer:"By default Stack clips overflowing children. The avatar at bottom: -20 is clipped and invisible. Fix: add clipBehavior: Clip.none to the Stack so the avatar can extend below the Stack's bounds."},difficulty:"intermediate",prereqs:[22]},

{id:26,title:"Forms & Text Input",subtitle:"Collecting User Data with Validation",analogy:"A Form in Flutter is like a paper application form at a bank. Each TextFormField is a blank line where you write information (name, email, phone). Validation is like the bank teller checking your form before accepting it — 'You left the email blank!' or 'That phone number is too short!'. The GlobalKey is like the form's tracking number that lets the bank find and process your specific form.",points:[{t:"TextFormField Basics",d:"TextFormField is a text input field designed to work inside a Form widget. It displays a text box where users type. It supports decoration (labels, hints, icons), input types (keyboard layouts), and validation. Use it for any text input: name, email, password, search, etc.",code:"TextFormField(\n  decoration: InputDecoration(\n    labelText: 'Email',\n    hintText: 'Enter your email',\n    prefixIcon: Icon(Icons.email),\n    border: OutlineInputBorder(),\n  ),\n  keyboardType: TextInputType.emailAddress,\n)"},{t:"Form Widget and GlobalKey",d:"Form groups multiple TextFormField widgets together so you can validate, save, or reset them all at once. Attach a GlobalKey<FormState> to access the form's state. Call formKey.currentState!.validate() to run all field validators simultaneously.",code:"final _formKey = GlobalKey<FormState>();\n\nForm(\n  key: _formKey,\n  child: Column(\n    children: [\n      TextFormField(\n        decoration: InputDecoration(labelText: 'Name'),\n        validator: (value) {\n          if (value == null || value.isEmpty) {\n            return 'Please enter your name';\n          }\n          return null; // null means valid\n        },\n      ),\n      ElevatedButton(\n        onPressed: () {\n          if (_formKey.currentState!.validate()) {\n            // All fields are valid - submit!\n          }\n        },\n        child: Text('Submit'),\n      ),\n    ],\n  ),\n)"},{t:"Validation Functions",d:"The validator property takes a function that receives the field value and returns an error message string if invalid, or null if valid. Validators can check for empty values, minimum length, email format, matching passwords, and any custom business logic. They run when you call form.validate().",code:"TextFormField(\n  validator: (value) {\n    if (value == null || value.isEmpty) {\n      return 'This field is required';\n    }\n    if (value.length < 6) {\n      return 'Must be at least 6 characters';\n    }\n    if (!value.contains('@')) {\n      return 'Enter a valid email';\n    }\n    return null; // Valid!\n  },\n)"},{t:"TextEditingController",d:"TextEditingController gives you programmatic access to a text field's value. You can read the current text, set it to a new value, clear it, or listen for changes. Always create controllers in initState or as final fields, and dispose of them in dispose() to prevent memory leaks.",code:"class _MyFormState extends State<MyForm> {\n  final _nameCtrl = TextEditingController();\n  final _emailCtrl = TextEditingController();\n\n  @override\n  void dispose() {\n    _nameCtrl.dispose();\n    _emailCtrl.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return TextFormField(\n      controller: _nameCtrl,\n      decoration: InputDecoration(labelText: 'Name'),\n    );\n  }\n\n  void submit() {\n    print('Name: \${_nameCtrl.text}');\n    print('Email: \${_emailCtrl.text}');\n  }\n}"},{t:"InputDecoration Styling",d:"InputDecoration controls the appearance of a TextFormField: labelText (floating label), hintText (placeholder), prefixIcon, suffixIcon, border styles (OutlineInputBorder, UnderlineInputBorder), error styling, filled background, and content padding. A well-decorated field guides users on what to enter.",code:"TextFormField(\n  decoration: InputDecoration(\n    labelText: 'Password',\n    hintText: 'Enter your password',\n    prefixIcon: Icon(Icons.lock),\n    suffixIcon: IconButton(\n      icon: Icon(Icons.visibility),\n      onPressed: () => toggleVisibility(),\n    ),\n    border: OutlineInputBorder(\n      borderRadius: BorderRadius.circular(12),\n    ),\n    filled: true,\n    fillColor: Colors.grey.shade50,\n  ),\n  obscureText: true,\n)"},{t:"Password Visibility Toggle",d:"For password fields, set obscureText: true to hide the input with dots. Add a suffixIcon with an IconButton that toggles a boolean state variable to switch between Icons.visibility and Icons.visibility_off. This common pattern lets users verify their password before submitting.",code:"bool _obscure = true;\n\nTextFormField(\n  obscureText: _obscure,\n  decoration: InputDecoration(\n    labelText: 'Password',\n    suffixIcon: IconButton(\n      icon: Icon(\n        _obscure ? Icons.visibility_off : Icons.visibility,\n      ),\n      onPressed: () {\n        setState(() => _obscure = !_obscure);\n      },\n    ),\n  ),\n)"},{t:"FocusNode Control",d:"FocusNode controls which text field has keyboard focus. Use it to auto-focus a field when a screen opens, move focus to the next field when the user presses 'Next' on the keyboard (textInputAction), or unfocus all fields when the user taps outside (FocusScope.of(context).unfocus).",code:"final _emailFocus = FocusNode();\nfinal _passwordFocus = FocusNode();\n\nTextFormField(\n  focusNode: _emailFocus,\n  textInputAction: TextInputAction.next,\n  onFieldSubmitted: (_) {\n    FocusScope.of(context).requestFocus(_passwordFocus);\n  },\n  decoration: InputDecoration(labelText: 'Email'),\n)\n\nTextFormField(\n  focusNode: _passwordFocus,\n  textInputAction: TextInputAction.done,\n  decoration: InputDecoration(labelText: 'Password'),\n)"},{t:"AutovalidateMode",d:"AutovalidateMode controls when validation runs. AutovalidateMode.disabled (default) only validates when you call form.validate(). AutovalidateMode.onUserInteraction validates as the user types or leaves a field. Set it on the Form or individual TextFormField to give real-time validation feedback.",code:"Form(\n  key: _formKey,\n  autovalidateMode: AutovalidateMode.onUserInteraction,\n  child: Column(\n    children: [\n      TextFormField(\n        validator: (v) => v!.isEmpty ? 'Required' : null,\n        decoration: InputDecoration(labelText: 'Name'),\n      ),\n      // Error shows as soon as user clears the field!\n    ],\n  ),\n)"}],whatIs:"Forms in Flutter use the Form widget with a GlobalKey<FormState> to group TextFormField inputs for collective validation. Each TextFormField has a validator function that returns an error string or null. TextEditingController provides programmatic access to field values. InputDecoration styles the fields with labels, icons, and borders.",realWorld:"In team_mvp_kit, the login screen, registration screen, and profile edit screen all use Form with TextFormField. The project defines reusable validator functions for email, password strength, and required fields. TextEditingControllers read values on submit and pass them to the authentication BLoC. FocusNodes provide smooth keyboard navigation between fields.",code:`import 'package:flutter/material.dart';

class LoginForm extends StatefulWidget {
  const LoginForm({super.key});

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>();
  final _emailCtrl = TextEditingController();
  final _passwordCtrl = TextEditingController();
  final _passwordFocus = FocusNode();
  bool _obscurePassword = true;
  bool _isLoading = false;

  @override
  void dispose() {
    _emailCtrl.dispose();
    _passwordCtrl.dispose();
    _passwordFocus.dispose();
    super.dispose();
  }

  void _submit() {
    if (_formKey.currentState!.validate()) {
      setState(() => _isLoading = true);
      // Send _emailCtrl.text and _passwordCtrl.text to auth
      Future.delayed(const Duration(seconds: 2), () {
        setState(() => _isLoading = false);
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Login successful!')),
        );
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login')),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              TextFormField(
                controller: _emailCtrl,
                keyboardType: TextInputType.emailAddress,
                textInputAction: TextInputAction.next,
                onFieldSubmitted: (_) {
                  FocusScope.of(context).requestFocus(_passwordFocus);
                },
                decoration: const InputDecoration(
                  labelText: 'Email',
                  prefixIcon: Icon(Icons.email_outlined),
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Email is required';
                  }
                  if (!value.contains('@')) {
                    return 'Enter a valid email';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _passwordCtrl,
                focusNode: _passwordFocus,
                obscureText: _obscurePassword,
                textInputAction: TextInputAction.done,
                onFieldSubmitted: (_) => _submit(),
                decoration: InputDecoration(
                  labelText: 'Password',
                  prefixIcon: const Icon(Icons.lock_outlined),
                  border: const OutlineInputBorder(),
                  suffixIcon: IconButton(
                    icon: Icon(
                      _obscurePassword
                          ? Icons.visibility_off
                          : Icons.visibility,
                    ),
                    onPressed: () {
                      setState(() {
                        _obscurePassword = !_obscurePassword;
                      });
                    },
                  ),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Password is required';
                  }
                  if (value.length < 6) {
                    return 'Password must be at least 6 characters';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 24),
              SizedBox(
                height: 48,
                child: ElevatedButton(
                  onPressed: _isLoading ? null : _submit,
                  child: _isLoading
                      ? const SizedBox(
                          height: 20,
                          width: 20,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                          ),
                        )
                      : const Text('Login'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,funFact:"Flutter's Form widget is inspired by HTML forms in web development. Just like HTML forms have an action and input elements with validation attributes, Flutter Forms group TextFormFields and validate them collectively. The GlobalKey<FormState> concept is unique to Flutter though — it is how widgets talk to their state objects from outside!",quiz:[{q:"What does a validator function return when the input is valid?",opts:["true","An empty string","null","The input value"],ans:2},{q:"Why do you need a GlobalKey<FormState> for a Form?",opts:["To style the form","To access the form's validate(), save(), and reset() methods","To make the form scrollable","To encrypt form data"],ans:1},{q:"What must you do with TextEditingController when the widget is removed?",opts:["Set it to null","Call dispose() to free memory","Nothing, it cleans itself up","Call clear()"],ans:1},{q:"How do you hide password text in a TextFormField?",opts:["Set hidden: true","Set obscureText: true","Set inputType: password","Wrap it in a SecureField"],ans:1},{q:"When does AutovalidateMode.onUserInteraction show validation errors?",opts:["Only when the form is submitted","As the user types or interacts with the field","Never","Only on the first character typed"],ans:1}],challenge:"Build a registration form with four fields: Name (required, min 2 characters), Email (required, must contain @), Password (required, min 8 characters, must contain a number), and Confirm Password (must match password). Add FocusNode navigation between fields, a password visibility toggle, AutovalidateMode.onUserInteraction, and a submit button that shows a loading spinner while processing.",resources:[{type:"docs",title:"Forms - Flutter Cookbook",url:"https://docs.flutter.dev/cookbook/forms",source:"Flutter Official"},{type:"docs",title:"TextFormField Class",url:"https://api.flutter.dev/flutter/material/TextFormField-class.html",source:"Flutter API"},{type:"docs",title:"Form Validation",url:"https://docs.flutter.dev/cookbook/forms/validation",source:"Flutter Official"}],eli5:"Imagine you are filling out a permission slip for a school trip. Each blank line is like a TextFormField where you write your name, your parent's phone number, and your allergies. The teacher (validator) checks every line before accepting the form. If you forgot to write your name, the teacher circles that line in red and says 'Please fill this in!' That red error message is exactly what TextFormField's validator does. The GlobalKey is like the teacher knowing which permission slip is yours among all the students.",codeWalkthrough:["Import the Material package","","Define LoginForm as a StatefulWidget since form state changes","","","Create the State class","GlobalKey to access the Form's state for validation","TextEditingController for the email field","TextEditingController for the password field","FocusNode to control password field focus","Boolean to toggle password visibility","Boolean to track loading state","","Dispose controllers and focus nodes to free memory","","","","","The submit method handles form submission","Check if all validators pass","Set loading to true to show progress indicator","Read email and password from controllers","Simulate a network delay of 2 seconds","Set loading back to false","Show a success SnackBar","","","","","Build method creates the UI","Scaffold with an AppBar titled Login","Body wrapped in 24px padding","Form widget groups all fields with the form key","Column stretches children to full width","","Email TextFormField","Attach the email controller","Set keyboard to email type with @ shortcut","Next action moves to password field","On submit, move focus to password field","","InputDecoration with label, email icon, and outlined border","","","","Validator: check empty then check for @ symbol","Return error strings or null for valid","","","","16px gap between fields","","Password TextFormField","Attach password controller and focus node","obscureText hides the password text","Done action triggers submit","On keyboard done press, call submit","InputDecoration with label, lock icon, border","","suffixIcon toggles between visibility icons","","Toggle the obscure boolean on press","","","","","","Validator: check empty then check minimum length","","","","","24px gap before the submit button","","48px height button for comfortable tap target","Disable button while loading by setting onPressed to null","Show CircularProgressIndicator when loading","","","","Otherwise show Login text","","","","",""],bugChallenge:{code:"class _FormState extends State<MyForm> {\n  final _formKey = GlobalKey<FormState>();\n  final _ctrl = TextEditingController();\n\n  @override\n  Widget build(BuildContext context) {\n    return Form(\n      key: _formKey,\n      child: TextFormField(controller: _ctrl),\n    );\n  }\n}",hint:"What is missing that could cause a memory leak?",answer:"The TextEditingController is never disposed. When the widget is removed from the tree, the controller keeps listening in memory. Fix: add a dispose() method that calls _ctrl.dispose() and super.dispose() to free the controller's resources."},difficulty:"intermediate",prereqs:[21,18]},

{id:27,title:"Building Custom Widgets",subtitle:"Extract, Compose, and Reuse",analogy:"Building custom widgets is like creating your own LEGO pieces. Instead of building the same castle tower from 50 individual bricks every time, you mold those 50 bricks into one custom 'tower piece' that you can stamp out instantly. You can even make it adjustable — different colors, heights, or flags — by adding parameters. Now your castle is built from a few custom pieces instead of thousands of tiny bricks.",points:[{t:"Extracting Widgets",d:"When your build method gets long, extract sections into separate widget classes. Right-click in your IDE and select 'Extract Widget' or manually create a new StatelessWidget. Each extracted widget has its own build method, making code easier to read, test, and reuse across screens.",code:"// BEFORE: Everything in one build method\nclass HomeScreen extends StatelessWidget {\n  Widget build(BuildContext context) {\n    return Column(\n      children: [\n        // 50 lines of header code...\n        // 30 lines of body code...\n        // 20 lines of footer code...\n      ],\n    );\n  }\n}\n\n// AFTER: Extracted into reusable widgets\nclass HomeScreen extends StatelessWidget {\n  Widget build(BuildContext context) {\n    return Column(\n      children: [\n        HomeHeader(),\n        HomeBody(),\n        HomeFooter(),\n      ],\n    );\n  }\n}"},{t:"Parameters for Customization",d:"Custom widgets accept parameters through their constructor, just like built-in Flutter widgets. Use required named parameters for essential data and optional parameters with defaults for customization. This makes your widget flexible enough to use in different contexts with different data.",code:"class UserAvatar extends StatelessWidget {\n  final String imageUrl;\n  final double size;\n  final bool showBorder;\n\n  const UserAvatar({\n    super.key,\n    required this.imageUrl,\n    this.size = 40,\n    this.showBorder = false,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return CircleAvatar(\n      radius: size / 2,\n      backgroundImage: NetworkImage(imageUrl),\n    );\n  }\n}"},{t:"Composition Over Inheritance",d:"In Flutter, you build complex widgets by composing simpler ones — not by extending them. Instead of creating a class that extends ElevatedButton, create a widget that CONTAINS an ElevatedButton with your customizations. This composition pattern is how Flutter is designed and gives you full control.",code:"// GOOD: Composition - wrap existing widgets\nclass PrimaryButton extends StatelessWidget {\n  final String label;\n  final VoidCallback? onPressed;\n\n  const PrimaryButton({\n    super.key,\n    required this.label,\n    this.onPressed,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return SizedBox(\n      width: double.infinity,\n      height: 48,\n      child: ElevatedButton(\n        onPressed: onPressed,\n        child: Text(label),\n      ),\n    );\n  }\n}"},{t:"Callback Parameters",d:"Pass functions as parameters to let parent widgets respond to events in child widgets. Use VoidCallback for simple taps and ValueChanged<T> (or custom function types) when you need to pass data back. This keeps child widgets independent — they report events without knowing what happens next.",code:"class TodoItem extends StatelessWidget {\n  final String title;\n  final bool isCompleted;\n  final VoidCallback onTap;\n  final ValueChanged<bool?> onToggle;\n\n  const TodoItem({\n    super.key,\n    required this.title,\n    required this.isCompleted,\n    required this.onTap,\n    required this.onToggle,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return ListTile(\n      title: Text(title),\n      leading: Checkbox(\n        value: isCompleted,\n        onChanged: onToggle,\n      ),\n      onTap: onTap,\n    );\n  }\n}"},{t:"Widget Slots Pattern",d:"Accept Widget parameters to let consumers customize specific parts of your widget. This 'slot' pattern is how Flutter's own Scaffold works — it has slots for appBar, body, floatingActionButton, etc. Use it to create flexible containers that define structure while letting content vary.",code:"class InfoCard extends StatelessWidget {\n  final Widget icon;\n  final Widget title;\n  final Widget? subtitle;\n  final Widget? trailing;\n\n  const InfoCard({\n    super.key,\n    required this.icon,\n    required this.title,\n    this.subtitle,\n    this.trailing,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Card(\n      child: Padding(\n        padding: const EdgeInsets.all(16),\n        child: Row(\n          children: [\n            icon,\n            const SizedBox(width: 12),\n            Expanded(\n              child: Column(\n                crossAxisAlignment: CrossAxisAlignment.start,\n                children: [\n                  title,\n                  if (subtitle != null) subtitle!,\n                ],\n              ),\n            ),\n            if (trailing != null) trailing!,\n          ],\n        ),\n      ),\n    );\n  }\n}"},{t:"Private Helper Methods",d:"For small pieces of UI that are only used within one widget and do not need their own state or parameters, extract them as private methods (starting with underscore). This is simpler than creating a whole new widget class. But if the piece is reused elsewhere or has complex logic, promote it to a separate widget.",code:"class ProfileScreen extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      children: [\n        _buildHeader(context),\n        _buildStats(),\n        _buildActions(),\n      ],\n    );\n  }\n\n  Widget _buildHeader(BuildContext context) {\n    return Padding(\n      padding: const EdgeInsets.all(16),\n      child: Text('Profile',\n        style: Theme.of(context).textTheme.headlineLarge),\n    );\n  }\n\n  Widget _buildStats() { /* ... */ }\n  Widget _buildActions() { /* ... */ }\n}"},{t:"Builder Pattern for Complex Widgets",d:"For widgets with many optional parameters, consider a builder pattern or use named constructors to provide common configurations. This makes the API cleaner when there are many variants of the same widget — like a button that can be primary, secondary, or destructive.",code:"class AppButton extends StatelessWidget {\n  final String label;\n  final VoidCallback? onPressed;\n  final Color backgroundColor;\n  final Color textColor;\n\n  const AppButton({\n    super.key,\n    required this.label,\n    this.onPressed,\n    this.backgroundColor = Colors.blue,\n    this.textColor = Colors.white,\n  });\n\n  // Named constructor for destructive variant\n  const AppButton.destructive({\n    super.key,\n    required this.label,\n    this.onPressed,\n  })  : backgroundColor = Colors.red,\n        textColor = Colors.white;\n\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      style: ElevatedButton.styleFrom(\n        backgroundColor: backgroundColor,\n        foregroundColor: textColor,\n      ),\n      onPressed: onPressed,\n      child: Text(label),\n    );\n  }\n}"}],whatIs:"Building custom widgets means extracting reusable UI components into their own widget classes with parameters for customization, callbacks for events, and widget slots for flexible content. Flutter's composition model encourages building complex UIs from small, focused, reusable pieces rather than monolithic build methods.",realWorld:"In team_mvp_kit, custom widgets like PrimaryButton, AppTextField, StatusBadge, and UserAvatar are used across dozens of screens. The project has a widgets/ folder with reusable components that accept parameters and callbacks. This approach ensures visual consistency, reduces code duplication, and makes UI changes propagate everywhere from a single edit.",code:`import 'package:flutter/material.dart';

class StatusBadge extends StatelessWidget {
  final String label;
  final StatusType type;

  const StatusBadge({
    super.key,
    required this.label,
    this.type = StatusType.info,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: 12,
        vertical: 6,
      ),
      decoration: BoxDecoration(
        color: _backgroundColor,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _borderColor, width: 1),
      ),
      child: Text(
        label,
        style: TextStyle(
          color: _textColor,
          fontSize: 12,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }

  Color get _backgroundColor {
    switch (type) {
      case StatusType.success:
        return Colors.green.shade50;
      case StatusType.warning:
        return Colors.orange.shade50;
      case StatusType.error:
        return Colors.red.shade50;
      case StatusType.info:
        return Colors.blue.shade50;
    }
  }

  Color get _textColor {
    switch (type) {
      case StatusType.success:
        return Colors.green.shade700;
      case StatusType.warning:
        return Colors.orange.shade700;
      case StatusType.error:
        return Colors.red.shade700;
      case StatusType.info:
        return Colors.blue.shade700;
    }
  }

  Color get _borderColor {
    switch (type) {
      case StatusType.success:
        return Colors.green.shade200;
      case StatusType.warning:
        return Colors.orange.shade200;
      case StatusType.error:
        return Colors.red.shade200;
      case StatusType.info:
        return Colors.blue.shade200;
    }
  }
}

enum StatusType { success, warning, error, info }

// Usage:
// StatusBadge(label: 'Active', type: StatusType.success)
// StatusBadge(label: 'Pending', type: StatusType.warning)
// StatusBadge(label: 'Failed', type: StatusType.error)`,funFact:"Flutter's official style guide recommends that any build method longer than about 30 lines should be split into smaller widgets. The Flutter framework itself is built this way — Scaffold is composed of AppBar, Body, FloatingActionButton, Drawer, and BottomNavigationBar, each of which is its own complex widget!",quiz:[{q:"What is the recommended way to build complex widgets in Flutter?",opts:["Inherit from existing widgets with extends","Compose simpler widgets together inside a new widget","Use mixins on every widget","Write everything in one build method"],ans:1},{q:"What type should you use for a callback parameter that passes no data back?",opts:["Function","void","VoidCallback","Callback"],ans:2},{q:"When should you extract a private method vs creating a separate widget class?",opts:["Always use private methods","Always create separate widgets","Use private methods for simple, non-reusable pieces; separate widgets for reusable ones","They are identical"],ans:2},{q:"What is the 'widget slots' pattern?",opts:["Accepting Widget parameters so consumers can customize specific parts","Using slots in a database","Putting widgets in a grid","A memory optimization technique"],ans:0},{q:"How do named constructors help with custom widget variants?",opts:["They make widgets faster","They provide preset configurations like AppButton.destructive()","They are required by Flutter","They replace the default constructor"],ans:1}],challenge:"Create a reusable NotificationCard widget that accepts: an icon Widget slot, a title String, an optional subtitle String, an optional trailing Widget slot, an onTap VoidCallback, and a NotificationType enum (info, success, warning, error) that changes the card's left border color. Then use it three times on a screen with different configurations.",resources:[{type:"docs",title:"Creating Reusable Widgets",url:"https://docs.flutter.dev/ui/widgets",source:"Flutter Official"},{type:"docs",title:"Flutter Widget Composition",url:"https://docs.flutter.dev/resources/architectural-overview#composition",source:"Flutter Official"},{type:"docs",title:"Dart Constructors",url:"https://dart.dev/language/constructors",source:"Dart Official"}],eli5:"Imagine you love drawing robots. Instead of drawing the same robot head from scratch every time (two circles for eyes, a rectangle for the mouth, antennas), you create a rubber stamp of a robot head. Now you just stamp it whenever you need one! But your stamp is special — you can choose the eye color and whether it smiles or frowns by passing in options. That is a custom widget: a reusable stamp with adjustable settings that you can use anywhere in your app.",codeWalkthrough:["Import the Material package","","Define StatusBadge as a StatelessWidget","Required label text to display","StatusType controls the color scheme, defaults to info","","Constructor with required label and optional type","","","Build method returns the styled badge","Container wraps the text with padding and decoration","Symmetric padding: 12px horizontal, 6px vertical","","BoxDecoration for the pill-shaped badge","Background color from the private getter based on type","16px border radius creates the pill shape","Thin border using the border color getter","","Text displays the label","Styled with color from getter, small font, semibold weight","","","","","Private getter returns background color based on StatusType","Switch on the type enum","Green for success","Orange for warning","Red for error","Blue for info","","","Private getter returns text color (darker shade)","Same switch pattern with shade700 for contrast","","","","","","","","","Private getter returns border color (lighter shade)","Same switch pattern with shade200 for subtle borders","","","","","","","","","Define the StatusType enum with four values","","Usage examples showing different badge configurations","Success badge in green","Warning badge in orange","Error badge in red"],bugChallenge:{code:"class MyButton extends StatelessWidget {\n  final String label;\n  final onPressed;\n\n  const MyButton({required this.label, this.onPressed});\n\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      onPressed: onPressed,\n      child: Text(label),\n    );\n  }\n}",hint:"Look at the onPressed parameter declaration. What is missing?",answer:"The onPressed parameter is missing its type annotation. Without a type, it is implicitly 'dynamic' which defeats Dart's type safety. Fix: declare it as 'final VoidCallback? onPressed;' so Dart knows it is an optional function that takes no arguments and returns void. Also add super.key to the constructor."},difficulty:"intermediate",prereqs:[17,18]},

{id:28,title:"Design System & Theming",subtitle:"Consistent Look with ThemeData and Custom Design Systems",analogy:"A design system is like a fashion brand's style guide. Just like Gucci has specific colors, fonts, and patterns that make everything look 'Gucci', your app's design system defines the exact colors, text styles, spacing, and component looks that make everything feel unified. ThemeData is Flutter's built-in style guide, and you can extend it with your own BaseDesignSystem class for complete control.",points:[{t:"ThemeData Basics",d:"ThemeData is Flutter's built-in theming object. It defines colors, text styles, button themes, input decoration themes, and more for your entire app. Pass it to MaterialApp's theme property and every widget in your app automatically uses these defaults. Change one value in ThemeData and it updates everywhere.",code:"MaterialApp(\n  theme: ThemeData(\n    primarySwatch: Colors.blue,\n    scaffoldBackgroundColor: Colors.white,\n    appBarTheme: AppBarTheme(\n      backgroundColor: Colors.white,\n      foregroundColor: Colors.black,\n      elevation: 0,\n    ),\n  ),\n  home: HomeScreen(),\n)"},{t:"ColorScheme",d:"ColorScheme is the modern way to define colors in Flutter. It replaces the old primarySwatch approach. ColorScheme defines primary, secondary, surface, background, error, and their 'on' variants (text color on top of each). Use ColorScheme.fromSeed() for automatic palette generation from a single color.",code:"MaterialApp(\n  theme: ThemeData(\n    colorScheme: ColorScheme.fromSeed(\n      seedColor: Colors.indigo,\n      brightness: Brightness.light,\n    ),\n    useMaterial3: true,\n  ),\n)\n\n// Access in widgets:\n// Theme.of(context).colorScheme.primary\n// Theme.of(context).colorScheme.onPrimary\n// Theme.of(context).colorScheme.surface"},{t:"TextTheme",d:"TextTheme defines a consistent set of text styles for your app: displayLarge, headlineMedium, titleSmall, bodyLarge, labelMedium, etc. Define them once in ThemeData and use them everywhere via Theme.of(context).textTheme. This ensures consistent typography across all screens.",code:"ThemeData(\n  textTheme: TextTheme(\n    headlineLarge: TextStyle(\n      fontSize: 28,\n      fontWeight: FontWeight.bold,\n      letterSpacing: -0.5,\n    ),\n    bodyLarge: TextStyle(\n      fontSize: 16,\n      height: 1.5,\n    ),\n    labelMedium: TextStyle(\n      fontSize: 12,\n      fontWeight: FontWeight.w600,\n      letterSpacing: 0.5,\n    ),\n  ),\n)\n\n// Usage:\n// Text('Hello', style: Theme.of(context).textTheme.headlineLarge)"},{t:"Dark Mode Support",d:"Support dark mode by defining both a theme and darkTheme in MaterialApp. Set themeMode to ThemeMode.system to follow the device setting, ThemeMode.light to force light, or ThemeMode.dark to force dark. ColorScheme.fromSeed with Brightness.dark auto-generates dark color variants.",code:"MaterialApp(\n  theme: ThemeData(\n    colorScheme: ColorScheme.fromSeed(\n      seedColor: Colors.indigo,\n      brightness: Brightness.light,\n    ),\n    useMaterial3: true,\n  ),\n  darkTheme: ThemeData(\n    colorScheme: ColorScheme.fromSeed(\n      seedColor: Colors.indigo,\n      brightness: Brightness.dark,\n    ),\n    useMaterial3: true,\n  ),\n  themeMode: ThemeMode.system,\n)"},{t:"Component Themes",d:"ThemeData lets you theme individual component types: ElevatedButtonThemeData, InputDecorationTheme, CardTheme, AppBarTheme, etc. Set these once and all instances of that widget type inherit the styling. This eliminates repetitive style: ElevatedButton.styleFrom(...) on every button.",code:"ThemeData(\n  elevatedButtonTheme: ElevatedButtonThemeData(\n    style: ElevatedButton.styleFrom(\n      minimumSize: Size(double.infinity, 48),\n      shape: RoundedRectangleBorder(\n        borderRadius: BorderRadius.circular(12),\n      ),\n    ),\n  ),\n  inputDecorationTheme: InputDecorationTheme(\n    border: OutlineInputBorder(\n      borderRadius: BorderRadius.circular(12),\n    ),\n    filled: true,\n    contentPadding: EdgeInsets.symmetric(\n      horizontal: 16, vertical: 14),\n  ),\n)"},{t:"Custom Design System Class",d:"For advanced projects, create a custom design system class that extends ThemeData with app-specific tokens. In team_mvp_kit, BaseDesignSystem defines spacing constants, custom colors, animation durations, and component-specific styles. Access it via a static method or dependency injection.",code:"abstract class BaseDesignSystem {\n  // Spacing scale\n  double get spacingXs => 4;\n  double get spacingSm => 8;\n  double get spacingMd => 16;\n  double get spacingLg => 24;\n  double get spacingXl => 32;\n\n  // Custom colors beyond ColorScheme\n  Color get successColor;\n  Color get warningColor;\n  Color get errorColor;\n\n  // Animation durations\n  Duration get animationFast => Duration(milliseconds: 200);\n  Duration get animationNormal => Duration(milliseconds: 300);\n\n  // Build the ThemeData\n  ThemeData toThemeData();\n}"},{t:"Theme Extensions",d:"Flutter 3+ supports ThemeExtension for adding custom properties to ThemeData. Define a class that extends ThemeExtension, add your custom fields, implement copyWith and lerp, then register it with ThemeData.extensions. Access it via Theme.of(context).extension<YourExtension>().",code:"class AppColors extends ThemeExtension<AppColors> {\n  final Color success;\n  final Color warning;\n\n  const AppColors({\n    required this.success,\n    required this.warning,\n  });\n\n  @override\n  AppColors copyWith({Color? success, Color? warning}) {\n    return AppColors(\n      success: success ?? this.success,\n      warning: warning ?? this.warning,\n    );\n  }\n\n  @override\n  AppColors lerp(AppColors? other, double t) {\n    return AppColors(\n      success: Color.lerp(success, other?.success, t)!,\n      warning: Color.lerp(warning, other?.warning, t)!,\n    );\n  }\n}\n\n// Register:\n// ThemeData(extensions: [AppColors(success: ..., warning: ...)])\n// Access:\n// Theme.of(context).extension<AppColors>()!.success"},{t:"Accessing Theme in Widgets",d:"Use Theme.of(context) to access the current ThemeData anywhere in the widget tree. It returns ThemeData for colors, text styles, and component themes. Use context.watch or listen for reactive theme changes. Always prefer theme values over hardcoded colors for consistency and dark mode support.",code:"Widget build(BuildContext context) {\n  final theme = Theme.of(context);\n  final colors = theme.colorScheme;\n  final textTheme = theme.textTheme;\n\n  return Container(\n    color: colors.surface,\n    child: Column(\n      children: [\n        Text('Title',\n          style: textTheme.headlineMedium?.copyWith(\n            color: colors.primary,\n          ),\n        ),\n        Text('Body text',\n          style: textTheme.bodyLarge?.copyWith(\n            color: colors.onSurface,\n          ),\n        ),\n      ],\n    ),\n  );\n}"}],whatIs:"Design system and theming in Flutter means using ThemeData to define your app's visual language: ColorScheme for colors, TextTheme for typography, component themes for widgets, and ThemeExtension for custom properties. Dark mode support comes from defining both theme and darkTheme. Advanced projects like team_mvp_kit use a custom BaseDesignSystem class to centralize all design tokens.",realWorld:"In team_mvp_kit, a BaseDesignSystem abstract class defines all visual constants. Concrete implementations (LightDesignSystem, DarkDesignSystem) provide theme-specific values. The toThemeData() method generates the ThemeData passed to MaterialApp. Every widget reads from Theme.of(context) instead of hardcoding values, making theme changes instant and global.",code:`import 'package:flutter/material.dart';

// Custom design system for team_mvp_kit
class AppTheme {
  static ThemeData light() {
    final colorScheme = ColorScheme.fromSeed(
      seedColor: const Color(0xFF6750A4),
      brightness: Brightness.light,
    );

    return ThemeData(
      useMaterial3: true,
      colorScheme: colorScheme,
      textTheme: _textTheme,
      appBarTheme: AppBarTheme(
        backgroundColor: colorScheme.surface,
        foregroundColor: colorScheme.onSurface,
        elevation: 0,
        centerTitle: true,
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          minimumSize: const Size(double.infinity, 48),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          textStyle: const TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        filled: true,
        fillColor: colorScheme.surfaceContainerHighest
            .withOpacity(0.3),
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 16,
          vertical: 14,
        ),
      ),
      cardTheme: CardTheme(
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: BorderSide(
            color: colorScheme.outlineVariant,
          ),
        ),
      ),
      extensions: const [
        AppSpacing(),
        AppDurations(),
      ],
    );
  }

  static ThemeData dark() {
    final colorScheme = ColorScheme.fromSeed(
      seedColor: const Color(0xFF6750A4),
      brightness: Brightness.dark,
    );

    return ThemeData(
      useMaterial3: true,
      colorScheme: colorScheme,
      textTheme: _textTheme,
      // Same component themes with dark colors...
    );
  }

  static const _textTheme = TextTheme(
    headlineLarge: TextStyle(
      fontSize: 28,
      fontWeight: FontWeight.bold,
      letterSpacing: -0.5,
    ),
    titleLarge: TextStyle(
      fontSize: 20,
      fontWeight: FontWeight.w600,
    ),
    bodyLarge: TextStyle(
      fontSize: 16,
      height: 1.5,
    ),
    bodyMedium: TextStyle(
      fontSize: 14,
      height: 1.5,
    ),
    labelLarge: TextStyle(
      fontSize: 14,
      fontWeight: FontWeight.w600,
      letterSpacing: 0.5,
    ),
  );
}

class AppSpacing extends ThemeExtension<AppSpacing> {
  final double xs;
  final double sm;
  final double md;
  final double lg;
  final double xl;

  const AppSpacing({
    this.xs = 4,
    this.sm = 8,
    this.md = 16,
    this.lg = 24,
    this.xl = 32,
  });

  @override
  AppSpacing copyWith({
    double? xs, double? sm, double? md,
    double? lg, double? xl,
  }) {
    return AppSpacing(
      xs: xs ?? this.xs, sm: sm ?? this.sm,
      md: md ?? this.md, lg: lg ?? this.lg,
      xl: xl ?? this.xl,
    );
  }

  @override
  AppSpacing lerp(AppSpacing? other, double t) => this;
}

class AppDurations extends ThemeExtension<AppDurations> {
  final Duration fast;
  final Duration normal;

  const AppDurations({
    this.fast = const Duration(milliseconds: 200),
    this.normal = const Duration(milliseconds: 350),
  });

  @override
  AppDurations copyWith({Duration? fast, Duration? normal}) {
    return AppDurations(
      fast: fast ?? this.fast,
      normal: normal ?? this.normal,
    );
  }

  @override
  AppDurations lerp(AppDurations? other, double t) => this;
}

// Usage in MaterialApp:
// MaterialApp(
//   theme: AppTheme.light(),
//   darkTheme: AppTheme.dark(),
//   themeMode: ThemeMode.system,
// )`,funFact:"Material Design 3 (Material You) can generate an entire color palette from a single seed color. ColorScheme.fromSeed uses the HCT (Hue, Chroma, Tone) color space to create harmonious primary, secondary, tertiary, and neutral color tones — the same algorithm that powers Android 12+ dynamic theming from your wallpaper!",quiz:[{q:"What is the modern way to define colors in Flutter 3+ ThemeData?",opts:["primarySwatch","primaryColor","ColorScheme","color property"],ans:2},{q:"How do you access the current theme's colors inside a widget?",opts:["AppTheme.colors","Theme.of(context).colorScheme","Colors.primary","context.colors"],ans:1},{q:"What does themeMode: ThemeMode.system do?",opts:["Forces light mode","Forces dark mode","Follows the device's light/dark mode setting","Disables theming"],ans:2},{q:"What is the purpose of ThemeExtension?",opts:["To override built-in widgets","To add custom properties to ThemeData like spacing or durations","To extend the Flutter framework","To create animations"],ans:1},{q:"Why should you avoid hardcoding colors like Colors.blue in widgets?",opts:["It is slower","Hardcoded colors do not adapt to theme changes or dark mode","Colors.blue does not exist","It uses more memory"],ans:1}],challenge:"Create a complete AppTheme class with light() and dark() static methods. Define a ColorScheme.fromSeed, a custom TextTheme with at least 4 styles, component themes for ElevatedButton, Card, and InputDecoration, and a ThemeExtension for custom spacing values. Apply it to a MaterialApp with themeMode: ThemeMode.system and build a sample screen that uses only theme values (no hardcoded colors).",resources:[{type:"docs",title:"Use Themes to Share Colors and Font Styles",url:"https://docs.flutter.dev/cookbook/design/themes",source:"Flutter Official"},{type:"docs",title:"ThemeData Class",url:"https://api.flutter.dev/flutter/material/ThemeData-class.html",source:"Flutter API"},{type:"docs",title:"Material 3 in Flutter",url:"https://docs.flutter.dev/ui/design/material",source:"Flutter Official"}],eli5:"Imagine you are the boss of a crayon factory. Instead of letting every artist pick random colors, you create an official crayon box with exactly the colors your brand uses: 'Brand Blue' for important things, 'Soft Grey' for backgrounds, and 'Alert Red' for warnings. ThemeData is your official crayon box. Every artist (widget) grabs colors from the same box, so all the drawings look like they belong together. Dark mode is like making a second crayon box with darker versions of the same colors for drawing at night!",codeWalkthrough:["Import the Material package","","Define AppTheme class with static factory methods","Static light() method creates the light theme","Generate a ColorScheme from a seed color (purple)","Set brightness to light","","Build the ThemeData object","Enable Material Design 3","Apply the generated color scheme","Apply custom text theme (defined below)","AppBar theme: surface background, no elevation, centered title","","","","","Elevated button theme: full width, 48px height, rounded corners","","","","","","","","","Input decoration theme: rounded borders, filled background","","","","","","","Card theme: no elevation, rounded with border outline","","","","","","Register custom ThemeExtension classes","AppSpacing for consistent spacing values","AppDurations for animation timing","","","","Static dark() method creates the dark theme","Same seed color but Brightness.dark for dark palette","","ThemeData with dark color scheme","Same text theme works for both modes","","","Static text theme shared between light and dark","headlineLarge: 28px bold with tight letter spacing","","","","titleLarge: 20px semi-bold","","","bodyLarge: 16px with 1.5 line height","","","bodyMedium: 14px with 1.5 line height","","","labelLarge: 14px semi-bold with wide letter spacing","","","","","AppSpacing ThemeExtension with spacing scale","Define xs through xl spacing values as doubles","","Default values: 4, 8, 16, 24, 32","","","","copyWith for creating modified copies","","","","lerp returns this (spacing does not animate)","","AppDurations ThemeExtension for animations","fast and normal duration values","","Default: 200ms fast, 350ms normal","","copyWith for modified copies","","","","lerp returns this (durations do not interpolate)","","","Usage example in MaterialApp","Apply light and dark themes","Follow system theme mode"],bugChallenge:{code:"Widget build(BuildContext context) {\n  return Container(\n    color: Colors.white,\n    child: Text(\n      'Hello',\n      style: TextStyle(\n        color: Colors.black,\n        fontSize: 24,\n      ),\n    ),\n  );\n}",hint:"This widget hardcodes colors. What happens in dark mode?",answer:"Hardcoded Colors.white background and Colors.black text will not adapt to dark mode. In dark mode, the white container will clash with the dark theme. Fix: use Theme.of(context).colorScheme.surface for the background and Theme.of(context).textTheme.headlineSmall for the text style, so colors automatically adapt to the current theme."},difficulty:"intermediate",prereqs:[19]},

{id:29,title:"Navigation Basics",subtitle:"Moving Between Screens with Navigator",analogy:"Navigator is like a stack of plates in a cafeteria. When you go to a new screen, you push a new plate on top of the stack. When you press the back button, you pop the top plate off and see the one underneath. You can only see the top plate (current screen) at any time, but all the previous screens are waiting underneath, exactly how you left them.",points:[{t:"Navigator.push",d:"Navigator.push adds a new screen (route) on top of the navigation stack. The current screen stays in memory underneath. Use MaterialPageRoute to wrap the destination widget. The push method returns a Future that resolves when the pushed screen is popped — this is how you get data back from a screen.",code:"Navigator.push(\n  context,\n  MaterialPageRoute(\n    builder: (context) => DetailScreen(itemId: 42),\n  ),\n);"},{t:"Navigator.pop",d:"Navigator.pop removes the current screen from the stack, revealing the previous screen underneath. You can optionally pass data back to the previous screen by providing a result argument. The calling screen receives this result through the Future returned by push.",code:"// Simple pop (go back)\nNavigator.pop(context);\n\n// Pop with data (return a result)\nNavigator.pop(context, 'selected_item_123');"},{t:"Receiving Data from Pop",d:"When you push a screen, you get a Future that completes when that screen pops. Await it to receive any data the popped screen returned. This pattern is used for selection screens, dialog results, and form submissions where the previous screen needs the result.",code:"void _openDetailScreen() async {\n  final result = await Navigator.push<String>(\n    context,\n    MaterialPageRoute(\n      builder: (context) => SelectionScreen(),\n    ),\n  );\n\n  if (result != null) {\n    setState(() {\n      selectedItem = result;\n    });\n  }\n}"},{t:"MaterialPageRoute",d:"MaterialPageRoute creates a platform-appropriate transition animation when navigating. On Android it slides up from the bottom, on iOS it slides in from the right. It takes a builder function that receives BuildContext and returns the destination widget. Set fullscreenDialog: true for a modal-style slide-up animation.",code:"// Standard navigation (slide)\nMaterialPageRoute(\n  builder: (context) => DetailScreen(),\n)\n\n// Full-screen dialog (slide up from bottom)\nMaterialPageRoute(\n  builder: (context) => CreateScreen(),\n  fullscreenDialog: true,\n)"},{t:"Named Routes",d:"Named routes let you navigate by string names instead of building MaterialPageRoute each time. Define routes in MaterialApp's routes map, then use Navigator.pushNamed(context, '/detail'). Named routes are simpler but limited — they cannot easily pass complex arguments. Modern Flutter prefers go_router instead.",code:"// Define routes in MaterialApp\nMaterialApp(\n  initialRoute: '/',\n  routes: {\n    '/': (context) => HomeScreen(),\n    '/detail': (context) => DetailScreen(),\n    '/settings': (context) => SettingsScreen(),\n  },\n)\n\n// Navigate by name\nNavigator.pushNamed(context, '/detail');"},{t:"Navigator.pushReplacement",d:"pushReplacement removes the current screen and replaces it with a new one. The user cannot go back to the replaced screen. Use it for login-to-home transitions (after login, you don't want users to go back to login) or splash screen to main app transitions.",code:"// After successful login, replace login with home\nNavigator.pushReplacement(\n  context,\n  MaterialPageRoute(\n    builder: (context) => HomeScreen(),\n  ),\n);\n// User cannot go back to login screen!"},{t:"Navigator.pushAndRemoveUntil",d:"pushAndRemoveUntil pushes a new screen and removes all previous screens from the stack until the predicate returns true. Passing (route) => false removes ALL previous screens. Use it for logout (clear entire stack and show login) or after onboarding (clear onboarding screens).",code:"// Logout: clear everything and show login\nNavigator.pushAndRemoveUntil(\n  context,\n  MaterialPageRoute(\n    builder: (context) => LoginScreen(),\n  ),\n  (route) => false, // Remove ALL previous routes\n);"},{t:"WillPopScope and PopScope",d:"PopScope (replacing the deprecated WillPopScope) intercepts the back button press. Set canPop: false to prevent going back, and use onPopInvokedWithResult to show a confirmation dialog before leaving. Use it for forms with unsaved changes or checkout flows where accidental back presses lose data.",code:"PopScope(\n  canPop: false,\n  onPopInvokedWithResult: (didPop, result) async {\n    if (didPop) return;\n    final shouldPop = await showDialog<bool>(\n      context: context,\n      builder: (context) => AlertDialog(\n        title: Text('Discard changes?'),\n        actions: [\n          TextButton(\n            onPressed: () => Navigator.pop(context, false),\n            child: Text('Cancel'),\n          ),\n          TextButton(\n            onPressed: () => Navigator.pop(context, true),\n            child: Text('Discard'),\n          ),\n        ],\n      ),\n    );\n    if (shouldPop == true && context.mounted) {\n      Navigator.pop(context);\n    }\n  },\n  child: Scaffold(\n    appBar: AppBar(title: Text('Edit Form')),\n    body: MyForm(),\n  ),\n)"}],whatIs:"Flutter's Navigator manages a stack of Route objects representing screens. Navigator.push adds a screen on top, Navigator.pop removes it, and MaterialPageRoute provides platform-appropriate animations. You can pass data forward through constructor parameters and backward through pop results. Named routes provide string-based navigation, while pushReplacement and pushAndRemoveUntil control the back stack.",realWorld:"In team_mvp_kit, basic Navigator is used for simple screen transitions before go_router is introduced. The login flow uses pushReplacement to prevent going back to login after authentication. The app uses pushAndRemoveUntil on logout to clear the entire navigation stack. Understanding Navigator basics is essential before learning go_router.",code:`import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _selectedFruit = 'None selected';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Selected: \$_selectedFruit',
              style: Theme.of(context).textTheme.headlineSmall,
            ),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () async {
                final result = await Navigator.push<String>(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const FruitPickerScreen(),
                  ),
                );
                if (result != null) {
                  setState(() => _selectedFruit = result);
                }
              },
              child: const Text('Pick a Fruit'),
            ),
            const SizedBox(height: 12),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const SettingsScreen(),
                  ),
                );
              },
              child: const Text('Settings'),
            ),
          ],
        ),
      ),
    );
  }
}

class FruitPickerScreen extends StatelessWidget {
  const FruitPickerScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

    return Scaffold(
      appBar: AppBar(title: const Text('Pick a Fruit')),
      body: ListView.builder(
        itemCount: fruits.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(fruits[index]),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {
              // Pop and return the selected fruit
              Navigator.pop(context, fruits[index]);
            },
          );
        },
      ),
    );
  }
}

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Settings')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Simulate logout: clear stack and go to login
            Navigator.pushAndRemoveUntil(
              context,
              MaterialPageRoute(
                builder: (context) => const LoginScreen(),
              ),
              (route) => false,
            );
          },
          child: const Text('Logout'),
        ),
      ),
    );
  }
}

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // After login, replace login with home
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (context) => const HomeScreen(),
              ),
            );
          },
          child: const Text('Login'),
        ),
      ),
    );
  }
}`,funFact:"Flutter's Navigator 1.0 (imperative push/pop) was the original navigation system. Navigator 2.0 was added in Flutter 1.22 for declarative, URL-driven navigation — but it was so complex that the community created packages like go_router and auto_route to simplify it. go_router was eventually adopted by the Flutter team as the recommended solution!",quiz:[{q:"What data structure does Navigator use to manage screens?",opts:["A list","A queue","A stack (LIFO)","A tree"],ans:2},{q:"How do you pass data back from a popped screen to the previous screen?",opts:["Use a global variable","Pass it as an argument to Navigator.pop(context, data)","Call setState on the previous screen directly","Use SharedPreferences"],ans:1},{q:"When should you use Navigator.pushReplacement instead of push?",opts:["Always","When you do not want the user to go back to the current screen","When navigating to a dialog","When the app is closing"],ans:1},{q:"What does Navigator.pushAndRemoveUntil with (route) => false do?",opts:["Removes only the current route","Removes all routes and pushes the new one","Does nothing","Removes routes until it finds a named route"],ans:1},{q:"What widget replaces the deprecated WillPopScope for intercepting back navigation?",opts:["BackHandler","PopScope","NavigationGuard","RouteAware"],ans:1}],challenge:"Build a three-screen flow: HomeScreen shows a message and two buttons (Go to Detail, Go to Settings). DetailScreen accepts a title parameter and has a back button that pops with a result string. SettingsScreen has a Logout button that uses pushAndRemoveUntil to clear the stack and navigate to a LoginScreen. Add a PopScope to the DetailScreen that shows a confirmation dialog before popping.",resources:[{type:"docs",title:"Navigation and Routing",url:"https://docs.flutter.dev/ui/navigation",source:"Flutter Official"},{type:"docs",title:"Navigate to a New Screen and Back",url:"https://docs.flutter.dev/cookbook/navigation/navigation-basics",source:"Flutter Official"},{type:"docs",title:"Return Data from a Screen",url:"https://docs.flutter.dev/cookbook/navigation/returning-data",source:"Flutter Official"}],eli5:"Imagine you are reading a choose-your-own-adventure book. When you go to a new chapter (screen), you stick your finger in the current page (push) so you can come back. When you want to go back, you flip to where your finger was (pop). Navigator.push is putting your finger in and flipping to a new chapter. Navigator.pop is going back to where your finger was. And if you want to start the whole book over (like logging out), pushAndRemoveUntil takes out all your fingers and starts from chapter 1!",codeWalkthrough:["Import the Material package","","Define HomeScreen as a StatefulWidget","","","Create the State class","Track which fruit was selected, starting with none","","Build method creates the UI","Scaffold with Home title in AppBar","Center the content","Column with centered alignment","","Display the currently selected fruit","Style with headlineSmall from theme","","24px gap","ElevatedButton to open the fruit picker","Await the result from Navigator.push","Push a MaterialPageRoute to FruitPickerScreen","","","","If a fruit was selected (not null), update state","","","","12px gap","Another ElevatedButton for settings","Push to SettingsScreen (no result expected)","","","","","","","","","","","FruitPickerScreen is a StatelessWidget","","","Define a list of fruit names","","Scaffold with Pick a Fruit AppBar","ListView.builder for the fruit list","Build a ListTile for each fruit","Display the fruit name","Chevron icon as trailing indicator","On tap, pop with the selected fruit name","Navigator.pop passes the fruit string back to HomeScreen","","","","","","SettingsScreen is a StatelessWidget","","Scaffold with Settings AppBar","Logout button in the center","On press, clear the entire navigation stack","pushAndRemoveUntil pushes LoginScreen","","","(route) => false removes ALL previous routes","","","","","","","LoginScreen is a StatelessWidget","","Scaffold with Login AppBar","Login button in the center","On press, replace login screen with home","pushReplacement ensures user cannot go back to login","","","","","",""],bugChallenge:{code:"ElevatedButton(\n  onPressed: () {\n    final result = Navigator.push<String>(\n      context,\n      MaterialPageRoute(\n        builder: (context) => SelectionScreen(),\n      ),\n    );\n    setState(() => selected = result);\n  },\n  child: Text('Select'),\n)",hint:"Navigator.push returns a Future. What are you missing?",answer:"Navigator.push returns a Future<String?>, not a String directly. The code assigns the Future itself to result without awaiting it. Fix: mark the onPressed callback as async and await the push: final result = await Navigator.push<String>(...); Then check if result != null before calling setState."},difficulty:"beginner",prereqs:[19]},

{id:30,title:"GoRouter",subtitle:"Declarative Routing with Path Parameters and Redirects",analogy:"If Navigator is like manually flipping pages in a book, GoRouter is like a table of contents with hyperlinks. You define all your routes in one place with URL paths ('/home', '/user/:id', '/settings'), and GoRouter handles the navigation, deep links, browser URLs, and redirects automatically. It is like a GPS for your app — you tell it where to go by address, and it figures out the best route.",points:[{t:"GoRouter Setup",d:"GoRouter is configured as a single object with a list of GoRoute definitions. Each GoRoute maps a URL path to a widget builder. Pass the GoRouter instance to MaterialApp.router's routerConfig. This replaces MaterialApp's home, routes, and onGenerateRoute with a single declarative configuration.",code:"import 'package:go_router/go_router.dart';\n\nfinal goRouter = GoRouter(\n  initialLocation: '/home',\n  routes: [\n    GoRoute(\n      path: '/home',\n      builder: (context, state) => const HomeScreen(),\n    ),\n    GoRoute(\n      path: '/settings',\n      builder: (context, state) => const SettingsScreen(),\n    ),\n  ],\n);\n\n// In MaterialApp:\nMaterialApp.router(\n  routerConfig: goRouter,\n)"},{t:"Path Parameters",d:"Path parameters are dynamic segments in a URL marked with a colon: '/user/:id'. GoRouter extracts the value from the URL and passes it through state.pathParameters. Use them for detail screens where the ID comes from the URL, like '/product/42' or '/user/abc123'.",code:"GoRoute(\n  path: '/user/:userId',\n  builder: (context, state) {\n    final userId = state.pathParameters['userId']!;\n    return UserDetailScreen(userId: userId);\n  },\n)\n\n// Navigate:\n// context.go('/user/42');\n// context.push('/user/abc123');"},{t:"Query Parameters",d:"Query parameters are key-value pairs after the ? in a URL: '/search?q=flutter&sort=date'. Access them via state.uri.queryParameters. Use them for optional filters, search queries, or pagination that do not define the route but modify the screen's content.",code:"GoRoute(\n  path: '/search',\n  builder: (context, state) {\n    final query = state.uri.queryParameters['q'] ?? '';\n    final sort = state.uri.queryParameters['sort'] ?? 'date';\n    return SearchScreen(query: query, sortBy: sort);\n  },\n)\n\n// Navigate:\n// context.go('/search?q=flutter&sort=relevance');"},{t:"context.go vs context.push",d:"context.go navigates to a path by replacing the current navigation stack — like typing a URL in a browser. context.push adds the screen on top of the stack — like clicking a link. Use go for top-level navigation (tab switches, deep links) and push for drill-down navigation (list to detail).",code:"// go: replaces the stack (like typing a URL)\ncontext.go('/home');\n\n// push: adds on top of stack (like clicking a link)\ncontext.push('/user/42');\n\n// pop: go back (same as Navigator.pop)\ncontext.pop();\n\n// pushReplacement: replace current screen\ncontext.pushReplacement('/dashboard');"},{t:"Redirect",d:"GoRouter's redirect callback runs before every navigation. Return a new path to redirect, or null to allow the navigation. Use it for authentication guards: if the user is not logged in, redirect '/home' to '/login'. The redirect function receives GoRouterState with the target location.",code:"final goRouter = GoRouter(\n  redirect: (context, state) {\n    final isLoggedIn = authService.isLoggedIn;\n    final isGoingToLogin = state.matchedLocation == '/login';\n\n    // Not logged in and not going to login? Redirect to login\n    if (!isLoggedIn && !isGoingToLogin) {\n      return '/login';\n    }\n\n    // Logged in but going to login? Redirect to home\n    if (isLoggedIn && isGoingToLogin) {\n      return '/home';\n    }\n\n    // No redirect needed\n    return null;\n  },\n  routes: [...],\n);"},{t:"ShellRoute",d:"ShellRoute wraps child routes in a shared layout — typically a Scaffold with a BottomNavigationBar. The shell persists while child routes change, so the bottom nav stays visible across tabs. This is how team_mvp_kit implements its main tab navigation with persistent bottom bar.",code:"ShellRoute(\n  builder: (context, state, child) {\n    return MainScaffold(\n      currentPath: state.matchedLocation,\n      child: child, // The current tab's content\n    );\n  },\n  routes: [\n    GoRoute(\n      path: '/home',\n      builder: (context, state) => const HomeTab(),\n    ),\n    GoRoute(\n      path: '/profile',\n      builder: (context, state) => const ProfileTab(),\n    ),\n    GoRoute(\n      path: '/settings',\n      builder: (context, state) => const SettingsTab(),\n    ),\n  ],\n)"},{t:"Nested Routes (Sub-Routes)",d:"GoRoute can have child routes using the routes property. Child route paths are appended to the parent path. For example, a parent '/user' with a child '/:id' creates '/user/:id'. Nested routes help organize related screens and create logical URL hierarchies.",code:"GoRoute(\n  path: '/products',\n  builder: (context, state) => const ProductListScreen(),\n  routes: [\n    GoRoute(\n      path: ':productId',\n      builder: (context, state) {\n        final id = state.pathParameters['productId']!;\n        return ProductDetailScreen(productId: id);\n      },\n      routes: [\n        GoRoute(\n          path: 'reviews',\n          builder: (context, state) {\n            final id = state.pathParameters['productId']!;\n            return ReviewsScreen(productId: id);\n          },\n        ),\n      ],\n    ),\n  ],\n)\n// /products -> ProductListScreen\n// /products/42 -> ProductDetailScreen\n// /products/42/reviews -> ReviewsScreen"},{t:"Named Routes in GoRouter",d:"Assign a name to each GoRoute for type-safe navigation. Use context.goNamed('routeName', pathParameters: {...}) instead of hardcoding path strings. This prevents typos and makes route changes easier — update the path in one place without changing every navigation call.",code:"GoRoute(\n  name: 'userDetail',\n  path: '/user/:userId',\n  builder: (context, state) {\n    final id = state.pathParameters['userId']!;\n    return UserDetailScreen(userId: id);\n  },\n)\n\n// Navigate by name (type-safe!):\ncontext.goNamed(\n  'userDetail',\n  pathParameters: {'userId': '42'},\n);\n\n// Instead of error-prone:\n// context.go('/user/42');"}],whatIs:"GoRouter is a declarative routing package for Flutter that maps URL paths to screens. It supports path parameters (/user/:id), query parameters, redirects for auth guards, ShellRoute for persistent layouts like bottom navigation, nested routes, and named routes. It replaces Navigator's imperative push/pop with a URL-based declarative approach that supports deep linking and web URLs.",realWorld:"In team_mvp_kit, GoRouter is the sole navigation solution. The router configuration lives in a single file with all routes defined declaratively. A redirect guard checks authentication status on every navigation. ShellRoute wraps the main tabs with a persistent BottomNavigationBar. Path parameters pass IDs to detail screens. This pattern scales cleanly from 5 screens to 50+.",code:`import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

// Authentication state (simplified)
class AuthService {
  bool isLoggedIn = false;
}

final authService = AuthService();

// Router configuration
final goRouter = GoRouter(
  initialLocation: '/login',
  redirect: (context, state) {
    final loggedIn = authService.isLoggedIn;
    final loggingIn = state.matchedLocation == '/login';

    if (!loggedIn && !loggingIn) return '/login';
    if (loggedIn && loggingIn) return '/home';
    return null;
  },
  routes: [
    GoRoute(
      path: '/login',
      builder: (context, state) => const LoginScreen(),
    ),
    ShellRoute(
      builder: (context, state, child) {
        return MainShell(child: child);
      },
      routes: [
        GoRoute(
          path: '/home',
          builder: (context, state) => const HomeScreen(),
        ),
        GoRoute(
          path: '/profile',
          builder: (context, state) => const ProfileScreen(),
        ),
        GoRoute(
          name: 'userDetail',
          path: '/user/:userId',
          builder: (context, state) {
            final id = state.pathParameters['userId']!;
            return UserDetailScreen(userId: id);
          },
        ),
      ],
    ),
  ],
);

// Main shell with bottom navigation
class MainShell extends StatelessWidget {
  final Widget child;
  const MainShell({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: child,
      bottomNavigationBar: NavigationBar(
        selectedIndex: _calculateIndex(context),
        onDestinationSelected: (index) {
          switch (index) {
            case 0:
              context.go('/home');
            case 1:
              context.go('/profile');
          }
        },
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.home_outlined),
            selectedIcon: Icon(Icons.home),
            label: 'Home',
          ),
          NavigationDestination(
            icon: Icon(Icons.person_outlined),
            selectedIcon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
      ),
    );
  }

  int _calculateIndex(BuildContext context) {
    final location = GoRouterState.of(context).matchedLocation;
    if (location.startsWith('/profile')) return 1;
    return 0;
  }
}

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            authService.isLoggedIn = true;
            context.go('/home');
          },
          child: const Text('Login'),
        ),
      ),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            context.push('/user/42');
          },
          child: const Text('View User 42'),
        ),
      ),
    );
  }
}

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Profile')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            authService.isLoggedIn = false;
            context.go('/login');
          },
          child: const Text('Logout'),
        ),
      ),
    );
  }
}

class UserDetailScreen extends StatelessWidget {
  final String userId;
  const UserDetailScreen({super.key, required this.userId});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('User \$userId')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('User Detail: \$userId',
                style: Theme.of(context).textTheme.headlineMedium),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () => context.pop(),
              child: const Text('Go Back'),
            ),
          ],
        ),
      ),
    );
  }
}`,funFact:"GoRouter was originally a community package by Chris Sells, but it was so good that the Flutter team officially adopted it as a first-party package maintained under the flutter.dev organization. It is now the recommended navigation solution for Flutter apps that need URL-based routing, deep linking, or web support!",quiz:[{q:"What is the main difference between context.go() and context.push()?",opts:["go() is faster","go() replaces the navigation stack while push() adds on top","push() only works with named routes","There is no difference"],ans:1},{q:"How do you extract a path parameter from '/user/:userId' in a GoRoute builder?",opts:["state.params['userId']","state.pathParameters['userId']","context.userId","route.userId"],ans:1},{q:"What does the redirect callback return to allow navigation without redirecting?",opts:["true","The current path","An empty string","null"],ans:3},{q:"What is the purpose of ShellRoute in GoRouter?",opts:["To create shell scripts","To wrap child routes in a shared layout like a BottomNavigationBar","To handle errors","To define root routes"],ans:1},{q:"How do you navigate by route name instead of path in GoRouter?",opts:["context.go('routeName')","context.goNamed('routeName', pathParameters: {...})","Navigator.pushNamed(context, 'routeName')","GoRouter.of(context).name('routeName')"],ans:1}],challenge:"Set up a complete GoRouter configuration with: a '/login' route, a ShellRoute with bottom navigation containing '/home' and '/profile' tabs, a nested '/user/:userId' route inside the shell, a redirect that forces unauthenticated users to '/login', and named routes for all screens. Navigate between them using context.go, context.push, and context.goNamed.",resources:[{type:"docs",title:"GoRouter Package",url:"https://pub.dev/packages/go_router",source:"pub.dev"},{type:"docs",title:"GoRouter Official Documentation",url:"https://docs.flutter.dev/ui/navigation/url-strategies",source:"Flutter Official"},{type:"docs",title:"Navigation and Routing Overview",url:"https://docs.flutter.dev/ui/navigation",source:"Flutter Official"}],eli5:"Imagine your app is a building with many rooms. Navigator is like walking through doors one at a time — you push open a door to enter a room, and close it (pop) to go back. GoRouter is like having a building directory in the lobby. Instead of walking through every door, you look up the room number (URL path like '/room/42') and take the elevator directly there. The directory (redirect) can also say 'Sorry, you need a visitor badge (login) before entering that room!' ShellRoute is like the hallway — it stays the same while you walk into different rooms off of it.",codeWalkthrough:["Import the Material package","Import the go_router package","","Simple AuthService class to track login status","Boolean flag for logged-in state","","Create a global instance of AuthService","","Define the GoRouter configuration","Start at the login screen","Redirect callback runs before every navigation","Check if the user is logged in","Check if they are heading to the login page","If not logged in and not going to login, redirect to login","If logged in but going to login, redirect to home","Otherwise allow the navigation (return null)","","","Define the login route outside the shell","","","ShellRoute wraps child routes with a shared layout","Builder provides the child widget for the current tab","MainShell provides persistent bottom navigation","","Home tab route at /home","","","Profile tab route at /profile","","","User detail route with path parameter","Named route for type-safe navigation","Extract userId from path parameters","Pass userId to the detail screen","","","","","","MainShell widget wraps content with bottom navigation","Accept the child widget that changes per route","","Scaffold with the child as body","NavigationBar for bottom tabs","Calculate selected index from current path","Handle tab selection with context.go","go to /home for first tab","go to /profile for second tab","","Home destination with outlined and filled icons","","","","Profile destination","","","","","Helper method to determine selected tab index","Get the current matched location from GoRouter","If path starts with /profile, select index 1","Default to index 0 (home)","","","LoginScreen with login button","On press: set logged in to true and go to /home","GoRouter redirect will allow this since user is now logged in","","","","HomeScreen with a button to view user detail","context.push adds user detail ON TOP of the home tab","Uses push (not go) so user can press back to return","","","","ProfileScreen with a logout button","On press: set logged in to false and go to /login","GoRouter redirect handles clearing the session","","","","UserDetailScreen receives userId from the route","Display the user ID","context.pop goes back to the previous screen","",""],bugChallenge:{code:"GoRouter(\n  routes: [\n    GoRoute(\n      path: 'home',\n      builder: (context, state) => HomeScreen(),\n    ),\n    GoRoute(\n      path: 'user/:id',\n      builder: (context, state) {\n        return UserScreen(id: state.pathParameters['userId']!);\n      },\n    ),\n  ],\n)",hint:"Look carefully at the path format and the parameter name used to extract the value...",answer:"Two bugs: (1) Paths must start with a slash — 'home' should be '/home' and 'user/:id' should be '/user/:id'. (2) The path parameter is named ':id' but the code extracts 'userId'. Fix: either change the path to '/user/:userId' or change the extraction to state.pathParameters['id']!"},difficulty:"intermediate",prereqs:[29]},
// ============ LESSON 31 ============
{id:31,title:"Passing Data Between Screens",subtitle:"Sending luggage on your route trips",analogy:"Imagine you are sending a friend on a road trip. You pack a suitcase (route arguments) with everything they need at the destination. Sometimes you write a note on the suitcase tag (query params), and sometimes your friend brings back a souvenir when they return (returning data). In Flutter, screens pass data the same way -- you send arguments forward, read parameters from the URL, and pop results back.",points:[{t:"Route Arguments with GoRouter",d:"GoRouter lets you pass objects via the 'extra' parameter when navigating. The destination screen reads them from GoRouterState.",code:`context.go('/profile', extra: user);`},{t:"Path Parameters",d:"Path parameters are part of the URL itself. They identify a specific resource, like a user ID or product slug.",code:`GoRoute(\n  path: '/user/:id',\n  builder: (context, state) {\n    final userId = state.pathParameters['id']!;\n    return UserScreen(userId: userId);\n  },\n)`},{t:"Query Parameters",d:"Query parameters are optional key-value pairs appended to the URL after a question mark. Great for filters, search terms, or optional flags.",code:`// Navigate with query params\ncontext.go('/search?query=flutter&sort=recent');\n\n// Read them\nfinal query = state.uri.queryParameters['query'];`},{t:"Typed Extras for Complex Data",d:"When you need to pass a full object that cannot be serialized into a URL string, use the extra parameter. This keeps your URLs clean while sending rich data.",code:`context.push('/order-summary', extra: OrderDetails(\n  items: cartItems,\n  total: 49.99,\n  address: shippingAddress,\n));\n\n// In the destination\nfinal details = state.extra as OrderDetails;`},{t:"Returning Data with pop",d:"A screen can return a result when it pops. The caller awaits the push call to receive the result, just like waiting for a friend to come back with souvenirs.",code:`// Push and wait for result\nfinal selectedColor = await context.push<Color>('/color-picker');\n\n// In color picker screen\ncontext.pop(Colors.teal);`},{t:"Null Safety with Returned Data",d:"The returned value can be null if the user presses the back button without selecting anything. Always handle the null case gracefully.",code:`final result = await context.push<String>('/editor');\nif (result != null) {\n  setState(() => message = result);\n}`},{t:"Route Guards with Redirect",d:"Sometimes you need to check data before allowing navigation. GoRouter redirect can inspect state and reroute if conditions are not met.",code:`redirect: (context, state) {\n  final isLoggedIn = authService.isLoggedIn;\n  if (state.matchedLocation == '/profile' && !isLoggedIn) {\n    return '/login?redirect=/profile';\n  }\n  return null;\n}`},{t:"Deep Links and Data",d:"Path and query parameters naturally support deep linking because they are part of the URL. Extras do not survive deep links since they are in-memory only.",code:`// Deep-linkable (good for sharing)\n// myapp.com/product/42?ref=email\n\n// NOT deep-linkable (in-memory only)\n// context.go('/product', extra: productObj);`},{t:"team_mvp_kit Navigation Pattern",d:"In team_mvp_kit, routes are organized in a central router file. Each feature module defines its own routes, and data is passed through typed route classes for safety.",code:`class ProductRouteData {\n  final String productId;\n  final String? referralCode;\n  const ProductRouteData({\n    required this.productId,\n    this.referralCode,\n  });\n}`}],whatIs:"Passing data between screens is the process of sending information from one screen to another during navigation. Flutter with GoRouter supports three main approaches: path parameters embedded in the URL, query parameters appended to the URL, and in-memory extras for complex objects. Screens can also return data when they pop, enabling two-way communication between screens.",realWorld:"Every real app needs to pass data between screens. When a user taps a product in a list, the detail screen needs the product ID. When a user fills out a multi-step form, each step passes accumulated data forward. When a user picks a photo from a gallery, the selected image is returned to the calling screen. Mastering data passing makes your navigation feel seamless and your code maintainable.",code:`import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

// Define a typed data class for route arguments
class ProductArgs {
  final String id;
  final String name;
  const ProductArgs({required this.id, required this.name});
}

// Route configuration
final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const HomeScreen(),
    ),
    GoRoute(
      path: '/product/:id',
      builder: (context, state) {
        final id = state.pathParameters['id']!;
        final args = state.extra as ProductArgs?;
        return ProductScreen(id: id, name: args?.name);
      },
    ),
    GoRoute(
      path: '/color-picker',
      builder: (context, state) => const ColorPickerScreen(),
    ),
  ],
);

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Shop')),
      body: ListView(
        children: [
          ListTile(
            title: const Text('Flutter Widget Book'),
            onTap: () {
              context.push(
                '/product/101',
                extra: const ProductArgs(
                  id: '101',
                  name: 'Flutter Widget Book',
                ),
              );
            },
          ),
          ListTile(
            title: const Text('Pick a theme color'),
            onTap: () async {
              final color = await context
                  .push<Color>('/color-picker');
              if (color != null && context.mounted) {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('Picked: \$color')),
                );
              }
            },
          ),
        ],
      ),
    );
  }
}

class ProductScreen extends StatelessWidget {
  final String id;
  final String? name;
  const ProductScreen({super.key, required this.id, this.name});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(name ?? 'Product \$id')),
      body: Center(child: Text('Product ID: \$id')),
    );
  }
}

class ColorPickerScreen extends StatelessWidget {
  const ColorPickerScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final colors = [Colors.red, Colors.teal, Colors.purple];
    return Scaffold(
      appBar: AppBar(title: const Text('Pick a Color')),
      body: ListView(
        children: colors.map((c) => ListTile(
          tileColor: c,
          title: Text(c.toString()),
          onTap: () => context.pop(c),
        )).toList(),
      ),
    );
  }
}`,funFact:"In the early days of Flutter, passing data between screens meant manually constructing route objects and casting arguments from generic Object types. GoRouter's typed extras and path parameters were a huge quality-of-life improvement that the community had been requesting since 2018.",quiz:[{q:"Which GoRouter parameter is best for passing complex objects that do not need to survive deep links?",opts:["pathParameters","queryParameters","extra","redirect"],ans:2},{q:"What happens if a user presses the back button instead of selecting a value when you use 'await context.push<String>(...)'?",opts:["The app crashes with a null error","The push returns an empty string","The push returns null","The push never completes"],ans:2},{q:"Why are path parameters preferred over extras for shareable URLs?",opts:["Path parameters are faster to parse","Path parameters survive deep links since they are part of the URL","Path parameters can hold complex objects","Path parameters are encrypted"],ans:1},{q:"In GoRouter, how do you read a path parameter named 'id'?",opts:["state.extra['id']","state.params.id","state.pathParameters['id']","state.getId()"],ans:2}],challenge:"Create a two-screen app: a ListScreen showing 5 fictional books with titles and authors, and a DetailScreen that receives the book data via GoRouter extras. Add a 'Rate this book' button on the DetailScreen that navigates to a RatingScreen. The RatingScreen should pop back a rating (1-5), and the DetailScreen should display the returned rating. Use typed data classes for all route arguments.",resources:[{type:"docs",title:"GoRouter: Route Parameters",url:"https://pub.dev/documentation/go_router/latest/topics/Parameters-topic.html",source:"pub.dev"},{type:"docs",title:"Flutter Navigation and Routing",url:"https://docs.flutter.dev/ui/navigation",source:"flutter.dev"},{type:"docs",title:"GoRouter Extra Codec",url:"https://pub.dev/documentation/go_router/latest/topics/Type-safe%20routes-topic.html",source:"pub.dev"}],eli5:"Imagine you are playing a treasure hunt game. At each station, the game master gives you a card with clues for the next station. Sometimes the clue is written right on the map (that is like a path parameter in the URL). Sometimes there is a secret note taped under the card that only you can see (that is like extras). And sometimes, when you finish a station, you bring back a prize to show the game master (that is like returning data with pop). Each way of passing information has its own purpose!",codeWalkthrough:["Import Flutter material library and GoRouter package for navigation.","Define a ProductArgs class with id and name fields to carry typed data between screens.","Create the GoRouter with three routes: home at root, product with a path parameter, and color-picker.","The product route reads the id from pathParameters and optionally reads ProductArgs from extra.","HomeScreen is a StatelessWidget with a ListView of navigation options.","The first ListTile navigates to product screen using context.push with both a path param and extra args.","The second ListTile navigates to color-picker and awaits the returned Color value.","After the push completes, check if color is not null and context is still mounted before showing a SnackBar.","ProductScreen receives id and optional name through its constructor, displaying them in the AppBar and body.","ColorPickerScreen shows a list of colors. Tapping one calls context.pop(c) to return the selected color.","The map function creates a ListTile for each color, with tileColor set to visually preview each option."],bugChallenge:{code:`class DetailScreen extends StatelessWidget {
  const DetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final args = GoRouterState.of(context).extra as UserData;
    return Scaffold(
      appBar: AppBar(title: Text(args.name)),
      body: ElevatedButton(
        onPressed: () async {
          final result = context.push<bool>('/confirm');
          if (result) {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Confirmed!')),
            );
          }
        },
        child: const Text('Confirm'),
      ),
    );
  }
}`,hint:"Two issues: one about awaiting a Future, and one about null safety on the returned value.",answer:"First, context.push<bool>('/confirm') returns a Future<bool?> but is missing the await keyword. Second, the result can be null if the user presses back, so the null check should be 'if (result == true)' instead of 'if (result)'. The corrected code: 'final result = await context.push<bool>(\"/confirm\"); if (result == true) { ... }'"},difficulty:"intermediate",prereqs:[30]},
// ============ LESSON 32 ============
{id:32,title:"Understanding State",subtitle:"The memory that makes your app alive",analogy:"Think of your app as a puppet show. The puppets on stage are the UI -- what the audience sees. But behind the curtain, there is a puppeteer pulling strings -- that is the state. Every time the puppeteer moves a string, the puppet changes position. In Flutter, every time state changes, the UI rebuilds to reflect the new reality. The audience never sees the strings, just the smooth performance.",points:[{t:"What Is State?",d:"State is any data that can change over time and affects what the UI displays. A counter value, a list of todos, whether a checkbox is checked -- all of these are state.",code:`// This variable IS state\nint counter = 0;\n\n// When it changes, UI should update\ncounter++; // UI needs to rebuild`},{t:"UI State vs App State",d:"UI state (ephemeral state) is local to a single widget -- like whether a text field has focus or a panel is expanded. App state is shared across multiple widgets -- like the logged-in user or a shopping cart.",code:`// UI state (ephemeral) - stays in one widget\nbool _isExpanded = false;\n\n// App state (shared) - needed across screens\nclass AppState {\n  final User? currentUser;\n  final List<CartItem> cart;\n  final ThemeMode themeMode;\n}`},{t:"StatefulWidget Recap",d:"StatefulWidget holds mutable state in its State object. Calling setState triggers a rebuild of that widget and its descendants.",code:`class Counter extends StatefulWidget {\n  const Counter({super.key});\n  @override\n  State<Counter> createState() => _CounterState();\n}\n\nclass _CounterState extends State<Counter> {\n  int _count = 0;\n  void _increment() {\n    setState(() => _count++);\n  }\n}`},{t:"The Problem with setState at Scale",d:"As apps grow, setState becomes problematic. State gets scattered across many widgets, becomes hard to test, and passing data through deep widget trees leads to prop drilling.",code:`// Prop drilling nightmare\n// MyApp -> HomePage -> ProductList -> ProductCard\n//   -> PriceTag -> DiscountBadge(discount: ??)\n//\n// Every widget in the chain must pass\n// the discount data down, even if it\n// does not use it.`},{t:"Reactive Programming Basics",d:"Reactive programming means your UI reacts to state changes automatically. Instead of manually telling each widget to update, you declare what the UI should look like for any given state, and the framework handles the rest.",code:`// Imperative (manual updates)\nvoid updateUI() {\n  titleLabel.text = state.title;\n  priceLabel.text = state.price.toString();\n  if (state.isOnSale) saleIcon.show();\n}\n\n// Reactive (declarative)\nWidget build(BuildContext context) {\n  return Column(children: [\n    Text(state.title),\n    Text('\\\$\${state.price}'),\n    if (state.isOnSale) const Icon(Icons.sell),\n  ]);\n}`},{t:"Streams: The River of Data",d:"Dart Streams are sequences of asynchronous data events. They are the backbone of reactive patterns in Flutter. BLoC pattern is built entirely on Streams.",code:`// A stream emits values over time\nStream<int> countStream() async* {\n  for (int i = 1; i <= 5; i++) {\n    await Future.delayed(Duration(seconds: 1));\n    yield i;\n  }\n}\n\n// Listen to the stream\ncountStream().listen((value) {\n  print('Got: \$value');\n});`},{t:"StreamController for Custom Streams",d:"StreamController lets you create streams that you can manually add data to. This is the foundation of how BLoC works under the hood -- events go in, states come out.",code:`final controller = StreamController<String>();\n\n// Add data (input side)\ncontroller.sink.add('Hello');\ncontroller.sink.add('World');\n\n// Listen (output side)\ncontroller.stream.listen((data) {\n  print(data);\n});\n\n// Always close when done\ncontroller.close();`},{t:"Immutable State",d:"In professional Flutter apps, state objects should be immutable. Instead of modifying state in place, you create a new state object with the changes. This makes state predictable, debuggable, and safe for comparison.",code:`// BAD: Mutable state\nclass AppState {\n  String username;\n  List<String> items;\n  AppState(this.username, this.items);\n}\n// state.items.add('new'); // Mutation!\n\n// GOOD: Immutable state\nclass AppState {\n  final String username;\n  final List<String> items;\n  const AppState(this.username, this.items);\n\n  AppState copyWith({String? username, List<String>? items}) {\n    return AppState(\n      username ?? this.username,\n      items ?? this.items,\n    );\n  }\n}`},{t:"When Does Flutter Rebuild?",d:"Flutter rebuilds a widget when setState is called, when an InheritedWidget it depends on changes, or when its parent rebuilds and passes new data. Understanding rebuild triggers helps you write efficient UIs.",code:`// Only rebuilds when count changes\nBlocBuilder<CounterBloc, int>(\n  buildWhen: (previous, current) {\n    return previous != current;\n  },\n  builder: (context, count) {\n    return Text('Count: \$count');\n  },\n)`}],whatIs:"State is the data that your app holds in memory at any given moment which determines what the UI looks like. When state changes, Flutter rebuilds the affected widgets to reflect the new state. There are two kinds: ephemeral UI state that lives in a single widget, and app state that is shared across the application. Professional Flutter apps use reactive patterns where the UI automatically reacts to state changes through streams and state management libraries like BLoC.",realWorld:"Every interactive app is driven by state. Instagram's feed is state (a list of posts). The like count on a post is state. Whether you are on the home tab or profile tab is state. Managing state well means your app is predictable, testable, and maintainable. Managing it poorly leads to bugs where the UI shows stale data, buttons that do nothing, or screens that flicker.",code:`import 'dart:async';

// Immutable state class
class TodoState {
  final List<String> todos;
  final bool isLoading;
  final String? error;

  const TodoState({
    this.todos = const [],
    this.isLoading = false,
    this.error,
  });

  TodoState copyWith({
    List<String>? todos,
    bool? isLoading,
    String? error,
  }) {
    return TodoState(
      todos: todos ?? this.todos,
      isLoading: isLoading ?? this.isLoading,
      error: error,
    );
  }

  @override
  String toString() =>
    'TodoState(todos: \${todos.length}, '
    'loading: \$isLoading, error: \$error)';
}

// Simple reactive store using StreamController
class TodoStore {
  TodoState _state = const TodoState();
  final _controller = StreamController<TodoState>.broadcast();

  Stream<TodoState> get stream => _controller.stream;
  TodoState get current => _state;

  void _emit(TodoState newState) {
    _state = newState;
    _controller.add(newState);
  }

  Future<void> loadTodos() async {
    _emit(_state.copyWith(isLoading: true, error: null));
    try {
      await Future.delayed(const Duration(seconds: 1));
      final todos = ['Buy groceries', 'Learn Flutter', 'Build app'];
      _emit(_state.copyWith(todos: todos, isLoading: false));
    } catch (e) {
      _emit(_state.copyWith(
        isLoading: false,
        error: e.toString(),
      ));
    }
  }

  void addTodo(String todo) {
    final updated = [..._state.todos, todo];
    _emit(_state.copyWith(todos: updated));
  }

  void removeTodo(int index) {
    final updated = [..._state.todos]..removeAt(index);
    _emit(_state.copyWith(todos: updated));
  }

  void dispose() {
    _controller.close();
  }
}

void main() async {
  final store = TodoStore();

  store.stream.listen((state) {
    print('State changed: \$state');
  });

  await store.loadTodos();
  store.addTodo('Write tests');
  store.removeTodo(0);

  store.dispose();
}`,funFact:"The concept of reactive programming dates back to a 1997 paper on Functional Reactive Programming (FRP) by Conal Elliott and Paul Hudak. Flutter's entire rendering philosophy -- declaring what the UI should look like for a given state and letting the framework figure out the changes -- is a direct descendant of these ideas.",quiz:[{q:"What is the key difference between UI state and app state?",opts:["UI state is faster than app state","UI state is local to one widget, app state is shared across the app","App state only exists on the server","UI state uses streams, app state uses setState"],ans:1},{q:"Why should state objects be immutable in professional Flutter apps?",opts:["Immutable objects use less memory","Dart requires all objects to be immutable","Immutable state is predictable, debuggable, and safe for equality comparison","Immutable objects render faster"],ans:2},{q:"What does the copyWith pattern accomplish?",opts:["It deep-copies the entire widget tree","It creates a new state object with some fields changed and others kept the same","It copies a widget from one screen to another","It duplicates a stream"],ans:1},{q:"What Dart feature do BLoC and reactive stores use to emit state changes over time?",opts:["Futures","Isolates","Streams","Mixins"],ans:2},{q:"Why is prop drilling a problem at scale?",opts:["It causes memory leaks","It makes the app slower at runtime","Every widget in the chain must pass data even if it does not use it","Dart does not support passing props"],ans:2}],challenge:"Build a simple reactive counter store (without Flutter, just Dart) that uses a StreamController. The store should support increment, decrement, and reset operations. Each operation should emit a new immutable CounterState with the updated count and a timestamp of when the change happened. Write a main function that subscribes to the stream, performs several operations, and prints each state change.",resources:[{type:"docs",title:"Flutter State Management Introduction",url:"https://docs.flutter.dev/data-and-backend/state-mgmt/intro",source:"flutter.dev"},{type:"docs",title:"Dart Streams",url:"https://dart.dev/tutorials/language/streams",source:"dart.dev"},{type:"docs",title:"Flutter State Management Options",url:"https://docs.flutter.dev/data-and-backend/state-mgmt/options",source:"flutter.dev"}],eli5:"Imagine you have a whiteboard in your room. Everything written on it is the 'state' of your room. If you erase 'clean room' and write 'messy room,' anyone who walks in sees the updated whiteboard. In an app, the whiteboard is the state, and the room is the screen. When you change what is on the whiteboard, the screen automatically updates to match. The cool part is you never have to tell the screen to change -- it just watches the whiteboard and redraws itself whenever something changes!",codeWalkthrough:["Define an immutable TodoState class with three fields: a list of todos, a loading flag, and an optional error message.","The constructor uses const and provides default values so you can create empty states easily.","The copyWith method creates a new TodoState, replacing only the fields you pass while keeping the rest unchanged.","Override toString so printing the state gives a readable summary of todos count, loading, and error.","TodoStore is our simple reactive store. It holds a private _state and a broadcast StreamController.","Expose the stream for listeners and a current getter for synchronous access to the latest state.","The _emit method updates the internal state and pushes the new state into the stream.","loadTodos sets loading to true and clears any previous error before starting the async operation.","After a simulated delay, it emits a new state with the loaded todos and loading set to false.","If the try block throws, the catch block emits a state with loading false and the error message.","addTodo creates a new list by spreading existing todos and adding the new one, then emits.","removeTodo creates a copy of the list, removes the item at the given index, then emits the updated state.","dispose closes the StreamController to prevent memory leaks.","In main, we create a store and subscribe to its stream, printing every state change.","We call loadTodos (which is async), add a todo, and remove one, then dispose the store."],bugChallenge:{code:`class CounterStore {
  int _count = 0;
  final _controller = StreamController<int>();

  Stream<int> get stream => _controller.stream;

  void increment() {
    _count++;
    _controller.add(_count);
  }

  void dispose() {
    _controller.close();
  }
}

void main() {
  final store = CounterStore();
  store.stream.listen((c) => print('A: \$c'));
  store.stream.listen((c) => print('B: \$c'));
  store.increment();
}`,hint:"What happens when two listeners try to subscribe to a regular StreamController?",answer:"A regular StreamController only supports one listener. The second listen call will throw a 'Stream has already been listened to' error. Fix it by using StreamController<int>.broadcast() so multiple listeners can subscribe to the same stream."},difficulty:"intermediate",prereqs:[18]},
// ============ LESSON 33 ============
{id:33,title:"BLoC Pattern - Events & States",subtitle:"The traffic controller for your app's brain",analogy:"Imagine a restaurant kitchen. Customers send in orders (Events) to the kitchen. The chef (BLoC) reads each order and prepares dishes. When a dish is ready, it goes out on a tray (State) to the dining room (UI). The chef never walks into the dining room, and the customers never walk into the kitchen. Events flow in, States flow out. That clean separation is what makes a restaurant -- and a BLoC -- work smoothly.",points:[{t:"What Is BLoC?",d:"BLoC stands for Business Logic Component. It is a design pattern that separates business logic from the UI by using Streams. Events go into the BLoC, and States come out. The UI never contains business logic.",code:`// Events IN --> [BLoC] --> States OUT\n//\n// UserTappedLogin --> AuthBloc --> AuthLoading\n//                                 AuthSuccess\n//                                 AuthFailure`},{t:"Event Classes",d:"Events represent user actions or system triggers. Each event is a class. They are the inputs to your BLoC -- the orders the kitchen receives.",code:`abstract class AuthEvent {}\n\nclass LoginRequested extends AuthEvent {\n  final String email;\n  final String password;\n  LoginRequested({required this.email, required this.password});\n}\n\nclass LogoutRequested extends AuthEvent {}\n\nclass AuthCheckRequested extends AuthEvent {}`},{t:"State Classes",d:"States represent the current condition of a feature. The UI reads the current state and renders accordingly. Each state is a class describing what the screen should show.",code:`abstract class AuthState {}\n\nclass AuthInitial extends AuthState {}\nclass AuthLoading extends AuthState {}\n\nclass AuthSuccess extends AuthState {\n  final User user;\n  AuthSuccess(this.user);\n}\n\nclass AuthFailure extends AuthState {\n  final String message;\n  AuthFailure(this.message);\n}`},{t:"Equatable for State Comparison",d:"BLoC uses equality checks to decide whether to rebuild the UI. The Equatable package makes it easy to compare objects by their properties instead of by reference.",code:`class AuthSuccess extends Equatable {\n  final User user;\n  const AuthSuccess(this.user);\n\n  @override\n  List<Object?> get props => [user];\n}\n\n// Now AuthSuccess(userA) == AuthSuccess(userA)\n// is true if user objects have same props`},{t:"BaseEvent Pattern from team_mvp_kit",d:"In team_mvp_kit, all events extend a common BaseEvent class that extends Equatable. This ensures consistent equality behavior and makes the event hierarchy clean.",code:`abstract class BaseEvent extends Equatable {\n  const BaseEvent();\n\n  @override\n  List<Object?> get props => [];\n}\n\n// Feature-specific events extend BaseEvent\nclass LoadProducts extends BaseEvent {}\n\nclass SearchProducts extends BaseEvent {\n  final String query;\n  const SearchProducts(this.query);\n\n  @override\n  List<Object?> get props => [query];\n}`},{t:"BaseState Pattern from team_mvp_kit",d:"Similarly, all states extend a BaseState class. This provides a unified state hierarchy and ensures Equatable comparison for all states across the app.",code:`abstract class BaseState extends Equatable {\n  const BaseState();\n\n  @override\n  List<Object?> get props => [];\n}\n\nclass ProductState extends BaseState {\n  final List<Product> products;\n  final bool isLoading;\n  final String? error;\n  const ProductState({\n    this.products = const [],\n    this.isLoading = false,\n    this.error,\n  });\n\n  @override\n  List<Object?> get props => [products, isLoading, error];\n}`},{t:"The Bloc Class",d:"A Bloc class takes events as input and emits states as output. You register event handlers using the on<EventType> method, and each handler processes the event and emits new states.",code:`class AuthBloc extends Bloc<AuthEvent, AuthState> {\n  final AuthRepository _authRepo;\n\n  AuthBloc(this._authRepo) : super(AuthInitial()) {\n    on<LoginRequested>(_onLogin);\n    on<LogoutRequested>(_onLogout);\n  }\n\n  Future<void> _onLogin(\n    LoginRequested event,\n    Emitter<AuthState> emit,\n  ) async {\n    emit(AuthLoading());\n    try {\n      final user = await _authRepo.login(\n        event.email, event.password,\n      );\n      emit(AuthSuccess(user));\n    } catch (e) {\n      emit(AuthFailure(e.toString()));\n    }\n  }\n}`},{t:"Single vs Multi-State BLoCs",d:"Some BLoCs use a single state class with multiple fields (loading, data, error). Others use separate classes per state. team_mvp_kit prefers single-class states with copyWith for simpler features and sealed class hierarchies for complex ones.",code:`// Single state class approach\nclass ProductState extends BaseState {\n  final List<Product> products;\n  final bool isLoading;\n  final String? error;\n\n  ProductState copyWith({...});\n}\n\n// Sealed class hierarchy approach\nsealed class PaymentState extends BaseState {}\nclass PaymentInitial extends PaymentState {}\nclass PaymentProcessing extends PaymentState {}\nclass PaymentSuccess extends PaymentState {\n  final Receipt receipt;\n}\nclass PaymentFailed extends PaymentState {\n  final String reason;\n}`},{t:"Naming Conventions",d:"Good naming makes BLoC code self-documenting. Events should describe what happened (past tense or requested action). States should describe current conditions.",code:`// Events: What happened?\nclass ProductsLoadRequested extends BaseEvent {}\nclass ProductAddedToCart extends BaseEvent {}\nclass FilterChanged extends BaseEvent {}\n\n// States: What is the current condition?\nclass ProductsLoading extends BaseState {}\nclass ProductsLoaded extends BaseState {}\nclass ProductsError extends BaseState {}`}],whatIs:"The BLoC (Business Logic Component) pattern is an architecture for Flutter apps that separates business logic from the UI using events and states. You define Event classes that represent user actions or system triggers, and State classes that represent the current condition of a feature. The BLoC receives events, processes them through business logic, and emits new states that the UI reacts to. Combined with Equatable for efficient comparison, this creates a predictable, testable, and scalable architecture.",realWorld:"BLoC is one of the most widely adopted state management solutions in production Flutter apps, used by companies like BMW, Alibaba, and Google teams. The event-state pattern maps naturally to how users interact with apps: the user does something (event), the app processes it (BLoC logic), and the screen updates (state). In team_mvp_kit, every feature follows this pattern with BaseBloc, BaseEvent, and BaseState, making the codebase consistent and onboarding new developers straightforward.",code:`import 'package:equatable/equatable.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

// ---- Base classes (from team_mvp_kit) ----

abstract class BaseEvent extends Equatable {
  const BaseEvent();
  @override
  List<Object?> get props => [];
}

abstract class BaseState extends Equatable {
  const BaseState();
  @override
  List<Object?> get props => [];
}

// ---- Events ----

class LoadTodos extends BaseEvent {}

class AddTodo extends BaseEvent {
  final String title;
  const AddTodo(this.title);
  @override
  List<Object?> get props => [title];
}

class ToggleTodo extends BaseEvent {
  final int index;
  const ToggleTodo(this.index);
  @override
  List<Object?> get props => [index];
}

class DeleteTodo extends BaseEvent {
  final int index;
  const DeleteTodo(this.index);
  @override
  List<Object?> get props => [index];
}

// ---- State ----

class TodoItem {
  final String title;
  final bool isDone;
  const TodoItem({required this.title, this.isDone = false});

  TodoItem copyWith({String? title, bool? isDone}) {
    return TodoItem(
      title: title ?? this.title,
      isDone: isDone ?? this.isDone,
    );
  }
}

class TodoState extends BaseState {
  final List<TodoItem> todos;
  final bool isLoading;
  final String? error;

  const TodoState({
    this.todos = const [],
    this.isLoading = false,
    this.error,
  });

  TodoState copyWith({
    List<TodoItem>? todos,
    bool? isLoading,
    String? error,
  }) {
    return TodoState(
      todos: todos ?? this.todos,
      isLoading: isLoading ?? this.isLoading,
      error: error,
    );
  }

  @override
  List<Object?> get props => [todos, isLoading, error];
}

// ---- BLoC ----

class TodoBloc extends Bloc<BaseEvent, TodoState> {
  TodoBloc() : super(const TodoState()) {
    on<LoadTodos>(_onLoad);
    on<AddTodo>(_onAdd);
    on<ToggleTodo>(_onToggle);
    on<DeleteTodo>(_onDelete);
  }

  Future<void> _onLoad(
    LoadTodos event,
    Emitter<TodoState> emit,
  ) async {
    emit(state.copyWith(isLoading: true, error: null));
    try {
      await Future.delayed(const Duration(seconds: 1));
      final todos = [
        const TodoItem(title: 'Learn Dart'),
        const TodoItem(title: 'Master BLoC'),
        const TodoItem(title: 'Build an app'),
      ];
      emit(state.copyWith(todos: todos, isLoading: false));
    } catch (e) {
      emit(state.copyWith(
        isLoading: false,
        error: e.toString(),
      ));
    }
  }

  void _onAdd(AddTodo event, Emitter<TodoState> emit) {
    final updated = [
      ...state.todos,
      TodoItem(title: event.title),
    ];
    emit(state.copyWith(todos: updated));
  }

  void _onToggle(ToggleTodo event, Emitter<TodoState> emit) {
    final updated = state.todos.asMap().entries.map((entry) {
      if (entry.key == event.index) {
        return entry.value.copyWith(isDone: !entry.value.isDone);
      }
      return entry.value;
    }).toList();
    emit(state.copyWith(todos: updated));
  }

  void _onDelete(DeleteTodo event, Emitter<TodoState> emit) {
    final updated = [...state.todos]..removeAt(event.index);
    emit(state.copyWith(todos: updated));
  }
}`,funFact:"The BLoC pattern was originally created by Paolo Soares and Cong Hui from Google and was first presented at DartConf 2018. It was designed to allow code sharing between Flutter and AngularDart apps, which is why it uses pure Dart streams with no Flutter dependency in the core logic.",quiz:[{q:"What does BLoC stand for?",opts:["Binary Logic Controller","Business Logic Component","Block Level Object Class","Base Logic Computation"],ans:1},{q:"In the BLoC pattern, what goes INTO the BLoC and what comes OUT?",opts:["States go in, Events come out","Widgets go in, Streams come out","Events go in, States come out","Functions go in, Results come out"],ans:2},{q:"Why does team_mvp_kit use Equatable for Events and States?",opts:["To make them serializable to JSON","To enable efficient equality comparison by properties instead of reference","To make them immutable","To allow inheritance"],ans:1},{q:"What is the purpose of the props getter in Equatable?",opts:["It lists the properties used for equality comparison","It provides default values for all fields","It generates a constructor automatically","It converts the object to a Map"],ans:0},{q:"Which approach does team_mvp_kit prefer for BLoC state design?",opts:["Only global state with no local state","setState for everything","Single state class with copyWith for simple features, sealed hierarchies for complex ones","One state class per screen"],ans:2}],challenge:"Create a complete ShoppingCartBloc with events (AddItem, RemoveItem, ClearCart, ApplyDiscount) and a single CartState class with fields for items list, total price, and optional discount percentage. Use BaseEvent and BaseState from team_mvp_kit patterns. Implement the Bloc with all event handlers. Make sure your state has a proper copyWith method and Equatable props.",resources:[{type:"docs",title:"BLoC Library Documentation",url:"https://bloclibrary.dev/getting-started/",source:"bloclibrary.dev"},{type:"docs",title:"Equatable Package",url:"https://pub.dev/packages/equatable",source:"pub.dev"},{type:"docs",title:"Flutter BLoC Concepts",url:"https://bloclibrary.dev/bloc-concepts/",source:"bloclibrary.dev"}],eli5:"Imagine you are ordering food at a drive-through. You talk into the speaker and say what you want -- that is an Event, like 'I want a burger.' The kitchen hears your order, cooks the food, and hands it out the window -- that is the State, like 'Here is your burger, ready to eat.' You never go into the kitchen, and the cook never comes to your car. The speaker and window keep everything organized. BLoC works the same way: your app screen shouts events into a speaker, and the BLoC kitchen sends back states through a window!",codeWalkthrough:["Define BaseEvent extending Equatable with an empty props list as the parent of all events.","Define BaseState extending Equatable as the parent of all state classes.","LoadTodos event has no data -- it just signals the BLoC to fetch todos.","AddTodo carries a title string and includes it in props for equality.","ToggleTodo and DeleteTodo carry an index to identify which todo to act on.","TodoItem is a simple data class with title and isDone, plus a copyWith method.","TodoState holds a list of TodoItems, a loading flag, and an optional error string.","The copyWith method creates a new TodoState, only replacing the fields you specify.","The props getter lists all three fields so Equatable can compare states accurately.","TodoBloc extends Bloc with BaseEvent input and TodoState output, starting with an empty state.","Register four event handlers in the constructor using the on<EventType> syntax.","_onLoad emits loading state, simulates an async fetch, then emits loaded state with todos.","The try-catch ensures that API failures emit an error state instead of crashing.","_onAdd spreads existing todos and appends a new TodoItem, then emits the updated state.","_onToggle maps over todos, flipping isDone only for the matching index.","_onDelete copies the list, removes the item at the given index, and emits."],bugChallenge:{code:`class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<Increment>(_onIncrement);
    on<Decrement>(_onDecrement);
  }

  void _onIncrement(Increment event, Emitter<int> emit) {
    state++;
    emit(state);
  }

  void _onDecrement(Decrement event, Emitter<int> emit) {
    emit(state - 1);
  }
}`,hint:"BLoC state is immutable. Can you modify it directly?",answer:"In _onIncrement, 'state++' tries to mutate the state directly, which is not allowed. The state property in a Bloc is read-only. The fix is to emit a new value: 'emit(state + 1)' instead of 'state++; emit(state)'. The _onDecrement handler is correct because it creates a new value with 'state - 1'."},difficulty:"intermediate",prereqs:[32,15]},
// ============ LESSON 34 ============
{id:34,title:"flutter_bloc in Practice",subtitle:"Wiring the BLoC brain to the Flutter body",analogy:"You built a powerful engine (the BLoC) in the last lesson. Now you need to put it in a car and connect everything. BlocProvider is the engine mount that holds the BLoC in the widget tree. BlocBuilder is the dashboard that displays engine data. BlocListener is the alarm system that beeps when something important happens. BlocConsumer is a dashboard with a built-in alarm. And MultiBlocProvider is a garage that can hold many engines at once.",points:[{t:"BlocProvider",d:"BlocProvider creates a BLoC and makes it available to all descendant widgets. It automatically disposes the BLoC when the widget is removed from the tree.",code:`BlocProvider(\n  create: (context) => TodoBloc()..add(LoadTodos()),\n  child: const TodoScreen(),\n)\n\n// Access the BLoC from any descendant\nfinal bloc = context.read<TodoBloc>();`},{t:"BlocBuilder",d:"BlocBuilder rebuilds its child widget whenever the BLoC emits a new state. It is the main way to connect BLoC state to your UI.",code:`BlocBuilder<TodoBloc, TodoState>(\n  builder: (context, state) {\n    if (state.isLoading) {\n      return const CircularProgressIndicator();\n    }\n    if (state.error != null) {\n      return Text('Error: \${state.error}');\n    }\n    return ListView.builder(\n      itemCount: state.todos.length,\n      itemBuilder: (context, i) {\n        return TodoTile(todo: state.todos[i]);\n      },\n    );\n  },\n)`},{t:"buildWhen for Selective Rebuilds",d:"The buildWhen parameter lets you control when BlocBuilder rebuilds. This is a key performance optimization -- skip rebuilds when the part of state you care about has not changed.",code:`BlocBuilder<TodoBloc, TodoState>(\n  buildWhen: (previous, current) {\n    // Only rebuild when the todo list changes\n    return previous.todos != current.todos;\n  },\n  builder: (context, state) {\n    return TodoList(todos: state.todos);\n  },\n)`},{t:"BlocListener",d:"BlocListener runs side effects in response to state changes -- like showing a SnackBar, navigating, or logging. It does NOT rebuild the UI.",code:`BlocListener<AuthBloc, AuthState>(\n  listener: (context, state) {\n    if (state is AuthFailure) {\n      ScaffoldMessenger.of(context).showSnackBar(\n        SnackBar(content: Text(state.message)),\n      );\n    }\n    if (state is AuthSuccess) {\n      context.go('/home');\n    }\n  },\n  child: const LoginForm(),\n)`},{t:"listenWhen for Selective Listening",d:"Just like buildWhen, listenWhen controls when the listener fires. Use it to filter out state transitions you do not care about.",code:`BlocListener<OrderBloc, OrderState>(\n  listenWhen: (previous, current) {\n    return previous.status != current.status;\n  },\n  listener: (context, state) {\n    if (state.status == OrderStatus.completed) {\n      showDialog(\n        context: context,\n        builder: (_) => const OrderCompleteDialog(),\n      );\n    }\n  },\n  child: const OrderScreen(),\n)`},{t:"BlocConsumer",d:"BlocConsumer combines BlocBuilder and BlocListener in one widget. Use it when you need both UI rebuilds AND side effects from the same BLoC.",code:`BlocConsumer<PaymentBloc, PaymentState>(\n  listenWhen: (prev, curr) => prev.status != curr.status,\n  listener: (context, state) {\n    if (state.status == PaymentStatus.success) {\n      context.go('/receipt');\n    }\n  },\n  buildWhen: (prev, curr) => prev.amount != curr.amount,\n  builder: (context, state) {\n    return Text('Total: \\\$\${state.amount}');\n  },\n)`},{t:"MultiBlocProvider",d:"MultiBlocProvider nests multiple BlocProviders without deep indentation. Use it at the top of your app or feature to provide all necessary BLoCs.",code:`MultiBlocProvider(\n  providers: [\n    BlocProvider(create: (_) => AuthBloc(getIt())),\n    BlocProvider(create: (_) => ThemeBloc()),\n    BlocProvider(create: (_) => CartBloc(getIt())),\n  ],\n  child: const MyApp(),\n)`},{t:"MultiBlocListener",d:"MultiBlocListener is the listener equivalent -- multiple listeners in a flat structure. Useful for a screen that reacts to several BLoCs.",code:`MultiBlocListener(\n  listeners: [\n    BlocListener<AuthBloc, AuthState>(\n      listener: (context, state) {\n        if (state is AuthFailure) showError(context);\n      },\n    ),\n    BlocListener<CartBloc, CartState>(\n      listener: (context, state) {\n        if (state.justAdded) showAddedToast(context);\n      },\n    ),\n  ],\n  child: const HomeScreen(),\n)`},{t:"context.read vs context.watch",d:"Use context.read<Bloc>() to access the BLoC without subscribing to changes (for sending events). Use context.watch<Bloc>().state inside build methods to subscribe and rebuild when state changes.",code:`// In an onPressed callback (no rebuild needed)\nonPressed: () {\n  context.read<CartBloc>().add(ClearCart());\n}\n\n// In a build method (rebuild when state changes)\n@override\nWidget build(BuildContext context) {\n  final count = context.watch<CartBloc>().state.itemCount;\n  return Badge(label: Text('\$count'));\n}`}],whatIs:"flutter_bloc is the Flutter package that connects BLoC business logic to the widget tree. BlocProvider creates and scopes a BLoC instance to a widget subtree. BlocBuilder rebuilds UI when state changes. BlocListener triggers side effects like navigation or showing dialogs. BlocConsumer combines both building and listening. MultiBlocProvider and MultiBlocListener provide clean syntax for multiple BLoCs.",realWorld:"In team_mvp_kit, every feature screen is wrapped with a BlocProvider that creates the feature's BLoC. The screen body uses BlocBuilder for the main content, BlocListener for navigation and error toasts, and sometimes BlocConsumer when both are needed. MultiBlocProvider at the app level provides global BLoCs like auth and theme.",code:`import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

// Assume TodoBloc, TodoState, BaseEvent from Lesson 33

class TodoApp extends StatelessWidget {
  const TodoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(
          create: (context) => TodoBloc()..add(LoadTodos()),
        ),
      ],
      child: MaterialApp(
        title: 'BLoC Todo',
        home: const TodoScreen(),
      ),
    );
  }
}

class TodoScreen extends StatelessWidget {
  const TodoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Todos'),
        actions: [
          BlocBuilder<TodoBloc, TodoState>(
            buildWhen: (prev, curr) =>
              prev.todos.length != curr.todos.length,
            builder: (context, state) {
              final done = state.todos
                  .where((t) => t.isDone).length;
              return Center(
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Text('\$done/\${state.todos.length}'),
                ),
              );
            },
          ),
        ],
      ),
      body: BlocConsumer<TodoBloc, TodoState>(
        listenWhen: (prev, curr) =>
          prev.error != curr.error && curr.error != null,
        listener: (context, state) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(state.error!),
              backgroundColor: Colors.red,
            ),
          );
        },
        buildWhen: (prev, curr) =>
          prev.todos != curr.todos ||
          prev.isLoading != curr.isLoading,
        builder: (context, state) {
          if (state.isLoading) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
          if (state.todos.isEmpty) {
            return const Center(
              child: Text('No todos yet!'),
            );
          }
          return ListView.builder(
            itemCount: state.todos.length,
            itemBuilder: (context, index) {
              final todo = state.todos[index];
              return Dismissible(
                key: ValueKey('\$index-\${todo.title}'),
                onDismissed: (_) {
                  context.read<TodoBloc>()
                    .add(DeleteTodo(index));
                },
                child: CheckboxListTile(
                  title: Text(
                    todo.title,
                    style: TextStyle(
                      decoration: todo.isDone
                          ? TextDecoration.lineThrough
                          : null,
                    ),
                  ),
                  value: todo.isDone,
                  onChanged: (_) {
                    context.read<TodoBloc>()
                      .add(ToggleTodo(index));
                  },
                ),
              );
            },
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _showAddDialog(context),
        child: const Icon(Icons.add),
      ),
    );
  }

  void _showAddDialog(BuildContext context) {
    final controller = TextEditingController();
    showDialog(
      context: context,
      builder: (dialogContext) => AlertDialog(
        title: const Text('Add Todo'),
        content: TextField(
          controller: controller,
          autofocus: true,
          decoration: const InputDecoration(
            hintText: 'Enter todo title',
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(dialogContext),
            child: const Text('Cancel'),
          ),
          TextButton(
            onPressed: () {
              if (controller.text.isNotEmpty) {
                context.read<TodoBloc>()
                  .add(AddTodo(controller.text));
                Navigator.pop(dialogContext);
              }
            },
            child: const Text('Add'),
          ),
        ],
      ),
    );
  }
}`,funFact:"The flutter_bloc package is one of the most downloaded packages on pub.dev with over 3 billion total downloads. Its creator Felix Angelov maintained it as an open-source project while working full-time, and it grew so popular that it essentially became the unofficial standard for state management in enterprise Flutter apps.",quiz:[{q:"What is the difference between BlocBuilder and BlocListener?",opts:["BlocBuilder is for mobile, BlocListener is for web","BlocBuilder rebuilds UI, BlocListener triggers side effects without rebuilding","BlocBuilder is sync, BlocListener is async","There is no difference, they are aliases"],ans:1},{q:"When should you use context.read<Bloc>() instead of context.watch<Bloc>()?",opts:["In build methods to subscribe to changes","In callbacks and event handlers where you do not need to rebuild","When the BLoC has not been created yet","When you want to listen to multiple BLoCs"],ans:1},{q:"What does the buildWhen parameter do in BlocBuilder?",opts:["It delays the build by a specified duration","It controls which states trigger a UI rebuild","It changes the build order of child widgets","It determines when the BLoC is created"],ans:1},{q:"What happens if you use context.watch inside an onPressed callback?",opts:["It works perfectly fine","It returns null","It throws an error because watch should only be used inside build methods","It creates a memory leak"],ans:2},{q:"What is the purpose of MultiBlocProvider?",opts:["It merges multiple BLoCs into one","It provides multiple BLoCs without deep nesting","It creates multiple instances of the same BLoC","It enables communication between BLoCs"],ans:1}],challenge:"Build a complete ProductCatalog feature with two BLoCs: ProductListBloc (handles loading, filtering, and searching products) and CartBloc (handles add to cart, remove, and total calculation). Create a screen that uses MultiBlocProvider for both BLoCs, BlocBuilder for the product grid, BlocListener on CartBloc to show a SnackBar when items are added, and buildWhen to optimize rebuilds.",resources:[{type:"docs",title:"flutter_bloc Package",url:"https://pub.dev/packages/flutter_bloc",source:"pub.dev"},{type:"docs",title:"BLoC Widgets Guide",url:"https://bloclibrary.dev/flutter-bloc-concepts/",source:"bloclibrary.dev"},{type:"docs",title:"BLoC Architecture",url:"https://bloclibrary.dev/architecture/",source:"bloclibrary.dev"}],eli5:"Remember the restaurant from last lesson? Now we are setting up the actual restaurant building. BlocProvider is like building the kitchen and putting it behind the counter. BlocBuilder is the menu board that automatically updates when the chef says the special changed. BlocListener is the little bell that dings when your food is ready -- it does not change the menu board, it just alerts you. BlocConsumer is a magic menu board that ALSO dings. And MultiBlocProvider is like having a food court with many kitchens all in one place!",codeWalkthrough:["TodoApp is the root widget wrapping everything in MultiBlocProvider to make BLoCs available.","BlocProvider creates the TodoBloc and immediately adds a LoadTodos event using the cascade operator.","MaterialApp and TodoScreen are children that can now access the TodoBloc.","TodoScreen is a StatelessWidget because all state lives in the BLoC, not in the widget.","The AppBar contains a BlocBuilder with buildWhen that only triggers when the todo count changes.","Inside the AppBar builder, we count completed todos and display a progress fraction.","The body uses BlocConsumer to combine building the list AND listening for errors.","listenWhen filters so the listener only fires when a new error appears.","The listener shows a red SnackBar with the error message as a side effect.","buildWhen triggers rebuilds when todos or loading status change.","The builder checks isLoading first to show a spinner, then checks for empty list.","ListView.builder creates a scrollable list of Dismissible CheckboxListTile widgets.","Dismissible enables swipe-to-delete by dispatching DeleteTodo event on dismiss.","context.read<TodoBloc>() is used in callbacks because these are not build methods.","The FloatingActionButton opens a dialog for adding new todos.","_showAddDialog creates a TextEditingController and an AlertDialog with a TextField.","The Add button reads the text, dispatches an AddTodo event, and closes the dialog."],bugChallenge:{code:`class ProductScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => ProductBloc(),
      child: Scaffold(
        appBar: AppBar(
          title: BlocBuilder<ProductBloc, ProductState>(
            builder: (context, state) {
              return Text('\${state.products.length} Products');
            },
          ),
        ),
        body: BlocBuilder<ProductBloc, ProductState>(
          builder: (context, state) {
            return ListView.builder(
              itemCount: state.products.length,
              itemBuilder: (ctx, i) {
                return ListTile(
                  title: Text(state.products[i].name),
                );
              },
            );
          },
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            context.read<ProductBloc>().add(LoadProducts());
          },
        ),
      ),
    );
  }
}`,hint:"The FloatingActionButton's onPressed tries to read the BLoC, but is it inside the BlocProvider subtree?",answer:"The FloatingActionButton's onPressed uses the outer 'context' from the build method, which is ABOVE the BlocProvider in the widget tree. The BlocBuilders inside AppBar and body work because they get a new context from inside the Scaffold child. Fix by wrapping the Scaffold in a Builder widget, or move BlocProvider higher up."},difficulty:"intermediate",prereqs:[33]},
// ============ LESSON 35 ============
{id:35,title:"Advanced BLoC Patterns",subtitle:"Battle-tested patterns from the production trenches",analogy:"A regular chef can cook a meal. But a master chef knows how to handle a kitchen fire, coordinate with five other chefs, manage allergies, and keep the kitchen running when the oven breaks down. Advanced BLoC patterns are the difference between a student project and a production app -- they handle the messy reality of loading indicators, error recovery, safe state emission, and BLoC communication.",points:[{t:"The safeEmit Pattern from team_mvp_kit",d:"In team_mvp_kit, safeEmit checks if the BLoC is still active before emitting a state. This prevents the common 'emit after close' error when async operations complete after the user navigates away.",code:`mixin SafeEmitMixin<E, S> on Bloc<E, S> {\n  void safeEmit(S state) {\n    if (!isClosed) {\n      // ignore: invalid_use_of_visible_for_testing_member\n      emit(state);\n    }\n  }\n}`},{t:"Loading / Success / Failure Pattern",d:"Every async operation in a production app should handle three states: loading (in progress), success (data received), and failure (something went wrong).",code:`class ProductState extends BaseState {\n  final List<Product> products;\n  final bool isLoading;\n  final Failure? failure;\n\n  const ProductState({\n    this.products = const [],\n    this.isLoading = false,\n    this.failure,\n  });\n\n  bool get isSuccess => !isLoading && failure == null;\n  bool get isFailure => failure != null;\n}`},{t:"Failure Types from team_mvp_kit",d:"Instead of raw strings for errors, team_mvp_kit defines typed Failure classes. This lets the UI display specific error messages and take appropriate recovery actions.",code:`abstract class Failure extends Equatable {\n  final String message;\n  const Failure(this.message);\n\n  @override\n  List<Object?> get props => [message];\n}\n\nclass ServerFailure extends Failure {\n  final int? statusCode;\n  const ServerFailure(super.message, {this.statusCode});\n}\n\nclass NetworkFailure extends Failure {\n  const NetworkFailure() : super('No internet connection');\n}\n\nclass CacheFailure extends Failure {\n  const CacheFailure() : super('Failed to load cached data');\n}`},{t:"Error Handling in Event Handlers",d:"Every async event handler should wrap its logic in try-catch and emit a failure state. The team_mvp_kit pattern converts exceptions to typed Failures.",code:`Future<void> _onLoad(\n  LoadProducts event,\n  Emitter<ProductState> emit,\n) async {\n  emit(state.copyWith(isLoading: true, failure: null));\n  try {\n    final products = await _repository.getProducts();\n    emit(state.copyWith(\n      products: products,\n      isLoading: false,\n    ));\n  } on DioException catch (e) {\n    emit(state.copyWith(\n      isLoading: false,\n      failure: ServerFailure(\n        e.message ?? 'Server error',\n        statusCode: e.response?.statusCode,\n      ),\n    ));\n  }\n}`},{t:"BLoC-to-BLoC Communication",d:"Sometimes one BLoC needs to react to another BLoC's state changes. The recommended approach is to pass one BLoC's stream to another and listen in the constructor.",code:`class CartBloc extends Bloc<CartEvent, CartState> {\n  late final StreamSubscription _authSub;\n\n  CartBloc({required AuthBloc authBloc})\n      : super(const CartState()) {\n    _authSub = authBloc.stream.listen((authState) {\n      if (authState is AuthLoggedOut) {\n        add(ClearCart());\n      }\n    });\n    on<ClearCart>(_onClear);\n  }\n\n  @override\n  Future<void> close() {\n    _authSub.cancel();\n    return super.close();\n  }\n}`},{t:"BlocObserver for Global Logging",d:"BlocObserver lets you intercept all BLoC events, transitions, and errors globally. It is invaluable for debugging and logging in development.",code:`class AppBlocObserver extends BlocObserver {\n  @override\n  void onEvent(Bloc bloc, Object? event) {\n    super.onEvent(bloc, event);\n    debugPrint('\${bloc.runtimeType} event: \$event');\n  }\n\n  @override\n  void onTransition(Bloc bloc, Transition transition) {\n    super.onTransition(bloc, transition);\n    debugPrint('\${bloc.runtimeType}: '\n      '\${transition.currentState} -> '\n      '\${transition.nextState}');\n  }\n\n  @override\n  void onError(BlocBase bloc, Object error, StackTrace st) {\n    super.onError(bloc, error, st);\n    debugPrint('\${bloc.runtimeType} error: \$error');\n  }\n}\n\n// In main.dart\nvoid main() {\n  Bloc.observer = AppBlocObserver();\n  runApp(const MyApp());\n}`},{t:"Debouncing Events",d:"For search-as-you-type, you do not want to fire an API call for every keystroke. The EventTransformer with debounce prevents excessive processing.",code:`import 'package:bloc_concurrency/bloc_concurrency.dart';\nimport 'package:stream_transform/stream_transform.dart';\n\nclass SearchBloc extends Bloc<SearchEvent, SearchState> {\n  SearchBloc() : super(const SearchState()) {\n    on<SearchQueryChanged>(\n      _onQueryChanged,\n      transformer: (events, mapper) => events\n          .debounce(const Duration(milliseconds: 300))\n          .switchMap(mapper),\n    );\n  }\n}`},{t:"BlocSelector for Derived State",d:"BlocSelector extracts and transforms just the piece of state a widget needs, only rebuilding when that specific piece changes.",code:`BlocSelector<ProductBloc, ProductState, List<Product>>(\n  selector: (state) {\n    return state.products\n        .where((p) => p.price > 10)\n        .toList();\n  },\n  builder: (context, filteredProducts) {\n    return ProductGrid(products: filteredProducts);\n  },\n)`},{t:"Testing BLoC with blocTest",d:"The bloc_test package provides blocTest for concise BLoC unit testing. You specify the BLoC, seed state, act (add events), and expect (expected state sequence).",code:`blocTest<TodoBloc, TodoState>(\n  'emits loaded state when LoadTodos succeeds',\n  build: () {\n    when(() => mockRepo.getTodos())\n        .thenAnswer((_) async => [mockTodo]);\n    return TodoBloc(repository: mockRepo);\n  },\n  act: (bloc) => bloc.add(LoadTodos()),\n  expect: () => [\n    const TodoState(isLoading: true),\n    TodoState(todos: [mockTodo], isLoading: false),\n  ],\n);`}],whatIs:"Advanced BLoC patterns are production-grade techniques that handle real-world complexities. The safeEmit pattern from team_mvp_kit prevents crashes when async operations complete after a BLoC is closed. The loading/success/failure tri-state ensures every async operation has proper UI feedback. Typed Failure classes replace raw error strings. BLoC-to-BLoC communication uses stream subscriptions. Event debouncing prevents excessive processing. BlocObserver enables global debugging.",realWorld:"In team_mvp_kit, every BLoC uses safeEmit to prevent emit-after-close crashes. Every async operation follows the loading/success/failure pattern so users always see either a spinner, the data, or a helpful error message. Typed failures let the UI show 'No internet connection, tap to retry' versus 'Server error, please try later.' BlocObserver logs every state transition in development builds, making debugging straightforward.",code:`import 'dart:async';
import 'package:equatable/equatable.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

// ---- Failure types (team_mvp_kit pattern) ----

abstract class Failure extends Equatable {
  final String message;
  const Failure(this.message);
  @override
  List<Object?> get props => [message];
}

class ServerFailure extends Failure {
  final int? statusCode;
  const ServerFailure(super.message, {this.statusCode});
  @override
  List<Object?> get props => [message, statusCode];
}

class NetworkFailure extends Failure {
  const NetworkFailure() : super('No internet connection');
}

// ---- SafeEmit mixin (team_mvp_kit pattern) ----

mixin SafeEmitMixin<E, S> on Bloc<E, S> {
  void safeEmit(S newState) {
    if (!isClosed) {
      // ignore: invalid_use_of_visible_for_testing_member
      emit(newState);
    }
  }
}

// ---- Base classes ----

abstract class BaseEvent extends Equatable {
  const BaseEvent();
  @override
  List<Object?> get props => [];
}

abstract class BaseState extends Equatable {
  const BaseState();
  @override
  List<Object?> get props => [];
}

// ---- Feature: Product catalog ----

class Product {
  final String id;
  final String name;
  final double price;
  const Product(this.id, this.name, this.price);
}

// Events
class LoadProducts extends BaseEvent {}
class RefreshProducts extends BaseEvent {}

// State with loading/success/failure
class ProductState extends BaseState {
  final List<Product> products;
  final bool isLoading;
  final Failure? failure;

  const ProductState({
    this.products = const [],
    this.isLoading = false,
    this.failure,
  });

  bool get isSuccess => !isLoading && failure == null;

  ProductState copyWith({
    List<Product>? products,
    bool? isLoading,
    Failure? failure,
  }) {
    return ProductState(
      products: products ?? this.products,
      isLoading: isLoading ?? this.isLoading,
      failure: failure,
    );
  }

  @override
  List<Object?> get props => [products, isLoading, failure];
}

// Repository interface
abstract class ProductRepository {
  Future<List<Product>> getProducts();
}

// BLoC with safeEmit and error handling
class ProductBloc extends Bloc<BaseEvent, ProductState>
    with SafeEmitMixin {
  final ProductRepository _repository;

  ProductBloc({required ProductRepository repository})
      : _repository = repository,
        super(const ProductState()) {
    on<LoadProducts>(_onLoad);
    on<RefreshProducts>(_onRefresh);
  }

  Future<void> _onLoad(
    LoadProducts event,
    Emitter<ProductState> emit,
  ) async {
    safeEmit(state.copyWith(isLoading: true, failure: null));
    try {
      final products = await _repository.getProducts();
      safeEmit(state.copyWith(
        products: products,
        isLoading: false,
      ));
    } catch (e) {
      safeEmit(state.copyWith(
        isLoading: false,
        failure: ServerFailure(e.toString()),
      ));
    }
  }

  Future<void> _onRefresh(
    RefreshProducts event,
    Emitter<ProductState> emit,
  ) async {
    try {
      final products = await _repository.getProducts();
      safeEmit(state.copyWith(products: products));
    } catch (e) {
      safeEmit(state.copyWith(
        failure: ServerFailure(e.toString()),
      ));
    }
  }
}

// ---- BlocObserver ----

class AppBlocObserver extends BlocObserver {
  @override
  void onTransition(Bloc bloc, Transition transition) {
    super.onTransition(bloc, transition);
    print('\${bloc.runtimeType}: '
        '\${transition.currentState.runtimeType} -> '
        '\${transition.nextState.runtimeType}');
  }

  @override
  void onError(BlocBase bloc, Object error, StackTrace st) {
    super.onError(bloc, error, st);
    print('ERROR in \${bloc.runtimeType}: \$error');
  }
}`,funFact:"The 'emit after close' bug that safeEmit prevents is so common that it has its own GitHub issue on the bloc repository with hundreds of thumbs-up reactions. It typically happens when a user navigates away from a screen while an API call is still in progress. The BLoC gets closed by BlocProvider's automatic disposal, but the awaited Future still tries to emit.",quiz:[{q:"What problem does the safeEmit pattern from team_mvp_kit solve?",opts:["It makes emit calls faster","It prevents emitting state after the BLoC has been closed","It ensures states are emitted in order","It compresses state objects to save memory"],ans:1},{q:"In the loading/success/failure pattern, when should the failure field be cleared?",opts:["Never, failures should persist forever","Only when the app restarts","At the start of a new loading operation, before the async call","After the UI reads it once"],ans:2},{q:"How does team_mvp_kit handle BLoC-to-BLoC communication?",opts:["BLoCs call each other's methods directly","One BLoC subscribes to another BLoC's stream and dispatches internal events","They share a global mutable state object","Through the widget tree using context.read"],ans:1},{q:"What is the purpose of BlocObserver?",opts:["To prevent BLoC creation","To intercept and log all BLoC events, transitions, and errors globally","To observe the widget tree for rebuilds","To cache BLoC states for offline use"],ans:1}],challenge:"Build a robust UserProfileBloc that: (1) Uses the safeEmit mixin, (2) Has a UserProfileState with loading/success/failure fields, (3) Handles three events: LoadProfile, UpdateProfile, and DeleteAccount, (4) Uses typed Failure classes (ServerFailure, NetworkFailure, ValidationFailure), (5) Communicates with an AuthBloc by listening to logout events to clear the profile. Write a complete blocTest for the LoadProfile success and failure cases.",resources:[{type:"docs",title:"BLoC Testing",url:"https://bloclibrary.dev/testing/",source:"bloclibrary.dev"},{type:"docs",title:"bloc_concurrency Package",url:"https://pub.dev/packages/bloc_concurrency",source:"pub.dev"},{type:"docs",title:"BLoC Best Practices",url:"https://bloclibrary.dev/bloc-concepts/",source:"bloclibrary.dev"}],eli5:"Imagine you are building a really fancy robot. A basic robot just walks forward. But a production robot needs to handle problems: What if it bumps into a wall? (error handling) What if you tell it to stop but it is mid-step? (safeEmit) What if it needs to talk to another robot? (BLoC communication) What if you want to see everything it is thinking for debugging? (BlocObserver) Advanced BLoC patterns are like giving your robot street smarts -- it can handle the messy real world, not just a clean lab.",codeWalkthrough:["Define an abstract Failure class extending Equatable with a message field for all error types.","ServerFailure adds a statusCode field. NetworkFailure uses a fixed message for connectivity errors.","SafeEmitMixin checks isClosed before calling emit, preventing the common post-close crash.","BaseEvent and BaseState extend Equatable with empty props as the foundation for all events and states.","Product is a simple data class representing catalog items.","LoadProducts triggers initial fetch. RefreshProducts triggers pull-to-refresh without a loading indicator.","ProductState follows the loading/success/failure tri-state pattern with typed Failure.","The isSuccess computed getter returns true when not loading and no failure exists.","copyWith allows creating new states with selective field overrides.","ProductRepository is an abstract interface for testability.","ProductBloc mixes in SafeEmitMixin and takes the repository through constructor injection.","_onLoad emits loading state with failure cleared, then tries to fetch products.","On success, safeEmit pushes the loaded products with loading false.","On failure, the catch block wraps the exception in a ServerFailure.","_onRefresh skips the loading indicator since pull-to-refresh has its own visual feedback.","AppBlocObserver logs every state transition and error for debugging across all BLoCs."],bugChallenge:{code:`class ProfileBloc extends Bloc<ProfileEvent, ProfileState>
    with SafeEmitMixin {
  final ProfileRepository _repo;

  ProfileBloc(this._repo) : super(const ProfileState()) {
    on<LoadProfile>(_onLoad);
  }

  Future<void> _onLoad(
    LoadProfile event,
    Emitter<ProfileState> emit,
  ) async {
    safeEmit(state.copyWith(isLoading: true));
    final profile = await _repo.getProfile();
    safeEmit(state.copyWith(
      profile: profile,
      isLoading: false,
    ));
  }
}`,hint:"What happens if _repo.getProfile() throws an exception?",answer:"The _onLoad method has no try-catch block. If the repository throws, the exception is unhandled and the BLoC will be stuck in a loading state forever because the isLoading: false emit never executes. Fix: wrap in try-catch and emit a failure state in the catch block."},difficulty:"advanced",prereqs:[34]},
// ============ LESSON 36 ============
{id:36,title:"Clean Architecture Overview",subtitle:"Building a skyscraper with a solid blueprint",analogy:"Imagine building a skyscraper. You would not start by randomly placing windows and doors. You start with a blueprint that has clear layers: the foundation (domain), the plumbing and electrical systems (data), and the interior design (presentation). Each layer has a specific job, and a plumber never decides where the couch goes. Clean Architecture works the same way -- each layer has a clear responsibility, and inner layers never know about outer layers.",points:[{t:"Why Architecture Matters",d:"Without architecture, small apps are fine. But as apps grow, code becomes tangled, changes break unrelated features, and testing becomes impossible. Architecture provides guardrails that keep complexity manageable.",code:`// Without architecture (spaghetti)\nclass ProductScreen extends StatefulWidget {\n  // Mixes UI, API calls, caching, business logic\n  // Testing requires a real server\n  // Changing the API breaks the screen\n}\n\n// With Clean Architecture\n// UI -> BLoC -> UseCase -> Repository -> DataSource\n// Each layer is independent and testable`},{t:"The Dependency Rule",d:"The most important rule: dependencies point inward. Outer layers know about inner layers, but inner layers never know about outer layers. Domain knows nothing about Flutter, databases, or APIs.",code:`// CORRECT dependency direction:\n// Presentation -> Domain <- Data\n//\n// Domain defines interfaces\n// Data implements them\n// Presentation consumes them\n// Domain NEVER imports from Data or Presentation`},{t:"The Four Layers",d:"team_mvp_kit uses four layers: Domain (entities, use cases, repository interfaces), Data (DTOs, data sources, repository implementations), Presentation (BLoCs, screens, widgets), and Infrastructure (DI setup, routing, shared utilities).",code:`lib/\n  features/\n    product/\n      domain/\n        entities/\n        repositories/\n        usecases/\n      data/\n        dto/\n        datasources/\n        repositories/\n      presentation/\n        bloc/\n        screens/\n        widgets/\n  infrastructure/\n    di/\n    router/\n    network/`},{t:"Domain Layer",d:"The domain layer is the heart of the application. It contains business entities, use case classes, and repository interfaces. It has zero dependencies on Flutter, packages, or external services.",code:`// Pure Dart - no Flutter imports\nclass Product {\n  final String id;\n  final String name;\n  final double price;\n  const Product({\n    required this.id,\n    required this.name,\n    required this.price,\n  });\n}\n\nabstract class ProductRepository {\n  Future<List<Product>> getProducts();\n  Future<Product> getProductById(String id);\n}`},{t:"Data Layer",d:"The data layer implements the repository interfaces defined in the domain layer. It handles API calls, database queries, caching, and data transformation between DTOs and entities.",code:`class ProductRepositoryImpl implements ProductRepository {\n  final ProductRemoteDataSource _remote;\n  final ProductLocalDataSource _local;\n\n  ProductRepositoryImpl(this._remote, this._local);\n\n  @override\n  Future<List<Product>> getProducts() async {\n    try {\n      final dtos = await _remote.fetchProducts();\n      final products = dtos.map((d) => d.toEntity()).toList();\n      await _local.cacheProducts(dtos);\n      return products;\n    } catch (e) {\n      final cached = await _local.getCachedProducts();\n      return cached.map((d) => d.toEntity()).toList();\n    }\n  }\n}`},{t:"Presentation Layer",d:"The presentation layer contains Flutter widgets, screens, and BLoCs. It depends on the domain layer (use cases and entities) but never directly touches data sources or APIs.",code:`class ProductListBloc extends Bloc<ProductEvent, ProductState> {\n  final GetProductsUseCase _getProducts;\n\n  // BLoC depends on USE CASE, not repository\n  ProductListBloc(this._getProducts)\n      : super(const ProductState()) {\n    on<LoadProducts>(_onLoad);\n  }\n}`},{t:"Infrastructure Layer",d:"The infrastructure layer provides cross-cutting concerns: dependency injection, router configuration, network client setup, and shared utilities that do not belong to a single feature.",code:`class DependencyManager {\n  static void setup() {\n    getIt.registerLazySingleton<ProductRemoteDataSource>(\n      () => ProductRemoteDataSourceImpl(getIt()),\n    );\n    getIt.registerLazySingleton<ProductRepository>(\n      () => ProductRepositoryImpl(getIt(), getIt()),\n    );\n    getIt.registerFactory(\n      () => GetProductsUseCase(getIt()),\n    );\n  }\n}`},{t:"Feature-First Organization",d:"team_mvp_kit organizes code by feature first, then by layer. Each feature folder contains its own domain, data, and presentation subfolders, making features self-contained.",code:`lib/features/\n  auth/\n    domain/\n    data/\n    presentation/\n  product/\n    domain/\n    data/\n    presentation/\n  cart/\n    domain/\n    data/\n    presentation/`},{t:"Benefits of Clean Architecture",d:"Testability: mock any layer. Flexibility: swap databases without touching UI. Scalability: add features without breaking existing ones. Onboarding: new developers know where everything goes.",code:`// Testing is easy - mock the interface\nclass MockProductRepository extends Mock\n    implements ProductRepository {}\n\n// Swap data source without touching domain\n// Switch from REST to GraphQL?\n// Only change the data layer.\n// Domain and presentation stay the same.`}],whatIs:"Clean Architecture is a software design philosophy that separates an application into distinct layers with clear responsibilities and a strict dependency rule: inner layers never depend on outer layers. In team_mvp_kit, the four layers are Domain (business logic and entities), Data (API calls, DTOs, and storage), Presentation (UI and BLoCs), and Infrastructure (DI, routing, and shared utilities). Code is organized feature-first, so each feature contains its own domain, data, and presentation folders.",realWorld:"Clean Architecture is the reason team_mvp_kit can scale from a starter kit to a full production app without rewriting. When the team decided to switch from one payment provider to another, they only changed the data layer. When adding offline support, they added a local data source and updated the repository without changing a single line in domain or presentation.",code:`// Complete data flow through layers:
//
// 1. DOMAIN: Entity (pure Dart)
class Product {
  final String id;
  final String name;
  final double price;
  final String imageUrl;

  const Product({
    required this.id,
    required this.name,
    required this.price,
    required this.imageUrl,
  });
}

// 2. DOMAIN: Repository interface
abstract class ProductRepository {
  Future<List<Product>> getAll();
  Future<Product> getById(String id);
}

// 3. DOMAIN: Use case
class GetProductsUseCase {
  final ProductRepository _repository;
  const GetProductsUseCase(this._repository);

  Future<List<Product>> call() {
    return _repository.getAll();
  }
}

// 4. DATA: DTO (data transfer object)
class ProductDto {
  final String id;
  final String name;
  final double price;
  final String imageUrl;

  const ProductDto({
    required this.id,
    required this.name,
    required this.price,
    required this.imageUrl,
  });

  factory ProductDto.fromJson(Map<String, dynamic> json) {
    return ProductDto(
      id: json['id'] as String,
      name: json['name'] as String,
      price: (json['price'] as num).toDouble(),
      imageUrl: json['image_url'] as String,
    );
  }

  Product toEntity() {
    return Product(
      id: id,
      name: name,
      price: price,
      imageUrl: imageUrl,
    );
  }
}

// 5. DATA: Repository implementation
class ProductRepositoryImpl implements ProductRepository {
  final ProductRemoteDataSource _remote;
  const ProductRepositoryImpl(this._remote);

  @override
  Future<List<Product>> getAll() async {
    final dtos = await _remote.fetchProducts();
    return dtos.map((dto) => dto.toEntity()).toList();
  }

  @override
  Future<Product> getById(String id) async {
    final dto = await _remote.fetchProductById(id);
    return dto.toEntity();
  }
}

// 6. PRESENTATION: BLoC uses use case
class ProductListBloc
    extends Bloc<ProductEvent, ProductState> {
  final GetProductsUseCase _getProducts;

  ProductListBloc(this._getProducts)
      : super(const ProductState()) {
    on<LoadProducts>(_onLoad);
  }

  Future<void> _onLoad(
    LoadProducts event,
    Emitter<ProductState> emit,
  ) async {
    emit(state.copyWith(isLoading: true));
    try {
      final products = await _getProducts();
      emit(state.copyWith(
        products: products,
        isLoading: false,
      ));
    } catch (e) {
      emit(state.copyWith(
        isLoading: false,
        failure: ServerFailure(e.toString()),
      ));
    }
  }
}`,funFact:"Clean Architecture was introduced by Robert C. Martin (Uncle Bob) in 2012. The core idea was actually inspired by even older patterns like Hexagonal Architecture (Alistair Cockburn, 2005) and Onion Architecture (Jeffrey Palermo, 2008). All three share the same fundamental insight: business logic should be at the center and never depend on frameworks, databases, or UI.",quiz:[{q:"What is the most important rule in Clean Architecture?",opts:["All code must be in one file","Inner layers never depend on outer layers","Every class must have an interface","Data must flow left to right"],ans:1},{q:"Which layer defines repository interfaces in team_mvp_kit?",opts:["Data layer","Presentation layer","Domain layer","Infrastructure layer"],ans:2},{q:"Which layer implements repository interfaces?",opts:["Domain layer","Data layer","Presentation layer","The main.dart file"],ans:1},{q:"In team_mvp_kit, what does the BLoC depend on?",opts:["The remote data source directly","The repository implementation","A use case from the domain layer","The database directly"],ans:2},{q:"Why does team_mvp_kit use feature-first organization?",opts:["It compiles faster","Each feature is self-contained with its own layers, making code easy to locate","Flutter requires it","It uses less memory"],ans:1}],challenge:"Design the complete folder structure for a new 'notifications' feature in team_mvp_kit style. Create the Notification entity, NotificationRepository interface, GetNotificationsUseCase, NotificationDto with fromJson and toEntity, NotificationRepositoryImpl, and NotificationListBloc. Write out each file with proper imports showing the dependency direction. Verify that domain never imports from data or presentation.",resources:[{type:"docs",title:"Flutter App Architecture Guide",url:"https://docs.flutter.dev/app-architecture",source:"flutter.dev"},{type:"docs",title:"Clean Architecture by Uncle Bob",url:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",source:"cleancoder.com"},{type:"docs",title:"Very Good Architecture (VGV)",url:"https://verygood.ventures/blog/very-good-flutter-architecture",source:"verygood.ventures"}],eli5:"Think about a sandwich shop. The recipe (domain layer) says 'put cheese between two slices of bread.' The recipe does not care if the bread comes from Store A or Store B -- that is the data layer's job. The person at the counter who takes orders and serves sandwiches is the presentation layer. And the building itself -- the kitchen setup, the ordering system -- that is the infrastructure. If you change where you buy bread, the recipe stays the same. If you redesign the counter, the recipe still stays the same. That is the power of layers!",codeWalkthrough:["The Product entity is a pure Dart class with no framework dependencies.","ProductRepository is an abstract class defining the contract that the data layer must fulfill.","GetProductsUseCase wraps a single business operation and depends only on the repository interface.","ProductDto mirrors the entity but adds fromJson for deserialization and toEntity for conversion.","The fromJson factory handles JSON field types, including snake_case to camelCase conversion.","toEntity converts the DTO to a domain entity, decoupling API format from business format.","ProductRepositoryImpl implements the interface by delegating to the remote data source.","The getAll method fetches DTOs, then maps each to an entity using toEntity.","ProductListBloc depends on the use case, not the repository or data source directly.","The _onLoad handler follows the loading/success/failure pattern from Lesson 35.","The flow: Screen event -> BLoC -> UseCase -> Repository interface -> Implementation -> DataSource."],bugChallenge:{code:`// domain/usecases/get_products_usecase.dart
import 'package:dio/dio.dart';
import '../repositories/product_repository.dart';

class GetProductsUseCase {
  final ProductRepository _repository;
  GetProductsUseCase(this._repository);

  Future<List<Product>> call() async {
    try {
      return await _repository.getProducts();
    } on DioException catch (e) {
      throw ServerFailure(e.message ?? 'Error');
    }
  }
}`,hint:"Look at the imports. Which layer is this file in, and what is it importing?",answer:"The use case is in the domain layer but imports 'package:dio/dio.dart', which is a networking package. This violates the dependency rule -- the domain layer must not know about HTTP or Dio. The DioException handling should happen in the data layer (repository implementation). Remove the Dio import and let the repository catch DioExceptions and convert them to domain Failure types."},difficulty:"intermediate",prereqs:[11,34]},
// ============ LESSON 37 ============
{id:37,title:"Domain Layer",subtitle:"Entities, Use Cases & the Repository Pattern",analogy:"The domain layer is like the rules of a board game. The rules say 'if you roll a six, you move six spaces.' The rules do not care if the board is made of wood or cardboard (data layer). They do not care if you are playing on a table or on the floor (presentation layer). The rules are pure logic. In Clean Architecture, the domain layer is the pure business rules -- no databases, no APIs, no Flutter -- just logic.",points:[{t:"Entities: The Core Models",d:"Entities are the core business objects of your app. They contain essential fields and business logic methods. In team_mvp_kit, entities are immutable Dart classes in the domain layer.",code:`class User {\n  final String id;\n  final String name;\n  final String email;\n  final UserRole role;\n\n  const User({\n    required this.id,\n    required this.name,\n    required this.email,\n    required this.role,\n  });\n\n  bool get isAdmin => role == UserRole.admin;\n  bool get canEdit => role != UserRole.viewer;\n}\n\nenum UserRole { admin, editor, viewer }`},{t:"Entities vs DTOs",d:"Entities represent your business concepts. DTOs represent how data looks coming from an API. They often look similar but serve different purposes. Entities are stable; DTOs change when the API changes.",code:`// ENTITY (domain) - stable, business-focused\nclass Product {\n  final String id;\n  final String name;\n  final Money price; // Business type\n}\n\n// DTO (data) - mirrors API response\nclass ProductDto {\n  final String id;\n  final String product_name; // API naming\n  final double price_cents;  // API format\n\n  Product toEntity() => Product(\n    id: id,\n    name: product_name,\n    price: Money.fromCents(price_cents.toInt()),\n  );\n}`},{t:"Repository Interfaces",d:"Repository interfaces define what data operations exist without specifying how they work. The domain layer owns these interfaces. The data layer provides implementations.",code:`abstract class ProductRepository {\n  Future<List<Product>> getAll();\n  Future<Product> getById(String id);\n  Future<void> create(Product product);\n  Future<void> update(Product product);\n  Future<void> delete(String id);\n  Stream<List<Product>> watchAll();\n}`},{t:"BaseUseCase Pattern from team_mvp_kit",d:"team_mvp_kit defines a BaseUseCase interface that all use cases implement. This provides a consistent call pattern and makes use cases interchangeable and testable.",code:`abstract class BaseUseCase<Type, Params> {\n  Future<Type> call(Params params);\n}\n\nclass NoParams {\n  const NoParams();\n}\n\nclass GetProductsUseCase\n    implements BaseUseCase<List<Product>, NoParams> {\n  final ProductRepository _repo;\n  const GetProductsUseCase(this._repo);\n\n  @override\n  Future<List<Product>> call(NoParams params) {\n    return _repo.getAll();\n  }\n}`},{t:"Use Cases with Parameters",d:"When a use case needs input, define a Params class. This keeps the use case signature clean and makes it easy to add parameters without breaking callers.",code:`class GetProductByIdUseCase\n    implements BaseUseCase<Product, GetProductByIdParams> {\n  final ProductRepository _repo;\n  const GetProductByIdUseCase(this._repo);\n\n  @override\n  Future<Product> call(GetProductByIdParams params) {\n    return _repo.getById(params.id);\n  }\n}\n\nclass GetProductByIdParams {\n  final String id;\n  const GetProductByIdParams(this.id);\n}`},{t:"Failure Types in Domain",d:"The domain layer defines abstract Failure types that represent what can go wrong. The data layer maps exceptions to these failures.",code:`abstract class Failure extends Equatable {\n  final String message;\n  const Failure(this.message);\n  @override\n  List<Object?> get props => [message];\n}\n\nclass ServerFailure extends Failure {\n  final int? statusCode;\n  const ServerFailure(super.message, {this.statusCode});\n}\n\nclass ValidationFailure extends Failure {\n  final Map<String, String> fieldErrors;\n  const ValidationFailure(super.message, {\n    this.fieldErrors = const {},\n  });\n}`},{t:"Either Pattern for Results",d:"Many Clean Architecture implementations use the Either type from fpdart to return either a Failure or a Success value. team_mvp_kit uses this for explicit error handling without exceptions.",code:`import 'package:fpdart/fpdart.dart';\n\nabstract class BaseUseCase<Type, Params> {\n  Future<Either<Failure, Type>> call(Params params);\n}\n\nclass GetProductsUseCase\n    implements BaseUseCase<List<Product>, NoParams> {\n  final ProductRepository _repo;\n  const GetProductsUseCase(this._repo);\n\n  @override\n  Future<Either<Failure, List<Product>>> call(\n      NoParams params) async {\n    try {\n      final products = await _repo.getAll();\n      return Right(products);\n    } catch (e) {\n      return Left(ServerFailure(e.toString()));\n    }\n  }\n}`},{t:"Value Objects",d:"Value objects are domain concepts defined by their value, not identity. Email, Money, and PhoneNumber are examples. They include validation in their construction.",code:`class Email {\n  final String value;\n\n  Email._(this.value);\n\n  factory Email(String input) {\n    final trimmed = input.trim().toLowerCase();\n    if (!RegExp(r'^[\\w.-]+@[\\w.-]+\\.\\w+').hasMatch(trimmed)) {\n      throw ValidationFailure('Invalid email: \$input');\n    }\n    return Email._(trimmed);\n  }\n\n  @override\n  bool operator ==(Object other) =>\n      other is Email && other.value == value;\n\n  @override\n  int get hashCode => value.hashCode;\n}`}],whatIs:"The Domain Layer is the innermost layer of Clean Architecture. It contains entities (core business objects), use cases (single business operations), repository interfaces (abstract contracts for data access), failure types (structured error representations), and value objects (self-validating types). The domain layer has zero dependencies on Flutter, external packages, or other layers. It is pure Dart business logic.",realWorld:"In team_mvp_kit, the domain layer is the reason the team can work in parallel. The UI developer codes against repository interfaces and use cases without waiting for the API. When the team switched from REST to GraphQL for one feature, only the data layer changed. The domain layer is also where business rules live: 'Users can only have 5 active subscriptions' is a domain rule, not a UI rule or database constraint.",code:`import 'package:equatable/equatable.dart';
import 'package:fpdart/fpdart.dart';

// ---- Core: Failure types ----

abstract class Failure extends Equatable {
  final String message;
  const Failure(this.message);
  @override
  List<Object?> get props => [message];
}

class ServerFailure extends Failure {
  final int? statusCode;
  const ServerFailure(super.message, {this.statusCode});
  @override
  List<Object?> get props => [message, statusCode];
}

class CacheFailure extends Failure {
  const CacheFailure(super.message);
}

class ValidationFailure extends Failure {
  final Map<String, String> fieldErrors;
  const ValidationFailure(super.message, {
    this.fieldErrors = const {},
  });
  @override
  List<Object?> get props => [message, fieldErrors];
}

// ---- Core: BaseUseCase ----

abstract class BaseUseCase<Type, Params> {
  Future<Either<Failure, Type>> call(Params params);
}

class NoParams {
  const NoParams();
}

// ---- Entity ----

enum TaskPriority { low, medium, high, urgent }
enum TaskStatus { todo, inProgress, review, done }

class Task {
  final String id;
  final String title;
  final String description;
  final TaskPriority priority;
  final TaskStatus status;
  final DateTime createdAt;
  final DateTime? dueDate;
  final String assigneeId;

  const Task({
    required this.id,
    required this.title,
    required this.description,
    required this.priority,
    required this.status,
    required this.createdAt,
    this.dueDate,
    required this.assigneeId,
  });

  bool get isOverdue =>
      dueDate != null && dueDate!.isBefore(DateTime.now());

  bool get isHighPriority =>
      priority == TaskPriority.high ||
      priority == TaskPriority.urgent;

  bool get isDone => status == TaskStatus.done;

  Task copyWith({
    String? title,
    String? description,
    TaskPriority? priority,
    TaskStatus? status,
    DateTime? dueDate,
    String? assigneeId,
  }) {
    return Task(
      id: id,
      title: title ?? this.title,
      description: description ?? this.description,
      priority: priority ?? this.priority,
      status: status ?? this.status,
      createdAt: createdAt,
      dueDate: dueDate ?? this.dueDate,
      assigneeId: assigneeId ?? this.assigneeId,
    );
  }
}

// ---- Repository interface ----

abstract class TaskRepository {
  Future<List<Task>> getTasks();
  Future<Task> getTaskById(String id);
  Future<void> createTask(Task task);
  Future<void> updateTask(Task task);
  Future<void> deleteTask(String id);
}

// ---- Use Cases ----

class GetTasksUseCase
    implements BaseUseCase<List<Task>, NoParams> {
  final TaskRepository _repository;
  const GetTasksUseCase(this._repository);

  @override
  Future<Either<Failure, List<Task>>> call(
    NoParams params,
  ) async {
    try {
      final tasks = await _repository.getTasks();
      return Right(tasks);
    } catch (e) {
      return Left(ServerFailure(e.toString()));
    }
  }
}

class CreateTaskParams {
  final String title;
  final String description;
  final TaskPriority priority;
  final DateTime? dueDate;
  final String assigneeId;

  const CreateTaskParams({
    required this.title,
    required this.description,
    required this.priority,
    this.dueDate,
    required this.assigneeId,
  });
}

class CreateTaskUseCase
    implements BaseUseCase<void, CreateTaskParams> {
  final TaskRepository _repository;
  const CreateTaskUseCase(this._repository);

  @override
  Future<Either<Failure, void>> call(
    CreateTaskParams params,
  ) async {
    if (params.title.trim().isEmpty) {
      return const Left(
        ValidationFailure('Title cannot be empty'),
      );
    }
    if (params.title.length > 200) {
      return const Left(
        ValidationFailure('Title must be under 200 chars'),
      );
    }

    try {
      final task = Task(
        id: '',
        title: params.title.trim(),
        description: params.description.trim(),
        priority: params.priority,
        status: TaskStatus.todo,
        createdAt: DateTime.now(),
        dueDate: params.dueDate,
        assigneeId: params.assigneeId,
      );
      await _repository.createTask(task);
      return const Right(null);
    } catch (e) {
      return Left(ServerFailure(e.toString()));
    }
  }
}

class UpdateTaskStatusParams {
  final String taskId;
  final TaskStatus newStatus;
  const UpdateTaskStatusParams({
    required this.taskId,
    required this.newStatus,
  });
}

class UpdateTaskStatusUseCase
    implements BaseUseCase<void, UpdateTaskStatusParams> {
  final TaskRepository _repository;
  const UpdateTaskStatusUseCase(this._repository);

  @override
  Future<Either<Failure, void>> call(
    UpdateTaskStatusParams params,
  ) async {
    try {
      final task = await _repository.getTaskById(
        params.taskId,
      );
      final updated = task.copyWith(
        status: params.newStatus,
      );
      await _repository.updateTask(updated);
      return const Right(null);
    } catch (e) {
      return Left(ServerFailure(e.toString()));
    }
  }
}`,funFact:"The original Clean Architecture diagram by Uncle Bob has the famous concentric circles with Entities at the center. Many developers confused 'Entities' with database entities from ORM frameworks. In Flutter Clean Architecture, entities are always business domain objects -- they have nothing to do with database tables. A database table might have 30 columns, but the entity might only expose the 10 fields the business cares about.",quiz:[{q:"What is the key characteristic of entities in the domain layer?",opts:["They contain database annotations","They are mutable and change frequently","They are pure Dart business objects with zero framework dependencies","They must extend a base entity class from Flutter"],ans:2},{q:"What does the BaseUseCase interface in team_mvp_kit provide?",opts:["Automatic caching of results","A consistent call pattern for all use cases with Either return type","Database connection management","Widget building capabilities"],ans:1},{q:"Why does the domain layer define repository interfaces instead of implementations?",opts:["Interfaces are required by the Dart compiler","So the domain layer stays independent of data concerns like APIs and databases","Interfaces are faster at runtime","The Flutter framework requires them"],ans:1},{q:"What is the difference between an Entity and a Value Object?",opts:["Entities have IDs and identity; Value Objects are defined by their value alone","Entities are mutable; Value Objects are immutable","Entities are in domain; Value Objects are in data","There is no difference"],ans:0},{q:"In the Either<Failure, Type> pattern, what does Left represent?",opts:["The successful result","The loading state","The failure case","The previous state"],ans:2}],challenge:"Design the complete domain layer for an e-commerce 'Order' feature. Create: (1) An Order entity with id, items, status, total, createdAt, and business logic methods like canCancel and isDelivered. (2) An OrderItem value object. (3) An OrderRepository interface with CRUD operations plus getOrdersByStatus. (4) Three use cases following BaseUseCase: PlaceOrderUseCase with validation, GetOrderHistoryUseCase, and CancelOrderUseCase with validation that the order can be cancelled. Use Either<Failure, Type> for all returns.",resources:[{type:"docs",title:"Dart Data Classes",url:"https://dart.dev/language/classes",source:"dart.dev"},{type:"docs",title:"fpdart - Functional Programming for Dart",url:"https://pub.dev/packages/fpdart",source:"pub.dev"},{type:"docs",title:"Equatable Package",url:"https://pub.dev/packages/equatable",source:"pub.dev"}],eli5:"Imagine you are creating the rules for a new card game. You write down: 'There are 52 cards. Each card has a suit and a number. You win if you have three of a kind.' Those rules are the domain layer. They do not say whether the cards are made of paper or plastic. They do not say whether you play at a table or on a phone app. The rules are just the pure logic of the game. If someone builds a digital version or a physical version, the rules stay the same. That is what makes the domain layer so powerful!",codeWalkthrough:["Define Failure as an abstract Equatable class with a message, the base for all error types.","ServerFailure adds statusCode. CacheFailure for local storage. ValidationFailure adds fieldErrors.","BaseUseCase defines the contract: every use case returns Future<Either<Failure, Type>>.","NoParams is used when a use case needs no input parameters.","TaskPriority and TaskStatus enums define valid values for task fields.","The Task entity has all business fields plus computed properties like isOverdue and isHighPriority.","isOverdue checks if the due date has passed -- business logic that belongs in the entity.","copyWith creates a new Task with selective field overrides while keeping id and createdAt fixed.","TaskRepository is abstract -- defines WHAT operations exist, not HOW they work.","GetTasksUseCase wraps the repository call in try-catch, returning Right on success, Left on failure.","CreateTaskParams bundles all input fields needed to create a new task.","CreateTaskUseCase validates title before any repository call -- business validation in the domain.","Validation failures return Left immediately, avoiding unnecessary API calls.","On success, a new Task entity is constructed with defaults and sent to the repository.","UpdateTaskStatusUseCase fetches the task, applies the change, then updates via repository."],bugChallenge:{code:`class DeleteTaskUseCase
    implements BaseUseCase<void, String> {
  final TaskRepository _repository;
  DeleteTaskUseCase(this._repository);

  @override
  Future<Either<Failure, void>> call(String taskId) async {
    final task = await _repository.getTaskById(taskId);
    if (task.status == TaskStatus.done) {
      return Left(ValidationFailure('Cannot delete completed tasks'));
    }
    await _repository.deleteTask(taskId);
    return const Right(null);
  }
}`,hint:"What happens if getTaskById or deleteTask throws an exception?",answer:"The use case has no try-catch block. If _repository.getTaskById throws (e.g., task not found, network error), the exception propagates unhandled. Both repository calls should be wrapped in try-catch returning Left(ServerFailure(e.toString())) on failure. The validation check is correct business logic, but needs error handling around all async operations."},difficulty:"advanced",prereqs:[36]},
// ============ LESSON 38 ============
{id:38,title:"Data Layer",subtitle:"The bridge between your app and the outside world",analogy:"The data layer is like a translator at the United Nations. The speaker (API server) talks in one language (JSON). The listener (domain layer) understands another language (Dart entities). The translator (data layer) sits in between, converting messages back and forth perfectly. The translator also has a notebook (cache) -- if the speaker is unavailable, the translator can read from their notes instead.",points:[{t:"DTOs with json_serializable",d:"Data Transfer Objects mirror the API response structure. Using json_serializable, Dart generates fromJson and toJson boilerplate for you.",code:`import 'package:json_annotation/json_annotation.dart';\n\npart 'task_dto.g.dart';\n\n@JsonSerializable()\nclass TaskDto {\n  final String id;\n  final String title;\n  final String description;\n  final String priority;\n  final String status;\n  @JsonKey(name: 'created_at')\n  final String createdAt;\n  @JsonKey(name: 'due_date')\n  final String? dueDate;\n  @JsonKey(name: 'assignee_id')\n  final String assigneeId;\n\n  const TaskDto({\n    required this.id,\n    required this.title,\n    required this.description,\n    required this.priority,\n    required this.status,\n    required this.createdAt,\n    this.dueDate,\n    required this.assigneeId,\n  });\n\n  factory TaskDto.fromJson(Map<String, dynamic> json) =>\n      _\$TaskDtoFromJson(json);\n\n  Map<String, dynamic> toJson() => _\$TaskDtoToJson(this);\n}`},{t:"DTO to Entity Conversion",d:"DTOs include a toEntity method that converts API data to domain entities. This is where format differences are resolved -- snake_case to camelCase, strings to enums, timestamps to DateTime.",code:`extension TaskDtoMapper on TaskDto {\n  Task toEntity() {\n    return Task(\n      id: id,\n      title: title,\n      description: description,\n      priority: _mapPriority(priority),\n      status: _mapStatus(status),\n      createdAt: DateTime.parse(createdAt),\n      dueDate: dueDate != null\n          ? DateTime.parse(dueDate!) : null,\n      assigneeId: assigneeId,\n    );\n  }\n\n  static TaskPriority _mapPriority(String value) {\n    return TaskPriority.values.firstWhere(\n      (e) => e.name == value,\n      orElse: () => TaskPriority.medium,\n    );\n  }\n}`},{t:"Entity to DTO Conversion",d:"When sending data to the API, you need the reverse conversion. A fromEntity factory converts domain entities back to DTOs for serialization.",code:`extension TaskDtoFactory on TaskDto {\n  static TaskDto fromEntity(Task task) {\n    return TaskDto(\n      id: task.id,\n      title: task.title,\n      description: task.description,\n      priority: task.priority.name,\n      status: task.status.name,\n      createdAt: task.createdAt.toIso8601String(),\n      dueDate: task.dueDate?.toIso8601String(),\n      assigneeId: task.assigneeId,\n    );\n  }\n}`},{t:"Remote Data Source with Dio",d:"The remote data source handles all API communication using Dio. It knows about endpoints, HTTP methods, headers, and response parsing.",code:`abstract class TaskRemoteDataSource {\n  Future<List<TaskDto>> getTasks();\n  Future<TaskDto> getTaskById(String id);\n  Future<TaskDto> createTask(TaskDto task);\n  Future<void> deleteTask(String id);\n}\n\nclass TaskRemoteDataSourceImpl\n    implements TaskRemoteDataSource {\n  final Dio _dio;\n  TaskRemoteDataSourceImpl(this._dio);\n\n  @override\n  Future<List<TaskDto>> getTasks() async {\n    final response = await _dio.get('/api/tasks');\n    final list = response.data as List;\n    return list\n        .map((json) => TaskDto.fromJson(json))\n        .toList();\n  }\n\n  @override\n  Future<TaskDto> createTask(TaskDto task) async {\n    final response = await _dio.post(\n      '/api/tasks',\n      data: task.toJson(),\n    );\n    return TaskDto.fromJson(response.data);\n  }\n}`},{t:"Local Data Source with Hive",d:"The local data source handles caching and offline storage. In team_mvp_kit, Hive is used for fast key-value storage on the device.",code:`abstract class TaskLocalDataSource {\n  Future<List<TaskDto>> getCachedTasks();\n  Future<void> cacheTasks(List<TaskDto> tasks);\n  Future<void> clearCache();\n}\n\nclass TaskLocalDataSourceImpl\n    implements TaskLocalDataSource {\n  final Box<Map> _box;\n  TaskLocalDataSourceImpl(this._box);\n\n  @override\n  Future<List<TaskDto>> getCachedTasks() async {\n    final items = _box.values.toList();\n    return items\n        .map((map) => TaskDto.fromJson(\n            Map<String, dynamic>.from(map)))\n        .toList();\n  }\n\n  @override\n  Future<void> cacheTasks(List<TaskDto> tasks) async {\n    await _box.clear();\n    for (final task in tasks) {\n      await _box.put(task.id, task.toJson());\n    }\n  }\n}`},{t:"Repository Implementation",d:"The repository implementation ties everything together. It decides when to call the remote source, when to use cached data, and converts DTOs to entities.",code:`class TaskRepositoryImpl implements TaskRepository {\n  final TaskRemoteDataSource _remote;\n  final TaskLocalDataSource _local;\n\n  TaskRepositoryImpl(this._remote, this._local);\n\n  @override\n  Future<List<Task>> getTasks() async {\n    try {\n      final dtos = await _remote.getTasks();\n      await _local.cacheTasks(dtos);\n      return dtos.map((d) => d.toEntity()).toList();\n    } catch (e) {\n      // Fallback to cache on network error\n      final cached = await _local.getCachedTasks();\n      if (cached.isEmpty) rethrow;\n      return cached.map((d) => d.toEntity()).toList();\n    }\n  }\n}`},{t:"API Client Setup in team_mvp_kit",d:"team_mvp_kit configures Dio with base URL, interceptors for auth tokens, logging, and error transformation in the infrastructure layer.",code:`class ApiClient {\n  late final Dio dio;\n\n  ApiClient({required String baseUrl, required TokenStorage tokenStorage}) {\n    dio = Dio(BaseOptions(\n      baseUrl: baseUrl,\n      connectTimeout: const Duration(seconds: 10),\n      receiveTimeout: const Duration(seconds: 10),\n      headers: {'Content-Type': 'application/json'},\n    ));\n\n    dio.interceptors.addAll([\n      AuthInterceptor(tokenStorage),\n      LogInterceptor(requestBody: true, responseBody: true),\n    ]);\n  }\n}`},{t:"Error Mapping in Repository",d:"The repository converts low-level exceptions (DioException, SocketException) into domain Failure types that the use case and BLoC understand.",code:`@override\nFuture<Task> getTaskById(String id) async {\n  try {\n    final dto = await _remote.getTaskById(id);\n    return dto.toEntity();\n  } on DioException catch (e) {\n    if (e.type == DioExceptionType.connectionTimeout) {\n      throw const NetworkFailure();\n    }\n    throw ServerFailure(\n      e.message ?? 'Unknown error',\n      statusCode: e.response?.statusCode,\n    );\n  } on SocketException {\n    throw const NetworkFailure();\n  }\n}`},{t:"Running Code Generation",d:"After creating or modifying DTOs with json_serializable annotations, you run build_runner to generate the fromJson/toJson implementations.",code:`# Generate once\nflutter pub run build_runner build\n\n# Watch for changes and auto-generate\nflutter pub run build_runner watch\n\n# Delete conflicting outputs first\nflutter pub run build_runner build --delete-conflicting-outputs`}],whatIs:"The Data Layer implements the repository interfaces defined by the domain layer. It contains DTOs (Data Transfer Objects) for JSON serialization, remote data sources for API communication via Dio, local data sources for caching via Hive, and repository implementations that orchestrate between remote and local sources. The data layer is the only layer that knows about HTTP, JSON, databases, and external services.",realWorld:"In team_mvp_kit, the data layer handles the messy reality of network communication. When the API returns snake_case JSON, the DTO converts it to camelCase entities. When the network is down, the repository falls back to cached data. When the auth token expires, the Dio interceptor refreshes it automatically. The presentation and domain layers never see any of this complexity -- they just get clean entities and typed failures.",code:`import 'package:dio/dio.dart';
import 'package:json_annotation/json_annotation.dart';

// ---- DTO ----

class TaskDto {
  final String id;
  final String title;
  final String description;
  final String priority;
  final String status;
  final String createdAt;
  final String? dueDate;
  final String assigneeId;

  const TaskDto({
    required this.id,
    required this.title,
    required this.description,
    required this.priority,
    required this.status,
    required this.createdAt,
    this.dueDate,
    required this.assigneeId,
  });

  factory TaskDto.fromJson(Map<String, dynamic> json) {
    return TaskDto(
      id: json['id'] as String,
      title: json['title'] as String,
      description: json['description'] as String,
      priority: json['priority'] as String,
      status: json['status'] as String,
      createdAt: json['created_at'] as String,
      dueDate: json['due_date'] as String?,
      assigneeId: json['assignee_id'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'priority': priority,
      'status': status,
      'created_at': createdAt,
      'due_date': dueDate,
      'assignee_id': assigneeId,
    };
  }

  Task toEntity() {
    return Task(
      id: id,
      title: title,
      description: description,
      priority: TaskPriority.values.firstWhere(
        (e) => e.name == priority,
        orElse: () => TaskPriority.medium,
      ),
      status: TaskStatus.values.firstWhere(
        (e) => e.name == status,
        orElse: () => TaskStatus.todo,
      ),
      createdAt: DateTime.parse(createdAt),
      dueDate: dueDate != null
          ? DateTime.parse(dueDate!)
          : null,
      assigneeId: assigneeId,
    );
  }

  static TaskDto fromEntity(Task task) {
    return TaskDto(
      id: task.id,
      title: task.title,
      description: task.description,
      priority: task.priority.name,
      status: task.status.name,
      createdAt: task.createdAt.toIso8601String(),
      dueDate: task.dueDate?.toIso8601String(),
      assigneeId: task.assigneeId,
    );
  }
}

// ---- Remote Data Source ----

abstract class TaskRemoteDataSource {
  Future<List<TaskDto>> getTasks();
  Future<TaskDto> getTaskById(String id);
  Future<TaskDto> createTask(TaskDto dto);
  Future<TaskDto> updateTask(TaskDto dto);
  Future<void> deleteTask(String id);
}

class TaskRemoteDataSourceImpl
    implements TaskRemoteDataSource {
  final Dio _dio;
  const TaskRemoteDataSourceImpl(this._dio);

  @override
  Future<List<TaskDto>> getTasks() async {
    final response = await _dio.get('/api/tasks');
    final list = response.data['data'] as List;
    return list
        .map((json) =>
            TaskDto.fromJson(json as Map<String, dynamic>))
        .toList();
  }

  @override
  Future<TaskDto> getTaskById(String id) async {
    final response = await _dio.get('/api/tasks/\$id');
    return TaskDto.fromJson(
        response.data['data'] as Map<String, dynamic>);
  }

  @override
  Future<TaskDto> createTask(TaskDto dto) async {
    final response = await _dio.post(
      '/api/tasks',
      data: dto.toJson(),
    );
    return TaskDto.fromJson(
        response.data['data'] as Map<String, dynamic>);
  }

  @override
  Future<TaskDto> updateTask(TaskDto dto) async {
    final response = await _dio.put(
      '/api/tasks/\${dto.id}',
      data: dto.toJson(),
    );
    return TaskDto.fromJson(
        response.data['data'] as Map<String, dynamic>);
  }

  @override
  Future<void> deleteTask(String id) async {
    await _dio.delete('/api/tasks/\$id');
  }
}

// ---- Repository Implementation ----

class TaskRepositoryImpl implements TaskRepository {
  final TaskRemoteDataSource _remote;

  const TaskRepositoryImpl(this._remote);

  @override
  Future<List<Task>> getTasks() async {
    final dtos = await _remote.getTasks();
    return dtos.map((dto) => dto.toEntity()).toList();
  }

  @override
  Future<Task> getTaskById(String id) async {
    final dto = await _remote.getTaskById(id);
    return dto.toEntity();
  }

  @override
  Future<void> createTask(Task task) async {
    final dto = TaskDto.fromEntity(task);
    await _remote.createTask(dto);
  }

  @override
  Future<void> updateTask(Task task) async {
    final dto = TaskDto.fromEntity(task);
    await _remote.updateTask(dto);
  }

  @override
  Future<void> deleteTask(String id) async {
    await _remote.deleteTask(id);
  }
}`,funFact:"The json_serializable package was one of the first Dart code generation packages and has been downloaded over 500 million times on pub.dev. It uses Dart's build_runner system to generate toJson and fromJson methods at compile time, which means zero runtime reflection cost. This was a deliberate design choice by the Dart team since Dart dropped runtime reflection (dart:mirrors) to enable tree-shaking and smaller binaries.",quiz:[{q:"What is the primary purpose of a DTO?",opts:["To store data in a database","To mirror the API response structure and handle JSON serialization","To display data in the UI","To validate user input"],ans:1},{q:"Why does the repository implementation try the remote source first, then fall back to cache?",opts:["The cache is always outdated","Remote data is always faster","To provide offline support -- if the network fails, cached data can be shown","Caching is not reliable"],ans:2},{q:"What does the @JsonKey(name: 'created_at') annotation do?",opts:["Creates a new field called created_at","Maps the JSON field 'created_at' to the Dart field 'createdAt'","Validates the date format","Makes the field optional"],ans:1},{q:"Where should DioException handling happen in Clean Architecture?",opts:["In the domain use case","In the BLoC","In the data layer (repository implementation or data source)","In the UI widget"],ans:2},{q:"What command generates the .g.dart files for json_serializable?",opts:["dart compile","flutter build","flutter pub run build_runner build","dart generate json"],ans:2}],challenge:"Create the complete data layer for a 'User Profile' feature: (1) UserProfileDto with json_serializable annotations including @JsonKey for snake_case fields (first_name, last_name, profile_image_url, created_at), (2) toEntity and fromEntity conversions, (3) UserProfileRemoteDataSource with Dio for GET /api/profile and PUT /api/profile, (4) UserProfileLocalDataSource with Hive for caching, (5) UserProfileRepositoryImpl that tries remote first and falls back to cache. Include proper error mapping from DioException to typed Failures.",resources:[{type:"docs",title:"json_serializable Package",url:"https://pub.dev/packages/json_serializable",source:"pub.dev"},{type:"docs",title:"Dio HTTP Client",url:"https://pub.dev/packages/dio",source:"pub.dev"},{type:"docs",title:"Hive Database",url:"https://pub.dev/packages/hive",source:"pub.dev"}],eli5:"Imagine you have a pen pal in another country. They write letters in French (JSON from the API). You read English (Dart entities). The data layer is your translator friend who sits in between. When a letter arrives, the translator reads the French (fromJson), understands it, and rewrites it in English (toEntity) for you. When you write back, the translator takes your English (entity), converts it to French (toJson), and mails it. The translator also keeps a copy of recent letters (cache) in case the mail service goes down!",codeWalkthrough:["TaskDto mirrors the API response with String fields for all values including dates and enums.","fromJson factory reads each field from the JSON map, handling nullable fields like dueDate.","toJson creates a Map with snake_case keys matching the API's expected format.","toEntity converts strings to proper Dart types: DateTime.parse for dates, enum.values.firstWhere for enums.","firstWhere with orElse provides a safe default if the API returns an unexpected enum value.","fromEntity is the reverse: entity fields converted back to strings for JSON serialization.","TaskRemoteDataSource defines the abstract contract for all API operations.","TaskRemoteDataSourceImpl takes a Dio instance and implements each method with HTTP calls.","getTasks sends a GET request and maps the response JSON list to a list of TaskDtos.","createTask sends a POST with the DTO's JSON body and returns the server's response as a new DTO.","updateTask uses PUT with the task ID in the URL path.","deleteTask sends a DELETE request with just the ID.","TaskRepositoryImpl implements the domain's TaskRepository interface.","getTasks fetches DTOs from remote, converts each to an entity with toEntity.","createTask and updateTask convert entities to DTOs before sending to the remote source."],bugChallenge:{code:`class UserRepositoryImpl implements UserRepository {
  final Dio _dio;

  UserRepositoryImpl(this._dio);

  @override
  Future<User> getUser(String id) async {
    final response = await _dio.get('/api/users/\$id');
    final json = response.data;
    return User(
      id: json['id'],
      name: json['first_name'] + ' ' + json['last_name'],
      email: json['email'],
    );
  }
}`,hint:"This repository has two architectural problems. Look at what it depends on and what it returns.",answer:"Problem 1: The repository depends directly on Dio instead of going through a data source layer. It should depend on a UserRemoteDataSource abstract class. Problem 2: JSON parsing is happening directly in the repository instead of in a DTO class. The repository should receive a UserDto from the data source and call toEntity() on it. Fix: create UserDto with fromJson and toEntity, create UserRemoteDataSource, and have the repository depend on the data source abstraction."},difficulty:"advanced",prereqs:[37]},
// ============ LESSON 39 ============
{id:39,title:"Presentation Layer",subtitle:"Where your app meets the user's eyes",analogy:"The presentation layer is like the front of a restaurant. The dining room (screens), the menu boards (widgets), and the waiters (BLoCs) all work together to give the customer a great experience. The waiters take orders to the kitchen (domain layer) and bring food back. The dining room never goes into the kitchen, and the chef never serves food directly. The presentation layer is the beautiful face of your app that hides all the complex plumbing behind the scenes.",points:[{t:"BLoCs Consuming Use Cases",d:"In the presentation layer, BLoCs receive events from the UI and call use cases from the domain layer. They never call repositories or data sources directly.",code:`class TaskListBloc extends Bloc<TaskEvent, TaskListState>\n    with SafeEmitMixin {\n  final GetTasksUseCase _getTasks;\n  final CreateTaskUseCase _createTask;\n\n  TaskListBloc({\n    required GetTasksUseCase getTasks,\n    required CreateTaskUseCase createTask,\n  })  : _getTasks = getTasks,\n        _createTask = createTask,\n        super(const TaskListState()) {\n    on<LoadTasks>(_onLoad);\n    on<CreateTask>(_onCreate);\n  }\n\n  Future<void> _onLoad(\n    LoadTasks event,\n    Emitter<TaskListState> emit,\n  ) async {\n    safeEmit(state.copyWith(isLoading: true));\n    final result = await _getTasks(const NoParams());\n    result.fold(\n      (failure) => safeEmit(state.copyWith(\n        isLoading: false,\n        failure: failure,\n      )),\n      (tasks) => safeEmit(state.copyWith(\n        isLoading: false,\n        tasks: tasks,\n      )),\n    );\n  }\n}`},{t:"Handling Either Results in BLoC",d:"When use cases return Either<Failure, Type>, the BLoC uses fold() to handle both cases. Left triggers a failure state, Right triggers a success state.",code:`Future<void> _onCreate(\n  CreateTask event,\n  Emitter<TaskListState> emit,\n) async {\n  safeEmit(state.copyWith(isSubmitting: true));\n  final result = await _createTask(CreateTaskParams(\n    title: event.title,\n    description: event.description,\n    priority: event.priority,\n    assigneeId: event.assigneeId,\n  ));\n  result.fold(\n    (failure) => safeEmit(state.copyWith(\n      isSubmitting: false,\n      failure: failure,\n    )),\n    (_) {\n      safeEmit(state.copyWith(isSubmitting: false));\n      add(LoadTasks()); // Refresh the list\n    },\n  );\n}`},{t:"Screens vs Views vs Widgets",d:"In team_mvp_kit, Screens are full pages with a Scaffold. Views are the content inside a screen (minus the Scaffold). Widgets are small reusable components. This separation makes code organized and testable.",code:`// Screen: Full page, provides BLoC, has Scaffold\nclass TaskListScreen extends StatelessWidget {\n  const TaskListScreen({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return BlocProvider(\n      create: (_) => getIt<TaskListBloc>()\n          ..add(LoadTasks()),\n      child: const TaskListView(),\n    );\n  }\n}\n\n// View: Content without Scaffold setup\nclass TaskListView extends StatelessWidget {\n  const TaskListView({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Tasks')),\n      body: const TaskListBody(),\n    );\n  }\n}`},{t:"TeamzViewStateMixin Pattern",d:"team_mvp_kit uses a mixin that provides common screen behaviors: showing loading overlays, handling errors with SnackBars, and managing lifecycle. This reduces boilerplate across all screens.",code:`mixin TeamzViewStateMixin<T extends StatefulWidget>\n    on State<T> {\n  void showLoadingOverlay() {\n    showDialog(\n      context: context,\n      barrierDismissible: false,\n      builder: (_) => const Center(\n        child: CircularProgressIndicator(),\n      ),\n    );\n  }\n\n  void hideLoadingOverlay() {\n    if (Navigator.canPop(context)) {\n      Navigator.pop(context);\n    }\n  }\n\n  void showErrorSnackBar(Failure failure) {\n    ScaffoldMessenger.of(context).showSnackBar(\n      SnackBar(\n        content: Text(failure.message),\n        backgroundColor: Colors.red,\n        action: SnackBarAction(\n          label: 'Retry',\n          textColor: Colors.white,\n          onPressed: onRetry,\n        ),\n      ),\n    );\n  }\n\n  void onRetry() {}\n}`},{t:"Widgets Consuming BLoCs",d:"Small widgets use BlocBuilder or BlocSelector to display specific parts of state. Each widget only rebuilds when its specific data changes.",code:`class TaskCountBadge extends StatelessWidget {\n  const TaskCountBadge({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return BlocSelector<TaskListBloc, TaskListState, int>(\n      selector: (state) => state.tasks\n          .where((t) => !t.isDone).length,\n      builder: (context, pendingCount) {\n        return Badge(\n          label: Text('\$pendingCount'),\n          child: const Icon(Icons.task),\n        );\n      },\n    );\n  }\n}`},{t:"Loading/Error/Content Pattern",d:"Most screens follow a pattern: show loading spinner while fetching, show error with retry if it fails, show content on success. This pattern is so common it deserves a reusable widget.",code:`class AsyncContent<T> extends StatelessWidget {\n  final bool isLoading;\n  final Failure? failure;\n  final T? data;\n  final Widget Function(T data) builder;\n  final VoidCallback onRetry;\n\n  const AsyncContent({\n    super.key,\n    required this.isLoading,\n    this.failure,\n    this.data,\n    required this.builder,\n    required this.onRetry,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    if (isLoading && data == null) {\n      return const Center(\n        child: CircularProgressIndicator(),\n      );\n    }\n    if (failure != null && data == null) {\n      return Center(\n        child: Column(\n          mainAxisSize: MainAxisSize.min,\n          children: [\n            Text(failure!.message),\n            const SizedBox(height: 16),\n            ElevatedButton(\n              onPressed: onRetry,\n              child: const Text('Retry'),\n            ),\n          ],\n        ),\n      );\n    }\n    if (data != null) {\n      return builder(data as T);\n    }\n    return const SizedBox.shrink();\n  }\n}`},{t:"Form Screens with BLoC",d:"Forms send events to BLoC on submission. The BLoC validates via use case, then emits success or validation failure. The UI listens for success to navigate away and failure to show errors.",code:`class CreateTaskForm extends StatefulWidget {\n  const CreateTaskForm({super.key});\n  @override\n  State<CreateTaskForm> createState() => _CreateTaskFormState();\n}\n\nclass _CreateTaskFormState extends State<CreateTaskForm> {\n  final _titleController = TextEditingController();\n  final _descController = TextEditingController();\n\n  @override\n  Widget build(BuildContext context) {\n    return BlocListener<TaskListBloc, TaskListState>(\n      listenWhen: (prev, curr) =>\n          prev.isSubmitting && !curr.isSubmitting,\n      listener: (context, state) {\n        if (state.failure != null) {\n          ScaffoldMessenger.of(context).showSnackBar(\n            SnackBar(content: Text(state.failure!.message)),\n          );\n        } else {\n          context.pop(); // Success - go back\n        }\n      },\n      child: Column(children: [\n        TextField(controller: _titleController),\n        TextField(controller: _descController),\n        ElevatedButton(\n          onPressed: () {\n            context.read<TaskListBloc>().add(CreateTask(\n              title: _titleController.text,\n              description: _descController.text,\n            ));\n          },\n          child: const Text('Create'),\n        ),\n      ]),\n    );\n  }\n}`}],whatIs:"The Presentation Layer is the outermost layer in Clean Architecture that the user interacts with. It contains BLoCs that call domain use cases and manage UI state, Screens that provide BLoCs and define page structure, Views that contain the actual UI content, and Widgets that are small reusable components. In team_mvp_kit, the presentation layer uses patterns like TeamzViewStateMixin for common screen behaviors and AsyncContent for the universal loading/error/content pattern. BLoCs handle Either results from use cases using fold() to map success and failure to UI states.",realWorld:"In team_mvp_kit, every feature follows the Screen-View-Widget pattern consistently. The Screen creates and provides the BLoC. The View defines the page layout with AppBar and body. Individual widgets handle specific pieces of state using BlocSelector for optimal rebuilds. The TeamzViewStateMixin eliminates repetitive loading overlay and error handling code across dozens of screens. This consistency means any team member can jump into any feature and immediately understand the structure.",code:`import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

// Assume domain types: Task, Failure, GetTasksUseCase, etc.

// ---- State ----

class TaskListState extends BaseState {
  final List<Task> tasks;
  final bool isLoading;
  final bool isSubmitting;
  final Failure? failure;

  const TaskListState({
    this.tasks = const [],
    this.isLoading = false,
    this.isSubmitting = false,
    this.failure,
  });

  TaskListState copyWith({
    List<Task>? tasks,
    bool? isLoading,
    bool? isSubmitting,
    Failure? failure,
  }) {
    return TaskListState(
      tasks: tasks ?? this.tasks,
      isLoading: isLoading ?? this.isLoading,
      isSubmitting: isSubmitting ?? this.isSubmitting,
      failure: failure,
    );
  }

  @override
  List<Object?> get props => [
    tasks, isLoading, isSubmitting, failure,
  ];
}

// ---- Events ----

class LoadTasks extends BaseEvent {}

class CreateTask extends BaseEvent {
  final String title;
  final String description;
  final TaskPriority priority;
  final String assigneeId;

  const CreateTask({
    required this.title,
    required this.description,
    this.priority = TaskPriority.medium,
    this.assigneeId = '',
  });

  @override
  List<Object?> get props => [
    title, description, priority, assigneeId,
  ];
}

class DeleteTask extends BaseEvent {
  final String taskId;
  const DeleteTask(this.taskId);

  @override
  List<Object?> get props => [taskId];
}

// ---- BLoC ----

class TaskListBloc extends Bloc<BaseEvent, TaskListState>
    with SafeEmitMixin {
  final GetTasksUseCase _getTasks;
  final CreateTaskUseCase _createTask;

  TaskListBloc({
    required GetTasksUseCase getTasks,
    required CreateTaskUseCase createTask,
  })  : _getTasks = getTasks,
        _createTask = createTask,
        super(const TaskListState()) {
    on<LoadTasks>(_onLoad);
    on<CreateTask>(_onCreate);
  }

  Future<void> _onLoad(
    LoadTasks event,
    Emitter<TaskListState> emit,
  ) async {
    safeEmit(state.copyWith(
      isLoading: true,
      failure: null,
    ));
    final result = await _getTasks(const NoParams());
    result.fold(
      (failure) => safeEmit(state.copyWith(
        isLoading: false,
        failure: failure,
      )),
      (tasks) => safeEmit(state.copyWith(
        isLoading: false,
        tasks: tasks,
      )),
    );
  }

  Future<void> _onCreate(
    CreateTask event,
    Emitter<TaskListState> emit,
  ) async {
    safeEmit(state.copyWith(
      isSubmitting: true,
      failure: null,
    ));
    final result = await _createTask(CreateTaskParams(
      title: event.title,
      description: event.description,
      priority: event.priority,
      assigneeId: event.assigneeId,
    ));
    result.fold(
      (failure) => safeEmit(state.copyWith(
        isSubmitting: false,
        failure: failure,
      )),
      (_) {
        safeEmit(state.copyWith(isSubmitting: false));
        add(LoadTasks());
      },
    );
  }
}

// ---- Screen (provides BLoC) ----

class TaskListScreen extends StatelessWidget {
  const TaskListScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => getIt<TaskListBloc>()
          ..add(LoadTasks()),
      child: const TaskListView(),
    );
  }
}

// ---- View (content with Scaffold) ----

class TaskListView extends StatelessWidget {
  const TaskListView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Tasks'),
        actions: const [TaskCountBadge()],
      ),
      body: BlocConsumer<TaskListBloc, TaskListState>(
        listenWhen: (prev, curr) =>
            prev.failure != curr.failure &&
            curr.failure != null,
        listener: (context, state) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(state.failure!.message),
              backgroundColor: Colors.red,
              action: SnackBarAction(
                label: 'Retry',
                textColor: Colors.white,
                onPressed: () => context
                    .read<TaskListBloc>()
                    .add(LoadTasks()),
              ),
            ),
          );
        },
        builder: (context, state) {
          if (state.isLoading && state.tasks.isEmpty) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
          if (state.tasks.isEmpty) {
            return const Center(
              child: Text('No tasks yet. Create one!'),
            );
          }
          return RefreshIndicator(
            onRefresh: () async {
              context.read<TaskListBloc>()
                  .add(LoadTasks());
            },
            child: ListView.builder(
              itemCount: state.tasks.length,
              itemBuilder: (context, index) {
                return TaskCard(
                  task: state.tasks[index],
                );
              },
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => context.push('/tasks/create'),
        child: const Icon(Icons.add),
      ),
    );
  }
}

// ---- Reusable Widget ----

class TaskCard extends StatelessWidget {
  final Task task;
  const TaskCard({super.key, required this.task});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(
        horizontal: 16, vertical: 4,
      ),
      child: ListTile(
        leading: Icon(
          task.isDone
              ? Icons.check_circle
              : Icons.radio_button_unchecked,
          color: task.isDone ? Colors.green : null,
        ),
        title: Text(
          task.title,
          style: TextStyle(
            decoration: task.isDone
                ? TextDecoration.lineThrough
                : null,
          ),
        ),
        subtitle: Text(task.description),
        trailing: task.isHighPriority
            ? const Icon(Icons.priority_high,
                color: Colors.red)
            : null,
        onTap: () => context.push(
          '/tasks/\${task.id}',
        ),
      ),
    );
  }
}

// ---- BlocSelector Widget ----

class TaskCountBadge extends StatelessWidget {
  const TaskCountBadge({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocSelector<TaskListBloc, TaskListState, int>(
      selector: (state) =>
          state.tasks.where((t) => !t.isDone).length,
      builder: (context, pendingCount) {
        if (pendingCount == 0) {
          return const SizedBox.shrink();
        }
        return Padding(
          padding: const EdgeInsets.only(right: 16),
          child: Badge(
            label: Text('\$pendingCount'),
            child: const Icon(Icons.task_alt),
          ),
        );
      },
    );
  }
}`,funFact:"The Screen-View-Widget separation pattern used in team_mvp_kit was popularized by the Very Good Ventures team (a Flutter consulting company that works closely with Google). They call it the 'feature-driven development' approach. The idea is that the Screen is the 'smart' component that knows about dependency injection and BLoC creation, while the View and Widgets are 'dumb' components that only know about rendering. This makes widgets extremely easy to test because you can provide mock BLoCs.",quiz:[{q:"In team_mvp_kit, what is the difference between a Screen and a View?",opts:["Screens are for mobile, Views are for web","Screens provide BLoCs and handle DI; Views contain the actual UI content","Screens use StatefulWidget; Views use StatelessWidget","There is no difference"],ans:1},{q:"How does a BLoC handle Either<Failure, Type> from a use case?",opts:["It unwraps it automatically","It uses fold() to handle Left (failure) and Right (success) separately","It converts it to a Stream","It throws the failure as an exception"],ans:1},{q:"What does the TeamzViewStateMixin provide?",opts:["Database access methods","Common screen behaviors like loading overlays and error SnackBars","Navigation between screens","API call helpers"],ans:1},{q:"Why does TaskCountBadge use BlocSelector instead of BlocBuilder?",opts:["BlocSelector is newer and better","BlocSelector extracts only the pending count, so it only rebuilds when that specific value changes","BlocSelector supports animations","BlocBuilder cannot access BLoC state"],ans:1},{q:"In the presentation layer, what should a BLoC depend on?",opts:["Remote data sources directly","The Dio HTTP client","Domain use cases","Database tables"],ans:2}],challenge:"Build a complete presentation layer for a 'Notes' feature: (1) NoteListState with notes, isLoading, isSubmitting, failure fields, (2) NoteListBloc that uses GetNotesUseCase, CreateNoteUseCase, and DeleteNoteUseCase with Either handling, (3) NoteListScreen that provides the BLoC, (4) NoteListView with BlocConsumer for error SnackBars and a list display, (5) NoteCard widget with BlocSelector that only shows a 'synced' indicator when the note's sync status changes. Include pull-to-refresh and an empty state.",resources:[{type:"docs",title:"flutter_bloc Package",url:"https://pub.dev/packages/flutter_bloc",source:"pub.dev"},{type:"docs",title:"BLoC Architecture Guide",url:"https://bloclibrary.dev/architecture/",source:"bloclibrary.dev"},{type:"docs",title:"Flutter State Management",url:"https://docs.flutter.dev/data-and-backend/state-mgmt/intro",source:"flutter.dev"}],eli5:"Think of the presentation layer as the stage of a school play. The Screens are the stage managers who set everything up before the show (creating BLoCs, getting dependencies). The Views are the actual scenes with all the props and backdrops (Scaffold, AppBar, layout). The Widgets are the actors who each have a small part to play (a card here, a button there). And the BLoC is the director backstage who tells the actors what to say based on what the audience does. The audience (user) never sees the director, just the beautiful performance!",codeWalkthrough:["TaskListState holds tasks, loading flags, and failure following the tri-state pattern.","copyWith enables immutable state updates with selective field overrides.","LoadTasks triggers data fetch. CreateTask carries form data. DeleteTask carries the task ID.","TaskListBloc depends on use cases injected through the constructor, not repositories.","_onLoad sets loading true, calls the use case, and uses fold() on the Either result.","Left branch (failure) emits state with the failure. Right branch (success) emits state with tasks.","_onCreate sets isSubmitting true, calls create use case, handles both outcomes.","On successful creation, it dispatches LoadTasks to refresh the list automatically.","TaskListScreen is the entry point -- it creates and provides the BLoC, then renders TaskListView.","getIt<TaskListBloc>() uses the service locator to get a fully wired BLoC instance.","The cascade operator (..) immediately sends LoadTasks to start fetching data.","TaskListView uses BlocConsumer for both building UI and listening for errors.","listenWhen filters to only react when a new failure appears in the state.","The SnackBar includes a Retry action that dispatches LoadTasks again.","The builder shows a spinner while loading with no existing data, an empty state message, or the list.","RefreshIndicator enables pull-to-refresh that dispatches LoadTasks.","TaskCard is a reusable widget showing task details with icons for completion and priority.","TaskCountBadge uses BlocSelector to only rebuild when the pending count changes."],bugChallenge:{code:`class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final bloc = ProfileBloc(
      getProfile: GetProfileUseCase(getIt()),
    );
    bloc.add(LoadProfile());

    return BlocProvider.value(
      value: bloc,
      child: BlocBuilder<ProfileBloc, ProfileState>(
        builder: (context, state) {
          return Scaffold(
            appBar: AppBar(title: Text(state.user?.name ?? '')),
            body: Text(state.user?.email ?? ''),
          );
        },
      ),
    );
  }
}`,hint:"Look at how the BLoC is created. What happens when this widget rebuilds?",answer:"The BLoC is created directly in the build method, so every time the widget rebuilds, a NEW BLoC is created and the old one is never disposed (memory leak). Also, BlocProvider.value does not manage the BLoC lifecycle so it will not dispose it. Fix: use BlocProvider with a create callback instead of BlocProvider.value. Change to: BlocProvider(create: (_) => ProfileBloc(getProfile: GetProfileUseCase(getIt()))..add(LoadProfile()), child: ...). This ensures one BLoC is created and properly disposed."},difficulty:"advanced",prereqs:[38]},
// ============ LESSON 40 ============
{id:40,title:"GetIt Service Locator",subtitle:"The universal toolbox for your app's dependencies",analogy:"Imagine a hospital. Doctors do not build their own stethoscopes or mix their own medicines. There is a central supply room (GetIt) where everything is registered and organized. When a doctor needs a syringe, they go to the supply room and ask for one. The supply room either gives them a fresh one (factory) or the same shared one that all doctors use (singleton). GetIt is your app's supply room -- it holds all the services and hands them out when needed.",points:[{t:"What Is Dependency Injection?",d:"Dependency Injection (DI) means giving an object its dependencies from the outside instead of creating them internally. This makes code testable, flexible, and loosely coupled.",code:`// WITHOUT DI (hard to test, tightly coupled)\nclass TaskBloc {\n  final repo = TaskRepositoryImpl(Dio());\n  // Can't test without a real server!\n}\n\n// WITH DI (testable, flexible)\nclass TaskBloc {\n  final TaskRepository repo;\n  TaskBloc({required this.repo});\n  // Can inject a mock for testing!\n}`},{t:"Why GetIt?",d:"GetIt is a simple, fast service locator for Dart. Unlike Provider or Riverpod, it works outside the widget tree, meaning you can access services in BLoCs, use cases, and data sources without BuildContext.",code:`// Provider requires BuildContext\nfinal repo = context.read<TaskRepository>();\n// Won't work outside widgets!\n\n// GetIt works ANYWHERE\nfinal repo = getIt<TaskRepository>();\n// Works in BLoCs, use cases, services, main.dart`},{t:"Setting Up GetIt",d:"Create a global GetIt instance and register your dependencies. This is typically done in a setup function called from main() before runApp.",code:`import 'package:get_it/get_it.dart';\n\nfinal getIt = GetIt.instance;\n\nvoid setupDependencies() {\n  // Register Dio\n  getIt.registerLazySingleton<Dio>(() => Dio(\n    BaseOptions(baseUrl: 'https://api.example.com'),\n  ));\n\n  // Register data source\n  getIt.registerLazySingleton<TaskRemoteDataSource>(\n    () => TaskRemoteDataSourceImpl(getIt()),\n  );\n\n  // Register repository\n  getIt.registerLazySingleton<TaskRepository>(\n    () => TaskRepositoryImpl(getIt()),\n  );\n}`},{t:"Singletons vs Factories",d:"Singletons create one instance shared across the entire app (like Dio, repositories). Factories create a new instance every time (like BLoCs that should not be shared between screens).",code:`// Singleton - one instance forever\ngetIt.registerLazySingleton<Dio>(() => Dio());\n// getIt<Dio>() always returns the SAME instance\n\n// Factory - new instance each time\ngetIt.registerFactory<TaskListBloc>(\n  () => TaskListBloc(\n    getTasks: getIt(),\n    createTask: getIt(),\n  ),\n);\n// getIt<TaskListBloc>() returns a NEW instance\n// each time - important for BLoCs!`},{t:"LazySingleton vs Singleton",d:"registerSingleton creates the instance immediately at registration time. registerLazySingleton creates it on first access. Lazy is preferred because it speeds up app startup.",code:`// Created immediately (blocks startup)\ngetIt.registerSingleton<Database>(\n  Database()..initialize(),\n);\n\n// Created on first use (lazy - faster startup)\ngetIt.registerLazySingleton<Database>(\n  () => Database()..initialize(),\n);`},{t:"DependencyManager Pattern from team_mvp_kit",d:"team_mvp_kit organizes registration in a DependencyManager class with separate methods for each concern: network, data sources, repositories, use cases, and BLoCs.",code:`class DependencyManager {\n  static Future<void> init() async {\n    _registerNetwork();\n    _registerDataSources();\n    _registerRepositories();\n    _registerUseCases();\n    _registerBlocs();\n  }\n\n  static void _registerNetwork() {\n    getIt.registerLazySingleton<Dio>(\n      () => ApiClient(baseUrl: Env.apiUrl).dio,\n    );\n  }\n\n  static void _registerDataSources() {\n    getIt.registerLazySingleton<TaskRemoteDataSource>(\n      () => TaskRemoteDataSourceImpl(getIt()),\n    );\n    getIt.registerLazySingleton<TaskLocalDataSource>(\n      () => TaskLocalDataSourceImpl(getIt()),\n    );\n  }\n\n  static void _registerRepositories() {\n    getIt.registerLazySingleton<TaskRepository>(\n      () => TaskRepositoryImpl(getIt(), getIt()),\n    );\n  }\n\n  static void _registerUseCases() {\n    getIt.registerFactory(\n      () => GetTasksUseCase(getIt()),\n    );\n    getIt.registerFactory(\n      () => CreateTaskUseCase(getIt()),\n    );\n  }\n\n  static void _registerBlocs() {\n    getIt.registerFactory(\n      () => TaskListBloc(\n        getTasks: getIt(),\n        createTask: getIt(),\n      ),\n    );\n  }\n}`},{t:"Using GetIt with BlocProvider",d:"BlocProvider's create callback uses getIt to obtain a fully-wired BLoC instance. The BLoC's dependencies are resolved automatically through the registration chain.",code:`// In your screen\nBlocProvider(\n  create: (_) => getIt<TaskListBloc>()\n      ..add(LoadTasks()),\n  child: const TaskListView(),\n)\n\n// GetIt resolves the full chain:\n// TaskListBloc needs GetTasksUseCase\n//   -> GetTasksUseCase needs TaskRepository\n//     -> TaskRepository needs RemoteDataSource\n//       -> RemoteDataSource needs Dio\n// All resolved automatically!`},{t:"Resetting for Testing",d:"GetIt can be reset between tests to ensure a clean state. You can also unregister specific dependencies and re-register mocks.",code:`// In test setup\nsetUp(() {\n  getIt.reset();\n\n  // Register mocks\n  getIt.registerLazySingleton<TaskRepository>(\n    () => MockTaskRepository(),\n  );\n  getIt.registerFactory(\n    () => TaskListBloc(getTasks: getIt()),\n  );\n});\n\ntearDown(() {\n  getIt.reset();\n});`},{t:"Async Registration",d:"Some dependencies need async initialization (like Hive databases or SharedPreferences). GetIt supports async registration with registerSingletonAsync.",code:`Future<void> _registerStorage() async {\n  getIt.registerSingletonAsync<SharedPreferences>(\n    () => SharedPreferences.getInstance(),\n  );\n\n  getIt.registerSingletonAsync<Box<Map>>(\n    () async {\n      await Hive.initFlutter();\n      return Hive.openBox('tasks_cache');\n    },\n  );\n\n  // Wait for all async registrations\n  await getIt.allReady();\n}`}],whatIs:"GetIt is a service locator package for Dart that acts as a central registry for all your app's dependencies. You register services (like Dio, repositories, use cases, and BLoCs) at app startup, and then retrieve them anywhere in your code without needing BuildContext. It supports singletons (one shared instance), lazy singletons (created on first use), and factories (new instance each time). In team_mvp_kit, the DependencyManager class organizes all registrations by layer: network, data sources, repositories, use cases, and BLoCs.",realWorld:"In team_mvp_kit, GetIt is the backbone that wires everything together. The DependencyManager is called in main() before runApp. It registers Dio as a singleton (one HTTP client for the whole app), repositories as lazy singletons (created when first needed), use cases as factories (stateless, so new instances are fine), and BLoCs as factories (each screen gets its own BLoC instance). During testing, the team resets GetIt and registers mocks, making it trivial to test any layer in isolation. Without GetIt, you would need to pass dependencies through constructors all the way from main() down to every widget.",code:`import 'package:get_it/get_it.dart';
import 'package:dio/dio.dart';

final getIt = GetIt.instance;

// ---- DependencyManager (team_mvp_kit pattern) ----

class DependencyManager {
  static Future<void> init() async {
    _registerNetwork();
    _registerDataSources();
    _registerRepositories();
    _registerUseCases();
    _registerBlocs();
  }

  static void _registerNetwork() {
    getIt.registerLazySingleton<Dio>(() {
      final dio = Dio(BaseOptions(
        baseUrl: 'https://api.example.com',
        connectTimeout: const Duration(seconds: 10),
        receiveTimeout: const Duration(seconds: 10),
        headers: {'Content-Type': 'application/json'},
      ));
      dio.interceptors.add(
        LogInterceptor(
          requestBody: true,
          responseBody: true,
        ),
      );
      return dio;
    });
  }

  static void _registerDataSources() {
    getIt.registerLazySingleton<TaskRemoteDataSource>(
      () => TaskRemoteDataSourceImpl(getIt<Dio>()),
    );
  }

  static void _registerRepositories() {
    getIt.registerLazySingleton<TaskRepository>(
      () => TaskRepositoryImpl(
        getIt<TaskRemoteDataSource>(),
      ),
    );
  }

  static void _registerUseCases() {
    getIt.registerFactory<GetTasksUseCase>(
      () => GetTasksUseCase(getIt<TaskRepository>()),
    );
    getIt.registerFactory<CreateTaskUseCase>(
      () => CreateTaskUseCase(getIt<TaskRepository>()),
    );
    getIt.registerFactory<UpdateTaskStatusUseCase>(
      () => UpdateTaskStatusUseCase(
          getIt<TaskRepository>()),
    );
  }

  static void _registerBlocs() {
    getIt.registerFactory<TaskListBloc>(
      () => TaskListBloc(
        getTasks: getIt<GetTasksUseCase>(),
        createTask: getIt<CreateTaskUseCase>(),
      ),
    );
  }
}

// ---- main.dart ----

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Initialize all dependencies
  await DependencyManager.init();

  // Set up BLoC observer for debugging
  Bloc.observer = AppBlocObserver();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        // Global BLoCs provided at app level
        BlocProvider(
          create: (_) => getIt<AuthBloc>()
              ..add(CheckAuthStatus()),
        ),
      ],
      child: MaterialApp.router(
        title: 'Task Manager',
        routerConfig: appRouter,
      ),
    );
  }
}

// ---- Usage in Screens ----

class TaskListScreen extends StatelessWidget {
  const TaskListScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      // GetIt resolves the full dependency chain
      create: (_) => getIt<TaskListBloc>()
          ..add(LoadTasks()),
      child: const TaskListView(),
    );
  }
}

// ---- Testing with GetIt ----

void main() {
  late MockTaskRepository mockRepo;
  late TaskListBloc bloc;

  setUp(() {
    getIt.reset();
    mockRepo = MockTaskRepository();

    getIt.registerLazySingleton<TaskRepository>(
      () => mockRepo,
    );
    getIt.registerFactory<GetTasksUseCase>(
      () => GetTasksUseCase(getIt()),
    );
    getIt.registerFactory<CreateTaskUseCase>(
      () => CreateTaskUseCase(getIt()),
    );

    bloc = TaskListBloc(
      getTasks: getIt<GetTasksUseCase>(),
      createTask: getIt<CreateTaskUseCase>(),
    );
  });

  tearDown(() {
    bloc.close();
    getIt.reset();
  });

  // Now you can test with mocked dependencies
}`,funFact:"GetIt was created by Thomas Burkhart and is named after the idea of 'getting it' -- getting your dependency. It is deliberately simple compared to full-blown DI frameworks like Dagger in Android. The entire package is only about 500 lines of code, but it handles singletons, factories, lazy initialization, async setup, scopes, and disposal. It has been downloaded over 200 million times and is used in some of the largest Flutter apps in production.",quiz:[{q:"What is the main advantage of GetIt over Provider for dependency injection?",opts:["GetIt is faster at rendering widgets","GetIt works anywhere in the code without BuildContext","GetIt supports hot reload","GetIt is built into Flutter"],ans:1},{q:"When should you use registerFactory instead of registerLazySingleton?",opts:["For services that should be shared across the app","For objects that need a new instance each time, like BLoCs","For database connections","For configuration objects"],ans:1},{q:"What is the difference between registerSingleton and registerLazySingleton?",opts:["Singleton is for production, LazySingleton is for testing","Singleton creates the instance immediately; LazySingleton waits until first access","Singleton can be reset; LazySingleton cannot","There is no difference in behavior"],ans:1},{q:"In team_mvp_kit, why are repositories registered as lazy singletons but BLoCs as factories?",opts:["Repositories are faster as singletons","Repositories are stateless and shared; BLoCs are stateful and each screen needs its own instance","It is a random choice","BLoCs cannot be singletons"],ans:1},{q:"How do you use GetIt in tests?",opts:["You cannot use GetIt in tests","Call getIt.reset() in setUp, then register mock implementations","Use a special testing version of GetIt","Disable GetIt during tests"],ans:1}],challenge:"Create a complete DependencyManager for an e-commerce app with: (1) Network layer: Dio with auth interceptor, (2) Data sources: ProductRemoteDataSource, CartLocalDataSource (using Hive with async init), (3) Repositories: ProductRepository, CartRepository, AuthRepository, (4) Use cases: GetProducts, AddToCart, GetCart, Login, Logout, (5) BLoCs: ProductListBloc, CartBloc, AuthBloc. Register each with the appropriate strategy (singleton vs factory). Include async initialization for Hive and SharedPreferences. Write the main.dart that calls DependencyManager.init() and sets up the app.",resources:[{type:"docs",title:"GetIt Package",url:"https://pub.dev/packages/get_it",source:"pub.dev"},{type:"docs",title:"Injectable (GetIt code generator)",url:"https://pub.dev/packages/injectable",source:"pub.dev"},{type:"docs",title:"Flutter Dependency Injection",url:"https://docs.flutter.dev/data-and-backend/state-mgmt/options",source:"flutter.dev"}],eli5:"Think of GetIt as a magical backpack that you pack at the start of a school day. Before leaving home (before runApp), you put everything you might need inside: pencils (Dio), notebooks (repositories), textbooks (use cases), and lunch (BLoCs). Some items you share with friends all day (singletons -- like one water bottle). Other items you get a fresh one whenever you need it (factories -- like tissues). During the school day, whenever any class needs supplies, you just reach into the backpack. You never have to go home to get something! And for tests, you just swap out the real textbook for a practice booklet (mock).",codeWalkthrough:["Create a global GetIt instance accessible throughout the app.","DependencyManager class organizes all registrations with a static init method.","_registerNetwork creates a Dio singleton with base URL, timeouts, and logging interceptor.","LazySingleton means Dio is only created when first requested, not at startup.","_registerDataSources registers the remote data source, passing Dio via getIt<Dio>().","getIt<Dio>() retrieves the previously registered Dio singleton automatically.","_registerRepositories registers TaskRepository implementation with its data source dependency.","_registerUseCases registers use cases as factories since they are stateless operations.","Each use case receives its repository dependency through getIt<TaskRepository>().","_registerBlocs registers BLoCs as factories so each screen gets a fresh instance.","TaskListBloc receives its use case dependencies through named parameters.","In main.dart, WidgetsFlutterBinding.ensureInitialized() is called before async init.","DependencyManager.init() sets up the entire dependency graph before the app runs.","BlocObserver is set up for development debugging of all BLoC events and transitions.","MyApp uses MultiBlocProvider for app-level BLoCs like AuthBloc.","getIt<AuthBloc>() retrieves a fresh AuthBloc with all dependencies resolved.","TaskListScreen uses BlocProvider with getIt to create a screen-level BLoC.","The cascade operator (..) immediately dispatches LoadTasks after creation.","In tests, getIt.reset() clears all registrations for a clean slate.","Mock implementations are registered in place of real ones for isolated testing.","tearDown resets GetIt to prevent test pollution between test cases."],bugChallenge:{code:`class DependencyManager {
  static void init() {
    getIt.registerLazySingleton<Dio>(
      () => Dio(),
    );
    getIt.registerLazySingleton<AuthBloc>(
      () => AuthBloc(getIt()),
    );
    getIt.registerFactory<HomeBloc>(
      () => HomeBloc(authBloc: getIt()),
    );
  }
}

// In Screen A
BlocProvider(
  create: (_) => getIt<AuthBloc>(),
  child: const LoginScreen(),
)

// In Screen B
BlocProvider(
  create: (_) => getIt<AuthBloc>(),
  child: const ProfileScreen(),
)`,hint:"AuthBloc is registered as a LazySingleton but used with BlocProvider in two screens. What happens when one screen disposes?",answer:"AuthBloc is a LazySingleton, meaning there is only ONE instance. But BlocProvider automatically closes (disposes) the BLoC when the widget is removed from the tree. When Screen A is popped, BlocProvider closes the singleton AuthBloc. Now Screen B's AuthBloc reference points to a closed BLoC and will crash on any emit. Fix: For shared BLoCs, either (1) provide them at the app level with MultiBlocProvider so they outlive individual screens, or (2) use BlocProvider.value instead of BlocProvider.create for the singleton so it does not get auto-disposed, or (3) register AuthBloc as a factory if each screen should have its own instance."},difficulty:"intermediate",prereqs:[36]},
{id:41,title:"Injectable & Code Generation",subtitle:"Auto-Wiring Your Dependencies",analogy:"Imagine you run a restaurant and instead of manually telling each waiter which chef to talk to, you put color-coded stickers on everyone. Red sticker chefs only talk to red sticker waiters. Injectable is like those stickers -- you annotate your classes and the system auto-wires everything together!",points:[{t:"What is Code Generation?",d:"Code generation means writing code that writes MORE code for you. Instead of manually registering every service in GetIt, you add annotations like @injectable and run build_runner to auto-generate the registration code. Less boilerplate, fewer mistakes.",code:"// Instead of writing this manually:\ngetIt.registerFactory<AuthRepository>(() => AuthRepositoryImpl(getIt()));\ngetIt.registerFactory<LoginUseCase>(() => LoginUseCase(getIt()));\n\n// You just annotate classes and code gen does the rest!\n@injectable\nclass LoginUseCase {\n  final AuthRepository repo;\n  LoginUseCase(this.repo);\n}"},{t:"The @injectable Annotation",d:"Mark a class with @injectable and it gets registered as a factory in GetIt automatically. Every time you request it, you get a NEW instance. This is perfect for use cases, BLoCs, and anything that should not share state between screens.",code:"import 'package:injectable/injectable.dart';\n\n@injectable\nclass FetchUsersUseCase {\n  final UserRepository repository;\n\n  FetchUsersUseCase(this.repository);\n\n  Future<List<User>> call() => repository.getUsers();\n}\n// build_runner generates:\n// getIt.registerFactory(() => FetchUsersUseCase(getIt()))"},{t:"The @singleton Annotation",d:"Mark a class with @singleton and only ONE instance is created for the entire app lifetime. It is created immediately when the injector initializes. Use this for services that must maintain state or expensive-to-create objects like database connections.",code:"@singleton\nclass LocalDatabaseService {\n  late Box _box;\n\n  Future<void> init() async {\n    _box = await Hive.openBox('app_data');\n  }\n\n  String? get(String key) => _box.get(key);\n  Future<void> put(String key, dynamic value) => _box.put(key, value);\n}\n// Only ONE instance exists in the entire app"},{t:"The @lazySingleton Annotation",d:"Like @singleton but the instance is NOT created until the first time someone requests it. This saves memory and startup time for services that may not be needed right away. In team_mvp_kit, most repository implementations use @LazySingleton.",code:"@lazySingleton\nclass ApiService {\n  final Dio _dio;\n  final TokenStorage _tokenStorage;\n\n  ApiService(this._dio, this._tokenStorage);\n\n  Future<Response> get(String path) => _dio.get(path);\n}\n// Created only when first requested, then reused forever"},{t:"Registering as Abstract Type",d:"Use @Injectable(as: AbstractType) to register an implementation against its abstract interface. This is critical for Clean Architecture -- your domain layer depends on the abstract repository, and the data layer provides the concrete implementation.",code:"abstract class AuthRepository {\n  Future<User> login(String email, String password);\n}\n\n@LazySingleton(as: AuthRepository)\nclass AuthRepositoryImpl implements AuthRepository {\n  final ApiService api;\n  AuthRepositoryImpl(this.api);\n\n  @override\n  Future<User> login(String email, String password) =>\n      api.post('/auth/login', data: {'email': email, 'password': password});\n}"},{t:"The @module Annotation",d:"Some classes like Dio or SharedPreferences come from external packages and you cannot annotate them with @injectable. Use a @module class to register third-party dependencies. Methods annotated with @singleton or @lazySingleton provide these instances.",code:"@module\nabstract class RegisterModule {\n  @singleton\n  Dio get dio => Dio(BaseOptions(\n    baseUrl: 'https://api.example.com',\n    connectTimeout: const Duration(seconds: 15),\n  ));\n\n  @preResolve\n  @singleton\n  Future<SharedPreferences> get prefs => SharedPreferences.getInstance();\n}"},{t:"build_runner & Code Generation",d:"Run 'dart run build_runner build' to generate the injection config file. This scans all your @injectable annotations and creates a .config.dart file with all the GetIt registrations. Run it after adding or changing any annotated class.",code:"# Generate once:\n# dart run build_runner build --delete-conflicting-outputs\n\n# Watch mode (auto-regenerate on save):\n# dart run build_runner watch --delete-conflicting-outputs\n\n# Generated file: lib/injection.config.dart\n# Contains all getIt.register...() calls automatically"},{t:"The Injection Setup in team_mvp_kit",d:"The team_mvp_kit uses a configureDependencies() function that calls the generated init() on the global GetIt instance. This single function initializes ALL dependencies in the correct order, handling async dependencies with @preResolve.",code:"import 'package:get_it/get_it.dart';\nimport 'package:injectable/injectable.dart';\nimport 'injection.config.dart';\n\nfinal getIt = GetIt.instance;\n\n@InjectableInit()\nFuture<void> configureDependencies() async =>\n    getIt.init();\n\n// In main.dart:\nvoid main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  await configureDependencies();\n  runApp(const MyApp());\n}"},{t:"@preResolve for Async Dependencies",d:"Some dependencies need async initialization like opening a Hive box or getting SharedPreferences. Mark them with @preResolve and they will be awaited during configureDependencies(). The generated init() function becomes async automatically.",code:"@module\nabstract class RegisterModule {\n  @preResolve\n  @singleton\n  Future<SharedPreferences> get prefs =>\n      SharedPreferences.getInstance();\n}\n\n// Generated code awaits this:\n// final sharedPreferences = await SharedPreferences.getInstance();\n// getIt.registerSingleton<SharedPreferences>(sharedPreferences);"},{t:"Environment-Specific Registration",d:"Use @Environment('dev') or @Environment('prod') to register different implementations for different build modes. For example, register a MockApiService in development and a real ApiService in production. The environment is set when calling configureDependencies.",code:"@injectable\n@Environment('prod')\nclass RealAnalyticsService implements AnalyticsService {\n  @override\n  void track(String event) => firebase.logEvent(name: event);\n}\n\n@injectable\n@Environment('dev')\nclass FakeAnalyticsService implements AnalyticsService {\n  @override\n  void track(String event) => print('DEV: $event');\n}\n\n// Usage: configureDependencies(environment: 'prod');"}],whatIs:"Injectable is a code generation package for Dart that works with GetIt. You annotate your classes with @injectable, @singleton, or @lazySingleton, then run build_runner to auto-generate all the GetIt registration code. It eliminates manual dependency registration and ensures your dependency graph is always correct and complete.",realWorld:"In the team_mvp_kit project, injectable auto-registers over 30 classes: repositories, use cases, BLoCs, services, and third-party dependencies. Without it, you would need a massive manual setup file that breaks every time you add a new class. Code generation keeps your DI configuration in sync with your actual code automatically.",code:`import 'package:injectable/injectable.dart';
import 'package:get_it/get_it.dart';
import 'injection.config.dart';

// 1. Setup file (injection.dart)
final getIt = GetIt.instance;

@InjectableInit()
Future<void> configureDependencies() async => getIt.init();

// 2. Domain layer - abstract repository
abstract class AuthRepository {
  Future<User> login(String email, String password);
  Future<void> logout();
}

// 3. Data layer - concrete implementation
@LazySingleton(as: AuthRepository)
class AuthRepositoryImpl implements AuthRepository {
  final ApiService _api;
  final TokenStorage _tokenStorage;

  AuthRepositoryImpl(this._api, this._tokenStorage);

  @override
  Future<User> login(String email, String password) async {
    final response = await _api.post('/auth/login', data: {
      'email': email,
      'password': password,
    });
    await _tokenStorage.saveTokens(response['tokens']);
    return User.fromJson(response['user']);
  }

  @override
  Future<void> logout() async {
    await _tokenStorage.clearTokens();
  }
}

// 4. Use case - auto-registered as factory
@injectable
class LoginUseCase {
  final AuthRepository _repo;
  LoginUseCase(this._repo);

  Future<User> call(String email, String password) =>
      _repo.login(email, password);
}

// 5. Third-party module
@module
abstract class RegisterModule {
  @singleton
  Dio get dio => Dio(BaseOptions(
    baseUrl: 'https://api.example.com',
    connectTimeout: Duration(seconds: 15),
  ));
}`,funFact:"The injectable package was inspired by Angular's dependency injection system. The creator, Milad Akarie, wanted to bring the same auto-wiring magic to Flutter. It now has over 2000 GitHub stars and is one of the most popular DI solutions in the Flutter ecosystem!",quiz:[{q:"What does the @injectable annotation do?",opts:["Makes a class abstract","Registers the class as a factory in GetIt via code generation","Makes the class immutable","Adds logging to the class"],ans:1},{q:"What is the difference between @singleton and @lazySingleton?",opts:["@singleton is for testing only","@singleton creates the instance at init time, @lazySingleton creates it on first request","@lazySingleton creates multiple instances","There is no difference"],ans:1},{q:"How do you register third-party classes like Dio with injectable?",opts:["Annotate Dio source code directly","Use a @module abstract class with getter methods","You cannot use injectable for third-party classes","Use @thirdParty annotation"],ans:1},{q:"What command generates the injection config file?",opts:["flutter build inject","dart run build_runner build","flutter pub get","dart compile inject"],ans:1},{q:"What does @preResolve do?",opts:["Makes dependencies resolve faster","Marks async dependencies that must be awaited during initialization","Pre-caches all dependencies","Resolves circular dependencies"],ans:1}],challenge:"Create a simple injectable setup: define an abstract UserRepository, implement it with @LazySingleton(as: UserRepository), create a @injectable GetUsersUseCase that depends on it, and a @module for Dio. Run build_runner and check the generated .config.dart file.",resources:[{type:"docs",title:"injectable Package",url:"https://pub.dev/packages/injectable",source:"pub.dev"},{type:"docs",title:"GetIt Package",url:"https://pub.dev/packages/get_it",source:"pub.dev"},{type:"docs",title:"build_runner Documentation",url:"https://pub.dev/packages/build_runner",source:"pub.dev"}],eli5:"Imagine you have a huge LEGO set with 200 pieces. Instead of reading the manual to figure out which piece connects where, you put a tiny label on each piece that says 'I connect to the blue piece' and a robot reads all the labels and snaps everything together for you. That is what injectable does -- it reads your labels (annotations) and connects all your code pieces automatically!",codeWalkthrough:["Import the injectable package for annotations","Import GetIt for the service locator","Import the generated config file that contains all registrations","","Comment: The setup file that initializes everything","Create a global GetIt instance that the whole app shares","","The @InjectableInit annotation tells code gen to generate init() here","configureDependencies calls the generated init method on our GetIt instance","","Comment: Domain layer defines WHAT we need (abstract contract)","Abstract class AuthRepository -- no implementation details","A login method signature -- takes email and password, returns a User","A logout method signature -- clears the session","Closing the abstract class","","Comment: Data layer defines HOW we do it (concrete implementation)","@LazySingleton(as: AuthRepository) registers this as the AuthRepository implementation","AuthRepositoryImpl class implements the AuthRepository interface","Private field for the API service (injected by GetIt)","Private field for token storage (injected by GetIt)","","Constructor receives both dependencies -- GetIt resolves them automatically","","@override marks this as implementing the abstract login method","Login method makes an API call with email and password","Sends a POST request to /auth/login with credentials","Closing the request data map","Saves the tokens from the response to secure storage","Parses and returns the User from the response JSON","Closing the login method","","@override marks this as implementing the abstract logout method","Logout method clears stored tokens","Closing the logout method","Closing AuthRepositoryImpl","","Comment: Use case layer -- gets a fresh instance each time (factory)","@injectable registers LoginUseCase as a factory","LoginUseCase depends on AuthRepository (resolved by GetIt)","Constructor receives the repository","","The call method delegates to the repository login","Closing LoginUseCase","","Comment: Module for third-party dependencies","@module tells injectable this class provides external dependencies","Abstract class RegisterModule","@singleton means one Dio instance for the whole app","Creates Dio with base URL and timeout configuration","Closing the BaseOptions and Dio constructor","Closing RegisterModule"],bugChallenge:{code:"@LazySingleton(as: AuthRepository)\nclass AuthRepositoryImpl {\n  final ApiService _api;\n  AuthRepositoryImpl(this._api);\n\n  Future<User> login(String email, String password) async {\n    return _api.post('/auth/login');\n  }\n}",hint:"The class is registered as AuthRepository but look at what it actually declares...",answer:"AuthRepositoryImpl is registered as: AuthRepository but does not implement it. Add 'implements AuthRepository' to the class declaration: 'class AuthRepositoryImpl implements AuthRepository'. Without this, the code generator will throw an error because the type does not match."},difficulty:"advanced",prereqs:[40]},
{id:42,title:"REST APIs & CRUD",subtitle:"Create, Read, Update & Delete with HTTP",analogy:"Imagine ordering food at a restaurant. You (the client app) look at the menu (API documentation), tell the waiter (HTTP) your order using specific words like 'I would like the pasta' (GET request). The kitchen (server) prepares it and the waiter brings back your plate (response) with a receipt number (status code). 200 means 'here is your food!' and 404 means 'sorry, we do not have that dish.'",points:[{t:"What is a REST API?",d:"REST stands for REpresentational State Transfer. It is a set of rules for how apps talk to servers over the internet using HTTP. Each URL represents a resource (like /users or /posts), and you use standard HTTP methods to interact with those resources. REST APIs are stateless -- each request contains all the info the server needs.",code:"// REST API examples:\n// GET    https://api.example.com/users       -> List all users\n// GET    https://api.example.com/users/42     -> Get user 42\n// POST   https://api.example.com/users        -> Create new user\n// PUT    https://api.example.com/users/42     -> Update user 42\n// DELETE https://api.example.com/users/42     -> Delete user 42"},{t:"HTTP Methods (Verbs)",d:"GET retrieves data without changing anything. POST creates new data. PUT replaces existing data completely. PATCH updates part of existing data. DELETE removes data. These five verbs cover almost every API operation you will ever need.",code:"// GET - Read data (safe, no side effects)\nGET /api/users\n\n// POST - Create data (sends a body)\nPOST /api/users\n// Body: { \"name\": \"Alice\", \"email\": \"alice@mail.com\" }\n\n// PUT - Replace data entirely\nPUT /api/users/42\n// Body: { \"name\": \"Updated\", \"email\": \"new@mail.com\" }\n\n// DELETE - Remove data\nDELETE /api/users/42"},{t:"HTTP Status Codes",d:"Every response includes a status code. 200 means OK. 201 means Created. 400 means Bad Request. 401 means Unauthorized. 403 means Forbidden. 404 means Not Found. 500 means Server Error. The first digit tells the category: 2xx success, 4xx client error, 5xx server error.",code:"// 2xx - Success\n// 200 OK             - Request succeeded\n// 201 Created        - New resource created\n// 204 No Content     - Success, nothing to return\n\n// 4xx - Client errors (YOUR fault)\n// 400 Bad Request    - Invalid data sent\n// 401 Unauthorized   - Not authenticated\n// 403 Forbidden      - No permission\n// 404 Not Found      - Resource does not exist\n\n// 5xx - Server errors (THEIR fault)\n// 500 Internal Error - Server crashed"},{t:"Request and Response Structure",d:"An HTTP request has a method, URL, headers (metadata like auth tokens and content type), and optionally a body (data you are sending). The response has a status code, headers, and a body (usually JSON data).",code:"// REQUEST:\n// Method: POST\n// URL: https://api.example.com/auth/login\n// Headers:\n//   Content-Type: application/json\n//   Accept: application/json\n// Body:\n//   { \"email\": \"user@mail.com\", \"password\": \"secret\" }\n\n// RESPONSE:\n// Status: 200 OK\n// Headers:\n//   Content-Type: application/json\n// Body:\n//   { \"user\": { \"id\": 1 }, \"token\": \"eyJhb...\" }"},{t:"JSON - The Language of APIs",d:"JSON (JavaScript Object Notation) is the standard data format for REST APIs. It uses key-value pairs with strings, numbers, booleans, arrays, and nested objects. Both your app and the server understand JSON, making it the universal language for data exchange over HTTP.",code:"// JSON response from GET /api/users/42\n{\n  \"id\": 42,\n  \"name\": \"Alice\",\n  \"email\": \"alice@example.com\",\n  \"isActive\": true,\n  \"roles\": [\"user\", \"admin\"],\n  \"profile\": {\n    \"avatar\": \"https://img.example.com/alice.png\",\n    \"bio\": \"Flutter developer\"\n  }\n}"},{t:"Headers and Authentication",d:"Headers carry metadata about the request. Content-Type tells the server your body format. Authorization carries your login token. Accept tells the server what format you want back. The team_mvp_kit sends a Bearer token in the Authorization header for every authenticated request.",code:"// Common headers:\n// Content-Type: application/json   -> I am sending JSON\n// Accept: application/json         -> I want JSON back\n// Authorization: Bearer eyJhb...   -> Here is my login token\n\nimport 'package:http/http.dart' as http;\n\nfinal response = await http.get(\n  Uri.parse('https://api.example.com/users'),\n  headers: {\n    'Authorization': 'Bearer $token',\n    'Content-Type': 'application/json',\n  },\n);"},{t:"Query and Path Parameters",d:"Path parameters identify a specific resource: /users/42 where 42 is the user ID. Query parameters filter or modify results: /users?role=admin&page=2. Path params answer 'which one?' and query params answer 'how should I filter it?'",code:"// Path parameters - identify a specific resource\n// GET /users/42           -> User with id 42\n// GET /posts/99/comments  -> Comments on post 99\n\n// Query parameters - filter, sort, paginate\n// GET /users?role=admin         -> Only admin users\n// GET /users?page=2&limit=10   -> Page 2, 10 per page\n\n// In Dart:\nfinal uri = Uri.parse('https://api.example.com/users')\n    .replace(queryParameters: {\n  'role': 'admin',\n  'page': '2',\n});"},{t:"The Request-Response Cycle",d:"Your app sends a request, it travels through the internet to the server, the server processes it (checks auth, queries database, builds response), and sends back a response. This cycle typically takes 50-500ms. Show loading indicators during this time and handle errors gracefully.",code:"import 'dart:convert';\nimport 'package:http/http.dart' as http;\n\nFuture<User> fetchUser(int id) async {\n  // 1. Send request\n  final response = await http.get(\n    Uri.parse('https://api.example.com/users/$id'),\n    headers: {'Authorization': 'Bearer $token'},\n  );\n\n  // 2. Check status code\n  if (response.statusCode == 200) {\n    // 3. Parse JSON response\n    final json = jsonDecode(response.body);\n    return User.fromJson(json);\n  } else {\n    throw Exception('Failed: ${response.statusCode}');\n  }\n}"}],whatIs:"REST APIs are a standardized way for your Flutter app to communicate with a backend server over HTTP. You send requests using methods like GET, POST, PUT, DELETE to specific URLs, and the server responds with status codes and JSON data. Every modern app uses REST APIs to fetch data, authenticate users, and sync information.",realWorld:"Every app you use daily relies on REST APIs. When you open Instagram, a GET request fetches your feed. When you post a photo, a POST request uploads it. When you like something, a PATCH request updates it. The team_mvp_kit project communicates with its backend entirely through REST APIs for authentication, user data, and all business operations.",code:`import 'dart:convert';
import 'package:http/http.dart' as http;

// A complete REST API example in Dart

// 1. GET - Fetch a list of users
Future<List<User>> getUsers(String accessToken) async {
  final response = await http.get(
    Uri.parse('https://api.example.com/users'),
    headers: {
      'Authorization': 'Bearer \$accessToken',
      'Content-Type': 'application/json',
    },
  );

  if (response.statusCode == 200) {
    final List<dynamic> data = jsonDecode(response.body);
    return data.map((json) => User.fromJson(json)).toList();
  }
  throw Exception('Failed: \${response.statusCode}');
}

// 2. POST - Create a new user
Future<User> createUser(String name, String email) async {
  final response = await http.post(
    Uri.parse('https://api.example.com/users'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({
      'name': name,
      'email': email,
    }),
  );

  if (response.statusCode == 201) {
    return User.fromJson(jsonDecode(response.body));
  }
  throw Exception('Create failed: \${response.statusCode}');
}

// 3. DELETE - Remove a user
Future<void> deleteUser(int id, String accessToken) async {
  final response = await http.delete(
    Uri.parse('https://api.example.com/users/\$id'),
    headers: {'Authorization': 'Bearer \$accessToken'},
  );

  if (response.statusCode != 204) {
    throw Exception('Delete failed: \${response.statusCode}');
  }
}`,funFact:"The term REST was coined by Roy Fielding in his PhD dissertation in 2000. He was one of the principal authors of the HTTP specification itself. So the guy who helped create HTTP also defined the best way to use it!",quiz:[{q:"What HTTP method should you use to create a new resource?",opts:["GET","POST","DELETE","OPTIONS"],ans:1},{q:"What does HTTP status code 401 mean?",opts:["Success","Not Found","Unauthorized - not logged in","Server Error"],ans:2},{q:"What format do most REST APIs use for data?",opts:["XML","CSV","JSON","HTML"],ans:2},{q:"What is the difference between path parameters and query parameters?",opts:["Path params filter results, query params identify resources","Path params identify specific resources, query params filter results","They are the same thing","Path params are only for DELETE requests"],ans:1},{q:"What does stateless mean in REST?",opts:["The server has no database","Each request contains all info needed; the server remembers nothing between requests","The app has no state management","Responses have no status codes"],ans:1}],challenge:"Using Dart's http package, write a function that GETs a list of posts from https://jsonplaceholder.typicode.com/posts, parses the JSON response, and prints the title of each post. Handle the case where the status code is not 200.",resources:[{type:"docs",title:"HTTP package for Dart",url:"https://pub.dev/packages/http",source:"pub.dev"},{type:"docs",title:"REST API Tutorial",url:"https://restfulapi.net/",source:"restfulapi.net"},{type:"article",title:"HTTP Status Codes Reference",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",source:"MDN Web Docs"}],eli5:"Think of a REST API like a library. You go to the front desk (the server) and say 'Can I GET the book about dinosaurs?' (GET request). The librarian checks if you have a library card (authentication), finds the book (queries the database), and hands it to you with a little note saying 'Here you go, found it!' (200 OK response). If the book does not exist, the note says 'Sorry, not found' (404). If you want to donate a new book, you POST it to the library.",codeWalkthrough:["Import dart:convert for JSON encoding and decoding","Import the http package for making HTTP requests","","Comment: A complete REST API example in Dart","","Comment: GET request to fetch users","Define an async function that returns a list of Users","Send a GET request to the /users endpoint","Passing the full URL to Uri.parse","Opening the headers map","Authorization header with Bearer token for authentication","Content-Type header telling the server we speak JSON","Closing the headers and the get() call","","Check if the response status code is 200 (success)","Decode the JSON body into a List of dynamic maps","Map each JSON object to a User using fromJson and return the list","Closing the success check","Throw an exception if the status code was not 200","Closing the getUsers function","","Comment: POST request to create a new user","Define an async function that takes name and email, returns a User","Send a POST request to the /users endpoint","Passing the URL","Content-Type header for JSON","Encode the name and email as a JSON body string","Closing the jsonEncode map","Closing the post() call","","Check for 201 Created status code","Parse and return the created User from the response","Closing the success check","Throw if creation failed","Closing the createUser function","","Comment: DELETE request to remove a user","Define an async function that takes a user ID","Send a DELETE request with the user ID in the URL path","Passing the URL with the ID as path parameter","Authorization header for delete permission","Closing the delete() call","","Check if status code is NOT 204 No Content","Throw if delete failed","Closing the deleteUser function"],bugChallenge:{code:"Future<User> getUser(int id) async {\n  final response = await http.get(\n    'https://api.example.com/users/$id',\n    headers: {'Content-Type': 'application/json'},\n  );\n  return User.fromJson(jsonDecode(response.body));\n}",hint:"Look at what http.get expects as its first parameter, and what happens if the request fails...",answer:"Two bugs: 1) http.get expects a Uri object, not a raw String. Wrap it with Uri.parse(). 2) There is no status code check -- if the server returns 404 or 500, the code tries to parse an error response as a User and will crash. Add 'if (response.statusCode == 200)' before parsing."},difficulty:"intermediate",prereqs:[15]},
{id:43,title:"Dio HTTP Client",subtitle:"Professional Networking for Flutter",analogy:"If the basic http package is like sending letters by regular mail, Dio is like having a personal assistant who handles all your mail. Your assistant (Dio) adds your return address to every letter (base URL), stamps them all (auth headers via interceptors), keeps copies (logging), retries if the mailman loses one (retry interceptor), and even opens the replies for you (response transformation)!",points:[{t:"Why Dio Over http Package?",d:"Dio is a powerful HTTP client for Dart that goes beyond the basic http package. It supports interceptors (middleware for every request), request cancellation, file uploading with progress, timeout configuration, and automatic JSON transformation. The team_mvp_kit uses Dio as its core networking layer.",code:"// Basic http package - limited:\nfinal response = await http.get(Uri.parse(url));\n\n// Dio - full-featured:\nfinal dio = Dio();\nfinal response = await dio.get('/users');\n// + Interceptors, timeouts, cancellation, retries..."},{t:"Dio Setup and BaseOptions",d:"Configure Dio once with BaseOptions that apply to every request: base URL, timeouts, default headers, and content type. In team_mvp_kit, the Dio instance is created in a @module and shared across all services via dependency injection.",code:"import 'package:dio/dio.dart';\n\nfinal dio = Dio(BaseOptions(\n  baseUrl: 'https://api.example.com/v1',\n  connectTimeout: const Duration(seconds: 15),\n  receiveTimeout: const Duration(seconds: 15),\n  sendTimeout: const Duration(seconds: 15),\n  headers: {\n    'Content-Type': 'application/json',\n    'Accept': 'application/json',\n  },\n));"},{t:"Making Requests with Dio",d:"Dio provides methods for all HTTP verbs: get(), post(), put(), patch(), delete(). Pass path strings (not full URLs) because the baseUrl is prepended automatically. Post data as Maps and Dio serializes them to JSON for you.",code:"// GET request\nfinal response = await dio.get('/users');\nfinal users = response.data; // already parsed!\n\n// GET with query parameters\nfinal resp = await dio.get('/users', queryParameters: {\n  'page': 1,\n  'limit': 20,\n});\n\n// POST request with body\nfinal resp2 = await dio.post('/users', data: {\n  'name': 'Alice',\n  'email': 'alice@example.com',\n});\n\n// DELETE request\nawait dio.delete('/users/42');"},{t:"Interceptors - Middleware for HTTP",d:"Interceptors run code before every request, after every response, and on every error. Add auth tokens automatically, log requests for debugging, or retry failed requests. team_mvp_kit uses interceptors for token injection, token refresh, and logging.",code:"dio.interceptors.add(InterceptorsWrapper(\n  onRequest: (options, handler) {\n    // Runs BEFORE every request\n    final token = tokenStorage.accessToken;\n    if (token != null) {\n      options.headers['Authorization'] = 'Bearer $token';\n    }\n    handler.next(options);\n  },\n  onResponse: (response, handler) {\n    // Runs AFTER every successful response\n    debugPrint('Status: ${response.statusCode}');\n    handler.next(response);\n  },\n  onError: (error, handler) {\n    // Runs on every error\n    debugPrint('Error: ${error.message}');\n    handler.next(error);\n  },\n));"},{t:"Auth Interceptor Pattern",d:"The most important interceptor in team_mvp_kit automatically attaches the access token to every request. If a request fails with 401 (Unauthorized), it refreshes the token and retries. This gives seamless auth without manual token management in every API call.",code:"class AuthInterceptor extends Interceptor {\n  final TokenStorage _tokenStorage;\n  final Dio _dio;\n\n  AuthInterceptor(this._tokenStorage, this._dio);\n\n  @override\n  void onRequest(RequestOptions options, RequestInterceptorHandler handler) {\n    final token = _tokenStorage.accessToken;\n    if (token != null) {\n      options.headers['Authorization'] = 'Bearer $token';\n    }\n    handler.next(options);\n  }\n\n  @override\n  void onError(DioException err, ErrorInterceptorHandler handler) async {\n    if (err.response?.statusCode == 401) {\n      final refreshed = await _tokenStorage.refreshTokens();\n      if (refreshed) {\n        final retry = await _dio.fetch(err.requestOptions);\n        return handler.resolve(retry);\n      }\n    }\n    handler.next(err);\n  }\n}"},{t:"Error Handling with DioException",d:"Dio wraps all errors in DioException with specific types: connectionTimeout, receiveTimeout, badResponse (4xx/5xx), connectionError (no internet), cancel (request cancelled). Handle each type to show appropriate messages to users.",code:"try {\n  final response = await dio.get('/users');\n  return response.data;\n} on DioException catch (e) {\n  switch (e.type) {\n    case DioExceptionType.connectionTimeout:\n    case DioExceptionType.receiveTimeout:\n      throw NetworkException('Connection timed out');\n    case DioExceptionType.badResponse:\n      final code = e.response?.statusCode;\n      if (code == 404) throw NotFoundException();\n      if (code == 401) throw UnauthorizedException();\n      throw ServerException('Server error: $code');\n    case DioExceptionType.connectionError:\n      throw NetworkException('No internet connection');\n    default:\n      throw NetworkException('Unknown network error');\n  }\n}"},{t:"Logging Interceptor",d:"Add a LogInterceptor during development to see every request and response in the console. Invaluable for debugging API issues. Disable it in production to avoid leaking sensitive data.",code:"dio.interceptors.add(LogInterceptor(\n  requestHeader: true,\n  requestBody: true,\n  responseHeader: false,\n  responseBody: true,\n  error: true,\n  logPrint: (msg) => debugPrint(msg.toString()),\n));\n\n// Console output:\n// --> GET https://api.example.com/v1/users\n// --> Headers: Authorization: Bearer eyJhb...\n// <-- 200 OK (145ms)\n// <-- {\"users\": [{\"id\": 1, \"name\": \"Alice\"}]}"},{t:"The ApiService in team_mvp_kit",d:"team_mvp_kit wraps Dio in an ApiService class that provides typed methods like get, post, put, and delete. This centralized service adds the auth interceptor, logging, and error mapping so repositories never deal with raw Dio.",code:"@lazySingleton\nclass ApiService {\n  final Dio _dio;\n  ApiService(this._dio);\n\n  Future<Map<String, dynamic>> get(\n    String path, {\n    Map<String, dynamic>? queryParams,\n  }) async {\n    final response = await _dio.get(\n      path, queryParameters: queryParams,\n    );\n    return response.data as Map<String, dynamic>;\n  }\n\n  Future<Map<String, dynamic>> post(\n    String path, {\n    dynamic data,\n  }) async {\n    final response = await _dio.post(path, data: data);\n    return response.data as Map<String, dynamic>;\n  }\n}"},{t:"Request Cancellation",d:"Use CancelToken to abort requests that are no longer needed, like when a user navigates away before data finishes loading. This prevents wasted bandwidth and avoids updating state on a disposed widget.",code:"final cancelToken = CancelToken();\n\ntry {\n  final response = await dio.get(\n    '/users',\n    cancelToken: cancelToken,\n  );\n} on DioException catch (e) {\n  if (e.type == DioExceptionType.cancel) {\n    print('Request was cancelled');\n  }\n}\n\n// Cancel from anywhere (e.g., in dispose())\ncancelToken.cancel('User left the screen');"}],whatIs:"Dio is a powerful HTTP client for Dart used as the networking layer in team_mvp_kit. It provides interceptors for automatic token injection and refresh, configurable timeouts, request cancellation, detailed error typing, logging, and a clean API for all HTTP methods. Every request flows through a middleware pipeline of interceptors.",realWorld:"In team_mvp_kit, Dio is configured once in the DI module with base URL, timeouts, and interceptors. The AuthInterceptor attaches tokens and refreshes expired ones. The ApiService wraps Dio with typed methods so repositories never touch raw HTTP. Every API call flows through: Dio -> AuthInterceptor -> LogInterceptor -> Server -> Response.",code:`import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';

// 1. Dio Module - configured once, injected everywhere
@module
abstract class NetworkModule {
  @singleton
  Dio dio(TokenStorage tokenStorage) {
    final dio = Dio(BaseOptions(
      baseUrl: 'https://api.example.com/v1',
      connectTimeout: const Duration(seconds: 15),
      receiveTimeout: const Duration(seconds: 15),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    ));

    dio.interceptors.addAll([
      AuthInterceptor(tokenStorage, dio),
      LogInterceptor(
        requestBody: true,
        responseBody: true,
        logPrint: (msg) => debugPrint(msg.toString()),
      ),
    ]);

    return dio;
  }
}

// 2. Auth Interceptor - auto-attaches and refreshes tokens
class AuthInterceptor extends Interceptor {
  final TokenStorage _tokenStorage;
  final Dio _dio;

  AuthInterceptor(this._tokenStorage, this._dio);

  @override
  void onRequest(
    RequestOptions options,
    RequestInterceptorHandler handler,
  ) {
    final token = _tokenStorage.accessToken;
    if (token != null) {
      options.headers['Authorization'] = 'Bearer \$token';
    }
    handler.next(options);
  }

  @override
  void onError(
    DioException error,
    ErrorInterceptorHandler handler,
  ) async {
    if (error.response?.statusCode == 401) {
      final refreshed = await _tokenStorage.refreshTokens();
      if (refreshed) {
        error.requestOptions.headers['Authorization'] =
            'Bearer \${_tokenStorage.accessToken}';
        final response = await _dio.fetch(error.requestOptions);
        return handler.resolve(response);
      }
    }
    handler.next(error);
  }
}

// 3. ApiService - typed wrapper used by repositories
@lazySingleton
class ApiService {
  final Dio _dio;
  ApiService(this._dio);

  Future<Map<String, dynamic>> get(
    String path, {
    Map<String, dynamic>? queryParams,
  }) async {
    final response = await _dio.get(
      path, queryParameters: queryParams,
    );
    return response.data as Map<String, dynamic>;
  }

  Future<Map<String, dynamic>> post(
    String path, {
    Map<String, dynamic>? data,
  }) async {
    final response = await _dio.post(path, data: data);
    return response.data as Map<String, dynamic>;
  }
}`,funFact:"Dio is the most popular HTTP package in the Flutter ecosystem with over 12,000 GitHub stars. The name comes from the Italian word for 'God' -- fitting because it handles networking with seemingly divine power compared to the basic http package!",quiz:[{q:"What is the main advantage of Dio over the basic http package?",opts:["Dio is faster at downloading","Dio supports interceptors, cancellation, timeouts, and auto JSON parsing","Dio works without internet","Dio is built into Flutter SDK"],ans:1},{q:"What does an interceptor's onRequest callback do?",opts:["Runs after the response arrives","Runs before every request is sent, perfect for adding auth tokens","Runs only when there is an error","Runs once when the app starts"],ans:1},{q:"What DioException type indicates no internet connection?",opts:["DioExceptionType.badResponse","DioExceptionType.cancel","DioExceptionType.connectionError","DioExceptionType.receiveTimeout"],ans:2},{q:"How does team_mvp_kit handle expired access tokens?",opts:["Forces the user to log in again every time","AuthInterceptor catches 401, refreshes the token, and retries automatically","Ignores expired tokens","Stores tokens forever"],ans:1},{q:"What is the purpose of CancelToken in Dio?",opts:["To cancel the entire app","To abort in-progress HTTP requests that are no longer needed","To cancel interceptors","To disable timeouts"],ans:1}],challenge:"Create a Dio instance with BaseOptions (base URL, 10-second timeout). Add an InterceptorsWrapper that logs every request URL and every response status code. Make a GET request to https://jsonplaceholder.typicode.com/posts/1 and print the title from the response.",resources:[{type:"docs",title:"Dio Package",url:"https://pub.dev/packages/dio",source:"pub.dev"},{type:"docs",title:"Dio GitHub Repository",url:"https://github.com/cfug/dio",source:"GitHub"},{type:"article",title:"Flutter Networking with Dio",url:"https://docs.flutter.dev/cookbook/networking/fetch-data",source:"Flutter Official"}],eli5:"Imagine you send lots of letters to different people. With regular mail, you write your address, stick a stamp, and seal every single letter yourself. Dio is like hiring a postal assistant who does all that automatically. You just say 'send this to Bob' and the assistant adds your address, stamps it, logs it, and if the letter gets lost, sends it again without you even knowing!",codeWalkthrough:["Import the Dio package","Import injectable for dependency injection annotations","","Comment: Dio is configured once in a module","@module annotation for registering third-party classes","Abstract class for the network module definition","@singleton ensures one Dio instance for the whole app","Method that creates and configures Dio, receiving TokenStorage","Create a new Dio instance with BaseOptions","Set the base URL that is prepended to all request paths","Set connection timeout to 15 seconds","Set receive timeout to 15 seconds","Opening default headers map","All requests send JSON content type","All requests accept JSON responses","Closing headers and BaseOptions","","Add both interceptors to Dio's pipeline","AuthInterceptor handles token injection and refresh","LogInterceptor prints requests and responses for debugging","Closing the addAll call","","Return the fully configured Dio instance","Closing the dio method and NetworkModule","","Comment: AuthInterceptor handles authentication automatically","Class extending Dio's Interceptor base class","Private field for token storage","Private field for Dio (needed for retry requests)","","Constructor receives both dependencies","","Override onRequest which runs before every outgoing request","Method signature with RequestOptions and handler","Get the current access token from storage","If we have a token, add it to the Authorization header","Setting the Bearer token header value","Closing the if block","Continue to the next interceptor or send the request","Closing onRequest","","Override onError which runs on every failed response","Method signature with DioException and handler","Check if the error was a 401 Unauthorized response","Try to refresh the expired token via token storage","If refresh succeeded, update the header on the original request","Set the new token value","Retry the original request using Dio fetch","Return the successful retry response to the caller","Closing the refresh success and 401 check blocks","If not 401 or refresh failed, pass the error along","Closing onError and AuthInterceptor class","","Comment: ApiService is the typed wrapper used by repositories","@lazySingleton means one instance, created on first use","ApiService class declaration","Private Dio field for making requests","Constructor receives Dio via injection","","GET method returns a parsed JSON map","Takes a path and optional query parameters","Send GET request via Dio with query parameters","Closing the get call","Cast and return response data as Map","Closing get method","","POST method returns a parsed JSON map","Takes a path and optional data body","Send POST request via Dio with data","Cast and return response data as Map","Closing post method and ApiService class"],bugChallenge:{code:"final dio = Dio(BaseOptions(\n  baseUrl: 'https://api.example.com',\n));\n\nfinal response = await dio.get('https://api.example.com/users');\nprint(response.data);",hint:"Look at the URL being passed to dio.get when a baseUrl is already configured...",answer:"When baseUrl is set, dio.get() expects a relative path like '/users', not the full URL. Passing the full URL causes Dio to use it as-is, making baseUrl pointless. Worse, if the domains differ you hit the wrong server. Fix: change to dio.get('/users')."},difficulty:"intermediate",prereqs:[42]},
{id:44,title:"JSON Models & Serialization",subtitle:"Turning JSON into Dart Objects",analogy:"Imagine you receive a letter written in French (JSON from the server). You cannot use it directly in your English (Dart) conversation. You need a translator -- fromJson translates French to English (JSON to Dart object), and toJson translates English back to French (Dart object to JSON). json_serializable is like hiring a professional translation agency that handles everything automatically!",points:[{t:"What is Serialization?",d:"Serialization is converting a Dart object into JSON (a Map or String) so it can be sent over the network or saved to storage. Deserialization is the reverse -- converting JSON back into a Dart object. Together they are the bridge between your app's typed Dart world and the untyped JSON world of APIs.",code:"// Dart object -> JSON (serialization / toJson)\n// User(name: 'Alice', age: 25)\n// becomes: {\"name\": \"Alice\", \"age\": 25}\n\n// JSON -> Dart object (deserialization / fromJson)\n// {\"name\": \"Alice\", \"age\": 25}\n// becomes: User(name: 'Alice', age: 25)"},{t:"Manual fromJson and toJson",d:"The simplest approach is writing factory fromJson constructors and toJson methods by hand. fromJson takes a Map and extracts fields. toJson returns a Map with string keys. This works but is tedious and error-prone for large models.",code:"class User {\n  final int id;\n  final String name;\n  final String email;\n\n  User({required this.id, required this.name, required this.email});\n\n  // JSON -> Dart\n  factory User.fromJson(Map<String, dynamic> json) {\n    return User(\n      id: json['id'] as int,\n      name: json['name'] as String,\n      email: json['email'] as String,\n    );\n  }\n\n  // Dart -> JSON\n  Map<String, dynamic> toJson() {\n    return {\n      'id': id,\n      'name': name,\n      'email': email,\n    };\n  }\n}"},{t:"json_serializable Package",d:"json_serializable generates fromJson and toJson code automatically using build_runner. Annotate your class with @JsonSerializable() and add the part directive. Run build_runner and the .g.dart file is generated with all the mapping code. This eliminates manual errors and saves time.",code:"import 'package:json_annotation/json_annotation.dart';\n\npart 'user_dto.g.dart';\n\n@JsonSerializable()\nclass UserDto {\n  final int id;\n  final String name;\n  final String email;\n\n  UserDto({required this.id, required this.name, required this.email});\n\n  factory UserDto.fromJson(Map<String, dynamic> json) =>\n      _$UserDtoFromJson(json);\n\n  Map<String, dynamic> toJson() => _$UserDtoToJson(this);\n}"},{t:"@JsonKey for Field Customization",d:"Use @JsonKey to customize how individual fields are serialized. Rename fields when the API uses snake_case but your Dart code uses camelCase. Set default values, mark fields as nullable, or ignore them entirely during serialization.",code:"@JsonSerializable()\nclass UserDto {\n  final int id;\n\n  @JsonKey(name: 'first_name')\n  final String firstName;\n\n  @JsonKey(name: 'created_at')\n  final DateTime createdAt;\n\n  @JsonKey(defaultValue: false)\n  final bool isVerified;\n\n  @JsonKey(includeToJson: false)\n  final String? internalNote;\n\n  UserDto({\n    required this.id,\n    required this.firstName,\n    required this.createdAt,\n    this.isVerified = false,\n    this.internalNote,\n  });\n\n  factory UserDto.fromJson(Map<String, dynamic> json) =>\n      _$UserDtoFromJson(json);\n  Map<String, dynamic> toJson() => _$UserDtoToJson(this);\n}"},{t:"Nested Objects and Lists",d:"json_serializable handles nested objects and lists of objects automatically. If UserDto has a ProfileDto field or a List of AddressDto, the generated code calls their fromJson/toJson too. Just make sure all nested classes also have @JsonSerializable.",code:"@JsonSerializable()\nclass UserDto {\n  final int id;\n  final String name;\n  final ProfileDto profile;\n  final List<AddressDto> addresses;\n\n  UserDto({\n    required this.id,\n    required this.name,\n    required this.profile,\n    required this.addresses,\n  });\n\n  factory UserDto.fromJson(Map<String, dynamic> json) =>\n      _$UserDtoFromJson(json);\n  Map<String, dynamic> toJson() => _$UserDtoToJson(this);\n}\n\n@JsonSerializable()\nclass ProfileDto {\n  final String avatar;\n  final String bio;\n\n  ProfileDto({required this.avatar, required this.bio});\n\n  factory ProfileDto.fromJson(Map<String, dynamic> json) =>\n      _$ProfileDtoFromJson(json);\n  Map<String, dynamic> toJson() => _$ProfileDtoToJson(this);\n}"},{t:"DTOs vs Domain Entities",d:"In team_mvp_kit's Clean Architecture, DTOs (Data Transfer Objects) live in the data layer and handle JSON serialization. Domain entities live in the domain layer and have NO serialization logic. The repository maps DTOs to entities, keeping your domain pure and independent of the API format.",code:"// Data layer: UserDto (knows about JSON)\n@JsonSerializable()\nclass UserDto {\n  final int id;\n  @JsonKey(name: 'full_name')\n  final String fullName;\n\n  UserDto({required this.id, required this.fullName});\n  factory UserDto.fromJson(Map<String, dynamic> json) =>\n      _$UserDtoFromJson(json);\n}\n\n// Domain layer: User entity (pure Dart, no JSON)\nclass User {\n  final int id;\n  final String name;\n  User({required this.id, required this.name});\n}\n\n// Repository maps DTO -> Entity\nUser _toEntity(UserDto dto) => User(id: dto.id, name: dto.fullName);"},{t:"Using DTOs in Repositories",d:"The repository calls the API, receives raw JSON, deserializes it to a DTO using fromJson, then maps the DTO to a domain entity. This three-step pattern (API call -> DTO -> Entity) is used throughout team_mvp_kit for every data operation.",code:"@LazySingleton(as: UserRepository)\nclass UserRepositoryImpl implements UserRepository {\n  final ApiService _api;\n  UserRepositoryImpl(this._api);\n\n  @override\n  Future<User> getUser(int id) async {\n    final json = await _api.get('/users/$id');\n    final dto = UserDto.fromJson(json);\n    return User(id: dto.id, name: dto.fullName);\n  }\n\n  @override\n  Future<List<User>> getUsers() async {\n    final json = await _api.get('/users');\n    final list = (json['data'] as List)\n        .map((e) => UserDto.fromJson(e))\n        .map((dto) => User(id: dto.id, name: dto.fullName))\n        .toList();\n    return list;\n  }\n}"},{t:"Enum Serialization",d:"json_serializable can serialize enums to and from strings. Use @JsonEnum with valueField to control how enum values map to JSON strings. This is common for status fields, user roles, and any field with a fixed set of values.",code:"@JsonEnum(valueField: 'value')\nenum UserRole {\n  admin('admin'),\n  member('member'),\n  guest('guest');\n\n  final String value;\n  const UserRole(this.value);\n}\n\n@JsonSerializable()\nclass UserDto {\n  final int id;\n  final String name;\n  final UserRole role;\n\n  UserDto({required this.id, required this.name, required this.role});\n\n  factory UserDto.fromJson(Map<String, dynamic> json) =>\n      _$UserDtoFromJson(json);\n  Map<String, dynamic> toJson() => _$UserDtoToJson(this);\n}\n// JSON: {\"id\": 1, \"name\": \"Alice\", \"role\": \"admin\"}"},{t:"Running Code Generation",d:"After creating or modifying any @JsonSerializable class, run build_runner to generate the .g.dart files. Use --delete-conflicting-outputs to clean up stale files. Use watch mode during development for automatic regeneration on save.",code:"# Generate all serialization code:\n# dart run build_runner build --delete-conflicting-outputs\n\n# Watch mode for auto-regeneration:\n# dart run build_runner watch --delete-conflicting-outputs\n\n# pubspec.yaml dependencies:\n# dependencies:\n#   json_annotation: ^4.8.0\n# dev_dependencies:\n#   json_serializable: ^6.7.0\n#   build_runner: ^2.4.0"}],whatIs:"JSON serialization converts between Dart objects and JSON data. The json_serializable package auto-generates fromJson/toJson code using annotations and build_runner, eliminating manual mapping errors. In team_mvp_kit, DTOs in the data layer handle all JSON serialization while domain entities stay pure Dart with no serialization knowledge.",realWorld:"Every API call in team_mvp_kit involves serialization. When you log in, the server sends JSON with tokens and user data. The LoginResponseDto deserializes it. When you update your profile, your data is serialized to JSON and sent to the server. DTOs act as the translation layer between your API's JSON format and your app's Dart types.",code:`import 'package:json_annotation/json_annotation.dart';

part 'auth_response_dto.g.dart';

// 1. Response DTO with nested objects
@JsonSerializable()
class AuthResponseDto {
  final UserDto user;
  final TokensDto tokens;

  AuthResponseDto({required this.user, required this.tokens});

  factory AuthResponseDto.fromJson(Map<String, dynamic> json) =>
      _\$AuthResponseDtoFromJson(json);
  Map<String, dynamic> toJson() => _\$AuthResponseDtoToJson(this);
}

// 2. User DTO with field name mapping
@JsonSerializable()
class UserDto {
  final int id;

  @JsonKey(name: 'full_name')
  final String fullName;

  final String email;

  @JsonKey(name: 'is_verified', defaultValue: false)
  final bool isVerified;

  @JsonKey(name: 'created_at')
  final DateTime createdAt;

  UserDto({
    required this.id,
    required this.fullName,
    required this.email,
    this.isVerified = false,
    required this.createdAt,
  });

  factory UserDto.fromJson(Map<String, dynamic> json) =>
      _\$UserDtoFromJson(json);
  Map<String, dynamic> toJson() => _\$UserDtoToJson(this);
}

// 3. Tokens DTO
@JsonSerializable()
class TokensDto {
  @JsonKey(name: 'access_token')
  final String accessToken;

  @JsonKey(name: 'refresh_token')
  final String refreshToken;

  @JsonKey(name: 'expires_in')
  final int expiresIn;

  TokensDto({
    required this.accessToken,
    required this.refreshToken,
    required this.expiresIn,
  });

  factory TokensDto.fromJson(Map<String, dynamic> json) =>
      _\$TokensDtoFromJson(json);
  Map<String, dynamic> toJson() => _\$TokensDtoToJson(this);
}

// 4. Domain Entity (no JSON, no annotations)
class User {
  final int id;
  final String name;
  final String email;
  final bool isVerified;

  User({
    required this.id,
    required this.name,
    required this.email,
    required this.isVerified,
  });
}

// 5. Repository maps DTO -> Entity
User mapToEntity(UserDto dto) => User(
  id: dto.id,
  name: dto.fullName,
  email: dto.email,
  isVerified: dto.isVerified,
);`,funFact:"The json_serializable package has been downloaded over 100 million times on pub.dev! Before code generation became popular, Flutter developers had to write hundreds of lines of manual JSON mapping code. One large project reported saving over 3000 lines of hand-written serialization code by switching to json_serializable.",quiz:[{q:"What does fromJson do?",opts:["Converts a Dart object to JSON","Converts JSON (Map) into a Dart object","Validates JSON format","Sends JSON to the server"],ans:1},{q:"What annotation do you add to a class for auto-generated serialization?",opts:["@Injectable()","@JsonSerializable()","@Serializable()","@AutoJson()"],ans:1},{q:"Why does team_mvp_kit use DTOs separate from domain entities?",opts:["DTOs are faster","To keep domain entities pure and independent of API JSON format","DTOs use less memory","There is no reason, it is just a convention"],ans:1},{q:"What does @JsonKey(name: 'first_name') do?",opts:["Creates a new JSON field","Maps the Dart field to the JSON key 'first_name' for snake_case APIs","Validates the field is not null","Makes the field optional"],ans:1},{q:"What command generates the .g.dart serialization files?",opts:["flutter generate json","dart run build_runner build","flutter pub serialize","dart compile json"],ans:1}],challenge:"Create a PostDto class with fields: id (int), title (String), body (String), userId (int, mapped from 'user_id'), and createdAt (DateTime, mapped from 'created_at'). Use @JsonSerializable and @JsonKey. Then create a pure Post domain entity and a mapper function. Run build_runner to generate the .g.dart file.",resources:[{type:"docs",title:"json_serializable Package",url:"https://pub.dev/packages/json_serializable",source:"pub.dev"},{type:"docs",title:"JSON and Serialization in Flutter",url:"https://docs.flutter.dev/data-and-backend/serialization/json",source:"Flutter Official"},{type:"docs",title:"json_annotation Package",url:"https://pub.dev/packages/json_annotation",source:"pub.dev"}],eli5:"Imagine you have a toy box (JSON from the internet) full of loose LEGO bricks with labels like 'color: red' and 'size: big'. fromJson is like following instructions to build those loose bricks into a proper LEGO house (Dart object). toJson is like carefully taking the house apart and putting each brick back in the box with its label. json_serializable is like having a robot that reads the building instructions and writes the assembly steps for you!",codeWalkthrough:["Import json_annotation for serialization annotations","","Part directive links to the generated .g.dart file","","Comment: Response DTO wraps user and tokens together","@JsonSerializable annotation triggers code generation","AuthResponseDto class with two nested objects","A UserDto field for user information","A TokensDto field for authentication tokens","","Constructor requires both fields","","Factory fromJson delegates to generated _$AuthResponseDtoFromJson function","toJson delegates to generated _$AuthResponseDtoToJson function","Closing AuthResponseDto","","Comment: User DTO maps API field names to Dart conventions","@JsonSerializable annotation","UserDto class declaration","The id field maps directly (same name in JSON)","","@JsonKey maps full_name in JSON to fullName in Dart","The fullName field for the user's display name","","The email field maps directly","","@JsonKey maps is_verified with a default of false if missing from JSON","The isVerified boolean field","","@JsonKey maps created_at from JSON to createdAt in Dart","The createdAt DateTime field","","Constructor with required and default parameters","Closing constructor","","Factory fromJson using generated function","toJson using generated function","Closing UserDto","","Comment: Tokens DTO for authentication data","@JsonSerializable annotation","TokensDto class declaration","@JsonKey maps access_token to accessToken","The accessToken string field","","@JsonKey maps refresh_token to refreshToken","The refreshToken string field","","@JsonKey maps expires_in to expiresIn","The expiresIn integer (seconds until expiry)","","Constructor","Closing constructor","","Factory fromJson and toJson methods","Closing TokensDto","","Comment: Domain Entity has no JSON knowledge","Pure Dart class with no annotations or imports","Simple fields: id, name, email, isVerified","Constructor","Closing User entity","","Comment: Repository maps DTO to Entity","Function that converts UserDto to domain User","Maps dto.fullName to entity name (different field names!)","Maps all other fields directly"],bugChallenge:{code:"@JsonSerializable()\nclass UserDto {\n  final int id;\n  @JsonKey(name: 'full_name')\n  final String fullName;\n\n  UserDto({required this.id, required this.fullName});\n\n  factory UserDto.fromJson(Map<String, dynamic> json) =>\n      _$UserDtoFromJson(json);\n}",hint:"Compare what methods you need versus what is defined...",answer:"The toJson() method is missing. While the code compiles, you cannot serialize UserDto back to JSON without it. Add: Map<String, dynamic> toJson() => _$UserDtoToJson(this); Also, the 'part' directive is missing at the top. Add: part 'user_dto.g.dart'; Without the part directive, the generated _$UserDtoFromJson function will not be found."},difficulty:"intermediate",prereqs:[42,11]},
{id:45,title:"Hive Local Database",subtitle:"Local CRUD — Create, Read, Update & Delete on Device",analogy:"Hive is like a set of labeled filing cabinets in your office. Each cabinet is a 'box' with a name like 'settings' or 'user_cache'. You open a cabinet, put documents in (put), take them out (get), or throw them away (delete). The documents stay there even if you turn off the lights and come back tomorrow -- that is persistence!",points:[{t:"What is Hive?",d:"Hive is a lightweight, blazing-fast key-value database for Flutter. Data is stored on the device as binary files, so it works completely offline. It is perfect for caching API responses, storing user preferences, saving auth tokens, and any data you need to persist between app launches.",code:"// Hive stores data as key-value pairs\n// Think of it like a super-powered Map that saves to disk\n\n// Store a value:\nawait box.put('username', 'Alice');\n\n// Retrieve it:\nfinal name = box.get('username'); // 'Alice'\n\n// Still there after restarting the app!"},{t:"Setting Up Hive",d:"Initialize Hive in main() before runApp(). On Flutter, use Hive.initFlutter() from hive_flutter package which automatically sets the correct storage directory. Then open the boxes you need. In team_mvp_kit, Hive init happens inside the dependency injection setup.",code:"import 'package:hive_flutter/hive_flutter.dart';\n\nvoid main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n\n  // Initialize Hive with Flutter's app directory\n  await Hive.initFlutter();\n\n  // Open boxes (like opening file cabinets)\n  await Hive.openBox('settings');\n  await Hive.openBox('user_cache');\n  await Hive.openBox('auth');\n\n  runApp(const MyApp());\n}"},{t:"Boxes - Storage Containers",d:"A Box is a named storage container. You can have multiple boxes for different types of data: one for settings, one for cached users, one for auth tokens. Each box is independent. Open a box before using it, and use Hive.box() to access an already-opened box from anywhere.",code:"// Open a box (do this at startup)\nfinal settingsBox = await Hive.openBox('settings');\n\n// Access an already-opened box from anywhere\nfinal box = Hive.box('settings');\n\n// Multiple boxes for different data\nfinal authBox = await Hive.openBox('auth');\nfinal cacheBox = await Hive.openBox('cache');\n\n// Check if a box is open\nif (Hive.isBoxOpen('settings')) {\n  final box = Hive.box('settings');\n}"},{t:"Put, Get, Delete Operations",d:"Use put(key, value) to store data, get(key) to retrieve it, delete(key) to remove it, and clear() to empty the entire box. Keys are strings, values can be primitives (String, int, bool, double), Lists, Maps, or custom Hive objects.",code:"final box = Hive.box('settings');\n\n// Put - store a value\nawait box.put('theme', 'dark');\nawait box.put('fontSize', 16);\nawait box.put('notifications', true);\nawait box.put('favoriteIds', [1, 2, 3]);\n\n// Get - retrieve a value (with optional default)\nfinal theme = box.get('theme'); // 'dark'\nfinal lang = box.get('language', defaultValue: 'en'); // 'en'\n\n// Delete - remove a value\nawait box.delete('theme');\n\n// Clear - remove everything\nawait box.clear();"},{t:"Type Adapters for Custom Objects",d:"Hive can only store primitives and basic collections by default. To store custom Dart objects, create a TypeAdapter or use @HiveType and @HiveField annotations with hive_generator. Each type needs a unique typeId number that never changes once assigned.",code:"import 'package:hive/hive.dart';\n\npart 'cached_user.g.dart';\n\n@HiveType(typeId: 0)\nclass CachedUser extends HiveObject {\n  @HiveField(0)\n  final int id;\n\n  @HiveField(1)\n  final String name;\n\n  @HiveField(2)\n  final String email;\n\n  CachedUser({\n    required this.id,\n    required this.name,\n    required this.email,\n  });\n}\n\n// Register before opening box:\nHive.registerAdapter(CachedUserAdapter());"},{t:"The LocalDatabaseService in team_mvp_kit",d:"team_mvp_kit wraps Hive in a LocalDatabaseService class registered as a @singleton. This service provides typed get/put/delete methods and handles box initialization. Other services depend on LocalDatabaseService instead of using Hive directly, keeping Hive as an implementation detail.",code:"@singleton\nclass LocalDatabaseService {\n  static const _boxName = 'app_data';\n  late Box _box;\n\n  Future<void> init() async {\n    await Hive.initFlutter();\n    _box = await Hive.openBox(_boxName);\n  }\n\n  T? get<T>(String key) => _box.get(key) as T?;\n\n  Future<void> put(String key, dynamic value) =>\n      _box.put(key, value);\n\n  Future<void> delete(String key) => _box.delete(key);\n\n  Future<void> clear() => _box.clear();\n\n  bool containsKey(String key) => _box.containsKey(key);\n}"},{t:"Caching API Responses",d:"A common pattern is to cache API responses in Hive for offline access. When the user has internet, fetch from the API and save to Hive. When offline, serve the cached data. This gives instant loading on repeat visits and graceful offline support.",code:"@LazySingleton(as: UserRepository)\nclass UserRepositoryImpl implements UserRepository {\n  final ApiService _api;\n  final LocalDatabaseService _db;\n\n  UserRepositoryImpl(this._api, this._db);\n\n  @override\n  Future<List<User>> getUsers() async {\n    try {\n      // Try network first\n      final json = await _api.get('/users');\n      final users = (json['data'] as List)\n          .map((e) => UserDto.fromJson(e))\n          .toList();\n\n      // Cache for offline use\n      await _db.put('cached_users', json);\n\n      return users.map(_toEntity).toList();\n    } catch (e) {\n      // Fallback to cache\n      final cached = _db.get<Map>('cached_users');\n      if (cached != null) {\n        return (cached['data'] as List)\n            .map((e) => UserDto.fromJson(Map<String, dynamic>.from(e)))\n            .map(_toEntity)\n            .toList();\n      }\n      rethrow;\n    }\n  }\n}"},{t:"Encrypted Boxes",d:"For sensitive data like tokens and user credentials, use Hive's encrypted boxes. Generate an encryption key, store it securely with flutter_secure_storage, and pass it when opening the box. team_mvp_kit uses encrypted boxes for auth token storage.",code:"import 'package:flutter_secure_storage/flutter_secure_storage.dart';\n\n// Generate or retrieve encryption key\nconst secureStorage = FlutterSecureStorage();\nfinal encKeyString = await secureStorage.read(key: 'hive_key');\nList<int> encKey;\n\nif (encKeyString == null) {\n  // First time: generate key\n  encKey = Hive.generateSecureKey();\n  await secureStorage.write(\n    key: 'hive_key',\n    value: base64UrlEncode(encKey),\n  );\n} else {\n  encKey = base64Url.decode(encKeyString);\n}\n\n// Open encrypted box\nfinal encryptedBox = await Hive.openBox(\n  'secure_data',\n  encryptionCipher: HiveAesCipher(encKey),\n);"},{t:"Listening to Changes",d:"Hive boxes support listenable() to watch for changes reactively. Use ValueListenableBuilder in Flutter to automatically rebuild widgets when box data changes. This is great for settings screens or any UI that should update when local data changes.",code:"// Listen to all changes in a box\nfinal box = Hive.box('settings');\n\n// In a widget:\nValueListenableBuilder(\n  valueListenable: box.listenable(),\n  builder: (context, Box box, _) {\n    final theme = box.get('theme', defaultValue: 'dark');\n    return Text('Current theme: $theme');\n  },\n)\n\n// Listen to specific keys only:\nValueListenableBuilder(\n  valueListenable: box.listenable(keys: ['theme']),\n  builder: (context, Box box, _) {\n    return Text(box.get('theme'));\n  },\n)"}],whatIs:"Hive is a lightweight, fast, NoSQL key-value database for Flutter that stores data on the device as encrypted binary files. It works completely offline and persists data between app launches. In team_mvp_kit, a LocalDatabaseService singleton wraps Hive to provide caching, token storage, and offline data access throughout the app.",realWorld:"team_mvp_kit uses Hive for three critical features: 1) Token storage (encrypted box for access/refresh tokens), 2) API response caching (users can see data even offline), 3) User preferences (theme, language, settings). The LocalDatabaseService abstracts Hive behind a clean interface so it could be swapped for another database without changing any other code.",code:`import 'package:hive_flutter/hive_flutter.dart';
import 'package:injectable/injectable.dart';

// 1. LocalDatabaseService wraps Hive (from team_mvp_kit)
@singleton
class LocalDatabaseService {
  static const _boxName = 'app_data';
  static const _secureBoxName = 'secure_data';
  late Box _box;
  late Box _secureBox;

  Future<void> init() async {
    await Hive.initFlutter();
    _box = await Hive.openBox(_boxName);
    // Encrypted box for sensitive data
    final encKey = await _getOrCreateEncryptionKey();
    _secureBox = await Hive.openBox(
      _secureBoxName,
      encryptionCipher: HiveAesCipher(encKey),
    );
  }

  // Regular data operations
  T? get<T>(String key) => _box.get(key) as T?;

  Future<void> put(String key, dynamic value) =>
      _box.put(key, value);

  Future<void> delete(String key) => _box.delete(key);

  bool containsKey(String key) => _box.containsKey(key);

  Future<void> clear() => _box.clear();

  // Secure data operations (for tokens)
  String? getSecure(String key) => _secureBox.get(key) as String?;

  Future<void> putSecure(String key, String value) =>
      _secureBox.put(key, value);

  Future<void> deleteSecure(String key) =>
      _secureBox.delete(key);

  Future<void> clearSecure() => _secureBox.clear();

  Future<List<int>> _getOrCreateEncryptionKey() async {
    // In production: store key in flutter_secure_storage
    final existing = _box.get('_enc_key') as List<int>?;
    if (existing != null) return existing;
    final key = Hive.generateSecureKey();
    await _box.put('_enc_key', key);
    return key;
  }
}

// 2. Using LocalDatabaseService for caching
@LazySingleton(as: UserRepository)
class UserRepositoryImpl implements UserRepository {
  final ApiService _api;
  final LocalDatabaseService _db;

  UserRepositoryImpl(this._api, this._db);

  @override
  Future<List<User>> getUsers() async {
    try {
      final json = await _api.get('/users');
      await _db.put('cached_users', json);
      return _parseUsers(json);
    } catch (e) {
      final cached = _db.get<Map>('cached_users');
      if (cached != null) return _parseUsers(cached);
      rethrow;
    }
  }

  List<User> _parseUsers(Map data) {
    return (data['data'] as List)
        .map((e) => UserDto.fromJson(
            Map<String, dynamic>.from(e)))
        .map((dto) => User(
            id: dto.id, name: dto.fullName))
        .toList();
  }
}`,funFact:"Hive is named after the beehive because, like bees storing honey in hexagonal cells, Hive stores your data in efficient binary containers. It was created by Simon Leier from Germany and is one of the fastest local databases available for Flutter -- up to 100x faster than SQLite for simple key-value operations!",quiz:[{q:"What is Hive?",opts:["A cloud database like Firebase","A lightweight key-value database that stores data locally on the device","A state management solution","An HTTP client"],ans:1},{q:"What is a 'Box' in Hive?",opts:["A widget that draws a rectangle","A named storage container for key-value pairs","A type of list","An encryption method"],ans:1},{q:"How do you store sensitive data like tokens in Hive?",opts:["Just use a regular box","Use an encrypted box with HiveAesCipher","Hive cannot store sensitive data","Use box.putSensitive()"],ans:1},{q:"Why does team_mvp_kit wrap Hive in a LocalDatabaseService?",opts:["To make Hive slower","To abstract the database so it can be swapped without changing other code","Hive requires a wrapper to work","To add colors to the data"],ans:1},{q:"What must you do before using a Hive box?",opts:["Import Flutter","Open the box with Hive.openBox()","Connect to the internet","Register a route"],ans:1}],challenge:"Create a simple SettingsService that uses Hive to store and retrieve user preferences: theme (String), fontSize (int), and notificationsEnabled (bool). Include methods for getTheme(), setTheme(), getFontSize(), setFontSize(), and resetAll(). Initialize Hive in main() and test your service.",resources:[{type:"docs",title:"Hive Package",url:"https://pub.dev/packages/hive",source:"pub.dev"},{type:"docs",title:"Hive Flutter Package",url:"https://pub.dev/packages/hive_flutter",source:"pub.dev"},{type:"docs",title:"Hive Documentation",url:"https://docs.hivedb.dev/",source:"Hive Official"}],eli5:"Imagine you have a magic notebook that never forgets. When you write 'favorite color = blue' on a page (put), the notebook remembers it forever -- even if you close it and open it tomorrow. You can read any page (get), erase a page (delete), or rip out all pages (clear). Hive is that magic notebook for your app. It remembers things even after you close and reopen the app!",codeWalkthrough:["Import hive_flutter for Flutter-specific Hive features","Import injectable for DI annotations","","Comment: LocalDatabaseService wraps Hive","@singleton ensures one instance for the entire app","Class declaration for LocalDatabaseService","Constant for the regular box name","Constant for the encrypted box name","Late field for the regular box (initialized in init)","Late field for the encrypted box","","init() method to set up Hive and open boxes","Initialize Hive with Flutter's document directory","Open the regular box for general data","Generate or get the encryption key for secure box","Open the encrypted box with AES cipher","Closing init method","","Comment: Regular data operations section","Generic get method casts stored value to type T","Returns null if key does not exist","","put stores any value with a string key","Delegates to the Hive box put method","","delete removes a value by key","","containsKey checks if a key exists in the box","","clear removes all data from the regular box","","Comment: Secure data operations for tokens","getSecure reads from the encrypted box","Returns null if key does not exist","","putSecure writes to the encrypted box","","deleteSecure removes from the encrypted box","","clearSecure wipes the entire encrypted box","","Private helper to get or create the encryption key","Check if an encryption key already exists","If it exists, return it","Generate a new secure key using Hive","Save it for future use","Return the key","Closing the helper and LocalDatabaseService class","","Comment: Using the service in a repository","@LazySingleton registers this as UserRepository","UserRepositoryImpl uses both API and local database","ApiService for network calls","LocalDatabaseService for caching","","Constructor receives both via DI","","getUsers tries network first, falls back to cache","Try block for network request","Fetch users from API","Cache the response locally","Parse and return users from API response","Catch block for network failures","Try to get cached data","If cache exists, parse and return it","If no cache either, rethrow the original error","Closing getUsers","","Helper to parse user data from a map","Convert JSON list to UserDto list","Map DTOs to domain User entities","Return the list"],bugChallenge:{code:"void main() async {\n  final box = Hive.box('settings');\n  await box.put('theme', 'dark');\n  final theme = box.get('theme');\n  print(theme);\n}",hint:"Think about the lifecycle of a Hive box...",answer:"The box is accessed with Hive.box('settings') but was never opened first. You must call await Hive.initFlutter() and then await Hive.openBox('settings') before using Hive.box(). Also WidgetsFlutterBinding.ensureInitialized() is needed before any async operations in main()."},difficulty:"intermediate",prereqs:[15]},
{id:46,title:"Token & Auth Storage",subtitle:"Keeping Users Logged In Securely",analogy:"Imagine a theme park where you buy a day pass (access token) at the gate. The pass expires every hour, but you also get a special renewal card (refresh token). When your pass expires, you show the renewal card to get a fresh pass without buying a new ticket. If you lose the renewal card too, you have to go back to the ticket booth (login again). That is exactly how token-based authentication works!",points:[{t:"What Are Access Tokens?",d:"An access token is a short string (usually a JWT) that proves you are logged in. You send it with every API request in the Authorization header. Access tokens expire quickly (15 minutes to 1 hour) for security -- if someone steals it, they can only use it briefly.",code:"// Access token example (JWT format):\n// eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQyLCJleHAiOjE3MDk0MzI0MDB9.abc\n//\n// Decoded JWT:\n// Header: {\"alg\": \"HS256\"}\n// Payload: {\"userId\": 42, \"exp\": 1709432400}\n// Signature: (server's secret)\n\n// Sent with every API request:\n// Authorization: Bearer eyJhbGci..."},{t:"What Are Refresh Tokens?",d:"A refresh token is a long-lived token (days or weeks) used to get a NEW access token when the old one expires. You never send it with regular API requests -- only to the refresh endpoint. If the refresh token expires too, the user must log in again with their username and password.",code:"// Token lifecycle:\n// 1. Login -> get access_token + refresh_token\n// 2. Use access_token for API calls (15 min lifespan)\n// 3. Access token expires (401 error)\n// 4. Send refresh_token to /auth/refresh\n// 5. Get new access_token + new refresh_token\n// 6. Retry the original request\n// 7. If refresh fails -> back to login screen"},{t:"TokenStorage in team_mvp_kit",d:"team_mvp_kit has a TokenStorage class that saves tokens in Hive's encrypted box. It stores the access token, refresh token, and expiry timestamp. It provides methods to save, retrieve, check expiry, and clear tokens. It is registered as a @singleton via injectable.",code:"@singleton\nclass TokenStorage {\n  final LocalDatabaseService _db;\n  static const _accessTokenKey = 'access_token';\n  static const _refreshTokenKey = 'refresh_token';\n  static const _expiryKey = 'token_expiry';\n\n  TokenStorage(this._db);\n\n  String? get accessToken => _db.getSecure(_accessTokenKey);\n  String? get refreshToken => _db.getSecure(_refreshTokenKey);\n\n  bool get isLoggedIn => accessToken != null;\n\n  bool get isTokenExpired {\n    final expiry = _db.get<int>(_expiryKey);\n    if (expiry == null) return true;\n    return DateTime.now().millisecondsSinceEpoch > expiry;\n  }\n}"},{t:"Saving Tokens After Login",d:"When the user logs in, the server returns both tokens and the expiry time. Save all three to the encrypted storage. Calculate the absolute expiry timestamp from the relative expiresIn seconds. team_mvp_kit does this in the repository right after a successful login API call.",code:"Future<void> saveTokens(TokensDto tokens) async {\n  await _db.putSecure(_accessTokenKey, tokens.accessToken);\n  await _db.putSecure(_refreshTokenKey, tokens.refreshToken);\n\n  // Calculate absolute expiry time\n  final expiryMs = DateTime.now().millisecondsSinceEpoch +\n      (tokens.expiresIn * 1000);\n  await _db.put(_expiryKey, expiryMs);\n}\n\nFuture<void> clearTokens() async {\n  await _db.deleteSecure(_accessTokenKey);\n  await _db.deleteSecure(_refreshTokenKey);\n  await _db.delete(_expiryKey);\n}"},{t:"Auto-Refresh with Interceptor",d:"The AuthInterceptor in team_mvp_kit checks every 401 response. If the access token expired, it calls the refresh endpoint with the refresh token, saves the new tokens, and retries the original request. The user never notices -- the refresh happens invisibly behind the scenes.",code:"@override\nvoid onError(DioException err, ErrorInterceptorHandler handler) async {\n  if (err.response?.statusCode == 401 && !_isRefreshing) {\n    _isRefreshing = true;\n    try {\n      final refreshToken = _tokenStorage.refreshToken;\n      if (refreshToken == null) {\n        return handler.next(err); // No refresh token, give up\n      }\n\n      // Call refresh endpoint\n      final response = await _dio.post('/auth/refresh', data: {\n        'refresh_token': refreshToken,\n      });\n\n      // Save new tokens\n      final tokens = TokensDto.fromJson(response.data);\n      await _tokenStorage.saveTokens(tokens);\n\n      // Retry original request with new token\n      err.requestOptions.headers['Authorization'] =\n          'Bearer ${tokens.accessToken}';\n      final retry = await _dio.fetch(err.requestOptions);\n      return handler.resolve(retry);\n    } finally {\n      _isRefreshing = false;\n    }\n  }\n  handler.next(err);\n}"},{t:"Handling Concurrent Refresh Requests",d:"When multiple API calls fail with 401 at the same time, you must not send multiple refresh requests. Use a flag (_isRefreshing) and a Completer to queue concurrent requests. The first 401 triggers the refresh; all others wait for it to complete, then retry with the new token.",code:"class AuthInterceptor extends Interceptor {\n  bool _isRefreshing = false;\n  Completer<String?>? _refreshCompleter;\n\n  Future<String?> _handleRefresh() async {\n    if (_isRefreshing) {\n      // Another refresh is in progress, wait for it\n      return _refreshCompleter?.future;\n    }\n\n    _isRefreshing = true;\n    _refreshCompleter = Completer();\n\n    try {\n      final newToken = await _performRefresh();\n      _refreshCompleter?.complete(newToken);\n      return newToken;\n    } catch (e) {\n      _refreshCompleter?.complete(null);\n      return null;\n    } finally {\n      _isRefreshing = false;\n    }\n  }\n}"},{t:"Logout and Token Cleanup",d:"When the user logs out (or when token refresh fails), clear all stored tokens, reset in-memory state, and navigate to the login screen. team_mvp_kit calls tokenStorage.clearTokens() and then uses go_router to redirect to the login route.",code:"@injectable\nclass LogoutUseCase {\n  final TokenStorage _tokenStorage;\n  final ApiService _api;\n  final LocalDatabaseService _db;\n\n  LogoutUseCase(this._tokenStorage, this._api, this._db);\n\n  Future<void> call() async {\n    try {\n      // Tell server to invalidate the refresh token\n      await _api.post('/auth/logout', data: {\n        'refresh_token': _tokenStorage.refreshToken,\n      });\n    } catch (_) {\n      // Ignore API errors during logout\n    } finally {\n      // Always clear local data\n      await _tokenStorage.clearTokens();\n      await _db.clear();\n    }\n  }\n}"},{t:"Checking Auth State on App Start",d:"When the app launches, check if the user has a valid token. If yes, go to the home screen. If the token is expired, try to refresh it. If no tokens at all, go to login. team_mvp_kit uses a GoRouter redirect that checks TokenStorage on every navigation.",code:"GoRouter(\n  redirect: (context, state) {\n    final tokenStorage = getIt<TokenStorage>();\n    final isLoggedIn = tokenStorage.isLoggedIn;\n    final isOnLogin = state.matchedLocation == '/login';\n\n    if (!isLoggedIn && !isOnLogin) {\n      return '/login'; // Not logged in, go to login\n    }\n    if (isLoggedIn && isOnLogin) {\n      return '/home'; // Already logged in, skip login\n    }\n    return null; // No redirect needed\n  },\n  routes: [\n    GoRoute(path: '/login', builder: (_, __) => LoginScreen()),\n    GoRoute(path: '/home', builder: (_, __) => HomeScreen()),\n  ],\n)"},{t:"Proactive Token Refresh",d:"Instead of waiting for a 401 error, you can proactively check if the token is about to expire before making a request. If the token expires within the next 60 seconds, refresh it preemptively. This avoids the 401-retry cycle and gives a smoother experience.",code:"@override\nvoid onRequest(\n  RequestOptions options,\n  RequestInterceptorHandler handler,\n) async {\n  final token = _tokenStorage.accessToken;\n\n  if (token != null) {\n    // Proactive check: refresh if expiring in < 60s\n    if (_tokenStorage.isTokenExpiringSoon(seconds: 60)) {\n      final newToken = await _handleRefresh();\n      if (newToken != null) {\n        options.headers['Authorization'] = 'Bearer $newToken';\n        return handler.next(options);\n      }\n    }\n    options.headers['Authorization'] = 'Bearer $token';\n  }\n  handler.next(options);\n}"}],whatIs:"Token-based authentication uses short-lived access tokens for API requests and long-lived refresh tokens to renew them. team_mvp_kit's TokenStorage persists both tokens in Hive's encrypted box. The AuthInterceptor automatically attaches tokens to requests and transparently refreshes expired ones, keeping users logged in without manual intervention.",realWorld:"Every professional app with user accounts uses this pattern. When you stay logged in to Instagram for weeks, that is refresh tokens at work. team_mvp_kit implements the complete flow: login saves tokens, the interceptor auto-attaches and auto-refreshes them, concurrent 401s are queued, and logout clears everything securely.",code:`import 'package:injectable/injectable.dart';

// 1. TokenStorage - encrypted persistence (team_mvp_kit)
@singleton
class TokenStorage {
  final LocalDatabaseService _db;
  static const _accessKey = 'access_token';
  static const _refreshKey = 'refresh_token';
  static const _expiryKey = 'token_expiry';

  TokenStorage(this._db);

  // Read tokens
  String? get accessToken => _db.getSecure(_accessKey);
  String? get refreshToken => _db.getSecure(_refreshKey);
  bool get isLoggedIn => accessToken != null;

  // Check expiry
  bool get isTokenExpired {
    final expiry = _db.get<int>(_expiryKey);
    if (expiry == null) return true;
    return DateTime.now().millisecondsSinceEpoch > expiry;
  }

  bool isTokenExpiringSoon({int seconds = 60}) {
    final expiry = _db.get<int>(_expiryKey);
    if (expiry == null) return true;
    final buffer = seconds * 1000;
    return DateTime.now().millisecondsSinceEpoch > (expiry - buffer);
  }

  // Save tokens after login or refresh
  Future<void> saveTokens(TokensDto tokens) async {
    await _db.putSecure(_accessKey, tokens.accessToken);
    await _db.putSecure(_refreshKey, tokens.refreshToken);
    final expiryMs = DateTime.now().millisecondsSinceEpoch +
        (tokens.expiresIn * 1000);
    await _db.put(_expiryKey, expiryMs);
  }

  // Clear everything on logout
  Future<void> clearTokens() async {
    await _db.deleteSecure(_accessKey);
    await _db.deleteSecure(_refreshKey);
    await _db.delete(_expiryKey);
  }

  // Attempt token refresh via API
  Future<bool> refreshTokens() async {
    final refresh = refreshToken;
    if (refresh == null) return false;
    try {
      // This would call the refresh endpoint
      // For now, return false to indicate failure
      return false;
    } catch (_) {
      await clearTokens();
      return false;
    }
  }
}

// 2. Auth Interceptor with concurrent refresh handling
class AuthInterceptor extends Interceptor {
  final TokenStorage _tokenStorage;
  final Dio _dio;
  bool _isRefreshing = false;

  AuthInterceptor(this._tokenStorage, this._dio);

  @override
  void onRequest(
    RequestOptions options,
    RequestInterceptorHandler handler,
  ) {
    final token = _tokenStorage.accessToken;
    if (token != null) {
      options.headers['Authorization'] = 'Bearer \$token';
    }
    handler.next(options);
  }

  @override
  void onError(
    DioException error,
    ErrorInterceptorHandler handler,
  ) async {
    if (error.response?.statusCode == 401 && !_isRefreshing) {
      _isRefreshing = true;
      try {
        final refreshed = await _tokenStorage.refreshTokens();
        if (refreshed) {
          error.requestOptions.headers['Authorization'] =
              'Bearer \${_tokenStorage.accessToken}';
          final response = await _dio.fetch(error.requestOptions);
          return handler.resolve(response);
        }
      } finally {
        _isRefreshing = false;
      }
    }
    handler.next(error);
  }
}`,funFact:"JSON Web Tokens (JWTs) are not encrypted -- they are just base64 encoded! Anyone can decode and read the payload. Never put sensitive data like passwords inside a JWT. The signature only proves the token was issued by your server, it does not hide the contents. You can paste any JWT into jwt.io and read it!",quiz:[{q:"Why do access tokens expire quickly?",opts:["To save server memory","If stolen, an attacker can only use it for a short time","Because the server forgets them","To force users to pay for subscriptions"],ans:1},{q:"What is the refresh token used for?",opts:["To decrypt the access token","To get a new access token without logging in again","To refresh the app UI","To clear the cache"],ans:1},{q:"What happens in team_mvp_kit when a 401 error occurs?",opts:["The app crashes","The user is immediately logged out","The interceptor tries to refresh the token and retry the request","The error is ignored"],ans:2},{q:"Where does team_mvp_kit store tokens?",opts:["In plain SharedPreferences","In an encrypted Hive box via LocalDatabaseService","In a text file","In memory only, lost on restart"],ans:1},{q:"What should happen when token refresh fails?",opts:["Keep trying forever","Clear tokens and redirect to the login screen","Show the expired token to the user","Restart the app"],ans:1}],challenge:"Build a complete TokenStorage class with: saveTokens(), clearTokens(), isLoggedIn, isTokenExpired, and accessToken/refreshToken getters. Use Hive's encrypted box. Then create a GoRouter redirect that checks isLoggedIn and redirects to /login or /home appropriately.",resources:[{type:"docs",title:"Flutter Secure Storage",url:"https://pub.dev/packages/flutter_secure_storage",source:"pub.dev"},{type:"article",title:"JWT Introduction",url:"https://jwt.io/introduction",source:"Auth0"},{type:"docs",title:"Dio Interceptors",url:"https://pub.dev/packages/dio#interceptors",source:"pub.dev"}],eli5:"Imagine you go to a water park. At the entrance, they give you a wristband (access token) that lets you ride any slide for 1 hour. They also give you a special card (refresh token) that lasts all day. When your wristband beeps after 1 hour, you show your card at the info desk and they give you a fresh wristband -- you do not have to buy a new ticket! But if you lose both the wristband AND the card, you have to go back to the entrance and buy a new ticket (login again).",codeWalkthrough:["Import injectable for dependency injection","","Comment: TokenStorage with encrypted persistence","@singleton annotation for single instance across the app","TokenStorage class declaration","Private field for LocalDatabaseService (injected)","Constant key string for access token storage","Constant key string for refresh token storage","Constant key string for expiry timestamp storage","","Constructor receives the database service via DI","","Comment: Read tokens from secure storage","Getter reads access token from encrypted box","Getter reads refresh token from encrypted box","isLoggedIn checks if an access token exists","","Comment: Check if token has expired","isTokenExpired getter","Read the stored expiry timestamp","If no expiry stored, consider it expired","Compare current time to stored expiry","Closing isTokenExpired","","Helper to check if token expires within N seconds","Read the expiry timestamp","If no expiry, it is expiring soon","Calculate the buffer window in milliseconds","Return true if current time is within the buffer of expiry","Closing isTokenExpiringSoon","","Comment: Save tokens after login or refresh","saveTokens takes a TokensDto with all token data","Store access token in encrypted box","Store refresh token in encrypted box","Calculate absolute expiry from relative expiresIn seconds","Store the expiry timestamp in regular box","Closing saveTokens","","Comment: Clear tokens on logout","clearTokens removes all auth data","Delete access token from encrypted box","Delete refresh token from encrypted box","Delete expiry timestamp","Closing clearTokens","","Comment: Attempt to refresh the token","refreshTokens method returns success/failure boolean","Get the current refresh token","If no refresh token exists, cannot refresh","Try block for the refresh API call","Placeholder for actual refresh endpoint call","Return false as default (replace with real implementation)","Catch any errors","Clear all tokens on refresh failure","Return false on failure","Closing refreshTokens and TokenStorage","","Comment: AuthInterceptor handles token attachment and refresh","AuthInterceptor extends Dio's Interceptor","Private TokenStorage field","Private Dio field for retrying requests","Flag to prevent concurrent refresh attempts","","Constructor receives both dependencies","","Override onRequest to attach token to every request","Method signature","Get the current access token","If token exists, add it to the Authorization header","Set the Bearer token value","Closing the if block","Continue to next interceptor","Closing onRequest","","Override onError to handle 401 and refresh","Method signature","Check for 401 status AND not already refreshing","Set the refreshing flag to true","Try to refresh the token","If refresh succeeded, update the request header","Set the new token on the retry request","Retry the original request","Return the successful retry response","Finally block always resets the refreshing flag","Set flag back to false","Closing the 401 handling block","Pass non-401 errors through","Closing onError and AuthInterceptor"],bugChallenge:{code:"class TokenStorage {\n  String? _accessToken;\n  String? _refreshToken;\n\n  void saveTokens(String access, String refresh) {\n    _accessToken = access;\n    _refreshToken = refresh;\n  }\n\n  String? get accessToken => _accessToken;\n  bool get isLoggedIn => _accessToken != null;\n}",hint:"Think about what happens when the user closes and reopens the app...",answer:"The tokens are stored only in memory (instance variables). When the app is closed and reopened, both tokens are lost and the user appears logged out. Fix: persist tokens to an encrypted Hive box or flutter_secure_storage. Also, saveTokens should be async/Future<void> since storage operations are asynchronous."},difficulty:"advanced",prereqs:[43,45]},
{id:47,title:"Firebase Setup & Auth",subtitle:"Adding Firebase to Your Flutter App",analogy:"Firebase is like renting a fully furnished office instead of building one from scratch. Need user accounts? Firebase Auth is the reception desk. Need crash reports? Crashlytics is the security camera. Need to change settings without redeploying? Remote Config is the intercom system. Google built and maintains the whole building -- you just move in and start working!",points:[{t:"What is Firebase?",d:"Firebase is a suite of cloud services by Google. For Flutter apps, the most useful services are: Authentication (login/signup), Crashlytics (crash reporting), Remote Config (change app behavior without updates), Cloud Firestore (real-time database), and Cloud Messaging (push notifications). team_mvp_kit uses Auth and Crashlytics.",code:"// Firebase services used in team_mvp_kit:\n// 1. Firebase Auth - user authentication\n// 2. Crashlytics - crash reporting\n//\n// Available but not always needed:\n// 3. Remote Config - feature flags\n// 4. Cloud Messaging - push notifications\n// 5. Analytics - usage tracking\n// 6. Cloud Firestore - real-time database"},{t:"Adding Firebase to Flutter",d:"Use the FlutterFire CLI to configure Firebase automatically. Run 'flutterfire configure' and it generates the firebase_options.dart file with your project's API keys and configuration for each platform (Android, iOS, web). This replaces the old manual google-services.json setup.",code:"# Step 1: Install FlutterFire CLI\n# dart pub global activate flutterfire_cli\n\n# Step 2: Configure Firebase for your project\n# flutterfire configure\n\n# This generates:\n# lib/firebase_options.dart\n\n# Step 3: Add dependencies\n# flutter pub add firebase_core\n# flutter pub add firebase_auth\n# flutter pub add firebase_crashlytics"},{t:"Firebase Initialization",d:"Initialize Firebase in main() before runApp(). This must happen before any Firebase service is used. In team_mvp_kit, Firebase init is part of the dependency injection setup to ensure correct initialization order.",code:"import 'package:firebase_core/firebase_core.dart';\nimport 'firebase_options.dart';\n\nvoid main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n\n  // Initialize Firebase with generated config\n  await Firebase.initializeApp(\n    options: DefaultFirebaseOptions.currentPlatform,\n  );\n\n  // Initialize other services...\n  await configureDependencies();\n\n  runApp(const MyApp());\n}"},{t:"Firebase Authentication Basics",d:"FirebaseAuth provides methods for creating accounts, signing in, signing out, and listening to auth state changes. It supports email/password, Google, Apple, phone number, and anonymous sign-in. team_mvp_kit uses Firebase Auth primarily for social logins and backend token exchange.",code:"import 'package:firebase_auth/firebase_auth.dart';\n\nfinal auth = FirebaseAuth.instance;\n\n// Sign up with email and password\nfinal credential = await auth.createUserWithEmailAndPassword(\n  email: 'alice@example.com',\n  password: 'securePassword123',\n);\nfinal user = credential.user;\nprint('Created user: ${user?.uid}');\n\n// Sign in with email and password\nfinal signIn = await auth.signInWithEmailAndPassword(\n  email: 'alice@example.com',\n  password: 'securePassword123',\n);\n\n// Sign out\nawait auth.signOut();"},{t:"Auth State Listener",d:"FirebaseAuth provides an authStateChanges() stream that emits whenever the user signs in or out. Use this to reactively update your UI or routing. When the stream emits null, the user is signed out. When it emits a User, they are signed in.",code:"// Listen to auth state changes\nFirebaseAuth.instance.authStateChanges().listen((User? user) {\n  if (user == null) {\n    print('User is signed out');\n    // Navigate to login screen\n  } else {\n    print('User signed in: ${user.uid}');\n    // Navigate to home screen\n  }\n});\n\n// Check current user at any time\nfinal currentUser = FirebaseAuth.instance.currentUser;\nif (currentUser != null) {\n  print('Logged in as: ${currentUser.email}');\n}"},{t:"Getting Firebase ID Token",d:"After signing in with Firebase, get the ID token to send to your backend server. The backend verifies this token with Firebase Admin SDK to confirm the user's identity. This is how team_mvp_kit bridges Firebase Auth with its own backend API.",code:"// After Firebase sign-in, get the ID token\nfinal user = FirebaseAuth.instance.currentUser;\nif (user != null) {\n  final idToken = await user.getIdToken();\n\n  // Send to your backend for verification\n  final response = await dio.post('/auth/firebase', data: {\n    'firebase_token': idToken,\n  });\n\n  // Backend returns your app's access + refresh tokens\n  final tokens = TokensDto.fromJson(response.data);\n  await tokenStorage.saveTokens(tokens);\n}"},{t:"Crashlytics Setup",d:"Firebase Crashlytics automatically captures and reports app crashes. Initialize it after Firebase and enable it in main(). Uncaught Flutter errors and Dart errors are automatically sent. You can also log custom errors and add user context for better debugging.",code:"import 'package:firebase_crashlytics/firebase_crashlytics.dart';\n\nvoid main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  await Firebase.initializeApp(\n    options: DefaultFirebaseOptions.currentPlatform,\n  );\n\n  // Catch Flutter framework errors\n  FlutterError.onError = FirebaseCrashlytics.instance.recordFlutterError;\n\n  // Catch async errors\n  PlatformDispatcher.instance.onError = (error, stack) {\n    FirebaseCrashlytics.instance.recordError(error, stack);\n    return true;\n  };\n\n  runApp(const MyApp());\n}"},{t:"Custom Crashlytics Logging",d:"Add custom keys, log messages, and record non-fatal errors to Crashlytics for better debugging. Set the user ID so you can filter crashes by user. team_mvp_kit sets the user ID after login and logs important state changes.",code:"final crashlytics = FirebaseCrashlytics.instance;\n\n// Set user identifier for crash reports\nawait crashlytics.setUserIdentifier('user_42');\n\n// Add custom key-value pairs\nawait crashlytics.setCustomKey('subscription', 'premium');\nawait crashlytics.setCustomKey('screen', 'profile');\n\n// Log a message (appears in crash timeline)\nawait crashlytics.log('User tapped save button');\n\n// Record a non-fatal error\ntry {\n  await riskyOperation();\n} catch (e, stack) {\n  await crashlytics.recordError(e, stack, reason: 'riskyOperation failed');\n}"}],whatIs:"Firebase is Google's suite of cloud services for mobile apps. Firebase Auth handles user authentication (email, Google, Apple sign-in). Crashlytics captures and reports crashes. In team_mvp_kit, Firebase Auth is used for social logins -- the Firebase ID token is exchanged with the backend for app-specific access and refresh tokens.",realWorld:"team_mvp_kit uses Firebase as a bridge for authentication. Users sign in with Google or Apple through Firebase Auth, then the app sends the Firebase ID token to the backend server. The backend verifies it and returns its own JWT tokens. Crashlytics catches every crash in production so the team can fix issues before users even report them.",code:`import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'firebase_options.dart';

// 1. App initialization with Firebase
void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Initialize Firebase
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  // Setup Crashlytics error handlers
  FlutterError.onError =
      FirebaseCrashlytics.instance.recordFlutterError;

  PlatformDispatcher.instance.onError = (error, stack) {
    FirebaseCrashlytics.instance.recordError(error, stack);
    return true;
  };

  await configureDependencies();
  runApp(const MyApp());
}

// 2. FirebaseAuthService wraps Firebase Auth (team_mvp_kit)
@lazySingleton
class FirebaseAuthService {
  final FirebaseAuth _auth;
  FirebaseAuthService(this._auth);

  // Current user
  User? get currentUser => _auth.currentUser;
  bool get isSignedIn => currentUser != null;

  // Auth state stream
  Stream<User?> get authStateChanges =>
      _auth.authStateChanges();

  // Email/password sign up
  Future<UserCredential> signUpWithEmail({
    required String email,
    required String password,
  }) async {
    return _auth.createUserWithEmailAndPassword(
      email: email,
      password: password,
    );
  }

  // Email/password sign in
  Future<UserCredential> signInWithEmail({
    required String email,
    required String password,
  }) async {
    return _auth.signInWithEmailAndPassword(
      email: email,
      password: password,
    );
  }

  // Get ID token for backend exchange
  Future<String?> getIdToken() async {
    return currentUser?.getIdToken();
  }

  // Sign out
  Future<void> signOut() async {
    await _auth.signOut();
  }
}

// 3. Module to register FirebaseAuth instance
@module
abstract class FirebaseModule {
  @singleton
  FirebaseAuth get firebaseAuth => FirebaseAuth.instance;

  @singleton
  FirebaseCrashlytics get crashlytics =>
      FirebaseCrashlytics.instance;
}`,funFact:"Firebase was originally a real-time chat service called Envolve, founded in 2011. The developers noticed people were using their chat infrastructure to sync app data instead of chatting, so they pivoted to become a backend-as-a-service. Google acquired Firebase in 2014 and it now powers over 3 million apps worldwide!",quiz:[{q:"What is the first step to add Firebase to a Flutter project?",opts:["Import firebase_core","Run flutterfire configure to generate configuration","Add google-services.json manually","Create a Firebase account"],ans:1},{q:"What does FirebaseAuth.instance.authStateChanges() return?",opts:["A Future with the current user","A Stream that emits whenever the user signs in or out","A list of all users","The user's password"],ans:1},{q:"How does team_mvp_kit use Firebase Auth with its backend?",opts:["Firebase IS the backend","Firebase Auth provides social sign-in, then the ID token is sent to the backend for its own JWT tokens","Firebase stores all user data","Firebase replaces the REST API"],ans:1},{q:"What does Crashlytics do?",opts:["Crashes the app for testing","Automatically captures and reports app crashes to the Firebase console","Adds crash animations","Prevents all crashes"],ans:1},{q:"When should Firebase.initializeApp() be called?",opts:["After runApp()","In any widget's build method","In main() before any Firebase service is used","It is called automatically"],ans:2}],challenge:"Set up Firebase in a Flutter project: run flutterfire configure, initialize Firebase in main(), set up Crashlytics error handlers, and create a simple email/password sign-up and sign-in flow. Display the user's UID after signing in.",resources:[{type:"docs",title:"FlutterFire Overview",url:"https://firebase.flutter.dev/docs/overview",source:"FlutterFire"},{type:"docs",title:"Firebase Auth for Flutter",url:"https://firebase.flutter.dev/docs/auth/overview",source:"FlutterFire"},{type:"docs",title:"Firebase Crashlytics for Flutter",url:"https://firebase.flutter.dev/docs/crashlytics/overview",source:"FlutterFire"}],eli5:"Imagine you are opening a lemonade stand. Instead of building your own cash register, security cameras, and customer list from scratch, you rent them all from a big company called Firebase. Their cash register (Auth) remembers who your customers are. Their security camera (Crashlytics) tells you if anything breaks. And you can change your menu board (Remote Config) without rebuilding the whole stand!",codeWalkthrough:["Import firebase_core for initialization","Import firebase_auth for authentication","Import firebase_crashlytics for crash reporting","Import the generated Firebase config for this project","","Comment: App initialization with all Firebase services","Main function marked as async for await calls","Ensure Flutter is ready before async operations","","Comment: Initialize Firebase with platform-specific config","Call Firebase.initializeApp with the generated options","DefaultFirebaseOptions.currentPlatform picks Android/iOS/web config","Closing the Firebase.initializeApp call","","Comment: Set up Crashlytics to catch all errors","Assign Flutter framework errors to Crashlytics recorder","Closing the FlutterError.onError assignment","","Set up platform error handler for async Dart errors","Record the error and stack trace to Crashlytics","Return true to mark the error as handled","Closing the PlatformDispatcher setup","","Initialize dependency injection (after Firebase is ready)","Start the app","Closing main","","Comment: FirebaseAuthService wraps FirebaseAuth","@lazySingleton for DI registration","Class declaration","Private FirebaseAuth instance (injected)","Constructor receives FirebaseAuth","","Comment: Current user access","Getter returns the currently signed-in user or null","Getter checks if a user is signed in","","Comment: Auth state stream for reactive listening","Returns the authStateChanges stream from FirebaseAuth","Closing the getter","","Comment: Email/password registration","signUpWithEmail method with required email and password","Calls FirebaseAuth createUserWithEmailAndPassword","Passes email and password","Closing the method","","Comment: Email/password sign in","signInWithEmail method with required email and password","Calls FirebaseAuth signInWithEmailAndPassword","Passes email and password","Closing the method","","Comment: Get Firebase ID token for backend exchange","getIdToken returns the current user's ID token","Calls getIdToken on the current user (null-safe)","Closing the method","","Comment: Sign out","signOut method clears the Firebase session","Calls signOut on FirebaseAuth instance","Closing signOut and FirebaseAuthService","","Comment: Module to provide Firebase instances to DI","@module annotation for third-party dependencies","Abstract class for the module","@singleton provides one FirebaseAuth instance","Returns FirebaseAuth.instance","","@singleton provides one Crashlytics instance","Returns FirebaseCrashlytics.instance","Closing the module"],bugChallenge:{code:"void main() {\n  runApp(const MyApp());\n  Firebase.initializeApp(\n    options: DefaultFirebaseOptions.currentPlatform,\n  );\n}",hint:"Think about the order of operations and async requirements...",answer:"Three bugs: 1) main() is not async and Firebase.initializeApp is not awaited. 2) Firebase.initializeApp is called AFTER runApp -- it must be before. 3) WidgetsFlutterBinding.ensureInitialized() is missing, which is required before any async operations in main(). Fix: add async, add WidgetsFlutterBinding.ensureInitialized(), await Firebase.initializeApp() BEFORE runApp()."},difficulty:"intermediate",prereqs:[4]},
{id:48,title:"Social Login",subtitle:"Sign In with Google & Apple",analogy:"Social login is like using your library card at a partner bookstore. Instead of creating a brand new account at the bookstore (your app), you show your library card (Google/Apple account). The bookstore calls the library to confirm you are real (token verification), then gives you a bookstore loyalty card (your app's tokens). One less password to remember!",points:[{t:"Why Social Login?",d:"Social login reduces friction -- users tap one button instead of filling out a registration form. It reduces abandoned signups by up to 50%. Users trust Google and Apple with their credentials. team_mvp_kit supports both Google Sign-In and Apple Sign-In through Firebase Auth.",code:"// Without social login:\n// 1. User types email\n// 2. User creates password\n// 3. User confirms password\n// 4. User verifies email\n// 5. User logs in\n\n// With social login:\n// 1. User taps 'Sign in with Google'\n// 2. Done! (one tap)"},{t:"Google Sign-In Flow",d:"The Google Sign-In flow: 1) User taps the Google button, 2) Google SDK shows account picker, 3) User selects their Google account, 4) SDK returns a GoogleSignInAuthentication with an ID token, 5) You create a Firebase credential from it, 6) Sign in to Firebase with that credential.",code:"import 'package:google_sign_in/google_sign_in.dart';\nimport 'package:firebase_auth/firebase_auth.dart';\n\nFuture<UserCredential> signInWithGoogle() async {\n  // 1. Trigger Google sign-in flow\n  final googleUser = await GoogleSignIn().signIn();\n  if (googleUser == null) throw Exception('Cancelled');\n\n  // 2. Get auth tokens from Google\n  final googleAuth = await googleUser.authentication;\n\n  // 3. Create Firebase credential\n  final credential = GoogleAuthProvider.credential(\n    accessToken: googleAuth.accessToken,\n    idToken: googleAuth.idToken,\n  );\n\n  // 4. Sign in to Firebase\n  return FirebaseAuth.instance.signInWithCredential(credential);\n}"},{t:"Apple Sign-In Flow",d:"Apple Sign-In is required on iOS if you offer any other social login. The flow is similar to Google but uses the sign_in_with_apple package. Apple returns an authorization with an identityToken that you use to create a Firebase OAuthCredential.",code:"import 'package:sign_in_with_apple/sign_in_with_apple.dart';\nimport 'package:firebase_auth/firebase_auth.dart';\n\nFuture<UserCredential> signInWithApple() async {\n  // 1. Trigger Apple sign-in\n  final appleCredential =\n      await SignInWithApple.getAppleIDCredential(\n    scopes: [\n      AppleIDAuthorizationScopes.email,\n      AppleIDAuthorizationScopes.fullName,\n    ],\n  );\n\n  // 2. Create Firebase credential\n  final oauthCredential = OAuthProvider('apple.com').credential(\n    idToken: appleCredential.identityToken,\n    accessToken: appleCredential.authorizationCode,\n  );\n\n  // 3. Sign in to Firebase\n  return FirebaseAuth.instance.signInWithCredential(oauthCredential);\n}"},{t:"Backend Token Exchange",d:"After Firebase sign-in, your app gets a Firebase ID token. Send this to YOUR backend server. The backend verifies it with Firebase Admin SDK, creates or finds the user in its database, and returns your app's own access and refresh tokens. This is the pattern team_mvp_kit uses.",code:"Future<void> exchangeFirebaseToken() async {\n  // Get Firebase ID token\n  final firebaseUser = FirebaseAuth.instance.currentUser;\n  final idToken = await firebaseUser?.getIdToken();\n\n  if (idToken == null) throw Exception('No Firebase token');\n\n  // Send to your backend\n  final response = await dio.post('/auth/social', data: {\n    'firebase_token': idToken,\n    'provider': 'google', // or 'apple'\n  });\n\n  // Save your app's tokens\n  final tokens = TokensDto.fromJson(response.data);\n  await tokenStorage.saveTokens(tokens);\n}"},{t:"FirebaseSocialAuthService in team_mvp_kit",d:"team_mvp_kit has a dedicated FirebaseSocialAuthService that handles both Google and Apple sign-in, gets the Firebase ID token, exchanges it with the backend, and saves the resulting tokens. It is injected as a @lazySingleton and used by the AuthRepository.",code:"@lazySingleton\nclass FirebaseSocialAuthService {\n  final FirebaseAuth _auth;\n  final GoogleSignIn _googleSignIn;\n  final ApiService _api;\n  final TokenStorage _tokenStorage;\n\n  FirebaseSocialAuthService(\n    this._auth,\n    this._googleSignIn,\n    this._api,\n    this._tokenStorage,\n  );\n\n  Future<User> signInWithGoogle() async {\n    final credential = await _googleSignIn();\n    final firebaseUser = await _signInToFirebase(credential);\n    return _exchangeToken(firebaseUser, 'google');\n  }\n\n  Future<User> signInWithApple() async {\n    final credential = await _appleSignIn();\n    final firebaseUser = await _signInToFirebase(credential);\n    return _exchangeToken(firebaseUser, 'apple');\n  }\n}"},{t:"Handling Sign-In Errors",d:"Social sign-in can fail in many ways: user cancels, network error, account already linked to another provider, or Firebase configuration issues. Handle each case gracefully and show clear messages. team_mvp_kit wraps these in typed Failure objects using the Result pattern.",code:"Future<Result<User>> signInWithGoogle() async {\n  try {\n    final googleUser = await GoogleSignIn().signIn();\n    if (googleUser == null) {\n      return Result.failure(Failure.cancelled());\n    }\n\n    final auth = await googleUser.authentication;\n    final credential = GoogleAuthProvider.credential(\n      accessToken: auth.accessToken,\n      idToken: auth.idToken,\n    );\n\n    final userCred = await _auth.signInWithCredential(credential);\n    final user = await _exchangeToken(userCred.user!, 'google');\n    return Result.success(user);\n  } on FirebaseAuthException catch (e) {\n    if (e.code == 'account-exists-with-different-credential') {\n      return Result.failure(Failure.accountExists());\n    }\n    return Result.failure(Failure.auth(e.message));\n  } catch (e) {\n    return Result.failure(Failure.unknown(e.toString()));\n  }\n}"},{t:"Apple Sign-In Requirements",d:"Apple requires that any iOS app offering third-party login (Google, Facebook) must also offer Apple Sign-In. Apple Sign-In is not available on Android devices, so show the Apple button only on iOS. Use Platform.isIOS or the TargetPlatform check to conditionally display it.",code:"import 'dart:io' show Platform;\n\n// In your login screen widget:\nColumn(\n  children: [\n    // Google button - always shown\n    ElevatedButton.icon(\n      onPressed: () => bloc.add(GoogleSignInEvent()),\n      icon: Image.asset('assets/google_logo.png', height: 24),\n      label: Text('Sign in with Google'),\n    ),\n\n    // Apple button - iOS only\n    if (Platform.isIOS)\n      ElevatedButton.icon(\n        onPressed: () => bloc.add(AppleSignInEvent()),\n        icon: Icon(Icons.apple),\n        label: Text('Sign in with Apple'),\n      ),\n  ],\n)"},{t:"Sign Out from All Providers",d:"When the user logs out, you must sign out from Firebase AND from the social provider (Google). If you only sign out from Firebase, the next Google sign-in will auto-select the same account without showing the account picker. team_mvp_kit signs out from all providers in the LogoutUseCase.",code:"Future<void> signOut() async {\n  // 1. Sign out from Google (clears cached account)\n  await GoogleSignIn().signOut();\n\n  // 2. Sign out from Firebase\n  await FirebaseAuth.instance.signOut();\n\n  // 3. Clear your app's tokens\n  await tokenStorage.clearTokens();\n\n  // 4. Clear cached data\n  await localDatabase.clear();\n\n  // Now the next sign-in will show the account picker\n}"}],whatIs:"Social login lets users sign in with their Google or Apple accounts instead of creating a new username and password. In team_mvp_kit, the flow is: user taps Google/Apple button -> Firebase Auth authenticates them -> app gets a Firebase ID token -> sends it to the backend -> backend verifies and returns app-specific JWT tokens -> tokens are saved locally.",realWorld:"team_mvp_kit's FirebaseSocialAuthService orchestrates the entire social login flow. Google Sign-In and Apple Sign-In are the two most popular providers. Apple Sign-In is mandatory on iOS if you offer any other social login. The backend token exchange pattern lets you use Firebase for the easy social auth part while keeping your own user database and token system.",code:`import 'package:google_sign_in/google_sign_in.dart';
import 'package:sign_in_with_apple/sign_in_with_apple.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:injectable/injectable.dart';

// FirebaseSocialAuthService (team_mvp_kit pattern)
@lazySingleton
class FirebaseSocialAuthService {
  final FirebaseAuth _auth;
  final GoogleSignIn _googleSignIn;
  final ApiService _api;
  final TokenStorage _tokenStorage;

  FirebaseSocialAuthService(
    this._auth,
    this._googleSignIn,
    this._api,
    this._tokenStorage,
  );

  // Google Sign-In
  Future<AppUser> signInWithGoogle() async {
    // Step 1: Google account picker
    final googleUser = await _googleSignIn.signIn();
    if (googleUser == null) {
      throw AuthCancelledException();
    }

    // Step 2: Get Google auth tokens
    final googleAuth = await googleUser.authentication;

    // Step 3: Create Firebase credential
    final credential = GoogleAuthProvider.credential(
      accessToken: googleAuth.accessToken,
      idToken: googleAuth.idToken,
    );

    // Step 4: Sign in to Firebase
    final userCredential =
        await _auth.signInWithCredential(credential);

    // Step 5: Exchange Firebase token with backend
    return _exchangeWithBackend(
      userCredential.user!,
      'google',
    );
  }

  // Apple Sign-In
  Future<AppUser> signInWithApple() async {
    // Step 1: Apple authorization
    final appleCredential =
        await SignInWithApple.getAppleIDCredential(
      scopes: [
        AppleIDAuthorizationScopes.email,
        AppleIDAuthorizationScopes.fullName,
      ],
    );

    // Step 2: Create Firebase credential
    final oauthCredential =
        OAuthProvider('apple.com').credential(
      idToken: appleCredential.identityToken,
      accessToken: appleCredential.authorizationCode,
    );

    // Step 3: Sign in to Firebase
    final userCredential =
        await _auth.signInWithCredential(oauthCredential);

    // Step 4: Exchange with backend
    return _exchangeWithBackend(
      userCredential.user!,
      'apple',
    );
  }

  // Exchange Firebase ID token for app tokens
  Future<AppUser> _exchangeWithBackend(
    User firebaseUser,
    String provider,
  ) async {
    final idToken = await firebaseUser.getIdToken();

    final response = await _api.post('/auth/social', data: {
      'firebase_token': idToken,
      'provider': provider,
    });

    // Save app tokens
    final tokens = TokensDto.fromJson(response['tokens']);
    await _tokenStorage.saveTokens(tokens);

    // Return app user
    return AppUser.fromJson(response['user']);
  }

  // Sign out from everything
  Future<void> signOut() async {
    await _googleSignIn.signOut();
    await _auth.signOut();
    await _tokenStorage.clearTokens();
  }
}`,funFact:"Apple made Sign in with Apple mandatory in 2020 for any iOS app that offers third-party login. This was partly for privacy -- Apple generates a unique relay email address for each app, so apps never see your real email. Google Sign-In, on the other hand, has been available since 2014 and is used by over 2 million apps!",quiz:[{q:"Why is Apple Sign-In required on iOS?",opts:["Apple sells it as a service","Apple requires it if you offer any other social login method","It is faster than Google Sign-In","Apple Sign-In is not required"],ans:1},{q:"What is the backend token exchange pattern?",opts:["The backend sends tokens to Firebase","The app sends the Firebase ID token to its backend, which verifies it and returns app-specific JWT tokens","Firebase and the backend share the same tokens","The backend calls Google directly"],ans:1},{q:"What happens if the user cancels Google Sign-In?",opts:["The app crashes","GoogleSignIn().signIn() returns null","An error is thrown automatically","The user is logged in anonymously"],ans:1},{q:"Why should you call GoogleSignIn().signOut() when logging out?",opts:["To delete the Google account","So the next sign-in shows the account picker instead of auto-selecting","To revoke all Google permissions","Google requires it"],ans:1},{q:"In team_mvp_kit, where does the FirebaseSocialAuthService live architecturally?",opts:["In the domain layer","In the presentation layer","In the data/infrastructure layer as a @lazySingleton","In the main.dart file"],ans:2}],challenge:"Implement a complete Google Sign-In flow: create a FirebaseSocialAuthService, handle the sign-in, get the Firebase ID token, and simulate a backend token exchange. Handle the case where the user cancels. Add an Apple Sign-In method that is only shown on iOS.",resources:[{type:"docs",title:"Google Sign-In for Flutter",url:"https://pub.dev/packages/google_sign_in",source:"pub.dev"},{type:"docs",title:"Sign In with Apple for Flutter",url:"https://pub.dev/packages/sign_in_with_apple",source:"pub.dev"},{type:"docs",title:"Firebase Auth Social Login",url:"https://firebase.flutter.dev/docs/auth/social",source:"FlutterFire"}],eli5:"Imagine you want to join a new sports club. Instead of filling out a long form with your name, address, and photo, you say 'I already have a library card!' The sports club calls the library to check if you are real. The library says 'Yep, that is Alice, age 10, she is a real person!' Then the sports club gives you their own membership card. That is social login -- using an account you already have (Google or Apple) to join a new app without creating a new password!",codeWalkthrough:["Import google_sign_in package for Google authentication","Import sign_in_with_apple for Apple authentication","Import firebase_auth for Firebase credential handling","Import injectable for dependency injection","","Comment: This is the team_mvp_kit pattern for social auth","@lazySingleton registers one instance for the app","Class declaration for FirebaseSocialAuthService","Private field for FirebaseAuth instance","Private field for GoogleSignIn instance","Private field for ApiService to call the backend","Private field for TokenStorage to save tokens","","Constructor receives all four dependencies via DI","Closing the constructor","","Comment: Google Sign-In method","Method returns an AppUser (your domain entity)","Comment: Step 1","Trigger the Google account picker UI","If user cancelled (returned null), throw exception","The AuthCancelledException signals the BLoC to handle it","Closing the cancel check","","Comment: Step 2","Get the Google auth tokens from the selected account","","Comment: Step 3","Create a Firebase credential from Google tokens","Pass the Google access token","Pass the Google ID token","Closing the credential creation","","Comment: Step 4","Sign in to Firebase with the Google credential","Closing the Firebase sign-in","","Comment: Step 5","Exchange the Firebase token with the backend","Pass the Firebase user and provider name","Closing signInWithGoogle","","Comment: Apple Sign-In method","Method returns an AppUser","Comment: Step 1","Request Apple authorization with scopes","Request email scope","Request full name scope","Closing the scopes and credential request","","Comment: Step 2","Create a Firebase OAuth credential for Apple","Set the Apple identity token as idToken","Set the authorization code as accessToken","Closing the credential creation","","Comment: Step 3","Sign in to Firebase with the Apple credential","Closing the Firebase sign-in","","Comment: Step 4","Exchange with backend (same flow as Google)","Pass the Firebase user and 'apple' as provider","Closing signInWithApple","","Comment: Private method to exchange Firebase token for app tokens","Method takes a Firebase User and provider string","Get the Firebase ID token from the user","","Send the ID token to the backend /auth/social endpoint","Include the Firebase token in the request body","Include which provider was used (google or apple)","Closing the API call","","Comment: Save the app tokens received from backend","Parse the tokens from the response","Save them to encrypted storage","","Comment: Return the app user","Parse and return the user data from the response","Closing _exchangeWithBackend","","Comment: Sign out from all providers","signOut method clears everything","Sign out from Google (clears cached account selection)","Sign out from Firebase","Clear app-specific tokens from storage","Closing signOut and FirebaseSocialAuthService"],bugChallenge:{code:"Future<UserCredential> signInWithGoogle() async {\n  final googleAuth = await GoogleSignIn().signIn();\n  final credential = GoogleAuthProvider.credential(\n    accessToken: googleAuth.accessToken,\n    idToken: googleAuth.idToken,\n  );\n  return FirebaseAuth.instance.signInWithCredential(credential);\n}",hint:"GoogleSignIn().signIn() returns a GoogleSignInAccount, not the auth tokens directly. There is a missing step...",answer:"GoogleSignIn().signIn() returns a GoogleSignInAccount (not GoogleSignInAuthentication). You need to call .authentication on the account to get the tokens. Also, signIn() can return null if cancelled. Fix: add a null check, then call 'final googleAuth = await googleUser.authentication;' before creating the credential."},difficulty:"advanced",prereqs:[47,43]},
{id:49,title:"Error Handling & Result Pattern",subtitle:"Failing Gracefully Like a Pro",analogy:"Imagine you are a pilot. You do not just hope nothing goes wrong -- you have checklists for every possible failure. Engine out? Checklist. Radio fails? Checklist. The Result pattern is your app's checklist system. Instead of crashing when something unexpected happens, your code says 'okay, this failed, here is exactly what went wrong and here is plan B.' Every function returns either a Success (smooth landing) or a Failure (specific error with recovery instructions).",points:[{t:"The Problem with try-catch Everywhere",d:"Using try-catch in every function leads to messy code where error handling logic is scattered everywhere. You never know if a function might throw. Callers forget to wrap calls in try-catch. Exceptions are invisible in function signatures. The Result pattern makes errors explicit and forces callers to handle them.",code:"// BAD: Exceptions are invisible and easy to forget\nFuture<User> getUser(int id) async {\n  final response = await dio.get('/users/$id');\n  return User.fromJson(response.data); // Might throw!\n}\n\n// Caller forgets try-catch -> app crashes\nfinal user = await getUser(42); // What if network fails?\n\n// GOOD: Result makes errors explicit\nFuture<Result<User>> getUser(int id) async {\n  // Caller MUST handle both success and failure\n}"},{t:"The Result Class",d:"Result<T> is a sealed class with two subtypes: Success<T> (holds the data) and Failure (holds error info). Every function that can fail returns a Result. The caller uses fold(), isSuccess, or pattern matching to handle both cases. This is the core error handling pattern in team_mvp_kit.",code:"sealed class Result<T> {\n  const Result();\n\n  factory Result.success(T data) = Success<T>;\n  factory Result.failure(Failure failure) = ResultFailure<T>;\n\n  bool get isSuccess => this is Success<T>;\n  bool get isFailure => this is ResultFailure<T>;\n\n  T? get data => isSuccess ? (this as Success<T>).data : null;\n  Failure? get failure =>\n      isFailure ? (this as ResultFailure<T>).failure : null;\n\n  R fold<R>({\n    required R Function(T data) onSuccess,\n    required R Function(Failure failure) onFailure,\n  }) {\n    if (this is Success<T>) return onSuccess((this as Success<T>).data);\n    return onFailure((this as ResultFailure<T>).failure);\n  }\n}"},{t:"Success and Failure Subtypes",d:"Success wraps the actual data of type T. ResultFailure wraps a Failure object that describes what went wrong. These are immutable data classes. Using equatable makes them easy to test and compare.",code:"class Success<T> extends Result<T> {\n  final T data;\n  const Success(this.data);\n}\n\nclass ResultFailure<T> extends Result<T> {\n  final Failure failure;\n  const ResultFailure(this.failure);\n}\n\n// Usage:\nfinal result = Result.success(User(id: 1, name: 'Alice'));\nfinal error = Result<User>.failure(\n  Failure.network('No internet connection'),\n);"},{t:"Typed Failure Classes",d:"Instead of generic error strings, team_mvp_kit defines specific Failure types for different error categories. NetworkFailure for connection issues, ServerFailure for API errors, AuthFailure for authentication problems, ValidationFailure for form errors. Each carries context about what went wrong.",code:"class Failure {\n  final String message;\n  final int? statusCode;\n  final dynamic originalError;\n\n  const Failure({\n    required this.message,\n    this.statusCode,\n    this.originalError,\n  });\n\n  factory Failure.network(String message) =>\n      Failure(message: message);\n\n  factory Failure.server(String message, int statusCode) =>\n      Failure(message: message, statusCode: statusCode);\n\n  factory Failure.auth(String message) =>\n      Failure(message: message, statusCode: 401);\n\n  factory Failure.notFound(String resource) =>\n      Failure(message: '$resource not found', statusCode: 404);\n\n  factory Failure.unknown([dynamic error]) =>\n      Failure(message: 'An unexpected error occurred',\n             originalError: error);\n}"},{t:"Using Result in Repositories",d:"Repositories wrap API calls in try-catch and return Result. Success path returns Result.success with the data. Error path maps DioExceptions to specific Failure types. This keeps all error mapping logic in one place instead of scattered across the app.",code:"@LazySingleton(as: UserRepository)\nclass UserRepositoryImpl implements UserRepository {\n  final ApiService _api;\n  UserRepositoryImpl(this._api);\n\n  @override\n  Future<Result<User>> getUser(int id) async {\n    try {\n      final json = await _api.get('/users/$id');\n      final dto = UserDto.fromJson(json);\n      return Result.success(User(\n        id: dto.id, name: dto.fullName,\n      ));\n    } on DioException catch (e) {\n      return Result.failure(_mapDioError(e));\n    } catch (e) {\n      return Result.failure(Failure.unknown(e));\n    }\n  }\n\n  Failure _mapDioError(DioException e) {\n    if (e.type == DioExceptionType.connectionError) {\n      return Failure.network('No internet connection');\n    }\n    final code = e.response?.statusCode;\n    if (code == 404) return Failure.notFound('User');\n    if (code == 401) return Failure.auth('Session expired');\n    return Failure.server('Server error', code ?? 500);\n  }\n}"},{t:"Using Result in BLoCs",d:"BLoCs receive Results from use cases and emit appropriate states. The fold method is perfect here -- on success, emit a loaded state with data; on failure, emit an error state with the failure message. This makes BLoC event handlers clean and consistent.",code:"class UserBloc extends Bloc<UserEvent, UserState> {\n  final GetUserUseCase _getUser;\n\n  UserBloc(this._getUser) : super(UserInitial()) {\n    on<LoadUser>(_onLoadUser);\n  }\n\n  Future<void> _onLoadUser(\n    LoadUser event, Emitter<UserState> emit,\n  ) async {\n    emit(UserLoading());\n\n    final result = await _getUser(event.userId);\n\n    result.fold(\n      onSuccess: (user) => emit(UserLoaded(user)),\n      onFailure: (failure) => emit(UserError(failure.message)),\n    );\n  }\n}"},{t:"Mapping Errors to User Messages",d:"Not every error should show the raw technical message to users. Map failures to user-friendly messages. Network failures become 'Please check your internet connection.' Server errors become 'Something went wrong, please try again.' Auth failures become 'Please sign in again.'",code:"String toUserMessage(Failure failure) {\n  if (failure.statusCode == 401) {\n    return 'Your session has expired. Please sign in again.';\n  }\n  if (failure.statusCode == 404) {\n    return 'The requested item was not found.';\n  }\n  if (failure.statusCode != null && failure.statusCode! >= 500) {\n    return 'Something went wrong on our end. Please try again.';\n  }\n  if (failure.message.contains('internet') ||\n      failure.message.contains('connection')) {\n    return 'Please check your internet connection.';\n  }\n  return 'An unexpected error occurred. Please try again.';\n}"},{t:"Result Extensions for Convenience",d:"Add extension methods on Result for common transformations: map to transform the success value, mapFailure to transform the failure, getOrElse to provide a default value, and getOrThrow to unwrap or throw. These make working with Result ergonomic and expressive.",code:"extension ResultExtensions<T> on Result<T> {\n  // Transform the success value\n  Result<R> map<R>(R Function(T data) transform) {\n    return fold(\n      onSuccess: (data) => Result.success(transform(data)),\n      onFailure: (failure) => Result.failure(failure),\n    );\n  }\n\n  // Get value or default\n  T getOrElse(T defaultValue) {\n    return fold(\n      onSuccess: (data) => data,\n      onFailure: (_) => defaultValue,\n    );\n  }\n\n  // Get value or throw\n  T getOrThrow() {\n    return fold(\n      onSuccess: (data) => data,\n      onFailure: (failure) => throw Exception(failure.message),\n    );\n  }\n}"}],whatIs:"The Result pattern replaces scattered try-catch blocks with explicit return types. Every function that can fail returns Result<T> which is either Success(data) or Failure(error). This makes errors visible in function signatures, forces callers to handle both cases, and centralizes error mapping. team_mvp_kit uses this pattern in all repositories and use cases.",realWorld:"In team_mvp_kit, every repository method returns Result<T>. The repository maps DioExceptions to typed Failures (network, server, auth, not found). Use cases pass Results to BLoCs. BLoCs use fold() to emit loaded or error states. Error messages are mapped to user-friendly text before displaying. This chain ensures no error is silently swallowed.",code:`// 1. Result sealed class (team_mvp_kit pattern)
sealed class Result<T> {
  const Result();

  factory Result.success(T data) = Success<T>;
  factory Result.failure(Failure failure) = ResultFailure<T>;

  bool get isSuccess => this is Success<T>;
  bool get isFailure => this is ResultFailure<T>;

  R fold<R>({
    required R Function(T data) onSuccess,
    required R Function(Failure failure) onFailure,
  }) {
    if (this is Success<T>) {
      return onSuccess((this as Success<T>).data);
    }
    return onFailure((this as ResultFailure<T>).failure);
  }
}

class Success<T> extends Result<T> {
  final T data;
  const Success(this.data);
}

class ResultFailure<T> extends Result<T> {
  final Failure failure;
  const ResultFailure(this.failure);
}

// 2. Failure class with factory constructors
class Failure {
  final String message;
  final int? statusCode;

  const Failure({required this.message, this.statusCode});

  factory Failure.network(String msg) =>
      Failure(message: msg);
  factory Failure.server(String msg, int code) =>
      Failure(message: msg, statusCode: code);
  factory Failure.auth(String msg) =>
      Failure(message: msg, statusCode: 401);
  factory Failure.notFound(String resource) =>
      Failure(message: '\$resource not found', statusCode: 404);
}

// 3. Repository using Result
class UserRepositoryImpl implements UserRepository {
  final ApiService _api;
  UserRepositoryImpl(this._api);

  Future<Result<User>> getUser(int id) async {
    try {
      final json = await _api.get('/users/\$id');
      final user = User.fromJson(json);
      return Result.success(user);
    } on DioException catch (e) {
      if (e.type == DioExceptionType.connectionError) {
        return Result.failure(
          Failure.network('No internet connection'),
        );
      }
      return Result.failure(
        Failure.server(
          'Server error',
          e.response?.statusCode ?? 500,
        ),
      );
    } catch (e) {
      return Result.failure(
        Failure(message: 'Unexpected error'),
      );
    }
  }
}

// 4. BLoC consuming Result with fold
class UserBloc extends Bloc<UserEvent, UserState> {
  final UserRepository _repo;

  UserBloc(this._repo) : super(UserInitial()) {
    on<LoadUser>((event, emit) async {
      emit(UserLoading());

      final result = await _repo.getUser(event.userId);

      result.fold(
        onSuccess: (user) => emit(UserLoaded(user)),
        onFailure: (f) => emit(UserError(f.message)),
      );
    });
  }
}`,funFact:"The Result pattern (also called Either in functional programming) was popularized by languages like Rust (Result<T, E>), Kotlin (Result<T>), and Swift (Result<Success, Failure>). Dart does not have a built-in Result type, but the community has embraced it so much that there are multiple packages for it, including dartz and fpdart. team_mvp_kit implements its own simple version to avoid external dependencies!",quiz:[{q:"What is the main advantage of the Result pattern over try-catch?",opts:["It is faster","Errors become explicit in function signatures, forcing callers to handle them","It uses less memory","It prevents all errors"],ans:1},{q:"What does result.fold() do?",opts:["Folds the data in half","Calls one function for success and another for failure, returning the result","Converts Result to a String","Combines two Results"],ans:1},{q:"Where in team_mvp_kit is try-catch typically used?",opts:["In widgets","In BLoCs","In repositories, where DioExceptions are caught and mapped to Failures","In main.dart only"],ans:2},{q:"What does Result.failure(Failure.network('No internet')) represent?",opts:["A successful response with no internet data","A failed operation due to a network connectivity issue","A network request that returned successfully","An internet speed test result"],ans:1},{q:"Why create typed Failure factories like Failure.auth() and Failure.notFound()?",opts:["To make the code longer","To categorize errors so they can be handled differently and shown as user-friendly messages","They are required by Dart","To avoid using strings"],ans:1}],challenge:"Implement a complete Result<T> sealed class with Success and ResultFailure subtypes. Create a Failure class with network, server, auth, and notFound factories. Then refactor a simple repository method to return Result<List<Post>> instead of throwing exceptions. Use fold() in a BLoC to emit success or error states.",resources:[{type:"docs",title:"Sealed Classes in Dart",url:"https://dart.dev/language/class-modifiers#sealed",source:"Dart Official"},{type:"docs",title:"Error Handling in Dart",url:"https://dart.dev/language/error-handling",source:"Dart Official"},{type:"docs",title:"fpdart - Functional Programming in Dart",url:"https://pub.dev/packages/fpdart",source:"pub.dev"}],eli5:"Imagine every time you ask your friend a question, they either give you an answer (success) or say 'I do not know because...' with a reason (failure). You always get ONE of those two responses, never silence or a surprise. That is the Result pattern. Instead of your app suddenly crashing with a mysterious error, every operation politely says either 'Here is your data!' or 'Sorry, this went wrong because X.' And you always check which one you got before doing anything with it!",codeWalkthrough:["Comment: Result sealed class based on team_mvp_kit","sealed class means only defined subtypes can extend it","Const constructor for immutability","","Factory constructor for creating a Success result","Factory constructor for creating a Failure result","","Boolean check if this Result is a Success","Boolean check if this Result is a Failure","","fold method that handles both cases with callbacks","Takes an onSuccess function for the success case","Takes an onFailure function for the failure case","If this is a Success, call onSuccess with the data","Otherwise, call onFailure with the failure","Closing fold and Result class","","Success subtype holds the actual data of type T","The data field contains the success value","Const constructor for immutability","Closing Success class","","ResultFailure subtype holds the error information","The failure field contains what went wrong","Const constructor for immutability","Closing ResultFailure class","","Comment: Failure class with descriptive factory constructors","Failure class with message and optional status code","The message describes what went wrong","Optional HTTP status code for API errors","","Constructor with required message and optional statusCode","","Factory for network errors (no internet, timeout)","Factory for server errors with status code","Factory for authentication errors (401)","Factory for not found errors (404)","Closing Failure class","","Comment: Repository that returns Result instead of throwing","Class implements the abstract UserRepository","Private ApiService field for API calls","Constructor receives the API service","","getUser method returns Result instead of raw User","Try block wraps the API call","Fetch user JSON from the API","Parse JSON into a User object","Return wrapped in Result.success","Catch DioException for network and server errors","Check for connection errors specifically","Return network failure with descriptive message","Closing the connection error check","Return server failure for other Dio errors","Include the status code from the response","Closing the DioException catch","Catch any other unexpected errors","Return a generic failure message","Closing the catch-all and getUser method","Closing UserRepositoryImpl","","Comment: BLoC that consumes Result with fold","UserBloc class declaration","Private repository field","","Constructor sets up event handlers","Register handler for LoadUser events","Emit loading state first","","Call the repository which returns Result","","Use fold to handle both outcomes","On success: emit UserLoaded with the user data","On failure: emit UserError with the failure message","Closing fold, event handler, and UserBloc"],bugChallenge:{code:"Future<Result<User>> getUser(int id) async {\n  try {\n    final json = await _api.get('/users/$id');\n    final user = User.fromJson(json);\n    return Result.success(user);\n  } on DioException catch (e) {\n    return Result.failure(Failure.network(e.message ?? ''));\n  }\n}\n\n// In BLoC:\nfinal result = await _repo.getUser(42);\nemit(UserLoaded(result.data));",hint:"Look at how the BLoC uses the result. Is it handling the failure case?",answer:"The BLoC accesses result.data directly without checking if the result is a success or failure. If the result is a Failure, result.data will be null and UserLoaded will receive null. Fix: use result.fold(onSuccess: (user) => emit(UserLoaded(user)), onFailure: (f) => emit(UserError(f.message))). Also, the repository only catches DioException but not other errors (e.g., JSON parsing errors). Add a generic catch(e) block."},difficulty:"advanced",prereqs:[37]},
{id:50,title:"Testing & Debugging",subtitle:"Proving Your Code Works",analogy:"Testing is like being a detective who checks their own work. You write a suspect list (test cases), examine each suspect (function), and verify their alibi (expected output). Unit tests check individual suspects. Widget tests check if suspects work together. Mocktail creates fake witnesses so you can test suspects in isolation. If all alibis check out, your case (app) is solid!",points:[{t:"Why Write Tests?",d:"Tests catch bugs before users do. They let you refactor confidently -- change code and run tests to verify nothing broke. They document how your code should behave. They prevent regressions (old bugs coming back). team_mvp_kit has tests for BLoCs, repositories, and use cases.",code:"// Without tests:\n// 'I changed this function... I THINK it still works?'\n// Deploy -> Users find bugs -> Hotfix at 2 AM\n\n// With tests:\n// 'I changed this function, let me run tests...'\n// All 47 tests pass -> Deploy with confidence!\n\n// Run all tests:\n// flutter test\n\n// Run a specific test file:\n// flutter test test/bloc/user_bloc_test.dart"},{t:"Unit Test Basics with flutter_test",d:"A unit test verifies that a single function or class works correctly in isolation. Use test() to define a test case with a description and a body. Use expect() to assert that actual values match expected values. Group related tests with group().",code:"import 'package:flutter_test/flutter_test.dart';\n\nvoid main() {\n  group('Calculator', () {\n    test('adds two numbers correctly', () {\n      final calc = Calculator();\n      final result = calc.add(2, 3);\n      expect(result, equals(5));\n    });\n\n    test('handles negative numbers', () {\n      final calc = Calculator();\n      expect(calc.add(-1, -2), equals(-3));\n    });\n\n    test('throws on division by zero', () {\n      final calc = Calculator();\n      expect(\n        () => calc.divide(10, 0),\n        throwsA(isA<ArgumentError>()),\n      );\n    });\n  });\n}"},{t:"Mocktail for Mocking Dependencies",d:"Mocktail lets you create fake versions of dependencies so you can test a class in isolation. If your BLoC depends on a Repository, create a MockRepository that returns predefined data. This way you test the BLoC logic without making real API calls.",code:"import 'package:mocktail/mocktail.dart';\nimport 'package:flutter_test/flutter_test.dart';\n\n// Create mock classes\nclass MockUserRepository extends Mock implements UserRepository {}\nclass MockApiService extends Mock implements ApiService {}\n\nvoid main() {\n  late MockUserRepository mockRepo;\n\n  setUp(() {\n    mockRepo = MockUserRepository();\n  });\n\n  test('GetUserUseCase returns user from repository', () async {\n    // Arrange: tell the mock what to return\n    when(() => mockRepo.getUser(42)).thenAnswer(\n      (_) async => Result.success(User(id: 42, name: 'Alice')),\n    );\n\n    // Act: call the code under test\n    final useCase = GetUserUseCase(mockRepo);\n    final result = await useCase(42);\n\n    // Assert: verify the result\n    expect(result.isSuccess, isTrue);\n    expect(result.data?.name, equals('Alice'));\n\n    // Verify the mock was called correctly\n    verify(() => mockRepo.getUser(42)).called(1);\n  });\n}"},{t:"Testing BLoCs with bloc_test",d:"The bloc_test package provides blocTest() for testing BLoC state transitions. You specify the BLoC to create, the event to add (act), and the expected states (expect). It verifies the exact sequence of states emitted. team_mvp_kit tests every BLoC this way.",code:"import 'package:bloc_test/bloc_test.dart';\nimport 'package:mocktail/mocktail.dart';\nimport 'package:flutter_test/flutter_test.dart';\n\nclass MockGetUserUseCase extends Mock implements GetUserUseCase {}\n\nvoid main() {\n  late MockGetUserUseCase mockGetUser;\n\n  setUp(() {\n    mockGetUser = MockGetUserUseCase();\n  });\n\n  blocTest<UserBloc, UserState>(\n    'emits [Loading, Loaded] when LoadUser succeeds',\n    build: () {\n      when(() => mockGetUser(42)).thenAnswer(\n        (_) async => Result.success(\n          User(id: 42, name: 'Alice'),\n        ),\n      );\n      return UserBloc(mockGetUser);\n    },\n    act: (bloc) => bloc.add(LoadUser(42)),\n    expect: () => [\n      UserLoading(),\n      UserLoaded(User(id: 42, name: 'Alice')),\n    ],\n  );\n}"},{t:"Testing Error States",d:"Test that your BLoC handles failures correctly by making the mock return a failure Result. Verify that the BLoC emits a loading state followed by an error state with the correct message. This ensures your error handling actually works.",code:"blocTest<UserBloc, UserState>(\n  'emits [Loading, Error] when LoadUser fails',\n  build: () {\n    when(() => mockGetUser(42)).thenAnswer(\n      (_) async => Result<User>.failure(\n        Failure.network('No internet'),\n      ),\n    );\n    return UserBloc(mockGetUser);\n  },\n  act: (bloc) => bloc.add(LoadUser(42)),\n  expect: () => [\n    UserLoading(),\n    UserError('No internet'),\n  ],\n);\n\nblocTest<UserBloc, UserState>(\n  'emits [Loading, Error] on server failure',\n  build: () {\n    when(() => mockGetUser(42)).thenAnswer(\n      (_) async => Result<User>.failure(\n        Failure.server('Internal error', 500),\n      ),\n    );\n    return UserBloc(mockGetUser);\n  },\n  act: (bloc) => bloc.add(LoadUser(42)),\n  expect: () => [\n    UserLoading(),\n    UserError('Internal error'),\n  ],\n);"},{t:"Arrange, Act, Assert Pattern",d:"Every test follows three steps: Arrange (set up mocks and test data), Act (call the code being tested), Assert (verify the results). This pattern keeps tests readable and organized. In bloc_test, build is Arrange, act is Act, and expect is Assert.",code:"test('repository maps DTO to domain entity correctly', () async {\n  // ARRANGE: Set up mock and test data\n  final mockApi = MockApiService();\n  when(() => mockApi.get('/users/1')).thenAnswer(\n    (_) async => {\n      'id': 1,\n      'full_name': 'Alice Smith',\n      'email': 'alice@example.com',\n    },\n  );\n  final repo = UserRepositoryImpl(mockApi);\n\n  // ACT: Call the method under test\n  final result = await repo.getUser(1);\n\n  // ASSERT: Verify the result\n  expect(result.isSuccess, isTrue);\n  expect(result.data?.name, equals('Alice Smith'));\n  expect(result.data?.id, equals(1));\n  verify(() => mockApi.get('/users/1')).called(1);\n});"},{t:"Widget Testing Basics",d:"Widget tests verify that your UI renders correctly and responds to user interactions. Use pumpWidget() to render a widget, find.text() to locate elements, and tester.tap() to simulate taps. Widget tests run faster than integration tests but slower than unit tests.",code:"import 'package:flutter_test/flutter_test.dart';\n\nvoid main() {\n  testWidgets('Counter increments when button is tapped',\n      (WidgetTester tester) async {\n    // Arrange: render the widget\n    await tester.pumpWidget(\n      const MaterialApp(home: CounterScreen()),\n    );\n\n    // Assert: initial state\n    expect(find.text('0'), findsOneWidget);\n    expect(find.text('1'), findsNothing);\n\n    // Act: tap the increment button\n    await tester.tap(find.byIcon(Icons.add));\n    await tester.pump(); // Rebuild after state change\n\n    // Assert: updated state\n    expect(find.text('0'), findsNothing);\n    expect(find.text('1'), findsOneWidget);\n  });\n}"},{t:"Test Setup and Teardown",d:"Use setUp() to run code before EACH test (create fresh mocks). Use tearDown() to clean up after each test. Use setUpAll() and tearDownAll() for one-time setup. This ensures tests are independent and do not affect each other.",code:"void main() {\n  late MockUserRepository mockRepo;\n  late MockApiService mockApi;\n  late UserBloc bloc;\n\n  setUp(() {\n    // Fresh mocks for each test (no shared state)\n    mockRepo = MockUserRepository();\n    mockApi = MockApiService();\n    bloc = UserBloc(GetUserUseCase(mockRepo));\n  });\n\n  tearDown(() {\n    // Clean up after each test\n    bloc.close();\n  });\n\n  // Register fallback values for mocktail\n  setUpAll(() {\n    registerFallbackValue(LoadUser(0));\n  });\n\n  test('test 1 gets fresh mocks', () { /* ... */ });\n  test('test 2 also gets fresh mocks', () { /* ... */ });\n}"},{t:"Running Tests and Coverage",d:"Run flutter test to execute all tests. Use --coverage to generate a coverage report showing which lines of code are tested. Aim for high coverage on business logic (BLoCs, repositories, use cases) but do not obsess over 100% coverage on every widget.",code:"# Run all tests\n# flutter test\n\n# Run with coverage report\n# flutter test --coverage\n\n# View coverage report (generates HTML)\n# genhtml coverage/lcov.info -o coverage/html\n# open coverage/html/index.html\n\n# Run specific test file\n# flutter test test/bloc/user_bloc_test.dart\n\n# Run tests matching a name pattern\n# flutter test --name 'emits Loading'"}],whatIs:"Testing in Flutter uses flutter_test for assertions, mocktail for creating mock dependencies, and bloc_test for verifying BLoC state transitions. The Arrange-Act-Assert pattern structures every test. Mocks let you test classes in isolation without real APIs or databases. team_mvp_kit tests all BLoCs, use cases, and repositories using these tools.",realWorld:"team_mvp_kit has test files for every BLoC and critical use case. The pattern is: create mocks of dependencies, configure them to return specific data or failures, test that the BLoC emits the correct sequence of states. This catches regressions before they reach production and documents the expected behavior of every feature.",code:`import 'package:flutter_test/flutter_test.dart';
import 'package:bloc_test/bloc_test.dart';
import 'package:mocktail/mocktail.dart';

// 1. Create mock classes
class MockUserRepository extends Mock
    implements UserRepository {}

// 2. Test file for UserBloc
void main() {
  late MockUserRepository mockRepo;
  late UserBloc bloc;

  setUp(() {
    mockRepo = MockUserRepository();
  });

  tearDown(() {
    bloc.close();
  });

  group('UserBloc', () {
    // Test successful user loading
    blocTest<UserBloc, UserState>(
      'emits [Loading, Loaded] when user loads successfully',
      build: () {
        when(() => mockRepo.getUser(any())).thenAnswer(
          (_) async => Result.success(
            User(id: 42, name: 'Alice', email: 'a@b.com',
                 isVerified: true),
          ),
        );
        return UserBloc(mockRepo);
      },
      act: (bloc) => bloc.add(LoadUser(42)),
      expect: () => [
        UserLoading(),
        UserLoaded(
          User(id: 42, name: 'Alice', email: 'a@b.com',
               isVerified: true),
        ),
      ],
      verify: (_) {
        verify(() => mockRepo.getUser(42)).called(1);
      },
    );

    // Test network failure
    blocTest<UserBloc, UserState>(
      'emits [Loading, Error] on network failure',
      build: () {
        when(() => mockRepo.getUser(any())).thenAnswer(
          (_) async => Result<User>.failure(
            Failure.network('No internet connection'),
          ),
        );
        return UserBloc(mockRepo);
      },
      act: (bloc) => bloc.add(LoadUser(42)),
      expect: () => [
        UserLoading(),
        UserError('No internet connection'),
      ],
    );

    // Test server error
    blocTest<UserBloc, UserState>(
      'emits [Loading, Error] on server error',
      build: () {
        when(() => mockRepo.getUser(any())).thenAnswer(
          (_) async => Result<User>.failure(
            Failure.server('Internal error', 500),
          ),
        );
        return UserBloc(mockRepo);
      },
      act: (bloc) => bloc.add(LoadUser(42)),
      expect: () => [
        UserLoading(),
        UserError('Internal error'),
      ],
    );
  });

  // 3. Unit test for repository
  group('UserRepositoryImpl', () {
    late MockApiService mockApi;

    setUp(() {
      mockApi = MockApiService();
    });

    test('returns Success with mapped User on API success',
        () async {
      when(() => mockApi.get('/users/1')).thenAnswer(
        (_) async => {
          'id': 1,
          'full_name': 'Alice',
          'email': 'alice@example.com',
          'is_verified': true,
        },
      );

      final repo = UserRepositoryImpl(mockApi);
      final result = await repo.getUser(1);

      expect(result.isSuccess, isTrue);
      expect(result.data?.name, equals('Alice'));
    });

    test('returns Failure on network error', () async {
      when(() => mockApi.get('/users/1')).thenThrow(
        DioException(
          type: DioExceptionType.connectionError,
          requestOptions: RequestOptions(path: '/users/1'),
        ),
      );

      final repo = UserRepositoryImpl(mockApi);
      final result = await repo.getUser(1);

      expect(result.isFailure, isTrue);
      expect(result.failure?.message,
          contains('internet'));
    });
  });
}`,funFact:"The term 'unit test' was first used in the 1950s, but automated testing became mainstream with Kent Beck's xUnit framework in the 1990s. The Flutter testing ecosystem is remarkably mature -- bloc_test has over 1 million downloads, and mocktail (created by Felix Angelov, the same person who created the bloc package) provides a simpler API than the older mockito package by not requiring code generation!",quiz:[{q:"What does mocktail do?",opts:["Makes cocktail recipes","Creates mock (fake) versions of classes for testing in isolation","Generates test files automatically","Runs tests faster"],ans:1},{q:"In the Arrange-Act-Assert pattern, what is the 'Arrange' step?",opts:["Running the code under test","Checking the results","Setting up mocks and test data before the test runs","Writing the test description"],ans:2},{q:"What does blocTest's 'expect' parameter verify?",opts:["The initial state of the BLoC","The exact sequence of states emitted by the BLoC","The number of events added","The BLoC's constructor parameters"],ans:1},{q:"What does when(() => mockRepo.getUser(42)).thenAnswer(...) do?",opts:["Calls the real repository","Configures the mock to return a specific value when getUser(42) is called","Tests the mock","Creates a new repository"],ans:1},{q:"Why use setUp() to create mocks instead of creating them once?",opts:["It is required by Dart","To ensure each test gets fresh mocks with no leftover state from previous tests","setUp is faster","It makes the code shorter"],ans:1}],challenge:"Write a complete test file for a LoginBloc. Create MockAuthRepository. Write three blocTest cases: 1) successful login emits [Loading, Success], 2) wrong password emits [Loading, Error], 3) network failure emits [Loading, Error]. Use when() to configure mocks and verify() to check mock calls.",resources:[{type:"docs",title:"Flutter Testing Documentation",url:"https://docs.flutter.dev/testing",source:"Flutter Official"},{type:"docs",title:"bloc_test Package",url:"https://pub.dev/packages/bloc_test",source:"pub.dev"},{type:"docs",title:"mocktail Package",url:"https://pub.dev/packages/mocktail",source:"pub.dev"}],eli5:"Imagine you built a robot that sorts colored balls. To test it, you do not wait for real balls to arrive from the factory. Instead, you use pretend balls (mocks) that you control. You put in a red ball and check: did the robot put it in the red bin? You put in a broken ball and check: did the robot handle it without crashing? By using pretend balls, you can test every possible situation quickly and safely. That is what mocktail and testing do for your code!",codeWalkthrough:["Import flutter_test for test assertions and structure","Import bloc_test for BLoC-specific testing utilities","Import mocktail for creating mock objects","","Comment: Create mock classes by extending Mock","MockUserRepository fakes the UserRepository interface","Closing the mock class","","Comment: Test file for UserBloc","Main function where all tests live","Create a late mock repository variable","Create a late BLoC variable","","setUp runs before each test to create fresh instances","Create a new mock repository for each test","Closing setUp","","tearDown runs after each test to clean up","Close the BLoC to prevent memory leaks","Closing tearDown","","Group related UserBloc tests together","","Comment: Test successful user loading","blocTest with type parameters for the BLoC and State","Description of what this test verifies","build creates the BLoC with configured mocks","Configure mock to return success when getUser is called with any ID","Return a successful Result with a test User","Closing the when configuration","Return the BLoC instance for testing","Closing build","act adds the event that triggers the behavior","Add LoadUser event with ID 42","expect lists the exact states that should be emitted","First: UserLoading state","Second: UserLoaded state with the expected User data","Closing expect","verify checks that the mock was called correctly","Confirm getUser was called once with ID 42","Closing the first blocTest","","Comment: Test network failure scenario","blocTest for the failure path","Description","build configures mock to return a network failure","Return a failure Result with network error message","Closing configuration","Create BLoC","Closing build","act adds the same LoadUser event","expect verifies Loading then Error states","UserLoading emitted first","UserError emitted with the network error message","Closing the failure blocTest","","Comment: Test server error scenario","blocTest for server errors","Description","build configures mock to return server failure","Return a failure Result with server error","Closing configuration","Create BLoC","Closing build","act adds LoadUser event","expect verifies Loading then Error","Closing the server error blocTest","Closing the UserBloc group","","Comment: Unit tests for the repository implementation","Group for UserRepositoryImpl tests","Create a mock ApiService","","setUp creates fresh mock API for each test","Closing setUp","","Test: successful API call returns mapped User","Configure mock API to return user JSON","Closing the when configuration","","Create repository with mock API","Call getUser and get the Result","","Assert the result is a success","Assert the user name was mapped correctly","Closing the success test","","Test: network error returns Failure","Configure mock API to throw a DioException","Connection error type simulates no internet","Closing the when configuration","","Create repository and call getUser","","Assert the result is a failure","Assert the failure message mentions internet","Closing the failure test and repository group","Closing main"],bugChallenge:{code:"blocTest<UserBloc, UserState>(\n  'loads user successfully',\n  build: () {\n    when(() => mockRepo.getUser(42)).thenAnswer(\n      (_) async => Result.success(User(id: 42, name: 'Alice')),\n    );\n    return UserBloc(mockRepo);\n  },\n  act: (bloc) => bloc.add(LoadUser(42)),\n  expect: () => [\n    UserLoaded(User(id: 42, name: 'Alice')),\n  ],\n);",hint:"Think about what states the BLoC emits before the data is loaded...",answer:"The expect list is missing the UserLoading() state. The BLoC emits UserLoading() first, then UserLoaded(). The expect should be: [UserLoading(), UserLoaded(User(id: 42, name: 'Alice'))]. blocTest verifies the EXACT sequence of states, so missing even one state causes the test to fail."},difficulty:"advanced",prereqs:[34,11]},
{id:51,title:"Config, Build & Release",subtitle:"Shipping Your App to the World",analogy:"Building an app is like baking a cake for a competition. During practice (development), you taste-test constantly and change recipes. For the competition (release), you follow the exact recipe, frost it perfectly (sign it), put it in a proper box (build), and submit it to the judges (app stores). The TeamMvpKitConfig pattern is like having separate recipe cards for practice rounds and the final competition!",points:[{t:"TeamMvpKitConfig Pattern",d:"team_mvp_kit uses a centralized config class that holds all environment-specific settings: API base URL, Firebase options, feature flags, and app metadata. Different environments (dev, staging, production) use different config instances. This pattern makes environment switching clean and safe.",code:"class TeamMvpKitConfig {\n  final String appName;\n  final String apiBaseUrl;\n  final String environment;\n  final bool enableLogging;\n  final bool enableCrashlytics;\n\n  const TeamMvpKitConfig({\n    required this.appName,\n    required this.apiBaseUrl,\n    required this.environment,\n    this.enableLogging = false,\n    this.enableCrashlytics = true,\n  });\n\n  static const dev = TeamMvpKitConfig(\n    appName: 'MyApp Dev',\n    apiBaseUrl: 'https://dev-api.example.com/v1',\n    environment: 'dev',\n    enableLogging: true,\n    enableCrashlytics: false,\n  );\n\n  static const prod = TeamMvpKitConfig(\n    appName: 'MyApp',\n    apiBaseUrl: 'https://api.example.com/v1',\n    environment: 'prod',\n    enableLogging: false,\n    enableCrashlytics: true,\n  );\n}"},{t:"Environment Entry Points",d:"Create separate main files for each environment. main_dev.dart uses the dev config, main_prod.dart uses the prod config. Each calls a shared bootstrap function with its config. This lets you switch environments by changing which file you run, without modifying any code.",code:"// lib/main_dev.dart\nimport 'package:my_app/bootstrap.dart';\nimport 'package:my_app/config.dart';\n\nvoid main() => bootstrap(TeamMvpKitConfig.dev);\n\n// lib/main_prod.dart\nimport 'package:my_app/bootstrap.dart';\nimport 'package:my_app/config.dart';\n\nvoid main() => bootstrap(TeamMvpKitConfig.prod);\n\n// lib/bootstrap.dart\nFuture<void> bootstrap(TeamMvpKitConfig config) async {\n  WidgetsFlutterBinding.ensureInitialized();\n  await Firebase.initializeApp();\n  await configureDependencies(config);\n  runApp(MyApp(config: config));\n}"},{t:"Using Config in DI",d:"Pass the config object into your dependency injection setup. Register it as a singleton so any service can access environment settings. Dio uses config.apiBaseUrl, Crashlytics checks config.enableCrashlytics, and LogInterceptor checks config.enableLogging.",code:"@InjectableInit()\nFuture<void> configureDependencies(\n  TeamMvpKitConfig config,\n) async {\n  // Register config as a singleton\n  getIt.registerSingleton<TeamMvpKitConfig>(config);\n\n  // Now init the rest of DI\n  await getIt.init();\n}\n\n// In the Dio module:\n@module\nabstract class NetworkModule {\n  @singleton\n  Dio dio(TeamMvpKitConfig config, TokenStorage tokenStorage) {\n    final dio = Dio(BaseOptions(\n      baseUrl: config.apiBaseUrl,\n      connectTimeout: const Duration(seconds: 15),\n    ));\n    if (config.enableLogging) {\n      dio.interceptors.add(LogInterceptor());\n    }\n    return dio;\n  }\n}"},{t:"Dart Define for Build Variants",d:"Use --dart-define to pass environment variables at build time without multiple main files. Access them with String.fromEnvironment(). This approach is popular for CI/CD pipelines where the environment is set by the build script.",code:"// Build with environment flag:\n// flutter run --dart-define=ENV=dev\n// flutter build apk --dart-define=ENV=prod\n\n// Access in code:\nconst environment = String.fromEnvironment(\n  'ENV',\n  defaultValue: 'dev',\n);\n\nfinal config = environment == 'prod'\n    ? TeamMvpKitConfig.prod\n    : TeamMvpKitConfig.dev;\n\n// Can also pass individual values:\n// flutter run --dart-define=API_URL=https://api.example.com\nconst apiUrl = String.fromEnvironment(\n  'API_URL',\n  defaultValue: 'https://dev-api.example.com',\n);"},{t:"Building for Android (APK and AAB)",d:"Use flutter build apk for a debug/test APK and flutter build appbundle for the Play Store. The AAB (Android App Bundle) is required by Google Play -- it generates optimized APKs for each device configuration, resulting in smaller downloads for users.",code:"# Debug APK (for testing)\n# flutter build apk --debug\n\n# Release APK (for direct distribution)\n# flutter build apk --release\n\n# Release AAB (required for Google Play Store)\n# flutter build appbundle --release\n\n# Build with specific environment:\n# flutter build appbundle --release --dart-define=ENV=prod\n\n# Output locations:\n# APK:  build/app/outputs/flutter-apk/app-release.apk\n# AAB:  build/app/outputs/bundle/release/app-release.aab"},{t:"Android App Signing",d:"Release builds must be signed with a keystore. Create a keystore file once and configure it in android/app/build.gradle. Never commit the keystore or passwords to git. Store them securely and reference them from a local key.properties file.",code:"# Step 1: Generate a keystore (one time)\n# keytool -genkey -v -keystore my-release-key.jks \\\n#   -keyalg RSA -keysize 2048 -validity 10000 \\\n#   -alias my-key-alias\n\n# Step 2: Create android/key.properties (git-ignored!)\n# storePassword=your_store_password\n# keyPassword=your_key_password\n# keyAlias=my-key-alias\n# storeFile=../my-release-key.jks\n\n# Step 3: Reference in android/app/build.gradle\n# def keystoreProperties = new Properties()\n# keystoreProperties.load(\n#   new FileInputStream(rootProject.file('key.properties'))\n# )\n# signingConfigs {\n#   release {\n#     keyAlias keystoreProperties['keyAlias']\n#     keyPassword keystoreProperties['keyPassword']\n#     storeFile file(keystoreProperties['storeFile'])\n#     storePassword keystoreProperties['storePassword']\n#   }\n# }"},{t:"Building for iOS",d:"Use flutter build ios to create the iOS app. Then open Xcode to archive and upload to App Store Connect. iOS requires an Apple Developer account ($99/year), provisioning profiles, and code signing certificates. Xcode handles most of this through automatic signing.",code:"# Build iOS release\n# flutter build ios --release\n\n# Then open Xcode:\n# open ios/Runner.xcworkspace\n\n# In Xcode:\n# 1. Select 'Any iOS Device' as build target\n# 2. Product -> Archive\n# 3. Distribute App -> App Store Connect\n# 4. Upload\n\n# Or use command line (requires Xcode CLI tools):\n# flutter build ipa\n# Output: build/ios/ipa/MyApp.ipa"},{t:"App Version and Build Number",d:"Set your app version in pubspec.yaml. The format is version: MAJOR.MINOR.PATCH+BUILD_NUMBER. Major for breaking changes, minor for new features, patch for bug fixes. The build number must increment with every upload to the app stores.",code:"# pubspec.yaml\n# version: 1.2.3+15\n#   1.2.3 = version name shown to users\n#   15    = build number (must increment per upload)\n\n# Override at build time:\n# flutter build apk --build-name=1.2.3 --build-number=15\n\n# Semantic versioning guide:\n# 1.0.0 -> 2.0.0  Major: breaking changes\n# 1.0.0 -> 1.1.0  Minor: new features\n# 1.0.0 -> 1.0.1  Patch: bug fixes"},{t:"Pre-Release Checklist",d:"Before submitting to app stores: update version number, run all tests, test on real devices (not just emulators), check app size, verify all API endpoints point to production, disable debug logging, enable crash reporting, test deep links, and prepare store listing screenshots and descriptions.",code:"# Pre-release checklist:\n# [ ] Update version in pubspec.yaml\n# [ ] Run flutter test (all tests pass)\n# [ ] Run flutter analyze (no warnings)\n# [ ] Test on real Android device\n# [ ] Test on real iOS device\n# [ ] Verify production API URLs in config\n# [ ] Disable debug logging\n# [ ] Enable Crashlytics\n# [ ] Check app permissions in manifests\n# [ ] Prepare store screenshots (6.5 inch, 5.5 inch)\n# [ ] Write release notes\n# [ ] flutter build appbundle --release\n# [ ] flutter build ipa --release"},{t:"CI/CD with GitHub Actions",d:"Automate builds and testing with GitHub Actions. On every pull request, run tests. On merge to main, build the release and optionally deploy to app stores via Fastlane. team_mvp_kit uses CI to ensure no broken code reaches the main branch.",code:"# .github/workflows/ci.yml\nname: CI\non: [pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: subosito/flutter-action@v2\n        with:\n          flutter-version: '3.24.0'\n      - run: flutter pub get\n      - run: flutter analyze\n      - run: flutter test --coverage\n\n  build-android:\n    runs-on: ubuntu-latest\n    needs: test\n    steps:\n      - uses: actions/checkout@v4\n      - uses: subosito/flutter-action@v2\n      - run: flutter build appbundle --release\n        env:\n          ENV: prod"}],whatIs:"App configuration, building, and releasing covers everything from managing environment-specific settings (dev vs prod URLs) to signing, building, and publishing your app to the Google Play Store and Apple App Store. team_mvp_kit uses the TeamMvpKitConfig pattern with separate entry points per environment and centralized config registered in the DI container.",realWorld:"team_mvp_kit's build pipeline: developers run main_dev.dart locally with dev API and logging enabled. CI runs tests on every pull request. When merging to main, the pipeline builds with main_prod.dart -- production API, Crashlytics enabled, logging disabled. The signed APK/AAB and IPA are uploaded to the stores. Environment switching is a config change, not a code change.",code:`// 1. TeamMvpKitConfig (environment configuration)
class TeamMvpKitConfig {
  final String appName;
  final String apiBaseUrl;
  final String environment;
  final bool enableLogging;
  final bool enableCrashlytics;

  const TeamMvpKitConfig({
    required this.appName,
    required this.apiBaseUrl,
    required this.environment,
    this.enableLogging = false,
    this.enableCrashlytics = true,
  });

  static const dev = TeamMvpKitConfig(
    appName: 'MyApp Dev',
    apiBaseUrl: 'https://dev-api.example.com/v1',
    environment: 'dev',
    enableLogging: true,
    enableCrashlytics: false,
  );

  static const staging = TeamMvpKitConfig(
    appName: 'MyApp Staging',
    apiBaseUrl: 'https://staging-api.example.com/v1',
    environment: 'staging',
    enableLogging: true,
    enableCrashlytics: true,
  );

  static const prod = TeamMvpKitConfig(
    appName: 'MyApp',
    apiBaseUrl: 'https://api.example.com/v1',
    environment: 'prod',
    enableLogging: false,
    enableCrashlytics: true,
  );
}

// 2. Bootstrap function shared by all entry points
Future<void> bootstrap(TeamMvpKitConfig config) async {
  WidgetsFlutterBinding.ensureInitialized();

  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  // Configure Crashlytics based on config
  await FirebaseCrashlytics.instance
      .setCrashlyticsCollectionEnabled(
    config.enableCrashlytics,
  );

  if (config.enableCrashlytics) {
    FlutterError.onError =
        FirebaseCrashlytics.instance.recordFlutterError;
  }

  // Register config in DI, then init all dependencies
  getIt.registerSingleton<TeamMvpKitConfig>(config);
  await configureDependencies();

  runApp(MyApp(config: config));
}

// 3. Entry point files
// main_dev.dart:
//   void main() => bootstrap(TeamMvpKitConfig.dev);
//
// main_staging.dart:
//   void main() => bootstrap(TeamMvpKitConfig.staging);
//
// main_prod.dart:
//   void main() => bootstrap(TeamMvpKitConfig.prod);
//
// Run: flutter run -t lib/main_dev.dart
// Build: flutter build apk -t lib/main_prod.dart

// 4. Using config in Dio module
@module
abstract class NetworkModule {
  @singleton
  Dio dio(
    TeamMvpKitConfig config,
    TokenStorage tokenStorage,
  ) {
    final dio = Dio(BaseOptions(
      baseUrl: config.apiBaseUrl,
      connectTimeout: const Duration(seconds: 15),
      receiveTimeout: const Duration(seconds: 15),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    ));

    dio.interceptors.add(
      AuthInterceptor(tokenStorage, dio),
    );

    if (config.enableLogging) {
      dio.interceptors.add(LogInterceptor(
        requestBody: true,
        responseBody: true,
      ));
    }

    return dio;
  }
}`,funFact:"The first Android app to reach 1 billion downloads was Google Maps in 2012. Today, the Google Play Store has over 3.5 million apps and the Apple App Store has over 1.8 million. Flutter apps make up a growing percentage -- companies like BMW, Alibaba, Google Pay, and eBay all use Flutter for their production apps. Your app could be next!",quiz:[{q:"What is the purpose of the TeamMvpKitConfig pattern?",opts:["To configure the IDE","To hold environment-specific settings (API URL, logging, etc.) that change between dev and prod","To generate code","To manage app themes"],ans:1},{q:"What file format does Google Play Store require for app uploads?",opts:["APK only","IPA","AAB (Android App Bundle)","ZIP"],ans:2},{q:"Why should you NEVER commit your keystore password to git?",opts:["Git cannot store passwords","Anyone with access to the repo could sign fake releases of your app","Passwords make the repo slower","Git will reject the commit"],ans:1},{q:"What does the build number in version: 1.2.3+15 represent?",opts:["The number of features","An incrementing number that must increase with every store upload","The team size","The number of files"],ans:1},{q:"How does team_mvp_kit switch between dev and prod environments?",opts:["By changing code in every file","By running a different main file (main_dev.dart vs main_prod.dart) with a different config","By restarting the server","By changing the phone settings"],ans:1}],challenge:"Create a TeamMvpKitConfig class with dev and prod static constants. Create main_dev.dart and main_prod.dart entry points. Create a bootstrap function that initializes Firebase and registers the config in GetIt. Build a release APK with flutter build apk --release -t lib/main_prod.dart.",resources:[{type:"docs",title:"Flutter Build and Release for Android",url:"https://docs.flutter.dev/deployment/android",source:"Flutter Official"},{type:"docs",title:"Flutter Build and Release for iOS",url:"https://docs.flutter.dev/deployment/ios",source:"Flutter Official"},{type:"docs",title:"Flutter Flavors (Build Variants)",url:"https://docs.flutter.dev/deployment/flavors",source:"Flutter Official"}],eli5:"Imagine you are a toy maker. While building toys in your workshop (development), you use cheap materials and test a lot. When the toy is ready for the store (production), you use the best materials, put it in a nice box, add a label with your name (signing), and send it to the toy store (app store). The config pattern is like having two recipe books -- one for workshop experiments and one for the final product. You never accidentally ship a workshop prototype to the store!",codeWalkthrough:["Comment: TeamMvpKitConfig holds all environment settings","Class declaration with five configuration fields","App name shown in the device app drawer","API base URL that Dio uses for all requests","Environment name (dev, staging, prod) for identification","Whether to enable debug logging","Whether to enable crash reporting","","Const constructor with required and optional parameters","Closing the constructor","","Static const for the development configuration","Dev app name includes 'Dev' suffix to distinguish on device","Dev API points to the development server","Environment is dev","Logging enabled for debugging","Crashlytics disabled in dev to avoid noise","Closing dev config","","Static const for the staging configuration","Staging app name","Staging API URL","Environment is staging","Logging enabled for debugging staging issues","Crashlytics enabled to catch staging crashes","Closing staging config","","Static const for the production configuration","Production app name (clean, no suffix)","Production API URL","Environment is prod","Logging disabled for security and performance","Crashlytics enabled to catch production crashes","Closing prod config and TeamMvpKitConfig class","","Comment: Bootstrap function called by each entry point","bootstrap takes a config and sets up the entire app","Ensure Flutter binding is ready","","Initialize Firebase with platform-specific options","Passing the generated Firebase options","Closing Firebase init","","Enable or disable Crashlytics based on config","Pass the config flag to Crashlytics","Closing the setCrashlyticsCollectionEnabled call","","If Crashlytics is enabled, set up the error handler","Route all Flutter errors to Crashlytics","Closing the if block","","Register the config as a singleton in GetIt DI","Initialize all other dependencies","","Start the app with the config","Closing bootstrap","","Comment: Entry point files for each environment","main_dev.dart calls bootstrap with dev config","","main_staging.dart calls bootstrap with staging config","","main_prod.dart calls bootstrap with prod config","","Run command specifying the target entry file","Build command specifying the target for production","","Comment: Dio module uses config for its base URL","@module for third-party Dio registration","Abstract class NetworkModule","@singleton for one Dio instance","Method receives config and tokenStorage from DI","Create Dio with base URL from config","Set the API base URL from the config object","Set connection timeout","Set receive timeout","Default JSON headers","Closing the BaseOptions and Dio constructor","","Add the auth interceptor for token management","Closing interceptor add","","Only add logging if the config enables it","Add LogInterceptor with request and response body logging","Closing the logging configuration","","Return the fully configured Dio instance","Closing the dio method and NetworkModule"],bugChallenge:{code:"class AppConfig {\n  static const dev = AppConfig(\n    apiUrl: 'https://dev-api.example.com',\n    enableLogging: true,\n  );\n\n  final String apiUrl;\n  final bool enableLogging;\n\n  const AppConfig({required this.apiUrl, required this.enableLogging});\n}\n\nvoid main() {\n  final config = AppConfig.dev;\n  final dio = Dio(BaseOptions(baseUrl: config.apiUrl));\n  if (config.enableLogging) {\n    dio.interceptors.add(LogInterceptor());\n  }\n  runApp(MyApp());\n}",hint:"Think about what is missing before runApp and whether the config is accessible to the rest of the app...",answer:"Three issues: 1) WidgetsFlutterBinding.ensureInitialized() is missing before creating Dio. 2) The config is created locally in main() but not registered in DI, so other classes cannot access it. Register it with getIt.registerSingleton(config). 3) Firebase.initializeApp() is missing if the app uses Firebase. 4) main should be async and use await for async operations."},difficulty:"advanced",prereqs:[47]}
];