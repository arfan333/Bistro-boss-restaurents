import { loadStripe } from "@stripe/stripe-js";
import SubTitleSection from "../../../components/subTitleSection/SubTitleSection";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForms from "./CheckoutForms";


// TODO : ADD PUBLISHABLE KEY HERE
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_KEY)
const Payment = () => {
    return (
        <div>
            <SubTitleSection heading={'PAYMENT'}></SubTitleSection>
            <Elements stripe={stripePromise}>
        <CheckoutForms></CheckoutForms>
            </Elements>
        </div>
    );
};

export default Payment;