USE walletdb;

CREATE TABLE expenses (
    id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `value` DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO expenses 
    (`id`,`name`,`description`,`value`) 
VALUES 
    (1, 'Mercado', 'pão e queijo', 28.00),
    (2, 'Aluguel', 'aluguel + água + iptu', 1160.00),
    (3, 'Luz', 'energia elétrica', 110.00),
    (4, 'Água', '2 galões de água', 18.00);
