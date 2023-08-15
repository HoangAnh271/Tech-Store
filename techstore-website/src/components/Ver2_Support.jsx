import React, { useRef, useEffect, useState } from "react";
import Avatar from '../Chat/Avatar'
import SupportWindow from '../Chat/SupportWindow'

export default function Ver2_Support() {

  const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const [visible, setVisible] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
  return (
    <div ref={wrapperRef} >
        <SupportWindow visible={visible} />
        <Avatar onClick={() => setVisible(true)} />
    </div>
  )
}


  

  
