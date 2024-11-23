function validateBookingRequest(req, res, next) {
    try {
        req.body.flightId = parseInt(req.body.flightId, 10);
        req.body.userId = parseInt(req.body.userId, 10);
        req.body.noOfSeats = parseInt(req.body.noOfSeats, 10);
        req.body.totalCost = parseInt(req.body.totalCost, 10);

        next(); // Pass control to the next middleware/controller
    } catch (error) {
        res.status(400).json({
            message: "Invalid request data",
            success: false,
            error: error.message,
        });
    }
}
module.exports={
    validateBookingRequest
}