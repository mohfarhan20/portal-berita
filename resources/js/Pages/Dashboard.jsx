import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
        // post (kemana routes nya, data apa yang dikirimkan)
    };
    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }

        return;
    }, []);
    return (
        <AuthenticatedLayout
            user={props.auth}
            erors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    News List
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white rounded-lg border-gray-500">
                        {isNotif && (
                            <div className="alert alert-success">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{props.flash.message}</span>
                            </div>
                        )}
                        <input
                            type="text"
                            placeholder="Judul"
                            className="input input-bordered w-full m-2"
                            onChange={(title) => setTitle(title.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="input input-bordered w-full m-2"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="input input-bordered w-full m-2"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                        />
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    {props.myNews && props.myNews.length > 0 ? (
                        props.myNews.map((news, i) => {
                            return (
                                <div
                                    key={i}
                                    className="card w:full lg:w-96 bg-base-100 shadow-xl mt-5 ml-5"
                                >
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {news.title}
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p>{news.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">
                                                {news.category}
                                            </div>
                                            <div className="badge badge-outline bg-blue-600 text-white">
                                                <Link
                                                    href={route("edit.news")}
                                                    as="button"
                                                    method="get"
                                                    data={{ id: news.id }}
                                                >
                                                    edit
                                                </Link>
                                            </div>
                                            <div className="badge badge-outline bg-red-600 text-white">
                                                <Link
                                                    href={route("delete.news")}
                                                    as="button"
                                                    method="post"
                                                    data={{ id: news.id }}
                                                >
                                                    delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Anda Belum Memiliki Berita</p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
