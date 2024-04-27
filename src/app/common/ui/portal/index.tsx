"use client";
// import { ReactNode, useEffect, useRef, useState } from "react";
// import { createPortal } from "react-dom";

// interface IProps {
//   children?: ReactNode;
// }

// export function Portal({ children }: IProps) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [mounted, setMounted] = useState(false);
//   console.log(children, "children children");

//   useEffect(() => {
//     // Check if window is defined (i.e., if running in the browser)
//     // if (typeof window !== "undefined") {
//     const element = document.createElement("div");
//     const nextElement = document.getElementById("__next");
//     console.log(nextElement, "nextElement nextElement");

//     if (nextElement) {
//       nextElement.appendChild(element);
//       ref.current = element;
//       setMounted(true);

//       return () => {
//         if (ref.current) {
//           ref.current.remove();
//         }
//       };
//     }
//     // }
//   }, []);

//   return mounted ? createPortal(children, ref.current!) : null;
// }

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children?: ReactNode;
}

export function Portal({ children }: IProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const element = document.createElement("div");
      document.getElementById("__next")!.append(element);
      ref.current = element;
      setMounted(true);

      return () => {
        ref.current?.remove();
      };
    }
  }, []);

  return ref.current && mounted ? createPortal(children, ref.current) : null;
}
