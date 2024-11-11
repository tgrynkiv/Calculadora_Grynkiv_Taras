        var operand1 = ""; //variable per guardar operand1
        var operand2 = "";  //variable per guardar operand2
        var operador = "";  //variable per guardar operador (+,-,*,/)
        const maxim_operand = 5; //definim constarnt per mes endevant limitar la llargada dels operands

        document.addEventListener("DOMContentLoaded", function () {     //Inicialitza la pantalla
        operand1 = ""; 
        operand2 = "";  
        operador = "";
        document.getElementById("pantallaInfo").value = "";
        document.getElementById("pantallaResultat").value = operand1;
        });

        function printarNumero(numero){     // aquesta funcio permet printar numeros, mostrara el operand (1 o 2) segons hi hagi o no operador                             
            if(operador === ""){
                if(operand1.length < maxim_operand){    //fem ser .length per optenir la llargada de la cadena 
                    operand1 += numero;             // el += concatena cadenes
                    mostrarPerPantalla(operand1);
                }else{
                    mostrarError("Error: El numero es massa llarg");
                }
            }else{
                if(operand2.length < maxim_operand){
                operand2 += numero;
                mostrarPerPantalla(operand2);
            }else{
                mostrarError("Error: El numero es massa llarg");
            }
        }
        }

        function tractarUn() {
            printarNumero("1");
        }

        function tractarDos() {
            printarNumero("2");
        }

        function tractarTres() {
            printarNumero("3");
        }

        function tractarQuatre() {
            printarNumero("4");
        }

        function tractarCinc() {
            printarNumero("5");
        }

        function tractarSis() {
            printarNumero("6");
        }

        function tractarSet() {
            printarNumero("7");
        }

        function tractarVuit() {
            printarNumero("8");
        }

        function tractarNou() {
            printarNumero("9");
        }

        function tractarZero() {
            printarNumero("0");
        }

        function sumar(){   
            operador = "+";
        }

        function restar(){
            operador = "-";
        }

        function multiplicar(){
            operador = "*";
        }

        function dividir(){
            operador = "/";
        }

        function sumaOperand(oprand_a, operand_b){
            return Number(oprand_a) + Number(operand_b); //Number() permet convertir un string en un numero
        }

        function restaOperand(oprand_a, operand_b){
            return Number(oprand_a) - Number(operand_b);
        }

        function multiplicaOperand(oprand_a, operand_b){
            return Number(oprand_a) * Number(operand_b);
        }       

        function divideixOperand(oprand_a, operand_b){
            if (operand_b !== "0"){
               return Number(oprand_a) / Number(operand_b);
            }else{
                return mostrarError("Error: no es pot dividir entre 0");
            }    
        }

        function igual(){
            if (operand1 && operand2 && operador){ //si les tres variables estan definides 
                let resultat;

                if (operador === "+") {
                    resultat = sumaOperand(operand1, operand2); 

                }else if (operador === "-"){
                    resultat = restaOperand(operand1, operand2);

                }else if (operador === "*"){
                    resultat = multiplicaOperand(operand1, operand2);

                }else if (operador === "/"){
                    resultat = divideixOperand(operand1, operand2);
                }

                mostrarPerPantalla(resultat);

                operand1 = resultat.toString(); //convertim el resultat en un string
                operand2 = "";                  //igualem operand2 a cadena buida
                operador = "";                  //igualem operador a cadena buida
            }
        }

        function borrarUltim() {    //borra l'ultim numero del operand1 o operand2 segons si hi ha o no operador
            if(operador === ""){
                operand1 = operand1.slice(0, -1); //el metode .slice permet treure un element de la cadena, sempre i quan sigui string
                mostrarPerPantalla(operand1);
            }else{
                operand2 = operand2.slice(0, -1);
                mostrarPerPantalla(operand2);
            }   
        }

        function borrar_Tot() {
            operand1 = "";  //reiniciem el valor de operand1
            operand2 = "";  //reiniciem el valor de operand1
            operador = "";  //reiniciem el operador
            document.getElementById("pantallaResultat").value = "";    //borra pantalla de resultats
            document.getElementById("pantallaInfo").value = "";        //borra pantalla de info
        }

        function mostrarPerPantalla(num_operand) {
            document.getElementById("pantallaResultat").value = num_operand; // mostrara per pantalla operand1 o operand2 segons la funcio printarNumero 
        }

        function mostrarError(err_msg){
            document.getElementById("pantallaInfo").value = err_msg;
        }

        function decimal(){     //funcio per crear decimals
            if(operador ===""){     //identifiquem el operand

                if(!operand1.includes(".")){    //aquest if no permet que hi hagi més d'un "." en el operand1
                    operand1 += ".";                //concatenem un "." a operand1
                    mostrarPerPantalla(operand1);
                }

            }else{

                if(!operand2.includes(".")){    //aquest if no permet que hi hagi més d'un "." en el operand2
                    operand2 += ".";                //concatenem un "." a operand2
                    mostrarPerPantalla(operand2);
                }
            }
        }