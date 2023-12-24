import { useState } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { CheckoutFormData } from "../../interface/interfaces";
import SentDataModal from "../../modals/SentDataModal";
import { useProducts } from "../../context/ProductsProvider";
import { useNavigate } from "react-router-dom";

const CheckOutForm: React.FC = () => {

  const {setCart} = useProducts()

    const [dataIsSent, setDataIsSent] = useState<boolean>(false)

    const navigate = useNavigate()

  const handleGoToConfimartion = () => {
    navigate("/delivery-confirmation")
  }

  const handleOnSubmit = (
    values: CheckoutFormData,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);

    setDataIsSent(true)
    setCart([])
    resetForm();
    handleGoToConfimartion()
  };
  const initialValues: CheckoutFormData = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    comments: "",
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
    <h1 className="text-2xl font-bold mb-6">Payment Details</h1>
      <Formik
        initialValues={initialValues}
        validateOnBlur={false}
        validate={(values) => {
          const errors: { [key: string]: string } = {};

          if (!values.firstName) {
            errors.firstName = "First name is required";
          }
          if (!values.lastName) {
            errors.lastName = "Last name is required";
          }
          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = "Invalid email format";
          }
          if (!values.address) {
            errors.address = "Address is required";
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "Phone number is required";
          }

          return errors;
        }}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-700"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-700"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" placeholder="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full"  />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-700"
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Field
              type="text"
              id="address"
              name="address"
              placeholder="address"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-700"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="phoneNumber"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-700"
            />
          </div>
          <div>
            <label htmlFor="comments">Delivery Comments</label>
            <Field
              as="textarea"
              id="comments"
              name="comments"
              placeholder="comments"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage
              name="comments"
              component="div"
              className="text-red-700"
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <SentDataModal dataIsSent={dataIsSent} setDataIsSent={setDataIsSent} />
    </div>
  );
};

export default CheckOutForm;
