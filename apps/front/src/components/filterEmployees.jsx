export function filterEmployees(employees, searchQuery) {
  if (!searchQuery) {
    return employees; // Si aucune requête, retourner tous les employés
  }

  // Convertir la requête de recherche en minuscule pour une comparaison insensible à la casse
  const lowercasedQuery = searchQuery.toLowerCase();

  return employees.filter((employee) => {
    // Vérifier chaque champ de l'employé (nom, prénom, date de naissance, etc.)
    return Object.keys(employee).some((key) => {
      const value = employee[key];
      // Vérifier que la valeur n'est pas null/undefined, et vérifier si elle inclut la requête
      return value && value.toString().toLowerCase().includes(lowercasedQuery);
    });
  });
}
