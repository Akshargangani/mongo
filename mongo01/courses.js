// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 3000;

// // MongoDB connection details
// const uri = "mongodb://127.0.0.1:27017"; 
// const dbName = "courses_data";

// // Middleware
// app.use(express.json());

// let db, courses_data;

// // Connect to MongoDB and initialize collections
// async function initializeDatabase() {
//     try {
//         const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
//         console.log("Connected to MongoDB");

//         db = client.db(dbName);
//         courses_data = db.collection("courses_data");

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

// // GET: List all courses_data
// app.get('/courses_data', async (req, res) => {
//     try {
//         const allcourses = await courses_data.find().toArray();
//         res.status(200).json(allcourses); //
//     } catch (err) {
//         res.status(500).send("Error fetching courses_data: " + err.message);
//     }
// });

// // POST: Add a new student
// app.post('/courses_data', async (req, res) => {
//     try {
//         // console.log("Request object: ",req)
//         // console.log("Request body:",req.body)
//         const newStudent = req.body;
//         const result = await courses_data.insertOne(newStudent);
//         res.status(201).send(`Student added with ID: ${result.insertedId}`);
//     } catch (err) {
//         res.status(500).send("Error adding student: " + err.message);
//     }
// });


// // app.put('/courses_data/:courseName', async (req, res) => {
// //     try {
// //         console.log("Request Params :", req.params)
// //         console.log("Require Body :" ,req.body)
// //         const courseName = req.params.courseName;
// //         const updatedCourse = req.body;
// //         const result = await courses_data.replaceOne({ name: courseName }, updatedCourse);
// //         res.status(200).send(`${result.modifiedCount} document(s) updated`);
// //     } catch (err) {
// //         res.status(500).send("Error updating course: " + err.message);
// // }
// // });


// // PUT: Update a student completely
// app.put('/courses_data/:credits', async (req, res) => {
//     try {
//         console.log("Request params: ",req.params)
//         console.log("Request body:",req.body)
//         const Allcredits = parseInt(req.params.credits);
//         console.log("Request body:", Allcredits)
//         const updatedCourses = req.body;
//         const result = await courses_data.replaceOne({ Allcredits }, updatedCourses);
//         console.log(result);
//         res.status(200).send(`${result.modifiedCount} document(s) updated`);
//     } catch (err) {
//         res.status(500).send("Error updating student: " + err.message);
//     }
// });

// // PATCH: Partially update a student
// app.patch('/courses_data/:rollNumber', async (req, res) => {
//     try {
//         const rollNumber = (req.params.rollNumber);
//         const updates = req.body;
//         const result = await courses_data.updateOne({ rollNumber }, { $set: updates });
//         res.status(200).send(`${result.modifiedCount} document(s) updated`);
//     } catch (err) {
//         res.status(500).send("Error partially updating student: " + err.message);
//     }
// });

// // DELETE: Remove a student
app.delete('/courses_data/:name', async (req, res) => {
    try {
        console.log(req.params.name);
        const NAme = (req.params.name);
        console.log({name:NAme});
        const result = await courses_data.deleteOne({ name:NAme });
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});

// // app.delete('/courses_data/:courseName', async (req, res) => {
// //     try {
// //         // Get the course name from the route parameter
// //         const courseName = req.params.name;
// //         console.log(`Course to delete: ${courseName}`);
        
// //         // Perform the delete operation
// //         const result = await courses_data.deleteOne({ name: courseName });
// //         console.log(`Delete result: ${result.deletedCount} document(s)`);

// //         // Handle the response
// //         if (result.deletedCount === 0) {
// //             res.status(404).send("No course found with the specified name.");
// //         } else {
// //             res.status(200).send(`${result.deletedCount} document(s) deleted.`);
// //         }
// //     } catch (err) {
// //         console.error("Error deleting course:", err.message);
// //         res.status(500).send("Error deleting course: " + err.message);
// //     }
// // });
