import React, {
  createContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";

interface ToastData {
  id: string;
  title: string;
  description?: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
}

export interface ToastContextType {
  toasts: ToastData[];
  showToast: (toast: Omit<ToastData, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const isMountedRef = useRef(true);
  const timeoutRefs = useRef<Map<string, NodeJS.Timeout>>(new Map());

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      // Clear all pending timeouts
      timeoutRefs.current.forEach((timeout) => {
        clearTimeout(timeout);
      });
      timeoutRefs.current.clear();
    };
  }, []);

  const showToast = useCallback((toast: Omit<ToastData, "id">) => {
    if (!isMountedRef.current) return;

    const id = uuidv4();
    const newToast: ToastData = {
      id,
      duration: 5000,
      type: "info",
      ...toast,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove toast after duration with cleanup tracking
    const timeoutId = setTimeout(() => {
      if (isMountedRef.current) {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }
      // Clean up the timeout reference
      timeoutRefs.current.delete(id);
    }, newToast.duration);

    // Store timeout reference for cleanup
    timeoutRefs.current.set(id, timeoutId);
  }, []);

  const removeToast = useCallback((id: string) => {
    if (!isMountedRef.current) return;

    // Clear the timeout if it exists
    const timeoutId = timeoutRefs.current.get(id);
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutRefs.current.delete(id);
    }

    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext };
