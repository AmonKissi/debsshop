"use client";

import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

const logoUrl = "https://image.noelshack.com/fichiers/2024/31/2/1722356811-img-4866-removebg-preview.png";

export const Logo = () => {
    const pathname = usePathname();

    const logoStyle = {
        maxWidth: '35%',
        height: 'auto',
    };

    if (pathname === "/") {
        return (
            <h1 className="flex items-center font-bold" aria-label="homepage">
                <img src={logoUrl} alt="Company Logo" style={logoStyle} />
            </h1>
        );
    }
    return (
        <div className="flex items-center font-bold">
            <LinkWithChannel aria-label="homepage" href="/">
                <img src={logoUrl} alt="Company Logo" style={logoStyle} />
            </LinkWithChannel>
        </div>
    );
};


