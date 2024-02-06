import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Row, Rows, Table } from 'react-native-table-component'
import { commonStyles } from '../styles/styles'
import { fetchDataFromSheet } from '../services/getSheet'
import { fetchHeadersFromSheet } from '../services/getHeaders'
import { useFocusEffect } from '@react-navigation/native'

export function HomeScreen () {
  const [tableData, setTableData] = useState([])
  const [tableHeaders, setTableHeaders] = useState([])

  const fetchData = async () => {
    try {
      const data = await fetchDataFromSheet()
      const headers = await fetchHeadersFromSheet()

      setTableData(data ?? [])
      setTableHeaders(headers ?? [])
    } catch (error) {
      console.error('HomeScreen - Error Fetching Data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Use useFocusEffect to refetch data when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchData()
    }, [])
  )

  // Convert array of objects to array of arrays
  const formattedData = tableData.map(item => Object.values(item))

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.headerText}>Google Sheet API</Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row
          data={tableHeaders}
          style={commonStyles.head}
          textStyle={commonStyles.headText}
        />
        <Rows data={formattedData} textStyle={commonStyles.text} />
      </Table>

      <StatusBar style='auto' />
    </View>
  )
};
