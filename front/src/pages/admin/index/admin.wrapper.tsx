import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Admin from '.';

function AdminWrapper() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Admin />
    </FluentProvider>
  );
}

export default AdminWrapper;
