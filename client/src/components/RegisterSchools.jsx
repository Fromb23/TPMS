import { useState, useEffect } from "react";
import axios from "axios";
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiHome, FiCheckCircle, FiClock } from "react-icons/fi";
import { Table } from "@/components/Table";
import { Layout } from "@/components/Layout";
import { Breadcrumb } from '@/components/BreadCrumb';
import { useMutation, useQuery } from "@tanstack/react-query";
import { createSchool, fetchSchools, updateRegisteredSchool, deleteRegisteredSchool } from "@/services/schoolServices";
import { useUser } from "@/contexts/userContext";
import Button from "@/components/ui/Button/Button";
import Select from "@/components/ui/Select/Select";
import Input from "@/components/ui/Input/Input";
import Form from "@/components/ui/Form/Form";
import LoadingComponent from "@/components/LoadingComponent";

export const RegisterSchools = () => {
	const [form, setForm] = useState({ name: "", county: "", constituency: "", address: "", contact: "", zoneId: "" });
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

	const inputFields = [
		{ name: "name", placeholder: "School Name" },
		{ name: "county", placeholder: "County" },
		{ name: "constituency", placeholder: "Constituency" },
		{ name: "contact", placeholder: "Contact" },
		{ name: "address", placeholder: "School Address" },
	];
	const fetchZones = async () => {
		try {
			const res = await axios.get("/api/zones");
			setZones(Array.isArray(res.data) ? res.data : []);
		} catch (err) {
			console.error("Zone fetch failed:", err);
			setZones([]);
		}
	};

	const { data: schools = [], isLoading, isError } = useQuery({
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

	const editSchoolMutation = useMutation({
		mutationFn: updateRegisteredSchool,
		onSuccess: () => {
			setMessage("School updated successfully!");
			resetForm();
		},
		onError: (err) => {
			console.error(err);
			setMessage("Error updating school.");
		},
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (isEditing) {
			editSchoolMutation.mutate({ form, token });

		} else {
			createSchoolMutation.mutate({ form, token });
		}
	};

	const resetForm = () => {
		setForm({ name: "", county: "", constituency: "", address: "", contact: "", zoneId: "" });
		setIsEditing(false);
	};

	const handleEdit = (school) => {
		setForm({ ...school, zoneId: school.zoneId || "" });
		setIsEditing(true);
	};

	const deleteSchoolMutation = useMutation({
		mutationFn: deleteRegisteredSchool,
		onSuccess: () => {
			setMessage("School deleted successfully!");
			fetchSchools();
		},
		onError: (err) => {
			console.error(err);
			setMessage("Error deleting school.");
		},
		enabled: !!token,
	});

	const handleDelete = (schoolId) => {
		if (window.confirm("Are you sure you want to delete this school?")) {
			deleteSchoolMutation.mutate({ schoolId, token });
			resetForm();
		}
	};

	const filteredSchools = Array.isArray(schools)
		? schools.filter((school) => school.name?.toLowerCase().includes(search.toLowerCase()))
		: [];

	const columns = [
		{ Header: "School Name", accessor: "name" },
		{ Header: "County", accessor: "county" },
		{ Header: "Constituency", accessor: "constituency" },
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

	if (isLoading) {
		return <LoadingComponent message="Loading schools..." />;
	}

	if (isError) {
		return (
			<div className="text-center text-red-600 font-semibold py-6">
				An error occurred while fetching schools. Please try again later.
			</div>
		);
	}

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

					{message && (
						<div className="mb-4 text-sm font-medium text-center text-green-600">
							{message}
						</div>
					)}

					<Form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{inputFields.map(({ name, placeholder }) => (
							<Input
								key={name}
								name={name}
								placeholder={placeholder}
								value={form[name]}
								onChange={(e) => setForm({ ...form, [name]: e.target.value })}
								required
								className={inputField}
							/>
						))}
						<Select
							name="zoneId"
							label="Select Zone (Optional)"
							value={form.zoneId}
							onChange={(e) => setForm({ ...form, zoneId: e.target.value })}
							options={zones}
							className={inputField}
						/>

						<div className="md:col-span-2 flex gap-2">
							<Button type="submit" variant="primary">
								{isEditing ? "Update School" : "Register School"}
							</Button>
							{isEditing && (
								<Button type="button" onClick={resetForm} variant="dangerOutline">
									Cancel
								</Button>
							)}
						</div>
					</Form>
				</div>

				<div className="bg-white rounded-xl shadow-md p-6">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-semibold">Registered Schools</h2>
						<div className="relative">
							<FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
							<Input
								type="text"
								fullWidth
								placeholder="Search schools..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>

					<Table
						columns={columns}
						data={Array.isArray(filteredSchools) ? filteredSchools : []}
						pageSize={50}
					/>
				</div>

			</div>
		</Layout>
	);
}

export default RegisterSchools;

const inputField = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";