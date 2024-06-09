import '../styles/Buty.css';
const Szafa = () => {
    const buty = [
        {name: 'buty1', link:"../../public/buty1.jpg"},
        {name: 'buty2', link:"../../public/buty2.jpg"},
        {name: 'buty3', link:"../../public/buty3.jpg"},
        {name: 'buty4', link:"../../public/buty4.jpg"},
        {name: 'buty5', link:"../../public/buty5.jpg"},
        {name: 'buty6', link:"../../public/buty6.jpg"},
    ];

    console.log(buty)
    return(

        <div className="page-wrapper">


            <h2>Twoja szafa</h2>
            <div className="shoe-list">
                {buty.map((shoe, index) => (
                    <div key={index} className="shoe-item">
                        <img src={shoe.link} alt={shoe.name}/>
                        <h3>{shoe.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Szafa