import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MyServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Successfully delete");
          const remainingServices = services.filter(
            (service) => service._id !== id,
          );
          setServices(remainingServices);
        }
      });
  };

  return (
    <div className=" min-h-screen bg-base-100 w-full">
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold font-heading mb-4">
            My Services
          </h1>
        </div>
      </section>
      <div className="mb-10 container mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Service Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {services.map((service, index) => (
                <tr key={service._id}>
                  <td>{index + 1}</td>
                  <td>{service.service_name}</td>
                  <td>{service.category}</td>
                  <td>{service.price}</td>
                  <th>
                    <Link
                      to={`/service-update/${service._id}`}
                      className="btn btn-ghost btn-xs"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
