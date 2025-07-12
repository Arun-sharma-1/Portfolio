import React, { FC } from "react";
import { createPortal } from "react-dom";
interface props {
  children: React.ReactNode;
  position: "left" | "right" | "top" | "bottom";
}
const CustomDrawer: FC<props> = ({ children, position = "right" }) => {
  return createPortal(
    <div className="fixed inset-0 z-[999]">
      {/* drawer panel  */}
      <div
        className={`
             ${position === "right" ? "top-0 right-0 h-full w-64" : ""}
          ${position === "left" ? "top-0 left-0 h-full w-64" : ""}
          ${position === "bottom" ? "bottom-0 left-0 w-full h-64" : ""}
          ${position === "top" ? "top-0 left-0 w-full h-64" : ""}
                `}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default CustomDrawer;
