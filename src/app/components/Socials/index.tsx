"use client";
import { Mail, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { sendMail } from "../../../lib/api/sendMail";
import Loading from "../Loading";
import Github from "/public/images/github-logo.svg";
import Linkedin from "/public/images/linkedin-logo.svg";

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

        <div
          className="flex flex-col gap-6 border-l-2 pl-6
        border-lime-600"
        >
          <Link
            href="https://github.com/caiobukvar"
            className="flex gap-4 hover:text-lime-500 hover:underline text-md md:text-base"
            target="_blank"
          >
            <Image src={Github} height={32} width={32} alt="github" />
            <div className="flex flex-col ">
              <p>Github</p>
              <p className="text-xs text-slate-600">/caiobukvar</p>
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/caiobukvar/"
            className="flex gap-4 items-center hover:text-lime-500 hover:underline text-md md:text-base"
            target="_blank"
          >
            <Image src={Linkedin} height={32} width={32} alt="github" />
            <div className="flex flex-col ">
              <p>Linkedin</p>
              <p className="text-xs text-slate-600">in/caiobukvar</p>
            </div>
          </Link>
        </div>
      </div>

      <form className="flex flex-col gap-6" onSubmit={(e) => onSubmit(e)}>
        <div className="flex gap-2 items-center">
          <p className="text-xl md:text-2xl font-bold tracking-tight">
            Say hello
          </p>
        </div>

        <div className="flex flex-col gap-4 border-l-2 border-lime-600">
          <div className="flex flex-col w-full sm:flex-row gap-6 pl-6">
            <div className="flex flex-col font-bold w-full ">
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                placeholder="Your e-mail"
                onChange={(e) => handleChange(e)}
                className="bg-slate-800 p-2 text-md rounded-md text-slate-400 outline-none tracking-tight
                placeholder:text-slate-600 
                hover:placeholder:text-lime-500
                focus:placeholder-lime-600"
              />
            </div>
          </div>
          <div className="flex flex-col font-bold w-full  pl-6">
            <textarea
              placeholder="Insert content here"
              name="content"
              id="content"
              value={values.content}
              onChange={(e) => handleChange(e)}
              className="bg-slate-800 p-2 text-md min-h-[200px] rounded-md text-slate-400 outline-none tracking-tight
            placeholder:text-slate-600 
            hover:placeholder:text-lime-500
            focus:placeholder-lime-600"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="relative flex gap-2 items-center justify-center w-full md:w-auto min-w-40
            text-md rounded-md p-3 outline-none shadow-sm 
            shadow-lime-700 text-lime-600   bg-slate-700
            hover:ring-2 hover:ring-lime-500 hover:text-lime-500 hover:bg-slate-600 hover:underline
            focus-visible:ring-2 focus-visible:ring-lime-600
           "
          >
            Send <Mail />
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-lime-600 pointer-events-none opacity-10" />
          </button>
        </div>
      </form>
      {isLoading && <Loading />}
    </div>
  );
}
