// Tâche 01 : Itération avec Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise(resolve => setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000));
    }
  }
  
  // Tâche 02 : En attente d'un appel
  async function waitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données:', error);
    }
  }
  
  // Tâche 03 : Gestion des erreurs avec Async/Await
  async function waitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données:', error);
    }
  }
  
  // Tâche 04 : En attente de demandes simultanées
  async function concurrentRequests() {
    const [result1, result2] = await Promise.all([
      fetch('https://api.example.com/data1'),
      fetch('https://api.example.com/data2')
    ]);
    const data1 = await result1.json();
    const data2 = await result2.json();
    console.log(data1, data2);
  }
  
  // Tâche 05 : En attente d'appels parallèles
  async function parallelCalls(urls) {
    const requests = urls.map(url => fetch(url));
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map(response => response.json()));
    console.log(data);
  }
  
  // Appels aux fonctions
  const values = [1, 2, 3];
  iterateWithAsyncAwait(values);
  waitCall();
  concurrentRequests();
  parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);