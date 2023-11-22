
import useAuth from "../../../customsHooks/useAuth/useAuth";
import useAxios from "../../../customsHooks/useAxiosSecure/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { LuChefHat } from "react-icons/lu";
import { GrDeliver } from "react-icons/gr";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
const { data: stats = [] } = useQuery({
  queryKey: ['admin-stats'],
  queryFn: async() =>{
    const res = await axiosSecure.get('/admin-stats');
    return res.data;
  }
})
  return (
    <div>
      <h1 className="text-[#151515] text-[32px] font-semibold flex items-center gap-2">
        <span> Hi, Welcome Back!</span>
        <p className="text-xl text-stone-500 uppercase">
          @{user?.displayName ? user?.displayName : "Back"}
        </p>
      </h1>
      <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <IoWalletOutline className="text-3xl" />
    </div>
    <div className="stat-title text-2xl">Revenue</div>
    <div className="stat-value">{stats.revenue}</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaUsers className="text-3xl" />
    </div>
    <div className="stat-title text-2xl">Customers</div>
    <div className="stat-value">{stats.users}</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <LuChefHat className="text-3xl" />
    </div>
    <div className="stat-title text-2xl">Products</div>
    <div className="stat-value">{stats.menuItems}</div>
    
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
    <GrDeliver className="text-3xl" />
    </div>
    <div className="stat-title text-2xl">Orders</div>
    <div className="stat-value">{stats.ordersItems}</div>
    
  </div>
  
</div>
    </div>
  );
};

export default AdminHome;
