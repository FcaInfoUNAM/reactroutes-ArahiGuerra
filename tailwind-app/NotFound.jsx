// NotFound.jsx
function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white text-center p-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-2">Página no encontrada</p>
        <p className="text-md">La URL que buscas no existe en este sitio.</p>
        <a href="/" className="mt-4 text-blue-600 hover:underline">Volver al inicio</a>
      </div>
    );
  }
  export default NotFound;