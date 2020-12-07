import React, {useRef, useEffect} from "react";

const {tableau} = window;

function TableauEmbed() {

    const ref = useRef(null)

    const url = 
    "https://public.tableau.com/shared/JPBXHH4WK?:display_count=y&:origin=viz_share_link";

    const options = {
        device: "desktop"
    }
            
    function initViz(){
        new tableau.Viz(ref.current, url, options)
    }

    useEffect(() => {
        initViz();
    },[]);

    
    return (
        
        <div>

            <div ref={ref}></div>

        </div>
         
       
    );
}

export default TableauEmbed;