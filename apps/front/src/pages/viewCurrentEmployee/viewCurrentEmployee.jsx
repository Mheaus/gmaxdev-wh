import { useState } from "react";

export default function ViewEmployee() {
  const [employees, setEmployees] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      startDate: "2022-05-01",
      department: "HR",
      birthDate: "1990-06-12",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      startDate: "2023-03-15",
      department: "Finance",
      birthDate: "1985-02-24",
      street: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
    },
  ]);

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
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"} // Permet de changer la couleur de fond en fonction des chiffres paires / impaires
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
        <div>Showing 0 to {employees.length} of 0 {employees.length}</div>
        <div className="flex justify-between w-40">
          <a href="">Previous</a>
          <a href="">Next</a>
        </div>
      </div>
    </div>
  );
}
