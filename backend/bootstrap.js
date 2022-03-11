const [express, port] = [require('express'), 1337];
const { openDayRouter } = require('./open-day/open-day-router');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));


require('./router/react-finder')(app);

app.use('/api/open-day', openDayRouter);

app.listen(port);
