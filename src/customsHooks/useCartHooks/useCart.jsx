/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxiosSecure/useAxios";
import useAuth from "../useAuth/useAuth";

const useCart = () => {
  const { user } = useAuth();
  //    use TanStack Query
  const axiosSecure = useAxios();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
