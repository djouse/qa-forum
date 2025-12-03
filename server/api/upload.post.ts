import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { APP_SETTINGS } from '~/config/settings'

export default defineEventHandler(async (event) => {
  try {
    const formData = await readMultipartFormData(event)
    
    if (!formData || formData.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No file provided'
      })
    }

    const file = formData[0]
    
    if (!file.filename || !file.data) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid file data'
      })
    }

    // Check file size
    if (file.data.length > APP_SETTINGS.MAX_FILE_SIZE) {
      throw createError({
        statusCode: 400,
        statusMessage: `File too large. Maximum size is ${APP_SETTINGS.MAX_FILE_SIZE_MB}MB`
      })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const randomId = Math.random().toString(36).substring(2)
    const fileExtension = file.filename.split('.').pop()
    const uniqueFilename = `${timestamp}-${randomId}.${fileExtension}`

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadsDir, { recursive: true })

    // Save file
    const filePath = join(uploadsDir, uniqueFilename)
    await writeFile(filePath, file.data)

    // Return file info
    const fileUrl = `/uploads/${uniqueFilename}`
    
    return {
      success: true,
      file: {
        url: fileUrl,
        fileName: file.filename,
        fileType: file.type || 'application/octet-stream',
        fileSize: file.data.length
      }
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to upload file'
    })
  }
})