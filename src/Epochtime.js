import React, { useState } from 'react';

export const Epochtime = () => {

    const [epoch, setDate] = React.useState(Math.floor(new Date().getTime()/1000.0)); // Save the current date to be able to trigger an update
    
    const useHover = () => {
        const [hovering, setHovering] = useState(false)
        const onHoverProps = {
          onMouseEnter: () => setHovering(true),
          onMouseLeave: () => setHovering(false),
        }
        return [hovering, onHoverProps];
      }
      const [boxIsHovering, boxHoverProps] = useHover()
      
    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(Math.floor(new Date().getTime()/1000.0));
      }, 1 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
     
  
    return (
        <div {...boxHoverProps}>
  
            {boxIsHovering ? Date().slice(16,25) : epoch}
         
            {boxIsHovering ? 'time is an ilusion': ''}
            
        </div>
        );
  };

  export default Epochtime;