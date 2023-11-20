import { useQuery } from "@tanstack/react-query";
import SubTitleSection from "../../../components/subTitleSection/SubTitleSection";
import useAuth from "../../../customsHooks/useAuth/useAuth";
import useAxios from "../../../customsHooks/useAxiosSecure/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: paymentHistories = [] } = useQuery({
    queryKey: ["paymentHistories", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SubTitleSection
        heading={"PAYMENT HISTORY"}
        subHeading={"GET MORE"}
      ></SubTitleSection>
      <h2 className="text-3xl border-b-8 ">
        Total Payments:{" "}
        <span className="text-green-900">{paymentHistories.length}</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra my-10">
          {/* head */}
          <thead className="bg-[#D1A054] text-[16px] text-white uppercase w-[892px] h-[62px]">
            <tr>
              <th>#</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistories.map((history, index) => (
              <tr key={history._id}>
                <th>{index + 1}</th>
                <td>${history.price}</td>
                <td>{history.transactionId}</td>
                <td>{history.date}</td>
                <td>{history.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
