<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230507202250 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cycle_etude (id INT AUTO_INCREMENT NOT NULL, appartenir_id INT NOT NULL, titre VARCHAR(50) NOT NULL, is_main_study TINYINT(1) NOT NULL, discipline VARCHAR(50) NOT NULL, diplome VARCHAR(50) NOT NULL, INDEX IDX_B5ED604BE977E148 (appartenir_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE emploi (id INT AUTO_INCREMENT NOT NULL, appartenir_id INT NOT NULL, titre VARCHAR(50) NOT NULL, INDEX IDX_74A0B0FAE977E148 (appartenir_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entreprise (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(20) NOT NULL, siteweb VARCHAR(30) NOT NULL, ville VARCHAR(20) NOT NULL, pays VARCHAR(20) NOT NULL, description LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entreprise_secteur_activite (entreprise_id INT NOT NULL, secteur_activite_id INT NOT NULL, INDEX IDX_743F81E1A4AEAFEA (entreprise_id), INDEX IDX_743F81E15233A7FC (secteur_activite_id), PRIMARY KEY(entreprise_id, secteur_activite_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE etablissement (id INT AUTO_INCREMENT NOT NULL, nom_etablissement VARCHAR(50) NOT NULL, nom_universite VARCHAR(50) NOT NULL, ville VARCHAR(20) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE formation (id INT AUTO_INCREMENT NOT NULL, ajouter_par_id INT NOT NULL, apartenir_id INT NOT NULL, titre VARCHAR(50) NOT NULL, description LONGTEXT NOT NULL, date_ajout DATETIME NOT NULL, INDEX IDX_404021BF48E6F9B (ajouter_par_id), INDEX IDX_404021BFD90EC3ED (apartenir_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE offre_emploi (id INT AUTO_INCREMENT NOT NULL, ajouter_par_id INT NOT NULL, appartenir_id INT NOT NULL, titre VARCHAR(30) NOT NULL, date_ajout DATETIME NOT NULL, description LONGTEXT NOT NULL, INDEX IDX_132AD0D148E6F9B (ajouter_par_id), INDEX IDX_132AD0D1E977E148 (appartenir_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE offre_stage (id INT AUTO_INCREMENT NOT NULL, ajouter_par_id INT NOT NULL, appartenir_id INT NOT NULL, titre VARCHAR(30) NOT NULL, description LONGTEXT NOT NULL, date_ajout DATETIME NOT NULL, INDEX IDX_955674F248E6F9B (ajouter_par_id), INDEX IDX_955674F2E977E148 (appartenir_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE secteur_activite (id INT AUTO_INCREMENT NOT NULL, nom_secteur VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, first_name VARCHAR(20) DEFAULT NULL, last_name VARCHAR(20) DEFAULT NULL, cni VARCHAR(10) DEFAULT NULL, num_telephone INT DEFAULT NULL, sexe VARCHAR(10) DEFAULT NULL, email VARCHAR(30) NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_cycle_etude (user_id INT NOT NULL, cycle_etude_id INT NOT NULL, INDEX IDX_1CF6A9DEA76ED395 (user_id), INDEX IDX_1CF6A9DEA1C852C6 (cycle_etude_id), PRIMARY KEY(user_id, cycle_etude_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cycle_etude ADD CONSTRAINT FK_B5ED604BE977E148 FOREIGN KEY (appartenir_id) REFERENCES etablissement (id)');
        $this->addSql('ALTER TABLE emploi ADD CONSTRAINT FK_74A0B0FAE977E148 FOREIGN KEY (appartenir_id) REFERENCES entreprise (id)');
        $this->addSql('ALTER TABLE entreprise_secteur_activite ADD CONSTRAINT FK_743F81E1A4AEAFEA FOREIGN KEY (entreprise_id) REFERENCES entreprise (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE entreprise_secteur_activite ADD CONSTRAINT FK_743F81E15233A7FC FOREIGN KEY (secteur_activite_id) REFERENCES secteur_activite (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE formation ADD CONSTRAINT FK_404021BF48E6F9B FOREIGN KEY (ajouter_par_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE formation ADD CONSTRAINT FK_404021BFD90EC3ED FOREIGN KEY (apartenir_id) REFERENCES cycle_etude (id)');
        $this->addSql('ALTER TABLE offre_emploi ADD CONSTRAINT FK_132AD0D148E6F9B FOREIGN KEY (ajouter_par_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE offre_emploi ADD CONSTRAINT FK_132AD0D1E977E148 FOREIGN KEY (appartenir_id) REFERENCES emploi (id)');
        $this->addSql('ALTER TABLE offre_stage ADD CONSTRAINT FK_955674F248E6F9B FOREIGN KEY (ajouter_par_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE offre_stage ADD CONSTRAINT FK_955674F2E977E148 FOREIGN KEY (appartenir_id) REFERENCES emploi (id)');
        $this->addSql('ALTER TABLE user_cycle_etude ADD CONSTRAINT FK_1CF6A9DEA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_cycle_etude ADD CONSTRAINT FK_1CF6A9DEA1C852C6 FOREIGN KEY (cycle_etude_id) REFERENCES cycle_etude (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cycle_etude DROP FOREIGN KEY FK_B5ED604BE977E148');
        $this->addSql('ALTER TABLE emploi DROP FOREIGN KEY FK_74A0B0FAE977E148');
        $this->addSql('ALTER TABLE entreprise_secteur_activite DROP FOREIGN KEY FK_743F81E1A4AEAFEA');
        $this->addSql('ALTER TABLE entreprise_secteur_activite DROP FOREIGN KEY FK_743F81E15233A7FC');
        $this->addSql('ALTER TABLE formation DROP FOREIGN KEY FK_404021BF48E6F9B');
        $this->addSql('ALTER TABLE formation DROP FOREIGN KEY FK_404021BFD90EC3ED');
        $this->addSql('ALTER TABLE offre_emploi DROP FOREIGN KEY FK_132AD0D148E6F9B');
        $this->addSql('ALTER TABLE offre_emploi DROP FOREIGN KEY FK_132AD0D1E977E148');
        $this->addSql('ALTER TABLE offre_stage DROP FOREIGN KEY FK_955674F248E6F9B');
        $this->addSql('ALTER TABLE offre_stage DROP FOREIGN KEY FK_955674F2E977E148');
        $this->addSql('ALTER TABLE user_cycle_etude DROP FOREIGN KEY FK_1CF6A9DEA76ED395');
        $this->addSql('ALTER TABLE user_cycle_etude DROP FOREIGN KEY FK_1CF6A9DEA1C852C6');
        $this->addSql('DROP TABLE cycle_etude');
        $this->addSql('DROP TABLE emploi');
        $this->addSql('DROP TABLE entreprise');
        $this->addSql('DROP TABLE entreprise_secteur_activite');
        $this->addSql('DROP TABLE etablissement');
        $this->addSql('DROP TABLE formation');
        $this->addSql('DROP TABLE offre_emploi');
        $this->addSql('DROP TABLE offre_stage');
        $this->addSql('DROP TABLE secteur_activite');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_cycle_etude');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
