import { useLoaderData } from "react-router-dom";
import SubTitleSection from "../../../components/subTitleSection/SubTitleSection";
import { useForm } from "react-hook-form";
import useAxios from "../../../customsHooks/useAxiosSecure/useAxios";
import useAxiosPublic from "../../../customsHooks/useAxiosInPublic/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { name, recipe, category, price, _id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();
  const onSubmit = async (data) => {
    console.log(data);
    // first image upload in imgbb and then get an api to store in database
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the image url in the database
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      // add items only add by admins,Thats why we used axiosSecure here
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // reset();
        // show popup / sweet alert
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your item ${data.name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url:", res.data);
  };
  return (
    <div>
      <SubTitleSection heading={"UPDATE ITEM"}></SubTitleSection>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input {...register("name")} /> */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text text-[#444] text-[20px] font-semibold">
              Recipe name*
            </span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            defaultValue={name}
            required
            placeholder="Recipe name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-6">
          {/* category section */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-[#444] text-[20px] font-semibold">
                Category*
              </span>
            </label>
            <select
              defaultValue={category}
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="desserts">Desserts</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
          {/* price section */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-[#444] text-[20px] font-semibold">
                Price*
              </span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Recipe Details */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#444] text-[20px] font-semibold">
              Recipe Details*
            </span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            defaultValue={recipe}
            placeholder="Recipe Details"
          ></textarea>
        </div>
        <div>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-ghost w-full my-6 text-[20px] text-[#444]"
          />
        </div>
        <button className="btn w-1/3 h-[56px] text-[20px] text-white bg-[#835D23]">
          Update Item
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
