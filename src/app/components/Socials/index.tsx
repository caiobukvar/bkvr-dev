"use client";
import { Mail, Rocket } from "lucide-react";
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
        <div className="flex gap-2 items-center">
          <Mail />
          <p className="text-2xl font-bold">Send me an e-mail!</p>
        </div>
        <div className="flex flex-col w-full sm:flex-row gap-6">
          <div className="flex flex-col font-bold w-full">
            <label htmlFor="name" className="text-lime-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Insert your name..."
              value={values.name}
              onChange={(e) => handleChange(e)}
              className="bg-slate-800 rounded-md p-2 text-md font-semibold tracking-tight text-slate-400 outline-none hover:ring-2 hover:ring-lime-600 focus-visible:ring-2 focus-visible:ring-lime-600 placeholder:text-slate-600"
            />
          </div>

          <div className="flex flex-col font-bold w-full">
            <label htmlFor="email" className="text-lime-600">
              E-mail
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              placeholder="Insert your e-mail..."
              onChange={(e) => handleChange(e)}
              className="bg-slate-800 rounded-md p-2 text-md font-semibold tracking-tight text-slate-400 outline-none hover:ring-2 hover:ring-lime-600 focus-visible:ring-2 focus-visible:ring-lime-600 placeholder:text-slate-600"
            />
          </div>
        </div>
        <div className="flex flex-col font-bold w-full">
          <label htmlFor="content" className="text-lime-600">
            Content
          </label>
          <textarea
            placeholder="Insert e-mail content..."
            name="content"
            id="content"
            value={values.content}
            onChange={(e) => handleChange(e)}
            className="bg-slate-800 rounded-md p-2 text-md font-semibold tracking-tight text-slate-400 outline-none min-h-[200px] hover:ring-2 hover:ring-lime-600 focus-visible:ring-2 focus-visible:ring-lime-600 placeholder:text-slate-600"
          />
        </div>
        <div>
          <button
            type="button"
            className="flex gap-2 bg-slate-700 hover:bg-slate-600 outline-none hover:ring-2 hover:ring-lime-600 hover:underline text-lime-600 text-md rounded-md p-3 focus-visible:ring-2 focus-visible:ring-lime-600"
            onClick={(e) => onSubmit(e)}
          >
            Send <Mail />
          </button>
        </div>
      </form>

      {isLoading && <Loading />}
    </div>
  );
}
