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
          fontSize: "14px",
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
          fontSize: "14px",
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
          fontSize: "14px",
        },
      });
    }
  };

  return (
    <div className="mt-24 flex w-full max-w-screen-lg flex-col gap-24 px-12">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-400">
          <Rocket />
          <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        </div>

        <p className="text-md font-bold text-slate-600 md:text-xl">{findMe}</p>

        <div
          className="flex flex-col gap-6 border-l-2 border-lime-600
        pl-6 text-slate-800 dark:text-slate-600"
        >
          <Link
            href="https://github.com/caiobukvar"
            className="text-md flex gap-4 text-slate-800
            hover:translate-x-2 hover:text-slate-400 hover:delay-75 md:text-base dark:text-slate-400 dark:hover:text-lime-500"
            target="_blank"
          >
            <Image src={Github} height={32} width={32} alt="github" />
            <div className="flex flex-col ">
              <p>Github</p>
              <p className="text-xs text-slate-400 dark:text-slate-600">
                /caiobukvar
              </p>
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/caiobukvar/"
            className="text-md flex items-center gap-4 text-slate-800 hover:translate-x-2 hover:text-slate-400
             hover:delay-75 md:text-base dark:text-slate-400 dark:hover:text-lime-400"
            target="_blank"
          >
            <Image src={Linkedin} height={32} width={32} alt="github" />
            <div className="flex flex-col ">
              <p>Linkedin</p>
              <p className="text-xs text-slate-400 dark:text-slate-600">
                in/caiobukvar
              </p>
            </div>
          </Link>
        </div>
      </div>

      <form className="flex flex-col gap-6" onSubmit={(e) => onSubmit(e)}>
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold tracking-tight text-slate-800 md:text-2xl dark:text-slate-400">
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
                className="text-md rounded-md bg-slate-300 p-2 tracking-tight text-slate-600 outline-none
                placeholder:text-slate-500 hover:placeholder:text-slate-600 focus:outline-slate-600
                focus:placeholder:text-slate-400 dark:bg-slate-800 dark:text-slate-400
                dark:placeholder:text-slate-600 dark:hover:placeholder:text-lime-500 dark:focus:outline-lime-600 
                "
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
              className="text-md min-h-[200px] rounded-md bg-slate-300 p-2 tracking-tight text-slate-600
              outline-none placeholder:text-slate-500 hover:placeholder:text-slate-600 focus:outline-slate-600
              focus:placeholder:text-slate-400 dark:bg-slate-800
              dark:text-slate-400 dark:placeholder:text-slate-600 dark:hover:placeholder:text-lime-500  dark:focus:outline-lime-600
              "
              onChange={(e) => handleChange(e)}
              onBlur={onBlur}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className={`md:text-md relative flex w-full min-w-40 items-center justify-center gap-2 overflow-hidden
            rounded-md bg-slate-300 p-3 text-sm text-slate-600 shadow-sm shadow-slate-700 outline-none 
            hover:bg-slate-200 hover:text-slate-500 hover:underline hover:ring-2
            hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-slate-600 md:w-auto dark:bg-slate-700 dark:text-lime-600 dark:shadow-lime-700
            dark:hover:bg-slate-600 dark:hover:text-lime-500 dark:hover:ring-lime-500 dark:focus-visible:ring-lime-600
            ${!values.email && !values.content && "hover:text-red-400 hover:ring-red-400"}
           `}
          >
            {formButton} <Mail />
            <div
              className={`pointer-events-none absolute bottom-0 left-0 right-0 h-full  bg-gradient-to-b from-lime-600  opacity-10`}
            />
          </button>
        </div>
      </form>
      {isLoading && <Loading />}
    </div>
  );
}
