class Product {
    constructor({id, description, quantityStock, quantityAvailable, value}) {
        this.id = id;
        this.description = description;
        this.quantityStock = quantityStock;
        this.quantityAvailable = quantityAvailable;
        this.value = value;
        this.active = true;
        this.created_at = new Date();
    }
}

module.exports = Product