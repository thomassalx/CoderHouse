let chanceAtaque = 0;
let chanceDefensa = 0;
let chanceTotal = 0;
let seguirJugando = false;

alert ( "Bienvenido al test de batalla de CoderHouse!" );
alert ( "Utilizá un solo dado común de 6 caras para decidir tu suerte!" + "\nPero antes..." );
usuario = prompt ( "Cual es tu nombre, viajero?" );
alert ( usuario + " deberás saber que los números páres mayores a 30 y menores a 50 ganan..." );

do {
    chanceAtaque = prompt ( "Que número de chance de ataque sacaste con el dado?" );
    chanceDefensa = prompt ( "Que número de chance de defensa sacaste con el dado?" );

    switch ( chanceAtaque ) {
        case "1":
            chanceAtaque = 3;
            break;
        case "2":
            chanceAtaque = 2;
            break;
        case "3":
            chanceAtaque = 5;
            break;
        case "4":
            chanceAtaque = 6;
            break;
        case "5":
            chanceAtaque = 1;
            break;
        case "6":
            chanceAtaque = 8;
            break;
        default:
            alert ( "Los datos ingresados son incorrectos!" );
            chanceAtaque = 0;
            chanceDefensa = 0;
            break;
    }
    chanceTotal += chanceAtaque * chanceDefensa;

    seguirJugando = confirm ( "Quieres seguir tirando los dados bajo tu propio riesgo?" );
} while ( seguirJugando );

alert ( "Tu chance de ganar esta batalla es de: " + chanceTotal + "\nNúmero par > 30 = ganás." + "\nNúmero par < 50 = ganás." + "\nDe otra forma presiona F5 para volver a intentarlo..." );
