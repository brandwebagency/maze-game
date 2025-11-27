import { Box, Flex, Spinner } from "@radix-ui/themes";
import React from "react";
import { LoaderProps } from "./Loader.types";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

/**
 * Loader component that displays a centered spinner in the color of the current theme.
 *
 * This component uses Flexbox to center a Spinner component both
 * horizontally and vertically within its container.
 *
 * @returns {JSX.Element} The rendered Loader component.
 */

const Loader: React.FC<LoaderProps> = ({ children, type = "loading" }) => {
  const isError = type === "error";

  return (
    <Flex align="center" justify="center" className="loader">
      <Flex align="center" gap="6" direction="column">
        {isError ? (
          <ExclamationTriangleIcon
            width="64"
            height="64"
            className="loader__icon loader__icon--error"
          />
        ) : (
          <Spinner />
        )}
        {children && <Box as="span">{children}</Box>}
      </Flex>
    </Flex>
  );
};

export default Loader;
