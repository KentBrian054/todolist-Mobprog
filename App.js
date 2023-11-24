import React, { useState } from "react"; //importing
import { 
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	FlatList, 
	StyleSheet, 
} from "react-native"; 

const App = () => { 
	const [task, setTask] = useState(""); 
	const [tasks, setTasks] = useState([]); 
	const [editIndex, setEditIndex] = useState(-1); 

	const handleAddTask = () => { 
		if (task) { 
			if (editIndex !== -1) { 
				// Edit existing task 
				const updatedTasks = [...tasks]; 
				updatedTasks[editIndex] = task; 
				setTasks(updatedTasks); 
				setEditIndex(-1); 
			} else { 
				// Add new task 
				setTasks([...tasks, task]); 
			} 
			setTask(""); 
		} 
	}; 
// functions ani
	const handleEditTask = (index) => { 
		const taskToEdit = tasks[index]; 
		setTask(taskToEdit); 
		setEditIndex(index); 
	}; 

	const handleDeleteTask = (index) => { 
		const updatedTasks = [...tasks]; 
		updatedTasks.splice(index, 1); 
		setTasks(updatedTasks); 
	}; 

	const renderItem = ({ item, index }) => ( 
		<View style={styles.task}> 
			<Text 
				style={styles.itemList}>{item}</Text> 
			<View 
				style={styles.taskButtons}> 
				<TouchableOpacity 
					onPress={() => handleEditTask(index)}> 
					<Text 
						style={styles.editButton}>Edit</Text> 
				</TouchableOpacity> 
				<TouchableOpacity 
					onPress={() => handleDeleteTask(index)}> 
					<Text 
						style={styles.deleteButton}>Delete</Text> 
				</TouchableOpacity> 
			</View> 
		</View> 
	); 

	return ( 
		<View style={styles.container}> 
			<Text style={styles.heading}>ToDolist</Text> 
			<Text style={styles.title}>ToDo App</Text> 
			<TextInput 
				style={styles.input} 
				placeholder="Please Enter the task"
				value={task} 
				onChangeText={(text) => setTask(text)} 
			/> 
			<TouchableOpacity 
				style={styles.addButton} 
				onPress={handleAddTask}> 
				<Text style={styles.addButtonText}> 
					{editIndex !== -1 ? "Modify Task" : "Add Task"} 
				</Text> 
			</TouchableOpacity> 
			<FlatList 
				data={tasks} 
				renderItem={renderItem} 
				keyExtractor={(item, index) => index.toString()} 
			/> 
		</View> 
	); 
}; 
// mga design CSS
const styles = StyleSheet.create({ 
	container: { 
	  flex: 1, 
	  padding: 50, 
	  marginTop: 50, 
	  backgroundColor: "skyblue",
	}, 
	title: { 
	  fontSize: 26, 
	  fontWeight: "bold", 
	  marginBottom: 30, 
	  color: "#333",
	  textAlign: "center", 
	}, 
	heading: { 
	  fontSize: 32, 
	  fontWeight: "bold", 
	  marginBottom: 10, 
	  color: "#008000", 
	}, 
	input: { 
	  borderWidth: 2, 
	  borderColor: "#ddd", 
	  padding: 15, 
	  marginBottom: 20, 
	  borderRadius: 15, 
	  fontSize: 20, 
	}, 
	addButton: { 
	  backgroundColor: "#808080", 
	  padding: 15, 
	  borderRadius: 10, 
	  marginBottom: 20, 
	}, 
	addButtonText: { 
	  color: "#fff", 
	  fontWeight: "bold", 
	  textAlign: "center", 
	  fontSize: 20, 
	}, 
	task: { 
	  flexDirection: "row", 
	  justifyContent: "space-between", 
	  alignItems: "center", 
	  marginBottom: 30, 
	  fontSize: 28, 
	}, 
	itemList: { 
	  fontSize: 21, 
	}, 
	taskButtons: { 
	  flexDirection: "row", 
	  justifyContent: "space-between", 
	}, 
	deleteButton: { 
	  color: "#ff0000", 
	  fontWeight: "bold", 
	  fontSize: 20,
	  borderWidth: 2,
	  borderColor: "#ff0000",
	  padding: 10,
	  borderRadius: 5,
	},
	editButton: { 
	  color: "#008000", 
	  fontWeight: "bold", 
	  fontSize: 20,
	  borderWidth: 2,
	  borderColor: "#008000",
	  padding: 10,
	  borderRadius: 5,
	}, 
  });
export default App;

