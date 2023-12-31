import imgs from './Images';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide" data-ride="carousel" style={{ overflowX: 'auto' }}>
                <ol className="carousel-indicators">
                    {imgs.map((_, index) => (
                        <li
                            key={index}
                            data-target="#carouselExample"
                            data-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                        ></li>
                    ))}
                </ol>
                <div className="carousel-inner" style={{ whiteSpace: 'nowrap' }}>
                    {imgs.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={image.url} alt="" style={{ height: '100px', width: '100px', display: 'inline' }} />
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="https://media.istockphoto.com/id/1448519227/photo/green-plants.jpg?s=1024x1024&w=is&k=20&c=Or8vFQFo0YOzna4Ft71TA0xrZ72GiTak6cQjcnZTrKM=" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;
