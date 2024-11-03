// Se solicita al usuario que ingrese la cantidad de rondas que desea jugar y se almacena en la variable `Cantidad`.
// `parseInt` se utiliza para convertir la entrada del usuario (que es un string) a un número entero.
const Cantidad = parseInt(prompt("¿Cuántas rondas de juego quieres jugar?"));
var contUsuario = 0;
var contMaquina = 0;
var contEmpates = 0;

// Función get juego
function obtenerJuegoUsuario() {
  JuegoUsuario = prompt("Piedra, Papel o Tijera:").toLowerCase();
  // Este bucle `while` valida la entrada del usuario, se repite hasta que ingresa opción válida
  while (
    JuegoUsuario !== "piedra" &&
    JuegoUsuario !== "papel" &&
    JuegoUsuario !== "tijera"
  ) {
    JuegoUsuario = prompt("ingresa piedra, papel o tijera").toLowerCase();
  }
  return JuegoUsuario;
}
// jugada de la maquina
// Genera un número aleatorio entre 0 y 2 (inclusive).
// Accede al elemento del array `jugadas` correspondiente al número aleatorio generado
// y lo muestra en un alert como la jugada de la máquina.
function obtenerJuegoMaquina() {
  const JuegoMaquina = Math.floor(Math.random() * 3); //número random
  const jugadas = ["piedra", "papel", "tijera"]; //array jugadas
  alert("Maquina : " + jugadas[JuegoMaquina]);
  return jugadas[JuegoMaquina];
}
// // Compara las jugadas del usuario y la máquina para determinar el ganador.
function detGanador(JuegoUsuario, JuegoMaquina) {
  if (JuegoUsuario === JuegoMaquina) {
    return "empate"; // Si las jugadas son iguales, es un empate.
  } else if (
    (JuegoUsuario === "tijera" && JuegoMaquina === "papel") ||
    (JuegoUsuario === "piedra" && JuegoMaquina === "tijera") ||
    (JuegoUsuario === "papel" && JuegoMaquina === "piedra")
  ) {
    return "usuario"; // El usuario gana.
  } else {
    return "maquina"; // En cualquier otro caso, la máquina gana.
  }
}
// Bucle principal del juego: se ejecuta una vez por cada ronda.
for (let i = 0; i < Cantidad; i++) {
  const JuegoUsuario = obtenerJuegoUsuario();
  const JuegoMaquina = obtenerJuegoMaquina();

  const ganador = detGanador(JuegoUsuario, JuegoMaquina);

  // Muestra un mensaje al usuario con el resultado de la ronda y actualiza los contadores.
  if (ganador === "usuario") {
    alert(
      `Has ganado! \nUsuario: ${JuegoUsuario} Máquina: ${JuegoMaquina}`
    );
    contUsuario++;
  } else if (ganador === "maquina") {
    alert(
      `Has perdido! \nUsuario: ${JuegoUsuario} Máquina: ${JuegoMaquina}`
    );
    contMaquina++;
  } else {
    alert(`Es un empate! \nUsuario: ${JuegoUsuario} Máquina: ${JuegoMaquina}`);
    contEmpates++;
  }
}

alert(
  `Resultado:\nUsuario: ${contUsuario}\nMaquina: ${contMaquina}\nEmpates: ${contEmpates}`
);
