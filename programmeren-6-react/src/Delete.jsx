import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import BackButton from "./BackButton.jsx";

function Delete({onClose}) {
    const navigate = useNavigate();
    const {id} = useParams();

    const deleteBook = async () => {
        const response = await fetch(`https://docent.cmi.hro.nl/bootb/demo/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
            }
        });
        navigate('/notes');
    }

    return (

        <div
            className={"fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"}
            onClick={onClose}>
            <div className={"w-[600px] max-w-full h-[400px] bg-white p-4 flex flex-col relative"} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className={"container mx-auto items-center pt-4"}>
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div
                            className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                            <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                                Delete Note?
                            </p>

                            <div className="flex items-center" id="store-nav-content">
                                <span className={"font-bold cursor-pointer"} onClick={onClose}>X</span>
                            </div>
                        </div>
                    </nav>
                    <div className={"px-8"}>
                        <h2>Are you sure you want to delete this note?</h2>
                        <div className={"flex gap-3"}>
                            <button
                                className={"py-1 px-4 bg-gray-600 text-white inline-block no-underline hover:bg-red-500 hover:underline"}
                                onClick={deleteBook}>Yes
                            </button>
                            <Link to={`/notes/details/${id}`}
                                  className={"py-1 px-4 bg-white border border-gray-600 hover:bg-green-600 hover:text-white hover:underline hover:border-green-600"}>No</Link>
                        </div>
                    </div>
                    <BackButton destination={`/notes/details/${id}`}/>
                </div>
            </div>
        </div>
    )
}

export default Delete;
