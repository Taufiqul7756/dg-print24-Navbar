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
  Divider,
  Modal,
  ModalContent,
  ModalBody,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@nextui-org/react";

import Image from "next/image.js";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdVerticalDistribute } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { PiChatsThin } from "react-icons/pi";
import { TfiHeadphone } from "react-icons/tfi";
import { RiMenu4Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";

import logo from "../../../../public/logo.png";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [userData, setUserData] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenModal2,
    onOpen: onOpenModal2,
    onOpenChange: onOpenChangeModal2,
  } = useDisclosure();

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Navbar
      maxWidth="2xl"
      height={"11rem"}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
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
            classNames={{
              base: "col-span-1",
            }}
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
                        onClick={() => setUserData(userData)}
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
                    onClick={onOpenModal2}
                  >
                    LOGIN
                  </Button>
                  <Button
                    variant="bordered"
                    size="md"
                    radius="sm"
                    disableRipple
                    className="bg-black text-white border-none hover:bg-[#ED1F24] hover:text-white"
                    onClick={onOpenModal2}
                  >
                    REGISTER FOR FREE
                  </Button>
                </>
              )}
              {/* check login user - Logout Button Show  */}
              {userData && (
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
                    onClick={() => setUserData(!userData)}
                  >
                    LOGOUT
                  </Button>
                  {/* <Button
                    variant="bordered"
                    size="md"
                    radius="sm"
                    disableRipple
                    className="bg-black text-white border-none hover:bg-[#ED1F24] hover:text-white"
                    // onClick={onOpenModal2}
                  >
                    REGISTER FOR FREE
                  </Button> */}
                </>
              )}
            </NavbarItem>
          </div>
        </div>
        <Divider className="mx-[100%]" />

        <div>
          <div className=" absolute left-0 bg-black w-full h-10"></div>
          <div className=" w-full flex flex-row gap-2 justify-center px-1">
            <div id="allProducts">
              <Button
                disableRipple
                disableAnimation
                radius="none"
                variant="light"
                endContent={<FaChevronDown className="animate-pulse" />}
                onClick={onOpen}
                className="text-white"
              >
                All Products
              </Button>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="5xl"
                placement="top"
                backdrop="opaque"
                radius="none"
                disableAnimation
              >
                {/* <ModalContent>
                  <ModalBody className="grid grid-cols-4">
                    {allProducts.map((category, index) => (
                      <div key={index}>
                        <p className=" text-lg font-extrabold">
                          {category.categoryname}
                        </p>
                        {category.products.map((product, i) => (
                          <Link
                            href={`/category/${category.categoryId}/${product.productId}`}
                            key={i}
                          >
                            <p className="text-black">{product.label}</p>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </ModalBody>
                </ModalContent> */}
              </Modal>
            </div>

            {/* <div className="flex flex-row gap-2 justify-items-center items-center">
              {allProducts.slice(0, 5).map((category, index) => (
                <Dropdown radius="none" key={index}>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      disableAnimation
                      radius="none"
                      variant="light"
                      // endContent={<FaChevronDown className="animate-pulse" />}
                      className="text-white"
                    >
                      {index === 0 && (
                        <div className="border-l h-6 border-white"></div>
                      )}
                      <div className="text-sm text-wrap flex gap-2 justify-items-center items-center">
                        {category.categoryname}
                        <span className="">
                          <FaChevronDown className="animate-pulse" />
                        </span>
                      </div>
                      {index < 4 && (
                        <div className="border-r h-6 border-white"></div>
                      )}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Static Actions"
                    className="max-h-60 overflow-y-auto"
                  >
                    {category.products.map((item, i) => (
                      <DropdownItem
                        key={i}
                        href={`/category/${category.categoryId}/${item.productId}`}
                      >
                        {item.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ))}
            </div> */}
          </div>

          {/* navbar -- create support ticket */}
          <div className="flex flex-wrap items-center justify-center gap-10 py-4 ">
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm w-full sm:w-1/2 md:w-auto text-black"
            >
              <span className="">
                <MdOutlineEmail size={20} />
              </span>
              <span>Create a support ticket</span>
            </Link>
            <div className="border-r h-6 hidden md:block border-black"></div>
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm w-full sm:w-1/2 md:w-auto text-black"
            >
              <span className="">
                <FaBookOpenReader className="" size={20} />
              </span>
              <span>Dgprint24 University</span>
            </Link>
            <div className="border-r h-6 hidden md:block border-black"></div>
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm w-full sm:w-1/2 md:w-auto text-black"
            >
              <span className="">
                <PiChatsThin size={20} />
              </span>
              <span>Chat with an agent</span>
            </Link>
            <div className="border-r h-6 hidden md:block border-black"></div>
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm w-full sm:w-1/2 md:w-auto text-black"
            >
              <span className="">
                <TfiHeadphone size={20} />
              </span>
              <span>Go to help center</span>
            </Link>
          </div>
        </div>
      </NavbarContent>

      {/* //!!hamburger icon open for medium screen ------------------- */}

      <div className="  lg:hidden w-full">
        {/* icon , logo and cart icon */}
        <NavbarContent className="py-4 gap-0 justify-evenly">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            icon={<RiMenu4Fill size={30} />}
            className="m-3"
          />
          <NavbarBrand className="justify-center">
            <Link href="/" color="foreground">
              <Image
                as={logo}
                width={100}
                height={50}
                src={logo}
                alt="Tech analytica's logo"
                radius="none"
                isBlurred={false}
              />
            </Link>
          </NavbarBrand>
          <Button
            href="/cart"
            as={Link}
            isIconOnly
            variant="light"
            disableRipple
            size="lg"
          >
            <IoCartOutline size={28} />
          </Button>
        </NavbarContent>
        <NavbarContent>
          <Input
            radius="sm"
            variant="bordered"
            placeholder="Search in DG Print..."
            size="lg"
            startContent={<CiSearch size={24} />}
            type="search"
          />
        </NavbarContent>
      </div>

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

      {/* //! MOBILE MENU */}

      <NavbarMenu>
        <NavbarContent
          justify="center"
          scrollShadowProps={{
            hideScrollBar: false,
          }}
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400"
        >
          <NavbarContent className="flex flex-col md:flex-row md:justify-center space-x-4 ">
            <div id="allProducts">
              <Popover placement="bottom">
                <PopoverTrigger>
                  <Button
                    disableRipple
                    disableAnimation
                    radius="none"
                    variant="light"
                    endContent={<FaChevronDown className="animate-pulse" />}
                  >
                    All Products
                  </Button>
                </PopoverTrigger>

                {/* <PopoverContent className="grid grid-cols-1 gap-4 max-h-60 overflow-scroll">
                  {allProducts.map((category, index) => (
                    <div key={index}>
                      <p className=" text-lg font-extrabold">
                        {category.categoryname}
                      </p>
                      {category.products.map((product, i) => (
                        <Link
                          href={`/category/${category.categoryId}/${product.productId}`}
                          key={i}
                          className="flex "
                        >
                          <p className="text-black">{product.label}</p>
                        </Link>
                      ))}
                    </div>
                  ))}
                </PopoverContent> */}
              </Popover>
            </div>
            {/* <div className="grid">
              {allProducts.map((category, index) => (
                <Dropdown radius="none" key={index}>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      disableAnimation
                      radius="none"
                      variant="light"
                      endContent={<FaChevronDown />}
                    >
                      {category.categoryname}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Static Actions"
                    className="max-h-60 overflow-scroll"
                  >
                    {category.products.map((item, i) => (
                      <DropdownItem
                        key={i}
                        href={`/category/${category.categoryId}/${item.productId}`}
                      >
                        {item.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ))}
            </div> */}
            <NavbarItem className="flex-shrink-0">
              {!userData && (
                <div className="flex flex-col gap-4">
                  <Button
                    variant="bordered"
                    size="md"
                    radius="sm"
                    disableRipple
                    className=""
                    onClick={onOpenModal2}
                  >
                    LOGIN
                  </Button>
                  <Button
                    variant="bordered"
                    size="md"
                    radius="sm"
                    disableRipple
                    className=""
                    onClick={onOpenModal2}
                  >
                    REGISTER FOR FREE
                  </Button>
                  <Modal
                    isOpen={isOpenModal2}
                    onOpenChange={onOpenChangeModal2}
                    backdrop="opaque"
                    radius="none"
                    disableAnimation
                  >
                    <ModalContent className="bg-transparent">
                      {/* <FormsTab /> */}
                    </ModalContent>
                  </Modal>
                </div>
              )}
              {/* {userData.accessToken && (
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <User
                      name={userData.name}
                      description={userData.email}
                      avatarProps={{
                        src: userData.picture,
                        showFallback: true,
                        name: userData.name,
                      }}
                      className="hover:drop-shadow-lg hover:cursor-pointer"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="myaccount" href="/profile/manage">
                      My Account
                    </DropdownItem>
                    <DropdownItem key="myorder" href="/profile/orders">
                      My Order
                    </DropdownItem>
                    <DropdownItem key="logout">
                      <Button
                        fullWidth
                        color="danger"
                        type="submit"
                        isLoading={loading}
                        onClick={handleLogout}
                      >
                        Log Out
                      </Button>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              )} */}
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
      </NavbarMenu>
    </Navbar>
  );
}
