"use client";
import React from "react";
import { Button as MantineButton } from "@mantine/core";
import { buttonProps } from "@/types";
const Button = ({ children, styles, variant, gradient, size }: buttonProps) => {
  return (
    <MantineButton
      variant={variant || "gradient"}
      gradient={gradient || { from: "indigo", to: "cyan" }}
      style={...styles}
      size={size || "md"}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
