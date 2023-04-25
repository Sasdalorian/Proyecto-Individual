import Swal from 'sweetalert2'

//MOSTRAR VOLUNTARIADOS
export const adminShowVolunt = async (req, res) => {
    const resultado = await fetch("http://localhost:4000/api/v1/administracion");
    const data = await resultado.json();
    res.render("administracion", {"voluntariados":data});
};

//BORRAR VOLUNTARIADO
export const deleteVolunt = async (req, res) => {
    try {
        const {id} = req.params
        const resultado = await fetch(`http://localhost:4000/api/v1/deletevolunt/${id}`, {
            method: "delete",
            headers: {"Content-Type": "application/json"}
        });
        res.redirect("/administracion");
    } catch (error) {
        console.log('No se pudo eliminar pedido', error)
    }
}

// PRUEBA
export const intentoAviso = async (req, res) => {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}
