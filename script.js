const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM person');
        const rows = result.rows;
        client.release();

        let html = `
            <html>
            <head>
                <style>
                    table { border-collapse: collapse; width: 50%; }
                    th, td { border: 1px solid black; padding: 8px; text-align: center; }
                    th { background-color: #f2f2f2; }
                    form { display: flex; flex-direction: column; align-items: center; }
                    .form-row { display: flex; gap: 10px; }
                    .form-row input, .form-row button { padding: 5px 10px; }
                </style>
                <script>
                    function fillForm(name, age, gender, email) {
                        document.getElementById('name').value = name;
                        document.getElementById('age').value = age;
                        document.getElementById('gender').value = gender;
                        document.getElementById('email').value = email;
                    }

                    function resetForm() {
                        document.getElementById('name').value = '';
                        document.getElementById('age').value = '';
                        document.getElementById('gender').value = '';
                        document.getElementById('email').value = '';
                    }

                    async function deletePerson() {
                        const name = document.getElementById('name').value;
                        const age = document.getElementById('age').value;
                        const gender = document.getElementById('gender').value;
                        const email = document.getElementById('email').value;
                        
                        if (name && age && gender && email) {
                            const response = await fetch('/deletePerson', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ name, age, gender, email })
                            });
                            if (response.ok) {
                                window.location.reload();
                                resetForm();
                            } else {
                                alert('Error deleting person');
                            }
                        } else {
                            alert('Please select a person to delete');
                        }
                    }

                    async function duplicatePerson() {
                        const name = document.getElementById('name').value;
                        const age = document.getElementById('age').value;
                        const gender = document.getElementById('gender').value;
                        const email = document.getElementById('email').value;

                        if (name && age && gender && email) {
                            const response = await fetch('/duplicatePerson', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ name, age, gender, email })
                            });
                            if (response.ok) {
                                window.location.reload();
                                resetForm();
                            } else {
                                alert('Error duplicating person');
                            }
                        } else {
                            alert('Please select a person to duplicate');
                        }
                    }
                </script>
            </head>
            <body>
            <center>
                <table id="personTable">
                    <tr><th>Name</th><th>Age</th><th>Gender</th><th>Email</th></tr>`;
        rows.forEach(row => {
            html += `<tr onclick="fillForm('${row.name}', ${row.age}, '${row.gender}', '${row.email}')">
                        <td>${row.name}</td><td>${row.age}</td><td>${row.gender}</td><td>${row.email}</td>
                    </tr>`;
        });
        html += `</table>
                <table>
                    <tr><th colspan="4">Add New Person</th></tr>
                    <tr><td colspan="4">
                        <form action="/addPerson" method="post">
                            <label for="name">Name:</label><br>
                            <input type="text" id="name" name="name" required><br>
                            <label for="age">Age:</label><br>
                            <input type="number" min="0" max="120" id="age" name="age" required><br>
                            <label for="gender">Gender:</label><br>
                            <input type="text" id="gender" name="gender" required><br>
                            <label for="email">Email:</label><br>
                            <input type="email" id="email" name="email" required><br><br>
                            <div class="form-row">
                                <input type="submit" value="Save">
                                <button type="button" onclick="deletePerson()">Delete</button>
                                <button type="button" onclick="duplicatePerson()">Duplicate</button>
                            </div>
                        </form>
                    </td></tr>
                </table>
                </center>
            </body>
            </html>`;

        res.send(html);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/addPerson', async (req, res) => {
    try {
        const { name, age, gender, email } = req.body;

        if (!name || !age || !gender || !email) {
            return res.status(400).send('All fields are required.');
        }

        const query = 'INSERT INTO person (name, age, gender, email) VALUES ($1, $2, $3, $4)';
        await pool.query(query, [name, age, gender, email]);
        res.redirect('/');
    } catch (err) {
        console.error('Error adding person', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/deletePerson', async (req, res) => {
    try {
        const { name, age, gender, email } = req.body;
        const query = 'DELETE FROM person WHERE name = $1 AND age = $2 AND gender = $3 AND email = $4';
        await pool.query(query, [name, age, gender, email]);
        res.status(200).send('Person deleted');
    } catch (err) {
        console.error('Error deleting person', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/duplicatePerson', async (req, res) => {
    try {
        const { name, age, gender, email } = req.body;

        const result = await pool.query(
            'SELECT name FROM person WHERE name LIKE $1',
            [`${name}_duplicate_%`]
        );

        const duplicates = result.rows.length;
        const newName = `${name}_duplicate_${duplicates + 1}`;
        const newAge = parseInt(age) + 1;

        const query = 'INSERT INTO person (name, age, gender, email) VALUES ($1, $2, $3, $4)';
        await pool.query(query, [newName, newAge, gender, email]);
        res.status(200).send('Person duplicated');
    } catch (err) {
        console.error('Error duplicating person', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
