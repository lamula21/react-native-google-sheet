import { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { commonStyles } from '../styles/styles'
import { writeToSheet } from '../services/writeSheet'

const initialState = { id: '', name: '', lastname: '', age: '' }

export function FormScreen ({ navigation }) {
  const [formData, setFormData] = useState(initialState)

  const handlePost = async () => {
    try {
      await writeToSheet(formData)

      setFormData(initialState)
      navigation.navigate('Home')
    } catch (error) {
      console.error('FormScreen - Error Posting Data:', error)
    }
  }

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <View style={commonStyles.container}>
      <ScrollView>
        <Text style={commonStyles.headerText}>Google Sheet Form</Text>
        <View style={commonStyles.formContainer}>
          <TextInput
            style={commonStyles.input}
            placeholder='ID'
            value={formData.id}
            onChangeText={(text) => handleChange('id', text)}
          />
          <TextInput
            style={commonStyles.input}
            placeholder='Name'
            value={formData.name}
            onChangeText={(text) => handleChange('name', text)}
          />
          <TextInput
            style={commonStyles.input}
            placeholder='Lastname'
            value={formData.lastname}
            onChangeText={(text) => handleChange('lastname', text)}
          />
          <TextInput
            style={commonStyles.input}
            placeholder='Age'
            value={formData.age}
            onChangeText={(text) => handleChange('age', text)}
          />

          <TouchableOpacity style={commonStyles.button} onPress={handlePost}>
            <Text style={commonStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
