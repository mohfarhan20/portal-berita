import { Link } from "@inertiajs/react";
const Paginator = ({ meta }) => {
    console.log(meta);
    const previousPage = meta.links[0].url;
    const nextPage = meta.links[meta.links.length - 1].url;
    const currentPage = meta.current_page;

    return (
        <div className="join">
            {previousPage && (
                <Link href={previousPage} className="join-item btn btn-outline">
                    «
                </Link>
            )}
            <Link className="join-item btn btn-outline">{currentPage}</Link>
            {nextPage && (
                <Link href={nextPage} className="join-item btn btn-outline">
                    »
                </Link>
            )}
        </div>
    );
};
export default Paginator;
