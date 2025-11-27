import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";
import { FC, JSX } from "react";
import { AlertProps } from "./Alert.types";

/**
 * A functional component that renders an alert using the `Callout` component.
 * It displays an icon and a text message, with a customizable color.
 *
 * @param {AlertProps} props - The properties for the Alert component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the alert.
 * @param {string} [props.color] - The color of the alert. Defaults to "red" if not provided.
 *
 * @returns {JSX.Element} The rendered Alert component.
 */

const Alert: FC<AlertProps> = ({ children, color }): JSX.Element => {
  return (
    <Callout.Root color={color ? color : "red"}>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  );
};

export default Alert;
