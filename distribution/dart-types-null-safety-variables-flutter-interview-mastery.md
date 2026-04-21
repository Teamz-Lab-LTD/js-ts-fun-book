---
title: "Dart Types, Null Safety & Variables"
slug: dart-types-null-safety-variables-flutter-interview-mastery
canonical_url: https://learn.teamzlab.com/lessons/flutter-interview-mastery/01-dart-types-null-safety-variables.html
language: en
tags: ["dartadvanced", "flutterwidgets", "bloccubit", "programming"]
description: "Dart's type system with null safety is the foundation of every Flutter app. Variables must have types (explicit or inferred), and null safety ensures you…"
priority: high
series: "Flutter Interview Mastery: Zero to Senior in 77 Lessons"
seo_keywords: ["dart types, null safety & variables", "dart advanced", "flutter widgets", "bloc/cubit", "dart types, null safety & variables tutorial", "free dart types, null safety & variables course"]
aso_keywords: []
competition: "medium"
source_lesson: 1
source_course: flutter-interview-mastery
---
> **TL;DR:** Dart's type system with null safety is the foundation of every Flutter app. Variables must have types (explicit or inferred), and null safety ensures you…

## The analogy

*Think of Dart types like labeled containers in a warehouse. A container labeled 'Fragile Glass' (String?) might be empty (null) or hold glass. Null safety is the warehouse rule that forces you to check if a container is empty before reaching in — preventing the classic 'I grabbed nothing and dropped it' crash.*

## What is it, really?

Dart's type system with null safety is the foundation of every Flutter app. Variables must have types (explicit or inferred), and null safety ensures you handle the absence of values explicitly with ? syntax rather than crashing at runtime. final/const/late control mutability and initialization timing.

## Why it matters in the real world

In a real-time collaboration app, null safety prevents crashes when a user's profile hasn't loaded yet. Instead of crashing on user.name when user is null, the compiler forces you to handle it: user?.name ?? 'Loading...'. This pattern appears in every production Flutter app.

## The 10 things you actually need to know

**Dart's Type System** — Dart is statically typed with sound null safety. Every variable has a type known at compile time. The type checker prevents you from assigning a String to an int variable. In interviews, explain that Dart's type system catches bugs before runtime — unlike JavaScript where '5' + 3 = '53'.

**Null Safety — The Billion Dollar Fix** — Before null safety, any variable could be null, causing crashes. Since Dart 2.12+, variables are non-nullable by default. String name = 'hello' can NEVER be null. String? name means it CAN be null. This eliminates entire categories of production crashes.

**final vs const vs late** — final: assigned once at runtime, can't change. const: assigned at compile time, deeply immutable. late: promises to initialize before first use, useful for lazy init. Interview trap: const creates canonical instances (identical objects), final does not.

**Type Inference with var and final** — Dart infers types: var name = 'Emon' is inferred as String. final count = 42 is inferred as int. You don't always need explicit types. But in function signatures and class fields, explicit types improve readability and are expected in production code.

**The Null-Aware Operators** — ?. (null-aware access), ?? (null coalesce), ??= (null-aware assign), ?.. (null-aware cascade). These are interview favorites. user?.name ?? 'Guest' means: if user is not null, get name; if name is null, use 'Guest'.

**The ! Operator (Bang)** — The ! operator tells Dart 'I guarantee this is not null.' String value = nullableString!; If it IS null, you get a runtime crash. Interviewers test whether you know when ! is safe vs dangerous. Rule: avoid ! except when you have external proof of non-nullness.

**Type Promotion and Smart Casts** — When you check if (value != null), Dart promotes the type from String? to String inside that block. This is flow-sensitive type promotion. It also works with 'is' checks: if (obj is String) { obj.length; } — no cast needed.

**num, int, double Hierarchy** — num is the parent of both int and double. int has no decimal, double always has one. Division with / always returns double. Use ~/ for integer division. Interview question: 5 / 2 = 2.5 (double), 5 ~/ 2 = 2 (int).

**String Interpolation & Multi-line** — Use $variable or ${expression} inside strings. Multi-line strings use triple quotes. Raw strings (r'...') ignore escape characters. In production, prefer interpolation over concatenation for readability and performance.

**dynamic vs Object vs Object?** — Object? is the top of the type hierarchy (everything, including null). Object is everything except null. dynamic disables type checking entirely — avoid it. Interview trap: dynamic allows any method call at compile time but crashes at runtime if the method doesn't exist.

## Working code example

