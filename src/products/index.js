class Product {
    constructor(id, description, quantityStock, quantityAvailable) {
        this.id = id;
        this.description = description;
        this.quantityStock = quantityStock;
        this.quantityAvailable = quantityAvailable;
        this.active = true;
        this.created_at = new Date();
    }
}

module.exports = Product