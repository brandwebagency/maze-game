import { FC, JSX } from "react";
import { Heading } from "@radix-ui/themes";

const DefaultHomePage: FC = (): JSX.Element => {
  return (
    <>
      <Heading as="h1">Default Home Page</Heading>
    </>
  );
};

export default DefaultHomePage;
