import {useEffect, useState} from "react";
import Note from "./Note.jsx";

function Notes() {
    const [apiUrl, setApiUrl] = useState('https://docent.cmi.hro.nl/bootb/demo/notes?start=1&limit=8');
    const [notes, setNotes] = useState([]);
    const [currentPage, setCurrentPage] = useState();
    const [totalPages, setTotalPages] = useState();
    const [firstPage, setFirstPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [lastPage, setLastPage] = useState('');
    const getNotes = async () => {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        const notesCollection = await response.json();
        setFirstPage(notesCollection.pagination._links.first.href);
        setPreviousPage(notesCollection.pagination._links.previous.href);
        setNextPage(notesCollection.pagination._links.next.href);
        setLastPage(notesCollection.pagination._links.last.href);
        setCurrentPage(notesCollection.pagination.currentPage);
        setTotalPages(notesCollection.pagination.totalPages);
        setNotes(notesCollection.items);
    };

    useEffect(() => {
        getNotes();
    }, [apiUrl]);

    const showNotes = notes.map((note, index) =>
        <Note note={note} key={index}/>
    );

    return (
        <section className={"container mx-auto flex items-center flex-wrap pt-4 pb-12"}>
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                    <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                        All Notes
                    </p>

                    <div className="flex items-center" id="store-nav-content">

                    </div>
                </div>
            </nav>
                {showNotes}
            <div className={"w-full flex items-center justify-center gap-3 pt-3"}>
                <span>1</span>
                <button onClick={() => {setApiUrl(firstPage)}}><svg className={'fill-gray-600 hover:fill-gray-400'} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/></svg></button>
                <button onClick={() => {setApiUrl(previousPage)}}><svg className={'fill-gray-600 hover:fill-gray-400'} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></button>
                <span>{currentPage}</span>
                <button onClick={() => {setApiUrl(nextPage)}}><svg className={'fill-gray-600 hover:fill-gray-400'} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></button>
                <button onClick={() => {setApiUrl(lastPage)}}><svg className={'fill-gray-600 hover:fill-gray-400'} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg></button>
                <span>{totalPages}</span>
            </div>
        </section>
    )
}

export default Notes;
