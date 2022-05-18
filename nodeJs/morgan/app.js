const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
