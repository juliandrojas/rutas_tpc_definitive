import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:rutas_tpc_definitive/models/empresa.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Empresas? empresas;
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    mostrarDatosEmpresas();
  }

  Future<void> mostrarDatosEmpresas() async {
    try {
      final response =
          await Dio().get('http://192.168.0.101:3000/empresas/mostrarDatos');
      setState(() {
        empresas = Empresas.fromJson(response.data);
        isLoading = false;
      });
    } catch (e) {
      setState(() {
        isLoading = false;
      });
      print("Error en try catch: $e");
    }
  }

  void mostrarNombreEmpresa(String nombreEmpresa) {
    print('Nombre de la empresa: $nombreEmpresa');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Peticiones HTTP'),
      ),
      body: Center(
        child: isLoading
            ? const CircularProgressIndicator()
            : GridView.builder(
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                ),
                itemCount: empresas?.empresas.length ?? 0,
                itemBuilder: (context, index) {
                  return GestureDetector(
                    onTap: () {
                      mostrarNombreEmpresa(
                          empresas?.empresas[index].nombreempresa ?? 'No Data');
                    },
                    child: Card(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            empresas?.empresas[index].nombreempresa ??
                                'No Data',
                            style: const TextStyle(
                                fontSize: 18.0, fontWeight: FontWeight.bold),
                          ),
                          AspectRatio(
                            aspectRatio: 16 / 9,
                            child: Image.network(
                              empresas?.empresas[index].imagenempresa ?? '',
                              fit: BoxFit.cover,
                            ),
                          )
                        ],
                      ),
                    ),
                  );
                },
              ),
      ),
    );
  }
}
