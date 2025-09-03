/*
  Warnings:

  - You are about to drop the column `identificador` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `user_identificador_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `identificador`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_name_key` ON `user`(`name`);
