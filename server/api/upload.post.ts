import { put } from '@vercel/blob'

export default defineEventHandler(async (event) => {
  try {
    const form = await readFormData(event)
    const file = form.get('file') as File
    
    if (!file || !file.size) {
      throw createError({
        statusCode: 400,
        message: 'No file provided'
      })
    }

    // Validate file type (images and PDFs only)
    const allowedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf'
    ]

    if (!allowedTypes.includes(file.type)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid file type. Only images (JPEG, PNG, GIF, WebP) and PDF files are allowed.'
      })
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024 // 10MB in bytes
    if (file.size > maxSize) {
      throw createError({
        statusCode: 400,
        message: 'File too large. Maximum size is 10MB.'
      })
    }

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: 'public',
      addRandomSuffix: true, // Adds random suffix to prevent name collisions
    })

    // Return file metadata
    return {
      success: true,
      file: {
        url: blob.url,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
      }
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to upload file'
    })
  }
})