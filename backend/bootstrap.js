const [express, port] = [require('express'), 3000];
const app = express();

process.env.NODE_ENV = !process.env.NODE_ENV && "developement";

if (process.env.NODE_ENV !== "developement") {
  app.get('/', (req, res) => res.send('../build/index.html'));
}

app.listen(port);

