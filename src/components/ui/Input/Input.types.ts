import { TextField } from "@radix-ui/themes";

type TextFieldRootProps = React.ComponentPropsWithoutRef<typeof TextField.Root>;

export interface InputProps extends Omit<TextFieldRootProps, "children"> {
  label: string;
  layout?: "column" | "row";
}
