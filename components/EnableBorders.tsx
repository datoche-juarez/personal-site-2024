"use client";

import { useEffect } from "react";
const { enableBorders, disableBorders } = require("ui-borders");

const EnableBorders = () => {
  useEffect(() => {
    enableBorders(); // Apply borders on mount
    return () => disableBorders(); // Clean up on unmount
  }, []);

  return null; // No UI to render
};

export default EnableBorders;
