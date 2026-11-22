export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    console.log(request.url);
    if (url.pathname == "/api/listings") {
      const listing_id = url.searchParams.get("author_id");
      const subject = url.searchParams.get("subject");
      const location = url.searchParams.get("location");
      const grade = url.searchParams.get("grade");
      const type = url.searchParams.get("type");
      const min_price = url.searchParams.get("min_price") || 0;
      const max_price = url.searchParams.get("max_price") || 0;
      const query = url.searchParams.get("query");

      const variables = {
        listing_id: listing_id,
        subject: subject,
        location: location,
        grade: grade,
        type: type,
      };
      let conditions = [];

      let command = "SELECT * FROM listings";
      if (
        Object.values(variables).some((element) => element) ||
        query ||
        min_price ||
        max_price
      ) {
        command = command + " WHERE ";
      }

      for (const [key, value] of Object.entries(variables)) {
        if (value) {
          conditions.push(` ${key} = ? `);
        }
      }

      if (query) {
        conditions.push(` title COLLATE Latin1_General_CI_AI LIKE ? `);
        variables["query"] = "%" + query + "%";
      }

      if (min_price != 0) {
        conditions.push(` hourly_price >= ? `);
        variables["min_price"] = min_price;
      }
      if (max_price != 0) {
        conditions.push(` hourly_price <= ? `);
        variables["max_price"] = max_price;
      }

      command = command + conditions.join("AND");

      const { results } = await env.DB.prepare(command)
        .bind(...Object.values(variables).filter((value) => value))
        .all();

      return Response.json(results);
    } else if (url.pathname == "/api/reviews") {
      const content = url.searchParams.get("content");
      const date = new Date();

      await env.DB.prepare(
        "INSERT INTO website_reviews (author_id, published_date, content) VALUES (?, ?, ?)",
      )
        .bind(
          0,
          date.toISOString().replace("T", " ").replace("Z", "").slice(0, 19),
          content,
        )
        .run();

      return Response.json({ success: true });
    } else if (url.pathname == "/api/listing-page") {
      const listing_id = parseInt(url.searchParams.get("id"));
      if (listing_id) {
        const { results } = await env.DB.prepare(
          "SELECT * FROM listings WHERE listing_id = ?",
        )
          .bind(listing_id)
          .all();

        return Response.json(results);
      }
    } else if (url.pathname == "/api/tutors") {
      const user_id = parseInt(url.searchParams.get("id"));

      if (user_id) {
        const { results } = await env.DB.prepare(
          "SELECT * FROM tutors WHERE user_id = ?",
        )
          .bind(user_id)
          .all();

        return Response.json(results);
      }
    } else if (url.pathname == "/api/tutor-reviews") {
      const tutor_id = parseInt(url.searchParams.get("id"));

      const { results } = await env.DB.prepare(
        "SELECT * FROM tutor_reviews WHERE tutor_id = ?",
      )
        .bind(tutor_id)
        .all();

      return Response.json(results);
    } else if (url.pathname == "/api/availability") {
      const phone = url.searchParams.get("phone");
      const type = url.searchParams.get("type");
      const email = url.searchParams.get("email");

      if (type == "student") {
        const { results } = await env.DB.prepare(
          `
      SELECT 'student' AS account_type, user_id, email
      FROM students
      WHERE LOWER(TRIM(email)) = LOWER(TRIM(?))

      UNION ALL

      SELECT 'tutor' AS account_type, user_id, email
      FROM tutors
      WHERE LOWER(TRIM(email)) = LOWER(TRIM(?))
    `,
        )
          .bind(email, email)
          .all();

        return Response.json(results);
      } else if (type == "tutor") {
        const { results } = await env.DB.prepare(
          `
      SELECT 'student' AS account_type, user_id, email
      FROM students
      WHERE LOWER(TRIM(email)) = LOWER(TRIM(?))

      UNION ALL

      SELECT 'tutor' AS account_type, user_id, email
      FROM tutors
      WHERE LOWER(TRIM(email)) = LOWER(TRIM(?))
         OR phone_number = ?
    `,
        )
          .bind(email, email, phone)
          .all();

        return Response.json(results);
      }
    } else if (url.pathname == "/api/registration") {
      const first_name = url.searchParams.get("first_name");
      const last_name = url.searchParams.get("last_name");
      const phone = url.searchParams.get("phone");
      const password = url.searchParams.get("password");
      const type = url.searchParams.get("type");
      const email = url.searchParams.get("email");
      const birth_date = url.searchParams.get("birth_date");

      if (type === "student") {
        await env.DB.prepare(
          `
            INSERT INTO students (
                first_name,
                last_name,
                email,
                birth_date,
                account_creation_date,
                grade,
                bio
            ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        )
          .bind(
            first_name,
            last_name,
            email,
            birth_date,
            new Date().toISOString().split("T")[0],
            null,
            "",
          )
          .run();
      } else if (type === "tutor") {
        await env.DB.prepare(
          `
            INSERT INTO tutors (
              first_name,
              last_name,
              email,
              bio,
              main_subject,
              main_grade,
              birth_date,
              account_creation_date,
              phone_number,
              password_hash,
              city
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
        )
          .bind(
            first_name,
            last_name,
            email,
            "",
            null,
            null,
            birth_date,
            Math.floor(Date.now() / 1000),
            phone,
            password,
            null,
          )
          .run();
      }

      return Response.json({ success: true });
    }

    return new Response("not found", { status: 404 });
  },
};
