"use client";
import { HandMetal, Mail, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Github from "/public/images/github-logo.svg";
import Linkedin from "/public/images/linkedin-logo.svg";
import { useState } from "react";
import { sendMail } from "../../../lib/api/sendMail";
import { toast } from "sonner";
import Loading from "../Loading";

type ContactError = string | undefined;
interface ContactDataState {
  values: typeof initValues;
  isLoading: boolean;
  error: ContactError;
}

const initValues = {
  email: "",
  content: "",
};

const initState: ContactDataState = {
  values: initValues,
  isLoading: false,
  error: undefined,
};

export default function Socials() {
  const [contactData, setContactData] = useState(initState);

  const { values, isLoading, error } = contactData;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setContactData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactData((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendMail(values);

      setContactData(initState);

      toast.success("Mail sent!", {
        style: {
          color: "#a3e635",
          borderColor: "#a3e635",
        },
      });
    } catch (error) {
      const typedError = error as Error;
      setContactData((prev) => ({
        ...prev,
        isLoading: false,
        error: typedError.message,
      }));
      toast.error("Failed to send e-mail.", {
        style: {
          color: "rgb(220, 38, 38)",
          borderColor: "rgb(220, 38, 38)",
        },
      });
    }
  };

  return (
    <div className="flex flex-col w-full max-w-screen-lg p-4 gap-24 mt-24">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <Rocket />
          <h3 className="text-xl md:text-2xl font-bold">Want to know more?</h3>
        </div>
        <p className="text-md md:text-xl font-bold text-slate-600">
          Find me on
        </p>

        <Link
          href="https://github.com/caiobukvar"
          className="flex gap-4 items-center hover:underline hover:decoration-lime-600 hover:text-lime-600 text-md md:text-base"
          target="_blank"
        >
          {" "}
          <Image src={Github} height={24} width={24} alt="github" />
          Github
        </Link>

        <Link
          href="https://www.linkedin.com/in/caiobukvar/"
          className="flex gap-4 items-center hover:underline hover:decoration-lime-600 hover:text-lime-600 text-md md:text-base"
          target="_blank"
        >
          <Image src={Linkedin} height={24} width={24} alt="linkedin" />
          Linkedin
        </Link>
      </div>

      <form
        className="flex flex-col gap-8 rounded-md  "
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="flex gap-2 items-center">
          <HandMetal />
          <p className="text-xl md:text-2xl font-bold tracking-tight">
            Say hello!
          </p>
        </div>

        <div className="flex flex-col w-full sm:flex-row gap-6 ">
          <div className="flex flex-col font-bold w-full ">
            <div className="border-t-2 border-l-2 border-lime-600 w-40 h-2" />
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              placeholder="Your e-mail:"
              onChange={(e) => handleChange(e)}
              className="bg-transparent p-2 text-md font-semibold
              text-slate-400 outline-none tracking-tight
              placeholder:text-slate-600 focus:placeholder-lime-600
              hover:placeholder:text-lime-600"
            />
          </div>
        </div>
        <div className="flex flex-col font-bold w-full ">
          <div
            className="border-t-2 border-l-2 w-60 h-2 
           border-lime-600"
          />
          <textarea
            placeholder="Insert content here"
            name="content"
            id="content"
            value={values.content}
            onChange={(e) => handleChange(e)}
            className="bg-transparent p-2 text-md font-semibold min-h-[200px]
            text-slate-400 outline-none tracking-tight
            placeholder:text-slate-600 focus:placeholder-lime-600
            hover:placeholder:text-lime-600"
          />
        </div>
        <div>
          <button
            type="submit"
            className="flex gap-2 justify-center w-full md:w-auto  min-w-40  bg-slate-700 outline-none
            text-lime-600 text-md rounded-md p-3
            hover:bg-slate-600 hover:ring-2 hover:ring-lime-600 hover:underline
            focus-visible:ring-2 focus-visible:ring-lime-600"
          >
            Send <Mail />
          </button>
        </div>
      </form>

      {isLoading && <Loading />}
    </div>
  );
}
