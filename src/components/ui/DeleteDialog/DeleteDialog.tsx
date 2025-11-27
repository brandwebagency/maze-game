import { AlertDialog, Button, Flex, IconButton } from "@radix-ui/themes";
import React from "react";
import { DeleteDialogProps } from "./DeleteDialog.types";
import { TrashIcon } from "@radix-ui/react-icons";

/**
 * A reusable dialog component for confirming the deletion of an item.
 *
 * @param {string} type - The type of item to be deleted, displayed in the dialog.
 * @param {() => void} onSubmit - Callback function invoked when the user confirms deletion.
 *
 * @returns {JSX.Element} The rendered delete confirmation dialog.
 *
 * @example
 * <DeleteDialog type="brand" onSubmit={handleSubmit} />
 */

const DeleteDialog: React.FC<DeleteDialogProps> = ({ type, onSubmit }) => {
  const isJunction = type === "brandRetailJunction";
  const textReplacemnt = isJunction ? "connection" : type;

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        {isJunction ? (
          <IconButton color="red">
            <TrashIcon />
          </IconButton>
        ) : (
          <Button color="red">Delete {type}</Button>
        )}
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Delete {textReplacemnt}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This {textReplacemnt} will no longer be accessible and
          any existing connection to it will be lost.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={onSubmit}>
              Delete {textReplacemnt}
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteDialog;
