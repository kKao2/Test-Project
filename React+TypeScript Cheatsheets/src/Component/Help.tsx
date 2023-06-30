import React from "react";

export default function Help() {
  return (
    <div className="w-full bg-white px-4 pb-20 pt-36 dark:bg-zinc-900 lg:px-28">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-black dark:text-neutral-100 lg:grid-cols-3 lg:gap-y-12">
        <div className="col-span-1 mb-5 space-y-4 lg:col-span-3 lg:mb-0">
          <p className="text-4xl font-bold">Need help?</p>
          <p className="">
            This project is maintained by a dedicated group of people.
          </p>
        </div>
        <div className="col-span-1 space-y-4 ">
          <p className="text-2xl font-bold">Browse Docs</p>
          <p className="">
            Learn more using the
            <button className="normal-link text-sky-500 whitespace-pre"> documentation on this site</button>
          </p>
        </div>
        <div className="col-span-1 space-y-4">
          <p className="text-2xl font-bold">Join the community</p>
          <p className="">Ask questions about the documentation and project</p>
        </div>
        <div className="col-span-1 space-y-4">
          <p className="text-2xl font-bold">Stay up to date</p>
          <p className="">Find out what's new with this project</p>
        </div>
      </div>
    </div>
  );
}
