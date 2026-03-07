const LESSONS_DATA = [
  {id:1,title:"JavaScript vs TypeScript",subtitle:"Adding Superpowers to JS",analogy:"JavaScript is like texting without autocorrect — fast but you make typos that nobody catches until it's embarrassing. TypeScript is like texting WITH autocorrect AND grammar check — it catches your mistakes BEFORE you hit send!",points:[{t:"TypeScript = JS + Types",d:"TypeScript is JavaScript with type annotations added on top. You tell the compiler 'this variable is a string' or 'this function returns a number' — and it checks your work. Every valid JS code is also valid TS code!"},{t:"Type Annotations",d:"You write types after a colon — like name: string or age: number. This tells TypeScript exactly what kind of data is allowed, so it can warn you if you use the wrong type."},{t:"Interfaces — Shape Contracts",d:"An interface defines the shape of an object — what properties it has and what types they are. Think of it as a blueprint: interface User { name: string; age: number; }. Now TypeScript knows exactly what a User looks like!"},{t:"Optional Properties with ?",d:"Add a ? after a property name to make it optional: email?: string means 'email can be a string OR it can be left out entirely'. No ? means the property is required — you MUST provide it."},{t:"Catches Bugs Early",d:"Instead of finding errors at 3 AM in production, TypeScript finds them while you're coding. Pass a number where a string is expected? TypeScript tells you immediately. Studies show TypeScript prevents about 15% of bugs that would otherwise make it to production."},{t:"Compiles to JavaScript",d:"Browsers don't understand TypeScript directly. Your .ts files get compiled (translated) into regular .js files before running. The types are stripped away — they're only there to help YOU during development."},{t:"Editor Autocomplete & IntelliSense",d:"TypeScript supercharges your code editor with intelligent autocompletion. When you type 'user.' your editor shows every available property and method with their types. This means less time reading documentation and fewer typos — your editor becomes a knowledgeable coding partner that knows your entire codebase."},{t:"Enums — Named Constants",d:"Enums let you define a set of named constants: enum Status { Active, Inactive, Pending }. Instead of using magic strings like 'active' scattered through your code, you use Status.Active — readable, refactorable, and your editor catches typos instantly. Enums make your code self-documenting."}],whatIs:"TypeScript is a superset of JavaScript created by Microsoft. It adds static type checking — you declare what type of data each variable, parameter, and return value should be (string, number, boolean, etc.) and the compiler verifies you use them correctly. You also get interfaces to define object shapes, optional properties with ?, and much better editor autocomplete.",realWorld:"Almost every major company uses TypeScript now: Airbnb, Slack, Stripe, and more. NestJS is built entirely in TypeScript, and React has first-class TypeScript support.",code:`// JavaScript — no types, YOLO mode 🎲
function greet(name) {
  return "Hello " + name.toUpperCase();
}
greet(42); // 💥 Runtime error! 42.toUpperCase is not a function

// TypeScript — safe mode 🛡️
function greet(name: string): string {
  return "Hello " + name.toUpperCase();
}
greet(42); // ❌ Compile error! Argument of type 'number'
           //    is not assignable to parameter of type 'string'
greet("World"); // ✅ "Hello WORLD"

// TypeScript interfaces — like a contract 📝
interface User {
  name: string;
  age: number;
  email?: string; // optional (the ? means it's OK to skip)
}

const user: User = {
  name: "Alex",
  age: 25,
  // email is optional, so this is fine!
};`,funFact:"TypeScript was created by the same person who created C# — Anders Hejlsberg. That's why TS feels familiar to C#/Java developers!",quiz:[{q:"What happens to TypeScript when it runs in a browser?",opts:["It runs directly","It gets compiled to JavaScript first","The browser downloads a TypeScript engine","It doesn't work in browsers"],ans:1},{q:"What does the '?' after a property mean in an interface?",opts:["The property is broken","The property is optional","The property is a question","The property must be a boolean"],ans:1},{q:"Who created TypeScript?",opts:["Google","Meta (Facebook)","Microsoft","Amazon"],ans:2},{q:"What are Enums used for in TypeScript?",opts:["Defining a set of named constants like Status.Active instead of magic strings","Making code run faster","Creating new HTML elements","Replacing all interfaces"],ans:0},{q:"How does TypeScript improve your code editor experience?",opts:["It changes the editor's color theme","It provides intelligent autocomplete showing available properties and methods","It slows down the editor for safety","It removes the need for extensions"],ans:1}],challenge:"Open your editor and rename a .js file to .ts. Add type annotations to your variables and functions. How many bugs does TypeScript find?",resources:[{type:"docs",title:"TypeScript Handbook",url:"https://www.typescriptlang.org/docs/handbook/intro.html",source:"TypeScript Official"},{type:"video",title:"TypeScript in 100 Seconds",url:"https://www.youtube.com/watch?v=zQnBQ4tB3ZA",source:"Fireship"},{type:"article",title:"TypeScript for JavaScript Programmers",url:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",source:"TypeScript Official"}],eli5:"Imagine you're drawing a picture. JavaScript lets you draw anything but doesn't tell you if you're using the wrong color. TypeScript is like having a helpful friend who says 'Hey, that should be blue, not red!' before you finish your drawing.",codeWalkthrough:["A comment-only line introducing JavaScript without types","Declaring a function called 'greet' that takes a name with no type checking","Returns 'Hello ' followed by the name converted to ALL CAPS","Closing the function","Calling greet with the number 42 - crashes at runtime because numbers don't have toUpperCase!","","Now the same function in TypeScript with type safety","Declaring greet with 'name: string' type annotation and ': string' return type","Same logic - returns 'Hello ' plus uppercased name","Closing the function","TypeScript catches this at compile time! Can't pass a number where string is expected","TypeScript's error message explaining the type mismatch","This works because 'World' IS a string - returns 'Hello WORLD'","","Comment introducing TypeScript interfaces","Opening the User interface definition","name must be a string - required","age must be a number - required","email is optional (the ? makes it OK to skip) - if given must be string","Closing the interface","","Creating a 'user' variable typed as User","Opening the object literal","Setting name to 'Alex' - satisfies string requirement","Setting age to 25 - satisfies number requirement","Comment: email is optional so skipping is fine!"],bugChallenge:{"code":"function greet(name: string): string {\n  return \"Hello \" + name.toUpperCase();\n}\nconst result: number = greet(\"World\");","hint":"Look at what the function returns versus what type the variable expects...","answer":"The function greet() returns a string, but the variable 'result' is typed as number. Fix: change 'const result: number' to 'const result: string'."},difficulty:"beginner",prereqs:[37]},

  {id:2,title:"Developer Tooling",subtitle:"Work Smarter, Not Harder",analogy:"A carpenter without tools just has wood and hands. Developer tools are like power tools — ESLint is the level (keeps things straight), Prettier is the sander (makes it smooth), and Husky is the quality inspector who checks BEFORE you ship!",points:[{t:"ESLint",d:"ESLint is a static analysis tool that scans your JavaScript and TypeScript code for bugs, bad patterns, and style violations without running it. Configure rules like 'no unused variables' or 'no implicit any' and ESLint flags every violation instantly in your editor with red underlines."},{t:"Prettier",d:"Prettier is an opinionated code formatter that automatically restructures your code to follow consistent style rules — indentation, quotes, semicolons, line width. Run it on save and your entire team's code looks identical, eliminating all formatting debates and messy pull request diffs forever."},{t:"Husky + lint-staged",d:"Husky installs Git hooks that run scripts automatically before commits or pushes. Combined with lint-staged, it runs ESLint and Prettier ONLY on the files you changed — catching issues before they enter your codebase without slowing down your workflow on every commit."},{t:"VS Code Extensions",d:"Extensions like Tailwind IntelliSense (autocomplete CSS classes), Prisma (schema highlighting), ESLint (inline error markers), and GitLens (blame annotations) transform VS Code from a basic text editor into a fully integrated development environment tailored to your stack."},{t:"Git Hooks",d:"Git hooks are scripts that run automatically on git events like pre-commit, pre-push, and post-merge. They enforce quality gates — blocking a commit if tests fail or linting errors exist. They act as automated checkpoints that prevent broken code from ever reaching your repository."},{t:"Debugging with Node Inspector",d:"Use node --inspect to start a debugging session. Set breakpoints in VS Code, step through code line by line, inspect variables in real-time. Much more powerful than console.log — like using a magnifying glass instead of squinting at your screen."},{t:"EditorConfig & Workspace Settings",d:"An .editorconfig file ensures consistent editor settings (indent size, line endings, charset) across different editors and IDEs. Paired with VS Code workspace settings in .vscode/settings.json, every developer on your team gets identical editor behavior automatically from day one."},{t:"Package Scripts & Task Runners",d:"The scripts section in package.json defines reusable commands: npm run dev starts your server, npm run build compiles production code, npm run test runs your test suite. Well-organized scripts replace memorizing long CLI commands with simple, shareable shortcuts that anyone on your team can use."}],whatIs:"Developer tooling includes linters (ESLint), formatters (Prettier), git hooks (Husky), and editor extensions that automate code quality. They catch bugs, enforce style, and prevent bad code from being committed.",realWorld:"Every professional development team uses these tools. They're the difference between 'weekend project' and 'production-ready codebase'. Set them up once, benefit forever.",code:`// 1. ESLint — catch bugs automatically 🐛
// .eslintrc.js (legacy format — ESLint 9+ uses eslint.config.js)
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-unused-vars': 'error',      // Unused variables? Error!
    'no-console': 'warn',           // console.log? Warning!
    '@typescript-eslint/no-explicit-any': 'error', // Using 'any'? Error!
  },
};

// 2. Prettier — consistent formatting 🎨
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}

// 3. Husky — git hooks (runs before commit) 🐕
// package.json
{
  "scripts": {
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}

// .husky/pre-commit
#!/bin/sh
npx lint-staged
# If ESLint finds errors → commit is BLOCKED! 🚫`,funFact:"The 'tabs vs spaces' debate has been going on since the 1960s. Prettier ended it by saying 'I don't care what you prefer, I'll format it MY way.' And everyone agreed because they were tired of arguing! 😂",quiz:[{q:"What does Husky do?",opts:["Pulls a sled","Runs scripts (like linting) before git commits to catch issues early","Barks at bad code","Replaces Docker"],ans:1},{q:"What's the purpose of ESLint?",opts:["Creating links between JavaScript files","Finding bugs and bad patterns in code","Linking CSS stylesheets","Linking databases"],ans:1},{q:"What does Prettier do?",opts:["Makes code look prettier to humans only","Auto-formats code consistently across the project","Creates CSS styles","Compresses code for production"],ans:1},{q:"What does an .editorconfig file ensure?",opts:["Consistent editor settings like indent size and line endings across different editors and IDEs","Faster code compilation","Automatic code deployment","Better Git integration"],ans:0},{q:"What is the 'prepare' script in package.json commonly used for with Husky?",opts:["Building the project","Automatically installing Git hooks when a developer runs npm install","Running tests","Starting the development server"],ans:1}],challenge:"Add ESLint + Prettier + Husky to a project. Make a deliberate formatting mistake, try to commit — watch Husky block it! Then fix it and commit successfully.",resources:[{type:"docs",title:"ESLint Getting Started",url:"https://eslint.org/docs/latest/use/getting-started",source:"ESLint Official"},{type:"docs",title:"Prettier Documentation",url:"https://prettier.io/docs/index.html",source:"Prettier Official"},{type:"video",title:"ESLint & Prettier Setup",url:"https://www.youtube.com/watch?v=SydnKbGc7W8",source:"Traversy Media"}],eli5:"Imagine your room is messy and you have to clean it yourself every day. Developer tools are like having a robot that tidies up automatically! ESLint spots things in the wrong place, Prettier makes everything neat, and Husky checks your room before you leave the house.",codeWalkthrough:["Comment: ESLint catches bugs automatically","Comment: ESLint configuration file name","Exporting the ESLint config as a module","Setting the parser to understand TypeScript syntax","Specifying TypeScript ESLint plugins to use","Opening the 'extends' array for preset rule collections","Using ESLint's recommended built-in rules","Adding TypeScript-specific recommended rules","Closing the extends array","Opening custom rules section","Unused variables cause an error - helps keep code clean","console.log triggers a warning - reminds you to remove debug logs","Using TypeScript 'any' type causes an error - forces proper types","Closing the rules section","Closing the config export","","Comment: Prettier formats code consistently","Comment: Prettier configuration file name","Opening the Prettier config object","Always add semicolons at end of statements","Use single quotes instead of double quotes","Use 2 spaces for indentation","Add trailing commas (helps with git diffs)","Wrap lines longer than 80 characters","Closing the Prettier config","","Comment: Husky runs checks before git commits","Comment: package.json configuration","Opening the package.json section","Opening the scripts section","The 'prepare' script sets up Husky hooks on npm install","Closing scripts","Opening lint-staged config - only checks files being committed","For TypeScript files: auto-fix ESLint, then auto-format with Prettier","For JSON and Markdown: just auto-format with Prettier","Closing lint-staged config","Closing the package.json section","","Comment: The actual Husky pre-commit hook file","Shebang line telling the system to use sh shell","Run lint-staged via npx when a commit is attempted","Comment: If ESLint finds errors, the commit is blocked!"],bugChallenge:{"code":"// .eslintrc.js\nmodule.exports = {\n  rules: {\n    'no-unused-vars': 'warning',\n  },\n};","hint":"ESLint rule severity levels have specific allowed string values...","answer":"The value 'warning' is not a valid ESLint severity. Valid values are 'off', 'warn', or 'error' (or 0, 1, 2). Fix: change 'warning' to 'warn'."},difficulty:"beginner",prereqs:[1,3,5]},

  {id:3,title:"Variables, Types & Arrays",subtitle:"The Building Blocks of Data",analogy:"Variables are like labeled boxes — each box holds ONE type of thing. Some boxes are permanent (const), some can be swapped out (let). Arrays are like containers that hold MANY boxes of the same type in order!",points:[{t:"const vs let vs var",d:"Use const by default — it can't be reassigned. Use let only when you NEED to change a variable. NEVER use var — it has weird bugs. Rule: const > let >> var (avoid var!)"},{t:"Primitive Types",d:"string (text), number (any number: int, decimal, negative), boolean (true/false), null (empty on purpose), undefined (not set yet), void (function returns nothing), never (function never finishes)."},{t:"Type Inference",d:"TypeScript guesses types for you! const name = 'John' → TS knows it's string. You only need to write types when it's NOT obvious."},{t:"Arrays and Array Methods",d:"Arrays hold multiple items: string[], number[]. Use .map() to transform, .filter() to select, .find() to search, .reduce() to combine, .some()/.every() to check conditions."},{t:"Array Methods Deep Dive",d:"push/pop (add/remove), length (count), includes (check if exists), indexOf (find position), forEach (loop), map (transform each), filter (keep matches), find (first match), some/every (any/all match), reduce (combine to one value)."},{t:"Map and Set Collections",d:"Map is like a dictionary (key → value lookup). Set is like a bag of unique stickers (no duplicates). Use Map for dynamic keys, Set to remove duplicates."},{t:"Object Utility Methods",d:"Object.keys() gets all keys, Object.values() gets all values, Object.entries() gets key-value pairs. Loop with for...of or .forEach()."},{t:"Destructuring and Spread",d:"Unpack arrays and objects into variables: const [a, b] = arr or const {name, age} = user. Spread operator (...) merges arrays/objects: [...arr1, ...arr2]"}],whatIs:"Variables store data. TypeScript has primitive types (string, number, boolean) and collection types (arrays, Maps, Sets). Arrays are the most common way to store multiple items. Each type is strictly checked — you can't put a string where a number is expected.",realWorld:"Almost every program uses arrays constantly: shopping lists, user searches, data from databases. Array methods like map, filter, and reduce are so important they appear in interviews!",code:`// Variables — choose const by default
const name = "John";      // cannot change
let age = 25;            // can change if needed
age = 26;                // OK!

// Basic types
const text: string = "hello";
const count: number = 42;
const active: boolean = true;
const nothing: null = null;
const notSet: undefined = undefined;

// Arrays
const fruits: string[] = ["apple", "banana"];
const numbers: number[] = [1, 2, 3];

// Array methods
fruits.push("cherry");           // ["apple", "banana", "cherry"]
fruits.pop();                    // removes "cherry"
fruits.length;                   // 2
fruits.includes("apple");        // true
fruits.indexOf("banana");        // 1

// Transform with map
const upper = fruits.map(f => f.toUpperCase());
// ["APPLE", "BANANA"]

// Filter
const long = fruits.filter(f => f.length > 5);
// ["banana"]

// Find first match
const found = fruits.find(f => f.startsWith("a"));
// "apple"

// Check if ANY/ALL match
fruits.some(f => f === "apple");     // true (at least one)
fruits.every(f => f.length > 2);     // true (all match)

// Reduce — combine into ONE value
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((total, n) => total + n, 0);
// → 15

// Map — dictionary (key → value)
const scores = new Map<string, number>();
scores.set("math", 95);
scores.get("math");              // 95
scores.has("math");              // true
scores.size;                     // 1

// Set — unique values only!
const tags = new Set<string>();
tags.add("javascript");
tags.add("javascript");          // ignored (duplicate)
tags.size;                       // 1

// Spread — merge arrays
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];     // [1, 2, 3, 4]

// Destructuring
const [first, second] = fruits;  // first="apple", second="banana"`,funFact:"The .reduce() method is considered the most powerful array method. You can implement map, filter, and almost any other operation using reduce! Senior developers flex with it.",quiz:[{q:"What's the difference between const and let?",opts:["const is faster","const cannot be reassigned; let can","const is for objects, let is for primitives","There's no real difference"],ans:1},{q:"Which array method combines all items into ONE value?",opts:["map","filter","reduce","find"],ans:2},{q:"What does 'Set' guarantee that a regular array doesn't?",opts:["Faster access","No duplicate values","Better performance","Automatic sorting"],ans:1},{q:"What does TypeScript's type inference mean for developers?",opts:["You don't need to write types when TypeScript can automatically determine them from assigned values","TypeScript guesses randomly","You must always write explicit types","TypeScript ignores types entirely"],ans:0},{q:"What does the spread operator (...) do when used with arrays?",opts:["Deletes array items","Expands array elements or merges multiple arrays into a new one","Sorts array items","Creates typed arrays"],ans:1}],challenge:"Create an array of numbers [1-10]. Use array methods to: filter evens, map to double them, and reduce to sum. What's the result?",resources:[{type:"docs",title:"TypeScript Handbook - Everyday Types",url:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",source:"TypeScript Official"},{type:"video",title:"JavaScript Arrays Explained",url:"https://www.youtube.com/watch?v=7W4pQQ20nJg",source:"Web Dev Simplified"},{type:"docs",title:"MDN Array Reference",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",source:"MDN Web Docs"}],eli5:"Think of variables like labeled jars in your kitchen. One jar says 'cookies' and only holds cookies. Another says 'candies' and only holds candies. Arrays are like a cookie jar that holds MANY cookies in a row. You can count them, pick your favorite, or add more!",codeWalkthrough:["Comment: Use const by default for variables","Declaring a constant 'name' set to 'John' - cannot be reassigned","Declaring 'age' with let starting at 25 - CAN be changed","Reassigning age to 26 - allowed because we used let","","Comment: Basic TypeScript types","Explicitly typed string variable","Explicitly typed number variable","Explicitly typed boolean variable","Null type - intentionally empty","Undefined type - value not yet set","","Comment: Arrays hold multiple items of the same type","A string array with two fruit names","A number array with three numbers","","Comment: Array methods for manipulating arrays","push() adds 'cherry' to the end of the array","pop() removes and returns the last item","length tells how many items (2)","includes() checks if 'apple' is in the array (true)","indexOf() finds the position of 'banana' (index 1)","","Comment: Transform arrays with map","map() creates a new array by uppercasing each fruit","Comment: Result is ['APPLE', 'BANANA']","","Comment: Filter keeps only matching items","filter() keeps only fruits with more than 5 characters","Comment: Only 'banana' matches","","Comment: Find the first matching item","find() returns the first fruit starting with 'a'","Comment: Result is 'apple'","","Comment: Check if any or all items match","some() checks if at least one fruit equals 'apple' - true","every() checks if ALL fruits have more than 2 characters - true","","Comment: Reduce combines all items into one value","Creating a number array for reduce demo","reduce() adds all numbers starting from 0: result is 15","Comment: Final result is 15","","Comment: Map is a key-value dictionary","Creating a new Map with string keys and number values","Setting key 'math' to value 95","Getting value for key 'math' - returns 95","Checking if key 'math' exists - true","Getting the Map's size - 1 entry","","Comment: Set stores only unique values","Creating a new Set for strings","Adding 'javascript' to the set","Adding 'javascript' again - ignored because it's a duplicate!","Getting the set size - still 1","","Comment: Spread operator merges arrays","Array a with [1, 2]","Array b with [3, 4]","Spread both into a new merged array: [1, 2, 3, 4]","","Comment: Destructuring unpacks arrays into variables","Extracting first='apple' and second='banana' from the fruits array"],bugChallenge:{"code":"const age: string = 25;\nconst names: number[] = [\"Alice\", \"Bob\"];\nconsole.log(age, names);","hint":"Look at the types assigned versus the actual values...","answer":"Two type mismatches: 'age' is typed as string but assigned number 25, and 'names' is typed as number[] but contains strings. Fix: change to 'age: number = 25' and 'names: string[] = [\"Alice\", \"Bob\"]'."},difficulty:"beginner",prereqs:[1]},

  {id:4,title:"Objects & Interfaces",subtitle:"Structuring Complex Data",analogy:"Objects are like student ID cards — they have labeled fields (name, age, email). Interfaces are like the ID card DESIGN — they say 'every card MUST have these fields with these types.' Separate objects follow the same design!",points:[{t:"Objects as Key-Value Bags",d:"Objects store multiple pieces of info about ONE thing. { name: 'John', age: 25, email: 'j@m.com' }. Access with dot notation: user.name or user['name']."},{t:"Interfaces Define Shapes",d:"interface User { name: string; age: number; } tells TypeScript 'a User MUST have name and age with these types.' Any object claiming to be a User must match this shape."},{t:"Optional Properties with ?",d:"interface User { name: string; email?: string } means email CAN be missing. Required = must exist. Optional = might not exist."},{t:"Readonly Properties",d:"interface Config { readonly apiUrl: string } means you can READ it but never CHANGE it. Great for constants!"},{t:"Type vs Interface",d:"Both define shapes but use them differently: interface for objects (most common), type for unions/literals/functions. Interface can be extended; type uses intersection (&)."},{t:"Extending Interfaces",d:"interface Dog extends Animal { breed: string } means Dog has everything Animal has PLUS breed. Inheritance = less repetition!"},{t:"Nested Interfaces",d:"Objects inside objects: { user: { name: string; address: { city: string; country: string } } }. Build complex shapes by nesting!"},{t:"Index Signatures for Dynamic Keys",d:"interface Colors { [key: string]: string } means you can have ANY string key with string values. Perfect when keys aren't known in advance!"}],whatIs:"Objects are collections of key-value pairs. Interfaces define the expected shape of an object — what properties it must have and their types. A well-defined interface prevents bugs by ensuring objects have the required structure.",realWorld:"Every API response is an object. Every database record is an object. Learning to design good interfaces is one of the most important skills in TypeScript!",code:`// Simple object
const user = {
  name: "John",
  age: 25,
  email: "john@mail.com"
};

// Access values
user.name;              // "John"
user["age"];            // 25 (bracket notation)

// Change values (const allows changing INSIDE)
user.age = 26;          // OK!

// Define shape with interface
interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  phone?: string;       // ? = optional
  readonly createdAt: Date;  // cannot change
}

// Use the interface
const john: User = {
  id: "1",
  name: "John",
  age: 25,
  email: "john@mail.com",
  // phone is optional — OK to skip!
  createdAt: new Date()
};

// Extending interfaces — inheritance!
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Rex",
  age: 5,
  breed: "Labrador"
};

// Nested interfaces
interface Address {
  street: string;
  city: string;
  country: string;
}

interface Person {
  name: string;
  address: Address;
  friends: Person[];      // array of Persons!
}

// Type vs Interface
type Status = "active" | "inactive";  // type for unions
type Callback = (x: number) => void;  // type for functions
interface Config {                     // interface for objects
  apiUrl: string;
  port: number;
}

// Index signatures — unknown keys
interface ColorMap {
  [colorName: string]: string;
}

const colors: ColorMap = {
  red: "#FF0000",
  blue: "#0000FF",
  green: "#00FF00"
};`,funFact:"The term 'structural typing' means TypeScript checks the SHAPE of objects, not their name. If it looks like a duck and quacks like a duck, TypeScript treats it as a duck!",quiz:[{q:"What is the difference between an interface and a type alias for defining object shapes?",opts:["Interfaces are faster at runtime","Interfaces can be extended and merged across declarations; type aliases use intersections and cannot be reopened","Type aliases are only for primitives","There is no difference at all"],ans:1},{q:"Can you change a readonly property after creation?",opts:["Yes, always","No, readonly means it cannot be changed","Only in production","Only if it's a string"],ans:1},{q:"When should you use 'interface' vs 'type'?",opts:["They're identical, use either","interface for objects, type for everything else","type for objects, interface for functions","It depends on the file size"],ans:1},{q:"What does 'readonly' do when applied to an interface property?",opts:["The property can be read but never modified after the object is created","The property is hidden from other files","The property becomes optional","The property is converted to a string"],ans:0},{q:"When should you use 'type' instead of 'interface' in TypeScript?",opts:["Always use type, never interface","When defining union types, literal types, or function types that interface cannot express","Only for numbers","They are completely identical"],ans:1}],challenge:"Design an interface for a Product (name, price, description, imageUrl, inStock). Then create 3 product objects and use them in an array!",resources:[{type:"docs",title:"TypeScript Handbook - Object Types",url:"https://www.typescriptlang.org/docs/handbook/2/objects.html",source:"TypeScript Official"},{type:"docs",title:"TypeScript Interfaces",url:"https://www.typescriptlang.org/docs/handbook/interfaces.html",source:"TypeScript Official"},{type:"video",title:"TypeScript Interfaces Explained",url:"https://www.youtube.com/watch?v=VbW6vWTaHOY",source:"Web Dev Simplified"}],eli5:"Objects are like your student ID card - it has labeled spots for your name, age, and photo. An interface is like the blank ID card template that says 'every card MUST have these spots.' If you forget to fill in your name, someone says 'Hey, you missed a spot!'",codeWalkthrough:["Simple object","","","","","","","Access values","","","","Change values (const allows changing INSIDE)","","","Define shape with interface","","","","","","","","","","Use the interface","","","","","","phone is optional — OK to skip!","","","","Extending interfaces — inheritance!","","","","","","","","","","","","","","","","Nested interfaces","","","","","","","","","","","","","Type vs Interface","","","","","","","","Index signatures — unknown keys","","","","","","","","",""],bugChallenge:{"code":"interface User {\n  name: string;\n  age: number;\n}\n\nconst user: User = {\n  name: \"Alice\",\n  age: \"twenty-five\"\n};","hint":"Check if the value types match what the interface expects...","answer":"The interface says 'age' must be a number, but 'twenty-five' is a string. Fix: change the value to a number like 25."},difficulty:"beginner",prereqs:[1,3]},

  {id:5,title:"Functions & Arrow Functions",subtitle:"Reusable Recipes of Code",analogy:"A function is a recipe. You write it ONCE, use it MANY times. Arrow functions are just a shorter way to write recipes. Both do the same thing — arrow functions just have less boilerplate!",points:[{t:"Function Declarations",d:"The traditional way to define functions: function add(a: number, b: number): number { return a + b; }. Function declarations are hoisted, meaning you can call them before they appear in the code. They are verbose but very clear and readable for beginners learning the basics."},{t:"Arrow Functions — The Modern Way",d:"The modern shorthand: const add = (a: number, b: number): number => a + b. Arrow functions are shorter and used everywhere in modern JavaScript and React. If the body is a single expression, you can skip the curly braces and return keyword. They also do not bind their own 'this' context."},{t:"Optional & Default Parameters",d:"function greet(name: string, title?: string) {} means title is optional — callers can skip it. Use defaults for common values: function greet(name: string, greeting = 'Hello') {} means greeting defaults to 'Hello' if not provided. This reduces boilerplate and makes your API flexible."},{t:"Rest Parameters (...args)",d:"The three dots collect ALL remaining arguments into an array: function sum(...numbers: number[]): number {}. Call it with sum(1,2,3,4,5) and numbers becomes [1,2,3,4,5]. This is flexible because you can pass any number of arguments without defining each one separately in the signature."},{t:"Function Types",d:"type MathFn = (a: number, b: number) => number; describes a function's shape — its parameters and return type. You can use this type to ensure variables and parameters hold functions with the correct signature: const add: MathFn = (a,b) => a+b. TypeScript verifies the assignment matches."},{t:"Callbacks — Passing Functions",d:"A callback is a function passed as an argument to another function: function doMath(a: number, b: number, operation: MathFn) {}. The receiving function calls it back at the right time. Callbacks are the foundation of event handlers, array methods like map and filter, and asynchronous patterns."},{t:"Function Overloads",d:"function format(value: string): string; function format(value: number): string; — same function name with different parameter types. TypeScript picks the right overload automatically based on what you pass, giving you precise return types for each call. Useful for utility functions that accept multiple input types."},{t:"Closures — Functions with Memory",d:"A closure is a function that remembers variables from its outer scope even after that scope has finished executing. For example, a counter function that returns an increment function — the inner function closes over the count variable and keeps it alive between calls. Closures power many JavaScript patterns."},{t:"Pure Functions & Side Effects",d:"A pure function always returns the same output for the same input and changes nothing outside itself. Functions that modify global state, write to a database, or log to the console have side effects. Keeping functions pure makes your code predictable, testable, and easier to debug in large applications."}],whatIs:"Functions are reusable blocks of code. They take input (parameters), do work, and return output. TypeScript requires you to specify parameter types and return types. Arrow functions are shorter syntax for the same thing.",realWorld:"Almost every function you write will be an arrow function. They're so common in React (hooks, event handlers) that you'll type => a hundred times a day!",code:`// Named function — traditional way
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function — full version (pick ONE style)
const addArrow = (a: number, b: number): number => {
  return a + b;
};

// Arrow function — short version (one line!)
const addShort = (a: number, b: number) => a + b;

// No parameters
const sayHi = () => "Hi!";

// One parameter (parentheses optional)
const double = (x: number) => x * 2;

// Multiple lines with arrow function
const greetArrow = (name: string) => {
  console.log("Hello " + name);
  return \`Welcome, \${name}!\`;
};

// Optional parameter (each example below is standalone)
function greetWithTitle(name: string, title?: string) {
  if (title) {
    return \`Hello \${title} \${name}\`;
  }
  return \`Hello \${name}\`;
}
greetWithTitle("John");          // "Hello John"
greetWithTitle("John", "Mr.");   // "Hello Mr. John"

// Default parameter
function greetDefault(name: string, greeting: string = "Hello") {
  return \`\${greeting} \${name}\`;
}
greetDefault("John");           // "Hello John"
greetDefault("John", "Hey");    // "Hey John"

// Rest parameters — any number of arguments!
function sum(...numbers: number[]): number {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
sum(1, 2);           // 3
sum(1, 2, 3, 4, 5);  // 15

// Function type
type MathFn = (a: number, b: number) => number;
const add: MathFn = (a, b) => a + b;
const multiply: MathFn = (a, b) => a * b;

// Callback — pass function as parameter
function doMath(a: number, b: number, operation: MathFn): number {
  return operation(a, b);
}
doMath(5, 3, add);       // 8
doMath(5, 3, multiply);  // 15

// Function overloads
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
format("hello");  // "HELLO"
format(3.14159);  // "3.14"`,funFact:"Arrow functions don't have their own 'this' binding. This is confusing at first but makes them perfect for passing to React components!",quiz:[{q:"What's the difference between a function and an arrow function?",opts:["Arrow functions are faster","Arrow functions have shorter syntax AND don't bind their own 'this', unlike regular functions","Arrow functions only work with numbers","Function declarations are more common"],ans:1},{q:"What does the ... (spread/rest) operator do in function parameters?",opts:["Repeats the code","Collects all arguments into an array","Deletes extra parameters","Distributes values equally"],ans:1},{q:"Can a function with ? parameters be called without that parameter?",opts:["No, all parameters are required","Yes, optional parameters can be skipped","Only if you provide a default value","No, it will crash"],ans:1},{q:"What is a closure in JavaScript?",opts:["A function that remembers and accesses variables from its outer scope even after that scope has finished","A function that has been deleted","A function that runs only once","A function with no return value"],ans:0},{q:"What is a callback function?",opts:["A function that calls you back on the phone","A function passed as an argument to another function, to be called later","A function that undoes another function","A function that returns nothing"],ans:1}],challenge:"Write an arrow function that takes an array of numbers and returns the average. Test with [10, 20, 30]!",resources:[{type:"docs",title:"MDN Arrow Functions",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",source:"MDN Web Docs"},{type:"docs",title:"TypeScript Handbook - Functions",url:"https://www.typescriptlang.org/docs/handbook/2/functions.html",source:"TypeScript Official"},{type:"video",title:"Arrow Functions Tutorial",url:"https://www.youtube.com/watch?v=h33Srr5J9nY",source:"Web Dev Simplified"}],eli5:"A function is like a recipe card. It says: 'Give me flour and eggs, and I'll give you a cake.' You write the recipe once, then use it as many times as you want! Arrow functions are just a shorter way to write the same recipe.",codeWalkthrough:["Named function — traditional way","Declaring a function","Returning a value","Closing block","","Arrow function — full version","Declaring a variable","Returning a value","Closing block","","Arrow function — short version (one line!)","Declaring a variable","","No parameters","Declaring a variable","","One parameter (parentheses optional)","Declaring a variable","","Multiple lines with arrow function","Declaring a variable","Printing output to the console","Returning a value","Closing block","","Optional parameter","Declaring a function","Conditional check","Returning a value","Closing block","Returning a value","Closing block","","","","Default parameter","Declaring a function","Returning a value","Closing block","","","","Rest parameters — any number of arguments!","Declaring a function","Declaring a variable","Loop iteration","","Closing block","Returning a value","Closing block","","","","Function type","Defining a type alias","Declaring a variable","Declaring a variable","","Callback — pass function as parameter","Declaring a function","Returning a value","Closing block","","","","Function overloads","Declaring a function","Declaring a function","Declaring a function","Conditional check","Returning a value","Closing block","Returning a value","Closing block","",""],bugChallenge:{"code":"const add = (a: number, b: number): string => {\n  return a + b;\n};","hint":"Look at what the function actually returns versus its declared return type...","answer":"The function returns a + b (number + number = number), but the return type is declared as string. Fix: change the return type from 'string' to 'number'."},difficulty:"beginner",prereqs:[1,3]},

  {id:6,title:"Modules & Imports",subtitle:"Organizing Code Like a Pro",analogy:"Think of modules like rooms in a building. Each room (file) has its own purpose — a kitchen, a bedroom, a bathroom. The hallways (imports) connect them. You don't put your oven in the bathroom, and you don't dump all your code in one file. Modules let you organize, share, and reuse code between rooms!",points:[{t:"ES Modules (import/export)",d:"ES Modules are the modern standard for organizing JavaScript code. Use 'export' to share functions, classes, or variables from a file, and 'import' to bring them in. ES Modules are statically analyzable, meaning bundlers can remove unused code (tree shaking) for smaller production builds."},{t:"Named vs Default Exports",d:"Named exports let you share multiple things by name from one file: export const add = ... and export const subtract = .... Default exports designate one main export per file: export default class App. You can mix both in the same file. Named exports are preferred because they enable better IDE refactoring."},{t:"CommonJS (require/module.exports)",d:"CommonJS is the older Node.js module system: module.exports = { ... } and const x = require('./file'). It loads modules synchronously at runtime. You will still encounter it in many config files and older packages, so know the syntax, but prefer ES Modules for new code."},{t:"Barrel Files (index.ts)",d:"A barrel file re-exports from multiple files in a directory: export * from './users.service' and export * from './users.dto'. Consumers import everything from one clean path: import { UserService, UserDTO } from './users'. Barrel files simplify imports and create a clear public API for each module."},{t:"Circular Dependencies",d:"File A imports File B, and File B imports File A — this creates a circular dependency that can cause undefined values or runtime crashes. Avoid by extracting shared code into a third file or using dependency injection. ESLint plugins like eslint-plugin-import can automatically detect circular imports."},{t:"Dynamic Imports",d:"import('./heavy-module').then(m => m.doStuff()) loads modules on demand instead of at startup. This is essential for code splitting in web apps — only download the code users actually need. React.lazy() uses dynamic imports to lazy-load route components and improve initial page load performance."},{t:"Path Aliases",d:"Instead of fragile relative paths like '../../../utils/helpers', configure path aliases in tsconfig.json: @utils/helpers, @services/user. This gives you clean readable imports that do not break when you reorganize your folder structure, making large codebases significantly easier to navigate and refactor."},{t:"Tree Shaking & Bundle Optimization",d:"Modern bundlers like Webpack, Vite, and esbuild analyze your ES Module import statements and automatically remove code that is never actually used. If you import only one function from a large utility library, the rest is shaken off. This results in smaller bundle sizes and faster load times for your users."}],whatIs:"Modules are self-contained units of code that export values (functions, classes, variables) for other modules to import. ES Modules (import/export) is the modern standard, while CommonJS (require) is the older Node.js format. Modules prevent naming conflicts and enable code reuse.",realWorld:"Every file in React and NestJS is a module. React components export themselves for use in other components. NestJS services export their functionality for controllers to import. Package managers (npm) are essentially module distribution systems.",code:`// --- Named Exports ---
// math.ts
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;

// app.ts
import { add, subtract } from './math';
console.log(add(2, 3));       // 5
console.log(subtract(5, 2));  // 3

// --- Default Export ---
// Logger.ts
export default class Logger {
  log(msg: string) { console.log(msg); }
}

// app.ts
import Logger from './Logger';  // no curly braces for default
const logger = new Logger();
logger.log('Hello!');

// --- Barrel File (index.ts) ---
// users/index.ts
export { UserService } from './user.service';
export { UserDTO } from './user.dto';
export { UserEntity } from './user.entity';

// Now import everything from one place:
import { UserService, UserDTO } from './users';

// --- Dynamic Import (lazy loading) ---
const loadChart = async () => {
  const { Chart } = await import('./heavy-chart-lib');
  return new Chart();
};

// --- Path Aliases (tsconfig.json) ---
// Before: import { helper } from '../../../shared/utils/helper';
// After:  import { helper } from '@shared/utils/helper';`,funFact:"JavaScript originally had NO module system at all. Every script shared the same global scope. This led to chaos until CommonJS (2009) and ES Modules (2015) brought order to the madness.",quiz:[{q:"What is the difference between named and default exports?",opts:["Named exports are faster","You can have multiple named exports but only one default export per file","Default exports are deprecated","There is no difference"],ans:1},{q:"What is a barrel file (index.ts)?",opts:["A file that stores binary data","A file that re-exports from multiple files for cleaner imports","A file that contains test data","A configuration file for npm"],ans:1},{q:"What does a dynamic import do?",opts:["Imports faster than static imports","Loads a module on-demand at runtime instead of upfront","Creates a new module from scratch","Imports from the internet"],ans:1},{q:"What does tree shaking accomplish in a JavaScript bundler?",opts:["Automatically removes unused exported code from the final production bundle","Sorts import statements alphabetically","Reorganizes the project directory structure","Shakes out syntax errors from the code"],ans:0},{q:"What is a path alias like @utils/helpers useful for?",opts:["Making imports slower","Replacing fragile deep relative paths with clean readable imports that don't break when files move","Creating new npm packages","Aliasing database tables"],ans:1}],challenge:"Create three files: math.ts (export add, multiply), string-utils.ts (export capitalize, reverse), and an index.ts barrel file that re-exports everything. Import from the barrel file in app.ts!",resources:[{type:"docs",title:"MDN JavaScript Modules",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",source:"MDN Web Docs"},{type:"docs",title:"TypeScript Modules",url:"https://www.typescriptlang.org/docs/handbook/2/modules.html",source:"TypeScript Official"},{type:"video",title:"JavaScript Modules in 100 Seconds",url:"https://www.youtube.com/watch?v=cRHQNNcYf6s",source:"Fireship"}],eli5:"Imagine your toys are scattered everywhere. Modules are like labeled toy boxes - one for cars, one for dolls, one for blocks. When you want to play with cars, just open the car box! You can also share your favorite toy with a friend by lending it out (exporting).",codeWalkthrough:["--- Named Exports ---","math.ts","Exporting for use in other files","Exporting for use in other files","","app.ts","Importing required dependencies","Printing output to the console","Printing output to the console","","--- Default Export ---","Logger.ts","Exporting for use in other files","","Closing block","","app.ts","Importing required dependencies","Declaring a variable","","","--- Barrel File (index.ts) ---","users/index.ts","Exporting for use in other files","Exporting for use in other files","Exporting for use in other files","","Now import everything from one place:","Importing required dependencies","","--- Dynamic Import (lazy loading) ---","Declaring a variable","Declaring a variable","Returning a value","Closing block","","--- Path Aliases (tsconfig.json) ---","Before: import { helper } from '../../../shared/utils/helper';","After:  import { helper } from '@shared/utils/helper';"],bugChallenge:{"code":"// math.ts\nexport default const add = (a: number, b: number) => a + b;\nexport default const subtract = (a: number, b: number) => a - b;","hint":"How many default exports can a single file have?","answer":"A file can only have ONE default export, but this file tries to have two. Fix: use named exports (remove 'default') or keep only one as default."},difficulty:"beginner",prereqs:[1,5]},

  {id:7,title:"Union Types & Type Narrowing",subtitle:"Being Flexible While Safe",analogy:"A union type is like a parking spot that accepts 'cars OR motorcycles.' Type narrowing is like checking WHICH vehicle is parked there before trying to ride it. You narrow down the possibilities until you KNOW what type it is!",points:[{t:"Union Types (|)",d:"A variable that can be ONE of several types: string | number means it could be EITHER. Super flexible! Use when a function needs to handle multiple types."},{t:"Literal Unions",d:"type Status = 'active' | 'inactive' | 'banned'; only these EXACT values allowed. Typo like 'activated'? Error! Much safer than plain strings."},{t:"Type Narrowing with typeof",d:"if (typeof id === 'string') { /* handle string */ } else { /* handle number */ }. After the check, TypeScript KNOWS which type it is in each branch."},{t:"Truthiness Narrowing",d:"if (user) { /* user is NOT null/undefined */ }. TypeScript narrows nullable types. Check if a value is truthy to eliminate null/undefined."},{t:"The 'in' Operator",d:"if ('swim' in animal) { /* animal has swim property */ }. Check if object has a property to narrow union types. Great for discriminating between object types!"},{t:"instanceof for Classes",d:"if (value instanceof Date) { /* it's a Date */ }. Check if something is an instance of a class. Works with custom classes too!"},{t:"Intersection Types (&)",d:"type Combined = A & B means BOTH types at once. Must have all properties from A AND all properties from B. Useful for combining interfaces."},{t:"Exhaustiveness Checking",d:"Use unions with switch to handle ALL cases. If you forget a case, TypeScript errors! Perfect for state machines and enums."}],whatIs:"Union types let variables be multiple types. Type narrowing means checking 'what type is it RIGHT NOW?' in different code branches. After you narrow, TypeScript knows the specific type and prevents type errors.",realWorld:"Union types power real-world features: API responses (success | error), user states (loggedIn | loggedOut), form status (idle | loading | error | success).",code:`// Union type — string OR number
let id: string | number;
id = "abc";    // OK
id = 123;      // OK
// id = true;  // ERROR!

// Literal union — only specific values
type Status = "active" | "inactive" | "banned";
let status: Status = "active";     // OK
// status = "deleted";             // ERROR!

// Using unions in functions
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());  // TS knows: string
  } else {
    console.log(id.toFixed(2));     // TS knows: number
  }
}

// Truthiness narrowing
function greet(name: string | null) {
  if (name) {
    // name is string (not null)
    console.log("Hello " + name);
  } else {
    console.log("Hello stranger");
  }
}

// "in" operator — check if property exists
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();  // TS knows: Fish
  } else {
    animal.fly();   // TS knows: Bird
  }
}

// instanceof — for classes
function logDate(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.toISOString());  // TS knows: Date
  } else {
    console.log(value);  // TS knows: string
  }
}

// Intersection — must be BOTH types
type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;  // must have name AND age

const p: Person = { name: "John", age: 25 };  // Required!

// Exhaustiveness with switch
type Result = "success" | "error" | "pending";

function handle(result: Result) {
  switch (result) {
    case "success":
      console.log("Done!");
      break;
    case "error":
      console.log("Failed!");
      break;
    case "pending":
      console.log("Loading...");
      break;
    // If you forget a case, TypeScript ERRORS!
  }
}`,funFact:"Type guards (the if statements that narrow types) are so important that TypeScript has built-in support for them. Miss a case? The compiler catches it!",quiz:[{q:"What does a union type (|) allow?",opts:["Multiple inheritance","A variable to be ONE of several types","Faster code execution","Multiple return statements"],ans:1},{q:"What does type narrowing do?",opts:["Makes types smaller in memory","Figures out which specific type a value is in each code branch","Deletes unused types","Optimizes the compiler"],ans:1},{q:"Which operator checks if an object has a property?",opts:["hasProperty()","property in object","object.has()","property?"],ans:1},{q:"What does an intersection type (A & B) require an object to have?",opts:["ALL properties from both A and B combined","Either A or B properties, not both","Only the shared properties between A and B","No properties at all"],ans:0},{q:"How does the 'in' operator help with type narrowing?",opts:["It imports modules","It checks if an object has a specific property, letting TypeScript narrow the union type","It checks array membership","It creates new properties"],ans:1}],challenge:"Create a union type for 'success' | 'error' | 'loading'. Write a function that takes this type and handles ALL three cases with a switch statement!",resources:[{type:"docs",title:"TypeScript Handbook - Narrowing",url:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html",source:"TypeScript Official"},{type:"docs",title:"TypeScript Union Types",url:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types",source:"TypeScript Official"},{type:"video",title:"TypeScript Types Explained",url:"https://www.youtube.com/watch?v=ahCwqrYpIuM",source:"Fireship"}],eli5:"Imagine a parking spot that fits either a car OR a bicycle. Before you try to drive it, you check: 'Is it a car or a bicycle?' That checking is called narrowing! You look at what something is before you use it so you don't try to pedal a car.",codeWalkthrough:["Union type — string OR number","Declaring a variable","","","id = true;  // ERROR!","","Literal union — only specific values","Defining a type alias","Declaring a variable","status = \"deleted\";             // ERROR!","","Using unions in functions","Declaring a function","Conditional check","Printing output to the console","Conditional check","Printing output to the console","Closing block","Closing block","","Truthiness narrowing","Declaring a function","Conditional check","name is string (not null)","Printing output to the console","Conditional check","Printing output to the console","Closing block","Closing block","","\"in\" operator — check if property exists","Defining a type alias","Defining a type alias","","Declaring a function","Conditional check","","Conditional check","","Closing block","Closing block","","instanceof — for classes","Declaring a function","Conditional check","Printing output to the console","Conditional check","Printing output to the console","Closing block","Closing block","","Intersection — must be BOTH types","Defining a type alias","Defining a type alias","Defining a type alias","","Declaring a variable","","Exhaustiveness with switch","Defining a type alias","","Declaring a function","Switch statement for multiple cases","Handling a specific case","Printing output to the console","Exiting the current case","Handling a specific case","Printing output to the console","Exiting the current case","Handling a specific case","Printing output to the console","Exiting the current case","If you forget a case, TypeScript ERRORS!","Closing block","Closing block"],bugChallenge:{"code":"function printId(id: string | number) {\n  console.log(id.toUpperCase());\n}","hint":"Can you call toUpperCase() on a number?","answer":"The function accepts string | number, but toUpperCase() only works on strings. If id is a number, it crashes. Fix: add typeof check: if (typeof id === 'string') { console.log(id.toUpperCase()); } else { console.log(id); }"},difficulty:"beginner",prereqs:[1,3]},

  {id:8,title:"Classes & OOP",subtitle:"Organizing Code Into Objects",analogy:"A class is a BLUEPRINT. A car blueprint says 'every car will have wheels, an engine, a drive() method.' Objects are the actual cars built from that blueprint. OOP groups data (properties) and actions (methods) together!",points:[{t:"Classes = Blueprints",d:"class User { name: string; constructor(n: string) { this.name = n; } }. Define ONCE, create MANY objects from it."},{t:"Constructor — the Setup",d:"constructor(name: string) { this.name = name; } runs automatically when you do new User('John'). It initializes the object."},{t:"Properties & Methods",d:"Properties store data. Methods are functions. A User has name (property) and greet() (method). Properties = nouns. Methods = verbs!"},{t:"Access Modifiers: public/private/protected",d:"public (default) = anyone accesses. private = only THIS class. protected = this class + child classes. Use private to hide implementation details!"},{t:"Readonly — Can't Change",d:"readonly id: string means you can READ it but never MODIFY it. Great for IDs and timestamps that should never change."},{t:"Inheritance with extends",d:"class Dog extends Animal { } means Dog is an Animal PLUS extra stuff. Dog gets ALL of Animal's properties and methods."},{t:"Implements Interface",d:"class Report implements Printable { } means Report promises to have everything Printable requires. TypeScript checks it!"},{t:"Abstract Classes",d:"abstract class Shape { abstract area(): number; } cannot create Shape directly — MUST extend it. Forces child classes to implement abstract methods!"}],whatIs:"Classes bundle data (properties) and actions (methods) together. TypeScript adds access modifiers (public/private/protected) to control visibility. Inheritance lets classes extend parent classes. The 4 pillars of OOP are encapsulation, inheritance, polymorphism, and abstraction.",realWorld:"NestJS services are classes. React class components are classes. Every enterprise app uses classes to organize business logic!",code:`// Simple class
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return \`Hi, I'm \${this.name}\`;
  }
}

const john = new User("John", 25);
john.greet();  // "Hi, I'm John"

// Shorthand constructor (more common!)
class User {
  constructor(
    public name: string,      // auto-creates this.name
    public age: number,       // auto-creates this.age
    private password: string  // auto-creates this.password (private!)
  ) {}
}

// Access modifiers
class User {
  public name: string;      // anyone can access (default)
  private password: string;  // only User class can access
  protected role: string;    // User + child classes can access
  readonly id: string;       // can READ, cannot CHANGE

  constructor(name: string, password: string) {
    this.id = "auto-generated";
    this.name = name;
    this.password = password;
    this.role = "user";
  }

  private hashPassword(): string {
    return "hashed_" + this.password;
  }
}

const u = new User("John", "secret");
u.name;        // OK — public
// u.password;  // ERROR — private
// u.id = "x";  // ERROR — readonly

// Inheritance
class Animal {
  constructor(public name: string) {}

  speak(): string {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);  // call parent constructor
  }

  // Override parent method
  speak(): string {
    return \`\${this.name} barks!\`;
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak();  // "Rex barks!"

// Implements interface
interface Printable {
  print(): void;
}

class Report implements Printable {
  print(): void {
    console.log("Printing...");
  }
}

// Abstract class
abstract class Shape {
  abstract area(): number;  // child MUST implement

  describe(): string {       // shared method
    return \`Area is \${this.area()}\`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// const s = new Shape();     // ERROR — cannot create abstract
const c = new Circle(5);
c.area();       // ~78.54`,funFact:"The 4 Pillars of OOP: Encapsulation (hiding details), Inheritance (extending classes), Polymorphism (same method, different behavior), Abstraction (simplifying complexity). Master these and you master OOP!",quiz:[{q:"What does 'new User()' do?",opts:["Creates a copy of the User class","Calls the constructor and creates a User object","Deletes the User class","Makes User public"],ans:1},{q:"What's the difference between public and private?",opts:["public is faster","public can be accessed from anywhere; private only in that class","They're the same thing","private is more secure"],ans:1},{q:"What does 'extends' do?",opts:["Adds more memory","Creates a child class that inherits from parent","Extends the file size","Extends the type system"],ans:1},{q:"What does the shorthand constructor 'constructor(public name: string)' do in TypeScript?",opts:["Automatically creates and assigns the this.name property, reducing boilerplate code","Only declares a parameter without creating a property","Makes the constructor faster","Creates a static property"],ans:0},{q:"What is the key difference between abstract methods and regular methods in an abstract class?",opts:["There is no difference","Abstract methods have no implementation body and MUST be implemented by child classes","Abstract methods are faster","Regular methods cannot be overridden"],ans:1}],challenge:"Create a class hierarchy: Animal (with speak method), then Dog and Cat that override it. Create instances and call speak on each!",resources:[{type:"docs",title:"MDN JavaScript Classes",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",source:"MDN Web Docs"},{type:"docs",title:"TypeScript Classes",url:"https://www.typescriptlang.org/docs/handbook/2/classes.html",source:"TypeScript Official"},{type:"video",title:"Object Oriented Programming in JavaScript",url:"https://www.youtube.com/watch?v=PFmuCDHHpwk",source:"Fireship"}],eli5:"A class is like a cookie cutter. The cookie cutter (class) is the shape, and each cookie you make (object) looks the same but can have different sprinkles. You design the cutter once, then stamp out as many cookies as you want!",codeWalkthrough:["Simple class","Declaring a class","","","","","","","Closing block","","","Returning a value","Closing block","Closing block","","Declaring a variable","","","Shorthand constructor (more common!)","Declaring a class","","","","","","Closing block","","Access modifiers","Declaring a class","","","","","","","","","","","Closing block","","","Returning a value","Closing block","Closing block","","Declaring a variable","","u.password;  // ERROR — private","u.id = \"x\";  // ERROR — readonly","","Inheritance","Declaring a class","","","","Returning a value","Closing block","Closing block","","Declaring a class","","","Closing block","","Override parent method","","Returning a value","Closing block","Closing block","","Declaring a variable","","","Implements interface","Defining an interface shape","","Closing block","","Declaring a class","","Printing output to the console","Closing block","Closing block","","Abstract class","","","","Grouping related tests together","Returning a value","Closing block","Closing block","","Declaring a class","","","Closing block","","","Returning a value","Closing block","Closing block","","const s = new Shape();     // ERROR — cannot create abstract","Declaring a variable",""],bugChallenge:{"code":"class Dog {\n  private name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n}\nconst dog = new Dog(\"Rex\");\nconsole.log(dog.name);","hint":"Check the access modifier on the name property...","answer":"The property 'name' is private, so dog.name cannot be accessed outside the class. Fix: change 'private' to 'public', or add a public getName() method."},difficulty:"intermediate",prereqs:[1,4,5]},

  {id:9,title:"Async/Await & Promises",subtitle:"Handling Work That Takes Time",analogy:"A Promise is like ordering pizza. You get a receipt (Promise) immediately. Pizza isn't ready yet — it's PENDING. Later: Pizza arrives (FULFILLED) or they call saying it's cancelled (REJECTED). async/await is a cleaner way to handle pizza than the old .then() way!",points:[{t:"Promise States: Pending → Fulfilled → Rejected",d:"PENDING: waiting. FULFILLED: got the value. REJECTED: error happened. A Promise is always in one of these states."},{t:"async/await — The Modern Way",d:"async function getName() { const name = await fetch(...); return name; } — await means 'pause here and wait for the Promise.' async functions always return Promises."},{t:"try/catch/finally — Error Handling",d:"try { await mayFail(); } catch(e) { console.error(e); } finally { cleanup(); } — same as other languages. finally ALWAYS runs."},{t:"Promise.all — Parallel Execution",d:"await Promise.all([promise1, promise2, promise3]) runs ALL at once. If any fails, all fail. 10x faster than running them one-by-one!"},{t:"Custom Error Classes",d:"throw new Error('message') or throw new CustomError(). Catch with catch(error). Better error handling than undefined/null."},{t:".then/.catch — Old Way (Know It!)",d:"promise.then(value => {}).catch(error => {}) — works but gets messy with chains. Use async/await instead! But you'll see this in old code."},{t:"Promise.race",d:"await Promise.race([promise1, promise2]) — whichever promise finishes FIRST wins, and the rest are ignored. This is perfect for implementing timeouts: race your API call against a timer, and if the timer wins, you know the request took too long!"},{t:"Throw vs Return in async",d:"throw new Error() in an async function makes the Promise reject. Return a value makes it fulfill. Choose wisely!"}],whatIs:"Promises represent values that don't exist yet but will in the future. async/await is syntax sugar that makes Promises feel like normal code. It's the standard way to handle asynchronous work (API calls, file reads, timeouts).",realWorld:"Every API call is a Promise. React Query wraps Promises. You'll use async/await multiple times every day!",code:`// Promise states
const promise = fetch("https://api.example.com/user");
// PENDING: waiting for response
// then either:
// FULFILLED: response arrived
// REJECTED: network error

// async/await — the clean way! ✨
async function getUser() {
  try {
    const response = await fetch("https://api.example.com/user");
    const user = await response.json();
    console.log(user.name);
    return user;
  } catch (error) {
    console.error("Failed:", error);
    // handle error
  } finally {
    console.log("Request done!");  // always runs
  }
}

// Call async function
const user = await getUser();

// Multiple async operations
async function loadDashboard() {
  const user = await getUser(1);          // wait for user
  const posts = await getPosts(user.id);  // THEN wait for posts
  // Total time: 2sec + 2sec = 4 seconds ⏳
  return { user, posts };
}

// Promise.all — parallel execution! 🚀
async function loadDashboardFast() {
  const [user, posts, comments] = await Promise.all([
    getUser(1),
    getPosts(1),
    getComments(1)
  ]);
  // All run at SAME TIME!
  // Total time: 2 seconds (instead of 6!) ⚡
  return { user, posts, comments };
}

// .then/.catch (old way — avoid!)
fetch("https://api.example.com/user")
  .then(res => res.json())
  .then(user => console.log(user.name))
  .catch(error => console.error(error));
// Gets messy with more steps!

// Throwing errors in async
async function doSomething() {
  if (!user) {
    throw new Error("User not found!");  // Promise rejects
  }
  return "Success!";  // Promise fulfills
}

// Promise.race — first to finish wins
const result = await Promise.race([
  fetchFromServer1(),
  fetchFromServer2(),
  timeoutAfter(5000)
]);
// whichever completes first is returned!`,funFact:"Promises were inspired by other languages' Futures (Dart) and Completable Futures (Java). async/await was added to make Promises feel like normal synchronous code!",quiz:[{q:"What does 'await' do?",opts:["Makes code faster","Pauses execution and waits for Promise to finish","Avoids running code","Skips to the next line"],ans:1},{q:"What's the advantage of Promise.all over sequential awaits?",opts:["It's more readable","It runs Promises in parallel instead of one-by-one — much faster!","It's required by React","No real difference"],ans:1},{q:"What always runs in try/catch/finally?",opts:["try block","catch block","finally block","depends on errors"],ans:2},{q:"What happens when one promise in Promise.all() rejects?",opts:["The entire Promise.all() rejects immediately, even if other promises succeeded","Only the failed promise is skipped","All promises continue running","It retries the failed promise automatically"],ans:0},{q:"What does Promise.race() return?",opts:["All promise results in an array","The result of the slowest promise","The result of whichever promise settles first, whether fulfilled or rejected","Only successful promises"],ans:2}],challenge:"Create async functions that each take 1 second. Run 5 of them sequentially (measures time), then in parallel with Promise.all. How much faster?",resources:[{type:"docs",title:"MDN Async/Await",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises",source:"MDN Web Docs"},{type:"video",title:"JavaScript Promises in 100 Seconds",url:"https://www.youtube.com/watch?v=RvYYCGs45L4",source:"Fireship"},{type:"docs",title:"MDN Using Promises",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",source:"MDN Web Docs"}],eli5:"Imagine ordering a toy online. You don't get it right away - you get a tracking number (Promise). You can wait by the door all day (old way) or go play and someone tells you when it arrives (async/await). Much better!",codeWalkthrough:["Promise states","Declaring a variable","PENDING: waiting for response","then either:","FULFILLED: response arrived","REJECTED: network error","","async/await — the clean way! ✨","Declaring a function","Opening try block for error handling","Declaring a variable","Declaring a variable","Printing output to the console","Returning a value","Catching any errors from the try block","","handle error","Finally block - runs regardless of success or failure","Printing output to the console","Closing block","Closing block","","Call async function","Declaring a variable","","Multiple async operations","Declaring a function","Declaring a variable","Declaring a variable","Total time: 2sec + 2sec = 4 seconds ⏳","Returning a value","Closing block","","Promise.all — parallel execution! 🚀","Declaring a function","Declaring a variable","","","","","All run at SAME TIME!","Total time: 2 seconds (instead of 6!) ⚡","Returning a value","Closing block","",".then/.catch (old way — avoid!)","","Method chaining on the previous expression","Method chaining on the previous expression","Method chaining on the previous expression","Gets messy with more steps!","","Throwing errors in async","Declaring a function","Conditional check","Throwing an error","Closing block","Returning a value","Closing block","","Promise.race — first to finish wins","Declaring a variable","","","","","whichever completes first is returned!"],bugChallenge:{"code":"function getUser() {\n  const user = await fetch(\"/api/user\");\n  return user.json();\n}","hint":"What keyword is missing from the function declaration?","answer":"You can only use 'await' inside an 'async' function, but this function is not declared as async. Fix: change 'function getUser()' to 'async function getUser()'."},difficulty:"intermediate",prereqs:[1,5]},

  {id:10,title:"Error Handling",subtitle:"Catching Problems Before They Crash",analogy:"Error handling is like a safety net under a trapeze artist. The artist (your code) performs amazing feats, but sometimes things go wrong mid-air. Without a safety net (try/catch), they crash to the ground (app crashes). With it, they bounce back and the show goes on!",points:[{t:"try/catch/finally",d:"Wrap risky code in try { }. If it fails, catch(error) { } runs instead of crashing. finally { } runs no matter what — perfect for cleanup like closing connections."},{t:"Error Types",d:"TypeError (wrong type), ReferenceError (variable not found), SyntaxError (bad code), RangeError (out of bounds). Each tells you WHAT went wrong."},{t:"Custom Error Classes",d:"Extend the Error class for specific errors: class NotFoundError extends Error { }. Now you can catch different errors differently and add custom properties like statusCode."},{t:"Async Error Handling",d:"Async functions need try/catch around await calls. Without it, rejected promises silently fail. Always wrap await in try/catch!"},{t:"NestJS HttpException",d:"throw new HttpException('Not found', 404) sends a proper HTTP error response. NestJS has built-in exceptions: NotFoundException, BadRequestException, UnauthorizedException, ForbiddenException."},{t:"Exception Filters",d:"NestJS exception filters catch errors globally or per-controller. They transform errors into clean API responses with proper status codes and messages."},{t:"Validation Errors",d:"Invalid user input should return 400 Bad Request with details about what went wrong. NestJS ValidationPipe does this automatically with class-validator."},{t:"Error Logging",d:"Always log errors with context: what happened, where, and the stack trace. In production, use structured logging (JSON format) for easy searching and alerting."}],whatIs:"Error handling is the practice of anticipating, detecting, and gracefully responding to errors in your code. Instead of letting your app crash, you catch errors and either recover from them, show helpful messages, or log them for debugging. In NestJS, exception filters provide a structured way to handle HTTP errors.",realWorld:"Every production API must handle errors properly. A payment processing endpoint that crashes instead of returning a clear error message could cost thousands of dollars. Good error handling is the difference between a professional and amateur application.",code:`// Basic try/catch/finally
try {
  const data = JSON.parse('invalid json');
} catch (error) {
  console.error('Parse failed:', error.message);
} finally {
  console.log('This always runs');
}

// Custom Error Class
class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
    this.name = 'AppError';
  }
}

// Throw and catch custom errors
try {
  throw new AppError('User not found', 404);
} catch (error) {
  if (error instanceof AppError) {
    console.log(error.statusCode); // 404
  }
}

// Async error handling
async function fetchUser(id: string) {
  try {
    const user = await db.users.findUnique({ where: { id } });
    if (!user) throw new AppError('User not found', 404);
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error; // re-throw for the caller to handle
  }
}

// NestJS — Built-in exceptions
import { NotFoundException, BadRequestException } from '@nestjs/common';

@Get(':id')
async getUser(@Param('id') id: string) {
  const user = await this.userService.findOne(id);
  if (!user) throw new NotFoundException('User not found');
  return user;
}

// NestJS — Custom Exception Filter
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception instanceof HttpException
      ? exception.getStatus() : 500;
    response.status(status).json({
      statusCode: status,
      message: exception instanceof Error ? exception.message : 'Internal error',
      timestamp: new Date().toISOString(),
    });
  }
}`,funFact:"The most famous error in computing history is the Y2K bug. Programmers stored years as 2 digits (99 instead of 1999), meaning the year 2000 would appear as 00. Governments spent over $300 billion fixing it before midnight struck!",quiz:[{q:"What does the 'finally' block do in try/catch/finally?",opts:["Only runs if there's an error","Only runs if there's no error","Always runs, whether there's an error or not","Runs the code one final time"],ans:2},{q:"In NestJS, what does 'throw new NotFoundException()' do?",opts:["Deletes the resource","Returns a 404 HTTP response to the client","Crashes the server","Logs a warning"],ans:1},{q:"Why should you wrap await calls in try/catch?",opts:["It makes them faster","Unhandled rejected promises crash Node.js and leave errors uncaught in browsers","TypeScript requires it","It's just a coding style preference"],ans:1},{q:"What is the difference between a TypeError and a ReferenceError?",opts:["TypeError means wrong type operation (like null.method()), ReferenceError means accessing an undeclared variable","They are the same thing","TypeError is for TypeScript only","ReferenceError only occurs in browsers"],ans:0},{q:"Why should you re-throw errors after logging them in catch blocks?",opts:["To create duplicate errors","So the calling function can also handle the error appropriately instead of silently swallowing it","Re-throwing is bad practice","To crash the application"],ans:1}],challenge:"Create a custom NotFoundError and ValidationError class extending Error. Write an async function that fetches a user by ID — throw NotFoundError if not found, ValidationError if the ID format is wrong. Handle both in the catch block!",resources:[{type:"docs",title:"MDN Error Reference",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",source:"MDN Web Docs"},{type:"article",title:"Node.js Error Handling Best Practices",url:"https://nodejs.org/enapi/errors.html",source:"Node.js Official"},{type:"video",title:"Error Handling in JavaScript",url:"https://www.youtube.com/watch?v=blBoIyNhGvY",source:"Web Dev Simplified"}],eli5:"Imagine doing a science experiment. Sometimes things go BOOM! Error handling is like wearing safety goggles. 'try' means 'let me try this experiment', 'catch' means 'oops, something went wrong', and 'finally' means 'clean up the lab no matter what'.",codeWalkthrough:["Basic try/catch/finally","Opening try block for error handling","Declaring a variable","Catching any errors from the try block","","Finally block - runs regardless of success or failure","Printing output to the console","Closing block","","Custom Error Class","Declaring a class","","","","","","","","Closing block","Closing block","","Throw and catch custom errors","Opening try block for error handling","Throwing an error","Catching any errors from the try block","Conditional check","Printing output to the console","Closing block","Closing block","","Async error handling","Declaring a function","Opening try block for error handling","Declaring a variable","Conditional check","Returning a value","Catching any errors from the try block","","Throwing an error","Closing block","Closing block","","NestJS — Built-in exceptions","Importing required dependencies","","Decorator that adds metadata or behavior","","Declaring a variable","Conditional check","Returning a value","Closing block","","NestJS — Custom Exception Filter","Decorator that adds metadata or behavior","Exporting for use in other files","Catching any errors from the try block","Declaring a variable","Declaring a variable","Declaring a variable","","","","","","","Closing block","Closing block"],bugChallenge:{"code":"async function fetchData() {\n  const res = await fetch(\"/api/data\");\n  const data = await res.json();\n  return data;\n}","hint":"What happens if the fetch request fails?","answer":"There is no try/catch, so if fetch fails, the error is unhandled and crashes the app. Fix: wrap in try/catch: try { ... } catch (error) { console.error('Failed:', error); }"},difficulty:"intermediate",prereqs:[1,8,9]},

  {id:11,title:"React — The UI Wizard",subtitle:"Building Interfaces Like LEGO",analogy:"React is like building with LEGO blocks. Each component is a LEGO piece — a Button, a Card, a NavBar. Snap them together to build your page. Want to change the header? Just swap that LEGO piece. The rest stays untouched!",points:[{t:"Components = Building Blocks",d:"Everything in React is a component. A button, a form, a whole page — all are reusable pieces. Write once, use many times!"},{t:"JSX = HTML in JavaScript",d:"Write HTML-like syntax directly in your JavaScript/TypeScript. React translates it to JavaScript. Feels natural and powerful!"},{t:"State = Memory",d:"Components can remember things (like 'is this menu open?') using useState hooks. State changes → component re-renders."},{t:"Props = Communication",d:"Pass data DOWN from parent to child with props: &lt;Button color='blue' /&gt;. Parent controls child behavior."},{t:"Virtual DOM = Speed",d:"React only updates the parts of the page that changed — not the whole thing. Super efficient! Compares new vs old (diffing), updates only diffs."},{t:"Component Lifecycle",d:"Components are born (mount), live (update), and die (unmount). useEffect runs code when mounted or when dependencies change."},{t:"useContext — Sharing State Globally",d:"Pass data through the component tree without prop drilling. Create a context (like a global mailbox), provide it at the top, and any child component can read it. Perfect for themes, auth state, and language settings."},{t:"useReducer — Complex State Logic",d:"Like useState but for complex state. Instead of setting values directly, you dispatch actions like {type: 'ADD_ITEM', payload: item}. Works like Redux in miniature — great when state changes depend on previous state."}],whatIs:"React is a JavaScript library for building user interfaces with components. Components are functions that return JSX (HTML-like syntax). State lets components remember data. Props pass data between components. React's virtual DOM makes updates fast.",realWorld:"React powers Facebook, Instagram, Netflix, Airbnb, and thousands more apps. It's the most popular frontend library with millions of developers worldwide.",code:`// A simple React component — it's just a function! 🎯
import { useState } from 'react';

function LikeButton() {
  // State = component's memory
  const [likes, setLikes] = useState(0);
  const [emoji, setEmoji] = useState('👍');

  const handleClick = () => {
    setLikes(likes + 1);
    setEmoji(likes >= 10 ? '🔥' : likes >= 5 ? '❤️' : '👍');
  };

  return (
    <button onClick={handleClick}>
      {emoji} {likes} {likes === 1 ? 'like' : 'likes'}
    </button>
  );
}

// Using components together — like LEGO! 🧱
function App() {
  return (
    <div>
      <h1>My Awesome App</h1>
      <LikeButton />
      <LikeButton />  {/* Each has its own state! */}
    </div>
  );
}

// Props — pass data to components
interface ButtonProps {
  label: string;
  color: "blue" | "red" | "green";
  onClick: () => void;
}

function Button({ label, color, onClick }: ButtonProps) {
  return (
    <button
      style={{ background: color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// Using with props
<Button label="Click me!" color="blue" onClick={() => console.log('clicked')} />

// useEffect — run code on mount/update
function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This runs when component mounts OR when userId changes
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);  // dependency array — re-run if userId changes

  if (loading) return <p>Loading...</p>;
  return <div>Hello {user.name}</div>;
}`,funFact:"React was first used on Facebook's News Feed in 2011 and Instagram in 2012 — BEFORE it was released to the public in 2013! 🕵️",quiz:[{q:"What is a React component?",opts:["A CSS framework","A reusable piece of UI (like a function that returns HTML)","A database","A type of server"],ans:1},{q:"What does useState do?",opts:["Updates the database","Lets a component remember things (state)","Configures the state machine","Sends data to the server"],ans:1},{q:"In React, how do you update displayed data?",opts:["Directly modify the variable","Use state setters like setState or useState's setter","Reload the page","Call a database query"],ans:1},{q:"What is JSX in React?",opts:["A new programming language","A database query language","HTML-like syntax that you write directly in JavaScript, which React translates into JavaScript calls","A CSS preprocessor"],ans:2},{q:"What is useContext used for in React?",opts:["Fetching data from APIs","Styling components","Managing local component state","Sharing data across the component tree without passing props through every level"],ans:3}],challenge:"Create a counter component with + and - buttons. Bonus: add a reset button and make the number turn red when negative!",resources:[{type:"docs",title:"React Official Documentation",url:"https://react.dev/learn",source:"React Official"},{type:"video",title:"React in 100 Seconds",url:"https://www.youtube.com/watch?v=Tn6-PIqc4UM",source:"Fireship"},{type:"article",title:"Thinking in React",url:"https://react.dev/learn/thinking-in-react",source:"React Official"}],eli5:"React is like building with LEGO! Each block is a piece of your website - a button block, a picture block, a text block. Snap them together to make a page. Want to change just the button? Swap that one block - everything else stays the same!",codeWalkthrough:["A simple React component — it's just a function! 🎯","Importing required dependencies","","Declaring a function","State = component's memory","Declaring a variable","Declaring a variable","","Declaring a variable","","","Closing block","","Returning a value","","","","Closing expression","Closing block","","Using components together — like LEGO! 🧱","Declaring a function","Returning a value","","","","","","Closing expression","Closing block","","Props — pass data to components","Defining an interface shape","","","","Closing block","","Declaring a function","Returning a value","","","","","","","Closing expression","Closing block","","Using with props","","","useEffect — run code on mount/update","Declaring a function","Declaring a variable","Declaring a variable","","","This runs when component mounts OR when userId changes","","Method chaining on the previous expression","Method chaining on the previous expression","","","","","","Conditional check","Returning a value","Closing block"],bugChallenge:{"code":"function Counter() {\n  let count = 0;\n  const increment = () => { count += 1; };\n  return <button onClick={increment}>{count}</button>;\n}","hint":"How should you store data that changes in React?","answer":"Using a regular variable (let count = 0) won't cause React to re-render when changed. Fix: use useState: const [count, setCount] = useState(0); and setCount(count + 1) in increment."},difficulty:"intermediate",prereqs:[1,5]},

  {id:12,title:"State Management & Data Fetching",subtitle:"Making Your Frontend Talk to Your Backend",analogy:"Imagine a classroom with a whiteboard (state). When the teacher writes something new (state update), every student (component) who's watching the board sees the change instantly. useState is the whiteboard. useContext is like a school-wide PA system — everyone hears it. React Query is like a librarian who fetches books (data) for you, keeps a copy cached, and automatically checks if there's a newer edition!",points:[{t:"useState — Local State",d:"const [count, setCount] = useState(0). Each component manages its own data. When you call setCount, React re-renders that component with the new value. Simple and direct."},{t:"useEffect — Side Effects",d:"Run code when something changes: useEffect(() => { fetchData() }, [userId]). The array at the end says 'run this when userId changes'. Empty array [] means 'run once on mount'."},{t:"useContext — Shared State",d:"Pass data through the component tree without prop drilling. Create a context, wrap your app in a Provider, and any child can access the value. Great for themes, auth, and language."},{t:"fetch & axios — HTTP Requests",d:"fetch('http://localhost:3000/api/users') calls your NestJS backend. axios is a popular library that's easier to use: axios.get('/users'). Both return promises."},{t:"React Query (TanStack Query)",d:"The game-changer for data fetching. useQuery(['users'], fetchUsers) handles loading, errors, caching, and refetching automatically. No more manually managing loading states!"},{t:"CORS Explained",d:"Cross-Origin Resource Sharing. Your React app (localhost:3000) calls NestJS (localhost:4000) — browser blocks it for security! Fix: enable CORS on the backend with app.enableCors()."},{t:"Loading & Error States",d:"Every data fetch has 3 states: loading (spinner), success (show data), error (show message). React Query gives you { isLoading, isError, data } — no manual state juggling."},{t:"Optimistic Updates",d:"Update the UI immediately BEFORE the server responds, then roll back if it fails. Makes the app feel instant. React Query makes this easy with onMutate/onError callbacks."}],whatIs:"State management is how you store and update data in your React app. Local state (useState) is for single components. Context (useContext) shares state across components. React Query manages server state — data that comes from your API. Data fetching is how your frontend communicates with your backend API using HTTP requests.",realWorld:"Every app you use daily does this: Instagram loads your feed (data fetching), updates the like count instantly when you tap (optimistic update), and caches your feed so it loads fast when you come back (React Query caching).",code:`// useState — local state
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

// useEffect — fetch data on mount
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => console.error(err));
  }, []); // empty array = run once

  if (loading) return <p>Loading...</p>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

// React Query — the better way
import { useQuery, useMutation } from '@tanstack/react-query';

function UserList() {
  const { data: users, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(r => r.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

// NestJS — Enable CORS (main.ts)
const app = await NestFactory.create(AppModule);
app.enableCors({
  origin: 'http://localhost:3000', // React app URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
});
await app.listen(4000);`,funFact:"CORS errors are the #1 most searched frontend-backend integration issue on Stack Overflow. Almost every developer hits this wall the first time they connect React to an API. The fix is usually just one line on the backend!",quiz:[{q:"What does useEffect with an empty dependency array [] do?",opts:["Runs on every render","Runs only once when the component mounts","Never runs","Runs when the component unmounts"],ans:1},{q:"What is CORS and why does it block requests?",opts:["A CSS framework that blocks rendering","A browser security feature that blocks requests between different origins","A NestJS middleware that blocks slow requests","A React feature that prevents re-renders"],ans:1},{q:"What advantage does React Query have over manual useState + useEffect for data fetching?",opts:["It's faster at making HTTP requests","It automatically handles caching, loading states, and refetching","It replaces the need for a backend","It only works with GraphQL"],ans:1},{q:"How does React Query deduplicate requests?",opts:["By blocking duplicate components","By caching responses in localStorage","If multiple components request the same queryKey simultaneously, React Query makes only one network request","By using WebSockets instead of HTTP"],ans:2},{q:"What are the three states every data fetch should handle in the UI?",opts:["Create, read, delete","Small, medium, large","Start, middle, end","Loading (spinner), success (show data), and error (show message)"],ans:3}],challenge:"Build a simple React component that fetches a list of users from a NestJS API. Show a loading spinner while fetching, an error message if it fails, and the list of users on success. Bonus: Try it with React Query!",resources:[{type:"docs",title:"React - Managing State",url:"https://react.dev/learn/managing-state",source:"React Official"},{type:"docs",title:"TanStack Query Documentation",url:"https://tanstack.com/query/latest/docs/framework/react/overview",source:"TanStack"},{type:"video",title:"React State Management Tutorial",url:"https://www.youtube.com/watch?v=5-1LM2NySR0",source:"Fireship"}],eli5:"Your app is like a classroom. useState is each student having their own notebook. useContext is a whiteboard everyone can read. React Query is a librarian who goes to the library, brings back books, remembers what you asked for, and checks for new editions!",codeWalkthrough:["useState — local state","Importing required dependencies","","Declaring a function","Declaring a variable","Returning a value","","","","Closing expression","Closing block","","useEffect — fetch data on mount","Importing required dependencies","","Declaring a function","Declaring a variable","Declaring a variable","","","","Method chaining on the previous expression","Method chaining on the previous expression","Method chaining on the previous expression","","","Conditional check","Returning a value","Closing block","","React Query — the better way","Importing required dependencies","","Declaring a function","Declaring a variable","","","","","Conditional check","Conditional check","Returning a value","Closing block","","NestJS — Enable CORS (main.ts)","Declaring a variable","","","","","","Waiting for an async operation to complete"],bugChallenge:{"code":"function UserList() {\n  const [users, setUsers] = useState([]);\n  useEffect(() => {\n    fetch(\"/api/users\")\n      .then(res => res.json())\n      .then(data => setUsers(data));\n  });\n  return <ul>{users.map(u => <li>{u.name}</li>)}</ul>;\n}","hint":"Look at the useEffect dependency array (or lack thereof)...","answer":"useEffect has no dependency array, so it runs on EVERY render causing an infinite loop. Fix: add an empty array: useEffect(() => { ... }, []);"},difficulty:"intermediate",prereqs:[1,11]},

  {id:13,title:"The Frontend Tech Stack",subtitle:"Meet Your Toolkit",analogy:"Building a frontend is like throwing a party. React is the venue, Vite is the fast setup crew, Tailwind is the decorator, React Router is the floor plan, React Query is the caterer who brings food from the kitchen (backend), and Mantine/Radix are the pre-made party supplies!",points:[{t:"React + Vite",d:"React is the UI library that builds your interface from reusable components, while Vite is the lightning-fast build tool with instant hot module replacement. Together they form the foundation of modern frontend development — save a file and see changes in milliseconds instead of waiting seconds for webpack."},{t:"Tailwind CSS",d:"Style your components with utility class names like 'bg-blue-500 text-white p-4 rounded-lg' directly in your JSX. No separate CSS files to maintain and no naming conflicts between components. Tailwind only includes the classes you actually use in production, keeping your CSS bundle tiny."},{t:"React Query (TanStack)",d:"TanStack Query handles all server state management: fetching, caching, background refetching, and error handling. Instead of writing useState plus useEffect plus loading state boilerplate, one useQuery call gives you everything. It also deduplicates identical requests made by multiple components."},{t:"React Hook Form + Zod",d:"React Hook Form manages form state with minimal re-renders using uncontrolled inputs and refs for high performance. Zod provides schema-based validation with full TypeScript type inference. Together they create forms where validation rules are defined once and enforced consistently across your application."},{t:"React Router",d:"React Router enables client-side navigation between pages without full browser reloads. Define routes declaratively, link between them with the Link component, and extract URL parameters with useParams. Navigation feels instant because only the changed component re-renders while the shell stays in place."},{t:"Zustand or Redux",d:"When multiple components need to share the same data (like user authentication state or a shopping cart), global state management tools step in. Zustand is lightweight with minimal boilerplate — great for most apps. Redux is more structured with actions and reducers for complex enterprise state logic."},{t:"Component Libraries",d:"Pre-built UI libraries like Radix UI, shadcn/ui, or Mantine provide professionally designed, fully accessible components: buttons, modals, dropdowns, tabs, and more. They handle keyboard navigation, screen readers, and edge cases so you can focus on building your app's unique features instead."},{t:"Storybook for Component Development",d:"Storybook lets you develop and test UI components in isolation outside your main application. Each component gets a visual story showing its different states: loading, error, empty, and filled. It serves as living documentation that stays up to date and makes it easy to review UI changes in pull requests."}],whatIs:"A modern React frontend uses multiple libraries working together: Vite for building, Tailwind for styling, React Query for data fetching, React Hook Form + Zod for forms, and component libraries for pre-built UI elements.",realWorld:"This exact tech stack (React + Vite + Tailwind + React Query + Zod) is used by thousands of production apps. It's considered one of the best modern React setups.",code:`// React Query — fetch data the smart way 🧠
import { useQuery } from '@tanstack/react-query';

function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(r => r.json()),
    staleTime: 5 * 60 * 1000, // cache for 5 minutes!
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops! Something broke 💥</p>;

  return (
    <ul className="space-y-2">
      {data.map(user => (
        <li key={user.id} className="bg-white p-4 rounded-lg shadow">
          {user.name}
        </li>
      ))}
    </ul>
  );
}

// React Hook Form + Zod — bulletproof forms 🛡️
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email!'),
  password: z.string().min(8, 'Too short!'),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      <input {...register('password')} type="password" />
      {errors.password && <span>{errors.password.message}</span>}
      <button type="submit">Login</button>
    </form>
  );
}

// React Router — navigate like a pro 🗺️
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

// Zustand — global state 🌍
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));

function Counter() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}`,funFact:"Vite (pronounced 'veet') means 'fast' in French. And it IS fast — 10-100x faster than the old create-react-app setup. The creator, Evan You, also created Vue.js! 🏎️",quiz:[{q:"What does React Query do?",opts:["Writes SQL queries","Fetches data from APIs and caches it smartly","Creates database tables","Formats CSS"],ans:1},{q:"What does Vite provide over traditional React setups?",opts:["More features","Much faster development with instant hot reload","Better security","Automatic SEO optimization"],ans:1},{q:"What is Tailwind CSS?",opts:["A responsive CSS framework library","Utility-first CSS framework for styling with class names","A JavaScript library","A database tool"],ans:1},{q:"What problem does Zod solve when paired with React Hook Form?",opts:["It replaces React entirely","It styles form elements automatically","It provides schema-based validation with TypeScript type inference for consistent form validation","It manages global state"],ans:2},{q:"What does React Router enable in a React application?",opts:["Server-side rendering","Database connections","Sending emails","Client-side navigation between pages without full browser reloads"],ans:3}],challenge:"Install React Query in a Vite project and fetch data from a public API like https://jsonplaceholder.typicode.com/users. Add loading and error states!",resources:[{type:"docs",title:"Vite Getting Started",url:"https://vite.dev/guide/",source:"Vite Official"},{type:"docs",title:"Tailwind CSS Documentation",url:"https://tailwindcss.com/docs/installation/using-vite",source:"Tailwind CSS Official"},{type:"video",title:"Vite in 100 Seconds",url:"https://www.youtube.com/watch?v=KCrXgy8qtjM",source:"Fireship"}],eli5:"Building a website is like throwing a birthday party! React is the room, Vite sets up super fast, Tailwind decorates everything pretty, React Router is the map of rooms, and React Query is the person who brings snacks from the kitchen whenever you're hungry!",codeWalkthrough:["React Query — fetch data the smart way 🧠","Importing required dependencies","","Declaring a function","Declaring a variable","","","","","","Conditional check","Conditional check","","Returning a value","","","","","","","","Closing expression","Closing block","","React Hook Form + Zod — bulletproof forms 🛡️","Importing required dependencies","Importing required dependencies","Importing required dependencies","","Declaring a variable","","","","","Declaring a function","Declaring a variable","","","","Returning a value","","","","","","","","Closing expression","Closing block","","React Router — navigate like a pro 🗺️","Importing required dependencies","","Declaring a function","Returning a value","","","","","","","","","","","","Closing expression","Closing block","","Zustand — global state 🌍","Importing required dependencies","","Declaring a variable","","","","","","Declaring a function","Declaring a variable","Returning a value","","","","","","Closing expression","Closing block"],bugChallenge:{"code":"const schema = z.object({\n  email: z.string().email(),\n  age: z.string().min(18),\n});","hint":"Look at the type used for 'age' and what min() means for strings...","answer":"Age should be z.number().min(18), not z.string().min(18). For strings, .min(18) checks string LENGTH (18+ characters), not the numeric value. Fix: change z.string().min(18) to z.number().min(18)."},difficulty:"intermediate",prereqs:[1,11,12]},

  {id:14,title:"API Design & REST",subtitle:"Building Roads for Your Data",analogy:"An API is like a restaurant menu. The customer (frontend) looks at the menu (API docs) and orders (makes a request). The kitchen (backend) prepares the food (data) and serves it. The customer never goes INTO the kitchen — they just use the menu!",points:[{t:"REST Principles",d:"REST uses HTTP methods meaningfully: GET reads data, POST creates, PUT replaces, PATCH partially updates, DELETE removes. This convention makes APIs clean, predictable, and self-documenting for any developer."},{t:"Status Codes",d:"HTTP status codes tell clients what happened: 200 OK, 201 created, 400 bad request, 401 unauthorized, 403 forbidden, 404 not found, 409 conflict, 500 server error. Always return the correct code!"},{t:"DTOs (Data Transfer Objects)",d:"DTOs define the exact shape of request and response data using TypeScript classes. They act as contracts between frontend and backend, specifying required fields, types, and validation rules."},{t:"Swagger/OpenAPI",d:"Auto-generate interactive API docs from your code using decorators like @ApiTags and @ApiOperation. Frontend devs can explore endpoints, test requests, and see response schemas without reading backend code."},{t:"Pagination",d:"For large datasets, return items in pages: ?page=1&limit=20. Include metadata like total items, current page, total pages, and hasNextPage. Never send millions of records in a single response!"},{t:"Filtering & Sorting",d:"Let clients request exactly what they need: ?status=active&sort=createdAt&order=desc. Implement flexible query params so frontends can filter, sort, and search without separate endpoints for each case."},{t:"Versioning Your API",d:"As your API evolves, old clients may break. Use URL versioning (/api/v1/users, /api/v2/users) or header versioning for backward compatibility. Ship new features without breaking existing apps."},{t:"Error Response Format",d:"Return consistent error objects: { statusCode, message, error, timestamp }. Include helpful details for frontends to display meaningful messages. Never expose raw stack traces or DB errors in production."},{t:"Rate Limiting",d:"Protect your API from abuse by limiting requests per time window. Use @nestjs/throttler for limits like 100 requests per 60 seconds. Return 429 Too Many Requests when exceeded to prevent server overload."},{t:"CORS (Cross-Origin Resource Sharing)",d:"Browsers block cross-domain requests by default. Configure CORS in NestJS with app.enableCors() to allow your frontend origin. Essential when React runs on localhost:3000 and NestJS on localhost:4000."}],whatIs:"REST (Representational State Transfer) is an architectural style for designing APIs. It uses HTTP methods and URLs to represent resources and actions. Combined with proper status codes and DTOs, it creates predictable, developer-friendly APIs.",realWorld:"Twitter, GitHub, Stripe, and virtually every modern web service exposes a REST API. Stripe's API is often cited as the gold standard of API design.",code:`// RESTful routes — clean and predictable 📐
@Controller('products')
export class ProductController {
  @Get()              // GET    /products      → list all
  findAll(@Query() query: FilterDto) {
    return this.productService.findAll(query);
  }

  @Get(':id')         // GET    /products/123  → get one
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Post()             // POST   /products      → create
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Put(':id')         // PUT    /products/123  → update
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @Delete(':id')      // DELETE /products/123  → delete
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}

// DTO with validation — reject bad data at the door! 🚫
class CreateProductDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsString()
  description?: string;
}

// Swagger — auto-generated docs! 📚
@ApiTags('Products')
@ApiOperation({ summary: 'Create a new product' })
@ApiResponse({ status: 201, description: 'Product created' })
@ApiResponse({ status: 400, description: 'Invalid data' })
@Post()
create(@Body() dto: CreateProductDto) { ... }`,funFact:"The GitHub API has over 1,000 endpoints. Stripe's API documentation is so good that it's used as a teaching example in university computer science courses! 📚",quiz:[{q:"What HTTP method should you use to create a new resource?",opts:["GET","POST","DELETE","PATCH"],ans:1},{q:"What does a 404 status code mean?",opts:["Server error","Request successful","Resource not found","Bad request"],ans:2},{q:"What are DTOs used for?",opts:["Storing data in the database","Defining the shape of request/response data","Making APIs faster","Securing endpoints"],ans:1},{q:"What does Swagger/OpenAPI automatically generate for your NestJS API?",opts:["Database schemas and migrations","Docker containers for each endpoint","Interactive API documentation where frontend developers can explore and test endpoints","TypeScript types for the frontend"],ans:2},{q:"What HTTP status code should be returned when creating a new resource successfully?",opts:["200 OK","404 Not Found","400 Bad Request","201 Created"],ans:3}],challenge:"Design a REST API for a 'bookstore' on paper first: what endpoints would you need for books, authors, and orders? Then implement the books CRUD in NestJS!",resources:[{type:"docs",title:"MDN HTTP Overview",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",source:"MDN Web Docs"},{type:"article",title:"REST API Design Best Practices",url:"https://restfulapi.net/",source:"RESTful API"},{type:"video",title:"RESTful APIs in 100 Seconds",url:"https://www.youtube.com/watch?v=-MTSQjw5DrM",source:"Fireship"}],eli5:"An API is like a restaurant menu. You look at the menu and tell the waiter 'I want chicken' (make a request). The kitchen makes it and the waiter brings it back. You never go into the kitchen yourself - you just use the menu to order!",codeWalkthrough:["RESTful routes — clean and predictable 📐","Decorator that adds metadata or behavior","Exporting for use in other files","Decorator that adds metadata or behavior","","Returning a value","Closing block","","Decorator that adds metadata or behavior","","Returning a value","Closing block","","Decorator that adds metadata or behavior","","Returning a value","Closing block","","Decorator that adds metadata or behavior","","Returning a value","Closing block","","Decorator that adds metadata or behavior","","Returning a value","Closing block","Closing block","","DTO with validation — reject bad data at the door! 🚫","Declaring a class","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","","","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","","","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","","Closing block","","Swagger — auto-generated docs! 📚","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior",""],bugChallenge:{"code":"@Controller('users')\nexport class UserController {\n  @Post(':id')\n  deleteUser(@Param('id') id: string) {\n    return this.userService.delete(id);\n  }\n}","hint":"Does the HTTP method match the action being performed?","answer":"The method uses @Post() but deletes a user. POST is for creating, DELETE is for deleting. Fix: change @Post(':id') to @Delete(':id')."},difficulty:"intermediate",prereqs:[1,5,8]},

  {id:15,title:"Why NestJS?",subtitle:"Express Grew Up and Got Organized",analogy:"Express is like a studio apartment — everything in one room, you decide where stuff goes. NestJS is like a well-designed house with labeled rooms: kitchen (services), front door (controllers), hallways (modules). Both work, but the house is WAY easier to manage when you have 50 rooms!",points:[{t:"Built-in Structure",d:"Module → Controller → Service pattern. Everyone organizes code the same way — no more 'where did John put that file?'"},{t:"Dependency Injection",d:"Instead of manually creating instances, you just declare what you need and NestJS delivers it. Like room service!"},{t:"TypeScript First",d:"NestJS is built FOR TypeScript. Decorators (@Get, @Post, @Injectable) make code readable and self-documenting."},{t:"Batteries Included",d:"Validation, auth guards, Swagger docs, WebSockets, microservices — all built-in or plug-and-play."},{t:"Scalable from Day 1",d:"Start small with one controller. Grow to 100 modules without refactoring. NestJS scales with your team!"},{t:"Rich Ecosystem",d:"@nestjs/jwt, @nestjs/passport, @nestjs/websockets, @nestjs/graphql. Add what you need, nothing more."},{t:"Pipes — Data Transformation & Validation",d:"Pipes transform or validate incoming data before it reaches your controller. ValidationPipe automatically checks DTOs, ParseIntPipe converts strings to numbers. Think of pipes as airport security — they inspect your luggage (data) before you board the plane (controller)."},{t:"Interceptors — Before & After Logic",d:"Interceptors wrap around your route handler. They can transform the response, add logging, cache results, or measure execution time. Like a sandwich — interceptor code runs before AND after your handler. Example: automatically wrapping all responses in {success: true, data: ...} format."},{t:"Exception Filters — Centralized Error Handling",d:"Instead of try/catch everywhere, exception filters catch errors globally and return consistent error responses. Create a custom filter to log errors, send alerts, and return user-friendly messages. One place to handle ALL errors."},{t:"Middleware — Request Pipeline",d:"Middleware runs BEFORE the route handler on every request. Use it for logging, CORS, rate limiting, or authentication checks. It's the bouncer at the door — checking everyone before they enter the club (your controller)."},{t:"Custom Decorators",d:"Create your own decorators like @CurrentUser() to extract the logged-in user from the request, or @Roles('admin') to mark routes. Custom decorators make your code cleaner and more readable — hiding complexity behind a simple @ symbol."}],whatIs:"NestJS is a progressive Node.js framework for building server-side applications. Built on top of Express (or Fastify), it provides an opinionated structure inspired by Angular, using modules, controllers, and services. It includes powerful features like Pipes, Interceptors, Filters, Middleware, and custom Decorators.",realWorld:"NestJS is used by Adidas, Roche, Autodesk, and many startups. It's the most popular structured Node.js framework, with over 70K GitHub stars.",code:`// The NestJS Holy Trinity 🔺
// 1. MODULE — wires everything together
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

// 2. CONTROLLER — handles HTTP requests (the front door 🚪)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  //          ↑ NestJS auto-injects this! Magic! ✨

  @Get()          // GET /users
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')     // GET /users/123
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()         // POST /users
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }
}

// 3. SERVICE — business logic (the brain 🧠)
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }
}

// DTO — validate input 📋
import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;
}`,funFact:"NestJS was created by Kamil Myśliwiec in 2017 because he was frustrated that Node.js had no structure like Angular did for frontend. He basically thought 'why can't backend be organized too?' and just... built it. 😤🛠️",quiz:[{q:"What is Dependency Injection in NestJS?",opts:["A security vulnerability","NestJS automatically creates and provides instances your class needs","A way to inject CSS","Manual object creation"],ans:1},{q:"What's the role of a Pipe in NestJS?",opts:["Playing music","Validating and transforming incoming data before the handler runs","Connecting to a database","Sending emails"],ans:1},{q:"Which of these is NOT a core NestJS concept?",opts:["Modules","Controllers","Services","React components"],ans:3},{q:"What is an interceptor in NestJS and when does it run?",opts:["A security guard that blocks requests","A database middleware","Code that wraps around the route handler, running logic both before AND after the handler executes","A type of controller"],ans:2},{q:"What does the @Injectable() decorator signify on a NestJS class?",opts:["The class can be injected with CSS","The class handles HTTP routes","The class is a database entity","The class can be managed by NestJS dependency injection system and injected into other classes"],ans:3}],challenge:"Create a NestJS project with `nest new my-app`, then generate a module with `nest g resource cats`. Look at the files it creates — controller, service, module, DTO. Notice how they connect!",resources:[{type:"docs",title:"NestJS Official Documentation",url:"https://docs.nestjs.com/",source:"NestJS Official"},{type:"video",title:"NestJS in 100 Seconds",url:"https://www.youtube.com/watch?v=0M8AYU_hPas",source:"Fireship"},{type:"article",title:"NestJS First Steps",url:"https://docs.nestjs.com/first-steps",source:"NestJS Official"}],eli5:"Express is like a messy room where you put stuff wherever. NestJS is like a room with labeled shelves - toys here, books there, clothes in the closet. Both rooms work, but the organized one is way easier when you have LOTS of stuff!",codeWalkthrough:["The NestJS Holy Trinity 🔺","1. MODULE — wires everything together","Decorator that adds metadata or behavior","","","","Exporting for use in other files","","2. CONTROLLER — handles HTTP requests (the front door 🚪)","Decorator that adds metadata or behavior","Exporting for use in other files","","↑ NestJS auto-injects this! Magic! ✨","","Decorator that adds metadata or behavior","","Returning a value","Closing block","","Decorator that adds metadata or behavior","","Returning a value","Closing block","","Decorator that adds metadata or behavior","","Returning a value","Closing block","Closing block","","3. SERVICE — business logic (the brain 🧠)","Decorator that adds metadata or behavior","Exporting for use in other files","","","","Returning a value","Closing block","","","Returning a value","Closing block","","","Returning a value","Closing block","Closing block","","DTO — validate input 📋","Importing required dependencies","","Exporting for use in other files","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","","","Decorator that adds metadata or behavior","","Closing block"],bugChallenge:{"code":"@Controller('users')\nexport class UserController {\n  constructor(private userService: UserService) {}\n\n  @Get()\n  findAll() {\n    return this.userService.findAll();\n  }\n}\n\nexport class UserService {\n  findAll() { return []; }\n}","hint":"What decorator is missing from the service class?","answer":"UserService is missing the @Injectable() decorator. Without it, NestJS can't inject it via dependency injection. Fix: add @Injectable() above 'export class UserService'."},difficulty:"intermediate",prereqs:[1,8,9]},

  {id:16,title:"NestJS Architecture Patterns",subtitle:"Building Clean, Scalable Apps",analogy:"A NestJS app is like a well-organized company. The CEO (AppModule) oversees departments (feature modules). Each department has a receptionist (controller), workers (services), and security (guards). Nobody does someone else's job!",points:[{t:"Modules = Departments",d:"Each feature gets its own module: UserModule, ProductModule, AuthModule. Modules group controllers, services, and providers into self-contained units that can share functionality via imports."},{t:"Pipes = Validators",d:"Pipes validate and transform data before it reaches your handler. ValidationPipe checks DTOs, ParseIntPipe converts strings to numbers. Bad data gets a clear 400 error before your logic runs."},{t:"Interceptors = Middleware++",d:"Interceptors wrap around handlers, running code before AND after execution. Use them to log timing, transform responses into standard wrappers, cache results, or measure performance with RxJS."},{t:"Exception Filters",d:"Catch errors globally and return consistent, user-friendly responses with proper status codes. Create custom filters to log errors to monitoring services and format clean messages for end users."},{t:"Middleware",d:"Middleware runs BEFORE guards and handlers on every matching request. Use it for logging, CORS headers, cookie parsing, or rate limiting. Works like Express middleware, so existing plugins are compatible."},{t:"Lifecycle Hooks",d:"Control startup and shutdown with hooks: onModuleInit fires when a module loads, onModuleDestroy during shutdown, onApplicationBootstrap after all modules are ready. Great for DB setup and cleanup."},{t:"Guards = Security Checkpoints",d:"Guards decide if a request can proceed or gets rejected. JwtAuthGuard verifies tokens, RolesGuard checks permissions. They run after middleware but before interceptors and pipes in the request lifecycle."},{t:"Custom Decorators",d:"Create reusable decorators like @CurrentUser() to extract the logged-in user, or @Public() to skip auth on specific routes. Custom decorators hide repetitive logic behind a clean @ symbol."},{t:"Provider Scopes",d:"By default, providers are singletons — one shared instance. Change scope to REQUEST (new per request) or TRANSIENT (new per injection). Request scope is great for multi-tenant apps needing per-request context."},{t:"Dynamic Modules",d:"Some modules need runtime config like DB URLs or API keys. Dynamic modules use forRoot() and forRootAsync() to accept config at import time. Example: TypeOrmModule.forRoot({ host, port })."}],whatIs:"NestJS follows a layered architecture: Modules organize features, Controllers handle HTTP, Services contain business logic, and cross-cutting concerns (validation, logging, auth) are handled by Pipes, Guards, Interceptors, and Filters.",realWorld:"This architecture pattern (separation of concerns) is used by enterprise companies worldwide. It scales from a 1-person project to a 100-person team without becoming a mess.",code:`// The NestJS Request Lifecycle 🔄
// Request → Middleware → Guards → Interceptors (before)
//        → Pipes → Handler → Interceptors (after)
//        → Exception Filters → Response

// 1. Custom Pipe — validate incoming data 🔍
@Injectable()
export class ParseObjectIdPipe implements PipeTransform {
  transform(value: string) {
    if (!Types.ObjectId.isValid(value)) {
      throw new BadRequestException('Invalid ID format');
    }
    return value;
  }
}

// Usage: @Param('id', ParseObjectIdPipe) id: string

// 2. Interceptor — log all requests ⏱️
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest();
    const now = Date.now();
    console.log(\`→ \${req.method} \${req.url}\`);

    return next.handle().pipe(
      tap(() => console.log(\`← \${Date.now() - now}ms\`)),
    );
  }
}

// 3. Exception Filter — beautiful error responses 🎨
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const status = exception.getStatus();

    response.status(status).json({
      success: false,
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
    });
  }
}`,funFact:"The NestJS request lifecycle has 7 distinct layers. A single request goes through: Middleware → Guards → Interceptors → Pipes → Handler → Interceptors → Filters. It's like airport security with 7 checkpoints! ✈️",quiz:[{q:"What is the NestJS request lifecycle order?",opts:["Handler → Guards → Pipes → Filters","Guards → Middleware → Pipes → Handler","Middleware → Guards → Interceptors → Pipes → Handler → Interceptors → Filters","Pipes → Guards → Handler → Middleware"],ans:2},{q:"What are Modules used for?",opts:["Creating certificates","Organizing features into independent units","Only for calculations","Defining database schemas"],ans:1},{q:"What do Guards do in NestJS?",opts:["Protect against physical attacks","Validate permissions and authentication before handlers run","Guard against race conditions","Create backup files"],ans:1},{q:"What is the purpose of Provider Scopes in NestJS?",opts:["To limit the number of modules","To control how provider instances are created: SINGLETON (shared), REQUEST (per-request), or TRANSIENT (new per injection)","To define CSS scope for components","To set permissions on providers"],ans:1},{q:"What makes a dynamic module different from a regular module in NestJS?",opts:["Dynamic modules are faster","Dynamic modules don't use decorators","Dynamic modules only work in development","Dynamic modules accept runtime configuration (like DB URLs) via methods like forRoot() and forRootAsync()"],ans:3}],challenge:"Create a custom LoggingInterceptor that logs the method, URL, and response time for every request. Apply it globally with `app.useGlobalInterceptors()`.",resources:[{type:"docs",title:"NestJS Modules",url:"https://docs.nestjs.com/modules",source:"NestJS Official"},{type:"docs",title:"NestJS Providers",url:"https://docs.nestjs.com/providers",source:"NestJS Official"},{type:"docs",title:"NestJS Controllers",url:"https://docs.nestjs.com/controllers",source:"NestJS Official"}],eli5:"Think of a NestJS app like a school. The principal (AppModule) runs everything. Each classroom (module) has a teacher who talks to students (controller) and a helper who does the work (service). Guards are hall monitors checking passes before you enter!",codeWalkthrough:["The NestJS Request Lifecycle 🔄","Request → Middleware → Guards → Interceptors (before)","→ Pipes → Handler → Interceptors (after)","→ Exception Filters → Response","","1. Custom Pipe — validate incoming data 🔍","Decorator that adds metadata or behavior","Exporting for use in other files","","Conditional check","Throwing an error","Closing block","Returning a value","Closing block","Closing block","","Usage: @Param('id', ParseObjectIdPipe) id: string","","2. Interceptor — log all requests ⏱️","Decorator that adds metadata or behavior","Exporting for use in other files","","Declaring a variable","Declaring a variable","Printing output to the console","","Returning a value","","Closing expression","Closing block","Closing block","","3. Exception Filter — beautiful error responses 🎨","Decorator that adds metadata or behavior","Exporting for use in other files","Catching any errors from the try block","Declaring a variable","Declaring a variable","","","","","","","","Closing block","Closing block"],bugChallenge:{"code":"@Injectable()\nexport class LoggingInterceptor implements NestInterceptor {\n  intercept(context: ExecutionContext, next: CallHandler) {\n    console.log(\"Before...\");\n    return next.handle();\n    console.log(\"After...\");\n  }\n}","hint":"Can code after a return statement ever execute?","answer":"The console.log('After...') after return will never run. To log after the handler, use RxJS: return next.handle().pipe(tap(() => console.log('After...')));"},difficulty:"advanced",prereqs:[1,8,15]},

  {id:17,title:"Validation & DTOs",subtitle:"Never Trust User Input",analogy:"DTOs are like airport security checkpoints. Before you board a plane (enter the server), your luggage (data) goes through scanners (validators). Is your bag the right size? Any prohibited items? If anything is wrong, you get stopped BEFORE you reach the plane. Without security (validation), anyone could bring anything on board — chaos!",points:[{t:"What is a DTO?",d:"Data Transfer Object — a class that defines the shape of incoming data. CreateUserDTO says 'to create a user, you MUST send name, email, and password with these rules.' Nothing more, nothing less."},{t:"class-validator Decorators",d:"@IsString(), @IsEmail(), @MinLength(8), @IsNotEmpty(), @IsOptional(), @IsNumber(), @IsArray(), @IsEnum(). Decorators on DTO properties that define validation rules."},{t:"ValidationPipe",d:"NestJS built-in pipe that automatically validates incoming data against your DTO. Add it globally: app.useGlobalPipes(new ValidationPipe()). Invalid requests get a clean 400 error."},{t:"Whitelist & Transform",d:"Setting whitelist: true on ValidationPipe strips any properties not defined in your DTO, preventing attackers from injecting extra fields like isAdmin: true. Setting transform: true auto-converts types so a string '42' from a URL parameter becomes the number 42. Always enable both in production apps."},{t:"Nested Validation",d:"DTOs can contain other DTOs for complex nested data. Use @ValidateNested() and @Type(() => AddressDTO) to validate objects within objects. This ensures every level of deeply nested request bodies is thoroughly validated, not just the top-level properties. Essential for complex forms and nested API payloads."},{t:"Custom Validators",d:"When built-in decorators are not enough, create custom validators with @ValidatorConstraint(). Build reusable rules like @IsStrongPassword (checks complexity requirements) or @IsUniqueEmail (queries the database to verify uniqueness). Custom validators keep your validation logic centralized and reusable across all DTOs."},{t:"Partial & Pick Types",d:"PartialType(CreateUserDTO) makes all fields optional — perfect for UpdateUserDTO where users might only change one field. PickType selects specific fields from an existing DTO. OmitType removes fields. IntersectionType combines multiple DTOs. These utilities let you compose DTOs without repeating property definitions."},{t:"Validation Groups",d:"Validation groups let you apply different rules depending on the context. For example, an email field might be required during registration but optional during profile updates. Assign groups to decorators and specify which group to validate in each route — one DTO handles multiple validation scenarios cleanly."},{t:"Error Messages & i18n",d:"Customize validation error messages with the message option: @MinLength(8, { message: 'Password must be at least 8 characters' }). For international apps, integrate i18n libraries to return error messages in the user's preferred language. Clear, localized error messages dramatically improve the user experience."}],whatIs:"DTOs (Data Transfer Objects) define the expected shape of request data. Combined with class-validator, they automatically validate incoming data — checking types, formats, lengths, and custom rules. NestJS ValidationPipe connects DTOs to the request pipeline, rejecting invalid data with helpful error messages before it reaches your business logic.",realWorld:"Every form submission, API call, and webhook payload should be validated. Without validation, users could send malformed data that crashes your database, inject malicious code, or bypass business rules. DTOs are your first line of defense.",code:`// Install: npm install class-validator class-transformer

// create-user.dto.ts
import {
  IsString, IsEmail, MinLength,
  IsOptional, IsEnum, IsNotEmpty
} from 'class-validator';

enum UserRole { ADMIN = 'admin', USER = 'user' }

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

// update-user.dto.ts — all fields optional!
import { PartialType } from '@nestjs/mapped-types';
export class UpdateUserDTO extends PartialType(CreateUserDTO) {}

// user.controller.ts
import { Body, Post, Put, Param } from '@nestjs/common';

@Post()
async create(@Body() dto: CreateUserDTO) {
  // dto is already validated! Safe to use.
  return this.userService.create(dto);
}

@Put(':id')
async update(@Param('id') id: string, @Body() dto: UpdateUserDTO) {
  return this.userService.update(id, dto);
}

// main.ts — Enable validation globally
import { ValidationPipe } from '@nestjs/common';

const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,    // strip unknown properties
  transform: true,    // auto-transform types
  forbidNonWhitelisted: true, // error on unknown props
}));

// What happens when invalid data is sent:
// POST /users { name: "", email: "not-email", hack: "injected" }
// Response 400:
// {
//   "statusCode": 400,
//   "message": [
//     "name must be longer than or equal to 2 characters",
//     "email must be an email",
//     "property hack should not exist"
//   ],
//   "error": "Bad Request"
// }`,funFact:"The 2017 Equifax data breach exposed 147 million people's personal data. The root cause? A known vulnerability in an unpatched server — but proper input validation and security layers could have limited the damage significantly.",quiz:[{q:"What does a DTO do in NestJS?",opts:["Transfers data to the database directly","Defines the expected shape and validation rules for incoming request data","Creates database tables","Sends emails"],ans:1},{q:"What does 'whitelist: true' in ValidationPipe do?",opts:["Only allows admin users","Strips any properties not defined in the DTO","Makes all fields optional","Enables CORS"],ans:1},{q:"How do you make an UpdateDTO where all fields are optional?",opts:["Add ? to every property manually","Use PartialType(CreateDTO)","Use @IsOptional() on the class","Set required: false globally"],ans:1},{q:"What does 'transform: true' in ValidationPipe do?",opts:["Transforms the response format","Transforms error messages","Auto-converts types so a string '42' from a URL parameter becomes the number 42","Transforms the database schema"],ans:2},{q:"What are validation groups used for in class-validator?",opts:["Grouping DTOs into folders","Running tests in groups","Organizing database queries","Applying different validation rules depending on context, like stricter rules for creation vs. looser rules for updates"],ans:3}],challenge:"Create a CreateProductDTO with: name (string, min 3 chars), price (number, positive), category (enum: electronics/clothing/food), description (optional string, max 500 chars). Set up ValidationPipe globally and test with invalid data!",resources:[{type:"docs",title:"NestJS Validation",url:"https://docs.nestjs.com/techniques/validation",source:"NestJS Official"},{type:"docs",title:"class-validator Documentation",url:"https://github.com/typestack/class-validator",source:"GitHub"},{type:"docs",title:"class-transformer Documentation",url:"https://github.com/typestack/class-transformer",source:"GitHub"}],eli5:"Imagine filling out a form to join a club. The form says 'Name: at least 2 letters' and 'Age: must be a number'. If you write something wrong, the form tells you what to fix BEFORE you hand it in. DTOs are like those smart forms that check your answers!",codeWalkthrough:["Install: npm install class-validator class-transformer","","create-user.dto.ts","Importing required dependencies","","","","","Defining an enum","","Exporting for use in other files","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","","","Decorator that adds metadata or behavior","","","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","","","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","","Closing block","","update-user.dto.ts — all fields optional!","Importing required dependencies","Exporting for use in other files","","user.controller.ts","Importing required dependencies","","Decorator that adds metadata or behavior","","dto is already validated! Safe to use.","Returning a value","Closing block","","Decorator that adds metadata or behavior","","Returning a value","Closing block","","main.ts — Enable validation globally","Importing required dependencies","","Declaring a variable","","","","","","","What happens when invalid data is sent:","POST /users { name: \"\", email: \"not-email\", hack: \"injected\" }","Response 400:","{","\"statusCode\": 400,","\"message\": [","\"name must be longer than or equal to 2 characters\",","\"email must be an email\",","\"property hack should not exist\"","],","\"error\": \"Bad Request\"","}"],bugChallenge:{"code":"export class CreateUserDTO {\n  @IsString()\n  name: string;\n\n  @IsEmail()\n  email: string;\n\n  @MinLength(8)\n  password: string;\n}","hint":"What type decorator is missing from the password field?","answer":"Password has @MinLength(8) but is missing @IsString() decorator. Best practice: always include the type decorator. Fix: add @IsString() above @MinLength(8)."},difficulty:"intermediate",prereqs:[1,4,15]},

  {id:18,title:"MongoDB — The Flexible Database",subtitle:"Store Data Like JSON Files",analogy:"MySQL is like a strict printed form — every person fills in EXACTLY the same boxes (columns). MongoDB is like a folder of sticky notes — each note can have different info! One has a phone number, another has an address. Both are fine!",points:[{t:"Documents, Not Tables",d:"MongoDB stores data as JSON-like documents instead of rigid table rows. Each document can have different fields from others in the same collection, giving ultimate flexibility for data like user profiles."},{t:"No Schema Migrations",d:"Need a new field? Just include it in your next document — no ALTER TABLE, no migration scripts, no downtime. MongoDB adapts to your data shape naturally, speeding up development versus SQL databases."},{t:"Nested Data",d:"Store complex objects inside other objects naturally. A user can contain an address object, an array of orders, and nested preferences — all in one document without expensive JOINs that slow SQL queries."},{t:"Scales Horizontally",d:"When your app outgrows one server, MongoDB distributes data across multiple machines via sharding. Each shard holds a portion of your data. Add more servers to handle more load without rewriting app code."},{t:"BSON Format",d:"MongoDB stores data in Binary JSON (BSON), extending JSON with types like Date, ObjectId, Binary, and Decimal128. BSON is more compact and faster to parse than plain JSON, improving read/write performance."},{t:"Collections, Not Tables",d:"Collections are the MongoDB equivalent of SQL tables, and documents are like rows. Unlike SQL tables, collections do not enforce a fixed schema — two documents in the same collection can have different fields."},{t:"Indexing for Speed",d:"Without indexes, MongoDB scans every document to find matches — very slow at scale. Create indexes on frequently-queried fields like email or createdAt so MongoDB jumps directly to matching documents."},{t:"When to Use MongoDB",d:"MongoDB excels with varied data shapes: property listings, user profiles, CMS, IoT data. Choose SQL instead when you need complex multi-table JOINs, strict ACID transactions, or rigid data structures."},{t:"Aggregation Pipeline",d:"The aggregation pipeline processes data in stages: $match filters, $group aggregates, $sort orders, $project reshapes output. Like an assembly line where each stage transforms data before passing it along."},{t:"Replica Sets for Reliability",d:"Replica sets maintain multiple copies of your data across servers. If the primary goes down, a secondary is auto-promoted within seconds. Provides high availability and protects against hardware failures."}],whatIs:"MongoDB is a NoSQL database that stores data as flexible JSON-like documents (BSON). Unlike SQL databases with rigid tables, MongoDB lets each document have its own structure. It's the 'M' in the MEAN/MERN stack.",realWorld:"MongoDB is used by Adobe, eBay, Forbes, Google, and Toyota. It's especially popular for apps with varied data shapes — like property listings, user profiles, or content management systems.",code:`// SQL (MySQL) — rigid table structure 📊
// Every row MUST have the same columns:
// | id | name  | email           | age |
// | 1  | Alex  | alex@mail.com   | 25  |
// | 2  | Sam   | sam@mail.com    | 30  |

// MongoDB — flexible documents 📄
// Document 1
{
  "_id": ObjectId("abc123"),
  "name": "Alex",
  "email": "alex@mail.com",
  "age": 25
}
// Document 2 — has EXTRA fields, and that's OK!
{
  "_id": ObjectId("def456"),
  "name": "Sam",
  "email": "sam@mail.com",
  "age": 30,
  "phone": "+1234567",
  "address": {
    "city": "New York",
    "country": "USA"
  },
  "hobbies": ["coding", "gaming", "cooking"]
}

// Nested data — no JOINs needed! 🎯
{
  "_id": ObjectId("prop123"),
  "name": "Sunset Apartment",
  "address": {
    "street": "123 Main St",
    "city": "San Francisco",
    "coordinates": { "lat": 37.77, "lng": -122.41 }
  },
  "images": [
    { "url": "photo1.jpg", "caption": "Living room" },
    { "url": "photo2.jpg", "caption": "Kitchen" }
  ],
  "amenities": ["wifi", "parking", "gym"],
  "price": 2500,
  "available": true
}

// MongoDB queries with Prisma
const user = await prisma.user.create({
  data: {
    name: "John",
    email: "john@mail.com",
    age: 25
  }
});

// Find with flexible filtering
const adults = await prisma.user.findMany({
  where: { age: { gte: 18 } }
});

// Update nested data
await prisma.property.update({
  where: { id: "prop123" },
  data: {
    address: {
      city: "Los Angeles"
    }
  }
});`,funFact:"MongoDB's name comes from 'humongous' — because it was designed to handle HUMONGOUS amounts of data. The founders literally just shortened the word! 🦕",quiz:[{q:"What's the main difference between MongoDB and MySQL?",opts:["MongoDB is faster","MongoDB stores flexible documents, MySQL stores rigid table rows","They're the same thing","MySQL is newer"],ans:1},{q:"What does 'NoSQL' stand for?",opts:["No Structured Query Language","Not Only SQL","No Sequel","Nothing Sequential Language"],ans:1},{q:"Can you add new fields to a MongoDB document without changing the schema?",opts:["No, you need to alter the table","Yes, just add the field — MongoDB is flexible!","Only if it's the first field","No, that would break consistency"],ans:1},{q:"When should you choose a SQL database over MongoDB?",opts:["Always, SQL is better in every case","Never, MongoDB is always better","When you need complex multi-table JOINs, highly performant multi-row transactions, or rigidly structured relational data","Only for small applications"],ans:2},{q:"What do replica sets provide in MongoDB?",opts:["Faster write operations","Automatic indexing of all fields","Data compression for smaller storage","Multiple copies of data across servers with automatic failover if the primary goes down"],ans:3}],challenge:"Install MongoDB Compass (free GUI). Create a database, add a collection called 'users', and insert two documents with DIFFERENT fields. Notice how MongoDB doesn't complain!",resources:[{type:"docs",title:"MongoDB Documentation",url:"https://www.mongodb.com/docs/manual/",source:"MongoDB Official"},{type:"article",title:"MongoDB University Free Courses",url:"https://learn.mongodb.com/",source:"MongoDB University"},{type:"video",title:"MongoDB in 100 Seconds",url:"https://www.youtube.com/watch?v=-bt_y4Loofg",source:"Fireship"}],eli5:"Imagine a folder full of sticky notes. Each note can have different things - one has a phone number, another has a drawing. That's MongoDB! Unlike a strict notebook with lines and columns (SQL), your sticky notes can have whatever you want.",codeWalkthrough:["SQL (MySQL) — rigid table structure 📊","Every row MUST have the same columns:","| id | name  | email           | age |","| 1  | Alex  | alex@mail.com   | 25  |","| 2  | Sam   | sam@mail.com    | 30  |","","MongoDB — flexible documents 📄","Document 1","Opening block","","","","","Closing block","Document 2 — has EXTRA fields, and that's OK!","Opening block","","","","","","","","","Closing block","","Closing block","","Nested data — no JOINs needed! 🎯","Opening block","","","","","","","Closing block","","","","","","","","Closing block","","MongoDB queries with Prisma","Declaring a variable","","","","","Closing block","","","Find with flexible filtering","Declaring a variable","","","","Update nested data","Waiting for an async operation to complete","","","","","Closing block","Closing block",""],bugChallenge:{"code":"const user = await prisma.user.findUnique({\n  where: { name: \"John\" }\n});","hint":"What kind of field does findUnique require?","answer":"findUnique requires a unique field (like id or @unique field). 'name' is usually not unique. Fix: use findFirst for non-unique fields, or use id/email instead."},difficulty:"intermediate",prereqs:[1,4]},

  {id:19,title:"Prisma — Your Database Translator",subtitle:"Talk to Your Database in TypeScript",analogy:"Imagine you only speak English but your database speaks a completely different language. Without Prisma, you'd have to learn that language yourself (raw queries). With Prisma, you speak English (TypeScript), and Prisma translates everything perfectly — with spell check!",points:[{t:"Type-Safe Queries",d:"Prisma generates a fully typed client from your schema, so your editor autocompletes every table name, field name, and relation. A typo in a column name is caught at compile time before your code ever runs. This eliminates an entire category of bugs that commonly plague raw SQL queries in production."},{t:"Schema as Code",d:"Your entire data model lives in a single schema.prisma file where models, fields, types, relations, and indexes are all defined declaratively. This file becomes the single source of truth for your database structure. Version control it with Git and every developer sees the exact same database design."},{t:"Auto-Generated Types",d:"Run npx prisma generate and Prisma reads your schema to create TypeScript types for every model including all relations. You never manually write database interfaces. When you change the schema and regenerate, TypeScript immediately flags any code that no longer matches the new data structure."},{t:"Works with Many DBs",d:"Prisma supports PostgreSQL, MySQL, MongoDB, SQLite, SQL Server, and CockroachDB. Switching databases requires changing just the provider and connection string in your schema file. Your application code stays identical because Prisma abstracts away the database-specific SQL syntax and quirks."},{t:"Migrations",d:"When you change your schema, run npx prisma migrate dev and Prisma generates a SQL migration file that transforms your database to match the new schema. These migration files are version-controlled so your entire team applies the same database changes in the same order reproducibly."},{t:"Relations Made Easy",d:"Define one-to-many relations with simple syntax: a User has many Posts and each Post belongs to one User. Prisma handles foreign keys and join logic automatically. Fetching a user with all their posts is just one line: prisma.user.findUnique({ include: { posts: true } }) — clean and readable."},{t:"Raw Queries When Needed",d:"For complex queries that Prisma's builder cannot express — like recursive CTEs, full-text search, or database-specific functions — use prisma.$queryRaw() to write raw SQL with full type safety on the results. You get the best of both worlds: Prisma for most queries and raw SQL for edge cases."},{t:"Great DX",d:"Prisma's developer experience is exceptional: auto-completion shows every available field and filter option, hover documentation explains each method, and compile-time errors catch mistakes before deployment. Prisma Studio provides a visual GUI to browse, filter, and edit your database records during development."},{t:"Transactions — All or Nothing",d:"When multiple database operations must succeed together (like transferring money: deduct from account A AND add to account B), wrap them in prisma.$transaction([...]). If any step fails, ALL changes roll back automatically. This guarantees data consistency even when things go wrong mid-operation."},{t:"Seeding & Prisma Studio",d:"Prisma supports database seeding through a seed script that populates your database with initial or test data. Run npx prisma db seed to fill your tables with sample users, products, or categories. Combined with Prisma Studio's visual browser, you can quickly set up and inspect development data."}],whatIs:"Prisma is a modern ORM (Object-Relational Mapping) for TypeScript and Node.js. It auto-generates a type-safe database client from your schema, making database operations feel like writing regular TypeScript code.",realWorld:"Prisma is used by companies like Daimler, Rapha, and many YC startups. It's the most popular TypeScript ORM, especially loved for its developer experience and type safety.",code:`// Step 1: Define your schema (prisma/schema.prisma) 📝
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  name  String
  email String @unique
  age   Int
  posts Post[]       // One user has many posts!
  createdAt DateTime @default(now())
}

model Post {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  title    String
  content  String
  author   User   @relation(fields: [authorId], references: [id])
  authorId String @db.ObjectId
}

// Step 2: Use it in your code — look how clean! ✨
// Create
const user = await prisma.user.create({
  data: {
    name: "Alex",
    email: "alex@dev.com",
    age: 25,
  },
});

// Read
const user = await prisma.user.findUnique({
  where: { email: "alex@dev.com" }
});

// Find with relations (auto-JOINs!)
const userWithPosts = await prisma.user.findUnique({
  where: { email: "alex@dev.com" },
  include: { posts: true }, // Magic! 🪄
});

// Type-safe filtering
const adults = await prisma.user.findMany({
  where: { age: { gte: 18 } },
  orderBy: { name: 'asc' },
  take: 10,
});
// Try typing prisma.user.fi... and see the autocomplete! 🤩

// Update
await prisma.user.update({
  where: { id: "userId" },
  data: { age: 26 }
});

// Delete
await prisma.user.delete({
  where: { id: "userId" }
});`,funFact:"Before Prisma, the most popular MongoDB ORM was Mongoose (created in 2010). Prisma launched MongoDB support in 2021 and quickly became the go-to choice for TypeScript devs! 🚀",quiz:[{q:"What does Prisma auto-generate?",opts:["HTML pages","TypeScript types from your database schema","Docker containers","React components"],ans:1},{q:"What's an ORM?",opts:["A type of bug","Object-Relational Mapping — makes database queries feel like TypeScript code","Only Ruby Middleware","Objectively Responsive Manager"],ans:1},{q:"How do you define your data model in Prisma?",opts:["In a JavaScript file","In a TypeScript interface","In the schema.prisma file","In the database directly"],ans:2},{q:"What happens when you change your Prisma schema and run 'npx prisma migrate dev'?",opts:["It deletes the database","It regenerates TypeScript types only","It generates a SQL migration file that transforms your database to match the new schema","It deploys the app to production"],ans:2},{q:"When would you use prisma.$queryRaw() instead of the Prisma query builder?",opts:["For all queries, it's always better","For simple CRUD operations","For basic find and create operations","For complex queries like recursive CTEs or database-specific functions that the builder can't express"],ans:3}],challenge:"Run `npx prisma init` in a project. Define a User model in schema.prisma, then run `npx prisma generate`. Open node_modules/.prisma/client and look at the generated types!",resources:[{type:"docs",title:"Prisma Documentation",url:"https://www.prisma.io/docs",source:"Prisma Official"},{type:"article",title:"Prisma Quickstart",url:"https://www.prisma.io/docs/prisma-orm/quickstart/prisma-postgres",source:"Prisma Official"},{type:"video",title:"Prisma in 100 Seconds",url:"https://www.youtube.com/watch?v=rLRIB6AF2Dg",source:"Fireship"}],eli5:"Imagine you only speak English but your toy box speaks French. Prisma is a magic translator friend! You say 'give me the red car' in English, Prisma translates to French, and the toy box gives you the red car. You never need to learn French!",codeWalkthrough:["Step 1: Define your schema (prisma/schema.prisma) 📝","Defining a database model/table","","","","","","","Closing block","","Defining a database model/table","","","","","","Closing block","","Step 2: Use it in your code — look how clean! ✨","Create","Declaring a variable","","","","","Closing block","","","Read","Declaring a variable","","","","Find with relations (auto-JOINs!)","Declaring a variable","","","","","Type-safe filtering","Declaring a variable","","","","","Try typing prisma.user.fi... and see the autocomplete! 🤩","","Update","Waiting for an async operation to complete","","","","","Delete","Waiting for an async operation to complete","",""],bugChallenge:{"code":"const users = await prisma.user.findMany({\n  where: { age: { gt: \"18\" } }\n});","hint":"Look at the type of the value being compared...","answer":"The comparison value '18' is a string but age is a number field. Prisma expects a number for numeric comparisons. Fix: change '\"18\"' to just 18 (without quotes)."},difficulty:"intermediate",prereqs:[1,4,9,18]}
  ,

  {id:20,title:"Environment Variables & Configuration",subtitle:"Different Settings for Different Worlds",analogy:"Think of your app like you at different places. At home, you wear pajamas, eat from the fridge, and have your own WiFi password. At the office, you wear business clothes, eat from the cafeteria, and use the company network. Same YOU, different settings! Environment variables let your app behave differently in development (home) vs production (office) without changing the code.",points:[{t:".env Files",d:"A .env file is a simple text file with KEY=VALUE pairs like DATABASE_URL=mongodb://localhost:27017. It stores sensitive configuration outside your source code so secrets never end up in version control. Always add .env to your .gitignore — committing secrets to Git is a serious security risk."},{t:"process.env",d:"Node.js reads environment variables through the process.env object: process.env.DATABASE_URL. The dotenv package loads .env files automatically at startup. In NestJS, the @nestjs/config module provides a cleaner approach with dependency injection and type safety built in from the start."},{t:"@nestjs/config Module",d:"ConfigModule.forRoot() loads your .env files and registers ConfigService as an injectable provider throughout your app. Access values anywhere with this.config.get('DATABASE_URL'). You can also define typed configuration objects for complex settings, making your config type-safe and IDE-friendly."},{t:"Environment-Specific Configs",d:"Create separate files for each environment: .env.development for local work, .env.production for live servers, and .env.test for running tests. Your app loads the correct file based on the NODE_ENV variable, ensuring each environment uses its own database URLs, API keys, and feature flags."},{t:"Secrets Management",d:"API keys, database passwords, JWT secrets — never hardcode these in your source code! In production, use your cloud provider's secrets manager (AWS Secrets Manager, Vercel env vars, Railway variables). These services encrypt secrets at rest and rotate them automatically."},{t:".env.example Template",d:"Commit a .env.example file with empty placeholder values as documentation: DATABASE_URL= JWT_SECRET=. When a new developer joins the team, they copy .env.example to .env and fill in their own local values. This documents every required variable without exposing actual secrets in the repository."},{t:"Config Validation",d:"Validate environment variables at startup using Joi or class-validator. If DATABASE_URL is missing, your app should crash immediately with a clear error message — not five minutes later with a cryptic database connection error that takes an hour to debug."},{t:"Feature Flags with Config",d:"Use environment variables as feature flags to enable or disable functionality: ENABLE_NEW_DASHBOARD=true. This lets you deploy code for a new feature to production but keep it hidden until ready. Toggle features per environment without redeploying — essential for safe, incremental rollouts."},{t:"Config Namespaces",d:"For large applications, organize configuration into namespaces: database config, auth config, email config each in their own file. NestJS supports registerAs to create namespaced configs accessed via this.config.get('database.host'). This keeps configuration organized and prevents naming collisions across modules."}],whatIs:"Environment variables are key-value pairs that configure your application without hardcoding values in source code. They allow the same codebase to behave differently across environments (development, staging, production). The @nestjs/config module provides a clean, type-safe way to manage configuration in NestJS.",realWorld:"Every deployed application uses environment variables. Your local development uses a local database URL. Staging points to a test database. Production points to the real database. The code is identical — only the environment variables change.",code:`// .env file (NEVER commit this!)
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=super-secret-key-change-in-production
PORT=3000
NODE_ENV=development

// .env.example (DO commit this)
DATABASE_URL=
JWT_SECRET=
PORT=3000
NODE_ENV=development

// .gitignore
.env
.env.local
.env.production

// app.module.ts — Load config
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // available everywhere
      envFilePath: '.env',
    }),
  ],
})
export class AppModule {}

// any.service.ts — Use config values
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private config: ConfigService) {}

  getJwtSecret(): string {
    return this.config.get<string>('JWT_SECRET');
  }
}

// Config validation with Joi
import * as Joi from 'joi';

ConfigModule.forRoot({
  validationSchema: Joi.object({
    DATABASE_URL: Joi.string().required(),
    JWT_SECRET: Joi.string().min(32).required(),
    PORT: Joi.number().default(3000),
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development'),
  }),
});
// If DATABASE_URL is missing, app crashes at startup:
// Error: "DATABASE_URL" is required`,funFact:"In 2016, an Uber engineer accidentally committed AWS credentials to a public GitHub repo. Hackers found them within minutes and accessed data of 57 million users. This is why .env files exist and why you NEVER commit secrets to Git!",quiz:[{q:"Why should you NEVER commit .env files to Git?",opts:["They make the repo too large","They contain sensitive secrets like API keys and passwords","Git cannot handle .env files","They slow down the build"],ans:1},{q:"What does ConfigModule.forRoot({ isGlobal: true }) do in NestJS?",opts:["Makes the config available in all modules without re-importing","Shares config across multiple servers","Makes all values public","Enables global error handling"],ans:0},{q:"What is the purpose of a .env.example file?",opts:["It's a backup of the real .env file","It documents required environment variables without exposing actual values","It's used in production instead of .env","It automatically generates .env files"],ans:1},{q:"Why is Joi validation useful for environment variables?",opts:["It makes the app faster","It validates env vars at startup so missing or invalid config crashes immediately instead of failing at runtime","It encrypts environment variables","It replaces .env files entirely"],ans:1},{q:"What should you do if your app needs different config values per environment (dev, staging, production)?",opts:["Hardcode all values in the source code","Use separate .env files per environment and load them via NODE_ENV","Only test in production","Use the same values everywhere"],ans:1}],challenge:"Create a .env file with DATABASE_URL, JWT_SECRET, and PORT. Set up ConfigModule with Joi validation that requires DATABASE_URL and JWT_SECRET. Add a .env.example and update .gitignore. What happens when you remove DATABASE_URL?",resources:[{type:"docs",title:"NestJS Configuration",url:"https://docs.nestjs.com/techniques/configuration",source:"NestJS Official"},{type:"docs",title:"dotenv Documentation",url:"https://github.com/motdotla/dotenv",source:"GitHub"},{type:"article",title:"Environment Variables Best Practices",url:"https://12factor.net/config",source:"The Twelve-Factor App"}],eli5:"Think of your app like getting dressed. At home you wear pajamas (development). At school you wear a uniform (production). Same you, different outfits! Environment variables are like outfit lists for each place - you don't sew clothes into your body, you just change what you wear.",codeWalkthrough:[".env file (NEVER commit this!)","","","","","",".env.example (DO commit this)","","","","","",".gitignore","Method chaining on the previous expression","Method chaining on the previous expression","Method chaining on the previous expression","","app.module.ts — Load config","Importing required dependencies","","Decorator that adds metadata or behavior","","","","","","","","Exporting for use in other files","","any.service.ts — Use config values","Importing required dependencies","","Decorator that adds metadata or behavior","Exporting for use in other files","","","","Returning a value","Closing block","Closing block","","Config validation with Joi","Importing required dependencies","","","","","","","","Method chaining on the previous expression","Method chaining on the previous expression","","","If DATABASE_URL is missing, app crashes at startup:","Error: \"DATABASE_URL\" is required"],bugChallenge:{"code":"// .env committed to Git!\nDATABASE_URL=mongodb://admin:password123@production-server:27017/myapp\nJWT_SECRET=my-super-secret-key","hint":"Should .env files with real credentials be in your Git repository?","answer":"NEVER commit .env files with real credentials to Git! Anyone with repo access can see your passwords. Fix: add .env to .gitignore and use .env.example with empty values instead."},difficulty:"intermediate",prereqs:[1,15]},

  {id:21,title:"Authentication — JWT & Guards",subtitle:"Who Are You? Prove It!",analogy:"Authentication is like a nightclub. The bouncer (Guard) checks your ID (JWT token) at the door. If valid, you're in! If expired or fake, you're out. Some VIP rooms (admin routes) need a special stamp (role) on your wristband!",points:[{t:"JWT (JSON Web Token)",d:"A signed token with user info like userId and role. The server verifies it using a secret key without querying the DB each request. Like a concert wristband with three parts: header, payload, signature."},{t:"Passport.js",d:"Passport has 500+ auth strategies: local (email/password), Google OAuth, Facebook, GitHub, and more. NestJS integrates it via @nestjs/passport. Each strategy handles its specific login flow for you."},{t:"Guards",d:"Guards are the conceptual gatekeepers of your API — middleware that decides if a request should proceed. Think of them as security checkpoints: Is this user authenticated? Do they have the right role? The concept applies to any framework, not just NestJS. For NestJS-specific Guard implementation (AuthGuard, RolesGuard, custom decorators), see Lesson 45."},{t:"Role-Based Access",d:"Define roles like admin, manager, user, and guest with different permissions. Admins delete users, regular users edit only their profile. Guards check the JWT payload and reject unauthorized requests."},{t:"Token Refresh",d:"Access tokens expire in 15-30 minutes for security. Refresh tokens last 7-30 days. When access tokens expire, exchange the refresh token for a new one — no re-login needed. Always rotate refresh tokens!"},{t:"Password Hashing",d:"NEVER store plain-text passwords! Use bcrypt to hash with a salt before saving. Even if your database is breached, hashes cannot be reversed. Use bcrypt.compare() during login to verify credentials."},{t:"OAuth 2.0 Social Login",d:"Let users log in with Google, GitHub, or Facebook instead of creating passwords. OAuth 2.0 redirects to the provider, they authorize your app, and you get a token with their profile. Improves UX greatly."},{t:"CSRF & Security Headers",d:"CSRF tricks users into making unwanted requests. Protect with CSRF tokens and helmet middleware for security headers. Set HttpOnly and Secure flags on cookies and use SameSite attribute for protection."},{t:"Two-Factor Authentication",d:"Add extra security with a second step after the password. Users scan a QR code with Google Authenticator then enter a 6-digit code each login. Libraries like speakeasy make TOTP-based 2FA straightforward."},{t:"Session vs Token Auth",d:"Sessions store user state on the server (Redis or memory) using cookies. JWT is stateless — the token itself holds all info. Tokens suit APIs and mobile apps; sessions work better for server-rendered web apps."}],whatIs:"Authentication verifies WHO you are (login). Authorization verifies WHAT you can do (permissions). JWTs are stateless tokens that contain encoded user info, verified by the server using a secret key.",realWorld:"Nearly every web app uses JWT for authentication. Google, GitHub, and Stripe all use OAuth + JWT. NestJS makes it clean with decorators like @UseGuards() and @Roles().",code:`// 1. Login — get your JWT token 🎟️
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const user = await this.authService.validateUser(
      dto.email, dto.password
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Create JWT with user info
    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role, // 'admin', 'user', etc.
    });

    return { access_token: token };
  }
}

// 2. JWT Guard — the bouncer 🚪
@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  // Passport automatically verifies the token!
}

// 3. Role Guard — VIP check 🌟
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles', context.getHandler()
    );
    if (!requiredRoles) return true; // No roles required
    const { user } = context.switchToHttp().getRequest();
    if (!user) return false; // No authenticated user
    return requiredRoles.includes(user.role);
  }
}

// 4. Using guards on routes — clean & simple! ✨
@Controller('admin')
@UseGuards(JwtGuard, RolesGuard)  // Must be logged in + right role
export class AdminController {
  @Get('dashboard')
  @Roles('admin')  // Only admins!
  getDashboard() {
    return { message: 'Welcome to admin panel!' };
  }

  @Get('stats')
  @Roles('admin', 'manager')  // Admins OR managers
  getStats() {
    return this.statsService.getAll();
  }
}`,funFact:"JWT tokens are NOT encrypted — they're just Base64 encoded. Anyone can read them! The 'signature' part just proves they weren't tampered with. Never put secrets in a JWT! 🤫",quiz:[{q:"What's the difference between authentication and authorization?",opts:["They're the same thing","Authentication = who you are, Authorization = what you can do","Authentication is for APIs, Authorization is for websites","Authentication uses cookies, Authorization uses tokens"],ans:1},{q:"Is the payload of a standard JWT (JWS) token hidden from anyone who has it?",opts:["Yes, JWT payloads are always encrypted","No — the payload is only Base64-encoded and readable by anyone. Never put secrets in JWTs!","Only if you use HTTPS","Only the header is visible"],ans:1},{q:"What does a Guard do in NestJS?",opts:["Protects against CSS attacks","Validates incoming requests (checks auth, roles, etc.)","Formats the response","Routes HTTP requests"],ans:1},{q:"Why should passwords be hashed with bcrypt before storing?",opts:["To make them shorter for storage efficiency","Even if the database is breached, bcrypt hashes cannot be reversed to reveal original passwords","To validate email formats","To improve login speed"],ans:1},{q:"What is the difference between session-based and token-based (JWT) authentication?",opts:["There is no difference","Sessions are newer than tokens","Sessions store state on the server using cookies; JWT is stateless with all info encoded in the token itself","JWT requires a database for every request"],ans:2}],challenge:"Decode a JWT token at jwt.io — paste any token and see the three parts: Header, Payload, and Signature. Notice how the payload is readable!",resources:[{type:"docs",title:"NestJS Authentication",url:"https://docs.nestjs.com/security/authentication",source:"NestJS Official"},{type:"docs",title:"JWT.io Introduction",url:"https://www.jwt.io/introduction",source:"JWT.io"},{type:"video",title:"JWT Authentication Tutorial",url:"https://www.youtube.com/watch?v=7Q17ubqLfaM",source:"Web Dev Simplified"}],eli5:"Authentication is like showing your library card to borrow books. First you sign up and get a card (token). Every time you want a book, you show the card. Some special books are only for teachers (admin roles). The librarian checks your card every time!",codeWalkthrough:["1. Login — get your JWT token 🎟️","Decorator that adds metadata or behavior","Exporting for use in other files","","","","","","Decorator that adds metadata or behavior","","Declaring a variable","","Closing expression","","Conditional check","Throwing an error","Closing block","","Create JWT with user info","Declaring a variable","","","","","","Returning a value","Closing block","Closing block","","2. JWT Guard — the bouncer 🚪","Decorator that adds metadata or behavior","Exporting for use in other files","Passport automatically verifies the token!","Closing block","","3. Role Guard — VIP check 🌟","Decorator that adds metadata or behavior","Exporting for use in other files","","","","Declaring a variable","","Closing expression","Declaring a variable","Returning a value","Closing block","Closing block","","4. Using guards on routes — clean &amp; simple! ✨","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","Exporting for use in other files","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","","Returning a value","Closing block","","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","","Returning a value","Closing block","Closing block"],bugChallenge:{"code":"@Post('login')\nasync login(@Body() dto: LoginDto) {\n  const user = await this.authService.validate(dto.email, dto.password);\n  const token = this.jwtService.sign({\n    sub: user.id,\n    password: user.password,\n  });\n  return { access_token: token };\n}","hint":"JWT tokens are NOT encrypted - anyone can read them...","answer":"The password is included in the JWT payload! JWTs are base64-encoded, not encrypted, so anyone can read them. Fix: remove 'password: user.password' from the token payload."},difficulty:"intermediate",prereqs:[1,8,15]},

  {id:22,title:"Generics & Utility Types",subtitle:"Writing Code That Works With Any Type",analogy:"Generics are like empty containers — you decide what goes INSIDE later. ApiResponse&lt;User&gt; is a container holding User data. ApiResponse&lt;Post[]&gt; is the same container holding Posts. Same container, different contents!",points:[{t:"Generic Functions with &lt;T&gt;",d:"function getFirst&lt;T&gt;(arr: T[]): T { return arr[0]; } — T is a placeholder. Call with getFirst&lt;string&gt;(['a','b']) and T becomes string."},{t:"Generic Interfaces",d:"interface ApiResponse&lt;T&gt; { data: T; success: boolean; }. Use ApiResponse&lt;User&gt; or ApiResponse&lt;Post[]&gt;. Same interface, different types!"},{t:"Constraints with extends",d:"function process&lt;T extends { length: number }&gt;(item: T) — T MUST have a length property. Prevents passing number (which has no length)."},{t:"Partial&lt;T&gt;",d:"Partial&lt;User&gt; makes all properties optional. Great for update DTOs where only SOME fields change."},{t:"Pick&lt;T, K&gt;",d:"Pick&lt;User, 'name' | 'email'&gt; = only those properties. Remove unnecessary fields!"},{t:"Omit&lt;T, K&gt;",d:"Omit&lt;User, 'password'&gt; = everything EXCEPT password. Perfect for API responses (never expose secrets!)."},{t:"Record&lt;K, V&gt;",d:"Record&lt;string, number&gt; = object with string keys and number values. Like a Map but as an object!"},{t:"Readonly&lt;T&gt;",d:"Readonly&lt;User&gt; makes all properties readonly. Prevents accidental mutations!"}],whatIs:"Generics let you write flexible code that works with ANY type. Utility types transform existing types: Partial makes properties optional, Pick selects properties, Omit removes them. Learn these and you'll write DRY code!",realWorld:"React hooks use generics: useState&lt;T&gt;, useCallback&lt;T&gt;. API responses use generics: Promise&lt;ApiResponse&lt;T&gt;&gt;. Mastering generics = writing production-quality code!",code:`// Generic function — T is a placeholder
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<string>(["a", "b"]);   // returns "a" (type: string)
getFirst<number>([1, 2, 3]);    // returns 1 (type: number)
getFirst(["a", "b"]);   // TS guesses T = string

// Generic interface
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: "1", name: "John" },
  success: true,
  message: "Found"
};

const postsResponse: ApiResponse<Post[]> = {
  data: [/* array of posts */],
  success: true,
  message: "All posts"
};

// Constraints — T must have "length"
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("hello");     // 5 ✓
logLength([1, 2, 3]);   // 3 ✓
// logLength(123);      // ERROR! number has no length

// Utility Types ✨

// Partial<T> — all properties optional
type UpdateUserDto = Partial<User>;
// user can have any combination of User fields!

// Pick<T, K> — only selected properties
type UserPreview = Pick<User, "name" | "email">;
// { name: string; email: string; }

// Omit<T, K> — everything except selected
type UserPublic = Omit<User, "password" | "ssn">;
// Has everything but password and ssn!

// Record<K, V> — object with specific keys
type Scores = Record<string, number>;
const scores: Scores = {
  math: 95,
  science: 87,
  english: 92
};

// Readonly<T> — all properties readonly
type Config = Readonly<{
  apiUrl: string;
  port: number;
}>;

const config: Config = { apiUrl: "https://api.com", port: 3000 };
// config.port = 4000;  // ERROR!

// Enums — named constants
enum Role {
  ADMIN = "admin",
  USER = "user",
  MODERATOR = "moderator"
}

const myRole: Role = Role.ADMIN;

// Tuples — fixed-length arrays with types
type Pair = [string, number];
const pair: Pair = ["John", 25];
pair[0];  // "John" (string)
pair[1];  // 25 (number)
// pair[2];  // ERROR!

// Type assertions (type casting)
const input = document.getElementById("name") as HTMLInputElement;
input.value = "John";  // TS knows it's an input now`,funFact:"Utility types are so powerful that some developers write entire applications using just Partial, Pick, and Omit to manage types!",quiz:[{q:"What does &lt;T&gt; mean in a generic?",opts:["Less than operator","A placeholder for any type","A comparison operator","A syntax error"],ans:1},{q:"Which utility type makes all properties optional?",opts:["Pick","Omit","Partial","Record"],ans:2},{q:"What does Omit&lt;User, 'password'&gt; create?",opts:["A User with ONLY password","A User WITHOUT password","A User interface","An error"],ans:1},{q:"What does Record<string, number> create in TypeScript?",opts:["An array of alternating strings and numbers","An object type with string keys and number values, like { math: 95, science: 87 }","A tuple containing one string and one number","A class that records data"],ans:1},{q:"What does a generic constraint like <T extends { length: number }> enforce?",opts:["T must be exactly a string type","T can be any type including number","T must be an object with a length property, preventing types like number that lack it","T must extend a class"],ans:2}],challenge:"Create a generic ApiResponse&lt;T&gt; interface. Use Partial, Pick, Omit with it. Make POST endpoint with Partial, GET with Pick!",resources:[{type:"docs",title:"TypeScript Handbook - Generics",url:"https://www.typescriptlang.org/docs/handbook/2/generics.html",source:"TypeScript Official"},{type:"docs",title:"TypeScript Utility Types",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html",source:"TypeScript Official"},{type:"video",title:"TypeScript Generics Explained",url:"https://www.youtube.com/watch?v=nViEqpgwxHE",source:"Web Dev Simplified"}],eli5:"Generics are like a magic lunchbox that can hold anything you choose! You decide what goes inside - sandwiches, fruit, or candy. The lunchbox doesn't care what's inside, but once you pick, it remembers. Same lunchbox shape, different food!",codeWalkthrough:["Generic function — T is a placeholder","Declaring a function","Returning a value","Closing block","","","","","","Generic interface","Defining an interface shape","","","","Closing block","","Declaring a variable","","","","Closing block","","Declaring a variable","","","","Closing block","","Constraints — T must have \"length\"","Declaring a function","Printing output to the console","Closing block","","","","logLength(123);      // ERROR! number has no length","","Utility Types ✨","","Partial&lt;T&gt; — all properties optional","Defining a type alias","user can have any combination of User fields!","","Pick&lt;T, K&gt; — only selected properties","Defining a type alias","{ name: string; email: string; }","","Omit&lt;T, K&gt; — everything except selected","Defining a type alias","Has everything but password and ssn!","","Record&lt;K, V&gt; — object with specific keys","Defining a type alias","Declaring a variable","","","","Closing block","","Readonly&lt;T&gt; — all properties readonly","Defining a type alias","","","","","Declaring a variable","config.port = 4000;  // ERROR!","","Enums — named constants","Defining an enum","","","","Closing block","","Declaring a variable","","Tuples — fixed-length arrays with types","Defining a type alias","Declaring a variable","","","pair[2];  // ERROR!","","Type assertions (type casting)","Declaring a variable",""],bugChallenge:{"code":"function getFirst<T>(arr: T[]): T {\n  return arr;\n}","hint":"The return type is T (one item) but what is actually being returned?","answer":"The function returns the entire array (T[]) instead of a single item (T). Fix: change 'return arr' to 'return arr[0]'."},difficulty:"advanced",prereqs:[1,4,5]},

  {id:23,title:"Redis — The Speed Demon",subtitle:"Super-Fast Temporary Storage",analogy:"Your database (MongoDB) is like a filing cabinet — organized, reliable, but takes a few seconds to find things. Redis is like a sticky note on your desk — INSTANTLY readable! You put frequently needed info on the sticky note so you don't keep opening the cabinet.",points:[{t:"In-Memory Storage",d:"Redis stores data in RAM, not on disk — reads take about 0.1ms vs 10-100ms for disk-based databases. This speed makes Redis perfect for data accessed thousands of times per second with minimal latency."},{t:"Cache Layer",d:"Place Redis between your app and database to cache frequent data. When 100 users request the same page, the DB is queried once — Redis serves the other 99 instantly. Cuts database load dramatically."},{t:"Sessions & Auth",d:"Store session data in Redis so every request quickly verifies who is logged in. Session checks happen on every API call and must be fast. Redis handles millions of lookups per second, ideal for sessions."},{t:"Rate Limiting",d:"Track API requests per user or IP using Redis counters with automatic expiration. If a user exceeds 100 requests per minute, return 429. Atomic increments prevent race conditions and protect against abuse."},{t:"Pub/Sub Messaging",d:"Redis pub/sub lets services broadcast messages to multiple subscribers in real-time. Use it for live chat, notifications, or coordinating between server instances. Publish to a channel and all subscribers get it."},{t:"Data Structures",d:"Beyond simple key-value, Redis offers Lists for queues, Sets for unique collections, Hashes for object-like data, and Sorted Sets for leaderboards. Each type has specialized commands for atomic operations."},{t:"Expiration Keys",d:"Set a TTL on any key: SET key value EX 300 auto-deletes after 300 seconds. Perfect for temporary tokens, OTP codes, cache entries that should refresh, and rate limit counters. No cleanup needed!"},{t:"Cache Invalidation",d:"Keeping cached data fresh is critical. Use TTL expiration for simple cases, or actively delete cache keys when data changes. Common patterns: cache-aside, write-through, and write-behind with different tradeoffs."},{t:"Persistence Options",d:"Although in-memory, Redis can persist to disk: RDB snapshots (periodic saves) or AOF logs (append every write). RDB is faster for restarts, AOF offers better durability. Many setups use both for safety."},{t:"Atomic Operations",d:"Redis commands are atomic — they complete fully or not at all, even under heavy load. INCR safely increments counters, SETNX sets values only if absent (great for distributed locks). No race conditions!"}],whatIs:"Redis is an open-source, in-memory data store used as a cache, message broker, and database. It stores data in RAM (not disk), making it incredibly fast but limited in size. Think of it as a turbo-charged, temporary storage layer.",realWorld:"Twitter uses Redis to cache timelines. GitHub uses it for job queues. Stack Overflow uses it for caching. Almost every high-traffic app has Redis somewhere in its stack.",code:`// Without Redis — database gets hammered 😵
// 100 users visit the homepage in 1 minute:
// → 100 database queries (each takes 200ms)
// → Database: "I'm TIRED! 😫"

// With Redis — database chills 😎
// Request 1:
User → Backend → Redis (miss!) → Database (200ms)
              → Store in Redis (cache it!)

// Requests 2-100:
User → Backend → Redis (HIT! 2ms) → "Here's your data!"
              → Database: *sipping coffee* ☕

// Redis in your docker-compose.yml:
services:
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

// Using Redis with NestJS:
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  async getProperty(id: string) {
    // Check Redis first
    const cached = await this.cache.get(\`property:\${id}\`);
    if (cached) return cached; // Cache HIT! ⚡

    // Cache miss — ask database
    const property = await this.prisma.property.findUnique({
      where: { id },
    });

    // Store in Redis for next time (expire in 5 min = 300,000ms)
    await this.cache.set(\`property:\${id}\`, property, 300_000);
    return property;
  }
}`,funFact:"Redis can handle over 100,000 operations PER SECOND on a single server. That's like a librarian who can find and return 100K books every second! 📚💨",quiz:[{q:"Why is Redis so fast?",opts:["It uses a better programming language","It stores data in RAM (memory) instead of disk","It compresses data really well","It only works locally"],ans:1},{q:"What's a common use case for Redis?",opts:["Building web applications","Caching frequently-accessed data to speed up APIs","Creating databases","Training machine learning models"],ans:1},{q:"What happens to data in Redis if the server shuts down?",opts:["It's automatically backed up","It's permanently stored","It's lost (unless you configured persistence)","It gets transferred to a database"],ans:2},{q:"What is the cache-aside pattern with Redis?",opts:["Caching data that nobody uses","Check Redis first; on miss, query the database, store the result in Redis, then return it","Always querying the database and ignoring cache","Storing all data permanently in Redis"],ans:1},{q:"What Redis data structure would be best for implementing a real-time leaderboard?",opts:["Simple strings","Lists","Sorted Sets, because they maintain elements ranked by score","Hashes"],ans:2}],challenge:"Run Redis in Docker: `docker run -p 6379:6379 redis:7-alpine`. Then use `redis-cli` to SET and GET values. Try: `SET greeting 'Hello!' EX 10` — it disappears after 10 seconds!",resources:[{type:"docs",title:"Redis Documentation",url:"https://redis.io/docs/latest/",source:"Redis Official"},{type:"article",title:"Redis University",url:"https://university.redis.io/",source:"Redis University"},{type:"video",title:"Redis in 100 Seconds",url:"https://www.youtube.com/watch?v=G1rOthIU-uo",source:"Fireship"}],eli5:"You have a book report due. Reading the book from the library (database) takes 30 minutes. But if you write important notes on a sticky note (Redis), next time you can read your notes in 5 seconds! Redis is that super-fast sticky note for your app.",codeWalkthrough:["Without Redis — database gets hammered 😵","100 users visit the homepage in 1 minute:","→ 100 database queries (each takes 200ms)","→ Database: \"I'm TIRED! 😫\"","","With Redis — database chills 😎","Request 1:","","","","Requests 2-100:","","","","Redis in your docker-compose.yml:","Docker Compose section definition","","","","","","Using Redis with NestJS:","Importing required dependencies","","Decorator that adds metadata or behavior","Exporting for use in other files","","","","Check Redis first","Declaring a variable","Conditional check","","Cache miss — ask database","Declaring a variable","","","","Store in Redis for next time (expire in 5 min)","Waiting for an async operation to complete","Returning a value","Closing block","Closing block"],bugChallenge:{"code":"async getUser(id: string) {\n  const cached = await this.cache.get(\"user:\" + id);\n  if (cached) return cached;\n  const user = await this.prisma.user.findUnique({ where: { id } });\n  await this.cache.set(\"user:\" + id, user);\n  return user;\n}","hint":"What happens when the cached data gets stale?","answer":"The cache has no expiration (TTL), so data stays forever even if the user updates their profile. Fix: add a TTL: await this.cache.set('user:' + id, user, 300_000) to expire after 5 minutes (NestJS cache-manager uses milliseconds)."},difficulty:"intermediate",prereqs:[1,15,18]},

  {id:24,title:"Bull — The Job Queue Manager",subtitle:"Background Tasks Made Easy",analogy:"Imagine a post office. Without a queue: everyone shoves letters at one clerk who panics. WITH a queue: each letter goes into a sorted bin, gets processed in order, and you get a tracking number. Bull is the sorting system for your backend — it organizes heavy tasks into an orderly line so nothing gets lost or forgotten.",points:[{t:"Background Processing",d:"Offload slow tasks like emails, image processing, PDF generation, and notifications to the background. Users get instant responses while Bull handles heavy work separately, keeping your API responsive."},{t:"Powered by Redis",d:"Bull uses Redis to store job data, track progress, and manage queues. If your server restarts, pending jobs remain safely in Redis and resume automatically. Redis provides the speed and reliability Bull needs."},{t:"Auto-Retry",d:"When a job fails, Bull retries automatically. Set attempts: 3 with exponential backoff to retry with increasing delays (1s, 2s, 4s). Handles transient network errors and temporary failures without manual work."},{t:"Job Scheduling",d:"Schedule jobs for later or on a recurring basis. Send a reminder in 24 hours with delay: 86400000. Run daily tasks with cron expressions. Bull handles timing so you never need to build your own scheduler."},{t:"Concurrency Control",d:"Control how many jobs process simultaneously. Process 5 emails at once instead of flooding your SMTP server with 1000 sends. Bull manages the worker pool so resources stay balanced and services stay stable."},{t:"Priority Queues",d:"Assign priority levels so important tasks run first. Password reset emails (priority 1) process before newsletters (priority 10). Bull sorts the queue so critical jobs never wait behind low-priority batches."},{t:"Dead Letter Queue",d:"Jobs that exhaust all retries land in a failed state for investigation. Inspect error messages, check attempt counts, and manually retry after fixing the issue. Ensures you never silently lose important work."},{t:"Job Events & Monitoring",d:"Subscribe to job events: completed, failed, progress, stalled. Build dashboards with Bull Board or Arena to visualize queue health. Monitor jobs per minute, processing time, and failure rates in real-time."},{t:"Named Processors",d:"Create named processors in one queue for different job types. One queue handles welcome-email, password-reset, and invoice, each with its own handler. Keeps related jobs organized without dozens of queues."},{t:"Rate Limiting Jobs",d:"Control processing speed: limiter: { max: 10, duration: 1000 } processes at most 10 jobs per second. Essential when calling external APIs that cap requests, like email providers or payment gateways."}],whatIs:"Bull is a Node.js library for creating robust job queues backed by Redis. It handles background processing, retries, scheduling, and concurrency — so your API stays fast while heavy work happens behind the scenes.",realWorld:"Any app that sends emails, processes images, generates PDFs, or sends push notifications uses a job queue. Bull is the most popular choice for Node.js/NestJS applications.",code:`// The Problem: User waits for email to send ⏳
@Post('signup')
async signup(@Body() data: SignupDto) {
  const user = await this.prisma.user.create({ data });
  await this.emailService.send(user.email); // Takes 3-5 seconds! 😴
  return user; // User waits all that time...
}

// The Solution: Queue it with Bull! 🎯
// Step 1: Add job to queue (instant!)
@Post('signup')
async signup(@Body() data: SignupDto) {
  const user = await this.prisma.user.create({ data });

  // This returns INSTANTLY — job added to queue
  await this.emailQueue.add('welcome-email', {
    to: user.email,
    name: user.name,
  });

  return user; // User gets response in milliseconds! 🚀
}

// Step 2: Process the job in the background
@Processor('email')
export class EmailProcessor {
  @Process('welcome-email')
  async handleWelcome(job: Job) {
    console.log(\`Sending email to \${job.data.to}...\`);
    await this.emailService.send({
      to: job.data.to,
      subject: \`Welcome \${job.data.name}!\`,
      template: 'welcome',
    });
    console.log('Email sent! ✅');
  }

  // If it fails, Bull retries automatically!
  @OnQueueFailed()
  onFailed(job: Job, err: Error) {
    console.log(\`Job \${job.id} failed: \${err.message}\`);
    // Bull will retry based on your config!
  }
}`,funFact:"The name 'Bull' comes from 'Bull Queue' — but some people think it's because queues can be 'bull-headed' about retrying failed jobs until they succeed! 🐂",quiz:[{q:"Why use a job queue instead of doing everything in the request?",opts:["It's more complex and fun","Users get instant responses while slow tasks run in the background","Queues are required by law","It uses less memory"],ans:1},{q:"What does Bull use as its backend?",opts:["MongoDB","Redis","PostgreSQL","The file system"],ans:1},{q:"What happens if a Bull job fails?",opts:["The job is deleted forever","Bull automatically retries based on your configuration","The server crashes","The user gets an error immediately"],ans:1},{q:"What is a dead letter queue in Bull?",opts:["A queue for sending physical mail","Where jobs that failed all retry attempts are stored for investigation so no work is silently lost","A queue that automatically deletes all jobs","A deprecated Bull feature"],ans:1},{q:"How does Bull handle a job that fails due to a transient network error?",opts:["It deletes the job immediately","It crashes the entire queue","It automatically retries the job based on configured attempts and backoff strategy","It sends an email to the developer"],ans:2}],challenge:"Set up a Bull queue in NestJS using @nestjs/bull. Create a processor that logs 'Processing job!' and add a job to it from a controller. Watch the terminal — the job runs separately!",resources:[{type:"docs",title:"BullMQ Documentation",url:"https://docs.bullmq.io/",source:"BullMQ Official"},{type:"docs",title:"NestJS Queues",url:"https://docs.nestjs.com/techniques/queues",source:"NestJS Official"},{type:"video",title:"Message Queues Explained",url:"https://www.youtube.com/watch?v=oUJbuFMyBDk",source:"Fireship"}],eli5:"Sending emails from code is like having a robot pen pal. You tell the robot who to write to, what to say, and which post office to use. The robot writes the letter, puts it in an envelope, and sends it - all without you licking a single stamp!",codeWalkthrough:["1. Email service — the core logic 📮","Decorator that adds metadata or behavior","Exporting for use in other files","","Decorator that adds metadata or behavior","","","","Queue an email (returns instantly!)","","Waiting for an async operation to complete","","","","","Closing block","","","Waiting for an async operation to complete","","","","","Closing block","Closing block","","2. Email processor — sends in background 🏭","Decorator that adds metadata or behavior","Exporting for use in other files","","","Decorator that adds metadata or behavior","","Declaring a variable","Waiting for an async operation to complete","","","","","Closing block","Closing block","","3. React Email template — looks like React! ⚛️","Exporting for use in other files","Returning a value","","","","","","","","","","Closing expression","Closing block"],bugChallenge:{"code":"async sendReset(email: string) {\n  const token = generateToken();\n  await this.mailer.send({\n    to: email,\n    subject: \"Reset\",\n    html: \"<a href='myapp.com/reset?token=\" + token + \"'>Reset</a>\",\n  });\n}","hint":"What if sending fails? Should this block the request?","answer":"Two issues: 1) Email is sent synchronously, making the user wait. 2) No error handling if sending fails. Fix: use a Bull queue for background sending and wrap in try/catch."},difficulty:"intermediate",prereqs:[1,9,15],eli5:"Imagine you're at a bakery. Instead of waiting an hour for your cake, you leave your order number and go play! When the cake is ready, they call you. Bull is the order system that lets your app do slow things without making users wait.",codeWalkthrough:["The Problem: User waits for email to send ⏳","Decorator that adds metadata or behavior","","Declaring a variable","Waiting for an async operation to complete","Returning a value","Closing block","","The Solution: Queue it with Bull! 🎯","Step 1: Add job to queue (instant!)","Decorator that adds metadata or behavior","","Declaring a variable","","This returns INSTANTLY — job added to queue","Waiting for an async operation to complete","","","","","Returning a value","Closing block","","Step 2: Process the job in the background","Decorator that adds metadata or behavior","Exporting for use in other files","Decorator that adds metadata or behavior","","Printing output to the console","Waiting for an async operation to complete","","","","","Printing output to the console","Closing block","","If it fails, Bull retries automatically!","Decorator that adds metadata or behavior","","Printing output to the console","Bull will retry based on your config!","Closing block","Closing block"],bugChallenge:{"code":"@Post('signup')\nasync signup(@Body() data: SignupDto) {\n  const user = await this.prisma.user.create({ data });\n  await this.emailQueue.add('welcome', { email: user.email });\n  await this.emailQueue.add('welcome', { email: user.email });\n  return user;\n}","hint":"How many times is the job being added?","answer":"The welcome email job is added TWICE, so the user receives duplicate emails. Fix: remove the second duplicate emailQueue.add() line."},difficulty:"advanced",prereqs:[1,15,23]},

  {id:25,title:"Email Services",subtitle:"Sending Emails From Code",analogy:"Sending emails from code is like having a robot assistant. You tell the robot WHAT to say (template), WHO to send it to (recipient), and WHICH postal service to use (AWS SES, Mailgun, SendGrid). The robot handles the rest!",points:[{t:"Email Providers",d:"AWS SES, Mailgun, and SendGrid are postal services that deliver your emails. They handle spam filtering, delivery tracking, and bounce management. SES is cheapest at scale, SendGrid has the best dashboard."},{t:"Templates",d:"Pre-designed layouts for welcome emails, password resets, order confirmations, and invoices. Use Handlebars, EJS, or React Email for reusable templates with dynamic placeholders filled at send time."},{t:"Queued Sending",d:"Never send emails directly in your API handler — it blocks users for 2-5 seconds. Push email jobs to a Bull queue and return instantly. A background worker sends it later, keeping API responses fast."},{t:"React Email",d:"Build responsive email templates using React components instead of wrestling with inline CSS and table layouts. React Email provides Html, Body, Button, and Text components that render to email-compatible HTML."},{t:"Unsubscribe & Preferences",d:"Marketing emails must include an unsubscribe link — required by law (CAN-SPAM, GDPR). Let users manage preferences: order updates yes, newsletters no. Store and check preferences before sending."},{t:"Transactional vs Bulk",d:"Transactional emails (password reset, order confirmation) are triggered by user actions and sent immediately. Bulk emails (newsletters) can be batched. Use separate queues so transactional mail is never delayed."},{t:"Email Deliverability",d:"Getting emails to the inbox requires SPF, DKIM, and DMARC DNS records for your domain. Use a consistent sender address, avoid spammy subjects, and maintain sender reputation. Monitor bounce rates closely."},{t:"Error Handling & Retries",d:"Emails can fail from invalid addresses, provider outages, or rate limits. Implement retry logic with exponential backoff in your Bull processor. Log failures with error details and set up alerts for spikes."},{t:"Email Testing",d:"Use Ethereal or Mailtrap during development to catch emails without sending to real users. They provide fake SMTP servers that capture every email, letting you preview HTML, check headers, and verify links."},{t:"Attachments & Inline Images",d:"Send PDF invoices, CSV reports, or images as attachments using Buffer or streams. For inline images, use Content-ID references. Keep attachments under 10MB and link to S3 for larger documents."}],whatIs:"Email services in a NestJS app involve an email provider (like AWS SES), template system (like React Email or Handlebars), and a queue (Bull) to send emails asynchronously without blocking the user.",realWorld:"Every SaaS product sends emails: welcome messages, password resets, invoices, notifications. A typical app sends thousands of emails daily through providers like SES or SendGrid.",code:`// 1. Email service — the core logic 📮
@Injectable()
export class EmailService {
  constructor(
    @InjectQueue('email') private emailQueue: Queue,
    private configService: ConfigService,
  ) {}

  // Queue an email (returns instantly!)
  async sendWelcomeEmail(user: User) {
    await this.emailQueue.add('welcome', {
      to: user.email,
      name: user.name,
      template: 'welcome',
    });
  }

  async sendPasswordReset(email: string, token: string) {
    await this.emailQueue.add('password-reset', {
      to: email,
      resetUrl: \`https://myapp.com/reset?token=\${token}\`,
      template: 'password-reset',
    });
  }
}

// 2. Email processor — sends in background 🏭
@Processor('email')
export class EmailProcessor {
  constructor(private mailer: MailerService) {}

  @Process('welcome')
  async sendWelcome(job: Job) {
    const { to, name } = job.data;
    await this.mailer.send({
      to,
      subject: \`Welcome aboard, \${name}! 🎉\`,
      html: renderWelcomeTemplate({ name }),
    });
  }
}

// 3. React Email template — looks like React! ⚛️
export function WelcomeEmail({ name }: { name: string }) {
  return (
    <Html>
      <Body style={{ fontFamily: 'Arial' }}>
        <Heading>Welcome, {name}!</Heading>
        <Text>We're thrilled to have you.</Text>
        <Button href="https://myapp.com/dashboard">
          Get Started
        </Button>
      </Body>
    </Html>
  );
}`,funFact:"Gmail processes over 1.8 billion emails per day. If you printed them all on paper, the stack would reach the Moon and back... every single day! 🌙",quiz:[{q:"Why are emails sent through a queue instead of directly?",opts:["Email providers require queues","So users get instant responses while emails send in the background","Queues make emails more secure","It's a legal requirement"],ans:1},{q:"What email providers are commonly used?",opts:["Google only","AWS SES, Mailgun, SendGrid","Discord","Twitter"],ans:1},{q:"What does React Email allow you to do?",opts:["Send emails from React components","Write email templates using React components","Receive emails in React apps","Format React code in emails"],ans:1},{q:"What is the difference between transactional and bulk emails?",opts:["There is no meaningful difference","Transactional emails are triggered by user actions (password reset, order confirmation); bulk emails are batched sends like newsletters","Transactional emails are free while bulk are paid","Bulk emails are always faster to deliver"],ans:1},{q:"Why should you use Ethereal or Mailtrap during email development?",opts:["They send emails faster than production providers","They are required by GDPR regulations","They catch all outgoing emails in a test inbox so you never accidentally email real users during development","They provide better HTML templates"],ans:2}],challenge:"Use Nodemailer with a free Ethereal account (ethereal.email) to send a test email from Node.js. Check the 'caught' email in Ethereal's inbox!",resources:[{type:"docs",title:"Nodemailer Documentation",url:"https://nodemailer.com/",source:"Nodemailer Official"},{type:"docs",title:"NestJS Mailer Module",url:"https://nest-modules.github.io/mailer/",source:"NestJS Modules"},{type:"article",title:"React Email Documentation",url:"https://react.email/docs/introduction",source:"React Email"}],eli5:"Sending emails from code is like having a robot pen pal. You tell the robot who to write to, what to say, and which post office to use. The robot writes the letter, puts it in an envelope, and sends it - all without you licking a single stamp!",codeWalkthrough:["1. Email service — the core logic 📮","Decorator that adds metadata or behavior","Exporting for use in other files","","Decorator that adds metadata or behavior","","","","Queue an email (returns instantly!)","","","","","","","","","","","","","","","","","","2. Email processor — sends in background 🏭","Decorator that adds metadata or behavior","Exporting for use in other files","","","Decorator that adds metadata or behavior","","","","","","","","","","","3. React Email template — looks like React! ⚛️","Exporting for use in other files","","","","","","","","","","","",""],bugChallenge:{"code":"async sendReset(email: string) {\n  const token = generateToken();\n  await this.mailer.send({\n    to: email,\n    subject: \"Reset\",\n    html: \"<a href='myapp.com/reset?token=\" + token + \"'>Reset</a>\",\n  });\n}","hint":"What if sending fails? Should this block the request?","answer":"Two issues: 1) Email is sent synchronously, making the user wait. 2) No error handling if sending fails. Fix: use a Bull queue for background sending and wrap in try/catch."},difficulty:"intermediate",prereqs:[1,9,15]},

  {id:26,title:"Push Notifications with Firebase",subtitle:"Ding! You Have a Message!",analogy:"Push notifications are like a doorbell. The user doesn't need to keep checking if someone's at the door — the doorbell (Firebase Cloud Messaging) rings and tells them! Your server pushes the button, Firebase rings the bell on their device.",points:[{t:"Firebase Cloud Messaging (FCM)",d:"FCM is Google's free push notification service for Android, iOS, and web. It handles delivery infrastructure — just call an API with the message and target. Delivers billions of messages daily at no cost."},{t:"Device Tokens",d:"When a user installs your app, FCM assigns a unique device token. Store tokens in your database linked to each user. Provide the token when sending and FCM routes it to the exact device. Refresh regularly."},{t:"Topic Subscriptions",d:"Users subscribe to topics like news, deals, or sports. One API call to a topic delivers to all subscribers automatically. Perfect for broadcasting announcements, breaking news, or promotions to large groups."},{t:"Background Processing",d:"Send notifications through a Bull queue instead of directly in your API handler. Queue the job, return instantly, let a background worker call FCM. Keeps your API responsive even for thousands of messages."},{t:"Data Payloads",d:"Notifications carry custom data beyond title and body. Include fields like screen: orderDetails and orderId: 123 so tapping navigates to the right screen. Data payloads create rich, interactive experiences."},{t:"Rich Notifications",d:"Go beyond plain text with images, action buttons, and expandable content. Show product images, add Reply and Mark as Read buttons, or display delivery progress. Rich notifications boost user engagement."},{t:"Notification Channels",d:"Android requires notification channels so users control which types they receive. Create channels for messages, updates, and promotions with different importance levels. High-priority wakes the screen silently."},{t:"Token Management",d:"FCM tokens become invalid when users uninstall, clear data, or switch devices. Handle refresh events in your client app and update the server. Remove stale tokens when FCM returns errors to keep data clean."},{t:"Notification Analytics",d:"Track delivery rates, open rates, and click-through rates to measure engagement. FCM provides delivery receipts. Use this data to optimize send times, personalize content, and stop sending what users ignore."},{t:"Silent Notifications",d:"Send data-only messages without visible alerts to trigger background work. Use silent notifications to sync data, update cache, or refresh badge counts. Users see nothing, but your app stays current when opened."}],whatIs:"Push notifications let your server send messages directly to a user's device (phone or browser) without the user needing to be on your app. Firebase Cloud Messaging (FCM) is the most popular service for this.",realWorld:"Every app you use sends push notifications — WhatsApp messages, Instagram likes, Uber ride updates, news alerts. FCM handles billions of notifications daily for free.",code:`// 1. Initialize Firebase Admin SDK 🔧
import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// 2. Send to a specific device 📱
async function sendToDevice(token: string, title: string, body: string) {
  await admin.messaging().send({
    token: token, // device's unique FCM token
    notification: {
      title,
      body,
    },
    data: {
      // Custom data your app can read
      screen: 'notifications',
      actionId: '12345',
    },
  });
}

// 3. Send to a topic (all subscribers) 📢
async function sendToTopic(topic: string, title: string, body: string) {
  await admin.messaging().send({
    topic: topic, // e.g., 'new-properties', 'deals'
    notification: { title, body },
  });
}

// 4. In NestJS — queue it! 🎯
@Injectable()
export class NotificationService {
  constructor(
    @InjectQueue('notifications') private notifQueue: Queue
  ) {}

  async notifyUser(userId: string, message: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { fcmTokens: true },
    });

    // Queue notification for each device
    for (const token of user.fcmTokens) {
      await this.notifQueue.add('push', {
        token,
        title: 'New Update!',
        body: message,
      });
    }
  }
}`,funFact:"Firebase Cloud Messaging is completely FREE with no message limit. Google doesn't charge you whether you send 1 notification or 1 billion. That's pretty generous for a trillion-dollar company! 💰",quiz:[{q:"What does a device token identify?",opts:["The user's password","A specific device to send notifications to","The Firebase project","The notification content"],ans:1},{q:"How much does Firebase Cloud Messaging cost?",opts:["$1 per 1000 notifications","$10 per month per app","Completely free!","$100 per month"],ans:2},{q:"What are topic subscriptions for?",opts:["Subscribing to YouTube channels","Grouping users so you can send notifications to many at once","Creating new notification types","Only for admin users"],ans:1},{q:"What are FCM device tokens used for?",opts:["Encrypting notification content","Uniquely identifying a specific device so FCM can route push notifications to the correct phone or browser","Authenticating users","Tracking notification analytics"],ans:1},{q:"What are notification channels required for on Android?",opts:["Connecting to the internet","Making notifications louder","Allowing users to control which types of notifications they receive and at what importance level","Improving battery life"],ans:2}],challenge:"Create a Firebase project at console.firebase.google.com, get a server key, and send a test notification using the Firebase console's built-in testing tool!",resources:[{type:"docs",title:"Firebase Cloud Messaging",url:"https://firebase.google.com/docs/cloud-messaging",source:"Firebase Official"},{type:"docs",title:"FCM Architecture Overview",url:"https://firebase.google.com/docs/cloud-messaging/fcm-architecture",source:"Firebase Official"},{type:"video",title:"Firebase Push Notifications",url:"https://www.youtube.com/watch?v=2TSm2YGBT1s",source:"Fireship"}],eli5:"Push notifications are like a doorbell. You're playing inside and someone rings the bell to tell you something like 'Your pizza is here!' You don't have to keep opening the door to check - the doorbell tells you!",codeWalkthrough:["1. Initialize Firebase Admin SDK 🔧","Importing required dependencies","","","","","","2. Send to a specific device 📱","Declaring a function","Waiting for an async operation to complete","","","","","Closing block","","Custom data your app can read","","","Closing block","","Closing block","","3. Send to a topic (all subscribers) 📢","Declaring a function","Waiting for an async operation to complete","","","","Closing block","","4. In NestJS — queue it! 🎯","Decorator that adds metadata or behavior","Exporting for use in other files","","Decorator that adds metadata or behavior","","","","Declaring a variable","","","","","Queue notification for each device","Loop iteration","Waiting for an async operation to complete","","","","","Closing block","Closing block","Closing block"],bugChallenge:{"code":"async sendNotification(userId: string, msg: string) {\n  const user = await this.prisma.user.findUnique({ where: { id: userId } });\n  await admin.messaging().send({\n    token: user.fcmToken,\n    notification: { title: \"Update\", body: msg },\n  });\n}","hint":"What if the user doesn't exist or has no FCM token?","answer":"No null check for user or fcmToken. If user is null, accessing user.fcmToken crashes. Fix: add if (!user) throw new NotFoundException(); if (!user.fcmToken) return;"},difficulty:"intermediate",prereqs:[1,9,15]},

  {id:27,title:"AWS S3 — File Storage",subtitle:"Your Files in the Cloud",analogy:"S3 is like a magical storage locker with unlimited space. You give each file a unique key (like a locker number), and S3 stores it safely in the cloud. Need it back? Just ask for it by key. It never runs out of space and it never loses your files!",points:[{t:"Object Storage",d:"S3 stores files as objects in containers called buckets. Each object has a unique key, the file data, and metadata. S3 is flat — no real folders, just key prefixes like uploads/images/photo.jpg that mimic directories."},{t:"Pre-Signed URLs",d:"Generate a temporary URL granting upload or download access for a limited time without exposing AWS credentials. The frontend uploads directly to S3, bypassing your server. Reduces load and speeds up file uploads."},{t:"Scalable & Durable",d:"S3 offers 99.999999999% durability (11 nines) — store 10 million files and expect to lose one every 10,000 years. Data replicates across facilities. Store 1 or 1 billion files with no capacity planning."},{t:"CDN Integration",d:"Pair S3 with CloudFront CDN to serve files from edge servers nearest to users worldwide. Someone in Tokyo gets images from a nearby server, not US-East. Reduces latency to milliseconds for media-heavy apps."},{t:"Versioning",d:"Enable bucket versioning to keep every version of every file. Accidentally deleted an image or overwrote a document? Restore a previous version with one API call. Also protects against malicious deletions."},{t:"Access Control",d:"Control access with bucket policies, IAM roles, and ACLs. Make profile images public while keeping invoices private. Grant your backend upload permissions via IAM without access to delete other buckets."},{t:"Cost Effective",d:"S3 pricing is pay-as-you-go: about $0.023 per GB/month for standard storage. Store thousands of images for pennies. Use S3 Glacier for rarely-accessed files at even lower rates. Pay only for what you use."},{t:"Storage Classes",d:"S3 offers storage classes: Standard for frequent access, Intelligent-Tiering for unpredictable patterns, Glacier for archival. Set lifecycle rules to auto-move files to cheaper tiers after 30 or 90 days."},{t:"File Upload Best Practices",d:"Generate unique keys with timestamps or UUIDs to prevent collisions: uploads/1709234567-photo.jpg. Validate file types and sizes on both frontend and backend. Set Content-Type so browsers render files correctly."},{t:"Multipart Uploads",d:"For files over 100MB, multipart upload splits them into chunks uploaded in parallel. If one chunk fails, only that chunk retries. AWS SDK handles this via the Upload class, making large uploads reliable."}],whatIs:"Amazon S3 (Simple Storage Service) is cloud-based object storage. It's where you store files like images, documents, videos, and backups. Files are organized in buckets and accessed via unique keys.",realWorld:"Netflix stores all their content on S3. Airbnb stores listing photos. Almost every app that handles file uploads uses S3 or a similar service (Google Cloud Storage, Azure Blob).",code:`// 1. Upload a file to S3 📤
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({ region: 'us-east-1' });

async function uploadFile(file: Buffer, fileName: string) {
  await s3.send(new PutObjectCommand({
    Bucket: 'my-app-uploads',
    Key: \`uploads/\${Date.now()}-\${fileName}\`,
    Body: file,
    ContentType: 'image/jpeg',
  }));
}

// 2. Generate a pre-signed URL (temporary access) 🔗
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

async function getUploadUrl(fileName: string) {
  const command = new PutObjectCommand({
    Bucket: 'my-app-uploads',
    Key: \`uploads/\${fileName}\`,
  });

  // URL valid for 15 minutes — then it expires!
  const url = await getSignedUrl(s3, command, { expiresIn: 900 });
  return url; // Frontend uses this URL to upload directly!
}

// 3. NestJS file upload endpoint 📁
@Controller('files')
export class FileController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    const key = \`uploads/\${Date.now()}-\${file.originalname}\`;

    await this.s3Service.upload({
      bucket: 'my-app-uploads',
      key,
      body: file.buffer,
      contentType: file.mimetype,
    });

    return { url: \`https://my-app-uploads.s3.amazonaws.com/\${key}\` };
  }
}`,funFact:"Amazon S3 stores over 100 TRILLION objects (files). If each object was a grain of sand, you could fill about 1,000 Olympic swimming pools! 🏊",quiz:[{q:"What is a pre-signed URL?",opts:["A URL that's been digitally signed by a CEO","A temporary URL that allows upload/download for a limited time","A URL that only works on pre-signed devices","A permanent link to a file"],ans:1},{q:"What does 'bucket' mean in S3?",opts:["A water container","A container for storing files/objects","A node in a distributed system","A database table"],ans:1},{q:"How durable is S3 designed to be?",opts:["99%","99.9%","99.999999999% (11 nines)","100%"],ans:2},{q:"What is the benefit of using a CDN like CloudFront with S3?",opts:["It makes files larger","Serves files from edge servers nearest to users worldwide, reducing latency to milliseconds","It encrypts all files automatically","It replaces the need for S3"],ans:1},{q:"What does S3 bucket versioning allow you to do?",opts:["Create multiple S3 accounts","Speed up file downloads","Keep and restore every previous version of every file, even after deletion or overwrite","Automatically compress files"],ans:2}],challenge:"Create a free AWS account, make an S3 bucket, and upload a file using the AWS console. Then try generating a pre-signed URL using the AWS CLI!",resources:[{type:"docs",title:"AWS S3 Documentation",url:"https://docs.aws.amazon.com/s3/",source:"AWS Official"},{type:"docs",title:"NestJS File Upload",url:"https://docs.nestjs.com/techniques/file-upload",source:"NestJS Official"},{type:"video",title:"AWS S3 in 100 Seconds",url:"https://www.youtube.com/watch?v=tfU0JEZjFIQ",source:"Fireship"}],eli5:"S3 is like a magical closet in the sky with infinite space. You can put anything in it - photos, videos, homework. Each thing gets a special label so you can find it later. The closet never runs out of room and never loses your stuff!",codeWalkthrough:["1. Upload a file to S3 📤","Importing required dependencies","","Declaring a variable","","Declaring a function","Waiting for an async operation to complete","","","","","","Closing block","","2. Generate a pre-signed URL (temporary access) 🔗","Importing required dependencies","","Declaring a function","Declaring a variable","","","","","URL valid for 15 minutes — then it expires!","Declaring a variable","Returning a value","Closing block","","3. NestJS file upload endpoint 📁","Decorator that adds metadata or behavior","Exporting for use in other files","Decorator that adds metadata or behavior","Decorator that adds metadata or behavior","","Declaring a variable","","Waiting for an async operation to complete","","","","","","","Returning a value","Closing block","Closing block"],bugChallenge:{"code":"@Post('upload')\nasync upload(@UploadedFile() file: Express.Multer.File) {\n  const key = file.originalname;\n  await this.s3.upload({ Bucket: 'my-bucket', Key: key, Body: file.buffer });\n  return { url: 'https://my-bucket.s3.amazonaws.com/' + key };\n}","hint":"What happens when two users upload files with the same name?","answer":"Using file.originalname as the S3 key means files with the same name overwrite each other. Fix: add a unique prefix: const key = Date.now() + '-' + file.originalname;"},difficulty:"intermediate",prereqs:[1,15]},

  {id:28,title:"WebSockets & Real-Time",subtitle:"Live Updates Without Refreshing",analogy:"Normal HTTP is like sending letters — you send a question, wait for a reply. WebSockets are like a phone call — once connected, both sides can talk anytime! That's how live chat, notifications, and collaborative editing work.",points:[{t:"Persistent Connection",d:"Unlike HTTP where each request opens a new connection (connect, send, disconnect, repeat), WebSockets establish a single persistent connection that stays open. Both client and server can send messages at any time without the overhead of reconnecting. This enables true real-time two-way communication with minimal latency."},{t:"Socket.IO",d:"Socket.IO is the most popular WebSocket library for JavaScript. It wraps raw WebSockets with powerful features: automatic reconnection when the connection drops, room-based messaging for group communication, binary data support, and graceful fallbacks for environments where WebSockets are not available."},{t:"Rooms",d:"Rooms let you group WebSocket connections together so you can broadcast messages to specific subsets of users. For example, everyone in Chat Room 5 receives new messages but users in other rooms do not. Rooms are also useful for game lobbies, collaborative document sessions, and per-user notification channels."},{t:"NestJS Gateway",d:"NestJS provides built-in WebSocket support through the @WebSocketGateway() decorator. Define event handlers with @SubscribeMessage('eventName') just like you define HTTP routes with @Get(). The gateway integrates with NestJS dependency injection, guards, and interceptors for clean, organized real-time code."},{t:"Broadcasting",d:"Send messages to a single connected client, a specific room (group of users), or broadcast to every connected user at once. Socket.IO provides flexible methods: socket.emit (one user), socket.to('room').emit (room only), and io.emit (everyone). This gives you precise control over who receives each update."},{t:"Reconnection Logic",d:"Network interruptions are inevitable on mobile devices and unstable connections. Socket.IO handles reconnection automatically with configurable retry intervals and exponential backoff. The client detects disconnection, queues outgoing messages, reconnects seamlessly, and replays missed messages — users barely notice the blip."},{t:"Namespaces for Separation",d:"Socket.IO namespaces let you separate WebSocket logic into distinct channels on the same server. Create /chat for messaging, /notifications for alerts, and /live-scores for sports updates. Each namespace has its own event handlers, rooms, and middleware — keeping your real-time code organized and maintainable."},{t:"Authentication for WebSockets",d:"WebSocket connections need authentication just like HTTP routes. Pass the JWT token during the connection handshake and verify it in a middleware or guard before allowing the socket to join. Without authentication, anyone could connect and listen to private messages. NestJS guards work seamlessly with WebSocket gateways."}],whatIs:"WebSockets provide a persistent, bidirectional communication channel between client and server. Unlike HTTP (request-response), WebSocket connections stay open, allowing the server to push data to clients in real-time.",realWorld:"Slack, Discord, WhatsApp Web, Google Docs collaborative editing, live sports scores, stock tickers — all use WebSockets for real-time updates.",code:`// 1. NestJS WebSocket Gateway 🚀
@WebSocketGateway({
  cors: { origin: '*' },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  // When a client sends a message
  @SubscribeMessage('sendMessage')
  handleMessage(client: Socket, payload: { room: string; text: string }) {
    // Broadcast to everyone in the room
    this.server.to(payload.room).emit('newMessage', {
      text: payload.text,
      sender: client.id,
      timestamp: new Date(),
    });
  }

  // When a client joins a room
  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, room: string) {
    client.join(room);
    this.server.to(room).emit('userJoined', {
      message: \`Someone joined the room!\`,
    });
  }
}

// 2. React client — connect and listen 📡
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function ChatRoom({ room }: { room: string }) {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    socket.emit('joinRoom', room);

    socket.on('newMessage', (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => { socket.off('newMessage'); };
  }, [room]);

  const sendMessage = (text: string) => {
    socket.emit('sendMessage', { room, text });
  };

  return (
    <div>
      {messages.map((msg, i) => (
        <div key={i}>{msg.text}</div>
      ))}
      <input placeholder="Type..." onKeyDown={(e) => {
        if (e.key === 'Enter') sendMessage(e.currentTarget.value);
      }} />
    </div>
  );
}`,funFact:"Discord handles over 4 million WebSocket connections simultaneously on a single server using Elixir. That's like 4 million people on a phone call at the same time on one phone line! 📞",quiz:[{q:"How are WebSockets different from regular HTTP?",opts:["WebSockets are slower but more reliable","WebSockets maintain a persistent connection for real-time two-way communication","WebSockets only work on mobile","There's no difference"],ans:1},{q:"What's a common use case for WebSockets?",opts:["Uploading files","Real-time chat and live updates","Building REST APIs","Storing data in databases"],ans:1},{q:"What does Socket.IO do that plain WebSockets don't?",opts:["Everything — plain WebSockets don't work","Handles reconnection, rooms, and broadcasting automatically","Makes code run faster","Encrypts data"],ans:1},{q:"What do Socket.IO rooms allow you to do?",opts:["Create physical rooms on a server","Group WebSocket connections together to broadcast messages to specific subsets of users like a chat room","Store data in different database rooms","Create separate server instances"],ans:1},{q:"How does Socket.IO handle network disconnections automatically?",opts:["It doesn't handle disconnections","It deletes all data on disconnection","It detects disconnection, queues messages, reconnects with configurable retry intervals, and replays missed messages","It crashes the client application"],ans:2}],challenge:"Install socket.io and socket.io-client. Create a simple chat where messages appear in real-time across two browser tabs. It's magical when it works! ✨",resources:[{type:"docs",title:"NestJS WebSockets",url:"https://docs.nestjs.com/websockets/gateways",source:"NestJS Official"},{type:"docs",title:"Socket.io Documentation",url:"https://socket.io/docs/v4/",source:"Socket.io Official"},{type:"video",title:"WebSockets in 100 Seconds",url:"https://www.youtube.com/watch?v=1BfCnjr_Vjg",source:"Fireship"}],eli5:"Regular websites are like sending letters - you send a question, wait for an answer. WebSockets are like a phone call - once connected, both people can talk anytime! That's how live chat works - messages show up right away without refreshing.",codeWalkthrough:["1. NestJS WebSocket Gateway 🚀","Decorator that adds metadata or behavior","","","Exporting for use in other files","Decorator that adds metadata or behavior","","","When a client sends a message","Decorator that adds metadata or behavior","","Broadcast to everyone in the room","","","","","","Closing block","","When a client joins a room","Decorator that adds metadata or behavior","","","","","","Closing block","Closing block","","2. React client — connect and listen 📡","Importing required dependencies","","Declaring a variable","","Declaring a function","Declaring a variable","","","","","","","","","Returning a value","","","Declaring a variable","","Closing block","","Returning a value","","","","","","Conditional check","","","Closing expression","Closing block"],bugChallenge:{"code":"@SubscribeMessage('sendMessage')\nhandleMessage(client: Socket, payload: { room: string; text: string }) {\n  client.emit('newMessage', { text: payload.text });\n}","hint":"Who receives the message when you emit on client?","answer":"client.emit() sends only to the sender, not everyone in the room. Fix: use this.server.to(payload.room).emit('newMessage', ...) to broadcast to the room."},difficulty:"advanced",prereqs:[1,9,15]},

  {id:29,title:"Testing — Trust Your Code",subtitle:"Break Things Before Users Do",analogy:"Testing is like a fire drill. You don't wait for a real fire to find out if the exit doors work! You practice (test) regularly so when something goes wrong, you KNOW everything works. Untested code is like a building that's never had a fire drill — scary! 🔥",points:[{t:"Unit Tests",d:"Unit tests verify individual functions or methods in complete isolation from the rest of your application. Mock all dependencies (database, APIs, other services) and test only the logic inside one function. If addTax(100) should return 110, write a test that asserts exactly that. Fast to run and easy to debug."},{t:"Integration Tests",d:"Integration tests verify how multiple parts of your system work together. For example, test that a controller correctly calls a service which correctly queries the database and returns the expected response. These tests catch bugs that unit tests miss — like incorrect wiring between components or wrong query results."},{t:"E2E Tests",d:"End-to-end tests simulate a real user interacting with your application from start to finish. Send actual HTTP requests to your running server and verify the complete response including status codes, headers, and body. In NestJS, use supertest to make requests against your app without a real server running."},{t:"Test Coverage",d:"Test coverage measures what percentage of your code is executed during tests. Tools like Istanbul (built into Jest) generate coverage reports showing which lines, functions, and branches are tested. Aim for 80%+ coverage on critical business logic. 100% coverage is rarely worth the effort — focus on important paths."},{t:"Jest",d:"Jest is the most popular testing framework for JavaScript and TypeScript. It includes a test runner, assertion library (expect), mocking utilities (jest.fn(), jest.mock()), snapshot testing, and code coverage reporting — all in one package. NestJS uses Jest by default and provides testing utilities that integrate seamlessly."},{t:"Mocking",d:"Mocking replaces real dependencies with controlled fakes during testing. Use jest.fn() to create mock functions that track calls, jest.mock() to replace entire modules, and jest.spyOn() to watch method calls. Mocks ensure your tests are fast (no real database), isolated (no network calls), and deterministic (same result every time)."},{t:"Test Organization",d:"Structure tests with describe() blocks for grouping related tests and it() or test() for individual test cases. Use beforeEach() to set up fresh test data and afterEach() to clean up. Follow the Arrange-Act-Assert pattern: set up your data, execute the function, then verify the result. Keep each test focused on one behavior."},{t:"Test-Driven Development (TDD)",d:"TDD flips the workflow: write a failing test first, then write the minimum code to make it pass, then refactor. This Red-Green-Refactor cycle ensures every piece of code has a corresponding test from the start. TDD produces cleaner designs because you think about the interface before the implementation."},{t:"Testing NestJS Services",d:"NestJS provides a Test module that creates a lightweight application context for testing. Use Test.createTestingModule() to set up your service with mocked dependencies injected automatically. This lets you test service methods in isolation while leveraging the same dependency injection system your production code uses."}],whatIs:"Testing means writing code that verifies your other code works correctly. Jest is the most popular testing framework for JavaScript/TypeScript, and NestJS has built-in testing utilities.",realWorld:"Companies like Google require tests for every code change. The saying goes: 'Code without tests is broken by design.' A good test suite lets you refactor fearlessly!",code:`// 1. Unit test — test a function in isolation 🔬
describe('calculateDiscount', () => {
  it('should apply 10% discount for orders over $100', () => {
    expect(calculateDiscount(200)).toBe(180);
  });

  it('should not discount orders under $100', () => {
    expect(calculateDiscount(50)).toBe(50);
  });

  it('should handle zero gracefully', () => {
    expect(calculateDiscount(0)).toBe(0);
  });
});

// 2. NestJS service test — with mocking! 🎭
describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findMany: jest.fn().mockResolvedValue([
                { id: '1', name: 'Alex', email: 'alex@test.com' }
              ]),
            },
          },
        },
      ],
    }).compile();

    service = module.get(UserService);
  });

  it('should return all users', async () => {
    const users = await service.findAll();
    expect(users).toHaveLength(1);
    expect(users[0].name).toBe('Alex');
  });
});

// 3. E2E test — test the whole API 🌐
describe('POST /auth/login', () => {
  it('should return a JWT token', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'alex@test.com', password: 'pass123' })
      .expect(200)
      .expect(res => {
        expect(res.body.access_token).toBeDefined();
      });
  });
});`,funFact:"The Mars Climate Orbiter crashed in 1999 because one team used metric units and another used imperial — a bug that testing would have caught. That $125 million mistake could have been prevented by a $5 test! 🚀💥",quiz:[{q:"What's the difference between unit and E2E tests?",opts:["Unit tests are smaller, E2E tests test the full app flow","Unit tests are for frontend, E2E for backend","They're the same thing","E2E tests are faster"],ans:0},{q:"Which testing framework is NestJS's default and has the largest ecosystem for JavaScript/TypeScript?",opts:["Mocha","Chai","Jest","Vitest"],ans:2},{q:"Why should you write tests?",opts:["To make code longer","To catch bugs early and refactor fearlessly","Only because your boss requires it","Tests don't actually help"],ans:1},{q:"What is the Arrange-Act-Assert pattern in testing?",opts:["A deployment strategy","Set up test data (arrange), execute the function (act), then verify the result (assert)","A CSS layout technique","A database query pattern"],ans:1},{q:"What does jest.mock() do in a test?",opts:["Creates a real database connection","Mocks user input","Replaces an entire module with a controlled fake version so tests run fast and in isolation","Generates random test data"],ans:2}],challenge:"Write a test for a function that converts Celsius to Fahrenheit. Test: 0°C = 32°F, 100°C = 212°F, -40°C = -40°F (yes, they're the same at -40!).",resources:[{type:"docs",title:"Jest Documentation",url:"https://jestjs.io/docs/getting-started",source:"Jest Official"},{type:"docs",title:"NestJS Testing",url:"https://docs.nestjs.com/fundamentals/testing",source:"NestJS Official"},{type:"video",title:"Testing in JavaScript",url:"https://www.youtube.com/watch?v=FgnxcUQ5vho",source:"Fireship"}],eli5:"Testing is like a fire drill at school. You don't wait for a real fire to check if exits work! You practice first. Testing your code is the same - you check everything works before real people use it. Better to find problems during practice!",codeWalkthrough:["1. Unit test — test a function in isolation 🔬","Grouping related tests together","Defining an individual test case","Asserting an expected result","","","Defining an individual test case","Asserting an expected result","","","Defining an individual test case","Asserting an expected result","","","","2. NestJS service test — with mocking! 🎭","Grouping related tests together","Declaring a variable","Declaring a variable","","Setup that runs before each test","Declaring a variable","","","Opening block","","","","","","","Closing block","Closing block","Closing block","","","","","","","Defining an individual test case","Declaring a variable","Asserting an expected result","Asserting an expected result","","","","3. E2E test — test the whole API 🌐","Grouping related tests together","Defining an individual test case","Returning a value","Method chaining on the previous expression","Method chaining on the previous expression","Method chaining on the previous expression","Method chaining on the previous expression","Asserting an expected result","","",""],bugChallenge:{"code":"describe('add', () => {\n  it('should add two numbers', () => {\n    expect(add(2, 3)).toBe(\"5\");\n  });\n});","hint":"Look at the expected value - is it the right type?","answer":"The test expects the string '5' but add(2,3) returns the number 5. toBe uses strict equality (===), so 5 !== '5'. Fix: change toBe('5') to toBe(5)."},difficulty:"intermediate",prereqs:[1,5,9,15]},

  {id:30,title:"Docker — Containers Explained",subtitle:"Ship Your App in a Box",analogy:"Remember when you shared a school project and your friend said 'it doesn't work on my computer'? Docker solves this. It puts your app in a shipping container (image) that works EXACTLY the same on ANY computer. No more 'works on my machine'!",points:[{t:"Containers",d:"A Docker container is a lightweight, isolated environment that packages your application with everything it needs to run: code, runtime, libraries, and system tools. Unlike virtual machines, containers share the host OS kernel so they start in seconds and use minimal resources. Each container is isolated from others."},{t:"Images",d:"A Docker image is the blueprint for creating containers — like a recipe that produces the exact same dish every time. Images are built from a Dockerfile that specifies the base OS, your application code, dependencies, and startup command. Share images via Docker Hub so anyone can run your app identically."},{t:"Docker Compose",d:"Docker Compose lets you define and run multi-container applications with a single YAML file. Your app needs Node.js, MongoDB, and Redis? Define all three services in docker-compose.yml and run docker compose up to start everything together with proper networking. One command replaces complex setup instructions."},{t:"Consistent Environments",d:"Docker ensures development, staging, and production run the exact same containerized environment. If your app works in the Docker container on your laptop, it will work the same way on the production server. This eliminates the entire class of 'works on my machine' bugs caused by environment differences."},{t:"Layering",d:"Docker images are built in layers: each instruction in your Dockerfile creates a new layer. When you rebuild, Docker caches unchanged layers and only rebuilds what changed. Put rarely-changing layers (like npm install) before frequently-changing ones (like copying source code) for dramatically faster builds."},{t:"Image Size Matters",d:"Smaller images download faster and use less disk space. Start with alpine-based images (a tiny 5MB Linux distro instead of 900MB Ubuntu). Use multi-stage builds to compile in one stage and copy only the production artifacts to a minimal final image. Add a .dockerignore file to exclude node_modules and .git."},{t:"Volumes for Persistent Data",d:"Containers are ephemeral — when they stop, their data disappears. Docker volumes persist data outside the container lifecycle. Mount a volume for your MongoDB data directory so database records survive container restarts. Volumes also enable sharing data between containers and backing up important data."},{t:"Networking Between Containers",d:"Docker Compose creates a private network where containers can communicate using service names as hostnames. Your Node.js app connects to MongoDB at mongodb://mongo:27017 where 'mongo' is the service name. Expose only the ports you need to the outside world, keeping internal services like databases safely hidden."}],whatIs:"Docker packages your application and all its dependencies into a standardized container. A container is like a lightweight virtual machine that runs consistently on any system with Docker installed.",realWorld:"Almost every company uses Docker: Google runs billions of containers weekly. Spotify, PayPal, and Uber all use Docker for deployment. It's become a standard part of modern development.",code:`// Dockerfile — the recipe for your app container 📝
FROM node:20-alpine

WORKDIR /app

# Install dependencies first (cached layer!)
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Copy source code
COPY . .

# Build the app
RUN pnpm build

# Expose port for documentation
EXPOSE 3000

# Start the app (always last!)
CMD ["node", "dist/main.js"]

# docker-compose.yml — orchestrate multiple containers 🎼
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongodb
      - redis
    environment:
      - DATABASE_URL=mongodb://mongodb:27017/myapp
      - REDIS_URL=redis://redis:6379

  mongodb:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db  # Data persists!

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  mongo_data:

# One command to start EVERYTHING: 🚀
# docker compose up -d`,funFact:"The Docker logo (a whale carrying containers) is named 'Moby Dock'. And the Docker company was originally called 'dotCloud' — they pivoted entirely to containers because it was so popular! 🐋",quiz:[{q:"What problem does Docker solve?",opts:["Makes code run faster","Ensures your app runs the same on every computer","Replaces the need for a database","Makes websites look better"],ans:1},{q:"What's a Docker image?",opts:["A picture of containers","A blueprint/recipe for creating containers","A container that's currently running","A file stored in S3"],ans:1},{q:"What does docker-compose do?",opts:["Compose music for Docker","Run multiple containers together with one command","Compress Docker images","Compose Docker code in Python"],ans:1},{q:"What is the advantage of using alpine-based Docker images?",opts:["They include more pre-installed software","They are much smaller (~7MB vs ~80MB for the Ubuntu Docker image), leading to faster downloads and less disk usage","They run faster than regular images","They support more programming languages"],ans:1},{q:"What is a multi-stage Docker build used for?",opts:["Running multiple applications in one container","Building images for multiple operating systems","Compiling code in one stage and copying only production artifacts to a minimal final image, reducing image size","Testing in one stage and deploying in another"],ans:2}],challenge:"Install Docker Desktop, then run: `docker run -d -p 27017:27017 mongo:7` — congratulations, you have a MongoDB database running in 10 seconds! Try connecting to it with MongoDB Compass.",resources:[{type:"docs",title:"Docker Get Started",url:"https://docs.docker.com/get-started/",source:"Docker Official"},{type:"video",title:"Docker in 100 Seconds",url:"https://www.youtube.com/watch?v=Gjnup-PuquQ",source:"Fireship"},{type:"article",title:"Docker Curriculum",url:"https://docker-curriculum.com/",source:"Docker Curriculum"}],eli5:"Docker is like a lunchbox for your app. At home, your sandwich is great. But bring it to school without a lunchbox, it gets squished! Docker puts your app in a special container so it works perfectly everywhere - your computer, friend's computer, or a big server.",codeWalkthrough:["Dockerfile — the recipe for your app container 📝","Dockerfile instruction","","Dockerfile instruction","","Install dependencies first (cached layer!)","Dockerfile instruction","Dockerfile instruction","","Copy source code","Dockerfile instruction","","Build the app","Dockerfile instruction","","Start the app","Dockerfile instruction","","Dockerfile instruction","","docker-compose.yml — orchestrate multiple containers 🎼","","Docker Compose section definition","","","","","","","","","","","","","","","","Docker Compose section definition","","","","","","","","Docker Compose section definition","","","One command to start EVERYTHING: 🚀","docker compose up -d"],bugChallenge:{"code":"FROM node:20-alpine\nWORKDIR /app\nCOPY . .\nRUN npm install\nRUN npm run build\nCMD [\"node\", \"dist/main.js\"]","hint":"Think about Docker layer caching when files change...","answer":"Copying all files before npm install means any code change invalidates the install cache. Fix: COPY package*.json first, run npm install, THEN copy source code."},difficulty:"intermediate",prereqs:[1,15]},

  {id:31,title:"Git & Version Control",subtitle:"A Time Machine for Your Code",analogy:"Imagine writing a novel without Ctrl+Z. Every change is permanent — delete a chapter and it's gone forever. Git is like having an infinite undo history for your entire project. You can save snapshots (commits), create alternate storylines (branches), and even combine different versions (merge). If chapter 5 was better yesterday, just go back in time!",points:[{t:"git init & git clone",d:"git init creates a new repository. git clone URL downloads an existing one. Every project starts with one of these. Your .git folder stores all the history."},{t:"git add & git commit",d:"git add stages files (selects what to save). git commit -m 'message' saves a snapshot. Think: add = put items in a box, commit = seal and label the box."},{t:"git push & git pull",d:"git push uploads your commits to GitHub. git pull downloads others' commits. Push your work, pull your teammates' work. Stay in sync!"},{t:"Branching",d:"git branch feature-login creates a parallel timeline. Work on features without affecting main. When done, merge back. Main stays clean, experiments stay safe."},{t:"Pull Requests (PRs)",d:"The team workflow: create a branch, make changes, push, open a PR on GitHub. Teammates review your code, suggest changes, then approve. Merge when ready!"},{t:".gitignore",d:"List files Git should ignore: node_modules/, .env, dist/, *.log. These files shouldn't be in your repository — they're generated, temporary, or secret."},{t:"Commit Message Best Practices",d:"Good: 'Add user authentication with JWT guards'. Bad: 'fixed stuff'. Use present tense, be specific, explain WHY not just WHAT. Your future self will thank you."},{t:"Git Stash",d:"Working on something but need to switch branches? git stash saves your changes temporarily. git stash pop brings them back. Like a clipboard for uncommitted work."}],whatIs:"Git is a distributed version control system that tracks changes to your code over time. It lets you save snapshots (commits), work on parallel versions (branches), collaborate with teams (push/pull), and review changes (pull requests). GitHub is the most popular platform for hosting Git repositories.",realWorld:"Every software company uses Git. Open source projects like React, NestJS, and Linux are built by thousands of developers collaborating through Git. Your GitHub profile is effectively your developer resume — employers look at your commits, contributions, and code quality.",code:`# Initialize a new project
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/you/your-repo.git
git push -u origin main

# Daily workflow
git status                    # What changed?
git add src/user.service.ts   # Stage specific file
git commit -m "Add user creation endpoint"
git push                      # Upload to GitHub

# Branching workflow
git branch feature-auth       # Create branch
git checkout feature-auth     # Switch to it
# ... make changes ...
git add .
git commit -m "Add JWT authentication"
git push -u origin feature-auth  # Push branch
# -> Open Pull Request on GitHub
# -> Team reviews and approves
# -> Merge into main

# Useful commands
git log --oneline             # See commit history
git diff                      # See uncommitted changes
git stash                     # Temporarily save changes
git stash pop                 # Restore stashed changes
git checkout -- file.ts       # Discard changes to a file
git reset HEAD~1              # Undo last commit (keep changes)

# .gitignore
node_modules/
dist/
.env
.env.local
*.log
.DS_Store
coverage/`,funFact:"Linus Torvalds (creator of Linux) built Git in just 10 days in 2005 because he was frustrated with existing version control tools. He named it 'git' — British slang for an annoying person — saying 'I name all my projects after myself.'",quiz:[{q:"What does 'git add' do?",opts:["Uploads files to GitHub","Stages files to be included in the next commit","Creates a new branch","Deletes files from the repository"],ans:1},{q:"What is the purpose of branching in Git?",opts:["To make the repository larger","To work on features in parallel without affecting the main code","To speed up Git operations","To create backup copies of files"],ans:1},{q:"What should you put in a .gitignore file?",opts:["Your most important source code files","Files that should not be tracked: node_modules, .env, build outputs","Only JavaScript files","Files larger than 1MB"],ans:1},{q:"What does 'git stash' do?",opts:["Temporarily saves uncommitted changes so you can switch branches and restore them later with git stash pop","Permanently deletes uncommitted changes","Pushes changes to the remote repository","Creates a new branch automatically"],ans:0},{q:"Why are good commit messages important?",opts:["They make the repo larger","They are shown to users","They have no real purpose","They help your future self and teammates understand WHY changes were made when reviewing history"],ans:3}],challenge:"Initialize a new Git repo, create a .gitignore (ignore node_modules and .env), make your first commit. Then create a 'feature-hello' branch, add a hello.ts file, commit it, and merge back into main. Check git log to see the history!",resources:[{type:"docs",title:"Git Official Documentation",url:"https://git-scm.com/doc",source:"Git Official"},{type:"article",title:"Atlassian Git Tutorial",url:"https://www.atlassian.com/git/tutorials",source:"Atlassian"},{type:"video",title:"Git Explained in 100 Seconds",url:"https://www.youtube.com/watch?v=hwP7WQkmECE",source:"Fireship"}],eli5:"Git is like a time machine for your homework. Every time you finish a page, you take a photo (commit). If you mess up page 3, go back to page 2's photo! You can also make a copy to try something wild (branch), and if it works, put it back (merge).",codeWalkthrough:["Initialize a new project","Git command","Git command","Git command","","Connect to GitHub","Git command","Git command","","Daily workflow","Git command","Git command","Git command","Git command","","Branching workflow","Git command","Git command","... make changes ...","Git command","Git command","Git command","-> Open Pull Request on GitHub","-> Team reviews and approves","-> Merge into main","","Useful commands","Git command","Git command","Git command","Git command","Git command","Git command","",".gitignore","","","Method chaining on the previous expression","Method chaining on the previous expression",".log","Method chaining on the previous expression",""],bugChallenge:{"code":"git add .\ngit commit -m \"initial commit\"\ngit push origin main","hint":"What files might be included when you use 'git add .'?","answer":"Without a .gitignore, 'git add .' commits EVERYTHING including .env secrets and node_modules. Fix: create .gitignore with node_modules/, .env, dist/ BEFORE git add."},difficulty:"beginner",prereqs:[]},

  {id:32,title:"Deployment & DevOps",subtitle:"From Code to Production",analogy:"Writing code is like building a rocket in your garage. Deployment is launching it into orbit — you need a launchpad (server), enough fuel for the journey (scaling), a pre-flight checklist that never changes (CI/CD), and mission control watching every sensor (monitoring)!",points:[{t:"CI/CD Pipeline",d:"Continuous Integration and Continuous Deployment automates your entire workflow: push code to Git, automated tests run, linting checks pass, and if everything succeeds, the app deploys automatically to production. No manual steps, no human error. GitHub Actions, GitLab CI, and CircleCI are popular CI/CD platforms."},{t:"Environment Variables",d:"Each deployment environment (development, staging, production) needs different configuration: database URLs, API keys, feature flags, and log levels. Store these as environment variables, never hardcode them. Your CI/CD platform injects the right values for each environment automatically during deployment."},{t:"Container Orchestration",d:"Docker Compose manages multi-container apps on a single server. For larger scale, Kubernetes orchestrates containers across many servers: auto-scaling when traffic spikes, restarting crashed containers, rolling out updates with zero downtime. Start with Docker Compose and graduate to Kubernetes when your app demands it."},{t:"Monitoring & Logging",d:"Production apps need observability: structured logging with tools like Winston or Pino, error tracking with Sentry, performance monitoring with Datadog or New Relic, and uptime monitoring with Pingdom. If something breaks at 3 AM, automated alerts notify your team immediately via Slack, email, or PagerDuty."},{t:"Scaling",d:"When traffic grows beyond what one server can handle, scale horizontally by adding more instances behind a load balancer. The load balancer distributes incoming requests across all instances evenly. Make your app stateless (store sessions in Redis, files in S3) so any instance can handle any request interchangeably."},{t:"SSL/HTTPS — Secure Your App",d:"Production apps MUST use HTTPS to encrypt data in transit. Use Let's Encrypt for free SSL certificates, or your cloud provider's certificate manager. Never transmit passwords or tokens over plain HTTP — it's like sending postcards instead of sealed letters."},{t:"Secrets Management",d:"Never hardcode API keys or passwords in your code. Use environment variables (.env files locally, secret managers in production). Tools like AWS Secrets Manager, HashiCorp Vault, or even GitHub Secrets keep your sensitive data safe and separate from code."},{t:"Blue-Green & Canary Deployments",d:"Blue-green deployment runs two identical environments: blue (current) and green (new version). Switch traffic to green once verified. Canary deployment routes a small percentage of traffic (like 5%) to the new version first, then gradually increases. Both strategies minimize risk and enable instant rollback if issues arise."},{t:"Infrastructure as Code",d:"Define your servers, databases, and networking in code files (Terraform, Pulumi, or AWS CDK) instead of clicking through cloud consoles. Version control your infrastructure alongside your application code. Recreate entire environments from scratch with a single command — reproducible, auditable, and disaster-proof."}],whatIs:"Deployment is the process of getting your code from your laptop to a server where users can access it. DevOps practices (CI/CD, containers, monitoring) make this reliable, repeatable, and automated.",realWorld:"Netflix deploys thousands of times per day. Amazon deploys every 11.7 seconds. Modern CI/CD pipelines make this possible — push code, let the robots handle the rest.",code:`# 1. GitHub Actions CI/CD 🤖
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: pnpm install
      - run: pnpm test
      - run: pnpm build

  deploy:
    needs: test  # Only deploy if tests pass!
    runs-on: ubuntu-latest
    steps:
      - run: docker build -t myapp .
      - run: docker push myregistry/myapp
      - run: ssh server "docker pull && docker compose up -d"

# 2. Environment variables — never hardcode secrets! 🔐
# .env (NEVER commit this file!)
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=super-secret-key-change-in-production
REDIS_URL=redis://localhost:6379

// In NestJS — read env vars safely:
@Injectable()
export class AppConfigService {
  get databaseUrl(): string {
    return process.env.DATABASE_URL;
  }
}

// 3. Health check endpoint — monitoring calls this 🏥
@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
    };
  }
}`,funFact:"Amazon's deployment system handles over 150 million deployments per year. That's about 285 deployments per MINUTE! And you thought pushing to main was stressful... 😅",quiz:[{q:"What does CI/CD stand for?",opts:["Code Integration / Code Deployment","Continuous Integration / Continuous Deployment","Computer Interface / Computer Design","Cache Invalidation / Cache Distribution"],ans:1},{q:"Should you hardcode API keys in your source code?",opts:["Yes, it's fine","No, use environment variables instead","Only for development","Only if you use encryption"],ans:1},{q:"What's a health check endpoint?",opts:["A fitness tracker endpoint","An endpoint that reports if your app is running and healthy","A security check for login","An endpoint that checks database health only"],ans:1},{q:"What does a load balancer do when scaling an application horizontally?",opts:["Distributes incoming requests across multiple server instances evenly so no single server is overwhelmed","Balances the database load","Compresses response data","Monitors server health only"],ans:0},{q:"What is canary deployment?",opts:["Deploying code only to yellow-themed servers","Testing code with bird-themed names","Deploying to production only on weekends","Routing a small percentage of traffic to the new version first, then gradually increasing if no issues are detected"],ans:3}],challenge:"Set up a GitHub Actions workflow that runs your tests on every push. Start simple: checkout code, install deps, run tests. Watch the green checkmark appear!",resources:[{type:"docs",title:"Vercel Documentation",url:"https://vercel.com/docs",source:"Vercel Official"},{type:"docs",title:"GitHub Actions Documentation",url:"https://docs.github.com/en/actions",source:"GitHub Official"},{type:"video",title:"CI/CD in 100 Seconds",url:"https://www.youtube.com/watch?v=scEDHsr3APg",source:"Fireship"}],eli5:"Writing code is like building a paper airplane at your desk. Deployment is launching a real airplane! You need an airport (server), extra planes if lots of people want to fly (scaling), a checklist the pilot follows every single time (CI/CD), and a control tower watching the sky (monitoring). Going from 'I made a paper plane' to 'I fly passengers across the world!'",codeWalkthrough:["1. GitHub Actions CI/CD 🤖",".github/workflows/deploy.yml","","","","","","","","","","","","","","","","","","","","","","","","","2. Environment variables — never hardcode secrets! 🔐",".env (NEVER commit this file!)","","","","","In NestJS:","Decorator that adds metadata or behavior","Exporting for use in other files","","Returning a value","Closing block","Closing block","","3. Health check endpoint 🏥","Decorator that adds metadata or behavior","Exporting for use in other files","Decorator that adds metadata or behavior","","Returning a value","","","","","Closing block","Closing block","Closing block"],bugChallenge:{"code":"const app = await NestFactory.create(AppModule);\napp.listen(3000);\nconsole.log(\"Running on port 3000\");","hint":"Should the port be hardcoded? And is app.listen being awaited?","answer":"Two issues: 1) Port is hardcoded instead of using process.env.PORT || 3000. 2) app.listen() should be awaited. Fix: await app.listen(process.env.PORT || 3000);"},difficulty:"advanced",prereqs:[1,15,20,30]},

  {id:33,title:"What is a Monorepo?",subtitle:"One Repo to Rule Them All",analogy:"Imagine you have 3 pets: a cat, a dog, and a parrot. You COULD keep each in a separate house (3 repos). OR you could keep them all in ONE big house with separate rooms (monorepo). They share the same kitchen (shared code), same electricity (build tools), but each has their own space!",points:[{t:"One Repository",d:"A monorepo keeps your frontend app, backend API, shared libraries, and configuration all in a single Git repository. This means one place to clone, one set of pull requests, and one CI/CD pipeline. Changes that span multiple packages (like updating a shared API type) become a single atomic commit."},{t:"Shared Code",d:"Create a shared packages directory with common TypeScript types, utility functions, validation schemas, and configuration files. Both your React frontend and NestJS backend import from the same shared package. Change a type definition once and both sides update immediately — no copy-pasting or version drift between projects."},{t:"Turborepo / Nx",d:"Monorepo build tools like Turborepo and Nx understand your project dependency graph and only rebuild what actually changed. They cache build outputs, run independent tasks in parallel, and skip already-completed work. A change to only the frontend skips rebuilding the backend entirely, saving significant CI time."},{t:"pnpm Workspaces",d:"pnpm workspaces connect your project folders (apps/frontend, apps/backend, packages/shared) so they can import code from each other directly using the package name. No need to publish packages to npm — pnpm symlinks them locally. It also deduplicates shared dependencies to save disk space."},{t:"Smart Builds",d:"Instead of rebuilding everything from scratch, monorepo tools use content hashing to detect exactly what changed. If you only modified a CSS file in the frontend, the backend build is skipped entirely. For a monorepo with 50 packages, smart caching can reduce CI build times from 30 minutes to under 2 minutes."},{t:"Shared Dependencies",d:"In a monorepo, npm packages are installed once at the root level and shared by all projects. This means every package uses the exact same version of React, TypeScript, or any other dependency — eliminating version conflicts. Updating a dependency is a single change instead of updating it separately across multiple repositories."},{t:"Easy Refactoring",d:"Need to rename a shared interface or restructure a utility module? In a monorepo, your IDE can refactor across all packages at once and you immediately see any code that breaks. In separate repos, you would need to update and publish the shared package, then update each consumer individually — much slower and error-prone."},{t:"Consistent Tooling & Standards",d:"A monorepo lets you share ESLint configs, Prettier settings, TypeScript configs, and CI/CD workflows across all packages from a single root. Every project follows the same coding standards automatically. New packages inherit the team's quality standards by default instead of requiring manual setup each time."}],whatIs:"A monorepo is a single Git repository that contains multiple projects (frontend, backend, shared libraries). Tools like Turborepo and pnpm workspaces make it efficient by sharing dependencies and running tasks in parallel.",realWorld:"Companies like Google, Meta, and Microsoft use monorepos. Your NestJS backend and React frontend can share TypeScript types — change a type once, both sides update instantly!",code:`// Typical monorepo structure:
my-project/
├── apps/
│   ├── frontend/     ← React app (Vite + TypeScript)
│   └── backend/      ← NestJS app
├── packages/
│   └── shared/       ← Shared types, utils
├── package.json      ← Root config
├── pnpm-workspace.yaml
└── turbo.json        ← Turborepo config

// pnpm-workspace.yaml
packages:
  - "apps/*"
  - "packages/*"

// In frontend, you can import shared types:
import { UserDTO } from '@myproject/shared';

// turbo.json — configure what to cache
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "test": {
      "dependsOn": ["build"]
    }
  }
}`,funFact:"Google's monorepo has over 2 BILLION lines of code and 86 terabytes of data. One repo. Seriously. 🤯",quiz:[{q:"What's the main benefit of a monorepo?",opts:["Looks cooler on GitHub","Share code between frontend and backend easily","Makes Git slower","You only need one developer"],ans:1},{q:"What tool makes monorepos fast by only rebuilding what changed?",opts:["Webpack","Turborepo","MongoDB","React"],ans:1},{q:"In a monorepo, where do shared types typically live?",opts:["In node_modules","In a packages/shared directory","In the browser","In the database"],ans:1},{q:"How do monorepo build tools like Turborepo speed up CI pipelines?",opts:["By caching build outputs and only rebuilding packages that actually changed based on content hashing","By removing TypeScript types during build","By skipping all tests","By using a faster programming language internally"],ans:0},{q:"What advantage does a monorepo provide for refactoring shared code?",opts:["It prevents any refactoring","Refactoring is slower in a monorepo","It makes refactoring impossible across packages","Your IDE can refactor across all packages at once and you immediately see any code that breaks"],ans:3}],challenge:"Create a folder structure with apps/frontend, apps/backend, and packages/shared. Add a shared types.ts file and try importing it from both apps!",resources:[{type:"docs",title:"Nx Documentation",url:"https://nx.dev/docs/getting-started/intro",source:"Nx Official"},{type:"docs",title:"Turborepo Documentation",url:"https://turborepo.dev/docs",source:"Turborepo Official"},{type:"video",title:"Monorepos Explained",url:"https://www.youtube.com/watch?v=9iU_IE6vnJ8",source:"Fireship"}],eli5:"You have a toy car, airplane, and shared batteries. You could keep each in separate boxes (separate repos), but then you need batteries in EVERY box! A monorepo is one big toybox with sections - all toys share the same batteries. New batteries? All toys benefit!",codeWalkthrough:["Typical monorepo structure:","","","","","","","","","","","pnpm-workspace.yaml","","","","","In frontend, you can import shared types:","Importing required dependencies","","turbo.json — configure what to cache","Opening block","","","","","Closing block","","","Closing block","Closing block","Closing block"],bugChallenge:{"code":"// packages/shared/types.ts\nexport interface User { name: string; }\n\n// apps/frontend/app.tsx\nimport { User } from '../../packages/shared/types';","hint":"Is using deep relative paths the right approach in a monorepo?","answer":"Deep relative paths (../../packages) are fragile and break when files move. Fix: use workspace package names: import { User } from '@myproject/shared' with proper package.json config."},difficulty:"intermediate",prereqs:[1,6]},

  {id:34,title:"React vs React Native",subtitle:"Web vs Mobile — Same Brain, Different Body",analogy:"React is like a musician who performs in a concert hall (web browser). React Native is the SAME musician performing at an outdoor festival (mobile phone). Same songs (JavaScript/React), same talent — but different stage equipment (HTML elements vs native phone components)!",points:[{t:"Same Language",d:"Both use JavaScript/TypeScript and React concepts (components, hooks, state). If you know React, learning React Native is just learning new component names!"},{t:"Different Output",d:"React renders HTML elements (div, span, p). React Native renders native mobile components (View, Text, TouchableOpacity). Web = browser. Mobile = iOS/Android."},{t:"Code Sharing",d:"Business logic, API calls, state management — all can be shared between web (React) and mobile (React Native)! Only UI differs."},{t:"Expo for Easy Setup",d:"Expo is to React Native what create-react-app is to React. Instant setup, hot reload, testing on your phone instantly. No Android Studio!"},{t:"Styling Differences",d:"React uses CSS. React Native uses StyleSheet (like inline styles). No CSS here — just JavaScript objects. Learn once, apply everywhere!"},{t:"Navigation Different",d:"React Router for web. React Navigation for mobile. Different APIs but same concepts (stacks, tabs, drawers)."},{t:"Performance Considerations",d:"React Native apps can be slower than native (written in Swift/Kotlin) but much faster to develop. Trade-off between speed and time-to-market!"},{t:"Third-Party Libraries",d:"Some npm packages work on web only. Check compatibility! React Navigation, Expo libraries work cross-platform. Native modules need bridges!"}],whatIs:"React Native lets you build native mobile apps (iOS + Android) using React and JavaScript. Unlike hybrid apps (like Cordova), React Native renders REAL native UI components — so your app feels native because it IS native.",realWorld:"Facebook, Instagram, Discord, Shopify, and Pinterest all use React Native. Many teams share 60-80% of code between web (React) and mobile (React Native).",code:`// React (Web) 🌐
function Welcome() {
  return (
    <div className="container">
      <h1>Hello Web!</h1>
      <p>Click the button</p>
      <button onClick={handleClick}>
        Press Me
      </button>
    </div>
  );
}

// React Native (Mobile) 📱
// Same logic, different building blocks!
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Mobile!</Text>
      <Text>Tap the button</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

// The translation table 📋
// Web              →  Mobile
// div              →  View
// p, span, h1      →  Text
// button           →  TouchableOpacity
// img              →  Image
// input            →  TextInput
// onClick          →  onPress
// className        →  style prop
// CSS              →  StyleSheet

// Shared code between React & React Native ✨
// In services/api.ts
export async function getUsers(): Promise<User[]> {
  const response = await fetch('/api/users');
  return response.json();
}

// In Web component
import { getUsers } from '../services/api';
function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      {users.map(u => <div key={u.id}>{u.name}</div>)}
    </div>
  );
}

// In Mobile component — SAME logic!
import { getUsers } from '../services/api';
function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <View>
      {users.map(u => <Text key={u.id}>{u.name}</Text>)}
    </View>
  );
}`,funFact:"Shopify rewrote their entire mobile app in React Native and now 80% of code is shared between iOS and Android. That's like getting 2 apps for the price of 1.2! 💰",quiz:[{q:"What does React Native render?",opts:["HTML elements in a WebView","Real native mobile components","PDF pages","Nothing — it's a server framework"],ans:1},{q:"What's a major advantage of React Native?",opts:["It's the only way to build mobile apps","You can share code between web and mobile apps","It's faster than native development","It requires less programming knowledge"],ans:1},{q:"Which company CREATED React Native?",opts:["Google","Microsoft","Meta (Facebook)","Amazon"],ans:2},{q:"In React Native, what replaces the HTML onClick event handler?",opts:["onPress, which is used on TouchableOpacity and Pressable components instead","onTap","onTouch","onClick still works the same way"],ans:0},{q:"What percentage of code can typically be shared between React and React Native apps?",opts:["0% — they are completely different","Only CSS styles can be shared","Only the app name is shared","60-80% — business logic, API calls, and state management can be shared; only UI components differ"],ans:3}],challenge:"Compare a React button and React Native TouchableOpacity. Write the same component for both platforms!",resources:[{type:"docs",title:"React Native Documentation",url:"https://reactnative.dev/docs/getting-started",source:"React Native Official"},{type:"docs",title:"Expo Documentation",url:"https://docs.expo.dev/",source:"Expo Official"},{type:"video",title:"React Native in 100 Seconds",url:"https://www.youtube.com/watch?v=gvkqT_Uoahw",source:"Fireship"}],eli5:"React is a musician who plays in a concert hall (websites). React Native is the SAME musician who plays at an outdoor festival (phones). Same songs (JavaScript), same talent, but different stage equipment! The concert hall has big speakers (browsers), the festival has portable amps (phone components).",codeWalkthrough:["React (Web) 🌐","Declaring a function","Returning a value","","","","","","","","Closing expression","Closing block","","React Native (Mobile) 📱","Same logic, different building blocks!","Importing required dependencies","","Declaring a function","Returning a value","","","","","","","","Closing expression","Closing block","","Declaring a variable","","","","","Closing block","","","","Closing block","","","The translation table 📋","Web              →  Mobile","div              →  View","p, span, h1      →  Text","button           →  TouchableOpacity","img              →  Image","input            →  TextInput","onClick          →  onPress","className        →  style prop","CSS              →  StyleSheet","","Shared code between React & React Native ✨","In services/api.ts","Exporting for use in other files","Declaring a variable","Returning a value","Closing block","","In Web component","Importing required dependencies","Declaring a function","Declaring a variable","","","","","","Returning a value","","","","Closing expression","Closing block","","In Mobile component — SAME logic!","Importing required dependencies","Declaring a function","Declaring a variable","","","","","","Returning a value","","","","Closing expression","Closing block"],bugChallenge:{"code":"// React Native\nfunction Welcome() {\n  return (\n    <div className=\"container\">\n      <h1>Hello Mobile!</h1>\n    </div>\n  );\n}","hint":"Can you use HTML elements in React Native?","answer":"React Native doesn't use HTML elements. Fix: replace <div> with <View>, <h1> with <Text>, and className with style prop. Import View and Text from 'react-native'."},difficulty:"intermediate",prereqs:[1,6,9,11]},

  {id:35,title:"Putting It All Together",subtitle:"The Full Picture",analogy:"You've learned each instrument individually. Now it's time to play in the orchestra! Each technology is one musician — alone they sound good, but TOGETHER they create a symphony. Your fullstack app is that symphony! 🎵",points:[{t:"Frontend to Backend",d:"React makes API calls using Axios or React Query, which hit NestJS controllers. Controllers delegate to services for business logic. Services use Prisma to query MongoDB. The response flows back through the same chain. This clean separation means each layer can be tested, modified, and scaled independently."},{t:"Real-Time Layer",d:"Socket.IO establishes persistent WebSocket connections between React and NestJS gateways. When data changes on the server (new message, order update), the gateway pushes updates to connected clients instantly — no polling or page refreshing needed. Combine with Redis Pub/Sub for multi-server real-time support."},{t:"Background Work",d:"Bull queues offload slow tasks like sending emails, processing images, generating PDFs, and sending push notifications. Redis stores the queue state. Your API responds instantly with 'job accepted' while background workers process tasks asynchronously. Failed jobs retry automatically without losing data."},{t:"Infrastructure",d:"Docker containers package each service (Node app, MongoDB, Redis) with its dependencies. Docker Compose orchestrates them locally. CI/CD pipelines (GitHub Actions) run tests and deploy automatically on every push. ESLint and Prettier enforce code quality through pre-commit hooks. Everything is automated."},{t:"Security and Performance",d:"JWT authentication protects API routes, HTTPS encrypts data in transit, and CORS controls which domains can call your API. Redis caching reduces database load for frequently accessed data. Database indexes speed up queries. CloudFront CDN serves static files and images from edge servers closest to users."},{t:"Error Handling Strategy",d:"Implement a global NestJS exception filter that catches all errors and returns consistent JSON responses with status codes, messages, and error details. On the frontend, React error boundaries catch rendering errors gracefully. Structured logging with correlation IDs lets you trace any request through every layer of the stack."},{t:"Data Flow Architecture",d:"Understand how data flows through your entire system: user action in React triggers an API call, which passes through guards (auth), pipes (validation), controllers, services, and finally the database. On the way back, interceptors can transform the response. Knowing this flow helps you debug issues at any layer."},{t:"Monitoring and Observability",d:"Production applications need three pillars of observability: logs (structured JSON logs with Winston or Pino), metrics (response times, error rates, CPU usage), and traces (follow a request through every service). Tools like Sentry for error tracking and Datadog for dashboards give you visibility into your running system."}],whatIs:"A fullstack NestJS + React application combines everything you've learned: React frontend, NestJS backend, MongoDB database, Redis cache, Bull queues, JWT auth, Docker containers, and CI/CD pipelines — all working together as one system.",realWorld:"This is the exact architecture used by thousands of production applications. Companies like Adidas, Roche, and countless startups run this stack in production serving millions of users.",code:`// The Complete Request Flow 🌊
//
// 1. User clicks "Sign Up" in React
//    └→ React Hook Form validates with Zod
//    └→ Axios sends POST /auth/signup
//
// 2. NestJS receives the request
//    └→ ValidationPipe checks the DTO
//    └→ AuthController.signup() runs
//    └→ AuthService.register() is called
//
// 3. Business logic executes
//    └→ Prisma creates user in MongoDB
//    └→ JWT token is generated
//    └→ Bull queue: add "send welcome email" job
//    └→ Bull queue: add "send push notification" job
//
// 4. Response sent to React
//    └→ { user, access_token }
//    └→ React stores token in memory
//    └→ React Query caches user data
//    └→ React Router redirects to /dashboard
//
// 5. Background (user doesn't wait!)
//    └→ Bull worker sends welcome email via SES
//    └→ Bull worker sends push notification via FCM
//    └→ Redis caches the new user data
//
// 6. Dashboard loads
//    └→ React Query fetches /api/dashboard
//    └→ NestJS checks JWT (Guard)
//    └→ Redis cache checked first (fast!)
//    └→ If miss → MongoDB query → cache result
//    └→ Dashboard renders with real-time data
//
// The whole flow: ~200ms for the user
// Background tasks: ~5-10 seconds (user doesn't notice!) 🚀

// Your tech stack summary:
// Frontend:  React + Vite + TypeScript + Tailwind + React Query
// Backend:   NestJS + Prisma + MongoDB
// Cache:     Redis
// Queue:     Bull (powered by Redis)
// Auth:      JWT + Passport
// Files:     AWS S3
// Email:     AWS SES / Mailgun
// Push:      Firebase Cloud Messaging
// Realtime:  Socket.IO
// Container: Docker + Docker Compose
// CI/CD:     GitHub Actions
// Quality:   ESLint + Prettier + Husky`,funFact:"If you've made it this far, you've learned about 25+ technologies that professional fullstack developers use daily. That's more tech than most bootcamps cover in 12 weeks! 🏆",quiz:[{q:"In the full request flow, what happens AFTER the user gets their response?",opts:["Nothing — the server stops","Background workers handle slow tasks like emails and notifications","The server shuts down","The database deletes the data"],ans:1},{q:"Which of these is the frontend of our stack?",opts:["NestJS","MongoDB","React + Vite + Tailwind","Docker"],ans:2},{q:"What's responsible for sending emails in the background?",opts:["React","MongoDB","Bull queues powered by Redis","NestJS directly"],ans:2},{q:"In the fullstack request flow, what role does Redis play between the API and database?",opts:["It serves as a fast cache layer — checked before the database, storing frequently-accessed data for near-instant retrieval","It replaces the database entirely","It only stores user sessions","It handles file uploads"],ans:0},{q:"Why should background tasks like emails and notifications be processed through a job queue?",opts:["Job queues are required by NestJS","Queues make emails more secure","Queues cost less money","So the user gets an instant API response while slow tasks run asynchronously without blocking the request"],ans:3}],challenge:"Draw the entire architecture on paper (or a whiteboard): React → NestJS → MongoDB, with Redis, Bull, S3, and FCM connected. Label each arrow with what data flows through it!",resources:[{type:"docs",title:"NestJS Full Example",url:"https://github.com/nestjs/nest/tree/master/sample",source:"NestJS GitHub"},{type:"docs",title:"NestJS Configuration",url:"https://docs.nestjs.com/techniques/configuration",source:"NestJS Official"},{type:"article",title:"NestJS Official Documentation",url:"https://docs.nestjs.com/",source:"NestJS Official"}],eli5:"You have learned to play piano, guitar, drums, and singing separately. Now it is time to play in a band! Each instrument sounds nice alone, but together they make beautiful music. A fullstack app is all your technologies playing in harmony!",codeWalkthrough:["The Complete Request Flow 🌊","","1. User clicks \"Sign Up\" in React","└→ React Hook Form validates with Zod","└→ Axios sends POST /auth/signup","","2. NestJS receives the request","└→ ValidationPipe checks the DTO","└→ AuthController.signup() runs","└→ AuthService.register() is called","","3. Business logic executes","└→ Prisma creates user in MongoDB","└→ JWT token is generated","└→ Bull queue: add \"send welcome email\" job","└→ Bull queue: add \"send push notification\" job","","4. Response sent to React","└→ { user, access_token }","└→ React stores token in memory","└→ React Query caches user data","└→ React Router redirects to /dashboard","","5. Background (user doesn't wait!)","└→ Bull worker sends welcome email via SES","└→ Bull worker sends push notification via FCM","└→ Redis caches the new user data","","6. Dashboard loads","└→ React Query fetches /api/dashboard","└→ NestJS checks JWT (Guard)","└→ Redis cache checked first (fast!)","└→ If miss → MongoDB query → cache result","└→ Dashboard renders with real-time data","","The whole flow: ~200ms for the user","Background tasks: ~5-10 seconds (user doesn't notice!) 🚀","","Your tech stack summary:","Frontend:  React + Vite + TypeScript + Tailwind + React Query","Backend:   NestJS + Prisma + MongoDB","Cache:     Redis","Queue:     Bull (powered by Redis)","Auth:      JWT + Passport","Files:     AWS S3","Email:     AWS SES / Mailgun","Push:      Firebase Cloud Messaging","Realtime:  Socket.IO","Container: Docker + Docker Compose","CI/CD:     GitHub Actions","Quality:   ESLint + Prettier + Husky"],bugChallenge:{"code":"const app = await NestFactory.create(AppModule);\nawait app.listen(4000);\n\n// React on localhost:3000\nfetch('http://localhost:4000/api/users')","hint":"What happens when React on one port calls NestJS on another?","answer":"Browser blocks the request due to CORS - frontend (port 3000) and backend (port 4000) are different origins. Fix: add app.enableCors({ origin: 'http://localhost:3000' }) before app.listen()."},difficulty:"advanced",prereqs:[1,11,12,15,18,19]},

  {id:36,title:"Your Learning Path Forward",subtitle:"What to Build Next",analogy:"You've finished the tutorial — but this is the beginning, not the end! It's like getting your driver's license. You know HOW to drive, but you get GOOD at driving by actually driving. Build projects, break things, fix them. That's how you level up! 🚗💨",points:[{t:"Build a Todo App",d:"Start with the classic CRUD project: React frontend with a NestJS backend storing tasks in MongoDB via Prisma. Add user authentication with JWT, then real-time updates with Socket.IO so multiple users see changes instantly. A todo app touches every fundamental concept in a manageable scope."},{t:"Build a Chat App",d:"A chat application exercises real-time features deeply: WebSocket connections for instant messaging, message history stored in MongoDB, typing indicators broadcast to the room, online status tracking with Redis, and push notifications for new messages. This project makes WebSockets and Redis click."},{t:"Build a Blog Platform",d:"A blog platform covers nearly every technology: rich text editing in React, image uploads to AWS S3, Prisma for managing posts and comments, user authentication and authorization (only authors can edit their posts), email notifications for new comments, and SEO optimization for public pages."},{t:"Contribute to Open Source",d:"Find NestJS or React repositories on GitHub and start contributing. Begin with documentation fixes and small bug fixes to learn the workflow. Read other developers' code to see how experienced teams structure their projects. Contributing to open source builds your skills, your portfolio, and your professional network."},{t:"Build Your SaaS Idea",d:"Take that app idea you have been thinking about and start building it for real. Apply everything from this tutorial: authentication, database design, background jobs, file uploads, email notifications. Start with a minimum viable product (MVP), get real users to try it, collect feedback, and iterate. Ship it!"},{t:"Reading Production Code",d:"Clone open-source NestJS projects on GitHub and read every file systematically. Ask yourself: why did they organize modules this way? How do they handle errors? What patterns do they use for testing? Reading production code teaches you patterns and practices that tutorials cannot cover. The more code you read, the better you write."},{t:"Build a Portfolio Website",d:"Create a personal portfolio that showcases your projects using the technologies you learned. Deploy it with a custom domain, add a contact form with email notifications, and include live demos of your projects. A well-built portfolio demonstrates your skills better than any resume and attracts job opportunities."},{t:"Join Developer Communities",d:"Engage with communities on Discord (NestJS, Prisma, React), Stack Overflow, and Twitter/X. Ask questions, answer other developers' questions, share what you build, and attend virtual meetups. Teaching others is one of the fastest ways to deepen your own understanding and stay current with evolving best practices."}],whatIs:"The best way to solidify your knowledge is to BUILD THINGS. Each project will force you to revisit concepts, solve real problems, and discover things this tutorial couldn't cover. Your code will get better with every project.",realWorld:"Every senior developer will tell you the same thing: 'I learned the most from building projects and debugging issues.' The theory gets you started — the practice makes you a pro.",code:`// Your Learning Roadmap 🗺️
//
// PHASE 1: Foundation (Weeks 1-2)
// ├── Build a REST API with NestJS
// ├── Connect to MongoDB with Prisma
// ├── Add input validation with DTOs
// └── Write unit tests for your services
//
// PHASE 2: Frontend (Weeks 3-4)
// ├── Build a React app with Vite
// ├── Use React Query for data fetching
// ├── Add forms with React Hook Form + Zod
// └── Style with Tailwind CSS
//
// PHASE 3: Authentication (Week 5)
// ├── Implement JWT auth in NestJS
// ├── Add login/signup pages in React
// ├── Create Guards for protected routes
// └── Add role-based access control
//
// PHASE 4: Advanced (Weeks 6-8)
// ├── Add Redis caching
// ├── Implement Bull job queues
// ├── Set up file uploads with S3
// ├── Add WebSocket real-time features
// └── Deploy with Docker + CI/CD
//
// PHASE 5: Portfolio Project (Weeks 9-12)
// └── Build something REAL:
//     ├── E-commerce store
//     ├── Project management tool
//     ├── Social media dashboard
//     └── Or YOUR unique idea! 💡
//
// Resources:
// - docs.nestjs.com (official NestJS docs)
// - react.dev (official React docs)
// - prisma.io/docs (Prisma docs)
// - typescriptlang.org (TypeScript handbook)
// - docker.com/get-started (Docker guide)
//
// Remember: The best code you'll ever write
// is the code you haven't written yet! 🚀`,funFact:"The average developer reads 10x more code than they write. Reading open-source projects on GitHub is one of the best ways to level up. Clone a NestJS project, read every file, and ask 'why did they do it this way?' 📖",quiz:[{q:"What's the BEST way to learn fullstack development?",opts:["Watch 100 YouTube tutorials","Read every documentation page","Build real projects and learn by doing","Memorize all the APIs"],ans:2},{q:"What should you do after finishing this tutorial?",opts:["Stop learning — you know everything","Watch more tutorials","Start building real projects","All of the above"],ans:2},{q:"How should you approach building your portfolio project?",opts:["Copy code from others","Build something that solves a real problem","Make it as complicated as possible","Pick something you don't care about"],ans:1},{q:"What makes building a chat application a great learning project?",opts:["It combines real-time WebSockets, authentication, database storage, and state management in one project","Chat apps are the easiest to build","Everyone needs a chat app","Chat apps don't require any backend"],ans:0},{q:"Why is reading production-level open source code recommended for learning?",opts:["Open source code is always perfect","It's the only way to learn coding","You can copy it for your own projects","It exposes you to real-world patterns, architecture decisions, and best practices used by experienced developers"],ans:3}],challenge:"Right now — TODAY — create a new NestJS + React project. Build even the simplest thing. A single endpoint that returns your name. The hardest part is starting. You've got this! 💪",resources:[{type:"article",title:"Developer Roadmaps",url:"https://roadmap.sh/",source:"roadmap.sh"},{type:"article",title:"freeCodeCamp",url:"https://www.freecodecamp.org/",source:"freeCodeCamp"},{type:"docs",title:"Node.js Best Practices",url:"https://github.com/goldbergyoni/nodebestpractices",source:"GitHub"},{type:"video",title:"How to Learn to Code",url:"https://www.youtube.com/watch?v=NtfbWkxJTHw",source:"Fireship"}],eli5:"You've learned the alphabet, now write stories! The best way to get better isn't reading more books about writing - it's actually writing! Build things: a game, a website for friends, anything. Every project teaches you something new. Start today!",codeWalkthrough:["Your Learning Roadmap 🗺️","","PHASE 1: Foundation (Weeks 1-2)","├── Build a REST API with NestJS","├── Connect to MongoDB with Prisma","├── Add input validation with DTOs","└── Write unit tests for your services","","PHASE 2: Frontend (Weeks 3-4)","├── Build a React app with Vite","├── Use React Query for data fetching","├── Add forms with React Hook Form + Zod","└── Style with Tailwind CSS","","PHASE 3: Authentication (Week 5)","├── Implement JWT auth in NestJS","├── Add login/signup pages in React","├── Create Guards for protected routes","└── Add role-based access control","","PHASE 4: Advanced (Weeks 6-8)","├── Add Redis caching","├── Implement Bull job queues","├── Set up file uploads with S3","├── Add WebSocket real-time features","└── Deploy with Docker + CI/CD","","PHASE 5: Portfolio Project (Weeks 9-12)","└── Build something REAL:","├── E-commerce store","├── Project management tool","├── Social media dashboard","└── Or YOUR unique idea! 💡","","Resources:","- docs.nestjs.com (official NestJS docs)","- react.dev (official React docs)","- prisma.io/docs (Prisma docs)","- typescriptlang.org (TypeScript handbook)","- docker.com/get-started (Docker guide)","","Remember: The best code you'll ever write","is the code you haven't written yet! 🚀"],bugChallenge:{"code":"// Trying to do everything at once\napp.get('/users', auth, validate, cache, rateLimit,\n  log, compress, cors, serialize,\n  async (req, res) => { res.json([]); }\n);","hint":"Is piling all middleware on one route maintainable?","answer":"Stacking middleware on every route in Express is unmaintainable. This is why NestJS exists! Fix: use NestJS architecture with guards, pipes, interceptors, and filters for organized, reusable middleware."},difficulty:"beginner",prereqs:[]},

  {id:37,title:"What is Programming?",subtitle:"Your First Step into the Digital World",analogy:"Programming is like writing a cooking recipe. You give the computer a list of step-by-step instructions — 'take this ingredient, mix it with that, heat it for 10 minutes' — and the computer follows them EXACTLY. If you forget a step or write it wrong, the dish (your program) won't turn out right!",points:[{t:"What is Code?",d:"Code is simply a set of instructions written in a language that computers can understand. Just like you write sentences in English, you write code in a programming language. Each line tells the computer to do ONE specific thing — display text, do math, or make a decision."},{t:"What is a Program?",d:"A program is a collection of code instructions bundled together to accomplish a task. Your web browser, your music player, even the calculator on your phone — they're all programs. Someone wrote every single instruction that makes them work!"},{t:"How Computers Execute Code",d:"Computers read your code from top to bottom, one line at a time — like reading a book. They do EXACTLY what you say, nothing more, nothing less. They can't guess what you meant. If you say 'add 2 + 2' they add. If you forget to say it, they won't. Computers are obedient but not smart."},{t:"Input and Output",d:"Every program takes something IN (input) and produces something OUT (output). A calculator takes numbers (input) and shows the result (output). A search engine takes your query (input) and shows matching websites (output). All programs follow this Input → Process → Output pattern."},{t:"What are Programming Languages?",d:"Just like there are many human languages (English, Spanish, French), there are many programming languages (JavaScript, Python, Java). Each has its own grammar and rules. We're learning JavaScript — the language of the web. It runs in every browser on Earth!"},{t:"Why Learn Programming?",d:"Programming is a superpower. It lets you build websites, create apps, automate boring tasks, analyze data, and solve problems. You don't need to be a math genius — you need curiosity and patience. Every expert programmer started exactly where you are right now: knowing nothing."},{t:"Bugs and Debugging",d:"A 'bug' is a mistake in your code that makes it behave unexpectedly. 'Debugging' is the process of finding and fixing those mistakes. Even the best programmers write bugs — the skill is learning to find and fix them. The term 'bug' came from an actual moth found inside a computer in 1947!"}],whatIs:"Programming is the act of writing instructions (code) that tell a computer what to do. These instructions are written in a programming language that both humans and computers can understand. You write code, the computer executes it step by step, and something useful happens — a website loads, a game runs, a calculation is made.",realWorld:"Everything digital runs on code. When you open Instagram, send a text message, use Google Maps, or play a video game — code is making it all happen. Someone (a programmer!) wrote every feature you use. Programming isn't just for 'tech people' — it's becoming a universal skill like reading and writing.",code:`// Your very first code! Let's say hello to the world.
// In JavaScript, console.log() prints text to the screen.

console.log("Hello, World!");
// Output: Hello, World!

// Let's do some math
console.log(2 + 3);
// Output: 5

// Let's combine text
console.log("My name is " + "Alex");
// Output: My name is Alex

// The computer reads top to bottom, one line at a time:
console.log("Step 1: Wake up");
console.log("Step 2: Brush teeth");
console.log("Step 3: Start coding!");
// These print in order: Step 1, Step 2, Step 3`,funFact:"The first computer 'bug' was a real bug! In 1947, a moth got stuck inside the Harvard Mark II computer and caused errors. Engineer Grace Hopper taped the moth into the logbook and wrote 'First actual case of bug being found.' The term stuck!",quiz:[{q:"What is a program?",opts:["A TV show about computers","A collection of instructions that tells a computer what to do","A type of computer hardware","A special kind of keyboard"],ans:1},{q:"How does a computer read code?",opts:["All at once, in a flash","From bottom to top","From top to bottom, one line at a time","It reads randomly"],ans:2},{q:"What does Input → Process → Output mean?",opts:["You type a password and it logs you in automatically","The program takes data in, does something with it, and produces a result","The computer turns on, processes files, then turns off","Input and output are the same thing"],ans:1},{q:"What is the fundamental purpose of a programming language?",opts:["To give instructions to a computer in a way that humans can write and understand","To make computers faster","To design websites","To store data in databases"],ans:0},{q:"What is the relationship between source code and a running program?",opts:["They are the same thing","Source code is always longer than the program","Programs don't need source code","Source code is the human-written instructions; the program is what the computer executes after processing that code"],ans:3}],challenge:"Open any website, right-click, and choose 'Inspect' (or press F12). Click the 'Console' tab. Type: console.log(\"I wrote my first code!\") and press Enter. Congratulations — you just ran your first line of code!",resources:[{type:"video",title:"How Do Computers Work?",url:"https://www.youtube.com/watch?v=QZwneRb-zqA",source:"Crash Course"},{type:"article",title:"What is Programming?",url:"https://www.freecodecamp.org/news/what-is-programming/",source:"freeCodeCamp"},{type:"video",title:"Programming in 100 Seconds",url:"https://www.youtube.com/watch?v=l1F_yRV5lcE",source:"Fireship"}],eli5:"Imagine you have a very obedient robot friend. It will do ANYTHING you tell it — but only if you tell it in the right language, step by step. Programming is learning to talk to that robot. 'Pick up the cup. Walk to the table. Put the cup down.' If you say it right, the robot does it perfectly!",codeWalkthrough:["A comment explaining this is your first code. Comments start with // and are ignored by the computer.","console.log() is a built-in function that prints text to the screen.","","Printing the classic 'Hello, World!' — every programmer's first program!","This is what appears on screen when the line above runs.","","A comment introducing math operations.","The computer calculates 2 + 3 and prints the result.","The output is 5 — the computer did the math for us!","","A comment about combining text (called 'concatenation').","The + sign joins two pieces of text together into one.","The output combines both text pieces into a single line.","","A comment explaining execution order.","This prints first because the computer reads top to bottom.","This prints second.","This prints third — computers always follow the order you write!"],bugChallenge:{"code":"console.log(\"Hello, World!)\nconsole.log(2 + 3)","hint":"Look very carefully at the quotes in the first line...","answer":"The first line is missing the closing double quote before the parenthesis. Fix: console.log(\"Hello, World!\") — every opening quote needs a matching closing quote."},difficulty:"beginner",prereqs:[]},

  {id:38,title:"Setup Your Toolkit",subtitle:"Get Your Coding Workshop Ready",analogy:"Before a chef cooks, they set up their kitchen — knives sharpened, ingredients prepped, oven preheated. Before you code, you set up your toolkit — a code editor to write in, Node.js to run your code, and a terminal to give commands. Let's prep your coding kitchen!",points:[{t:"What is a Code Editor?",d:"A code editor is a special text app designed for writing code. Unlike Notepad or Word, it understands programming languages — it colors your code for readability (syntax highlighting), suggests completions as you type, and flags errors instantly. It's like upgrading from a pencil to a smart pen!"},{t:"Installing VS Code",d:"VS Code (Visual Studio Code) is the most popular free code editor in the world, made by Microsoft. Download it from code.visualstudio.com, install it, and you're ready. It works on Windows, Mac, and Linux. Over 70% of developers use it — so you'll always find help online!"},{t:"What is Node.js?",d:"Normally JavaScript only runs inside web browsers. Node.js lets you run JavaScript OUTSIDE the browser — on your own computer! Think of it as giving JavaScript a passport to travel beyond the browser. Download it from nodejs.org (choose the LTS/stable version)."},{t:"Using the Terminal",d:"The terminal (also called command line or console) is a text-based way to talk to your computer. Instead of clicking folders, you type commands. It feels old-school but it's incredibly powerful. In VS Code, press Ctrl+` (backtick) to open the built-in terminal."},{t:"Running Your First Command",d:"Once Node.js is installed, open your terminal and type: node -v. This shows your Node.js version number — if you see a version like v20.11.0, it's working! Then try: node -e \"console.log('Hello!')\" to run JavaScript right from the terminal."},{t:"npm — The Package Manager",d:"npm (Node Package Manager) comes free with Node.js. It's like an app store for code — other developers share useful tools and libraries, and you can install them with one command: npm install package-name. There are over 2 million packages available!"},{t:"Creating a Project Folder",d:"Every coding project lives in its own folder. Open your terminal and type: mkdir my-first-project to create a folder, then cd my-first-project to enter it. Then npm init -y creates a package.json file — your project's ID card that tracks its name, version, and dependencies."},{t:"Your First JavaScript File",d:"In VS Code, create a new file called hello.js inside your project folder. Type console.log(\"Hello from my first file!\") and save it. Then in the terminal, type: node hello.js — and watch your message appear! You just created and ran your first program!"}],whatIs:"Your coding toolkit is the set of software tools you need to write and run code. The three essentials are: a code editor (VS Code) where you write your code, Node.js which lets you run JavaScript on your computer, and the terminal where you execute commands and run your programs.",realWorld:"Every professional developer uses these exact tools daily. VS Code is used at companies like Google, Facebook, and Netflix. Node.js powers backends at LinkedIn, Uber, and PayPal. Learning these tools isn't just practice — it's real-world professional setup!",code:`// Step 1: Check if Node.js is installed
// Open your terminal and type:
// node -v        (shows Node version, e.g., v20.11.0)
// npm -v         (shows npm version, e.g., 10.2.0)

// Step 2: Create a project folder
// mkdir my-first-project
// cd my-first-project
// npm init -y    (creates package.json)

// Step 3: Create your first file (hello.js)
console.log("Hello from my first project!");
console.log("My name is [Your Name]");
console.log("Today I started learning to code!");

// Step 4: Run it!
// In the terminal, type:  node hello.js
// You should see:
// Hello from my first project!
// My name is [Your Name]
// Today I started learning to code!

// Bonus: Try some math!
console.log("2 + 2 =", 2 + 2);
console.log("10 * 5 =", 10 * 5);`,funFact:"VS Code is actually built WITH JavaScript (using a framework called Electron). So the very tool you use to write JavaScript was itself written in JavaScript. It's JavaScript all the way down!",quiz:[{q:"What is VS Code?",opts:["A programming language","A free code editor for writing programs","A web browser","An operating system"],ans:1},{q:"What does Node.js allow you to do?",opts:["Design graphics","Run JavaScript outside of a web browser","Create PDFs","Edit photos"],ans:1},{q:"What does the command 'npm init -y' do?",opts:["Installs Node.js","Deletes all files in the folder","Creates a package.json file for your project","Opens VS Code"],ans:2},{q:"What is VS Code and why is it popular among developers?",opts:["A free, extensible code editor with built-in terminal, Git support, and thousands of extensions for any language","A web browser for developers","A programming language","A command-line only tool"],ans:0},{q:"What does the package.json file contain in a Node.js project?",opts:["Only the project name","HTML templates","CSS styles","Project metadata, dependencies, scripts, and configuration that define your project"],ans:3}],challenge:"Do it right now! 1) Download VS Code from code.visualstudio.com. 2) Download Node.js from nodejs.org (LTS version). 3) Open VS Code, open the terminal (Ctrl+`), type node -v to verify. 4) Create hello.js, write console.log(\"I did it!\"), and run it with node hello.js!",resources:[{type:"docs",title:"Download VS Code",url:"https://code.visualstudio.com/",source:"VS Code Official"},{type:"docs",title:"Download Node.js",url:"https://nodejs.org/en",source:"Node.js Official"},{type:"video",title:"VS Code Tutorial for Beginners",url:"https://www.youtube.com/watch?v=VqCgcpAypFQ",source:"Academind"}],eli5:"Imagine you want to build a birdhouse. You need a workbench (VS Code — where you work), a saw and hammer (Node.js — the tools that do the work), and your voice to tell your helper what to do (the terminal — where you give commands). Without setting up your workshop first, you can't build anything!",codeWalkthrough:["Comment: Step 1 — checking your installation","Open your terminal app to type these commands","node -v prints your Node.js version to confirm it's installed","npm -v prints your npm version — npm comes bundled with Node.js","","Comment: Step 2 — setting up a project folder","mkdir creates a new folder called 'my-first-project'","cd moves you INTO that folder (like double-clicking a folder)","npm init -y creates a package.json — your project's configuration file","","Comment: Step 3 — writing your first JavaScript file","This line prints a greeting when the file runs","Replace [Your Name] with your actual name!","A motivational message to celebrate your start","","Comment: Step 4 — running your code","How to run the file from the terminal","Expected output line 1","Expected output line 2","Expected output line 3","","Comment: Bonus math examples","Prints '2 + 2 = 4' — the comma in console.log adds a space","Prints '10 * 5 = 50' — the * symbol means multiply"],bugChallenge:{"code":"// In terminal:\nnpm intit -y\nnode -version\nconsole.log('Hello)","hint":"Look at the spelling of the commands and check for matching quotes...","answer":"Three bugs! 1) 'intit' should be 'init'. 2) '-version' should be '-v' or '--version'. 3) The string 'Hello is missing its closing quote — should be 'Hello'. Typos are the most common beginner bugs!"},difficulty:"beginner",prereqs:[37]},

  {id:39,title:"How the Internet Works",subtitle:"The Web Explained Simply",analogy:"The internet is like a library. You (the client/browser) walk up to the front desk and ask the librarian (HTTP) for a book. The librarian goes to the back shelves (the server), finds or prepares your book (processes the request), and brings it back to you (the response). URLs are like the catalog system — they tell you exactly where every book lives!",points:[{t:"What is a Server?",d:"A server is just a computer that's always on, always connected to the internet, and always ready to respond to requests. When you visit google.com, your request goes to one of Google's servers — a powerful computer sitting in a data center. It 'serves' you the web page you asked for."},{t:"What is a Client?",d:"The client is YOU — or more precisely, the app you use to browse the web (Chrome, Firefox, Safari). The client sends requests to servers and displays the responses. Your browser is the most common client, but mobile apps and even other servers can be clients too."},{t:"HTTP — The Language of the Web",d:"HTTP (HyperText Transfer Protocol) is the set of rules for how clients and servers talk. There are different types of requests: GET (give me data), POST (take this new data), PUT (update this data), DELETE (remove this data). Every time you visit a website, your browser sends a GET request."},{t:"URLs and Domains",d:"A URL (Uniform Resource Locator) is the address of something on the internet. Like a home address: https://www.example.com/about — 'https' is the protocol, 'www.example.com' is the domain name, and '/about' is the path (which page). Every page on the internet has a unique URL."},{t:"DNS — The Internet's Phone Book",d:"When you type 'google.com', your computer doesn't know where that is. DNS (Domain Name System) translates human-friendly names like 'google.com' into computer-friendly IP addresses like '142.250.80.46'. It's like looking up a contact name in your phone to find their number."},{t:"What is an API?",d:"An API (Application Programming Interface) is a way for programs to talk to each other. When a weather app shows today's forecast, it's calling a weather API to get the data. APIs are like waiters — you don't go into the kitchen (the database); you ask the waiter (the API) and they bring you what you need."},{t:"JSON — The Data Format",d:"JSON (JavaScript Object Notation) is the most common format for sending data between clients and servers. It looks like JavaScript objects: {\"name\": \"Alex\", \"age\": 25}. It's easy for both humans to read AND computers to parse. Almost every API on the internet uses JSON."}],whatIs:"The internet is a global network of connected computers that communicate using rules called protocols. When you visit a website, your browser (client) sends an HTTP request to a server, which processes it and sends back a response (usually HTML, CSS, JS, or JSON data). APIs let programs exchange data, and DNS translates domain names to IP addresses.",realWorld:"Every app on your phone uses these concepts. When you scroll Instagram, your phone (client) sends HTTP GET requests to Instagram's servers, which respond with JSON data (posts, likes, comments). Your phone then displays that data as the feed you see. Understanding this flow is fundamental to building any web application.",code:`// How the internet works — step by step:

// 1. You type a URL in your browser
// URL: https://api.example.com/users/1

// 2. DNS translates the domain to an IP address
// "api.example.com" → "93.184.216.34"

// 3. Your browser sends an HTTP GET request
// GET /users/1 HTTP/1.1
// Host: api.example.com

// 4. The server processes the request and responds
// Status: 200 OK (meaning "success!")

// 5. The response comes back as JSON data:
const response = {
  "id": 1,
  "name": "Alex",
  "email": "alex@example.com",
  "role": "developer"
};

// HTTP Methods — the 4 main actions:
// GET    → Read data    (fetch a user profile)
// POST   → Create data  (sign up a new user)
// PUT    → Update data  (change your email)
// DELETE → Remove data  (delete your account)

// A real API response with multiple items:
const users = [
  { "id": 1, "name": "Alex", "role": "developer" },
  { "id": 2, "name": "Sam", "role": "designer" },
  { "id": 3, "name": "Jo", "role": "manager" }
];
console.log(users.length); // 3 users`,funFact:"The first website ever created is still online! Tim Berners-Lee created it in 1991 at CERN. You can visit it at info.cern.ch — it's a simple page of text and links about the World Wide Web project. The entire internet grew from that one humble page!",quiz:[{q:"What does a server do?",opts:["Displays web pages on your screen","Receives requests and sends back responses","Connects to WiFi","Creates programming languages"],ans:1},{q:"What does DNS do?",opts:["Blocks viruses","Translates domain names (like google.com) into IP addresses","Designs websites","Sends emails"],ans:1},{q:"What is JSON used for?",opts:["Styling web pages","Playing music online","Exchanging data between clients and servers in a structured format","Creating databases"],ans:2},{q:"What is the role of a server in web communication?",opts:["A computer that stores and serves data or web pages in response to client requests","A type of web browser","A programming language","A physical building where code is written"],ans:0},{q:"What does HTTP stand for and what is its purpose?",opts:["Hyper Text Transfer Protocol — it's the set of rules for how web browsers and servers communicate","Hyper Tool Transfer Program","High Tech Transfer Protocol","Home Text Transfer Page"],ans:0}],challenge:"Open your browser and go to: jsonplaceholder.typicode.com/users — this is a free, public API! You'll see real JSON data with fake users. Notice the structure: curly braces for objects, square brackets for arrays, key-value pairs. This is what APIs look like under the hood!",resources:[{type:"video",title:"How the Internet Works in 5 Minutes",url:"https://www.youtube.com/watch?v=7_LPdttKXPc",source:"Aaron"},{type:"article",title:"MDN: How the Web Works",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",source:"MDN Web Docs"},{type:"docs",title:"HTTP Status Codes",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status",source:"MDN Web Docs"}],eli5:"Imagine you're sending a letter. You write the letter (your request), put an address on it (the URL), drop it in the mailbox (the internet), and it goes to the post office (DNS) which figures out where it should go. The letter arrives at someone's house (the server), they read it, write a reply, and send it back to you. That round trip is how the internet works!",codeWalkthrough:["Comment: Walking through how the internet works","","Comment: Step 1 — the user action","The URL you typed — this is the 'address' of the data you want","","Comment: Step 2 — DNS lookup","DNS converts the human-readable domain into a numeric IP address","","Comment: Step 3 — the browser sends a request","This is the actual HTTP request format — GET means 'give me data'","The Host header tells the server which website you want","","Comment: Step 4 — the server responds","200 OK is the status code meaning everything worked","","Comment: Step 5 — the response body","This is the JSON data the server sent back","Opening the response object with curly braces","The user's unique ID","The user's name","The user's email","The user's role","Closing the object","","Comment: The four main HTTP methods","GET reads data — like viewing a profile","POST creates new data — like signing up","PUT updates existing data — like editing your bio","DELETE removes data — like deleting a post","","Comment: A JSON array with multiple objects","Opening the array with a square bracket","First user object — Alex is a developer","Second user object — Sam is a designer","Third user object — Jo is a manager","Closing the array","Accessing the length property — arrays know how many items they hold"],bugChallenge:{"code":"// Trying to fetch data from an API\nGET https://api.example.com/users\n\n// Expected response:\n{\n  name: Alex,\n  age: 25\n}","hint":"Look at the JSON format — is something missing around the values?","answer":"JSON requires string values to be wrapped in double quotes! Fix: {\"name\": \"Alex\", \"age\": 25}. The number 25 doesn't need quotes, but 'Alex' does because it's a string. Valid JSON always uses double quotes, never single quotes."},difficulty:"beginner",prereqs:[37]},

  {id:40,title:"Build Your First Mini App",subtitle:"From Zero to Running Code",analogy:"Building your first app is like cooking your first meal. You start with a simple recipe (the plan), gather basic ingredients (variables), follow the steps in order (code lines), and taste-test as you go (running and debugging). Today we're making the coding equivalent of a grilled cheese sandwich — simple, satisfying, and delicious!",points:[{t:"console.log() — Your Voice",d:"console.log() is how your program talks to you. Whatever you put inside the parentheses gets printed to the screen. It's your program's voice — and your best debugging friend. Use it to check values, show messages, and verify your code is working: console.log(\"It works!\")."},{t:"Variables — Storing Information",d:"Variables are named containers that hold data. Use let to create one: let myName = \"Alex\". Now 'myName' holds the text 'Alex' and you can use it anywhere in your code. Use const if the value should never change: const PI = 3.14. Pick descriptive names so your code reads like English!"},{t:"String Concatenation — Joining Text",d:"You can join (concatenate) text using the + sign: \"Hello, \" + \"World!\" gives you \"Hello, World!\". You can mix variables and text: \"My name is \" + myName. Even better, use template literals with backticks: `My name is ${myName}` — this is the modern, cleaner way to combine text and variables."},{t:"Running a Script",d:"Save your code in a .js file (like app.js) and run it by typing node app.js in the terminal. The computer reads your file from top to bottom and executes each line. If there's an error, it tells you which line has the problem. Save, run, check — that's the cycle!"},{t:"User Input Concepts",d:"Programs can ask users for information! In the browser, prompt(\"What is your name?\") shows a popup. In Node.js, you can use the readline module to read from the terminal. For now, we'll simulate input by storing values in variables — the concept is the same: your program receives data and responds to it."},{t:"if/else — Making Decisions",d:"Programs can make decisions! 'if' checks a condition — if it's true, run this code. 'else' runs different code when the condition is false. Example: if (age >= 18) { console.log(\"Adult\"); } else { console.log(\"Minor\"); }. This is how programs react differently based on data."},{t:"Putting It All Together",d:"A real program combines all these pieces: store data in variables, join text with concatenation, make decisions with if/else, and show results with console.log. That's what we're building today — a mini app that greets users differently based on their name and time of day!"}],whatIs:"A mini app is a small, self-contained program that does one useful thing. Today we're building a console app that stores a user's name, checks the time of day, and prints a personalized greeting. It uses variables, string concatenation, if/else logic, and console.log — the essential building blocks of every program ever written.",realWorld:"Every massive app started as something tiny. Facebook started as a simple profile page. Google started as a search box. Your mini app is the first step on that same journey. The skills you learn here — variables, strings, conditionals — are used in EVERY programming language and EVERY application.",code:`// My First Mini App: The Greeter!
// Save this as greeter.js and run: node greeter.js

// Step 1: Store the user's info in variables
const userName = "Alex";
const userAge = 25;
const currentHour = new Date().getHours(); // 0-23

// Step 2: Create a greeting based on time of day
let greeting;

if (currentHour < 12) {
  greeting = "Good morning";
} else if (currentHour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

// Step 3: Build the message using template literals
const message = \`\${greeting}, \${userName}! You are \${userAge} years old.\`;
console.log(message);

// Step 4: Add some fun conditional logic
if (userAge < 13) {
  console.log("Wow, you're starting young! Future coding prodigy!");
} else if (userAge < 18) {
  console.log("Awesome! You're ahead of most adults!");
} else if (userAge < 30) {
  console.log("Perfect time to learn — your career will thank you!");
} else {
  console.log("It's never too late — many great devs started after 30!");
}

// Step 5: A simple counter
console.log("\\nLet's count to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(\`  \${i}...\`);
}
console.log("Blast off! You just wrote a real program!");`,funFact:"The 'Hello, World!' tradition started in 1978 with the book 'The C Programming Language' by Brian Kernighan. Since then, virtually every programming tutorial begins with it. You're now part of a tradition that's almost 50 years old!",quiz:[{q:"What does console.log() do?",opts:["Creates a new file","Prints a message to the screen/terminal","Deletes text from the screen","Opens a web browser"],ans:1},{q:"What does console.log() do in JavaScript?",opts:["It saves data to a file","It prints output to the terminal or browser console so you can see what your code is doing","It creates a pop-up window","It sends data to a server"],ans:1},{q:"What does the if/else statement do?",opts:["Loops through an array","Makes decisions — runs different code based on a condition","Creates a variable","Connects to the internet"],ans:1},{q:"What does a variable do in programming?",opts:["Stores a piece of data with a name so you can use and change it later in your program","Changes the color of text","Connects to the internet","Deletes files from your computer"],ans:0},{q:"What does string concatenation mean?",opts:["Deleting strings","Converting strings to numbers","Encrypting text data","Joining two or more text strings together into one, like 'Hello' + ' ' + 'World' becomes 'Hello World'"],ans:3}],challenge:"Create a file called myapp.js and build your own greeter! Change the userName to YOUR name, add more if/else conditions (maybe check if the name is long or short, or add a favorite color variable). Run it with node myapp.js. Then change values and run again — see how the output changes!",resources:[{type:"video",title:"JavaScript Tutorial for Beginners",url:"https://www.youtube.com/watch?v=W6NZfCO5SIk",source:"Programming with Mosh"},{type:"article",title:"JavaScript First Steps",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting",source:"MDN Web Docs"},{type:"docs",title:"JavaScript.info — Hello World",url:"https://javascript.info/hello-world",source:"JavaScript.info"}],eli5:"You know how you can tell Alexa or Siri to do things? 'Hey Siri, what's the weather?' Building a mini app is like teaching Siri a new trick. You write the instructions: 'When someone tells you their name, say hello to them!' Your program listens, thinks, and responds — just like a tiny robot friend you built yourself!",codeWalkthrough:["Comment: The name of our mini app!","Comment: How to save and run this file","","Comment: Step 1 — creating our data","Creating a constant variable to store the user's name as text","Creating a constant for the user's age as a number","Getting the current hour (0-23) from the computer's clock","","Comment: Step 2 — time-based greeting","Declaring 'greeting' with let because we'll change its value below","","Checking if it's before noon (hour 0-11)","If true, set greeting to morning","'else if' checks another condition — is it before 6 PM?","If true, set greeting to afternoon","'else' catches everything else — must be evening/night","Set greeting to evening","Closing the if/else block","","Comment: Step 3 — building the output message","Using template literals (backticks) with ${} to insert variables into text","Printing the complete personalized message!","","Comment: Step 4 — more conditional fun","Checking if user is under 13","Print an encouraging message for young learners","'else if' for teenagers (13-17)","Encouragement for teens","'else if' for young adults (18-29)","Career-focused encouragement","'else' for everyone 30 and over","Motivation for career changers","Closing the if/else block","","Comment: Step 5 — a simple loop","A blank line for visual spacing in output","A 'for' loop: start at 1, go while i<=5, add 1 each time","Print each number with formatting","Closing the loop","A celebratory final message — you did it!"],bugChallenge:{"code":"const userName = \"Alex\"\nconst greeting = \"Hello, \" + username;\nconsol.log(greeting);\n\nif userName === \"Alex\" {\n  console.log(\"Welcome back!\");\n}","hint":"Look at variable name spelling, the console command, and the if statement syntax...","answer":"Three bugs! 1) 'username' should be 'userName' (JavaScript is case-sensitive!). 2) 'consol.log' should be 'console.log' (missing the 'e'). 3) The if statement needs parentheses: if (userName === \"Alex\"). These are the three most common beginner mistakes!"},difficulty:"beginner",prereqs:[37,38]},

// ═══════════════════════════════════════════════════════════════
// LESSON 41 — NestJS Setup & First App
// ═══════════════════════════════════════════════════════════════
{
  id: 41,
  title: 'NestJS Setup & First App',
  subtitle: 'From Zero to Running Server in 5 Minutes',
  analogy: "Installing NestJS is like buying a LEGO starter kit. The box comes with a base plate (project scaffold), instruction manual (CLI), and basic bricks (modules, controllers, services). You don't have to find each piece separately — open the box and start building immediately!",
  points: [
    { t: 'Install the NestJS CLI', d: "Run `npm i -g @nestjs/cli` to install the NestJS command-line tool globally. The CLI is your best friend — it generates projects, modules, controllers, services, and more with a single command. Think of it as a robot assistant that writes boilerplate for you." },
    { t: 'Create a New Project', d: "`nest new my-app` scaffolds a complete project with TypeScript config, testing setup, linting, and a working hello-world endpoint. Choose npm or yarn when prompted. In seconds, you have a production-ready project structure." },
    { t: 'Project Structure', d: "src/main.ts is the entry point that bootstraps the app. src/app.module.ts is the root module. src/app.controller.ts handles routes. src/app.service.ts contains logic. test/ has your test files. This structure stays consistent no matter how big the app grows." },
    { t: 'The main.ts File', d: "main.ts calls NestFactory.create(AppModule) to bootstrap your application. It's where you set the port (default 3000), enable CORS, add global pipes, and configure middleware. This tiny file is the ignition key for your entire server." },
    { t: 'Running the App', d: "`npm run start:dev` starts the app in watch mode — it auto-restarts when you save files. Visit http://localhost:3000 and see 'Hello World!' Your first NestJS server is alive! Use `npm run start:debug` for debugging with breakpoints." },
    { t: 'The nest generate Command', d: "`nest g resource cats` generates a complete CRUD module: controller, service, module, DTOs, and entity — all wired together. `nest g controller users` creates just a controller. The CLI saves hours of typing boilerplate files manually." },
    { t: 'package.json Scripts', d: "NestJS comes with scripts for every situation: `start` (production), `start:dev` (watch mode), `start:debug` (debugger), `build` (compile to JS), `test` (unit tests), `test:e2e` (end-to-end). You rarely need to add custom scripts." },
    { t: 'Hot Reload', d: "In dev mode, NestJS uses webpack or SWC for hot module replacement. When you change a file, only that module reloads — not the entire app. This means sub-second feedback loops while developing. Productivity goes through the roof!" }
  ],
  whatIs: "Setting up NestJS involves installing the CLI, scaffolding a project, understanding the file structure, and running the development server. The CLI automates project creation and code generation so you can focus on building features, not configuring tools.",
  realWorld: "Every NestJS project at companies like Adidas, Roche, and thousands of startups starts exactly this way — `nest new`, then `nest g resource`. The CLI ensures every team member starts with the same clean structure.",
  code: `// Step 1: Install NestJS CLI globally
// npm i -g @nestjs/cli

// Step 2: Create a new project
// nest new my-awesome-api

// Step 3: Look at the project structure
// my-awesome-api/
//   src/
//     main.ts          ← Entry point
//     app.module.ts    ← Root module
//     app.controller.ts ← Route handler
//     app.service.ts   ← Business logic
//   test/
//     app.e2e-spec.ts  ← E2E tests
//   package.json
//   tsconfig.json
//   nest-cli.json      ← CLI config

// src/main.ts — The ignition key
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend access
  app.enableCors();

  // Set a global prefix: /api/users, /api/products
  app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
}
bootstrap();

// src/app.module.ts — The root module
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],           // Other modules go here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// src/app.controller.ts — Handle requests
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  healthCheck() {
    return { status: 'ok', timestamp: new Date() };
  }
}

// src/app.service.ts — Business logic
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}`,
  funFact: "The NestJS CLI generates over 15 types of files: modules, controllers, services, guards, pipes, interceptors, filters, decorators, gateways, middlewares, interfaces, classes, enums, libraries, and sub-apps. It's like a code factory!",
  quiz: [
    { q: "What command creates a new NestJS project?", opts: ["npm init nest", "nest new my-app", "npx create-nest-app", "nest create project"], ans: 1 },
    { q: "What is main.ts responsible for?", opts: ["Defining database schemas", "Handling CSS styles", "Bootstrapping the NestJS application and starting the server", "Running tests"], ans: 2 },
    { q: "What does `nest g resource cats` do?", opts: ["Installs a cats package", "Generates a complete CRUD module with controller, service, module, and DTOs", "Creates a cat image", "Deploys cats to production"], ans: 1 },
    { q: "Which command runs NestJS in watch mode with auto-restart?", opts: ["npm run build", "npm run start:dev", "npm run start:prod", "nest watch"], ans: 1 },
    { q: "What does app.setGlobalPrefix('api') do?", opts: ["Sets the API version", "Adds '/api' before all route paths, so /users becomes /api/users", "Prefixes all logs with 'api'", "Changes the database name"], ans: 1 }
  ],
  challenge: "Install the NestJS CLI, create a new project with `nest new my-first-api`, run it with `npm run start:dev`, then visit http://localhost:3000. Next, add a `/health` endpoint that returns `{ status: 'ok', uptime: process.uptime() }`. Bonus: generate a cats resource with `nest g resource cats` and explore the files it creates!",
  resources: [
    { type: 'docs', title: 'NestJS First Steps', url: 'https://docs.nestjs.com/first-steps', source: 'NestJS Official' },
    { type: 'docs', title: 'NestJS CLI Usage', url: 'https://docs.nestjs.com/cli/usages', source: 'NestJS Official' },
    { type: 'video', title: 'NestJS Crash Course', url: 'https://www.youtube.com/watch?v=GHTA143_b-s', source: 'Traversy Media' }
  ],
  eli5: "Imagine you want to build a treehouse. You could start from scratch — finding wood, nails, a hammer. Or you could get a treehouse KIT with pre-cut pieces and instructions. NestJS CLI is that kit. You type one command and BOOM — your treehouse (server) is ready. You just need to decorate it (add your features)!",
  codeWalkthrough: [
    "Step 1: Install NestJS CLI globally",
    "Run this in your terminal",
    "",
    "Step 2: Create a new project",
    "This scaffolds the entire project",
    "",
    "Step 3: Look at the project structure",
    "The project folder",
    "Source code folder",
    "Entry point — starts the server",
    "Root module — organizes everything",
    "Route handler — handles HTTP requests",
    "Business logic — does the actual work",
    "Test folder",
    "End-to-end test file",
    "Package dependencies",
    "TypeScript configuration",
    "NestJS CLI configuration",
    "",
    "src/main.ts — The ignition key",
    "Importing NestFactory to create the app",
    "Importing the root module",
    "",
    "Defining the bootstrap function",
    "Creating the NestJS app from AppModule",
    "",
    "Enable CORS for frontend access",
    "Allow cross-origin requests",
    "",
    "Set a global prefix for all routes",
    "All routes will start with /api",
    "",
    "Start listening on port 3000",
    "Log a success message",
    "Closing the bootstrap function",
    "Call the bootstrap function to start",
    "",
    "src/app.module.ts — The root module",
    "Importing the Module decorator",
    "Importing the controller",
    "Importing the service",
    "",
    "Module decorator with configuration",
    "Import other modules here",
    "Controllers handle HTTP routes",
    "Services provide business logic",
    "Closing the decorator",
    "Exporting the AppModule class",
    "",
    "src/app.controller.ts — Handle requests",
    "Importing decorators from NestJS",
    "Importing the service",
    "",
    "Controller decorator — base route",
    "Exporting the controller class",
    "Injecting the service via constructor",
    "",
    "GET / — returns hello message",
    "Calling the service method",
    "Return type is string",
    "Closing the method",
    "",
    "GET /health — health check endpoint",
    "Returning status and timestamp",
    "Closing the method",
    "Closing the controller",
    "",
    "src/app.service.ts — Business logic",
    "Importing Injectable decorator",
    "",
    "Injectable marks this as a provider",
    "Exporting the service class",
    "A simple method that returns a string",
    "Returning the hello message",
    "Closing the method",
    "Closing the class"
  ],
  bugChallenge: {
    code: "import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.listen(3000);\n}\nbootstrap();",
    hint: "What's missing before app.listen()? Check the original main.ts for comparison...",
    answer: "app.listen(3000) is missing the 'await' keyword. Without await, the server might not fully start before the function ends. Fix: await app.listen(3000). Also, there's no console.log to confirm the server started — add one after listen!"
  },
  difficulty: 'intermediate',
  prereqs: [1, 15, 38]
},

// ═══════════════════════════════════════════════════════════════
// LESSON 42 — NestJS Controllers & Routing
// ═══════════════════════════════════════════════════════════════
{
  id: 42,
  title: 'NestJS Controllers & Routing',
  subtitle: 'The Front Door of Your API',
  analogy: "Controllers are like receptionists at a hotel. When a guest (HTTP request) arrives, the receptionist checks what they want: 'Checking in? Room 204, turn right.' 'Need towels? I'll call housekeeping (service).' The receptionist doesn't clean the rooms — they route guests to the right place and relay responses.",
  points: [
    { t: '@Controller() Decorator', d: "The @Controller('users') decorator marks a class as a route handler and sets the base path. All routes inside will start with /users. You can nest paths: @Controller('api/v1/users'). Without the decorator, NestJS won't recognize the class as a controller." },
    { t: 'HTTP Method Decorators', d: "@Get(), @Post(), @Put(), @Patch(), @Delete() — each maps to an HTTP method. @Get('profile') handles GET /users/profile. @Post() handles POST /users. You can have multiple methods on the same path with different HTTP verbs — that's RESTful design!" },
    { t: 'Route Parameters', d: "@Param('id') extracts dynamic segments from the URL. GET /users/123 → id = '123'. Use @Param() without arguments to get all params as an object. Always validate params with pipes: @Param('id', ParseIntPipe) ensures id is a number." },
    { t: 'Query Parameters', d: "@Query('page') extracts query string values. GET /users?page=2&limit=10 → page = '2', limit = '10'. Great for filtering, pagination, and sorting. Use @Query() to get the entire query object at once." },
    { t: 'Request Body', d: "@Body() extracts the request body from POST/PUT/PATCH requests. Use with DTOs for automatic validation: @Body() dto: CreateUserDto. NestJS parses JSON automatically. @Body('name') extracts a single field from the body." },
    { t: 'Response Handling', d: "By default, NestJS serializes your return value to JSON with status 200 (GET) or 201 (POST). For custom status codes, use @HttpCode(204). For custom headers, use @Header('Cache-Control', 'none'). For redirects, use @Redirect('https://example.com', 301)." },
    { t: 'Headers & Cookies', d: "@Headers('authorization') reads request headers. @Req() gives you the raw Express request object — but prefer specific decorators for cleaner code. Use @Res() for the raw response (but then YOU must send the response manually)." },
    { t: 'Wildcard & Nested Routes', d: "Use wildcards for flexible matching: @Get('ab*cd') matches abcd, abXcd, ab123cd. Group related routes with sub-paths: @Get(':id/posts') for /users/123/posts. NestJS resolves routes in order — put specific routes before wildcards." }
  ],
  whatIs: "Controllers in NestJS are classes decorated with @Controller() that handle incoming HTTP requests. They use method decorators (@Get, @Post, etc.) to map routes, and parameter decorators (@Param, @Query, @Body) to extract data from requests. Controllers delegate business logic to services.",
  realWorld: "Every API endpoint you've ever used — GET /products, POST /orders, DELETE /cart/items/5 — is handled by a controller. Companies like Stripe, Twilio, and GitHub design their controllers around RESTful conventions that NestJS makes easy to implement.",
  code: `// users.controller.ts — Complete example
import {
  Controller, Get, Post, Put, Delete,
  Param, Query, Body, HttpCode, Header,
  ParseIntPipe, DefaultValuePipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users?page=1&limit=10&search=john
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
  ) {
    return this.usersService.findAll({ page, limit, search });
  }

  // GET /users/123
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // POST /users (body = CreateUserDto)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // PUT /users/123
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  // DELETE /users/123
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }

  // GET /users/123/posts — nested route
  @Get(':id/posts')
  getUserPosts(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserPosts(id);
  }
}`,
  funFact: "NestJS uses the same decorator pattern as Angular and Java Spring Boot. The @Controller decorator was inspired by Spring's @RestController — Kamil Myśliwiec wanted to bring that enterprise Java organization to the Node.js world, but keep it fun!",
  quiz: [
    { q: "What does @Controller('users') do?", opts: ["Creates a user database", "Sets '/users' as the base path for all routes in this class", "Validates user input", "Defines a user interface"], ans: 1 },
    { q: "How do you extract URL parameters like /users/123?", opts: ["@Body('id')", "@Query('id')", "@Param('id')", "@Header('id')"], ans: 2 },
    { q: "Which decorator handles POST requests?", opts: ["@Get()", "@Post()", "@Put()", "@Send()"], ans: 1 },
    { q: "What does @Query('page') extract from GET /users?page=2?", opts: ["The URL path '/users'", "The value '2' from the query string", "The HTTP method", "The request body"], ans: 1 },
    { q: "What's the default HTTP status code for @Post() in NestJS?", opts: ["200", "201", "204", "301"], ans: 1 }
  ],
  challenge: "Create a ProductsController with: GET /products (with pagination query params), GET /products/:id, POST /products, PUT /products/:id, DELETE /products/:id, and GET /products/:id/reviews. Use ParseIntPipe on all :id params. Add a @HttpCode(204) on the delete route.",
  resources: [
    { type: 'docs', title: 'NestJS Controllers', url: 'https://docs.nestjs.com/controllers', source: 'NestJS Official' },
    { type: 'docs', title: 'NestJS Route Parameters', url: 'https://docs.nestjs.com/controllers#route-parameters', source: 'NestJS Official' },
    { type: 'article', title: 'RESTful API Design Best Practices', url: 'https://restfulapi.net/resource-naming/', source: 'RESTful API' }
  ],
  eli5: "Imagine you're at an airport check-in desk. The agent (controller) takes your info (request) — 'I want a window seat' (body) for 'flight 5' (param). The agent doesn't fly the plane — they tell the airline system (service) what you want and hand you a boarding pass (response). Controllers are the check-in agents of your API!",
  codeWalkthrough: [
    "users.controller.ts — Complete example",
    "Importing decorators from NestJS",
    "",
    "",
    "",
    "Importing the service for business logic",
    "Importing the DTO for creating users",
    "Importing the DTO for updating users",
    "",
    "Setting base route to /users",
    "Exporting the controller class",
    "Injecting the service via constructor",
    "",
    "GET /users with query parameters",
    "Get decorator — handles GET requests",
    "Method definition",
    "Extract 'page' from query, default 1, convert to number",
    "Extract 'limit' from query, default 10, convert to number",
    "Optional search query parameter",
    "Closing parameter list",
    "Delegate to service with the parameters",
    "Closing method",
    "",
    "GET /users/123",
    "Get with :id route parameter",
    "Extract id from URL, validate as integer",
    "Delegate to service",
    "Closing method",
    "",
    "POST /users — create a new user",
    "Post decorator — handles POST requests",
    "Post decorator defaults to 201 Created status",
    "Extract and validate body against DTO",
    "Delegate to service",
    "Closing method",
    "",
    "PUT /users/123 — update a user",
    "Put decorator with :id parameter",
    "Method definition",
    "Extract and validate the id",
    "Extract and validate the body",
    "Closing parameter list",
    "Delegate to service",
    "Closing method",
    "",
    "DELETE /users/123",
    "Delete decorator with :id parameter",
    "Set 204 No Content status",
    "Extract and validate the id",
    "Delegate to service",
    "Closing method",
    "",
    "GET /users/123/posts — nested route",
    "Nested route under /users/:id",
    "Extract the user id",
    "Delegate to service",
    "Closing method",
    "Closing the controller class"
  ],
  bugChallenge: {
    code: "@Controller('users')\nexport class UsersController {\n  constructor(private usersService: UsersService) {}\n\n  @Get()\n  findAll(@Query('page') page: number) {\n    return this.usersService.findAll(page);\n  }\n\n  @Get(':id')\n  findOne(@Param('id') id: string) {\n    return this.usersService.findOne(id);\n  }\n}",
    hint: "Query parameters and route parameters come in as strings by default. What pipe should you use to convert them?",
    answer: "Both 'page' and 'id' arrive as strings, but the service expects numbers. Fix: @Query('page', ParseIntPipe) page: number and @Param('id', ParseIntPipe) id: number. Without ParseIntPipe, you'd be passing strings like '2' instead of the number 2."
  },
  difficulty: 'intermediate',
  prereqs: [15, 41]
},

// ═══════════════════════════════════════════════════════════════
// LESSON 43 — NestJS Services & Dependency Injection
// ═══════════════════════════════════════════════════════════════
{
  id: 43,
  title: 'NestJS Services & Dependency Injection',
  subtitle: 'The Brain Behind Every Controller',
  analogy: "A service is like a mechanic in an auto shop. The front desk clerk (controller) writes up the work order but never touches the engine. The mechanic (service) is the expert who actually diagnoses and fixes cars. Dependency Injection is like the shop owner who automatically assigns mechanics to each service bay — no clerk has to wander the garage looking for an available mechanic.",
  points: [
    { t: '@Injectable() Decorator', d: "Adding @Injectable() to a class tells NestJS: 'This class can be managed by the DI container.' It can then be injected into controllers, other services, or any provider. Without @Injectable(), NestJS can't create or inject the class." },
    { t: 'Constructor Injection', d: "The main way to inject dependencies: `constructor(private usersService: UsersService) {}`. NestJS reads the type (UsersService), finds the matching provider, creates it (or reuses a singleton), and passes it in. Zero manual wiring needed!" },
    { t: 'Providers Array', d: "Services must be registered in a module's `providers` array to be available for injection. `providers: [UsersService]` is shorthand for `providers: [{ provide: UsersService, useClass: UsersService }]`. The module is the registry that connects everything." },
    { t: 'Singleton by Default', d: "By default, every service is a singleton — one instance shared across the entire app. This means the first time UsersService is needed, NestJS creates it, and every subsequent injection gets the SAME instance. Great for caching, connection pools, and shared state." },
    { t: 'Service-to-Service Injection', d: "Services can inject other services. An OrdersService might inject UsersService and ProductsService. This creates a dependency tree that NestJS resolves automatically. Just add them to the constructor — NestJS handles the rest." },
    { t: 'Custom Providers', d: "Beyond simple classes, you can provide values (useValue), factories (useFactory), or aliases (useExisting). `{ provide: 'API_KEY', useValue: 'abc123' }` lets you inject config. `{ provide: Logger, useFactory: () => new WinstonLogger() }` for custom creation." },
    { t: 'Async Providers', d: "Need to wait for a DB connection before creating a service? Use useFactory with async: `{ provide: 'DB', useFactory: async () => await connectDB() }`. NestJS waits for the promise to resolve before injecting the result. Essential for real-world apps." },
    { t: 'Provider Scopes', d: "Change the scope with @Injectable({ scope: Scope.REQUEST }) to create a new instance per request — useful for multi-tenant apps. Scope.TRANSIENT creates a new instance per injection point. Default (Scope.DEFAULT) is singleton. Choose wisely — singletons are faster!" }
  ],
  whatIs: "Services are classes marked with @Injectable() that contain business logic. Dependency Injection (DI) is NestJS's system for automatically creating and providing service instances where they're needed. Together, they enforce separation of concerns — controllers handle HTTP, services handle logic.",
  realWorld: "Every enterprise framework uses DI: Spring (Java), ASP.NET (C#), Angular (TypeScript). It makes code testable (swap real services for mocks), modular (replace one service without touching others), and clean (no manual object creation scattered everywhere).",
  code: `// users.service.ts — A complete service
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  // PrismaService is injected automatically
  constructor(private readonly prisma: PrismaService) {}

  async findAll(params: { page: number; limit: number }) {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({ skip, take: limit }),
      this.prisma.user.count(),
    ]);

    return {
      data: users,
      meta: { total, page, limit, pages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(\`User #\${id} not found\`);
    }
    return user;
  }

  async create(dto: CreateUserDto) {
    return this.prisma.user.create({ data: dto });
  }

  async update(id: number, dto: UpdateUserDto) {
    await this.findOne(id); // Throws if not found
    return this.prisma.user.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Throws if not found
    return this.prisma.user.delete({ where: { id } });
  }
}

// Custom provider example
// app.module.ts
@Module({
  providers: [
    UsersService,
    // Value provider — inject config
    { provide: 'APP_NAME', useValue: 'My Awesome API' },
    // Factory provider — complex creation
    {
      provide: 'MAILER',
      useFactory: (config: ConfigService) => {
        return new MailerService(config.get('SMTP_HOST'));
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}`,
  funFact: "The Dependency Injection pattern was popularized by Martin Fowler in 2004. He called it 'Inversion of Control' because instead of your code creating its dependencies (the normal flow), the framework creates them and gives them to you (inverted flow). NestJS's DI is inspired by Angular's, which was inspired by Java Spring!",
  quiz: [
    { q: "What does @Injectable() do?", opts: ["Makes the class injectable via CSS", "Tells NestJS this class can be managed by the DI container and injected into other classes", "Creates a database connection", "Makes the class a controller"], ans: 1 },
    { q: "What is the default scope of a NestJS provider?", opts: ["Request — new per request", "Transient — new per injection", "Singleton — one shared instance for the entire app", "Prototype — new per usage"], ans: 2 },
    { q: "Where must services be registered to be available for injection?", opts: ["In main.ts", "In the module's providers array", "In package.json", "In tsconfig.json"], ans: 1 },
    { q: "What happens when you inject a service that isn't in any module's providers?", opts: ["NestJS creates it automatically", "It returns null", "NestJS throws an error at startup", "It works but with warnings"], ans: 2 },
    { q: "What does `{ provide: 'API_KEY', useValue: 'abc123' }` do?", opts: ["Creates an API key in the database", "Registers a value that can be injected using @Inject('API_KEY')", "Sets an environment variable", "Validates the API key"], ans: 1 }
  ],
  challenge: "Create a ProductsService with full CRUD operations. Inject it into ProductsController. Then create a separate OrdersService that injects BOTH ProductsService and UsersService to create orders that reference both a user and a product. Register everything in the module providers.",
  resources: [
    { type: 'docs', title: 'NestJS Providers', url: 'https://docs.nestjs.com/providers', source: 'NestJS Official' },
    { type: 'docs', title: 'NestJS Custom Providers', url: 'https://docs.nestjs.com/fundamentals/custom-providers', source: 'NestJS Official' },
    { type: 'article', title: 'NestJS Injection Scopes', url: 'https://docs.nestjs.com/fundamentals/injection-scopes', source: 'NestJS Official' }
  ],
  eli5: "Imagine you need a calculator for math class. Instead of building one yourself every morning, your teacher (NestJS) keeps one calculator in the classroom and gives it to anyone who needs it. That's Dependency Injection — you just say 'I need a calculator' and it appears in your hands. You never worry about where it came from!",
  codeWalkthrough: [
    "users.service.ts — A complete service",
    "Importing Injectable and error class",
    "Importing Prisma for database access",
    "Importing DTO for creating users",
    "Importing DTO for updating users",
    "",
    "Injectable marks this as a DI-managed class",
    "Exporting the service",
    "PrismaService is injected automatically via constructor",
    "Constructor with private readonly for immutability",
    "",
    "Find all users with pagination",
    "Destructure page and limit from params",
    "Calculate how many records to skip",
    "",
    "Run both queries in parallel for speed",
    "Get paginated users",
    "Count total users",
    "Close Promise.all",
    "",
    "Return data with metadata",
    "The user records",
    "Pagination metadata",
    "Close return",
    "Close method",
    "",
    "Find a single user by ID",
    "Query the database",
    "Filter by ID",
    "Close query",
    "",
    "If no user found, throw 404",
    "Throw a NotFoundException",
    "Close if block",
    "Return the found user",
    "Close method",
    "",
    "Create a new user",
    "Use Prisma to insert the data",
    "Close method",
    "",
    "Update a user",
    "Check if user exists first",
    "Update in the database",
    "Filter by ID",
    "Set new data from DTO",
    "Close update",
    "Close method",
    "",
    "Remove a user",
    "Check if user exists first",
    "Delete from the database",
    "Close method",
    "Close class",
    "",
    "Custom provider example",
    "app.module.ts",
    "Module decorator",
    "Providers array",
    "Regular class provider",
    "Value provider — inject a constant",
    "Factory provider — custom creation",
    "Factory function with injected config",
    "Create a MailerService with config",
    "Close factory",
    "Tell NestJS to inject ConfigService into the factory",
    "Close factory provider",
    "Close providers",
    "Close decorator",
    "Export the module"
  ],
  bugChallenge: {
    code: "export class UsersService {\n  constructor(private prisma: PrismaService) {}\n\n  findAll() {\n    return this.prisma.user.findMany();\n  }\n}\n\n@Module({\n  controllers: [UsersController],\n  providers: [UsersController],\n})\nexport class UsersModule {}",
    hint: "Two issues: one with the service class and one with the module's providers array.",
    answer: "1) UsersService is missing @Injectable() decorator — NestJS can't inject PrismaService without it. 2) The providers array has UsersController instead of UsersService. Fix: add @Injectable() above the class and change providers to [UsersService, PrismaService]."
  },
  difficulty: 'intermediate',
  prereqs: [15, 41]
},

// ═══════════════════════════════════════════════════════════════
// LESSON 44 — NestJS Middleware & Interceptors
// ═══════════════════════════════════════════════════════════════
{
  id: 44,
  title: 'NestJS Middleware & Interceptors',
  subtitle: 'Processing Requests Before and After',
  analogy: "Middleware is like a toll booth on a highway — EVERY car passes through it before reaching the city. Interceptors are like a car wash with a before-and-after photo — they snap a picture when you drive in (before handler) and another when you drive out (after handler). Both process your car, but at different stages of the trip!",
  points: [
    { t: 'What is Middleware?', d: "Middleware functions run BEFORE the route handler on every matching request. They have access to the request and response objects and a next() function. Use them for logging, CORS, cookie parsing, rate limiting, or authentication. They're the first checkpoint in the request pipeline." },
    { t: 'Creating Middleware', d: "Implement the NestMiddleware interface with a use(req, res, next) method. Call next() to pass control to the next middleware or handler. If you don't call next(), the request hangs forever! Middleware can be class-based (injectable) or function-based (simple)." },
    { t: 'Applying Middleware', d: "In your module, implement NestModule and configure middleware in the configure() method. Use .forRoutes() to target specific routes and .exclude() to skip certain paths. You can apply middleware globally, per-module, or per-route." },
    { t: 'What are Interceptors?', d: "Interceptors wrap AROUND the route handler using RxJS observables. They execute logic BEFORE the handler runs AND AFTER the handler returns. This makes them perfect for transforming responses, adding caching, logging timing, and more." },
    { t: 'Response Transformation', d: "The most common use: wrap all responses in a standard format. `{ success: true, data: ..., timestamp: ... }` Instead of doing this in every controller, one interceptor handles all routes. Consistent API responses with zero repetition." },
    { t: 'Logging Interceptor', d: "Measure how long every request takes. Log the method, URL, and response time. In production, send these metrics to monitoring services like DataDog or New Relic. One interceptor replaces hundreds of manual console.log calls." },
    { t: 'Caching Interceptor', d: "NestJS has a built-in CacheInterceptor that caches GET responses. Apply it globally or per-route with @UseInterceptors(CacheInterceptor). It checks the cache before hitting the handler — if cached, it returns immediately without running your code." },
    { t: 'Middleware vs Interceptors', d: "Middleware: runs BEFORE only, has access to raw req/res, good for cross-cutting concerns. Interceptors: run BEFORE and AFTER, use RxJS, good for transforming responses and timing. Use middleware for low-level stuff, interceptors for application-level logic." }
  ],
  whatIs: "Middleware processes requests before they reach route handlers, while interceptors wrap around handlers to process both the request and response. Together they form a powerful pipeline for logging, transformation, caching, and cross-cutting concerns without cluttering your controllers.",
  realWorld: "Every production API uses middleware and interceptors. Morgan/Winston for logging, helmet for security headers, compression for response gzip, rate-limiter for throttling — all are middleware. Response wrappers, timing metrics, and cache layers are interceptors.",
  code: `// 1. Logging Middleware — runs on every request
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      const { statusCode } = res;
      this.logger.log(
        \`\${method} \${originalUrl} \${statusCode} — \${duration}ms\`,
      );
    });

    next(); // Don't forget this!
  }
}

// Apply middleware in module
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

@Module({ controllers: [UsersController], providers: [UsersService] })
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // Apply to all routes
    // Or target specific routes:
    // .forRoutes({ path: 'users', method: RequestMethod.GET })
    // .exclude({ path: 'health', method: RequestMethod.GET })
  }
}

// 2. Response Transform Interceptor — wraps all responses
import {
  Injectable, NestInterceptor,
  ExecutionContext, CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => ({
        success: true,
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}

// 3. Timing Interceptor — measure response time
@Injectable()
export class TimingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap(() => {
        console.log(
          \`\${req.method} \${req.url} — \${Date.now() - now}ms\`,
        );
      }),
    );
  }
}

// Apply globally in main.ts
// app.useGlobalInterceptors(new TransformInterceptor());

// Or per-controller with decorator
// @UseInterceptors(TransformInterceptor)`,
  funFact: "NestJS interceptors use RxJS (Reactive Extensions for JavaScript). RxJS was created by Microsoft and is the same library used by Angular. The pipe/map/tap pattern you see in interceptors is the same pattern used in Angular HTTP calls. Learning it once pays off in both frameworks!",
  quiz: [
    { q: "When does middleware run in the NestJS request lifecycle?", opts: ["After the handler", "Before AND after the handler", "Before the route handler, as the first processing step", "Only on errors"], ans: 2 },
    { q: "What happens if you forget to call next() in middleware?", opts: ["The request is automatically forwarded", "NestJS throws an error", "The request hangs indefinitely and never reaches the handler", "The middleware is skipped"], ans: 2 },
    { q: "What makes interceptors different from middleware?", opts: ["Interceptors are faster", "Interceptors run BEFORE and AFTER the handler, middleware runs BEFORE only", "Middleware is more powerful", "There is no difference"], ans: 1 },
    { q: "What RxJS operator transforms the response data in an interceptor?", opts: ["filter()", "tap()", "map()", "subscribe()"], ans: 2 },
    { q: "How do you apply middleware to specific routes only?", opts: ["Using @UseMiddleware() decorator", "Using consumer.apply(MW).forRoutes('path')", "Setting it in package.json", "Adding it to the controller"], ans: 1 }
  ],
  challenge: "Create a LoggerMiddleware that logs method, URL, status code, and response time for every request. Then create a TransformInterceptor that wraps all responses in `{ success: true, data: ..., requestId: uuid() }`. Apply both globally and test them!",
  resources: [
    { type: 'docs', title: 'NestJS Middleware', url: 'https://docs.nestjs.com/middleware', source: 'NestJS Official' },
    { type: 'docs', title: 'NestJS Interceptors', url: 'https://docs.nestjs.com/interceptors', source: 'NestJS Official' },
    { type: 'article', title: 'RxJS Operators Guide', url: 'https://rxjs.dev/guide/operators', source: 'RxJS Official' }
  ],
  eli5: "Imagine you're going to a friend's birthday party. Middleware is like the person at the door checking invitations — they see everyone who comes in. Interceptors are like gift wrapping — they wrap your present (data) nicely before you give it, and they unwrap the thank-you card (response) after. Both help, but at different times!",
  codeWalkthrough: [
    "1. Logging Middleware — runs on every request",
    "Importing NestJS classes and Logger",
    "Importing Express types",
    "",
    "Injectable class implementing NestMiddleware",
    "Create a logger with 'HTTP' context label",
    "",
    "The middleware function — req, res, next",
    "Destructure method and URL from request",
    "Record the start time",
    "",
    "When the response finishes sending...",
    "Calculate how long it took",
    "Get the status code",
    "Log the formatted message",
    "Format: GET /users 200 — 15ms",
    "Close the log call",
    "Close the finish listener",
    "",
    "IMPORTANT: call next() to continue!",
    "Close the middleware",
    "Close the class",
    "",
    "Apply middleware in module",
    "Import Module and middleware types",
    "",
    "Module decorator with providers",
    "Implement NestModule interface",
    "Configure method receives MiddlewareConsumer",
    "Start building the middleware chain",
    "Apply LoggerMiddleware",
    "To all routes",
    "Alternative: target specific routes",
    "Or exclude certain routes",
    "Close configure",
    "Close class",
    "",
    "2. Response Transform Interceptor",
    "Import interceptor types",
    "",
    "",
    "",
    "Import RxJS Observable",
    "Import the map operator",
    "",
    "Injectable interceptor class",
    "Intercept method with context and next handler",
    "Call the handler and pipe the result",
    "Map transforms the response data",
    "Wrap in standard format",
    "success flag",
    "Original data",
    "Add timestamp",
    "Close map",
    "Close pipe",
    "Close intercept",
    "Close class",
    "",
    "3. Timing Interceptor",
    "Another injectable interceptor",
    "Intercept method",
    "Record start time",
    "Get the request object",
    "",
    "Call handler and tap the result",
    "tap runs side effects without changing data",
    "Log the method, URL, and duration",
    "Format the timing output",
    "Close tap",
    "Close pipe",
    "Close intercept",
    "Close class",
    "",
    "Apply globally in main.ts",
    "",
    "Or per-controller with decorator"
  ],
  bugChallenge: {
    code: "@Injectable()\nexport class AuthMiddleware implements NestMiddleware {\n  use(req: Request, res: Response, next: NextFunction) {\n    const token = req.headers['authorization'];\n    if (!token) {\n      res.status(401).json({ message: 'Unauthorized' });\n    }\n    req['user'] = verifyToken(token);\n    next();\n  }\n}",
    hint: "What happens when there's no token but the code keeps executing?",
    answer: "When token is missing, res.status(401).json() sends a response BUT next() still gets called, causing the handler to run AND potentially sending a second response (crash!). Fix: add 'return' before res.status(401) to stop execution: `return res.status(401).json(...);"
  },
  difficulty: 'intermediate',
  prereqs: [10, 15, 42]
},

// ═══════════════════════════════════════════════════════════════
// LESSON 45 — NestJS Guards & Custom Decorators
// ═══════════════════════════════════════════════════════════════
{
  id: 45,
  title: 'NestJS Guards & Custom Decorators',
  subtitle: 'Security Checkpoints for Your API',
  analogy: "Guards are like passport control at an international border. The officer (Guard) checks your passport (JWT token) and visa stamp (role). Diplomats go through the fast lane (admin routes), citizens enter freely (authenticated routes), and travelers without a visa get denied entry. Custom decorators are like visa stamps — small annotations that carry big authorization decisions.",
  points: [
    { t: 'What are Guards?', d: "Guards implement CanActivate and return true (allow) or false (deny). They run AFTER middleware but BEFORE interceptors and pipes. Perfect for authentication and authorization — they decide if a request should proceed based on conditions like valid tokens or user roles." },
    { t: 'AuthGuard — JWT Authentication', d: "The most common guard: verify the JWT token from the Authorization header. Extract the user, attach it to the request, and let the handler access it. If the token is invalid or missing, throw UnauthorizedException (401). One guard protects your entire API." },
    { t: 'RolesGuard — Authorization', d: "After authentication (who are you?), authorization checks permissions (what can you do?). RolesGuard reads @Roles('admin') metadata from the route and compares it with the user's role. Admins can delete, users can only read. Separate concerns = clean code." },
    { t: 'Applying Guards', d: "Three levels: @UseGuards(AuthGuard) on a single route, on a controller (all routes), or globally via app.useGlobalGuards(). Global is best for auth — protect everything by default, then whitelist public routes with a @Public() decorator." },
    { t: '@SetMetadata() & Reflector', d: "Guards read metadata set by decorators. @SetMetadata('roles', ['admin']) attaches data to a route. Inside the guard, Reflector reads it: reflector.get('roles', context.getHandler()). This is how @Roles() and @Public() work under the hood." },
    { t: 'Custom @CurrentUser() Decorator', d: "Create a parameter decorator that extracts the logged-in user from the request: `createParamDecorator((data, ctx) => ctx.switchToHttp().getRequest().user)`. Now use @CurrentUser() in any controller instead of repeating request extraction logic everywhere." },
    { t: 'Custom @Public() Decorator', d: "Mark routes that skip authentication: `const Public = () => SetMetadata('isPublic', true)`. In your AuthGuard, check this metadata — if isPublic is true, return true without checking the token. Login and register routes need this!" },
    { t: 'Combining Guards', d: "Stack multiple guards: @UseGuards(AuthGuard, RolesGuard). They run in order — if AuthGuard fails, RolesGuard never runs. This creates a security pipeline: first verify identity, then check permissions. Clean separation of authentication and authorization." }
  ],
  whatIs: "Guards are NestJS classes that decide whether a request should be handled or rejected. They implement the CanActivate interface and are used for authentication (verify identity) and authorization (check permissions). Custom decorators create reusable metadata tags and parameter extractors.",
  realWorld: "Every secure API needs guards. Firebase uses them for authentication, Stripe for API key validation, GitHub for OAuth scopes. Role-based access control (RBAC) is standard in enterprise apps — guards make it declarative and clean.",
  code: `// 1. JWT Auth Guard — verify tokens
import {
  Injectable, CanActivate, ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    // Check if route is marked @Public()
    const isPublic = this.reflector.get<boolean>(
      'isPublic', context.getHandler(),
    );
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      const payload = this.jwtService.verify(token);
      request.user = payload; // Attach user to request
      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}

// 2. Roles Guard — check permissions
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles', context.getHandler(),
    );
    if (!requiredRoles) return true; // No roles required

    const { user } = context.switchToHttp().getRequest();
    if (!user) return false; // No authenticated user
    return requiredRoles.includes(user.role);
  }
}

// 3. Custom Decorators
import { SetMetadata, createParamDecorator } from '@nestjs/common';

// @Public() — skip auth for this route
export const Public = () => SetMetadata('isPublic', true);

// @Roles('admin', 'editor') — require specific roles
export const Roles = (...roles: string[]) =>
  SetMetadata('roles', roles);

// @CurrentUser() — extract user from request
export const CurrentUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user?.[data] : user;
  },
);

// Usage in controller
@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Get('profile')
  getProfile(@CurrentUser() user: any) {
    return user; // Clean! No req.user digging
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Post('login')
  @Public()  // Skip auth for login!
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}`,
  funFact: "The decorator pattern (@) comes from Python, was adopted by TypeScript via a TC39 proposal, and is now fundamental to Angular, NestJS, and MobX. NestJS uses over 60 built-in decorators — probably more than any other Node.js framework!",
  quiz: [
    { q: "What does a Guard's canActivate() method return?", opts: ["A string message", "A true (allow) or false (deny) boolean", "An HTTP response", "A user object"], ans: 1 },
    { q: "What's the purpose of @Public() decorator?", opts: ["Makes code open-source", "Marks a route to skip authentication in the AuthGuard", "Makes a service available globally", "Publishes the route to a registry"], ans: 1 },
    { q: "What does createParamDecorator() do?", opts: ["Creates a class decorator", "Creates a method decorator", "Creates a parameter decorator that extracts data from the request context", "Creates a module decorator"], ans: 2 },
    { q: "In what order do Guards and Interceptors run?", opts: ["Interceptors first, then Guards", "Guards first, then Interceptors", "They run simultaneously", "It depends on the configuration"], ans: 1 },
    { q: "How does RolesGuard know which roles are required?", opts: ["From the database", "From environment variables", "From metadata set by @Roles() decorator, read via Reflector", "From the request body"], ans: 2 }
  ],
  challenge: "Implement a complete auth system: 1) AuthGuard that verifies JWT tokens, 2) RolesGuard that checks user roles, 3) @Public() decorator for login/register, 4) @CurrentUser() decorator to extract the user, 5) @Roles('admin') decorator. Apply AuthGuard globally and test all scenarios!",
  resources: [
    { type: 'docs', title: 'NestJS Guards', url: 'https://docs.nestjs.com/guards', source: 'NestJS Official' },
    { type: 'docs', title: 'NestJS Custom Decorators', url: 'https://docs.nestjs.com/custom-decorators', source: 'NestJS Official' },
    { type: 'docs', title: 'NestJS Custom Route Decorators', url: 'https://docs.nestjs.com/custom-decorators#param-decorators', source: 'NestJS Official' }
  ],
  eli5: "Guards are like the password on your phone. Before you can use any app (route), you need to unlock it (authenticate). Some apps need extra permission — like your parents' approval to download games (role check). Custom decorators are like name tags at a party — they tell everyone who you are without you having to repeat yourself!",
  codeWalkthrough: [
    "1. JWT Auth Guard — verify tokens",
    "Import Guard interfaces and exceptions",
    "",
    "",
    "",
    "Import Reflector to read metadata",
    "Import JwtService to verify tokens",
    "",
    "Injectable guard class",
    "Constructor with injected dependencies",
    "JwtService for token verification",
    "Reflector for reading decorator metadata",
    "Close constructor",
    "",
    "The canActivate method — returns boolean",
    "Check if route is marked @Public()",
    "Read 'isPublic' metadata from the handler",
    "Close reflector call",
    "If public, allow without checking token",
    "",
    "Get the raw HTTP request",
    "Extract token from 'Bearer <token>' header",
    "",
    "If no token, throw 401",
    "Throw UnauthorizedException",
    "Close if",
    "",
    "Try to verify the token",
    "Decode and verify the JWT payload",
    "Attach user data to the request object",
    "Allow the request to proceed",
    "If verification fails...",
    "Throw invalid token error",
    "Close try/catch",
    "Close canActivate",
    "Close class",
    "",
    "2. Roles Guard — check permissions",
    "Injectable guard class",
    "Constructor with Reflector",
    "",
    "canActivate checks permissions",
    "Read required roles from metadata",
    "Get 'roles' array from the handler",
    "Close reflector call",
    "If no roles required, allow all",
    "",
    "Extract user from request",
    "Check if user's role is in the required list",
    "Close canActivate",
    "Close class",
    "",
    "3. Custom Decorators",
    "Import decorator creators",
    "",
    "@Public() — sets isPublic metadata to true",
    "",
    "@Roles() — sets required roles metadata",
    "Accept any number of role strings",
    "",
    "@CurrentUser() — extract user from request",
    "createParamDecorator factory",
    "Get the HTTP request from context",
    "Get the user attached by AuthGuard",
    "If 'data' specified, return user[data], else full user",
    "Close decorator",
    "",
    "Usage in controller",
    "Controller with base route",
    "Apply both guards to all routes",
    "Exporting the controller class",
    "GET /users/profile",
    "Use @CurrentUser() — clean extraction!",
    "Return the user object directly",
    "Close method",
    "",
    "DELETE /users/:id — admin only",
    "Require 'admin' role",
    "Extract the ID parameter",
    "Delete the user",
    "Close method",
    "",
    "POST /users/login — public access",
    "@Public() skips authentication",
    "Extract login credentials from body",
    "Delegate to auth service",
    "Close method",
    "Close class"
  ],
  bugChallenge: {
    code: "@Injectable()\nexport class RolesGuard implements CanActivate {\n  constructor(private reflector: Reflector) {}\n\n  canActivate(context: ExecutionContext): boolean {\n    const roles = this.reflector.get<string[]>(\n      'roles', context.getClass(),\n    );\n    if (!roles) return true;\n    const { user } = context.switchToHttp().getRequest();\n    return roles.includes(user.role);\n  }\n}",
    hint: "Where should the Reflector read the roles metadata from — the class or the handler?",
    answer: "The Reflector is reading from context.getClass() but @Roles() is set on individual methods (handlers), not the class. Fix: use context.getHandler() to read method-level metadata. Or use reflector.getAllAndOverride() to check both handler AND class metadata for maximum flexibility."
  },
  difficulty: 'intermediate',
  prereqs: [10, 15, 21, 42]
},

// ═══════════════════════════════════════════════════════════════
// LESSON 46 — NestJS Exception Filters & Error Handling
// ═══════════════════════════════════════════════════════════════
{
  id: 46,
  title: 'NestJS Exception Filters & Error Handling',
  subtitle: 'Catching Errors Like a Pro',
  analogy: "Exception filters are like an emergency room in a hospital. When something goes wrong with a patient (an error in your code), instead of panicking in the hallway, they are routed to the ER (filter) where trained staff handle the situation calmly, document what happened, and communicate clearly with the family (client). Without an ER, every emergency would be chaos.",
  points: [
    { t: 'Built-in HTTP Exceptions', d: "NestJS provides exceptions for every HTTP status: NotFoundException (404), BadRequestException (400), UnauthorizedException (401), ForbiddenException (403), ConflictException (409), InternalServerErrorException (500). Throw them anywhere — NestJS handles the rest." },
    { t: 'Default Exception Filter', d: "NestJS has a built-in global exception filter that catches ALL unhandled errors and returns a JSON response with statusCode, message, and error. Unknown errors become 500 Internal Server Error. You get sane defaults out of the box!" },
    { t: 'Custom Exception Filters', d: "Create filters with @Catch(ExceptionType) to handle specific errors your way. Implement ExceptionFilter with a catch(exception, host) method. You control the response format, status code, logging, and error reporting. One filter, consistent errors everywhere." },
    { t: 'Catch Everything', d: "@Catch() with no arguments catches ALL exceptions — including non-HTTP errors like TypeErrors and database errors. This is your last line of defense. Log the error, send an alert, and return a generic 'something went wrong' message to the user." },
    { t: 'Custom Exception Classes', d: "Extend HttpException to create domain-specific errors: `class UserNotFoundException extends NotFoundException`. Add custom properties like error codes: `{ code: 'USER_NOT_FOUND', message: '...' }`. Makes error handling more semantic and easier to debug." },
    { t: 'Applying Filters', d: "@UseFilters(MyFilter) per route/controller, or app.useGlobalFilters(new MyFilter()) globally. Global filters catch errors from any route. You can stack multiple filters — they execute in order until one handles the exception." },
    { t: 'Error Logging & Monitoring', d: "In your filter, log errors to external services: Sentry, DataDog, or a custom logger. Include request details (URL, method, body, user) for debugging. Production apps need error tracking — filters are the perfect place to add it." },
    { t: 'Validation Errors', d: "When ValidationPipe rejects input, it throws BadRequestException with an array of error messages. Customize this by providing an exceptionFactory to the pipe. Return field-level errors: `{ field: 'email', errors: ['must be valid email'] }` for better frontend integration." }
  ],
  whatIs: "Exception filters catch errors thrown during request processing and convert them into appropriate HTTP responses. NestJS provides built-in HTTP exceptions for common status codes, a default global filter, and the ability to create custom filters for specialized error handling.",
  realWorld: "Every production API needs consistent error handling. Stripe returns structured error objects with codes, messages, and docs links. GitHub API uses consistent error formats across hundreds of endpoints. Exception filters make this level of consistency effortless.",
  code: `// 1. Throwing built-in exceptions
import {
  NotFoundException, BadRequestException,
  ConflictException, ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class UsersService {
  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(\`User #\${id} not found\`);
    }
    return user;
  }

  async create(dto: CreateUserDto) {
    const exists = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (exists) {
      throw new ConflictException('Email already registered');
    }
    return this.prisma.user.create({ data: dto });
  }
}

// 2. Custom Exception Filter — catch ALL HTTP errors
import {
  ExceptionFilter, Catch, ArgumentsHost,
  HttpException, HttpStatus, Logger,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger('ExceptionFilter');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception instanceof HttpException
      ? exception.getResponse()
      : 'Internal server error';

    // Log the error with context
    this.logger.error(
      \`\${request.method} \${request.url} — \${status}\`,
      exception instanceof Error ? exception.stack : '',
    );

    response.status(status).json({
      success: false,
      statusCode: status,
      message: typeof message === 'string'
        ? message
        : (message as any).message || message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}

// 3. Custom domain exception
export class UserNotFoundException extends NotFoundException {
  constructor(userId: number) {
    super({
      code: 'USER_NOT_FOUND',
      message: \`User #\${userId} not found\`,
      userId,
    });
  }
}

// Usage: throw new UserNotFoundException(123);

// 4. Apply globally in main.ts
// app.useGlobalFilters(new AllExceptionsFilter());

// 5. Custom validation error format
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,
  transform: true,
  exceptionFactory: (errors) => {
    const formatted = errors.map(err => ({
      field: err.property,
      errors: Object.values(err.constraints || {}),
    }));
    return new BadRequestException({
      code: 'VALIDATION_ERROR',
      message: 'Validation failed',
      errors: formatted,
    });
  },
}));`,
  funFact: "HTTP status codes were defined in 1999 by RFC 2616. The famous 404 Not Found was supposedly named after Room 404 at CERN, where the original web servers were located. When people couldn't find a page, they'd say 'check room 404' — and the name stuck!",
  quiz: [
    { q: "What does @Catch() with no arguments catch?", opts: ["Only HttpExceptions", "Only 500 errors", "ALL exceptions including non-HTTP errors", "Nothing — it requires an argument"], ans: 2 },
    { q: "What status code does NotFoundException throw?", opts: ["400", "401", "403", "404"], ans: 3 },
    { q: "What method must an exception filter implement?", opts: ["filter()", "handle()", "catch(exception, host)", "process()"], ans: 2 },
    { q: "What happens if you throw a regular JavaScript Error (not HttpException) in NestJS?", opts: ["The app crashes", "The default filter returns a 500 Internal Server Error", "It's silently ignored", "It returns a 400 Bad Request"], ans: 1 },
    { q: "How do you customize validation error format?", opts: ["Edit the DTO class", "Use @Header() decorator", "Provide an exceptionFactory function to ValidationPipe", "Change the error in the controller"], ans: 2 }
  ],
  challenge: "Create an AllExceptionsFilter that: 1) Logs errors with request details, 2) Returns a consistent JSON format with statusCode, message, code, path, and timestamp, 3) Handles both HttpExceptions and unknown errors, 4) Create a custom DuplicateEmailException class. Apply the filter globally and test with different error scenarios!",
  resources: [
    { type: 'docs', title: 'NestJS Exception Filters', url: 'https://docs.nestjs.com/exception-filters', source: 'NestJS Official' },
    { type: 'docs', title: 'NestJS Built-in HTTP Exceptions', url: 'https://docs.nestjs.com/exception-filters#built-in-http-exceptions', source: 'NestJS Official' },
    { type: 'article', title: 'HTTP Status Codes Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status', source: 'MDN Web Docs' }
  ],
  eli5: "You know when you play a video game and you make a mistake? Instead of the game crashing, it shows 'Game Over' with your score. Exception filters are like that — when your code makes a mistake, instead of crashing everything, the filter catches it and shows a nice error message like 'Sorry, we couldn't find that!'",
  codeWalkthrough: [
    "1. Throwing built-in exceptions",
    "Import NestJS exception classes",
    "",
    "",
    "",
    "",
    "Injectable service class",
    "Find a single user by ID",
    "Query the database",
    "If user doesn't exist...",
    "Throw 404 with a descriptive message",
    "Close if",
    "Return the found user",
    "Close method",
    "",
    "Create a new user",
    "Check if email already exists",
    "Query by email",
    "Close query",
    "If user exists with this email...",
    "Throw 409 Conflict error",
    "Close if",
    "Create the user in the database",
    "Close method",
    "Close class",
    "",
    "2. Custom Exception Filter — catch ALL errors",
    "Import filter interfaces",
    "",
    "",
    "",
    "",
    "@Catch() with no argument = catch everything",
    "Implementing ExceptionFilter interface",
    "Logger for error reporting",
    "",
    "catch method — exception and host",
    "Switch to HTTP context",
    "Get the response object",
    "Get the request object",
    "",
    "Determine status code",
    "If it's an HttpException, use its status",
    "Otherwise, default to 500",
    "",
    "Determine error message",
    "If HttpException, get its response",
    "Otherwise, generic message",
    "",
    "Log the error with context",
    "Format: GET /users — 404",
    "Include stack trace for real errors",
    "Close logger call",
    "",
    "Send the response",
    "success: false flag",
    "The HTTP status code",
    "Extract the message string",
    "Handle both string and object messages",
    "Include the request path",
    "Include a timestamp",
    "Close json response",
    "Close catch method",
    "Close class",
    "",
    "3. Custom domain exception",
    "Extend NotFoundException for specific case",
    "Constructor takes userId",
    "Call parent with structured error object",
    "Custom error code",
    "Descriptive message",
    "Include the userId for debugging",
    "Close super call",
    "Close constructor",
    "Close class",
    "",
    "Usage: throw with specific user ID",
    "",
    "4. Apply globally in main.ts",
    "",
    "5. Custom validation error format",
    "Configure ValidationPipe with custom factory",
    "Standard options",
    "",
    "Custom error formatter",
    "Map each validation error",
    "Include the field name",
    "Include all constraint messages",
    "Close map",
    "Return a structured BadRequestException",
    "Custom error code",
    "Clear message",
    "Field-level errors",
    "Close return",
    "Close factory",
    "Close pipe config"
  ],
  bugChallenge: {
    code: "@Catch(HttpException)\nexport class HttpExceptionFilter implements ExceptionFilter {\n  catch(exception: HttpException, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const response = ctx.getResponse();\n    const status = exception.getStatus();\n\n    response.json({\n      statusCode: status,\n      message: exception.message,\n    });\n  }\n}",
    hint: "The response is being sent but something is missing. What should you set before sending JSON?",
    answer: "The filter sends JSON but never sets the HTTP status code on the response! It will always return 200 even for 404 or 500 errors. Fix: change response.json() to response.status(status).json(). Without .status(status), the browser/client thinks everything is fine!"
  },
  difficulty: 'intermediate',
  prereqs: [10, 15, 42]
},

// ═══════════════════════════════════════════════════════════════
// LESSON 47 — NestJS CRUD with Database
// ═══════════════════════════════════════════════════════════════
{
  id: 47,
  title: 'NestJS CRUD with Database',
  subtitle: 'Building a Complete REST API',
  analogy: "Building CRUD is like running a library. Create = buying new books and adding them to shelves. Read = finding and borrowing books. Update = correcting typos or updating editions. Delete = removing damaged books. The librarian (service) manages the catalog (database), while the front desk (controller) talks to visitors.",
  points: [
    { t: 'What is CRUD?', d: "Create, Read, Update, Delete — the four fundamental operations for any data-driven app. Every app you use does CRUD: Instagram creates posts, reads feeds, updates profiles, deletes comments. Mastering CRUD means you can build almost any app." },
    { t: 'Project Structure', d: "Each feature gets its own folder: users/users.module.ts, users/users.controller.ts, users/users.service.ts, users/dto/create-user.dto.ts, users/dto/update-user.dto.ts. `nest g resource users` generates all of this in one command!" },
    { t: 'Create — POST /items', d: "Accept a validated DTO, pass to service, insert into database, return the created item with 201 status. Always validate input with DTOs before creating. Return the full created object so the client has the ID and timestamps." },
    { t: 'Read — GET /items & GET /items/:id', d: "findAll() returns a paginated list with metadata (total, page, pages). findOne() returns a single item or throws NotFoundException. Add query params for filtering (search, status), sorting (sortBy, order), and pagination (page, limit)." },
    { t: 'Update — PATCH /items/:id', d: "Use PATCH (partial update) over PUT (full replace). Accept UpdateDto (PartialType of CreateDto) so clients only send changed fields. Verify the item exists first — update a non-existent item should throw 404, not create a new one." },
    { t: 'Delete — DELETE /items/:id', d: "Soft delete vs hard delete: soft delete sets a deletedAt timestamp (recoverable), hard delete removes the row permanently. Return 204 No Content on success. Always verify the item exists before deleting." },
    { t: 'Pagination Pattern', d: "Return `{ data: items[], meta: { total, page, limit, pages } }`. Calculate skip = (page - 1) * limit. Use default values for page (1) and limit (10). Set a max limit (100) to prevent clients from requesting millions of rows." },
    { t: 'Putting It All Together', d: "Module imports PrismaModule, registers controller + service. Controller handles HTTP with decorators. Service contains all database logic. DTOs validate input. This pattern repeats for every feature in your app — learn it once, use it forever." }
  ],
  whatIs: "A complete CRUD API combines controllers (HTTP handling), services (business logic), DTOs (input validation), and database operations (Prisma/TypeORM) into a RESTful interface. Each endpoint maps to a database operation: POST→create, GET→read, PATCH→update, DELETE→delete.",
  realWorld: "Every SaaS product is built on CRUD. Shopify's product API, Notion's page API, GitHub's repository API — they all follow the same CRUD pattern with pagination, filtering, and validation. This is the bread and butter of backend development.",
  code: `// products.dto.ts — Input validation
import {
  IsString, IsNumber, IsOptional,
  MinLength, Min, MaxLength, IsEnum,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

enum ProductStatus { ACTIVE = 'active', DRAFT = 'draft' }

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @IsOptional()
  @IsEnum(ProductStatus)
  status?: ProductStatus;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

// products.service.ts — Business logic + DB
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // CREATE
  async create(dto: CreateProductDto) {
    return this.prisma.product.create({ data: dto });
  }

  // READ (all, paginated)
  async findAll(params: {
    page: number; limit: number; search?: string;
  }) {
    const { page, limit, search } = params;
    const skip = (page - 1) * limit;
    const where = search
      ? { name: { contains: search, mode: 'insensitive' as const } }
      : {};

    const [data, total] = await Promise.all([
      this.prisma.product.findMany({
        where, skip, take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }

  // READ (one)
  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException(\`Product #\${id} not found\`);
    }
    return product;
  }

  // UPDATE
  async update(id: number, dto: UpdateProductDto) {
    await this.findOne(id); // Throws 404 if not found
    return this.prisma.product.update({
      where: { id }, data: dto,
    });
  }

  // DELETE
  async remove(id: number) {
    await this.findOne(id); // Throws 404 if not found
    return this.prisma.product.delete({ where: { id } });
  }
}

// products.controller.ts — HTTP layer
import {
  Controller, Get, Post, Patch, Delete,
  Param, Query, Body, HttpCode,
  ParseIntPipe, DefaultValuePipe,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('search') search?: string,
  ) {
    return this.productsService.findAll({ page, limit, search });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProductDto,
  ) {
    return this.productsService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}`,
  funFact: "The REST architecture was defined by Roy Fielding in his year 2000 PhD dissertation. He was also a co-author of the HTTP specification. REST is so foundational that almost every API in the world follows it — you're learning the language that all web services speak!",
  quiz: [
    { q: "What does CRUD stand for?", opts: ["Code, Review, Upload, Deploy", "Create, Read, Update, Delete", "Connect, Redirect, Undo, Download", "Compile, Run, Upload, Debug"], ans: 1 },
    { q: "Why use PATCH instead of PUT for updates?", opts: ["PATCH is faster", "PATCH allows partial updates — send only changed fields", "PUT is deprecated", "There is no difference"], ans: 1 },
    { q: "What HTTP status code is recommended when DELETE returns no response body?", opts: ["200 OK", "201 Created", "204 No Content", "301 Redirect"], ans: 2 },
    { q: "What does PartialType(CreateProductDto) do for UpdateProductDto?", opts: ["Removes all fields", "Makes all fields from CreateProductDto optional", "Adds extra validation", "Copies the DTO exactly"], ans: 1 },
    { q: "How do you calculate 'skip' for pagination?", opts: ["skip = page * limit", "skip = (page - 1) * limit", "skip = total - limit", "skip = page + limit"], ans: 1 }
  ],
  challenge: "Build a complete tasks API with: POST /tasks (create), GET /tasks (list with pagination + filter by status), GET /tasks/:id, PATCH /tasks/:id, DELETE /tasks/:id. Include a TaskStatus enum (todo/in_progress/done), search by title, and sort by createdAt. Use DTOs for all input validation!",
  resources: [
    { type: 'docs', title: 'NestJS CRUD Generator', url: 'https://docs.nestjs.com/recipes/crud-generator', source: 'NestJS Official' },
    { type: 'docs', title: 'Prisma CRUD Operations', url: 'https://www.prisma.io/docs/orm/prisma-client/queries/crud', source: 'Prisma' },
    { type: 'article', title: 'REST API Design Best Practices', url: 'https://restfulapi.net/', source: 'RESTful API' }
  ],
  eli5: "CRUD is like a toy box. CREATE = putting a new toy in the box. READ = looking inside to see what toys you have. UPDATE = fixing a broken toy or painting it a new color. DELETE = throwing away a toy you don't want anymore. Every app in the world is just a fancy toy box with these four actions!",
  codeWalkthrough: [
    "products.dto.ts — Input validation",
    "Import validation decorators",
    "",
    "",
    "",
    "Import PartialType utility",
    "",
    "Define allowed product statuses",
    "",
    "DTO for creating a product",
    "Name must be a string",
    "At least 3 characters",
    "Property declaration",
    "",
    "Price must be a number",
    "Cannot be negative",
    "Property declaration",
    "",
    "Description is optional",
    "Must be a string if provided",
    "Maximum 500 characters",
    "Optional property declaration",
    "",
    "Status is optional",
    "Must be a valid enum value",
    "Optional property declaration",
    "Close DTO class",
    "",
    "UpdateDto — all fields become optional",
    "",
    "products.service.ts — Business logic + DB",
    "Import Injectable and error class",
    "Import Prisma for database access",
    "",
    "Mark as injectable for DI",
    "Export the service class",
    "Inject PrismaService via constructor",
    "",
    "CREATE operation",
    "Insert DTO data into database",
    "Close method",
    "",
    "READ all with pagination",
    "Accept page, limit, and optional search",
    "",
    "Destructure parameters",
    "Calculate records to skip",
    "Build where clause for search",
    "Case-insensitive name search",
    "Empty where if no search",
    "",
    "Run both queries in parallel",
    "Fetch paginated products",
    "Apply where filter, skip, and limit",
    "Sort by newest first",
    "Close findMany",
    "Count total matching products",
    "Close Promise.all",
    "",
    "Return structured response",
    "The product records",
    "Pagination metadata",
    "Total matching records",
    "Current page",
    "Items per page",
    "Total number of pages",
    "Close meta",
    "Close return",
    "Close method",
    "",
    "READ one by ID",
    "Query database for single product",
    "Filter by ID",
    "Close query",
    "If not found...",
    "Throw 404 error",
    "Close if",
    "Return the product",
    "Close method",
    "",
    "UPDATE operation",
    "Check if product exists (throws 404)",
    "Update in database",
    "Filter by ID and set new data",
    "Close update",
    "Close method",
    "",
    "DELETE operation",
    "Check if product exists (throws 404)",
    "Delete from database",
    "Close method",
    "Close service class",
    "",
    "products.controller.ts — HTTP layer",
    "Import NestJS decorators",
    "",
    "",
    "",
    "",
    "Controller with /products base route",
    "Export the controller class",
    "Inject the service",
    "",
    "POST /products — create",
    "Validate body against CreateProductDto",
    "Delegate to service",
    "Close method",
    "",
    "GET /products — list all",
    "Method signature",
    "Page query param with default 1",
    "Limit query param with default 10",
    "Optional search query param",
    "Close parameter list",
    "Delegate to service with params",
    "Close method",
    "",
    "GET /products/:id — find one",
    "Extract and validate ID as integer",
    "Delegate to service",
    "Close method",
    "",
    "PATCH /products/:id — update",
    "Method signature",
    "Extract and validate ID",
    "Validate body against UpdateProductDto",
    "Close parameter list",
    "Delegate to service",
    "Close method",
    "",
    "DELETE /products/:id — remove",
    "Return 204 No Content",
    "Extract and validate ID",
    "Delegate to service",
    "Close method",
    "Close controller class"
  ],
  bugChallenge: {
    code: "@Controller('products')\nexport class ProductsController {\n  constructor(private productsService: ProductsService) {}\n\n  @Patch(':id')\n  async update(@Param('id') id: string, @Body() dto: UpdateProductDto) {\n    return this.productsService.update(id, dto);\n  }\n\n  @Delete(':id')\n  async remove(@Param('id') id: string) {\n    this.productsService.remove(id);\n  }\n}",
    hint: "Two issues: one with the param type and one with the delete method...",
    answer: "1) The 'id' param is a string but the service expects a number. Fix: @Param('id', ParseIntPipe) id: number. 2) The delete method is missing 'return' and 'await'. Without await, errors won't be caught. Without return, NestJS can't handle the response properly. Fix: return this.productsService.remove(id);"
  },
  difficulty: 'intermediate',
  prereqs: [14, 15, 17, 42, 43]
},
// ── Lesson 48: Build a Task Manager App (Project-Based) ──────────────
{
  id: 48,
  title: 'Build a Task Manager App',
  subtitle: 'Your First Real Full-Stack Project',
  analogy: "Building a Task Manager is like constructing a house. First you lay the foundation (database schema), then frame the walls (API endpoints), wire the electricity (authentication), and finally paint and decorate (the mobile/web UI). Each step builds on the last — skip one, and the whole thing wobbles.",
  points: [
    {t: 'Project Overview', d: "We'll build a full-stack Task Manager with features: create tasks, set due dates, assign priority/status, add descriptions, and view a dashboard. The backend uses NestJS + Prisma + PostgreSQL. The frontend can be React or React Native. This is the kind of app companies use in interviews to evaluate candidates."},
    {t: 'Database Schema Design', d: "Start with two models: User (id, email, password, name, createdAt) and Task (id, title, description, dueDate, priority, status, assigneeId, createdAt, updatedAt). The Task has a foreign key to User. Priority is an enum: LOW, MEDIUM, HIGH, URGENT. Status is an enum: TODO, IN_PROGRESS, COMPLETED. Always think about your data shape before writing any code."},
    {t: 'Prisma Schema & Migration', d: "Define your models in schema.prisma with @id, @default, @relation, and enum types. Run 'npx prisma migrate dev --name init' to create the database tables. Then run 'npx prisma generate' to create the type-safe client. Prisma gives you autocompletion for every query — no raw SQL needed."},
    {t: 'NestJS Module Structure', d: "Organize into feature modules: AuthModule (login/register), UsersModule (user CRUD), TasksModule (task CRUD). Each module has its own controller, service, and DTOs. Use the CLI: 'nest g module tasks', 'nest g controller tasks', 'nest g service tasks'. Keep modules focused on one responsibility."},
    {t: 'Authentication Flow', d: "Register: hash password with bcrypt, store user, return JWT. Login: verify email/password, return access + refresh tokens. Protect routes with JwtAuthGuard. Use @CurrentUser() decorator to get the logged-in user. Every task operation should be scoped to the authenticated user — users can only see and modify their own tasks."},
    {t: 'CRUD Endpoints', d: "POST /tasks — create a task (validate with CreateTaskDto). GET /tasks — list user's tasks with filters (status, priority, search). GET /tasks/:id — get single task (check ownership). PATCH /tasks/:id — update task fields (partial update with UpdateTaskDto). DELETE /tasks/:id — soft delete or hard delete. Always return appropriate HTTP status codes: 201 for create, 200 for success, 204 for delete."},
    {t: 'Filtering, Sorting & Pagination', d: "Real apps need query features. Accept query params: ?status=TODO&priority=HIGH&search=homepage&sort=dueDate&order=asc&page=1&limit=10. Build a Prisma 'where' clause dynamically. Use skip/take for pagination. Return metadata: { data: Task[], total: number, page: number, lastPage: number }. This is what makes your API production-ready."},
    {t: 'Validation & Error Handling', d: "Use class-validator decorators on DTOs: @IsString(), @IsEnum(Priority), @IsOptional(), @IsDateString(). Apply ValidationPipe globally. Create custom exceptions: TaskNotFoundException, UnauthorizedTaskAccessException. Use an exception filter to format error responses consistently with { statusCode, message, error } shape."},
    {t: 'Frontend Integration', d: "The React/React Native app calls your API. Store JWT in secure storage. Create screens: Login, Register, Dashboard (task list), Create Task, Task Details. Use React Query or SWR for data fetching with automatic cache invalidation. The dashboard shows tasks grouped by status with color-coded priority badges — just like the design mockup."},
    {t: 'Deployment Checklist', d: "Before shipping: add rate limiting (ThrottlerModule), enable CORS for your frontend domain, set up environment variables for production, add Swagger docs (@nestjs/swagger), write at least integration tests for auth and CRUD flows, Dockerize with a multi-stage build. A deployed project on your portfolio is worth more than 10 tutorial certificates."}
  ],
  whatIs: "A Task Manager is one of the most practical full-stack projects you can build. It covers authentication, CRUD operations, database relationships, filtering, validation, and frontend integration — all the skills employers look for. Unlike todo-list tutorials, this version includes real features: priority levels, status tracking, due dates, user assignment, and a polished dashboard UI.",
  realWorld: "Jira, Trello, Asana, ClickUp, Linear — every tech company uses a task management tool. Building one teaches you the exact patterns used in production apps: user-scoped data, role-based access, complex queries, real-time updates, and responsive UI. This single project demonstrates you can build a complete product from scratch.",
  code: `// ── Prisma Schema ──
enum Priority {
  LOW
  MEDIUM
  HIGH
  URGENT
}

enum Status {
  TODO
  IN_PROGRESS
  COMPLETED
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  tasks     Task[]   @relation("assignee")
  createdAt DateTime @default(now())
}

model Task {
  id          String   @id @default(cuid())
  title       String
  description String?
  dueDate     DateTime?
  priority    Priority @default(MEDIUM)
  status      Status   @default(TODO)
  assignee    User     @relation("assignee", fields: [assigneeId], references: [id])
  assigneeId  String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// ── NestJS Tasks Controller ──
@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@CurrentUser() user: User, @Body() dto: CreateTaskDto) {
    return this.tasksService.create(user.id, dto);
  }

  @Get()
  findAll(
    @CurrentUser() user: User,
    @Query() query: FilterTasksDto,
  ) {
    return this.tasksService.findAll(user.id, query);
  }

  @Patch(':id')
  update(
    @CurrentUser() user: User,
    @Param('id') id: string,
    @Body() dto: UpdateTaskDto,
  ) {
    return this.tasksService.update(user.id, id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@CurrentUser() user: User, @Param('id') id: string) {
    return this.tasksService.remove(user.id, id);
  }
}

// ── Tasks Service (with filtering) ──
@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string, query: FilterTasksDto) {
    const { status, priority, search, sort, order, page = 1, limit = 10 } = query;
    const where: Prisma.TaskWhereInput = {
      assigneeId: userId,
      ...(status && { status }),
      ...(priority && { priority }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' as const } },
          { description: { contains: search, mode: 'insensitive' as const } },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      this.prisma.task.findMany({
        where,
        orderBy: { [sort || 'createdAt']: order || 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.task.count({ where }),
    ]);

    return { data, total, page, lastPage: Math.ceil(total / limit) };
  }
}`,
  funFact: "Jira — the most popular task manager in tech — was originally built in 2002 by two Australians who funded it with $10,000 on credit cards. The name comes from 'Gojira' (the Japanese name for Godzilla). Today, Atlassian (Jira's parent company) is worth over $50 billion. Your Task Manager might not become Jira, but the skills you learn building it are identical to what Jira engineers use daily.",
  quiz: [
    {q: "Why should every task operation be scoped to the authenticated user?", opts: ["To make the code more complex", "To prevent users from viewing or modifying other users' tasks — a fundamental security requirement", "Because Prisma requires it", "To improve database performance"], ans: 1},
    {q: "What Prisma command generates a migration file and applies it to your database?", opts: ["npx prisma generate", "npx prisma migrate dev", "npx prisma db push", "npx prisma studio"], ans: 1},
    {q: "What should a paginated API response include besides the data array?", opts: ["Only the data", "Total count, current page, and last page number for navigation", "The full database schema", "A timestamp of the server"], ans: 1},
    {q: "Why use enums (Priority, Status) instead of plain strings in the schema?", opts: ["Enums are faster to type", "Enums enforce valid values at the database level, preventing invalid data like 'SUPER_HIGH' priority", "Enums use less memory", "Prisma requires all fields to be enums"], ans: 1},
    {q: "What is the benefit of organizing NestJS code into feature modules (AuthModule, TasksModule)?", opts: ["It makes the app slower but more organized", "Each module encapsulates related functionality, making the codebase scalable, testable, and easy to navigate", "NestJS cannot work without multiple modules", "Feature modules automatically add security"], ans: 1}
  ],
  challenge: "Build the Task Manager! Start with the Prisma schema (User + Task models with enums). Generate a migration. Then create a TasksModule with full CRUD endpoints. Add JWT authentication so users only see their own tasks. Bonus: add filtering by status and priority with pagination. Deploy it and add it to your portfolio!",
  resources: [
    {type: 'docs', title: 'NestJS CRUD Tutorial', url: 'https://docs.nestjs.com/recipes/crud-generator', source: 'NestJS'},
    {type: 'docs', title: 'Prisma Relations Guide', url: 'https://www.prisma.io/docs/orm/prisma-schema/data-model/relations', source: 'Prisma'},
    {type: 'docs', title: 'NestJS Authentication Guide', url: 'https://docs.nestjs.com/security/authentication', source: 'NestJS'}
  ],
  eli5: "Imagine you have a big whiteboard where you write down everything you need to do — like homework, chores, and fun stuff. Now imagine that whiteboard is on your phone, and it's smart! It knows which things are super important (URGENT!), which ones are almost done, and it only shows YOUR tasks — not your sister's. That's what we're building: a smart, personal to-do whiteboard that lives on the internet!",
  codeWalkthrough: [
    "Comment: Prisma Schema section",
    "Priority enum declaration",
    "LOW priority level",
    "MEDIUM priority level",
    "HIGH priority level",
    "URGENT priority level",
    "Close Priority enum",
    "",
    "Status enum declaration",
    "TODO — task not started",
    "IN_PROGRESS — task being worked on",
    "COMPLETED — task finished",
    "Close Status enum",
    "",
    "User model — stores account info",
    "cuid() auto-generated unique ID",
    "Unique email for login",
    "Hashed password (never store plain text!)",
    "User display name",
    "One-to-many: user owns many tasks",
    "Auto-timestamp on creation",
    "Close User model",
    "",
    "Task model — the core entity",
    "Auto-generated unique task ID",
    "Task title — required field",
    "Optional longer description",
    "Optional due date",
    "Priority defaults to MEDIUM",
    "Status defaults to TODO",
    "Relation: task belongs to a user (assignee)",
    "Foreign key linking to User.id",
    "Creation timestamp",
    "Auto-updated on every change",
    "Close Task model",
    "",
    "Comment: NestJS Tasks Controller section",
    "Controller with 'tasks' route prefix",
    "JwtAuthGuard protects ALL routes",
    "Export the controller class",
    "Inject TasksService via constructor",
    "",
    "POST /tasks — create a new task",
    "Get user from JWT, validate body with DTO",
    "Delegate to service with user.id for ownership",
    "Close create method",
    "",
    "GET /tasks — list user's tasks",
    "findAll method with query filters",
    "Get authenticated user from decorator",
    "Parse query params for filtering",
    "Close params",
    "Delegate to service with userId and filters",
    "Close findAll method",
    "",
    "PATCH /tasks/:id — partial update",
    "update method signature",
    "Authenticated user for ownership check",
    "Extract task ID from URL param",
    "Validated update body",
    "Close params",
    "Delegate update to service",
    "Close update method",
    "",
    "DELETE /tasks/:id — remove a task",
    "Return 204 No Content on success",
    "remove method with user and task id",
    "Delegate deletion to service",
    "Close remove method",
    "Close TasksController class",
    "",
    "Comment: Tasks Service section",
    "@Injectable marks this as a provider",
    "Export the service class",
    "Inject PrismaService for database access",
    "",
    "Async findAll with userId and query filters",
    "Destructure filters with defaults for page/limit",
    "Build dynamic Prisma where clause",
    "Always scope to authenticated user",
    "Conditionally add status filter",
    "Conditionally add priority filter",
    "Conditionally add text search",
    "OR: match title or description",
    "Case-insensitive title search",
    "Case-insensitive description search",
    "Close OR array",
    "Close search condition",
    "Close where clause",
    "",
    "Run query + count in parallel with Promise.all",
    "findMany with where, orderBy, skip, take",
    "Apply where clause",
    "Dynamic sort field and direction",
    "Skip for pagination offset",
    "Take = page size limit",
    "Close findMany",
    "Count total matching records",
    "Close Promise.all",
    "",
    "Return paginated response with metadata",
    "Close findAll method",
    "Close TasksService class"
  ],
  bugChallenge: {
    code: "@Controller('tasks')\n@UseGuards(JwtAuthGuard)\nexport class TasksController {\n  constructor(private tasksService: TasksService) {}\n\n  @Get()\n  findAll(@Query() query: FilterTasksDto) {\n    return this.tasksService.findAll(query);\n  }\n\n  @Patch(':id')\n  update(@Body() dto: UpdateTaskDto, @Param('id') id: string) {\n    return this.tasksService.update(id, dto);\n  }\n}",
    hint: "Two critical security issues: who owns these tasks?",
    answer: "1) findAll() doesn't pass the authenticated user's ID — any user can see ALL tasks in the database. Fix: add @CurrentUser() user and pass user.id to the service. 2) update() doesn't verify ownership — any authenticated user can modify any task. Fix: add @CurrentUser() user and pass user.id to the service, which should check assigneeId === userId before updating."
  },
  difficulty: 'advanced',
  prereqs: [14, 15, 17, 19, 21, 42, 43, 47, 49]
},
// ── Lesson 49: Database Relationships ──────────────
{
  id: 49,
  title: 'Database Relationships',
  subtitle: 'How Data Connects to Data',
  analogy: "Database relationships are like a family tree. A parent (one) can have multiple children (many) — that's one-to-many. Twins share the same birthday party (many-to-many through a join table). And every person has exactly one birth certificate (one-to-one). Understanding these connections is how you turn a spreadsheet of chaos into an organized, queryable database.",
  points: [
    {t: 'One-to-One (1:1)', d: "Each record in Table A links to exactly one record in Table B, and vice versa. Example: a User has one Profile. In Prisma, use @relation with a unique foreign key. One-to-one is less common but useful for splitting large tables or optional data (not every user needs billing info on the main table)."},
    {t: 'One-to-Many (1:N)', d: "One record in Table A links to many records in Table B. This is the most common relationship. Example: one User has many Posts. The 'many' side holds the foreign key (Post has userId). In Prisma: User has 'posts Post[]' and Post has 'author User @relation(fields: [authorId], references: [id])'."},
    {t: 'Many-to-Many (M:N)', d: "Records in Table A link to many records in Table B, and vice versa. Example: Students enroll in many Courses, and each Course has many Students. This requires a join table (enrollment) that holds both foreign keys. Prisma can create implicit join tables automatically or you can define explicit ones for extra fields like enrolledAt."},
    {t: 'Foreign Keys', d: "A foreign key is a column that references the primary key of another table. It enforces referential integrity — you can't create a Post with a userId that doesn't exist. In Prisma, @relation(fields: [authorId], references: [id]) defines the link. Foreign keys are the glue that holds relational data together."},
    {t: 'Cascading Deletes & Updates', d: "When you delete a User, what happens to their Posts? Cascade: delete all posts too. SetNull: keep posts but clear authorId. Restrict: block deletion if posts exist. In Prisma, use onDelete: Cascade, SetNull, or Restrict. Choose carefully — cascading deletes in production can wipe out more data than intended!"},
    {t: 'Eager vs Lazy Loading', d: "Eager loading fetches related data immediately (include: { posts: true }). Lazy loading fetches only when accessed. Prisma uses explicit eager loading with 'include' — no hidden queries. Always be intentional: don't load 1000 posts when you only need the user's name. The N+1 problem (querying each relation separately in a loop) is the #1 performance killer."},
    {t: 'Self-Relations', d: "A table can reference itself. Example: an Employee has a managerId pointing to another Employee. Or a Comment has a parentId for threaded replies. In Prisma, define two relation fields on the same model. Self-relations power org charts, category trees, threaded comments, and file/folder hierarchies."},
    {t: 'Querying Relations with Prisma', d: "Prisma makes relation queries readable. Find user with posts: prisma.user.findUnique({ where: { id }, include: { posts: true } }). Filter by relation: prisma.post.findMany({ where: { author: { email: { contains: 'gmail' } } } }). Nested creates: prisma.user.create({ data: { name: 'Ali', posts: { create: [{ title: 'Hello' }] } } })."}
  ],
  whatIs: "Database relationships define how tables (or collections) connect to each other. Instead of cramming everything into one giant table, you split data into related tables — Users, Posts, Comments — and link them with foreign keys. This normalization reduces duplication, maintains consistency, and enables powerful queries like 'find all posts by users who joined this month'. Every real application depends on well-designed relationships.",
  realWorld: "Twitter: Users → Tweets (one-to-many), Users ↔ Users via Follows (many-to-many). E-commerce: Products → Reviews (one-to-many), Orders ↔ Products via OrderItems (many-to-many with quantity). GitHub: Users → Repos (one-to-many), Repos ↔ Users via Stars (many-to-many). Every app you use daily is a web of interconnected data relationships.",
  code: `// ── Prisma Schema: All Relationship Types ──

// 1:1 — User has one Profile
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  profile   Profile? // optional 1:1
  posts     Post[]   // 1:N
  courses   Enrollment[] // M:N via explicit join
  createdAt DateTime @default(now())
}

model Profile {
  id     String @id @default(cuid())
  bio    String?
  avatar String?
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId String @unique // @unique makes it 1:1
}

// 1:N — User has many Posts
model Post {
  id       String    @id @default(cuid())
  title    String
  content  String
  author   User      @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId String
  comments Comment[] // 1:N (Post has many Comments)
}

// Self-relation — Comment replies
model Comment {
  id       String    @id @default(cuid())
  text     String
  post     Post      @relation(fields: [postId], references: [id])
  postId   String
  parent   Comment?  @relation("Replies", fields: [parentId], references: [id])
  parentId String?
  replies  Comment[] @relation("Replies")
}

// M:N — Users enroll in Courses (explicit join table)
model Course {
  id          String       @id @default(cuid())
  title       String
  enrollments Enrollment[]
}

model Enrollment {
  id         String   @id @default(cuid())
  user       User     @relation(fields: [userId], references: [id])
  userId     String
  course     Course   @relation(fields: [courseId], references: [id])
  courseId    String
  enrolledAt DateTime @default(now())
  grade      Float?

  @@unique([userId, courseId]) // prevent duplicate enrollment
}

// ── Querying Relations ──
// Eager load user with posts and profile
const user = await prisma.user.findUnique({
  where: { id: userId },
  include: {
    profile: true,
    posts: { orderBy: { createdAt: 'desc' }, take: 10 },
  },
});

// Nested create: user + profile + first post in one query
const newUser = await prisma.user.create({
  data: {
    email: 'ali@example.com',
    name: 'Ali',
    profile: { create: { bio: 'Full-stack dev' } },
    posts: { create: [{ title: 'My First Post', content: 'Hello!' }] },
  },
  include: { profile: true, posts: true },
});

// Filter by relation
const gmailPosts = await prisma.post.findMany({
  where: { author: { email: { endsWith: '@gmail.com' } } },
  include: { author: { select: { name: true } } },
});`,
  funFact: "Edgar F. Codd invented the relational database model in 1970 while working at IBM. His paper 'A Relational Model of Data for Large Shared Data Banks' was so revolutionary that IBM initially resisted it because it would compete with their existing database product (IMS). Oracle built the first commercial relational database instead. Codd's ideas now power virtually every app on Earth.",
  quiz: [
    {q: "In a one-to-many relationship between User and Post, which table holds the foreign key?", opts: ["The User table", "The Post table (many side) holds the userId foreign key", "Both tables hold foreign keys", "Neither — the ORM handles it magically"], ans: 1},
    {q: "What makes a one-to-one relationship different from one-to-many in Prisma?", opts: ["You use a different decorator", "The foreign key column has a @unique constraint, ensuring only one linked record", "One-to-one doesn't use foreign keys", "You must use a join table"], ans: 1},
    {q: "What is the N+1 query problem?", opts: ["Having N+1 database tables", "Querying a list of N items, then making N additional queries to fetch each item's relations — solved by eager loading with 'include'", "A database that can only handle N+1 connections", "An error that occurs with more than N+1 joins"], ans: 1},
    {q: "Why would you use an explicit join table instead of Prisma's implicit many-to-many?", opts: ["Explicit is always required", "When you need extra fields on the relationship, like enrolledAt date or grade", "Implicit join tables are slower", "Prisma doesn't support implicit M:N"], ans: 1},
    {q: "What does 'onDelete: Cascade' mean on a relation?", opts: ["It prevents the parent from being deleted", "When the parent record is deleted, all related child records are automatically deleted too", "It creates a backup before deleting", "It sets the foreign key to null"], ans: 1}
  ],
  challenge: "Design a database schema for a blog platform. You need: Users, Posts (one-to-many from User), Comments with threaded replies (self-relation), Tags with many-to-many to Posts, and a Profile (one-to-one with User). Write the full Prisma schema, then write queries to: 1) Create a user with a profile, 2) Find all posts by a user with their comments, 3) Find all posts with a specific tag.",
  resources: [
    {type: 'docs', title: 'Prisma Relations', url: 'https://www.prisma.io/docs/orm/prisma-schema/data-model/relations', source: 'Prisma'},
    {type: 'docs', title: 'Prisma One-to-Many', url: 'https://www.prisma.io/docs/orm/prisma-schema/data-model/relations/one-to-many-relations', source: 'Prisma'},
    {type: 'video', title: 'Database Design Course', url: 'https://www.youtube.com/watch?v=ztHopE5Wnpc', source: 'freeCodeCamp'}
  ],
  eli5: "Imagine you have three toy boxes: one for action figures, one for vehicles, and one for accessories. Each action figure can ride ONE vehicle (one-to-one). Each action figure can have MANY accessories like hats and swords (one-to-many). And accessories can be shared between figures — the sword can go to any figure, and each figure can borrow any accessory (many-to-many). Database relationships are how we organize which toys belong together!",
  codeWalkthrough: [
    "Comment: Prisma Schema with all relationship types",
    "",
    "Comment: 1:1 relationship section",
    "User model — the central entity",
    "Auto-generated cuid ID",
    "Unique email field",
    "User name",
    "Optional one-to-one Profile relation",
    "One-to-many: user has many posts",
    "Many-to-many: user enrollments via join table",
    "Creation timestamp",
    "Close User model",
    "",
    "Profile model — 1:1 with User",
    "Profile ID",
    "Optional bio text",
    "Optional avatar URL",
    "@relation to User with cascading delete",
    "@unique on userId makes this 1:1 (not 1:N)",
    "Close Profile model",
    "",
    "Comment: 1:N relationship section",
    "Post model — many posts belong to one user",
    "Post ID",
    "Post title",
    "Post content",
    "@relation to User (author) with cascade delete",
    "Foreign key: authorId references User.id",
    "One-to-many: post has many comments",
    "Close Post model",
    "",
    "Comment: Self-relation for threaded replies",
    "Comment model with self-referencing relation",
    "Comment ID",
    "Comment text content",
    "Relation to parent Post",
    "Foreign key to Post",
    "Optional parent comment (null = top-level)",
    "Optional parentId for threading",
    "Child replies via named 'Replies' relation",
    "Close Comment model",
    "",
    "Comment: M:N explicit join table section",
    "Course model",
    "Course ID",
    "Course title",
    "Link to enrollments",
    "Close Course model",
    "",
    "Enrollment — explicit join table for User and Course",
    "Enrollment ID",
    "Relation to User",
    "Foreign key: userId",
    "Relation to Course",
    "Foreign key: courseId",
    "Extra field: enrollment date (only with explicit join)",
    "Extra field: optional grade",
    "",
    "@@unique prevents duplicate enrollment",
    "Close Enrollment model",
    "",
    "Comment: Querying Relations section",
    "Comment: Eager loading example",
    "findUnique to get a single user by ID",
    "where clause with userId",
    "include eagerly loads related data",
    "Include profile (1:1)",
    "Include posts sorted by newest, limit 10",
    "Close include",
    "Close findUnique query",
    "",
    "Comment: Nested create example",
    "Create user + profile + post in one transaction",
    "data object with user fields",
    "User email",
    "User name",
    "Nested create: profile created alongside user",
    "Nested create: first post created alongside user",
    "Close data",
    "Include created relations in response",
    "Close create query",
    "",
    "Comment: Filter by relation example",
    "Find posts where author matches a condition",
    "where: filter by author's email ending",
    "include author but select only name field",
    "Close filter-by-relation query"
  ],
  bugChallenge: {
    code: "model User {\n  id    String @id @default(cuid())\n  email String @unique\n  posts Post[]\n}\n\nmodel Post {\n  id       String @id @default(cuid())\n  title    String\n  author   User   @relation(fields: [authorId], references: [id])\n  authorId String\n}\n\n// Query\nconst users = await prisma.user.findMany();\nfor (const user of users) {\n  const posts = await prisma.post.findMany({ where: { authorId: user.id } });\n  console.log(user.email, posts.length);\n}",
    hint: "The schema is fine, but the query has a classic performance problem...",
    answer: "This is the N+1 problem! For 100 users, this makes 101 queries (1 for users + 100 for posts). Fix: use a single query with include — const users = await prisma.user.findMany({ include: { _count: { select: { posts: true } } } }); This fetches everything in one query. Even better for just counts, use groupBy or _count."
  },
  difficulty: 'intermediate',
  prereqs: [4, 18, 19]
}
];
