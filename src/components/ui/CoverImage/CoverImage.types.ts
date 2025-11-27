export interface CoverImageProps {
  src: string;
  alt: string;
  heading?: string;
  desc?: string;
  children?: React.ReactNode;
  badges?: React.ReactNode;
  size?: "default" | "large";
}
