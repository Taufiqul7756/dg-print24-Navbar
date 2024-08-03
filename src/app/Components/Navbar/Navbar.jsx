"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import Image from "next/image.js";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import logo from "../../../../public/logo.png";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [userData, setUserData] = React.useState(false);

  return (
    <Navbar maxWidth="2xl" height={"11rem"} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className=" hidden lg:flex flex-col py-2 ">
        <div className="grid grid-cols-4 place-items-center w-full lg:pl-0">
          <NavbarBrand>
            <Link href="/" color="foreground">
              <Image
                as={logo}
                width={150}
                height={50}
                src={logo}
                alt="Tech analytica's logo"
                radius="none"
                // isBlurred={false}
                // className="w-24 sm:w-36 md:w-48"
              />
            </Link>
          </NavbarBrand>

          <Input
            variant="bordered"
            radius="sm"
            placeholder="Search in DG Print..."
            size="lg"
            startContent={<CiSearch size={24} />}
            type="search"
            // classNames={{
            //   base: "col-span-1",
            // }}
          />

          {/* -------------- Login or logout -------------- */}
          <div className=" w-[50%] flex flex-row gap-2 justify-between items-center">
            <Button
              href="/cart"
              as={Link}
              isIconOnly
              variant="light"
              disableRipple
              size="lg"
              className="hidden md:flex md:justify-center"
            >
              <IoCartOutline size={28} />
            </Button>

            <NavbarItem className="flex flex-row gap-1">
              {/* check login user - Login Button Show  */}
              {!userData && (
                <>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        variant="ghost"
                        size="md"
                        radius="sm"
                        className="border-none"
                      >
                        RESOURCES
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem key="templates">Templates</DropdownItem>
                      <DropdownItem key="blog">Blog</DropdownItem>
                      <DropdownItem key="university">University</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <Button
                    variant="bordered"
                    size="md"
                    radius="sm"
                    disableRipple
                    className="hidden md:flex md:justify-center border-[#ED1F24] hover:bg-[#ED1F24] hover:text-white"
                    // onClick={onOpenModal2}
                  >
                    LOGIN
                  </Button>
                  <Button
                    variant="bordered"
                    size="md"
                    radius="sm"
                    disableRipple
                    className="bg-black text-white border-none hover:bg-[#ED1F24] hover:text-white"
                    // onClick={onOpenModal2}
                  >
                    REGISTER FOR FREE
                  </Button>
                </>
              )}
            </NavbarItem>
          </div>
        </div>
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      {/* <NavbarMenu>
        
      </NavbarMenu> */}
    </Navbar>
  );
}
