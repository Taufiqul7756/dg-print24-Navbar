"use client";

import React from "react";
import { Link, Image, Button } from "@nextui-org/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Subscribe from "./Subscribe/Subscribe";
import { GoStarFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { FaLinkedinIn } from "react-icons/fa6";

import logo from "../../../../public/logo.png";

const Footer = () => {
  const footerData = [
    {
      columnTitle: "Business Hours",
      links: [
        { title: "Monday to Friday", href: "/allproducts" },
        { title: "Customer Service:10AM TO 6PM", href: "/businesscard" },
        { title: "EST Pick up:4 PM to 7PM EST", href: "/booklet" },
        { title: "1-800-985-8916", href: "/packing" },
      ],
      subTitle: "Exclusive offers and products are just a click away.",
      component: <Subscribe />,
    },
    {
      columnTitle: "Help Center",
      links: [
        { title: "Dgprint24 University", href: "/contact" },
        { title: "Custom Quote", href: "/location" },
        { title: "Cancellation & Refund", href: "/info" },
        { title: "Request a call back", href: "/guide" },
        { title: "Turnaround information", href: "/refund" },
        { title: "File preparation Guide", href: "/help" },
        { title: "Business tools", href: "/blog" },
      ],
    },
    {
      columnTitle: "DGprint24.com",
      links: [
        { title: "Discover us", href: "/about" },
        { title: "Career", href: "/cr" },
        { title: "Site Map ", href: "/cata" },
        { title: "Shipping option ", href: "/privacy" },
        { title: "Terms of service", href: "/privacy" },
        { title: "Privacy Policy", href: "/antispam" },
      ],
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <footer className="">
      <div className="bg-gradient-to-r from-[#ED1F24] via-black to-[#000000] text-white py-12 px-4 ">
        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8 overflow-hidden text-[#f9f9f9]">
          <div className="flex justify-center mb-10" onClick={toggleDrawer}>
            <Image
              width={60}
              height={20}
              src="/images/google.png"
              alt="google"
            />
            <h1 className="text-center ml-2">DGPRINT24</h1>
            <div className="flex gap-1 mt-1 mx-2">
              <GoStarFill className="text-[#FF6229]" />
              <GoStarFill className="text-[#FF6229]" />
              <GoStarFill className="text-[#FF6229]" />
              <GoStarFill className="text-[#FF6229]" />
              <GoStarFill className="text-[#FF6229]" />
            </div>
            <p>0 Google reviews</p>
          </div>

          <div className="md:hidden">
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              enableOverlay={false}
              direction="left"
              className="text-black"
              size={"70vw"}
            >
              <div>
                <Button
                  isIconOnly
                  onClick={toggleDrawer}
                  variant="light"
                  className=" float-end text-black font-bold"
                >
                  <IoMdClose size={24} />
                </Button>
                <div className="px-2 flex flex-col gap-4">
                  <h1 className="text-lg font-bold pt-4">
                    DGPRINT24 Customer Reviews
                  </h1>
                  <p>No reviews yet</p>
                </div>
              </div>
            </Drawer>
          </div>
          <div className="hidden md:block">
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              enableOverlay={false}
              direction="left"
              className="text-black"
              size={"30vw"}
            >
              <div>
                <Button
                  isIconOnly
                  onClick={toggleDrawer}
                  variant="light"
                  className=" float-end text-black font-bold"
                >
                  <IoMdClose size={24} />
                </Button>
                <div className="px-2 flex flex-col gap-4">
                  <h1 className="text-lg font-bold pt-4">
                    DGPRINT24 Customer Reviews
                  </h1>
                  <p>No reviews yet</p>
                </div>
              </div>
            </Drawer>
          </div>

          <div className="md:flex  md:justify-between">
            <div className="grid grid-cols-1 justify-items-start md:grid-cols-2 lg:grid-cols-4 gap-16">
              {/* first column -  DG print LOGO */}
              <div className="text-[#f9f9f9]">
                <div className="flex flex-col bg-white px-5 rounded-md py-3">
                  <Image
                    src={logo}
                    alt="logo"
                    width={170}
                    height={47}
                    className=" mr-5 rounded-none"
                  />
                </div>
                <div className="flex flex-col gap-1 justify-start pt-12">
                  <p className="text-lg">37-66 72nd Street Jackson</p>
                  <p className="text-lg">Heights NY 11372</p>
                  <p className="text-lg">Support@dgprint24.com</p>
                </div>
                <div className="text-md mt-6">Follow us on social</div>
                <div className="flex gap-6 mt-3">
                  <Link href="#">
                    <FaFacebookF className="text-2xl text-white" />
                  </Link>
                  <Link href="#">
                    <FaTwitter className="text-2xl text-white" />
                  </Link>
                  <Link href="#">
                    <FaLinkedinIn className="text-2xl text-white" />
                  </Link>
                  <Link href="#">
                    <FaInstagram className="text-2xl text-white" />
                  </Link>
                </div>
              </div>

              {footerData.map((footersData, index) => {
                return (
                  <div key={index} className="">
                    <h2 className="mb-6 font-bold text-[#f9f9f9] dark:text-foreground/90 md:text-lg lg:text-xl ">
                      {footersData.columnTitle}
                    </h2>
                    {footersData?.links && (
                      <ul className="">
                        {footersData.links.map((link, index) => (
                          <li key={index} className="mb-3">
                            <Link
                              href={link.href}
                              className="text-[#f9f9f9] md:text-sm lg:text-base dark:text-foreground/80 hover:underline"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="grid gap-2 py-6 ">
                      <h1>{footersData.subTitle}</h1>
                      {footersData.component}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#282828] text-center text-white py-4 ">
        <p>Copyright © 2024 - DGPRINT24.com All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
