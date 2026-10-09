const StudentController = {
    create(req, res) {
        res.send({ message: "Student record created successfully" });
    },
    readAll(req, res) {
        res.send({ message: "All student records fetched" });
    },
    readOne(req, res) {
        // req.params.id URL se student ki ID nikalega
        res.send({ message: `Student detail found for ID: ${req.params.id}` });
    },
    update(req, res) {
        res.send({ message: `Student record updated for ID: ${req.params.id}` });
    },
    destroy(req, res) {
        res.send({ message: `Student record deleted for ID: ${req.params.id}` });
    }
};

module.exports = StudentController;