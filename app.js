require("./config/dbconfig").connect();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/about", (req, res) => {
  res.json({ fname: "Akash" });
});

app.get("/contact", (req, res) => {
  res.send("You can contact me on my email");
});

const patientDetailRoutes = require("./routes/patientRoutes");
app.use("/patient", patientDetailRoutes);

const laboratoryDetailRoutes = require("./routes/laboratoryRoutes");
app.use("/laboratory", laboratoryDetailRoutes);

const doctorDetailRoutes = require("./routes/doctorRoutes");
app.use("/doctor", doctorDetailRoutes);

const loginRoutes = require("./routes/authRoute");
app.use("/login", loginRoutes);

const fetchUserDetailsRoutes = require("./routes/fetchUserDetailsRoute");
app.use("/fetchuser", fetchUserDetailsRoutes);

const doctorPrescriptionDetailsRoutes = require("./routes/doctorPrescriptionRoute");
app.use("/doctorprescription", doctorPrescriptionDetailsRoutes);

const labTestsDetailsRoutes = require("./routes/labTestsRoute");
app.use("/labtest", labTestsDetailsRoutes);

const fileUploadDemoRoutes = require("./routes/fileUploadDemoRoute");
app.use("/filedemo", fileUploadDemoRoutes);

const patientReportDetailRoutes = require("./routes/patientReportRoute");
app.use("/report", patientReportDetailRoutes);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