```javascript
// Dart Types & Null Safety — Interview Essentials

// Non-nullable by default (Dart 2.12+)
String name = 'Flutter Dev';     // CANNOT be null
// name = null;                   // Compile error!

// Nullable with ?
String? nickname;                 // CAN be null
nickname = null;                  // OK
nickname = 'Coder';               // Also OK

// final vs const vs late
final DateTime now = DateTime.now();     // Runtime constant
const double pi = 3.14159;               // Compile-time constant
late final String config;                // Initialized before first use

// late with lazy initialization
late final String heavyValue = _computeExpensiveValue();

// Null-aware operators
String display = nickname ?? 'Anonymous';        // ?? null coalesce
int? length = nickname?.length;                  // ?. null-aware access
nickname ??= 'DefaultNick';                      // ??= assign if null

// Type promotion (flow analysis)
void greet(String? input) {
  if (input == null) return;
  // Dart promotes input from String? to String here
  print(input.toUpperCase());  // No ! needed
}

// The dangerous ! operator
String forced = nickname!;  // Crashes if null!

// num hierarchy
num value = 42;         // Can hold int or double
int whole = 5 ~/ 2;     // 2 (integer division)
double half = 5 / 2;    // 2.5 (always double)

// String interpolation
String greeting = 'Hello, $name! Length: ${name.length}';
String multiLine = '''
  This is a
  multi-line string
''';

// dynamic vs Object?
dynamic anything = 'hello';
anything = 42;           // OK — no type safety
anything.noSuchMethod(); // Compiles! Crashes at runtime.

Object? safe = 'hello';
// safe.length;          // Compile error — must check type first
if (safe is String) {
  print(safe.length);    // OK — type promoted to String
}
```

**Line-by-line breakdown:**

1. Declaring a non-nullable String — this variable can NEVER hold null
2. Attempting to assign null would cause a compile error — this is null safety in action
3. Declaring a nullable String? — the question mark means null is allowed
4. Assigning null is perfectly fine for nullable types
5. Reassigning to a real value is also fine
6. final creates a runtime constant — DateTime.now() runs when the line executes
7. const creates a compile-time constant — the value must be known at compile time
8. late tells Dart this will be initialized before first use
9. late with an initializer — the function only runs when heavyValue is first accessed
10. The ?? operator provides a fallback value when the left side is null
11. The ?. operator safely accesses a property — returns null if the object is null
12. The ??= operator assigns only if the current value is null
13. Type promotion: after the null check, Dart knows input is non-null String
14. The ! operator forces a nullable to non-nullable — crashes if actually null

## Spot the bug

```
void processUser(String? name) {
  print(name.toUpperCase());
  
  final List<int> numbers = const [1, 2, 3];
  numbers.add(4);
  
  late String greeting;
  print(greeting);
}
```

<details><summary>Hint</summary>

Three bugs: null safety violation, const immutability, and late initialization...

</details>

<details><summary>Answer</summary>

Bug 1: name is String? but .toUpperCase() is called without null check — use name?.toUpperCase() or add a null guard. Bug 2: numbers is a const list, so .add(4) throws at runtime — remove const or use a mutable list. Bug 3: greeting is late but never assigned before print — assign it first or you get a LateInitializationError.

</details>

## Explain it like I'm five

Imagine you have a lunchbox. Null safety is like a rule that says: before you eat from ANY lunchbox, you MUST check if there's food inside. Without this rule, you'd bite into an empty box and break your teeth. With it, you always check first: 'Is there food? Yes? Great, eat it. No? Get something else.'

## Fun fact

Tony Hoare, who invented null references in 1965, called it his 'billion dollar mistake' because of all the crashes it caused. Dart's null safety was specifically designed to fix this mistake — and it works. Apps with null safety have significantly fewer null-related crashes in production.

## Try it yourself

Create a User class with non-nullable name and email fields, a nullable phone field, and a method displayInfo() that uses null-aware operators to show 'No phone' when phone is null. Use final for immutable fields.

---

## Want the interactive version?

This article is lesson 1 of [**Flutter Interview Mastery: Zero to Senior in 77 Lessons**](https://learn.teamzlab.com/c/flutter-interview-mastery.html) — a **free, interactive course** with quizzes, a code playground, spaced-repetition flashcards, and 76 more lessons. No signup required.

- 📖 [Open this lesson with quizzes + code playground](https://learn.teamzlab.com/lessons/flutter-interview-mastery/01-dart-types-null-safety-variables.html)
- 🎓 [See the full 77-lesson curriculum](https://learn.teamzlab.com/c/flutter-interview-mastery.html)
- 🏠 [All 16 free courses on Teamz Lab Learning](https://learn.teamzlab.com/)

## Related lessons from this course

- [Collections, Iterables & Equality](https://learn.teamzlab.com/lessons/flutter-interview-mastery/02-collections-iterables-equality.html) — Data Structures That Show Up in Every Interview
- [Futures, async/await & the Event Loop](https://learn.teamzlab.com/lessons/flutter-interview-mastery/03-futures-asyncawait-the-event-loop.html) — The #1 Most-Asked Dart Interview Topic
- [Streams, StreamController & Operators](https://learn.teamzlab.com/lessons/flutter-interview-mastery/04-streams-streamcontroller-operators.html) — Real-time Data Flows — From Chat to Sensors

---

*Built by [Teamz Lab](https://teamzlab.com) — we build production mobile and web apps for clients worldwide. This free course is how we give back. Flutter Interview Mastery: Zero to Senior in 77 Lessons's [interactive version is here](https://learn.teamzlab.com/c/flutter-interview-mastery.html).*
