"use client";
import { Mail, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Github from "/public/images/github-logo.svg";
import Linkedin from "/public/images/linkedin-logo.svg";
import { useState } from "react";
import { sendMail } from "../../../lib/api/sendMail";

type ContactError = string | undefined;
interface ContactDataState {
  values: typeof initValues;
  isLoading: boolean;
  error: ContactError;
}

const initValues = {
  name: "",
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

  const onSubmit = async () => {
    setContactData((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendMail(values);
      setContactData(initState);
      // toast success
    } catch (error) {
      const typedError = error as Error;
      setContactData((prev) => ({
        ...prev,
        isLoading: false,
        error: typedError.message,
      }));
      // toast error
    }
  };

  return (
    <div className="flex flex-col w-full max-w-screen-lg p-4 gap-16 mt-12">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <Rocket />
          <h3 className="text-2xl font-bold">Want to know more?</h3>
        </div>
        <p className="text-xl font-bold text-slate-600">Find me on</p>

        <Link
          href="https://github.com/caiobukvar"
          className="flex gap-4 items-center hover:underline hover:decoration-lime-600 hover:text-lime-600"
          target="_blank"
        >
          {" "}
          <Image src={Github} height={24} width={24} alt="github" />
          Github
        </Link>

        <Link
          href="https://www.linkedin.com/in/caiobukvar/"
          className="flex gap-4 items-center hover:underline hover:decoration-lime-600 hover:text-lime-600"
          target="_blank"
        >
          <Image src={Linkedin} height={24} width={24} alt="linkedin" />
          Linkedin
        </Link>
      </div>

      <form className="flex flex-col gap-6">
        <p className="text-xl font-bold text-slate-600">
          Or send me an e-mail:{" "}
        </p>
        <textarea
          placeholder="Insert e-mail content..."
          onChange={(e) => handleChange(e)}
          className="bg-slate-800 rounded-md p-2 text-md font-semibold tracking-tight text-slate-400 placeholder:text-slate-w-48 text-center0 outline-none min-h-[200px] hover:ring-2 hover:ring-lime-600 focus-visible:ring-2 focus-visible:ring-lime-600"
        />
        <div>
          <button
            type="submit"
            className="flex gap-2 bg-slate-700 hover:bg-slate-600 outline-none hover:ring-2 hover:ring-lime-600 hover:underline text-lime-600 text-md rounded-md p-3 focus-visible:ring-2 focus-visible:ring-lime-600"
            onClick={onSubmit}
          >
            Send <Mail />
          </button>
        </div>
      </form>
    </div>
  );
}
