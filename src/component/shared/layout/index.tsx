import CustomDrawer from "@/lib/commonElements/CustomDrawer";
import React from "react";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
    return <div className="size-full relative">
        {children}
        <CustomDrawer />
    </div>;
};

export default LayoutComponent;
