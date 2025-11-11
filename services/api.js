function getData(url) {
  try {

    // Simulación de llamada a una API
    console.log('Obteniendo datos desde:', url);

    return { data: 'Respuesta de ejemplo' };
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  console.error('Error en la API:', error.message);
}

module.exports = { getData };

