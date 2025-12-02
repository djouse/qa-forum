import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')

    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Question ID is required'
      })
    }

    const question = await prisma.question.findUnique({
      where: { id },
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
        answers: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                role: true,
              }
            },
            attachments: true,
          },
          orderBy: {
            createdAt: 'asc'
          }
        },
        stateChanges: {
          include: {
            changedBy: {
              select: {
                id: true,
                name: true,
                role: true,
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    if (!question) {
      throw createError({
        statusCode: 404,
        message: 'Question not found'
      })
    }

    return {
      success: true,
      question
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to fetch question'
    })
  }
})