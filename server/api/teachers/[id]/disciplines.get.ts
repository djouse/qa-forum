import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const teacherId = getRouterParam(event, 'id')
    
    if (!teacherId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Teacher ID is required'
      })
    }

    const teacherDisciplines = await prisma.teacherDiscipline.findMany({
      where: { teacherId },
      include: {
        discipline: true
      }
    })

    const disciplines = teacherDisciplines.map(td => td.discipline)

    return {
      success: true,
      disciplines
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to fetch teacher disciplines'
    })
  }
})