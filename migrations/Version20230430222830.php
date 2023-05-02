<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230430222830 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE entreprise (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(20) NOT NULL, siteweb VARCHAR(30) NOT NULL, ville VARCHAR(20) NOT NULL, pays VARCHAR(20) NOT NULL, description LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE offre_emploi (id INT AUTO_INCREMENT NOT NULL, ajouter_par_id INT NOT NULL, titre VARCHAR(30) NOT NULL, date_ajout DATETIME NOT NULL, description LONGTEXT NOT NULL, INDEX IDX_132AD0D148E6F9B (ajouter_par_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE offre_stage (id INT AUTO_INCREMENT NOT NULL, ajouter_par_id INT NOT NULL, titre VARCHAR(30) NOT NULL, description LONGTEXT NOT NULL, date_ajout DATETIME NOT NULL, INDEX IDX_955674F248E6F9B (ajouter_par_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, first_name VARCHAR(20) DEFAULT NULL, last_name VARCHAR(20) DEFAULT NULL, cni VARCHAR(10) DEFAULT NULL, num_telephone INT DEFAULT NULL, sexe VARCHAR(10) DEFAULT NULL, email VARCHAR(30) NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE offre_emploi ADD CONSTRAINT FK_132AD0D148E6F9B FOREIGN KEY (ajouter_par_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE offre_stage ADD CONSTRAINT FK_955674F248E6F9B FOREIGN KEY (ajouter_par_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE offre_emploi DROP FOREIGN KEY FK_132AD0D148E6F9B');
        $this->addSql('ALTER TABLE offre_stage DROP FOREIGN KEY FK_955674F248E6F9B');
        $this->addSql('DROP TABLE entreprise');
        $this->addSql('DROP TABLE offre_emploi');
        $this->addSql('DROP TABLE offre_stage');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
