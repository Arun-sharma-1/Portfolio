import CustomDrawer from "@/lib/commonElements/CustomDrawer";
import ThemeProvider from "@/provider/themeProvider";
import StoreProvider from "@/redux/storeProvider";
import React from "react";
import { Toaster } from "react-hot-toast";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
    return <div className="size-full relative">
        {children}
        <CustomDrawer />
    </div>;
};

export default LayoutComponent;
