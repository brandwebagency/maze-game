import "@/styles/main.scss";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@radix-ui/themes";
import { ToastProvider } from "@/contexts/ToastProvider";
import Toaster from "@/components/ui/Toaster/Toaster";

export const ProtectedRoutes = () => {
  return (
    <ToastProvider>
      <Toaster />
      <Box minHeight="100vh">
        <Flex direction="column" minHeight="100vh">
          <Box flexGrow="1">
            <Outlet />
          </Box>
        </Flex>
      </Box>
    </ToastProvider>
  );
};
