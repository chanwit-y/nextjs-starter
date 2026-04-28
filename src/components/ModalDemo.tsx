"use client";

import { useModal } from "@/components/common/Modal/ModalContext";
import Button from "@/components/common/Button/Button";
import Flex from "@/components/common/Flex/Flex";
import TextField from "@/components/common/TextField/TextField";

export default function ModalDemo() {
  const { openModal, closeModal } = useModal();

  const handleBasic = () => {
    openModal(
      <p>This is a basic modal with a blur backdrop and smooth animations.</p>,
      { title: "Basic Modal", size: "sm", key: "basic" },
    );
  };

  const handleWithFooter = () => {
    const id = "with-footer";
    openModal(
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <TextField variant="outlined" label="Name" />
        <TextField variant="outlined" label="Email" />
      </div>,
      {
        title: "Contact Form",
        size: "md",
        key: id,
        footer: (
          <Flex gap={1}>
            <Button variant="text" onClick={() => closeModal(id)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => closeModal(id)}>
              Submit
            </Button>
          </Flex>
        ),
      },
    );
  };

  const handleLarge = () => {
    openModal(
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <p>This large modal can hold more complex content.</p>
        <p style={{ color: "var(--muted-foreground)" }}>
          Click the backdrop or press <kbd>Escape</kbd> to close.
        </p>
        <Button
          variant="outlined"
          onClick={() =>
            openModal(<p>A nested modal on top!</p>, {
              title: "Nested Modal",
              size: "sm",
              key: "nested",
            })
          }
        >
          Open Nested Modal
        </Button>
      </div>,
      { title: "Large Modal", size: "lg", key: "large" },
    );
  };

  return (
    <Flex gap={2}>
      <Button variant="outlined" onClick={handleBasic}>
        Basic Modal
      </Button>
      <Button variant="contained" onClick={handleWithFooter}>
        Form Modal
      </Button>
      <Button variant="outlined" onClick={handleLarge}>
        Large + Nested
      </Button>
    </Flex>
  );
}
