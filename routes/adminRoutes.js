

//MOSTRAR VOLUNTARIADOS
export const adminShowVolunt = async (req, res) => {
    const resultado = await fetch("http://localhost:4000/api/v1/administracion");
    const data = await resultado.json();
    res.render("administracion", {"voluntariados":data});
};

//BORRAR VOLUNTARIADO
export const deleteVolunt = async (req, res) => {
    const {id} = req.params
    try {
        const resultado = await fetch("http://localhost:4000/api/v1/deletevolunt/:id");
        res.redirect("/administracion");
    } catch (error) {
        console.log('No se pudo eliminar pedido', error)
    }
}