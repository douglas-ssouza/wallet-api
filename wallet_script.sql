USE walletdb;

CREATE TABLE expenses (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    dsecription VARCHAR(100) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY(id),
);
