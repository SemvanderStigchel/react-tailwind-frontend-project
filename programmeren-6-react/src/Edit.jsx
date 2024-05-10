import {useState, useEffect} from "react";
import BackButton from "./BackButton.jsx";
import {useNavigate, useParams} from "react-router-dom";

function Edit() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    const getNote = async () => {
        const response = await fetch(`https://docent.cmi.hro.nl/bootb/demo/notes/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        const noteDetails = await response.json();
        setTitle(noteDetails.title);
        setBody(noteDetails.body);
        setAuthor(noteDetails.author);
    }

    useEffect(() => {
        getNote();
    }, []);
    const editNote = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://docent.cmi.hro.nl/bootb/demo/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": title,
                "body": body,
                "author": author
            })
        });
        navigate(`/notes/details/${id}`);
    }

    return (
        <>
            <div className={"container mx-auto items-center pt-4"}>
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                        <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                            Edit note: {title}
                        </p>

                        <div className="flex items-center" id="store-nav-content">

                        </div>
                    </div>
                </nav>
                <form className={"px-8"} onSubmit={editNote}>
                    <label className={"font-bold text-gray-600 uppercase"} htmlFor="title">Title</label>
                    <input
                        className={"bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"}
                        type="text" name="title" id="title" value={title} onChange={(e) => {
                        setTitle(`${e.target.value}`)
                    }}/>

                    <label className={"font-bold text-gray-600 uppercase"} htmlFor="body">Body</label>
                    <textarea
                        className={"bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"}
                        name="body" id="body" cols="30" rows="10" value={body} onChange={(e) => {
                        setBody(`${e.target.value}`)
                    }}></textarea>

                    <label className={"font-bold text-gray-600 uppercase"} htmlFor="author">Author</label>
                    <input type="text"
                           className={"bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"}
                           name={"author"} id={"author"} value={author} onChange={(e) => {
                        setAuthor(`${e.target.value}`)
                    }}
                    />

                    <input type="submit" value={"Edit Note"}
                           className={"bg-gray-600 border border-gray-600 text-white inline-block no-underline hover:bg-white hover:text-black hover:underline py-2 px-4 mt-3 cursor-pointer"}/>
                </form>
                <BackButton destination={`/notes/details/${id}`}/>
            </div>
        </>
    )
}

export default Edit;
