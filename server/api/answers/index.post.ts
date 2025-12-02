import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validate required fields
    if (!body.content || !body.questionId || !body.authorId) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields: content, questionId, authorId'
      })
    }

    // Check if question exists
    const question = await prisma.question.findUnique({
      where: { id: body.questionId }
    })

    if (!question) {
      throw createError({
        statusCode: 404,
        message: 'Question not found'
      })
    }

    // Check if author exists
    const author = await prisma.user.findUnique({
      where: { id: body.authorId }
    })

    if (!author) {
      throw createError({
        statusCode: 404,
        message: 'Author not found'
      })
    }

    // Create answer with attachments
    const answer = await prisma.answer.create({
      data: {
        content: body.content,
        questionId: body.questionId,
        authorId: body.authorId,
        attachments: body.attachments ? {
          create: body.attachments.map((att: any) => ({
            fileName: att.fileName,
            fileUrl: att.fileUrl,
            fileType: att.fileType,
            fileSize: att.fileSize,
          }))
        } : undefined
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            role: true,
          }
        },
        attachments: true,
      }
    })

    return {
      success: true,
      answer
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to create answer'
    })
  }
})