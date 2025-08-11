var table = new MetaTable('Users', {
    id: { type: 'number', primaryKey: true },
    name: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true }
});


var view = select(table)
    .where( t => t.name === 'John Doe' && t.email === 'john.doe@example.com')
    .orderBy(t => t.id, 'desc')
    .limit(10)
    .offset(5);

    