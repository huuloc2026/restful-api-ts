function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err); // Tránh gửi phản hồi nhiều lần
    }
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
}
export default errorHandler;
//# sourceMappingURL=errorHandler.js.map