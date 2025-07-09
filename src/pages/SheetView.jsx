import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  CardFooter,
  Chip,
} from "@material-tailwind/react";

const SHEET_API_URL = "https://script.google.com/macros/s/AKfycb.../exec";
const CORRECT_PASSWORD = "123";

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sampleData = [
    {
      name: "Surya Kumar",
      phone: "9876543456",
      email: "surya@gmail.com",
      message: "Interested in helium balloons for birthday party",
      status: "incomplete",
      date: "2023-10-15",
      id: 1
    },
    {
      name: "Priya Sharma",
      phone: "8765432109",
      email: "priya.s@outlook.com",
      message: "Need quote for wedding decorations next month",
      status: "completed",
      date: "2023-10-12",
      id: 2
    },
    {
      name: "Rahul Mehta",
      phone: "7654321098",
      email: "rahul.m@yahoo.com",
      message: "Looking for custom balloon arrangements",
      status: "incomplete",
      date: "2023-10-10",
      id: 3
    },
    {
      name: "Anjali Patel",
      phone: "6543210987",
      email: "anjali.p@gmail.com",
      message: "Inquiry about balloon delivery services",
      status: "completed",
      date: "2023-10-08",
      id: 4
    }
  ];

  useEffect(() => {
    if (authenticated) {
      setLoading(true);
      setTimeout(() => {
        setData(sampleData);
        setLoading(false);
      }, 1000);
    }
  }, [authenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setAuthenticated(true);
    } else {
      setError("Invalid password. Please try again.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const updateStatus = (id, newStatus) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phone.includes(searchTerm) ||
    item.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.includes(searchTerm.toLowerCase())
  );

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
        <Card className="w-full max-w-md p-8 shadow-2xl">
          <div className="text-center mb-8">
            <Typography variant="h3" color="blue-gray" className="mb-2">
              RK Balloons
            </Typography>
            <Typography variant="lead">Admin Dashboard Login</Typography>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 rounded-lg text-red-700">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <Input
                type="password"
                label="Enter Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="!border-t-blue-gray-200 focus:!border-blue-500"
                containerProps={{ className: "min-w-[100px]" }}
              />
            </div>
            <Button type="submit" fullWidth className="bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Typography variant="h4" color="blue-gray">
            RK Balloons - Admin Dashboard
          </Typography>
          <Button variant="text" color="gray" onClick={() => setAuthenticated(false)}>
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        {/* Search and Controls */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              label="Search inquiries..."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Button variant="gradient" color="blue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Modify Content
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-sm border border-blue-50">
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Total Inquiries
              </Typography>
              <Typography variant="h3">
                {data.length}
              </Typography>
            </CardBody>
          </Card>
          <Card className="shadow-sm border border-green-50">
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Completed
              </Typography>
              <Typography variant="h3">
                {data.filter(item => item.status === "completed").length}
              </Typography>
            </CardBody>
          </Card>
          <Card className="shadow-sm border border-orange-50">
            <CardBody>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Pending
              </Typography>
              <Typography variant="h3">
                {data.filter(item => item.status === "incomplete").length}
              </Typography>
            </CardBody>
          </Card>
        </div>

        {/* Inquiry Cards */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item) => (
              <Card key={item.id} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardBody>
                  <div className="flex justify-between items-start mb-4">
                    <Typography variant="h5" color="blue-gray">
                      {item.name}
                    </Typography>
                    <Chip
                      value={item.status}
                      color={item.status === "completed" ? "green" : "orange"}
                      size="sm"
                    />
                  </div>

                  <Typography className="mb-2">
                    <strong>Date:</strong> {item.date}
                  </Typography>
                  <Typography className="mb-2">
                    <strong>Phone:</strong> {item.phone}
                  </Typography>
                  <Typography className="mb-2">
                    <strong>Email:</strong> {item.email}
                  </Typography>

                  <div className="mt-4 p-3 bg-blue-gray-50 rounded-lg">
                    <Typography variant="small" color="blue-gray" className="font-medium mb-1">
                      Message:
                    </Typography>
                    <Typography variant="small">
                      {item.message}
                    </Typography>
                  </div>
                </CardBody>
                <CardFooter className="pt-0 flex justify-end gap-2">
                  {item.status === "incomplete" ? (
                    <Button
                      variant="gradient"
                      color="green"
                      size="sm"
                      onClick={() => updateStatus(item.id, "completed")}
                    >
                      Mark Complete
                    </Button>
                  ) : (
                    <Button
                      variant="gradient"
                      color="orange"
                      size="sm"
                      onClick={() => updateStatus(item.id, "incomplete")}
                    >
                      Mark Pending
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white py-6 mt-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <Typography variant="small" color="blue-gray">
            © 2023 RK Balloons Admin Dashboard. All rights reserved.
          </Typography>
        </div>
      </footer>
    </div>
  );
}
