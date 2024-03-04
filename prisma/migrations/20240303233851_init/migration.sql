-- CreateTable
CREATE TABLE `noticia` (
    `id_noticia` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `subtitulo` VARCHAR(191) NOT NULL,
    `conteudo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_noticia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
