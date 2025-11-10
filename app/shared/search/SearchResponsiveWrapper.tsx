// "use client";

// import { useEffect } from "react";
// import { useMediaQuery } from "react-responsive";
// import SearchContainer from "./SearchContainer";
// import MobileSearch from "./MobileSearch";

// export default function SearchResponsiveWrapper() {
//   const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

//   useEffect(() => {
//     console.log("Mounted on client. isMobile:", isMobile);
//     console.log("Width check:", window.innerWidth);
//     console.log("isMobile:", isMobile);

//   }, [isMobile]);

//   return isMobile ? <MobileSearch /> : <SearchContainer />;

// }