import { useEffect, useState } from 'react';
import { FiHome, FiPlus, FiEdit, FiTrash2, FiSearch, FiX } from 'react-icons/fi';
import { Layout } from '../components/Layout';
import { Table } from '../components/Table';
import Modal from '../components/Modal';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createNewZone, fetchAllZones, updateAZone, deleteZoneById } from '../services/zoneServices';
import { fetchAllLecturers } from '../services/lecturerServices';

const ZonesDashboard = () => {
  // Data
  const [counties, setCounties] = useState(
    [
      { id: 1, name: 'Nairobi' },
      { id: 2, name: 'Mombasa' },
      { id: 3, name: 'Kisumu' },
      { id: 4, name: 'Nakuru' },
      { id: 5, name: 'Eldoret' },
      { id: 6, name: 'Nyeri' },
      { id: 7, name: 'Meru' },
      { id: 8, name: 'Machakos' },
      { id: 9, name: 'Kakamega' },
      { id: 10, name: 'Garissa' }
    ]);

  const [zones, setZones] = useState([]);

  const [lecturers, setLecturers] = useState([]);

  // UI State
  const [showModal, setShowModal] = useState(false);
  const [currentZone, setCurrentZone] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('all');
  const [formData, setFormData] = useState({ name: '', county: '', constituencies: [], coordinator: '', lecturers: [] });

  // Helpers
  const filteredZones = zones.filter(zone =>
    (
      zone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      zone.county.toLowerCase().includes(searchTerm.toLowerCase())
    ) &&
    (
      countyFilter.toLowerCase() === 'all' ||
      zone.county.toLowerCase() === countyFilter.toLowerCase()
    )
  );

  // Fetch lecturers
  const { data: allLecturers, isLoading: lecturersLoading, isError: lecturersError } = useQuery({
    queryKey: ['lecturers'],
    queryFn: fetchAllLecturers,
    staleTime: 5 * 60 * 1000,
    onSuccess: (data) => {
      const names = data.map(l => l?.user.name);
      setLecturers(names);
    },
    onError: (error) => {
      console.error("Error fetching lecturers:", error);
      alert("Failed to load lecturers. Please try again later.");
    }
  });
  useEffect(() => {
    if (allLecturers) {
      const names = allLecturers.map(l => (
        {
          name: l?.user?.fullName,
          id: l.id,
          email: l?.user?.email,
        }
      )
      );
      setLecturers(names);
    }
  }, [allLecturers]);

  // Fetch all zones
  const { data: allZones, isLoading, isError } = useQuery({
    queryKey: ['zones'],
    queryFn: fetchAllZones,
    staleTime: 5 * 60 * 1000,
    onSuccess: (allZones) => {
      setZones(allZones);
    },
    onError: (error) => {
      console.error("Error fetching zones:", error);
      alert("Failed to load zones. Please try again later.");
    }
  });
  useEffect(() => {
    if (allZones) {
      setZones(allZones);
    }
  }, [allZones]);
  // useEffect(() => {
  //   if (!zones || zones.length === 0) return;

  //   const countyMap = {};

  //   zones.forEach(zone => {
  //     const { county, schools = 0 } = zone;

  //     if (!countyMap[county]) {
  //       countyMap[county] = {
  //         id: Object.keys(countyMap).length + 1,
  //         name: county,
  //         zones: 1,
  //         schools: schools || 0,
  //       };
  //     } else {
  //       countyMap[county].zones += 1;
  //       countyMap[county].schools += schools || 0;
  //     }
  //   });

  //   setCounties(Object.values(countyMap));
  // }, [zones]);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleConstituency = (action, constituency) => {
    if (action === 'add' && constituency && !formData.constituencies.includes(constituency)) {
      setFormData(prev => ({ ...prev, constituencies: [...prev.constituencies, constituency] }));
    } else if (action === 'remove') {
      setFormData(prev => ({ ...prev, constituencies: prev.constituencies.filter(c => c !== constituency) }));
    }
  };

  const resetForm = () => setFormData({ name: '', county: '', constituencies: [], coordinator: '', lecturers: [] });

  // CRUD Operations
  const { mutate: createZone } = useMutation({
    mutationFn: createNewZone,
    onSuccess: (newZone) => {
      setZones(prev => [...prev, newZone]);
      setShowModal(false);
      resetForm();
    },
    onError: (error) => {
      console.error("Error creating zone:", error);
      alert("Failed to create zone. Please try again.");
    }
  });

  const { mutate: updateZone } = useMutation({
    mutationFn: ({ id, data }) => updateAZone(id, data),
    onSuccess: (updatedZone) => {
      setZones(prev => prev.map(z => z.id === updatedZone.id ? updatedZone : z));
      setShowModal(false);
      resetForm();
    },
    onError: (error) => {
      console.error("Error updating zone:", error);
      alert("Failed to update zone. Please try again.");
    }
  });

  const { mutate: deleteZone } = useMutation({
    mutationFn: (id) => deleteZoneById(id),
    onSuccess: (deletedZone) => {
      setZones(prev => prev.filter(z => z.id !== deletedZone.id));
      setShowModal(false);
      resetForm();
    },
    onError: (error) => {
      console.error("Error deleting zone:", error);
      alert("Failed to delete zone. Please try again.");
    }
  });
  const handleZone = (action, zone) => {
    if (action === 'create') {
      createZone({
        name: formData.name,
        county: formData.county,
        constituencies: formData.constituencies,
        coordinatorId: formData.coordinator,
        lecturers: formData.lecturers,
      });
    } else if (action === 'update') {
      const updatedZone = {
        id: zone.id,
        name: formData.name,
        county: formData.county,
        constituencies: formData.constituencies,
        coordinatorId: formData.coordinator,
        lecturers: formData.lecturers,
      };
      updateZone({ id: zone.id, data: { ...updatedZone } });
    } else if (action === 'delete' && window.confirm(`Are you sure you want to delete the zone "${zone.name}"? This action cannot be undone.`)) {
      try {
        deleteZone(zone.id);
      } catch (error) {
        console.error("Error deleting zone:", error);
        alert("Failed to delete zone. Please try again.");
      }
    }
    setShowModal(false);
    resetForm();
  };

  const setupEdit = (zone) => {
    setCurrentZone(zone);
    setFormData({
      name: zone.name,
      county: zone.county,
      constituencies: zone.constituencies,
      coordinator: zone.coordinator,
      lecturers: []
    });
    setShowModal(true);
  };

  // Table Config
  const columns = [
    { Header: 'Zone Name', accessor: 'name', Cell: ({ row }) => <div className="font-medium text-blue-600">{row.original.name}</div> },
    { Header: 'County', accessor: 'county' },
    {
      Header: 'Constituencies',
      accessor: 'constituencies',
      Cell: ({ value }) => <div className="flex flex-wrap gap-1">
        {value?.map((c, i) => <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xs">{c}</span>)}
      </div>
    },
    { Header: 'Schools', accessor: 'schools', Cell: ({ value }) => <span className="font-medium">{value}</span> },
    { Header: 'Coordinator', accessor: 'coordinator', Cell: ({ value }) => <div className="text-sm text-gray-700">{value || 'Not assigned'}</div> },
    {
      Header: 'Actions',
      accessor: 'id',
      Cell: ({ value, row }) => <div className="flex space-x-2">
        <button onClick={() => setupEdit(row.original)} className="text-blue-600 hover:text-blue-800 p-1" title="Edit"><FiEdit /></button>
        <button onClick={() => handleZone('delete', row.original)} className="text-red-600 hover:text-red-800 p-1" title="Delete"><FiTrash2 /></button>
      </div>
    }
  ];

  console.log("Counties:", counties);

  return (
    <Layout
      title="Zone Management"
      role="admin"
      breadcrumbs={[
        { label: 'Home', href: '/', icon: <FiHome /> },
        { label: 'Admin Dashboard', href: '/admin-dashboard' },
        { label: 'Zone Management', href: '/admin/zones' }
      ]}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Zone Management</h1>
          <p className="text-gray-600">Organize schools into zones for teaching practice supervision</p>
        </div>
        <button onClick={() => setShowModal(true)} className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          <FiPlus className="mr-2" /> Create New Zone
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total Counties', value: new Set(zones.map(z => z.county)).size, border: 'border-blue-500' },
          { label: 'Total Zones', value: zones?.length, border: 'border-green-500' },
          { label: 'Participating Schools', value: zones.reduce((acc, zone) => acc + zone.schools, 0), border: 'border-purple-500' }
        ].map((stat, i) => (
          <div key={i} className={`bg-white p-4 rounded-lg shadow border-l-4 ${stat.border}`}>
            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FiSearch className="text-gray-400" /></div>
          <input type="text" placeholder="Search zones..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
          value={countyFilter} onChange={(e) => setCountyFilter(e.target.value)}>
          <option value="all">All Counties</option>
          {counties.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
        </select>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table columns={columns} data={zones} initialPageSize={5} />
      </div>

      <Modal isOpen={showModal} onClose={() => {
        setShowModal(false);
        setCurrentZone(null);
        resetForm();
      }}
        title={currentZone ? `Edit ${currentZone.name}` : 'Create New Zone'}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zone Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">County</label>
            <select name="county" value={formData.county} onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select County</option>
              {counties.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Constituencies</label>
            <div className="flex mb-2">
              <input type="text" id="constituencyInput" className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500" />
              <button type="button" onClick={() => handleConstituency('add', document.getElementById('constituencyInput').value)}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.constituencies.map((c, i) => (
                <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                  {c}
                  <button type="button" onClick={() => handleConstituency('remove', c)} className="ml-1 text-gray-500 hover:text-red-500"><FiX size={14} /></button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zone Coordinator</label>
            <select name="coordinator" value={formData.coordinator} onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select Coordinator</option>
              {lecturers.map(l => <option key={l.id} value={l.id}>{l.name} ({l.email})</option>)}
            </select>
          </div>

          <div className="pt-4 flex justify-end space-x-3">
            <button type="button" onClick={() => { setShowModal(false); resetForm(); }}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</button>
            <button type="button" onClick={() => handleZone(currentZone ? 'update' : 'create', currentZone)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {currentZone ? 'Save Changes' : 'Create Zone'}
            </button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default ZonesDashboard;