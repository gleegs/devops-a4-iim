import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-stone-100 bg-amber-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Envie de découvrir de nouveaux vinyles ?
          </h2>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/register"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-amber-600 bg-stone-100 rounded-md px-7 lg:px-10 lg:py-5 ">
            S&apos;inscrire
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;