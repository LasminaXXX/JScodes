function calcularMedia() {
    // Obter as notas do formulário
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    // Calcular a média
    let media = (nota1 + nota2 + nota3) / 3;

    // Determinar a classificação do aluno
    let classificacao;
    if (media >= 7) {
        classificacao = "Aprovado";
    } else if (media >= 5) {
        classificacao = "Em Recuperação";
    } else {
        classificacao = "Reprovado";
    }

    // Exibir a média e a classificação do aluno
    document.getElementById('resultado').innerHTML = "Média: " + media.toFixed(2) + "<br>Classificação: " + classificacao;
}
