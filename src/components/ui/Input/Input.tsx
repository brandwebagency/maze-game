import { Text, Flex, TextField, Grid, Box } from "@radix-ui/themes";
import React from "react";
import { InputProps } from "./Input.types";

/**
 * `Input` is a reusable input component that wraps a styled text field with an optional label.
 * It forwards its ref to the underlying `TextField.Root` component.
 *
 * @param label - Optional label to display above the input field.
 * @param textFieldProps - Additional props passed to the `TextField.Root` component.
 * @param ref - Ref forwarded to the `TextField.Root` element.
 *
 * @example
 * ```tsx
 * <Input label="Username" id="username" />
 * ```
 */

const Input = React.forwardRef<
  React.ElementRef<typeof TextField.Root>,
  InputProps
>(({ label, layout = "column", ...textFieldProps }, ref) => {
  const isRowLayout = layout === "row";

  if (isRowLayout) {
    return (
      <Grid columns={{ initial: "1", md: "4" }} gap="3">
        <Box gridColumn={{ initial: "1 / -1", md: "1 / 2" }}>
          {label && (
            <Text
              as="label"
              weight="medium"
              htmlFor={textFieldProps.id}
              size="2"
            >
              {label}
            </Text>
          )}
        </Box>
        <Box gridColumn={{ initial: "1 / -1", md: "2 / -1" }}>
          <TextField.Root size="3" color="gray" ref={ref} {...textFieldProps} />
        </Box>
      </Grid>
    );
  }

  return (
    <Flex direction={layout} gap="1">
      {label && (
        <Text as="label" htmlFor={textFieldProps.id} size="2">
          {label}
        </Text>
      )}
      <TextField.Root size="3" color="gray" ref={ref} {...textFieldProps} />
    </Flex>
  );
});

Input.displayName = "Input";

export default Input;
