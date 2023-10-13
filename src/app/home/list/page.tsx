const RestaurantList = () => {
    return ( 
        <div className="h-screen grid grid-cols-4 mb-5 gap-5">
            <div className="bg-emerald-700 rounded-md p-10 text-green-100"> 
                <h1>Filter</h1>
            </div>
            <div className="col-span-3 p-10 shadow-md rounded-md">
                <h1>List</h1>
            </div>
        </div>
     );
}
 
export default RestaurantList;