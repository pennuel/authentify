import { useEffect, useState } from "react";
import { useAuth } from "./context/AppContext";
import { AuthClient } from "@dfinity/auth-client";


function App() {
  const { backendActor, login, logout, isAuthenticated, identity } = useAuth();
  const [users, setUsers] = useState([]);
  const [saving , setSaving] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [principal, setPrincipal] = useState(null);

  const create_user = async () =>{
    let user = AuthClient.getIdentity();
    let principal = user.getPrincipal();
    setPrincipal(principal);
  }
  const submit = async (e) => {
    e.preventDefault();
    if (backendActor) {

    }
  };

  return (
    <main className="app-main">
      {isAuthenticated ? (
        <div className="auth-container">
          <img src="/logo2.svg" alt="DFINITY logo" className="app-logo" />
          <button
            className="
          bg-blue-500 text-white font-bold py-1 px-4 rounded-lg
          "
            onClick={logout}
          >
            Logout
          </button>
         <AuthentifyLanding />

          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block font-medium text-gray-700"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  id="age"
                  className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="30"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  onClick={submit}
                  disabled={saving}
                  className="py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
        
      ): 
        (
        <div className="login-container">
          <button className="login-btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
