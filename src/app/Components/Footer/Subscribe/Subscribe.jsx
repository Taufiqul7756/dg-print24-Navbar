"use client";

// import { localSubscriptionHandler } from "@/localApiHandler/apiHandlers";
import { Button, Input } from "@nextui-org/react";
import React from "react";
// import toast from "react-hot-toast";

const Subscribe = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);

  //   const handleSubscribe = async (e) => {
  //     e.preventDefault();
  //     if (!email) {
  //       setError(true);
  //       toast.error("Please enter a valid email");
  //       return;
  //     }
  //     setError(false);
  //     await localSubscriptionHandler(email);
  //     //clear the form
  //     setEmail("");
  //   };

  return (
    // <form className="flex items-top" onSubmit={handleSubscribe}>
    <form className="flex items-top">
      <Input
        required
        type="email"
        variant="default"
        label="Email"
        size="sm"
        radius="none"
        isInvalid={error}
        errorMessage="Please enter a valid email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-black"
      />
      <Button
        size="lg"
        radius="none"
        type="submit"
        className=" text-sm text-white bg-primary-500 rounded-r-md"
      >
        SUBSCRIBE
      </Button>
    </form>
  );
};

export default Subscribe;
