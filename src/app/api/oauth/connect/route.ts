export async function POST(req: Request){

    console.log("sending...")

    type Credentials = {
        name: string,
        email: string,
        image: string
    }

    type LaravelResponse = {
        feedback: string,
        user: Credentials,
        token: string
    }

    const data: Credentials = await req.json()

    console.log("data: ", data)

    const response = await fetch(
        `http://localhost:8000/api/connect/oauth/check?XDEBUG_SESSION_START=PHPSTORM`,
        {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(data)
        }
        )

    const laravelResponse: LaravelResponse = await response.json();

    console.log("laravelResponse: ", laravelResponse)

    return Response.json(laravelResponse)
}