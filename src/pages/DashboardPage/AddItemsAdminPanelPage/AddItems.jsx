import { FaUtensils } from "react-icons/fa6";
import SubTitleSection from "../../../components/subTitleSection/SubTitleSection";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../customsHooks/useAxiosInPublic/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);
    // first image upload in imgbb and then get an api to store in database
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
  };
  return (
    <div>
      <SubTitleSection
        subHeading={"What's new?"}
        heading={"ADD AN ITEM"}
      ></SubTitleSection>

      {/* used react hook0form */}
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
              defaultValue={"default"}
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
        <button className="btn w-[180px] h-[56px] text-[20px] text-white bg-[#835D23]">
          Add Item <FaUtensils className="w-[24px] h-[24px]"></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddItems;
