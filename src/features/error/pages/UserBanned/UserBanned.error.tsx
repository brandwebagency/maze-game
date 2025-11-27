import { Container, Text } from "@radix-ui/themes";
import { FC, JSX } from "react";

const UserBannedPage: FC = (): JSX.Element => {
  return (
    <Container px={{ initial: "4", lg: "0" }}>
      <Text>You do not have permission to access this page!</Text>
    </Container>
  );
};

export default UserBannedPage;
