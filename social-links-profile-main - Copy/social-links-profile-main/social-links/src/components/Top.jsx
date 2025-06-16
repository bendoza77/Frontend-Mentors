const Top = () => {

    const image = "./images/avatar-jessica.jpeg"

    return (
        <>
            <div className="top">
                <img className="img" src={image} alt="" />
                <h1>Jessica Randall</h1>
                <p className="location">London, United Kingdom</p>
                <p className="text">"Front-end developer and avid reader."</p>
            </div>
        </>
    );
}

export default Top;