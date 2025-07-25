import { FiUser, FiMail, FiPhone, FiBook, FiMapPin, FiEdit2, FiLock, FiUnlock, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getLecturerById, updateLecturerStatus } from '@/services/lecturerServices';
import { fetchAllZones } from '@/services/zoneServices';
import { useUser } from '@/contexts/userContext';
import Button from '@/components/ui/Button/Button';
import Select from '@/components/ui/Select/Select';
import LoadingComponent from '@/components/LoadingComponent';

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

	if (isLoading || !lecturer) return <LoadingComponent message="Loading lecturer profile..." />;

	return (
		<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
			<div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
				{/* Header */}
				<div className="flex justify-between items-center border-b p-4 bg-blue-50">
					<div className="flex items-center gap-3">
						<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
							{getInitials(lecturer?.user?.fullName)}
						</div>
						<div>
							<h2 className="text-lg font-semibold text-blue-800">{lecturer?.user?.fullName}</h2>
							<p className="text-sm text-gray-500">{lecturer?.department}</p>
						</div>
					</div>
					<Button
						fullWidth={false}
						onClick={onClose}
						variant="dangerOutline"
						icon={<FiX />}
					/>
				</div>

				{/* Tabs */}
				<div className="flex border-b px-4 py-2 bg-gray-50">
					<Button
						fullWidth={false}
						variant={activeTab === 'info' ? 'primary' : 'ghost'}
						onClick={() => setActiveTab('info')}
					>
						Profile
					</Button>
				</div>

				{/* Content */}
				<div className="p-6 max-h-[70vh] overflow-y-auto text-sm space-y-6">
					{/* Status */}
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
						<div>
							<p><strong>Staff ID:</strong> {lecturer.id}</p>
							<p className="flex items-center mt-1">
								Status:
								<span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${lecturer.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
									{lecturer.isActive ? 'Active' : 'Inactive'}
								</span>
							</p>
						</div>
						<div className="flex flex-wrap gap-2">
							<Button
								fullWidth={false}
								onClick={() => handleStatusChange('isBlocked')}
								variant={lecturer?.user?.isBlocked ? 'dangerOutline' : 'outline'}
								className="px-3 py-1 text-sm flex items-center gap-1"
							>
								{lecturer?.user?.isBlocked ? <FiLock /> : <FiUnlock />}
								{lecturer?.user?.isBlocked ? 'Blocked' : 'Block'}
							</Button>
							<Button
								fullWidth={false}
								onClick={() => handleStatusChange('isActive')}
								variant={lecturer?.user?.isActive ? 'outline' : 'primary'}
								className="px-3 py-1 text-sm"
							>
								{lecturer?.user?.isActive ? 'Deactivate' : 'Activate'}
							</Button>
						</div>
					</div>

					{/* Department & Zone */}
					<div className="border-t pt-4 space-y-4">
						<p className="flex items-center text-sm">
							<FiBook className="mr-2 text-green-600" />
							<span className="font-medium">Department:</span>&nbsp;{lecturer.department}
						</p>

						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
							<span className="text-sm">
								<span className="font-medium">Assigned Zone:</span> {assignedZone?.name || 'Not assigned'}
							</span>

							{editingZone ? (
								<div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
									<Select
										value={zone}
										onChange={(e) => setZone(e.target.value)}
										options={zones.map((z) => ({ label: z.name, value: z.id }))}
										className="w-full sm:w-48"
									/>
									<div className="flex gap-2">
										<Button fullWidth={false} onClick={() => setEditingZone(false)} className="text-blue-600 hover:underline">
											Save
										</Button>
										<Button fullWidth={false} onClick={() => setEditingZone(false)} className="text-gray-500 hover:underline">
											Cancel
										</Button>
									</div>
								</div>
							) : (
								<Button
									fullWidth={false}
									onClick={() => setEditingZone(true)}
									className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
								>
									<FiEdit2 size={14} /> Edit
								</Button>
							)}
						</div>
					</div>

					{/* Contact Info */}
					<div className="border-t pt-4 space-y-2">
						<h3 className="font-medium flex items-center text-base">
							<FiMail className="mr-2" /> Contact
						</h3>
						<p className="ml-6">Email: {lecturer?.user?.email || 'Not provided'}</p>
						<p className="ml-6 flex items-center">
							<FiPhone className="mr-2" /> Phone: {lecturer.phone || 'Not provided'}
						</p>
					</div>

					{/* Assignment Info */}
					<div className="border-t pt-4 space-y-2">
						<h3 className="font-medium flex items-center text-base">
							<FiMapPin className="mr-2" /> Assignment
						</h3>
						<p className="ml-6">Schools Supervised: {lecturer.schoolsCount || 0}</p>
						<p className="ml-6">Students Mentored: {lecturer.studentsCount || 0}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LecturerProfile;