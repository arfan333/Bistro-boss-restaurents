/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../customsHooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../customsHooks/useAxiosSecure/useAxios";
import useCart from "../../customsHooks/useCartHooks/useCart";

// eslint-disable-next-line react/prop-types
const ManageFoodCard = ({ item }) => {
  const [, refetch] = useCart()
  const { image, name, recipe, price, _id } = item;
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const axiosSecure = useAxios()
  const handleAddToCart = (food) => {
    if (user && user.email) {
      // send cart items into the database
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your ${name} cartItem has been saved`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the cart
          refetch()
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login to add to the cart!",
        width: 600,
        padding: "3em",
      }).then((result) => {
        if (result.isConfirmed) {
          // send to the login Page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <p className="w-[44px] h-[26px] absolute right-0 mr-4 mt-4 bg-black text-white text-[16px]">
        ${price}
      </p>
      <div className="card-body text-center mx-4">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageFoodCard;
