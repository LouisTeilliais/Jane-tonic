import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import AdminIndex from '.';

function AdminIndexWrapper() {
  return (
    <FluentProvider theme={webLightTheme}>
      <AdminIndex />
    </FluentProvider>
  );
}

export default AdminIndexWrapper;
