import { FormEvent, useState } from "react";

import { Opinion, OpinionFormProps } from "../../interface/interfaces";

const OpinionForm = ({ productId, productsList, setProductsList }: OpinionFormProps ) => {
  

  const [form, setForm] = useState({
    name: "",
    email: "",
    opinionText: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    opinionText: "",
  });

  const handleOpinionForm = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", opinionText: "" };

    if (form.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (form.opinionText.trim() === "") {
      newErrors.opinionText = "Opinion text is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const opinionId = Math.floor(Math.random() * 10000)

    if (validateForm()) {
      const newOpinion: Opinion = {
        id: opinionId,
        name: form.name,
        email: form.email,
        opinionText: form.opinionText,
      };

      const newData = productsList.map((product) =>
        product.id === productId
          ? {
              ...product,
              opinions: [...product.opinions, newOpinion],
            }
          : product
      );

      setProductsList(newData);

      setForm({
        name: "",
        email: "",
        opinionText: "",
      });
    }
  };

  return (
    <form className="flex flex-col basis-1/2 " onSubmit={handleOnSubmit}>
      <label htmlFor="opinionText">
        <textarea
          className={`w-full h-[300px] p-4 bg-lightGray2 border-lightGray1 border-1 rounded-lg focus:outline-none ${
            errors.opinionText && "border-red-500"
          }`}
          name="opinionText"
          id="opinionText"
          placeholder="Message"
          value={form.opinionText}
          onChange={handleOpinionForm}
        ></textarea>
        {errors.opinionText && (
          <p className="text-red-500">{errors.opinionText}</p>
        )}
      </label>
      <div className="flex max-md:justify-center items-center">
        <label htmlFor="name" className="mr-4">
          <input
            className={`bg-lightGray2 w-full p-2 rounded-lg focus:outline-none ${
              errors.name && "border-red-500"
            }`}
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={form.name}
            onChange={handleOpinionForm}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </label>
        <label htmlFor="email">
          <input
            className={`bg-lightGray2 w-full p-2 rounded-lg focus:outline-none ${
              errors.email && "border-red-500"
            }`}
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleOpinionForm}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </label>
      </div>
      <button
        className="bg-primary p-3 text-white rounded-lg hover:bg-hoverColor transition-all self-start mt-5"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default OpinionForm;
