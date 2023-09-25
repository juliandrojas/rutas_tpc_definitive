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
    getEmpresas();
  }

  Future<void> getEmpresas() async {
    try {
      final dio = Dio();
      final response =
          await dio.get('http://192.168.0.101:3000/empresas/mostrarDatos');
      setState(() {
        empresas = response.data['empresas'];
      });
      print(empresas);
    } catch (error) {
      print('Error al obtener las empresas: $error');
    }
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
                child: GridView.builder(
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount:
                        2, // Puedes ajustar esto según tus necesidades
                    childAspectRatio:
                        1.0, // Puedes ajustar esto para cambiar el tamaño de las tarjetas
                  ),
                  itemCount: empresas!.length,
                  itemBuilder: (context, index) {
                    final empresa = empresas![index];
                    return GestureDetector(
                      onTap: () {
                        // Aquí puedes navegar a la ruta de la empresa
                        // Puedes usar Navigator para la navegación
                        // Navigator.pushNamed(context, '/ruta_de_la_empresa');
                        // O puedes hacer lo que necesites al pulsar la tarjeta
                        print('Tocaste la empresa ${empresa['nombreempresa']}');
                      },
                      child: Card(
                        child: Column(
                          children: [
                            // Mostrar la imagen desde la URL
                            Image.network(
                              empresa['imagenempresa'],
                              height:
                                  100, // Ajusta el tamaño de la imagen según tus necesidades
                            ),
                            ListTile(
                              title: Center(
                                child: Text(
                                  empresa['nombreempresa'] ??
                                      'Nombre no disponible',
                                ),
                              ),
                            ),
                          ],
                        ),
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
