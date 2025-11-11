import React from "react";
import {
  ClipboardList,
  Tag,
  DollarSign,
  FileText,
  Image,
  User,
  Mail,
} from "lucide-react";

const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const service_name = e.target.service_name.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const photoURL = e.target.photoURL.value;
    console.log(service_name, price, category, description, photoURL);
  };

  return (
    <div className="py-20 bg-base-100 flex justify-center items-center w-full">
      <div className="card w-full max-w-lg bg-white shadow-2xl p-8 lg:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-base-content mb-2">
            Add a New Service
          </h2>
          <p className="text-gray-500">
            Share your service details to connect with customers easily.
          </p>
        </div>

        <form onSubmit={handleAddService} className="space-y-6">
          <div className="flex justify-between items-center gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center font-medium">
                  <ClipboardList size={16} className="mr-2 text-primary" />{" "}
                  Service Name
                </span>
              </label>
              <input
                type="text"
                name="service_name"
                placeholder="Enter service name"
                className="input input-bordered border-primary outline-primary w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center font-medium">
                  <DollarSign size={16} className="mr-2 text-primary" /> Price
                </span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter price (in BDT)"
                className="input input-bordered border-primary outline-primary w-full"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center font-medium">
                <Tag size={16} className="mr-2 text-primary" /> Category
              </span>
            </label>
            <select
              className="select select-bordered border-primary outline-primary w-full"
              defaultValue=""
              required
              name="category"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="Cleaner">Cleaner</option>
              <option value="Painter">Painter</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Technician">Technician</option>
              <option value="Gardener">Gardener</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center font-medium">
                <FileText size={16} className="mr-2 text-primary" /> Description
              </span>
            </label>
            <textarea
              rows="4"
              name="description"
              placeholder="Write a short description of the service"
              className="textarea textarea-bordered border-primary outline-primary w-full"
              required
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center font-medium">
                <Image size={16} className="mr-2 text-primary" /> Image URL
              </span>
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Paste image link of your service"
              className="input input-bordered border-primary outline-primary w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center font-medium">
                <User size={16} className="mr-2 text-primary" /> Provider Name
              </span>
            </label>
            <input
              type="text"
              name="provider_name"
              defaultValue={"Name"}
              className="input input-bordered border-primary outline-primary w-full"
              required
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center font-medium">
                <Mail size={16} className="mr-2 text-primary" /> Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={"email"}
              className="input input-bordered border-primary outline-primary w-full"
              required
              readOnly
            />
          </div>

          <div className="form-control mt-8">
            <button
              type="submit"
              className="btn btn-primary shadow-lg text-white rounded-lg w-full"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
