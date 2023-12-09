import { IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { Moon, Sun } from "react-bootstrap-icons";

export default function LightDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // TODO: Functionality need to be implemented using global state managements
  return null;

  return (
    <div>
      <IconButton
        aria-label="Light/Dark Mode"
        icon={isDarkMode ? <Sun /> : <Moon />}
        onClick={() => setIsDarkMode(!isDarkMode)}
        size="sm"
      />
    </div>
  );
}
