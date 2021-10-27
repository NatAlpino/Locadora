//classe customer
class Customer {
    /*costrutor da classe, que permite inicializá-la 
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


module.exports = Customer