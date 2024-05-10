import {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

function Home() {

    return (
        <div className={"container mx-auto flex items-center flex-wrap pt-4 pb-12"}>
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                    <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                       href="#">
                        Home
                    </p>

                    <div className="flex items-center" id="store-nav-content">

                    </div>
                </div>
            </nav>
            <p className={"px-6"}>
                "Welcome to NoteApp – Your Personalized Note-Taking Oasis!<br/><br/>

                Hello there, note enthusiasts! I'm Henk, and I'm thrilled to welcome you to NoteApp, where the art of
                jotting down your thoughts meets the ease of digital organization. This platform is more than just a
                place to write; it's a haven for creativity, a sanctuary for your musings, and a canvas for your ideas
                to take flight.<br/><br/>

                Why NoteApp, you ask? Because here, we believe that every note is a testament to your unique journey.
                Whether you're a passionate planner, a spontaneous doodler, or someone in search of that perfect place
                to store your flashes of brilliance – NoteApp has got you covered.<br/><br/>

                Embark on a seamless note-taking adventure, where the mundane transforms into the extraordinary. From
                project plans to poetry, recipes to random thoughts, our user-friendly interface ensures that your ideas
                flow effortlessly from mind to screen.<br/><br/>

                But it's not just about the notes; it's about you. This is your space to dream, create, and organize in
                a way that reflects your individuality. Customization is at the heart of NoteApp, allowing you to tailor
                your virtual notebook to suit your style. Choose themes, fonts, and layouts that resonate with you,
                making each note a true reflection of your personality.<br/><br/>

                As you navigate through NoteApp's intuitive features, remember that this platform is not just about
                productivity; it's about fostering a community of like-minded individuals who appreciate the beauty of
                self-expression. Connect with fellow note-takers, share your insights, and discover new ways to elevate
                your note-taking game.<br/><br/>

                So, what are you waiting for? Dive into the world of NoteApp, where every note is a step towards
                self-discovery, creativity, and organized bliss. Start writing, start exploring, and let your ideas
                flourish in this digital haven.<br/><br/>

                Happy Note-Taking!<br/>
                Henk"
            </p>
        </div>
    )
}

export default Home;
