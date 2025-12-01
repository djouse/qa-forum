import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validate required fields
    if (!body.title || !body.content || !body.authorId || !body.disciplineId || !body.gradeYear) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields: title, content, authorId, disciplineId, gradeYear'
      })
    }

    // Validate grade year
    if (body.gradeYear < 7 || body.gradeYear > 12) {
      throw createError({
        statusCode: 400,
        message: 'Grade year must be between 7 and 12'
      })
    }

    // Check if author exists and is a student
    const author = await prisma.user.findUnique({
      where: { id: body.authorId }
    })

    if (!author) {
      throw createError({
        statusCode: 404,
        message: 'Author not found'
      })
    }

    if (author.role !== 'STUDENT') {
      throw createError({
        statusCode: 403,
        message: 'Only students can create questions'
      })
    }

    // Check if discipline exists
    const discipline = await prisma.discipline.findUnique({
      where: { id: body.disciplineId }
    })

    if (!discipline) {
      throw createError({
        statusCode: 404,
        message: 'Discipline not found'
      })
    }

    // Create question with attachments
    const question = await prisma.question.create({
      data: {
        title: body.title,
        content: body.content,
        gradeYear: body.gradeYear,
        authorId: body.authorId,
        disciplineId: body.disciplineId,
        state: 'ACTIVE',
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
        discipline: {
          select: {
            id: true,
            name: true,
          }
        },
        attachments: true,
      }
    })

    return {
      success: true,
      question
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to create question'
    })
  }
})