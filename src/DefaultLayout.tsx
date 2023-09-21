import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  return (
    <>
      <h1 className="text-6xl font-bold tracking-tight pb-4">{props.title}</h1>
      {props.description && (
        <div className="space-y-0.5">
          <p className="text-muted-foreground">
            Here you can find all important moments in my life
          </p>
        </div>
      )}
      <article className="bg-white p-4 border border-slate-300 rounded-xl">
        {props.children}
      </article>
    </>
  );
};
export default DefaultLayout;
