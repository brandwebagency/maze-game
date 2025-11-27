import { siteRoutes } from "@/routes/siteRoutes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { FC, JSX, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useRouteError,
} from "react-router-dom";

const PageNotFound: FC = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  const handleTryAgain = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(location.pathname, { replace: true });
    incrementCount();
  };

  const navigate = useNavigate();
  const location = useLocation();
  const error = useRouteError() as Error | null;

  if (error && error.message) {
    // The error is intentional from us. i.e. a NON 404 ERROR!
    return (
      <Flex align="center" justify="center" className="loader">
        <Flex align="center" gap="6" direction="column">
          <Container px={{ initial: "4", lg: "0" }}>
            <Heading as="h1" mb="0">
              404: {"Page Not Found"}
            </Heading>
            <Text as="p">{error.message}</Text>
          </Container>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex align="center" justify="center" className="loader">
      <Flex align="center" gap="6" direction="column">
        <ExclamationTriangleIcon
          width="64"
          height="64"
          className="loader__icon loader__icon--error"
        />
        <Flex direction="column" gap="3" align="center">
          <Heading as="h1" mb="0">
            404: {"Page Not Found"}
          </Heading>
          <Text as="p">{"The page you are looking for does not exist."}</Text>
          <Flex gap="3">
            <Button onClick={() => navigate(siteRoutes.home.path)}>
              Go to {siteRoutes.home.label}
            </Button>

            <Button
              variant="soft"
              onClick={handleTryAgain}
              disabled={count >= 3}
            >
              Try again
            </Button>
          </Flex>
          <Text as="p" color="gray" size="2">
            {count >= 3 && "You have reached the maximum number of retries."}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageNotFound;
