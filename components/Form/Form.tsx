import Content from "@/constants";
import { FormContext } from "@/context/FormContext";
import { AnimatePresence, motion } from "motion/react";
import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../Button/Button";
const className = {
  error: " bg-red-100 border border-red-400 text-red-700 ",
  success: " bg-green--100 border border-green-400 text-green-700 ",
};
const Form = () => {
  const { isOpen, setIsOpen } = useContext(FormContext);
  const [isVisible, setIsVisible] = useState(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [description, setDescription] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState({
    isError: false,
    msg: "",
    className: className.error,
  });
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  const resetState = () => {
    setName("");
    setPhoneNumber("");
    setServiceNeeded("");
    setDescription("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (load) return;
    setLoad(true);
    try {
      const url = "https://vish-works-form.vishworks-ap.workers.dev/clients";

      const res = await fetch(url, {
        method: "post",
        body: JSON.stringify({ name, description, phoneNumber, serviceNeeded }),
      });
      const data = await res.json();
      if (data.error) {
        setError({
          isError: true,
          msg: data.error,
          className: className.error,
        });
        setTimeout(() => {
          setError((e) => ({ ...e, isError: false }));
        }, 5000);
        throw new Error(data.error);
      }
      if (setIsOpen) setIsOpen(false);

      setTimeout(() => {
        setError({
          className: className.success,
          isError: true,
          msg: "Details updated successfully we will contact you soon",
        });
      }, 1000);
      resetState();
      setTimeout(() => {
        setError((e) => ({ ...e, isError: false }));
      }, 5000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ right: "-1000px" }}
        animate={{ right: error.isError ? "10px" : "-1000px" }}
        className={
          "fixed top-[20%] right-3  px-4 py-3 rounded z-[1000]" +
          error.className
        }
        key={"error"}
      >
        {error.msg}
      </motion.div>

      {isVisible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
          className="fixed top-0 h-screen w-screen !bg-opacity-35 bg-black  dark:bg-white z-[999] flex flex-col items-center justify-end"
        >
          <motion.div
            className="flex flex-col"
            initial={{ y: "100%" }}
            transition={{ type: "tween" }}
            animate={{ y: isOpen ? 0 : "100%" }}
          >
            <button
              className=" rounded-full bg-primary-b p-2 mb-4 self-center xl:self-end"
              onClick={(e) => {
                e.preventDefault();
                if (setIsOpen) setIsOpen(false);
              }}
            >
              <IoClose size={30} className="text-primary-a" />
            </button>
            <form
              onSubmit={handleSubmit}
              className="bg-primary-b  max-h-[98vh]  relative rounded-tl-md rounded-tr-md p-5 xl:p-10"
            >
              <h2 className="text-[32px] font-bold xl:text-heading-medium dark:text-primary-a">
                Let’s level up your <br />
                brand, together
              </h2>
              <p className="text-paragraph-xsmall text-core-content-teritary">
                You can reach us anytime via{" "}
                <span className="cursor-pointer text-accent">
                  {Content.email}
                </span>
              </p>

              <label
                htmlFor="form-name"
                className="text-[16px] xl:text-heading-xxsmall text-primary-a inline-block mt-5"
              >
                NAME
              </label>
              <br />
              <input
                className="outline-none text-heading-xxsmall border px-3 py-5 w-full rounded-md bg-primary-b text-primary-a"
                required
                placeholder="Enter your name"
                id="form-name"
                name="form-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
              />
              <label
                htmlFor="form-phone"
                className="text-[16px] xl:text-heading-xxsmall text-primary-a inline-block mt-5"
              >
                PHONE NUMBER
              </label>
              <br />
              <div className="flex ">
                <p className="outline-none text-[16px] xl:text-heading-xxsmall text-primary-a border px-3 py-5 w-[20%] mr-1 rounded-md bg-primary-b">
                  +91
                </p>
                <input
                  className="outline-none text-[16px] xl:text-heading-xxsmall border px-3 py-5 w-full rounded-md bg-primary-b text-primary-a"
                  required
                  placeholder="Enter your phone number"
                  id="form-phone"
                  name="form-phone"
                  type="tel"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="[6-9][0-9]{9}"
                  title="Please valid Mobile number"
                />
              </div>
              <select
                name="serviceNeeded"
                id="ServiceNeeded"
                required
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded(e.target.value)}
                className="outline-none text-[16px] xl:text-heading-xxsmall mt-5 border px-3 py-5 w-full rounded-md bg-primary-b text-primary-a"
              >
                <option value="">SERVICE NEEDED</option>
                <option value="web-dev">Web Development </option>
                <option value="app-dev">App Development </option>
                <option value="ui/ux">UI/UX Design</option>
                <option value="bms">Business Management Solitons</option>
              </select>
              <label
                htmlFor="form-desc"
                className="text-[16px] xl:text-heading-xxsmall text-primary-a inline-block mt-5"
              >
                HOW CAN WE HELP?
              </label>
              <br />
              <textarea
                className="outline-none text-[16px] xl:text-heading-xxsmall border px-3 py-5 w-full rounded-md resize-none bg-primary-b text-primary-a"
                placeholder="Tell us little about your project"
                id="form-desc"
                name="form-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={300}
              />
              <Button
                type="submit"
                label="Submit"
                variant="black"
                className="w-full mt-4"
                load={load}
              />
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Form;
