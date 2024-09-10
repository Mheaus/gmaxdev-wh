export default function CreateEmployee() {
  return (
    <div className="flex flex-col items-center">

      <section className="w-2/4 p-6 mt-10 bg-gray-300 rounded-2xl">
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex items-center">
            <p className="w-32 mr-4">First Name</p>
            <input className="px-2 py-1 border" type="text" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Last Name</p>
            <input className="px-2 py-1 border" type="text" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Date of Birth</p>
            <input className="px-2 py-1 border" type="text" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Start Date</p>
            <input className="px-2 py-1 border" type="text" />
          </div>
        </div>
      </section>

      <section className="w-2/4 p-6 mt-10 bg-gray-300 rounded-2xl">
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex items-center">
            <p className="w-32 mr-4">Street</p>
            <input className="px-2 py-1 border" type="text" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">City</p>
            <input className="px-2 py-1 border" type="text" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">State</p>
            <input className="px-2 py-1 border" type="text" />
          </div>
          <div className="flex items-center">
            <p className="w-32 mr-4">Zip Code</p>
            <input className="px-2 py-1 border" type="text" />
          </div>
        </div>
      </section>

      <section className="w-2/4 p-6 mt-10 bg-gray-300 rounded-2xl">
        <div className="flex items-center w-full">
          <p className="w-32 mr-4">Department</p>
          <input className="flex-grow px-2 py-1 border" type="text" />
        </div>
      </section>
    </div>
  );
}
