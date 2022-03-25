import { RefObject, HTMLAttributes, useMemo, useRef, useState } from "react";

export function useHover(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;

  let [isHovered, setHovered] = useState(false);
  let state = useRef({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
  }).current;

  let hoverProps = useMemo(() => {
    let triggerHoverStart = (event, pointerType) => {
      console.log(12005, "aaaaaaa", pointerType,onHoverStart);

      if (isDisabled || pointerType === "touch" || state.isHovered) return;
      //   state.isHovered = true;
      let target = event.target;
      if (onHoverStart) {
        onHoverStart({
          type: "hoverstart",
          target,
          pointerType,
        });
      }

      if (onHoverChange) onHoverChange(true);

      setHovered(true);
    };

    let triggerHoverEnd = (event, pointerType) => {
      if (isDisabled || pointerType === "touch" || state.isHovered) return;

      state.isHovered = false;
      let target = event.target;

      if (onHoverEnd) {
        onHoverEnd({
          type: "hoverend",
          target,
          pointerType,
        });
      }
      if (onHoverChange) onHoverChange(false);

      setHovered(false);
    };

    let hoverProps = {};

    if (typeof PointerEvent !== "undefined") {
      hoverProps.onPointerEnter = (e) => {
        triggerHoverStart(e, e.pointerType);
      };

      hoverProps.onPointerLeave = (e) => {
        triggerHoverEnd(e, e.pointerType);
      };
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps.onMouseEnter = (e) => {
        if (state.ignoreEmulatedMouseEvents) {
          triggerHoverStart(e, "mouse");
        }
        state.ignoreEmulatedMouseEvents = false;
      };

      hoverProps.onMouseLeave = (e) => {
        triggerHoverEnd(e, "mouse");
      };
    }

    return hoverProps;
  }, [onHoverStart, onHoverChange, onHoverEnd, isDisabled, state]);

  return {
    hoverProps,
    isHovered: isHovered,
  };
}
