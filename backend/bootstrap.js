const [express, port] = [require('express'), 1337];
const app = express();

require('./router/react-finder')(app);

app.listen(port);
