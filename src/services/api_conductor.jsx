export const fetchConductores = async () => {
    try{
        const response = await fetch('http://localhost/ProyectoReact/ecoroutex/backend/php/get_conductores.php'); 

        // Verifica el Content-Type de la respuesta
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error(`Tipo de contenido inesperado: ${contentType}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching conductores:', error.message);
        throw error;
      }
    };