import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validate required fields
    if (!body.email || !body.name) {
      throw createError({
        statusCode: 400,
        message: 'Email and name are required'
      })
    }

    // Find user by email and name
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        name: body.name,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      }
    })

    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'Invalid credentials. User not found with this email and name combination.'
      })
    }

    return {
      success: true,
      user
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to login'
    })
  }
})