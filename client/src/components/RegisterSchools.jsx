import { useState, useEffect } from "react";
import axios from "axios";
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiHome, FiCheckCircle, FiClock } from "react-icons/fi";
import { Table } from "./Table";
import { Layout } from "./Layout";
import { Breadcrumb } from '../components/BreadCrumb';
import { useMutation, useQuery } from "@tanstack/react-query";
import { createSchool, fetchSchools } from "../services/schoolServices";
import { useUser } from "../context/userContext";

export const RegisterSchools = () => {
	const [form, setForm] = useState({ name: "", county: "", address: "", contact: "", zoneId: "" });
	// const [schools, setSchools] = useState([]);
	const [zones, setZones] = useState([]);
	const [message, setMessage] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [search, setSearch] = useState("");
	const { token } = useUser();

	useEffect(() => {
		fetchZones();
		fetchSchools();
	}, []);

	const fetchZones = async () => {
		try {
			const res = await axios.get("/api/zones");
			setZones(Array.isArray(res.data) ? res.data : []);
		} catch (err) {
			console.error("Zone fetch failed:", err);
			setZones([]);
		}
	};

	const { data: schools = [] } = useQuery({
		queryKey: ['schools'],
		queryFn: () => fetchSchools(token),
		onError: (err) => {
			console.error("Failed to fetch schools:", err);
			setMessage("Error fetching schools.");
		},
	});

	const createSchoolMutation = useMutation({
		mutationFn: createSchool,
		onSuccess: () => {
			setMessage("School registered successfully!");
			resetForm();
		},
		onError: (err) => {
			console.error(err);
			setMessage("Error registering school.");
		},
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (isEditing) {
			// still use manual axios for PUT
			try {
				await axios.put(`/api/schools/${form.id}`, form);
				setMessage("School updated successfully!");
				resetForm();
				fetchSchools();
			} catch (err) {
				console.error(err);
				setMessage("Error updating school.");
			}
		} else {
			createSchoolMutation.mutate({ form, token });
		}
	};

	const resetForm = () => {
		setForm({ name: "", county: "", address: "", contact: "", zoneId: "" });
		setIsEditing(false);
	};

	const handleEdit = (school) => {
		setForm({ ...school, zoneId: school.zoneId || "" });
		setIsEditing(true);
	};

	const handleDelete = async (id) => {
		if (window.confirm("Delete this school?")) {
			try {
				await axios.delete(`/api/schools/${id}`);
				fetchSchools();
			} catch (err) {
				console.error("Failed to delete school:", err);
			}
		}
	};

	const filteredSchools = Array.isArray(schools)
		? schools.filter((school) => school.name?.toLowerCase().includes(search.toLowerCase()))
		: [];

	const columns = [
		{ Header: "School Name", accessor: "name" },
		{ Header: "County", accessor: "county" },
		{
			Header: "Zone",
			accessor: "zoneId",
			Cell: ({ value }) =>
				zones.find((z) => z.id === value)?.name || "No zone assigned",
		},
		{
			Header: "Status",
			accessor: "approved",
			Cell: ({ value }) =>
				value ? (
					<div className="flex items-center text-green-600 font-medium">
						<FiCheckCircle className="mr-1" />
						Approved
					</div>
				) : (
					<div className="flex items-center text-yellow-600 font-medium">
						<FiClock className="mr-1" />
						Pending
					</div>
				),
		},
		{
			Header: "Actions",
			accessor: "id",
			Cell: ({ row }) => (
				<div className="flex space-x-2">
					<button
						onClick={() => handleEdit(row.original)}
						className="text-blue-600 hover:text-blue-800"
					>
						<FiEdit2 />
					</button>
					<button
						onClick={() => handleDelete(row.original.id)}
						className="text-red-600 hover:text-red-800"
					>
						<FiTrash2 />
					</button>
				</div>
			),
		},
	];
	return (
		<Layout
			title="School Management"
			role="admin"
			breadcrumbs={[
				{ label: 'Admin Dashboard', href: '/admin-dashboard' },
				{ label: 'School Management', href: '/admin/schools' }
			]}
		>
			<div className="max-w-4xl mx-auto p-4">
				<Breadcrumb items={[{ name: "Back to Dashboard", href: "/admin-dashboard" }, { name: "Register Schools" }]} />
				<div className="bg-white rounded-xl shadow-md p-6 mb-6">
					<h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
						<FiPlus /> {isEditing ? "Edit School" : "Register New School"}
					</h2>

					{message && <div className="mb-4 text-sm font-medium text-center text-green-600">{message}</div>}

					<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<input
							name="name"
							placeholder="School Name"
							value={form.name}
							onChange={(e) => setForm({ ...form, name: e.target.value })}
							required
							className={inputField}
						/>
						<input
							name="county"
							placeholder="County"
							value={form.county}
							onChange={(e) => setForm({ ...form, county: e.target.value })}
							required
							className={inputField}
						/>
						<input
							name="contact"
							placeholder="Contact"
							value={form.contact}
							onChange={(e) => setForm({ ...form, contact: e.target.value })}
							required
							className={inputField}
						/>
						<input
							name="School Address"
							placeholder="address"
							value={form.address}
							onChange={(e) => setForm({ ...form, address: e.target.value })}
							required
							className={inputField}
						/>
						<select
							name="zoneId"
							value={form.zoneId}
							onChange={(e) => setForm({ ...form, zoneId: e.target.value })}
							className={inputField}
						>
							<option value="">-- Select Zone (Optional) --</option>
							{Array.isArray(zones) &&
								zones.map((zone) => (
									<option key={zone.id} value={zone.id}>
										{zone.name}
									</option>
								))}
						</select>

						<div className="md:col-span-2 flex gap-2">
							<button type="submit" className={btnPrimary}>
								{isEditing ? "Update School" : "Register School"}
							</button>
							{isEditing && (
								<button type="button" onClick={resetForm} className={btnSecondary}>
									Cancel
								</button>
							)}
						</div>
					</form>
				</div>

				<div className="bg-white rounded-xl shadow-md p-6">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-semibold">Registered Schools</h2>
						<div className="relative">
							<FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
							<input
								type="text"
								placeholder="Search schools..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>

					{/* fallback to empty array */}
					<Table columns={columns} data={Array.isArray(filteredSchools) ? filteredSchools : []} />
				</div>

			</div>
		</Layout>
	);
}

export default RegisterSchools;

const inputField = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
const btnPrimary = "flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition";
const btnSecondary = "flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition";