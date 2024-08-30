export default function CreateEmployee() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center p-6 bg-gray-300 rounded-2xl mt-10 w-2/4">
        <div className="flex gap-10 mb-4">
          <div className="flex">
            <p>First Name</p>
            <input className="border" type="text" />
          </div>

          <div className="flex">
            <p>Last Name</p>
            <input className="border" type="text" />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex">
            <p>Date of Birth</p>
            <input className="border" type="text" />
          </div>

          <div className="flex">
            <p>Start Date</p>
            <input className="border" type="text" />
          </div>
        </div>
      </section>
      <section className="flex flex-col p-6 bg-gray-300 rounded-2xl mt-10 items-center w-2/4">
        <div className="flex gap-10 mb-4">
          <div className="flex">
            <p>Street</p>
            <input className="border" type="text" />
          </div>

          <div className="flex">
            <p>City</p>
            <input className="border" type="text" />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex">
            <p>State</p>
            <input className="border" type="text" />
          </div>

          <div className="flex">
            <p>Zip Code</p>
            <input className="border" type="text" />
          </div>
        </div>
      </section>
      <section className="flex flex-col p-6 bg-gray-300 rounded-2xl mt-10 items-center w-2/4">
        <div className="flex gap-10 mb-4">
          <div className="flex">
            <p>Department</p>
            <input className="border" type="text" />
          </div>
        </div>
      </section>
    </div>
  );
}
