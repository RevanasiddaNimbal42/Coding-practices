const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("PostgreSQL was runing ...");
});

app.post("/users", async (req, res) => {
  try {
    const { name, address, email } = req.body;
    const result = await pool.query(
      "insert into usrs(name, address, email) Values ($1,$2,$3) Returning *",
      [name, address, email]
    );

    res.status(200).json({
      massage: "Inserted successfully",
      user: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ massage: "server error" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await pool.query("DELETE FROM usrs WHERE id=$1", [id]);
    res.send("deleted successfully");
  } catch (err) {
    console.error(err);
    res.send("server error");
  }
});
app.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const result = await pool.query(
    "UPDATE  usrs set name=$1, address=$2 where id=$3 returning *",
    [name, address, id]
  );
  res.status(200).json({
    massage: "updated",
    user: result.rows[0],
  });
});

app.get(["/users/:id", "/users"], async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const result = await pool.query("select * from usrs where id=$1", [id]);
      res.status(200).json(result.rows);
    } else {
      const result = await pool.query("select * from usrs");
      res.status(200).json(result.rows);
    }
  } catch (err) {
    console.error(err.stack);
    res.status(404).json({
      massage: "server error",
    });
  }
});

app.listen(2300, () => {
  console.log("Server started with postgresql... ");
});
