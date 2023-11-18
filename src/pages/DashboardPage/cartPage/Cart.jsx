/* eslint-disable no-unused-vars */
import React from "react";
import useCart from "../../../customsHooks/useCartHooks/useCart";
import SubTitleSection from "../../../components/subTitleSection/SubTitleSection";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../customsHooks/useAxiosSecure/useAxios";
const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxios();
  //   console.log(cart)

  //   const totalPrice = cart.reduce( (total, item) =>{
  //    return total + item.price
  //   }, 0)
  //   console.log(totalPrice);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleCartItemDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          // console.log(res);
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SubTitleSection
        subHeading={"My Cart"}
        heading={"WANNA ADD MORE?"}
      ></SubTitleSection>
      <div className="flex justify-evenly items-center mb-8">
        <h1 className="text-[32px] text-[#151515] font-bold text-center">
          Total Items: {cart.length}
        </h1>
        <h1 className="text-[32px] text-[#151515] font-bold text-center">
          Total Price :${totalPrice}
        </h1>
        <button className="btn btn-outline btn-secondary">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054] text-[16px] text-white uppercase w-[892px] h-[72px]">
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="">${item.price}</td>
                <th>
                  <button
                    onClick={() => handleCartItemDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="w-[24px] h-[24px]" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
