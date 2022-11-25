const notificationStyle = {
	fontSize: 16,
	fontWeight: "bold",
	color: "green",
	backgroundColor: "lightGray",
	borderStyle: "solid",
	borderRadius: 5,
	marginBottom: 25,
};

const errorNotificationStyle = {
	fontSize: 16,
	fontWeight: "bold",
	color: "red",
	backgroundColor: "lightGray",
	borderStyle: "solid",
	borderRadius: 5,
	marginBottom: 25,
};

const messageStyle = {
	paddingLeft: 15,
};

const NotificationOK = ({ message }) => {
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

const ErrorNotification = ({ errorMsg }) => {
	if (errorMsg === null) {
		return null;
	} else {
		return (
			<div style={errorNotificationStyle}>
				<p style={messageStyle}>
					{`Information of ${errorMsg} has already been removed from server`}
				</p>
			</div>
		);
	}
};

const Notification = { NotificationOK, ErrorNotification };
export default Notification;
