import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Successfully cancel");
          const remainingBookings = bookings.filter((book) => book._id !== id);
          setBookings(remainingBookings);
        }
      });
  };

  return (
    <div>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold font-heading mb-4">
            My Bookings
          </h1>
        </div>
      </section>
      <section>
        <div className="mb-10 container mx-auto">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Service Name</th>
                  <th>Booked Date</th>
                  <th>Booking Date</th>
                  <th>Booked Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bookings.map((book, index) => (
                  <tr key={book._id}>
                    <td>{index + 1}</td>
                    <td>{book.service_name}</td>
                    <td>{book.createdAt}</td>
                    <td>{book.bookingDate}</td>
                    <td>{book.price}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        Cancel
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyBookings;
