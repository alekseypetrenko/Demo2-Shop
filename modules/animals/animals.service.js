const AnimalModel = require('./animals.model');
//const { NotFound } = require('../../common/exceptions');

class AnimalService {

    async findMany(animal) {
        return AnimalModel.findAll({ where: { AnimalId: animal.id } });
    }

    async findOneById(id) {
        const task = await AnimalModel.findOne({ where: { id } });

        if (!task) {
            throw new NotFound('Task not found');
        }

        return task;
    }

    async createOne(user, taskData) {
        console.log(user);
        const AnimalModel = new AnimalModel(taskData);
        AnimalModel.UserId = user.id;
        return AnimalModel.save();
    }

    async updateOne(id, taskData) {
        await this.findOneById(id);
        await AnimalModel.update(taskData, { where: { id } });
        return this.findOneById(id);
    }

    async removeOne(id) {
        const task = await this.findOneById(id);
        task.destroy();
        return { id: task.id };
    }
}

module.exports = new AnimalService();