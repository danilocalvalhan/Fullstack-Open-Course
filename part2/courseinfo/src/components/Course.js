import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
	return (
		<>
			<Header text={props.courseObj.name} />
			<Content parts={props.courseObj.parts} />
			<Total parts={props.courseObj.parts} />
		</>	
	)
}

export default Course;

