import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props);
    return (
        <div className="flex justify-center items-center min-h-screen bg-neutral-800">
            <Head title={props.title} />
            <p> {props.description}</p>
            <div>
                {props.news ? (
                    props.news.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="p-4 m-2 bg-white text-black"
                            >
                                <p className="text-2xl"> {data.title}</p>
                                <p> {data.description}</p>
                                <p className="text-small"> {data.category}</p>
                                <p className="text-small"> {data.author}</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Saat ini belum ada berita</p>
                )}
            </div>
        </div>
    );
}
