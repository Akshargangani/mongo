// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 3000;

// // MongoDB connection details
// const uri = "mongodb://127.0.0.1:27017"; 
// const dbcourseName = "courses_data";

// // Middleware
// app.use(express.json());

// let db, courses_data_data;

// // Connect to MongoDB and initialize collections
// async function initializeDatabase() {
//     try {
//         const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
//         console.log("Connected to MongoDB");

//         db = client.db(dbcourseName);
//         courses_data_data = db.collection("courses_data_data");

//         // Start server after successful DB connection
//         app.listen(port, () => {
//             console.log(`Server running at http://localhost:${port}`);
//         });
//     } catch (err) {
//         console.error("Error connecting to MongoDB:", err);
//         process.exit(1); // Exit if database connection fails
//     }
// }

// // Initialize Database
// initializeDatabase();

// // Routes

// // GET: List all courses_data_data
// app.get('/courses_data_data', async (req, res) => {
//     try {
//         const allcourses_data_data = await courses_data_data.find().toArray();
//         res.status(200).json(allcourses_data_data);
//     } catch (err) {
//         res.status(500).send("Error fetching courses_data_data: " + err.message);
//     }
// });

// // POST: Add a new student
// app.post('/courses_data_data', async (req, res) => {
//     try {
//         // console.log("Request object: ",req)
//         // console.log("Request body:",req.body)
//         const newStudent = req.body;
//         const result = await courses_data_data.insertOne(newStudent);
//         res.status(201).send(`Student added with ID: ${result.insertedId}`);
//     } catch (err) {
//         res.status(500).send("Error adding student: " + err.message);
//     }
// });

// // PUT: Update a student completely
// app.put('/courses_data_data/:rollNumber', async (req, res) => {
//     try {
//         // console.log("Request params: ",req.params)
//         // console.log("Request body:",req.body)
//         const rollNumber = parseInt(req.params.rollNumber);
//         const updatedStudent = req.body;
//         const result = await courses_data_data.replaceOne({ rollNumber }, updatedStudent);
//         res.status(200).send(`${result.modifiedCount} document(s) updated`);
//     } catch (err) {
//         res.status(500).send("Error updating student: " + err.message);
//     }
// });

// // PATCH: Partially update a student
// app.patch('/courses_data_data/:rollNumber', async (req, res) => {
//     try {
//         const rollNumber = parseInt(req.params.rollNumber);
//         const updates = req.body;
//         const result = await courses_data_data.updateOne({ rollNumber }, { $set: updates });
//         res.status(200).send(`${result.modifiedCount} document(s) updated`);
//     } catch (err) {
//         res.status(500).send("Error partially updating student: " + err.message);
//     }
// });

// // DELETE: Remove a student
// app.delete('/courses_data_data/:courseName', async (req, res) => {
//     try {
//         console.log(req.params.courseName);
//         const courseName = (req.params.courseName);
//         console.log({courseName:courseName});
//         const result = await courses_data_data.deleteOne({ courseName:courseName });
//         res.status(200).send(`${result.deletedCount} document(s) deleted`);
//     } catch (err) {
//         res.status(500).send("Error deleting count: " + err.message);
//     }
// });


const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection details
const uri = "mongodb://127.0.0.1:27017"; 
const dbcourseName = "courses_data";

// Middleware
app.use(express.json());

let db, courses_data;  // Changed "students" to "courses_data"

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbcourseName);
        courses_data = db.collection("courses_data");  // Initialize courses_data collection

        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if database connection fails
    }
}

// Initialize Database
initializeDatabase();

// Routes

// GET: List all courses_data
app.get('/courses_data', async (req, res) => {
    try {
        const allcourses_data = await courses_data.find().toArray();
        res.status(200).json(allcourses_data);
    } catch (err) {
        res.status(500).send("Error fetching courses_data: " + err.message);
    }
});

// POST: Add a new course
app.post('/courses_data', async (req, res) => {
    try {
        const newCourse = req.body;
        const result = await courses_data.insertOne(newCourse);
        res.status(201).send(`Course added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding course: " + err.message);
    }
});

// PUT: Update a course completely
app.put('/courses_data/:courseName', async (req, res) => {
    try {
        // console.log("Request Params :", req.params)
        // console.log("Require Body :" ,req.body)
        const courseName = req.params.courseName;
        const updatedCourse = req.body;
        const result = await courses_data.replaceOne({ courseName }, updatedCourse);
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error updating course: " + err.message);
    }
});

// PATCH: Partially update a course
app.patch('/courses_data/:courseName', async (req, res) => {
    try {
        const courseName = req.params.courseName;
        const updates = req.body;
        const result = await courses_data.updateOne({ courseName: courseName }, { $set: updates });
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating course: " + err.message);
    }
});

// DELETE: Remove a course
// app.delete('/courses_data/:courseName', async (req, res) => {
//     try {
//         console.log(req.params);
//         const courseName = req.params.courseName; 
//         console.log({courseName})
//         const result = await courses_data.deleteOne({ name:courseName });
//         res.status(200).send(`${result.deletedCount} document(s) deleted`);
//     } catch (err) {
//         res.status(500).send("Error deleting course: " + err.message);
// }
// });


app.delete('/courses_data/:courseName', async (req, res) => {
    try {
        console.log("Request params:", req.params);

        // Normalize courseName by trimming whitespace
        const courseName = req.params.courseName.trim();
        console.log("Normalized courseName:", courseName);

        // Use the correct field name from your database
        const result = await courses_data.deleteOne({ coursename: courseName });

        // Check if a document was deleted
        if (result.deletedCount === 0) {
            return res.status(404).send("No course found with the specified name.");
        }

        res.status(200).send(`${result.deletedCount} document(s) deleted.`);
    } catch (err) {
        console.error("Error deleting course:", err.message);
        res.status(500).send("Error deleting course: " + err.message);
    }
});
