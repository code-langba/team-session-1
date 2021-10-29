const express = require('express');
const app = express();
const userRouter = require('./routes/user');

app.use('/api', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('server initiated on port: ' + PORT);
});
