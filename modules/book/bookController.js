const bookModel = require('../book/models/bookModel');

class BookController {

    static async createBook(bookData) {
        let BookModel = new bookModel(bookData)
        return await BookModel.save();
    }

    static async editBookDetails(bookData, bookId) {
        const bookDetails = await bookModel.findByIdAndUpdate(bookId, bookData, { new: true });
        return bookDetails;
    }

    static async getBookDetails({ bookId }) {
        const bookData = await bookModel.findById(bookId);
        return bookData;
    }

    static async getBooksList({ page = 1, limit = 10 }) {
        let options = {};
        options.page = parseInt(page);
        options.limit = parseInt(limit);
        const bookList = await bookModel.paginate({}, options);
        return bookList;
    }

    static async deleteBookData(bookId) {
        const deletedBookData = await bookModel.deleteOne({ _id: bookId }, { new: true });
        if (deletedBookData.deletedCount) return 'Deleted SucessFully';
        else return 'Already deleted'
    }
}

module.exports = BookController;