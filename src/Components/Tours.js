import Card from "./Cards"
function Tours({tours,removeTour}){
    return(
        <div>
            <div className="container">                
                <h1 className="tittle"> Plan With Love & hearts</h1>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
} 
export default Tours; 