const Incident = require("../Models/incident.model.js");

const getAllIncidents = async (req, res) => {
    try {
        const incidents = await Incident.find().sort({ reported_at: -1 });
        res.status(200).json(incidents);
    } catch (error) {
        console.error("Error fetching incidents:", error);
        res.status(500).json({ message: "Server error occurred", error });
    }
};

const registerAnIncident = async (req, res) => {
    try {
        const { title, description, severity } = req.body;
        const allowedSeverities = ["Low", "Medium", "High"];

        if (
            !title ||
            !description ||
            !severity ||
            !allowedSeverities.includes(severity)
        ) {
            return res.status(400).json({ error: "Invalid or missing fields" });
        }

        const newIncident = new Incident({ title, description, severity });
        await newIncident.save();
        res.status(201).json(newIncident);
    } catch (error) {
        console.error("Error registering incident:", error);
        res.status(500).json({ error: "Server error occurred" });
    }
};

const getParticularIncident = async (req, res) => {
    try {
        const incident = await Incident.findById(req.params.id);
        if (!incident) {
            return res.status(404).json({ error: "Incident not found" });
        }
        res.status(200).json(incident);
    } catch (error) {
        console.error("Error fetching incident:", error);
        res.status(500).json({ error: "Server error occurred" });
    }
};

const deleteParticularIncident = async (req, res) => {
    try {
        const incident = await Incident.findByIdAndDelete(req.params.id);
        if (!incident) {
            return res.status(404).json({ error: 'Incident not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting incident:", error);
        res.status(500).json({ error: "Server error occurred" });
    }
};

module.exports = {
    getAllIncidents,
    registerAnIncident,
    getParticularIncident,
    deleteParticularIncident,
};
