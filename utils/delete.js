
//Eliminar Voluntariado
export const deleteVolunt = async (req, res) => {
    console.log("probando")
    const { id } = req.params;
    console.log(id)
    try {
      await fetch(`http://localhost:4000/api/v1/deletevolunt/${id}`, {
        method: "DELETE",
        headers:  { "Content-Type": "application/json",
                    "Accept": "application/json"
                  }
      });
      res.redirect("/adminTvoluntariados");
      console.log(`Se ha eliminado el voluntariado con id: ${id}`)
    } catch (error) {
      console.error("No se pudo eliminar el voluntariado", error);
    }
};

// Eliminar Usuario
export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await fetch(`http://localhost:4000/api/v1/deleteusuario/${id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" }
    })
    res.redirect("/adminTusuarios");
    console.log(`Se ha eliminado el usuario con id: ${id}`)
  } catch (error) {
    console.error("No se pudo eliminar el usuario", error);
  }
}

// Eliminar Admin
export const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    await fetch(`http://localhost:4000/api/v1/deleteadmin/${id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" }
    })
    res.redirect("/adminTadmin");
    console.log(`Se ha eliminado el Admin con id: ${id}`)
  } catch (error) {
    console.error("No se pudo eliminar el admin", error);
  }
}