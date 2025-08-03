"use client";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

import useForm from "@/hooks/useForm";
import {
  ButtonStyled,
  GlassCard,
  GlowingBorder,
} from "@/lib/commonElements/styledComponent";
import React from "react";
// import { Link } from "lucide-react";
import { InstagramIcon } from "@/lib/Icon";
import useThrottle from "@/hooks/useThrottle";

const ContactComponent = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    position: "HR",
    message: "",
  };
  const { formData, setFields, handleChange } = useForm(initialValue);

  const submitHandler = useThrottle(function () {
    const { firstName, emailAddress, message } = formData;

    if (
      !firstName.trim() ||
      firstName.trim().length <= 2 ||
      !emailAddress.trim() ||
      emailAddress.trim().length <= 2 ||
      !message.trim() ||
      message.trim().length <= 2
    ) {
      toast.error("All fields must be filled.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
    emailjs
      .send(
        serviceId, 
        templateId,
        formData,
        publicKey
      )
      .then(
        () => {
          toast.success("Form submitted successfully!");
          // console.log("Email sent successfully!", result.text);
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );

    setFields(initialValue);
  },
  1000);
  return (
    <>
      <div className="mt-20 flex items-center justify-center">
        <GlowingBorder>
          <GlassCard className="p-[1rem] md:p-[2rem]">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
              🚀 Get in Touch
            </h2>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              submitHandler()
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    onChange={handleChange}
                    value={formData?.firstName}
                    className="w-full bg-black bg-opacity-50 text-white border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    onChange={handleChange}
                    value={formData?.lastName}
                    className="w-full bg-black bg-opacity-50 text-white border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  onChange={handleChange}
                  value={formData?.emailAddress}
                  className="w-full bg-black bg-opacity-50 text-white border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>
              <div className="relative">
                <select
                  name="position"
                  onChange={handleChange}
                  defaultValue={"HR"}
                  // value={formData?.position}
                  className="w-full bg-black bg-opacity-50 text-white border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-cyan-400 transition-all"
                >
                  <option>Software Engineer</option>
                  <option>Recruiter</option>
                  <option>Founder</option>
                  <option>HR</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="relative">
                <textarea
                  onChange={handleChange}
                  name="message"
                  value={formData?.message}
                  placeholder="Message (max 1000 chars)"
                  maxLength={1000}
                  className="w-full bg-black bg-opacity-50 text-white border border-gray-700 rounded px-4 py-3 h-32 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                />
              </div>
              <div className="flex justify-center">
                <ButtonStyled type="submit">➤ Send Message</ButtonStyled>
              </div>
            </form>
            <p className="text-gray-400 text-sm mt-8 text-center">
              I split my time between Rajasthan and Noida. If I don't respond
              right away, I'm probably on my way somewhere exciting!
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <div className="mt-10 flex flex-col items-center gap-8">
                <div
                  className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-y-8 gap-x-10
                text-[var(--sec-bg-color)]
                text-[8px] md:text-sm
                "
                >
                  {/* Email */}
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <a
                      href="mailto:arun.sharma6932@gmail.com"
                      className="hover:text-cyan-400 transition-colors"
                      title="Email"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-10 h-10"
                      >
                        <path d="M2.25 4.5h19.5v15H2.25v-15Zm1.5 1.5v12h16.5v-12H3.75Zm8.25 6.75L4.5 6.75V7.5l7.5 5.25L19.5 7.5v-.75l-7.5 5.25Z" />
                      </svg>
                    </a>
                    <span>arun.sharma6932@gmail.com</span>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <a
                      href="tel:+919116016932"
                      className="hover:text-cyan-400 transition-colors"
                      title="Phone"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-10 h-10"
                      >
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.25a1 1 0 011 1c0 1.35.27 2.68.76 3.88a1 1 0 01-.21 1.11l-2.18 2.2Z" />
                      </svg>
                    </a>
                    <span>+91 9116016932</span>
                  </div>

                  {/* GitHub */}
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <a
                      href="https://github.com/Arun-sharma-1"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-400 transition-colors"
                      title="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-10 h-10"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.086 1.838 1.236 1.838 1.236 1.07 1.833 2.807 1.303 3.492.996.107-.776.418-1.303.762-1.603-2.665-.303-5.466-1.328-5.466-5.931 0-1.31.467-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.44 11.44 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.104.823 2.222 0 1.606-.015 2.902-.015 3.292 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <span>Arun-sharma-1</span>
                  </div>

                  {/* Instagram */}
                  <div className="flex flex-col gap-2 justify-center items-center text-[var(--sec-bg-color)]">
                    <a
                      href="https://instagram.com/arun.sharma.31"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-400 transition-colors"
                      title="Instagram"
                    >
                      {/* <img
                        src="/social/instagram.svg"
                        width={34}
                        height={34}
                        alt="Instagram"
                        style={{background:'transparent' , color:'white'}}
                        className="w-10 h-10 text-[var(--sec-bg-color)]"
                      /> */}

                      <InstagramIcon width="80px" height="46px" />
                    </a>
                    <span>arun.sharma.31</span>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-4">
                  📍 Noida
                </p>
              </div>
            </div>
          </GlassCard>
        </GlowingBorder>
      </div>
    </>
  );
};

export default ContactComponent;
