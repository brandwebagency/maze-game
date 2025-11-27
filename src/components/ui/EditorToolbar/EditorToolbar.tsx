/* eslint-disable  prefer-template */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { FC } from "react";
import {
  FontBoldIcon,
  FontItalicIcon,
  Link1Icon,
  ListBulletIcon,
  PilcrowIcon,
  CameraIcon,
  HeadingIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, IconButton } from "@radix-ui/themes";

/**
 * EditorToolbar component renders a toolbar with markdown editing controls.
 *
 * @param {Object} props - Component props.
 * @param {string} props.id - The id of the textarea or input the toolbar controls.
 * @returns {JSX.Element} The rendered toolbar with markdown formatting buttons.
 *
 * @remarks
 * The toolbar provides buttons for italic, bold, header, quote, unordered list, and link markdown formatting.
 * Each button is wrapped in a corresponding markdown custom element (e.g., <md-italic>, <md-bold>).
 * The toolbar is intended to be used with a markdown editor input identified by the given `id`.
 */

const EditorToolbar: FC<{ id: string }> = ({ id }): JSX.Element => {
  return (
    <markdown-toolbar for={id}>
      <Flex gap="4">
        <Flex gap="1">
          <md-italic>
            <IconButton variant="soft" highContrast color="gray">
              <FontItalicIcon />
            </IconButton>
          </md-italic>

          <md-bold>
            <IconButton variant="soft" highContrast color="gray">
              <FontBoldIcon />
            </IconButton>
          </md-bold>

          <md-header>
            <IconButton variant="soft" highContrast color="gray">
              <HeadingIcon />
            </IconButton>
          </md-header>
        </Flex>

        <Flex gap="1">
          <md-quote>
            <IconButton variant="soft" highContrast color="gray">
              <PilcrowIcon />
            </IconButton>
          </md-quote>
          <md-unordered-list>
            <IconButton variant="soft" highContrast color="gray">
              <ListBulletIcon />
            </IconButton>
          </md-unordered-list>
        </Flex>

        <Flex gap="1">
          <md-link>
            <IconButton variant="soft" highContrast color="gray">
              <Link1Icon />
            </IconButton>
          </md-link>
        </Flex>
      </Flex>
    </markdown-toolbar>
  );
};

export default EditorToolbar;
