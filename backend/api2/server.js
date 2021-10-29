const express = require('express');
const app = express();
const todoRouter = require('./routes/todos');

app.use('/api2', todoRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log('server initiated on port: ' + PORT);
});
