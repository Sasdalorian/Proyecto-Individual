class Area {
    constructor() {
        this.categorias = [];
    }
    agregarAreas(area) {
        this.categorias.push(area)
    }
    buscarArea(palabra) {
        if(palabra.length === 0){
            return this.categorias;
        } else {
            return this.categorias.filter(nombreArea => {
                nombreArea.area.filter(nombreCategorias => {
                    console.log(nombreCategorias)
               })

            }) 
        }
    }
}