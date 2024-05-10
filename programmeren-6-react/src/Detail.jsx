import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import BackButton from "./BackButton.jsx";
import Delete from "./Delete.jsx";

function Detail() {
    const [note, setNote] = useState({});
    const {id} = useParams();
    const [showModal, setShowModal] = useState(false);

    const getNote = async () => {
        const response = await fetch(`https://docent.cmi.hro.nl/bootb/demo/notes/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        const noteDetails = await response.json();
        setNote(noteDetails);
    }

    useEffect(() => {
        getNote();
    }, []);

    return (
        <div className={"container mx-auto items-center pt-4"}>
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                    <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                        Details note: {note.title}
                    </p>

                    <div className="flex items-center" id="store-nav-content">

                    </div>
                </div>
            </nav>
            <div className={"w-max px-8"}>
                <p>{note.body}</p>
                <p>Author: {note.author}</p>
                <p>Created at: {note.date}</p>
            </div>
            <div className={"px-8 flex gap-2"}>
                <Link to={`/notes/edit/${id}`} className={"border border-gray-600 inline-block no-underline hover:text-black hover:underline py-1 px-3"}>Edit Note</Link>
                <Link to={`/notes/delete/${id}`} className={"py-1 px-4 bg-gray-600 text-white inline-block no-underline hover:bg-red-500 hover:underline"} onClick={() => {setShowModal(true)}}>Delete</Link>
            </div>
            <BackButton/>
            {
                showModal && (
                    <Delete onClose={() => { setShowModal(false)}}/>
                )
            }
        </div>
    )
}

export default Detail;
