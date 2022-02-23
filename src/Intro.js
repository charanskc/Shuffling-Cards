import {motion} from "framer-motion";

function Intro(){

    const text = "Hello,";
    const text2 = "I'm Charan"

    const spanVariants = {
        visible: {
            y: 0, 
            scaleY: 1
        },
        hover:{
            y: [-1,-2,-2.8,0.9,0],
            scaleY: [1,1.3,0.8,1.2,1],
            color:"cyan",
        },
    };

    return(
        <motion.div>
            <h1>{
            text.split("").map((letter,id)=>(
                <motion.span
                style={{postion:"relative",letterSpacing:1.5,display:"inline-block"}}
                key={id}
                initial="visible"
                variants={spanVariants}
                whileHover="hover"
                >{letter}</motion.span>
            ))
            }</h1> 
            <h1>{
            text2.split("").map((letter,id)=>{
                if(letter === "m"){
                    return (
                        <motion.span
                style={{postion:"relative",letterSpacing:1.5,display:"inline-block"}}
                key={id}
                initial="visible"
                variants={spanVariants}
                whileHover="hover"
                >{letter}&nbsp;</motion.span>
                    );
                }else{
                    return (
                        <motion.span
                style={{postion:"relative",letterSpacing:1.5,display:"inline-block"}}
                key={id}
                initial="visible"
                variants={spanVariants}
                whileHover="hover"
                >{letter}</motion.span>
                    )
                }
            })
            }</h1> 
        </motion.div>
    );

}

export default Intro;