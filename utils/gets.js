
    // Funcion para obtener Voluntariados
export const obtenerVoluntariados = async () => {
    const resultado = await fetch("http://localhost:4000/api/v1/voluntariados");
    const data = await resultado.json();
    return data;
}

  // Función para Administrar Voluntariados
export const adminShowVolunt = async (req, res) => {
      const voluntariados = await obtenerVoluntariados();
      res.render("administracion", {"voluntariados": voluntariados});
};

// MOSTRAR para Administrar Usuarios
export const obtenerUsuarios = async () => {
    const resultado = await fetch("http://localhost:4000/api/v1/usuarios");
    const usuarios = await resultado.json();
    return usuarios;
};
// MOSTRAR para Administrar Admins
export const obtenerAdmin = async () => {
    const resultado = await fetch("http://localhost:4000/api/v1/admin");
    const admin = await resultado.json();
    return admin;
};