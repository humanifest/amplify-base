import { useEffect, RefObject } from "react";

export default function useScroll({
  ref,
  up,
  down,
}: {
  ref: RefObject<null>;
  up: VoidFunction;
  down: VoidFunction;
}) {
  useEffect(() => {
    function handleScroll(event: WheelEvent) {
      if (event.deltaY >= 0) {
        up();
      } else {
        down();
      }
    }
    // Bind the event listener
    document.addEventListener("wheel", handleScroll);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("wheel", handleScroll);
    };
  }, [ref, up, down]);
}
