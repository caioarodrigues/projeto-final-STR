-- MySQL Script generated by MySQL Workbench
-- Sat Nov 25 17:19:28 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`planta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`planta` ;

CREATE TABLE IF NOT EXISTS `mydb`.`planta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` ENUM("boa noite", "comigo ninguem pode") NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`umidade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`umidade` ;

CREATE TABLE IF NOT EXISTS `mydb`.`umidade` (
  `valor` INT NOT NULL,
  `planta_id` INT NOT NULL,
  `instante` DATETIME NOT NULL,
  UNIQUE INDEX `instante_UNIQUE` (`instante` ASC),
  CONSTRAINT `fk_umidade_plantas`
    FOREIGN KEY (`planta_id`)
    REFERENCES `mydb`.`planta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`luminosidade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`luminosidade` ;

CREATE TABLE IF NOT EXISTS `mydb`.`luminosidade` (
  `valor` INT NOT NULL,
  `planta_id` INT NOT NULL,
  `instante` DATETIME NOT NULL,
  UNIQUE INDEX `instante_UNIQUE` (`instante` ASC),
  CONSTRAINT `fk_luminosidade_plantas1`
    FOREIGN KEY (`planta_id`)
    REFERENCES `mydb`.`planta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`quantidade_de_agua`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`quantidade_de_agua` ;

CREATE TABLE IF NOT EXISTS `mydb`.`quantidade_de_agua` (
  `valor` INT NOT NULL,
  `planta_id` INT NOT NULL,
  `instante` DATETIME NOT NULL,
  UNIQUE INDEX `instante_UNIQUE` (`instante` ASC),
  CONSTRAINT `fk_quantidade_de_agua_plantas1`
    FOREIGN KEY (`planta_id`)
    REFERENCES `mydb`.`planta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
