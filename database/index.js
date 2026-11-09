export default{
    async fetch(request, env){
        const url = new URL(request.url);
        if (url.pathname == "/api/listings"){
            const subject = url.searchParams.get("subject");
            const location = url.searchParams.get("location");
            const grade = url.searchParams.get("grade");
            const type = url.searchParams.get("type");
            const min_price = url.searchParams.get("min_price");
            const max_price = url.searchParams.get("max_price");

            let command = "SELECT * from listings";
            const parameters = ["subject", "location", "grade", "type", "min_price", "max_price"];
            

            let values = [];

            const { results } = await env.DB
                .prepare("SELECT * from listings")
                .all();

            return Response.json(results);
       }

       return new Response("not found", {status : 404});
    }
}