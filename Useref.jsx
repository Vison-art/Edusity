    import React, { useEffect, useRef } from "react";
    const Useref = () => {

      const count = useRef(10);
        
      useEffect(() => {
        const interval = setInterval(() => {
          count.current += 1;
          console.log("Count:", count.current); // Logs without causing re-render
        }, 1000);

        return () => clearInterval(interval);
      }, []);

    
      return (
        <>
        <p>Check the console for count updates</p>;
        </>
      )
    }

    export default Useref



