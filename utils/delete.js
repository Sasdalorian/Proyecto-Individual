
//BORRAR VOLUNTARIADO
export const deleteVolunt = async (req, res) => {
    const { id } = req.params;
    try {
      await fetch(`http://localhost:4000/api/v1/deletevolunt/${id}`, {
        method: "delete",
        headers: { "Content-Type": "application/json" }
      });
      res.redirect("/adminTvoluntariados");
      console.log(`Se ha eliminado el voluntariado con id: ${id}`)
    } catch (error) {
      console.error("No se pudo eliminar el voluntariado", error);
    }
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await fetch(``, {
      method: "delete",
      headers: { "Content-Type": "application/json" }
    })
    res.redirect("/adminTusuarios");
    console.log(`Se ha eliminado el usuario con id: ${id}`)
  } catch (error) {
    console.error("No se pudo eliminar el usuario", error);
  }
}