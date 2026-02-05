import React, { useEffect, useState } from "react";

const MyServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  console.log(services);

  return (
    <div>
      <h3>my services</h3>
      {services.map((service) => (
        <div key={service._id}>
          <h2>{service.service_name}</h2>
        </div>
      ))}
    </div>
  );
};

export default MyServices;
