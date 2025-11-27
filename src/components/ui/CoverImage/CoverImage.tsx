import { FC, JSX } from "react";
import {
  Box,
  AspectRatio,
  Heading,
  Text,
  Container,
  Flex,
} from "@radix-ui/themes";
import useViewportWidth from "@/hooks/useViewportWidth";
import { CoverImageProps } from "./CoverImage.types";

/**
 * A React components that displays a cover image.
 *
 * Used on overview pages.
 *
 * @prop {string} src - The image source of the component
 * @prop {string} alt - The alt text of the component
 * @prop {string} heading - (Optional) Page title inside the image
 * @prop {string} desc - (Optional) The description of the component
 * @prop {React.ReactNode} children - (Optional) Content to be displayed below heading and desc.
 * @prop {React.ReactNode} badges - (Optional) Badges to be displayed next to the heading.
 * @prop {"default" | "large"} size - (Optional) The size of the component.
 *
 */

const CoverImage: FC<CoverImageProps> = ({ ...props }): JSX.Element => {
  const isMobile = useViewportWidth(768);
  const isTablet = useViewportWidth(1280);

  const size =
    props.size === "large"
      ? isMobile
        ? 4 / 3
        : isTablet
        ? 4 / 2
        : 8 / 4
      : isMobile
      ? 4 / 5
      : isTablet
      ? 4 / 2
      : 4 / 1;

  const isVideo = props.src.includes("mp4") || props.src.includes("webm");
  const isMP4 = props.src.includes("mp4");

  return (
    <Box className="cover-image align-full">
      <AspectRatio ratio={size}>
        {!isVideo ? (
          <img
            src={props.src}
            alt={props.alt}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={props.src} type={`video/${isMP4 ? "mp4" : "webm"}`} />
          </video>
        )}
      </AspectRatio>

      <Box className="cover-image__content" pb="5">
        <Container px={{ initial: "4", md: "2", xl: "0" }}>
          <Flex direction="column" gap="3">
            <Flex
              align={{ initial: "start", md: "center" }}
              mb="0"
              gap="3"
              direction={{ initial: "column", md: "row" }}
            >
              <Heading as="h1" my="0">
                {props.heading}
              </Heading>
              {props.badges}
            </Flex>
            <Text as="p" size="3">
              {props.desc}
            </Text>
            <Box>{props.children && props.children}</Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default CoverImage;
