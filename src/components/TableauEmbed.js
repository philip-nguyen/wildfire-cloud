import React, {useRef, useEffect} from "react";

const {tableau} = window;

function TableauEmbed() {

    const ref = useRef(null)

    const url = 
    "https://public.tableau.com/views/FireCausesStory-RangeFinale/Story1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

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