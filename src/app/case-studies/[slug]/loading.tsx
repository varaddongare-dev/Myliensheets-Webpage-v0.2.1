import React from "react";

export default function Loading(): React.JSX.Element {
  return (
    <div className="mx-auto max-w-[1180px] px-6 pb-16 pt-24 sm:px-8 md:px-10 lg:px-12">
      <div className="animate-pulse rounded-[34px] border border-black/[0.04] bg-white/50 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-8 lg:p-10">
        <div className="h-4 w-48 rounded-full bg-[#dbe5f1]" />
        <div className="mt-6 h-12 w-full max-w-[560px] rounded-[20px] bg-[#dbe5f1]" />
        <div className="mt-4 h-6 w-full max-w-[720px] rounded-full bg-[#edf3fb]" />
        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.75fr)]">
          <div className="h-[320px] rounded-[30px] bg-[#edf3fb]" />
          <div className="space-y-5">
            <div className="h-[170px] rounded-[30px] bg-[#f8eed5]" />
            <div className="h-[145px] rounded-[30px] bg-[#edf3fb]" />
          </div>
        </div>
      </div>
    </div>
  );
}
