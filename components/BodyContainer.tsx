import React from 'react'

import { Nunito } from 'next/font/google';

interface BodyContainerProps {
    /** HTML lang value. Default "en" **/
    language?: string | "en";
    /** Font object. Imported from next/font/google. Example: import { Nunito } from 'next/font/google'; **/
    fontClassName?: string;
    /** Default Background Colour. Use Tailwind bg colours. Default: White. Example: bg-red-500 **/
    backgroundColour?: string | "bg-white";
    /** Child Components **/
    children?: React.ReactNode;
}

const defaultFont = Nunito({subsets: ['latin']})

const BodyContainer = ({
    language,
    fontClassName,
    backgroundColour,
    children
} : BodyContainerProps) => {

    

  return (
    <html lang={language}>
        <body className={`
            ${fontClassName ? fontClassName : defaultFont.className} 
            ${backgroundColour} 
        `}>
            {children}
        </body>
    </html>
  )
}

export default BodyContainer