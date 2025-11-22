"use client";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

const HeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleConnectClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsDropdownOpen(false);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("arun.sharma6932@gmail.com");
      toast.success("Email copied to clipboard!");
      setIsDropdownOpen(false);
    } catch (err) {
      toast.error("Failed to copy email");
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="w-full h-full md:max-w-9/12 mx-auto flex justify-center items-center mt-22 flex-auto">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col gap-3">
          <div className="w-40 h-40 rounded-full overflow-hidden landingimganimation">
            <img
              src="/arun-hero-img.png"
              className="w-full h-full object-center "
              alt="Avatar"
            />
          </div>
          <p className="text-[24px]  leading-[36px] text-center">Hi I'm Arun</p>
        </div>
        <p className="font-bold leading-[42px] md:leading-[58px] text-[32px] md:text-[48px] selection text-center">
          Merging beautiful frontends <br /> with bulletproof backends.
        </p>

        <p className="leading-[24px] md:text-[16px] font-normal selection text-center">
          Full stack developer with an eye for detail and a heart for clean
          architecture.
        </p>

        <div className="relative">
          <button
            ref={buttonRef}
            onClick={handleConnectClick}
            className="bg-black py-4 px-6 text-white hover:text-black border-2 rounded-full flow-btn relative z-10 cursor-pointer overflow-hidden"
          >
            CONNECT WITH ME
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-[var(--bg-color)] border border-[var(--text-color)] rounded-lg shadow-lg min-w-[200px] z-50"
              style={{
                animation: "fadeIn 0.2s ease-in-out forwards",
              }}
            >
              <div className="py-2">
                {/* Email */}
                <a
                  href="mailto:arun.sharma6932@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--primary-color)] transition-colors cursor-pointer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M2.25 4.5h19.5v15H2.25v-15Zm1.5 1.5v12h16.5v-12H3.75Zm8.25 6.75L4.5 6.75V7.5l7.5 5.25L19.5 7.5v-.75l-7.5 5.25Z" />
                  </svg>
                  <span className="text-sm">Email</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[var(--primary-color)] transition-colors cursor-pointer text-left text-sm text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                  </svg>
                  <span>Copy Email</span>
                </button>

                {/* Phone */}
                <a
                  href="tel:+919116016932"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--primary-color)] transition-colors cursor-pointer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.25a1 1 0 011 1c0 1.35.27 2.68.76 3.88a1 1 0 01-.21 1.11l-2.18 2.2Z" />
                  </svg>
                  <span className="text-sm">Phone</span>
                </a>

                {/* Divider */}
                <div className="h-[1px] bg-[var(--text-color)] opacity-20 my-1"></div>

                {/* GitHub */}
                <a
                  href="https://github.com/Arun-sharma-1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--primary-color)] transition-colors cursor-pointer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.086 1.838 1.236 1.838 1.236 1.07 1.833 2.807 1.303 3.492.996.107-.776.418-1.303.762-1.603-2.665-.303-5.466-1.328-5.466-5.931 0-1.31.467-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.44 11.44 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.104.823 2.222 0 1.606-.015 2.902-.015 3.292 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="text-sm">GitHub</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/arun.sharma.31"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--primary-color)] transition-colors cursor-pointer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm">Instagram</span>
                </a>

                {/* Divider */}
                <div className="h-[1px] bg-[var(--text-color)] opacity-20 my-1"></div>

                {/* View Full Contact */}
                <button
                  onClick={handleScrollToContact}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--primary-color)] transition-colors cursor-pointer text-left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 4.274 4.274 0 002.68-1.022 4.274 4.274 0 001.022-2.68V6.237c0-1.563-1.995-2.84-4.708-2.84a48.194 48.194 0 00-1.897.106 4.274 4.274 0 00-3.449 3.449 48.45 48.45 0 00-.106 1.897v6.162z"
                    />
                  </svg>
                  <span className="text-sm font-medium">View Full Contact</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="h-[1px] w-full bg-[#FBE6D0] mt-20 lg:mt-40"></div>

        {/* image animation section  */}
        <div>
          <div className="flex gap-4 relative invisible">
            <img src={"/js-img.svg"} className="w-[50px] moving-js-img" />
            <img src={"/docker-img.svg"} className="w-[50px] moving-doc-img" />
            <img src={"/next-img.webp"} className="w-[50px] moving-next-img " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
