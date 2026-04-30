"use client";

import { useSnackbar } from "@/components/common/Snackbar/Snackbar";
import Button from "@/components/common/Button/Button";
import Flex from "@/components/common/Flex/Flex";

export default function SnackbarDemo() {
  const { showSnackbar, clearSnackbars } = useSnackbar();

  return (
    <Flex gap={2} wrap="wrap">
      <Button
        variant="contained"
        onClick={() =>
          showSnackbar({
            variant: "success",
            title: "Saved",
            message: "Your changes have been saved successfully.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() =>
          showSnackbar({
            variant: "error",
            title: "Something went wrong",
            message: "We couldn't complete your request. Please try again.",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outlined"
        onClick={() =>
          showSnackbar({
            variant: "warning",
            message: "Your session will expire in 5 minutes.",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outlined"
        onClick={() =>
          showSnackbar({
            variant: "info",
            message: "A new version is available.",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="text"
        onClick={() =>
          showSnackbar({
            message: "Item moved to archive.",
            actionLabel: "Undo",
            onAction: () =>
              showSnackbar({
                variant: "success",
                message: "Action undone.",
              }),
          })
        }
      >
        With action
      </Button>
      <Button
        variant="text"
        onClick={() =>
          showSnackbar({
            message: "This notification stays until dismissed.",
            duration: 0,
          })
        }
      >
        Persistent
      </Button>
      <Button variant="text" color="error" onClick={() => clearSnackbars()}>
        Clear all
      </Button>
    </Flex>
  );
}
