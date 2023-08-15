import React from 'react'

interface ContainerProps {
    id?: string;
    type: "full-width" | "content";
    customClasses?: string;
    children?: React.ReactNode;
}

const Container = ({
    id,
    type,
    customClasses,
    children
}: ContainerProps) => {
  
    if(type === "full-width") {

        return (
            <div id={id} className={`
                w-full 
                flex 
                flex-col 
                items-center 
                justify-center
                ${customClasses}    
            `}>
                {children}
            </div>
        )

    } else if (type === "content") {
        return (
            <div id={id} className={`
                w-full 
                sm:max-w-[640px] 
                md:max-w-[768px] 
                lg:max-w-[1024px] 
                xl:max-w-[1230px]
                ${customClasses}    
            `}>
                {children}
            </div>
        )
    }

}

export default Container