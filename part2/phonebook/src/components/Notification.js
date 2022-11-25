const notificationStyle = {
	fontSize: 16,
	fontWeight: "bold",
	color: "green",
	backgroundColor: "lightGray",
	borderStyle: "solid",
	borderRadius: 5,
	marginBottom: 25,
};

const messageStyle = {
	paddingLeft: 15,
};

const Notification = ({ message }) => {
	if (message === null) {
		return null;
	} else {
		return (
			<div style={notificationStyle}>
				<p style={messageStyle}> {message} </p>
			</div>
		);
	}
};

export default Notification;
