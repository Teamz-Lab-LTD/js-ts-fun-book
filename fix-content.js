const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'courses/js-ts-fun-book/data.js');
let code = fs.readFileSync(file, 'utf8');

// ============================================================
// 1. FIX CLICHE ANALOGIES
// ============================================================

// L5: recipe → GPS navigator
code = code.replace(
  `analogy:"A function is a recipe. You write it ONCE, use it MANY times. Arrow functions are just a shorter way to write recipes. Both do the same thing — arrow functions just have less boilerplate!"`,
  `analogy:"A function is like a vending machine — you press a button (pass arguments), gears turn inside (logic runs), and a snack drops out (return value). Arrow functions are the sleek, touchscreen version of the same machine. Same snacks, less bulk!"`
);

// L8: blueprint → 3D printer mold
code = code.replace(
  `analogy:"A class is a BLUEPRINT. A car blueprint says 'every car will have wheels, an engine, a drive() method.' Objects are the actual cars built from that blueprint. OOP groups data (properties) and actions (methods) together!"`,
  `analogy:"A class is like a 3D printer mold. The mold defines the shape — every figure that comes out has the same structure (properties) and movable joints (methods). Objects are the printed figures. Change the mold, and every future figure changes. OOP is designing great molds!"`
);

// L11: LEGO → TV remote
code = code.replace(
  `analogy:"React is like building with LEGO blocks. Each component is a LEGO piece — a Button, a Card, a NavBar. Snap them together to build your page. Want to change the header? Just swap that LEGO piece. The rest stays untouched!"`,
  `analogy:"React is like a TV studio control room. Each screen (component) shows a different camera feed — weather, sports ticker, breaking news banner. The director (React) decides which screens update and when. Swap the weather panel for traffic? Only that screen changes — the rest keep running live!"`
);

// L22: empty container → cookie cutter
code = code.replace(
  `analogy:"Generics are like empty containers — you decide what goes INSIDE later. ApiResponse&lt;User&gt; is a container holding User data. ApiResponse&lt;Post[]&gt; is the same container holding Posts. Same container, different contents!"`,
  `analogy:"Generics are like a universal adapter plug you take on international trips. The adapter shape (generic type) stays the same, but you slot in different country prongs (concrete types) depending on where you are. ApiResponse&lt;User&gt; is the adapter configured for the User outlet. Same adapter, any country!"`
);

// L41: LEGO starter kit → also cliche
code = code.replace(
  `analogy: "Installing NestJS is like buying a LEGO starter kit. The box comes with a base plate (project scaffold), instruction manual (CLI), and basic bricks (modules, controllers, services). You don't have to find each piece separately — open the box and start building immediately!"`,
  `analogy: "Installing NestJS is like moving into a fully furnished apartment. The CLI hands you the keys, and inside you find rooms already labeled (modules), a reception desk (controller), a workshop (service), and utilities hooked up (config). You don't hunt for furniture — just unpack your ideas and start living!"`
);

// ============================================================
// 2. FIX GENERIC "INSTALL AND TRY" CHALLENGES
// ============================================================

// L13: Install React Query
code = code.replace(
  `challenge:"Install React Query in a Vite project and fetch data from a public API like https://jsonplaceholder.typicode.com/users. Add loading and error states!"`,
  `challenge:"Build a 'Pokemon Card Viewer' — fetch data from pokeapi.co and display a card with the Pokemon's name, image, types, and stats. Add a search bar that filters by name, a loading skeleton, and an error state that shows a funny 'Pokemon escaped!' message."`
);

// L18: Install MongoDB Compass
code = code.replace(
  `challenge:"Install MongoDB Compass (free GUI). Create a database, add a collection called 'users', and insert two documents with DIFFERENT fields. Notice how MongoDB doesn't complain!"`,
  `challenge:"Design a schema for a movie database: each movie has a title, year, genres (array), and a nested 'ratings' object with { imdb: number, rottenTomatoes: number }. Insert 5 movies, then write a query to find all movies after 2020 with an IMDB rating above 7. Can you sort them by year descending?"`
);

// L19: Run prisma init
code = code.replace(
  `challenge:"Run \`npx prisma init\` in a project. Define a User model in schema.prisma, then run \`npx prisma generate\`. Open node_modules/.prisma/client and look at the generated types!"`,
  `challenge:"Design a Prisma schema for an online bookstore: a Book model (title, isbn, price, publishedAt), an Author model (name, bio), and a Publisher model. Set up the relationships — an author can write many books, a publisher publishes many books, but each book has exactly one publisher. Run migrate and write a query that finds all books by a specific author, sorted by price."`
);

