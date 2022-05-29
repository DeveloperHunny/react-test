import React, {FC, ReactElement} from "react";

const Page:FC<{children : ReactElement}> = ({ children }) => {

    return(
        <div className={"Page"}>
            {children}
        </div>
    )
}

export default Page;
