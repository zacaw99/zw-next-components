import React from 'react'

interface PageContainerProps {
    /** Vertical Positioning **/
    verticalPosition?: "start" | "center" | "end";

    /** Children **/
    children?: React.ReactNode;
}

const PageContainer = ({
    verticalPosition,
    children
}: PageContainerProps) => {
  return (
    <div className={`
        w-screen
        h-screen
        flex
        flex-col
        items-center
        ${
            verticalPosition === "start" ? "justify-start" :
            verticalPosition === "center" ? "justify-center" :
            verticalPosition === "end" ? "justify-end" :
            "justify-start"
        }
    `}>
        {children}
    </div>
  )
}

export default PageContainer