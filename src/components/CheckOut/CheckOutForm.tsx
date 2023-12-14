import { useState } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { CheckoutFormData } from "../../interface/interfaces";
import SentDataModal from "../../modals/SentDataModal";

const CheckOutForm: React.FC = () => {

    const [dataIsSent, setDataIsSent] = useState<boolean>(false)

  const handleOnSubmit = (
    values: CheckoutFormData,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);

    setDataIsSent(true)

    resetForm();
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
    <div>
      <h1>Payment details</h1>
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
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-700"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" placeholder="email" />
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
