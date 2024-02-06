import axios from 'axios'

export const writeToSheet = async (formData) => {
  try {
    const response = await axios.post(
      'https://sheetdb.io/api/v1/lzy06slnet1mg',
      formData
    )
    return response
  } catch (error) {
    console.error('writeToSheet - ', error)
  }
}
