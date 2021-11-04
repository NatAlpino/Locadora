class DAO {
//o constructor é inicializado quando fazemos um NEW
//NEW = instaciar uma nova classe
    constructor(model) {
        this.model = model
    }

    create(object) {
        this.model.push(object)
        return object
    }

    findOne(id) {
        return this.model.find(x => x.id  == id)
    }

    findAll() {
        return this.model
    }

    update(updateObject, id) {
        const idx = this.model.findIndex(x => x.id == id)
        this.model[idx] = updateObject
        return this.model.find(x => x.id == id)
    }

    destroy(id) {
        const idx = this.model.findIndex(x => x.id == id)
        this.model.splice(idx, 1)
    }

}

module.exports = DAO;