Message = require("../models/Message");

let Message = mongoose.model("Message");

const Message = new Schema {
    author: '',
    body: ''
}

Message.remove({}).then(() => {
  done();
});
