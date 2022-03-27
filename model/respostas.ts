export default class RespostasModel{

    #valor:string
    #certa:  boolean
    #revelada: boolean

    constructor( valor:string, certa:boolean, revelada = false){
      
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    static errada(valor:string){
        return new RespostasModel(valor, false)
 
    }
    static certa(valor:string){
     return new RespostasModel(valor, true)
    }
    

    get valor(){
        return this.#valor
    }
    get certa(){
        return this.#certa
    }
    get revelada(){
        return this.#revelada
    }
    revelar(){
        return new RespostasModel(this.#valor, this.#certa, true)
    }
    paraObjeto(){
        return {
            id:  this.#valor, 
            certa:  this.#certa,
            revelada: this.#revelada
        }
    }



}