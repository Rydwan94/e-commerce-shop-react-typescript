import { useState } from "react";
import SubscribeConfirmation from "../../modals/SubscribeConfirmation";

const FooterForm = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    } else setIsModalOpen(true);

    setEmail('')

    setError(null);
  };

  return (
    <>
      <form className="max-md:text-center" onSubmit={handleOnSubmit}>
        <label className="font-bold" htmlFor="email">Get in Touch</label>
        <div className="flex mt-3">
          <input
            className="py-3 pl-2 pr-5 text-secondTextColor bg-[#F9F9F9] rounded-l-lg  focus:outline-none "
            name="email"
            id="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Your Email"
          />
          <button className="p-3 bg-primary text-lightTextColor rounded-r-lg" type="submit">
            Subscribe
          </button>
        </div>
        <strong className="text-sm text-dangerTextColor">{error}</strong>
      </form>
      <SubscribeConfirmation
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default FooterForm;
