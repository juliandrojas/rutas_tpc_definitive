import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<Map<String, dynamic>> empresas = [];
  bool isLoading = true;

  Future<void> fetchData() async {
    final url = Uri.parse('http://192.168.0.101:3000/');
    try {
      final response = await http.get(url);

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        // Procesa los datos como necesites
        print(data);
      } else {
        print('Error al cargar los datos: ${response.statusCode}');
      }
    } catch (error) {
      print('Error al cargar los datos: $error');
    }

    /*try {
      final response = await Uri.parse('http://localhost:3000/');
      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        setState(() {
          empresas = List<Map<String, dynamic>>.from(data['empresas'] ?? []);
          isLoading = false;
        });
      } else {
        throw Exception('Error al cargar las empresas: ${response.statusCode}');
      }
    } catch (error) {
      throw Exception('Error al cargar las empresas: $error');
    }*/
  }

  @override
  void initState() {
    super.initState();
    fetchData().catchError((error) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Error: $error'),
        ),
      );
    }).whenComplete(() {
      // Whatever you want to do after the Future completes
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Galería de Empresas'),
      ),
      body: isLoading
          ? Center(child: CircularProgressIndicator())
          : GridView.builder(
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 10.0,
                mainAxisSpacing: 10.0,
              ),
              itemCount: empresas.length,
              itemBuilder: (context, index) {
                return Card(
                  elevation: 5.0,
                  child: Column(
                    children: [
                      Text('ID Empresa: ${empresas[index]['idEmpresa']}'),
                      Text('Nombre: ${empresas[index]['nombre']}'),
                    ],
                  ),
                );
              },
            ),
    );
  }
}
