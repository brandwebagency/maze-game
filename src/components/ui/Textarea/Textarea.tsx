import { Text, Flex, TextArea, Box, Grid } from "@radix-ui/themes";
import React from "react";
import { TextareaProps } from "./Textarea.types";

/**
 * A reusable textarea component with an optional label.
 *
 * This component wraps a styled textarea (`TextArea`) and displays a label above it if the `label` prop is provided.
 * It forwards its ref to the underlying `TextArea` component.
 *
 * @param label - Optional label to display above the textarea.
 * @param textAreaProps - Additional props passed to the underlying `TextArea` component.
 * @param ref - Ref forwarded to the `TextArea` element.
 *
 * @example
 * ```tsx
 * <Textarea label="Description" id="desc" />
 * ```
 */

const Textarea = React.forwardRef<
  React.ElementRef<typeof TextArea>,
  TextareaProps
>(({ label, layout = "column", ...textAreaProps }, ref) => {
  const isRowLayout = layout === "row";

  if (isRowLayout) {
    return (
      <Grid columns={{ initial: "1", md: "4" }} gap="3">
        <Box gridColumn={{ initial: "1 / -1", md: "1 / 2" }}>
          {label && (
            <Text
              as="label"
              weight="medium"
              htmlFor={textAreaProps.id}
              size="2"
            >
              {label}
            </Text>
          )}
        </Box>
        <Box gridColumn={{ initial: "1 / -1", md: "2 / -1" }}>
          <TextArea
            size="3"
            color="gray"
            resize="vertical"
            ref={ref}
            {...textAreaProps}
          />
        </Box>
      </Grid>
    );
  }

  return (
    <Flex direction={layout} gap="1">
      {label && (
        <Text as="label" htmlFor={textAreaProps.id} size="2">
          {label}
        </Text>
      )}
      <TextArea
        size="3"
        color="gray"
        resize="vertical"
        ref={ref}
        {...textAreaProps}
      />
    </Flex>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
