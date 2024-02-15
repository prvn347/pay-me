import { useEffect, useRef } from "react";

export function Button({label,onClick}){
    const submitButtonRef = useRef(null);

  useEffect(() => {
    function handleKeyPress(event) {
      // Check if the pressed key is 'Enter'
      if (event.key === 'Enter') {
        // Trigger click event on the submit button
        submitButtonRef.current.click();
      }
    }

    // Add event listener to listen for key presses
    document.addEventListener('keypress', handleKeyPress);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []); 
    return                 <button  ref={submitButtonRef}type="button" onClick={onClick} className=" bg-custom-blue p-2 px-9 text-white w-full text-sm font-semibold rounded  "> {label}</button>
    
}