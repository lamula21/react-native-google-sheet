// styles.js
import { StyleSheet } from 'react-native'

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { margin: 6, fontWeight: 'bold' },
  text: { margin: 6 },
  headerText: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
