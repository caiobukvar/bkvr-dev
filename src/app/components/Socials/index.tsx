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

type OnBlurEvent = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

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

interface SocialsTranslations {
  title: string;
  findMe: string;
  formTitle: string;
  formInputPlaceholder: string;
  formTextareaPlaceholder: string;
  formButton: string;
  tSuccessMsg: string;
  tErrorMsg: string;
  tErrorDesc: string;
  tFailMsg: string;
}

interface Props {
  socialsTranslations: SocialsTranslations;
}

export default function Socials({ socialsTranslations }: Props) {
  const [contactData, setContactData] = useState(initState);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const {
    title,
    findMe,
    formTitle,
    formInputPlaceholder,
    formTextareaPlaceholder,
    formButton,
    tSuccessMsg,
    tErrorMsg,
    tErrorDesc,
    tFailMsg,
  } = socialsTranslations;

  const { values, isLoading, error } = contactData;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) =>
    setContactData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

  const onBlur: OnBlurEvent = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.email || !values.content) {
      return toast.error(`${tErrorMsg}`, {
        style: {
          color: "rgb(248 113 113)",
          borderColor: "rgb(248 113 113)",
        },
        description: `${tErrorDesc}`,
      });
    }

    setContactData((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendMail(values);
      setTouched({});

      setContactData(initState);

      toast.success(`${tSuccessMsg}`, {
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
      toast.error(`${tFailMsg}`, {
        style: {
          color: "rgb(248 113 113)",
          borderColor: "rgb(248 113 113)",
        },
      });
    }
  };

  return (
    <div className="mt-24 flex w-full max-w-screen-lg flex-col gap-24 p-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Rocket />
          <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        </div>

        <p className="text-md font-bold text-slate-600 md:text-xl">{findMe}</p>

        <div
          className="flex flex-col gap-6 border-l-2 border-lime-600
        pl-6"
        >
          <Link
            href="https://github.com/caiobukvar"
            className="text-md flex gap-4 hover:translate-x-2
             hover:text-lime-500 hover:delay-75 md:text-base"
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
            className="text-md flex items-center gap-4 hover:translate-x-2 hover:text-lime-500
             hover:delay-75 md:text-base"
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
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold tracking-tight md:text-2xl">
            {formTitle}
          </p>
        </div>

        <div className="flex flex-col gap-4 border-l-2 border-lime-600">
          <div className="flex w-full flex-col gap-6 pl-6 sm:flex-row">
            <div className="flex w-full flex-col font-bold ">
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                placeholder={formInputPlaceholder}
                className="text-md rounded-md bg-slate-800 p-2 tracking-tight text-slate-400 outline-none
                placeholder:text-slate-600 
                hover:placeholder:text-lime-500
                focus:placeholder-lime-600"
                onChange={(e) => handleChange(e)}
                onBlur={onBlur}
              />
            </div>
          </div>
          <div className="flex w-full flex-col pl-6  font-bold">
            <textarea
              placeholder={formTextareaPlaceholder}
              name="content"
              id="content"
              value={values.content}
              className="text-md min-h-[200px] rounded-md bg-slate-800 p-2 tracking-tight text-slate-400 outline-none
              placeholder:text-slate-600 
              hover:placeholder:text-lime-500
              focus:placeholder-lime-600"
              onChange={(e) => handleChange(e)}
              onBlur={onBlur}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className={`text-md relative flex w-full min-w-40 items-center justify-center gap-2
            rounded-md bg-slate-700 p-3 text-lime-600 shadow-sm 
            shadow-lime-700 outline-none   hover:bg-slate-600
            hover:text-lime-500 hover:underline hover:ring-2 hover:ring-lime-500 focus-visible:ring-2
            focus-visible:ring-lime-600 md:w-auto
            ${(!values.email || !values.content) && "disabled opacity-70 hover:text-red-400 hover:ring-red-400"}
           `}
          >
            {formButton} <Mail />
            <div
              className={`pointer-events-none absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b opacity-10 
              ${!values.email || !values.content ? " from-red-300" : "from-lime-600"}`}
            />
          </button>
        </div>
      </form>
      {isLoading && <Loading />}
    </div>
  );
}
