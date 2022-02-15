const [express, port] = [require('express'), 3000];
const app = express();

require('./router/react-finder')(app);

app.listen(port);
