import {Link} from "react-router-dom";
import React from "react";

function BackButton({destination = '/notes'}) {

    return (
        <>
            <Link to={destination} className={"flex items-center hover:underline mt-5 px-6 w-fit"}>
                <svg className={'fill-gray-600'} xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                <p className={"text-gray-600 uppercase font-bold"}>Back</p>
            </Link>
        </>
    )
}

export default BackButton;