// L23: Run Redis in Docker
code = code.replace(
  `challenge:"Run Redis in Docker: \`docker run -p 6379:6379 redis:7-alpine\`. Then use \`redis-cli\` to SET and GET values. Try: \`SET greeting 'Hello!' EX 10\` — it disappears after 10 seconds!"`,
  `challenge:"Build a rate limiter using Redis: track how many API requests each user makes per minute. Use INCR to count requests and EXPIRE to reset the counter after 60 seconds. If a user exceeds 100 requests, return a 429 Too Many Requests response. Bonus: use a Redis sorted set to build a real-time leaderboard!"`
);

// L24: Set up a Bull queue
code = code.replace(
  `challenge:"Set up a Bull queue in NestJS using @nestjs/bull. Create a processor that logs 'Processing job!' and add a job to it from a controller. Watch the terminal — the job runs separately!"`,
  `challenge:"Design a job pipeline for an e-commerce order: when a user places an order, queue 3 sequential jobs — (1) validate inventory and reserve stock, (2) charge payment via Stripe, (3) send confirmation email. If step 2 fails, add a compensating job to release the reserved stock. How would you handle retries for each step differently?"`
);

// L28: Install socket.io
code = code.replace(
  `challenge:"Install socket.io and socket.io-client. Create a simple chat where messages appear in real-time across two browser tabs. It's magical when it works! ✨"`,
  `challenge:"Build a collaborative 'cursor tracker' — when a user moves their mouse on the page, broadcast their cursor position and username to all other connected users. Display colored dots for each user's cursor in real-time. Add a 'user is typing...' indicator that disappears after 2 seconds of inactivity. How would you handle 50+ users without flooding the network?"`
);

// L31: Install Docker Desktop
code = code.replace(
  `challenge:"Install Docker Desktop, then run: \`docker run -d -p 27017:27017 mongo:7\` — congratulations, you have a MongoDB database running in 10 seconds! Try connecting to it with MongoDB Compass."`,
  `challenge:"Write a Dockerfile for a NestJS app that uses multi-stage builds: Stage 1 installs ALL dependencies and compiles TypeScript. Stage 2 copies ONLY the compiled JS and production node_modules. Compare the image sizes of single-stage vs multi-stage. Can you get the final image under 150MB? Hint: use node:20-alpine as the base."`
);

// L32: Set up GitHub Actions
code = code.replace(
  `challenge:"Set up a GitHub Actions workflow that runs your tests on every push. Start simple: checkout code, install deps, run tests. Watch the green checkmark appear!"`,
  `challenge:"Design a CI/CD pipeline with 3 stages: (1) Lint + Type-check (fail fast on code quality), (2) Unit tests + Integration tests in parallel, (3) Build Docker image and deploy to staging — but ONLY on the main branch. Add a Slack notification that reports whether the pipeline passed or failed. Draw the pipeline as a flowchart first!"`
);

// L36: Create a new NestJS + React project
code = code.replace(
  `challenge:"Right now — TODAY — create a new NestJS + React project. Build even the simplest thing. A single endpoint that returns your name. The hardest part is starting. You've got this! 💪"`,
  `challenge:"Pick ONE project from this lesson and build it in 7 days. Day 1: design the database schema and API endpoints on paper. Day 2-3: build the NestJS backend with auth. Day 4-5: build the React frontend. Day 6: add one 'wow' feature (real-time, email notifications, or file uploads). Day 7: deploy with Docker. Document your journey — what broke, what you learned, what surprised you."`
);

// ============================================================
// VERIFY
// ============================================================
const checks = [
  ['vending machine', 'L5 analogy'],
  ['3D printer mold', 'L8 analogy'],
  ['TV studio control room', 'L11 analogy'],
  ['universal adapter plug', 'L22 analogy'],
  ['fully furnished apartment', 'L41 analogy'],
  ['Pokemon Card Viewer', 'L13 challenge'],
  ['movie database', 'L18 challenge'],
  ['online bookstore', 'L19 challenge'],
  ['rate limiter', 'L23 challenge'],
  ['job pipeline', 'L24 challenge'],
  ['cursor tracker', 'L28 challenge'],
  ['multi-stage builds', 'L31 challenge'],
  ['3 stages', 'L32 challenge'],
  ['Pick ONE project', 'L36 challenge'],
];

let allGood = true;
for (const [needle, label] of checks) {
  if (!code.includes(needle)) {
    console.error(`FAILED: ${label} — "${needle}" not found`);
    allGood = false;
  } else {
    console.log(`OK: ${label}`);
  }
}

if (allGood) {
  fs.writeFileSync(file, code);
  console.log('\nAll replacements successful! File saved.');
} else {
  console.error('\nSome replacements failed. File NOT saved.');
  process.exit(1);
}
