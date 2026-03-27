migrate(
  (app) => {
    const collection = new Collection({
      name: 'contact_messages',
      type: 'base',
      listRule: 'id = @request.auth.id',
      viewRule: 'id = @request.auth.id',
      createRule: '',
      updateRule: 'id = @request.auth.id',
      deleteRule: 'id = @request.auth.id',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text', required: false },
        { name: 'service', type: 'text', required: false },
        { name: 'message', type: 'text', required: true },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('contact_messages')
    app.delete(collection)
  },
)
