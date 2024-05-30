import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const LOGGGEDIN = false;

const Header = () => {
    return (
        <Navbar position="static" className={"bg-[#121212] absolute"}>
            <NavbarContent className="" >
                <NavbarBrand>
                    <Link href="/" className={"text-white text-lg font-bold"}>Home</Link>
                </NavbarBrand>

                {LOGGGEDIN && (
                    <NavbarItem>
                        <Link href="/logout" className={"text-white"}>logout</Link>
                    </NavbarItem>

                    // OR PUT A PROFILE CARD OR SOMETHING HERE IN PLACE OF LOGIN BUTTON !!
                )}

                {!LOGGGEDIN && (
                    <NavbarItem>
                        <Link href="/login" className={"text-white"}>Login</Link>
                    </NavbarItem>
                )}



                {/*
                    <NavbarItem>
                    <Button className={"bg-gradient-to-r from-green-400 to-blue-500"}>Resume</Button>
                </NavbarItem>
        */}
            </NavbarContent>
        </Navbar>
    );
};

export default Header;

// path: osu.quest/src/app/container/header/Header.tsx

