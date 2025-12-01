import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const disciplines = await prisma.discipline.findMany({
      orderBy: {
        name: 'asc'
      }
    })

    return {
      success: true,
      disciplines
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to fetch disciplines'
    })
  }
})