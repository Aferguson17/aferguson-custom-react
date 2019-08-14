export default {
    bucket: {
      slug: process.env.COSMIC_BUCKET || 'for-the-love-of-art',
      read_key: process.env.COSMIC_READ_KEY || '',
      write_key: process.env.COSMIC_WRITE_KEY || '',
      port: process.env.PORT || '',  
    }
  }