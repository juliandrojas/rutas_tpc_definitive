import 'package:flutter/material.dart';
import 'package:rutas_tpc_definitive/pages/index.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Directionality(
        textDirection:
            TextDirection.ltr, // O TextDirection.rtl según corresponda
        child: Scaffold(
          appBar: AppBar(
            title: const Text("APP TPC"),
          ),
          body: const Index(),
        ),
      ),
    );
  }
}

// ... Resto del código

