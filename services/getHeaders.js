import axios from 'axios'

export async function fetchHeadersFromSheet () {
  try {
    const response = await axios.get('https://sheetdb.io/api/v1/lzy06slnet1mg/keys')
    return response.data
  } catch (error) {
    console.error('Error Fetch Headers:', error)
  }
};
