import { useState } from 'react';

export default function CreateEmployee() {
  // États pour stocker les valeurs des inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });

  // Fonction qui se déclenche lors du changement dans un input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction qui se déclenche lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:3001/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Ajouter ici ce que tu veux faire après la soumission (reset du form, affichage d'un message, etc.)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <section className="w-2/4 p-6 mt-10 bg-gray-300 rounded-2xl">
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex items-center">
            <p className="w-32 mr-4">First Name</p>
            <input className="px-2 py-1 border" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Last Name</p>
            <input className="px-2 py-1 border" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Date of Birth</p>
            <input className="px-2 py-1 border" type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Start Date</p>
            <input className="px-2 py-1 border" type="text" name="startDate" value={formData.startDate} onChange={handleChange} />
          </div>
        </div>
      </section>

      <section className="w-2/4 p-6 mt-10 bg-gray-300 rounded-2xl">
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex items-center">
            <p className="w-32 mr-4">Street</p>
            <input className="px-2 py-1 border" type="text" name="street" value={formData.street} onChange={handleChange} />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">City</p>
            <input className="px-2 py-1 border" type="text" name="city" value={formData.city} onChange={handleChange} />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">State</p>
            <input className="px-2 py-1 border" type="text" name="state" value={formData.state} onChange={handleChange} />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Zip Code</p>
            <input className="px-2 py-1 border" type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
          </div>
        </div>
      </section>

      <section className="w-2/4 p-6 mt-10 bg-gray-300 rounded-2xl">
        <div className="flex items-center w-full">
          <p className="w-32 mr-4">Department</p>
          <input className="flex-grow px-2 py-1 border" type="text" name="department" value={formData.department} onChange={handleChange} />
        </div>
      </section>

      <button type="submit" className="px-4 py-2 mt-6 text-white bg-blue-500 rounded">
        Submit
      </button>
    </form>
  );
}
