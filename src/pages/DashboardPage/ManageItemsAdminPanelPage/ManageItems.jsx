import { FaTrashAlt } from "react-icons/fa";
import SubTitleSection from "../../../components/subTitleSection/SubTitleSection";
import useMenu from "../../../customsHooks/useMenu/useMenu";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../customsHooks/useAxiosSecure/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxios();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log('deleted item:', res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your Item ${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };
  return (
    <div>
      <SubTitleSection
        subHeading={"Hurry Up!"}
        heading={"MANAGE ALL ITEMS"}
      ></SubTitleSection>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="w-[892px] h-[72px] bg-[#D1A054] text-white text-[16px] font-semibold">
                <th className="text-[20px]">#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr
                  className="text-[16px] text-[#737373] font-normal"
                  key={item._id}
                >
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItems/${item._id}`}>
                      <button className="btn bg-[#D1A054] btn-lg">
                        <FaRegEdit className="w-[50px] h-[50px]" />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn bg-[#B91C1C] btn-lg"
                    >
                      <FaTrashAlt className="w-[24px] h-[24px] text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
