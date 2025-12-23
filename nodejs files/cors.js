const express = require("express");
const app = express();
const cors = require("cors"); //need to npm  install cors.

//This enables all cors requests
app.use(cors());

//enables only one route
app.get("/product/:id", cors(), (req, res) => {
  res.send("Enabled only one route request");
});

//configuring of cors
//this will access these things to the origin
app.use(
  cors({
    origin: "https://example.com",
    optionsSuccessStatus: 204,
    credentials: true, //passes the header
    allowedHeaders: ["Content-Type", "Authorization"], //or content-Type, authorization
    methods: ["POST", "GET", "PUT"],
    exposedHeaders: ["Content-Range", "X-Content-Range"], //which allows custom headers
  })
);

//For dynamic origin
app.use(
  cors({
    origin: function (origin, callback) {
      db.loadOrigins(function (error, origins) {
        callback(error, origins);
      });
    },
  })
);

//cors for pre-flight => delete http request requires custom header so this is needed
app.options("products/:id", cors());

app.delete("product/:id", (req, res) => {
  //or you can use route endpoint as "*" to allow all route
  res.json({
    massage: "This is CORS-enabled for all origins!",
  });
});

//Dynamic cors options => differnt domain requires different cors configurations
const dynamicCoreOption = (req, callback) => {
  var corsOption;
  if (req.path.startsWith("auth/products")) {
    corsOption = {
      origin: "https://mydomain.com",
      credentials: true,
    };
  } else {
    corsOption = {
      origin: "*",
    };
  }
  callback(null, corsOption);
};

app.use(cors(dynamicCoreOption));
