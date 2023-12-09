import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { VolumeDown, VolumeMute } from "react-bootstrap-icons";

const INITIAL_VOLUME = 0.1;

export default function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMute, setIsMute] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = isMute ? 0 : INITIAL_VOLUME;
  }, [audioRef, isMute]);

  return (
    <div>
      <IconButton
        aria-label="Mute/Unmute Volume"
        icon={isMute ? <VolumeMute /> : <VolumeDown />}
        onClick={() => setIsMute(!isMute)}
        size="sm"
        fontSize={18}
      />
      <audio
        src="/audios/background.mp3"
        autoPlay
        loop
        style={{ display: "none" }}
        ref={audioRef}
      />
    </div>
  );
}
