import { Table } from "antd";
import {
  useBanUserMutation,
  useGetUsersQuery,
  useMakeAdminMutation,
  useRemoveAdminMutation,
  useUnbanUserMutation,
} from "../../redux/features/user/userApi.js";
import ListLoading from "../Loader/ListLoading.jsx";
import { useState } from "react";

const UserList = () => {
  const { data, isLoading, isError, error } = useGetUsersQuery();
  const users = data?.data || [];
  const [makeAdmin, { isLoading: loading }] = useMakeAdminMutation();
  const [removeAdmin, { isLoading: removeLoading }] = useRemoveAdminMutation();
  const [banUser, { isLoading: banLoading }] = useBanUserMutation();
  const [unbanUser, { isLoading: unbanLoading }] = useUnbanUserMutation();
  const [searchText, setSearchText] = useState("");

  //update status
  const handleMakeAdmin = (id) => {
    makeAdmin(id);
  };

  const handleRemoveAdmin = (id) => {
    removeAdmin(id);
  };

  const handleBanUser = (id) => {
    banUser(id);
  };

  const handleUnbanUser = (id) => {
    unbanUser(id);
  };

  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.email).toLowerCase().includes(value.toLowerCase()) ||
          String(record.role).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
    {
      title: "Banned/Unbanned",
      dataIndex: "banned",
    },
  ];

  const tableData = [];

  if (!isLoading && !isError && users?.length > 0) {
    for (let i = 0; i < users.length; i++) {
      tableData.push({
        key: Number(i + 1),
        name: users[i]?.firstName + " " + users[i]?.lastName,
        email: users[i]?.email,
        role: users[i]?.role,
        action: (
          <>
            {users[i]?.role === "user" ? (
              <button
                disabled={loading}
                onClick={() => handleMakeAdmin(users[i]?._id)}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
              >
                Make Admin
              </button>
            ) : (
              <button
                disabled={removeLoading}
                onClick={() => handleRemoveAdmin(users[i]?._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
              >
                Remove Admin
              </button>
            )}
          </>
        ),
        banned: (
          <>
            {users[i]?.isBanned === true ? (
              <button
                disabled={unbanLoading}
                onClick={() => handleUnbanUser(users[i]?._id)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
              >
                Unban User
              </button>
            ) : (
              <button
                disabled={banLoading}
                onClick={() => handleBanUser(users[i]?._id)}
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
              >
                Ban User
              </button>
            )}
          </>
        ),
      });
    }
  }

  return (
    <>
      <div>
        <h1 className="text-center text-2xl lg:text-3xl font-bold mb-5 italic">
          Users List
        </h1>
        {isLoading ? (
          <>
            <ListLoading />
          </>
        ) : (
          <>
            <div className="px-2 shadow-md rounded-md">
              <div className="lg:px-4 w-auto overflow-x-auto flex flex-col sm:flex-row justify-between gap-3 py-4">
                <input
                  type="text"
                  className="h-full px-3 py-2 text-base text-gray-900 outline-none border-2 border-gray-300 md:w-3/4 lg:w-1/3 rounded-md"
                  placeholder="Search..."
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <div className="w-auto overflow-x-auto">
                <Table
                  scroll={{ x: true, y: 400 }}
                  columns={columns}
                  dataSource={tableData}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserList;
