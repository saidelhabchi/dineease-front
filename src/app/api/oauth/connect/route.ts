export async function POST(req: Request){

    console.log(req.json())

    // fetch(
    //     `http://localhost:8000/`,
    //     {
    //         method: 'POST',
    //         headers: {
    //             ContentType: "application/json"
    //         },
    //         body: req.json()
    //     }
    //     )
    //     .then()
    //     .catch()

    return Response.json({"message": "Ok connect"})
}