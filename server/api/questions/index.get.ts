import { PrismaClient } from '@prisma/client'
import { APP_SETTINGS } from '~/config/settings'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    
    // Pagination
    const page = query.page ? parseInt(query.page as string) : 1
    const limit = query.limit ? parseInt(query.limit as string) : APP_SETTINGS.QUESTIONS_PER_PAGE
    const skip = (page - 1) * limit

    // Optional filters from query params
    const state = query.state as string | undefined
    const disciplineId = query.disciplineId as string | undefined
    const gradeYear = query.gradeYear ? parseInt(query.gradeYear as string) : undefined
    const authorId = query.authorId as string | undefined
    const orderBy = query.orderBy as string | undefined

    // Build orderBy clause
    let orderByClause: any = { createdAt: 'desc' }
    if (orderBy === 'discipline') {
      orderByClause = { discipline: { name: 'asc' } }
    } else if (orderBy === 'gradeYear') {
      orderByClause = { gradeYear: 'asc' }
    }

    const [questions, totalCount] = await Promise.all([
      prisma.question.findMany({
        where: {
          ...(state && { state: state as any }),
          ...(disciplineId && { disciplineId }),
          ...(gradeYear && { gradeYear }),
          ...(authorId && { authorId }),
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
        orderBy: orderByClause,
        skip,
        take: limit
      }),
      prisma.question.count({
        where: {
          ...(state && { state: state as any }),
          ...(disciplineId && { disciplineId }),
          ...(gradeYear && { gradeYear }),
          ...(authorId && { authorId }),
        }
      })
    ])

    return {
      success: true,
      questions: questions.map((q: any) => ({
        ...q,
        answerCount: q._count.answers,
        _count: undefined // Remove the _count object from response
      })),
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit),
        hasNext: page < Math.ceil(totalCount / limit),
        hasPrev: page > 1
      }
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to fetch questions'
    })
  }
})