const Message = require('../models/Message')

const data = require('./seeds.json')

Message.remove({}).then(() => {
    return Message.collection.insert(data);
})
.then(() => {
    process.exit();
});