import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Table } from '../components/Table';
import  Modal  from '../components/Modal';
import { FiHome, FiMap, FiUsers, FiPlus, FiEdit, FiTrash2, FiSearch, FiFilter, FiX } from 'react-icons/fi';

const ZonesDashboard = () => {
  // Sample data - in a real app this would come from API
  const [counties, setCounties] = useState([
    { id: 1, name: 'Nairobi', zones: 5, schools: 120 },
    { id: 2, name: 'Turkana', zones: 2, schools: 15 },
    { id: 3, name: 'Mombasa', zones: 3, schools: 45 },
  ]);

  const [zones, setZones] = useState([
    { id: 1, name: 'Zone A', county: 'Nairobi', constituencies: ['Dagoretti South', 'Dagoretti North'], schools: 25, coordinator: 'Dr. Jane Smith', lecturers: 3 },
    { id: 2, name: 'Zone B', county: 'Nairobi', constituencies: ['Kibera', 'Langata'], schools: 18, coordinator: 'Prof. John Doe', lecturers: 2 },
    { id: 3, name: 'Zone 1', county: 'Turkana', constituencies: ['Lodwar Town'], schools: 8, coordinator: 'Dr. James Kariuki', lecturers: 1 },
  ]);

  const [lecturers, setLecturers] = useState([
    { id: 1, name: 'Dr. Jane Smith', email: 'jane@university.ac.ke', isZoneCoordinator: true, zones: ['Zone A'] },
    { id: 2, name: 'Prof. John Doe', email: 'john@university.ac.ke', isZoneCoordinator: true, zones: ['Zone B'] },
    { id: 3, name: 'Dr. James Kariuki', email: 'james@university.ac.ke', isZoneCoordinator: true, zones: ['Zone 1'] },
    { id: 4, name: 'Dr. Mary Wambui', email: 'mary@university.ac.ke', isZoneCoordinator: false, zones: ['Zone A'] },
  ]);

  const [schools, setSchools] = useState([
    { id: 1, name: 'Dagoretti High School', zone: 'Zone A', county: 'Nairobi', constituency: 'Dagoretti South' },
    { id: 2, name: 'Kibera Secondary', zone: 'Zone B', county: 'Nairobi', constituency: 'Kibera' },
    { id: 3, name: 'Lodwar Mixed', zone: 'Zone 1', county: 'Turkana', constituency: 'Lodwar Town' },
  ]);

  // State for modals and forms
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentZone, setCurrentZone] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('all');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    county: '',
    constituencies: [],
    coordinator: '',
    lecturers: []
  });

  // Filtered zones
  const filteredZones = zones.filter(zone => {
    const matchesSearch = zone.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         zone.county.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCounty = countyFilter === 'all' || zone.county === countyFilter;
    return matchesSearch && matchesCounty;
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle constituency addition
  const handleAddConstituency = () => {
    const input = document.getElementById('constituencyInput');
    if (input.value.trim() && !formData.constituencies.includes(input.value.trim())) {
      setFormData(prev => ({
        ...prev,
        constituencies: [...prev.constituencies, input.value.trim()]
      }));
      input.value = '';
    }
  };

  // Handle constituency removal
  const handleRemoveConstituency = (constituency) => {
    setFormData(prev => ({
      ...prev,
      constituencies: prev.constituencies.filter(c => c !== constituency)
    }));
  };

  // Create new zone
  const handleCreateZone = () => {
    const newZone = {
      id: zones.length + 1,
      name: formData.name,
      county: formData.county,
      constituencies: formData.constituencies,
      schools: 0, // Will be calculated based on actual schools
      coordinator: formData.coordinator,
      lecturers: formData.lecturers.length
    };

    setZones([...zones, newZone]);
    
    // Update lecturer roles if they're made coordinators
    const updatedLecturers = lecturers.map(lecturer => {
      if (formData.coordinator === lecturer.name) {
        return { ...lecturer, isZoneCoordinator: true, zones: [...lecturer.zones, formData.name] };
      }
      if (formData.lecturers.includes(lecturer.name)) {
        return { ...lecturer, zones: [...lecturer.zones, formData.name] };
      }
      return lecturer;
    });

    setLecturers(updatedLecturers);
    setShowCreateModal(false);
    resetForm();
  };

  // Edit zone
  const handleEditZone = () => {
    const updatedZones = zones.map(zone => {
      if (zone.id === currentZone.id) {
        return {
          ...zone,
          name: formData.name,
          county: formData.county,
          constituencies: formData.constituencies,
          coordinator: formData.coordinator,
          lecturers: formData.lecturers.length
        };
      }
      return zone;
    });

    setZones(updatedZones);
    setShowEditModal(false);
    resetForm();
  };

  // Delete zone
  const handleDeleteZone = (zoneId) => {
    if (window.confirm('Are you sure you want to delete this zone? This action cannot be undone.')) {
      setZones(zones.filter(zone => zone.id !== zoneId));
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      county: '',
      constituencies: [],
      coordinator: '',
      lecturers: []
    });
  };

  // Set up edit form
  const setupEditForm = (zone) => {
    setCurrentZone(zone);
    setFormData({
      name: zone.name,
      county: zone.county,
      constituencies: zone.constituencies,
      coordinator: zone.coordinator,
      lecturers: [] // Would need to fetch actual lecturers for this zone
    });
    setShowEditModal(true);
  };

  // Table columns
  const columns = [
    {
      Header: 'Zone Name',
      accessor: 'name',
      Cell: ({ row }) => (
        <div className="font-medium text-blue-600">{row.original.name}</div>
      )
    },
    {
      Header: 'County',
      accessor: 'county'
    },
    {
      Header: 'Constituencies',
      accessor: 'constituencies',
      Cell: ({ value }) => (
        <div className="flex flex-wrap gap-1">
          {value.map((constituency, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs">
              {constituency}
            </span>
          ))}
        </div>
      )
    },
    {
      Header: 'Schools',
      accessor: 'schools',
      Cell: ({ value }) => (
        <span className="font-medium">{value}</span>
      )
    },
    {
      Header: 'Coordinator',
      accessor: 'coordinator',
      Cell: ({ value }) => (
        <div className="text-sm text-gray-700">{value || 'Not assigned'}</div>
      )
    },
    {
      Header: 'Actions',
      accessor: 'id',
      Cell: ({ value, row }) => (
        <div className="flex space-x-2">
          <button
            onClick={() => setupEditForm(row.original)}
            className="text-blue-600 hover:text-blue-800 p-1"
            title="Edit zone"
          >
            <FiEdit />
          </button>
          <button
            onClick={() => handleDeleteZone(value)}
            className="text-red-600 hover:text-red-800 p-1"
            title="Delete zone"
          >
            <FiTrash2 />
          </button>
        </div>
      )
    }
  ];

  return (
    <Layout
      title="Zone Management"
      role="admin"
      breadcrumbs={[
        { label: 'Home', href: '/', icon: <FiHome /> },
        { label: 'Admin Dashboard', href: '/admin' },
        { label: 'Zone Management', href: '/admin/zones' }
      ]}
    >
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Zone Management</h1>
          <p className="text-gray-600">Organize schools into zones for teaching practice supervision</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <FiPlus className="mr-2" />
          Create New Zone
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium">Total Counties</h3>
          <p className="text-2xl font-bold">{counties.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium">Total Zones</h3>
          <p className="text-2xl font-bold">{zones.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
          <h3 className="text-gray-500 text-sm font-medium">Participating Schools</h3>
          <p className="text-2xl font-bold">{schools.length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search zones..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
          value={countyFilter}
          onChange={(e) => setCountyFilter(e.target.value)}
        >
          <option value="all">All Counties</option>
          {counties.map(county => (
            <option key={county.id} value={county.name}>{county.name}</option>
          ))}
        </select>
      </div>

      {/* Zones Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table
          columns={columns}
          data={filteredZones}
          initialPageSize={5}
        />
      </div>

      {/* Create Zone Modal */}
      <Modal
        isOpen={showCreateModal}
        onClose={() => {
          setShowCreateModal(false);
          resetForm();
        }}
        title="Create New Zone"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zone Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Zone A"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">County</label>
            <select
              name="county"
              value={formData.county}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select County</option>
              {counties.map(county => (
                <option key={county.id} value={county.name}>{county.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Constituencies</label>
            <div className="flex mb-2">
              <input
                type="text"
                id="constituencyInput"
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Dagoretti South"
              />
              <button
                type="button"
                onClick={handleAddConstituency}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.constituencies.map((constituency, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                  {constituency}
                  <button
                    type="button"
                    onClick={() => handleRemoveConstituency(constituency)}
                    className="ml-1 text-gray-500 hover:text-red-500"
                  >
                    <FiX size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zone Coordinator</label>
            <select
              name="coordinator"
              value={formData.coordinator}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Coordinator</option>
              {lecturers.map(lecturer => (
                <option key={lecturer.id} value={lecturer.name}>{lecturer.name} ({lecturer.email})</option>
              ))}
            </select>
          </div>
          
          <div className="pt-4 flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                setShowCreateModal(false);
                resetForm();
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCreateZone}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create Zone
            </button>
          </div>
        </div>
      </Modal>

      {/* Edit Zone Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          resetForm();
        }}
        title={`Edit ${currentZone?.name || 'Zone'}`}
      >
        {currentZone && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zone Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">County</label>
              <select
                name="county"
                value={formData.county}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {counties.map(county => (
                  <option key={county.id} value={county.name}>{county.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Constituencies</label>
              <div className="flex mb-2">
                <input
                  type="text"
                  id="constituencyInput"
                  className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g. Dagoretti South"
                />
                <button
                  type="button"
                  onClick={handleAddConstituency}
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.constituencies.map((constituency, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                    {constituency}
                    <button
                      type="button"
                      onClick={() => handleRemoveConstituency(constituency)}
                      className="ml-1 text-gray-500 hover:text-red-500"
                    >
                      <FiX size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zone Coordinator</label>
              <select
                name="coordinator"
                value={formData.coordinator}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Coordinator</option>
                {lecturers.map(lecturer => (
                  <option key={lecturer.id} value={lecturer.name}>{lecturer.name} ({lecturer.email})</option>
                ))}
              </select>
            </div>
            
            <div className="pt-4 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowEditModal(false);
                  resetForm();
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleEditZone}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default ZonesDashboard;