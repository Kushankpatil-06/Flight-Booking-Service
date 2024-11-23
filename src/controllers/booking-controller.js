const { StatusCodes } = require('http-status-codes');
const { BookingService } = require('../services/index');

const bookingService = new BookingService();

class BookingController {
    async create(req, res) {
        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.CREATED).json({
                message: 'Successfully completed booking',
                success: true,
                err: {},
                data: response,
            });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message || 'An unexpected error occurred',
                success: false,
                err: error,
                data: {},
            });
        }
    }
}

module.exports = BookingController;
