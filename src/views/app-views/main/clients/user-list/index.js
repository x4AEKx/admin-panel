import AvatarStatus from "components/shared-components/AvatarStatus"
import { UserOutlined } from "@ant-design/icons"
import { fetchUsers } from "redux/actions/Users"
import { Card, Table, Spin } from "antd"
import React, { Component } from "react"
import { connect } from "react-redux"

export class UserList extends Component {
	componentDidMount() {
		this.props.fetchUsers()
	}

	onRowClickHandle = (r) => {
		this.props.history.push({
			pathname: "edit-profile",
			data: r,
		})
	}

	render() {
		const { data, loading } = this.props

		const tableColumns = [
			{
				title: "User",
				dataIndex: "name",
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus icon={<UserOutlined />} name={record.name} subTitle={record.email} />
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase()
						b = b.name.toLowerCase()
						return a > b ? -1 : b > a ? 1 : 0
					},
				},
			},
			{
				title: "City",
				dataIndex: "city",
				render: (_, record) => <span>{record.address.city} </span>,
				sorter: {
					compare: (a, b) => {
						a = a.address.city.toLowerCase()
						b = b.address.city.toLowerCase()
						return a > b ? -1 : b > a ? 1 : 0
					},
				},
			},
			{
				title: "Company",
				dataIndex: "company",
				render: (_, record) => <span>{record.company.name} </span>,
				sorter: {
					compare: (a, b) => {
						a = a.company.name.toLowerCase()
						b = b.company.name.toLowerCase()
						return a > b ? -1 : b > a ? 1 : 0
					},
				},
			},
			{
				title: "Website",
				dataIndex: "website",
				render: (_, record) => <span>{record.website} </span>,
				sorter: {
					compare: (a, b) => {
						a = a.website.toLowerCase()
						b = b.website.toLowerCase()
						return a > b ? -1 : b > a ? 1 : 0
					},
				},
			},
			{
				title: "Phone",
				dataIndex: "phone",
				render: (_, record) => <span>{record.phone} </span>,
			},
		]

		return loading ? (
			<Spin size="large" />
		) : (
			<Card bodyStyle={{ padding: "0px" }}>
				<Table
					onRow={(r) => ({
						onClick: () => this.onRowClickHandle(r),
					})}
					columns={tableColumns}
					dataSource={data}
					rowKey="id"
				/>
			</Card>
		)
	}
}

const mapStateToProps = ({ users }) => {
	const { data, loading } = users
	return { data, loading }
}

export default connect(mapStateToProps, { fetchUsers })(UserList)
