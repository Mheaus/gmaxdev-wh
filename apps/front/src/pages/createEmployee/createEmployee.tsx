import { useState } from "react";
import DropdownMenu from "@gmaxdev/dropdown-plugin";
import departments from "../../data/departments";

export default function CreateEmployee() {
  const options = [
    { value: 'option1', label: 'tata' },
    { value: 'option2', label: 'tete' },
    { value: 'option3', label: 'titi' },
    { value: 'option4', label: 'toto' }
  ];
  // Fonction qui se déclenche lors de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch("http://localhost:3001/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <section className="w-2/4 p-6 mt-10 bg-gray-300 rounded-2xl">
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex items-center">
            <p className="w-32 mr-4">First Name</p>
            <input className="px-2 py-1 border" type="text" name="firstName" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Last Name</p>
            <input className="px-2 py-1 border" type="text" name="lastName" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Date of Birth</p>
            <input className="px-2 py-1 border" type="date" name="birthDate" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Start Date</p>
            <input className="px-2 py-1 border" type="date" name="startDate" />
          </div>
        </div>
      </section>

      <section className="w-2/4 p-6 mt-10 bg-gray-300 rounded-2xl">
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex items-center">
            <p className="w-32 mr-4">Street</p>
            <input className="px-2 py-1 border" type="text" name="street" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">City</p>
            <input className="px-2 py-1 border" type="text" name="city" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">State</p>
            <input className="px-2 py-1 border" type="text" name="state" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Zip Code</p>
            <input className="px-2 py-1 border" type="text" name="zipCode" />
          </div>
        </div>
      </section>

      <section className="w-2/4 p-6 mt-10 bg-gray-300 rounded-2xl">
        <div className="flex items-center w-full">
          <p className="w-32 mr-4">Department</p>
          <input
            className="flex-grow px-2 py-1 border"
            type="text"
            name="department"
          />
          <DropdownMenu options={departments}/>
        </div>
      </section>

      <button
        type="submit"
        className="px-4 py-2 mt-6 text-white bg-blue-500 rounded"
      >
        Submit
      </button>
    </form>
  );
}
