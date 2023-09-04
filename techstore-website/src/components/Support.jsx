import React, { useRef, useEffect, useState } from "react";
import Avatar from "./chat/Avatar";
import SupportWindow from "./chat/SupportWindow";

export default function Support() {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [visible, setVisible] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisible(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  return (
    <div ref={wrapperRef}>
      <SupportWindow visible={visible} />

      <div className=" fixed bottom-[24px] right-[24px] lg:bottom-24">
        <Avatar onClick={() => setVisible(true)} />
      </div>
    </div>
  );
}
