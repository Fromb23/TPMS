import { FiUser, FiMail, FiPhone, FiBook, FiMapPin, FiEdit2, FiLock, FiUnlock } from 'react-icons/fi';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getLecturerById, updateLecturerStatus } from '../services/lecturerServices';
import { fetchAllZones } from '../services/zoneServices';
import { useUser } from '../context/userContext';

const LecturerProfile = () => {
	const navigate = useNavigate();
	const { lecturerId } = useParams();
	const queryClient = useQueryClient();
	const [zone, setZone] = useState('');
	const [activeTab, setActiveTab] = useState('info');
	const [editingZone, setEditingZone] = useState(false);
	const { token } = useUser();

	const { data: zones = [] } = useQuery({
		queryKey: ['zones'],
		queryFn: () => fetchAllZones(token),
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
		onError: (err) => {
			console.error("Failed to fetch zones:", err);
		},
		enabled: !!token,
	});

	const { data: lecturer, isLoading } = useQuery({
		queryKey: ['lecturer', lecturerId],
		queryFn: () => getLecturerById(lecturerId),
	});

	const assignedZone = zones.find(z => z?.coordinatorId === lecturer?.id);
	console.log("Assigned Zone:", assignedZone);

	const { mutate: updateStatus } = useMutation({
		mutationFn: updateLecturerStatus,
		onSuccess: (updatedLecturer) => {
			queryClient.setQueryData(['lecturer', updatedLecturer.id], updatedLecturer);
			queryClient.invalidateQueries(['lecturers']);
		}
	});

	const onClose = () => {
		navigate(-1);
	};

	const handleStatusChange = (type) => {
		if (!lecturer) return;
		updateStatus({
			id: lecturer.id,
			[type]: !lecturer[type]
		});
	};

	const getInitials = (fullName) => fullName?.split(' ').map(n => n[0]).join('').toUpperCase();

	if (isLoading || !lecturer) return <div className="p-4">Loading lecturer...</div>;

	return (
		<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
			<div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
				{/* Header */}
				<div className="flex justify-between items-center border-b p-4">
					<div className="flex items-center space-x-3">
						<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
							<span className="text-blue-700 font-bold text-lg">
								{getInitials(lecturer?.user?.fullName)}
							</span>
						</div>
						<div>
							<h2 className="text-xl font-semibold text-blue-700">{lecturer?.user?.fullName}</h2>
							<p className="text-gray-500 text-sm">{lecturer?.department}</p>
						</div>
					</div>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-red-600 text-2xl transition-colors"
					>
						&times;
					</button>
				</div>

				{/* Tabs */}
				<div className="flex border-b px-4">
					<button
						className={`px-4 py-2 rounded-t font-medium text-sm transition-colors ${activeTab === 'info' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
							}`}
						onClick={() => setActiveTab('info')}
					>
						Profile
					</button>
				</div>

				{/* Content */}
				<div className="p-4 max-h-[70vh] overflow-y-auto text-sm">
					<div className="space-y-4">
						{/* Status Section */}
						<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
							<div>
								<p><strong>Staff ID:</strong> {lecturer.id}</p>
								<p className="flex items-center mt-1">
									Status:
									<span className={`ml-2 px-2 py-1 rounded text-xs ${lecturer.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
										}`}>
										{lecturer.isActive ? 'Active' : 'Inactive'}
									</span>
								</p>
							</div>
							<div className="flex flex-wrap gap-2">
								<button
									onClick={() => handleStatusChange('isBlocked')}
									className={`px-3 py-1 rounded-md text-sm flex items-center transition-colors ${lecturer?.user?.isBlocked ? 'bg-red-100 text-red-700 hover:bg-red-200'
											: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
										}`}
								>
									{lecturer?.user?.isBlocked ? <FiLock className="mr-1" /> : <FiUnlock className="mr-1" />}
									{lecturer?.user?.isBlocked ? 'Blocked' : 'Block'}
								</button>
								<button
									onClick={() => handleStatusChange('isActive')}
									className={`px-3 py-1 rounded-md text-sm transition-colors ${lecturer?.user?.isActive ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
											: 'bg-blue-100 text-blue-700 hover:bg-blue-200'
										}`}
								>
									{lecturer?.user?.isActive ? 'Deactivate' : 'Activate'}
								</button>
							</div>
						</div>

						{/* Department & Zone Section */}
						<div className="border-t pt-4 space-y-4">
							<p className="flex items-center text-sm">
								<FiBook className="mr-2 text-green-600" />
								<span className="font-medium">Department:</span>&nbsp;{lecturer.department}
							</p>

							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
								<span className="flex items-center">
									<span className="font-medium mr-1">Assigned Zone:</span>
									{assignedZone?.name || 'Not assigned'}
								</span>

								{editingZone ? (
									<div className="flex flex-col sm:flex-row items-center gap-2">
										<select
											value={zone}
											onChange={(e) => setZone(e.target.value)}
											className="border rounded-md px-3 py-2 text-sm w-full sm:w-auto"
										>
											<option value="">Select Zone</option>
											{zones.map((z) => (
												<option key={z.id} value={z.id}>{z.name}</option>
											))}
										</select>
										<div className="flex gap-2">
											<button
												onClick={() => setEditingZone(false)}
												className="text-blue-600 font-medium hover:underline"
											>
												Save
											</button>
											<button
												onClick={() => setEditingZone(false)}
												className="text-gray-500 hover:underline"
											>
												Cancel
											</button>
										</div>
									</div>
								) : (
									<button
										onClick={() => setEditingZone(true)}
										className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
									>
										<FiEdit2 size={14} className="ml-2" />
									</button>
								)}
							</div>
						</div>

						{/* Contact Section */}
						<div className="border-t pt-3 space-y-2">
							<h3 className="font-medium flex items-center">
								<FiMail className="mr-2" /> Contact
							</h3>
							<p className="ml-6">Email: {lecturer?.user?.email || 'Not provided'}</p>
							<p className="ml-6 flex items-center">
								<FiPhone className="mr-2" /> Phone: {lecturer.phone || 'Not provided'}
							</p>
						</div>

						{/* Assignment Section */}
						<div className="border-t pt-3 space-y-2">
							<h3 className="font-medium flex items-center">
								<FiMapPin className="mr-2" /> Assignment
							</h3>
							<p className="ml-6">Schools Supervised: {lecturer.schoolsCount || 0}</p>
							<p className="ml-6">Students Mentored: {lecturer.studentsCount || 0}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LecturerProfile;