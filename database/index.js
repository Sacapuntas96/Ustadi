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

            
            const parameters = ["subject", "location", "grade", "type"];

            const variables = {"subject" : subject, "location" : location, "grade" : grade, "type" : type};
            let conditions = []

            let command = "SELECT * FROM listings";
            if (Object.values(variables).some(element => element)){
                command = command + " WHERE ";
            }


            for (const [key, value] of Object.entries(variables)){
                if (value) {
                    conditions.push(` ${key} = ? `);
                }
            }
            command = command + conditions.join("AND");


            console.log(command);
            const { results } = await env.DB
                .prepare(command)
                .bind(...Object.values(variables).filter(value => value))
                .all();

            return Response.json(results);
       }

       return new Response("not found", {status : 404});
    }
}