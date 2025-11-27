import React from "react";
import * as Toast from "@radix-ui/react-toast";
import { useToast } from "@/hooks/useToast";
import "./_toaster.scss";
import { Cross1Icon } from "@radix-ui/react-icons";

/**
 * Renders a list of toast notifications using the Toast context.
 *
 * This component subscribes to the `useToast` hook to retrieve the current toasts and a function to remove them.
 * Each toast is rendered as a `Toast.Root` element with its title, optional description, and a close button.
 * When a toast is closed, it is removed from the list.
 *
 * @returns {JSX.Element} The rendered toast notifications and viewport.
 */

const Toaster: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <Toast.Provider>
      {toasts.map((toast) => (
        <Toast.Root
          key={toast.id}
          className={`toast toast--${toast.type}`}
          duration={toast.duration}
          onOpenChange={(open) => {
            if (!open) removeToast(toast.id);
          }}
        >
          <Toast.Title className="toast__title">{toast.title}</Toast.Title>
          {toast.description && (
            <Toast.Description className="toast__description">
              {toast.description}
            </Toast.Description>
          )}
          <Toast.Close className="toast__close" aria-label="Close">
            <Cross1Icon />
          </Toast.Close>
        </Toast.Root>
      ))}
      <Toast.Viewport className="toast-viewport" />
    </Toast.Provider>
  );
};

export default Toaster;
