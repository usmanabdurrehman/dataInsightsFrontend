import { IconButton } from "@chakra-ui/react";
import React from "react";
import { Moon, Sun } from "react-bootstrap-icons";
import { useDarkMode } from "../../store";

export default function LightDarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode((store) => store);

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
