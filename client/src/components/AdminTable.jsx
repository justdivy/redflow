const AdminTable = () => {
    return (
      <div className="bg-gray-800 text-white p-6 rounded-lg mt-8 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">User Management</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">john@example.com</td>
              <td className="px-4 py-2">Admin</td>
              <td className="px-4 py-2">Active</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">jane@example.com</td>
              <td className="px-4 py-2">User</td>
              <td className="px-4 py-2">Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default AdminTable;
  