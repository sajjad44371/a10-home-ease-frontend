import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const ServiceUpdate = () => {
  const serviceData = useLoaderData();
  const service = serviceData[0];
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Clicked");
    const service_name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.desc.value;
    const category = e.target.cat.value;
    const photoURL = e.target.photo.value;

    console.log(service_name, price, description, category, photoURL);

    const updatedService = {
      service_name,
      price,
      description,
      category,
      photoURL,
    };

    fetch(`http://localhost:3000/services/${service._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Successfully updated");
          navigate("/my-services")
        }
      });
  };

  return (
    <>
      <div className="">
        <form
          onSubmit={handleUpdate}
          className="max-w-6xl mx-auto min-h-screen flex justify-center items-center"
        >
          <fieldset className="">
            <label className="label">Service Name</label>
            <input
              type="text"
              className="input w-full mb-5"
              name="name"
              defaultValue={service?.service_name}
            />
            <label className="label">Description</label>
            <textarea
              name="desc"
              className="input w-full mb-5"
              defaultValue={service?.description}
            ></textarea>
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              className="input w-full mb-5"
              defaultValue={service?.price}
            />
            <label className="label">Category</label>
            <input
              type="text"
              name="cat"
              className="input w-full mb-5"
              defaultValue={service?.category}
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full mb-5"
              defaultValue={service?.photoURL}
            />
            <button className="btn btn-primary shadow-lg text-white rounded-lg">
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default ServiceUpdate;
