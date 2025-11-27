import { FC, JSX } from "react";
import { Container, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const AccessDeniedPage: FC = (): JSX.Element => {
  return (
    <Container px={{ initial: "4", lg: "0" }}>
      <Heading>Access Denied</Heading>
      <Text as="p">{"You do not have permission to access this page."}</Text>
      <Link to="/">{"Go to Home"}</Link>
    </Container>
  );
};

export default AccessDeniedPage;
