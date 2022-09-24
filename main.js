let edad = Number(prompt("Ingrese su edad y le diré que canción le gusta"));

if(isNaN(edad)){
    alert("Ingrese su edad correctamente y en número enteros por favor...");
    let edad = Number(prompt("Ingrese su edad y le diré que canción le gusta"));
    if (edad >= 1 && edad <= 8) {
        console.log(" Escuchá este tema en YouTube: Peppa Pig en Español 🎵 Ella es Peppa Pig | Canta con Peppa | Pepa la cerdita");
    }else {
        if(edad > 8 && edad <=20){
            console.log("Probá con el siguiente tema en YouTube: Paulo Londra - Party en el Barrio (feat. Duki) [Official Video]");
        }else{
            if(edad > 20 && edad <= 40){
                console.log("A vos te puede interesar este enganchadito en YouTube: Los mejores 10 temas de cumbia de la historia");
            }
            else{
                if (edad > 40){
                    console.log("Copie y pegue este título en el buscador de YouTube: Despeinada / Corazón Contento / Viva la Vida / Media Novia / Camelia / Bienvenido Amor");
                }
              
            }
        }
    
    }

}else{
    if (edad >= 1 && edad <= 8) {
        console.log(" Escuchá este tema en YouTube: Peppa Pig en Español 🎵 Ella es Peppa Pig | Canta con Peppa | Pepa la cerdita");
    }else {
        if(edad > 8 && edad <=20){
            console.log("Probá con el siguiente tema en YouTube: Paulo Londra - Party en el Barrio (feat. Duki) [Official Video]");
        }else{
            if(edad > 20 && edad <= 40){
                console.log("A vos te puede interesar este enganchadito en YouTube: Los mejores 10 temas de cumbia de la historia");
            }
            else{
                if (edad > 40){
                    console.log("Copie y pegue este título en el buscador de YouTube: Despeinada / Corazón Contento / Viva la Vida / Media Novia / Camelia / Bienvenido Amor");
                }
              
            }
        }
    
    }

}








