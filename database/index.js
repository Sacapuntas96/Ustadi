export default{
    async fetch(request, env){
        const url = new URL(request.url);
        if (url.pathname == "/api/listings"){
            const subject = url.searchParams.get("subject");
            const location = url.searchParams.get("location");
            const grade = url.searchParams.get("grade");
            const type = url.searchParams.get("type");
            const min_price = url.searchParams.get("min_price") || 0;
            const max_price = url.searchParams.get("max_price") || 0;
            const query = url.searchParams.get("query");

            
            const parameters = ["subject", "location", "grade", "type"];

            const variables = {"subject" : subject, "location" : location, "grade" : grade, "type" : type};
            let conditions = []

            let command = "SELECT * FROM listings";
            if (Object.values(variables).some(element => element) || query || min_price || max_price){
                command = command + " WHERE ";
            }


            for (const [key, value] of Object.entries(variables)){
                if (value) {
                    conditions.push(` ${key} = ? `);
                }
            }

            if (query){
                conditions.push(` title COLLATE Latin1_General_CI_AI LIKE ? `)
                variables["query"] = "%" + query + "%"
            }
            
            if (min_price != 0){
                conditions.push(` hourly_price >= ? `);
                variables["min_price"] = min_price;
            }
            if (max_price != 0){
                conditions.push(` hourly_price <= ? `);
                variables["max_price"] = max_price;
            }

            command = command + conditions.join("AND");


            const { results } = await env.DB
                .prepare(command)
                .bind(...Object.values(variables).filter(value => value))
                .all();

            return Response.json(results);
       }
       else if(url.pathname == "/api/reviews"){
        const content = url.searchParams.get("content")
        const date = new Date()

        const {retults} = await env.DB
            .prepare("INSERT INTO reviews (content, user_id, publish_date) VALUES (?, ?, ?)")
            .bind(content, 0, date.toISOString().replace("T", " ").replace("Z", "").slice(0, 19))
            .all()
       }

       return new Response("not found", {status : 404});
    }
}