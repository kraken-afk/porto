import React, { type ReactElement } from "react";
import profileImg from "./assets/meo.webp";
import ageCounter from "./helpers/ageCounter";

export default function App(): ReactElement {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-20 px-4">
        <figure className="mb-11 sm:w-48 md:w-52  rounded-full overflow-hidden w-40">
          <img src={profileImg} className="w-full" alt="profile" />
        </figure>
        <h1 title="this is my name" aria-label="My name is Romeo Noveanre." className="text-4xl mb-4">Romeo Noveanre</h1>
        <span title="my role" aria-label="Im a web developer." className="text-xl">Web Dev.</span>
        <p className="mt-24">Hi. 👋</p>
        <p>
          I'm a {ageCounter({ day: 11, month: 11, year: 2004 })}{" "}
          years old web developer from Indonesia, i've been doing code since
          early 2020. I used to code with front-end, but back-end is fine too.
          👻
        </p>
        <p>
          Graduated from vocational school with CS major. as well with informal
          education at{" "}
          <a href="https://dicoding.id">Dicoding academy</a>, with several
          classes including{" "}
          <a href="https://dicoding.com/certificates/4EXG93W9QZRL">
            Front-end Expert Class
          </a>,{" "}
          <a href="https://dicoding.com/certificates/ERZRG9LEQPYV">
            AWS practitioner
          </a>, and{" "}
          <a href="https://dicoding.com/users/romeo_noveanre_mslu">more.</a>
        </p>
        <div className="mx-auto my-16 gap-5 text-xl links">
          <a href="https://github.com/kraken-afk?tab=repositories">
            🎨Projects
          </a>
          <a href="https://linkedin.com/in/noveanrer/">
            🐙LinkedIn
          </a>
          <a href="mailto:noveanrer@gmail.com">
            📩noveanrer@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
