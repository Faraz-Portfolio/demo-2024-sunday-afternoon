import { Howl } from "howler";
import { useCallback, useMemo } from "react";
import { ASSETS } from "./assets";

export function useAudio() {
  const bgMusic = useMemo(() => {
    return new Howl({
      src: ASSETS.WODDDEN_FLOOR.AUDIO.BG,
      volume: 1,
      html5: true,
      preload: true,
    });
  }, []);

  return {
    playAudio: useCallback(() => {
      if (bgMusic) {
        bgMusic.loop(true);
        bgMusic.play();
      }
    }, [bgMusic]),
    stopAudio: useCallback(() => {
      if (bgMusic) {
        bgMusic.stop();
      }
    }, [bgMusic]),
  };
}
