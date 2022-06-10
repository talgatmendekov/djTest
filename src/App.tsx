import { theme } from './utils/helpers/typography'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { Layout } from './layout/Layout'
import { AppRoutes } from './routes/AppRoutes'

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Layout>
            <AppRoutes />
         </Layout>
      </ThemeProvider>
   )
}

export default App
