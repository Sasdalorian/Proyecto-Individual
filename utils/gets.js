import { getToken } from "./post.js";

// Funcion para obtener Voluntariados
export const obtenerVoluntariados = async () => {
  const resultado = await fetch("http://localhost:4000/api/v1/voluntariados");
  const data = await resultado.json();
  return data;
} 

// OBTENER PERFIL USUARIO
export const mostrarPerfil = async (req, res) => {
  const token = getToken();
  try {
    const response = await fetch("http://localhost:4000/api/v1/perfil", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error al obtener el perfil desde la API.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener el perfil desde la API.");
  }
};

// MOSTRAR TABLA VOLUNTARIADOS
export const adminShowVolunt = async () => {
  const token = getToken();
  try {
    const response = await fetch('http://localhost:4000/api/v1/Admvoluntariados', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los datos de los voluntariados.');
  }
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

// Mostrar Areas contando Voluntariados Admins
export async function obtenerEstadisticas() {
  try {
    // Llamada a la ruta /api/v1/estadisticas
    const resultado = await fetch("http://localhost:4000/api/v1/estadisticas");

    if (!resultado.ok) {
      throw new Error("Error al obtener las estadísticas");
    }
    const estadisticas = await resultado.json();
    return estadisticas;
    // Aquí puedes utilizar los datos obtenidos
  } catch (error) {
    console.error(error);
  }
}
// MOSTRAR AREAS ORDEN ASC & DESC
export async function obtenerTopAreasAsc() {
  try {
    // Llamada a la ruta correspondiente según el orden especificado
    const resultado = await fetch(`http://localhost:4000/api/v1/estadisticas/asc`);
    if (!resultado.ok) {
      throw new Error("Error al obtener las estadísticas");
    }
    const estadisticas = await resultado.json();
    return estadisticas;
    // Aquí puedes utilizar los datos obtenidos
  } catch (error) {
    console.error(error);
  }
}
export async function obtenerTopAreasDesc() {
  try {
    // Llamada a la ruta correspondiente según el orden especificado
    const resultado = await fetch(`http://localhost:4000/api/v1/estadisticas/desc`);
    if (!resultado.ok) {
      throw new Error("Error al obtener las estadísticas");
    }
    const estadisticas = await resultado.json();
    return estadisticas;
    // Aquí puedes utilizar los datos obtenidos
  } catch (error) {
    console.error(error);
  }
}