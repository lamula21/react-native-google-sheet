import axios from 'axios'

export const fetchDataFromSheet = async () => {
  try {
    const response = await axios.get('https://sheetdb.io/api/v1/lzy06slnet1mg')
    return response.data
  } catch (error) {
    console.error(error)
  }
}
