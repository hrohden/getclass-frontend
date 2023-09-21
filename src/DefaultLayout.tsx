import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  return (
    <>
      <h1 className="text-6xl font-bold tracking-tight">{props.title}</h1>
      {props.description && (
        <p className="text-slate-400 text-2xl font-semibold tracking-tight">
          {props.description}
        </p>
      )}
      <article className="bg-white p-4 border border-slate-300 rounded-xl">
        {props.children}
      </article>
    </>
  );
};
export default DefaultLayout;
