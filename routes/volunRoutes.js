
//MOSTRAR VOLUNTARIADOS
export const mostrarVolunt = async (req, res) => {
    const resultado = await fetch("http://localhost:4000/api/v1/voluntariados");
const data = await resultado.json();
res.render("voluntariado", {"voluntariados":data});
};