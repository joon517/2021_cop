// Get Controller
const boardController = require('../../controllers/board/board');

const func = {
    getIndex: (req, res) => {
        boardController.getIndex(req, res);
    }
}

module.exports = func;


