import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./Routes";
import {GlobalStyle} from "./styles/global";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import ModalProvider from "./context/Modal";

const queryClient = new QueryClient();
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AlertProvider template={AlertTemplate} {...options}>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <GlobalStyle />
            <Routes />
          </ModalProvider>
        </ThemeProvider>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default App;
