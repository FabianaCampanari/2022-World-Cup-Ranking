function inserirNovoTime() {
  var nome = document.getElementById("time");
  var img = document.getElementById("img");

  times.push({
    imagem: img.value,
    nome: nome.value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });

  img.value = "";
  nome.value = "";
  exibiTimes(times);
}

var brazil = {
  imagem:
    " https://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_48x48.png",
  nome: "Brazil",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var spain = {
  imagem:
    "https://ssl.gstatic.com/onebox/media/sports/logos/5hLkf7KFHhmpaiOJQv8LmA_48x48.png",
  nome: "Spain",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var portugal = {
  imagem:
    "https://ssl.gstatic.com/onebox/media/sports/logos/HJ3_2c4w791nZJj7n-Lj3Q_48x48.png",
  nome: "Portugal",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var greatBritain = {
  imagem:
    "https://ssl.gstatic.com/onebox/media/sports/logos/6HRpt1RF_AbDUftxgVUoEw_48x48.png",
  nome: "Great Britain",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(times) {
  var pontos = times.vitorias * 3 + times.empates;
  return pontos;
}

var times = [brazil, spain, portugal, greatBritain];

function exibiTimes(times) {
  var elemento = "";
  for (var i = 0; i < times.length; i++) {
    elemento += " <tr> <td>" + `<img src= "${times[i].imagem}" >` + "</td>";
    elemento += "<td>" + times[i].nome + "</td>";
    elemento += "<td>" + times[i].vitorias + "</td>";
    elemento += "<td>" + times[i].empates + "</td>";
    elemento += "<td>" + times[i].derrotas + "</td>";
    elemento += "<td>" + times[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Wins</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Draws</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Defeats</button></td>";
    elemento +=
      "<td><button onClick='limparTimes(" + i + ")'>Clear</button></tr></td>";
    elemento += "</tr>";
  }

  var tabelaTimes = document.getElementById("tabelaTimes");
  tabelaTimes.innerHTML = elemento;
}

exibiTimes(times);

function adicionarVitoria(i) {
  var time = times[i];
  time.vitorias++;
  time.pontos = calculaPontos(time);
  exibiTimes(times);
}

function adicionarEmpate(i) {
  var time = times[i];
  time.empates++;
  time.pontos = calculaPontos(time);
  exibiTimes(times);
}

function adicionarDerrota(i) {
  var time = times[i];
  time.derrotas++;
  exibiTimes(times);
}

function limparTimes(i) {
  times[i].vitorias = 0;
  times[i].derrotas = 0;
  times[i].empates = 0;
  times[i].pontos = 0;

  exibiTimes(times);
}