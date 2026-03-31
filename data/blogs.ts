export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  featured: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
  title: "Getting Started with Flutter: A Complete Guide for Beginners in 2026",
  excerpt: "Learn Flutter from scratch! This comprehensive guide covers everything you need to know about Flutter development, from setup to building your first cross-platform app.",
  content: `
    <h1>Getting Started with Flutter: A Complete Guide for Beginners in 2026</h1>
    
    <p>Flutter has revolutionized cross-platform mobile development since its release. As a QA Engineer and Mobile Developer, I've worked extensively with Flutter, and I'm excited to share this comprehensive guide to help you get started.</p>
    
    <h2>What is Flutter?</h2>
    <p>Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Unlike other cross-platform frameworks, Flutter provides its own rendering engine (Skia), which means you get consistent UI across all platforms without relying on native components.</p>
    
    <h2>Why Choose Flutter?</h2>
    <ul>
      <li><strong>Single Codebase</strong> - Write once, run on iOS, Android, Web, Windows, macOS, and Linux</li>
      <li><strong>Hot Reload</strong> - See changes instantly without losing state</li>
      <li><strong>Beautiful UI</strong> - Rich set of customizable widgets following Material Design and Cupertino</li>
      <li><strong>Excellent Performance</strong> - Compiled to native ARM code for 60/120fps performance</li>
      <li><strong>Strong Community</strong> - Large ecosystem of packages and active community support</li>
      <li><strong>Google Support</strong> - Backed by Google with regular updates and improvements</li>
    </ul>
    
    <h2>Setting Up Flutter Development Environment</h2>
    
    <h3>Step 1: System Requirements</h3>
    <ul>
      <li>Windows 10/11, macOS, or Linux</li>
      <li>8GB RAM minimum (16GB recommended)</li>
      <li>10GB free disk space</li>
      <li>Android Studio / VS Code</li>
    </ul>
    
    <h3>Step 2: Download and Install Flutter SDK</h3>
    <ol>
      <li>Go to <a href="https://docs.flutter.dev/get-started/install">flutter.dev/docs/get-started/install</a></li>
      <li>Download the latest stable version for your OS</li>
      <li>Extract the downloaded zip file</li>
      <li>Add Flutter to your PATH environment variable</li>
    </ol>
    
    <h3>Step 3: Run Flutter Doctor</h3>
    <pre><code>flutter doctor</code></pre>
    <p>This command checks your environment and displays a report of the status of your Flutter installation. It will identify any missing dependencies you need to install.</p>
    
    <h3>Step 4: Install Required Dependencies</h3>
    <ul>
      <li>Install Android Studio for Android development</li>
      <li>Install Xcode (macOS only) for iOS development</li>
      <li>Install VS Code or IntelliJ/Android Studio with Flutter plugins</li>
    </ul>
    
    <h2>Your First Flutter App</h2>
    
    <h3>Create a New Project</h3>
    <pre><code>flutter create my_first_app
cd my_first_app
flutter run</code></pre>
    
    <h3>Understanding the Project Structure</h3>
    <pre><code>my_first_app/
├── android/          # Android-specific code
├── ios/              # iOS-specific code
├── lib/              # Dart source code
│   └── main.dart     # Entry point of the app
├── test/             # Test files
├── pubspec.yaml      # Dependencies and assets
└── web/              # Web-specific code</code></pre>
    
    <h3>Writing Your First Widget</h3>
    <p>Open <code>lib/main.dart</code> and replace the content:</p>
    <pre><code>import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My First Flutter App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Welcome to Flutter'),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(
              Icons.flutter_dash,
              size: 80,
              color: Colors.blue,
            ),
            const SizedBox(height: 20),
            const Text(
              'Hello, Flutter!',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 10),
            Text(
              'You have pressed the button \${_counter} times',
              style: const TextStyle(fontSize: 16),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Add your logic here
              },
              child: const Text('Click Me'),
            ),
          ],
        ),
      ),
    );
  }
}</code></pre>
    
    <h2>Understanding Flutter Widgets</h2>
    <p>Everything in Flutter is a widget! Widgets are the building blocks of your UI.</p>
    
    <h3>Types of Widgets</h3>
    <ul>
      <li><strong>StatelessWidget</strong> - Widgets that don't change state (static content)</li>
      <li><strong>StatefulWidget</strong> - Widgets that can change state dynamically</li>
      <li><strong>Layout Widgets</strong> - Row, Column, Stack, Container, SizedBox</li>
      <li><strong>Input Widgets</strong> - TextField, Checkbox, Radio, Switch</li>
      <li><strong>Display Widgets</strong> - Text, Image, Icon, Card, ListTile</li>
    </ul>
    
    <h3>Common Layout Widgets Example</h3>
    <pre><code>// Row - Horizontal layout
Row(
  children: [
    Icon(Icons.star),
    const SizedBox(width: 8),
    Text('Star'),
  ],
)

// Column - Vertical layout
Column(
  children: [
    Text('Title'),
    const SizedBox(height: 8),
    Text('Description'),
  ],
)

// Stack - Overlapping layout
Stack(
  children: [
    Container(width: 100, height: 100, color: Colors.red),
    Positioned(
      top: 10,
      left: 10,
      child: Text('Overlay'),
    ),
  ],
)</code></pre>
    
    <h2>State Management in Flutter</h2>
    <p>State management is crucial for building scalable Flutter apps. Here are the most popular approaches:</p>
    
    <h3>1. setState() (Beginner)</h3>
    <pre><code>class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State&lt;CounterWidget&gt; {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: \$_counter'),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text('Increment'),
        ),
      ],
    );
  }
}</code></pre>
    
    <h3>2. Provider (Intermediate)</h3>
    <pre><code>// Add to pubspec.yaml
// dependencies:
//   provider: ^6.0.0

import 'package:provider/provider.dart';

class CounterModel extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

// In main.dart
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}

// In your widget
@override
Widget build(BuildContext context) {
  var counter = Provider.of&lt;CounterModel&gt;(context);
  return Text('Count: \${counter.count}');
}</code></pre>
    
    <h2>Adding Dependencies and Assets</h2>
    <p>Update your <code>pubspec.yaml</code> file:</p>
    <pre><code>dependencies:
  flutter:
    sdk: flutter
  http: ^1.1.0        # For API calls
  provider: ^6.0.0    # For state management
  image_picker: ^1.0.0 # For camera/gallery access

flutter:
  uses-material-design: true
  
  assets:
    - assets/images/
    - assets/fonts/
  
  fonts:
    - family: CustomFont
      fonts:
        - asset: assets/fonts/CustomFont-Regular.ttf</code></pre>
    
    <h2>Making API Calls</h2>
    <pre><code>import 'package:http/http.dart' as http;
import 'dart:convert';

Future&lt;List&lt;dynamic&gt;&gt; fetchPosts() async {
  final response = await http.get(
    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
  );

  if (response.statusCode == 200) {
    return json.decode(response.body);
  } else {
    throw Exception('Failed to load posts');
  }
}

// Using FutureBuilder
FutureBuilder(
  future: fetchPosts(),
  builder: (context, snapshot) {
    if (snapshot.hasData) {
      return ListView.builder(
        itemCount: snapshot.data!.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(snapshot.data![index]['title']),
          );
        },
      );
    } else if (snapshot.hasError) {
      return Text('Error: \${snapshot.error}');
    }
    return const CircularProgressIndicator();
  },
)</code></pre>
    
    <h2>Testing Flutter Apps</h2>
    <p>Testing is crucial for quality assurance. Flutter supports three types of tests:</p>
    
    <h3>Unit Tests</h3>
    <pre><code>import 'package:test/test.dart';

void main() {
  test('Counter value should be incremented', () {
    final counter = Counter();
    counter.increment();
    expect(counter.value, 1);
  });
}</code></pre>
    
    <h3>Widget Tests</h3>
    <pre><code>testWidgets('Counter increments smoke test', (WidgetTester tester) async {
  await tester.pumpWidget(const MyApp());

  expect(find.text('0'), findsOneWidget);
  expect(find.text('1'), findsNothing);

  await tester.tap(find.byIcon(Icons.add));
  await tester.pump();

  expect(find.text('0'), findsNothing);
  expect(find.text('1'), findsOneWidget);
});</code></pre>
    
    <h3>Integration Tests</h3>
    <pre><code>test('complete app flow', () async {
  final driver = FlutterDriver.attach(await FlutterDriver.connect());
  await driver.tap(find.byValueKey('increment'));
  await driver.waitFor(find.text('1'));
  await driver.close();
});</code></pre>
    
    <h2>Best Practices for Flutter Development</h2>
    <ul>
      <li><strong>Use const widgets</strong> whenever possible for performance</li>
      <li><strong>Extract widgets</strong> into separate classes when they become complex</li>
      <li><strong>Follow naming conventions</strong> - PascalCase for classes, camelCase for variables</li>
      <li><strong>Use meaningful names</strong> for variables and functions</li>
      <li><strong>Keep widgets small and focused</strong> on a single responsibility</li>
      <li><strong>Use themes</strong> for consistent styling across the app</li>
      <li><strong>Implement error handling</strong> and loading states</li>
      <li><strong>Write tests</strong> for critical functionality</li>
      <li><strong>Optimize images</strong> and assets for better performance</li>
      <li><strong>Use the latest stable version</strong> of Flutter and dependencies</li>
    </ul>
    
    <h2>Common Flutter Interview Questions for QA Engineers</h2>
    <ol>
      <li><strong>How do you test Flutter apps?</strong> - Unit tests, widget tests, integration tests, and golden tests</li>
      <li><strong>What is the difference between hot reload and hot restart?</strong> - Hot reload preserves state, hot restart resets everything</li>
      <li><strong>How does Flutter achieve 60fps performance?</strong> - Skia rendering engine, compiled to native ARM code, and efficient widget rebuilding</li>
      <li><strong>What is the widget tree and element tree?</strong> - Widget tree defines the UI, element tree manages the lifecycle</li>
      <li><strong>How do you handle async operations?</strong> - FutureBuilder, StreamBuilder, or manual state management</li>
    </ol>
    
    <h2>Conclusion</h2>
    <p>Flutter is an excellent choice for cross-platform mobile development. With its hot reload, beautiful widgets, and excellent performance, it's no wonder that more and more companies are adopting Flutter for their mobile apps.</p>
    
    <p>As a QA Engineer, understanding Flutter is valuable for testing Flutter applications effectively. You can use tools like <strong>Flutter Driver</strong> for integration testing, <strong>flutter_test</strong> for widget testing, and <strong>golden tests</strong> for visual regression testing.</p>
    
    <blockquote>
      💡 <strong>Pro Tip:</strong> Start with small projects, experiment with different widgets, and gradually learn state management. The Flutter community is very supportive, so don't hesitate to ask questions on Stack Overflow or the Flutter Discord channel!
    </blockquote>
    
    <h2>Resources for Learning Flutter</h2>
    <ul>
      <li><a href="https://docs.flutter.dev/">Official Flutter Documentation</a></li>
      <li><a href="https://flutter.dev/learn">Flutter Learning Path</a></li>
      <li><a href="https://pub.dev/">Pub.dev - Flutter Packages</a></li>
      <li><a href="https://www.youtube.com/c/flutterdev">Flutter YouTube Channel</a></li>
      <li><a href="https://github.com/flutter/samples">Flutter Sample Apps on GitHub</a></li>
    </ul>
    
    <p>Happy Fluttering! 🚀</p>
  `,
  image: "/images/blogs/flutter-guide.jpg",
  category: "Mobile",
  author: "Reshika Geeganage",
  date: "Mar 30, 2026",
  readTime: "15 min read",
  slug: "flutter-beginners-guide-2026",
  featured: true,
  tags: ["Flutter", "Mobile Development", "Dart", "Cross-Platform", "Beginners Guide"]
},

  
   {
  id: 2,  // Use the next available ID
  title: "How to Fix Flutter Red Screen Errors: A Complete Debugging Guide",
  excerpt: "Learn how to identify, debug, and fix common Flutter red screen errors. This comprehensive guide covers null safety errors, state management issues, widget tree problems, and runtime exceptions with practical solutions.",
  content: `
    <h1>How to Fix Flutter Red Screen Errors: A Complete Debugging Guide</h1>
    
    <p>The Flutter Red Screen of Death (RSOD) is every developer's nightmare. That bright red screen with white text can be intimidating, but don't worry! In this comprehensive guide, I'll walk you through the most common red screen errors and show you exactly how to fix them.</p>
    
    <h2>What is the Flutter Red Screen?</h2>
    
    <p>The Red Screen appears when your Flutter app encounters a runtime error that it cannot recover from. Unlike compilation errors (which appear in your terminal), runtime errors happen while the app is running and display directly on the device or emulator.</p>
    
    <!-- Add the rest of your HTML content here -->
  `,
  image: "/images/blogs/flutter-red-screen-errors.jpg",
  category: "mobile",
  author: "Reshika Geeganage",
  date: "Mar 31, 2026",
  readTime: "10 min read",
  slug: "flutter-red-screen-errors-guide",
  featured: true,
  tags: ["Flutter", "Debugging", "Error Handling", "Red Screen", "QA"]
}
];