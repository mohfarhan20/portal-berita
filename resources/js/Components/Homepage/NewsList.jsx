const NewsList = ({ news }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-5 ml-5">
            <figure>
                <img src="img/sepatu.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};
export default NewsList;
