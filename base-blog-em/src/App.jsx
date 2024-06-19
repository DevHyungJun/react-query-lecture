import { Posts } from "./Posts";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const quertClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={quertClient}>
    <div className="App">
      <h1>Blog &apos;em Ipsum</h1>
      <Posts />
    </div>
    <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
