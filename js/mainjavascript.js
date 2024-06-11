
// Data una lista della spesa;
// Stampare tutti gli elementi della lista della spesa, all'interno di una lista in HTML
// Va fatto SOLO CON IL FOR!!!!!!



// Data una lista della spesa;
// 1
    // creazione nuovo array per la lista della spesa da inserire dinamicamente da js
    const arraySpesa = ['pane', 'burro','olio','uova','pomodori', 'pasta', 'affettati'];

    const iconeSpesa = ['fa-bread-slice',' fa-cheese','fa-oil-can','fa-egg','fa-apple-alt','fa-utensils','fa-cheese'];          

 // 2
    // prendere l' elemento contenitore degli li della lista della spesa rendendolo globale 
    const contenitoreAlimenti = document.querySelector(".contenitore-alimenti");


    // UTILIZZO CICLO WHILE


    // Inizializza il contatore a 0
    let contatore = 0;

    while (contatore < arraySpesa.length){

        let itemSpesa = arraySpesa[contatore];
        console.log(itemSpesa);

        let iconaSpesa = iconeSpesa[contatore];
        console.log(iconaSpesa);

        
            // creare l'elemento da inserire ad ogni iterazione
        let itemContenuto = ` <div class="item-container"><li class="itemspesa"><i class="fas ${iconaSpesa}"></i> ${itemSpesa}</li></div>`;

        // Incrementa il contatore
        contatore++;

         // Stampare tutti gli elementi della lista della spesa, all'interno di una lista in HTML
        // inserire il nuovo elemento creato nel contenitore lista della spesa
        contenitoreAlimenti.innerHTML += itemContenuto;


    }

    // CICLO "FOR"

    // inizio ciclo for per estrapolazione degli elementi alimenti

    // for(let i = 0; i < arraySpesa.length; i++) {
    //     let itemSpesa = arraySpesa[i];
    //     console.log(itemSpesa);

    //     4
    //         // creare l'elemento da inserire ad ogni iterazione
    //     let itemContenuto = `<li class="itemspesa">${itemSpesa}</li>`;


    //     // Stampare tutti gli elementi della lista della spesa, all'interno di una lista in HTML
    //     // inserire il nuovo elemento creato nel contenitore lista della spesa
    //     contenitoreAlimenti.innerHTML += itemContenuto;

    // }



    // UTILIZZO DO WHILE

    // // // Inizializza il contatore a 0
    // let contatore = 0;

    // do{

    //     let itemSpesa = arraySpesa[contatore];
    //     console.log(itemSpesa);

        
    //         // creare l'elemento da inserire ad ogni iterazione
    //     let itemContenuto = `<li class="itemspesa">${itemSpesa}</li>`;


    //     // Incrementa il contatore
    //     contatore++;

    //      // Stampare tutti gli elementi della lista della spesa, all'interno di una lista in HTML
    //     // inserire il nuovo elemento creato nel contenitore lista della spesa
    //     contenitoreAlimenti.innerHTML += itemContenuto;

    // }while (contatore < arraySpesa.length);