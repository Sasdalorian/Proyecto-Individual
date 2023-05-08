import { getToken } from "./post.js";
import axios from "axios";

// Funcion para obtener Voluntariados
export const obtenerVoluntariados = async () => {
  const resultado = await fetch("http://localhost:4000/api/v1/voluntariados");
  const data = await resultado.json();
  return data;
} 

// OBTENER PERFIL USUARIO
export const mostrarPerfil = async (req, res) => {
  const token = getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get("http://localhost:4000/api/v1/perfil", config);
    return response.data;
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener el perfil desde la API.");
  }
};

// Función para Administrar Voluntariados
  export const adminShowVolunt = async () => {
    const token = getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      const response = await axios.get('http://localhost:4000/api/v1/Admvoluntariados', config);
      return response.data;
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