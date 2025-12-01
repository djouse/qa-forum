import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    
    // Optional filters from query params
    const state = query.state as string | undefined
    const disciplineId = query.disciplineId as string | undefined
    const gradeYear = query.gradeYear ? parseInt(query.gradeYear as string) : undefined

    const questions = await prisma.question.findMany({
      where: {
        ...(state && { state: state as any }),
        ...(disciplineId && { disciplineId }),
        ...(gradeYear && { gradeYear }),
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            role: true,
          }
        },
        discipline: {
          select: {
            id: true,
            name: true,
          }
        },
        attachments: true,
        _count: {
          select: {
            answers: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return {
      success: true,
      questions: questions.map((q: any) => ({
        ...q,
        answerCount: q._count.answers,
        _count: undefined // Remove the _count object from response
      }))
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to fetch questions'
    })
  }
})