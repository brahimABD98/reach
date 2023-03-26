import type { PropsWithChildren } from "react";

export const Layout = (props: PropsWithChildren) => {

  return (
    <>
      <main className="flex h-screen grow justify-center">
        <div className="h-full border-x grow border-slate-400 md:max-w-2xl">
          <div className="flex boder-b grow border-slate-400 p-4">
            {props.children}
          </div>
        </div>
      </main>
    </>
  );

};
