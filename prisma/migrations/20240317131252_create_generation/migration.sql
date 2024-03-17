-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "imagesURl" TEXT[],
    "generationParamsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "generation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GenerationParams" (
    "id" TEXT NOT NULL,
    "shape" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "colorName" TEXT NOT NULL,
    "generationsNumber" INTEGER NOT NULL,
    "prompt" TEXT NOT NULL,
    "styles" TEXT[],
    "generationId" TEXT NOT NULL,

    CONSTRAINT "GenerationParams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GenerationParams_generationId_key" ON "GenerationParams"("generationId");

-- AddForeignKey
ALTER TABLE "generation" ADD CONSTRAINT "generation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenerationParams" ADD CONSTRAINT "GenerationParams_generationId_fkey" FOREIGN KEY ("generationId") REFERENCES "generation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
