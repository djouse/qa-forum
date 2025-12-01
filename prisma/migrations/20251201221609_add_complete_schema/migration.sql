/*
  Warnings:

  - Added the required column `disciplineId` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gradeYear` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "QuestionState" AS ENUM ('ACTIVE', 'RESOLVED', 'CANCELED');

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_questionId_fkey";

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "disciplineId" TEXT NOT NULL,
ADD COLUMN     "gradeYear" INTEGER NOT NULL,
ADD COLUMN     "state" "QuestionState" NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "Discipline" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherDiscipline" (
    "id" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "disciplineId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeacherDiscipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionStateChange" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "changedById" TEXT NOT NULL,
    "fromState" "QuestionState" NOT NULL,
    "toState" "QuestionState" NOT NULL,
    "summary" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuestionStateChange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionAttachment" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuestionAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerAttachment" (
    "id" TEXT NOT NULL,
    "answerId" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnswerAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Discipline_name_key" ON "Discipline"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherDiscipline_teacherId_disciplineId_key" ON "TeacherDiscipline"("teacherId", "disciplineId");

-- CreateIndex
CREATE INDEX "QuestionStateChange_questionId_idx" ON "QuestionStateChange"("questionId");

-- CreateIndex
CREATE INDEX "QuestionAttachment_questionId_idx" ON "QuestionAttachment"("questionId");

-- CreateIndex
CREATE INDEX "AnswerAttachment_answerId_idx" ON "AnswerAttachment"("answerId");

-- CreateIndex
CREATE INDEX "Answer_questionId_idx" ON "Answer"("questionId");

-- CreateIndex
CREATE INDEX "Question_state_idx" ON "Question"("state");

-- CreateIndex
CREATE INDEX "Question_disciplineId_idx" ON "Question"("disciplineId");

-- CreateIndex
CREATE INDEX "Question_gradeYear_idx" ON "Question"("gradeYear");

-- AddForeignKey
ALTER TABLE "TeacherDiscipline" ADD CONSTRAINT "TeacherDiscipline_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherDiscipline" ADD CONSTRAINT "TeacherDiscipline_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionStateChange" ADD CONSTRAINT "QuestionStateChange_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionStateChange" ADD CONSTRAINT "QuestionStateChange_changedById_fkey" FOREIGN KEY ("changedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionAttachment" ADD CONSTRAINT "QuestionAttachment_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerAttachment" ADD CONSTRAINT "AnswerAttachment_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
