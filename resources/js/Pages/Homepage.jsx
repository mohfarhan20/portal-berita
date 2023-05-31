import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar className="" />

            <NewsList news={props.news} />
            <NewsList news={props.news} />
            <NewsList news={props.news} />
            <div></div>
        </div>
    );
}

// {props.news ? (
//     props.news.map((data, i) => {
//         return (
//             <div
//                 key={i}
//                 className="p-4 m-2 bg-white text-black shadow-md rounded-md"
//             >
//                 <p className="text-2xl"> {data.title}</p>
//                 <p className="tex-sm"> {data.description}</p>
//                 <i> Category : {data.category}</i>
//                 <br></br>
//                 <i className=""> Author : {data.author}</i>
//             </div>
//         );
//     })
// ) : (
//     <p>Saat ini belum ada berita</p>
// )}
