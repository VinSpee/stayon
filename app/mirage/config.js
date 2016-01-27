export default function API() {
  this.get('/current-user/', (db) => ({
    data: {
      type: 'current-user',
      id: 1,
      attributes: db.users.find(1),
    },
  }));
  this.get('/clients', (db) => ({
    data: db.clients.map(attrs => ({
      type: 'clients',
      id: attrs.id,
      attributes: attrs,
    })),
  }));
};
