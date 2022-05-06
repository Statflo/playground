import React from 'react';
import { useContainer } from './providers/ContainerProvider';
import Chat from './components/Chat';
import Main from './components/Main';
import Navigation from './components/Nav';
import Notifications from './components/Notifications';
import Right from './components/Right';
import Download from './Pages/Download';
import Log from './Pages/Log';
import ManageContact from './Pages/ManageContact';
import ManageEnv from './Pages/ManageEnv';
import ManageWidget from './Pages/ManageWidget';
import Upload from './Pages/Upload';

function App() {
  const { page } = useContainer();

  const getTitle = () => {
    switch(page) {
      case 'download':
        return 'Download';
      case 'logs':
        return 'Logs';
      case 'manageContacts':
        return 'Manage Contacts';
      case 'manageEnv':
        return 'Manage Environments';
      case 'manageWidgets':
        return 'Manage Widgets';
      case 'upload':
        return 'Upload';
      default:
        return 'Unknown';
    }
  }

  const getPage = () => {
    switch(page) {
      case 'download':
        return <Download />;
      case 'logs':
        return <Log />;
      case 'manageContacts':
        return <ManageContact />;
      case 'manageEnv':
        return <ManageEnv />;
      case 'manageWidgets':
        return <ManageWidget />;
      case 'upload':
        return <Upload />;
    }
  }

  return (
    <div className="h-full flex items-stretch flex-row overflow-hidden">
      <Navigation />
      <Chat />
      <Main title={getTitle()}>
        {getPage()}
      </Main>
      <Right />
      <Notifications />
    </div>
  );
}

export default App;
