import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ComplianceWrapper } from './components/ComplianceWrapper';
import { PatientDashboard } from './components/PatientDashboard';
import { ProviderDashboard } from './components/ProviderDashboard';
import { VideoCall } from './components/VideoCall';
import { SecureMessaging } from './components/SecureMessaging';
import { HIPAALogger } from './utils/hipaaLogger';

// Initialize HIPAA compliant logging
const logger = new HIPAALogger({
  enabled: true,
  auditLevel: 'all',
  encryptLogs: true
});

function App() {
  return (
    <AuthProvider>
      <ComplianceWrapper>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/patient" element={<PatientDashboard />} />
              <Route path="/provider" element={<ProviderDashboard />} />
              <Route path="/call/:sessionId" element={<VideoCall />} />
              <Route path="/messages" element={<SecureMessaging />} />
            </Routes>
          </div>
        </Router>
      </ComplianceWrapper>
    </AuthProvider>
  );
}

export default App;