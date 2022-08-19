
function adminAuth (req, res, next) {
    const token = req.body.token;
    if (!token) {
        res.send({
            error: -1, 
            description: `route: ${req.url} method: ${req.method} unauthorized`
        })
        return;
    } else {
        req.token = token;
        next();
    }
}

module.exports = {adminAuth}