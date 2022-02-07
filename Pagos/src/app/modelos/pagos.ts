export interface Pagos{
    _id:string,
    departamento:number,
    monto:number,
    Inicio_Periodo:string,
    Fin_Peridoo:string,
    pagado:boolean,
    createdAt:string,
    updatedAt:string,
    togglebtn:string,
    dataPadre:string
}

export interface PagoEnvio{
    departamento:number,
    monto:number,
    Inicio_Periodo:string,
    Fin_Peridoo:string,
    pagado:boolean
}

export interface Periodo{
    
    _id:string,
    mes:number,
    Inicio_Periodo:string,
    Fin_Peridoo:string,
    createdAt:string,
    updatedAt:string,
    etiqueta:string,
    selected:boolean

}

export interface Mensaje{
    message:string
}
