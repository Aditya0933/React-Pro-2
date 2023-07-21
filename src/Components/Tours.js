import Card from "./Cards"
function Tours({tours,removeTour}){
    return(
        <div>
            <div>                
                <h1 className='text-{3rem}'> Plan With Love & hearts</h1>
            </div>
            <div>
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