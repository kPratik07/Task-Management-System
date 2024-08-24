const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../services/taskService");

const create = async (req, res) => {
  try {
    const taskData = { ...req.body, createdBy: req.user._id };
    const task = await createTask(taskData);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const filters = req.query;
    const tasks = await getTasks(filters);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updateData = req.body;
    const task = await updateTask(taskId, updateData);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const taskId = req.params.id;
    await deleteTask(taskId);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { create, getAll, update, remove };
