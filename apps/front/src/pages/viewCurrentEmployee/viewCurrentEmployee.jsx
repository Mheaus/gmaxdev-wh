import { useState, useEffect } from "react";

export default function ViewEmployee() {
  const [employees, setEmployees] = useState([]);  // Initialiser avec un tableau vide
  const [loading, setLoading] = useState(true);    // Pour gérer l'état de chargement
  const [error, setError] = useState(null);        // Pour gérer les erreurs

  // Utiliser useEffect pour effectuer la requête au backend lors du premier rendu
  useEffect(() => {
    fetch("http://localhost:3001/api/employees")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des employés");
        }
        return response.json();  // Convertir la réponse en JSON
      })
      .then((data) => {
        setEmployees(data);  // Mettre à jour le state avec les données
        setLoading(false);   // Désactiver l'état de chargement
      })
      .catch((error) => {
        setError(error.message);  // Gérer les erreurs
        setLoading(false);
      });

  }, []);  // Le tableau vide [] fait que ce useEffect est exécuté uniquement au montage du composant

  if (loading) {
    return <div>Chargement des employés...</div>;  // Affichage en cours de chargement
  }

  if (error) {
    return <div>Erreur : {error}</div>;  // Affichage en cas d'erreur
  }

  return (
    <div className="flex flex-col items-center mx-20 my-10">
      <div className="flex justify-between w-full">
        <div>
          Show <input id="entie_show" className="w-10 border" type="text" /> entries
        </div>
        <div>
          Search <input className="border" type="text" />
        </div>
      </div>
      <div className="w-full">
        <table className="w-full mt-5 bg-gray-300 rounded-md">
          <thead>
            <tr className="bg-gray-400">
              {[
                "First Name",
                "Last Name",
                "Start Date",
                "Department",
                "Date of Birth",
                "Street",
                "City",
                "State",
                "Zip code",
              ].map((heading) => (
                <th key={heading} className="px-4 py-2">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="px-4 py-2">{employee.firstName}</td>
                <td className="px-4 py-2">{employee.lastName}</td>
                <td className="px-4 py-2">{employee.startDate}</td>
                <td className="px-4 py-2">{employee.department}</td>
                <td className="px-4 py-2">{employee.birthDate}</td>
                <td className="px-4 py-2">{employee.street}</td>
                <td className="px-4 py-2">{employee.city}</td>
                <td className="px-4 py-2">{employee.state}</td>
                <td className="px-4 py-2">{employee.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between w-full mt-5">
        <div>
          Showing 0 to {employees.length} of {employees.length}
        </div>
        <div className="flex justify-between w-40">
          <a href="">Previous</a>
          <a href="">Next</a>
        </div>
      </div>
    </div>
  );
}
