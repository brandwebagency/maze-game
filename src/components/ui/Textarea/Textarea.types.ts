import { TextArea } from "@radix-ui/themes";

type TextAreaProps = React.ComponentPropsWithoutRef<typeof TextArea>;

export interface TextareaProps extends Omit<TextAreaProps, "children"> {
  label: string;
  layout: "row" | "column";
}
