import { getToken } from "./post.js";
import axios from "axios";

    // Funcion para obtener Voluntariados
export const obtenerVoluntariados = async () => {
    const resultado = await fetch("http://localhost:4000/api/v1/voluntariados");
    const data = await resultado.json();
    return data;
}   
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

// Mostrar Areas contando Voluntariados
export const topAreas = async () => {
    const resultado = await fetch("http://localhost:4000/api/v1/topAreas");
    const topAreas = await resultado.json();
    return topAreas;
};