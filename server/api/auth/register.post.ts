import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validate required fields
    if (!body.name || !body.email || !body.role) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields: name, email, role'
      })
    }

    // Validate role
    if (body.role !== 'STUDENT' && body.role !== 'TEACHER') {
      throw createError({
        statusCode: 400,
        message: 'Role must be either STUDENT or TEACHER'
      })
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email }
    })

    if (existingUser) {
      throw createError({
        statusCode: 409,
        message: 'Email already registered'
      })
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        role: body.role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      }
    })

    return {
      success: true,
      user
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to register user'
    })
  }
})