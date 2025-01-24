// import { useState } from 'react';
// import Router from './Router';  // Import du composant Router

// function App() {

//   return (
//     <>
//       <Router />  {/* Utilisation du composant Router ici */}
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import Router from './Router';  // Import du composant Router
import LoadingAnimation from './components/LoadingAnimation';  // Import du composant d'animation de chargement

function App() {
  const [isLoading, setIsLoading] = useState(true);  // État de chargement

  // Simuler un temps de chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);  // Désactiver l'état de chargement après un délai
    }, 5000);  // 3 secondes de délai (ajustez selon vos besoins)

    return () => clearTimeout(timer);  // Nettoyer le timer
  }, []);

  return (
    <>
      {isLoading && <LoadingAnimation />}  {/* Afficher l'animation de chargement si isLoading est vrai */}
      <Router />  {/* Utilisation du composant Router ici */}
    </>
  );
}

export default App;