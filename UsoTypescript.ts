
//variables

let mensaje = "este es un mensaje";

let mensaje2: string = "Este es otro mensaje";
let numero1: number = 10;
let verdadero: boolean = true;
let numero2: number = 11;

//POO En TypeScript

export class Movil {
    private marca!: String;
    private puertas!: Number;
    protected ruedas!: Number;

//USO DE CONSTRUCTOR
constructor(marca: string, puertas: number, ruedas: number){
    this.marca = marca;
    this.puertas = puertas;
    this.ruedas = ruedas;

}

//get y set CONCEPTO DE ENCAPSULAMIENTO
obtenerMarca(){
    return this.marca;
}
obtenerPuertas(){
    return this.puertas;
}
obtenerRuedas(){
    return this.ruedas;
}

agregarMarca(marca: String){
    this.marca = marca;
}

agregarPuertas(puertas: Number){
    this.puertas = puertas;
}

agregarRuedas(ruedas: Number){
    this.ruedas = ruedas;
}

}

let movil1: Movil = new Movil("Ford", 4, 4);

//agregar valores
//movil1.agregarMarca("Nissan");
//movil1.agregarPuertas(4);
//movil1.agregarRuedas(4);

//obtener valores
 console.log(movil1.obtenerMarca());
 console.log(movil1.obtenerPuertas());
 console.log(movil1.obtenerRuedas());


 //Herencia
 export class Camion extends Movil{
    carga!: Number;
    acoplado!: boolean;

    constructor(marca: string, puertas: number, ruedas: number, carga: number, acoplado: boolean){
        super(marca, puertas, ruedas);
        this.carga = carga;
        this.acoplado = acoplado;
    
    }

 }

 let camion1: Camion = new Camion("Volvo", 2, 10, 2, true);

 console.log(camion1.obtenerMarca());
 console.log(camion1.obtenerPuertas());
 console.log(camion1.obtenerRuedas());
 console.log(camion1.carga);
 console.log(camion1.acoplado);
 
 




