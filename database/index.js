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

            const { results } = await env.DB
                .prepare("SELECT * from listings WHERE subject = ? AND location = ? AND grade = ? AND type = ? AND hourly_price < ? AND hourly_price > ?")
                .bind(subject, location, grade, type, max_price, min_price)
                .all();

            return Response.json(results);
       }
    }
}