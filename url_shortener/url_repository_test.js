const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

// See documentation at https://www.npmjs.com/package/sqlite?activeTab=readme

class UrlRepository {
    // Example: how you query the DB
    async seven() {
        const db = await open({
            filename: 'db/data/test.db',
            driver: sqlite3.Database
        });

        const result = await db.get('SELECT 3+4 as sum');
        return result.sum;
    }

    // Example: how you insert data into the DB
    async foo(a, b) {
        const db = await open({
            filename: 'db/data/test.db',
            driver: sqlite3.Database
        });

        await db.run('update foo set ? = ?', a, b);
    }
}

test('3+4 is seven', async () => {
    const repository = new UrlRepository();

    const result = await repository.seven();

    expect(result).toBe(7);
});
