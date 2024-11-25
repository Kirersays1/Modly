const { createClient } = require("@libsql/client");
import { Sequelize } from 'sequelize-typescript'

const turso = createClient({
    url: "libsql://plataformamoodle-evermako.turso.io",
    authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzAxMzA4MjIsImlkIjoiODBhMjZmMDEtMTVmYS00NTE4LTk4MmMtMzM4MWNkYzVhMzI2In0.MBl7nk9cMChjyle_yuzw6ZNyr9gaZXPu9DY-GOI4QCiGOgEn79eSQZ1yI0TUl8P9045SCXCjOhGPEqZUzLFTAw"
});

const db = new Sequelize(turso, {
    models: [__dirname + '/../models/**/*.ts']
})

/*(async () => {
    try {
       // const result = await db.execute('SELECT * FROM usuario'); // Usa await
       // const result = await db.sync();
       // console.log("Query result:", result);
    } catch (error) {
        console.error("Error executing query:", error);
    }
})();*/

export default db;