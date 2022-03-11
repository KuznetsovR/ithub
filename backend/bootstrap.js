const [express, port] = [require('express'), 1337];
const { openDayRouter } = require('./open-day/open-day-router');
const cors = require('cors');
const { coursesRouter } = require('./courses/courses-router');
const { schoolEventRouter } = require('./school-event/school-event-router');

const app = express();
app.use(cors({ origin: '*' }));


require('./router/react-finder')(app);

app.use('/api/open-day', openDayRouter);
app.use('/api/school-event', schoolEventRouter);
app.use('/api/courses', coursesRouter);

app.listen(port);
