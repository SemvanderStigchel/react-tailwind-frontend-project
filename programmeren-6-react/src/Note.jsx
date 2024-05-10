import {Link} from "react-router-dom";

function Note({note}) {
    return (
        <section className={"w-full md:w-1/3 xl:w-1/5 m-3 flex flex-col border border-gray-400 shadow shadow-gray-500"}>
            <Link className={"p-6"} to={`/notes/details/${note.id}`}>
                <div className="flex items-center justify-between">
                    <p className="">{note.title}</p>
                </div>
                <p className={"text-sm"}>{note.date}</p>
            </Link>
        </section>
    )
}

export default Note;
