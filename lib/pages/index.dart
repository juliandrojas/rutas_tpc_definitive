import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

class Index extends StatefulWidget {
  const Index({Key? key}) : super(key: key);

  @override
  State<Index> createState() => _IndexState();
}

class _IndexState extends State<Index> {
  List<dynamic>? empresas;

  @override
  void initState() {
    super.initState();
    // Realiza una solicitud a la API después de que el frame haya sido renderizado
    WidgetsBinding.instance.addPostFrameCallback((_) {
      // Utiliza Dio para realizar la solicitud HTTP
      Dio().get("http://localhost:3000/empresas/mostrarDatos").then((response) {
        // Si la respuesta es exitosa, actualiza la lista de empresas
        if (response.statusCode == 200) {
          setState(() {
            empresas = response.data['empresas'];
            String jsonString = jsonEncode(empresas);
            // Imprimimos el JSON legible
            print(jsonString);
          });
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            if (empresas != null && empresas!.isNotEmpty)
              Expanded(
                child: ListView.builder(
                  itemCount: empresas!.length,
                  itemBuilder: (context, index) {
                    final empresa = empresas![index];
                    return ListTile(
                      title: Text(
                        empresa['nombreempresa'] ?? 'Nombre no disponible',
                      ),
                    );
                  },
                ),
              )
            else
              const Text('No hay datos'),
          ],
        ),
      ),
    );
  }
}
