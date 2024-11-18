export const loginUser = async (user, dni, password) => {
    try {
      const response = await fetch('http://localhost/ProyectoReact/ecoroutex/backend/php/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, dni, password }),
        credentials: 'include',
      });
      const data = await response.json();
      return data;  // Devuelve la respuesta de PHP (éxito o error)
    } catch (error) {
      console.error('Error al autenticar:', error);
      return { error: 'Error al conectar con el servidor' };
    }
  };
  