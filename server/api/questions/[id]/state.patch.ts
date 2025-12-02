import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const questionId = getRouterParam(event, 'id')
    const body = await readBody(event)
    
    const { state, userId, summary } = body
    
    if (!questionId || !state || !userId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Get question to check ownership and current state
    const question = await prisma.question.findUnique({
      where: { id: questionId },
      select: { authorId: true, state: true }
    })

    if (!question) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Question not found'
      })
    }

    // Verify user exists and is either teacher or question owner
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true }
    })

    if (!user || (user.role !== 'TEACHER' && question.authorId !== userId)) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Only teachers or question owners can update question state'
      })
    }

    // Update question state and create state change record
    const [updatedQuestion] = await prisma.$transaction([
      prisma.question.update({
        where: { id: questionId },
        data: { state },
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
          }
        }
      }),
      prisma.questionStateChange.create({
        data: {
          questionId,
          changedById: userId,
          fromState: question.state,
          toState: state,
          summary
        }
      })
    ])

    return {
      success: true,
      question: updatedQuestion
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to update question state'
    })
  }
})