import useAuth from "../../../customsHooks/useAuth/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-[#151515] text-[32px] font-semibold flex items-center gap-2">
        <span> Hi, Welcome Back!</span>
        <p className="text-xl text-stone-500 uppercase">
          @{user?.displayName ? user?.displayName : "Back"}
        </p>
      </h1>
    </div>
  );
};

export default AdminHome;
