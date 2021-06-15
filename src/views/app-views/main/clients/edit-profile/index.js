import { Form, Button, Input, Row, Col, message } from "antd"
import { ROW_GUTTER } from "constants/ThemeConstant"
import { memo } from "react"
import { Redirect } from "react-router"

const EditProfile = (props) => {
	const onFinish = () => {
		const key = "updatable"
		message.loading({ content: "Updating...", key })
		setTimeout(() => {
			message.success({ content: "Done!", key, duration: 2 })
		}, 1000)
		props.history.push("user-list")
	}

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo)
	}

	if (!props.history.location.data) {
		return <Redirect to="user-list" />
	}

	const { name, email, username, phone, website, address } = props.history.location.data

	return (
		<>
			<div className="mt-4">
				<Form
					name="basicInformation"
					layout="vertical"
					initialValues={{
						name: name,
						email: email,
						username: username,
						phoneNumber: phone,
						website: website,
						address: address.street,
						city: address.city,
						postcode: address.zipcode,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Row>
						<Col xs={24} sm={24} md={24} lg={16}>
							<Row gutter={ROW_GUTTER}>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Name"
										name="name"
										rules={[
											{
												required: true,
												message: "Please input your name!",
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Username"
										name="username"
										rules={[
											{
												required: true,
												message: "Please input your username!",
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Email"
										name="email"
										rules={[
											{
												required: true,
												type: "email",
												message: "Please enter a valid email!",
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item label="Phone Number" name="phoneNumber">
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item label="Website" name="website">
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item label="Address" name="address">
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item label="City" name="city">
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item label="Post code" name="postcode">
										<Input />
									</Form.Item>
								</Col>
							</Row>
							<Button type="primary" htmlType="submit">
								Save Change
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</>
	)
}

export default memo(EditProfile)
