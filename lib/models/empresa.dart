class Empresa {
  final int idempresa;
  final String nombreempresa;
  final String imagenempresa;

  Empresa({
    required this.idempresa,
    required this.nombreempresa,
    required this.imagenempresa,
  });

  factory Empresa.fromJson(Map<String, dynamic> json) {
    return Empresa(
      idempresa: json["idempresa"],
      nombreempresa: json["nombreempresa"],
      imagenempresa: json["imagenempresa"],
    );
  }
}

class Empresas {
  final List<Empresa> empresas;

  Empresas({
    required this.empresas,
  });

  factory Empresas.fromJson(Map<String, dynamic> json) {
    List<dynamic> empresaList = json['empresas'];
    List<Empresa> empresas = empresaList
        .map((empresaJson) => Empresa.fromJson(empresaJson))
        .toList();
    return Empresas(empresas: empresas);
  }
}