//classe customer
class Customer {
    /*costrutor da classe, que permite inicializ√°-la 
    passando atributos para uso interno. */
    constructor(id, name, cpf, birthday) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.birthday = birthday;
        this.active = true;
        this.created_at = new Date();
    }
}

//exporta a classe Customer
module.exports = Customer