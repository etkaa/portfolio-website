import React, { useState } from "react";

const ContactSection = () => {
  const defaultFormFields = {
    subject: "",
    senderName: "",
    body: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { subject, senderName, body } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-4 flex snap-center snap-always min-h-screen w-[100%] mx-auto text-white overflow-hidden"
    >
      <div className="w-[90%] flex flex-col align-center space-y-6 mx-auto my-auto max-w-xl">
        <p className="mx-auto my-auto text-[2.5rem] px-3 text-slate-200">
          Contact
        </p>
        <form
          action={`mailto:etka.acikoz@gmail.com?subject=${subject}&body=Name:%20${senderName}%0AMessage:%20${body}&name=`}
          method="post"
          encType="text/plain"
          className="flex flex-col justify-between h-[24rem] w-[100%] mx-auto my-auto "
        >
          <input
            placeholder="Your Name"
            name="senderName"
            onChange={handleChange}
            className="bg-gray-800 h-[2.5rem] w-full mx-auto my-auto shadow-md px-2 rounded-lg outline-none"
          />
          <input
            placeholder="Subject"
            onChange={handleChange}
            name="subject"
            className="bg-gray-800 h-[2.5rem] w-full mx-auto my-auto shadow-md px-2 rounded-lg outline-none"
          />
          <textarea
            placeholder="Your Message"
            onChange={handleChange}
            name="body"
            className="bg-gray-800 h-[8rem] w-full mx-auto my-auto shadow-md px-2 py-2 rounded-lg outline-none"
          ></textarea>
          <button
            href="mailto:etka.acikoze@gmail.com"
            type="submit"
            className="w-[30%] h-[12%] my-auto mx-auto rounded-xl flex justify-center items-center
            space-x-2 text-xl text-gray-700 bg-slate-100 hover:bg-cyan-300 transition duration-200"
          >
            <p>Send</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
        <div name="links" className="h-[4rem] flex justify-between">
          <a
            className="w-[30%] flex"
            target="_blank"
            href="https://www.github.com/manfromny"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-12 h-12 mx-auto my-auto"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <a
            className="w-[30%] flex"
            target="_blank"
            href="https://www.linkedin.com/in/etkaacikoz"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto my-auto"
              viewBox="0 0 192 192"
            >
              {
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <path d="M0,192v-192h192v192z" fill="none"></path>
                  <g fill="#000000">
                    <g id="surface1">
                      <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                    </g>
                  </g>
                </g>
              }
            </svg>
          </a>
          <a
            className="w-[30%] flex"
            target="_blank"
            href="mailto:etka.acikoz@gmail.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-14 h-14 mx-auto my-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
