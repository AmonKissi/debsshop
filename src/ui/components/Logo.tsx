"use client";

import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

const logoUrl = "https://image.noelshack.com/fichiers/2024/31/2/1722356811-img-4866-removebg-preview.png";

export const Logo = () => {
    const pathname = usePathname();

    if (pathname === "/") {
        return (
            <h1 className="flex items-center font-bold" aria-label="homepage">
                <img src={logoUrl} alt="Company Logo" />
            </h1>
        );
    }
    return (
        <div className="flex items-center font-bold">
            <LinkWithChannel aria-label="homepage" href="/">
                <img src={logoUrl} alt="Company Logo" />
            </LinkWithChannel>
        </div>
    );
};

