import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "/public/img/user1.jpg";
import userTwoImg from "/public/img/user2.jpg";
import userThreeImg from "/public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-stone-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal ">
              J&apos;ai toujours aimé les vinyles, d&apos;ailleurs mon premier vinyle a été un cadeau de mon collègue <Mark>Ayman</Mark>. Maintenant c&apos;est devenu une véritable passion.
            </p>

            <Avatar
              image={userOneImg}
              name="Maxime Baron"
              title="Co-fondateur de Vinylon & de Gleegs"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal ">
              Quand j&apos;ai offert un vinyle à <Mark>Maxime</Mark>, j&apos;étais à deux doigts de le reprendre tellement il était stylé. Mais au final j&apos;ai pas fait le rat et j&apos;en ai racheté un autre.
            </p>

            <Avatar
              image={userTwoImg}
              name="Ayman Benammour"
              title="Co-fondateur de Vinylon & de Gleegs"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-stone-800 bg-amber-300 rounded-md ring-amber-300 ring-4">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;