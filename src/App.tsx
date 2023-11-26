import UserForm from "./components/UserForm";
import UsersInfoList from "./components/UsersInfoList";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <div className="flex flex-col justify-evenly items-center w-full h-screen">
        <h1 className="text-6xl">Users Info</h1>
        <UserForm />
        <UsersInfoList />
      </div>
    </Context>
  );
}

export default App;
