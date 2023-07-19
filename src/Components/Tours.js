import cards from "./Cards"
function Tours({tours,removeTourHandler}){
    return(
        <div>
            <div>                
                <h1> Plan With Love & hearts</h1>
            </div>
            <div>
                {
                    tours.map((tour)=>{
                        return <cards {...tour} removeTour = {removeTourHandler}></cards>
                    })
                }
            </div>
        </div>
    )
}
export default Tours; 